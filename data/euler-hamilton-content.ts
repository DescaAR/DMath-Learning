import type { BookLessonContent } from "@/data/book-content-types";

/** Penelusuran sisi dan simpul: pembuktian Euler, penghalang Hamilton, dan syarat Ore. */
export const eulerHamiltonContent:BookLessonContent={
  "intro": [
    "Sirkuit Euler dan siklus Hamilton sama-sama tampak sebagai perjalanan yang kembali ke titik awal, tetapi objek yang harus dilalui berbeda. Perjalanan Euler menggunakan setiap sisi tepat sekali, sedangkan siklus Hamilton mengunjungi setiap simpul tepat sekali sebelum kembali. Sebuah graf dapat memiliki salah satunya, keduanya, atau tidak keduanya; pemeriksaan derajat untuk masalah Euler tidak boleh dipakai sebagai kriteria cukup untuk masalah Hamilton.",
    "Kita bekerja dengan graf takberarah hingga tanpa gelang, kecuali ketika bukti sementara menambahkan satu sisi paralel yang diberi label berbeda. Derajat simpul dihitung dengan banyak sisi yang menempel. Pada persoalan Euler, simpul terisolasi tidak menghalangi penelusuran semua sisi, sedangkan siklus Hamilton harus mengunjungi seluruh simpul. Perbedaan kuantor ini menentukan hipotesis keterhubungan yang tepat.",
    "Pembahasan bergerak dari penelusuran sisi dan paritas derajat menuju konstruksi sirkuit Euler, karakterisasi jejak Euler, penghalang siklus Hamilton, serta syarat cukup Ore. Setiap kriteria diperiksa terhadap contoh tandingan agar tidak mengubah syarat perlu menjadi syarat cukup. Rujukan: J. A. Bondy dan U. S. R. Murty, Graph Theory (Springer, 2008), dan R. Diestel, Graph Theory, edisi ke-5 (Springer, 2017)."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Jejak dan Jejak Tertutup",
      "statement": "Jejak pada graf $G=(V,E)$ ialah urutan $v_0,e_1,v_1,\\ldots,e_k,v_k$ dengan $e_i=v_{i-1}v_i$ dan semua sisi $e_1,\\ldots,e_k$ berbeda. Jejak disebut tertutup jika $v_k=v_0$. Simpul boleh muncul berulang; syarat tidak berulang dikenakan pada sisi. Lintasan adalah jejak dengan semua simpul berbeda."
    },
    {
      "kind": "definition",
      "title": "Jejak Euler dan Sirkuit Euler",
      "statement": "Untuk graf hingga yang mempunyai sedikitnya satu sisi, jejak Euler ialah jejak yang menggunakan setiap sisi graf tepat sekali. Sirkuit Euler ialah jejak Euler tertutup. Graf disebut Eulerian apabila memiliki sirkuit Euler. Simpul terisolasi tidak perlu dilalui oleh jejak Euler karena tidak ada sisi yang menempel padanya."
    },
    {
      "kind": "definition",
      "title": "Lintasan Hamilton dan Siklus Hamilton",
      "statement": "Lintasan Hamilton ialah lintasan yang mengunjungi setiap simpul graf tepat sekali. Siklus Hamilton pada graf sederhana dengan $|V|\\ge3$ ialah siklus yang melalui setiap simpul tepat sekali, selain pengulangan simpul awal pada akhir. Graf disebut Hamiltonian apabila mempunyai siklus Hamilton. Syarat ini mengenai simpul, bukan kewajiban memakai seluruh sisi."
    },
    {
      "kind": "definition",
      "title": "Simpul Pemutus",
      "statement": "Pada graf terhubung $G$, simpul $v$ disebut simpul pemutus apabila graf $G-v$, yang diperoleh dengan menghapus $v$ dan semua sisi yang menempel padanya, mempunyai lebih banyak komponen terhubung daripada $G$. Keberadaan simpul pemutus merupakan penghalang bagi siklus Hamilton pada graf dengan sedikitnya tiga simpul."
    },
    {
      "kind": "lemma",
      "title": "Lemma Jabat Tangan",
      "statement": "Untuk setiap graf takberarah hingga tanpa gelang, $\\sum_{v\\in V(G)}\\deg(v)=2|E(G)|$. Akibatnya, banyak simpul berderajat ganjil selalu genap.",
      "proof": [
        "Setiap sisi $uv$ menempel pada tepat dua simpul, yaitu $u$ dan $v$. Ketika derajat seluruh simpul dijumlahkan, setiap sisi dihitung sekali pada masing-masing ujungnya. Dengan menghitung pasangan insidensi (simpul, sisi) melalui sisi maupun melalui simpul, kedua cara memberi $\\sum_v\\deg(v)=2|E(G)|$.",
        "Pisahkan penjumlahan derajat menjadi derajat genap dan derajat ganjil. Jumlah seluruhnya genap, demikian pula jumlah derajat genap. Jumlah bilangan ganjil berparitas sama dengan banyak sukunya, sehingga banyak simpul berderajat ganjil harus genap. Pernyataan ini berlaku juga bagi graf yang tidak terhubung. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Paritas Ujung Jejak Euler",
      "statement": "Jika graf hingga mempunyai jejak Euler dari $s$ ke $t$ dengan $s\\ne t$, maka tepat $s$ dan $t$ berderajat ganjil. Jika graf mempunyai sirkuit Euler, semua simpul berderajat genap.",
      "proof": [
        "Dalam jejak yang menggunakan setiap sisi tepat sekali, setiap kunjungan ke simpul dalam yang bukan titik awal atau akhir memasangkan satu sisi masuk dengan satu sisi keluar. Karena tidak ada sisi yang dipakai ulang, semua sisi yang menempel pada simpul tersebut terbagi menjadi pasangan, sehingga derajatnya genap.",
        "Jika $s\\ne t$, titik awal memiliki satu sisi keluar yang tidak dipasangkan dengan sisi masuk, sedangkan titik akhir memiliki satu sisi masuk yang tidak dipasangkan dengan sisi keluar. Derajat kedua simpul itu ganjil. Pada jejak tertutup, sisi keluar pertama dan sisi masuk terakhir juga berpasangan, sehingga setiap derajat genap. Tidak ada simpul ganjil lain karena seluruh sisi telah digunakan. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kriteria Sirkuit Euler",
      "statement": "Misalkan $G$ graf takberarah hingga dengan $E(G)\\ne\\varnothing$. Graf $G$ mempunyai sirkuit Euler jika dan hanya jika semua simpul berderajat positif berada dalam satu komponen terhubung dan setiap simpul mempunyai derajat genap.",
      "proof": [
        "Arah $(\\Rightarrow)$. Jika ada sirkuit Euler, setiap sisi berada pada satu perjalanan tertutup yang sama. Semua ujung sisi karena itu terhubung melalui bagian perjalanan tersebut; semua simpul berderajat positif berada dalam satu komponen. Proposisi paritas menunjukkan setiap simpul mempunyai derajat genap.",
        "Arah $(\\Leftarrow)$. Pilih simpul $v$ berderajat positif dan telusuri sisi-sisi yang belum dipakai tanpa mengulang sisi. Selama penelusuran berada pada simpul $w\\ne v$, banyak sisi yang sudah dipakai pada $w$ terdiri atas pasangan masuk-keluar ditambah satu sisi masuk terakhir. Karena $\\deg(w)$ genap, masih ada sisi belum dipakai untuk keluar. Oleh sebab itu jejak maksimal yang dimulai di $v$ tidak dapat berhenti pada simpul selain $v$; diperoleh jejak tertutup $C$.",
        "Jika masih ada sisi yang belum dipakai, keterhubungan semua simpul berderajat positif menjamin ada simpul $u$ pada $C$ yang menempel pada sisi belum dipakai: ambil lintasan dari simpul pada $C$ menuju ujung sisi tersisa dan perhatikan sisi pertama yang meninggalkan himpunan simpul yang telah dicapai oleh $C$. Pada subgraf sisi belum dipakai, setiap simpul tetap berderajat genap karena $C$ menggunakan pasangan sisi pada setiap simpul. Dengan argumen yang sama, dari $u$ dapat dibangun jejak tertutup baru menggunakan hanya sisi belum dipakai.",
        "Sisipkan jejak tertutup baru itu pada kemunculan $u$ dalam $C$. Hasilnya tetap jejak tertutup dan memakai lebih banyak sisi tanpa pengulangan. Banyak sisi hingga, sehingga penyisipan berulang berakhir setelah seluruh sisi digunakan. Diperoleh sirkuit Euler. Kedua arah terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kriteria Jejak Euler Terbuka",
      "statement": "Misalkan $G$ graf takberarah hingga dengan sedikitnya satu sisi. Graf $G$ mempunyai jejak Euler dengan ujung berbeda jika dan hanya jika semua simpul berderajat positif berada dalam satu komponen terhubung dan tepat dua simpul berderajat ganjil.",
      "proof": [
        "Arah $(\\Rightarrow)$. Semua sisi dipakai dalam satu jejak, sehingga ujung-ujungnya berada dalam komponen yang sama. Menurut proposisi paritas, tepat kedua ujung jejak berderajat ganjil.",
        "Arah $(\\Leftarrow)$. Misalkan simpul ganjil tepat $s$ dan $t$. Tambahkan satu sisi baru berlabel $e^*$ antara $s$ dan $t$; jika sudah ada sisi $st$, perlakukan sisi tambahan sebagai sisi paralel yang berbeda. Derajat $s$ dan $t$ bertambah satu sehingga menjadi genap; semua derajat lainnya tetap genap. Komponen yang memuat sisi tetap terhubung.",
        "Konstruksi pada teorema sirkuit Euler berlaku pula untuk multigraf dengan sisi berlabel, sebab pembuktiannya hanya memakai insidensi dan paritas. Dengan demikian graf tambahan mempunyai sirkuit Euler yang memuat $e^*$ tepat sekali. Putar penulisan sirkuit agar $e^*$ menjadi sisi terakhir, lalu hapus sisi itu. Sisa urutan merupakan jejak dari $t$ ke $s$ yang menggunakan setiap sisi asli tepat sekali. Kedua arah terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Penghalang Siklus Hamilton",
      "statement": "Jika graf sederhana $G$ dengan $|V(G)|\\ge3$ mempunyai siklus Hamilton, maka setiap simpul berderajat sedikitnya dua dan $G$ tidak mempunyai simpul pemutus. Kebalikan pernyataan ini tidak selalu benar.",
      "proof": [
        "Misalkan $C=v_1v_2\\cdots v_nv_1$ adalah siklus Hamilton. Pada siklus tersebut, setiap $v_i$ bertetangga dengan dua simpul berbeda, yaitu pendahulu dan penerusnya, sehingga $\\deg_G(v_i)\\ge2$.",
        "Ambil sebarang simpul $v_i$. Menghapus $v_i$ dari siklus $C$ menyisakan lintasan yang memuat seluruh $n-1$ simpul lain. Lintasan itu merupakan subgraf dari $G-v_i$, sehingga $G-v_i$ terhubung. Tidak ada simpul pemutus. Sebaliknya, graf bipartit lengkap $K_{2,3}$ tidak memiliki simpul pemutus dan semua derajat sedikitnya dua, tetapi tidak mempunyai siklus Hamilton: setiap siklus pada graf bipartit bergantian antara dua kelas, sehingga memuat sama banyak simpul dari kedua kelas; ukuran kelasnya 2 dan 3. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Syarat Cukup Ore",
      "statement": "Misalkan $G$ graf sederhana dengan $n=|V(G)|\\ge3$. Jika $\\deg(u)+\\deg(v)\\ge n$ untuk setiap pasangan simpul berbeda yang tidak bertetangga, maka $G$ mempunyai siklus Hamilton.",
      "proof": [
        "Pertama, buktikan lemma penambahan sisi: jika $u,v$ tidak bertetangga dan $\\deg(u)+\\deg(v)\\ge n$, maka $G$ Hamiltonian jika dan hanya jika $G+uv$ Hamiltonian. Arah maju jelas karena penambahan sisi tidak menghapus siklus. Untuk arah balik, ambil siklus Hamilton pada $G+uv$. Jika tidak menggunakan sisi baru, siklus itu sudah ada di $G$. Jika menggunakannya, hapus $uv$ sehingga tersisa lintasan Hamilton $v_1=u,v_2,\\ldots,v_n=v$ dalam $G$.",
        "Untuk setiap $i=1,\\ldots,n-1$, periksa dua kemungkinan sisi $uv_{i+1}$ dan $vv_i$. Jika tidak ada indeks dengan kedua sisi itu sekaligus, setiap indeks menyumbang paling banyak satu ke jumlah $\\deg(u)+\\deg(v)$. Semua tetangga $u$ tercakup oleh daftar $v_{i+1}$ dan semua tetangga $v$ tercakup oleh daftar $v_i$, sebab $uv\\notin E(G)$. Akibatnya $\\deg(u)+\\deg(v)\\le n-1$, bertentangan dengan hipotesis. Ada indeks $i$ dengan kedua sisi tersebut.",
        "Sisi $uv_{i+1}$ dan $vv_i$ membentuk siklus $u,v_{i+1},v_{i+2},\\ldots,v_n=v,v_i,v_{i-1},\\ldots,v_1=u$ yang menggunakan seluruh simpul tepat sekali. Ini membuktikan lemma penambahan sisi.",
        "Sekarang tambahkan satu demi satu semua sisi yang belum ada pada $G$. Pada setiap tahap, derajat tidak berkurang, sehingga setiap pasangan yang masih tidak bertetangga tetap mempunyai jumlah derajat sedikitnya $n$. Lemma memastikan sifat Hamiltonian tidak berubah setiap kali sisi ditambahkan. Graf akhir adalah $K_n$, yang mempunyai siklus Hamilton untuk $n\\ge3$. Dengan menerapkan ekuivalensi lemma secara mundur, graf awal $G$ juga Hamiltonian. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Jejak pada Segitiga",
      "forDefinition": "Jejak dan Jejak Tertutup",
      "problem": "Pada segitiga dengan sisi $AB,BC,CA$, tentukan sebuah jejak tertutup dan periksa apakah urutannya juga lintasan.",
      "solution": [
        "Diketahui graf mempunyai simpul $A,B,C$ dan tiga sisi berbeda. Urutan $A,AB,B,BC,C,CA,A$ menggunakan setiap sisi tepat sekali dan berakhir pada simpul awal. Berdasarkan definisi, urutan tersebut adalah jejak tertutup.",
        "Urutan simpul memuat $A$ dua kali karena awal dan akhir sama. Oleh sebab itu, jika lintasan didefinisikan sebagai jejak dengan semua simpul berbeda, urutan lengkap tersebut bukan lintasan. Urutan $A,B,C$ tanpa sisi penutup merupakan lintasan. Perbedaan ini penting ketika membedakan sirkuit dan lintasan Hamilton.",
        "Pemeriksaan langsung menunjukkan tiga sisi graf dipakai, tidak ada sisi berulang, dan derajat semua simpul sama dengan dua. Dengan demikian jejak tertutup tersebut sekaligus sirkuit Euler."
      ],
      "conclusion": "Urutan A–B–C–A adalah jejak tertutup dan sirkuit Euler, bukan lintasan dengan semua simpul berbeda."
    },
    {
      "title": "Contoh Jejak Euler pada Graf Lintasan",
      "forDefinition": "Jejak Euler dan Sirkuit Euler",
      "problem": "Graf $P_4$ memiliki sisi $12,23,34$. Tentukan jejak Euler dan buktikan tidak ada sirkuit Euler.",
      "solution": [
        "Graf mempunyai simpul $1,2,3,4$ dan tiga sisi. Derajatnya berturut-turut $(1,2,2,1)$; semua simpul berderajat positif terhubung dan tepat dua simpul, yaitu 1 dan 4, berderajat ganjil.",
        "Urutan $1,2,3,4$ memakai sisi $12,23,34$ masing-masing sekali. Karena semua sisi tercakup, urutan tersebut merupakan jejak Euler terbuka dengan ujung 1 dan 4. Arah sebaliknya $4,3,2,1$ juga sah.",
        "Sirkuit Euler akan mengharuskan semua derajat genap berdasarkan proposisi paritas. Derajat 1 pada dua ujung melanggar syarat perlu tersebut, sehingga tidak ada sirkuit Euler. Kesimpulan ini tidak bergantung pada pilihan titik awal."
      ],
      "conclusion": "P4 memiliki jejak Euler dari 1 ke 4, tetapi tidak memiliki sirkuit Euler."
    },
    {
      "title": "Contoh Siklus Hamilton pada Graf Lengkap",
      "forDefinition": "Lintasan Hamilton dan Siklus Hamilton",
      "problem": "Pada $K_4$, tentukan satu siklus Hamilton, lalu periksa apakah ada jejak Euler.",
      "solution": [
        "Graf lengkap $K_4$ mempunyai empat simpul $1,2,3,4$ dan semua enam sisi antarpasangan. Urutan $1,2,3,4,1$ merupakan siklus karena keempat sisi yang diperlukan ada dan simpul 1,2,3,4 muncul masing-masing tepat sekali sebelum kembali.",
        "Setiap simpul $K_4$ bertetangga dengan tiga simpul lain, sehingga semua empat simpul berderajat tiga. Lemma jabat tangan konsisten dengan jumlah derajat $4(3)=12=2(6)$.",
        "Jejak Euler terbuka mensyaratkan tepat dua simpul ganjil dan sirkuit Euler mensyaratkan tidak ada simpul ganjil. Di sini terdapat empat simpul ganjil, sehingga tidak ada jejak Euler yang mencakup seluruh sisi. Siklus Hamilton yang ditemukan hanya memakai empat dari enam sisi."
      ],
      "conclusion": "K4 Hamiltonian, tetapi tidak mempunyai jejak Euler."
    },
    {
      "title": "Contoh Simpul Pemutus pada Dua Segitiga",
      "forDefinition": "Simpul Pemutus",
      "problem": "Dua segitiga $abc$ dan $cde$ berbagi hanya simpul $c$. Tentukan apakah graf mempunyai sirkuit Euler dan siklus Hamilton.",
      "solution": [
        "Sisi graf adalah $ab,bc,ca,cd,de,ec$. Derajat $a,b,d,e$ masing-masing dua, sedangkan derajat $c$ empat. Seluruh simpul berderajat positif terhubung dan semuanya berderajat genap.",
        "Sirkuit $c,a,b,c,d,e,c$ menggunakan keenam sisi tepat sekali, sehingga graf Eulerian. Perhatikan bahwa simpul $c$ muncul lebih dari sekali di dalam urutan, yang diizinkan pada sirkuit Euler.",
        "Menghapus $c$ memisahkan graf menjadi dua komponen dengan himpunan simpul $\\{a,b\\}$ dan $\\{d,e\\}$. Oleh karena itu $c$ adalah simpul pemutus. Proposisi penghalang Hamilton menunjukkan graf tidak mempunyai siklus Hamilton, meskipun setiap simpul berderajat sedikitnya dua."
      ],
      "conclusion": "Graf dua segitiga Eulerian tetapi tidak Hamiltonian karena c merupakan simpul pemutus."
    },
    {
      "title": "Contoh Bipartit dengan Jejak Euler Tanpa Hamilton",
      "problem": "Untuk $K_{2,3}$, tentukan simpul ganjil, sebuah jejak Euler, dan alasan tidak adanya siklus Hamilton.",
      "solution": [
        "Misalkan kelas bipartisi $A=\\{a,b\\}$ dan $B=\\{1,2,3\\}$. Simpul $a,b$ masing-masing berderajat tiga, sedangkan 1,2,3 berderajat dua. Graf terhubung dan tepat dua simpul berderajat ganjil.",
        "Jejak $a,1,b,2,a,3,b$ memakai sisi $a1,b1,b2,a2,a3,b3$ tepat sekali, sehingga memenuhi seluruh enam sisi graf. Ujungnya berbeda dan tepat merupakan dua simpul ganjil.",
        "Setiap siklus dalam graf bipartit berganti kelas pada setiap langkah. Karena itu siklus Hamilton akan membutuhkan banyak simpul sama di kedua kelas, sedangkan ukuran kelas adalah dua dan tiga. Siklus Hamilton tidak mungkin ada, walaupun jejak Euler ada."
      ],
      "conclusion": "K2,3 memiliki jejak Euler terbuka tetapi tidak mempunyai siklus Hamilton."
    },
    {
      "title": "Contoh Kriteria Euler dengan Simpul Terisolasi",
      "problem": "Graf terdiri atas siklus $1-2-3-4-1$ dan simpul terisolasi 5. Apakah ada sirkuit Euler dan siklus Hamilton?",
      "solution": [
        "Empat simpul pada siklus masing-masing berderajat dua, sedangkan simpul 5 berderajat nol. Seluruh simpul berderajat positif berada dalam satu komponen dan semuanya berderajat genap.",
        "Urutan $1,2,3,4,1$ memakai semua empat sisi tepat sekali. Simpul 5 tidak perlu dikunjungi karena tidak menempel pada sisi mana pun. Kriteria sirkuit Euler tetap terpenuhi meskipun graf keseluruhan tidak terhubung.",
        "Siklus Hamilton harus melalui seluruh lima simpul. Simpul 5 tidak mempunyai tetangga, sehingga tidak mungkin menjadi bagian dari siklus. Dengan demikian graf Eulerian menurut konvensi sisi, tetapi tidak Hamiltonian."
      ],
      "conclusion": "Simpul terisolasi tidak menghalangi sirkuit Euler, tetapi menghalangi siklus Hamilton."
    },
    {
      "title": "Contoh Penerapan Syarat Ore",
      "problem": "Graf $K_6$ dihapus tiga sisi pasangan terpisah $12,34,56$. Buktikan graf yang tersisa Hamiltonian tanpa mencari semua siklus.",
      "solution": [
        "Setiap simpul pada $K_6$ mula-mula berderajat lima. Penghapusan satu sisi yang menempel pada tiap simpul menjadikan semua derajat empat. Pasangan yang tidak bertetangga tepat $(1,2),(3,4),(5,6)$.",
        "Untuk setiap pasangan tidak bertetangga, jumlah derajatnya $4+4=8$, sedangkan banyak simpul $n=6$. Karena $8\\ge6$, seluruh hipotesis teorema Ore terpenuhi, sehingga graf mempunyai siklus Hamilton.",
        "Verifikasi konstruktif dapat diberikan melalui siklus $1,3,5,2,4,6,1$. Keenam sisi berurutan ada karena tidak satu pun sama dengan sisi yang dihapus. Siklus itu melewati setiap simpul sekali. Semua derajat juga genap dan graf terhubung, sehingga graf sekaligus Eulerian."
      ],
      "conclusion": "Graf K6 tanpa perfect matching adalah Hamiltonian menurut Ore dan juga Eulerian."
    },
    {
      "title": "Contoh Derajat Ganjil pada Bintang",
      "problem": "Periksa kemungkinan jejak Euler dan siklus Hamilton pada graf bintang $K_{1,3}$.",
      "solution": [
        "Graf bintang mempunyai pusat $c$ yang bertetangga dengan tiga daun $a,b,d$. Derajatnya adalah $\\deg(c)=3$ dan $\\deg(a)=\\deg(b)=\\deg(d)=1$. Jadi terdapat empat simpul berderajat ganjil.",
        "Jejak Euler terbuka memerlukan tepat dua simpul ganjil dan sirkuit Euler memerlukan nol simpul ganjil. Karena jumlah simpul ganjil adalah empat, tidak ada jejak Euler yang memakai semua sisi.",
        "Setiap daun berderajat satu, sedangkan simpul pada siklus Hamilton harus mempunyai sedikitnya dua tetangga. Syarat perlu Hamilton gagal. Graf tetap mempunyai lintasan sederhana seperti $a,c,b$, tetapi lintasan itu tidak mencakup semua empat simpul."
      ],
      "conclusion": "K1,3 tidak mempunyai jejak Euler maupun siklus Hamilton."
    }
  ],
  "exercises": [
    {
      "prompt": "EH-01. Graf sederhana mempunyai sisi $12,23,34,41,13$. Tentukan seluruh simpul ganjil, sebuah jejak Euler, dan apakah ada siklus Hamilton.",
      "hint": "Hitung derajat, lalu periksa apakah diagonal $13$ dapat ditempatkan di ujung penelusuran.",
      "answer": "Diketahui $E=\\{12,23,34,41,13\\}$. Derajatnya $\\deg(1)=3$, $\\deg(3)=3$, $\\deg(2)=\\deg(4)=2$, sehingga tepat simpul 1 dan 3 ganjil. Graf terhubung dan memenuhi kriteria jejak Euler terbuka. Urutan $1,2,3,4,1,3$ memakai sisi $12,23,34,41,13$ masing-masing sekali, jadi merupakan jejak Euler dari 1 ke 3. Tidak ada sirkuit Euler karena dua derajat ganjil. Akan tetapi $1,2,3,4,1$ adalah siklus Hamilton karena keempat simpul berbeda sebelum kembali dan seluruh sisi yang diperlukan tersedia. Ini memperlihatkan keberadaan siklus Hamilton tidak memerlukan semua sisi dipakai."
    },
    {
      "prompt": "EH-02. Untuk $n\\ge3$, tentukan kapan graf lengkap $K_n$ Eulerian dan buktikan $K_n$ selalu Hamiltonian.",
      "hint": "Derajat setiap simpul $n-1$; bangun siklus dengan mengurutkan simpul.",
      "answer": "Pada $K_n$ setiap simpul bertetangga dengan $n-1$ simpul lain, sehingga derajatnya $n-1$. Graf terhubung dan mempunyai sisi karena $n\\ge3$. Berdasarkan kriteria sirkuit Euler, $K_n$ Eulerian jika dan hanya jika $n-1$ genap, ekuivalen dengan $n$ ganjil. Untuk membuktikan Hamiltonian, beri label simpul $v_1,\\ldots,v_n$. Karena graf lengkap, semua sisi $v_iv_{i+1}$ untuk $1\\le i<n$ dan $v_nv_1$ ada. Urutan $v_1,v_2,\\ldots,v_n,v_1$ adalah siklus yang mengunjungi seluruh simpul sekali. Dengan demikian setiap $K_n$ untuk $n\\ge3$ Hamiltonian, tetapi hanya $K_n$ dengan $n$ ganjil yang Eulerian."
    },
    {
      "prompt": "EH-03. Graf terdiri atas $C_6$ dan satu simpul terisolasi. Periksa dengan tepat perbedaan keterhubungan pada kriteria Euler dan Hamilton.",
      "hint": "Simpul derajat nol tidak menyumbang sisi, tetapi tetap harus dilalui siklus Hamilton.",
      "answer": "Diketahui enam simpul pada $C_6$ masing-masing berderajat dua dan satu simpul tambahan berderajat nol. Himpunan simpul berderajat positif membentuk satu komponen terhubung, sehingga syarat keterhubungan untuk sirkuit Euler terpenuhi. Semua derajat genap; urutan keliling $C_6$ memakai keenam sisi sekali dan kembali ke awal, sehingga sirkuit Euler ada. Sebaliknya, siklus Hamilton harus mengunjungi tujuh simpul. Simpul terisolasi tidak mempunyai dua tetangga yang diperlukan untuk menjadi bagian dari suatu siklus. Oleh sebab itu graf tidak Hamiltonian. Menuntut seluruh graf terhubung dalam kriteria Euler akan menghasilkan jawaban salah pada contoh ini."
    },
    {
      "prompt": "EH-04. Tentukan apakah $K_{2,4}$ mempunyai sirkuit Euler dan siklus Hamilton, dengan pembuktian yang tidak hanya berdasarkan gambar.",
      "hint": "Hitung derajat dan gunakan pergantian kelas pada siklus bipartit.",
      "answer": "Misalkan bipartisi $A$ berukuran dua dan $B$ berukuran empat. Setiap simpul di $A$ berderajat empat, sedangkan setiap simpul di $B$ berderajat dua. Graf terhubung dan semua derajat genap, sehingga kriteria Euler menjamin adanya sirkuit Euler yang memakai seluruh $2\\cdot4=8$ sisi. Untuk siklus Hamilton, setiap langkah dalam graf bipartit berpindah dari $A$ ke $B$ atau sebaliknya. Pada siklus tertutup, banyak simpul yang dilalui dari kedua kelas harus sama. Siklus Hamilton akan menggunakan seluruh dua simpul $A$ dan seluruh empat simpul $B$, yang melanggar kesamaan tersebut. Karena itu $K_{2,4}$ Eulerian tetapi tidak Hamiltonian. Tidak diperlukan klaim bahwa derajat genap menjamin Hamilton."
    },
    {
      "prompt": "EH-05. Dua siklus empat simpul berbagi tepat satu simpul $v$ dan tidak berbagi sisi. Tentukan keberadaan sirkuit Euler dan siklus Hamilton.",
      "hint": "Periksa derajat $v$ dan jumlah komponen setelah $v$ dihapus.",
      "answer": "Graf terdiri atas dua $C_4$ yang beririsan hanya pada $v$. Semua simpul selain $v$ berderajat dua, sedangkan $v$ berderajat empat karena dua sisi dari masing-masing siklus menempel padanya. Seluruh sisi berada dalam satu komponen, sehingga kriteria sirkuit Euler berlaku. Sirkuit Euler dapat dibangun dengan mengelilingi siklus pertama dari $v$ kembali ke $v$, lalu mengelilingi siklus kedua; seluruh delapan sisi dipakai sekali. Namun, penghapusan $v$ menghasilkan dua komponen yang berasal dari dua siklus semula. Dengan demikian $v$ adalah simpul pemutus. Graf dengan siklus Hamilton tidak boleh mempunyai simpul pemutus, sehingga graf ini tidak Hamiltonian. Kegagalan Hamilton bukan karena derajat ganjil."
    },
    {
      "prompt": "EH-06. Pada $K_{3,3}$, tentukan apakah ada sirkuit Euler, jejak Euler terbuka, dan siklus Hamilton.",
      "hint": "Setiap simpul berderajat tiga, tetapi kedua kelas bipartisi berukuran sama.",
      "answer": "Misalkan kelas $A=\\{a_1,a_2,a_3\\}$ dan $B=\\{b_1,b_2,b_3\\}$. Setiap simpul bertetangga dengan ketiga simpul kelas lain, sehingga keenam simpul berderajat tiga. Sirkuit Euler mensyaratkan semua derajat genap, sedangkan jejak Euler terbuka mensyaratkan tepat dua derajat ganjil. Keduanya gagal karena terdapat enam simpul ganjil. Akan tetapi urutan $a_1,b_1,a_2,b_2,a_3,b_3,a_1$ adalah siklus: setiap pasangan berurutan berada di kelas berbeda sehingga sisi tersedia. Siklus ini menggunakan seluruh enam simpul tepat sekali sebelum kembali. Oleh karena itu $K_{3,3}$ Hamiltonian, tetapi tidak mempunyai jejak Euler."
    },
    {
      "prompt": "EH-07. Dari $K_6$ hapus sisi $12,34,56$. Periksa hipotesis Ore, lalu tunjukkan bahwa syarat Ore tidak perlu bagi Hamiltonian dengan contoh lain.",
      "hint": "Gunakan derajat empat untuk graf pertama dan siklus $C_6$ sebagai contoh tandingan syarat perlu.",
      "answer": "Setiap simpul pada $K_6$ kehilangan tepat satu sisi, sehingga berderajat empat. Pasangan tidak bertetangga hanya $(1,2),(3,4),(5,6)$ dan jumlah derajat setiap pasangan adalah delapan, memenuhi $8\\ge n=6$. Teorema Ore menjamin siklus Hamilton; contoh eksplisit adalah $1,3,5,2,4,6,1$, yang tidak memakai sisi terhapus. Untuk menunjukkan bahwa syarat Ore tidak perlu, pertimbangkan $C_6$. Graf ini jelas Hamiltonian karena kelilingnya melewati semua simpul. Namun, setiap simpul berderajat dua; ambil dua simpul tidak bertetangga, maka jumlah derajatnya $2+2=4<6$. Jadi syarat Ore adalah syarat cukup, bukan karakterisasi dua arah."
    },
    {
      "prompt": "EH-08. Buktikan graf sederhana dengan sedikitnya tiga simpul dan satu simpul berderajat satu tidak Hamiltonian; jelaskan mengapa pernyataan itu tidak melarang jejak Euler.",
      "hint": "Bandingkan kebutuhan dua sisi pada siklus dengan satu sisi pada ujung jejak.",
      "answer": "Misalkan $G$ mempunyai sedikitnya tiga simpul dan simpul $u$ berderajat satu. Andaikan terdapat siklus Hamilton. Siklus tersebut melalui $u$ dan, karena panjang siklus sedikitnya tiga, mempunyai dua sisi berbeda yang menempel pada $u$: satu sisi untuk masuk dan satu sisi untuk keluar. Hal ini bertentangan dengan $\\deg(u)=1$. Oleh karena itu $G$ tidak Hamiltonian. Kesimpulan tersebut tidak berlaku untuk jejak Euler terbuka, sebab titik ujung jejak hanya memerlukan satu sisi yang belum dipasangkan. Sebagai contoh, graf lintasan $P_4$ memiliki dua simpul berderajat satu dan dua simpul berderajat dua. Jejak $1,2,3,4$ menggunakan semua sisi tepat sekali, sehingga $P_4$ mempunyai jejak Euler meskipun tidak Hamiltonian."
    }
  ],
  "mistakes": [],
  "connections": []
};
