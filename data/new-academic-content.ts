import type { BookExample, BookFormalItem, BookLessonContent } from "@/data/book-content-types";
import { newAcademicSubjects } from "@/data/new-academic-curricula";

type Profile={
  notation:{symbol:string;meaning:string}[];
  mistakes:string[];
  connections:string[];
  perspective:string;
};

const profiles:Record<string,Profile>={
  "riset-operasi":{
    notation:[
      {symbol:"$x$",meaning:"vektor variabel keputusan"},
      {symbol:"$c^Tx$",meaning:"fungsi tujuan linear"},
      {symbol:"$Ax\\le b$",meaning:"sistem kendala"},
      {symbol:"$z^*$",meaning:"nilai objektif optimal"},
      {symbol:"$\\pi$",meaning:"harga bayangan atau variabel dual ketika relevan"},
    ],
    perspective:"Setiap model dipelajari melalui empat lapisan: formulasi, struktur matematis, algoritma penyelesaian, dan interpretasi keputusan.",
    mistakes:[
      "Menulis model sebelum mendefinisikan variabel keputusan dan satuannya.",
      "Mencampur parameter yang diketahui dengan variabel keputusan.",
      "Menganggap solusi numerik optimal tanpa memeriksa feasibility dan kondisi optimalitas.",
      "Mengabaikan sensitivitas ketika parameter model berasal dari estimasi.",
      "Memilih algoritma hanya karena populer tanpa melihat struktur masalah.",
      "Menafsirkan hasil optimisasi di luar asumsi model."
    ],
    connections:[
      "Aljabar Linear menyediakan sistem persamaan, basis, matriks, dan dualitas linear.",
      "Teori Graf mendasari shortest path, spanning tree, flow, dan network optimization.",
      "Probabilitas diperlukan untuk inventory stokastik, antrean, Markov, simulasi, dan keputusan di bawah risiko.",
      "Analisis Numerik membantu memahami stabilitas, iterasi, dan implementasi algoritma optimisasi.",
      "Optimisasi konveks memberi bahasa yang lebih umum untuk KKT, duality, dan nonlinear programming.",
      "Pemodelan Matematika menghubungkan struktur formal dengan keputusan dunia nyata."
    ]
  },
  "statistika-terapan":{
    notation:[
      {symbol:"$X_1,\\ldots,X_n$",meaning:"sampel atau observasi"},
      {symbol:"$\\bar X$",meaning:"rata-rata sampel"},
      {symbol:"$s^2$",meaning:"varians sampel"},
      {symbol:"$\\theta$",meaning:"parameter populasi secara umum"},
      {symbol:"$\\widehat\\theta$",meaning:"estimator atau taksiran parameter"},
    ],
    perspective:"Setiap metode statistik dibahas melalui desain studi, asumsi, statistik yang digunakan, inferensi, diagnostik, ukuran efek, dan interpretasi substantif.",
    mistakes:[
      "Menganggap korelasi otomatis menunjukkan hubungan sebab-akibat.",
      "Memilih uji setelah melihat hasil tanpa memperhitungkan multiplicity.",
      "Hanya melaporkan p-value tanpa interval kepercayaan atau ukuran efek.",
      "Mengabaikan struktur desain ketika memilih model analisis.",
      "Menerapkan prosedur parametrik tanpa memeriksa asumsi yang relevan.",
      "Menggunakan output perangkat lunak tanpa menjelaskan arti statistiknya."
    ],
    connections:[
      "Probabilitas menyediakan distribusi sampling dan dasar inferensi.",
      "Aljabar Linear menjadi fondasi regresi berganda dan general linear model.",
      "Analisis Numerik membantu komputasi estimasi, bootstrap, dan optimisasi likelihood.",
      "Desain eksperimen menghubungkan randomisasi dengan inferensi kausal.",
      "Metode nonparametrik menyediakan alternatif ketika asumsi parametrik tidak sesuai.",
      "Komunikasi data diperlukan untuk menerjemahkan hasil matematis ke kesimpulan penelitian."
    ]
  },
  "statistika-matematika":{
    notation:[
      {symbol:"$(\\Omega,\\mathcal F,P)$",meaning:"ruang probabilitas"},
      {symbol:"$X\\sim F_\\theta$",meaning:"variabel acak dengan distribusi yang bergantung pada parameter $\\theta$"},
      {symbol:"$L(\\theta;x)$",meaning:"fungsi likelihood"},
      {symbol:"$T(X)$",meaning:"statistik dari sampel"},
      {symbol:"$\\mathbb E_\\theta$",meaning:"ekspektasi di bawah parameter $\\theta$"},
    ],
    perspective:"Fokus utama adalah alasan matematis di balik inferensi: distribusi sampling, optimalitas estimator, teori asimtotik, likelihood, sufficiency, testing, dan keputusan statistik.",
    mistakes:[
      "Menyamakan parameter, estimator, dan nilai estimasi.",
      "Menggunakan hasil asimtotik pada sampel kecil tanpa memeriksa kualitas pendekatan.",
      "Mengabaikan syarat regularitas ketika memakai Cramér–Rao atau teori MLE.",
      "Menganggap estimator tak bias selalu lebih baik daripada estimator bias.",
      "Mencampur probabilitas parameter dalam kerangka frequentist dengan probabilitas posterior Bayesian.",
      "Mengabaikan nuisance parameter dalam pengujian hipotesis komposit."
    ],
    connections:[
      "Teori Ukuran memberi fondasi rigor untuk variabel acak, ekspektasi, dan konvergensi.",
      "Analisis Real mendukung limit, Taylor, dan argumen asimtotik.",
      "Aljabar Linear penting pada normal multivariat, quadratic forms, dan linear models.",
      "Analisis Numerik diperlukan untuk optimisasi likelihood dan algoritma EM.",
      "Statistika Terapan menunjukkan bagaimana teori inferensi digunakan pada data nyata.",
      "Kalkulus Stokastik dan proses stokastik menggunakan probabilitas kondisional dan martingale yang lebih lanjut."
    ]
  },
  "matematika-diskrit":{
    notation:[
      {symbol:"$P,Q$",meaning:"proposisi"},
      {symbol:"$A,B$",meaning:"himpunan"},
      {symbol:"$R$",meaning:"relasi"},
      {symbol:"$G=(V,E)$",meaning:"graf dengan himpunan simpul $V$ dan sisi $E$"},
      {symbol:"$T(n)$",meaning:"biaya atau relasi rekurensi algoritma"},
    ],
    perspective:"Materi dibangun melalui definisi diskrit, contoh kecil, argumen pembuktian, representasi algoritmik, dan koneksi ke ilmu komputer.",
    mistakes:[
      "Menganggap beberapa contoh cukup untuk membuktikan pernyataan universal.",
      "Keliru menegasikan pernyataan dengan kuantor.",
      "Menggunakan notasi himpunan, relasi, dan fungsi secara tidak konsisten.",
      "Menyatakan algoritma benar hanya karena bekerja pada beberapa input.",
      "Mengabaikan kompleksitas ketika membandingkan algoritma.",
      "Mencampur walk, trail, path, circuit, dan cycle pada graf."
    ],
    connections:[
      "Logika menjadi fondasi teknik pembuktian pada seluruh matematika.",
      "Kombinatorika memperdalam counting, rekurensi, generating functions, dan graf.",
      "Teori Bilangan berhubungan langsung dengan aritmetika modular dan kriptografi.",
      "Teori Graf menyediakan model diskrit untuk jaringan, algoritma, dan optimisasi.",
      "Aljabar Boolean menghubungkan logika dengan rangkaian digital.",
      "Teori Komputasi memperluas gagasan algoritma menuju bahasa formal dan computability."
    ]
  },
  "kalkulus-stokastik":{
    notation:[
      {symbol:"$(\\Omega,\\mathcal F,P)$",meaning:"ruang probabilitas"},
      {symbol:"$(\\mathcal F_t)$",meaning:"filtrasi atau informasi hingga waktu $t$"},
      {symbol:"$W_t$",meaning:"Brownian motion standar"},
      {symbol:"$\\int_0^t H_s\\,dW_s$",meaning:"integral Itô"},
      {symbol:"$dX_t=b_t\\,dt+\\sigma_t\\,dW_t$",meaning:"bentuk diferensial persamaan stokastik"},
    ],
    perspective:"Halaman selalu membedakan intuisi lintasan acak dari definisi probabilistik yang rigor, kemudian menurunkan aturan kalkulus dan aplikasinya.",
    mistakes:[
      "Memperlakukan $dW_t$ seperti diferensial biasa tanpa mempertimbangkan quadratic variation.",
      "Mengabaikan syarat adapted/predictable pada integrand stokastik.",
      "Menerapkan optional stopping tanpa memeriksa syarat teoremanya.",
      "Menyamakan martingale dengan proses independen.",
      "Menggunakan perubahan ukuran tanpa memeriksa absolute continuity atau kondisi integrabilitas.",
      "Menafsirkan model finansial sebagai prediksi pasti terhadap pasar nyata."
    ],
    connections:[
      "Teori Ukuran dan Peluang memberi definisi conditional expectation, filtration, dan integrasi.",
      "Analisis Real memberi teori limit dan integrasi klasik sebagai pembanding.",
      "Persamaan Diferensial terhubung melalui stochastic differential equations.",
      "PDE muncul melalui generator, heat equation, Feynman–Kac, dan Black–Scholes.",
      "Statistika Matematika menggunakan martingale dan proses stokastik dalam teori lanjut.",
      "Analisis Numerik menyediakan metode simulasi dan aproksimasi SDE."
    ]
  },
  "teori-ukuran-probabilitas":{
    notation:[
      {symbol:"$(X,\\mathcal A,\\mu)$",meaning:"ruang ukur"},
      {symbol:"$\\int f\\,d\\mu$",meaning:"integral Lebesgue terhadap ukuran $\\mu$"},
      {symbol:"$L^p(\\mu)$",meaning:"ruang fungsi terintegralkan pangkat $p$"},
      {symbol:"$(\\Omega,\\mathcal F,P)$",meaning:"ruang probabilitas"},
      {symbol:"$X_n\\to X$",meaning:"konvergensi yang jenisnya harus dinyatakan"},
    ],
    perspective:"Struktur dibangun dari sigma-algebra dan measure, menuju integrasi, ruang fungsi, probabilitas modern, limit theorem, dan stochastic processes.",
    mistakes:[
      "Menganggap semua subset otomatis measurable.",
      "Menukar limit dan integral tanpa teorema yang menjamin pertukaran tersebut.",
      "Tidak membedakan kesetaraan titik demi titik dengan kesetaraan hampir di mana-mana.",
      "Mencampur konvergensi hampir pasti, dalam probabilitas, dalam distribusi, dan dalam $L^p$.",
      "Menggunakan Fubini tanpa syarat integrabilitas yang sesuai.",
      "Menyatakan conditional expectation sebagai bilangan, padahal secara umum ia merupakan variabel acak."
    ],
    connections:[
      "Analisis Real berkembang dari integral Riemann menuju Lebesgue dan ruang fungsi.",
      "Analisis Fungsional muncul melalui Banach, Hilbert, duality, dan operator.",
      "Statistika Matematika menggunakan weak convergence, CLT, conditional expectation, dan bootstrap.",
      "Kalkulus Stokastik memerlukan martingale, Brownian motion, dan perubahan ukuran.",
      "Transformasi Fourier dan konvolusi menghubungkan analisis dengan distribusi probabilitas.",
      "Proses Markov dan branching process menghubungkan probabilitas dengan model dinamik."
    ]
  }
};


