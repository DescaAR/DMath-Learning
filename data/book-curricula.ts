import { additionalBookSubjects } from "@/data/additional-book-curricula";
import { expandedBookSubjects } from "@/data/expanded-book-curricula";
import { numericalAnalysisBook } from "@/data/numerical-analysis-curricula";
import { newAcademicSubjects } from "@/data/new-academic-curricula";

export type BookSection = {
  number:string;
  slug:string;
  title:string;
  sourceTitle:string;
  summary:string;
  keyIdeas:string[];
};

export type BookChapter = {
  number:string;
  title:string;
  sourceTitle:string;
  sections:BookSection[];
};

export type BookSubject = {
  slug:"analisis-real"|"analisis-kompleks"|"kombinatorika"|"aljabar-linear"|"struktur-aljabar"|"olimpiade-matematika-sma"|"kalkulus"|"teori-graf"|"teori-bilangan-olimpiade"|"persamaan-diferensial"|"analisis-numerik"|"riset-operasi"|"statistika-terapan"|"statistika-matematika"|"matematika-diskrit"|"kalkulus-stokastik"|"teori-ukuran-probabilitas";
  title:string;
  subtitle:string;
  level:string;
  source:string;
  sourceYear:string;
  curriculumVersion?:string;
  chapters:BookChapter[];
};

const r=(number:string,slug:string,title:string,sourceTitle:string,summary:string,keyIdeas:string[]):BookSection=>({number,slug,title,sourceTitle,summary,keyIdeas});

