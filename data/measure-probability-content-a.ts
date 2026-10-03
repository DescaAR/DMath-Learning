import { buildMeasureProbabilityContent, type MeasureProbabilityLessonSpec } from "@/data/measure-probability-content-utils";

const specs: Record<string, MeasureProbabilityLessonSpec> = {
  "tup-classes-sets": {
    title:"Kelas Himpunan dan Sigma-Algebra",
    focus:"Sigma-algebra menentukan himpunan mana yang boleh diukur. Selain sigma-algebra, sistem $\\pi$ dan sistem $\\lambda$ penting karena memberi perangkat untuk memperluas kesamaan ukuran dari kelas pembangkit ke sigma-algebra yang dihasilkannya.",
    definitions:[
      {title:"Sigma-Algebra",statement:"Keluarga $\\mathcal A\\subseteq 2^X$ disebut sigma-algebra jika $X\\in\\mathcal A$, $A\\in\\mathcal A$ mengakibatkan $A^c\\in\\mathcal A$, dan untuk setiap $A_1,A_2,\\ldots\\in\\mathcal A$ berlaku $\\bigcup_{n=1}^\\infty A_n\\in\\mathcal A$."},
      {title:"Sistem $\\pi$ dan Sistem $\\lambda$",statement:"Kelas $\\mathcal P$ disebut sistem $\\pi$ jika tertutup terhadap irisan hingga. Kelas $\\mathcal L$ disebut sistem $\\lambda$ jika memuat $X$, tertutup terhadap komplemen relatif pada $X$, dan tertutup terhadap gabungan terhitung dari himpunan yang saling lepas."}
    ],
    results:[
      {kind:"proposition",title:"Sigma-Algebra Tertutup terhadap Irisan Terhitung",statement:"Jika $\\mathcal A$ sigma-algebra dan $A_n\\in\\mathcal A$ untuk setiap $n$, maka $\\bigcap_{n=1}^\\infty A_n\\in\\mathcal A$.",proof:[
        "Untuk setiap $n$, sifat komplemen memberi $A_n^c\\in\\mathcal A$.",
        "Ketertutupan terhadap gabungan terhitung memberi $\\bigcup_{n=1}^\\infty A_n^c\\in\\mathcal A$.",
        "Hukum De Morgan memberi $\\bigcap_{n=1}^\\infty A_n=(\\bigcup_{n=1}^\\infty A_n^c)^c$. Ketertutupan terhadap komplemen menyelesaikan pembuktian."
      ]}
    ],
    examples:[
      {title:"Sigma-Algebra pada Himpunan Tiga Elemen",problem:"Pada $X=\\{1,2,3\\}$, periksa apakah $\\mathcal A=\\{\\varnothing,\\{1\\},\\{2,3\\},X\\}$ merupakan sigma-algebra.",solution:["Keluarga memuat $X$ dan $\\varnothing$.","Komplemen $\\{1\\}$ adalah $\\{2,3\\}$ dan sebaliknya.","Setiap gabungan dari anggota keluarga tetap merupakan salah satu dari empat anggota tersebut."],conclusion:"$\\mathcal A$ merupakan sigma-algebra."}
    ],
    connections:"Sigma-algebra Borel dibangkitkan oleh himpunan terbuka. Pada teori peluang, sigma-algebra menjadi kumpulan event, sedangkan variabel acak didefinisikan sebagai fungsi terukur terhadap sigma-algebra tersebut."
  },

  "tup-measures": {
    title:"Ukuran dan Countable Additivity",
    focus:"Ukuran adalah fungsi himpunan nonnegatif yang bersifat aditif terhitung pada keluarga saling lepas. Dari aksioma ini diperoleh monotonisitas, subaditivitas, serta kontinuitas ukuran terhadap barisan himpunan.",
    definitions:[
      {title:"Ukuran",statement:"Pada ruang terukur $(X,\\mathcal A)$, fungsi $\\mu:\\mathcal A\\to[0,\\infty]$ disebut ukuran jika $\\mu(\\varnothing)=0$ dan untuk setiap keluarga saling lepas $A_1,A_2,\\ldots$ berlaku $\\mu(\\bigcup_n A_n)=\\sum_n\\mu(A_n)$."},
      {title:"Himpunan Nol",statement:"Himpunan $N\\in\\mathcal A$ disebut himpunan nol jika $\\mu(N)=0$."}
    ],
    results:[
      {kind:"theorem",title:"Kontinuitas Ukuran dari Bawah",statement:"Jika $A_1\\subseteq A_2\\subseteq\\cdots$ dan $A=\\bigcup_n A_n$, maka $\\mu(A_n)\\uparrow\\mu(A)$.",proof:[
        "Definisikan $B_1=A_1$ dan $B_n=A_n\\setminus A_{n-1}$ untuk $n\\ge2$. Himpunan $B_n$ saling lepas dan $A=\\bigcup_n B_n$.",
        "Untuk setiap $m$, berlaku $A_m=\\bigcup_{n=1}^m B_n$, sehingga $\\mu(A_m)=\\sum_{n=1}^m\\mu(B_n)$.",
        "Aditivitas terhitung memberi $\\mu(A)=\\sum_{n=1}^\\infty\\mu(B_n)$. Jumlah parsial pada ruas kanan meningkat menuju jumlah penuh, sehingga $\\mu(A_m)\\uparrow\\mu(A)$."
      ]}
    ],
    examples:[
      {title:"Counting Measure",problem:"Pada $X=\\mathbb N$, definisikan $\\mu(A)=|A|$ jika $A$ hingga dan $\\mu(A)=\\infty$ jika $A$ tak hingga. Hitung $\\mu(\\{2,4,6\\})$ dan $\\mu(2\\mathbb N)$.",solution:["Himpunan $\\{2,4,6\\}$ memiliki tiga elemen.","Himpunan bilangan genap positif tak hingga."],conclusion:"$\\mu(\\{2,4,6\\})=3$ dan $\\mu(2\\mathbb N)=\\infty$."}
    ],
    connections:"Probabilitas adalah ukuran dengan massa total satu. Integral Lebesgue dibangun terhadap ukuran, dan hampir semua konsep konvergensi probabilistik merupakan spesialisasi konsep ukuran."
  },

  "tup-outer-measure": {
    title:"Outer Measure",
    focus:"Outer measure mengukur semua subset tanpa terlebih dahulu menuntut keterukuran. Himpunan terukur kemudian dipilih melalui kriteria Carathéodory yang memaksa pemisahan ukuran luar secara aditif.",
    definitions:[
      {title:"Outer Measure",statement:"Fungsi $\\mu^*:2^X\\to[0,\\infty]$ disebut outer measure jika $\\mu^*(\\varnothing)=0$, bersifat monoton, dan countably subadditive, yaitu $\\mu^*(\\bigcup_n A_n)\\le\\sum_n\\mu^*(A_n)$."},
      {title:"Keterukuran Carathéodory",statement:"Himpunan $E\\subseteq X$ disebut $\\mu^*$-terukur jika untuk setiap $A\\subseteq X$ berlaku $\\mu^*(A)=\\mu^*(A\\cap E)+\\mu^*(A\\setminus E)$."}
    ],
    results:[
      {kind:"proposition",title:"Himpunan Nol Outer Measure Bersifat Carathéodory-Terukur",statement:"Jika $\\mu^*(E)=0$, maka $E$ terukur menurut Carathéodory.",proof:[
        "Diambil sebarang $A\\subseteq X$. Subaditivitas memberi $\\mu^*(A)\\le\\mu^*(A\\cap E)+\\mu^*(A\\setminus E)$.",
        "Monotonisitas memberi $\\mu^*(A\\cap E)\\le\\mu^*(E)=0$, sehingga suku pertama nol.",
        "Karena $A\\setminus E\\subseteq A$, monotonisitas memberi $\\mu^*(A\\setminus E)\\le\\mu^*(A)$. Kedua arah ketaksamaan memberi persamaan Carathéodory."
      ]}
    ],
    examples:[
      {title:"Outer Measure dari Panjang",problem:"Jelaskan mengapa outer measure Lebesgue dari satu titik $\\{x\\}\\subseteq\\mathbb R$ bernilai nol.",solution:["Untuk setiap $\\varepsilon>0$, titik $x$ dapat ditutupi interval dengan panjang kurang dari $\\varepsilon$.","Definisi outer measure mengambil infimum total panjang semua penutup interval.","Diperoleh $m^*(\\{x\\})\\le\\varepsilon$ untuk setiap $\\varepsilon>0$."],conclusion:"$m^*(\\{x\\})=0$."}
    ],
    connections:"Outer measure adalah tahap perantara dalam konstruksi ukuran Lebesgue dan perluasan Carathéodory. Kriteria Carathéodory memilih sigma-algebra terbesar tempat outer measure menjadi aditif terhitung."
  },

  "tup-extension": {
    title:"Teorema Perluasan Carathéodory",
    focus:"Perluasan Carathéodory memungkinkan ukuran dibangun dari data yang mula-mula hanya diberikan pada aljabar atau semiring himpunan. Premeasure diubah menjadi outer measure, lalu dibatasi pada himpunan Carathéodory-terukur.",
    definitions:[
      {title:"Premeasure",statement:"Jika $\\mathcal A_0$ adalah aljabar himpunan, fungsi $\\mu_0:\\mathcal A_0\\to[0,\\infty]$ disebut premeasure jika $\\mu_0(\\varnothing)=0$ dan bersifat aditif terhitung untuk setiap gabungan saling lepas yang hasilnya masih berada di $\\mathcal A_0$."},
      {title:"Ukuran Sigma-Finite",statement:"Ukuran $\\mu$ disebut sigma-finite jika ruang dapat ditulis $X=\\bigcup_n E_n$ dengan $\\mu(E_n)<\\infty$ untuk setiap $n$."}
    ],
    results:[
      {kind:"theorem",title:"Keunikan Perluasan pada Kasus Sigma-Finite",statement:"Jika dua ukuran sigma-finite $\\mu$ dan $\\nu$ pada $\\sigma(\\mathcal A_0)$ sepakat pada aljabar pembangkit $\\mathcal A_0$, maka $\\mu=\\nu$ pada seluruh $\\sigma(\\mathcal A_0)$.",proof:[
        "Gunakan penutup sigma-finite untuk mereduksi persoalan ke himpunan pembangkit yang mempunyai ukuran hingga.",
        "Pada satu bagian berukuran hingga, kelas $\\mathcal L=\\{A:\\mu(A)=\\nu(A)\\}$ merupakan sistem $\\lambda$ yang memuat sistem $\\pi$ pembangkit.",
        "Teorema $\\pi$-$\\lambda$ memberi bahwa sigma-algebra yang dibangkitkan berada di dalam $\\mathcal L$. Terapkan argumen pada setiap bagian penutup sigma-finite untuk memperoleh kesamaan global."
      ]}
    ],
    examples:[
      {title:"Panjang Interval sebagai Data Awal",problem:"Misalkan premeasure pada interval setengah terbuka ditentukan oleh $\\mu_0((a,b])=b-a$. Apa objek yang diperoleh setelah perluasan?",solution:["Panjang pada interval konsisten dengan aditivitas pada dekomposisi interval.","Konstruksi outer measure memperluas nilai ke semua subset.","Pembatasan pada sigma-algebra Carathéodory menghasilkan ukuran yang pada himpunan Borel setuju dengan panjang interval."],conclusion:"Konstruksi menghasilkan ukuran Lebesgue pada kelas terukur yang sesuai."}
    ],
    connections:"Teorema ini menjelaskan mengapa cukup menentukan ukuran pada interval atau cylinder sets. Sigma-finiteness menjadi syarat penting untuk keunikan dan muncul kembali pada Tonelli, Fubini, dan Radon–Nikodym."
  },

  "tup-lebesgue-stieltjes": {
    title:"Ukuran Lebesgue–Stieltjes",
    focus:"Fungsi naik kanan-kontinu pada garis real menentukan ukuran melalui incrementnya. Konstruksi Lebesgue–Stieltjes menyatukan ukuran Lebesgue, ukuran diskret, dan distribusi probabilitas pada $\\mathbb R$.",
    definitions:[
      {title:"Fungsi Distribusi Lebesgue–Stieltjes",statement:"Fungsi $F:\\mathbb R\\to\\mathbb R$ yang naik dan kanan-kontinu menentukan premeasure interval melalui $\\mu_F((a,b])=F(b)-F(a)$."},
      {title:"Ukuran Lebesgue–Stieltjes",statement:"Ukuran hasil perluasan dari premeasure interval yang ditentukan oleh $F$ disebut ukuran Lebesgue–Stieltjes dan ditulis $\\mu_F$."}
    ],
    results:[
      {kind:"proposition",title:"Massa Titik Sama dengan Besar Lompatan",statement:"Untuk ukuran Lebesgue–Stieltjes $\\mu_F$, berlaku $\\mu_F(\\{x\\})=F(x)-F(x^-)$, dengan $F(x^-)=\\lim_{t\\uparrow x}F(t)$.",proof:[
        "Ambil barisan $a_n\\uparrow x$ dengan $a_n<x$. Himpunan $(a_n,x]$ menurun menuju $\\{x\\}$.",
        "Karena $\\mu_F((a_1,x])<\\infty$, kontinuitas ukuran dari atas memberi $\\mu_F(\\{x\\})=\\lim_n\\mu_F((a_n,x])$.",
        "Definisi interval memberi $\\mu_F((a_n,x])=F(x)-F(a_n)$. Ambil limit untuk memperoleh $F(x)-F(x^-)$."
      ]}
    ],
    examples:[
      {title:"Distribusi dengan Satu Atom",problem:"Ambil $F(x)=0$ untuk $x<0$ dan $F(x)=1$ untuk $x\\ge0$. Tentukan ukuran yang dihasilkan.",solution:["Fungsi mempunyai satu lompatan sebesar 1 di titik 0.","Massa titik di 0 adalah $F(0)-F(0^-)=1$.","Tidak ada kenaikan di interval yang tidak memuat 0."],conclusion:"$\\mu_F$ adalah ukuran Dirac $\\delta_0$."}
    ],
    connections:"CDF variabel acak adalah fungsi Lebesgue–Stieltjes. Dengan demikian distribusi diskret, kontinu, dan campuran semuanya dapat diperlakukan sebagai ukuran pada kerangka yang sama."
  },

  "tup-lebesgue-measure": {
    title:"Ukuran Lebesgue",
    focus:"Ukuran Lebesgue memperluas konsep panjang interval ke sigma-algebra yang jauh lebih besar. Sifat utamanya adalah kesesuaian dengan panjang, invariansi translasi, dan kelengkapan setelah semua subset himpunan nol dimasukkan.",
    definitions:[
      {title:"Ukuran Lebesgue",statement:"Ukuran Lebesgue $m$ pada $\\mathbb R$ adalah ukuran lengkap yang memenuhi $m((a,b])=b-a$ dan diperoleh dari outer measure panjang melalui konstruksi Carathéodory."},
      {title:"Himpunan Borel dan Lebesgue-Terukur",statement:"Himpunan Borel berada dalam sigma-algebra yang dibangkitkan himpunan terbuka. Sigma-algebra Lebesgue adalah completion sigma-algebra Borel terhadap ukuran panjang."}
    ],
    results:[
      {kind:"proposition",title:"Invariansi Translasi",statement:"Jika $E$ Lebesgue-terukur dan $t\\in\\mathbb R$, maka $E+t$ Lebesgue-terukur dan $m(E+t)=m(E)$.",proof:[
        "Untuk interval, translasi tidak mengubah panjang. Oleh karena itu outer measure yang dibangun dari infimum total panjang penutup interval memenuhi $m^*(A+t)=m^*(A)$.",
        "Kriteria Carathéodory juga dipertahankan oleh translasi karena irisan dan selisih berkorespondensi melalui peta $x\\mapsto x+t$.",
        "Pembatasan outer measure pada himpunan terukur memberi $m(E+t)=m(E)$."
      ]}
    ],
    examples:[
      {title:"Ukuran Himpunan Rasional",problem:"Tentukan ukuran Lebesgue $\\mathbb Q\\cap[0,1]$.",solution:["Himpunan rasional pada interval dapat dienumerasi sebagai $\\{q_1,q_2,\\ldots\\}$.","Setiap singleton mempunyai ukuran nol.","Aditivitas terhitung memberi ukuran gabungan paling banyak jumlah nol."],conclusion:"$m(\\mathbb Q\\cap[0,1])=0$."}
    ],
    connections:"Ukuran Lebesgue adalah dasar integral Lebesgue pada garis real. Banyak pernyataan 'hampir di mana-mana' berarti pengecualian hanya terjadi pada himpunan berukuran Lebesgue nol."
  },

  "tup-complete-measure": {
    title:"Kelengkapan Ruang Ukur",
    focus:"Ruang ukur lengkap memasukkan setiap subset dari himpunan nol sebagai himpunan terukur. Completion penting karena operasi limit sering menghasilkan modifikasi fungsi pada himpunan nol.",
    definitions:[
      {title:"Ukuran Lengkap",statement:"Ruang ukur $(X,\\mathcal A,\\mu)$ disebut lengkap jika setiap $N\\in\\mathcal A$ dengan $\\mu(N)=0$ mempunyai semua subset $A\\subseteq N$ di dalam $\\mathcal A$."},
      {title:"Completion",statement:"Completion $\\overline{\\mathcal A}$ terdiri dari semua himpunan berbentuk $A\\cup N$ dengan $A\\in\\mathcal A$ dan $N$ subset suatu himpunan nol terukur."}
    ],
    results:[
      {kind:"theorem",title:"Perluasan Ukuran ke Completion",statement:"Definisi $\\bar\\mu(A\\cup N)=\\mu(A)$ menghasilkan ukuran lengkap yang memperluas $\\mu$ pada completion.",proof:[
        "Jika satu himpunan mempunyai dua representasi $A\\cup N=B\\cup M$, perbedaan simetris $A\\triangle B$ berada di dalam gabungan himpunan nol. Oleh karena itu $\\mu(A)=\\mu(B)$ dan definisi well-defined.",
        "Aditivitas terhitung diwarisi dari $\\mu$ setelah bagian-bagian nol dibuang, karena gabungan terhitung himpunan nol tetap berukuran nol.",
        "Setiap subset dari himpunan $\\bar\\mu$-nol termasuk completion melalui definisi. Dengan demikian ukuran baru lengkap."
      ]}
    ],
    examples:[
      {title:"Mengapa Completion Diperlukan",problem:"Jika $N$ Borel dengan $m(N)=0$ dan $A\\subseteq N$ bukan Borel, apakah $A$ Lebesgue-terukur?",solution:["Ukuran Lebesgue adalah completion ukuran Borel.","Setiap subset dari himpunan Borel nol dimasukkan dalam completion.","Ukuran subset tersebut ditetapkan nol."],conclusion:"$A$ Lebesgue-terukur dan $m(A)=0$."}
    ],
    connections:"Completion menjelaskan perbedaan antara sigma-algebra Borel dan sigma-algebra Lebesgue. Pada probabilitas, completion sering dipakai agar setiap subkejadian dari event probabilitas nol tetap terukur."
  },

  "tup-measurable-functions": {
    title:"Fungsi Terukur",
    focus:"Fungsi terukur adalah fungsi yang kompatibel dengan sigma-algebra. Keterukuran memastikan level sets dapat diukur dan menjadi syarat dasar agar integral Lebesgue serta distribusi variabel acak dapat didefinisikan.",
    definitions:[
      {title:"Fungsi Terukur",statement:"Untuk ruang terukur $(X,\\mathcal A)$ dan $(Y,\\mathcal B)$, fungsi $f:X\\to Y$ disebut terukur jika $f^{-1}(B)\\in\\mathcal A$ untuk setiap $B\\in\\mathcal B$."},
      {title:"Fungsi Sederhana",statement:"Fungsi terukur $s:X\\to[0,\\infty)$ disebut sederhana jika hanya mengambil hingga banyak nilai; ia dapat ditulis $s=\\sum_{k=1}^m a_k1_{A_k}$ dengan $A_k$ terukur."}
    ],
    results:[
      {kind:"theorem",title:"Limit Titik Demi Titik Fungsi Terukur Tetap Terukur",statement:"Jika $f_n:X\\to\\overline{\\mathbb R}$ terukur dan $f_n(x)\\to f(x)$ untuk setiap $x$, maka $f$ terukur.",proof:[
        "Untuk setiap $a\\in\\mathbb R$, identitas $\\{f>a\\}=\\bigcup_{r\\in\\mathbb Q,\,r>a}\\bigcup_{N=1}^\\infty\\bigcap_{n\\ge N}\\{f_n>r\\}$ dapat digunakan melalui karakterisasi limit.",
        "Setiap himpunan $\\{f_n>r\\}$ terukur, dan sigma-algebra tertutup terhadap gabungan serta irisan terhitung.",
        "Akibatnya $\\{f>a\\}$ terukur untuk setiap $a$. Karakterisasi level set memberi keterukuran $f$."
      ]}
    ],
    examples:[
      {title:"Indikator Himpunan",problem:"Tunjukkan bahwa $1_A$ terukur jika dan hanya jika $A$ terukur.",solution:["Pra-citra interval yang memisahkan 0 dan 1 menghasilkan $A$ atau $A^c$.","Jika $A$ terukur, semua pra-citra Borel dari indikator berada pada $\\{\\varnothing,A,A^c,X\\}$.","Sebaliknya, $A=1_A^{-1}((1/2,3/2))$."],conclusion:"Keterukuran indikator ekuivalen dengan keterukuran himpunannya."}
    ],
    connections:"Variabel acak hanyalah fungsi terukur dari ruang probabilitas ke ruang terukur. Fungsi sederhana menjadi blok pembangun integral Lebesgue untuk fungsi nonnegatif."
  },

  "tup-induced-measure": {
    title:"Ukuran Terinduksi dan Fungsi Distribusi",
    focus:"Sebuah fungsi terukur memindahkan ukuran dari domain ke kodomain melalui pushforward. Dalam probabilitas, pushforward ukuran probabilitas oleh variabel acak adalah distribusi variabel acak tersebut.",
    definitions:[
      {title:"Pushforward Measure",statement:"Jika $T:(X,\\mathcal A,\\mu)\\to(Y,\\mathcal B)$ terukur, ukuran terinduksi $T_\\#\\mu$ didefinisikan oleh $(T_\\#\\mu)(B)=\\mu(T^{-1}(B))$ untuk $B\\in\\mathcal B$."},
      {title:"Fungsi Distribusi",statement:"Untuk variabel acak real $X$, fungsi distribusinya adalah $F_X(x)=P(X\\le x)$."}
    ],
    results:[
      {kind:"proposition",title:"Pushforward adalah Ukuran",statement:"Jika $T$ terukur, maka $T_\\#\\mu$ merupakan ukuran pada $(Y,\\mathcal B)$.",proof:[
        "Pra-citra himpunan kosong adalah kosong, sehingga $(T_\\#\\mu)(\\varnothing)=0$.",
        "Jika $B_n$ saling lepas, pra-citra $T^{-1}(B_n)$ juga saling lepas dan $T^{-1}(\\bigcup_nB_n)=\\bigcup_nT^{-1}(B_n)$.",
        "Aditivitas terhitung $\\mu$ memberi $(T_\\#\\mu)(\\bigcup_nB_n)=\\sum_n(T_\\#\\mu)(B_n)$."
      ]}
    ],
    examples:[
      {title:"Distribusi Transformasi Diskret",problem:"Jika $P(X=-1)=P(X=1)=1/2$ dan $Y=X^2$, tentukan distribusi $Y$.",solution:["Untuk kedua kemungkinan nilai $X$, diperoleh $Y=1$.","Pra-citra $\\{1\\}$ adalah seluruh ruang sampel."],conclusion:"Distribusi $Y$ adalah ukuran Dirac di 1."}
    ],
    connections:"Rumus perubahan variabel untuk ekspektasi dapat ditulis $\\int g(T(x))d\\mu(x)=\\int g(y)d(T_\\#\\mu)(y)$. Konsep ini juga menjadi bahasa yang bersih untuk distribusi random vector."
  },

  "tup-simple-integral": {
    title:"Integral Fungsi Sederhana",
    focus:"Integral Lebesgue mula-mula didefinisikan untuk fungsi sederhana nonnegatif. Nilai fungsi dikalikan dengan ukuran level set, lalu dijumlahkan.",
    definitions:[
      {title:"Integral Fungsi Sederhana Nonnegatif",statement:"Jika $s=\\sum_{k=1}^m a_k1_{A_k}$ dengan $a_k\\ge0$ dan $A_k$ terukur saling lepas, didefinisikan $\\int s\\,d\\mu=\\sum_{k=1}^m a_k\\mu(A_k)$."},
      {title:"Integral pada Himpunan",statement:"Untuk $E\\in\\mathcal A$, didefinisikan $\\int_E s\\,d\\mu=\\int 1_Es\\,d\\mu$."}
    ],
    results:[
      {kind:"proposition",title:"Linearitas untuk Fungsi Sederhana Nonnegatif",statement:"Jika $s,t$ fungsi sederhana nonnegatif dan $a,b\\ge0$, maka $\\int(as+bt)d\\mu=a\\int s d\\mu+b\\int t d\\mu$.",proof:[
        "Ambil partisi terukur bersama yang memperhalus level sets $s$ dan $t$, sehingga keduanya konstan pada setiap atom partisi.",
        "Pada setiap atom $E_j$, tulis $s=s_j$ dan $t=t_j$. Integral $as+bt$ adalah $\\sum_j(as_j+bt_j)\\mu(E_j)$.",
        "Distributivitas jumlah hingga memberi $a\\sum_js_j\\mu(E_j)+b\\sum_jt_j\\mu(E_j)$, yaitu ruas kanan."
      ]}
    ],
    examples:[
      {title:"Integral Sederhana pada Interval",problem:"Pada $[0,3]$ dengan ukuran Lebesgue, ambil $s=2\\,1_{[0,1]}+5\\,1_{(1,3]}$. Hitung integralnya.",solution:["Bagian pertama bernilai 2 pada himpunan berukuran 1.","Bagian kedua bernilai 5 pada himpunan berukuran 2.","Jumlah kontribusi adalah $2(1)+5(2)$."],conclusion:"$\\int_0^3s\\,dm=12$."}
    ],
    connections:"Integral fungsi sederhana dipakai untuk mendefinisikan integral fungsi nonnegatif sebagai supremum semua integral fungsi sederhana yang berada di bawahnya."
  },

  "tup-lebesgue-integral": {
    title:"Integral Lebesgue",
    focus:"Integral Lebesgue membangun integral fungsi nonnegatif melalui aproksimasi dari bawah oleh fungsi sederhana, lalu memperluasnya ke fungsi bertanda menggunakan bagian positif dan negatif.",
    definitions:[
      {title:"Integral Fungsi Nonnegatif",statement:"Untuk fungsi terukur $f\\ge0$, didefinisikan $\\int f\\,d\\mu=\\sup\\{\\int s\\,d\\mu:0\\le s\\le f,\ s\\text{ sederhana}\\}$."},
      {title:"Fungsi Terintegralkan Lebesgue",statement:"Untuk fungsi real terukur, tulis $f=f^+-f^-$ dengan $f^+=\\max(f,0)$ dan $f^-=\\max(-f,0)$. Fungsi disebut integrabel jika $\\int|f|d\\mu<\\infty$, lalu $\\int f=\\int f^+-\\int f^-$."}
    ],
    results:[
      {kind:"proposition",title:"Ketaksamaan Dasar Integral",statement:"Jika $f$ integrabel, maka $|\\int f d\\mu|\\le\\int|f|d\\mu$.",proof:[
        "Secara titik demi titik berlaku $-|f|\\le f\\le|f|$.",
        "Monotonisitas integral memberi $-\\int|f|d\\mu\\le\\int f d\\mu\\le\\int|f|d\\mu$.",
        "Dua ketaksamaan tersebut ekuivalen dengan $|\\int f d\\mu|\\le\\int|f|d\\mu$."
      ]}
    ],
    examples:[
      {title:"Fungsi dengan Tanda",problem:"Hitung $\\int_{[-1,1]}x\\,dm$ menggunakan bagian positif dan negatif.",solution:["Pada $[0,1]$, bagian positif adalah $x$ dan integralnya $1/2$.","Pada $[-1,0]$, bagian negatif dari $x$ adalah $-x$ dan integralnya juga $1/2$.","Integral fungsi adalah selisih kedua bagian."],conclusion:"$\\int_{-1}^1x\\,dm=0$."}
    ],
    connections:"Ekspektasi variabel acak adalah integral Lebesgue terhadap ukuran probabilitas. Teorema MCT, Fatou, dan DCT mengatur kapan limit dapat dipertukarkan dengan integral."
  },

  "tup-riemann-lebesgue": {
    title:"Integral Riemann dan Lebesgue",
    focus:"Integral Riemann mengaproksimasi domain melalui partisi, sedangkan integral Lebesgue mengorganisasi nilai fungsi melalui himpunan terukur. Untuk fungsi Riemann-integrabel pada interval kompak, kedua integral memberikan nilai yang sama.",
    definitions:[
      {title:"Integrabilitas Riemann pada Interval Kompak",statement:"Fungsi terbatas $f:[a,b]\\to\\mathbb R$ Riemann-integrabel jika jumlah atas dan bawah Darboux dapat dibuat berbeda kurang dari setiap $\\varepsilon>0$."},
      {title:"Integrabilitas Lebesgue",statement:"Fungsi terukur $f$ Lebesgue-integrabel jika $\\int|f|dm<\\infty$."}
    ],
    results:[
      {kind:"theorem",title:"Kesesuaian Integral Riemann dan Lebesgue",statement:"Jika $f:[a,b]\\to\\mathbb R$ Riemann-integrabel, maka $f$ Lebesgue-terukur, Lebesgue-integrabel, dan kedua nilai integral sama.",proof:[
        "Dari partisi Darboux dipilih fungsi tangga bawah $s_n$ dan atas $t_n$ dengan $s_n\\le f\\le t_n$ serta $\\int(t_n-s_n)dm\\to0$.",
        "Fungsi tangga terukur. Dengan mengambil limsup dan liminf aproksimasi diperoleh representasi terukur yang sama dengan $f$ kecuali pada himpunan osilasi yang dapat dibuat berukuran nol.",
        "Monotonisitas memberi $\\int s_n dm\\le\\int f dm\\le\\int t_n dm$. Selisih batas menuju nol dan kedua batas menuju integral Riemann, sehingga integral Lebesgue mempunyai nilai yang sama."
      ]}
    ],
    examples:[
      {title:"Fungsi Dirichlet",problem:"Bandingkan integrabilitas fungsi $1_{\\mathbb Q\\cap[0,1]}$ dalam arti Riemann dan Lebesgue.",solution:["Setiap interval mengandung rasional dan irasional, sehingga jumlah Darboux bawah 0 dan atas 1 untuk setiap partisi.","Fungsi tidak Riemann-integrabel.","Himpunan rasional terhitung dan berukuran Lebesgue nol, sehingga indikatornya Lebesgue-integrabel."],conclusion:"Integral Lebesgue bernilai 0, sedangkan integral Riemann tidak ada."}
    ],
    connections:"Kriteria Lebesgue untuk integrabilitas Riemann menyatakan bahwa fungsi terbatas pada interval kompak Riemann-integrabel tepat ketika himpunan titik diskontinuitasnya berukuran nol."
  },

  "tup-mct": {
    title:"Monotone Convergence Theorem",
    focus:"MCT adalah teorema pertukaran limit dan integral untuk barisan fungsi terukur nonnegatif yang meningkat. Tidak diperlukan dominator integrabel.",
    definitions:[
      {title:"Konvergensi Monoton Naik",statement:"Ditulis $f_n\\uparrow f$ jika $f_n(x)\\le f_{n+1}(x)$ untuk setiap $n,x$ dan $f_n(x)\\to f(x)$."},
      {title:"Fungsi Nonnegatif Terukur",statement:"Fungsi $f:X\\to[0,\\infty]$ disebut nonnegatif terukur jika pra-citra himpunan Borel terukur dan nilainya tidak negatif."}
    ],
    results:[
      {kind:"theorem",title:"Monotone Convergence Theorem",statement:"Jika $0\\le f_n\\uparrow f$ hampir di mana-mana, maka $\\int f_n d\\mu\\uparrow\\int f d\\mu$.",proof:[
        "Monotonisitas integral memberi $\\int f_n d\\mu\\le\\int f_{n+1}d\\mu\\le\\int f d\\mu$, sehingga limit $L$ dari integral ada dan $L\\le\\int f$.",
        "Ambil fungsi sederhana $0\\le s\\le f$ dan $0<c<1$. Himpunan $E_n=\\{f_n\\ge cs\\}$ meningkat dan menutupi hampir semua support positif $s$.",
        "Pada $E_n$, berlaku $f_n\\ge cs$. Kontinuitas ukuran dari bawah memberi $L\\ge c\\int s d\\mu$. Ambil $c\\uparrow1$, lalu supremum atas semua $s\\le f$ untuk memperoleh $L\\ge\\int f d\\mu$."
      ]}
    ],
    examples:[
      {title:"Integral Limit Indikator",problem:"Ambil $f_n=1_{[0,n]}$ pada $\\mathbb R$. Tentukan limit integral terhadap ukuran Lebesgue.",solution:["Barisan meningkat menuju fungsi 1 pada seluruh $\\mathbb R$.","$\\int f_n dm=n$.","MCT memberi limit integral sama dengan integral fungsi limit, yaitu tak hingga."],conclusion:"$\\int f_n dm\\uparrow\\infty$."}
    ],
    connections:"Fatou dapat dibuktikan dengan MCT melalui barisan infimum ekor. DCT kemudian diperoleh dari Fatou dengan menerapkannya pada fungsi nonnegatif $g\\pm f_n$."
  },

  "tup-fatou": {
    title:"Lemma Fatou",
    focus:"Lemma Fatou memberi ketaksamaan satu arah ketika barisan fungsi nonnegatif tidak harus monoton. Ia merupakan alat dasar untuk memperoleh batas bawah integral limit inferior.",
    definitions:[
      {title:"Limit Inferior Fungsi",statement:"Untuk barisan $f_n$, didefinisikan $\\liminf_n f_n=\\lim_{n\\to\\infty}\\inf_{k\\ge n}f_k$."},
      {title:"Infimum Ekor",statement:"Fungsi $g_n=\\inf_{k\\ge n}f_k$ meningkat terhadap $n$ dan konvergen ke $\\liminf_nf_n$."}
    ],
    results:[
      {kind:"lemma",title:"Lemma Fatou",statement:"Jika $f_n\\ge0$ terukur, maka $\\int\\liminf_n f_n d\\mu\\le\\liminf_n\\int f_n d\\mu$.",proof:[
        "Definisikan $g_n=\\inf_{k\\ge n}f_k$. Barisan $g_n$ terukur, nonnegatif, dan meningkat menuju $\\liminf f_n$.",
        "MCT memberi $\\int\\liminf f_n d\\mu=\\lim_n\\int g_n d\\mu$.",
        "Untuk setiap $k\\ge n$, $g_n\\le f_k$, sehingga $\\int g_n\\le\\inf_{k\\ge n}\\int f_k$. Ambil limit terhadap $n$ untuk memperoleh ketaksamaan Fatou."
      ]}
    ],
    examples:[
      {title:"Fatou pada Indikator Bergerak",problem:"Jika $f_n=1_{[n,n+1]}$ pada $\\mathbb R$, bandingkan dua ruas Lemma Fatou.",solution:["Untuk setiap titik tetap, $f_n(x)$ akhirnya nol, sehingga $\\liminf f_n=0$.","Integral setiap $f_n$ adalah 1.","Ruas kiri 0 dan ruas kanan 1."],conclusion:"Ketaksamaan Fatou dapat ketat."}
    ],
    connections:"Fatou sering dipakai saat hanya tersedia nonnegativitas. Untuk memperoleh kesamaan limit integral diperlukan hipotesis tambahan, misalnya dominasi pada DCT."
  },

  "tup-dct": {
    title:"Dominated Convergence Theorem",
    focus:"DCT mengizinkan pertukaran limit dan integral ketika fungsi-fungsi dibatasi secara absolut oleh satu fungsi integrabel.",
    definitions:[
      {title:"Dominasi Integrabel",statement:"Barisan $f_n$ didominasi oleh $g$ jika $|f_n|\\le g$ hampir di mana-mana untuk semua $n$ dan $g$ integrabel."},
      {title:"Konvergensi Hampir di Mana-Mana",statement:"$f_n\\to f$ hampir di mana-mana jika himpunan titik tempat konvergensi gagal mempunyai ukuran nol."}
    ],
    results:[
      {kind:"theorem",title:"Dominated Convergence Theorem",statement:"Jika $f_n\\to f$ hampir di mana-mana dan $|f_n|\\le g$ dengan $g\\in L^1$, maka $f\\in L^1$, $\\int|f_n-f|d\\mu\\to0$, dan $\\int f_n d\\mu\\to\\int f d\\mu$.",proof:[
        "Dari limit dan dominasi diperoleh $|f|\\le g$ hampir di mana-mana, sehingga $f$ integrabel.",
        "Terapkan Fatou pada fungsi nonnegatif $2g-|f_n-f|$. Diperoleh $2\\int g\\le\\liminf_n(2\\int g-\\int|f_n-f|)$.",
        "Akibatnya $\\limsup_n\\int|f_n-f|\\le0$, sehingga konvergensi $L^1$ berlaku. Ketaksamaan $|\\int f_n-\\int f|\\le\\int|f_n-f|$ memberi konvergensi integral."
      ]}
    ],
    examples:[
      {title:"Pertukaran Limit dan Integral",problem:"Pada $[0,1]$, ambil $f_n(x)=x^n$. Tentukan $\\lim_n\\int_0^1f_n dx$ menggunakan DCT.",solution:["Untuk $x\\in[0,1)$, $x^n\\to0$, sedangkan di $x=1$ limitnya 1. Jadi limit hampir di mana-mana adalah 0.","Berlaku $0\\le x^n\\le1$, dan fungsi 1 integrabel pada $[0,1]$.","DCT memberi limit integral sama dengan integral limit."],conclusion:"$\\lim_n\\int_0^1x^n dx=0$."}
    ],
    connections:"DCT merupakan alat utama dalam ekspektasi, diferensiasi di bawah tanda integral, fungsi karakteristik, dan analisis limit statistik."
  },

  "tup-egorov-lusin": {
    title:"Teorema Egorov dan Lusin",
    focus:"Egorov dan Lusin menunjukkan bahwa pada ruang ukuran hingga, perilaku fungsi terukur dapat didekati oleh perilaku yang lebih teratur setelah mengabaikan himpunan berukuran kecil.",
    definitions:[
      {title:"Konvergensi Hampir Seragam",statement:"Barisan $f_n$ konvergen hampir seragam ke $f$ jika untuk setiap $\\varepsilon>0$ terdapat $E$ dengan $\\mu(E)<\\varepsilon$ sehingga $f_n\\to f$ seragam pada $X\\setminus E$."},
      {title:"Pendekatan Lusin",statement:"Secara informal, sifat Lusin menyatakan bahwa fungsi terukur bernilai hingga pada himpunan berukuran hingga dapat dibuat kontinu setelah membuang himpunan dengan ukuran sekecil yang diinginkan, dalam setting topologis yang sesuai."}
    ],
    results:[
      {kind:"theorem",title:"Teorema Egorov",statement:"Jika $\\mu(X)<\\infty$ dan $f_n\\to f$ hampir di mana-mana, maka untuk setiap $\\varepsilon>0$ terdapat $E$ dengan $\\mu(E)<\\varepsilon$ sehingga konvergensi seragam pada $X\\setminus E$.",proof:[
        "Untuk $k,m\\in\\mathbb N$, definisikan $E_{m,k}=\\bigcup_{n\\ge m}\\{|f_n-f|>1/k\\}$. Untuk $k$ tetap, $E_{m,k}\\downarrow\\varnothing$ setelah mengabaikan himpunan nol kegagalan konvergensi.",
        "Kontinuitas ukuran dari atas dan $\\mu(X)<\\infty$ memberi $\\mu(E_{m,k})\\downarrow0$. Pilih $m_k$ sehingga $\\mu(E_{m_k,k})<\\varepsilon/2^k$.",
        "Ambil $E=\\bigcup_kE_{m_k,k}$. Ukurannya kurang dari $\\varepsilon$. Di luar $E$, untuk setiap $k$, semua $n\\ge m_k$ memenuhi $|f_n-f|\\le1/k$, yang tepat menyatakan konvergensi seragam."
      ]}
    ],
    examples:[
      {title:"Mengapa Ukuran Hingga Penting",problem:"Pertimbangkan $f_n=1_{[n,\\infty)}$ pada $\\mathbb R$. Apakah konvergensi ke 0 hampir seragam pada seluruh $\\mathbb R$?",solution:["Untuk setiap titik tetap, $f_n(x)$ akhirnya nol, jadi konvergensi titik demi titik berlaku.","Agar seragam di luar himpunan $E$, semua ekor $[n,\\infty)$ harus akhirnya berada dalam $E$.","Himpunan seperti itu harus mempunyai ukuran tak hingga."],conclusion:"Teorema Egorov tidak berlaku tanpa hipotesis ukuran total hingga."}
    ],
    connections:"Egorov mengubah konvergensi hampir di mana-mana menjadi hampir seragam, sedangkan Lusin mengubah keterukuran menjadi hampir kontinuitas. Keduanya menggambarkan regularitas yang muncul setelah membuang himpunan kecil."
  },

  "tup-uniform-integrability": {
    title:"Uniform Integrability",
    focus:"Uniform integrability mengontrol massa integral pada ekor besar secara seragam terhadap seluruh keluarga fungsi. Konsep ini penting untuk memperkuat konvergensi dalam peluang menjadi konvergensi $L^1$.",
    definitions:[
      {title:"Uniform Integrability",statement:"Keluarga $\\mathcal F\\subseteq L^1$ disebut uniformly integrable jika $\\lim_{K\\to\\infty}\\sup_{f\\in\\mathcal F}\\int_{\\{|f|>K\\}}|f|d\\mu=0$."},
      {title:"Keluarga Terbatas dalam $L^p$",statement:"Keluarga $\\mathcal F$ terbatas di $L^p$ jika $\\sup_{f\\in\\mathcal F}\\|f\\|_p<\\infty$."}
    ],
    results:[
      {kind:"proposition",title:"Keterbatasan $L^p$ dengan $p>1$ Mengimplikasikan Uniform Integrability",statement:"Pada ruang probabilitas, jika $p>1$ dan $\\sup_{f\\in\\mathcal F}E|f|^p<\\infty$, maka $\\mathcal F$ uniformly integrable.",proof:[
        "Pada himpunan $\\{|f|>K\\}$ berlaku $|f|\\le |f|^p/K^{p-1}$.",
        "Integrasi memberi $E[|f|1_{\\{|f|>K\\}}]\\le K^{1-p}E|f|^p$.",
        "Ambil supremum atas $f\\in\\mathcal F$. Batas kanan paling besar $CK^{1-p}$ dan menuju nol karena $p>1$."
      ]}
    ],
    examples:[
      {title:"Keluarga dengan Momen Kedua Terbatas",problem:"Jika $E[X_n^2]\\le5$ untuk semua $n$, tunjukkan $\\{X_n\\}$ uniformly integrable.",solution:["Ambil $p=2$.","Batas seragam momen kedua adalah 5.","Proposisi memberi $E[|X_n|1_{|X_n|>K}]\\le5/K$ seragam terhadap $n$."],conclusion:"Supremum ekor menuju nol, sehingga keluarga uniformly integrable."}
    ],
    connections:"Teorema Vitali menghubungkan uniform integrability dengan konvergensi $L^1$. Dalam teori martingale, uniform integrability juga menjadi syarat penting untuk konvergensi martingale yang kuat."
  },

  "tup-holder": {
    title:"Ketaksamaan Hölder",
    focus:"Ketaksamaan Hölder mengontrol integral hasil kali fungsi dengan norma $L^p$ dan $L^q$ untuk eksponen konjugat. Hasil ini menjadi dasar dualitas $L^p$ dan pembuktian Minkowski.",
    definitions:[
      {title:"Eksponen Konjugat",statement:"Bilangan $p,q\\in(1,\\infty)$ disebut konjugat jika $1/p+1/q=1$."},
      {title:"Norma $L^p$",statement:"Untuk $1\\le p<\\infty$, didefinisikan $\\|f\\|_p=(\\int|f|^p d\\mu)^{1/p}$ pada kelas fungsi yang integral pangkatnya hingga."}
    ],
    results:[
      {kind:"theorem",title:"Ketaksamaan Hölder",statement:"Jika $1<p,q<\\infty$ konjugat, maka $\\int|fg|d\\mu\\le\\|f\\|_p\\|g\\|_q$.",proof:[
        "Jika salah satu norma nol atau tak hingga, kasus relevan langsung. Normalisasikan $F=|f|/\\|f\\|_p$ dan $G=|g|/\\|g\\|_q$.",
        "Ketaksamaan Young memberi $FG\\le F^p/p+G^q/q$.",
        "Integrasikan. Karena $\\int F^p=\\int G^q=1$, diperoleh $\\int FG\\le1/p+1/q=1$. Kalikan kembali dengan kedua norma."
      ]}
    ],
    examples:[
      {title:"Kontrol Integral Hasil Kali",problem:"Jika $f,g\\in L^2$, tunjukkan $fg\\in L^1$.",solution:["Ambil $p=q=2$.","Hölder menjadi ketaksamaan Cauchy–Schwarz $\\int|fg|\\le\\|f\\|_2\\|g\\|_2$.","Ruas kanan hingga."],conclusion:"$fg$ terintegralkan."}
    ],
    connections:"Hölder mereduksi ke Cauchy–Schwarz saat $p=q=2$. Hasil ini dipakai pada Minkowski dan menunjukkan bahwa setiap $g\\in L^q$ mendefinisikan fungsional linear terbatas pada $L^p$."
  },

  "tup-minkowski": {
    title:"Ketaksamaan Minkowski",
    focus:"Ketaksamaan Minkowski adalah ketaksamaan segitiga untuk norma $L^p$. Bersama Hölder, hasil ini membuktikan bahwa $L^p$ benar-benar merupakan ruang bernorma setelah fungsi yang sama hampir di mana-mana diidentifikasi.",
    definitions:[
      {title:"Norma Kandidat $L^p$",statement:"Untuk $1\\le p<\\infty$, tetapkan $\\|f\\|_p=(\\int|f|^p)^{1/p}$."},
      {title:"Kesetaraan Hampir di Mana-Mana",statement:"Dua fungsi dianggap sama di $L^p$ jika $f=g$ hampir di mana-mana."}
    ],
    results:[
      {kind:"theorem",title:"Ketaksamaan Minkowski",statement:"Untuk $1\\le p<\\infty$, berlaku $\\|f+g\\|_p\\le\\|f\\|_p+\\|g\\|_p$.",proof:[
        "Kasus $p=1$ mengikuti langsung dari $|f+g|\\le|f|+|g|$. Ambil $p>1$ dan eksponen konjugat $q$.",
        "Tuliskan $\\|f+g\\|_p^p=\\int|f+g|^{p-1}|f+g|\\le\\int|f||f+g|^{p-1}+\\int|g||f+g|^{p-1}$.",
        "Terapkan Hölder pada kedua integral. Norma $L^q$ dari $|f+g|^{p-1}$ sama dengan $\\|f+g\\|_p^{p-1}$. Bagi dengan faktor tersebut untuk memperoleh ketaksamaan."
      ]}
    ],
    examples:[
      {title:"Segitiga di $L^2$",problem:"Jika $\\|f\\|_2=3$ dan $\\|g\\|_2=4$, berikan batas atas untuk $\\|f+g\\|_2$.",solution:["Minkowski memberi $\\|f+g\\|_2\\le\\|f\\|_2+\\|g\\|_2$.","Substitusi menghasilkan batas $3+4$."],conclusion:"$\\|f+g\\|_2\\le7$."}
    ],
    connections:"Minkowski adalah langkah yang mengubah ruang fungsi terintegralkan menjadi ruang bernorma. Kelengkapan norma ini menghasilkan ruang Banach $L^p$."
  },

  "tup-lp": {
    title:"Ruang Lp",
    focus:"Ruang $L^p$ terdiri dari kelas ekuivalensi fungsi terukur yang pangkat absolutnya terintegralkan. Identifikasi hampir di mana-mana diperlukan agar norma bernilai nol hanya untuk elemen nol.",
    definitions:[
      {title:"Ruang $L^p$",statement:"Untuk $1\\le p<\\infty$, $L^p(\\mu)$ adalah ruang kelas ekuivalensi fungsi terukur $f$ dengan $\\int|f|^p d\\mu<\\infty$, dua fungsi diidentifikasi jika sama hampir di mana-mana."},
      {title:"Norma Esensial $L^\\infty$",statement:"$L^\\infty$ terdiri dari fungsi essentially bounded dengan norma $\\|f\\|_\\infty=\\operatorname{ess\\,sup}|f|$."}
    ],
    results:[
      {kind:"proposition",title:"Norma $L^p$ Terdefinisi pada Kelas Hampir di Mana-Mana",statement:"Jika $f=g$ hampir di mana-mana, maka $\\|f\\|_p=\\|g\\|_p$.",proof:[
        "Kesamaan hampir di mana-mana memberi $|f|^p=|g|^p$ hampir di mana-mana.",
        "Integral Lebesgue tidak berubah jika integrand dimodifikasi pada himpunan nol.",
        "Oleh karena itu $\\int|f|^p=\\int|g|^p$ dan setelah mengambil akar pangkat $p$ diperoleh kesamaan norma."
      ]}
    ],
    examples:[
      {title:"Keanggotaan Fungsi Pangkat",problem:"Untuk $f(x)=x^{-1/4}$ pada $(0,1)$, tentukan apakah $f\\in L^2(0,1)$.",solution:["$|f|^2=x^{-1/2}$.","Integral $\\int_0^1x^{-1/2}dx=2$ hingga."],conclusion:"$f\\in L^2(0,1)$."}
    ],
    connections:"Untuk $1\\le p\\le\\infty$, $L^p$ adalah Banach. Kasus $p=2$ mempunyai inner product dan menjadi Hilbert, yang memungkinkan konsep ortogonalitas dan proyeksi."
  },

  "tup-lp-dual": {
    title:"Dualitas Lp",
    focus:"Eksponen konjugat menghubungkan $L^p$ dan $L^q$ melalui pairing integral. Pada kondisi standar, setiap elemen $L^q$ menghasilkan fungsional linear terbatas pada $L^p$.",
    definitions:[
      {title:"Ruang Dual",statement:"Dual $X^*$ dari ruang bernorma $X$ adalah ruang semua fungsional linear kontinu $T:X\\to\\mathbb F$."},
      {title:"Pairing $L^p$–$L^q$",statement:"Untuk eksponen konjugat $p,q$, pairing alami didefinisikan oleh $\\langle f,g\\rangle=\\int fg\\,d\\mu$ ketika integral terdefinisi."}
    ],
    results:[
      {kind:"proposition",title:"Elemen $L^q$ Mendefinisikan Fungsional Terbatas pada $L^p$",statement:"Jika $g\\in L^q$ dan $1/p+1/q=1$, maka $T_g(f)=\\int fg d\\mu$ linear dan $|T_g(f)|\\le\\|g\\|_q\\|f\\|_p$.",proof:[
        "Linearitas mengikuti linearitas integral.",
        "Ketaksamaan Hölder memberi $\\int|fg|\\le\\|f\\|_p\\|g\\|_q$.",
        "Karena $|T_g(f)|\\le\\int|fg|$, diperoleh boundedness dan $\\|T_g\\|\\le\\|g\\|_q$."
      ]}
    ],
    examples:[
      {title:"Fungsional pada $L^2$",problem:"Jika $g\\in L^2$, definisikan $T(f)=\\int fg$. Berikan batas operator $T$.",solution:["Gunakan Hölder dengan $p=q=2$.","Diperoleh $|T(f)|\\le\\|f\\|_2\\|g\\|_2$."],conclusion:"$T$ kontinu dan $\\|T\\|\\le\\|g\\|_2$."}
    ],
    connections:"Teorema representasi dual penuh membutuhkan hipotesis ruang ukur dan membedakan kasus $1<p<\\infty$ dari endpoint. Pada $L^2$, dualitas terkait langsung dengan representasi Riesz di ruang Hilbert."
  },

  "tup-banach": {
    title:"Ruang Banach",
    focus:"Ruang Banach adalah ruang bernorma lengkap, yaitu setiap barisan Cauchy konvergen dalam norma ke elemen yang tetap berada di ruang tersebut.",
    definitions:[
      {title:"Ruang Banach",statement:"Ruang bernorma $(X,\\|\\cdot\\|)$ disebut Banach jika setiap barisan Cauchy dalam norma mempunyai limit di $X$."},
      {title:"Subruang Tertutup",statement:"Subruang linear $Y\\subseteq X$ disebut tertutup jika setiap limit di $X$ dari barisan elemen $Y$ tetap berada di $Y$."}
    ],
    results:[
      {kind:"proposition",title:"Subruang Tertutup Ruang Banach adalah Banach",statement:"Jika $X$ Banach dan $Y\\subseteq X$ subruang linear tertutup, maka $Y$ Banach dengan norma yang diwarisi.",proof:[
        "Ambil barisan Cauchy $(y_n)$ di $Y$. Barisan yang sama Cauchy di $X$.",
        "Kelengkapan $X$ memberi $y_n\\to x$ untuk suatu $x\\in X$.",
        "Karena $Y$ tertutup dan semua $y_n\\in Y$, limit $x$ berada di $Y$. Dengan demikian setiap barisan Cauchy di $Y$ konvergen di $Y$."
      ]}
    ],
    examples:[
      {title:"Ruang Barisan $\\ell^1$",problem:"Jelaskan mengapa limit norma dari barisan elemen $\\ell^1$ tetap perlu memiliki jumlah absolut hingga.",solution:["Kelengkapan $\\ell^1$ menjamin limit dalam norma $\\ell^1$ berada di ruang yang sama.","Konvergensi norma mengontrol jumlah absolut perbedaan terhadap limit."],conclusion:"$\\ell^1$ merupakan contoh ruang Banach."}
    ],
    connections:"Semua ruang $L^p$ untuk $1\\le p\\le\\infty$ lengkap. Banyak teorema analisis fungsional, seperti bounded inverse dan open mapping, memerlukan kelengkapan Banach."
  },

  "tup-hilbert": {
    title:"Ruang Hilbert",
    focus:"Ruang Hilbert adalah ruang inner product yang lengkap terhadap norma yang diinduksi inner product. Struktur sudut dan ortogonalitas memberi geometri yang jauh lebih kaya daripada ruang Banach umum.",
    definitions:[
      {title:"Ruang Hilbert",statement:"Ruang inner product $H$ disebut Hilbert jika lengkap terhadap norma $\\|x\\|=\\sqrt{\\langle x,x\\rangle}$."},
      {title:"Ortogonalitas",statement:"Dua vektor $x,y\\in H$ disebut ortogonal jika $\\langle x,y\\rangle=0$."}
    ],
    results:[
      {kind:"proposition",title:"Identitas Pythagoras",statement:"Jika $x\\perp y$ pada ruang Hilbert, maka $\\|x+y\\|^2=\\|x\\|^2+\\|y\\|^2$.",proof:[
        "Kembangkan $\\|x+y\\|^2=\\langle x+y,x+y\\rangle$.",
        "Diperoleh $\\langle x,x\\rangle+\\langle x,y\\rangle+\\langle y,x\\rangle+\\langle y,y\\rangle$.",
        "Ortogonalitas membuat dua suku silang nol. Sisa dua suku adalah kuadrat norma $x$ dan $y$."
      ]}
    ],
    examples:[
      {title:"Ortogonalitas di $L^2[0,2\\pi]$",problem:"Periksa bahwa $\\sin x$ dan $\\cos x$ ortogonal.",solution:["Inner product adalah $\\int_0^{2\\pi}\\sin x\\cos x\\,dx$.","Gunakan identitas $\\sin x\\cos x=\\frac12\\sin2x$.","Integral satu periode bernilai nol."],conclusion:"Kedua fungsi ortogonal di $L^2[0,2\\pi]$."}
    ],
    connections:"$L^2$ adalah Hilbert dan menjadi tempat alami teori Fourier. Proyeksi ortogonal, basis ortonormal, dan teorema representasi Riesz semuanya bertumpu pada struktur Hilbert."
  },

  "tup-riesz-fischer": {
    title:"Teorema Riesz–Fischer",
    focus:"Teorema Riesz–Fischer menegaskan kelengkapan $L^2$ dan, dalam formulasi Fourier, menghubungkan barisan koefisien kuadrat-terjumlah dengan elemen $L^2$.",
    definitions:[
      {title:"Barisan Cauchy di $L^2$",statement:"Barisan $(f_n)$ Cauchy di $L^2$ jika untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $\\|f_n-f_m\\|_2<\\varepsilon$ untuk $m,n\\ge N$."},
      {title:"Deret Kuadrat-Terjumlah",statement:"Barisan skalar $(a_n)$ berada di $\\ell^2$ jika $\\sum_n|a_n|^2<\\infty$."}
    ],
    results:[
      {kind:"theorem",title:"Kelengkapan $L^2$",statement:"Setiap barisan Cauchy dalam $L^2(\\mu)$ konvergen dalam norma $L^2$ ke suatu elemen $f\\in L^2(\\mu)$.",proof:[
        "Pilih subsekuens $(f_{n_k})$ sehingga $\\|f_{n_{k+1}}-f_{n_k}\\|_2<2^{-k}$. Definisikan $g_k=|f_{n_{k+1}}-f_{n_k}|$.",
        "Minkowski memberi $\\|\\sum_{k=1}^m g_k\\|_2\\le\\sum_k2^{-k}$, sehingga limit monoton $G=\\sum_kg_k$ berada di $L^2$ dan hingga hampir di mana-mana.",
        "Pada titik tempat $G<\\infty$, deret teleskopik $f_{n_1}+\\sum_k(f_{n_{k+1}}-f_{n_k})$ konvergen ke suatu $f$. Ekor didominasi oleh ekor $G$, dan estimasi norma menunjukkan $f_{n_k}\\to f$ di $L^2$. Sifat Cauchy barisan asal kemudian memberi $f_n\\to f$."
      ]}
    ],
    examples:[
      {title:"Deret Ortonormal",problem:"Jika $(e_n)$ ortonormal dan $\\sum|a_n|^2<\\infty$, jelaskan mengapa jumlah parsial $S_N=\\sum_{n=1}^Na_ne_n$ Cauchy di $L^2$.",solution:["Ortogonalitas memberi $\\|S_N-S_M\\|_2^2=\\sum_{n=M+1}^N|a_n|^2$.","Ekor deret kuadrat menuju nol."],conclusion:"$(S_N)$ Cauchy dan karena $L^2$ lengkap, ia mempunyai limit $L^2$."}
    ],
    connections:"Riesz–Fischer menjadi fondasi konvergensi Fourier dalam $L^2$ dan menunjukkan hubungan struktural antara ruang fungsi Hilbert dan ruang barisan $\\ell^2$."
  },

  "tup-linear-transformations": {
    title:"Operator Linear pada Ruang Fungsi",
    focus:"Operator linear memetakan fungsi ke fungsi sambil mempertahankan kombinasi linear. Dalam ruang bernorma, boundedness ekuivalen dengan kontinuitas dan diukur oleh norma operator.",
    definitions:[
      {title:"Operator Linear Terbatas",statement:"Operator linear $T:X\\to Y$ disebut terbatas jika terdapat $C<\\infty$ sehingga $\\|Tx\\|_Y\\le C\\|x\\|_X$ untuk setiap $x\\in X$."},
      {title:"Norma Operator",statement:"Norma operator didefinisikan oleh $\\|T\\|=\\sup_{\\|x\\|\\le1}\\|Tx\\|$, setara dengan konstanta terkecil dalam ketaksamaan boundedness."}
    ],
    results:[
      {kind:"theorem",title:"Linear Terbatas Ekuivalen dengan Kontinu",statement:"Operator linear antara ruang bernorma kontinu jika dan hanya jika terbatas.",proof:[
        "Jika $T$ terbatas, $\\|Tx-Ty\\|=\\|T(x-y)\\|\\le C\\|x-y\\|$, sehingga $T$ Lipschitz dan kontinu.",
        "Sebaliknya, jika $T$ kontinu di nol, terdapat $\\delta>0$ sehingga $\\|x\\|<\\delta$ memberi $\\|Tx\\|<1$.",
        "Untuk $x\\ne0$, terapkan kondisi pada $y=(\\delta/2)x/\\|x\\|$. Linearitas memberi $\\|Tx\\|<(2/\\delta)\\|x\\|$, sehingga $T$ terbatas."
      ]}
    ],
    examples:[
      {title:"Operator Integral",problem:"Pada $C[0,1]$ dengan norma supremum, definisikan $(Tf)(x)=\\int_0^xf(t)dt$. Berikan batas norma operator.",solution:["Untuk setiap $x$, $|Tf(x)|\\le\\int_0^x|f(t)|dt\\le x\\|f\\|_\\infty\\le\\|f\\|_\\infty$.","Ambil supremum terhadap $x$."],conclusion:"$\\|Tf\\|_\\infty\\le\\|f\\|_\\infty$, sehingga $\\|T\\|\\le1$."}
    ],
    connections:"Operator ekspektasi bersyarat, transformasi Fourier, semigroup Markov, dan operator transisi semuanya dapat dipandang sebagai operator linear pada ruang fungsi."
  }
};

export const measureProbabilityContentA = buildMeasureProbabilityContent(specs);
