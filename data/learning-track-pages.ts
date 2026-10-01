export type LocalText = { id: string; en: string };

export type TrackSubject = {
  name: LocalText;
  description: LocalText;
  topics: LocalText[];
};

export type TrackStage = {
  label: LocalText;
  title: LocalText;
  description: LocalText;
  topics: LocalText[];
};

export type LearningTrackPageData = {
  slug: string;
  category: "reguler" | "olimpiade";
  title: LocalText;
  eyebrow: LocalText;
  intro: LocalText;
  audience: LocalText;
  goal: LocalText;
  philosophy: LocalText;
  subjects: TrackSubject[];
  roadmap: TrackStage[];
  skills: LocalText[];
  publishedMaterials: string[];
};

const t = (id: string, en: string): LocalText => ({ id, en });

export const learningTrackPages: LearningTrackPageData[] = [
  {
    slug: "sd",
    category: "reguler",
    title: t("Matematika SD", "Elementary School Mathematics"),
    eyebrow: t("Jalur Reguler · SD", "Regular Track · Elementary School"),
    intro: t(
      "Bangun fondasi numerasi yang kuat melalui bilangan, operasi, pola, geometri, pengukuran, data, peluang awal, dan pemecahan masalah yang masuk akal.",
      "Build strong numerical foundations through numbers, operations, patterns, geometry, measurement, data, introductory probability, and meaningful problem solving."
    ),
    audience: t(
      "Siswa SD yang ingin memahami alasan di balik prosedur matematika, bukan hanya menghafal langkah.",
      "Elementary students who want to understand why mathematical procedures work instead of memorizing steps."
    ),
    goal: t(
      "Membentuk intuisi bilangan, ketelitian berhitung, kemampuan membaca representasi, dan kebiasaan menjelaskan strategi.",
      "Develop number sense, computational accuracy, representational fluency, and the habit of explaining strategies."
    ),
    philosophy: t(
      "Konkret → visual → simbolik. Konsep dikenalkan melalui situasi yang dapat dibayangkan, lalu divisualisasikan, baru diformalkan.",
      "Concrete → visual → symbolic. Ideas begin with imaginable situations, move to visual representations, and only then become formal."
    ),
    subjects: [
      {
        name: t("Bilangan & Aritmetika", "Numbers & Arithmetic"),
        description: t("Nilai tempat, operasi, faktor, kelipatan, pecahan, desimal, persen, rasio awal.", "Place value, operations, factors, multiples, fractions, decimals, percentages, and introductory ratios."),
        topics: [t("Bilangan cacah & bulat", "Whole numbers & integers"), t("Pecahan", "Fractions"), t("Desimal & persen", "Decimals & percentages"), t("FPB & KPK", "GCD & LCM")]
      },
      {
        name: t("Geometri & Pengukuran", "Geometry & Measurement"),
        description: t("Bangun datar dan ruang, panjang, luas, volume, sudut, simetri, dan estimasi.", "Plane and solid figures, length, area, volume, angles, symmetry, and estimation."),
        topics: [t("Keliling & luas", "Perimeter & area"), t("Volume", "Volume"), t("Sudut", "Angles"), t("Simetri", "Symmetry")]
      },
      {
        name: t("Data & Peluang Awal", "Data & Introductory Probability"),
        description: t("Membaca tabel, diagram, rata-rata sederhana, dan peluang melalui eksperimen.", "Reading tables and charts, simple averages, and probability through experiments."),
        topics: [t("Tabel & diagram", "Tables & charts"), t("Rata-rata", "Average"), t("Eksperimen acak", "Random experiments")]
      },
      {
        name: t("Problem Solving", "Problem Solving"),
        description: t("Strategi gambar, pola, bekerja mundur, mencoba kasus, dan menjelaskan alasan.", "Drawing, pattern finding, working backward, testing cases, and explaining reasoning."),
        topics: [t("Pola", "Patterns"), t("Model gambar", "Visual models"), t("Estimasi", "Estimation"), t("Strategi multi-langkah", "Multi-step strategies")]
      }
    ],
    roadmap: [
      {
        label: t("Tahap 1", "Stage 1"),
        title: t("Bangun sense bilangan", "Build Number Sense"),
        description: t("Fokus pada makna operasi dan representasi bilangan.", "Focus on the meaning of operations and number representations."),
        topics: [t("Nilai tempat", "Place value"), t("Empat operasi", "Four operations"), t("Estimasi", "Estimation")]
      },
      {
        label: t("Tahap 2", "Stage 2"),
        title: t("Kuasai pecahan dan perbandingan", "Master Fractions and Comparisons"),
        description: t("Hubungkan pecahan dengan garis bilangan, rasio, persen, dan situasi nyata.", "Connect fractions to number lines, ratios, percentages, and real situations."),
        topics: [t("Pecahan senilai", "Equivalent fractions"), t("Operasi pecahan", "Fraction operations"), t("Persen", "Percentages")]
      },
      {
        label: t("Tahap 3", "Stage 3"),
        title: t("Gabungkan konsep dalam masalah", "Combine Ideas in Problems"),
        description: t("Gunakan beberapa konsep sekaligus dalam soal cerita dan problem solving.", "Use several ideas together in word problems and problem solving."),
        topics: [t("Geometri", "Geometry"), t("Data", "Data"), t("Masalah multi-langkah", "Multi-step problems")]
      }
    ],
    skills: [t("Numerasi", "Numeracy"), t("Representasi visual", "Visual representation"), t("Estimasi", "Estimation"), t("Penalaran dasar", "Foundational reasoning"), t("Komunikasi matematis", "Mathematical communication")],
    publishedMaterials: ["pecahan"]
  },

  {
    slug: "smp",
    category: "reguler",
    title: t("Matematika SMP", "Junior High School Mathematics"),
    eyebrow: t("Jalur Reguler · SMP", "Regular Track · Junior High School"),
    intro: t(
      "Bergerak dari aritmetika menuju aljabar, fungsi, geometri, statistika, peluang, dan gagasan diskrit awal dengan penalaran yang semakin formal.",
      "Move from arithmetic toward algebra, functions, geometry, statistics, probability, and introductory discrete ideas with increasingly formal reasoning."
    ),
    audience: t("Siswa SMP yang ingin memperkuat konsep sekolah sekaligus menyiapkan fondasi SMA dan kompetisi.", "Junior-high students strengthening school mathematics while preparing for high school and competitions."),
    goal: t("Menguasai bahasa aljabar, relasi antarrepresentasi, pemodelan, dan pembuktian sederhana.", "Master algebraic language, connections among representations, modeling, and elementary proof."),
    philosophy: t("Dari pola ke generalisasi. Rumus dipahami sebagai konsekuensi struktur, bukan objek hafalan.", "From patterns to generalization. Formulas are treated as consequences of structure rather than memorized objects."),
    subjects: [
      { name:t("Bilangan & Teori Bilangan Dasar","Numbers & Basic Number Theory"), description:t("Bilangan rasional, pangkat, akar, faktor, keterbagian, dan pola sisa.","Rational numbers, exponents, radicals, factors, divisibility, and residue patterns."), topics:[t("Pangkat & akar","Exponents & radicals"),t("Keterbagian","Divisibility"),t("Rasio","Ratios")] },
      { name:t("Aljabar","Algebra"), description:t("Ekspresi, persamaan, pertidaksamaan, sistem linear, pola, dan fungsi awal.","Expressions, equations, inequalities, linear systems, patterns, and introductory functions."), topics:[t("Persamaan linear","Linear equations"),t("SPLDV","Linear systems"),t("Pertidaksamaan","Inequalities"),t("Fungsi awal","Introductory functions")] },
      { name:t("Geometri","Geometry"), description:t("Kesebangunan, Pythagoras, lingkaran, transformasi, koordinat, luas dan volume.","Similarity, Pythagoras, circles, transformations, coordinates, area, and volume."), topics:[t("Pythagoras","Pythagoras"),t("Kesebangunan","Similarity"),t("Lingkaran","Circles"),t("Transformasi","Transformations")] },
      { name:t("Statistika & Peluang","Statistics & Probability"), description:t("Penyajian data, ukuran pemusatan, sebaran awal, ruang sampel, dan peluang kejadian.","Data displays, measures of center, introductory spread, sample spaces, and event probability."), topics:[t("Mean, median, modus","Mean, median, mode"),t("Diagram","Charts"),t("Peluang","Probability")] }
    ],
    roadmap: [
      { label:t("Tahap 1","Stage 1"), title:t("Transisi dari aritmetika ke aljabar","Transition from Arithmetic to Algebra"), description:t("Bangun kelancaran simbolik tanpa kehilangan makna.","Build symbolic fluency without losing meaning."), topics:[t("Ekspresi","Expressions"),t("Persamaan","Equations"),t("Pola","Patterns")] },
      { label:t("Tahap 2","Stage 2"), title:t("Hubungkan aljabar dengan geometri","Connect Algebra and Geometry"), description:t("Gunakan koordinat, grafik, dan transformasi untuk melihat struktur dari dua sisi.","Use coordinates, graphs, and transformations to view structure from two perspectives."), topics:[t("Grafik","Graphs"),t("Koordinat","Coordinates"),t("Kesebangunan","Similarity")] },
      { label:t("Tahap 3","Stage 3"), title:t("Pemodelan & data","Modeling & Data"), description:t("Terjemahkan situasi menjadi persamaan, tabel, grafik, dan peluang.","Translate situations into equations, tables, graphs, and probabilities."), topics:[t("Sistem linear","Linear systems"),t("Statistika","Statistics"),t("Peluang","Probability")] }
    ],
    skills:[t("Manipulasi aljabar","Algebraic manipulation"),t("Pemodelan","Modeling"),t("Grafik & koordinat","Graphs & coordinates"),t("Argumen sederhana","Elementary arguments"),t("Problem solving","Problem solving")],
    publishedMaterials:["persamaan-linear"]
  },

  {
    slug:"sma",
    category:"reguler",
    title:t("Matematika SMA","Senior High School Mathematics"),
    eyebrow:t("Jalur Reguler · SMA","Regular Track · Senior High School"),
    intro:t("Pendalaman fungsi, trigonometri, matriks, kalkulus, peluang, statistika, kombinatorika, dan pemodelan sebagai jembatan menuju matematika universitas.","Deepen functions, trigonometry, matrices, calculus, probability, statistics, combinatorics, and modeling as a bridge to university mathematics."),
    audience:t("Siswa SMA yang menargetkan penguasaan konsep sekolah, persiapan tes, atau transisi ke matematika kuliah.","Senior-high students aiming for strong school mathematics, exam preparation, or transition to university mathematics."),
    goal:t("Mampu berpindah antara representasi simbolik, grafik, numerik, dan verbal serta menyusun argumen yang lebih matang.","Move fluently among symbolic, graphical, numerical, and verbal representations while constructing more mature arguments."),
    philosophy:t("Representasi ganda + penalaran. Setiap topik dihubungkan ke grafik, struktur aljabar, dan aplikasi.","Multiple representations + reasoning. Every topic is connected to graphs, algebraic structure, and applications."),
    subjects:[
      {name:t("Aljabar & Fungsi","Algebra & Functions"),description:t("Fungsi polinomial, rasional, eksponensial, logaritmik, komposisi, invers, dan transformasi grafik.","Polynomial, rational, exponential, and logarithmic functions; composition, inverses, and graph transformations."),topics:[t("Fungsi","Functions"),t("Eksponen & logaritma","Exponentials & logarithms"),t("Polinomial","Polynomials")]},
      {name:t("Trigonometri","Trigonometry"),description:t("Lingkaran satuan, identitas, persamaan, grafik periodik, dan aplikasi.","Unit circle, identities, equations, periodic graphs, and applications."),topics:[t("Lingkaran satuan","Unit circle"),t("Identitas","Identities"),t("Persamaan trigonometri","Trigonometric equations")]},
      {name:t("Kalkulus","Calculus"),description:t("Limit, kontinuitas, turunan, integral, optimisasi, dan interpretasi perubahan.","Limits, continuity, derivatives, integrals, optimization, and interpretation of change."),topics:[t("Limit","Limits"),t("Turunan","Derivatives"),t("Integral","Integrals")]},
      {name:t("Matriks, Peluang & Statistika","Matrices, Probability & Statistics"),description:t("Operasi matriks, sistem linear, counting, peluang bersyarat, distribusi data, dan inferensi awal.","Matrix operations, linear systems, counting, conditional probability, data distributions, and introductory inference."),topics:[t("Matriks","Matrices"),t("Kombinatorika","Combinatorics"),t("Peluang","Probability"),t("Statistika","Statistics")]}
    ],
    roadmap:[
      {label:t("Tahap 1","Stage 1"),title:t("Kuasai bahasa fungsi","Master the Language of Functions"),description:t("Fungsi menjadi bahasa penghubung hampir seluruh matematika SMA.","Functions become the connecting language across senior-high mathematics."),topics:[t("Domain-range","Domain-range"),t("Komposisi","Composition"),t("Transformasi grafik","Graph transformations")]},
      {label:t("Tahap 2","Stage 2"),title:t("Bangun intuisi perubahan","Build Intuition for Change"),description:t("Hubungkan grafik dengan limit, turunan, dan integral.","Connect graphs with limits, derivatives, and integrals."),topics:[t("Limit","Limits"),t("Laju perubahan","Rates of change"),t("Akumulasi","Accumulation")]},
      {label:t("Tahap 3","Stage 3"),title:t("Gabungkan dengan peluang & struktur diskrit","Integrate Probability and Discrete Structure"),description:t("Latih counting, probabilitas, data, dan pemodelan.","Practice counting, probability, data, and modeling."),topics:[t("Counting","Counting"),t("Peluang","Probability"),t("Statistika","Statistics")]}
    ],
    skills:[t("Analisis fungsi","Function analysis"),t("Manipulasi simbolik","Symbolic manipulation"),t("Interpretasi grafik","Graph interpretation"),t("Pemodelan","Modeling"),t("Persiapan kalkulus","Calculus readiness")],
    publishedMaterials:["fungsi","trigonometri"]
  },

  {
    slug:"kuliah",
    category:"reguler",
    title:t("Matematika Kuliah","University Mathematics"),
    eyebrow:t("Jalur Reguler · Universitas","Regular Track · University"),
    intro:t("Matematika universitas dipelajari sebagai sistem definisi, teorema, pembuktian, struktur, dan koneksi antarcabang—bukan sekadar kumpulan teknik hitung.","University mathematics is studied as a system of definitions, theorems, proofs, structures, and connections across fields—not merely as a collection of computational techniques."),
    audience:t("Mahasiswa matematika, sains, teknik, dan pembelajar mandiri yang ingin memahami materi secara formal dan konseptual.","Mathematics, science, engineering students, and independent learners seeking formal and conceptual understanding."),
    goal:t("Menguasai definisi formal, teknik pembuktian, abstraksi, dan hubungan struktural antarbidang matematika.","Master formal definitions, proof techniques, abstraction, and structural connections across mathematical fields."),
    philosophy:t("Definisi → contoh → teorema → bukti → konsekuensi → latihan. Ketelitian logis menjadi bagian utama proses belajar.","Definition → example → theorem → proof → consequence → practice. Logical precision is central to the learning process."),
    subjects:[
      {name:t("Kalkulus & Analisis","Calculus & Analysis"),description:t("Kalkulus multivariabel, analisis real, analisis kompleks, integral, konvergensi, dan topologi dasar.","Multivariable calculus, real analysis, complex analysis, integration, convergence, and foundational topology."),topics:[t("Analisis Real","Real Analysis"),t("Analisis Kompleks","Complex Analysis"),t("Kalkulus lanjut","Advanced Calculus")]},
      {name:t("Aljabar Linear & Struktur Aljabar","Linear & Abstract Algebra"),description:t("Ruang vektor, transformasi linear, eigenvalue, grup, ring, field, dan struktur aljabar.","Vector spaces, linear transformations, eigenvalues, groups, rings, fields, and algebraic structure."),topics:[t("Aljabar Linear","Linear Algebra"),t("Grup","Groups"),t("Ring & field","Rings & fields")]},
      {name:t("Diskrit, Kombinatorika & Graf","Discrete Mathematics, Combinatorics & Graphs"),description:t("Logika, pembuktian, counting, relasi, graf, pohon, spektrum graf, rekuren, algoritma, aljabar Boolean, dan model komputasi.","Logic, proof, counting, relations, graphs, trees, graph spectra, recurrences, algorithms, Boolean algebra, and models of computation."),topics:[t("Kombinatorika","Combinatorics"),t("Teori Graf","Graph Theory"),t("Matematika Diskrit","Discrete Mathematics")]},
      {name:t("Peluang, Statistika & Terapan","Probability, Statistics & Applied Mathematics"),description:t("Probabilitas, statistika terapan dan matematis, teori ukuran, kalkulus stokastik, persamaan diferensial, analisis numerik, riset operasi, optimisasi, dan pemodelan.","Probability, applied and mathematical statistics, measure theory, stochastic calculus, differential equations, numerical analysis, operations research, optimization, and modeling."),topics:[t("Peluang","Probability"),t("Statistika","Statistics"),t("Analisis Numerik","Numerical Analysis"),t("Riset Operasi","Operations Research"),t("Kalkulus Stokastik","Stochastic Calculus")]}
    ],
    roadmap:[
      {label:t("Fondasi","Foundations"),title:t("Bahasa pembuktian & struktur","Proof Language & Structure"),description:t("Perkuat logika, himpunan, fungsi, relasi, dan teknik pembuktian.","Strengthen logic, sets, functions, relations, and proof techniques."),topics:[t("Logika","Logic"),t("Teknik pembuktian","Proof techniques"),t("Himpunan & fungsi","Sets & functions")]},
      {label:t("Inti","Core"),title:t("Aljabar Linear + Analisis","Linear Algebra + Analysis"),description:t("Dua bahasa utama untuk matematika modern: struktur linear dan limit.","Two core languages of modern mathematics: linear structure and limits."),topics:[t("Basis & dimensi","Basis & dimension"),t("Konvergensi","Convergence"),t("Kontinuitas","Continuity"),t("Integral","Integration")]},
      {label:t("Pengembangan","Development"),title:t("Abstraksi & bidang lanjut","Abstraction & Advanced Fields"),description:t("Masuk ke algebra abstrak, graf, topologi, kompleks, dan bidang terapan.","Move into abstract algebra, graph theory, topology, complex analysis, and applied fields."),topics:[t("Struktur Aljabar","Abstract Algebra"),t("Teori Graf","Graph Theory"),t("Topologi","Topology"),t("Analisis Kompleks","Complex Analysis")]}
    ],
    skills:[t("Pembuktian formal","Formal proof"),t("Abstraksi","Abstraction"),t("Struktur linear","Linear structure"),t("Analisis limit","Limit analysis"),t("Koneksi antarbidang","Cross-field connections")],
    publishedMaterials:["integral-riemann","prinsip-pigeonhole","spektrum-graf","analisis-numerik"]
  },

  {
    slug:"olimpiade-sd",
    category:"olimpiade",
    title:t("Olimpiade SD","Elementary School Olympiad"),
    eyebrow:t("Jalur Kompetisi · SD","Competition Track · Elementary School"),
    intro:t("Jalur problem solving untuk membangun kreativitas aritmetika, pola, logika, geometri, dan kemampuan melihat strategi yang tidak rutin.","A problem-solving track designed to build creativity in arithmetic, patterns, logic, geometry, and non-routine strategy."),
    audience:t("Siswa SD yang mulai mengikuti kompetisi matematika atau ingin melatih problem solving di atas kurikulum reguler.","Elementary students beginning mathematics competitions or seeking problem solving beyond the regular curriculum."),
    goal:t("Mengembangkan fleksibilitas strategi, ketelitian, pola pikir eksploratif, dan kemampuan menjelaskan solusi.","Develop strategic flexibility, precision, exploratory thinking, and clear solution writing."),
    philosophy:t("Masalah dahulu, strategi kemudian. Teknik dikenalkan ketika benar-benar dibutuhkan untuk menyelesaikan pola soal.","Problems first, strategies second. Techniques are introduced when they become genuinely useful for solving recurring problem structures."),
    subjects:[
      {name:t("Aritmetika Kreatif","Creative Arithmetic"),description:t("Operasi, digit, faktor, kelipatan, pecahan, pola bilangan, dan trik struktur.","Operations, digits, factors, multiples, fractions, number patterns, and structural tricks."),topics:[t("Digit","Digits"),t("Pola bilangan","Number patterns"),t("Faktor & kelipatan","Factors & multiples")]},
      {name:t("Kombinatorika Dasar","Basic Combinatorics"),description:t("Counting sederhana, tabel, diagram pohon, pola, dan pigeonhole intuitif.","Simple counting, tables, tree diagrams, patterns, and intuitive pigeonhole ideas."),topics:[t("Counting","Counting"),t("Pola","Patterns"),t("Kasus","Casework")]},
      {name:t("Geometri Olimpiade Dasar","Basic Olympiad Geometry"),description:t("Sudut, luas, susunan bangun, simetri, grid, dan visualisasi.","Angles, area, figure arrangements, symmetry, grids, and visualization."),topics:[t("Luas","Area"),t("Grid","Grids"),t("Simetri","Symmetry")]},
      {name:t("Logika & Strategi","Logic & Strategy"),description:t("Bekerja mundur, invariant sederhana, permainan, parity, dan eliminasi kemungkinan.","Working backward, simple invariants, games, parity, and elimination of possibilities."),topics:[t("Parity","Parity"),t("Permainan","Games"),t("Bekerja mundur","Working backward")]}
    ],
    roadmap:[
      {label:t("Awal","Starter"),title:t("Kuasai pola dan aritmetika","Master Patterns and Arithmetic"),description:t("Bangun intuisi sebelum teknik lanjutan.","Build intuition before advanced techniques."),topics:[t("Pola","Patterns"),t("Digit","Digits"),t("Pecahan","Fractions")]},
      {label:t("Menengah","Intermediate"),title:t("Belajar strategi nonrutin","Learn Non-Routine Strategies"),description:t("Kasus, tabel, diagram, bekerja mundur, dan parity.","Casework, tables, diagrams, working backward, and parity."),topics:[t("Casework","Casework"),t("Parity","Parity"),t("Diagram","Diagrams")]},
      {label:t("Lanjut","Advanced"),title:t("Gabungkan beberapa ide","Combine Multiple Ideas"),description:t("Selesaikan soal yang membutuhkan lebih dari satu observasi.","Solve problems requiring more than one key observation."),topics:[t("Multi-step problems","Multi-step problems"),t("Strategi campuran","Mixed strategies")]}
    ],
    skills:[t("Kreativitas aritmetika","Arithmetic creativity"),t("Pattern spotting","Pattern spotting"),t("Visualisasi","Visualization"),t("Casework","Casework"),t("Strategi nonrutin","Non-routine strategy")],
    publishedMaterials:[]
  },

  {
    slug:"olimpiade-smp",
    category:"olimpiade",
    title:t("Olimpiade SMP","Junior High Olympiad"),
    eyebrow:t("Jalur Kompetisi · SMP","Competition Track · Junior High"),
    intro:t("Aljabar, teori bilangan, kombinatorika, dan geometri dibangun sebagai perangkat problem solving, bukan sekadar materi sekolah yang dibuat lebih sulit.","Algebra, number theory, combinatorics, and geometry are built as problem-solving tools rather than simply harder school topics."),
    audience:t("Siswa SMP yang menargetkan OSN, kompetisi nasional, atau fondasi olimpiade SMA.","Junior-high students preparing for olympiads, national competitions, or a future senior-high olympiad track."),
    goal:t("Mengenali pola struktur soal, memilih strategi efisien, dan menulis solusi yang lengkap.","Recognize problem structure, choose efficient strategies, and write complete solutions."),
    philosophy:t("Tema → teknik → problem set → refleksi strategi. Satu teknik dipelajari melalui banyak bentuk soal.","Theme → technique → problem set → strategy reflection. One technique is learned through many problem forms."),
    subjects:[
      {name:t("Teori Bilangan","Number Theory"),description:t("Keterbagian, FPB-KPK, kongruensi, pola digit, pangkat, dan Diofantin dasar.","Divisibility, gcd-lcm, congruences, digit patterns, powers, and basic Diophantine equations."),topics:[t("Kongruensi","Congruences"),t("Diofantin","Diophantine equations"),t("Keterbagian","Divisibility")]},
      {name:t("Aljabar","Algebra"),description:t("Identitas, faktorisasi, substitusi, persamaan, pertidaksamaan, dan pola aljabar.","Identities, factorization, substitution, equations, inequalities, and algebraic patterns."),topics:[t("Faktorisasi","Factorization"),t("Pertidaksamaan","Inequalities"),t("Identitas","Identities")]},
      {name:t("Kombinatorika","Combinatorics"),description:t("Counting, pigeonhole, parity, invariant sederhana, dan konstruksi.","Counting, pigeonhole, parity, simple invariants, and constructions."),topics:[t("Pigeonhole","Pigeonhole"),t("Counting","Counting"),t("Invariant","Invariants")]},
      {name:t("Geometri","Geometry"),description:t("Sudut, segitiga, lingkaran, kesebangunan, luas, dan konstruksi bantu.","Angles, triangles, circles, similarity, area, and auxiliary constructions."),topics:[t("Segitiga","Triangles"),t("Lingkaran","Circles"),t("Kesebangunan","Similarity")]}
    ],
    roadmap:[
      {label:t("Tahap 1","Stage 1"),title:t("Bangun toolkit inti","Build the Core Toolkit"),description:t("Keterbagian, identitas, counting, dan geometri dasar.","Divisibility, identities, counting, and basic geometry."),topics:[t("FPB-KPK","GCD-LCM"),t("Faktorisasi","Factorization"),t("Counting","Counting")]},
      {label:t("Tahap 2","Stage 2"),title:t("Belajar teknik khas olimpiade","Learn Olympiad Techniques"),description:t("Kongruensi, pigeonhole, invariant, dan konstruksi geometri.","Congruences, pigeonhole, invariants, and geometric constructions."),topics:[t("Kongruensi","Congruences"),t("Pigeonhole","Pigeonhole"),t("Invariant","Invariants")]},
      {label:t("Tahap 3","Stage 3"),title:t("Latihan problem set campuran","Practice Mixed Problem Sets"),description:t("Bangun kemampuan memilih teknik tanpa diberi label topik.","Develop the ability to choose techniques without topic labels."),topics:[t("Mixed sets","Mixed sets"),t("Timed practice","Timed practice"),t("Solution writing","Solution writing")]}
    ],
    skills:[t("Teori bilangan","Number theory"),t("Aljabar olimpiade","Olympiad algebra"),t("Counting","Counting"),t("Geometri","Geometry"),t("Penulisan solusi","Solution writing")],
    publishedMaterials:["teori-bilangan-olimpiade-smp"]
  },

  {
    slug:"olimpiade-sma",
    category:"olimpiade",
    title:t("Olimpiade SMA","Senior High Olympiad"),
    eyebrow:t("Jalur Kompetisi · SMA","Competition Track · Senior High"),
    intro:t("Empat bidang utama olimpiade—aljabar, teori bilangan, kombinatorika, dan geometri—dipelajari melalui teknik, lemma, pola solusi, dan problem set nonrutin.","The four major olympiad areas—algebra, number theory, combinatorics, and geometry—are studied through techniques, lemmas, solution patterns, and non-routine problem sets."),
    audience:t("Siswa SMA yang menargetkan OSN, kompetisi nasional/internasional, atau ingin memperdalam problem solving matematis.","Senior-high students preparing for olympiads and national/international competitions, or seeking deeper mathematical problem solving."),
    goal:t("Membangun kedalaman strategi, kemampuan pembuktian, dan fleksibilitas menggabungkan berbagai teknik.","Build strategic depth, proof ability, and flexibility in combining techniques."),
    philosophy:t("Proof-oriented problem solving. Jawaban tidak berhenti pada hasil; struktur argumen dan alasan setiap langkah menjadi pusat pembelajaran.","Proof-oriented problem solving. A solution does not stop at the answer; the structure and justification of each step are central."),
    subjects:[
      {name:t("Aljabar Olimpiade","Olympiad Algebra"),description:t("Pertidaksamaan, polinomial, fungsi, persamaan fungsional, substitusi, dan struktur simetris.","Inequalities, polynomials, functions, functional equations, substitutions, and symmetric structure."),topics:[t("Inequalities","Inequalities"),t("Polinomial","Polynomials"),t("Functional equations","Functional equations")]},
      {name:t("Teori Bilangan","Number Theory"),description:t("Kongruensi, orde, Fermat/Euler, valuasi, Diofantin, faktor prima, dan konstruksi.","Congruences, order, Fermat/Euler, valuations, Diophantine equations, prime factors, and constructions."),topics:[t("Modular arithmetic","Modular arithmetic"),t("Diofantin","Diophantine equations"),t("Valuasi","Valuations")]},
      {name:t("Kombinatorika","Combinatorics"),description:t("Bijeksi, double counting, inclusion-exclusion, pigeonhole, invariant, extremal, rekurensi, dan graf.","Bijections, double counting, inclusion-exclusion, pigeonhole, invariants, extremal methods, recurrences, and graphs."),topics:[t("Double counting","Double counting"),t("Invariant","Invariants"),t("Extremal","Extremal"),t("Graf","Graphs")]},
      {name:t("Geometri Olimpiade","Olympiad Geometry"),description:t("Sudut, kesebangunan, lingkaran, power of a point, homothety, inversion awal, dan koordinat kompleks/vektor bila diperlukan.","Angles, similarity, circles, power of a point, homothety, introductory inversion, and coordinate/vector methods when useful."),topics:[t("Circle geometry","Circle geometry"),t("Homothety","Homothety"),t("Power of a point","Power of a point")]}
    ],
    roadmap:[
      {label:t("Fondasi","Foundations"),title:t("Kuasai teknik inti tiap bidang","Master Core Techniques in Each Area"),description:t("Pelajari teknik klasik beserta bukti dan pola penggunaannya.","Learn classical techniques together with proofs and usage patterns."),topics:[t("Inequalities","Inequalities"),t("Congruence","Congruence"),t("Counting","Counting"),t("Circle geometry","Circle geometry")]},
      {label:t("Integrasi","Integration"),title:t("Campurkan teknik","Combine Techniques"),description:t("Selesaikan soal yang tidak memberi petunjuk bidang maupun metode.","Solve problems that do not reveal their topic or method."),topics:[t("Mixed problems","Mixed problems"),t("Lemma building","Lemma building"),t("Case analysis","Case analysis")]},
      {label:t("Kompetisi","Competition"),title:t("Simulasi & pembahasan formal","Simulation & Formal Write-Up"),description:t("Latih waktu, seleksi soal, ketahanan, dan kualitas penulisan solusi.","Train timing, problem selection, endurance, and solution-writing quality."),topics:[t("Timed sets","Timed sets"),t("Full solutions","Full solutions"),t("Post-mortem","Post-mortem")]}
    ],
    skills:[t("Pembuktian","Proof"),t("Problem decomposition","Problem decomposition"),t("Lemma design","Lemma design"),t("Strategic flexibility","Strategic flexibility"),t("Competition execution","Competition execution")],
    publishedMaterials:["kombinatorika-olimpiade-sma"]
  },

  {
    slug:"onmipa",
    category:"olimpiade",
    title:t("ON-MIPA Matematika","ON-MIPA Mathematics"),
    eyebrow:t("Jalur Kompetisi · Mahasiswa","Competition Track · University"),
    intro:t("Jalur kompetisi mahasiswa yang berfokus pada Analisis Real, Analisis Kompleks, Aljabar Linear, Struktur Aljabar, dan Kombinatorika dengan pembuktian formal dan problem solving tingkat universitas.","A university competition track centered on Real Analysis, Complex Analysis, Linear Algebra, Abstract Algebra, and Combinatorics with formal proofs and university-level problem solving."),
    audience:t("Mahasiswa yang menargetkan ON-MIPA, seleksi internal kampus, atau ingin memperdalam matematika murni melalui problem solving.","University students preparing for ON-MIPA, internal selection, or deeper pure mathematics through problem solving."),
    goal:t("Menguasai hasil fundamental, teknik pembuktian, eksploitasi struktur, dan strategi menyelesaikan soal lintas topik di bawah batas waktu.","Master fundamental results, proof techniques, structural exploitation, and cross-topic problem solving under time constraints."),
    philosophy:t("Teori cukup dalam untuk memberi strategi. Setiap theorem dipelajari bersama konsekuensi, contoh tandingan, dan tipe masalah yang dapat diselesaikannya.","Theory deep enough to generate strategy. Each theorem is studied with consequences, counterexamples, and the kinds of problems it can solve."),
    subjects:[
      {name:t("Analisis Real","Real Analysis"),description:t("Supremum, barisan, deret, kontinuitas, diferensiasi, Riemann/Darboux, konvergensi fungsi, dan compactness.","Suprema, sequences, series, continuity, differentiation, Riemann/Darboux integration, function convergence, and compactness."),topics:[t("Sequences","Sequences"),t("Compactness","Compactness"),t("Riemann integral","Riemann integral"),t("Uniform convergence","Uniform convergence")]},
      {name:t("Analisis Kompleks","Complex Analysis"),description:t("Bilangan kompleks, analitik, Cauchy-Riemann, integral kontur, Cauchy theorem/formula, deret, residu, dan pemetaan.","Complex numbers, analytic functions, Cauchy-Riemann equations, contour integrals, Cauchy theorem/formula, series, residues, and mappings."),topics:[t("Cauchy theorem","Cauchy theorem"),t("Residues","Residues"),t("Series","Series"),t("Mappings","Mappings")]},
      {name:t("Aljabar Linear","Linear Algebra"),description:t("Ruang vektor, transformasi linear, rank-nullity, eigenvalue, invariant subspaces, minimal polynomial, inner products, dan canonical structure.","Vector spaces, linear maps, rank-nullity, eigenvalues, invariant subspaces, minimal polynomials, inner products, and canonical structure."),topics:[t("Basis & dimension","Basis & dimension"),t("Eigenvalues","Eigenvalues"),t("Minimal polynomial","Minimal polynomial"),t("Projection","Projection")]},
      {name:t("Struktur Aljabar","Abstract Algebra"),description:t("Grup, subgrup, homomorfisme, quotient, aksi grup, ring, ideal, dan field sesuai kebutuhan kompetisi.","Groups, subgroups, homomorphisms, quotients, group actions, rings, ideals, and fields as required for competition problems."),topics:[t("Groups","Groups"),t("Homomorphisms","Homomorphisms"),t("Quotients","Quotients"),t("Rings","Rings")]},
      {name:t("Kombinatorika","Combinatorics"),description:t("Counting, recurrence, generating functions awal, graph arguments, invariant, extremal, dan probabilistic thinking.","Counting, recurrences, introductory generating functions, graph arguments, invariants, extremal methods, and probabilistic thinking."),topics:[t("Counting","Counting"),t("Recurrence","Recurrence"),t("Graph methods","Graph methods"),t("Extremal","Extremal")]}
    ],
    roadmap:[
      {label:t("Fase 1","Phase 1"),title:t("Kuasai theorem fundamental","Master Fundamental Theorems"),description:t("Pastikan definisi dan theorem standar dapat digunakan tanpa ragu.","Ensure standard definitions and theorems can be used fluently."),topics:[t("Definitions","Definitions"),t("Core theorems","Core theorems"),t("Counterexamples","Counterexamples")]},
      {label:t("Fase 2","Phase 2"),title:t("Bangun toolbox problem solving","Build the Problem-Solving Toolbox"),description:t("Pelajari pola bukti, konstruksi, estimasi, dan reduksi struktur.","Learn proof patterns, constructions, estimates, and structural reductions."),topics:[t("Direct proof","Direct proof"),t("Contradiction","Contradiction"),t("Dimension arguments","Dimension arguments"),t("Compactness arguments","Compactness arguments")]},
      {label:t("Fase 3","Phase 3"),title:t("Simulasi soal campuran","Mixed Competition Simulation"),description:t("Latih pergantian konteks cepat antara analisis, aljabar, dan kombinatorika.","Practice rapid context switching across analysis, algebra, and combinatorics."),topics:[t("Mixed sets","Mixed sets"),t("Time strategy","Time strategy"),t("Solution audit","Solution audit")]}
    ],
    skills:[t("Formal proof","Formal proof"),t("Structural reasoning","Structural reasoning"),t("Counterexample design","Counterexample design"),t("Cross-topic transfer","Cross-topic transfer"),t("Competition strategy","Competition strategy")],
    publishedMaterials:["aljabar-linear-onmipa","analisis-real-onmipa"]
  }
];

export const learningTrackPageMap = Object.fromEntries(
  learningTrackPages.map((item) => [item.slug, item])
) as Record<string, LearningTrackPageData>;
