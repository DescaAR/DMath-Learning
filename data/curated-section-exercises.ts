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
      answer:"Diketahui nilai eksak $p=\\pi$ dan aproksimasi $p^*=3.14$. Ditentukan galat absolut dan galat relatif sampai enam angka di belakang koma. Karena $\\pi>0$, penyebut pada definisi galat relatif tidak nol.\nMenurut definisi, $E_a=|\\pi-3.14|$. Dengan $\\pi\\approx3.141592653589793$ diperoleh $E_a\\approx0.001592653589793$. Pembulatan ke enam tempat desimal menghasilkan $\\boxed{E_a\\approx0.001593}$.\nSelanjutnya $E_r=E_a/|p|=|\\pi-3.14|/\\pi\\approx0.000506957382897$. Pembulatan ke enam tempat desimal menghasilkan $\\boxed{E_r\\approx0.000507}$. Nilai ini takberdimensi; jika dinyatakan sebagai persentase, diperoleh $100E_r\\%\\approx0.0506957383\\%$, atau $0.050696\\%$ sampai enam tempat desimal.\nSebagai verifikasi, $0.000506957382897\\times\\pi\\approx0.001592653589793$, yaitu galat absolut sebelum pembulatan. Karena $3.14<\\pi$, aproksimasi berada di bawah nilai eksak. Dengan demikian kedua ukuran galat konsisten; pembulatan dilakukan pada tahap akhir agar digit perantara tidak merusak hasil."
    }
  ],
  "or-lp-formulasi":[
    {
      prompt:"Maksimumkan $z=3x+2y$ dengan kendala $x+y\\le4$, $2x+y\\le6$, dan $x,y\\ge0$. Tentukan titik optimum dan nilai optimum.",
      hint:"Daerah feasible berbentuk poligon. Evaluasi fungsi tujuan di seluruh titik sudut, termasuk perpotongan dua garis kendala.",
      answer:"Diketahui fungsi tujuan $z=3x+2y$ dengan kendala $x+y\\le4$, $2x+y\\le6$, dan $x,y\\ge0$. Ditentukan solusi yang memaksimumkan $z$ beserta bukti bahwa nilainya tidak dapat dilampaui. Daerah layak adalah irisan empat setengah bidang tertutup; karena $0\\le x,y\\le4$, daerah tersebut terbatas dan tidak kosong (titik asal layak). Fungsi tujuan kontinu, sehingga maksimum dicapai.\nTitik sudut diperoleh dari perpotongan batas yang memenuhi semua kendala. Pada sumbu $x=0$, kendala memberi $y\\le4$, sehingga terdapat $(0,0)$ dan $(0,4)$. Pada sumbu $y=0$, diperoleh $x\\le\\min\\{4,3\\}=3$, sehingga terdapat $(3,0)$. Kedua garis aktif $x+y=4$ dan $2x+y=6$ mempunyai selisih $x=2$, kemudian $y=2$; titik $(2,2)$ memenuhi nonnegativitas. Tidak ada titik sudut lain karena setiap titik sudut berasal dari perpotongan dua garis batas independen yang layak.\nEvaluasi tujuan memberikan $z(0,0)=0$, $z(0,4)=8$, $z(3,0)=9$, dan $z(2,2)=10$. Sebagai pembuktian optimalitas yang tidak bergantung pada gambar, jumlahkan kedua kendala sumber daya: $(x+y)+(2x+y)\\le4+6$, yakni $3x+2y\\le10$ untuk setiap titik layak. Pada $(2,2)$, kedua kendala aktif dan $3(2)+2(2)=10$, sehingga batas atas tersebut tercapai. Titik optimum bahkan tunggal: jika $3x+2y=10$, kedua kendala yang dijumlahkan harus sama-sama aktif, dan sistem persamaan aktif mempunyai solusi tunggal $(2,2)$. Dengan demikian maksimum global tepat $z^*=10$ pada $(x^*,y^*)=(2,2)$."
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
      answer:"Diketahui dua kelompok, $A=(1,3)$ dan $B=(5,7)$, masing-masing berukuran dua. Ditentukan jumlah kuadrat total $SS_T$, antarperlakuan $SS_{Tr}$, dan dalam kelompok $SS_E$, kemudian dibuktikan identitas dekomposisinya. Rata-rata kelompok adalah $\\bar y_A=(1+3)/2=2$ dan $\\bar y_B=(5+7)/2=6$, sedangkan rata-rata gabungan $\\bar y_{..}=(1+3+5+7)/4=4$.\nMenurut definisi, $SS_T=\\sum_{i,j}(y_{ij}-\\bar y_{..})^2=(1-4)^2+(3-4)^2+(5-4)^2+(7-4)^2=9+1+1+9=20$. Jumlah kuadrat antarperlakuan adalah $SS_{Tr}=\\sum_i n_i(\\bar y_i-\\bar y_{..})^2=2(2-4)^2+2(6-4)^2=8+8=16$. Jumlah kuadrat galat dalam kelompok adalah $SS_E=\\sum_{i,j}(y_{ij}-\\bar y_i)^2=(1-2)^2+(3-2)^2+(5-6)^2+(7-6)^2=1+1+1+1=4$.\nDekomposisi berlaku karena untuk setiap observasi $y_{ij}-\\bar y_{..}=(y_{ij}-\\bar y_i)+(\\bar y_i-\\bar y_{..})$. Setelah dikuadratkan dan dijumlahkan, suku silang tiap kelompok bernilai $2(\\bar y_i-\\bar y_{..})\\sum_j(y_{ij}-\\bar y_i)=0$, sebab jumlah deviasi dari rata-rata kelompok selalu nol. Jadi $SS_T=SS_E+SS_{Tr}$ sebagai identitas aljabar, dan hasil numerik memverifikasi $20=4+16$.\nSebagai pemeriksaan tambahan, derajat bebas total $N-1=3$, antarperlakuan $k-1=1$, dan galat $N-k=2$, dengan $3=1+2$. Diperoleh $MS_{Tr}=16/1=16$ dan $MS_E=4/2=2$, sehingga statistik $F=16/2=8$. Statistik ini dapat dihitung dari data, tetapi interpretasi nilai $p$ sebagai uji ANOVA memerlukan asumsi model, terutama independensi pengamatan, normalitas galat, dan kesamaan varians populasi. Tidak ada klaim signifikansi yang sah hanya dari empat angka tanpa menetapkan model dan taraf pengujian."
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
      answer:"Diketahui $X_1,\\ldots,X_{100}$ saling independen dan berdistribusi identik dengan $E[X_i]=10$ dan $\\operatorname{Var}(X_i)=4$. Ditentukan pendekatan peluang $P(\\bar X_{100}>10.4)$ menggunakan Teorema Limit Pusat (CLT). Dari linearitas ekspektasi diperoleh $E[\\bar X_{100}]=10$. Karena sampel independen, $\\operatorname{Var}(\\bar X_{100})=\\operatorname{Var}(\\sum_i X_i)/100^2=(100\\cdot4)/10000=0.04$, sehingga simpangan baku mean adalah $0.2$.\nDefinisikan statistik baku $Z_{100}=(\\bar X_{100}-10)/0.2$. Ambang $10.4$ berubah menjadi $(10.4-10)/0.2=2$, sehingga $P(\\bar X_{100}>10.4)=P(Z_{100}>2)$. Karena varians populasi hingga dan positif, CLT Lindeberg–Lévy menyatakan $Z_n$ konvergen dalam distribusi ke $N(0,1)$ ketika $n\\to\\infty$. Dengan pendekatan normal pada $n=100$, diperoleh $P(Z_{100}>2)\\approx1-\\Phi(2)\\approx1-0.977249868=0.022750132$, atau sekitar $2.28\\%$.\nAngka tersebut merupakan APROKSIMASI, bukan peluang eksak yang ditentukan hanya oleh mean dan varians. Untuk menilai akurasinya pada $n=100$, bentuk distribusi populasi juga berpengaruh; tanpa informasi momen ketiga atau distribusi asal, tidak ada batas galat Berry–Esseen numerik yang dapat dihitung dari data soal. Sebagai verifikasi standardisasi, ambang $10.4$ berada dua standar error di atas mean, sesuai peluang ekor normal sekitar $0.0228$. Jika populasi memang normal, maka $Z_{100}$ normal baku tepat dan peluang $0.022750132$ menjadi eksak (hingga pembulatan); jika tidak, hasil yang diminta tetap pendekatan CLT."
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
      answer:"Diketahui $\\xi_k$ independen identik terdistribusi dengan $P(\\xi_k=1)=P(\\xi_k=-1)=1/2$. Karena $E[\\xi_k]=0$ dan $E[\\xi_k^2]=1$, setiap inkremen mempunyai mean nol dan varians satu. Definisikan $\\mathcal F_n=\\sigma(\\xi_1,\\ldots,\\xi_n)$, $S_0=0$, serta $M_n=S_n^2-n$. Nilai $M_n$ terukur terhadap $\\mathcal F_n$; selain itu $|S_n|\\le n$ memastikan $M_n$ integrabel untuk setiap n. Dari $S_{n+1}=S_n+\\xi_{n+1}$ diperoleh $S_{n+1}^2=S_n^2+2S_n\\xi_{n+1}+\\xi_{n+1}^2$. Kondisikan terhadap $\\mathcal F_n$: suku $S_n$ sudah diketahui, sedangkan independensi memberi $E[\\xi_{n+1}\\mid\\mathcal F_n]=0$ dan $E[\\xi_{n+1}^2\\mid\\mathcal F_n]=1$. Oleh karena itu $E[M_{n+1}\\mid\\mathcal F_n]=S_n^2+2S_n(0)+1-(n+1)=S_n^2-n=M_n$. Sebagai verifikasi pada n=1, $M_1=0$ dan $M_2$ bernilai 2 atau -2 dengan peluang bersyarat sama pada setiap nilai $\\xi_1$, sehingga $E[M_2\\mid\\mathcal F_1]=0=M_1$. Ketiga syarat martingale telah dibuktikan, termasuk identitas bersyarat, bukan hanya kesamaan mean biasa."
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
      answer:"Diketahui $W$ Brownian motion standar dan $H_t=t$ pada $0\\le t\\le1$. Fungsi $H$ deterministik, kontinu, dan dapat didekati oleh proses sederhana teradaptasi; ia memenuhi syarat integrabilitas kuadrat karena $E\\int_0^1H_t^2dt=\\int_0^1t^2dt=1/3<\\infty$. Dengan demikian integral Itô $I=\\int_0^1t\\,dW_t$ terdefinisi sebagai limit dalam $L^2$ dari jumlah proses sederhana.\n\nIsometri Itô menyatakan bahwa untuk integrand dalam ruang penutupan proses sederhana teradaptasi, $E[I^2]=E\\int_0^1H_t^2dt$. Substitusi $H_t=t$ memberi $E[I^2]=\\int_0^1t^2dt=[t^3/3]_0^1=1/3$. Selain itu $E[I]=0$, sehingga $\\operatorname{Var}(I)=1/3$.\n\nUntuk memeriksa hasil tanpa mengasumsikan bahwa integral Itô adalah integral Riemann, ambil jumlah kiri $I_n=\\sum_{k=0}^{n-1}(k/n)(W_{(k+1)/n}-W_{k/n})$. Independensi inkremen memberi $E[I_n^2]=\\sum_{k=0}^{n-1}(k/n)^2(1/n)=\\frac{(n-1)n(2n-1)}{6n^3}\\to1/3$. Isometri pada selisih integrand memastikan $I_n\\to I$ dalam $L^2$, sehingga limit momen kedua memang $1/3$.\n\nNilai $1/3$ adalah momen kedua peubah acak integral Itô, bukan nilai integral pada setiap lintasan. Identitas ini konsisten dengan konstruksi $L^2$ dan memperlihatkan perbedaan dari $\\left(\\int_0^1t\\,dt\\right)^2=1/4$."
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
