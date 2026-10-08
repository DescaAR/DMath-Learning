/** Formatting helpers for mathematical solutions. They do not synthesize proof steps. */
export function comparableSolutionText(value:string){
  return value.trim().replace(/\s+/g," ").replace(/[.!?]+$/g,"").toLocaleLowerCase();
}
export function uniqueSolutionParagraphs(values:string[]){
  const used=new Set<string>();
  return values.map(text=>text.trim()).filter(text=>{
    const key=comparableSolutionText(text);
    if(!key||used.has(key))return false;
    used.add(key);
    return true;
  });
}
export function prepareAcademicSolution(
  steps:string[],idea?:string,conclusion?:string
){
  const paragraphs=uniqueSolutionParagraphs(steps);
  const ideaText=idea?.trim()??"";
  const candidateIdea=comparableSolutionText(ideaText);
  const independentIdea=ideaText && !paragraphs.some(step=>{
    const p=comparableSolutionText(step);
    return p===candidateIdea||p.includes(candidateIdea);
  })?ideaText:undefined;
  const conclusionText=conclusion?.trim()??"";
  const candidateConclusion=comparableSolutionText(conclusionText);
  const independentConclusion=conclusionText&&!paragraphs.some(
    step=>comparableSolutionText(step)===candidateConclusion
  )?conclusionText:undefined;
  return {paragraphs,independentIdea,independentConclusion};
}
export function normalizeAcademicConnector(value:string){
  return value.replace(/^(Jadi|Maka|Sehingga)(?=\s|,)/,match=>
    match==="Jadi"?"Dengan demikian":match==="Maka"?"Oleh karena itu":"Dengan demikian");
}
/** Preserve authored paragraphs. Never infer a new "conclusion" from the final line. */
export function splitAcademicSolution(text:string){
  const lines=text.replace(/\r/g,"").split(/\n\s*\n|\n(?=\s*\([a-z]\)\s)/)
    .map(x=>x.trim()).filter(Boolean);
  return lines.length?lines:[text.trim()].filter(Boolean);
}
