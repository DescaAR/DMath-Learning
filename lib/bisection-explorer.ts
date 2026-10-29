/** Pure arithmetic for the bisection explorer. All guarantees in the lesson assume exact real arithmetic. */
export type BisectionKey="square"|"cubic"|"cosine"|"linear"|"tangent";
export type BisectionStep={index:number;a:number;b:number;mid:number;fa:number;fb:number;fm:number;nextA:number;nextB:number};
export const bisectionCases:{
  key:BisectionKey;label:string;a:number;b:number;description:string
}[]=[
  {key:"square",label:"x² − 2",a:1,b:2,description:"Akar √2; tanda ujung berbeda."},
  {key:"cubic",label:"x³ − x − 2",a:1,b:2,description:"Akar kubik pada (1,2)."},
  {key:"cosine",label:"cos(x) − x",a:0,b:1,description:"Akar unik pada (0,1)."},
  {key:"linear",label:"x − 1",a:0,b:2,description:"Akar ditemukan tepat di titik tengah."},
  {key:"tangent",label:"(x − 1)²",a:0,b:2,description:"Memuat akar tetapi tidak ada perubahan tanda."}
];
export function evaluateBisection(key:BisectionKey,x:number):number{
  switch(key){
    case "square":return x*x-2;
    case "cubic":return x*x*x-x-2;
    case "cosine":return Math.cos(x)-x;
    case "linear":return x-1;
    case "tangent":return (x-1)*(x-1);
  }
}
export function runBisection(key:BisectionKey,steps:number){
  if(!Number.isInteger(steps)||steps<0||steps>24)throw new RangeError("Invalid number of bisection steps");
  const config=bisectionCases.find(item=>item.key===key);
  if(!config)throw new RangeError("Unknown function");
  let a=config.a,b=config.b;
  let fa=evaluateBisection(key,a),fb=evaluateBisection(key,b);
  const history:BisectionStep[]=[];
  if(fa===0)return {valid:true,history,a,b:a,mid:a,bound:0,rootAt:a,initialA:config.a,initialB:config.b};
  if(fb===0)return {valid:true,history,a:b,b,mid:b,bound:0,rootAt:b,initialA:config.a,initialB:config.b};
  if(!(fa*fb<0))return {valid:false,history,a,b,mid:(a+b)/2,bound:null,rootAt:null,initialA:config.a,initialB:config.b};
  let rootAt:number|null=null;
  for(let i=0;i<steps;i++){
    const mid=a+(b-a)/2;
    const fm=evaluateBisection(key,mid);
    let nextA=a,nextB=b;
    if(fm===0){rootAt=mid;nextA=mid;nextB=mid;}
    else if(fa*fm<0){nextB=mid;}
    else {nextA=mid;}
    history.push({index:i+1,a,b,mid,fa,fb,fm,nextA,nextB});
    a=nextA;b=nextB;
    fa=evaluateBisection(key,a);fb=evaluateBisection(key,b);
    if(rootAt!==null)break;
  }
  return {valid:true,history,a,b,mid:a+(b-a)/2,bound:rootAt!==null?0:(b-a)/2,rootAt,initialA:config.a,initialB:config.b};
}
