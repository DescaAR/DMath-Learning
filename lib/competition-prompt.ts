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
