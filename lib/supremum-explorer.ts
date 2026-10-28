/** Exact statements in the lesson, with finite numeric witnesses for the SVG. */
export type IntervalPreset={label:string;x:number;y:number;left:string;right:string};
export const densityIntervals:IntervalPreset[]=[
  {label:"(0, 0.1)",x:0,y:0.1,left:"0",right:"1/10"},
  {label:"(1.4, 1.5)",x:1.4,y:1.5,left:"7/5",right:"3/2"},
  {label:"(√2, 1.5)",x:Math.SQRT2,y:1.5,left:"√2",right:"3/2"},
  {label:"(−2.1, −2)",x:-2.1,y:-2,left:"−21/10",right:"−2"}
];

/** For finite inputs x<y, choose n(y-x)>1, then m=floor(nx)+1. */
export function rationalWitness(x:number,y:number){
  if(!Number.isFinite(x)||!Number.isFinite(y)||!(x<y))throw new Error("Expected finite x<y");
  // The extra margin prevents binary floating-point rounding at exact decimal gaps.
  const n=Math.ceil(1/(y-x))+2;
  const m=Math.floor(n*x)+1;
  return {m,n,value:m/n};
}

/** Archimedean witness for nonnegative x (the interactive slider's domain). */
export function naturalWitness(x:number){
  if(!Number.isFinite(x)||x<0)throw new Error("Expected finite nonnegative x");
  return Math.floor(x)+1;
}

export type SqrtBracket={lower:number;upper:number;steps:number;initialUpper:number};
export function sqrtBracket(a:number,steps:number):SqrtBracket{
  if(!Number.isFinite(a)||a<=0||!Number.isInteger(steps)||steps<0||steps>32)
    throw new Error("Expected a>0 and an integer number of steps from 0 to 32");
  const initialUpper=Math.max(1,a);
  let lower=0,upper=initialUpper;
  for(let k=0;k<steps;k++){
    const mid=(lower+upper)/2;
    if(mid*mid<a)lower=mid;
    else if(mid*mid>a)upper=mid;
    else{lower=mid;upper=mid;}
  }
  return {lower,upper,steps,initialUpper};
}
