import type { BookLessonContent } from "@/data/book-content-types";

/** MST: rigorous cut/cycle exchange proofs, Kruskal invariant, and solved problems. */
export const minimumSpanningTreeContent: BookLessonContent = {
  "intro": [
    "Pada jaringan komunikasi, jalan, atau kabel, kita ingin menghubungkan semua lokasi tanpa membayar sisi yang tidak diperlukan. Memilih semua sisi memang dapat membuat jaringan terhubung, tetapi siklus sering menambah biaya tanpa meningkatkan keterhubungan. Masalah pohon berentang minimum memisahkan dua pertanyaan: apakah seluruh simpul terhubung tanpa siklus, dan apakah jumlah bobotnya paling kecil di antara seluruh jaringan yang memenuhi syarat tersebut.",
    "Misalnya, pada segitiga $A,B,C$ dengan bobot $w(AB)=1$, $w(BC)=2$, dan $w(AC)=4$, dua sisi $AB,BC$ sudah menghubungkan seluruh simpul dengan bobot 3. Menambah $AC$ membentuk siklus dan menaikkan bobot menjadi 7. Akan tetapi memilih sisi termurah secara serampangan tidak selalu benar pada graf besar: keputusan harus memeriksa apakah sisi baru menggabungkan dua komponen berbeda. Inilah alasan algoritma Kruskal mempertahankan hutan pada setiap langkah.",
    "Pembahasan dimulai dari definisi graf berbobot, pohon berentang, dan potongan; kemudian membuktikan sifat potongan, sifat siklus, dan ketepatan Kruskal melalui pertukaran sisi yang mempertahankan keterhubungan. Contoh menghitung bobot dan memeriksa seluruh kondisi, termasuk bobot negatif, ikatan bobot, serta graf tidak terhubung. Referensi: J. A. Bondy dan U. S. R. Murty, Graph Theory (Springer, 2008); T. H. Cormen dkk., Introduction to Algorithms, edisi ke-4 (MIT Press, 2022), pembahasan minimum spanning trees."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Graf Berbobot Takberarah",
      "statement": "Graf berbobot takberarah adalah pasangan $(G,w)$ dengan $G=(V,E)$ graf hingga takberarah dan $w:E\\to\\mathbb R$ fungsi bobot sisi. Bobot suatu himpunan sisi $F\\subseteq E$ adalah $w(F)=\\sum_{e\\in F}w(e)$. Bobot boleh negatif; tidak ada asumsi bahwa $w(e)\\ge0$."
    },
    {
      "kind": "definition",
      "title": "Pohon Berentang",
      "statement": "Untuk graf takberarah $G=(V,E)$, subgraf $T=(V,F)$ disebut pohon berentang jika $F\\subseteq E$, $T$ terhubung, dan $T$ tidak memiliki siklus. Seluruh simpul asli wajib dipertahankan; subgraf terhubung yang hanya memuat sebagian simpul bukan pohon berentang."
    },
    {
      "kind": "definition",
      "title": "Potongan dan Sisi Melintasi Potongan",
      "statement": "Untuk himpunan takkosong $S\\subsetneq V$, potongan $(S,V\\setminus S)$ mempunyai himpunan sisi lintas $\\delta(S)=\\{uv\\in E:u\\in S,\\ v\\notin S\\}$. Suatu sisi disebut ringan pada potongan jika bobotnya minimum di $\\delta(S)$; minimum tidak harus tunggal."
    },
    {
      "kind": "definition",
      "title": "Pohon Berentang Minimum",
      "statement": "Untuk graf berbobot takberarah terhubung $(G,w)$, pohon berentang minimum (*minimum spanning tree*, MST) ialah pohon berentang $T$ dengan $w(E(T))\\le w(E(T'))$ bagi setiap pohon berentang $T'$ dari $G$. Jika graf tidak terhubung, MST untuk seluruh graf tidak ada; yang dapat dicari ialah hutan berentang minimum per komponen."
    },
    {
      "kind": "lemma",
      "title": "Banyak Sisi Pohon Berhingga",
      "statement": "Jika $T$ pohon berhingga dengan $n\\ge1$ simpul, maka $|E(T)|=n-1$.",
      "proof": [
        "Diketahui $T$ terhubung, takbersiklus, dan mempunyai $n$ simpul. Pembuktian dilakukan dengan induksi pada $n$. Untuk $n=1$, pohon hanya mempunyai satu simpul dan tidak memiliki sisi, sehingga $|E(T)|=0=n-1$.",
        "Misalkan pernyataan benar untuk setiap pohon dengan $n-1$ simpul, dengan $n\\ge2$. Karena $T$ berhingga, terdapat lintasan sederhana terpanjang $v_0v_1\\cdots v_k$. Simpul ujung $v_0$ tidak dapat mempunyai tetangga selain $v_1$: tetangga lain yang berada pada lintasan membentuk siklus, sedangkan tetangga di luar lintasan memperpanjang lintasan. Dengan demikian $\\deg_T(v_0)=1$.",
        "Hapus simpul daun $v_0$ beserta satu sisi insidennya. Subgraf yang tersisa tetap terhubung karena lintasan antardua simpul sisanya tidak memerlukan daun sebagai simpul dalam; subgraf juga tetap takbersiklus. Hipotesis induksi memberikan $n-2$ sisi pada pohon dengan $n-1$ simpul tersebut. Mengembalikan satu sisi menghasilkan $|E(T)|=(n-2)+1=n-1$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Keberadaan Pohon Berentang",
      "statement": "Setiap graf takberarah berhingga dan terhubung mempunyai pohon berentang.",
      "proof": [
        "Diketahui graf berhingga terhubung $G=(V,E)$. Jika $G$ tidak memiliki siklus, $G$ sendiri merupakan pohon berentang. Jika terdapat siklus $C$, pilih satu sisi $e$ pada $C$ dan hapus $e$.",
        "Penghapusan tersebut tidak memutus keterhubungan: jika suatu lintasan semula menggunakan $e$, bagian yang melintasi $e$ dapat diganti dengan lintasan lain sepanjang $C\\setminus\\{e\\}$ yang menghubungkan kedua ujung $e$. Seluruh simpul tetap dipertahankan dan jumlah sisi turun satu.",
        "Ulangi penghapusan selama masih ada siklus. Karena $E$ berhingga, proses berhenti setelah paling banyak $|E|$ penghapusan. Graf akhir tetap terhubung dan tidak bersiklus, sehingga merupakan pohon berentang. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Sifat Potongan untuk Sisi Minimum Tunggal",
      "statement": "Misalkan $(G,w)$ graf berhingga terhubung dan $e$ adalah satu-satunya sisi berbobot minimum pada potongan $\\delta(S)$. Setiap MST dari $G$ memuat $e$.",
      "proof": [
        "Diketahui $S$ takkosong dan bukan seluruh $V$, serta $w(e)<w(f)$ untuk setiap $f\\in\\delta(S)\\setminus\\{e\\}$. Ambil sebarang MST $T$ dan andaikan $e\\notin E(T)$. Karena $T$ pohon, penambahan $e$ membentuk tepat satu siklus $C$: lintasan tunggal pada $T$ antara kedua ujung $e$ ditambah $e$.",
        "Sisi $e$ melintasi potongan, sehingga lintasan lain pada siklus harus melintasi potongan itu lagi agar kembali ke sisi asal. Terdapat $f\\in E(C)\\cap\\delta(S)$ dengan $f\\ne e$. Berdasarkan keunikan minimum, $w(f)>w(e)$.",
        "Hapus $f$ dari $T+e$. Penghapusan sisi pada siklus menjaga keterhubungan dan menghilangkan siklus; hasilnya pohon berentang $T'$. Akan tetapi $w(T')=w(T)+w(e)-w(f)<w(T)$, bertentangan dengan minimalitas $T$. Asumsi $e\\notin T$ salah. Karena $T$ dipilih sebarang, setiap MST memuat $e$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Sifat Siklus untuk Sisi Maksimum Tunggal",
      "statement": "Jika sisi $e$ merupakan satu-satunya sisi berbobot terbesar pada suatu siklus $C$ dalam graf berhingga terhubung, tidak ada MST yang memuat $e$.",
      "proof": [
        "Andaikan terdapat MST $T$ yang memuat $e$. Menghapus $e$ dari pohon $T$ memecah $V$ menjadi dua komponen takkosong $S$ dan $V\\setminus S$. Siklus $C$ memuat $e$ yang melintasi potongan tersebut.",
        "Lintasan $C\\setminus\\{e\\}$ menghubungkan kedua ujung $e$, sehingga setidaknya satu sisinya, sebut $f$, juga melintasi potongan. Karena $f\\in C\\setminus\\{e\\}$, hipotesis maksimum tunggal memberikan $w(f)<w(e)$. Sisi $f$ tidak dapat berada dalam $T-e$, sebab sisi dalam hutan $T-e$ tidak menghubungkan dua komponennya.",
        "Tambahkan $f$ pada $T-e$. Kedua komponen kembali terhubung tanpa siklus, sehingga terbentuk pohon berentang $T'$. Bobotnya $w(T')=w(T)-w(e)+w(f)<w(T)$, suatu kontradiksi. Dengan demikian tidak ada MST yang memuat $e$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Ketepatan Algoritma Kruskal",
      "statement": "Pada graf berbobot takberarah berhingga terhubung, algoritma yang mengurutkan sisi menurut bobot tidak menurun dan menerima suatu sisi hanya jika kedua ujungnya berada dalam komponen berbeda dari hutan terpilih menghasilkan MST. Ikatan bobot dapat diputus dengan urutan sebarang.",
      "proof": [
        "Misalkan $F$ adalah hutan sisi yang telah diterima. Invariannya: terdapat MST $T$ yang memuat seluruh sisi $F$. Pada awalnya $F=\\varnothing$, dan MST ada karena jumlah pohon berentang pada graf berhingga tidak nol serta bobot total dapat diminimumkan.",
        "Ambil sisi berikutnya $e=uv$ yang diterima. Simpul $u,v$ berada pada komponen berbeda dari $F$. Pilih $S$ sebagai himpunan simpul komponen $F$ yang memuat $u$. Setiap sisi yang melintasi $\\delta(S)$ menghubungkan komponen berbeda dari $F$, sehingga tidak mungkin lebih ringan daripada $e$: sisi lebih ringan sudah diperiksa dan, jika menghubungkan komponen berbeda pada saat itu, pasti diterima; penggabungan komponen sesudahnya tidak dapat mengubah sisi yang dulu ditolak menjadi lintas komponen. Oleh karena itu $w(e)\\le w(f)$ bagi setiap $f\\in\\delta(S)$.",
        "Menurut hipotesis induksi, terdapat MST $T$ dengan $F\\subseteq E(T)$. Jika $e\\in T$, invariannya tetap. Jika $e\\notin T$, siklus pada $T+e$ memuat sisi lain $f\\in\\delta(S)$. Karena tidak ada sisi $F$ yang melintasi potongan komponen $S$, diperoleh $f\\notin F$. Ganti $f$ dengan $e$. Hasilnya pohon berentang $T'$ yang memuat $F\\cup\\{e\\}$ dan $w(T')=w(T)+w(e)-w(f)\\le w(T)$. Minimalitas $T$ memaksa kesamaan bobot, sehingga $T'$ juga MST. Invarian terpelihara.",
        "Setelah algoritma selesai, tidak ada dua komponen hutan yang dapat dihubungkan oleh sisi graf yang belum diterima; karena $G$ terhubung, hutan akhir terhubung. Hutan tersebut adalah pohon berentang dan, menurut invarian, termuat dalam suatu MST. Keduanya mempunyai $|V|-1$ sisi, sehingga keduanya sama. Keluaran Kruskal adalah MST. $\\square$"
      ]
    },
    {
      "kind": "corollary",
      "title": "Ketunggalan MST pada Bobot Sisi Berbeda",
      "statement": "Jika semua sisi graf berbobot takberarah berhingga terhubung mempunyai bobot yang saling berbeda, MST-nya tunggal. Kebalikan pernyataan ini tidak berlaku.",
      "proof": [
        "Andaikan ada dua MST berbeda $T_1$ dan $T_2$. Pilih sisi $e$ berbobot terkecil dalam beda simetris $E(T_1)\\triangle E(T_2)$; tanpa mengurangi keumuman, $e\\in T_1\\setminus T_2$. Menambahkan $e$ ke $T_2$ membentuk satu siklus $C$.",
        "Siklus $C$ memuat suatu sisi $f\\in T_2\\setminus T_1$: jika semua sisi lain siklus termasuk $T_1$, maka $T_1$ sendiri mengandung siklus. Karena $e$ dipilih berbobot terkecil dalam beda simetris dan semua bobot berbeda, $w(e)<w(f)$. Mengganti $f$ dengan $e$ pada $T_2$ menghasilkan pohon berentang dengan bobot lebih kecil daripada MST $T_2$, kontradiksi.",
        "Jadi MST tunggal. Kebalikannya salah: pada segitiga dengan $w(AB)=1$, $w(BC)=1$, dan $w(AC)=3$, MST tetap tunggal, yaitu $\\{AB,BC\\}$, meskipun dua sisi berbobot sama. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Bobot Graf dan Total Sisi",
      "forDefinition": "Graf Berbobot Takberarah",
      "problem": "Pada segitiga $A,B,C$, diketahui $w(AB)=1$, $w(BC)=2$, dan $w(AC)=4$. Hitung bobot seluruh sisi dan dua sisi $AB,BC$.",
      "solution": [
        "Diketahui $V=\\{A,B,C\\}$ dan $E=\\{AB,BC,AC\\}$. Fungsi $w$ memasangkan bilangan real ke setiap sisi takberarah; sisi $AB$ dan $BA$ bukan dua sisi berbeda. Bobot suatu himpunan sisi diperoleh dengan menjumlahkan bobot tiap anggota tepat sekali.",
        "Untuk $F=\\{AB,BC\\}$, diperoleh $w(F)=w(AB)+w(BC)=1+2=3$. Untuk keseluruhan $E$, diperoleh $w(E)=1+2+4=7$. Nilai 7 adalah bobot seluruh graf, bukan otomatis bobot pohon berentang karena ketiga sisi membentuk siklus.",
        "Perhitungan ini memperlihatkan bahwa optimisasi MST memilih himpunan sisi tertentu, bukan mengubah bobot sisi yang sudah diberikan."
      ]
    },
    {
      "title": "Contoh Memeriksa Pohon Berentang",
      "forDefinition": "Pohon Berentang",
      "problem": "Pada graf dengan sisi $AB,BC,CD,DA$, tentukan apakah $F=\\{AB,BC,CD\\}$ dan $F'=\\{AB,BC,CD,DA\\}$ membentuk pohon berentang.",
      "solution": [
        "Diketahui graf merupakan siklus empat simpul $A,B,C,D$. Subgraf dengan $F$ memuat seluruh empat simpul dan mempunyai lintasan $A-B-C-D$, sehingga setiap pasangan simpul dapat dihubungkan. Karena lintasan ini tidak mengulang simpul, tidak terdapat siklus.",
        "Banyak sisi $F$ adalah 3, sesuai lemma bahwa pohon pada empat simpul mempunyai $4-1=3$ sisi. Sebaliknya, $F'$ memuat siklus $A-B-C-D-A$ dan mempunyai empat sisi. Walaupun terhubung dan berentang, $F'$ bukan pohon.",
        "Syarat berentang, terhubung, dan takbersiklus harus diperiksa bersama; hanya menghitung simpul tidak cukup."
      ]
    },
    {
      "title": "Contoh Potongan yang Memaksa Sisi",
      "forDefinition": "Potongan dan Sisi Melintasi Potongan",
      "problem": "Untuk graf $A,B,C,D$ dengan $w(AB)=1$, $w(AC)=4$, $w(AD)=7$, tentukan sisi lintas potongan $S=\\{A\\}$ dan akibatnya bagi MST. Anggap graf keseluruhan terhubung.",
      "solution": [
        "Potongan $(\\{A\\},\\{B,C,D\\})$ memisahkan $A$ dari ketiga simpul lain. Semua sisi yang melintasinya tepat $\\delta(S)=\\{AB,AC,AD\\}$, dengan bobot berturut-turut 1, 4, dan 7. Sisi lain yang kedua ujungnya berada dalam $\\{B,C,D\\}$ tidak termasuk potongan.",
        "Bobot terkecil adalah 1 dan hanya dicapai oleh $AB$. Karena graf terhubung, sifat potongan untuk minimum tunggal berlaku: setiap MST harus memuat $AB$. Tidak perlu mengetahui bobot sisi antara $B,C,D$ untuk memaksakan sisi tersebut.",
        "Kesimpulan hanya menyatakan keharusan memasukkan $AB$; sisa sisi MST tetap perlu ditentukan agar seluruh simpul terhubung tanpa siklus."
      ]
    },
    {
      "title": "Contoh MST dengan Kruskal",
      "forDefinition": "Pohon Berentang Minimum",
      "problem": "Pada graf lengkap empat simpul dengan $w(AB)=1$, $w(BC)=2$, $w(CD)=3$, $w(AC)=5$, $w(BD)=6$, $w(AD)=8$, cari MST.",
      "solution": [
        "Urutkan keenam sisi menurut bobot: $AB(1),BC(2),CD(3),AC(5),BD(6),AD(8)$. Kruskal mula-mula menerima $AB$, kemudian $BC$ karena $C$ belum berada dalam komponen $A,B$, lalu $CD$ karena $D$ belum terhubung.",
        "Ketiga sisi yang diterima membentuk lintasan $A-B-C-D$. Hutan telah terhubung, mempunyai empat simpul dan tiga sisi, sehingga merupakan pohon berentang. Bobot totalnya $1+2+3=6$. Semua sisi berikutnya akan membentuk siklus dan ditolak.",
        "Teorema ketepatan Kruskal memastikan bobot 6 minimum secara global. Sebagai verifikasi alternatif, potongan $\\{A\\}$ memaksa $AB$, potongan $\\{A,B\\}$ memaksa $BC$, dan potongan $\\{D\\}$ memaksa $CD$; ketiga sisi tersebut berada pada setiap MST."
      ]
    },
    {
      "title": "Contoh Sisi Terberat pada Siklus",
      "problem": "Pada segitiga dengan $w(AB)=2$, $w(BC)=3$, $w(AC)=9$, tentukan sisi yang mustahil berada pada MST dan periksa bobot optimum.",
      "solution": [
        "Siklus $A-B-C-A$ mempunyai tiga sisi dengan bobot 2, 3, dan 9. Sisi $AC$ adalah maksimum tunggal. Sifat siklus menyatakan tidak ada MST yang memuat $AC$: bila suatu pohon memuatnya, salah satu sisi lebih ringan pada lintasan alternatif dapat menggantikannya.",
        "Dua sisi tersisa $AB$ dan $BC$ menghubungkan seluruh tiga simpul tanpa siklus dan berbobot $2+3=5$. Dua pohon alternatif mempunyai bobot $2+9=11$ dan $3+9=12$. Karena $5<11$ dan $5<12$, enumerasi semua pohon memverifikasi sifat siklus.",
        "Pemeriksaan ini tidak boleh digeneralisasi menjadi larangan terhadap setiap sisi maksimum yang bobotnya seri; hipotesis maksimum tunggal penting bagi kesimpulan tersebut."
      ]
    },
    {
      "title": "Contoh Ikatan Bobot dan Banyak MST",
      "problem": "Siklus empat simpul $A-B-C-D-A$ mempunyai semua bobot sisi 1 dan tidak ada diagonal. Tentukan MST dan banyaknya.",
      "solution": [
        "Setiap pohon berentang pada empat simpul memiliki tiga sisi. Karena seluruh sisi berbobot 1, setiap pohon berentang yang ada mempunyai bobot tepat $3$. Menghapus satu sisi mana pun dari siklus menyisakan lintasan tiga sisi yang terhubung dan tidak bersiklus.",
        "Ada empat pilihan sisi yang dihapus, menghasilkan empat pohon berentang berbeda, masing-masing berbobot 3. Tidak mungkin ada pohon berbobot kurang dari 3 karena setiap pohon memerlukan tepat tiga sisi dan setiap sisinya berbobot 1.",
        "Kruskal dapat mengeluarkan salah satu dari empat pohon tersebut bergantung pada urutan pemecahan ikatan. Teorema ketepatannya tidak mensyaratkan MST tunggal."
      ]
    },
    {
      "title": "Contoh Bobot Negatif",
      "problem": "Pada segitiga dengan $w(AB)=-2$, $w(BC)=1$, $w(AC)=3$, tentukan MST dan jelaskan apakah bobot negatif melanggar definisi.",
      "solution": [
        "Bobot adalah bilangan real, sehingga sisi berbobot negatif diperbolehkan dalam persoalan MST. Setiap pohon berentang pada tiga simpul menggunakan dua sisi. Tiga bobot kandidat adalah $-2+1=-1$, $-2+3=1$, dan $1+3=4$.",
        "Bobot terkecil adalah $-1$ pada pohon $\\{AB,BC\\}$. Kedua sisi menghubungkan $A$ ke $B$ dan $B$ ke $C$, tidak membentuk siklus, serta mencakup seluruh simpul. Kruskal juga memilih sisi dengan bobot $-2$ lebih dahulu, lalu bobot 1.",
        "Tidak diperlukan transformasi bobot negatif menjadi nol. Menambah konstanta yang sama pada setiap sisi mempertahankan urutan bobot pohon karena semua pohon berentang mempunyai jumlah sisi sama."
      ]
    },
    {
      "title": "Contoh Graf Tidak Terhubung",
      "problem": "Graf mempunyai $V=\\{A,B,C,D\\}$ dan hanya dua sisi $AB$ berbobot 1 serta $CD$ berbobot 2. Apakah ada MST?",
      "solution": [
        "Graf mempunyai dua komponen terhubung, yaitu $\\{A,B\\}$ dan $\\{C,D\\}$. Tidak ada lintasan antara $A$ dan $C$, sehingga tidak ada subgraf terhubung yang mencakup keempat simpul. Karena definisi pohon berentang mewajibkan keterhubungan, MST seluruh graf tidak ada.",
        "Pada masing-masing komponen, satu-satunya pohon berentang adalah sisi yang tersedia. Gabungan $\\{AB,CD\\}$ merupakan hutan berentang minimum dengan bobot $1+2=3$, tetapi bukan pohon berentang karena tetap mempunyai dua komponen.",
        "Perbedaan istilah ini penting: algoritma Kruskal pada graf tidak terhubung menghasilkan hutan berentang minimum, bukan MST yang tidak mungkin ada."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "MST-01. Pada segitiga $A,B,C$ dengan $w(AB)=2$, $w(BC)=5$, dan $w(AC)=4$, tentukan MST dan buktikan optimalitasnya.",
      "hint": "Enumerasi tiga pohon berentang yang masing-masing mempunyai dua sisi.",
      "answer": "Diketahui graf terhubung dengan tiga simpul dan bobot sisi $2,5,4$. Pohon berentang harus memuat tepat $3-1=2$ sisi. Ketiga pilihan dua sisi adalah $\\{AB,BC\\}$ berbobot $2+5=7$, $\\{AB,AC\\}$ berbobot $2+4=6$, dan $\\{AC,BC\\}$ berbobot $4+5=9$. Setiap pilihan menghubungkan seluruh simpul tanpa siklus karena dua sisi berbeda pada segitiga selalu membentuk lintasan. Nilai terkecil adalah 6 pada $\\{AB,AC\\}$. Sebagai verifikasi yang tidak bergantung pada daftar, potongan $\\{B\\}$ mempunyai sisi lintas $AB(2)$ dan $BC(5)$ sehingga memaksa $AB$; potongan $\\{C\\}$ mempunyai $AC(4)$ dan $BC(5)$ sehingga memaksa $AC$. Kedua sisi wajib itu sudah membentuk pohon, sehingga MST tunggal berbobot 6."
    },
    {
      "prompt": "MST-02. Terapkan Kruskal pada graf $A,B,C,D$ dengan sisi $AB(2),AC(6),BC(3),BD(5),CD(1)$; tulis keputusan penerimaan setiap sisi.",
      "hint": "Urutkan sisi menurut bobot dan tolak sisi yang menyatukan simpul dalam komponen yang sama.",
      "answer": "Diketahui lima sisi dengan bobot masing-masing $CD(1),AB(2),BC(3),BD(5),AC(6)$ setelah diurutkan. Mulai dengan empat komponen tunggal. Sisi $CD$ diterima dan menggabungkan $C,D$; sisi $AB$ diterima dan menggabungkan $A,B$; sisi $BC$ diterima karena menghubungkan komponen $\\{A,B\\}$ dan $\\{C,D\\}$. Kini keempat simpul terhubung melalui tiga sisi $\\{CD,AB,BC\\}$, sehingga hutan sudah menjadi pohon. Sisi $BD$ dan $AC$ ditolak karena masing-masing akan membentuk siklus pada komponen yang sudah sama. Bobot total $1+2+3=6$. Untuk memeriksa optimum, sisi $CD$ adalah minimum tunggal pada potongan $\\{D\\}$, $AB$ minimum tunggal pada $\\{A\\}$, dan $BC$ minimum tunggal pada $\\{A,B\\}$; ketiganya wajib masuk setiap MST. Keluaran Kruskal benar dan tunggal."
    },
    {
      "prompt": "MST-03. Pada graf terhubung, suatu potongan mempunyai sisi lintas berbobot $1,4,4$. Buktikan bahwa sisi berbobot 1 berada dalam setiap MST.",
      "hint": "Andaikan MST tidak memuat sisi minimum, lalu tukarkan dengan sisi lain pada siklus.",
      "answer": "Misalkan $e$ adalah satu-satunya sisi lintas berbobot 1 dan $T$ sebarang MST. Hipotesis menyatakan graf berhingga, takberarah, dan terhubung, serta dua sisi lintas lainnya berbobot 4. Andaikan $e\\notin T$. Menambahkan $e$ ke pohon $T$ membentuk siklus yang memuat $e$. Karena kedua ujung $e$ berada pada sisi berbeda dari potongan, lintasan alternatif di $T$ harus melintasi potongan setidaknya sekali. Ambil salah satu sisi lintas $f$ pada lintasan tersebut; bobotnya 4. Penggantian $T'=(T\\cup\\{e\\})\\setminus\\{f\\}$ tetap terhubung, takbersiklus, dan memuat semua simpul, tetapi $w(T')=w(T)+1-4=w(T)-3$. Hal ini bertentangan dengan minimalitas $T$. Jadi setiap MST memuat $e$. Perhitungan selisih bobot $-3$ memastikan kontradiksi bersifat ketat."
    },
    {
      "prompt": "MST-04. Suatu siklus memiliki bobot sisi $2,2,7,3$. Apakah sisi berbobot 7 dapat berada dalam MST graf terhubung yang memuat siklus itu?",
      "hint": "Gunakan sifat siklus dan periksa syarat maksimum tunggal.",
      "answer": "Diketahui siklus memiliki empat sisi berbobot $2,2,7,3$. Sisi $e$ berbobot 7 merupakan maksimum tunggal karena semua bobot lain lebih kecil. Andaikan terdapat MST $T$ yang memuat $e$. Setelah $e$ dihapus, $T$ terpecah menjadi dua komponen. Lintasan pada siklus yang menghubungkan ujung-ujung $e$ tanpa menggunakan $e$ harus mempunyai sedikitnya satu sisi $f$ yang menghubungkan kedua komponen; sisi tersebut berbobot 2 atau 3, jadi $w(f)<7$. Mengganti $e$ dengan $f$ menghasilkan pohon berentang berbobot $w(T)-7+w(f)<w(T)$, bertentangan dengan optimalitas. Sisi berbobot 7 tidak mungkin termasuk MST mana pun. Dua sisi berbobot 2 yang seri tidak mengganggu argumen karena yang disyaratkan unik adalah maksimum 7."
    },
    {
      "prompt": "MST-05. Berikan graf berbobot yang mempunyai MST tunggal walaupun ada dua sisi berbobot sama; buktikan ketunggalannya.",
      "hint": "Gunakan segitiga dengan dua sisi ringan yang sama dan satu sisi jauh lebih berat.",
      "answer": "Ambil graf segitiga $V=\\{A,B,C\\}$ dengan $w(AB)=1$, $w(BC)=1$, dan $w(AC)=4$. Dua sisi mempunyai bobot sama, sehingga hipotesis 'semua bobot berbeda' tidak terpenuhi. Setiap pohon berentang menggunakan tepat dua sisi. Pohon $\\{AB,BC\\}$ berbobot $1+1=2$, sedangkan $\\{AB,AC\\}$ dan $\\{BC,AC\\}$ masing-masing berbobot $1+4=5$. Ketiga kemungkinan sudah lengkap, karena memilih dua dari tiga sisi segitiga selalu menghasilkan pohon berentang. Hanya satu kandidat mencapai minimum 2, sehingga MST tunggal. Contoh ini membantah kebalikan teorema ketunggalan: bobot berbeda cukup, tetapi tidak perlu, untuk ketunggalan MST."
    },
    {
      "prompt": "MST-06. Graf mempunyai komponen $\\{A,B,C\\}$ dengan sisi $AB(1),BC(2),AC(8)$ dan komponen $\\{D,E\\}$ dengan sisi $DE(4)$. Tentukan keluaran Kruskal dan jelaskan statusnya.",
      "hint": "Kerjakan setiap komponen; jangan menyebut gabungannya pohon berentang.",
      "answer": "Graf tidak terhubung karena tidak ada sisi antara $\\{A,B,C\\}$ dan $\\{D,E\\}$. Tidak mungkin ada pohon yang memuat kelima simpul sekaligus, sehingga MST global tidak terdefinisi. Pada komponen pertama, Kruskal menerima $AB(1)$ lalu $BC(2)$; sisi $AC(8)$ ditolak karena membentuk siklus. Pohon komponen pertama berbobot 3 dan optimal, sebab dua kandidat lain berbobot $1+8=9$ dan $2+8=10$. Pada komponen kedua, satu-satunya sisi $DE(4)$ wajib diterima. Gabungan $\\{AB,BC,DE\\}$ mempunyai bobot $1+2+4=7$ dan tepat dua komponen, sesuai komponen graf asal. Keluaran tersebut adalah hutan berentang minimum; menyebutnya MST global akan melanggar syarat keterhubungan."
    },
    {
      "prompt": "MST-07. Pada segitiga dengan $w(AB)=-5$, $w(BC)=-1$, dan $w(AC)=2$, tentukan MST dan verifikasi bahwa bobot negatif tidak menimbulkan masalah.",
      "hint": "Semua pohon pada tiga simpul mempunyai dua sisi, walaupun bobot dapat negatif.",
      "answer": "Diketahui graf segitiga dengan bobot real, termasuk dua bobot negatif. Definisi MST tidak mensyaratkan bobot nonnegatif. Tiga pilihan pohon berentang dan bobotnya adalah $\\{AB,BC\\}$ dengan $-5+(-1)=-6$, $\\{AB,AC\\}$ dengan $-5+2=-3$, dan $\\{BC,AC\\}$ dengan $-1+2=1$. Masing-masing memuat dua sisi dan seluruh simpul, sehingga seluruh kandidat layak. Minimum tunggal adalah $-6$ pada $\\{AB,BC\\}$. Kruskal menerima $AB(-5)$, kemudian $BC(-1)$, dan menolak $AC(2)$ karena akan membentuk siklus. Nilai negatif tidak menimbulkan kontradiksi: optimisasi hanya membandingkan jumlah bobot pohon, bukan panjang jarak yang harus nonnegatif."
    },
    {
      "prompt": "MST-08. Jika $w'(e)=3w(e)+2$ pada setiap sisi graf terhubung dengan $n$ simpul, buktikan bahwa himpunan MST untuk $w$ dan $w'$ sama.",
      "hint": "Setiap pohon berentang mempunyai tepat $n-1$ sisi.",
      "answer": "Diketahui graf berhingga terhubung dengan $n\\ge1$ simpul dan transformasi bobot $w'(e)=3w(e)+2$. Ambil sebarang pohon berentang $T$. Lemma banyak sisi pohon memberikan $|E(T)|=n-1$, sehingga $w'(T)=\\sum_{e\\in E(T)}(3w(e)+2)=3w(T)+2(n-1)$. Untuk dua pohon berentang $T_1,T_2$, diperoleh $w'(T_1)\\le w'(T_2)$ jika dan hanya jika $3w(T_1)+2(n-1)\\le3w(T_2)+2(n-1)$, yang ekuivalen dengan $w(T_1)\\le w(T_2)$ karena $3>0$. Kedua implikasi telah dibuktikan oleh pengurangan konstanta dan pembagian dengan bilangan positif, sehingga setiap peminimum $w$ juga peminimum $w'$ dan sebaliknya. Pada $n=1$, kedua bobot pohon kosong sama-sama nol dan argumen tetap berlaku. Himpunan MST tidak berubah, termasuk ketika ada beberapa MST."
    }
  ],
  "mistakes": [],
  "connections": []
};
