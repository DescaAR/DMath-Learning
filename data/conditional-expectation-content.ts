import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Conditional expectation with exact finite examples and measure-theoretic proofs.
 * References: Williams, Probability with Martingales (1991), Chapters 9–10;
 * Kallenberg, Foundations of Modern Probability, 2nd ed. (2002), conditional expectation.
 */
export const conditionalExpectationContent:BookLessonContent={
  intro:[
    "Misalkan hasil percobaan sudah terjadi, tetapi pengamat hanya mengetahui apakah hasilnya berada dalam suatu kelompok kejadian. Rata-rata yang tepat bukan lagi satu angka untuk seluruh ruang sampel: nilainya harus konstan pada kejadian yang belum dapat dibedakan dan boleh berbeda antar-kelompok yang dapat diamati. Ekspektasi bersyarat memformalkan gagasan tersebut tanpa harus mengandaikan adanya peluang bersyarat pada setiap titik.",
    "Pada ruang berhingga, pengelompokan informasi dinyatakan oleh partisi dan ekspektasi bersyarat dihitung dengan rata-rata berbobot pada setiap blok. Pada ruang probabilitas umum, informasi dinyatakan oleh sub-sigma-aljabar; definisinya menggunakan kesamaan integral pada semua kejadian yang dapat diamati. Dua sudut pandang ini akan dibuktikan saling sesuai.",
    "Hipotesis integrabilitas $E|X|<\\infty$ selalu dicantumkan. Identitas ekspektasi berulang, sifat mengeluarkan faktor terukur, serta dekomposisi varians diturunkan dari definisi, bukan dianggap sebagai aturan manipulasi simbol. Referensi matematis: David Williams, Probability with Martingales (1991), dan Olav Kallenberg, Foundations of Modern Probability, edisi kedua (2002)."
  ],
  formal:[
    {
      kind:"definition",title:"Informasi dan Partisi Terukur",
      statement:"Pada ruang probabilitas $(\\Omega,\\mathcal F,P)$, sub-sigma-aljabar $\\mathcal G\\subseteq\\mathcal F$ merepresentasikan informasi yang dapat diamati. Untuk partisi terukur hingga $\\Omega=A_1\\mathbin{\\dot\\cup}\\cdots\\mathbin{\\dot\\cup}A_m$, sigma-aljabar $\\sigma(A_1,\\ldots,A_m)$ terdiri atas seluruh gabungan blok $A_i$. Peubah acak yang terukur terhadap sigma-aljabar ini bernilai konstan pada setiap blok."
    },
    {
      kind:"definition",title:"Ekspektasi Bersyarat dari Peubah Integrabel",
      statement:"Misalkan $X$ peubah acak real dengan $E|X|<\\infty$ dan $\\mathcal G\\subseteq\\mathcal F$. Ekspektasi bersyarat $E[X\\mid\\mathcal G]$ adalah kelas peubah acak integrabel $Y$ yang (i) terukur terhadap $\\mathcal G$ dan (ii) memenuhi $E[Y\\mathbf1_A]=E[X\\mathbf1_A]$ untuk setiap $A\\in\\mathcal G$. Dua versi yang sama hampir pasti dianggap sebagai ekspektasi bersyarat yang sama."
    },
    {
      kind:"definition",title:"Independensi dari Informasi",
      statement:"Peubah acak $X$ disebut independen dari sigma-aljabar $\\mathcal G$ apabila $P(\\{X\\in B\\}\\cap A)=P(X\\in B)P(A)$ untuk setiap himpunan Borel $B\\subseteq\\mathbb R$ dan setiap $A\\in\\mathcal G$. Independensi ini lebih kuat daripada sekadar $E[X]=0$ atau tidak berkorelasi dengan satu peubah acak."
    },
    {
      kind:"definition",title:"Varians Bersyarat",
      statement:"Untuk $X\\in L^2(P)$ dan sub-sigma-aljabar $\\mathcal G$, definisikan $\\operatorname{Var}(X\\mid\\mathcal G)=E[(X-E[X\\mid\\mathcal G])^2\\mid\\mathcal G]$. Karena $X\\in L^2$, peubah acak $E[X\\mid\\mathcal G]$ juga berada di $L^2$, sehingga kuadrat pada definisi integrabel."
    },
    {
      kind:"theorem",title:"Eksistensi dan Ketunggalan Ekspektasi Bersyarat",
      statement:"Pada ruang probabilitas $(\\Omega,\\mathcal F,P)$, untuk setiap $X\\in L^1(P)$ dan setiap sub-sigma-aljabar $\\mathcal G\\subseteq\\mathcal F$, terdapat peubah acak integrabel $Y$ yang memenuhi kedua syarat definisi ekspektasi bersyarat. Jika $Y$ dan $Z$ keduanya memenuhi syarat tersebut, maka $P(Y=Z)=1$.",
      proof:[
        "Diketahui $X\\in L^1(P)$. Tulis $X=X^+-X^-$ dengan $X^+=\\max(X,0)$ dan $X^-=\\max(-X,0)$; kedua bagian tidak negatif dan mempunyai ekspektasi hingga. Untuk setiap $A\\in\\mathcal G$, definisikan ukuran hingga $\\nu_\\pm(A)=E[X^\\pm\\mathbf1_A]$ pada $(\\Omega,\\mathcal G)$.",
        "Jika $P(A)=0$, maka $\\nu_\\pm(A)=0$; dengan demikian $\\nu_\\pm\\ll P|_{\\mathcal G}$. Teorema Radon–Nikodym untuk dua ukuran hingga memberikan fungsi $Y^\\pm\\geq0$ yang terukur terhadap $\\mathcal G$ dengan $\\nu_\\pm(A)=E[Y^\\pm\\mathbf1_A]$ untuk semua $A\\in\\mathcal G$.",
        "Dengan memilih $A=\\Omega$, diperoleh $E[Y^\\pm]=E[X^\\pm]<\\infty$. Jadi $Y=Y^+-Y^-$ integrabel, terukur terhadap $\\mathcal G$, dan untuk setiap $A\\in\\mathcal G$ berlaku $E[Y\\mathbf1_A]=\\nu_+(A)-\\nu_-(A)=E[X\\mathbf1_A]$. Eksistensi terbukti dengan menggunakan teorema Radon–Nikodym sebagai hasil dasar teori ukuran.",
        "Untuk ketunggalan, misalkan $Y$ dan $Z$ dua versi. Ambil $A=\\{Y>Z\\}\\in\\mathcal G$. Selisih identitas integral memberi $E[(Y-Z)\\mathbf1_A]=0$. Karena integrand tidak negatif, nilainya nol hampir pasti. Akan tetapi pada $A$ berlaku $Y-Z>0$; maka $P(A)=0$.",
        "Dengan menukar $Y$ dan $Z$ diperoleh pula $P(Z>Y)=0$. Gabungan dua kejadian nol itu adalah $\\{Y\\ne Z\\}$, sehingga $P(Y=Z)=1$. Eksistensi dan ketunggalan hingga hampir pasti terbukti."
      ],
      citation:"Williams (1991), ekspektasi bersyarat; Kallenberg (2002), teorema Radon–Nikodym."
    },
    {
      kind:"proposition",title:"Rumus Ekspektasi Bersyarat pada Partisi Hingga",
      statement:"Misalkan $\\mathcal G=\\sigma(A_1,\\ldots,A_m)$ untuk partisi terukur hingga $\\Omega=\\dot\\bigcup_{i=1}^m A_i$ dan $X\\in L^1(P)$. Maka satu versi ekspektasi bersyarat adalah $Y=\\sum_{i:P(A_i)>0}\\frac{E[X\\mathbf1_{A_i}]}{P(A_i)}\\mathbf1_{A_i}$, dengan nilai sebarang, misalnya nol, pada blok yang berpeluang nol.",
      proof:[
        "Untuk setiap blok dengan $P(A_i)>0$, tetapkan $c_i=E[X\\mathbf1_{A_i}]/P(A_i)$; untuk blok berpeluang nol tetapkan $c_i=0$. Fungsi $Y=\\sum_i c_i\\mathbf1_{A_i}$ terukur terhadap $\\mathcal G$ karena merupakan kombinasi linear hingga fungsi indikator blok.",
        "Karena partisi hingga dan $E|X|<\\infty$, berlaku $E|Y|=\\sum_i|c_i|P(A_i)\\leq\\sum_i E[|X|\\mathbf1_{A_i}]=E|X|<\\infty$. Jadi syarat integrabilitas terpenuhi, termasuk ketika beberapa blok mempunyai probabilitas nol.",
        "Ambil sebarang $A\\in\\mathcal G$. Berdasarkan bentuk sigma-aljabar yang dihasilkan partisi hingga, terdapat indeks $I\\subseteq\\{1,\\ldots,m\\}$ sehingga $A=\\bigcup_{i\\in I}A_i$. Karena blok saling lepas, $E[Y\\mathbf1_A]=\\sum_{i\\in I}c_iP(A_i)=\\sum_{i\\in I}E[X\\mathbf1_{A_i}]=E[X\\mathbf1_A]$.",
        "Kedua syarat definisi telah dibuktikan; teorema ketunggalan memastikan bahwa rumus tersebut menentukan $E[X\\mid\\mathcal G]$ hingga hampir pasti. Nilai pada blok berpeluang nol tidak mengubah kelas peubah acaknya."
      ]
    },
    {
      kind:"theorem",title:"Sifat Menara atau Ekspektasi Berulang",
      statement:"Jika $X\\in L^1(P)$ dan $\\mathcal H\\subseteq\\mathcal G\\subseteq\\mathcal F$, maka $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$ hampir pasti. Secara khusus, $E[E[X\\mid\\mathcal G]]=E[X]$.",
      proof:[
        "Diketahui $X\\in L^1(P)$, sehingga $Y=E[X\\mid\\mathcal G]$ juga integrabel. Definisikan $Z=E[Y\\mid\\mathcal H]$. Dari definisi, $Z$ integrabel dan terukur terhadap $\\mathcal H$.",
        "Untuk sebarang $A\\in\\mathcal H$, inklusi $\\mathcal H\\subseteq\\mathcal G$ memastikan $A\\in\\mathcal G$. Identitas penentu ekspektasi bersyarat diterapkan dua kali: $E[Z\\mathbf1_A]=E[Y\\mathbf1_A]=E[X\\mathbf1_A]$.",
        "Jadi $Z$ memenuhi kedua syarat definisi $E[X\\mid\\mathcal H]$. Ketunggalan hingga hampir pasti menghasilkan $Z=E[X\\mid\\mathcal H]$. Untuk pernyataan khusus, ambil $A=\\Omega$ dalam identitas penentu $E[X\\mid\\mathcal G]$, sehingga kedua ekspektasi biasa sama."
      ]
    },
    {
      kind:"proposition",title:"Mengeluarkan Faktor yang Sudah Diketahui",
      statement:"Misalkan $X\\in L^1(P)$, $\\mathcal G\\subseteq\\mathcal F$, dan $Z$ peubah acak terbatas yang terukur terhadap $\\mathcal G$. Maka $ZX\\in L^1(P)$ dan $E[ZX\\mid\\mathcal G]=Z E[X\\mid\\mathcal G]$ hampir pasti.",
      proof:[
        "Karena $Z$ terbatas, ada $K<\\infty$ sehingga $|Z|\\leq K$ hampir pasti. Akibatnya $E|ZX|\\leq K E|X|<\\infty$. Tuliskan $Y=E[X\\mid\\mathcal G]$; produk $ZY$ terukur terhadap $\\mathcal G$ dan integrabel karena $E|ZY|\\leq K E|Y|$.",
        "Untuk $Z=\\sum_{j=1}^r z_j\\mathbf1_{B_j}$ sederhana dengan $B_j\\in\\mathcal G$, ambil sebarang $A\\in\\mathcal G$. Identitas penentu $Y$ pada $A\\cap B_j$ memberikan $E[ZY\\mathbf1_A]=\\sum_j z_j E[Y\\mathbf1_{A\\cap B_j}]=\\sum_j z_j E[X\\mathbf1_{A\\cap B_j}]=E[ZX\\mathbf1_A]$.",
        "Untuk $Z$ terbatas yang umum, pilih fungsi sederhana $Z_k$ yang terukur terhadap $\\mathcal G$, memenuhi $|Z_k|\\leq K$ dan $Z_k\\to Z$ hampir pasti. Teorema konvergensi terdominasi, masing-masing dengan dominator $K|X|$ dan $K|Y|$, memberikan $E[Z_kX\\mathbf1_A]\\to E[ZX\\mathbf1_A]$ dan $E[Z_kY\\mathbf1_A]\\to E[ZY\\mathbf1_A]$.",
        "Karena kesamaan integral berlaku untuk setiap $k$, kesamaan itu juga berlaku pada limit untuk semua $A\\in\\mathcal G$. Ketunggalan ekspektasi bersyarat memberi $E[ZX\\mid\\mathcal G]=ZY=Z E[X\\mid\\mathcal G]$ hampir pasti."
      ]
    },
    {
      kind:"proposition",title:"Independensi Menghasilkan Ekspektasi Konstan",
      statement:"Jika $X\\in L^1(P)$ independen dari $\\mathcal G$, maka $E[X\\mid\\mathcal G]=E[X]$ hampir pasti.",
      proof:[
        "Diketahui independensi $X$ dari $\\mathcal G$. Untuk $X=\\mathbf1_{\\{X\\in B\\}}$, independensi memberi $E[X\\mathbf1_A]=P(X\\in B,A)=P(X\\in B)P(A)=E[X]P(A)$ untuk setiap $A\\in\\mathcal G$.",
        "Dengan linearitas, kesamaan tersebut berlaku untuk fungsi sederhana dari $X$. Untuk $X$ integrabel umum, aproksimasi bagian positif dan negatif oleh fungsi sederhana tak negatif dan gunakan konvergensi monoton, kemudian linearitas, untuk memperoleh $E[X\\mathbf1_A]=E[X]P(A)$.",
        "Peubah konstan $Y=E[X]$ terukur terhadap $\\mathcal G$, integrabel, dan memenuhi $E[Y\\mathbf1_A]=E[X\\mathbf1_A]$ untuk setiap $A\\in\\mathcal G$. Berdasarkan ketunggalan, $E[X\\mid\\mathcal G]=E[X]$ hampir pasti."
      ]
    },
    {
      kind:"theorem",title:"Dekomposisi Varians Total",
      statement:"Jika $X\\in L^2(P)$ dan $\\mathcal G\\subseteq\\mathcal F$, maka $\\operatorname{Var}(X)=E[\\operatorname{Var}(X\\mid\\mathcal G)]+\\operatorname{Var}(E[X\\mid\\mathcal G])$.",
      proof:[
        "Ambil $Y=E[X\\mid\\mathcal G]$. Ketaksamaan Jensen bersyarat untuk fungsi kuadrat memberi $Y^2\\leq E[X^2\\mid\\mathcal G]$ hampir pasti; setelah mengambil ekspektasi, $E[Y^2]\\leq E[X^2]<\\infty$. Jadi $Y\\in L^2$ dan semua suku yang dipakai berikutnya integrabel.",
        "Dari identitas $X-E[X]=(X-Y)+(Y-E[X])$, kuadratkan dan ambil ekspektasi. Suku silang ialah $2E[(X-Y)(Y-E[X])]$. Faktor $Y-E[X]$ mungkin tidak terbatas, sehingga gunakan pemotongan $Z_k=\\max(-k,\\min(k,Y-E[X]))$, yang terukur terhadap $\\mathcal G$.",
        "Sifat mengeluarkan faktor terbatas memberi $E[(X-Y)Z_k]=E[E[X-Y\\mid\\mathcal G]Z_k]=0$. Karena $Z_k\\to Y-E[X]$ dalam $L^2$ dan $X-Y\\in L^2$, ketaksamaan Cauchy–Schwarz menunjukkan $E[(X-Y)Z_k]\\to E[(X-Y)(Y-E[X])]$. Dengan demikian suku silang sama dengan nol.",
        "Akibatnya $\\operatorname{Var}(X)=E[(X-Y)^2]+E[(Y-E[X])^2]$. Sifat menara memberi $E[(X-Y)^2]=E[E[(X-Y)^2\\mid\\mathcal G]]=E[\\operatorname{Var}(X\\mid\\mathcal G)]$ dan $E[Y]=E[X]$. Suku kedua adalah $\\operatorname{Var}(Y)$, sehingga rumus terbukti."
      ]
    },
    {
      kind:"corollary",title:"Martingale dari Ekspektasi Bersyarat",
      statement:"Misalkan $X\\in L^1(P)$ dan $(\\mathcal F_n)_{n\\geq0}$ filtrasi, yakni $\\mathcal F_n\\subseteq\\mathcal F_{n+1}\\subseteq\\mathcal F$. Maka $M_n=E[X\\mid\\mathcal F_n]$ merupakan martingale integrabel terhadap filtrasi tersebut.",
      proof:[
        "Untuk setiap $n$, definisi ekspektasi bersyarat menjamin $M_n$ integrabel dan terukur terhadap $\\mathcal F_n$. Dengan demikian proses $(M_n)$ adapted dan memenuhi syarat integrabilitas martingale.",
        "Karena $\\mathcal F_n\\subseteq\\mathcal F_{n+1}$, sifat menara memberikan $E[M_{n+1}\\mid\\mathcal F_n]=E[E[X\\mid\\mathcal F_{n+1}]\\mid\\mathcal F_n]=E[X\\mid\\mathcal F_n]=M_n$ hampir pasti.",
        "Ketiga syarat martingale diskrit—adapted, integrabel, dan identitas ekspektasi bersyarat satu langkah—telah diperiksa untuk setiap $n$."
      ]
    }
  ],
  examples:[
    {
      title:"Informasi Dua Kelompok pada Empat Hasil",forDefinition:"Informasi dan Partisi Terukur",
      problem:"Pada $\\Omega=\\{1,2,3,4\\}$ yang seragam, pengamat hanya mengetahui apakah hasil berada pada $A=\\{1,2\\}$ atau $B=\\{3,4\\}$. Tentukan semua kejadian yang dapat dibedakan dan bentuk peubah acak yang terukur terhadap informasinya.",
      solution:[
        "Diketahui partisi $\\Omega=A\\mathbin{\\dot\\cup}B$ dengan dua blok tidak kosong. Sigma-aljabar yang dihasilkan partisi ini adalah $\\mathcal G=\\{\\varnothing,A,B,\\Omega\\}$: setiap gabungan blok termasuk, sedangkan kejadian $\\{1\\}$ tidak dapat diketahui dari informasi kelompok.",
        "Jika $Y$ terukur terhadap $\\mathcal G$ tetapi $Y(1)\\ne Y(2)$, terdapat himpunan Borel yang memisahkan dua nilai tersebut. Pra-citranya akan memisahkan titik 1 dan 2, padahal bukan anggota $\\mathcal G$. Ini kontradiksi. Alasan yang sama berlaku untuk titik 3 dan 4.",
        "Sebaliknya, setiap fungsi $Y=a\\mathbf1_A+b\\mathbf1_B$ terukur terhadap $\\mathcal G$, sebab pra-citra himpunan Borel selalu berupa gabungan blok. Jadi bentuk ini tepat menggambarkan semua peubah acak yang dapat dihitung dari informasi yang tersedia."
      ],
      conclusion:"Pengamatan hanya dapat membedakan dua blok, bukan empat hasil individual."
    },
    {
      title:"Menghitung Rata-Rata pada Tiap Blok",forDefinition:"Ekspektasi Bersyarat dari Peubah Integrabel",
      problem:"Pada ruang seragam empat titik, misalkan $X(1)=0$, $X(2)=2$, $X(3)=4$, $X(4)=6$ dan $\\mathcal G=\\sigma(\\{1,2\\},\\{3,4\\})$. Tentukan $E[X\\mid\\mathcal G]$ dan verifikasi definisinya.",
      solution:[
        "Diketahui $P(\\{i\\})=1/4$ dan setiap blok berpeluang $1/2$. Pada $A=\\{1,2\\}$, jumlah berbobot $E[X\\mathbf1_A]=(0+2)/4=1/2$; pembagian dengan $P(A)=1/2$ menghasilkan nilai bersyarat 1.",
        "Pada $B=\\{3,4\\}$, $E[X\\mathbf1_B]=(4+6)/4=5/2$; pembagian dengan $P(B)=1/2$ menghasilkan nilai bersyarat 5. Jadi kandidatnya $Y=\\mathbf1_A+5\\mathbf1_B$.",
        "Periksa integral: $E[Y\\mathbf1_A]=1(1/2)=1/2=E[X\\mathbf1_A]$ dan $E[Y\\mathbf1_B]=5(1/2)=5/2=E[X\\mathbf1_B]$. Karena setiap kejadian di $\\mathcal G$ merupakan gabungan kedua blok, identitas juga berlaku pada $\\varnothing$ dan $\\Omega$. Fungsi $Y$ terukur terhadap $\\mathcal G$ dan integrabel."
      ],
      conclusion:"Satu versi yang tepat ialah $E[X\\mid\\mathcal G]=1$ pada $A$ dan $5$ pada $B$."
    },
    {
      title:"Independensi Diuji melalui Kejadian",forDefinition:"Independensi dari Informasi",
      problem:"Pada ruang empat titik seragam, $X=\\mathbf1_{\\{1,3\\}}$ dan $\\mathcal G=\\sigma(\\{1,2\\},\\{3,4\\})$. Periksa apakah $X$ independen dari $\\mathcal G$.",
      solution:[
        "Karena $X$ hanya bernilai 0 atau 1, cukup periksa kejadian $C=\\{X=1\\}=\\{1,3\\}$ terhadap generator blok $A=\\{1,2\\}$ dan $B=\\{3,4\\}$. Diketahui $P(C)=1/2$ dan $P(A)=P(B)=1/2$.",
        "Irisan $C\\cap A=\\{1\\}$ mempunyai probabilitas $1/4=P(C)P(A)$, sedangkan $C\\cap B=\\{3\\}$ juga mempunyai probabilitas $1/4=P(C)P(B)$. Untuk kejadian $\\varnothing$ dan $\\Omega$ kesamaan produk berlaku otomatis.",
        "Kejadian $\\{X=0\\}=C^c$ juga memenuhi kesamaan dengan setiap anggota $\\mathcal G$ karena $P(C^c\\cap D)=P(D)-P(C\\cap D)=(1-P(C))P(D)$. Semua pra-citra Borel dari $X$ merupakan $\\varnothing,\\Omega,C$, atau $C^c$."
      ],
      conclusion:"Peubah $X$ independen dari $\\mathcal G$, meskipun $X$ sendiri tidak konstan."
    },
    {
      title:"Menghitung Varians yang Tersisa",forDefinition:"Varians Bersyarat",
      problem:"Gunakan $X=(0,2,4,6)$ pada ruang seragam empat titik dan informasi dua blok $A=\\{1,2\\}$, $B=\\{3,4\\}$. Tentukan $\\operatorname{Var}(X\\mid\\mathcal G)$.",
      solution:[
        "Dari perhitungan ekspektasi bersyarat diperoleh $Y=E[X\\mid\\mathcal G]=1$ pada $A$ dan $5$ pada $B$. Selisih $X-Y$ berturut-turut adalah $-1,1,-1,1$, sehingga kuadrat selisih bernilai 1 pada setiap hasil.",
        "Karena $(X-Y)^2$ konstan sama dengan 1, peubah ini sudah terukur terhadap $\\mathcal G$. Berdasarkan definisi, $E[(X-Y)^2\\mid\\mathcal G]=1$ pada kedua blok.",
        "Sebagai pemeriksaan, varians biasa $X$ adalah $[(0-3)^2+(2-3)^2+(4-3)^2+(6-3)^2]/4=5$. Varians dari mean bersyarat $(1,1,5,5)$ adalah $[(1-3)^2+(1-3)^2+(5-3)^2+(5-3)^2]/4=4$. Nilai $1+4=5$ sesuai dekomposisi varians."
      ],
      conclusion:"Varians bersyarat bernilai 1 pada setiap blok; informasi kelompok mengurangi ketidakpastian rata-rata sebesar 4."
    },
    {
      title:"Informasi Trivial dan Informasi Penuh",
      problem:"Misalkan $X$ bernilai 0 dan 2 masing-masing dengan peluang $1/2$. Hitung $E[X\\mid\\{\\varnothing,\\Omega\\}]$ dan $E[X\\mid\\mathcal F]$, lalu periksa identitas integral.",
      solution:[
        "Diketahui $E|X|=1<\\infty$. Pada sigma-aljabar trivial, setiap peubah terukur harus konstan hampir pasti. Misalkan kandidat $Y=c$; kejadian nontrivial tidak tersedia, sehingga syarat integral pada $\\Omega$ memaksa $c=E[X]=(0+2)/2=1$.",
        "Pada sigma-aljabar penuh $\\mathcal F$, peubah $X$ sendiri terukur. Untuk setiap $A\\in\\mathcal F$, identitas $E[X\\mathbf1_A]=E[X\\mathbf1_A]$ berlaku tanpa syarat tambahan. Karena itu $X$ merupakan versi $E[X\\mid\\mathcal F]$.",
        "Perbedaan kedua jawaban tidak bertentangan: informasi trivial tidak membedakan hasil sehingga hanya menghasilkan mean global 1, sedangkan informasi penuh membedakan hasil dan mempertahankan nilai asli 0 atau 2."
      ],
      conclusion:"Ekspektasi bersyarat bergantung pada informasi: masing-masing $1$ dan $X$."
    },
    {
      title:"Menara pada Dua Tingkat Pengelompokan",
      problem:"Pada delapan titik seragam, ambil $X(i)=2(i-1)$. Informasi halus $\\mathcal G$ membedakan pasangan $\\{1,2\\},\\{3,4\\},\\{5,6\\},\\{7,8\\}$, sedangkan $\\mathcal H$ hanya membedakan $\\{1,2,3,4\\}$ dan $\\{5,6,7,8\\}$. Verifikasi sifat menara.",
      solution:[
        "Nilai $X$ pada delapan titik adalah $0,2,4,6,8,10,12,14$. Pada empat pasangan informasi halus, rata-rata berbobot berturut-turut $1,5,9,13$. Jadi $Y=E[X\\mid\\mathcal G]$ bernilai $1,1,5,5,9,9,13,13$.",
        "Ketika informasi diturunkan ke $\\mathcal H$, dua pasangan pertama digabung menjadi satu blok empat titik. Rata-rata $Y$ pada blok tersebut adalah $(1+1+5+5)/4=3$, dan pada blok kedua $(9+9+13+13)/4=11$.",
        "Mengondisikan $X$ secara langsung pada $\\mathcal H$ memberi $(0+2+4+6)/4=3$ pada blok pertama dan $(8+10+12+14)/4=11$ pada blok kedua. Karena hasilnya sama pada kedua blok, $E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$."
      ],
      conclusion:"Pengelompokan bertahap dan pengelompokan langsung menghasilkan nilai 3 serta 11 yang sama."
    },
    {
      title:"Mengeluarkan Faktor Terukur dari Rata-Rata",
      problem:"Untuk $X=(0,2,4,6)$ dan dua blok $A,B$ seperti sebelumnya, tetapkan $Z=2$ pada $A$ dan $Z=-1$ pada $B$. Hitung $E[ZX\\mid\\mathcal G]$ dengan dua cara.",
      solution:[
        "Peubah $Z=2\\mathbf1_A-\\mathbf1_B$ terukur terhadap $\\mathcal G$ dan terbatas. Dari perhitungan terdahulu, $E[X\\mid\\mathcal G]=1\\mathbf1_A+5\\mathbf1_B$, sehingga sifat faktor terukur memberikan $Z E[X\\mid\\mathcal G]=2\\mathbf1_A-5\\mathbf1_B$.",
        "Untuk pemeriksaan langsung, $ZX$ pada empat titik adalah $0,4,-4,-6$. Rata-rata pada $A$ adalah $(0+4)/2=2$ dan pada $B$ adalah $(-4-6)/2=-5$. Ini tepat sama dengan perhitungan menggunakan sifat faktor terukur.",
        "Hipotesis keterukuran penting: jika $Z$ berubah-ubah di dalam satu blok, $Z$ belum tentu dapat dikeluarkan dari ekspektasi bersyarat terhadap informasi blok tersebut."
      ],
      conclusion:"Kedua cara memberikan $E[ZX\\mid\\mathcal G]=2\\mathbf1_A-5\\mathbf1_B$."
    },
    {
      title:"Ketika Informasi Tidak Independen",
      problem:"Pada empat titik seragam, ambil $X=\\mathbf1_{\\{1,2\\}}$ dan $\\mathcal G=\\sigma(\\{1,2\\},\\{3,4\\})$. Periksa klaim $E[X\\mid\\mathcal G]=E[X]$.",
      solution:[
        "Diketahui $X$ sendiri terukur terhadap $\\mathcal G$: ia bernilai 1 pada blok $A=\\{1,2\\}$ dan 0 pada blok $B=\\{3,4\\}$. Oleh karena itu, berdasarkan definisi, $E[X\\mid\\mathcal G]=X$ hampir pasti.",
        "Ekspektasi biasa $E[X]=P(A)=1/2$ adalah konstanta. Pada kejadian $A$ yang berpeluang $1/2$, nilai $X$ sama dengan 1, bukan $1/2$; maka kedua peubah tidak sama hampir pasti.",
        "Penyebabnya adalah kegagalan independensi: $P(X=1,A)=P(A)=1/2$, sedangkan $P(X=1)P(A)=(1/2)(1/2)=1/4$. Jadi hipotesis proposisi independensi tidak terpenuhi."
      ],
      conclusion:"Tanpa independensi, ekspektasi bersyarat tidak harus sama dengan mean global."
    }
  ],
  exercises:[
    {
      prompt:"Pada $\\Omega=\\{a,b,c\\}$ dengan $P(a)=1/2$, $P(b)=1/3$, $P(c)=1/6$, misalkan $X(a)=2$, $X(b)=5$, $X(c)=-1$. Jika $\\mathcal G=\\sigma(\\{a,b\\},\\{c\\})$, hitung $E[X\\mid\\mathcal G]$ dan verifikasi integral pada tiap blok.",
      hint:"Gunakan rata-rata berbobot, bukan rata-rata aritmetika tanpa bobot.",
      answer:"Diketahui $P(A)=P(\\{a,b\\})=1/2+1/3=5/6$ dan $P(B)=P(\\{c\\})=1/6$. Pada $A$, $E[X\\mathbf1_A]=2(1/2)+5(1/3)=1+5/3=8/3$, sehingga nilai bersyaratnya $(8/3)/(5/6)=16/5$. Pada $B$, $E[X\\mathbf1_B]=-1/6$ dan pembagian dengan $1/6$ menghasilkan $-1$. Jadi $Y=(16/5)\\mathbf1_A-\\mathbf1_B$. Verifikasi: $E[Y\\mathbf1_A]=(16/5)(5/6)=8/3$ dan $E[Y\\mathbf1_B]=(-1)(1/6)=-1/6$, tepat sama dengan integral $X$ pada masing-masing blok. Karena $\\mathcal G$ terdiri atas gabungan blok tersebut, $Y=E[X\\mid\\mathcal G]$."
    },
    {
      prompt:"Pada delapan titik seragam dengan $X(i)=i$, informasi halus membedakan pasangan berurutan dan informasi kasar membedakan empat titik pertama dari empat titik terakhir. Hitung kedua sisi identitas menara.",
      hint:"Hitung rata-rata pada pasangan terlebih dahulu, lalu rata-ratakan lagi pada kelompok empat titik.",
      answer:"Diketahui $\\mathcal G$ membedakan pasangan $(1,2),(3,4),(5,6),(7,8)$, sedangkan $\\mathcal H$ membedakan $\\{1,2,3,4\\}$ dan $\\{5,6,7,8\\}$. Karena probabilitas titik sama, $E[X\\mid\\mathcal G]$ bernilai $3/2,7/2,11/2,15/2$ pada empat pasangan. Mengondisikan lagi pada $\\mathcal H$ menghasilkan $[(3/2)+(7/2)]/2=5/2$ pada blok pertama dan $[(11/2)+(15/2)]/2=13/2$ pada blok kedua. Menghitung langsung dari $X$ memberi $(1+2+3+4)/4=5/2$ serta $(5+6+7+8)/4=13/2$. Kedua sisi sama pada setiap blok, sehingga identitas menara terverifikasi untuk data ini."
    },
    {
      prompt:"Misalkan $X$ integrabel dan independen dari $\\mathcal G$. Buktikan bahwa untuk setiap $A\\in\\mathcal G$, $E[X\\mathbf1_A]=E[X]P(A)$, kemudian simpulkan bentuk ekspektasi bersyarat.",
      hint:"Mulai dari fungsi indikator kejadian yang ditentukan oleh $X$, lalu gunakan aproksimasi fungsi sederhana.",
      answer:"Untuk $X=\\mathbf1_{\\{X\\in B\\}}$, independensi menyatakan $P(X\\in B,A)=P(X\\in B)P(A)$ bagi setiap $A\\in\\mathcal G$. Ini persis $E[X\\mathbf1_A]=E[X]P(A)$. Linearitas memperluas kesamaan ke fungsi sederhana dari $X$. Untuk $X\\geq0$, aproksimasi oleh fungsi sederhana naik dan teorema konvergensi monoton mempertahankan kesamaan. Untuk $X$ integrabel bertanda, tulis $X=X^+-X^-$; kedua ekspektasi bagian positif dan negatif hingga, sehingga kesamaan dapat dikurangkan. Konstanta $Y=E[X]$ terukur terhadap $\\mathcal G$ dan memenuhi $E[Y\\mathbf1_A]=E[X\\mathbf1_A]$ untuk setiap $A$. Ketunggalan ekspektasi bersyarat memberikan $E[X\\mid\\mathcal G]=E[X]$ hampir pasti."
    },
    {
      prompt:"Pada ruang berhingga, partisi informasi memiliki blok $A$ dengan $P(A)=0$. Jelaskan mengapa rumus rata-rata $E[X\\mathbf1_A]/P(A)$ tidak boleh digunakan dan bagaimana nilai ekspektasi bersyarat ditentukan pada blok itu.",
      hint:"Periksa identitas integral pada kejadian berpeluang nol dan makna kesamaan hampir pasti.",
      answer:"Karena $P(A)=0$ dan $X$ integrabel, $E[|X|\\mathbf1_A]=0$ sehingga $E[X\\mathbf1_A]=0$. Pecahan $0/0$ tidak terdefinisi; memberi nilai nol melalui pembagian merupakan kesalahan aljabar. Pilih saja nilai berhingga $c$ pada $A$, misalnya $c=0$, dan gunakan rumus rata-rata berbobot pada blok lain yang berpeluang positif. Untuk setiap pilihan $c$, $E[c\\mathbf1_A]=cP(A)=0=E[X\\mathbf1_A]$. Semua pilihan menghasilkan versi ekspektasi bersyarat yang sama hampir pasti, karena hanya berbeda pada kejadian berpeluang nol. Dengan demikian tidak ada nilai unik titik demi titik pada blok nol, tetapi kelas hampir pastinya unik."
    },
    {
      prompt:"Pada empat titik seragam dengan $X=(0,2,4,6)$ dan informasi blok $A=\\{1,2\\}$, $B=\\{3,4\\}$, hitung tiga suku dalam hukum varians total.",
      hint:"Gunakan mean global 3, mean bersyarat 1 dan 5, lalu kuadratkan selisihnya.",
      answer:"Diketahui $E[X]=(0+2+4+6)/4=3$. Maka $\\operatorname{Var}(X)=[(0-3)^2+(2-3)^2+(4-3)^2+(6-3)^2]/4=(9+1+1+9)/4=5$. Pada blok $A$ mean bersyarat 1, pada $B$ mean 5; deviasi $X$ dari mean blok adalah $(-1,1,-1,1)$, sehingga $\\operatorname{Var}(X\\mid\\mathcal G)=1$ pada semua titik dan $E[\\operatorname{Var}(X\\mid\\mathcal G)]=1$. Varians mean bersyarat adalah $[(1-3)^2+(1-3)^2+(5-3)^2+(5-3)^2]/4=4$. Jadi kedua komponen memenuhi $1+4=5=\\operatorname{Var}(X)$, sesuai hukum varians total."
    },
    {
      prompt:"Pada empat titik seragam dengan $X=(0,2,4,6)$, $\\mathcal G=\\sigma(\\{1,2\\},\\{3,4\\})$, dan $Z=(2,2,-1,-1)$, tentukan $E[ZX\\mid\\mathcal G]$ serta jelaskan mengapa $Z$ boleh dikeluarkan.",
      hint:"Pastikan $Z$ konstan pada tiap blok, kemudian periksa hasil dengan rata-rata langsung.",
      answer:"Diketahui $Z=2$ pada blok $A$ dan $Z=-1$ pada blok $B$, sehingga $Z$ terukur terhadap $\\mathcal G$ dan terbatas. Karena $E[X\\mid\\mathcal G]=1$ pada $A$ dan 5 pada $B$, proposisi faktor terukur memberi $E[ZX\\mid\\mathcal G]=Z E[X\\mid\\mathcal G]$, yakni 2 pada $A$ dan $-5$ pada $B$. Pemeriksaan langsung menggunakan $ZX=(0,4,-4,-6)$: rata-rata dua nilai pertama adalah $(0+4)/2=2$, dan rata-rata dua nilai terakhir adalah $(-4-6)/2=-5$. Jadi hasil kedua metode sama; sifat faktor terukur sah karena $Z$ sudah diketahui dari informasi blok."
    },
    {
      prompt:"Dengan $X=(0,2,4,6)$ dan $\\mathcal G$ berupa dua blok berurutan, hitung $E[X^2\\mid\\mathcal G]$ dan $(E[X\\mid\\mathcal G])^2$. Apakah keduanya selalu sama?",
      hint:"Bandingkan rata-rata kuadrat dengan kuadrat rata-rata pada masing-masing blok.",
      answer:"Diketahui $X^2=(0,4,16,36)$. Pada $A=\\{1,2\\}$, $E[X^2\\mid\\mathcal G]=(0+4)/2=2$, sedangkan $(E[X\\mid\\mathcal G])^2=1^2=1$. Pada $B=\\{3,4\\}$, rata-rata kuadrat adalah $(16+36)/2=26$, sedangkan kuadrat mean bersyarat adalah $5^2=25$. Jadi kedua peubah tidak sama pada kedua blok. Selisihnya masing-masing 1, tepat $\\operatorname{Var}(X\\mid\\mathcal G)$. Secara umum $E[X^2\\mid\\mathcal G]-(E[X\\mid\\mathcal G])^2=\\operatorname{Var}(X\\mid\\mathcal G)\\geq0$ untuk $X\\in L^2$, sehingga kesamaan hanya terjadi ketika varians bersyarat nol hampir pasti."
    },
    {
      prompt:"Misalkan $X\\in L^1(P)$ dan $\\mathcal F_0\\subseteq\\mathcal F_1\\subseteq\\mathcal F_2$. Definisikan $M_n=E[X\\mid\\mathcal F_n]$. Periksa secara lengkap bahwa $(M_0,M_1,M_2)$ adalah martingale.",
      hint:"Jangan hanya menulis sifat menara: periksa adapted, integrabilitas, dan dua identitas satu langkah.",
      answer:"Karena $X\\in L^1$, definisi ekspektasi bersyarat memastikan setiap $M_n=E[X\\mid\\mathcal F_n]$ integrabel. Setiap $M_n$ terukur terhadap $\\mathcal F_n$, sehingga proses adapted. Untuk langkah pertama, inklusi $\\mathcal F_0\\subseteq\\mathcal F_1$ dan sifat menara memberi $E[M_1\\mid\\mathcal F_0]=E[E[X\\mid\\mathcal F_1]\\mid\\mathcal F_0]=E[X\\mid\\mathcal F_0]=M_0$. Untuk langkah kedua, $E[M_2\\mid\\mathcal F_1]=E[E[X\\mid\\mathcal F_2]\\mid\\mathcal F_1]=M_1$. Kedua kesamaan berlaku hampir pasti. Jadi seluruh syarat martingale pada indeks $0,1,2$ terpenuhi, tanpa mengasumsikan independensi antar-$M_n$."
    }
  ],
  mistakes:[],
  connections:[]
};
