import type { BookLessonContent, BookFormalItem, BookExample } from "@/data/book-content-types";
import { expandedBookSubjects } from "@/data/expanded-book-curricula";

type Notation={symbol:string;meaning:string};

const notationBySubject:Record<string,Notation[]>={
  kalkulus:[
    {symbol:"$f:D\\to\\mathbb R$",meaning:"fungsi real pada domain $D$"},
    {symbol:"$f'(x)$",meaning:"turunan fungsi $f$ di $x$"},
    {symbol:"$\\int_a^b f(x)\\,dx$",meaning:"integral tentu $f$ pada $[a,b]$"},
    {symbol:"$\\nabla f$",meaning:"gradien fungsi beberapa variabel"},
    {symbol:"$\\mathbf r(t)$",meaning:"fungsi bernilai vektor atau parametrik"},
  ],
  "teori-graf":[
    {symbol:"$G=(V,E)$",meaning:"graf dengan himpunan simpul $V$ dan sisi $E$"},
    {symbol:"$\\deg(v)$",meaning:"derajat simpul $v$"},
    {symbol:"$P_n, C_n, K_n$",meaning:"path, cycle, dan graf lengkap berorde $n$"},
    {symbol:"$\\chi(G)$",meaning:"bilangan kromatik graf $G$"},
    {symbol:"$A(G)$",meaning:"matriks adjacency graf $G$"},
  ],
  "teori-bilangan-olimpiade":[
    {symbol:"$a\\mid b$",meaning:"$a$ membagi $b$"},
    {symbol:"$a\\equiv b\\pmod m$",meaning:"$a$ kongruen dengan $b$ modulo $m$"},
    {symbol:"$\\gcd(a,b)$",meaning:"faktor persekutuan terbesar"},
    {symbol:"$\\varphi(n)$",meaning:"fungsi totient Euler"},
    {symbol:"$v_p(n)$",meaning:"eksponen prima $p$ pada faktorisasi $n$"},
  ],
  "persamaan-diferensial":[
    {symbol:"$y'=f(x,y)$",meaning:"persamaan diferensial orde satu"},
    {symbol:"$y^{(n)}$",meaning:"turunan ke-$n$"},
    {symbol:"$y(x_0)=y_0$",meaning:"kondisi awal"},
    {symbol:"$\\mathbf x'=A\\mathbf x$",meaning:"sistem linear orde satu"},
    {symbol:"$\\mathcal L\\{f\\}(s)$",meaning:"transformasi Laplace dari $f$"},
  ],
};


