import type { BookLessonContent } from "@/data/book-content-types";

/** Isometri Ito: konstruksi nonantisipatif, bukti L2, dan penyelesaian asli. */
export const itoIsometryContent:BookLessonContent={
  "intro": [
    "Isometri Itô menjawab pertanyaan yang tidak dapat diselesaikan dengan aturan integral Riemann biasa: bagaimana menghitung momen kedua integral terhadap lintasan Brownian yang hampir pasti tidak terdiferensialkan? Untuk integrand deterministik $H_t=t$, integral $\\int_0^1t\\,dW_t$ adalah peubah acak dengan mean nol dan varians $1/3$. Nilai itu berasal dari kuadrat integrand, bukan dari kuadrat integral biasa $\\left(\\int_0^1t\\,dt\\right)^2=1/4$.",
    "Konstruksi dimulai dari proses sederhana yang koefisiennya diketahui sebelum inkremen Brownian berikutnya terjadi. Sifat independensi inkremen dan varians $t-s$ menghasilkan identitas kuadrat secara eksak. Identitas tersebut kemudian memungkinkan integral diperluas ke penutupan $L^2$ dari proses sederhana tanpa memilih nilai lintasan integral secara sembarang.",
    "Pembahasan membedakan integrand deterministik dari integrand acak yang dapat diprediksi, membuktikan ortogonalitas inkremen, dan menghitung galat pendekatan langkah. Syarat keterukuran terhadap informasi masa lalu penting: mengganti koefisien dengan fungsi yang bergantung pada inkremen masa depan membatalkan langkah ekspektasi bersyarat yang dipakai dalam pembuktian.",
    "Rujukan: Bernt Øksendal, Stochastic Differential Equations: An Introduction with Applications, edisi ke-6, Springer (2003), pembahasan integral Itô; Ioannis Karatzas dan Steven E. Shreve, Brownian Motion and Stochastic Calculus, edisi ke-2, Springer (1991), konstruksi integral stokastik. Pernyataan dan pembuktian yang dipakai di halaman ini ditulis lengkap di bawah asumsi yang dinyatakan."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Proses Sederhana Teradaptasi",
      "statement": "Pada ruang probabilitas dengan filtrasi $(\\mathcal F_t)_{0\\le t\\le T}$ yang memuat informasi Brownian hingga waktu $t$, proses sederhana teradaptasi berbentuk $H_t=\\sum_{i=0}^{m-1}H_i\\mathbf1_{(t_i,t_{i+1}]}(t)$ untuk partisi $0=t_0<\\cdots<t_m=T$, dengan setiap $H_i$ terukur terhadap $\\mathcal F_{t_i}$ dan $E[H_i^2]<\\infty$. Nilai pada $t=0$ tidak memengaruhi integral waktu.",
      "explanation": "Koefisien pada setiap interval ditentukan pada ujung kiri; ia tidak boleh menggunakan inkremen Brownian yang baru diketahui di ujung kanan."
    },
    {
      "kind": "definition",
      "title": "Integral Itô Proses Sederhana",
      "statement": "Untuk Brownian motion standar $(W_t)$ yang diadaptasi terhadap filtrasi dengan inkremen $W_{t_{i+1}}-W_{t_i}$ independen dari $\\mathcal F_{t_i}$, integral Itô proses sederhana $H$ didefinisikan oleh $I_T(H)=\\int_0^T H_t\\,dW_t:=\\sum_{i=0}^{m-1}H_i(W_{t_{i+1}}-W_{t_i})$.",
      "explanation": "Definisi ini memakai perkalian koefisien yang diketahui sebelum inkremen terjadi, bukan evaluasi di ujung kanan."
    },
    {
      "kind": "definition",
      "title": "Ruang Integrand Kuadrat-Terintegralkan",
      "statement": "Tuliskan $\\mathcal H_T^2$ untuk penutupan kelas proses sederhana teradaptasi dalam seminorma $\\|H\\|_{\\mathcal H_T^2}^2=E[\\int_0^T|H_t|^2\\,dt]$, dengan proses yang sama hampir di mana-mana terhadap $dt\\otimes dP$ diidentifikasi. Jadi setiap $H\\in\\mathcal H_T^2$ mempunyai pendekatan sederhana $H^{(n)}$ dengan $E\\int_0^T|H^{(n)}_t-H_t|^2dt\\to0$.",
      "explanation": "Syarat kuadrat-terintegralkan mengendalikan momen kedua; keteradaptasian proses pendekatan menjamin sifat nonantisipatif."
    },
    {
      "kind": "definition",
      "title": "Integral Itô sebagai Limit Kuadrat-Rata-Rata",
      "statement": "Untuk $H\\in\\mathcal H_T^2$, pilih pendekatan sederhana teradaptasi $H^{(n)}\\to H$ dalam $\\mathcal H_T^2$. Integral Itô didefinisikan sebagai limit dalam $L^2(P)$, yakni $I_T(H)=\\lim_{n\\to\\infty}I_T(H^{(n)})$. Keberadaan dan ketakbergantungan terhadap pendekatan dibuktikan melalui isometri di bawah.",
      "explanation": "Konvergensi $L^2$ berarti ekspektasi kuadrat selisih menuju nol; definisi tidak mensyaratkan konvergensi untuk setiap lintasan."
    },
    {
      "kind": "proposition",
      "title": "Mean Nol Integral Sederhana",
      "statement": "Jika $H$ proses sederhana teradaptasi dengan $E[H_i^2]<\\infty$ dan $W$ Brownian standar dengan inkremen independen dari $\\mathcal F_{t_i}$, maka $E[I_T(H)]=0$.",
      "proof": [
        "Diketahui $I_T(H)=\\sum_{i=0}^{m-1}H_i\\Delta W_i$, dengan $\\Delta W_i=W_{t_{i+1}}-W_{t_i}$. Setiap suku integrabel: ketaksamaan Cauchy–Schwarz dan $E[(\\Delta W_i)^2]=t_{i+1}-t_i<\\infty$ memberi $E|H_i\\Delta W_i|\\le(EH_i^2)^{1/2}(E(\\Delta W_i)^2)^{1/2}<\\infty$.",
        "Karena $H_i$ terukur terhadap $\\mathcal F_{t_i}$ dan $\\Delta W_i$ independen dari $\\mathcal F_{t_i}$ dengan mean nol, $E[H_i\\Delta W_i]=E[H_iE(\\Delta W_i\\mid\\mathcal F_{t_i})]=E[H_i\\cdot0]=0$. Linearitas ekspektasi pada jumlah hingga memberi $E[I_T(H)]=\\sum_i0=0$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Isometri Itô untuk Proses Sederhana",
      "statement": "Dengan hipotesis definisi integral sederhana, berlaku $E[|I_T(H)|^2]=E[\\int_0^T|H_t|^2\\,dt]=\\sum_{i=0}^{m-1}(t_{i+1}-t_i)E[H_i^2]$.",
      "proof": [
        "Tuliskan $\\Delta W_i=W_{t_{i+1}}-W_{t_i}$. Dengan mengembangkan kuadrat jumlah hingga diperoleh $E[I_T(H)^2]=\\sum_iE[H_i^2(\\Delta W_i)^2]+2\\sum_{i<j}E[H_i\\Delta W_iH_j\\Delta W_j]$. Semua suku integrabel; untuk suku silang gunakan Cauchy–Schwarz pada peubah $H_i\\Delta W_i$ dan $H_j\\Delta W_j$, yang memiliki momen kedua hingga.",
        "Untuk $i<j$, peubah $H_i\\Delta W_iH_j$ terukur terhadap $\\mathcal F_{t_j}$, karena $t_{i+1}\\le t_j$. Dengan independensi inkremen mendatang, $E[H_i\\Delta W_iH_j\\Delta W_j]=E[H_i\\Delta W_iH_jE(\\Delta W_j\\mid\\mathcal F_{t_j})]=0$. Ini menjelaskan secara tepat mengapa semua suku silang hilang, bahkan ketika koefisien $H_j$ acak.",
        "Untuk suku diagonal, $E[(\\Delta W_i)^2\\mid\\mathcal F_{t_i}]=t_{i+1}-t_i$ karena $\\Delta W_i\\sim N(0,t_{i+1}-t_i)$ dan independen dari informasi masa lalu. Oleh karena itu $E[H_i^2(\\Delta W_i)^2]=(t_{i+1}-t_i)E[H_i^2]$.",
        "Di sisi lain, $\\int_0^T H_t^2dt=\\sum_iH_i^2(t_{i+1}-t_i)$ hampir pasti, karena $H$ konstan pada setiap interval partisi. Mengambil ekspektasi dan membandingkan dengan hasil diagonal menghasilkan identitas yang dinyatakan. $\\square$"
      ],
      "explanation": "Kesamaan ini adalah identitas ekspektasi kuadrat, bukan identitas lintasan $I_T(H)^2=int H^2dt$."
    },
    {
      "kind": "theorem",
      "title": "Eksistensi dan Ketunggalan Perluasan Integral Itô",
      "statement": "Untuk setiap $H\\in\\mathcal H_T^2$ terdapat tepat satu peubah acak $I_T(H)\\in L^2(P)$ sebagai limit integral proses sederhana yang mendekati $H$. Pemetaan $I_T:\\mathcal H_T^2\\to L^2(P)$ linear dan memenuhi $E[I_T(H)]=0$ serta $E[I_T(H)^2]=E\\int_0^TH_t^2dt$.",
      "proof": [
        "Ambil $H^{(n)}$ sederhana teradaptasi dengan $\\|H^{(n)}-H\\|_{\\mathcal H_T^2}\\to0$. Karena selisih dua proses sederhana tetap sederhana, isometri sederhana memberi $\\|I_T(H^{(n)})-I_T(H^{(m)})\\|_{L^2(P)}^2=\\|H^{(n)}-H^{(m)}\\|_{\\mathcal H_T^2}^2$. Ketaksamaan segitiga menunjukkan ruas kanan menuju nol saat $m,n\\to\\infty$.",
        "Ruang $L^2(P)$ lengkap, sehingga terdapat $Y\\in L^2(P)$ dengan $I_T(H^{(n)})\\to Y$ dalam $L^2(P)$. Jika $K^{(n)}$ pendekatan sederhana lain untuk $H$, maka $\\|I_T(H^{(n)})-I_T(K^{(n)})\\|_2=\\|H^{(n)}-K^{(n)}\\|_{\\mathcal H_T^2}\\le\\|H^{(n)}-H\\|+\\|K^{(n)}-H\\|\\to0$. Limit kedua pendekatan sama, sehingga definisi tidak bergantung pada pilihan.",
        "Linearitas berlaku untuk proses sederhana dan tetap berlaku setelah mengambil limit $L^2$. Norma kontinu terhadap konvergensi dalam ruang bernorma; dengan mengambil limit pada isometri sederhana diperoleh $\\|Y\\|_2^2=\\|H\\|_{\\mathcal H_T^2}^2$. Selain itu, $|E[Y]-E[I_T(H^{(n)})]|\\le\\|Y-I_T(H^{(n)})\\|_2\\to0$, sedangkan mean integral sederhana nol. Dengan demikian $E[Y]=0$ dan seluruh klaim terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Identitas Kovarians Integral Itô",
      "statement": "Untuk $H,K\\in\\mathcal H_T^2$, berlaku $E[I_T(H)I_T(K)]=E[\\int_0^TH_tK_t\\,dt]$. Kedua integral mempunyai mean nol, sehingga ruas kiri juga merupakan kovariansnya.",
      "proof": [
        "Karena $\\mathcal H_T^2$ ruang vektor, $H+K$ dan $H-K$ berada di dalamnya. Linearitas integral dan isometri memberi $E[(I(H)+I(K))^2]=E\\int(H+K)^2dt$ dan $E[(I(H)-I(K))^2]=E\\int(H-K)^2dt$.",
        "Kurangkan identitas kedua dari yang pertama. Pada ruas kiri tersisa $4E[I(H)I(K)]$, sedangkan pada ruas kanan tersisa $4E\\int HKdt$. Kedua ekspektasi terdefinisi: Cauchy–Schwarz memberi $E\\int|HK|dt\\le\\|H\\|_{\\mathcal H_T^2}\\|K\\|_{\\mathcal H_T^2}<\\infty$. Membagi dengan $4$ menghasilkan klaim. $\\square$"
      ]
    },
    {
      "kind": "corollary",
      "title": "Ortogonalitas dan Batas Peluang Integral Itô",
      "statement": "Jika $H,K\\in\\mathcal H_T^2$ dan $H_tK_t=0$ untuk hampir semua $(t,\\omega)$, maka $\\operatorname{Cov}(I_T(H),I_T(K))=0$. Selain itu, untuk $a>0$, $P(|I_T(H)|\\ge a)\\le a^{-2}E\\int_0^TH_t^2dt$. Ortogonalitas tidak secara umum menjamin independensi apabila integrand acak.",
      "proof": [
        "Jika $HK=0$ hampir di mana-mana, identitas kovarians menghasilkan $E[I(H)I(K)]=E\\int HKdt=0$. Karena kedua mean nol, kovariansnya nol. Kesimpulan ini tidak mengubah definisi independensi dan tidak mengasumsikan distribusi bersama Gaussian untuk integrand acak.",
        "Untuk batas peluang, peubah $I(H)^2$ tidak negatif. Ketaksamaan Markov memberi $P(|I(H)|\\ge a)=P(I(H)^2\\ge a^2)\\le E[I(H)^2]/a^2$. Substitusi isometri menyelesaikan pembuktian. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Koefisien Sederhana yang Diketahui di Awal",
      "forDefinition": "Proses Sederhana Teradaptasi",
      "problem": "Ambil $H_t=2\\mathbf1_{(0,1/2]}(t)-\\mathbf1_{(1/2,1]}(t)$. Periksa sifat teradaptasi dan hitung $\\int_0^1H_t^2dt$.",
      "solution": [
        "Diketahui partisi $0<1/2<1$ dan koefisien $H_0=2$, $H_1=-1$. Kedua koefisien konstan, sehingga terukur terhadap setiap $\\mathcal F_t$ dan memiliki momen kedua hingga. Proses ini memenuhi definisi proses sederhana teradaptasi.",
        "Pada interval pertama $H_t^2=4$, sedangkan pada interval kedua $H_t^2=1$. Integral waktunya adalah $4(1/2)+1(1/2)=5/2$. Karena hasil deterministik, ekspektasinya juga $5/2$.",
        "Pemeriksaan: kedua interval memiliki panjang total $1$ dan masing-masing kontribusi nonnegatif. Nilai $5/2$ akan menjadi momen kedua integral Itô, bukan nilai integral stokastiknya sendiri."
      ],
      "conclusion": "Proses sederhana tersebut sah dan energi kuadratnya 5/2."
    },
    {
      "title": "Integral Itô dari Fungsi Indikator",
      "forDefinition": "Integral Itô Proses Sederhana",
      "problem": "Tentukan $\\int_0^1\\mathbf1_{(1/4,3/4]}(t)\\,dW_t$ dan momen keduanya.",
      "solution": [
        "Diketahui Brownian standar dan proses deterministik yang bernilai satu hanya pada $(1/4,3/4]$. Pilih partisi $0,1/4,3/4,1$; koefisien berturut-turut $0,1,0$, semuanya diketahui pada ujung kiri interval.",
        "Menurut definisi integral sederhana, integral sama dengan $0(W_{1/4}-W_0)+1(W_{3/4}-W_{1/4})+0(W_1-W_{3/4})=W_{3/4}-W_{1/4}$.",
        "Inkremen Brownian pada interval sepanjang $1/2$ berdistribusi $N(0,1/2)$, sehingga mean integral nol dan momen keduanya $1/2$. Pemeriksaan melalui isometri memberi $\\int_{1/4}^{3/4}1^2dt=1/2$, sesuai distribusi inkremen."
      ],
      "conclusion": "Integral sama dengan inkremen Brownian pada interval tersebut dan memiliki varians 1/2."
    },
    {
      "title": "Fungsi Deterministik sebagai Limit Proses Sederhana",
      "forDefinition": "Ruang Integrand Kuadrat-Terintegralkan",
      "problem": "Tunjukkan $H_t=t$ pada $[0,1]$ berada dalam $\\mathcal H_1^2$ dengan aproksimasi langkah kiri.",
      "solution": [
        "Ambil partisi seragam $t_k=k/n$ dan $H_t^{(n)}=k/n$ untuk $k/n<t\\le(k+1)/n$. Setiap koefisien deterministik, sehingga $H^{(n)}$ merupakan proses sederhana teradaptasi.",
        "Norma galat kuadrat adalah $\\|H-H^{(n)}\\|_{\\mathcal H_1^2}^2=\\sum_{k=0}^{n-1}\\int_{k/n}^{(k+1)/n}(t-k/n)^2dt$. Dengan substitusi $u=t-k/n$, setiap integral bernilai $\\int_0^{1/n}u^2du=1/(3n^3)$.",
        "Penjumlahan $n$ interval memberi $\\|H-H^{(n)}\\|_{\\mathcal H_1^2}^2=1/(3n^2)\\to0$. Selain itu $\\int_0^1t^2dt=1/3<\\infty$. Kedua pemeriksaan membuktikan $H$ berada dalam penutupan yang didefinisikan."
      ],
      "conclusion": "Fungsi t adalah integrand sah, dan galat kuadrat aproksimasi langkah kiri tepat 1/(3n²)."
    },
    {
      "title": "Definisi Integral melalui Limit $L^2$",
      "forDefinition": "Integral Itô sebagai Limit Kuadrat-Rata-Rata",
      "problem": "Untuk $H_t=t$, nyatakan pendekatan integral sederhana dan hitung varians limitnya.",
      "solution": [
        "Gunakan $H^{(n)}$ dari contoh sebelumnya. Integral sederhana adalah $I_n=\\sum_{k=0}^{n-1}(k/n)(W_{(k+1)/n}-W_{k/n})$. Setiap koefisien memakai informasi pada waktu $k/n$, sehingga definisi integral Itô berlaku.",
        "Isometri pada selisih pendekatan memberi $E[(I_n-I_m)^2]=\\|H^{(n)}-H^{(m)}\\|_{\\mathcal H_1^2}^2\\to0$ untuk $m,n\\to\\infty$. Karena $L^2(P)$ lengkap, $I_n$ mempunyai limit yang didefinisikan sebagai $\\int_0^1t\\,dW_t$.",
        "Isometri perluasan menghasilkan $E[I^2]=\\int_0^1t^2dt=1/3$ dan $E[I]=0$. Hasil ini bukan $(\\int_0^1t\\,dt)^2=1/4$; objek yang diintegralkan adalah inkremen Brownian, bukan $dt$."
      ],
      "conclusion": "Limit integral sederhana ada dalam L² dan mempunyai mean nol serta varians 1/3."
    },
    {
      "title": "Integrand Acak Nonantisipatif",
      "problem": "Untuk $H_t=W_{1/2}\\mathbf1_{(1/2,1]}(t)$, hitung mean dan varians integral Itô serta periksa apakah hasilnya normal.",
      "solution": [
        "Diketahui $W$ Brownian standar dan $H_t=0$ sebelum atau pada $1/2$, lalu bernilai $W_{1/2}$ setelahnya. Koefisien $W_{1/2}$ terukur terhadap $\\mathcal F_{1/2}$ dan $E[W_{1/2}^2]=1/2$, sehingga integrand sederhana teradaptasi dan kuadrat-terintegralkan.",
        "Definisi integral memberi $I=W_{1/2}(W_1-W_{1/2})$. Kedua faktor independen, masing-masing berdistribusi $N(0,1/2)$. Oleh karena itu $E[I]=0$ dan $E[I^2]=E[W_{1/2}^2]E[(W_1-W_{1/2})^2]=(1/2)(1/2)=1/4$. Isometri memberikan hasil sama: $E\\int_{1/2}^1W_{1/2}^2dt=(1/2)(1/2)=1/4$.",
        "Distribusi $I$ tidak normal. Momen keempatnya $E[I^4]=E[W_{1/2}^4]E[(W_1-W_{1/2})^4]=(3/4)(3/4)=9/16$. Jika $I$ normal bermean nol dan varians $1/4$, momen keempatnya seharusnya $3(1/4)^2=3/16$. Ketidaksamaan $9/16\\ne3/16$ membantah kenormalan."
      ],
      "conclusion": "Integral memiliki varians 1/4 tetapi tidak berdistribusi normal."
    },
    {
      "title": "Kovarians Dua Integral Deterministik",
      "problem": "Hitung $\\operatorname{Cov}(\\int_0^1dW_t,\\int_0^1t\\,dW_t)$.",
      "solution": [
        "Diketahui $H_t=1$ dan $K_t=t$ deterministik pada $[0,1]$, dengan $\\int_0^1H_t^2dt=1$ dan $\\int_0^1K_t^2dt=1/3$. Keduanya berada dalam $\\mathcal H_1^2$, sehingga identitas kovarians dapat diterapkan.",
        "Menurut identitas tersebut, $\\operatorname{Cov}(I(H),I(K))=E\\int_0^1(1)(t)dt=\\int_0^1t\\,dt=1/2$. Kedua mean nol sehingga tidak diperlukan suku koreksi mean.",
        "Sebagai pemeriksaan, ketaksamaan Cauchy–Schwarz untuk kovarians memberi $|\\operatorname{Cov}|\\le\\sqrt{1\\cdot1/3}=1/\\sqrt3\\approx0{,}577$. Nilai $1/2$ memenuhi batas tersebut."
      ],
      "conclusion": "Kovarians kedua integral adalah 1/2."
    },
    {
      "title": "Ortogonalitas Dua Inkremen",
      "problem": "Ambil $H_t=\\mathbf1_{(0,1/2]}(t)$ dan $K_t=\\mathbf1_{(1/2,1]}(t)$. Tentukan kovarians integralnya.",
      "solution": [
        "Kedua fungsi indikator mempunyai dukungan waktu yang tidak bertumpang tindih, sehingga $H_tK_t=0$ untuk hampir semua $t$. Keduanya deterministik dan kuadrat-terintegralkan.",
        "Identitas kovarians memberi $E[I(H)I(K)]=\\int_0^1H_tK_tdt=0$. Secara langsung, $I(H)=W_{1/2}-W_0$ dan $I(K)=W_1-W_{1/2}$; independensi inkremen Brownian pada interval yang tidak tumpang tindih memberi kovarians nol.",
        "Pada contoh ini independensi benar karena kedua integral adalah inkremen Brownian deterministik. Untuk integrand acak, kovarians nol saja tidak cukup untuk menyatakan independensi; kesimpulan harus dibatasi pada hipotesis yang tersedia."
      ],
      "conclusion": "Kovarians nol; dalam contoh khusus ini kedua integral juga independen."
    },
    {
      "title": "Galat Kuadrat-Rata-Rata Jumlah Itô",
      "problem": "Untuk $I=\\int_0^1t\\,dW_t$ dan jumlah kiri $I_n=\\sum_{k=0}^{n-1}(k/n)(W_{(k+1)/n}-W_{k/n})$, hitung $E[(I-I_n)^2]$.",
      "solution": [
        "Diketahui $H_t=t$ dan pendekatan sederhana $H^{(n)}_t=k/n$ pada interval $(k/n,(k+1)/n]$. Kedua integrand berada dalam $\\mathcal H_1^2$, sehingga linearitas dan isometri berlaku pada selisihnya.",
        "Diperoleh $E[(I-I_n)^2]=E[(I(H-H^{(n)}))^2]=\\int_0^1(H_t-H^{(n)}_t)^2dt=\\sum_{k=0}^{n-1}\\int_{k/n}^{(k+1)/n}(t-k/n)^2dt$.",
        "Setiap suku sama dengan $1/(3n^3)$; jumlah $n$ suku memberi $E[(I-I_n)^2]=1/(3n^2)$. Untuk $n=10$, galat kuadrat-rata-rata $1/300\\approx0{,}003333$, dan akar galat kuadrat-rata-rata $1/(10\\sqrt3)\\approx0{,}057735$."
      ],
      "conclusion": "Galat mean-square tepat 1/(3n²), sehingga jumlah kiri konvergen dalam L²."
    }
  ],
  "exercises": [
    {
      "prompt": "Untuk $H_t=2\\mathbf1_{(0,1/4]}(t)-\\mathbf1_{(1/4,1]}(t)$, hitung $E[\\int_0^1H_t\\,dW_t]$ dan $E[(\\int_0^1H_t\\,dW_t)^2]$.",
      "hint": "Gunakan mean nol dan isometri pada dua interval yang tidak tumpang tindih.",
      "answer": "Diketahui Brownian standar dan integrand deterministik dengan koefisien $2$ pada $(0,1/4]$ serta $-1$ pada $(1/4,1]$. Kedua koefisien terukur terhadap informasi awal interval dan kuadratnya terintegralkan, sehingga integral Itô terdefinisi. Definisi integral sederhana memberi $I=2(W_{1/4}-W_0)-(W_1-W_{1/4})$. Kedua inkremen mempunyai mean nol, sehingga $E[I]=2(0)-0=0$. Untuk momen kedua, isometri memberi $E[I^2]=\\int_0^{1/4}2^2dt+\\int_{1/4}^1(-1)^2dt=4(1/4)+1(3/4)=7/4$. Pemeriksaan langsung menggunakan independensi inkremen menghasilkan $\\operatorname{Var}(I)=4(1/4)+(3/4)=7/4$, konsisten dengan isometri. Nilai $7/4$ adalah varians integral, bukan hasil integral lintasan."
    },
    {
      "prompt": "Untuk integrand deterministik $H_t=t^2$ pada $[0,1]$, tentukan mean, varians, dan distribusi $\\int_0^1H_t\\,dW_t$.",
      "hint": "Periksa integrabilitas kuadrat, lalu gunakan isometri dan sifat Gaussian integral dengan integrand deterministik.",
      "answer": "Diketahui $H_t=t^2$, sehingga $\\int_0^1H_t^2dt=\\int_0^1t^4dt=1/5<\\infty$. Fungsi kontinu deterministik ini dapat didekati oleh fungsi langkah kiri dalam norma $L^2([0,1])$, sehingga termasuk $\\mathcal H_1^2$. Teorema perluasan memberi $E[I]=0$ dan isometri memberi $\\operatorname{Var}(I)=E[I^2]=1/5$. Untuk distribusi, setiap jumlah Itô sederhana dari koefisien deterministik merupakan kombinasi linear inkremen Gaussian independen, sehingga normal bermean nol dan varians $\\sum h_i^2\\Delta t_i$. Varians jumlah mendekati $1/5$ dan jumlah konvergen dalam $L^2$, maka fungsi karakteristiknya konvergen ke $\\exp(-u^2/10)$, yaitu fungsi karakteristik $N(0,1/5)$. Jadi $I\\sim N(0,1/5)$ dan simpangan bakunya $1/\\sqrt5$. Ini berbeda dari integral biasa $\\int_0^1t^2dt=1/3$, yang tidak menentukan nilai acak $I$."
    },
    {
      "prompt": "Ambil $H_t=(W_{1/2}^2-1/2)\\mathbf1_{(1/2,1]}(t)$. Hitung momen kedua integral Itô pada $[0,1]$.",
      "hint": "Gunakan $E[W_{1/2}^2]=1/2$ dan $E[W_{1/2}^4]=3/4$.",
      "answer": "Diketahui $H_t=0$ pada $(0,1/2]$ dan $H_t=W_{1/2}^2-1/2$ pada $(1/2,1]$. Koefisien terakhir $\\mathcal F_{1/2}$-terukur, sehingga proses tidak memakai informasi masa depan. Karena $W_{1/2}\\sim N(0,1/2)$ mempunyai momen keempat hingga, integrand berada dalam $\\mathcal H_1^2$. Isometri memberi $E[I^2]=E[\\int_{1/2}^1(W_{1/2}^2-1/2)^2dt]=(1/2)E[(W_{1/2}^2-1/2)^2]$. Kembangkan kuadrat dan gunakan momen Gaussian: $E[(W_{1/2}^2-1/2)^2]=E[W_{1/2}^4]-E[W_{1/2}^2]+1/4=3/4-1/2+1/4=1/2$. Karena itu $E[I^2]=(1/2)(1/2)=1/4$. Verifikasi langsung: $I=(W_{1/2}^2-1/2)(W_1-W_{1/2})$; kedua faktor independen, dan momen kedua inkremen terakhir $1/2$, sehingga hasilnya tetap $1/4$."
    },
    {
      "prompt": "Untuk $H_t=\\mathbf1_{(0,1/2]}(t)$ dan $K_t=\\mathbf1_{(1/2,1]}(t)$, buktikan integral Itô keduanya independen, bukan hanya tidak berkorelasi.",
      "hint": "Nyatakan kedua integral sebagai inkremen Brownian pada interval yang terpisah.",
      "answer": "Diketahui kedua integrand deterministik dan kuadrat-terintegralkan. Definisi integral sederhana memberi $I(H)=W_{1/2}-W_0=W_{1/2}$ dan $I(K)=W_1-W_{1/2}$. Kedua interval $(0,1/2]$ dan $(1/2,1]$ tidak saling tumpang tindih. Aksioma inkremen independen Brownian menyatakan bahwa $W_{1/2}-W_0$ independen dari $W_1-W_{1/2}$. Oleh karena itu kedua integral independen, yang lebih kuat daripada kovarians nol. Sebagai verifikasi tambahan, isometri kovarians menghasilkan $E[I(H)I(K)]=\\int_0^1H_tK_tdt=0$, sedangkan varians masing-masing adalah $1/2$. Perlu dibedakan: argumen independensi di sini berasal dari struktur inkremen Brownian, bukan dari kesimpulan keliru bahwa semua peubah acak berkorelasi nol pasti independen."
    },
    {
      "prompt": "Ambil $H_t=1$ dan $K_t=2t-1$ pada $[0,1]$. Tentukan kovarians dan jelaskan apakah kedua integral Itô independen.",
      "hint": "Hitung $int_0^1(2t-1)dt$ dan gunakan normalitas bersama untuk integrand deterministik.",
      "answer": "Diketahui $H_t=1$ dan $K_t=2t-1$ deterministik serta berada dalam $L^2([0,1])$. Identitas kovarians memberi $\\operatorname{Cov}(I(H),I(K))=\\int_0^1(2t-1)dt=[t^2-t]_0^1=0$. Variansnya adalah $\\operatorname{Var}(I(H))=\\int_0^11dt=1$ dan $\\operatorname{Var}(I(K))=\\int_0^1(2t-1)^2dt=\\int_0^1(4t^2-4t+1)dt=4/3-2+1=1/3$. Untuk membuktikan independensi, perhatikan setiap kombinasi linear $aI(H)+bI(K)=I(aH+bK)$ adalah integral dengan integrand deterministik, sehingga Gaussian. Pasangan $(I(H),I(K))$ karena itu normal bersama; untuk pasangan normal bersama, kovarians nol mengakibatkan independensi. Kesimpulannya kedua integral independen dengan distribusi marginal $N(0,1)$ dan $N(0,1/3)$. Tanpa normalitas bersama, kovarians nol tidak cukup."
    },
    {
      "prompt": "Gunakan isometri Itô untuk memberi batas atas $P(|\\int_0^1t\\,dW_t|\\ge3)$.",
      "hint": "Terapkan ketaksamaan Markov pada kuadrat integral.",
      "answer": "Diketahui $H_t=t$ deterministik dan $\\int_0^1t^2dt=1/3<\\infty$, sehingga integral $I=\\int_0^1t\\,dW_t$ terdefinisi dalam $L^2$. Isometri memberi $E[I^2]=1/3$. Karena $I^2$ tidak negatif, ketaksamaan Markov untuk ambang $9$ menyatakan $P(|I|\\ge3)=P(I^2\\ge9)\\le E[I^2]/9=(1/3)/9=1/27$. Nilai ini batas atas, bukan probabilitas eksak. Sebagai pemeriksaan, integral deterministik $I$ sebenarnya normal $N(0,1/3)$, sehingga peluang eksaknya dapat ditulis $2[1-\\Phi(3\\sqrt3)]$, jauh lebih kecil daripada $1/27$. Ketaksamaan Markov tetap sah tanpa memakai bentuk distribusi tersebut."
    },
    {
      "prompt": "Untuk $H_t=W_t$ pada $[0,1]$, hitung $E[(\\int_0^1W_t\\,dW_t)^2]$ dan jelaskan mengapa integrand ini sah.",
      "hint": "Gunakan $E[W_t^2]=t$ dan Tonelli untuk fungsi nonnegatif.",
      "answer": "Diketahui Brownian standar $W_t$ yang teradaptasi dan memiliki lintasan kontinu. Proses $H_t=W_t$ dapat didekati oleh proses langkah kiri $W_{k/n}$, sehingga merupakan integrand nonantisipatif. Kuadrat-integrabilitasnya diperiksa menggunakan Tonelli: $E\\int_0^1W_t^2dt=\\int_0^1E[W_t^2]dt=\\int_0^1t\\,dt=1/2<\\infty$. Oleh karena itu $H\\in\\mathcal H_1^2$ dan isometri memberi $E[(\\int_0^1W_t\\,dW_t)^2]=1/2$. Sebagai verifikasi melalui formula Itô untuk $f(x)=x^2$, diperoleh $\\int_0^1W_t\\,dW_t=(W_1^2-1)/2$. Karena $W_1\\sim N(0,1)$, $E[(W_1^2-1)^2]=E[W_1^4]-2E[W_1^2]+1=3-2+1=2$, sehingga momen kedua integral sama dengan $2/4=1/2$. Faktor koreksi $-1$ menunjukkan mengapa aturan kalkulus biasa tidak boleh langsung diterapkan."
    },
    {
      "prompt": "Untuk $I=\\int_0^1t\\,dW_t$, gunakan jumlah langkah kiri seragam $I_n$. Cari $n$ terkecil yang menjamin galat akar kuadrat-rata-rata paling besar $10^{-3}$.",
      "hint": "Gunakan identitas eksak $E[(I-I_n)^2]=1/(3n^2)$, bukan galat integral Riemann biasa.",
      "answer": "Diketahui $I_n=\\sum_{k=0}^{n-1}(k/n)(W_{(k+1)/n}-W_{k/n})$ dan $I=\\int_0^1t\\,dW_t$. Kedua integral menggunakan integrand teradaptasi. Isometri pada selisih memberi $E[(I-I_n)^2]=\\sum_{k=0}^{n-1}\\int_{k/n}^{(k+1)/n}(t-k/n)^2dt=n\\cdot1/(3n^3)=1/(3n^2)$. Akar galat kuadrat-rata-rata adalah $\\operatorname{RMSE}(n)=1/(\\sqrt3\\,n)$. Syarat $\\operatorname{RMSE}(n)\\le10^{-3}$ ekuivalen dengan $n\\ge1000/\\sqrt3\\approx577{,}350269$. Karena $n$ bilangan bulat positif, nilai terkecil adalah $n=578$. Pemeriksaan batas: $577<1000/\\sqrt3<578$, sehingga $n=577$ belum memenuhi, sedangkan $n=578$ memenuhi. Kesimpulan ini mengendalikan galat dalam norma $L^2$, bukan galat maksimum pada setiap lintasan Brownian."
    }
  ],
  "mistakes": [],
  "connections": []
};
