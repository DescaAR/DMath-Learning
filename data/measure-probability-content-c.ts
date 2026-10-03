import { buildMeasureProbabilityContent, type MeasureProbabilityLessonSpec } from "@/data/measure-probability-content-utils";

const specs: Record<string, MeasureProbabilityLessonSpec> = {
  "tup-wlln": {
    title:"Weak Law of Large Numbers",
    focus:"Weak Law of Large Numbers menyatakan bahwa rata-rata sampel mendekati mean populasi dalam peluang ketika jumlah observasi membesar.",
    definitions:[
      {title:"Konvergensi dalam Peluang",statement:"$X_n\\to X$ dalam peluang jika untuk setiap $\\varepsilon>0$, $P(|X_n-X|>\\varepsilon)\\to0$."},
      {title:"Rata-Rata Sampel",statement:"Untuk $X_1,\\ldots,X_n$, rata-rata sampel adalah $\\bar X_n=n^{-1}\\sum_{k=1}^nX_k$."}
    ],
    results:[
      {kind:"theorem",title:"WLLN melalui Varians Hingga",statement:"Jika $X_1,X_2,\\ldots$ iid dengan $E[X_1]=\\mu$ dan $\\operatorname{Var}(X_1)=\\sigma^2<\\infty$, maka $\\bar X_n\\to\\mu$ dalam peluang.",proof:[
        "Independensi memberi $E[\\bar X_n]=\\mu$ dan $\\operatorname{Var}(\\bar X_n)=\\sigma^2/n$.",
        "Ketaksamaan Chebyshev memberi $P(|\\bar X_n-\\mu|>\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$.",
        "Batas kanan menuju nol saat $n\\to\\infty$. Definisi konvergensi dalam peluang memberi kesimpulan."
      ]}
    ],
    examples:[
      {title:"Rata-Rata Bernoulli",problem:"Jika $X_i$ iid Bernoulli$(p)$, apa limit $\\bar X_n$ menurut WLLN?",solution:["Mean setiap $X_i$ adalah $p$ dan varians $p(1-p)$ hingga.","Terapkan WLLN."],conclusion:"$\\bar X_n\\to p$ dalam peluang."}
    ],
    connections:"WLLN memberi justifikasi probabilistik bagi frekuensi relatif. SLLN memperkuat jenis konvergensi menjadi hampir pasti."
  },

  "tup-slln": {
    title:"Strong Law of Large Numbers",
    focus:"Strong Law of Large Numbers memperkuat WLLN dengan menjamin konvergensi rata-rata sampel hampir pasti.",
    definitions:[
      {title:"Konvergensi Hampir Pasti",statement:"$X_n\\to X$ hampir pasti jika $P(\\{\\omega:X_n(\\omega)\\to X(\\omega)\\})=1$."},
      {title:"Jumlah Parsial",statement:"Untuk urutan $X_n$, jumlah parsial ditulis $S_n=\\sum_{k=1}^nX_k$."}
    ],
    results:[
      {kind:"proposition",title:"Konvergensi Hampir Pasti Mengimplikasikan Konvergensi dalam Peluang",statement:"Jika $X_n\\to X$ hampir pasti, maka $X_n\\to X$ dalam peluang.",proof:[
        "Untuk $\\varepsilon>0$, indikator $1_{\\{|X_n-X|>\\varepsilon\\}}$ konvergen ke nol hampir pasti.",
        "Indikator dibatasi oleh fungsi 1 yang integrabel pada ruang peluang.",
        "DCT memberi $P(|X_n-X|>\\varepsilon)=E[1_{\\{|X_n-X|>\\varepsilon\\}}]\\to0$."
      ]}
    ],
    examples:[
      {title:"SLLN Bernoulli",problem:"Jika $X_i$ iid Bernoulli$(p)$, apa arti SLLN untuk frekuensi sukses?",solution:["$\\bar X_n$ adalah proporsi sukses pada $n$ percobaan.","SLLN memberi konvergensi hampir pasti ke $p$."],conclusion:"Pada hampir setiap lintasan, frekuensi relatif sukses menuju $p$."}
    ],
    connections:"Pembuktian SLLN umum menggunakan perangkat seperti maksimal inequality, truncation, Borel–Cantelli, atau martingale. Konvergensi hampir pasti lebih kuat daripada konvergensi dalam peluang."
  },

  "tup-series-independent": {
    title:"Deret Variabel Acak Independen",
    focus:"Deret variabel acak mempelajari konvergensi jumlah parsial $\\sum X_n$. Independensi memungkinkan kriteria kuat melalui probabilitas ekor, varians, dan truncation.",
    definitions:[
      {title:"Konvergensi Deret Acak",statement:"Deret $\\sum_nX_n$ konvergen hampir pasti jika jumlah parsial $S_n=\\sum_{k=1}^nX_k$ mempunyai limit hingga hampir pasti."},
      {title:"Deret Varians",statement:"Untuk peubah dengan varians hingga, deret $\\sum_n\\operatorname{Var}(X_n)$ mengukur total fluktuasi kuadrat dari suku-suku independen."}
    ],
    results:[
      {kind:"proposition",title:"Kriteria $L^2$ untuk Jumlah Parsial Independen Bermean Nol",statement:"Jika $X_n$ independen, $E[X_n]=0$, dan $\\sum_n\\operatorname{Var}(X_n)<\\infty$, maka jumlah parsial $S_n$ Cauchy di $L^2$.",proof:[
        "Untuk $m<n$, independensi dan mean nol memberi $E|S_n-S_m|^2=\\sum_{k=m+1}^n\\operatorname{Var}(X_k)$.",
        "Karena deret varians konvergen, ekornya menuju nol.",
        "Diperoleh $\\|S_n-S_m\\|_2\\to0$ saat $m,n\\to\\infty$, yaitu sifat Cauchy di $L^2$."
      ]}
    ],
    examples:[
      {title:"Deret dengan Varians Geometrik",problem:"Jika $X_n$ independen, mean nol, dan $\\operatorname{Var}(X_n)=4^{-n}$, apakah $S_n$ Cauchy di $L^2$?",solution:["Deret $\\sum4^{-n}$ konvergen.","Terapkan kriteria $L^2$."],conclusion:"Jumlah parsial Cauchy di $L^2$."}
    ],
    connections:"Teorema tiga deret Kolmogorov memberi kriteria hampir pasti yang lebih umum. Martingale juga menyediakan kerangka alami untuk jumlah parsial independen bermean nol."
  },

  "tup-mz-slln": {
    title:"Kolmogorov dan Marcinkiewicz–Zygmund SLLN",
    focus:"Versi Marcinkiewicz–Zygmund memperlihatkan bagaimana kondisi momen menentukan normalisasi yang tepat untuk jumlah parsial.",
    definitions:[
      {title:"Normalisasi Jumlah Parsial",statement:"Untuk $S_n=\\sum_{k=1}^nX_k$, normalisasi adalah pembagian $S_n$ oleh skala deterministik $a_n$ yang dipilih sesuai ukuran fluktuasi."},
      {title:"Momen Orde $p$",statement:"Peubah acak mempunyai momen absolut orde $p>0$ jika $E|X|^p<\\infty$."}
    ],
    results:[
      {kind:"proposition",title:"Momen Lebih Tinggi Mengimplikasikan Momen Lebih Rendah pada Ruang Peluang",statement:"Jika $0<q<p$ dan $E|X|^p<\\infty$, maka $E|X|^q<\\infty$.",proof:[
        "Pisahkan ruang menjadi $\\{|X|\\le1\\}$ dan $\\{|X|>1\\}$.",
        "Pada bagian pertama, $|X|^q\\le1$. Pada bagian kedua, karena $q<p$, berlaku $|X|^q\\le|X|^p$.",
        "Ekspektasi kedua bagian hingga, sehingga momen orde $q$ hingga."
      ]}
    ],
    examples:[
      {title:"Memeriksa Kondisi Momen",problem:"Jika $E|X|^{3/2}<\\infty$, momen orde apa di bawah $3/2$ yang otomatis hingga?",solution:["Gunakan proposisi dengan setiap $0<q<3/2$."],conclusion:"Semua momen absolut orde $q<3/2$ hingga."}
    ],
    connections:"SLLN klasik memakai normalisasi $n$. Hasil Marcinkiewicz–Zygmund mengganti skala sesuai eksponen momen dan memberi informasi tentang laju pertumbuhan jumlah parsial."
  },

  "tup-renewal": {
    title:"Teori Renewal",
    focus:"Renewal process memodelkan kejadian berulang dengan waktu antar-kejadian iid. Objek utamanya adalah counting process dan renewal function.",
    definitions:[
      {title:"Renewal Process",statement:"Jika $Y_1,Y_2,\\ldots$ iid positif dan $S_n=Y_1+\\cdots+Y_n$, maka $N(t)=\\max\\{n:S_n\\le t\\}$ disebut renewal counting process."},
      {title:"Renewal Function",statement:"Fungsi renewal didefinisikan $m(t)=E[N(t)]$."}
    ],
    results:[
      {kind:"proposition",title:"Identitas Renewal Function",statement:"Jika $F$ adalah distribusi interarrival, maka secara formal $m(t)=F(t)+\\int_0^tm(t-x)dF(x)$.",proof:[
        "Kondisikan pada waktu renewal pertama $Y_1=x$.",
        "Jika $x>t$, tidak ada renewal. Jika $x\\le t$, terdapat satu renewal awal dan proses sesudahnya mempunyai distribusi yang sama dengan proses baru selama waktu $t-x$.",
        "Ambil ekspektasi terhadap $Y_1$ untuk memperoleh persamaan renewal."
      ]}
    ],
    examples:[
      {title:"Interarrival Eksponensial",problem:"Jika interarrival eksponensial berlaju $\\lambda$, proses renewal apa yang diperoleh?",solution:["Sifat memoryless dan iid exponential menghasilkan proses Poisson.","Mean banyak kejadian sampai waktu $t$ adalah $\\lambda t$."],conclusion:"Renewal process tersebut adalah Poisson process dengan $m(t)=\\lambda t$."}
    ],
    connections:"Renewal theory digunakan pada reliability, antrean, replacement, dan random sums. Persamaan Wald sering dipakai pada jumlah hingga stopping time."
  },

  "tup-wald": {
    title:"Persamaan Wald",
    focus:"Persamaan Wald menghubungkan ekspektasi jumlah acak dengan ekspektasi banyak suku dan mean satu increment.",
    definitions:[
      {title:"Stopping Time",statement:"Peubah acak integer nonnegatif $N$ adalah stopping time terhadap filtrasi $(\\mathcal F_n)$ jika kejadian $\\{N\\le n\\}$ berada di $\\mathcal F_n$ untuk setiap $n$."},
      {title:"Random Sum",statement:"Jumlah acak berbentuk $S_N=\\sum_{k=1}^NX_k$."}
    ],
    results:[
      {kind:"theorem",title:"Persamaan Wald untuk Kasus Terintegralkan Standar",statement:"Jika $X_n$ iid integrabel dengan mean $\\mu$, $N$ stopping time integrabel, dan syarat integrabilitas pertukaran jumlah dipenuhi, maka $E[S_N]=\\mu E[N]$.",proof:[
        "Tulis $S_N=\\sum_{k=1}^\\infty X_k1_{\\{N\\ge k\\}}$.",
        "Kejadian $\\{N\\ge k\\}$ ditentukan oleh informasi sebelum $X_k$ dan, pada setting iid stopping time standar, independen dari $X_k$.",
        "Ambil ekspektasi dan tukar jumlah dengan ekspektasi sesuai syarat integrabilitas. Diperoleh $E[S_N]=\\sum_kE[X_k]P(N\\ge k)=\\mu\\sum_kP(N\\ge k)=\\mu E[N]$."
      ]}
    ],
    examples:[
      {title:"Jumlah Hadiah sampai Berhenti",problem:"Jika setiap putaran memberi mean hadiah 3 dan rata-rata banyak putaran sampai berhenti adalah 5, tentukan ekspektasi total di bawah syarat Wald.",solution:["Gunakan $E[S_N]=E[X_1]E[N]$.","Substitusi 3 dan 5."],conclusion:"Ekspektasi total adalah 15."}
    ],
    connections:"Wald dapat dilihat melalui martingale $S_n-n\\mu$ dan optional stopping. Syarat stopping serta integrabilitas harus diperiksa."
  },

  "tup-ergodic": {
    title:"Teorema Ergodik",
    focus:"Teori ergodik menghubungkan rata-rata sepanjang waktu dengan ekspektasi terhadap distribusi invarian.",
    definitions:[
      {title:"Transformasi Measure-Preserving",statement:"Pemetaan $T:X\\to X$ disebut measure-preserving jika $\\mu(T^{-1}A)=\\mu(A)$ untuk semua $A$ terukur."},
      {title:"Ergodik",statement:"Transformasi measure-preserving disebut ergodik jika setiap himpunan invariant $A$ mempunyai ukuran 0 atau 1 pada ruang probabilitas."}
    ],
    results:[
      {kind:"proposition",title:"Ekspektasi Rata-Rata Waktu Tetap",statement:"Jika $T$ measure-preserving dan $f\\in L^1$, maka $E[\\frac1n\\sum_{k=0}^{n-1}f\\circ T^k]=E[f]$.",proof:[
        "Measure-preserving memberi $\\int f\\circ T^k d\\mu=\\int f d\\mu$ untuk setiap $k$.",
        "Linearitas integral memberi ekspektasi rata-rata sama dengan rata-rata dari $n$ integral yang identik.",
        "Hasilnya $E[f]$."
      ]}
    ],
    examples:[
      {title:"Rata-Rata Shift Stasioner",problem:"Pada proses stasioner, apa ekspektasi rata-rata $n^{-1}\\sum_{k=1}^nX_k$ jika $E[X_k]=\\mu$?",solution:["Linearitas ekspektasi memberi rata-rata dari $n$ mean yang sama."],conclusion:"Ekspektasinya tetap $\\mu$."}
    ],
    connections:"Teorema ergodik Birkhoff memperkuat identitas ekspektasi menjadi konvergensi hampir pasti rata-rata waktu ke conditional expectation pada sigma-algebra invariant; pada sistem ergodik limitnya konstan."
  },

  "tup-lil": {
    title:"Law of the Iterated Logarithm",
    focus:"Law of the Iterated Logarithm mendeskripsikan amplop fluktuasi hampir pasti jumlah parsial pada skala yang lebih halus daripada SLLN dan CLT.",
    definitions:[
      {title:"Normalisasi Iterated Logarithm",statement:"Untuk jumlah parsial centered dengan varians satu, skala klasik LIL adalah $\\sqrt{2n\\log\\log n}$ untuk $n$ cukup besar."},
      {title:"Limit Superior Hampir Pasti",statement:"Pernyataan $\\limsup Z_n=1$ hampir pasti berarti equality tersebut berlaku pada himpunan lintasan berpeluang satu."}
    ],
    results:[
      {kind:"proposition",title:"Skala LIL Lebih Kecil daripada Skala Linear",statement:"$\\sqrt{2n\\log\\log n}/n\\to0$.",proof:[
        "Kuadrat rasio sama dengan $2\\log\\log n/n$.",
        "Karena $\\log\\log n=o(n)$, rasio kuadrat menuju nol.",
        "Rasio nonnegatif, sehingga rasionya sendiri menuju nol."
      ]}
    ],
    examples:[
      {title:"Membandingkan Skala",problem:"Bandingkan pertumbuhan $\\sqrt n$, $\\sqrt{n\\log\\log n}$, dan $n$.",solution:["Faktor $\\sqrt{\\log\\log n}$ membuat skala LIL lebih besar dari $\\sqrt n$.","Rasio terhadap $n$ menuju nol."],conclusion:"Skala LIL berada di antara skala CLT dan skala linear SLLN."}
    ],
    connections:"CLT mendeskripsikan distribusi fluktuasi pada skala $\\sqrt n$, sedangkan LIL mendeskripsikan batas fluktuasi lintasan hampir pasti sepanjang seluruh urutan."
  },

  "tup-weak-convergence": {
    title:"Konvergensi Lemah",
    focus:"Konvergensi lemah membandingkan distribusi melalui integral terhadap fungsi uji kontinu terbatas.",
    definitions:[
      {title:"Konvergensi Lemah Ukuran",statement:"Ukuran probabilitas $\\mu_n$ konvergen lemah ke $\\mu$, ditulis $\\mu_n\\Rightarrow\\mu$, jika $\\int f d\\mu_n\\to\\int f d\\mu$ untuk setiap $f$ kontinu terbatas."},
      {title:"Konvergensi dalam Distribusi",statement:"$X_n\\Rightarrow X$ jika hukum $\\mathcal L(X_n)$ konvergen lemah ke $\\mathcal L(X)$."}
    ],
    results:[
      {kind:"proposition",title:"Konvergensi dalam Peluang Mengimplikasikan Konvergensi dalam Distribusi",statement:"Jika $X_n\\to X$ dalam peluang, maka $X_n\\Rightarrow X$.",proof:[
        "Setiap subsekuens mempunyai subsubsekuens yang konvergen hampir pasti ke $X$.",
        "Untuk fungsi kontinu terbatas $f$, kontinuitas memberi $f(X_{n_k})\\to f(X)$ hampir pasti dan boundedness memberi dominator konstan.",
        "DCT memberi konvergensi ekspektasi sepanjang setiap subsubsekuens. Kriteria subsekuens memaksa seluruh urutan ekspektasi konvergen, sehingga konvergensi distribusi berlaku."
      ]}
    ],
    examples:[
      {title:"Konstanta Deterministik",problem:"Jika $X_n=1/n$, tentukan limit distribusinya.",solution:["$X_n\\to0$ deterministik, sehingga juga dalam peluang.","Gunakan implikasi ke distribusi."],conclusion:"$X_n\\Rightarrow0$."}
    ],
    connections:"Portmanteau theorem memberi banyak karakterisasi ekuivalen konvergensi lemah melalui CDF dan himpunan terbuka/tertutup."
  },

  "tup-tightness": {
    title:"Tightness dan Helly–Bray",
    focus:"Tightness mencegah massa probabilitas lari ke tak hingga dan menjadi kondisi compactness bagi keluarga ukuran probabilitas.",
    definitions:[
      {title:"Tightness",statement:"Keluarga ukuran probabilitas $\\{\\mu_\\alpha\\}$ pada ruang metrik disebut tight jika untuk setiap $\\varepsilon>0$ ada himpunan kompak $K$ dengan $\\sup_\\alpha\\mu_\\alpha(K^c)<\\varepsilon$."},
      {title:"Relative Compactness Lemah",statement:"Keluarga disebut relatif kompak lemah jika setiap barisan di dalamnya mempunyai subsekuens yang konvergen lemah."}
    ],
    results:[
      {kind:"proposition",title:"Keluarga dengan Support Kompak Bersama Bersifat Tight",statement:"Jika ada kompak $K$ dengan $\\mu_\\alpha(K)=1$ untuk semua $\\alpha$, maka keluarga tersebut tight.",proof:[
        "Ambil sebarang $\\varepsilon>0$.",
        "Gunakan kompak $K$ yang sama.",
        "Untuk semua $\\alpha$, $\\mu_\\alpha(K^c)=0<\\varepsilon$. Definisi tightness terpenuhi."
      ]}
    ],
    examples:[
      {title:"Distribusi pada Interval Tetap",problem:"Apakah semua distribusi yang ditopang pada $[0,1]$ membentuk keluarga tight?",solution:["$[0,1]$ kompak.","Setiap distribusi memberi massa satu pada interval tersebut."],conclusion:"Ya, keluarga tersebut tight."}
    ],
    connections:"Pada ruang Polish, Teorema Prokhorov menghubungkan tightness dengan relative compactness. Helly–Bray memberikan versi klasik untuk distribusi pada garis real."
  },

  "tup-skorohod": {
    title:"Teorema Skorohod dan Continuous Mapping",
    focus:"Skorohod representation mengubah konvergensi lemah menjadi konvergensi hampir pasti pada ruang peluang baru, sedangkan Continuous Mapping Theorem memindahkan konvergensi melalui fungsi kontinu.",
    definitions:[
      {title:"Continuous Mapping",statement:"Untuk fungsi kontinu $g$, transformasi distribusi dilakukan melalui pushforward $g_\\#\\mu$."},
      {title:"Coupling",statement:"Coupling dari distribusi $\\mu_n$ dan $\\mu$ adalah konstruksi peubah acak pada satu ruang peluang bersama dengan marginal yang telah ditentukan."}
    ],
    results:[
      {kind:"theorem",title:"Continuous Mapping Theorem",statement:"Jika $X_n\\Rightarrow X$ dan $g$ kontinu pada himpunan yang memuat $X$ hampir pasti, maka $g(X_n)\\Rightarrow g(X)$.",proof:[
        "Ambil fungsi uji kontinu terbatas $h$ pada kodomain $g$.",
        "Komposisi $h\\circ g$ kontinu terbatas pada titik kontinuitas yang relevan.",
        "Konvergensi lemah memberi $E[h(g(X_n))]\\to E[h(g(X))]$. Definisi konvergensi lemah menghasilkan kesimpulan."
      ]}
    ],
    examples:[
      {title:"Kuadrat dari Limit Normal",problem:"Jika $X_n\\Rightarrow Z$ dan $g(x)=x^2$, tentukan limit distribusi $X_n^2$.",solution:["Fungsi kuadrat kontinu di seluruh $\\mathbb R$.","Terapkan Continuous Mapping Theorem."],conclusion:"$X_n^2\\Rightarrow Z^2$."}
    ],
    connections:"Skorohod berguna untuk membangun coupling dengan konvergensi hampir pasti, sedangkan continuous mapping digunakan terus-menerus pada asymptotic statistics."
  },

  "tup-moment-method": {
    title:"Metode Momen",
    focus:"Metode momen membuktikan konvergensi distribusi dengan menunjukkan konvergensi semua momen menuju distribusi yang ditentukan secara unik oleh momennya.",
    definitions:[
      {title:"Momen Orde $k$",statement:"Momen orde $k$ variabel acak adalah $E[X^k]$ jika ekspektasinya terdefinisi."},
      {title:"Moment-Determinate",statement:"Distribusi disebut ditentukan oleh momennya jika tidak ada distribusi lain dengan seluruh momen yang sama."}
    ],
    results:[
      {kind:"proposition",title:"Konvergensi $L^p$ Memberi Konvergensi Momen Lebih Rendah",statement:"Jika $X_n\\to X$ di $L^p$ dan $1\\le q\\le p$, maka $X_n\\to X$ di $L^q$ pada ruang probabilitas.",proof:[
        "Hölder atau monotonicity norma pada ruang probabilitas memberi $\\|Y\\|_q\\le\\|Y\\|_p$ untuk $q\\le p$.",
        "Ambil $Y=X_n-X$.",
        "Karena $\\|X_n-X\\|_p\\to0$, batas tersebut memberi $\\|X_n-X\\|_q\\to0$."
      ]}
    ],
    examples:[
      {title:"Momen Normal Standar",problem:"Sebutkan dua momen pertama $Z\\sim N(0,1)$.",solution:["Simetri memberi $E[Z]=0$.","Definisi varians standar memberi $E[Z^2]=1$."],conclusion:"Momen pertama 0 dan kedua 1."}
    ],
    connections:"Metode momen memerlukan kontrol uniform integrability dan keunikan distribusi dari momen. Kondisi Carleman adalah salah satu syarat cukup untuk keunikan."
  },

  "tup-characteristic": {
    title:"Fungsi Karakteristik",
    focus:"Fungsi karakteristik adalah transformasi Fourier distribusi dan selalu terdefinisi karena modulus eksponensial kompleks sama dengan satu.",
    definitions:[
      {title:"Fungsi Karakteristik",statement:"Untuk variabel acak real $X$, fungsi karakteristiknya adalah $\\varphi_X(t)=E[e^{itX}]$."},
      {title:"Fungsi Karakteristik Vektor",statement:"Untuk $X\\in\\mathbb R^d$, $\\varphi_X(t)=E[e^{i\\langle t,X\\rangle}]$."}
    ],
    results:[
      {kind:"proposition",title:"Fungsi Karakteristik Jumlah Independen",statement:"Jika $X$ dan $Y$ independen, maka $\\varphi_{X+Y}(t)=\\varphi_X(t)\\varphi_Y(t)$.",proof:[
        "$e^{it(X+Y)}=e^{itX}e^{itY}$.",
        "Independensi membuat ekspektasi produk fungsi terukur dari $X$ dan $Y$ terfaktor.",
        "Diperoleh $E[e^{itX}]E[e^{itY}]$."
      ]}
    ],
    examples:[
      {title:"Bernoulli",problem:"Tentukan fungsi karakteristik $X\\sim Bernoulli(p)$.",solution:["$X=0$ dengan peluang $1-p$ dan $X=1$ dengan peluang $p$.","Hitung ekspektasi eksponensial."],conclusion:"$\\varphi_X(t)=1-p+pe^{it}$."}
    ],
    connections:"Fungsi karakteristik menentukan distribusi secara unik dan menjadi alat utama dalam CLT melalui perkalian transformasi."
  },

  "tup-inversion": {
    title:"Formula Inversi",
    focus:"Formula inversi menunjukkan bahwa distribusi dapat direkonstruksi dari fungsi karakteristiknya.",
    definitions:[
      {title:"Titik Kontinuitas CDF",statement:"Titik $x$ adalah titik kontinuitas CDF $F$ jika $F(x^-)=F(x)$, ekuivalen dengan tidak ada atom di $x$."},
      {title:"Transformasi Inversi",statement:"Formula inversi Fourier menghubungkan integral fungsi karakteristik dengan probabilitas interval atau density di bawah regularitas yang sesuai."}
    ],
    results:[
      {kind:"proposition",title:"Fungsi Karakteristik Menentukan Semua Atom melalui Distribusi",statement:"Jika dua distribusi mempunyai fungsi karakteristik yang sama dan formula inversi berlaku pada semua titik kontinuitas, maka kedua CDF sama.",proof:[
        "Formula inversi memberikan nilai $F(b)-F(a)$ dari fungsi karakteristik untuk titik kontinuitas $a,b$.",
        "Karena fungsi karakteristik sama, increment kedua CDF sama pada semua pasangan titik kontinuitas.",
        "CDF kanan-kontinu dan titik kontinuitasnya padat, sehingga kesamaan increment menentukan CDF secara keseluruhan."
      ]}
    ],
    examples:[
      {title:"Mengapa Inversi Penting",problem:"Jika dua variabel acak mempunyai fungsi karakteristik identik, apa kesimpulan utamanya?",solution:["Gunakan uniqueness theorem yang didasarkan pada formula inversi."],conclusion:"Kedua variabel mempunyai distribusi yang sama."}
    ],
    connections:"Keunikan ini memungkinkan pembuktian limit distribusi dengan hanya menganalisis fungsi karakteristik."
  },

  "tup-levy-continuity": {
    title:"Teorema Kontinuitas Lévy–Cramér",
    focus:"Teorema kontinuitas menghubungkan konvergensi titik demi titik fungsi karakteristik dengan konvergensi lemah distribusi.",
    definitions:[
      {title:"Konvergensi Fungsi Karakteristik",statement:"Urutan $\\varphi_n$ konvergen titik demi titik ke $\\varphi$ jika $\\varphi_n(t)\\to\\varphi(t)$ untuk setiap $t$."},
      {title:"Kontinuitas di Nol",statement:"Fungsi karakteristik selalu kontinu dan bernilai 1 di nol; pada arah balik, kontinuitas limit di nol menjadi syarat penting agar limit merupakan fungsi karakteristik."}
    ],
    results:[
      {kind:"proposition",title:"Konvergensi Lemah Mengimplikasikan Konvergensi Fungsi Karakteristik",statement:"Jika $X_n\\Rightarrow X$, maka $\\varphi_{X_n}(t)\\to\\varphi_X(t)$ untuk setiap $t$.",proof:[
        "Untuk $t$ tetap, fungsi $x\\mapsto e^{itx}$ kontinu dan terbatas.",
        "Definisi konvergensi lemah berlaku untuk setiap fungsi kontinu terbatas.",
        "Oleh karena itu $E[e^{itX_n}]\\to E[e^{itX}]$."
      ]}
    ],
    examples:[
      {title:"Limit Deterministik",problem:"Jika $X_n=1/n$, hitung limit fungsi karakteristiknya.",solution:["$\\varphi_{X_n}(t)=e^{it/n}$.","Limitnya 1 untuk semua $t$."],conclusion:"Limit adalah fungsi karakteristik konstanta 0."}
    ],
    connections:"Arah balik Teorema Lévy, dengan limit kontinu di nol, menjadi alat sentral untuk membuktikan CLT."
  },

  "tup-lindeberg-feller": {
    title:"CLT Lindeberg–Feller",
    focus:"CLT Lindeberg–Feller memperluas CLT iid ke triangular arrays independen dengan kontribusi individual yang menjadi kecil.",
    definitions:[
      {title:"Triangular Array",statement:"Triangular array adalah koleksi $X_{n,k}$ dengan $1\\le k\\le k_n$, sehingga setiap baris dapat mempunyai banyak suku berbeda."},
      {title:"Kondisi Lindeberg",statement:"Jika $s_n^2=\\sum_k\\operatorname{Var}(X_{n,k})$, kondisi Lindeberg meminta untuk setiap $\\varepsilon>0$, $s_n^{-2}\\sum_kE[X_{n,k}^2 1_{\\{|X_{n,k}|>\\varepsilon s_n\\}}]\\to0$."}
    ],
    results:[
      {kind:"proposition",title:"Kondisi Lindeberg Memaksa Kontribusi Varians Ekor Hilang",statement:"Di bawah kondisi Lindeberg, total varians dari suku yang lebih besar daripada $\\varepsilon s_n$ menjadi negligible setelah normalisasi.",proof:[
        "Pernyataan tersebut adalah kuantitas yang muncul langsung pada definisi kondisi Lindeberg.",
        "Setiap suku nonnegatif, sehingga jumlah terukur sebagai kontribusi varians dari event ekor.",
        "Definisi menyatakan rasio jumlah tersebut terhadap $s_n^2$ menuju nol."
      ]}
    ],
    examples:[
      {title:"Kasus IID Terbatas",problem:"Jika $X_i$ iid centered dan $|X_i|\\le M$, jelaskan mengapa kondisi Lindeberg akhirnya trivial.",solution:["Skala $s_n$ tumbuh seperti $\\sqrt n$ jika varians positif.","Untuk $n$ besar, $M<\\varepsilon s_n$.","Indikator ekor menjadi nol."],conclusion:"Syarat Lindeberg terpenuhi."}
    ],
    connections:"Teorema ini menunjukkan inti CLT adalah tidak adanya satu suku yang mendominasi varians total."
  },

  "tup-stable-laws": {
    title:"Distribusi Stabil dan Infinitely Divisible",
    focus:"Distribusi stabil tetap berada dalam keluarga yang sama setelah penjumlahan salinan independen dan rescaling. Infinite divisibility meminta distribusi dapat dipecah menjadi jumlah berapa pun banyak komponen iid.",
    definitions:[
      {title:"Distribusi Stabil",statement:"Distribusi $X$ stabil jika untuk setiap $n$ ada $a_n>0,b_n$ sehingga $X_1+\\cdots+X_n\\overset d=a_nX+b_n$ untuk salinan iid $X_i$."},
      {title:"Infinitely Divisible",statement:"Distribusi $\\mu$ infinitely divisible jika untuk setiap $n$ terdapat distribusi $\\mu_n$ dengan $\\mu=\\mu_n^{*n}$."}
    ],
    results:[
      {kind:"proposition",title:"Distribusi Stabil Bersifat Infinitely Divisible",statement:"Setiap distribusi stabil nondegenerat adalah infinitely divisible setelah penyesuaian affine yang sesuai.",proof:[
        "Stabilitas memberi representasi jumlah $n$ salinan distribusi sebagai transformasi affine dari satu salinan.",
        "Susun ulang transformasi affine untuk menyatakan distribusi $X$ sebagai distribusi jumlah $n$ peubah iid yang merupakan transformasi affine dari $X_i$.",
        "Dengan demikian hukum $X$ merupakan konvolusi ke-$n$ dari satu hukum untuk setiap $n$."
      ]}
    ],
    examples:[
      {title:"Normal sebagai Stabil",problem:"Jika $X_1,\\ldots,X_n$ iid $N(0,1)$, apa distribusi jumlahnya?",solution:["Jumlah normal independen tetap normal.","Varians jumlah adalah $n$."],conclusion:"$X_1+\\cdots+X_n\\overset d=\\sqrt n X$."}
    ],
    connections:"Distribusi stabil muncul sebagai kandidat limit jumlah ternormalisasi. Infinite divisibility berkaitan erat dengan proses Lévy."
  },

  "tup-clt-refinements": {
    title:"Penyempurnaan Central Limit Theorem",
    focus:"Penyempurnaan CLT mempelajari laju konvergensi dan koreksi terhadap aproksimasi normal, misalnya Berry–Esseen dan ekspansi Edgeworth.",
    definitions:[
      {title:"Jarak Kolmogorov",statement:"Untuk CDF $F,G$, jarak Kolmogorov adalah $d_K(F,G)=\\sup_x|F(x)-G(x)|$."},
      {title:"Laju Konvergensi CLT",statement:"Laju konvergensi mengukur seberapa cepat distribusi jumlah ternormalisasi mendekati distribusi normal dalam suatu metrik distribusi."}
    ],
    results:[
      {kind:"proposition",title:"Kontrol Seragam CDF Memberi Kontrol Titik Demi Titik",statement:"Jika $d_K(F_n,F)\\to0$, maka $F_n(x)\\to F(x)$ untuk setiap $x$.",proof:[
        "Untuk setiap $x$, $|F_n(x)-F(x)|\\le\\sup_y|F_n(y)-F(y)|=d_K(F_n,F)$.",
        "Ruas kanan menuju nol.",
        "Oleh karena itu perbedaan di setiap titik menuju nol."
      ]}
    ],
    examples:[
      {title:"Arti Batas Berry–Esseen",problem:"Jika diketahui $d_K(F_n,\\Phi)\\le C/\\sqrt n$, apa yang terjadi ketika $n$ dikalikan 4?",solution:["Batas berubah dari $C/\\sqrt n$ menjadi $C/(2\\sqrt n)$."],conclusion:"Batas galat teoritis berkurang setengah."}
    ],
    connections:"Penyempurnaan CLT penting ketika ukuran sampel terbatas dan sekadar pernyataan limit tidak cukup untuk menilai akurasi aproksimasi."
  }
};

export const measureProbabilityContentC = buildMeasureProbabilityContent(specs);
