import type { BookLessonContent } from "@/data/book-content-types";

const D=(title:string,statement:string)=>({kind:"definition" as const,title,statement});
const L=(title:string,statement:string,proof?:string[])=>({kind:"lemma" as const,title,statement,proof});
const P=(title:string,statement:string,proof?:string[])=>({kind:"proposition" as const,title,statement,proof});
const T=(title:string,statement:string,proof?:string[])=>({kind:"theorem" as const,title,statement,proof});
const C=(title:string,statement:string,proof?:string[])=>({kind:"corollary" as const,title,statement,proof});
const N=(title:string,statement:string)=>({kind:"note" as const,title,statement});

export const realAnalysisContentB:Record<string,BookLessonContent>={
"integral-riemann-dasar":{
 intro:[
  "Integral Riemann dibangun dari jumlah berhingga yang mengaproksimasi luas atau akumulasi. Ide formalnya bukan memilih persegi panjang tertentu, melainkan menuntut semua jumlah Riemann dari partisi yang cukup halus mendekati bilangan yang sama.",
  "Bagian ini memisahkan tiga objek: partisi, titik label, dan jumlah Riemann. Ketelitian notasi penting karena integrabilitas menyatakan kestabilan terhadap seluruh pilihan label ketika mesh partisi kecil."
 ],
 notation:[
  {symbol:"$P=\\{x_0,\\ldots,x_n\\}$",meaning:"Partisi $a=x_0<\\cdots<x_n=b$."},
  {symbol:"$t_i\\in[x_{i-1},x_i]$",meaning:"Titik label subinterval ke-$i$."},
  {symbol:"$\\|P\\|$",meaning:"Mesh/norma partisi, panjang subinterval terbesar."},
  {symbol:"$S(f,\\dot P)$",meaning:"Jumlah Riemann $\\sum f(t_i)(x_i-x_{i-1})$."}
 ],
 formal:[
  D("Partisi Bertanda","Partisi bertanda pada $[a,b]$ terdiri atas partisi $P$ dan pilihan titik label $t_i\\in[x_{i-1},x_i]$ untuk setiap subinterval."),
  D("Integral Riemann","Fungsi terbatas $f:[a,b]\\to\\mathbb R$ Riemann-integrable dengan integral $I$ jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga setiap partisi bertanda dengan $\\|P\\|<\\delta$ memenuhi $|S(f,\\dot P)-I|<\\varepsilon$."),
  T("Keunikan Nilai Integral","Jika $I$ dan $J$ sama-sama memenuhi definisi integral Riemann untuk $f$, maka $I=J$.",[
    "Diandaikan $I\\ne J$ dan dipilih $\\varepsilon=|I-J|/3$.",
    "Dipilih partisi bertanda yang mesh-nya lebih kecil daripada kedua ambang δ yang diberikan definisi untuk $I$ dan $J$.",
    "Ketaksamaan segitiga memberi $|I-J|\\le|I-S|+|S-J|<2|I-J|/3$, kontradiksi."
  ]),
  P("Fungsi Konstan","Jika $f(x)=c$ pada $[a,b]$, maka $\\int_a^b f=c(b-a)$.",[
    "Setiap jumlah Riemann bernilai $\\sum c\\Delta x_i=c\\sum\\Delta x_i=c(b-a)$.",
    "Karena semua jumlah sudah sama dengan nilai tersebut untuk setiap partisi, kondisi ε-δ otomatis terpenuhi."
  ])
 ],
 examples:[
  {title:"Jumlah Riemann untuk $x^2$",problem:"Pada $[0,1]$, gunakan partisi seragam $x_i=i/n$ dan titik label kanan untuk menuliskan jumlah Riemann $f(x)=x^2$.",solution:["$\\Delta x=1/n$ dan $t_i=i/n$.","$S_n=\\sum_{i=1}^n(i/n)^2(1/n)=\\frac1{n^3}\\sum_{i=1}^n i^2$.","Gunakan $\\sum i^2=n(n+1)(2n+1)/6$ lalu ambil limit."],conclusion:"$S_n\\to1/3$, konsisten dengan $\\int_0^1x^2dx=1/3$."}
 ],
 exercises:[
  {prompt:"Tuliskan jumlah Riemann untuk $f(x)=x$ pada $[0,2]$ dengan partisi seragam dan titik tengah.",hint:"$\\Delta x=2/n$ dan $t_i=(2i-1)/n$.",answer:"$S_n=\\sum_{i=1}^n((2i-1)/n)(2/n)$ dan nilainya tepat $2$."},
  {prompt:"Mengapa boundedness muncul dalam teori Riemann klasik?",hint:"Jumlah atas/bawah dan kontrol osilasi memerlukan supremum/infimum hingga.",answer:"Fungsi tak terbatas pada interval kompak tidak memenuhi kerangka integral Riemann biasa."},
  {prompt:"Apa yang berubah bila titik label dipilih kiri, kanan, atau tengah?",hint:"Untuk fungsi integrabel, semua pilihan harus menuju nilai sama saat mesh menuju nol.",answer:"Nilai jumlah berhingga berbeda, tetapi limitnya sama untuk fungsi Riemann-integrable."}
 ],
 mistakes:["Menyamakan partisi $P$ dengan partisi bertanda $\\dot P$.","Menggunakan $T_i$ sebagai titik label saat notasi bab menggunakan $t_i$.","Membuktikan satu sequence of Riemann sums konvergen lalu langsung menyimpulkan integrabilitas tanpa kontrol terhadap partisi lain."],
 connections:["Bagian Darboux memberi kriteria alternatif dengan supremum/infimum.","FTC menghubungkan integral Riemann dengan antiturunan.","Generalized Riemann integral mengganti satu skala δ dengan gauge lokal."]
},

"fungsi-terintegralkan-riemann":{
 intro:["Setelah integral didefinisikan, pertanyaan utama berubah menjadi: kelas fungsi apa yang terintegralkan? Fungsi kontinu dan fungsi monoton pada interval tertutup merupakan dua kelas fundamental.","Sifat linearitas dan order menjadikan integral operator yang stabil terhadap kombinasi fungsi."],
 formal:[
  T("Kontinu Mengakibatkan Riemann-Integrable","Setiap fungsi kontinu pada $[a,b]$ Riemann-integrable.",[
    "Kontinuitas pada interval kompak memberi uniform continuity.",
    "Untuk ε yang diberikan, dipilih mesh kecil sehingga osilasi fungsi pada setiap subinterval cukup kecil.",
    "Selisih jumlah atas dan bawah dapat dibatasi oleh total panjang interval dikali batas osilasi.",
    "Kriteria Darboux kemudian memberi integrabilitas."
  ]),
  T("Monoton Mengakibatkan Riemann-Integrable","Setiap fungsi monoton pada $[a,b]$ Riemann-integrable."),
  T("Linearitas Integral","Jika $f,g$ integrabel dan $\\alpha,\\beta\\in\\mathbb R$, maka $\\alpha f+\\beta g$ integrabel dan $\\int(\\alpha f+\\beta g)=\\alpha\\int f+\\beta\\int g$."),
  T("Order Integral","Jika $f\\le g$ pada $[a,b]$, maka $\\int_a^bf\\le\\int_a^bg$."),
  C("Estimasi Integral","Jika $|f(x)|\\le M$, maka $|\\int_a^bf|\\le M(b-a)$.")
 ],
 examples:[
  {title:"Fungsi Step",problem:"Jelaskan mengapa fungsi step dengan finitely many jumps pada $[a,b]$ Riemann-integrable.",solution:["Fungsi kontinu pada semua titik kecuali finitely many jumps.","Partisi dapat dipilih sehingga subinterval yang memuat jump memiliki total panjang arbitrarily kecil.","Pada subinterval lain fungsi stabil/konstan sehingga osilasi nol atau kecil."],conclusion:"Selisih upper-lower sums dapat dibuat arbitrarily kecil."}
 ],
 exercises:[
  {prompt:"Tunjukkan $|f|$ integrabel jika $f$ integrabel.",hint:"Gunakan $||f(x)|-|f(y)||\\le|f(x)-f(y)|$ atau kriteria Darboux.",answer:"Osilasi $|f|$ pada subinterval tidak melebihi osilasi $f$, sehingga integrability terpelihara."},
  {prompt:"Jika $f$ integrabel dan $f\\ge0$, buktikan $\\int f\\ge0$.",hint:"Gunakan order theorem dengan fungsi nol.",answer:"$0\\le f$ memberi $0=\\int0\\le\\int f$."},
  {prompt:"Berikan fungsi bounded yang tidak Riemann-integrable.",hint:"Gunakan fungsi Dirichlet.",answer:"Indikator rasional pada $[0,1]$; setiap subinterval mempunyai infimum 0 dan supremum 1."}
 ],
 mistakes:["Menganggap bounded otomatis integrable.","Menggunakan antiturunan untuk membuktikan integrability sebelum FTC tersedia.","Mengabaikan domain kompak pada teorema kontinu ⇒ integrable."],
 connections:["Lebesgue criterion memberi karakterisasi melalui set diskontinuitas.","Darboux sums memberi pembuktian ringkas banyak closure properties.","Uniform convergence menjaga integrability."]
},

"teorema-dasar-kalkulus":{
 intro:["Fundamental Theorem of Calculus menyatukan dua operasi yang awalnya didefinisikan berbeda: diferensiasi dan integrasi.","Versi pertama menyatakan integral akumulasi dari fungsi kontinu menghasilkan antiturunan; versi kedua mengubah integral menjadi evaluasi endpoint antiturunan."],
 formal:[
  T("FTC I","Jika $f$ kontinu pada $[a,b]$ dan $F(x)=\\int_a^x f(t)dt$, maka $F$ terdiferensial pada $(a,b)$ dan $F'(x)=f(x)$.",[
    "Difference quotient dapat ditulis $[F(x+h)-F(x)]/h=(1/h)\\int_x^{x+h}f(t)dt$.",
    "Dikurangi $f(x)$, diperoleh rata-rata integral dari $f(t)-f(x)$.",
    "Kontinuitas $f$ di $x$ membuat nilai mutlak rata-rata tersebut lebih kecil dari ε untuk $h$ cukup kecil."
  ]),
  T("FTC II / Newton–Leibniz","Jika $f$ kontinu pada $[a,b]$ dan $G'$ sama dengan $f$, maka $\\int_a^bf(x)dx=G(b)-G(a)$."),
  P("Substitusi","Di bawah hipotesis regularitas yang sesuai, perubahan variabel $u=\\phi(x)$ memberi $\\int_a^b f(\\phi(x))\\phi'(x)dx=\\int_{\\phi(a)}^{\\phi(b)}f(u)du$.")
 ],
 examples:[
  {title:"Fungsi Akumulasi",problem:"Jika $F(x)=\\int_0^x(1+t^2)dt$, tentukan $F'(x)$ dan $F(x)$.",solution:["FTC I memberi $F'(x)=1+x^2$.","Antiturunan $1+t^2$ adalah $t+t^3/3$.","Evaluasi dari 0 ke $x$ memberi $F(x)=x+x^3/3$."],conclusion:"Diferensiasi mengembalikan integrand."}
 ],
 exercises:[
  {prompt:"Hitung $d/dx\\int_1^{x^2}\\cos t\\,dt$.",hint:"FTC + chain rule.",answer:"$2x\\cos(x^2)$."},
  {prompt:"Hitung $\\int_0^1 3x^2dx$.",hint:"Antiturunan $x^3$.",answer:"$1$."},
  {prompt:"Jika $F(x)=\\int_x^b f(t)dt$, berapa $F'(x)$?",hint:"Ubah tanda batas integral.",answer:"$-f(x)$ untuk $f$ kontinu."}
 ],
 mistakes:["Mengabaikan chain rule ketika batas atas bukan $x$.","Menggunakan FTC pada integrand yang belum memenuhi syarat yang diperlukan versi teorema.","Mencampur variabel dummy integrasi dengan variabel batas."],
 connections:["ODE separabel menggunakan FTC dan substitusi.","Teorema integral mean value mengikuti kontinuitas + EVT.","Integral kompleks memiliki fundamental theorem analog pada domain dengan antiturunan."]
},

"integral-darboux":{
 intro:["Pendekatan Darboux mengukur fungsi pada setiap subinterval melalui infimum dan supremum. Integrabilitas terjadi ketika upper dan lower approximations dapat dipertemukan.","Metode ini sangat efektif untuk membuktikan integrability tanpa memilih titik label secara eksplisit."],
 notation:[
  {symbol:"$m_i=\\inf_{[x_{i-1},x_i]}f$",meaning:"Infimum pada subinterval ke-$i$."},
  {symbol:"$M_i=\\sup_{[x_{i-1},x_i]}f$",meaning:"Supremum pada subinterval ke-$i$."},
  {symbol:"$L(f,P)$",meaning:"Lower Darboux sum $\\sum m_i\\Delta x_i$."},
  {symbol:"$U(f,P)$",meaning:"Upper Darboux sum $\\sum M_i\\Delta x_i$."}
 ],
 formal:[
  D("Integral Darboux Bawah dan Atas","$\\underline{\\int_a^b}f=\\sup_P L(f,P)$ dan $\\overline{\\int_a^b}f=\\inf_P U(f,P)$."),
  T("Monotonisitas terhadap Refinement","Jika $Q$ menghaluskan $P$, maka $L(f,P)\\le L(f,Q)\\le U(f,Q)\\le U(f,P)$."),
  T("Kriteria Darboux","Fungsi bounded $f$ integrabel jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$."),
  T("Ekuivalensi Riemann–Darboux","Untuk fungsi bounded pada interval tertutup, definisi integrabilitas Riemann dan Darboux ekuivalen dan menghasilkan nilai integral yang sama.")
 ],
 examples:[
  {title:"Dirichlet Tidak Integrabel",problem:"Untuk $f=1$ pada rasional dan $0$ pada irasional di $[0,1]$, hitung lower/upper Darboux sums.",solution:["Setiap subinterval mengandung rasional dan irasional.","Infimum tiap subinterval $0$, supremum $1$.","Untuk setiap partisi, $L(f,P)=0$ dan $U(f,P)=1$."],conclusion:"Upper-lower gap selalu $1$, sehingga tidak integrabel."}
 ],
 exercises:[
  {prompt:"Tunjukkan refinement tidak menurunkan lower sum.",hint:"Membagi interval dapat menaikkan infimum lokal.",answer:"Setiap kontribusi interval lama diganti kontribusi subinterval dengan infimum masing-masing yang tidak lebih kecil dari infimum lama."},
  {prompt:"Untuk $f(x)=x$ pada $[0,1]$, hitung upper-lower gap partisi seragam $n$ bagian.",hint:"Pada subinterval panjang $1/n$, osilasi $1/n$.",answer:"Gap total $n(1/n)(1/n)=1/n$."},
  {prompt:"Apa hubungan jumlah Riemann dengan Darboux sums pada partisi yang sama?",hint:"$m_i\\le f(t_i)\\le M_i$.",answer:"$L(f,P)\\le S(f,\\dot P)\\le U(f,P)$."}
 ],
 mistakes:["Membalik definisi sup lower sums dan inf upper sums.","Menganggap refinement membuat upper sum naik.","Melupakan boundedness untuk menjamin supremum/infimum lokal hingga."],
 connections:["Kriteria osilasi Riemann berasal dari Darboux gap.","Lebesgue criterion dapat dibaca sebagai kontrol osilasi di titik diskontinu.","Gold-standard Integral Riemann DMath menggunakan visualisasi hubungan ketiga jenis sum."]
},

"integrasi-aproksimasi":{
 intro:["Integral eksak sering tidak tersedia dalam bentuk elementer. Quadrature mengganti integral dengan kombinasi nilai fungsi pada titik-titik tertentu.","Analisis real tidak hanya memberi rumus numerik, tetapi juga alasan mengapa metode tersebut konvergen dan bagaimana galatnya dibatasi."],
 formal:[
  P("Aturan Titik Tengah","Pada partisi seragam, midpoint rule memakai nilai fungsi di tengah setiap subinterval sebagai aproksimasi integral."),
  P("Aturan Trapesium","Trapezoidal rule mengganti fungsi pada subinterval dengan interpolasi linear endpoint."),
  P("Aturan Simpson","Simpson rule mengaproksimasi dua subinterval bertetangga dengan polinom kuadratik melalui tiga titik."),
  N("Galat Quadrature","Jika turunan tingkat tertentu bounded, remainder Taylor dapat digunakan untuk menurunkan bound galat metode.")
 ],
 examples:[
  {title:"Aturan Trapesium Satu Panel",problem:"Aproksimasi $\\int_0^1x^2dx$ dengan trapezoid tunggal.",solution:["Nilai endpoint: $f(0)=0$, $f(1)=1$.","Lebar interval $1$.","Aproksimasi $T=(1/2)(0+1)=1/2$."],conclusion:"Nilai eksak $1/3$, sehingga galat absolut $1/6$."}
 ],
 exercises:[
  {prompt:"Aproksimasi $\\int_0^1x^2dx$ dengan midpoint satu panel.",hint:"Gunakan $x=1/2$.",answer:"$1\\cdot(1/2)^2=1/4$."},
  {prompt:"Mengapa Simpson exact untuk polinom derajat ≤3?",hint:"Error term melibatkan turunan keempat.",answer:"Turunan keempat polinom kubik atau lebih rendah adalah nol."},
  {prompt:"Apa efek memperhalus partisi pada aturan Riemann konsisten?",hint:"Mesh menuju nol.",answer:"Untuk fungsi integrabel, aproksimasi menuju nilai integral."}
 ],
 mistakes:["Menyebut hasil aproksimasi sebagai nilai eksak.","Menggunakan bound galat tanpa memeriksa turunan yang dibutuhkan.","Salah menghitung faktor panjang subinterval."],
 connections:["Taylor theorem memberi error estimates.","Numerical analysis mengembangkan quadrature adaptif.","Gauge integration dapat dipandang sebagai refinement lokal adaptif."]
},

"konvergensi-titik-dan-seragam":{
 intro:["Barisan fungsi membawa dua indeks: variabel $x$ dan indeks $n$. Urutan kuantor menentukan jenis konvergensi.","Pointwise convergence mengizinkan indeks ambang $N$ bergantung pada $x$; uniform convergence meminta satu $N$ bekerja untuk semua $x$ sekaligus."],
 formal:[
  D("Konvergensi Titik demi Titik","$f_n\\to f$ pointwise pada $A$ jika untuk setiap $x\\in A$ dan setiap ε terdapat $N=N(x,\\varepsilon)$ sehingga $n\\ge N$ memberi $|f_n(x)-f(x)|<\\varepsilon$."),
  D("Konvergensi Seragam","$f_n\\to f$ uniform pada $A$ jika untuk setiap ε terdapat $N=N(\\varepsilon)$ sehingga untuk semua $x\\in A$ dan $n\\ge N$, $|f_n(x)-f(x)|<\\varepsilon$."),
  P("Sup Norm Criterion","Jika $A$ dan fungsi memungkinkan, uniform convergence ekuivalen dengan $\\sup_{x\\in A}|f_n(x)-f(x)|\\to0$."),
  T("Uniform Limit of Continuous Functions","Jika setiap $f_n$ kontinu dan $f_n\\to f$ uniform, maka $f$ kontinu.",[
    "Untuk titik $x_0$ dan ε, pilih $N$ dengan $|f_N-f|<\\varepsilon/3$ seragam.",
    "Kontinuitas $f_N$ memberi δ agar $|f_N(x)-f_N(x_0)|<\\varepsilon/3$.",
    "Ketaksamaan segitiga pada $f(x)-f(x_0)$ memberi tiga suku masing-masing $<\\varepsilon/3$."
  ])
 ],
 examples:[
  {title:"$x^n$ pada $[0,1]$",problem:"Tentukan limit pointwise $f_n(x)=x^n$ dan apakah konvergensinya uniform.",solution:["Untuk $0\\le x<1$, $x^n\\to0$; pada $x=1$, nilainya selalu $1$.","Limit pointwise $f(x)=0$ untuk $x<1$ dan $f(1)=1$.","Setiap $f_n$ kontinu tetapi limit diskontinu, sehingga konvergensi tidak uniform."],conclusion:"Pointwise tidak menjamin pelestarian kontinuitas."}
 ],
 exercises:[
  {prompt:"Tunjukkan $f_n(x)=x/n$ konvergen uniform ke 0 pada $[0,1]$.",hint:"Supremum $|x/n|=1/n$.",answer:"Sup norm menuju 0."},
  {prompt:"Apakah $x/n$ uniform ke 0 pada $\\mathbb R$?",hint:"Supremum tak hingga.",answer:"Tidak."},
  {prompt:"Tuliskan negasi definisi uniform convergence.",hint:"Balik urutan kuantor dengan benar.",answer:"Ada ε>0 sehingga untuk setiap N terdapat n≥N dan x∈A dengan $|f_n(x)-f(x)|\\ge ε$."}
 ],
 mistakes:["Menukar urutan kuantor pointwise dan uniform.","Menggunakan pointwise convergence untuk menyimpulkan limit kontinu.","Menghitung supremum pada domain yang salah."],
 connections:["M-test untuk deret fungsi memakai sup bounds.","Pertukaran limit dan integral memerlukan uniformity atau kondisi lain.","Function spaces dengan sup norm menjadikan uniform convergence sebagai convergence in norm."]
},

"pertukaran-limit":{
 intro:["Pertanyaan inti barisan fungsi adalah kapan operasi limit dapat dipertukarkan dengan operasi lain. Uniform convergence merupakan syarat kuat yang mengamankan banyak pertukaran.","Diferensiasi lebih sensitif daripada integrasi: uniform convergence fungsi saja tidak cukup untuk menukar limit dan turunan."],
 formal:[
  T("Limit dan Kontinuitas","Uniform limit dari fungsi kontinu adalah kontinu."),
  T("Limit dan Integral Riemann","Jika $f_n$ Riemann-integrable pada $[a,b]$ dan $f_n\\to f$ uniform, maka $f$ integrable dan $\\int f_n\\to\\int f$.",[
    "Uniform convergence memberi $|f_n-f|<\\varepsilon/(b-a)$ untuk $n$ besar.",
    "Estimasi integral memberi $|\\int f_n-\\int f|\\le\\int|f_n-f|<\\varepsilon$."
  ]),
  T("Limit dan Turunan","Salah satu bentuk teorema: jika $f_n'$ konvergen uniform dan $f_n(x_0)$ konvergen pada satu titik, maka di bawah hipotesis yang sesuai $f_n$ konvergen ke fungsi terdiferensial $f$ dan $f'=\\lim f_n'$."),
  N("Peringatan","Uniform convergence $f_n\\to f$ saja tidak menjamin $f_n'\\to f'$ atau bahkan $f$ terdiferensial.")
 ],
 examples:[
  {title:"Pertukaran Integral",problem:"Jika $f_n\\to f$ uniform pada $[0,1]$, jelaskan mengapa $\\int_0^1 f_n\\to\\int_0^1 f$.",solution:["$|\\int(f_n-f)|\\le\\int|f_n-f|$.","Ruas kanan ≤ $\\|f_n-f\\|_\\infty$.","Sup norm menuju 0."],conclusion:"Integral kontinu terhadap sup norm."}
 ],
 exercises:[
  {prompt:"Berikan counterexample bahwa pointwise convergence tidak cukup untuk pertukaran integral.",hint:"Gunakan spike functions dengan luas tetap atau $nx(1-x^2)^n$ pada domain sesuai.",answer:"Dapat dibentuk fungsi yang pointwise menuju 0 tetapi integralnya tidak menuju 0."},
  {prompt:"Mengapa uniform convergence menjaga integrability Riemann?",hint:"Dekatkan $f$ dengan satu $f_N$ integrabel secara uniform.",answer:"Upper-lower oscillation atau Riemann sums untuk $f$ dapat dikontrol oleh $f_N$ plus error sup norm."},
  {prompt:"Apa tambahan penting untuk pertukaran turunan?",hint:"Uniform convergence derivative dan anchor value.",answer:"Konvergensi uniform $f_n'$ serta konvergensi nilai di satu titik, dengan domain interval dan hipotesis regularitas."}
 ],
 mistakes:["Menganggap semua operasi linear otomatis commute dengan pointwise limit.","Menyamakan uniform convergence fungsi dengan uniform convergence derivative.","Mengabaikan panjang interval pada bound integral."],
 connections:["Dominated convergence memberi syarat berbeda dalam Lebesgue theory.","Power series dapat didiferensialkan term-by-term di interior radius.","Functional analysis mempelajari continuity operator terhadap norm."]
},

"fungsi-eksponensial-dan-logaritma":{
 intro:["Analisis real dapat membangun fungsi eksponensial dan logaritma secara rigor dari integral, differential equation, atau limit/series. Tujuannya adalah menurunkan sifat-sifatnya, bukan mengasumsikan seluruh kalkulus eksponensial.","Keduanya menjadi pasangan fungsi invers monoton yang sangat penting."],
 formal:[
  D("Logaritma melalui Integral","Salah satu konstruksi adalah $\\log x=\\int_1^x dt/t$ untuk $x>0$."),
  T("Hukum Logaritma","$\\log(xy)=\\log x+\\log y$ untuk $x,y>0$."),
  D("Eksponensial","$\\exp$ didefinisikan sebagai invers $\\log:(0,\\infty)\\to\\mathbb R$."),
  T("Turunan","$(\\log x)'=1/x$ dan $(e^x)'=e^x$."),
  T("Hukum Eksponensial","$e^{x+y}=e^xe^y$.")
 ],
 examples:[{title:"Limit Dasar",problem:"Gunakan diferensiabilitas eksponensial untuk memperoleh $\\lim_{h\\to0}(e^h-1)/h=1$.",solution:["Definisi turunan $e^x$ di $x=0$ memberi limit tersebut.","Karena $(e^x)'|_{0}=e^0=1$, nilai limit $1$."],conclusion:"Limit ini menjadi fondasi banyak identitas eksponensial."}],
 exercises:[
  {prompt:"Buktikan $\\log(1/x)=-\\log x$.",hint:"Gunakan $\\log(x\\cdot1/x)=\\log1=0$.",answer:"$\\log x+\\log(1/x)=0$."},
  {prompt:"Tunjukkan $e^x>0$ untuk semua real.",hint:"Range fungsi inverse log adalah $(0,\\infty)$.",answer:"Langsung dari definisi range exp."},
  {prompt:"Hitung turunan $a^x$ untuk $a>0$.",hint:"$a^x=e^{x\\log a}$.",answer:"$(a^x)'=(\\log a)a^x$."}
 ],
 mistakes:["Menggunakan sifat logaritma pada argumen negatif dalam analisis real.","Menganggap konstruksi exp/log tidak memerlukan bukti monotonicity/invertibility.","Mencampur log natural dengan basis lain."],
 connections:["Analisis kompleks memperluas log menjadi multi-valued.","ODE $y'=y$ memiliki solusi eksponensial.","Power series memberi konstruksi alternatif."]
},

"fungsi-trigonometri":{
 intro:["Sinus dan cosinus dapat dibangun secara analitik dari ODE atau power series, lalu identitas geometris diturunkan sebagai teorema.","Pendekatan rigor menegaskan periodisitas, identitas Pythagoras, turunan, dan struktur zero."],
 formal:[
  D("Sinus dan Cosinus Analitik","Dapat didefinisikan sebagai solusi sistem $s'=c$, $c'=-s$ dengan $s(0)=0$, $c(0)=1$, atau melalui deret pangkat."),
  T("Identitas Pythagoras","$\\sin^2x+\\cos^2x=1$.",["Turunkan $F(x)=\\sin^2x+\\cos^2x$.","Diperoleh $F'(x)=2\\sin x\\cos x-2\\cos x\\sin x=0$.","Karena $F(0)=1$, fungsi konstan bernilai $1$."]),
  T("Rumus Penjumlahan","$\\sin(x+y)=\\sin x\\cos y+\\cos x\\sin y$ dan $\\cos(x+y)=\\cos x\\cos y-\\sin x\\sin y$."),
  P("Periodisitas","Terdapat konstanta positif $2\\pi$ yang menjadi periode dasar sin/cos.")
 ],
 examples:[{title:"Turunan Identitas",problem:"Turunkan $\\tan x$ pada titik dengan $\\cos x\\ne0$.",solution:["$\\tan x=\\sin x/\\cos x$.","Aturan hasil bagi memberi $(\\cos^2x+\\sin^2x)/\\cos^2x$.","Identitas Pythagoras memberi $\\sec^2x$."],conclusion:"$(\\tan x)'=\\sec^2x$."}],
 exercises:[
  {prompt:"Buktikan $|\\sin x|\\le|x|$.",hint:"Gunakan MVT pada sinus antara 0 dan x.",answer:"$\\sin x-0=\\cos c\\,x$ dengan $|\\cos c|\\le1$."},
  {prompt:"Turunkan formula sudut ganda dari rumus penjumlahan.",hint:"Ambil $y=x$.",answer:"$\\sin2x=2\\sin x\\cos x$ dan $\\cos2x=\\cos^2x-\\sin^2x$."},
  {prompt:"Mengapa sin dan cos uniform continuous pada $\\mathbb R$?",hint:"Turunannya bounded.",answer:"Keduanya Lipschitz dengan konstanta 1 melalui MVT."}
 ],
 mistakes:["Menggunakan identitas sebagai asumsi ketika tujuan bagian adalah menurunkannya.","Mengabaikan titik tempat tangent tidak terdefinisi.","Menyamakan periodisitas sin dengan injectivity."],
 connections:["Complex exponential menyatukan sin/cos melalui Euler formula.","Fourier analysis dibangun dari fungsi trigonometri.","ODE dan power series memberi fondasi alternatif."]
},

"konvergensi-absolut":{
 intro:["Konvergensi absolut memperkuat konvergensi biasa dengan meminta $\\sum|a_n|$ konvergen. Di $\\mathbb R$, absolute convergence selalu cukup untuk convergence.","Konvergensi bersyarat mempertahankan jumlah tetapi lebih sensitif terhadap rearrangement."],
 formal:[
  D("Konvergensi Absolut","$\\sum a_n$ konvergen absolut jika $\\sum|a_n|$ konvergen."),
  T("Absolut Mengakibatkan Konvergen","Jika $\\sum|a_n|$ konvergen, maka $\\sum a_n$ konvergen.",[
    "Untuk $m>n$, $|\\sum_{k=n+1}^m a_k|\\le\\sum_{k=n+1}^m|a_k|$.",
    "Karena deret nilai mutlak memenuhi kriteria Cauchy, ekor kanan dapat dibuat < ε.",
    "Kriteria Cauchy untuk deret memberi konvergensi deret asal."
  ]),
  D("Konvergensi Bersyarat","Deret konvergen tetapi tidak konvergen absolut disebut conditionally convergent."),
  N("Rearrangement","Absolute convergence stabil terhadap permutasi suku; conditional convergence dapat berubah jumlah di bawah rearrangement tertentu.")
 ],
 examples:[{title:"Deret Alternating Harmonic",problem:"Klasifikasikan $\\sum(-1)^{n+1}/n$.",solution:["Leibniz test memberi konvergensi.","Deret absolutnya $\\sum1/n$ divergen."],conclusion:"Deret konvergen bersyarat."}],
 exercises:[
  {prompt:"Apakah $\\sum(-1)^n/n^2$ absolut?",hint:"Bandingkan dengan p-series $p=2$.",answer:"Ya."},
  {prompt:"Jika $\\sum a_n$ absolut dan $|b_n|\\le|a_n|$, apa yang dapat disimpulkan?",hint:"Comparison pada nilai mutlak.",answer:"$\\sum b_n$ konvergen absolut."},
  {prompt:"Mengapa absolute convergence memudahkan operasi aljabar deret?",hint:"Kontrol ekor melalui nilai mutlak.",answer:"Estimasi tidak bergantung pada cancellation tanda."}
 ],
 mistakes:["Menganggap setiap deret konvergen absolut.","Tidak membedakan convergence dan absolute convergence.","Menggunakan conditional series seperti finite sum tanpa memperhatikan rearrangement."],
 connections:["Complex series juga memakai absolute convergence.","Power series konvergen absolut di interior radius.","Fubini/Tonelli pada teori ukuran memiliki analog filosofi absolute integrability."]
},

"uji-konvergensi-absolut":{
 intro:["Tidak ada satu uji terbaik untuk semua deret. Pemilihan uji bergantung pada struktur suku: perbandingan untuk bentuk mirip, rasio untuk faktorial/eksponensial, akar untuk pangkat ke-$n$, dan integral untuk fungsi positif menurun.","Semua uji harus dibaca bersama syaratnya."],
 formal:[
  T("Comparison Test","Jika $0\\le a_n\\le b_n$ akhirnya dan $\\sum b_n$ konvergen, maka $\\sum a_n$ konvergen."),
  T("Limit Comparison","Untuk $a_n,b_n>0$, jika $a_n/b_n\\to L$ dengan $0<L<\\infty$, kedua deret mempunyai perilaku konvergensi sama."),
  T("Ratio Test","Jika $\\limsup|a_{n+1}/a_n|<1$, deret konvergen absolut; jika limit inferior >1, divergen."),
  T("Root Test","Jika $\\limsup |a_n|^{1/n}<1$, deret konvergen absolut; jika >1, divergen."),
  T("Integral Test","Untuk fungsi positif menurun $f$ dengan $a_n=f(n)$, $\\sum a_n$ dan $\\int f$ mempunyai perilaku konvergensi yang sama.")
 ],
 examples:[{title:"Faktorial",problem:"Uji $\\sum n!/n^n$.",solution:["Gunakan ratio: $a_{n+1}/a_n=(n+1)!/(n+1)^{n+1}\\cdot n^n/n!$.","Sederhanakan menjadi $(n/(n+1))^n$.","Limitnya $e^{-1}<1$."],conclusion:"Deret konvergen absolut."}],
 exercises:[
  {prompt:"Uji $\\sum1/n^3$.",hint:"p-series.",answer:"Konvergen karena $p=3>1$."},
  {prompt:"Uji $\\sum 2^n/n!$.",hint:"Ratio test.",answer:"Rasio $2/(n+1)\\to0$, konvergen."},
  {prompt:"Uji $\\sum n/(n^3+1)$.",hint:"Limit comparison dengan $1/n^2$.",answer:"Konvergen."}
 ],
 mistakes:["Menganggap ratio/root test dengan limit 1 memberi jawaban.","Memakai integral test pada fungsi yang tidak positif/menurun tanpa modifikasi.","Membandingkan arah yang salah: untuk membuktikan konvergensi perlu upper bound oleh deret konvergen."],
 connections:["Radius power series dihitung dengan ratio/root.","Asymptotic equivalence mendasari limit comparison.","Improper integrals paralel dengan series tests."]
},

"uji-konvergensi-nonabsolut":{
 intro:["Beberapa deret konvergen karena cancellation tanda, bukan karena ukuran absolut sukunya kecil cukup cepat. Uji alternating, Dirichlet, dan Abel menangkap mekanisme cancellation tersebut.","Konvergensi semacam ini lebih rapuh daripada absolute convergence."],
 formal:[
  T("Leibniz / Alternating Series Test","Jika $b_n\\downarrow0$, maka $\\sum(-1)^{n}b_n$ konvergen."),
  C("Estimasi Remainder Alternating","Untuk alternating series yang memenuhi Leibniz, galat setelah $n$ suku tidak melebihi $b_{n+1}$."),
  T("Dirichlet Test","Jika partial sums $A_n=\\sum_{k=1}^na_k$ bounded dan $b_n$ monoton menuju 0, maka $\\sum a_nb_n$ konvergen."),
  N("Conditional Convergence","Jika uji cancellation memberi convergence tetapi absolute series divergen, deret disebut conditional.")
 ],
 examples:[{title:"Alternating Harmonic",problem:"Perkirakan banyak suku agar aproksimasi $\\sum(-1)^{n+1}/n$ memiliki galat <0.001.",solution:["Remainder ≤ suku pertama yang diabaikan.","Minta $1/(N+1)<0.001$.","Cukup $N\\ge1000$."],conclusion:"1000 suku menjamin bound tersebut."}],
 exercises:[
  {prompt:"Uji $\\sum(-1)^n/\\sqrt n$.",hint:"Leibniz; absolute p-series dengan p=1/2.",answer:"Konvergen bersyarat."},
  {prompt:"Uji $\\sum\\sin n/n$.",hint:"Partial sums $\\sum\\sin n$ bounded dan $1/n\\downarrow0$.",answer:"Konvergen oleh Dirichlet."},
  {prompt:"Apakah $\\sum(-1)^n$ konvergen oleh alternating test?",hint:"Suku absolut tidak menuju 0.",answer:"Tidak."}
 ],
 mistakes:["Melupakan syarat $b_n\\to0$.","Menganggap alternating otomatis konvergen.","Menggunakan remainder bound Leibniz ketika monotonicity gagal."],
 connections:["Fourier series sering memakai Dirichlet-type cancellation.","Abel summation adalah analog discrete integration by parts.","Conditional convergence terkait rearrangement theorem."]
},

"deret-fungsi":{
 intro:["Deret fungsi $\\sum f_n(x)$ adalah barisan jumlah parsial fungsi. Pertanyaan pointwise/uniform muncul kembali, kini dengan struktur penjumlahan tak hingga.","Weierstrass M-test memberi alat praktis untuk uniform convergence melalui majorant numerik."],
 formal:[
  D("Deret Fungsi","$\\sum f_n$ konvergen pointwise/uniform jika barisan partial sums $S_N=\\sum_{n=1}^N f_n$ konvergen dengan jenis tersebut."),
  T("Weierstrass M-test","Jika $|f_n(x)|\\le M_n$ untuk semua $x\\in A$ dan $\\sum M_n$ konvergen, maka $\\sum f_n$ konvergen uniform dan absolut."),
  T("Integrasi Termwise","Jika $f_n$ Riemann-integrable dan series konvergen uniform pada $[a,b]$, maka $\\int\\sum f_n=\\sum\\int f_n$."),
  N("Diferensiasi Termwise","Memerlukan hipotesis lebih kuat, biasanya uniform convergence derivative serta convergence pada satu titik.")
 ],
 examples:[{title:"Geometric Function Series",problem:"Tunjukkan $\\sum_{n=0}^\\infty x^n$ uniform pada $[-r,r]$ untuk $0<r<1$.",solution:["$|x^n|\\le r^n$ untuk $|x|\\le r$.","Deret numerik $\\sum r^n$ konvergen.","M-test memberi uniform convergence."],conclusion:"Pada setiap compact subset interior $(-1,1)$, deret geometri uniform."}],
 exercises:[
  {prompt:"Uji uniform convergence $\\sum x^n/n^2$ pada $[-1,1]$.",hint:"$|x^n/n^2|\\le1/n^2$.",answer:"Uniform oleh M-test."},
  {prompt:"Bolehkah $\\sum x^n$ uniform pada seluruh $(-1,1)$?",hint:"Sisa geometri membesar dekat 1.",answer:"Tidak."},
  {prompt:"Apa limit pointwise $\\sum_{n=0}^\\infty x^n$ untuk $|x|<1$?",hint:"Jumlah geometri.",answer:"$1/(1-x)$."}
 ],
 mistakes:["Menerapkan M-test dengan majorant yang divergen lalu menyimpulkan series divergen; uji menjadi inconclusive.","Menyamakan pointwise absolute convergence dengan uniform convergence.","Melakukan termwise differentiation tanpa hipotesis."],
 connections:["Power series adalah kasus khusus.","Fourier series memerlukan teori konvergensi yang lebih halus.","Analytic complex functions memiliki local power series."]
},

"integral-riemann-tergeneralisasi":{
 intro:["Generalized Riemann integral mengganti syarat satu mesh global dengan gauge lokal. Partisi dapat sangat halus di daerah sulit dan lebih kasar di daerah stabil.","Pendekatan ini memperluas Riemann integral secara signifikan sambil mempertahankan bentuk jumlah Riemann bertanda."],
 formal:[
  D("Gauge","Gauge $\\delta$ adalah fungsi positif pada interval."),
  D("$\\delta$-fine Tagged Partition","Partisi bertanda disebut $\\delta$-fine jika setiap subinterval berada dalam neighborhood yang ditentukan gauge pada tag-nya."),
  D("Generalized Riemann Integral","$f$ integrabel dengan nilai $I$ jika untuk setiap ε ada gauge δ sehingga setiap $\delta$-fine tagged partition menghasilkan Riemann sum dalam ε dari $I$."),
  T("Ekstensi Riemann","Setiap fungsi Riemann-integrable juga generalized-Riemann-integrable dengan nilai sama."),
  T("Linearitas","Generalized integral linear pada kelas fungsi yang integrabel.")
 ],
 examples:[{title:"Mengapa Gauge Berguna",problem:"Jelaskan bagaimana gauge dapat menangani fungsi yang berubah cepat dekat satu titik.",solution:["Dipilih δ(x) sangat kecil dekat titik bermasalah.","Di wilayah lain δ(x) dapat lebih besar.","Fine partition otomatis beradaptasi terhadap perilaku lokal."],conclusion:"Kontrol lokal lebih fleksibel daripada satu mesh uniform."}],
 exercises:[
  {prompt:"Apa perbedaan utama antara δ pada definisi Riemann klasik dan gauge?",hint:"Satu bilangan versus fungsi titik.",answer:"Riemann klasik memakai ambang global; gauge memakai radius yang bergantung pada tag."},
  {prompt:"Mengapa setiap δ-fine partition tidak identik?",hint:"Gauge hanya memberi batas ukuran lokal.",answer:"Banyak pilihan endpoint/tag masih mungkin; definisi integral menuntut semua pilihan memberi sum dekat I."},
  {prompt:"Apa keuntungan menjaga bentuk Riemann sum?",hint:"Intuisi akumulasi tetap dipertahankan.",answer:"Generalisasi tetap dekat dengan konstruksi kalkulus berbasis partisi."}
 ],
 mistakes:["Menganggap gauge harus kontinu.","Menyamakan generalized Riemann dengan improper integral.","Memeriksa hanya satu fine partition."],
 connections:["Henstock–Kurzweil integral.","Gauge continuity pada chapter 5.","Lebesgue integration sebagai generalisasi lain dengan filosofi berbeda."]
},

"integral-tak-wajar-dan-lebesgue":{
 intro:["Generalized Riemann integral dapat dibandingkan dengan improper integral dan Lebesgue integral. Ketiganya memperluas integrasi klasik melalui mekanisme berbeda.","Bagian ini sebaiknya dibaca sebagai peta hubungan teori, bukan pengganti pengembangan penuh Lebesgue measure."],
 formal:[
  D("Integral Tak Wajar","Integral didefinisikan sebagai limit integral pada interval yang menjauhi singularity atau menuju tak hingga."),
  N("Lebesgue Integral","Lebesgue theory mengorganisasi integrasi berdasarkan ukuran level sets dan menyediakan convergence theorems yang sangat kuat."),
  P("Extension Principle","Jika suatu integral klasik ada dan teori yang lebih umum konsisten, nilai integral generalisasi harus sama."),
  N("Absolute vs Conditional Integrability","Dalam banyak teori, absolute integrability memberi stabilitas lebih kuat daripada integrability bersyarat.")
 ],
 examples:[{title:"Singular Endpoint",problem:"Klasifikasikan $\\int_0^1x^{-1/2}dx$ sebagai improper integral.",solution:["Definisikan sebagai $\\lim_{a\\downarrow0}\\int_a^1x^{-1/2}dx$.","Antiturunan $2\\sqrt x$.","Limit $2(1-\\sqrt a)\\to2$."],conclusion:"Integral improper konvergen dengan nilai $2$."}],
 exercises:[
  {prompt:"Apakah $\\int_0^1 1/x\\,dx$ konvergen improper?",hint:"Antiturunan log.",answer:"Tidak; $-\\log a\\to\\infty$ saat $a\\downarrow0$."},
  {prompt:"Apa makna absolute integrability secara informal?",hint:"Integralkan nilai mutlak.",answer:"Integral $|f|$ berhingga."},
  {prompt:"Mengapa teori Lebesgue unggul untuk limit barisan fungsi?",hint:"Dominated/monotone convergence.",answer:"Hipotesis integrability/majorant memungkinkan pertukaran limit dan integral pada kondisi lebih luas."}
 ],
 mistakes:["Menganggap setiap singular integral divergent.","Mencampur definisi improper dengan principal value.","Mengklaim generalized Riemann identik dengan Lebesgue untuk semua fungsi."],
 connections:["Improper integrals pada kalkulus.","Dominated Convergence Theorem dalam measure theory.","Residue calculus mengevaluasi banyak real improper integrals."]
},

"interval-tak-hingga":{
 intro:["Integrasi pada interval tak hingga memerlukan kontrol perilaku ekor. Definisi dilakukan melalui limit atau, dalam gauge theory, melalui mekanisme yang secara efektif mengontrol daerah jauh.","Konvergensi bergantung pada decay integrand, bukan sekadar keterbatasan lokal."],
 formal:[
  D("Improper Integral pada $[a,\\infty)$","$\\int_a^\\infty f=\\lim_{R\\to\\infty}\\int_a^R f$ jika limit hingga ada."),
  T("Comparison untuk Integral Positif","Jika $0\\le f\\le g$ akhirnya dan $\\int g$ konvergen, maka $\\int f$ konvergen."),
  T("$p$-Integral","$\\int_1^\\infty x^{-p}dx$ konvergen jika dan hanya jika $p>1$."),
  N("Tail Criterion","Konvergensi berarti kontribusi ekor $\\int_R^S f$ dapat dibuat arbitrarily kecil untuk $R,S$ besar.")
 ],
 examples:[{title:"$p$-Integral",problem:"Evaluasi $\\int_1^\\infty1/x^2dx$.",solution:["$\\int_1^R x^{-2}dx=1-1/R$.","Ambil $R\\to\\infty$."],conclusion:"Integral bernilai $1$."}],
 exercises:[
  {prompt:"Klasifikasikan $\\int_1^\\infty1/x\\,dx$.",hint:"Logarithm.",answer:"Divergen."},
  {prompt:"Jika $|f(x)|\\le1/x^2$ untuk $x\\ge1$, apa yang dapat disimpulkan?",hint:"Absolute comparison.",answer:"Integral $\\int_1^\\infty f$ konvergen absolut."},
  {prompt:"Mengapa integrand yang menuju nol belum cukup?",hint:"Bandingkan $1/x$.",answer:"Decay menuju nol dapat terlalu lambat."}
 ],
 mistakes:["Mengganti batas ∞ langsung ke antiturunan tanpa limit.","Menganggap $f(x)\\to0$ cukup untuk convergence.","Tidak memisahkan singular endpoint dan unbounded interval jika keduanya terjadi."],
 connections:["Series p-test paralel dengan p-integral.","Fourier/Laplace transforms memerlukan integrability pada domain tak terbatas.","Complex contour methods dapat mengevaluasi improper integrals."]
},

"teorema-konvergensi-integral":{
 intro:["Convergence theorems menentukan kapan limit barisan fungsi dapat dipindahkan melalui integral. Uniform convergence memberi satu jawaban klasik; teori generalisasi/Lebesgue menyediakan jawaban yang lebih luas.","Kesalahan umum adalah melakukan interchange hanya karena pointwise convergence."],
 formal:[
  T("Uniform Convergence Interchange","Jika $f_n\\to f$ uniform dan setiap $f_n$ integrable pada interval finite, maka $\\int f_n\\to\\int f$."),
  N("Dominated-Convergence Idea","Dalam teori Lebesgue, pointwise/a.e. convergence dapat cukup bila seluruh $|f_n|$ dibatasi satu fungsi integrabel."),
  N("Monotone-Convergence Idea","Barisan fungsi nonnegatif yang meningkat pointwise mempunyai integral limit yang sesuai dalam teori Lebesgue."),
  P("Tail Control","Banyak convergence theorem dapat dipahami sebagai mekanisme yang membuat kontribusi error terintegrasi menuju nol.")
 ],
 examples:[{title:"Uniform Error Bound",problem:"Jika $\\|f_n-f\\|_\\infty\\le1/n$ pada $[0,2]$, batasilah error integral.",solution:["$|\\int_0^2(f_n-f)|\\le2\\|f_n-f\\|_\\infty$.","Diperoleh error ≤ $2/n$."],conclusion:"Integral konvergen dengan laju setidaknya $O(1/n)$."}],
 exercises:[
  {prompt:"Mengapa pointwise convergence saja tidak cukup untuk integral?",hint:"Cari spike functions.",answer:"Mass dapat berkonsentrasi pada interval yang mengecil sehingga nilai pointwise menuju 0 tetapi luas tetap."},
  {prompt:"Jika convergence uniform pada interval panjang $L$, bagaimana bound integral error?",hint:"Gunakan sup norm.",answer:"≤ $L\\|f_n-f\\|_\\infty$."},
  {prompt:"Apa perbedaan philosophis domination dan uniformity?",hint:"Uniformity mengontrol pointwise error dengan satu angka; domination mengontrol magnitude oleh fungsi integrabel.",answer:"Dominated convergence mengizinkan error tidak uniform selama majorant integrabel memberi kontrol global."}
 ],
 mistakes:["Interchange limit-integral tanpa hipotesis.","Menganggap dominated convergence merupakan teorema Riemann biasa tanpa konteks.","Lupa domain tak hingga memerlukan kontrol tambahan."],
 connections:["Uniform convergence chapter 8.","Lebesgue theory.","Probability expectations sebagai integral dan limit random variables."]
},

"himpunan-buka-dan-tertutup-r":{
 intro:["Topologi memisahkan konsep “kedekatan” dari formula spesifik. Di $\\mathbb R$, open sets dibangun dari interval terbuka, sedangkan closed sets dapat dikarakterisasi melalui limit barisan.","Bahasa interior, closure, dan boundary akan mengorganisasi banyak teorema sebelumnya."],
 formal:[
  D("Himpunan Terbuka","$G\\subseteq\\mathbb R$ terbuka jika untuk setiap $x\\in G$ terdapat $r>0$ dengan $(x-r,x+r)\\subseteq G$."),
  D("Himpunan Tertutup","$F$ tertutup jika komplemennya terbuka."),
  D("Closure","$\\overline A$ adalah himpunan $A$ ditambah seluruh titik limitnya; ekuivalen dengan himpunan tertutup terkecil yang memuat $A$."),
  T("Kriteria Sekuensial Closed","$F\\subseteq\\mathbb R$ tertutup jika dan hanya jika setiap barisan $(x_n)\\subseteq F$ yang konvergen di $\\mathbb R$ memiliki limit di $F$."),
  P("Arbitrary Union / Finite Intersection","Gabungan sebarang open sets terbuka; irisan hingga open sets terbuka.")
 ],
 examples:[{title:"Interval",problem:"Klasifikasikan $(0,1)$ dan $[0,1]$.",solution:["Setiap titik $(0,1)$ memiliki neighborhood kecil di dalam interval, jadi terbuka.","Komplemen $[0,1]$ adalah $(-\\infty,0)\\cup(1,\\infty)$ yang terbuka, jadi $[0,1]$ tertutup."],conclusion:"Satu himpunan dapat terbuka, tertutup, keduanya, atau tidak keduanya tergantung ruang ambient."}],
 exercises:[
  {prompt:"Tentukan closure dari $(0,1)$.",hint:"Tambahkan endpoint sebagai limit points.",answer:"$[0,1]$."},
  {prompt:"Apakah $\\mathbb Q$ terbuka atau tertutup di $\\mathbb R$?",hint:"Setiap interval mengandung rasional dan irasional.",answer:"Tidak keduanya."},
  {prompt:"Buktikan intersection sebarang closed sets tertutup.",hint:"Gunakan komplemen dan De Morgan.",answer:"Komplemen intersection adalah union komplemen yang terbuka."}
 ],
 mistakes:["Menganggap closed berarti bounded.","Menganggap open dan closed saling eksklusif; $\\varnothing$ dan $\\mathbb R$ keduanya.","Tidak menyatakan ruang ambient."],
 connections:["Continuity dapat dikarakterisasi dengan preimage open sets.","Compact sets di $\\mathbb R$ adalah closed and bounded.","Metric spaces menggeneralisasi open balls."]
},

"himpunan-kompak":{
 intro:["Compactness adalah prinsip “hingga dari lokal”. Open cover yang mungkin tak hingga selalu mempunyai subcover hingga.","Di $\\mathbb R$, Heine–Borel menyederhanakan compactness menjadi closed and bounded, tetapi karakterisasi ini khusus Euclidean finite-dimensional setting."],
 formal:[
  D("Open Cover","Keluarga open sets $\\{G_\\alpha\\}$ menutupi $K$ jika $K\\subseteq\\bigcup_\\alpha G_\\alpha$."),
  D("Kompak","$K$ kompak jika setiap open cover mempunyai finite subcover."),
  T("Heine–Borel di ℝ","Subset $K\\subseteq\\mathbb R$ kompak jika dan hanya jika closed dan bounded."),
  T("Sequential Compactness","Di $\\mathbb R$, $K$ kompak jika dan hanya jika setiap barisan dalam $K$ memiliki subbarisan yang konvergen ke titik di $K$."),
  T("Continuous Image of Compact","Jika $f$ kontinu dan $K$ kompak, maka $f(K)$ kompak.")
 ],
 examples:[{title:"Mengapa $(0,1)$ Tidak Kompak",problem:"Berikan open cover tanpa finite subcover.",solution:["Gunakan $G_n=(1/n,1)$ ditambah modifikasi untuk menutup semua titik dekat 1, atau cover $U_n=(1/n,1)$ bersama interval yang mencakup bagian sesuai.","Cara lebih sederhana memakai sequence $1/n$ tanpa convergent subsequence di $(0,1)$; sequential compactness gagal karena limit 0 tidak berada di domain."],conclusion:"Ketertutupan endpoint penting."}],
 exercises:[
  {prompt:"Buktikan finite set kompak.",hint:"Untuk tiap titik pilih satu anggota cover yang memuatnya.",answer:"Karena titik hanya finitely many, pilihan tersebut menghasilkan finite subcover."},
  {prompt:"Apakah $[0,\\infty)$ kompak di $\\mathbb R$?",hint:"Heine–Borel.",answer:"Tidak, karena tidak bounded."},
  {prompt:"Mengapa fungsi kontinu pada compact set bounded?",hint:"Citra compact adalah compact, lalu bounded.",answer:"$f(K)$ compact di $\\mathbb R$, sehingga bounded."}
 ],
 mistakes:["Menganggap bounded saja cukup.","Menggunakan Heine–Borel di ruang metrik arbitrer.","Menyamakan compactness dengan finite set."],
 connections:["EVT berasal dari continuous image of compact.","Heine–Cantor berasal dari compactness.","Bolzano–Weierstrass adalah bentuk sequential compactness."]
},

"kontinuitas-topologis":{
 intro:["Kontinuitas dapat dinyatakan tanpa ε-δ: fungsi kontinu tepat ketika pracitra setiap open set terbuka. Formulasi ini bekerja pada topological spaces dan menjelaskan mengapa continuity bersifat komposisional.","Karakterisasi closed-set equivalent diperoleh lewat komplemen."],
 formal:[
  T("Open-Set Characterization","$f:X\\to Y$ kontinu jika dan hanya jika $f^{-1}(G)$ terbuka di $X$ untuk setiap open set $G\\subseteq Y$."),
  C("Closed-Set Characterization","$f$ kontinu jika dan hanya jika pracitra setiap closed set tertutup."),
  T("Komposisi Kontinu","Komposisi fungsi kontinu kontinu.",[
    "Untuk open set $G$ di target, $(g\\circ f)^{-1}(G)=f^{-1}(g^{-1}(G))$.",
    "Kontinuitas $g$ membuat $g^{-1}(G)$ open; kontinuitas $f$ membuat pracitranya open."
  ]),
  T("Continuous Image of Compact","Citra compact oleh fungsi kontinu compact.")
 ],
 examples:[{title:"Kontinuitas Polinomial secara Topologis",problem:"Bagaimana formulasi topologis membaca continuity polinomial?",solution:["Tidak perlu memeriksa semua open sets satu per satu setelah continuity algebraik diketahui.","Teorema ekuivalensi menjamin preimage setiap open set tetap open."],conclusion:"Formulasi topologis lebih cocok untuk generalisasi daripada komputasi lokal."}],
 exercises:[
  {prompt:"Mengapa preimage union selalu union preimages?",hint:"Argumen keanggotaan.",answer:"$x$ masuk pracitra union iff $f(x)$ masuk setidaknya satu anggota, iff $x$ masuk setidaknya satu pracitra."},
  {prompt:"Apakah image open set oleh fungsi kontinu harus open?",hint:"Pertimbangkan fungsi konstan.",answer:"Tidak."},
  {prompt:"Jika $f$ homeomorphism, sifat apa yang dimiliki inversnya?",hint:"Definisi homeomorphism.",answer:"Bijektif, kontinu, dan invers kontinu."}
 ],
 mistakes:["Menukar image dengan preimage pada karakterisasi continuity.","Menganggap continuous map selalu open map.","Mengabaikan topologi domain/codomain."],
 connections:["Topology umum mendefinisikan continuity dengan open sets.","Homeomorphism adalah konsep “kesamaan” topologis.","Connectedness juga dilestarikan oleh continuous image."]
},

"ruang-metrik":{
 intro:["Metric space menggeneralisasi jarak $|x-y|$ di $\\mathbb R$. Setelah metrik diberikan, neighborhood, convergence, Cauchy, open/closed, continuity, dan compactness dapat dibangun kembali.","Banyak argumen analisis real ternyata hanya memakai sifat metrik, bukan operasi aljabar bilangan real."],
 notation:[{symbol:"$(X,d)$",meaning:"Ruang metrik dengan himpunan $X$ dan fungsi jarak $d$."},{symbol:"$B_r(x)$",meaning:"Bola terbuka $\\{y:d(x,y)<r\\}$."}],
 formal:[
  D("Metrik","Fungsi $d:X\\times X\\to[0,\\infty)$ memenuhi positivity, identity of indiscernibles, symmetry, dan triangle inequality."),
  D("Konvergensi","$x_n\\to x$ jika $d(x_n,x)\\to0$."),
  D("Cauchy","$(x_n)$ Cauchy jika untuk setiap ε terdapat N sehingga $d(x_n,x_m)<ε$ untuk $m,n\\ge N$."),
  D("Complete Metric Space","Ruang metrik complete jika setiap Cauchy sequence konvergen ke titik di ruang."),
  T("Limit Unik","Limit sequence di metric space unik.",[
    "Jika $x_n\\to x$ dan $x_n\\to y$, triangle inequality memberi $d(x,y)\\le d(x,x_n)+d(x_n,y)$.",
    "Ruas kanan menuju nol, sehingga $d(x,y)=0$ dan $x=y$."
  ]),
  P("Continuity via Sequences","Dalam metric spaces, $f$ kontinu iff $x_n\\to x$ selalu memberi $f(x_n)\\to f(x)$.")
 ],
 examples:[{title:"Metrik Diskrit",problem:"Pada himpunan $X$, definisikan $d(x,y)=0$ jika $x=y$ dan $1$ jika berbeda. Bagaimana bentuk convergence?",solution:["Ambil ε=1/2.","Jika $x_n\\to x$, eventually $d(x_n,x)<1/2$.","Satu-satunya kemungkinan adalah $d=0$, sehingga eventually $x_n=x$."],conclusion:"Pada metric diskrit, sequence konvergen iff eventually konstan."}],
 exercises:[
  {prompt:"Verifikasi $d(x,y)=|x-y|$ adalah metrik pada $\\mathbb R$.",hint:"Sifat terakhir adalah triangle inequality.",answer:"Keempat aksioma mengikuti sifat nilai mutlak."},
  {prompt:"Apakah $d(x,y)=|x-y|^2$ metrik pada $\\mathbb R$?",hint:"Periksa triangle inequality dengan titik 0,1,2.",answer:"Tidak; $d(0,2)=4>1+1$."},
  {prompt:"Mengapa $\\mathbb Q$ tidak complete dengan metrik biasa?",hint:"Aproksimasi rasional ke $\\sqrt2$.",answer:"Ada Cauchy sequence rasional yang limit realnya irasional."}
 ],
 mistakes:["Menganggap semua fungsi jarak intuitif memenuhi triangle inequality.","Menyamakan boundedness dengan compactness di metric space umum.","Menganggap Cauchy otomatis konvergen tanpa completeness."],
 connections:["Banach spaces adalah complete normed spaces.","Topological notions dapat diinduksi oleh metrik.","Analisis fungsional mengembangkan ide ini pada ruang fungsi."]
}
};

