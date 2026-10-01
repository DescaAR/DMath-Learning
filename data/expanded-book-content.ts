import type { BookLessonContent, BookFormalItem, BookExample } from "@/data/book-content-types";
import { expandedBookSubjects } from "@/data/expanded-book-curricula";

type Notation={symbol:string;meaning:string};

const notationBySubject:Record<string,Notation[]>={
  kalkulus:[
    {symbol:"$f:D\to\mathbb R$",meaning:"fungsi real pada domain $D$"},
    {symbol:"$f'(x)$",meaning:"turunan fungsi $f$ di $x$"},
    {symbol:"$\int_a^b f(x)\,dx$",meaning:"integral tentu $f$ pada $[a,b]$"},
    {symbol:"$\nabla f$",meaning:"gradien fungsi beberapa variabel"},
    {symbol:"$\mathbf r(t)$",meaning:"fungsi bernilai vektor atau parametrik"},
  ],
  "teori-graf":[
    {symbol:"$G=(V,E)$",meaning:"graf dengan himpunan simpul $V$ dan sisi $E$"},
    {symbol:"$\deg(v)$",meaning:"derajat simpul $v$"},
    {symbol:"$P_n, C_n, K_n$",meaning:"path, cycle, dan graf lengkap berorde $n$"},
    {symbol:"$\chi(G)$",meaning:"bilangan kromatik graf $G$"},
    {symbol:"$A(G)$",meaning:"matriks adjacency graf $G$"},
  ],
  "teori-bilangan-olimpiade":[
    {symbol:"$a\mid b$",meaning:"$a$ membagi $b$"},
    {symbol:"$a\equiv b\pmod m$",meaning:"$a$ kongruen dengan $b$ modulo $m$"},
    {symbol:"$\gcd(a,b)$",meaning:"faktor persekutuan terbesar"},
    {symbol:"$\varphi(n)$",meaning:"fungsi totient Euler"},
    {symbol:"$v_p(n)$",meaning:"eksponen prima $p$ pada faktorisasi $n$"},
  ],
  "persamaan-diferensial":[
    {symbol:"$y'=f(x,y)$",meaning:"persamaan diferensial orde satu"},
    {symbol:"$y^{(n)}$",meaning:"turunan ke-$n$"},
    {symbol:"$y(x_0)=y_0$",meaning:"kondisi awal"},
    {symbol:"$\mathbf x'=A\mathbf x$",meaning:"sistem linear orde satu"},
    {symbol:"$\mathcal L\{f\}(s)$",meaning:"transformasi Laplace dari $f$"},
  ],
};