function textbookFormalFallback(subject:string,title:string,keyIdeas:string[]):BookFormalItem[]{
  const text=(title+" "+keyIdeas.join(" ")).toLowerCase();

  if(subject==="riset-operasi"){
    if(/linear|simplex|feasible|objective|constraint/.test(text))return[
      {kind:"definition",title:"Daerah Feasible",statement:"Daerah feasible adalah himpunan seluruh vektor keputusan yang memenuhi semua kendala model."},
      {kind:"proposition",title:"Konveksitas Daerah Feasible Program Linear",statement:"Daerah feasible yang ditentukan oleh kendala linear merupakan himpunan konveks.",proof:["Diambil dua titik feasible $x$ dan $y$ serta $0\\le t\\le1$.","Untuk kendala $Ax\\le b$ dan $Ay\\le b$, diperoleh $A(tx+(1-t)y)=tAx+(1-t)Ay\\le tb+(1-t)b=b$.","Kendala persamaan dan nonnegativitas juga dipertahankan oleh kombinasi konveks.","Dengan demikian $tx+(1-t)y$ feasible."]},
      {kind:"note",title:"Titik Ekstrem dan Simplex",statement:"Metode simplex memanfaatkan fakta bahwa jika program linear mempunyai optimum hingga, terdapat solusi optimal pada titik ekstrem daerah feasible."}
    ];
    if(/dual|shadow|sensitiv/.test(text))return[
      {kind:"definition",title:"Masalah Dual",statement:"Masalah dual dibentuk dengan menukar peran kendala dan variabel serta menghubungkan koefisien melalui transpose matriks kendala."},
      {kind:"theorem",title:"Dualitas Lemah",statement:"Untuk primal maksimum $\\max\\{c^Tx:Ax\\le b,x\\ge0\\}$ dan dual minimum $\\min\\{b^Ty:A^Ty\\ge c,y\\ge0\\}$, setiap pasangan feasible memenuhi $c^Tx\\le b^Ty$.",proof:["Dari $A^Ty\\ge c$ dan $x\\ge0$ diperoleh $x^TA^Ty\\ge c^Tx$.","Dari $Ax\\le b$ dan $y\\ge0$ diperoleh $y^TAx\\le y^Tb$.","Karena $x^TA^Ty=y^TAx$, diperoleh $c^Tx\\le b^Ty$."]},
      {kind:"note",title:"Interpretasi Harga Bayangan",statement:"Pada rentang sensitivitas yang sah, variabel dual dapat ditafsirkan sebagai perubahan marginal nilai optimal terhadap perubahan ruas kanan kendala."}
    ];
    if(/transport|assignment|shortest|spanning|flow|network/.test(text))return[
      {kind:"definition",title:"Model Jaringan",statement:"Model jaringan merepresentasikan keputusan melalui simpul dan busur yang dapat membawa biaya, kapasitas, jarak, atau aliran."},
      {kind:"proposition",title:"Konservasi Aliran",statement:"Pada simpul transshipment, jumlah aliran masuk sama dengan jumlah aliran keluar.",proof:["Simpul transshipment tidak menciptakan atau menghilangkan komoditas.","Neraca massa pada simpul memberi jumlah masuk dikurangi jumlah keluar sama dengan nol.","Persamaan tersebut ekuivalen dengan konservasi aliran."]}
    ];
    if(/dynamic|bellman|stage|state/.test(text))return[
      {kind:"definition",title:"State dan Stage",statement:"Dalam dynamic programming, stage menyatakan tahap keputusan, sedangkan state merangkum informasi yang diperlukan untuk menentukan keputusan optimal berikutnya."},
      {kind:"proposition",title:"Prinsip Optimalitas Bellman",statement:"Bagian sisa dari kebijakan optimal harus optimal untuk submasalah yang dimulai dari state yang dicapai setelah keputusan awal.",proof:["Andaikan sisa kebijakan tidak optimal untuk state yang dicapai.","Ganti sisa tersebut dengan kebijakan yang lebih baik untuk submasalah itu.","Keputusan awal tetap sama, tetapi nilai keseluruhan membaik.","Hal ini bertentangan dengan optimalitas kebijakan semula."]}
    ];
    if(/queue|antrean|markov|poisson/.test(text))return[
      {kind:"definition",title:"Intensitas Lalu Lintas",statement:"Pada antrean satu server dasar, utilisasi didefinisikan oleh $\\rho=\\lambda/\\mu$, dengan $\\lambda$ laju kedatangan dan $\\mu$ laju pelayanan."},
      {kind:"proposition",title:"Kondisi Stabilitas Dasar M/M/1",statement:"Model M/M/1 mempunyai distribusi steady-state normalizable hanya jika $\\rho<1$.",proof:["Persamaan keseimbangan menghasilkan $p_n=\\rho^n p_0$.","Jumlah probabilitas adalah $p_0\\sum_{n\\ge0}\\rho^n$.","Deret geometri tersebut berhingga tepat ketika $|\\rho|<1$.","Karena laju nonnegatif, syaratnya menjadi $\\rho<1$."]}
    ];
    if(/inventory|newsvendor/.test(text))return[
      {kind:"definition",title:"Biaya Persediaan",statement:"Model inventory menyeimbangkan biaya pemesanan, penyimpanan, kekurangan, dan pembelian sesuai struktur permintaan."},
      {kind:"proposition",title:"EOQ Dasar",statement:"Untuk permintaan tahunan $D$, biaya pesan $K$, dan biaya simpan per unit per tahun $h$, kuantitas ekonomis adalah $Q^*=\\sqrt{2KD/h}$.",proof:["Biaya relevan per tahun adalah $C(Q)=KD/Q+hQ/2$.","Turunan pertama adalah $C'(Q)=-KD/Q^2+h/2$.","Persamaan $C'(Q)=0$ memberi $Q^2=2KD/h$.","Karena $C''(Q)=2KD/Q^3>0$, titik tersebut meminimumkan biaya."]}
    ];
    if(/nonlinear|kkt|quadratic|convex/.test(text))return[
      {kind:"definition",title:"Fungsi Konveks",statement:"Fungsi $f$ konveks pada himpunan konveks jika $f(tx+(1-t)y)\\le tf(x)+(1-t)f(y)$ untuk $0\\le t\\le1$."},
      {kind:"proposition",title:"Minimum Lokal Fungsi Konveks",statement:"Setiap minimum lokal fungsi konveks pada himpunan konveks adalah minimum global.",proof:["Andaikan $x^*$ minimum lokal tetapi terdapat $y$ dengan $f(y)<f(x^*)$.","Untuk $t>0$ kecil, titik $z=(1-t)x^*+ty$ berada sebarang dekat dengan $x^*$.","Konveksitas memberi $f(z)\\le(1-t)f(x^*)+tf(y)<f(x^*)$.","Ini bertentangan dengan minimum lokal."]}
    ];
  }

  if(subject==="statistika-terapan"){
    if(/sampling|survei|observational|experiment|randomi|design/.test(text))return[
      {kind:"definition",title:"Unit Eksperimen dan Perlakuan",statement:"Unit eksperimen adalah objek terkecil yang menerima perlakuan secara independen, sedangkan perlakuan adalah kondisi yang sengaja diterapkan peneliti."},
      {kind:"proposition",title:"Peran Randomisasi",statement:"Randomisasi mengubah penetapan perlakuan menjadi mekanisme probabilistik yang membantu memutus hubungan sistematis antara perlakuan dan faktor pengganggu sebelum perlakuan.",proof:["Sebelum randomisasi, karakteristik unit dapat berkorelasi dengan pilihan perlakuan.","Penetapan acak membuat peluang menerima perlakuan ditentukan oleh mekanisme randomisasi, bukan karakteristik unit.","Akibatnya bias sistematis dari aturan penetapan dapat dikendalikan dalam inferensi berbasis desain."]}
    ];
    if(/descriptive|mean|median|variance|boxplot|histogram/.test(text))return[
      {kind:"definition",title:"Rata-rata dan Varians Sampel",statement:"Untuk data $x_1,\\ldots,x_n$, rata-rata sampel adalah $\\bar x=n^{-1}\\sum_i x_i$ dan varians sampel adalah $s^2=(n-1)^{-1}\\sum_i(x_i-\\bar x)^2$."},
      {kind:"proposition",title:"Dekomposisi Jumlah Kuadrat",statement:"Untuk setiap konstanta $a$, berlaku $\\sum_i(x_i-a)^2=\\sum_i(x_i-\\bar x)^2+n(\\bar x-a)^2$.",proof:["Tuliskan $x_i-a=(x_i-\\bar x)+(\\bar x-a)$.","Kuadratkan dan jumlahkan terhadap $i$.","Suku silang lenyap karena $\\sum_i(x_i-\\bar x)=0$.","Tersisa dua suku pada identitas."]}
    ];
    if(/confidence|interval|estim|sample mean|proportion/.test(text))return[
      {kind:"definition",title:"Interval Kepercayaan",statement:"Interval kepercayaan adalah prosedur berbasis sampel yang menghasilkan interval acak dengan tingkat cakupan tertentu terhadap parameter di bawah model dan metode sampling yang ditetapkan."},
      {kind:"proposition",title:"Standard Error Rata-rata",statement:"Jika $X_1,\\ldots,X_n$ independen dengan varians $\\sigma^2$, maka $\\operatorname{Var}(\\bar X)=\\sigma^2/n$.",proof:["Gunakan linearitas varians untuk peubah acak independen.","$\\operatorname{Var}(\\bar X)=n^{-2}\\sum_i\\operatorname{Var}(X_i)=n^{-2}(n\\sigma^2)=\\sigma^2/n$."]}
    ];
    if(/hypothesis|uji|p-value|significance/.test(text))return[
      {kind:"definition",title:"p-value",statement:"p-value adalah probabilitas, di bawah hipotesis nol dan model yang digunakan, memperoleh statistik uji yang setidaknya se-ekstrem nilai observasi menurut arah alternatif."},
      {kind:"note",title:"Kesalahan Tipe I dan Tipe II",statement:"Kesalahan Tipe I terjadi ketika $H_0$ benar tetapi ditolak; kesalahan Tipe II terjadi ketika $H_0$ salah tetapi tidak ditolak."}
    ];
    if(/regression|regresi|correlation|korelasi/.test(text))return[
      {kind:"definition",title:"Model Regresi Linear",statement:"Model regresi linear sederhana ditulis $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$, dengan asumsi terhadap error disesuaikan dengan tujuan inferensi."},
      {kind:"proposition",title:"Persamaan Normal",statement:"Estimator least squares memenuhi $\\sum_i e_i=0$ dan $\\sum_i x_ie_i=0$.",proof:["Minimalkan $S(\\beta_0,\\beta_1)=\\sum_i(y_i-\\beta_0-\\beta_1x_i)^2$.","Turunan parsial terhadap kedua parameter disamakan dengan nol.","Dua persamaan hasil diferensiasi tepat menjadi persamaan normal yang dinyatakan."]}
    ];
    if(/anova|factorial|block|latin|ancova|repeated|mixed/.test(text))return[
      {kind:"definition",title:"Faktor dan Level",statement:"Faktor adalah variabel perlakuan atau klasifikasi yang dipelajari, sedangkan level adalah nilai atau kategori faktor yang dibandingkan."},
      {kind:"proposition",title:"Dekomposisi ANOVA Satu Arah",statement:"Dalam ANOVA satu arah, $SS_T=SS_{Tr}+SS_E$.",proof:["Tuliskan $y_{ij}-\\bar y_{..}=(\\bar y_{i.}-\\bar y_{..})+(y_{ij}-\\bar y_{i.})$.","Kuadratkan dan jumlahkan.","Suku silang hilang karena residual dalam setiap kelompok berjumlah nol.","Diperoleh jumlah kuadrat total sebagai jumlah antara-perlakuan dan error."]}
    ];
  }

  if(subject==="statistika-matematika"){
    if(/probability|probabilitas|axiom|conditional|independ/.test(text))return[
      {kind:"definition",title:"Ukuran Probabilitas",statement:"Ukuran probabilitas $P$ pada $(\\Omega,\\mathcal F)$ memenuhi $P(\\Omega)=1$, $P(A)\\ge0$, dan countable additivity pada kejadian saling lepas."},
      {kind:"proposition",title:"Aturan Bayes",statement:"Jika $B_1,\\ldots,B_k$ partisi dengan probabilitas positif, maka $P(B_j\\mid A)=\\frac{P(A\\mid B_j)P(B_j)}{\\sum_iP(A\\mid B_i)P(B_i)}$ untuk $P(A)>0$.",proof:["Gunakan definisi $P(B_j\\mid A)=P(A\\cap B_j)/P(A)$.","Pembilang sama dengan $P(A\\mid B_j)P(B_j)$.","Hukum probabilitas total memberi penyebut $P(A)=\\sum_iP(A\\mid B_i)P(B_i)$."]}
    ];
    if(/random variable|distribution|density|cdf|transform/.test(text))return[
      {kind:"definition",title:"Fungsi Distribusi Kumulatif",statement:"CDF peubah acak $X$ adalah $F_X(x)=P(X\\le x)$."},
      {kind:"proposition",title:"Sifat CDF",statement:"Setiap CDF monoton tak turun, kontinu dari kanan, serta mempunyai limit 0 di $-\\infty$ dan 1 di $+\\infty$.",proof:["Monotonisitas mengikuti inklusi kejadian $\\{X\\le x\\}\\subseteq\\{X\\le y\\}$ untuk $x<y$.","Kontinuitas dari kanan mengikuti continuity from above untuk kejadian $\\{X\\le x_n\\}$ dengan $x_n\\downarrow x$.","Dua limit ujung mengikuti continuity of probability pada kejadian yang meningkat ke $\\Omega$ atau menurun ke $\\varnothing$."]}
    ];
    if(/expectation|variance|moment|mgf/.test(text))return[
      {kind:"definition",title:"Ekspektasi",statement:"Ekspektasi $E[X]$ adalah integral $\\int X\\,dP$ ketika terdefinisi; pada kasus diskret menjadi $\\sum_x xP(X=x)$."},
      {kind:"proposition",title:"Linearitas Ekspektasi",statement:"Jika $X$ dan $Y$ integrabel, maka $E[aX+bY]=aE[X]+bE[Y]$.",proof:["Ekspektasi didefinisikan sebagai integral terhadap ukuran probabilitas.","Linearitas integral memberi hasil langsung."]}
    ];
    if(/sampling distribution|chi-square|student|order statistic/.test(text))return[
      {kind:"definition",title:"Statistik",statement:"Statistik adalah fungsi dari sampel acak yang tidak bergantung pada parameter populasi yang tidak diketahui."},
      {kind:"proposition",title:"Mean dan Varians Rata-rata Sampel",statement:"Untuk sampel iid dengan mean $\\mu$ dan varians $\\sigma^2$, berlaku $E[\\bar X]=\\mu$ dan $\\operatorname{Var}(\\bar X)=\\sigma^2/n$.",proof:["Linearitas ekspektasi memberi $E[\\bar X]=n^{-1}\\sum_i\\mu=\\mu$.","Independensi memberi $\\operatorname{Var}(\\bar X)=n^{-2}\\sum_i\\sigma^2=\\sigma^2/n$."]}
    ];
    if(/likelihood|maximum likelihood|mle|estimator|unbiased|cramer|fisher/.test(text))return[
      {kind:"definition",title:"Likelihood",statement:"Untuk data teramati $x$, likelihood $L(\\theta;x)$ adalah fungsi parameter yang diperoleh dari joint density atau mass function sampel dengan $x$ dipandang tetap."},
      {kind:"proposition",title:"Invariansi MLE",statement:"Jika $\\widehat\\theta$ memaksimumkan likelihood dan $\\eta=g(\\theta)$ dengan transformasi satu-satu pada ruang parameter, maka $g(\\widehat\\theta)$ adalah MLE untuk $\\eta$.",proof:["Menulis parameter baru tidak mengubah urutan nilai likelihood pada titik-titik parameter yang berkorespondensi.","Karena transformasi satu-satu, maksimum pada skala $\\theta$ berkorespondensi tepat dengan maksimum pada skala $\\eta$."]}
    ];
    if(/sufficien|factorization|complete statistic/.test(text))return[
      {kind:"definition",title:"Statistik Cukup",statement:"Statistik $T(X)$ cukup untuk parameter $\\theta$ jika distribusi kondisional sampel diberikan $T(X)$ tidak bergantung pada $\\theta$."},
      {kind:"note",title:"Kriteria Faktorisasi",statement:"Pada model terdominasi, sufficiency dapat diperiksa melalui faktorisasi joint density menjadi $g_\\theta(T(x))h(x)$."}
    ];
    if(/hypothesis|neyman|likelihood ratio|ump|test/.test(text))return[
      {kind:"definition",title:"Power Uji",statement:"Power pada parameter $\\theta$ adalah probabilitas menolak $H_0$ ketika nilai parameter sebenarnya adalah $\\theta$."},
      {kind:"note",title:"Prinsip Neyman–Pearson",statement:"Untuk hipotesis sederhana melawan sederhana, likelihood ratio menghasilkan uji most powerful pada taraf yang ditentukan."}
    ];
    if(/asymptotic|central limit|delta|convergence/.test(text))return[
      {kind:"theorem",title:"Central Limit Theorem IID",statement:"Jika $X_i$ iid dengan mean $\\mu$ dan varians $0<\\sigma^2<\\infty$, maka $\\frac{\\sqrt n(\\bar X_n-\\mu)}{\\sigma}$ konvergen dalam distribusi ke $N(0,1)$."},
      {kind:"note",title:"Peran CLT",statement:"CLT menjelaskan mengapa aproksimasi normal muncul pada banyak statistik yang dibentuk sebagai jumlah atau rata-rata."}
    ];
    if(/bayes|posterior|prior/.test(text))return[
      {kind:"definition",title:"Distribusi Posterior",statement:"Dalam inferensi Bayesian, posterior memenuhi $\\pi(\\theta\\mid x)\\propto L(\\theta;x)\\pi(\\theta)$."},
      {kind:"proposition",title:"Posterior sebagai Pembaruan",statement:"Rasio posterior dua nilai parameter sama dengan rasio prior dikalikan likelihood ratio.",proof:["Tuliskan formula Bayes untuk kedua nilai parameter.","Konstanta normalisasi yang sama saling menghilangkan ketika dibagi.","Tersisa hasil kali prior odds dan likelihood ratio."]}
    ];
  }

  if(subject==="matematika-diskrit"){
    if(/logic|logika|proposition|predikat|quantifier|inferensi/.test(text))return[
      {kind:"definition",title:"Tautologi",statement:"Tautologi adalah proposisi majemuk yang bernilai benar untuk setiap penetapan nilai kebenaran variabel proposisionalnya."},
      {kind:"proposition",title:"Kontraposisi",statement:"Implikasi $P\\to Q$ ekuivalen secara logis dengan kontraposisinya $\\neg Q\\to\\neg P$.",proof:["$P\\to Q$ ekuivalen dengan $\\neg P\\lor Q$.","$\\neg Q\\to\\neg P$ ekuivalen dengan $Q\\lor\\neg P$.","Kedua disjungsi sama oleh komutativitas."]}
    ];
    if(/proof|bukti|induction|induksi/.test(text))return[
      {kind:"theorem",title:"Prinsip Induksi Matematika",statement:"Jika $P(1)$ benar dan $P(k)\\Rightarrow P(k+1)$ untuk setiap $k\\ge1$, maka $P(n)$ benar untuk seluruh $n\\ge1$.",proof:["Andaikan himpunan bilangan asli yang membuat $P$ salah tidak kosong.","Ambil elemen terkecil $m$ dari himpunan tersebut.","Karena basis benar, $m>1$, sehingga $P(m-1)$ benar.","Langkah induksi memberi $P(m)$ benar, kontradiksi."]}
    ];
    if(/set|himpunan|function|fungsi|sequence|sum/.test(text))return[
      {kind:"definition",title:"Fungsi",statement:"Fungsi $f:A\\to B$ memasangkan setiap elemen domain $A$ dengan tepat satu elemen kodomain $B$."},
      {kind:"proposition",title:"Komposisi Fungsi Injektif",statement:"Jika $f:A\\to B$ dan $g:B\\to C$ injektif, maka $g\\circ f$ injektif.",proof:["Andaikan $(g\\circ f)(x_1)=(g\\circ f)(x_2)$.","Injektivitas $g$ memberi $f(x_1)=f(x_2)$.","Injektivitas $f$ memberi $x_1=x_2$."]}
    ];
    if(/divisib|prime|gcd|congru|modular|number theory/.test(text))return[
      {kind:"definition",title:"Kongruensi",statement:"Untuk $m\\ge1$, $a\\equiv b\\pmod m$ jika dan hanya jika $m\\mid(a-b)$."},
      {kind:"proposition",title:"Kompatibilitas Kongruensi",statement:"Jika $a\\equiv b\\pmod m$ dan $c\\equiv d\\pmod m$, maka $a+c\\equiv b+d\\pmod m$ dan $ac\\equiv bd\\pmod m$.",proof:["Dari hipotesis, $m\\mid(a-b)$ dan $m\\mid(c-d)$.","Jumlah selisih memberi $m\\mid[(a+c)-(b+d)]$.","Untuk hasil kali, $ac-bd=c(a-b)+b(c-d)$, yang juga habis dibagi $m$."]}
    ];
    if(/recurr|rekur|algorithm|algoritma|complexity/.test(text))return[
      {kind:"definition",title:"Relasi Rekurensi",statement:"Relasi rekurensi mendefinisikan suku barisan melalui suku-suku sebelumnya bersama kondisi awal."},
      {kind:"note",title:"Kebenaran Algoritma",statement:"Analisis algoritma membedakan kebenaran, terminasi, dan kompleksitas. Loop invariant sering digunakan untuk membuktikan kebenaran iteratif."}
    ];
    if(/count|permut|kombin|pigeon|inclusion|binomial/.test(text))return[
      {kind:"theorem",title:"Prinsip Pigeonhole Umum",statement:"Jika $N$ objek ditempatkan ke $k$ kotak, terdapat kotak yang memuat sedikitnya $\\lceil N/k\\rceil$ objek.",proof:["Jika semua kotak memuat paling banyak $\\lceil N/k\\rceil-1$, jumlah objek kurang dari $N$.","Kontradiksi memberi hasil yang dinyatakan."]},
      {kind:"proposition",title:"Koefisien Binomial",statement:"Banyak $r$-subhimpunan dari himpunan beranggota $n$ adalah $\\binom nr=\\frac{n!}{r!(n-r)!}$.",proof:["Hitung ordered selections sebanyak $n!/(n-r)!$.","Setiap subset dihitung $r!$ kali oleh urutan unsur.","Bagi dengan $r!$."]}
    ];
    if(/relation|relasi|equivalence|partial order/.test(text))return[
      {kind:"definition",title:"Relasi Ekuivalensi",statement:"Relasi pada himpunan disebut ekuivalensi jika refleksif, simetris, dan transitif."},
      {kind:"theorem",title:"Relasi Ekuivalensi dan Partisi",statement:"Setiap relasi ekuivalensi menghasilkan partisi menjadi kelas ekuivalensi, dan setiap partisi menghasilkan relasi ekuivalensi.",proof:["Kelas ekuivalensi dua elemen yang beririsan harus sama oleh simetri dan transitivitas, sehingga kelas-kelas membentuk partisi.","Sebaliknya, definisikan $x\\sim y$ jika keduanya berada pada blok partisi yang sama.","Relasi tersebut langsung refleksif, simetris, dan transitif."]}
    ];
    if(/graph|graf|degree|path|cycle|tree|pohon|spanning|color/.test(text))return[
      {kind:"definition",title:"Graf Sederhana",statement:"Graf sederhana $G=(V,E)$ mempunyai sisi berupa pasangan tak berurut dua simpul berbeda."},
      {kind:"theorem",title:"Handshaking Theorem",statement:"Pada graf hingga, $\\sum_{v\\in V}\\deg(v)=2|E|$.",proof:["Hitung pasangan insidensi simpul–sisi.","Dari sisi simpul terdapat $\\sum_v\\deg(v)$ pasangan.","Setiap sisi mempunyai dua ujung, sehingga dari sisi sisi terdapat $2|E|$ pasangan."]}
    ];
    if(/boolean|automata|finite-state|turing/.test(text))return[
      {kind:"definition",title:"Aljabar Boolean",statement:"Aljabar Boolean menggunakan operasi logika seperti AND, OR, dan komplemen pada elemen yang memenuhi hukum-hukum Boolean."},
      {kind:"definition",title:"Finite-State Machine",statement:"Finite-state machine terdiri atas himpunan state hingga, alfabet input, fungsi transisi, state awal, dan bila relevan himpunan state penerima."}
    ];
  }

  if(subject==="kalkulus-stokastik"){
    if(/conditional expectation|ekspektasi bersyarat|filtration|filtrasi/.test(text))return[
      {kind:"definition",title:"Ekspektasi Bersyarat",statement:"$E[X\\mid\\mathcal G]$ adalah peubah acak $\\mathcal G$-measurable yang mempunyai integral sama dengan $X$ pada setiap kejadian $A\\in\\mathcal G$."},
      {kind:"proposition",title:"Tower Property",statement:"Jika $\\mathcal H\\subseteq\\mathcal G$, maka $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$.",proof:["Kedua sisi $\\mathcal H$-measurable.","Untuk setiap $A\\in\\mathcal H$, integral sisi kiri pada $A$ sama dengan integral $E[X\\mid\\mathcal G]$ pada $A$.","Karena $A\\in\\mathcal G$, integral tersebut sama dengan integral $X$ pada $A$.","Keunikan ekspektasi bersyarat memberi identitas."]}
    ];
    if(/martingale|optional|stopping/.test(text))return[
      {kind:"definition",title:"Martingale",statement:"Proses adapted integrabel $(M_n)$ adalah martingale jika $E[M_{n+1}\\mid\\mathcal F_n]=M_n$."},
      {kind:"proposition",title:"Martingale Memiliki Mean Konstan",statement:"Jika $(M_n)$ martingale integrabel, maka $E[M_n]=E[M_0]$ untuk seluruh $n$.",proof:["Ambil ekspektasi pada identitas martingale.","Tower property memberi $E[M_{n+1}]=E[E[M_{n+1}\\mid\\mathcal F_n]]=E[M_n]$.","Iterasi terhadap $n$ memberi mean konstan."]}
    ];
    if(/brownian|wiener/.test(text))return[
      {kind:"definition",title:"Brownian Motion Standar",statement:"Proses $(W_t)_{t\\ge0}$ mempunyai $W_0=0$, increment independen dan stasioner, $W_t-W_s\\sim N(0,t-s)$ untuk $t>s$, serta lintasan kontinu hampir pasti."},
      {kind:"proposition",title:"Momen Brownian Motion",statement:"Untuk Brownian motion standar, $E[W_t]=0$ dan $E[W_t^2]=t$.",proof:["Dari definisi increment dengan $s=0$, $W_t\\sim N(0,t)$.","Mean distribusi tersebut adalah 0 dan variansnya $t$.","Karena mean nol, momen kedua sama dengan varians."]}
    ];
    if(/quadratic variation|variasi kuadratik/.test(text))return[
      {kind:"proposition",title:"Quadratic Variation Brownian Motion",statement:"Sepanjang partisi dengan mesh menuju nol, jumlah $\\sum_i(W_{t_{i+1}}-W_{t_i})^2$ konvergen ke $t$ dalam probabilitas pada interval $[0,t]$."},
      {kind:"note",title:"Makna Koreksi Itô",statement:"Quadratic variation yang tidak nol menjelaskan munculnya suku turunan kedua pada formula Itô."}
    ];
    if(/ito integral|integral itô|ito isometry|isometri/.test(text))return[
      {kind:"definition",title:"Integral Itô untuk Proses Sederhana",statement:"Untuk proses adapted sederhana $H_s=\\sum_iH_i1_{(t_i,t_{i+1}]}(s)$, didefinisikan $\\int_0^tH_s\\,dW_s=\\sum_iH_i(W_{t_{i+1}\\wedge t}-W_{t_i\\wedge t})$."},
      {kind:"theorem",title:"Isometri Itô",statement:"Untuk integrand square-integrable adapted, $E[(\\int_0^tH_s\\,dW_s)^2]=E[\\int_0^tH_s^2\\,ds]$.",proof:["Buktikan dahulu untuk proses sederhana dengan mengekspansi kuadrat jumlah increment.","Suku silang mempunyai ekspektasi nol karena increment masa depan bermean kondisional nol dan independen dari informasi sebelumnya.","Suku diagonal memberi $E[H_i^2](t_{i+1}-t_i)$.","Jumlahnya adalah ekspektasi integral $H^2$; perluasan ke integrand umum mengikuti aproksimasi dalam $L^2$."]}
    ];
    if(/ito formula|formula itô|ito lemma/.test(text))return[
      {kind:"theorem",title:"Formula Itô Satu Dimensi",statement:"Jika $X_t$ memenuhi $dX_t=b_tdt+\\sigma_tdW_t$ dan $f\\in C^{1,2}$, maka $df(t,X_t)=(f_t+b_tf_x+\\frac12\\sigma_t^2f_{xx})dt+\\sigma_tf_xdW_t$."},
      {kind:"note",title:"Perbedaan dengan Chain Rule Biasa",statement:"Suku $\\frac12\\sigma_t^2f_{xx}$ muncul karena quadratic variation Brownian motion berorde $dt$, sedangkan suku orde lebih tinggi yang lain lenyap."}
    ];
    if(/sde|stochastic differential|diffusion|ornstein|geometric brownian/.test(text))return[
      {kind:"definition",title:"Persamaan Diferensial Stokastik",statement:"SDE Itô berbentuk $dX_t=b(t,X_t)dt+\\sigma(t,X_t)dW_t$, dengan $b$ drift dan $\\sigma$ koefisien difusi."},
      {kind:"proposition",title:"Solusi Geometric Brownian Motion",statement:"SDE $dX_t=\\mu X_tdt+\\sigma X_tdW_t$ dengan $X_0>0$ mempunyai solusi $X_t=X_0\\exp((\\mu-\\sigma^2/2)t+\\sigma W_t)$.",proof:["Terapkan formula Itô pada $f(x)=\\log x$.","Diperoleh $d\\log X_t=(\\mu-\\sigma^2/2)dt+\\sigma dW_t$.","Integrasikan dari 0 sampai $t$ lalu eksponensialkan kedua ruas."]}
    ];
    if(/girsanov|change of measure|perubahan ukuran/.test(text))return[
      {kind:"note",title:"Teorema Girsanov",statement:"Perubahan ukuran probabilitas melalui density process eksponensial dapat mengubah drift Brownian motion sambil mempertahankan struktur Brownian di bawah ukuran baru, dengan syarat integrabilitas yang sesuai."}
    ];
    if(/poisson|jump|levy|lompatan/.test(text))return[
      {kind:"definition",title:"Proses Poisson",statement:"Proses Poisson berlaju $\\lambda$ mempunyai increment independen dan stasioner dengan $N_t-N_s\\sim\\operatorname{Poisson}(\\lambda(t-s))$."},
      {kind:"proposition",title:"Mean dan Varians Proses Poisson",statement:"Untuk proses Poisson berlaju $\\lambda$, $E[N_t]=\\operatorname{Var}(N_t)=\\lambda t$.",proof:["Dari definisi, $N_t\\sim\\operatorname{Poisson}(\\lambda t)$.","Distribusi Poisson dengan parameter $m$ mempunyai mean dan varians sama dengan $m$.","Ambil $m=\\lambda t$."]}
    ];
  }

  return[
    {kind:"note",title:"Pengantar Konsep",statement:"Pembahasan "+title+" mengikuti struktur dan urutan konsep pada referensi utama bidang ini, dengan istilah kunci "+keyIdeas.join(", ")+". Istilah formal dibedakan dari penjelasan intuitif."},
    {kind:"note",title:"Hipotesis dan Validasi",statement:"Setiap rumus atau hasil harus digunakan setelah domain, asumsi, regularitas, atau syarat model yang relevan diperiksa."}
  ];
}

