import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Authored inclusion–exclusion lesson for komb-inclusion-exclusion.
 * Mathematical references: Brualdi, Introductory Combinatorics (5th ed., 2010),
 * and Stanley, Enumerative Combinatorics, Vol. 1 (2nd ed., 2012).
 */
export const inclusionExclusionContent: BookLessonContent = {
  intro: [
    "Menghitung anggota gabungan tidak sama dengan menjumlahkan semua ukuran himpunan: anggota yang berada dalam dua himpunan akan terhitung dua kali. Prinsip inklusi–eksklusi memperbaiki penghitungan tersebut dengan menambahkan dan mengurangkan ukuran irisan secara teratur. Masalah sederhana tentang kelipatan bilangan akan mengantar kita pada rumus untuk sebarang keluarga hingga himpunan.",
    "Pembuktian utamanya bukan sekadar pola tanda selang-seling. Untuk setiap objek, kita akan menghitung tepat berapa kali objek tersebut muncul di ruas rumus. Argumen ini juga menjelaskan mengapa rumus berlaku ketika beberapa himpunan sama, kosong, atau memiliki irisan yang rumit.",
    "Setelah rumus dasar, kita membedakan peristiwa 'paling sedikit satu', 'tepat satu', dan 'tepat dua', kemudian menerapkannya pada permutasi tanpa titik tetap dan fungsi surjektif. Seluruh rumus yang menggunakan kardinalitas mengasumsikan himpunan hingga; untuk peluang, ruang sampel dan kejadian dinyatakan eksplisit.",
    "Rujukan: Richard A. Brualdi, *Introductory Combinatorics*, edisi ke-5, Pearson, 2010, pembahasan prinsip inklusi–eksklusi; Richard P. Stanley, *Enumerative Combinatorics*, Volume 1, edisi ke-2, Cambridge University Press, 2012, pembahasan pencacahan dengan inklusi–eksklusi. Contoh dan latihan pada halaman ini disusun khusus untuk DMath Learning."
  ],
  formal: [
    {
      kind: "definition",
      title: "Gabungan dan Irisan Keluarga Himpunan",
      statement: "Untuk himpunan $A_1,\\ldots,A_m$ dalam semesta $U$, gabungan $\\bigcup_{i=1}^m A_i$ terdiri atas unsur yang berada dalam sedikitnya satu $A_i$, sedangkan irisan $\\bigcap_{i=1}^m A_i$ terdiri atas unsur yang berada dalam setiap $A_i$. Dalam materi ini $U$ hingga dan $m\\ge1$."
    },
    {
      kind: "definition",
      title: "Fungsi Indikator",
      statement: "Untuk $A\\subseteq U$, fungsi indikator $\\mathbf 1_A:U\\to\\{0,1\\}$ didefinisikan oleh $\\mathbf 1_A(x)=1$ jika $x\\in A$ dan $\\mathbf 1_A(x)=0$ jika $x\\notin A$. Untuk $U$ hingga, $|A|=\\sum_{x\\in U}\\mathbf 1_A(x)$."
    },
    {
      kind: "definition",
      title: "Derangement",
      statement: "Derangement pada $\\{1,\\ldots,n\\}$ adalah permutasi $\\pi$ tanpa titik tetap, yaitu $\\pi(i)\\ne i$ untuk setiap $i$. Banyaknya derangement dinotasikan $D_n$; permutasi kosong dihitung sebagai satu derangement, sehingga $D_0=1$."
    },
    {
      kind: "definition",
      title: "Fungsi Surjektif pada Himpunan Hingga",
      statement: "Fungsi $f:X\\to Y$ disebut surjektif apabila untuk setiap $y\\in Y$ terdapat $x\\in X$ dengan $f(x)=y$. Jika $X$ beranggota $n$ dan $Y$ beranggota $m$, dengan $n,m\\ge1$, banyak fungsi surjektif akan dihitung dengan menghapus fungsi yang tidak menggunakan sedikitnya satu nilai di $Y$."
    },
    {
      kind: "proposition",
      title: "Prinsip Inklusi–Eksklusi Dua Himpunan",
      statement: "Untuk himpunan hingga $A,B$, berlaku $|A\\cup B|=|A|+|B|-|A\\cap B|$.",
      proof: [
        "Diketahui himpunan hingga $A$ dan $B$. Dibuktikan formula ukuran gabungan. Pecah $A\\cup B$ menjadi tiga bagian yang saling lepas, yaitu $A\\setminus B$, $B\\setminus A$, dan $A\\cap B$.",
        "Karena ketiganya saling lepas, $|A\\cup B|=|A\\setminus B|+|B\\setminus A|+|A\\cap B|$. Di sisi lain, $|A|=|A\\setminus B|+|A\\cap B|$ dan $|B|=|B\\setminus A|+|A\\cap B|$.",
        "Menjumlahkan dua identitas terakhir lalu mengurangi $|A\\cap B|$ menghasilkan ukuran gabungan yang telah diperoleh. Dengan demikian, rumus dua himpunan terbukti."
      ],
      explanation: "Pengurangan irisan mengoreksi anggota yang semula dihitung dua kali. Jika $A\\cap B=\\varnothing$, rumus kembali menjadi prinsip penjumlahan untuk dua himpunan saling lepas."
    },
    {
      kind: "theorem",
      title: "Prinsip Inklusi–Eksklusi Umum",
      statement: "Untuk $m\\ge1$ dan himpunan hingga $A_1,\\ldots,A_m$, berlaku $\\displaystyle\\left|\\bigcup_{i=1}^m A_i\\right|=\\sum_{\\varnothing\\ne I\\subseteq\\{1,\\ldots,m\\}}(-1)^{|I|+1}\\left|\\bigcap_{i\\in I}A_i\\right|$.",
      proof: [
        "Diketahui $m\\ge1$ dan keluarga himpunan hingga $A_1,\\ldots,A_m$. Ambil semesta hingga $U$ yang memuat semuanya. Dibuktikan bahwa kontribusi setiap $x\\in U$ pada ruas kanan sama dengan $\\mathbf 1_{\\cup_i A_i}(x)$.",
        "Jika $x$ tidak berada dalam satu pun $A_i$, tidak ada irisan yang memuat $x$ sehingga kontribusinya nol. Jika $x$ berada tepat dalam $r\\ge1$ himpunan, ada $\\binom rk$ pilihan irisan berukuran $k$ yang memuat $x$.",
        "Dengan demikian, koefisien $x$ pada ruas kanan ialah $\\sum_{k=1}^r(-1)^{k+1}\\binom rk$. Dari Teorema Binomial, $0=(1-1)^r=\\sum_{k=0}^r(-1)^k\\binom rk$, sehingga jumlah tersebut tepat $1$.",
        "Setiap unsur gabungan berkontribusi $1$ dan setiap unsur di luar gabungan berkontribusi $0$. Karena semua himpunan hingga, penjumlahan kontribusi atas $U$ dapat ditukar dengan penjumlahan berhingga atas indeks $I$. Maka kedua ruas sama. Dengan demikian, teorema terbukti."
      ],
      explanation: "Hipotesis hingga diperlukan untuk menggunakan kardinalitas dan pertukaran jumlah tanpa isu konvergensi. Bukti tetap berlaku untuk irisan kosong, himpunan yang sama, dan anggota yang berada pada lebih dari dua himpunan."
    },
    {
      kind: "corollary",
      title: "Rumus Tiga Himpunan",
      statement: "Untuk himpunan hingga $A,B,C$, berlaku $|A\\cup B\\cup C|=|A|+|B|+|C|-|A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$.",
      proof: [
        "Diketahui tiga himpunan hingga $A,B,C$. Terapkan Teorema Inklusi–Eksklusi Umum dengan $m=3$.",
        "Subhimpunan indeks berukuran satu menghasilkan $|A|+|B|+|C|$; yang berukuran dua menghasilkan tiga suku irisan dengan tanda negatif; yang berukuran tiga menghasilkan $|A\\cap B\\cap C|$ bertanda positif.",
        "Tidak ada subhimpunan indeks lain yang tidak kosong. Dengan demikian, identitas tiga himpunan terbukti."
      ]
    },
    {
      kind: "proposition",
      title: "Banyak Anggota yang Tepat Satu atau Tepat Dua dari Tiga Himpunan",
      statement: "Untuk himpunan hingga $A,B,C$, tulis $S_1=|A|+|B|+|C|$, $S_2=|A\\cap B|+|A\\cap C|+|B\\cap C|$, dan $S_3=|A\\cap B\\cap C|$. Banyak unsur yang berada tepat pada satu himpunan adalah $S_1-2S_2+3S_3$, sedangkan yang berada tepat pada dua himpunan adalah $S_2-3S_3$.",
      proof: [
        "Diketahui $A,B,C$ hingga. Bagi anggota $A\\cup B\\cup C$ menurut banyak himpunan yang memuatnya, yaitu tepat satu, dua, atau tiga. Misalkan banyak anggota pada ketiga kelas tersebut berturut-turut $N_1,N_2,N_3$.",
        "Setiap anggota kelas $N_r$ dihitung $r$ kali dalam $S_1$, sebanyak $\\binom r2$ kali dalam $S_2$, dan sebanyak $\\binom r3$ kali dalam $S_3$. Jadi $S_1=N_1+2N_2+3N_3$, $S_2=N_2+3N_3$, dan $S_3=N_3$.",
        "Dari persamaan kedua diperoleh $N_2=S_2-3S_3$. Substitusikan ke persamaan pertama dan gunakan $N_3=S_3$ untuk memperoleh $N_1=S_1-2S_2+3S_3$. Dengan demikian, kedua rumus terbukti."
      ],
      explanation: "Rumus 'tepat satu' tidak sama dengan rumus gabungan. Anggota yang berada pada ketiga himpunan harus mempunyai kontribusi nol, bukan satu."
    },
    {
      kind: "theorem",
      title: "Rumus Banyak Derangement",
      statement: "Untuk setiap bilangan bulat $n\\ge0$, banyak derangement pada $n$ objek adalah $\\displaystyle D_n=n!\\sum_{k=0}^n\\frac{(-1)^k}{k!}$.",
      proof: [
        "Diketahui $n\\ge1$. Semesta seluruh permutasi pada $\\{1,\\ldots,n\\}$ berukuran $n!$. Untuk $i\\in\\{1,\\ldots,n\\}$, definisikan $A_i$ sebagai himpunan permutasi yang memenuhi $\\pi(i)=i$.",
        "Derangement adalah permutasi dalam komplemen $\\bigcup_{i=1}^n A_i$. Jika $I$ terdiri atas $k$ indeks, semua indeks dalam $I$ dipaksa tetap, sedangkan $n-k$ objek lainnya dapat dipermutasi bebas. Maka $|\\bigcap_{i\\in I}A_i|=(n-k)!$.",
        "Gunakan komplemen dan inklusi–eksklusi: $D_n=\\sum_{k=0}^n(-1)^k\\binom nk(n-k)!$. Karena $\\binom nk(n-k)!=n!/k!$, diperoleh $D_n=n!\\sum_{k=0}^n(-1)^k/k!$.",
        "Untuk $n=0$, ruas kanan bernilai $0!\\cdot1=1$, sama dengan banyak permutasi kosong. Dengan demikian, formula berlaku untuk semua $n\\ge0$."
      ],
      explanation: "Mengurangi $n$ kelas titik tetap sekali saja tidak cukup, sebab permutasi yang mempunyai beberapa titik tetap akan dikurangi berulang kali."
    },
    {
      kind: "theorem",
      title: "Banyak Fungsi Surjektif antara Dua Himpunan Hingga",
      statement: "Jika $|X|=n\\ge1$ dan $|Y|=m\\ge1$, banyak fungsi surjektif $f:X\\to Y$ adalah $\\displaystyle\\sum_{k=0}^m(-1)^k\\binom mk(m-k)^n$. Jika $m>n$, jumlah tersebut sama dengan nol.",
      proof: [
        "Diketahui $X,Y$ hingga dengan $|X|=n\\ge1$ dan $|Y|=m\\ge1$. Terdapat $m^n$ fungsi $X\\to Y$ karena setiap anggota $X$ mempunyai $m$ pilihan citra.",
        "Untuk $y\\in Y$, definisikan $A_y$ sebagai himpunan fungsi yang tidak pernah mengambil nilai $y$. Suatu fungsi surjektif jika dan hanya jika ia tidak berada dalam satu pun $A_y$; kedua arah mengikuti langsung dari definisi surjektivitas.",
        "Jika $K\\subseteq Y$ mempunyai $k$ anggota, fungsi dalam $\\bigcap_{y\\in K}A_y$ hanya boleh mengambil nilai dari $Y\\setminus K$, sehingga jumlahnya $(m-k)^n$. Terdapat $\\binom mk$ pilihan $K$.",
        "Menerapkan inklusi–eksklusi pada komplemen gabungan seluruh $A_y$ memberikan jumlah yang dinyatakan. Jika $m>n$, fungsi surjektif mustahil: $n$ input tidak dapat menghasilkan $m$ nilai berbeda. Maka rumus tersebut memang bernilai nol. Dengan demikian, teorema terbukti."
      ],
      explanation: "Untuk $k=m$, suku $(m-k)^n=0$ karena $n\\ge1$. Pembatasan $n\\ge1$ menghindari kebutuhan menafsirkan $0^0$."
    }
  ],
  examples: [
    {
      title: "Gabungan dan Irisan Kelipatan",
      forDefinition: "Gabungan dan Irisan Keluarga Himpunan",
      problem: "Pada $U=\\{1,\\ldots,12\\}$, misalkan $A$ kelipatan $2$ dan $B$ kelipatan $3$. Tentukan $A\\cap B$ dan $A\\cup B$.",
      solution: [
        "Diketahui $A=\\{2,4,6,8,10,12\\}$ dan $B=\\{3,6,9,12\\}$. Dicari unsur yang memenuhi kedua sifat serta yang memenuhi sedikitnya satu sifat.",
        "Unsur yang sekaligus kelipatan $2$ dan $3$ adalah $6$ dan $12$, sehingga $A\\cap B=\\{6,12\\}$. Menggabungkan unsur tanpa pengulangan memberi $A\\cup B=\\{2,3,4,6,8,9,10,12\\}$.",
        "Verifikasi: $|A|+|B|-|A\\cap B|=6+4-2=8$, sama dengan banyak anggota gabungan yang telah didaftar."
      ],
      conclusion: "Irisan memiliki dua anggota, sedangkan gabungan memiliki delapan anggota."
    },
    {
      title: "Indikator Mencegah Penghitungan Ganda",
      forDefinition: "Fungsi Indikator",
      problem: "Dengan $A,B$ dari contoh sebelumnya, verifikasi identitas $\\mathbf 1_{A\\cup B}(x)=\\mathbf 1_A(x)+\\mathbf 1_B(x)-\\mathbf 1_{A\\cap B}(x)$ untuk $x=6$ dan $x=5$.",
      solution: [
        "Diketahui $6\\in A\\cap B$. Maka ruas kanan untuk $x=6$ adalah $1+1-1=1$, tepat sama dengan indikator gabungan.",
        "Untuk $x=5$, bilangan tersebut tidak berada dalam $A$ maupun $B$. Ruas kanan bernilai $0+0-0=0$, sama dengan indikator gabungan.",
        "Untuk melengkapi verifikasi seluruh kasus, jika $x$ hanya berada pada salah satu himpunan, ruas kanan bernilai $1+0-0=1$ atau $0+1-0=1$. Empat kemungkinan keanggotaan telah diperiksa."
      ],
      conclusion: "Identitas indikator berlaku untuk setiap $x\\in U$, bukan hanya dua nilai yang diuji."
    },
    {
      title: "Derangement Tiga Objek",
      forDefinition: "Derangement",
      problem: "Tentukan seluruh derangement dari permutasi $\\{1,2,3\\}$.",
      solution: [
        "Diketahui permutasi $\\pi$ harus memenuhi $\\pi(1)\\ne1$, $\\pi(2)\\ne2$, dan $\\pi(3)\\ne3$. Ada enam permutasi yang mungkin sebelum syarat diterapkan.",
        "Daftarnya adalah $123,132,213,231,312,321$ dalam notasi satu baris. Permutasi $123,132,213,321$ memiliki sedikitnya satu titik tetap.",
        "Dua sisanya, $231$ dan $312$, tidak mempunyai titik tetap. Rumus derangement memberi $D_3=3!(1-1+1/2-1/6)=6(1/3)=2$ sebagai verifikasi."
      ],
      conclusion: "Tepat dua derangement pada tiga objek, yakni $231$ dan $312$."
    },
    {
      title: "Surjeksi dari Tiga Input ke Dua Nilai",
      forDefinition: "Fungsi Surjektif pada Himpunan Hingga",
      problem: "Hitung banyak fungsi surjektif dari $X=\\{1,2,3\\}$ ke $Y=\\{a,b\\}$.",
      solution: [
        "Diketahui $|X|=3$ dan $|Y|=2$. Semua fungsi berjumlah $2^3=8$, karena masing-masing input dapat dipetakan ke $a$ atau $b$.",
        "Fungsi tidak surjektif hanya jika seluruh input dipetakan ke $a$ atau seluruhnya ke $b$. Kedua fungsi konstan ini berbeda, sehingga banyak surjeksi $8-2=6$.",
        "Dengan rumus umum diperoleh $\\binom20 2^3-\\binom21 1^3+\\binom22 0^3=8-2+0=6$, sesuai perhitungan langsung."
      ],
      conclusion: "Terdapat enam fungsi surjektif."
    },
    {
      title: "Bilangan yang Tidak Habis Dibagi 2, 3, maupun 5",
      problem: "Berapa banyak bilangan bulat dari $1$ sampai $100$ yang tidak habis dibagi $2$, $3$, atau $5$?",
      solution: [
        "Diketahui semesta $U=\\{1,\\ldots,100\\}$ dan $A_d$ himpunan kelipatan $d$. Banyak kelipatan $d$ dalam $U$ ialah $\\lfloor100/d\\rfloor$.",
        "Banyak anggota tunggal adalah $|A_2|=50$, $|A_3|=33$, dan $|A_5|=20$. Banyak irisan pasangan ialah $|A_2\\cap A_3|=\\lfloor100/6\\rfloor=16$, $|A_2\\cap A_5|=10$, dan $|A_3\\cap A_5|=\\lfloor100/15\\rfloor=6$.",
        "Irisan ketiga himpunan berisi kelipatan $30$, sehingga ukurannya $\\lfloor100/30\\rfloor=3$. Dengan inklusi–eksklusi, ukuran gabungan $50+33+20-16-10-6+3=74$.",
        "Bilangan yang diminta adalah komplemen gabungan, berukuran $100-74=26$. Pemeriksaan batas: $1$ termasuk komplemen dan $100$ tidak, sesuai definisi."
      ],
      conclusion: "Ada 26 bilangan yang tidak habis dibagi salah satu dari $2$, $3$, dan $5$."
    },
    {
      title: "Tepat Satu Sifat Keterbagian",
      problem: "Dalam $\\{1,\\ldots,30\\}$, berapa bilangan yang habis dibagi tepat satu dari $2$, $3$, atau $5$?",
      solution: [
        "Diketahui $A,B,C$ berturut-turut himpunan kelipatan $2$, $3$, dan $5$. Diperoleh $S_1=15+10+6=31$.",
        "Irisan pasangan berukuran $\\lfloor30/6\\rfloor=5$, $\\lfloor30/10\\rfloor=3$, dan $\\lfloor30/15\\rfloor=2$, sehingga $S_2=10$. Irisan ketiganya berukuran $\\lfloor30/30\\rfloor=1$, sehingga $S_3=1$.",
        "Gunakan formula tepat satu: $N_1=S_1-2S_2+3S_3=31-20+3=14$. Koefisien $+3S_3$ penting karena anggota pada tiga himpunan sebelumnya telah dihitung dengan koefisien $3-6=-3$.",
        "Verifikasi untuk bilangan $30$: ia memenuhi ketiga sifat dan kontribusinya pada formula adalah $3-2\\cdot3+3=0$, sehingga tidak keliru dihitung sebagai tepat satu."
      ],
      conclusion: "Tepat 14 bilangan memenuhi satu dan hanya satu dari tiga sifat tersebut."
    },
    {
      title: "Empat Objek Tanpa Posisi Tetap",
      problem: "Hitung derangement empat objek dan jelaskan koreksi irisan pada inklusi–eksklusi.",
      solution: [
        "Diketahui semesta $4!=24$ permutasi. Untuk setiap posisi $i$, himpunan $A_i$ berisi permutasi dengan objek $i$ tetap.",
        "Jumlah ukuran empat himpunan tunggal adalah $\\binom41 3!=24$; jumlah irisan pasangan adalah $\\binom42 2!=12$; irisan tiga posisi berjumlah $\\binom43 1!=4$; irisan empat posisi berjumlah $\\binom44 0!=1$.",
        "Banyak permutasi dengan sedikitnya satu titik tetap adalah $24-12+4-1=15$. Karena itu derangement berjumlah $24-15=9$.",
        "Periksa dengan formula langsung: $D_4=24(1-1+1/2-1/6+1/24)=24(3/8)=9$."
      ],
      conclusion: "Terdapat sembilan derangement pada empat objek."
    },
    {
      title: "Fungsi Surjektif dari Empat ke Tiga",
      problem: "Berapa banyak fungsi surjektif dari himpunan beranggota $4$ ke himpunan beranggota $3$?",
      solution: [
        "Diketahui $n=4$ input dan $m=3$ nilai target. Semua fungsi berjumlah $3^4=81$.",
        "Untuk setiap nilai target yang tidak digunakan, terdapat $2^4=16$ fungsi. Ada tiga pilihan nilai yang tidak digunakan, sehingga pengurangan pertama adalah $3\\cdot16=48$.",
        "Fungsi yang tidak menggunakan dua nilai target dihitung dua kali pada pengurangan tersebut; terdapat $\\binom32 1^4=3$ fungsi semacam itu. Tidak ada fungsi yang menghindari ketiga nilai target karena domain tidak kosong.",
        "Dengan demikian, banyak surjeksi $81-48+3=36$. Verifikasi alternatif: pilih pasangan input yang memiliki citra sama dalam $\\binom42=6$ cara, lalu tempatkan tiga nilai target pada tiga kelompok input dalam $3!=6$ cara; hasilnya $6\\cdot6=36$."
      ],
      conclusion: "Ada 36 fungsi surjektif dari empat input ke tiga nilai."
    }
  ],
  exercises: [
    {
      prompt: "IE-01. Dalam $\\{1,\\ldots,60\\}$, tentukan banyak bilangan yang habis dibagi $4$ atau $6$.",
      hint: "Irisan kelipatan $4$ dan $6$ adalah kelipatan KPK-nya.",
      answer: "Diketahui $A$ kelipatan $4$ dan $B$ kelipatan $6$ dalam $\\{1,\\ldots,60\\}$. Diperoleh $|A|=\\lfloor60/4\\rfloor=15$ dan $|B|=\\lfloor60/6\\rfloor=10$. Anggota irisan harus habis dibagi $\\operatorname{KPK}(4,6)=12$, sehingga $|A\\cap B|=\\lfloor60/12\\rfloor=5$. Prinsip inklusi–eksklusi dua himpunan memberikan $|A\\cup B|=15+10-5=20$. Sebagai verifikasi, setiap kelipatan $12$ semula terhitung dua kali dan kini tepat sekali. Jadi ada $20$ bilangan yang memenuhi syarat."
    },
    {
      prompt: "IE-02. Berapa bilangan bulat dari $1$ sampai $120$ yang habis dibagi paling sedikit satu dari $2$, $3$, dan $7$?",
      hint: "Gunakan kelipatan KPK pada setiap irisan dan jangan lupa irisan tiga himpunan.",
      answer: "Diketahui $U=\\{1,\\ldots,120\\}$ dan $A_d$ kelipatan $d$. Banyak kelipatan tunggal adalah $60$, $40$, dan $\\lfloor120/7\\rfloor=17$. Irisan pasangan adalah kelipatan $6$, $14$, dan $21$, masing-masing sebanyak $20$, $8$, dan $5$. Irisan tiga himpunan adalah kelipatan $42$, sebanyak $2$. Rumus tiga himpunan memberikan $60+40+17-20-8-5+2=86$. Bilangan $42$ dan $84$ semula dihitung tiga kali, dikurangi tiga kali, lalu ditambahkan sekali sehingga masing-masing berkontribusi satu. Jadi tepat $86$ bilangan habis dibagi sedikitnya satu dari ketiga pembagi."
    },
    {
      prompt: "IE-03. Pada $\\{1,\\ldots,60\\}$, hitung banyak bilangan yang habis dibagi tepat dua dari $2$, $3$, dan $5$.",
      hint: "Jumlahkan ukuran irisan pasangan, lalu koreksi bilangan yang memenuhi ketiganya.",
      answer: "Diketahui $A,B,C$ adalah kelipatan $2$, $3$, dan $5$. Irisan pasangan berturut-turut berupa kelipatan $6$, $10$, dan $15$, sehingga $S_2=\\lfloor60/6\\rfloor+\\lfloor60/10\\rfloor+\\lfloor60/15\\rfloor=10+6+4=20$. Irisan ketiganya berupa kelipatan $30$, sehingga $S_3=2$. Anggota yang memenuhi tepat dua sifat terhitung satu kali pada $S_2$, sedangkan anggota yang memenuhi ketiganya terhitung tiga kali dan harus dihapus seluruhnya. Karena itu $N_2=S_2-3S_3=20-6=14$. Bilangan $30$ dan $60$ memang tidak boleh termasuk hasil. Jadi ada $14$ bilangan yang memenuhi tepat dua sifat."
    },
    {
      prompt: "IE-04. Hitung banyak derangement pada lima objek menggunakan inklusi–eksklusi dan periksa hasilnya melalui rekurensi $D_n=(n-1)(D_{n-1}+D_{n-2})$.",
      hint: "Gunakan $D_3=2$ dan $D_4=9$ sebagai nilai pemeriksaan.",
      answer: "Diketahui $n=5$ dan $A_i$ himpunan permutasi yang menetapkan posisi $i$. Dengan prinsip inklusi–eksklusi pada komplemen gabungan $A_i$, diperoleh $D_5=5!\\left(1-1+\\frac1{2!}-\\frac1{3!}+\\frac1{4!}-\\frac1{5!}\\right)$. Hitung secara eksak: $D_5=120-120+60-20+5-1=44$. Untuk memeriksa dengan rekurensi yang diberikan, substitusikan $D_4=9$ dan $D_3=2$: $(5-1)(9+2)=4\\cdot11=44$. Kedua metode konsisten. Jadi terdapat $44$ permutasi lima objek tanpa satu pun titik tetap."
    },
    {
      prompt: "IE-05. Hitung banyak fungsi surjektif dari himpunan beranggota $5$ ke himpunan beranggota $3$.",
      hint: "Hitung semua fungsi lalu hilangkan yang menghindari satu atau dua nilai target.",
      answer: "Diketahui $|X|=5$ dan $|Y|=3$. Ada $3^5=243$ fungsi tanpa pembatasan. Untuk setiap nilai target yang tidak digunakan, tersisa $2^5=32$ fungsi; terdapat tiga nilai target, sehingga dikurangi $3\\cdot32=96$. Fungsi yang menghindari dua nilai target hanya menggunakan satu nilai dan dihitung berlebih pada pengurangan; terdapat $\\binom32\\cdot1^5=3$ fungsi seperti itu. Tidak ada fungsi yang menghindari seluruh tiga nilai karena domain tidak kosong. Maka banyak surjeksi $243-96+3=150$. Nilai ini kurang dari $243$ dan positif karena $5\\ge3$, sesuai batas kelayakan. Jadi terdapat $150$ fungsi surjektif."
    },
    {
      prompt: "IE-06. Dari bilangan $1$ sampai $100$, hitung banyak yang habis dibagi $2$ atau $3$, tetapi tidak habis dibagi $5$.",
      hint: "Hitung gabungan kelipatan $2$ dan $3$, lalu kurangi bagian gabungan yang juga kelipatan $5$.",
      answer: "Diketahui $A$ kelipatan $2$, $B$ kelipatan $3$, dan $C$ kelipatan $5$ dalam $\\{1,\\ldots,100\\}$. Dicari $|(A\\cup B)\\setminus C|$. Dengan inklusi–eksklusi, $|A\\cup B|=50+33-\\lfloor100/6\\rfloor=50+33-16=67$. Bagian yang juga kelipatan $5$ adalah $(A\\cap C)\\cup(B\\cap C)$; ukurannya $\\lfloor100/10\\rfloor+\\lfloor100/15\\rfloor-\\lfloor100/30\\rfloor=10+6-3=13$. Kedua bagian saling lepas setelah pengurangan, sehingga hasilnya $67-13=54$. Bilangan $30$ tidak dihitung karena termasuk $C$, sesuai syarat. Jadi terdapat $54$ bilangan."
    },
    {
      prompt: "IE-07. Berapa derangement pada $\\{1,2,3,4\\}$ yang juga memenuhi $\\pi(1)=2$? Buktikan kelengkapan pencacahannya.",
      hint: "Setelah menetapkan $\\pi(1)=2$, periksa kemungkinan $\\pi(2)$ tanpa melanggar syarat titik tetap.",
      answer: "Diketahui $\\pi$ permutasi $\\{1,2,3,4\\}$, $\\pi(1)=2$, dan $\\pi(i)\\ne i$ untuk seluruh $i$. Karena nilai $2$ sudah dipakai, sisa nilai untuk posisi $2,3,4$ adalah $\\{1,3,4\\}$. Posisi kedua tidak boleh bernilai $2$, tetapi nilai $2$ memang sudah tidak tersedia; maka ada tiga kasus. Jika $\\pi(2)=1$, posisi $3$ tidak boleh bernilai $3$, sehingga $\\pi(3)=4$ dan $\\pi(4)=3$, memberi $2143$. Jika $\\pi(2)=3$, tersisa $\\{1,4\\}$; posisi keempat tidak boleh $4$, sehingga $\\pi(4)=1$ dan $\\pi(3)=4$, memberi $2341$. Jika $\\pi(2)=4$, tersisa $\\{1,3\\}$; posisi ketiga tidak boleh $3$, sehingga $\\pi(3)=1$ dan $\\pi(4)=3$, memberi $2413$. Ketiga kasus saling lepas, mencakup semua kemungkinan $\\pi(2)$, dan setiap permutasi tidak memiliki titik tetap. Jadi tepat ada $3$ derangement yang memenuhi $\\pi(1)=2$."
    },
    {
      prompt: "IE-08. Buktikan formula untuk banyak anggota yang berada tepat satu dari tiga himpunan hingga $A,B,C$, lalu uji pada $A=B=C=\\{1,2\\}$.",
      hint: "Pisahkan unsur menurut apakah ia berada pada satu, dua, atau tiga himpunan.",
      answer: "Diketahui himpunan hingga $A,B,C$. Misalkan $N_r$ banyak unsur yang berada tepat pada $r$ himpunan untuk $r=1,2,3$. Tuliskan $S_1=|A|+|B|+|C|$, $S_2=|A\\cap B|+|A\\cap C|+|B\\cap C|$, dan $S_3=|A\\cap B\\cap C|$. Setiap unsur kelas $N_r$ menyumbang $r$ pada $S_1$, $\\binom r2$ pada $S_2$, dan $\\binom r3$ pada $S_3$. Maka $S_1=N_1+2N_2+3N_3$, $S_2=N_2+3N_3$, serta $S_3=N_3$. Substitusi menghasilkan $N_1=S_1-2S_2+3S_3$. Untuk $A=B=C=\\{1,2\\}$, diperoleh $S_1=6$, $S_2=6$, dan $S_3=2$. Formula memberi $N_1=6-12+6=0$. Secara langsung, setiap unsur $1,2$ berada pada ketiga himpunan, sehingga tidak ada yang berada tepat pada satu himpunan. Dengan demikian, rumus terbukti dan contoh batas terverifikasi."
    }
  ],
  mistakes: [],
  connections: []
};
