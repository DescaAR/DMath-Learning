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

// Detect consecutive enumerations in prose, never inside TeX. Keep the
// original marker (e.g. (1), (ii), a).) rather than renumbering the source.
export function splitSubquestions(prompt: string) {
 const masked=proseMask(prompt);
 const roman=["i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"];
 const patterns=[
  {re:/(?:^|\s)(\(([a-z]+)\)\.?)(?=\s)/g,labels:"abcdefghijklmnopqrstuvwxyz".split(""),lineOnly:false},
  {re:/(?:^|\s)(\(([ivx]+)\)\.?)(?=\s)/g,labels:roman,lineOnly:false},
  {re:/(?:^|\s)(\((\d+)\)\.?)(?=\s)/g,labels:Array.from({length:30},(_,i)=>String(i+1)),lineOnly:false},
  {re:/(?:^|\n)[ \t]*((\d+)[.)])(?=\s)/g,labels:Array.from({length:30},(_,i)=>String(i+1)),lineOnly:true},
  {re:/(?:^|\n)[ \t]*(([a-z]+)\)\.?|([a-z])\.)(?=\s)/g,labels:"abcdefghijklmnopqrstuvwxyz".split(""),lineOnly:true},
 ];
 const lists=patterns.flatMap(({re,labels,lineOnly})=>{
  const markers=Array.from(masked.matchAll(re)).flatMap(m=>{
   const marker=m[1],label=m[2]??m[3],offset=m.index!+m[0].length-marker.length;
   const before=masked.slice(0,offset);
   // Inline enumeration starts at a sentence/condition boundary. In
   // particular, "barisan (1)" and "equation (2)" are references, not items.
   const lineStart=/(?:^|\n)[ \t]*$/.test(before);
   const boundary=lineStart||/[.:;!?]\s*$/.test(before)||/~\s*$/.test(before);
   if(!labels.includes(label)||(!lineOnly&&!boundary))return [];
   return [{marker,label,offset,end:offset+marker.length}];
  });
  if(markers.length<2||markers.some((m,i)=>m.label!==labels[i]))return [];
  const parts=markers.map((m,i)=>({label:m.label,marker:m.marker,text:prompt.slice(m.end,markers[i+1]?.offset??prompt.length).trim()}));
  if(parts.some(p=>!p.text))return [];
  return [{intro:prompt.slice(0,markers[0].offset).trim(),parts,offset:markers[0].offset}];
 });
 if(!lists.length)return null;
 const {intro,parts}=lists.sort((a,b)=>a.offset-b.offset||b.parts.length-a.parts.length)[0];
 return {intro,parts};
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
   return left + "$$" + tex + "$$" + right;
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


// Hide an equation number only when the complete statement never refers to it.
// Keep the archived TeX untouched and retain labels required by later prose.
export function hideUnusedEquationTags(prompt: string): string {
 const tag = /\\tag\*?\{([0-9]+|\*)\}/g;
 const rest = prompt.replace(tag, "");
 return prompt.replace(tag, (original, label: string) => {
  const referenced = rest.includes("(" + label + ")") ||
   rest.includes("\\eqref{" + label + "}") ||
   rest.includes("\\ref{" + label + "}") ||
   rest.includes("[" + label + "]");
  return referenced ? original : "";
 });
}