function formalFor(subject:string,slug:string,title:string,summary:string,keyIdeas:string[]):BookFormalItem[]{
  const special:Record<string,BookFormalItem[]>={
    "or-lp-formulasi":[
      {kind:"definition",title:"Program Linear",statement:"Program linear adalah masalah optimisasi dengan fungsi tujuan linear dan seluruh kendala berbentuk persamaan atau pertidaksamaan linear pada variabel keputusan."},
      {kind:"proposition",title:"Optimalitas pada Titik Ekstrem",statement:"Jika program linear memiliki solusi optimal hingga dan daerah feasible mempunyai titik ekstrem, terdapat sedikitnya satu solusi optimal pada titik ekstrem daerah feasible.",proof:["Daerah feasible program linear merupakan himpunan cembung polihedral.","Jika solusi optimal bukan titik ekstrem, solusi tersebut dapat dinyatakan sebagai kombinasi cembung titik-titik feasible.","Linearitas fungsi tujuan membuat nilai pada kombinasi cembung menjadi kombinasi nilai objektif.","Sedikitnya satu titik ekstrem penyusun memiliki nilai tidak lebih buruk daripada solusi semula."]},
    ],
    "or-dualitas":[
      {kind:"theorem",title:"Dualitas Lemah",statement:"Untuk primal maksimum $\\max\\{c^Tx:Ax\\le b,\\ x\\ge0\\}$ dan dual minimum $\\min\\{b^Ty:A^Ty\\ge c,\\ y\\ge0\\}$, setiap pasangan solusi feasible memenuhi $c^Tx\\le b^Ty$.",proof:["Diambil solusi feasible primal $x$ dan dual $y$.","Dari $A^Ty\\ge c$ dan $x\\ge0$ diperoleh $x^TA^Ty\\ge c^Tx$.","Karena $Ax\\le b$ dan $y\\ge0$, diperoleh $y^TAx\\le y^Tb$.","Dengan $x^TA^Ty=y^TAx$, diperoleh $c^Tx\\le b^Ty$. Dengan demikian dualitas lemah terbukti."]},
      {kind:"note",title:"Dualitas Kuat",statement:"Teorema dualitas kuat menyatakan bahwa, di bawah kondisi kelayakan standar program linear, nilai optimal primal dan dual sama. Pembuktian lengkap ditempatkan pada submateri khusus dualitas agar tidak diringkas secara tidak memadai."}
    ],
    "or-max-flow":[
      {kind:"note",title:"Teorema Max-Flow Min-Cut",statement:"Teorema max-flow min-cut menghubungkan nilai aliran maksimum dengan kapasitas cut minimum. Pembuktian lengkap memerlukan konstruksi residual network dan augmenting path, sehingga tidak ditampilkan sebagai teorema tanpa bukti pada halaman pengantar ini."}
    ],
    "or-dp-principle":[
      {kind:"note",title:"Prinsip Optimalitas Bellman",statement:"Bagian sisa dari kebijakan optimal, setelah keputusan awal dan state baru ditentukan, harus optimal untuk submasalah yang dimulai dari state tersebut."}
    ],
    "or-mm1":[
      {kind:"note",title:"Little\'s Law",statement:"Pada sistem stabil dalam keadaan tunak, hubungan $L=\\lambda W$ mengaitkan jumlah rata-rata pelanggan, laju kedatangan efektif, dan waktu rata-rata dalam sistem. Hasil ini digunakan setelah kondisi kestabilan dan definisi rata-rata jangka panjang dibahas."}
    ],
    "or-kkt":[
      {kind:"note",title:"Kondisi Karush–Kuhn–Tucker",statement:"Kondisi KKT terdiri atas primal feasibility, dual feasibility, complementary slackness, dan stationarity. Pernyataan teorema lengkap memerlukan bentuk masalah serta constraint qualification yang eksplisit, sehingga halaman pengantar ini tidak menampilkannya sebagai teorema tanpa bukti."}
    ],
    "sta-probability-laws":[
      {kind:"definition",title:"Probabilitas Bersyarat",statement:"Jika $P(B)>0$, probabilitas $A$ dengan syarat $B$ didefinisikan oleh $P(A\\mid B)=P(A\\cap B)/P(B)$."},
      {kind:"proposition",title:"Aturan Probabilitas Total",statement:"Jika $B_1,\\ldots,B_k$ membentuk partisi ruang sampel dan $P(B_i)>0$, maka $P(A)=\\sum_i P(A\\mid B_i)P(B_i)$.",proof:["Karena $B_1,\\ldots,B_k$ membentuk partisi, kejadian $A$ dapat ditulis sebagai gabungan saling lepas $A=\\bigcup_i(A\\cap B_i)$.","Aditivitas probabilitas memberi $P(A)=\\sum_iP(A\\cap B_i)$.","Dari definisi probabilitas bersyarat, $P(A\\cap B_i)=P(A\\mid B_i)P(B_i)$.","Substitusi ke jumlah sebelumnya menghasilkan rumus probabilitas total. Dengan demikian proposisi terbukti."]}
    ],
    "sta-anova-oneway":[
      {kind:"proposition",title:"Dekomposisi Variabilitas ANOVA",statement:"Pada ANOVA satu arah, total sum of squares dapat diuraikan menjadi variasi antarperlakuan dan variasi dalam perlakuan: $SS_T=SS_{Tr}+SS_E$.",proof:["Untuk observasi $y_{ij}$ pada kelompok $i$, dituliskan $y_{ij}-\\bar y_{..}=(\\bar y_{i.}-\\bar y_{..})+(y_{ij}-\\bar y_{i.})$.","Kedua ruas dikuadratkan dan dijumlahkan terhadap seluruh $i$ dan $j$.","Suku silang bernilai nol karena untuk setiap kelompok berlaku $\\sum_j(y_{ij}-\\bar y_{i.})=0$.","Sisa dua jumlah kuadrat masing-masing adalah sum of squares antarperlakuan dan sum of squares error. Dengan demikian $SS_T=SS_{Tr}+SS_E$."]},
      {kind:"note",title:"Makna Uji F",statement:"Statistik F membandingkan skala variasi yang dijelaskan oleh perbedaan mean kelompok dengan variasi residual di dalam kelompok."}
    ],
    "sta-simple-regression":[
      {kind:"definition",title:"Model Regresi Linear Sederhana",statement:"Model ditulis $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$, dengan asumsi terhadap error ditentukan sesuai tujuan inferensi."},
      {kind:"proposition",title:"Normal Equations",statement:"Pada regresi linear sederhana, minimizer jumlah kuadrat residual $S(\\beta_0,\\beta_1)=\\sum_i(y_i-\\beta_0-\\beta_1x_i)^2$ memenuhi $\\sum_i(y_i-\\widehat\\beta_0-\\widehat\\beta_1x_i)=0$ dan $\\sum_ix_i(y_i-\\widehat\\beta_0-\\widehat\\beta_1x_i)=0$.",proof:["Fungsi $S$ merupakan fungsi kuadrat terdiferensial terhadap $\\beta_0$ dan $\\beta_1$.","Turunan parsial terhadap $\\beta_0$ adalah $-2\\sum_i(y_i-\\beta_0-\\beta_1x_i)$, sedangkan turunan parsial terhadap $\\beta_1$ adalah $-2\\sum_ix_i(y_i-\\beta_0-\\beta_1x_i)$.","Pada minimizer interior, kedua turunan parsial bernilai nol.","Dengan mengganti parameter oleh estimasinya diperoleh kedua persamaan normal."]}
    ],
    "stm-prob-axioms":[
      {kind:"definition",title:"Ukuran Probabilitas",statement:"Pada ruang terukur $(\\Omega,\\mathcal F)$, fungsi $P:\\mathcal F\\to[0,1]$ disebut ukuran probabilitas apabila $P(\\Omega)=1$ dan untuk setiap barisan kejadian saling lepas $A_1,A_2,\\ldots\\in\\mathcal F$ berlaku $P(\\bigcup_{i=1}^{\\infty}A_i)=\\sum_{i=1}^{\\infty}P(A_i)$. Nonnegativitas tercakup oleh kodomain $[0,1]$."}
    ],
    "stm-clt":[
      {kind:"note",title:"Central Limit Theorem IID",statement:"Central Limit Theorem menyatakan konvergensi distribusi jumlah ternormalisasi ke distribusi normal di bawah asumsi yang sesuai. Pembuktian lengkap memerlukan perangkat teori konvergensi dan fungsi karakteristik, sehingga tidak ditampilkan sebagai teorema tanpa bukti pada halaman ringkas ini."}
    ],
    "stm-cramer-rao":[
      {kind:"note",title:"Batas Bawah Cramér–Rao",statement:"Batas Cramér–Rao memberikan batas bawah varians estimator tak bias melalui Fisher information. Pernyataan dan pembuktiannya memerlukan syarat regularitas yang dinyatakan secara eksplisit."}
    ],
    "stm-factorization":[
      {kind:"note",title:"Teorema Faktorisasi Neyman–Fisher",statement:"Kriteria faktorisasi mengkarakterisasi sufficiency dalam model terdominasi melalui faktorisasi likelihood. Pembuktian lengkap memerlukan definisi sufficiency berbasis distribusi kondisional dan asumsi dominasi."}
    ],
    "stm-neyman-pearson":[
      {kind:"theorem",title:"Lemma Neyman–Pearson",statement:"Untuk menguji $H_0:f=f_0$ melawan $H_1:f=f_1$, uji likelihood-ratio dengan daerah kritis yang dipilih pada taraf $\\alpha$ adalah most powerful di antara uji bertaraf tidak melebihi $\\alpha$.",proof:["Misalkan $\\phi$ adalah uji likelihood-ratio dan $\\psi$ sembarang uji lain dengan ukuran tidak melebihi $\\alpha$.","Daerah tempat $\\phi>\\psi$ dipilih ketika $f_1-kf_0$ tidak negatif, sedangkan daerah tempat $\\phi<\\psi$ berada ketika kuantitas tersebut tidak positif.","Akibatnya integral $(\\phi-\\psi)(f_1-kf_0)$ tidak negatif.","Karena $E_0\\phi=\\alpha$ dan $E_0\\psi\\le\\alpha$, diperoleh $E_1\\phi-E_1\\psi\\ge k(E_0\\phi-E_0\\psi)\\ge0$.","Dengan demikian power $\\phi$ di bawah $H_1$ tidak lebih kecil daripada power setiap $\\psi$ bertaraf sama atau lebih kecil."]}
    ],
    "md-ekuivalensi-logika":[
      {kind:"definition",title:"Ekuivalensi Logika",statement:"Proposisi $P$ dan $Q$ ekuivalen secara logis apabila $P\\leftrightarrow Q$ merupakan tautologi."},
      {kind:"proposition",title:"Hukum De Morgan",statement:"Berlaku $\\neg(P\\land Q)\\equiv(\\neg P\\lor\\neg Q)$ dan $\\neg(P\\lor Q)\\equiv(\\neg P\\land\\neg Q)$.",proof:["Dibuat tabel kebenaran untuk seluruh pasangan nilai $P$ dan $Q$.","Pada setiap baris, nilai $\\neg(P\\land Q)$ sama dengan nilai $\\neg P\\lor\\neg Q$.","Pada setiap baris pula, nilai $\\neg(P\\lor Q)$ sama dengan nilai $\\neg P\\land\\neg Q$.","Karena kedua pasangan mempunyai nilai kebenaran yang sama untuk seluruh kemungkinan, kedua ekuivalensi logika terbukti."]}
    ],
    "md-induksi":[
      {kind:"note",title:"Prinsip Induksi Matematika",statement:"Prinsip induksi digunakan sebagai prinsip dasar pembuktian pada bilangan asli: basis diverifikasi, kemudian langkah induksi membuktikan propagasi kebenaran dari $n$ ke $n+1$."}
    ],
    "md-pigeonhole":[
      {kind:"theorem",title:"Prinsip Pigeonhole",statement:"Jika lebih dari $n$ objek ditempatkan ke dalam $n$ kotak, sedikitnya satu kotak berisi paling sedikit dua objek.",proof:["Diandaikan sebaliknya bahwa setiap kotak berisi paling banyak satu objek.","Dengan $n$ kotak, jumlah objek keseluruhan paling banyak $n$.","Hal ini bertentangan dengan hipotesis bahwa jumlah objek lebih dari $n$.","Dengan demikian sedikitnya satu kotak berisi paling sedikit dua objek."]}
    ],
    "md-mst":[
      {kind:"proposition",title:"Cut Property",statement:"Jika $e$ adalah sisi berbobot minimum yang melintasi suatu cut pada graf berbobot terhubung, terdapat minimum spanning tree yang memuat $e$.",proof:["Ambil minimum spanning tree $T$. Jika $e\\in T$, pernyataan selesai.","Jika $e\\notin T$, penambahan $e$ ke $T$ membentuk tepat satu siklus.","Siklus tersebut memuat sisi lain $f$ yang juga melintasi cut. Karena $e$ minimum pada cut, $w(e)\\le w(f)$.","Ganti $f$ dengan $e$. Graf yang diperoleh tetap spanning tree dan bobot totalnya tidak lebih besar daripada bobot $T$.","Karena $T$ sudah minimum, tree baru juga minimum dan memuat $e$."]}
    ],
    "ks-conditional-expectation":[
      {kind:"definition",title:"Ekspektasi Bersyarat",statement:"Untuk sub-$\\sigma$-algebra $\\mathcal G$, $E[X\\mid\\mathcal G]$ adalah variabel acak $\\mathcal G$-measurable yang mempunyai integral sama dengan $X$ pada setiap kejadian di $\\mathcal G$."},
      {kind:"proposition",title:"Tower Property",statement:"Jika $\\mathcal H\\subseteq\\mathcal G$, maka $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$.",proof:["Variabel $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]$ bersifat $\\mathcal H$-measurable.","Untuk setiap $A\\in\\mathcal H$, karena $A\\in\\mathcal G$, definisi ekspektasi bersyarat memberi $E[1_AE[X\\mid\\mathcal G]]=E[1_AX]$.","Dengan definisi conditioning terhadap $\\mathcal H$, $E[1_AE[E[X\\mid\\mathcal G]\\mid\\mathcal H]]=E[1_AE[X\\mid\\mathcal G]]=E[1_AX]$.","Keunikan ekspektasi bersyarat hingga hampir pasti memberi identitas tower property."]}
    ],
    "ks-martingale":[
      {kind:"definition",title:"Martingale",statement:"Proses adapted integrabel $(M_n)$ adalah martingale jika $E[M_{n+1}\\mid\\mathcal F_n]=M_n$ untuk setiap $n$."}
    ],
    "ks-brownian-definition":[
      {kind:"definition",title:"Brownian Motion Standar",statement:"Proses $(W_t)_{t\\ge0}$ adalah Brownian motion standar jika $W_0=0$, memiliki increment independen dan stasioner Gaussian dengan varians panjang interval, serta memiliki lintasan kontinu hampir pasti."}
    ],
    "ks-ito-isometry":[
      {kind:"note",title:"Isometri Itô",statement:"Isometri Itô menghubungkan momen kedua integral stokastik dengan integral kuadrat integrand. Pembuktian rigor dimulai dari proses sederhana lalu diperluas melalui kelengkapan $L^2$."}
    ],
    "ks-ito-formula":[
      {kind:"note",title:"Formula Itô",statement:"Formula Itô adalah aturan rantai untuk proses semimartingale dan memuat koreksi turunan kedua yang berasal dari quadratic variation. Pernyataan lengkap diberikan setelah integral Itô dan quadratic variation didefinisikan."}
    ],
    "ks-girsanov":[
      {kind:"note",title:"Teorema Girsanov",statement:"Teorema Girsanov menjelaskan perubahan drift di bawah perubahan ukuran probabilitas yang sesuai. Karena syarat integrabilitas dan konstruksi density process penting, hasil ini tidak ditampilkan sebagai teorema tanpa pembuktian lengkap."}
    ],
    "tup-measures":[
      {kind:"definition",title:"Ukuran",statement:"Ukuran pada $(X,\\mathcal A)$ adalah fungsi $\\mu:\\mathcal A\\to[0,\\infty]$ dengan $\\mu(\\varnothing)=0$ dan countable additivity pada keluarga himpunan saling lepas."}
    ],
    "tup-extension":[
      {kind:"note",title:"Teorema Perluasan Carathéodory",statement:"Teorema perluasan Carathéodory membangun measure dari premeasure melalui outer measure dan measurable sets. Pernyataan lengkap beserta pembuktiannya memerlukan konstruksi bertahap tersebut."}
    ],
    "tup-mct":[
      {kind:"note",title:"Monotone Convergence Theorem",statement:"Untuk barisan fungsi measurable nonnegatif yang naik menuju $f$, integralnya naik menuju integral $f$. Pembuktian lengkap ditempatkan setelah konstruksi integral Lebesgue dari fungsi sederhana."}
    ],
    "tup-fatou":[
      {kind:"note",title:"Lemma Fatou",statement:"Lemma Fatou memberikan ketaksamaan antara integral liminf dan liminf integral untuk fungsi measurable nonnegatif. Pembuktian standar menggunakan Monotone Convergence Theorem."}
    ],
    "tup-dct":[
      {kind:"note",title:"Dominated Convergence Theorem",statement:"Dominated Convergence Theorem mengizinkan pertukaran limit dan integral ketika terdapat dominator integrabel. Pembuktiannya menggunakan Fatou pada fungsi nonnegatif yang dibangun dari $g\\pm f_n$."}
    ],
    "tup-fubini":[
      {kind:"note",title:"Teorema Fubini",statement:"Teorema Fubini mengizinkan integral pada ruang produk dihitung sebagai integral berulang untuk fungsi integrabel. Pernyataan lengkap memerlukan hipotesis measurability dan integrability yang eksplisit."}
    ],
    "tup-radon-nikodym":[
      {kind:"note",title:"Teorema Radon–Nikodym",statement:"Teorema Radon–Nikodym merepresentasikan ukuran yang absolut kontinu sebagai integral terhadap density. Karena pembuktiannya bergantung pada teori ukuran yang telah dibangun sebelumnya, hasil ini tidak dilabeli teorema tanpa bukti lengkap pada halaman pengantar."}
    ],
    "tup-slln":[
      {kind:"note",title:"Strong Law of Large Numbers",statement:"Strong Law of Large Numbers menyatakan konvergensi hampir pasti rata-rata sampel ke mean pada kondisi yang sesuai. Pembuktian lengkap memerlukan hasil probabilitas lanjut dan tidak diringkas sebagai teorema tanpa bukti."}
    ],
    "tup-martingale":[
      {kind:"definition",title:"Martingale",statement:"Proses integrabel adapted $(M_n)$ terhadap filtrasi $(\\mathcal F_n)$ adalah martingale jika $E[M_{n+1}\\mid\\mathcal F_n]=M_n$."}
    ]
  };

  return special[slug]??textbookFormalFallback(subject,title,keyIdeas);
}

