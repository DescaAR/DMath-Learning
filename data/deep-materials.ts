import type { VisualizationKind } from "@/components/MathVisualizations";

export type DeepMaterial = {
  slug: string;
  title: string;
  level: string;
  subject: string;
  track: string;
  summary: string;
  readingTime: string;
  difficulty: string;
  visualization: VisualizationKind;
  prerequisites: string[];
  objectives: string[];
  conceptMap: string[];
  motivation: string[];
  intuition: string[];
  notation: { symbol: string; meaning: string }[];
  definitions: { title: string; body: string }[];
  theorems: { title: string; statement: string; proof: string[]; why: string }[];
  examples: { title: string; problem: string; solution: string[] }[];
  mistakes: string[];
  related: string[];
  references: string[];
};

export const deepMaterials: DeepMaterial[] = [
  {
    slug: "pecahan",
    title: "Pecahan",
    level: "SD",
    subject: "Aritmetika",
    track: "Reguler",
    summary: "Memahami pecahan sebagai bagian dari satu utuh, titik pada garis bilangan, hasil pembagian, perbandingan, dan dasar operasi pecahan.",
    readingTime: "35–45 menit",
    difficulty: "Dasar",
    visualization: "fraction",
    prerequisites: ["Bilangan cacah", "Perkalian dan pembagian dasar", "Konsep bagian yang sama besar"],
    objectives: [
      "Menjelaskan makna pembilang dan penyebut.",
      "Menentukan pecahan senilai dengan alasan, bukan sekadar aturan mekanis.",
      "Membandingkan dua pecahan.",
      "Menjumlahkan dan mengurangkan pecahan dengan memahami penyebut bersama.",
      "Menghubungkan pecahan dengan garis bilangan dan pembagian."
    ],
    conceptMap: ["Bagian dari satu utuh", "Pecahan senilai", "Garis bilangan", "Perbandingan", "Operasi", "Desimal dan persen"],
    motivation: [
      "Pecahan muncul ketika sebuah jumlah tidak lagi dinyatakan sebagai bilangan bulat, misalnya setengah liter, tiga perempat jam, atau dua dari lima bagian.",
      "Tujuan utama bab ini bukan menghafal aturan, melainkan memahami bahwa pecahan adalah bilangan. Karena merupakan bilangan, pecahan dapat ditempatkan pada garis bilangan, dibandingkan, dan dioperasikan."
    ],
    intuition: [
      "Penyebut menyatakan berapa banyak bagian sama besar yang digunakan untuk membagi satu utuh. Pembilang menyatakan berapa banyak bagian yang dipilih.",
      "Dua pecahan dapat tampak berbeda tetapi berada pada titik yang sama di garis bilangan. Inilah inti pecahan senilai."
    ],
    notation: [
      { symbol: "$\\frac{a}{b}$", meaning: "pecahan dengan pembilang $a$ dan penyebut $b\\neq0$" },
      { symbol: "$a:b$", meaning: "pembagian $a$ oleh $b$" },
      { symbol: "$\\frac{a}{b}=\\frac{c}{d}$", meaning: "dua pecahan mewakili bilangan yang sama" }
    ],
    definitions: [
      { title: "Pecahan", body: "Untuk bilangan bulat $a$ dan bilangan bulat tak nol $b$, bentuk $\\frac{a}{b}$ menyatakan hasil pembagian $a$ oleh $b$." },
      { title: "Pecahan Senilai", body: "Pecahan $\\frac{a}{b}$ dan $\\frac{c}{d}$ disebut senilai apabila keduanya menyatakan bilangan yang sama." },
      { title: "Pecahan Sederhana", body: "Pecahan $\\frac{a}{b}$ berada dalam bentuk paling sederhana apabila $\\gcd(a,b)=1$." }
    ],
    theorems: [
      {
        title: "Sifat Pecahan Senilai",
        statement: "Untuk $k\\neq0$, berlaku $\\frac{a}{b}=\\frac{ak}{bk}$.",
        proof: [
          "Karena $\\frac{k}{k}=1$ untuk $k\\neq0$, mengalikan sebuah bilangan dengan $\\frac{k}{k}$ tidak mengubah nilainya.",
          "Dengan demikian, $\\frac{a}{b}\\cdot\\frac{k}{k}=\\frac{ak}{bk}=\\frac{a}{b}$."
        ],
        why: "Sifat ini menjelaskan mengapa pembilang dan penyebut boleh dikalikan dengan bilangan yang sama ketika mencari penyebut bersama."
      },
      {
        title: "Kriteria Perbandingan Silang",
        statement: "Untuk $b,d>0$, berlaku $\\frac{a}{b}<\\frac{c}{d}$ jika dan hanya jika $ad<bc$.",
        proof: [
          "Karena $bd>0$, kedua ruas pertidaksamaan boleh dikalikan dengan $bd$ tanpa mengubah arah tanda.",
          "Dari $\\frac{a}{b}<\\frac{c}{d}$ diperoleh $ad<bc$. Langkah yang sama dapat dibalik, jadi kedua pernyataan ekuivalen."
        ],
        why: "Kriteria ini memberi cara membandingkan pecahan tanpa mengubahnya ke desimal."
      }
    ],
    examples: [
      {
        title: "Menentukan Pecahan Senilai",
        problem: "Tentukan pecahan dengan penyebut $20$ yang senilai dengan $\\frac{3}{5}$.",
        solution: ["Karena $5\\cdot4=20$, pembilang juga dikalikan $4$.", "Diperoleh $\\frac{3}{5}=\\frac{12}{20}$."]
      },
      {
        title: "Membandingkan Pecahan",
        problem: "Bandingkan $\\frac{5}{8}$ dan $\\frac{3}{5}$.",
        solution: ["Hitung hasil kali silang: $5\\cdot5=25$ dan $3\\cdot8=24$.", "Karena $25>24$, diperoleh $\\frac{5}{8}>\\frac{3}{5}$."]
      },
      {
        title: "Penjumlahan Berbeda Penyebut",
        problem: "Hitung $\\frac{2}{3}+\\frac{5}{12}$.",
        solution: ["Penyebut bersama terkecil adalah $12$.", "$\\frac{2}{3}=\\frac{8}{12}$, jadi $\\frac{8}{12}+\\frac{5}{12}=\\frac{13}{12}=1\\frac{1}{12}$."]
      }
    ],
    mistakes: [
      "Menjumlahkan penyebut saat menjumlahkan pecahan, misalnya mengira $\\frac12+\\frac13=\\frac25$.",
      "Membandingkan pecahan hanya dari besar pembilang tanpa memperhatikan penyebut.",
      "Menyederhanakan dengan mengurangkan angka yang sama dari pembilang dan penyebut."
    ],
    related: ["Rasio dan perbandingan", "Desimal", "Persen", "Proporsi"],
    references: ["OpenStax, Prealgebra 2e — bagian Fractions."]
  },
  {
    slug: "persamaan-linear",
    title: "Persamaan Linear",
    level: "SMP",
    subject: "Aljabar",
    track: "Reguler",
    summary: "Persamaan linear sebagai pernyataan kesetaraan, operasi ekuivalen, grafik garis, dan sistem persamaan linear sederhana.",
    readingTime: "45–60 menit",
    difficulty: "Dasar–Menengah",
    visualization: "linear",
    prerequisites: ["Operasi bilangan", "Sifat distributif", "Koordinat Kartesius dasar"],
    objectives: [
      "Membedakan ekspresi, persamaan, dan identitas.",
      "Menyelesaikan persamaan linear satu variabel dengan transformasi ekuivalen.",
      "Memodelkan masalah cerita menjadi persamaan.",
      "Menafsirkan solusi sistem dua persamaan sebagai titik perpotongan."
    ],
    conceptMap: ["Kesetaraan", "Transformasi ekuivalen", "Persamaan satu variabel", "Model matematika", "Graf garis", "Sistem persamaan"],
    motivation: [
      "Persamaan adalah bahasa untuk menyatakan bahwa dua ekspresi memiliki nilai yang sama. Menyelesaikan persamaan berarti mencari semua nilai variabel yang membuat kesetaraan tersebut benar.",
      "Kunci aljabar bukan memindahkan ruas secara mekanis, melainkan menerapkan operasi yang sama pada kedua ruas agar himpunan solusi tetap sama."
    ],
    intuition: [
      "Bayangkan persamaan sebagai neraca. Jika kedua sisi diberi operasi yang sama dan operasi tersebut sah, keseimbangan tetap terjaga.",
      "Untuk sistem dua persamaan linear, masing-masing persamaan adalah garis. Solusi bersama adalah titik yang memenuhi keduanya."
    ],
    notation: [
      { symbol: "$ax+b=c$", meaning: "persamaan linear satu variabel dengan $a\\neq0$" },
      { symbol: "$S$", meaning: "himpunan solusi" },
      { symbol: "$\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$", meaning: "sistem dua persamaan linear" }
    ],
    definitions: [
      { title: "Persamaan", body: "Persamaan adalah pernyataan bahwa dua ekspresi bernilai sama untuk nilai variabel tertentu." },
      { title: "Solusi", body: "Solusi persamaan adalah nilai variabel yang membuat persamaan menjadi benar." },
      { title: "Persamaan Ekuivalen", body: "Dua persamaan ekuivalen apabila mempunyai himpunan solusi yang sama." }
    ],
    theorems: [
      {
        title: "Prinsip Penjumlahan",
        statement: "Persamaan $A=B$ ekuivalen dengan $A+C=B+C$.",
        proof: [
          "Jika $A=B$, penambahan nilai yang sama $C$ pada kedua ruas memberi $A+C=B+C$.",
          "Sebaliknya, dari $A+C=B+C$, kurangi kedua ruas dengan $C$ dan diperoleh kembali $A=B$."
        ],
        why: "Prinsip ini adalah alasan formal di balik operasi menambah atau mengurangi suku yang sama pada kedua ruas."
      },
      {
        title: "Prinsip Perkalian",
        statement: "Untuk $k\\neq0$, persamaan $A=B$ ekuivalen dengan $kA=kB$.",
        proof: [
          "Jika $A=B$, perkalian kedua ruas dengan $k$ memberi $kA=kB$.",
          "Sebaliknya, karena $k\\neq0$, kedua ruas dapat dibagi dengan $k$ dan diperoleh $A=B$."
        ],
        why: "Syarat $k\\neq0$ penting. Perkalian dengan nol menghilangkan informasi dan dapat mengubah himpunan solusi."
      }
    ],
    examples: [
      {
        title: "Persamaan Satu Variabel",
        problem: "Selesaikan $3(2x-1)-5=4x+6$.",
        solution: ["Uraikan ruas kiri: $6x-3-5=4x+6$.", "Diperoleh $6x-8=4x+6$, jadi $2x=14$ dan $x=7$."]
      },
      {
        title: "Model Umur",
        problem: "Umur A lima tahun lebih tua dari B. Jumlah umur mereka $31$. Tentukan umur masing-masing.",
        solution: ["Ambil umur B $=x$, sehingga umur A $=x+5$.", "$x+(x+5)=31$ memberi $2x=26$, jadi B berumur $13$ dan A berumur $18$."]
      },
      {
        title: "Sistem Dua Persamaan",
        problem: "Selesaikan $x+y=5$ dan $2x-y=1$.",
        solution: ["Jumlahkan kedua persamaan untuk mengeliminasi $y$: $3x=6$.", "Diperoleh $x=2$ dan $y=3$."]
      }
    ],
    mistakes: [
      "Mengubah tanda ketika 'memindahkan ruas' tanpa memahami operasi ekuivalen.",
      "Membagi dengan ekspresi yang mungkin bernilai nol tanpa memeriksa kasusnya.",
      "Menganggap setiap dua garis pasti memiliki satu solusi; garis dapat sejajar atau berimpit."
    ],
    related: ["Fungsi linear", "Sistem persamaan", "Pertidaksamaan", "Matriks"],
    references: ["OpenStax, Elementary Algebra 2e — Linear Equations."]
  },
  {
    slug: "fungsi",
    title: "Fungsi",
    level: "SMA",
    subject: "Aljabar",
    track: "Reguler",
    summary: "Fungsi sebagai pemetaan, domain dan kodomain, komposisi, invers, grafik, dan sifat injektif-surjektif.",
    readingTime: "60–75 menit",
    difficulty: "Menengah",
    visualization: "function",
    prerequisites: ["Himpunan", "Relasi", "Persamaan dan pertidaksamaan", "Koordinat Kartesius"],
    objectives: [
      "Menjelaskan fungsi sebagai aturan yang memasangkan setiap elemen domain dengan tepat satu elemen kodomain.",
      "Menentukan domain dan range fungsi.",
      "Menghitung komposisi dan menentukan syarat keberadaan invers.",
      "Menganalisis grafik fungsi melalui sifat aljabarnya."
    ],
    conceptMap: ["Pemetaan", "Domain–kodomain–range", "Grafik", "Komposisi", "Injektif", "Surjektif", "Invers"],
    motivation: [
      "Fungsi memodelkan ketergantungan satu besaran terhadap besaran lain. Hampir seluruh kalkulus dibangun di atas gagasan fungsi.",
      "Notasi $f(x)$ bukan perkalian $f$ dengan $x$; notasi tersebut menyatakan nilai keluaran fungsi $f$ pada masukan $x$."
    ],
    intuition: [
      "Fungsi dapat dipandang sebagai mesin: setiap masukan yang sah harus memiliki tepat satu keluaran.",
      "Invers berusaha menjalankan mesin secara terbalik. Agar hasilnya tetap berupa fungsi, keluaran asli tidak boleh berasal dari dua masukan berbeda."
    ],
    notation: [
      { symbol: "$f:A\\to B$", meaning: "fungsi dari domain $A$ ke kodomain $B$" },
      { symbol: "$\\operatorname{Im}(f)$", meaning: "range atau citra fungsi" },
      { symbol: "$(g\\circ f)(x)=g(f(x))$", meaning: "komposisi $g$ setelah $f$" }
    ],
    definitions: [
      { title: "Fungsi", body: "Fungsi $f:A\\to B$ memasangkan setiap $x\\in A$ dengan tepat satu elemen $f(x)\\in B$." },
      { title: "Injektif", body: "Fungsi $f$ injektif apabila $f(x_1)=f(x_2)$ mengakibatkan $x_1=x_2$." },
      { title: "Surjektif", body: "Fungsi $f:A\\to B$ surjektif apabila setiap $y\\in B$ memiliki sedikitnya satu $x\\in A$ dengan $f(x)=y$." }
    ],
    theorems: [
      {
        title: "Kriteria Keberadaan Invers",
        statement: "Fungsi $f:A\\to B$ mempunyai fungsi invers $f^{-1}:B\\to A$ jika dan hanya jika $f$ bijektif.",
        proof: [
          "Jika $f^{-1}$ ada, dari $f(x_1)=f(x_2)$ diperoleh $x_1=f^{-1}(f(x_1))=f^{-1}(f(x_2))=x_2$, jadi $f$ injektif. Untuk setiap $y\\in B$, $y=f(f^{-1}(y))$, jadi $f$ surjektif.",
          "Sebaliknya, jika $f$ bijektif, setiap $y\\in B$ memiliki tepat satu prapeta $x\\in A$. Definisikan $f^{-1}(y)=x$. Keunikan prapeta menjadikan definisi ini sebuah fungsi."
        ],
        why: "Teorema ini menjelaskan mengapa uji satu-satu dan onto penting sebelum mencari rumus invers."
      },
      {
        title: "Komposisi Fungsi Injektif",
        statement: "Jika $f:A\\to B$ dan $g:B\\to C$ keduanya injektif, maka $g\\circ f$ injektif.",
        proof: [
          "Diambil $x_1,x_2\\in A$ dan diandaikan $(g\\circ f)(x_1)=(g\\circ f)(x_2)$.",
          "Karena $g$ injektif, diperoleh $f(x_1)=f(x_2)$. Karena $f$ injektif, diperoleh $x_1=x_2$.",
          "Dengan demikian $g\\circ f$ injektif."
        ],
        why: "Sifat ini sering digunakan untuk membangun fungsi rumit dari komponen yang lebih sederhana."
      }
    ],
    examples: [
      {
        title: "Domain Fungsi Rasional",
        problem: "Tentukan domain $f(x)=\\frac{x+1}{x^2-4}$.",
        solution: ["Penyebut tidak boleh nol, jadi $x^2-4\\neq0$.", "Diperoleh $x\\neq\\pm2$. Domain adalah $\\mathbb R\\setminus\\{-2,2\\}$."]
      },
      {
        title: "Komposisi",
        problem: "Jika $f(x)=2x+1$ dan $g(x)=x^2$, tentukan $(g\\circ f)(x)$.",
        solution: ["Substitusikan $f(x)$ ke $g$.", "$(g\\circ f)(x)=g(2x+1)=(2x+1)^2$."]
      },
      {
        title: "Invers Fungsi Linear",
        problem: "Tentukan invers $f(x)=3x-5$.",
        solution: ["Tuliskan $y=3x-5$, kemudian selesaikan terhadap $x$.", "$x=\\frac{y+5}{3}$, jadi $f^{-1}(x)=\\frac{x+5}{3}$."]
      }
    ],
    mistakes: [
      "Menyamakan kodomain dengan range.",
      "Mengabaikan domain ketika mencari invers atau komposisi.",
      "Menganggap $f^{-1}(x)$ sama dengan $1/f(x)$."
    ],
    related: ["Grafik fungsi", "Trigonometri", "Limit", "Turunan", "Transformasi"],
    references: ["OpenStax, Precalculus 2e — Functions."]
  },
  {
    slug: "trigonometri",
    title: "Trigonometri",
    level: "SMA",
    subject: "Trigonometri",
    track: "Reguler",
    summary: "Trigonometri melalui lingkaran satuan, identitas dasar, grafik, persamaan, serta aturan sinus dan cosinus.",
    readingTime: "75–90 menit",
    difficulty: "Menengah",
    visualization: "trig",
    prerequisites: ["Kesebangunan segitiga", "Teorema Pythagoras", "Fungsi dan grafik"],
    objectives: [
      "Mendefinisikan sinus dan cosinus melalui lingkaran satuan.",
      "Menurunkan identitas Pythagoras.",
      "Menggunakan identitas jumlah dan selisih sudut.",
      "Menyelesaikan persamaan trigonometri dasar.",
      "Menggunakan aturan sinus dan aturan cosinus."
    ],
    conceptMap: ["Sudut", "Lingkaran satuan", "Sinus–cosinus", "Identitas", "Grafik", "Persamaan", "Segitiga"],
    motivation: [
      "Trigonometri menghubungkan sudut dengan koordinat, panjang, dan gerak periodik.",
      "Lingkaran satuan memberi definisi yang lebih luas daripada segitiga siku-siku karena berlaku untuk setiap sudut real."
    ],
    intuition: [
      "Saat titik bergerak mengelilingi lingkaran satuan, koordinat horizontalnya adalah cosinus dan koordinat vertikalnya adalah sinus.",
      "Identitas trigonometri bukan daftar rumus terpisah; banyak di antaranya berasal dari geometri lingkaran dan sifat rotasi."
    ],
    notation: [
      { symbol: "$\\sin\\theta,\\cos\\theta$", meaning: "koordinat vertikal dan horizontal pada lingkaran satuan" },
      { symbol: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$", meaning: "tangen, terdefinisi saat $\\cos\\theta\\neq0$" },
      { symbol: "$2\\pi$", meaning: "satu putaran penuh dalam radian" }
    ],
    definitions: [
      { title: "Sinus dan Cosinus", body: "Jika $P=(x,y)$ adalah titik pada lingkaran satuan yang dibentuk sudut $\\theta$ dari sumbu-$x$ positif, maka $\\cos\\theta=x$ dan $\\sin\\theta=y$." },
      { title: "Tangen", body: "Untuk $\\cos\\theta\\neq0$, didefinisikan $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$." }
    ],
    theorems: [
      {
        title: "Identitas Pythagoras",
        statement: "$\\sin^2\\theta+\\cos^2\\theta=1$ untuk setiap $\\theta$.",
        proof: [
          "Titik $P=(\\cos\\theta,\\sin\\theta)$ berada pada lingkaran satuan.",
          "Persamaan lingkaran satuan adalah $x^2+y^2=1$. Substitusi $x=\\cos\\theta$ dan $y=\\sin\\theta$ memberi identitas tersebut."
        ],
        why: "Identitas ini adalah sumber banyak transformasi trigonometri lain."
      },
      {
        title: "Rumus Cosinus Selisih Sudut",
        statement: "$\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$.",
        proof: [
          "Ambil vektor satuan $u=(\\cos\\alpha,\\sin\\alpha)$ dan $v=(\\cos\\beta,\\sin\\beta)$.",
          "Dari hasil kali titik, $u\\cdot v=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$.",
          "Sudut antara $u$ dan $v$ adalah $\\alpha-\\beta$, sedangkan $\\|u\\|=\\|v\\|=1$, jadi $u\\cdot v=\\cos(\\alpha-\\beta)$.",
          "Dengan menyamakan kedua bentuk hasil kali titik diperoleh rumus yang diinginkan."
        ],
        why: "Rumus ini menjadi dasar identitas jumlah-selisih, sudut ganda, dan berbagai penyederhanaan."
      }
    ],
    examples: [
      {
        title: "Identitas",
        problem: "Sederhanakan $\\frac{1-\\cos^2x}{\\sin x}$ untuk $\\sin x\\neq0$.",
        solution: ["Gunakan $1-\\cos^2x=\\sin^2x$.", "Diperoleh $\\frac{\\sin^2x}{\\sin x}=\\sin x$."]
      },
      {
        title: "Persamaan Dasar",
        problem: "Selesaikan $2\\sin x=1$ untuk $0\\le x<2\\pi$.",
        solution: ["Diperoleh $\\sin x=\\frac12$.", "Pada interval tersebut, $x=\\frac\\pi6$ atau $x=\\frac{5\\pi}{6}$."]
      },
      {
        title: "Aturan Cosinus",
        problem: "Segitiga memiliki sisi $a=5$, $b=7$, dan sudut apit $C=60^\\circ$. Tentukan sisi $c$.",
        solution: ["Gunakan $c^2=a^2+b^2-2ab\\cos C$.", "$c^2=25+49-70\\cdot\\frac12=39$, jadi $c=\\sqrt{39}$."]
      }
    ],
    mistakes: [
      "Mencampur satuan derajat dan radian.",
      "Membagi dengan $\\sin x$ atau $\\cos x$ tanpa memeriksa kemungkinan nol.",
      "Menghafal identitas tanpa mengenali syarat domain fungsi."
    ],
    related: ["Fungsi periodik", "Vektor", "Bilangan kompleks", "Kalkulus"],
    references: ["OpenStax, Precalculus 2e — Trigonometric Functions."]
  },
  {
    slug: "integral-riemann",
    title: "Integral Riemann dan Darboux",
    level: "Kuliah",
    subject: "Analisis Real",
    track: "Universitas",
    summary: "Pembahasan lengkap Integral Riemann dan Darboux: fungsi terbatas, partisi, partisi berlabel, jumlah Riemann, jumlah Darboux bawah dan atas, integral Darboux bawah dan atas, kriteria keterintegralan, ekuivalensi Riemann–Darboux, kelas fungsi terintegralkan Riemann, sifat integral, osilasi, Kriteria Lebesgue, serta latihan soal dengan solusi dan visualisasi.",
    readingTime: "240–300 menit",
    difficulty: "Menengah–Lanjut",
    visualization: "riemann",
    prerequisites: ["Supremum dan infimum", "Barisan dan limit", "Kontinuitas", "Kekompakan interval tertutup"],
    objectives: [
      "Mendefinisikan partisi, norma partisi, jumlah Riemann, serta jumlah Darboux.",
      "Menjelaskan kriteria Darboux untuk integrabilitas.",
      "Membuktikan bahwa fungsi kontinu pada interval tertutup terintegralkan Riemann.",
      "Menggunakan sifat linearitas dan monotonisitas integral."
    ],
    conceptMap: ["Partisi", "Jumlah bawah", "Jumlah atas", "Jumlah Riemann", "Integrabilitas", "Kontinuitas", "Integral"],
    motivation: [
      "Integral Riemann memformalkan gagasan luas melalui penjumlahan banyak persegi panjang yang semakin halus.",
      "Dalam analisis, perhatian utama bukan hanya menghitung integral, tetapi memastikan bahwa limit dari aproksimasi tersebut benar-benar ada dan tidak bergantung pada pilihan titik sampel."
    ],
    intuition: [
      "Jumlah bawah menangkap luas dari bawah, sedangkan jumlah atas menangkap luas dari atas. Fungsi terintegralkan apabila celah di antara keduanya dapat dibuat sekecil yang diinginkan.",
      "Kontinuitas seragam pada interval tertutup memungkinkan osilasi fungsi dikontrol pada subinterval yang cukup pendek."
    ],
    notation: [
      { symbol: "$P=\\{x_0,\\ldots,x_n\\}$", meaning: "partisi interval $[a,b]$" },
      { symbol: "$\\|P\\|=\\max_i(x_i-x_{i-1})$", meaning: "norma atau mesh partisi" },
      { symbol: "$L(f,P),U(f,P)$", meaning: "jumlah Darboux bawah dan atas" }
    ],
    definitions: [
      { title: "Partisi", body: "Partisi $P$ dari $[a,b]$ adalah himpunan hingga $a=x_0<x_1<\\cdots<x_n=b$." },
      { title: "Jumlah Darboux", body: "Jika $m_i=\\inf_{[x_{i-1},x_i]}f$ dan $M_i=\\sup_{[x_{i-1},x_i]}f$, maka $L(f,P)=\\sum m_i\\Delta x_i$ dan $U(f,P)=\\sum M_i\\Delta x_i$." },
      { title: "Terintegralkan Riemann", body: "Fungsi terbatas $f:[a,b]\\to\\mathbb R$ terintegralkan Riemann apabila integral bawah dan integral atasnya sama." }
    ],
    theorems: [
      {
        title: "Kriteria Darboux",
        statement: "Fungsi terbatas $f:[a,b]\\to\\mathbb R$ terintegralkan Riemann jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$.",
        proof: [
          "Jika $f$ terintegralkan dan nilai integralnya $I$, dari definisi supremum integral bawah dipilih partisi $P_1$ dengan $I-L(f,P_1)<\\varepsilon/2$. Dari definisi infimum integral atas dipilih $P_2$ dengan $U(f,P_2)-I<\\varepsilon/2$.",
          "Ambil refinement bersama $P=P_1\\cup P_2$. Refinement menaikkan jumlah bawah dan menurunkan jumlah atas, jadi $U(f,P)-L(f,P)<\\varepsilon$.",
          "Sebaliknya, misalkan celah Darboux dapat dibuat kurang dari setiap $\\varepsilon>0$. Integral bawah selalu tidak melebihi integral atas. Jika selisih keduanya positif, pilih $\\varepsilon$ lebih kecil dari selisih tersebut; hal ini bertentangan dengan keberadaan partisi yang celahnya kurang dari $\\varepsilon$.",
          "Dengan demikian integral bawah dan atas sama."
        ],
        why: "Kriteria ini mengubah definisi berbasis supremum-infimum menjadi alat pembuktian yang praktis."
      },
      {
        title: "Kontinu Mengakibatkan Terintegralkan Riemann",
        statement: "Setiap fungsi kontinu $f:[a,b]\\to\\mathbb R$ terintegralkan Riemann.",
        proof: [
          "Karena $[a,b]$ kompak dan $f$ kontinu, $f$ kontinu seragam.",
          "Diambil $\\varepsilon>0$. Terdapat $\\delta>0$ sehingga $|x-y|<\\delta$ mengakibatkan $|f(x)-f(y)|<\\varepsilon/(b-a)$.",
          "Pilih partisi dengan norma kurang dari $\\delta$. Pada setiap subinterval, osilasi $M_i-m_i<\\varepsilon/(b-a)$.",
          "Akibatnya $U(f,P)-L(f,P)=\\sum(M_i-m_i)\\Delta x_i<\\frac{\\varepsilon}{b-a}\\sum\\Delta x_i=\\varepsilon$.",
          "Kriteria Darboux memberi bahwa $f$ terintegralkan Riemann."
        ],
        why: "Teorema ini menjamin bahwa kelas fungsi yang paling sering ditemui dalam kalkulus memang mempunyai integral Riemann."
      },
      {
        title: "Linearitas Integral",
        statement: "Jika $f,g$ terintegralkan pada $[a,b]$ dan $\\alpha,\\beta\\in\\mathbb R$, maka $\\alpha f+\\beta g$ terintegralkan dan $\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g$.",
        proof: [
          "Untuk jumlah Riemann pada partisi bertanda yang sama, linearitas penjumlahan memberi $S(\\alpha f+\\beta g)=\\alpha S(f)+\\beta S(g)$.",
          "Saat norma partisi menuju nol, $S(f)$ dan $S(g)$ masing-masing menuju integralnya.",
          "Sifat limit terhadap kombinasi linear memberi hasil yang dinyatakan."
        ],
        why: "Linearitas memungkinkan integral fungsi rumit diuraikan ke komponen yang lebih sederhana."
      }
    ],
    examples: [
      {
        title: "Fungsi Konstan",
        problem: "Buktikan langsung bahwa $f(x)=c$ terintegralkan pada $[a,b]$.",
        solution: ["Pada setiap subinterval, supremum dan infimum sama-sama $c$.", "Jadi $U(f,P)=L(f,P)=c(b-a)$ untuk setiap partisi $P$. Dengan demikian integralnya $c(b-a)$."]
      },
      {
        title: "Fungsi $x^2$",
        problem: "Hitung $\\int_0^1x^2\\,dx$ melalui limit jumlah Riemann kanan.",
        solution: ["Gunakan partisi seragam dan titik kanan $x_i=i/n$.", "$S_n=\\sum_{i=1}^n(i/n)^2(1/n)=\\frac{1}{n^3}\\frac{n(n+1)(2n+1)}6$.", "Limit saat $n\\to\\infty$ adalah $\\frac13$."]
      },
      {
        title: "Fungsi dengan Satu Diskontinuitas",
        problem: "Jelaskan mengapa fungsi $f(x)=0$ untuk $x\\neq0$ dan $f(0)=1$ terintegralkan pada $[-1,1]$.",
        solution: ["Pada semua subinterval yang tidak memuat $0$, osilasi bernilai nol.", "Buat satu subinterval sangat pendek yang memuat $0$. Kontribusi celah jumlah atas-bawah hanya panjang subinterval tersebut.", "Celah dapat dibuat kurang dari setiap $\\varepsilon>0$, jadi fungsi terintegralkan dan integralnya $0$."]
      }
    ],
    mistakes: [
      "Menganggap semua fungsi terbatas otomatis terintegralkan Riemann.",
      "Tidak membedakan integral Riemann dengan jumlah Riemann tertentu.",
      "Menggunakan kontinuitas biasa saat pembuktian membutuhkan kontrol seragam pada seluruh interval."
    ],
    related: ["Integral Darboux", "Kontinuitas seragam", "Teorema Fundamental Kalkulus", "Konvergensi fungsi"],
    references: ["Stephen Abbott, Understanding Analysis, 2nd ed., Springer, 2015."]
  },
  {
    slug: "prinsip-pigeonhole",
    title: "Prinsip Pigeonhole",
    level: "Kuliah",
    subject: "Kombinatorika",
    track: "Universitas",
    summary: "Prinsip pigeonhole dasar dan umum, pemilihan kotak yang tepat, pembuktian eksistensi, dan aplikasi kombinatorial.",
    readingTime: "55–70 menit",
    difficulty: "Menengah",
    visualization: "pigeonhole",
    prerequisites: ["Himpunan", "Fungsi", "Pembulatan atas", "Argumen kontradiksi dasar"],
    objectives: [
      "Menyatakan prinsip pigeonhole dalam bentuk dasar dan umum.",
      "Mengidentifikasi objek dan kotak pada masalah nonrutin.",
      "Membangun pembuktian eksistensi menggunakan prinsip pigeonhole.",
      "Menggabungkan prinsip pigeonhole dengan modulo, geometri, dan counting."
    ],
    conceptMap: ["Objek", "Kotak", "Kepadatan", "Ceiling", "Eksistensi", "Kontradiksi", "Aplikasi"],
    motivation: [
      "Prinsip pigeonhole tampak sederhana, tetapi kekuatannya terletak pada cara memilih 'kotak'.",
      "Prinsip ini membuktikan bahwa sebuah konfigurasi tertentu harus terjadi tanpa perlu menentukan konfigurasi tersebut secara eksplisit."
    ],
    intuition: [
      "Jika lebih banyak objek dimasukkan ke lebih sedikit kotak, ada kotak yang menerima lebih dari satu objek.",
      "Bentuk umum mengukur kepadatan rata-rata. Jika $N$ objek dibagi ke $k$ kotak, sedikitnya satu kotak memiliki setidaknya $\\lceil N/k\\rceil$ objek."
    ],
    notation: [
      { symbol: "$\\lceil x\\rceil$", meaning: "bilangan bulat terkecil yang tidak kurang dari $x$" },
      { symbol: "$N$", meaning: "jumlah objek" },
      { symbol: "$k$", meaning: "jumlah kotak" }
    ],
    definitions: [
      { title: "Pigeonhole Dasar", body: "Jika $n+1$ objek ditempatkan ke $n$ kotak, sedikitnya satu kotak berisi paling sedikit dua objek." },
      { title: "Pigeonhole Umum", body: "Jika $N$ objek ditempatkan ke $k$ kotak, sedikitnya satu kotak berisi sekurang-kurangnya $\\lceil N/k\\rceil$ objek." }
    ],
    theorems: [
      {
        title: "Prinsip Pigeonhole Umum",
        statement: "Dalam distribusi $N$ objek ke $k$ kotak, terdapat kotak yang memuat sedikitnya $\\lceil N/k\\rceil$ objek.",
        proof: [
          "Andaikan setiap kotak memuat paling banyak $\\lceil N/k\\rceil-1$ objek.",
          "Total objek paling banyak $k(\\lceil N/k\\rceil-1)$.",
          "Karena $\\lceil N/k\\rceil-1<N/k$, total tersebut kurang dari $N$.",
          "Hal ini bertentangan dengan fakta bahwa ada $N$ objek. Dengan demikian sedikitnya satu kotak memuat minimal $\\lceil N/k\\rceil$ objek."
        ],
        why: "Bentuk umum memberi batas kuantitatif, bukan hanya menjamin adanya dua objek dalam satu kotak."
      },
      {
        title: "Dua Bilangan Memiliki Selisih Kelipatan $n$",
        statement: "Dari sembarang $n+1$ bilangan bulat, terdapat dua bilangan yang kongruen modulo $n$.",
        proof: [
          "Setiap bilangan bulat memiliki tepat satu dari $n$ kelas residu modulo $n$.",
          "Tempatkan $n+1$ bilangan ke $n$ kotak berdasarkan kelas residunya.",
          "Prinsip pigeonhole memberi dua bilangan dalam kotak yang sama. Selisih keduanya habis dibagi $n$."
        ],
        why: "Aplikasi ini menunjukkan bagaimana kelas residu dapat berperan sebagai kotak."
      }
    ],
    examples: [
      {
        title: "Bulan Kelahiran",
        problem: "Berapa banyak orang minimum yang menjamin sedikitnya dua orang lahir pada bulan yang sama?",
        solution: ["Terdapat $12$ bulan sebagai kotak.", "Dengan $13$ orang, prinsip pigeonhole menjamin ada dua orang pada bulan yang sama."]
      },
      {
        title: "Sisa Modulo",
        problem: "Buktikan bahwa dari $11$ bilangan bulat terdapat dua yang selisihnya habis dibagi $10$.",
        solution: ["Gunakan $10$ kelas residu modulo $10$ sebagai kotak.", "Sebelas bilangan masuk ke sepuluh kotak, jadi dua memiliki residu yang sama."]
      },
      {
        title: "Jarak Geometri",
        problem: "Lima titik diletakkan pada persegi sisi $2$. Buktikan ada dua titik berjarak paling jauh $\\sqrt2$.",
        solution: ["Bagi persegi menjadi empat persegi satuan.", "Dari lima titik, dua berada dalam persegi satuan yang sama.", "Diameter persegi satuan adalah $\\sqrt2$, jadi jarak dua titik tersebut tidak melebihi $\\sqrt2$."]
      }
    ],
    mistakes: [
      "Memilih kotak yang terlalu kasar atau terlalu halus sehingga kesimpulan tidak cukup kuat.",
      "Melupakan fungsi pembulatan atas pada bentuk umum.",
      "Menganggap prinsip pigeonhole memberi tahu kotak mana yang penuh; prinsip hanya menjamin keberadaannya."
    ],
    related: ["Modulo", "Extremal principle", "Counting", "Ramsey theory dasar"],
    references: ["Ronald L. Graham, Donald E. Knuth, Oren Patashnik, Concrete Mathematics, 2nd ed."]
  },
  {
    slug: "spektrum-graf",
    title: "Spektrum Graf",
    level: "Kuliah",
    subject: "Teori Graf",
    track: "Universitas",
    summary: "Matriks adjacency, Laplacian, matriks jarak, spektrum, polinomial karakteristik, dan informasi struktur yang dikodekan oleh nilai eigen.",
    readingTime: "80–100 menit",
    difficulty: "Menengah–Lanjut",
    visualization: "spectrum",
    prerequisites: ["Teori graf dasar", "Matriks", "Determinan", "Nilai eigen dan vektor eigen"],
    objectives: [
      "Membangun matriks adjacency dan Laplacian suatu graf.",
      "Menentukan spektrum matriks graf sederhana.",
      "Membuktikan beberapa sifat dasar spektrum graf tak berarah.",
      "Menghubungkan spektrum dengan derajat, keterhubungan, dan struktur graf."
    ],
    conceptMap: ["Graf", "Matriks adjacency", "Laplacian", "Distance matrix", "Eigenvalue", "Characteristic polynomial", "Spectrum"],
    motivation: [
      "Spektral graf menerjemahkan struktur kombinatorial menjadi objek aljabar linear.",
      "Nilai eigen dapat mengungkap informasi global yang tidak selalu tampak dari gambar graf, seperti keterhubungan dan regularitas."
    ],
    intuition: [
      "Matriks adjacency menyimpan pasangan simpul bertetangga, sedangkan matriks Laplacian menggabungkan informasi derajat dan adjacency.",
      "Spektrum adalah sidik jari aljabar; graf nonisomorfik dapat memiliki spektrum sama, tetapi banyak sifat penting tetap dapat dibaca dari spektrum."
    ],
    notation: [
      { symbol: "$A(G)$", meaning: "matriks adjacency graf $G$" },
      { symbol: "$L(G)=D(G)-A(G)$", meaning: "matriks Laplacian" },
      { symbol: "$\\operatorname{Spec}(A)$", meaning: "multiset nilai eigen matriks $A$" }
    ],
    definitions: [
      { title: "Spektrum Adjacency", body: "Spektrum adjacency graf $G$ adalah multiset semua nilai eigen dari $A(G)$ beserta multiplisitas aljabarnya." },
      { title: "Laplacian", body: "Untuk graf sederhana $G$, matriks Laplacian didefinisikan sebagai $L=D-A$, dengan $D$ matriks diagonal derajat." },
      { title: "Matriks Jarak", body: "Matriks jarak $D(G)$ memiliki entri $d_{ij}=d(v_i,v_j)$, yaitu panjang lintasan terpendek antara $v_i$ dan $v_j$." }
    ],
    theorems: [
      {
        title: "Spektrum Graf Tak Berarah Bersifat Real",
        statement: "Jika $G$ graf sederhana tak berarah, semua nilai eigen $A(G)$ adalah real.",
        proof: [
          "Matriks adjacency graf tak berarah simetris real karena $a_{ij}=a_{ji}$.",
          "Teorema spektral untuk matriks simetris real menjamin bahwa seluruh nilai eigennya real dan matriks dapat didiagonalisasi secara ortogonal."
        ],
        why: "Sifat real memungkinkan teknik analisis nilai eigen digunakan secara langsung tanpa perlu bekerja di bilangan kompleks."
      },
      {
        title: "Nol Selalu Nilai Eigen Laplacian",
        statement: "Untuk setiap graf $G$, $0$ adalah nilai eigen $L(G)$ dengan vektor eigen $\\mathbf1$.",
        proof: [
          "Jumlah setiap baris $L=D-A$ adalah derajat simpul dikurangi jumlah ketetanggannya, yaitu nol.",
          "Dengan demikian $L\\mathbf1=\\mathbf0$, jadi $\\mathbf1$ adalah vektor eigen untuk nilai eigen $0$."
        ],
        why: "Multiplisitas nilai eigen nol Laplacian berkaitan langsung dengan banyak komponen terhubung."
      },
      {
        title: "Trace Adjacency",
        statement: "Untuk graf sederhana tanpa loop, jumlah seluruh nilai eigen adjacency adalah $0$.",
        proof: [
          "Diagonal $A(G)$ seluruhnya nol, jadi $\\operatorname{tr}(A)=0$.",
          "Trace suatu matriks sama dengan jumlah nilai eigennya dihitung dengan multiplisitas aljabar.",
          "Akibatnya jumlah nilai eigen adjacency adalah $0$."
        ],
        why: "Identitas trace memberi pemeriksaan cepat terhadap perhitungan spektrum."
      }
    ],
    examples: [
      {
        title: "Graf Lengkap $K_3$",
        problem: "Tentukan spektrum adjacency $K_3$.",
        solution: ["$A(K_3)=J-I$.", "Vektor $\\mathbf1$ memberi nilai eigen $2$, sedangkan setiap vektor ortogonal terhadap $\\mathbf1$ memberi nilai eigen $-1$.", "Jadi spektrumnya $\\{2,-1,-1\\}$."]
      },
      {
        title: "Lintasan $P_3$",
        problem: "Tentukan polinomial karakteristik adjacency $P_3$.",
        solution: ["Gunakan $A=\\begin{pmatrix}0&1&0\\\\1&0&1\\\\0&1&0\\end{pmatrix}$.", "$\\det(\\lambda I-A)=\\lambda(\\lambda^2-2)$.", "Nilai eigennya $\\sqrt2,0,-\\sqrt2$."]
      },
      {
        title: "Laplacian dan Keterhubungan",
        problem: "Untuk graf terhubung sederhana, apa arti multiplisitas nilai eigen Laplacian $0$?",
        solution: ["Secara umum multiplisitas $0$ sama dengan banyak komponen terhubung.", "Karena graf terhubung memiliki satu komponen, multiplisitasnya $1$."]
      }
    ],
    mistakes: [
      "Mencampur spektrum adjacency, Laplacian, signless Laplacian, dan distance spectrum.",
      "Melupakan multiplisitas nilai eigen.",
      "Menganggap dua graf kospektral pasti isomorfik."
    ],
    related: ["Aljabar Linear", "Graph Energy", "Distance Spectrum", "Spectral Radius"],
    references: ["D. Cvetković, P. Rowlinson, S. Simić, An Introduction to the Theory of Graph Spectra, Cambridge University Press."]
  },
  {
    slug: "teori-bilangan-olimpiade-smp",
    title: "Teori Bilangan Olimpiade SMP",
    level: "Olimpiade SMP",
    subject: "Teori Bilangan",
    track: "Olimpiade",
    summary: "Keterbagian, gcd-lcm, bilangan prima, faktorisasi, kongruensi dasar, pola digit, dan strategi problem solving.",
    readingTime: "80–100 menit",
    difficulty: "Menengah–Sulit",
    visualization: "modclock",
    prerequisites: ["Operasi bilangan bulat", "Faktor dan kelipatan", "Pangkat"],
    objectives: [
      "Menggunakan algoritma Euclid dan identitas Bézout sederhana.",
      "Mengerjakan masalah keterbagian dan digit dengan kongruensi.",
      "Menggunakan faktorisasi prima untuk gcd, lcm, dan banyak faktor.",
      "Mengembangkan argumen olimpiade yang ringkas tetapi lengkap."
    ],
    conceptMap: ["Divisibility", "GCD", "Prime factorization", "Congruence", "Digits", "Diophantine equations"],
    motivation: [
      "Soal teori bilangan olimpiade sering tampak seperti permainan angka, tetapi sebenarnya dibangun dari struktur keterbagian dan residu.",
      "Modulo membantu membuang informasi yang tidak relevan sambil mempertahankan pola yang dibutuhkan."
    ],
    intuition: [
      "Kongruensi $a\\equiv b\\pmod m$ berarti $a$ dan $b$ meninggalkan sisa yang sama ketika dibagi $m$.",
      "Algoritma Euclid bekerja karena faktor persekutuan dari $a$ dan $b$ sama dengan faktor persekutuan dari $b$ dan sisa pembagian $a$ oleh $b$."
    ],
    notation: [
      { symbol: "$a\\mid b$", meaning: "$a$ membagi $b$" },
      { symbol: "$\\gcd(a,b)$", meaning: "faktor persekutuan terbesar" },
      { symbol: "$a\\equiv b\\pmod m$", meaning: "$m\\mid(a-b)$" }
    ],
    definitions: [
      { title: "Keterbagian", body: "Untuk bilangan bulat $a\\neq0$, ditulis $a\\mid b$ apabila terdapat $k\\in\\mathbb Z$ dengan $b=ak$." },
      { title: "Kongruensi", body: "Ditulis $a\\equiv b\\pmod m$ apabila $m\\mid(a-b)$." },
      { title: "Bilangan Prima", body: "Bilangan bulat $p>1$ disebut prima apabila faktor positifnya hanya $1$ dan $p$." }
    ],
    theorems: [
      {
        title: "Algoritma Euclid",
        statement: "Jika $a=bq+r$, maka $\\gcd(a,b)=\\gcd(b,r)$.",
        proof: [
          "Jika $d$ membagi $a$ dan $b$, maka $d$ juga membagi $a-bq=r$.",
          "Sebaliknya, jika $d$ membagi $b$ dan $r$, maka $d$ membagi $bq+r=a$.",
          "Jadi himpunan faktor persekutuan pasangan $(a,b)$ dan $(b,r)$ sama. FPB keduanya pun sama."
        ],
        why: "Teorema ini memberi algoritma sangat efisien untuk menghitung gcd."
      },
      {
        title: "Sifat Kongruensi terhadap Operasi",
        statement: "Jika $a\\equiv b\\pmod m$ dan $c\\equiv d\\pmod m$, maka $a+c\\equiv b+d\\pmod m$ dan $ac\\equiv bd\\pmod m$.",
        proof: [
          "Terdapat bilangan bulat $r,s$ dengan $a-b=rm$ dan $c-d=sm$.",
          "Untuk penjumlahan, $(a+c)-(b+d)=(r+s)m$.",
          "Untuk perkalian, $ac-bd=a(c-d)+d(a-b)=a(sm)+d(rm)$, yang merupakan kelipatan $m$."
        ],
        why: "Sifat ini memungkinkan perhitungan bilangan besar diganti oleh residu kecil."
      }
    ],
    examples: [
      {
        title: "Digit Terakhir",
        problem: "Tentukan digit terakhir $7^{2026}$.",
        solution: ["Pola digit terakhir pangkat $7$ adalah $7,9,3,1$ dengan periode $4$.", "$2026\\equiv2\\pmod4$, jadi digit terakhirnya sama dengan $7^2$, yaitu $9$."]
      },
      {
        title: "FPB",
        problem: "Hitung $\\gcd(2026,748)$.",
        solution: ["$2026=2(748)+530$.", "$748=1(530)+218$, $530=2(218)+94$, $218=2(94)+30$, $94=3(30)+4$, $30=7(4)+2$, $4=2(2)$.", "Jadi FPB-nya $2$."]
      },
      {
        title: "Keterbagian",
        problem: "Buktikan $n^3-n$ habis dibagi $6$ untuk setiap $n\\in\\mathbb Z$.",
        solution: ["Faktorkan $n^3-n=n(n-1)(n+1)$.", "Tiga bilangan bulat berurutan selalu memuat satu kelipatan $3$ dan sedikitnya satu bilangan genap.", "Jadi hasil kalinya habis dibagi $6$."]
      }
    ],
    mistakes: [
      "Membagi kedua ruas kongruensi tanpa memeriksa apakah pembagi invertibel modulo $m$.",
      "Menggunakan pola numerik kecil sebagai bukti umum tanpa argumen.",
      "Mengabaikan tanda dan kasus nol dalam pernyataan keterbagian."
    ],
    related: ["CRT dasar", "Persamaan Diofantin", "Fermat kecil", "Pola digit"],
    references: ["Titu Andreescu, Dorin Andrica, Number Theory: Structures, Examples, and Problems."]
  },
  {
    slug: "kombinatorika-olimpiade-sma",
    title: "Kombinatorika Olimpiade SMA",
    level: "Olimpiade SMA",
    subject: "Kombinatorika",
    track: "Olimpiade",
    summary: "Counting, bijeksi, double counting, pigeonhole, inclusion-exclusion, recurrence, invariant, coloring, dan extremal principle.",
    readingTime: "100–130 menit",
    difficulty: "Sulit",
    visualization: "combinatorics",
    prerequisites: ["Aturan perkalian", "Kombinasi dan permutasi", "Logika pembuktian"],
    objectives: [
      "Memilih model counting yang tepat.",
      "Menggunakan bijeksi dan double counting untuk identitas.",
      "Menggunakan inclusion-exclusion dan recurrence.",
      "Menerapkan invariant, coloring, dan extremal principle pada masalah nonrutin."
    ],
    conceptMap: ["Counting", "Bijection", "Double counting", "Pigeonhole", "Inclusion-exclusion", "Recurrence", "Invariant", "Extremal"],
    motivation: [
      "Kombinatorika olimpiade tidak sekadar menghitung dengan rumus $nCr$. Tantangan utamanya adalah menemukan representasi yang membuat struktur masalah terlihat.",
      "Banyak pembuktian paling elegan muncul ketika objek yang sama dihitung dengan dua cara berbeda."
    ],
    intuition: [
      "Bijeksi membuktikan dua himpunan sama banyak dengan memasangkan elemennya satu-satu.",
      "Invariant mencari kuantitas yang tidak berubah selama proses, sedangkan monovariant mencari kuantitas yang selalu bergerak satu arah."
    ],
    notation: [
      { symbol: "$\\binom{n}{k}$", meaning: "banyak cara memilih $k$ objek dari $n$ objek" },
      { symbol: "$|A|$", meaning: "kardinalitas himpunan $A$" },
      { symbol: "$A\\triangle B$", meaning: "symmetric difference" }
    ],
    definitions: [
      { title: "Bijeksi", body: "Bijeksi adalah fungsi yang injektif dan surjektif; dalam counting, bijeksi memberi korespondensi satu-satu antara dua kelas objek." },
      { title: "Invariant", body: "Invariant adalah kuantitas atau sifat yang tetap selama serangkaian operasi." },
      { title: "Extremal Principle", body: "Strategi memilih objek terkecil, terbesar, paling kiri, paling kanan, atau ekstrem lain untuk memaksa struktur tertentu." }
    ],
    theorems: [
      {
        title: "Identitas Pascal",
        statement: "$\\binom{n}{k}=\\binom{n-1}{k}+\\binom{n-1}{k-1}$.",
        proof: [
          "Hitung banyak cara memilih $k$ orang dari $n$ orang dengan membedakan satu orang khusus, misalnya A.",
          "Pilihan yang tidak memuat A berjumlah $\\binom{n-1}{k}$.",
          "Pilihan yang memuat A ditentukan dengan memilih $k-1$ orang lain dari $n-1$, berjumlah $\\binom{n-1}{k-1}$.",
          "Kedua kasus saling lepas dan mencakup semua pilihan, jadi jumlahnya memberi identitas Pascal."
        ],
        why: "Identitas ini mendasari segitiga Pascal, recurrence binomial, dan banyak argumen counting."
      },
      {
        title: "Prinsip Inclusion–Exclusion Dua Himpunan",
        statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$.",
        proof: [
          "Menjumlahkan $|A|+|B|$ menghitung setiap elemen $A\\cap B$ dua kali.",
          "Kurangi $|A\\cap B|$ sekali agar setiap elemen $A\\cup B$ dihitung tepat satu kali."
        ],
        why: "Prinsip ini adalah mekanisme dasar untuk mengoreksi overcounting."
      },
      {
        title: "Handshaking Lemma",
        statement: "Untuk graf hingga sederhana, $\\sum_{v\\in V}\\deg(v)=2|E|$.",
        proof: [
          "Hitung pasangan insidensi $(v,e)$ dengan $v$ merupakan ujung dari sisi $e$.",
          "Jika dihitung menurut simpul, banyaknya adalah $\\sum_v\\deg(v)$.",
          "Jika dihitung menurut sisi, setiap sisi mempunyai tepat dua ujung, jadi totalnya $2|E|$.",
          "Kedua perhitungan menghitung himpunan pasangan yang sama."
        ],
        why: "Ini contoh klasik double counting dan alat penting dalam kombinatorika graf."
      }
    ],
    examples: [
      {
        title: "String Biner",
        problem: "Berapa banyak string biner panjang $8$ dengan tepat tiga digit $1$?",
        solution: ["Pilih posisi tiga digit $1$ dari delapan posisi.", "Banyaknya $\\binom83=56$."]
      },
      {
        title: "Inclusion–Exclusion",
        problem: "Berapa banyak bilangan $1\\le n\\le100$ yang habis dibagi $2$ atau $5$?",
        solution: ["Kelipatan $2$ ada $50$, kelipatan $5$ ada $20$, dan kelipatan $10$ ada $10$.", "Total $50+20-10=60$."]
      },
      {
        title: "Invariant Paritas",
        problem: "Pada papan terdapat bilangan bulat. Satu langkah mengganti dua bilangan $a,b$ dengan $a+1,b+1$. Apa yang tetap modulo $2$?",
        solution: ["Jumlah seluruh bilangan bertambah $2$ pada setiap langkah.", "Jadi paritas jumlah total merupakan invariant."]
      }
    ],
    mistakes: [
      "Menggunakan permutasi ketika urutan sebenarnya tidak relevan.",
      "Melakukan inclusion-exclusion tetapi lupa suku irisan tingkat lebih tinggi.",
      "Menyatakan sebuah invariant tanpa membuktikan bahwa semua operasi mempertahankannya."
    ],
    related: ["Teori Graf", "Generating Functions", "Recurrence", "Probability"],
    references: ["Miklós Bóna, A Walk Through Combinatorics, 4th ed."]
  },
  {
    slug: "aljabar-linear-onmipa",
    title: "Aljabar Linear ON-MIPA",
    level: "Olimpiade Mahasiswa / ON-MIPA",
    subject: "Aljabar Linear",
    track: "ON-MIPA",
    summary: "Ruang vektor, basis, transformasi linear, rank-nullity, eigenvalue, minimal polynomial, ruang invarian, inner product, dan strategi seleksi.",
    readingTime: "120–160 menit",
    difficulty: "Sulit–Advanced",
    visualization: "onmipa-linear",
    prerequisites: ["Aljabar Linear dasar", "Polinomial", "Pembuktian formal"],
    objectives: [
      "Menggunakan dimensi sebagai alat counting aljabar.",
      "Memanfaatkan kernel, image, rank-nullity, dan invariance.",
      "Menganalisis operator melalui eigenvalue dan polinomial.",
      "Menyelesaikan soal pembuktian dan konstruksi tingkat kompetisi."
    ],
    conceptMap: ["Vector spaces", "Dimension", "Linear maps", "Kernel–Image", "Eigenvalues", "Invariant subspaces", "Inner product"],
    motivation: [
      "Soal ON-MIPA sering meminta argumen struktur, bukan eliminasi baris panjang.",
      "Dimensi, rank-nullity, invariance, dan polinomial operator sering memotong perhitungan menjadi pembuktian singkat."
    ],
    intuition: [
      "Transformasi linear ditentukan sepenuhnya oleh apa yang dilakukannya pada sebuah basis.",
      "Kernel mengukur arah yang diruntuhkan menjadi nol, sedangkan image mengukur arah keluaran yang benar-benar tercapai."
    ],
    notation: [
      { symbol: "$\\mathcal L(V,W)$", meaning: "ruang semua pemetaan linear dari $V$ ke $W$" },
      { symbol: "$\\ker T$", meaning: "kernel transformasi $T$" },
      { symbol: "$\\operatorname{im}T$", meaning: "image atau range transformasi $T$" }
    ],
    definitions: [
      { title: "Ruang Invarian", body: "Subruang $U\\subseteq V$ disebut invariant terhadap $T$ apabila $T(U)\\subseteq U$." },
      { title: "Nilai Eigen", body: "Skalar $\\lambda$ disebut nilai eigen $T$ apabila terdapat $v\\neq0$ dengan $Tv=\\lambda v$." },
      { title: "Polinomial Minimal", body: "Polinomial monik berderajat terendah $m_T$ yang memenuhi $m_T(T)=0$ disebut polinomial minimal $T$." }
    ],
    theorems: [
      {
        title: "Rank–Nullity",
        statement: "Jika $V$ berdimensi hingga dan $T:V\\to W$ linear, maka $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$.",
        proof: [
          "Ambil basis $u_1,\\ldots,u_k$ untuk $\\ker T$ dan perluas menjadi basis $u_1,\\ldots,u_k,v_1,\\ldots,v_r$ bagi $V$.",
          "Tunjukkan $Tv_1,\\ldots,Tv_r$ merentang $\\operatorname{im}T$: citra setiap kombinasi basis hanya menyisakan kombinasi $Tv_i$ karena $Tu_j=0$.",
          "Tunjukkan citra tersebut bebas linear: jika $\\sum a_iTv_i=0$, maka $\\sum a_iv_i\\in\\ker T$, tetapi juga berada pada span $v_i$. Keunikan koordinat relatif terhadap basis yang diperluas memberi semua $a_i=0$.",
          "Jadi $\\dim\\operatorname{im}T=r$, sedangkan $\\dim V=k+r$."
        ],
        why: "Teorema ini hampir selalu menjadi alat pertama ketika ukuran kernel atau image diketahui."
      },
      {
        title: "Eigenvektor untuk Nilai Eigen Berbeda Bebas Linear",
        statement: "Eigenvektor yang berkaitan dengan nilai eigen berbeda saling bebas linear.",
        proof: [
          "Gunakan induksi pada banyak eigenvektor. Kasus satu jelas.",
          "Diandaikan $v_1,\\ldots,v_n$ memenuhi $\\sum a_iv_i=0$ dengan nilai eigen berbeda $\\lambda_i$.",
          "Terapkan $T-\\lambda_nI$ untuk menghilangkan suku terakhir. Diperoleh $\\sum_{i=1}^{n-1}a_i(\\lambda_i-\\lambda_n)v_i=0$.",
          "Hipotesis induksi dan $\\lambda_i\\neq\\lambda_n$ memberi $a_1=\\cdots=a_{n-1}=0$, lalu $a_n=0$."
        ],
        why: "Hasil ini memberi batas jumlah nilai eigen berbeda dan sering langsung menghasilkan diagonalisabilitas."
      },
      {
        title: "Cayley–Hamilton",
        statement: "Setiap matriks persegi $A$ memenuhi polinomial karakteristiknya sendiri: $\\chi_A(A)=0$.",
        proof: [
          "Untuk materi kompetisi, bukti lengkap dapat menggunakan matriks adjugate: $(tI-A)\\operatorname{adj}(tI-A)=\\chi_A(t)I$ sebagai identitas matriks polinomial.",
          "Tuliskan $\\operatorname{adj}(tI-A)=B_0+B_1t+\\cdots+B_{n-1}t^{n-1}$ dan bandingkan koefisien.",
          "Menggabungkan relasi koefisien yang diperoleh setelah substitusi $t=A$ memberi $\\chi_A(A)=0$."
        ],
        why: "Cayley–Hamilton mengubah pangkat tinggi operator menjadi kombinasi pangkat lebih rendah dan merupakan jembatan menuju polinomial minimal."
      }
    ],
    examples: [
      {
        title: "Nilpoten",
        problem: "Jika $T^3=0$, nilai eigen apa yang mungkin dimiliki $T$?",
        solution: ["Jika $Tv=\\lambda v$, maka $T^3v=\\lambda^3v$.", "Karena $T^3=0$ dan $v\\neq0$, diperoleh $\\lambda^3=0$, jadi $\\lambda=0$."]
      },
      {
        title: "Injektif dan Surjektif",
        problem: "Jika $T:V\\to V$ linear pada ruang berdimensi hingga, buktikan $T$ injektif jika dan hanya jika surjektif.",
        solution: ["$T$ injektif ekuivalen dengan $\\dim\\ker T=0$.", "Rank-nullity memberi $\\dim\\operatorname{im}T=\\dim V$, ekuivalen dengan surjektif."]
      },
      {
        title: "Operator Idempoten",
        problem: "Jika $T^2=T$, buktikan $V=\\ker T\\oplus\\operatorname{im}T$.",
        solution: ["Untuk $v\\in V$, tulis $v=(v-Tv)+Tv$.", "$T(v-Tv)=Tv-T^2v=0$, jadi bagian pertama di kernel dan bagian kedua di image.", "Jika $x$ berada di keduanya, $x=Ty$ dan $Tx=0$, tetapi $Tx=T^2y=Ty=x$, jadi $x=0$."]
      }
    ],
    mistakes: [
      "Memaksakan determinan pada masalah yang lebih cepat diselesaikan dengan dimensi atau kernel.",
      "Menganggap semua operator mempunyai basis eigen tanpa memeriksa diagonalisabilitas.",
      "Menggunakan rank-nullity tanpa menyebut domain yang berdimensi hingga."
    ],
    related: ["Basis dan Dimensi", "Struktur Aljabar", "Analisis Kompleks", "Kombinatorika Linear"],
    references: [
      "Sheldon Axler, Linear Algebra Done Right, 4th ed., Springer, 2024.",
      "Gilbert Strang, Introduction to Linear Algebra, 6th ed., 2023.",
      "Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence, Linear Algebra, 5th ed., Pearson, 2022."
    ]
  },
  {
    slug: "analisis-real-onmipa",
    title: "Analisis Real ON-MIPA",
    level: "Olimpiade Mahasiswa / ON-MIPA",
    subject: "Analisis Real",
    track: "ON-MIPA",
    summary: "Kelengkapan, barisan, deret, kontinuitas, uniform continuity, diferensiasi, integrasi Riemann/Darboux, dan konvergensi seragam.",
    readingTime: "140–180 menit",
    difficulty: "Sulit–Advanced",
    visualization: "real-analysis",
    prerequisites: ["Kalkulus", "Logika dan teknik pembuktian", "Supremum–infimum"],
    objectives: [
      "Menggunakan sifat kelengkapan bilangan real dalam pembuktian.",
      "Menyusun pembuktian epsilon–N dan epsilon–delta.",
      "Membedakan konvergensi titik demi titik dan konvergensi seragam.",
      "Menggabungkan compactness, continuity, dan uniform continuity.",
      "Menyelesaikan soal analisis bergaya ON-MIPA."
    ],
    conceptMap: ["Completeness", "Sequences", "Limits", "Continuity", "Compactness", "Riemann integration", "Uniform convergence"],
    motivation: [
      "Analisis real menjawab pertanyaan mengapa prosedur kalkulus sah. Kompetisi mahasiswa menguji kemampuan menggunakan definisi secara presisi.",
      "Banyak soal yang tampak komputasional sebenarnya selesai setelah menemukan teorema struktural yang tepat."
    ],
    intuition: [
      "Konvergensi $a_n\\to L$ berarti ekor barisan akhirnya masuk ke setiap persekitaran $L$, sekecil apa pun.",
      "Konvergensi seragam menuntut satu indeks $N$ bekerja untuk semua titik domain sekaligus."
    ],
    notation: [
      { symbol: "$a_n\\to L$", meaning: "barisan $a_n$ konvergen ke $L$" },
      { symbol: "$\\sup A,\\inf A$", meaning: "supremum dan infimum himpunan" },
      { symbol: "$f_n\\rightrightarrows f$", meaning: "konvergensi seragam" }
    ],
    definitions: [
      { title: "Konvergensi Barisan", body: "$a_n\\to L$ apabila untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $n\\ge N$ mengakibatkan $|a_n-L|<\\varepsilon$." },
      { title: "Kontinuitas Seragam", body: "Fungsi $f:A\\to\\mathbb R$ kontinu seragam apabila untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ yang bekerja untuk semua $x,y\\in A$." },
      { title: "Konvergensi Seragam", body: "$f_n\\to f$ seragam pada $A$ apabila untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $n\\ge N$ mengakibatkan $|f_n(x)-f(x)|<\\varepsilon$ untuk semua $x\\in A$." }
    ],
    theorems: [
      {
        title: "Barisan Konvergen Bersifat Terbatas",
        statement: "Setiap barisan real yang konvergen adalah terbatas.",
        proof: [
          "Misalkan $a_n\\to L$. Ambil $\\varepsilon=1$. Terdapat $N$ sehingga $n\\ge N$ memberi $|a_n-L|<1$.",
          "Untuk $n\\ge N$, $|a_n|\\le|L|+1$.",
          "Untuk banyak suku awal $a_1,\\ldots,a_{N-1}$, ambil maksimum nilai mutlaknya. Maksimum dari bilangan itu dan $|L|+1$ menjadi batas seluruh barisan."
        ],
        why: "Teorema ini sering digunakan sebagai langkah awal untuk mengontrol hasil kali, quotient, atau subsequence."
      },
      {
        title: "Heine–Cantor",
        statement: "Jika $f$ kontinu pada interval kompak $[a,b]$, maka $f$ kontinu seragam.",
        proof: [
          "Andaikan $f$ tidak kontinu seragam. Terdapat $\\varepsilon_0>0$ dan pasangan $x_n,y_n\\in[a,b]$ dengan $|x_n-y_n|<1/n$ tetapi $|f(x_n)-f(y_n)|\\ge\\varepsilon_0$.",
          "Kekompakan memberi subsequence $x_{n_k}\\to x\\in[a,b]$.",
          "Karena $|x_{n_k}-y_{n_k}|\\to0$, diperoleh $y_{n_k}\\to x$ juga.",
          "Kontinuitas $f$ memberi $f(x_{n_k})\\to f(x)$ dan $f(y_{n_k})\\to f(x)$, jadi selisihnya menuju nol. Ini bertentangan dengan batas bawah $\\varepsilon_0$."
        ],
        why: "Heine–Cantor mengubah kontinuitas lokal menjadi kontrol global pada himpunan kompak."
      },
      {
        title: "Limit Seragam Fungsi Kontinu adalah Kontinu",
        statement: "Jika setiap $f_n$ kontinu pada $A$ dan $f_n\\to f$ seragam, maka $f$ kontinu pada $A$.",
        proof: [
          "Diambil $x_0\\in A$ dan $\\varepsilon>0$.",
          "Pilih $N$ sehingga $|f_N(x)-f(x)|<\\varepsilon/3$ untuk semua $x\\in A$.",
          "Kontinuitas $f_N$ di $x_0$ memberi $\\delta>0$ sehingga $|x-x_0|<\\delta$ mengakibatkan $|f_N(x)-f_N(x_0)|<\\varepsilon/3$.",
          "Gunakan ketaksamaan segitiga untuk $|f(x)-f(x_0)|$ dan sisipkan $f_N(x),f_N(x_0)$. Tiga suku masing-masing kurang dari $\\varepsilon/3$.",
          "Dengan demikian $f$ kontinu di $x_0$, dan karena $x_0$ sebarang, $f$ kontinu pada $A$."
        ],
        why: "Teorema ini menjelaskan mengapa uniform convergence jauh lebih kuat daripada pointwise convergence."
      }
    ],
    examples: [
      {
        title: "Bukti $1/n\\to0$",
        problem: "Buktikan langsung dari definisi bahwa $1/n\\to0$.",
        solution: ["Diambil $\\varepsilon>0$ dan pilih $N>1/\\varepsilon$.", "Jika $n\\ge N$, maka $0<1/n\\le1/N<\\varepsilon$.", "Jadi $|1/n-0|<\\varepsilon$."]
      },
      {
        title: "Tidak Kontinu Seragam",
        problem: "Buktikan $f(x)=x^2$ tidak kontinu seragam pada $\\mathbb R$.",
        solution: ["Ambil $x_n=n$ dan $y_n=n+1/n$.", "$|x_n-y_n|=1/n\\to0$, tetapi $|y_n^2-x_n^2|=2+1/n^2\\to2$.", "Hal ini bertentangan dengan konsekuensi kontinuitas seragam."]
      },
      {
        title: "Pointwise tetapi Tidak Uniform",
        problem: "Analisis $f_n(x)=x^n$ pada $[0,1]$.",
        solution: ["Untuk $0\\le x<1$, $x^n\\to0$, sedangkan $f_n(1)=1$.", "Limit titik demi titik adalah $f(x)=0$ untuk $x<1$ dan $f(1)=1$.", "Limit ini diskontinu, sedangkan setiap $f_n$ kontinu. Karena limit seragam fungsi kontinu harus kontinu, konvergensinya tidak seragam."]
      }
    ],
    mistakes: [
      "Menukar urutan kuantor pada definisi pointwise dan uniform convergence.",
      "Menggunakan compactness tanpa memastikan himpunan tertutup dan terbatas di $\\mathbb R$.",
      "Menganggap keberadaan subsequence konvergen otomatis memberi konvergensi seluruh barisan."
    ],
    related: ["Integral Riemann", "Metric Spaces", "Analisis Kompleks", "Functional Analysis dasar"],
    references: ["Stephen Abbott, Understanding Analysis, 2nd ed., Springer, 2015."]
  },

  {
    slug: "analisis-kompleks",
    title: "Analisis Kompleks",
    level: "Kuliah",
    subject: "Analisis Kompleks",
    track: "Universitas",
    summary: "Bab lengkap Analisis Kompleks: bilangan kompleks, bentuk polar dan akar, topologi bidang kompleks, fungsi kompleks, limit dan kontinuitas, turunan kompleks, persamaan Cauchy–Riemann, holomorfisitas, fungsi elementer kompleks, dan fungsi harmonik.",
    readingTime: "180–240 menit",
    difficulty: "Menengah–Lanjut",
    visualization: "real-analysis",
    prerequisites: ["Kalkulus diferensial", "Limit dan kontinuitas", "Trigonometri", "Eksponensial dan logaritma", "Aljabar dasar"],
    objectives: ["Menggunakan representasi Cartesius dan polar bilangan kompleks.","Menganalisis topologi dasar pada bidang kompleks.","Menguji limit dan kontinuitas fungsi kompleks.","Menentukan keberadaan turunan kompleks dan menggunakan persamaan Cauchy–Riemann.","Mengenali fungsi holomorfik, entire, fungsi elementer kompleks, dan fungsi harmonik."],
    conceptMap: ["Bilangan kompleks","Polar dan akar","Topologi","Fungsi kompleks","Limit","Turunan","Cauchy–Riemann","Holomorfik","Harmonik"],
    motivation: ["Analisis kompleks memperluas kalkulus ke bidang dua dimensi, tetapi syarat diferensiabilitasnya jauh lebih ketat karena limit harus konsisten terhadap semua arah pendekatan.","Kekuatan teori muncul ketika struktur aljabar, geometri, topologi, dan kalkulus bertemu dalam satu kerangka."],
    intuition: ["Bilangan kompleks dapat dibaca sekaligus sebagai pasangan koordinat, vektor, panjang, dan sudut.","Turunan kompleks ada hanya ketika perubahan fungsi tampak seperti rotasi dan dilatasi yang sama dari semua arah lokal."],
    notation: [
      { symbol: "$z=x+iy$", meaning: "bentuk Cartesius bilangan kompleks" },
      { symbol: "$\\bar z=x-iy$", meaning: "konjugat kompleks" },
      { symbol: "$|z|=\\sqrt{x^2+y^2}$", meaning: "modulus bilangan kompleks" },
      { symbol: "$z=re^{i\\theta}$", meaning: "bentuk polar atau eksponensial" },
      { symbol: "$f(z)=u(x,y)+iv(x,y)$", meaning: "dekomposisi bagian real dan imajiner" }
    ],
    definitions: [
      { title: "Bilangan Kompleks", body: "Bilangan kompleks berbentuk $z=x+iy$ dengan $x,y\\in\\mathbb R$ dan $i^2=-1$." },
      { title: "Limit Fungsi Kompleks", body: "Nilai $L$ adalah limit $f(z)$ ketika $z\\to z_0$ jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $0<|z-z_0|<\\delta$ mengakibatkan $|f(z)-L|<\\varepsilon$." },
      { title: "Turunan Kompleks", body: "Turunan kompleks di $z_0$ adalah $f'(z_0)=\\lim_{h\\to0}\\frac{f(z_0+h)-f(z_0)}{h}$ jika limit tersebut ada." },
      { title: "Holomorfik", body: "Fungsi holomorfik pada himpunan terbuka apabila terdiferensial kompleks di setiap titik himpunan tersebut." }
    ],
    theorems: [
      { title: "Ketaksamaan Segitiga", statement: "$|z+w|\\le |z|+|w|$.", proof: ["Gunakan identitas modulus dan pembatasan bagian real pada hasil kali dengan konjugat."], why: "Alat estimasi utama untuk limit kompleks." },
      { title: "Syarat Cauchy–Riemann", statement: "Jika $f=u+iv$ terdiferensial kompleks, maka $u_x=v_y$ dan $u_y=-v_x$.", proof: ["Bandingkan kuosien beda sepanjang arah real dan imajiner."], why: "Turunan kompleks harus sama dari semua arah." },
      { title: "Teorema Cukup Cauchy–Riemann", statement: "Jika turunan parsial pertama kontinu di sekitar titik dan persamaan Cauchy–Riemann berlaku, maka $f=u+iv$ terdiferensial kompleks.", proof: ["Gunakan pendekatan linear dua variabel dan persamaan Cauchy–Riemann."], why: "Kriteria praktis untuk membuktikan holomorfisitas." }
    ],
    examples: [
      { title: "Konjugasi", problem: "Tentukan konjugat dan modulus $z=3-4i$.", solution: ["$\\bar z=3+4i$ dan $|z|=5$."] },
      { title: "Akar Kesatuan", problem: "Tentukan akar-akar $z^4=1$.", solution: ["Akar-akarnya $1,i,-1,-i$."] },
      { title: "Cauchy–Riemann", problem: "Uji $f(z)=z^2$.", solution: ["$u=x^2-y^2$, $v=2xy$, dan persamaan Cauchy–Riemann terpenuhi di seluruh bidang."] }
    ],
    mistakes: ["Menganggap limit cukup diperiksa melalui satu lintasan.","Menganggap Cauchy–Riemann di satu titik selalu cukup tanpa syarat tambahan.","Menyamakan $\\arg z$ dengan argumen utama $\\operatorname{Arg}z$.","Menggunakan aturan turunan real tanpa memeriksa diferensiabilitas kompleks."],
    related: ["Analisis Real","Topologi","Persamaan Diferensial","Transformasi Konformal","Teori Fungsi Kompleks"],
    references: ["Naskah Analisis Kompleks yang diberikan untuk DMath Learning."]
  },
];

export const deepMaterialMap = Object.fromEntries(
  deepMaterials.map((material) => [material.slug, material])
) as Record<string, DeepMaterial>;