function chapterFormal(subject:string,chapter:string):BookFormalItem[]{
  if(subject==="kalkulus"){
    if(chapter==="1")return[
      {kind:"definition",title:"Fungsi",statement:"Fungsi $f:D\to Y$ memasangkan setiap $x\in D$ dengan tepat satu nilai $f(x)\in Y$."},
      {kind:"proposition",title:"Komposisi Fungsi",statement:"Jika $f:A\to B$ dan $g:B\to C$, komposisi $(g\circ f)(x)=g(f(x))$ merupakan fungsi dari $A$ ke $C$.",proof:["Diambil sebarang $x\in A$.","Karena $f(x)\in B$, nilai $g(f(x))$ terdefinisi dan tunggal.","Dengan demikian $g\circ f$ memenuhi definisi fungsi."]},
      {kind:"note",title:"Representasi",statement:"Satu fungsi dapat dipahami melalui rumus, tabel, grafik, atau deskripsi verbal; domain dan range harus selalu diperiksa."},
    ];
    if(chapter==="2")return[
      {kind:"definition",title:"Limit Fungsi",statement:"Nilai $L$ disebut limit $f(x)$ ketika $x\to a$ apabila untuk setiap $\varepsilon>0$ terdapat $\delta>0$ sehingga $0<|x-a|<\delta$ mengakibatkan $|f(x)-L|<\varepsilon$."},
      {kind:"theorem",title:"Keunikan Limit",statement:"Jika limit $f(x)$ ketika $x\to a$ ada, nilainya tunggal.",proof:["Diandaikan $f(x)\to L$ dan $f(x)\to M$ dengan $L\ne M$.","Diambil $\varepsilon=|L-M|/3$. Untuk $x$ cukup dekat ke $a$, berlaku $|f(x)-L|<\varepsilon$ dan $|f(x)-M|<\varepsilon$.","Ketaksamaan segitiga memberi $|L-M|<2\varepsilon=2|L-M|/3$, suatu kontradiksi.","Dengan demikian $L=M$."]},
      {kind:"definition",title:"Kontinuitas",statement:"Fungsi $f$ kontinu di $a$ apabila $\lim_{x\to a}f(x)=f(a)$."},
    ];
    if(chapter==="3"||chapter==="4")return[
      {kind:"definition",title:"Turunan",statement:"Turunan $f$ di $a$ didefinisikan oleh $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ apabila limit tersebut ada."},
      {kind:"theorem",title:"Diferensiabilitas Mengakibatkan Kontinuitas",statement:"Jika $f$ terdiferensial di $a$, maka $f$ kontinu di $a$.",proof:["Dituliskan $f(a+h)-f(a)=h\,\frac{f(a+h)-f(a)}h$.","Ketika $h\to0$, faktor pertama menuju $0$ dan faktor kedua menuju $f'(a)$.","Oleh karena itu $f(a+h)-f(a)\to0$, sehingga $f(a+h)\to f(a)$."]},
      {kind:"theorem",title:"Teorema Nilai Rata-rata",statement:"Jika $f$ kontinu pada $[a,b]$ dan terdiferensial pada $(a,b)$, terdapat $c\in(a,b)$ dengan $f'(c)=\frac{f(b)-f(a)}{b-a}$."},
    ];
    if(["5","6","7","8"].includes(chapter))return[
      {kind:"definition",title:"Integral Tentu",statement:"Integral tentu dapat didefinisikan sebagai limit jumlah Riemann $\sum f(t_i)\Delta x_i$ ketika norma partisi menuju nol, apabila limit tersebut ada dan tidak bergantung pada pilihan label."},
      {kind:"theorem",title:"Teorema Dasar Kalkulus",statement:"Untuk fungsi kontinu, diferensiasi dan integrasi merupakan operasi yang saling berhubungan melalui fungsi akumulasi dan antiturunan."},
      {kind:"proposition",title:"Linearitas Integral",statement:"Jika $f,g$ integrabel dan $\alpha,\beta$ skalar, maka $\int(\alpha f+\beta g)=\alpha\int f+\beta\int g$."},
    ];
    if(chapter==="9"||chapter==="17")return[
      {kind:"definition",title:"Solusi Persamaan Diferensial",statement:"Fungsi $y$ disebut solusi suatu persamaan diferensial pada interval apabila $y$ memiliki turunan yang diperlukan dan memenuhi persamaan pada setiap titik interval."},
      {kind:"definition",title:"Masalah Nilai Awal",statement:"Masalah nilai awal terdiri atas persamaan diferensial beserta nilai fungsi atau turunannya pada suatu titik awal."},
      {kind:"note",title:"Analisis Kualitatif dan Numerik",statement:"Selain solusi eksplisit, medan kemiringan, kestabilan, dan aproksimasi numerik dapat digunakan untuk memahami perilaku solusi."},
    ];
    if(chapter==="10")return[
      {kind:"definition",title:"Konvergensi Deret",statement:"Deret $\sum a_n$ konvergen apabila barisan jumlah parsial $S_N=\sum_{n=1}^N a_n$ mempunyai limit hingga."},
      {kind:"theorem",title:"Deret Geometri",statement:"Untuk $|r|<1$, berlaku $\sum_{n=0}^{\infty}r^n=\frac1{1-r}$.",proof:["Jumlah parsial adalah $S_N=(1-r^{N+1})/(1-r)$ untuk $r\ne1$.","Karena $|r|<1$, diperoleh $r^{N+1}\to0$.","Dengan demikian $S_N\to1/(1-r)$."]},
      {kind:"note",title:"Pemilihan Uji",statement:"Uji konvergensi dipilih berdasarkan struktur suku: perbandingan untuk suku positif, rasio/akar untuk faktorial atau pangkat, dan alternating test untuk tanda berselang-seling."},
    ];
    if(chapter==="11")return[
      {kind:"definition",title:"Kurva Parametrik",statement:"Kurva parametrik diberikan oleh $x=x(t)$ dan $y=y(t)$; parameter menentukan posisi sekaligus orientasi gerak pada kurva."},
      {kind:"definition",title:"Koordinat Polar",statement:"Koordinat polar $(r,\theta)$ mewakili titik dengan $x=r\cos\theta$ dan $y=r\sin\theta$."},
      {kind:"proposition",title:"Turunan Parametrik",statement:"Jika $dx/dt\ne0$, maka $dy/dx=(dy/dt)/(dx/dt)$."},
    ];
    if(["12","13"].includes(chapter))return[
      {kind:"definition",title:"Vektor",statement:"Vektor di $\mathbb R^n$ adalah tuple terurut yang dapat dijumlahkan dan dikalikan skalar secara komponen."},
      {kind:"definition",title:"Hasil Kali Titik",statement:"Untuk $u,v\in\mathbb R^n$, $u\cdot v=\sum_i u_iv_i$; dua vektor tak nol ortogonal apabila hasil kali titiknya nol."},
      {kind:"proposition",title:"Turunan Fungsi Vektor",statement:"Turunan fungsi vektor dihitung komponen demi komponen, selama setiap komponen terdiferensial."},
    ];
    if(chapter==="14")return[
      {kind:"definition",title:"Turunan Parsial",statement:"Turunan parsial terhadap satu variabel diperoleh dengan mendiferensialkan terhadap variabel tersebut sambil menahan variabel lain tetap."},
      {kind:"definition",title:"Gradien",statement:"Gradien $\nabla f$ adalah vektor seluruh turunan parsial pertama dan menunjuk arah kenaikan paling cepat ketika gradien tidak nol."},
      {kind:"proposition",title:"Turunan Arah",statement:"Jika $f$ terdiferensial dan $u$ vektor satuan, maka $D_uf=\nabla f\cdot u$."},
    ];
    if(chapter==="15")return[
      {kind:"definition",title:"Integral Lipat",statement:"Integral lipat mengakumulasikan nilai fungsi pada daerah berdimensi dua atau tiga melalui limit jumlah atas partisi daerah."},
      {kind:"theorem",title:"Prinsip Fubini",statement:"Di bawah hipotesis integrabilitas yang sesuai, integral ganda dapat dihitung sebagai integral iterasi."},
      {kind:"note",title:"Jacobian",statement:"Perubahan koordinat memerlukan faktor Jacobian yang mengukur perubahan skala luas atau volume."},
    ];
    if(chapter==="16")return[
      {kind:"definition",title:"Medan Vektor",statement:"Medan vektor memasangkan setiap titik domain dengan sebuah vektor."},
      {kind:"definition",title:"Medan Konservatif",statement:"Medan $F$ disebut konservatif apabila terdapat fungsi potensial $\phi$ dengan $F=\nabla\phi$."},
      {kind:"theorem",title:"Teorema Fundamental Integral Garis",statement:"Jika $F=\nabla\phi$, integral garis $\int_C F\cdot d\mathbf r$ hanya bergantung pada titik awal dan akhir lintasan."},
    ];
    return[{kind:"note",title:"Fondasi Kalkulus",statement:"Submateri ini memperkuat fondasi aljabar, geometri, limit, atau vektor yang digunakan dalam kalkulus."}];
  }

  if(subject==="teori-graf"){
    if(chapter==="1")return[
      {kind:"definition",title:"Graf",statement:"Graf $G=(V,E)$ terdiri atas himpunan simpul $V$ dan keluarga sisi $E$ yang menghubungkan pasangan simpul."},
      {kind:"definition",title:"Derajat",statement:"Derajat $\deg(v)$ adalah banyak sisi yang insiden dengan $v$, dengan loop dihitung dua kali pada graf umum."},
      {kind:"theorem",title:"Handshaking Lemma",statement:"Untuk graf hingga, $\sum_{v\in V}\deg(v)=2|E|$.",proof:["Setiap sisi mempunyai dua ujung.","Ketika seluruh derajat dijumlahkan, setiap sisi dihitung tepat dua kali.","Akibatnya jumlah derajat sama dengan $2|E|$."]},
    ];
    if(chapter==="2")return[
      {kind:"definition",title:"Path dan Cycle",statement:"Path adalah walk tanpa pengulangan simpul, sedangkan cycle adalah walk tertutup yang tidak mengulang simpul selain titik awal-akhir."},
      {kind:"definition",title:"Keterhubungan",statement:"Graf disebut terhubung apabila setiap dua simpul dihubungkan oleh suatu path."},
      {kind:"theorem",title:"Kriteria Euler",statement:"Graf terhubung mempunyai sirkuit Euler jika dan hanya jika setiap simpul berderajat genap."},
    ];
    if(chapter==="3")return[
      {kind:"definition",title:"Pohon",statement:"Pohon adalah graf terhubung tanpa cycle."},
      {kind:"theorem",title:"Karakterisasi Ukuran Pohon",statement:"Setiap pohon dengan $n$ simpul mempunyai tepat $n-1$ sisi.",proof:["Kasus $n=1$ jelas.","Setiap pohon taktrivial memiliki daun. Hapus satu daun dan sisi insidennya; hasilnya tetap pohon dengan $n-1$ simpul.","Hipotesis induksi memberi $n-2$ sisi pada pohon sisa, lalu pengembalian daun memberi $n-1$ sisi."]},
      {kind:"proposition",title:"Path Unik",statement:"Dalam sebuah pohon terdapat tepat satu path antara setiap pasangan simpul."},
    ];
    if(chapter==="4")return[
      {kind:"definition",title:"Graf Planar",statement:"Graf planar adalah graf yang dapat digambar di bidang tanpa perpotongan sisi kecuali pada simpul bersama."},
      {kind:"theorem",title:"Formula Euler",statement:"Untuk graf planar terhubung, $|V|-|E|+|F|=2$."},
      {kind:"corollary",title:"Batas Sisi Graf Planar Sederhana",statement:"Jika graf planar sederhana terhubung mempunyai $n\ge3$ simpul, maka $|E|\le3n-6$."},
    ];
    if(chapter==="5")return[
      {kind:"definition",title:"Pewarnaan Proper",statement:"Pewarnaan simpul proper memberi warna pada simpul sehingga setiap dua simpul bertetangga memperoleh warna berbeda."},
      {kind:"definition",title:"Bilangan Kromatik",statement:"Bilangan kromatik $\chi(G)$ adalah banyak warna minimum yang diperlukan untuk pewarnaan simpul proper."},
      {kind:"theorem",title:"Teorema Empat Warna",statement:"Setiap graf planar dapat diwarnai secara proper menggunakan paling banyak empat warna."},
    ];
    if(chapter==="6")return[
      {kind:"definition",title:"Matching",statement:"Matching adalah himpunan sisi yang tidak mempunyai ujung bersama."},
      {kind:"theorem",title:"Teorema Hall",statement:"Graf bipartit dengan bagian $X,Y$ mempunyai matching yang menjodohkan seluruh simpul $X$ jika dan hanya jika $|N(S)|\ge|S|$ untuk setiap $S\subseteq X$."},
      {kind:"theorem",title:"Max-Flow Min-Cut",statement:"Nilai aliran maksimum dari sumber ke tujuan sama dengan kapasitas minimum suatu cut sumber–tujuan."},
    ];
    if(chapter==="7")return[
      {kind:"definition",title:"Matroid",statement:"Matroid adalah pasangan $(E,\mathcal I)$ dengan keluarga himpunan independen yang memenuhi aksioma herediter dan pertukaran."},
      {kind:"definition",title:"Basis Matroid",statement:"Basis adalah himpunan independen maksimal; seluruh basis suatu matroid mempunyai kardinalitas sama."},
      {kind:"proposition",title:"Matroid Grafis",statement:"Himpunan sisi acyclic suatu graf membentuk keluarga independen dari sebuah matroid, yaitu cycle matroid."},
    ];
    return[{kind:"note",title:"Algoritma Graf",statement:"Algoritma graf dinilai dari kebenaran, terminasi, dan kompleksitasnya; struktur graf sering memungkinkan pencarian dan optimisasi yang efisien."}];
  }

  if(subject==="teori-bilangan-olimpiade"){
    if(chapter==="1")return[
      {kind:"definition",title:"Keterbagian",statement:"Untuk $a,b\in\mathbb Z$, ditulis $a\mid b$ apabila terdapat $k\in\mathbb Z$ dengan $b=ak$."},
      {kind:"theorem",title:"Teorema Bézout",statement:"Untuk $a,b$ tidak keduanya nol, terdapat $x,y\in\mathbb Z$ sehingga $ax+by=\gcd(a,b)$."},
      {kind:"theorem",title:"Teorema Fundamental Aritmetika",statement:"Setiap bilangan bulat positif lebih dari $1$ mempunyai faktorisasi prima yang unik hingga urutan faktor."},
    ];
    if(chapter==="2")return[
      {kind:"definition",title:"Kongruensi",statement:"$a\equiv b\pmod m$ apabila $m\mid(a-b)$."},
      {kind:"theorem",title:"Teorema Kecil Fermat",statement:"Jika $p$ prima dan $p\nmid a$, maka $a^{p-1}\equiv1\pmod p$."},
      {kind:"theorem",title:"Teorema Euler",statement:"Jika $\gcd(a,n)=1$, maka $a^{\varphi(n)}\equiv1\pmod n$."},
    ];
    if(chapter==="3")return[
      {kind:"definition",title:"Fungsi Multiplikatif",statement:"Fungsi aritmetika $f$ disebut multiplikatif apabila $f(mn)=f(m)f(n)$ untuk $\gcd(m,n)=1$."},
      {kind:"proposition",title:"Banyak Pembagi",statement:"Jika $n=\prod p_i^{\alpha_i}$, maka banyak pembagi positif $n$ adalah $\tau(n)=\prod(\alpha_i+1)$."},
      {kind:"proposition",title:"Formula Totient",statement:"Jika $n=\prod p_i^{\alpha_i}$, maka $\varphi(n)=n\prod_{p\mid n}(1-1/p)$."},
    ];
    if(chapter==="4")return[
      {kind:"definition",title:"Persamaan Diophantine",statement:"Persamaan Diophantine adalah persamaan yang solusinya dibatasi pada bilangan bulat atau bilangan asli."},
      {kind:"proposition",title:"Persamaan Linear Diophantine",statement:"Persamaan $ax+by=c$ mempunyai solusi integer jika dan hanya jika $\gcd(a,b)\mid c$."},
      {kind:"note",title:"Strategi",statement:"Paritas, faktorisasi, kongruensi, descent, dan Vieta jumping digunakan untuk mempersempit atau mentransformasikan himpunan solusi."},
    ];
    if(chapter==="5")return[
      {kind:"definition",title:"Orde Multiplikatif",statement:"Untuk $\gcd(a,n)=1$, orde $a$ modulo $n$ adalah bilangan positif terkecil $r$ dengan $a^r\equiv1\pmod n$."},
      {kind:"proposition",title:"Orde Membagi Totient",statement:"Orde $a$ modulo $n$ membagi $\varphi(n)$."},
      {kind:"definition",title:"Akar Primitif",statement:"Akar primitif modulo $n$ adalah elemen yang ordenya sama dengan $\varphi(n)$."},
    ];
    if(chapter==="6")return[
      {kind:"definition",title:"Valuasi Prima",statement:"$v_p(n)$ adalah eksponen terbesar $k$ sehingga $p^k\mid n$."},
      {kind:"proposition",title:"Valuasi Hasil Kali",statement:"$v_p(ab)=v_p(a)+v_p(b)$."},
      {kind:"theorem",title:"Formula Legendre",statement:"Untuk prima $p$, $v_p(n!)=\sum_{k\ge1}\left\lfloor n/p^k\right\rfloor$."},
    ];
    if(chapter==="7")return[
      {kind:"theorem",title:"Teorema Sisa",statement:"Untuk polinom $P(x)$, sisa pembagian oleh $x-a$ adalah $P(a)$."},
      {kind:"theorem",title:"Teorema Vieta",statement:"Koefisien polinom monik mengontrol jumlah dan hasil kali akar melalui fungsi simetris elementer."},
      {kind:"lemma",title:"Lemma Gauss",statement:"Polinom primitif di $\mathbb Z[x]$ yang tereduksi di $\mathbb Q[x]$ juga tereduksi di $\mathbb Z[x]$, dan sebaliknya untuk irreducibility."},
    ];
    if(chapter==="8")return[
      {kind:"definition",title:"Residu Kuadrat",statement:"Bilangan $a$ adalah residu kuadrat modulo prima ganjil $p$ apabila terdapat $x$ dengan $x^2\equiv a\pmod p$."},
      {kind:"definition",title:"Simbol Legendre",statement:"$\left(\frac ap\right)$ bernilai $1,-1,$ atau $0$ sesuai apakah $a$ residu kuadrat, nonresidu, atau habis dibagi $p$."},
      {kind:"theorem",title:"Resiprositas Kuadrat",statement:"Untuk prima ganjil berbeda $p,q$, berlaku $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$."},
    ];
    return[
      {kind:"theorem",title:"Teorema Sisa Cina",statement:"Untuk modulus-modulus yang saling koprima, sistem kongruensi mempunyai solusi unik modulo hasil kali modulus."},
      {kind:"note",title:"Konstruksi",statement:"Argumen konstruktif mencari objek integer secara eksplisit dengan menggabungkan kongruensi, batas, faktorisasi, atau solusi Pell."},
    ];
  }

  if(subject==="persamaan-diferensial"){
    if(chapter==="1"||chapter==="2")return[
      {kind:"definition",title:"Persamaan Diferensial Biasa",statement:"ODE adalah persamaan yang melibatkan satu variabel bebas, satu atau lebih variabel terikat, dan turunannya."},
      {kind:"definition",title:"Solusi",statement:"Fungsi disebut solusi apabila substitusi fungsi beserta turunannya mengubah persamaan diferensial menjadi identitas pada interval yang ditentukan."},
      {kind:"note",title:"Metode Orde Satu",statement:"Pemisahan variabel, exactness, faktor integrasi, dan substitusi dipilih berdasarkan bentuk struktural persamaan."},
    ];
    if(chapter==="3")return[
      {kind:"definition",title:"Persamaan Linear Orde Dua",statement:"Persamaan $a(x)y''+b(x)y'+c(x)y=g(x)$ disebut linear orde dua jika $a(x)\ne0$ pada interval."},
      {kind:"theorem",title:"Superposisi Homogen",statement:"Jika $y_1,y_2$ solusi persamaan linear homogen, maka $c_1y_1+c_2y_2$ juga solusi."},
      {kind:"definition",title:"Wronskian",statement:"Wronskian $W(y_1,y_2)=y_1y_2'-y_1'y_2$ membantu menguji kebebasan linear solusi."},
    ];
    if(chapter==="4")return[
      {kind:"theorem",title:"Teorema Pemisahan Sturm",statement:"Di antara dua nol berurutan suatu solusi nontrivial persamaan Sturm tertentu terdapat tepat satu nol dari solusi bebas linear lainnya."},
      {kind:"note",title:"Analisis Kualitatif",statement:"Lokasi nol, osilasi, dan perbandingan koefisien dapat dianalisis tanpa memperoleh rumus solusi eksplisit."},
    ];
    if(chapter==="5")return[
      {kind:"definition",title:"Titik Biasa",statement:"Titik $x_0$ adalah titik biasa persamaan linear jika koefisien setelah normalisasi analitik di sekitar $x_0$."},
      {kind:"definition",title:"Titik Singular Regular",statement:"Titik singular dapat tetap ditangani dengan metode Frobenius jika singularitas koefisien memenuhi orde tertentu."},
      {kind:"note",title:"Metode Frobenius",statement:"Solusi dicari dalam bentuk $y=\sum a_n(x-x_0)^{n+r}$ dan eksponen $r$ ditentukan dari persamaan indisial."},
    ];
    if(chapter==="6")return[
      {kind:"definition",title:"Koefisien Fourier",statement:"Koefisien Fourier diperoleh dengan memproyeksikan fungsi pada basis trigonometri yang ortogonal."},
      {kind:"proposition",title:"Ortogonalitas",statement:"Pada interval satu periode, fungsi sinus dan cosinus dengan frekuensi berbeda mempunyai hasil kali dalam nol."},
      {kind:"note",title:"Konvergensi",statement:"Jenis konvergensi deret Fourier bergantung pada regularitas fungsi dan norma yang digunakan."},
    ];
    if(chapter==="7")return[
      {kind:"definition",title:"Masalah Nilai Batas",statement:"Masalah nilai batas menentukan solusi persamaan diferensial dengan kondisi yang diberikan pada batas domain."},
      {kind:"note",title:"Pemisahan Variabel",statement:"Untuk PDE linear tertentu, solusi produk mengubah PDE menjadi beberapa ODE eigenvalue yang dihubungkan oleh kondisi batas."},
      {kind:"definition",title:"Masalah Sturm–Liouville",statement:"Masalah Sturm–Liouville mencari nilai $\lambda$ dan fungsi $y$ yang memenuhi persamaan diferensial linear self-adjoint beserta kondisi batas."},
    ];
    if(chapter==="8")return[
      {kind:"note",title:"Fungsi Khusus",statement:"Polinom Legendre dan fungsi Bessel muncul sebagai fungsi eigen dari masalah nilai batas dengan simetri tertentu."},
      {kind:"proposition",title:"Ortogonalitas Fungsi Eigen",statement:"Dalam masalah Sturm–Liouville regular, fungsi eigen yang bersesuaian dengan nilai eigen berbeda ortogonal terhadap bobot yang sesuai."},
    ];
    if(chapter==="9")return[
      {kind:"definition",title:"Transformasi Laplace",statement:"$\mathcal L\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt$ apabila integral konvergen."},
      {kind:"proposition",title:"Transformasi Turunan",statement:"Jika syarat regularitas terpenuhi, $\mathcal L\{f'\}=sF(s)-f(0)$."},
      {kind:"theorem",title:"Teorema Konvolusi",statement:"Transformasi Laplace konvolusi memenuhi $\mathcal L\{f*g\}=F(s)G(s)$."},
    ];
    if(chapter==="10")return[
      {kind:"definition",title:"Sistem ODE",statement:"Sistem orde satu ditulis $\mathbf x'=\mathbf f(t,\mathbf x)$; solusi adalah kurva pada ruang keadaan."},
      {kind:"proposition",title:"Sistem Linear Konstan",statement:"Untuk $\mathbf x'=A\mathbf x$, struktur solusi ditentukan oleh nilai eigen, vektor eigen, atau bentuk kanonik matriks $A$."},
    ];
    if(chapter==="11")return[
      {kind:"definition",title:"Titik Kritis",statement:"Titik $x_*$ adalah equilibrium sistem otonom jika $f(x_*)=0$."},
      {kind:"definition",title:"Stabilitas Lyapunov",statement:"Equilibrium stabil apabila lintasan yang mulai cukup dekat tetap dekat untuk seluruh waktu maju."},
      {kind:"note",title:"Linearisasi",statement:"Di sekitar equilibrium hiperbolik, Jacobian sering menentukan tipe lokal dan stabilitas melalui nilai eigennya."},
    ];
    if(chapter==="12")return[
      {kind:"definition",title:"Fungsional",statement:"Fungsional memetakan suatu fungsi admissible ke sebuah bilangan, misalnya $J[y]=\int_a^b F(x,y,y')\,dx$."},
      {kind:"theorem",title:"Persamaan Euler–Lagrange",statement:"Ekstremal halus dari $J[y]=\int F(x,y,y')dx$ memenuhi $\frac{\partial F}{\partial y}-\frac d{dx}\frac{\partial F}{\partial y'}=0$."},
    ];
    if(chapter==="13")return[
      {kind:"theorem",title:"Teorema Picard–Lindelöf",statement:"Di bawah kondisi kontinuitas dan Lipschitz lokal terhadap variabel keadaan, masalah nilai awal orde satu mempunyai solusi lokal yang unik."},
      {kind:"note",title:"Aproksimasi Berurutan",statement:"Iterasi Picard membangun deret fungsi yang, di bawah hipotesis teorema, konvergen ke solusi masalah nilai awal."},
    ];
    if(chapter==="14")return[
      {kind:"definition",title:"Metode Satu Langkah",statement:"Metode numerik satu langkah membangun aproksimasi $y_{n+1}$ dari data pada langkah $n$ dan evaluasi medan kemiringan."},
      {kind:"proposition",title:"Metode Euler",statement:"Metode Euler menggunakan $y_{n+1}=y_n+h f(t_n,y_n)$ sebagai aproksimasi pertama."},
      {kind:"note",title:"Galat",statement:"Akurasi ditentukan oleh galat lokal, galat global, ukuran langkah, stabilitas, serta akumulasi pembulatan."},
    ];
  }
  return[{kind:"note",title:"Kerangka Konseptual",statement:"Submateri ini dibaca dengan membedakan objek, hipotesis, operasi, dan kesimpulan sebelum menerapkan rumus."}];
}