function directDefinitionExamples(slug:string):BookExample[]{
  const map:Record<string,BookExample[]>={
    "or-lp-formulasi":[
      {title:"Contoh Program Linear",problem:"Sebuah bengkel membuat produk A dan B. Keuntungan per unit masing-masing 3 dan 2. Setiap A memakai 2 jam mesin, setiap B memakai 1 jam, tersedia 8 jam. Total produksi paling banyak 6 unit. Formulasikan model program linearnya.",solution:["Didefinisikan $x$ sebagai banyak produk A dan $y$ sebagai banyak produk B.","Fungsi tujuan adalah memaksimumkan $z=3x+2y$.","Kendala mesin adalah $2x+y\\le8$, kendala jumlah produksi adalah $x+y\\le6$, dengan $x,y\\ge0$."],conclusion:"Model tersebut mempunyai fungsi tujuan dan kendala yang seluruhnya linear."}
    ],
    "sta-probability-laws":[
      {title:"Contoh Probabilitas Bersyarat",problem:"Diketahui $P(A\\cap B)=0.18$ dan $P(B)=0.30$. Tentukan $P(A\\mid B)$.",solution:["Digunakan definisi $P(A\\mid B)=P(A\\cap B)/P(B)$ karena $P(B)>0$.","Diperoleh $P(A\\mid B)=0.18/0.30=0.60$."],conclusion:"Probabilitas A setelah diketahui B terjadi adalah 0,60."}
    ],
    "sta-simple-regression":[
      {title:"Contoh Model Regresi Linear",problem:"Tuliskan bentuk model untuk respons $Y$ yang diperkirakan berubah linear terhadap prediktor $x$.",solution:["Parameter intercept dinotasikan $\\beta_0$ dan slope $\\beta_1$.","Variasi yang tidak dijelaskan garis dimodelkan oleh error $\\varepsilon$.","Model ditulis $Y=\\beta_0+\\beta_1x+\\varepsilon$."],conclusion:"Koefisien $\\beta_1$ menyatakan perubahan mean respons per satu unit perubahan $x$."}
    ],
    "stm-prob-axioms":[
      {title:"Contoh Ukuran Probabilitas pada Ruang Hingga",problem:"Pada $\\Omega=\\{1,2,3,4\\}$, setiap titik diberi probabilitas $1/4$. Periksa bahwa $P(A)=|A|/4$ merupakan ukuran probabilitas.",solution:["Untuk setiap $A\\subseteq\\Omega$, berlaku $P(A)\\ge0$.","Diperoleh $P(\\Omega)=4/4=1$.","Untuk kejadian saling lepas, banyak anggota gabungan sama dengan jumlah banyak anggota, jadi probabilitasnya aditif."],conclusion:"Ketiga aksioma probabilitas terpenuhi."}
    ],
    "md-ekuivalensi-logika":[
      {title:"Contoh Ekuivalensi Logika",problem:"Periksa apakah $P\\to Q$ ekuivalen dengan $\\neg P\\lor Q$.",solution:["Dituliskan tabel kebenaran untuk empat pasangan nilai $P$ dan $Q$.","Kolom $P\\to Q$ hanya salah ketika $P$ benar dan $Q$ salah.","Kolom $\\neg P\\lor Q$ mempunyai pola nilai yang sama."],conclusion:"Kedua proposisi ekuivalen secara logis."}
    ],
    "ks-conditional-expectation":[
      {title:"Contoh Ekspektasi Bersyarat Diskret",problem:"Misalkan $X$ bernilai 0 atau 2 dengan probabilitas sama. Jika $\\mathcal G$ tidak memuat informasi selain $\\varnothing$ dan $\\Omega$, tentukan $E[X\\mid\\mathcal G]$.",solution:["Karena $\\mathcal G$ trivial, variabel $\\mathcal G$-measurable harus konstan hampir pasti.","Konstanta tersebut harus memiliki ekspektasi sama dengan $X$.","Diperoleh $E[X]=(0+2)/2=1$, jadi $E[X\\mid\\mathcal G]=1$."],conclusion:"Tanpa informasi tambahan, ekspektasi bersyarat sama dengan ekspektasi biasa."}
    ],
    "ks-martingale":[
      {title:"Contoh Martingale Random Walk",problem:"Misalkan $X_1,X_2,\\ldots$ independen dengan $E[X_n]=0$ dan $S_n=\\sum_{k=1}^nX_k$. Tunjukkan relasi martingale satu langkah.",solution:["$S_n$ terukur terhadap informasi hingga waktu $n$.","Dituliskan $S_{n+1}=S_n+X_{n+1}$.","Karena $X_{n+1}$ independen dari $\\mathcal F_n$ dan bermean nol, $E[X_{n+1}\\mid\\mathcal F_n]=0$.","Akibatnya $E[S_{n+1}\\mid\\mathcal F_n]=S_n$."],conclusion:"$(S_n)$ merupakan martingale."}
    ],
    "ks-brownian-definition":[
      {title:"Contoh Increment Brownian Motion",problem:"Untuk Brownian motion standar, tentukan distribusi $W_3-W_1$.",solution:["Panjang interval adalah $3-1=2$.","Increment Brownian pada interval sepanjang 2 berdistribusi normal dengan mean 0 dan varians 2.","Dengan demikian $W_3-W_1\\sim N(0,2)$."],conclusion:"Distribusi increment hanya bergantung pada panjang interval."}
    ],
    "tup-measures":[
      {title:"Contoh Ukuran Pencacahan",problem:"Pada himpunan $X$, definisikan $\\mu(A)=|A|$ untuk $A$ hingga dan $\\mu(A)=\\infty$ untuk $A$ tak hingga. Jelaskan mengapa ini merupakan ukuran pada power set $X$.",solution:["Jelas $\\mu(\\varnothing)=0$.","Untuk keluarga himpunan saling lepas, banyak anggota gabungan sama dengan jumlah banyak anggota jika jumlahnya hingga.","Jika jumlah anggota tak hingga, kedua sisi countable additivity bernilai $\\infty$ dalam pengertian extended real."],conclusion:"Fungsi tersebut adalah counting measure."}
    ],
    "tup-martingale":[
      {title:"Contoh Martingale dari Jumlah Parsial",problem:"Jika $X_n$ independen, integrabel, dan $E[X_n]=0$, tunjukkan bahwa $M_n=X_1+\\cdots+X_n$ memenuhi syarat martingale.",solution:["$M_n$ bersifat $\\mathcal F_n$-measurable dan integrabel.","Dituliskan $M_{n+1}=M_n+X_{n+1}$.","Independensi memberi $E[X_{n+1}\\mid\\mathcal F_n]=E[X_{n+1}]=0$.","Dengan demikian $E[M_{n+1}\\mid\\mathcal F_n]=M_n$."],conclusion:"Jumlah parsial increment bermean nol membentuk martingale."}
    ]
  };
  return map[slug]??[];
}

