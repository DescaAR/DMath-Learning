export type BiText = { id: string; en: string };

export type ExtensionTheorem = {
  name: BiText;
  statement: BiText;
  proof: BiText[];
};

export type ExtensionExample = {
  question: BiText;
  solution: BiText[];
};

export type ExtensionUnit = {
  title: BiText;
  intro: BiText;
  paragraphs: BiText[];
  formulas?: string[];
  theorem?: ExtensionTheorem;
  example?: ExtensionExample;
  notes: BiText[];
};

export const materialExtensions: Record<string, ExtensionUnit[]> = {
  "pecahan": [
    {
      title:{id:"Perkalian dan pembagian pecahan",en:"Multiplication and Division of Fractions"},
      intro:{id:"Perkalian pecahan dapat dipahami sebagai mengambil suatu bagian dari bagian lain, sedangkan pembagian membandingkan berapa banyak satu kuantitas termuat di dalam kuantitas lain.",en:"Multiplying fractions can be understood as taking a fraction of another quantity, while division asks how many copies of one quantity fit into another."},
      paragraphs:[
        {id:"Jika $a/b$ dari suatu kuantitas kemudian diambil lagi sebanyak $c/d$ bagiannya, proporsi akhir adalah hasil kali kedua skala tersebut. Karena itu pembilang dan penyebut dikalikan secara terpisah.",en:"If a quantity is first scaled by $a/b$ and then by $c/d$, the final scale is the product of the two factors. This explains why numerators and denominators multiply separately."},
        {id:"Pembagian $\\frac ab\\div\\frac cd$ dapat ditulis sebagai pencarian $x$ yang memenuhi $x\\frac cd=\\frac ab$. Menyelesaikan terhadap $x$ menghasilkan aturan mengalikan dengan kebalikan.",en:"The division $\\frac ab\\div\\frac cd$ can be interpreted as finding $x$ such that $x\\frac cd=\\frac ab$. Solving for $x$ yields the reciprocal rule."}
      ],
      formulas:["$$\\frac ab\\cdot\\frac cd=\\frac{ac}{bd}.$$","$$\\frac ab\\div\\frac cd=\\frac ab\\cdot\\frac dc,\\qquad c,d\\neq0.$$"],
      theorem:{
        name:{id:"Sifat invers perkalian",en:"Multiplicative Inverse Property"},
        statement:{id:"Untuk $a,b\\neq0$, berlaku $\\frac ab\\cdot\\frac ba=1$.",en:"For $a,b\\neq0$, $\\frac ab\\cdot\\frac ba=1$."},
        proof:[
          {id:"Dari definisi perkalian pecahan, $\\frac ab\\cdot\\frac ba=\\frac{ab}{ba}$.",en:"By the definition of fraction multiplication, $\\frac ab\\cdot\\frac ba=\\frac{ab}{ba}$."},
          {id:"Karena $ab\\neq0$, pembilang dan penyebut sama dan nilainya $1$.",en:"Since $ab\\neq0$, numerator and denominator are equal, so the value is $1$."}
        ]
      },
      example:{
        question:{id:"Hitung $\\frac34\\div\\frac25$ dan jelaskan maknanya.",en:"Compute $\\frac34\\div\\frac25$ and interpret the result."},
        solution:[
          {id:"Gunakan kebalikan: $\\frac34\\cdot\\frac52=\\frac{15}{8}$.",en:"Use the reciprocal: $\\frac34\\cdot\\frac52=\\frac{15}{8}$."},
          {id:"Artinya, $\\frac25$ termuat sebanyak $\\frac{15}{8}$ kali di dalam $\\frac34$.",en:"Thus, $\\frac25$ fits $\\frac{15}{8}$ times into $\\frac34$."}
        ]
      },
      notes:[{id:"Mencoret faktor hanya sah pada perkalian, bukan pada penjumlahan.",en:"Cancellation is valid for multiplicative factors, not across addition."}]
    },
    {
      title:{id:"Rasio, proporsi, dan skala",en:"Ratios, Proportions, and Scale"},
      intro:{id:"Pecahan menjadi bahasa alami untuk membandingkan dua kuantitas dan membangun model proporsional.",en:"Fractions provide a natural language for comparing quantities and building proportional models."},
      paragraphs:[
        {id:"Persamaan $a/b=c/d$ menyatakan dua rasio yang sama. Dengan penyebut tidak nol, kesetaraan ini ekuivalen dengan $ad=bc$.",en:"The equation $a/b=c/d$ states that two ratios are equal. With nonzero denominators, this is equivalent to $ad=bc$."},
        {id:"Model proporsional berlaku ketika satu kuantitas merupakan kelipatan tetap dari kuantitas lain. Grafik hubungan tersebut melalui titik asal dan mempunyai gradien konstan.",en:"A proportional model applies when one quantity is a fixed multiple of another. Its graph passes through the origin and has constant slope."}
      ],
      formulas:["$$\\frac ab=\\frac cd\\iff ad=bc,\\qquad b,d\\neq0.$$","$$y=kx.$$"],
      example:{
        question:{id:"Sebuah peta berskala $1:50{,}000$. Jarak pada peta $3.6$ cm. Tentukan jarak sebenarnya.",en:"A map has scale $1:50{,}000$. A map distance is $3.6$ cm. Find the actual distance."},
        solution:[
          {id:"Jarak sebenarnya $=3.6\\times50{,}000=180{,}000$ cm.",en:"Actual distance $=3.6\\times50{,}000=180{,}000$ cm."},
          {id:"Karena $100{,}000$ cm $=1$ km, jaraknya $1.8$ km.",en:"Since $100{,}000$ cm $=1$ km, the distance is $1.8$ km."}
        ]
      },
      notes:[{id:"Proporsi harus menggunakan satuan yang konsisten.",en:"Proportions require consistent units."}]
    }
  ],

  "persamaan-linear": [
    {
      title:{id:"Sistem linear dan eliminasi",en:"Linear Systems and Elimination"},
      intro:{id:"Sistem persamaan linear mencari nilai variabel yang memenuhi beberapa kendala linear secara serentak.",en:"A linear system seeks variable values satisfying several linear constraints simultaneously."},
      paragraphs:[
        {id:"Eliminasi bekerja dengan mengganti sistem oleh sistem lain yang mempunyai himpunan solusi sama. Operasi yang digunakan adalah pertukaran persamaan, perkalian suatu persamaan dengan skalar tak nol, dan penambahan kelipatan persamaan lain.",en:"Elimination replaces a system by an equivalent one with the same solution set. Allowed operations are equation swaps, multiplication by a nonzero scalar, and adding a multiple of another equation."},
        {id:"Pada dua variabel, determinan koefisien memberi informasi langsung tentang keunikan solusi.",en:"For two variables, the coefficient determinant gives immediate information about uniqueness."}
      ],
      formulas:["$$\\begin{cases}ax+by=e,\\\\cx+dy=f.\\end{cases}$$","$$\\Delta=ad-bc.$$"],
      theorem:{
        name:{id:"Kriteria solusi tunggal sistem $2\\times2$",en:"Unique-Solution Criterion for a $2\\times2$ System"},
        statement:{id:"Jika $ad-bc\\neq0$, sistem mempunyai tepat satu solusi.",en:"If $ad-bc\\neq0$, the system has exactly one solution."},
        proof:[
          {id:"Eliminasi menghasilkan $(ad-bc)x=de-bf$.",en:"Elimination yields $(ad-bc)x=de-bf$."},
          {id:"Karena $ad-bc\\neq0$, nilai $x$ unik. Substitusi kembali memberi nilai $y$ yang juga unik.",en:"Since $ad-bc\\neq0$, $x$ is unique. Back-substitution then gives a unique $y$."}
        ]
      },
      example:{
        question:{id:"Selesaikan $3x+2y=11$ dan $2x-y=1$.",en:"Solve $3x+2y=11$ and $2x-y=1$."},
        solution:[
          {id:"Dari persamaan kedua, $y=2x-1$.",en:"From the second equation, $y=2x-1$."},
          {id:"Substitusi memberi $3x+4x-2=11$, jadi $x=13/7$ dan $y=19/7$.",en:"Substitution gives $3x+4x-2=11$, hence $x=13/7$ and $y=19/7$."}
        ]
      },
      notes:[{id:"Selalu periksa hasil dengan mensubstitusikan kembali ke seluruh persamaan.",en:"Always verify the result in every original equation."}]
    },
    {
      title:{id:"Parameter dan klasifikasi solusi",en:"Parameters and Classification of Solutions"},
      intro:{id:"Parameter dapat mengubah suatu sistem dari mempunyai satu solusi menjadi tidak konsisten atau mempunyai tak hingga solusi.",en:"A parameter can change a system from uniquely solvable to inconsistent or infinitely solvable."},
      paragraphs:[
        {id:"Pada bentuk tereduksi, baris $0=c$ dengan $c\\neq0$ menandakan kontradiksi dan sistem tidak mempunyai solusi.",en:"In reduced form, a row $0=c$ with $c\\neq0$ is a contradiction, so the system has no solution."},
        {id:"Jika tidak ada kontradiksi tetapi ada variabel bebas, sistem mempunyai tak hingga solusi.",en:"If there is no contradiction but at least one free variable remains, the system has infinitely many solutions."}
      ],
      formulas:["$$0=1\\quad\\Rightarrow\\quad\\text{tidak ada solusi}.$$","$$\\text{variabel bebas}\\quad\\Rightarrow\\quad\\text{tak hingga solusi}.$$"],
      example:{
        question:{id:"Klasifikasikan $x+2y=3$ dan $2x+4y=k$.",en:"Classify $x+2y=3$ and $2x+4y=k$."},
        solution:[
          {id:"Dua kali persamaan pertama memberi $2x+4y=6$.",en:"Twice the first equation gives $2x+4y=6$."},
          {id:"Jika $k=6$, kedua persamaan sama dan terdapat tak hingga solusi. Jika $k\\neq6$, sistem kontradiktif dan tidak mempunyai solusi.",en:"If $k=6$, the equations are equivalent and there are infinitely many solutions. If $k\\neq6$, the system is inconsistent."}
        ]
      },
      notes:[{id:"Parameter harus dianalisis pada nilai kritis yang membuat koefisien hilang atau persamaan menjadi bergantung.",en:"Parameters should be checked at critical values where coefficients vanish or equations become dependent."}]
    }
  ],

  "fungsi": [
    {
      title:{id:"Transformasi grafik fungsi",en:"Transformations of Function Graphs"},
      intro:{id:"Banyak grafik baru dapat diperoleh dari satu grafik dasar melalui translasi, refleksi, dan penskalaan.",en:"Many new graphs can be obtained from a base graph through translations, reflections, and scalings."},
      paragraphs:[
        {id:"Perubahan di luar fungsi, seperti $f(x)+k$, menggeser grafik secara vertikal. Perubahan pada input, seperti $f(x-h)$, menggeser grafik secara horizontal.",en:"Changes outside the function, such as $f(x)+k$, shift the graph vertically. Changes to the input, such as $f(x-h)$, shift it horizontally."},
        {id:"Tanda negatif pada $-f(x)$ merefleksikan grafik terhadap sumbu-$x$, sedangkan $f(-x)$ merefleksikan terhadap sumbu-$y$.",en:"A negative sign in $-f(x)$ reflects the graph across the $x$-axis, while $f(-x)$ reflects it across the $y$-axis."}
      ],
      formulas:["$$g(x)=af(b(x-h))+k.$$"],
      example:{
        question:{id:"Jelaskan perubahan dari $y=x^2$ ke $y=-2(x-3)^2+1$.",en:"Describe the transformation from $y=x^2$ to $y=-2(x-3)^2+1$."},
        solution:[
          {id:"Geser $3$ satuan ke kanan.",en:"Shift $3$ units to the right."},
          {id:"Regangkan vertikal faktor $2$, refleksikan terhadap sumbu-$x$, lalu geser $1$ satuan ke atas.",en:"Stretch vertically by factor $2$, reflect across the $x$-axis, then shift $1$ unit upward."}
        ]
      },
      notes:[{id:"Transformasi horizontal memiliki tanda yang tampak berlawanan di dalam argumen.",en:"Horizontal shifts use the apparently opposite sign inside the argument."}]
    },
    {
      title:{id:"Monotonisitas dan komposisi",en:"Monotonicity and Composition"},
      intro:{id:"Sifat naik atau turun suatu fungsi memberi informasi tentang injektivitas dan perilaku komposisi.",en:"Monotonicity provides useful information about injectivity and composition."},
      paragraphs:[
        {id:"Fungsi yang naik tegas atau turun tegas pada suatu interval pasti injektif pada interval tersebut.",en:"A strictly increasing or strictly decreasing function on an interval is injective there."},
        {id:"Komposisi dua fungsi naik adalah naik; komposisi dua fungsi turun juga naik, sedangkan komposisi satu fungsi naik dan satu turun bersifat turun.",en:"The composition of two increasing functions is increasing; the composition of two decreasing functions is also increasing, while composing one increasing and one decreasing function yields a decreasing function."}
      ],
      theorem:{
        name:{id:"Monoton tegas mengimplikasikan injektif",en:"Strict Monotonicity Implies Injectivity"},
        statement:{id:"Jika $f$ naik tegas pada $I$, maka $f$ injektif pada $I$.",en:"If $f$ is strictly increasing on $I$, then $f$ is injective on $I$."},
        proof:[
          {id:"Ambil $x_1,x_2\\in I$ dan andaikan $f(x_1)=f(x_2)$.",en:"Take $x_1,x_2\\in I$ and assume $f(x_1)=f(x_2)$."},
          {id:"Jika $x_1<x_2$, kenaikan tegas memberi $f(x_1)<f(x_2)$, kontradiksi. Kasus $x_2<x_1$ serupa. Jadi $x_1=x_2$.",en:"If $x_1<x_2$, strict increase gives $f(x_1)<f(x_2)$, a contradiction. The case $x_2<x_1$ is similar. Therefore $x_1=x_2$."}
        ]
      },
      notes:[{id:"Injektif tidak selalu berarti monoton jika domain tidak berupa interval.",en:"Injectivity does not always imply monotonicity when the domain is not an interval."}]
    }
  ],

  "trigonometri": [
    {
      title:{id:"Rumus jumlah, selisih, dan sudut ganda",en:"Angle Sum, Difference, and Double-Angle Formulas"},
      intro:{id:"Identitas jumlah-selisih merupakan sumber banyak identitas lain dan dapat diturunkan secara geometris maupun aljabar.",en:"Angle-sum and difference identities generate many other identities and can be derived geometrically or algebraically."},
      paragraphs:[
        {id:"Setelah rumus jumlah-selisih diketahui, rumus sudut ganda diperoleh dengan mengambil $\\alpha=\\beta$.",en:"Once the sum-difference formulas are known, the double-angle formulas follow by setting $\\alpha=\\beta$."},
        {id:"Bentuk alternatif $\\cos2x=2\\cos^2x-1=1-2\\sin^2x$ sangat berguna saat mengubah pangkat kuadrat trigonometri.",en:"The alternative forms $\\cos2x=2\\cos^2x-1=1-2\\sin^2x$ are useful for rewriting squared trigonometric terms."}
      ],
      formulas:["$$\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta.$$","$$\\cos2x=\\cos^2x-\\sin^2x.$$"],
      example:{
        question:{id:"Hitung $\\sin75^\\circ$ secara eksak.",en:"Compute $\\sin75^\\circ$ exactly."},
        solution:[
          {id:"Tulis $75^\\circ=45^\\circ+30^\\circ$.",en:"Write $75^\\circ=45^\\circ+30^\\circ$."},
          {id:"Diperoleh $\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12=\\frac{\\sqrt6+\\sqrt2}{4}$.",en:"This gives $\\frac{\\sqrt2}{2}\\frac{\\sqrt3}{2}+\\frac{\\sqrt2}{2}\\frac12=\\frac{\\sqrt6+\\sqrt2}{4}$."}
        ]
      },
      notes:[{id:"Identitas harus berlaku untuk seluruh nilai pada domainnya, bukan hanya beberapa sudut khusus.",en:"An identity must hold for every value in its domain, not only selected special angles."}]
    },
    {
      title:{id:"Persamaan trigonometri dan periodisitas",en:"Trigonometric Equations and Periodicity"},
      intro:{id:"Menyelesaikan persamaan trigonometri memerlukan solusi dasar sekaligus seluruh keluarga periodiknya.",en:"Solving trigonometric equations requires both base solutions and their full periodic families."},
      paragraphs:[
        {id:"Untuk $\\sin x=a$, solusi pada satu periode harus ditemukan terlebih dahulu, kemudian ditambah periode yang sesuai.",en:"For $\\sin x=a$, first find all solutions in one period, then add the appropriate period."},
        {id:"Pembagian dengan fungsi trigonometri dapat kehilangan solusi ketika fungsi pembagi bernilai nol, sehingga kasus tersebut harus diperiksa terpisah.",en:"Dividing by a trigonometric expression may lose solutions where the divisor is zero, so those cases must be checked separately."}
      ],
      formulas:["$$\\sin x=\\sin\\alpha\\iff x=\\alpha+2k\\pi\\text{ atau }x=\\pi-\\alpha+2k\\pi.$$"],
      example:{
        question:{id:"Selesaikan $2\\sin x\\cos x=\\frac12$ untuk $0\\le x<2\\pi$.",en:"Solve $2\\sin x\\cos x=\\frac12$ for $0\\le x<2\\pi$."},
        solution:[
          {id:"Gunakan $2\\sin x\\cos x=\\sin2x$, jadi $\\sin2x=1/2$.",en:"Use $2\\sin x\\cos x=\\sin2x$, so $\\sin2x=1/2$."},
          {id:"Pada $0\\le2x<4\\pi$, diperoleh $2x=\\pi/6,5\\pi/6,13\\pi/6,17\\pi/6$.",en:"On $0\\le2x<4\\pi$, $2x=\\pi/6,5\\pi/6,13\\pi/6,17\\pi/6$."},
          {id:"Jadi $x=\\pi/12,5\\pi/12,13\\pi/12,17\\pi/12$.",en:"Hence $x=\\pi/12,5\\pi/12,13\\pi/12,17\\pi/12$."}
        ]
      },
      notes:[{id:"Selalu cocokkan periode fungsi dengan interval yang diminta.",en:"Always match the function's period with the requested interval."}]
    }
  ],

  "integral-riemann": [
    {
      title:{id:"Sifat aljabar integral Riemann",en:"Algebraic Properties of the Riemann Integral"},
      intro:{id:"Setelah integrabilitas diketahui, integral berperilaku linear dan kompatibel dengan urutan.",en:"Once integrability is established, the integral is linear and respects order."},
      paragraphs:[
        {id:"Jika $f$ dan $g$ terintegralkan, kombinasi linear $af+bg$ juga terintegralkan. Sifat ini mengikuti langsung dari linearitas jumlah Riemann.",en:"If $f$ and $g$ are integrable, every linear combination $af+bg$ is integrable. This follows directly from linearity of Riemann sums."},
        {id:"Jika $f\\le g$ pada seluruh interval, setiap jumlah bawah/atas yang sesuai mempertahankan urutan, yang pada limit memberi $\\int f\\le\\int g$.",en:"If $f\\le g$ throughout the interval, corresponding sums preserve the order, and passing to the limit gives $\\int f\\le\\int g$."}
      ],
      formulas:["$$\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^bf+\\beta\\int_a^bg.$$","$$f\\le g\\Rightarrow\\int_a^bf\\le\\int_a^bg.$$"],
      theorem:{
        name:{id:"Ketaksamaan nilai mutlak integral",en:"Absolute-Value Inequality"},
        statement:{id:"Jika $f$ terintegralkan Riemann, maka $\\left|\\int_a^bf\\right|\\le\\int_a^b|f|$.",en:"If $f$ is Riemann integrable, then $\\left|\\int_a^bf\\right|\\le\\int_a^b|f|$."},
        proof:[
          {id:"Untuk setiap $x$, berlaku $-|f(x)|\\le f(x)\\le|f(x)|$.",en:"For every $x$, $-|f(x)|\\le f(x)\\le|f(x)|$."},
          {id:"Monotonisitas integral memberi $-\\int|f|\\le\\int f\\le\\int|f|$.",en:"Monotonicity of the integral gives $-\\int|f|\\le\\int f\\le\\int|f|$."},
          {id:"Pernyataan tersebut ekuivalen dengan ketaksamaan nilai mutlak yang diinginkan.",en:"This is equivalent to the desired absolute-value inequality."}
        ]
      },
      notes:[{id:"Ketaksamaan ini sangat penting untuk estimasi galat.",en:"This inequality is fundamental for error estimates."}]
    },
    {
      title:{id:"Teorema Dasar Kalkulus dalam kerangka Riemann",en:"The Fundamental Theorem of Calculus in the Riemann Setting"},
      intro:{id:"Teorema Dasar Kalkulus menghubungkan dua operasi yang awalnya didefinisikan berbeda: diferensiasi dan integrasi.",en:"The Fundamental Theorem of Calculus links two operations that are initially defined independently: differentiation and integration."},
      paragraphs:[
        {id:"Jika $f$ kontinu dan $F(x)=\\int_a^x f(t)\\,dt$, maka perubahan kecil pada $F$ dikontrol oleh nilai $f$ pada interval pendek.",en:"If $f$ is continuous and $F(x)=\\int_a^x f(t)\\,dt$, then small changes in $F$ are controlled by values of $f$ over short intervals."},
        {id:"Kontinuitas memastikan nilai rata-rata pada interval pendek mendekati $f(x)$, yang menghasilkan $F'(x)=f(x)$.",en:"Continuity ensures that the average value over a short interval approaches $f(x)$, giving $F'(x)=f(x)$."}
      ],
      formulas:["$$F(x)=\\int_a^x f(t)\\,dt\\quad\\Longrightarrow\\quad F'(x)=f(x).$$"],
      example:{
        question:{id:"Jika $F(x)=\\int_0^x(t^2+1)\\,dt$, tentukan $F'(x)$.",en:"If $F(x)=\\int_0^x(t^2+1)\\,dt$, find $F'(x)$."},
        solution:[{id:"Karena integran kontinu, Teorema Dasar Kalkulus memberi $F'(x)=x^2+1$.",en:"Since the integrand is continuous, the Fundamental Theorem of Calculus gives $F'(x)=x^2+1$."}]
      },
      notes:[{id:"Hipotesis kontinuitas dapat dilemahkan dalam teori integrasi yang lebih lanjut.",en:"The continuity hypothesis can be weakened in more advanced integration theories."}]
    }
  ],

  "prinsip-pigeonhole": [
    {
      title:{id:"Pigeonhole dengan interval dan jarak",en:"Pigeonhole with Intervals and Distances"},
      intro:{id:"Banyak soal geometri diskrit dapat diubah menjadi pigeonhole dengan membagi ruang ke dalam region kecil.",en:"Many discrete-geometry problems become pigeonhole problems after partitioning space into small regions."},
      paragraphs:[
        {id:"Jika suatu interval panjang $L$ dibagi menjadi $k$ subinterval sama panjang, dua dari lebih dari $k$ titik harus masuk ke subinterval yang sama.",en:"If an interval of length $L$ is divided into $k$ equal subintervals, two among more than $k$ points must lie in the same subinterval."},
        {id:"Akibatnya, jarak kedua titik tersebut tidak melebihi panjang satu subinterval, yaitu $L/k$.",en:"Consequently, their distance is at most the length of one subinterval, namely $L/k$."}
      ],
      theorem:{
        name:{id:"Jarak dekat pada interval",en:"Nearby Points on an Interval"},
        statement:{id:"Di antara $n+1$ titik pada interval panjang $L$, terdapat dua titik berjarak paling banyak $L/n$.",en:"Among $n+1$ points in an interval of length $L$, two are at distance at most $L/n$."},
        proof:[
          {id:"Bagi interval menjadi $n$ bagian masing-masing panjang $L/n$.",en:"Partition the interval into $n$ parts of length $L/n$."},
          {id:"Dengan $n+1$ titik sebagai objek dan $n$ bagian sebagai kotak, dua titik berada dalam bagian yang sama.",en:"With $n+1$ points and $n$ boxes, two points lie in the same part."},
          {id:"Jarak kedua titik tidak melebihi panjang bagian tersebut.",en:"Their distance is at most the length of that part."}
        ]
      },
      notes:[{id:"Pemilihan partisi menentukan batas jarak yang diperoleh.",en:"The chosen partition determines the distance bound."}]
    },
    {
      title:{id:"Pigeonhole pada subset dan jumlah parsial",en:"Pigeonhole with Subsets and Partial Sums"},
      intro:{id:"Jumlah parsial modulo suatu bilangan adalah salah satu pola pigeonhole paling kuat dalam olimpiade.",en:"Partial sums modulo an integer form one of the most powerful pigeonhole patterns in olympiad problems."},
      paragraphs:[
        {id:"Untuk barisan $a_1,\\ldots,a_n$, pertimbangkan $S_k=a_1+\\cdots+a_k$ modulo $n$.",en:"For a sequence $a_1,\\ldots,a_n$, consider $S_k=a_1+\\cdots+a_k$ modulo $n$."},
        {id:"Jika tidak ada $S_k$ yang nol modulo $n$, ada $n$ jumlah parsial yang menempati hanya $n-1$ kelas residu tak nol. Dua di antaranya memiliki residu sama dan selisihnya memberi blok berurutan dengan jumlah kelipatan $n$.",en:"If no $S_k$ is zero modulo $n$, the $n$ partial sums occupy only the $n-1$ nonzero residue classes. Two have the same residue, and their difference yields a consecutive block whose sum is divisible by $n$."}
      ],
      formulas:["$$S_j-S_i=a_{i+1}+\\cdots+a_j.$$"],
      notes:[{id:"Trik jumlah parsial mengubah masalah subbarisan menjadi masalah tabrakan residu.",en:"Partial sums turn a subsequence problem into a collision of residues."}]
    }
  ],

  "spektrum-graf": [
    {
      title:{id:"Momen spektral dan closed walks",en:"Spectral Moments and Closed Walks"},
      intro:{id:"Pangkat matriks adjacency menghitung walk, sehingga jejak pangkat matriks menghubungkan nilai eigen dengan struktur graf.",en:"Powers of the adjacency matrix count walks, so traces of matrix powers connect eigenvalues with graph structure."},
      paragraphs:[
        {id:"Entri $(A^k)_{ij}$ sama dengan banyak walk panjang $k$ dari simpul $i$ ke simpul $j$.",en:"The entry $(A^k)_{ij}$ equals the number of walks of length $k$ from vertex $i$ to vertex $j$."},
        {id:"Karena jejak menjumlahkan entri diagonal, $\\operatorname{tr}(A^k)$ menghitung closed walks panjang $k$.",en:"Since the trace sums diagonal entries, $\\operatorname{tr}(A^k)$ counts closed walks of length $k$."}
      ],
      formulas:["$$\\operatorname{tr}(A^k)=\\sum_{i=1}^n\\lambda_i^k.$$"],
      theorem:{
        name:{id:"Jumlah kuadrat nilai eigen adjacency",en:"Sum of Squared Adjacency Eigenvalues"},
        statement:{id:"Untuk graf sederhana $G$, $\\sum_i\\lambda_i^2=2|E(G)|$.",en:"For a simple graph $G$, $\\sum_i\\lambda_i^2=2|E(G)|$."},
        proof:[
          {id:"Nilai $\\operatorname{tr}(A^2)=\\sum_i\\lambda_i^2$.",en:"We have $\\operatorname{tr}(A^2)=\\sum_i\\lambda_i^2$."},
          {id:"Entri diagonal $(A^2)_{ii}$ adalah derajat simpul $i$.",en:"The diagonal entry $(A^2)_{ii}$ equals the degree of vertex $i$."},
          {id:"Dengan lemma jabat tangan, jumlah derajat adalah $2|E|$.",en:"By the handshaking lemma, the degree sum is $2|E|$."}
        ]
      },
      notes:[{id:"Momen spektral ketiga berkaitan dengan banyak segitiga.",en:"The third spectral moment is related to the number of triangles."}]
    },
    {
      title:{id:"Graf regular dan eigenvalue utama",en:"Regular Graphs and the Principal Eigenvalue"},
      intro:{id:"Regularitas langsung menghasilkan eigenvektor yang sangat sederhana: vektor semua-satu.",en:"Regularity immediately produces a very simple eigenvector: the all-ones vector."},
      paragraphs:[
        {id:"Jika setiap simpul berderajat $r$, jumlah setiap baris matriks adjacency adalah $r$.",en:"If every vertex has degree $r$, every row sum of the adjacency matrix equals $r$."},
        {id:"Akibatnya $A\\mathbf1=r\\mathbf1$, sehingga $r$ adalah nilai eigen adjacency.",en:"Therefore $A\\mathbf1=r\\mathbf1$, so $r$ is an adjacency eigenvalue."}
      ],
      formulas:["$$A\\mathbf1=r\\mathbf1.$$"],
      notes:[{id:"Untuk graf regular terhubung, $r$ adalah spectral radius adjacency.",en:"For a connected regular graph, $r$ is the adjacency spectral radius."}]
    }
  ],

  "teori-bilangan-olimpiade-smp": [
    {
      title:{id:"Teorema Fermat kecil dan pola pangkat",en:"Fermat's Little Theorem and Power Cycles"},
      intro:{id:"Pangkat besar sering dapat direduksi menjadi pola pendek modulo bilangan prima.",en:"Large powers can often be reduced to short cycles modulo a prime."},
      paragraphs:[
        {id:"Jika $p$ prima dan $p\\nmid a$, Teorema Fermat kecil memberi $a^{p-1}\\equiv1\\pmod p$.",en:"If $p$ is prime and $p\\nmid a$, Fermat's little theorem gives $a^{p-1}\\equiv1\\pmod p$."},
        {id:"Eksponen besar dapat direduksi modulo $p-1$ ketika kondisi koprima terpenuhi.",en:"Large exponents can then be reduced modulo $p-1$ when the coprimality condition holds."}
      ],
      formulas:["$$a^{p-1}\\equiv1\\pmod p.$$"],
      example:{
        question:{id:"Tentukan $2^{1000}\\pmod{13}$.",en:"Find $2^{1000}\\pmod{13}$."},
        solution:[
          {id:"Karena $13$ prima, $2^{12}\\equiv1\\pmod{13}$.",en:"Since $13$ is prime, $2^{12}\\equiv1\\pmod{13}$."},
          {id:"$1000\\equiv4\\pmod{12}$, jadi $2^{1000}\\equiv2^4=16\\equiv3\\pmod{13}$.",en:"$1000\\equiv4\\pmod{12}$, hence $2^{1000}\\equiv2^4=16\\equiv3\\pmod{13}$."}
        ]
      },
      notes:[{id:"Jangan memakai Fermat kecil jika basis habis dibagi modulus prima tanpa memisahkan kasusnya.",en:"Do not apply Fermat's little theorem blindly when the base is divisible by the prime modulus."}]
    },
    {
      title:{id:"Persamaan Diofantin linear",en:"Linear Diophantine Equations"},
      intro:{id:"Persamaan $ax+by=c$ dalam bilangan bulat mempunyai solusi tepat ketika FPB koefisien membagi ruas kanan.",en:"The integer equation $ax+by=c$ has a solution exactly when the gcd of the coefficients divides the right-hand side."},
      theorem:{
        name:{id:"Kriteria solvabilitas Diofantin",en:"Diophantine Solvability Criterion"},
        statement:{id:"Persamaan $ax+by=c$ mempunyai solusi bilangan bulat jika dan hanya jika $\\gcd(a,b)\\mid c$.",en:"The equation $ax+by=c$ has an integer solution if and only if $\\gcd(a,b)\\mid c$."},
        proof:[
          {id:"Jika solusi ada, setiap pembagi bersama $a$ dan $b$ membagi $ax+by=c$.",en:"If a solution exists, every common divisor of $a$ and $b$ divides $ax+by=c$."},
          {id:"Sebaliknya, identitas Bézout memberi $au+bv=d$ untuk $d=\\gcd(a,b)$.",en:"Conversely, Bézout's identity gives $au+bv=d$ for $d=\\gcd(a,b)$."},
          {id:"Jika $d\\mid c$, tulis $c=qd$ dan kalikan identitas Bézout dengan $q$.",en:"If $d\\mid c$, write $c=qd$ and multiply Bézout's identity by $q$."}
        ]
      },
      paragraphs:[
        {id:"Setelah satu solusi diperoleh, semua solusi dapat ditulis dengan satu parameter integer.",en:"Once one solution is known, all solutions can be written using one integer parameter."}
      ],
      formulas:["$$x=x_0+\\frac{b}{d}t,\\qquad y=y_0-\\frac{a}{d}t,\\qquad t\\in\\mathbb Z.$$"],
      notes:[{id:"Syarat nonnegatif atau positif harus diterapkan setelah solusi umum integer diperoleh.",en:"Nonnegative or positive constraints should be imposed after obtaining the general integer solution."}]
    }
  ],

  "kombinatorika-olimpiade-sma": [
    {
      title:{id:"Relasi rekurensi dan state",en:"Recurrences and State Modeling"},
      intro:{id:"Masalah counting bertahap sering dapat dipecah berdasarkan keadaan terakhir sehingga menghasilkan relasi rekurensi.",en:"Sequential counting problems can often be split by the final state, producing a recurrence relation."},
      paragraphs:[
        {id:"Pilih state seminimal mungkin tetapi cukup untuk menentukan langkah berikutnya. Terlalu sedikit state kehilangan informasi; terlalu banyak state membuat perhitungan tidak efisien.",en:"Choose the smallest state that still determines the next step. Too little state loses information; too much state makes the recurrence inefficient."},
        {id:"Kondisi awal sama pentingnya dengan relasi rekurensi karena menentukan solusi unik dari relasi tersebut.",en:"Initial conditions are as important as the recurrence because they determine its unique solution."}
      ],
      formulas:["$$a_n=a_{n-1}+a_{n-2}.$$"],
      example:{
        question:{id:"Berapa banyak string biner panjang $n$ tanpa dua digit $1$ berurutan?",en:"How many binary strings of length $n$ contain no consecutive $1$s?"},
        solution:[
          {id:"Jika digit terakhir $0$, prefix dapat berupa string valid panjang $n-1$.",en:"If the last digit is $0$, the prefix can be any valid string of length $n-1$."},
          {id:"Jika digit terakhir $1$, digit sebelumnya harus $0$, menyisakan string valid panjang $n-2$.",en:"If the last digit is $1$, the previous digit must be $0$, leaving a valid string of length $n-2$."},
          {id:"Jadi $a_n=a_{n-1}+a_{n-2}$ dengan $a_1=2$ dan $a_2=3$.",en:"Thus $a_n=a_{n-1}+a_{n-2}$ with $a_1=2$ and $a_2=3$."}
        ]
      },
      notes:[{id:"Rekurensi sering tersembunyi di balik klasifikasi menurut langkah terakhir.",en:"Recurrences are often hidden behind a classification by the final step."}]
    },
    {
      title:{id:"Graf sebagai alat counting",en:"Graphs as Counting Tools"},
      intro:{id:"Banyak masalah kombinatorika dapat dimodelkan sebagai graf sehingga derajat, matching, jalur, dan pewarnaan menjadi alat counting.",en:"Many combinatorial problems can be modeled as graphs, making degree, matching, paths, and coloring useful counting tools."},
      paragraphs:[
        {id:"Lemma jabat tangan menghitung insidensi sisi-simpul dengan dua cara dan merupakan contoh dasar double counting.",en:"The handshaking lemma counts vertex-edge incidences in two ways and is a basic example of double counting."},
        {id:"Pemodelan graf sering mengubah syarat pasangan menjadi ketetanggaan dan syarat konflik menjadi pewarnaan.",en:"Graph modeling often turns pairwise conditions into adjacency and conflict constraints into coloring."}
      ],
      theorem:{
        name:{id:"Lemma jabat tangan",en:"Handshaking Lemma"},
        statement:{id:"Untuk setiap graf hingga, $\\sum_{v\\in V}\\deg(v)=2|E|$.",en:"For every finite graph, $\\sum_{v\\in V}\\deg(v)=2|E|$."},
        proof:[{id:"Hitung pasangan insidensi $(v,e)$ dengan $v$ merupakan ujung sisi $e$. Menurut simpul jumlahnya $\\sum\\deg(v)$, sedangkan menurut sisi setiap sisi menyumbang dua insidensi.",en:"Count incidences $(v,e)$ where $v$ is an endpoint of $e$. Counting by vertices gives $\\sum\\deg(v)$; counting by edges gives two incidences per edge."}]
      },
      notes:[{id:"Konsekuensi langsung: banyak simpul berderajat ganjil selalu genap.",en:"Immediate consequence: the number of odd-degree vertices is always even."}]
    }
  ],

  "aljabar-linear-onmipa": [
    {
      title:{id:"Dekomposisi kernel–image untuk operator idempoten",en:"Kernel–Image Decomposition for Idempotent Operators"},
      intro:{id:"Operator idempoten adalah model abstrak dari proyeksi dan memiliki dekomposisi ruang yang sangat bersih.",en:"Idempotent operators are abstract models of projections and admit a clean decomposition of the space."},
      paragraphs:[
        {id:"Jika $T^2=T$, setiap vektor $v$ dapat ditulis sebagai $(v-Tv)+Tv$ dengan bagian pertama di kernel dan bagian kedua di image.",en:"If $T^2=T$, every vector $v$ can be written as $(v-Tv)+Tv$, with the first part in the kernel and the second in the image."},
        {id:"Irisan kernel dan image hanya memuat nol, sehingga jumlah tersebut langsung.",en:"The kernel and image intersect only at zero, so the sum is direct."}
      ],
      formulas:["$$V=\\ker T\\oplus\\operatorname{im}T.$$"],
      theorem:{
        name:{id:"Spektrum operator idempoten",en:"Spectrum of an Idempotent Operator"},
        statement:{id:"Jika $T^2=T$, setiap nilai eigen $T$ berada di $\\{0,1\\}$.",en:"If $T^2=T$, every eigenvalue of $T$ lies in $\\{0,1\\}$."},
        proof:[
          {id:"Jika $Tv=\\lambda v$, terapkan $T$ lagi: $T^2v=\\lambda^2v$.",en:"If $Tv=\\lambda v$, apply $T$ again: $T^2v=\\lambda^2v$."},
          {id:"Karena $T^2=T$, diperoleh $\\lambda^2v=\\lambda v$, jadi $\\lambda(\\lambda-1)=0$.",en:"Since $T^2=T$, $\\lambda^2v=\\lambda v$, hence $\\lambda(\\lambda-1)=0$."}
        ]
      },
      notes:[{id:"Operator idempoten selalu diagonalisabel karena polinomial minimalnya membagi $x(x-1)$ yang berakar sederhana.",en:"An idempotent operator is diagonalizable because its minimal polynomial divides $x(x-1)$, which has distinct roots."}]
    },
    {
      title:{id:"Nilpoten, rantai kernel, dan indeks nilpotensi",en:"Nilpotence, Kernel Chains, and Nilpotency Index"},
      intro:{id:"Operator nilpoten memperlihatkan bagaimana iterasi transformasi dapat secara bertahap meruntuhkan seluruh ruang ke nol.",en:"A nilpotent operator illustrates how repeated application can gradually collapse the entire space to zero."},
      paragraphs:[
        {id:"Jika $T^m=0$, terbentuk rantai $\\ker T\\subseteq\\ker T^2\\subseteq\\cdots\\subseteq\\ker T^m=V$.",en:"If $T^m=0$, there is a chain $\\ker T\\subseteq\\ker T^2\\subseteq\\cdots\\subseteq\\ker T^m=V$."},
        {id:"Dimensi kernel tidak menurun sepanjang rantai dan perubahan dimensinya mengandung informasi tentang struktur blok Jordan.",en:"Kernel dimensions never decrease along the chain, and their increments encode information about Jordan block structure."}
      ],
      formulas:["$$\\ker T^k\\subseteq\\ker T^{k+1}.$$"],
      example:{
        question:{id:"Jika $T^3=0$ tetapi $T^2\\neq0$, apa yang dapat dikatakan tentang polinomial minimal?",en:"If $T^3=0$ but $T^2\\neq0$, what can be said about the minimal polynomial?"},
        solution:[{id:"Polinomial minimal membagi $x^3$, tetapi tidak membagi $x^2$. Jadi $m_T(x)=x^3$.",en:"The minimal polynomial divides $x^3$ but not $x^2$. Therefore $m_T(x)=x^3$."}]
      },
      notes:[{id:"Satu-satunya nilai eigen operator nilpoten adalah $0$.",en:"The only eigenvalue of a nilpotent operator is $0$."}]
    },
    {
      title:{id:"Diagonalizability melalui polinomial minimal",en:"Diagonalizability via the Minimal Polynomial"},
      intro:{id:"Polinomial minimal memberi kriteria konseptual yang sangat kuat untuk diagonalizability.",en:"The minimal polynomial gives a powerful conceptual criterion for diagonalizability."},
      theorem:{
        name:{id:"Kriteria akar sederhana",en:"Distinct-Root Criterion"},
        statement:{id:"Suatu operator pada ruang berdimensi hingga diagonalisabel jika dan hanya jika polinomial minimalnya terurai menjadi faktor linear yang semuanya berbeda.",en:"A finite-dimensional operator is diagonalizable if and only if its minimal polynomial splits into distinct linear factors."},
        proof:[
          {id:"Jika $T$ diagonalisabel, dalam basis eigen matriksnya diagonal, jadi polinomial yang memusnahkannya cukup memiliki setiap faktor $(x-\\lambda)$ sekali.",en:"If $T$ is diagonalizable, its matrix is diagonal in an eigenbasis, so an annihilating polynomial needs each factor $(x-\\lambda)$ only once."},
          {id:"Sebaliknya, jika $m_T=\\prod_i(x-\\lambda_i)$ dengan akar berbeda, identitas Bézout antar faktor menghasilkan dekomposisi $V=\\bigoplus_i\\ker(T-\\lambda_iI)$.",en:"Conversely, if $m_T=\\prod_i(x-\\lambda_i)$ with distinct roots, Bézout identities between the factors yield $V=\\bigoplus_i\\ker(T-\\lambda_iI)$."},
          {id:"Gabungan basis setiap eigenspace menjadi basis eigen untuk $V$.",en:"Combining bases of the eigenspaces gives an eigenbasis of $V$."}
        ]
      },
      paragraphs:[
        {id:"Kriteria ini sering lebih cepat daripada menghitung semua eigenvektor secara langsung ketika tersedia relasi polinomial untuk operator.",en:"This criterion is often faster than computing all eigenvectors directly when a polynomial relation for the operator is available."}
      ],
      formulas:["$$m_T(x)=\\prod_{i=1}^r(x-\\lambda_i)\\quad\\text{dengan }\\lambda_i\\text{ berbeda}.$$"],
      notes:[{id:"Kriteria memerlukan polinomial minimal terurai di lapangan skalar yang digunakan.",en:"The criterion requires the minimal polynomial to split over the scalar field."}]
    }
  ],

  "analisis-real-onmipa": [
    {
      title:{id:"Barisan Cauchy dan kelengkapan",en:"Cauchy Sequences and Completeness"},
      intro:{id:"Konsep Cauchy mendeteksi konvergensi tanpa mengetahui limit terlebih dahulu.",en:"The Cauchy condition detects convergence without knowing the limit in advance."},
      paragraphs:[
        {id:"Barisan $(a_n)$ disebut Cauchy jika untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $|a_n-a_m|<\\varepsilon$ untuk semua $m,n\\ge N$.",en:"A sequence $(a_n)$ is Cauchy if for every $\\varepsilon>0$ there exists $N$ such that $|a_n-a_m|<\\varepsilon$ for all $m,n\\ge N$."},
        {id:"Di $\\mathbb R$, setiap barisan Cauchy konvergen. Pernyataan ini ekuivalen dengan kelengkapan bilangan real.",en:"In $\\mathbb R$, every Cauchy sequence converges. This statement is equivalent to completeness of the real numbers."}
      ],
      formulas:["$$\\forall\\varepsilon>0\\;\\exists N\\;\\forall m,n\\ge N:\ |a_n-a_m|<\\varepsilon.$$"],
      theorem:{
        name:{id:"Barisan konvergen adalah Cauchy",en:"Every Convergent Sequence Is Cauchy"},
        statement:{id:"Jika $a_n\\to L$, maka $(a_n)$ adalah Cauchy.",en:"If $a_n\\to L$, then $(a_n)$ is Cauchy."},
        proof:[
          {id:"Diberikan $\\varepsilon>0$, pilih $N$ sehingga $|a_n-L|<\\varepsilon/2$ untuk $n\\ge N$.",en:"Given $\\varepsilon>0$, choose $N$ such that $|a_n-L|<\\varepsilon/2$ for $n\\ge N$."},
          {id:"Untuk $m,n\\ge N$, ketaksamaan segitiga memberi $|a_n-a_m|\\le|a_n-L|+|a_m-L|<\\varepsilon$.",en:"For $m,n\\ge N$, the triangle inequality gives $|a_n-a_m|\\le|a_n-L|+|a_m-L|<\\varepsilon$."}
        ]
      },
      notes:[{id:"Arah sebaliknya membutuhkan kelengkapan ruang.",en:"The converse requires completeness of the space."}]
    },
    {
      title:{id:"Teorema Nilai Antara dan Nilai Ekstrem",en:"Intermediate and Extreme Value Theorems"},
      intro:{id:"Kontinuitas pada interval mengubah informasi topologis domain menjadi kontrol kuat terhadap range.",en:"Continuity on an interval converts topological structure of the domain into strong control of the range."},
      paragraphs:[
        {id:"Teorema Nilai Antara menyatakan fungsi kontinu tidak dapat melompati nilai di antara dua nilai fungsi.",en:"The Intermediate Value Theorem says a continuous function cannot skip values between two attained values."},
        {id:"Teorema Nilai Ekstrem menyatakan fungsi kontinu pada interval tertutup dan terbatas mencapai maksimum dan minimum.",en:"The Extreme Value Theorem says a continuous function on a closed bounded interval attains a maximum and a minimum."}
      ],
      theorem:{
        name:{id:"Teorema Nilai Antara",en:"Intermediate Value Theorem"},
        statement:{id:"Jika $f$ kontinu pada $[a,b]$ dan $y$ berada di antara $f(a)$ dan $f(b)$, terdapat $c\\in[a,b]$ dengan $f(c)=y$.",en:"If $f$ is continuous on $[a,b]$ and $y$ lies between $f(a)$ and $f(b)$, then some $c\\in[a,b]$ satisfies $f(c)=y$."},
        proof:[
          {id:"Andaikan $f(a)<y<f(b)$ dan definisikan $S=\\{x\\in[a,b]:f(x)<y\\}$.",en:"Assume $f(a)<y<f(b)$ and define $S=\\{x\\in[a,b]:f(x)<y\\}$."},
          {id:"Himpunan $S$ tak kosong dan terbatas atas; ambil $c=\\sup S$.",en:"The set $S$ is nonempty and bounded above; let $c=\\sup S$."},
          {id:"Kontinuitas di $c$ menyingkirkan kemungkinan $f(c)<y$ maupun $f(c)>y$, karena keduanya bertentangan dengan sifat supremum. Jadi $f(c)=y$.",en:"Continuity at $c$ rules out both $f(c)<y$ and $f(c)>y$, since either would contradict the supremum property. Hence $f(c)=y$."}
        ]
      },
      notes:[{id:"Kekompakan $[a,b]$ adalah hipotesis penting untuk Teorema Nilai Ekstrem.",en:"Compactness of $[a,b]$ is essential for the Extreme Value Theorem."}]
    },
    {
      title:{id:"Deret fungsi dan kriteria Weierstrass",en:"Series of Functions and the Weierstrass M-Test"},
      intro:{id:"Konvergensi seragam deret fungsi dapat dibuktikan dengan membandingkan setiap suku dengan deret numerik konvergen.",en:"Uniform convergence of a function series can be proved by bounding each term with a convergent numerical series."},
      theorem:{
        name:{id:"Weierstrass M-test",en:"Weierstrass M-Test"},
        statement:{id:"Jika $|f_n(x)|\\le M_n$ untuk semua $x$ dan $\\sum M_n$ konvergen, maka $\\sum f_n$ konvergen seragam.",en:"If $|f_n(x)|\\le M_n$ for all $x$ and $\\sum M_n$ converges, then $\\sum f_n$ converges uniformly."},
        proof:[
          {id:"Untuk $m>n$, ekor memenuhi $|\\sum_{k=n+1}^m f_k(x)|\\le\\sum_{k=n+1}^mM_k$ untuk semua $x$.",en:"For $m>n$, the tail satisfies $|\\sum_{k=n+1}^m f_k(x)|\\le\\sum_{k=n+1}^mM_k$ for every $x$."},
          {id:"Karena $\\sum M_n$ Cauchy, ruas kanan dapat dibuat lebih kecil dari setiap $\\varepsilon$ secara seragam terhadap $x$.",en:"Since $\\sum M_n$ is Cauchy, the right-hand side can be made smaller than every $\\varepsilon$, uniformly in $x$."},
          {id:"Kriteria Cauchy seragam memberi konvergensi seragam deret fungsi.",en:"The uniform Cauchy criterion yields uniform convergence of the function series."}
        ]
      },
      paragraphs:[
        {id:"M-test sangat berguna karena mengubah masalah fungsi menjadi masalah konvergensi deret bilangan positif.",en:"The M-test is powerful because it reduces a functional convergence problem to convergence of a positive numerical series."}
      ],
      formulas:["$$|f_n(x)|\\le M_n,\\quad\\sum M_n<\\infty\\quad\\Longrightarrow\\quad\\sum f_n\\text{ konvergen seragam}.$$"],
      notes:[{id:"M-test memberi syarat cukup, bukan syarat perlu.",en:"The M-test is sufficient, not necessary."}]
    }
  ]
};