export const realAnalysisBook:BookSubject={
  slug:"analisis-real",
  title:"Analisis Real",
  subtitle:"Materi bertahap dari fondasi bilangan real sampai topologi dan integrasi.",
  level:"Kuliah · ON-MIPA",
  source:"Robert G. Bartle & Donald R. Sherbert, Introduction to Real Analysis, 4th ed.",
  sourceYear:"2011",
  chapters:[
    {number:"1",title:"Pendahuluan dan Fondasi",sourceTitle:"Preliminaries",sections:[
      r("1.1","himpunan-dan-fungsi","Himpunan dan Fungsi","Sets and Functions","Bahasa dasar himpunan, fungsi, citra, pracitra, injeksi, surjeksi, bijeksi, invers, dan komposisi.",["operasi himpunan","fungsi sebagai pemetaan","citra dan pracitra","injektif, surjektif, bijektif","fungsi invers dan komposisi"]),
      r("1.2","induksi-matematika","Induksi Matematika","Mathematical Induction","Prinsip well-ordering, induksi biasa, induksi dengan basis umum, dan induksi kuat.",["well-ordering","basis induksi","hipotesis induksi","langkah induksi","induksi kuat"]),
      r("1.3","himpunan-hingga-dan-tak-hingga","Himpunan Hingga dan Tak Hingga","Finite and Infinite Sets","Kardinalitas hingga, himpunan terhitung, denumerable, tak terhitung, dan konstruksi bijeksi.",["himpunan hingga","countable","denumerable","uncountable","diagonal enumeration"]),
    ]},
    {number:"2",title:"Bilangan Real",sourceTitle:"The Real Numbers",sections:[
      r("2.1","sifat-aljabar-dan-urutan-r","Sifat Aljabar dan Urutan pada ℝ","The Algebraic and Order Properties of R","ℝ sebagai ordered field: aksioma lapangan, sifat urutan, dan konsekuensi untuk pertidaksamaan.",["field properties","order properties","positivitas","pertidaksamaan","ordered field"]),
      r("2.2","nilai-mutlak-dan-garis-real","Nilai Mutlak dan Garis Real","Absolute Value and the Real Line","Nilai mutlak sebagai jarak, ketaksamaan segitiga, persekitaran titik, dan geometri garis real.",["nilai mutlak","jarak","ketaksamaan segitiga","neighborhood","epsilon"]),
      r("2.3","kelengkapan-r","Sifat Kelengkapan ℝ","The Completeness Property of R","Supremum, infimum, himpunan terbatas, least-upper-bound property, dan peran kelengkapan dalam analisis.",["upper/lower bound","supremum","infimum","completeness","least upper bound"]),
      r("2.4","aplikasi-supremum","Aplikasi Sifat Supremum","Applications of the Supremum Property","Sifat Archimedean, keberadaan akar, dan kerapatan bilangan rasional maupun irasional.",["Archimedean property","density of Q","density of irrationals","square roots","supremum arguments"]),
      r("2.5","interval","Interval dan Nested Interval","Intervals","Jenis interval, nested intervals, representasi real, dan hubungan dengan ketakterhitungan ℝ.",["interval","nested interval property","binary expansion","decimal expansion","uncountability"]),
    ]},
    {number:"3",title:"Barisan dan Deret",sourceTitle:"Sequences and Series",sections:[
      r("3.1","barisan-dan-limit","Barisan dan Limit","Sequences and Their Limits","Definisi barisan, konvergensi ε-N, limit, eventually, dan sifat awal barisan konvergen.",["sequence","epsilon-N","convergence","uniqueness of limit","boundedness"]),
      r("3.2","teorema-limit-barisan","Teorema Limit Barisan","Limit Theorems","Aljabar limit, limit hasil bagi, teorema urutan, squeeze theorem, dan teknik estimasi.",["sum/product limits","quotient limits","order theorem","squeeze theorem","absolute value"]),
      r("3.3","barisan-monoton","Barisan Monoton","Monotone Sequences","Barisan naik/turun, terbatas, Monotone Convergence Theorem, serta konstruksi limit melalui supremum/infimum.",["monotone","bounded","MCT","supremum","recursive sequences"]),
      r("3.4","subbarisan-dan-bolzano-weierstrass","Subbarisan dan Teorema Bolzano–Weierstrass","Subsequences and the Bolzano-Weierstrass Theorem","Subbarisan, titik cluster, limsup/liminf secara intuitif, dan keberadaan subbarisan konvergen.",["subsequence","cluster point","Bolzano-Weierstrass","bounded sequence","divergence tests"]),
      r("3.5","kriteria-cauchy","Kriteria Cauchy","The Cauchy Criterion","Barisan Cauchy, kelengkapan ℝ, ekuivalensi Cauchy–konvergen, dan estimasi ekor.",["Cauchy sequence","completeness","tail estimates","convergence criterion","absolute differences"]),
      r("3.6","divergensi-tak-hingga","Barisan Divergen ke Tak Hingga","Properly Divergent Sequences","Limit +∞/−∞, perbandingan, operasi dengan divergensi tepat, dan perbedaan dengan osilasi.",["infinite limits","proper divergence","comparison","eventual inequalities","oscillation"]),
      r("3.7","pengantar-deret-tak-hingga","Pengantar Deret Tak Hingga","Introduction to Infinite Series","Jumlah parsial, konvergensi deret, deret geometri, uji suku ke-n, dan sifat dasar.",["partial sums","series convergence","geometric series","nth-term test","Cauchy criterion for series"]),
    ]},
    {number:"4",title:"Limit Fungsi",sourceTitle:"Limits",sections:[
      r("4.1","limit-fungsi","Limit Fungsi","Limits of Functions","Definisi ε-δ, limit melalui barisan, limit satu titik, dan strategi pembuktian formal.",["epsilon-delta","sequential criterion","punctured neighborhood","uniqueness","local estimates"]),
      r("4.2","teorema-limit-fungsi","Teorema Limit Fungsi","Limit Theorems","Aljabar limit fungsi, teorema urutan, squeeze theorem, dan komposisi limit.",["algebra of limits","order","squeeze","composition","absolute value"]),
      r("4.3","perluasan-konsep-limit","Perluasan Konsep Limit","Some Extensions of the Limit Concept","Limit satu sisi, limit tak hingga, limit di tak hingga, dan asimtot.",["one-sided limits","infinite limits","limits at infinity","asymptotes","extended real line"]),
    ]},
    {number:"5",title:"Fungsi Kontinu",sourceTitle:"Continuous Functions",sections:[
      r("5.1","fungsi-kontinu","Fungsi Kontinu","Continuous Functions","Kontinuitas titik dan himpunan, kriteria barisan, diskontinuitas, dan hubungan dengan limit.",["continuity","sequential criterion","discontinuity","local behavior","composition"]),
      r("5.2","kombinasi-fungsi-kontinu","Kombinasi Fungsi Kontinu","Combinations of Continuous Functions","Penjumlahan, hasil kali, hasil bagi, komposisi, dan fungsi elementer yang kontinu.",["sum/product","quotient","composition","polynomials","rational functions"]),
      r("5.3","kontinuitas-pada-interval","Fungsi Kontinu pada Interval","Continuous Functions on Intervals","Intermediate Value Theorem, lokasi akar, Extreme Value Theorem, dan citra interval.",["IVT","root existence","EVT","compact intervals","image of intervals"]),
      r("5.4","kontinuitas-seragam","Kontinuitas Seragam","Uniform Continuity","Perbedaan kontinu dan kontinu seragam, kriteria sekuensial, serta Teorema Heine–Cantor.",["uniform continuity","epsilon-delta uniformity","Heine-Cantor","Cauchy preservation","counterexamples"]),
      r("5.5","kontinuitas-dan-gauge","Kontinuitas dan Gauge","Continuity and Gauges","Gauge sebagai radius lokal dan penggunaannya dalam penutup interval serta argumen kompak.",["gauge","local radius","finite subcover","compact interval","continuity"]),
      r("5.6","fungsi-monoton-dan-invers","Fungsi Monoton dan Invers","Monotone and Inverse Functions","Fungsi monoton, diskontinuitas monoton, invers kontinu, dan sifat order-preserving.",["monotone functions","inverse functions","continuity of inverse","jumps","strict monotonicity"]),
    ]},
    {number:"6",title:"Diferensiasi",sourceTitle:"Differentiation",sections:[
      r("6.1","turunan","Turunan","The Derivative","Definisi turunan, aturan diferensiasi, chain rule, turunan invers, dan hubungan turunan dengan kontinuitas.",["derivative","continuity","product/quotient rule","chain rule","inverse derivative"]),
      r("6.2","teorema-nilai-rata-rata","Teorema Nilai Rata-rata","The Mean Value Theorem","Rolle, Mean Value Theorem, monotonisitas dari tanda turunan, dan estimasi Lipschitz.",["Rolle","MVT","monotonicity","Lipschitz bounds","constant derivative"]),
      r("6.3","aturan-lhospital","Aturan L'Hospital","L’Hospital’s Rules","Bentuk tak tentu dan kondisi sah penggunaan aturan L'Hospital.",["0/0","infinity/infinity","Cauchy MVT","indeterminate forms","limit evaluation"]),
      r("6.4","teorema-taylor","Teorema Taylor","Taylor’s Theorem","Polinom Taylor, remainder, aproksimasi lokal, dan kontrol galat.",["Taylor polynomial","remainder","local approximation","error bound","higher derivatives"]),
    ]},
    {number:"7",title:"Integral Riemann",sourceTitle:"The Riemann Integral",sections:[
      r("7.1","integral-riemann-dasar","Integral Riemann","Riemann Integral","Partisi bertanda, mesh, jumlah Riemann, definisi integrabilitas, dan nilai integral.",["tagged partition","mesh","Riemann sum","integrability","epsilon criterion"]),
      r("7.2","fungsi-terintegralkan-riemann","Fungsi yang Terintegralkan Riemann","Riemann Integrable Functions","Kriteria integrabilitas, kontinu ⇒ integrabel, monoton ⇒ integrabel, dan operasi pada fungsi integrabel.",["integrability criteria","continuous functions","monotone functions","linearity","absolute value"]),
      r("7.3","teorema-dasar-kalkulus","Teorema Dasar Kalkulus","The Fundamental Theorem","Hubungan integral dan turunan, fungsi akumulasi, Newton–Leibniz, serta perubahan variabel.",["FTC I","FTC II","accumulation function","antiderivative","substitution"]),
      r("7.4","integral-darboux","Integral Darboux","The Darboux Integral","Jumlah Darboux atas/bawah, integral atas/bawah, kriteria Darboux, dan ekuivalensi dengan Riemann.",["upper/lower sums","upper/lower integrals","Darboux criterion","refinement","equivalence"]),
      r("7.5","integrasi-aproksimasi","Integrasi Aproksimasi","Approximate Integration","Aturan midpoint, trapezoid, Simpson secara konseptual, dan estimasi galat.",["quadrature","midpoint","trapezoid","Simpson","error analysis"]),
    ]},
    {number:"8",title:"Barisan Fungsi",sourceTitle:"Sequences of Functions",sections:[
      r("8.1","konvergensi-titik-dan-seragam","Konvergensi Titik demi Titik dan Seragam","Pointwise and Uniform Convergence","Definisi pointwise/uniform, sup norm, uji uniform, dan contoh pembeda.",["pointwise convergence","uniform convergence","sup norm","Cauchy criterion","counterexamples"]),
      r("8.2","pertukaran-limit","Pertukaran Limit","Interchange of Limits","Kapan limit boleh dipertukarkan dengan kontinuitas, integral, dan turunan.",["limit and continuity","limit and integral","limit and derivative","uniform convergence","additional hypotheses"]),
      r("8.3","fungsi-eksponensial-dan-logaritma","Fungsi Eksponensial dan Logaritma","The Exponential and Logarithmic Functions","Konstruksi analitik exp/log real, sifat dasar, turunan, dan invers.",["exponential","logarithm","series/limits","inverse relation","differentiation"]),
      r("8.4","fungsi-trigonometri","Fungsi Trigonometri","The Trigonometric Functions","Fondasi analitik sinus/cosinus, identitas, turunan, dan periodisitas.",["sine","cosine","identities","derivatives","periodicity"]),
    ]},
    {number:"9",title:"Deret Tak Hingga",sourceTitle:"Infinite Series",sections:[
      r("9.1","konvergensi-absolut","Konvergensi Absolut","Absolute Convergence","Konvergensi absolut, implikasi ke konvergensi biasa, dan pengelompokan suku.",["absolute convergence","conditional convergence","comparison","rearrangement basics","Cauchy"]),
      r("9.2","uji-konvergensi-absolut","Uji Konvergensi Absolut","Tests for Absolute Convergence","Uji perbandingan, rasio, akar, integral, dan strategi pemilihan uji.",["comparison test","ratio test","root test","integral test","p-series"]),
      r("9.3","uji-konvergensi-nonabsolut","Uji Konvergensi Nonabsolut","Tests for Nonabsolute Convergence","Alternating series, Dirichlet/Abel secara pengantar, dan konvergensi bersyarat.",["alternating series","Leibniz test","Dirichlet idea","conditional convergence","remainder"]),
      r("9.4","deret-fungsi","Deret Fungsi","Series of Functions","Konvergensi pointwise/uniform deret fungsi, Weierstrass M-test, dan pertukaran operasi.",["function series","uniform convergence","M-test","termwise integration","termwise differentiation"]),
    ]},
    {number:"10",title:"Integral Riemann Tergeneralisasi",sourceTitle:"The Generalized Riemann Integral",sections:[
      r("10.1","integral-riemann-tergeneralisasi","Definisi dan Sifat Utama","Definition and Main Properties","Gauge integral/Henstock–Kurzweil sebagai generalisasi Riemann dan sifat linearitasnya.",["gauge integral","fine partition","Henstock-Kurzweil","linearity","extension of Riemann"]),
      r("10.2","integral-tak-wajar-dan-lebesgue","Integral Tak Wajar dan Lebesgue","Improper and Lebesgue Integrals","Hubungan konseptual gauge integral dengan integral tak wajar dan Lebesgue.",["improper integrals","Lebesgue comparison","generalized integral","absolute integrability","examples"]),
      r("10.3","interval-tak-hingga","Interval Tak Hingga","Infinite Intervals","Integrasi pada interval tak terbatas dan transformasi masalah ekor.",["unbounded intervals","tails","improper behavior","gauge control","convergence"]),
      r("10.4","teorema-konvergensi-integral","Teorema Konvergensi Integral","Convergence Theorems","Konvergensi fungsi di bawah integral dan kondisi dominasi/seragam dalam kerangka generalisasi.",["interchange limits","domination ideas","uniform convergence","integral convergence","counterexamples"]),
    ]},
    {number:"11",title:"Sekilas Topologi",sourceTitle:"A Glimpse into Topology",sections:[
      r("11.1","himpunan-buka-dan-tertutup-r","Himpunan Buka dan Tertutup di ℝ","Open and Closed Sets in R","Interior, closure, boundary, open/closed sets, dan karakterisasi sekuensial.",["open set","closed set","interior","closure","boundary"]),
      r("11.2","himpunan-kompak","Himpunan Kompak","Compact Sets","Open cover, compactness, Heine–Borel, sequential compactness, dan konsekuensi.",["open cover","compactness","Heine-Borel","sequential compactness","finite subcover"]),
      r("11.3","kontinuitas-topologis","Kontinuitas dalam Bahasa Topologi","Continuous Functions","Karakterisasi kontinuitas melalui preimage open/closed sets dan pelestarian compactness.",["preimage of open sets","closed sets","compact image","homeomorphism","topological continuity"]),
      r("11.4","ruang-metrik","Ruang Metrik","Metric Spaces","Aksioma metrik, bola terbuka, konvergensi, Cauchy, completeness, compactness, dan continuity.",["metric","open balls","convergence","completeness","compactness"]),
    ]},
  ]
};