function examplesFor(subject:string,title:string,keyIdeas:string[]):BookExample[]{
  const has=(pattern:RegExp)=>pattern.test((title+" "+keyIdeas.join(" ")).toLowerCase());
  const ex=(name:string,problem:string,solution:string[],conclusion:string):BookExample=>({title:name,problem,solution,conclusion});

  if(subject==="riset-operasi"){
    if(has(/linear|simplex|dual|sensitiv|transport|assignment|flow|jalur|spanning|cpm|pert|integer|goal|nonlinear|kkt|quadratic/)){
      return[
        ex("Contoh 1 · Formulasi dan feasibility","Sebuah unit produksi membuat $x$ dan $y$. Keuntungan per unit masing-masing 4 dan 3. Sumber daya memberi kendala $2x+y\\le8$ dan $x+2y\\le8$, dengan $x,y\\ge0$. Tentukan apakah $(2,2)$ feasible dan hitung nilai objektifnya.",["Diperiksa kendala pertama: $2(2)+2=6\\le8$.","Diperiksa kendala kedua: $2+2(2)=6\\le8$.","Nonnegativitas juga dipenuhi.","Nilai objektif adalah $z=4(2)+3(2)=14$."],"Titik $(2,2)$ feasible dengan nilai objektif 14."),
        ex("Contoh 2 · Membandingkan solusi feasible","Gunakan model yang sama. Bandingkan titik $(3,1)$ dan $(1,3)$.",["Kedua titik diperiksa terhadap seluruh kendala sebelum nilai objektif dibandingkan.","Untuk $(3,1)$ diperoleh $z=15$; untuk $(1,3)$ diperoleh $z=13$.","Perbandingan nilai objektif hanya sah karena kedua titik feasible."],"Di antara dua kandidat tersebut, $(3,1)$ memberi nilai objektif lebih besar.")
      ];
    }
    if(has(/markov|queue|antrean|poisson|inventory|newsvendor|forecast|simulation|monte carlo/)){
      return[
        ex("Contoh 1 · Model keadaan sederhana","Suatu sistem memiliki dua keadaan, 0 dan 1, dengan matriks transisi $P=\\begin{pmatrix}0.8&0.2\\\\0.3&0.7\\end{pmatrix}$. Jika sistem mulai pada keadaan 0, tentukan peluang berada pada keadaan 1 setelah satu langkah.",["Distribusi awal adalah $(1,0)$.","Setelah satu langkah, distribusi menjadi $(1,0)P=(0.8,0.2)$.","Komponen kedua menyatakan peluang keadaan 1."],"Peluang berada pada keadaan 1 setelah satu langkah adalah 0,2."),
        ex("Contoh 2 · Interpretasi parameter","Pada antrean dengan laju kedatangan $\\lambda=4$ pelanggan/jam dan laju pelayanan $\\mu=6$ pelanggan/jam, hitung utilisasi server.",["Untuk model satu server dasar digunakan $\\rho=\\lambda/\\mu$.","Diperoleh $\\rho=4/6=2/3$.","Karena $\\rho<1$, kondisi kestabilan dasar terpenuhi."],"Utilisasi server adalah $2/3$.")
      ];
    }
    return[
      ex("Contoh 1 · Variabel keputusan dan tujuan","Sebuah keputusan mempunyai dua alternatif kuantitatif $x_1$ dan $x_2$. Tuliskan cara memisahkan variabel keputusan, parameter, fungsi tujuan, dan kendala.",["$x_1,x_2$ dinyatakan sebagai besaran yang dapat dipilih.","Koefisien biaya atau manfaat diperlakukan sebagai parameter yang diketahui.","Fungsi tujuan menyatakan ukuran kinerja yang dioptimalkan.","Kendala menyatakan batas keputusan yang diperbolehkan."],"Struktur model dipisahkan sebelum algoritma penyelesaian dipilih."),
      ex("Contoh 2 · Pemeriksaan solusi","Sebuah algoritma menghasilkan kandidat $x^*$. Apa yang harus diperiksa sebelum menyebutnya optimal?",["Feasibility diperiksa terhadap seluruh kendala.","Nilai objektif dihitung dengan definisi yang benar.","Kondisi optimalitas atau bound yang sesuai metode diperiksa.","Jika model memakai aproksimasi atau heuristik, status solusi dinyatakan secara tepat."],"Solusi optimal harus didukung oleh feasibility dan alasan optimalitas.")
    ];
  }

  if(subject==="statistika-terapan"){
    if(has(/regresi|korelasi|linear model|logistik/)){
      return[
        ex("Contoh 1 · Garis regresi","Untuk pasangan data $(1,2),(2,3),(3,5)$, sebuah garis hasil fitting adalah $\\widehat y=0.33+1.50x$. Tentukan prediksi pada $x=4$.",["Substitusikan $x=4$ ke persamaan fitted.","Diperoleh $\\widehat y=0.33+1.50(4)=6.33$.","Nilai tersebut merupakan prediksi model, bukan observasi yang pasti."],"Prediksi respons pada $x=4$ adalah sekitar 6,33."),
        ex("Contoh 2 · Residual","Jika observasi aktual pada $x=3$ adalah 5 dan model memberi prediksi 4,83, tentukan residual.",["Residual didefinisikan sebagai $e=y-\\widehat y$.","Diperoleh $e=5-4.83=0.17$."],"Residual positif menunjukkan observasi berada sedikit di atas prediksi.")
      ];
    }
    if(has(/anova|treatment|block|latin|ancova|repeated|crossover|mixed|random effects/)){
      return[
        ex("Contoh 1 · Struktur variasi","Tiga perlakuan mempunyai mean sampel 8, 10, dan 12. Jelaskan dua sumber variasi yang dibandingkan pada ANOVA satu arah.",["Variasi antarperlakuan mengukur perbedaan mean kelompok terhadap mean keseluruhan.","Variasi dalam perlakuan mengukur penyebaran observasi di sekitar mean kelompoknya.","Statistik $F$ membandingkan dua skala variasi tersebut."],"ANOVA memisahkan variasi antar kelompok dari variasi residual."),
        ex("Contoh 2 · Unit eksperimen","Dalam eksperimen pupuk, 24 pot diacak ke tiga perlakuan pupuk. Tentukan unit eksperimen dan faktor perlakuan.",["Objek yang menerima perlakuan secara independen adalah pot.","Faktor adalah jenis pupuk.","Level faktor adalah tiga perlakuan yang dibandingkan."],"Identifikasi unit eksperimen diperlukan sebelum model ANOVA ditentukan.")
      ];
    }
    return[
      ex("Contoh 1 · Ringkasan sampel","Untuk data $2,4,4,6,9$, tentukan mean dan median.",["Mean adalah $(2+4+4+6+9)/5=5$.","Data sudah berurutan dan nilai tengahnya 4."],"Mean sampel 5 dan median 4; keduanya mengukur pusat dengan cara berbeda."),
      ex("Contoh 2 · Proporsi sampel","Dari 80 responden, 52 menjawab ya. Tentukan proporsi sampel.",["Proporsi sampel adalah $\\widehat p=x/n$.","Diperoleh $\\widehat p=52/80=0.65$."],"Proporsi sampel adalah 0,65.")
    ];
  }

  if(subject==="statistika-matematika"){
    if(has(/likelihood|maximum likelihood|fisher|cram|sufficient|completeness|estimator/)){
      return[
        ex("Contoh 1 · Likelihood Bernoulli","Untuk sampel Bernoulli $x=(1,0,1)$ dengan parameter $p$, tuliskan likelihood.",["Karena observasi independen, likelihood adalah hasil kali $p^{x_i}(1-p)^{1-x_i}$.","Untuk data tersebut diperoleh $L(p)=p^2(1-p)$."],"Likelihood merangkum dukungan data terhadap nilai parameter $p$."),
        ex("Contoh 2 · Estimator rata-rata","Untuk sampel $x_1,\\ldots,x_n$ dari populasi bermmean $\\mu$, pertimbangkan $\\bar X$. Jelaskan mengapa estimator ini tak bias.",["Digunakan linearitas ekspektasi.","$E[\\bar X]=\\frac1n\\sum_iE[X_i]=\\frac1n(n\\mu)=\\mu$."],"Rata-rata sampel merupakan estimator tak bias untuk mean populasi.")
      ];
    }
    if(has(/convergence|central limit|delta|asymptotic|mgf/)){
      return[
        ex("Contoh 1 · Normalisasi jumlah","Jika $X_i$ iid dengan mean 10 dan varians 4, tuliskan bentuk jumlah ternormalisasi untuk $S_n=\\sum X_i$.",["Mean $S_n$ adalah $10n$ dan simpangan bakunya $2\\sqrt n$.","Bentuk ternormalisasi adalah $(S_n-10n)/(2\\sqrt n)$."],"Normalisasi memusatkan jumlah pada 0 dan menskalakan varians menjadi 1."),
        ex("Contoh 2 · Konvergensi estimator","Jika $\\operatorname{Var}(\\bar X)=\\sigma^2/n$, jelaskan perilakunya ketika $n$ membesar.",["Varians mengecil menuju 0.","Chebyshev memberi $P(|\\bar X-\\mu|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$.","Batas kanan menuju 0."],"Rata-rata sampel konvergen dalam probabilitas ke $\\mu$.")
      ];
    }
    return[
      ex("Contoh 1 · Variabel acak diskret","Sebuah variabel acak $X$ bernilai 0, 1, 2 dengan probabilitas $0.2,0.5,0.3$. Hitung $E[X]$.",["Digunakan $E[X]=\\sum_x xP(X=x)$.","Diperoleh $E[X]=0(0.2)+1(0.5)+2(0.3)=1.1$."],"Ekspektasi $X$ adalah 1,1."),
      ex("Contoh 2 · Transformasi sederhana","Jika $Y=2X+1$, tentukan $E[Y]$ dari contoh sebelumnya.",["Linearitas ekspektasi memberi $E[Y]=2E[X]+1$.","Diperoleh $E[Y]=2(1.1)+1=3.2$."],"Ekspektasi $Y$ adalah 3,2.")
    ];
  }

  if(subject==="matematika-diskrit"){
    if(has(/logika|propos|kuantor|inferensi|bukti/)){
      return[
        ex("Contoh 1 · Negasi kuantor","Negasikan pernyataan: untuk setiap bilangan real $x$, berlaku $x^2\\ge0$.",["Negasi dari $\\forall x\\,P(x)$ adalah $\\exists x\\,\\neg P(x)$.","Diperoleh: terdapat bilangan real $x$ dengan $x^2<0$."],"Negasi mengubah kuantor universal menjadi eksistensial dan menegasikan predikat."),
        ex("Contoh 2 · Modus ponens","Dari $P\\to Q$ dan $P$, simpulkan pernyataan yang sah.",["Aturan modus ponens menyatakan dari implikasi dan antesedennya dapat disimpulkan konsekuennya.","Kesimpulan yang sah adalah $Q$."],"Argumen tersebut valid.")
      ];
    }
    if(has(/graf|tree|pohon|spanning|path|color|euler|hamilton/)){
      return[
        ex("Contoh 1 · Derajat graf","Graf sederhana memiliki sisi $\\{12,13,23,34\\}$. Tentukan derajat setiap simpul.",["Simpul 1 incident dengan dua sisi, jadi derajatnya 2.","Simpul 2 juga berderajat 2.","Simpul 3 incident dengan tiga sisi, jadi berderajat 3.","Simpul 4 berderajat 1."],"Jumlah derajat adalah 8, sama dengan dua kali banyak sisi."),
        ex("Contoh 2 · Keterhubungan","Pada graf yang sama, tunjukkan adanya lintasan dari 1 ke 4.",["Sisi 13 menghubungkan 1 ke 3.","Sisi 34 menghubungkan 3 ke 4.","Urutan $1,3,4$ membentuk lintasan."],"Simpul 1 dan 4 berada pada komponen terhubung yang sama.")
      ];
    }
    if(has(/count|kombin|permut|pigeon|inclusion|binomial/)){
      return[
        ex("Contoh 1 · Aturan perkalian","Sebuah kode terdiri dari 2 huruf diikuti 3 digit. Jika pengulangan diperbolehkan, berapa banyak kode?",["Setiap posisi huruf mempunyai 26 pilihan dan setiap posisi digit mempunyai 10 pilihan.","Aturan perkalian memberi $26^2\\cdot10^3=676000$."],"Terdapat 676000 kode."),
        ex("Contoh 2 · Kombinasi","Dari 8 orang dipilih 3 orang tanpa memperhatikan urutan.",["Pemilihan tanpa urutan menggunakan kombinasi.","Diperoleh $\\binom83=56$."],"Terdapat 56 pilihan.")
      ];
    }
    return[
      ex("Contoh 1 · Relasi pada himpunan kecil","Pada $A=\\{1,2,3\\}$, definisikan $aRb$ jika $a\\le b$. Periksa refleksivitas.",["Untuk setiap $a\\in A$, selalu berlaku $a\\le a$.","Dengan demikian $(a,a)\\in R$ untuk setiap $a$."],"Relasi tersebut refleksif."),
      ex("Contoh 2 · Rekurensi sederhana","Diberikan $a_1=2$ dan $a_n=a_{n-1}+3$. Tentukan empat suku pertama.",["$a_1=2$.","$a_2=5$, $a_3=8$, dan $a_4=11$."],"Empat suku pertama adalah 2, 5, 8, 11.")
    ];
  }

  if(subject==="kalkulus-stokastik"){
    if(has(/brownian|quadratic|ito|diffusion|sde/)){
      return[
        ex("Contoh 1 · Increment Brownian","Untuk Brownian motion standar, tentukan distribusi $W_5-W_2$.",["Panjang interval adalah 3.","Increment Brownian berdistribusi normal dengan mean 0 dan varians panjang interval."],"Diperoleh $W_5-W_2\\sim N(0,3)$."),
        ex("Contoh 2 · Ekspektasi integral Itô","Untuk integrand deterministik square-integrable $H$, tentukan mean $\\int_0^tH_s\\,dW_s$.",["Integral Itô dari integrand square-integrable merupakan martingale yang berawal dari nol.","Ekspektasinya bernilai nol."],"Mean integral tersebut adalah 0.")
      ];
    }
    if(has(/poisson|jump|levy/)){
      return[
        ex("Contoh 1 · Proses Poisson","Jika $N_t$ adalah proses Poisson berlaju 2 per jam, tentukan $E[N_3]$.",["Untuk proses Poisson berlaju $\\lambda$, berlaku $E[N_t]=\\lambda t$.","Diperoleh $E[N_3]=2\\cdot3=6$."],"Jumlah kejadian yang diharapkan selama tiga jam adalah 6."),
        ex("Contoh 2 · Probabilitas tidak ada lompatan","Dengan laju yang sama, tentukan $P(N_1=0)$.",["$N_1\\sim\\operatorname{Poisson}(2)$.","$P(N_1=0)=e^{-2}$."],"Probabilitas tidak ada kejadian selama satu jam adalah $e^{-2}$.")
      ];
    }
    return[
      ex("Contoh 1 · Martingale jumlah parsial","Jika $X_1,X_2,\\ldots$ independen dan $E[X_n]=0$, definisikan $S_n=\\sum_{k=1}^nX_k$. Periksa kondisi satu langkah martingale.",["$S_n$ measurable terhadap informasi hingga waktu $n$.","$E[S_{n+1}\\mid\\mathcal F_n]=S_n+E[X_{n+1}\\mid\\mathcal F_n]$.","Independensi dan mean nol memberi suku kedua 0."],"Diperoleh $E[S_{n+1}\\mid\\mathcal F_n]=S_n$."),
      ex("Contoh 2 · Tower property","Jika $\\mathcal H\\subseteq\\mathcal G$, jelaskan cara mereduksi $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]$.",["Digunakan tower property untuk nested sigma-algebras.","Conditioning bertingkat dapat direduksi ke sigma-algebra yang lebih kecil."],"Diperoleh $E[X\\mid\\mathcal H]$.")
    ];
  }

  if(subject==="teori-ukuran-probabilitas"){
    if(has(/measure|ukuran|sigma|measurable|lebesgue|integral|fubini|tonelli/)){
      return[
        ex("Contoh 1 · Counting measure","Pada $X=\\{a,b,c\\}$, gunakan counting measure $\\mu(A)=|A|$. Hitung $\\mu(\\{a,c\\})$.",["Himpunan $\\{a,c\\}$ memiliki dua anggota.","Counting measure memberi ukuran sama dengan banyak anggota."],"Diperoleh $\\mu(\\{a,c\\})=2$."),
        ex("Contoh 2 · Integral fungsi sederhana","Pada ruang yang sama, $f(a)=1,f(b)=2,f(c)=4$. Hitung $\\int f\\,d\\mu$ terhadap counting measure.",["Integral terhadap counting measure pada himpunan hingga sama dengan jumlah nilai fungsi.","Diperoleh $1+2+4=7$."],"Nilai integral adalah 7.")
      ];
    }
    if(has(/convergence|limit|clt|law|weak|characteristic/)){
      return[
        ex("Contoh 1 · Konvergensi hampir pasti","Jika $X_n(\\omega)=1/n$ untuk setiap $\\omega$, tentukan limitnya.",["Untuk setiap $\\omega$, barisan numerik $1/n$ menuju 0.","Karena konvergensi terjadi untuk seluruh $\\omega$, khususnya terjadi hampir pasti."],"Diperoleh $X_n\\to0$ hampir pasti."),
        ex("Contoh 2 · Konvergensi dalam probabilitas","Untuk contoh yang sama dan $\\varepsilon>0$, periksa $P(|X_n|>\\varepsilon)$.",["Jika $n>1/\\varepsilon$, maka $1/n<\\varepsilon$.","Untuk indeks tersebut kejadian $|X_n|>\\varepsilon$ kosong."],"Probabilitasnya akhirnya 0, jadi $X_n\\to0$ dalam probabilitas.")
      ];
    }
    return[
      ex("Contoh 1 · Ruang probabilitas hingga","Ambil $\\Omega=\\{1,2,3,4\\}$ dengan semua titik sama mungkin. Hitung probabilitas kejadian $A=\\{2,4\\}$.",["Setiap titik mempunyai probabilitas $1/4$.","Kejadian $A$ memiliki dua titik.","Diperoleh $P(A)=2/4=1/2$."],"Probabilitas $A$ adalah $1/2$."),
      ex("Contoh 2 · Independensi sederhana","Dua koin fair dilempar. Misalkan $A$ adalah kejadian koin pertama kepala dan $B$ kejadian koin kedua kepala. Periksa independensi.",["$P(A)=P(B)=1/2$.","$P(A\\cap B)=1/4$.","Karena $P(A\\cap B)=P(A)P(B)$, kedua kejadian independen."],"A dan B independen.")
    ];
  }

  return[];
}

