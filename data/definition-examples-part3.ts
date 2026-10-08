import type { BookExample } from "@/data/book-content-types";

/** Examples specific to the definitions in the Real Analysis textbook.
 * Each entry is deliberately linked by its exact definition title.
 */
export const realAnalysisDefinitionExamples: Record<string,BookExample> = {
  "analisis-real:Himpunan Hingga":{
    title:"Bijection untuk Himpunan Berhingga",forDefinition:"Himpunan Hingga",
    problem:"Tunjukkan bahwa $S=\\{a,b,c\\}$ memiliki tepat tiga elemen.",
    solution:["Definisikan $f:\\{1,2,3\\}\\to S$ dengan $f(1)=a$, $f(2)=b$, dan $f(3)=c$.","Setiap anggota $S$ mempunyai praimaj, sehingga $f$ surjektif.","Ketiga nilai fungsi berbeda, sehingga $f$ injektif dan dengan demikian bijektif."],
    conclusion:"Terdapat bijeksi dari $\\{1,2,3\\}$ ke $S$, sehingga $|S|=3$."
  },
  "analisis-real:Denumerable dan Countable":{
    title:"Himpunan Bilangan Asli Genap",forDefinition:"Denumerable dan Countable",
    problem:"Buktikan himpunan $E=\\{2,4,6,\\ldots\\}$ denumerable.",
    solution:["Definisikan $f:\\mathbb N\\to E$ dengan $f(n)=2n$, untuk $\\mathbb N=\\{1,2,\\ldots\\}$.","Apabila $f(m)=f(n)$, berlaku $2m=2n$ sehingga $m=n$.","Setiap $e\\in E$ berbentuk $2n$ untuk suatu $n\\in\\mathbb N$, sehingga $f$ surjektif."],
    conclusion:"Pemetaan $f$ bijektif, sehingga $E$ denumerable."
  },
  "analisis-real:Nilai Mutlak":{
    title:"Evaluasi dan Jarak Nilai Mutlak",forDefinition:"Nilai Mutlak",
    problem:"Tentukan $|-7|$ dan jarak antara $-7$ dan $2$ pada garis bilangan.",
    solution:["Karena $-7<0$, definisi memberi $|-7|=-(-7)=7$.","Jarak dua bilangan real $x,y$ adalah $|x-y|$.","Untuk $x=-7$ dan $y=2$, diperoleh $|-7-2|=|-9|=9$."],
    conclusion:"Nilai mutlak $-7$ adalah $7$ dan jaraknya ke $2$ adalah $9$."
  },
  "analisis-real:Batas Atas":{
    title:"Memeriksa Batas Atas",forDefinition:"Batas Atas",
    problem:"Untuk $S=(0,1)$, tentukan apakah $1$, $2$, dan $\\frac34$ merupakan batas atas.",
    solution:["Setiap $s\\in S$ memenuhi $s<1$, sehingga $1$ merupakan batas atas.","Karena $s<1<2$ untuk semua $s\\in S$, bilangan $2$ juga batas atas.","Bilangan $\\frac78$ anggota $S$ tetapi $\\frac78>\\frac34$, sehingga $\\frac34$ bukan batas atas."],
    conclusion:"Bilangan $1$ dan $2$ merupakan batas atas, sedangkan $\\frac34$ bukan."
  },
  "analisis-real:Supremum":{
    title:"Supremum Interval Terbuka",forDefinition:"Supremum",
    problem:"Tentukan supremum $S=(0,1)$.",
    solution:["Bilangan $1$ adalah batas atas karena setiap $s\\in S$ memenuhi $s<1$.","Untuk setiap $\\varepsilon>0$, pilih $s=1-\\min\\{\\varepsilon/2,1/2\\}$.","Pilihan tersebut memenuhi $s\\in S$ dan $1-\\varepsilon<s<1$, sehingga tidak ada bilangan kurang dari $1$ yang merupakan batas atas."],
    conclusion:"Supremum $S$ adalah $1$, meskipun $1\\notin S$."
  },
  "analisis-real:Interval":{
    title:"Sifat Antara pada Interval",forDefinition:"Interval",
    problem:"Periksa bahwa $I=(-1,2)$ merupakan interval.",
    solution:["Ambil sembarang $x,y\\in I$ dan $z$ dengan $x<z<y$.","Karena $-1<x<z<y<2$, berlaku $-1<z<2$.","Dengan demikian, $z\\in I$, sesuai definisi interval."],
    conclusion:"Himpunan $(-1,2)$ memenuhi sifat antara."
  },
  "analisis-real:Barisan Real":{
    title:"Barisan sebagai Fungsi",forDefinition:"Barisan Real",
    problem:"Tuliskan lima suku pertama barisan $a:\\mathbb N\\to\\mathbb R$ dengan $a(n)=(-1)^n/n$.",
    solution:["Nilai $a_1=(-1)^1/1=-1$ dan $a_2=(-1)^2/2=1/2$.","Perhitungan serupa memberi $a_3=-1/3$, $a_4=1/4$, dan $a_5=-1/5$."],
    conclusion:"Lima suku pertama adalah $-1,\\frac12,-\\frac13,\\frac14,-\\frac15$."
  },
  "analisis-real:Barisan Terbatas":{
    title:"Batas Seragam terhadap Indeks",forDefinition:"Barisan Terbatas",
    problem:"Buktikan $a_n=(-1)^n(1-1/n)$ terbatas untuk $n\\ge1$.",
    solution:["Untuk setiap $n\\ge1$ berlaku $0\\le1-1/n<1$.","Karena $|(-1)^n|=1$, diperoleh $|a_n|=1-1/n\\le1$.","Ambil $M=1$ yang tidak bergantung pada $n$."],
    conclusion:"Barisan tersebut terbatas."
  },
  "analisis-real:Monoton":{
    title:"Memeriksa Kemonotonan",forDefinition:"Monoton",
    problem:"Buktikan barisan $a_n=1-1/n$ monoton meningkat.",
    solution:["Untuk setiap $n\\ge1$, selisih $a_{n+1}-a_n=(1-1/(n+1))-(1-1/n)$.","Penyederhanaan memberi $a_{n+1}-a_n=1/[n(n+1)]>0$.","Akibatnya $a_n<a_{n+1}$ untuk setiap $n$."],
    conclusion:"Barisan meningkat tegas."
  },
  "analisis-real:Subbarisan":{
    title:"Memilih Indeks Genap",forDefinition:"Subbarisan",
    problem:"Carilah subbarisan konstan dari $a_n=(-1)^n$.",
    solution:["Pilih $n_k=2k$ untuk setiap $k\\in\\mathbb N$.","Indeks $n_1<n_2<\\cdots$ meningkat tegas.","Suku subbarisan adalah $a_{n_k}=(-1)^{2k}=1$."],
    conclusion:"Subbarisan $(a_{2k})$ identik dengan barisan konstan $1$."
  },
  "analisis-real:Barisan Cauchy":{
    title:"Uji Cauchy untuk Barisan $1/n$",forDefinition:"Barisan Cauchy",
    problem:"Buktikan $a_n=1/n$ memenuhi kriteria Cauchy.",
    solution:["Ambil sembarang $\\varepsilon>0$ dan pilih $N\\in\\mathbb N$ sehingga $N>2/\\varepsilon$.","Untuk $m,n\\ge N$, ketaksamaan segitiga memberi $|1/n-1/m|\\le1/n+1/m\\le2/N$.","Karena $2/N<\\varepsilon$, syarat Cauchy dipenuhi."],
    conclusion:"Barisan $(1/n)$ merupakan barisan Cauchy."
  },
  "analisis-real:Konvergensi Deret":{
    title:"Jumlah Parsial Deret Geometri",forDefinition:"Konvergensi Deret",
    problem:"Periksa konvergensi $\\sum_{n=1}^{\\infty}2^{-n}$ melalui jumlah parsial.",
    solution:["Jumlah parsialnya $s_N=\\sum_{n=1}^N2^{-n}=1-2^{-N}$.","Karena $2^{-N}\\to0$ saat $N\\to\\infty$, diperoleh $s_N\\to1$.","Definisi konvergensi deret diterapkan pada barisan $(s_N)$."],
    conclusion:"Deret konvergen dengan jumlah $1$."
  },
  "analisis-real:Limit Fungsi":{
    title:"Limit Kuadrat melalui Definisi",forDefinition:"Limit Fungsi",
    problem:"Buktikan $\\lim_{x\\to2}x^2=4$ dengan definisi $\\varepsilon$–$\\delta$.",
    solution:["Ambil sembarang $\\varepsilon>0$ dan tetapkan $\\delta=\\min\\{1,\\varepsilon/5\\}$.","Jika $0<|x-2|<\\delta$, maka $|x+2|\\le|x-2|+4<5$.","Diperoleh $|x^2-4|=|x-2||x+2|<5\\delta\\le\\varepsilon$."],
    conclusion:"Limit $x^2$ ketika $x\\to2$ adalah $4$."
  },
  "analisis-real:Limit Satu Sisi":{
    title:"Limit Kiri dan Kanan yang Berbeda",forDefinition:"Limit Satu Sisi",
    problem:"Untuk $f(x)=|x|/x$ dengan $x\\ne0$, tentukan limit kanan dan kiri di $0$.",
    solution:["Jika $x>0$, berlaku $f(x)=x/x=1$, sehingga limit kanan bernilai $1$.","Jika $x<0$, berlaku $|x|=-x$ dan $f(x)=-1$, sehingga limit kiri bernilai $-1$.","Karena kedua limit satu sisi berbeda, limit dua sisinya tidak ada."],
    conclusion:"$\\lim_{x\\to0^+}f(x)=1$ dan $\\lim_{x\\to0^-}f(x)=-1$."
  },
  "analisis-real:Kontinu di Titik":{
    title:"Kontinuitas Fungsi Linear",forDefinition:"Kontinu di Titik",
    problem:"Buktikan $f(x)=3x+2$ kontinu di $a=1$ menggunakan definisi.",
    solution:["Diketahui $f(1)=5$. Ambil sembarang $\\varepsilon>0$ dan pilih $\\delta=\\varepsilon/3$.","Untuk setiap $x$ dengan $|x-1|<\\delta$, diperoleh $|f(x)-f(1)|=3|x-1|$.","Akibatnya $|f(x)-5|<3\\delta=\\varepsilon$."],
    conclusion:"Fungsi $f$ kontinu di $1$."
  },
  "analisis-real:Turunan":{
    title:"Turunan Kuadrat di Satu Titik",forDefinition:"Turunan",
    problem:"Hitung $f'(1)$ untuk $f(x)=x^2$ langsung dari definisi.",
    solution:["Untuk $h\\ne0$, hasil bagi selisih adalah $[f(1+h)-f(1)]/h=((1+h)^2-1)/h$.","Perluasan kuadrat dan penyederhanaan menghasilkan $2+h$.","Limit ketika $h\\to0$ bernilai $2$."],
    conclusion:"$f'(1)=2$."
  },
  "analisis-real:Konvergensi Titik demi Titik":{
    title:"Konvergensi Titik demi Titik $x^n$",forDefinition:"Konvergensi Titik demi Titik",
    problem:"Tentukan limit titik demi titik $f_n(x)=x^n$ pada $[0,1)$.",
    solution:["Untuk $x=0$, berlaku $f_n(0)=0$ untuk setiap $n\\ge1$.","Untuk setiap $x\\in(0,1)$ yang tetap, deret geometri memberi $x^n\\to0$.","Pilihan indeks $N$ dapat bergantung pada $x$ karena titik diperbaiki sebelum mengambil limit."],
    conclusion:"$f_n$ konvergen titik demi titik ke fungsi nol pada $[0,1)$."
  },
  "analisis-real:Konvergensi Seragam":{
    title:"Konvergensi Seragam $x/n$",forDefinition:"Konvergensi Seragam",
    problem:"Buktikan $f_n(x)=x/n$ konvergen seragam ke nol pada $[0,1]$.",
    solution:["Untuk setiap $x\\in[0,1]$, berlaku $|f_n(x)-0|=x/n\\le1/n$.","Ambil sebarang $\\varepsilon>0$ dan pilih $N\\in\\mathbb N$ sehingga $N>1/\\varepsilon$.","Jika $n\\ge N$, berlaku $|f_n(x)|\\le1/n\\le1/N<\\varepsilon$ untuk semua $x\\in[0,1]$ secara serentak."],
    conclusion:"$f_n\\to0$ secara seragam pada $[0,1]$."
  },
  "analisis-real:Himpunan Terbuka":{
    title:"Interval Terbuka sebagai Himpunan Terbuka",forDefinition:"Himpunan Terbuka",
    problem:"Buktikan $G=(-2,3)$ terbuka di $\\mathbb R$.",
    solution:["Ambil sebarang $x\\in(-2,3)$ dan pilih $r=\\frac12\\min\\{x+2,3-x\\}>0$.","Untuk $y$ dengan $|y-x|<r$ diperoleh $-2<y<3$.","Dengan demikian, $(x-r,x+r)\\subseteq G$ untuk setiap $x\\in G$."],
    conclusion:"Himpunan $(-2,3)$ terbuka."
  },
  "analisis-real:Himpunan Tertutup":{
    title:"Interval Tertutup sebagai Himpunan Tertutup",forDefinition:"Himpunan Tertutup",
    problem:"Buktikan $F=[0,1]$ tertutup di $\\mathbb R$.",
    solution:["Komplemen $\\mathbb R\\setminus F=(-\\infty,0)\\cup(1,\\infty)$.","Kedua interval pada ruas kanan terbuka dalam topologi standar $\\mathbb R$.","Gabungan dua himpunan terbuka adalah terbuka, sehingga komplemen $F$ terbuka."],
    conclusion:"$[0,1]$ merupakan himpunan tertutup."
  },
  "analisis-real:Closure":{
    title:"Penutupan Interval Terbuka",forDefinition:"Closure",
    problem:"Tentukan $\\overline A$ untuk $A=(0,1)$.",
    solution:["Setiap titik $x\\in(0,1)$ berada dalam penutupan $A$.","Setiap lingkungan $0$ maupun $1$ bertemu $A$, sehingga kedua titik tersebut juga berada dalam penutupan.","Setiap $x<0$ atau $x>1$ mempunyai persekitaran yang tidak bertemu $A$, sehingga berada di luar penutupan."],
    conclusion:"$\\overline A=[0,1]$."
  },
  "analisis-real:Kompak":{
    title:"Kekompakan Interval Tertutup",forDefinition:"Kompak",
    problem:"Tentukan apakah $K=[0,1]$ kompak dalam $\\mathbb R$ dengan topologi standar.",
    solution:["Himpunan $K$ terbatas karena $0\\le x\\le1$ bagi setiap $x\\in K$.","Komplemennya $(-\\infty,0)\\cup(1,\\infty)$ terbuka, sehingga $K$ tertutup.","Teorema Heine–Borel menyatakan himpunan bagian $\\mathbb R$ kompak jika dan hanya jika tertutup dan terbatas."],
    conclusion:"Interval $[0,1]$ kompak; setiap selimut terbukanya memiliki subselimut hingga."
  },
  "analisis-real:Metrik":{
    title:"Jarak Standar pada Bilangan Real",forDefinition:"Metrik",
    problem:"Verifikasi bahwa $d(x,y)=|x-y|$ merupakan metrik pada $\\mathbb R$.",
    solution:["Nilai mutlak tidak negatif dan $d(x,y)=0$ tepat ketika $x=y$.","Simetri berlaku karena $|x-y|=|y-x|$.","Ketaksamaan segitiga memberi $|x-z|=|(x-y)+(y-z)|\\le|x-y|+|y-z|$."],
    conclusion:"Fungsi $d$ memenuhi semua aksioma metrik."
  }
};
