export type ThesisProofDirection = {
  direction:"forward"|"backward";
  known:string;
  target:string;
  steps:string[];
};
export type ThesisProofTarget = {target:string;steps:string[];known?:string;title?:string};

export type ParsedProof = {
  known?:string;
  goal?:string;
  introduction:string[];
  paragraphs:string[];
  directions:ThesisProofDirection[];
  targets:ThesisProofTarget[];
  alreadyConcluded:boolean;
};

function normalizeText(source:string){
  return source.replace(/\r\n?/g,"\n").trim()
    .replace(/^(?:Bukti|Pembuktian|Proof)\.\s*/i,"").trim();
}

function readPrefixed(text:string,prefix:"Diketahui"|"Dibuktikan"){
  const pattern=prefix==="Diketahui"?/^Diketahui(?: bahwa)?\s*([\s\S]*)$/i:/^Dibuktikan(?: bahwa)?\s*([\s\S]*)$/i;
  return text.match(pattern)?.[1]?.trim()??null;
}

function partitionNarrative(raw:string[]){
  const blocks:string[]=[];
  // Split only at the starts of explicitly marked proof parts.
  // Never split a TeX display or an ordinary sentence in the middle.
  for(const entry of raw){
    const lines=normalizeText(entry).split("\n");
    let buffer:string[]=[];
    const flush=()=>{if(buffer.length){blocks.push(buffer.join("\n").trim());buffer=[];}};
    for(const line of lines){
      const cut=/^(?:Diketahui\b|Dibuktikan\b|Pembuktian dilakukan\b|\([1-9]\d*\)\s|\((?:⇒|⇐)\)\s|(?:[1-9]\d*)\.\s+(?:Dibuktikan|Ditunjukkan))/.test(line.trimStart());
      if(cut)flush();
      if(line.trim())buffer.push(line);
      else if(buffer.length)buffer.push("");
      // A proof's known data and target must never absorb later reasoning.
      if(/^(?:Diketahui|Dibuktikan)(?: bahwa)?\b/.test(line.trimStart()))flush();
    }
    flush();
  }
  return blocks.filter(Boolean);
}

/**
 * Detect proof structure without inventing mathematical premises.
 * Existing paragraphs, formula displays, or proof sections are retained.
 */
export function parseThesisProof(raw:string[]):ParsedProof{
  const blocks=partitionNarrative(raw);
  let known:string|undefined;
  let goal:string|undefined;
  const introduction:string[]=[];
  const paragraphs:string[]=[];
  const directions:ThesisProofDirection[]=[];
  const targets:ThesisProofTarget[]=[];
  let currentDirection:ThesisProofDirection|null=null;
  let currentTarget:ThesisProofTarget|null=null;
  let seenBody=false;
  const append=(piece:string)=>{
    if(currentDirection)currentDirection.steps.push(piece);
    else if(currentTarget)currentTarget.steps.push(piece);
    else paragraphs.push(piece);
    seenBody=true;
  };
  for(const block of blocks){
    const piece=block.trim();
    const arrow=piece.match(/^\((⇒|⇐)\)\s*([\s\S]*)$/);
    if(arrow){
      const direction=arrow[1]==="⇒"?"forward":"backward";
      const remaining=arrow[2].trim();
      const match=remaining.match(/^Diketahui(?: bahwa)?\s*([\s\S]*?)\s+Dibuktikan(?: bahwa)?\s*([\s\S]*)$/);
      const entry:ThesisProofDirection={
        direction,known:match?.[1]?.trim()??"",target:match?.[2]?.trim()??"",steps:[]
      };
      if(!match&&remaining){
        const partialKnown=readPrefixed(remaining,"Diketahui");
        const partialGoal=readPrefixed(remaining,"Dibuktikan");
        if(partialKnown!==null)entry.known=partialKnown;
        else if(partialGoal!==null)entry.target=partialGoal;
        else entry.steps.push(remaining);
      }
      directions.push(entry);
      currentDirection=entry;
      currentTarget=null;
      continue;
    }
    const targetMatch=piece.match(/^(?:\(([1-9]\d*)\)|([1-9]\d*)\.)\s*([\s\S]*)$/);
    if(targetMatch){
      const header=targetMatch[3].replace(/^(?:Dibuktikan|Ditunjukkan)(?: bahwa)?\s*/,"").trim();
      const entry:ThesisProofTarget={target:header,title:header,steps:[]};
      targets.push(entry);
      currentTarget=entry;
      currentDirection=null;
      continue;
    }
    const provided=readPrefixed(piece,"Diketahui");
    if(provided!==null){
      if(currentDirection){
        currentDirection.known=provided;
      }else if(currentTarget){
        currentTarget.known=provided;
      }else if(!known&&!seenBody){
        known=provided;
      }else append(piece);
      continue;
    }
    const requested=readPrefixed(piece,"Dibuktikan");
    if(requested!==null){
      if(currentDirection){
        currentDirection.target=requested;
      }else if(currentTarget){
        currentTarget.target=requested;
      }else if(!goal&&!seenBody){
        goal=requested;
      }else append(piece);
      continue;
    }
    if(/^Pembuktian dilakukan\b/i.test(piece)){
      introduction.push(piece);
      continue;
    }
    append(piece);
  }
  // Never drop a direction or a numbered part whose target was not explicit.
  const structuredDirections=directions.length>=2&&directions.every(item=>item.known&&item.target);
  if(!structuredDirections&&directions.length){
    for(const item of directions){
      paragraphs.push("("+ (item.direction==="forward"?"⇒":"⇐") +")"+
        (item.known?" Diketahui "+item.known:"")+
        (item.target?" Dibuktikan "+item.target:""));
      paragraphs.push(...item.steps);
    }
    directions.length=0;
  }
  const structuredTargets=targets.length>0&&targets.every(item=>item.target);
  if(!structuredTargets&&targets.length){
    for(let i=0;i<targets.length;i++){
      paragraphs.push("("+(i+1)+") "+targets[i].target);
      paragraphs.push(...targets[i].steps);
    }
    targets.length=0;
  }
  const allLines=[...paragraphs,...directions.flatMap(x=>x.steps),...targets.flatMap(x=>x.steps)];
  const allLast=allLines.length?allLines[allLines.length-1]:"";
  const alreadyConcluded=/(?:\bterbukti\.?\s*$|\bproved\.?\s*$|■\s*$)/i.test(allLast);
  return {known,goal,introduction,paragraphs,directions,targets,alreadyConcluded};
}