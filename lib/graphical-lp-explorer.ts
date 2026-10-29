export type LPVertex={x:number;y:number;label:string};
export const lpVertices:LPVertex[]=[
  {x:0,y:0,label:"O"},{x:3,y:0,label:"A"},
  {x:2,y:3,label:"B"},{x:0,y:4,label:"C"}
];
export function lpFeasible(x:number,y:number,tol=1e-10){
  return Number.isFinite(x)&&Number.isFinite(y)&&x>=-tol&&y>=-tol&&
    x+2*y<=8+tol&&3*x+y<=9+tol;
}
export function analyzeGraphicalLP(c1:number,c2:number){
  if(!Number.isInteger(c1)||!Number.isInteger(c2)||c1<1||c1>6||c2<1||c2>8)
    throw new RangeError("Coefficients must be positive integers in the displayed ranges.");
  const values=lpVertices.map(v=>({...v,z:c1*v.x+c2*v.y}));
  const maximum=Math.max(...values.map(v=>v.z));
  const winners=values.filter(v=>v.z===maximum);
  const lambda1=(3*c2-c1)/5,lambda2=(2*c1-c2)/5;
  const certificate=lambda1>=0&&lambda2>=0?{lambda1,lambda2,bound:8*lambda1+9*lambda2}:null;
  return {values,maximum,winners,certificate};
}
