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

function formalFor(subject:string,slug:string,title:string,summary:string,keyIdeas:string[]):BookFormalItem[]{
  const special:Record<string,BookFormalItem[]>={
    "or-lp-formulasi":[
      {kind:"definition",title:"Program Linear",statement:"Program linear adalah masalah optimisasi dengan fungsi tujuan linear dan seluruh kendala berbentuk persamaan atau pertidaksamaan linear pada variabel keputusan."},
      {kind:"proposition",title:"Optimalitas pada Titik Ekstrem",statement:"Jika program linear memiliki solusi optimal hingga dan daerah feasible mempunyai titik ekstrem, terdapat sedikitnya satu solusi optimal pada titik ekstrem daerah feasible.",proof:["Daerah feasible program linear merupakan himpunan cembung polihedral.","Jika solusi optimal bukan titik ekstrem, solusi tersebut dapat dinyatakan sebagai kombinasi cembung titik-titik feasible.","Linearitas fungsi tujuan membuat nilai pada kombinasi cembung menjadi kombinasi nilai objektif.","Sedikitnya satu titik ekstrem penyusun memiliki nilai tidak lebih buruk daripada solusi semula."]},
    ],
    "or-dualitas":[
      {kind:"theorem",title:"Dualitas Lemah",statement:"Untuk primal maksimum $\max\{c^Tx:Ax\le b,\ x\ge0\}$ dan dual minimum $\min\{b^Ty:A^Ty\ge c,\ y\ge0\}$, setiap pasangan solusi feasible memenuhi $c^Tx\le b^Ty$.",proof:["Diambil solusi feasible primal $x$ dan dual $y$.","Dari $A^Ty\ge c$ dan $x\ge0$ diperoleh $x^TA^Ty\ge c^Tx$.","Karena $Ax\le b$ dan $y\ge0$, diperoleh $y^TAx\le y^Tb$.","Dengan $x^TA^Ty=y^TAx$, diperoleh $c^Tx\le b^Ty$. Dengan demikian dualitas lemah terbukti."]},
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

  return special[slug]??[
    {kind:"note",title:"Pengantar Konsep",statement:summary},
    {kind:"note",title:"Struktur Konsep",statement:"Konsep utama yang perlu dihubungkan pada bagian ini adalah "+keyIdeas.join(", ")+". Istilah yang benar-benar mempunyai definisi formal diperkenalkan pada submateri yang relevan; uraian deskriptif tidak diberi label definisi."},
    {kind:"note",title:"Standar Pembuktian atau Verifikasi",statement:"Setiap kesimpulan harus dilacak kembali ke definisi atau hasil yang digunakan, dengan seluruh hipotesis dinyatakan secara eksplisit."}
  ];
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