export const complexAnalysisBook:BookSubject={
  slug:"analisis-kompleks",
  title:"Analisis Kompleks",
  subtitle:"Materi dari bilangan kompleks sampai residu dan pemetaan konformal.",
  level:"Kuliah · ON-MIPA",
  source:"Dennis G. Zill & Patrick D. Shanahan, A First Course in Complex Analysis with Applications",
  sourceYear:"2003",
  chapters:[
    {number:"1",title:"Bilangan Kompleks dan Bidang Kompleks",sourceTitle:"Complex Numbers and the Complex Plane",sections:[
      r("1.1","bilangan-kompleks-dan-sifat","Bilangan Kompleks dan Sifat-sifatnya","Complex Numbers and Their Properties","Bentuk $a+ib$, operasi, kesamaan, konjugat, invers, dan struktur aljabar kompleks.",["real/imaginary parts","arithmetic","conjugate","inverse","field structure"]),
      r("1.2","bidang-kompleks","Bidang Kompleks","Complex Plane","Representasi titik/vektor, modulus, jarak, ketaksamaan segitiga, dan geometri kompleks.",["Argand plane","modulus","distance","triangle inequality","vectors"]),
      r("1.3","bentuk-polar-kompleks","Bentuk Polar Bilangan Kompleks","Polar Form of Complex Numbers","Argumen, argumen utama, bentuk polar, perkalian/pembagian, dan formula de Moivre.",["argument","principal Arg","polar form","multiplication/division","de Moivre"]),
      r("1.4","pangkat-dan-akar-kompleks","Pangkat dan Akar Kompleks","Powers and Roots","Pangkat integer/rasional, akar ke-n, distribusi akar pada lingkaran, dan akar persamaan.",["powers","nth roots","roots of unity","polar method","geometry of roots"]),
      r("1.5","himpunan-di-bidang-kompleks","Himpunan di Bidang Kompleks","Sets of Points in the Complex Plane","Disk, neighborhood, open/closed, connectedness, domain, region, dan extended plane secara pengantar.",["disk","neighborhood","open/closed","domain","connected set"]),
      r("1.6","aplikasi-bilangan-kompleks","Aplikasi Bilangan Kompleks","Applications","Pemodelan fasor, geometri, dan contoh aplikasi awal bilangan kompleks.",["phasors","oscillation","geometry","algebraic equations","applications"]),
    ]},
    {number:"2",title:"Fungsi Kompleks dan Pemetaan",sourceTitle:"Complex Functions and Mappings",sections:[
      r("2.1","fungsi-kompleks","Fungsi Kompleks","Complex Functions","Domain/range kompleks, representasi $f(z)=u(x,y)+iv(x,y)$, dan fungsi multi-valued.",["complex function","real/imaginary components","domain","range","multi-valued ideas"]),
      r("2.2","fungsi-kompleks-sebagai-pemetaan","Fungsi Kompleks sebagai Pemetaan","Complex Functions as Mappings","Citra kurva/daerah dan interpretasi geometri pemetaan $w=f(z)$.",["mapping","images","preimages","curves","regions"]),
      r("2.3","pemetaan-linear","Pemetaan Linear","Linear Mappings","Translasi, rotasi, dilatasi, komposisi, dan bentuk $w=az+b$.",["translation","rotation","dilation","affine maps","composition"]),
      r("2.4","fungsi-pangkat-khusus","Fungsi Pangkat Khusus","Special Power Functions","Pemetaan $z^n$ dan $z^{1/n}$, perubahan sudut, radius, serta multi-valued roots.",["power maps","root maps","angle multiplication","radial scaling","branches"]),
      r("2.5","fungsi-resiprok","Fungsi Resiprok","Reciprocal Function","Pemetaan $w=1/z$, inversi lingkaran, efek pada garis/lingkaran, dan singularitas di nol.",["reciprocal","inversion","circles and lines","singularity","geometry"]),
      r("2.6","limit-dan-kontinuitas-kompleks","Limit dan Kontinuitas","Limits and Continuity","Limit dua dimensi, kriteria jalur, sifat limit, dan kontinuitas fungsi kompleks.",["complex limit","path independence","continuity","limit laws","sequential viewpoint"]),
      r("2.7","aplikasi-pemetaan","Aplikasi Pemetaan Kompleks","Applications","Aplikasi transformasi kompleks dalam geometri dan model fisis.",["mapping applications","geometry","fields","transformations","visualization"]),
    ]},
    {number:"3",title:"Fungsi Analitik",sourceTitle:"Analytic Functions",sections:[
      r("3.1","diferensiabilitas-dan-analitik","Diferensiabilitas dan Analitik","Differentiability and Analyticity","Turunan kompleks, fungsi analitik/holomorfik, aturan turunan, dan kekakuan diferensiabilitas kompleks.",["complex derivative","analytic","holomorphic","chain rule","local linearity"]),
      r("3.2","persamaan-cauchy-riemann","Persamaan Cauchy–Riemann","Cauchy-Riemann Equations","Syarat perlu/cukup dengan regularitas, bentuk Kartesius dan polar, serta uji analitik.",["Cauchy-Riemann","u_x=v_y","u_y=-v_x","polar CR","sufficiency"]),
      r("3.3","fungsi-harmonik","Fungsi Harmonik","Harmonic Functions","Persamaan Laplace, bagian real/imajiner fungsi analitik, harmonic conjugate, dan potential.",["Laplace equation","harmonic","harmonic conjugate","analytic potential","orthogonal curves"]),
      r("3.4","aplikasi-fungsi-analitik","Aplikasi Fungsi Analitik","Applications","Aliran potensial, elektrostatika, dan model yang memanfaatkan fungsi analitik.",["potential flow","electrostatics","stream function","complex potential","applications"]),
    ]},
    {number:"4",title:"Fungsi Elementer",sourceTitle:"Elementary Functions",sections:[
      r("4.1","eksponensial-dan-logaritma-kompleks","Eksponensial dan Logaritma Kompleks","Exponential and Logarithmic Functions","Definisi $e^z$, periodisitas, log multi-valued, principal Log, branches, dan branch cuts.",["complex exponential","complex logarithm","branches","principal Log","branch cut"]),
      r("4.2","pangkat-kompleks","Pangkat Kompleks","Complex Powers","Definisi $z^a=e^{a\log z}$, multi-valuedness, principal value, dan sifat cabang.",["complex powers","log branches","principal value","rational/irrational powers","multi-valued functions"]),
      r("4.3","fungsi-trigonometri-dan-hiperbolik","Fungsi Trigonometri dan Hiperbolik Kompleks","Trigonometric and Hyperbolic Functions","Definisi melalui eksponensial, identitas, turunan, nol, dan perilaku berbeda dari fungsi real.",["sin/cos complex","sinh/cosh","Euler formulas","zeros","derivatives"]),
      r("4.4","invers-trigonometri-dan-hiperbolik","Fungsi Invers Trigonometri dan Hiperbolik","Inverse Trigonometric and Hyperbolic Functions","Representasi logaritmik, multivaluedness, branches, dan principal values.",["inverse trig","inverse hyperbolic","log representation","branches","principal values"]),
      r("4.5","aplikasi-fungsi-elementer","Aplikasi Fungsi Elementer","Applications","Aplikasi fungsi elementer kompleks pada gelombang, potensial, dan transformasi.",["waves","potential","mapping","oscillation","applications"]),
    ]},
    {number:"5",title:"Integrasi di Bidang Kompleks",sourceTitle:"Integration in the Complex Plane",sections:[
      r("5.1","integral-real-dan-kurva","Integral Real dan Kurva","Real Integrals","Kurva parametrik, orientasi, line integral real, dan persiapan menuju integral kompleks.",["parametric curve","orientation","line integral","arc length","piecewise smooth"]),
      r("5.2","integral-kompleks","Integral Kompleks","Complex Integrals","Contour integral, parametrization independence, properties, ML-estimate, dan antiturunan.",["contour integral","parametrization","ML inequality","antiderivative","path integral"]),
      r("5.3","teorema-cauchy-goursat","Teorema Cauchy–Goursat","Cauchy-Goursat Theorem","Integral fungsi analitik pada kontur tertutup, simply connected domains, dan deformasi kontur.",["Cauchy theorem","Goursat","closed contour","simply connected","deformation"]),
      r("5.4","independensi-lintasan","Independensi Lintasan","Independence of Path","Ekuivalensi antiturunan, integral tertutup nol, dan path independence.",["path independence","primitive","closed contour","fundamental theorem","domains"]),
      r("5.5","formula-integral-cauchy","Formula Integral Cauchy","Cauchy’s Integral Formulas and Their Consequences","Formula Cauchy, formula turunan, estimasi Cauchy, Liouville, dan fundamental theorem of algebra.",["Cauchy integral formula","derivative formula","Cauchy estimates","Liouville","FTA"]),
      r("5.6","aplikasi-integral-kompleks","Aplikasi Integral Kompleks","Applications","Penerapan kontur dan formula Cauchy pada masalah analitik dan fisis.",["contour methods","integral evaluation","applications","potential","bounds"]),
    ]},
    {number:"6",title:"Deret dan Residu",sourceTitle:"Series and Residues",sections:[
      r("6.1","barisan-dan-deret-kompleks","Barisan dan Deret Kompleks","Sequences and Series","Konvergensi di ℂ, absolute convergence, geometric series, dan power series.",["complex sequences","series","absolute convergence","power series","radius of convergence"]),
      r("6.2","deret-taylor-kompleks","Deret Taylor Kompleks","Taylor Series","Ekspansi Taylor fungsi analitik, radius konvergensi, uniqueness, dan estimasi koefisien.",["Taylor series","analytic expansion","radius","coefficients","Cauchy formula"]),
      r("6.3","deret-laurent","Deret Laurent","Laurent Series","Ekspansi pada annulus, principal part, klasifikasi singularitas, dan contoh ekspansi.",["Laurent series","annulus","principal part","singularities","series manipulation"]),
      r("6.4","nol-dan-pole","Nol dan Pole","Zeros and Poles","Orde nol, pole, removable/essential singularity, dan hubungan lokal dengan faktorisasi.",["zeros","poles","order","removable singularity","essential singularity"]),
      r("6.5","residu-dan-teorema-residu","Residu dan Teorema Residu","Residues and Residue Theorem","Definisi residu, cara menghitung, residue theorem, dan evaluasi integral kontur.",["residue","simple pole","higher-order pole","residue theorem","contour integral"]),
      r("6.6","konsekuensi-teorema-residu","Konsekuensi Teorema Residu","Some Consequences of the Residue Theorem","Integral real, branch cut, argument principle, Rouché, dan penjumlahan deret.",["real integrals","branch cut","argument principle","Rouche","series summation"]),
      r("6.7","aplikasi-residu","Aplikasi Residu","Applications","Teknik residu dalam transformasi, sistem fisis, dan evaluasi integral lanjutan.",["residue applications","transforms","improper integrals","oscillatory integrals","models"]),
    ]},
    {number:"7",title:"Pemetaan Konformal",sourceTitle:"Conformal Mappings",sections:[
      r("7.1","pemetaan-konformal","Pemetaan Konformal","Conformal Mapping","Pelestarian sudut, syarat $f'(z_0)\ne0$, local scaling/rotation, dan contoh.",["angle preservation","nonzero derivative","local similarity","orientation","analytic maps"]),
      r("7.2","transformasi-linear-fraksional","Transformasi Linear Fraksional","Linear Fractional Transformations","Transformasi Möbius, extended plane, inverse, cross ratio, dan circle-preserving property.",["Mobius transformation","extended plane","inverse","cross ratio","circles/lines"]),
      r("7.3","transformasi-schwarz-christoffel","Transformasi Schwarz–Christoffel","Schwarz-Christoffel Transformations","Pemetaan half-plane ke poligon dan hubungan eksponen dengan sudut interior.",["Schwarz-Christoffel","upper half-plane","polygons","interior angles","mapping"]),
      r("7.4","formula-integral-poisson","Formula Integral Poisson","Poisson Integral Formulas","Solusi harmonik pada disk/half-plane dan boundary data.",["Poisson kernel","harmonic extension","disk","half-plane","boundary values"]),
      r("7.5","aplikasi-pemetaan-konformal","Aplikasi Pemetaan Konformal","Applications","Boundary-value problems, aliran fluida, Dirichlet/Neumann, dan streamlining.",["boundary values","Dirichlet","Neumann","fluid flow","streamlines"]),
    ]},
  ]
};