function sectionFormal(subject:string,sectionTitle:string,keyIdeas:string[]):BookFormalItem[]{
  const text=(sectionTitle+" "+keyIdeas.join(" ")).toLowerCase();

  if(subject==="kalkulus"){
    if(/fungsi dan grafik|functions and their graphs|domain|range/.test(text))return[
      {kind:"definition",title:"Domain dan Range",statement:"Domain fungsi adalah himpunan input tempat fungsi terdefinisi, sedangkan range adalah himpunan seluruh nilai keluaran yang benar-benar dicapai."},
      {kind:"proposition",title:"Uji Garis Vertikal",statement:"Suatu kurva pada bidang merupakan grafik fungsi $y=f(x)$ tepat ketika setiap garis vertikal memotong kurva paling banyak satu titik."}
    ];
    if(/inverse|invers|logarithm|logaritma/.test(text))return[
      {kind:"definition",title:"Fungsi Invers",statement:"Fungsi $f$ mempunyai invers jika satu-satu pada domainnya. Invers $f^{-1}$ memenuhi $f^{-1}(f(x))=x$ dan $f(f^{-1}(y))=y$ pada domain yang sesuai."},
      {kind:"proposition",title:"Turunan Fungsi Invers",statement:"Jika $f$ terdiferensial, satu-satu, dan $f'(a)\\ne0$, maka $(f^{-1})'(f(a))=1/f'(a)$.",proof:["Tuliskan identitas $f^{-1}(f(x))=x$.","Diferensiasikan kedua ruas menggunakan aturan rantai.","Diperoleh $(f^{-1})'(f(x))f'(x)=1$.","Substitusi $x=a$ memberi formula."]}
    ];
    if(/eksponensial|exponential/.test(text))return[
      {kind:"proposition",title:"Turunan Eksponensial Natural",statement:"Berlaku $\\frac{d}{dx}e^x=e^x$."},
      {kind:"proposition",title:"Model Pertumbuhan Eksponensial",statement:"Jika $y'=ky$ dan $y(0)=y_0$, maka $y(t)=y_0e^{kt}$.",proof:["Pisahkan variabel $dy/y=kdt$.","Integrasi memberi $\\ln|y|=kt+C$.","Eksponensialkan dan gunakan kondisi awal untuk memperoleh konstanta $y_0$."]}
    ];
    if(/limit satu sisi|one-sided/.test(text))return[
      {kind:"definition",title:"Limit Satu Sisi",statement:"Limit kiri $\\lim_{x\\to a^-}f(x)$ dan limit kanan $\\lim_{x\\to a^+}f(x)$ membatasi pendekatan $x$ masing-masing dari kiri dan kanan."},
      {kind:"proposition",title:"Kriteria Limit Dua Sisi",statement:"Limit $\\lim_{x\\to a}f(x)$ ada dan sama dengan $L$ jika dan hanya jika kedua limit satu sisi ada dan sama dengan $L$."}
    ];
    if(/presisi limit|epsilon|epsilon-delta/.test(text))return[
      {kind:"definition",title:"Definisi $\\varepsilon$–$\\delta$",statement:"$\\lim_{x\\to a}f(x)=L$ berarti untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $0<|x-a|<\\delta$ mengakibatkan $|f(x)-L|<\\varepsilon$."},
      {kind:"proposition",title:"Limit Fungsi Linear",statement:"Untuk $f(x)=mx+b$, berlaku $\\lim_{x\\to a}f(x)=ma+b$.",proof:["Diberikan $\\varepsilon>0$.","Jika $m\\ne0$, pilih $\\delta=\\varepsilon/|m|$.","Dari $|x-a|<\\delta$ diperoleh $|f(x)-f(a)|=|m||x-a|<\\varepsilon$.","Kasus $m=0$ langsung."]}
    ];
    if(/kontinuitas|continuity/.test(text))return[
      {kind:"definition",title:"Kontinu di Titik",statement:"Fungsi $f$ kontinu di $a$ apabila $f(a)$ terdefinisi, $\\lim_{x\\to a}f(x)$ ada, dan limit tersebut sama dengan $f(a)$."},
      {kind:"theorem",title:"Teorema Nilai Antara",statement:"Jika $f$ kontinu pada $[a,b]$ dan $N$ berada di antara $f(a)$ dan $f(b)$, terdapat $c\\in[a,b]$ dengan $f(c)=N$."}
    ];
    if(/aturan diferensiasi|differentiation rules|product rule|quotient rule/.test(text))return[
      {kind:"proposition",title:"Aturan Hasil Kali",statement:"Jika $f$ dan $g$ terdiferensial, maka $(fg)'=f'g+fg'$.",proof:["Mulai dari difference quotient $\\frac{f(x+h)g(x+h)-f(x)g(x)}h$.","Tambahkan dan kurangkan $f(x+h)g(x)$.","Pisahkan menjadi dua suku.","Ambil limit $h\\to0$ dan gunakan kontinuitas fungsi terdiferensial."]},
      {kind:"proposition",title:"Aturan Hasil Bagi",statement:"Jika $g(x)\\ne0$, maka $(f/g)'=(f'g-fg')/g^2$."}
    ];
    if(/chain rule|aturan rantai/.test(text))return[
      {kind:"theorem",title:"Aturan Rantai",statement:"Jika $g$ terdiferensial di $x$ dan $f$ terdiferensial di $g(x)$, maka $(f\\circ g)'(x)=f'(g(x))g'(x)$."},
      {kind:"note",title:"Membaca Komposisi",statement:"Pada fungsi bertingkat, identifikasi fungsi luar dan fungsi dalam sebelum mendiferensialkan. Faktor turunan fungsi dalam tidak boleh hilang."}
    ];
    if(/implicit|implisit/.test(text))return[
      {kind:"proposition",title:"Diferensiasi Implisit",statement:"Jika $F(x,y(x))=0$ dan $F_y\\ne0$, maka secara lokal $\\frac{dy}{dx}=-\\frac{F_x}{F_y}$."},
      {kind:"note",title:"Aturan Rantai pada $y(x)$",statement:"Ketika mendiferensialkan suku yang memuat $y$, setiap turunan terhadap $x$ harus memunculkan faktor $dy/dx$ melalui aturan rantai."}
    ];
    if(/related rates|laju yang berkaitan/.test(text))return[
      {kind:"note",title:"Model Related Rates",statement:"Tuliskan hubungan geometris antarvariabel terlebih dahulu, diferensiasikan terhadap waktu, lalu substitusikan data pada saat yang diminta."},
      {kind:"proposition",title:"Turunan Terhadap Waktu",statement:"Jika $F(x(t),y(t))=0$, maka $F_x\\,dx/dt+F_y\\,dy/dt=0$ selama turunan yang diperlukan ada."}
    ];
    if(/linearization|linearisasi|differentials|diferensial/.test(text))return[
      {kind:"definition",title:"Linearisasi",statement:"Linearisasi $f$ di $a$ adalah $L(x)=f(a)+f'(a)(x-a)$."},
      {kind:"proposition",title:"Aproksimasi Diferensial",statement:"Untuk perubahan kecil $\\Delta x$, perubahan fungsi memenuhi $\\Delta y\\approx dy=f'(x)\\,dx$."}
    ];
    if(/extreme values|nilai ekstrem|optimization|optimisasi/.test(text))return[
      {kind:"theorem",title:"Teorema Nilai Ekstrem",statement:"Fungsi kontinu pada interval tertutup $[a,b]$ mencapai maksimum dan minimum absolut."},
      {kind:"proposition",title:"Syarat Fermat",statement:"Jika $f$ mempunyai ekstrem lokal di titik interior $c$ dan terdiferensial di $c$, maka $f'(c)=0$."}
    ];
    if(/mean value theorem|nilai rata-rata|rolle/.test(text))return[
      {kind:"theorem",title:"Teorema Rolle",statement:"Jika $f$ kontinu pada $[a,b]$, terdiferensial pada $(a,b)$, dan $f(a)=f(b)$, terdapat $c\\in(a,b)$ dengan $f'(c)=0$."},
      {kind:"theorem",title:"Teorema Nilai Rata-rata",statement:"Jika $f$ kontinu pada $[a,b]$ dan terdiferensial pada $(a,b)$, terdapat $c\\in(a,b)$ dengan $f'(c)=\\frac{f(b)-f(a)}{b-a}$.",proof:["Definisikan garis secant $\\ell(x)$ melalui $(a,f(a))$ dan $(b,f(b))$.","Fungsi $g(x)=f(x)-\\ell(x)$ memenuhi $g(a)=g(b)=0$.","Teorema Rolle memberi $g'(c)=0$.","Karena $g'=f'-\\ell'$, diperoleh formula MVT."]}
    ];
    if(/l’hôpital|lhopital|indeterminate/.test(text))return[
      {kind:"theorem",title:"Aturan L’Hôpital",statement:"Pada bentuk $0/0$ atau $\\infty/\\infty$, dengan hipotesis regularitas yang sesuai, limit $f/g$ dapat ditentukan dari limit $f'/g'$ jika limit terakhir ada."},
      {kind:"note",title:"Bentuk Tak Tentu",statement:"Bentuk $0\\cdot\\infty$, $\\infty-\\infty$, $1^\\infty$, $0^0$, dan $\\infty^0$ harus diubah dahulu ke bentuk yang sesuai sebelum menerapkan aturan L’Hôpital."}
    ];
    if(/newton/.test(text))return[
      {kind:"proposition",title:"Iterasi Newton",statement:"Untuk mencari akar $f(x)=0$, metode Newton menggunakan $x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}$."},
      {kind:"note",title:"Interpretasi Geometris",statement:"Nilai $x_{n+1}$ adalah absis titik potong sumbu-$x$ dari garis singgung grafik di $(x_n,f(x_n))$."}
    ];
    if(/riemann|integral tentu|definite integral|finite sums|sigma notation/.test(text))return[
      {kind:"definition",title:"Jumlah Riemann",statement:"Untuk partisi $P:a=x_0<\\cdots<x_n=b$ dan label $t_i\\in[x_{i-1},x_i]$, jumlah Riemann adalah $\\sum_{i=1}^n f(t_i)\\Delta x_i$."},
      {kind:"definition",title:"Integral Riemann",statement:"Fungsi $f$ Riemann integrabel pada $[a,b]$ jika semua jumlah Riemann mendekati limit yang sama ketika norma partisi menuju nol."}
    ];
    if(/fundamental theorem|teorema dasar kalkulus|ftc/.test(text))return[
      {kind:"theorem",title:"FTC Bagian I",statement:"Jika $f$ kontinu dan $F(x)=\\int_a^x f(t)\\,dt$, maka $F'(x)=f(x)$."},
      {kind:"theorem",title:"FTC Bagian II",statement:"Jika $F'=f$ pada $[a,b]$, maka $\\int_a^b f(x)\\,dx=F(b)-F(a)$."}
    ];
    if(/substitution|substitusi/.test(text))return[
      {kind:"proposition",title:"Substitusi Integral",statement:"Jika $u=g(x)$ terdiferensial dan komposisi terdefinisi, maka $\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du$."},
      {kind:"note",title:"Batas Integral Tentu",statement:"Pada integral tentu, batas dapat langsung diubah dari $x$ ke $u$ agar tidak perlu kembali ke variabel lama."}
    ];
    if(/integration by parts|integrasi parsial/.test(text))return[
      {kind:"proposition",title:"Integrasi Parsial",statement:"$\\int u\\,dv=uv-\\int v\\,du$.",proof:["Mulai dari aturan hasil kali $(uv)'=u'v+uv'$.","Integrasikan kedua ruas.","Susun ulang untuk memperoleh formula integrasi parsial."]}
    ];
    if(/partial fractions|pecahan parsial/.test(text))return[
      {kind:"note",title:"Dekomposisi Pecahan Parsial",statement:"Fungsi rasional proper diuraikan sesuai faktor linear dan kuadratik irreducible penyebut, termasuk faktor berulang, sebelum diintegralkan."}
    ];
    if(/numerical integration|integrasi numerik|simpson|trapezoid/.test(text))return[
      {kind:"proposition",title:"Aturan Trapesium",statement:"Dengan $n$ subinterval sama panjang $h$, $T_n=\\frac h2[f(x_0)+2\\sum_{i=1}^{n-1}f(x_i)+f(x_n)]$."},
      {kind:"proposition",title:"Aturan Simpson",statement:"Untuk $n$ genap, $S_n=\\frac h3[f(x_0)+4\\sum_{i\\text{ ganjil}}f(x_i)+2\\sum_{i\\text{ genap},\,i\\ne0,n}f(x_i)+f(x_n)]$."}
    ];
    if(/improper|tak wajar/.test(text))return[
      {kind:"definition",title:"Integral Tak Wajar",statement:"Integral pada interval tak terbatas atau dengan integran tak terbatas didefinisikan melalui limit integral tentu."},
      {kind:"proposition",title:"Integral-$p$",statement:"$\\int_1^\\infty x^{-p}\\,dx$ konvergen jika dan hanya jika $p>1$."}
    ];
    if(/sequence|barisan/.test(text))return[
      {kind:"definition",title:"Konvergensi Barisan",statement:"Barisan $(a_n)$ konvergen ke $L$ jika untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $n\\ge N$ mengakibatkan $|a_n-L|<\\varepsilon$."},
      {kind:"theorem",title:"Teorema Monoton Terbatas",statement:"Setiap barisan monoton yang terbatas konvergen."}
    ];
    if(/power series|deret pangkat/.test(text))return[
      {kind:"definition",title:"Radius Konvergensi",statement:"Setiap deret pangkat $\\sum a_n(x-c)^n$ mempunyai radius $R\\in[0,\\infty]$ sehingga konvergen absolut untuk $|x-c|<R$ dan divergen untuk $|x-c|>R$."},
      {kind:"note",title:"Endpoint",statement:"Perilaku pada $x=c\\pm R$ harus diuji secara terpisah."}
    ];
    if(/taylor|maclaurin/.test(text))return[
      {kind:"theorem",title:"Formula Taylor",statement:"Jika $f$ cukup terdiferensial, maka $f(x)=\\sum_{k=0}^n\\frac{f^{(k)}(a)}{k!}(x-a)^k+R_n(x)$."},
      {kind:"proposition",title:"Remainder Lagrange",statement:"Di bawah hipotesis yang sesuai, $R_n(x)=\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-a)^{n+1}$ untuk suatu $\\xi$ di antara $a$ dan $x$."}
    ];
    if(/parametric|parametrik/.test(text))return[
      {kind:"proposition",title:"Turunan Kurva Parametrik",statement:"Jika $dx/dt\\ne0$, maka $dy/dx=(dy/dt)/(dx/dt)$."},
      {kind:"proposition",title:"Panjang Kurva Parametrik",statement:"Untuk kurva halus, $L=\\int_a^b\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt$."}
    ];
    if(/polar/.test(text))return[
      {kind:"definition",title:"Koordinat Polar",statement:"Hubungan polar–Kartesius diberikan oleh $x=r\\cos\\theta$, $y=r\\sin\\theta$, dan $r^2=x^2+y^2$."},
      {kind:"proposition",title:"Luas Polar",statement:"Luas yang disapu kurva $r=f(\\theta)$ dari $\\alpha$ sampai $\\beta$ adalah $A=\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta$."}
    ];
    if(/dot product|hasil kali titik/.test(text))return[
      {kind:"definition",title:"Hasil Kali Titik",statement:"$u\\cdot v=\\sum_i u_iv_i=\\|u\\|\\|v\\|\\cos\\theta$."},
      {kind:"proposition",title:"Proyeksi",statement:"Untuk $v\\ne0$, proyeksi $u$ pada $v$ adalah $\\operatorname{proj}_v u=\\frac{u\\cdot v}{v\\cdot v}v$."}
    ];
    if(/cross product|hasil kali silang/.test(text))return[
      {kind:"definition",title:"Hasil Kali Silang",statement:"Untuk $u,v\\in\\mathbb R^3$, vektor $u\\times v$ ortogonal terhadap keduanya dan mempunyai panjang $\\|u\\|\\|v\\|\\sin\\theta$."},
      {kind:"proposition",title:"Luas Parallelogram",statement:"Luas parallelogram yang direntang $u$ dan $v$ adalah $\\|u\\times v\\|$."}
    ];
    if(/partial derivative|turunan parsial|gradient|gradien|directional/.test(text))return[
      {kind:"definition",title:"Gradien",statement:"Untuk $f:\\mathbb R^n\\to\\mathbb R$, gradien adalah $\\nabla f=(f_{x_1},\\ldots,f_{x_n})$."},
      {kind:"proposition",title:"Turunan Arah",statement:"Jika $f$ terdiferensial dan $u$ vektor satuan, maka $D_uf=\\nabla f\\cdot u$."}
    ];
    if(/lagrange multiplier|pengali lagrange|constrained/.test(text))return[
      {kind:"theorem",title:"Kondisi Pengali Lagrange",statement:"Pada ekstrem terikat regular dari $f$ dengan kendala $g=c$, gradien memenuhi $\\nabla f=\\lambda\\nabla g$."}
    ];
    if(/double integral|integral ganda|triple integral|integral lipat/.test(text))return[
      {kind:"definition",title:"Integral Ganda",statement:"Integral ganda $\\iint_R f\\,dA$ didefinisikan sebagai limit jumlah dua dimensi pada partisi daerah $R$."},
      {kind:"theorem",title:"Fubini untuk Daerah Persegi Panjang",statement:"Untuk fungsi kontinu pada persegi panjang, integral ganda dapat dihitung sebagai integral iterasi dalam kedua urutan."}
    ];
    if(/jacobian|substitutions in multiple|perubahan variabel/.test(text))return[
      {kind:"theorem",title:"Perubahan Variabel",statement:"Untuk transformasi regular $(x,y)=T(u,v)$, elemen luas berubah menurut $dA=|\\det DT(u,v)|\\,du\\,dv$."}
    ];
    if(/conservative|potential|path independence/.test(text))return[
      {kind:"definition",title:"Medan Konservatif",statement:"Medan $F$ konservatif jika $F=\\nabla\\phi$ untuk suatu potensial $\\phi$."},
      {kind:"theorem",title:"Independensi Lintasan",statement:"Integral garis medan konservatif hanya bergantung pada titik awal dan akhir."}
    ];
    if(/green/.test(text))return[
      {kind:"theorem",title:"Teorema Green",statement:"Untuk kurva tertutup positif $C=\\partial D$, $\\oint_C P\\,dx+Q\\,dy=\\iint_D(Q_x-P_y)\\,dA$ di bawah hipotesis regularitas yang sesuai."}
    ];
    if(/stokes/.test(text))return[
      {kind:"theorem",title:"Teorema Stokes",statement:"$\\int_{\\partial S}F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times F)\\cdot n\\,dS$ untuk orientasi yang kompatibel."}
    ];
    if(/divergence theorem|teorema divergensi/.test(text))return[
      {kind:"theorem",title:"Teorema Divergensi",statement:"Untuk volume $E$ dengan permukaan batas berorientasi keluar, $\\iint_{\\partial E}F\\cdot n\\,dS=\\iiint_E\\nabla\\cdot F\\,dV$."}
    ];
  }

  if(subject==="teori-graf"){
    if(/definitions|definisi dasar/.test(text))return[
      {kind:"definition",title:"Graf Sederhana",statement:"Graf sederhana $G=(V,E)$ mempunyai $E$ sebagai himpunan pasangan tak berurut dua simpul berbeda."},
      {kind:"definition",title:"Isomorfisme Graf",statement:"Isomorfisme $\\varphi:V(G)\\to V(H)$ adalah bijeksi yang mempertahankan ketetanggaan."},
      {kind:"theorem",title:"Handshaking Lemma",statement:"$\\sum_{v\\in V}\\deg(v)=2|E|$.",proof:["Setiap sisi mempunyai tepat dua ujung.","Penjumlahan seluruh derajat menghitung setiap sisi dua kali."]}
    ];
    if(/complete|bipartite|regular|complement/.test(text))return[
      {kind:"definition",title:"Graf Bipartit",statement:"Graf bipartit mempunyai partisi $V=X\\cup Y$ dengan setiap sisi menghubungkan satu simpul di $X$ ke satu simpul di $Y$."},
      {kind:"proposition",title:"Karakterisasi Bipartit",statement:"Graf adalah bipartit jika dan hanya jika tidak mempunyai cycle ganjil."}
    ];
    if(/eulerian/.test(text))return[
      {kind:"theorem",title:"Kriteria Euler",statement:"Graf terhubung mempunyai sirkuit Euler jika dan hanya jika semua simpul berderajat genap.",proof:["Pada sirkuit Euler, setiap kunjungan ke simpul memakai sisi masuk dan keluar berpasangan, sehingga derajat genap.","Sebaliknya, mulai dari sembarang simpul dan ikuti sisi yang belum dipakai hingga kembali ke awal; derajat genap mencegah terhenti di simpul lain.","Jika masih ada sisi tersisa, sisipkan sirkuit baru pada simpul yang sudah berada di sirkuit sebelumnya.","Proses berakhir setelah semua sisi digunakan."]}
    ];
    if(/hamiltonian/.test(text))return[
      {kind:"definition",title:"Cycle Hamilton",statement:"Cycle Hamilton melewati setiap simpul tepat satu kali sebelum kembali ke titik awal."},
      {kind:"theorem",title:"Teorema Dirac",statement:"Jika graf sederhana berorde $n\\ge3$ mempunyai $\\deg(v)\\ge n/2$ untuk setiap simpul $v$, graf tersebut Hamiltonian."}
    ];
    if(/counting trees|pencacahan pohon|cayley/.test(text))return[
      {kind:"theorem",title:"Formula Cayley",statement:"Banyak pohon berlabel pada $n$ simpul adalah $n^{n-2}$."},
      {kind:"note",title:"Kode Prüfer",statement:"Bijection Prüfer menghubungkan pohon berlabel pada $n$ simpul dengan barisan panjang $n-2$ atas alfabet $\\{1,\\ldots,n\\}$."}
    ];
    if(/minimum spanning|spanning tree|tree applications/.test(text))return[
      {kind:"proposition",title:"Cut Property",statement:"Sisi berbobot minimum yang melintasi suatu cut aman untuk sedikitnya satu minimum spanning tree.",proof:["Ambil MST $T$.","Jika sisi minimum $e$ belum di $T$, tambahkan $e$ sehingga terbentuk cycle.","Cycle memuat sisi $f$ lain yang melintasi cut.","Karena $w(e)\\le w(f)$, mengganti $f$ dengan $e$ tidak menaikkan bobot dan menghasilkan MST yang memuat $e$."]}
    ];
    if(/euler.?s formula|formula euler/.test(text))return[
      {kind:"theorem",title:"Formula Euler Planar",statement:"Untuk graf planar terhubung, $|V|-|E|+|F|=2$.",proof:["Untuk pohon planar, $|E|=|V|-1$ dan hanya ada satu face, sehingga formula benar.","Setiap penambahan sisi yang tidak merusak planaritas dan membentuk cycle menambah satu sisi dan satu face.","Kuantitas $|V|-|E|+|F|$ tetap 2."]}
    ];
    if(/dual graphs|graf dual/.test(text))return[
      {kind:"definition",title:"Graf Dual",statement:"Untuk embedding planar tetap, graf dual mempunyai satu simpul untuk setiap face dan satu sisi dual yang melintasi setiap sisi primal."},
      {kind:"proposition",title:"Bridge dan Loop pada Dual",statement:"Sisi primal merupakan bridge tepat ketika sisi dualnya merupakan loop."}
    ];
    if(/chromatic polynomial|polinom kromatik/.test(text))return[
      {kind:"definition",title:"Polinom Kromatik",statement:"$P_G(k)$ menyatakan banyak pewarnaan proper simpul graf $G$ menggunakan $k$ warna berlabel."},
      {kind:"theorem",title:"Deletion–Contraction",statement:"Untuk sisi $e$ yang bukan loop, $P_G(k)=P_{G-e}(k)-P_{G/e}(k)$."}
    ];
    if(/edge colouring|pewarnaan sisi/.test(text))return[
      {kind:"definition",title:"Indeks Kromatik",statement:"$\\chi'(G)$ adalah banyak warna minimum untuk mewarnai sisi sehingga sisi yang insiden pada simpul yang sama mendapat warna berbeda."},
      {kind:"theorem",title:"Teorema Vizing",statement:"Untuk graf sederhana, $\\Delta(G)\\le\\chi'(G)\\le\\Delta(G)+1$."}
    ];
    if(/hall|marriage/.test(text))return[
      {kind:"theorem",title:"Teorema Hall",statement:"Graf bipartit dengan bagian $X,Y$ mempunyai matching yang menjodohkan seluruh $X$ jika dan hanya jika $|N(S)|\\ge|S|$ untuk setiap $S\\subseteq X$."}
    ];
    if(/menger/.test(text))return[
      {kind:"theorem",title:"Teorema Menger",statement:"Banyak maksimum path internal-disjoint antara dua simpul sama dengan ukuran minimum himpunan simpul pemisah kedua simpul tersebut, dalam bentuk vertex version yang sesuai."}
    ];
    if(/network flow|aliran jaringan|max flow/.test(text))return[
      {kind:"definition",title:"Aliran Feasible",statement:"Aliran memenuhi $0\\le f(e)\\le c(e)$ pada setiap busur dan konservasi aliran pada semua simpul selain sumber dan tujuan."},
      {kind:"theorem",title:"Max-Flow Min-Cut",statement:"Nilai aliran maksimum sama dengan kapasitas minimum cut sumber–tujuan."}
    ];
    if(/matroid introduction|pengantar matroid/.test(text))return[
      {kind:"definition",title:"Matroid",statement:"Matroid $(E,\\mathcal I)$ memenuhi: $\\varnothing\\in\\mathcal I$, setiap subset dari himpunan independen tetap independen, dan aksioma pertukaran untuk dua himpunan independen dengan ukuran berbeda."},
      {kind:"proposition",title:"Semua Basis Sama Ukuran",statement:"Semua himpunan independen maksimal suatu matroid mempunyai kardinalitas sama.",proof:["Andaikan basis $B_1,B_2$ dengan $|B_1|<|B_2|$.","Aksioma pertukaran memberi elemen $e\\in B_2\\setminus B_1$ sehingga $B_1\\cup\\{e\\}$ independen.","Hal ini bertentangan dengan maksimalitas $B_1$."]}
    ];
    if(/algorithms|algoritma/.test(text))return[
      {kind:"definition",title:"Kompleksitas",statement:"Kompleksitas algoritma mengukur sumber daya, biasanya waktu atau memori, sebagai fungsi ukuran input."},
      {kind:"note",title:"Traversal Graf",statement:"BFS mengeksplorasi graf per lapisan dan memberi jarak minimum pada graf tak berbobot, sedangkan DFS menelusuri sedalam mungkin sebelum backtracking."}
    ];
  }

  if(subject==="teori-bilangan-olimpiade"){
    if(/euclid.?s division|lemma pembagian euclid/.test(text))return[
      {kind:"theorem",title:"Algoritma Pembagian",statement:"Untuk $a\\in\\mathbb Z$ dan $b>0$, terdapat unik $q,r\\in\\mathbb Z$ dengan $a=bq+r$ dan $0\\le r<b$."}
    ];
    if(/prime|bilangan prima|fundamental theorem/.test(text))return[
      {kind:"theorem",title:"Teorema Fundamental Aritmetika",statement:"Setiap integer $n>1$ dapat ditulis sebagai hasil kali prima secara unik hingga urutan faktor."},
      {kind:"theorem",title:"Tak Hingga Banyak Prima",statement:"Terdapat tak hingga banyak bilangan prima.",proof:["Andaikan hanya ada prima $p_1,\\ldots,p_k$.","Bentuk $N=p_1\\cdots p_k+1$.","Setiap pembagi prima $q$ dari $N$ tidak sama dengan satu pun $p_i$ karena memberi sisa 1.","Kontradiksi."]}
    ];
    if(/gcd|fpb|lcm|kpk/.test(text))return[
      {kind:"proposition",title:"Identitas FPB–KPK",statement:"Untuk $a,b>0$, $\\gcd(a,b)\\operatorname{lcm}(a,b)=ab$."},
      {kind:"note",title:"Eksponen Prima",statement:"Dalam faktorisasi prima, FPB mengambil minimum eksponen tiap prima dan KPK mengambil maksimum."}
    ];
    if(/euclid.?s division algorithm|algoritma euclid/.test(text))return[
      {kind:"theorem",title:"Algoritma Euclid",statement:"Jika $a=bq+r$, maka $\\gcd(a,b)=\\gcd(b,r)$.",proof:["Setiap pembagi bersama $a,b$ juga membagi $r=a-bq$.","Sebaliknya, setiap pembagi bersama $b,r$ membagi $a=bq+r$.","Himpunan pembagi bersama keduanya sama."]}
    ];
    if(/bézout|bezout/.test(text))return[
      {kind:"theorem",title:"Identitas Bézout",statement:"Untuk $a,b$ tidak keduanya nol, terdapat $x,y\\in\\mathbb Z$ dengan $ax+by=\\gcd(a,b)$."}
    ];
    if(/modular inverse|invers modular|general inverses|invers umum/.test(text))return[
      {kind:"proposition",title:"Kriteria Invers Modular",statement:"Elemen $a$ mempunyai invers modulo $m$ jika dan hanya jika $\\gcd(a,m)=1$.",proof:["Jika $ab\\equiv1\\pmod m$, terdapat $k$ dengan $ab-km=1$, sehingga Bézout memberi gcd 1.","Jika gcd 1, Bézout memberi $ax+my=1$, sehingga $ax\\equiv1\\pmod m$."]}
    ];
    if(/wilson/.test(text))return[
      {kind:"theorem",title:"Teorema Wilson",statement:"Integer $p>1$ prima jika dan hanya jika $(p-1)!\\equiv-1\\pmod p$."}
    ];
    if(/lucas/.test(text))return[
      {kind:"theorem",title:"Teorema Lucas",statement:"Jika $n=\\sum n_ip^i$ dan $k=\\sum k_ip^i$ dalam basis prima $p$, maka $\\binom nk\\equiv\\prod_i\\binom{n_i}{k_i}\\pmod p$."}
    ];
    if(/number of divisors|banyaknya pembagi/.test(text))return[
      {kind:"proposition",title:"Formula Banyak Pembagi",statement:"Jika $n=\\prod p_i^{\\alpha_i}$, maka $\\tau(n)=\\prod_i(\\alpha_i+1)$.",proof:["Setiap pembagi memilih eksponen $\\beta_i$ secara independen dengan $0\\le\\beta_i\\le\\alpha_i$.","Ada $\\alpha_i+1$ pilihan untuk tiap prima.","Prinsip perkalian memberi formula."]}
    ];
    if(/sum of divisors|jumlah pembagi/.test(text))return[
      {kind:"proposition",title:"Formula Jumlah Pembagi",statement:"Jika $n=\\prod p_i^{\\alpha_i}$, maka $\\sigma(n)=\\prod_i(1+p_i+\\cdots+p_i^{\\alpha_i})$."}
    ];
    if(/totient|fungsi totient/.test(text))return[
      {kind:"proposition",title:"Formula Totient Euler",statement:"$\\varphi(n)=n\\prod_{p\\mid n}(1-1/p)$."}
    ];
    if(/möbius|mobius|dirichlet convolution/.test(text))return[
      {kind:"definition",title:"Konvolusi Dirichlet",statement:"$(f*g)(n)=\\sum_{d\\mid n}f(d)g(n/d)$."},
      {kind:"theorem",title:"Inversi Möbius",statement:"Jika $F(n)=\\sum_{d\\mid n}f(d)$, maka $f(n)=\\sum_{d\\mid n}\\mu(d)F(n/d)$."}
    ];
    if(/pythagorean|tripel pythagoras/.test(text))return[
      {kind:"theorem",title:"Parametrisasi Tripel Pythagoras Primitif",statement:"Jika $x^2+y^2=z^2$ dan $\\gcd(x,y,z)=1$, setelah menukar $x,y$ bila perlu terdapat koprima $m>n$ dengan paritas berbeda sehingga $x=m^2-n^2$, $y=2mn$, dan $z=m^2+n^2$."}
    ];
    if(/infinite descent/.test(text))return[
      {kind:"note",title:"Prinsip Infinite Descent",statement:"Untuk membuktikan ketidakadaan solusi positif, andaikan solusi minimal ada lalu konstruksikan solusi positif yang lebih kecil, menghasilkan kontradiksi terhadap minimalitas."}
    ];
    if(/vieta jumping/.test(text))return[
      {kind:"note",title:"Vieta Jumping",statement:"Persamaan Diophantine kuadratik dalam satu variabel dipandang sebagai polinom. Hubungan Vieta digunakan untuk mengganti satu akar integer dengan akar integer lain yang lebih kecil dan mempertahankan struktur persamaan."}
    ];
    if(/pell/.test(text))return[
      {kind:"definition",title:"Persamaan Pell",statement:"Persamaan Pell berbentuk $x^2-Dy^2=1$ dengan $D$ positif bukan kuadrat."},
      {kind:"proposition",title:"Komposisi Solusi Pell",statement:"Jika $x_1+y_1\\sqrt D$ dan $x_2+y_2\\sqrt D$ mempunyai norm 1, hasil kalinya juga mempunyai norm 1."}
    ];
    if(/square root of -1|akar kuadrat dari −1|akar kuadrat dari -1/.test(text))return[
      {kind:"proposition",title:"Kriteria $-1$ sebagai Residu Kuadrat",statement:"Untuk prima ganjil $p$, kongruensi $x^2\\equiv-1\\pmod p$ mempunyai solusi jika dan hanya jika $p\\equiv1\\pmod4$."}
    ];
    if(/orders|orde multiplikatif/.test(text))return[
      {kind:"definition",title:"Orde Multiplikatif",statement:"Jika $\\gcd(a,n)=1$, $\\operatorname{ord}_n(a)$ adalah integer positif terkecil $r$ dengan $a^r\\equiv1\\pmod n$."},
      {kind:"proposition",title:"Orde Membagi Eksponen",statement:"Jika $a^m\\equiv1\\pmod n$, maka $\\operatorname{ord}_n(a)\\mid m$."}
    ];
    if(/primitive root|akar primitif/.test(text))return[
      {kind:"definition",title:"Akar Primitif",statement:"Akar primitif modulo $n$ adalah kelas residu yang menghasilkan seluruh grup unit modulo $n$ melalui pangkat-pangkatnya."}
    ];
    if(/legendre formula|formula legendre/.test(text))return[
      {kind:"theorem",title:"Formula Legendre",statement:"$v_p(n!)=\\sum_{k\\ge1}\\left\\lfloor n/p^k\\right\\rfloor$.",proof:["Kelipatan $p$ menyumbang sedikitnya satu faktor $p$, jumlahnya $\\lfloor n/p\\rfloor$.","Kelipatan $p^2$ menyumbang satu faktor tambahan, dan seterusnya.","Menjumlahkan semua kontribusi memberi formula."]}
    ];
    if(/\blte\b|lifting the exponent/.test(text))return[
      {kind:"theorem",title:"LTE untuk Selisih Pangkat",statement:"Untuk prima ganjil $p$ dengan $p\\mid x-y$, $p\\nmid xy$, berlaku $v_p(x^n-y^n)=v_p(x-y)+v_p(n)$."},
      {kind:"note",title:"Periksa Hipotesis",statement:"LTE tidak boleh digunakan sebelum memastikan syarat prima, keterbagian $x-y$ atau $x+y$, dan kondisi paritas yang sesuai."}
    ];
    if(/zsigmondy/.test(text))return[
      {kind:"theorem",title:"Teorema Zsigmondy",statement:"Untuk $a>b>0$ koprima, pada hampir semua $n>1$ terdapat prima yang membagi $a^n-b^n$ tetapi tidak membagi $a^k-b^k$ untuk $1\\le k<n$, dengan pengecualian klasik tertentu."}
    ];
    if(/lagrange interpolation|interpolasi lagrange/.test(text))return[
      {kind:"theorem",title:"Interpolasi Lagrange",statement:"Untuk titik berbeda $x_0,\\ldots,x_n$ dan nilai $y_i$, terdapat unik polinom berderajat paling tinggi $n$ yang memenuhi $P(x_i)=y_i$, yaitu $P(x)=\\sum_i y_i\\prod_{j\\ne i}\\frac{x-x_j}{x_i-x_j}$."}
    ];
    if(/gauss.?s lemma|lemma gauss/.test(text))return[
      {kind:"lemma",title:"Lemma Gauss untuk Polinom Primitif",statement:"Hasil kali dua polinom primitif di $\\mathbb Z[x]$ tetap primitif."}
    ];
    if(/quadratic reciprocity|resiprositas kuadrat/.test(text))return[
      {kind:"theorem",title:"Hukum Resiprositas Kuadrat",statement:"Untuk prima ganjil berbeda $p,q$, $\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{(p-1)(q-1)/4}$."}
    ];
    if(/chinese remainder|teorema sisa cina|\bcrt\b/.test(text))return[
      {kind:"theorem",title:"Teorema Sisa Cina",statement:"Jika $m_1,\\ldots,m_r$ saling koprima berpasangan, sistem $x\\equiv a_i\\pmod{m_i}$ mempunyai solusi unik modulo $M=m_1\\cdots m_r$.",proof:["Definisikan $M_i=M/m_i$.","Karena $\\gcd(M_i,m_i)=1$, pilih $u_i$ dengan $M_iu_i\\equiv1\\pmod{m_i}$.","Nilai $x=\\sum_i a_iM_iu_i$ memenuhi seluruh kongruensi.","Jika dua solusi ada, selisihnya habis dibagi semua $m_i$, sehingga habis dibagi $M$."]}
    ];
  }

  if(subject==="persamaan-diferensial"){
    if(/general remarks on solutions|catatan umum tentang solusi/.test(text))return[
      {kind:"definition",title:"Solusi Umum dan Khusus",statement:"Solusi umum memuat konstanta bebas yang mewakili keluarga kurva, sedangkan solusi khusus diperoleh setelah konstanta ditentukan oleh syarat awal atau batas."},
      {kind:"note",title:"Verifikasi Solusi",statement:"Solusi kandidat harus disubstitusikan kembali ke persamaan pada interval tempat seluruh ekspresi terdefinisi."}
    ];
    if(/orthogonal trajectories|trajektori ortogonal/.test(text))return[
      {kind:"definition",title:"Trajektori Ortogonal",statement:"Dua keluarga kurva ortogonal jika pada setiap titik perpotongan, hasil kali kemiringan tangent keduanya adalah $-1$ ketika kedua kemiringan hingga dan tak nol."}
    ];
    if(/growth|decay|mixing|pertumbuhan|peluruhan|pencampuran/.test(text))return[
      {kind:"proposition",title:"Model Pertumbuhan–Peluruhan",statement:"Jika laju perubahan sebanding dengan jumlah saat ini, $y'=ky$, maka $y(t)=Ce^{kt}$."},
      {kind:"note",title:"Model Pencampuran",statement:"Persamaan dasar pencampuran adalah laju perubahan jumlah zat = laju masuk − laju keluar, dengan konsentrasi keluar diasumsikan sama dengan konsentrasi campuran saat itu."}
    ];
    if(/falling bodies|benda jatuh|drag|terminal velocity/.test(text))return[
      {kind:"proposition",title:"Gerak dengan Hambatan Linear",statement:"Jika arah turun positif dan gaya hambat $-kv$, maka $mv'=mg-kv$."},
      {kind:"proposition",title:"Kecepatan Terminal",statement:"Equilibrium kecepatan model $mv'=mg-kv$ adalah $v_T=mg/k$."}
    ];
    if(/homogeneous equations|persamaan homogen orde satu|substitution y=vx/.test(text))return[
      {kind:"proposition",title:"Substitusi Homogen",statement:"Jika $y'=F(y/x)$, substitusi $y=vx$ memberi $y'=v+xv'$ dan mengubah persamaan menjadi persamaan separable dalam $v$ dan $x$."}
    ];
    if(/exact equations|persamaan eksak/.test(text))return[
      {kind:"definition",title:"Persamaan Eksak",statement:"Persamaan $M(x,y)dx+N(x,y)dy=0$ eksak jika terdapat $F$ dengan $F_x=M$ dan $F_y=N$."},
      {kind:"proposition",title:"Uji Eksak",statement:"Pada domain sederhana dengan turunan parsial kontinu, $M_y=N_x$ merupakan kriteria eksak."}
    ];
    if(/integrating factor|faktor integrasi/.test(text))return[
      {kind:"definition",title:"Faktor Integrasi",statement:"Faktor integrasi adalah fungsi tak nol $\\mu$ yang mengubah persamaan diferensial menjadi bentuk eksak atau menjadi turunan dari suatu hasil kali."},
      {kind:"proposition",title:"Faktor Integrasi Linear Orde Satu",statement:"Untuk $y'+P(x)y=Q(x)$, faktor integrasi adalah $\\mu(x)=e^{\\int P(x)dx}$."}
    ];
    if(/linear equations|persamaan linear orde satu/.test(text))return[
      {kind:"theorem",title:"Solusi Linear Orde Satu",statement:"Persamaan $y'+P(x)y=Q(x)$ mempunyai bentuk solusi $y=\\mu^{-1}(\\int\\mu Q\\,dx+C)$ dengan $\\mu=e^{\\int Pdx}$."}
    ];
    if(/general solution.*homogeneous|solusi umum persamaan homogen/.test(text))return[
      {kind:"theorem",title:"Ruang Solusi Homogen Orde Dua",statement:"Jika $y_1,y_2$ solusi bebas linear dari $y''+P(x)y'+Q(x)y=0$, maka setiap solusi adalah $c_1y_1+c_2y_2$ pada interval yang sesuai."},
      {kind:"definition",title:"Wronskian",statement:"$W(y_1,y_2)=y_1y_2'-y_1'y_2$; jika $W(x_0)\\ne0$, kedua solusi bebas linear."}
    ];
    if(/constant coefficients|koefisien konstan/.test(text))return[
      {kind:"proposition",title:"Persamaan Karakteristik",statement:"Untuk $ay''+by'+cy=0$, substitusi $y=e^{rx}$ menghasilkan persamaan karakteristik $ar^2+br+c=0$."},
      {kind:"note",title:"Tiga Kasus Akar",statement:"Akar real berbeda memberi $e^{r_1x},e^{r_2x}$; akar berulang $r$ memberi $e^{rx},xe^{rx}$; akar kompleks $\\alpha\\pm i\\beta$ memberi $e^{\\alpha x}\\cos\\beta x$ dan $e^{\\alpha x}\\sin\\beta x$."}
    ];
    if(/undetermined coefficients|koefisien tak tentu/.test(text))return[
      {kind:"note",title:"Metode Koefisien Tak Tentu",statement:"Bentuk tebakan solusi particular mengikuti bentuk forcing. Jika tebakan bertumpang tindih dengan solusi homogen, kalikan dengan pangkat $x$ secukupnya untuk menghilangkan resonansi."}
    ];
    if(/variation of parameters|variasi parameter/.test(text))return[
      {kind:"theorem",title:"Variasi Parameter Orde Dua",statement:"Untuk $y''+P y'+Qy=g$ dan basis homogen $y_1,y_2$, solusi particular dapat diambil $y_p=-y_1\\int\\frac{y_2g}{W}dx+y_2\\int\\frac{y_1g}{W}dx$."}
    ];
    if(/vibrations|getaran|harmonic oscillator/.test(text))return[
      {kind:"definition",title:"Osilator Teredam",statement:"Model $my''+cy'+ky=F(t)$ memuat massa $m$, redaman $c$, kekakuan $k$, dan gaya luar $F$."},
      {kind:"note",title:"Resonansi",statement:"Pada sistem terpaksa, amplitudo dapat membesar ketika frekuensi forcing dekat dengan frekuensi alami, dengan perilaku dipengaruhi redaman."}
    ];
    if(/sturm separation|pemisahan sturm/.test(text))return[
      {kind:"theorem",title:"Teorema Pemisahan Sturm",statement:"Untuk dua solusi bebas linear persamaan linear orde dua dalam bentuk yang sesuai, nol keduanya saling berselang-seling."}
    ];
    if(/sturm comparison|perbandingan sturm/.test(text))return[
      {kind:"theorem",title:"Teorema Perbandingan Sturm",statement:"Jika koefisien potensial pada satu persamaan lebih besar dalam arti yang sesuai, solusi persamaan tersebut berosilasi setidaknya secepat solusi persamaan pembanding."}
    ];
    if(/ordinary points|titik biasa/.test(text))return[
      {kind:"definition",title:"Titik Biasa",statement:"Pada $y''+P(x)y'+Q(x)y=0$, titik $x_0$ biasa jika $P$ dan $Q$ analitik di sekitar $x_0$."},
      {kind:"note",title:"Solusi Deret",statement:"Di titik biasa, substitusi $y=\\sum_{n=0}^\\infty a_n(x-x_0)^n$ menghasilkan relasi rekurensi untuk koefisien."}
    ];
    if(/regular singular|singular regular/.test(text))return[
      {kind:"definition",title:"Titik Singular Regular",statement:"Untuk bentuk $y''+P(x)y'+Q(x)y=0$, titik $x_0$ singular regular jika $(x-x_0)P(x)$ dan $(x-x_0)^2Q(x)$ analitik di $x_0$."},
      {kind:"note",title:"Metode Frobenius",statement:"Cari solusi $y=(x-x_0)^r\\sum_{n=0}^\\infty a_n(x-x_0)^n$ dan tentukan $r$ dari persamaan indisial."}
    ];
    if(/fourier coefficients|koefisien fourier/.test(text))return[
      {kind:"proposition",title:"Koefisien Fourier",statement:"Untuk fungsi periode $2L$, $a_n=\\frac1L\\int_{-L}^L f(x)\\cos(n\\pi x/L)dx$ dan $b_n=\\frac1L\\int_{-L}^L f(x)\\sin(n\\pi x/L)dx$."}
    ];
    if(/even and odd|genap-ganjil|cosine and sine/.test(text))return[
      {kind:"proposition",title:"Simetri Fourier",statement:"Jika $f$ genap, seluruh koefisien sine $b_n$ nol. Jika $f$ ganjil, seluruh koefisien cosine $a_n$ termasuk $a_0$ nol."}
    ];
    if(/heat equation|persamaan panas/.test(text))return[
      {kind:"definition",title:"Persamaan Panas",statement:"Model difusi satu dimensi ideal adalah $u_t=\\kappa u_{xx}$."},
      {kind:"note",title:"Pemisahan Variabel",statement:"Ansatz $u(x,t)=X(x)T(t)$ mengubah PDE menjadi pasangan ODE yang dihubungkan oleh konstanta pemisahan."}
    ];
    if(/vibrating string|dawai bergetar|wave equation/.test(text))return[
      {kind:"definition",title:"Persamaan Gelombang",statement:"Dawai ideal memenuhi $u_{tt}=c^2u_{xx}$ dengan kondisi awal dan kondisi batas yang sesuai."}
    ];
    if(/sturm.liouville/.test(text))return[
      {kind:"definition",title:"Masalah Sturm–Liouville",statement:"Bentuk regular adalah $-(py')'+qy=\\lambda wy$ bersama kondisi batas linear, dengan fungsi bobot $w>0$."},
      {kind:"proposition",title:"Ortogonalitas Fungsi Eigen",statement:"Fungsi eigen yang bersesuaian dengan nilai eigen berbeda ortogonal terhadap hasil kali dalam berbobot $\\int wuv$."}
    ];
    if(/laplace transform|transformasi laplace/.test(text))return[
      {kind:"definition",title:"Transformasi Laplace",statement:"$\\mathcal L\\{f\\}(s)=\\int_0^\\infty e^{-st}f(t)dt$ ketika integral konvergen."},
      {kind:"proposition",title:"Transformasi Turunan",statement:"$\\mathcal L\\{f'\\}(s)=sF(s)-f(0)$ di bawah hipotesis yang sesuai.",proof:["Integrasikan $\\int_0^\\infty e^{-st}f'(t)dt$ dengan parsial.","Suku batas memberi $-f(0)$ jika $e^{-st}f(t)\\to0$.","Sisa integral adalah $sF(s)$."]}
    ];
    if(/systems|sistem.*persamaan|phase plane|bidang fase/.test(text))return[
      {kind:"definition",title:"Sistem Linear",statement:"Sistem $\\mathbf x'=A\\mathbf x$ mempunyai solusi yang dikendalikan oleh struktur spektral matriks $A$."},
      {kind:"note",title:"Bidang Fase",statement:"Bidang fase menggambarkan lintasan solusi tanpa harus menuliskan waktu secara eksplisit pada setiap titik."}
    ];
    if(/lyapunov|stability|stabilitas/.test(text))return[
      {kind:"definition",title:"Stabilitas Lyapunov",statement:"Equilibrium $x_*$ stabil jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga solusi yang mulai dalam jarak $\\delta$ dari $x_*$ tetap dalam jarak $\\varepsilon$ untuk seluruh waktu maju."}
    ];
    if(/euler.lagrange|kalkulus variasi|calculus of variations/.test(text))return[
      {kind:"theorem",title:"Persamaan Euler–Lagrange",statement:"Ekstremal halus dari $J[y]=\\int_a^bF(x,y,y')dx$ memenuhi $F_y-\\frac d{dx}F_{y'}=0$."}
    ];
    if(/picard|existence|eksistensi|uniqueness|keunikan/.test(text))return[
      {kind:"theorem",title:"Picard–Lindelöf",statement:"Jika $f(t,y)$ kontinu dan lokal Lipschitz terhadap $y$, masalah nilai awal $y'=f(t,y)$, $y(t_0)=y_0$, mempunyai solusi lokal yang unik."}
    ];
    if(/euler method|metode euler|runge|numerik/.test(text))return[
      {kind:"proposition",title:"Metode Euler",statement:"Dengan langkah $h$, aproksimasi memenuhi $y_{n+1}=y_n+h f(t_n,y_n)$."},
      {kind:"note",title:"Galat dan Stabilitas",statement:"Ukuran langkah kecil memperbaiki galat truncation lokal, tetapi biaya komputasi dan efek pembulatan juga perlu diperhatikan."}
    ];
  }

  return[];
}

