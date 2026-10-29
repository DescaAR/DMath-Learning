export type ComplexSetMode = "disk"|"closed"|"annulus"|"punctured"|"disconnected";
export type ComplexPoint = readonly [number,number];

/** Mathematical predicates used by the complex-plane topology SVG. */
export function isInComplexSet(mode:ComplexSetMode,[x,y]:ComplexPoint,innerRadius=1):boolean{
  const radius=Math.hypot(x,y);
  if(mode==="disk")return radius<2;
  if(mode==="closed")return radius<=2;
  if(mode==="annulus")return innerRadius<radius&&radius<2;
  if(mode==="punctured")return 0<radius&&radius<2;
  return Math.hypot(x+1.6,y)<0.9||Math.hypot(x-1.6,y)<0.9;
}

export const complexSetFacts:Record<ComplexSetMode,{
  label:string;open:boolean;closed:boolean;pathConnected:boolean;domain:boolean;simplyConnectedDomain:boolean;
}> = {
  disk:{label:"Cakram terbuka",open:true,closed:false,pathConnected:true,domain:true,simplyConnectedDomain:true},
  closed:{label:"Cakram tertutup",open:false,closed:true,pathConnected:true,domain:false,simplyConnectedDomain:false},
  annulus:{label:"Anulus",open:true,closed:false,pathConnected:true,domain:true,simplyConnectedDomain:false},
  punctured:{label:"Cakram berlubang",open:true,closed:false,pathConnected:true,domain:true,simplyConnectedDomain:false},
  disconnected:{label:"Dua cakram terpisah",open:true,closed:false,pathConnected:false,domain:false,simplyConnectedDomain:false},
};
