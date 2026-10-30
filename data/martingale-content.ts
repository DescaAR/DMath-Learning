import type { BookLessonContent } from "@/data/book-content-types";

/** Original, proof-based discrete martingales lesson; Williams (1991), Durrett (2019). */
export const martingaleContent:BookLessonContent = {
  "intro": [
    "Sebuah permainan disebut adil apabila, setelah seluruh hasil yang sudah terlihat diketahui, keuntungan tambahan yang diharapkan pada langkah berikutnya tetap nol. Pernyataan tersebut lebih kuat daripada sekadar menyatakan bahwa keuntungan total mempunyai rata-rata nol. Martingale memformalkan keadilan bersyarat dengan memakai filtrasi, yaitu keluarga informasi yang bertambah seiring waktu.",
    "Untuk proses diskrit $(M_n)_{n\\ge0}$, tiga syarat harus diperiksa secara terpisah: $M_n$ dapat ditentukan dari informasi $\\mathcal F_n$, $E|M_n|<\\infty$, dan $E[M_{n+1}\\mid\\mathcal F_n]=M_n$ hampir pasti. Kondisi terakhir menghubungkan masa depan dengan informasi saat ini, bukan dengan nilai ekspektasi tanpa syarat.",
    "Pembahasan bergerak dari random walk hingga proses yang dihentikan pada waktu acak. Teorema penghentian opsional dibuktikan untuk waktu henti terbatas; contoh strategi penggandaan memperlihatkan bahwa menghapus batas tersebut dapat mengubah kesimpulan. Kuadrat martingale dan transformasi prediktabel menunjukkan cara membangun proses baru tanpa mengabaikan syarat integrabilitas.",
    "Rujukan: David Williams, Probability with Martingales (Cambridge University Press, 1991), bab martingale diskrit; Rick Durrett, Probability: Theory and Examples, edisi ke-5 (Cambridge University Press, 2019), pembahasan martingale dan waktu henti."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Filtrasi dan Proses Adapted",
      "statement": "Pada ruang probabilitas $(\\Omega,\\mathcal F,P)$, filtrasi adalah barisan sigma-aljabar $(\\mathcal F_n)_{n\\ge0}$ dengan $\\mathcal F_n\\subseteq\\mathcal F_{n+1}\\subseteq\\mathcal F$. Proses $(X_n)_{n\\ge0}$ disebut adapted terhadap filtrasi tersebut jika $X_n$ terukur terhadap $\\mathcal F_n$ untuk setiap $n$.",
      "explanation": "Adapted berarti nilai pada waktu n tidak memerlukan informasi dari masa depan."
    },
    {
      "kind": "definition",
      "title": "Martingale Diskrit",
      "statement": "Proses real $(M_n)_{n\\ge0}$ disebut martingale terhadap $(\\mathcal F_n)$ jika untuk setiap $n\\ge0$: (i) $M_n$ terukur terhadap $\\mathcal F_n$; (ii) $E|M_n|<\\infty$; dan (iii) $E[M_{n+1}\\mid\\mathcal F_n]=M_n$ hampir pasti.",
      "explanation": "Ekspektasi bersyarat adalah identitas antarpeubah acak hingga hampir pasti, bukan kesamaan nilai pada setiap lintasan."
    },
    {
      "kind": "definition",
      "title": "Waktu Henti",
      "statement": "Peubah acak $\\tau:\\Omega\\to\\{0,1,2,\\ldots\\}\\cup\\{\\infty\\}$ disebut waktu henti terhadap $(\\mathcal F_n)$ jika $\\{\\tau\\le n\\}\\in\\mathcal F_n$ untuk setiap $n\\ge0$. Waktu henti disebut terbatas jika terdapat bilangan bulat $N$ sehingga $P(\\tau\\le N)=1$.",
      "explanation": "Keputusan untuk berhenti paling lambat waktu n harus dapat dibuat dari informasi yang tersedia hingga n."
    },
    {
      "kind": "definition",
      "title": "Proses yang Dihentikan",
      "statement": "Untuk proses $(M_n)$ dan waktu henti $\\tau$, proses yang dihentikan didefinisikan oleh $M_n^\\tau=M_{n\\wedge\\tau}$, dengan $n\\wedge\\tau=\\min\\{n,\\tau\\}$. Nilainya tidak berubah lagi setelah waktu $\\tau$ apabila $\\tau<\\infty$.",
      "explanation": "Definisi ini selalu menggunakan indeks berhingga n∧τ, bahkan jika τ dapat bernilai tak hingga."
    },
    {
      "kind": "proposition",
      "title": "Ekspektasi Martingale Tetap",
      "statement": "Jika $(M_n)_{n\\ge0}$ martingale integrabel terhadap $(\\mathcal F_n)$, maka $E[M_n]=E[M_0]$ untuk setiap $n\\ge0$.",
      "proof": [
        "Untuk setiap $n$, identitas martingale memberikan $E[M_{n+1}\\mid\\mathcal F_n]=M_n$ hampir pasti. Kedua ruas integrabel karena syarat definisi martingale.",
        "Ambil ekspektasi. Sifat menara ekspektasi bersyarat menghasilkan $E[M_{n+1}]=E[E[M_{n+1}\\mid\\mathcal F_n]]=E[M_n]$. Langkah ini tidak memerlukan independensi $M_{n+1}$ dan $\\mathcal F_n$.",
        "Iterasi kesamaan untuk indeks $0,1,\\ldots,n-1$ memberikan $E[M_n]=E[M_{n-1}]=\\cdots=E[M_0]$. Pernyataan berlaku bagi setiap indeks berhingga; belum ada klaim mengenai $E[\\lim_nM_n]$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Jumlah Inkremen Independen Bermean Nol",
      "statement": "Misalkan $(X_k)_{k\\ge1}$ saling independen, $E|X_k|<\\infty$, dan $E[X_k]=0$ untuk setiap $k$. Dengan $\\mathcal F_n=\\sigma(X_1,\\ldots,X_n)$, $\\mathcal F_0=\\{\\varnothing,\\Omega\\}$, dan $S_n=\\sum_{k=1}^nX_k$ ($S_0=0$), proses $(S_n)$ merupakan martingale.",
      "proof": [
        "Karena $S_n$ adalah jumlah hingga peubah acak yang terukur terhadap $\\mathcal F_n$, proses ini adapted. Pertidaksamaan segitiga memberi $E|S_n|\\le\\sum_{k=1}^nE|X_k|<\\infty$, sehingga syarat integrabilitas terpenuhi.",
        "Dari $S_{n+1}=S_n+X_{n+1}$ diperoleh $E[S_{n+1}\\mid\\mathcal F_n]=S_n+E[X_{n+1}\\mid\\mathcal F_n]$; suku $S_n$ dapat dikeluarkan karena sudah terukur terhadap $\\mathcal F_n$.",
        "Independensi seluruh inkremen menjamin $X_{n+1}$ independen dari $\\sigma(X_1,\\ldots,X_n)$, sehingga $E[X_{n+1}\\mid\\mathcal F_n]=E[X_{n+1}]=0$. Oleh karena itu $E[S_{n+1}\\mid\\mathcal F_n]=S_n$ hampir pasti. Ketiga syarat martingale terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Martingale dari Informasi yang Bertambah",
      "statement": "Jika $X\\in L^1(P)$ dan $(\\mathcal F_n)$ filtrasi dengan $\\mathcal F_n\\subseteq\\mathcal F$, maka $M_n=E[X\\mid\\mathcal F_n]$ adalah martingale.",
      "proof": [
        "Definisi ekspektasi bersyarat memastikan bahwa $M_n$ terukur terhadap $\\mathcal F_n$ dan integrabel. Secara khusus, $E|M_n|\\le E|X|<\\infty$ berdasarkan ketaksamaan Jensen bersyarat untuk nilai mutlak.",
        "Untuk setiap $n$, inklusi $\\mathcal F_n\\subseteq\\mathcal F_{n+1}$ memungkinkan penggunaan sifat menara: $E[M_{n+1}\\mid\\mathcal F_n]=E[E[X\\mid\\mathcal F_{n+1}]\\mid\\mathcal F_n]$.",
        "Sifat menara menyederhanakan ruas kanan menjadi $E[X\\mid\\mathcal F_n]=M_n$ hampir pasti. Dengan demikian proses memenuhi adaptedness, integrabilitas, dan identitas martingale. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Proses Martingale yang Dihentikan",
      "statement": "Jika $(M_n)$ martingale integrabel dan $\\tau$ waktu henti terhadap filtrasi yang sama, maka $(M_{n\\wedge\\tau})_{n\\ge0}$ adalah martingale, tanpa perlu mengasumsikan bahwa $\\tau$ terbatas.",
      "proof": [
        "Untuk $n$ tetap, tulis $M_{n\\wedge\\tau}=\\sum_{k=0}^{n-1}M_k\\mathbf1_{\\{\\tau=k\\}}+M_n\\mathbf1_{\\{\\tau\\ge n\\}}$. Karena $\\{\\tau=k\\}\\in\\mathcal F_k\\subseteq\\mathcal F_n$ dan $\\{\\tau\\ge n\\}\\in\\mathcal F_n$, proses yang dihentikan adapted. Jumlahnya berhingga dan setiap $M_k$ integrabel, sehingga $E|M_{n\\wedge\\tau}|<\\infty$.",
        "Untuk setiap $n$, berlaku identitas lintasan $M_{(n+1)\\wedge\\tau}-M_{n\\wedge\\tau}=\\mathbf1_{\\{\\tau>n\\}}(M_{n+1}-M_n)$. Kejadian $\\{\\tau>n\\}$ berada di $\\mathcal F_n$ karena $\\tau$ waktu henti.",
        "Ambil ekspektasi bersyarat terhadap $\\mathcal F_n$. Indikator terbatas dapat dikeluarkan, dan $E[M_{n+1}-M_n\\mid\\mathcal F_n]=0$. Karena itu $E[M_{(n+1)\\wedge\\tau}-M_{n\\wedge\\tau}\\mid\\mathcal F_n]=0$.",
        "Diperoleh $E[M_{(n+1)\\wedge\\tau}\\mid\\mathcal F_n]=M_{n\\wedge\\tau}$ hampir pasti. Perhatikan bahwa yang dijamin integrabel adalah $M_{n\\wedge\\tau}$ untuk setiap $n$ berhingga, bukan otomatis $M_\\tau$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Penghentian Opsional untuk Waktu Henti Terbatas",
      "statement": "Jika $(M_n)$ martingale integrabel, $\\tau$ waktu henti, dan terdapat $N\\in\\mathbb N$ dengan $P(\\tau\\le N)=1$, maka $M_\\tau$ integrabel dan $E[M_\\tau]=E[M_0]$.",
      "proof": [
        "Karena $\\tau\\le N$ hampir pasti, $M_\\tau=\\sum_{k=0}^N M_k\\mathbf1_{\\{\\tau=k\\}}$ hampir pasti. Setiap suku integrabel, sehingga $M_\\tau$ integrabel. Batas deterministik $N$ adalah hipotesis yang dipakai untuk menjamin hal ini tanpa syarat tambahan.",
        "Menurut proposisi proses dihentikan, $(M_{n\\wedge\\tau})$ martingale. Dengan mengambil ekspektasi satu langkah berulang, diperoleh $E[M_{N\\wedge\\tau}]=E[M_0]$.",
        "Karena $N\\wedge\\tau=\\tau$ hampir pasti, identitas tersebut menjadi $E[M_\\tau]=E[M_0]$. Tidak digunakan pertukaran limit dengan ekspektasi; kesimpulan hanya memerlukan langkah berhingga. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Kuadrat Martingale Adalah Submartingale",
      "statement": "Jika $(M_n)$ martingale dengan $E[M_n^2]<\\infty$ untuk setiap $n$, maka $E[M_{n+1}^2\\mid\\mathcal F_n]\\ge M_n^2$ hampir pasti. Secara lebih tepat, dengan $\\Delta M_{n+1}=M_{n+1}-M_n$, berlaku $E[M_{n+1}^2\\mid\\mathcal F_n]=M_n^2+E[(\\Delta M_{n+1})^2\\mid\\mathcal F_n]$.",
      "proof": [
        "Karena $M_n,M_{n+1}\\in L^2$, selisih $\\Delta M_{n+1}$ juga berada di $L^2$. Identitas aljabar $(M_n+\\Delta M_{n+1})^2=M_n^2+2M_n\\Delta M_{n+1}+(\\Delta M_{n+1})^2$ berlaku hampir pasti.",
        "Ambil ekspektasi bersyarat terhadap $\\mathcal F_n$. Produk $M_n\\Delta M_{n+1}$ integrabel oleh Cauchy–Schwarz. Sifat mengeluarkan faktor $\\mathcal F_n$-terukur (dengan aproksimasi pemotongan bila tidak terbatas) memberi $E[M_n\\Delta M_{n+1}\\mid\\mathcal F_n]=M_nE[\\Delta M_{n+1}\\mid\\mathcal F_n]=0$.",
        "Diperoleh $E[M_{n+1}^2\\mid\\mathcal F_n]=M_n^2+E[(\\Delta M_{n+1})^2\\mid\\mathcal F_n]\\ge M_n^2$ karena ekspektasi bersyarat peubah nonnegatif tetap nonnegatif. Kedua sisi integrabel; definisi submartingale untuk $(M_n^2)$ terpenuhi. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Martingale Kuadratik Random Walk",
      "statement": "Misalkan $(X_k)$ independen identik terdistribusi dengan $E[X_k]=0$ dan $E[X_k^2]=\\sigma^2<\\infty$. Untuk $S_n=\\sum_{k=1}^nX_k$ dan $\\mathcal F_n=\\sigma(X_1,\\ldots,X_n)$, proses $Q_n=S_n^2-n\\sigma^2$ adalah martingale.",
      "proof": [
        "Dari integrabilitas kuadrat setiap inkremen, $S_n\\in L^2$ untuk $n$ berhingga. Oleh karena itu $Q_n$ terukur terhadap $\\mathcal F_n$ dan integrabel. Proses $S_n$ sendiri martingale berdasarkan independensi dan mean nol.",
        "Kembangkan $S_{n+1}^2=(S_n+X_{n+1})^2=S_n^2+2S_nX_{n+1}+X_{n+1}^2$. Independensi inkremen berikutnya dari $\\mathcal F_n$ menghasilkan $E[X_{n+1}\\mid\\mathcal F_n]=0$ dan $E[X_{n+1}^2\\mid\\mathcal F_n]=\\sigma^2$.",
        "Dengan demikian $E[S_{n+1}^2\\mid\\mathcal F_n]=S_n^2+\\sigma^2$. Kurangi $(n+1)\\sigma^2$ dari kedua ruas untuk memperoleh $E[Q_{n+1}\\mid\\mathcal F_n]=S_n^2-n\\sigma^2=Q_n$. Ketiga syarat martingale terpenuhi. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Transformasi Martingale dengan Strategi Prediktabel Terbatas",
      "statement": "Misalkan $(M_n)$ martingale integrabel dan $(H_k)_{k\\ge1}$ proses dengan $H_k$ terukur terhadap $\\mathcal F_{k-1}$ serta $|H_k|\\le C$ hampir pasti untuk suatu $C<\\infty$ yang sama. Dengan $T_0=0$ dan $T_n=\\sum_{k=1}^nH_k(M_k-M_{k-1})$, proses $(T_n)$ adalah martingale.",
      "proof": [
        "Karena $H_k$ terukur terhadap $\\mathcal F_{k-1}$, maka $H_k(M_k-M_{k-1})$ terukur terhadap $\\mathcal F_k$. Setiap $T_n$ merupakan jumlah hingga peubah terukur terhadap $\\mathcal F_n$, sehingga adapted.",
        "Batas $|H_k|\\le C$ dan integrabilitas $M_k,M_{k-1}$ memberikan $E|H_k(M_k-M_{k-1})|\\le C(E|M_k|+E|M_{k-1}|)<\\infty$. Penjumlahan hingga menunjukkan $T_n$ integrabel.",
        "Identitas $T_{n+1}=T_n+H_{n+1}(M_{n+1}-M_n)$ dan sifat prediktabel memberikan $E[T_{n+1}\\mid\\mathcal F_n]=T_n+H_{n+1}E[M_{n+1}-M_n\\mid\\mathcal F_n]=T_n$.",
        "Faktor $H_{n+1}$ harus diketahui pada waktu $n$; menggantinya dengan strategi yang dipilih setelah melihat $M_{n+1}$ akan membatalkan langkah pengeluaran faktor. Dengan hipotesis yang dinyatakan, transformasi adalah martingale. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Informasi Dua Lemparan Koin",
      "forDefinition": "Filtrasi dan Proses Adapted",
      "problem": "Dua lemparan koin adil menghasilkan $X_1,X_2\\in\\{-1,1\\}$. Tentukan $\\mathcal F_0,\\mathcal F_1,\\mathcal F_2$ dan periksa apakah $S_n=\\sum_{k=1}^nX_k$ adapted.",
      "solution": [
        "Ruang sampel $\\Omega=\\{(1,1),(1,-1),(-1,1),(-1,-1)\\}$ memiliki empat titik dengan peluang masing-masing $1/4$. Sebelum lemparan, $\\mathcal F_0=\\{\\varnothing,\\Omega\\}$. Setelah lemparan pertama, informasi membedakan $A=\\{(1,1),(1,-1)\\}$ dan $B=\\{(-1,1),(-1,-1)\\}$, sehingga $\\mathcal F_1=\\{\\varnothing,A,B,\\Omega\\}$.",
        "Setelah lemparan kedua, setiap hasil dapat dibedakan dan $\\mathcal F_2=\\mathcal P(\\Omega)$. Nilai $S_1=X_1$ konstan pada masing-masing blok $A,B$, sehingga $S_1$ terukur terhadap $\\mathcal F_1$. Nilai $S_2=X_1+X_2$ terukur terhadap $\\mathcal F_2$ karena seluruh subset $\\Omega$ tersedia.",
        "Dengan $S_0=0$ yang $\\mathcal F_0$-terukur, proses $(S_0,S_1,S_2)$ adapted. Sebaliknya $X_2$ tidak $\\mathcal F_1$-terukur: kejadian $\\{X_2=1\\}=\\{(1,1),(-1,1)\\}$ bukan anggota $\\mathcal F_1$. Perbedaan ini menunjukkan bahwa adaptedness melarang penggunaan hasil masa depan."
      ],
      "conclusion": "Jumlah parsial adapted terhadap informasi yang dihasilkan lemparan sampai waktu bersangkutan."
    },
    {
      "title": "Martingale Random Walk Dua Langkah",
      "forDefinition": "Martingale Diskrit",
      "problem": "Untuk koin adil $X_1,X_2\\in\\{-1,1\\}$ independen dan $S_n=\\sum_{k=1}^nX_k$, periksa persamaan martingale pada $n=0$ dan $n=1$ secara langsung.",
      "solution": [
        "Diketahui $S_0=0$, $S_1=X_1$, dan $S_2=X_1+X_2$. Semua nilai terbatas, sehingga integrabel. Proses adapted terhadap $\\mathcal F_n=\\sigma(X_1,\\ldots,X_n)$ sebagaimana ditunjukkan pada contoh filtrasi.",
        "Pada waktu nol, $E[S_1\\mid\\mathcal F_0]=E[X_1]=(1/2)(1)+(1/2)(-1)=0=S_0$. Pada waktu satu dengan $X_1=1$, nilai $S_2$ adalah 2 atau 0 dengan peluang bersyarat masing-masing $1/2$; rata-ratanya $(2+0)/2=1=S_1$.",
        "Jika $X_1=-1$, nilai $S_2$ adalah 0 atau $-2$ dengan peluang sama, sehingga $E[S_2\\mid X_1=-1]=(0-2)/2=-1=S_1$. Kedua blok $\\mathcal F_1$ memenuhi identitas, maka $E[S_2\\mid\\mathcal F_1]=S_1$."
      ],
      "conclusion": "Keadilan bersyarat berlaku pada setiap informasi yang tersedia, bukan hanya pada mean global."
    },
    {
      "title": "Waktu Henti Pertama Kali Muncul Kepala",
      "forDefinition": "Waktu Henti",
      "problem": "Untuk tiga lemparan koin, definisikan $\\tau=\\min\\{k\\in\\{1,2,3\\}:X_k=1\\}$, dengan $\\tau=3$ jika tidak ada kepala. Buktikan bahwa $\\tau$ waktu henti dan hitung distribusinya.",
      "solution": [
        "Pada $n=0$, kejadian $\\{\\tau\\le0\\}=\\varnothing\\in\\mathcal F_0$. Pada $n=1$, kejadian $\\{\\tau\\le1\\}=\\{X_1=1\\}\\in\\mathcal F_1$ karena hasil lemparan pertama telah diketahui.",
        "Pada $n=2$, kejadian $\\{\\tau\\le2\\}=\\{X_1=1\\}\\cup\\{X_1=-1,X_2=1\\}\\in\\mathcal F_2$. Pada $n\\ge3$, kejadian $\\{\\tau\\le n\\}=\\Omega\\in\\mathcal F_n$. Keputusan berhenti tidak memakai hasil setelah waktu yang sedang diperiksa.",
        "Probabilitasnya $P(\\tau=1)=1/2$, $P(\\tau=2)=P(X_1=-1,X_2=1)=1/4$, dan $P(\\tau=3)=P(X_1=X_2=-1)=1/4$. Jumlahnya $1$, dan $\\tau\\le3$ untuk setiap hasil, sehingga waktu henti ini terbatas."
      ],
      "conclusion": "Waktu kemunculan kepala pertama, yang dibatasi tiga lemparan, adalah waktu henti terbatas."
    },
    {
      "title": "Lintasan Proses yang Dihentikan",
      "forDefinition": "Proses yang Dihentikan",
      "problem": "Untuk random walk $S_n=X_1+\\cdots+X_n$ dan waktu henti kepala pertama $\\tau$, tuliskan $S_{n\\wedge\\tau}$ pada lintasan $(-1,-1,1)$ dan $(1,-1,-1)$.",
      "solution": [
        "Pada lintasan $(-1,-1,1)$, kepala pertama muncul pada langkah 3, sehingga $\\tau=3$. Nilai jumlah parsial adalah $S_0=0$, $S_1=-1$, $S_2=-2$, dan $S_3=-1$. Karena $n\\wedge\\tau=n$ untuk $n\\le3$, proses yang dihentikan mengikuti urutan $0,-1,-2,-1$.",
        "Pada lintasan $(1,-1,-1)$, kepala sudah muncul pada langkah pertama dan $\\tau=1$. Jumlah parsial tanpa penghentian bernilai $0,1,0,-1$, tetapi proses yang dihentikan bernilai $S_{n\\wedge\\tau}=0,1,1,1$ untuk $n=0,1,2,3$.",
        "Perbandingan ini memperlihatkan bahwa $S_{n\\wedge\\tau}$ bukan sekadar memilih nilai terakhir $S_n$ secara acak: sesudah waktu henti, seluruh inkremen berikutnya dibuang. Secara aljabar, inkremen proses dihentikan adalah $\\mathbf1_{\\{\\tau>n\\}}X_{n+1}$."
      ],
      "conclusion": "Proses yang dihentikan mempertahankan nilai tepat saat keputusan berhenti dibuat."
    },
    {
      "title": "Martingale dari Nilai Terminal",
      "problem": "Dua lemparan koin adil menghasilkan indikator $I_k=\\mathbf1_{\\{X_k=1\\}}$. Untuk $Z=I_1+2I_2$, tentukan $M_n=E[Z\\mid\\mathcal F_n]$ bagi $n=0,1,2$.",
      "solution": [
        "Karena $E[I_k]=1/2$, ekspektasi tanpa informasi adalah $M_0=E[Z]=1/2+2(1/2)=3/2$. Pada waktu satu, $I_1$ sudah diketahui, sedangkan $I_2$ independen dari $\\mathcal F_1$, sehingga $M_1=I_1+2E[I_2\\mid\\mathcal F_1]=I_1+1$.",
        "Pada waktu dua, $Z$ sendiri terukur terhadap $\\mathcal F_2$, sehingga $M_2=Z=I_1+2I_2$. Untuk memeriksa martingale, kondisikan lagi: $E[M_2\\mid\\mathcal F_1]=I_1+2(1/2)=I_1+1=M_1$.",
        "Selain itu $E[M_1\\mid\\mathcal F_0]=E[I_1]+1=3/2=M_0$. Seluruh peubah terbatas dan adapted. Sebagai pemeriksaan, $M_1$ bernilai 1 atau 2, sedangkan $M_2$ bernilai 0,1,2,3 sesuai dua hasil lemparan."
      ],
      "conclusion": "Ekspektasi nilai terminal yang dikondisikan pada informasi bertambah membentuk martingale."
    },
    {
      "title": "Penghentian Opsional pada Tiga Lemparan",
      "problem": "Untuk random walk koin adil dan $\\tau$ kepala pertama yang dibatasi tiga lemparan, tentukan distribusi $S_\\tau$ dan periksa $E[S_\\tau]=E[S_0]$.",
      "solution": [
        "Ada empat pola relevan: kepala pada langkah 1 dengan peluang $1/2$ memberi $S_\\tau=1$; ekor lalu kepala dengan peluang $1/4$ memberi $S_\\tau=0$; dua ekor lalu kepala dengan peluang $1/8$ memberi $S_\\tau=-1$; dan tiga ekor dengan peluang $1/8$ memberi $S_\\tau=-3$.",
        "Ekspektasi dihitung dari distribusi lengkap, bukan dari satu lintasan: $E[S_\\tau]=(1)(1/2)+(0)(1/4)+(-1)(1/8)+(-3)(1/8)=1/2-1/8-3/8=0$. Nilai awal $S_0=0$ sehingga $E[S_0]=0$.",
        "Syarat teorema diperiksa: $(S_n)$ martingale integrabel, $\\tau$ waktu henti berdasarkan kejadian $\\{\\tau\\le n\\}$, dan $\\tau\\le3$. Kesamaan ekspektasi bukan kebetulan numerik, melainkan konsekuensi penghentian opsional terbatas."
      ],
      "conclusion": "Nilai harapan keuntungan pada waktu henti terbatas tetap nol."
    },
    {
      "title": "Kuadrat Random Walk dan Koreksi Varians",
      "problem": "Untuk inkremen koin adil $\\pm1$, periksa apakah $S_n^2$ martingale dan buktikan bahwa $S_n^2-n$ adalah martingale.",
      "solution": [
        "Karena $S_{n+1}=S_n+X_{n+1}$, ekspansi kuadrat memberikan $S_{n+1}^2=S_n^2+2S_nX_{n+1}+X_{n+1}^2$. Diketahui $E[X_{n+1}\\mid\\mathcal F_n]=0$ dan $X_{n+1}^2=1$.",
        "Ambil ekspektasi bersyarat untuk memperoleh $E[S_{n+1}^2\\mid\\mathcal F_n]=S_n^2+1$. Ini lebih besar daripada $S_n^2$, sehingga kuadrat random walk merupakan submartingale, bukan martingale. Secara khusus $E[S_2^2]=2$, sedangkan $E[S_0^2]=0$.",
        "Definisikan $Q_n=S_n^2-n$. Diperoleh $E[Q_{n+1}\\mid\\mathcal F_n]=(S_n^2+1)-(n+1)=S_n^2-n=Q_n$. Karena $Q_n$ integrabel dan adapted, proses terkoreksi ini martingale."
      ],
      "conclusion": "Suku deterministik n menghilangkan pertambahan varians yang diharapkan pada setiap langkah."
    },
    {
      "title": "Mengapa Penghentian Tak Terbatas Perlu Syarat Tambahan",
      "problem": "Dalam lemparan koin adil, pertaruhkan $1,2,4,\\ldots$ satuan sampai pertama kali menang; setiap kemenangan memberi laba sebesar taruhan dan kekalahan memberi rugi sebesar taruhan. Jelaskan mengapa kesimpulan penghentian opsional terbatas tidak dapat langsung diterapkan.",
      "solution": [
        "Tuliskan $X_k=1$ untuk menang dan $X_k=-1$ untuk kalah, serta $H_k=2^{k-1}\\mathbf1_{\\{X_1=\\cdots=X_{k-1}=-1\\}}$. Besar taruhan $H_k$ ditentukan sebelum lemparan ke-k, sehingga $H_k$ terukur terhadap $\\mathcal F_{k-1}$. Untuk setiap k tetap, $H_k$ terbatas dan $E|H_kX_k|=2^{k-1}P(X_1=\\cdots=X_{k-1}=-1)=1$.",
        "Keuntungan $M_n=\\sum_{k=1}^nH_kX_k$ adalah martingale pada setiap waktu berhingga. Waktu kemenangan pertama $\\tau$ merupakan waktu henti dan $P(\\tau>n)=2^{-n}\\to0$, sehingga $\\tau<\\infty$ hampir pasti. Akan tetapi tidak ada batas deterministik N dengan $\\tau\\le N$ hampir pasti.",
        "Jika kemenangan pertama terjadi pada langkah k, kerugian sebelumnya adalah $1+2+\\cdots+2^{k-2}=2^{k-1}-1$, sedangkan kemenangan terakhir $2^{k-1}$. Karena itu $M_\\tau=1$ hampir pasti, sehingga $E[M_\\tau]=1\\ne0=E[M_0]$.",
        "Tidak ada kontradiksi: teorema yang dibuktikan memerlukan waktu henti terbatas. Untuk $\\tau\\wedge N$, keuntungan akhir bernilai $1$ jika sudah menang dan $-(2^N-1)$ jika seluruh N lemparan kalah; ekspektasinya $(1-2^{-N})-2^{-N}(2^N-1)=0$. Kegagalan pertukaran limit dengan ekspektasi menjelaskan perbedaannya."
      ],
      "conclusion": "Hampir pasti berhenti bukan pengganti hipotesis penghentian terbatas atau syarat integrabilitas tambahan."
    }
  ],
  "exercises": [
    {
      "prompt": "MG-01. Pada dua lemparan koin adil, hitung $E[S_2\\mid\\mathcal F_1]$ pada masing-masing nilai $X_1$, lalu verifikasi $E[S_2]=E[S_0]$.",
      "hint": "Pisahkan kedua blok informasi pada waktu satu.",
      "answer": "Diketahui $S_0=0$, $S_1=X_1$, dan $S_2=X_1+X_2$ dengan $X_1,X_2$ independen, masing-masing bernilai $\\pm1$ dengan peluang $1/2$. Untuk $X_1=1$, $S_2$ bernilai 2 dan 0 dengan peluang bersyarat sama, sehingga $E[S_2\\mid X_1=1]=(2+0)/2=1=S_1$. Untuk $X_1=-1$, $S_2$ bernilai 0 dan $-2$, sehingga $E[S_2\\mid X_1=-1]=(0-2)/2=-1=S_1$. Kedua blok membentuk $\\mathcal F_1$, sehingga $E[S_2\\mid\\mathcal F_1]=S_1$. Secara langsung distribusi $S_2$ adalah $2,0,-2$ dengan peluang $1/4,1/2,1/4$, maka $E[S_2]=2/4+0-2/4=0=E[S_0]$. Identitas bersyarat dan mean konstan keduanya terverifikasi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-02. Untuk koin bias dengan $P(X_k=1)=3/4$ dan $P(X_k=-1)=1/4$, tentukan koreksi drift agar jumlah parsial menjadi martingale. Hitung distribusi proses terkoreksi pada waktu dua.",
      "hint": "Hitung mean inkremen dan pusatkan setiap inkremen sebelum dijumlahkan.",
      "answer": "Diketahui $E[X_k]=(3/4)(1)+(1/4)(-1)=1/2$. Jumlah biasa $S_n=\\sum_{k=1}^nX_k$ bukan martingale karena $E[S_{n+1}\\mid\\mathcal F_n]=S_n+1/2$. Definisikan $M_n=S_n-n/2=\\sum_{k=1}^n(X_k-1/2)$. Proses adapted dan integrabel; independensi memberi $E[M_{n+1}\\mid\\mathcal F_n]=M_n+E[X_{n+1}-1/2]=M_n$. Untuk dua lemparan, hasil $++$ memberi $M_2=2-1=1$ dengan peluang $9/16$. Hasil $+-$ atau $-+$ memberi $M_2=0-1=-1$ dengan peluang total $6/16$. Hasil $--$ memberi $M_2=-2-1=-3$ dengan peluang $1/16$. Periksa $E[M_2]=9/16-6/16-3/16=0=E[M_0]$. Koreksi drift yang benar adalah mengurangkan $n/2$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-03. Untuk random walk koin adil, tentukan apakah $Y_n=S_n+n$ martingale, submartingale, atau supermartingale. Buktikan menggunakan ekspektasi bersyarat, bukan hanya rata-rata.",
      "hint": "Gunakan $E[X_{n+1}midmathcal F_n]=0$.",
      "answer": "Diketahui $S_{n+1}=S_n+X_{n+1}$ dengan $E[X_{n+1}\\mid\\mathcal F_n]=0$. Proses $Y_n=S_n+n$ adapted dan integrabel karena jumlah hingga peubah terbatas. Hitung $E[Y_{n+1}\\mid\\mathcal F_n]=E[S_n+X_{n+1}+n+1\\mid\\mathcal F_n]=S_n+n+1=Y_n+1$. Karena $Y_n+1\\ge Y_n$ hampir pasti, definisi submartingale terpenuhi. Kesamaan martingale gagal karena $1\\ne0$; ketaksamaan supermartingale juga gagal sebab $Y_n+1>Y_n$ pada setiap hasil. Sebagai verifikasi pada $n=0$, $E[Y_1]=E[X_1+1]=1>0=Y_0$. Dengan demikian $Y_n$ adalah submartingale ketat dan bukan martingale maupun supermartingale.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-04. Hentikan random walk koin adil saat kepala pertama atau setelah dua lemparan, mana yang lebih dahulu. Hitung $E[S_\\tau]$, $E[S_\\tau^2]$, dan $E[\\tau]$, lalu bandingkan dengan martingale $S_n^2-n$.",
      "hint": "Ada tiga pola akhir: H, TH, dan TT.",
      "answer": "Definisikan $\\tau=1$ jika $X_1=1$ dan $\\tau=2$ jika $X_1=-1$. Kejadian $\\{\\tau\\le1\\}=\\{X_1=1\\}\\in\\mathcal F_1$, dan $\\tau\\le2$, sehingga waktu henti terbatas. Pada pola H (peluang $1/2$), $S_\\tau=1$ dan $\\tau=1$; pada TH (peluang $1/4$), $S_\\tau=0$ dan $\\tau=2$; pada TT (peluang $1/4$), $S_\\tau=-2$ dan $\\tau=2$. Oleh karena itu $E[S_\\tau]=1/2+0-2/4=0$. Momen kedua ialah $E[S_\\tau^2]=(1/2)1^2+(1/4)0^2+(1/4)(-2)^2=1/2+1=3/2$. Ekspektasi waktu henti ialah $E[\\tau]=(1)(1/2)+(2)(1/4+1/4)=3/2$. Karena $Q_n=S_n^2-n$ martingale dan $\\tau\\le2$, penghentian opsional memberi $E[Q_\\tau]=0$, tepat sama dengan $E[S_\\tau^2]-E[\\tau]=0$. Kedua perhitungan saling memverifikasi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-05. Buktikan $Q_n=S_n^2-n$ martingale untuk random walk sederhana simetris. Periksa pula nilai $E[Q_2\\mid\\mathcal F_1]$ pada dua kemungkinan hasil pertama.",
      "hint": "Kembangkan kuadrat $S_n+X_{n+1}$.",
      "answer": "Untuk $S_n=\\sum_{k=1}^nX_k$ dengan inkremen independen bernilai $\\pm1$ berpeluang sama, $Q_n=S_n^2-n$ adapted dan integrabel pada setiap n. Identitas $S_{n+1}^2=S_n^2+2S_nX_{n+1}+X_{n+1}^2$ memberikan $E[S_{n+1}^2\\mid\\mathcal F_n]=S_n^2+2S_nE[X_{n+1}\\mid\\mathcal F_n]+E[X_{n+1}^2\\mid\\mathcal F_n]=S_n^2+1$. Karena itu $E[Q_{n+1}\\mid\\mathcal F_n]=S_n^2+1-(n+1)=Q_n$. Pada n=1, $S_1=\\pm1$ sehingga $Q_1=S_1^2-1=0$ pada kedua blok. Jika $X_1=1$, $S_2=2$ atau 0, sehingga $Q_2=2$ atau $-2$ dengan peluang bersyarat $1/2$ masing-masing; rata-ratanya nol. Jika $X_1=-1$, $S_2=0$ atau $-2$ dan $Q_2=-2$ atau 2, kembali bermean nol. Jadi verifikasi eksplisit sesuai identitas umum.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-06. Diberikan $Z=2X_1+X_1X_2$ untuk dua koin adil independen bernilai $\\pm1$. Tentukan $M_n=E[Z\\mid\\mathcal F_n]$ bagi $n=0,1,2$ dan buktikan relasi martingale.",
      "hint": "Kondisikan pada $X_1$; hasil kedua masih independen.",
      "answer": "Diketahui $E[X_1]=E[X_2]=0$ dan independensi memberi $E[X_1X_2]=E[X_1]E[X_2]=0$, sehingga $M_0=E[Z]=0$. Karena $X_1$ terukur terhadap $\\mathcal F_1$ dan $X_2$ independen dari $\\mathcal F_1$, diperoleh $M_1=E[2X_1+X_1X_2\\mid\\mathcal F_1]=2X_1+X_1E[X_2\\mid\\mathcal F_1]=2X_1$. Pada waktu dua, $Z$ terukur terhadap $\\mathcal F_2$, sehingga $M_2=2X_1+X_1X_2$. Periksa $E[M_2\\mid\\mathcal F_1]=2X_1+X_1E[X_2\\mid\\mathcal F_1]=2X_1=M_1$, serta $E[M_1\\mid\\mathcal F_0]=2E[X_1]=0=M_0$. Semua nilai terbatas dan adapted. Proses ini martingale walaupun $M_1$ bukan konstan, yang menunjukkan perbedaan antara mean global dan mean bersyarat.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-07. Dengan $X_1,X_2$ koin adil $\\pm1$, pilih taruhan $H_1=2$ dan $H_2=X_1$ sebelum lemparan kedua. Hitung distribusi $T_2=H_1X_1+H_2X_2$ dan periksa martingale transform.",
      "hint": "Taruhan kedua boleh bergantung pada hasil pertama, tetapi tidak pada hasil kedua.",
      "answer": "Strategi $H_1=2$ konstan dan $H_2=X_1$ terukur terhadap $\\mathcal F_1$ serta $|H_k|\\le2$, sehingga prediktabel terbatas. Keuntungan $T_0=0$, $T_1=2X_1$, dan $T_2=2X_1+X_1X_2$. Untuk hasil $(X_1,X_2)=(1,1)$, nilainya 3; untuk $(1,-1)$, nilainya 1; untuk $(-1,1)$, nilainya $-3$; dan untuk $(-1,-1)$, nilainya $-1$. Masing-masing memiliki peluang $1/4$, sehingga $E[T_2]=(3+1-3-1)/4=0$. Lebih kuat, $E[T_2\\mid\\mathcal F_1]=2X_1+X_1E[X_2\\mid\\mathcal F_1]=2X_1=T_1$. Identitas ini, bersama adaptedness dan integrabilitas, membuktikan bahwa transformasi merupakan martingale. Mengganti $H_2$ dengan $X_2$ tidak sah karena taruhan baru akan memakai hasil lemparan kedua sebelum tersedia.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MG-08. Dalam strategi menggandakan taruhan pada koin adil sampai kemenangan pertama, hitung distribusi keuntungan pada penghentian $\\tau\\wedge N$ dan jelaskan mengapa limit $N\\to\\infty$ tidak mempertahankan ekspektasi.",
      "hint": "Pada N kekalahan berturut-turut, kerugian total adalah $2^N-1$.",
      "answer": "Ambil inkremen koin $X_k=\\pm1$ independen dan taruhan prediktabel $H_k=2^{k-1}\\mathbf1_{\\{X_1=\\cdots=X_{k-1}=-1\\}}$. Untuk setiap horizon berhingga, $M_n=\\sum_{k=1}^nH_kX_k$ adalah martingale integrabel: $H_k$ diketahui pada waktu $k-1$ dan $E[X_k\\mid\\mathcal F_{k-1}]=0$. Definisikan $\\tau$ sebagai waktu kemenangan pertama. Peluang belum menang setelah N lemparan adalah $P(\\tau>N)=2^{-N}$, sehingga $\\tau<\\infty$ hampir pasti tetapi tidak terbatas oleh konstanta deterministik. Pada $\\tau\\le N$, keuntungan akhir adalah $1$ karena kemenangan sebesar $2^{\\tau-1}$ menutup kerugian $2^{\\tau-1}-1$ sebelumnya. Pada $\\tau>N$, keuntungan adalah $-(2^N-1)$. Maka $E[M_{\\tau\\wedge N}]=(1-2^{-N})\\cdot1+2^{-N}[-(2^N-1)]=0$ untuk setiap N. Namun $M_{\\tau\\wedge N}\\to M_\\tau=1$ hampir pasti, sehingga $E[M_\\tau]=1$. Kontribusi negatif yang jarang tetapi besar mempunyai nilai absolut rata-rata $2^{-N}(2^N-1)\\to1$ dan tidak hilang dalam ekspektasi. Karena tidak ada dominator integrabel yang membenarkan pertukaran limit, teorema penghentian terbatas tidak berlaku pada $\\tau$.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