function sectionExamples(subject:string,sectionTitle:string,keyIdeas:string[]):BookExample[]{
  const text=(sectionTitle+" "+keyIdeas.join(" ")).toLowerCase();

  if(subject==="kalkulus"){
    if(/epsilon|presisi limit/.test(text))return[
      {title:"Bukti Limit dengan $\\varepsilon$–$\\delta$",problem:"Buktikan $\\lim_{x\\to2}(3x+1)=7$.",solution:["Diberikan $\\varepsilon>0$.","Karena $|(3x+1)-7|=3|x-2|$, pilih $\\delta=\\varepsilon/3$.","Jika $0<|x-2|<\\delta$, diperoleh $|(3x+1)-7|<\\varepsilon$."],conclusion:"Limit terbukti langsung dari definisi."}
    ];
    if(/chain rule|aturan rantai/.test(text))return[
      {title:"Komposisi Bertingkat",problem:"Tentukan turunan $f(x)=(1+x^2)^5$.",solution:["Fungsi luar adalah $u^5$ dan fungsi dalam $u=1+x^2$.","Turunan luar memberi $5u^4$, sedangkan turunan dalam $2x$.","Diperoleh $f'(x)=10x(1+x^2)^4$."],conclusion:"Faktor turunan fungsi dalam wajib muncul."}
    ];
    if(/fundamental theorem|teorema dasar/.test(text))return[
      {title:"Fungsi Akumulasi",problem:"Jika $F(x)=\\int_1^x(t^2+1)dt$, tentukan $F'(x)$.",solution:["Integran kontinu.","FTC Bagian I langsung memberi $F'(x)=x^2+1$."],conclusion:"Diferensiasi membatalkan proses akumulasi integral."}
    ];
    if(/taylor|maclaurin/.test(text))return[
      {title:"Aproksimasi $e^x$",problem:"Gunakan polinom Maclaurin orde 3 untuk mengaproksimasi $e^{0.1}$.",solution:["Polinomnya $P_3(x)=1+x+x^2/2+x^3/6$.","Substitusi $x=0.1$ memberi $1+0.1+0.005+0.000166\\ldots$.","Diperoleh aproksimasi $1.105166\\ldots$."],conclusion:"Remainder digunakan untuk menilai galat."}
    ];
    if(/green|stokes|divergence/.test(text))return[
      {title:"Orientasi Sebelum Mengintegralkan",problem:"Jelaskan pemeriksaan pertama sebelum memakai teorema integral vektor.",solution:["Identifikasi domain dan batasnya.","Tentukan orientasi kurva atau normal permukaan.","Periksa regularitas medan.","Cocokkan integrand dengan curl atau divergence yang sesuai."],conclusion:"Kesalahan orientasi dapat membalik tanda hasil."}
    ];
  }

  if(subject==="teori-graf"){
    if(/eulerian/.test(text))return[
      {title:"Menguji Graf Eulerian",problem:"Graf terhubung mempunyai derajat simpul $2,2,4,4,4$. Apakah graf tersebut dapat mempunyai sirkuit Euler?",solution:["Seluruh derajat bernilai genap.","Dengan asumsi graf terhubung, kriteria Euler terpenuhi."],conclusion:"Graf mempunyai sirkuit Euler."}
    ];
    if(/chromatic polynomial/.test(text))return[
      {title:"Polinom Kromatik Pohon",problem:"Tentukan $P_T(k)$ untuk pohon berorde $n$.",solution:["Pilih warna akar dalam $k$ cara.","Setiap simpul berikutnya pada traversal pohon mempunyai $k-1$ pilihan karena hanya perlu berbeda dari parent.","Diperoleh $P_T(k)=k(k-1)^{n-1}$."],conclusion:"Struktur acyclic membuat pencacahan warna sederhana."}
    ];
    if(/hall|marriage/.test(text))return[
      {title:"Memeriksa Kondisi Hall",problem:"Untuk bagian kiri $X=\\{a,b,c\\}$ dengan $N(a)=\\{1,2\\}$, $N(b)=\\{2,3\\}$, $N(c)=\\{1,3\\}$, periksa apakah Hall terpenuhi.",solution:["Setiap singleton mempunyai sedikitnya satu tetangga.","Setiap pasangan simpul kiri mempunyai gabungan tiga tetangga atau sedikitnya dua.","Seluruh $X$ mempunyai tiga tetangga.","Semua subset memenuhi $|N(S)|\\ge|S|$."],conclusion:"Terdapat matching yang menjodohkan seluruh $X$."}
    ];
  }

  if(subject==="teori-bilangan-olimpiade"){
    if(/euclid.?s division algorithm|algoritma euclid/.test(text))return[
      {title:"FPB dengan Algoritma Euclid",problem:"Tentukan $\\gcd(252,198)$.",solution:["$252=198+54$.","$198=3\\cdot54+36$.","$54=36+18$.","$36=2\\cdot18$.","Sisa tak nol terakhir adalah 18."],conclusion:"$\\gcd(252,198)=18$."}
    ];
    if(/\blte\b|lifting the exponent/.test(text))return[
      {title:"Contoh LTE",problem:"Tentukan $v_3(10^6-1)$.",solution:["Karena $3\\mid10-1$ dan $3\\nmid10$, LTE berlaku.","$v_3(10^6-1)=v_3(10-1)+v_3(6)=2+1=3$."],conclusion:"Pangkat terbesar 3 yang membagi $10^6-1$ adalah $3^3$."}
    ];
    if(/chinese remainder|teorema sisa cina|\bcrt\b/.test(text))return[
      {title:"Sistem Kongruensi",problem:"Tentukan $x$ modulo 15 jika $x\\equiv2\\pmod3$ dan $x\\equiv4\\pmod5$.",solution:["Bilangan yang kongruen 4 modulo 5 adalah $4,9,14,\\ldots$.","Di antaranya, $14\\equiv2\\pmod3$.","Karena 3 dan 5 koprima, solusi unik modulo 15."],conclusion:"$x\\equiv14\\pmod{15}$."}
    ];
    if(/quadratic reciprocity|resiprositas kuadrat/.test(text))return[
      {title:"Evaluasi Simbol Legendre",problem:"Tentukan apakah 3 merupakan residu kuadrat modulo 13.",solution:["Hitung kuadrat nonnol modulo 13: $1,4,9,3,12,10$ untuk wakil $1$ sampai $6$.","Nilai 3 muncul dalam daftar."],conclusion:"$\\left(\\frac3{13}\\right)=1$."}
    ];
  }

  if(subject==="persamaan-diferensial"){
    if(/exact equations|persamaan eksak/.test(text))return[
      {title:"Persamaan Eksak",problem:"Selesaikan $(2x+y)dx+(x+2y)dy=0$.",solution:["$M_y=1$ dan $N_x=1$, sehingga persamaan eksak.","Integrasikan $F_x=2x+y$ terhadap $x$: $F=x^2+xy+g(y)$.","Cocokkan $F_y=x+g'(y)=x+2y$, sehingga $g(y)=y^2$.","Solusi implisitnya $x^2+xy+y^2=C$."],conclusion:"Potensial mengubah ODE menjadi level set."}
    ];
    if(/constant coefficients|koefisien konstan/.test(text))return[
      {title:"Akar Karakteristik",problem:"Selesaikan $y''-5y'+6y=0$.",solution:["Persamaan karakteristik $r^2-5r+6=0$.","Faktorkan menjadi $(r-2)(r-3)=0$.","Dua akar berbeda memberi $y=C_1e^{2x}+C_2e^{3x}$."],conclusion:"Struktur solusi mengikuti tipe akar karakteristik."}
    ];
    if(/laplace transform|transformasi laplace/.test(text))return[
      {title:"Transformasi Masalah Nilai Awal",problem:"Untuk $y'+y=0$, $y(0)=2$, gunakan transformasi Laplace.",solution:["Ambil transformasi: $sY(s)-2+Y(s)=0$.","Diperoleh $(s+1)Y(s)=2$.","Jadi $Y(s)=2/(s+1)$.","Transformasi balik memberi $y(t)=2e^{-t}$."],conclusion:"Kondisi awal masuk secara aljabar melalui transformasi turunan."}
    ];
  }

  return[];
}

