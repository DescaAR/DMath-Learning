import { buildMeasureProbabilityContent, type MeasureProbabilityLessonSpec } from "@/data/measure-probability-content-utils";

const specs: Record<string, MeasureProbabilityLessonSpec> = {
  "tup-radon-nikodym": {
    title:"Teorema Radon–Nikodym",
    focus:"Teorema Radon–Nikodym menjelaskan kapan satu ukuran dapat direpresentasikan sebagai integral terhadap ukuran lain melalui suatu density.",
    definitions:[
      {title:"Kontinuitas Absolut Ukuran",statement:"Untuk dua ukuran $\\nu$ dan $\\mu$ pada sigma-algebra yang sama, ditulis $\\nu\\ll\\mu$ jika $\\mu(A)=0$ mengakibatkan $\\nu(A)=0$ untuk setiap himpunan terukur $A$."},
      {title:"Turunan Radon–Nikodym",statement:"Jika $\\nu(A)=\\int_A f\\,d\\mu$ untuk semua $A$, fungsi $f$ disebut turunan Radon–Nikodym $d\\nu/d\\mu$ dan unik hampir di mana-mana."}
    ],
    results:[
      {kind:"proposition",title:"Representasi dengan Density Mengimplikasikan Kontinuitas Absolut",statement:"Jika $\\nu(A)=\\int_A f\\,d\\mu$ dengan $f\\ge0$ terukur, maka $\\nu\\ll\\mu$.",proof:[
        "Ambil $A$ dengan $\\mu(A)=0$.",
        "Integral Lebesgue fungsi nonnegatif pada himpunan berukuran nol bernilai nol.",
        "Diperoleh $\\nu(A)=\\int_A f\\,d\\mu=0$. Dengan demikian $\\nu\\ll\\mu$."
      ]}
    ],
    examples:[
      {title:"Density Probabilitas terhadap Lebesgue",problem:"Jika $f(x)=2x$ pada $[0,1]$ dan nol di luar, definisikan $P(A)=\\int_A fdm$. Tentukan $P([0,1/2])$.",solution:["Gunakan density $2x$.","Hitung $\\int_0^{1/2}2x dx=x^2|_0^{1/2}$."],conclusion:"$P([0,1/2])=1/4$."}
    ],
    connections:"Teorema Radon–Nikodym penuh menyatakan bahwa pada kondisi sigma-finite, $\\nu\\ll\\mu$ menjamin keberadaan density. Dalam probabilitas, likelihood ratio dan change of measure adalah turunan Radon–Nikodym."
  },

  "tup-signed-measure": {
    title:"Ukuran Bertanda",
    focus:"Ukuran bertanda memperbolehkan nilai positif dan negatif sambil mempertahankan aditivitas terhitung. Struktur utamanya dijelaskan melalui dekomposisi Hahn dan Jordan.",
    definitions:[
      {title:"Ukuran Bertanda",statement:"Fungsi $\\nu:\\mathcal A\\to[-\\infty,\\infty]$ disebut ukuran bertanda jika aditif terhitung dan tidak mengambil $+\\infty$ serta $-\\infty$ sekaligus dalam cara yang membuat operasi tidak terdefinisi."},
      {title:"Variasi Total",statement:"Jika $\\nu=\\nu^+-\\nu^-$ adalah dekomposisi Jordan, variasi total didefinisikan $|\\nu|=\\nu^++\\nu^-$."}
    ],
    results:[
      {kind:"proposition",title:"Selisih Dua Ukuran Hingga adalah Ukuran Bertanda",statement:"Jika $\\mu_1$ dan $\\mu_2$ ukuran hingga, maka $\\nu=\\mu_1-\\mu_2$ merupakan ukuran bertanda.",proof:[
        "Nilai $\\nu(A)$ hingga karena kedua ukuran hingga.",
        "Untuk keluarga saling lepas $A_n$, aditivitas terhitung masing-masing ukuran memberi $\\mu_i(\\bigcup A_n)=\\sum\\mu_i(A_n)$.",
        "Kurangkan kedua identitas untuk memperoleh $\\nu(\\bigcup A_n)=\\sum\\nu(A_n)$."
      ]}
    ],
    examples:[
      {title:"Ukuran Bertanda dari Density",problem:"Pada $[0,1]$, definisikan $\\nu(A)=\\int_A(2x-1)dx$. Tentukan $\\nu([0,1])$.",solution:["Integrasikan $2x-1$ dari 0 sampai 1.","Nilainya $[x^2-x]_0^1=0$."],conclusion:"Total mass ukuran bertanda dapat nol walaupun ukurannya tidak identik nol."}
    ],
    connections:"Ukuran bertanda muncul dari selisih ukuran dan dari fungsional linear pada ruang fungsi. Dekomposisi Jordan memisahkan bagian positif dan negatif secara kanonik."
  },

  "tup-bounded-variation": {
    title:"Fungsi Bounded Variation",
    focus:"Fungsi bounded variation memiliki total variasi hingga dan dapat ditulis sebagai selisih dua fungsi naik. Konsep ini menghubungkan analisis real, ukuran Stieltjes, dan turunan hampir di mana-mana.",
    definitions:[
      {title:"Total Variasi",statement:"Untuk $f:[a,b]\\to\\mathbb R$, variasi total adalah $V_a^b(f)=\\sup_P\\sum_i|f(x_i)-f(x_{i-1})|$, supremum diambil atas semua partisi $P$."},
      {title:"Bounded Variation",statement:"Fungsi $f$ disebut bounded variation pada $[a,b]$ jika $V_a^b(f)<\\infty$."}
    ],
    results:[
      {kind:"proposition",title:"Fungsi Monoton Memiliki Bounded Variation",statement:"Jika $f$ naik pada $[a,b]$, maka $V_a^b(f)=f(b)-f(a)$.",proof:[
        "Untuk setiap partisi, monotonisitas memberi $f(x_i)-f(x_{i-1})\\ge0$.",
        "Jumlah nilai absolut menjadi jumlah teleskopik $\\sum_i(f(x_i)-f(x_{i-1}))=f(b)-f(a)$.",
        "Karena semua partisi memberi nilai yang sama, supremumnya juga $f(b)-f(a)$."
      ]}
    ],
    examples:[
      {title:"Variasi Fungsi Linear",problem:"Hitung variasi total $f(x)=3x-2$ pada $[0,2]$.",solution:["Fungsi naik karena slope positif.","Gunakan hasil fungsi monoton."],conclusion:"$V_0^2(f)=f(2)-f(0)=6$."}
    ],
    connections:"Setiap fungsi BV dapat didekomposisi menjadi selisih dua fungsi monoton. Distribusi Stieltjes dan ukuran bertanda secara alami terkait dengan fungsi BV."
  },

  "tup-absolute-cont-function": {
    title:"Fungsi Absolut Kontinu",
    focus:"Kontinuitas absolut lebih kuat daripada kontinuitas seragam dan merupakan kelas fungsi yang tepat untuk bentuk Lebesgue dari Teorema Dasar Kalkulus.",
    definitions:[
      {title:"Kontinuitas Absolut",statement:"Fungsi $f:[a,b]\\to\\mathbb R$ absolut kontinu jika untuk setiap $\\varepsilon>0$ ada $\\delta>0$ sehingga untuk setiap keluarga interval saling lepas $(a_k,b_k)$ dengan $\\sum_k(b_k-a_k)<\\delta$ berlaku $\\sum_k|f(b_k)-f(a_k)|<\\varepsilon$."},
      {title:"Representasi Integral",statement:"Fungsi absolut kontinu dapat direpresentasikan sebagai $f(x)=f(a)+\\int_a^x g(t)dt$ untuk suatu $g\\in L^1$, dan $g=f'$ hampir di mana-mana."}
    ],
    results:[
      {kind:"proposition",title:"Representasi Integral Menghasilkan Kontinuitas Absolut",statement:"Jika $g\\in L^1[a,b]$ dan $f(x)=c+\\int_a^xg(t)dt$, maka $f$ absolut kontinu.",proof:[
        "Absolute continuity integral Lebesgue menyatakan bahwa untuk setiap $\\varepsilon>0$ ada $\\delta>0$ sehingga $m(E)<\\delta$ memberi $\\int_E|g|<\\varepsilon$.",
        "Untuk interval saling lepas $(a_k,b_k)$ dengan total panjang kurang dari $\\delta$, gabungannya $E$ berukuran kurang dari $\\delta$.",
        "$\\sum_k|f(b_k)-f(a_k)|\\le\\sum_k\\int_{a_k}^{b_k}|g|=\\int_E|g|<\\varepsilon$."
      ]}
    ],
    examples:[
      {title:"Fungsi dari Integral $L^1$",problem:"Ambil $g(t)=t^{-1/2}$ pada $(0,1]$ dan $f(x)=\\int_0^xg(t)dt$. Tentukan $f$.",solution:["Integral $t^{-1/2}$ adalah $2\\sqrt t$.","Diperoleh $f(x)=2\\sqrt x$."],conclusion:"Walaupun turunannya tak terbatas dekat 0, $f$ absolut kontinu karena $g\\in L^1$."}
    ],
    connections:"Fungsi Cantor menunjukkan bahwa kontinu dan BV belum tentu absolut kontinu. Kontinuitas absolut tepat mencegah adanya bagian singular dalam representasi ukuran turunannya."
  },

  "tup-lebesgue-differentiation": {
    title:"Teorema Diferensiasi Lebesgue",
    focus:"Teorema diferensiasi Lebesgue menyatakan bahwa rata-rata lokal fungsi $L^1_{loc}$ pulih ke nilai fungsi hampir di mana-mana ketika radius lingkungan mengecil.",
    definitions:[
      {title:"Rata-Rata Lokal",statement:"Untuk $f\\in L^1_{loc}(\\mathbb R)$, rata-rata lokal di sekitar $x$ pada radius $r$ adalah $A_rf(x)=\\frac1{2r}\\int_{x-r}^{x+r}f(t)dt$."},
      {title:"Titik Lebesgue",statement:"Titik $x$ disebut titik Lebesgue dari $f$ jika $\\lim_{r\\downarrow0}\\frac1{2r}\\int_{x-r}^{x+r}|f(t)-f(x)|dt=0$."}
    ],
    results:[
      {kind:"proposition",title:"Kontinuitas Mengimplikasikan Sifat Titik Lebesgue",statement:"Jika $f$ kontinu di $x$, maka $x$ adalah titik Lebesgue dari $f$.",proof:[
        "Untuk setiap $\\varepsilon>0$, kontinuitas memberi $\\delta>0$ sehingga $|t-x|<\\delta$ mengakibatkan $|f(t)-f(x)|<\\varepsilon$.",
        "Untuk $0<r<\\delta$, integrand pada interval $(x-r,x+r)$ kurang dari $\\varepsilon$.",
        "Rata-rata integralnya paling besar $\\varepsilon$. Ambil $r\\downarrow0$."
      ]}
    ],
    examples:[
      {title:"Rata-Rata Lokal Fungsi Kontinu",problem:"Untuk $f(t)=t^2$, hitung limit rata-rata pada interval $(x-r,x+r)$ saat $r\\to0$.",solution:["Kontinuitas $t^2$ sudah menjamin hasilnya $x^2$.","Secara langsung, rata-rata integral juga memberi $x^2+r^2/3$."],conclusion:"Limitnya $x^2$."}
    ],
    connections:"Teorema diferensiasi Lebesgue memperluas fenomena ini dari fungsi kontinu ke fungsi $L^1_{loc}$ hampir di mana-mana dan menjadi dasar recovery density serta titik densitas himpunan terukur."
  },

  "tup-singular-distribution": {
    title:"Distribusi Singular dan Fungsi Cantor",
    focus:"Distribusi singular memusatkan seluruh massa pada himpunan Lebesgue-null namun tidak terdiri dari atom. Fungsi Cantor adalah contoh klasik CDF kontinu yang turunannya nol hampir di mana-mana tetapi tetap naik dari 0 ke 1.",
    definitions:[
      {title:"Ukuran Singular",statement:"Ukuran $\\nu$ disebut singular terhadap $\\mu$, ditulis $\\nu\\perp\\mu$, jika ada himpunan terukur $N$ dengan $\\mu(N)=0$ dan $\\nu(X\\setminus N)=0$."},
      {title:"Distribusi Singular Kontinu",statement:"Distribusi disebut singular kontinu jika tidak mempunyai atom tetapi ukuran distribusinya singular terhadap ukuran Lebesgue."}
    ],
    results:[
      {kind:"proposition",title:"CDF Distribusi Tanpa Atom Bersifat Kontinu",statement:"Jika ukuran probabilitas pada $\\mathbb R$ tidak mempunyai atom, maka CDF-nya kontinu.",proof:[
        "Untuk CDF $F(x)=P(( -\\infty,x])$, lompatan di $x$ sebesar $F(x)-F(x^-)$.",
        "Hasil ukuran Lebesgue–Stieltjes memberi besar lompatan sama dengan $P(\\{x\\})$.",
        "Jika tidak ada atom, semua massa singleton nol, sehingga semua lompatan nol dan CDF kontinu."
      ]}
    ],
    examples:[
      {title:"Fungsi Cantor",problem:"Jelaskan mengapa distribusi Cantor bersifat singular terhadap Lebesgue.",solution:["Seluruh massanya ditopang pada himpunan Cantor.","Himpunan Cantor memiliki ukuran Lebesgue nol.","Distribusi tidak terdiri dari titik-titik atom individual."],conclusion:"Distribusi Cantor adalah singular kontinu."}
    ],
    connections:"Contoh Cantor memisahkan konsep kontinu, absolut kontinu, dan singular. Ini penting saat memahami dekomposisi Lebesgue–Stieltjes dan Radon–Nikodym."
  },

  "tup-product-space": {
    title:"Ruang Produk dan Ukuran Produk",
    focus:"Ukuran produk membangun ukuran pada pasangan atau tuple berdasarkan ukuran pada masing-masing koordinat. Rectangles terukur menjadi kelas pembangkit sigma-algebra produk.",
    definitions:[
      {title:"Sigma-Algebra Produk",statement:"Untuk $(X,\\mathcal A)$ dan $(Y,\\mathcal B)$, sigma-algebra produk $\\mathcal A\\otimes\\mathcal B$ adalah sigma-algebra yang dibangkitkan rectangles $A\\times B$."},
      {title:"Ukuran Produk",statement:"Jika $\\mu$ dan $\\nu$ sigma-finite, ukuran produk $\\mu\\times\\nu$ adalah ukuran pada sigma-algebra produk yang memenuhi $(\\mu\\times\\nu)(A\\times B)=\\mu(A)\\nu(B)$."}
    ],
    results:[
      {kind:"proposition",title:"Ukuran Rectangle",statement:"Untuk rectangle terukur $A\\times B$, ukuran produk memenuhi $(\\mu\\times\\nu)(A\\times B)=\\mu(A)\\nu(B)$.",proof:[
        "Rumus tersebut adalah data premeasure dasar pada semiring rectangles.",
        "Aditivitas pada dekomposisi rectangle mengikuti aditivitas masing-masing ukuran.",
        "Teorema perluasan Carathéodory memperluas premeasure tersebut secara unik pada kondisi sigma-finite."
      ]}
    ],
    examples:[
      {title:"Luas Persegi Panjang",problem:"Dengan ukuran Lebesgue pada kedua koordinat, hitung ukuran produk $[0,2]\\times[1,4]$.",solution:["Panjang sisi pertama 2.","Panjang sisi kedua 3.","Ukuran produk adalah hasil kali."],conclusion:"Luasnya 6."}
    ],
    connections:"Distribusi bersama dua variabel acak hidup pada ruang produk. Independensi dapat dinyatakan sebagai distribusi bersama yang sama dengan produk distribusi marginal."
  },

  "tup-tonelli": {
    title:"Teorema Tonelli",
    focus:"Tonelli mengizinkan integrasi berulang untuk fungsi nonnegatif tanpa mensyaratkan integrabilitas hingga. Nilai integral boleh tak hingga.",
    definitions:[
      {title:"Section Fungsi",statement:"Untuk $f:X\\times Y\\to[0,\\infty]$, section terhadap $x$ adalah $f_x(y)=f(x,y)$ dan terhadap $y$ adalah $f^y(x)=f(x,y)$."},
      {title:"Fungsi Nonnegatif pada Ruang Produk",statement:"Fungsi $f$ terukur nonnegatif terhadap $\\mathcal A\\otimes\\mathcal B$ jika $f:X\\times Y\\to[0,\\infty]$ terukur."}
    ],
    results:[
      {kind:"theorem",title:"Teorema Tonelli",statement:"Jika $f\\ge0$ terukur pada ruang produk sigma-finite, maka $\\int f\\,d(\\mu\\times\\nu)=\\int_X(\\int_Y f(x,y)d\\nu(y))d\\mu(x)=\\int_Y(\\int_X f(x,y)d\\mu(x))d\\nu(y)$, dengan nilai di $[0,\\infty]$.",proof:[
        "Pernyataan mudah untuk indikator rectangle karena kedua integral berulang memberi $\\mu(A)\\nu(B)$.",
        "Linearitas memperluas hasil ke fungsi sederhana nonnegatif.",
        "Untuk $f\\ge0$ umum, pilih fungsi sederhana $s_n\\uparrow f$. Terapkan hasil fungsi sederhana pada setiap $s_n$.",
        "MCT pada integral produk dan integral berulang mengizinkan limit lewat integral. Ketiga limit menjadi sama."
      ]}
    ],
    examples:[
      {title:"Integral Nonnegatif yang Tak Hingga",problem:"Untuk $f(x,y)=1/(x+y)^2$ pada $(0,1)^2$, apakah Tonelli dapat dipakai walaupun integral mungkin divergen?",solution:["Fungsi nonnegatif dan terukur.","Tonelli tetap berlaku untuk nilai extended real.","Integral berulang dapat digunakan untuk menentukan apakah nilainya hingga atau tak hingga."],conclusion:"Nonnegativitas cukup untuk memakai Tonelli."}
    ],
    connections:"Tonelli adalah versi nonnegatif. Fubini menambahkan integrabilitas absolut agar section integrabel hampir di mana-mana dan integral berulang bernilai hingga."
  },

  "tup-fubini": {
    title:"Teorema Fubini",
    focus:"Fubini mengizinkan pertukaran urutan integrasi untuk fungsi integrabel pada ruang produk.",
    definitions:[
      {title:"Integrabilitas pada Ruang Produk",statement:"Fungsi $f$ integrabel pada $X\\times Y$ jika $\\int|f|d(\\mu\\times\\nu)<\\infty$."},
      {title:"Integral Berulang",statement:"Integral berulang adalah $\\int_X[\\int_Yf(x,y)d\\nu(y)]d\\mu(x)$ atau urutan sebaliknya ketika section dan fungsi hasil integral terdefinisi."}
    ],
    results:[
      {kind:"theorem",title:"Teorema Fubini",statement:"Jika $f\\in L^1(\\mu\\times\\nu)$, maka section integrabel hampir di mana-mana dan kedua integral berulang sama dengan integral produk.",proof:[
        "Terapkan Tonelli pada $|f|$. Karena integral produk $|f|$ hingga, integral section $\\int|f(x,y)|d\\nu(y)$ hingga untuk hampir semua $x$.",
        "Tuliskan $f=f^+-f^-$. Kedua bagian nonnegatif mempunyai integral hingga.",
        "Tonelli pada $f^+$ dan $f^-$ lalu pengurangan memberi kesamaan integral berulang dengan integral produk."
      ]}
    ],
    examples:[
      {title:"Mengganti Urutan Integrasi",problem:"Hitung $\\int_0^1\\int_0^1(x+y)dydx$.",solution:["Fungsi kontinu pada persegi kompak, jadi integrabel.","Integral dalam terhadap $y$ adalah $x+1/2$.","Integral terhadap $x$ memberi $1/2+1/2=1$."],conclusion:"Nilai integral 1 dan urutan integrasi boleh ditukar."}
    ],
    connections:"Kegagalan integrabilitas absolut dapat menyebabkan dua integral iterasi berbeda atau tidak terdefinisi. Karena itu hipotesis Fubini perlu diperiksa, bukan diasumsikan."
  },

  "tup-higher-products": {
    title:"Produk Orde Lebih Tinggi",
    focus:"Konstruksi ukuran produk dapat diiterasi ke dimensi hingga. Asosiasi produk memungkinkan integral multivariat dihitung secara bertahap.",
    definitions:[
      {title:"Sigma-Algebra Produk Hingga",statement:"Untuk ruang terukur $(X_i,\\mathcal A_i)$, sigma-algebra produk $\\bigotimes_{i=1}^n\\mathcal A_i$ dibangkitkan rectangles $A_1\\times\\cdots\\times A_n$."},
      {title:"Ukuran Produk Hingga",statement:"Untuk ukuran sigma-finite $\\mu_i$, ukuran produk $\\bigotimes_{i=1}^n\\mu_i$ memberi massa rectangle sebesar $\\prod_i\\mu_i(A_i)$."}
    ],
    results:[
      {kind:"proposition",title:"Asosiativitas Ukuran Produk Sigma-Finite",statement:"Untuk tiga ukuran sigma-finite, $(\\mu_1\\times\\mu_2)\\times\\mu_3$ dan $\\mu_1\\times(\\mu_2\\times\\mu_3)$ sepakat setelah identifikasi alami ruang produk.",proof:[
        "Kedua ukuran memberi nilai yang sama pada setiap rectangle $A_1\\times A_2\\times A_3$, yaitu produk tiga ukuran.",
        "Rectangles membentuk sistem pembangkit sigma-algebra produk.",
        "Keunikan perluasan sigma-finite memberi kesamaan kedua ukuran pada seluruh sigma-algebra."
      ]}
    ],
    examples:[
      {title:"Volume Balok",problem:"Hitung ukuran Lebesgue tiga dimensi $[0,2]\\times[0,3]\\times[0,4]$.",solution:["Ukuran tiap interval adalah 2, 3, dan 4.","Ukuran produk adalah hasil kali."],conclusion:"Volumenya 24."}
    ],
    connections:"Random vector berdimensi $n$ hidup pada ruang produk dan distribusi bersama dapat dianalisis melalui density multivariat serta integral iterasi."
  },

  "tup-convolution-measure": {
    title:"Konvolusi Ukuran dan Fungsi",
    focus:"Konvolusi menggambarkan distribusi jumlah dua peubah independen dan sekaligus merupakan operasi smoothing pada fungsi.",
    definitions:[
      {title:"Konvolusi Fungsi",statement:"Untuk fungsi yang sesuai, $(f*g)(x)=\\int f(x-y)g(y)dy$."},
      {title:"Konvolusi Ukuran",statement:"Untuk ukuran hingga $\\mu,\\nu$ pada $\\mathbb R$, konvolusi didefinisikan oleh $(\\mu*\\nu)(A)=\\int\\int1_A(x+y)d\\mu(x)d\\nu(y)$."}
    ],
    results:[
      {kind:"proposition",title:"Distribusi Jumlah Independen adalah Konvolusi",statement:"Jika $X$ dan $Y$ independen dengan distribusi $\\mu$ dan $\\nu$, maka distribusi $X+Y$ adalah $\\mu*\\nu$.",proof:[
        "Independensi memberi distribusi bersama $(X,Y)$ sama dengan $\\mu\\times\\nu$.",
        "Untuk himpunan Borel $A$, $P(X+Y\\in A)=\\int\\int1_A(x+y)d\\mu(x)d\\nu(y)$.",
        "Ruas kanan tepat definisi $(\\mu*\\nu)(A)$."
      ]}
    ],
    examples:[
      {title:"Jumlah Dua Bernoulli",problem:"Jika $X,Y$ Bernoulli$(p)$ independen, tentukan $P(X+Y=1)$.",solution:["Kejadian jumlah 1 terjadi pada $(1,0)$ atau $(0,1)$.","Independensi memberi masing-masing probabilitas $p(1-p)$."],conclusion:"$P(X+Y=1)=2p(1-p)$."}
    ],
    connections:"Transformasi Fourier mengubah konvolusi menjadi perkalian. Pada probabilitas, fungsi karakteristik jumlah independen adalah hasil kali fungsi karakteristik masing-masing peubah."
  },

  "tup-laplace-generating": {
    title:"Generating Function dan Transformasi Laplace",
    focus:"Generating function dan transformasi Laplace mengubah distribusi atau fungsi menjadi objek analitik yang sering lebih mudah dimanipulasi, terutama untuk jumlah, momen, dan persamaan renewal.",
    definitions:[
      {title:"Probability Generating Function",statement:"Untuk peubah acak $N$ bernilai bilangan bulat nonnegatif, $G_N(s)=E[s^N]=\\sum_{n\\ge0}P(N=n)s^n$ pada domain konvergensinya."},
      {title:"Transformasi Laplace",statement:"Untuk fungsi atau ukuran pada $[0,\\infty)$, transformasi Laplace berbentuk $L_f(t)=\\int_0^\\infty e^{-tx}f(x)dx$ atau $E[e^{-tX}]$ dalam probabilitas."}
    ],
    results:[
      {kind:"proposition",title:"PGF Jumlah Peubah Independen",statement:"Jika $X,Y$ independen dan bernilai bilangan bulat nonnegatif, maka $G_{X+Y}(s)=G_X(s)G_Y(s)$.",proof:[
        "$G_{X+Y}(s)=E[s^{X+Y}]=E[s^Xs^Y]$.",
        "Independensi membuat ekspektasi hasil kali terfaktor.",
        "Diperoleh $E[s^X]E[s^Y]=G_X(s)G_Y(s)$."
      ]}
    ],
    examples:[
      {title:"PGF Bernoulli",problem:"Tentukan PGF untuk $X\\sim Bernoulli(p)$.",solution:["$X$ bernilai 0 dengan peluang $1-p$ dan 1 dengan peluang $p$.","$G_X(s)=(1-p)s^0+ps^1$."],conclusion:"$G_X(s)=1-p+ps$."}
    ],
    connections:"PGF sangat efektif untuk branching process dan distribusi diskret. Transformasi Laplace digunakan pada renewal, waktu tunggu, dan distribusi nonnegatif."
  },

  "tup-fourier-series": {
    title:"Deret Fourier",
    focus:"Deret Fourier mengekspansi fungsi dalam basis trigonometrik ortogonal pada ruang $L^2$ periodik.",
    definitions:[
      {title:"Koefisien Fourier",statement:"Untuk $f\\in L^1[-\\pi,\\pi]$, koefisien kompleksnya adalah $\\hat f(n)=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}f(x)e^{-inx}dx$."},
      {title:"Sistem Ortonormal Trigonometri",statement:"Fungsi $e_n(x)=e^{inx}$ setelah normalisasi membentuk sistem ortonormal di $L^2[-\\pi,\\pi]$."}
    ],
    results:[
      {kind:"proposition",title:"Ketaksamaan Bessel",statement:"Untuk sistem ortonormal $(e_n)$ dan $f\\in H$, berlaku $\\sum_{n=1}^N|\\langle f,e_n\\rangle|^2\\le\\|f\\|^2$.",proof:[
        "Ambil proyeksi hingga $p_N=\\sum_{n=1}^N\\langle f,e_n\\rangle e_n$.",
        "Vektor $f-p_N$ ortogonal terhadap $p_N$.",
        "Pythagoras memberi $\\|f\\|^2=\\|f-p_N\\|^2+\\|p_N\\|^2\\ge\\|p_N\\|^2=\\sum_{n=1}^N|\\langle f,e_n\\rangle|^2$."
      ]}
    ],
    examples:[
      {title:"Koefisien Fungsi Konstan",problem:"Tentukan koefisien Fourier kompleks $f(x)=1$ pada $[-\\pi,\\pi]$.",solution:["Untuk $n=0$, integral memberi 1.","Untuk $n\\ne0$, integral eksponensial satu periode bernilai nol."],conclusion:"Hanya koefisien $n=0$ yang tidak nol."}
    ],
    connections:"Deret Fourier adalah manifestasi geometri Hilbert $L^2$. Transformasi Fourier dapat dipandang sebagai analog kontinu ketika domain tidak periodik."
  },

  "tup-fourier-transform": {
    title:"Transformasi Fourier",
    focus:"Transformasi Fourier memindahkan fungsi dari domain posisi ke domain frekuensi dan mengubah konvolusi menjadi perkalian.",
    definitions:[
      {title:"Transformasi Fourier $L^1$",statement:"Untuk $f\\in L^1(\\mathbb R)$, salah satu konvensi adalah $\\hat f(\\xi)=\\int_{\\mathbb R}f(x)e^{-i\\xi x}dx$."},
      {title:"Konvolusi",statement:"Untuk $f,g\\in L^1$, $(f*g)(x)=\\int f(x-y)g(y)dy$."}
    ],
    results:[
      {kind:"theorem",title:"Teorema Konvolusi",statement:"Jika $f,g\\in L^1(\\mathbb R)$, maka $\\widehat{f*g}(\\xi)=\\hat f(\\xi)\\hat g(\\xi)$.",proof:[
        "Tuliskan transformasi $\\int\\int f(x-y)g(y)e^{-i\\xi x}dydx$.",
        "Fubini sah karena $\\int\\int|f(x-y)g(y)|dydx=\\|f\\|_1\\|g\\|_1<\\infty$.",
        "Gunakan substitusi $u=x-y$. Faktor eksponensial menjadi $e^{-i\\xi u}e^{-i\\xi y}$ dan integral terpisah menjadi produk $\\hat f(\\xi)\\hat g(\\xi)$."
      ]}
    ],
    examples:[
      {title:"Transformasi Massa Probabilitas",problem:"Apa hubungan fungsi karakteristik $\\varphi_X(t)$ dengan transformasi Fourier distribusi $X$?",solution:["Fungsi karakteristik didefinisikan $E[e^{itX}]$.","Ini adalah integral eksponensial terhadap ukuran distribusi $X$."],conclusion:"Fungsi karakteristik adalah transformasi Fourier ukuran probabilitas dengan konvensi tanda yang sesuai."}
    ],
    connections:"Teorema konvolusi menjelaskan mengapa jumlah independen mudah dianalisis dengan fungsi karakteristik. Plancherel memperluas transformasi Fourier ke $L^2$."
  },

  "tup-plancherel": {
    title:"Teorema Plancherel",
    focus:"Teorema Plancherel memperluas transformasi Fourier dari fungsi $L^1\\cap L^2$ ke operator isometrik pada $L^2$ setelah normalisasi.",
    definitions:[
      {title:"Isometri",statement:"Operator linear $T$ disebut isometri jika $\\|Tf\\|=\\|f\\|$ untuk semua $f$."},
      {title:"Transformasi Fourier $L^2$",statement:"Transformasi Fourier pada $L^2$ didefinisikan sebagai perluasan kontinu dari transformasi pada kelas padat seperti $L^1\\cap L^2$."}
    ],
    results:[
      {kind:"proposition",title:"Isometri Mempertahankan Jarak",statement:"Jika $T$ isometri linear, maka $\\|Tf-Tg\\|=\\|f-g\\|$ untuk semua $f,g$.",proof:[
        "Linearitas memberi $Tf-Tg=T(f-g)$.",
        "Sifat isometri memberi $\\|T(f-g)\\|=\\|f-g\\|$.",
        "Gabungkan kedua identitas."
      ]}
    ],
    examples:[
      {title:"Konsekuensi Norm Fourier",problem:"Jika normalisasi Fourier Plancherel memberi $\\|\\hat f\\|_2=\\|f\\|_2$ dan $\\|f\\|_2=3$, tentukan norma transformasinya.",solution:["Gunakan langsung sifat isometri."],conclusion:"$\\|\\hat f\\|_2=3$."}
    ],
    connections:"Plancherel menjadikan Fourier transform operator Hilbert-space. Ia menghubungkan energi fungsi di domain asli dan domain frekuensi."
  },

  "tup-kolmogorov-model": {
    title:"Model Peluang Kolmogorov",
    focus:"Model Kolmogorov mendefinisikan peluang sebagai ukuran bernilai satu pada ruang sampel. Dengan ini, teori peluang menjadi bagian khusus teori ukuran.",
    definitions:[
      {title:"Ruang Peluang",statement:"Ruang peluang adalah triple $(\\Omega,\\mathcal F,P)$ dengan $\\mathcal F$ sigma-algebra pada $\\Omega$ dan $P$ ukuran yang memenuhi $P(\\Omega)=1$."},
      {title:"Kejadian",statement:"Setiap $A\\in\\mathcal F$ disebut kejadian, dan $P(A)$ adalah peluang kejadian tersebut."}
    ],
    results:[
      {kind:"proposition",title:"Aturan Komplemen",statement:"Untuk setiap kejadian $A$, berlaku $P(A^c)=1-P(A)$.",proof:[
        "$A$ dan $A^c$ saling lepas serta $A\\cup A^c=\\Omega$.",
        "Aditivitas memberi $P(\\Omega)=P(A)+P(A^c)$.",
        "Karena $P(\\Omega)=1$, susun ulang untuk memperoleh rumus."
      ]}
    ],
    examples:[
      {title:"Ruang Sampel Dadu",problem:"Untuk dadu fair, tentukan peluang kejadian bilangan genap.",solution:["Ruang sampel berisi enam hasil dengan peluang sama.","Kejadian genap adalah $\\{2,4,6\\}$."],conclusion:"Peluangnya $3/6=1/2$."}
    ],
    connections:"Semua teorema ukuran berlaku untuk peluang. Perbedaannya hanya normalisasi total mass menjadi satu, yang memungkinkan interpretasi probabilistik."
  },

  "tup-random-vectors": {
    title:"Variabel Acak dan Vektor Acak",
    focus:"Variabel acak adalah fungsi terukur. Random vector memperluasnya ke pemetaan terukur bernilai $\\mathbb R^d$ dan distribusinya adalah pushforward ukuran peluang.",
    definitions:[
      {title:"Variabel Acak",statement:"Variabel acak real adalah fungsi terukur $X:(\\Omega,\\mathcal F)\\to(\\mathbb R,\\mathcal B(\\mathbb R))$."},
      {title:"Vektor Acak",statement:"Vektor acak $X=(X_1,\\ldots,X_d)$ adalah fungsi terukur dari ruang peluang ke $\\mathbb R^d$ dengan sigma-algebra Borel."}
    ],
    results:[
      {kind:"proposition",title:"Komponen Terukur Menghasilkan Vektor Acak Terukur",statement:"Jika setiap $X_i$ terukur, maka $X=(X_1,\\ldots,X_d)$ terukur ke $\\mathbb R^d$.",proof:[
        "Rectangles Borel $B_1\\times\\cdots\\times B_d$ membangkitkan sigma-algebra Borel $\\mathbb R^d$.",
        "Pra-citra rectangle adalah $\\bigcap_iX_i^{-1}(B_i)$.",
        "Setiap pra-citra komponen terukur dan sigma-algebra tertutup terhadap irisan hingga. Teorema kelas pembangkit memberi keterukuran $X$."
      ]}
    ],
    examples:[
      {title:"Vektor Dua Lemparan",problem:"Dua dadu dilempar dan $X,Y$ adalah nilai masing-masing. Apakah $(X,Y)$ vektor acak?",solution:["Masing-masing koordinat adalah fungsi terukur pada ruang sampel hingga.","Komponen terukur menghasilkan pemetaan pasangan yang terukur."],conclusion:"$(X,Y)$ adalah vektor acak."}
    ],
    connections:"Distribusi bersama adalah pushforward $P$ oleh random vector. Marginal diperoleh dengan proyeksi koordinat dan independensi berkaitan dengan faktorisasi distribusi bersama."
  },

  "tup-kolmogorov-consistency": {
    title:"Teorema Konsistensi Kolmogorov",
    focus:"Teorema konsistensi Kolmogorov membangun proses stokastik dari keluarga distribusi berdimensi hingga yang konsisten.",
    definitions:[
      {title:"Distribusi Berdimensi Hingga",statement:"Untuk proses kandidat $(X_t)_{t\\in T}$, distribusi berdimensi hingga adalah hukum vektor $(X_{t_1},\\ldots,X_{t_n})$ untuk pilihan hingga indeks."},
      {title:"Konsistensi",statement:"Keluarga distribusi berdimensi hingga konsisten jika kompatibel terhadap permutasi koordinat dan marginalisasi ketika sebagian koordinat dihapus."}
    ],
    results:[
      {kind:"proposition",title:"Distribusi Proses Nyata Otomatis Konsisten",statement:"Setiap proses stokastik yang sudah terdefinisi menghasilkan keluarga distribusi berdimensi hingga yang konsisten.",proof:[
        "Permutasi indeks hanya memetakan vektor acak melalui permutasi koordinat, sehingga distribusi berubah sesuai pushforward yang konsisten.",
        "Menghapus satu koordinat berarti mengambil marginal dari distribusi bersama.",
        "Kedua operasi sesuai dengan definisi distribusi vektor yang berasal dari proses yang sama."
      ]}
    ],
    examples:[
      {title:"Konsistensi Marginal Gaussian",problem:"Jika setiap vektor hingga proses Gaussian mempunyai mean nol dan covariance matrix yang diambil dari kernel $K(s,t)$, apa syarat dasar yang diperlukan?",solution:["Setiap covariance matrix harus positive semidefinite.","Submatriks untuk subset indeks harus sesuai dengan covariance distribusi marginal."],conclusion:"Kernel covariance yang konsisten menentukan keluarga distribusi Gaussian berdimensi hingga."}
    ],
    connections:"Teorema konsistensi penuh menjamin keberadaan ukuran pada ruang lintasan dari data berdimensi hingga. Ini menjadi fondasi konstruksi proses seperti Brownian motion."
  },

  "tup-independent-events": {
    title:"Kejadian dan Variabel Acak Independen",
    focus:"Independensi menyatakan bahwa informasi satu objek tidak mengubah hukum objek lain dalam arti faktorisasi peluang.",
    definitions:[
      {title:"Kejadian Independen",statement:"Kejadian $A$ dan $B$ independen jika $P(A\\cap B)=P(A)P(B)$. Keluarga kejadian saling independen jika setiap irisan hingga memfaktorkan."},
      {title:"Variabel Acak Independen",statement:"Variabel acak $X_1,\\ldots,X_n$ independen jika sigma-algebra $\\sigma(X_i)$ saling independen."}
    ],
    results:[
      {kind:"proposition",title:"Fungsi Terukur dari Variabel Independen Tetap Independen",statement:"Jika $X$ dan $Y$ independen serta $f,g$ terukur, maka $f(X)$ dan $g(Y)$ independen.",proof:[
        "$\\sigma(f(X))\\subseteq\\sigma(X)$ dan $\\sigma(g(Y))\\subseteq\\sigma(Y)$ karena komposisi terukur.",
        "Sub-sigma-algebra dari dua sigma-algebra independen tetap independen.",
        "Dengan definisi independensi variabel acak, $f(X)$ dan $g(Y)$ independen."
      ]}
    ],
    examples:[
      {title:"Dua Koin",problem:"Untuk dua koin fair independen, $A$ menyatakan koin pertama kepala dan $B$ koin kedua kepala. Periksa independensi.",solution:["$P(A)=P(B)=1/2$.","$P(A\\cap B)=1/4$."],conclusion:"Karena $1/4=(1/2)(1/2)$, kedua kejadian independen."}
    ],
    connections:"Independensi memungkinkan ekspektasi produk memfaktor dalam kondisi integrabilitas. Ia juga menjadi syarat penting pada LLN, CLT, Borel–Cantelli kedua, dan teori random walk."
  },

  "tup-borel-cantelli": {
    title:"Lemma Borel–Cantelli",
    focus:"Lemma Borel–Cantelli menghubungkan jumlah peluang kejadian dengan peluang bahwa kejadian tersebut terjadi tak hingga sering.",
    definitions:[
      {title:"Limsup Kejadian",statement:"$\\limsup_nA_n=\\bigcap_{m=1}^\\infty\\bigcup_{n\\ge m}A_n$ adalah kejadian bahwa $A_n$ terjadi untuk tak hingga banyak indeks."},
      {title:"Terjadi Tak Hingga Sering",statement:"Notasi $A_n\\ i.o.$ berarti elemen sampel berada pada tak hingga banyak $A_n$."}
    ],
    results:[
      {kind:"lemma",title:"Borel–Cantelli Pertama",statement:"Jika $\\sum_nP(A_n)<\\infty$, maka $P(A_n\\ i.o.)=0$.",proof:[
        "Untuk setiap $m$, $\\limsup A_n\\subseteq\\bigcup_{n\\ge m}A_n$.",
        "Subaditivitas memberi $P(\\limsup A_n)\\le\\sum_{n\\ge m}P(A_n)$.",
        "Ekor deret konvergen menuju nol saat $m\\to\\infty$, sehingga peluang limsup sama dengan nol."
      ]}
    ],
    examples:[
      {title:"Kejadian dengan Peluang $1/n^2$",problem:"Jika $P(A_n)=1/n^2$, apa yang dapat disimpulkan tentang banyaknya kejadian yang terjadi?",solution:["Deret $\\sum1/n^2$ konvergen.","Borel–Cantelli pertama berlaku tanpa independensi."],conclusion:"Dengan peluang satu, hanya hingga banyak $A_n$ yang terjadi."}
    ],
    connections:"Arah kedua Borel–Cantelli membutuhkan independensi atau kondisi pengganti. Lemma ini sangat penting dalam pembuktian konvergensi hampir pasti."
  },

  "tup-tail-zero-one": {
    title:"Tail Sigma-Algebra dan Hukum 0–1 Kolmogorov",
    focus:"Tail event hanya bergantung pada perilaku asimtotik urutan variabel dan tidak berubah jika hingga banyak koordinat awal dimodifikasi.",
    definitions:[
      {title:"Tail Sigma-Algebra",statement:"Untuk urutan $X_n$, tail sigma-algebra adalah $\\mathcal T=\\bigcap_{n=1}^\\infty\\sigma(X_n,X_{n+1},\\ldots)$."},
      {title:"Tail Event",statement:"Kejadian $A$ disebut tail event jika $A\\in\\mathcal T$."}
    ],
    results:[
      {kind:"theorem",title:"Hukum 0–1 Kolmogorov",statement:"Jika $X_1,X_2,\\ldots$ independen, maka setiap tail event $A$ mempunyai peluang 0 atau 1.",proof:[
        "Untuk setiap $n$, tail event $A$ terukur terhadap $\\sigma(X_{n+1},X_{n+2},\\ldots)$, sehingga independen dari $\\sigma(X_1,\\ldots,X_n)$.",
        "Kelas kejadian yang independen dari $A$ merupakan sistem $\\lambda$ yang memuat cylinder events dari finitely many coordinates. Teorema $\\pi$-$\\lambda$ memberi bahwa $A$ independen dari sigma-algebra yang dibangkitkan seluruh urutan.",
        "Karena $A$ sendiri berada pada sigma-algebra tersebut, $A$ independen dari dirinya. Diperoleh $P(A)=P(A)^2$, sehingga $P(A)\\in\\{0,1\\}$."
      ]}
    ],
    examples:[
      {title:"Konvergensi Deret sebagai Tail Event",problem:"Jelaskan mengapa kejadian bahwa $\\sum_nX_n$ konvergen merupakan tail event.",solution:["Mengubah hingga banyak suku awal hanya mengubah jumlah parsial dengan konstanta hingga.","Konvergensi atau divergensi deret tidak berubah oleh modifikasi hingga banyak suku."],conclusion:"Kejadian konvergensi bergantung hanya pada ekor urutan."}
    ],
    connections:"Hukum 0–1 memberi probabilitas ekstrem untuk banyak sifat asimtotik urutan independen, termasuk beberapa kejadian konvergensi."
  }
};

export const measureProbabilityContentB = buildMeasureProbabilityContent(specs);
