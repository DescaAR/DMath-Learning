/**
 * Finite Cayley tables used by the group-axiom explorer.
 * All arithmetic is exact integer arithmetic for 2 <= n <= 12.
 */
export type GroupMode="add"|"units"|"multiply";
export type FiniteOperation={
  n:number;
  mode:GroupMode;
  elements:number[];
  identity:number;
  table:number[][];
  inverses:(number|null)[];
  closed:boolean;
  associative:boolean;
  commutative:boolean;
  isGroup:boolean;
};

export function gcd(a:number,b:number):number{
  a=Math.abs(a);b=Math.abs(b);
  while(b!==0){const r=a%b;a=b;b=r;}
  return a;
}

export function finiteOperation(n:number,mode:GroupMode):FiniteOperation{
  if(!Number.isInteger(n)||n<2||n>12)throw new RangeError("n must be an integer between 2 and 12");
  const elements=mode==="units"
    ?Array.from({length:n-1},(_,i)=>i+1).filter(x=>gcd(x,n)===1)
    :Array.from({length:n},(_,i)=>i);
  const identity=mode==="add"?0:1;
  const op=(a:number,b:number)=>mode==="add"?(a+b)%n:(a*b)%n;
  const table=elements.map(a=>elements.map(b=>op(a,b)));
  const closed=table.every(row=>row.every(value=>elements.includes(value)));
  const associative=elements.every(a=>elements.every(b=>elements.every(c=>
    op(op(a,b),c)===op(a,op(b,c)))));
  const commutative=elements.every(a=>elements.every(b=>op(a,b)===op(b,a)));
  const inverses=elements.map(a=>elements.find(b=>
    op(a,b)===identity&&op(b,a)===identity)??null);
  const hasIdentity=elements.includes(identity)&&elements.every(a=>
    op(a,identity)===a&&op(identity,a)===a);
  return {n,mode,elements,identity,table,inverses,closed,associative,
    commutative,isGroup:closed&&associative&&hasIdentity&&inverses.every(x=>x!==null)};
}
