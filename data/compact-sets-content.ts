import type { BookLessonContent } from "@/data/book-content-types";

/** Kekompakan di R: bukti berbasis penutup terbuka dan solusi asli. */
export const compactSetsContent: BookLessonContent = {
  "intro": [
    "Pada himpunan bilangan real, sebuah penutup terbuka dapat terdiri atas tak hingga interval. Kekompakan menjamin bahwa meskipun penutup itu tak hingga, hanya sejumlah hingga anggotanya diperlukan untuk menutupi seluruh himpunan. Pernyataan ini berbeda dari sekadar terbatas: interval (0,1) terbatas, tetapi ada penutup terbukanya yang tidak memiliki subpenutup hingga.",
    "Sebagai contoh, keluarga U_n=(1/n,2) untuk n≥2 menutupi (0,1): setiap x>0 memenuhi 1/n<x untuk n cukup besar. Akan tetapi, setiap pilihan hingga U_n mempunyai indeks terbesar N, sehingga gabungannya (1/N,2) dan tidak menutupi titik 1/(2N). Sebaliknya, setiap penutup terbuka interval tertutup [0,1] selalu memiliki subpenutup hingga; fakta ini akan dibuktikan melalui sifat supremum bilangan real.",
    "Pembahasan bergerak dari penutup dan kekompakan relatif terhadap ruang, menuju kekompakan interval tertutup, Teorema Heine–Borel, karakterisasi barisan, dan citra kontinu. Hipotesis ruang asal selalu dinyatakan: 'tertutup dan terbatas' setara dengan kompak di ℝ, tetapi tidak boleh dipakai tanpa pemeriksaan pada ruang topologi umum.",
    "Rujukan: Walter Rudin, Principles of Mathematical Analysis, edisi ke-3 (1976), Bab 2 dan 4; James R. Munkres, Topology, edisi ke-2 (2000), bagian kekompakan. Pembuktian dan latihan di bawah dituliskan secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Penutup Terbuka",
      "statement": "Misalkan $K\\subseteq\\mathbb R$. Keluarga (U_i)_{i∈I} disebut penutup terbuka K apabila setiap U_i terbuka di ℝ dan K⊆⋃_{i∈I}U_i. Subpenutup hingga adalah pilihan indeks i_1,…,i_m dengan K⊆U_{i_1}∪⋯∪U_{i_m}. Untuk $K=\\varnothing$, keluarga kosong merupakan penutup dan subpenutup hingga.",
      "explanation": "Indeks I boleh tak hingga. Anggota penutup harus terbuka di ruang ambient yang dinyatakan; tidak cukup hanya menuliskan beberapa himpunan yang gabungannya memuat K."
    },
    {
      "kind": "definition",
      "title": "Himpunan Kompak",
      "statement": "Himpunan $K\\subseteq\\mathbb R$ disebut kompak apabila setiap penutup terbuka K mempunyai subpenutup hingga. Secara umum, K kompak sebagai subruang X apabila setiap penutup oleh himpunan terbuka relatif terhadap K mempunyai subpenutup hingga.",
      "explanation": "Definisi ini berlaku tanpa asumsi K tertutup atau terbatas; kedua sifat tersebut akan diperoleh sebagai teorema khusus di ℝ."
    },
    {
      "kind": "definition",
      "title": "Terbatas dan Tertutup",
      "statement": "Himpunan $K\\subseteq\\mathbb R$ disebut terbatas jika terdapat M>0 sehingga |x|≤M untuk semua $x\\in K$. Himpunan K disebut tertutup di ℝ jika ℝ∖K terbuka di ℝ; secara ekuivalen, setiap barisan di K yang konvergen di ℝ memiliki limit di K.",
      "explanation": "Terbatas dan tertutup adalah dua syarat yang berbeda. (0,1) terbatas tetapi tidak tertutup, sedangkan [0,∞) tertutup tetapi tidak terbatas."
    },
    {
      "kind": "definition",
      "title": "Kompak Sekuensial",
      "statement": "Himpunan $K\\subseteq\\mathbb R$ disebut kompak sekuensial jika setiap barisan (x_n) dengan $x_n\\in K$ mempunyai subbarisan (x_{n_j}) yang konvergen dalam ℝ ke suatu titik $x\\in K$.",
      "explanation": "Syarat limit berada dalam K tidak boleh dihilangkan. Barisan 1/n dalam (0,1) memiliki limit real 0, tetapi limit tersebut bukan anggota (0,1)."
    },
    {
      "kind": "proposition",
      "title": "Himpunan Hingga Bersifat Kompak",
      "statement": "Setiap himpunan hingga $F\\subseteq\\mathbb R$ kompak, termasuk himpunan kosong.",
      "proof": [
        "Ambil sebarang penutup terbuka (U_i)_{i∈I} dari F. Jika $F=\\varnothing$, keluarga kosong sudah merupakan subpenutup hingga, sehingga kasus ini selesai.",
        "Jika F={x_1,…,x_m} dengan m≥1, sifat menutupi menjamin untuk setiap j terdapat indeks i_j∈I dengan x_j∈U_{i_j}. Pemilihan hanya dilakukan sebanyak m kali.",
        "Karena setiap unsur F adalah salah satu x_j, diperoleh F⊆U_{i_1}∪⋯∪U_{i_m}. Jadi setiap penutup terbuka mempunyai subpenutup hingga dan F kompak. $\\square$"
      ],
      "explanation": "Sifat ini tidak bergantung pada jarak antartitik dan tetap berlaku pada ruang topologi apa pun."
    },
    {
      "kind": "proposition",
      "title": "Subhimpunan Tertutup dari Himpunan Kompak",
      "statement": "Jika $K\\subseteq\\mathbb R$ kompak dan $F\\subseteq K$ tertutup relatif terhadap K, maka F kompak.",
      "proof": [
        "Ambil sebarang penutup terbuka relatif (V_i)_{i∈I} dari F. Untuk setiap i, terdapat U_i terbuka di ℝ sehingga V_i=F∩U_i. Karena F tertutup relatif terhadap K, K∖F terbuka relatif terhadap K.",
        "Keluarga {K∖F}∪{K∩U_i:i∈I} merupakan penutup terbuka relatif terhadap K: titik dalam F ditutupi oleh salah satu U_i, sedangkan titik K∖F ditutupi oleh himpunan tambahan.",
        "Kekompakan K memberikan subpenutup hingga. Setelah anggota K∖F dibuang, anggota U_i yang terpilih masih menutupi F karena (K∖F)∩$F=\\varnothing$. Dengan demikian F mempunyai subpenutup hingga untuk penutup awal, sehingga F kompak. $\\square$"
      ],
      "explanation": "Sifat tertutup di sini relatif terhadap K; tidak perlu mengasumsikan F memiliki interior di ℝ."
    },
    {
      "kind": "proposition",
      "title": "Kompak di ℝ Mengakibatkan Terbatas dan Tertutup",
      "statement": "Jika $K\\subseteq\\mathbb R$ kompak, maka K terbatas dan tertutup di ℝ.",
      "proof": [
        "Untuk keterbatasan, keluarga U_n=(-n,n), $n\\in\\mathbb N$, menutupi ℝ dan karenanya K. Kekompakan menghasilkan U_{n_1},…,U_{n_m} yang menutupi K. Dengan N=max{n_1,…,n_m}, berlaku K⊆(-N,N). Kasus $K=\\varnothing$ langsung terbatas.",
        "Untuk ketertutupan, ambil $y\\in\\mathbb R$∖K. Untuk setiap $x\\in K$, tetapkan r_x=|x-y|/3>0, U_x=(x-r_x,x+r_x), dan V_x=(y-r_x,y+r_x). Kedua interval U_x dan V_x saling lepas: jika z berada pada keduanya, ketaksamaan segitiga memberi |x-y|≤|x-z|+|z-y|<2|x-y|/3, kontradiksi.",
        "Keluarga (U_x)_{$x\\in K$} menutupi K. Pilih subpenutup hingga U_{x_1},…,U_{x_m}. Interval V=⋂_{j=1}^m V_{x_j} terbuka dan memuat y; setiap titik K terletak dalam salah satu U_{x_j}, sedangkan V⊆V_{x_j} tidak beririsan dengan U_{x_j}. Jadi V∩$K=\\varnothing$.",
        "Setiap $y\\in\\mathbb R$∖K mempunyai persekitaran terbuka yang terletak dalam ℝ∖K. Oleh karena itu komplemen K terbuka dan K tertutup. Untuk $K=\\varnothing$, komplemennya ℝ terbuka. Kedua sifat terbukti. $\\square$"
      ],
      "explanation": "Bukti ketertutupan memakai subpenutup hingga secara esensial; tanpa kekompakan, irisan tak hingga persekitaran y tidak harus terbuka."
    },
    {
      "kind": "theorem",
      "title": "Interval Tertutup dan Terbatas Bersifat Kompak",
      "statement": "Untuk $a,b\\in\\mathbb R$ dengan $a\\le b$, interval [a,b] kompak.",
      "proof": [
        "Jika a=b, interval [a,b]={a} hingga dan kompak. Misalkan a<b dan (U_i)_{i∈I} penutup terbuka [a,b]. Definisikan E={x∈[a,b]:[a,x] dapat ditutupi oleh sejumlah hingga U_i}. Karena a berada dalam suatu U_i, diperoleh a∈E. Himpunan E tidak kosong dan dibatasi atas oleh b.",
        "Menurut sifat supremum ℝ, c=sup E∈[a,b]. Ada U_j yang memuat c. Karena U_j terbuka, terdapat ε>0 dengan (c-ε,c+ε)⊆U_j. Dari definisi supremum, terdapat x∈E dengan x>c-ε/2, kecuali c=a; jika c=a, gunakan x=a∈E. Dengan memilih x≤c, seluruh [x,min{b,c+ε/2}] terletak dalam U_j.",
        "Karena [a,x] memiliki subpenutup hingga, menambahkan U_j menghasilkan penutup hingga bagi [a,min{b,c+ε/2}]. Jika c<b, titik min{b,c+ε/2}>c termasuk E, bertentangan dengan c sebagai batas atas E. Jadi c=b.",
        "Karena b∈U_j dan x∈E dapat dipilih dengan x>b-ε/2, gabungan subpenutup hingga [a,x] dengan U_j menutupi [a,b]. Dengan demikian setiap penutup terbuka [a,b] memiliki subpenutup hingga. $\\square$"
      ],
      "explanation": "Sifat supremum, bukan panjang interval yang kecil, merupakan alasan mendasar mengapa argumen ini bekerja di ℝ."
    },
    {
      "kind": "theorem",
      "title": "Teorema Heine–Borel pada ℝ",
      "statement": "Untuk setiap $K\\subseteq\\mathbb R$, K kompak jika dan hanya jika K tertutup dan terbatas di ℝ.",
      "proof": [
        "($\\Rightarrow$) Andaikan K kompak. Proposisi 'Kompak di ℝ Mengakibatkan Terbatas dan Tertutup' memberikan keterbatasan dan ketertutupan K secara terpisah. Hipotesis tidak memerlukan K takkosong.",
        "($\\Leftarrow$) Andaikan K tertutup dan terbatas. Ada M>0 sehingga K⊆[-M,M]. Berdasarkan teorema kekompakan interval, [-M,M] kompak. Karena K tertutup di ℝ, K juga tertutup relatif terhadap [-M,M].",
        "Proposisi subhimpunan tertutup dari himpunan kompak menunjukkan K kompak. Kedua arah telah dibuktikan, termasuk kasus $K=\\varnothing$. $\\square$"
      ],
      "explanation": "Kesetaraan ini khusus ℝ (dan diperluas ke ℝ^n), bukan aturan otomatis pada ruang metrik sebarang."
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Kekompakan melalui Barisan",
      "statement": "Untuk $K\\subseteq\\mathbb R$, K kompak jika dan hanya jika setiap barisan dalam K mempunyai subbarisan yang konvergen ke suatu titik K.",
      "proof": [
        "($\\Rightarrow$) Jika K kompak, Heine–Borel memberi K terbatas dan tertutup. Ambil sebarang barisan (x_n) dalam K. Teorema Bolzano–Weierstrass untuk barisan real terbatas memberikan subbarisan x_{n_j}→$x\\in\\mathbb R$. Karena K tertutup dan semua suku subbarisan berada dalam K, sifat tertutup sekuensial menjamin $x\\in K$.",
        "($\\Leftarrow$) Andaikan sifat subbarisan berlaku. Jika K tidak terbatas, untuk setiap n pilih $x_n\\in K$ dengan |x_n|>n. Setiap subbarisan memenuhi |x_{n_j}|>n_j→∞, sehingga tidak dapat konvergen dalam ℝ. Kontradiksi; K terbatas.",
        "Andaikan K tidak tertutup. Ada x∈\\overline K∖K; untuk setiap n pilih $x_n\\in K$ dengan |x_n-x|<1/n. Seluruh barisan menuju x. Setiap subbarisan juga menuju x, dan karena limit real tunggal, tidak ada subbarisan yang menuju titik K. Kontradiksi; K tertutup.",
        "Karena K tertutup dan terbatas, Teorema Heine–Borel memastikan K kompak. Jika $K=\\varnothing$, pernyataan barisan berlaku secara vakum dan K kompak. Kedua implikasi terbukti. $\\square$"
      ],
      "explanation": "Bolzano–Weierstrass digunakan dengan hipotesis barisan real terbatas; ketertutupan diperlukan agar limit subbarisan tidak keluar dari K."
    },
    {
      "kind": "theorem",
      "title": "Citra Kontinu Himpunan Kompak",
      "statement": "Misalkan $K\\subseteq\\mathbb R$ kompak dan $f:K\\to\\mathbb R$ kontinu relatif terhadap K. Himpunan f(K) kompak di ℝ; akibatnya f(K) tertutup dan terbatas.",
      "proof": [
        "Ambil sebarang penutup terbuka (V_i)_{i∈I} dari f(K). Karena f kontinu, untuk setiap i, himpunan f^{-1}(V_i) terbuka relatif terhadap K. Keluarga pracitra tersebut menutupi K: setiap $x\\in K$ memiliki f(x)∈f(K), yang berada dalam suatu V_i.",
        "Kekompakan K memberikan indeks i_1,…,i_m sehingga K⊆⋃_{j=1}^m f^{-1}(V_{i_j}). Jika y∈f(K), pilih $x\\in K$ dengan y=f(x). Salah satu pracitra terpilih memuat x, sehingga y∈V_{i_j}. Ini membuktikan $f(K)\\subseteq$⋃_{j=1}^m V_{i_j}.",
        "Setiap penutup terbuka f(K) memiliki subpenutup hingga, sehingga f(K) kompak. Proposisi kekompakan di ℝ kemudian memberi tertutup dan terbatas. Untuk $K=\\varnothing$, citra kosong kompak. $\\square$"
      ],
      "explanation": "Teorema ini mendasari keberadaan nilai maksimum dan minimum fungsi kontinu pada interval tertutup."
    }
  ],
  "examples": [
    {
      "title": "Penutup Terbuka Tanpa Subpenutup Hingga",
      "forDefinition": "Penutup Terbuka",
      "problem": "Buktikan bahwa U_n=(1/n,2), n≥2, menutupi (0,1), tetapi tidak mempunyai subpenutup hingga.",
      "solution": [
        "Untuk setiap $x\\in(0,1)$, pilih bilangan bulat n>max{2,1/x}. Ketaksamaan 1/n<x<1<2 menunjukkan $x\\in U_n$. Jadi (0,1)⊆⋃_{n≥2}U_n.",
        "Ambil sembarang indeks hingga n_1,…,n_m dan tulis N=max{n_1,…,n_m}. Karena 1/n mengecil ketika n membesar, gabungan interval terpilih adalah (1/N,2). Titik x=1/(2N) berada dalam (0,1), tetapi tidak dalam (1/N,2).",
        "Setiap subkeluarga hingga gagal menutupi (0,1). Penutup ini merupakan sertifikat langsung bahwa (0,1) tidak kompak, tanpa sekadar mengutip Heine–Borel."
      ],
      "conclusion": "Interval terbatas tidak selalu kompak."
    },
    {
      "title": "Kekompakan Himpunan Tiga Titik",
      "forDefinition": "Himpunan Kompak",
      "problem": "Periksa kekompakan F={-2,0,5} langsung dari definisi.",
      "solution": [
        "Misalkan (U_i) penutup terbuka sebarang dari F. Karena -2 ditutupi, pilih U_p yang memuat -2; pilih U_q yang memuat 0 dan U_r yang memuat 5.",
        "Gabungan U_p∪U_q∪U_r menutupi ketiga titik. Walaupun p,q,r mungkin berimpit, jumlah anggota yang dipilih paling banyak tiga.",
        "Argumen berlaku untuk setiap penutup terbuka, bukan hanya penutup tertentu. Karena itu F kompak."
      ],
      "conclusion": "Himpunan hingga selalu kompak."
    },
    {
      "title": "Membedakan Tertutup dan Terbatas",
      "forDefinition": "Terbatas dan Tertutup",
      "problem": "Klasifikasikan (0,1), [0,∞), dan [0,1] berdasarkan ketertutupan, keterbatasan, dan kekompakan.",
      "solution": [
        "Pada (0,1), setiap x memenuhi |x|<1 sehingga terbatas, tetapi barisan x_n=1/n untuk n≥2 berada di dalamnya dan menuju 0∉(0,1); jadi tidak tertutup. Heine–Borel menyatakan tidak kompak.",
        "Himpunan [0,∞) tertutup karena komplemennya (-∞,0) terbuka. Akan tetapi, untuk setiap M>0 terdapat x=M+1∈[0,∞), sehingga tidak terbatas dan tidak kompak.",
        "Interval [0,1] tertutup karena komplemennya (-∞,0)∪(1,∞) terbuka; interval ini terbatas oleh 1. Berdasarkan Heine–Borel, [0,1] kompak."
      ],
      "conclusion": "Kedua syarat Heine–Borel harus diperiksa."
    },
    {
      "title": "Subbarisan dengan Dua Titik Limit",
      "forDefinition": "Kompak Sekuensial",
      "problem": "Untuk x_n=(-1)^n+1/n, tentukan dua subbarisan konvergen dan tempat limitnya.",
      "solution": [
        "Untuk n=2j, diperoleh x_{2j}=1+1/(2j)→1 karena 1/(2j)→0. Untuk n=2j-1, diperoleh x_{2j-1}=-1+1/(2j-1)→-1.",
        "Semua x_n berada dalam [-2,2]: untuk indeks genap nilainya antara 1 dan 3/2, untuk indeks ganjil nilainya antara -1 dan 0. Kedua limit 1 dan -1 juga berada dalam [-2,2].",
        "Adanya dua subbarisan dengan limit berbeda menunjukkan barisan awal tidak konvergen, tetapi tidak bertentangan dengan kekompakan sekuensial, yang hanya menuntut sedikitnya satu subbarisan konvergen."
      ],
      "conclusion": "Kekompakan tidak menuntut semua barisan konvergen."
    },
    {
      "title": "Subhimpunan Tertutup dari Interval",
      "forDefinition": "",
      "problem": "Tentukan apakah F={0}∪[1,2] kompak.",
      "solution": [
        "Himpunan [0,2] tertutup dan terbatas, sehingga kompak. Di dalam [0,2], komplemen relatif F adalah (0,1), yang terbuka relatif karena (0,1)=[0,2]∩(0,1).",
        "Karena F tertutup relatif terhadap [0,2], proposisi subhimpunan tertutup dari himpunan kompak memberi F kompak.",
        "Verifikasi langsung melalui Heine–Borel juga memungkinkan: F terbatas oleh 2 dan komplemennya (-∞,0)∪(0,1)∪(2,∞) terbuka."
      ],
      "conclusion": "F kompak meskipun tidak berupa satu interval."
    },
    {
      "title": "Subpenutup Eksplisit Interval Tertutup",
      "forDefinition": "",
      "problem": "Periksa bahwa U_1=(-1,3/5) dan U_2=(2/5,2) menutupi [0,1].",
      "solution": [
        "Jika x∈[0,1] dan x<3/5, maka x∈U_1. Jika x≥3/5, berlaku x>2/5 dan x≤1<2, sehingga x∈U_2.",
        "Jadi [0,1]⊆U_1∪U_2. Kedua himpunan terbuka, dan keduanya sendiri sudah merupakan subpenutup hingga dari penutup yang diberikan.",
        "Contoh ini hanya memeriksa satu penutup. Bukti bahwa [0,1] kompak harus berlaku untuk setiap penutup terbuka, sebagaimana teorema interval tertutup."
      ],
      "conclusion": "Satu contoh subpenutup bukan bukti kekompakan umum."
    },
    {
      "title": "Citra Kuadrat Interval Kompak",
      "forDefinition": "",
      "problem": "Untuk f(x)=x² pada K=[-2,3], tentukan f(K) dan buktikan kekompakannya.",
      "solution": [
        "Polinomial f kontinu pada K dan K kompak oleh Heine–Borel. Teorema citra kontinu memberi f(K) kompak.",
        "Nilai terkecil f adalah 0 karena 0∈K dan x²≥0. Nilai terbesar adalah 9 pada x=3: untuk -2≤x≤3, berlaku |x|≤3 dan x²≤9.",
        "Untuk setiap y∈[0,9], ambil x=√y∈[0,3]⊆K; maka f(x)=y. Jadi f(K)=[0,9], yang juga tertutup dan terbatas."
      ],
      "conclusion": "Citra kontinu kompak dan dapat dihitung persis."
    },
    {
      "title": "Kompak Tidak Sama dengan Terbuka",
      "forDefinition": "",
      "problem": "Apakah K=[0,1] terbuka dalam ℝ? Apakah K terbuka relatif terhadap dirinya sendiri?",
      "solution": [
        "Di ℝ, titik 0∈K tidak memiliki interval terbuka (−r,r) yang seluruhnya termuat dalam [0,1], sebab −r/2<0 untuk setiap r>0. Jadi K tidak terbuka di ℝ.",
        "Sebagai subruang K dengan topologi relatif, seluruh K terbuka: K=K∩ℝ dan ℝ terbuka di ℝ. Himpunan K juga tertutup relatif terhadap dirinya karena komplemennya dalam K kosong.",
        "Kekompakan K tidak berubah ketika dipandang sebagai subruang. Namun predikat 'terbuka' bergantung pada ruang ambient."
      ],
      "conclusion": "Topologi relatif tidak boleh disamakan dengan topologi ambient."
    }
  ],
  "exercises": [
    {
      "prompt": "HK-01. Buktikan langsung bahwa setiap himpunan dengan tepat empat unsur kompak.",
      "hint": "Pilih satu anggota penutup untuk setiap titik.",
      "answer": "Misalkan F={a,b,c,d}⊆ℝ dan (U_i) penutup terbuka F. Karena setiap titik berada dalam gabungan, pilih indeks i_a,i_b,i_c,i_d dengan a∈U_{i_a}, b∈U_{i_b}, c∈U_{i_c}, dan d∈U_{i_d}. Gabungan keempat himpunan ini menutupi F. Pemilihan berhingga tidak bergantung pada banyaknya anggota penutup semula. Jadi setiap penutup terbuka F memiliki subpenutup dengan paling banyak empat anggota dan F kompak."
    },
    {
      "prompt": "HK-02. Buat penutup terbuka (0,1) tanpa subpenutup hingga, lalu buktikan kedua klaim.",
      "hint": "Gunakan interval (1/n,2), n≥2.",
      "answer": "Ambil U_n=(1/n,2) untuk n≥2. Untuk setiap $x\\in(0,1)$, sifat Archimedes memberi n>max{2,1/x}, sehingga 1/n<x<2 dan $x\\in U_n$. Jadi keluarga ini menutupi (0,1). Untuk pilihan indeks hingga n_1,…,n_m, tetapkan N=max n_j. Karena interval bersarang, gabungannya (1/N,2). Titik 1/(2N) terletak dalam (0,1) tetapi tidak dalam gabungan itu. Tidak ada subpenutup hingga, sehingga (0,1) tidak kompak."
    },
    {
      "prompt": "HK-03. Buktikan [0,∞) tidak kompak dengan penutup terbuka eksplisit, tanpa Heine–Borel.",
      "hint": "Pakai U_n=(-1,n), n≥1.",
      "answer": "Tetapkan U_n=(-1,n) untuk n≥1. Setiap x≥0 berada dalam U_n apabila n>x; indeks demikian ada menurut sifat Archimedes. Jadi keluarga (U_n) menutupi [0,∞). Jika dipilih hanya U_{n_1},…,U_{n_m}, gabungannya (-1,N) dengan N=max n_j. Titik N+1 termasuk [0,∞) tetapi tidak berada dalam gabungan tersebut. Penutup terbuka ini tidak memiliki subpenutup hingga; akibatnya [0,∞) tidak kompak."
    },
    {
      "prompt": "HK-04. Buktikan K={0}∪{1/n:$n\\in\\mathbb N$} kompak langsung menggunakan penutup terbuka.",
      "hint": "Gunakan satu himpunan yang memuat 0 untuk menutupi ekor barisan.",
      "answer": "Misalkan (U_i) penutup terbuka K. Pilih U_{i_0} yang memuat 0. Karena terbuka, ada ε>0 dengan (−ε,ε)⊆U_{i_0}. Pilih N sehingga 1/N<ε. Untuk setiap n≥N, titik 1/n∈U_{i_0}; titik 0 juga tercakup. Tersisa hanya titik 1,1/2,…,1/(N−1), yang jumlahnya hingga. Pilih satu anggota penutup untuk masing-masing titik tersebut. Gabungan anggota yang terpilih bersama U_{i_0} menutupi seluruh K. Karena penutup awal sebarang, K kompak."
    },
    {
      "prompt": "HK-05. Tentukan apakah A={1/n:$n\\in\\mathbb N$} kompak; jelaskan posisi limitnya.",
      "hint": "Periksa barisan 1/n dan sifat tertutup.",
      "answer": "Barisan x_n=1/n seluruhnya berada dalam A dan konvergen di ℝ ke 0. Namun 0 bukan anggota A. Setiap subbarisan x_{n_j}=1/n_j juga menuju 0 karena n_j→∞. Oleh ketunggalan limit, tidak ada subbarisan yang konvergen ke titik A. Jadi A tidak kompak sekuensial dan, berdasarkan karakterisasi sekuensial pada ℝ, A tidak kompak. Secara independen, A tidak tertutup karena memuat barisan konvergen tanpa memuat limitnya, sehingga gagal syarat Heine–Borel."
    },
    {
      "prompt": "HK-06. Buktikan bahwa irisan keluarga takkosong himpunan kompak di ℝ kompak. Jelaskan mengapa keluarga kosong perlu dikecualikan.",
      "hint": "Gunakan satu anggota sebagai himpunan kompak induk.",
      "answer": "Misalkan (K_i)_{i∈I} keluarga himpunan kompak dengan $I\\ne\\varnothing$, dan pilih i_0∈I. Setiap K_i tertutup di ℝ menurut Heine–Borel. Irisan F=⋂_{i∈I}K_i tertutup sebagai irisan sebarang himpunan tertutup. Selain itu $F\\subseteq K$_{i_0}; karena K_{i_0} terbatas, F juga terbatas. Heine–Borel menjamin F kompak, termasuk bila $F=\\varnothing$. Jika I=∅ dan irisan diambil relatif terhadap ℝ, konvensinya ⋂_{i∈∅}K_i=ℝ, yang tidak terbatas dan tidak kompak. Jadi hipotesis $I\\ne\\varnothing$ penting."
    },
    {
      "prompt": "HK-07. Untuk f(x)=1/x pada [1,3], tentukan citranya dan buktikan fungsi mencapai ekstrem.",
      "hint": "Gunakan kontinuitas dan monoton turun.",
      "answer": "Pada K=[1,3], fungsi f(x)=1/x kontinu karena penyebut tidak nol. Interval K tertutup dan terbatas, sehingga kompak. Karena f menurun ketat untuk x>0, nilai terbesar terjadi pada x=1 dan bernilai 1, sedangkan nilai terkecil terjadi pada x=3 dan bernilai 1/3. Untuk setiap y∈[1/3,1], titik x=1/y berada dalam [1,3] dan f(x)=y; jadi f(K)=[1/3,1]. Kekompakan citra juga mengikuti teorema citra kontinu. Kedua ekstrem dicapai, bukan hanya berupa supremum dan infimum."
    },
    {
      "prompt": "HK-08. Buktikan bahwa fungsi kontinu f:[a,b]→ℝ dengan $a\\le b$ mencapai maksimum dan minimum.",
      "hint": "Gunakan kekompakan citra dan sifat supremum.",
      "answer": "Karena [a,b] tertutup dan terbatas, Teorema Heine–Borel memastikan K=[a,b] kompak. Fungsi f kontinu, sehingga citra S=f(K) kompak di ℝ. Himpunan S tidak kosong karena a∈K, dan kompak mengakibatkan S terbatas serta tertutup. Oleh sifat kelengkapan ℝ, M=sup S dan m=inf S ada sebagai bilangan real. Pilih untuk setiap n titik y_n∈S dengan M−1/n<y_n≤M. Barisan y_n menuju M; ketertutupan S memberi M∈S. Dengan cara serupa, terdapat z_n∈S yang menuju m dan ketertutupan memberi m∈S. Karena M,m∈f(K), terdapat x_M,x_m∈[a,b] dengan f(x_M)=M dan f(x_m)=m. Dengan demikian kedua nilai ekstrem benar-benar dicapai."
    }
  ],
  "mistakes": [],
  "connections": []
};