function examplesFor(subject:string,chapter:string,sectionTitle:string,ideas:string[]):BookExample[]{
  const a=ideas[0]??sectionTitle,b=ideas[1]??"konsep pendukung";
  if(subject==="kalkulus"){
    if(["2","3","4"].includes(chapter))return[
      {title:"Analisis Fungsi Polinomial",problem:"Gunakan $f(x)=x^2-4x+3$ untuk menghubungkan "+a+" dengan "+b+".",solution:["Ditentukan struktur fungsi dan titik yang relevan.","Dihitung nilai, limit, atau turunan sesuai fokus submateri.","Hasil diinterpretasikan pada grafik, bukan hanya sebagai simbol."],conclusion:"Perhitungan dan interpretasi geometris harus konsisten."},
      {title:"Model Laju Perubahan",problem:"Posisi partikel diberikan oleh $s(t)=t^3-3t$. Analisis besaran yang relevan dengan "+sectionTitle+".",solution:["Dihitung turunan pertama $v(t)=3t^2-3$.","Jika diperlukan, dihitung percepatan $a(t)=6t$.","Tanda dan nilai turunan digunakan untuk membaca perilaku gerak."]},
      {title:"Pemeriksaan Syarat",problem:"Tentukan syarat apa saja yang harus diperiksa sebelum menerapkan hasil utama pada "+sectionTitle+".",solution:["Dicatat domain fungsi.","Diperiksa kontinuitas atau diferensiabilitas sesuai teorema.","Baru setelah hipotesis terpenuhi, kesimpulan teorema digunakan."]},
      {title:"Visualisasi",problem:"Jelaskan bagaimana grafik dapat digunakan untuk memeriksa jawaban pada "+sectionTitle+".",solution:["Digambar fitur utama grafik.","Ditandai titik, garis singgung, ekstrem, atau asimtot yang relevan.","Perhitungan aljabar dibandingkan dengan bentuk visual."]},
    ];
    if(["5","6","7","8","15","16"].includes(chapter))return[
      {title:"Akumulasi dari Fungsi Sederhana",problem:"Gunakan fungsi $f(x)=x$ pada interval yang sesuai untuk mengilustrasikan "+sectionTitle+".",solution:["Daerah atau lintasan ditentukan terlebih dahulu.","Integral disusun dari elemen akumulasi yang relevan.","Nilai integral diperiksa melalui interpretasi geometris atau fisik."]},
      {title:"Memilih Metode",problem:"Jelaskan strategi memilih teknik integrasi ketika integran memuat produk, komposisi, atau fungsi rasional.",solution:["Struktur integran diidentifikasi.","Substitusi diprioritaskan jika ada turunan komposisi; parsial untuk produk; pecahan parsial untuk fungsi rasional.","Hasil akhir diperiksa dengan diferensiasi bila memungkinkan."]},
      {title:"Interpretasi Geometris",problem:"Hubungkan nilai integral dengan luas, volume, kerja, fluks, atau akumulasi sesuai konteks "+sectionTitle+".",solution:["Ditentukan besaran elementer.","Dibentuk integral dari jumlah infinitesimal.","Tanda, satuan, dan orientasi ditafsirkan."]},
      {title:"Estimasi",problem:"Berikan cara memeriksa kewajaran nilai integral tanpa menghitung ulang seluruhnya.",solution:["Gunakan batas minimum dan maksimum fungsi.","Bandingkan dengan luas/volume geometris sederhana.","Periksa satuan serta tanda hasil."]},
    ];
    if(chapter==="10")return[
      {title:"Deret Geometri",problem:"Tentukan konvergensi $\sum_{n=0}^{\infty}(1/3)^n$.",solution:["Rasio $r=1/3$ memenuhi $|r|<1$.","Deret geometri konvergen ke $1/(1-r)$.","Diperoleh jumlah $3/2$."]},
      {title:"Uji Perbandingan",problem:"Bandingkan $\sum 1/(n^2+1)$ dengan deret-$p$ yang sesuai.",solution:["Untuk $n\ge1$, $0<1/(n^2+1)\le1/n^2$.","Deret $\sum1/n^2$ konvergen.","Uji perbandingan memberi konvergensi deret asal."]},
      {title:"Deret Pangkat",problem:"Jelaskan langkah umum mencari interval konvergensi deret pangkat.",solution:["Gunakan uji rasio atau akar untuk memperoleh radius.","Tentukan interval terbuka.","Uji kedua endpoint secara terpisah."]},
      {title:"Taylor",problem:"Gunakan polinom Maclaurin orde dua untuk mengaproksimasi $e^x$ dekat nol.",solution:["Turunan $e^x$ di nol semuanya bernilai 1.","Polinomnya $1+x+x^2/2$.","Galat dikontrol oleh remainder Taylor."]},
    ];
    if(["12","13","14"].includes(chapter))return[
      {title:"Vektor dan Geometri",problem:"Untuk $u=(1,2,0)$ dan $v=(2,-1,1)$, analisis operasi yang relevan dengan "+sectionTitle+".",solution:["Objek dan dimensi ditetapkan.","Hasil kali titik, silang, turunan, atau gradien dipilih sesuai tujuan.","Hasil ditafsirkan sebagai sudut, arah, laju, atau normal."]},
      {title:"Fungsi Dua Variabel",problem:"Gunakan $f(x,y)=x^2+xy+y^2$ untuk mengilustrasikan "+a+".",solution:["Turunan parsial dihitung bila diperlukan.","Gradien atau Hessian dibentuk sesuai fokus.","Nilai numerik dibandingkan dengan geometri permukaan."]},
      {title:"Parameterisasi",problem:"Jelaskan mengapa parameterisasi yang tepat penting pada kurva atau permukaan.",solution:["Parameter menentukan titik dan orientasi.","Turunan parameter menghasilkan arah tangent.","Elemen panjang/luas bergantung pada skala parameterisasi."]},
      {title:"Pemeriksaan Dimensi",problem:"Periksa konsistensi dimensi dan satuan pada perhitungan vektor.",solution:["Tentukan tipe setiap objek: skalar, vektor, atau matriks.","Pastikan operasi yang dilakukan terdefinisi.","Interpretasikan satuan hasil."]},
    ];
  }
  if(subject==="teori-graf")return[
    {title:"Membangun Graf Kecil",problem:"Ambil $V=\{1,2,3,4,5\}$ dan bentuk contoh graf yang memperlihatkan "+a+".",solution:["Himpunan sisi dipilih secara eksplisit.","Derajat dan adjacency dicatat.","Sifat yang diminta diverifikasi dari definisi, bukan dari tampilan gambar saja."]},
    {title:"Representasi Matriks",problem:"Tuliskan matriks adjacency untuk sebuah graf sederhana berorde empat dan gunakan untuk membaca ketetanggaan.",solution:["Urutan simpul ditetapkan.","Entri $(i,j)$ diisi $1$ tepat ketika simpul $i$ dan $j$ adjacent.","Simetri matriks diperiksa untuk graf tak berarah."]},
    {title:"Pembuktian Struktural",problem:"Gunakan counting atau invariant untuk menjelaskan satu hasil pada "+sectionTitle+".",solution:["Kuantitas yang akan dihitung dipilih.","Objek yang sama dihitung dari dua sudut pandang.","Kesamaan hasil memberi relasi yang diinginkan."]},
    {title:"Algoritma",problem:"Jelaskan bagaimana masalah "+sectionTitle+" dapat direpresentasikan sebagai prosedur langkah demi langkah.",solution:["Input dan output didefinisikan.","Invariant atau kondisi terminasi ditentukan.","Kompleksitas dasar dan kebenaran diperiksa."]},
  ];
  if(subject==="teori-bilangan-olimpiade")return[
    {title:"Eksperimen Modular",problem:"Hitung beberapa kasus kecil yang berkaitan dengan "+a+" dan cari pola sebelum membuktikannya.",solution:["Pilih modulus atau faktor prima yang relevan.","Susun tabel residu kecil.","Rumuskan dugaan, lalu pisahkan dugaan dari pembuktian."]},
    {title:"Manipulasi Keterbagian",problem:"Jika $d\mid a$ dan $d\mid b$, buktikan $d\mid (3a-2b)$.",solution:["Tuliskan $a=du$ dan $b=dv$.","Diperoleh $3a-2b=d(3u-2v)$.","Karena $3u-2v\in\mathbb Z$, hasil terbukti."]},
    {title:"Memilih Modulus",problem:"Jelaskan cara memilih modulus untuk memperoleh kontradiksi pada persamaan integer.",solution:["Amati pangkat, paritas, atau faktor pada persamaan.","Pilih modulus dengan himpunan residu kecil.","Hitung kemungkinan kedua ruas dan cari ketidakcocokan."]},
    {title:"Struktur Faktor Prima",problem:"Gunakan faktorisasi prima untuk menafsirkan "+sectionTitle+".",solution:["Tuliskan setiap bilangan sebagai produk prima.","Bandingkan eksponen tiap prima.","Terjemahkan syarat ke relasi antar-eksponen."]},
  ];
  if(subject==="persamaan-diferensial")return[
    {title:"Verifikasi Solusi",problem:"Periksa apakah $y=e^{2x}$ memenuhi $y'-2y=0$.",solution:["Dihitung $y'=2e^{2x}$.","Substitusi memberi $2e^{2x}-2e^{2x}=0$.","Identitas berlaku pada seluruh $\mathbb R$."]},
    {title:"Masalah Nilai Awal",problem:"Selesaikan $y'=2y$, $y(0)=3$.",solution:["Persamaan dipisahkan: $dy/y=2dx$.","Integrasi memberi $\ln|y|=2x+C$, jadi $y=Ce^{2x}$.","Kondisi awal memberi $C=3$, sehingga $y=3e^{2x}$."]},
    {title:"Interpretasi Kualitatif",problem:"Jelaskan apa yang dapat dibaca dari medan kemiringan tanpa menyelesaikan persamaan secara eksplisit.",solution:["Tanda turunan menunjukkan arah naik atau turun.","Titik dengan turunan nol menjadi kandidat equilibrium.","Perubahan arah dan kepadatan kemiringan memberi informasi kestabilan dan laju perubahan."]},
    {title:"Model Fisik",problem:"Susun kerangka model perubahan kuantitas menggunakan persamaan diferensial.",solution:["Tentukan variabel keadaan dan variabel bebas.","Nyatakan hukum perubahan yang menghubungkan laju dengan keadaan.","Tetapkan kondisi awal/batas dan periksa satuan."]},
  ];
  return[
    {title:"Membaca Struktur",problem:"Identifikasi peran "+a+" dan "+b+" pada "+sectionTitle+".",solution:["Objek utama ditentukan.","Syarat definisi diperiksa.","Hubungan antar-konsep dinyatakan eksplisit."]},
    {title:"Contoh dan Noncontoh",problem:"Bangun contoh dan noncontoh untuk konsep utama.",solution:["Dipilih contoh kecil.","Satu syarat diubah untuk memperoleh noncontoh.","Alasan kegagalan dijelaskan."]},
  ];
}

