export type Bilingual = { id: string; en: string };

export type FormalBlockKind = "definition" | "lemma" | "proposition" | "theorem" | "corollary";

export type FormalBlock = {
  kind: FormalBlockKind;
  title: Bilingual;
  statement: Bilingual;
  proof?: Bilingual[];
  intuition?: Bilingual;
  note?: Bilingual;
};

export type DetailedExample = {
  title: Bilingual;
  problem: Bilingual;
  strategy: Bilingual;
  solution: Bilingual[];
  conclusion: Bilingual;
};

export type FormalChapterContent = {
  intro: Bilingual;
  blocks: FormalBlock[];
  examples: DetailedExample[];
};

const t=(id:string,en:string):Bilingual=>({id,en});

export const formalChapterContent: Record<string, FormalChapterContent> = {
  "pecahan":{
    intro:t(
      "Bagian ini memformalkan konsep pecahan melalui definisi, hasil dasar, dan pembuktian sederhana agar operasi pecahan tidak dipahami sebagai aturan mekanis semata.",
      "This section formalizes fractions through definitions, basic results, and simple proofs so that fraction operations are understood structurally rather than mechanically."
    ),
    blocks:[
      {
        kind:"definition",
        title:t("Representasi Rasional","Rational Representation"),
        statement:t("Bilangan rasional adalah bilangan yang dapat ditulis dalam bentuk $\\frac ab$ dengan $a,b\\in\\mathbb Z$ dan $b\\neq0$. Dua pasangan $(a,b)$ dan $(c,d)$ merepresentasikan bilangan yang sama apabila $ad=bc$.","A rational number is a number representable as $\\frac ab$ with $a,b\\in\\mathbb Z$ and $b\\neq0$. Two pairs $(a,b)$ and $(c,d)$ represent the same number exactly when $ad=bc$."),
        intuition:t("Pecahan adalah representasi suatu bilangan, bukan bilangan baru yang bergantung pada cara penulisannya.","A fraction is a representation of a number, not a new number depending on how it is written.")
      },
      {
        kind:"lemma",
        title:t("Lemma Penyebut Bersama","Common-Denominator Lemma"),
        statement:t("Untuk $b,d\\neq0$, berlaku $\\frac ab=\\frac{ad}{bd}$ dan $\\frac cd=\\frac{bc}{bd}$.","For $b,d\\neq0$, $\\frac ab=\\frac{ad}{bd}$ and $\\frac cd=\\frac{bc}{bd}$."),
        proof:[
          t("Karena $d\\neq0$, nilai $\\frac dd=1$. Dengan mengalikan $\\frac ab$ oleh $1$, diperoleh $\\frac ab=\\frac ab\\cdot\\frac dd=\\frac{ad}{bd}$.","Since $d\\neq0$, $\\frac dd=1$. Multiplying $\\frac ab$ by $1$ gives $\\frac ab=\\frac ab\\cdot\\frac dd=\\frac{ad}{bd}$."),
          t("Argumen yang sama dengan faktor $\\frac bb$ memberi $\\frac cd=\\frac{bc}{bd}$.","The same argument using the factor $\\frac bb$ gives $\\frac cd=\\frac{bc}{bd}$.")
        ]
      },
      {
        kind:"proposition",
        title:t("Proposisi Penjumlahan Pecahan","Fraction Addition Proposition"),
        statement:t("Untuk $b,d\\neq0$, $\\displaystyle \\frac ab+\\frac cd=\\frac{ad+bc}{bd}$.","For $b,d\\neq0$, $\\displaystyle \\frac ab+\\frac cd=\\frac{ad+bc}{bd}$."),
        proof:[
          t("Gunakan Lemma Penyebut Bersama untuk menulis kedua pecahan dengan penyebut $bd$.","Use the Common-Denominator Lemma to rewrite both fractions with denominator $bd$."),
          t("Diperoleh $\\frac{ad}{bd}+\\frac{bc}{bd}=\\frac{ad+bc}{bd}$ karena penjumlahan dua bagian berukuran sama cukup menjumlahkan banyak bagiannya.","Thus $\\frac{ad}{bd}+\\frac{bc}{bd}=\\frac{ad+bc}{bd}$ because parts of equal size are added by adding their counts.")
        ],
        note:t("Rumus ini menjelaskan alasan penyebut tidak dijumlahkan.","This formula explains why denominators are not added.")
      },
      {
        kind:"theorem",
        title:t("Teorema Bentuk Paling Sederhana","Lowest-Terms Theorem"),
        statement:t("Setiap bilangan rasional tak nol mempunyai representasi $\\frac ab$ dengan $\\gcd(a,b)=1$, dan representasi ini unik sampai perubahan tanda serentak pada pembilang dan penyebut.","Every nonzero rational number has a representation $\\frac ab$ with $\\gcd(a,b)=1$, unique up to simultaneously changing the signs of numerator and denominator."),
        proof:[
          t("Mulai dari sembarang representasi $\\frac mn$ dengan $n\\neq0$, lalu ambil $g=\\gcd(m,n)$.","Start with any representation $\\frac mn$ with $n\\neq0$, and let $g=\\gcd(m,n)$."),
          t("Tuliskan $m=ga$ dan $n=gb$. Dengan demikian $\\frac mn=\\frac ab$ dan $\\gcd(a,b)=1$.","Write $m=ga$ and $n=gb$. Then $\\frac mn=\\frac ab$ and $\\gcd(a,b)=1$."),
          t("Untuk keunikan, andaikan $\\frac ab=\\frac cd$ dengan kedua pasangan koprima. Dari $ad=bc$, setiap faktor prima pembagi $a$ harus membagi $c$, dan sebaliknya. Dengan tanda penyebut disepakati positif, diperoleh $a=c$ dan $b=d$.","For uniqueness, suppose $\\frac ab=\\frac cd$ with both pairs coprime. From $ad=bc$, every prime divisor of $a$ must divide $c$, and conversely. With positive denominators fixed, one obtains $a=c$ and $b=d$.")
        ]
      },
      {
        kind:"corollary",
        title:t("Akibat: Uji Kesetaraan Pecahan","Corollary: Equality Test"),
        statement:t("Untuk $b,d\\neq0$, $\\frac ab=\\frac cd$ jika dan hanya jika $ad=bc$.","For $b,d\\neq0$, $\\frac ab=\\frac cd$ if and only if $ad=bc$."),
        proof:[
          t("Jika kedua pecahan sama, kalikan kedua ruas dengan $bd$ untuk memperoleh $ad=bc$.","If the fractions are equal, multiply both sides by $bd$ to obtain $ad=bc$."),
          t("Sebaliknya, jika $ad=bc$, bagi kedua ruas oleh $bd$ untuk memperoleh $\\frac ab=\\frac cd$.","Conversely, if $ad=bc$, divide by $bd$ to obtain $\\frac ab=\\frac cd$.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Menjumlahkan Pecahan Berbeda Penyebut","Detailed Example: Adding Unlike Fractions"),
        problem:t("Hitung $\\frac7{12}+\\frac5{18}$ dan sederhanakan hasilnya.","Compute $\\frac7{12}+\\frac5{18}$ and simplify the result."),
        strategy:t("Cari penyebut bersama terkecil menggunakan KPK agar bilangan yang digunakan tetap kecil.","Use the least common denominator via the LCM to keep numbers small."),
        solution:[
          t("$\\operatorname{KPK}(12,18)=36$.","$\\operatorname{lcm}(12,18)=36$."),
          t("$\\frac7{12}=\\frac{21}{36}$ karena pembilang dan penyebut dikalikan $3$.","$\\frac7{12}=\\frac{21}{36}$ by multiplying numerator and denominator by $3$."),
          t("$\\frac5{18}=\\frac{10}{36}$ karena pembilang dan penyebut dikalikan $2$.","$\\frac5{18}=\\frac{10}{36}$ by multiplying numerator and denominator by $2$."),
          t("Jumlahnya $\\frac{21+10}{36}=\\frac{31}{36}$. Karena $\\gcd(31,36)=1$, hasil sudah paling sederhana.","The sum is $\\frac{21+10}{36}=\\frac{31}{36}$. Since $\\gcd(31,36)=1$, the result is already in lowest terms.")
        ],
        conclusion:t("Hasil akhirnya adalah $\\boxed{\\frac{31}{36}}$.","The final result is $\\boxed{\\frac{31}{36}}$.")
      },
      {
        title:t("Contoh Detail: Membandingkan Pecahan","Detailed Example: Comparing Fractions"),
        problem:t("Tentukan mana yang lebih besar antara $\\frac{11}{15}$ dan $\\frac{7}{9}$.","Determine which is larger: $\\frac{11}{15}$ or $\\frac79$."),
        strategy:t("Gunakan perkalian silang karena kedua penyebut positif.","Use cross multiplication because both denominators are positive."),
        solution:[
          t("Hitung $11\\cdot9=99$ dan $7\\cdot15=105$.","Compute $11\\cdot9=99$ and $7\\cdot15=105$."),
          t("Karena $99<105$, kriteria perbandingan silang memberi $\\frac{11}{15}<\\frac79$.","Since $99<105$, the cross-product criterion gives $\\frac{11}{15}<\\frac79$.")
        ],
        conclusion:t("$\\boxed{\\frac79}$ lebih besar.","$\\boxed{\\frac79}$ is larger.")
      }
    ]
  },

  "persamaan-linear":{
    intro:t("Persamaan linear diperlakukan sebagai objek yang mempunyai himpunan solusi. Fokus formalnya adalah operasi ekuivalen dan klasifikasi banyak solusi.","A linear equation is treated as an object with a solution set. The formal focus is on equivalent transformations and classification of solution counts."),
    blocks:[
      {
        kind:"definition", title:t("Persamaan Linear","Linear Equation"),
        statement:t("Persamaan linear satu variabel adalah persamaan yang dapat ditulis sebagai $ax+b=0$ dengan $a,b\\in\\mathbb R$ dan $a\\neq0$.","A one-variable linear equation is an equation writable as $ax+b=0$ with $a,b\\in\\mathbb R$ and $a\\neq0$."),
        intuition:t("Grafiknya merupakan garis lurus yang memotong sumbu-$x$ tepat satu kali.","Its graph is a straight line intersecting the $x$-axis exactly once.")
      },
      {
        kind:"lemma", title:t("Lemma Operasi Ekuivalen","Equivalent-Operation Lemma"),
        statement:t("Menambah nilai yang sama pada kedua ruas atau mengalikan kedua ruas dengan skalar tak nol tidak mengubah himpunan solusi.","Adding the same value to both sides or multiplying both sides by a nonzero scalar preserves the solution set."),
        proof:[
          t("Jika $x$ memenuhi $A(x)=B(x)$, maka otomatis $A(x)+c=B(x)+c$. Arah sebaliknya diperoleh dengan mengurangi $c$.","If $x$ satisfies $A(x)=B(x)$, then $A(x)+c=B(x)+c$. The reverse follows by subtracting $c$."),
          t("Untuk $k\\neq0$, $A(x)=B(x)$ ekuivalen dengan $kA(x)=kB(x)$ karena pembagian kembali oleh $k$ sah.","For $k\\neq0$, $A(x)=B(x)$ is equivalent to $kA(x)=kB(x)$ because division by $k$ is valid.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Solusi Tunggal","Unique-Solution Proposition"),
        statement:t("Persamaan $ax+b=c$ dengan $a\\neq0$ mempunyai tepat satu solusi, yaitu $x=\\frac{c-b}{a}$.","The equation $ax+b=c$ with $a\\neq0$ has exactly one solution, namely $x=\\frac{c-b}{a}$."),
        proof:[
          t("Kurangi kedua ruas dengan $b$ untuk memperoleh $ax=c-b$.","Subtract $b$ from both sides to obtain $ax=c-b$."),
          t("Bagi kedua ruas dengan $a$ yang tak nol. Diperoleh $x=\\frac{c-b}{a}$.","Divide both sides by nonzero $a$, giving $x=\\frac{c-b}{a}$."),
          t("Semua transformasi ekuivalen, jadi tidak ada solusi lain yang hilang atau muncul.","All transformations are equivalent, so no other solution is lost or introduced.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Klasifikasi Sistem $2\\times2$","Classification Theorem for a $2\\times2$ System"),
        statement:t("Sistem $ax+by=e$ dan $cx+dy=f$ mempunyai solusi tunggal jika $ad-bc\\neq0$. Jika $ad-bc=0$, sistem mempunyai nol atau tak hingga solusi.","The system $ax+by=e$ and $cx+dy=f$ has a unique solution if $ad-bc\\neq0$. If $ad-bc=0$, it has either no solution or infinitely many solutions."),
        proof:[
          t("Eliminasi $y$ menghasilkan $(ad-bc)x=de-bf$.","Eliminating $y$ gives $(ad-bc)x=de-bf$."),
          t("Jika $ad-bc\\neq0$, nilai $x$ ditentukan unik dan substitusi balik menentukan $y$ secara unik.","If $ad-bc\\neq0$, $x$ is uniquely determined, and back-substitution uniquely determines $y$."),
          t("Jika $ad-bc=0$, ruas kiri eliminasi menjadi nol. Jika ruas kanan tidak nol, diperoleh kontradiksi; jika ruas kanan juga nol, satu persamaan bergantung pada yang lain dan muncul satu parameter bebas.","If $ad-bc=0$, the eliminated left side vanishes. A nonzero right side creates a contradiction; if it also vanishes, one equation depends on the other and a free parameter remains.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat Geometris","Geometric Corollary"),
        statement:t("Dua garis linear di bidang memiliki tepat satu titik potong jika gradiennya berbeda; jika gradien sama, keduanya sejajar atau berimpit.","Two lines in the plane have exactly one intersection if their slopes differ; equal slopes produce parallel or coincident lines."),
        proof:[
          t("Gradien berbeda ekuivalen dengan vektor normal yang tidak proporsional, yang menghasilkan determinan koefisien tak nol.","Different slopes are equivalent to nonproportional normal vectors, giving a nonzero coefficient determinant."),
          t("Teorema klasifikasi sistem kemudian memberi tepat satu solusi bersama.","The system-classification theorem then gives exactly one common solution.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Sistem dengan Parameter","Detailed Example: Parametric System"),
        problem:t("Tentukan nilai $k$ agar sistem $x+2y=3$ dan $2x+4y=k$ mempunyai tak hingga solusi.","Find $k$ so that $x+2y=3$ and $2x+4y=k$ have infinitely many solutions."),
        strategy:t("Agar tak hingga solusi, persamaan kedua harus ekuivalen dengan kelipatan persamaan pertama.","For infinitely many solutions, the second equation must be an equivalent multiple of the first."),
        solution:[
          t("Kalikan persamaan pertama dengan $2$: $2x+4y=6$.","Multiply the first equation by $2$: $2x+4y=6$."),
          t("Agar persamaan kedua sama, harus berlaku $k=6$.","For the second equation to coincide, $k=6$."),
          t("Jika $k\\neq6$, dua ruas kiri sama tetapi ruas kanan berbeda, menghasilkan kontradiksi.","If $k\\neq6$, the left sides agree while the right sides differ, producing a contradiction.")
        ],
        conclusion:t("Tak hingga solusi terjadi tepat untuk $\\boxed{k=6}$.","Infinitely many solutions occur exactly when $\\boxed{k=6}$.")
      },
      {
        title:t("Contoh Detail: Model Campuran","Detailed Example: Mixture Model"),
        problem:t("Campuran $10$ liter dibuat dari larutan $20\\%$ dan $50\\%$ agar konsentrasi akhir $32\\%$. Tentukan volume masing-masing.","A $10$-liter mixture uses $20\\%$ and $50\\%$ solutions to obtain $32\\%$. Find each volume."),
        strategy:t("Gunakan satu persamaan untuk total volume dan satu persamaan untuk total zat terlarut.","Use one equation for total volume and another for total solute."),
        solution:[
          t("Misalkan $x$ liter larutan $20\\%$ dan $y$ liter larutan $50\\%$.","Let $x$ liters be $20\\%$ solution and $y$ liters be $50\\%$ solution."),
          t("Total volume memberi $x+y=10$.","Total volume gives $x+y=10$."),
          t("Total zat terlarut memberi $0.2x+0.5y=0.32(10)=3.2$.","Total solute gives $0.2x+0.5y=0.32(10)=3.2$."),
          t("Substitusi $x=10-y$ menghasilkan $2+0.3y=3.2$, jadi $y=4$ dan $x=6$.","Substituting $x=10-y$ gives $2+0.3y=3.2$, so $y=4$ and $x=6$.")
        ],
        conclusion:t("Diperlukan $\\boxed{6}$ liter larutan $20\\%$ dan $\\boxed{4}$ liter larutan $50\\%$.","Use $\\boxed{6}$ liters of $20\\%$ solution and $\\boxed{4}$ liters of $50\\%$ solution.")
      }
    ]
  },

  "fungsi":{
    intro:t("Fungsi diperlakukan sebagai pemetaan antarhimpunan. Struktur domain, kodomain, range, injektivitas, surjektivitas, komposisi, dan invers dijelaskan secara formal.","Functions are treated as maps between sets. Domain, codomain, range, injectivity, surjectivity, composition, and inverse are formalized."),
    blocks:[
      {
        kind:"definition", title:t("Fungsi dan Citra","Function and Image"),
        statement:t("Fungsi $f:A\\to B$ memasangkan setiap $x\\in A$ dengan tepat satu $f(x)\\in B$. Himpunan $f(A)=\\{f(x):x\\in A\\}$ disebut range atau citra.","A function $f:A\\to B$ assigns each $x\\in A$ exactly one value $f(x)\\in B$. The set $f(A)=\\{f(x):x\\in A\\}$ is its image or range."),
        intuition:t("Kodomain adalah target yang disediakan, sedangkan range adalah target yang benar-benar tercapai.","The codomain is the declared target set, while the range is the part actually reached.")
      },
      {
        kind:"lemma", title:t("Lemma Komposisi Injektif","Injective-Composition Lemma"),
        statement:t("Jika $f:A\\to B$ dan $g:B\\to C$ injektif, maka $g\\circ f$ injektif.","If $f:A\\to B$ and $g:B\\to C$ are injective, then $g\\circ f$ is injective."),
        proof:[
          t("Diambil $x_1,x_2\\in A$ dengan $(g\\circ f)(x_1)=(g\\circ f)(x_2)$.","Take $x_1,x_2\\in A$ with $(g\\circ f)(x_1)=(g\\circ f)(x_2)$."),
          t("Injektivitas $g$ memberi $f(x_1)=f(x_2)$.","Injectivity of $g$ gives $f(x_1)=f(x_2)$."),
          t("Injektivitas $f$ memberi $x_1=x_2$. Dengan demikian komposisi injektif.","Injectivity of $f$ gives $x_1=x_2$. Thus the composition is injective.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Komposisi Surjektif","Surjective-Composition Proposition"),
        statement:t("Jika $f:A\\to B$ dan $g:B\\to C$ surjektif, maka $g\\circ f:A\\to C$ surjektif.","If $f:A\\to B$ and $g:B\\to C$ are surjective, then $g\\circ f:A\\to C$ is surjective."),
        proof:[
          t("Diambil sebarang $z\\in C$. Karena $g$ surjektif, ada $y\\in B$ dengan $g(y)=z$.","Take any $z\\in C$. Since $g$ is surjective, there exists $y\\in B$ with $g(y)=z$."),
          t("Karena $f$ surjektif, ada $x\\in A$ dengan $f(x)=y$.","Since $f$ is surjective, there exists $x\\in A$ with $f(x)=y$."),
          t("Dengan demikian $(g\\circ f)(x)=g(f(x))=g(y)=z$.","Therefore $(g\\circ f)(x)=g(f(x))=g(y)=z$.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Invers dan Bijektivitas","Inverse–Bijection Theorem"),
        statement:t("Fungsi $f:A\\to B$ memiliki invers dua sisi $f^{-1}:B\\to A$ jika dan hanya jika $f$ bijektif.","A function $f:A\\to B$ has a two-sided inverse $f^{-1}:B\\to A$ if and only if $f$ is bijective."),
        proof:[
          t("Jika invers ada, persamaan $f^{-1}(f(x))=x$ memaksa injektivitas, sedangkan $f(f^{-1}(y))=y$ menjamin surjektivitas.","If an inverse exists, $f^{-1}(f(x))=x$ forces injectivity, while $f(f^{-1}(y))=y$ guarantees surjectivity."),
          t("Sebaliknya, jika $f$ bijektif, setiap $y\\in B$ mempunyai tepat satu prapeta $x\\in A$. Definisikan $f^{-1}(y)=x$.","Conversely, if $f$ is bijective, each $y\\in B$ has exactly one preimage $x\\in A$. Define $f^{-1}(y)=x$."),
          t("Keunikan prapeta memastikan definisi tersebut merupakan fungsi dan kedua identitas invers terpenuhi.","Uniqueness of the preimage makes this well-defined and both inverse identities hold.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat: Invers Komposisi","Corollary: Inverse of a Composition"),
        statement:t("Jika $f$ dan $g$ bijektif, maka $(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}$.","If $f$ and $g$ are bijective, then $(g\\circ f)^{-1}=f^{-1}\\circ g^{-1}$."),
        proof:[
          t("Komposisikan kandidat $f^{-1}\\circ g^{-1}$ dengan $g\\circ f$ dari kiri dan dari kanan.","Compose the candidate $f^{-1}\\circ g^{-1}$ with $g\\circ f$ on both sides."),
          t("Kedua komposisi mereduksi menjadi identitas melalui $g^{-1}g=I$ dan $f^{-1}f=I$.","Both compositions reduce to the identity using $g^{-1}g=I$ and $f^{-1}f=I$.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Menentukan Domain Komposisi","Detailed Example: Domain of a Composition"),
        problem:t("Diberikan $f(x)=\\sqrt{x-1}$ dan $g(x)=\\frac1{x-2}$. Tentukan domain $(g\\circ f)(x)$.","Let $f(x)=\\sqrt{x-1}$ and $g(x)=\\frac1{x-2}$. Find the domain of $(g\\circ f)(x)$."),
        strategy:t("Syarat pertama berasal dari domain $f$; syarat kedua memastikan keluaran $f(x)$ berada di domain $g$.","First impose the domain of $f$, then require that $f(x)$ lie in the domain of $g$."),
        solution:[
          t("Agar $f(x)$ real, diperlukan $x-1\\ge0$, jadi $x\\ge1$.","For $f(x)$ to be real, $x-1\\ge0$, so $x\\ge1$."),
          t("Agar $g(f(x))$ terdefinisi, diperlukan $f(x)\\neq2$.","For $g(f(x))$ to be defined, require $f(x)\\neq2$."),
          t("$\\sqrt{x-1}\\neq2$ ekuivalen dengan $x\\neq5$.","$\\sqrt{x-1}\\neq2$ is equivalent to $x\\neq5$."),
          t("Domainnya adalah $[1,\\infty)\\setminus\\{5\\}$.","The domain is $[1,\\infty)\\setminus\\{5\\}$.")
        ],
        conclusion:t("$\\boxed{[1,\\infty)\\setminus\\{5\\}}$.","$\\boxed{[1,\\infty)\\setminus\\{5\\}}$.")
      },
      {
        title:t("Contoh Detail: Uji Bijektif","Detailed Example: Testing Bijection"),
        problem:t("Tentukan apakah $f:\\mathbb R\\to\\mathbb R$ dengan $f(x)=3x-7$ bijektif dan cari inversnya.","Determine whether $f:\\mathbb R\\to\\mathbb R$, $f(x)=3x-7$, is bijective and find its inverse."),
        strategy:t("Uji injektif melalui persamaan keluaran yang sama, lalu uji surjektif dengan menyelesaikan $y=3x-7$.","Test injectivity by equal outputs, then surjectivity by solving $y=3x-7$."),
        solution:[
          t("Jika $f(x_1)=f(x_2)$, maka $3x_1-7=3x_2-7$, jadi $x_1=x_2$. Fungsi injektif.","If $f(x_1)=f(x_2)$, then $3x_1-7=3x_2-7$, so $x_1=x_2$. Thus $f$ is injective."),
          t("Untuk sebarang $y\\in\\mathbb R$, pilih $x=\\frac{y+7}{3}$. Nilai ini real dan memenuhi $f(x)=y$, jadi fungsi surjektif.","For any $y\\in\\mathbb R$, choose $x=\\frac{y+7}{3}$. This is real and satisfies $f(x)=y$, so $f$ is surjective."),
          t("Dari $y=3x-7$ diperoleh $x=\\frac{y+7}{3}$, sehingga $f^{-1}(x)=\\frac{x+7}{3}$.","From $y=3x-7$, obtain $x=\\frac{y+7}{3}$, hence $f^{-1}(x)=\\frac{x+7}{3}$.")
        ],
        conclusion:t("$f$ bijektif dan $\\boxed{f^{-1}(x)=\\frac{x+7}{3}}$.","$f$ is bijective and $\\boxed{f^{-1}(x)=\\frac{x+7}{3}}$.")
      }
    ]
  },

  "trigonometri":{
    intro:t("Trigonometri diformalkan melalui lingkaran satuan, identitas, periodisitas, dan struktur rotasi. Rumus utama diturunkan, bukan sekadar dihafal.","Trigonometry is formalized through the unit circle, identities, periodicity, and rotations. Core formulas are derived rather than memorized."),
    blocks:[
      {
        kind:"definition", title:t("Sinus dan Cosinus pada Lingkaran Satuan","Sine and Cosine on the Unit Circle"),
        statement:t("Jika titik pada lingkaran satuan yang bersesuaian dengan sudut $\\theta$ adalah $(x,y)$, didefinisikan $\\cos\\theta=x$ dan $\\sin\\theta=y$.","If the unit-circle point corresponding to angle $\\theta$ is $(x,y)$, define $\\cos\\theta=x$ and $\\sin\\theta=y$."),
        intuition:t("Cosinus membaca posisi horizontal, sedangkan sinus membaca posisi vertikal.","Cosine reads horizontal position, while sine reads vertical position.")
      },
      {
        kind:"lemma", title:t("Lemma Identitas Pythagoras","Pythagorean Identity Lemma"),
        statement:t("$\\sin^2\\theta+\\cos^2\\theta=1$ untuk setiap $\\theta\\in\\mathbb R$.","$\\sin^2\\theta+\\cos^2\\theta=1$ for every $\\theta\\in\\mathbb R$."),
        proof:[
          t("Titik $(\\cos\\theta,\\sin\\theta)$ berada pada lingkaran satuan $x^2+y^2=1$.","The point $(\\cos\\theta,\\sin\\theta)$ lies on the unit circle $x^2+y^2=1$."),
          t("Substitusi koordinat tersebut langsung memberi identitas.","Substituting those coordinates gives the identity.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Periodisitas","Periodicity Proposition"),
        statement:t("$\\sin(\\theta+2\\pi)=\\sin\\theta$ dan $\\cos(\\theta+2\\pi)=\\cos\\theta$.","$\\sin(\\theta+2\\pi)=\\sin\\theta$ and $\\cos(\\theta+2\\pi)=\\cos\\theta$."),
        proof:[
          t("Menambah $2\\pi$ berarti melakukan satu putaran penuh pada lingkaran satuan.","Adding $2\\pi$ corresponds to one full revolution on the unit circle."),
          t("Setelah satu putaran penuh, titik akhirnya sama, jadi kedua koordinat tetap.","After one full revolution, the endpoint is unchanged, so both coordinates remain the same.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Rumus Jumlah Sudut","Angle-Sum Theorem"),
        statement:t("$\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$ dan $\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$.","$\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$ and $\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$."),
        proof:[
          t("Rotasi sudut $\\beta$ memiliki matriks $R_\\beta=\\begin{pmatrix}\\cos\\beta&-\\sin\\beta\\\\\\sin\\beta&\\cos\\beta\\end{pmatrix}$.","Rotation by angle $\\beta$ has matrix $R_\\beta=\\begin{pmatrix}\\cos\\beta&-\\sin\\beta\\\\\\sin\\beta&\\cos\\beta\\end{pmatrix}$."),
          t("Titik sudut $\\alpha$ pada lingkaran satuan adalah $v_\\alpha=(\\cos\\alpha,\\sin\\alpha)^T$.","The unit-circle point at angle $\\alpha$ is $v_\\alpha=(\\cos\\alpha,\\sin\\alpha)^T$."),
          t("Mengalikan $R_\\beta v_\\alpha$ memberi koordinat $\\bigl(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta,\\;\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\bigr)$.","Multiplying $R_\\beta v_\\alpha$ gives coordinates $\\bigl(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta,\\;\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\bigr)$."),
          t("Hasil rotasi adalah titik dengan sudut $\\alpha+\\beta$, jadi koordinat tersebut sama dengan $(\\cos(\\alpha+\\beta),\\sin(\\alpha+\\beta))$.","The rotated point corresponds to angle $\\alpha+\\beta$, so these coordinates equal $(\\cos(\\alpha+\\beta),\\sin(\\alpha+\\beta))$.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat Sudut Ganda","Double-Angle Corollary"),
        statement:t("$\\sin2x=2\\sin x\\cos x$ dan $\\cos2x=\\cos^2x-\\sin^2x$.","$\\sin2x=2\\sin x\\cos x$ and $\\cos2x=\\cos^2x-\\sin^2x$."),
        proof:[
          t("Ambil $\\alpha=\\beta=x$ pada Teorema Rumus Jumlah Sudut.","Set $\\alpha=\\beta=x$ in the angle-sum theorem."),
          t("Kedua identitas langsung diperoleh setelah menyederhanakan suku yang sama.","Both identities follow immediately after combining identical terms.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Persamaan Trigonometri","Detailed Example: Trigonometric Equation"),
        problem:t("Selesaikan $2\\sin x\\cos x=\\frac{\\sqrt3}{2}$ untuk $0\\le x<2\\pi$.","Solve $2\\sin x\\cos x=\\frac{\\sqrt3}{2}$ for $0\\le x<2\\pi$."),
        strategy:t("Gunakan identitas sudut ganda agar persamaan berubah menjadi persamaan sinus tunggal.","Use the double-angle identity to reduce the equation to a single sine."),
        solution:[
          t("$2\\sin x\\cos x=\\sin2x$, jadi $\\sin2x=\\frac{\\sqrt3}{2}$.","$2\\sin x\\cos x=\\sin2x$, so $\\sin2x=\\frac{\\sqrt3}{2}$."),
          t("Karena $0\\le2x<4\\pi$, solusi untuk $2x$ adalah $\\frac\\pi3,\\frac{2\\pi}3,\\frac{7\\pi}3,\\frac{8\\pi}3$.","Since $0\\le2x<4\\pi$, the solutions for $2x$ are $\\frac\\pi3,\\frac{2\\pi}3,\\frac{7\\pi}3,\\frac{8\\pi}3$."),
          t("Membagi dua memberi $x=\\frac\\pi6,\\frac\\pi3,\\frac{7\\pi}6,\\frac{4\\pi}3$.","Dividing by two gives $x=\\frac\\pi6,\\frac\\pi3,\\frac{7\\pi}6,\\frac{4\\pi}3$.")
        ],
        conclusion:t("Himpunan solusi adalah $\\boxed{\\{\\frac\\pi6,\\frac\\pi3,\\frac{7\\pi}6,\\frac{4\\pi}3\\}}$.","The solution set is $\\boxed{\\{\\frac\\pi6,\\frac\\pi3,\\frac{7\\pi}6,\\frac{4\\pi}3\\}}$.")
      },
      {
        title:t("Contoh Detail: Maksimum Kombinasi Sinus-Cosinus","Detailed Example: Maximum of a Sine-Cosine Combination"),
        problem:t("Tentukan nilai maksimum $3\\sin x+4\\cos x$.","Find the maximum of $3\\sin x+4\\cos x$."),
        strategy:t("Tulis ekspresi sebagai satu sinus dengan amplitudo $R=\\sqrt{3^2+4^2}$.","Rewrite the expression as a single sine with amplitude $R=\\sqrt{3^2+4^2}$."),
        solution:[
          t("Ambil $R=5$ dan pilih $\\phi$ sehingga $5\\cos\\phi=3$ serta $5\\sin\\phi=4$.","Let $R=5$ and choose $\\phi$ so that $5\\cos\\phi=3$ and $5\\sin\\phi=4$."),
          t("$5\\sin(x+\\phi)=5\\sin x\\cos\\phi+5\\cos x\\sin\\phi=3\\sin x+4\\cos x$.","$5\\sin(x+\\phi)=5\\sin x\\cos\\phi+5\\cos x\\sin\\phi=3\\sin x+4\\cos x$."),
          t("Karena nilai maksimum sinus adalah $1$, nilai maksimum ekspresi adalah $5$.","Since sine has maximum value $1$, the expression has maximum value $5$.")
        ],
        conclusion:t("Nilai maksimum adalah $\\boxed5$.","The maximum value is $\\boxed5$.")
      }
    ]
  },

  "integral-riemann":{
    intro:t("Integral Riemann dibangun dari partisi, jumlah bawah/atas, osilasi, dan limit. Bagian formal menekankan alasan mengapa integrabilitas berlaku.","The Riemann integral is built from partitions, lower/upper sums, oscillation, and limits. This formal section emphasizes why integrability holds."),
    blocks:[
      {
        kind:"definition", title:t("Partisi dan Jumlah Darboux","Partition and Darboux Sums"),
        statement:t("Partisi $P$ dari $[a,b]$ adalah himpunan $a=x_0<x_1<\\cdots<x_n=b$. Untuk fungsi terbatas $f$, jumlah bawah dan atas didefinisikan oleh $L(f,P)=\\sum m_i\\Delta x_i$ dan $U(f,P)=\\sum M_i\\Delta x_i$, dengan $m_i=\\inf_{[x_{i-1},x_i]}f$ dan $M_i=\\sup_{[x_{i-1},x_i]}f$.","A partition $P$ of $[a,b]$ is $a=x_0<x_1<\\cdots<x_n=b$. For bounded $f$, define $L(f,P)=\\sum m_i\\Delta x_i$ and $U(f,P)=\\sum M_i\\Delta x_i$, with $m_i=\\inf_{[x_{i-1},x_i]}f$ and $M_i=\\sup_{[x_{i-1},x_i]}f$."),
        intuition:t("Jumlah bawah dan atas menjepit luas yang mungkin dari bawah dan atas.","Lower and upper sums squeeze the possible area from below and above.")
      },
      {
        kind:"lemma", title:t("Lemma Refinement Darboux","Darboux Refinement Lemma"),
        statement:t("Jika $P'$ refinement dari $P$, maka $L(f,P)\\le L(f,P')\\le U(f,P')\\le U(f,P)$.","If $P'$ refines $P$, then $L(f,P)\\le L(f,P')\\le U(f,P')\\le U(f,P)$."),
        proof:[
          t("Membagi sebuah subinterval menjadi bagian lebih kecil hanya dapat menaikkan infimum lokal atau mempertahankannya.","Splitting an interval into smaller pieces can only increase or preserve local infima."),
          t("Secara analog, supremum lokal hanya dapat turun atau tetap.","Analogously, local suprema can only decrease or remain unchanged."),
          t("Menjumlahkan kontribusi pada seluruh subinterval memberi rantai ketaksamaan yang dinyatakan.","Summing the contributions over all subintervals yields the stated inequalities.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Kriteria Darboux","Darboux Criterion Proposition"),
        statement:t("Fungsi terbatas $f:[a,b]\\to\\mathbb R$ terintegralkan Riemann jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$.","A bounded function $f:[a,b]\\to\\mathbb R$ is Riemann integrable iff for every $\\varepsilon>0$ there is a partition $P$ with $U(f,P)-L(f,P)<\\varepsilon$."),
        proof:[
          t("Jika integral bawah dan integral atas sama dengan $I$, pilih partisi yang membuat jumlah bawah lebih besar dari $I-\\varepsilon/2$ dan jumlah atas lebih kecil dari $I+\\varepsilon/2$.","If lower and upper integrals both equal $I$, choose partitions making a lower sum exceed $I-\\varepsilon/2$ and an upper sum fall below $I+\\varepsilon/2$."),
          t("Ambil common refinement kedua partisi. Lemma refinement mempertahankan kedua ketaksamaan, jadi selisihnya kurang dari $\\varepsilon$.","Take a common refinement. The refinement lemma preserves both inequalities, so the gap is below $\\varepsilon$."),
          t("Sebaliknya, jika gap dapat dibuat arbitrer kecil, supremum semua jumlah bawah dan infimum semua jumlah atas tidak dapat berbeda positif. Keduanya harus sama.","Conversely, if the gap can be arbitrarily small, the supremum of lower sums and infimum of upper sums cannot differ by a positive amount. Hence they are equal.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Kontinu Mengimplikasikan Integrabel","Continuity Implies Riemann Integrability"),
        statement:t("Setiap fungsi kontinu $f:[a,b]\\to\\mathbb R$ terintegralkan Riemann.","Every continuous function $f:[a,b]\\to\\mathbb R$ is Riemann integrable."),
        proof:[
          t("Kontinuitas pada interval kompak $[a,b]$ mengimplikasikan kontinuitas seragam.","Continuity on compact $[a,b]$ implies uniform continuity."),
          t("Diberikan $\\varepsilon>0$, pilih $\\delta>0$ sehingga $|x-y|<\\delta$ mengakibatkan $|f(x)-f(y)|<\\varepsilon/(b-a)$.","Given $\\varepsilon>0$, choose $\\delta>0$ so that $|x-y|<\\delta$ implies $|f(x)-f(y)|<\\varepsilon/(b-a)$."),
          t("Ambil partisi dengan norma lebih kecil dari $\\delta$. Pada setiap subinterval, osilasi $M_i-m_i<\\varepsilon/(b-a)$.","Choose a partition with mesh smaller than $\\delta$. On each subinterval, the oscillation satisfies $M_i-m_i<\\varepsilon/(b-a)$."),
          t("Karena itu $U(f,P)-L(f,P)=\\sum(M_i-m_i)\\Delta x_i<\\frac{\\varepsilon}{b-a}\\sum\\Delta x_i=\\varepsilon$.","Therefore $U(f,P)-L(f,P)=\\sum(M_i-m_i)\\Delta x_i<\\frac{\\varepsilon}{b-a}\\sum\\Delta x_i=\\varepsilon$."),
          t("Kriteria Darboux memberi bahwa $f$ terintegralkan Riemann.","The Darboux criterion implies that $f$ is Riemann integrable.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat: Polinomial Terintegralkan","Corollary: Polynomials Are Integrable"),
        statement:t("Setiap fungsi polinomial terintegralkan Riemann pada setiap interval tertutup terbatas.","Every polynomial is Riemann integrable on every closed bounded interval."),
        proof:[
          t("Polinomial kontinu pada seluruh $\\mathbb R$.","Polynomials are continuous on all of $\\mathbb R$."),
          t("Terapkan teorema kontinuitas pada interval tertutup yang diberikan.","Apply the continuity theorem on the given closed interval.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Membuktikan Integrabilitas $f(x)=x^2$","Detailed Example: Proving Integrability of $f(x)=x^2$"),
        problem:t("Buktikan $f(x)=x^2$ terintegralkan Riemann pada $[0,1]$ menggunakan jumlah Darboux.","Prove $f(x)=x^2$ is Riemann integrable on $[0,1]$ using Darboux sums."),
        strategy:t("Gunakan partisi seragam dan hitung langsung selisih jumlah atas dan bawah.","Use a uniform partition and compute the upper-lower gap directly."),
        solution:[
          t("Ambil $P_n=\\{0,1/n,2/n,\\ldots,1\\}$. Karena $x^2$ naik pada $[0,1]$, pada subinterval ke-$i$ diperoleh $m_i=((i-1)/n)^2$ dan $M_i=(i/n)^2$.","Take $P_n=\\{0,1/n,2/n,\\ldots,1\\}$. Since $x^2$ is increasing, on interval $i$ we have $m_i=((i-1)/n)^2$ and $M_i=(i/n)^2$."),
          t("$U-L=\\sum_{i=1}^n\\left(\\frac{i^2-(i-1)^2}{n^2}\\right)\\frac1n=\\frac1{n^3}\\sum_{i=1}^n(2i-1)$.","$U-L=\\sum_{i=1}^n\\left(\\frac{i^2-(i-1)^2}{n^2}\\right)\\frac1n=\\frac1{n^3}\\sum_{i=1}^n(2i-1)$."),
          t("Karena $\\sum_{i=1}^n(2i-1)=n^2$, diperoleh $U-L=1/n$.","Since $\\sum_{i=1}^n(2i-1)=n^2$, we get $U-L=1/n$."),
          t("Untuk $n>1/\\varepsilon$, gap kurang dari $\\varepsilon$. Kriteria Darboux selesai diterapkan.","For $n>1/\\varepsilon$, the gap is below $\\varepsilon$. The Darboux criterion applies.")
        ],
        conclusion:t("$x^2$ terintegralkan Riemann pada $[0,1]$.","$x^2$ is Riemann integrable on $[0,1]$.")
      },
      {
        title:t("Contoh Detail: Estimasi Integral","Detailed Example: Integral Estimate"),
        problem:t("Jika $|f(x)|\\le3$ pada $[2,7]$, tunjukkan $\\left|\\int_2^7f(x)\\,dx\\right|\\le15$.","If $|f(x)|\\le3$ on $[2,7]$, show $\\left|\\int_2^7f(x)\\,dx\\right|\\le15$."),
        strategy:t("Gunakan ketaksamaan $|\\int f|\\le\\int|f|$ dan batas seragam fungsi.","Use $|\\int f|\\le\\int|f|$ and the uniform bound on the function."),
        solution:[
          t("$\\left|\\int_2^7f\\right|\\le\\int_2^7|f(x)|\\,dx$.","$\\left|\\int_2^7f\\right|\\le\\int_2^7|f(x)|\\,dx$."),
          t("Karena $|f(x)|\\le3$, monotonisitas memberi $\\int_2^7|f(x)|\\,dx\\le\\int_2^73\\,dx$.","Since $|f(x)|\\le3$, monotonicity gives $\\int_2^7|f(x)|\\,dx\\le\\int_2^73\\,dx$."),
          t("Integral konstan tersebut adalah $3(7-2)=15$.","The constant integral equals $3(7-2)=15$.")
        ],
        conclusion:t("Diperoleh batas $\\boxed{15}$.","The bound is $\\boxed{15}$.")
      }
    ]
  },

  "prinsip-pigeonhole":{
    intro:t("Prinsip pigeonhole sederhana tetapi sangat kuat. Bagian formal membedakan versi dasar, versi umum, dan konsekuensi kombinatorialnya.","The pigeonhole principle is simple but powerful. This formal section distinguishes the basic principle, its generalized form, and key combinatorial consequences."),
    blocks:[
      {
        kind:"definition", title:t("Objek dan Kotak","Objects and Boxes"),
        statement:t("Dalam penerapan pigeonhole, objek adalah elemen yang diklasifikasikan, sedangkan kotak adalah kelas tempat setiap objek ditempatkan tepat satu kali.","In pigeonhole arguments, objects are the elements being classified, while boxes are the classes into which each object is placed exactly once."),
        intuition:t("Kunci soal bukan rumus, tetapi memilih klasifikasi yang membuat tabrakan objek bermakna.","The key is not the formula but choosing a classification whose collisions have useful meaning.")
      },
      {
        kind:"lemma", title:t("Lemma Rata-Rata Diskrit","Discrete Averaging Lemma"),
        statement:t("Jika $N$ objek dibagi ke $k$ kotak, ada sebuah kotak yang berisi sedikitnya $\\lceil N/k\\rceil$ objek.","If $N$ objects are distributed among $k$ boxes, some box contains at least $\\lceil N/k\\rceil$ objects."),
        proof:[
          t("Andaikan setiap kotak berisi paling banyak $\\lceil N/k\\rceil-1$ objek.","Assume every box contains at most $\\lceil N/k\\rceil-1$ objects."),
          t("Total objek paling banyak $k(\\lceil N/k\\rceil-1)<N$, bertentangan dengan adanya $N$ objek.","Then the total is at most $k(\\lceil N/k\\rceil-1)<N$, contradicting the existence of $N$ objects.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Tabrakan Residu","Residue-Collision Proposition"),
        statement:t("Di antara $m+1$ bilangan bulat selalu terdapat dua bilangan yang kongruen modulo $m$.","Among any $m+1$ integers, two are congruent modulo $m$."),
        proof:[
          t("Setiap bilangan bulat masuk ke tepat satu dari $m$ kelas residu modulo $m$.","Each integer belongs to exactly one of the $m$ residue classes modulo $m$."),
          t("Dengan $m+1$ objek dan $m$ kotak, prinsip pigeonhole menjamin dua objek berada pada kelas yang sama.","With $m+1$ objects and $m$ boxes, the pigeonhole principle guarantees two objects share a residue class.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Blok Berurutan Habis Dibagi","Consecutive-Block Divisibility Theorem"),
        statement:t("Untuk bilangan bulat $a_1,\\ldots,a_n$, terdapat blok berurutan tak kosong yang jumlahnya habis dibagi $n$.","For integers $a_1,\\ldots,a_n$, there exists a nonempty consecutive block whose sum is divisible by $n$."),
        proof:[
          t("Definisikan jumlah parsial $S_k=a_1+\\cdots+a_k$ untuk $1\\le k\\le n$.","Define partial sums $S_k=a_1+\\cdots+a_k$ for $1\\le k\\le n$."),
          t("Jika ada $S_k\\equiv0\\pmod n$, blok $a_1+\\cdots+a_k$ sudah memenuhi.","If some $S_k\\equiv0\\pmod n$, the block $a_1+\\cdots+a_k$ works."),
          t("Jika tidak ada, seluruh $S_k$ masuk ke $n-1$ kelas residu tak nol. Dua dari $n$ jumlah parsial mempunyai residu sama.","Otherwise all $S_k$ lie in the $n-1$ nonzero residue classes. Two of the $n$ partial sums share a residue."),
          t("Untuk $i<j$ dengan $S_i\\equiv S_j$, selisih $S_j-S_i=a_{i+1}+\\cdots+a_j$ habis dibagi $n$.","For $i<j$ with $S_i\\equiv S_j$, the difference $S_j-S_i=a_{i+1}+\\cdots+a_j$ is divisible by $n$.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat Jarak pada Interval","Interval-Distance Corollary"),
        statement:t("Di antara $n+1$ titik pada interval panjang $L$, ada dua titik berjarak paling banyak $L/n$.","Among $n+1$ points in an interval of length $L$, two are at distance at most $L/n$."),
        proof:[
          t("Bagi interval menjadi $n$ subinterval dengan panjang $L/n$.","Partition the interval into $n$ subintervals of length $L/n$."),
          t("Dua dari $n+1$ titik berada pada subinterval yang sama, jadi jarak keduanya tidak melebihi panjang subinterval.","Two of the $n+1$ points lie in the same subinterval, so their distance does not exceed its length.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Pigeonhole pada Kelas Residu","Detailed Example: Pigeonhole on Residue Classes"),
        problem:t("Buktikan di antara $17$ bilangan bulat terdapat dua yang selisihnya habis dibagi $16$.","Prove that among $17$ integers, two have difference divisible by $16$."),
        strategy:t("Gunakan kelas residu modulo $16$ sebagai kotak.","Use residue classes modulo $16$ as boxes."),
        solution:[
          t("Terdapat tepat $16$ kelas residu: $0,1,\\ldots,15$.","There are exactly $16$ residue classes: $0,1,\\ldots,15$."),
          t("$17$ bilangan merupakan objek yang ditempatkan ke $16$ kelas menurut sisanya.","The $17$ integers are objects placed into $16$ classes according to their remainders."),
          t("Dua bilangan memiliki sisa sama. Selisih keduanya kongruen $0$ modulo $16$.","Two integers share the same remainder, so their difference is congruent to $0$ modulo $16$.")
        ],
        conclusion:t("Selisih sepasang bilangan pasti merupakan kelipatan $16$.","Some pair has difference divisible by $16$.")
      },
      {
        title:t("Contoh Detail: Minimum Isi Kotak","Detailed Example: Guaranteed Occupancy"),
        problem:t("$100$ objek dimasukkan ke $9$ kotak. Tentukan isi minimum yang pasti dimiliki sedikitnya satu kotak.","$100$ objects are placed into $9$ boxes. Find the minimum occupancy guaranteed in some box."),
        strategy:t("Gunakan bentuk umum $\\lceil N/k\\rceil$.","Use the generalized bound $\\lceil N/k\\rceil$."),
        solution:[
          t("$\\lceil100/9\\rceil=\\lceil11.11\\ldots\\rceil=12$.","$\\lceil100/9\\rceil=\\lceil11.11\\ldots\\rceil=12$."),
          t("Jika setiap kotak berisi paling banyak $11$, total objek paling banyak $99$, kontradiksi.","If every box contained at most $11$, the total would be at most $99$, a contradiction.")
        ],
        conclusion:t("Sedikitnya satu kotak berisi paling sedikit $\\boxed{12}$ objek.","At least one box contains at least $\\boxed{12}$ objects.")
      }
    ]
  },

  "spektrum-graf":{
    intro:t("Spektrum graf menghubungkan struktur kombinatorial dengan aljabar linear. Definisi matriks adjacency, momen spektral, regularitas, dan walk dijadikan fondasi formal.","Graph spectra connect combinatorial structure with linear algebra. Adjacency matrices, spectral moments, regularity, and walks form the formal foundation."),
    blocks:[
      {
        kind:"definition", title:t("Spektrum Adjacency","Adjacency Spectrum"),
        statement:t("Untuk graf sederhana $G$ dengan matriks adjacency $A$, spektrum adjacency adalah multiset nilai eigen $A$, ditulis $\\operatorname{Spec}(G)=\\{\\lambda_1,\\ldots,\\lambda_n\\}$.","For a simple graph $G$ with adjacency matrix $A$, the adjacency spectrum is the multiset of eigenvalues of $A$, written $\\operatorname{Spec}(G)=\\{\\lambda_1,\\ldots,\\lambda_n\\}$."),
        intuition:t("Spektrum merangkum informasi global graf melalui invariant aljabar matriks.","The spectrum summarizes global graph information through algebraic invariants of its matrix.")
      },
      {
        kind:"lemma", title:t("Lemma Walk Matriks","Matrix-Walk Lemma"),
        statement:t("Entri $(A^k)_{ij}$ sama dengan banyak walk panjang $k$ dari simpul $i$ ke simpul $j$.","The entry $(A^k)_{ij}$ equals the number of walks of length $k$ from vertex $i$ to vertex $j$."),
        proof:[
          t("Untuk $k=1$, pernyataan tepat definisi adjacency.","For $k=1$, this is exactly the definition of adjacency."),
          t("Andaikan benar untuk $k$. Entri $(A^{k+1})_{ij}=\\sum_r(A^k)_{ir}A_{rj}$.","Assume it holds for $k$. Then $(A^{k+1})_{ij}=\\sum_r(A^k)_{ir}A_{rj}$."),
          t("Setiap suku menghitung walk panjang $k$ dari $i$ ke $r$ yang dapat diperpanjang satu sisi dari $r$ ke $j$. Menjumlahkan seluruh $r$ menghitung semua walk panjang $k+1$.","Each term counts length-$k$ walks from $i$ to $r$ that can be extended by one edge from $r$ to $j$. Summing over all $r$ counts all length-$k+1$ walks.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Jejak dan Closed Walk","Trace–Closed-Walk Proposition"),
        statement:t("$\\operatorname{tr}(A^k)$ sama dengan banyak closed walk panjang $k$ pada $G$.","$\\operatorname{tr}(A^k)$ equals the number of closed walks of length $k$ in $G$."),
        proof:[
          t("Menurut lemma sebelumnya, $(A^k)_{ii}$ menghitung walk panjang $k$ dari $i$ kembali ke $i$.","By the previous lemma, $(A^k)_{ii}$ counts length-$k$ walks from $i$ back to $i$."),
          t("Menjumlahkan seluruh entri diagonal melalui jejak menghitung seluruh closed walk berdasarkan titik awalnya.","Summing all diagonal entries via the trace counts all closed walks by starting vertex.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Momen Spektral Kedua","Second Spectral-Moment Theorem"),
        statement:t("Untuk graf sederhana $G$, $\\sum_{i=1}^n\\lambda_i^2=2|E(G)|$.","For a simple graph $G$, $\\sum_{i=1}^n\\lambda_i^2=2|E(G)|$."),
        proof:[
          t("Karena $A$ real simetris, $\\operatorname{tr}(A^2)=\\sum_i\\lambda_i^2$.","Since $A$ is real symmetric, $\\operatorname{tr}(A^2)=\\sum_i\\lambda_i^2$."),
          t("Entri diagonal $(A^2)_{ii}$ sama dengan derajat simpul $i$ karena closed walk panjang $2$ dari $i$ memilih satu tetangga lalu kembali.","The diagonal entry $(A^2)_{ii}$ equals the degree of vertex $i$ because a length-$2$ closed walk chooses one neighbor and returns."),
          t("Dengan demikian $\\operatorname{tr}(A^2)=\\sum_i\\deg(i)=2|E|$ oleh lemma jabat tangan.","Thus $\\operatorname{tr}(A^2)=\\sum_i\\deg(i)=2|E|$ by the handshaking lemma.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat untuk Graf $r$-Regular","Corollary for $r$-Regular Graphs"),
        statement:t("Jika $G$ adalah graf $r$-regular, maka $r$ merupakan nilai eigen matriks adjacency dengan eigenvektor $\\mathbf1$.","If $G$ is $r$-regular, then $r$ is an adjacency eigenvalue with eigenvector $\\mathbf1$."),
        proof:[
          t("Setiap baris matriks adjacency mempunyai jumlah $r$.","Every row of the adjacency matrix sums to $r$."),
          t("Karena itu $A\\mathbf1=r\\mathbf1$, yang tepat merupakan persamaan eigen.","Hence $A\\mathbf1=r\\mathbf1$, which is exactly the eigenvalue equation.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Menghitung Banyak Sisi dari Spektrum","Detailed Example: Recovering Edge Count from the Spectrum"),
        problem:t("Sebuah graf mempunyai spektrum $\\{3,1,0,-1,-1,-2\\}$. Tentukan banyak sisinya jika spektrum tersebut valid untuk graf sederhana.","A graph has spectrum $\\{3,1,0,-1,-1,-2\\}$. Find its number of edges if this is a valid simple-graph spectrum."),
        strategy:t("Gunakan momen spektral kedua $\\sum\\lambda_i^2=2|E|$.","Use the second spectral moment $\\sum\\lambda_i^2=2|E|$."),
        solution:[
          t("Jumlah kuadrat nilai eigen adalah $9+1+0+1+1+4=16$.","The sum of squared eigenvalues is $9+1+0+1+1+4=16$."),
          t("$2|E|=16$, jadi $|E|=8$.","$2|E|=16$, so $|E|=8$.")
        ],
        conclusion:t("Graf mempunyai $\\boxed8$ sisi.","The graph has $\\boxed8$ edges.")
      },
      {
        title:t("Contoh Detail: Spektrum Graf Lengkap","Detailed Example: Spectrum of a Complete Graph"),
        problem:t("Tentukan spektrum adjacency $K_n$.","Determine the adjacency spectrum of $K_n$."),
        strategy:t("Gunakan $A=J-I$ dan dekomposisi ruang menjadi span vektor semua-satu serta komplemen ortogonalnya.","Use $A=J-I$ and decompose the space into the all-ones direction and its orthogonal complement."),
        solution:[
          t("$J\\mathbf1=n\\mathbf1$, jadi $(J-I)\\mathbf1=(n-1)\\mathbf1$. Nilai eigen $n-1$ muncul sekali.","$J\\mathbf1=n\\mathbf1$, so $(J-I)\\mathbf1=(n-1)\\mathbf1$. Thus $n-1$ is an eigenvalue once."),
          t("Jika $v\\perp\\mathbf1$, jumlah komponen $v$ nol dan $Jv=0$. Karena itu $(J-I)v=-v$.","If $v\\perp\\mathbf1$, the components sum to zero and $Jv=0$. Hence $(J-I)v=-v$."),
          t("Subruang $\\mathbf1^\\perp$ berdimensi $n-1$, jadi $-1$ mempunyai multiplicity $n-1$.","The space $\\mathbf1^\\perp$ has dimension $n-1$, so $-1$ has multiplicity $n-1$.")
        ],
        conclusion:t("$\\operatorname{Spec}(K_n)=\\{n-1,(-1)^{(n-1)}\\}$.","$\\operatorname{Spec}(K_n)=\\{n-1,(-1)^{(n-1)}\\}$.")
      }
    ]
  },

  "teori-bilangan-olimpiade-smp":{
    intro:t("Teori bilangan olimpiade dibangun dari keterbagian, FPB, kongruensi, identitas Bézout, dan persamaan Diofantin. Hasil formal dipakai sebagai alat problem solving.","Olympiad number theory is built from divisibility, gcd, congruences, Bézout's identity, and Diophantine equations. Formal results become problem-solving tools."),
    blocks:[
      {
        kind:"definition", title:t("Kongruensi Modulo $m$","Congruence Modulo $m$"),
        statement:t("Untuk $m\\ge2$, $a\\equiv b\\pmod m$ berarti $m\\mid(a-b)$.","For $m\\ge2$, $a\\equiv b\\pmod m$ means $m\\mid(a-b)$."),
        intuition:t("Dua bilangan kongruen modulo $m$ mempunyai sisa yang sama saat dibagi $m$.","Two numbers congruent modulo $m$ have the same remainder upon division by $m$.")
      },
      {
        kind:"lemma", title:t("Lemma Kestabilan Kongruensi","Congruence Stability Lemma"),
        statement:t("Jika $a\\equiv b\\pmod m$ dan $c\\equiv d\\pmod m$, maka $a+c\\equiv b+d\\pmod m$ dan $ac\\equiv bd\\pmod m$.","If $a\\equiv b\\pmod m$ and $c\\equiv d\\pmod m$, then $a+c\\equiv b+d\\pmod m$ and $ac\\equiv bd\\pmod m$."),
        proof:[
          t("Dari asumsi, $m$ membagi $a-b$ dan $c-d$. Karena itu $m$ membagi $(a+c)-(b+d)$.","The assumptions imply $m$ divides $a-b$ and $c-d$, hence it divides $(a+c)-(b+d)$."),
          t("Selain itu $ac-bd=a(c-d)+d(a-b)$, dan kedua suku di ruas kanan habis dibagi $m$.","Also $ac-bd=a(c-d)+d(a-b)$, and both terms on the right are divisible by $m$.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Bézout","Bézout Proposition"),
        statement:t("Untuk $a,b$ tidak keduanya nol, terdapat $x,y\\in\\mathbb Z$ sehingga $ax+by=\\gcd(a,b)$.","For integers $a,b$ not both zero, there exist $x,y\\in\\mathbb Z$ such that $ax+by=\\gcd(a,b)$."),
        proof:[
          t("Algoritma Euclid menulis FPB sebagai sisa tak nol terakhir.","The Euclidean algorithm expresses the gcd as the last nonzero remainder."),
          t("Substitusi balik setiap persamaan pembagian mengekspresikan sisa tersebut sebagai kombinasi linear dari $a$ dan $b$.","Back-substitution through the division equations expresses that remainder as an integer linear combination of $a$ and $b$.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Solvabilitas Diofantin Linear","Linear Diophantine Solvability Theorem"),
        statement:t("Persamaan $ax+by=c$ mempunyai solusi bilangan bulat jika dan hanya jika $\\gcd(a,b)\\mid c$.","The equation $ax+by=c$ has an integer solution iff $\\gcd(a,b)\\mid c$."),
        proof:[
          t("Jika solusi ada, setiap pembagi bersama $a$ dan $b$ membagi $ax+by=c$, khususnya FPB membagi $c$.","If a solution exists, every common divisor of $a$ and $b$ divides $ax+by=c$, so in particular the gcd divides $c$."),
          t("Sebaliknya, ambil $d=\\gcd(a,b)$. Bézout memberi $au+bv=d$.","Conversely, let $d=\\gcd(a,b)$. Bézout gives $au+bv=d$."),
          t("Jika $c=qd$, kalikan identitas tersebut dengan $q$ untuk memperoleh $a(qu)+b(qv)=c$.","If $c=qd$, multiply the identity by $q$ to obtain $a(qu)+b(qv)=c$.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat: Invers Modular","Corollary: Modular Inverse"),
        statement:t("$a$ mempunyai invers modulo $m$ jika dan hanya jika $\\gcd(a,m)=1$.","$a$ has a multiplicative inverse modulo $m$ iff $\\gcd(a,m)=1$."),
        proof:[
          t("Invers modulo $m$ berarti ada $x$ dengan $ax\\equiv1\\pmod m$, ekuivalen dengan $ax+my=1$ untuk suatu $y\\in\\mathbb Z$.","An inverse modulo $m$ means there is $x$ with $ax\\equiv1\\pmod m$, equivalent to $ax+my=1$ for some integer $y$."),
          t("Teorema Diofantin menyatakan persamaan tersebut dapat diselesaikan tepat ketika $\\gcd(a,m)\\mid1$, yakni FPB sama dengan $1$.","The Diophantine theorem says this is solvable exactly when $\\gcd(a,m)\\mid1$, i.e. the gcd is $1$.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Persamaan Diofantin","Detailed Example: Diophantine Equation"),
        problem:t("Cari seluruh solusi bilangan bulat dari $18x+30y=6$.","Find all integer solutions to $18x+30y=6$."),
        strategy:t("Bagi dengan FPB lalu cari satu solusi awal dan bentuk solusi umum.","Divide by the gcd, find one particular solution, then write the general family."),
        solution:[
          t("$\\gcd(18,30)=6$, jadi persamaan menjadi $3x+5y=1$.","$\\gcd(18,30)=6$, so the equation reduces to $3x+5y=1$."),
          t("Satu solusi adalah $x=2,y=-1$ karena $6-5=1$.","One solution is $x=2,y=-1$ because $6-5=1$."),
          t("Solusi umum untuk bentuk tereduksi adalah $x=2+5t$ dan $y=-1-3t$, $t\\in\\mathbb Z$.","The general solution is $x=2+5t$, $y=-1-3t$, $t\\in\\mathbb Z$.")
        ],
        conclusion:t("$\\boxed{x=2+5t,\\ y=-1-3t}$ untuk $t\\in\\mathbb Z$.","$\\boxed{x=2+5t,\\ y=-1-3t}$ for $t\\in\\mathbb Z$.")
      },
      {
        title:t("Contoh Detail: Invers Modular","Detailed Example: Modular Inverse"),
        problem:t("Tentukan invers $17$ modulo $43$.","Find the inverse of $17$ modulo $43$."),
        strategy:t("Gunakan algoritma Euclid diperluas untuk menulis $1$ sebagai kombinasi linear $17$ dan $43$.","Use the extended Euclidean algorithm to express $1$ as a linear combination of $17$ and $43$."),
        solution:[
          t("$43=2(17)+9$, $17=1(9)+8$, dan $9=1(8)+1$.","$43=2(17)+9$, $17=1(9)+8$, and $9=1(8)+1$."),
          t("$1=9-8=9-(17-9)=2(9)-17=2(43-2(17))-17=2(43)-5(17)$.","$1=9-8=9-(17-9)=2(9)-17=2(43-2(17))-17=2(43)-5(17)$."),
          t("Jadi $-5(17)\\equiv1\\pmod{43}$, sehingga inversnya kongruen dengan $-5\\equiv38$.","Thus $-5(17)\\equiv1\\pmod{43}$, so the inverse is $-5\\equiv38$.")
        ],
        conclusion:t("Invers modularnya adalah $\\boxed{38}$.","The modular inverse is $\\boxed{38}$.")
      }
    ]
  },

  "kombinatorika-olimpiade-sma":{
    intro:t("Kombinatorika olimpiade menekankan counting yang dapat dibuktikan, prinsip bijeksi, double counting, pigeonhole, dan struktur graf. Setiap formula harus mempunyai alasan kombinatorial.","Olympiad combinatorics emphasizes provable counting, bijections, double counting, pigeonhole, and graph structure. Every formula should have a combinatorial reason."),
    blocks:[
      {
        kind:"definition", title:t("Koefisien Binomial","Binomial Coefficient"),
        statement:t("$\\binom nk$ adalah banyak cara memilih $k$ elemen dari himpunan berukuran $n$ tanpa memperhatikan urutan.","$\\binom nk$ is the number of ways to choose $k$ elements from an $n$-element set without regard to order."),
        intuition:t("Kombinasi menghitung subset, bukan urutan.","Binomial coefficients count subsets, not arrangements.")
      },
      {
        kind:"lemma", title:t("Lemma Pascal","Pascal Lemma"),
        statement:t("$\\binom nk=\\binom{n-1}{k}+\\binom{n-1}{k-1}$.","$\\binom nk=\\binom{n-1}{k}+\\binom{n-1}{k-1}$."),
        proof:[
          t("Fix satu elemen khusus $x$ dari himpunan $n$ elemen.","Fix one distinguished element $x$ in the $n$-element set."),
          t("Subset berukuran $k$ terbagi menjadi dua kelas terpisah: tidak memuat $x$, sebanyak $\\binom{n-1}{k}$, atau memuat $x$, sebanyak $\\binom{n-1}{k-1}$.","The $k$-subsets split into two disjoint classes: those not containing $x$, counted by $\\binom{n-1}{k}$, and those containing $x$, counted by $\\binom{n-1}{k-1}$."),
          t("Menjumlahkan kedua kelas memberi identitas.","Adding the two classes gives the identity.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Vandermonde","Vandermonde Proposition"),
        statement:t("$\\displaystyle \\sum_k\\binom rk\\binom s{n-k}=\\binom{r+s}{n}$.","$\\displaystyle \\sum_k\\binom rk\\binom s{n-k}=\\binom{r+s}{n}$."),
        proof:[
          t("Ambil dua kelompok terpisah berukuran $r$ dan $s$.","Take two disjoint groups of sizes $r$ and $s$."),
          t("Ruas kanan menghitung seluruh cara memilih $n$ elemen dari gabungan kedua kelompok.","The right side counts all ways to choose $n$ elements from their union."),
          t("Ruas kiri mengklasifikasikan pilihan menurut banyaknya $k$ elemen yang diambil dari kelompok pertama dan $n-k$ dari kelompok kedua.","The left side classifies each choice by taking $k$ elements from the first group and $n-k$ from the second."),
          t("Kedua cara menghitung himpunan objek yang sama.","Both sides count the same set of objects.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Inklusi-Eksklusi Dua Himpunan","Two-Set Inclusion–Exclusion Theorem"),
        statement:t("$|A\\cup B|=|A|+|B|-|A\\cap B|$.","$|A\\cup B|=|A|+|B|-|A\\cap B|$."),
        proof:[
          t("$|A|+|B|$ menghitung setiap elemen $A\\cap B$ dua kali.","$|A|+|B|$ counts every element of $A\\cap B$ twice."),
          t("Mengurangi $|A\\cap B|$ satu kali memperbaiki penghitungan ganda dan menyisakan setiap elemen union tepat sekali.","Subtracting $|A\\cap B|$ once corrects the double count, leaving each union element counted exactly once.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat Jumlah Derajat","Degree-Sum Corollary"),
        statement:t("Banyak simpul berderajat ganjil pada graf hingga selalu genap.","Every finite graph has an even number of odd-degree vertices."),
        proof:[
          t("Lemma jabat tangan memberi $\\sum_v\\deg(v)=2|E|$, sebuah bilangan genap.","The handshaking lemma gives $\\sum_v\\deg(v)=2|E|$, an even integer."),
          t("Kontribusi simpul berderajat genap tetap genap. Agar total tetap genap, jumlah banyak bilangan ganjil yang dijumlahkan harus genap.","The contribution from even-degree vertices is even. For the total to stay even, the number of odd terms being added must be even.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Double Counting","Detailed Example: Double Counting"),
        problem:t("Buktikan $\\sum_{k=0}^n k\\binom nk=n2^{n-1}$.","Prove $\\sum_{k=0}^n k\\binom nk=n2^{n-1}$."),
        strategy:t("Hitung pasangan $(S,x)$ dengan $S\\subseteq[n]$ dan $x\\in S$ melalui dua cara.","Count pairs $(S,x)$ with $S\\subseteq[n]$ and $x\\in S$ in two ways."),
        solution:[
          t("Jika $|S|=k$, ada $\\binom nk$ pilihan untuk $S$ dan $k$ pilihan untuk $x\\in S$. Menjumlahkan terhadap $k$ memberi ruas kiri.","If $|S|=k$, there are $\\binom nk$ choices for $S$ and $k$ choices for $x\\in S$. Summing over $k$ gives the left side."),
          t("Jika memilih $x$ terlebih dahulu, ada $n$ pilihan. Setelah $x$ ditetapkan, setiap elemen lain bebas masuk atau tidak ke $S$, memberi $2^{n-1}$ pilihan.","Choose $x$ first: there are $n$ choices. With $x$ fixed, each other element may be in or out of $S$, giving $2^{n-1}$ choices."),
          t("Kedua penghitungan menghitung pasangan yang sama, jadi identitas terbukti.","Both counts enumerate the same pairs, proving the identity.")
        ],
        conclusion:t("$\\boxed{\\sum_{k=0}^n k\\binom nk=n2^{n-1}}$.","$\\boxed{\\sum_{k=0}^n k\\binom nk=n2^{n-1}}$.")
      },
      {
        title:t("Contoh Detail: Inklusi-Eksklusi","Detailed Example: Inclusion–Exclusion"),
        problem:t("Dari bilangan $1$ sampai $100$, berapa banyak yang habis dibagi $2$ atau $5$?","Among integers from $1$ to $100$, how many are divisible by $2$ or $5$?"),
        strategy:t("Hitung kelipatan $2$, kelipatan $5$, lalu koreksi irisan kelipatan $10$.","Count multiples of $2$, multiples of $5$, then correct the overlap of multiples of $10$."),
        solution:[
          t("Kelipatan $2$: $\\lfloor100/2\\rfloor=50$.","Multiples of $2$: $\\lfloor100/2\\rfloor=50$."),
          t("Kelipatan $5$: $20$. Kelipatan keduanya adalah kelipatan $10$: $10$.","Multiples of $5$: $20$. Multiples of both are multiples of $10$: $10$."),
          t("Inklusi-eksklusi memberi $50+20-10=60$.","Inclusion–exclusion gives $50+20-10=60$.")
        ],
        conclusion:t("Ada $\\boxed{60}$ bilangan.","There are $\\boxed{60}$ integers.")
      }
    ]
  },

  "aljabar-linear-onmipa":{
    intro:t("Aljabar Linear ON-MIPA disusun secara formal dari subruang, basis, transformasi linear, rank-nullity, eigenvalue, polinomial minimal, dan subruang invariant. Pembuktian menekankan argumen dimensi dan struktur operator.","ON-MIPA Linear Algebra is organized formally around subspaces, bases, linear maps, rank-nullity, eigenvalues, minimal polynomials, and invariant subspaces. Proofs emphasize dimension and operator structure."),
    blocks:[
      {
        kind:"definition", title:t("Subruang Invariant","Invariant Subspace"),
        statement:t("Subruang $U\\subseteq V$ disebut invariant terhadap operator linear $T:V\\to V$ apabila $T(U)\\subseteq U$.","A subspace $U\\subseteq V$ is invariant under $T:V\\to V$ if $T(U)\\subseteq U$."),
        intuition:t("Sekali vektor berada di $U$, penerapan $T$ tidak membawanya keluar dari $U$.","Once a vector lies in $U$, applying $T$ never moves it outside $U$.")
      },
      {
        kind:"lemma", title:t("Lemma Kernel dan Image adalah Subruang","Kernel and Image Lemma"),
        statement:t("Untuk transformasi linear $T:V\\to W$, $\\ker T$ adalah subruang $V$ dan $\\operatorname{im}T$ adalah subruang $W$.","For a linear map $T:V\\to W$, $\\ker T$ is a subspace of $V$ and $\\operatorname{im}T$ is a subspace of $W$."),
        proof:[
          t("$0\\in\\ker T$ karena $T0=0$. Jika $u,v\\in\\ker T$ dan $a,b$ skalar, $T(au+bv)=aTu+bTv=0$.","$0\\in\\ker T$ because $T0=0$. If $u,v\\in\\ker T$ and $a,b$ are scalars, then $T(au+bv)=aTu+bTv=0$."),
          t("Untuk image, jika $x=Tu$ dan $y=Tv$, maka $ax+by=T(au+bv)$ juga berada di image.","For the image, if $x=Tu$ and $y=Tv$, then $ax+by=T(au+bv)$ also lies in the image.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Idempoten","Idempotent Proposition"),
        statement:t("Jika $T^2=T$, maka $V=\\ker T\\oplus\\operatorname{im}T$.","If $T^2=T$, then $V=\\ker T\\oplus\\operatorname{im}T$."),
        proof:[
          t("Untuk sebarang $v\\in V$, tulis $v=(v-Tv)+Tv$.","For any $v\\in V$, write $v=(v-Tv)+Tv$."),
          t("$T(v-Tv)=Tv-T^2v=0$, jadi $v-Tv\\in\\ker T$, sedangkan $Tv\\in\\operatorname{im}T$.","$T(v-Tv)=Tv-T^2v=0$, so $v-Tv\\in\\ker T$, while $Tv\\in\\operatorname{im}T$."),
          t("Jika $w\\in\\ker T\\cap\\operatorname{im}T$, tulis $w=Tu$. Karena $Tw=0$ dan $T^2u=Tu$, diperoleh $w=Tw=0$.","If $w\\in\\ker T\\cap\\operatorname{im}T$, write $w=Tu$. Since $Tw=0$ and $T^2u=Tu$, we obtain $w=Tw=0$.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Rank–Nullity","Rank–Nullity Theorem"),
        statement:t("Jika $V$ berdimensi hingga dan $T:V\\to W$ linear, maka $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$.","If $V$ is finite-dimensional and $T:V\\to W$ is linear, then $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$."),
        proof:[
          t("Ambil basis $v_1,\\ldots,v_k$ untuk $\\ker T$.","Take a basis $v_1,\\ldots,v_k$ for $\\ker T$."),
          t("Perluas menjadi basis $v_1,\\ldots,v_k,v_{k+1},\\ldots,v_n$ untuk $V$.","Extend it to a basis $v_1,\\ldots,v_k,v_{k+1},\\ldots,v_n$ for $V$."),
          t("Tunjukkan $Tv_{k+1},\\ldots,Tv_n$ merentang image: setiap $Tv$ berasal dari ekspansi basis, dan komponen kernel hilang.","The vectors $Tv_{k+1},\\ldots,Tv_n$ span the image because any $Tv$ comes from a basis expansion and the kernel components vanish."),
          t("Tunjukkan keluarga tersebut bebas linear: kombinasi linear yang dipetakan ke nol menghasilkan kombinasi vektor tambahan berada di kernel, yang bertentangan dengan kebebasan basis penuh kecuali semua koefisien nol.","They are linearly independent because a linear combination mapping to zero would place a combination of the added basis vectors in the kernel, contradicting independence of the full basis unless all coefficients vanish."),
          t("Jadi $\\dim\\operatorname{im}T=n-k$, dan $n=k+(n-k)$.","Thus $\\dim\\operatorname{im}T=n-k$, and $n=k+(n-k)$.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat Injektif–Surjektif untuk Endomorfisme","Injective–Surjective Corollary for Endomorphisms"),
        statement:t("Jika $T:V\\to V$ linear dan $V$ berdimensi hingga, maka $T$ injektif jika dan hanya jika $T$ surjektif.","If $T:V\\to V$ is linear on finite-dimensional $V$, then $T$ is injective iff it is surjective."),
        proof:[
          t("$T$ injektif ekuivalen dengan $\\dim\\ker T=0$. Rank-nullity memberi $\\dim\\operatorname{im}T=\\dim V$, jadi image sama dengan $V$.","Injectivity is equivalent to $\\dim\\ker T=0$. Rank-nullity then gives $\\dim\\operatorname{im}T=\\dim V$, so the image equals $V$."),
          t("Arah sebaliknya diperoleh dengan argumen yang sama dari rank penuh.","The converse follows by the same full-rank argument.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Rank–Nullity","Detailed Example: Rank–Nullity"),
        problem:t("Diberikan $T:\\mathbb R^4\\to\\mathbb R^3$ dengan matriks $A=\\begin{pmatrix}1&0&1&2\\\\0&1&1&1\\\\1&1&2&3\\end{pmatrix}$. Tentukan rank dan nullity.","Let $T:\\mathbb R^4\\to\\mathbb R^3$ have matrix $A=\\begin{pmatrix}1&0&1&2\\\\0&1&1&1\\\\1&1&2&3\\end{pmatrix}$. Find its rank and nullity."),
        strategy:t("Lakukan reduksi baris, hitung pivot, lalu gunakan rank-nullity.","Row-reduce, count pivots, then use rank-nullity."),
        solution:[
          t("Baris ketiga sama dengan jumlah baris pertama dan kedua, jadi tidak menambah pivot.","The third row equals the sum of the first two and adds no new pivot."),
          t("Dua baris pertama bebas linear, jadi rank $A=2$.","The first two rows are linearly independent, so $\\operatorname{rank}A=2$."),
          t("Domain berdimensi $4$, sehingga nullity $=4-2=2$.","The domain has dimension $4$, hence nullity $=4-2=2$.")
        ],
        conclusion:t("$\\boxed{\\operatorname{rank}T=2}$ dan $\\boxed{\\operatorname{nullity}T=2}$.","$\\boxed{\\operatorname{rank}T=2}$ and $\\boxed{\\operatorname{nullity}T=2}$.")
      },
      {
        title:t("Contoh Detail: Operator Idempoten","Detailed Example: Idempotent Operator"),
        problem:t("Misalkan $P$ memenuhi $P^2=P$. Buktikan satu-satunya nilai eigen yang mungkin adalah $0$ dan $1$.","Suppose $P^2=P$. Prove the only possible eigenvalues are $0$ and $1$."),
        strategy:t("Terapkan persamaan operator pada sebuah eigenvektor.","Apply the operator identity to an eigenvector."),
        solution:[
          t("Ambil eigenvektor tak nol $v$ dengan $Pv=\\lambda v$.","Take nonzero eigenvector $v$ with $Pv=\\lambda v$."),
          t("$P^2v=P(\\lambda v)=\\lambda Pv=\\lambda^2v$.","$P^2v=P(\\lambda v)=\\lambda Pv=\\lambda^2v$."),
          t("Karena $P^2=P$, juga $P^2v=Pv=\\lambda v$.","Since $P^2=P$, also $P^2v=Pv=\\lambda v$."),
          t("Jadi $(\\lambda^2-\\lambda)v=0$. Karena $v\\neq0$, $\\lambda(\\lambda-1)=0$.","Thus $(\\lambda^2-\\lambda)v=0$. Since $v\\neq0$, $\\lambda(\\lambda-1)=0$.")
        ],
        conclusion:t("$\\boxed{\\lambda\\in\\{0,1\\}}$.","$\\boxed{\\lambda\\in\\{0,1\\}}$.")
      }
    ]
  },

  "analisis-real-onmipa":{
    intro:t("Analisis Real ON-MIPA menekankan definisi berbasis kuantor, kelengkapan, compactness, kontinuitas, konvergensi barisan/fungsi, dan pembuktian epsilon. Setiap hasil dibaca dari hipotesis ke kesimpulan secara ketat.","ON-MIPA Real Analysis emphasizes quantified definitions, completeness, compactness, continuity, sequence/function convergence, and epsilon proofs. Each result is read strictly from hypotheses to conclusions."),
    blocks:[
      {
        kind:"definition", title:t("Konvergensi Barisan","Sequence Convergence"),
        statement:t("Barisan $(a_n)$ konvergen ke $L$ jika untuk setiap $\\varepsilon>0$ terdapat $N\\in\\mathbb N$ sehingga $n\\ge N$ mengakibatkan $|a_n-L|<\\varepsilon$.","A sequence $(a_n)$ converges to $L$ if for every $\\varepsilon>0$ there exists $N\\in\\mathbb N$ such that $n\\ge N$ implies $|a_n-L|<\\varepsilon$."),
        intuition:t("Setelah indeks cukup besar, semua suku berada di dalam setiap persekitaran sekecil apa pun dari $L$.","After sufficiently large indices, all terms lie in every arbitrarily small neighborhood of $L$.")
      },
      {
        kind:"lemma", title:t("Lemma Keunikan Limit","Uniqueness of Limit Lemma"),
        statement:t("Jika $a_n\\to L$ dan $a_n\\to M$, maka $L=M$.","If $a_n\\to L$ and $a_n\\to M$, then $L=M$."),
        proof:[
          t("Andaikan $L\\neq M$ dan ambil $\\varepsilon=|L-M|/3>0$.","Assume $L\\neq M$ and take $\\varepsilon=|L-M|/3>0$."),
          t("Untuk $n$ cukup besar, sekaligus berlaku $|a_n-L|<\\varepsilon$ dan $|a_n-M|<\\varepsilon$.","For sufficiently large $n$, both $|a_n-L|<\\varepsilon$ and $|a_n-M|<\\varepsilon$ hold."),
          t("Ketaksamaan segitiga memberi $|L-M|\\le|L-a_n|+|a_n-M|<2\\varepsilon=2|L-M|/3$, kontradiksi.","The triangle inequality gives $|L-M|\\le|L-a_n|+|a_n-M|<2\\varepsilon=2|L-M|/3$, a contradiction.")
        ]
      },
      {
        kind:"proposition", title:t("Proposisi Barisan Konvergen Terbatas","Convergent Sequences Are Bounded"),
        statement:t("Setiap barisan real yang konvergen adalah terbatas.","Every convergent real sequence is bounded."),
        proof:[
          t("Jika $a_n\\to L$, ambil $\\varepsilon=1$. Ada $N$ sehingga $n\\ge N$ memberi $|a_n-L|<1$, jadi $|a_n|<|L|+1$.","If $a_n\\to L$, choose $\\varepsilon=1$. There is $N$ such that $n\\ge N$ implies $|a_n-L|<1$, hence $|a_n|<|L|+1$."),
          t("Suku awal $a_1,\\ldots,a_{N-1}$ jumlahnya hingga, jadi nilai mutlaknya mempunyai maksimum.","The finitely many initial terms $a_1,\\ldots,a_{N-1}$ have a maximum absolute value."),
          t("Ambil batas sebagai maksimum antara nilai tersebut dan $|L|+1$.","Take the bound to be the maximum of that value and $|L|+1$.")
        ]
      },
      {
        kind:"theorem", title:t("Teorema Bolzano–Weierstrass","Bolzano–Weierstrass Theorem"),
        statement:t("Setiap barisan terbatas di $\\mathbb R$ mempunyai subsekuens konvergen.","Every bounded sequence in $\\mathbb R$ has a convergent subsequence."),
        proof:[
          t("Karena barisan terbatas, semua suku berada dalam suatu interval tertutup $[a,b]$.","Since the sequence is bounded, all terms lie in some closed interval $[a,b]$."),
          t("Bagi interval menjadi dua bagian. Salah satu bagian memuat tak hingga banyak suku; pilih bagian tersebut.","Bisect the interval. One half contains infinitely many terms; choose that half."),
          t("Ulangi proses untuk memperoleh interval bersarang $I_1\\supset I_2\\supset\\cdots$ dengan panjang menuju nol, masing-masing memuat tak hingga banyak suku.","Repeat to obtain nested intervals $I_1\\supset I_2\\supset\\cdots$ with lengths tending to zero, each containing infinitely many sequence terms."),
          t("Pilih indeks $n_k$ meningkat dengan $a_{n_k}\\in I_k$. Teorema interval bersarang memberi satu titik $L$ dalam seluruh $I_k$.","Choose increasing indices $n_k$ with $a_{n_k}\\in I_k$. The nested interval theorem gives a point $L$ contained in all $I_k$."),
          t("Karena diameter $I_k$ menuju nol dan $a_{n_k},L\\in I_k$, diperoleh $|a_{n_k}-L|\\to0$.","Since the diameters of $I_k$ tend to zero and $a_{n_k},L\\in I_k$, we obtain $|a_{n_k}-L|\\to0$.")
        ]
      },
      {
        kind:"corollary", title:t("Akibat: Barisan Cauchy Terbatas","Corollary: Cauchy Sequences Are Bounded"),
        statement:t("Setiap barisan Cauchy di $\\mathbb R$ terbatas.","Every Cauchy sequence in $\\mathbb R$ is bounded."),
        proof:[
          t("Ambil $\\varepsilon=1$. Ada $N$ sehingga $m,n\\ge N$ memberi $|a_n-a_m|<1$.","Take $\\varepsilon=1$. There is $N$ such that $m,n\\ge N$ imply $|a_n-a_m|<1$."),
          t("Tetapkan $m=N$. Untuk $n\\ge N$, $|a_n|\\le|a_N|+1$.","Fix $m=N$. For $n\\ge N$, $|a_n|\\le|a_N|+1$."),
          t("Gabungkan batas tersebut dengan maksimum nilai mutlak suku awal yang jumlahnya hingga.","Combine this bound with the maximum absolute value of the finitely many initial terms.")
        ]
      }
    ],
    examples:[
      {
        title:t("Contoh Detail: Bukti $1/n\\to0$","Detailed Example: Proving $1/n\\to0$"),
        problem:t("Buktikan dari definisi bahwa $a_n=1/n$ konvergen ke $0$.","Prove from the definition that $a_n=1/n$ converges to $0$."),
        strategy:t("Diberikan $\\varepsilon>0$, pilih $N$ agar $1/N<\\varepsilon$. Gunakan sifat Archimedean.","Given $\\varepsilon>0$, choose $N$ so that $1/N<\\varepsilon$, using the Archimedean property."),
        solution:[
          t("Diberikan sebarang $\\varepsilon>0$.","Take arbitrary $\\varepsilon>0$."),
          t("Pilih $N\\in\\mathbb N$ dengan $N>1/\\varepsilon$.","Choose $N\\in\\mathbb N$ with $N>1/\\varepsilon$."),
          t("Untuk setiap $n\\ge N$, diperoleh $0<1/n\\le1/N<\\varepsilon$.","For every $n\\ge N$, $0<1/n\\le1/N<\\varepsilon$."),
          t("Dengan demikian $|1/n-0|<\\varepsilon$ untuk seluruh $n\\ge N$.","Thus $|1/n-0|<\\varepsilon$ for all $n\\ge N$.")
        ],
        conclusion:t("$\\boxed{1/n\\to0}$.","$\\boxed{1/n\\to0}$.")
      },
      {
        title:t("Contoh Detail: Konvergensi Seragam","Detailed Example: Uniform Convergence"),
        problem:t("Tunjukkan $f_n(x)=x/n$ konvergen seragam ke $0$ pada $[0,1]$.","Show that $f_n(x)=x/n$ converges uniformly to $0$ on $[0,1]$."),
        strategy:t("Hitung supremum $|f_n(x)|$ terhadap seluruh $x\\in[0,1]$.","Compute the supremum of $|f_n(x)|$ over all $x\\in[0,1]$."),
        solution:[
          t("Untuk $x\\in[0,1]$, $|f_n(x)-0|=x/n\\le1/n$.","For $x\\in[0,1]$, $|f_n(x)-0|=x/n\\le1/n$."),
          t("Karena nilai $x=1$ mencapai batas tersebut, $\\|f_n\\|_\\infty=1/n$.","Since $x=1$ attains this bound, $\\|f_n\\|_\\infty=1/n$."),
          t("$1/n\\to0$, jadi norma supremum menuju nol. Ini tepat definisi konvergensi seragam.","Since $1/n\\to0$, the supremum norm tends to zero. This is exactly uniform convergence.")
        ],
        conclusion:t("$f_n\\to0$ seragam pada $[0,1]$.","$f_n\\to0$ uniformly on $[0,1]$.")
      }
    ]
  }
};
