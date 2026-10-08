import type { BookExample } from "@/data/book-content-types";
import { moreDefinitionExamples } from "@/data/definition-examples-part2";
import { realAnalysisDefinitionExamples } from "@/data/definition-examples-part3";

/**
 * Explicitly authored examples keyed to a subject and a definition.
 * Never pair a definition with an unrelated exercise merely because
 * the examples and definitions have the same array index.
 */
const examples:Record<string,BookExample>={
  "analisis-real:Kesamaan Himpunan":{
    title:"Dua Representasi Himpunan yang Sama",
    forDefinition:"Kesamaan Himpunan",
    problem:"Periksa apakah $A=\\{x\\in\\mathbb Z:|x|\\le2\\}$ sama dengan $B=\\{-2,-1,0,1,2\\}$.",
    solution:["Jika $x\\in A$, sifat $|x|\\le2$ dan $x\\in\\mathbb Z$ memaksa $x$ menjadi salah satu dari $-2,-1,0,1,2$. Jadi $A\\subseteq B$.","Setiap elemen $B$ merupakan bilangan bulat dengan nilai mutlak paling besar 2, sehingga $B\\subseteq A$.","Kedua inklusi menunjukkan bahwa $A=B$."],
    conclusion:"Kesamaan himpunan diperiksa dengan dua inklusi."
  },
  "analisis-real:Fungsi":{
    title:"Pemetaan dan Keunikan Nilai",
    forDefinition:"Fungsi",
    problem:"Tentukan apakah relasi $R=\\{(1,a),(2,b),(2,c)\\}$ dari $\\{1,2\\}$ ke $\\{a,b,c\\}$ merupakan fungsi.",
    solution:["Input $1$ hanya dipasangkan dengan $a$.","Input $2$ dipasangkan dengan dua nilai berbeda, yaitu $b$ dan $c$.","Definisi fungsi mensyaratkan setiap input mempunyai tepat satu nilai keluaran."],
    conclusion:"Relasi $R$ bukan fungsi."
  },
  "analisis-real:Injektif, Surjektif, dan Bijektif":{
    title:"Menguji Bijektivitas",
    forDefinition:"Injektif, Surjektif, dan Bijektif",
    problem:"Periksa apakah $f:\\mathbb R\\to\\mathbb R$, $f(x)=2x+3$, bijektif.",
    solution:["Jika $f(a)=f(b)$ maka $2a+3=2b+3$, sehingga $a=b$; jadi $f$ injektif.","Untuk setiap $y\\in\\mathbb R$, pilih $x=(y-3)/2$.","Substitusi memberi $f(x)=2(y-3)/2+3=y$, sehingga $f$ surjektif."],
    conclusion:"$f$ bijektif."
  },
  "teori-ukuran-probabilitas:Sigma-Algebra":{
    title:"Sigma-Algebra Hingga",
    forDefinition:"Sigma-Algebra",
    problem:"Untuk $X=\\{1,2,3\\}$, periksa apakah $\\mathcal A=\\{\\varnothing,\\{1\\},\\{2,3\\},X\\}$ merupakan sigma-algebra.",
    solution:["$X$ dan $\\varnothing$ berada dalam $\\mathcal A$.","Komplemen $\\{1\\}$ adalah $\\{2,3\\}$, dan sebaliknya; komplemen $X$ adalah $\\varnothing$.","Karena keluarga hingga ini berasal dari semua gabungan blok partisi $\\{\\{1\\},\\{2,3\\}\\}$, setiap gabungan terhitung anggotanya tetap dalam $\\mathcal A$."],
    conclusion:"$\\mathcal A$ merupakan sigma-algebra."
  },
  "teori-ukuran-probabilitas:Sistem $\\pi$ dan Sistem $\\lambda$":{
    title:"Membedakan Sistem π dan λ",
    forDefinition:"Sistem $\\pi$ dan Sistem $\\lambda$",
    problem:"Pada $X=\\{1,2,3\\}$, periksa apakah $\\mathcal P=\\{\\varnothing,\\{1\\},X\\}$ merupakan sistem $\\pi$ dan apakah ia merupakan sistem $\\lambda$.",
    solution:["Irisan sebarang dua anggota $\\mathcal P$ tetap salah satu dari $\\varnothing,\\{1\\},X$, jadi $\\mathcal P$ tertutup terhadap irisan hingga.","Keluarga ini memuat $X$, tetapi komplemen $\\{1\\}$ adalah $\\{2,3\\}\\notin\\mathcal P$.","Syarat komplemen sistem $\\lambda$ gagal."],
    conclusion:"$\\mathcal P$ adalah sistem $\\pi$, tetapi bukan sistem $\\lambda$."
  },
  "teori-ukuran-probabilitas:Ukuran":{
    title:"Counting Measure pada Himpunan Hingga",
    forDefinition:"Ukuran",
    problem:"Pada $X=\\{a,b,c\\}$ dengan sigma-algebra $2^X$, definisikan $\\mu(A)=|A|$. Tentukan $\\mu(\\{a,c\\})$ dan periksa sifat aditif untuk himpunan saling lepas.",
    solution:["Jumlah elemen $\\{a,c\\}$ adalah 2, sehingga $\\mu(\\{a,c\\})=2$.","Untuk $A,B\\subseteq X$ saling lepas berlaku $|A\\cup B|=|A|+|B|$.","Pada himpunan hingga, gabungan saling lepas terhitung hanya mempunyai paling banyak sejumlah hingga suku tak kosong, sehingga aditivitas terhitung berlaku."],
    conclusion:"Counting measure merupakan ukuran dan memberi nilai $2$ pada $\\{a,c\\}$."
  },
  "kombinatorika:Prinsip Perkalian":{
    title:"Pilihan Bertahap",
    forDefinition:"Prinsip Perkalian",
    problem:"Sebuah kode terdiri atas dua huruf berbeda dari $\\{A,B,C,D\\}$ diikuti satu angka dari $\\{0,1,2\\}$. Berapa banyak kode?",
    solution:["Huruf pertama mempunyai 4 pilihan.","Huruf kedua mempunyai 3 pilihan karena harus berbeda.","Angka terakhir mempunyai 3 pilihan, bebas dari pemilihan huruf.","Prinsip perkalian memberi $4\\cdot3\\cdot3=36$."],
    conclusion:"Terdapat 36 kode."
  },
  "aljabar-linear:Basis":{
    title:"Basis pada Ruang Polinom",
    forDefinition:"Basis",
    problem:"Periksa apakah $\\{1,x,x^2\\}$ merupakan basis ruang $P_2$.",
    solution:["Setiap polinom berderajat paling tinggi dua dapat dinyatakan sebagai $a+bx+cx^2$, sehingga himpunan tersebut merentang $P_2$.","Jika $a+bx+cx^2$ adalah polinom nol, setiap koefisiennya harus nol.","Ketiga polinom bebas linear dan merentang."],
    conclusion:"$\\{1,x,x^2\\}$ adalah basis $P_2$."
  },
  "aljabar-linear:Matriks Invertibel":{
    title:"Invers Matriks Diagonal",
    forDefinition:"Matriks Invertibel",
    problem:"Tunjukkan bahwa $A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$ invertibel.",
    solution:["Definisikan $B=\\begin{pmatrix}1/2&0\\\\0&1/3\\end{pmatrix}$.","Perkalian langsung memberi $AB=BA=I_2$.","Menurut definisi, $B$ adalah invers dari $A$."],
    conclusion:"$A^{-1}=\\begin{pmatrix}1/2&0\\\\0&1/3\\end{pmatrix}$."
  },
  "kalkulus:Definisi $\\varepsilon$–$\\delta$":{
    title:"Limit Fungsi Linear",
    forDefinition:"Definisi $\\varepsilon$–$\\delta$",
    problem:"Buktikan langsung dari definisi bahwa $\\lim_{x\\to2}(3x+1)=7$.",
    solution:["Ambil sebarang $\\varepsilon>0$ dan tetapkan $\\delta=\\varepsilon/3$.","Jika $0<|x-2|<\\delta$, maka $|(3x+1)-7|=3|x-2|<3\\delta=\\varepsilon$.","Karena $\\delta$ dapat dipilih untuk setiap $\\varepsilon$, syarat definisi limit dipenuhi."],
    conclusion:"Limit tersebut bernilai 7."
  },
  "teori-graf:Graf Bipartit":{
    title:"Partisi Simpul pada Cycle Genap",
    forDefinition:"Graf Bipartit",
    problem:"Tunjukkan bahwa cycle $C_4$ merupakan graf bipartit.",
    solution:["Labeli simpul berturut-turut $v_1,v_2,v_3,v_4$.","Ambil $X=\\{v_1,v_3\\}$ dan $Y=\\{v_2,v_4\\}$.","Semua sisi $C_4$ menghubungkan satu simpul $X$ dengan satu simpul $Y$."],
    conclusion:"$C_4$ bipartit."
  },
  "teori-bilangan-olimpiade:Persamaan Pell":{
    title:"Solusi Persamaan Pell",
    forDefinition:"Persamaan Pell",
    problem:"Periksa apakah $(x,y)=(3,2)$ menyelesaikan $x^2-2y^2=1$.",
    solution:["Substitusikan pasangan yang diberikan.","Diperoleh $3^2-2(2^2)=9-8=1$.","Kedua koordinat adalah bilangan bulat positif."],
    conclusion:"$(3,2)$ merupakan solusi Pell untuk $D=2$."
  },
  "persamaan-diferensial:Persamaan Eksak":{
    title:"Membangun Fungsi Potensial",
    forDefinition:"Persamaan Eksak",
    problem:"Periksa apakah $(2x+y)\\,dx+(x+2y)\\,dy=0$ eksak.",
    solution:["Tuliskan $M(x,y)=2x+y$ dan $N(x,y)=x+2y$.","Diperoleh $M_y=1=N_x$, sehingga kriteria eksak dipenuhi.","Integrasikan $F_x=M$ untuk mendapatkan $F=x^2+xy+g(y)$, kemudian cocokkan $F_y=N$ sehingga $g(y)=y^2$."],
    conclusion:"Persamaan eksak dengan solusi implisit $x^2+xy+y^2=C$."
  },
  "riset-operasi:Daerah Feasible":{
    title:"Irisan Dua Kendala",
    forDefinition:"Daerah Feasible",
    problem:"Tentukan apakah $(x,y)=(2,1)$ feasible untuk $x+y\\le4$, $2x+y\\le5$, serta $x,y\\ge0$.",
    solution:["Kendala pertama memberi $2+1=3\\le4$.","Kendala kedua memberi $2(2)+1=5\\le5$.","Keduanya nonnegatif."],
    conclusion:"$(2,1)$ merupakan titik feasible."
  },
  "statistika-terapan:Rata-rata dan Varians Sampel":{
    title:"Rata-rata dan Varians Tiga Pengamatan",
    forDefinition:"Rata-rata dan Varians Sampel",
    problem:"Untuk sampel $2,4,6$, hitung $\\bar x$ dan $s^2$.",
    solution:["Rata-rata adalah $\\bar x=(2+4+6)/3=4$.","Jumlah kuadrat simpangan ialah $(2-4)^2+(4-4)^2+(6-4)^2=8$.","Varians sampel adalah $s^2=8/(3-1)=4$."],
    conclusion:"$\\bar x=4$ dan $s^2=4$."
  },
  "statistika-matematika:Fungsi Distribusi Kumulatif":{
    title:"CDF Bernoulli",
    forDefinition:"Fungsi Distribusi Kumulatif",
    problem:"Jika $P(X=0)=1-p$ dan $P(X=1)=p$ untuk $0<p<1$, tentukan $F_X(x)$.",
    solution:["Untuk $x<0$, kejadian $X\\le x$ mustahil, sehingga $F_X(x)=0$.","Untuk $0\\le x<1$, hanya nilai $0$ memenuhi $X\\le x$, sehingga $F_X(x)=1-p$.","Untuk $x\\ge1$, kedua nilai memenuhi, sehingga $F_X(x)=1$."],
    conclusion:"CDF berupa fungsi tangga yang kontinu dari kanan."
  },
  "matematika-diskrit:Relasi Ekuivalensi":{
    title:"Kongruensi sebagai Relasi Ekuivalensi",
    forDefinition:"Relasi Ekuivalensi",
    problem:"Tunjukkan bahwa $a\\sim b$ jika $a\\equiv b\\pmod3$ adalah relasi ekuivalensi pada $\\mathbb Z$.",
    solution:["Refleksif karena $3\\mid(a-a)=0$.","Simetris karena jika $3\\mid(a-b)$, maka $3\\mid(b-a)$.","Transitif karena jika $3\\mid(a-b)$ dan $3\\mid(b-c)$, maka $3\\mid(a-c)$."],
    conclusion:"Kelas-kelas ekuivalensinya adalah tiga kelas sisa modulo 3."
  },
  "kalkulus-stokastik:Martingale":{
    title:"Random Walk Simetris",
    forDefinition:"Martingale",
    problem:"Misalkan $\\xi_n$ iid dengan $P(\\xi_n=1)=P(\\xi_n=-1)=1/2$ dan $M_n=\\sum_{i=1}^n\\xi_i$. Buktikan $M_n$ martingale terhadap $\\mathcal F_n=\\sigma(\\xi_1,\\ldots,\\xi_n)$.",
    solution:["$M_n$ dapat ditentukan dari $\\mathcal F_n$ dan integrabel.","Gunakan $M_{n+1}=M_n+\\xi_{n+1}$.","Independensi memberi $E[\\xi_{n+1}\\mid\\mathcal F_n]=E[\\xi_{n+1}]=0$.","Dengan linearitas ekspektasi bersyarat, $E[M_{n+1}\\mid\\mathcal F_n]=M_n$."],
    conclusion:"$(M_n)$ adalah martingale."
  }
};

export function getCuratedDefinitionExample(subjectSlug:string,title:string):BookExample|null{
  return examples[subjectSlug+":"+title]??moreDefinitionExamples[subjectSlug+":"+title]??realAnalysisDefinitionExamples[subjectSlug+":"+title]??null;
}
