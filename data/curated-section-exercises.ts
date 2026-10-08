import type { BookExercise } from "@/data/book-content-types";

/**
 * Independently solved, numerical and proof-oriented practice.
 * The keyed section slugs ensure exercises do not leak across unrelated topics.
 */
export const curatedSectionExercises:Record<string,BookExercise[]>={
  "komb-perfect-covers":[
    {
      prompt:"Papan catur $8\\times8$ kehilangan dua petak sudut yang saling berhadapan. Buktikan papan tersisa tidak bisa ditutup tepat dengan domino $1\\times2$.",
      hint:"Warnai papan catur berselang-seling hitam dan putih. Setiap domino menutupi tepat satu petak setiap warna.",
      answer:"Warnai papan catur seperti biasa sehingga semula ada 32 petak hitam dan 32 petak putih.\nDua petak sudut yang saling berhadapan mempunyai warna sama karena kedua koordinatnya berubah masing-masing sebanyak tujuh langkah.\nSetelah kedua petak tersebut dihapus, banyak petak dari kedua warna berbeda dua.\nSetiap domino selalu menutupi satu petak hitam dan satu petak putih, sehingga setiap penutupan domino memerlukan jumlah petak kedua warna sama.\nTerjadi kontradiksi. Penutupan yang diminta tidak mungkin."
    },
    {
      prompt:"Berapa banyak domino $1\\times2$ yang dibutuhkan untuk menutupi papan $6\\times8$ tanpa lubang?",
      hint:"Hitung luas papan dan luas satu domino.",
      answer:"Papan mempunyai $6\\cdot8=48$ petak.\nSetiap domino menutupi tepat dua petak, sehingga setiap penutupan sempurna memerlukan $48/2=24$ domino.\nPenutupan memang ada karena setiap baris dengan panjang 8 dapat disusun dari empat domino horizontal.\nJadi banyak domino yang dibutuhkan adalah 24."
    }
  ],
  "calc-functions-graphs":[
    {
      prompt:"Diberikan $f(x)=\\begin{cases}x^2,&x<0,\\\\2x,&x\\ge0.\\end{cases}$ Hitung $f(-3)$ dan $f(2)$, kemudian periksa kontinuitasnya di $x=0$.",
      hint:"Gunakan cabang berbeda untuk $x<0$ dan $x\\ge0$; bandingkan limit kiri, limit kanan, dan $f(0)$.",
      answer:"Karena $-3<0$, diperoleh $f(-3)=(-3)^2=9$.\nKarena $2\\ge0$, diperoleh $f(2)=2(2)=4$.\nUntuk $x\\to0^-$, berlaku $f(x)=x^2\\to0$.\nUntuk $x\\to0^+$, berlaku $f(x)=2x\\to0$.\nNilai fungsi pada titik tersebut adalah $f(0)=0$, sehingga limit dua sisi sama dengan nilai fungsi.\nJadi $f$ kontinu di $0$."
    }
  ],
  "num-galat-absolut-relatif":[
    {
      prompt:"Nilai acuan adalah $p=\\pi$, sedangkan pendekatan $p^*=3.14$. Tentukan galat absolut dan galat relatif, masing-masing sampai enam angka desimal.",
      hint:"Gunakan $E_a=|p-p^*|$ dan $E_r=E_a/|p|$. Nilai acuan $\\pi\\approx3.141592654$.",
      answer:"Galat absolut adalah $E_a=|\\pi-3.14|\\approx0.001592654$, atau sekitar $0.001593$.\nGalat relatif adalah $E_r=|\\pi-3.14|/\\pi\\approx0.00050696$, atau sekitar $0.000507$.\nDalam persen, galat relatif tersebut sekitar $0.050696\\%$."
    }
  ],
  "or-lp-formulasi":[
    {
      prompt:"Maksimumkan $z=3x+2y$ dengan kendala $x+y\\le4$, $2x+y\\le6$, dan $x,y\\ge0$. Tentukan titik optimum dan nilai optimum.",
      hint:"Daerah feasible berbentuk poligon. Evaluasi fungsi tujuan di seluruh titik sudut, termasuk perpotongan dua garis kendala.",
      answer:"Titik sudut feasible adalah $(0,0)$, $(0,4)$, $(2,2)$, dan $(3,0)$.\nPerpotongan kedua garis batas didapat dari $x+y=4$ dan $2x+y=6$, yaitu $x=2,y=2$.\nNilai objektif pada keempat titik berturut-turut adalah $0$, $8$, $10$, dan $9$.\nKarena fungsi tujuan linear dan daerah feasible berupa poligon terbatas, maksimum dicapai pada titik sudut.\nMaksimum adalah $z^*=10$ pada $(2,2)$."
    }
  ],
  "or-dualitas":[
    {
      prompt:"Primal $\\max\\{3x+2y:x+y\\le4,\\,2x+y\\le6,\\,x,y\\ge0\\}$ mempunyai solusi $(2,2)$ dengan nilai 10. Bentuk dual dan tunjukkan sertifikat optimalitas.",
      hint:"Gunakan dual minimum $4u+6v$ dengan kendala $u+2v\\ge3$, $u+v\\ge2$, dan $u,v\\ge0$.",
      answer:"Dualnya adalah meminimumkan $4u+6v$ dengan kendala $u+2v\\ge3$, $u+v\\ge2$, $u,v\\ge0$.\nPilih $u=v=1$. Kendala dual memberi $1+2=3$ dan $1+1=2$, sehingga titik ini feasible.\nNilai dualnya adalah $4(1)+6(1)=10$.\nTitik primal $(2,2)$ feasible dan memberi nilai 10.\nDualitas lemah menjamin nilai primal feasible tidak melebihi nilai dual feasible. Karena keduanya sama, kedua solusi tersebut optimal."
    }
  ],
  "sta-simple-regression":[
    {
      prompt:"Dari data $(x_i,y_i)=(1,1),(2,3),(3,5)$, hitung persamaan regresi linear least squares $\\widehat y=\\widehat\\beta_0+\\widehat\\beta_1x$.",
      hint:"Gunakan $\\widehat\\beta_1=\\sum(x_i-\\bar x)(y_i-\\bar y)/\\sum(x_i-\\bar x)^2$.",
      answer:"Rata-rata prediktor adalah $\\bar x=(1+2+3)/3=2$ dan mean respons $\\bar y=(1+3+5)/3=3$.\nJumlah hasil kali deviasi adalah $(-1)(-2)+0\\cdot0+(1)(2)=4$.\nJumlah kuadrat deviasi prediktor adalah $(-1)^2+0^2+1^2=2$.\nDiperoleh $\\widehat\\beta_1=4/2=2$ dan $\\widehat\\beta_0=\\bar y-\\widehat\\beta_1\\bar x=3-4=-1$.\nJadi $\\widehat y=2x-1$. Seluruh residual sampel nol."
    }
  ],
  "sta-anova-oneway":[
    {
      prompt:"Kelompok A mempunyai data $1,3$ dan kelompok B mempunyai data $5,7$. Hitung $SS_T$, $SS_{Tr}$, dan $SS_E$ untuk ANOVA satu arah dan verifikasi dekomposisinya.",
      hint:"Mean kelompok A adalah 2, mean kelompok B adalah 6, dan grand mean adalah 4.",
      answer:"Mean keseluruhan adalah $\\bar y_{..}=4$. Karena itu $SS_T=(1-4)^2+(3-4)^2+(5-4)^2+(7-4)^2=20$.\nVariasi antarperlakuan adalah $SS_{Tr}=2(2-4)^2+2(6-4)^2=16$.\nVariasi residual adalah $SS_E=(1-2)^2+(3-2)^2+(5-6)^2+(7-6)^2=4$.\nDekomposisi $SS_T=SS_{Tr}+SS_E$ terpenuhi karena $20=16+4$."
    }
  ],
  "stm-neyman-pearson":[
    {
      prompt:"Untuk satu observasi Bernoulli $X$, uji $H_0:p=1/4$ terhadap $H_1:p=3/4$ pada taraf $\\alpha=1/4$. Tentukan uji paling kuat dan power-nya.",
      hint:"Bandingkan likelihood ratio untuk pengamatan $X=0$ dan $X=1$.",
      answer:"Likelihood ratio $f_1(x)/f_0(x)$ pada $x=1$ adalah $(3/4)/(1/4)=3$, sedangkan pada $x=0$ adalah $(1/4)/(3/4)=1/3$.\nKarena rasio terbesar ada pada $X=1$, uji likelihood-ratio menolak $H_0$ jika $X=1$.\nUkuran uji adalah $P_{H_0}(X=1)=1/4=\\alpha$.\nPower terhadap alternatif adalah $P_{H_1}(X=1)=3/4$.\nMenurut Lemma Neyman–Pearson, uji tersebut paling kuat pada taraf yang diminta."
    }
  ],
  "stm-clt":[
    {
      prompt:"Misalkan $X_1,\\ldots,X_{100}$ iid dengan $E[X_i]=10$ dan $\\operatorname{Var}(X_i)=4$. Aproksimasi $P(\\bar X_{100}>10.4)$ menggunakan CLT.",
      hint:"Standar error mean adalah $\\sigma/\\sqrt n=2/10=0.2$.",
      answer:"Standar error adalah $\\sigma/\\sqrt n=2/\\sqrt{100}=0.2$.\nStandarisasi ambang memberi $z=(10.4-10)/0.2=2$.\nMenurut pendekatan Central Limit Theorem, $P(\\bar X_{100}>10.4)\\approx P(Z>2)$ untuk $Z\\sim N(0,1)$.\nNilai dari tabel normal baku adalah sekitar $0.0228$. Aproksimasi bergantung pada kecukupan ukuran sampel untuk distribusi populasi."
    }
  ],
  "md-pigeonhole":[
    {
      prompt:"Buktikan bahwa di antara 13 orang pasti ada sedikitnya dua orang yang lahir pada bulan yang sama.",
      hint:"Gunakan 13 orang sebagai objek dan 12 bulan sebagai kotak.",
      answer:"Ada 12 kemungkinan bulan kelahiran.\nTempatkan setiap orang ke kotak bulan lahirnya.\nJika setiap kotak memuat paling banyak satu orang, jumlah orang paling banyak 12.\nKarena terdapat 13 orang, asumsi tersebut mustahil.\nPrinsip Pigeonhole menjamin ada satu bulan yang memuat sedikitnya dua orang."
    }
  ],
  "md-mst":[
    {
      prompt:"Graf berbobot pada simpul $A,B,C$ mempunyai $w(AB)=1$, $w(BC)=2$, dan $w(AC)=4$. Tentukan minimum spanning tree dan bobotnya.",
      hint:"Gunakan cut property atau periksa ketiga kemungkinan pohon berentang.",
      answer:"Sebuah spanning tree pada tiga simpul harus mempunyai tepat dua sisi.\nTiga kandidat berbobot total $1+2=3$ (sisi $AB,BC$), $1+4=5$ (sisi $AB,AC$), dan $2+4=6$ (sisi $BC,AC$).\nBobot paling kecil adalah 3, diperoleh dari sisi $AB$ dan $BC$.\nKedua sisi tersebut membentuk graf terhubung tanpa cycle dan memuat semua simpul.\nJadi MST adalah $\\{AB,BC\\}$ dengan bobot 3."
    }
  ],
  "ks-martingale":[
    {
      prompt:"Misalkan $S_n=\\sum_{k=1}^n\\xi_k$, dengan $\\xi_k$ iid mengambil nilai $+1$ dan $-1$ masing-masing dengan peluang $1/2$. Buktikan $M_n=S_n^2-n$ adalah martingale terhadap informasi hingga waktu $n$.",
      hint:"Kembangkan $S_{n+1}^2=(S_n+\\xi_{n+1})^2$, lalu gunakan $E[\\xi_{n+1}\\mid\\mathcal F_n]=0$ dan $E[\\xi_{n+1}^2\\mid\\mathcal F_n]=1$.",
      answer:"Peubah $M_n$ terukur terhadap $\\mathcal F_n$ dan integrabel karena jumlah berhingga peubah berbatas.\nIdentitas $S_{n+1}=S_n+\\xi_{n+1}$ memberi $M_{n+1}=S_n^2+2S_n\\xi_{n+1}+\\xi_{n+1}^2-(n+1)$.\nKarena increment independen dari $\\mathcal F_n$, $E[\\xi_{n+1}\\mid\\mathcal F_n]=0$ dan $E[\\xi_{n+1}^2\\mid\\mathcal F_n]=1$.\nDengan mengambil ekspektasi bersyarat, diperoleh $E[M_{n+1}\\mid\\mathcal F_n]=S_n^2+0+1-n-1=S_n^2-n=M_n$.\nJadi $(M_n)$ martingale."
    }
  ],
  "ks-brownian-definition":[
    {
      prompt:"Untuk Brownian motion standar $W$, tentukan $P(W_4>2)$.",
      hint:"Gunakan $W_4\\sim N(0,4)$ dan standarisasi dengan simpangan baku 2.",
      answer:"Menurut definisi Brownian motion standar, $W_4\\sim N(0,4)$.\nKarena simpangan bakunya 2, peubah $Z=W_4/2$ mengikuti $N(0,1)$.\nDiperoleh $P(W_4>2)=P(Z>1)$.\nTabel normal baku memberi nilai sekitar $0.1587$."
    }
  ],
  "ks-ito-isometry":[
    {
      prompt:"Jika $W$ Brownian motion standar, tentukan $E\\left[\\left(\\int_0^1t\\,dW_t\\right)^2\\right]$.",
      hint:"Gunakan Isometri Itô untuk integrand deterministik $H_t=t$.",
      answer:"Integrand $t$ deterministik, adapted, dan square-integrable karena $\\int_0^1t^2dt<\\infty$.\nIsometri Itô memberi $E[(\\int_0^1t\\,dW_t)^2]=E[\\int_0^1t^2\\,dt]$.\nIntegral pada ruas kanan tidak acak dan sama dengan $[t^3/3]_0^1=1/3$.\nJadi ekspektasi kuadrat integral Itô tersebut adalah $1/3$."
    }
  ],
  "tup-classes-sets":[
    {
      prompt:"Pada $X=\\{1,2,3\\}$ dengan partisi $\\{\\{1\\},\\{2,3\\}\\}$, tentukan sigma-algebra yang dibangkitkan oleh partisi ini.",
      hint:"Sigma-algebra harus memuat semua gabungan blok partisi beserta komplemennya.",
      answer:"Semua gabungan blok partisi adalah $\\varnothing$, $\\{1\\}$, $\\{2,3\\}$, dan $X$.\nKeluarga $\\mathcal A=\\{\\varnothing,\\{1\\},\\{2,3\\},X\\}$ memuat $X$, tertutup terhadap komplemen dan gabungan terhitung.\nSetiap sigma-algebra yang memuat kedua blok harus memuat $\\varnothing$ dan seluruh gabungannya.\nKarena itu $\\mathcal A$ merupakan sigma-algebra terkecil yang dibangkitkan partisi."
    }
  ],
  "alg-sets":[
    {
      prompt:"Pada semesta $U=\\{1,2,3,4,5\\}$, ambil $A=\\{1,2\\}$ dan $B=\\{2,3\\}$. Verifikasi $(A\\cup B)^c=A^c\\cap B^c$.",
      hint:"Hitung kedua ruas secara terpisah relatif terhadap $U$.",
      answer:"Gabungan $A\\cup B=\\{1,2,3\\}$ sehingga $(A\\cup B)^c=\\{4,5\\}$.\nKomplemen $A$ adalah $A^c=\\{3,4,5\\}$ dan komplemen $B$ adalah $B^c=\\{1,4,5\\}$.\nIrisan kedua komplemen adalah $A^c\\cap B^c=\\{4,5\\}$.\nKedua ruas sama. Ini memverifikasi contoh khusus Hukum De Morgan."
    }
  ],
  "bilangan-kompleks-dan-sifat":[
    {
      prompt:"Hitung $(1+i)^4$ dan jelaskan mengapa hasilnya real.",
      hint:"Kuadratkan dahulu $1+i$.",
      answer:"Kuadrat pertama menghasilkan $(1+i)^2=1+2i+i^2=2i$.\nKuadratkan sekali lagi: $(1+i)^4=(2i)^2=4i^2=-4$.\nBagian imajiner hasil akhir nol karena pangkat keempat sudut $\\pi/4$ menghasilkan sudut $\\pi$.\nJadi hasilnya adalah bilangan real $-4$."
    }
  ]
};