type CurriculumUnit={
  title:string;
  from:string[];
};

const dmathCurriculumBlueprints:Partial<Record<BookSubject["slug"],CurriculumUnit[]>>={
  "analisis-real":[
    {title:"Fondasi Analisis dan Sistem Bilangan Real",from:["1","2"]},
    {title:"Barisan, Kelengkapan, dan Deret Dasar",from:["3"]},
    {title:"Limit dan Kontinuitas",from:["4","5"]},
    {title:"Diferensiasi dan Aproksimasi Lokal",from:["6"]},
    {title:"Integrasi Riemann dan Darboux",from:["7"]},
    {title:"Konvergensi Fungsi dan Deret",from:["8","9"]},
    {title:"Integrasi Lanjut",from:["10"]},
    {title:"Topologi Real dan Ruang Metrik",from:["11"]},
  ],
  "analisis-kompleks":[
    {title:"Bilangan Kompleks dan Geometri Bidang",from:["1"]},
    {title:"Fungsi Kompleks, Limit, dan Transformasi",from:["2"]},
    {title:"Analitik, Cauchy–Riemann, dan Harmonik",from:["3"]},
    {title:"Fungsi Elementer, Cabang, dan Multinilai",from:["4"]},
    {title:"Integral Kontur dan Teori Cauchy",from:["5"]},
    {title:"Deret, Singularitas, dan Residu",from:["6"]},
    {title:"Pemetaan Konformal dan Masalah Batas",from:["7"]},
  ],
  "kombinatorika":[
    {title:"Fondasi Pencacahan dan Struktur Diskret",from:["1","2"]},
    {title:"Pigeonhole, Koefisien Binomial, dan Inklusi–Eksklusi",from:["3","5","6"]},
    {title:"Konstruksi Kombinatorial dan Barisan Pencacahan",from:["4","8"]},
    {title:"Rekurensi dan Fungsi Pembangkit",from:["7"]},
    {title:"Sistem Wakil, Matching, dan Pemilihan",from:["9"]},
    {title:"Desain, Simetri, dan Pencacahan Orbit",from:["10","14"]},
    {title:"Graf sebagai Struktur Kombinatorial",from:["11","12"]},
    {title:"Digraf, Jaringan, dan Optimasi Diskret",from:["13"]},
  ],
  "aljabar-linear":[
    {title:"Sistem Linear, Matriks, dan Determinan",from:["1","2"]},
    {title:"Ruang Vektor, Basis, dan Koordinat",from:["3","4"]},
    {title:"Transformasi Linear dan Representasi Matriks",from:["8"]},
    {title:"Nilai Eigen, Diagonalisasi, dan Bentuk Kuadratik",from:["5","7"]},
    {title:"Ortogonalitas dan Ruang Hasil Kali Dalam",from:["6"]},
    {title:"Komputasi dan Metode Numerik",from:["9"]},
    {title:"Model dan Aplikasi Aljabar Linear",from:["10"]},
  ],
  "struktur-aljabar":[
    {title:"Bahasa Struktur: Relasi, Fungsi, dan Aritmetika Modular",from:["1","2"]},
    {title:"Grup, Subgrup, Koset, dan Homomorfisma",from:["3","4"]},
    {title:"Struktur Grup Hingga dan Aksi Simetri",from:["5","6","7"]},
    {title:"Ring, Ideal, dan Ring Faktor",from:["8","9"]},
    {title:"Domain, Faktorisasi, dan Polinom",from:["10","11"]},
    {title:"Ruang Vektor dan Perluasan Field",from:["12"]},
    {title:"Aljabar untuk Kriptografi",from:["13"]},
    {title:"Aljabar dan Konstruksi Geometri",from:["14"]},
  ],
  "olimpiade-matematika-sma":[
    {title:"Fondasi Aritmetika dan Manipulasi Aljabar",from:["2"]},
    {title:"Strategi Pemecahan Masalah dan Teknik Pembuktian",from:["1","3"]},
    {title:"Barisan, Deret, dan Rekurensi",from:["5","7"]},
    {title:"Pertidaksamaan Olimpiade",from:["8"]},
    {title:"Data, Pola, dan Penalaran Diskret",from:["4"]},
    {title:"Masalah Campuran dan Sintesis Strategi",from:["6"]},
  ],
  "kalkulus":[
    {title:"Fondasi, Fungsi, dan Model",from:["A","1"]},
    {title:"Limit, Kontinuitas, dan Turunan",from:["2","3"]},
    {title:"Aplikasi Turunan dan Optimasi",from:["4"]},
    {title:"Integral Tentu dan Akumulasi",from:["5","6"]},
    {title:"Fungsi Transenden dan Teknik Integrasi",from:["7","8"]},
    {title:"Barisan, Deret, dan Aproksimasi Tak Hingga",from:["10"]},
    {title:"Kurva Parametrik, Polar, dan Geometri Vektor",from:["11","12","13"]},
    {title:"Kalkulus Diferensial Multivariabel",from:["14"]},
    {title:"Integral Lipat dan Kalkulus Vektor",from:["15","16"]},
    {title:"Persamaan Diferensial dalam Kalkulus",from:["9","17"]},
  ],
  "teori-graf":[
    {title:"Model Graf, Keterhubungan, Lintasan, dan Siklus",from:["1","2"]},
    {title:"Pohon, Struktur Minimum, dan Algoritma",from:["3","8"]},
    {title:"Planaritas, Dualitas, dan Pewarnaan",from:["4","5"]},
    {title:"Matching, Konektivitas, dan Aliran Jaringan",from:["6"]},
    {title:"Matroid dan Independensi Kombinatorial",from:["7"]},
  ],
  "teori-bilangan-olimpiade":[
    {title:"Keterbagian dan Aritmetika Modular",from:["1","2"]},
    {title:"Fungsi Aritmetika, Faktorisasi, dan Valuasi",from:["3","6"]},
    {title:"Persamaan Diophantine dan Konstruksi Integer",from:["4","9"]},
    {title:"Orde, Akar Primitif, dan Kongruensi Lanjut",from:["5"]},
    {title:"Polinom Integer dan Teknik Aljabar",from:["7"]},
    {title:"Residu Kuadrat dan Struktur Modulo Prima",from:["8"]},
  ],
  "analisis-numerik":[],
  "persamaan-diferensial":[
    {title:"Pemodelan ODE dan Persamaan Orde Satu",from:["1","2"]},
    {title:"Persamaan Linear Orde Dua",from:["3"]},
    {title:"Dinamika Kualitatif dan Sistem Nonlinear",from:["4","11"]},
    {title:"Deret Pangkat dan Fungsi Khusus",from:["5","8"]},
    {title:"Fourier, PDE, dan Masalah Nilai Batas",from:["6","7"]},
    {title:"Transformasi Laplace dan Sistem ODE",from:["9","10"]},
    {title:"Kalkulus Variasi, Eksistensi, dan Keunikan",from:["12","13"]},
    {title:"Metode Numerik untuk Persamaan Diferensial",from:["14"]},
  ],
};

