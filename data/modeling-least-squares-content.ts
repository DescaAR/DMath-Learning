import type { BookLessonContent } from "@/data/book-content-types";

/** Least-squares modeling: identifiability, normal equations, weighted fitting, and honest validation. */
export const modelingLeastSquaresContent:BookLessonContent = {
  "intro": [
    "Pemodelan kuadrat terkecil menghubungkan pengamatan dengan suatu keluarga fungsi yang dipilih sebelum koefisien diestimasi. Nilai prediksi yang mendekati data bukan alasan untuk langsung menyebut model benar: perlu dibedakan kecocokan pada data pelatihan, keteridentifikasian parameter, dan ketepatan prediksi pada pengamatan baru.",
    "Sebagai kasus utama, tiga pengamatan $(x_i,y_i)=(0,1),(1,2),(2,2)$ akan dimodelkan oleh $\\widehat y=\\beta_0+\\beta_1x$. Persamaan normal menghasilkan $\\widehat\\beta_0=7/6$ dan $\\widehat\\beta_1=1/2$, dengan jumlah kuadrat residual $1/6$. Setiap hasil akan diperiksa kembali dengan residual dan ortogonalitas, bukan hanya keluaran rumus.",
    "Kita memisahkan empat langkah: merumuskan variabel dan matriks desain, menguji rank agar parameter teridentifikasi, menyelesaikan optimisasi kuadrat terkecil, dan memeriksa kesalahan prediksi di luar data yang digunakan untuk estimasi. Pembahasan mencakup bobot pengamatan, perubahan satuan prediktor, serta alasan menambah parameter dapat memperbaiki galat pelatihan tetapi tidak menjamin prediksi lebih baik.",
    "Rujukan konsep: Gilbert Strang, Introduction to Linear Algebra, edisi ke-5 (2016), bagian proyeksi dan least squares; Åke Björck, Numerical Methods for Least Squares Problems (SIAM, 1996), bagian least squares linear. Perhitungan, contoh tandingan, dan pembuktian pada halaman ini disusun secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Model Linear dan Matriks Desain",
      "statement": "Untuk $n$ pengamatan, model linear dalam parameter ditulis $y=A\\beta+\\varepsilon$, dengan $A\\in\\mathbb R^{n\\times p}$ matriks desain, $\\beta\\in\\mathbb R^p$ koefisien, $y\\in\\mathbb R^n$ respons, dan $\\varepsilon$ galat. Linearitas yang dimaksud adalah linear terhadap $\\beta$, bukan harus linear terhadap prediktor $x$. Model $\\beta_0+\\beta_1x+\\beta_2x^2$ tetap linear dalam parameter.",
      "explanation": "Kolom A mewakili fungsi dasar yang dievaluasi pada setiap pengamatan. Kolom pertama bernilai satu jika model memiliki intersep."
    },
    {
      "kind": "definition",
      "title": "Residual dan Fungsi Objektif Kuadrat Terkecil",
      "statement": "Untuk koefisien $\\beta$, vektor prediksi ialah $\\widehat y=A\\beta$, residual $r(\\beta)=y-A\\beta$, dan jumlah kuadrat residual $S(\\beta)=\\|r(\\beta)\\|_2^2=\\sum_{i=1}^n(y_i-(A\\beta)_i)^2$. Estimator kuadrat terkecil adalah setiap $\\widehat\\beta\\in\\operatorname{argmin}_{\\beta\\in\\mathbb R^p}S(\\beta)$.",
      "explanation": "Residual adalah respons dikurangi prediksi; menguadratkan residual membuat galat positif dan negatif sama-sama berkontribusi."
    },
    {
      "kind": "definition",
      "title": "Keteridentifikasian Koefisien",
      "statement": "Parameter model $A\\beta$ teridentifikasi dari nilai prediksi jika pemetaan $\\beta\\mapsto A\\beta$ injektif, ekuivalen dengan $\\ker A=\\{0\\}$ atau $\\operatorname{rank}(A)=p$. Jika terdapat $h\\ne0$ dengan $Ah=0$, maka $\\beta$ dan $\\beta+h$ menghasilkan prediksi yang sama untuk seluruh pengamatan.",
      "explanation": "Banyaknya pengamatan n tidak cukup untuk menjamin rank penuh: dua kolom prediktor dapat saling bergantung meskipun n besar."
    },
    {
      "kind": "definition",
      "title": "Galat Pelatihan dan Galat Pengujian",
      "statement": "Jika $\\widehat\\beta$ ditentukan hanya dari data pelatihan $(A_{\\mathrm{tr}},y_{\\mathrm{tr}})$, galat pelatihan rata-rata ialah $\\operatorname{MSE}_{\\mathrm{tr}}=\\|y_{\\mathrm{tr}}-A_{\\mathrm{tr}}\\widehat\\beta\\|_2^2/n_{\\mathrm{tr}}$. Untuk data pengujian terpisah $(A_{\\mathrm{te}},y_{\\mathrm{te}})$, definisikan $\\operatorname{MSE}_{\\mathrm{te}}=\\|y_{\\mathrm{te}}-A_{\\mathrm{te}}\\widehat\\beta\\|_2^2/n_{\\mathrm{te}}$, tanpa mengestimasi ulang $\\widehat\\beta$ menggunakan respons pengujian.",
      "explanation": "MSE pengujian adalah evaluasi pada data yang tidak digunakan saat pelatihan; satu nilai MSE tidak otomatis menjadi jaminan probabilistik pada populasi."
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Persamaan Normal Dua Arah",
      "statement": "Untuk $A\\in\\mathbb R^{n\\times p}$ dan $y\\in\\mathbb R^n$, vektor $\\widehat\\beta$ meminimumkan $\\|y-A\\beta\\|_2^2$ secara global jika dan hanya jika $A^T(y-A\\widehat\\beta)=0$, ekuivalen dengan $A^TA\\widehat\\beta=A^Ty$.",
      "explanation": "Persamaan normal merupakan karakterisasi optimum, bukan sekadar syarat perlu; matriks A tidak perlu ber-rank penuh.",
      "proof": [
        "Arah $(\\Rightarrow)$. Misalkan $\\widehat\\beta$ meminimumkan $S$ dan tulis $\\widehat r=y-A\\widehat\\beta$. Untuk setiap $h\\in\\mathbb R^p$ dan $t\\in\\mathbb R$, $S(\\widehat\\beta+th)=\\|\\widehat r-tAh\\|^2=\\|\\widehat r\\|^2-2t\\,\\widehat r^TAh+t^2\\|Ah\\|^2$.",
        "Karena $t=0$ adalah titik minimum fungsi satu variabel tersebut, turunan di nol harus nol. Diperoleh $-2\\widehat r^TAh=0$ untuk semua $h$. Memilih $h$ sebagai setiap vektor basis standar memberikan $A^T\\widehat r=0$.",
        "Arah $(\\Leftarrow)$. Misalkan $A^T\\widehat r=0$. Untuk setiap $\\beta=\\widehat\\beta+h$, identitas ekspansi norma memberikan $S(\\beta)=\\|\\widehat r-Ah\\|^2=\\|\\widehat r\\|^2-2h^TA^T\\widehat r+\\|Ah\\|^2=S(\\widehat\\beta)+\\|Ah\\|^2\\ge S(\\widehat\\beta)$.",
        "Kesamaan $A^T(y-A\\widehat\\beta)=0$ dapat ditulis $A^TA\\widehat\\beta=A^Ty$ dengan memindahkan suku. Kedua implikasi telah terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Eksistensi dan Ketunggalan Solusi Kuadrat Terkecil",
      "statement": "Untuk setiap $A\\in\\mathbb R^{n\\times p}$ dan $y\\in\\mathbb R^n$, peminimum kuadrat terkecil ada. Peminimum tersebut tunggal jika dan hanya jika $\\ker A=\\{0\\}$, atau setara dengan $\\operatorname{rank}(A)=p$.",
      "explanation": "Matriks rank-defisien tidak menyebabkan hilangnya prediksi terbaik; yang tidak tunggal adalah representasi koefisien.",
      "proof": [
        "Tuliskan $V=\\operatorname{col}(A)\\subseteq\\mathbb R^n$. Ruang $V$ berdimensi hingga. Pilih basis ortonormal $q_1,\\ldots,q_r$ untuk $V$; jika $V=\\{0\\}$, ambil proyeksi $v^*=0$. Jika $r>0$, tetapkan $v^*=\\sum_{j=1}^r(q_j^Ty)q_j$.",
        "Untuk setiap $v\\in V$, berlaku $(y-v^*)^T(v-v^*)=0$ karena $y-v^*$ ortogonal terhadap semua $q_j$. Teorema Pythagoras memberi $\\|y-v\\|^2=\\|y-v^*\\|^2+\\|v-v^*\\|^2\\ge\\|y-v^*\\|^2$. Karena $v^*\\in\\operatorname{col}(A)$, ada $\\widehat\\beta$ dengan $A\\widehat\\beta=v^*$; peminimum ada.",
        "Jika $\\ker A=\\{0\\}$ dan $\\beta_1,\\beta_2$ sama-sama meminimumkan, proyeksi terbaik $v^*$ tunggal oleh identitas Pythagoras, sehingga $A\\beta_1=A\\beta_2=v^*$. Akibatnya $A(\\beta_1-\\beta_2)=0$, dan hipotesis kernel trivial memberi $\\beta_1=\\beta_2$.",
        "Sebaliknya, jika $\\ker A$ memuat $h\\ne0$, setiap peminimum $\\widehat\\beta$ menghasilkan peminimum berbeda $\\widehat\\beta+h$ karena $A(\\widehat\\beta+h)=A\\widehat\\beta$. Oleh karena itu ketunggalan ekuivalen dengan rank kolom penuh. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Ortogonalitas Residual dan Peran Intersep",
      "statement": "Jika $\\widehat\\beta$ adalah solusi kuadrat terkecil, maka residual $\\widehat r=y-A\\widehat\\beta$ ortogonal terhadap setiap kolom $A$ dan terhadap $\\widehat y=A\\widehat\\beta$. Jika $A$ mempunyai kolom $\\mathbf1_n$, berlaku pula $\\sum_{i=1}^n\\widehat r_i=0$. Pernyataan jumlah residual nol tidak dijamin untuk model tanpa intersep.",
      "explanation": "Sifat jumlah residual nol bergantung pada kolom konstanta, bukan pada proses kuadrat terkecil secara umum.",
      "proof": [
        "Dari teorema persamaan normal, $A^T\\widehat r=0$. Komponen ke-$j$ persamaan ini adalah $a_j^T\\widehat r=0$ untuk kolom $a_j$ dari $A$, sehingga residual ortogonal terhadap setiap kolom.",
        "Karena $\\widehat y=A\\widehat\\beta$ merupakan kombinasi linear kolom-kolom $A$, diperoleh $\\widehat y^T\\widehat r=\\widehat\\beta^TA^T\\widehat r=0$.",
        "Apabila salah satu kolom $A$ adalah $\\mathbf1_n$, ortogonalitas terhadap kolom itu memberi $\\mathbf1_n^T\\widehat r=\\sum_i\\widehat r_i=0$. Tanpa kolom tersebut tidak ada persamaan normal yang memaksakan jumlah residual nol; contoh tandingan dihitung pada latihan LS-04. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Rumus Regresi Linear Sederhana dengan Intersep",
      "statement": "Untuk data $(x_i,y_i)_{i=1}^n$ dengan $n\\ge2$ dan $S_{xx}=\\sum_i(x_i-\\bar x)^2>0$, peminimum tunggal dari $\\sum_i(y_i-\\beta_0-\\beta_1x_i)^2$ adalah $\\widehat\\beta_1=S_{xy}/S_{xx}$ dan $\\widehat\\beta_0=\\bar y-\\widehat\\beta_1\\bar x$, dengan $S_{xy}=\\sum_i(x_i-\\bar x)(y_i-\\bar y)$.",
      "explanation": "Syarat Sxx>0 tepat berarti prediktor tidak semuanya sama; jika gagal, kemiringan tidak teridentifikasi.",
      "proof": [
        "Matriks desain memiliki kolom $\\mathbf1_n$ dan $x=(x_1,\\ldots,x_n)^T$. Persamaan normal pertama memberikan $n\\widehat\\beta_0+(\\sum_i x_i)\\widehat\\beta_1=\\sum_i y_i$, sehingga $\\widehat\\beta_0=\\bar y-\\widehat\\beta_1\\bar x$.",
        "Substitusikan ke persamaan normal kedua $\\sum_i x_i(y_i-\\widehat\\beta_0-\\widehat\\beta_1x_i)=0$. Setelah memusatkan $x_i$ dan $y_i$, diperoleh $\\sum_i(x_i-\\bar x)(y_i-\\bar y)=\\widehat\\beta_1\\sum_i(x_i-\\bar x)^2$, yakni $S_{xy}=\\widehat\\beta_1 S_{xx}$.",
        "Karena $S_{xx}>0$, pembagian sah dan memberikan $\\widehat\\beta_1=S_{xy}/S_{xx}$ serta intersep yang dinyatakan. Kedua kolom desain bebas linear: jika $a+bx_i=0$ untuk semua i, dua nilai x yang berbeda memaksa $b=0$ dan $a=0$.",
        "Teorema ketunggalan memastikan pasangan ini merupakan satu-satunya peminimum global. Jika $S_{xx}=0$, seluruh $x_i$ sama dan kolom prediktor bergantung pada kolom intersep, sehingga rumus pembagian tersebut tidak sah. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kuadrat Terkecil Berbobot Positif",
      "statement": "Misalkan $W=\\operatorname{diag}(w_1,\\ldots,w_n)$ dengan $w_i>0$. Koefisien $\\widehat\\beta$ meminimumkan $(y-A\\beta)^TW(y-A\\beta)$ jika dan hanya jika $A^TW(y-A\\widehat\\beta)=0$. Solusinya tunggal jika dan hanya jika $\\operatorname{rank}(A)=p$.",
      "explanation": "Bobot positif mengubah pentingnya tiap residual tetapi tidak mengubah ketergantungan linear antar kolom desain.",
      "proof": [
        "Karena $w_i>0$, matriks diagonal $W^{1/2}=\\operatorname{diag}(\\sqrt{w_i})$ ada dan invertibel. Definisikan $B=W^{1/2}A$ serta $z=W^{1/2}y$.",
        "Fungsi objektif berbobot sama dengan $\\|z-B\\beta\\|^2$. Dengan teorema persamaan normal dua arah, $\\widehat\\beta$ meminimumkan fungsi ini jika dan hanya jika $B^T(z-B\\widehat\\beta)=0$.",
        "Menggunakan $B^T=A^TW^{1/2}$, identitas itu menjadi $A^TW(y-A\\widehat\\beta)=0$. Karena $W^{1/2}$ invertibel, $\\ker B=\\ker A$; teorema ketunggalan memberikan kriteria rank yang sama. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Penambahan Prediktor dan Galat Pelatihan",
      "statement": "Misalkan $U\\subseteq V$ dua subruang $\\mathbb R^n$ yang masing-masing merupakan ruang kolom model kecil dan model besar. Untuk setiap $y\\in\\mathbb R^n$, berlaku $\\min_{v\\in V}\\|y-v\\|^2\\le\\min_{u\\in U}\\|y-u\\|^2$. Kesamaan terjadi jika dan hanya jika proyeksi ortogonal $P_Vy$ sudah berada di $U$.",
      "explanation": "Penurunan SSE pelatihan tidak otomatis berarti model lebih baik untuk prediksi pengamatan baru.",
      "proof": [
        "Misalkan $u^*=P_Uy$ dan $v^*=P_Vy$. Karena $U\\subseteq V$, titik $u^*$ juga calon prediksi yang layak dalam model besar. Minimalitas $v^*$ pada $V$ memberi $\\|y-v^*\\|^2\\le\\|y-u^*\\|^2$.",
        "Jika $v^*\\in U$, minimalitas $u^*$ pada $U$ dan minimalitas $v^*$ pada $V$ memaksa kedua nilai minimum sama. Ini membuktikan satu arah kesamaan.",
        "Sebaliknya, misalkan kedua minimum sama. Identitas Pythagoras untuk proyeksi ke $V$ diterapkan pada $u^*\\in V$: $\\|y-u^*\\|^2=\\|y-v^*\\|^2+\\|v^*-u^*\\|^2$. Kesamaan kedua minimum memaksa $\\|v^*-u^*\\|^2=0$, sehingga $v^*=u^*\\in U$.",
        "Kedua arah kriteria kesamaan terbukti. Tidak ada pernyataan serupa yang otomatis berlaku untuk MSE pengujian, karena respons pengujian tidak dipakai ketika memilih proyeksi pelatihan. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Menyusun Matriks Desain dari Tiga Pengamatan",
      "forDefinition": "Model Linear dan Matriks Desain",
      "problem": "Pengamatan $(0,1),(1,2),(2,2)$ dimodelkan oleh $y=\\beta_0+\\beta_1x+\\varepsilon$. Tentukan $A$, $y$, dan arti setiap kolom.",
      "solution": [
        "Diketahui tiga pasangan $(x_i,y_i)$ dan dua parameter $\\beta_0,\\beta_1$. Baris ke-i matriks desain harus mengubah vektor parameter menjadi prediksi $\\beta_0+\\beta_1x_i$, sehingga barisnya $(1,x_i)$.",
        "Dengan urutan x = 0, 1, 2, diperoleh $A=\\begin{pmatrix}1&0\\\\1&1\\\\1&2\\end{pmatrix}$, $y=(1,2,2)^T$, dan $\\beta=(\\beta_0,\\beta_1)^T$. Kolom pertama adalah intersep dan kolom kedua mencatat nilai prediktor.",
        "Verifikasi: $A\\beta=(\\beta_0,\\beta_0+\\beta_1,\\beta_0+2\\beta_1)^T$, tepat tiga nilai model pada masukan yang diberikan. Kedua kolom bebas linear karena kolom kedua tidak konstan; parameter model ini dapat diidentifikasi."
      ]
    },
    {
      "title": "Residual dan Jumlah Kuadrat pada Model Konstan",
      "forDefinition": "Residual dan Fungsi Objektif Kuadrat Terkecil",
      "problem": "Untuk respons $y=(1,2,5)^T$ dan model konstan $\\widehat y_i=c$, tentukan nilai c terbaik dan SSE.",
      "solution": [
        "Diketahui $S(c)=(1-c)^2+(2-c)^2+(5-c)^2$. Ekspansi menghasilkan $S(c)=3c^2-16c+30=3(c-8/3)^2+26/3$.",
        "Karena kuadrat selalu nonnegatif, nilai minimum dicapai tepat pada $c=8/3$. Residual pada koefisien itu adalah $(-5/3,-2/3,7/3)$ dan jumlahnya nol, sesuai persamaan normal untuk kolom konstanta.",
        "Jumlah kuadrat residual ialah $(25+4+49)/9=78/9=26/3$. Substitusi ke ekspansi juga memberi $3(0)^2+26/3$, sehingga dua cara perhitungan saling memverifikasi."
      ]
    },
    {
      "title": "Dua Kolom Bergantung dan Koefisien Tidak Unik",
      "forDefinition": "Keteridentifikasian Koefisien",
      "problem": "Untuk $A=\\begin{pmatrix}1&1\\\\2&2\\\\3&3\\end{pmatrix}$ dan $y=(2,4,6)^T$, tentukan seluruh koefisien dengan SSE minimum.",
      "solution": [
        "Dua kolom $A$ sama, sehingga $A(1,-1)^T=0$ dan rank matriks hanya satu. Prediksi bergantung pada jumlah koefisien: $A(\\beta_1,\\beta_2)^T=(\\beta_1+\\beta_2)(1,2,3)^T$.",
        "Respons adalah dua kali kolom tersebut. Dengan memilih $\\beta_1+\\beta_2=2$, prediksi tepat sama dengan $y$, sehingga SSE bernilai nol dan tidak mungkin lebih kecil.",
        "Seluruh peminimum berbentuk $(t,2-t)$ untuk $t\\in\\mathbb R$. Misalnya $(0,2)$ dan $(2,0)$ memberikan prediksi identik. Ketidakunikan ini bukan kesalahan optimisasi, melainkan akibat ketakteridentifikasian parameter."
      ]
    },
    {
      "title": "Menguji Prediksi tanpa Mengestimasi Ulang",
      "forDefinition": "Galat Pelatihan dan Galat Pengujian",
      "problem": "Model $\\widehat y=1+2x$ diperoleh dari data pelatihan $(0,1),(1,3),(2,5)$. Pengamatan pengujian baru adalah $(3,8)$. Hitung kedua MSE.",
      "solution": [
        "Pada data pelatihan, model memprediksi $(1,3,5)$ dan semua residual nol. Dengan $n_{\\mathrm{tr}}=3$, diperoleh $\\operatorname{MSE}_{\\mathrm{tr}}=(0^2+0^2+0^2)/3=0$.",
        "Koefisien $(1,2)$ tidak diubah saat mengevaluasi data pengujian. Pada $x=3$, prediksi adalah $1+2(3)=7$, sedangkan respons teramati 8, sehingga residual pengujian $8-7=1$.",
        "Karena hanya ada satu pengamatan pengujian, $\\operatorname{MSE}_{\\mathrm{te}}=1^2/1=1$. Nilai pelatihan nol tidak mengharuskan nilai pengujian nol; kesimpulan ini khusus untuk data yang tersedia, bukan estimasi ketidakpastian populasi."
      ]
    },
    {
      "title": "Menyelesaikan Persamaan Normal dan Memeriksa Ortogonalitas",
      "problem": "Untuk $A=\\begin{pmatrix}1&0\\\\1&1\\\\1&2\\end{pmatrix}$ dan $y=(1,2,2)^T$, hitung koefisien kuadrat terkecil serta SSE.",
      "solution": [
        "Perkalian matriks menghasilkan $A^TA=\\begin{pmatrix}3&3\\\\3&5\\end{pmatrix}$ dan $A^Ty=(5,6)^T$. Persamaan normal menjadi $3\\beta_0+3\\beta_1=5$ dan $3\\beta_0+5\\beta_1=6$.",
        "Pengurangan kedua persamaan memberikan $2\\beta_1=1$, sehingga $\\widehat\\beta_1=1/2$ dan $\\widehat\\beta_0=7/6$. Prediksi adalah $(7/6,5/3,13/6)$, sedangkan residual $(-1/6,1/3,-1/6)$.",
        "Periksa $A^Tr$: jumlah residual $-1/6+1/3-1/6=0$ dan hasil kali dengan kolom x ialah $0(-1/6)+1(1/3)+2(-1/6)=0$. SSE adalah $1/36+1/9+1/36=1/6$. Determinan $A^TA=15-9=6>0$, sehingga peminimum tunggal."
      ]
    },
    {
      "title": "Estimasi Konstan Berbobot",
      "problem": "Dua respons adalah 0 dan 3 dengan bobot berturut-turut 1 dan 3. Tentukan prediksi konstan yang meminimumkan jumlah kuadrat berbobot.",
      "solution": [
        "Fungsi objektifnya $S_w(c)=1(0-c)^2+3(3-c)^2=4c^2-18c+27$. Turunannya $8c-18$, yang nol pada $c=9/4$.",
        "Lengkapi kuadrat: $S_w(c)=4(c-9/4)^2+27/4$. Karena koefisien kuadrat positif, titik $c=9/4$ adalah minimum global tunggal, bukan hanya titik stasioner.",
        "Residualnya $(-9/4,3/4)$, sehingga jumlah residual berbobot $1(-9/4)+3(3/4)=0$. SSE berbobot adalah $81/16+3(9/16)=108/16=27/4$, sesuai bentuk kuadrat sempurna."
      ]
    },
    {
      "title": "Perubahan Satuan Prediktor Tidak Mengubah Prediksi",
      "problem": "Model $\\widehat y=7/6+x/2$ memakai x. Jika prediktor baru $z=10+2x$, tentukan model dalam z dan verifikasi pada dua titik.",
      "solution": [
        "Diketahui transformasi $z=10+2x$ dengan faktor skala tak nol. Selesaikan untuk x: $x=(z-10)/2$. Substitusi ke model menghasilkan $\\widehat y=7/6+(z-10)/4=-4/3+z/4$.",
        "Pada $x=0$ diperoleh $z=10$, dan model baru memberi $-4/3+10/4=(-8+15)/6=7/6$, sama dengan model awal. Pada $x=2$ diperoleh $z=14$, dan model baru memberi $-4/3+14/4=(-8+21)/6=13/6$.",
        "Kedua model menghasilkan nilai prediksi identik untuk setiap pengamatan karena perubahan satuan bersifat bijektif. Koefisien kemiringan berubah dari $1/2$ menjadi $1/4$, sehingga membandingkan kemiringan tanpa memperhatikan satuan dapat menyesatkan."
      ]
    },
    {
      "title": "Kecocokan Pelatihan dan Risiko Interpolasi",
      "problem": "Pada data $(0,1),(1,2),(2,2)$, bandingkan SSE model konstan, linear, dan kuadratik interpolasi. Evaluasi prediksi pada titik pengujian $(3,4)$.",
      "solution": [
        "Model konstan terbaik ialah $\\widehat y=5/3$, sehingga SSE $(-2/3)^2+(1/3)^2+(1/3)^2=2/3$. Model linear terbaik dari persamaan normal ialah $\\widehat y=7/6+x/2$ dengan SSE $1/6$.",
        "Polinom $q(x)=1+(3/2)x-(1/2)x^2$ melalui ketiga titik pelatihan: $q(0)=1$, $q(1)=2$, dan $q(2)=2$. Oleh karena itu SSE pelatihannya nol. Penurunan $2/3\\ge1/6\\ge0$ sesuai teorema model bersarang.",
        "Pada pengujian $x=3$, model linear memprediksi $7/6+3/2=8/3$ dengan galat kuadrat $(4-8/3)^2=16/9$, sedangkan polinom memprediksi $q(3)=1$ dengan galat kuadrat $(4-1)^2=9$. Contoh ini menunjukkan model yang paling cocok pada data pelatihan justru lebih buruk pada satu pengamatan baru; tidak ada klaim bahwa urutan ini berlaku untuk semua data."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "LS-01. Untuk model konstan dan respons $(2,4,9)$, tentukan estimator kuadrat terkecil, SSE, dan verifikasi persamaan normal.",
      "hint": "Gunakan proyeksi pada ruang vektor konstanta.",
      "answer": "Diketahui $S(c)=(2-c)^2+(4-c)^2+(9-c)^2$. Turunan $S'(c)=2(c-2)+2(c-4)+2(c-9)=6c-30$, sehingga titik stasioner $c=5$. Turunan kedua $S''(c)=6>0$, atau identitas $S(c)=3(c-5)^2+26$, memastikan minimum global tunggal. Residual pada $c=5$ adalah $(-3,-1,4)$, dan SSE $9+1+16=26$. Kolom desain adalah $\\mathbf1_3$, sehingga persamaan normal mengharuskan $\\sum_i r_i=0$; verifikasinya $-3-1+4=0$. Koefisien 5 adalah rata-rata respons, dan tidak ada nilai konstan lain dengan SSE lebih kecil."
    },
    {
      "prompt": "LS-02. Fit garis berintersep pada $(0,2),(1,3),(2,6)$, lalu verifikasi dua persamaan normal dan SSE.",
      "hint": "Hitung Sxx dan Sxy dari data yang dipusatkan.",
      "answer": "Diketahui $\\bar x=1$ dan $\\bar y=(2+3+6)/3=11/3$. Nilai $S_{xx}=(-1)^2+0^2+1^2=2$ dan $S_{xy}=(-1)(2-11/3)+0+(1)(6-11/3)=5/3+7/3=4$. Karena $S_{xx}>0$, rumus regresi memberi $\\widehat\\beta_1=4/2=2$ dan $\\widehat\\beta_0=11/3-2=5/3$. Prediksi pada x=0,1,2 adalah $(5/3,11/3,17/3)$; residual $(1/3,-2/3,1/3)$. Jumlah residual $1/3-2/3+1/3=0$ dan jumlah x kali residual $0+1(-2/3)+2(1/3)=0$, sehingga kedua persamaan normal terpenuhi. SSE $1/9+4/9+1/9=2/3$. Dua kolom desain bebas linear, sehingga solusi tersebut tunggal."
    },
    {
      "prompt": "LS-03. Untuk $A=\\begin{pmatrix}1&1\\\\2&2\\end{pmatrix}$ dan $y=(3,6)^T$, tentukan semua peminimum dan buktikan ketidakunikannya.",
      "hint": "Tuliskan t sebagai jumlah kedua koefisien.",
      "answer": "Kedua kolom A sama, sehingga $A(\\beta_1,\\beta_2)^T=(\\beta_1+\\beta_2)(1,2)^T$. Jika $s=\\beta_1+\\beta_2$, SSE adalah $(3-s)^2+(6-2s)^2=5(3-s)^2$. Nilai minimum nol dicapai tepat ketika $s=3$. Oleh karena itu seluruh peminimum adalah $(t,3-t)$ untuk $t\\in\\mathbb R$, bukan hanya satu pasangan. Sebagai verifikasi, $(0,3)$ dan $(3,0)$ keduanya menghasilkan prediksi $(3,6)$ dan SSE nol. Vektor $(1,-1)\\ne0$ berada dalam $\\ker A$, sehingga kriteria rank penuh gagal dan ketidakunikan koefisien telah dibuktikan."
    },
    {
      "prompt": "LS-04. Fit model tanpa intersep $\\widehat y=\\beta x$ pada $(1,1),(2,0)$. Tunjukkan residual tidak harus berjumlah nol.",
      "hint": "Persamaan normal hanya mengharuskan residual ortogonal terhadap kolom x.",
      "answer": "Matriks desain tanpa intersep adalah $A=(1,2)^T$, sedangkan $y=(1,0)^T$. Persamaan normal skalar adalah $(1^2+2^2)\\widehat\\beta=1(1)+2(0)=1$, sehingga $\\widehat\\beta=1/5$. Prediksi adalah $(1/5,2/5)$ dan residual $(4/5,-2/5)$. Periksa ortogonalitas: $A^Tr=1(4/5)+2(-2/5)=0$, sehingga syarat perlu dan cukup optimalitas dipenuhi. Namun jumlah residual adalah $4/5-2/5=2/5\\ne0$. Tidak ada kolom konstanta dalam A; contoh ini membuktikan bahwa klaim jumlah residual nol tidak sah untuk semua model kuadrat terkecil."
    },
    {
      "prompt": "LS-05. Dua respons $(1,5)$ diberi bobot $(3,1)$. Bandingkan SSE berbobot pada estimator berbobot dan rata-rata biasa.",
      "hint": "Turunkan 3(1-c)^2+(5-c)^2 dan evaluasi pada c=2 serta c=3.",
      "answer": "Fungsi objektif berbobot adalah $S_w(c)=3(1-c)^2+(5-c)^2=4c^2-16c+28=4(c-2)^2+12$. Nilai minimum dicapai tepat pada $c=2$, dengan SSE berbobot $3(1-2)^2+(5-2)^2=3+9=12$. Rata-rata tanpa bobot adalah $(1+5)/2=3$. Jika dipakai pada fungsi objektif berbobot yang sama, SSE menjadi $3(1-3)^2+(5-3)^2=12+4=16$. Selisihnya 4, konsisten dengan identitas $S_w(3)-S_w(2)=4(3-2)^2$. Bobot yang lebih besar pada respons 1 menarik estimasi konstan ke arah 1; pembandingan ini menggunakan fungsi objektif yang sama untuk kedua estimator."
    },
    {
      "prompt": "LS-06. Model awal $\\widehat y=1+3x$ menggunakan prediktor x. Jika $z=2x+5$, tulis model ekuivalen dalam z dan verifikasi di x=1.",
      "hint": "Balikkan transformasi affine karena koefisien 2 tidak nol.",
      "answer": "Diketahui $z=2x+5$, sehingga $x=(z-5)/2$ untuk setiap z real. Substitusi menghasilkan $\\widehat y=1+3(z-5)/2=-13/2+(3/2)z$. Pada $x=1$ nilai prediktor baru $z=7$. Model lama memprediksi $1+3(1)=4$, sedangkan model baru memprediksi $-13/2+(3/2)7=(-13+21)/2=4$. Kesamaan berlaku untuk seluruh x karena substitusi $z=2x+5$ bersifat bijektif, bukan kebetulan pada satu titik. Perubahan intersep dan kemiringan merupakan perubahan koordinat, bukan perubahan prediksi atau SSE."
    },
    {
      "prompt": "LS-07. Untuk x=(0,1,2) dan y=(0,1,4), bandingkan SSE model konstan dan model linear berintersep.",
      "hint": "Gunakan ybar=5/3, Sxx=2, dan Sxy=4.",
      "answer": "Model konstan terbaik adalah $\\bar y=(0+1+4)/3=5/3$. Residualnya $(-5/3,-2/3,7/3)$, sehingga SSE konstan $(25+4+49)/9=26/3$. Untuk model linear, $\\bar x=1$, $S_{xx}=2$, dan $S_{xy}=(-1)(-5/3)+0+(1)(7/3)=4$. Kemiringan $\\widehat\\beta_1=2$ dan intersep $\\widehat\\beta_0=5/3-2=-1/3$. Prediksi linear adalah $(-1/3,5/3,11/3)$ dan residual $(1/3,-2/3,1/3)$, sehingga SSE linear $(1+4+1)/9=2/3$. Pengurangan SSE adalah $26/3-2/3=8>0$. Ruang model konstan merupakan subruang model linear, sehingga penurunan ini konsisten dengan teorema model bersarang; belum ada bukti bahwa model linear lebih baik pada data pengujian."
    },
    {
      "prompt": "LS-08. Misalkan $U=\\operatorname{span}\\{(1,1,1)\\}$ dan $V=\\operatorname{span}\\{(1,1,1),(0,1,2)\\}$. Untuk $y=(1,0,1)$, buktikan kedua SSE minimum sama walaupun V lebih besar.",
      "hint": "Periksa apakah residual proyeksi konstan ortogonal terhadap kolom prediktor baru.",
      "answer": "Diketahui $y=(1,0,1)$ dan model kecil U berisi vektor konstan. Proyeksi pada U adalah $u^*=(2/3,2/3,2/3)$ karena rata-rata respons $2/3$. Residual $r=y-u^*=(1/3,-2/3,1/3)$ mempunyai jumlah nol, sehingga ortogonal terhadap $(1,1,1)$. Terhadap kolom baru $(0,1,2)$, hasil kalinya $0(1/3)+1(-2/3)+2(1/3)=0$. Residual telah ortogonal terhadap seluruh V, sehingga persamaan normal untuk model besar juga dipenuhi oleh prediksi $u^*$. Dengan karakterisasi dua arah, $P_Vy=u^*\\in U$. SSE pada kedua model adalah $1/9+4/9+1/9=2/3$. Ini memverifikasi kasus kesamaan dalam teorema model bersarang tanpa menganggap setiap penambahan prediktor harus menurunkan SSE secara ketat."
    }
  ],
  "mistakes": [],
  "connections": []
};