function exercisesFor(title:string,keyIdeas:string[]){
  const a=keyIdeas[0]??title;
  const b=keyIdeas[1]??"konsep kedua";
  const answer=(steps:string[])=>steps.join("\n");
  return[
    {
      prompt:"Jelaskan objek utama pada "+title+" serta syarat atau struktur matematis yang relevan.",
      hint:"Mulai dari domain atau ruang yang digunakan, lalu pisahkan objek, parameter, asumsi, dan syarat yang relevan.",
      answer:answer([
        "Diketahui konteks submateri "+title+" dan konsep utama "+a+".",
        "Objek matematis ditentukan beserta domain atau ruang tempat objek tersebut berada.",
        "Parameter, asumsi, dan syarat yang benar-benar digunakan dipisahkan secara eksplisit.",
        "Jika terdapat definisi formal pada submateri ini, setiap komponennya diperiksa pada contoh konkret; jika tidak ada, uraian tetap diperlakukan sebagai penjelasan konsep.",
        "Kesimpulan menyatakan struktur yang benar tanpa memberi label definisi kepada kalimat deskriptif."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Buat contoh paling sederhana yang memenuhi definisi pada "+title+", lalu buat satu noncontoh.",
      hint:"Gunakan struktur sekecil mungkin agar satu syarat yang gagal pada noncontoh mudah diidentifikasi.",
      answer:answer([
        "Dipilih objek sederhana yang berada pada domain definisi.",
        "Seluruh syarat definisi diperiksa satu per satu pada objek tersebut.",
        "Untuk noncontoh, diubah tepat satu sifat penting sambil mempertahankan konteks yang sama.",
        "Ditunjukkan syarat mana yang gagal dan mengapa kegagalan itu cukup untuk menolak objek sebagai contoh.",
        "Perbandingan ini menegaskan batas antara memenuhi definisi dan hanya tampak serupa."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Jelaskan hubungan antara "+a+" dan "+b+" dalam konteks "+title+".",
      hint:"Tentukan apakah hubungannya definisional, implikasi satu arah, ekuivalensi, atau hanya keterkaitan konseptual.",
      answer:answer([
        "Kedua konsep dituliskan dengan definisi atau sifat formalnya masing-masing.",
        "Arah hubungan dari "+a+" menuju "+b+" diperiksa dengan menggunakan definisi atau teorema yang relevan.",
        "Arah sebaliknya diperiksa secara terpisah; jika tidak berlaku, disiapkan contoh tandingan.",
        "Syarat tambahan yang diperlukan dicatat agar pernyataan tidak terlalu umum.",
        "Kesimpulan menyatakan secara eksplisit jenis hubungan yang benar beserta syaratnya."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Identifikasi asumsi yang paling penting ketika menerapkan hasil utama pada "+title+".",
      hint:"Periksa domain, regularitas, independensi, feasibility, kondisi batas, atau asumsi struktur sesuai bidang.",
      answer:answer([
        "Pernyataan hasil formal dibaca kembali dan semua hipotesisnya didaftarkan.",
        "Setiap hipotesis dicocokkan dengan informasi pada masalah.",
        "Asumsi yang tidak otomatis dipenuhi dipisahkan sebagai hal yang harus diverifikasi.",
        "Dijelaskan konsekuensi matematis jika asumsi tersebut dihapus atau dilanggar.",
        "Penerapan hasil dinyatakan sah hanya setelah seluruh hipotesis yang diperlukan terpenuhi."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Susun satu perhitungan atau konstruksi kecil yang menggunakan "+a+".",
      hint:"Gunakan data sederhana dan tulis setiap transformasi secara eksplisit.",
      answer:answer([
        "Ditetapkan data awal dan target perhitungan atau konstruksi.",
        "Dipilih definisi atau rumus yang secara langsung melibatkan "+a+".",
        "Substitusi atau konstruksi dilakukan langkah demi langkah tanpa melewati syarat domain.",
        "Hasil sementara diperiksa melalui identitas, substitusi balik, atau representasi kedua yang relevan.",
        "Hasil akhir dinyatakan bersama interpretasinya dalam konteks "+title+"."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Berikan pembuktian singkat untuk salah satu sifat dasar pada "+title+".",
      hint:"Mulai dari definisi, ambil objek sebarang, lalu tulis inferensi yang digunakan pada setiap langkah.",
      answer:answer([
        "Diambil sebarang objek yang memenuhi hipotesis pernyataan.",
        "Definisi yang relevan dituliskan dan diterapkan pada objek tersebut.",
        "Setiap transformasi dijustifikasi oleh definisi, aksioma, atau hasil yang telah diketahui.",
        "Target pembuktian diperoleh tanpa menggunakan pernyataan yang sedang dibuktikan sebagai asumsi.",
        "Dengan demikian sifat yang diminta terbukti untuk setiap objek yang memenuhi hipotesis."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Temukan kasus batas atau contoh tandingan yang menunjukkan mengapa salah satu hipotesis pada "+title+" diperlukan.",
      hint:"Hilangkan satu hipotesis, tetapi pertahankan hipotesis lain sebanyak mungkin.",
      answer:answer([
        "Dipilih satu hipotesis yang akan diuji kebutuhannya.",
        "Dibangun objek yang masih memenuhi hipotesis lainnya tetapi tidak memenuhi hipotesis terpilih.",
        "Kesimpulan teorema atau sifat kemudian diperiksa pada objek tersebut.",
        "Ditunjukkan secara eksplisit bagian kesimpulan yang gagal.",
        "Oleh karena itu hipotesis yang dihapus memang mempunyai peran pada validitas pernyataan."
      ]),
      provenance:"dmath-original" as const
    },
    {
      prompt:"Rancang masalah sintesis yang menghubungkan "+title+" dengan satu submateri sebelumnya, kemudian jelaskan strategi penyelesaiannya.",
      hint:"Gunakan satu konsep lama sebagai alat dan konsep baru sebagai target.",
      answer:answer([
        "Dipilih satu konsep prasyarat yang benar-benar digunakan pada "+title+".",
        "Ditetapkan masalah yang memerlukan konsep lama pada tahap awal dan "+a+" pada tahap utama.",
        "Strategi dibagi menjadi identifikasi data, penerapan konsep prasyarat, penerapan konsep baru, dan verifikasi.",
        "Diperiksa bahwa setiap tahap menghasilkan informasi yang diperlukan tahap berikutnya.",
        "Kesimpulan akhir menjelaskan hubungan struktural antara kedua submateri, bukan sekadar hasil numerik."
      ]),
      provenance:"dmath-original" as const
    }
  ];
}

function build(subjectSlug:string,title:string,summary:string,keyIdeas:string[]):BookLessonContent{
  const profile=profiles[subjectSlug];
  return{
    intro:[
      summary,
      profile.perspective,
      "Konsep utama pada submateri ini adalah "+keyIdeas.join(", ")+".",
      "Pembahasan menekankan objek matematika, asumsi, definisi yang benar-benar diperlukan, hasil formal yang dapat dipertanggungjawabkan, contoh, dan penerapan.",
      "Pada topik komputasional, hasil diperiksa melalui feasibility, correctness, stabilitas, kompleksitas, atau sensitivitas sesuai konteks."
    ],
    notation:profile.notation,
    formal:formalFor(subjectSlug,"",title,summary,keyIdeas),
    examples:examplesFor(subjectSlug,title,keyIdeas),
    exercises:exercisesFor(title,keyIdeas),
    mistakes:profile.mistakes,
    connections:profile.connections
  };
}

const generated:Record<string,BookLessonContent>={};
for(const subject of newAcademicSubjects){
  for(const chapter of subject.chapters){
    for(const section of chapter.sections){
      const lesson=build(subject.slug,section.title,section.summary,section.keyIdeas);
      lesson.formal=formalFor(subject.slug,section.slug,section.title,section.summary,section.keyIdeas);
      lesson.examples=[...directDefinitionExamples(section.slug),...lesson.examples];
      generated[section.slug]=lesson;
    }
  }
}

export const newAcademicContent=generated;