function buildContent(subjectSlug:string,subjectTitle:string,chapterNumber:string,chapterTitle:string,sectionTitle:string,summary:string,keyIdeas:string[]):BookLessonContent{
  const formal=chapterFormal(subjectSlug,chapterNumber);
  const examples=examplesFor(subjectSlug,chapterNumber,sectionTitle,keyIdeas);
  const ideaText=keyIdeas.join(", ");
  const intro=[
    summary,
    "Submateri ini merupakan bagian dari jalur belajar "+subjectTitle+" pada DMath Curriculum. Pembahasan dimulai dari persoalan yang memotivasi konsep, dilanjutkan dengan struktur formal, lalu dihubungkan dengan perhitungan, pembuktian, dan interpretasi.",
    "Peta konsep halaman ini meliputi "+ideaText+". Setiap istilah dipelajari bersama syarat pemakaiannya, representasi visual, dan hubungan dengan materi sebelum maupun sesudahnya.",
    "Fokus belajar bukan sekadar memperoleh jawaban akhir. Setiap langkah perlu menjawab tiga pertanyaan: objek apa yang sedang dipelajari, sifat apa yang diketahui, dan hasil mana yang sah digunakan dari sifat tersebut.",
    "Pada bagian contoh, metode akan dibandingkan dengan interpretasi geometris, aljabar, kombinatorial, atau fisis sesuai karakter topik. Visualisasi digunakan sebagai alat memahami struktur, bukan pengganti pembuktian.",
    "Setelah contoh, latihan disusun dari pemeriksaan definisi, komputasi dasar, penerapan teorema, sampai pertanyaan penalaran. Solusi harus tetap menyebut alasan matematis pada langkah yang menentukan."
  ];

  const exercises=[
    {prompt:"Tuliskan definisi dan seluruh syarat yang paling penting pada "+sectionTitle+".",hint:"Gunakan peta konsep: "+ideaText+".",answer:"Jawaban harus memisahkan objek, domain/semesta, hipotesis, dan kesimpulan. Setiap istilah yang digunakan perlu memiliki makna yang konsisten dengan submateri."},
    {prompt:"Buat satu contoh sederhana yang memenuhi konsep "+(keyIdeas[0]??sectionTitle)+" dan verifikasi syaratnya satu per satu.",hint:"Gunakan objek berukuran kecil atau fungsi yang rumusnya sederhana.",answer:"Contoh dianggap lengkap setelah seluruh syarat definisi diperiksa secara eksplisit."},
    {prompt:"Buat satu noncontoh yang tampak mirip tetapi gagal pada tepat satu syarat utama.",hint:"Pertahankan sebagian besar struktur contoh sebelumnya lalu ubah satu kondisi.",answer:"Noncontoh harus menyebut syarat mana yang gagal dan mengapa kegagalan itu penting."},
    {prompt:"Jelaskan hubungan antara "+(keyIdeas[0]??sectionTitle)+" dan "+(keyIdeas[1]??"konsep berikutnya")+" tanpa membalik implikasi yang tidak sah.",hint:"Periksa apakah hubungan berupa definisi, implikasi satu arah, ekuivalensi, atau hanya keterkaitan.",answer:"Hubungan yang benar harus didukung definisi atau hasil formal yang berlaku pada halaman ini."},
    {prompt:"Selesaikan satu kasus numerik atau struktur kecil yang relevan dengan "+sectionTitle+" dan periksa hasilnya dengan cara kedua.",hint:"Gunakan representasi visual, substitusi balik, atau teorema pembanding.",answer:"Metode pemeriksaan harus independen dari langkah utama agar benar-benar berfungsi sebagai validasi."},
    {prompt:"Identifikasi syarat yang paling mudah terlewat ketika menggunakan hasil formal pada submateri ini.",hint:"Perhatikan domain, ketaknol-an, keterhubungan, regularitas, atau kondisi batas sesuai konteks.",answer:"Syarat yang hilang dapat membuat kesimpulan salah; tuliskan contoh singkat mengapa syarat tersebut diperlukan."},
    {prompt:"Hubungkan "+sectionTitle+" dengan materi sebelum dan sesudahnya dalam satu rantai penalaran.",hint:"Cari konsep prasyarat dan konsep yang menggunakan hasil halaman ini.",answer:"Rantai yang baik menjelaskan bukan hanya nama materi, tetapi fungsi konsep ini sebagai penghubung."},
    {prompt:"Susun satu soal menantang tentang "+sectionTitle+" yang membutuhkan sedikitnya dua ide dari peta konsep, lalu tuliskan garis besar solusinya.",hint:"Gabungkan dua ide: "+(keyIdeas.slice(0,2).join(" dan ")||"dua konsep utama")+".",answer:"Soal harus dapat diselesaikan dengan materi pada halaman dan garis besar solusi harus menunjukkan dua ide yang digunakan."}
  ];

  return{
    intro,
    notation:notationBySubject[subjectSlug]??[],
    formal:[
      ...formal,
      {kind:"note",title:"Peta Konsep Submateri",statement:"Konsep khusus halaman ini adalah "+ideaText+". Setiap hasil formal pada bab harus digunakan hanya setelah hipotesisnya diverifikasi."},
    ],
    examples,
    exercises,
    mistakes:[
      "Menggunakan rumus sebelum mengidentifikasi objek dan syarat yang membuat rumus tersebut berlaku.",
      "Melupakan domain, orientasi, tanda, regularitas, atau kondisi batas yang relevan.",
      "Menganggap gambar atau beberapa contoh numerik sebagai pembuktian pernyataan umum.",
      "Membalik implikasi tanpa hasil yang menyatakan ekuivalensi.",
      "Menyederhanakan notasi sampai informasi penting tentang variabel, indeks, atau parameter hilang.",
      "Tidak memeriksa kembali hasil dengan definisi, substitusi, estimasi, atau interpretasi visual."
    ],
    connections:[
      "Submateri ini terhubung dengan unit sebelum dan sesudahnya dalam DMath Curriculum.",
      "Konsep "+(keyIdeas[0]??sectionTitle)+" akan digunakan kembali pada materi lanjutan dalam buku yang sama.",
      "Representasi simbolik perlu dibandingkan dengan representasi visual untuk memahami struktur.",
      "Contoh kecil berfungsi sebagai laboratorium untuk menemukan pola sebelum menyusun pembuktian umum.",
      "Teknik dari aljabar, geometri, analisis, kombinatorika, atau numerik dapat saling melengkapi sesuai topik.",
      "Latihan terakhir diarahkan pada sintesis sedikitnya dua konsep agar pemahaman tidak berhenti pada prosedur rutin."
    ]
  };
}

const generated:Record<string,BookLessonContent>={};
for(const subject of expandedBookSubjects){
  for(const chapter of subject.chapters){
    for(const section of chapter.sections){
      generated[section.slug]=buildContent(subject.slug,subject.title,chapter.number,chapter.title,section.title,section.summary,section.keyIdeas);
    }
  }
}

export const expandedBookContent=generated;
