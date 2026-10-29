/** Exact solution and explicit Euler samples for y'=b-a*y, y(0)=y0. */
export type LinearOdeParams={a:number;b:number;y0:number;T:number;steps:number};
export type OdePoint={t:number;y:number};
export type LinearOdeTrajectory={
  exact:OdePoint[];
  euler:OdePoint[];
  equilibrium:number|null;
  step:number;
  factor:number;
  stableToEquilibrium:boolean|null;
  errorAtEnd:number;
};
export function exactLinearOde(a:number,b:number,y0:number,t:number):number{
  if(a===0)return y0+b*t;
  const eq=b/a;
  return eq+(y0-eq)*Math.exp(-a*t);
}
export function linearOdeTrajectory({a,b,y0,T,steps}:LinearOdeParams):LinearOdeTrajectory{
  if(![a,b,y0,T,steps].every(Number.isFinite)||T<=0||!Number.isInteger(steps)||steps<1||steps>200)
    throw new RangeError("Invalid first-order ODE parameters");
  const h=T/steps;
  const factor=1-a*h;
  const euler:OdePoint[]=[{t:0,y:y0}];
  for(let k=0;k<steps;k++){
    const y=euler[k].y;
    euler.push({t:(k+1)*h,y:y+h*(b-a*y)});
  }
  const exact=Array.from({length:121},(_,k)=>{
    const t=T*k/120;
    return {t,y:exactLinearOde(a,b,y0,t)};
  });
  return {
    exact,euler,
    equilibrium:a===0?null:b/a,
    step:h,
    factor,
    stableToEquilibrium:a>0?Math.abs(factor)<1:null,
    errorAtEnd:Math.abs(euler[steps].y-exactLinearOde(a,b,y0,T))
  };
}
