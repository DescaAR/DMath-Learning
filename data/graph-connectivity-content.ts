import type { BookLessonContent } from "@/data/book-content-types";

/** Original, proof-based graph connectivity and fully worked solutions. */
export const graphConnectivityContent:BookLessonContent={
  "intro": [
    "Dalam jaringan jalan dua arah, keberadaan sisi antara dua kota belum menjamin seluruh kota saling dapat dicapai. Pertanyaan keterhubungan menuntut sebuah lintasan dari setiap simpul ke setiap simpul lain. Pada graf yang sama, kita juga perlu membedakan kegagalan satu jalan (sisi) dan kegagalan satu persimpangan (simpul): keduanya dapat mempunyai akibat berbeda bagi jaringan.",
    "Sepanjang pembahasan, $G=(V,E)$ adalah graf sederhana, takberarah, dan hingga. Lintasan boleh memiliki panjang nol ketika simpul awal sama dengan simpul akhir. Banyak komponen ditulis $c(G)$; penghapusan simpul $v$ menghapus seluruh sisi yang menempel padanya, sedangkan penghapusan sisi $e$ mempertahankan semua simpul. Perbedaan operasi ini penting pada graf dengan simpul terisolasi.",
    "Kita membangun konsep dari lintasan dan komponen menuju potongan sisi, jembatan, simpul pemutus, serta pohon berentang. Setiap pernyataan dua arah dibuktikan dari definisi, dan contoh kecil digunakan untuk membedakan sifat yang memang ekuivalen dari sifat yang hanya berkaitan. Rujukan: R. Diestel, Graph Theory, edisi ke-5 (Springer, 2017), Bab 1 dan 3; J. A. Bondy dan U. S. R. Murty, Graph Theory (Springer, 2008), bab tentang keterhubungan."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Jalan, Lintasan, dan Graf Terhubung",
      "statement": "Jalan dari $u$ ke $v$ ialah urutan simpul $u=v_0,v_1,\\ldots,v_k=v$ dengan $v_{i-1}v_i\\in E$ untuk $1\\le i\\le k$; simpul boleh berulang. Lintasan ialah jalan yang semua simpulnya berbeda, kecuali lintasan panjang nol dari suatu simpul ke dirinya sendiri. Graf $G$ disebut terhubung jika untuk setiap $u,v\\in V$ terdapat lintasan $u$–$v$."
    },
    {
      "kind": "definition",
      "title": "Komponen Terhubung",
      "statement": "Komponen terhubung graf $G$ ialah subgraf terinduksi $G[C]$ yang terhubung dan maksimal terhadap inklusi himpunan simpul: tidak ada $C\\subsetneq C'\\subseteq V$ dengan $G[C']$ terhubung. Simpul terisolasi membentuk komponen satu simpul. Banyak komponen dinotasikan $c(G)$; untuk graf takkosong, $G$ terhubung tepat ketika $c(G)=1$."
    },
    {
      "kind": "definition",
      "title": "Simpul Pemutus",
      "statement": "Pada graf terhubung $G$ dengan $|V|\\ge3$, simpul $v$ disebut simpul pemutus apabila $G-v$ tidak terhubung. Operasi $G-v$ menghapus $v$ beserta seluruh sisi yang menempel padanya. Definisi ini tidak menyamakan simpul berderajat besar dengan simpul pemutus: derajat saja tidak menentukan apakah terdapat lintasan pengganti."
    },
    {
      "kind": "definition",
      "title": "Jembatan",
      "statement": "Sisi $e\\in E(G)$ disebut jembatan apabila $c(G-e)>c(G)$, dengan $G-e=(V,E\\setminus\\{e\\})$. Khusus ketika $G$ terhubung, $e$ merupakan jembatan tepat ketika $G-e$ tidak terhubung. Sisi pada suatu siklus tidak dapat menjadi jembatan karena kedua ujungnya masih dihubungkan oleh sisi-sisi lain pada siklus itu."
    },
    {
      "kind": "definition",
      "title": "Potongan Sisi dan Keterhubungan Sisi",
      "statement": "Untuk $\\varnothing\\ne S\\subsetneq V(G)$, potongan sisi $\\delta_G(S)$ ialah himpunan semua sisi dengan tepat satu ujung di $S$. Pada graf terhubung dengan $|V|\\ge2$, keterhubungan sisi didefinisikan oleh $\\lambda(G)=\\min_{\\varnothing\\ne S\\subsetneq V}|\\delta_G(S)|$. Derajat minimum dinotasikan $\\delta(G)=\\min_{v\\in V}\\deg(v)$; notasi $\\delta(G)$ berbeda dari himpunan potongan $\\delta_G(S)$."
    },
    {
      "kind": "theorem",
      "title": "Relasi Ketercapaian dan Partisi Komponen",
      "statement": "Untuk graf hingga takberarah $G=(V,E)$, definisikan $u\\sim v$ jika terdapat lintasan dari $u$ ke $v$. Relasi $\\sim$ merupakan relasi ekuivalensi pada $V$. Kelas-kelas ekuivalensinya tepat merupakan himpunan simpul komponen terhubung; akibatnya komponen membentuk partisi tunggal dari $V$.",
      "proof": [
        "Diambil sebarang $u,v,w\\in V$. Jalan panjang nol menunjukkan $u\\sim u$, sehingga relasi refleksif. Jika terdapat lintasan $u=v_0,\\ldots,v_k=v$, pembalikan urutan memberikan lintasan $v=v_k,\\ldots,v_0=u$ karena graf takberarah; relasi simetris. Jika $u\\sim v$ dan $v\\sim w$, gabungkan kedua lintasan menjadi jalan dari $u$ ke $w$. Jika jalan itu mengulangi simpul, hapus segmen antara dua kemunculan simpul yang sama. Setiap penghapusan memperpendek jalan dan mempertahankan kedua ujung; karena panjang hingga, akhirnya diperoleh lintasan $u$–$w$. Relasi transitif, sehingga $\\sim$ ekuivalensi.",
        "Untuk suatu kelas $C=[u]$, setiap $x,y\\in C$ memiliki lintasan $x$–$u$ dan $u$–$y$; penggabungan dan penghapusan pengulangan menghasilkan lintasan $x$–$y$. Semua simpul pada lintasan itu masih berada dalam $C$, karena setiap simpulnya dapat mencapai $u$. Dengan demikian $G[C]$ terhubung. Jika suatu simpul $z\\notin C$ dapat ditambahkan sambil mempertahankan keterhubungan, akan ada lintasan $z$–$u$, bertentangan dengan $z\\notin[u]$. Dengan demikian $C$ maksimal. Sebaliknya, setiap subgraf terinduksi terhubung maksimal harus sama dengan kelas salah satu simpulnya, karena kelas tersebut terhubung dan memuatnya. Kelas ekuivalensi saling lepas dan menutupi $V$; partisi komponen terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kriteria Potongan bagi Graf Terhubung",
      "statement": "Untuk graf takberarah hingga $G=(V,E)$ dengan $|V|\\ge2$, $G$ terhubung jika dan hanya jika $\\delta_G(S)\\ne\\varnothing$ untuk setiap $\\varnothing\\ne S\\subsetneq V$.",
      "proof": [
        "$(\\Rightarrow)$ Andaikan $G$ terhubung. Ambil sebarang himpunan $S$ yang tidak kosong dan bukan seluruh $V$, kemudian pilih $u\\in S$ dan $v\\in V\\setminus S$. Karena terhubung, terdapat lintasan $u=v_0,v_1,\\ldots,v_k=v$. Lintasan berawal di $S$ dan berakhir di luar $S$; karena urutannya hingga, terdapat indeks pertama $j$ dengan $v_j\\notin S$. Sisi $v_{j-1}v_j$ mempunyai tepat satu ujung di $S$, sehingga termasuk $\\delta_G(S)$. Dengan demikian potongan itu tidak kosong.",
        "$(\\Leftarrow)$ Andaikan setiap potongan taktrivial memuat sisi, tetapi $G$ tidak terhubung. Pilih suatu komponen dengan himpunan simpul $C$. Karena graf tidak terhubung, $C$ tidak kosong dan merupakan bagian sejati dari $V$. Tidak ada sisi dari $C$ ke $V\\setminus C$: keberadaan sisi demikian akan memberi lintasan dari simpul luar menuju komponen dan melanggar maksimalitas komponen. Dengan demikian $\\delta_G(C)=\\varnothing$, bertentangan dengan hipotesis. Graf harus terhubung. Kedua implikasi telah dibuktikan. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Jembatan melalui Siklus",
      "statement": "Misalkan $G$ graf takberarah hingga dan $e=uv\\in E(G)$. Sisi $e$ merupakan jembatan jika dan hanya jika tidak ada siklus di $G$ yang memuat $e$.",
      "proof": [
        "$(\\Rightarrow)$ Misalkan $e$ jembatan. Andaikan terdapat siklus yang memuat $e=uv$. Setelah sisi $e$ dihapus dari siklus tersebut, sisa sisi-sisinya membentuk lintasan $u$–$v$ dalam $G-e$. Setiap jalan di $G$ yang memakai $e$ dapat mengganti langkah $u$–$v$ atau $v$–$u$ dengan lintasan pengganti itu. Karena itu dua simpul yang semula berada dalam komponen yang sama tetap saling terhubung setelah $e$ dihapus. Komponen lain juga tidak berubah, sehingga $c(G-e)=c(G)$, bertentangan dengan definisi jembatan.",
        "$(\\Leftarrow)$ Andaikan $e$ tidak berada pada siklus mana pun. Jika $e$ bukan jembatan, kedua ujung $u$ dan $v$ tetap berada dalam komponen yang sama pada $G-e$: jika keduanya terpisah, penghapusan $e$ akan menambah jumlah komponen. Dengan demikian terdapat lintasan sederhana $P$ dari $u$ ke $v$ yang tidak memakai $e$. Menambahkan sisi $uv$ ke lintasan $P$ menghasilkan siklus yang memuat $e$, bertentangan dengan hipotesis. Dengan demikian $e$ jembatan. Karakterisasi dua arah selesai. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Simpul Pemutus melalui Semua Lintasan",
      "statement": "Misalkan $G$ graf terhubung dengan $|V|\\ge3$ dan $v\\in V$. Simpul $v$ merupakan simpul pemutus jika dan hanya jika terdapat $u,w\\in V\\setminus\\{v\\}$ yang berbeda sedemikian sehingga setiap lintasan $u$–$w$ di $G$ melalui $v$.",
      "proof": [
        "$(\\Rightarrow)$ Jika $v$ simpul pemutus, $G-v$ tidak terhubung. Pilih $u$ dan $w$ dari dua komponen berbeda pada $G-v$. Keduanya berbeda dari $v$. Karena $G$ semula terhubung, terdapat sedikitnya satu lintasan $u$–$w$ di $G$. Andaikan salah satu lintasan tersebut tidak melalui $v$; seluruh simpul dan sisinya masih ada dalam $G-v$, sehingga lintasan itu menghubungkan dua komponen berbeda di $G-v$. Kontradiksi. Karena itu setiap lintasan $u$–$w$ melewati $v$.",
        "$(\\Leftarrow)$ Andaikan terdapat $u,w\\ne v$ sehingga semua lintasan $u$–$w$ di $G$ melewati $v$. Jika $G-v$ masih terhubung, terdapat lintasan $u$–$w$ di $G-v$ karena kedua simpul tetap ada. Lintasan ini juga lintasan di $G$ dan tidak memuat $v$, bertentangan dengan asumsi. Dengan demikian $G-v$ tidak terhubung, sehingga $v$ simpul pemutus. Hipotesis $|V|\\ge3$ menjamin terdapat setidaknya dua simpul yang tersisa dan menghindari kasus graf satu simpul setelah penghapusan. Kedua arah terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Keterhubungan dan Keberadaan Pohon Berentang",
      "statement": "Graf sederhana hingga $G$ terhubung jika dan hanya jika mempunyai pohon berentang, yaitu subgraf pohon dengan himpunan simpul tepat $V(G)$. Jika $G$ terhubung dengan $n\\ge1$ simpul, maka $|E(G)|\\ge n-1$; kesamaan berlaku jika dan hanya jika $G$ sendiri pohon.",
      "proof": [
        "$(\\Rightarrow)$ Andaikan $G$ terhubung. Mulailah dengan semua simpul dan semua sisi $G$. Selama masih ada siklus, pilih satu sisi pada siklus itu dan hapus. Penghapusan tidak merusak keterhubungan karena dua ujung sisi tersebut tetap dihubungkan oleh bagian lain dari siklus; setiap lintasan yang memakai sisi terhapus dapat diganti dengan jalan melalui sisi-sisi siklus lainnya. Proses berhenti karena jumlah sisi berkurang satu pada setiap langkah. Subgraf akhir terhubung, tidak bersiklus, dan tetap memuat semua simpul, sehingga merupakan pohon berentang. Sebaliknya, jika $G$ mempunyai pohon berentang $T$, lintasan antara setiap dua simpul di $T$ juga terdapat di $G$, sehingga $G$ terhubung.",
        "Setiap pohon berhingga dengan $n$ simpul memiliki $n-1$ sisi. Hal ini dapat dibuktikan dengan induksi: pohon satu simpul mempunyai nol sisi; pohon dengan $n\\ge2$ mempunyai daun, dan menghapus daun beserta sisi tunggalnya menghasilkan pohon dengan $n-1$ simpul dan $n-2$ sisi. Karena pohon berentang $T$ memakai sisi-sisi $G$, diperoleh $|E(G)|\\ge|E(T)|=n-1$. Jika kesamaan terjadi, $E(G)=E(T)$ sehingga $G=T$ pohon. Sebaliknya pohon mempunyai tepat $n-1$ sisi. Seluruh pernyataan terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Keterhubungan Sisi oleh Derajat Minimum",
      "statement": "Jika $G$ graf sederhana terhubung dengan $n\\ge2$ simpul, maka $1\\le\\lambda(G)\\le\\delta(G)$. Jika $G$ pohon dengan $n\\ge2$, berlaku $\\lambda(G)=1$.",
      "proof": [
        "Diketahui $G$ terhubung dan $n\\ge2$. Berdasarkan kriteria potongan, setiap $\\delta_G(S)$ untuk $\\varnothing\\ne S\\subsetneq V$ tidak kosong, sehingga kardinalitasnya sedikitnya satu. Karena terdapat berhingga banyak pilihan $S$, minimum kardinalitas potongan ada dan memenuhi $\\lambda(G)\\ge1$. Pilih simpul $v$ dengan derajat minimum $\\delta(G)$. Untuk $S=\\{v\\}$, semua sisi yang keluar dari $S$ tepat sisi yang menempel pada $v$, sehingga $|\\delta_G(\\{v\\})|=\\deg(v)=\\delta(G)$. Minimum atas semua potongan tidak dapat melebihi nilai khusus ini, sehingga $\\lambda(G)\\le\\delta(G)$.",
        "Jika $G$ pohon dengan sedikitnya dua simpul, pilih sembarang sisi $e=uv$. Karena pohon tidak memiliki siklus, teorema karakterisasi jembatan menyatakan $e$ jembatan. Penghapusan $e$ membagi pohon menjadi dua komponen dengan himpunan simpul $S$ dan $V\\setminus S$; satu-satunya sisi yang melintasi kedua bagian sebelum penghapusan adalah $e$, sebab sisi lain yang melintas akan menghubungkan kedua komponen setelah $e$ dihapus. Oleh karena itu $|\\delta_G(S)|=1$, sehingga $\\lambda(G)\\le1$. Digabung dengan batas bawah $\\lambda(G)\\ge1$, diperoleh $\\lambda(G)=1$. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Jalan dan Lintasan pada Graf Empat Simpul",
      "forDefinition": "Jalan, Lintasan, dan Graf Terhubung",
      "problem": "Untuk $V=\\{1,2,3,4\\}$ dan $E=\\{12,23,31,34\\}$, berikan jalan yang bukan lintasan dan lintasan dari $1$ ke $4$; periksa keterhubungan.",
      "solution": [
        "Diketahui sisi $12,23,31$ membentuk segitiga, sedangkan $34$ menghubungkan simpul $4$ ke simpul $3$. Urutan $1,2,3,1,3,4$ merupakan jalan karena setiap pasangan berurutan adalah sisi graf. Urutan itu bukan lintasan sebab simpul $1$ dan $3$ muncul berulang. Sebaliknya, $1,3,4$ adalah lintasan dari $1$ ke $4$: kedua sisi $13$ dan $34$ ada dan ketiga simpul berbeda.",
        "Untuk memeriksa keterhubungan, cukup amati bahwa simpul $1,2,3$ saling dapat dicapai di dalam segitiga, sedangkan simpul $4$ dapat dicapai dari ketiganya melalui $3$. Misalnya $2,3,4$ menghubungkan $2$ ke $4$. Dengan demikian setiap pasangan simpul memiliki lintasan; graf terhubung. Keberadaan jalan berulang tidak menjadi syarat maupun penghalang keterhubungan."
      ]
    },
    {
      "title": "Contoh Komponen pada Gabungan Tiga Graf",
      "forDefinition": "Komponen Terhubung",
      "problem": "Graf mempunyai $V=\\{1,2,3,4,5,6\\}$ dan $E=\\{12,23,31,45\\}$. Tentukan semua komponen, termasuk simpul terisolasi.",
      "solution": [
        "Diketahui $1,2,3$ membentuk segitiga, sehingga setiap dua simpul di antara ketiganya dapat dihubungkan langsung. Simpul $4$ dan $5$ dihubungkan oleh sisi $45$. Simpul $6$ tidak menempel pada sisi apa pun dan membentuk subgraf terhubung satu simpul melalui lintasan panjang nol.",
        "Tidak ada sisi dari $\\{1,2,3\\}$ ke $\\{4,5,6\\}$, dan tidak ada sisi dari $\\{4,5\\}$ ke $\\{6\\}$. Oleh karena itu ketiga subgraf terinduksi tersebut maksimal terhubung. Komponennya tepat $C_1=\\{1,2,3\\}$, $C_2=\\{4,5\\}$, dan $C_3=\\{6\\}$, sehingga $c(G)=3$. Jumlah kardinalitas komponen adalah $3+2+1=6=|V|$, sesuai sifat partisi."
      ]
    },
    {
      "title": "Contoh Simpul Pemutus dan Penghapusan Simpul",
      "forDefinition": "Simpul Pemutus",
      "problem": "Untuk graf dengan $E=\\{12,23,31,34\\}$, tentukan apakah $3$ dan $1$ merupakan simpul pemutus.",
      "solution": [
        "Graf asal terhubung karena segitiga $1,2,3$ mempunyai jalur menuju $4$ melalui $3$. Setelah simpul $3$ dihapus, seluruh sisi yang menempel padanya, yaitu $23,31,34$, juga hilang. Graf $G-3$ mempunyai simpul $\\{1,2,4\\}$ dan hanya sisi $12$, sehingga komponennya $\\{1,2\\}$ dan $\\{4\\}$. Karena graf asal terhubung tetapi $G-3$ tidak, simpul $3$ adalah simpul pemutus.",
        "Sebaliknya, setelah $1$ dihapus, tersisa simpul $\\{2,3,4\\}$ dan sisi $23,34$, yang membentuk lintasan $2,3,4$. Graf $G-1$ tetap terhubung, sehingga $1$ bukan simpul pemutus. Derajat $3$ adalah tiga, tetapi argumen yang menentukan status pemutus adalah hilangnya semua lintasan dari $4$ ke $1$ dan $2$, bukan semata besar derajatnya."
      ]
    },
    {
      "title": "Contoh Jembatan pada Segitiga dengan Ekor",
      "forDefinition": "Jembatan",
      "problem": "Pada graf $E=\\{12,23,31,34\\}$, tentukan semua jembatan dan verifikasi melalui penghapusan sisi.",
      "solution": [
        "Sisi $12,23,31$ masing-masing berada pada siklus $1,2,3,1$. Menurut karakterisasi jembatan, tidak satu pun dari ketiga sisi tersebut jembatan. Sebagai pemeriksaan, setelah $12$ dihapus, masih ada lintasan $1,3,2$, sedangkan simpul $4$ tetap terhubung melalui $3$. Alasan serupa berlaku bagi dua sisi segitiga lainnya.",
        "Sisi $34$ tidak berada pada siklus karena simpul $4$ berderajat satu. Menghapus $34$ memisahkan $\\{4\\}$ dari $\\{1,2,3\\}$, sehingga banyak komponen naik dari satu menjadi dua. Dengan demikian himpunan jembatan tepat $\\{34\\}$. Contoh ini memperlihatkan bahwa sebuah sisi dapat kritis walaupun berada pada graf yang mempunyai siklus di bagian lain."
      ]
    },
    {
      "title": "Contoh Potongan Sisi pada Bintang",
      "forDefinition": "Potongan Sisi dan Keterhubungan Sisi",
      "problem": "Untuk bintang $K_{1,4}$ berpusat di $0$ dengan daun $1,2,3,4$, hitung $\\delta(G)$, suatu potongan minimum, dan $\\lambda(G)$.",
      "solution": [
        "Diketahui $E=\\{01,02,03,04\\}$. Pusat $0$ berderajat empat dan setiap daun berderajat satu, sehingga derajat minimum $\\delta(G)=1$. Ambil $S=\\{1\\}$. Satu-satunya sisi dengan tepat satu ujung di $S$ adalah $01$, sehingga $\\delta_G(S)=\\{01\\}$ dan $|\\delta_G(S)|=1$.",
        "Graf ini terhubung, sehingga setiap potongan taktrivial memiliki sedikitnya satu sisi. Dengan demikian $\\lambda(G)\\ge1$. Potongan yang baru dihitung memberi $\\lambda(G)\\le1$, sehingga $\\lambda(G)=1$. Verifikasi langsung: setelah sisi $01$ dihapus, simpul $1$ terisolasi; setelah sisi mana pun dari bintang dihapus, daun yang bersesuaian terpisah. Bintang merupakan pohon dan konsisten dengan teorema $\\lambda(T)=1$."
      ]
    },
    {
      "title": "Contoh Dua Segitiga Berbagi Simpul",
      "problem": "Dua segitiga $123$ dan $345$ berbagi tepat simpul $3$. Tentukan apakah graf mempunyai jembatan dan simpul pemutus.",
      "solution": [
        "Himpunan sisi adalah $\\{12,23,31,34,45,53\\}$. Setiap sisi berada pada salah satu dari dua siklus segitiga, sehingga menurut teorema jembatan tidak ada sisi yang merupakan jembatan. Penghapusan sisi $12$, misalnya, masih menyisakan lintasan $1,3,2$ dan seluruh simpul tetap terhubung; hal serupa berlaku pada sisi lainnya.",
        "Akan tetapi, penghapusan simpul $3$ menghapus empat sisi yang menempel padanya. Graf yang tersisa memiliki komponen $\\{1,2\\}$ dan $\\{4,5\\}$, sehingga $3$ adalah simpul pemutus. Ini merupakan contoh tandingan bagi klaim bahwa tidak adanya jembatan otomatis meniadakan simpul pemutus. Kegagalan satu sisi dan kegagalan satu simpul adalah dua ukuran ketahanan yang berbeda."
      ]
    },
    {
      "title": "Contoh Potongan dan Kriteria Keterhubungan",
      "problem": "Periksa kriteria potongan pada $C_4$ dan pada gabungan dua sisi terpisah $12$ dan $34$.",
      "solution": [
        "Untuk $C_4$ dengan sisi $12,23,34,41$, setiap pasangan simpul dapat dihubungkan melalui bagian siklus. Ambil sembarang $S$ yang tidak kosong dan bukan seluruh $V$. Pilih $u\\in S$ dan $v\\notin S$; lintasan pada siklus dari $u$ ke $v$ harus melintasi batas $S$, sehingga $\\delta_G(S)\\ne\\varnothing$. Misalnya untuk $S=\\{1,2\\}$, potongannya $\\{23,41\\}$.",
        "Pada graf kedua dengan $E=\\{12,34\\}$, pilih $S=\\{1,2\\}$. Tidak ada sisi menuju $\\{3,4\\}$, sehingga $\\delta_G(S)=\\varnothing$. Graf mempunyai dua komponen dan tidak terhubung. Contoh ini memeriksa kedua sisi karakterisasi: potongan kosong memberikan saksi eksplisit ketakterhubungan, bukan sekadar ketiadaan sisi pada gambar."
      ]
    },
    {
      "title": "Contoh Batas Sisi dan Perlunya Keterhubungan",
      "problem": "Bandingkan $P_4$ dan graf $K_3$ ditambah satu simpul terisolasi. Keduanya mempunyai empat simpul dan tiga sisi; apakah keduanya pohon?",
      "solution": [
        "Lintasan $P_4$ memiliki sisi $\\{12,23,34\\}$, terhubung, dan tidak mempunyai siklus. Karena itu $P_4$ adalah pohon dengan $n-1=3$ sisi. Pada graf kedua, sisi $\\{12,23,31\\}$ membentuk segitiga dan simpul $4$ terisolasi. Graf ini tidak terhubung dan mempunyai siklus, sehingga bukan pohon walaupun juga memiliki tepat tiga sisi.",
        "Teorema menyatakan bahwa bagi graf yang sudah diketahui terhubung, kesamaan $|E|=n-1$ memaksa graf menjadi pohon. Graf $K_3\\cup K_1$ tidak memenuhi hipotesis keterhubungan tersebut. Oleh sebab itu jumlah sisi saja tidak cukup untuk menguji apakah sebuah graf merupakan pohon; pemeriksaan lintasan antarsemua simpul tetap diperlukan."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "KG-01. Pada graf dengan $V=\\{1,2,3,4,5,6,7\\}$ dan $E=\\{12,23,31,34,45,67\\}$, tentukan komponen, banyak komponen, dan satu lintasan dari $1$ ke $5$.",
      "hint": "Tentukan kelas ketercapaian dan bedakan lintasan di dalam komponen dari lintasan antarkomponen.",
      "answer": "Diketahui segitiga pada simpul $1,2,3$, dua sisi $34,45$ yang memperpanjangnya, serta sisi terpisah $67$. Dari $1$ dapat dicapai $2$ dan $3$ melalui segitiga, lalu $4$ melalui $34$ dan $5$ melalui $45$. Karena itu $\\{1,2,3,4,5\\}$ terhubung. Simpul $6$ dan $7$ saling terhubung melalui $67$, tetapi tidak ada sisi yang menghubungkannya ke lima simpul pertama. Kedua himpunan tersebut maksimal terhubung, sehingga komponennya $C_1=\\{1,2,3,4,5\\}$ dan $C_2=\\{6,7\\}$, dengan $c(G)=2$. Salah satu lintasan dari $1$ ke $5$ ialah $1,3,4,5$: setiap pasangan berturutan adalah sisi dan semua simpul berbeda. Tidak ada lintasan dari $1$ ke $6$, sebab itu akan menyatukan dua komponen yang berbeda."
    },
    {
      "prompt": "KG-02. Untuk graf pada KG-01, tentukan semua jembatan. Buktikan setiap keputusan menggunakan siklus atau lintasan pengganti.",
      "hint": "Periksa tiga sisi segitiga, dua sisi ekor, dan komponen dua simpul.",
      "answer": "Graf mempunyai sisi $12,23,31,34,45,67$. Ketiga sisi $12,23,31$ berada pada siklus $1,2,3,1$; setelah salah satunya dihapus, kedua ujung masih dihubungkan oleh dua sisi segitiga yang lain. Karena itu ketiganya bukan jembatan. Sisi $34$ tidak berada pada siklus: dari simpul $4$ menuju bagian segitiga hanya ada sisi $34$. Menghapusnya memisahkan $\\{4,5\\}$ dari $\\{1,2,3\\}$ di komponen pertama, sehingga jumlah komponen bertambah. Sisi $45$ merupakan satu-satunya sisi yang menempel pada $5$; menghapusnya mengisolasi $5$. Sisi $67$ satu-satunya sisi di komponen $\\{6,7\\}$; penghapusannya menghasilkan dua simpul terisolasi. Dengan karakterisasi jembatan, himpunan jembatan tepat $\\{34,45,67\\}$. Walaupun graf awal tidak terhubung, definisi jembatan melalui kenaikan $c(G)$ tetap berlaku."
    },
    {
      "prompt": "KG-03. Dua segitiga $123$ dan $345$ berbagi simpul $3$. Buktikan bahwa $3$ simpul pemutus, tetapi graf tidak mempunyai jembatan.",
      "hint": "Bandingkan penghapusan simpul dan penghapusan sisi.",
      "answer": "Diketahui $E=\\{12,23,31,34,45,53\\}$ dan graf terhubung karena setiap simpul di segitiga pertama dapat mencapai segitiga kedua melalui $3$. Setelah $3$ dihapus, sisi $23,31,34,53$ ikut hilang; tersisa sisi $12$ dan $45$, sehingga $G-3$ memiliki dua komponen $\\{1,2\\}$ dan $\\{4,5\\}$. Definisi simpul pemutus dipenuhi. Di sisi lain, setiap sisi graf terletak pada suatu siklus: sisi $12,23,31$ pada siklus $1231$, sedangkan $34,45,53$ pada siklus $3453$. Teorema jembatan menyatakan sisi pada siklus tidak menjadi jembatan, sehingga tidak ada jembatan. Verifikasi ini membuktikan bahwa ketahanan terhadap penghapusan satu sisi tidak sama dengan ketahanan terhadap penghapusan satu simpul."
    },
    {
      "prompt": "KG-04. Tentukan $\\lambda(C_5)$ dan $\\lambda(K_{1,4})$ secara eksak; jangan hanya menyebut derajat minimum.",
      "hint": "Berikan potongan yang mencapai batas atas dan buktikan tidak ada potongan lebih kecil.",
      "answer": "Pada $C_5$, setiap simpul berderajat dua, sehingga proposisi memberi $\\lambda(C_5)\\le2$. Setiap sisi berada pada siklus, maka tidak ada jembatan. Jika terdapat potongan berukuran satu, menghapus satu-satunya sisi potongan itu akan memisahkan dua bagian, menjadikannya jembatan; kontradiksi. Dengan demikian setiap potongan taktrivial mempunyai sedikitnya dua sisi, yakni $\\lambda(C_5)\\ge2$. Diperoleh $\\lambda(C_5)=2$, dan potongan $S=\\{1\\}$ memang memuat dua sisi. Pada bintang $K_{1,4}$, setiap daun berderajat satu. Memilih $S$ sebagai satu daun memberi potongan berukuran satu, sehingga $\\lambda\\le1$. Karena bintang terhubung, $\\lambda\\ge1$; hasilnya $\\lambda(K_{1,4})=1$. Kedua nilai diperoleh melalui batas atas dan bawah yang saling cocok."
    },
    {
      "prompt": "KG-05. Buktikan dengan kedua implikasi bahwa graf hingga $G$ dengan $|V|\\ge2$ terhubung jika dan hanya jika setiap potongan taktrivial tidak kosong.",
      "hint": "Gunakan lintasan melintasi batas untuk arah maju dan komponen sebagai saksi untuk arah balik.",
      "answer": "$(\\Rightarrow)$ Ambil graf terhubung dan $\\varnothing\\ne S\\subsetneq V$. Pilih $u\\in S$ dan $v\\notin S$. Ada lintasan $u=v_0,\\ldots,v_k=v$. Karena titik awal berada di $S$ sedangkan titik akhir di luarnya, terdapat indeks pertama $j$ dengan $v_j\\notin S$. Sisi $v_{j-1}v_j$ melintasi batas $S$, sehingga $\\delta_G(S)$ tidak kosong. $(\\Leftarrow)$ Andaikan setiap potongan taktrivial tidak kosong, tetapi graf tidak terhubung. Pilih himpunan simpul $C$ dari satu komponen. Karena ada komponen lain, $C$ tidak kosong dan bukan seluruh $V$. Tidak ada sisi dari $C$ ke $V\\setminus C$, sebab sisi demikian akan menghubungkan dua komponen. Oleh karena itu $\\delta_G(C)=\\varnothing$, kontradiksi. Dengan demikian graf terhubung. Kedua arah memanfaatkan kuantor yang tepat: semua $S$, bukan hanya satu pilihan $S$."
    },
    {
      "prompt": "KG-06. Buktikan graf terhubung dengan $n$ simpul mempunyai sedikitnya $n-1$ sisi, lalu berikan contoh graf takterhubung dengan tepat $n-1$ sisi.",
      "hint": "Bangun pohon berentang dan gunakan $K_3cup K_1$ sebagai noncontoh.",
      "answer": "Ambil graf terhubung $G$ dengan $n\\ge1$ simpul. Jika ada siklus, hapus satu sisi dari siklus; keterhubungan tetap terjaga karena sisa siklus menyediakan lintasan pengganti antara ujung sisi yang dihapus. Ulangi hingga tidak ada siklus. Proses berhenti karena jumlah sisi berhingga dan menurun pada setiap langkah. Subgraf akhir terhubung, tidak bersiklus, serta memuat seluruh simpul, sehingga pohon berentang $T$. Pohon berhingga dengan $n$ simpul mempunyai tepat $n-1$ sisi, maka $|E(G)|\\ge|E(T)|=n-1$. Sebagai noncontoh bagi kebalikan tanpa syarat terhubung, pilih $K_3\\cup K_1$ dengan empat simpul dan tiga sisi. Di sini $|E|=4-1$, tetapi simpul keempat terisolasi sehingga graf tidak terhubung. Dengan demikian batas jumlah sisi adalah syarat perlu bagi graf terhubung, bukan syarat cukup tanpa hipotesis tambahan."
    },
    {
      "prompt": "KG-07. Pada graf $G$ dengan $k$ komponen, buktikan penambahan satu sisi baru antara dua simpul dapat menurunkan banyak komponen paling banyak satu. Tentukan kapan tepat turun satu.",
      "hint": "Bedakan ujung sisi dalam komponen yang sama dan komponen yang berbeda.",
      "answer": "Misalkan sisi baru $e=uv$ ditambahkan pada graf sederhana $G$ dan semula $c(G)=k$. Jika $u$ dan $v$ sudah berada dalam komponen yang sama, penambahan $uv$ tidak menghubungkan komponen yang sebelumnya berbeda. Semua lintasan lama tetap tersedia dan tidak ada komponen yang terpecah oleh penambahan sisi, sehingga $c(G+e)=k$. Jika $u$ dan $v$ berada dalam komponen berbeda $C_u$ dan $C_v$, setiap simpul di $C_u$ dapat mencapai $u$, melewati sisi baru $uv$, lalu mencapai setiap simpul di $C_v$. Kedua komponen bergabung menjadi satu. Komponen lain tidak tersentuh, sebab sisi baru hanya memiliki ujung di kedua komponen tersebut. Karena itu $c(G+e)=k-1$. Dengan demikian penurunan banyak komponen paling banyak satu dan tepat satu jika dan hanya jika kedua ujung sisi baru semula berada pada komponen berbeda."
    },
    {
      "prompt": "KG-08. Graf $G$ terdiri atas segitiga $123$ dan $345$ yang berbagi simpul $3$. Tentukan $\\lambda(G)$, simpul pemutus, dan jelaskan mengapa tidak adanya jembatan tidak cukup untuk ketahanan simpul.",
      "hint": "Tentukan derajat minimum, periksa semua sisi berada pada siklus, dan hapus simpul $3$.",
      "answer": "Diketahui $E=\\{12,23,31,34,45,53\\}$. Graf terhubung dan setiap sisi berada pada salah satu segitiga, sehingga tidak mempunyai jembatan. Jika $\\lambda(G)=1$, ada potongan dengan tepat satu sisi; menghapus sisi tersebut memisahkan dua bagian dan menghasilkan jembatan, bertentangan dengan fakta sebelumnya. Karena itu $\\lambda(G)\\ge2$. Simpul $1$ berderajat dua dan potongan $S=\\{1\\}$ terdiri atas sisi $12$ dan $13$, sehingga $\\lambda(G)\\le2$. Gabungan kedua batas memberi $\\lambda(G)=2$. Selanjutnya $G-3$ memiliki komponen $\\{1,2\\}$ dan $\\{4,5\\}$; oleh definisi, $3$ simpul pemutus. Setiap simpul lain bukan pemutus karena segitiga terkait masih mempunyai lintasan alternatif dan tetap terhubung melalui $3$. Kesimpulan spesifiknya: dua sisi harus dihapus untuk memutus graf, tetapi cukup menghapus satu simpul, yaitu $3$, untuk memisahkannya."
    }
  ],
  "mistakes": [],
  "connections": []
};
