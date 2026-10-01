import type { ContentProvenance } from "@/data/book-content-types";
export type OText = { id: string; en: string };

export type OlympiadUnit = {
  title: OText;
  description: OText;
  topics: OText[];
};

export type OlympiadPhase = {
  title: OText;
  focus: OText;
  outcomes: OText[];
};

export type OlympiadProblem = {
  id: string;
  difficulty: "Dasar" | "Menengah" | "Menantang";
  field: OText;
  title: OText;
  problem: OText;
  hint: OText;
  solution: OText[];
  provenance?: ContentProvenance;
  sourceNote?: string;
};

export type OlympiadHub = {
  slug: string;
  learningTrackSlug: string;
  title: OText;
  subtitle: OText;
  fields: OText[];
  syllabus: OlympiadUnit[];
  roadmap: OlympiadPhase[];
  curated: OlympiadProblem[];
  challenge: OlympiadProblem;
};

const t=(id:string,en:string):OText=>({id,en});

export const olympiadHubs: OlympiadHub[] = [
  {
    slug:"sd",
    learningTrackSlug:"olimpiade-sd",
    title:t("Olimpiade SD","Elementary School Olympiad"),
    subtitle:t("Aritmetika kreatif, pola, geometri, logika, counting, dan strategi nonrutin untuk membangun intuisi kompetisi sejak awal.","Creative arithmetic, patterns, geometry, logic, counting, and non-routine strategies to build competition intuition from the beginning."),
    fields:[t("Aritmetika","Arithmetic"),t("Teori Bilangan Dasar","Elementary Number Theory"),t("Kombinatorika Dasar","Elementary Combinatorics"),t("Geometri","Geometry"),t("Logika","Logic")],
    syllabus:[
      {title:t("Aritmetika Kreatif","Creative Arithmetic"),description:t("Operasi cerdas, digit, pola bilangan, pecahan, faktor, kelipatan, dan estimasi.","Smart arithmetic, digits, number patterns, fractions, factors, multiples, and estimation."),topics:[t("Digit","Digits"),t("Pola bilangan","Number patterns"),t("Faktor & kelipatan","Factors & multiples"),t("Pecahan","Fractions")]},
      {title:t("Counting & Pola","Counting & Patterns"),description:t("Menghitung sistematis dengan tabel, diagram, pola berulang, dan klasifikasi kasus sederhana.","Systematic counting with tables, diagrams, repeating patterns, and simple casework."),topics:[t("Tabel","Tables"),t("Diagram pohon","Tree diagrams"),t("Casework","Casework"),t("Pola","Patterns")]},
      {title:t("Geometri Visual","Visual Geometry"),description:t("Luas, keliling, grid, simetri, susunan bangun, dan pemotongan bentuk.","Area, perimeter, grids, symmetry, figure arrangements, and dissections."),topics:[t("Grid","Grids"),t("Luas","Area"),t("Simetri","Symmetry"),t("Dissection","Dissection")]},
      {title:t("Logika & Strategi","Logic & Strategy"),description:t("Parity sederhana, bekerja mundur, trial terarah, permainan, dan eliminasi kemungkinan.","Simple parity, working backward, directed trials, games, and elimination of possibilities."),topics:[t("Parity","Parity"),t("Bekerja mundur","Working backward"),t("Permainan","Games"),t("Eliminasi","Elimination")]}
    ],
    roadmap:[
      {title:t("Fondasi pola","Pattern Foundations"),focus:t("Bangun sense bilangan dan keberanian mencoba banyak representasi.","Build number sense and confidence in trying multiple representations."),outcomes:[t("Menemukan pola","Find patterns"),t("Membuat tabel","Build tables"),t("Menjelaskan strategi","Explain a strategy")]},
      {title:t("Strategi inti","Core Strategies"),focus:t("Pelajari casework, parity, bekerja mundur, diagram, dan counting sederhana.","Learn casework, parity, working backward, diagrams, and simple counting."),outcomes:[t("Memilih strategi","Choose a strategy"),t("Menguji kasus","Test cases"),t("Menghindari brute force","Avoid brute force")]},
      {title:t("Problem set campuran","Mixed Problem Sets"),focus:t("Gabungkan beberapa ide dalam soal yang tidak diberi label topik.","Combine ideas in problems without topic labels."),outcomes:[t("Menyelesaikan soal nonrutin","Solve non-routine problems"),t("Menulis solusi ringkas","Write concise solutions"),t("Refleksi kesalahan","Reflect on mistakes")]}
    ],
    curated:[
      {id:"SD-01",difficulty:"Dasar",field:t("Aritmetika","Arithmetic"),title:t("Pola digit","Digit Pattern"),problem:t("Berapa digit terakhir dari $7^{2026}$?","What is the last digit of $7^{2026}$?"),hint:t("Amati digit terakhir dari $7^1,7^2,7^3,7^4$.","Inspect the last digits of $7^1,7^2,7^3,7^4$."),solution:[t("Digit terakhir membentuk siklus $7,9,3,1$ dengan periode $4$.","The last digit cycles through $7,9,3,1$ with period $4$."),t("$2026\\equiv2\\pmod4$, jadi digit terakhirnya sama dengan $7^2$, yaitu $9$.","$2026\\equiv2\\pmod4$, so the last digit is that of $7^2$, namely $9$.")]},
      {id:"SD-02",difficulty:"Menengah",field:t("Counting","Counting"),title:t("Jalur pada grid","Grid Paths"),problem:t("Dari sudut kiri bawah sebuah grid $3\\times2$, berapa banyak jalur terpendek ke sudut kanan atas jika hanya boleh bergerak ke kanan atau ke atas?","From the bottom-left corner of a $3\\times2$ grid, how many shortest paths reach the top-right corner using only right and up moves?"),hint:t("Setiap jalur terdiri dari $3$ langkah kanan dan $2$ langkah atas.","Every path contains $3$ right moves and $2$ up moves."),solution:[t("Pilih posisi untuk $2$ langkah atas di antara $5$ langkah total.","Choose the positions of the $2$ up moves among $5$ total moves."),t("Banyaknya jalur $=\\binom52=10$.","The number of paths is $\\binom52=10$.")]},
      {id:"SD-03",difficulty:"Menengah",field:t("Geometri","Geometry"),title:t("Luas daerah tersisa","Remaining Area"),problem:t("Sebuah persegi sisi $10$ dibagi menjadi empat persegi kecil sama besar. Dari setiap sudut luar dipotong persegi sisi $2$. Berapa luas daerah yang tersisa?","A square of side $10$ has four corner squares of side $2$ removed. What area remains?"),hint:t("Hitung luas persegi besar lalu kurangi empat potongan.","Find the large square area and subtract the four removed pieces."),solution:[t("Luas awal $=10^2=100$.","Initial area $=10^2=100$."),t("Empat potongan memiliki total luas $4\\cdot2^2=16$. Jadi tersisa $84$.","The four removed squares have total area $4\\cdot2^2=16$, leaving $84$.")]},
      {id:"SD-04",difficulty:"Menantang",field:t("Logika","Logic"),title:t("Kotak bilangan","Number Boxes"),problem:t("Bilangan $1,2,\\ldots,9$ ditempatkan masing-masing sekali ke dalam kotak $3\\times3$. Buktikan ada satu baris atau kolom yang jumlahnya paling sedikit $15$.","The numbers $1,2,\\ldots,9$ are placed once each in a $3\\times3$ grid. Prove that some row or column has sum at least $15$."),hint:t("Jumlah total semua baris adalah jumlah $1+\\cdots+9$.","The total of all row sums equals $1+\\cdots+9$."),solution:[t("Jumlah semua bilangan adalah $45$.","The total is $45$."),t("Tiga baris memiliki jumlah total $45$, jadi rata-rata jumlah baris adalah $15$. Sedikitnya satu baris memiliki jumlah paling sedikit $15$.","The three row sums total $45$, so their average is $15$. At least one row therefore has sum at least $15$.")]}
    ],
    challenge:{id:"SD-C1",difficulty:"Menantang",field:t("Aritmetika","Arithmetic"),title:t("Jumlah berurutan","Consecutive Sum"),problem:t("Tentukan semua bilangan dua digit yang dapat ditulis sebagai jumlah tiga bilangan bulat positif berurutan dan juga sebagai jumlah lima bilangan bulat positif berurutan.","Find all two-digit numbers that can be written both as the sum of three consecutive positive integers and as the sum of five consecutive positive integers."),hint:t("Jumlah tiga bilangan berurutan adalah kelipatan $3$, sedangkan jumlah lima bilangan berurutan adalah kelipatan $5$.","A sum of three consecutive integers is divisible by $3$, while a sum of five consecutive integers is divisible by $5$."),solution:[t("Bilangan harus habis dibagi $15$. Bilangan dua digit kandidat: $15,30,45,60,75,90$.","The number must be divisible by $15$. The two-digit candidates are $15,30,45,60,75,90$."),t("Agar merupakan jumlah lima bilangan positif berurutan, bentuknya $5n$ dengan suku tengah $n\\ge3$. Semua kandidat memenuhi kecuali $15$ masih memberi $1+2+3+4+5=15$ dan valid.","For five positive consecutive integers the number is $5n$ with middle term $n\\ge3$; $15$ gives $1+2+3+4+5$ and is valid."),t("Untuk tiga bilangan positif berurutan, suku tengahnya $N/3$ dan harus sedikitnya $2$. Semua kandidat juga valid. Jadi jawabannya $15,30,45,60,75,90$.","For three positive consecutive integers, the middle term is $N/3$ and must be at least $2$. All candidates are valid. Thus the answers are $15,30,45,60,75,90$.")]}
  },

  {
    slug:"smp",
    learningTrackSlug:"olimpiade-smp",
    title:t("Olimpiade SMP","Junior High Olympiad"),
    subtitle:t("Aljabar, teori bilangan, kombinatorika, geometri, dan strategi problem solving sebagai toolkit kompetisi yang terstruktur.","Algebra, number theory, combinatorics, geometry, and problem-solving strategies organized as a competition toolkit."),
    fields:[t("Aljabar","Algebra"),t("Teori Bilangan","Number Theory"),t("Kombinatorika","Combinatorics"),t("Geometri","Geometry"),t("Strategi Problem Solving","Problem-Solving Strategies")],
    syllabus:[
      {title:t("Aljabar Olimpiade","Olympiad Algebra"),description:t("Identitas, faktorisasi, substitusi, sistem persamaan, dan pertidaksamaan dasar.","Identities, factorization, substitution, systems, and basic inequalities."),topics:[t("Faktorisasi","Factorization"),t("Identitas","Identities"),t("Substitusi","Substitution"),t("Pertidaksamaan","Inequalities")]},
      {title:t("Teori Bilangan","Number Theory"),description:t("Keterbagian, FPB-KPK, kongruensi, pola pangkat, Diofantin dasar.","Divisibility, gcd-lcm, congruences, power cycles, and basic Diophantine equations."),topics:[t("Kongruensi","Congruences"),t("Diofantin","Diophantine equations"),t("Pola pangkat","Power cycles")]},
      {title:t("Kombinatorika","Combinatorics"),description:t("Counting, pigeonhole, parity, invariant sederhana, dan casework.","Counting, pigeonhole, parity, simple invariants, and casework."),topics:[t("Counting","Counting"),t("Pigeonhole","Pigeonhole"),t("Invariant","Invariants"),t("Casework","Casework")]},
      {title:t("Geometri","Geometry"),description:t("Sudut, segitiga, kesebangunan, lingkaran, luas, dan konstruksi bantu.","Angles, triangles, similarity, circles, area, and auxiliary constructions."),topics:[t("Segitiga","Triangles"),t("Kesebangunan","Similarity"),t("Lingkaran","Circles"),t("Luas","Area")]}
    ],
    roadmap:[
      {title:t("Toolkit inti","Core Toolkit"),focus:t("Kuasai teknik dasar setiap bidang hingga dapat digunakan tanpa ragu.","Master foundational techniques in each field until they are fluent."),outcomes:[t("Kongruensi dasar","Basic congruences"),t("Faktorisasi","Factorization"),t("Counting","Counting")]},
      {title:t("Teknik khas olimpiade","Olympiad Techniques"),focus:t("Masuk ke pigeonhole, invariant, ekstremal sederhana, konstruksi, dan manipulasi kreatif.","Move into pigeonhole, invariants, elementary extremal arguments, constructions, and creative manipulations."),outcomes:[t("Pigeonhole","Pigeonhole"),t("Invariant","Invariants"),t("Konstruksi","Construction")]},
      {title:t("Mixed sets & write-up","Mixed Sets & Write-Up"),focus:t("Latih seleksi metode dan penulisan solusi lengkap.","Train method selection and complete solution writing."),outcomes:[t("Pemilihan metode","Method selection"),t("Solusi formal","Formal solutions"),t("Audit solusi","Solution audit")]}
    ],
    curated:[
      {id:"SMP-01",difficulty:"Dasar",field:t("Teori Bilangan","Number Theory"),title:t("Sisa pangkat","Power Remainder"),problem:t("Tentukan sisa $3^{100}$ ketika dibagi $8$.","Find the remainder when $3^{100}$ is divided by $8$."),hint:t("$3^2\\equiv1\\pmod8$.","$3^2\\equiv1\\pmod8$."),solution:[t("$3^{100}=(3^2)^{50}\\equiv1^{50}\\equiv1\\pmod8$.","$3^{100}=(3^2)^{50}\\equiv1^{50}\\equiv1\\pmod8$.")]},
      {id:"SMP-02",difficulty:"Menengah",field:t("Aljabar","Algebra"),title:t("Identitas simetris","Symmetric Identity"),problem:t("Jika $x+y=7$ dan $xy=10$, tentukan $x^2+y^2$.","If $x+y=7$ and $xy=10$, find $x^2+y^2$."),hint:t("Kuadratkan $x+y$.","Square $x+y$."),solution:[t("$x^2+y^2=(x+y)^2-2xy=49-20=29$.","$x^2+y^2=(x+y)^2-2xy=49-20=29$.")]},
      {id:"SMP-03",difficulty:"Menengah",field:t("Kombinatorika","Combinatorics"),title:t("Pigeonhole residu","Residue Pigeonhole"),problem:t("Buktikan di antara $9$ bilangan bulat terdapat dua yang selisihnya habis dibagi $8$.","Prove that among $9$ integers, two have difference divisible by $8$."),hint:t("Kelompokkan berdasarkan sisa modulo $8$.","Group by residues modulo $8$."),solution:[t("Ada hanya $8$ kelas residu modulo $8$.","There are only $8$ residue classes modulo $8$."),t("Dari $9$ bilangan, dua memiliki sisa sama. Selisihnya kongruen $0$ modulo $8$.","Among $9$ integers, two share the same residue, so their difference is $0$ modulo $8$.")]},
      {id:"SMP-04",difficulty:"Menantang",field:t("Geometri","Geometry"),title:t("Median segitiga","Triangle Median"),problem:t("Dalam segitiga $ABC$, $M$ titik tengah $BC$. Jika luas $\\triangle ABM=18$, tentukan luas $\\triangle ACM$.","In triangle $ABC$, $M$ is the midpoint of $BC$. If area $[ABM]=18$, find $[ACM]$."),hint:t("Kedua segitiga memiliki tinggi yang sama dari $A$.","The two triangles have the same altitude from $A$."),solution:[t("$BM=MC$ karena $M$ titik tengah.","$BM=MC$ because $M$ is the midpoint."),t("Dengan tinggi yang sama dan alas sama panjang, luas kedua segitiga sama. Jadi luasnya $18$.","With equal bases and the same height, the areas are equal, so the answer is $18$.")]}
    ],
    challenge:{id:"SMP-C1",difficulty:"Menantang",field:t("Teori Bilangan","Number Theory"),title:t("Kuadrat modulo $4$","Squares Modulo $4$"),problem:t("Buktikan tidak ada bilangan bulat $x,y$ yang memenuhi $x^2+y^2=4k+3$ untuk suatu bilangan bulat $k$.","Prove that no integers $x,y$ satisfy $x^2+y^2=4k+3$ for an integer $k$."),hint:t("Kuadrat bilangan bulat modulo $4$ hanya dapat bernilai $0$ atau $1$.","An integer square modulo $4$ is only $0$ or $1$."),solution:[t("Untuk setiap integer $n$, $n^2\\equiv0$ atau $1\\pmod4$.","For every integer $n$, $n^2\\equiv0$ or $1\\pmod4$."),t("Jumlah dua kuadrat modulo $4$ hanya mungkin $0,1,$ atau $2$, tidak pernah $3$.","The sum of two squares modulo $4$ can only be $0,1,$ or $2$, never $3$."),t("Jadi persamaan $x^2+y^2\\equiv3\\pmod4$ mustahil.","Hence $x^2+y^2\\equiv3\\pmod4$ is impossible.")]}
  },

  {
    slug:"sma",
    learningTrackSlug:"olimpiade-sma",
    title:t("Olimpiade SMA","Senior High Olympiad"),
    subtitle:t("Empat bidang utama olimpiade dengan fokus pada pembuktian, lemma, strategi struktural, dan problem solving nonrutin.","The four core olympiad fields with emphasis on proof, lemmas, structural strategy, and non-routine problem solving."),
    fields:[t("Aljabar","Algebra"),t("Teori Bilangan","Number Theory"),t("Kombinatorika","Combinatorics"),t("Geometri","Geometry"),t("Metode Problem Solving","Problem-Solving Methods")],
    syllabus:[
      {title:t("Aljabar Olimpiade","Olympiad Algebra"),description:t("Pertidaksamaan, polinomial, fungsi, persamaan fungsional, struktur simetris, dan substitusi.","Inequalities, polynomials, functions, functional equations, symmetric structures, and substitutions."),topics:[t("Inequalities","Inequalities"),t("Polinomial","Polynomials"),t("Functional equations","Functional equations")]},
      {title:t("Teori Bilangan","Number Theory"),description:t("Kongruensi, Fermat/Euler, orde, valuasi, Diofantin, faktor prima, dan konstruksi.","Congruences, Fermat/Euler, order, valuations, Diophantine equations, prime factors, and constructions."),topics:[t("Congruence","Congruence"),t("Diofantin","Diophantine"),t("Valuasi","Valuation"),t("Order","Order")]},
      {title:t("Kombinatorika","Combinatorics"),description:t("Bijeksi, double counting, inclusion-exclusion, invariant, extremal, rekurensi, dan graf.","Bijections, double counting, inclusion-exclusion, invariants, extremal methods, recurrences, and graphs."),topics:[t("Double counting","Double counting"),t("Invariant","Invariants"),t("Extremal","Extremal"),t("Graf","Graphs")]},
      {title:t("Geometri Olimpiade","Olympiad Geometry"),description:t("Lingkaran, kesebangunan, power of a point, homothety, transformasi, dan koordinat/vektor.","Circles, similarity, power of a point, homothety, transformations, and coordinate/vector methods."),topics:[t("Circle geometry","Circle geometry"),t("Homothety","Homothety"),t("Power of a point","Power of a point")]}
    ],
    roadmap:[
      {title:t("Core theory","Core Theory"),focus:t("Kuasai lemma dan theorem klasik yang sering menjadi mesin solusi.","Master classical lemmas and theorems that frequently drive solutions."),outcomes:[t("Lemma library","Lemma library"),t("Proof fluency","Proof fluency"),t("Counterexample awareness","Counterexample awareness")]},
      {title:t("Structural methods","Structural Methods"),focus:t("Pelajari invariant, extremal, descent, bounding, transformation, dan konstruksi.","Learn invariants, extremal methods, descent, bounding, transformations, and constructions."),outcomes:[t("Invariant","Invariants"),t("Extremal","Extremal"),t("Descent","Descent")]},
      {title:t("Competition execution","Competition Execution"),focus:t("Latih seleksi soal, alokasi waktu, kualitas write-up, dan post-mortem.","Train problem selection, time allocation, write-up quality, and post-mortem review."),outcomes:[t("Timed sets","Timed sets"),t("Full write-up","Full write-up"),t("Strategy review","Strategy review")]}
    ],
    curated:[
      {id:"SMA-01",difficulty:"Dasar",field:t("Aljabar","Algebra"),title:t("AM-GM","AM-GM"),problem:t("Untuk $a,b>0$ dan $ab=16$, tentukan nilai minimum $a+b$.","For $a,b>0$ with $ab=16$, find the minimum of $a+b$."),hint:t("Gunakan AM-GM.","Use AM-GM."),solution:[t("$a+b\\ge2\\sqrt{ab}=8$.","$a+b\\ge2\\sqrt{ab}=8$."),t("Kesetaraan terjadi saat $a=b=4$, jadi minimum $8$.","Equality occurs at $a=b=4$, so the minimum is $8$.")]},
      {id:"SMA-02",difficulty:"Menengah",field:t("Teori Bilangan","Number Theory"),title:t("Fermat kecil","Fermat's Little Theorem"),problem:t("Tentukan $2^{2026}\\pmod{13}$.","Find $2^{2026}\\pmod{13}$."),hint:t("$2^{12}\\equiv1\\pmod{13}$.","$2^{12}\\equiv1\\pmod{13}$."),solution:[t("$2026\\equiv10\\pmod{12}$, jadi $2^{2026}\\equiv2^{10}=1024\\equiv10\\pmod{13}$.","$2026\\equiv10\\pmod{12}$, so $2^{2026}\\equiv2^{10}=1024\\equiv10\\pmod{13}$.")]},
      {id:"SMA-03",difficulty:"Menengah",field:t("Kombinatorika","Combinatorics"),title:t("Double counting","Double Counting"),problem:t("Buktikan $\\sum_{k=0}^n k\\binom nk=n2^{n-1}$.","Prove $\\sum_{k=0}^n k\\binom nk=n2^{n-1}$."),hint:t("Hitung pasangan $(S,x)$ dengan $S\\subseteq[n]$ dan $x\\in S$.","Count pairs $(S,x)$ with $S\\subseteq[n]$ and $x\\in S$."),solution:[t("Jika dihitung menurut ukuran $|S|=k$, diperoleh ruas kiri.","Counting by $|S|=k$ gives the left-hand side."),t("Jika memilih $x$ dahulu, ada $n$ pilihan untuk $x$ dan $2^{n-1}$ pilihan untuk anggota lain dari $S$, memberi $n2^{n-1}$.","Choose $x$ first: $n$ choices for $x$, then $2^{n-1}$ choices for the remaining members of $S$, giving $n2^{n-1}$.")]},
      {id:"SMA-04",difficulty:"Menantang",field:t("Geometri","Geometry"),title:t("Power of a point","Power of a Point"),problem:t("Dari titik $P$ di luar lingkaran, dua garis secan memotong lingkaran di $A,B$ dan $C,D$. Buktikan $PA\\cdot PB=PC\\cdot PD$.","From an external point $P$, two secants meet a circle at $A,B$ and $C,D$. Prove $PA\\cdot PB=PC\\cdot PD$."),hint:t("Hubungkan $A$ dengan $D$ dan $B$ dengan $C$, lalu cari dua segitiga sebangun.","Join $A$ to $D$ and $B$ to $C$, then identify two similar triangles."),solution:[t("Karena sudut keliling yang menghadap busur sama, diperoleh pasangan sudut yang menunjukkan dua segitiga relevan sebangun.","Equal inscribed angles subtend equal arcs, yielding a pair of similar triangles."),t("Dari kesebangunan diperoleh perbandingan $PA/PC=PD/PB$. Mengalikan silang memberi $PA\\cdot PB=PC\\cdot PD$.","Similarity gives $PA/PC=PD/PB$. Cross-multiplication yields $PA\\cdot PB=PC\\cdot PD$.")]}
    ],
    challenge:{id:"SMA-C1",difficulty:"Menantang",field:t("Kombinatorika","Combinatorics"),title:t("Subset sums","Subset Sums"),problem:t("Buktikan dari setiap $n+1$ bilangan bulat yang dipilih dari $\\{1,2,\\ldots,2n\\}$ terdapat dua bilangan dengan yang satu membagi yang lain.","Prove that among any $n+1$ integers chosen from $\\{1,2,\\ldots,2n\\}$, there are two such that one divides the other."),hint:t("Tuliskan setiap bilangan sebagai $2^k m$ dengan $m$ ganjil.","Write each integer uniquely as $2^k m$ with $m$ odd."),solution:[t("Setiap bilangan $1$ sampai $2n$ memiliki bagian ganjil $m$ yang merupakan salah satu dari $n$ bilangan ganjil $1,3,\\ldots,2n-1$.","Each number from $1$ to $2n$ has an odd part $m$, one of the $n$ odd numbers $1,3,\\ldots,2n-1$."),t("Dengan $n+1$ bilangan terpilih dan hanya $n$ kemungkinan bagian ganjil, dua bilangan memiliki bagian ganjil sama.","Among $n+1$ selected numbers and only $n$ possible odd parts, two share the same odd part."),t("Keduanya berbentuk $2^am$ dan $2^bm$; jika $a<b$, bilangan pertama membagi bilangan kedua.","They are $2^am$ and $2^bm$; if $a<b$, the first divides the second.")]}
  },

  {
    slug:"onmipa",
    learningTrackSlug:"onmipa",
    title:t("Olimpiade Mahasiswa / ON-MIPA","University Olympiad / ON-MIPA"),
    subtitle:t("Analisis Real, Analisis Kompleks, Aljabar Linear, Struktur Aljabar, dan Kombinatorika dengan pembuktian formal dan strategi kompetisi universitas.","Real Analysis, Complex Analysis, Linear Algebra, Abstract Algebra, and Combinatorics with formal proofs and university-level competition strategy."),
    fields:[t("Analisis Real","Real Analysis"),t("Analisis Kompleks","Complex Analysis"),t("Aljabar Linear","Linear Algebra"),t("Struktur Aljabar","Abstract Algebra"),t("Kombinatorika","Combinatorics")],
    syllabus:[
      {title:t("Analisis Real","Real Analysis"),description:t("Supremum, barisan, deret, kontinuitas, diferensiasi, integrasi Riemann/Darboux, compactness, dan konvergensi fungsi.","Suprema, sequences, series, continuity, differentiation, Riemann/Darboux integration, compactness, and function convergence."),topics:[t("Sequences","Sequences"),t("Compactness","Compactness"),t("Riemann/Darboux","Riemann/Darboux"),t("Uniform convergence","Uniform convergence")]},
      {title:t("Analisis Kompleks","Complex Analysis"),description:t("Analitik, Cauchy-Riemann, integral kontur, Cauchy theorem/formula, deret, singularitas, residu, dan pemetaan.","Analytic functions, Cauchy-Riemann equations, contour integrals, Cauchy theorem/formula, series, singularities, residues, and mappings."),topics:[t("Cauchy theorem","Cauchy theorem"),t("Residues","Residues"),t("Series","Series"),t("Mappings","Mappings")]},
      {title:t("Aljabar Linear","Linear Algebra"),description:t("Ruang vektor, rank-nullity, eigenvalue, invariant subspace, minimal polynomial, inner product, projection, dan nilpotent.","Vector spaces, rank-nullity, eigenvalues, invariant subspaces, minimal polynomials, inner products, projections, and nilpotence."),topics:[t("Rank-nullity","Rank-nullity"),t("Eigenvalues","Eigenvalues"),t("Minimal polynomial","Minimal polynomial"),t("Projection","Projection")]},
      {title:t("Struktur Aljabar","Abstract Algebra"),description:t("Grup, subgroup, homomorfisme, quotient, aksi grup, ring, ideal, field, dan struktur siklik.","Groups, subgroups, homomorphisms, quotients, group actions, rings, ideals, fields, and cyclic structures."),topics:[t("Groups","Groups"),t("Homomorphisms","Homomorphisms"),t("Quotients","Quotients"),t("Rings","Rings")]},
      {title:t("Kombinatorika","Combinatorics"),description:t("Counting, recurrence, graph arguments, invariant, extremal, generating functions awal, dan metode probabilistik dasar.","Counting, recurrences, graph arguments, invariants, extremal methods, introductory generating functions, and elementary probabilistic methods."),topics:[t("Counting","Counting"),t("Recurrence","Recurrence"),t("Graphs","Graphs"),t("Extremal","Extremal")]}
    ],
    roadmap:[
      {title:t("Theorem mastery","Theorem Mastery"),focus:t("Pastikan definisi dan theorem fundamental benar-benar dapat digunakan, bukan sekadar diingat.","Ensure fundamental definitions and theorems can actually be used, not merely recalled."),outcomes:[t("Definition fluency","Definition fluency"),t("Core theorem recall","Core theorem recall"),t("Counterexamples","Counterexamples")]},
      {title:t("Structural problem solving","Structural Problem Solving"),focus:t("Gunakan dimensi, compactness, invariant, quotient, estimasi, dan konstruksi sebagai alat reduksi.","Use dimension, compactness, invariants, quotients, estimates, and constructions as reduction tools."),outcomes:[t("Dimension arguments","Dimension arguments"),t("Compactness arguments","Compactness arguments"),t("Invariant arguments","Invariant arguments")]},
      {title:t("Timed mixed simulation","Timed Mixed Simulation"),focus:t("Latih switching cepat antarbidang dan kualitas pembuktian di bawah batas waktu.","Train rapid switching across fields and proof quality under time pressure."),outcomes:[t("Problem selection","Problem selection"),t("Time management","Time management"),t("Proof audit","Proof audit")]}
    ],
    curated:[
      {id:"ON-01",difficulty:"Dasar",field:t("Aljabar Linear","Linear Algebra"),title:t("Rank-nullity","Rank-Nullity"),problem:t("Jika $T:V\\to W$, $\\dim V=8$, dan $\\dim\\ker T=3$, tentukan $\\operatorname{rank}T$.","If $T:V\\to W$, $\\dim V=8$, and $\\dim\\ker T=3$, find $\\operatorname{rank}T$."),hint:t("Gunakan rank-nullity.","Use rank-nullity."),solution:[t("$\\dim V=\\operatorname{rank}T+\\operatorname{nullity}T$, jadi $8=r+3$ dan $r=5$.","$\\dim V=\\operatorname{rank}T+\\operatorname{nullity}T$, so $8=r+3$ and $r=5$.")]},
      {id:"ON-02",difficulty:"Menengah",field:t("Analisis Real","Real Analysis"),title:t("Cauchy sequence","Cauchy Sequence"),problem:t("Buktikan setiap barisan konvergen di $\\mathbb R$ adalah Cauchy.","Prove every convergent sequence in $\\mathbb R$ is Cauchy."),hint:t("Gunakan ketaksamaan segitiga dengan limit $L$.","Use the triangle inequality with the limit $L$."),solution:[t("Jika $a_n\\to L$, untuk $\\varepsilon>0$ pilih $N$ sehingga $|a_n-L|<\\varepsilon/2$ bagi $n\\ge N$.","If $a_n\\to L$, for $\\varepsilon>0$ choose $N$ so that $|a_n-L|<\\varepsilon/2$ for $n\\ge N$."),t("Untuk $m,n\\ge N$, $|a_n-a_m|\\le|a_n-L|+|a_m-L|<\\varepsilon$.","For $m,n\\ge N$, $|a_n-a_m|\\le|a_n-L|+|a_m-L|<\\varepsilon$.")]},
      {id:"ON-03",difficulty:"Menengah",field:t("Kombinatorika","Combinatorics"),title:t("Derajat ganjil","Odd Degrees"),problem:t("Buktikan jumlah simpul berderajat ganjil pada setiap graf hingga selalu genap.","Prove that every finite graph has an even number of odd-degree vertices."),hint:t("Gunakan lemma jabat tangan.","Use the handshaking lemma."),solution:[t("Jumlah semua derajat adalah $2|E|$, sebuah bilangan genap.","The sum of all degrees is $2|E|$, hence even."),t("Jumlah kontribusi derajat genap tetap genap, jadi jumlah derajat ganjil harus genap. Penjumlahan sejumlah ganjil bilangan ganjil akan ganjil; akibatnya banyak simpul berderajat ganjil harus genap.","The contribution from even degrees is even, so the sum of odd degrees is even. A sum of an odd number of odd integers is odd; therefore the number of odd-degree vertices must be even.")]},
      {id:"ON-04",difficulty:"Menantang",field:t("Struktur Aljabar","Abstract Algebra"),title:t("Kernel homomorfisme","Kernel of a Homomorphism"),problem:t("Jika $\\varphi:G\\to H$ homomorfisme grup, buktikan $\\ker\\varphi$ adalah subgroup normal dari $G$.","If $\\varphi:G\\to H$ is a group homomorphism, prove $\\ker\\varphi$ is a normal subgroup of $G$."),hint:t("Verifikasi subgroup lalu konjugasi $gxg^{-1}$.","Verify the subgroup properties and then conjugate $gxg^{-1}$."),solution:[t("Identitas berada di kernel dan kernel tertutup terhadap $xy^{-1}$ karena $\\varphi(xy^{-1})=e$. Jadi kernel adalah subgroup.","The identity lies in the kernel, and the kernel is closed under $xy^{-1}$ because $\\varphi(xy^{-1})=e$. Hence it is a subgroup."),t("Untuk $x\\in\\ker\\varphi$ dan $g\\in G$, $\\varphi(gxg^{-1})=\\varphi(g)e\\varphi(g)^{-1}=e$, jadi $gxg^{-1}\\in\\ker\\varphi$.","For $x\\in\\ker\\varphi$ and $g\\in G$, $\\varphi(gxg^{-1})=\\varphi(g)e\\varphi(g)^{-1}=e$, so $gxg^{-1}\\in\\ker\\varphi$.")]}
    ],
    challenge:{id:"ON-C1",difficulty:"Menantang",field:t("Analisis Real","Real Analysis"),title:t("Uniform limit","Uniform Limit"),problem:t("Misalkan $f_n:[0,1]\\to\\mathbb R$ kontinu dan $f_n\\to f$ seragam. Buktikan $f$ kontinu.","Let $f_n:[0,1]\\to\\mathbb R$ be continuous and suppose $f_n\\to f$ uniformly. Prove that $f$ is continuous."),hint:t("Untuk $x$ dekat $x_0$, sisipkan $f_N$ di antara $f(x)$ dan $f(x_0)$.","For $x$ near $x_0$, insert $f_N$ between $f(x)$ and $f(x_0)$."),solution:[t("Ambil $\\varepsilon>0$. Pilih $N$ sehingga $\\|f_N-f\\|_\\infty<\\varepsilon/3$.","Take $\\varepsilon>0$. Choose $N$ so that $\\|f_N-f\\|_\\infty<\\varepsilon/3$."),t("Karena $f_N$ kontinu di $x_0$, terdapat $\\delta>0$ sehingga $|x-x_0|<\\delta$ memberi $|f_N(x)-f_N(x_0)|<\\varepsilon/3$.","Since $f_N$ is continuous at $x_0$, there is $\\delta>0$ such that $|x-x_0|<\\delta$ gives $|f_N(x)-f_N(x_0)|<\\varepsilon/3$."),t("Ketaksamaan segitiga memberi $|f(x)-f(x_0)|<\\varepsilon$. Jadi $f$ kontinu.","The triangle inequality gives $|f(x)-f(x_0)|<\\varepsilon$. Hence $f$ is continuous.")]}
  }
];

export const olympiadHubMap=Object.fromEntries(olympiadHubs.map((item)=>[item.slug,item])) as Record<string,OlympiadHub>;