function chapterFormal(subject:string,chapter:string):BookFormalItem[]{
  if(subject==="kalkulus"){
    if(chapter==="1")return[
      {kind:"definition",title:"Fungsi",statement:"Fungsi $f:D\\to Y$ memasangkan setiap $x\\in D$ dengan tepat satu nilai $f(x)\\in Y$."},
      {kind:"proposition",title:"Komposisi Fungsi",statement:"Jika $f:A\\to B$ dan $g:B\\to C$, komposisi $(g\\circ f)(x)=g(f(x))$ merupakan fungsi dari $A$ ke $C$.",proof:["Diambil sebarang $x\\in A$.","Karena $f(x)\\in B$, nilai $g(f(x))$ terdefinisi dan tunggal.","Dengan demikian $g\\circ f$ memenuhi definisi fungsi."]},
      {kind:"note",title:"Representasi",statement:"Satu fungsi dapat dipahami melalui rumus, tabel, grafik, atau deskripsi verbal; domain dan range harus selalu diperiksa."},
    ];
    if(chapter==="2")return[
      {kind:"definition",title:"Limit Fungsi",statement:"Nilai $L$ disebut limit $f(x)$ ketika $x\\to a$ apabila untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $0<|x-a|<\\delta$ mengakibatkan $|f(x)-L|<\\varepsilon$."},
      {kind:"theorem",title:"Keunikan Limit",statement:"Jika limit $f(x)$ ketika $x\\to a$ ada, nilainya tunggal.",proof:["Diandaikan $f(x)\\to L$ dan $f(x)\\to M$ dengan $L\\ne M$.","Diambil $\\varepsilon=|L-M|/3$. Untuk $x$ cukup dekat ke $a$, berlaku $|f(x)-L|<\\varepsilon$ dan $|f(x)-M|<\\varepsilon$.","Ketaksamaan segitiga memberi $|L-M|<2\\varepsilon=2|L-M|/3$, suatu kontradiksi.","Dengan demikian $L=M$."]},
      {kind:"definition",title:"Kontinuitas",statement:"Fungsi $f$ kontinu di $a$ apabila $\\lim_{x\\to a}f(x)=f(a)$."},
    ];
    if(chapter==="3"||chapter==="4")return[
      {kind:"definition",title:"Turunan",statement:"Turunan $f$ di $a$ didefinisikan oleh $f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$ apabila limit tersebut ada."},
      {kind:"theorem",title:"Diferensiabilitas Mengakibatkan Kontinuitas",statement:"Jika $f$ terdiferensial di $a$, maka $f$ kontinu di $a$.",proof:["Dituliskan $f(a+h)-f(a)=h\\,\\frac{f(a+h)-f(a)}h$.","Ketika $h\\to0$, faktor pertama menuju $0$ dan faktor kedua menuju $f'(a)$.","Oleh karena itu $f(a+h)-f(a)\\to0$, sehingga $f(a+h)\\to f(a)$."]},
      {kind:"theorem",title:"Teorema Nilai Rata-rata",statement:"Jika $f$ kontinu pada $[a,b]$ dan terdiferensial pada $(a,b)$, terdapat $c\\in(a,b)$ dengan $f'(c)=\\frac{f(b)-f(a)}{b-a}$."},
    ];
    if(["5","6","7","8"].includes(chapter))return[
      {kind:"definition",title:"Integral Tentu",statement:"Integral tentu dapat didefinisikan sebagai limit jumlah Riemann $\\sum f(t_i)\\Delta x_i$ ketika norma partisi menuju nol, apabila limit tersebut ada dan tidak bergantung pada pilihan label."},
      {kind:"theorem",title:"Teorema Dasar Kalkulus",statement:"Untuk fungsi kontinu, diferensiasi dan integrasi merupakan operasi yang saling berhubungan melalui fungsi akumulasi dan antiturunan."},
      {kind:"proposition",title:"Linearitas Integral",statement:"Jika $f,g$ integrabel dan $\\alpha,\\beta$ skalar, maka $\\int(\\alpha f+\\beta g)=\\alpha\\int f+\\beta\\int g$."},
    ];
    if(chapter==="9"||chapter==="17")return[
      {kind:"definition",title:"Solusi Persamaan Diferensial",statement:"Fungsi $y$ disebut solusi suatu persamaan diferensial pada interval apabila $y$ memiliki turunan yang diperlukan dan memenuhi persamaan pada setiap titik interval."},
      {kind:"definition",title:"Masalah Nilai Awal",statement:"Masalah nilai awal terdiri atas persamaan diferensial beserta nilai fungsi atau turunannya pada suatu titik awal."},
      {kind:"note",title:"Analisis Kualitatif dan Numerik",statement:"Selain solusi eksplisit, medan kemiringan, kestabilan, dan aproksimasi numerik dapat digunakan untuk memahami perilaku solusi."},
    ];
    if(chapter==="10")return[
      {kind:"definition",title:"Konvergensi Deret",statement:"Deret $\\sum a_n$ konvergen apabila barisan jumlah parsial $S_N=\\sum_{n=1}^N a_n$ mempunyai limit hingga."},
      {kind:"theorem",title:"Deret Geometri",statement:"Untuk $|r|<1$, berlaku $\\sum_{n=0}^{\\infty}r^n=\\frac1{1-r}$.",proof:["Jumlah parsial adalah $S_N=(1-r^{N+1})/(1-r)$ untuk $r\\ne1$.","Karena $|r|<1$, diperoleh $r^{N+1}\\to0$.","Dengan demikian $S_N\\to1/(1-r)$."]},
      {kind:"note",title:"Pemilihan Uji",statement:"Uji konvergensi dipilih berdasarkan struktur suku: perbandingan untuk suku positif, rasio/akar untuk faktorial atau pangkat, dan alternating test untuk tanda berselang-seling."},
    ];
    if(chapter==="11")return[
      {kind:"definition",title:"Kurva Parametrik",statement:"Kurva parametrik diberikan oleh $x=x(t)$ dan $y=y(t)$; parameter menentukan posisi sekaligus orientasi gerak pada kurva."},
      {kind:"definition",title:"Koordinat Polar",statement:"Koordinat polar $(r,\\theta)$ mewakili titik dengan $x=r\\cos\\theta$ dan $y=r\\sin\\theta$."},
      {kind:"proposition",title:"Turunan Parametrik",statement:"Jika $dx/dt\\ne0$, maka $dy/dx=(dy/dt)/(dx/dt)$."},
    ];
    if(["12","13"].includes(chapter))return[
      {kind:"definition",title:"Vektor",statement:"Vektor di $\\mathbb R^n$ adalah tuple terurut yang dapat dijumlahkan dan dikalikan skalar secara komponen."},
      {kind:"definition",title:"Hasil Kali Titik",statement:"Untuk $u,v\\in\\mathbb R^n$, $u\\cdot v=\\sum_i u_iv_i$; dua vektor tak nol ortogonal apabila hasil kali titiknya nol."},
      {kind:"proposition",title:"Turunan Fungsi Vektor",statement:"Turunan fungsi vektor dihitung komponen demi komponen, selama setiap komponen terdiferensial."},
    ];
    if(chapter==="14")return[
      {kind:"definition",title:"Turunan Parsial",statement:"Turunan parsial terhadap satu variabel diperoleh dengan mendiferensialkan terhadap variabel tersebut sambil menahan variabel lain tetap."},
      {kind:"definition",title:"Gradien",statement:"Gradien $\\nabla f$ adalah vektor seluruh turunan parsial pertama dan menunjuk arah kenaikan paling cepat ketika gradien tidak nol."},
      {kind:"proposition",title:"Turunan Arah",statement:"Jika $f$ terdiferensial dan $u$ vektor satuan, maka $D_uf=\\nabla f\\cdot u$."},
    ];
    if(chapter==="15")return[
      {kind:"definition",title:"Integral Lipat",statement:"Integral lipat mengakumulasikan nilai fungsi pada daerah berdimensi dua atau tiga melalui limit jumlah atas partisi daerah."},
      {kind:"theorem",title:"Prinsip Fubini",statement:"Di bawah hipotesis integrabilitas yang sesuai, integral ganda dapat dihitung sebagai integral iterasi."},
      {kind:"note",title:"Jacobian",statement:"Perubahan koordinat memerlukan faktor Jacobian yang mengukur perubahan skala luas atau volume."},
    ];
    if(chapter==="16")return[
      {kind:"definition",title:"Medan Vektor",statement:"Medan vektor memasangkan setiap titik domain dengan sebuah vektor."},
      {kind:"definition",title:"Medan Konservatif",statement:"Medan $F$ disebut konservatif apabila terdapat fungsi potensial $\\phi$ dengan $F=\\nabla\\phi$."},
      {kind:"theorem",title:"Teorema Fundamental Integral Garis",statement:"Jika $F=\\nabla\\phi$, integral garis $\\int_C F\\cdot d\\mathbf r$ hanya bergantung pada titik awal dan akhir lintasan."},
    ];
    return[{kind:"note",title:"Fondasi Kalkulus",statement:"Submateri ini memperkuat fondasi aljabar, geometri, limit, atau vektor yang digunakan dalam kalkulus."}];
  }

  if(subject==="teori-graf"){
    if(chapter==="1")return[
      {kind:"definition",title:"Graf",statement:"Graf $G=(V,E)$ terdiri atas himpunan simpul $V$ dan keluarga sisi $E$ yang menghubungkan pasangan simpul."},
      {kind:"definition",title:"Derajat",statement:"Derajat $\\deg(v)$ adalah banyak sisi yang insiden dengan $v$, dengan loop dihitung dua kali pada graf umum."},
      {kind:"theorem",title:"Handshaking Lemma",statement:"Untuk graf hingga, $\\sum_{v\\in V}\\deg(v)=2|E|$.",proof:["Setiap sisi mempunyai dua ujung.","Ketika seluruh derajat dijumlahkan, setiap sisi dihitung tepat dua kali.","Akibatnya jumlah derajat sama dengan $2|E|$."]},
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
      {kind:"corollary",title:"Batas Sisi Graf Planar Sederhana",statement:"Jika graf planar sederhana terhubung mempunyai $n\\ge3$ simpul, maka $|E|\\le3n-6$."},
    ];
    if(chapter==="5")return[
      {kind:"definition",title:"Pewarnaan Proper",statement:"Pewarnaan simpul proper memberi warna pada simpul sehingga setiap dua simpul bertetangga memperoleh warna berbeda."},
      {kind:"definition",title:"Bilangan Kromatik",statement:"Bilangan kromatik $\\chi(G)$ adalah banyak warna minimum yang diperlukan untuk pewarnaan simpul proper."},
      {kind:"theorem",title:"Teorema Empat Warna",statement:"Setiap graf planar dapat diwarnai secara proper menggunakan paling banyak empat warna."},
    ];
    if(chapter==="6")return[
      {kind:"definition",title:"Matching",statement:"Matching adalah himpunan sisi yang tidak mempunyai ujung bersama."},
      {kind:"theorem",title:"Teorema Hall",statement:"Graf bipartit dengan bagian $X,Y$ mempunyai matching yang menjodohkan seluruh simpul $X$ jika dan hanya jika $|N(S)|\\ge|S|$ untuk setiap $S\\subseteq X$."},
      {kind:"theorem",title:"Max-Flow Min-Cut",statement:"Nilai aliran maksimum dari sumber ke tujuan sama dengan kapasitas minimum suatu cut sumber–tujuan."},
    ];
    if(chapter==="7")return[
      {kind:"definition",title:"Matroid",statement:"Matroid adalah pasangan $(E,\\mathcal I)$ dengan keluarga himpunan independen yang memenuhi aksioma herediter dan pertukaran."},
      {kind:"definition",title:"Basis Matroid",statement:"Basis adalah himpunan independen maksimal; seluruh basis suatu matroid mempunyai kardinalitas sama."},
      {kind:"proposition",title:"Matroid Grafis",statement:"Himpunan sisi acyclic suatu graf membentuk keluarga independen dari sebuah matroid, yaitu cycle matroid."},
    ];
    return[{kind:"note",title:"Algoritma Graf",statement:"Algoritma graf dinilai dari kebenaran, terminasi, dan kompleksitasnya; struktur graf sering memungkinkan pencarian dan optimisasi yang efisien."}];
  }

  if(subject==="teori-bilangan-olimpiade"){
    if(chapter==="1")return[
      {kind:"definition",title:"Keterbagian",statement:"Untuk $a,b\\in\\mathbb Z$, ditulis $a\\mid b$ apabila terdapat $k\\in\\mathbb Z$ dengan $b=ak$."},
      {kind:"theorem",title:"Teorema Bézout",statement:"Untuk $a,b$ tidak keduanya nol, terdapat $x,y\\in\\mathbb Z$ sehingga $ax+by=\\gcd(a,b)$."},
      {kind:"theorem",title:"Teorema Fundamental Aritmetika",statement:"Setiap bilangan bulat positif lebih dari $1$ mempunyai faktorisasi prima yang unik hingga urutan faktor."},
    ];
    if(chapter==="2")return[
      {kind:"definition",title:"Kongruensi",statement:"$a\\equiv b\\pmod m$ apabila $m\\mid(a-b)$."},
      {kind:"theorem",title:"Teorema Kecil Fermat",statement:"Jika $p$ prima dan $p\\nmid a$, maka $a^{p-1}\\equiv1\\pmod p$."},
      {kind:"theorem",title:"Teorema Euler",statement:"Jika $\\gcd(a,n)=1$, maka $a^{\\varphi(n)}\\equiv1\\pmod n$."},
    ];
    if(chapter==="3")return[
      {kind:"definition",title:"Fungsi Multiplikatif",statement:"Fungsi aritmetika $f$ disebut multiplikatif apabila $f(mn)=f(m)f(n)$ untuk $\\gcd(m,n)=1$."},
      {kind:"proposition",title:"Banyak Pembagi",statement:"Jika $n=\\prod p_i^{\\alpha_i}$, maka banyak pembagi positif $n$ adalah $\\tau(n)=\\prod(\\alpha_i+1)$."},
      {kind:"proposition",title:"Formula Totient",statement:"Jika $n=\\prod p_i^{\\alpha_i}$, maka $\\varphi(n)=n\\prod_{p\\mid n}(1-1/p)$."},
    ];
    if(chapter==="4")return[
      {kind:"definition",title:"Persamaan Diophantine",statement:"Persamaan Diophantine adalah persamaan yang solusinya dibatasi pada bilangan bulat atau bilangan asli."},
      {kind:"proposition",title:"Persamaan Linear Diophantine",statement:"Persamaan $ax+by=c$ mempunyai solusi integer jika dan hanya jika $\\gcd(a,b)\\mid c$."},
      {kind:"note",title:"Strategi",statement:"Paritas, faktorisasi, kongruensi, descent, dan Vieta jumping digunakan untuk mempersempit atau mentransformasikan himpunan solusi."},
    ];
    if(chapter==="5")return[
      {kind:"definition",title:"Orde Multiplikatif",statement:"Untuk $\\gcd(a,n)=1$, orde $a$ modulo $n$ adalah bilangan positif terkecil $r$ dengan $a^r\\equiv1\\pmod n$."},
      {kind:"proposition",title:"Orde Membagi Totient",statement:"Orde $a$ modulo $n$ membagi $\\varphi(n)$."},
      {kind:"definition",title:"Akar Primitif",statement:"Akar primitif modulo $n$ adalah elemen yang ordenya sama dengan $\\varphi(n)$."},
    ];
    if(chapter==="6")return[
      {kind:"definition",title:"Valuasi Prima",statement:"$v_p(n)$ adalah eksponen terbesar $k$ sehingga $p^k\\mid n$."},
      {kind:"proposition",title:"Valuasi Hasil Kali",statement:"$v_p(ab)=v_p(a)+v_p(b)$."},
      {kind:"theorem",title:"Formula Legendre",statement:"Untuk prima $p$, $v_p(n!)=\\sum_{k\\ge1}\\left\\lfloor n/p^k\\right\\rfloor$."},
    ];
    if(chapter==="7")return[
      {kind:"theorem",title:"Teorema Sisa",statement:"Untuk polinom $P(x)$, sisa pembagian oleh $x-a$ adalah $P(a)$."},
      {kind:"theorem",title:"Teorema Vieta",statement:"Koefisien polinom monik mengontrol jumlah dan hasil kali akar melalui fungsi simetris elementer."},
      {kind:"lemma",title:"Lemma Gauss",statement:"Polinom primitif di $\\mathbb Z[x]$ yang tereduksi di $\\mathbb Q[x]$ juga tereduksi di $\\mathbb Z[x]$, dan sebaliknya untuk irreducibility."},
    ];
    if(chapter==="8")return[
      {kind:"definition",title:"Residu Kuadrat",statement:"Bilangan $a$ adalah residu kuadrat modulo prima ganjil $p$ apabila terdapat $x$ dengan $x^2\\equiv a\\pmod p$."},
      {kind:"definition",title:"Simbol Legendre",statement:"$\\left(\\frac ap\\right)$ bernilai $1,-1,$ atau $0$ sesuai apakah $a$ residu kuadrat, nonresidu, atau habis dibagi $p$."},
      {kind:"theorem",title:"Resiprositas Kuadrat",statement:"Untuk prima ganjil berbeda $p,q$, berlaku $\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{(p-1)(q-1)/4}$."},
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
      {kind:"definition",title:"Persamaan Linear Orde Dua",statement:"Persamaan $a(x)y''+b(x)y'+c(x)y=g(x)$ disebut linear orde dua jika $a(x)\\ne0$ pada interval."},
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
      {kind:"note",title:"Metode Frobenius",statement:"Solusi dicari dalam bentuk $y=\\sum a_n(x-x_0)^{n+r}$ dan eksponen $r$ ditentukan dari persamaan indisial."},
    ];
    if(chapter==="6")return[
      {kind:"definition",title:"Koefisien Fourier",statement:"Koefisien Fourier diperoleh dengan memproyeksikan fungsi pada basis trigonometri yang ortogonal."},
      {kind:"proposition",title:"Ortogonalitas",statement:"Pada interval satu periode, fungsi sinus dan cosinus dengan frekuensi berbeda mempunyai hasil kali dalam nol."},
      {kind:"note",title:"Konvergensi",statement:"Jenis konvergensi deret Fourier bergantung pada regularitas fungsi dan norma yang digunakan."},
    ];
    if(chapter==="7")return[
      {kind:"definition",title:"Masalah Nilai Batas",statement:"Masalah nilai batas menentukan solusi persamaan diferensial dengan kondisi yang diberikan pada batas domain."},
      {kind:"note",title:"Pemisahan Variabel",statement:"Untuk PDE linear tertentu, solusi produk mengubah PDE menjadi beberapa ODE eigenvalue yang dihubungkan oleh kondisi batas."},
      {kind:"definition",title:"Masalah Sturm–Liouville",statement:"Masalah Sturm–Liouville mencari nilai $\\lambda$ dan fungsi $y$ yang memenuhi persamaan diferensial linear self-adjoint beserta kondisi batas."},
    ];
    if(chapter==="8")return[
      {kind:"note",title:"Fungsi Khusus",statement:"Polinom Legendre dan fungsi Bessel muncul sebagai fungsi eigen dari masalah nilai batas dengan simetri tertentu."},
      {kind:"proposition",title:"Ortogonalitas Fungsi Eigen",statement:"Dalam masalah Sturm–Liouville regular, fungsi eigen yang bersesuaian dengan nilai eigen berbeda ortogonal terhadap bobot yang sesuai."},
    ];
    if(chapter==="9")return[
      {kind:"definition",title:"Transformasi Laplace",statement:"$\\mathcal L\\{f\\}(s)=\\int_0^\\infty e^{-st}f(t)\\,dt$ apabila integral konvergen."},
      {kind:"proposition",title:"Transformasi Turunan",statement:"Jika syarat regularitas terpenuhi, $\\mathcal L\\{f'\\}=sF(s)-f(0)$."},
      {kind:"theorem",title:"Teorema Konvolusi",statement:"Transformasi Laplace konvolusi memenuhi $\\mathcal L\\{f*g\\}=F(s)G(s)$."},
    ];
    if(chapter==="10")return[
      {kind:"definition",title:"Sistem ODE",statement:"Sistem orde satu ditulis $\\mathbf x'=\\mathbf f(t,\\mathbf x)$; solusi adalah kurva pada ruang keadaan."},
      {kind:"proposition",title:"Sistem Linear Konstan",statement:"Untuk $\\mathbf x'=A\\mathbf x$, struktur solusi ditentukan oleh nilai eigen, vektor eigen, atau bentuk kanonik matriks $A$."},
    ];
    if(chapter==="11")return[
      {kind:"definition",title:"Titik Kritis",statement:"Titik $x_*$ adalah equilibrium sistem otonom jika $f(x_*)=0$."},
      {kind:"definition",title:"Stabilitas Lyapunov",statement:"Equilibrium stabil apabila lintasan yang mulai cukup dekat tetap dekat untuk seluruh waktu maju."},
      {kind:"note",title:"Linearisasi",statement:"Di sekitar equilibrium hiperbolik, Jacobian sering menentukan tipe lokal dan stabilitas melalui nilai eigennya."},
    ];
    if(chapter==="12")return[
      {kind:"definition",title:"Fungsional",statement:"Fungsional memetakan suatu fungsi admissible ke sebuah bilangan, misalnya $J[y]=\\int_a^b F(x,y,y')\\,dx$."},
      {kind:"theorem",title:"Persamaan Euler–Lagrange",statement:"Ekstremal halus dari $J[y]=\\int F(x,y,y')dx$ memenuhi $\\frac{\\partial F}{\\partial y}-\\frac d{dx}\\frac{\\partial F}{\\partial y'}=0$."},
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
      {title:"Deret Geometri",problem:"Tentukan konvergensi $\\sum_{n=0}^{\\infty}(1/3)^n$.",solution:["Rasio $r=1/3$ memenuhi $|r|<1$.","Deret geometri konvergen ke $1/(1-r)$.","Diperoleh jumlah $3/2$."]},
      {title:"Uji Perbandingan",problem:"Bandingkan $\\sum 1/(n^2+1)$ dengan deret-$p$ yang sesuai.",solution:["Untuk $n\\ge1$, $0<1/(n^2+1)\\le1/n^2$.","Deret $\\sum1/n^2$ konvergen.","Uji perbandingan memberi konvergensi deret asal."]},
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
    {title:"Membangun Graf Kecil",problem:"Ambil $V=\\{1,2,3,4,5\\}$ dan bentuk contoh graf yang memperlihatkan "+a+".",solution:["Himpunan sisi dipilih secara eksplisit.","Derajat dan adjacency dicatat.","Sifat yang diminta diverifikasi dari definisi, bukan dari tampilan gambar saja."]},
    {title:"Representasi Matriks",problem:"Tuliskan matriks adjacency untuk sebuah graf sederhana berorde empat dan gunakan untuk membaca ketetanggaan.",solution:["Urutan simpul ditetapkan.","Entri $(i,j)$ diisi $1$ tepat ketika simpul $i$ dan $j$ adjacent.","Simetri matriks diperiksa untuk graf tak berarah."]},
    {title:"Pembuktian Struktural",problem:"Gunakan counting atau invariant untuk menjelaskan satu hasil pada "+sectionTitle+".",solution:["Kuantitas yang akan dihitung dipilih.","Objek yang sama dihitung dari dua sudut pandang.","Kesamaan hasil memberi relasi yang diinginkan."]},
    {title:"Algoritma",problem:"Jelaskan bagaimana masalah "+sectionTitle+" dapat direpresentasikan sebagai prosedur langkah demi langkah.",solution:["Input dan output didefinisikan.","Invariant atau kondisi terminasi ditentukan.","Kompleksitas dasar dan kebenaran diperiksa."]},
  ];
  if(subject==="teori-bilangan-olimpiade")return[
    {title:"Eksperimen Modular",problem:"Hitung beberapa kasus kecil yang berkaitan dengan "+a+" dan cari pola sebelum membuktikannya.",solution:["Pilih modulus atau faktor prima yang relevan.","Susun tabel residu kecil.","Rumuskan dugaan, lalu pisahkan dugaan dari pembuktian."]},
    {title:"Manipulasi Keterbagian",problem:"Jika $d\\mid a$ dan $d\\mid b$, buktikan $d\\mid (3a-2b)$.",solution:["Tuliskan $a=du$ dan $b=dv$.","Diperoleh $3a-2b=d(3u-2v)$.","Karena $3u-2v\\in\\mathbb Z$, hasil terbukti."]},
    {title:"Memilih Modulus",problem:"Jelaskan cara memilih modulus untuk memperoleh kontradiksi pada persamaan integer.",solution:["Amati pangkat, paritas, atau faktor pada persamaan.","Pilih modulus dengan himpunan residu kecil.","Hitung kemungkinan kedua ruas dan cari ketidakcocokan."]},
    {title:"Struktur Faktor Prima",problem:"Gunakan faktorisasi prima untuk menafsirkan "+sectionTitle+".",solution:["Tuliskan setiap bilangan sebagai produk prima.","Bandingkan eksponen tiap prima.","Terjemahkan syarat ke relasi antar-eksponen."]},
  ];
  if(subject==="persamaan-diferensial")return[
    {title:"Verifikasi Solusi",problem:"Periksa apakah $y=e^{2x}$ memenuhi $y'-2y=0$.",solution:["Dihitung $y'=2e^{2x}$.","Substitusi memberi $2e^{2x}-2e^{2x}=0$.","Identitas berlaku pada seluruh $\\mathbb R$."]},
    {title:"Masalah Nilai Awal",problem:"Selesaikan $y'=2y$, $y(0)=3$.",solution:["Persamaan dipisahkan: $dy/y=2dx$.","Integrasi memberi $\\ln|y|=2x+C$, jadi $y=Ce^{2x}$.","Kondisi awal memberi $C=3$, sehingga $y=3e^{2x}$."]},
    {title:"Interpretasi Kualitatif",problem:"Jelaskan apa yang dapat dibaca dari medan kemiringan tanpa menyelesaikan persamaan secara eksplisit.",solution:["Tanda turunan menunjukkan arah naik atau turun.","Titik dengan turunan nol menjadi kandidat equilibrium.","Perubahan arah dan kepadatan kemiringan memberi informasi kestabilan dan laju perubahan."]},
    {title:"Model Fisik",problem:"Susun kerangka model perubahan kuantitas menggunakan persamaan diferensial.",solution:["Tentukan variabel keadaan dan variabel bebas.","Nyatakan hukum perubahan yang menghubungkan laju dengan keadaan.","Tetapkan kondisi awal/batas dan periksa satuan."]},
  ];
  return[
    {title:"Membaca Struktur",problem:"Identifikasi peran "+a+" dan "+b+" pada "+sectionTitle+".",solution:["Objek utama ditentukan.","Syarat definisi diperiksa.","Hubungan antar-konsep dinyatakan eksplisit."]},
    {title:"Contoh dan Noncontoh",problem:"Bangun contoh dan noncontoh untuk konsep utama.",solution:["Dipilih contoh kecil.","Satu syarat diubah untuk memperoleh noncontoh.","Alasan kegagalan dijelaskan."]},
  ];
}

function buildContent(subjectSlug:string,subjectTitle:string,chapterNumber:string,chapterTitle:string,sectionTitle:string,summary:string,keyIdeas:string[]):BookLessonContent{
  const specificFormal=sectionFormal(subjectSlug,sectionTitle,keyIdeas);
  const formal=specificFormal.length?specificFormal:chapterFormal(subjectSlug,chapterNumber);
  const specificExamples=sectionExamples(subjectSlug,sectionTitle,keyIdeas);
  const examples=specificExamples.length?specificExamples:examplesFor(subjectSlug,chapterNumber,sectionTitle,keyIdeas);
  const ideaText=keyIdeas.join(", ");
  const intro=[
    summary,
    "Submateri ini merupakan bagian dari jalur belajar "+subjectTitle+". Pembahasan dimulai dari persoalan yang memotivasi konsep, dilanjutkan dengan struktur formal, lalu dihubungkan dengan perhitungan, pembuktian, dan interpretasi.",
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
      "Submateri ini terhubung dengan unit sebelum dan sesudahnya.",
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
