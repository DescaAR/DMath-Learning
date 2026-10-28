import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Independently authored treatment of simple finite graphs.
 * Mathematical reference: R. Diestel, Graph Theory, 5th ed., Springer, 2017,
 * Chapter 1; J. A. Bondy and U. S. R. Murty, Graph Theory, Springer, 2008,
 * Chapter 1. The explanations, examples and proofs below are original.
 */
export const graphDefinitionsContent: BookLessonContent = {
  intro: [
    "Misalkan terdapat empat kota yang dihubungkan oleh tiga jalan dua arah. Dalam kajian graf, yang diperhatikan bukan panjang atau bentuk jalan pada peta, melainkan pasangan kota mana yang terhubung secara langsung. Dengan cara ini, persoalan jaringan dapat dinyatakan sebagai pasangan himpunan $G=(V,E)$. Setiap klaim tentang graf harus diperiksa berdasarkan pasangan tersebut, bukan berdasarkan kedekatan titik dalam gambar.",
    "Kita akan bekerja dengan graf hingga, sederhana, dan tak berarah. Syarat 'sederhana' berarti tidak ada gelang (sisi dari suatu simpul ke dirinya sendiri) dan tidak ada dua sisi berbeda yang mempunyai pasangan ujung sama. Pembatasan ini penting: misalnya, rumus derajat sebagai banyaknya tetangga dan batas $|E|\\le\\binom{|V|}{2}$ tidak berlaku dalam bentuk yang sama pada multigraf.",
    "Ada tiga cara memandang satu graf: daftar simpul dan sisi yang menentukan objek secara tepat; gambar yang memudahkan pembacaan hubungan; serta matriks ketetanggaan yang mengubah hubungan menjadi entri $0$ dan $1$. Gambar dapat diputar atau simpulnya dipindahkan tanpa mengubah graf, tetapi menambah atau menghapus satu pasangan sisi akan mengubah struktur graf.",
    "Pertanyaan 'apakah dua gambar menggambarkan graf yang sama secara struktural?' dijawab oleh isomorfisme: sebuah bijeksi antarhimpunan simpul yang mempertahankan ketetanggaan dalam kedua arah. Derajat simpul, banyak sisi, dan jumlah segitiga menjadi sifat yang dapat digunakan untuk membedakan graf. Sebaliknya, kesamaan derajat saja belum cukup untuk membuktikan isomorfisme.",
    "Pembahasan berikut menyusun definisi secara berurutan, membuktikan lemma jabat tangan melalui pencacahan ganda, menurunkan sifat derajat ganjil, serta menghubungkan matriks ketetanggaan dengan derajat dan banyak sisi. Rujukan untuk pengembangan lebih lanjut: Reinhard Diestel, Graph Theory, edisi ke-5 (Springer, 2017), Bab 1; J. A. Bondy dan U. S. R. Murty, Graph Theory (Springer, 2008), Bab 1."
  ],
  formal: [
    {
      kind:"definition",title:"Graf Sederhana",
      statement:"Graf sederhana hingga adalah pasangan $G=(V,E)$ dengan $V$ himpunan hingga simpul dan $E\\subseteq\\binom{V}{2}=\\{\\{u,v\\}:u,v\\in V,\\ u\\ne v\\}$. Setiap $e=\\{u,v\\}\\in E$ disebut sisi yang menghubungkan $u$ dan $v$. Karena $E$ merupakan himpunan pasangan tak berurut, tidak ada gelang ataupun sisi ganda."
    },
    {
      kind:"definition",title:"Ketetanggaan dan Insidensi",
      statement:"Misalkan $G=(V,E)$ graf sederhana. Dua simpul berbeda $u,v\\in V$ disebut bertetangga jika dan hanya jika $\\{u,v\\}\\in E$. Suatu sisi $e\\in E$ dikatakan insiden dengan $v\\in V$ jika dan hanya jika $v\\in e$. Himpunan tetangga $v$ adalah $N_G(v)=\\{u\\in V:\\{u,v\\}\\in E\\}$."
    },
    {
      kind:"definition",title:"Derajat Simpul",
      statement:"Untuk graf sederhana $G=(V,E)$ dan $v\\in V$, derajat simpul $v$ didefinisikan oleh $\\deg_G(v)=|N_G(v)|$. Dengan demikian $0\\le\\deg_G(v)\\le |V|-1$. Simpul berderajat nol disebut terisolasi, sedangkan simpul berderajat satu disebut daun."
    },
    {
      kind:"definition",title:"Subgraf dan Subgraf Merentang",
      statement:"Graf $H=(W,F)$ disebut subgraf dari $G=(V,E)$ jika $W\\subseteq V$ dan $F\\subseteq E\\cap\\binom{W}{2}$. Jika juga $W=V$, maka $H$ disebut subgraf merentang. Subgraf terinduksi oleh $W\\subseteq V$, ditulis $G[W]$, mempunyai himpunan sisi $E\\cap\\binom{W}{2}$; jadi subgraf terinduksi memuat semua sisi $G$ yang kedua ujungnya berada di $W$."
    },
    {
      kind:"definition",title:"Isomorfisme Graf",
      statement:"Dua graf sederhana $G=(V,E)$ dan $H=(W,F)$ disebut isomorfik, ditulis $G\\cong H$, jika terdapat bijeksi $\\varphi:V\\to W$ sehingga untuk setiap $u,v\\in V$ dengan $u\\ne v$ berlaku $\\{u,v\\}\\in E\\iff\\{\\varphi(u),\\varphi(v)\\}\\in F$. Pemetaan $\\varphi$ disebut isomorfisme graf."
    },
    {
      kind:"definition",title:"Matriks Ketetanggaan",
      statement:"Jika $V(G)=\\{v_1,\\ldots,v_n\\}$ diberi urutan tetap, matriks ketetanggaan $A(G)=(a_{ij})\\in\\{0,1\\}^{n\\times n}$ didefinisikan oleh $a_{ij}=1$ jika $\\{v_i,v_j\\}\\in E(G)$ dan $a_{ij}=0$ jika tidak. Untuk graf sederhana tak berarah, $A(G)^\\mathsf{T}=A(G)$ dan $a_{ii}=0$."
    },
    {
      kind:"definition",title:"Barisan Derajat",
      statement:"Untuk graf sederhana hingga $G$ berorde $n$, barisan derajat adalah daftar $n$ bilangan $\\deg_G(v)$ yang diurutkan tidak menaik, ditulis $d_1\\ge d_2\\ge\\cdots\\ge d_n$. Urutan ini tidak bergantung pada pelabelan simpul, tetapi belum tentu menentukan graf secara unik."
    },
    {
      kind:"lemma",title:"Lemma Jabat Tangan",
      statement:"Jika $G=(V,E)$ adalah graf sederhana hingga, maka $\\displaystyle\\sum_{v\\in V}\\deg_G(v)=2|E|$.",
      given:"Graf sederhana hingga $G=(V,E)$.",
      toProve:"Jumlah derajat semua simpul sama dengan dua kali banyak sisi.",
      proof:[
        "Pertimbangkan himpunan insidensi $I=\\{(v,e)\\in V\\times E:v\\in e\\}$. Setiap anggota $I$ menyatakan satu simpul yang menjadi ujung suatu sisi; karena $G$ sederhana, setiap sisi mempunyai tepat dua ujung berbeda.",
        "Jika pasangan dalam $I$ dikelompokkan menurut simpul $v$, banyak pasangan dengan komponen pertama $v$ sama dengan $\\deg_G(v)$. Karena kelas-kelas ini saling lepas dan mencakup $I$, diperoleh $|I|=\\sum_{v\\in V}\\deg_G(v)$.",
        "Jika pasangan yang sama dikelompokkan menurut sisi $e=\\{u,v\\}$, terdapat tepat dua pasangan, yaitu $(u,e)$ dan $(v,e)$. Oleh karena itu $|I|=\\sum_{e\\in E}2=2|E|$.",
        "Kedua penjumlahan menghitung himpunan $I$ yang sama, sehingga $\\sum_{v\\in V}\\deg_G(v)=2|E|$. Pernyataan terbukti."
      ],
      explanation:"Kesamaan ini tidak bergantung pada bentuk gambar, urutan simpul, atau keterhubungan graf. Yang dihitung adalah pasangan insidensi; karena itu setiap sisi harus dihitung tepat dua kali."
    },
    {
      kind:"corollary",title:"Banyak Simpul Berderajat Ganjil",
      statement:"Pada setiap graf sederhana hingga, banyak simpul yang mempunyai derajat ganjil adalah bilangan genap.",
      proof:[
        "Misalkan $O=\\{v\\in V:\\deg_G(v)\\text{ ganjil}\\}$ dan $P=V\\setminus O$. Menurut lemma jabat tangan, $\\sum_{v\\in O}\\deg_G(v)+\\sum_{v\\in P}\\deg_G(v)=2|E|$ merupakan bilangan genap.",
        "Setiap suku pada $\\sum_{v\\in P}\\deg_G(v)$ genap, sehingga jumlah tersebut genap. Dengan mengurangkannya dari $2|E|$, kita memperoleh bahwa $\\sum_{v\\in O}\\deg_G(v)$ juga genap.",
        "Setiap derajat ganjil dapat ditulis $2k_v+1$. Maka $\\sum_{v\\in O}\\deg_G(v)=2\\sum_{v\\in O}k_v+|O|$. Karena ruas kiri dan suku pertama ruas kanan genap, $|O|$ harus genap. Akibat terbukti."
      ],
      explanation:"Pernyataan ini memberi uji cepat terhadap daftar derajat: daftar yang mempunyai banyak entri ganjil berjumlah ganjil mustahil menjadi barisan derajat graf tak berarah."
    },
    {
      kind:"proposition",title:"Batas Banyak Sisi Graf Sederhana",
      statement:"Untuk graf sederhana $G$ dengan $n=|V(G)|$, berlaku $0\\le |E(G)|\\le\\binom n2$. Kesamaan $|E(G)|=\\binom n2$ berlaku jika dan hanya jika setiap dua simpul berbeda bertetangga, yaitu $G$ graf lengkap $K_n$.",
      proof:[
        "Himpunan semua pasangan tak berurut dua simpul berbeda berukuran $\\binom n2$. Karena $E(G)\\subseteq\\binom{V(G)}2$, diperoleh $0\\le |E(G)|\\le\\binom n2$.",
        "(⇒) Jika $|E(G)|=\\binom n2$, maka himpunan hingga $E(G)$ dan $\\binom{V(G)}2$ mempunyai kardinalitas sama, sedangkan yang pertama merupakan subhimpunan yang kedua. Akibatnya $E(G)=\\binom{V(G)}2$, sehingga setiap pasangan simpul berbeda membentuk sisi.",
        "(⇐) Jika setiap dua simpul berbeda bertetangga, maka menurut definisi $E(G)=\\binom{V(G)}2$. Karena itu $|E(G)|=\\binom n2$. Kedua arah membuktikan ekuivalensi."
      ],
      explanation:"Syarat graf sederhana diperlukan: jika sisi ganda diizinkan, jumlah sisi dapat melebihi $\\binom n2$ meskipun banyak simpul tetap."
    },
    {
      kind:"proposition",title:"Derajat dan Sisi Dipertahankan Isomorfisme",
      statement:"Jika $\\varphi:G\\to H$ merupakan isomorfisme dua graf sederhana hingga, maka $|V(G)|=|V(H)|$, $|E(G)|=|E(H)|$, dan $\\deg_G(v)=\\deg_H(\\varphi(v))$ untuk setiap $v\\in V(G)$.",
      proof:[
        "Karena $\\varphi$ bijeksi antarhimpunan simpul, $|V(G)|=|V(H)|$. Definisikan $\\Phi:E(G)\\to E(H)$ melalui $\\Phi(\\{u,v\\})=\\{\\varphi(u),\\varphi(v)\\}$.",
        "Sifat mempertahankan ketetanggaan menjamin bahwa $\\Phi$ terdefinisi dengan baik. Injektivitas $\\varphi$ membuat $\\Phi$ injektif. Sebaliknya, untuk setiap $\\{x,y\\}\\in E(H)$, praimaj $u=\\varphi^{-1}(x)$ dan $v=\\varphi^{-1}(y)$ memenuhi $\\{u,v\\}\\in E(G)$ oleh arah balik ekuivalensi ketetanggaan. Jadi $\\Phi$ surjektif dan $|E(G)|=|E(H)|$.",
        "Untuk setiap $v\\in V(G)$, pembatasan $\\varphi|_{N_G(v)}$ adalah bijeksi dari $N_G(v)$ ke $N_H(\\varphi(v))$: jika $u$ bertetangga dengan $v$, citranya bertetangga dengan $\\varphi(v)$, dan arah balik memberi surjektivitas. Maka kedua himpunan tetangga mempunyai kardinalitas sama, sehingga derajatnya sama. Proposisi terbukti."
      ],
      explanation:"Kesamaan banyak simpul, sisi, dan barisan derajat merupakan syarat perlu, bukan syarat cukup, untuk isomorfisme. Dua graf dengan semua derajat $2$ dapat berbeda karena yang satu memiliki segitiga dan yang lain tidak."
    },
    {
      kind:"proposition",title:"Matriks Ketetanggaan dan Derajat",
      statement:"Jika $A=(a_{ij})$ adalah matriks ketetanggaan graf sederhana hingga $G$ dengan simpul $v_1,\\ldots,v_n$, maka $\\deg_G(v_i)=\\sum_{j=1}^n a_{ij}$, $(A^2)_{ii}=\\deg_G(v_i)$, dan $\\operatorname{tr}(A^2)=2|E(G)|$.",
      proof:[
        "Menurut definisi $a_{ij}=1$ tepat ketika $v_j\\in N_G(v_i)$. Karena semua entri $0$ atau $1$, jumlah entri baris ke-$i$ adalah $|N_G(v_i)|=\\deg_G(v_i)$.",
        "Dengan perkalian matriks, $(A^2)_{ii}=\\sum_{j=1}^n a_{ij}a_{ji}$. Matriks $A$ simetris, sehingga $a_{ij}a_{ji}=a_{ij}^2=a_{ij}$ karena $a_{ij}\\in\\{0,1\\}$. Jadi $(A^2)_{ii}=\\sum_j a_{ij}=\\deg_G(v_i)$.",
        "Jejak $A^2$ adalah jumlah entri diagonalnya. Maka $\\operatorname{tr}(A^2)=\\sum_{i=1}^n\\deg_G(v_i)=2|E(G)|$ berdasarkan lemma jabat tangan. Ketiga identitas terbukti."
      ],
      explanation:"Entri diagonal $A^2$ menghitung perjalanan tertutup dua langkah dari satu simpul: pilih satu tetangga, kemudian kembali melalui sisi yang sama."
    },
    {
      kind:"theorem",title:"Karakterisasi Isomorfisme melalui Matriks Permutasi",
      statement:"Diberikan graf sederhana $G,H$ masing-masing berorde $n$ dengan matriks ketetanggaan $A_G,A_H$ menurut urutan simpul yang tetap. Maka $G\\cong H$ jika dan hanya jika terdapat matriks permutasi $P$ berukuran $n\\times n$ sehingga $A_G=P^{\\mathsf T}A_HP$.",
      proof:[
        "(⇒) Misalkan $\\varphi:V(G)\\to V(H)$ isomorfisme. Jika simpul $G$ diurutkan $v_1,\\ldots,v_n$ dan simpul $H$ diurutkan $w_1,\\ldots,w_n$, tulis $\\varphi(v_i)=w_{\\pi(i)}$ untuk suatu permutasi $\\pi$. Bentuk matriks $P$ yang kolom ke-$i$ adalah vektor basis $e_{\\pi(i)}$.",
        "Entri $(i,j)$ dari $P^{\\mathsf T}A_HP$ adalah $(A_H)_{\\pi(i),\\pi(j)}$. Karena $\\varphi$ mempertahankan ketetanggaan dalam kedua arah, entri ini bernilai $1$ tepat ketika $\\{v_i,v_j\\}\\in E(G)$, yakni tepat ketika $(A_G)_{ij}=1$. Maka $A_G=P^{\\mathsf T}A_HP$.",
        "(⇐) Sebaliknya, misalkan ada matriks permutasi $P$ dengan persamaan tersebut. Setiap kolom $P$ adalah suatu vektor basis standar yang berbeda, sehingga terdapat permutasi $\\pi$ dengan $P e_i=e_{\\pi(i)}$. Definisikan $\\varphi(v_i)=w_{\\pi(i)}$; jelas $\\varphi$ bijektif.",
        "Kesamaan matriks menyatakan $(A_G)_{ij}=(A_H)_{\\pi(i),\\pi(j)}$ untuk semua $i,j$. Karena kedua matriks adalah matriks ketetanggaan, $\\{v_i,v_j\\}\\in E(G)$ jika dan hanya jika $\\{\\varphi(v_i),\\varphi(v_j)\\}\\in E(H)$. Jadi $\\varphi$ isomorfisme. Teorema terbukti."
      ],
      explanation:"Mengubah urutan simpul hanya menukar baris dan kolom secara serentak. Karena itu dua gambar dengan pelabelan berbeda dapat mempunyai matriks berbeda tetapi tetap mewakili struktur graf yang sama."
    },
    {
      kind:"proposition",title:"Derajat pada Subgraf",
      statement:"Jika $H=(W,F)$ adalah subgraf graf sederhana $G=(V,E)$, maka $\\deg_H(v)\\le\\deg_G(v)$ untuk setiap $v\\in W$. Jika $H=G[W]$, maka $N_H(v)=N_G(v)\\cap W$.",
      proof:[
        "Untuk setiap $v\\in W$, apabila $u\\in N_H(v)$ maka $\\{u,v\\}\\in F\\subseteq E$ dan $u\\in W$. Jadi $N_H(v)\\subseteq N_G(v)$, sehingga $|N_H(v)|\\le|N_G(v)|$.",
        "Jika $H=G[W]$, semua sisi $G$ yang kedua ujungnya di $W$ dimasukkan ke $H$. Oleh karena itu $u\\in N_G(v)\\cap W$ tepat ketika $\\{u,v\\}\\in E\\cap\\binom W2=F$, yaitu tepat ketika $u\\in N_H(v)$. Kesamaan himpunan tetangga terbukti."
      ]
    }
  ],
  examples: [
    {
      title:"Graf dengan Empat Simpul",forDefinition:"Graf Sederhana",
      problem:"Ambil $V=\\{a,b,c,d\\}$ dan $E=\\{\\{a,b\\},\\{b,c\\},\\{c,d\\}\\}$. Tentukan apakah $G=(V,E)$ graf sederhana, banyak sisinya, dan simpul yang bertetangga dengan $b$.",
      solution:[
        "Setiap elemen $E$ adalah pasangan tak berurut dari dua simpul berbeda di $V$. Tidak ada gelang dan tidak ada pasangan sisi yang berulang, sehingga $E\\subseteq\\binom V2$.",
        "Himpunan $E$ mempunyai tepat tiga elemen, sehingga $|E|=3$. Tetangga $b$ adalah $a$ dan $c$ karena $\\{a,b\\},\\{b,c\\}\\in E$, sedangkan $\\{b,d\\}\\notin E$.",
        "Dengan demikian $G$ merupakan graf sederhana dengan $|V|=4$, $|E|=3$, dan $N_G(b)=\\{a,c\\}$."
      ]
    },
    {
      title:"Membedakan Bertetangga dan Insiden",forDefinition:"Ketetanggaan dan Insidensi",
      problem:"Pada graf $V=\\{1,2,3,4\\}$, $E=\\{\\{1,2\\},\\{2,3\\},\\{3,4\\}\\}$, tentukan $N_G(2)$ serta sisi yang insiden dengan simpul $3$.",
      solution:[
        "Pasangan sisi yang memuat simpul $2$ adalah $\\{1,2\\}$ dan $\\{2,3\\}$. Oleh karena itu simpul yang bertetangga dengan $2$ adalah $1$ dan $3$, sehingga $N_G(2)=\\{1,3\\}$.",
        "Sisi yang insiden dengan simpul $3$ ialah $\\{2,3\\}$ dan $\\{3,4\\}$, sebab tepat kedua sisi itulah yang memuat $3$ sebagai salah satu ujung.",
        "Ketetanggaan adalah relasi antarsimpul, sedangkan insidensi adalah relasi antara simpul dan sisi; kedua istilah tidak boleh dipertukarkan."
      ]
    },
    {
      title:"Menghitung Derajat dan Memeriksa Jumlahnya",forDefinition:"Derajat Simpul",
      problem:"Untuk graf $G$ dengan $V=\\{1,2,3,4,5\\}$ dan $E=\\{\\{1,2\\},\\{1,3\\},\\{2,3\\},\\{3,4\\}\\}$, hitung seluruh derajat dan periksa lemma jabat tangan.",
      solution:[
        "Dari himpunan tetangga diperoleh $N(1)=\\{2,3\\}$, $N(2)=\\{1,3\\}$, $N(3)=\\{1,2,4\\}$, $N(4)=\\{3\\}$, dan $N(5)=\\varnothing$.",
        "Maka derajat berturut-turut adalah $2,2,3,1,0$. Simpul $5$ terisolasi dan simpul $4$ merupakan daun. Jumlah derajat adalah $2+2+3+1+0=8$.",
        "Karena $|E|=4$, ruas kanan lemma jabat tangan adalah $2|E|=8$. Kedua hitungan sama, sehingga daftar derajat konsisten dengan himpunan sisi."
      ]
    },
    {
      title:"Subgraf Biasa dan Terinduksi",forDefinition:"Subgraf dan Subgraf Merentang",
      problem:"Misalkan $G$ memiliki $V=\\{1,2,3,4\\}$ dan $E=\\{\\{1,2\\},\\{2,3\\},\\{1,3\\},\\{3,4\\}\\}$. Untuk $W=\\{1,2,3\\}$, bandingkan $H=(W,\\{\\{1,2\\},\\{2,3\\}\\})$ dengan $G[W]$.",
      solution:[
        "Karena semua simpul $H$ berada di $V$ dan setiap sisi $H$ merupakan sisi $G$ dengan kedua ujung di $W$, maka $H$ adalah subgraf $G$.",
        "Untuk membentuk subgraf terinduksi, semua sisi $G$ yang kedua ujungnya di $W$ wajib disertakan. Sisi tersebut ialah $\\{1,2\\},\\{2,3\\},\\{1,3\\}$.",
        "Jadi $H$ bukan subgraf terinduksi oleh $W$, karena sisi $\\{1,3\\}$ dihilangkan. Subgraf $G[W]$ memuat tiga sisi dan membentuk segitiga."
      ]
    },
    {
      title:"Menguji Isomorfisme dengan Bijection",forDefinition:"Isomorfisme Graf",
      problem:"Graf $G$ mempunyai sisi $\\{\\{1,2\\},\\{2,3\\},\\{3,4\\}\\}$ dan graf $H$ mempunyai sisi $\\{\\{a,c\\},\\{c,d\\},\\{d,b\\}\\}$. Tentukan suatu isomorfisme $G\\to H$.",
      solution:[
        "Definisikan $\\varphi(1)=a$, $\\varphi(2)=c$, $\\varphi(3)=d$, dan $\\varphi(4)=b$. Keempat citra berbeda dan mencakup seluruh simpul $H$, sehingga $\\varphi$ bijektif.",
        "Citra ketiga sisi $G$ berturut-turut adalah $\\{a,c\\}$, $\\{c,d\\}$, dan $\\{d,b\\}$, tepat seluruh sisi $H$. Karena $G$ dan $H$ sama-sama memiliki tiga sisi, tidak ada pasangan bukan-sisi yang berubah menjadi sisi.",
        "Dengan demikian untuk setiap pasangan simpul berbeda, ketetanggaan berlaku tepat ketika ketetanggaan citranya berlaku. Pemetaan $\\varphi$ adalah isomorfisme."
      ]
    },
    {
      title:"Menyusun Matriks Ketetanggaan",forDefinition:"Matriks Ketetanggaan",
      problem:"Tuliskan matriks ketetanggaan untuk lintasan $1-2-3-4$ dengan urutan simpul $(1,2,3,4)$ dan hitung $\\operatorname{tr}(A^2)$.",
      solution:[
        "Sisi graf adalah $\\{1,2\\},\\{2,3\\},\\{3,4\\}$. Maka $A=\\begin{pmatrix}0&1&0&0\\\\1&0&1&0\\\\0&1&0&1\\\\0&0&1&0\\end{pmatrix}$. Matriks simetris dan diagonalnya nol, sesuai definisi graf sederhana.",
        "Jumlah entri baris berturut-turut adalah $1,2,2,1$, yaitu derajat keempat simpul. Oleh proposisi matriks ketetanggaan, entri diagonal $A^2$ sama dengan $1,2,2,1$.",
        "Karena itu $\\operatorname{tr}(A^2)=1+2+2+1=6=2\\cdot3=2|E|$. Perhitungan matriks dan pencacahan sisi memberikan hasil yang sama."
      ]
    },
    {
      title:"Barisan Derajat Tidak Menentukan Isomorfisme",forDefinition:"Barisan Derajat",
      problem:"Bandingkan graf siklus $C_6$ dengan graf yang merupakan gabungan dua segitiga tanpa sisi penghubung. Apakah barisan derajat yang sama menjamin kedua graf isomorfik?",
      solution:[
        "Setiap simpul pada $C_6$ bertetangga dengan tepat dua simpul. Pada gabungan dua segitiga, setiap simpul juga bertetangga dengan dua simpul. Kedua barisan derajat sama, yaitu $(2,2,2,2,2,2)$.",
        "Graf $C_6$ tidak mempunyai segitiga: setiap sisi menghubungkan simpul yang berurutan dalam satu siklus panjang enam. Sebaliknya, graf gabungan dua segitiga mempunyai dua subgraf lengkap berorde tiga.",
        "Isomorfisme mempertahankan semua pasangan ketetanggaan dan karenanya mempertahankan keberadaan segitiga. Jadi kedua graf tidak isomorfik meskipun barisan derajatnya sama."
      ]
    },
    {
      title:"Mengapa Jumlah Simpul dan Sisi Belum Cukup",
      problem:"Bandingkan lintasan $P_4$ dengan bintang $K_{1,3}$. Keduanya mempunyai empat simpul dan tiga sisi. Buktikan bahwa keduanya tidak isomorfik.",
      solution:[
        "Lintasan $P_4$ mempunyai derajat $(1,2,2,1)$, sehingga barisan derajat tidak menaiknya adalah $(2,2,1,1)$.",
        "Bintang $K_{1,3}$ mempunyai satu pusat berderajat $3$ dan tiga daun berderajat $1$, sehingga barisan derajatnya $(3,1,1,1)$.",
        "Menurut proposisi invariansi derajat, isomorfisme harus mempertahankan barisan derajat. Karena kedua barisan berbeda, kedua graf tidak isomorfik walaupun $|V|$ dan $|E|$ sama."
      ]
    }
  ],
  exercises: [
    {
      prompt:"Diberikan $V=\\{a,b,c,d,e\\}$ dan $E=\\{\\{a,b\\},\\{a,c\\},\\{b,c\\},\\{c,d\\}\\}$. Tentukan derajat semua simpul, banyak sisi, serta simpul berderajat ganjil.",
      hint:"Tuliskan himpunan tetangga setiap simpul sebelum menjumlahkan derajat.",
      answer:"Diketahui $N(a)=\\{b,c\\}$, $N(b)=\\{a,c\\}$, $N(c)=\\{a,b,d\\}$, $N(d)=\\{c\\}$, dan $N(e)=\\varnothing$. Dengan demikian derajatnya berturut-turut $2,2,3,1,0$. Jumlah derajat adalah $8$, sama dengan $2|E|=2\\cdot4=8$. Simpul berderajat ganjil adalah $c$ dan $d$, berjumlah dua. Hal ini memenuhi akibat lemma jabat tangan."
    },
    {
      prompt:"Apakah terdapat graf sederhana dengan barisan derajat $(3,3,2,1,1)$? Jika ada, berikan himpunan sisinya.",
      hint:"Periksa jumlah derajat, lalu konstruksikan graf dengan dua simpul berderajat tiga.",
      answer:"Jumlah derajat adalah $3+3+2+1+1=10$, sehingga jumlah sisi yang diperlukan adalah $5$. Ambil $V=\\{1,2,3,4,5\\}$ dan $E=\\{\\{1,2\\},\\{1,3\\},\\{1,4\\},\\{2,3\\},\\{2,5\\}\\}$. Simpul $1$ bertetangga dengan $2,3,4$ sehingga derajatnya $3$; simpul $2$ bertetangga dengan $1,3,5$ sehingga derajatnya $3$; simpul $3$ bertetangga dengan $1,2$ sehingga derajatnya $2$; simpul $4$ dan $5$ masing-masing berderajat $1$. Maka barisan yang diminta memang dapat direalisasikan. Perhatikan bahwa jumlah derajat genap saja belum membuktikan realisabilitas; konstruksi sisi menyelesaikan persoalan ini."
    },
    {
      prompt:"Buktikan bahwa tidak ada graf sederhana dengan empat simpul dan tujuh sisi. Apakah pernyataan tetap benar untuk multigraf?",
      hint:"Gunakan banyak pasangan tak berurut dari empat simpul berbeda.",
      answer:"Untuk graf sederhana dengan $n=4$, banyak sisi paling besar $\\binom42=6$, sebab setiap sisi adalah salah satu dari enam pasangan simpul berbeda dan tidak ada pasangan yang boleh diulang. Jadi tujuh sisi mustahil. Jika sisi ganda diperbolehkan, ambil empat simpul dan seluruh enam sisi graf lengkap $K_4$, kemudian tambahkan satu sisi kedua antara simpul $1$ dan $2$. Multigraf yang diperoleh memiliki tujuh sisi. Karena itu syarat 'sederhana' tidak boleh dihapus dari pernyataan batas sisi."
    },
    {
      prompt:"Pada graf $G$ dengan sisi $\\{\\{1,2\\},\\{2,3\\},\\{3,1\\},\\{3,4\\}\\}$, tentukan subgraf terinduksi oleh $W=\\{1,2,3\\}$ dan derajat setiap simpul pada subgraf tersebut.",
      hint:"Pertahankan semua sisi yang kedua ujungnya berada dalam $W$.",
      answer:"Sisi $\\{1,2\\}$, $\\{2,3\\}$, dan $\\{3,1\\}$ seluruhnya memiliki kedua ujung dalam $W$, sehingga semuanya masuk ke $G[W]$. Sisi $\\{3,4\\}$ dihilangkan karena $4\\notin W$. Dengan demikian $G[W]$ adalah segitiga dengan ketiga simpul berderajat $2$. Dalam graf asal, derajat simpul $3$ adalah $3$; pengurangan menjadi $2$ sesuai proposisi derajat pada subgraf."
    },
    {
      prompt:"Buktikan bahwa dua graf sederhana dengan barisan derajat berbeda tidak mungkin isomorfik. Jelaskan mengapa kebalikannya tidak berlaku.",
      hint:"Gunakan bijeksi antara himpunan tetangga, lalu cari dua graf berderajat sama tetapi memiliki jumlah segitiga berbeda.",
      answer:"Misalkan $\\varphi:G\\to H$ suatu isomorfisme. Untuk setiap $v\\in V(G)$, pemetaan $u\\mapsto\\varphi(u)$ membatasi diri menjadi bijeksi $N_G(v)\\to N_H(\\varphi(v))$. Akibatnya $\\deg_G(v)=\\deg_H(\\varphi(v))$, sehingga setelah derajat diurutkan, kedua barisan harus sama. Kontraposisinya menyatakan bahwa barisan berbeda menghalangi isomorfisme. Namun $C_6$ dan gabungan dua segitiga sama-sama mempunyai barisan $(2,2,2,2,2,2)$, sedangkan graf pertama tidak mengandung segitiga dan graf kedua mengandung dua. Karena isomorfisme mempertahankan segitiga, kedua graf tidak isomorfik. Jadi kesamaan barisan derajat hanya syarat perlu."
    },
    {
      prompt:"Untuk graf sederhana $G$ dengan matriks ketetanggaan $A$, buktikan bahwa $\\sum_{i,j}a_{ij}=2|E(G)|$ dan $\\operatorname{tr}(A^2)=\\sum_{i,j}a_{ij}$.",
      hint:"Hitung jumlah entri per baris dan gunakan kesimetrian serta sifat $0$–$1$.",
      answer:"Setiap entri $a_{ij}=1$ menyatakan sisi antara simpul $i$ dan $j$. Karena matriks simetris dan diagonalnya nol, setiap sisi $\\{i,j\\}$ dengan $i\\ne j$ menyumbang tepat dua entri bernilai $1$, yaitu $a_{ij}$ dan $a_{ji}$. Maka $\\sum_{i,j}a_{ij}=2|E(G)|$. Selanjutnya $(A^2)_{ii}=\\sum_j a_{ij}a_{ji}=\\sum_j a_{ij}^2=\\sum_j a_{ij}$, karena $a_{ij}\\in\\{0,1\\}$. Menjumlahkan terhadap $i$ menghasilkan $\\operatorname{tr}(A^2)=\\sum_{i,j}a_{ij}$. Kedua identitas terbukti."
    },
    {
      prompt:"Jika $G$ graf sederhana dengan $n\\ge2$ simpul, buktikan bahwa terdapat dua simpul berbeda yang mempunyai derajat sama.",
      hint:"Derajat berada di antara $0$ dan $n-1$, tetapi derajat $0$ dan $n-1$ tidak dapat muncul bersama.",
      answer:"Setiap derajat berada dalam $\\{0,1,\\ldots,n-1\\}$. Andaikan seluruh $n$ derajat berbeda. Karena terdapat tepat $n$ kemungkinan, derajat yang muncul harus persis $0,1,\\ldots,n-1$. Ini memaksa adanya simpul $u$ berderajat $0$ dan simpul berbeda $v$ berderajat $n-1$. Namun $v$ harus bertetangga dengan semua simpul lain, termasuk $u$, bertentangan dengan $\\deg(u)=0$. Maka anggapan bahwa semua derajat berbeda salah, sehingga sedikitnya dua simpul mempunyai derajat sama."
    },
    {
      prompt:"Tunjukkan bahwa jika graf sederhana $G$ berorde $n\\ge2$ memiliki tepat $\\binom n2-1$ sisi, maka tepat dua simpul berderajat $n-2$ dan semua simpul lainnya berderajat $n-1$.",
      hint:"Bandingkan $G$ dengan graf lengkap $K_n$ dan tentukan satu-satunya sisi yang hilang.",
      answer:"Graf lengkap $K_n$ mempunyai tepat $\\binom n2$ sisi. Karena $E(G)\\subseteq E(K_n)$ dan $|E(G)|=\\binom n2-1$, terdapat tepat satu pasangan $\\{u,v\\}$ yang bukan sisi $G$. Dalam $K_n$, setiap simpul berderajat $n-1$. Menghapus sisi $\\{u,v\\}$ menurunkan derajat $u$ dan $v$ masing-masing satu, sehingga keduanya berderajat $n-2$. Tidak ada sisi lain yang dihapus, sehingga setiap simpul selain $u$ dan $v$ tetap berderajat $n-1$. Ketika $n=2$, tidak ada simpul lain dan kedua simpul berderajat $0$, sesuai rumus."
    }
  ],
  mistakes: [],
  connections: []
};
