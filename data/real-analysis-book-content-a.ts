import type { BookLessonContent } from "@/data/book-content-types";

const D=(title:string,statement:string)=>({kind:"definition" as const,title,statement});
const L=(title:string,statement:string,proof?:string[])=>({kind:"lemma" as const,title,statement,proof});
const P=(title:string,statement:string,proof?:string[])=>({kind:"proposition" as const,title,statement,proof});
const T=(title:string,statement:string,proof?:string[])=>({kind:"theorem" as const,title,statement,proof});
const C=(title:string,statement:string,proof?:string[])=>({kind:"corollary" as const,title,statement,proof});
const N=(title:string,statement:string)=>({kind:"note" as const,title,statement});

export const realAnalysisContentA:Record<string,BookLessonContent>={
"himpunan-dan-fungsi":{
 intro:[
  "Analisis real menggunakan bahasa himpunan dan fungsi secara terus-menerus. Tujuan bagian ini adalah memastikan notasi, operasi himpunan, citra, pracitra, dan jenis-jenis fungsi dipahami secara presisi.",
  "Fungsi dipandang sebagai pemetaan dari domain ke kodomain. Perbedaan antara range dan kodomain perlu dijaga karena banyak argumen tentang surjektivitas dan invers bergantung pada perbedaan tersebut."
 ],
 notation:[
  {symbol:"$A\\subseteq B$",meaning:"Setiap elemen $A$ merupakan elemen $B$."},
  {symbol:"$f:A\\to B$",meaning:"Fungsi $f$ dengan domain $A$ dan kodomain $B$."},
  {symbol:"$f(E)$",meaning:"Citra langsung himpunan $E\\subseteq A$."},
  {symbol:"$f^{-1}(H)$",meaning:"Pracitra himpunan $H\\subseteq B$; notasi ini tidak mensyaratkan fungsi invers ada."}
 ],
 formal:[
  D("Kesamaan Himpunan","Dua himpunan $A$ dan $B$ sama jika mempunyai elemen yang sama. Secara ekuivalen, $A=B$ jika dan hanya jika $A\\subseteq B$ dan $B\\subseteq A$."),
  D("Fungsi","Fungsi $f:A\\to B$ memasangkan setiap $a\\in A$ dengan tepat satu elemen $f(a)\\in B$."),
  D("Injektif, Surjektif, dan Bijektif","$f$ injektif apabila $f(x_1)=f(x_2)$ mengakibatkan $x_1=x_2$; surjektif apabila setiap $b\\in B$ memiliki praimaj; bijektif apabila keduanya terpenuhi."),
  T("Pracitra Mempertahankan Operasi Himpunan","Untuk $G,H\\subseteq B$, berlaku $f^{-1}(G\\cup H)=f^{-1}(G)\\cup f^{-1}(H)$ dan $f^{-1}(G\\cap H)=f^{-1}(G)\\cap f^{-1}(H)$.",[
    "Diambil sebarang $x\\in A$. Keanggotaan $x\\in f^{-1}(G\\cup H)$ ekuivalen dengan $f(x)\\in G\\cup H$.",
    "Kondisi tersebut ekuivalen dengan $f(x)\\in G$ atau $f(x)\\in H$, yaitu $x\\in f^{-1}(G)$ atau $x\\in f^{-1}(H)$.",
    "Argumen untuk irisan dilakukan dengan mengganti kata “atau” menjadi “dan”. Dengan demikian, kedua identitas terbukti."
  ]),
  T("Komposisi Bijeksi","Jika $f:A\\to B$ dan $g:B\\to C$ bijektif, komposisi $g\\circ f:A\\to C$ juga bijektif.",[
    "Injektivitas diperoleh dari $g(f(x_1))=g(f(x_2))$, kemudian injektivitas $g$ memberi $f(x_1)=f(x_2)$ dan injektivitas $f$ memberi $x_1=x_2$.",
    "Untuk sebarang $c\\in C$, surjektivitas $g$ memberikan $b\\in B$ dengan $g(b)=c$. Surjektivitas $f$ memberikan $a\\in A$ dengan $f(a)=b$.",
    "Dengan demikian, $(g\\circ f)(a)=c$ dan komposisi bersifat surjektif."
  ])
 ],
 examples:[
  {title:"Pracitra Interval",problem:"Diberikan $f(x)=x^2$. Tentukan $f^{-1}([1,4])$.",solution:["Syarat pracitra adalah $1\\le x^2\\le4$.","Inequality tersebut ekuivalen dengan $1\\le |x|\\le2$.","Diperoleh $f^{-1}([1,4])=[-2,-1]\\cup[1,2]$."],conclusion:"Pracitra dapat berupa gabungan beberapa interval meskipun himpunan target hanya satu interval."}
 ],
 exercises:[
  {prompt:"Buktikan $A\\setminus(B\\cup C)=(A\\setminus B)\\cap(A\\setminus C)$.",hint:"Gunakan pembuktian dua inklusi atau argumen elemen.",answer:"Diambil sebarang $x$ dan diterjemahkan syarat keanggotaan; kedua ruas sama-sama berarti $x\\in A$, $x\\notin B$, dan $x\\notin C$."},
  {prompt:"Jika $f$ injektif dan $E\\subseteq A$, buktikan $f^{-1}(f(E))=E$.",hint:"Satu inklusi selalu benar; inklusi balik memakai injektivitas.",answer:"Jika $x\\in f^{-1}(f(E))$, ada $e\\in E$ dengan $f(x)=f(e)$; injektivitas memberi $x=e\\in E$."},
  {prompt:"Berikan contoh fungsi yang surjektif tetapi tidak injektif.",hint:"Gunakan fungsi dari himpunan berhingga atau $x^2$ dengan kodomain yang sesuai.",answer:"Contoh: $f:\\mathbb R\\to[0,\\infty)$, $f(x)=x^2$."}
 ],
 mistakes:["Menganggap $f^{-1}(H)$ selalu berarti fungsi invers.","Mengabaikan kodomain ketika memeriksa surjektivitas.","Membuktikan kesamaan himpunan hanya dengan satu inklusi."],
 connections:["Struktur himpunan terbuka/tertutup pada topologi memakai pracitra.","Bijeksi menjadi bahasa utama untuk kardinalitas.","Komposisi dan invers muncul kembali pada fungsi kontinu dan pemetaan kompleks."]
},

"induksi-matematika":{
 intro:[
  "Induksi matematika mengubah pernyataan tak hingga banyak kasus menjadi dua tugas: memverifikasi basis dan membangun jembatan dari kasus $k$ menuju $k+1$.",
  "Dasar logisnya berkaitan erat dengan Well-Ordering Property pada $\\mathbb N$."
 ],
 notation:[{symbol:"$P(n)$",meaning:"Pernyataan yang bergantung pada $n\\in\\mathbb N$."}],
 formal:[
  T("Prinsip Induksi","Jika $P(1)$ benar dan untuk setiap $k\\in\\mathbb N$, kebenaran $P(k)$ mengakibatkan kebenaran $P(k+1)$, maka $P(n)$ benar untuk setiap $n\\in\\mathbb N$."),
  T("Induksi dengan Basis $n_0$","Jika $P(n_0)$ benar dan $P(k)\\Rightarrow P(k+1)$ untuk setiap $k\\ge n_0$, maka $P(n)$ benar untuk seluruh $n\\ge n_0$."),
  T("Induksi Kuat","Jika kebenaran seluruh $P(1),\\ldots,P(k)$ cukup untuk membuktikan $P(k+1)$, dan basis yang diperlukan benar, seluruh pernyataan berikutnya benar.",[
    "Diandaikan terdapat bilangan natural terkecil yang gagal memenuhi pernyataan.",
    "Semua indeks lebih kecil memenuhi pernyataan karena minimalitas indeks gagal tersebut.",
    "Langkah induksi kuat kemudian memaksa indeks gagal itu juga memenuhi pernyataan, menghasilkan kontradiksi."
  ])
 ],
 examples:[
  {title:"Jumlah Bilangan Asli",problem:"Buktikan $1+2+\\cdots+n=\\frac{n(n+1)}2$.",solution:["Basis $n=1$ memberi $1=1(2)/2$.","Diandaikan formula benar untuk $n=k$.","Ditambahkan $k+1$: $\\frac{k(k+1)}2+(k+1)=\\frac{(k+1)(k+2)}2$.","Dengan demikian, formula benar untuk $k+1$."],conclusion:"Prinsip induksi memberikan formula untuk setiap $n\\in\\mathbb N$."}
 ],
 exercises:[
  {prompt:"Buktikan $1+3+\\cdots+(2n-1)=n^2$.",hint:"Tambahkan suku $2k+1$ pada hipotesis induksi.",answer:"Basis jelas; $k^2+(2k+1)=(k+1)^2$."},
  {prompt:"Buktikan $2^n\\ge n+1$ untuk $n\\ge0$.",hint:"Gunakan $2^{k+1}=2\\cdot2^k$.",answer:"Dari $2^k\\ge k+1$, diperoleh $2^{k+1}\\ge2k+2\\ge k+2$."},
  {prompt:"Jelaskan kesalahan induksi yang tidak memeriksa basis.",hint:"Implikasi $P(k)\\Rightarrow P(k+1)$ tidak menjamin ada satu pun $P(k)$ benar.",answer:"Tanpa basis benar, rantai implikasi tidak pernah dimulai."}
 ],
 mistakes:["Melupakan basis induksi.","Menggunakan kesimpulan $P(k+1)$ di dalam pembuktiannya sendiri.","Tidak menyatakan dengan jelas hipotesis induksi."],
 connections:["Digunakan dalam teori barisan rekursif.","Mendasari banyak argumen kombinatorika.","Well-ordering juga muncul pada pembuktian sifat bilangan natural."]
},

"himpunan-hingga-dan-tak-hingga":{
 intro:["Konsep hingga dan tak hingga diformalkan melalui bijeksi. Pendekatan ini memisahkan intuisi “jumlah elemen” dari representasi tertentu.","Himpunan tak hingga dapat mempunyai kardinalitas yang sama dengan subset propernya; fenomena ini merupakan perbedaan mendasar dari himpunan hingga."],
 formal:[
  D("Himpunan Hingga","Himpunan $S$ memiliki $n$ elemen jika terdapat bijeksi $\\{1,\\dots,n\\}\\to S$. Himpunan kosong memiliki nol elemen."),
  D("Denumerable dan Countable","$S$ denumerable jika terdapat bijeksi $\\mathbb N\\to S$. Himpunan countable jika hingga atau denumerable."),
  T("$\\mathbb N\\times\\mathbb N$ Dapat Dihitung","Himpunan pasangan bilangan natural denumerable.",["Pasangan $(m,n)$ dapat dikelompokkan menurut nilai $m+n$.","Setiap diagonal hanya memuat hingga banyak pasangan.","Membaca diagonal secara berurutan menghasilkan enumerasi semua pasangan tanpa kehilangan elemen."]),
  T("$\\mathbb Q$ Dapat Dihitung","Himpunan bilangan rasional denumerable.",["Setiap rasional positif dapat direpresentasikan oleh pasangan $(m,n)\\in\\mathbb N^2$ melalui $m/n$.","Karena $\\mathbb N^2$ countable, citra surjektifnya ke $\\mathbb Q_+$ juga countable.","Bilangan rasional negatif dan nol dapat ditambahkan tanpa mengubah countability."])
 ],
 examples:[{title:"Bilangan Genap",problem:"Tunjukkan himpunan bilangan genap positif denumerable.",solution:["Definisikan $f(n)=2n$.","Fungsi ini injektif karena $2n_1=2n_2$ memberi $n_1=n_2$.","Setiap bilangan genap positif berbentuk $2n$, sehingga fungsi surjektif."],conclusion:"Terdapat bijeksi $\\mathbb N\\leftrightarrow2\\mathbb N$."}],
 exercises:[
  {prompt:"Tunjukkan $\\mathbb Z$ denumerable.",hint:"Susun urutan $0,1,-1,2,-2,\\ldots$.",answer:"Enumerasi tersebut memberikan bijeksi eksplisit dengan $\\mathbb N$."},
  {prompt:"Buktikan subset dari himpunan countable juga countable.",hint:"Gunakan enumerasi himpunan induk dan ambil indeks yang mengenai subset.",answer:"Elemen subset dapat dipilih dalam urutan kemunculannya pada enumerasi induk."},
  {prompt:"Mengapa interval real tidak dapat dihitung?",hint:"Gunakan argumen diagonal Cantor pada representasi desimal/biner.",answer:"Diasumsikan ada daftar semua elemen lalu dibentuk elemen baru yang berbeda pada digit ke-$n$ dari elemen ke-$n$."}
 ],
 mistakes:["Menyamakan countable dengan finite.","Menganggap subset proper selalu mempunyai kardinalitas lebih kecil.","Menggunakan representasi pecahan sebagai bijeksi tanpa menangani duplikasi seperti $1/2=2/4$."],
 connections:["Kardinalitas penting untuk memahami ketakterhitungan $\\mathbb R$.","Countability muncul dalam teori basis topologi dan teori ukuran.","Diagonal argument menjadi pola penting dalam analisis dan logika."]
},

"sifat-aljabar-dan-urutan-r":{
 intro:["Sistem bilangan real diperlakukan sebagai lapangan terurut. Aksioma aljabar mengatur penjumlahan dan perkalian, sedangkan aksioma urutan mengatur positif-negatif dan pertidaksamaan.","Banyak identitas elementer yang biasa dipakai dalam kalkulus sebenarnya dapat diturunkan dari struktur ini."],
 formal:[
  D("Ordered Field","Lapangan terurut adalah lapangan $F$ dengan relasi $<$ yang total dan kompatibel dengan penjumlahan serta perkalian bilangan positif."),
  P("Pembatalan Penjumlahan","Jika $a+c=b+c$, maka $a=b$.",["Ditambahkan invers aditif $-c$ pada kedua ruas.","Asosiativitas memberi $a+(c-c)=b+(c-c)$, sehingga $a=b$."]),
  P("Perkalian Positif","Jika $a>0$ dan $b>0$, maka $ab>0$. Jika $a<b$ dan $c>0$, maka $ac<bc$."),
  C("Kuadrat Tak Negatif","Untuk setiap $x\\in\\mathbb R$, berlaku $x^2\\ge0$.",["Jika $x\\ge0$, hasil kali dua bilangan tak negatif tidak negatif.","Jika $x<0$, maka $-x>0$ dan $x^2=(-x)^2>0$."])
 ],
 examples:[{title:"Pertidaksamaan Kuadrat",problem:"Buktikan $a^2+b^2\\ge2ab$ untuk $a,b\\in\\mathbb R$.",solution:["Dari sifat kuadrat, $(a-b)^2\\ge0$.","Ekspansi memberi $a^2-2ab+b^2\\ge0$.","Dipindahkan $2ab$ ke ruas kanan."],conclusion:"Diperoleh $a^2+b^2\\ge2ab$."}],
 exercises:[
  {prompt:"Buktikan jika $0<a<b$, maka $0<1/b<1/a$.",hint:"Kalikan dengan bilangan positif $ab$.",answer:"$a<b$ memberi $a/(ab)<b/(ab)$, yaitu $1/b<1/a$."},
  {prompt:"Buktikan tidak ada $x\\in\\mathbb R$ dengan $x^2=-1$.",hint:"Gunakan kuadrat tak negatif.",answer:"Setiap kuadrat real tak negatif, sedangkan $-1<0$."},
  {prompt:"Dari $a<b$, apa yang terjadi jika kedua ruas dikalikan $c<0$?",hint:"Gunakan $-c>0$.",answer:"Urutan berbalik: $ac>bc$."}
 ],
 mistakes:["Mengalikan pertidaksamaan dengan bilangan yang tandanya tidak diketahui.","Menggunakan sifat akar/kuadrat sebelum memeriksa domain.","Menganggap aksioma kelengkapan sudah digunakan padahal bagian ini hanya memerlukan ordered-field axioms."],
 connections:["Ordered-field structure menjadi fondasi nilai mutlak.","Kelengkapan pada bagian berikutnya membedakan $\\mathbb R$ dari $\\mathbb Q$.","Pertidaksamaan digunakan dalam seluruh pembuktian ε-δ."]
},

"nilai-mutlak-dan-garis-real":{
 intro:["Nilai mutlak mengubah struktur urutan menjadi geometri jarak. Identitas $|x-a|<r$ berarti $x$ berada dalam persekitaran berjari-jari $r$ dari $a$.","Hampir seluruh definisi limit dan kontinuitas menggunakan bahasa jarak ini."],
 notation:[{symbol:"$|x|$",meaning:"Jarak titik $x$ dari $0$."},{symbol:"$V_r(a)$",meaning:"Persekitaran terbuka $\\{x:|x-a|<r\\}$."}],
 formal:[
  D("Nilai Mutlak","$|x|=x$ untuk $x\\ge0$ dan $|x|=-x$ untuk $x<0$."),
  T("Ketaksamaan Segitiga","Untuk $x,y\\in\\mathbb R$, $|x+y|\\le|x|+|y|$.",["Dari $-|x|\\le x\\le|x|$ dan $-|y|\\le y\\le|y|$, dijumlahkan kedua pertidaksamaan.","Diperoleh $-(|x|+|y|)\\le x+y\\le |x|+|y|$.","Definisi nilai mutlak memberi hasil yang diinginkan."]),
  C("Ketaksamaan Segitiga Terbalik","$\\bigl||x|-|y|\\bigr|\\le|x-y|$."),
  P("Persekitaran dan Interval","$|x-a|<r$ ekuivalen dengan $a-r<x<a+r$.")
 ],
 examples:[{title:"Mengubah Bentuk Nilai Mutlak",problem:"Selesaikan $|2x-3|<5$.",solution:["Ditulis $-5<2x-3<5$.","Ditambahkan $3$: $-2<2x<8$.","Dibagi $2$: $-1<x<4$."],conclusion:"Himpunan solusi $(-1,4)$."}],
 exercises:[
  {prompt:"Buktikan $|x|-|y|\\le|x-y|$.",hint:"Tulis $x=(x-y)+y$.",answer:"Ketaksamaan segitiga memberi $|x|\\le|x-y|+|y|$."},
  {prompt:"Selesaikan $|x+2|\\ge3$.",hint:"Pisahkan menjadi dua kasus.",answer:"$x\\le-5$ atau $x\\ge1$."},
  {prompt:"Tentukan persekitaran $V_{0.2}(1.5)$.",hint:"Gunakan $(a-r,a+r)$.",answer:"$(1.3,1.7)$."}
 ],
 mistakes:["Menganggap $|x+y|=|x|+|y|$ selalu berlaku.","Salah membalik tanda saat menghilangkan nilai mutlak.","Tidak mengenali $|x-a|$ sebagai jarak."],
 connections:["Definisi limit barisan memakai $|a_n-L|<\\varepsilon$.","Definisi limit fungsi memakai $|x-a|<\\delta$.","Metrik standar di $\\mathbb R$ adalah $d(x,y)=|x-y|$."]
},

"kelengkapan-r":{
 intro:["Kelengkapan merupakan sifat yang membedakan $\\mathbb R$ dari $\\mathbb Q$. Secara intuitif, kelengkapan menyatakan tidak ada “lubang” pada garis real yang dapat muncul sebagai batas supremum himpunan terbatas.","Sifat supremum akan dipakai untuk membuktikan konvergensi barisan monoton, sifat Archimedean, keberadaan akar, dan banyak teorema fundamental lain."],
 notation:[{symbol:"$\\sup S$",meaning:"Batas atas terkecil himpunan $S$."},{symbol:"$\\inf S$",meaning:"Batas bawah terbesar himpunan $S$."}],
 formal:[
  D("Batas Atas","Bilangan $u$ merupakan batas atas $S\\subseteq\\mathbb R$ jika $s\\le u$ untuk setiap $s\\in S$."),
  D("Supremum","$u=\\sup S$ jika $u$ batas atas $S$ dan setiap batas atas $v$ memenuhi $u\\le v$."),
  T("Sifat Kelengkapan ℝ","Setiap himpunan tak kosong $S\\subseteq\\mathbb R$ yang terbatas di atas mempunyai supremum di $\\mathbb R$."),
  P("Karakterisasi Supremum","Jika $u=\\sup S$, maka untuk setiap $\\varepsilon>0$ terdapat $s\\in S$ dengan $u-\\varepsilon<s\\le u$.",[
    "Diandaikan tidak ada $s\\in S$ dengan $s>u-\\varepsilon$.",
    "Kondisi tersebut menjadikan $u-\\varepsilon$ batas atas $S$.",
    "Hal itu bertentangan dengan minimalitas $u$ sebagai batas atas terkecil."
  ]),
  C("Infimum melalui Supremum","Jika $S$ tak kosong dan terbatas di bawah, $\\inf S=-\\sup(-S)$.")
 ],
 examples:[{title:"Supremum Himpunan Terbuka",problem:"Tentukan supremum dan infimum $S=(0,1)$.",solution:["Setiap $s\\in S$ memenuhi $s<1$, jadi $1$ batas atas.","Untuk setiap $\\varepsilon>0$, bilangan $1-\\min(\\varepsilon/2,1/2)$ berada di $S$ dan lebih besar dari $1-\\varepsilon$.","Argumen serupa memberi infimum $0$."],conclusion:"$\\sup S=1$ dan $\\inf S=0$, walaupun keduanya tidak termasuk $S$."}],
 exercises:[
  {prompt:"Tentukan $\\sup\\{1-1/n:n\\in\\mathbb N\\}$.",hint:"Tunjukkan $1$ batas atas dan dapat didekati dari bawah.",answer:"Supremumnya $1$."},
  {prompt:"Jika $S$ mempunyai maksimum $M$, buktikan $\\sup S=M$.",hint:"Maksimum adalah elemen sekaligus batas atas.",answer:"Setiap batas atas harus paling sedikit $M$ karena $M\\in S$."},
  {prompt:"Berikan contoh subset $\\mathbb Q$ yang terbatas tetapi tidak mempunyai supremum di $\\mathbb Q$.",hint:"Gunakan rasional $q$ dengan $q^2<2$.",answer:"$S=\\{q\\in\\mathbb Q:q^2<2\\}$ tidak memiliki supremum rasional."}
 ],
 mistakes:["Menganggap supremum harus merupakan elemen himpunan.","Menyamakan supremum dengan maksimum.","Lupa syarat tak kosong dan terbatas di atas pada completeness property."],
 connections:["Monotone Convergence Theorem menggunakan supremum range barisan.","Extreme Value Theorem dan compactness bergantung pada kelengkapan secara tidak langsung.","Cauchy criterion setara dengan kelengkapan pada $\\mathbb R$."]
},

"aplikasi-supremum":{
 intro:["Setelah sifat supremum tersedia, beberapa hasil mendasar dapat diturunkan: sifat Archimedean, keberadaan akar kuadrat positif, dan kerapatan $\\mathbb Q$ serta $\\mathbb R\\setminus\\mathbb Q$.","Hasil-hasil ini menjelaskan mengapa skala bilangan real dapat dipakai untuk aproksimasi sehalus yang dibutuhkan."],
 formal:[
  T("Sifat Archimedean","Untuk setiap $x\\in\\mathbb R$ terdapat $n\\in\\mathbb N$ dengan $n>x$.",["Diandaikan $\\mathbb N$ terbatas di atas dan ambil $u=\\sup\\mathbb N$.","Karakterisasi supremum memberi $n\\in\\mathbb N$ dengan $u-1<n\\le u$.","Diperoleh $n+1>u$ dan $n+1\\in\\mathbb N$, bertentangan dengan $u$ sebagai batas atas."]),
  C("Bilangan Natural dengan $1/n<\\varepsilon$","Untuk setiap $\\varepsilon>0$ terdapat $n\\in\\mathbb N$ dengan $1/n<\\varepsilon$."),
  T("Kerapatan Rasional","Jika $x<y$, terdapat $r\\in\\mathbb Q$ dengan $x<r<y$.",["Dipilih $n$ sehingga $n(y-x)>1$.","Dengan sifat Archimedean dipilih integer $m$ yang pertama melebihi $nx$.","Minimalitas $m$ memberi $nx<m\\le nx+1<ny$, sehingga $x<m/n<y$."]),
  T("Eksistensi Akar Kuadrat","Untuk setiap $a>0$ terdapat unik $x>0$ dengan $x^2=a$.")
 ],
 examples:[{title:"Rasional di Antara Dua Real",problem:"Temukan satu rasional di antara $\\sqrt2$ dan $1.5$.",solution:["Diketahui $\\sqrt2\\approx1.4142$.","Bilangan $7/5=1.4$ terlalu kecil, sedangkan $10/7\\approx1.4286$ berada di antara keduanya."],conclusion:"Salah satu pilihan adalah $10/7$."}],
 exercises:[
  {prompt:"Buktikan terdapat bilangan irasional di antara setiap dua bilangan real berbeda.",hint:"Gunakan densitas rasional pada interval setelah translasi dengan irasional tetap.",answer:"Pilih rasional $r$ di antara $x-\\sqrt2$ dan $y-\\sqrt2$; $r+\\sqrt2$ irasional dan terletak di antara $x,y$."},
  {prompt:"Tunjukkan $\\inf\\{1/n:n\\in\\mathbb N\\}=0$.",hint:"Gunakan Archimedean property.",answer:"$0$ batas bawah; untuk setiap $\\varepsilon>0$ ada $n$ dengan $1/n<\\varepsilon$."},
  {prompt:"Mengapa sifat Archimedean gagal pada sistem bilangan dengan infinitesimal nonstandar?",hint:"Bandingkan elemen yang lebih besar dari semua natural.",answer:"Keberadaan elemen semacam itu langsung meniadakan klaim setiap real dilampaui natural."}
 ],
 mistakes:["Menggunakan aproksimasi desimal sebagai pengganti pembuktian densitas.","Menganggap sifat Archimedean merupakan aksioma tambahan, padahal dapat diturunkan dari kelengkapan.","Tidak membedakan keberadaan rasional dengan konstruksi rasional eksplisit."],
 connections:["Sifat $1/n\\to0$ berasal dari Archimedean property.","Densitas dipakai dalam aproksimasi dan topologi real.","Eksistensi akar menunjukkan completeness menutup celah yang ada di $\\mathbb Q$."]
},

"interval":{
 intro:["Interval adalah subset $\\mathbb R$ yang memuat setiap titik di antara dua elemennya. Struktur interval sangat terkait dengan connectedness dan sifat nilai antara.","Nested Interval Property menjadi bentuk lain dari kelengkapan dan alat penting untuk konstruksi limit."],
 formal:[
  D("Interval","Himpunan $I\\subseteq\\mathbb R$ disebut interval jika $x,y\\in I$ dan $x<z<y$ mengakibatkan $z\\in I$."),
  T("Nested Interval Property","Jika $I_n=[a_n,b_n]$ tidak kosong dan $I_{n+1}\\subseteq I_n$ untuk semua $n$, maka $\\bigcap_{n=1}^\\infty I_n\\ne\\varnothing$.",["Himpunan $A=\\{a_n\\}$ terbatas di atas oleh setiap $b_n$.","Ambil $x=\\sup A$. Untuk setiap $n$, diperoleh $a_n\\le x\\le b_n$.","Dengan demikian, $x\\in I_n$ untuk seluruh $n$."]),
  C("Nested Interval dengan Panjang Menuju Nol","Jika tambahan $b_n-a_n\\to0$, irisan nested intervals hanya memuat satu titik.")
 ],
 examples:[{title:"Bisection sebagai Nested Intervals",problem:"Jelaskan mengapa metode bisection menghasilkan kandidat akar tunggal jika panjang interval terus dibagi dua.",solution:["Interval baru selalu subset interval lama.","Panjang interval ke-$n$ adalah panjang awal dibagi $2^n$, sehingga menuju nol.","Nested Interval Property memberi satu titik bersama."],conclusion:"Titik bersama menjadi limit endpoint dan kandidat lokasi akar."}],
 exercises:[
  {prompt:"Berikan contoh nested open intervals dengan irisan kosong.",hint:"Pertimbangkan $(0,1/n)$.",answer:"$I_n=(0,1/n)$ bersarang tetapi irisan kosong."},
  {prompt:"Buktikan $[a,b]$ merupakan interval.",hint:"Ambil $x,y\\in[a,b]$ dan $x<z<y$.",answer:"Dari $a\\le x<z<y\\le b$ diperoleh $z\\in[a,b]$."},
  {prompt:"Apa hubungan interval dengan connectedness di $\\mathbb R$?",hint:"Subset connected di $\\mathbb R$ tepat interval.",answer:"Setiap interval connected, dan setiap subset connected dari $\\mathbb R$ merupakan interval."}
 ],
 mistakes:["Menganggap Nested Interval Property tetap benar untuk semua interval terbuka.","Lupa syarat ketertutupan dan keterbatasan endpoint.","Menyamakan interval dengan neighborhood."],
 connections:["IVT bekerja pada interval.","Compactness $[a,b]$ berkaitan dengan nested interval.","Metode bisection adalah aplikasi konstruktif."]
},

"barisan-dan-limit":{
 intro:[
  "Barisan real adalah fungsi dari $\\mathbb N$ ke $\\mathbb R$. Konvergensi tidak berarti suku akhirnya sama dengan limit; yang diperlukan adalah suku-suku akhirnya dapat dibuat sedekat apa pun dengan limit.",
  "Bahasa formalnya adalah ε-N: untuk setiap toleransi $\\varepsilon>0$, terdapat indeks ambang $N$ setelah itu semua suku berada dalam persekitaran $\\varepsilon$ dari limit."
 ],
 notation:[
  {symbol:"$(a_n)$",meaning:"Barisan dengan suku ke-$n$ adalah $a_n$."},
  {symbol:"$a_n\\to L$",meaning:"Barisan konvergen ke $L$."},
  {symbol:"$\\forall\\varepsilon>0\\ \\exists N\\ \\forall n\\ge N$",meaning:"Urutan kuantor pada definisi konvergensi."}
 ],
 formal:[
  D("Barisan Real","Barisan real adalah fungsi $a:\\mathbb N\\to\\mathbb R$; nilai $a(n)$ ditulis $a_n$."),
  D("Konvergensi Barisan","$(a_n)$ konvergen ke $L$ jika untuk setiap $\\varepsilon>0$ terdapat $N\\in\\mathbb N$ sehingga $n\\ge N$ mengakibatkan $|a_n-L|<\\varepsilon$."),
  D("Sifat Eventually","Suatu sifat $P(n)$ berlaku akhirnya (eventually) apabila terdapat $N\\in\\mathbb N$ sehingga $P(n)$ benar untuk setiap $n\\ge N$. Definisi limit barisan seluruhnya berbicara tentang perilaku eventually, bukan beberapa suku awal."),
  D("Barisan Terbatas","Barisan $(a_n)$ disebut terbatas apabila terdapat $M>0$ sehingga $|a_n|\\le M$ untuk setiap $n\\in\\mathbb N$. Secara ekuivalen, range barisan merupakan subset terbatas dari $\\mathbb R$."),
  P("Mengubah Hingga Banyak Suku Tidak Mengubah Limit","Jika dua barisan $(a_n)$ dan $(b_n)$ sama untuk semua $n$ yang cukup besar, maka salah satunya konvergen ke $L$ jika dan hanya jika yang lain juga konvergen ke $L$.",[
    "Diambil indeks $N_0$ sehingga $a_n=b_n$ untuk setiap $n\\ge N_0$.",
    "Jika $a_n\\to L$, untuk setiap $\\varepsilon>0$ terdapat $N_1$ sehingga $|a_n-L|<\\varepsilon$ untuk $n\\ge N_1$.",
    "Untuk $n\\ge\\max\\{N_0,N_1\\}$, berlaku $b_n=a_n$, sehingga $|b_n-L|<\\varepsilon$.",
    "Argumen sebaliknya identik. Dengan demikian, perubahan hingga banyak suku awal tidak memengaruhi limit."
  ]),
  T("Keunikan Limit","Jika $a_n\\to L$ dan $a_n\\to M$, maka $L=M$.",[
    "Diandaikan $L\\ne M$ dan dipilih $\\varepsilon=|L-M|/3>0$.",
    "Untuk $n$ cukup besar, berlaku $|a_n-L|<\\varepsilon$ dan $|a_n-M|<\\varepsilon$.",
    "Ketaksamaan segitiga memberi $|L-M|\\le|L-a_n|+|a_n-M|<2|L-M|/3$, kontradiksi.",
    "Dengan demikian, limit barisan unik."
  ]),
  T("Barisan Konvergen Terbatas","Setiap barisan real yang konvergen merupakan barisan terbatas.",[
    "Karena $a_n\\to L$, untuk $\\varepsilon=1$ terdapat $N$ sehingga $|a_n-L|<1$ untuk $n\\ge N$.",
    "Suku ekor memenuhi $|a_n|\\le|L|+1$.",
    "Hanya tersisa hingga banyak suku awal $a_1,\\ldots,a_{N-1}$. Dipilih batas maksimum dari nilai mutlak suku awal dan $|L|+1$."
  ]),
  P("Kriteria Selisih Nol","$a_n\\to L$ jika dan hanya jika $a_n-L\\to0$.",[
    "Definisi $a_n\\to L$ menyatakan bahwa untuk setiap $\\varepsilon>0$, akhirnya $|a_n-L|<\\varepsilon$.",
    "Pernyataan tersebut tepat sama dengan definisi barisan $(a_n-L)$ konvergen ke $0$."
  ]),
  P("Limit Nilai Mutlak","Jika $a_n\\to L$, maka $|a_n|\\to|L|$.",[
    "Ketaksamaan segitiga terbalik memberi $\\bigl||a_n|-|L|\\bigr|\\le|a_n-L|$.",
    "Ruas kanan menuju nol, sehingga ruas kiri juga menuju nol."
  ])
 ],
 examples:[
  {title:"Pembuktian ε-N untuk Barisan Rasional",problem:"Buktikan $a_n=\\frac{2n+1}{n+3}\\to2$.",solution:["Dihitung $\\left|\\frac{2n+1}{n+3}-2\\right|=\\frac5{n+3}$.","Diberikan $\\varepsilon>0$. Cukup dipilih $N>5/\\varepsilon$.","Untuk $n\\ge N$, diperoleh $\\frac5{n+3}\\le\\frac5n\\le\\frac5N<\\varepsilon$."],conclusion:"Dengan demikian, $a_n\\to2$."},
  {title:"Barisan Konstan",problem:"Tentukan limit $a_n=c$.",solution:["Untuk setiap $\\varepsilon>0$ dan setiap $n$, $|a_n-c|=0<\\varepsilon$.","Tidak diperlukan syarat khusus pada $N$; dapat dipilih $N=1$."],conclusion:"$a_n\\to c$."},
  {title:"Memilih Indeks Ambang",problem:"Buktikan $a_n=\\frac{1}{\\sqrt n}\\to0$.",solution:["Diberikan $\\varepsilon>0$. Syarat $|a_n|<\\varepsilon$ ekuivalen dengan $1/\\sqrt n<\\varepsilon$.","Inequality tersebut ekuivalen dengan $n>1/\\varepsilon^2$.","Dipilih $N\\in\\mathbb N$ dengan $N>1/\\varepsilon^2$. Untuk setiap $n\\ge N$, diperoleh $1/\\sqrt n\\le1/\\sqrt N<\\varepsilon$."],conclusion:"Dengan demikian, $1/\\sqrt n\\to0$."},
  {title:"Suku Awal Tidak Menentukan Konvergensi",problem:"Misalkan $a_1=10^6$ dan $a_n=1/n$ untuk $n\\ge2$. Tentukan limitnya.",solution:["Nilai $a_1$ hanya satu suku awal dan tidak memengaruhi perilaku ekor.","Untuk $n\\ge2$, barisan sama dengan $1/n$, yang konvergen ke $0$."],conclusion:"$a_n\\to0$ walaupun suku pertama sangat besar."}
 ],
 exercises:[
  {prompt:"Buktikan $1/n\\to0$ dengan definisi.",hint:"Pilih $N>1/\\varepsilon$.",answer:"Untuk $n\\ge N$, $|1/n|\\le1/N<\\varepsilon$."},
  {prompt:"Buktikan $(3n-2)/(n+4)\\to3$.",hint:"Sederhanakan selisih dengan $3$.",answer:"Selisih bernilai $14/(n+4)$; pilih $N>14/\\varepsilon$."},
  {prompt:"Apakah $(-1)^n$ konvergen?",hint:"Bandingkan subsekuens genap dan ganjil.",answer:"Tidak; suku genap bernilai $1$, suku ganjil bernilai $-1$."},
  {prompt:"Jika $a_n\\to L$ dan $a_n\\ge0$ untuk semua $n$, apa yang dapat dikatakan tentang $L$?",hint:"Gunakan teorema urutan atau kontradiksi.",answer:"$L\\ge0$."},
  {prompt:"Buktikan bahwa jika $a_n=0$ untuk semua $n$ yang cukup besar, maka $a_n\\to0$.",hint:"Gunakan definisi eventually.",answer:"Ambil $N$ setelah semua suku menjadi nol. Untuk setiap $n\\ge N$, $|a_n-0|=0<\\varepsilon$ untuk sebarang $\\varepsilon>0$."},
  {prompt:"Berikan contoh barisan terbatas yang tidak konvergen.",hint:"Gunakan dua nilai yang terus berganti.",answer:"$a_n=(-1)^n$ terbatas oleh $1$ tetapi tidak konvergen karena subsekuens genap dan ganjil mempunyai limit berbeda."}
 ],
 mistakes:["Mengganti “untuk setiap $\\varepsilon$” dengan satu nilai ε saja.","Membiarkan $N$ bergantung pada $n$; $N$ hanya boleh bergantung pada ε.","Menganggap beberapa suku awal yang jauh dari limit merusak konvergensi."],
 connections:["Definisi limit fungsi dapat dinyatakan melalui barisan.","Kontinuitas dapat diuji dengan barisan.","Barisan Cauchy memberi karakterisasi kelengkapan $\\mathbb R$."]
},

"teorema-limit-barisan":{
 intro:["Setelah definisi konvergensi dikuasai, teorema limit menyediakan kalkulus aljabar untuk limit tanpa mengulang pembuktian ε-N dari awal.","Semua aturan tetap mempunyai syarat; khusus hasil bagi memerlukan limit penyebut tidak nol."],
 formal:[
  T("Aljabar Limit","Jika $a_n\\to a$ dan $b_n\\to b$, maka $a_n+b_n\\to a+b$, $a_nb_n\\to ab$, dan untuk skalar $c$, $ca_n\\to ca$. Jika $b\\ne0$ dan $b_n\\ne0$ akhirnya, maka $a_n/b_n\\to a/b$."),
  T("Teorema Urutan","Jika $a_n\\le b_n$ akhirnya dan $a_n\\to a$, $b_n\\to b$, maka $a\\le b$.",[
    "Diandaikan $a>b$ dan dipilih $\\varepsilon=(a-b)/3$.",
    "Untuk $n$ cukup besar, $a_n>a-\\varepsilon$ dan $b_n<b+\\varepsilon$.",
    "Karena $a-\\varepsilon>b+\\varepsilon$, diperoleh $a_n>b_n$, bertentangan dengan urutan akhirnya."
  ]),
  T("Squeeze Theorem","Jika $a_n\\le b_n\\le c_n$ akhirnya dan $a_n,c_n\\to L$, maka $b_n\\to L$."),
  C("Limit Pangkat","Jika $a_n\\to a$, maka $a_n^k\\to a^k$ untuk setiap $k\\in\\mathbb N$.")
 ],
 examples:[
  {title:"Limit Rasional",problem:"Tentukan $\\lim_{n\\to\\infty}\\frac{3n^2+n}{2n^2-5}$.",solution:["Dibagi pembilang dan penyebut dengan $n^2$.","Diperoleh $\\frac{3+1/n}{2-5/n^2}$.","Karena $1/n\\to0$ dan $1/n^2\\to0$, teorema hasil bagi memberi limit $3/2$."],conclusion:"Limitnya $3/2$."},
  {title:"Squeeze",problem:"Tentukan limit $\\sin n/n$.",solution:["Berlaku $-1\\le\\sin n\\le1$.","Dibagi $n>0$: $-1/n\\le\\sin n/n\\le1/n$.","Kedua pembatas menuju $0$."],conclusion:"$\\sin n/n\\to0$."}
 ],
 exercises:[
  {prompt:"Jika $a_n\\to2$ dan $b_n\\to-1$, hitung limit $(a_n^2+3b_n)/(a_n-b_n)$.",hint:"Gunakan aljabar limit.",answer:"$(4-3)/(2+1)=1/3$."},
  {prompt:"Buktikan jika $a_n\\to a>0$, maka $a_n>0$ untuk semua $n$ cukup besar.",hint:"Pilih $\\varepsilon=a/2$.",answer:"Untuk $n$ besar, $|a_n-a|<a/2$, sehingga $a_n>a/2>0$."},
  {prompt:"Gunakan squeeze theorem untuk $n/(n^2+1)$.",hint:"$0\\le n/(n^2+1)\\le1/n$.",answer:"Limitnya $0$."}
 ],
 mistakes:["Menerapkan aturan hasil bagi saat limit penyebut nol.","Menggunakan operasi limit sebelum memastikan masing-masing limit ada.","Menganggap ketaksamaan perlu berlaku untuk semua $n$, padahal sering cukup eventually."],
 connections:["Aturan limit fungsi mempunyai bentuk paralel.","Teorema urutan dipakai pada integral dan turunan.","Squeeze theorem muncul kembali pada limit fungsi."]
},

"barisan-monoton":{
 intro:["Monotonisitas mengubah informasi urutan menjadi konvergensi jika digabungkan dengan keterbatasan. Inilah salah satu penggunaan pertama yang nyata dari completeness property.","Monotone Convergence Theorem tidak memberi rumus limit secara langsung, tetapi menjamin limit ada dan mengidentifikasinya sebagai supremum atau infimum range."],
 formal:[
  D("Monoton","$(a_n)$ meningkat jika $a_n\\le a_{n+1}$ untuk semua $n$, menurun jika $a_n\\ge a_{n+1}$."),
  T("Monotone Convergence Theorem","Barisan meningkat dan terbatas di atas konvergen ke supremum himpunan nilainya. Barisan menurun dan terbatas di bawah konvergen ke infimum.",[
    "Untuk kasus meningkat, letakkan $L=\\sup\\{a_n:n\\in\\mathbb N\\}$.",
    "Diberikan $\\varepsilon>0$. Karakterisasi supremum memberi $N$ dengan $L-\\varepsilon<a_N\\le L$.",
    "Monotonisitas memberi $a_N\\le a_n\\le L$ untuk $n\\ge N$.",
    "Dengan demikian, $0\\le L-a_n<\\varepsilon$ dan $a_n\\to L$."
  ]),
  C("Barisan Monoton Tak Terbatas","Jika $(a_n)$ meningkat dan tidak terbatas di atas, maka $a_n\\to+\\infty$.")
 ],
 examples:[
  {title:"Barisan Rekursif",problem:"Diberikan $a_1=1$ dan $a_{n+1}=\\sqrt{2+a_n}$. Tunjukkan konvergen dan tentukan limit.",solution:["Dibuktikan dengan induksi bahwa $1\\le a_n<2$.","Fungsi $x\\mapsto\\sqrt{2+x}$ meningkat; dari $a_2>a_1$ dan induksi diperoleh barisan meningkat.","MCT memberi konvergensi ke $L\\in[1,2]$.","Passing to the limit pada relasi rekursif memberi $L=\\sqrt{2+L}$, sehingga $L^2-L-2=0$. Karena $L>0$, diperoleh $L=2$."],conclusion:"Barisan konvergen ke $2$."}
 ],
 exercises:[
  {prompt:"Tunjukkan $a_n=1-1/n$ meningkat dan terbatas, lalu tentukan limit.",hint:"Bandingkan $a_{n+1}-a_n$.",answer:"Meningkat, terbatas di atas oleh $1$, dan limit $1$."},
  {prompt:"Jika barisan menurun dan terbatas di bawah, mengapa infimum range adalah limitnya?",hint:"Adaptasi bukti MCT dengan tanda dibalik.",answer:"Karakterisasi infimum memberi suku dalam jarak ε dari bawah; monotonisitas menjepit semua suku berikutnya."},
  {prompt:"Apakah monoton saja cukup untuk konvergensi real?",hint:"Pertimbangkan $a_n=n$.",answer:"Tidak; diperlukan keterbatasan yang sesuai."}
 ],
 mistakes:["Menganggap setiap barisan terbatas konvergen.","Menggunakan persamaan limit pada rekursi sebelum membuktikan limit ada.","Tidak memeriksa arah batas: meningkat memerlukan batas atas, menurun memerlukan batas bawah."],
 connections:["MCT merupakan konsekuensi langsung completeness.","Metode iterasi numerik sering dianalisis dengan monotonisitas dan boundedness.","Nested intervals menghasilkan barisan endpoint monoton."]
},

"subbarisan-dan-bolzano-weierstrass":{
 intro:["Subbarisan memilih sebagian suku tanpa mengubah urutan indeks. Konsep ini sangat kuat untuk menganalisis osilasi dan struktur barisan terbatas.","Bolzano–Weierstrass menyatakan keterbatasan di $\\mathbb R$ selalu menyimpan sedikit keteraturan: setidaknya satu subbarisan konvergen."],
 formal:[
  D("Subbarisan","Jika $n_1<n_2<\\cdots$ adalah indeks natural, $(a_{n_k})$ disebut subbarisan dari $(a_n)$."),
  T("Subbarisan Barisan Konvergen","Jika $a_n\\to L$, setiap subbarisan $a_{n_k}\\to L$.",[
    "Karena $n_k\\ge k$, jika $k\\ge N$ maka $n_k\\ge N$.",
    "Definisi konvergensi barisan asal langsung berlaku pada indeks $n_k$."
  ]),
  T("Bolzano–Weierstrass","Setiap barisan real yang terbatas memiliki subbarisan konvergen."),
  C("Uji Divergensi melalui Subbarisan","Jika suatu barisan memiliki dua subbarisan yang konvergen ke limit berbeda, barisan asal divergen.")
 ],
 examples:[
  {title:"Osilasi $(-1)^n$",problem:"Gunakan subbarisan untuk menunjukkan $(-1)^n$ divergen.",solution:["Subbarisan indeks genap $a_{2k}=1$ konvergen ke $1$.","Subbarisan indeks ganjil $a_{2k-1}=-1$ konvergen ke $-1$.","Jika barisan asal konvergen, semua subbarisan harus memiliki limit yang sama."],conclusion:"Karena dua limit berbeda, barisan asal divergen."}
 ],
 exercises:[
  {prompt:"Cari subbarisan konvergen dari $a_n=\\sin(n\\pi/2)$.",hint:"Periksa kelas indeks modulo $4$.",answer:"Misalnya $a_{4k}=0$ merupakan subbarisan konstan yang konvergen ke $0$."},
  {prompt:"Jika semua subbarisan konvergen mempunyai limit $L$, apakah barisan pasti konvergen ke $L$?",hint:"Tambahkan asumsi bounded lalu gunakan kontraposisi.",answer:"Untuk barisan bounded, ya: jika tidak konvergen ke $L$, dapat dipilih subbarisan yang tetap di luar suatu persekitaran $L$, lalu Bolzano–Weierstrass memberi subsubbarisan dengan limit berbeda."},
  {prompt:"Mengapa $n_k\\ge k$ selalu berlaku?",hint:"Indeks subbarisan strictly increasing dan natural.",answer:"Induksi: $n_1\\ge1$ dan $n_{k+1}\\ge n_k+1\\ge k+1$."}
 ],
 mistakes:["Mengambil indeks yang tidak meningkat.","Menganggap subbarisan boleh mengulang suku dengan indeks sama.","Menggunakan Bolzano–Weierstrass tanpa boundedness."],
 connections:["Cluster points didefinisikan lewat subbarisan.","Compactness sekuensial merupakan generalisasi ide ini.","Cauchy criterion dapat dibuktikan dengan bantuan subsequences dan completeness."]
},

"kriteria-cauchy":{
 intro:["Definisi Cauchy mengukur kedekatan suku-suku ekor satu sama lain tanpa terlebih dahulu mengetahui kandidat limit.","Di $\\mathbb R$, completeness menjamin barisan Cauchy selalu mempunyai limit real. Ini memberikan kriteria intrinsik untuk konvergensi."],
 formal:[
  D("Barisan Cauchy","$(a_n)$ Cauchy jika untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $m,n\\ge N$ mengakibatkan $|a_n-a_m|<\\varepsilon$."),
  T("Konvergen Mengakibatkan Cauchy","Setiap barisan konvergen merupakan Cauchy.",[
    "Jika $a_n\\to L$, dipilih $N$ sehingga $|a_n-L|<\\varepsilon/2$ untuk $n\\ge N$.",
    "Untuk $m,n\\ge N$, ketaksamaan segitiga memberi $|a_n-a_m|\\le|a_n-L|+|a_m-L|<\\varepsilon$."
  ]),
  T("Kriteria Cauchy di ℝ","Barisan real konvergen jika dan hanya jika Cauchy."),
  P("Barisan Cauchy Terbatas","Setiap barisan Cauchy terbatas.",[
    "Pilih $N$ sehingga $|a_n-a_N|<1$ untuk $n\\ge N$.",
    "Suku ekor berada dalam interval $(a_N-1,a_N+1)$; suku awal hanya hingga banyak."
  ])
 ],
 examples:[{title:"Deret Geometri melalui Cauchy",problem:"Tunjukkan jumlah parsial $s_n=1+r+\\cdots+r^n$ Cauchy untuk $|r|<1$.",solution:["Untuk $m>n$, $|s_m-s_n|\\le |r|^{n+1}(1+|r|+\\cdots)$.","Jumlah ekor dibatasi $|r|^{n+1}/(1-|r|)$.","Batas tersebut menuju nol saat $n\\to\\infty$."],conclusion:"$(s_n)$ Cauchy dan karenanya konvergen di $\\mathbb R$."}],
 exercises:[
  {prompt:"Tunjukkan $a_n=1/n$ Cauchy.",hint:"Gunakan $|1/n-1/m|\\le1/n+1/m$.",answer:"Untuk $m,n\\ge N$, selisih $<2/N$; pilih $N>2/\\varepsilon$."},
  {prompt:"Apakah $a_n=\\log n$ Cauchy?",hint:"Bandingkan $a_{2n}-a_n=\\log2$.",answer:"Tidak, karena terdapat pasangan indeks arbitrarily large dengan selisih tetap $\\log2$."},
  {prompt:"Mengapa kriteria Cauchy dapat gagal di $\\mathbb Q$?",hint:"Ambil aproksimasi rasional ke $\\sqrt2$.",answer:"Barisan rasional tersebut Cauchy tetapi limitnya tidak berada di $\\mathbb Q$."}
 ],
 mistakes:["Mengganti syarat dua indeks $m,n$ dengan hanya satu indeks.","Memakai kandidat limit dalam definisi Cauchy; kandidat tidak diperlukan.","Melupakan peran completeness pada implikasi Cauchy ⇒ konvergen."],
 connections:["Completeness ruang metrik didefinisikan melalui barisan Cauchy.","Konvergensi deret dapat diuji dengan kriteria Cauchy pada jumlah parsial.","Uniform convergence memiliki versi Cauchy seragam."]
},

"divergensi-tak-hingga":{
 intro:["Tidak semua divergensi bersifat sama. Barisan dapat divergen karena tumbuh tanpa batas ke $+\\infty$ atau $-\\infty$, atau karena berosilasi.","Istilah properly divergent membedakan perilaku terarah ke tak hingga dari divergensi osilatori."],
 formal:[
  D("Limit $+\\infty$","$a_n\\to+\\infty$ jika untuk setiap $M\\in\\mathbb R$ terdapat $N$ sehingga $n\\ge N$ mengakibatkan $a_n>M$."),
  D("Limit $-\\infty$","$a_n\\to-\\infty$ jika untuk setiap $M\\in\\mathbb R$ terdapat $N$ sehingga $n\\ge N$ mengakibatkan $a_n<M$."),
  P("Monoton Tak Terbatas","Barisan meningkat yang tak terbatas di atas menuju $+\\infty$; versi menurun analog menuju $-\\infty$."),
  P("Resiprok","Jika $a_n>0$ akhirnya dan $a_n\\to+\\infty$, maka $1/a_n\\to0$.")
 ],
 examples:[{title:"Polinomial",problem:"Tunjukkan $n^2-3n\\to+\\infty$.",solution:["Ditulis $n^2-3n=n(n-3)$.","Untuk $n\\ge6$, berlaku $n-3\\ge n/2$, sehingga $n^2-3n\\ge n^2/2$.","Diberikan $M$, pilih $N>\\sqrt{2M}$ dan $N\\ge6$."],conclusion:"Untuk $n\\ge N$, nilai barisan melebihi $M$."}],
 exercises:[
  {prompt:"Buktikan $\\sqrt n\\to+\\infty$.",hint:"Untuk batas $M$, minta $n>M^2$.",answer:"Pilih $N>M^2$."},
  {prompt:"Apakah $(-1)^n n$ properly divergent?",hint:"Periksa subbarisan genap dan ganjil.",answer:"Tidak; satu subbarisan menuju $+\\infty$, yang lain menuju $-\\infty$."},
  {prompt:"Jika $a_n\\to+\\infty$ dan $b_n\\ge a_n$ akhirnya, apa limit $b_n$?",hint:"Gunakan definisi langsung.",answer:"$b_n\\to+\\infty$."}
 ],
 mistakes:["Menulis $a_n\\to\\infty$ tanpa menyatakan arah bila konteks ambigu.","Menganggap barisan tak terbatas pasti menuju tak hingga.","Menggunakan aritmetika simbolik dengan $\\infty$ seolah-olah bilangan real biasa."],
 connections:["Limit tak hingga fungsi memakai definisi paralel.","Deret divergen dapat mempunyai jumlah parsial menuju $+\\infty$.","Asimtot dan pertumbuhan fungsi menggunakan konsep serupa."]
},

"pengantar-deret-tak-hingga":{
 intro:["Deret tak hingga $\\sum a_n$ didefinisikan melalui barisan jumlah parsial, bukan sebagai penjumlahan yang benar-benar selesai.","Dengan demikian, semua teori awal deret merupakan aplikasi teori barisan pada $s_n=\\sum_{k=1}^n a_k$."],
 notation:[{symbol:"$s_n=\\sum_{k=1}^n a_k$",meaning:"Jumlah parsial ke-$n$."},{symbol:"$\\sum_{n=1}^\\infty a_n=S$",meaning:"$s_n\\to S$."}],
 formal:[
  D("Konvergensi Deret","Deret $\\sum a_n$ konvergen ke $S$ jika barisan jumlah parsialnya $s_n$ konvergen ke $S$."),
  T("Uji Suku ke-$n$","Jika $\\sum a_n$ konvergen, maka $a_n\\to0$.",["Karena $a_n=s_n-s_{n-1}$ dan $s_n,s_{n-1}\\to S$, aljabar limit memberi $a_n\\to S-S=0$."]),
  T("Deret Geometri","Untuk $|r|<1$, $\\sum_{n=0}^\\infty r^n=1/(1-r)$. Untuk $|r|\\ge1$, deret tidak konvergen."),
  T("Kriteria Cauchy untuk Deret","$\\sum a_n$ konvergen jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $m>n\\ge N$ memberi $|a_{n+1}+\\cdots+a_m|<\\varepsilon$.")
 ],
 examples:[{title:"Deret Teleskopik",problem:"Hitung $\\sum_{n=1}^\\infty \\frac1{n(n+1)}$.",solution:["Gunakan pecahan parsial $1/[n(n+1)]=1/n-1/(n+1)$.","Jumlah parsial $s_N=1-1/(N+1)$.","Ambil limit $N\\to\\infty$."],conclusion:"Jumlah deret adalah $1$."}],
 exercises:[
  {prompt:"Apakah $\\sum_{n=1}^\\infty 1$ konvergen?",hint:"Periksa jumlah parsial.",answer:"Tidak; $s_n=n\\to+\\infty$."},
  {prompt:"Uji $\\sum (-1)^n$ dengan uji suku ke-$n$.",hint:"Apakah sukunya menuju nol?",answer:"Tidak; $(-1)^n$ tidak mempunyai limit nol, sehingga deret divergen."},
  {prompt:"Hitung $\\sum_{n=0}^\\infty (1/3)^n$.",hint:"Deret geometri.",answer:"$1/(1-1/3)=3/2$."}
 ],
 mistakes:["Menganggap $a_n\\to0$ cukup untuk konvergensi deret.","Mengabaikan definisi melalui jumlah parsial.","Menggunakan formula geometri di luar $|r|<1$."],
 connections:["Chapter 9 memperluas uji konvergensi.","Power series dipahami sebagai deret dengan suku bergantung pada $x$.","Integral dan deret bertemu pada pertukaran limit."]
},

"limit-fungsi":{
 intro:["Limit fungsi mengukur perilaku $f(x)$ ketika $x$ mendekati titik $a$, tanpa mensyaratkan nilai $f(a)$ ada atau sama dengan limit.","Definisi ε-δ merupakan analog kontinu dari definisi ε-N pada barisan."],
 notation:[{symbol:"$\\lim_{x\\to a}f(x)=L$",meaning:"Nilai fungsi mendekati $L$ ketika $x$ mendekati $a$."}],
 formal:[
  D("Limit Fungsi","$\\lim_{x\\to a}f(x)=L$ jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $0<|x-a|<\\delta$ mengakibatkan $|f(x)-L|<\\varepsilon$."),
  T("Keunikan Limit Fungsi","Jika limit $f$ di $a$ ada, nilainya unik."),
  T("Kriteria Sekuensial","$\\lim_{x\\to a}f(x)=L$ jika dan hanya jika untuk setiap barisan $x_n\\to a$ dengan $x_n\\ne a$, berlaku $f(x_n)\\to L$."),
  P("Limit Linear","Untuk $f(x)=mx+b$, $\\lim_{x\\to a}f(x)=ma+b$.")
 ],
 examples:[{title:"Bukti ε-δ Fungsi Kuadrat",problem:"Buktikan $\\lim_{x\\to2}x^2=4$.",solution:["$|x^2-4|=|x-2||x+2|$.","Batasi terlebih dahulu $|x-2|<1$, sehingga $1<x<3$ dan $|x+2|<5$.","Cukup dipilih $\\delta=\\min(1,\\varepsilon/5)$."],conclusion:"Jika $0<|x-2|<\\delta$, maka $|x^2-4|<\\varepsilon$."}],
 exercises:[
  {prompt:"Buktikan $\\lim_{x\\to3}(2x-1)=5$.",hint:"$|(2x-1)-5|=2|x-3|$.",answer:"Pilih $\\delta=\\varepsilon/2$."},
  {prompt:"Gunakan kriteria sekuensial untuk menunjukkan $\\lim_{x\\to0}\\sin(1/x)$ tidak ada.",hint:"Pilih dua barisan menuju nol dengan nilai sinus berbeda.",answer:"Misalnya $x_n=1/(\\pi/2+2\\pi n)$ memberi nilai $1$, sedangkan $y_n=1/(3\\pi/2+2\\pi n)$ memberi $-1$."},
  {prompt:"Mengapa syarat $0<|x-a|$ memakai punctured neighborhood?",hint:"Nilai di titik $a$ tidak relevan untuk limit.",answer:"Limit hanya memeriksa nilai di sekitar titik, bukan nilai tepat di titik."}
 ],
 mistakes:["Memasukkan syarat $x=a$ dalam definisi limit.","Memilih δ yang masih bergantung pada $x$.","Tidak mengontrol faktor tambahan seperti $|x+2|$ pada bukti polinomial."],
 connections:["Kontinuitas menambahkan syarat $L=f(a)$.","Turunan adalah limit difference quotient.","Kriteria sekuensial menghubungkan teori fungsi dan barisan."]
},

"teorema-limit-fungsi":{
 intro:["Teorema limit fungsi mempunyai bentuk paralel dengan teorema limit barisan. Struktur aljabarnya sama karena pembuktian akhirnya mengandalkan estimasi nilai mutlak.","Aturan ini mempercepat perhitungan limit, tetapi syarat eksistensi dan penyebut tidak nol tetap harus diperhatikan."],
 formal:[
  T("Aljabar Limit Fungsi","Jika $f\\to L$ dan $g\\to M$ saat $x\\to a$, maka $f+g\\to L+M$, $fg\\to LM$, dan bila $M\\ne0$, $f/g\\to L/M$."),
  T("Squeeze Theorem untuk Fungsi","Jika $f(x)\\le g(x)\\le h(x)$ di punctured neighborhood $a$ dan $f,h\\to L$, maka $g\\to L$."),
  T("Teorema Urutan","Jika $f(x)\\le g(x)$ dekat $a$ dan kedua limit ada, maka $\\lim f\\le\\lim g$.")
 ],
 examples:[{title:"Limit Trigonometri",problem:"Dengan fakta $|\\sin x|\\le|x|$, tunjukkan $\\lim_{x\\to0}x\\sin(1/x)=0$.",solution:["$|x\\sin(1/x)|\\le|x|$.","Diperoleh $-|x|\\le x\\sin(1/x)\\le|x|$.","Kedua pembatas menuju nol."],conclusion:"Squeeze theorem memberi limit $0$."}],
 exercises:[
  {prompt:"Hitung $\\lim_{x\\to1}(x^3+2x)/(x+3)$.",hint:"Penyebut tidak nol di $1$.",answer:"$3/4$."},
  {prompt:"Buktikan jika $f(x)\\ge0$ dekat $a$ dan limit ada, maka limitnya nonnegatif.",hint:"Gunakan teorema urutan dengan fungsi nol.",answer:"$0\\le\\lim f$."},
  {prompt:"Berikan contoh dua fungsi dengan limit masing-masing tidak ada tetapi limit jumlah ada.",hint:"Gunakan pasangan osilasi yang saling meniadakan.",answer:"$f(x)=\\sin(1/x)$, $g(x)=-\\sin(1/x)$ di sekitar $0$."}
 ],
 mistakes:["Membalik implikasi: limit jumlah ada tidak berarti limit masing-masing ada.","Menerapkan hasil bagi dengan limit penyebut nol.","Menganggap squeeze perlu berlaku di titik limit itu sendiri."],
 connections:["Kontinuitas kombinasi fungsi memakai teorema ini.","Turunan aturan produk/hasil bagi dibuktikan dengan aljabar limit.","Integral dan uniform convergence juga menggunakan estimasi squeeze."]
},

"perluasan-konsep-limit":{
 intro:["Konsep limit diperluas ke pendekatan dari satu sisi, nilai tak hingga, dan titik tak hingga. Definisi tetap mempertahankan pola kuantor yang sama, hanya jenis persekitaran yang berubah.","Bahasa extended real line memudahkan notasi, tetapi $+\\infty$ dan $-\\infty$ bukan bilangan real biasa."],
 formal:[
  D("Limit Satu Sisi","$\\lim_{x\\to a^+}f(x)=L$ memakai $0<x-a<\\delta$; limit kiri memakai $0<a-x<\\delta$."),
  D("Limit Tak Hingga","$f(x)\\to+\\infty$ saat $x\\to a$ jika untuk setiap $M$ terdapat $\\delta>0$ sehingga $0<|x-a|<\\delta$ memberi $f(x)>M$."),
  D("Limit di Tak Hingga","$\\lim_{x\\to\\infty}f(x)=L$ jika untuk setiap $\\varepsilon>0$ terdapat $A$ sehingga $x>A$ memberi $|f(x)-L|<\\varepsilon$."),
  T("Limit Dua Sisi","Limit $\\lim_{x\\to a}f(x)=L$ ada jika dan hanya jika limit kiri dan kanan ada dan keduanya sama dengan $L$.")
 ],
 examples:[{title:"Asimtot Vertikal",problem:"Tentukan perilaku $1/x$ saat $x\\to0^+$ dan $x\\to0^-$.",solution:["Untuk $x>0$ kecil, $1/x$ melebihi setiap batas positif: limit kanan $+\\infty$.","Untuk $x<0$ dengan nilai mutlak kecil, $1/x$ lebih kecil dari setiap batas negatif: limit kiri $-\\infty$."],conclusion:"Limit dua sisi di nol tidak ada."}],
 exercises:[
  {prompt:"Hitung $\\lim_{x\\to\\infty}(2x+1)/(x-3)$.",hint:"Bagi dengan $x$.",answer:"$2$."},
  {prompt:"Tentukan limit satu sisi fungsi signum di nol.",hint:"Nilai konstan di masing-masing sisi.",answer:"Limit kiri $-1$, limit kanan $1$."},
  {prompt:"Apakah $\\infty-\\infty$ mempunyai nilai tertentu?",hint:"Itu bentuk tak tentu, bukan operasi bilangan.",answer:"Tidak; hasil limit bergantung pada laju pertumbuhan masing-masing fungsi."}
 ],
 mistakes:["Memperlakukan infinity sebagai bilangan real.","Menyimpulkan limit dua sisi dari hanya satu limit sisi.","Tidak menuliskan arah pada asimtot vertikal yang memiliki tanda berbeda."],
 connections:["L'Hospital menangani beberapa bentuk tak tentu.","Asimtot pada kalkulus memakai limit diperluas.","Integral tak wajar menggunakan limit di endpoint/tak hingga."]
},

"fungsi-kontinu":{
 intro:["Kontinuitas di titik menyatukan tiga informasi: $f(a)$ terdefinisi, limit $f(x)$ saat $x\\to a$ ada, dan limit tersebut sama dengan $f(a)$.","Definisi ε-δ kontinuitas dapat ditulis langsung sebagai kontrol keluaran dari kontrol masukan."],
 formal:[
  D("Kontinu di Titik","$f$ kontinu di $a$ jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $|x-a|<\\delta$ mengakibatkan $|f(x)-f(a)|<\\varepsilon$."),
  T("Kriteria Sekuensial Kontinuitas","$f$ kontinu di $a$ jika dan hanya jika setiap $x_n\\to a$ memberi $f(x_n)\\to f(a)$."),
  P("Kontinuitas Polinomial","Setiap polinomial kontinu pada $\\mathbb R$."),
  P("Kontinuitas Nilai Mutlak","Fungsi $x\\mapsto|x|$ kontinu pada $\\mathbb R$.")
 ],
 examples:[{title:"Diskontinuitas Removable",problem:"Diberikan $f(x)=(x^2-1)/(x-1)$ untuk $x\\ne1$ dan $f(1)=0$. Apakah kontinu di $1$?",solution:["Untuk $x\\ne1$, $f(x)=x+1$.","Limit saat $x\\to1$ adalah $2$.","Nilai $f(1)=0$ tidak sama dengan limit."],conclusion:"Fungsi diskontinu di $1$; diskontinuitas dapat diperbaiki dengan menetapkan $f(1)=2$."}],
 exercises:[
  {prompt:"Buktikan fungsi konstan kontinu.",hint:"Selisih nilai fungsi selalu nol.",answer:"Untuk setiap ε, ambil δ sebarang; $|c-c|=0<ε$."},
  {prompt:"Periksa kontinuitas $f(x)=1/x$.",hint:"Domain mengecualikan nol.",answer:"Kontinu pada setiap $a\\ne0$, tidak didefinisikan di nol."},
  {prompt:"Gunakan kriteria sekuensial untuk menunjukkan fungsi Dirichlet diskontinu di setiap titik.",hint:"Ambil barisan rasional dan irasional menuju titik yang sama.",answer:"Nilai fungsi pada dua barisan mempunyai limit berbeda."}
 ],
 mistakes:["Menganggap grafik “tidak putus” cukup sebagai definisi formal.","Melupakan $f(a)$ harus terdefinisi.","Menggunakan δ yang tidak bergantung pada titik untuk kontinuitas biasa; itu merupakan tuntutan kontinuitas seragam."],
 connections:["Uniform continuity memperkuat definisi dengan δ global.","IVT dan EVT memerlukan kontinuitas pada interval.","Kontinuitas topologis dapat dikarakterisasi lewat pracitra himpunan terbuka."]
},

"kombinasi-fungsi-kontinu":{
 intro:["Kelas fungsi kontinu stabil terhadap operasi aljabar dan komposisi. Hasil ini memungkinkan pembuktian kontinuitas fungsi kompleks secara modular.","Syarat denominator tak nol tetap penting untuk hasil bagi."],
 formal:[
  T("Aljabar Kontinuitas","Jika $f,g$ kontinu di $a$, maka $f+g$, $fg$, dan $cf$ kontinu di $a$. Jika $g(a)\\ne0$, $f/g$ kontinu di $a$."),
  T("Komposisi Kontinu","Jika $g$ kontinu di $a$ dan $f$ kontinu di $g(a)$, maka $f\\circ g$ kontinu di $a$."),
  C("Fungsi Rasional","Fungsi rasional kontinu pada setiap titik domainnya."),
  C("Akar dari Fungsi Positif","Jika $f$ kontinu dan $f(a)>0$, maka $\\sqrt{f(x)}$ kontinu di sekitar $a$.")
 ],
 examples:[{title:"Komposisi",problem:"Tunjukkan $h(x)=\\sqrt{1+x^2}$ kontinu pada $\\mathbb R$.",solution:["$x\\mapsto x^2$ kontinu.","$x\\mapsto1+x^2$ kontinu dan selalu positif.","Fungsi akar kontinu pada $(0,\\infty)$; komposisi kontinu."],conclusion:"$h$ kontinu pada seluruh $\\mathbb R$."}],
 exercises:[
  {prompt:"Tentukan domain kontinuitas $(x+1)/(x^2-4)$.",hint:"Cari nol penyebut.",answer:"Kontinu pada $\\mathbb R\\setminus\\{-2,2\\}$."},
  {prompt:"Jika $f$ kontinu dan $f(a)\\ne0$, buktikan $1/f$ kontinu di $a$.",hint:"Gunakan teorema hasil bagi dengan fungsi konstan $1$.",answer:"Langsung dari aljabar kontinuitas."},
  {prompt:"Apakah maksimum dua fungsi kontinu selalu kontinu?",hint:"Gunakan $\\max(f,g)=(f+g+|f-g|)/2$.",answer:"Ya."}
 ],
 mistakes:["Mengabaikan domain setelah operasi aljabar.","Menerapkan komposisi tanpa memeriksa titik $g(a)$ berada di domain kontinu $f$.","Menganggap invers fungsi selalu kontinu tanpa syarat tambahan."],
 connections:["Fungsi elementer dibangun dari operasi kontinu.","Kontinuitas inverse dibahas pada fungsi monoton.","Analisis kompleks memakai hasil analog untuk fungsi kompleks."]
},

"kontinuitas-pada-interval":{
 intro:["Kontinuitas pada interval tertutup menghasilkan hasil global yang jauh lebih kuat daripada kontinuitas titik: fungsi mencapai ekstrem dan mengambil semua nilai di antaranya.","Dua teorema utama adalah Intermediate Value Theorem dan Extreme Value Theorem."],
 formal:[
  T("Intermediate Value Theorem","Jika $f$ kontinu pada $[a,b]$ dan $y$ berada di antara $f(a)$ dan $f(b)$, terdapat $c\\in[a,b]$ dengan $f(c)=y$."),
  C("Teorema Lokasi Akar","Jika $f$ kontinu pada $[a,b]$ dan $f(a)f(b)<0$, terdapat $c\\in(a,b)$ dengan $f(c)=0$."),
  T("Extreme Value Theorem","Jika $f$ kontinu pada $[a,b]$, terdapat $x_m,x_M\\in[a,b]$ sehingga $f(x_m)\\le f(x)\\le f(x_M)$ untuk semua $x\\in[a,b]$."),
  P("Citra Interval","Citra interval oleh fungsi kontinu merupakan interval.")
 ],
 examples:[{title:"Eksistensi Akar",problem:"Tunjukkan $x^3+x-1=0$ mempunyai akar di $(0,1)$.",solution:["Polinomial kontinu pada $[0,1]$.","$f(0)=-1$ dan $f(1)=1$.","Karena tanda berbeda, IVT memberi $c\\in(0,1)$ dengan $f(c)=0$."],conclusion:"Keberadaan akar diperoleh tanpa harus menghitung bentuk eksaknya."}],
 exercises:[
  {prompt:"Apakah EVT tetap benar pada interval terbuka $(0,1)$?",hint:"Pertimbangkan $f(x)=x$.",answer:"Tidak; supremum $1$ tidak dicapai."},
  {prompt:"Buktikan fungsi kontinu dari interval ke $\\mathbb R$ tidak dapat “melompati” nilai.",hint:"Gunakan IVT.",answer:"Setiap nilai di antara dua nilai fungsi harus dicapai."},
  {prompt:"Tunjukkan $\\cos x=x$ mempunyai solusi di $[0,1]$.",hint:"Gunakan $f(x)=\\cos x-x$.",answer:"$f(0)=1>0$, $f(1)=\\cos1-1<0$; IVT memberi akar."}
 ],
 mistakes:["Menggunakan IVT tanpa kontinuitas pada seluruh interval.","Menggunakan EVT pada domain yang tidak kompak.","Menganggap IVT memberi keunikan akar; ia hanya memberi keberadaan."],
 connections:["Bisection method merupakan implementasi IVT.","EVT merupakan konsekuensi compactness.","Connectedness interval menjelaskan IVT secara topologis."]
},

"kontinuitas-seragam":{
 intro:["Kontinuitas biasa mengizinkan δ bergantung pada titik. Kontinuitas seragam meminta satu δ bekerja serentak di seluruh domain.","Perbedaan ini krusial ketika domain tidak kompak atau ketika limit/integasi ingin dipertukarkan."],
 formal:[
  D("Kontinuitas Seragam","$f:A\\to\\mathbb R$ kontinu seragam jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga untuk semua $x,y\\in A$, $|x-y|<\\delta$ mengakibatkan $|f(x)-f(y)|<\\varepsilon$."),
  T("Heine–Cantor","Setiap fungsi kontinu pada interval tertutup terbatas $[a,b]$ kontinu seragam."),
  P("Lipschitz Mengakibatkan Kontinu Seragam","Jika $|f(x)-f(y)|\\le K|x-y|$, maka $f$ kontinu seragam."),
  P("Kontinu Seragam Mempertahankan Cauchy","Jika $x_n$ Cauchy dan $f$ kontinu seragam, maka $f(x_n)$ Cauchy.")
 ],
 examples:[{title:"$x^2$ pada Domain Berbeda",problem:"Bandingkan kontinuitas seragam $f(x)=x^2$ pada $[0,1]$ dan $\\mathbb R$.",solution:["Pada $[0,1]$, Heine–Cantor memberi kontinuitas seragam.","Pada $\\mathbb R$, ambil $x_n=n$ dan $y_n=n+1/n$. Jarak $|x_n-y_n|=1/n\\to0$.","Namun $|x_n^2-y_n^2|=2+1/n^2$ tidak menuju nol."],conclusion:"$x^2$ tidak kontinu seragam pada $\\mathbb R$."}],
 exercises:[
  {prompt:"Tunjukkan $f(x)=3x+1$ kontinu seragam pada $\\mathbb R$.",hint:"Fungsi Lipschitz dengan konstanta $3$.",answer:"Pilih $\\delta=\\varepsilon/3$."},
  {prompt:"Apakah $1/x$ kontinu seragam pada $(0,1)$?",hint:"Ambil titik dekat nol.",answer:"Tidak; misalnya $x_n=1/n$, $y_n=1/(n+1)$ memiliki jarak menuju nol tetapi nilai fungsi berbeda sebesar $1$."},
  {prompt:"Mengapa compactness membantu menghasilkan δ global?",hint:"Cover lokal dari kontinuitas memiliki subcover hingga.",answer:"Minimum dari hingga banyak radius lokal tetap positif dan dapat digunakan secara global setelah argumentasi yang tepat."}
 ],
 mistakes:["Mengizinkan δ bergantung pada $x$ dalam definisi uniform.","Menganggap semua fungsi kontinu seragam.","Menggunakan Heine–Cantor pada interval terbuka/tak terbatas."],
 connections:["Uniform convergence dan uniform continuity sering berinteraksi.","Pertukaran limit dengan integral lebih mudah di bawah uniform convergence.","Compactness mengubah informasi lokal menjadi global."]
},

"kontinuitas-dan-gauge":{
 intro:["Gauge memberi setiap titik $x$ suatu radius positif $\\delta(x)$. Konsep ini memungkinkan kontrol lokal yang berubah-ubah dari titik ke titik, tetapi masih dapat digabungkan melalui compactness.","Ide gauge juga menjadi dasar generalized Riemann integral."],
 formal:[
  D("Gauge","Gauge pada $[a,b]$ adalah fungsi positif $\\delta:[a,b]\\to(0,\\infty)$."),
  D("Gauge Neighborhood","Interval lokal di $x$ dapat ditulis $(x-\\delta(x),x+\\delta(x))$."),
  T("Finite Gauge Cover pada Interval Kompak","Keluarga semua gauge neighborhoods menutupi $[a,b]$ dan mempunyai subcover hingga."),
  N("Peran Gauge","Berbeda dari uniform radius, gauge dapat sangat kecil di titik yang memerlukan kontrol lebih ketat dan lebih besar di titik yang stabil.")
 ],
 examples:[{title:"Gauge dari Kontinuitas",problem:"Untuk fungsi kontinu $f$ dan ε tetap, jelaskan bagaimana membuat gauge yang menjamin $|f(x)-f(y)|<ε$ jika $y$ cukup dekat $x$.",solution:["Untuk setiap $x$, kontinuitas memberi radius $\\delta_x>0$.","Definisikan gauge $\\delta(x)=\\delta_x$.","Gauge tersebut menyimpan informasi lokal setiap titik."],conclusion:"Compactness kemudian dapat mengekstrak kontrol global dari data lokal."}],
 exercises:[
  {prompt:"Apakah gauge harus konstan?",hint:"Definisinya hanya mensyaratkan positif.",answer:"Tidak."},
  {prompt:"Berikan contoh gauge pada $[0,1]$ yang mengecil dekat nol.",hint:"Gunakan fungsi positif seperti $(x+1)/10$ atau $\\min(0.1,x+0.01)$.",answer:"Contoh $\\delta(x)=(x+0.01)/10$."},
  {prompt:"Apa hubungan gauge dan generalized Riemann integral?",hint:"Partisi bertanda diminta cukup halus relatif terhadap radius lokal.",answer:"Gauge menentukan ukuran subinterval yang diizinkan di sekitar masing-masing tag."}
 ],
 mistakes:["Menganggap gauge adalah satu bilangan δ.","Membolehkan nilai gauge nol.","Menyamakan gauge continuity dengan uniform continuity tanpa argumentasi compactness."],
 connections:["Generalized Riemann/Henstock–Kurzweil integral.","Lebesgue number lemma secara konseptual terkait kontrol cover.","Compactness melalui subcover hingga."]
},

"fungsi-monoton-dan-invers":{
 intro:["Monotonisitas memberi kontrol global terhadap fungsi dan memungkinkan keberadaan invers pada range ketika monoton ketat.","Kontinuitas fungsi monoton mempunyai struktur diskontinuitas yang sangat terbatas: diskontinuitasnya berupa lompatan."],
 formal:[
  D("Monoton Meningkat","$f$ meningkat pada interval jika $x<y$ mengakibatkan $f(x)\\le f(y)$. Monoton ketat memakai tanda $<$."),
  T("Invers Fungsi Monoton Ketat","Jika $f$ kontinu dan monoton ketat pada interval $I$, maka $f$ bijektif dari $I$ ke $f(I)$ dan $f^{-1}$ kontinu serta monoton dengan arah yang sesuai."),
  P("Limit Sisi Fungsi Monoton","Fungsi monoton mempunyai limit kiri dan kanan pada setiap titik interior domain interval."),
  N("Diskontinuitas Monoton","Jika terjadi diskontinuitas, bentuknya adalah jump discontinuity; osilasi liar tidak mungkin.")
 ],
 examples:[{title:"Invers Eksponensial",problem:"Mengapa $e^x$ mempunyai invers kontinu pada $(0,\\infty)$?",solution:["$e^x$ kontinu dan strictly increasing pada $\\mathbb R$.","Range-nya $(0,\\infty)$.","Teorema invers fungsi monoton memberi invers kontinu."],conclusion:"Invers tersebut adalah $\\log x$."}],
 exercises:[
  {prompt:"Tunjukkan $f(x)=x^3$ memiliki invers kontinu.",hint:"Kontinu dan strictly increasing.",answer:"Range $\\mathbb R$ dan invers $x^{1/3}$ kontinu."},
  {prompt:"Berikan contoh fungsi monoton yang diskontinu.",hint:"Gunakan fungsi step.",answer:"Misalnya $f(x)=0$ untuk $x<0$ dan $f(x)=1$ untuk $x\\ge0$."},
  {prompt:"Jika fungsi strictly decreasing, bagaimana monotonisitas inversnya?",hint:"Urutan terbalik dipertahankan oleh invers.",answer:"Invers juga strictly decreasing."}
 ],
 mistakes:["Menganggap monoton nonketat otomatis injektif.","Mengabaikan range saat mendefinisikan invers.","Menganggap semua fungsi monoton kontinu."],
 connections:["Inverse Function Theorem diferensial memerlukan syarat turunan nonzero.","Logaritma merupakan invers eksponensial.","Quantile function dalam probabilitas terkait invers monoton."]
},

"turunan":{
 intro:["Turunan adalah limit laju perubahan rata-rata ketika dua titik digabungkan. Karena limitnya dua sisi, diferensiabilitas real sudah lebih kuat daripada sekadar adanya kemiringan satu sisi.","Diferensiabilitas mengakibatkan kontinuitas, tetapi kebalikannya tidak benar."],
 notation:[{symbol:"$f'(a)$",meaning:"$\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$ jika limit ada."}],
 formal:[
  D("Turunan","$f$ terdiferensial di $a$ jika limit $f'(a)=\\lim_{h\\to0}[f(a+h)-f(a)]/h$ ada dan hingga."),
  T("Diferensiabel Mengakibatkan Kontinu","Jika $f'(a)$ ada, maka $f$ kontinu di $a$.",["Ditulis $f(a+h)-f(a)=h\\cdot\\frac{f(a+h)-f(a)}h$.","Saat $h\\to0$, faktor pertama menuju nol dan quotient menuju $f'(a)$.","Hasil kali menuju nol, sehingga $f(a+h)\\to f(a)$."]),
  T("Aturan Produk","$(fg)'=f'g+fg'$ pada titik tempat keduanya terdiferensial."),
  T("Chain Rule","Jika $g$ terdiferensial di $a$ dan $f$ terdiferensial di $g(a)$, maka $(f\\circ g)'(a)=f'(g(a))g'(a)$."),
  T("Turunan Invers","Jika $f$ bijektif lokal, $f'(a)\\ne0$, dan invers memenuhi syarat regularitas, $(f^{-1})'(f(a))=1/f'(a)$.")
 ],
 examples:[{title:"Turunan dari Definisi",problem:"Hitung turunan $f(x)=x^2$ di $a$ dari definisi.",solution:["Difference quotient $[(a+h)^2-a^2]/h=2a+h$.","Ambil limit $h\\to0$.","Diperoleh $f'(a)=2a$."],conclusion:"Turunan fungsi kuadrat adalah $2x$."}],
 exercises:[
  {prompt:"Gunakan definisi untuk turunan $f(x)=3x+1$.",hint:"Difference quotient konstan.",answer:"$f'(a)=3$."},
  {prompt:"Apakah $|x|$ terdiferensial di $0$?",hint:"Bandingkan quotient dari kiri dan kanan.",answer:"Tidak; turunan kanan $1$, kiri $-1$."},
  {prompt:"Buktikan turunan fungsi konstan nol.",hint:"Pembilang difference quotient selalu nol.",answer:"Limit quotient adalah $0$."}
 ],
 mistakes:["Menganggap kontinu ⇒ diferensiabel.","Menghilangkan syarat limit dua sisi.","Menggunakan aturan turunan sebelum memastikan fungsi terdefinisi di persekitaran titik."],
 connections:["MVT menghubungkan turunan lokal dengan perubahan global.","Taylor memperluas aproksimasi linear menjadi polinomial.","Analisis kompleks memakai definisi turunan yang serupa tetapi jauh lebih ketat."]
},

"teorema-nilai-rata-rata":{
 intro:["Mean Value Theorem menjembatani turunan lokal dengan perubahan total fungsi pada interval. Banyak teorema monotonicity, uniqueness, dan estimasi dibuktikan darinya.","Rolle's theorem merupakan kasus khusus ketika nilai endpoint sama."],
 formal:[
  T("Rolle","Jika $f$ kontinu pada $[a,b]$, terdiferensial pada $(a,b)$, dan $f(a)=f(b)$, terdapat $c\\in(a,b)$ dengan $f'(c)=0$."),
  T("Mean Value Theorem","Jika $f$ kontinu pada $[a,b]$ dan terdiferensial pada $(a,b)$, terdapat $c\\in(a,b)$ sehingga $f'(c)=[f(b)-f(a)]/(b-a)$."),
  C("Turunan Nol","Jika $f'(x)=0$ pada interval, $f$ konstan pada interval tersebut.",["Untuk $x<y$, MVT memberi $f(y)-f(x)=f'(c)(y-x)=0$."]),
  C("Tanda Turunan dan Monotonisitas","Jika $f'(x)>0$ pada interval, $f$ strictly increasing.")
 ],
 examples:[{title:"Estimasi Akar",problem:"Gunakan MVT untuk memperoleh $|\\sqrt x-\\sqrt y|\\le |x-y|/(2\\sqrt m)$ jika $x,y\\ge m>0$.",solution:["Terapkan MVT pada $f(t)=\\sqrt t$ di interval antara $x$ dan $y$.","Ada $c$ di antaranya dengan $|\\sqrt x-\\sqrt y|=|x-y|/(2\\sqrt c)$.","Karena $c\\ge m$, penyebut paling sedikit $2\\sqrt m$."],conclusion:"Diperoleh estimasi Lipschitz lokal pada $[m,\\infty)$."}],
 exercises:[
  {prompt:"Buktikan $|\\sin x-\\sin y|\\le|x-y|$.",hint:"Turunan sinus bernilai cosinus dengan modulus ≤1.",answer:"MVT memberi selisih $=\\cos c(x-y)$."},
  {prompt:"Jika $f'(x)>0$, buktikan $f$ injektif.",hint:"Strictly increasing.",answer:"MVT memberi $f(y)>f(x)$ untuk $y>x$."},
  {prompt:"Tunjukkan persamaan $x^3+x=1$ memiliki paling banyak satu akar.",hint:"Turunan $3x^2+1>0$.",answer:"Fungsi strictly increasing, sehingga tidak dapat mengambil nilai yang sama pada dua titik."}
 ],
 mistakes:["Melupakan kontinuitas endpoint atau diferensiabilitas interior.","Mengira titik $c$ dapat dipilih bebas.","Menerapkan MVT pada interval yang melintasi titik nondiferensiabel."],
 connections:["L'Hospital memakai Cauchy Mean Value Theorem.","Estimasi error dan Lipschitz berasal dari bounded derivative.","Taylor theorem memperluas ide MVT."]
},

"aturan-lhospital":{
 intro:["Aturan L'Hospital mengevaluasi bentuk tak tentu tertentu dengan membandingkan turunan pembilang dan penyebut. Ia bukan aturan algebra untuk semua quotient limit.","Syarat bentuk $0/0$ atau $\\infty/\\infty$ dan syarat regularitas harus diperiksa lebih dahulu."],
 formal:[
  T("L'Hospital Bentuk $0/0$","Secara ringkas: jika $f,g\\to0$, $g'\\ne0$ dekat titik, dan $f'/g'\\to L$ dengan hipotesis regularitas yang sesuai, maka $f/g\\to L$."),
  T("L'Hospital Bentuk $\\infty/\\infty$","Versi analog berlaku ketika $|f|,|g|\\to\\infty$ di bawah syarat yang sesuai."),
  N("Bentuk Tak Tentu Lain","Bentuk $0\\cdot\\infty$, $\\infty-\\infty$, $1^\\infty$, $0^0$, dan $\\infty^0$ perlu diubah dahulu menjadi quotient atau menggunakan logaritma.")
 ],
 examples:[{title:"Limit Eksponensial",problem:"Hitung $\\lim_{x\\to0}(e^x-1)/x$ dengan L'Hospital.",solution:["Pembilang dan penyebut menuju $0$.","Turunan pembilang $e^x$, turunan penyebut $1$.","Limit quotient turunan adalah $1$."],conclusion:"Limitnya $1$."}],
 exercises:[
  {prompt:"Hitung $\\lim_{x\\to0}\\sin x/x$ dengan L'Hospital.",hint:"Turunkan pembilang dan penyebut.",answer:"$1$."},
  {prompt:"Mengapa $\\lim_{x\\to0}(x+1)/x$ tidak langsung bentuk $0/0$?",hint:"Pembilang menuju $1$.",answer:"Bukan bentuk tak tentu yang memenuhi hipotesis L'Hospital."},
  {prompt:"Ubah $x\\log x$ saat $x\\to0^+$ menjadi quotient.",hint:"Tulis $\\log x/(1/x)$.",answer:"L'Hospital memberi limit $0$."}
 ],
 mistakes:["Menggunakan aturan pada bentuk yang bukan tak tentu.","Menganggap jika quotient turunan sulit maka quotient awal tidak memiliki limit.","Mengulang L'Hospital tanpa memeriksa syarat pada setiap tahap."],
 connections:["Cauchy MVT mendasari pembuktian aturan.","Taylor sering memberi alternatif yang lebih informatif.","Asymptotic analysis memakai perbandingan turunan."]
},

"teorema-taylor":{
 intro:["Taylor theorem mengganti fungsi lokal dengan polinom plus remainder yang dapat dikontrol. Nilai teoritisnya terletak pada bentuk remainder, bukan sekadar deret formal.","Derajat polinom menentukan banyaknya informasi turunan yang dipakai."],
 formal:[
  D("Polinom Taylor","$P_n(x)=\\sum_{k=0}^n f^{(k)}(a)(x-a)^k/k!$."),
  T("Taylor dengan Remainder Lagrange","Jika regularitas memadai, untuk setiap $x$ dekat $a$ terdapat $\\xi$ antara $a$ dan $x$ sehingga $f(x)=P_n(x)+f^{(n+1)}(\\xi)(x-a)^{n+1}/(n+1)!$."),
  C("Estimasi Galat","Jika $|f^{(n+1)}|\\le M$ di interval yang relevan, maka $|R_n(x)|\\le M|x-a|^{n+1}/(n+1)!$.")
 ],
 examples:[{title:"Aproksimasi Eksponensial",problem:"Aproksimasi $e^{0.1}$ dengan $1+x+x^2/2$ dan beri batas galat.",solution:["Ambil $a=0$, $n=2$, $x=0.1$.","Polinom memberi $1+0.1+0.005=1.105$.","Pada $[0,0.1]$, turunan ketiga $e^\\xi\\le e^{0.1}$. Galat ≤ $e^{0.1}(0.1)^3/6$."],conclusion:"Aproksimasi kuadratik memiliki galat kurang dari sekitar $1.85\\times10^{-4}$."}],
 exercises:[
  {prompt:"Tuliskan polinom Taylor orde 3 untuk $\\sin x$ di 0.",hint:"Gunakan turunan berulang.",answer:"$x-x^3/6$."},
  {prompt:"Berikan bound remainder untuk $\\cos x\\approx1-x^2/2$ pada $|x|\\le0.1$.",hint:"Turunan orde 3 dibatasi 1.",answer:"Galat ≤ $|x|^3/6$, meski bound orde 4 dapat lebih tajam karena suku kubik nol."},
  {prompt:"Mengapa Taylor polynomial tidak otomatis sama dengan fungsi global?",hint:"Remainder harus menuju nol untuk deret tak hingga.",answer:"Teorema orde hingga hanya memberi fungsi = polinom + remainder."}
 ],
 mistakes:["Menyamakan Taylor theorem dengan Taylor series tanpa mengontrol remainder.","Salah menilai interval tempat turunan dibatasi.","Mengabaikan pusat ekspansi $a$."],
 connections:["Analytic functions kompleks mempunyai Taylor expansion yang jauh lebih kuat.","Metode numerik memakai Taylor untuk error analysis.","L'Hospital dapat diganti dengan Taylor pada banyak limit."]
}
};

