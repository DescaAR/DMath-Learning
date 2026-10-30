import type { BookLessonContent } from "@/data/book-content-types";

/** Materi orisinal: inferensi data berpasangan. Rujukan: Casella–Berger (2002);
 *  Montgomery–Runger (2018), Applied Statistics and Probability for Engineers. */
export const pairedDataContent:BookLessonContent={
  intro:[
    "Dalam pengukuran sebelum dan sesudah perlakuan, dua angka dari orang yang sama tidak boleh diperlakukan sebagai dua pengamatan independen. Variasi antarsubjek dapat jauh lebih besar daripada perubahan akibat perlakuan. Analisis berpasangan menghilangkan komponen tetap milik subjek dengan membentuk satu selisih untuk setiap pasangan.",
    "Misalkan pasangan acak $(X_i,Y_i)$, $i=1,\ldots,n$, saling independen antarindeks, tetapi $X_i$ dan $Y_i$ dalam pasangan yang sama boleh berkorelasi. Kita definisikan $D_i=X_i-Y_i$, sehingga parameter yang ingin diuji adalah $\mu_D=E[D_i]$. Asumsi normalitas, jika digunakan, berlaku pada SELISIH $D_i$, bukan harus pada kedua kumpulan angka secara terpisah.",
    "Pembahasan dimulai dari selisih dan variasinya, kemudian penaksiran, uji Student, interval kepercayaan, serta uji tanda yang menguji karakteristik berbeda. Contoh dengan lima pasangan diperiksa hingga ragam, derajat bebas, keputusan uji, dan batas interval; soal latihan juga menilai kapan pengujian tidak sah.",
    "Rujukan: George Casella dan Roger L. Berger, Statistical Inference, edisi ke-2 (Duxbury, 2002), inferensi sampel normal; Douglas C. Montgomery dan George C. Runger, Applied Statistics and Probability for Engineers, edisi ke-7 (Wiley, 2018), paired comparisons."
  ],
  formal:[
    {kind:"definition",title:"Pengamatan Berpasangan dan Selisih",
      statement:"Diberikan $n\ge2$ pasangan $(X_i,Y_i)$ yang saling independen antarindeks dan mempunyai distribusi pasangan identik dengan momen kedua hingga. Definisikan $D_i=X_i-Y_i$. Parameter perubahan rata-rata ialah $\mu_D=E[D_i]=E[X_i]-E[Y_i]$. Kedua anggota dalam pasangan yang sama tidak diasumsikan independen.",
      explanation:"Urutan pengurangan harus konsisten: jika $X$ adalah sebelum dan $Y$ sesudah, selisih positif berarti pengukuran menurun sesudah perlakuan."},
    {kind:"definition",title:"Rata-rata dan Ragam Selisih",
      statement:"Untuk selisih teramati $d_1,\ldots,d_n$, definisikan $\bar d=n^{-1}\sum_{i=1}^n d_i$ dan $s_D^2=(n-1)^{-1}\sum_{i=1}^n(d_i-\bar d)^2$. Galat baku taksiran rata-rata selisih adalah $se(\bar d)=s_D/\sqrt n$ jika $s_D>0$.",
      explanation:"Penyebut ragam adalah $n-1$, sebab satu derajat kebebasan digunakan untuk menaksir $\bar d$."},
    {kind:"definition",title:"Uji t Berpasangan",
      statement:"Untuk menguji $H_0:\mu_D=\mu_0$ terhadap $H_1:\mu_D\ne\mu_0$, dengan $n\ge2$, $s_D>0$, dan $D_i$ independen identik berdistribusi $N(\mu_D,\sigma_D^2)$ dengan $\sigma_D^2>0$, statistik $T=(\bar D-\mu_0)/(S_D/\sqrt n)$ mempunyai distribusi $t_{n-1}$ di bawah $H_0$. Pada taraf $\alpha$, tolak $H_0$ bila $|T|>t_{1-\alpha/2,n-1}$.",
      explanation:"Uji ini mengenai mean selisih. Nilai p tidak mengukur peluang bahwa hipotesis nol benar."},
    {kind:"definition",title:"Interval Kepercayaan Mean Selisih",
      statement:"Di bawah model normal selisih pada definisi uji t dan $0<\alpha<1$, interval kepercayaan dua sisi bertaraf $1-\alpha$ untuk $\mu_D$ ialah $[\bar D-t_{1-\alpha/2,n-1}S_D/\sqrt n,\ \bar D+t_{1-\alpha/2,n-1}S_D/\sqrt n]$.",
      explanation:"Taraf kepercayaan adalah cakupan prosedur pada pengambilan sampel berulang, bukan probabilitas parameter tetap berada di dalam interval yang sudah dihitung."},
    {kind:"lemma",title:"Ragam Selisih Memuat Kovarians",
      statement:"Jika $X,Y$ mempunyai momen kedua hingga, maka $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y)$; independensi dalam pasangan tidak diperlukan.",
      proof:[
        "Diketahui $E[X^2],E[Y^2]<\infty$, sehingga kovarians terdefinisi. Tulis $U=X-E[X]$ dan $V=Y-E[Y]$. Pusatkan selisih: $(X-Y)-E[X-Y]=U-V$.",
        "Kuadratkan dan ambil ekspektasi: $E[(U-V)^2]=E[U^2]+E[V^2]-2E[UV]$. Ketiga suku berhingga oleh asumsi momen kedua dan Cauchy–Schwarz.",
        "Menurut definisi, $E[U^2]=\operatorname{Var}(X)$, $E[V^2]=\operatorname{Var}(Y)$, dan $E[UV]=\operatorname{Cov}(X,Y)$. Substitusi membuktikan identitas; untuk kovarians positif, selisih dapat lebih stabil daripada dua pengukuran terpisah. $\square$"
      ]},
    {kind:"proposition",title:"Ketakbiasan dan Ragam Rata-rata Selisih",
      statement:"Jika $D_1,\ldots,D_n$ independen identik dengan $E[D_i]=\mu_D$ dan $\operatorname{Var}(D_i)=\sigma_D^2<\infty$, maka $E[\bar D]=\mu_D$ dan $\operatorname{Var}(\bar D)=\sigma_D^2/n$.",
      proof:[
        "Dari definisi $\bar D=n^{-1}\sum_iD_i$, linearitas ekspektasi memberi $E[\bar D]=n^{-1}\sum_iE[D_i]=n^{-1}(n\mu_D)=\mu_D$; tidak diperlukan normalitas.",
        "Independensi antar-pasangan menjamin kovarians $D_i,D_j$ nol untuk $i\ne j$. Karena itu $\operatorname{Var}(\bar D)=n^{-2}\sum_i\operatorname{Var}(D_i)=n^{-2}n\sigma_D^2=\sigma_D^2/n$.",
        "Syarat independensi hanya diberlakukan antar-pasangan; korelasi $X_i,Y_i$ sudah terakomodasi dalam $\sigma_D^2$. Kedua identitas terbukti. $\square$"
      ]},
    {kind:"proposition",title:"Ragam Sampel Selisih Tak Bias",
      statement:"Jika $D_1,\ldots,D_n$ independen identik dengan mean $\mu_D$ dan ragam hingga $\sigma_D^2$, $n\ge2$, maka $E[S_D^2]=\sigma_D^2$.",
      proof:[
        "Gunakan identitas aljabar $\sum_i(D_i-\bar D)^2=\sum_i(D_i-\mu_D)^2-n(\bar D-\mu_D)^2$, yang diperoleh dengan mengembangkan $D_i-\bar D=(D_i-\mu_D)-(\bar D-\mu_D)$ dan menjumlahkan.",
        "Ekspektasi suku pertama adalah $n\sigma_D^2$. Karena $E[\bar D]=\mu_D$ dan $\operatorname{Var}(\bar D)=\sigma_D^2/n$, ekspektasi suku kedua adalah $n\operatorname{Var}(\bar D)=\sigma_D^2$.",
        "Diperoleh $E[\sum_i(D_i-\bar D)^2]=(n-1)\sigma_D^2$. Pembagian dengan $n-1>0$ memberi $E[S_D^2]=\sigma_D^2$. $\square$"
      ]},
    {kind:"theorem",title:"Distribusi Eksak Statistik t Berpasangan",
      statement:"Jika $D_1,\ldots,D_n$ independen identik $N(\mu_D,\sigma_D^2)$ dengan $n\ge2$ dan $\sigma_D^2>0$, maka $T=(\bar D-\mu_D)/(S_D/\sqrt n)\sim t_{n-1}$, dengan penyebut positif hampir pasti.",
      proof:[
        "Standarkan vektor $Z=((D_1-\mu_D)/\sigma_D,\ldots,(D_n-\mu_D)/\sigma_D)$; komponennya independen $N(0,1)$. Pilih basis ortonormal $\mathbb R^n$ dengan vektor pertama $u=(1,\ldots,1)/\sqrt n$. Transformasi ortogonal dari vektor normal baku mempertahankan distribusi $N_n(0,I_n)$.",
        "Koordinat pertama hasil transformasi ialah $Z_1^*=\sqrt n(\bar D-\mu_D)/\sigma_D\sim N(0,1)$. Jumlah kuadrat $n-1$ koordinat lainnya sama dengan $\sum_i(D_i-\bar D)^2/\sigma_D^2=(n-1)S_D^2/\sigma_D^2=:U$.",
        "Koordinat normal baku yang berbeda independen, sehingga $U\sim\chi^2_{n-1}$ dan $U$ independen dari $Z_1^*$. Karena $n-1\ge1$, $U>0$ hampir pasti. Maka $T=Z_1^*/\sqrt{U/(n-1)}\sim t_{n-1}$ menurut definisi distribusi Student. $\square$"
      ]},
    {kind:"corollary",title:"Cakupan Interval dan Ekuivalensi Keputusan Uji",
      statement:"Di bawah hipotesis teorema Student dan $0<\alpha<1$, interval $\bar D\pm t_{1-\alpha/2,n-1}S_D/\sqrt n$ mencakup $\mu_D$ dengan probabilitas tepat $1-\alpha$. Untuk hipotesis $H_0:\mu_D=\mu_0$, uji t dua sisi menolak pada taraf $\alpha$ jika dan hanya jika $\mu_0$ berada di luar interval tersebut.",
      proof:[
        "Distribusi Student simetris, sehingga $P(-c\le(\bar D-\mu_D)/(S_D/\sqrt n)\le c)=1-\alpha$ untuk $c=t_{1-\alpha/2,n-1}>0$.",
        "Karena $S_D/\sqrt n>0$ hampir pasti, kalikan seluruh ruas dengan besaran positif ini dan susun kembali: $P(\bar D-cS_D/\sqrt n\le\mu_D\le\bar D+cS_D/\sqrt n)=1-\alpha$. Ini membuktikan klaim cakupan.",
        "Untuk arah (⇒), $|(\bar d-\mu_0)/(s_D/\sqrt n)|>c$ berarti $\mu_0<\bar d-cs_D/\sqrt n$ atau $\mu_0>\bar d+cs_D/\sqrt n$, sehingga $\mu_0$ di luar interval. Untuk arah (⇐), jika $\mu_0$ di luar interval, salah satu pertidaksamaan ketat tersebut berlaku; pembagian dengan $s_D/\sqrt n>0$ memberi $|t|>c$. Kesamaan tepat di batas tidak ditolak menurut aturan ketat yang digunakan. $\square$"
      ]},
    {kind:"proposition",title:"Distribusi Uji Tanda untuk Selisih Kontinu",
      statement:"Jika $D_1,\ldots,D_n$ independen dan $P(D_i>0)=P(D_i<0)=1/2$ serta $P(D_i=0)=0$, maka $B=\sum_{i=1}^n\mathbf1_{\{D_i>0\}}\sim\operatorname{Bin}(n,1/2)$. Syarat ini berlaku, misalnya, bagi selisih kontinu yang masing-masing bermedian nol dan tidak memiliki massa di nol.",
      proof:[
        "Untuk setiap $i$, definisikan $I_i=\mathbf1_{\{D_i>0\}}$. Asumsi memberi $P(I_i=1)=P(D_i>0)=1/2$ dan $P(I_i=0)=1/2$.",
        "Karena $D_i$ independen antarindeks dan indikator merupakan fungsi terukur dari masing-masing $D_i$, indikator $I_1,\ldots,I_n$ juga independen.",
        "Banyak konfigurasi dengan tepat $k$ indikator bernilai satu adalah $\binom nk$. Setiap konfigurasi memiliki probabilitas $(1/2)^n$ oleh independensi. Karena itu $P(B=k)=\binom nk2^{-n}$ untuk $k=0,\ldots,n$. Hasil tidak memerlukan normalitas tetapi menguji keseimbangan tanda, bukan secara umum mean nol. $\square$"
      ]},
    {kind:"proposition",title:"Perubahan Konstan pada Semua Selisih",
      statement:"Untuk data $d_1,\ldots,d_n$ dan konstanta $c\in\mathbb R$, jika $d_i'=d_i+c$, maka $\bar d'=\bar d+c$ dan $s_{D'}^2=s_D^2$.",
      proof:[
        "Dari linearitas jumlah, $\bar d'=n^{-1}\sum_i(d_i+c)=\bar d+c$. Hal ini berlaku tanpa asumsi distribusi.",
        "Untuk setiap indeks, $d_i'-\bar d'=(d_i+c)-(\bar d+c)=d_i-\bar d$. Kuadrat penyimpangan tidak berubah, sehingga $\sum_i(d_i'-\bar d')^2=\sum_i(d_i-\bar d)^2$.",
        "Pembagian dengan $n-1$ menunjukkan $s_{D'}^2=s_D^2$. Jadi penambahan konstan menggeser pusat tanpa mengubah penyebaran selisih. $\square$"
      ]}
  ],
  examples:[
    {title:"Contoh Definisi Pengamatan Berpasangan",forDefinition:"Pengamatan Berpasangan dan Selisih",
      problem:"Nilai sebelum perlakuan $X=(10,12,11,14,9)$ dan sesudah perlakuan $Y=(8,8,8,9,8)$ berasal dari lima orang yang sama. Bentuk selisih sebelum dikurangi sesudah dan tentukan maknanya.",
      solution:[
        "Diketahui setiap $X_i$ dipasangkan dengan $Y_i$ dari orang yang sama; yang dicari ialah $d_i=X_i-Y_i$, bukan seluruh selisih antara sembarang dua orang.",
        "Perhitungan per pasangan memberi $(10-8,12-8,11-8,14-9,9-8)=(2,4,3,5,1)$. Semua selisih positif, sehingga setiap orang pada data ini mengalami penurunan nilai.",
        "Jumlah selisih $2+4+3+5+1=15$ dan mean selisih $15/5=3$. Perubahan rata-rata tiga satuan adalah statistik sampel; untuk menyimpulkan perubahan populasi diperlukan asumsi pengambilan sampel yang sesuai."
      ],conclusion:"Lima pasangan menghasilkan selisih $(2,4,3,5,1)$ dan penurunan rata-rata sampel sebesar 3."},
    {title:"Contoh Definisi Ragam Selisih",forDefinition:"Rata-rata dan Ragam Selisih",
      problem:"Untuk selisih $(2,4,3,5,1)$, hitung ragam sampel dan galat baku mean selisih.",
      solution:[
        "Diketahui $n=5$ dan $\bar d=3$. Deviasi terhadap mean adalah $(-1,1,0,2,-2)$, dengan jumlah nol sebagaimana identitas pemusatan.",
        "Jumlah kuadrat deviasi $1+1+0+4+4=10$. Karena mean ditaksir dari data, ragam sampel menggunakan $n-1=4$: $s_D^2=10/4=5/2$, sehingga $s_D=\sqrt{5/2}$.",
        "Galat baku mean selisih adalah $se(\bar d)=s_D/\sqrt5=\sqrt{(5/2)/5}=1/\sqrt2\approx0{,}7071$. Angka ini bukan simpangan baku pengamatan tunggal."
      ],conclusion:"Ragam selisih $5/2$ dan galat baku rata-ratanya $1/\sqrt2$."},
    {title:"Contoh Definisi Uji t Berpasangan",forDefinition:"Uji t Berpasangan",
      problem:"Dengan selisih $(2,4,3,5,1)$, uji $H_0:\mu_D=0$ terhadap $H_1:\mu_D\ne0$ pada taraf 5%, jika model selisih normal dan pasangan independen.",
      solution:[
        "Diketahui $n=5$, $\bar d=3$, $s_D^2=5/2$ dan $se=1/\sqrt2>0$. Normalitas selisih dan independensi antarpasangan memungkinkan distribusi Student eksak dengan derajat bebas $n-1=4$.",
        "Statistik teramati $t=(3-0)/(1/\sqrt2)=3\sqrt2\approx4{,}243$. Untuk uji dua sisi taraf 5%, nilai kritis $t_{0{,}975;4}\approx2{,}776$.",
        "Karena $|t|\approx4{,}243>2{,}776$, hipotesis nol ditolak. Keputusan ini menyangkut mean selisih populasi, bukan klaim bahwa setiap individu pasti berubah."
      ],conclusion:"Pada model normal selisih, terdapat bukti statistik perubahan mean dari nol pada taraf 5%."},
    {title:"Contoh Definisi Interval Kepercayaan",forDefinition:"Interval Kepercayaan Mean Selisih",
      problem:"Bangun interval kepercayaan 95% untuk mean selisih dari data $(2,4,3,5,1)$.",
      solution:[
        "Gunakan hasil sebelumnya: $\bar d=3$, $s_D/\sqrt n=1/\sqrt2$, dan $n-1=4$. Untuk cakupan 95%, $\alpha=0{,}05$ dan kuantil Student $t_{0{,}975;4}\approx2{,}776$.",
        "Margin galat $m=2{,}776/\sqrt2\approx1{,}963$. Batas bawah $3-1{,}963\approx1{,}037$ dan batas atas $3+1{,}963\approx4{,}963$.",
        "Nol berada di luar interval, sesuai keputusan uji t dua sisi pada taraf 5%. Interpretasi cakupan berlaku pada prosedur pengambilan sampel berulang di bawah model normal selisih."
      ],conclusion:"Interval kepercayaan 95% adalah sekitar $[1{,}037,4{,}963]$."},
    {title:"Kovarians Menjelaskan Manfaat Pemasangan",
      problem:"Diketahui $\operatorname{Var}(X)=9$, $\operatorname{Var}(Y)=4$, dan $\operatorname{Cov}(X,Y)=5$. Tentukan ragam $D=X-Y$ dan bandingkan dengan asumsi keliru bahwa keduanya independen.",
      solution:[
        "Kedua pengukuran berasal dari unit yang sama; tidak ada alasan untuk menghapus kovarians. Identitas ragam selisih berlaku asalkan momen kedua hingga.",
        "Hitung $\operatorname{Var}(D)=9+4-2(5)=3$. Jika korelasi diabaikan, hasil yang keliru adalah $9+4=13$, lebih dari empat kali ragam selisih yang benar.",
        "Nilai kovarians 5 konsisten dengan Cauchy–Schwarz karena $|5|\le\sqrt{9\cdot4}=6$. Contoh ini menunjukkan manfaat pemasangan ketika kovarians positif, bukan jaminan bahwa setiap desain berpasangan selalu lebih presisi."
      ],conclusion:"Ragam selisih adalah 3, bukan 13."},
    {title:"Menghitung Kovarians dari Pasangan yang Sama",
      problem:"Untuk $X=(10,12,11,14,9)$ dan $Y=(8,8,8,9,8)$, periksa identitas $s_D^2=s_X^2+s_Y^2-2s_{XY}$.",
      solution:[
        "Rata-rata masing-masing data adalah $\bar x=56/5=11{,}2$ dan $\bar y=41/5=8{,}2$. Dari selisih $(2,4,3,5,1)$ diketahui $s_D^2=5/2=2{,}5$.",
        "Jumlah kuadrat deviasi $X$ ialah $14{,}8$, sehingga $s_X^2=14{,}8/4=3{,}7$. Jumlah kuadrat deviasi $Y$ ialah $0{,}8$, sehingga $s_Y^2=0{,}8/4=0{,}2$.",
        "Jumlah hasil kali deviasi antarpasangan ialah $2{,}8$, sehingga kovarians sampel $s_{XY}=2{,}8/4=0{,}7$. Substitusi memberi $3{,}7+0{,}2-2(0{,}7)=2{,}5$, tepat sama dengan ragam selisih langsung.",
        "Jika diperlakukan sebagai dua sampel independen, galat baku selisih mean menjadi $\sqrt{(3{,}7+0{,}2)/5}=\sqrt{0{,}78}$, bukan $\sqrt{2{,}5/5}=\sqrt{0{,}5}$. Pengabaian kovarians mengubah inferensi."
      ],conclusion:"Identitas ragam dan kovarians terverifikasi secara numerik."},
    {title:"Uji Tanda Tidak Sama dengan Uji Mean",
      problem:"Enam selisih nonnol memiliki tanda $(+,+,+,+,+,-)$. Hitung nilai p dua sisi uji tanda di bawah hipotesis tanda seimbang.",
      solution:[
        "Diketahui enam pasangan independen dan diasumsikan setiap tanda positif maupun negatif mempunyai peluang $1/2$ di bawah hipotesis nol. Statistik banyak tanda positif ialah $B=5$.",
        "Karena $B\sim\operatorname{Bin}(6,1/2)$, peluang ekor atas $P(B\ge5)=[\binom65+\binom66]/2^6=(6+1)/64=7/64$.",
        "Distribusi simetris terhadap 3, sehingga nilai p dua sisi untuk hasil seekstrem 5 adalah $P(B\le1\text{ atau }B\ge5)=2(7/64)=7/32=0{,}21875$. Pada taraf 5% tidak menolak keseimbangan tanda.",
        "Nilai p ini tidak dapat dipakai sebagai nilai p uji t: uji tanda tidak menggunakan besaran selisih, sedangkan uji t menguji mean selisih dengan asumsi yang berbeda."
      ],conclusion:"Nilai p uji tanda dua sisi $7/32$, sehingga hipotesis keseimbangan tanda tidak ditolak pada 5%."},
    {title:"Kegagalan Statistik t pada Ragam Nol",
      problem:"Selisih teramati $(2,2,2,2)$. Tentukan $\bar d$, $s_D^2$, dan apakah rumus uji t biasa dapat langsung digunakan.",
      solution:[
        "Diketahui $n=4$ dan semua selisih bernilai 2. Rata-ratanya $\bar d=(2+2+2+2)/4=2$.",
        "Setiap deviasi $d_i-\bar d$ bernilai nol. Karena itu $\sum_i(d_i-\bar d)^2=0$ dan $s_D^2=0/(4-1)=0$; galat baku $s_D/\sqrt4=0$.",
        "Statistik t yang membagi $\bar d-\mu_0$ dengan nol tidak terdefinisi. Kita tidak boleh menyebut hasilnya sebagai statistik Student atau otomatis mengklaim nilai p nol. Model normal dengan $\sigma_D^2>0$ masih dapat menghasilkan data konstan hanya pada kejadian berprobabilitas nol; kasus data teramati ini memerlukan penanganan khusus dan pemeriksaan kualitas pengukuran."
      ],conclusion:"Rata-rata 2 dan ragam 0; statistik t biasa tidak terdefinisi."}
  ],
  exercises:[
    {prompt:"BP-01. Selisih lima pasangan adalah $(1,2,3,4,5)$. Tentukan mean, ragam sampel, galat baku, dan statistik t untuk $H_0:\mu_D=3$.",
      hint:"Hitung deviasi terhadap 3, lalu gunakan derajat bebas empat.",
      answer:"Diketahui $n=5$ dan $d=(1,2,3,4,5)$. Jumlahnya 15, sehingga $\bar d=15/5=3$. Deviasi adalah $(-2,-1,0,1,2)$; jumlah kuadrat $4+1+0+1+4=10$. Ragam sampel $s_D^2=10/(5-1)=5/2$, dan galat baku $se=\sqrt{(5/2)/5}=1/\sqrt2$. Untuk hipotesis mean 3, $t=(3-3)/(1/\sqrt2)=0$ dengan empat derajat bebas. Dalam model normal selisih, nilai p dua sisi tepat 1. Seluruh hasil konsisten dengan simetri data terhadap 3."},
    {prompt:"BP-02. Buktikan secara aljabar bahwa menggeser semua pengukuran sesudah sebesar $c$ menggeser mean selisih tetapi tidak mengubah ragamnya.",
      hint:"Jika $Y_i'=Y_i+c$, perhatikan $D_i'=X_i-Y_i'$.",
      answer:"Diketahui $D_i=X_i-Y_i$ dan $Y_i'=Y_i+c$. Selisih baru $D_i'=X_i-(Y_i+c)=D_i-c$, sehingga $\bar D'=n^{-1}\sum_i(D_i-c)=\bar D-c$. Untuk setiap $i$, $D_i'-\bar D'=(D_i-c)-(\bar D-c)=D_i-\bar D$. Kuadrat penyimpangan identik sebelum dan sesudah perubahan, sehingga $S_{D'}^2=(n-1)^{-1}\sum_i(D_i'-\bar D')^2=S_D^2$. Kedua klaim berlaku tanpa asumsi normalitas. Perhatikan tanda negatif: karena yang ditambah adalah pengukuran SESUDAH, mean selisih sebelum dikurangi sesudah turun sebesar $c$, bukan naik."},
    {prompt:"BP-03. Dengan $n=5$, $\bar d=3$, dan $s_D^2=5/2$, bangun interval 95% dan periksa ekuivalensinya dengan uji dua sisi $H_0:\mu_D=0$.",
      hint:"Gunakan $t_{0{,}975;4}\approx2{,}776$.",
      answer:"Diketahui model normal selisih, $n=5$ dan $s_D>0$. Galat baku $se=\sqrt{(5/2)/5}=1/\sqrt2$. Dengan derajat bebas empat, margin 95% adalah $2{,}776/\sqrt2\approx1{,}963$, sehingga interval $[3-1{,}963,3+1{,}963]\approx[1{,}037,4{,}963]$. Karena nol lebih kecil daripada batas bawah, nol berada di luar interval. Secara terpisah, statistik $t=3/(1/\sqrt2)=3\sqrt2\approx4{,}243>2{,}776$, sehingga uji dua sisi menolak. Kedua keputusan setara karena pembagian oleh galat baku positif mengubah ketaksamaan batas interval menjadi aturan kritis Student."},
    {prompt:"BP-04. Pasangan $(X_i,Y_i)$ mempunyai ragam 9 dan 4 serta kovarians 5. Hitung ragam selisih dan jelaskan akibat jika data diperlakukan independen.",
      hint:"Kembangkan kuadrat selisih terpusat, jangan hilangkan suku kovarians.",
      answer:"Diketahui $\operatorname{Var}(X)=9$, $\operatorname{Var}(Y)=4$, $\operatorname{Cov}(X,Y)=5$ dan momen kedua hingga. Pusatkan $D=X-Y$ menjadi $(X-EX)-(Y-EY)$. Setelah dikuadratkan dan diambil ekspektasi, diperoleh $\operatorname{Var}(D)=9+4-2(5)=3$. Jika kedua pengukuran dianggap independen, suku kovarians dihilangkan dan hasil menjadi 13, yang salah untuk pasangan ini. Kovarians 5 sah karena $5\le\sqrt{9\cdot4}=6$. Pada $n$ pasangan independen, ragam rata-rata selisih yang benar adalah $3/n$, bukan $13/n$; akibatnya galat baku salah jika struktur pasangan diabaikan."},
    {prompt:"BP-05. Untuk delapan selisih nonnol independen, tujuh positif dan satu negatif. Hitung nilai p dua sisi uji tanda dan putuskan pada taraf 5%.",
      hint:"Gunakan $B\sim\operatorname{Bin}(8,1/2)$ dan kedua ekor.",
      answer:"Di bawah hipotesis keseimbangan tanda, tiap tanda positif memiliki peluang $1/2$ dan antarpasangan independen. Dengan $B=7$ dan $n=8$, $P(B\ge7)=[\binom87+\binom88]/2^8=(8+1)/256=9/256$. Karena distribusi binomial simetris, kejadian setidaknya seekstrem tujuh positif adalah $B\le1$ atau $B\ge7$, dengan peluang dua sisi $2(9/256)=18/256=9/128\approx0{,}0703125$. Nilai p melebihi 0,05, sehingga keseimbangan tanda tidak ditolak. Hasil ini tidak menguji mean secara langsung dan tidak memerlukan normalitas selisih."},
    {prompt:"BP-06. Berikan contoh empat selisih yang rata-ratanya nol tetapi tanda positif dan negatifnya tidak seimbang; jelaskan mengapa uji tanda dan uji t menargetkan hal berbeda.",
      hint:"Pilih tiga bilangan positif kecil dan satu negatif yang menyeimbangkan jumlah.",
      answer:"Ambil $d=(1,1,1,-3)$ dari empat pasangan. Jumlahnya $1+1+1-3=0$, sehingga $\bar d=0$. Tanda positif ada tiga dan negatif satu, sehingga proporsi tanda positif sampel adalah $3/4$, bukan $1/2$. Ragam sampel $s_D^2=[1^2+1^2+1^2+(-3)^2]/3=12/3=4$ dan galat baku $2/\sqrt4=1$, maka statistik uji t untuk mean nol adalah $t=0/1=0$. Uji tanda memakai $B=3$ dari empat dan tidak mempertimbangkan besarnya -3; uji t mempertimbangkan magnitudo melalui mean dan ragam. Satu sampel ini menunjukkan statistik kedua uji berbeda, bukan membuktikan sifat median populasi."},
    {prompt:"BP-07. Jelaskan secara matematis mengapa lima pasang selisih $(2,4,3,5,1)$ tidak boleh diperlakukan sebagai sepuluh selisih independen.",
      hint:"Tentukan unit sampel dan jumlah derajat bebas.",
      answer:"Unit independen adalah orang, bukan setiap angka sebelum dan sesudah. Data terdiri dari lima vektor pasangan $(X_i,Y_i)$; masing-masing menghasilkan satu selisih $D_i=X_i-Y_i$. Rata-rata selisih ditaksir dari $n=5$ pengamatan $D_i$, sehingga $s_D^2=\sum_i(d_i-\bar d)^2/(5-1)=10/4=5/2$. Distribusi t eksak, jika asumsi normal selisih dipenuhi, mempunyai derajat bebas $5-1=4$. Menggunakan sepuluh pengamatan independen akan menghilangkan kovarians dalam pasangan dan secara keliru menggunakan derajat bebas lain. Kesimpulan inferensial harus bertumpu pada lima selisih, bukan pada sepuluh angka yang saling berpasangan."},
    {prompt:"BP-08. Buktikan dua arah bahwa penolakan uji t dua sisi pada taraf $\alpha$ ekuivalen dengan $\mu_0$ berada di luar interval kepercayaan $1-\alpha$ untuk mean selisih.",
      hint:"Tetapkan $c=t_{1-\alpha/2,n-1}$ dan $h=cs_D/\sqrt n>0$.",
      answer:"Diketahui $n\ge2$, $s_D>0$, dan model normal selisih; tetapkan $c=t_{1-\alpha/2,n-1}>0$ serta $h=cs_D/\sqrt n>0$. (⇒) Jika uji menolak, $|(\bar d-\mu_0)/(s_D/\sqrt n)|>c$, sehingga $|\bar d-\mu_0|>h$. Akibatnya $\mu_0<\bar d-h$ atau $\mu_0>\bar d+h$; titik nol hipotesis berada di luar interval. (⇐) Jika $\mu_0$ berada di luar $[\bar d-h,\bar d+h]$, salah satu pertidaksamaan ketat tersebut berlaku, sehingga $|\bar d-\mu_0|>h$. Karena $s_D/\sqrt n>0$, pembagian memberikan $|t|>c$, yakni aturan penolakan. Pada batas interval, ketaksamaan ketat tidak terpenuhi, sehingga uji tidak menolak. Kedua arah telah dibuktikan."}
  ],
  mistakes:[],
  connections:[]
};
