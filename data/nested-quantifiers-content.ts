import type { BookLessonContent } from "@/data/book-content-types";

/** Original nested-quantifier lesson; mathematical reference: Rosen (2019), Chapter 1. */
export const nestedQuantifiersContent:BookLessonContent = {
  "intro": [
    "Urutan kuantor menentukan informasi yang boleh dipakai ketika memilih sebuah saksi. Pernyataan bahwa setiap mahasiswa mempunyai satu buku yang dibaca tidak sama dengan pernyataan bahwa terdapat satu buku yang dibaca semua mahasiswa. Perbedaannya bukan persoalan tata bahasa semata: kedua kalimat mempunyai struktur logika dan syarat kebenaran yang berbeda.",
    "Ambil dua himpunan tidak kosong $A$ dan $B$, serta relasi $R\\subseteq A\\times B$. Dalam $\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)$, unsur $y$ boleh dipilih setelah $x$ diketahui, sehingga saksi dapat berubah mengikuti $x$. Sebaliknya, $\\exists y\\in B\\,\\forall x\\in A\\,R(x,y)$ meminta satu unsur $y$ yang sama untuk seluruh $x$.",
    "Pembahasan dimulai dengan lingkup kuantor, dilanjutkan cara membaca matriks relasi, perbedaan saksi lokal dan global, negasi yang benar, lalu konstruksi fungsi saksi. Contoh tandingan dipakai untuk menguji arah implikasi yang tidak sah. Semua hasil tentang domain kosong dinyatakan terpisah agar syarat ketak-kosongan tidak tersembunyi.",
    "Pada laboratorium relasi, baris mewakili pilihan x dan kolom mewakili pilihan y. Sebuah sel berwarna menunjukkan R(x,y) benar. Pernyataan untuk setiap x ada y berarti setiap baris memiliki sel benar, sedangkan ada satu y untuk setiap x berarti terdapat satu kolom yang seluruh selnya benar. Rujukan matematis: Kenneth H. Rosen, Discrete Mathematics and Its Applications, edisi ke-8 (2019), Bab 1."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Kuantor Terbatas dan Lingkup Pernyataan",
      "statement": "Misalkan $A$ himpunan dan $P(x)$ predikat dengan $x\\in A$. Pernyataan $\\forall x\\in A\\,P(x)$ benar jika $P(a)$ benar untuk setiap $a\\in A$; pernyataan $\\exists x\\in A\\,P(x)$ benar jika sekurang-kurangnya ada $a\\in A$ dengan $P(a)$ benar. Lingkup kuantor adalah subrumus yang variabelnya diikat oleh kuantor tersebut. Untuk $A=\\varnothing$, pernyataan universal benar secara vakum dan pernyataan eksistensial salah.",
      "explanation": "Lingkup menentukan bagian kalimat yang harus diuji untuk setiap pilihan variabel; kuantor tidak dapat dipindah melintasi penghubung logika tanpa alasan."
    },
    {
      "kind": "definition",
      "title": "Relasi Biner dan Matriks Kebenaran",
      "statement": "Untuk himpunan $A,B$, relasi biner dari $A$ ke $B$ adalah himpunan $R\\subseteq A\\times B$. Notasi $R(x,y)$ berarti $(x,y)\\in R$. Jika $A=\\{a_1,\\ldots,a_m\\}$ dan $B=\\{b_1,\\ldots,b_n\\}$ berhingga, matriks kebenaran $M=(m_{ij})$ didefinisikan oleh $m_{ij}=1$ tepat ketika $R(a_i,b_j)$ benar, dan $m_{ij}=0$ selain itu.",
      "explanation": "Setiap baris menyatakan seluruh kandidat saksi untuk satu x, sedangkan setiap kolom menguji satu kandidat y terhadap semua x."
    },
    {
      "kind": "definition",
      "title": "Saksi Lokal dan Saksi Seragam",
      "statement": "Untuk relasi $R\\subseteq A\\times B$, unsur $b_a\\in B$ yang memenuhi $R(a,b_a)$ disebut saksi lokal bagi $a\\in A$. Unsur $b_*\\in B$ disebut saksi seragam jika $R(a,b_*)$ berlaku untuk semua $a\\in A$. Dengan demikian $\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)$ menuntut saksi lokal untuk setiap $x$, sedangkan $\\exists y\\in B\\,\\forall x\\in A\\,R(x,y)$ menuntut satu saksi seragam.",
      "explanation": "Saksi lokal boleh bergantung pada x; saksi seragam tidak. Pernyataan kedua lebih kuat jika A tidak kosong."
    },
    {
      "kind": "definition",
      "title": "Saksi Unik dan Fungsi Saksi",
      "statement": "Tulisan $\\exists!y\\in B\\,R(x,y)$ berarti terdapat $y\\in B$ yang memenuhi $R(x,y)$ dan setiap $z\\in B$ dengan $R(x,z)$ harus sama dengan $y$. Jika untuk setiap $x\\in A$ terdapat tepat satu saksi demikian, definisikan $f:A\\to B$ dengan $f(x)$ sama dengan saksi unik untuk $x$; fungsi ini disebut fungsi saksi.",
      "explanation": "Keunikan membuat aturan pemilihan tidak ambigu; tanpa keunikan, pemilihan saksi secara serentak pada himpunan tak hingga memerlukan perhatian set-teoretis."
    },
    {
      "kind": "proposition",
      "title": "Ekspansi Kuantor pada Domain Berhingga",
      "statement": "Misalkan $A=\\{a_1,\\ldots,a_m\\}$ dan $B=\\{b_1,\\ldots,b_n\\}$ dengan $m,n\\ge1$. Maka $\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)$ ekuivalen dengan $\\bigwedge_{i=1}^m\\bigvee_{j=1}^nR(a_i,b_j)$, sedangkan $\\exists y\\in B\\,\\forall x\\in A\\,R(x,y)$ ekuivalen dengan $\\bigvee_{j=1}^n\\bigwedge_{i=1}^mR(a_i,b_j)$.",
      "proof": [
        "$(\\Rightarrow)$ Andaikan $\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)$ benar. Untuk setiap indeks $i$, substitusi $x=a_i$ memberi sedikitnya satu indeks $j$ dengan $R(a_i,b_j)$ benar. Karena itu disjungsi pada baris ke-$i$ benar.",
        "Karena alasan tersebut berlaku untuk setiap $i=1,\\ldots,m$, konjungsi seluruh disjungsi baris benar. Jadi rumus pertama mengakibatkan $\\bigwedge_i\\bigvee_jR(a_i,b_j)$.",
        "$(\\Leftarrow)$ Jika konjungsi seluruh baris benar, setiap $a_i$ mempunyai sedikitnya satu $b_j$ yang memenuhi relasi. Semua unsur $A$ termasuk dalam daftar $a_1,\\ldots,a_m$, sehingga $\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)$.",
        "Untuk rumus kedua, $(\\Rightarrow)$ saksi seragam $b_j$ membuat setiap entri kolom $j$ benar, sehingga salah satu konjungsi kolom benar. Sebaliknya, $(\\Leftarrow)$ jika salah satu konjungsi kolom benar, ambil indeks kolom tersebut sebagai saksi $y=b_j$ untuk seluruh $x\\in A$. Kedua ekuivalensi terbukti.",
        "\\square"
      ],
      "explanation": "Ekspansi tersebut adalah dasar algoritma evaluasi matriks relasi: konjungsi baris dari disjungsi tidak sama dengan disjungsi kolom dari konjungsi."
    },
    {
      "kind": "theorem",
      "title": "Implikasi dari Saksi Seragam ke Saksi Lokal",
      "statement": "Untuk himpunan $A,B$ dan relasi $R\\subseteq A\\times B$, berlaku $\\big(\\exists y\\in B\\,\\forall x\\in A\\,R(x,y)\\big)\\Rightarrow\\big(\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)\\big)$. Implikasi balik tidak berlaku secara umum, bahkan jika $A=B$ berhingga dan tidak kosong.",
      "proof": [
        "Andaikan terdapat $b_*\\in B$ sehingga $R(x,b_*)$ berlaku untuk setiap $x\\in A$. Ambil $a\\in A$ sebarang. Karena $R(a,b_*)$ benar, terdapat saksi bagi $a$, yaitu $y=b_*$.",
        "Pilihan $a$ sebarang, sehingga $\\forall x\\in A\\,\\exists y\\in B\\,R(x,y)$ berlaku. Bila $A$ kosong, pernyataan universal di ruas kanan juga benar secara vakum; tidak ada pengecualian pada implikasi ini.",
        "Untuk menolak implikasi balik, pilih $A=B=\\{1,2\\}$ dan definisikan $R(x,y)$ oleh $x=y$. Untuk $x=1$ pilih $y=1$, dan untuk $x=2$ pilih $y=2$. Maka setiap $x$ memiliki saksi.",
        "Akan tetapi, tidak ada satu $y$ yang sekaligus sama dengan $1$ dan $2$. Jadi $\\exists y\\,\\forall x\\,R(x,y)$ salah. Contoh tandingan ini membuktikan bahwa implikasi balik tidak sah.",
        "\\square"
      ],
      "explanation": "Mengubah urutan kuantor universal lalu eksistensial menjadi eksistensial lalu universal menuntut informasi tambahan tentang keseragaman saksi."
    },
    {
      "kind": "theorem",
      "title": "Negasi Dua Kuantor Berurutan",
      "statement": "Untuk sebarang himpunan $A,B$ dan predikat $R(x,y)$, berlaku $\\neg(\\forall x\\in A\\,\\exists y\\in B\\,R(x,y))\\iff\\exists x\\in A\\,\\forall y\\in B\\,\\neg R(x,y)$ dan $\\neg(\\exists y\\in B\\,\\forall x\\in A\\,R(x,y))\\iff\\forall y\\in B\\,\\exists x\\in A\\,\\neg R(x,y)$.",
      "proof": [
        "Untuk rumus pertama, $(\\Rightarrow)$ jika tidak benar bahwa setiap $x$ mempunyai saksi, terdapat $a\\in A$ yang tidak mempunyai saksi. Ini berarti tidak ada $b\\in B$ dengan $R(a,b)$ benar, atau setara dengan $\\forall y\\in B\\,\\neg R(a,y)$.",
        "$(\\Leftarrow)$ Jika ada $a\\in A$ dengan $\\forall y\\in B\\,\\neg R(a,y)$, maka tidak terdapat $y$ yang memenuhi $R(a,y)$. Karena itu pernyataan bahwa setiap $x$ mempunyai saksi adalah salah.",
        "Untuk rumus kedua, $(\\Rightarrow)$ jika tidak ada saksi seragam, setiap kandidat $b\\in B$ gagal untuk sekurang-kurangnya satu $a\\in A$. Maka $\\forall y\\in B\\,\\exists x\\in A\\,\\neg R(x,y)$.",
        "$(\\Leftarrow)$ Jika setiap $b\\in B$ mempunyai setidaknya satu $a\\in A$ dengan $\\neg R(a,b)$, tidak ada $b$ yang memenuhi relasi untuk seluruh $a$. Jadi $\\exists y\\in B\\,\\forall x\\in A\\,R(x,y)$ salah. Argumen juga berlaku pada domain kosong sesuai semantik kuantor.",
        "\\square"
      ],
      "explanation": "Negasi membalik setiap kuantor dan menegasikan predikat paling dalam, bukan sekadar menyisipkan tanda negasi di depan relasi."
    },
    {
      "kind": "proposition",
      "title": "Dua Pertukaran Kuantor Sejenis",
      "statement": "Untuk setiap predikat $R(x,y)$ pada $A\\times B$, $\\forall x\\in A\\,\\forall y\\in B\\,R(x,y)\\iff\\forall y\\in B\\,\\forall x\\in A\\,R(x,y)$ dan $\\exists x\\in A\\,\\exists y\\in B\\,R(x,y)\\iff\\exists y\\in B\\,\\exists x\\in A\\,R(x,y)$.",
      "proof": [
        "Untuk universal, $(\\Rightarrow)$ ambil $b\\in B$ sebarang. Hipotesis menyatakan $R(a,b)$ benar bagi setiap $a\\in A$; jadi $\\forall x\\in A\\,R(x,b)$. Karena $b$ sebarang, diperoleh $\\forall y\\in B\\,\\forall x\\in A\\,R(x,y)$.",
        "$(\\Leftarrow)$ mulai dari pernyataan dengan urutan $y$ lalu $x$. Ambil $a\\in A$ dan kemudian $b\\in B$ sebarang; pernyataan tersebut memberi $R(a,b)$. Generalisasi terhadap $b$ dan $a$ menghasilkan urutan semula.",
        "Untuk eksistensial, $(\\Rightarrow)$ terdapat pasangan $(a,b)\\in A\\times B$ yang memenuhi $R(a,b)$. Dengan memilih terlebih dahulu $y=b$, kemudian $x=a$, diperoleh pernyataan dengan urutan terbalik.",
        "$(\\Leftarrow)$ saksi $(b,a)$ pada pernyataan yang ditukar memberikan pasangan $(a,b)$ yang sama pada pernyataan awal. Kedua pertukaran sejenis tidak mengubah kondisi kebenaran.",
        "\\square"
      ],
      "explanation": "Kuantor dengan jenis sama dapat bertukar; kesimpulan ini tidak boleh diperluas ke kuantor dengan jenis berbeda."
    },
    {
      "kind": "proposition",
      "title": "Kuantor Vakum pada Domain Tidak Kosong",
      "statement": "Misalkan $B\\ne\\varnothing$, dan predikat $P(x)$ tidak memuat $y$ sebagai variabel bebas. Untuk setiap $x$, berlaku $(\\exists y\\in B\\,P(x))\\iff P(x)$ dan $(\\forall y\\in B\\,P(x))\\iff P(x)$. Jika $B=\\varnothing$, ekuivalensi tersebut secara umum gagal.",
      "proof": [
        "Ambil $x$ tetap. Jika $P(x)$ benar dan $B\\ne\\varnothing$, pilih $b\\in B$. Karena $P(x)$ tidak bergantung pada $y$, $P(x)$ tetap benar ketika $y=b$, sehingga $\\exists y\\in B\\,P(x)$.",
        "Sebaliknya, jika $\\exists y\\in B\\,P(x)$, terdapat $b\\in B$ dengan $P(x)$ benar; karena $P$ tidak bergantung pada $y$, langsung diperoleh $P(x)$.",
        "Jika $P(x)$ benar, pernyataan tersebut benar untuk setiap pilihan $y\\in B$, sehingga $\\forall y\\in B\\,P(x)$. Jika $\\forall y\\in B\\,P(x)$ dan $B\\ne\\varnothing$, pilih satu $b\\in B$ untuk menyimpulkan $P(x)$.",
        "Untuk menunjukkan syarat tidak kosong diperlukan, ambil $B=\\varnothing$ dan $P(x)$ benar. Maka $\\exists y\\in B\\,P(x)$ salah. Jika $P(x)$ salah, $\\forall y\\in B\\,P(x)$ tetap benar secara vakum. Dengan demikian kedua ekuivalensi dapat gagal.",
        "\\square"
      ],
      "explanation": "Kuantor atas variabel yang tidak muncul dalam predikat tetap berpengaruh bila domainnya kosong."
    },
    {
      "kind": "theorem",
      "title": "Relasi dengan Saksi Unik Menentukan Fungsi",
      "statement": "Misalkan $A,B$ himpunan dan $R\\subseteq A\\times B$ memenuhi $\\forall x\\in A\\,\\exists!y\\in B\\,R(x,y)$. Maka terdapat tepat satu fungsi $f:A\\to B$ sehingga $R(x,f(x))$ untuk setiap $x\\in A$. Sebaliknya, setiap fungsi $f:A\\to B$ menentukan relasi $R_f(x,y)\\iff y=f(x)$ yang mempunyai saksi unik untuk setiap $x\\in A$.",
      "proof": [
        "Untuk setiap $a\\in A$, hipotesis memberi tepat satu $b\\in B$ dengan $R(a,b)$. Definisikan himpunan pasangan $G=\\{(a,b)\\in A\\times B:R(a,b)\\}$. Setiap $a$ muncul sebagai komponen pertama tepat satu pasangan di $G$.",
        "Menurut definisi fungsi sebagai relasi yang total dan bernilai tunggal, $G$ adalah grafik sebuah fungsi $f:A\\to B$. Dengan konstruksi, $R(a,f(a))$ benar untuk semua $a\\in A$. Tidak diperlukan pemilihan arbitrer karena saksi setiap $a$ unik.",
        "Untuk ketunggalan, misalkan $g:A\\to B$ juga memenuhi $R(a,g(a))$ untuk setiap $a$. Keunikan saksi pada setiap $a$ memaksa $g(a)=f(a)$. Karena dua fungsi sama jika nilainya sama pada seluruh domain, diperoleh $g=f$.",
        "Sebaliknya, jika $f:A\\to B$ fungsi, bagi setiap $a\\in A$ terdapat $b=f(a)\\in B$ dengan $R_f(a,b)$. Jika $R_f(a,c)$ juga benar, definisi relasi memberi $c=f(a)=b$. Jadi saksi tersebut unik.",
        "\\square"
      ],
      "explanation": "Relasi total dan bernilai tunggal tepat merupakan grafik fungsi; pernyataan ini lebih kuat daripada sekadar keberadaan saksi lokal."
    },
    {
      "kind": "proposition",
      "title": "Sifat Diagonal Memberi Saksi Lokal",
      "statement": "Misalkan $A$ himpunan dan $R\\subseteq A\\times A$. Jika $\\forall x\\in A\\,R(x,x)$, maka $\\forall x\\in A\\,\\exists y\\in A\\,R(x,y)$. Implikasi balik salah secara umum, bahkan untuk $A$ berhingga tidak kosong.",
      "proof": [
        "Andaikan $R(x,x)$ benar untuk semua $x\\in A$. Ambil $a\\in A$ sebarang. Karena $R(a,a)$ benar, pilihan $y=a$ adalah saksi bagi $x=a$.",
        "Argumen tersebut dapat diterapkan pada setiap $a\\in A$, sehingga $\\forall x\\in A\\,\\exists y\\in A\\,R(x,y)$. Jika $A$ kosong, kedua pernyataan universal benar secara vakum.",
        "Untuk arah balik, ambil $A=\\{1,2\\}$ dan definisikan $R(x,y)$ oleh $x\\ne y$. Setiap $x$ mempunyai saksi, yaitu unsur lain dalam $A$, sehingga $\\forall x\\,\\exists y\\,R(x,y)$ benar.",
        "Namun $R(1,1)$ dan $R(2,2)$ keduanya salah. Maka $\\forall x\\,R(x,x)$ salah. Ini menunjukkan bahwa keberadaan saksi tidak mengharuskan saksi tersebut sama dengan x.",
        "\\square"
      ],
      "explanation": "Saksi diagonal adalah satu pilihan khusus; ia tidak selalu tersedia ketika saksi lokal lain tersedia."
    },
    {
      "kind": "theorem",
      "title": "Distributivitas Kuantor yang Sah",
      "statement": "Untuk predikat $P,Q$ pada himpunan $A$, berlaku $\\forall x\\in A\\,[P(x)\\land Q(x)]\\iff(\\forall x\\in A\\,P(x))\\land(\\forall x\\in A\\,Q(x))$ dan $\\exists x\\in A\\,[P(x)\\lor Q(x)]\\iff(\\exists x\\in A\\,P(x))\\lor(\\exists x\\in A\\,Q(x))$.",
      "proof": [
        "Untuk ekuivalensi pertama, $(\\Rightarrow)$ setiap $a\\in A$ memenuhi kedua predikat, sehingga masing-masing predikat benar untuk semua $a$. Maka dua pernyataan universal di ruas kanan benar.",
        "$(\\Leftarrow)$ jika $P(a)$ dan $Q(a)$ benar untuk setiap $a\\in A$, konjungsi $P(a)\\land Q(a)$ juga benar untuk setiap $a$. Karena itu pernyataan universal terhadap konjungsi benar.",
        "Untuk ekuivalensi kedua, $(\\Rightarrow)$ ada $a\\in A$ dengan $P(a)\\lor Q(a)$ benar. Salah satu dari $P(a)$ atau $Q(a)$ benar; maka sekurang-kurangnya satu pernyataan eksistensial di ruas kanan benar.",
        "$(\\Leftarrow)$ jika ada saksi bagi $P$ atau ada saksi bagi $Q$, saksi yang sama memenuhi $P(x)\\lor Q(x)$. Maka pernyataan eksistensial di ruas kiri benar. Semua argumen tetap berlaku ketika $A$ kosong.",
        "\\square"
      ],
      "explanation": "Bentuk mirip dengan menukar konjungsi dan eksistensial tidak selalu ekuivalen: dua saksi berbeda tidak mesti menjadi satu saksi bersama."
    }
  ],
  "examples": [
    {
      "title": "Membaca Kuantor dan Lingkup",
      "problem": "Pada $A=\\{1,2,3\\}$, tentukan nilai kebenaran $\\forall x\\in A\\,(x\\ge1)$ dan $\\exists x\\in A\\,(x^2=4)$; jelaskan apa yang berubah jika domain kosong.",
      "solution": [
        "Setiap unsur 1, 2, dan 3 memenuhi x ≥ 1; maka pernyataan universal benar.",
        "Untuk persamaan x² = 4, unsur x = 2 menjadi saksi eksistensial sehingga pernyataan kedua benar.",
        "Pada domain kosong, tidak ada unsur yang melanggar universal sehingga universal benar secara vakum, tetapi tidak ada saksi eksistensial sehingga eksistensial salah.",
        "Jadi nilai kebenaran bergantung pada domain dan lingkup predikat, bukan hanya bentuk simbol."
      ],
      "forDefinition": "Kuantor Terbatas dan Lingkup Pernyataan"
    },
    {
      "title": "Matriks Relasi Berukuran Tiga",
      "problem": "Misalkan $A=B=\\{1,2,3\\}$ dan $R(x,y)\\iff x\\le y$. Tuliskan matriks kebenaran dan tentukan baris serta kolom yang seluruhnya benar.",
      "solution": [
        "Baris $x=1$ adalah $(1,1,1)$, baris $x=2$ adalah $(0,1,1)$, dan baris $x=3$ adalah $(0,0,1)$.",
        "Setiap baris mempunyai setidaknya satu angka 1; jadi setiap x memiliki saksi y.",
        "Kolom y = 3 terdiri atas (1,1,1); artinya y = 3 adalah saksi seragam bagi seluruh x.",
        "Baris pertama seluruhnya benar, tetapi hal itu berkaitan dengan kuantor yang urutannya ∃x∀y, bukan ∃y∀x."
      ],
      "forDefinition": "Relasi Biner dan Matriks Kebenaran"
    },
    {
      "title": "Saksi Lokal Tanpa Saksi Seragam",
      "problem": "Untuk $A=B=\\{1,2,3\\}$ dan $R(x,y)\\iff x=y$, tentukan kebenaran $\\forall x\\,\\exists y\\,R(x,y)$ dan $\\exists y\\,\\forall x\\,R(x,y)$.",
      "solution": [
        "Untuk x = 1 pilih y = 1; untuk x = 2 pilih y = 2; untuk x = 3 pilih y = 3. Maka pernyataan pertama benar.",
        "Jika pernyataan kedua benar, satu y harus sama dengan 1, 2, dan 3 sekaligus.",
        "Hal itu mustahil karena 1, 2, dan 3 berbeda; jadi pernyataan kedua salah.",
        "Perbedaan ini menunjukkan ketergantungan saksi terhadap x tidak boleh dihilangkan ketika kuantor dipertukarkan."
      ],
      "forDefinition": "Saksi Lokal dan Saksi Seragam"
    },
    {
      "title": "Fungsi Saksi yang Ditentukan Relasi",
      "problem": "Pada $A=\\{0,1,2\\}$ dan $B=\\{1,2,3\\}$, definisikan $R(x,y)\\iff y=x+1$. Tentukan fungsi saksi dan periksa keunikannya.",
      "solution": [
        "Untuk setiap x di A, bilangan x + 1 berada di B dan memenuhi relasi, sehingga saksi ada.",
        "Jika y dan z sama-sama memenuhi R(x,·), maka y = x + 1 = z; jadi saksi tunggal.",
        "Fungsi saksi yang terdefinisi adalah f(0) = 1, f(1) = 2, dan f(2) = 3.",
        "Grafik fungsi adalah himpunan pasangan {(0,1),(1,2),(2,3)} dan tidak memuat dua pasangan berbeda dengan komponen pertama sama."
      ],
      "forDefinition": "Saksi Unik dan Fungsi Saksi"
    },
    {
      "title": "Dua Urutan pada Relasi Ketaksamaan",
      "problem": "Pada $A=B=\\{1,2,3\\}$ dan $R(x,y)\\iff x<y$, periksa empat pernyataan $\\forall x\\exists yR$, $\\exists y\\forall xR$, $\\exists x\\forall yR$, dan $\\forall y\\exists xR$.",
      "solution": [
        "$\\forall x\\exists yR$ salah karena ketika $x=3$ tidak ada $y\\in B$ yang lebih besar dari 3.",
        "$\\exists y\\forall xR$ salah karena setiap $y\\le3$ gagal terhadap $x=3$.",
        "$\\exists x\\forall yR$ salah karena setiap $x\\ge1$ gagal terhadap $y=1$.",
        "$\\forall y\\exists xR$ salah karena $y=1$ tidak mempunyai $x\\in A$ dengan $x<1$. Empat pernyataan dapat sama-sama salah karena domain terbatas."
      ]
    },
    {
      "title": "Menegasikan Kebutuhan Saksi",
      "problem": "Negasikan pernyataan $\\forall x\\in\\mathbb R\\,\\exists y\\in\\mathbb R\\,(y^2>x)$ dan tentukan nilai kebenaran pernyataan awal.",
      "solution": [
        "Negasinya ialah $\\exists x\\in\\mathbb R\\,\\forall y\\in\\mathbb R\\,(y^2\\le x)$.",
        "Untuk setiap $x\\in\\mathbb R$, pilih $y=|x|+1$. Maka $y^2=(|x|+1)^2>|x|\\ge x$ bila $x\\ge0$, dan juga $y^2>x$ bila $x<0$.",
        "Jadi untuk setiap x terdapat saksi y; pernyataan awal benar dan negasinya salah.",
        "Pilihan y bergantung pada x; tidak ada satu y yang memenuhi y² > x untuk semua bilangan real x."
      ]
    },
    {
      "title": "Domain Kosong Mengubah Kuantor Vakum",
      "problem": "Ambil $A=\\{1\\}$, $B=\\varnothing$, dan $R(x,y)$ predikat selalu benar jika pasangan tersedia. Tentukan $\\forall x\\in A\\exists y\\in B R(x,y)$ dan $\\exists y\\in B\\forall x\\in A R(x,y)$.",
      "solution": [
        "Untuk x = 1 tidak ada satu pun y dalam B; pernyataan eksistensial bagian dalam salah.",
        "Karena A tidak kosong dan predikat bagian dalam salah pada x = 1, pernyataan universal pertama salah.",
        "Pernyataan kedua juga salah karena kuantor eksistensial terluar berjalan pada himpunan kosong.",
        "Contoh ini berbeda dari A kosong: jika A kosong dan B tidak kosong, pernyataan pertama benar secara vakum dan pernyataan kedua juga benar."
      ]
    },
    {
      "title": "Dua Saksi Berbeda Tidak Dapat Digabung",
      "problem": "Pada $A=\\{1,2\\}$, tetapkan $P(x)\\iff x=1$ dan $Q(x)\\iff x=2$. Periksa $(\\exists xP(x))\\land(\\exists xQ(x))$ dibandingkan dengan $\\exists x(P(x)\\land Q(x))$.",
      "solution": [
        "Pernyataan pertama benar karena x = 1 menjadi saksi P dan x = 2 menjadi saksi Q.",
        "Tidak ada x yang sekaligus sama dengan 1 dan 2; karena itu P(x) ∧ Q(x) selalu salah.",
        "Jadi pernyataan kedua salah meskipun masing-masing predikat memiliki saksi.",
        "Ini menunjukkan bahwa konjungsi dua eksistensial tidak dapat disatukan tanpa syarat adanya saksi bersama."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "Pada $A=B=\\{1,2,3,4\\}$ dan $R(x,y)\\iff x\\mid y$, tentukan kebenaran $\\forall x\\exists yR$, $\\exists y\\forall xR$, dan $\\exists x\\forall yR$.",
      "hint": "Periksa saksi y=x untuk tiap x, lalu uji kandidat kolom seragam.",
      "answer": "1. Setiap x membagi dirinya sendiri, sehingga pilihan y = x memberi saksi bagi semua x. Jadi ∀x∃y R benar.\n\n2. Untuk ∃y∀x R, y harus habis dibagi 1, 2, 3, dan 4 sekaligus. Tidak ada y dalam {1,2,3,4} yang habis dibagi 3 dan 4, sehingga pernyataan salah.\n\n3. Untuk ∃x∀y R, ambil x = 1. Karena 1 membagi semua y dalam B, pernyataan benar.\n\n4. Perhatikan bahwa saksi bagi pernyataan pertama dapat berubah, sedangkan pernyataan kedua memerlukan satu y tetap dan pernyataan ketiga satu x tetap.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Tunjukkan bahwa $\\forall x\\in\\mathbb Z\\,\\exists y\\in\\mathbb Z\\,(x+y=0)$ benar, tetapi $\\exists y\\in\\mathbb Z\\,\\forall x\\in\\mathbb Z\\,(x+y=0)$ salah.",
      "hint": "Gunakan invers aditif, kemudian substitusikan dua nilai x yang berbeda.",
      "answer": "1. Ambil bilangan bulat x sebarang. Pilih y = −x, yang juga bilangan bulat. Persamaan x + y = 0 terpenuhi; jadi ∀x∃y benar.\n\n2. Andaikan terdapat y tetap yang memenuhi x + y = 0 untuk semua x. Dengan x = 0 diperoleh y = 0.\n\n3. Memasukkan x = 1 ke persamaan yang sama kemudian memberi 1 + 0 = 0, sebuah kontradiksi.\n\n4. Karena asumsi saksi seragam menghasilkan kontradiksi, ∃y∀x salah. Bukti ini tidak sekadar membandingkan dua contoh; ia mengeliminasi seluruh kemungkinan saksi seragam.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Negasikan $\\forall n\\in\\mathbb N\\,\\exists m\\in\\mathbb N\\,(m>n)$ dan buktikan pernyataan awal untuk $\\mathbb N=\\{1,2,\\ldots\\}$.",
      "hint": "Balik kedua kuantor dan ubah tanda > menjadi ≤.",
      "answer": "1. Negasi formalnya ialah ∃n∈N ∀m∈N (m≤n). Artinya terdapat bilangan asli terbesar.\n\n2. Ambil n∈N sebarang dan pilih m=n+1. Karena n+1 adalah bilangan asli dan n+1>n, saksi m tersedia.\n\n3. Karena n sebarang, pernyataan universal–eksistensial benar dan negasinya salah.\n\n4. Alasan ini memperlihatkan sifat tak berbatas ke atas dari N; mengganti N dengan himpunan hingga akan mengubah hasilnya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk $A=B=\\{1,2,3\\}$, tentukan matriks $R(x,y)\\iff x+y=4$, lalu periksa semua empat urutan kuantor campuran.",
      "hint": "Tuliskan satu angka 1 pada setiap pasangan yang jumlahnya 4.",
      "answer": "1. Pasangan benar adalah (1,3), (2,2), dan (3,1), sehingga matriks memiliki satu angka 1 pada tiap baris dan tiap kolom.\n\n2. Setiap baris mempunyai angka 1; akibatnya ∀x∃y R benar. Setiap kolom juga mempunyai angka 1; akibatnya ∀y∃x R benar.\n\n3. Tidak ada kolom yang semua elemennya 1, sehingga ∃y∀x R salah. Tidak ada baris yang seluruhnya 1, sehingga ∃x∀y R salah.\n\n4. Contoh ini membuktikan bahwa pemenuhan kedua pernyataan lokal sekaligus tetap tidak menjamin keberadaan saksi seragam di salah satu arah.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa jika $A,B$ tidak kosong dan $R(x,y)$ tidak bergantung pada $y$, maka $\\forall x\\in A\\exists y\\in B R(x,y)\\iff\\forall x\\in A R(x)$. Jelaskan kegagalan bila $B=\\varnothing$.",
      "hint": "Pilih satu unsur B pada arah balik dan gunakan ketidakbergantungan predikat.",
      "answer": "1. Untuk arah maju, ambil x sebarang. Ada y dengan R(x,y); karena predikat tidak bergantung pada y, ini berarti R(x). Generalisasi memberi ∀x R(x).\n\n2. Untuk arah balik, pilih satu b∈B karena B tidak kosong. Jika ∀x R(x), maka bagi setiap x pilihan y=b membuat R(x,y) benar.\n\n3. Jadi kedua arah terbukti di bawah hipotesis B tidak kosong.\n\n4. Jika B kosong dan A={1} dengan R(1) benar, pernyataan ∀xR(x) benar, tetapi ∀x∃y∈B R(x,y) salah karena tidak ada saksi. Syarat tidak kosong memang diperlukan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Misalkan $A=\\{1,2,3\\}$ dan $R(x,y)\\iff y=x^2$ pada $B=\\{1,4,9\\}$. Buktikan relasi menentukan fungsi unik dan periksa apakah fungsi itu surjektif.",
      "hint": "Tentukan satu-satunya y untuk setiap x, lalu hitung citra.",
      "answer": "1. Untuk x=1,2,3, berturut-turut nilai x² adalah 1,4,9 yang semuanya berada dalam B. Dengan demikian setiap x memiliki saksi.\n\n2. Jika y dan z sama-sama memenuhi y=x² dan z=x², maka y=z. Keunikan saksi terbukti untuk setiap x.\n\n3. Fungsi yang ditentukan relasi ialah f(1)=1, f(2)=4, f(3)=9. Karena setiap unsur B muncul sebagai citra, fungsi tersebut surjektif.\n\n4. Relasi juga injektif pada domain ini sebab kuadrat tiga bilangan asli berbeda tetap berbeda. Namun injektivitas bukan syarat bagi relasi untuk menentukan fungsi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Carilah contoh relasi pada himpunan tiga unsur yang memenuhi $\\forall x\\exists yR(x,y)$ tetapi gagal memenuhi $\\forall y\\exists xR(x,y)$. Jelaskan menggunakan matriks.",
      "hint": "Bangun matriks dengan setiap baris memiliki angka 1 tetapi satu kolom seluruhnya 0.",
      "answer": "1. Ambil A=B={1,2,3} dan definisikan R(x,y) benar tepat ketika y=1. Matriksnya mempunyai kolom pertama (1,1,1) dan kolom kedua serta ketiga seluruhnya 0.\n\n2. Setiap baris mempunyai angka 1 pada kolom y=1; jadi ∀x∃yR benar, bahkan saksi y=1 bersifat seragam.\n\n3. Untuk y=2 tidak ada x dengan R(x,2), sehingga ∀y∃xR salah. Hal yang sama berlaku untuk y=3.\n\n4. Perbedaan ini muncul karena kuantor pada pernyataan kedua menguji keberadaan entri benar di setiap kolom, bukan setiap baris.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Tentukan apakah $\\forall x(P(x)\\lor Q(x))$ ekuivalen dengan $(\\forall xP(x))\\lor(\\forall xQ(x))$. Jika tidak, beri kontra-contoh dan buktikan satu arah yang selalu benar.",
      "hint": "Gunakan domain dua unsur dengan P dan Q benar pada unsur berbeda.",
      "answer": "1. Ambil A={1,2}, P(x) benar hanya untuk x=1, dan Q(x) benar hanya untuk x=2. Untuk setiap x, salah satu dari P(x) atau Q(x) benar; maka ∀x(P∨Q) benar.\n\n2. Namun ∀xP salah karena P(2) salah, dan ∀xQ salah karena Q(1) salah. Jadi disjungsi dua pernyataan universal salah, sehingga ekuivalensi tidak berlaku.\n\n3. Sebaliknya, jika ∀xP benar, maka P(x)∨Q(x) benar untuk setiap x; demikian juga jika ∀xQ benar. Oleh sebab itu (∀P)∨(∀Q) selalu mengakibatkan ∀(P∨Q).\n\n4. Contoh tandingan menunjukkan arah balik gagal karena alasan kebenaran disjungsi dapat berganti dari satu unsur ke unsur lain.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
