import { buildMeasureProbabilityContent, type MeasureProbabilityLessonSpec } from "@/data/measure-probability-content-utils";

const specs: Record<string, MeasureProbabilityLessonSpec> = {
  "tup-cond-expectation": {
    title:"Ekspektasi Bersyarat",
    focus:"Ekspektasi bersyarat adalah proyeksi informasi: $E[X\mid\mathcal G]$ adalah variabel acak $\mathcal G$-terukur yang mempertahankan integral $X$ pada setiap kejadian di $\mathcal G$.",
    definitions:[
      {title:"Ekspektasi Bersyarat",statement:"Untuk $X\in L^1$ dan sub-sigma-algebra $\mathcal G\subseteq\mathcal F$, variabel acak $Y$ disebut versi $E[X\mid\mathcal G]$ jika $Y$ $\mathcal G$-terukur, integrabel, dan $\int_A YdP=\int_A XdP$ untuk setiap $A\in\mathcal G$."},
      {title:"Versi",statement:"Ekspektasi bersyarat ditentukan hanya sampai kesamaan hampir pasti; dua kandidat yang memenuhi definisi disebut versi satu sama lain."}
    ],
    results:[
      {kind:"theorem",title:"Tower Property",statement:"Jika $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$ dan $X\in L^1$, maka $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ hampir pasti.",proof:[
        "Variabel $E[E[X\mid\mathcal G]\mid\mathcal H]$ bersifat $\mathcal H$-terukur.",
        "Untuk setiap $A\in\mathcal H\subseteq\mathcal G$, definisi conditioning memberi $E[1_AE[X\mid\mathcal G]]=E[1_AX]$.",
        "Conditioning lagi terhadap $\mathcal H$ mempertahankan integral pada setiap $A\in\mathcal H$. Keunikan hampir pasti memberi identitas tower."
      ]}
    ],
    examples:[
      {title:"Sigma-Algebra Trivial",problem:"Jika $\mathcal G=\{\varnothing,\Omega\}$ dan $X\in L^1$, tentukan $E[X\mid\mathcal G]$.",solution:["Setiap variabel $\mathcal G$-terukur harus konstan hampir pasti.","Konstanta harus mempunyai ekspektasi sama dengan $X$."],conclusion:"$E[X\mid\mathcal G]=E[X]$ hampir pasti."}
    ],
    connections:"Ekspektasi bersyarat adalah fondasi martingale, probabilitas bersyarat, filtrasi, dan banyak teknik dekomposisi pada proses stokastik."
  },

  "tup-cond-convergence": {
    title:"Konvergensi Ekspektasi Bersyarat",
    focus:"Konvergensi ekspektasi bersyarat mengkaji perilaku $E[X\mid\mathcal F_n]$ ketika informasi bertambah atau berkurang.",
    definitions:[
      {title:"Filtrasi Meningkat",statement:"Barisan sigma-algebra $(\mathcal F_n)$ meningkat jika $\mathcal F_n\subseteq\mathcal F_{n+1}$."},
      {title:"Sigma-Algebra Limit",statement:"Untuk filtrasi meningkat, $\mathcal F_\infty=\sigma(\bigcup_n\mathcal F_n)$."}
    ],
    results:[
      {kind:"proposition",title:"Kontraksi $L^1$ Ekspektasi Bersyarat",statement:"Untuk $X,Y\in L^1$, $\|E[X\mid\mathcal G]-E[Y\mid\mathcal G]\|_1\le\|X-Y\|_1$.",proof:[
        "Linearitas memberi selisih sama dengan $E[X-Y\mid\mathcal G]$.",
        "Ketaksamaan Jensen bersyarat untuk fungsi konveks $|\cdot|$ memberi $|E[Z\mid\mathcal G]|\le E[|Z|\mid\mathcal G]$.",
        "Ambil ekspektasi dan gunakan tower property untuk memperoleh batas $E|X-Y|$."
      ]}
    ],
    examples:[
      {title:"Stabilitas terhadap Aproksimasi",problem:"Jika $X_n\to X$ di $L^1$, apa yang terjadi pada $E[X_n\mid\mathcal G]$?",solution:["Gunakan kontraksi $L^1$.","Norma selisih conditional expectation dibatasi oleh $\|X_n-X\|_1$."],conclusion:"$E[X_n\mid\mathcal G]\to E[X\mid\mathcal G]$ di $L^1$."}
    ],
    connections:"Teorema konvergensi martingale dapat dipandang sebagai hasil konvergensi conditional expectation terhadap filtrasi yang berubah."
  },

  "tup-cond-probability": {
    title:"Probabilitas Bersyarat",
    focus:"Probabilitas bersyarat umum didefinisikan sebagai ekspektasi bersyarat indikator kejadian.",
    definitions:[
      {title:"Probabilitas Bersyarat terhadap Sigma-Algebra",statement:"Untuk kejadian $A$, didefinisikan $P(A\mid\mathcal G)=E[1_A\mid\mathcal G]$."},
      {title:"Probabilitas Bersyarat pada Kejadian",statement:"Jika $P(B)>0$, probabilitas klasik $P(A\mid B)=P(A\cap B)/P(B)$ dapat dipandang sebagai conditioning terhadap sigma-algebra yang dihasilkan oleh partisi."}
    ],
    results:[
      {kind:"proposition",title:"Nilai Probabilitas Bersyarat Berada antara Nol dan Satu",statement:"$0\le P(A\mid\mathcal G)\le1$ hampir pasti.",proof:[
        "Indikator memenuhi $0\le1_A\le1$.",
        "Monotonisitas ekspektasi bersyarat memberi $0\le E[1_A\mid\mathcal G]\le E[1\mid\mathcal G]$.",
        "Karena $E[1\mid\mathcal G]=1$, diperoleh batas yang diinginkan."
      ]}
    ],
    examples:[
      {title:"Partisi Dua Kejadian",problem:"Jika $\mathcal G=\sigma(B)$ dengan $0<P(B)<1$, bagaimana bentuk $P(A\mid\mathcal G)$?",solution:["Variabel $\mathcal G$-terukur konstan pada $B$ dan $B^c$.","Nilai konstanta ditentukan oleh syarat integral pada masing-masing blok."],conclusion:"$P(A\mid\mathcal G)=P(A\mid B)1_B+P(A\mid B^c)1_{B^c}$."}
    ],
    connections:"Definisi ini memungkinkan conditioning terhadap informasi yang jauh lebih kaya daripada satu kejadian dan menjadi bahasa standar pada martingale."
  },

  "tup-martingale": {
    title:"Martingale",
    focus:"Martingale memodelkan proses fair game relatif terhadap informasi yang tersedia: prediksi terbaik nilai berikutnya berdasarkan masa lalu adalah nilai saat ini.",
    definitions:[
      {title:"Martingale",statement:"Proses integrabel adapted $(M_n)$ terhadap filtrasi $(\mathcal F_n)$ disebut martingale jika $E[M_{n+1}\mid\mathcal F_n]=M_n$ hampir pasti."},
      {title:"Submartingale dan Supermartingale",statement:"Ganti equality dengan $E[M_{n+1}\mid\mathcal F_n]\ge M_n$ untuk submartingale dan $\le M_n$ untuk supermartingale."}
    ],
    results:[
      {kind:"proposition",title:"Jumlah Parsial Increment Independen Bermean Nol adalah Martingale",statement:"Jika $X_n$ independen, integrabel, $E[X_n]=0$, dan $S_n=\sum_{k=1}^nX_k$, maka $(S_n)$ martingale terhadap filtrasi alaminya.",proof:[
        "$S_n$ terukur terhadap $\mathcal F_n$ dan integrabel.",
        "$S_{n+1}=S_n+X_{n+1}$.",
        "Independensi memberi $E[X_{n+1}\mid\mathcal F_n]=0$, sehingga $E[S_{n+1}\mid\mathcal F_n]=S_n$."
      ]}
    ],
    examples:[
      {title:"Random Walk Simetris",problem:"Untuk increment $\pm1$ dengan peluang sama, tunjukkan random walk $S_n$ martingale.",solution:["Increment independen dan mempunyai mean nol.","Terapkan proposisi jumlah parsial."],conclusion:"$(S_n)$ adalah martingale."}
    ],
    connections:"Martingale menghubungkan random walk, stopping time, conditional expectation, Brownian motion, dan teori finansial stokastik."
  },

  "tup-stopping": {
    title:"Stopping Time",
    focus:"Stopping time adalah waktu acak yang keputusan berhentinya pada waktu $n$ hanya menggunakan informasi hingga waktu tersebut.",
    definitions:[
      {title:"Stopping Time",statement:"Peubah acak $\tau:\Omega\to\mathbb N\cup\{\infty\}$ disebut stopping time jika $\{\tau\le n\}\in\mathcal F_n$ untuk setiap $n$."},
      {title:"Stopped Process",statement:"Untuk proses $X_n$, proses yang dihentikan didefinisikan $X_{n\wedge\tau}$."}
    ],
    results:[
      {kind:"proposition",title:"Stopped Martingale pada Waktu Terbatas adalah Martingale",statement:"Jika $(M_n)$ martingale dan $\tau$ stopping time, maka $(M_{n\wedge\tau})$ martingale.",proof:[
        "Tuliskan $M_{(n+1)\wedge\tau}-M_{n\wedge\tau}=1_{\{\tau>n\}}(M_{n+1}-M_n)$.",
        "Indikator $1_{\{\tau>n\}}$ bersifat $\mathcal F_n$-terukur.",
        "Conditioning terhadap $\mathcal F_n$ memberi ekspektasi increment nol karena martingale. Oleh karena itu proses stopped tetap martingale."
      ]}
    ],
    examples:[
      {title:"Waktu Pertama Menyentuh Level",problem:"Untuk random walk $S_n$, definisikan $\tau=\inf\{n:S_n=5\}$. Mengapa $\tau$ stopping time?",solution:["Kejadian $\{\tau\le n\}$ berarti level 5 sudah disentuh pada salah satu waktu $0,\ldots,n$.","Informasi tersebut ditentukan sepenuhnya oleh $S_0,\ldots,S_n$."],conclusion:"$\{\tau\le n\}\in\mathcal F_n$."}
    ],
    connections:"Optional stopping membandingkan ekspektasi martingale pada stopping time, tetapi membutuhkan syarat tambahan agar pertukaran limit dan ekspektasi sah."
  },

  "tup-martingale-inequalities": {
    title:"Ketaksamaan Martingale",
    focus:"Ketaksamaan martingale mengontrol maksimum proses dan probabilitas deviasi melalui momen nilai terminal.",
    definitions:[
      {title:"Maksimum Parsial",statement:"Untuk proses $M_k$, maksimum hingga waktu $n$ adalah $M_n^*=\max_{0\le k\le n}|M_k|$."},
      {title:"Submartingale Nonnegatif",statement:"Proses adapted integrabel nonnegatif disebut submartingale jika conditional expectation satu langkah tidak lebih kecil dari nilai sekarang."}
    ],
    results:[
      {kind:"theorem",title:"Ketaksamaan Maksimal Doob $L^1$ untuk Submartingale Nonnegatif",statement:"Jika $(X_k)$ submartingale nonnegatif dan $\lambda>0$, maka $\lambda P(\max_{k\le n}X_k\ge\lambda)\le E[X_n1_{\{\max_{k\le n}X_k\ge\lambda\}}]\le E[X_n]$.",proof:[
        "Pisahkan kejadian bahwa level $\lambda$ pertama kali dilewati pada waktu $k$ menjadi kejadian saling lepas $A_k\in\mathcal F_k$.",
        "Pada $A_k$, $X_k\ge\lambda$. Sifat submartingale memberi $E[1_{A_k}X_n]\ge E[1_{A_k}X_k]\ge\lambda P(A_k)$.",
        "Jumlahkan terhadap $k$. Gabungan $A_k$ adalah kejadian maksimum melewati $\lambda$, sehingga ketaksamaan diperoleh."
      ]}
    ],
    examples:[
      {title:"Batas Peluang Maksimum",problem:"Jika $X_k$ submartingale nonnegatif dan $E[X_n]=4$, berikan batas $P(\max_{k\le n}X_k\ge10)$.",solution:["Gunakan ketaksamaan maksimal Doob.","$10P(\max X_k\ge10)\le4$."],conclusion:"Peluang tersebut paling besar 0,4."}
    ],
    connections:"Ketaksamaan Doob dipakai untuk membuktikan konvergensi martingale dan mengontrol supremum lintasan."
  },

  "tup-martingale-convergence": {
    title:"Teorema Konvergensi Martingale",
    focus:"Teorema konvergensi martingale memberi kondisi saat proses martingale memiliki limit hampir pasti dan/atau dalam $L^1$.",
    definitions:[
      {title:"Uniformly Integrable Martingale",statement:"Martingale $(M_n)$ uniformly integrable jika keluarga $\{M_n:n\ge0\}$ uniformly integrable."},
      {title:"Konvergensi Martingale",statement:"Konvergensi dapat dimaksudkan hampir pasti, dalam $L^1$, atau keduanya; jenisnya harus dinyatakan."}
    ],
    results:[
      {kind:"proposition",title:"Konvergensi $L^1$ Mengimplikasikan Uniform Integrability",statement:"Jika $M_n\to M$ di $L^1$, maka keluarga $\{M_n:n\ge1\}$ uniformly integrable.",proof:[
        "Keluarga singleton $\{M\}$ uniformly integrable karena $M\in L^1$.",
        "Untuk $n$ besar, $\|M_n-M\|_1$ kecil, sehingga ekor $M_n$ dapat dikontrol oleh ekor $M$ ditambah galat $L^1$.",
        "Sisa finitely many $M_n$ juga uniformly integrable. Gabungan keluarga finitely many dengan ekor yang terkontrol tetap uniformly integrable."
      ]}
    ],
    examples:[
      {title:"Conditional Expectations dari Satu Variabel",problem:"Ambil $M_n=E[X\mid\mathcal F_n]$ dengan $X\in L^1$. Apa struktur $M_n$?",solution:["Tower property memberi $E[M_{n+1}\mid\mathcal F_n]=M_n$.","Jadi $M_n$ martingale."],conclusion:"Teorema konvergensi menjelaskan limit ketika filtrasi meningkat."}
    ],
    connections:"Uniform integrability adalah syarat kunci untuk meningkatkan konvergensi hampir pasti martingale menjadi konvergensi $L^1$."
  },

  "tup-random-walk-app": {
    title:"Aplikasi Martingale pada Random Walk",
    focus:"Martingale memungkinkan probabilitas hitting, waktu berhenti, dan identitas random walk dihitung tanpa menjumlahkan semua lintasan secara langsung.",
    definitions:[
      {title:"Random Walk",statement:"Random walk satu dimensi berbentuk $S_n=S_0+\sum_{k=1}^nX_k$ dengan increment iid."},
      {title:"Hitting Time",statement:"Untuk himpunan $A$, hitting time adalah $\tau_A=\inf\{n\ge0:S_n\in A\}$."}
    ],
    results:[
      {kind:"proposition",title:"Random Walk Simetris yang Dihentikan Tetap Martingale",statement:"Jika $S_n$ random walk simetris dan $\tau$ stopping time, maka $S_{n\wedge\tau}$ martingale.",proof:[
        "Random walk simetris mempunyai increment independen bermean nol, sehingga $S_n$ martingale.",
        "Proposisi stopped martingale berlaku untuk setiap stopping time.",
        "Diperoleh $S_{n\wedge\tau}$ martingale."
      ]}
    ],
    examples:[
      {title:"Gambler's Ruin: Bentuk Persamaan",problem:"Untuk random walk simetris di antara 0 dan $N$, jika $h(i)$ adalah peluang menyentuh $N$ sebelum 0 dari posisi $i$, tuliskan relasi satu langkah.",solution:["Dari posisi interior, langkah berikutnya ke $i-1$ atau $i+1$ dengan peluang $1/2$.","Gunakan conditioning pada langkah pertama."],conclusion:"$h(i)=\frac12h(i-1)+\frac12h(i+1)$ dengan $h(0)=0,h(N)=1$."}
    ],
    connections:"Masalah hitting random walk juga dapat dipandang sebagai masalah harmonik diskret dan berkaitan dengan potensial serta proses Markov."
  },

  "tup-markov-discrete": {
    title:"Rantai Markov Diskret",
    focus:"Rantai Markov mempunyai masa depan yang, diberikan state sekarang, tidak bergantung pada masa lalu yang lebih jauh.",
    definitions:[
      {title:"Sifat Markov",statement:"Proses $(X_n)$ pada state space $S$ adalah Markov jika $P(X_{n+1}=j\mid X_n=i,X_{n-1},\ldots)=P(X_{n+1}=j\mid X_n=i)$ ketika conditional probability terdefinisi."},
      {title:"Matriks Transisi",statement:"Pada state space diskret homogen waktu, $p_{ij}=P(X_{n+1}=j\mid X_n=i)$ dan $P=(p_{ij})$ disebut matriks transisi."}
    ],
    results:[
      {kind:"theorem",title:"Persamaan Chapman–Kolmogorov",statement:"Probabilitas transisi memenuhi $P^{(m+n)}(i,j)=\sum_kP^{(m)}(i,k)P^{(n)}(k,j)$.",proof:[
        "Kondisikan kejadian $X_{m+n}=j$ pada state antara $X_m=k$.",
        "Hukum probabilitas total memberi jumlah atas semua $k$.",
        "Sifat Markov dan homogenitas waktu mengidentifikasi dua faktor sebagai probabilitas transisi $m$-langkah dan $n$-langkah."
      ]}
    ],
    examples:[
      {title:"Dua State",problem:"Untuk $P=\begin{pmatrix}0.8&0.2\\0.3&0.7\end{pmatrix}$ dan distribusi awal $(1,0)$, tentukan distribusi setelah satu langkah.",solution:["Kalikan distribusi baris awal dengan $P$."],conclusion:"Distribusinya $(0.8,0.2)$."}
    ],
    connections:"Matriks transisi menghubungkan probabilitas dengan aljabar linear. State classification dan stationary distribution menjadi tahap berikutnya."
  },

  "tup-harris": {
    title:"Rantai Harris",
    focus:"Teori Harris memperluas recurrence untuk rantai Markov pada state space umum dengan menggunakan ukuran referensi dan hitting sets.",
    definitions:[
      {title:"$\varphi$-Irreducible",statement:"Rantai Markov disebut $\varphi$-irreducible jika untuk setiap himpunan $A$ dengan $\varphi(A)>0$, peluang mencapai $A$ dari setiap state positif."},
      {title:"Harris Recurrent",statement:"Secara umum, rantai $\varphi$-irreducible disebut Harris recurrent jika setiap himpunan dengan ukuran $\varphi$ positif dikunjungi hampir pasti dari setiap state."}
    ],
    results:[
      {kind:"proposition",title:"Irreducible Finite Recurrent Chains Memiliki Satu Kelas Komunikasi",statement:"Pada state space hingga, jika setiap state saling dapat dicapai, seluruh state membentuk satu communicating class.",proof:[
        "Irreducibility menyatakan untuk setiap $i,j$ ada $n$ dengan $P^n(i,j)>0$.",
        "Syarat juga berlaku dengan menukar $i$ dan $j$.",
        "Dengan definisi komunikasi, setiap pasangan state berkomunikasi dan membentuk satu kelas."
      ]}
    ],
    examples:[
      {title:"Rantai Hingga Irreducible",problem:"Apakah rantai dua state dengan semua entri matriks transisi positif irreducible?",solution:["Dari setiap state, state lain dapat dicapai dalam satu langkah dengan peluang positif."],conclusion:"Ya, rantai irreducible."}
    ],
    connections:"Harris recurrence adalah bahasa penting untuk ergodicity Markov chain pada ruang kontinu dan teori konvergensi MCMC."
  },

  "tup-feller": {
    title:"Proses Feller",
    focus:"Sifat Feller menyatakan semigroup transisi mempertahankan kontinuitas fungsi, menghubungkan probabilitas Markov dengan analisis operator.",
    definitions:[
      {title:"Operator Transisi",statement:"Untuk kernel Markov $P_t$, operator transisi didefinisikan $(P_tf)(x)=E_x[f(X_t)]$."},
      {title:"Sifat Feller",statement:"Secara umum, semigroup disebut Feller jika memetakan $C_0$ ke $C_0$ dan kuat kontinu pada waktu nol."}
    ],
    results:[
      {kind:"proposition",title:"Operator Markov adalah Kontraksi Supremum",statement:"Untuk fungsi terbatas $f$, $\|P_tf\|_\infty\le\|f\|_\infty$.",proof:[
        "Untuk setiap $x$, $|P_tf(x)|=|E_x[f(X_t)]|\le E_x|f(X_t)|$.",
        "Nilai $|f(X_t)|$ paling besar $\|f\|_\infty$.",
        "Ambil supremum terhadap $x$."
      ]}
    ],
    examples:[
      {title:"Fungsi Konstan",problem:"Apa hasil $P_t1$ untuk semigroup Markov konservatif?",solution:["Ekspektasi fungsi konstan 1 tetap 1."],conclusion:"$P_t1=1$."}
    ],
    connections:"Generator semigroup Feller memberi penghubung ke PDE, resolvent, dan proses waktu kontinu."
  },

  "tup-mcmc": {
    title:"Markov Chain Monte Carlo",
    focus:"MCMC membangun rantai Markov yang memiliki distribusi target sebagai distribusi stasioner, lalu menggunakan sampel sepanjang rantai untuk aproksimasi ekspektasi.",
    definitions:[
      {title:"Distribusi Stasioner",statement:"Distribusi $\pi$ stasioner untuk kernel $P$ jika $\pi P=\pi$."},
      {title:"Detailed Balance",statement:"Kernel memenuhi detailed balance terhadap $\pi$ jika $\pi(dx)P(x,dy)=\pi(dy)P(y,dx)$."}
    ],
    results:[
      {kind:"proposition",title:"Detailed Balance Mengimplikasikan Stationarity",statement:"Jika kernel Markov memenuhi detailed balance terhadap $\pi$, maka $\pi$ stasioner.",proof:[
        "Integrasikan identitas detailed balance terhadap koordinat awal $x$.",
        "Ruas kiri menghasilkan $(\pi P)(dy)$.",
        "Ruas kanan menghasilkan $\pi(dy)\int P(y,dx)=\pi(dy)$ karena kernel mempunyai massa total satu."
      ]}
    ],
    examples:[
      {title:"Metropolis Acceptance",problem:"Jika proposal simetris dan target density $\pi$, tuliskan probabilitas penerimaan kandidat $y$ dari $x$.",solution:["Rasio proposal saling menghapus karena simetris.","Gunakan rasio target."],conclusion:"$\alpha(x,y)=\min\{1,\pi(y)/\pi(x)\}$."}
    ],
    connections:"Validitas MCMC memerlukan lebih dari stationarity: irreducibility, recurrence, dan ergodicity menentukan apakah empirical averages benar-benar mendekati target."
  },

  "tup-brownian": {
    title:"Brownian Motion",
    focus:"Brownian motion adalah proses Gaussian kontinu dengan increment independen dan stasioner, serta varians increment sama dengan panjang waktu.",
    definitions:[
      {title:"Brownian Motion Standar",statement:"Proses $(W_t)_{t\ge0}$ memenuhi $W_0=0$, increment independen, $W_t-W_s\sim N(0,t-s)$ untuk $t>s$, dan mempunyai lintasan kontinu hampir pasti."},
      {title:"Increment Stasioner",statement:"Distribusi $W_{t+h}-W_t$ hanya bergantung pada $h$, bukan pada $t$."}
    ],
    results:[
      {kind:"proposition",title:"Covariance Brownian Motion",statement:"Untuk Brownian motion standar, $E[W_sW_t]=\min(s,t)$.",proof:[
        "Ambil $s\le t$ dan tulis $W_t=W_s+(W_t-W_s)$.",
        "Increment $W_t-W_s$ independen dari $W_s$ dan bermean nol.",
        "Diperoleh $E[W_sW_t]=E[W_s^2]+E[W_s]E[W_t-W_s]=s$."
      ]}
    ],
    examples:[
      {title:"Distribusi Increment",problem:"Tentukan distribusi $W_5-W_2$.",solution:["Panjang interval adalah 3.","Gunakan definisi increment Brownian."],conclusion:"$W_5-W_2\sim N(0,3)$."}
    ],
    connections:"Brownian motion adalah limit fundamental random walk ternormalisasi dan menjadi penggerak utama kalkulus Itô."
  },

  "tup-brownian-properties": {
    title:"Sifat-Sifat Brownian Motion",
    focus:"Brownian motion memiliki scaling, simetri waktu tertentu, sifat Markov, dan lintasan yang sangat tidak halus.",
    definitions:[
      {title:"Scaling Brownian",statement:"Untuk $c>0$, proses $\widetilde W_t=c^{-1/2}W_{ct}$ memiliki finite-dimensional distributions yang sama dengan Brownian motion standar."},
      {title:"Quadratic Variation pada Partisi",statement:"Untuk partisi $0=t_0<\cdots<t_n=T$, jumlah quadratic increments adalah $\sum_i(W_{t_i}-W_{t_{i-1}})^2$."}
    ],
    results:[
      {kind:"proposition",title:"Scaling Property",statement:"Proses $\widetilde W_t=c^{-1/2}W_{ct}$ adalah Brownian motion standar.",proof:[
        "$\widetilde W_0=0$ dan kontinuitas diwarisi dari $W$.",
        "Increment tetap independen karena diambil dari interval Brownian yang saling lepas.",
        "$\widetilde W_t-\widetilde W_s=c^{-1/2}(W_{ct}-W_{cs})\sim N(0,c^{-1}c(t-s))=N(0,t-s)$."
      ]}
    ],
    examples:[
      {title:"Rescaling Waktu",problem:"Apa distribusi $2^{-1/2}W_{2t}$?",solution:["Gunakan scaling property dengan $c=2$."],conclusion:"Sebagai proses, ia memiliki hukum Brownian standar."}
    ],
    connections:"Scaling menjelaskan self-similarity Brownian motion dan penting pada hitting times, invariance principle, serta PDE parabolik."
  },

  "tup-ctmc": {
    title:"Rantai Markov Waktu Kontinu",
    focus:"CTMC bergerak pada state space diskret dengan waktu tunggu kontinu, biasanya eksponensial, dan dinamikanya diringkas oleh generator.",
    definitions:[
      {title:"Generator $Q$",statement:"Untuk CTMC homogen diskret, generator mempunyai entri $q_{ij}\ge0$ untuk $i\ne j$ dan $q_{ii}=-\sum_{j\ne i}q_{ij}$."},
      {title:"Semigroup Transisi",statement:"Matriks $P_t$ dengan entri $P_t(i,j)=P(X_t=j\mid X_0=i)$ memenuhi $P_{s+t}=P_sP_t$."}
    ],
    results:[
      {kind:"proposition",title:"Jumlah Baris Generator Nol",statement:"Setiap baris generator konservatif menjumlah nol.",proof:[
        "Definisi diagonal menetapkan $q_{ii}=-\sum_{j\ne i}q_{ij}$.",
        "Jumlah seluruh baris menjadi $q_{ii}+\sum_{j\ne i}q_{ij}$.",
        "Substitusi definisi diagonal memberi nol."
      ]}
    ],
    examples:[
      {title:"Proses Birth–Death Dua Arah",problem:"Untuk state $i$ dengan birth rate $\lambda_i$ dan death rate $\mu_i$, tuliskan entri generator utama.",solution:["Transisi ke $i+1$ berlaju $\lambda_i$.","Transisi ke $i-1$ berlaju $\mu_i$.","Diagonal adalah negatif jumlah laju keluar."],conclusion:"$q_{i,i+1}=\lambda_i$, $q_{i,i-1}=\mu_i$, $q_{ii}=-(\lambda_i+\mu_i)$."}
    ],
    connections:"Persamaan Kolmogorov maju dan mundur menghubungkan generator dengan semigroup transisi."
  },

  "tup-bootstrap": {
    title:"Fondasi Bootstrap",
    focus:"Bootstrap mengganti distribusi populasi yang tidak diketahui dengan distribusi empiris, lalu melakukan resampling untuk mendekati distribusi sampling statistik.",
    definitions:[
      {title:"Distribusi Empiris",statement:"Untuk data $X_1,\ldots,X_n$, distribusi empiris $F_n$ memberi massa $1/n$ pada setiap observasi."},
      {title:"Sampel Bootstrap",statement:"Sampel bootstrap $X_1^*,\ldots,X_n^*$ diambil iid dari $F_n$, yaitu sampling dengan replacement dari data asli."}
    ],
    results:[
      {kind:"proposition",title:"Mean Bootstrap Bersyarat Sama dengan Mean Sampel",statement:"Diberikan data, $E^*[\bar X_n^*]=\bar X_n$.",proof:[
        "Setiap observasi bootstrap mempunyai conditional expectation terhadap data sebesar rata-rata distribusi empiris.",
        "Mean distribusi empiris adalah $n^{-1}\sum_iX_i=\bar X_n$.",
        "Linearitas conditional expectation atas rata-rata bootstrap memberi hasil yang sama."
      ]}
    ],
    examples:[
      {title:"Resampling Tiga Data",problem:"Data adalah $\{1,2,5\}$. Berapa peluang satu draw bootstrap bernilai 5?",solution:["Distribusi empiris memberi massa sama $1/3$ pada tiap observasi."],conclusion:"Peluangnya $1/3$."}
    ],
    connections:"Bootstrap berusaha mendekati hukum statistik setelah centering/scaling. Validitasnya bergantung pada regularitas statistik dan distribusi data."
  },

  "tup-bootstrap-validity": {
    title:"Validitas dan Akurasi Bootstrap",
    focus:"Validitas bootstrap berarti distribusi bootstrap yang dikondisikan pada data mendekati distribusi sampling target dengan metrik yang sesuai.",
    definitions:[
      {title:"Bootstrap Consistency",statement:"Secara umum bootstrap konsisten jika jarak antara conditional bootstrap law statistik ternormalisasi dan sampling law target menuju nol dalam probabilitas."},
      {title:"Second-Order Accuracy",statement:"Metode disebut second-order accurate jika galat aproksimasinya berorde lebih kecil daripada aproksimasi first-order yang dibandingkan."}
    ],
    results:[
      {kind:"proposition",title:"Statistik Linear Mean Memiliki Bootstrap Centering Alami",statement:"Untuk mean sampel, conditional mean dari $\sqrt n(\bar X_n^*-\bar X_n)$ adalah nol.",proof:[
        "Dari hasil sebelumnya, $E^*[\bar X_n^*]=\bar X_n$.",
        "Kurangkan $\bar X_n$ dan kalikan dengan $\sqrt n$.",
        "Linearitas conditional expectation memberi nol."
      ]}
    ],
    examples:[
      {title:"Heavy Tail Warning",problem:"Mengapa bootstrap mean dapat bermasalah jika data berasal dari distribusi dengan varians tak hingga?",solution:["Skala CLT standar $\sqrt n$ mungkin tidak lagi sesuai.","Distribusi sampling mean dapat memiliki limit nonnormal atau perilaku ekor ekstrem."],conclusion:"Regularitas momen perlu diperiksa sebelum memakai bootstrap standar."}
    ],
    connections:"Tidak semua statistik dapat di-bootstrap secara naif. Quantile ekstrem, boundary parameters, dan heavy tails dapat memerlukan modifikasi."
  },

  "tup-dependent-bootstrap": {
    title:"Bootstrap untuk Data Dependenden",
    focus:"Pada data dependenden, resampling observasi satu per satu merusak struktur serial. Block bootstrap mempertahankan potongan dependensi lokal.",
    definitions:[
      {title:"Block Bootstrap",statement:"Block bootstrap membentuk sampel ulang dari blok observasi berurutan, bukan dari observasi tunggal."},
      {title:"Moving Block Bootstrap",statement:"Untuk panjang blok $\ell$, semua blok tumpang tindih $(X_i,\ldots,X_{i+\ell-1})$ digunakan sebagai kandidat resampling."}
    ],
    results:[
      {kind:"proposition",title:"Resampling Tunggal Menghilangkan Urutan Serial",statement:"Bootstrap iid dari empirical marginal tidak mempertahankan autocovariance urutan asli secara struktural.",proof:[
        "Conditional on data, draw bootstrap iid dari distribusi empiris.",
        "Dua posisi bootstrap berbeda conditional-independent.",
        "Akibatnya struktur dependensi berdasarkan jarak waktu pada data asli tidak dipertahankan."
      ]}
    ],
    examples:[
      {title:"Blok Panjang Dua",problem:"Untuk data waktu $(x_1,x_2,x_3,x_4)$ dan panjang blok 2, tuliskan moving blocks.",solution:["Ambil semua pasangan berurutan yang lengkap."],conclusion:"Bloknya $(x_1,x_2),(x_2,x_3),(x_3,x_4)$."}
    ],
    connections:"Pemilihan panjang blok menyeimbangkan pelestarian dependensi dan banyaknya unit resampling."
  },

  "tup-mixing": {
    title:"Proses Mixing",
    focus:"Mixing mengukur peluruhan dependensi antara masa lalu dan masa depan ketika jarak waktu membesar.",
    definitions:[
      {title:"Koefisien Alpha-Mixing",statement:"Untuk sigma-algebra $\mathcal A,\mathcal B$, $\alpha(\mathcal A,\mathcal B)=\sup_{A\in\mathcal A,B\in\mathcal B}|P(A\cap B)-P(A)P(B)|$. Untuk proses stasioner, $\alpha(n)$ mengukur dependensi antara blok yang terpisah $n$ langkah."},
      {title:"Strong Mixing",statement:"Proses disebut strong atau alpha-mixing jika $\alpha(n)\to0$."}
    ],
    results:[
      {kind:"proposition",title:"Independensi Memberi Koefisien Mixing Nol",statement:"Jika dua sigma-algebra independen, maka koefisien alpha-mixing di antara keduanya sama dengan nol.",proof:[
        "Independensi memberi $P(A\cap B)=P(A)P(B)$ untuk setiap pasangan kejadian.",
        "Setiap nilai absolut dalam supremum sama dengan nol.",
        "Supremumnya juga nol."
      ]}
    ],
    examples:[
      {title:"Urutan IID",problem:"Berapa $\alpha(n)$ untuk urutan iid ketika masa lalu dan masa depan dipisahkan?",solution:["Sigma-algebra dari blok disjoint variabel iid independen."],conclusion:"$\alpha(n)=0$ untuk setiap pemisahan positif."}
    ],
    connections:"Mixing memungkinkan banyak limit theorem independen diperluas ke data dependenden dengan syarat peluruhan yang cukup cepat."
  },

  "tup-mixing-clt": {
    title:"CLT untuk Proses Mixing",
    focus:"CLT mixing memberi aproksimasi normal bagi jumlah proses stasioner dependenden ketika dependensi melemah cukup cepat dan momen memadai.",
    definitions:[
      {title:"Long-Run Variance",statement:"Untuk proses stasioner centered, varians jangka panjang formal adalah $\sigma^2=\gamma(0)+2\sum_{k\ge1}\gamma(k)$ jika deret covariance konvergen absolut."},
      {title:"Normalisasi Jumlah Dependenden",statement:"Jumlah parsial biasanya dinormalisasi dengan $\sqrt n$ dan varians jangka panjang, bukan hanya varians marginal."}
    ],
    results:[
      {kind:"proposition",title:"Kasus Independen Mereduksi Long-Run Variance",statement:"Jika $X_t$ iid dengan varians $\tau^2$, maka long-run variance sama dengan $\tau^2$.",proof:[
        "Independensi memberi $\gamma(k)=0$ untuk setiap $k\ne0$.",
        "Rumus long-run variance menyisakan hanya $\gamma(0)$.",
        "$\gamma(0)=\operatorname{Var}(X_0)=\tau^2$."
      ]}
    ],
    examples:[
      {title:"Mengapa Autocovariance Masuk",problem:"Jika proses mempunyai covariance positif pada lag awal, bagaimana kecenderungan varians jumlah dibanding kasus iid dengan varians marginal sama?",solution:["Varians jumlah memuat dua kali jumlah covariance antarwaktu.","Covariance positif menambah varians total."],conclusion:"Fluktuasi jumlah dapat lebih besar daripada model iid."}
    ],
    connections:"CLT mixing menjadi dasar inferensi time series dan menjelaskan penggunaan long-run variance atau HAC estimators."
  },

  "tup-branching": {
    title:"Branching Process Bienaymé–Galton–Watson",
    focus:"Proses Galton–Watson memodelkan populasi generasi diskret ketika setiap individu menghasilkan jumlah keturunan iid.",
    definitions:[
      {title:"Galton–Watson Process",statement:"Dengan offspring iid $\xi_{n,i}$, proses didefinisikan $Z_{n+1}=\sum_{i=1}^{Z_n}\xi_{n,i}$ dengan $Z_0$ diberikan."},
      {title:"Generating Function Offspring",statement:"Jika $p_k=P(\xi=k)$, PGF offspring adalah $f(s)=\sum_{k\ge0}p_ks^k$."}
    ],
    results:[
      {kind:"proposition",title:"Ekspektasi Populasi",statement:"Jika $m=E[\xi]<\infty$ dan $Z_0=1$, maka $E[Z_n]=m^n$.",proof:[
        "Conditioning pada $Z_n$ memberi $E[Z_{n+1}\mid Z_n]=mZ_n$.",
        "Ambil ekspektasi untuk memperoleh $E[Z_{n+1}]=mE[Z_n]$.",
        "Iterasi dari $E[Z_0]=1$ memberi $m^n$."
      ]}
    ],
    examples:[
      {title:"Subcritical Mean",problem:"Jika mean offspring $m=0.8$ dan $Z_0=1$, hitung $E[Z_5]$.",solution:["Gunakan $E[Z_n]=m^n$."],conclusion:"$E[Z_5]=0.8^5$."}
    ],
    connections:"Peluang kepunahan adalah fixed point terkecil PGF offspring pada $[0,1]$. Kritikalitas ditentukan oleh mean offspring."
  },

  "tup-multitype-branching": {
    title:"Branching Process Multitype",
    focus:"Pada branching multitype, individu memiliki tipe dan distribusi keturunan tergantung tipe induk. Pertumbuhan mean dikendalikan oleh matriks offspring.",
    definitions:[
      {title:"Mean Offspring Matrix",statement:"Elemen $M_{ij}$ adalah ekspektasi banyak keturunan tipe $j$ yang dihasilkan satu individu tipe $i$."},
      {title:"Vektor Populasi",statement:"$Z_n=(Z_n^{(1)},\ldots,Z_n^{(d)})$ mencatat banyak individu tiap tipe pada generasi $n$."}
    ],
    results:[
      {kind:"proposition",title:"Evolusi Mean Multitype",statement:"Dengan konvensi vektor baris, $E[Z_{n+1}]=E[Z_n]M$, sehingga $E[Z_n]=E[Z_0]M^n$.",proof:[
        "Diberikan populasi generasi $n$, kontribusi expected offspring dari setiap individu tipe $i$ adalah baris ke-$i$ matriks $M$.",
        "Linearitas conditional expectation memberi $E[Z_{n+1}\mid Z_n]=Z_nM$.",
        "Ambil ekspektasi dan iterasikan."
      ]}
    ],
    examples:[
      {title:"Dua Tipe",problem:"Jika $E[Z_0]=(1,0)$ dan $M=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, tentukan $E[Z_1]$.",solution:["Kalikan vektor awal dengan matriks mean."],conclusion:"$E[Z_1]=(1,1)$."}
    ],
    connections:"Perron–Frobenius memberi eigenvalue dominan yang mengontrol laju pertumbuhan rata-rata untuk matriks nonnegatif irreducible."
  },

  "tup-continuous-branching": {
    title:"Branching Process Waktu Kontinu",
    focus:"Branching waktu kontinu menggabungkan mekanisme reproduksi dengan waktu tunggu kontinu dan tetap mempertahankan branching property.",
    definitions:[
      {title:"Branching Property",statement:"Diberikan populasi sekarang, keturunan dari individu berbeda berkembang independen dan menurut hukum yang sama sesuai tipe atau model."},
      {title:"Continuous-Time Branching",statement:"Proses populasi $(Z_t)_{t\ge0}$ berubah pada waktu acak kontinu akibat kelahiran, kematian, atau reproduksi."}
    ],
    results:[
      {kind:"proposition",title:"Ekspektasi Yule Process",statement:"Pada pure birth process dengan setiap individu melahirkan satu individu baru pada rate $\lambda$, $E[Z_t]=Z_0e^{\lambda t}$.",proof:[
        "Dalam interval kecil $dt$, expected pertambahan conditional pada $Z_t$ adalah sekitar $\lambda Z_tdt$.",
        "Mengambil ekspektasi menghasilkan persamaan diferensial $m'(t)=\lambda m(t)$ untuk $m(t)=E[Z_t]$.",
        "Dengan kondisi awal $m(0)=Z_0$, solusi adalah $Z_0e^{\lambda t}$."
      ]}
    ],
    examples:[
      {title:"Mean Yule Process",problem:"Jika $Z_0=2$ dan $\lambda=0.5$, tentukan expected population pada $t=2$.",solution:["Gunakan $2e^{0.5(2)}$."],conclusion:"Ekspektasinya $2e$."}
    ],
    connections:"Model branching kontinu berkaitan dengan birth–death process, CTMC, generating functions, dan population dynamics."
  }
};

export const measureProbabilityContentD = buildMeasureProbabilityContent(specs);
