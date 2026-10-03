export type AlgebraDepthNote = {
  overview: string[];
  connection: string;
};

export const abstractAlgebraDepthNotes: Record<string, AlgebraDepthNote> = {
  "alg-sets": {
    overview: [
      "Pembahasan himpunan tidak berhenti pada operasi simbolik. Inklusi dipakai untuk membandingkan objek, produk Kartesius menjadi ruang tempat relasi hidup, dan keluarga himpunan memberi bahasa untuk membicarakan partisi, kelas ekuivalensi, koset, serta himpunan faktor. Karena banyak pembuktian aljabar berakhir pada kesamaan dua himpunan, teknik dua inklusi perlu dikuasai sejak awal."
    ],
    connection: "Operasi himpunan menjadi fondasi bagi seluruh konstruksi berikutnya. Relasi adalah subset produk Kartesius, fungsi adalah relasi dengan syarat keunikan, subgrup dan subring adalah subset yang stabil terhadap operasi, sedangkan koset dan kelas ekuivalensi adalah blok-blok partisi. Oleh karena itu, ketelitian pada keanggotaan dan inklusi langsung memengaruhi ketelitian pembuktian struktur aljabar."
  },
  "alg-relations": {
    overview: [
      "Sifat refleksif, simetris, antisimetris, dan transitif harus diperiksa satu per satu dari definisi, bukan dari bentuk relasi yang tampak intuitif. Representasi relasi sebagai subset $A\\times A$ juga memungkinkan relasi dioperasikan melalui invers dan komposisi, yang nantinya berhubungan dengan komposisi pemetaan dan struktur kelas ekuivalensi."
    ],
    connection: "Relasi ekuivalensi diperoleh dengan menggabungkan refleksivitas, simetri, dan transitivitas, sedangkan relasi urutan parsial memakai refleksivitas, antisimetris, dan transitivitas. Perbedaan simetris dan antisimetris sangat penting karena keduanya tidak saling meniadakan. Relasi kesamaan memenuhi keduanya sekaligus."
  },
  "alg-equivalence-relations": {
    overview: [
      "Relasi ekuivalensi adalah mekanisme formal untuk menyatakan bahwa beberapa elemen diperlakukan sebagai objek yang sama menurut suatu kriteria. Kelas ekuivalensi bukan sekadar kumpulan contoh, melainkan blok yang menutupi seluruh himpunan dan tidak saling berpotongan kecuali identik. Gagasan ini adalah pola dasar dari kongruensi modulo, koset, grup faktor, dan ring faktor."
    ],
    connection: "Satu kelas dapat memiliki banyak wakil, tetapi hasil operasi pada kelas harus tidak bergantung pada wakil yang dipilih. Persoalan well-definedness yang muncul pada grup faktor dan ring faktor berakar langsung dari konsep ini. Dengan memahami hubungan partisi dan relasi ekuivalensi, konstruksi faktor dapat dibaca sebagai proses mengganti elemen individual dengan blok-blok ekuivalensi."
  },
  "alg-functions": {
    overview: [
      "Fungsi dalam struktur aljabar dipelajari terutama melalui perilaku terhadap struktur. Injektivitas mengontrol keunikan pra-citra, surjektivitas menjamin seluruh kodomain tercapai, dan bijektivitas memungkinkan invers. Komposisi fungsi menjadi model abstrak untuk komposisi homomorfisma, isomorfisma, dan automorfisma."
    ],
    connection: "Pada bab grup dan ring, homomorfisma adalah fungsi yang juga mempertahankan operasi. Kernel mengukur kegagalan injektivitas dan image mengukur seberapa besar bagian kodomain yang benar-benar dicapai. Oleh karena itu, pemahaman fungsi biasa menjadi dasar langsung untuk teorema isomorfisma."
  },

  "alg-induction-well-ordering": {
    overview: [
      "Prinsip induksi dan prinsip well-ordering merupakan dua bentuk dari struktur urutan bilangan bulat positif. Induksi cocok untuk pernyataan yang dibangun tahap demi tahap, sedangkan well-ordering sangat efektif pada pembuktian keberadaan elemen terkecil, seperti pada algoritma Euclid, bukti setiap ideal di $\\mathbb Z$ bersifat utama, dan argumen minimal-counterexample."
    ],
    connection: "Induksi kuat sering dipakai ketika kasus ke-$n$ bergantung pada beberapa kasus sebelumnya, misalnya faktorisasi bilangan bulat. Well-ordering mengubah persoalan eksistensi menjadi pilihan elemen positif terkecil. Dua teknik ini akan berulang pada teori keterbagian, faktorisasi unik, dan domain Euclidean."
  },
  "alg-divisibility": {
    overview: [
      "Keterbagian memandang persamaan $b=ak$ sebagai hubungan struktural antara bilangan bulat. FPB tidak hanya dipahami sebagai bilangan terbesar yang membagi dua bilangan, tetapi juga sebagai kombinasi linear melalui identitas Bézout. Algoritma Euclid menyediakan proses efektif untuk menemukan FPB sekaligus koefisien Bézout."
    ],
    connection: "Identitas Bézout menjadi kriteria utama keberadaan invers modulo $n$. Pada ring, gagasan FPB berkembang menjadi ideal yang dibangkitkan dua elemen. Pada domain Euclidean dan PID, struktur ideal serta faktorisasi kembali dikendalikan oleh algoritma pembagian dan kombinasi linear."
  },
  "alg-prime-factorization": {
    overview: [
      "Bilangan prima berperan sebagai blok pembangun perkalian di $\\mathbb Z$. Keunikan faktorisasi tidak sekadar menyatakan bahwa setiap bilangan dapat dipecah menjadi faktor prima, tetapi juga bahwa multiset faktor primanya ditentukan secara unik sampai urutan dan unit. Lemma Euclid menjadi jembatan penting dari sifat prima menuju keunikan faktorisasi."
    ],
    connection: "Konsep prima dan tak tereduksi pada bilangan bulat akan digeneralisasi ke domain integral. Di UFD, elemen tak nol nonunit memiliki faktorisasi unik ke dalam elemen tak tereduksi. Perbedaan antara elemen prima dan tak tereduksi menjadi penting di ring yang lebih umum."
  },
  "alg-integer-properties": {
    overview: [
      "Sifat bilangan bulat yang tampak elementer sebenarnya membentuk model awal bagi banyak konsep ring. Unit di $\\mathbb Z$ hanya $\\pm1$, pembagi nol tidak ada, dan FPB serta KPK dapat dinyatakan melalui faktorisasi prima. Struktur ini menjelaskan mengapa $\\mathbb Z$ menjadi contoh utama domain integral, domain Euclidean, PID, dan UFD."
    ],
    connection: "Ketika berpindah dari $\\mathbb Z$ ke ring umum, beberapa sifat tetap bertahan dan beberapa gagal. Membandingkan unit, pembagi nol, keterbagian, dan faktorisasi di $\\mathbb Z$ dengan ring lain membantu melihat alasan munculnya kelas khusus seperti domain integral, PID, dan UFD."
  },
  "alg-modular-arithmetic": {
    overview: [
      "Aritmetika modular mengganti bilangan bulat dengan kelas-kelas kongruensi. Operasi penjumlahan dan perkalian harus dibuktikan well-defined agar tidak bergantung pada wakil kelas yang digunakan. Unit modulo $n$ adalah kelas yang relatif prima dengan $n$, dan unit-unit ini membentuk grup perkalian."
    ],
    connection: "Kongruensi modulo $n$ adalah relasi ekuivalensi, sedangkan $\\mathbb Z_n$ adalah contoh awal ring faktor $\\mathbb Z/n\\mathbb Z$. Ketika $n$ prima, setiap kelas tak nol mempunyai invers dan $\\mathbb Z_n$ menjadi field. Struktur ini juga mendasari Teorema Euler, Teorema Fermat kecil, dan RSA."
  },

  "alg-group-example": {
    overview: [
      "Contoh grup melalui simetri atau permutasi menunjukkan bahwa operasi grup tidak harus berupa penjumlahan atau perkalian bilangan. Yang penting adalah satu operasi biner yang tertutup, asosiatif, mempunyai identitas, dan memberikan invers untuk setiap elemen. Contoh konkret ini menjadi model untuk memahami definisi grup secara abstrak."
    ],
    connection: "Grup simetri akan muncul kembali sebagai grup dihedral dan grup permutasi. Ide bahwa elemen grup adalah transformasi, bukan sekadar bilangan, menjelaskan mengapa komposisi fungsi menjadi salah satu operasi grup yang paling alami."
  },
  "alg-groups": {
    overview: [
      "Definisi grup memisahkan sifat esensial dari contoh khusus. Asosiativitas memungkinkan penulisan produk panjang tanpa tanda kurung, identitas bertindak netral, dan invers membatalkan elemen. Komutativitas bukan bagian wajib dari definisi, sehingga grup nonabelian menjadi bagian penting teori."
    ],
    connection: "Dari empat aksioma grup dapat diturunkan keunikan identitas dan invers, hukum pencoretan, penyelesaian persamaan, serta aturan pangkat. Subgrup kemudian mempertahankan seluruh struktur grup di dalam subset, sedangkan homomorfisma membandingkan dua grup dengan menjaga operasi."
  },
  "alg-group-properties": {
    overview: [
      "Sifat dasar grup sebaiknya diturunkan dari aksioma, bukan diasumsikan dari aritmetika biasa. Identitas dan invers bersifat unik, persamaan $ax=b$ dan $ya=b$ mempunyai solusi tunggal, serta invers hasil kali muncul dengan urutan terbalik. Pada grup nonabelian, urutan faktor harus selalu dipertahankan."
    ],
    connection: "Hukum pencoretan dan keunikan invers dipakai hampir pada setiap pembuktian grup. Rumus $(ab)^{-1}=b^{-1}a^{-1}$ sangat penting pada konjugasi, subgrup normal, komutator, dan automorfisma dalam."
  },
  "alg-powers-orders": {
    overview: [
      "Pangkat elemen grup memperluas notasi eksponen ke bilangan bulat, termasuk pangkat negatif melalui invers. Orde elemen adalah bilangan positif terkecil yang mengembalikan elemen ke identitas. Jika tidak ada, orde elemen tak hingga. Struktur pangkat menuntun langsung pada subgrup siklik yang dibangkitkan satu elemen."
    ],
    connection: "Jika $|g|=n$, pola pangkat $g^k$ berulang modulo $n$. Fakta ini menghubungkan orde elemen, subgrup siklik, Teorema Lagrange, dan banyak argumen tentang eksponen grup hingga."
  },
  "alg-subgroups": {
    overview: [
      "Subgrup adalah subset yang tetap merupakan grup dengan operasi yang diwarisi. Uji subgrup mereduksi pemeriksaan empat aksioma menjadi syarat yang lebih efisien, karena asosiativitas langsung diwarisi dari grup induk. Subgrup yang dibangkitkan suatu himpunan adalah subgrup terkecil yang memuat himpunan tersebut."
    ],
    connection: "Subgrup menjadi unit dasar untuk memecah struktur grup. Koset mengukur bagaimana subgrup ditempatkan dalam grup, subgrup normal memungkinkan pembentukan grup faktor, dan subgrup Sylow menangkap komponen berpangkat prima dari grup hingga."
  },
  "alg-cyclic-groups": {
    overview: [
      "Grup siklik dibangkitkan oleh satu elemen, sehingga setiap elemen dapat ditulis sebagai pangkat generator. Struktur grup siklik sepenuhnya ditentukan oleh ordonya. Grup siklik hingga berorde $n$ isomorfik dengan $\\mathbb Z_n$, sedangkan grup siklik tak hingga isomorfik dengan $\\mathbb Z$."
    ],
    connection: "Subgrup grup siklik kembali siklik dan berkaitan dengan pembagi orde. Fakta ini menjadikan grup siklik kelas grup yang sangat terkontrol dan menjadi model penting untuk grup hasil bagi, grup unit, serta grup multiplikatif field hingga."
  },
  "alg-cosets-lagrange": {
    overview: [
      "Koset menerjemahkan subgrup menjadi blok-blok berukuran sama yang mempartisi grup. Teorema Lagrange muncul dari pencacahan blok tersebut, yaitu $|G|=[G:H]|H|$ untuk grup hingga. Konsekuensinya, orde setiap elemen membagi orde grup."
    ],
    connection: "Koset belum otomatis membentuk grup baru. Operasi antarkoset hanya well-defined ketika subgrup normal. Oleh karena itu, Teorema Lagrange menjadi jembatan dari teori subgrup menuju grup faktor dan teorema isomorfisma."
  },

  "alg-normal-subgroups": {
    overview: [
      "Subgrup normal adalah subgrup yang stabil terhadap konjugasi, atau secara ekuivalen mempunyai koset kiri dan kanan yang sama. Normalitas bukan sekadar kondisi teknis. Syarat ini tepat yang dibutuhkan agar perkalian koset tidak bergantung pada pilihan wakil."
    ],
    connection: "Setiap kernel homomorfisma grup adalah subgrup normal. Sebaliknya, setiap subgrup normal $N$ menghasilkan proyeksi alami $G\\to G/N$ dengan kernel $N$. Hubungan ini menjadi inti Teorema Isomorfisma Pertama."
  },
  "alg-factor-groups": {
    overview: [
      "Grup faktor $G/N$ menganggap semua elemen dalam koset yang sama sebagai satu objek. Identitasnya adalah $N$, invers dari $gN$ adalah $g^{-1}N$, dan operasi didefinisikan oleh $(gN)(hN)=ghN$. Normalitas memastikan definisi tersebut well-defined."
    ],
    connection: "Grup faktor dapat dipandang sebagai cara menghapus bagian struktur yang terkandung dalam $N$. Teorema Isomorfisma Pertama menyatakan bahwa setiap homomorfisma pada dasarnya menghasilkan grup faktor oleh kernelnya."
  },
  "alg-group-homomorphisms": {
    overview: [
      "Homomorfisma grup mempertahankan operasi, sehingga otomatis membawa identitas ke identitas, invers ke invers, dan pangkat ke pangkat. Kernel mengukur elemen yang runtuh menjadi identitas, sedangkan image adalah subgrup dari kodomain."
    ],
    connection: "Injektivitas ekuivalen dengan kernel trivial. Surjektivitas menentukan apakah image sama dengan seluruh kodomain. Ketika kedua sifat terpenuhi, homomorfisma menjadi isomorfisma dan menunjukkan bahwa dua grup mempunyai struktur yang sama."
  },
  "alg-group-isomorphisms": {
    overview: [
      "Isomorfisma adalah bijeksi yang mempertahankan operasi. Dua grup yang isomorfik boleh memiliki representasi elemen yang sangat berbeda, tetapi seluruh sifat struktural seperti orde elemen, abelianitas, banyaknya subgrup tertentu, dan siklisitas dipertahankan."
    ],
    connection: "Pembuktian dua grup tidak isomorfik sering lebih mudah melalui invariant daripada memeriksa semua bijeksi. Sebaliknya, untuk membuktikan isomorfisme, perlu dibangun peta eksplisit, dibuktikan sebagai homomorfisma, lalu diperiksa bijektivitasnya."
  },
  "alg-group-isomorphism-theorems": {
    overview: [
      "Teorema isomorfisma menjelaskan hubungan sistematis antara homomorfisma, kernel, image, subgrup normal, dan grup faktor. Teorema pertama mengidentifikasi $G/\\ker\\varphi$ dengan image. Teorema kedua dan ketiga mengatur bagaimana subgrup dan faktor bertingkat saling berinteraksi."
    ],
    connection: "Teorema-teorema ini mengubah banyak pembuktian isomorfisme menjadi pemilihan homomorfisma yang tepat. Strategi yang umum adalah mendefinisikan peta alami, menghitung kernel dan image, lalu menggunakan teorema isomorfisma daripada membangun bijeksi secara manual."
  },
  "alg-automorphisms": {
    overview: [
      "Automorfisma adalah isomorfisma dari grup ke dirinya sendiri. Himpunan seluruh automorfisma membentuk grup $\\operatorname{Aut}(G)$ di bawah komposisi. Konjugasi oleh elemen grup menghasilkan automorfisma dalam, yang membentuk subgrup $\\operatorname{Inn}(G)$."
    ],
    connection: "Automorfisma mengukur simetri internal suatu struktur. Peta $G\\to\\operatorname{Aut}(G)$ yang mengirim $g$ ke konjugasi oleh $g$ mempunyai kernel pusat $Z(G)$, sehingga $G/Z(G)$ berkaitan erat dengan grup automorfisma dalam."
  },

  "alg-direct-products": {
    overview: [
      "Produk langsung menggabungkan grup dengan mengoperasikan koordinat secara terpisah. Identitas, invers, dan pangkat semuanya dihitung komponen demi komponen. Orde pasangan ditentukan oleh KPK orde komponennya ketika orde keduanya hingga."
    ],
    connection: "Produk langsung menjadi bahasa utama untuk klasifikasi grup abelian hingga. Kriteria produk langsung internal menjelaskan kapan sebuah grup dapat dipisahkan menjadi subgrup-subgrup normal yang beririsan trivial dan bersama-sama menghasilkan seluruh grup."
  },
  "alg-finite-abelian": {
    overview: [
      "Teorema fundamental grup abelian hingga menyatakan bahwa setiap grup abelian hingga dapat diuraikan menjadi produk langsung grup siklik berpangkat prima, dan bentuk dekomposisi tersebut unik sampai urutan faktor. Hasil ini mengubah klasifikasi grup abelian hingga menjadi persoalan aritmetika faktorisasi orde."
    ],
    connection: "Untuk orde tertentu, langkah pertama adalah memfaktorkan orde menjadi pangkat prima. Setiap komponen $p$ kemudian dipartisi menurut ukuran blok siklik yang mungkin. Pembagi elementer dan faktor invarian memberi dua cara ekuivalen untuk mencatat dekomposisi."
  },
  "alg-elementary-divisors": {
    overview: [
      "Pembagi elementer mencatat faktor-faktor berpangkat prima dalam dekomposisi grup abelian hingga, sedangkan faktor invarian menggabungkan faktor-faktor tersebut menjadi rantai $n_1\\mid n_2\\mid\\cdots\\mid n_r$. Kedua bentuk menyimpan informasi struktural yang sama."
    ],
    connection: "Konversi antara pembagi elementer dan faktor invarian dilakukan dengan mengelompokkan komponen $p$ menurut eksponen. Representasi faktor invarian sering memudahkan pembacaan banyak generator minimum dan eksponen grup."
  },
  "alg-infinite-abelian": {
    overview: [
      "Klasifikasi grup abelian tak hingga jauh lebih rumit daripada kasus hingga. Grup abelian bebas seperti $\\mathbb Z^n$ masih mempunyai teori basis yang baik, tetapi grup dengan torsi atau grup divisible dapat menunjukkan perilaku yang tidak ditangkap oleh dekomposisi sederhana grup hingga."
    ],
    connection: "Bagian ini penting sebagai batas ruang lingkup. Teorema fundamental grup abelian hingga tidak boleh diterapkan langsung pada grup tak hingga. Struktur seperti $\\mathbb Q$ dan grup Prüfer memperlihatkan bahwa fenomena tak hingga membutuhkan invariant tambahan."
  },

  "alg-symmetric-groups": {
    overview: [
      "Grup simetrik $S_n$ terdiri dari seluruh permutasi pada $n$ simbol. Notasi siklus menampilkan struktur permutasi secara efisien. Setiap permutasi dapat ditulis sebagai produk siklus saling lepas, dan representasi tersebut unik sampai urutan siklus."
    ],
    connection: "Siklus saling lepas komutatif dan orde permutasi adalah KPK panjang siklus-siklusnya. Teorema Cayley menunjukkan bahwa setiap grup isomorfik dengan suatu subgrup grup simetrik, sehingga grup permutasi bersifat universal dalam teori grup."
  },
  "alg-transpositions-alternating": {
    overview: [
      "Setiap permutasi dapat ditulis sebagai produk transposisi. Walaupun representasinya tidak unik, paritas banyak transposisi tetap sama. Hal ini memungkinkan definisi tanda permutasi dan grup alternating $A_n$ sebagai kernel homomorfisma tanda."
    ],
    connection: "Karena $A_n$ adalah kernel, subgrup ini normal di $S_n$ dan mempunyai indeks dua. Struktur $A_n$ menjadi penting karena untuk $n\\ge5$, grup ini sederhana dan memberi contoh utama grup sederhana nonabelian."
  },
  "alg-simplicity-an": {
    overview: [
      "Kesederhanaan $A_n$ untuk $n\\ge5$ berarti tidak ada subgrup normal sejati nontrivial. Pembuktiannya menggunakan struktur siklus, konjugasi, dan fakta bahwa 3-siklus membangkitkan $A_n$. Hasil ini merupakan salah satu teorema dasar teori grup hingga."
    ],
    connection: "Grup sederhana berperan seperti faktor prima pada teori grup. Kesederhanaan $A_5$ juga terkait dengan ketidakmungkinan umum menyelesaikan persamaan polinom derajat lima dengan radikal dalam teori Galois yang lebih lanjut."
  },

  "alg-normalizers-centralizers": {
    overview: [
      "Centralizer $C_G(S)$ mengukur elemen yang komutatif dengan setiap elemen $S$, sedangkan normalizer $N_G(H)$ mengukur elemen yang mempertahankan subgrup $H$ di bawah konjugasi. Keduanya merupakan subgrup dan selalu memenuhi $C_G(H)\\le N_G(H)$."
    ],
    connection: "Normalizer mengontrol banyaknya konjugat suatu subgrup melalui indeks $[G:N_G(H)]$. Centralizer mengontrol ukuran kelas konjugasi elemen melalui $[G:C_G(g)]$. Dua formula indeks ini menjadi dasar persamaan kelas dan pembuktian Teorema Sylow."
  },
  "alg-conjugacy-class-equation": {
    overview: [
      "Konjugasi membagi grup menjadi kelas-kelas konjugasi. Ukuran kelas elemen $g$ sama dengan indeks centralizer-nya. Persamaan kelas memisahkan elemen pusat, yang memiliki kelas berukuran satu, dari kelas-kelas nontrivial."
    ],
    connection: "Pada grup berorde pangkat prima, ukuran setiap kelas konjugasi membagi orde grup. Persamaan kelas lalu memaksa pusat tidak trivial. Fakta ini menjadi salah satu alat penting dalam analisis $p$-group dan Teorema Sylow."
  },
  "alg-sylow-theorems": {
    overview: [
      "Teorema Sylow mengontrol subgrup dengan orde berupa pangkat prima maksimum yang membagi orde grup. Teorema pertama menjamin keberadaan, teorema kedua menyatakan semua Sylow-$p$ saling konjugat, dan teorema ketiga membatasi banyaknya Sylow-$p$ melalui syarat kongruensi dan keterbagian."
    ],
    connection: "Jika banyak Sylow-$p$ sama dengan satu, subgrup tersebut normal. Kombinasi syarat $n_p\\equiv1\\pmod p$ dan $n_p\\mid |G|/p^a$ sering cukup untuk memaksa normalitas atau menyingkirkan kemungkinan struktur tertentu."
  },
  "alg-sylow-applications": {
    overview: [
      "Penerapan Teorema Sylow biasanya dimulai dengan memfaktorkan orde grup dan menghitung semua nilai yang mungkin bagi $n_p$. Setelah itu, informasi tentang irisan subgrup, aksi konjugasi, atau banyaknya elemen berorde tertentu digunakan untuk mempersempit struktur grup."
    ],
    connection: "Teknik pencacahan sering digabungkan dengan homomorfisma ke grup simetrik atau dengan produk semilang secara implisit. Tujuan utamanya bukan hanya menemukan subgrup Sylow, tetapi menggunakan keberadaan dan normalitasnya untuk memecah grup."
  },
  "alg-small-groups": {
    overview: [
      "Klasifikasi grup berorde kecil menggabungkan seluruh perangkat teori grup dasar. Teorema Lagrange membatasi orde elemen dan subgrup, Sylow mengontrol komponen prima, sedangkan klasifikasi grup abelian menangani kasus komutatif. Kasus nonabelian kemudian dianalisis melalui aksi, semidirect structure, atau presentasi."
    ],
    connection: "Klasifikasi bukan sekadar membuat daftar nama grup. Dua kandidat perlu dibedakan menggunakan invariant seperti pusat, jumlah elemen berorde tertentu, struktur subgrup, dan sifat abelian. Metode ini melatih cara menggabungkan banyak teorema dalam satu argumen."
  },

  "alg-rings": {
    overview: [
      "Ring mempunyai dua operasi. Struktur aditif selalu grup abelian, sedangkan perkalian bersifat asosiatif dan distributif terhadap penjumlahan. Tergantung konvensi, identitas perkalian dapat dimasukkan sebagai syarat. Pada materi ini identitas digunakan ketika dibutuhkan pada definisi unit dan field."
    ],
    connection: "Ring menggeneralisasi $\\mathbb Z$, ring matriks, ring polinom, dan ring fungsi. Berbeda dari field, ring dapat mempunyai pembagi nol dan elemen tak nol yang tidak invertibel. Perbedaan ini memotivasi domain integral dan field."
  },
  "alg-ring-properties": {
    overview: [
      "Banyak identitas ring, seperti $a0=0$, $a(-b)=-(ab)$, dan $(-a)(-b)=ab$, diturunkan dari distributivitas dan struktur grup aditif. Pembagi nol dan unit mengukur kegagalan serta keberhasilan pembatalan perkalian."
    ],
    connection: "Pada domain integral, tidak ada pembagi nol sehingga hukum pencoretan berlaku untuk faktor tak nol. Pada field, setiap elemen tak nol adalah unit. Hirarki ini memperlihatkan bagaimana penambahan satu sifat dapat memperkuat perilaku ring secara signifikan."
  },
  "alg-subrings": {
    overview: [
      "Subring adalah subset yang tetap tertutup terhadap operasi ring. Uji subring biasanya memeriksa ketertutupan terhadap pengurangan dan perkalian. Jika konvensi mensyaratkan identitas yang sama, syarat $1_R\\in S$ juga harus diperhatikan."
    ],
    connection: "Subring memberi cara menemukan struktur yang lebih kecil di dalam ring, sedangkan ideal adalah subring aditif dengan syarat absorpsi yang lebih kuat. Tidak setiap subring adalah ideal, dan perbedaan ini sangat penting karena hanya ideal yang dapat digunakan untuk membentuk ring faktor."
  },
  "alg-domains-fields": {
    overview: [
      "Domain integral adalah ring komutatif beridentitas tanpa pembagi nol. Field memperkuat syarat tersebut dengan meminta setiap elemen tak nol mempunyai invers perkalian. Setiap field adalah domain integral, tetapi tidak setiap domain integral adalah field."
    ],
    connection: "Ring $\\mathbb Z$ adalah domain integral tetapi bukan field, sedangkan $\\mathbb Z_p$ untuk $p$ prima adalah field. Polinom di atas field membentuk domain integral dan memiliki algoritma pembagian, yang membuka jalan menuju teori PID, UFD, dan polinom tak tereduksi."
  },
  "alg-characteristic": {
    overview: [
      "Karakteristik ring beridentitas adalah orde aditif elemen $1_R$, atau nol jika tidak ada kelipatan positif yang menghasilkan nol. Karakteristik mengontrol bagaimana bilangan bulat tertanam ke dalam ring melalui homomorfisma $n\\mapsto n1_R$."
    ],
    connection: "Pada domain integral, karakteristik hanya mungkin nol atau prima. Field hingga selalu mempunyai karakteristik prima $p$ dan memuat salinan field prima $\\mathbb F_p$. Fakta ini menjadi titik awal konstruksi field hingga."
  },

  "alg-ideals": {
    overview: [
      "Ideal adalah analog ring dari subgrup normal. Syarat absorpsi memastikan bahwa ketika elemen ideal dikalikan oleh elemen ring sebarang, hasilnya tetap berada di ideal. Ideal utama dibangkitkan satu elemen, sedangkan ideal finitely generated dapat membutuhkan beberapa pembangkit."
    ],
    connection: "Kernel setiap homomorfisma ring adalah ideal, dan setiap ideal menghasilkan proyeksi alami ke ring faktor. Ideal prima dan maksimal kemudian dapat dikenali melalui sifat ring faktor, yaitu domain integral atau field."
  },
  "alg-factor-rings": {
    overview: [
      "Ring faktor $R/I$ terdiri dari koset aditif modulo ideal $I$. Penjumlahan dan perkalian kelas didefinisikan melalui wakil, dan sifat ideal memastikan operasi perkalian well-defined. Struktur faktor merangkum proses menganggap semua elemen ideal setara dengan nol."
    ],
    connection: "Konstruksi $\\mathbb Z/n\\mathbb Z$ adalah contoh utama ring faktor. Ketika $I$ maksimal, $R/I$ menjadi field, sedangkan ketika $I$ prima, $R/I$ menjadi domain integral pada ring komutatif."
  },
  "alg-ring-homomorphisms": {
    overview: [
      "Homomorfisma ring mempertahankan penjumlahan dan perkalian, serta biasanya identitas bila bekerja dalam kategori ring beridentitas. Kernel adalah ideal, image adalah subring, dan perilaku unit perlu diperiksa sesuai apakah identitas dipertahankan."
    ],
    connection: "Peta evaluasi pada ring polinom, proyeksi modulo ideal, dan inklusi subring merupakan contoh penting. Teorema Isomorfisma Pertama mengidentifikasi $R/\\ker\\varphi$ dengan image homomorfisma."
  },
  "alg-ring-isomorphisms": {
    overview: [
      "Isomorfisma ring mempertahankan kedua operasi secara bijektif. Sifat seperti karakteristik, keberadaan pembagi nol, jumlah unit, struktur ideal, dan apakah ring merupakan field dipertahankan oleh isomorfisma."
    ],
    connection: "Invariant sering dipakai untuk membuktikan dua ring tidak isomorfik. Untuk membuktikan isomorfisme, peta kandidat harus diuji pada penjumlahan, perkalian, identitas bila relevan, dan bijektivitas."
  },
  "alg-ring-isomorphism-theorems": {
    overview: [
      "Teorema isomorfisma ring menghubungkan ideal, homomorfisma, dan ring faktor dengan pola yang sejajar teori grup. Perbedaan utama terletak pada objek normal yang digantikan oleh ideal dan pada kebutuhan mempertahankan dua operasi."
    ],
    connection: "Strategi paling efektif adalah membangun homomorfisma alami, menghitung kernel, lalu mengidentifikasi image. Teorema korespondensi juga menghubungkan ideal di $R/I$ dengan ideal di $R$ yang memuat $I$."
  },
  "alg-prime-maximal-ideals": {
    overview: [
      "Ideal prima $P$ pada ring komutatif memenuhi bahwa $ab\\in P$ mengakibatkan $a\\in P$ atau $b\\in P$. Ideal maksimal $M$ adalah ideal sejati yang tidak berada di antara ideal sejati lain dan ring. Setiap ideal maksimal adalah prima, tetapi kebalikannya tidak selalu berlaku."
    ],
    connection: "Kriteria faktor memberi interpretasi yang kuat. $P$ prima jika dan hanya jika $R/P$ domain integral, sedangkan $M$ maksimal jika dan hanya jika $R/M$ field. Dengan demikian, sifat ideal dapat dipelajari melalui struktur ring faktor."
  },

  "alg-polynomial-rings": {
    overview: [
      "Polinom dipandang sebagai objek formal dengan koefisien pada ring, bukan hanya fungsi. Di atas domain integral, derajat hasil kali bersifat aditif. Di atas field, algoritma pembagian memungkinkan teori FPB, faktor, dan irreducibility berkembang hampir paralel dengan aritmetika bilangan bulat."
    ],
    connection: "Evaluasi $f\\mapsto f(a)$ adalah homomorfisma ring yang kernelnya berkaitan dengan faktor $x-a$. Ring polinom menjadi ruang utama untuk membahas domain Euclidean, PID, UFD, polinom tak tereduksi, dan perluasan field."
  },
  "alg-euclidean-domains": {
    overview: [
      "Domain Euclidean dilengkapi ukuran yang memungkinkan algoritma pembagian dengan sisa lebih kecil. Proses ini memberi algoritma Euclid untuk FPB dan identitas Bézout. Contoh utama adalah $\\mathbb Z$ dengan nilai mutlak dan $F[x]$ dengan derajat."
    ],
    connection: "Setiap domain Euclidean adalah PID karena ideal tak nol mempunyai elemen dengan ukuran minimum yang dapat dibuktikan membangkitkan ideal. Implikasi ini kemudian berlanjut dari PID ke UFD."
  },
  "alg-pid": {
    overview: [
      "Principal Ideal Domain adalah domain integral yang setiap idealnya dibangkitkan satu elemen. Kondisi ini membuat keterbagian dan ideal sangat terhubung. FPB dapat dibaca sebagai pembangkit ideal $(a,b)$ sampai dikalikan unit."
    ],
    connection: "Setiap PID adalah UFD. Pembuktiannya memerlukan kondisi rantai pembagi dan fakta bahwa elemen tak tereduksi di PID bersifat prima. Ring $F[x]$ untuk field $F$ adalah PID, sedangkan $\\mathbb Z[x]$ bukan PID walaupun merupakan UFD."
  },
  "alg-ufd": {
    overview: [
      "Unique Factorization Domain menjamin setiap elemen tak nol nonunit dapat difaktorkan sebagai produk elemen tak tereduksi dan faktorisasi tersebut unik sampai unit serta urutan. Konsep asosiasi diperlukan karena faktor yang berbeda dengan perkalian unit dianggap sama."
    ],
    connection: "Rantai implikasi penting adalah field $\\Rightarrow$ domain Euclidean $\\Rightarrow$ PID $\\Rightarrow$ UFD $\\Rightarrow$ domain integral, dan kebalikannya umumnya gagal. Gauss lemma menunjukkan bahwa jika $R$ UFD, maka $R[x]$ juga UFD dalam kondisi standar."
  },

  "alg-irreducibility-roots": {
    overview: [
      "Polinom tak tereduksi berperan seperti bilangan prima pada ring polinom. Untuk polinom derajat dua atau tiga di atas field, reducibility ekuivalen dengan keberadaan akar di field tersebut. Pada derajat empat atau lebih, ketiadaan akar belum cukup menjamin irreducibility."
    ],
    connection: "Teorema Faktor menghubungkan akar dengan faktor linear. Polinom minimal suatu elemen aljabar selalu tak tereduksi, dan faktor tak tereduksi digunakan untuk membangun field extension melalui ring faktor $F[x]/(p(x))$."
  },
  "alg-irreducible-rationals": {
    overview: [
      "Irreducibility di atas $\\mathbb Q$ dapat diuji melalui polinom primitif di $\\mathbb Z[x]$. Lemma Gauss menghubungkan faktorisasi di $\\mathbb Q[x]$ dan $\\mathbb Z[x]$, sedangkan kriteria Eisenstein dan uji akar rasional memberi alat praktis untuk banyak contoh."
    ],
    connection: "Kriteria Eisenstein dapat diperkuat dengan substitusi $x\\mapsto x+a$ ketika bentuk awal tidak langsung memenuhi syarat. Hasil irreducibility di $\\mathbb Q[x]$ kemudian menentukan derajat perluasan yang dihasilkan oleh akar polinom."
  },
  "alg-irreducible-real-complex": {
    overview: [
      "Teorema Dasar Aljabar menyatakan setiap polinom nonkonstan kompleks mempunyai akar kompleks. Akibatnya, polinom tak tereduksi di $\\mathbb C[x]$ hanya berderajat satu. Di $\\mathbb R[x]$, faktor tak tereduksi hanya berderajat satu atau dua dengan diskriminan negatif."
    ],
    connection: "Perbedaan ini memperlihatkan bahwa irreducibility bergantung pada field koefisien. Polinom $x^2+1$ tak tereduksi di $\\mathbb R[x]$ tetapi terurai di $\\mathbb C[x]$. Konsep ini memotivasi splitting field."
  },
  "alg-irreducible-finite-fields": {
    overview: [
      "Di field hingga, uji akar masih menyelesaikan kasus derajat dua dan tiga, tetapi derajat lebih tinggi membutuhkan analisis faktor berderajat kecil. Polinom $x^{q}-x$ memiliki seluruh elemen $\\mathbb F_q$ sebagai akar dan memainkan peran penting dalam teori faktorisasi."
    ],
    connection: "Polinom tak tereduksi berderajat $n$ atas $\\mathbb F_q$ menghasilkan field dengan $q^n$ elemen melalui $\\mathbb F_q[x]/(p(x))$. Dengan demikian, irreducibility menjadi alat konstruksi field hingga."
  },

  "alg-vector-spaces": {
    overview: [
      "Ruang vektor muncul kembali karena setiap perluasan field $E/F$ secara alami merupakan ruang vektor atas $F$. Penjumlahan berasal dari operasi field $E$, sedangkan skalar diambil dari subfield $F$. Perspektif ini memungkinkan ukuran perluasan dinyatakan sebagai dimensi."
    ],
    connection: "Kernel dan image transformasi linear tetap memainkan peran seperti pada aljabar linear. Dalam konteks field extension, kombinasi linear, basis, dan dimensi menjadi alat untuk membuktikan rumus derajat menara."
  },
  "alg-basis-dimension": {
    overview: [
      "Basis adalah himpunan bebas linear yang merentang seluruh ruang, dan dimensi adalah banyaknya elemen basis pada ruang berdimensi hingga. Keunikan ukuran basis bergantung pada lemma pertukaran. Koordinat relatif terhadap basis mengubah struktur abstrak menjadi tuple skalar."
    ],
    connection: "Jika $E/F$ perluasan field, derajat $[E:F]$ adalah dimensi $E$ sebagai ruang vektor atas $F$. Fakta ini menghubungkan aljabar linear dengan masalah aljabar seperti konstruktibilitas dan derajat elemen aljabar."
  },
  "alg-field-extensions": {
    overview: [
      "Perluasan field $E/F$ berarti $F$ merupakan subfield dari $E$. Elemen $\\alpha\\in E$ disebut aljabar atas $F$ jika memenuhi polinom tak nol di $F[x]$. Polinom monik tak tereduksi berderajat minimum yang memusnahkan $\\alpha$ disebut polinom minimal."
    ],
    connection: "Jika polinom minimal $m_\\alpha(x)$ berderajat $n$, maka $F(\\alpha)$ mempunyai basis $1,\\alpha,\\ldots,\\alpha^{n-1}$ atas $F$ dan $[F(\\alpha):F]=n$. Rumus derajat menara mengalikan derajat pada perluasan bertingkat."
  },
  "alg-splitting-fields": {
    overview: [
      "Splitting field suatu polinom adalah perluasan terkecil tempat polinom terurai menjadi faktor linear. Konstruksi dilakukan dengan menambahkan akar satu demi satu, sambil mengontrol field yang dihasilkan agar tidak lebih besar dari yang diperlukan."
    ],
    connection: "Splitting field selalu ada dan unik sampai isomorfisma yang mempertahankan field dasar. Konsep ini merupakan pintu masuk menuju teori Galois, karena automorfisma splitting field yang mempertahankan field dasar merekam simetri antarakar."
  },
  "alg-finite-fields": {
    overview: [
      "Setiap field hingga mempunyai $p^n$ elemen untuk suatu prima $p$ dan bilangan bulat positif $n$. Sebaliknya, untuk setiap $p^n$ terdapat field hingga dengan banyak elemen tersebut, unik sampai isomorfisma. Grup multiplikatif elemen tak nol bersifat siklik."
    ],
    connection: "Konstruksi praktis memakai polinom tak tereduksi berderajat $n$ atas $\\mathbb F_p$. Ring faktor $\\mathbb F_p[x]/(f(x))$ kemudian menjadi field berukuran $p^n$. Struktur ini banyak digunakan dalam coding theory dan kriptografi."
  },

  "alg-private-key": {
    overview: [
      "Kriptografi kunci privat menggunakan informasi rahasia yang sama pada proses enkripsi dan dekripsi. Contoh aritmetika modular seperti Caesar cipher dan affine cipher menunjukkan bahwa enkripsi harus berupa transformasi invertibel agar setiap ciphertext dapat didekripsi secara unik."
    ],
    connection: "Syarat $\\gcd(a,n)=1$ pada affine cipher adalah pernyataan bahwa $[a]$ merupakan unit di $\\mathbb Z_n$. Dengan demikian, konsep unit ring dan invers modular mempunyai interpretasi langsung sebagai syarat keberhasilan dekripsi."
  },
  "alg-rsa": {
    overview: [
      "RSA memanfaatkan kesenjangan antara mudahnya menghitung perpangkatan modular dan sulitnya memfaktorkan bilangan semiprima besar pada parameter yang sesuai. Kunci publik memuat modulus $n=pq$ dan eksponen $e$, sedangkan kunci privat menggunakan invers $d$ dari $e$ modulo $\\varphi(n)$ atau modulo fungsi Carmichael."
    ],
    connection: "Kebenaran dekripsi bertumpu pada aritmetika modular, Teorema Euler atau CRT, serta pemilihan $e$ yang relatif prima dengan $\\varphi(n)$. Implementasi nyata membutuhkan padding aman dan ukuran kunci modern; RSA mentah dari contoh matematika hanya cocok untuk pembelajaran struktur aljabarnya."
  },

  "alg-ancient-construction": {
    overview: [
      "Konstruksi penggaris dan jangka membatasi operasi geometri pada perpotongan garis dan lingkaran. Setelah koordinat ditetapkan, setiap langkah konstruksi dapat diterjemahkan ke operasi field dan pengambilan akar kuadrat. Dengan demikian, persoalan geometri klasik dapat dianalisis melalui derajat perluasan field."
    ],
    connection: "Penggandaan kubus menuntut konstruksi $\\sqrt[3]{2}$, triseksi sudut tertentu menuntut solusi persamaan kubik, dan kuadratur lingkaran menuntut $\\sqrt\\pi$. Ketiganya dapat diuji melalui kriteria bilangan konstruktibel."
  },
  "alg-field-construction": {
    overview: [
      "Bilangan konstruktibel membentuk field di dalam $\\mathbb R$ dan tetap tertutup terhadap akar kuadrat bilangan positif. Setiap konstruksi menghasilkan rantai perluasan field yang setiap langkahnya berderajat paling banyak dua."
    ],
    connection: "Akibatnya, jika $\\alpha$ konstruktibel dan aljabar atas $\\mathbb Q$, derajat $[\\mathbb Q(\\alpha):\\mathbb Q]$ harus merupakan pangkat dua. Syarat ini sangat kuat untuk membuktikan ketidakmungkinan konstruksi."
  },
  "alg-impossibility-construction": {
    overview: [
      "Pembuktian ketidakmungkinan mengubah permintaan konstruksi geometri menjadi pernyataan tentang derajat elemen aljabar atau transendensi. Jika derajat minimal suatu bilangan bukan pangkat dua, bilangan tersebut tidak dapat diperoleh melalui rangkaian konstruksi kuadratik."
    ],
    connection: "Penggandaan kubus gagal karena $\\sqrt[3]{2}$ mempunyai derajat tiga. Triseksi sudut tertentu, seperti sudut $60^\\circ$, menghasilkan persamaan kubik tak tereduksi. Kuadratur lingkaran lebih kuat lagi karena $\\pi$ transendental, sehingga $\\sqrt\\pi$ bukan bilangan aljabar yang dapat dibangun melalui perluasan kuadratik."
  }
};
