import type { BookLessonContent } from "@/data/book-content-types";

/** Brownian motion: finite-dimensional Gaussian structure, filtration, martingales and L² quadratic variation. */
export const brownianMotionContent:BookLessonContent={
  "intro": [
    "Gerak Brown standar memodelkan akumulasi gangguan acak yang tidak mempunyai arah rata-rata, tetapi mempunyai variansi yang bertambah sebanding dengan waktu. Untuk proses ini, pernyataan bahwa setiap posisi berdistribusi normal belum cukup: hubungan antarwaktu harus ditentukan melalui inkremen independen dan kontinuitas lintasan. Dua proses dapat memiliki distribusi marginal yang sama pada setiap waktu, tetapi struktur ketergantungan yang berbeda.",
    "Pada interval waktu [0,T], inkremen W_t-W_s untuk 0≤s<t berdistribusi normal dengan mean nol dan variansi t-s. Sifat tersebut memungkinkan penghitungan probabilitas ambang, kovarians dua waktu, prediksi bersyarat, serta galat kuadrat variasi lintasan. Hasil mengenai jumlah kuadrat inkremen harus dibedakan dari jumlah inkremen biasa: yang pertama mendekati T, sedangkan yang kedua selalu sama dengan W_T-W_0.",
    "Pembahasan dimulai dari definisi proses dan filtrasi alami, dilanjutkan dengan distribusi gabungan, martingal, penskalaan, dan variasi kuadratik sepanjang partisi seragam. Seluruh pembuktian memisahkan kesimpulan dalam L² atau dalam probabilitas dari klaim hampir pasti. Perhitungan mengasumsikan waktu deterministik; waktu henti memerlukan teorema tambahan yang tidak digunakan di sini.",
    "Rujukan: Karatzas dan Shreve, Brownian Motion and Stochastic Calculus, edisi ke-2 (1991), Bab 2; Øksendal, Stochastic Differential Equations, edisi ke-6 (2003), Bab 2. Hasil elementer pada halaman ini diturunkan dari definisi dan momen Gaussian."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Gerak Brown Standar",
      "statement": "Pada ruang probabilitas $(\\Omega,\\mathcal F,P)$, proses real $(W_t)_{t\\ge0}$ disebut gerak Brown standar jika (i) $W_0=0$ hampir pasti; (ii) untuk setiap $0\\le t_0<t_1<\\cdots<t_n$, peubah $W_{t_1}-W_{t_0},\\ldots,W_{t_n}-W_{t_{n-1}}$ independen; (iii) $W_t-W_s\\sim N(0,t-s)$ untuk $0\\le s<t$; dan (iv) lintasan $t\\mapsto W_t(\\omega)$ kontinu untuk hampir setiap $\\omega$. Notasi $N(0,v)$ berarti normal dengan mean nol dan variansi $v$, bukan simpangan baku $v$."
    },
    {
      "kind": "definition",
      "title": "Filtrasi Alami",
      "statement": "Untuk gerak Brown $W$, filtrasi alami pada waktu $t$ adalah $\\mathcal F_t^W=\\sigma(W_u:0\\le u\\le t)$. Keluarga ini meningkat: jika $s\\le t$, maka $\\mathcal F_s^W\\subseteq\\mathcal F_t^W$. Proses $W$ teradaptasi terhadap filtrasi ini, yaitu $W_t$ terukur terhadap $\\mathcal F_t^W$. Filtrasi alami tidak dengan sendirinya menyatakan bahwa seluruh kejadian masa depan sudah diketahui pada waktu $t$."
    },
    {
      "kind": "definition",
      "title": "Inkremen dan Kovarians",
      "statement": "Untuk $0\\le s<t$, inkremen proses didefinisikan sebagai $\\Delta_{s,t}W=W_t-W_s$. Untuk peubah acak kuadrat-integrabel $X,Y$, kovariansnya adalah $\\operatorname{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]$. Kovarians nol tidak secara umum mengakibatkan independensi; pada pasangan Gaussian bersama, kovarians nol memang cukup untuk independensi."
    },
    {
      "kind": "definition",
      "title": "Jumlah Variasi Kuadratik pada Partisi",
      "statement": "Untuk $T>0$ dan partisi deterministik $0=t_0<\\cdots<t_n=T$, jumlah variasi kuadratik adalah $Q_\\pi(W)=\\sum_{i=1}^n(W_{t_i}-W_{t_{i-1}})^2$. Pada partisi seragam $t_i=iT/n$, tuliskan $Q_n$. Limit $Q_n\\to T$ dalam $L^2$ berarti $E[(Q_n-T)^2]\\to0$; hal itu berbeda dari pernyataan bahwa setiap lintasan mempunyai jumlah kuadrat tepat $T$ untuk $n$ hingga."
    },
    {
      "kind": "proposition",
      "title": "Distribusi Marginal dan Momen Dua Waktu",
      "statement": "Jika $W$ gerak Brown standar, maka untuk $t>0$ berlaku $W_t\\sim N(0,t)$, $E[W_t]=0$, $\\operatorname{Var}(W_t)=t$, dan untuk $s,t\\ge0$ berlaku $\\operatorname{Cov}(W_s,W_t)=\\min\\{s,t\\}$.",
      "proof": [
        "Diketahui $W_0=0$ hampir pasti. Untuk $t>0$, sifat inkremen Gaussian pada interval $[0,t]$ memberi $W_t-W_0\\sim N(0,t)$. Karena $W_0=0$ hampir pasti, diperoleh $W_t\\sim N(0,t)$; mean dan variansinya masing-masing $0$ dan $t$. Pada $t=0$, $W_0$ merupakan peubah degenerat nol.",
        "Untuk $0\\le s\\le t$, uraikan $W_t=W_s+(W_t-W_s)$. Inkremen $W_t-W_s$ independen dari $W_s$: untuk $s>0$ hal ini mengikuti independensi inkremen pada $[0,s]$ dan $[s,t]$; untuk $s=0$ berlaku karena $W_0$ konstan. Dengan mean nol, $E[W_s(W_t-W_s)]=E[W_s]E[W_t-W_s]=0$.",
        "Karena kedua mean nol, $\\operatorname{Cov}(W_s,W_t)=E[W_sW_t]=E[W_s^2]+E[W_s(W_t-W_s)]=s$. Pertukaran $s$ dan $t$ memberi rumus $\\min\\{s,t\\}$ untuk semua pasangan waktu. $\\square$"
      ],
      "explanation": "Kovarians meningkat dengan panjang sejarah bersama kedua posisi, bukan dengan selisih waktunya."
    },
    {
      "kind": "lemma",
      "title": "Independensi Masa Depan terhadap Filtrasi Alami",
      "statement": "Untuk gerak Brown standar, $0\\le s<t$, dan $\\mathcal F_s^W=\\sigma(W_u:0\\le u\\le s)$, inkremen $W_t-W_s$ independen dari $\\mathcal F_s^W$.",
      "proof": [
        "Ambil sembarang waktu $0\\le u_1<\\cdots<u_k\\le s$. Vektor $(W_{u_1},\\ldots,W_{u_k})$ dapat ditulis sebagai transformasi linear inkremen pada interval tak tumpang tindih yang seluruhnya berakhir paling lambat pada $s$. Menurut aksioma independensi inkremen, $W_t-W_s$ independen dari seluruh inkremen tersebut secara bersama, sehingga independen dari vektor nilai masa lalu.",
        "Untuk setiap himpunan Borel $B$, kelas kejadian $A\\in\\mathcal F_s^W$ yang memenuhi $P(A\\cap\\{W_t-W_s\\in B\\})=P(A)P(W_t-W_s\\in B)$ merupakan sistem Dynkin: ia memuat $\\Omega$, tertutup terhadap komplemen, dan terhadap gabungan terhitung kejadian saling lepas.",
        "Kelas itu memuat semua kejadian silinder hingga dari nilai $W_u$ untuk $u\\le s$, yang membentuk sistem $\\pi$ pembangkit $\\mathcal F_s^W$. Teorema $\\pi$–$\\lambda$ memberi bahwa kelas tersebut sama dengan seluruh $\\mathcal F_s^W$. Karena $B$ sebarang, independensi yang dinyatakan terbukti. $\\square$"
      ],
      "explanation": "Independensi dari keseluruhan informasi masa lalu lebih kuat daripada sekadar kovarians nol."
    },
    {
      "kind": "theorem",
      "title": "Martingal dan Variansi Bersyarat",
      "statement": "Untuk gerak Brown standar dengan filtrasi alaminya dan $0\\le s<t$, berlaku $E[W_t\\mid\\mathcal F_s^W]=W_s$ dan $E[(W_t-W_s)^2\\mid\\mathcal F_s^W]=t-s$ hampir pasti. Selain itu $E[W_t^2-t\\mid\\mathcal F_s^W]=W_s^2-s$ hampir pasti.",
      "proof": [
        "Dari lemma sebelumnya, $X=W_t-W_s$ independen dari $\\mathcal F_s^W$ serta $X\\sim N(0,t-s)$. Karena $E[X]=0$ dan $E[X^2]=t-s$, sifat ekspektasi bersyarat terhadap sigma-aljabar independen memberi $E[X\\mid\\mathcal F_s^W]=0$ dan $E[X^2\\mid\\mathcal F_s^W]=t-s$.",
        "Peubah $W_s$ terukur terhadap $\\mathcal F_s^W$ dan integrabel. Dengan linearitas ekspektasi bersyarat, $E[W_t\\mid\\mathcal F_s^W]=E[W_s+X\\mid\\mathcal F_s^W]=W_s$. Pernyataan kedua diperoleh langsung dari momen kedua $X$.",
        "Kuadratkan $W_t=W_s+X$ lalu ambil ekspektasi bersyarat: $E[W_t^2\\mid\\mathcal F_s^W]=W_s^2+2W_sE[X\\mid\\mathcal F_s^W]+E[X^2\\mid\\mathcal F_s^W]=W_s^2+t-s$. Mengurangkan $t$ menghasilkan $W_s^2-s$. Semua peubah kuadrat-integrabel, sehingga langkah-langkah tersebut sah. $\\square$"
      ],
      "explanation": "Proses W dan W²−t keduanya martingal; W² sendiri bukan martingal."
    },
    {
      "kind": "proposition",
      "title": "Distribusi Gabungan pada Dua Waktu",
      "statement": "Untuk $0<s<t$, pasangan $(W_s,W_t)$ adalah Gaussian bersama dengan matriks kovarians $\\begin{pmatrix}s&s\\\\s&t\\end{pmatrix}$. Selanjutnya $W_s$ dan $W_t$ tidak independen, sedangkan $W_s$ dan $W_t-W_s$ independen.",
      "proof": [
        "Tuliskan $U=W_s$ dan $V=W_t-W_s$. Dari definisi, $U\\sim N(0,s)$ dan $V\\sim N(0,t-s)$ serta $U,V$ independen. Setiap kombinasi linear $aW_s+bW_t=(a+b)U+bV$ merupakan jumlah dua Gaussian independen, sehingga Gaussian. Ini membuktikan Gaussian bersama.",
        "Dari proposisi kovarians, $\\operatorname{Var}(W_s)=s$, $\\operatorname{Var}(W_t)=t$, dan $\\operatorname{Cov}(W_s,W_t)=s$. Karena $s>0$, kovarians pasangan posisi tidak nol. Independensi dengan momen kedua hingga mengharuskan kovarians nol, sehingga $W_s$ dan $W_t$ tidak independen.",
        "Independensi $W_s$ dan $W_t-W_s$ sudah diberikan oleh aksioma inkremen independen. Perbedaan kedua pasangan ini menegaskan bahwa posisi memuat sejarah, sedangkan inkremen berikutnya merupakan gangguan baru. $\\square$"
      ],
      "explanation": "Kovarians posisi pada dua waktu bukan nol walaupun inkremen pada interval terpisah independen."
    },
    {
      "kind": "theorem",
      "title": "Penskalaan Brown",
      "statement": "Jika $W$ gerak Brown standar dan $a>0$, proses $B_t=a^{-1/2}W_{at}$, $t\\ge0$, juga gerak Brown standar.",
      "proof": [
        "Diketahui $B_0=a^{-1/2}W_0=0$ hampir pasti. Untuk $0\\le s<t$, $B_t-B_s=a^{-1/2}(W_{at}-W_{as})$. Karena $W_{at}-W_{as}\\sim N(0,a(t-s))$, penskalaan Gaussian memberi $B_t-B_s\\sim N(0,t-s)$.",
        "Jika $0\\le t_0<\\cdots<t_n$, interval $[at_{i-1},at_i]$ tidak tumpang tindih karena $a>0$. Inkremen $W$ pada interval tersebut independen; perkalian setiap inkremen dengan konstanta yang sama mempertahankan independensi. Dengan demikian inkremen $B$ independen.",
        "Untuk hampir setiap $\\omega$, fungsi $u\\mapsto W_u(\\omega)$ kontinu. Komposisi dengan $u=at$ dan perkalian konstanta $a^{-1/2}$ mempertahankan kontinuitas pada seluruh $t\\ge0$. Keempat syarat definisi terpenuhi, sehingga $B$ gerak Brown standar. $\\square$"
      ],
      "explanation": "Kesamaan dalam hukum proses tidak berarti B_t sama dengan W_t pada setiap lintasan."
    },
    {
      "kind": "theorem",
      "title": "Variasi Kuadratik Partisi Seragam",
      "statement": "Untuk $T>0$, $t_i=iT/n$, dan $Q_n=\\sum_{i=1}^n(W_{t_i}-W_{t_{i-1}})^2$, berlaku $E[Q_n]=T$, $\\operatorname{Var}(Q_n)=2T^2/n$, serta $Q_n\\to T$ dalam $L^2$ dan dalam probabilitas ketika $n\\to\\infty$.",
      "proof": [
        "Setiap inkremen $X_i=W_{t_i}-W_{t_{i-1}}$ independen dan berdistribusi $N(0,h)$ dengan $h=T/n$. Oleh karena itu $E[X_i^2]=h$. Untuk Gaussian bermean nol, fungsi pembangkit momen $M_X(u)=\\exp(hu^2/2)$ memberikan $E[X_i^4]=M_X^{(4)}(0)=3h^2$, sehingga $\\operatorname{Var}(X_i^2)=3h^2-h^2=2h^2$.",
        "Linearitas ekspektasi memberi $E[Q_n]=\\sum_{i=1}^n h=nh=T$. Karena inkremen $X_i$ independen, kuadratnya juga independen. Dengan demikian $\\operatorname{Var}(Q_n)=\\sum_{i=1}^n2h^2=2nh^2=2T^2/n$.",
        "Rumus bias-variansi memberi $E[(Q_n-T)^2]=\\operatorname{Var}(Q_n)+(E[Q_n]-T)^2=2T^2/n\\to0$. Ini tepat definisi konvergensi dalam $L^2$. Untuk setiap $\\varepsilon>0$, ketaksamaan Chebyshev memberi $P(|Q_n-T|>\\varepsilon)\\le2T^2/(n\\varepsilon^2)\\to0$, sehingga konvergensi dalam probabilitas juga terbukti. Tidak dibuat klaim bahwa $Q_n=T$ pada partisi hingga. $\\square$"
      ],
      "explanation": "Limit kuadrat inkremen bukan nol walaupun tiap inkremen menyusut ketika panjang interval mengecil."
    }
  ],
  "examples": [
    {
      "title": "Contoh Distribusi pada Waktu Empat",
      "forDefinition": "Gerak Brown Standar",
      "problem": "Untuk gerak Brown standar, hitung $P(W_4>2)$ dan jelaskan variansi yang digunakan.",
      "solution": [
        "Diketahui $W_4-W_0\\sim N(0,4)$ dan $W_0=0$ hampir pasti. Variansi $W_4$ adalah $4$, sehingga simpangan bakunya $\\sqrt4=2$, bukan $4$.",
        "Standarisasi memberi $Z=W_4/2\\sim N(0,1)$ dan $P(W_4>2)=P(Z>1)=1-\\Phi(1)$. Dari fungsi distribusi normal baku, $\\Phi(1)\\approx0{,}841344746$, sehingga peluangnya sekitar $0{,}158655254$.",
        "Nilai peluang berada antara nol dan satu; ambang 2 sama dengan satu simpangan baku di atas mean, sesuai nilai ekor normal sekitar 15,87%."
      ],
      "conclusion": "Peluang posisi W_4 melebihi 2 adalah sekitar 0,158655."
    },
    {
      "title": "Contoh Informasi Masa Lalu",
      "forDefinition": "Filtrasi Alami",
      "problem": "Pada waktu $s=1$, tentukan $E[W_3\\mid\\mathcal F_1^W]$ dan variansi bersyarat inkremen $W_3-W_1$.",
      "solution": [
        "Diketahui $\\mathcal F_1^W$ memuat informasi nilai $W_u$ hingga waktu 1, khususnya $W_1$. Inkremen $X=W_3-W_1$ independen dari informasi tersebut dan mempunyai distribusi $N(0,2)$.",
        "Uraikan $W_3=W_1+X$. Ekspektasi bersyaratnya $E[W_3\\mid\\mathcal F_1^W]=W_1+E[X\\mid\\mathcal F_1^W]=W_1$. Selain itu $E[X^2\\mid\\mathcal F_1^W]=2$, sedangkan mean bersyarat $X$ nol, sehingga $\\operatorname{Var}(X\\mid\\mathcal F_1^W)=2$.",
        "Prediksi bersyarat bukan nol konstan: nilainya adalah W_1 yang sudah diketahui pada waktu 1."
      ],
      "conclusion": "Mean bersyarat W_3 adalah W_1, sedangkan variansi inkremen masa depan adalah 2."
    },
    {
      "title": "Contoh Kovarians Dua Posisi",
      "forDefinition": "Inkremen dan Kovarians",
      "problem": "Hitung $\\operatorname{Cov}(W_2,W_5)$ dan korelasinya; tentukan apakah keduanya independen.",
      "solution": [
        "Diketahui $2<5$. Berdasarkan rumus kovarians, $\\operatorname{Cov}(W_2,W_5)=\\min\\{2,5\\}=2$. Variansi masing-masing posisi adalah 2 dan 5.",
        "Koefisien korelasi adalah $\\rho=2/(\\sqrt2\\sqrt5)=2/\\sqrt{10}\\approx0{,}632456$. Nilai ini tidak nol; dua peubah yang independen dan mempunyai momen kedua hingga harus berkorelasikan nol.",
        "Sebaliknya, $W_2$ independen dari $W_5-W_2$ karena interval $[0,2]$ dan $[2,5]$ mempunyai inkremen independen. Kovarians posisi yang positif berasal dari komponen sejarah bersama $W_2$."
      ],
      "conclusion": "Cov(W_2,W_5)=2 dan kedua posisi tidak independen."
    },
    {
      "title": "Contoh Jumlah Kuadrat Inkremen",
      "forDefinition": "Jumlah Variasi Kuadratik pada Partisi",
      "problem": "Untuk $T=2$ dan $n=8$ interval seragam, tentukan mean, variansi, dan mean squared error $Q_8$ sebagai penaksir $T$.",
      "solution": [
        "Diketahui panjang setiap interval $h=T/n=2/8=1/4$. Inkremen independen $X_i$ masing-masing mempunyai variansi $h$ dan $E[X_i^2]=h$.",
        "Ekspektasi $Q_8$ adalah $8(1/4)=2$. Variansi tiap kuadrat inkremen adalah $2h^2=2/16=1/8$, sehingga variansi jumlahnya $8(1/8)=1$.",
        "Karena $E[Q_8]=T$, biasnya nol. Mean squared error terhadap $T=2$ sama dengan variansi, yaitu $E[(Q_8-2)^2]=1$. Rumus umum $2T^2/n=2(4)/8=1$ memverifikasi hasil."
      ],
      "conclusion": "Pada n=8, E[Q_8]=2 dan E[(Q_8−2)^2]=1; galat belum nol."
    },
    {
      "title": "Contoh Peluang Inkremen",
      "problem": "Hitung $P(W_5-W_2>3)$ dan bandingkan dengan $P(W_3>3)$.",
      "solution": [
        "Diketahui panjang interval dari 2 ke 5 adalah 3. Inkremen $W_5-W_2$ mempunyai distribusi $N(0,3)$, persis sama dengan distribusi $W_3$ karena inkremen stasioner.",
        "Dengan $Z\\sim N(0,1)$, kedua peluang sama dengan $P(Z>3/\\sqrt3)=1-\\Phi(\\sqrt3)$. Nilai $\\sqrt3\\approx1{,}73205$ memberi peluang sekitar $0{,}0416$.",
        "Kesamaan peluang adalah kesamaan distribusi, bukan pernyataan bahwa W_5−W_2 dan W_3 selalu sama sebagai peubah acak."
      ],
      "conclusion": "Kedua peluang sama, yaitu 1−Φ(√3), sekitar 0,0416."
    },
    {
      "title": "Contoh Penskalaan Waktu",
      "problem": "Untuk $B_t=W_{9t}/3$, tentukan $\\operatorname{Var}(B_2-B_1)$ dan periksa apakah $B$ gerak Brown standar.",
      "solution": [
        "Diketahui faktor waktu $a=9$ dan faktor amplitudo $a^{-1/2}=1/3$. Inkremen $B_2-B_1=(W_{18}-W_9)/3$.",
        "Variansi inkremen $W_{18}-W_9$ adalah $18-9=9$. Setelah pembagian oleh 3, variansi menjadi $9/3^2=1$, sama dengan panjang interval $2-1=1$.",
        "Penskalaan mempertahankan independensi inkremen dan kontinuitas lintasan; $B_0=0$. Keempat aksioma gerak Brown standar terpenuhi, bukan hanya persamaan variansinya."
      ],
      "conclusion": "B adalah gerak Brown standar dan Var(B_2−B_1)=1."
    },
    {
      "title": "Contoh Martingal Kuadrat",
      "problem": "Hitung $E[W_4^2\\mid\\mathcal F_1^W]$ dan $E[W_4^2-4\\mid\\mathcal F_1^W]$.",
      "solution": [
        "Diketahui $W_4=W_1+X$ dengan $X=W_4-W_1\\sim N(0,3)$ independen dari $\\mathcal F_1^W$.",
        "Ekspansi kuadrat memberi $W_4^2=W_1^2+2W_1X+X^2$. Setelah conditioning, suku silang hilang karena $E[X\\mid\\mathcal F_1^W]=0$, sedangkan $E[X^2\\mid\\mathcal F_1^W]=3$.",
        "Diperoleh $E[W_4^2\\mid\\mathcal F_1^W]=W_1^2+3$ dan $E[W_4^2-4\\mid\\mathcal F_1^W]=W_1^2-1$. Identitas terakhir cocok dengan martingal $W_t^2-t$."
      ],
      "conclusion": "Mean kuadrat bersyarat adalah W_1²+3 dan martingal terkoreksi bernilai W_1²−1."
    },
    {
      "title": "Contoh Batas Galat Probabilistik",
      "problem": "Untuk $T=1$, tentukan $n$ yang menjamin $P(|Q_n-1|>0{,}2)\\le0{,}05$ melalui Chebyshev.",
      "solution": [
        "Diketahui $E[Q_n]=1$ dan $\\operatorname{Var}(Q_n)=2/n$. Ketaksamaan Chebyshev berlaku karena momen kedua $Q_n$ hingga.",
        "Dengan $\\varepsilon=0{,}2$, diperoleh $P(|Q_n-1|>0{,}2)\\le(2/n)/(0{,}2)^2=50/n$. Agar batas atas paling besar $0{,}05$, perlu $50/n\\le0{,}05$, yakni $n\\ge1000$.",
        "Angka 1000 merupakan ukuran partisi yang cukup menurut batas Chebyshev, bukan ukuran minimum eksak berdasarkan distribusi Q_n."
      ],
      "conclusion": "Setiap n≥1000 memenuhi jaminan Chebyshev yang diminta."
    }
  ],
  "exercises": [
    {
      "prompt": "BM-01. Untuk $W$ gerak Brown standar, hitung $P(-2<W_4<2)$ dan nyatakan sebagai nilai fungsi distribusi normal baku.",
      "hint": "Standarisasi dengan simpangan baku 2.",
      "answer": "Diketahui $W_4\\sim N(0,4)$, sehingga simpangan bakunya 2. Peristiwa $-2<W_4<2$ setara dengan $-1<Z<1$ untuk $Z=W_4/2\\sim N(0,1)$. Karena normal baku simetris, $P(-1<Z<1)=\\Phi(1)-\\Phi(-1)=2\\Phi(1)-1$. Dengan $\\Phi(1)\\approx0{,}841344746$, hasilnya $0{,}682689492$. Batas interval terbuka atau tertutup tidak mengubah peluang karena distribusi normal kontinu. Jadi peluang posisi berada antara −2 dan 2 adalah sekitar 68,27%.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-02. Hitung $E[W_6-W_2\\mid\\mathcal F_2^W]$ dan $E[(W_6-W_2)^2\\mid\\mathcal F_2^W]$.",
      "hint": "Gunakan independensi inkremen dari filtrasi masa lalu.",
      "answer": "Diketahui $X=W_6-W_2$ merupakan inkremen pada interval panjang $6-2=4$. Definisi gerak Brown memberi $X\\sim N(0,4)$ dan lemma independensi filtrasi menjamin $X$ independen dari $\\mathcal F_2^W$. Karena $E[X]=0$, ekspektasi bersyaratnya $E[X\\mid\\mathcal F_2^W]=0$ hampir pasti. Momen kedua Gaussian bermean nol adalah variansinya, yaitu $E[X^2]=4$, sehingga $E[X^2\\mid\\mathcal F_2^W]=4$ hampir pasti. Hasilnya adalah 0 dan 4, bukan $W_2$ dan 6, karena yang dikondisikan ialah inkremen, bukan posisi $W_6$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-03. Tentukan $\\operatorname{Cov}(W_1+W_3,W_2)$ dan $\\operatorname{Var}(W_3-W_1)$.",
      "hint": "Gunakan bilinearitas kovarians dan rumus min(s,t).",
      "answer": "Diketahui $\\operatorname{Cov}(W_s,W_t)=\\min\\{s,t\\}$. Bilinearitas memberi $\\operatorname{Cov}(W_1+W_3,W_2)=\\operatorname{Cov}(W_1,W_2)+\\operatorname{Cov}(W_3,W_2)=1+2=3$. Untuk inkremen $W_3-W_1$, rumus variansi selisih menghasilkan $\\operatorname{Var}(W_3)+\\operatorname{Var}(W_1)-2\\operatorname{Cov}(W_3,W_1)=3+1-2(1)=2$. Verifikasi independen: inkremen interval $[1,3]$ panjangnya 2, sehingga langsung berdistribusi $N(0,2)$. Kedua cara konsisten.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-04. Buktikan bahwa $E[W_t^2]=t$ untuk $t\\ge0$ dan simpulkan $E[W_t^2-t]=0$.",
      "hint": "Pisahkan kasus t=0 dan t>0.",
      "answer": "Untuk $t=0$, aksioma awal memberi $W_0=0$ hampir pasti, sehingga $E[W_0^2]=0=t$. Untuk $t>0$, inkremen $W_t-W_0$ berdistribusi $N(0,t)$ dan $W_0=0$, sehingga $W_t$ bermean nol serta bervariansi $t$. Identitas $\\operatorname{Var}(W_t)=E[W_t^2]-(E[W_t])^2$ menghasilkan $E[W_t^2]=t$. Linearitas ekspektasi kemudian memberi $E[W_t^2-t]=t-t=0$. Mean nol ini sendiri belum membuktikan martingal; sifat martingal memerlukan identitas ekspektasi bersyarat pada setiap $s\\le t$, yang telah dibuktikan secara terpisah.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-05. Untuk $B_t=W_{4t}/2$, buktikan bahwa $B$ gerak Brown standar, bukan hanya bahwa $\\operatorname{Var}(B_1)=1$.",
      "hint": "Periksa keempat aksioma gerak Brown.",
      "answer": "Diketahui $B_0=W_0/2=0$ hampir pasti. Untuk $s<t$, $B_t-B_s=(W_{4t}-W_{4s})/2$ berdistribusi $N(0,4(t-s)/4)=N(0,t-s)$. Jika interval waktu $(t_{i-1},t_i]$ tidak tumpang tindih, interval hasil penskalaan $(4t_{i-1},4t_i]$ juga tidak tumpang tindih; inkremen $W$ independen dan pembagian konstanta mempertahankan independensi. Untuk hampir setiap lintasan kontinu $W$, fungsi $t\\mapsto W_{4t}/2$ kontinu. Keempat syarat definisi terpenuhi. Dengan demikian $B$ adalah gerak Brown standar, bukan sekadar peubah dengan variansi satu pada waktu 1.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-06. Untuk $T=3$ dan partisi seragam $n=18$, hitung $E[Q_n]$, $\\operatorname{Var}(Q_n)$, dan $E[(Q_n-3)^2]$.",
      "hint": "Gunakan variansi kuadrat normal dan independensi inkremen.",
      "answer": "Diketahui panjang interval $h=T/n=3/18=1/6$. Masing-masing inkremen $X_i\\sim N(0,h)$ independen, sehingga $E[X_i^2]=h$ dan $\\operatorname{Var}(X_i^2)=2h^2$. Ekspektasi jumlah $Q_{18}$ adalah $18(1/6)=3$. Variansinya $18\\cdot2(1/6)^2=36/36=1$. Karena bias $E[Q_{18}]-3=0$, galat kuadrat rata-rata adalah $\\operatorname{Var}(Q_{18})+0^2=1$. Pemeriksaan rumus umum memberi $2T^2/n=2(9)/18=1$, tepat sama. Hasil ini tidak menyatakan bahwa satu lintasan pasti menghasilkan $Q_{18}=3$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-07. Tunjukkan bahwa $W_1$ dan $W_2$ tidak independen, tetapi $W_1$ dan $W_2-W_1$ independen.",
      "hint": "Bandingkan kovarians posisi dan aksioma inkremen independen.",
      "answer": "Diketahui $W_2=W_1+(W_2-W_1)$ dengan kedua inkremen pada $[0,1]$ dan $[1,2]$ independen menurut definisi. Karena $W_0=0$, $W_1=W_1-W_0$ dan karena itu $W_1$ independen dari $W_2-W_1$. Sementara itu $\\operatorname{Cov}(W_1,W_2)=\\min\\{1,2\\}=1\\ne0$. Jika dua peubah kuadrat-integrabel independen, kovariansnya mesti nol; kontraposisinya menunjukkan $W_1$ dan $W_2$ tidak independen. Perbedaan ini tidak bertentangan: posisi kedua mengandung posisi pertama, sedangkan inkremen baru tidak membawa ketergantungan terhadap masa lalu.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "BM-08. Untuk $T=2$, cari $n$ yang cukup agar $P(|Q_n-2|>1/2)\\le0{,}01$ berdasarkan Chebyshev. Jelaskan sifat batasnya.",
      "hint": "Masukkan epsilon=1/2 ke 2T²/(n epsilon²).",
      "answer": "Diketahui $E[Q_n]=2$ dan $\\operatorname{Var}(Q_n)=2T^2/n=8/n$. Ketaksamaan Chebyshev berlaku karena $Q_n$ mempunyai momen kedua hingga. Dengan ambang $\\varepsilon=1/2$, diperoleh $P(|Q_n-2|>1/2)\\le(8/n)/(1/2)^2=32/n$. Syarat $32/n\\le0{,}01$ ekuivalen dengan $n\\ge3200$. Untuk setiap bilangan bulat $n\\ge3200$, batas atas peluang paling besar satu persen. Ini jaminan konservatif berdasarkan momen kedua, bukan pembuktian bahwa $n=3199$ pasti gagal secara probabilitas eksak.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
