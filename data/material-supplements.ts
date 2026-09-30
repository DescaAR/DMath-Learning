export type BilingualText = {
  id: string;
  en: string;
};

export type MaterialDeepDive = {
  title: BilingualText;
  lead: BilingualText;
  paragraphs: BilingualText[];
  formula?: string;
  takeaways: BilingualText[];
};

export type MaterialQuiz = {
  question: BilingualText;
  options: BilingualText[];
  answer: number;
  explanation: BilingualText;
};

export type MaterialSupplement = {
  deepDive: MaterialDeepDive[];
  quiz: MaterialQuiz[];
  summary: BilingualText[];
};

export const materialSupplements: Record<string, MaterialSupplement> = {
  "pecahan": {
    deepDive: [
      {
        title: { id: "Pecahan sebagai bilangan pada garis bilangan", en: "Fractions as Numbers on the Number Line" },
        lead: { id: "Pecahan bukan sekadar potongan gambar; pecahan adalah bilangan yang memiliki posisi pasti pada garis bilangan.", en: "A fraction is not merely a shaded part of a picture; it is a number with a definite position on the number line." },
        paragraphs: [
          { id: "Untuk $b>0$, bilangan $\\frac{a}{b}$ dapat dipahami sebagai $a$ langkah dengan ukuran setiap langkah $\\frac1b$. Pandangan ini menjelaskan mengapa pecahan lebih dari satu, pecahan negatif, dan pecahan campuran tetap merupakan bilangan biasa.", en: "For $b>0$, the number $\\frac{a}{b}$ can be understood as $a$ steps, each of size $\\frac1b$. This viewpoint naturally includes improper fractions, negative fractions, and mixed numbers." },
          { id: "Pecahan senilai menempati titik yang sama. Misalnya $\\frac12$, $\\frac24$, dan $\\frac{50}{100}$ mempunyai representasi berbeda, tetapi nilainya identik.", en: "Equivalent fractions occupy the same point. For example, $\\frac12$, $\\frac24$, and $\\frac{50}{100}$ are different representations of the same number." }
        ],
        formula: "$$\\frac{a}{b}=\\frac{ka}{kb},\\qquad k\\neq0.$$",
        takeaways: [
          { id: "Penyebut menentukan ukuran satu bagian.", en: "The denominator determines the size of one part." },
          { id: "Pembilang menghitung banyak bagian tersebut.", en: "The numerator counts how many of those parts are taken." },
          { id: "Pecahan senilai adalah representasi berbeda dari bilangan yang sama.", en: "Equivalent fractions are different representations of the same number." }
        ]
      },
      {
        title: { id: "Mengapa penjumlahan memerlukan penyebut bersama?", en: "Why Does Addition Require a Common Denominator?" },
        lead: { id: "Penjumlahan hanya dapat dilakukan langsung ketika unit yang dihitung sama.", en: "Addition can be performed directly only when the units being counted are the same." },
        paragraphs: [
          { id: "Pada $\\frac23+\\frac5{12}$, bagian berukuran sepertiga tidak dapat langsung digabungkan dengan bagian berukuran seperdua belas. Kita mengubah keduanya ke unit yang sama, yaitu seperdua belas.", en: "In $\\frac23+\\frac5{12}$, thirds cannot be combined directly with twelfths. Both fractions must first be expressed in the same unit, namely twelfths." },
          { id: "Penyebut bersama terkecil membuat perhitungan lebih ringkas, tetapi penyebut bersama mana pun tetap sah selama transformasinya mempertahankan nilai pecahan.", en: "The least common denominator keeps the arithmetic compact, but any common denominator is valid as long as the transformation preserves the fraction's value." }
        ],
        formula: "$$\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd},\\qquad b,d\\neq0.$$",
        takeaways: [
          { id: "Jangan menjumlahkan penyebut.", en: "Do not add the denominators." },
          { id: "Samakan unit bagian terlebih dahulu.", en: "First express both fractions using the same-sized parts." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Manakah yang senilai dengan $\\frac34$?", en: "Which fraction is equivalent to $\\frac34$?" },
        options: [{ id: "$\\frac68$", en: "$\\frac68$" }, { id: "$\\frac79$", en: "$\\frac79$" }, { id: "$\\frac{12}{20}$", en: "$\\frac{12}{20}$" }],
        answer: 0,
        explanation: { id: "$\\frac34\\cdot\\frac22=\\frac68$.", en: "$\\frac34\\cdot\\frac22=\\frac68$." }
      },
      {
        question: { id: "Nilai $\\frac12+\\frac13$ adalah ...", en: "The value of $\\frac12+\\frac13$ is ..." },
        options: [{ id: "$\\frac25$", en: "$\\frac25$" }, { id: "$\\frac56$", en: "$\\frac56$" }, { id: "$\\frac23$", en: "$\\frac23$" }],
        answer: 1,
        explanation: { id: "Gunakan penyebut bersama $6$: $\\frac36+\\frac26=\\frac56$.", en: "Use common denominator $6$: $\\frac36+\\frac26=\\frac56$." }
      }
    ],
    summary: [
      { id: "Pecahan adalah bilangan yang dapat ditempatkan pada garis bilangan.", en: "A fraction is a number that can be located on the number line." },
      { id: "Pecahan senilai mewakili titik yang sama.", en: "Equivalent fractions represent the same point." },
      { id: "Operasi pecahan harus mempertahankan unit yang konsisten.", en: "Fraction operations require consistent units." },
      { id: "Perbandingan silang sah ketika penyebut positif.", en: "Cross multiplication for comparison is valid when denominators are positive." }
    ]
  },

  "persamaan-linear": {
    deepDive: [
      {
        title: { id: "Transformasi ekuivalen dan himpunan solusi", en: "Equivalent Transformations and Solution Sets" },
        lead: { id: "Setiap langkah penyelesaian yang benar harus mempertahankan himpunan solusi.", en: "Every valid algebraic step must preserve the solution set." },
        paragraphs: [
          { id: "Menambah ekspresi yang sama pada kedua ruas selalu mempertahankan kesetaraan. Mengalikan kedua ruas dengan bilangan tak nol juga mempertahankan kesetaraan, sedangkan mengalikan dengan nol dapat menghilangkan informasi.", en: "Adding the same expression to both sides always preserves equality. Multiplying both sides by a nonzero number also preserves equality, while multiplication by zero can destroy information." },
          { id: "Istilah 'pindah ruas' hanyalah singkatan informal. Secara matematis, yang dilakukan adalah menambah invers aditif atau mengalikan dengan invers perkalian pada kedua ruas.", en: "The phrase 'move a term to the other side' is only informal shorthand. Formally, we add an additive inverse or multiply by a multiplicative inverse on both sides." }
        ],
        formula: "$$ax+b=c,\\ a\\neq0\\quad\\Longrightarrow\\quad x=\\frac{c-b}{a}.$$",
        takeaways: [
          { id: "Fokus pada kesetaraan, bukan aturan pindah ruas.", en: "Focus on equality rather than memorized transposition rules." },
          { id: "Selalu periksa operasi yang dapat mengubah himpunan solusi.", en: "Always check whether an operation may change the solution set." }
        ]
      },
      {
        title: { id: "Sistem persamaan sebagai geometri", en: "Linear Systems as Geometry" },
        lead: { id: "Dua persamaan linear dua variabel menggambarkan dua garis.", en: "Two linear equations in two variables represent two lines." },
        paragraphs: [
          { id: "Sistem dapat mempunyai tepat satu solusi ketika garis berpotongan, tidak mempunyai solusi ketika garis sejajar berbeda, atau mempunyai tak hingga banyak solusi ketika kedua persamaan merepresentasikan garis yang sama.", en: "A system may have exactly one solution when the lines intersect, no solution when they are distinct and parallel, or infinitely many solutions when both equations represent the same line." },
          { id: "Eliminasi aljabar dan perpotongan geometris adalah dua cara melihat objek yang sama.", en: "Algebraic elimination and geometric intersection are two views of the same object." }
        ],
        formula: "$$\\begin{cases}a_1x+b_1y=c_1,\\\\a_2x+b_2y=c_2.\\end{cases}$$",
        takeaways: [
          { id: "Solusi sistem harus memenuhi semua persamaan sekaligus.", en: "A solution must satisfy all equations simultaneously." },
          { id: "Graf membantu menafsirkan banyaknya solusi.", en: "Graphs help interpret the number of solutions." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Operasi mana yang selalu mempertahankan solusi persamaan $A=B$?", en: "Which operation always preserves the solutions of $A=B$?" },
        options: [{ id: "Kalikan kedua ruas dengan $0$.", en: "Multiply both sides by $0$." }, { id: "Tambahkan $C$ pada kedua ruas.", en: "Add $C$ to both sides." }, { id: "Bagi kedua ruas dengan ekspresi yang mungkin nol.", en: "Divide both sides by an expression that may be zero." }],
        answer: 1,
        explanation: { id: "Penambahan nilai yang sama pada kedua ruas selalu menghasilkan persamaan ekuivalen.", en: "Adding the same value to both sides always produces an equivalent equation." }
      },
      {
        question: { id: "Jika dua garis berbeda sejajar, sistemnya mempunyai ...", en: "If two distinct lines are parallel, the system has ..." },
        options: [{ id: "satu solusi", en: "one solution" }, { id: "tak hingga solusi", en: "infinitely many solutions" }, { id: "tidak ada solusi", en: "no solution" }],
        answer: 2,
        explanation: { id: "Garis sejajar berbeda tidak memiliki titik perpotongan.", en: "Distinct parallel lines have no intersection point." }
      }
    ],
    summary: [
      { id: "Persamaan menyatakan kesetaraan dua ekspresi.", en: "An equation states that two expressions are equal." },
      { id: "Langkah penyelesaian harus mempertahankan himpunan solusi.", en: "Solution steps must preserve the solution set." },
      { id: "Sistem linear dapat dibaca secara aljabar maupun geometris.", en: "Linear systems can be read algebraically and geometrically." },
      { id: "Pemodelan dimulai dari pemilihan variabel dan relasi yang tepat.", en: "Modeling begins by choosing suitable variables and relationships." }
    ]
  },

  "fungsi": {
    deepDive: [
      {
        title: { id: "Domain, kodomain, dan range", en: "Domain, Codomain, and Range" },
        lead: { id: "Ketiga istilah ini berbeda dan memengaruhi sifat fungsi.", en: "These three notions are distinct and affect the properties of a function." },
        paragraphs: [
          { id: "Domain adalah himpunan masukan yang diizinkan, kodomain adalah himpunan sasaran yang ditetapkan, sedangkan range adalah keluaran yang benar-benar dicapai.", en: "The domain is the set of allowed inputs, the codomain is the declared target set, and the range is the set of outputs actually attained." },
          { id: "Sifat surjektif bergantung pada kodomain. Rumus yang sama dapat surjektif untuk satu kodomain tetapi tidak untuk kodomain lain.", en: "Surjectivity depends on the codomain. The same formula may be surjective for one codomain and not for another." }
        ],
        formula: "$$f:A\\to B,\\qquad \\operatorname{Im}(f)=\\{f(x):x\\in A\\}\\subseteq B.$$",
        takeaways: [
          { id: "Jangan menyamakan range dengan kodomain.", en: "Do not confuse the range with the codomain." },
          { id: "Domain merupakan bagian dari definisi fungsi.", en: "The domain is part of the definition of a function." }
        ]
      },
      {
        title: { id: "Komposisi, bijeksi, dan invers", en: "Composition, Bijections, and Inverses" },
        lead: { id: "Invers dapat dipahami sebagai fungsi yang membatalkan aksi fungsi semula.", en: "An inverse function undoes the action of the original function." },
        paragraphs: [
          { id: "Agar invers dari $B$ ke $A$ terdefinisi sebagai fungsi, setiap elemen $B$ harus mempunyai tepat satu prapeta. Kondisi ini sama dengan bijektivitas.", en: "For an inverse from $B$ to $A$ to be a function, every element of $B$ must have exactly one preimage. This is precisely bijectivity." },
          { id: "Identitas $f^{-1}\\circ f=I_A$ dan $f\\circ f^{-1}=I_B$ memberi cara kuat untuk memverifikasi rumus invers.", en: "The identities $f^{-1}\\circ f=I_A$ and $f\\circ f^{-1}=I_B$ provide a strong way to verify an inverse formula." }
        ],
        formula: "$$f^{-1}(f(x))=x,\\qquad f(f^{-1}(y))=y.$$",
        takeaways: [
          { id: "Injektif memberi keunikan prapeta.", en: "Injectivity gives uniqueness of preimages." },
          { id: "Surjektif menjamin keberadaan prapeta.", en: "Surjectivity guarantees existence of preimages." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Untuk $f(x)=x^2$ dengan domain $\\mathbb R$ dan kodomain $\\mathbb R$, apakah $f$ bijektif?", en: "For $f(x)=x^2$ with domain $\\mathbb R$ and codomain $\\mathbb R$, is $f$ bijective?" },
        options: [{ id: "Ya", en: "Yes" }, { id: "Tidak", en: "No" }],
        answer: 1,
        explanation: { id: "Fungsi tidak injektif karena $f(1)=f(-1)$ dan tidak surjektif ke $\\mathbb R$ karena tidak menghasilkan bilangan negatif.", en: "It is not injective because $f(1)=f(-1)$ and not surjective onto $\\mathbb R$ because it never produces negative values." }
      },
      {
        question: { id: "Jika $f$ dan $g$ injektif, bagaimana dengan $g\\circ f$?", en: "If $f$ and $g$ are injective, what can be said about $g\\circ f$?" },
        options: [{ id: "Selalu injektif", en: "Always injective" }, { id: "Selalu surjektif", en: "Always surjective" }, { id: "Tidak dapat ditentukan", en: "Cannot be determined" }],
        answer: 0,
        explanation: { id: "Kesamaan keluaran komposisi dapat ditarik mundur melalui injektivitas $g$, lalu $f$.", en: "Equality of composite outputs can be pulled back first through injectivity of $g$, then through injectivity of $f$." }
      }
    ],
    summary: [
      { id: "Fungsi memasangkan setiap masukan dengan tepat satu keluaran.", en: "A function assigns exactly one output to each input." },
      { id: "Domain, kodomain, dan range mempunyai peran berbeda.", en: "Domain, codomain, and range play different roles." },
      { id: "Bijektivitas ekuivalen dengan keberadaan invers dua arah.", en: "Bijectivity is equivalent to the existence of a two-sided inverse." },
      { id: "Komposisi membangun fungsi kompleks dari fungsi sederhana.", en: "Composition builds complex functions from simpler ones." }
    ]
  },

  "trigonometri": {
    deepDive: [
      {
        title: { id: "Lingkaran satuan dan ukuran radian", en: "The Unit Circle and Radian Measure" },
        lead: { id: "Definisi modern sinus dan cosinus paling alami berasal dari lingkaran satuan.", en: "The modern definitions of sine and cosine arise naturally from the unit circle." },
        paragraphs: [
          { id: "Untuk sudut $\\theta$, titik pada lingkaran satuan mempunyai koordinat $(\\cos\\theta,\\sin\\theta)$. Definisi ini berlaku untuk sudut positif, negatif, dan sudut yang lebih dari satu putaran.", en: "For an angle $\\theta$, the corresponding point on the unit circle has coordinates $(\\cos\\theta,\\sin\\theta)$. This definition works for positive, negative, and multi-turn angles." },
          { id: "Ukuran radian dipilih karena panjang busur pada lingkaran berjari-jari $r$ memenuhi $s=r\\theta$. Hubungan ini membuat rumus kalkulus trigonometri menjadi alami.", en: "Radian measure is used because arc length on a circle of radius $r$ satisfies $s=r\\theta$. This relationship makes trigonometric calculus formulas natural." }
        ],
        formula: "$$\\sin^2\\theta+\\cos^2\\theta=1.$$",
        takeaways: [
          { id: "Sinus adalah koordinat vertikal, cosinus koordinat horizontal.", en: "Sine is the vertical coordinate; cosine is the horizontal coordinate." },
          { id: "Radian menghubungkan sudut langsung dengan panjang busur.", en: "Radians connect angle directly to arc length." }
        ]
      },
      {
        title: { id: "Identitas sebagai alat transformasi", en: "Identities as Transformation Tools" },
        lead: { id: "Identitas digunakan untuk mengganti satu bentuk dengan bentuk ekuivalen yang lebih sesuai.", en: "Identities allow one expression to be replaced by an equivalent form better suited to the problem." },
        paragraphs: [
          { id: "Identitas Pythagoras, rumus jumlah-selisih, dan rumus sudut ganda saling terkait. Daripada menghafal semuanya secara terpisah, lebih baik mengetahui beberapa identitas dasar dan cara menurunkannya.", en: "The Pythagorean identity, angle-sum formulas, and double-angle formulas are interconnected. Rather than memorizing them independently, it is better to know a small set of core identities and how to derive the rest." },
          { id: "Ketika menyelesaikan persamaan trigonometri, setiap pembagian dengan $\\sin x$ atau $\\cos x$ harus disertai pemeriksaan kasus ketika pembagi nol.", en: "When solving trigonometric equations, any division by $\\sin x$ or $\\cos x$ must be accompanied by a check of the zero-divisor cases." }
        ],
        formula: "$$\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta.$$",
        takeaways: [
          { id: "Identitas bukan persamaan yang hanya benar untuk nilai tertentu.", en: "An identity is not an equation that is true only for selected values." },
          { id: "Selalu jaga domain ketika melakukan manipulasi.", en: "Always preserve domain restrictions during manipulation." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Jika $\\cos\\theta=0$, apakah $\\tan\\theta$ terdefinisi?", en: "If $\\cos\\theta=0$, is $\\tan\\theta$ defined?" },
        options: [{ id: "Ya", en: "Yes" }, { id: "Tidak", en: "No" }],
        answer: 1,
        explanation: { id: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ tidak terdefinisi ketika penyebut nol.", en: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ is undefined when the denominator is zero." }
      },
      {
        question: { id: "Nilai $\\sin^2\\theta+\\cos^2\\theta$ adalah ...", en: "The value of $\\sin^2\\theta+\\cos^2\\theta$ is ..." },
        options: [{ id: "$0$", en: "$0$" }, { id: "$1$", en: "$1$" }, { id: "$2$", en: "$2$" }],
        answer: 1,
        explanation: { id: "Titik $(\\cos\\theta,\\sin\\theta)$ berada pada lingkaran satuan.", en: "The point $(\\cos\\theta,\\sin\\theta)$ lies on the unit circle." }
      }
    ],
    summary: [
      { id: "Lingkaran satuan menyatukan definisi trigonometri untuk semua sudut real.", en: "The unit circle unifies trigonometric definitions for all real angles." },
      { id: "Identitas Pythagoras berasal langsung dari persamaan lingkaran satuan.", en: "The Pythagorean identity follows directly from the unit-circle equation." },
      { id: "Rumus jumlah-selisih dapat diturunkan melalui hasil kali titik atau rotasi.", en: "Angle-sum and difference formulas can be derived using dot products or rotations." },
      { id: "Persamaan trigonometri membutuhkan perhatian pada periodisitas dan domain.", en: "Trigonometric equations require attention to periodicity and domain restrictions." }
    ]
  },

  "integral-riemann": {
    deepDive: [
      {
        title: { id: "Dari partisi menuju integral", en: "From Partitions to the Integral" },
        lead: { id: "Integral Riemann dibangun dari aproksimasi hingga yang dikontrol oleh partisi.", en: "The Riemann integral is built from finite approximations controlled by partitions." },
        paragraphs: [
          { id: "Partisi $P=\\{x_0,\\ldots,x_n\\}$ membagi $[a,b]$ menjadi subinterval. Pada setiap subinterval, kita memilih titik sampel $\\xi_i$ dan membentuk jumlah $\\sum f(\\xi_i)\\Delta x_i$.", en: "A partition $P=\\{x_0,\\ldots,x_n\\}$ divides $[a,b]$ into subintervals. On each subinterval, choose a sample point $\\xi_i$ and form the sum $\\sum f(\\xi_i)\\Delta x_i$." },
          { id: "Integrabilitas menuntut semua pilihan titik sampel menghasilkan limit yang sama ketika mesh partisi menuju nol. Ini jauh lebih kuat daripada sekadar satu barisan persegi panjang yang kebetulan konvergen.", en: "Integrability requires all admissible sample choices to approach the same limit as the mesh tends to zero. This is much stronger than a single convenient sequence of rectangles converging." }
        ],
        formula: "$$S(f,P,\\xi)=\\sum_{i=1}^n f(\\xi_i)(x_i-x_{i-1}).$$",
        takeaways: [
          { id: "Mesh mengukur subinterval terbesar.", en: "The mesh measures the largest subinterval." },
          { id: "Limit integral harus independen dari titik sampel.", en: "The integral limit must be independent of sample-point choices." }
        ]
      },
      {
        title: { id: "Kriteria Darboux dan kontrol osilasi", en: "The Darboux Criterion and Oscillation Control" },
        lead: { id: "Jumlah atas dan bawah mengubah pertanyaan limit menjadi pertanyaan tentang celah.", en: "Upper and lower sums turn a limit question into a gap-control question." },
        paragraphs: [
          { id: "Jika $M_i$ dan $m_i$ adalah supremum dan infimum fungsi pada subinterval ke-$i$, maka selisih $U(f,P)-L(f,P)$ mengukur total ketidakpastian vertikal pada partisi tersebut.", en: "If $M_i$ and $m_i$ are the supremum and infimum on the $i$th subinterval, then $U(f,P)-L(f,P)$ measures the total vertical uncertainty associated with the partition." },
          { id: "Fungsi terbatas terintegralkan Riemann tepat ketika untuk setiap $\\varepsilon>0$ terdapat partisi yang membuat celah ini lebih kecil dari $\\varepsilon$.", en: "A bounded function is Riemann integrable exactly when for every $\\varepsilon>0$ there exists a partition for which this gap is smaller than $\\varepsilon$." }
        ],
        formula: "$$U(f,P)-L(f,P)=\\sum_{i=1}^n(M_i-m_i)\\Delta x_i.$$",
        takeaways: [
          { id: "Kontinuitas seragam mengontrol $M_i-m_i$ pada subinterval pendek.", en: "Uniform continuity controls $M_i-m_i$ on short subintervals." },
          { id: "Kriteria Darboux sering lebih nyaman untuk pembuktian integrabilitas.", en: "The Darboux criterion is often more convenient for proving integrability." }
        ]
      },
      {
        title: { id: "Mengapa fungsi kontinu terintegralkan?", en: "Why Are Continuous Functions Integrable?" },
        lead: { id: "Pada interval kompak, kontinuitas berubah menjadi kontinuitas seragam.", en: "On a compact interval, continuity strengthens to uniform continuity." },
        paragraphs: [
          { id: "Diberikan $\\varepsilon>0$, kontinuitas seragam memberi $\\delta>0$ sehingga osilasi fungsi pada dua titik berjarak kurang dari $\\delta$ dapat dibuat kecil secara seragam.", en: "Given $\\varepsilon>0$, uniform continuity provides $\\delta>0$ so that the oscillation between any two points less than $\\delta$ apart is uniformly small." },
          { id: "Pilih partisi dengan mesh kurang dari $\\delta$. Setiap selisih $M_i-m_i$ kecil, dan jumlah seluruh kontribusinya dibatasi oleh panjang interval dikali batas osilasi.", en: "Choose a partition with mesh smaller than $\\delta$. Each $M_i-m_i$ is small, and the total contribution is bounded by the interval length times the oscillation bound." }
        ],
        formula: "$$U(f,P)-L(f,P)<\\varepsilon.$$",
        takeaways: [
          { id: "Kekompakan adalah sumber kontrol global.", en: "Compactness is the source of global control." },
          { id: "Bukti menghubungkan kontinuitas seragam dengan kriteria Darboux.", en: "The proof connects uniform continuity with the Darboux criterion." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Apa yang diukur oleh $\\|P\\|$?", en: "What does $\\|P\\|$ measure?" },
        options: [{ id: "Banyak subinterval", en: "The number of subintervals" }, { id: "Panjang subinterval terbesar", en: "The length of the largest subinterval" }, { id: "Nilai maksimum fungsi", en: "The maximum value of the function" }],
        answer: 1,
        explanation: { id: "Mesh partisi didefinisikan sebagai $\\max_i(x_i-x_{i-1})$.", en: "The mesh is defined as $\\max_i(x_i-x_{i-1})$." }
      },
      {
        question: { id: "Kriteria Darboux menyatakan fungsi terbatas terintegralkan jika ...", en: "The Darboux criterion says a bounded function is integrable if ..." },
        options: [{ id: "$U(f,P)-L(f,P)$ dapat dibuat sekecil mungkin", en: "$U(f,P)-L(f,P)$ can be made arbitrarily small" }, { id: "$U(f,P)=0$", en: "$U(f,P)=0$" }, { id: "fungsi harus monoton", en: "the function must be monotone" }],
        answer: 0,
        explanation: { id: "Celah jumlah atas dan bawah harus dapat dibuat kurang dari setiap $\\varepsilon>0$.", en: "The gap between upper and lower sums must be made smaller than every $\\varepsilon>0$." }
      }
    ],
    summary: [
      { id: "Partisi dan titik sampel membentuk jumlah Riemann.", en: "Partitions and sample points produce Riemann sums." },
      { id: "Jumlah Darboux mengapit nilai integral dari bawah dan atas.", en: "Darboux sums bracket the integral from below and above." },
      { id: "Integrabilitas ekuivalen dengan kemampuan memperkecil celah Darboux.", en: "Integrability is equivalent to making the Darboux gap arbitrarily small." },
      { id: "Kontinuitas pada interval tertutup menjamin integrabilitas Riemann.", en: "Continuity on a closed interval guarantees Riemann integrability." }
    ]
  },

  "prinsip-pigeonhole": {
    deepDive: [
      {
        title: { id: "Versi dasar dan versi umum", en: "Basic and Generalized Forms" },
        lead: { id: "Pigeonhole adalah teorema eksistensi: ia menjamin sesuatu harus terjadi tanpa harus menemukan objeknya secara eksplisit.", en: "The pigeonhole principle is an existence theorem: it guarantees that something must happen without explicitly locating the object." },
        paragraphs: [
          { id: "Jika $N$ objek dimasukkan ke $k$ kotak, sedikitnya satu kotak memuat paling sedikit $\\lceil N/k\\rceil$ objek.", en: "If $N$ objects are placed into $k$ boxes, at least one box contains at least $\\lceil N/k\\rceil$ objects." },
          { id: "Kesulitan utama dalam soal bukan menghitung plafon, melainkan menentukan apa yang harus dianggap objek dan apa yang harus dianggap kotak.", en: "The main difficulty is usually not computing the ceiling, but choosing what should count as the objects and what should count as the boxes." }
        ],
        formula: "$$\\max_i n_i\\ge \\left\\lceil\\frac{N}{k}\\right\\rceil.$$",
        takeaways: [
          { id: "Cari klasifikasi yang memaksa tabrakan.", en: "Look for a classification that forces a collision." },
          { id: "Sering kali kotak adalah kelas sisa, interval, pola, atau kategori.", en: "Boxes are often residue classes, intervals, patterns, or categories." }
        ]
      },
      {
        title: { id: "Strategi pemilihan kotak", en: "How to Choose the Boxes" },
        lead: { id: "Pemodelan yang tepat membuat kesimpulan pigeonhole muncul otomatis.", en: "A good model makes the pigeonhole conclusion almost automatic." },
        paragraphs: [
          { id: "Pada masalah keterbagian, kelas residu modulo $m$ sering menjadi kotak. Pada masalah jarak, interval dapat menjadi kotak. Pada masalah subset, nilai statistik tertentu dapat menjadi label kotak.", en: "In divisibility problems, residue classes modulo $m$ often serve as boxes. In distance problems, intervals may serve as boxes. In subset problems, a suitable statistic can label the boxes." },
          { id: "Setelah kotak dipilih, pastikan jumlah kotak benar-benar lebih sedikit daripada banyak objek dan kesimpulan tabrakan sesuai dengan target soal.", en: "After choosing the boxes, verify that there are genuinely fewer boxes than objects and that a collision produces exactly the desired conclusion." }
        ],
        takeaways: [
          { id: "Model lebih penting daripada aritmetika.", en: "The model matters more than the arithmetic." },
          { id: "Bekerja mundur dari kesimpulan dapat membantu memilih kotak.", en: "Working backward from the desired conclusion can help identify the boxes." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "$17$ objek dimasukkan ke $5$ kotak. Minimal berapa objek yang pasti ada dalam satu kotak?", en: "$17$ objects are placed into $5$ boxes. How many objects must one box contain at minimum?" },
        options: [{ id: "$3$", en: "$3$" }, { id: "$4$", en: "$4$" }, { id: "$5$", en: "$5$" }],
        answer: 1,
        explanation: { id: "$\\lceil17/5\\rceil=4$.", en: "$\\lceil17/5\\rceil=4$." }
      },
      {
        question: { id: "Untuk membuktikan dua bilangan mempunyai sisa sama modulo $7$, kotak yang alami adalah ...", en: "To prove that two numbers have the same remainder modulo $7$, the natural boxes are ..." },
        options: [{ id: "tujuh kelas residu", en: "the seven residue classes" }, { id: "semua bilangan bulat", en: "all integers" }, { id: "dua interval", en: "two intervals" }],
        answer: 0,
        explanation: { id: "Sisa modulo $7$ hanya mungkin $0,1,\\ldots,6$.", en: "The possible remainders modulo $7$ are only $0,1,\\ldots,6$." }
      }
    ],
    summary: [
      { id: "Pigeonhole menjamin eksistensi melalui perbandingan objek dan kotak.", en: "Pigeonhole guarantees existence by comparing objects and boxes." },
      { id: "Versi umum memberi batas $\\lceil N/k\\rceil$.", en: "The generalized form gives the bound $\\lceil N/k\\rceil$." },
      { id: "Pemilihan kotak adalah inti strategi.", en: "Choosing the boxes is the heart of the strategy." },
      { id: "Kelas residu, interval, dan pola adalah model kotak yang umum.", en: "Residue classes, intervals, and patterns are common box models." }
    ]
  },

  "spektrum-graf": {
    deepDive: [
      {
        title: { id: "Dari graf ke matriks", en: "From a Graph to a Matrix" },
        lead: { id: "Spektrum graf selalu bergantung pada matriks mana yang dipilih.", en: "A graph spectrum always depends on which associated matrix is chosen." },
        paragraphs: [
          { id: "Matriks adjacency $A(G)$ merekam ketetanggaan, Laplacian $L(G)=D(G)-A(G)$ menggabungkan derajat dan adjacency, sedangkan matriks jarak merekam jarak geodesik antar simpul.", en: "The adjacency matrix $A(G)$ records adjacency, the Laplacian $L(G)=D(G)-A(G)$ combines degree and adjacency information, and the distance matrix records geodesic distances between vertices." },
          { id: "Karena pelabelan simpul hanya mengubah matriks melalui kesebangunan oleh matriks permutasi, spektrum tidak bergantung pada urutan pelabelan simpul.", en: "Relabeling vertices changes the matrix only by permutation similarity, so the spectrum is independent of the chosen vertex ordering." }
        ],
        formula: "$$A'=P^TAP\\quad\\Longrightarrow\\quad \\chi_{A'}(\\lambda)=\\chi_A(\\lambda).$$",
        takeaways: [
          { id: "Selalu sebutkan jenis matriks ketika membahas spektrum.", en: "Always specify the associated matrix when discussing a spectrum." },
          { id: "Kesebangunan mempertahankan nilai eigen.", en: "Similarity preserves eigenvalues." }
        ]
      },
      {
        title: { id: "Spektrum sebagai pengkode struktur", en: "Spectra as Encoded Structure" },
        lead: { id: "Nilai eigen mengubah informasi kombinatorial menjadi data aljabar.", en: "Eigenvalues transform combinatorial structure into algebraic data." },
        paragraphs: [
          { id: "Jejak $A$ sama dengan jumlah nilai eigen dan $\\operatorname{tr}(A^2)$ sama dengan jumlah kuadrat nilai eigen. Untuk adjacency graf sederhana, $\\operatorname{tr}(A^2)=2|E|$.", en: "The trace of $A$ equals the sum of its eigenvalues, while $\\operatorname{tr}(A^2)$ equals the sum of their squares. For a simple graph adjacency matrix, $\\operatorname{tr}(A^2)=2|E|$." },
          { id: "Namun spektrum tidak selalu menentukan graf secara unik. Dua graf tak-isomorfik dapat kospektral, sehingga interpretasi spektral harus digunakan bersama informasi struktur lain.", en: "A spectrum does not always determine a graph uniquely. Non-isomorphic graphs may be cospectral, so spectral information should be combined with structural information." }
        ],
        formula: "$$\\sum_i\\lambda_i=\\operatorname{tr}(A),\\qquad \\sum_i\\lambda_i^2=\\operatorname{tr}(A^2).$$",
        takeaways: [
          { id: "Momen spektral berkaitan dengan closed walks.", en: "Spectral moments are related to closed walks." },
          { id: "Kospektral tidak berarti isomorfik.", en: "Cospectral does not imply isomorphic." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Relabeling simpul mengubah matriks adjacency melalui ...", en: "Relabeling vertices changes the adjacency matrix by ..." },
        options: [{ id: "kesebangunan permutasi", en: "permutation similarity" }, { id: "perkalian skalar", en: "scalar multiplication" }, { id: "transpose saja", en: "transpose only" }],
        answer: 0,
        explanation: { id: "Jika $P$ matriks permutasi, matriks baru berbentuk $P^TAP$.", en: "If $P$ is a permutation matrix, the new matrix is $P^TAP$." }
      },
      {
        question: { id: "Untuk adjacency graf sederhana, $\\operatorname{tr}(A^2)$ sama dengan ...", en: "For a simple graph adjacency matrix, $\\operatorname{tr}(A^2)$ equals ..." },
        options: [{ id: "$|E|$", en: "$|E|$" }, { id: "$2|E|$", en: "$2|E|$" }, { id: "$|V|$", en: "$|V|$" }],
        answer: 1,
        explanation: { id: "Setiap sisi memberi dua closed walk panjang $2$.", en: "Each edge contributes two closed walks of length $2$." }
      }
    ],
    summary: [
      { id: "Spektrum selalu dikaitkan dengan matriks tertentu.", en: "A spectrum is always associated with a specified matrix." },
      { id: "Pelabelan ulang simpul tidak mengubah spektrum.", en: "Vertex relabeling does not change the spectrum." },
      { id: "Jejak dan pangkat matriks memberi informasi dari momen spektral.", en: "Traces of matrix powers encode spectral moments." },
      { id: "Spektrum kuat tetapi tidak selalu menentukan graf secara unik.", en: "Spectra are powerful but do not always determine a graph uniquely." }
    ]
  },

  "teori-bilangan-olimpiade-smp": {
    deepDive: [
      {
        title: { id: "Keterbagian, FPB, dan algoritma Euclid", en: "Divisibility, GCD, and the Euclidean Algorithm" },
        lead: { id: "Banyak soal teori bilangan dapat disederhanakan dengan memindahkan fokus dari angka besar ke struktur faktor persekutuan.", en: "Many number-theory problems become simpler when attention shifts from large numbers to common-factor structure." },
        paragraphs: [
          { id: "Relasi $a=bq+r$ tidak mengubah FPB ketika pasangan $(a,b)$ diganti menjadi $(b,r)$. Pengulangan langkah ini menghasilkan algoritma Euclid.", en: "The relation $a=bq+r$ leaves the gcd unchanged when $(a,b)$ is replaced by $(b,r)$. Repeating this step yields the Euclidean algorithm." },
          { id: "Identitas Bézout menyatakan bahwa $\\gcd(a,b)$ dapat ditulis sebagai kombinasi linear $ax+by$ untuk bilangan bulat $x,y$.", en: "Bézout's identity states that $\\gcd(a,b)$ can be written as a linear combination $ax+by$ for integers $x,y$." }
        ],
        formula: "$$\\gcd(a,b)=\\gcd(b,a-bq).$$",
        takeaways: [
          { id: "Kurangi masalah dengan mengambil sisa.", en: "Reduce the problem by taking remainders." },
          { id: "FPB menghubungkan keterbagian dengan kombinasi linear.", en: "The gcd connects divisibility with linear combinations." }
        ]
      },
      {
        title: { id: "Kongruensi sebagai aritmetika residu", en: "Congruences as Arithmetic of Remainders" },
        lead: { id: "Kongruensi memungkinkan bilangan besar diganti dengan wakil kecil.", en: "Congruences allow large integers to be replaced by small representatives." },
        paragraphs: [
          { id: "Pernyataan $a\\equiv b\\pmod m$ berarti $m\\mid(a-b)$. Penjumlahan dan perkalian kompatibel dengan relasi ini.", en: "The statement $a\\equiv b\\pmod m$ means $m\\mid(a-b)$. Addition and multiplication are compatible with this relation." },
          { id: "Pembagian dalam kongruensi tidak selalu sah. Untuk membatalkan faktor $c$, kita memerlukan kondisi seperti $\\gcd(c,m)=1$, atau harus menyesuaikan modulus.", en: "Division in congruences is not always valid. To cancel a factor $c$, one needs a condition such as $\\gcd(c,m)=1$, or the modulus must be adjusted." }
        ],
        formula: "$$a\\equiv b\\pmod m\\iff m\\mid(a-b).$$",
        takeaways: [
          { id: "Gunakan periode untuk digit terakhir dan sisa pangkat.", en: "Use periodicity for last digits and power residues." },
          { id: "Jangan membatalkan faktor tanpa memeriksa invertibilitas modulo.", en: "Do not cancel a factor without checking modular invertibility." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Jika $a\\equiv b\\pmod m$, apa yang pasti membagi $a-b$?", en: "If $a\\equiv b\\pmod m$, what must divide $a-b$?" },
        options: [{ id: "$a$", en: "$a$" }, { id: "$b$", en: "$b$" }, { id: "$m$", en: "$m$" }],
        answer: 2,
        explanation: { id: "Itu adalah definisi kongruensi modulo $m$.", en: "That is the definition of congruence modulo $m$." }
      },
      {
        question: { id: "Algoritma Euclid didasarkan pada identitas ...", en: "The Euclidean algorithm is based on the identity ..." },
        options: [{ id: "$\\gcd(a,b)=\\gcd(b,a-bq)$", en: "$\\gcd(a,b)=\\gcd(b,a-bq)$" }, { id: "$\\gcd(a,b)=ab$", en: "$\\gcd(a,b)=ab$" }, { id: "$\\gcd(a,b)=a+b$", en: "$\\gcd(a,b)=a+b$" }],
        answer: 0,
        explanation: { id: "Faktor persekutuan pasangan $(a,b)$ sama dengan faktor persekutuan pasangan $(b,a-bq)$.", en: "The pairs $(a,b)$ and $(b,a-bq)$ have the same common divisors." }
      }
    ],
    summary: [
      { id: "Algoritma Euclid menghitung FPB melalui sisa berulang.", en: "The Euclidean algorithm computes gcds through repeated remainders." },
      { id: "Kongruensi mempelajari kesamaan sisa modulo.", en: "Congruence studies equality of remainders modulo a modulus." },
      { id: "Operasi tambah dan kali kompatibel dengan kongruensi.", en: "Addition and multiplication are compatible with congruence." },
      { id: "Pola pangkat sering dapat disederhanakan melalui periodisitas residu.", en: "Power patterns can often be simplified through periodic residues." }
    ]
  },

  "kombinatorika-olimpiade-sma": {
    deepDive: [
      {
        title: { id: "Counting sebagai pemodelan, bukan hafalan rumus", en: "Counting as Modeling, Not Formula Memorization" },
        lead: { id: "Langkah pertama adalah menentukan objek apa yang sedang dihitung dan kapan dua objek dianggap berbeda.", en: "The first step is to identify what is being counted and when two objects should be considered distinct." },
        paragraphs: [
          { id: "Aturan penjumlahan digunakan untuk kasus saling lepas, aturan perkalian digunakan untuk pilihan bertahap, dan koefisien binomial muncul ketika memilih subset tanpa memperhatikan urutan.", en: "The sum rule applies to disjoint cases, the product rule to sequential choices, and binomial coefficients arise when selecting subsets without regard to order." },
          { id: "Bijeksi sering lebih kuat daripada aljabar karena membuktikan dua kuantitas sama dengan memasangkan objek secara eksplisit.", en: "Bijections are often stronger than algebraic manipulations because they prove two quantities equal by explicitly pairing the objects." }
        ],
        formula: "$$\\binom nk=\\frac{n!}{k!(n-k)!}.$$",
        takeaways: [
          { id: "Pastikan apakah urutan relevan.", en: "Determine whether order matters." },
          { id: "Pilih representasi yang membuat struktur terlihat.", en: "Choose a representation that exposes the structure." }
        ]
      },
      {
        title: { id: "Double counting dan inclusion–exclusion", en: "Double Counting and Inclusion–Exclusion" },
        lead: { id: "Dua teknik ini sama-sama mengoreksi cara kita menghitung objek.", en: "Both techniques refine how objects are counted." },
        paragraphs: [
          { id: "Double counting menghitung himpunan pasangan atau insidensi yang sama dengan dua klasifikasi berbeda. Kesetaraan kedua hasil memberi identitas atau batas.", en: "Double counting counts the same set of pairs or incidences using two different classifications. Equating the two counts produces identities or bounds." },
          { id: "Inclusion–exclusion memperbaiki overcounting dengan menambah dan mengurangi irisan secara bergantian.", en: "Inclusion–exclusion corrects overcounting by alternately subtracting and adding intersections." }
        ],
        formula: "$$|A\\cup B|=|A|+|B|-|A\\cap B|.$$",
        takeaways: [
          { id: "Tanyakan: objek apa yang dapat dihitung dari dua sisi?", en: "Ask: what object can be counted in two different ways?" },
          { id: "Waspadai irisan tingkat lebih tinggi pada inclusion–exclusion.", en: "Watch for higher-order intersections in inclusion–exclusion." }
        ]
      },
      {
        title: { id: "Invariant dan extremal principle", en: "Invariants and the Extremal Principle" },
        lead: { id: "Keduanya mengubah proses panjang menjadi argumen struktural.", en: "Both methods turn long processes into structural arguments." },
        paragraphs: [
          { id: "Invariant adalah kuantitas yang tidak berubah pada setiap operasi. Jika keadaan awal dan target memiliki invariant berbeda, target mustahil dicapai.", en: "An invariant is a quantity unchanged by every allowed move. If the initial and target states have different invariant values, the target is impossible." },
          { id: "Extremal principle memilih objek paling kecil, paling besar, paling kiri, atau paling ekstrem untuk memaksa hubungan yang tidak terlihat pada objek umum.", en: "The extremal principle selects a smallest, largest, leftmost, or otherwise extreme object to force a relation that may be hidden for a generic object." }
        ],
        takeaways: [
          { id: "Paritas dan modulo sering menjadi invariant.", en: "Parity and modular classes often provide invariants." },
          { id: "Objek ekstrem mengurangi banyak kemungkinan konfigurasi.", en: "Extreme objects reduce the number of possible configurations." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Untuk memilih $3$ orang dari $8$ tanpa urutan, banyaknya cara adalah ...", en: "To choose $3$ people from $8$ without regard to order, the number of choices is ..." },
        options: [{ id: "$8^3$", en: "$8^3$" }, { id: "$\\binom83$", en: "$\\binom83$" }, { id: "$8!$", en: "$8!$" }],
        answer: 1,
        explanation: { id: "Pemilihan subset tanpa urutan menggunakan kombinasi.", en: "Choosing an unordered subset uses a binomial coefficient." }
      },
      {
        question: { id: "Jika suatu operasi selalu menambah jumlah total sebesar $2$, apa invariant modulo $2$?", en: "If every move increases the total sum by $2$, what is invariant modulo $2$?" },
        options: [{ id: "Paritas jumlah", en: "Parity of the sum" }, { id: "Nilai jumlah", en: "The exact sum" }, { id: "Nilai maksimum", en: "The maximum value" }],
        answer: 0,
        explanation: { id: "Menambah $2$ tidak mengubah sisa modulo $2$.", en: "Adding $2$ does not change the residue modulo $2$." }
      }
    ],
    summary: [
      { id: "Counting dimulai dari model objek dan aturan pembedaan.", en: "Counting starts with a model of the objects and what makes them distinct." },
      { id: "Bijeksi dan double counting memberi pembuktian struktural.", en: "Bijections and double counting provide structural proofs." },
      { id: "Inclusion–exclusion mengoreksi overcounting.", en: "Inclusion–exclusion corrects overcounting." },
      { id: "Invariant dan extremal principle sangat efektif untuk masalah proses nonrutin.", en: "Invariants and the extremal principle are powerful for non-routine process problems." }
    ]
  },

  "aljabar-linear-onmipa": {
    deepDive: [
      {
        title: { id: "Dimensi sebagai alat counting aljabar", en: "Dimension as an Algebraic Counting Tool" },
        lead: { id: "Pada tingkat kompetisi, dimensi sering lebih kuat daripada eliminasi baris langsung.", en: "At competition level, dimension arguments are often stronger than direct row reduction." },
        paragraphs: [
          { id: "Rank–nullity membagi dimensi domain menjadi dua bagian: arah yang diruntuhkan ke nol dan arah independen yang bertahan di image.", en: "Rank–nullity splits the domain dimension into two parts: directions collapsed to zero and independent directions that survive in the image." },
          { id: "Inklusi subruang bersama kesamaan dimensi sering langsung memberi kesamaan subruang. Demikian pula, jika jumlah dimensi dua subruang melebihi dimensi ruang ambien, keduanya harus beririsan nontrivial.", en: "Subspace inclusion together with equality of dimensions often immediately yields equality of subspaces. Likewise, if the dimensions of two subspaces add to more than the ambient dimension, their intersection must be nontrivial." }
        ],
        formula: "$$\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W).$$",
        takeaways: [
          { id: "Hitung dimensi sebelum melakukan komputasi panjang.", en: "Count dimensions before launching into long computations." },
          { id: "Inklusi + dimensi sama sering cukup untuk membuktikan kesamaan.", en: "Inclusion plus equal dimension is often enough to prove equality." }
        ]
      },
      {
        title: { id: "Nilai eigen, polinomial minimal, dan ruang invarian", en: "Eigenvalues, Minimal Polynomials, and Invariant Subspaces" },
        lead: { id: "Polinomial operator memberi bahasa ringkas untuk memahami struktur transformasi linear.", en: "Operator polynomials provide a compact language for understanding linear transformations." },
        paragraphs: [
          { id: "Jika $p(T)=0$, setiap nilai eigen $\\lambda$ dari $T$ harus memenuhi $p(\\lambda)=0$. Karena polinomial minimal membagi setiap polinomial annihilator, akarnya mengontrol nilai eigen yang mungkin.", en: "If $p(T)=0$, every eigenvalue $\\lambda$ of $T$ must satisfy $p(\\lambda)=0$. Since the minimal polynomial divides every annihilating polynomial, its roots control the possible eigenvalues." },
          { id: "Subruang invariant memungkinkan operator dibatasi ke bagian yang lebih kecil. Memilih basis yang disesuaikan dengan subruang invariant sering menghasilkan matriks blok dan mempermudah analisis.", en: "Invariant subspaces allow the operator to be restricted to smaller pieces. Choosing a basis adapted to an invariant subspace often produces a block matrix and simplifies analysis." }
        ],
        formula: "$$m_T(T)=0,\\qquad m_T\\mid p\\text{ whenever }p(T)=0.$$",
        takeaways: [
          { id: "Setiap nilai eigen merupakan akar polinomial minimal.", en: "Every eigenvalue is a root of the minimal polynomial." },
          { id: "Basis yang disesuaikan dapat mengungkap struktur blok.", en: "An adapted basis can reveal block structure." }
        ]
      },
      {
        title: { id: "Inner product, ortogonalitas, dan proyeksi", en: "Inner Products, Orthogonality, and Projection" },
        lead: { id: "Geometri linear memberi alat optimisasi dan dekomposisi.", en: "Linear geometry provides tools for optimization and decomposition." },
        paragraphs: [
          { id: "Pada ruang hasil kali dalam berdimensi hingga, setiap subruang $W$ mempunyai komplemen ortogonal $W^\\perp$ dan berlaku $V=W\\oplus W^\\perp$.", en: "In a finite-dimensional inner-product space, every subspace $W$ has an orthogonal complement $W^\\perp$ and $V=W\\oplus W^\\perp$." },
          { id: "Proyeksi ortogonal $P_Wv$ adalah vektor di $W$ yang meminimumkan jarak ke $v$. Kondisi karakteristiknya adalah $v-P_Wv\\perp W$.", en: "The orthogonal projection $P_Wv$ is the vector in $W$ closest to $v$. Its characteristic condition is $v-P_Wv\\perp W$." }
        ],
        formula: "$$v=P_Wv+(v-P_Wv),\\qquad v-P_Wv\\in W^\\perp.$$",
        takeaways: [
          { id: "Ortogonalitas mengubah masalah minimisasi menjadi persamaan linear.", en: "Orthogonality turns minimization problems into linear equations." },
          { id: "Proyeksi adalah contoh penting operator idempoten.", en: "Projection is an important example of an idempotent operator." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Jika $T:V\\to V$ dan $\\ker T=\\{0\\}$ pada ruang berdimensi hingga, apa yang pasti benar?", en: "If $T:V\\to V$ has $\\ker T=\\{0\\}$ on a finite-dimensional space, what must be true?" },
        options: [{ id: "$T$ surjektif", en: "$T$ is surjective" }, { id: "$T=0$", en: "$T=0$" }, { id: "$T$ nilpoten", en: "$T$ is nilpotent" }],
        answer: 0,
        explanation: { id: "Nullity nol memberi rank $=\\dim V$, jadi image sama dengan $V$.", en: "Zero nullity gives rank $=\\dim V$, so the image is all of $V$." }
      },
      {
        question: { id: "Jika $T^2=T$, operator seperti ini disebut ...", en: "If $T^2=T$, such an operator is called ..." },
        options: [{ id: "nilpoten", en: "nilpotent" }, { id: "idempoten", en: "idempotent" }, { id: "skalar", en: "scalar" }],
        answer: 1,
        explanation: { id: "Persamaan $T^2=T$ adalah definisi idempotensi.", en: "The equation $T^2=T$ defines idempotence." }
      }
    ],
    summary: [
      { id: "Dimensi, kernel, dan image adalah alat struktur utama.", en: "Dimension, kernel, and image are core structural tools." },
      { id: "Rank–nullity menghubungkan domain, kernel, dan image.", en: "Rank–nullity connects the domain, kernel, and image." },
      { id: "Polinomial minimal dan ruang invariant mengungkap struktur operator.", en: "Minimal polynomials and invariant subspaces reveal operator structure." },
      { id: "Inner product memberi konsep ortogonalitas dan proyeksi.", en: "Inner products provide orthogonality and projection." }
    ]
  },

  "analisis-real-onmipa": {
    deepDive: [
      {
        title: { id: "Kelengkapan dan kontrol barisan", en: "Completeness and Control of Sequences" },
        lead: { id: "Perbedaan mendasar antara $\\mathbb R$ dan $\\mathbb Q$ terletak pada kelengkapan.", en: "A fundamental distinction between $\\mathbb R$ and $\\mathbb Q$ lies in completeness." },
        paragraphs: [
          { id: "Aksioma supremum menyatakan bahwa setiap himpunan tak kosong yang terbatas atas mempunyai supremum di $\\mathbb R$. Dari prinsip ini dapat diturunkan banyak teorema konvergensi.", en: "The supremum axiom states that every nonempty set bounded above has a supremum in $\\mathbb R$. Many convergence theorems follow from this principle." },
          { id: "Barisan monoton dan terbatas konvergen. Intinya, supremum atau infimum kandidat limit dapat didekati oleh suku-suku barisan menggunakan definisi least upper bound.", en: "Every monotone bounded sequence converges. The key idea is that the supremum or infimum can be approximated by sequence terms using the least-upper-bound property." }
        ],
        formula: "$$a_n\\uparrow,\\quad a_n\\le M\\quad\\Longrightarrow\\quad a_n\\to\\sup\\{a_n:n\\in\\mathbb N\\}.$$",
        takeaways: [
          { id: "Kelengkapan mengubah boundedness + monotonicity menjadi konvergensi.", en: "Completeness turns boundedness plus monotonicity into convergence." },
          { id: "Supremum sering menjadi kandidat limit alami.", en: "The supremum is often a natural candidate for a limit." }
        ]
      },
      {
        title: { id: "Kontinuitas, kekompakan, dan uniform continuity", en: "Continuity, Compactness, and Uniform Continuity" },
        lead: { id: "Kekompakan memungkinkan argumen lokal menjadi global.", en: "Compactness allows local control to become global." },
        paragraphs: [
          { id: "Kontinuitas di setiap titik memberi $\\delta$ yang boleh bergantung pada titik. Pada himpunan kompak, Heine–Cantor menyatakan bahwa satu kontrol $\\delta$ dapat dipilih secara seragam untuk seluruh domain.", en: "Pointwise continuity allows $\\delta$ to depend on the point. On a compact set, Heine–Cantor guarantees a uniform $\\delta$ that works throughout the domain." },
          { id: "Teknik kontradiksi dengan dua barisan $x_n,y_n$ yang saling mendekat tetapi nilai fungsi tetap terpisah merupakan pola pembuktian penting.", en: "A contradiction argument using sequences $x_n,y_n$ that approach each other while their function values stay separated is an important proof pattern." }
        ],
        formula: "$$|x-y|<\\delta\\quad\\Longrightarrow\\quad |f(x)-f(y)|<\\varepsilon.$$",
        takeaways: [
          { id: "Kuantor pada uniform continuity tidak mengizinkan $\\delta$ bergantung pada titik.", en: "In uniform continuity, $\\delta$ may not depend on the point." },
          { id: "Kekompakan memberi subsequence konvergen dan kontrol global.", en: "Compactness provides convergent subsequences and global control." }
        ]
      },
      {
        title: { id: "Konvergensi fungsi dan pertukaran limit", en: "Function Convergence and Interchanging Limits" },
        lead: { id: "Konvergensi titik demi titik terlalu lemah untuk mempertahankan banyak sifat analitik.", en: "Pointwise convergence is too weak to preserve many analytic properties." },
        paragraphs: [
          { id: "Pada konvergensi seragam, satu indeks $N$ bekerja untuk semua $x$ dalam domain. Ini memungkinkan estimasi error global melalui $\\sup_x|f_n(x)-f(x)|$.", en: "Under uniform convergence, one index $N$ works for every $x$ in the domain. This enables global error estimates through $\\sup_x|f_n(x)-f(x)|$." },
          { id: "Limit seragam fungsi kontinu tetap kontinu. Dengan hipotesis tambahan, konvergensi seragam juga memungkinkan pertukaran limit dengan integral.", en: "A uniform limit of continuous functions remains continuous. Under additional hypotheses, uniform convergence also permits interchange of limit and integral." }
        ],
        formula: "$$f_n\\to f\\text{ uniformly }\\iff \\sup_{x\\in A}|f_n(x)-f(x)|\\to0.$$",
        takeaways: [
          { id: "Perhatikan urutan kuantor dalam definisi.", en: "Pay attention to the order of quantifiers in the definition." },
          { id: "Norma supremum adalah bahasa alami untuk konvergensi seragam.", en: "The supremum norm is the natural language for uniform convergence." }
        ]
      }
    ],
    quiz: [
      {
        question: { id: "Apakah setiap barisan konvergen pasti terbatas?", en: "Is every convergent sequence bounded?" },
        options: [{ id: "Ya", en: "Yes" }, { id: "Tidak", en: "No" }],
        answer: 0,
        explanation: { id: "Ekor barisan dekat dengan limit, sedangkan sejumlah hingga suku awal selalu mempunyai maksimum nilai mutlak.", en: "The tail is close to the limit, while finitely many initial terms always have a finite maximum absolute value." }
      },
      {
        question: { id: "Pada konvergensi seragam, indeks $N$ boleh bergantung pada ...", en: "In uniform convergence, the index $N$ may depend on ..." },
        options: [{ id: "$x$", en: "$x$" }, { id: "$\\varepsilon$", en: "$\\varepsilon$" }, { id: "$x$ dan $\\varepsilon$", en: "$x$ and $\\varepsilon$" }],
        answer: 1,
        explanation: { id: "$N$ boleh bergantung pada $\\varepsilon$, tetapi harus bekerja untuk semua $x$ sekaligus.", en: "$N$ may depend on $\\varepsilon$, but it must work for every $x$ simultaneously." }
      }
    ],
    summary: [
      { id: "Kelengkapan adalah fondasi banyak teorema konvergensi di $\\mathbb R$.", en: "Completeness underlies many convergence theorems in $\\mathbb R$." },
      { id: "Definisi epsilon harus dibaca dengan urutan kuantor yang tepat.", en: "Epsilon definitions must be read with the correct order of quantifiers." },
      { id: "Kekompakan menguatkan kontinuitas menjadi kontinuitas seragam.", en: "Compactness upgrades continuity to uniform continuity." },
      { id: "Konvergensi seragam mempertahankan kontinuitas limit.", en: "Uniform convergence preserves continuity of the limit." }
    ]
  }
};