function buildDMathCurriculum(subject:BookSubject):BookSubject{
  if(subject.curriculumVersion==="DMath Curriculum v1")return subject;
  const blueprint=dmathCurriculumBlueprints[subject.slug]??[];
  const byChapter=new Map(subject.chapters.map((chapter)=>[chapter.number,chapter]));
  const used=new Set<string>();

  const chapters:BookChapter[]=blueprint.map((unit,chapterIndex)=>{
    const sections=unit.from.flatMap((number)=>byChapter.get(number)?.sections??[]);
    sections.forEach((section)=>used.add(section.slug));
    return{
      number:String(chapterIndex+1),
      title:unit.title,
      sourceTitle:"DMath Learning Curriculum",
      sections:sections.map((section,sectionIndex)=>({
        ...section,
        number:String(chapterIndex+1)+"."+(sectionIndex+1),
        sourceTitle:"DMath Learning",
      })),
    };
  });

  const leftovers=subject.chapters
    .flatMap((chapter)=>chapter.sections)
    .filter((section)=>!used.has(section.slug));

  if(leftovers.length>0){
    chapters.push({
      number:String(chapters.length+1),
      title:"Topik Lanjutan dan Koneksi",
      sourceTitle:"DMath Learning Curriculum",
      sections:leftovers.map((section,index)=>({
        ...section,
        number:String(chapters.length+1)+"."+(index+1),
        sourceTitle:"DMath Learning",
      })),
    });
  }

  return{
    ...subject,
    curriculumVersion:"DMath Curriculum v1",
    subtitle:subject.subtitle,
    chapters,
  };
}

const referenceSubjects:BookSubject[]=[
  realAnalysisBook,
  complexAnalysisBook,
  ...additionalBookSubjects,
  ...expandedBookSubjects,
  numericalAnalysisBook,
  ...newAcademicSubjects,
];

export const bookSubjects=referenceSubjects.map(buildDMathCurriculum);
export const bookSubjectMap=Object.fromEntries(bookSubjects.map((subject)=>[subject.slug,subject])) as Record<string,BookSubject>;
export const allBookSections=bookSubjects.flatMap((subject)=>subject.chapters.flatMap((chapter)=>chapter.sections.map((section)=>({subject,chapter,section}))));
export function getBookSection(subjectSlug:string,sectionSlug:string){
  const subject=bookSubjectMap[subjectSlug];
  if(!subject)return null;
  for(const chapter of subject.chapters){
    const section=chapter.sections.find((item)=>item.slug===sectionSlug);
    if(section)return {subject,chapter,section};
  }
  return null;
}
