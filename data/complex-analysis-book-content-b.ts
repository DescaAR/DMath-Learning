import type { BookLessonContent } from "@/data/book-content-types";

const D=(title:string,statement:string)=>({kind:"definition" as const,title,statement});
const L=(title:string,statement:string,proof?:string[])=>({kind:"lemma" as const,title,statement,proof});
const P=(title:string,statement:string,proof?:string[])=>({kind:"proposition" as const,title,statement,proof});
const T=(title:string,statement:string,proof?:string[])=>({kind:"theorem" as const,title,statement,proof});
const C=(title:string,statement:string,proof?:string[])=>({kind:"corollary" as const,title,statement,proof});
const N=(title:string,statement:string)=>({kind:"note" as const,title,statement});

export const complexAnalysisContentB:Record<string,BookLessonContent>={
"integral-real-dan-kurva":{
 intro:[
  "Sebelum integral kompleks didefinisikan, kurva di bidang kompleks perlu diparameterkan secara presisi. Sebuah kurva kompleks dapat dipandang sebagai fungsi bernilai kompleks dari parameter real.",
  "Orientasi dan regularitas kurva menentukan bagaimana contour integral akan dihitung dan bagaimana arah traversal memengaruhi tanda integral."
 ],
 notation:[
  {symbol:"$z(t)=x(t)+iy(t)$",meaning:"Parametrisasi kurva kompleks."},
  {symbol:"$z'(t)=x'(t)+iy'(t)$",meaning:"Vektor tangent kompleks."},
  {symbol:"$C$",meaning:"Kurva atau contour terorientasi."}
 ],
 formal:[
  D("Kurva Parametrik","Kurva kompleks adalah pemetaan kontinu $z:[a,b]\\to\\mathbb C$. Kurva smooth jika $z'$ kontinu dan tidak nol pada interval yang relevan."),
  D("Contour","Contour adalah kurva piecewise smooth dengan orientasi tertentu."),
  P("Panjang Kurva","Untuk kurva smooth $z(t)$, panjangnya diberikan oleh $L(C)=\\int_a^b|z'(t)|dt$."),
  P("Orientasi Balik","Jika $-C$ menyatakan contour yang sama dengan orientasi berlawanan, parametrisasi dapat dibalik melalui $\\tilde z(t)=z(a+b-t)$."),
  N("Kurva Tertutup","Contour disebut closed jika titik awal dan akhir sama; simple jika tidak self-intersect kecuali mungkin endpoint.")
 ],
 examples:[
  {title:"Lingkaran Berorientasi Positif",problem:"Parametrisasikan lingkaran $|z-z_0|=R$ berlawanan arah jarum jam.",solution:["Ambil $z(t)=z_0+Re^{it}$.","Gunakan $0\\le t\\le2\\pi$.","Turunannya $z'(t)=iRe^{it}$ tidak nol."],conclusion:"Orientasi positif lingkaran diperoleh dengan parameter yang meningkat."}
 ],
 exercises:[
  {prompt:"Parametrisasikan ruas garis dari $z_0$ ke $z_1$.",hint:"Interpolasi linear.",answer:"$z(t)=z_0+t(z_1-z_0)$, $0\\le t\\le1$."},
  {prompt:"Hitung panjang lingkaran radius R dari parametrisasi.",hint:"$|z'(t)|=R$.",answer:"$2\\pi R$."},
  {prompt:"Apa akibat membalik orientasi terhadap $z'(t)$?",hint:"Chain rule memberi tanda negatif.",answer:"Arah tangent berbalik, yang kelak membalik tanda contour integral."}
 ],
 mistakes:["Mengabaikan orientasi contour.","Menggunakan kurva yang tidak piecewise smooth tanpa memeriksa definisi integral yang dipakai.","Mencampur parameter real dengan variabel kompleks."],
 connections:["Contour integral didefinisikan melalui parametrisasi.","ML-estimate memakai panjang contour.","Conformal mapping memetakan kurva dan tangent."]
},

"integral-kompleks":{
 intro:[
  "Contour integral memperluas line integral ke fungsi bernilai kompleks. Definisinya mereduksi integral kompleks ke integral real terhadap parameter.",
  "Nilai integral bergantung pada fungsi, lintasan, dan orientasi. Pada fungsi yang memiliki primitive, ketergantungan lintasan akan menghilang."
 ],
 notation:[
  {symbol:"$\\int_C f(z)\\,dz$",meaning:"Integral fungsi kompleks sepanjang contour C."},
  {symbol:"$M L$",meaning:"Bound dari maksimum modulus dikali panjang contour."}
 ],
 formal:[
  D("Contour Integral","Jika $C:z=z(t)$, $a\\le t\\le b$, maka $\\int_C f(z)dz=\\int_a^b f(z(t))z'(t)dt$."),
  T("Linearitas","$\\int_C(\\alpha f+\\beta g)dz=\\alpha\\int_Cf dz+\\beta\\int_Cg dz$."),
  P("Orientasi Balik","$\\int_{-C}f(z)dz=-\\int_Cf(z)dz$."),
  T("ML-Estimate","Jika $|f(z)|\\le M$ pada contour $C$ dengan panjang $L$, maka $|\\int_Cf(z)dz|\\le ML$.",[
    "Dari definisi parametrik, modulus integral tidak melebihi integral modulus integrand.",
    "Karena $|f(z(t))|\\le M$, integrand modulus dibatasi $M|z'(t)|$.",
    "Integrasi memberi $M\\int|z'(t)|dt=ML$."
  ])
 ],
 examples:[
  {title:"Integral Sepanjang Lingkaran",problem:"Hitung $\\int_C z\\,dz$ pada lingkaran unit berorientasi positif.",solution:["Parametrisasi $z=e^{it}$, $dz=ie^{it}dt$.","Integral menjadi $\\int_0^{2\\pi} i e^{2it}dt$.","Antiturunan periodik memberi nilai 0."],conclusion:"Integral fungsi entire sederhana sepanjang closed contour dapat bernilai nol."}
 ],
 exercises:[
  {prompt:"Hitung $\\int_C 1\\,dz$ dari $0$ ke $1+i$ sepanjang ruas garis.",hint:"Integral dz sama endpoint akhir minus awal.",answer:"$1+i$."},
  {prompt:"Gunakan ML-estimate untuk $|\\int_C e^z dz|$ pada $|z|=1$.",hint:"$|e^z|=e^{\\operatorname{Re}z}\\le e$ dan panjang $2\\pi$.",answer:"≤$2\\pi e$."},
  {prompt:"Apa efek orientasi clockwise pada integral lingkaran?",hint:"Contour adalah negatif dari orientasi positif.",answer:"Nilai integral berubah tanda."}
 ],
 mistakes:["Lupa faktor $z'(t)$ setelah substitusi parametrisasi.","Menggunakan ML sebagai equality, padahal hanya bound.","Menganggap integral selalu path-independent."],
 connections:["Cauchy-Goursat memberi kondisi integral closed contour nol.","Residue theorem menghitung integral closed contour.","Fundamental theorem contour integral memakai primitives."]
},

"teorema-cauchy-goursat":{
 intro:[
  "Cauchy–Goursat merupakan teorema pusat integrasi kompleks: analyticity pada domain yang sesuai memaksa integral pada closed contour menjadi nol.",
  "Konsekuensinya sangat luas, mulai dari path independence hingga formula integral Cauchy, Taylor series, Liouville, dan residue theory."
 ],
 formal:[
  T("Cauchy–Goursat","Jika $f$ holomorfik pada simply connected domain $D$, maka untuk setiap closed contour $C\\subset D$, $\\int_C f(z)dz=0$."),
  P("Deformasi Contour","Jika dua closed contours dapat dideformasi satu sama lain dalam region tempat $f$ holomorfik tanpa melintasi singularitas, integrals yang sesuai dapat dibandingkan melalui Cauchy theorem."),
  N("Peran Simply Connected","Lubang yang mengandung singularity dapat membuat integral closed contour tidak nol meskipun fungsi holomorfik pada contour itu sendiri."),
  C("Integral $1/(z-a)$","Jika contour mengelilingi $a$ sekali positif, $\\int_C\\frac{dz}{z-a}=2\\pi i$; ini menunjukkan pentingnya singularity di interior.")
 ],
 examples:[
  {title:"Entire Function",problem:"Hitung $\\int_C e^z dz$ untuk closed contour arbitrary.",solution:["$e^z$ entire, sehingga holomorfik pada seluruh C.","Setiap closed contour berada dalam domain simply connected tanpa singularity.","Cauchy–Goursat memberi integral 0."],conclusion:"Tidak perlu parametrisasi contour."}
 ],
 exercises:[
  {prompt:"Mengapa $\\int_{|z|=1}1/z\\,dz$ tidak dapat disimpulkan nol dengan Cauchy-Goursat?",hint:"Periksa interior contour.",answer:"$1/z$ tidak holomorfik di $z=0$ yang berada di interior."},
  {prompt:"Jika f entire, berapa integralnya pada boundary segitiga?",hint:"Closed contour.",answer:"0."},
  {prompt:"Apa yang salah jika contour dideformasi melewati pole?",hint:"Region deformasi tidak lagi bebas singularity.",answer:"Hipotesis holomorphicity pada region antara contours gagal."}
 ],
 mistakes:["Memeriksa holomorphicity hanya pada contour, bukan interior/region relevan.","Menggunakan simply connected sebagai istilah dekoratif tanpa mengecek lubang.","Menerapkan teorema pada fungsi dengan pole di interior."],
 connections:["Path independence.","Cauchy integral formula.","Residue theorem merupakan generalisasi ketika singularities ada."]
},

"independensi-lintasan":{
 intro:[
  "Jika integral hanya bergantung pada endpoint, fungsi memiliki perilaku seperti gradient field konservatif pada kalkulus vektor.",
  "Dalam analisis kompleks, existence primitive, zero integral on closed contours, dan path independence saling terkait."
 ],
 formal:[
  D("Primitive","$F$ adalah primitive dari $f$ pada domain jika $F'=f$."),
  T("Fundamental Theorem for Contour Integrals","Jika $F'=f$ pada domain yang memuat contour dari $z_0$ ke $z_1$, maka $\\int_C f(z)dz=F(z_1)-F(z_0)$."),
  T("Ekuivalensi Path Independence","Pada domain yang sesuai, path independence ekuivalen dengan integral setiap closed contour nol dan ekuivalen dengan existence primitive."),
  P("Entire Primitive Example","Polinomial selalu memiliki primitive polynomial global.")
 ],
 examples:[
  {title:"Integral Tanpa Parametrisasi",problem:"Hitung $\\int_C 3z^2 dz$ dari $0$ ke $1+i$ untuk sembarang path.",solution:["Primitive $F(z)=z^3$.","Integral $=(1+i)^3-0$.","$(1+i)^2=2i$, lalu $(1+i)^3=-2+2i$."],conclusion:"Path tidak memengaruhi nilai."}
 ],
 exercises:[
  {prompt:"Hitung $\\int_C \\cos z\\,dz$ dari 0 ke π/2.",hint:"Primitive sin z.",answer:"1."},
  {prompt:"Mengapa $1/z$ tidak memiliki primitive global pada C\\{0}?",hint:"Integral pada unit circle tidak nol.",answer:"Primitive global akan memaksa semua closed integrals nol, kontradiksi."},
  {prompt:"Jika domain simply connected dan f holomorphic, apakah primitive ada?",hint:"Cauchy-Goursat + path independence.",answer:"Ya."}
 ],
 mistakes:["Menganggap setiap holomorphic function pada domain berlubang punya primitive global.","Lupa bahwa endpoint formula memerlukan primitive.","Menyamakan local primitive dengan global primitive."],
 connections:["Conservative vector fields.","Complex logarithm as local primitive of 1/z.","Homotopy/topology domain."]
},

"formula-integral-cauchy":{
 intro:[
  "Cauchy Integral Formula menunjukkan nilai fungsi holomorfik di interior contour sepenuhnya ditentukan oleh nilai pada boundary. Ini merupakan salah satu sumber kekakuan analisis kompleks.",
  "Formula turunan memberi semua derivatives dari satu contour integral dan langsung mengarah ke analyticity sebagai power-series property."
 ],
 formal:[
  T("Cauchy Integral Formula","Jika $f$ holomorfik pada dan di dalam simple closed contour $C$ dan $a$ berada di interior, maka $f(a)=\\frac1{2\\pi i}\\int_C\\frac{f(z)}{z-a}dz$."),
  T("Formula Turunan","$f^{(n)}(a)=\\frac{n!}{2\\pi i}\\int_C\\frac{f(z)}{(z-a)^{n+1}}dz$."),
  T("Cauchy Estimates","Jika $|f(z)|\\le M$ pada circle radius R sekitar a, maka $|f^{(n)}(a)|\\le n!M/R^n$."),
  T("Liouville","Setiap entire function yang bounded adalah konstan.",[
    "Cauchy estimate untuk $n=1$ memberi $|f'(a)|\\le M/R$ pada circle radius R.",
    "Karena entire, R dapat dibuat arbitrarily besar.",
    "Limit R→∞ memberi $f'(a)=0$ untuk setiap a, sehingga f konstan."
  ]),
  C("Fundamental Theorem of Algebra","Setiap polinomial kompleks nonkonstan mempunyai paling sedikit satu akar kompleks.")
 ],
 examples:[
  {title:"Evaluasi Integral dengan CIF",problem:"Hitung $\\int_{|z|=2}\\frac{e^z}{z-1}dz$ berorientasi positif.",solution:["Fungsi $e^z$ holomorfik dan $a=1$ berada di interior circle.","CIF memberi integral $2\\pi i e^1$."],conclusion:"Nilainya $2\\pi i e$."}
 ],
 exercises:[
  {prompt:"Hitung $\\int_{|z|=3}\\frac{z^2+1}{z-i}dz$.",hint:"CIF dengan f(z)=z²+1 dan a=i.",answer:"$2\\pi i(i^2+1)=0$."},
  {prompt:"Hitung $\\int_{|z|=2}\\frac{e^z}{z^3}dz$.",hint:"Formula turunan dengan a=0, n=2.",answer:"$2\\pi i\\,e^0/2!=\\pi i$."},
  {prompt:"Bagaimana Liouville membuktikan FTA secara ringkas?",hint:"Jika polynomial tanpa zeros, 1/p entire dan bounded.",answer:"1/p akan konstan menurut Liouville, kontradiksi dengan p nonkonstan."}
 ],
 mistakes:["Tidak memeriksa apakah singular point berada di interior contour.","Salah memilih n pada formula turunan.","Menggunakan CIF ketika f memiliki singularity lain dalam interior."],
 connections:["Taylor series.","Maximum modulus principle pada teori lanjut.","Residue theorem generalizes CIF calculations."]
},

"aplikasi-integral-kompleks":{
 intro:["Integral kompleks memberi alat evaluasi yang sering lebih kuat daripada integrasi real langsung. Struktur contour dipilih agar bagian yang diinginkan muncul bersama kontribusi yang dapat dikontrol.",
  "Aplikasi juga meliputi estimates, potential theory, dan invers transform tertentu."
 ],
 formal:[
  P("Contour Selection","Contour dipilih mengikuti singularities, decay integrand, dan symmetry."),
  P("Estimate Before Exact Evaluation","ML inequality dapat memberi convergence atau vanishing-arc result tanpa menghitung integral eksak."),
  N("Orientation and Poles","Arah contour dan lokasi singularities harus dicatat sebelum menerapkan teorema.")
 ],
 examples:[
  {title:"Vanishing Arc secara Konseptual",problem:"Mengapa integral pada semicircle besar dapat menuju nol untuk integrand yang decay cukup cepat?",solution:["Panjang arc tumbuh sebanding R.","Jika modulus integrand bounded oleh O(R^{-p}) dengan p>1, ML memberi bound O(R^{1-p}).","Bound menuju nol."],conclusion:"Decay lebih cepat daripada 1/R mengalahkan pertumbuhan panjang arc."}
 ],
 exercises:[
  {prompt:"Jika |f(z)|≤1/R² pada circle radius R, bound integral full circle.",hint:"Panjang 2πR.",answer:"≤2π/R."},
  {prompt:"Apa tiga data pertama sebelum memilih contour?",hint:"Singularities, decay, target integral.",answer:"Lokasi poles/branch points, asymptotic behavior, dan hubungan contour integral dengan real integral."},
  {prompt:"Mengapa branch cuts kadang diperlukan?",hint:"Log/root multi-valued.",answer:"Agar cabang analytic single-valued tersedia pada domain contour."}
 ],
 mistakes:["Memilih contour hanya karena bentuknya familiar.","Tidak memeriksa contribution dari arc.","Mengabaikan branch points."],
 connections:["Residue theorem.","Jordan-type lemmas pada teori lanjut.","Fourier/Laplace inversion."]
},

"barisan-dan-deret-kompleks":{
 intro:["Konvergensi sequence kompleks menggunakan modulus dan ekuivalen dengan convergence bagian real dan imajiner. Teori series kemudian dibangun dari partial sums seperti pada real analysis.",
  "Absolute convergence tetap menjadi alat stabilitas utama."
 ],
 formal:[
  D("Sequence Kompleks","$z_n\\to z$ jika $|z_n-z|\\to0$."),
  P("Komponen","$z_n=x_n+iy_n\\to x+iy$ jika dan hanya jika $x_n\\to x$ dan $y_n\\to y$."),
  D("Series Kompleks","$\\sum z_n$ konvergen jika partial sums-nya konvergen di C."),
  T("Absolute Convergence","Jika $\\sum|z_n|$ konvergen, maka $\\sum z_n$ konvergen."),
  D("Power Series","$\\sum a_n(z-z_0)^n$ memiliki radius convergence R dengan convergence absolute untuk $|z-z_0|<R$ dan divergence untuk $|z-z_0|>R$.")
 ],
 examples:[
  {title:"Geometric Series Kompleks",problem:"Untuk kompleks z dengan |z|<1, hitung $\\sum_{n=0}^\\infty z^n$.",solution:["Partial sum $S_N=(1-z^{N+1})/(1-z)$.","Karena |z|<1, $z^{N+1}\\to0$."],conclusion:"Jumlah $1/(1-z)$."}
 ],
 exercises:[
  {prompt:"Apakah $z_n=i^n/n$ konvergen?",hint:"Modulus =1/n.",answer:"Ya, menuju 0."},
  {prompt:"Apakah $\\sum i^n/n$ absolut?",hint:"Absolute series harmonic.",answer:"Tidak; namun convergence conditional dapat dianalisis dengan Dirichlet."},
  {prompt:"Apa radius $\\sum z^n/2^n$?",hint:"Geometric ratio z/2.",answer:"R=2."}
 ],
 mistakes:["Memeriksa hanya real part sequence.","Menganggap |z_n|→0 cukup untuk convergence series.","Melupakan behavior boundary |z-z0|=R perlu dianalisis terpisah."],
 connections:["Taylor/Laurent series.","Uniform convergence on compact subsets.","Analyticity inside power-series disk."]
},

"deret-taylor-kompleks":{
 intro:["Setiap holomorphic function dapat diekspansi sebagai Taylor series lokal. Ini jauh lebih kuat daripada real smoothness: complex differentiability pada open set memaksa analyticity.",
  "Koefisien Taylor ditentukan unik oleh derivatives atau Cauchy integral formula."
 ],
 formal:[
  T("Taylor Expansion","Jika f holomorphic pada disk $|z-z_0|<R$, maka $f(z)=\\sum_{n=0}^\\infty\\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n$ untuk z dalam disk."),
  P("Uniqueness","Jika dua power series sama pada neighborhood, koefisien bersesuaian sama."),
  T("Termwise Differentiation","Power series dapat didiferensialkan term-by-term di interior radius convergence dan radius tetap sama."),
  N("Radius to Nearest Singularity","Secara umum radius Taylor dibatasi oleh singularity terdekat dalam complex plane.")
 ],
 examples:[
  {title:"Taylor $e^z$",problem:"Tuliskan Taylor series e^z di 0.",solution:["Semua derivatives e^z sama e^z.","Di 0, setiap derivative bernilai 1.","Koefisien $1/n!$."],conclusion:"$e^z=\\sum_{n=0}^\\infty z^n/n!$ untuk seluruh z."}
 ],
 exercises:[
  {prompt:"Tuliskan series sin z.",hint:"Derivatives periodik.",answer:"$\\sum_{n=0}^\\infty(-1)^n z^{2n+1}/(2n+1)!$."},
  {prompt:"Apa radius Taylor 1/(1-z) di 0?",hint:"Singularity terdekat z=1.",answer:"R=1."},
  {prompt:"Expand 1/(1+z) di 0.",hint:"Geometric with -z.",answer:"$\\sum_{n=0}^\\infty(-1)^n z^n$, |z|<1."}
 ],
 mistakes:["Menganggap radius selalu infinity.","Menggunakan real interval of convergence instead of complex disk.","Tidak menghubungkan singularities dengan radius."],
 connections:["Laurent series melampaui singularity isolated.","Analytic continuation.","Cauchy estimates control coefficients."]
},

"deret-laurent":{
 intro:["Laurent series memperluas Taylor series dengan pangkat negatif dan berlaku pada annulus. Bagian pangkat negatif disebut principal part dan mengungkap tipe singularity.",
  "Satu fungsi dapat mempunyai ekspansi Laurent berbeda pada annuli berbeda yang dibatasi singularities."
 ],
 formal:[
  T("Laurent Expansion","Jika f holomorphic pada annulus $r<|z-z_0|<R$, maka $f(z)=\\sum_{n=-\\infty}^{\\infty}a_n(z-z_0)^n$ secara unik pada annulus."),
  D("Principal Part","Bagian $\\sum_{n=1}^\\infty a_{-n}(z-z_0)^{-n}$ disebut principal part."),
  P("Coefficient Formula","$a_n=\\frac1{2\\pi i}\\int_C\\frac{f(\\zeta)}{(\\zeta-z_0)^{n+1}}d\\zeta$ untuk contour dalam annulus."),
  N("Annulus Dependence","Ekspansi rational function dapat berubah ketika region berpindah melewati pole.")
 ],
 examples:[
  {title:"Ekspansi pada Dua Region",problem:"Expand $1/[z(1-z)]$ sekitar 0 untuk 0<|z|<1.",solution:["Gunakan $1/(1-z)=\\sum_{n=0}^\\infty z^n$.","Kalikan dengan 1/z.","Diperoleh $z^{-1}+1+z+z^2+\\cdots$."],conclusion:"Principal part hanya $z^{-1}$."}
 ],
 exercises:[
  {prompt:"Expand 1/(z-1) untuk |z|>1.",hint:"Factor z: 1/[z(1-1/z)].",answer:"$\\sum_{n=0}^\\infty z^{-n-1}$."},
  {prompt:"Apa principal part dari $e^{1/z}$ di 0?",hint:"Taylor exponential dengan 1/z.",answer:"$\\sum_{n=1}^\\infty1/(n!z^n)$."},
  {prompt:"Mengapa Laurent expansion unik pada annulus?",hint:"Coefficient integrals.",answer:"Setiap coefficient dipaksa oleh contour integral formula."}
 ],
 mistakes:["Menggunakan satu expansion di luar annulus validity.","Menganggap negative powers selalu finite.","Tidak memisahkan regular part dan principal part."],
 connections:["Residue adalah coefficient a_{-1}.","Classification singularities.","Annulus topology."]
},

"nol-dan-pole":{
 intro:["Zeros dan singularities isolated memiliki orde yang dapat dibaca dari local factorization atau Laurent series. Struktur lokal ini menentukan residue dan behavior mapping.",
  "Removable singularity, pole, dan essential singularity dibedakan oleh principal part Laurent."
 ],
 formal:[
  D("Zero of Order m","$z_0$ zero order m jika $f(z)=(z-z_0)^m g(z)$ dengan g holomorphic dan $g(z_0)\\ne0$."),
  D("Pole of Order m","$z_0$ pole order m jika $(z-z_0)^m f(z)$ memiliki removable extension dengan nilai nonzero di z0."),
  D("Removable Singularity","Laurent principal part kosong; f dapat diperluas holomorphic di titik."),
  D("Essential Singularity","Principal part mempunyai tak hingga banyak terms negatif."),
  P("Reciprocal Relation","Zero order m dari f menjadi pole order m dari 1/f, dan sebaliknya.")
 ],
 examples:[
  {title:"Klasifikasi",problem:"Klasifikasikan singularity $f(z)=\\sin z/z^3$ di 0.",solution:["$\\sin z=z-z^3/6+\\cdots$.","Bagi z^3: $1/z^2-1/6+\\cdots$.","Principal part tertinggi $z^{-2}$."],conclusion:"0 adalah pole orde 2."}
 ],
 exercises:[
  {prompt:"Klasifikasikan $(e^z-1)/z$ di 0.",hint:"Taylor numerator.",answer:"Removable; limit/value extension 1."},
  {prompt:"Klasifikasikan $e^{1/z}$ di 0.",hint:"Laurent memiliki infinitely many negative powers.",answer:"Essential singularity."},
  {prompt:"Orde zero sin z di 0?",hint:"Leading term z.",answer:"1."}
 ],
 mistakes:["Menyebut semua singularities sebagai poles.","Menentukan order tanpa factorization/series.","Lupa removable point dapat diisi sehingga holomorphic."],
 connections:["Residues.","Argument principle counts zeros/poles.","Meromorphic functions memiliki only poles as singularities."]
},

"residu-dan-teorema-residu":{
 intro:["Residue di isolated singularity adalah coefficient $(z-z_0)^{-1}$ pada Laurent series. Teorema residu mengubah contour integral menjadi penjumlahan data lokal singularities.",
  "Inilah alat utama untuk evaluasi banyak contour integrals dan real improper integrals."
 ],
 formal:[
  D("Residu","$\\operatorname{Res}(f,z_0)=a_{-1}$ pada Laurent expansion f sekitar z0."),
  P("Simple Pole Formula","Jika z0 simple pole dan $f=g/h$ dengan $h(z_0)=0$, $h'(z_0)\\ne0$, maka $\\operatorname{Res}(f,z_0)=g(z_0)/h'(z_0)$."),
  P("Higher Pole Formula","Untuk pole order m, residue dapat dihitung dari derivative order m-1 dari $(z-z_0)^m f(z)$."),
  T("Residue Theorem","Jika f holomorphic pada region kecuali finitely many isolated singularities $z_k$ di interior positive contour C, maka $\\int_Cf(z)dz=2\\pi i\\sum_k\\operatorname{Res}(f,z_k)$.")
 ],
 examples:[
  {title:"Integral Rasional",problem:"Hitung $\\int_{|z|=2}\\frac{dz}{z(z-1)}$.",solution:["Poles interior: 0 dan 1.","Residue di 0 = -1; di 1 = 1.","Jumlah residues 0."],conclusion:"Integral bernilai 0."}
 ],
 exercises:[
  {prompt:"Cari residue $1/(z-a)$ di a.",hint:"Coefficient principal part.",answer:"1."},
  {prompt:"Cari residue $e^z/z^2$ di 0.",hint:"Taylor e^z.",answer:"Coefficient 1/z berasal dari term z/z², jadi 1."},
  {prompt:"Hitung integral closed contour jika sum residues interior 3.",hint:"Residue theorem.",answer:"$6\\pi i$."}
 ],
 mistakes:["Menjumlah residues singularities di luar contour.","Salah orientation sign.","Mengira residue adalah coefficient highest negative power; yang benar specifically power -1."],
 connections:["Cauchy integral formula adalah special residue calculation.","Real integral evaluation.","Argument principle."]
},

"konsekuensi-teorema-residu":{
 intro:["Residue theorem menghasilkan beberapa teknik besar: evaluasi real integrals, integrals dengan branch cuts, argument principle, Rouché theorem, dan summation series.",
  "Setiap aplikasi memerlukan contour dan analytic structure yang sesuai; residue theorem bukan prosedur otomatis tanpa desain."
 ],
 formal:[
  T("Argument Principle","Perubahan argumen f sepanjang contour terkait $N-P$, jumlah zeros minus poles di interior, melalui $\\frac1{2\\pi i}\\int_C f'/f$."),
  T("Rouché","Jika $|g|<|f|$ pada contour, f dan f+g mempunyai jumlah zeros yang sama di interior, dihitung dengan multiplicity."),
  P("Real Integral Strategy","Rational/trigonometric real integrals dapat dipetakan ke contour integral yang residues-nya mudah dihitung."),
  N("Branch Cut Integrals","Logarithm dan fractional powers memerlukan branch choice; contour sering mengelilingi cut untuk mengekstrak jump.")
 ],
 examples:[
  {title:"Menghitung Zero dengan Rouché",problem:"Berapa banyak zero $z^5+2z+1$ di |z|<2?",solution:["Pada |z|=2, $|z^5|=32$.","$|2z+1|\\le5<32$.","Rouché memberi jumlah zero sama dengan z^5."],conclusion:"Ada 5 zeros dihitung dengan multiplicity."}
 ],
 exercises:[
  {prompt:"Gunakan argument principle secara konsep untuk menghitung zeros-poles.",hint:"Integrasikan f'/f.",answer:"Nilainya adalah winding number total dari f(C) terhadap 0, sama dengan N-P."},
  {prompt:"Kapan Rouché tidak langsung berlaku?",hint:"Inequality strict harus berlaku pada seluruh contour.",answer:"Jika hanya ≤ atau gagal di satu titik, theorem tidak dapat langsung digunakan."},
  {prompt:"Mengapa branch cut mengubah contour?",hint:"Fungsi harus single-valued analytic pada domain contour.",answer:"Cut menghapus loop yang menyebabkan multivaluedness."}
 ],
 mistakes:["Mengabaikan multiplicity zeros.","Menerapkan Rouché dengan bound yang tidak strict.","Lupa poles pada argument principle."],
 connections:["Winding number.","Fundamental theorem of algebra via Rouché.","Asymptotic zero counting."]
},

"aplikasi-residu":{
 intro:["Residues dapat menghitung real improper integrals, oscillatory integrals, inverse transforms, dan sums. Intinya adalah membangun complex function whose contour integral encodes target quantity.",
  "Estimasi arc dan pemilihan poles tetap sama pentingnya dengan perhitungan residue."
 ],
 formal:[
  P("Semicircle Method","Untuk rational functions dengan decay cukup, integrate sepanjang real segment plus large semicircle dan biarkan radius menuju infinity."),
  P("Trigonometric Substitution on Unit Circle","Untuk integrals periodik, substitusi $z=e^{i\\theta}$ mengubah $\\cos\\theta,\\sin\\theta,d\\theta$ menjadi rational expressions in z."),
  N("Transform Applications","Inverse Laplace/Fourier contour methods menggunakan poles dan residues dengan contour closure yang dipilih sesuai exponential decay.")
 ],
 examples:[
  {title:"Integral Standar secara Residu",problem:"Secara konsep evaluasi $\\int_{-\\infty}^{\\infty}\\frac{dx}{x^2+1}$.",solution:["Gunakan f(z)=1/(z^2+1) dan upper semicircle.","Pole interior z=i memiliki residue $1/(2i)$.","Contour integral $2\\pi i(1/(2i))=\\pi$.","Arc contribution menuju 0."],conclusion:"Integral real bernilai $\\pi$."}
 ],
 exercises:[
  {prompt:"Pole mana yang dipilih untuk upper-half-plane contour dari 1/(z²+a²), a>0?",hint:"Poles ±ia.",answer:"ia."},
  {prompt:"Apa substitusi unit-circle untuk cos θ?",hint:"z=e^{iθ}.",answer:"$(z+z^{-1})/2$."},
  {prompt:"Mengapa decay arc harus diperiksa?",hint:"Residue theorem menghitung full contour, target hanya bagian real.",answer:"Agar kontribusi tambahan dapat dihilangkan saat limit."}
 ],
 mistakes:["Mengabaikan arc contribution tanpa bound.","Memilih half-plane yang membuat exponential tumbuh.","Salah mengubah dθ pada z=e^{iθ}: $dθ=dz/(iz)$."],
 connections:["Fourier transforms.","Asymptotic methods.","Probability characteristic functions."]
},

"pemetaan-konformal":{
 intro:["Conformal map mempertahankan besar dan orientasi sudut lokal. Fungsi holomorfik dengan derivative nonzero bertindak secara lokal seperti multiplication by complex number: dilatasi dan rotasi.",
  "Sifat ini memungkinkan domain sulit dipetakan ke domain sederhana tanpa merusak struktur sudut."
 ],
 formal:[
  D("Conformal at a Point","Mapping conformal di z0 jika mempertahankan magnitude dan sense sudut antara smooth curves yang berpotongan di z0."),
  T("Holomorphic + Nonzero Derivative","Jika f holomorphic di neighborhood z0 dan $f'(z_0)\\ne0$, maka f conformal di z0.",[
    "Untuk small increment h, $f(z_0+h)-f(z_0)=f'(z_0)h+o(|h|)$.",
    "Multiplication by nonzero $f'(z_0)=\\rho e^{i\\theta}$ mendilatasi dengan ρ dan merotasi dengan θ.",
    "Term error lebih kecil dibanding |h|, sehingga angle tangent dipertahankan pada limit."
  ]),
  N("Critical Point","Jika $f'(z_0)=0$, theorem conformality standar tidak berlaku dan angle dapat dikalikan atau terdistorsi.")
 ],
 examples:[
  {title:"Square Map Away from Zero",problem:"Apakah $f(z)=z^2$ conformal di z0=1+i?",solution:["$f'(z)=2z$.","$f'(1+i)=2+2i\\ne0$."],conclusion:"Conformal di 1+i."}
 ],
 exercises:[
  {prompt:"Di mana z² gagal conformal?",hint:"Derivative 2z.",answer:"Di z=0."},
  {prompt:"Apakah e^z conformal di seluruh C?",hint:"Derivative e^z never zero.",answer:"Ya secara lokal di setiap titik."},
  {prompt:"Apa local scale factor f di z0?",hint:"Magnitude derivative.",answer:"$|f'(z_0)|$."}
 ],
 mistakes:["Menganggap holomorphic otomatis conformal di zeros derivative.","Menyamakan conformal dengan globally injective.","Mengabaikan orientation/sense."],
 connections:["Riemann mapping theory.","Potential flow.","Local linearization derivative."]
},

"transformasi-linear-fraksional":{
 intro:["Transformasi Möbius $T(z)=(az+b)/(cz+d)$ dengan $ad-bc\\ne0$ merupakan bijection Riemann sphere ke dirinya sendiri. Mereka memetakan generalized circles ke generalized circles.",
  "Tiga titik berbeda dan tiga target berbeda secara umum menentukan satu Möbius transformation."
 ],
 formal:[
  D("Möbius Transformation","$T(z)=\\frac{az+b}{cz+d}$, $ad-bc\\ne0$, pada extended complex plane."),
  P("Inverse","Inverse Möbius transformation juga Möbius."),
  T("Circle-Preserving Property","Möbius transformations memetakan circles dan lines pada extended plane menjadi circles atau lines."),
  P("Three-Point Determination","Citra tiga titik berbeda menentukan transformasi secara unik jika target juga berbeda."),
  N("Infinity","Jika c≠0, pole $z=-d/c$ dipetakan ke ∞ dan ∞ dipetakan ke a/c.")
 ],
 examples:[
  {title:"Half-plane to Disk",problem:"Tunjukkan bentuk $T(z)=(z-i)/(z+i)$ memetakan real axis ke unit circle.",solution:["Untuk real x, $|x-i|=|x+i|$.","Dengan demikian $|T(x)|=1$."],conclusion:"Test point z=i memberi T(i)=0, sehingga upper half-plane dipetakan ke unit disk."}
 ],
 exercises:[
  {prompt:"Cari pole transformasi $(2z+1)/(z-3)$.",hint:"Denominator zero.",answer:"z=3."},
  {prompt:"Apa image ∞?",hint:"Ratio leading coefficients.",answer:"2."},
  {prompt:"Mengapa condition ad-bc≠0 penting?",hint:"Jika determinant 0 numerator/denominator proportional.",answer:"Transformasi menjadi constant/noninvertible."}
 ],
 mistakes:["Mengabaikan point infinity.","Tidak mengecek determinant.","Menganggap circle selalu dipetakan circle, padahal bisa line jika image melewati infinity."],
 connections:["Riemann sphere.","Cross ratio.","Automorphisms disk/half-plane."]
},

"transformasi-schwarz-christoffel":{
 intro:["Schwarz–Christoffel transformations memetakan upper half-plane ke interior polygon. Prevertices pada real axis menentukan vertices polygon, sedangkan exponents encode interior angles.",
  "Teori ini merupakan jembatan antara complex integration dan computational conformal mapping."
 ],
 formal:[
  N("Canonical Form","Derivative mapping memiliki product faktor $(z-x_k)^{\\alpha_k-1}$, dengan $\\alpha_k\\pi$ interior angle polygon."),
  P("Prevertices","Titik real $x_k$ dipetakan ke vertices polygon."),
  P("Angle Encoding","Eksponen $\\alpha_k-1$ mengatur perubahan arah boundary saat melewati prevertex."),
  N("Parameter Problem","Dalam aplikasi, lokasi prevertices sering harus ditentukan dari kondisi panjang/geometry dan dapat memerlukan numerics.")
 ],
 examples:[
  {title:"Half-plane ke Rectangle secara Konseptual",problem:"Apa data yang diperlukan?",solution:["Empat prevertices pada real axis.","Interior angles semuanya π/2, sehingga masing-masing exponent -1/2.","Konstanta multiplicative/additive menentukan skala, rotasi, translasi."],conclusion:"Integral SC menghasilkan mapping setelah parameter dipilih."}
 ],
 exercises:[
  {prompt:"Apa exponent untuk interior angle 60°?",hint:"α=1/3.",answer:"α-1=-2/3."},
  {prompt:"Apa exponent untuk angle π?",hint:"α=1.",answer:"0."},
  {prompt:"Mengapa integrand SC multi-valued sebelum branch choices?",hint:"Fractional powers.",answer:"Setiap factor $(z-x_k)^{\\alpha_k-1}$ membutuhkan branch."}
 ],
 mistakes:["Menganggap prevertices sama dengan polygon vertices di z-plane.","Mengabaikan branch choices.","Menganggap parameter problem selalu mempunyai closed-form solution."],
 connections:["Numerical conformal mapping.","Polygonal domains.","Potential flow around corners."]
},

"formula-integral-poisson":{
 intro:["Poisson integral merekonstruksi harmonic function di interior disk atau half-plane dari boundary data. Ia merupakan solusi eksplisit penting untuk Dirichlet problem.",
  "Kernel Poisson memberi weighted average boundary values dengan weight yang semakin terlokalisasi ketika titik mendekati boundary."
 ],
 formal:[
  T("Poisson Formula for Disk","Untuk boundary data yang sesuai pada unit circle, harmonic extension dapat ditulis menggunakan Poisson kernel $P_r(\\theta)=\\frac{1-r^2}{1-2r\\cos\\theta+r^2}$."),
  P("Normalization","Poisson kernel positif dan integral rata-ratanya sama dengan 1."),
  P("Harmonic Extension","Poisson integral menghasilkan function harmonic di interior."),
  N("Boundary Recovery","Dengan regularitas boundary data, extension mendekati nilai boundary pada titik continuity.")
 ],
 examples:[
  {title:"Boundary Data Konstan",problem:"Jika boundary value seluruh unit circle sama dengan c, apa Poisson extension?",solution:["Kernel normalized sebagai weighted average.","Average dari constant c tetap c."],conclusion:"Solution interior identically c."}
 ],
 exercises:[
  {prompt:"Mengapa positivity kernel penting?",hint:"Weighted average.",answer:"Memungkinkan maximum/minimum bounds diwariskan dari boundary."},
  {prompt:"Apa yang terjadi di center r=0?",hint:"Kernel menjadi 1.",answer:"Nilai center adalah average boundary data."},
  {prompt:"Masalah PDE apa yang diselesaikan?",hint:"Laplace equation dengan prescribed boundary.",answer:"Dirichlet problem."}
 ],
 mistakes:["Menganggap formula berlaku tanpa kondisi boundary.","Lupa faktor normalization.","Mencampur Poisson kernel disk dan half-plane."],
 connections:["Harmonic functions.","Mean-value property.","Boundary-value problems."]
},

"aplikasi-pemetaan-konformal":{
 intro:["Conformal maps memindahkan boundary-value problem dari domain sulit ke domain sederhana. Setelah solusi diperoleh di domain sederhana, solusi dapat ditarik kembali melalui transformasi.",
  "Aplikasi klasik mencakup electrostatics, steady-state heat, dan ideal fluid flow."
 ],
 formal:[
  P("Domain Transfer","Jika w=f(z) conformal bijective, harmonic structure dapat dipindahkan antara domain z dan w melalui composition."),
  P("Boundary Correspondence","Boundary conditions harus dilacak bersama mapping agar problem transform tetap ekuivalen."),
  N("Fluid Flow","Complex potential dan conformal map dapat mengubah flow around simple geometry menjadi flow around geometry lebih rumit."),
  N("Dirichlet/Neumann","Jenis boundary condition dapat berinteraksi berbeda dengan transformasi; scaling derivative perlu diperhatikan untuk normal derivatives.")
 ],
 examples:[
  {title:"Strip ke Half-plane",problem:"Mengapa exponential useful untuk boundary problem pada strip?",solution:["$w=e^z$ memetakan horizontal strip lebar π ke half-plane.","Dua boundary lines menjadi dua rays pada real axis.","Problem harmonic pada strip dapat dipindahkan ke domain canonical."],conclusion:"Mapping menyederhanakan geometry sebelum PDE diselesaikan."}
 ],
 exercises:[
  {prompt:"Apa keuntungan memetakan domain ke unit disk?",hint:"Poisson formula tersedia.",answer:"Boundary-value problem dapat diekspresikan eksplisit melalui Poisson kernel."},
  {prompt:"Mengapa derivative nonzero penting?",hint:"Conformality/local invertibility.",answer:"Menghindari collapse angle dan critical distortion lokal."},
  {prompt:"Apa yang harus diperiksa setelah memilih conformal map?",hint:"Boundary, singularities, normalization.",answer:"Kesesuaian boundary, one-to-one property pada domain, dan kondisi target."}
 ],
 mistakes:["Menyelesaikan PDE pada target tetapi lupa pullback.","Mengabaikan boundary correspondence.","Menggunakan mapping yang tidak one-to-one pada domain aplikasi."],
 connections:["Potential theory.","Fluid mechanics.","Riemann Mapping Theorem pada teori lebih lanjut."]
}
};
