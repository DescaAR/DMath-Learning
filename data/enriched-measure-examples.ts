import type { BookExample } from "@/data/book-content-types";

/** Individually proved examples keyed to exact formal definitions. */
export const enrichedMeasureExamples:Record<string,BookExample>={
  "teori-ukuran-probabilitas:Sistem Pi": {
    "title": "Sistem $\\pi$ dan Sistem $\\lambda$",
    "forDefinition": "Sistem Pi",
    "problem": "Ambil $X=\\{1,2,3\\}$ dan $\\mathcal P=\\{\\varnothing,\\{1\\},X\\}$. Buktikan bahwa $\\mathcal P$ merupakan sistem $\\pi$ tetapi bukan sistem $\\lambda$.",
    "solution": [
    "Diketahui $X=\\{1,2,3\\}$ dan $\\mathcal P=\\{\\varnothing,\\{1\\},X\\}$. Dibuktikan bahwa $\\mathcal P$ memenuhi definisi sistem $\\pi$ tetapi gagal memenuhi definisi sistem $\\lambda$. Ketiga anggotanya bersarang: $\\varnothing\\subseteq\\{1\\}\\subseteq X$.",
    "Diambil sebarang $A,B\\in\\mathcal P$. Karena kedua anggota dapat dibandingkan menurut inklusi, irisannya sama dengan anggota yang lebih kecil. Jadi $A\\cap B$ tetap salah satu dari $\\varnothing,\\{1\\},X$ dan berada dalam $\\mathcal P$. Keluarga ini tidak kosong; dengan demikian seluruh syarat sistem $\\pi$ terpenuhi.",
    "Untuk sistem $\\lambda$, syarat $X\\in\\mathcal P$ memang terpenuhi. Namun ambil $A=\\{1\\}$ dan $B=X$, yang keduanya berada dalam $\\mathcal P$ dan memenuhi $A\\subseteq B$. Selisih bertingkatnya $B\\setminus A=\\{2,3\\}$ tidak termasuk $\\mathcal P$. Jadi aksioma selisih bertingkat gagal. Setara dengan itu, komplemen $\\{1\\}^c=\\{2,3\\}$ tidak termasuk keluarga.",
    "Karena satu aksioma yang diwajibkan gagal, $\\mathcal P$ bukan sistem $\\lambda$. Contoh ini juga menunjukkan bahwa ketertutupan irisan tidak dengan sendirinya memberikan ketertutupan komplemen atau selisih; kedua jenis sistem harus dibedakan secara formal."
],
    "conclusion": "$\\mathcal P$ merupakan sistem $\\pi$, tetapi bukan sistem $\\lambda$."
  },
  "teori-ukuran-probabilitas:Himpunan Nol": {
    "title": "Himpunan Nol",
    "forDefinition": "Himpunan Nol",
    "problem": "Pada $([0,1],\\mathcal L,\\lambda)$, periksa apakah $N=\\{1/3,1/2,3/4\\}$ adalah himpunan nol.",
    "solution": [
      "Untuk setiap $\\varepsilon>0$, tutup ketiga titik dengan tiga interval terbuka yang total panjangnya kurang dari $\\varepsilon$.",
      "Dari definisi ukuran Lebesgue luar diperoleh $\\lambda(N)\\le\\varepsilon$. Karena $\\varepsilon>0$ sebarang dan $\\lambda(N)\\ge0$, harus berlaku $\\lambda(N)=0$.",
      "Himpunan $N$ terukur karena berhingga, yakni gabungan hingga singleton Borel."
    ],
    "conclusion": "$N$ adalah himpunan nol Lebesgue."
  },
  "teori-ukuran-probabilitas:Ukuran": {
    "title": "Ukuran",
    "forDefinition": "Ukuran",
    "problem": "Pada $X=\\{a,b,c\\}$ dan $\\mathcal A=2^X$, definisikan $\\mu(A)=\\sum_{x\\in A}w(x)$ dengan $w(a)=2,w(b)=1,w(c)=3$. Buktikan bahwa $\\mu$ adalah ukuran.",
    "solution": [
      "Karena jumlah atas himpunan kosong bernilai nol, diperoleh $\\mu(\\varnothing)=0$. Semua bobot nonnegatif sehingga $\\mu(A)\\ge0$.",
      "Untuk himpunan-himpunan saling lepas $A_1,A_2,\\ldots$, setiap $x\\in X$ berada pada paling banyak satu $A_n$. Oleh karena itu, $\\mu(\\bigcup_nA_n)=\\sum_n\\sum_{x\\in A_n}w(x)=\\sum_n\\mu(A_n)$.",
      "Secara khusus, $\\mu(\\{a,c\\})=w(a)+w(c)=5$."
    ],
    "conclusion": "$\\mu$ adalah ukuran hingga dan $\\mu(\\{a,c\\})=5$."
  },
  "teori-ukuran-probabilitas:Outer Measure": {
    "title": "Outer Measure",
    "forDefinition": "Outer Measure",
    "problem": "Definisikan $\\mu^*(A)=\\inf\\{\\sum_n|I_n|:A\\subseteq\\bigcup_n I_n\\}$ pada $\\mathbb R$, dengan $I_n$ interval terbuka. Tentukan $\\mu^*(\\{0\\})$.",
    "solution": [
      "Untuk setiap $\\varepsilon>0$, interval $(-\\varepsilon/2,\\varepsilon/2)$ menutupi $\\{0\\}$ dan panjangnya $\\varepsilon$.",
      "Dari sifat infimum, $0\\le\\mu^*(\\{0\\})\\le\\varepsilon$ untuk setiap $\\varepsilon>0$.",
      "Dengan mengambil $\\varepsilon$ sebarang kecil, diperoleh $\\mu^*(\\{0\\})=0$."
    ],
    "conclusion": "Ukuran luar Lebesgue setiap singleton adalah nol."
  },
  "teori-ukuran-probabilitas:Keterukuran Carathéodory": {
    "title": "Keterukuran Carathéodory",
    "forDefinition": "Keterukuran Carathéodory",
    "problem": "Untuk ukuran luar $\\mu^*$, buktikan bahwa setiap $N\\subseteq X$ dengan $\\mu^*(N)=0$ adalah Carathéodory-terukur.",
    "solution": [
      "Ambil sembarang $A\\subseteq X$. Subaditivitas ukuran luar memberi $\\mu^*(A)\\le\\mu^*(A\\cap N)+\\mu^*(A\\setminus N)$.",
      "Karena $A\\cap N\\subseteq N$, monotonisitas ukuran luar memberi $\\mu^*(A\\cap N)=0$.",
      "Selanjutnya $A\\setminus N\\subseteq A$ sehingga $\\mu^*(A\\setminus N)\\le\\mu^*(A)$. Kedua ketaksamaan memberikan $\\mu^*(A)=\\mu^*(A\\cap N)+\\mu^*(A\\setminus N)$."
    ],
    "conclusion": "$N$ memenuhi kriteria keterukuran Carathéodory."
  },
  "teori-ukuran-probabilitas:Fungsi Terukur": {
    "title": "Fungsi Terukur",
    "forDefinition": "Fungsi Terukur",
    "problem": "Pada ruang Borel $\\mathbb R$, tunjukkan bahwa $f(x)=x^2$ terukur.",
    "solution": [
      "Untuk setiap $a\\in\\mathbb R$, pracitra $\\{x:f(x)>a\\}$ adalah $\\mathbb R$ jika $a<0$, dan $\\{x:|x|>\\sqrt a\\}$ jika $a\\ge0$.",
      "Kedua bentuk tersebut merupakan himpunan terbuka dan karenanya termasuk sigma-algebra Borel.",
      "Karena pracitra setiap sinar $(a,\\infty)$ adalah Borel, fungsi $f$ terukur."
    ],
    "conclusion": "Polinom $x^2$ merupakan fungsi Borel-terukur."
  },
  "teori-ukuran-probabilitas:Fungsi Sederhana": {
    "title": "Fungsi Sederhana",
    "forDefinition": "Fungsi Sederhana",
    "problem": "Pada $X=[0,1]$, tulis $s=3\\mathbf1_{[0,1/2)}+5\\mathbf1_{[1/2,1]}$ sebagai fungsi sederhana dan tentukan integralnya terhadap ukuran Lebesgue.",
    "solution": [
      "Fungsi $s$ hanya mengambil dua nilai, yaitu $3$ dan $5$, pada dua himpunan Borel yang saling lepas.",
      "Kedua interval mempunyai ukuran Lebesgue $1/2$.",
      "Definisi integral fungsi sederhana memberi $\\int_0^1s\\,d\\lambda=3(1/2)+5(1/2)=4$."
    ],
    "conclusion": "$s$ adalah fungsi sederhana nonnegatif dengan integral $4$."
  },
  "teori-ukuran-probabilitas:Pushforward Measure": {
    "title": "Pushforward Measure",
    "forDefinition": "Pushforward Measure",
    "problem": "Misalkan $X=\\{1,2,3\\}$ berukuran probabilitas seragam dan $T(x)=x\\bmod2$. Tentukan ukuran dorong $T_\\#P$ pada $\\{0,1\\}$.",
    "solution": [
      "Menurut definisi, $(T_\\#P)(B)=P(T^{-1}(B))$ untuk setiap $B\\subseteq\\{0,1\\}$.",
      "Karena $T^{-1}(\\{0\\})=\\{2\\}$ dan $T^{-1}(\\{1\\})=\\{1,3\\}$, diperoleh $(T_\\#P)(\\{0\\})=1/3$ dan $(T_\\#P)(\\{1\\})=2/3$.",
      "Kedua massa berjumlah satu, konsisten dengan sifat ukuran peluang."
    ],
    "conclusion": "Ukuran dorong adalah distribusi Bernoulli dengan $P(Y=1)=2/3$."
  },
  "teori-ukuran-probabilitas:Fungsi Distribusi": {
    "title": "Fungsi Distribusi",
    "forDefinition": "Fungsi Distribusi",
    "problem": "Jika $P(X=0)=1/4$ dan $P(X=2)=3/4$, tentukan $F_X(t)=P(X\\le t)$.",
    "solution": [
      "Jika $t<0$, tidak ada nilai $X$ yang lebih kecil atau sama dengan $t$, sehingga $F_X(t)=0$.",
      "Jika $0\\le t<2$, hanya massa di $0$ yang dihitung sehingga $F_X(t)=1/4$.",
      "Jika $t\\ge2$, kedua massa terhitung dan $F_X(t)=1$."
    ],
    "conclusion": "$F_X(t)=0$ untuk $t<0$, $1/4$ untuk $0\\le t<2$, dan $1$ untuk $t\\ge2$."
  },
  "teori-ukuran-probabilitas:Integral Fungsi Sederhana Nonnegatif": {
    "title": "Integral Fungsi Sederhana Nonnegatif",
    "forDefinition": "Integral Fungsi Sederhana Nonnegatif",
    "problem": "Hitung $\\int s\\,d\\lambda$ untuk $s=2\\mathbf1_{[0,2]}+3\\mathbf1_{(2,3]}$ pada $\\mathbb R$.",
    "solution": [
      "Dua himpunan dalam representasi sederhana saling lepas dan terukur Lebesgue.",
      "Ukuran $[0,2]$ adalah $2$, sedangkan ukuran $(2,3]$ adalah $1$.",
      "Dengan demikian, $\\int s\\,d\\lambda=2\\lambda([0,2])+3\\lambda((2,3])=2(2)+3(1)=7$."
    ],
    "conclusion": "Integral Lebesgue fungsi sederhana tersebut adalah $7$."
  },
  "teori-ukuran-probabilitas:Integral pada Himpunan": {
    "title": "Integral pada Himpunan",
    "forDefinition": "Integral pada Himpunan",
    "problem": "Untuk $f(x)=x$ pada $[0,1]$ dan $A=[1/2,1]$, hitung $\\int_A f\\,d\\lambda$.",
    "solution": [
      "Menurut definisi, $\\int_A f\\,d\\lambda=\\int_{[0,1]}f\\mathbf1_A\\,d\\lambda$.",
      "Karena $f$ kontinu, integral Lebesgue pada interval tersebut sama dengan integral Riemann-nya.",
      "Diperoleh $\\int_{1/2}^1 x\\,dx=[x^2/2]_{1/2}^1=1/2-1/8=3/8$."
    ],
    "conclusion": "$\\int_A f\\,d\\lambda=3/8$."
  },
  "teori-ukuran-probabilitas:Konvergensi Monoton Naik": {
    "title": "Konvergensi Monoton Naik",
    "forDefinition": "Konvergensi Monoton Naik",
    "problem": "Misalkan $f_n=\\mathbf1_{[0,\\,1-1/n]}$ untuk $n\\ge1$ pada $[0,1]$. Tentukan limit titik demi titik dan integralnya.",
    "solution": [
      "Interval $[0,1-1/n]$ meningkat terhadap $n$, sehingga $0\\le f_n\\le f_{n+1}$.",
      "Untuk setiap $x\\in[0,1)$, terdapat $N$ dengan $x\\le1-1/N$ sehingga $f_n(x)=1$ untuk $n\\ge N$, sedangkan $f_n(1)=0$.",
      "Jadi $f_n\\uparrow\\mathbf1_{[0,1)}$ dan $\\int f_n\\,d\\lambda=1-1/n\\to1=\\int\\mathbf1_{[0,1)}\\,d\\lambda$."
    ],
    "conclusion": "Integral dapat dipertukarkan dengan limit karena hipotesis Teorema Konvergensi Monoton terpenuhi."
  },
  "teori-ukuran-probabilitas:Fungsi Nonnegatif Terukur": {
    "title": "Fungsi Nonnegatif Terukur",
    "forDefinition": "Fungsi Nonnegatif Terukur",
    "problem": "Pada $[0,1]$, buktikan $f(x)=|x-1/2|$ adalah fungsi terukur nonnegatif.",
    "solution": [
      "Fungsi $x\\mapsto x-1/2$ kontinu dan operasi nilai mutlak mempertahankan kontinuitas.",
      "Setiap fungsi kontinu dari $[0,1]$ ke $\\mathbb R$ adalah Borel-terukur.",
      "Untuk setiap $x$, nilai mutlak memenuhi $|x-1/2|\\ge0$."
    ],
    "conclusion": "$f$ adalah fungsi terukur dan nonnegatif."
  },
  "teori-ukuran-probabilitas:Limit Inferior Fungsi": {
    "title": "Limit Inferior Fungsi",
    "forDefinition": "Limit Inferior Fungsi",
    "problem": "Untuk $f_n(x)=(-1)^n+1/n$ pada sembarang ruang $X$, tentukan $\\liminf_n f_n(x)$.",
    "solution": [
      "Pada indeks genap, $f_{2k}(x)=1+1/(2k)\\to1$.",
      "Pada indeks ganjil, $f_{2k+1}(x)=-1+1/(2k+1)\\to-1$.",
      "Limit inferior adalah nilai limit subbarisan terkecil, yaitu $-1$; hasilnya sama pada setiap $x$."
    ],
    "conclusion": "$\\liminf_{n\\to\\infty}f_n(x)=-1$."
  },
  "teori-ukuran-probabilitas:Infimum Ekor": {
    "title": "Infimum Ekor",
    "forDefinition": "Infimum Ekor",
    "problem": "Untuk barisan $a_n=(-1)^n$, hitung $b_n=\\inf_{k\\ge n}a_k$ dan $\\lim_n b_n$.",
    "solution": [
      "Setiap ekor barisan mengandung tak hingga banyak suku bernilai $-1$ dan $1$.",
      "Oleh karena itu, infimum setiap ekor adalah $-1$.",
      "Barisan $b_n$ konstan $-1$, sehingga limitnya $-1$."
    ],
    "conclusion": "$\\liminf_n a_n=\\lim_n b_n=-1$."
  },
  "teori-ukuran-probabilitas:Dominasi Integrabel": {
    "title": "Dominasi Integrabel",
    "forDefinition": "Dominasi Integrabel",
    "problem": "Pada $[0,1]$ dengan ukuran Lebesgue, ambil $f_n(x)=x^n$. Cari fungsi dominasi terintegralkan.",
    "solution": [
      "Untuk setiap $n\\ge1$ dan $x\\in[0,1]$, berlaku $0\\le x^n\\le1$.",
      "Ambil $g(x)=1$. Fungsi $g$ terukur dan $\\int_0^1g\\,d\\lambda=1<\\infty$.",
      "Maka $|f_n|\\le g$ untuk semua $n$ dan seluruh $x\\in[0,1]$."
    ],
    "conclusion": "Deret fungsi tersebut didominasi secara integrabel oleh $g\\equiv1$."
  },
  "teori-ukuran-probabilitas:Konvergensi Hampir di Mana-Mana": {
    "title": "Konvergensi Hampir di Mana-Mana",
    "forDefinition": "Konvergensi Hampir di Mana-Mana",
    "problem": "Pada $[0,1]$, periksa apakah $f_n(x)=x^n$ konvergen hampir di mana-mana ke nol.",
    "solution": [
      "Jika $0\\le x<1$, berlaku $x^n\\to0$ ketika $n\\to\\infty$.",
      "Pada $x=1$, berlaku $f_n(1)=1$, sehingga limitnya bukan nol.",
      "Himpunan pengecualian hanya $\\{1\\}$ yang berukuran Lebesgue nol."
    ],
    "conclusion": "$f_n\\to0$ hampir di mana-mana pada $[0,1]$, tetapi tidak di setiap titik."
  },
  "teori-ukuran-probabilitas:Kejadian Independen": {
    "title": "Kejadian Independen",
    "forDefinition": "Kejadian Independen",
    "problem": "Pada dua lemparan koin seimbang, misalkan $A$ kejadian lemparan pertama angka dan $B$ kejadian lemparan kedua angka. Buktikan independensi $A$ dan $B$.",
    "solution": [
      "Ruang sampel mempunyai empat hasil sama mungkin, yaitu $\\{AA,AG,GA,GG\\}$.",
      "Diperoleh $P(A)=2/4=1/2$, $P(B)=1/2$, dan $P(A\\cap B)=1/4$.",
      "Karena $P(A\\cap B)=P(A)P(B)$, definisi independensi terpenuhi."
    ],
    "conclusion": "Kejadian $A$ dan $B$ independen."
  },
  "teori-ukuran-probabilitas:Variabel Acak Independen": {
    "title": "Variabel Acak Independen",
    "forDefinition": "Variabel Acak Independen",
    "problem": "Misalkan $X$ dan $Y$ adalah hasil dua lemparan dadu independen. Hitung $P(X\\le2,Y\\ge5)$.",
    "solution": [
      "Kejadian $\\{X\\le2\\}$ mempunyai probabilitas $2/6$, sedangkan $\\{Y\\ge5\\}$ mempunyai probabilitas $2/6$.",
      "Independensi variabel acak menjamin kejadian yang hanya bergantung pada masing-masing variabel tersebut juga independen.",
      "Oleh karena itu, $P(X\\le2,Y\\ge5)=(2/6)(2/6)=1/9$."
    ],
    "conclusion": "Probabilitas gabungan adalah $1/9$."
  },
  "teori-ukuran-probabilitas:Ekspektasi Bersyarat": {
    "title": "Ekspektasi Bersyarat",
    "forDefinition": "Ekspektasi Bersyarat",
    "problem": "Pada ruang peluang empat hasil sama mungkin $\\Omega=\\{1,2,3,4\\}$, ambil $X(\\omega)=\\omega$ dan $\\mathcal G=\\sigma(\\{1,2\\},\\{3,4\\})$. Tentukan $E[X\\mid\\mathcal G]$.",
    "solution": [
      "Ekspektasi bersyarat harus konstan pada atom $\\{1,2\\}$ dan $\\{3,4\\}$ karena $\\mathcal G$ memiliki kedua blok tersebut.",
      "Rata-rata $X$ pada blok pertama adalah $(1+2)/2=3/2$, dan pada blok kedua $(3+4)/2=7/2$.",
      "Fungsi $Y=\\frac32\\mathbf1_{\\{1,2\\}}+\\frac72\\mathbf1_{\\{3,4\\}}$ adalah $\\mathcal G$-terukur; untuk setiap atom $G$, berlaku $\\int_GY\\,dP=\\int_GX\\,dP$."
    ],
    "conclusion": "$E[X\\mid\\mathcal G]=\\frac32\\mathbf1_{\\{1,2\\}}+\\frac72\\mathbf1_{\\{3,4\\}}$ hampir pasti."
  },
  "teori-ukuran-probabilitas:Versi": {
    "title": "Versi",
    "forDefinition": "Versi",
    "problem": "Jika dua fungsi $Y,Z$ berbeda hanya pada suatu kejadian berpeluang nol, jelaskan mengapa keduanya dapat menjadi versi dari ekspektasi bersyarat yang sama.",
    "solution": [
      "Karena $Y=Z$ hampir pasti, untuk setiap $G\\in\\mathcal G$ yang relevan bagi integrasi, $\\int_GY\\,dP=\\int_GZ\\,dP$ apabila keduanya integrabel.",
      "Jika keduanya $\\mathcal G$-terukur, identitas integral yang mendefinisikan ekspektasi bersyarat berlaku serentak untuk $Y$ dan $Z$.",
      "Karena ekspektasi bersyarat unik hanya hingga kesamaan hampir pasti, keduanya boleh menjadi versi dari objek yang sama."
    ],
    "conclusion": "Versi ekspektasi bersyarat dibedakan hanya pada himpunan nol."
  },
  "teori-ukuran-probabilitas:Martingale": {
    "title": "Martingale",
    "forDefinition": "Martingale",
    "problem": "Misalkan $\\xi_1,\\xi_2,\\ldots$ independen dengan $P(\\xi_i=1)=P(\\xi_i=-1)=1/2$. Buktikan $M_n=\\sum_{k=1}^n\\xi_k$ martingale terhadap $\\mathcal F_n=\\sigma(\\xi_1,\\ldots,\\xi_n)$.",
    "solution": [
      "Setiap $M_n$ adalah $\\mathcal F_n$-terukur dan integrabel karena jumlah hingga peubah bernilai $\\pm1$.",
      "Dari $M_{n+1}=M_n+\\xi_{n+1}$ dan independensi $\\xi_{n+1}$ terhadap $\\mathcal F_n$, berlaku $E[\\xi_{n+1}\\mid\\mathcal F_n]=E[\\xi_{n+1}]=0$.",
      "Dengan linearitas ekspektasi bersyarat, $E[M_{n+1}\\mid\\mathcal F_n]=M_n$."
    ],
    "conclusion": "$(M_n,\\mathcal F_n)$ merupakan martingale."
  },
  "teori-ukuran-probabilitas:Submartingale dan Supermartingale": {
    "title": "Submartingale dan Supermartingale",
    "forDefinition": "Submartingale dan Supermartingale",
    "problem": "Untuk random walk simetris $M_n=\\sum_{k=1}^n\\xi_k$ seperti contoh sebelumnya, tunjukkan $S_n=M_n^2$ submartingale.",
    "solution": [
      "Karena $M_n$ kuadrat-integrabel dan adapted, $S_n$ adalah peubah integrabel serta $\\mathcal F_n$-terukur.",
      "Perluas $M_{n+1}^2=(M_n+\\xi_{n+1})^2=M_n^2+2M_n\\xi_{n+1}+\\xi_{n+1}^2$.",
      "Ekspektasi bersyarat memberi $E[S_{n+1}\\mid\\mathcal F_n]=M_n^2+0+1\\ge S_n$."
    ],
    "conclusion": "$M_n^2$ submartingale (sedangkan $M_n^2-n$ martingale)."
  }
};
