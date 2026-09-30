export type ExplorationText = { id: string; en: string };

export type MaterialExploration = {
  title: ExplorationText;
  goal: ExplorationText;
  tasks: ExplorationText[];
  expected: ExplorationText;
  extension: ExplorationText;
};

export const materialExplorations: Record<string, MaterialExploration[]> = {
  "pecahan":[
    {
      title:{id:"Eksperimen pecahan senilai",en:"Equivalent-Fraction Experiment"},
      goal:{id:"Mengamati bahwa berbagai representasi pecahan dapat menunjuk pada nilai yang sama.",en:"Observe that different fraction representations can denote the same value."},
      tasks:[
        {id:"Pilih tiga pecahan senilai dengan $\\frac23$.",en:"Choose three fractions equivalent to $\\frac23$."},
        {id:"Gambarkan semuanya pada satu garis bilangan.",en:"Plot all of them on the same number line."},
        {id:"Jelaskan mengapa semua titik berimpit meskipun pembilang dan penyebut berbeda.",en:"Explain why the points coincide even though numerators and denominators differ."}
      ],
      expected:{id:"Siswa melihat pecahan sebagai bilangan, bukan sekadar pasangan pembilang-penyebut.",en:"The learner sees a fraction as a number rather than merely a numerator-denominator pair."},
      extension:{id:"Cari semua pecahan berpenyebut paling banyak $20$ yang senilai dengan $\\frac34$.",en:"Find all fractions with denominator at most $20$ that are equivalent to $\\frac34$."}
    }
  ],
  "persamaan-linear":[
    {
      title:{id:"Eksplorasi geometri sistem linear",en:"Geometry of Linear Systems"},
      goal:{id:"Menghubungkan eliminasi aljabar dengan titik potong garis.",en:"Connect algebraic elimination with the intersection of lines."},
      tasks:[
        {id:"Gambar garis $2x+y=5$ dan $x-y=1$.",en:"Plot the lines $2x+y=5$ and $x-y=1$."},
        {id:"Cari titik potong secara grafik dan secara eliminasi.",en:"Find the intersection graphically and by elimination."},
        {id:"Ubah persamaan kedua menjadi $2x-2y=2$ dan jelaskan mengapa titik potong tidak berubah.",en:"Replace the second equation by $2x-2y=2$ and explain why the intersection does not change."}
      ],
      expected:{id:"Operasi persamaan ekuivalen dipahami sebagai transformasi yang mempertahankan himpunan solusi.",en:"Equivalent equation operations are understood as transformations preserving the solution set."},
      extension:{id:"Buat dua persamaan yang tidak mempunyai solusi dan jelaskan ciri geometrinya.",en:"Construct two equations with no solution and explain the geometric reason."}
    }
  ],
  "fungsi":[
    {
      title:{id:"Laboratorium transformasi grafik",en:"Graph Transformation Investigation"},
      goal:{id:"Memprediksi efek parameter pada bentuk dan posisi grafik.",en:"Predict how parameters affect the shape and position of a graph."},
      tasks:[
        {id:"Bandingkan $y=x^2$, $y=(x-2)^2$, dan $y=(x-2)^2+3$.",en:"Compare $y=x^2$, $y=(x-2)^2$, and $y=(x-2)^2+3$."},
        {id:"Catat perubahan titik puncak pada setiap transformasi.",en:"Record how the vertex changes under each transformation."},
        {id:"Eksperimen dengan koefisien negatif di depan kuadrat.",en:"Experiment with a negative coefficient in front of the square."}
      ],
      expected:{id:"Siswa mampu membaca bentuk $a(x-h)^2+k$ langsung dari parameter.",en:"The learner can read the geometry of $a(x-h)^2+k$ directly from its parameters."},
      extension:{id:"Temukan transformasi yang membawa grafik $y=x^2$ ke $y=-3(x+1)^2+4$.",en:"Determine the transformations taking $y=x^2$ to $y=-3(x+1)^2+4$."}
    }
  ],
  "trigonometri":[
    {
      title:{id:"Eksplorasi lingkaran satuan",en:"Unit-Circle Investigation"},
      goal:{id:"Menurunkan tanda dan periodisitas sinus-cosinus dari geometri lingkaran.",en:"Derive signs and periodicity of sine and cosine from unit-circle geometry."},
      tasks:[
        {id:"Gunakan lab untuk memeriksa sudut $30^\\circ,150^\\circ,210^\\circ,330^\\circ$.",en:"Use the lab to inspect $30^\\circ,150^\\circ,210^\\circ,330^\\circ$."},
        {id:"Bandingkan nilai mutlak sinus dan cosinus pada sudut-sudut tersebut.",en:"Compare the absolute sine and cosine values at those angles."},
        {id:"Jelaskan tanda berdasarkan kuadran.",en:"Explain the signs using quadrants."}
      ],
      expected:{id:"Identitas dan tanda trigonometri dipahami dari koordinat titik, bukan hafalan tabel.",en:"Trigonometric signs and values are understood from coordinates rather than memorized tables."},
      extension:{id:"Turunkan hubungan $\\sin(\\pi-\\theta)=\\sin\\theta$ dari simetri lingkaran.",en:"Derive $\\sin(\\pi-\\theta)=\\sin\\theta$ from circle symmetry."}
    }
  ],
  "integral-riemann":[
    {
      title:{id:"Konvergensi numerik jumlah Riemann",en:"Numerical Convergence of Riemann Sums"},
      goal:{id:"Mengamati bagaimana pemilihan partisi memperbaiki aproksimasi integral.",en:"Observe how refining a partition improves an integral approximation."},
      tasks:[
        {id:"Pada lab $f(x)=x^2$ di $[0,1]$, catat jumlah Riemann untuk $n=4,8,16,32$.",en:"In the $f(x)=x^2$ lab on $[0,1]$, record the Riemann sums for $n=4,8,16,32$."},
        {id:"Hitung galat terhadap nilai tepat $1/3$.",en:"Compute the error relative to the exact value $1/3$."},
        {id:"Amati apakah galat menurun ketika $n$ digandakan.",en:"Observe whether the error decreases when $n$ is doubled."}
      ],
      expected:{id:"Definisi limit integral terhubung dengan perilaku aproksimasi numerik.",en:"The limiting definition of the integral is connected to numerical approximation behavior."},
      extension:{id:"Bandingkan titik ujung kiri, kanan, dan titik tengah untuk fungsi naik.",en:"Compare left, right, and midpoint sampling for an increasing function."}
    }
  ],
  "prinsip-pigeonhole":[
    {
      title:{id:"Merancang kotak yang tepat",en:"Designing the Right Boxes"},
      goal:{id:"Melatih tahap tersulit pigeonhole: menentukan klasifikasi objek.",en:"Practice the hardest pigeonhole step: choosing the classification."},
      tasks:[
        {id:"Ambil $13$ bilangan bulat dan targetkan dua bilangan berselisih kelipatan $12$.",en:"Take $13$ integers and target two whose difference is divisible by $12$."},
        {id:"Tentukan objek dan kotak yang sesuai.",en:"Identify the objects and boxes."},
        {id:"Tuliskan argumen satu paragraf tanpa menyebut contoh bilangan tertentu.",en:"Write a one-paragraph proof without choosing specific integers."}
      ],
      expected:{id:"Kelas residu dikenali sebagai model kotak alami untuk masalah keterbagian.",en:"Residue classes are recognized as natural boxes for divisibility problems."},
      extension:{id:"Ubah target menjadi selisih habis dibagi $m$ dan tentukan banyak objek minimum.",en:"Generalize the target to a difference divisible by $m$ and determine the minimum number of objects."}
    }
  ],
  "spektrum-graf":[
    {
      title:{id:"Spektrum dan perubahan struktur graf",en:"Spectrum versus Graph Structure"},
      goal:{id:"Membandingkan perubahan eigenvalue ketika jenis graf diubah.",en:"Compare how eigenvalues change when the graph family changes."},
      tasks:[
        {id:"Pada lab, bandingkan $P_5$, $C_5$, dan $K_5$.",en:"In the lab, compare $P_5$, $C_5$, and $K_5$."},
        {id:"Catat spectral radius masing-masing.",en:"Record the spectral radius of each graph."},
        {id:"Hubungkan spectral radius dengan derajat maksimum dan regularitas.",en:"Relate the spectral radius to maximum degree and regularity."}
      ],
      expected:{id:"Spektrum dibaca sebagai informasi struktural, bukan sekadar daftar akar polinomial.",en:"The spectrum is interpreted as structural information rather than merely roots of a polynomial."},
      extension:{id:"Bandingkan jumlah kuadrat eigenvalue dengan $2|E|$ untuk ketiga graf.",en:"Compare the sum of squared eigenvalues with $2|E|$ for all three graphs."}
    }
  ],
  "teori-bilangan-olimpiade-smp":[
    {
      title:{id:"Mencari periode residu",en:"Discovering Residue Cycles"},
      goal:{id:"Menemukan pola periodik pangkat secara eksperimental lalu membuktikannya.",en:"Discover periodic power residues experimentally and then prove the pattern."},
      tasks:[
        {id:"Hitung $2^n\\pmod7$ untuk $n=1,2,\\ldots,12$.",en:"Compute $2^n\\pmod7$ for $n=1,2,\\ldots,12$."},
        {id:"Tentukan panjang periode terkecil.",en:"Determine the smallest period."},
        {id:"Gunakan periode tersebut untuk menghitung $2^{2026}\\pmod7$.",en:"Use the period to compute $2^{2026}\\pmod7$."}
      ],
      expected:{id:"Pangkat besar direduksi melalui struktur siklik residu.",en:"Large powers are reduced using cyclic residue structure."},
      extension:{id:"Lakukan eksperimen yang sama untuk basis $3$ modulo $7$ dan bandingkan periodenya.",en:"Repeat the experiment for base $3$ modulo $7$ and compare the periods."}
    }
  ],
  "kombinatorika-olimpiade-sma":[
    {
      title:{id:"Satu objek, dua cara menghitung",en:"One Set, Two Counts"},
      goal:{id:"Membangun pembuktian double counting dari objek konkret.",en:"Build a double-counting proof from a concrete set of objects."},
      tasks:[
        {id:"Definisikan himpunan pasangan $(S,x)$ dengan $S\\subseteq[n]$ dan $x\\in S$.",en:"Define pairs $(S,x)$ with $S\\subseteq[n]$ and $x\\in S$."},
        {id:"Hitung menurut ukuran $S$.",en:"Count by the size of $S$."},
        {id:"Hitung menurut pilihan $x$ dan samakan kedua hasil.",en:"Count by the choice of $x$ and equate the results."}
      ],
      expected:{id:"Identitas $\\sum k\\binom nk=n2^{n-1}$ muncul sebagai kesetaraan dua klasifikasi.",en:"The identity $\\sum k\\binom nk=n2^{n-1}$ emerges from two classifications of the same set."},
      extension:{id:"Buat interpretasi double counting untuk $\\sum k(k-1)\\binom nk$.",en:"Construct a double-counting interpretation of $\\sum k(k-1)\\binom nk$."}
    }
  ],
  "aljabar-linear-onmipa":[
    {
      title:{id:"Eksplorasi operator idempoten",en:"Investigating Idempotent Operators"},
      goal:{id:"Menghubungkan persamaan operator dengan kernel, image, eigenvalue, dan diagonalizability.",en:"Connect an operator identity with kernel, image, eigenvalues, and diagonalizability."},
      tasks:[
        {id:"Ambil matriks $P=\\begin{pmatrix}1&0\\0&0\\end{pmatrix}$ dan verifikasi $P^2=P$.",en:"Take $P=\\begin{pmatrix}1&0\\0&0\\end{pmatrix}$ and verify $P^2=P$."},
        {id:"Tentukan kernel dan image $P$.",en:"Find the kernel and image of $P$."},
        {id:"Bandingkan basis kernel-image dengan eigenvektor untuk nilai eigen $0$ dan $1$.",en:"Compare kernel/image bases with eigenvectors for eigenvalues $0$ and $1$."}
      ],
      expected:{id:"Dekomposisi $V=\\ker P\\oplus\\operatorname{im}P$ terlihat secara konkret.",en:"The decomposition $V=\\ker P\\oplus\\operatorname{im}P$ becomes concrete."},
      extension:{id:"Cari bentuk umum semua matriks diagonal $3\\times3$ yang idempoten.",en:"Find the general form of all diagonal $3\\times3$ idempotent matrices."}
    }
  ],
  "analisis-real-onmipa":[
    {
      title:{id:"Eksperimen kuantor pada konvergensi",en:"Quantifier Experiment for Convergence"},
      goal:{id:"Membedakan ketergantungan $N$ pada $\\varepsilon$ dan pada titik domain.",en:"Distinguish how $N$ may depend on $\\varepsilon$ but not on the domain point in uniform convergence."},
      tasks:[
        {id:"Untuk $a_n=1/n$, tentukan $N$ yang bekerja untuk $\\varepsilon=0.1,0.05,0.01$.",en:"For $a_n=1/n$, find an $N$ that works for $\\varepsilon=0.1,0.05,0.01$."},
        {id:"Tuliskan definisi konvergensi barisan dengan urutan kuantor lengkap.",en:"Write the definition of sequence convergence with the full quantifier order."},
        {id:"Bandingkan dengan definisi konvergensi seragam $f_n\\to f$.",en:"Compare it with the definition of uniform convergence $f_n\\to f$."}
      ],
      expected:{id:"Urutan kuantor dipahami sebagai bagian esensial definisi, bukan formalitas simbolik.",en:"Quantifier order is understood as an essential part of the definition, not symbolic decoration."},
      extension:{id:"Jelaskan mengapa $f_n(x)=x^n$ pada $[0,1]$ gagal memenuhi satu $N$ yang bekerja seragam.",en:"Explain why $f_n(x)=x^n$ on $[0,1]$ fails to admit a single uniform $N$."}
    }
  ]
};
