import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Inferensi koefisien regresi untuk desain tetap dan galat normal independen.
 * Rujukan: Montgomery, Peck & Vining, Introduction to Linear Regression Analysis,
 * ed. 5 (2012), bab 2–3; Seber & Lee, Linear Regression Analysis, ed. 2 (2003).
 */
export const regressionInferenceContent:BookLessonContent={
  intro:[
    "Garis kuadrat terkecil yang dihitung dari sampel tidak sama dengan garis populasi. Bahkan jika hubungan rata-rata benar-benar linear, sampel lain dapat menghasilkan kemiringan dan intersep berbeda. Inferensi regresi mengukur ketidakpastian itu dengan memisahkan variasi yang dijelaskan oleh model dari variasi residual.",
    "Ambil pasangan pengamatan dengan nilai prediktor tetap $x_1,\\ldots,x_n$ dan respons $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$. Persamaan normal menentukan koefisien taksiran. Untuk menyimpulkan distribusi statistik uji $t$ secara eksak, kita memerlukan asumsi lebih kuat: galat independen, normal, bermean nol, dan mempunyai varians sama. Jika asumsi normalitas dilepas, rumus kuadrat terkecil tetap berlaku tetapi distribusi $t$ berderajat bebas $n-2$ tidak otomatis eksak.",
    "Kita menurunkan ragam penaksir, penduga ragam residual, statistik $t$, dan interval kepercayaan dengan pembuktian eksplisit. Satu himpunan data berukuran lima digunakan berulang agar perhitungan $S_{xx}$, $S_{xy}$, $SSE$, galat baku, dan interval dapat diperiksa secara silang. Rujukan: Montgomery, Peck, dan Vining (2012); Seber dan Lee (2003)."
  ],
  formal:[
    {kind:"definition",title:"Model Regresi Normal dengan Desain Tetap",
      statement:"Untuk $n\\geq3$ dan bilangan tetap $x_1,\\ldots,x_n$ yang tidak semuanya sama, model regresi linear sederhana normal adalah $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$, $i=1,\\ldots,n$, dengan $\\varepsilon_i$ independen dan identik berdistribusi $N(0,\\sigma^2)$, $\\sigma^2>0$. Parameter $\\beta_0,\\beta_1,\\sigma^2$ tidak diketahui; $x_i$ diperlakukan tetap, bukan peubah acak."},
    {kind:"definition",title:"Penaksir Kuadrat Terkecil dan Jumlah Kuadrat",
      statement:"Definisikan $\\bar x=n^{-1}\\sum_i x_i$, $\\bar Y=n^{-1}\\sum_iY_i$, $S_{xx}=\\sum_i(x_i-\\bar x)^2>0$, dan $S_{xy}=\\sum_i(x_i-\\bar x)(Y_i-\\bar Y)$. Penaksir kuadrat terkecil ialah $\\widehat\\beta_1=S_{xy}/S_{xx}$ dan $\\widehat\\beta_0=\\bar Y-\\widehat\\beta_1\\bar x$. Residual $e_i=Y_i-\\widehat\\beta_0-\\widehat\\beta_1x_i$ menghasilkan $SSE=\\sum_i e_i^2$."},
    {kind:"definition",title:"Ragam Residual dan Galat Baku Koefisien",
      statement:"Dalam model dengan dua parameter regresi, penduga ragam galat adalah $s^2=SSE/(n-2)$. Galat baku taksiran kemiringan ialah $se(\\widehat\\beta_1)=s/\\sqrt{S_{xx}}$, sedangkan galat baku intersep ialah $se(\\widehat\\beta_0)=s\\sqrt{1/n+\\bar x^2/S_{xx}}$. Keduanya terdefinisi hampir pasti di bawah model normal dengan $n\\geq3$ dan $S_{xx}>0$."},
    {kind:"definition",title:"Interval Kepercayaan Koefisien dan Statistik Uji",
      statement:"Untuk $j\\in\\{0,1\\}$ dan $0<\\alpha<1$, interval kepercayaan dua sisi bertaraf $1-\\alpha$ bagi $\\beta_j$ adalah $\\widehat\\beta_j\\pm t_{1-\\alpha/2,n-2}\\,se(\\widehat\\beta_j)$, dengan $t_{q,\\nu}$ kuantil ke-$q$ distribusi Student $t$ berderajat bebas $\\nu$. Untuk menguji $H_0:\\beta_j=b_j$, statistiknya $T_j=(\\widehat\\beta_j-b_j)/se(\\widehat\\beta_j)$; uji dua sisi menolak bila $|T_j|>t_{1-\\alpha/2,n-2}$."},
    {kind:"proposition",title:"Ketakbiasan dan Ragam Penaksir Regresi",
      statement:"Dalam model regresi dengan desain tetap, $E\\varepsilon_i=0$, $\\operatorname{Var}(\\varepsilon_i)=\\sigma^2$, dan galat saling tidak berkorelasi, berlaku $E\\widehat\\beta_j=\\beta_j$, $\\operatorname{Var}(\\widehat\\beta_1)=\\sigma^2/S_{xx}$, $\\operatorname{Var}(\\widehat\\beta_0)=\\sigma^2(1/n+\\bar x^2/S_{xx})$, serta $\\operatorname{Cov}(\\widehat\\beta_0,\\widehat\\beta_1)=-\\bar x\\sigma^2/S_{xx}$. Normalitas tidak diperlukan untuk hasil ini.",
      proof:[
        "Diketahui $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$ dan $\\sum_i(x_i-\\bar x)=0$. Substitusi ke $S_{xy}$ memberi $S_{xy}=\\beta_1S_{xx}+\\sum_i(x_i-\\bar x)\\varepsilon_i$. Karena $S_{xx}>0$, diperoleh $\\widehat\\beta_1=\\beta_1+\\sum_i(x_i-\\bar x)\\varepsilon_i/S_{xx}$.",
        "Mengambil ekspektasi dan menggunakan $E\\varepsilon_i=0$ membuktikan $E\\widehat\\beta_1=\\beta_1$. Karena galat tidak berkorelasi, ragam jumlah adalah jumlah ragam: $\\operatorname{Var}(\\widehat\\beta_1)=\\sigma^2\\sum_i(x_i-\\bar x)^2/S_{xx}^2=\\sigma^2/S_{xx}$.",
        "Dari $\\bar Y=\\beta_0+\\beta_1\\bar x+\\bar\\varepsilon$ diperoleh $\\widehat\\beta_0=\\beta_0+\\bar\\varepsilon-\\bar x(\\widehat\\beta_1-\\beta_1)$. Maka $E\\widehat\\beta_0=\\beta_0$ dan $\\operatorname{Var}(\\bar\\varepsilon)=\\sigma^2/n$.",
        "Kovarians $\\operatorname{Cov}(\\bar\\varepsilon,\\widehat\\beta_1-\\beta_1)=\\sigma^2\\sum_i(x_i-\\bar x)/(nS_{xx})=0$. Oleh karena itu $\\operatorname{Var}(\\widehat\\beta_0)=\\sigma^2/n+\\bar x^2\\sigma^2/S_{xx}$ dan $\\operatorname{Cov}(\\widehat\\beta_0,\\widehat\\beta_1)=-\\bar x\\sigma^2/S_{xx}$. Semua identitas mengikuti dari asumsi momen kedua, sehingga proposisi terbukti."
      ]},
    {kind:"theorem",title:"Distribusi Jumlah Kuadrat Residual",
      statement:"Jika $\\varepsilon_1,\\ldots,\\varepsilon_n$ independen $N(0,\\sigma^2)$ dengan $n\\geq3$ dan $S_{xx}>0$, maka $SSE/\\sigma^2\\sim\\chi^2_{n-2}$, $E[s^2]=\\sigma^2$, dan $SSE$ independen dari pasangan $(\\widehat\\beta_0,\\widehat\\beta_1)$.",
      proof:[
        "Tuliskan vektor respons $Y=X\\beta+\\varepsilon$, dengan matriks desain $X$ berkolom $\\mathbf1$ dan $(x_i)$. Karena $S_{xx}>0$, kedua kolom bebas linear dan $\\operatorname{rank}(X)=2$. Matriks proyeksi ortogonal ke ruang kolom $X$ ialah $H=X(X^TX)^{-1}X^T$; maka residual $e=(I-H)Y=(I-H)\\varepsilon$.",
        "Matriks $I-H$ simetris, idempoten, dan berperingkat $n-2$. Pilih matriks ortogonal $Q$ yang dua kolom pertamanya membentang ruang kolom $X$, sedangkan $n-2$ kolom sisanya membentang komplemen ortogonal. Karena $\\varepsilon/\\sigma\\sim N_n(0,I_n)$, vektor $Z=Q^T\\varepsilon/\\sigma$ memiliki $n$ komponen normal baku yang saling independen.",
        "Dalam koordinat tersebut, $SSE/\\sigma^2=\\|(I-H)\\varepsilon/\\sigma\\|^2=\\sum_{j=3}^n Z_j^2$, sehingga menurut definisi distribusi chi-kuadrat, $SSE/\\sigma^2\\sim\\chi^2_{n-2}$. Ekspektasinya $n-2$ dan $E[s^2]=E[SSE]/(n-2)=\\sigma^2$.",
        "Penaksir $\\widehat\\beta=(X^TX)^{-1}X^TY$ hanya bergantung pada komponen proyeksi $H\\varepsilon$, yaitu dua koordinat pertama $Z_1,Z_2$, sedangkan $SSE$ hanya bergantung pada $Z_3,\\ldots,Z_n$. Independensi koordinat normal membuktikan independensi $SSE$ dan $\\widehat\\beta$. Dengan demikian seluruh pernyataan teorema terbukti."
      ],citation:"Seber dan Lee (2003), distribusi proyeksi normal; Montgomery, Peck, dan Vining (2012)."},
    {kind:"theorem",title:"Statistik Student dan Cakupan Interval Kepercayaan",
      statement:"Dalam model regresi normal dengan desain tetap, untuk $j=0,1$ berlaku $(\\widehat\\beta_j-\\beta_j)/se(\\widehat\\beta_j)\\sim t_{n-2}$. Karena itu interval dua sisi pada definisi sebelumnya memiliki probabilitas cakupan tepat $1-\\alpha$ untuk parameter tetap $\\beta_j$.",
      proof:[
        "Proposisi ketakbiasan dan ragam memberi $(\\widehat\\beta_j-\\beta_j)/(\\sigma c_j)\\sim N(0,1)$, dengan $c_1=1/\\sqrt{S_{xx}}$ dan $c_0=\\sqrt{1/n+\\bar x^2/S_{xx}}$. Normalitasnya mengikuti karena masing-masing penaksir merupakan kombinasi linear galat normal.",
        "Teorema residual memberi $U=SSE/\\sigma^2\\sim\\chi^2_{n-2}$, independen dari kedua penaksir. Dengan $s^2=SSE/(n-2)$, diperoleh $se(\\widehat\\beta_j)=\\sigma c_j\\sqrt{U/(n-2)}$.",
        "Maka $T_j=Z/\\sqrt{U/(n-2)}$, dengan $Z\\sim N(0,1)$ independen dari $U$. Berdasarkan definisi distribusi Student, $T_j\\sim t_{n-2}$. Karena distribusi ini simetris, $P(-t_{1-\\alpha/2,n-2}\\leq T_j\\leq t_{1-\\alpha/2,n-2})=1-\\alpha$.",
        "Kalikan ketaksamaan terakhir dengan galat baku positif dan susun kembali batas-batasnya. Diperoleh $P(\\widehat\\beta_j-t_{1-\\alpha/2,n-2}se(\\widehat\\beta_j)\\leq\\beta_j\\leq\\widehat\\beta_j+t_{1-\\alpha/2,n-2}se(\\widehat\\beta_j))=1-\\alpha$. Inilah arti cakupan berulang; setelah data diamati, parameter bukan peubah acak. Teorema terbukti."
      ]},
    {kind:"proposition",title:"Identitas Uji Kemiringan dan Uji F Regresi",
      statement:"Untuk regresi linear sederhana dengan intersep dan $S_{xx}>0$, definisikan $SSR=\\sum_i(\\widehat Y_i-\\bar Y)^2$ dan $MSE=SSE/(n-2)>0$. Statistik uji kemiringan $T_1=\\widehat\\beta_1/\\sqrt{MSE/S_{xx}}$ untuk $H_0:\\beta_1=0$ memenuhi identitas aljabar $T_1^2=F$, dengan $F=(SSR/1)/MSE$. Dalam model normal, di bawah $H_0$ statistik $F\\sim F_{1,n-2}$.",
      proof:[
        "Persamaan normal memberi $\\widehat\\beta_0=\\bar Y-\\widehat\\beta_1\\bar x$. Karena itu $\\widehat Y_i-\\bar Y=\\widehat\\beta_1(x_i-\\bar x)$ dan $SSR=\\widehat\\beta_1^2\\sum_i(x_i-\\bar x)^2=\\widehat\\beta_1^2S_{xx}$.",
        "Substitusikan ke definisi $F$: $F=\\widehat\\beta_1^2S_{xx}/MSE=(\\widehat\\beta_1/\\sqrt{MSE/S_{xx}})^2=T_1^2$. Identitas ini tidak memerlukan normalitas; hanya membutuhkan $MSE>0$.",
        "Di bawah $H_0:\\beta_1=0$ dan asumsi normal, teorema Student memberi $T_1\\sim t_{n-2}$. Kuadrat peubah Student tersebut mempunyai distribusi $F_{1,n-2}$, sehingga pernyataan distribusi juga berlaku. Dengan demikian proposisi terbukti."
      ]}
  ],
  examples:[
    {title:"Model Normal dan Syarat Inferensi",forDefinition:"Model Regresi Normal dengan Desain Tetap",
      problem:"Diberikan prediktor tetap $x=(0,1,2,3,4)$ dan model $Y_i=\\beta_0+\\beta_1x_i+\\varepsilon_i$, dengan galat independen $N(0,\\sigma^2)$. Tentukan apakah syarat inferensi regresi sederhana eksak terpenuhi dan apakah syarat itu tetap berlaku bila semua $x_i=2$.",
      solution:[
        "Diketahui $n=5$, prediktor $(0,1,2,3,4)$, serta galat independen dengan distribusi normal, mean nol, dan varians sama $\\sigma^2>0$. Untuk menerapkan inferensi koefisien, diperlukan $n\\geq3$ dan $S_{xx}>0$ agar intersep dan kemiringan teridentifikasi.",
        "Hitung $\\bar x=(0+1+2+3+4)/5=2$. Maka $S_{xx}=(-2)^2+(-1)^2+0^2+1^2+2^2=10>0$. Dua kolom desain, yaitu vektor satuan konstan dan vektor $x$, bebas linear.",
        "Jika semua $x_i=2$, maka $\\bar x=2$ dan $S_{xx}=\\sum_i(2-2)^2=0$. Nilai $\\beta_0$ dan $\\beta_1$ hanya muncul melalui kombinasi $\\beta_0+2\\beta_1$, sehingga tidak dapat ditaksir secara terpisah dari data tersebut.",
        "Jadi desain pertama memenuhi syarat model untuk inferensi Student, sedangkan desain konstan tidak. Normalitas galat saja tidak dapat menggantikan kebutuhan variasi prediktor."
      ],conclusion:"Desain $(0,1,2,3,4)$ mempunyai $S_{xx}=10$; desain konstan membuat kemiringan tidak teridentifikasi."},
    {title:"Menghitung Koefisien dan SSE dari Lima Data",forDefinition:"Penaksir Kuadrat Terkecil dan Jumlah Kuadrat",
      problem:"Untuk $x=(0,1,2,3,4)$ dan $y=(1,2,2,4,6)$, hitung $\\widehat\\beta_0$, $\\widehat\\beta_1$, lima residual, serta $SSE$ tanpa melewati langkah aritmetika.",
      solution:[
        "Diketahui $n=5$, $\\bar x=2$, dan $\\bar y=(1+2+2+4+6)/5=3$. Deviasi $x_i-\\bar x$ adalah $(-2,-1,0,1,2)$, sedangkan deviasi $y_i-\\bar y$ adalah $(-2,-1,-1,1,3)$.",
        "Diperoleh $S_{xx}=4+1+0+1+4=10$ dan $S_{xy}=4+1+0+1+6=12$. Oleh karena itu $\\widehat\\beta_1=12/10=6/5$ dan $\\widehat\\beta_0=3-(6/5)2=3/5$.",
        "Prediksi berurutan ialah $(3/5,9/5,3,21/5,27/5)$. Selisih observasi dan prediksi menghasilkan residual $(2/5,1/5,-1,-1/5,3/5)$. Periksa $\\sum_i e_i=2/5+1/5-1-1/5+3/5=0$ dan $\\sum_i x_ie_i=1/5-2-3/5+12/5=0$.",
        "Jumlah kuadrat residual adalah $SSE=(2/5)^2+(1/5)^2+(-1)^2+(-1/5)^2+(3/5)^2=(4+1+25+1+9)/25=40/25=8/5$. Kedua persamaan normal dan nilai $SSE$ telah diverifikasi."
      ],conclusion:"Garis taksiran $\\widehat y=3/5+(6/5)x$ dan $SSE=8/5$."},
    {title:"Ragam Residual dan Galat Baku",forDefinition:"Ragam Residual dan Galat Baku Koefisien",
      problem:"Gunakan lima data pada contoh sebelumnya untuk menghitung $s^2$, $se(\\widehat\\beta_1)$, dan $se(\\widehat\\beta_0)$.",
      solution:[
        "Diketahui $n=5$, $SSE=8/5$, $S_{xx}=10$, dan $\\bar x=2$. Karena model menaksir dua parameter, derajat bebas residual adalah $n-2=3$, bukan $n-1$.",
        "Penduga ragam residual adalah $s^2=(8/5)/3=8/15$. Galat baku kemiringan diperoleh dari $se(\\widehat\\beta_1)=\\sqrt{(8/15)/10}=\\sqrt{4/75}=2/\\sqrt{75}\\approx0{,}23094$.",
        "Galat baku intersep adalah $se(\\widehat\\beta_0)=\\sqrt{(8/15)(1/5+2^2/10)}=\\sqrt{(8/15)(3/5)}=\\sqrt{8/25}=2\\sqrt2/5\\approx0{,}56569$.",
        "Pemeriksaan satuan: galat baku kemiringan mempunyai satuan respons per satuan prediktor, sedangkan galat baku intersep mempunyai satuan respons. Nilai intersep lebih tidak pasti karena $x=0$ berada jauh dari pusat desain $\\bar x=2$."
      ],conclusion:"$s^2=8/15$, $se(\\widehat\\beta_1)=2/\\sqrt{75}$, dan $se(\\widehat\\beta_0)=2\\sqrt2/5$."},
    {title:"Interval Kepercayaan Kemiringan 95 Persen",forDefinition:"Interval Kepercayaan Koefisien dan Statistik Uji",
      problem:"Dengan lima data yang sama dan $t_{0{,}975;3}\\approx3{,}182$, bentuk interval kepercayaan 95% untuk $\\beta_1$ dan uji $H_0:\\beta_1=0$ dua sisi.",
      solution:[
        "Diketahui $\\widehat\\beta_1=6/5$, $se(\\widehat\\beta_1)=2/\\sqrt{75}$, dan derajat bebas $3$. Asumsi normalitas galat diperlukan agar distribusi Student yang digunakan memberikan cakupan eksak.",
        "Margin galat adalah $t_{0{,}975;3}\\,se(\\widehat\\beta_1)\\approx3{,}182(2/\\sqrt{75})\\approx0{,}735$. Dengan demikian intervalnya $[1{,}2-0{,}735,1{,}2+0{,}735]\\approx[0{,}465,1{,}935]$.",
        "Untuk uji dua sisi $H_0:\\beta_1=0$, statistik $T_1=(1{,}2-0)/(2/\\sqrt{75})=3\\sqrt3\\approx5{,}196$. Karena $5{,}196>3{,}182$, tolak $H_0$ pada taraf $5\\%$.",
        "Interval 95% tidak memuat nol, konsisten dengan keputusan uji dua sisi pada taraf 5%. Kesimpulan ini bersifat inferensial dalam model, bukan bukti hubungan sebab-akibat antara $x$ dan $Y$."
      ],conclusion:"Interval kemiringan sekitar $[0{,}465,1{,}935]$ dan $H_0:\\beta_1=0$ ditolak pada taraf 5%."},
    {title:"Ketakbiasan Tidak Memerlukan Normalitas",
      problem:"Misalkan galat saling tidak berkorelasi, mempunyai mean nol dan ragam $\\sigma^2$, tetapi tidak berdistribusi normal. Tunjukkan penaksir kemiringan tetap takbias dan jelaskan batas inferensi $t$ eksak.",
      solution:[
        "Diketahui $S_{xx}>0$ dan $\\widehat\\beta_1=\\beta_1+\\sum_i(x_i-\\bar x)\\varepsilon_i/S_{xx}$. Identitas ini berasal dari persamaan normal, sehingga tidak memerlukan bentuk distribusi galat.",
        "Dengan linearitas ekspektasi dan $E\\varepsilon_i=0$, diperoleh $E\\widehat\\beta_1=\\beta_1+\\sum_i(x_i-\\bar x)E\\varepsilon_i/S_{xx}=\\beta_1$. Jadi takbias tetap berlaku.",
        "Ragamnya $\\sigma^2/S_{xx}$ jika galat tidak berkorelasi dan homoskedastik. Namun, untuk statistik $t$ eksak kita memerlukan bentuk normal pada pembilang dan chi-kuadrat independen pada penyebut; kedua sifat itu tidak mengikuti hanya dari mean dan ragam.",
        "Karena itu rumus taksiran dan ragam dapat tetap benar ketika distribusi $t$ eksak salah. Pada sampel kecil, mengganti asumsi normal dengan alasan 'ukuran sampel cukup' tanpa memeriksa syarat limit tidak dibenarkan."
      ],conclusion:"Ketakbiasan OLS mengikuti asumsi momen; distribusi Student eksak memerlukan syarat tambahan."},
    {title:"Memeriksa Dekomposisi Jumlah Kuadrat",
      problem:"Untuk lima data utama, verifikasi $SST=SSR+SSE$ dan nilai $R^2$.",
      solution:[
        "Diketahui $\\bar y=3$ dan deviasi respons $(-2,-1,-1,1,3)$. Jumlah kuadrat total adalah $SST=4+1+1+1+9=16$.",
        "Karena $\\widehat\\beta_1=6/5$ dan $S_{xx}=10$, jumlah kuadrat regresi adalah $SSR=\\widehat\\beta_1^2S_{xx}=(36/25)10=72/5=14{,}4$.",
        "Jumlah kuadrat residual sudah diperoleh $SSE=8/5=1{,}6$. Maka $SSR+SSE=72/5+8/5=80/5=16=SST$. Kesamaan ini berlaku karena model memuat intersep dan residual ortogonal terhadap nilai fitted.",
        "Koefisien determinasi adalah $R^2=SSR/SST=(72/5)/16=9/10=0{,}9$. Angka ini menyatakan 90% variasi kuadrat terhadap mean sampel dijelaskan oleh garis fitted, bukan 90% perubahan kausal."
      ],conclusion:"$SST=16$, $SSR=72/5$, $SSE=8/5$, dan $R^2=0{,}9$."},
    {title:"Menguji Intersep dengan Derajat Bebas Benar",
      problem:"Gunakan data utama untuk menghitung statistik uji $H_0:\\beta_0=0$ dan bandingkan dengan kuantil dua sisi 5%.",
      solution:[
        "Diketahui $\\widehat\\beta_0=3/5$, $se(\\widehat\\beta_0)=2\\sqrt2/5$, dan $n-2=3$. Statistik uji memakai galat baku intersep, bukan galat baku kemiringan.",
        "Hitung $T_0=(3/5)/(2\\sqrt2/5)=3/(2\\sqrt2)\\approx1{,}061$. Nilai kritis dua sisi adalah $t_{0{,}975;3}\\approx3{,}182$.",
        "Karena $|T_0|<3{,}182$, hipotesis nol tidak ditolak pada taraf 5%. Ini tidak membuktikan intersep benar-benar nol; data hanya belum memberi bukti yang cukup untuk menyatakan berbeda dari nol.",
        "Sebagai pemeriksaan, interval 95% bagi intersep adalah $3/5\\pm3{,}182(2\\sqrt2/5)\\approx0{,}6\\pm1{,}800$, sehingga memuat nol. Keputusan interval dan uji konsisten."
      ],conclusion:"$T_0\\approx1{,}061$; tidak cukup bukti menolak $\\beta_0=0$ pada taraf 5%."},
    {title:"Kasus Galat Diskret yang Merusak Statistik Student",
      problem:"Ambil $n=3$, $x=(0,1,2)$, dan galat independen yang masing-masing bernilai $-1$ atau $1$ dengan peluang $1/2$. Tunjukkan statistik Student tidak harus terdefinisi, meskipun mean galat nol dan variansnya satu.",
      solution:[
        "Diketahui $E\\varepsilon_i=0$, $\\operatorname{Var}(\\varepsilon_i)=1$, dan galat independen. Namun galat tidak normal. Pilih kejadian semua galat sama, yaitu $(1,1,1)$ atau $(-1,-1,-1)$.",
        "Setiap konfigurasi mempunyai peluang $(1/2)^3=1/8$, sehingga gabungannya berpeluang $1/4$. Pada kedua konfigurasi itu, vektor galat merupakan kelipatan vektor konstan dan dapat diserap seluruhnya ke dalam intersep regresi.",
        "Akibatnya residual fitted semuanya nol, $SSE=0$, dan $s^2=SSE/(3-2)=0$. Rumus statistik Student $T=(\\widehat\\beta_1-\\beta_1)/(s/\\sqrt{S_{xx}})$ mempunyai penyebut nol pada kejadian dengan probabilitas positif.",
        "Distribusi Student kontinu tidak mempunyai atom 'tidak terdefinisi' semacam ini. Jadi independensi, mean nol, dan varians sama tidak cukup untuk mengklaim distribusi Student eksak pada sampel kecil."
      ],conclusion:"Pada model galat Rademacher ini, $P(SSE=0)\\geq1/4$, sehingga statistik $t$ tidak memiliki hukum Student eksak."}
  ],
  exercises:[
    {prompt:"Dengan $x=(0,1,2,3,4)$ dan $y=(1,2,2,4,6)$, hitung $S_{xx}$, $S_{xy}$, serta garis OLS. Verifikasi dua persamaan normal.",
      hint:"Pusatkan kedua variabel, kemudian periksa jumlah residual dan jumlah $x_ie_i$.",
      answer:"Diketahui $\\bar x=2$ dan $\\bar y=3$. Deviasi prediktor $(-2,-1,0,1,2)$ memberi $S_{xx}=4+1+0+1+4=10$, sedangkan hasil kali deviasi respons $(-2,-1,-1,1,3)$ memberi $S_{xy}=4+1+0+1+6=12$. Jadi $\\widehat\\beta_1=12/10=6/5$ dan $\\widehat\\beta_0=3-(6/5)2=3/5$. Residual berurutan adalah $(2/5,1/5,-1,-1/5,3/5)$. Jumlahnya $2/5+1/5-1-1/5+3/5=0$; jumlah berbobot prediktor $0+1/5-2-3/5+12/5=0$. Kedua persamaan normal terpenuhi, sehingga garis OLS ialah $\\widehat y=3/5+(6/5)x$."},
    {prompt:"Untuk data pada soal pertama, hitung $s^2$, kedua galat baku, dan derajat bebas residual. Jelaskan mengapa pembaginya bukan $n-1$.",
      hint:"Gunakan $SSE=8/5$, $S_{xx}=10$, dan $\\bar x=2$.",
      answer:"Diketahui $n=5$ dan dua koefisien regresi ditaksir dari data. Ruang residual berdimensi $n-2=3$, karena residual ortogonal terhadap vektor satuan dan vektor prediktor yang bebas linear. Dari residual pada soal pertama, $SSE=(4+1+25+1+9)/25=8/5$. Maka $s^2=SSE/3=8/15$. Galat baku kemiringan ialah $\\sqrt{(8/15)/10}=2/\\sqrt{75}\\approx0{,}23094$. Galat baku intersep ialah $\\sqrt{(8/15)(1/5+4/10)}=2\\sqrt2/5\\approx0{,}56569$. Pembagi $n-1$ hanya sesuai untuk ragam sampel ketika satu parameter mean ditaksir; di sini dua parameter menghabiskan dua derajat bebas."},
    {prompt:"Bentuk interval kepercayaan 95% bagi $\\beta_1$ pada data utama, lalu tentukan keputusan uji dua sisi $H_0:\\beta_1=0$ pada $\\alpha=0{,}05$. Gunakan $t_{0{,}975;3}=3{,}182$.",
      hint:"Periksa bahwa interval memuat nol atau tidak, dan cocokkan dengan statistik $t$.",
      answer:"Diketahui $\\widehat\\beta_1=6/5$, $se=2/\\sqrt{75}$, dan $n-2=3$. Dengan asumsi galat independen normal bermean nol dan varians sama, interval kepercayaan eksak adalah $6/5\\pm3{,}182(2/\\sqrt{75})$. Margin galat sekitar $0{,}735$, sehingga batas bawah $0{,}465$ dan batas atas $1{,}935$. Statistik uji $T=(6/5)/(2/\\sqrt{75})=3\\sqrt3\\approx5{,}196$ melebihi $3{,}182$, maka $H_0$ ditolak. Verifikasi: nol tidak termasuk interval, sehingga keputusan interval dan uji dua sisi identik pada taraf yang sama. Kesimpulan ini mengenai kemiringan populasi di bawah model, bukan kausalitas."},
    {prompt:"Buktikan bahwa $\\operatorname{Cov}(\\widehat\\beta_0,\\widehat\\beta_1)=-\\bar x\\sigma^2/S_{xx}$ jika galat tidak berkorelasi dan homoskedastik.",
      hint:"Gunakan $\\widehat\\beta_0-\\beta_0=\\bar\\varepsilon-\\bar x(\\widehat\\beta_1-\\beta_1)$.",
      answer:"Diketahui $\\widehat\\beta_1-\\beta_1=\\sum_i(x_i-\\bar x)\\varepsilon_i/S_{xx}$ dan $\\widehat\\beta_0-\\beta_0=\\bar\\varepsilon-\\bar x(\\widehat\\beta_1-\\beta_1)$. Dengan bilinearitas kovarians, $\\operatorname{Cov}(\\widehat\\beta_0,\\widehat\\beta_1)=\\operatorname{Cov}(\\bar\\varepsilon,\\widehat\\beta_1)-\\bar x\\operatorname{Var}(\\widehat\\beta_1)$. Suku pertama sama dengan $\\sigma^2\\sum_i(x_i-\\bar x)/(nS_{xx})=0$ karena deviasi prediktor berjumlah nol. Suku kedua adalah $-\\bar x\\sigma^2/S_{xx}$. Jadi kovariansnya persis $-\\bar x\\sigma^2/S_{xx}$; normalitas tidak digunakan."},
    {prompt:"Untuk data utama, hitung $SST$, $SSR$, $SSE$, $R^2$, statistik $F$ regresi, dan periksa identitas $F=T_1^2$.",
      hint:"Gunakan $S_{xy}=12$, $S_{xx}=10$, dan $MSE=8/15$.",
      answer:"Diketahui $\\bar y=3$ sehingga $SST=(-2)^2+(-1)^2+(-1)^2+1^2+3^2=16$. Jumlah kuadrat regresi $SSR=S_{xy}^2/S_{xx}=144/10=72/5=14{,}4$, sedangkan $SSE=SST-SSR=16-72/5=8/5$. Dengan demikian $R^2=SSR/SST=9/10$. Nilai $MSE=SSE/(5-2)=8/15$ dan statistik $F=(SSR/1)/MSE=(72/5)/(8/15)=27$. Sementara itu $T_1=(6/5)/\\sqrt{(8/15)/10}=3\\sqrt3$, sehingga $T_1^2=27=F$. Sebagai pemeriksaan independen, $SSR+SSE=72/5+8/5=16=SST$, sesuai ortogonalitas residual dan nilai fitted pada regresi dengan intersep. Kesamaan $F=T_1^2$ memverifikasi bahwa kedua uji kemiringan tersebut memakai informasi yang sama."},
    {prompt:"Buktikan bahwa interval kepercayaan $\\widehat\\beta_1\\pm t_{1-\\alpha/2,n-2}se(\\widehat\\beta_1)$ mempunyai cakupan $1-\\alpha$ dalam model normal.",
      hint:"Gunakan normal baku pada pembilang dan chi-kuadrat independen pada penyebut.",
      answer:"Diketahui $\\widehat\\beta_1-\\beta_1$ merupakan kombinasi linear galat normal, sehingga $Z=(\\widehat\\beta_1-\\beta_1)/(\\sigma/\\sqrt{S_{xx}})\\sim N(0,1)$. Dengan proyeksi residual, $U=SSE/\\sigma^2\\sim\\chi^2_{n-2}$ dan $U$ independen dari $Z$. Karena $s^2=SSE/(n-2)$, statistik $(\\widehat\\beta_1-\\beta_1)/(s/\\sqrt{S_{xx}})=Z/\\sqrt{U/(n-2)}\\sim t_{n-2}$. Oleh simetri Student, probabilitas statistik itu berada antara $-t_{1-\\alpha/2,n-2}$ dan $t_{1-\\alpha/2,n-2}$ adalah $1-\\alpha$. Mengalikan dengan galat baku positif dan menyusun kembali ketaksamaan menghasilkan peluang bahwa interval memuat $\\beta_1$ tepat $1-\\alpha$. Ini membuktikan cakupan prosedur sebelum sampel diamati."},
    {prompt:"Berikan kontra-contoh bahwa galat independen, mean nol, dan varians konstan belum cukup untuk distribusi $t$ eksak pada $n=3$.",
      hint:"Gunakan galat yang mengambil nilai $\\pm1$ secara independen.",
      answer:"Ambil $x=(0,1,2)$ dan galat independen $\\varepsilon_i\\in\\{-1,1\\}$ dengan probabilitas masing-masing $1/2$. Setiap galat mempunyai mean nol dan varians satu, tetapi bukan normal. Kejadian $A=\\{\\varepsilon=(1,1,1)\\text{ atau }(-1,-1,-1)\\}$ mempunyai peluang $2(1/2)^3=1/4$. Pada $A$, galat hanya menggeser intersep, sehingga garis OLS menyerap seluruh galat dan residual semuanya nol. Maka $SSE=0$, $s^2=0$, dan penyebut statistik $t$ sama dengan nol. Karena $A$ mempunyai peluang positif, statistik tersebut tidak terdefinisi dengan peluang positif; ia tidak mungkin mengikuti distribusi Student kontinu secara eksak. Syarat normalitas dalam teorema Student memang substantif."},
    {prompt:"Untuk desain $x=(0,1,2,3,4)$ dan data utama, uji $H_0:\\beta_0=0$ pada taraf 5%, lalu jelaskan mengapa tidak menolak bukan berarti membuktikan nol.",
      hint:"Gunakan $\\widehat\\beta_0=3/5$, $se(\\widehat\\beta_0)=2\\sqrt2/5$, dan nilai kritis $3{,}182$.",
      answer:"Diketahui $\\widehat\\beta_0=3/5$, $se(\\widehat\\beta_0)=2\\sqrt2/5$, dan derajat bebas $3$. Statistiknya $T_0=(3/5)/(2\\sqrt2/5)=3/(2\\sqrt2)\\approx1{,}061$. Untuk uji dua sisi pada taraf $\\alpha=0{,}05$, batas penolakan $|T_0|>t_{0{,}975;3}\\approx3{,}182$ tidak terpenuhi. Interval 95% intersep adalah $3/5\\pm3{,}182(2\\sqrt2/5)\\approx[-1{,}200,2{,}400]$, yang memuat nol sekaligus banyak nilai tidak nol. Jadi data tidak cukup kuat untuk menolak $\\beta_0=0$ pada taraf 5%; keputusan ini bukan pembuktian bahwa intersep populasi tepat nol."}
  ],
  mistakes:[],
  connections:[]
};
