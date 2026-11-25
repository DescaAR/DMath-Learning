// Shared, pure parser used by the question UI and its build-time audit.
function proseMask(input: string) {
 return input.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)/g, m => "~".repeat(m.length));
}

export function splitCompetitionPrompt(prompt: string) {
 const masked=proseMask(prompt);
 const marker=/\s+Pilihan\s*:\s*(?=A\.\s)/i.exec(masked);
 if(!marker)return null;
 const offset=marker.index+marker[0].length;
 const tail=prompt.slice(offset), prose=masked.slice(offset);
 const markers=Array.from(prose.matchAll(/(?:^|;\s*)([A-Z])\.\s+/g));
 if(markers.length<2 || markers.some((m,i)=>m[1]!==String.fromCharCode(65+i)))return null;
 const options=markers.map((m,i)=>tail.slice(m.index!+m[0].length,markers[i+1]?.index??tail.length).trim());
 if(options.some(o=>!o))return null;
 return {question:prompt.slice(0,marker.index).trim(),options};
}

// Detect a complete, consecutive sequence of lettered subparts outside math.
export function splitSubquestions(prompt: string) {
 const markers=Array.from(proseMask(prompt).matchAll(/(?:^|\s)\(([a-z])\)(?=\s)/g));
 if(markers.length<2 || markers.some((m,i)=>m[1]!==String.fromCharCode(97+i)))return null;
 const parts=markers.map((m,i)=>({label:m[1],text:prompt.slice(m.index!+m[0].length,markers[i+1]?.index??prompt.length).trim()}));
 if(parts.some(p=>!p.text))return null;
 return {intro:prompt.slice(0,markers[0].index).trim(),parts};
}

// Presentation only: retain the archived question and all TeX tokens unchanged.
// A short, single-line formula flows with the sentence; long or stacked math
// remains a display block. Blank lines around display math are redundant.
export function compactCompetitionMath(prompt: string): string {
 const display = /([ \t\r\n]*)(?:\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\])([ \t\r\n]*)/g;
 prompt = smoothMNPair(stripCompetitionEmphasis(prompt));
 // Consecutive displayed equations are a group, not independent inline
 // fragments. Preserve their original layout (systems, conditions, lists).
 const blocks = Array.from(prompt.matchAll(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]/g));
 const grouped = new Set<number>();
 for (let i = 1; i < blocks.length; i++) {
  const previous = blocks[i - 1], current = blocks[i];
  if (!prompt.slice(previous.index! + previous[0].length, current.index!).trim()) {
   grouped.add(previous.index!);
   grouped.add(current.index!);
  }
 }
 return prompt.replace(display, (match, before: string, dollarTex: string | undefined, bracketTex: string | undefined, after: string, offset: number) => {
  const tex = (dollarTex ?? bracketTex ?? "").trim();
  const stacked = /\\(?:begin|end|substack|atop|over|cases|displaystyle|tag|notag|nonumber)\b|\\\\/.test(tex) || /[\r\n]/.test(tex);
  const approximateWidth = tex.replace(/\\(?:left|right|,|;|!|:)/g, "").replace(/\\[a-zA-Z]+/g, "X").replace(/[{}^_\s]/g, "").length;
  const short = !grouped.has(offset + before.length) && !stacked && approximateWidth <= 44 && tex.length <= 120 && !tex.includes("$");
  if (!short) {
   // Keep a separator when a display borders another math token.
   const end = offset + match.length - after.length;
   const left = before && /[$\])]/.test(prompt[offset - 1] ?? "") ? "\n" : "";
   const right = after && /^(?:\$|\\\[|\\\()/.test(prompt.slice(end + after.length)) ? "\n" : "";
   return left + "$" + tex + "$" + right;
  }
  const left = before && offset > 0 ? " " : "";
  const next = prompt[offset + match.length] ?? "";
  const right = after && next && !/^[,.;:!?)]$/.test(next) ? " " : "";
  return left + "$" + tex + "$" + right;
 });
}

// Remove literal Markdown emphasis from prose only; do not modify math or archived source.
export function stripCompetitionEmphasis(prompt: string): string {
 const math = /(\$\$[\s\S]+?\$\$|\$[^$\n]+\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;
 return prompt.split(math).map((part, i) => i % 2 ? part : part.replace(/\*\*([^*\r\n]+?)\*\*/g, "$1").replace(/(?<!\*)\*([A-Za-z][^*\r\n]*?)\*(?!\*)/g, "$1")).join("");
}

// Join the two coefficients of a line-integral question to the preceding sentence.
// The archived prompt and both mathematical expressions remain unchanged.
export function smoothMNPair(prompt: string): string {
 return prompt.replace(/\.\s*\$\$\s*(M\s*=[^$]+?)\\(?:qquad|quad)\s*(N\s*=[^$]+?)\s*\$\$(?=\s*$)/g, (_match, m: string, n: string) => ", dengan $" + m.trim() + "$ dan $" + n.trim() + "$.");
}
