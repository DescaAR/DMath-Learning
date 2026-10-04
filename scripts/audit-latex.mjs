import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const files=[];

const walk=(dir)=>{
  if(!fs.existsSync(dir)) return;
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory()) walk(full);
    else if(/\.(tsx?|mjs)$/.test(entry.name)) files.push(full);
  }
};

walk(path.join(root,"data"));

const failures=[];

for(const file of files){
  const source=fs.readFileSync(file,"utf8");
  const lines=source.split("\n");

  lines.forEach((line,index)=>{
    const mathSegments=[...line.matchAll(/\$(?![$\{])(.*?)(?<!\\)\$/g)];

    for(const match of mathSegments){
      if(/(?<!\\)\\(?!\\)/.test(match[1])){
        failures.push(
          path.relative(root,file)+":"+(index+1)+
          ": unescaped LaTeX backslash inside $...$."
        );
        break;
      }
    }

    if(/(?<!\\)\\[()\[\]]/.test(line)){
      failures.push(
        path.relative(root,file)+":"+(index+1)+
        ": TeX delimiter \\( \\) \\[ or \\] must be escaped in TypeScript source."
      );
    }
  });
}

if(failures.length){
  console.error("DMath LaTeX audit failed:\n"+failures.map(x=>" - "+x).join("\n"));
  process.exit(1);
}

console.log("DMath LaTeX audit passed.");
