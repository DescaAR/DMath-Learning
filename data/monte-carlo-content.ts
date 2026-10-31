import type { BookLessonContent } from "@/data/book-content-types";

/** Monte Carlo: unbiased estimators, uncertainty, antithetic sampling, importance sampling. */
export const monteCarloContent: BookLessonContent = {
  "intro": [
    "Simulasi Monte Carlo menghitung besaran yang sulit diperoleh secara analitik dengan mengevaluasi fungsi pada sampel acak dari distribusi yang diketahui. Contohnya, nilai integral $\\int_0^1 x^2\\,dx=1/3$ dapat diperkirakan dari rata-rata kuadrat titik acak uniform pada $[0,1]$. Kesamaan ini muncul dari definisi ekspektasi, bukan dari anggapan bahwa titik acak selalu tersebar merata dalam setiap sampel kecil.",
    "Satu replikasi berarti satu realisasi peubah acak keluaran model; sejumlah $n$ replikasi independen menghasilkan estimator rata-rata. Kebenaran estimator, ketidakpastian galat, dan penghematan varians harus dipisahkan: estimator tak bias tetap dapat menghasilkan nilai yang jauh dari target pada sampel kecil, sedangkan penggunaan bilangan acak yang sama berulang tidak menghasilkan replikasi independen.",
    "Kita akan menurunkan estimator integral dan peluang, membuktikan tak bias serta ragamnya, menilai galat menggunakan ketaksamaan Chebyshev, lalu membandingkan sampling biasa, pasangan antitetik, dan importance sampling. Contoh dan latihan memakai angka yang dapat diperiksa kembali secara eksak, termasuk kasus distribusi diskret, biaya harapan, dan pemilihan banyak replikasi.",
    "Rujukan konseptual: Sheldon M. Ross, Simulation, edisi ke-5 (Academic Press, 2013); Art B. Owen, Monte Carlo Theory, Methods and Examples (2013, monograf daring penulis). Seluruh perhitungan, soal, dan pembuktian elementer berikut disusun secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Replikasi Monte Carlo dan Estimator Rata-Rata",
      "statement": "Misalkan $Y=g(X)$ integrabel dengan $\\mu=\\mathbb E[Y]$. Untuk replikasi $X_1,\\ldots,X_n$ yang saling independen dan berdistribusi sama seperti $X$, estimator Monte Carlo ialah $\\widehat\\mu_n=\\frac1n\\sum_{i=1}^n g(X_i)$. Replikasi yang identik nilainya karena menyalin satu keluaran tidak memenuhi asumsi independensi.",
      "explanation": "Jika $Y$ mengambil nilai 2 dan 6 dengan peluang masing-masing $1/2$, maka $\\mu=4$. Empat replikasi $(2,6,6,2)$ menghasilkan $\\widehat\\mu_4=4$, sedangkan $(2,2,2,2)$ menghasilkan 2; keduanya mungkin terjadi dan tidak mengubah nilai ekspektasi 4."
    },
    {
      "kind": "definition",
      "title": "Integral sebagai Ekspektasi Uniform",
      "statement": "Jika $U\\sim\\operatorname{Uniform}(a,b)$, $a<b$, dan $f$ integrabel pada $[a,b]$, maka $I=\\int_a^b f(x)\\,dx=(b-a)\\mathbb E[f(U)]$. Untuk $U_1,\\ldots,U_n$ iid uniform, estimator integral ialah $\\widehat I_n=\\frac{b-a}{n}\\sum_{i=1}^n f(U_i)$.",
      "explanation": "Pada $[0,1]$ dan $f(x)=x^2$, empat titik $(0,1/4,1/2,3/4)$ memberikan $\\widehat I_4=(0+1/16+1/4+9/16)/4=7/32$, sedangkan integral eksaknya $1/3$."
    },
    {
      "kind": "definition",
      "title": "Estimasi Peluang dengan Indikator",
      "statement": "Untuk kejadian $A$ pada ruang probabilitas, definisikan $\\mathbf1_A(\\omega)=1$ jika $\\omega\\in A$ dan 0 selainnya. Peluang $p=P(A)$ dapat diestimasi dengan $\\widehat p_n=\\frac1n\\sum_{i=1}^n\\mathbf1_A(X_i)$ untuk replikasi iid $X_i$.",
      "explanation": "Untuk $U\\sim\\operatorname{Uniform}(0,1)$ dan $A=\\{U\\le1/4\\}$, peluang sebenarnya $1/4$. Sampel $(0.1,0.2,0.4,0.8)$ menghasilkan dua keberhasilan dari empat, yaitu $\\widehat p_4=1/2$; perbedaan ini merupakan galat sampling, bukan perubahan peluang sebenarnya."
    },
    {
      "kind": "definition",
      "title": "Galat Monte Carlo dan Galat Baku",
      "statement": "Jika $Y$ mempunyai ragam hingga $\\sigma^2=\\operatorname{Var}(Y)$, galat estimasi adalah $\\widehat\\mu_n-\\mu$ dan galat baku teoretis estimator adalah $\\operatorname{SE}(\\widehat\\mu_n)=\\sigma/\\sqrt n$. Jika $\\sigma$ tidak diketahui, estimasi ragam sampel ialah $s^2=\\frac1{n-1}\\sum_{i=1}^n(Y_i-\\overline Y)^2$ untuk $n\\ge2$, dengan taksiran galat baku $s/\\sqrt n$.",
      "explanation": "Untuk keluaran $(1,3,5)$, rata-rata sampel 3, ragam sampel $s^2=[(1-3)^2+(3-3)^2+(5-3)^2]/2=4$, dan galat baku taksiran $2/\\sqrt3$. Galat baku bukan galat aktual karena $\\mu$ mungkin belum diketahui."
    },
    {
      "kind": "proposition",
      "title": "Ketakbiasan dan Ragam Rata-Rata",
      "statement": "Jika $Y_1,\\ldots,Y_n$ iid dengan $\\mathbb E[Y_i]=\\mu$ dan $\\operatorname{Var}(Y_i)=\\sigma^2<\\infty$, maka $\\mathbb E[\\widehat\\mu_n]=\\mu$, $\\operatorname{Var}(\\widehat\\mu_n)=\\sigma^2/n$, dan $\\operatorname{MSE}(\\widehat\\mu_n)=\\sigma^2/n$.",
      "proof": [
        "Diketahui $\\widehat\\mu_n=n^{-1}\\sum_{i=1}^nY_i$. Linearitas ekspektasi memberi $\\mathbb E[\\widehat\\mu_n]=n^{-1}\\sum_{i=1}^n\\mathbb E[Y_i]=n^{-1}(n\\mu)=\\mu$. Jadi bias estimator sama dengan nol tanpa perlu menganggap $Y_i$ normal.",
        "Independensi menyebabkan $\\operatorname{Cov}(Y_i,Y_j)=0$ untuk $i\\ne j$. Rumus ragam jumlah menghasilkan $\\operatorname{Var}(\\widehat\\mu_n)=n^{-2}\\sum_{i=1}^n\\operatorname{Var}(Y_i)=n^{-2}(n\\sigma^2)=\\sigma^2/n$. Jika independensi dihapus, suku kovarians tidak boleh diabaikan.",
        "Identitas $\\operatorname{MSE}(T)=\\operatorname{Var}(T)+(\\mathbb E[T]-\\mu)^2$ berlaku bagi estimator berkuadrat integrabel. Dengan bias nol, $\\operatorname{MSE}(\\widehat\\mu_n)=\\sigma^2/n$. Ketiga pernyataan terbukti. $\\square$"
      ],
      "explanation": "Penurunan ragam berorde $1/n$ berarti galat baku berorde $1/\\sqrt n$: memperkecil galat baku menjadi separuh memerlukan empat kali jumlah replikasi, bila ragam per replikasi tetap."
    },
    {
      "kind": "proposition",
      "title": "Ragam Estimator Integral Uniform",
      "statement": "Jika $U_i$ iid uniform pada $[a,b]$, $a<b$, dan $\\mathbb E[f(U)^2]<\\infty$, maka $\\widehat I_n=(b-a)n^{-1}\\sum_i f(U_i)$ tak bias bagi $I=\\int_a^bf(x)\\,dx$ dan $\\operatorname{Var}(\\widehat I_n)=(b-a)^2\\operatorname{Var}(f(U))/n$.",
      "proof": [
        "Karena densitas uniform sama dengan $1/(b-a)$ pada $[a,b]$, definisi ekspektasi memberi $\\mathbb E[f(U)]=(b-a)^{-1}\\int_a^bf(x)\\,dx=I/(b-a)$. Hipotesis integrabilitas memastikan ekspektasi terdefinisi.",
        "Linearitas ekspektasi memberi $\\mathbb E[\\widehat I_n]=(b-a)\\mathbb E[f(U)]=I$. Selanjutnya, perkalian konstanta mengubah ragam dengan kuadrat konstanta. Replikasi $f(U_i)$ independen karena $U_i$ independen.",
        "Dengan proposisi rata-rata, $\\operatorname{Var}(\\widehat I_n)=(b-a)^2\\operatorname{Var}(f(U))/n$. Nilai ini adalah ragam sampling, bukan kesalahan pembulatan komputasi. $\\square$"
      ],
      "explanation": "Pada $f(x)=x^2$ di $[0,1]$, $\\mathbb E[U^2]=1/3$ dan $\\mathbb E[U^4]=1/5$, sehingga ragam per replikasi $4/45$ dan ragam rata-rata $4/(45n)$."
    },
    {
      "kind": "theorem",
      "title": "Jaminan Galat melalui Chebyshev",
      "statement": "Jika $Y_i$ iid dengan mean $\\mu$ dan ragam $\\sigma^2<\\infty$, maka untuk setiap $\\varepsilon>0$, $P(|\\widehat\\mu_n-\\mu|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$. Khususnya, $\\widehat\\mu_n\\to\\mu$ dalam probabilitas.",
      "proof": [
        "Diketahui $Z=(\\widehat\\mu_n-\\mu)^2\\ge0$. Ketaksamaan Markov untuk peubah nonnegatif $Z$ menyatakan $P(Z\\ge\\varepsilon^2)\\le\\mathbb E[Z]/\\varepsilon^2$. Peristiwa di ruas kiri persis $|\\widehat\\mu_n-\\mu|\\ge\\varepsilon$.",
        "Proposisi sebelumnya memberi $\\mathbb E[Z]=\\operatorname{MSE}(\\widehat\\mu_n)=\\sigma^2/n$. Substitusi menghasilkan $P(|\\widehat\\mu_n-\\mu|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)$.",
        "Untuk $\\varepsilon>0$ tetap, ruas kanan menuju nol ketika $n\\to\\infty$. Inilah definisi konvergensi dalam probabilitas. Pembuktian tidak mengklaim konvergensi hampir pasti ataupun interval kepercayaan normal eksak. $\\square$"
      ],
      "explanation": "Batas Chebyshev sering konservatif tetapi berlaku tanpa asumsi normalitas. Agar batas peluang galat tidak melebihi $\\alpha>0$, cukup pilih $n\\ge\\sigma^2/(\\alpha\\varepsilon^2)$."
    },
    {
      "kind": "proposition",
      "title": "Estimasi Kejadian Bernoulli",
      "statement": "Jika $A_i=\\mathbf1_A(X_i)$ iid dengan $p=P(A)$, maka $\\mathbb E[\\widehat p_n]=p$ dan $\\operatorname{Var}(\\widehat p_n)=p(1-p)/n\\le1/(4n)$.",
      "proof": [
        "Setiap indikator hanya bernilai nol atau satu, dengan $P(A_i=1)=p$. Oleh sebab itu $\\mathbb E[A_i]=0(1-p)+1p=p$ dan $\\mathbb E[A_i^2]=p$.",
        "Ragam indikator ialah $\\operatorname{Var}(A_i)=\\mathbb E[A_i^2]-(\\mathbb E[A_i])^2=p-p^2=p(1-p)$. Dengan independensi, proposisi rata-rata menghasilkan mean $p$ dan ragam $p(1-p)/n$.",
        "Identitas $p(1-p)=1/4-(p-1/2)^2\\le1/4$ berlaku untuk $0\\le p\\le1$. Ketaksamaan ragam dan ketakbiasan terbukti. $\\square$"
      ],
      "explanation": "Batas $1/(4n)$ memungkinkan perkiraan konservatif sebelum peluang $p$ diketahui, tetapi tidak menjamin bahwa hasil setiap sampel dekat dengan $p$."
    },
    {
      "kind": "proposition",
      "title": "Pembangkitan Diskret melalui Invers Kumulatif",
      "statement": "Misalkan $x_1<\\cdots<x_m$ dan $p_j\\ge0$ dengan $\\sum_jp_j=1$. Definisikan $F_j=\\sum_{k=1}^jp_k$, $F_0=0$, dan $X=x_j$ apabila $F_{j-1}<U\\le F_j$, dengan $U\\sim\\operatorname{Uniform}(0,1)$. Maka $P(X=x_j)=p_j$; interval dengan $p_j=0$ kosong.",
      "proof": [
        "Untuk setiap $j$, peristiwa $\\{X=x_j\\}$ sama dengan $\\{F_{j-1}<U\\le F_j\\}$ berdasarkan aturan pemetaan. Batas kumulatif memenuhi $0=F_0\\le F_1\\le\\cdots\\le F_m=1$.",
        "Distribusi uniform pada $(0,1)$ memberikan peluang panjang interval, sehingga $P(F_{j-1}<U\\le F_j)=F_j-F_{j-1}=p_j$. Titik batas tidak mengubah peluang karena peubah uniform kontinu.",
        "Interval tersebut saling lepas dan menutupi $(0,1]$ kecuali titik nol yang berpeluang nol. Distribusi hasil tepat sama dengan distribusi diskret yang ditentukan. $\\square$"
      ],
      "explanation": "Pemilihan satu nilai uniform untuk banyak skenario berbeda harus mengikuti aturan pemetaan yang ditentukan; jangan menganggap hasil skenario independen jika menggunakan nilai acak bersama."
    },
    {
      "kind": "proposition",
      "title": "Pasangan Antitetik untuk Fungsi Monoton",
      "statement": "Jika $U\\sim\\operatorname{Uniform}(0,1)$, $f$ monoton tidak menurun dan $\\mathbb E[f(U)^2]<\\infty$, maka $\\operatorname{Cov}(f(U),f(1-U))\\le0$. Estimator $T=[f(U)+f(1-U)]/2$ tak bias bagi $\\mathbb E[f(U)]$ dan ragamnya tidak lebih besar daripada rata-rata dua evaluasi independen.",
      "proof": [
        "Ambil $U'$ salinan independen dari $U$. Untuk fungsi $a(u)=f(u)$ yang tidak menurun dan $b(u)=f(1-u)$ yang tidak menaik, berlaku $(a(U)-a(U'))(b(U)-b(U'))\\le0$ pada setiap pasangan nilai. Ekspektasi hasil kali ini juga tidak positif.",
        "Dengan mengembangkan hasil kali dan menggunakan independensi $U,U'$, diperoleh $2\\operatorname{Cov}(a(U),b(U))\\le0$. Karena $1-U$ juga uniform, $\\mathbb E[f(1-U)]=\\mathbb E[f(U)]$; linearitas menunjukkan $\\mathbb E[T]=\\mathbb E[f(U)]$.",
        "Tuliskan $v=\\operatorname{Var}(f(U))$. Kedua suku pada $T$ mempunyai ragam $v$, sehingga $\\operatorname{Var}(T)=[2v+2\\operatorname{Cov}(f(U),f(1-U))]/4\\le v/2$. Dua evaluasi independen mempunyai ragam rata-rata tepat $v/2$. Semua klaim terbukti. $\\square$"
      ],
      "explanation": "Syarat monoton penting bagi jaminan kovarians nonpositif. Dua evaluasi antitetik tidak independen, sehingga galat bakunya tidak boleh dihitung seolah-olah berasal dari dua replikasi independen."
    },
    {
      "kind": "proposition",
      "title": "Importance Sampling yang Tak Bias",
      "statement": "Misalkan $I=\\int_D f(x)p(x)\\,dx$, $q$ densitas yang positif hampir di mana-mana pada himpunan tempat $|f|p>0$, dan $\\int_D|f|p<\\infty$. Untuk $X_i$ iid dari $q$, estimator $\\widehat I_n=n^{-1}\\sum_i f(X_i)p(X_i)/q(X_i)$ tak bias bagi $I$. Jika $\\int_D f(x)^2p(x)^2/q(x)\\,dx<\\infty$, ragamnya adalah $n^{-1}[\\int_D f^2p^2/q-I^2]$.",
      "proof": [
        "Definisikan $W(X)=f(X)p(X)/q(X)$ pada titik dengan $q(X)>0$. Asumsi dukungan memastikan tidak ada bagian integral $fp$ yang hilang ketika sampling menggunakan $q$.",
        "Ekspektasi terhadap $q$ adalah $\\mathbb E_q[W(X)]=\\int_D[f(x)p(x)/q(x)]q(x)\\,dx=\\int_Df(x)p(x)\\,dx=I$. Dengan linearitas ekspektasi, rata-rata $n$ bobot independen tak bias.",
        "Jika momen kedua hingga, $\\mathbb E_q[W^2]=\\int_Df(x)^2p(x)^2/q(x)\\,dx$. Ragam $W$ adalah momen kedua dikurangi $I^2$, lalu independensi membagi ragam rata-rata dengan $n$. Pembuktian selesai. $\\square$"
      ],
      "explanation": "Mengganti distribusi sampling tanpa membagi dengan densitas proposal menghasilkan estimator bagi distribusi yang salah. Ragam dapat lebih kecil atau lebih besar tergantung pilihan $q$."
    }
  ],
  "examples": [
    {
      "title": "Contoh 1 · Empat Replikasi Diskret",
      "problem": "Biaya $Y$ bernilai 2 atau 6 dengan peluang sama. Dari keluaran $(2,6,6,2)$, tentukan estimasi dan bandingkan dengan mean sebenarnya.",
      "solution": [
        "Diketahui $P(Y=2)=P(Y=6)=1/2$, sehingga $\\mu=\\mathbb E[Y]=2(1/2)+6(1/2)=4$. Empat keluaran adalah replikasi yang digunakan untuk menghitung rata-rata empiris.",
        "Estimator sampel bernilai $\\widehat\\mu_4=(2+6+6+2)/4=16/4=4$. Nilai ini sama dengan mean sebenarnya untuk sampel khusus ini; tidak berarti estimator selalu tepat pada setiap empat replikasi.",
        "Sebagai pemeriksaan, keluaran $(2,2,2,2)$ juga mungkin dengan peluang $(1/2)^4=1/16$ dan menghasilkan estimator 2. Perbedaan antarsampel menjelaskan mengapa ragam dan jumlah replikasi diperlukan."
      ],
      "forDefinition": "Replikasi Monte Carlo dan Estimator Rata-Rata"
    },
    {
      "title": "Contoh 2 · Integral Kuadrat",
      "problem": "Dengan titik uniform $(0,1/4,1/2,3/4)$ pada $[0,1]$, estimasikan $\\int_0^1x^2\\,dx$ dan hitung galatnya.",
      "solution": [
        "Diketahui $a=0$, $b=1$, $f(x)=x^2$, dan $n=4$. Faktor panjang interval $b-a=1$. Nilai fungsi pada titik sampel adalah $0,1/16,1/4,9/16$.",
        "Estimator integral ialah $\\widehat I_4=[0+1/16+1/4+9/16]/4=(14/16)/4=7/32$. Integral analitik adalah $I=[x^3/3]_0^1=1/3$.",
        "Galat bertanda $\\widehat I_4-I=7/32-1/3=(21-32)/96=-11/96$. Empat titik yang dipilih tidak dijamin representatif; selisih tersebut tidak membantah ketakbiasan estimator atas pengulangan sampling acak."
      ],
      "forDefinition": "Integral sebagai Ekspektasi Uniform"
    },
    {
      "title": "Contoh 3 · Estimasi Kejadian",
      "problem": "Empat sampel uniform $(0.1,0.2,0.4,0.8)$ digunakan untuk mengestimasi $P(U\\le1/4)$.",
      "solution": [
        "Kejadian adalah $A=\\{U\\le1/4\\}$. Indikator pada empat sampel berturut-turut adalah $(1,1,0,0)$ karena hanya 0.1 dan 0.2 yang tidak melebihi 0.25.",
        "Estimator $\\widehat p_4=(1+1+0+0)/4=1/2$. Dari panjang interval, peluang sebenarnya adalah $p=1/4$, sehingga galat estimasi $1/2-1/4=1/4$.",
        "Ragam teoretis estimator adalah $p(1-p)/4=(1/4)(3/4)/4=3/64$. Ini adalah ragam dari pengulangan empat sampel, bukan kuadrat galat realisasi yang kebetulan sebesar $1/16$."
      ],
      "forDefinition": "Estimasi Peluang dengan Indikator"
    },
    {
      "title": "Contoh 4 · Galat Baku Empiris",
      "problem": "Tiga keluaran replikasi independen adalah $(1,3,5)$. Hitung rata-rata, ragam sampel, dan galat baku taksirannya.",
      "solution": [
        "Diketahui $n=3$ dan jumlah keluaran $1+3+5=9$. Rata-rata sampel adalah $\\overline Y=9/3=3$.",
        "Deviasi dari rata-rata adalah $(-2,0,2)$, sehingga jumlah kuadrat deviasi $4+0+4=8$. Ragam sampel tak bias $s^2=8/(3-1)=4$, dan simpangan baku sampel $s=2$.",
        "Taksiran galat baku rata-rata adalah $s/\\sqrt n=2/\\sqrt3$. Angka ini bukan interval kepercayaan 95 persen; untuk membuat interval diperlukan asumsi atau pendekatan distribusi tambahan."
      ],
      "forDefinition": "Galat Monte Carlo dan Galat Baku"
    },
    {
      "title": "Contoh 5 · Ukuran Sampel Konservatif",
      "problem": "Untuk integral $I=\\int_0^1x^2\\,dx$, tentukan $n$ agar batas Chebyshev bagi $|\\widehat I_n-I|\\ge0.1$ tidak lebih dari $0.05$.",
      "solution": [
        "Diketahui $\\operatorname{Var}(U^2)=\\mathbb E[U^4]-(\\mathbb E[U^2])^2=1/5-1/9=4/45$. Panjang interval satu, sehingga ragam estimator $\\widehat I_n$ adalah $4/(45n)$.",
        "Ketaksamaan Chebyshev memberi $P(|\\widehat I_n-I|\\ge1/10)\\le[4/(45n)]/(1/100)=80/(9n)$. Agar batas kanan tidak melebihi $1/20$, diperlukan $80/(9n)\\le1/20$, yakni $n\\ge1600/9$.",
        "Karena $n$ bilangan bulat, cukup $n=178$. Substitusi memberikan $80/(9\\cdot178)=80/1602<1/20$. Angka 178 adalah jaminan konservatif, bukan banyak sampel minimum yang pasti diperlukan oleh metode lain."
      ]
    },
    {
      "title": "Contoh 6 · Pemetaan Invers Diskret",
      "problem": "Permintaan mengambil nilai $(1,2,3)$ dengan peluang $(0.2,0.5,0.3)$. Peta sampel uniform $(0.1,0.35,0.6,0.95)$ menjadi permintaan.",
      "solution": [
        "Batas distribusi kumulatif adalah $F_1=0.2$, $F_2=0.7$, dan $F_3=1$. Interval pemetaan adalah $(0,0.2]$ untuk 1, $(0.2,0.7]$ untuk 2, dan $(0.7,1]$ untuk 3.",
        "Nilai 0.1 masuk interval pertama, 0.35 dan 0.6 masuk interval kedua, serta 0.95 masuk interval ketiga. Empat keluaran adalah $(1,2,2,3)$, dengan mean sampel $(1+2+2+3)/4=2$.",
        "Mean teoretis permintaan adalah $1(0.2)+2(0.5)+3(0.3)=2.1$. Selisih sampel $-0.1$ adalah galat sampling; pembangkitan tetap tepat secara distribusional jika input uniform acak dan independen."
      ]
    },
    {
      "title": "Contoh 7 · Pasangan Antitetik",
      "problem": "Bandingkan ragam estimator dua evaluasi untuk $\\mathbb E[U^2]$ ketika memakai dua titik independen dan pasangan $(U,1-U)$.",
      "solution": [
        "Untuk sampling independen, estimator $T_{\\mathrm{iid}}=(U_1^2+U_2^2)/2$ mempunyai ragam $(4/45)/2=2/45$. Kedua evaluasi menggunakan dua angka uniform independen.",
        "Untuk pasangan antitetik, $T_{\\mathrm{anti}}=[U^2+(1-U)^2]/2=U^2-U+1/2$. Ekspektasinya $1/3-1/2+1/2=1/3$. Momen kedua diperoleh dengan mengintegralkan $(u^2-u+1/2)^2=u^4-2u^3+2u^2-u+1/4$ pada $[0,1]$, yaitu $7/60$.",
        "Ragam antitetik $7/60-(1/3)^2=(21-20)/180=1/180$, jauh lebih kecil daripada $2/45=8/180$. Ini perbandingan pada dua evaluasi fungsi, bukan pada dua pasangan independen."
      ]
    },
    {
      "title": "Contoh 8 · Importance Sampling",
      "problem": "Estimasi $I=\\int_0^1x^2\\,dx$ dengan proposal $q(x)=2x$ pada $(0,1)$; bandingkan ragam satu bobot dengan sampling uniform.",
      "solution": [
        "Target adalah densitas uniform $p(x)=1$ pada $(0,1)$. Proposal $q(x)=2x$ terintegral menjadi satu, positif untuk $0<x<1$, dan dapat disimulasikan melalui $X=\\sqrt U$ jika $U$ uniform.",
        "Bobot importance adalah $W=f(X)p(X)/q(X)=X^2/(2X)=X/2$. Ekspektasi di bawah $q$ adalah $\\int_0^1(x/2)(2x)\\,dx=\\int_0^1x^2\\,dx=1/3$. Momen keduanya $\\int_0^1(x^2/4)(2x)\\,dx=1/8$.",
        "Ragam satu bobot ialah $1/8-1/9=1/72$. Pada sampling uniform ragam satu evaluasi $U^2$ adalah $4/45$. Proposal ini mengurangi ragam pada contoh tersebut; untuk $n$ replikasi independen, kedua ragam rata-rata dibagi $n$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "MC-01. Biaya acak bernilai 10 dengan peluang 0.3 dan 20 dengan peluang 0.7. Dari lima keluaran $(20,10,20,20,10)$, hitung estimator mean dan bias teoretisnya.",
      "hint": "Pisahkan mean populasi dari mean sampel.",
      "answer": "Diketahui $\\mu=10(0.3)+20(0.7)=17$. Lima keluaran berjumlah $20+10+20+20+10=80$, sehingga $\\widehat\\mu_5=80/5=16$. Galat realisasi adalah $16-17=-1$. Akan tetapi, setiap replikasi memiliki ekspektasi 17 dan independen, sehingga $\\mathbb E[\\widehat\\mu_5]=5(17)/5=17$ dan bias teoretis nol. Galat sampel yang tidak nol tidak bertentangan dengan sifat tak bias.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-02. Gunakan titik $(0,1/2,1)$ untuk menghitung estimator Monte Carlo integral $\\int_0^2x\\,dx$ melalui $U_i=2V_i$ dengan $V_i$ seperti titik yang diberikan.",
      "hint": "Kalikan rata-rata fungsi dengan panjang interval 2.",
      "answer": "Diketahui tiga titik $V_i=(0,1/2,1)$ dan transformasi uniform ideal $U_i=2V_i$, sehingga titik pada $[0,2]$ adalah $(0,1,2)$. Nilai $f(U_i)=U_i$ ialah $(0,1,2)$, dengan rata-rata 1. Estimator integral $\\widehat I_3=(2-0)(0+1+2)/3=2$. Perhitungan analitik $\\int_0^2x\\,dx=[x^2/2]_0^2=2$, sehingga galat sampel ini nol. Pemilihan titik tertentu tidak membuktikan estimator selalu eksak; tak biasnya berasal dari distribusi uniform pada replikasi acak.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-03. Jika $p=P(U>0.7)$ dengan $U$ uniform pada $[0,1]$, hitung ragam estimator indikator untuk $n=100$ dan batas atas universalnya.",
      "hint": "Gunakan ragam Bernoulli $p(1-p)$.",
      "answer": "Diketahui panjang interval $(0.7,1)$ adalah 0.3, sehingga $p=0.3$. Untuk 100 indikator iid, $\\operatorname{Var}(\\widehat p_{100})=0.3(0.7)/100=0.0021$. Batas universal adalah $1/(4n)=1/400=0.0025$; nilai aktual 0.0021 memang tidak melampauinya. Galat baku teoretis $\\sqrt{0.0021}\\approx0.04583$. Batas ini menyatakan ragam pengulangan eksperimen, bukan bahwa setiap estimasi pasti berjarak kurang dari 0.04583 terhadap 0.3.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-04. Untuk $Y$ dengan mean 5 dan ragam 16, tentukan $n$ yang cukup agar batas Chebyshev bagi galat absolut minimal 1 tidak melebihi 0.04.",
      "hint": "Gunakan $\\sigma^2/(n\\varepsilon^2)\\le\\alpha$.",
      "answer": "Diketahui $\\mu=5$, $\\sigma^2=16$, $\\varepsilon=1$, dan $\\alpha=0.04=1/25$. Untuk rata-rata replikasi independen, $\\operatorname{Var}(\\widehat\\mu_n)=16/n$. Ketaksamaan Chebyshev memberi $P(|\\widehat\\mu_n-5|\\ge1)\\le16/n$. Persyaratan $16/n\\le1/25$ setara dengan $n\\ge400$. Pada $n=400$ batas tepat $16/400=0.04$. Ini syarat cukup berdasarkan batas Chebyshev; tanpa asumsi tambahan, tidak boleh menggantinya dengan angka yang berasal dari interval normal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-05. Permintaan $(0,5,10)$ mempunyai peluang $(0.25,0.50,0.25)$. Tentukan keluaran untuk uniform $(0.1,0.3,0.75,0.9)$ dengan aturan interval kumulatif.",
      "hint": "Perhatikan titik batas $U=0.75$.",
      "answer": "Distribusi kumulatif memiliki batas $F_1=0.25$, $F_2=0.75$, $F_3=1$. Interval $(0,0.25]$ menghasilkan 0, $(0.25,0.75]$ menghasilkan 5, dan $(0.75,1]$ menghasilkan 10. Nilai 0.1 memetakan ke 0, nilai 0.3 dan 0.75 ke 5, sedangkan 0.9 ke 10. Keluaran adalah $(0,5,5,10)$ dan rata-ratanya 5. Mean populasi $0(0.25)+5(0.5)+10(0.25)=5$ juga 5; kesamaan sampel ini kebetulan dan tidak diperlukan untuk validitas metode invers.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-06. Untuk $f(u)=u$, bandingkan estimator antitetik $[f(U)+f(1-U)]/2$ dengan rata-rata dua sampel uniform independen.",
      "hint": "Hitung kedua ragam secara eksak.",
      "answer": "Untuk $f(u)=u$, pasangan antitetik menghasilkan $T_{\\mathrm{anti}}=[U+(1-U)]/2=1/2$ untuk setiap $U\\in[0,1]$. Target $\\mathbb E[U]=1/2$, sehingga ragam estimator antitetik tepat nol. Sebaliknya, untuk $U_1,U_2$ iid uniform, $T_{\\mathrm{iid}}=(U_1+U_2)/2$ memiliki ragam $[\\operatorname{Var}(U_1)+\\operatorname{Var}(U_2)]/4=[1/12+1/12]/4=1/24$. Kedua estimator tak bias, tetapi hanya yang antitetik eksak pada setiap realisasi dalam kasus linear ini. Dua titik antitetik saling bergantung dan tidak boleh dihitung sebagai dua replikasi independen.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-07. Untuk importance sampling $q(x)=2x$ pada $(0,1)$, hitung estimator $\\int_0^1x^2\\,dx$ dari sampel proposal $(1/2,1)$ dan bandingkan dengan integral eksak.",
      "hint": "Gunakan bobot $x^2/(2x)$, bukan nilai $x^2$ langsung.",
      "answer": "Target memiliki densitas $p(x)=1$ dan proposal $q(x)=2x$. Bobot untuk $x>0$ adalah $w(x)=x^2p(x)/q(x)=x/2$. Pada sampel proposal $(1/2,1)$, bobotnya $(1/4,1/2)$, sehingga estimator $\\widehat I_2=(1/4+1/2)/2=3/8$. Integral sebenarnya $I=[x^3/3]_0^1=1/3$, jadi galat $3/8-1/3=1/24$. Titik 1 mempunyai peluang nol pada proposal kontinu, tetapi sah dipakai sebagai ilustrasi perhitungan bobot. Mengambil rata-rata kuadrat sampel proposal tanpa pembobotan menghasilkan $[(1/2)^2+1]/2=5/8$ yang mengestimasi besaran berbeda.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MC-08. Diketahui $Y_i$ iid dengan mean $\\mu$ dan ragam $\\sigma^2>0$. Buktikan bahwa estimator $\\widehat\\theta_n=(\\overline Y_n)^2$ umumnya bias untuk $\\theta=\\mu^2$, lalu tentukan koreksinya bila $\\sigma^2$ diketahui.",
      "hint": "Kembangkan kuadrat mean dengan identitas ragam.",
      "answer": "Diketahui $\\overline Y_n=n^{-1}\\sum_iY_i$ dan $\\mathbb E[\\overline Y_n]=\\mu$, $\\operatorname{Var}(\\overline Y_n)=\\sigma^2/n$. Identitas $\\operatorname{Var}(Z)=\\mathbb E[Z^2]-(\\mathbb E[Z])^2$ memberikan $\\mathbb E[(\\overline Y_n)^2]=\\mu^2+\\sigma^2/n$. Karena $\\sigma^2>0$ dan $n$ hingga, bias terhadap $\\theta=\\mu^2$ adalah $\\sigma^2/n>0$. Jika $\\sigma^2$ diketahui, definisikan $T_n=(\\overline Y_n)^2-\\sigma^2/n$. Linearitas ekspektasi memberi $\\mathbb E[T_n]=\\mu^2+\\sigma^2/n-\\sigma^2/n=\\mu^2$, sehingga $T_n$ tak bias. Koreksi ini tidak menyatakan $T_n$ selalu nonnegatif pada setiap sampel.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
