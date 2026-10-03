import type { BookLessonContent } from "@/data/book-content-types";

const D=(title:string,statement:string)=>({kind:"definition" as const,title,statement});
const L=(title:string,statement:string,proof?:string[])=>({kind:"lemma" as const,title,statement,proof});
const P=(title:string,statement:string,proof?:string[])=>({kind:"proposition" as const,title,statement,proof});
const T=(title:string,statement:string,proof?:string[])=>({kind:"theorem" as const,title,statement,proof});
const C=(title:string,statement:string,proof?:string[])=>({kind:"corollary" as const,title,statement,proof});
const N=(title:string,statement:string)=>({kind:"note" as const,title,statement});

export const complexAnalysisContentA:Record<string,BookLessonContent>={
"bilangan-kompleks-dan-sifat":{
 intro:[
  "Bilangan kompleks memperluas bilangan real dengan elemen $i$ yang memenuhi $i^2=-1$. Setiap bilangan kompleks ditulis unik sebagai $z=a+ib$ dengan $a,b\\in\\mathbb R$.",
  "Bagian ini membangun operasi aljabar, kesamaan, konjugat, invers, dan hubungan dengan bagian real/imajiner. Struktur ini menjadi fondasi semua limit, turunan, dan integral kompleks."
 ],
 notation:[
  {symbol:"$z=x+iy$",meaning:"Bentuk Kartesius bilangan kompleks."},
  {symbol:"$\\operatorname{Re}z=x$",meaning:"Bagian real."},
  {symbol:"$\\operatorname{Im}z=y$",meaning:"Bagian imajiner; bernilai real."},
  {symbol:"$\\bar z=x-iy$",meaning:"Konjugat kompleks."}
 ],
 formal:[
  D("Bilangan Kompleks","$\\mathbb C=\\{x+iy:x,y\\in\\mathbb R,\\ i^2=-1\\}$."),
  D("Kesamaan","$x_1+iy_1=x_2+iy_2$ jika dan hanya jika $x_1=x_2$ dan $y_1=y_2$."),
  T("Sifat Konjugat","Untuk $z,w\\in\\mathbb C$, berlaku $\\overline{z+w}=\\bar z+\\bar w$, $\\overline{zw}=\\bar z\\bar w$, dan $\\overline{\\bar z}=z$.",[
    "Dituliskan $z=x+iy$ dan $w=a+ib$.",
    "Identitas jumlah diperoleh dengan mengubah tanda seluruh bagian imajiner.",
    "Identitas hasil kali diperoleh dengan mengembangkan kedua ruas dan menggunakan $i^2=-1$.",
    "Konjugasi dua kali mengembalikan tanda bagian imajiner ke bentuk awal."
  ]),
  P("Invers Perkalian","Jika $z\\ne0$, maka $z^{-1}=\\bar z/(z\\bar z)=\\bar z/|z|^2$."),
  C("Bagian Real dan Imajiner","$\\operatorname{Re}z=(z+\\bar z)/2$ dan $\\operatorname{Im}z=(z-\\bar z)/(2i)$.")
 ],
 examples:[
  {title:"Pembagian Bilangan Kompleks",problem:"Tuliskan $(2-3i)/(4+6i)$ dalam bentuk $a+ib$.",solution:["Dikalikan pembilang dan penyebut dengan konjugat $4-6i$.","Penyebut menjadi $4^2+6^2=52$.","Pembilang $(2-3i)(4-6i)=-10-24i$.","Diperoleh $-5/26-(6/13)i$."],conclusion:"Konjugat mengubah penyebut menjadi bilangan real positif."}
 ],
 exercises:[
  {prompt:"Hitung $(3+2i)(1-4i)$.",hint:"Gunakan distributivitas dan $i^2=-1$.",answer:"$11-10i$."},
  {prompt:"Buktikan $\\overline{z/w}=\\bar z/\\bar w$ untuk $w\\ne0$.",hint:"Gunakan sifat konjugat produk pada $w(1/w)=1$.",answer:"Konjugasi memberi $\\bar w\\,\\overline{1/w}=1$, sehingga $\\overline{1/w}=1/\\bar w$."},
  {prompt:"Karakterisasikan $z$ yang memenuhi $z=\\bar z$.",hint:"Bandingkan bagian imajiner.",answer:"Tepat bilangan real."},
  {prompt:"Karakterisasikan $z$ yang memenuhi $z=-\\bar z$.",hint:"Bandingkan bagian real.",answer:"Tepat bilangan imajiner murni."}
 ],
 mistakes:["Menganggap $\\operatorname{Im}(a+ib)=ib$; yang benar adalah $b$.","Membagi dua bilangan kompleks tanpa merasionalkan penyebut atau memakai formula invers.","Menganggap $\\mathbb C$ memiliki order kompatibel seperti $\\mathbb R$."],
 connections:["Konjugat dan modulus dipakai dalam geometri bidang kompleks.","Struktur lapangan kompleks memungkinkan aljabar polinomial.","Tidak adanya order total kompatibel membedakan analisis kompleks dari analisis real."]
},

"bidang-kompleks":{
 intro:[
  "Bentuk $z=x+iy$ mengidentifikasi $\\mathbb C$ dengan bidang $\\mathbb R^2$. Identifikasi ini memberi interpretasi geometris untuk modulus, jarak, penjumlahan, dan konjugasi.",
  "Geometri bidang kompleks sangat penting karena limit kompleks secara efektif merupakan limit dua dimensi."
 ],
 notation:[
  {symbol:"$|z|=\\sqrt{x^2+y^2}$",meaning:"Modulus; jarak dari $z$ ke asal."},
  {symbol:"$|z-w|$",meaning:"Jarak Euclid antara titik $z$ dan $w$."}
 ],
 formal:[
  D("Modulus","Untuk $z=x+iy$, modulus adalah $|z|=\\sqrt{x^2+y^2}$."),
  P("Identitas Modulus","$|z|^2=z\\bar z$."),
  T("Multiplikativitas Modulus","$|zw|=|z||w|$ dan, untuk $w\\ne0$, $|z/w|=|z|/|w|$."),
  T("Ketaksamaan Segitiga","$|z+w|\\le|z|+|w|$.",[
    "Dihitung $|z+w|^2=|z|^2+|w|^2+2\\operatorname{Re}(z\\bar w)$.",
    "Karena $\\operatorname{Re}\\xi\\le|\\xi|$, diperoleh $\\operatorname{Re}(z\\bar w)\\le|z||w|$.",
    "Akibatnya $|z+w|^2\\le(|z|+|w|)^2$ dan kedua ruas nonnegatif."
  ]),
  C("Ketaksamaan Segitiga Terbalik","$\\bigl||z|-|w|\\bigr|\\le|z-w|$.")
 ],
 examples:[
  {title:"Lokus Jarak Sama",problem:"Deskripsikan himpunan $|z|=|z-i|$.",solution:["Dituliskan $z=x+iy$.","Persamaan menjadi $x^2+y^2=x^2+(y-1)^2$.","Penyederhanaan memberi $y=1/2$."],conclusion:"Lokusnya garis horizontal yang merupakan perpendicular bisector antara $0$ dan $i$."}
 ],
 exercises:[
  {prompt:"Deskripsikan $|z-1|=2$.",hint:"Interpretasikan sebagai jarak dari titik $1$.",answer:"Lingkaran pusat $1$ berjari-jari $2$."},
  {prompt:"Buktikan $|\\operatorname{Re}z|\\le|z|$.",hint:"Jika $z=x+iy$, bandingkan $|x|$ dengan $\\sqrt{x^2+y^2}$.",answer:"Kuadrat kedua ruas memberi $x^2\\le x^2+y^2$."},
  {prompt:"Tentukan jarak antara $2+3i$ dan $-1+i$.",hint:"Hitung modulus selisih.",answer:"$|3+2i|=\\sqrt{13}$."}
 ],
 mistakes:["Menyamakan modulus dengan bagian real.","Lupa modulus selalu real nonnegatif.","Menganggap ketaksamaan segitiga adalah equality untuk semua pasangan."],
 connections:["Open disk dan domain didefinisikan dengan modulus.","ML-estimate integral kompleks memakai modulus.","Konformalitas lokal dapat dipahami sebagai rotasi+dilatasi pada bidang."]
},

"bentuk-polar-kompleks":{
 intro:[
  "Bentuk polar memisahkan ukuran dan arah: $z=r(\\cos\\theta+i\\sin\\theta)$ dengan $r=|z|$. Argumen tidak tunggal karena penambahan $2\\pi k$ tidak mengubah titik.",
  "Representasi polar mengubah perkalian bilangan kompleks menjadi perkalian modulus dan penjumlahan sudut."
 ],
 notation:[
  {symbol:"$\\arg z$",meaning:"Himpunan seluruh argumen $z$."},
  {symbol:"$\\operatorname{Arg}z$",meaning:"Argumen utama, biasanya dipilih dalam $(-\\pi,\\pi]$."}
 ],
 formal:[
  D("Bentuk Polar","Jika $z\\ne0$, $z=r(\\cos\\theta+i\\sin\\theta)$ dengan $r=|z|$ dan $\\theta\\in\\arg z$."),
  D("Argumen Utama","$\\operatorname{Arg}z$ adalah satu argumen yang dipilih dalam interval cabang utama $(-\\pi,\\pi]$."),
  T("Perkalian Polar","Jika $z_j=r_j(\\cos\\theta_j+i\\sin\\theta_j)$, maka $z_1z_2=r_1r_2[\\cos(\\theta_1+\\theta_2)+i\\sin(\\theta_1+\\theta_2)]$."),
  T("Pembagian Polar","Untuk $z_2\\ne0$, $z_1/z_2=(r_1/r_2)[\\cos(\\theta_1-\\theta_2)+i\\sin(\\theta_1-\\theta_2)]$."),
  C("Formula de Moivre","$(\\cos\\theta+i\\sin\\theta)^n=\\cos(n\\theta)+i\\sin(n\\theta)$ untuk integer $n$.")
 ],
 examples:[
  {title:"Argumen Kuadran III",problem:"Tuliskan $z=-\\sqrt3-i$ dalam bentuk polar.",solution:["Modulus $r=2$.","Sudut acuan $\\pi/6$, tetapi titik berada di kuadran III.","Argumen utama dapat dipilih $-5\\pi/6$.","Diperoleh $z=2[\\cos(-5\\pi/6)+i\\sin(-5\\pi/6)]$."],conclusion:"Pemilihan kuadran tidak boleh hanya mengandalkan $\\arctan(y/x)$."}
 ],
 exercises:[
  {prompt:"Tentukan $\\operatorname{Arg}(1-i)$.",hint:"Kuadran IV.",answer:"$-\\pi/4$."},
  {prompt:"Hitung argumen produk $z_1z_2$ dari argumen masing-masing.",hint:"Jumlahkan, lalu reduksi ke cabang utama bila diminta.",answer:"$\\arg(z_1z_2)=\\arg z_1+\\arg z_2$ modulo $2\\pi$."},
  {prompt:"Gunakan de Moivre untuk $(1+i)^8$.",hint:"$1+i=\\sqrt2 e^{i\\pi/4}$.",answer:"$(\\sqrt2)^8 e^{i2\\pi}=16$."}
 ],
 mistakes:["Menganggap $\\arg z$ satu nilai tunggal.","Menganggap $\\operatorname{Arg}(z_1z_2)=\\operatorname{Arg}z_1+\\operatorname{Arg}z_2$ selalu tanpa koreksi $2\\pi$.","Menggunakan arctangent tanpa memeriksa kuadran."],
 connections:["Logaritma kompleks dibangun dari $\\log r+i\\arg z$.","Roots of unity berada merata pada lingkaran satuan.","Pemetaan $z^n$ menggandakan/mengalikan sudut."]
},

"pangkat-dan-akar-kompleks":{
 intro:["Bentuk polar membuat persamaan $w^n=z$ transparan: modulus akar adalah $|z|^{1/n}$ dan argumen dibagi $n$ dengan seluruh pilihan modulo $2\\pi$.","Setiap bilangan kompleks tak nol memiliki tepat $n$ akar ke-$n$ yang berbeda."],
 formal:[
  T("Akar ke-$n$","Jika $z=re^{i\\theta}\\ne0$, akar $w^n=z$ adalah $w_k=r^{1/n}e^{i(\\theta+2\\pi k)/n}$ untuk $k=0,\\ldots,n-1$."),
  C("Akar Kesatuan","Solusi $w^n=1$ adalah $e^{2\\pi ik/n}$, $k=0,\\ldots,n-1$, dan terletak merata pada lingkaran satuan."),
  P("Simetri Geometris","Akar ke-$n$ dari satu bilangan membentuk regular $n$-gon pada lingkaran berjari-jari $r^{1/n}$.")
 ],
 examples:[
  {title:"Akar Kubik dari 8",problem:"Tentukan semua $w$ dengan $w^3=8$.",solution:["Tuliskan $8=8e^{i2\\pi m}$.","Modulus akar $2$ dan sudut $(2\\pi k)/3$.","Diperoleh $2$, $2e^{2\\pi i/3}$, dan $2e^{4\\pi i/3}$."],conclusion:"Akar real positif hanya satu dari tiga akar kompleks."}
 ],
 exercises:[
  {prompt:"Tentukan akar keempat dari $1$.",hint:"Sudut $k\\pi/2$.",answer:"$1,i,-1,-i$."},
  {prompt:"Tentukan semua akar kuadrat $-i$.",hint:"Gunakan argumen $-\\pi/2$.",answer:"$e^{-i\\pi/4}$ dan $e^{i3\\pi/4}$."},
  {prompt:"Mengapa hanya perlu $k=0,\\ldots,n-1$?",hint:"Nilai $k+n$ menambah $2\\pi$ pada argumen akar.",answer:"Akar berulang secara periodik setelah $n$ pilihan."}
 ],
 mistakes:["Mengambil hanya principal root ketika diminta semua akar.","Salah membagi sudut tetapi tidak menambahkan $2\\pi k$.","Menganggap akar kompleks selalu dua seperti square root."],
 connections:["Zeros polinomial dan roots of unity.","Branch of $z^{1/n}$ memerlukan pemilihan argumen.","Fourier discrete memakai roots of unity."]
},

"himpunan-di-bidang-kompleks":{
 intro:["Topologi bidang kompleks menggunakan metrik $|z-w|$. Disk, neighborhood, open/closed set, connected set, dan domain menjadi bahasa dasar untuk analiticity dan contour integration.","Banyak teorema kompleks bergantung bukan hanya pada fungsi, tetapi juga bentuk topologis domainnya."],
 formal:[
  D("Open Disk","$D(z_0;r)=\\{z:|z-z_0|<r\\}$."),
  D("Open Set","$G\\subseteq\\mathbb C$ terbuka jika setiap $z\\in G$ memiliki disk kecil yang seluruhnya berada di $G$."),
  D("Domain","Domain adalah open connected set."),
  D("Simply Connected Domain","Secara intuitif, domain tanpa lubang; setiap closed curve dapat dideformasi ke titik tanpa keluar domain."),
  P("Punctured Disk","$0<|z-z_0|<r$ adalah disk yang pusatnya dihapus; bentuk ini penting untuk singularitas.")
 ],
 examples:[
  {title:"Annulus",problem:"Klasifikasikan $A=\\{z:1<|z|<2\\}$.",solution:["Setiap titik memiliki jarak positif dari kedua boundary circles.","A terbuka dan connected.","A mempunyai lubang di sekitar nol, sehingga tidak simply connected."],conclusion:"Annulus merupakan domain tetapi bukan simply connected."}
 ],
 exercises:[
  {prompt:"Apakah closed disk $|z|\\le1$ open?",hint:"Periksa boundary point $z=1$.",answer:"Tidak."},
  {prompt:"Apakah $\\mathbb C\\setminus\\{0\\}$ simply connected?",hint:"Kurva lingkaran mengelilingi nol.",answer:"Tidak."},
  {prompt:"Tulis punctured neighborhood radius 2 di sekitar $1+i$.",hint:"Gunakan modulus.",answer:"$0<|z-(1+i)|<2$."}
 ],
 mistakes:["Menyamakan connected dengan simply connected.","Menganggap boundary point memiliki disk penuh di dalam closed region.","Mengabaikan topology domain ketika menerapkan Cauchy theorem."],
 connections:["Cauchy-Goursat memerlukan informasi domain.","Laurent series berlaku pada annulus.","Branch cuts mengubah domain agar log/root menjadi single-valued."]
},

"aplikasi-bilangan-kompleks":{
 intro:["Bilangan kompleks memadatkan rotasi dan osilasi ke operasi aljabar. Bentuk polar sangat efektif dalam sistem periodik, rangkaian AC, dan geometri rotasi.","Tujuan bagian aplikasi adalah melihat bahwa modulus dan argumen mempunyai makna operasional, bukan hanya notasi."],
 formal:[
  P("Rotasi melalui Perkalian","Perkalian dengan $e^{i\\theta}$ mempertahankan modulus dan menambah argumen sebesar $\\theta$."),
  P("Dilatasi-Rotasi","Perkalian dengan $re^{i\\theta}$ mendilatasi panjang dengan faktor $r$ dan merotasi sebesar $\\theta$."),
  N("Fasor","Sinyal sinusoidal dengan frekuensi tetap dapat direpresentasikan oleh bilangan kompleks yang menyimpan amplitudo dan fase.")
 ],
 examples:[
  {title:"Rotasi Titik",problem:"Rotasikan $z=1+i$ sebesar $\\pi/2$ berlawanan arah jarum jam.",solution:["Kalikan dengan $e^{i\\pi/2}=i$.","$i(1+i)=-1+i$."],conclusion:"Modulus tetap $\\sqrt2$ dan argumen bertambah $\\pi/2$."}
 ],
 exercises:[
  {prompt:"Apa efek perkalian dengan $-1$?",hint:"$-1=e^{i\\pi}$.",answer:"Rotasi $\\pi$."},
  {prompt:"Apa efek perkalian dengan $2i$?",hint:"Modulus 2, argumen $\\pi/2$.",answer:"Dilatasi faktor 2 dan rotasi $90^\\circ$."},
  {prompt:"Jika fasor memiliki amplitudo 5 dan fase $\\pi/3$, tulis bentuk kompleksnya.",hint:"$5e^{i\\pi/3}$.",answer:"$5(1/2+i\\sqrt3/2)$."}
 ],
 mistakes:["Menganggap penjumlahan argumen berlaku untuk penjumlahan bilangan kompleks; itu berlaku pada perkalian.","Mencampur fase dalam derajat dan radian.","Mengabaikan skala modulus saat melakukan rotasi-dilatasi."],
 connections:["Linear mappings $w=az+b$.","Complex exponential untuk gelombang.","Conformal maps secara lokal juga bertindak seperti rotasi-dilatasi."]
},

"fungsi-kompleks":{
 intro:["Fungsi kompleks memetakan bilangan kompleks ke bilangan kompleks. Dengan $z=x+iy$ dan $f(z)=u(x,y)+iv(x,y)$, satu fungsi kompleks dapat dipandang sebagai pasangan dua fungsi real dua variabel.","Dekomposisi ini menjadi dasar Cauchy–Riemann equations."],
 formal:[
  D("Fungsi Kompleks","Fungsi kompleks adalah $f:D\\subseteq\\mathbb C\\to\\mathbb C$."),
  D("Komponen Real-Imajiner","Jika $f(z)=u(x,y)+iv(x,y)$, maka $u=\\operatorname{Re}f$ dan $v=\\operatorname{Im}f$."),
  P("Polinomial Kompleks","Polinomial $p(z)=a_0+a_1z+\\cdots+a_nz^n$ terdefinisi pada seluruh $\\mathbb C$."),
  N("Multi-valued Expressions","Ekspresi seperti $z^{1/n}$ atau $\\log z$ secara alami mempunyai banyak nilai sebelum cabang dipilih.")
 ],
 examples:[
  {title:"Memisahkan $u$ dan $v$",problem:"Untuk $f(z)=z^2$, tentukan $u(x,y)$ dan $v(x,y)$.",solution:["$(x+iy)^2=x^2-y^2+i2xy$.","Diperoleh $u=x^2-y^2$ dan $v=2xy$."],conclusion:"Komponen real dan imajiner merupakan fungsi dua variabel real."}
 ],
 exercises:[
  {prompt:"Pisahkan bagian real/imajiner $1/z$.",hint:"Kalikan konjugat.",answer:"$u=x/(x^2+y^2)$, $v=-y/(x^2+y^2)$ untuk $z\\ne0$."},
  {prompt:"Tentukan domain principal $\\Log z$ jika branch cut negatif digunakan.",hint:"Nol dan negative real axis dikeluarkan.",answer:"Biasanya $\\mathbb C\\setminus(-\\infty,0]$."},
  {prompt:"Untuk $f(z)=\\bar z$, tentukan $u,v$.",hint:"$\\bar z=x-iy$.",answer:"$u=x$, $v=-y$."}
 ],
 mistakes:["Menganggap semua ekspresi kompleks single-valued.","Mengabaikan domain singularitas.","Menggunakan satu variabel real saat memeriksa limit kompleks."],
 connections:["Cauchy–Riemann memakai partial derivatives $u,v$.","Mappings memvisualisasikan fungsi kompleks.","Analyticity merupakan sifat khusus fungsi kompleks."]
},

"fungsi-kompleks-sebagai-pemetaan":{
 intro:["Pemetaan kompleks dapat dilihat sebagai transformasi bidang $z$ ke bidang $w$. Bukan hanya titik yang dipetakan; kurva, grid, dan region dapat dilacak untuk memahami distorsi geometri.","Visualisasi mapping membantu memahami power, exponential, reciprocal, dan conformal transformations."],
 formal:[
  D("Citra Himpunan","Untuk $E\\subseteq D$, $f(E)=\\{f(z):z\\in E\\}$."),
  D("Pra-citra","Untuk $H$ di target, $f^{-1}(H)=\\{z\\in D:f(z)\\in H\\}$."),
  P("Citra Kurva","Jika kurva $z=z(t)$, citranya adalah $w(t)=f(z(t))$."),
  N("Grid Mapping","Keluarga garis koordinat pada domain dapat dipetakan untuk melihat bentuk distorsi lokal/global.")
 ],
 examples:[
  {title:"Pemetaan $w=z^2$",problem:"Apa citra sinar $z=re^{i\\theta_0}$?",solution:["$w=r^2e^{i2\\theta_0}$.","Radius dikuadratkan dan sudut digandakan."],conclusion:"Sinar dipetakan ke sinar dengan sudut dua kali."}
 ],
 exercises:[
  {prompt:"Di bawah $w=z+2-i$, apa citra lingkaran $|z|=1$?",hint:"Translasi.",answer:"Lingkaran $|w-(2-i)|=1$."},
  {prompt:"Di bawah $w=iz$, apa citra real axis?",hint:"Rotasi $\\pi/2$.",answer:"Imaginary axis."},
  {prompt:"Di bawah $w=z^2$, apa citra upper half of unit circle?",hint:"Sudut $0<\\theta<\\pi$ menjadi $0<2\\theta<2\\pi$.",answer:"Seluruh unit circle sekali, dengan endpoint considerations."}
 ],
 mistakes:["Menganggap image satu garis selalu garis.","Mengabaikan multiplicity: pemetaan dapat tidak injective.","Mencampur variabel koordinat domain dan target."],
 connections:["Conformal mapping mempelajari pelestarian sudut.","Linear fractional transformations memetakan circles/lines.","Complex exponential memetakan strip ke annulus/sectors."]
},

"pemetaan-linear":{
 intro:["Pemetaan $w=az+b$ dengan $a\\ne0$ tersusun dari dilatasi, rotasi, dan translasi. Ia merupakan model dasar perilaku lokal fungsi analitik dengan turunan tak nol.","Bentuk ini juga merupakan contoh conformal map paling sederhana."],
 formal:[
  T("Dekomposisi Linear","Jika $a=\\rho e^{i\\theta}$, pemetaan $w=az+b$ melakukan dilatasi faktor $\\rho$, rotasi sudut $\\theta$, lalu translasi $b$."),
  P("Bijektivitas","Untuk $a\\ne0$, $w=az+b$ bijektif pada $\\mathbb C$ dengan invers $z=(w-b)/a$."),
  C("Pelestarian Sudut","Pemetaan linear nonkonstan mempertahankan besar dan orientasi sudut.")
 ],
 examples:[
  {title:"Identifikasi Transformasi",problem:"Interpretasikan $w=(2i)z+(1-i)$.",solution:["$2i=2e^{i\\pi/2}$.","Pertama dilatasi faktor 2 dan rotasi $\\pi/2$.","Kemudian translasi oleh $1-i$."],conclusion:"Urutan komposisi penting."}
 ],
 exercises:[
  {prompt:"Cari invers $w=(1+i)z-3$.",hint:"Selesaikan untuk z.",answer:"$z=(w+3)/(1+i)$."},
  {prompt:"Apa citra lingkaran radius r oleh $w=az+b$?",hint:"Jarak dikalikan |a|.",answer:"Lingkaran radius $|a|r$ dengan pusat dipetakan oleh transformasi."},
  {prompt:"Kapan $w=az+b$ menjadi pure translation?",hint:"$a=1$.",answer:"Saat $a=1$."}
 ],
 mistakes:["Melakukan translasi sebelum rotasi padahal formula menentukan urutan komposisi tertentu.","Menganggap $a=0$ masih bijektif.","Mengabaikan argument $a$ sebagai sudut rotasi."],
 connections:["Derivative $f'(z_0)$ memberi local linear map.","Conformal mapping.","Affine geometry kompleks."]
},

"fungsi-pangkat-khusus":{
 intro:["Power maps $w=z^n$ memperbesar sudut menjadi $n$ kali dan modulus menjadi pangkat $n$. Root maps membalik proses tetapi menjadi multi-valued.","Sifat ini menjelaskan branch points pada akar dan logaritma."],
 formal:[
  P("Power Map","Jika $z=re^{i\\theta}$, $z^n=r^ne^{in\\theta}$."),
  P("Tidak Injektif Global","Untuk $n\\ge2$, $z^n$ tidak injective pada $\\mathbb C\\setminus\\{0\\}$ karena sudut berbeda $2\\pi/n$ mempunyai citra sama."),
  D("Branch Root","Untuk menjadikan $z^{1/n}$ fungsi single-valued, domain/argument harus dibatasi dan satu branch dipilih."),
  N("Branch Point","Nol merupakan branch point alami bagi root functions.")
 ],
 examples:[
  {title:"Square Map",problem:"Apa citra quadrant I di bawah $w=z^2$?",solution:["Sudut $0<\\theta<\\pi/2$ menjadi $0<2\\theta<\\pi$.","Modulus tetap positif dan dikuadratkan."],conclusion:"Quadrant I dipetakan ke upper half-plane."}
 ],
 exercises:[
  {prompt:"Apa citra sector $0<\\arg z<\\pi/3$ di bawah $z^3$?",hint:"Kalikan sudut dengan 3.",answer:"Plane cut dengan $0<\\arg w<\\pi$ yaitu upper half-plane."},
  {prompt:"Mengapa square root mempunyai dua nilai untuk $z\\ne0$?",hint:"Formula akar dengan k=0,1.",answer:"Dua sudut berbeda π menghasilkan dua akar berlawanan."},
  {prompt:"Cari titik yang dipetakan ke 1 oleh $z^4$.",hint:"Roots of unity.",answer:"$1,i,-1,-i$."}
 ],
 mistakes:["Menganggap principal root mewakili seluruh relation.","Lupa power map dapat many-to-one.","Tidak memperhatikan branch cut pada root function."],
 connections:["Riemann surfaces memberi cara geometris menangani multivalued functions.","Conformal maps sering memakai power maps untuk membuka sektor.","Laurent/power series menggunakan integer powers."]
},

"fungsi-resiprok":{
 intro:["Pemetaan $w=1/z$ menggabungkan inversi radial dan refleksi sudut: modulus menjadi $1/|z|$ dan argumen berubah tanda.","Pemetaan ini menukar persekitaran nol dengan daerah jauh dan menjadi contoh penting transformasi extended complex plane."],
 formal:[
  P("Modulus dan Argumen Resiprok","Untuk $z\\ne0$, $|1/z|=1/|z|$ dan $\\arg(1/z)=-\\arg z$ modulo $2\\pi$."),
  P("Involusi","Menerapkan reciprocal dua kali mengembalikan titik awal: $1/(1/z)=z$."),
  N("Extended Plane","Jika ditambahkan titik $\\infty$, reciprocal dapat diperluas dengan $0\\leftrightarrow\\infty$."),
  T("Circles and Lines","Dalam extended plane, reciprocal sebagai Möbius transformation memetakan generalized circles (circles/lines) ke generalized circles.")
 ],
 examples:[
  {title:"Citra Lingkaran Berpusat Nol",problem:"Apa citra $|z|=2$ di bawah $w=1/z$?",solution:["$|w|=1/|z|=1/2$."],conclusion:"Lingkaran pusat nol radius 2 menjadi radius 1/2."}
 ],
 exercises:[
  {prompt:"Apa citra annulus $1<|z|<2$?",hint:"Balik inequality radius.",answer:"$1/2<|w|<1$."},
  {prompt:"Tentukan $1/(1+i)$.",hint:"Gunakan conjugate.",answer:"$(1-i)/2$."},
  {prompt:"Apa yang terjadi pada titik dekat nol?",hint:"Modulus reciprocal besar.",answer:"Dipetakan jauh dari asal."}
 ],
 mistakes:["Tidak membalik inequality dengan benar saat reciprocal radius.","Mengabaikan singularity di nol.","Menyamakan reciprocal map dengan conjugation."],
 connections:["Möbius transformations.","Riemann sphere.","Residue at infinity dan extended complex analysis."]
},

"limit-dan-kontinuitas-kompleks":{
 intro:["Limit kompleks harus sama untuk semua arah pendekatan dalam bidang. Karena ada tak hingga banyak path menuju titik, diferensiabilitas dan kontinuitas kompleks lebih ketat daripada satu-dimensional real calculus.","Dekomposisi ke $(x,y)$ menghubungkan limit kompleks dengan limit dua variabel real."],
 formal:[
  D("Limit Kompleks","$\\lim_{z\\to z_0}f(z)=L$ jika untuk setiap ε>0 ada δ>0 sehingga $0<|z-z_0|<δ$ memberi $|f(z)-L|<ε$."),
  T("Keunikan Limit","Limit kompleks jika ada bersifat unik."),
  P("Kriteria Jalur untuk Nonexistence","Jika terdapat dua path menuju $z_0$ yang menghasilkan limit berbeda, limit kompleks tidak ada."),
  D("Kontinuitas","$f$ kontinu di $z_0$ jika $\\lim_{z\\to z_0}f(z)=f(z_0)$."),
  T("Aljabar Kontinuitas","Sum/product/composition fungsi kontinu tetap kontinu; quotient memerlukan denominator nonzero.")
 ],
 examples:[
  {title:"Limit Bergantung Jalur",problem:"Periksa $f(z)=x^2/(x^2+y^2)$ saat $z=x+iy\\to0$.",solution:["Sepanjang $y=0$, $f=1$.","Sepanjang $x=0$, $f=0$.","Dua path memberi limit berbeda."],conclusion:"Limit kompleks tidak ada."}
 ],
 exercises:[
  {prompt:"Buktikan $\\lim_{z\\to z_0}z=z_0$.",hint:"$|z-z_0|$ langsung sama error.",answer:"Pilih δ=ε."},
  {prompt:"Apakah $\\bar z$ kontinu?",hint:"$|\\bar z-\\bar z_0|=|z-z_0|$.",answer:"Ya, di seluruh C."},
  {prompt:"Gunakan dua path untuk menguji $xy/(x^2+y^2)$ di nol.",hint:"Gunakan y=x dan y=-x.",answer:"Nilai path ±1/2, sehingga limit tidak ada."}
 ],
 mistakes:["Memeriksa hanya garis lurus lalu menyimpulkan limit ada.","Menganggap path test dapat membuktikan existence; ia terutama mudah untuk disproving existence.","Mencampur $|z|$ dengan nilai mutlak bagian real saja."],
 connections:["Complex derivative adalah limit quotient kompleks.","Cauchy-Riemann muncul dari tuntutan path-independence derivative.","Topologi metric pada C sama dengan R² Euclidean."]
},

"aplikasi-pemetaan":{
 intro:["Aplikasi mapping memanfaatkan transformasi untuk menyederhanakan region atau masalah geometri. Pemetaan kompleks dapat mengubah garis menjadi lingkaran, sector menjadi half-plane, atau grid menjadi kurva orthogonal.","Keterampilan utama adalah melacak boundary terlebih dahulu lalu interior."],
 formal:[
  P("Boundary-First Heuristic","Untuk memetakan region, petakan komponen boundary secara terpisah, tentukan orientasi, lalu uji satu titik interior."),
  P("Composition Strategy","Transformasi rumit sering dapat diuraikan sebagai komposisi translation, rotation/dilation, power, reciprocal, atau Möbius maps."),
  N("Injectivity Matters","Jika mapping tidak injective pada region, citra dapat tertutup berulang atau mengalami overlap.")
 ],
 examples:[
  {title:"Half-plane ke Disk secara Konseptual",problem:"Mengapa Möbius maps cocok untuk memetakan half-plane ke disk?",solution:["Möbius maps memetakan generalized circles ke generalized circles.","Boundary real line dapat dipetakan ke unit circle.","Satu titik interior menentukan sisi circle yang menjadi image."],conclusion:"Struktur boundary membuat transformasi dapat dirancang sistematis."}
 ],
 exercises:[
  {prompt:"Petakan strip $0<\\operatorname{Im}z<\\pi$ dengan $w=e^z$.",hint:"Argumen w adalah Im z.",answer:"Upper half-plane tanpa boundary: $0<\\arg w<\\pi$."},
  {prompt:"Apa langkah pertama memetakan quadrant dengan $z^2$?",hint:"Petakan dua boundary rays.",answer:"Sudut 0 dan π/2 menjadi 0 dan π."},
  {prompt:"Mengapa perlu test point interior?",hint:"Boundary saja tidak selalu menentukan sisi image.",answer:"Untuk memilih region di antara generalized circles."}
 ],
 mistakes:["Melacak interior tanpa memetakan boundary.","Mengabaikan multiplicity/pole.","Tidak mengecek orientation atau branch."],
 connections:["Conformal mapping chapter 7.","Boundary-value problems.","Complex potential dan fluid flow."]
},

"diferensiabilitas-dan-analitik":{
 intro:["Turunan kompleks memakai formula yang tampak sama dengan turunan real, tetapi $h\\to0$ dapat dari semua arah kompleks. Kondisi ini membuat complex differentiability sangat restriktif.","Fungsi yang terdiferensial di neighborhood disebut analytic/holomorphic; regularitas ini membawa konsekuensi kuat seperti power-series expansion."],
 formal:[
  D("Turunan Kompleks","$f'(z_0)=\\lim_{h\\to0}[f(z_0+h)-f(z_0)]/h$ jika limit kompleks ada."),
  D("Holomorfik / Analitik","$f$ holomorfik pada domain jika complex differentiable di setiap titik domain."),
  T("Diferensiabel Mengakibatkan Kontinu","Jika $f'(z_0)$ ada, $f$ kontinu di $z_0$."),
  T("Aturan Turunan","Sum/product/quotient/chain rules berlaku sebagaimana real calculus pada titik yang memenuhi syarat."),
  N("Kekakuan Kompleks","Existence derivative pada open set jauh lebih kuat daripada real differentiability di R².")
 ],
 examples:[
  {title:"$f(z)=z^2$",problem:"Hitung turunan dari definisi.",solution:["Difference quotient $[(z+h)^2-z^2]/h=2z+h$.","Saat $h\\to0$, limit $2z$."],conclusion:"$f'(z)=2z$ pada seluruh C."},
  {title:"Konjugasi",problem:"Apakah $f(z)=\\bar z$ complex differentiable di 0?",solution:["Quotient $\\bar h/h$.","Sepanjang h real, quotient 1.","Sepanjang h=it, quotient -1."],conclusion:"Turunan tidak ada di 0, dan sebenarnya tidak ada di titik mana pun."}
 ],
 exercises:[
  {prompt:"Hitung turunan $z^n$.",hint:"Gunakan binomial atau aturan produk.",answer:"$nz^{n-1}$."},
  {prompt:"Buktikan derivative fungsi konstan nol.",hint:"Difference quotient pembilang nol.",answer:"$0$."},
  {prompt:"Apa hubungan complex differentiability dan continuity?",hint:"Implikasi satu arah.",answer:"Differentiability ⇒ continuity, kebalikan salah."}
 ],
 mistakes:["Memeriksa quotient hanya sepanjang arah real.","Menyamakan real differentiability sebagai map R²→R² dengan complex differentiability.","Menggunakan istilah analytic untuk fungsi yang hanya differentiable di satu titik."],
 connections:["Cauchy-Riemann memberi syarat komponen.","Holomorphic functions memiliki Taylor series.","Derivative nonzero memberi conformality lokal."]
},

"persamaan-cauchy-riemann":{
 intro:["Cauchy–Riemann equations muncul dengan membandingkan difference quotient sepanjang arah real dan imajiner. Jika derivative kompleks ada, kedua cara harus memberikan nilai sama.","Dengan regularitas partial derivatives yang cukup, persamaan ini juga memberi syarat cukup untuk holomorphicity."],
 notation:[{symbol:"$f=u+iv$",meaning:"$u(x,y)$ dan $v(x,y)$ komponen real/imajiner."}],
 formal:[
  T("Cauchy–Riemann Cartesian","Jika $f=u+iv$ complex differentiable di $z_0$, maka $u_x=v_y$ dan $u_y=-v_x$ di titik tersebut.",[
    "Sepanjang increment real $h$, quotient limit memberi $f'=u_x+iv_x$.",
    "Sepanjang increment imajiner $ih$, quotient memberi $f'=v_y-iu_y$.",
    "Kesamaan bagian real dan imajiner menghasilkan $u_x=v_y$ serta $v_x=-u_y$."
  ]),
  T("Syarat Cukup dengan Regularitas","Jika partial derivatives pertama $u,v$ kontinu di neighborhood dan memenuhi Cauchy–Riemann, maka $f$ holomorfik."),
  P("Derivative dari Komponen","Bila CR berlaku, $f'=u_x+iv_x=v_y-iu_y$."),
  N("CR di Satu Titik","Persamaan CR di satu titik saja tanpa regularitas tambahan belum cukup menjamin differentiability.")
 ],
 examples:[
  {title:"Uji $z^2$",problem:"Verifikasi CR untuk $f(z)=z^2$.",solution:["$u=x^2-y^2$, $v=2xy$.","$u_x=2x=v_y$.","$u_y=-2y=-v_x$."],conclusion:"CR berlaku di seluruh C dan $f$ holomorfik."},
  {title:"Uji $|z|^2$",problem:"Di mana $f(z)=|z|^2=x^2+y^2$ mungkin complex differentiable?",solution:["$u=x^2+y^2$, $v=0$.","CR memberi $2x=0$ dan $2y=0$.","Syarat perlu hanya terpenuhi di 0; difference quotient di 0 ternyata $|h|^2/h=\\bar h\\to0$."],conclusion:"Fungsi complex differentiable hanya di 0, tidak analytic pada neighborhood mana pun."}
 ],
 exercises:[
  {prompt:"Uji holomorphicity $f(z)=x^2-y^2-i2xy$.",hint:"Ini $\\bar z^2$.",answer:"CR hanya terpenuhi pada titik tertentu, tidak holomorfik pada open set."},
  {prompt:"Jika $u=x^2-y^2$, cari harmonic conjugate.",hint:"$v_y=u_x=2x$ dan $v_x=-u_y=2y$.",answer:"$v=2xy+C$."},
  {prompt:"Tuliskan CR polar secara konsep.",hint:"Hubungkan $u_r,v_r,u_\\theta,v_\\theta$.",answer:"Untuk r>0, $u_r=(1/r)v_\\theta$ dan $v_r=-(1/r)u_\\theta$."}
 ],
 mistakes:["Menganggap CR selalu sufficient tanpa continuity partial derivatives.","Salah tanda pada $u_y=-v_x$.","Menggunakan CR di titik isolated untuk menyimpulkan analytic."],
 connections:["Harmonic functions.","Conformal mapping via nonzero derivative.","Wirtinger derivatives memberikan formulasi alternatif."]
},

"fungsi-harmonik":{
 intro:["Fungsi real $u(x,y)$ disebut harmonik jika memenuhi Laplace equation $u_{xx}+u_{yy}=0$. Bagian real dan imajiner fungsi holomorfik dengan turunan kedua cukup halus adalah harmonik.","Pasangan $u,v$ yang memenuhi CR disebut harmonic conjugates dan dapat digabung menjadi analytic function."],
 formal:[
  D("Fungsi Harmonik","$u$ harmonik pada domain jika $u_{xx}+u_{yy}=0$."),
  T("Komponen Analitik Harmonik","Jika $f=u+iv$ holomorfik dengan partial derivatives orde dua kontinu, maka $u$ dan $v$ harmonik.",[
    "Dari CR, $u_x=v_y$ dan $u_y=-v_x$.",
    "Diferensiasi memberi $u_{xx}=v_{yx}$ dan $u_{yy}=-v_{xy}$.",
    "Kesamaan mixed partials memberi $u_{xx}+u_{yy}=0$."
  ]),
  D("Harmonic Conjugate","$v$ adalah harmonic conjugate dari $u$ jika $u+iv$ holomorfik."),
  P("Orthogonal Level Curves","Di titik gradient nonzero, level curves harmonic conjugates berpotongan ortogonal.")
 ],
 examples:[
  {title:"Cari Harmonic Conjugate",problem:"Untuk $u=x^2-y^2$, cari $v$.",solution:["CR: $v_y=u_x=2x$, sehingga $v=2xy+g(x)$.","CR kedua: $v_x=2y+g'(x)=-u_y=2y$.","Diperoleh $g'(x)=0$."],conclusion:"$v=2xy+C$, sehingga $f=z^2+iC$."}
 ],
 exercises:[
  {prompt:"Periksa $u=e^x\\cos y$ harmonik.",hint:"Hitung $u_{xx}$ dan $u_{yy}$.",answer:"$u_{xx}=e^x\\cos y$, $u_{yy}=-e^x\\cos y$, jumlah nol."},
  {prompt:"Cari harmonic conjugate dari $e^x\\cos y$.",hint:"Kenali $e^z$.",answer:"$e^x\\sin y+C$."},
  {prompt:"Apakah setiap fungsi harmonik global memiliki conjugate global?",hint:"Topology domain matters.",answer:"Pada simply connected domain, ya di bawah regularitas; pada domain berlubang dapat ada obstruction."}
 ],
 mistakes:["Menganggap harmonic berarti analytic; harmonic bernilai real.","Lupa topology saat mencari global conjugate.","Salah menukar tanda CR."],
 connections:["Potential flow dan electrostatics.","Poisson integral formulas.","Real/imaginary parts analytic functions."]
},

"aplikasi-fungsi-analitik":{
 intro:["Fungsi analitik menyandikan dua scalar fields terkait melalui CR. Dalam aplikasi dua dimensi, satu komponen dapat mewakili potential dan yang lain stream function.","Struktur analytic memastikan orthogonality level curves dan memenuhi Laplace equation."],
 formal:[
  P("Complex Potential","Dalam flow ideal tertentu, $F(z)=\\phi(x,y)+i\\psi(x,y)$ dapat menggabungkan velocity potential $\\phi$ dan stream function $\\psi$."),
  P("Orthogonality","Kurva $\\phi=\\text{konstan}$ dan $\\psi=\\text{konstan}$ berpotongan ortogonal di titik regular."),
  N("Physical Assumptions","Interpretasi fisik memerlukan model tambahan seperti irrotational/incompressible flow; analyticity sendiri adalah struktur matematis.")
 ],
 examples:[
  {title:"Potential $F(z)=z^2$",problem:"Tentukan keluarga level curves dari real dan imaginary parts.",solution:["$\\phi=x^2-y^2$.","$\\psi=2xy$.","Gradient keduanya orthogonal ketika tidak nol."],conclusion:"Dua keluarga hyperbola membentuk orthogonal net."}
 ],
 exercises:[
  {prompt:"Untuk $F(z)=e^z$, identifikasi $\\phi$ dan $\\psi$.",hint:"$e^{x+iy}=e^x(\\cos y+i\\sin y)$.",answer:"$\\phi=e^x\\cos y$, $\\psi=e^x\\sin y$."},
  {prompt:"Verifikasi masing-masing memenuhi Laplace.",hint:"Diferensiasi dua kali.",answer:"Keduanya harmonic."},
  {prompt:"Apa peran derivative $F'$ dalam flow interpretation?",hint:"Berhubungan dengan complex velocity tergantung convention.",answer:"Derivative mengodekan komponen velocity melalui kombinasi partial derivatives."}
 ],
 mistakes:["Menyamakan mathematical potential dengan model fisik tanpa asumsi.","Mengabaikan singularities sumber/sink.","Menganggap semua harmonic pairs global conjugates."],
 connections:["Conformal mapping untuk flow around objects.","Boundary-value problems.","Poisson equation/Laplace equation."]
},

"eksponensial-dan-logaritma-kompleks":{
 intro:["Eksponensial kompleks $e^z=e^x(\\cos y+i\\sin y)$ menggabungkan pertumbuhan radial dan rotasi periodik. Karena periodisitas $2\\pi i$, fungsi ini tidak injective global.","Logaritma kompleks merupakan invers multi-valued: $\\log z=\\ln|z|+i(\\arg z)$."],
 formal:[
  D("Eksponensial Kompleks","$e^{x+iy}=e^x(\\cos y+i\\sin y)$."),
  T("Periodisitas","$e^{z+2\\pi i}=e^z$."),
  D("Logaritma Multi-valued","Untuk $z\\ne0$, $\\log z=\\ln|z|+i(\\operatorname{Arg}z+2\\pi k)$, $k\\in\\mathbb Z$."),
  D("Principal Log","$\\Log z=\\ln|z|+i\\operatorname{Arg}z$ pada domain dengan branch cut yang sesuai."),
  T("Turunan","$\\frac{d}{dz}e^z=e^z$ dan pada branch analytic, $(\\Log z)'=1/z$.")
 ],
 examples:[
  {title:"Solve $e^z=1$",problem:"Tentukan semua $z$ dengan $e^z=1$.",solution:["Jika $z=x+iy$, modulus memberi $e^x=1$, sehingga $x=0$.","Sudut harus $y=2\\pi k$."],conclusion:"$z=2\\pi ik$, $k\\in\\mathbb Z$."}
 ],
 exercises:[
  {prompt:"Tentukan semua nilai $\\log(-1)$.",hint:"$|-1|=1$, argumen $\\pi+2\\pi k$.",answer:"$i(\\pi+2\\pi k)$."},
  {prompt:"Hitung $|e^{x+iy}|$.",hint:"Modulus bagian trig =1.",answer:"$e^x$."},
  {prompt:"Mengapa tidak ada analytic logarithm pada seluruh $\\mathbb C\\setminus\\{0\\}$?",hint:"Domain tidak simply connected dan winding around zero.",answer:"Argumen tidak dapat dipilih kontinu global di sekitar loop yang mengelilingi nol."}
 ],
 mistakes:["Menganggap complex log single-valued global.","Lupa period $2\\pi i$ pada exponential.","Menulis $\\Log(z_1z_2)=\\Log z_1+\\Log z_2$ tanpa memperhitungkan branch."],
 connections:["Complex powers didefinisikan melalui log.","Branch cuts dan Riemann surfaces.","Residue/integration dari 1/z terkait winding."]
},

"pangkat-kompleks":{
 intro:["Complex powers didefinisikan melalui logarithm: $z^a=e^{a\\log z}$. Karena log multi-valued, power dapat multi-valued bahkan ketika eksponen bukan integer.","Principal power dipilih dengan principal Log, tetapi sifat aljabar familiar perlu diperiksa cabangnya."],
 formal:[
  D("Complex Power","Untuk $z\\ne0$ dan $a\\in\\mathbb C$, relation $z^a=\\exp(a\\log z)$ mencakup semua cabang log."),
  D("Principal Power","$z^a_{\\text{principal}}=\\exp(a\\Log z)$ pada branch principal."),
  N("Kehilangan Hukum Pangkat","Identitas seperti $(zw)^a=z^aw^a$ dapat gagal untuk principal values karena jumps argumen."),
  P("Integer Exponent","Untuk $a=n\\in\\mathbb Z$, multi-valuedness hilang dan definisi konsisten dengan pangkat aljabar biasa.")
 ],
 examples:[
  {title:"Nilai $i^i$",problem:"Tentukan family values $i^i$.",solution:["$\\log i=i(\\pi/2+2\\pi k)$.","$i\\log i=-(\\pi/2+2\\pi k)$.","$i^i=e^{-\\pi/2-2\\pi k}$."],conclusion:"Semua nilainya real positif; principal value $e^{-\\pi/2}$."}
 ],
 exercises:[
  {prompt:"Tentukan principal value $(-1)^{1/2}$.",hint:"Principal Arg(-1)=π.",answer:"$i$."},
  {prompt:"Mengapa $z^n$ untuk integer n single-valued?",hint:"Perubahan argumen 2πk menghasilkan faktor $e^{i2πnk}=1$.",answer:"Semua cabang collapse ke nilai sama."},
  {prompt:"Tuliskan $z^a$ menggunakan $r$ dan θ.",hint:"$z=re^{i(θ+2πk)}$.",answer:"$r^a e^{ia(θ+2πk)}$ ketika a real; untuk a kompleks, gunakan exp of complex product."}
 ],
 mistakes:["Menggunakan hukum exponent real tanpa branch awareness.","Menyebut satu principal value sebagai seluruh himpunan nilai.","Melupakan z=0 membutuhkan perlakuan khusus."],
 connections:["Roots are rational powers.","Branch points.","Monodromy dan Riemann surfaces pada teori lanjut."]
},

"fungsi-trigonometri-dan-hiperbolik":{
 intro:["Fungsi trig kompleks didefinisikan melalui exponential sehingga identitas real dapat diperluas secara aljabar. Berbeda dari kasus real, nilai sin/cos kompleks tidak bounded.","Hyperbolic functions juga muncul alami dari kombinasi $e^z$ dan $e^{-z}$."],
 formal:[
  D("Sine dan Cosine Kompleks","$\\sin z=(e^{iz}-e^{-iz})/(2i)$ dan $\\cos z=(e^{iz}+e^{-iz})/2$."),
  D("Hyperbolic","$\\sinh z=(e^z-e^{-z})/2$, $\\cosh z=(e^z+e^{-z})/2$."),
  T("Turunan","$(\\sin z)'=\\cos z$, $(\\cos z)'=-\\sin z$, $(\\sinh z)'=\\cosh z$, $(\\cosh z)'=\\sinh z$."),
  T("Identitas","$\\sin^2z+\\cos^2z=1$ dan $\\cosh^2z-\\sinh^2z=1$."),
  N("Unboundedness","$\\sin z$ dan $\\cos z$ dapat tumbuh eksponensial sepanjang arah imajiner.")
 ],
 examples:[
  {title:"Sinus pada Argumen Imajiner",problem:"Sederhanakan $\\sin(iy)$ untuk real $y$.",solution:["Gunakan definisi exponential.","$\\sin(iy)=(e^{-y}-e^y)/(2i)=i\\sinh y$."],conclusion:"$\\sin(iy)=i\\sinh y$."}
 ],
 exercises:[
  {prompt:"Buktikan $\\cos(iy)=\\cosh y$.",hint:"Gunakan definisi exponential.",answer:"Langsung dari $(e^{-y}+e^y)/2$."},
  {prompt:"Cari zeros $\\sin z$.",hint:"$e^{2iz}=1$.",answer:"$z=n\\pi$, $n\\in\\mathbb Z$."},
  {prompt:"Apakah $|\\sin z|\\le1$ untuk complex z?",hint:"Ambil z=iy.",answer:"Tidak; $|\\sin(iy)|=|\\sinh y|$ tak terbatas."}
 ],
 mistakes:["Mentransfer boundedness trig real ke complex.","Salah tanda pada hubungan sin(iy) dan sinh.","Menganggap identities hanya real; banyak identitas entire berlaku kompleks."],
 connections:["Euler formula.","Zeros/poles fungsi trig.","Residue calculations sering memakai trig/hyperbolic."]
},

"invers-trigonometri-dan-hiperbolik":{
 intro:["Inverse trig kompleks dapat dinyatakan dengan square roots dan logarithms. Karena keduanya multi-valued, invers trig kompleks juga mempunyai branch structure.","Principal branches dipilih dengan branch cuts agar fungsi single-valued dan analytic pada domain tertentu."],
 formal:[
  P("Arcsine Log Form","Salah satu relation adalah $\\arcsin z=-i\\log(iz+\\sqrt{1-z^2})$."),
  P("Arccos / Arctan","Fungsi invers lain dapat dinyatakan melalui kombinasi logarithm dan square root dengan pilihan branch."),
  N("Branch Dependence","Formula menghasilkan keluarga nilai kecuali cabang log/root ditetapkan."),
  N("Inverse Hyperbolic","$\\operatorname{arsinh}z=\\log(z+\\sqrt{z^2+1})$ merupakan formula analog.")
 ],
 examples:[
  {title:"Mengapa Multi-valued?",problem:"Jelaskan secara struktural mengapa $\\arcsin z$ multi-valued.",solution:["Persamaan $\\sin w=z$ invariant terhadap periodisitas $w\\mapsto w+2\\pi k$.","Simetri sinus memberi pilihan tambahan.","Formula log/root juga masing-masing multi-valued."],conclusion:"Tidak ada invers global single-valued tanpa pembatasan domain."}
 ],
 exercises:[
  {prompt:"Apa yang diperlukan untuk principal arcsin?",hint:"Pilih branches log dan square root serta branch cuts.",answer:"Domain dibatasi sehingga kedua komponen single-valued analytic."},
  {prompt:"Mengapa inverse function theorem lokal masih berlaku saat derivative nonzero?",hint:"Global periodicity tidak menghalangi invertibility lokal.",answer:"Di neighborhood kecil tanpa overlap, fungsi memiliki inverse analytic lokal."},
  {prompt:"Cari relation $\\operatorname{arctanh}z$.",hint:"Solve tanh w=z using exponentials.",answer:"$\\frac12\\log\\frac{1+z}{1-z}$ dengan branch choices."}
 ],
 mistakes:["Menganggap “inverse” berarti satu nilai global.","Mengabaikan branch cut.","Menggunakan formula real domain sebagai identitas global tanpa branch specification."],
 connections:["Riemann surfaces.","Analytic continuation.","Branch cuts pada contour integration."]
},

"aplikasi-fungsi-elementer":{
 intro:["Fungsi elementer kompleks menyederhanakan model gelombang, rotasi, pertumbuhan, dan boundary patterns. Exponential kompleks khususnya menggabungkan decay/growth dan phase.","Dalam banyak aplikasi, real part dari fungsi kompleks digunakan sebagai observable real."],
 formal:[
  P("Oscillation Representation","$e^{i\\omega t}=\\cos\\omega t+i\\sin\\omega t$ menyandikan oscillation dalam satu exponential."),
  P("Damped Oscillation","$e^{(\\alpha+i\\omega)t}=e^{\\alpha t}e^{i\\omega t}$ memisahkan envelope dan phase."),
  N("Real Physical Quantity","Representasi kompleks sering alat komputasi; quantity fisik akhirnya diambil real/imaginary part sesuai convention.")
 ],
 examples:[
  {title:"Gelombang Teredam",problem:"Interpretasikan $e^{(-2+3i)t}$.",solution:["Modulus $e^{-2t}$ memberi decay.","Argumen $3t$ memberi angular frequency 3."],conclusion:"Sinyal menggabungkan exponential damping dan oscillation."}
 ],
 exercises:[
  {prompt:"Tulis $\\cos\\omega t$ sebagai kombinasi exponentials.",hint:"Euler.",answer:"$(e^{i\\omega t}+e^{-i\\omega t})/2$."},
  {prompt:"Apa modulus $e^{(1+2i)t}$?",hint:"Bagian real exponent.",answer:"$e^t$."},
  {prompt:"Apa period phase $e^{i\\omega t}$?",hint:"$\\omega T=2\\pi$.",answer:"$T=2\\pi/|\\omega|$ untuk $\\omega\\ne0$."}
 ],
 mistakes:["Menganggap complex signal itu sendiri selalu quantity fisik.","Mencampur growth rate dan frequency.","Lupa branch ketika aplikasi memakai logarithm/power."],
 connections:["Fourier analysis.","Linear ODE systems.","Potential and wave equations."]
}
};
