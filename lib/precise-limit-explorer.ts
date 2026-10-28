/**
 * Pure mathematics for the epsilon–delta visualization.
 * Each threshold is the largest valid radius for the displayed epsilon.
 * Quadratic mode uses a=2, f(x)=x² and 0<epsilon<=1.5.
 */
export type LimitMode = "linear"|"quadratic"|"hole"|"jump";
export const limitModes:LimitMode[]=["linear","quadratic","hole","jump"];
export type LimitExperiment={
  mode:LimitMode;epsilon:number;scale:number;a:number;L:number;
  threshold:number;delta:number;valid:boolean;
  witnessX:number|null;witnessY:number|null;
};
export function evaluateLimitFunction(mode:LimitMode,x:number):number|null{
  if(mode==="linear")return 3*x+1;
  if(mode==="quadratic")return x*x;
  if(mode==="hole")return x===1?null:x+1;
  return x<0?0:1;
}
export function limitExperiment(mode:LimitMode,epsilon:number,scale:number):LimitExperiment{
  if(!Number.isFinite(epsilon)||epsilon<=0||epsilon>1.5)throw new Error("epsilon must be in (0,1.5]");
  if(!Number.isFinite(scale)||scale<=0||scale>3)throw new Error("scale must be in (0,3]");
  const a=mode==="linear"||mode==="quadratic"?2:mode==="hole"?1:0;
  const L=mode==="linear"?7:mode==="quadratic"?4:mode==="hole"?2:0.5;
  const threshold=mode==="linear"?epsilon/3:
    mode==="quadratic"?Math.sqrt(4+epsilon)-2:
    mode==="hole"?epsilon:0;
  const delta=(mode==="jump"?0.25:threshold)*scale;
  const valid=mode!=="jump"&&delta<=threshold;
  // For invalid modes, explicitly construct x with 0<|x-a|<delta
  // whose function value lies outside the epsilon-band.
  const witnessX=valid?null:mode==="jump"?a+delta/2:a+(threshold+delta)/2;
  const witnessY=witnessX===null?null:evaluateLimitFunction(mode,witnessX);
  return {mode,epsilon,scale,a,L,threshold,delta,valid,witnessX,witnessY};
}
