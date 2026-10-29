export type RelationKey="equality"|"lessEqual"|"cycle"|"fixed"|"missing"|"all";
export const relationPresets:{key:RelationKey;label:string;description:string}[]=[
  {key:"equality",label:"Kesamaan x = y",description:"Setiap baris mempunyai satu saksi berbeda; tidak ada kolom yang seluruhnya benar untuk n ≥ 2."},
  {key:"lessEqual",label:"Ketaksamaan x ≤ y",description:"Kolom y = n merupakan saksi seragam, sedangkan baris x = 1 benar untuk semua y."},
  {key:"cycle",label:"Suksesor siklik",description:"Setiap baris dan kolom memiliki tepat satu saksi, tetapi tidak ada saksi seragam untuk n ≥ 2."},
  {key:"fixed",label:"Kolom tetap y = 1",description:"Semua x mempunyai satu saksi seragam, tetapi kolom lain tidak memiliki saksi."},
  {key:"missing",label:"Baris terakhir kosong",description:"Baris x = n tidak memiliki saksi; pernyataan universal–eksistensial salah."},
  {key:"all",label:"Relasi semesta",description:"Semua pasangan memenuhi relasi; seluruh urutan kuantor campuran benar."}
];
export function relationValue(key:RelationKey,x:number,y:number,n:number):boolean{
  if(!Number.isInteger(n)||n<2||n>8||!Number.isInteger(x)||!Number.isInteger(y)||x<1||y<1||x>n||y>n)throw new RangeError("Indeks relasi harus berada dalam {1,...,n}, 2 ≤ n ≤ 8.");
  switch(key){
    case "equality":return x===y;
    case "lessEqual":return x<=y;
    case "cycle":return y===x%n+1;
    case "fixed":return y===1;
    case "missing":return x<n&&x===y;
    case "all":return true;
    default:throw new RangeError("Relasi tidak dikenal");
  }
}
export type RelationAnalysis={
  matrix:boolean[][];
  rowWitnesses:number[][];
  columnWitnesses:number[][];
  uniformY:number[];
  uniformX:number[];
  everyXSomeY:boolean;
  someYEveryX:boolean;
  everyYSomeX:boolean;
  someXEveryY:boolean;
  negationEveryXSomeY:boolean;
  negationSomeYEveryX:boolean;
};
export function analyzeRelation(key:RelationKey,n:number):RelationAnalysis{
  if(!Number.isInteger(n)||n<2||n>8)throw new RangeError("Ukuran domain harus bulat antara 2 dan 8.");
  const matrix=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>relationValue(key,i+1,j+1,n)));
  const rowWitnesses=matrix.map(row=>row.flatMap((ok,j)=>ok?[j+1]:[]));
  const columnWitnesses=Array.from({length:n},(_,j)=>matrix.flatMap((row,i)=>row[j]?[i+1]:[]));
  const uniformY=columnWitnesses.flatMap((xs,j)=>xs.length===n?[j+1]:[]);
  const uniformX=rowWitnesses.flatMap((ys,i)=>ys.length===n?[i+1]:[]);
  return {
    matrix,rowWitnesses,columnWitnesses,uniformY,uniformX,
    everyXSomeY:rowWitnesses.every(ys=>ys.length>0),
    someYEveryX:uniformY.length>0,
    everyYSomeX:columnWitnesses.every(xs=>xs.length>0),
    someXEveryY:uniformX.length>0,
    negationEveryXSomeY:rowWitnesses.some(ys=>ys.length===0),
    negationSomeYEveryX:columnWitnesses.every(xs=>xs.length<n)
  };
}
