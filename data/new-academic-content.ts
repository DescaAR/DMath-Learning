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
      "Teori Ukuran dan Probabilitas memberi definisi conditional expectation, filtration, dan integrasi.",
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
      {kind:"theorem",title:"Dualitas Lemah",statement:"Untuk pasangan primal–dual dalam orientasi yang konsisten, setiap solusi feasible dual memberikan bound terhadap setiap solusi feasible primal."},
      {kind:"theorem",title:"Dualitas Kuat",statement:"Jika salah satu program linear primal atau dual mempunyai solusi optimal hingga, pasangan lainnya juga mempunyai solusi optimal dan kedua nilai objektif optimal sama."}
    ],
    "or-max-flow":[
      {kind:"theorem",title:"Max-Flow Min-Cut",statement:"Nilai maksimum aliran dari sumber ke tujuan sama dengan kapasitas minimum di antara seluruh cut yang memisahkan sumber dan tujuan."}
    ],
    "or-dp-principle":[
      {kind:"note",title:"Prinsip Optimalitas Bellman",statement:"Bagian sisa dari kebijakan optimal, setelah keputusan awal dan state baru ditentukan, harus optimal untuk submasalah yang dimulai dari state tersebut."}
    ],
    "or-mm1":[
      {kind:"proposition",title:"Little's Law",statement:"Pada sistem stabil dalam keadaan tunak, jumlah rata-rata pelanggan $L$, laju kedatangan efektif $\\lambda$, dan waktu rata-rata dalam sistem $W$ memenuhi $L=\\lambda W$."}
    ],
    "or-kkt":[
      {kind:"theorem",title:"Kondisi KKT",statement:"Di bawah constraint qualification yang sesuai, solusi lokal masalah optimisasi terdiferensial dengan kendala pertidaksamaan memenuhi primal feasibility, dual feasibility, complementary slackness, dan stationarity."}
    ],
    "sta-probability-laws":[
      {kind:"definition",title:"Probabilitas Bersyarat",statement:"Jika $P(B)>0$, probabilitas $A$ dengan syarat $B$ didefinisikan oleh $P(A\\mid B)=P(A\\cap B)/P(B)$."},
      {kind:"proposition",title:"Aturan Probabilitas Total",statement:"Jika $B_1,\\ldots,B_k$ membentuk partisi ruang sampel dan $P(B_i)>0$, maka $P(A)=\\sum_i P(A\\mid B_i)P(B_i)$."}
    ],
    "sta-anova-oneway":[
      {kind:"proposition",title:"Dekomposisi Variabilitas ANOVA",statement:"Pada ANOVA satu arah, total sum of squares dapat diuraikan menjadi variasi antarperlakuan dan variasi dalam perlakuan: $SS_T=SS_{Tr}+SS_E$.",proof:["Untuk observasi $y_{ij}$ pada kelompok $i$, dituliskan $y_{ij}-\\bar y_{..}=(\\bar y_{i.}-\\bar y_{..})+(y_{ij}-\\bar y_{i.})$.","Kedua ruas dikuadratkan dan dijumlahkan terhadap seluruh $i$ dan $j$.","Suku silang bernilai nol karena untuk setiap kelompok berlaku $\\sum_j(y_{ij}-\\bar y_{i.})=0$.","Sisa dua jumlah kuadrat masing-masing adalah sum of squares antarperlakuan dan sum of squares error. Dengan demikian $SS_T=SS_{Tr}+SS_E$."]},
      {kind:"note",title:"Makna Uji F",statement:"Statistik F membandingkan skala variasi yang dijelaskan oleh perbedaan mean kelompok dengan variasi residual di dalam kelompok."}
    ],
    "sta-simple-regression":[
      {kind:"definition",title:"Model Regresi Linear Sederhana",statement:"Model ditulis $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$, dengan asumsi terhadap error ditentukan sesuai tujuan inferensi."},
      {kind:"proposition",title:"Normal Equations",statement:"Estimator least squares meminimalkan jumlah kuadrat residual dan memenuhi persamaan normal yang diperoleh dari turunan fungsi objektif terhadap parameter."}
    ],
    "stm-prob-axioms":[
      {kind:"definition",title:"Ukuran Probabilitas",statement:"Pada ruang terukur $(\\Omega,\\mathcal F)$, fungsi $P:\\mathcal F\\to[0,1]$ disebut ukuran probabilitas apabila $P(\\Omega)=1$ dan untuk setiap barisan kejadian saling lepas $A_1,A_2,\\ldots\\in\\mathcal F$ berlaku $P(\\bigcup_{i=1}^{\\infty}A_i)=\\sum_{i=1}^{\\infty}P(A_i)$. Nonnegativitas tercakup oleh kodomain $[0,1]$."}
    ],
    "stm-clt":[
      {kind:"theorem",title:"Central Limit Theorem IID",statement:"Untuk variabel acak iid dengan mean $\\mu$ dan varians hingga positif $\\sigma^2$, jumlah yang dinormalisasi $(S_n-n\\mu)/(\\sigma\\sqrt n)$ konvergen dalam distribusi ke $N(0,1)$."}
    ],
    "stm-cramer-rao":[
      {kind:"theorem",title:"Batas Bawah Cramér–Rao",statement:"Di bawah syarat regularitas yang sesuai, varians estimator tak bias suatu fungsi parameter dibatasi dari bawah oleh kuantitas yang ditentukan oleh Fisher information."}
    ],
    "stm-factorization":[
      {kind:"theorem",title:"Teorema Faktorisasi Neyman–Fisher",statement:"Dalam model terdominasi, statistik $T$ cukup untuk parameter jika likelihood dapat difaktorkan menjadi fungsi yang bergantung pada data hanya melalui $T$ dikalikan fungsi yang tidak bergantung pada parameter."}
    ],
    "stm-neyman-pearson":[
      {kind:"theorem",title:"Lemma Neyman–Pearson",statement:"Untuk menguji hipotesis sederhana melawan hipotesis sederhana pada taraf tertentu, uji berbasis likelihood ratio menghasilkan uji most powerful pada kondisi lemma."}
    ],
    "md-ekuivalensi-logika":[
      {kind:"definition",title:"Ekuivalensi Logika",statement:"Proposisi $P$ dan $Q$ ekuivalen secara logis apabila $P\\leftrightarrow Q$ merupakan tautologi."},
      {kind:"proposition",title:"Hukum De Morgan",statement:"Negasi konjungsi ekuivalen dengan disjungsi negasi, dan negasi disjungsi ekuivalen dengan konjungsi negasi."}
    ],
    "md-induksi":[
      {kind:"theorem",title:"Prinsip Induksi Matematika",statement:"Jika pernyataan benar pada basis dan kebenaran pada $n$ selalu mengimplikasikan kebenaran pada $n+1$, pernyataan benar untuk seluruh bilangan bulat mulai dari basis tersebut."}
    ],
    "md-pigeonhole":[
      {kind:"theorem",title:"Prinsip Pigeonhole",statement:"Jika lebih dari $n$ objek ditempatkan ke dalam $n$ kotak, sedikitnya satu kotak berisi paling sedikit dua objek."}
    ],
    "md-mst":[
      {kind:"proposition",title:"Cut Property",statement:"Untuk suatu cut pada graf berbobot, sisi berbobot minimum yang melintasi cut dapat dipilih sebagai bagian dari minimum spanning tree pada kondisi tie yang sesuai."}
    ],
    "ks-conditional-expectation":[
      {kind:"definition",title:"Ekspektasi Bersyarat",statement:"Untuk sub-$\\sigma$-algebra $\\mathcal G$, $E[X\\mid\\mathcal G]$ adalah variabel acak $\\mathcal G$-measurable yang mempunyai integral sama dengan $X$ pada setiap kejadian di $\\mathcal G$."},
      {kind:"proposition",title:"Tower Property",statement:"Jika $\\mathcal H\\subseteq\\mathcal G$, maka $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$."}
    ],
    "ks-martingale":[
      {kind:"definition",title:"Martingale",statement:"Proses adapted integrabel $(M_n)$ adalah martingale jika $E[M_{n+1}\\mid\\mathcal F_n]=M_n$ untuk setiap $n$."}
    ],
    "ks-brownian-definition":[
      {kind:"definition",title:"Brownian Motion Standar",statement:"Proses $(W_t)_{t\\ge0}$ adalah Brownian motion standar jika $W_0=0$, memiliki increment independen dan stasioner Gaussian dengan varians panjang interval, serta memiliki lintasan kontinu hampir pasti."}
    ],
    "ks-ito-isometry":[
      {kind:"theorem",title:"Isometri Itô",statement:"Untuk integrand square-integrable yang sesuai, $E[(\\int_0^t H_s\\,dW_s)^2]=E[\\int_0^t H_s^2\\,ds]$."}
    ],
    "ks-ito-formula":[
      {kind:"theorem",title:"Formula Itô",statement:"Untuk fungsi cukup halus $f(t,x)$ dan proses Itô $dX_t=b_tdt+\\sigma_tdW_t$, diferensial $f(t,X_t)$ memuat suku tambahan setengah turunan kedua yang berasal dari quadratic variation."}
    ],
    "ks-girsanov":[
      {kind:"theorem",title:"Teorema Girsanov",statement:"Di bawah kondisi integrabilitas yang sesuai, perubahan ukuran melalui exponential martingale mengubah drift Brownian motion sambil mempertahankan struktur Brownian di bawah ukuran probabilitas baru."}
    ],
    "tup-measures":[
      {kind:"definition",title:"Ukuran",statement:"Ukuran pada $(X,\\mathcal A)$ adalah fungsi $\\mu:\\mathcal A\\to[0,\\infty]$ dengan $\\mu(\\varnothing)=0$ dan countable additivity pada keluarga himpunan saling lepas."}
    ],
    "tup-extension":[
      {kind:"theorem",title:"Teorema Perluasan Carathéodory",statement:"Premeasure pada kelas awal yang sesuai dapat diperluas menjadi measure pada sigma-algebra yang dihasilkannya; dengan kondisi sigma-finite, perluasan memiliki sifat keunikan yang kuat."}
    ],
    "tup-mct":[
      {kind:"theorem",title:"Monotone Convergence Theorem",statement:"Jika $0\\le f_n\\uparrow f$ hampir di mana-mana, maka $\\int f_n\\,d\\mu\\uparrow\\int f\\,d\\mu$."}
    ],
    "tup-fatou":[
      {kind:"theorem",title:"Lemma Fatou",statement:"Untuk fungsi measurable nonnegatif, $\\int\\liminf f_n\\,d\\mu\\le\\liminf\\int f_n\\,d\\mu$."}
    ],
    "tup-dct":[
      {kind:"theorem",title:"Dominated Convergence Theorem",statement:"Jika $f_n\\to f$ hampir di mana-mana dan $|f_n|\\le g$ untuk suatu $g\\in L^1$, maka $f\\in L^1$ dan $\\int f_n\\to\\int f$."}
    ],
    "tup-fubini":[
      {kind:"theorem",title:"Teorema Fubini",statement:"Untuk fungsi integrabel pada ruang produk, integral produk dapat dihitung sebagai integral berulang dalam kedua urutan, dengan syarat standar teorema dipenuhi."}
    ],
    "tup-radon-nikodym":[
      {kind:"theorem",title:"Teorema Radon–Nikodym",statement:"Jika ukuran $\\nu$ sigma-finite absolut kontinu terhadap $\\mu$ dalam kerangka teorema, terdapat fungsi measurable $f$ sehingga $\\nu(A)=\\int_A f\\,d\\mu$."}
    ],
    "tup-slln":[
      {kind:"theorem",title:"Strong Law of Large Numbers",statement:"Dalam kondisi klasik iid dengan ekspektasi hingga, rata-rata sampel konvergen hampir pasti ke mean populasi."}
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

function examplesFor(subject:string,title:string,keyIdeas:string[]):BookExample[]{
  const a=keyIdeas[0]??title;
  const b=keyIdeas[1]??"struktur";
  const c=keyIdeas[2]??"verifikasi";
  const generic=[
    {
      title:"Contoh 1 · Mengenali Struktur",
      problem:"Diberikan sebuah situasi kecil yang memuat "+a+" dan "+b+". Tentukan objek matematis utama, parameter yang diketahui, serta apa yang harus dicari.",
      solution:[
        "Diidentifikasi terlebih dahulu himpunan objek dan informasi yang diketahui.",
        "Dibedakan antara parameter, variabel, asumsi, dan besaran yang akan ditentukan.",
        "Situasi ditulis ulang menggunakan notasi pada submateri "+title+".",
        "Hasil akhir diperiksa terhadap definisi sebelum diinterpretasikan."
      ],
      conclusion:"Langkah pemodelan yang benar dimulai dari struktur, bukan dari substitusi rumus."
    },
    {
      title:"Contoh 2 · Memeriksa Asumsi",
      problem:"Sebuah metode pada "+title+" akan diterapkan. Bagaimana menentukan apakah asumsi yang melibatkan "+b+" telah terpenuhi?",
      solution:[
        "Dituliskan hipotesis yang diperlukan oleh definisi atau teorema.",
        "Setiap hipotesis dibandingkan dengan informasi masalah.",
        "Jika ada asumsi yang tidak dapat diverifikasi, kesimpulan diberi batasan yang sesuai.",
        "Dipilih alternatif metode apabila pelanggaran asumsi mengubah validitas hasil."
      ],
      conclusion:"Validitas metode ditentukan oleh hipotesisnya, bukan hanya oleh keberhasilan komputasi."
    },
    {
      title:"Contoh 3 · Membandingkan Dua Pendekatan",
      problem:"Bandingkan pendekatan langsung dan pendekatan berbasis "+c+" untuk persoalan pada "+title+".",
      solution:[
        "Ditetapkan tujuan yang sama untuk kedua pendekatan.",
        "Dibandingkan informasi yang dibutuhkan, langkah utama, dan keluaran masing-masing.",
        "Diperiksa keunggulan serta keterbatasannya pada kasus sederhana dan kasus ekstrem.",
        "Dipilih pendekatan berdasarkan tujuan pembuktian, inferensi, atau komputasi."
      ],
      conclusion:"Pemilihan metode merupakan bagian dari penalaran matematis."
    },
    {
      title:"Contoh 4 · Verifikasi Hasil",
      problem:"Setelah memperoleh suatu jawaban pada "+title+", susun prosedur verifikasi yang tidak hanya mengulang perhitungan awal.",
      solution:[
        "Diperiksa kembali domain, feasibility, atau syarat definisional.",
        "Digunakan identitas, bound, residual, kasus batas, atau representasi kedua yang relevan.",
        "Hasil diuji pada contoh kecil yang dapat dihitung secara independen.",
        "Interpretasi dibandingkan dengan skala dan asumsi masalah."
      ],
      conclusion:"Verifikasi independen membantu membedakan hasil yang benar dari hasil yang hanya tampak masuk akal."
    }
  ];
  return generic;
}

function exercisesFor(title:string,keyIdeas:string[]){
  const a=keyIdeas[0]??title;
  const b=keyIdeas[1]??"konsep kedua";
  const answer=(steps:string[])=>steps.join("\n");
  return[
    {
      prompt:"Tuliskan definisi formal objek utama pada "+title+" dan jelaskan setiap komponennya.",
      hint:"Mulai dari domain, objek, parameter, dan seluruh syarat yang menyertai definisi.",
      answer:answer([
        "Diketahui konteks submateri "+title+" dan konsep utama "+a+".",
        "Objek matematis terlebih dahulu ditentukan beserta domain atau ruang tempat objek tersebut berada.",
        "Setiap syarat pada definisi dituliskan secara terpisah dan dijelaskan perannya; syarat tidak boleh diganti oleh contoh atau intuisi.",
        "Setelah seluruh syarat dinyatakan, diberikan satu objek yang memenuhi semuanya sebagai verifikasi.",
        "Dengan demikian definisi dapat digunakan secara operasional untuk membedakan contoh dan noncontoh."
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
      "Pembahasan dimulai dari persoalan yang memotivasi konsep, kemudian bergerak menuju notasi, definisi formal, hasil utama, pembuktian atau justifikasi, contoh terbahas, visualisasi, dan latihan.",
      "Konsep inti halaman ini adalah "+keyIdeas.join(", ")+". Hubungan antaristilah tersebut perlu dipahami sebelum menggunakan rumus atau algoritma.",
      "Setiap hasil disertai perhatian terhadap asumsi. Pada topik komputasional, analisis juga memeriksa correctness, stabilitas, kompleksitas, atau sensitivitas sesuai konteks.",
      "Contoh dan latihan pada halaman ini disusun khusus untuk DMath Learning. Referensi buku digunakan untuk verifikasi cakupan dan terminology, bukan untuk menyalin contoh, soal, ilustrasi, atau urutan sumber."
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
      generated[section.slug]=lesson;
    }
  }
}

export const newAcademicContent=generated;
