import type { BookLessonContent } from "@/data/book-content-types";

/** Tahapan studi riset operasi: formulasi, sertifikasi, validasi dan sensitivitas. */
export const operationsStudyContent: BookLessonContent = {
  "intro": [
    "Dalam studi riset operasi, kesalahan paling mahal sering muncul sebelum algoritma dijalankan: variabel keputusan salah satuan, kendala mengabaikan skenario terburuk, atau nilai optimum diklaim hanya dari beberapa titik uji. Sebuah bengkel dengan dua produk dapat dimodelkan menggunakan keuntungan $3x+2y$ dan dua batas kapasitas $x+y\\le4$ serta $2x+y\\le6$. Persoalan utamanya bukan sekadar memperoleh angka, melainkan menjamin bahwa angka tersebut berasal dari keputusan layak dan mempunyai bukti optimalitas.",
    "Tahapan studi yang digunakan pada halaman ini adalah perumusan keputusan dan satuannya, pembentukan himpunan layak, penyelesaian disertai sertifikat, pemeriksaan residual terhadap pengamatan, serta pengujian sensitivitas dan ketidakpastian. Tahapan ini saling bergantung: solusi dari model yang tidak sesuai data dapat benar secara aljabar tetapi keliru sebagai rekomendasi operasional.",
    "Untuk model bengkel tersebut, titik $(2,2)$ mencapai keuntungan $10$. Pengali kendala $(1,1)$ menghasilkan ketaksamaan $3x+2y\\le10$ bagi seluruh keputusan layak. Ketika kapasitas pertama mungkin turun dari $4$ menjadi $3$, keputusan tangguh berubah menjadi $(3,0)$ dengan keuntungan $9$. Kedua perhitungan memperlihatkan perbedaan antara validitas matematis suatu solusi dan ketahanan keputusan terhadap perubahan data.",
    "Pembahasan mengikuti pemisahan antara definisi, bukti, dan aplikasi. Rujukan: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017), untuk formulasi dan validasi model; Dimitris Bertsimas dan John N. Tsitsiklis, Introduction to Linear Optimization (1997), untuk sertifikat dual dan optimisasi linear."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Model Keputusan dan Daerah Layak",
      "statement": "Suatu model keputusan deterministik terdiri atas himpunan keputusan $Q\\subseteq\\mathbb R^n$, fungsi tujuan $f:Q\\to\\mathbb R$, dan kendala $g_i(x)\\le0$ serta $h_j(x)=0$. Daerah layak ialah $F=\\{x\\in Q:g_i(x)\\le0,\\ h_j(x)=0\\text{ untuk semua }i,j\\}$. Pada masalah maksimum, $x^*\\in F$ optimal apabila $f(x^*)\\ge f(x)$ untuk setiap $x\\in F$. Keberadaan nilai supremum tidak dengan sendirinya menjamin adanya pemaksimum."
    },
    {
      "kind": "definition",
      "title": "Residual Pengamatan",
      "statement": "Jika model memprediksi $\\widehat y_i=f(x_i;\\theta)$ dan nilai teramati adalah $y_i$, residual didefinisikan oleh $r_i=y_i-\\widehat y_i$. Untuk $m$ pengamatan, galat kuadrat rata-rata adalah $\\operatorname{MSE}=m^{-1}\\sum_{i=1}^{m}r_i^2$. Residual bernilai nol pada data yang digunakan tidak otomatis menjamin akurasi di luar data tersebut."
    },
    {
      "kind": "definition",
      "title": "Kelayakan Tangguh",
      "statement": "Untuk himpunan skenario $\\mathcal U$ dan daerah layak skenario $F(u)$, keputusan $x$ disebut tangguh apabila $x\\in F(u)$ untuk setiap $u\\in\\mathcal U$. Himpunan keputusan tangguh adalah $F_{\\rm rob}=\\bigcap_{u\\in\\mathcal U}F(u)$. Keputusan dibuat sebelum skenario yang sebenarnya diketahui."
    },
    {
      "kind": "definition",
      "title": "Sertifikat Batas Atas Program Linear",
      "statement": "Pada program linear $\\max\\{c^Tx:Ax\\le b,\\ x\\ge0\\}$, suatu vektor $y\\ge0$ dengan $A^Ty\\ge c$ disebut sertifikat batas atas: bilangan $b^Ty$ membatasi nilai tujuan setiap keputusan layak dari atas. Sertifikat bukan keputusan primal; dimensinya sama dengan jumlah baris kendala."
    },
    {
      "kind": "proposition",
      "title": "Karakterisasi Kelayakan pada Skenario Hingga",
      "statement": "Jika $\\mathcal U=\\{u_1,\\ldots,u_m\\}$ dan $F_i=\\{x\\in Q:g_j(x,u_i)\\le0\\text{ untuk setiap }j\\}$, maka $x$ layak pada seluruh skenario jika dan hanya jika $x\\in\\bigcap_{i=1}^mF_i$.",
      "proof": [
        "Diketahui $x$ layak pada seluruh skenario. Untuk setiap $i=1,\\ldots,m$, seluruh kendala $g_j(x,u_i)\\le0$ dipenuhi dan $x\\in Q$. Definisi $F_i$ memberikan $x\\in F_i$ untuk setiap $i$, sehingga $x\\in\\bigcap_iF_i$. Arah $(\\Rightarrow)$ terbukti.",
        "Sebaliknya, diketahui $x\\in\\bigcap_iF_i$. Definisi irisan menjamin $x\\in F_i$ untuk semua $i$. Dengan menguraikan definisi setiap $F_i$, diperoleh $x\\in Q$ dan $g_j(x,u_i)\\le0$ untuk semua pasangan indeks. Ini tepat syarat layak pada setiap skenario. Arah $(\\Leftarrow)$ terbukti; kedua kondisi ekuivalen. $\\square$"
      ],
      "explanation": "Persyaratan semua skenario tidak dapat diganti oleh satu skenario rata-rata tanpa asumsi tambahan."
    },
    {
      "kind": "theorem",
      "title": "Sertifikat Optimalitas Global Program Linear",
      "statement": "Misalkan $x\\ge0$ memenuhi $Ax\\le b$ dan $y\\ge0$ memenuhi $A^Ty\\ge c$. Berlaku $c^Tx\\le b^Ty$. Jika terdapat pasangan demikian dengan $c^Tx=b^Ty$, maka $x$ merupakan pemaksimum global program linear primal dan $y$ merupakan peminimum global masalah dual $\\min\\{b^Tz:A^Tz\\ge c,\\ z\\ge0\\}$.",
      "proof": [
        "Diketahui $A^Ty-c\\ge0$ komponen demi komponen dan $x\\ge0$. Perkalian skalar dengan $x$ memberikan $c^Tx\\le x^TA^Ty$. Di sisi lain, $b-Ax\\ge0$ dan $y\\ge0$ memberikan $y^TAx\\le y^Tb$. Karena $x^TA^Ty=y^TAx$, kedua ketaksamaan digabung menjadi $c^Tx\\le b^Ty$.",
        "Jika pasangan layak $(x,y)$ memenuhi kesamaan, ambil sebarang keputusan primal layak $z$. Ketaksamaan yang telah dibuktikan memberikan $c^Tz\\le b^Ty=c^Tx$; jadi tidak ada keputusan primal yang lebih baik daripada $x$. Untuk sebarang vektor dual layak $w$, diperoleh $c^Tx\\le b^Tw$, sehingga $b^Ty$ tidak lebih besar daripada nilai dual layak mana pun. Kedua klaim optimalitas terbukti. $\\square$"
      ],
      "explanation": "Bukti ini hanya menggunakan kelayakan dan kesamaan nilai, tanpa mengasumsikan dualitas kuat atau keberadaan optimum terlebih dahulu."
    },
    {
      "kind": "proposition",
      "title": "Batas Sensitivitas Nilai Tujuan pada Keputusan Tetap",
      "statement": "Untuk $x,c,\\delta c\\in\\mathbb R^n$, perubahan nilai tujuan akibat mengganti $c$ dengan $c+\\delta c$ pada keputusan $x$ memenuhi $| (c+\\delta c)^Tx-c^Tx|\\le\\|\\delta c\\|_\\infty\\|x\\|_1$. Pernyataan ini tidak menyatakan bahwa keputusan optimal tetap sama setelah koefisien berubah.",
      "proof": [
        "Diketahui $\\delta c=(\\delta c_1,\\ldots,\\delta c_n)$ dan $x=(x_1,\\ldots,x_n)$. Selisih kedua nilai tujuan adalah $(c+\\delta c)^Tx-c^Tx=\\sum_{i=1}^n\\delta c_ix_i$.",
        "Ketaksamaan segitiga menghasilkan $|\\sum_i\\delta c_ix_i|\\le\\sum_i|\\delta c_i||x_i|$. Karena $|\\delta c_i|\\le\\|\\delta c\\|_\\infty$ untuk setiap $i$, ruas kanan paling besar $\\|\\delta c\\|_\\infty\\sum_i|x_i|=\\|\\delta c\\|_\\infty\\|x\\|_1$. Batas tersebut berlaku untuk setiap keputusan tetap $x$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat Parameter dari Residual Linear",
      "statement": "Misalkan $a\\ne0$, data tepat memenuhi $y=ax^*$, dan taksiran $\\widehat x$ mempunyai residual $r=y-a\\widehat x$. Maka $|\\widehat x-x^*|=|r|/|a|$. Jika $a=0$, residual tidak menentukan galat parameter.",
      "proof": [
        "Diketahui $y=ax^*$ dan $r=y-a\\widehat x$. Substitusi menghasilkan $r=a(x^*-\\widehat x)$. Dengan mengambil nilai mutlak diperoleh $|r|=|a||x^*-\\widehat x|$.",
        "Hipotesis $a\\ne0$ menjamin $|a|>0$, sehingga pembagian menghasilkan $|\\widehat x-x^*|=|r|/|a|$. Untuk $a=0$, model selalu menghasilkan $y=0$ tanpa bergantung pada $x^*$; residual sama untuk semua taksiran, meskipun galat parameter berbeda. Pernyataan dan kebutuhan hipotesis terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Reduksi Kendala Kapasitas pada Interval Ketidakpastian",
      "statement": "Misalkan $q\\in\\mathbb R$, permintaan tak diketahui $d\\in[\\underline d,\\overline d]$ dengan $\\underline d\\le\\overline d$. Kendala $q\\ge d$ berlaku untuk setiap $d$ dalam interval tersebut jika dan hanya jika $q\\ge\\overline d$.",
      "proof": [
        "Diketahui $q\\ge d$ untuk semua $d\\in[\\underline d,\\overline d]$. Karena titik ujung $\\overline d$ termasuk interval, pemilihan $d=\\overline d$ memberi $q\\ge\\overline d$. Arah $(\\Rightarrow)$ terbukti.",
        "Sebaliknya, jika $q\\ge\\overline d$, setiap $d$ pada interval memenuhi $d\\le\\overline d\\le q$. Jadi $q\\ge d$ pada seluruh skenario. Arah $(\\Leftarrow)$ terbukti, sehingga pengujian titik ujung atas cukup dan perlu untuk kendala khusus ini. $\\square$"
      ],
      "explanation": "Reduksi ke ujung interval ini berlaku karena ruas kanan kendala monoton terhadap permintaan; kendala nonmonoton memerlukan pemeriksaan berbeda."
    }
  ],
  "examples": [
    {
      "title": "Contoh Model Keputusan Dua Produk",
      "forDefinition": "Model Keputusan dan Daerah Layak",
      "problem": "Sebuah bengkel memproduksi $x$ unit A dan $y$ unit B. Keuntungan per unit masing-masing $3$ dan $2$, sedangkan dua kapasitas memenuhi $x+y\\le4$ dan $2x+y\\le6$. Rumuskan masalah dan periksa $(2,2)$.",
      "solution": [
        "Diketahui variabel keputusan adalah $x$ dan $y$ dalam unit produk. Fungsi tujuan keuntungan $f(x,y)=3x+2y$ mempunyai satuan uang; kedua kendala membatasi penggunaan dua sumber daya. Dengan asumsi produksi dapat dibagi, modelnya $\\max 3x+2y$ pada $F=\\{(x,y):x+y\\le4,\\ 2x+y\\le6,\\ x,y\\ge0\\}$.",
        "Untuk $(x,y)=(2,2)$, penggunaan sumber daya pertama adalah $2+2=4$ dan kedua $2(2)+2=6$. Keduanya tepat sama dengan kapasitas, dan koordinat tidak negatif, sehingga $(2,2)\\in F$. Nilai tujuan $3(2)+2(2)=10$.",
        "Kelayakan dan nilai tujuan belum membuktikan optimalitas; pembuktian global diberikan pada contoh sertifikat batas atas. Jika unit produk wajib bilangan bulat, domain keputusan harus diganti menjadi $F\\cap\\mathbb Z^2$ meskipun titik $(2,2)$ tetap layak."
      ],
      "conclusion": "Titik (2,2) layak dan menghasilkan keuntungan 10 pada model yang dirumuskan."
    },
    {
      "title": "Contoh Residual Pengukuran",
      "forDefinition": "Residual Pengamatan",
      "problem": "Model kalibrasi $\\widehat y=2x+1$ dibandingkan dengan pengamatan $(x,y)=(1,3{,}1),(2,4{,}8),(3,7{,}2)$. Hitung residual dan MSE.",
      "solution": [
        "Diketahui fungsi prediksi $\\widehat y=2x+1$. Untuk $x=1,2,3$, prediksinya berturut-turut $3,5,7$. Residual menurut definisi $r_i=y_i-\\widehat y_i$ adalah $0{,}1$, $-0{,}2$, dan $0{,}2$. Tanda residual menyatakan arah penyimpangan pengamatan terhadap prediksi.",
        "Jumlah kuadrat residual adalah $(0{,}1)^2+(-0{,}2)^2+(0{,}2)^2=0{,}01+0{,}04+0{,}04=0{,}09$. Karena ada tiga pengamatan, $\\operatorname{MSE}=0{,}09/3=0{,}03$. Akar MSE adalah $\\sqrt{0{,}03}\\approx0{,}1732$ dalam satuan respons.",
        "Nilai MSE dihitung pada tiga titik yang tersedia. Angka ini bukan estimasi kesalahan prediksi di luar rentang data tanpa asumsi dan pengujian tambahan; untuk validasi prediktif perlu data yang tidak digunakan untuk memilih parameter."
      ],
      "conclusion": "Residualnya 0,1; −0,2; 0,2 dan MSE pengamatan adalah 0,03."
    },
    {
      "title": "Contoh Persediaan Tangguh",
      "forDefinition": "Kelayakan Tangguh",
      "problem": "Gudang mempunyai kapasitas $10$ unit dan harus memenuhi permintaan $4$ atau $8$ unit tanpa pasokan susulan. Tentukan seluruh keputusan stok $q$ yang tangguh.",
      "solution": [
        "Diketahui $0\\le q\\le10$. Pada skenario permintaan $4$, syarat $q\\ge4$ menghasilkan $F_1=[4,10]$. Pada skenario permintaan $8$, syarat $q\\ge8$ menghasilkan $F_2=[8,10]$.",
        "Definisi kelayakan tangguh memerlukan keanggotaan dalam kedua himpunan. Irisannya adalah $F_1\\cap F_2=[8,10]$. Setiap $q$ pada interval itu memenuhi $q\\ge8\\ge4$, sedangkan setiap $q<8$ gagal memenuhi skenario permintaan tinggi.",
        "Memilih stok sebesar rata-rata permintaan, misalnya $6$, tidak cukup untuk syarat semua skenario. Kelayakan tangguh lebih kuat daripada kelayakan pada permintaan rata-rata."
      ],
      "conclusion": "Stok tangguh tepat interval [8,10] unit."
    },
    {
      "title": "Contoh Sertifikat Optimum",
      "forDefinition": "Sertifikat Batas Atas Program Linear",
      "problem": "Untuk $\\max 3x+2y$ dengan $x+y\\le4$, $2x+y\\le6$, dan $x,y\\ge0$, buktikan optimum tanpa mengandalkan gambar.",
      "solution": [
        "Diketahui dua kendala dengan koefisien tidak negatif. Jumlahkan keduanya: $(x+y)+(2x+y)\\le4+6$, sehingga $3x+2y\\le10$ untuk setiap titik layak. Pengali kendala $(1,1)$ tidak negatif dan menghasilkan koefisien fungsi tujuan secara tepat.",
        "Titik $(2,2)$ memenuhi kedua kendala dengan kesamaan dan mempunyai nilai tujuan $3(2)+2(2)=10$. Karena nilai ini mencapai batas atas yang berlaku untuk seluruh daerah layak, tidak ada keputusan lain dengan keuntungan lebih besar.",
        "Dalam notasi matriks, $A=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}$, $b=(4,6)^T$, $c=(3,2)^T$, dan $y=(1,1)^T$ memenuhi $A^Ty=c$ serta $b^Ty=10$. Ini adalah sertifikat dual yang dapat diperiksa tanpa enumerasi titik sudut."
      ],
      "conclusion": "Optimum global adalah 10 dan dicapai pada (2,2)."
    },
    {
      "title": "Contoh Sensitivitas Koefisien Keuntungan",
      "problem": "Pada keputusan tetap $x=(2,2)$, keuntungan berubah dari $c=(3,2)$ menjadi $c'=(3{,}1,1{,}8)$. Hitung perubahan dan batasnya.",
      "solution": [
        "Diketahui perubahan koefisien $\\delta c=c'-c=(0{,}1,-0{,}2)$. Keuntungan semula $c^Tx=3(2)+2(2)=10$, sedangkan keuntungan baru $(c')^Tx=3{,}1(2)+1{,}8(2)=9{,}8$. Selisih tepat adalah $-0{,}2$.",
        "Norma tak hingga perubahan koefisien $\\|\\delta c\\|_\\infty=0{,}2$ dan norma satu keputusan $\\|x\\|_1=4$. Proposisi sensitivitas memberi batas $|{-0{,}2}|\\le0{,}2(4)=0{,}8$, yang memang terpenuhi.",
        "Batas ini berlaku pada keputusan tetap. Jika koefisien berubah, keputusan yang memaksimalkan fungsi tujuan mungkin berganti; untuk membuktikan optimum baru diperlukan optimisasi ulang atau sertifikat yang sesuai."
      ],
      "conclusion": "Nilai pada keputusan tetap turun 0,2; batas perubahan yang terjamin adalah 0,8."
    },
    {
      "title": "Contoh Residual Kecil Belum Tentu Parameter Akurat",
      "problem": "Diketahui model tepat $y=0{,}001x^*$ dengan $x^*=1000$ dan taksiran $\\widehat x=900$. Hitung residual dan galat parameter.",
      "solution": [
        "Diketahui $a=0{,}001\\ne0$ dan $x^*=1000$, sehingga pengamatan tepat $y=ax^*=1$. Prediksi pada $\\widehat x=900$ adalah $a\\widehat x=0{,}9$. Residual $r=1-0{,}9=0{,}1$.",
        "Proposisi residual linear memberi $|\\widehat x-x^*|=|r|/|a|=0{,}1/0{,}001=100$. Pemeriksaan langsung juga menghasilkan $|900-1000|=100$.",
        "Residual $0{,}1$ relatif kecil dibandingkan skala pengamatan, tetapi galat parameter mencapai $100$. Faktor $1/|a|=1000$ memperkuat residual ketika diterjemahkan menjadi galat parameter."
      ],
      "conclusion": "Residual 0,1 bersesuaian dengan galat parameter 100 pada model ini."
    },
    {
      "title": "Contoh Keputusan Tangguh versus Keputusan Nominal",
      "problem": "Bandingkan keuntungan maksimum model $\\max 3x+2y$ ketika kapasitas pertama $4$ dan ketika kapasitas itu mungkin turun menjadi $3$; kapasitas kedua tetap $6$.",
      "solution": [
        "Pada model nominal, kendalanya $x+y\\le4$ dan $2x+y\\le6$. Sertifikat jumlah kendala memberikan $3x+2y\\le10$ dan titik $(2,2)$ mencapai $10$.",
        "Untuk semua skenario kapasitas pertama $b_1\\in[3,4]$, syarat tangguh setara dengan $x+y\\le3$. Dengan $x,y\\ge0$, diperoleh $3x+2y=3(x+y)-y\\le9$. Titik $(3,0)$ memenuhi $x+y=3$ dan $2x+y=6$, sehingga mencapai keuntungan $9$.",
        "Perbandingan $10$ dengan $9$ memperlihatkan harga ketangguhan sebesar $1$ satuan keuntungan pada contoh ini. Angka tersebut bergantung pada skenario dan fungsi tujuan; bukan rumus universal untuk seluruh model."
      ],
      "conclusion": "Optimum nominal 10, sedangkan optimum tangguh 9 pada titik (3,0)."
    },
    {
      "title": "Contoh Parameter Tidak Teridentifikasi",
      "problem": "Pengamatan tunggal hanya memberi persamaan $y=a+b=5$. Apakah kedua parameter $a$ dan $b$ dapat ditentukan unik?",
      "solution": [
        "Diketahui satu persamaan $a+b=5$ dengan dua parameter real bebas. Untuk setiap $t\\in\\mathbb R$, pasangan $(a,b)=(t,5-t)$ memenuhi pengamatan yang sama. Sebagai contoh, $(1,4)$ dan $(2,3)$ keduanya menghasilkan $y=5$.",
        "Karena dua pasangan parameter berbeda menghasilkan prediksi yang identik pada informasi tersedia, pemetaan parameter menuju pengamatan tidak injektif. Tanpa pengamatan atau pembatas tambahan, parameter individual tidak dapat diidentifikasi.",
        "Jika kemudian diketahui pengamatan kedua $2a+b=7$, pengurangan persamaan menghasilkan $a=2$ dan $b=3$. Contoh tambahan ini menunjukkan jenis informasi yang dapat menghilangkan ketidakunikan."
      ],
      "conclusion": "Persamaan tunggal hanya menentukan jumlah a+b; kedua parameter tidak unik."
    }
  ],
  "exercises": [
    {
      "prompt": "PS-01. Maksimumkan $4x+3y$ dengan $x+y\\le5$, $2x+y\\le8$, dan $x,y\\ge0$. Berikan sertifikat optimalitas global.",
      "hint": "Carilah pengali nonnegatif yang menghasilkan koefisien tujuan.",
      "answer": "Diketahui model maksimum dengan dua kendala kapasitas dan nonnegativitas. Tujuan adalah menentukan nilai optimum global, bukan hanya nilai pada satu kandidat. Kalikan kendala $x+y\\le5$ dengan $2$, lalu jumlahkan dengan $2x+y\\le8$. Diperoleh $2(x+y)+(2x+y)\\le2(5)+8$, yaitu $4x+3y\\le18$ untuk setiap titik layak. Pengali $(2,1)$ tidak negatif, sehingga ketaksamaan ini sah sebagai sertifikat batas atas. Untuk mencapai kesamaan, selesaikan $x+y=5$ dan $2x+y=8$; pengurangan memberi $x=3$ dan $y=2$. Kedua koordinat tidak negatif dan kedua kendala dipenuhi dengan kesamaan. Nilai tujuan $4(3)+3(2)=18$ tepat mencapai batas atas. Oleh karena itu optimum global adalah $18$ pada $(3,2)$; tidak ada titik layak dengan nilai lebih besar."
    },
    {
      "prompt": "PS-02. Periksa kelayakan $(2,3)$, $(4,1)$, dan $(1,4)$ untuk $x+2y\\le8$, $2x+y\\le9$, $x,y\\ge0$. Jelaskan setiap kendala.",
      "hint": "Substitusikan kedua koordinat pada dua ruas kiri secara terpisah.",
      "answer": "Diketahui dua kendala $x+2y\\le8$ dan $2x+y\\le9$, beserta nonnegativitas. Untuk $(2,3)$, ruas kiri pertama $2+2(3)=8$ dan kedua $2(2)+3=7$; keduanya tidak melebihi batas, sehingga titik layak. Untuk $(4,1)$, ruas kiri pertama $4+2=6$ dan kedua $2(4)+1=9$; titik ini juga layak. Untuk $(1,4)$, ruas kiri pertama $1+2(4)=9>8$, sedangkan kedua $2(1)+4=6\\le9$. Pelanggaran satu kendala saja cukup membuat titik tidak layak. Semua titik memiliki koordinat nonnegatif, tetapi syarat itu sendiri tidak menjamin kelayakan. Himpunan kandidat layak dari tiga titik yang diuji tepat $\\{(2,3),(4,1)\\}$."
    },
    {
      "prompt": "PS-03. Model kapasitas $q\\in[0,12]$ harus memenuhi permintaan $d\\in[5,9]$. Tentukan daerah layak tangguh dan buktikan kedua arah.",
      "hint": "Gunakan nilai permintaan terbesar dan periksa seluruh interval.",
      "answer": "Diketahui $0\\le q\\le12$ dan syarat pemenuhan $q\\ge d$ untuk setiap $d\\in[5,9]$. Jika keputusan tangguh, ia harus memenuhi skenario ujung $d=9$ yang termasuk interval, sehingga $q\\ge9$. Digabung dengan batas kapasitas diperoleh $q\\in[9,12]$. Sebaliknya, ambil sebarang $q\\in[9,12]$. Untuk setiap $d\\in[5,9]$, berlaku $d\\le9\\le q$, sehingga seluruh permintaan dapat dipenuhi. Ini membuktikan kedua arah karakterisasi. Sebagai verifikasi, $q=9$ memenuhi permintaan terburuk tepat, sedangkan $q=8{,}9$ gagal ketika $d=9$. Daerah layak tangguh persis $[9,12]$, bukan sekadar stok di atas nilai tengah permintaan."
    },
    {
      "prompt": "PS-04. Prediksi $y=3x-2$ diuji pada $(x,y)=(1,1),(2,5),(3,6)$. Hitung residual, MSE, dan jelaskan apakah model sempurna.",
      "hint": "Gunakan residual observasi dikurangi prediksi, kemudian kuadratkan.",
      "answer": "Diketahui model $\\widehat y=3x-2$ dan tiga observasi. Prediksi pada $x=1,2,3$ berturut-turut adalah $1,4,7$. Residualnya $r_1=1-1=0$, $r_2=5-4=1$, dan $r_3=6-7=-1$. Jumlah kuadrat residual adalah $0^2+1^2+(-1)^2=2$, sehingga $\\operatorname{MSE}=2/3$ dalam satuan respons kuadrat. Akar MSE $\\sqrt{2/3}\\approx0{,}8165$ dalam satuan respons. Karena dua residual tidak nol, model tidak mencocokkan semua data secara tepat. Namun MSE pada tiga pengamatan ini belum cukup untuk menilai kemampuan prediksi pada data baru; validasi di luar sampel tetap diperlukan. Hasil yang diminta adalah residual $(0,1,-1)$ dan MSE $2/3$."
    },
    {
      "prompt": "PS-05. Pada keputusan $x=(1,3,2)$, koefisien $c=(2,4,1)$ berubah sebesar $\\delta c=(-0{,}2,0{,}1,0{,}3)$. Hitung perubahan nilai tujuan dan batas norma.",
      "hint": "Hitung $delta c^Tx$ dan bandingkan dengan $|delta c|_infty|x|_1$.",
      "answer": "Diketahui keputusan tetap $x=(1,3,2)$ dan perubahan koefisien $\\delta c=(-0{,}2,0{,}1,0{,}3)$. Nilai tujuan semula $c^Tx=2(1)+4(3)+1(2)=16$. Perubahan eksak $\\delta c^Tx=(-0{,}2)(1)+(0{,}1)(3)+(0{,}3)(2)=-0{,}2+0{,}3+0{,}6=0{,}7$, sehingga nilai baru $16{,}7$. Norma tak hingga perubahan koefisien adalah $0{,}3$, sedangkan norma satu keputusan $1+3+2=6$. Batas sensitivitas memberi $|0{,}7|\\le0{,}3(6)=1{,}8$, dan ketaksamaan benar. Nilai $1{,}8$ hanya batas konservatif, bukan perubahan eksak. Pernyataan ini tidak menentukan apakah keputusan $x$ tetap optimal setelah koefisien berubah."
    },
    {
      "prompt": "PS-06. Untuk $y=0{,}02x^*$, pengamatan tepat $y=4$ dan taksiran $\\widehat x=190$, tentukan residual serta galat parameter.",
      "hint": "Tentukan $x^*$ terlebih dahulu, lalu gunakan identitas residual.",
      "answer": "Diketahui koefisien $a=0{,}02\\ne0$ dan pengamatan tepat $y=4$. Persamaan $4=0{,}02x^*$ memberikan $x^*=4/0{,}02=200$. Pada taksiran $\\widehat x=190$, prediksi adalah $0{,}02(190)=3{,}8$, sehingga residual $r=y-a\\widehat x=4-3{,}8=0{,}2$. Proposisi batas galat parameter berlaku karena $a\\ne0$ dan data tepat mengikuti model. Diperoleh $|\\widehat x-x^*|=|r|/|a|=0{,}2/0{,}02=10$. Pemeriksaan langsung $|190-200|=10$ mengonfirmasi hasil. Residual dan galat parameter memiliki skala berbeda, sehingga keduanya tidak boleh dibandingkan tanpa mempertimbangkan koefisien model."
    },
    {
      "prompt": "PS-07. Pengamatan hanya memberi $z=2a+b=7$ untuk parameter real $a,b$. Tunjukkan ketidakunikan dan tentukan data kedua yang membuat parameter unik.",
      "hint": "Bangun dua pasangan berbeda, lalu tambahkan persamaan independen.",
      "answer": "Diketahui satu persamaan $2a+b=7$ dengan dua parameter real. Pasangan $(a,b)=(0,7)$ dan $(1,5)$ keduanya memenuhi persamaan, sehingga parameter tidak dapat ditentukan secara unik dari satu pengamatan. Secara umum setiap $t\\in\\mathbb R$ memberi solusi $(t,7-2t)$. Tambahkan pengamatan kedua $a+b=5$ dengan koefisien berbeda. Pengurangan persamaan pertama dengan persamaan kedua menghasilkan $a=2$, kemudian $b=5-2=3$. Determinan matriks koefisien $\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$ adalah $2(1)-1(1)=1\\ne0$, sehingga solusi tunggal. Verifikasi $2(2)+3=7$ dan $2+3=5$ benar. Informasi tambahan yang independen menghilangkan ketidakunikan parameter."
    },
    {
      "prompt": "PS-08. Tangki berisi $12$ liter, menerima aliran $2$ liter/menit selama $5$ menit, dan mengeluarkan $0{,}5$ liter/menit selama periode sama. Susun neraca dan uji kesalahan satuan.",
      "hint": "Kalikan laju dengan durasi sebelum menjumlahkan volume.",
      "answer": "Diketahui volume awal $V_0=12$ liter, laju masuk $r_{\\rm in}=2$ liter/menit, laju keluar $r_{\\rm out}=0{,}5$ liter/menit, dan durasi $t=5$ menit. Dengan asumsi kedua laju konstan dan tidak ada kebocoran lain, neraca akumulasi adalah $V(t)=V_0+(r_{\\rm in}-r_{\\rm out})t$. Selisih laju $2-0{,}5=1{,}5$ liter/menit; setelah dikalikan $5$ menit diperoleh perubahan volume $7{,}5$ liter. Volume akhir $12+7{,}5=19{,}5$ liter. Pemeriksaan satuan: liter/menit dikalikan menit menjadi liter, sehingga dapat dijumlahkan dengan volume awal. Ekspresi keliru $12+2-0{,}5$ mencampur liter dan liter/menit tanpa durasi, sehingga tidak memiliki makna dimensi. Dengan asumsi yang dinyatakan, volume akhir adalah $19{,}5$ liter."
    }
  ],
  "mistakes": [],
  "connections": []
};
