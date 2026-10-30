import type { BookLessonContent } from "@/data/book-content-types";

/** Authored LP application models, global certificates and original worked solutions. */
export const lpApplicationsContent:BookLessonContent={
  "intro": [
    "Aplikasi program linear dimulai dari pertanyaan operasional yang terukur: berapa unit diproduksi, berapa kilogram bahan dicampur, berapa barang dikirim, dan berapa tenaga kerja dijadwalkan? Persamaan matematika baru bermakna setelah setiap variabel memiliki satuan, koefisien berasal dari kontribusi per unit, dan arah pertidaksamaan mencerminkan kapasitas maksimum atau kebutuhan minimum. Menyelesaikan sistem persamaan tanpa menguji arti kendala dapat menghasilkan angka yang tidak mungkin diterapkan.",
    "Dalam produksi dua produk, konsumsi mesin $2x+y\\le8$ jam dan $x+2y\\le8$ jam membentuk batas sumber daya, sedangkan $3x+3y$ menyatakan keuntungan. Dalam pencampuran, syarat massa dan kandungan zat aktif justru berupa batas bawah. Dalam transportasi, persamaan neraca menghubungkan pasokan dan permintaan. Tiga model ini mempunyai struktur linear yang sama, tetapi interpretasi dan satuan kendalanya berbeda.",
    "Kita tidak berhenti setelah menemukan perpotongan garis. Optimalitas dibuktikan menggunakan kombinasi kendala yang memberi batas global; kelayakan diperiksa dengan substitusi dan pemeriksaan dimensi; ketidaklayakan dibuktikan dengan kontradiksi; dan sensitivitas diuji dengan membandingkan solusi alternatif. Pada keputusan yang harus bulat, relaksasi LP dipisahkan tegas dari keputusan operasional.",
    "Rujukan matematis: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017), topik pemodelan program linear dan transportasi; Dimitris Bertsimas dan John N. Tsitsiklis, Introduction to Linear Optimization (1997), bab formulasi dan dualitas. Semua nilai numerik dan sertifikat pada halaman ini diturunkan dari data contoh yang dinyatakan secara eksplisit."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Variabel Keputusan dan Konsistensi Satuan",
      "statement": "Model aplikasi program linear menetapkan vektor keputusan $x=(x_1,\\ldots,x_n)^T$ beserta domain dan satuan setiap $x_j$. Koefisien $a_{ij}$ pada kendala $\\sum_j a_{ij}x_j\\le b_i$ harus memiliki satuan yang membuat setiap suku dan ruas kanan sebanding; koefisien $c_j$ pada tujuan $\\sum_jc_jx_j$ menyatakan kontribusi per satuan keputusan.",
      "explanation": "Keputusan produksi $x$ meja dan $y$ kursi adalah jumlah unit; bila meja membutuhkan dua jam mesin dan kursi satu jam, kendala $2x+y\\le8$ berdimensi jam."
    },
    {
      "kind": "definition",
      "title": "Kendala Kapasitas dan Kebutuhan Minimum",
      "statement": "Kendala kapasitas berbentuk $\\sum_j a_{ij}x_j\\le b_i$ ketika $a_{ij}\\ge0$ adalah konsumsi sumber daya per unit dan $b_i$ kapasitas. Kendala kebutuhan minimum berbentuk $\\sum_j q_{ij}x_j\\ge d_i$ ketika $q_{ij}\\ge0$ adalah kontribusi per unit dan $d_i$ kebutuhan yang harus dipenuhi. Arah pertidaksamaan ditentukan makna operasional, bukan pilihan algoritma.",
      "explanation": "Jika pangan A memberi 200 kkal dan B 100 kkal, kebutuhan sedikitnya 500 kkal adalah $200a+100b\\ge500$, bukan $\\le500$."
    },
    {
      "kind": "definition",
      "title": "Model Pencampuran dengan Mutu Rata-Rata",
      "statement": "Untuk campuran dengan massa $x_j\\ge0$ dan kadar komponen $r_j$, kadar rata-rata ialah $(\\sum_jr_jx_j)/(\\sum_jx_j)$ bila massa total positif. Persyaratan kadar sedikitnya $r_0$ ekuivalen dengan $\\sum_j(r_j-r_0)x_j\\ge0$ pada domain $\\sum_jx_j>0$. Jika massa total ditetapkan $M>0$, persyaratan juga setara dengan $\\sum_jr_jx_j\\ge r_0M$.",
      "explanation": "Untuk campuran 10 kg dengan bahan berkadar 20% dan 50%, syarat kadar minimal 35% adalah $0.2a+0.5b\\ge3.5$ kg komponen, bersama $a+b=10$."
    },
    {
      "kind": "definition",
      "title": "Model Transportasi Seimbang",
      "statement": "Pada model transportasi, $x_{ij}\\ge0$ adalah jumlah barang yang dikirim dari sumber $i$ ke tujuan $j$. Jika total pasokan sama dengan total permintaan, kendala $\\sum_jx_{ij}=s_i$ dan $\\sum_ix_{ij}=d_j$ memastikan seluruh pasokan terkirim dan seluruh permintaan terpenuhi. Tujuannya meminimumkan $\\sum_{i,j}c_{ij}x_{ij}$ dengan $c_{ij}$ biaya per unit kiriman.",
      "explanation": "Dua gudang memasok 5 dan 7 unit, sedangkan dua tujuan meminta 6 dan 6 unit; kedua total sama-sama 12, sehingga model seimbang dapat menggunakan persamaan neraca."
    },
    {
      "kind": "proposition",
      "title": "Kekonveksan Himpunan Keputusan Layak",
      "statement": "Misalkan $P=\\{x\\in\\mathbb R^n:Ax\\le b,\\ Cx\\ge d,\\ Ex=f,\\ x\\ge0\\}$. Untuk setiap $x,y\\in P$ dan $\\lambda\\in[0,1]$, berlaku $\\lambda x+(1-\\lambda)y\\in P$.",
      "proof": [
        "Diketahui $x,y\\in P$ dan $0\\le\\lambda\\le1$. Dari $Ax\\le b$ dan $Ay\\le b$, dengan mengalikan ketaksamaan secara komponen oleh $\\lambda$ dan $1-\\lambda$ yang tidak negatif, diperoleh $A(\\lambda x+(1-\\lambda)y)\\le\\lambda b+(1-\\lambda)b=b$.",
        "Dengan cara sama, $Cx\\ge d$ dan $Cy\\ge d$ memberi $C(\\lambda x+(1-\\lambda)y)\\ge d$. Persamaan linear menghasilkan $E(\\lambda x+(1-\\lambda)y)=\\lambda f+(1-\\lambda)f=f$. Karena $x,y\\ge0$, kombinasi tersebut juga nonnegatif. Semua kendala terpenuhi; dengan demikian $P$ konveks. $\\square$"
      ],
      "explanation": "Kekonveksan berlaku untuk relaksasi kontinu. Jika beberapa variabel diwajibkan bulat, kombinasi konveks dua keputusan bulat belum tentu bulat."
    },
    {
      "kind": "theorem",
      "title": "Sertifikat Batas Atas dari Harga Sumber Daya",
      "statement": "Misalkan $x\\ge0$ dan $Ax\\le b$ dengan $A,b$ berkomponen nonnegatif. Jika $u\\ge0$ memenuhi $A^Tu\\ge c$, maka setiap keputusan layak memenuhi $c^Tx\\le b^Tu$. Apabila ada keputusan layak $x^*$ dengan $c^Tx^*=b^Tu$, maka $x^*$ optimal global untuk masalah maksimum.",
      "proof": [
        "Diketahui $x\\ge0$, $Ax\\le b$, $u\\ge0$, dan $A^Tu\\ge c$. Karena $x\\ge0$, hasil kali dalam mempertahankan arah: $c^Tx\\le(A^Tu)^Tx=u^TAx$.",
        "Karena $u\\ge0$ dan $Ax\\le b$, berlaku $u^TAx\\le u^Tb=b^Tu$. Jadi $c^Tx\\le b^Tu$ bagi setiap keputusan layak. Jika $x^*$ mencapai batas tersebut, tidak ada keputusan layak yang memiliki nilai tujuan lebih besar. Dengan demikian $x^*$ optimal global. $\\square$"
      ],
      "explanation": "Ini pembuktian langsung dualitas lemah, bukan asumsi bahwa titik yang tampak terbaik pada gambar pasti optimum."
    },
    {
      "kind": "proposition",
      "title": "Monotonisitas Nilai Optimum terhadap Kapasitas",
      "statement": "Misalkan $v(b)=\\sup\\{c^Tx:x\\ge0,\\ Ax\\le b\\}$ dan $b'\\ge b$ secara komponen. Jika himpunan layak untuk $b$ tidak kosong, maka $v(b')\\ge v(b)$ dalam bilangan real diperluas. Bila kedua optimum hingga dan dicapai, pernyataan ini membandingkan nilai maksimum biasa.",
      "proof": [
        "Diketahui $b'\\ge b$. Untuk setiap $x\\ge0$ yang memenuhi $Ax\\le b$, transitivitas pertidaksamaan memberi $Ax\\le b'$. Jadi himpunan layak $P(b)$ merupakan himpunan bagian $P(b')$.",
        "Supremum fungsi yang sama pada himpunan lebih besar tidak lebih kecil: $\\sup_{x\\in P(b')}c^Tx\\ge\\sup_{x\\in P(b)}c^Tx$. Dengan demikian peningkatan kapasitas tidak dapat menurunkan nilai optimum maksimum, meskipun nilainya mungkin tetap. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Sertifikat Biaya Minimum pada Pencampuran",
      "statement": "Misalkan $a,b\\ge0$ memenuhi $a+b\\ge10$ dan $0.2a+0.5b\\ge3.5$. Maka $4a+7b\\ge55$, dan batas dicapai tepat oleh $(a,b)=(5,5)$ ketika kedua kendala aktif.",
      "proof": [
        "Diketahui $a+b\\ge10$ dan $0.2a+0.5b\\ge3.5$. Kalikan kendala pertama dengan 2 dan kedua dengan 10; kedua pengali nonnegatif, sehingga arah ketaksamaan tidak berubah. Penjumlahan memberi $2(a+b)+10(0.2a+0.5b)\\ge20+35=55$.",
        "Ruas kiri menyederhana menjadi $4a+7b$, sehingga setiap campuran layak berbiaya sekurang-kurangnya 55. Pada $(a,b)=(5,5)$, total massa 10, komponen mutu $0.2(5)+0.5(5)=3.5$, dan biaya $4(5)+7(5)=55$. Dengan demikian campuran tersebut optimal. Jika biaya tepat 55, kedua kendala harus aktif karena kedua pengali positif; sistem $a+b=10$, $0.2a+0.5b=3.5$ mempunyai solusi tunggal $(5,5)$. $\\square$"
      ],
      "explanation": "Sertifikat menggunakan batas massa dan batas kandungan secara bersamaan; menyamakan massa total dengan 10 tanpa alasan bukan pembuktian optimalitas."
    },
    {
      "kind": "proposition",
      "title": "Reduksi Transportasi Dua Sumber Dua Tujuan",
      "statement": "Misalkan pasokan $(5,7)$, permintaan $(6,6)$, dan $x_{ij}\\ge0$ memenuhi neraca transportasi. Semua pengiriman layak dapat ditulis $x_{11}=t$, $x_{12}=5-t$, $x_{21}=6-t$, $x_{22}=1+t$ dengan $0\\le t\\le5$. Untuk biaya satuan $(c_{11},c_{12},c_{21},c_{22})=(2,5,4,1)$, biaya total $50-6t$ dan minimum 20 dicapai pada $t=5$.",
      "proof": [
        "Diketahui neraca baris $x_{11}+x_{12}=5$ dan $x_{21}+x_{22}=7$, serta neraca kolom $x_{11}+x_{21}=6$ dan $x_{12}+x_{22}=6$. Ambil $t=x_{11}$. Tiga persamaan pertama memberikan $x_{12}=5-t$, $x_{21}=6-t$, dan $x_{22}=7-(6-t)=1+t$. Persamaan kolom kedua otomatis terpenuhi: $(5-t)+(1+t)=6$.",
        "Nonnegativitas keempat aliran setara dengan $t\\ge0$, $t\\le5$, $t\\le6$, dan $t\\ge-1$, sehingga interval layaknya tepat $[0,5]$. Substitusi biaya memberi $2t+5(5-t)+4(6-t)+(1+t)=50-6t$. Karena koefisien $t$ negatif, biaya minimum terjadi pada nilai $t$ terbesar, yakni 5, dan nilainya $50-30=20$. Semua neraca terverifikasi; dengan demikian solusi global terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Relaksasi Kontinu Tidak Menjamin Keputusan Bulat",
      "statement": "Untuk masalah $\\max\\{3x+4y:2x+3y\\le7,\\ x,y\\in\\mathbb Z_{\\ge0}\\}$, relaksasi kontinu mempunyai nilai optimum $21/2$, sedangkan masalah bilangan bulat mempunyai nilai optimum 10. Karena itu nilai optimum relaksasi dapat lebih besar daripada nilai optimum bulat.",
      "proof": [
        "Diketahui $x,y\\ge0$ dan $2x+3y\\le7$. Untuk relaksasi, $3x+4y\\le\\frac32(2x+3y)\\le21/2$, sebab $4y\\le\\frac92y$ untuk $y\\ge0$. Batas tercapai pada $(x,y)=(7/2,0)$, sehingga optimum kontinu $21/2$.",
        "Untuk keputusan bulat, $y$ hanya mungkin 0, 1, atau 2. Jika $y=0$, maka $x\\le3$ dan nilai maksimum 9. Jika $y=1$, maka $2x\\le4$, sehingga $x\\le2$ dan nilai maksimum $3(2)+4=10$. Jika $y=2$, maka $2x\\le1$, sehingga $x=0$ dan nilai maksimum 8. Jadi optimum bulat 10 pada $(2,1)$; gap $21/2-10=1/2$. Membulatkan $7/2$ menjadi 4 melanggar kendala, sedangkan membulatkan ke 3 menghasilkan nilai 9, bukan optimum bulat. $\\square$"
      ],
      "explanation": "Model produksi yang membutuhkan unit tak terbagi harus menyatakan syarat integritas; solusi pecahan LP adalah batas, bukan keputusan fisik."
    }
  ],
  "examples": [
    {
      "title": "Contoh Produksi Dua Produk",
      "forDefinition": "Variabel Keputusan dan Konsistensi Satuan",
      "problem": "Produk A dan B memakai masing-masing $(2,1)$ dan $(1,2)$ jam dari dua mesin. Kapasitas kedua mesin 8 jam; keuntungan per unit masing-masing 3. Tentukan keputusan kontinu yang memaksimumkan keuntungan.",
      "solution": [
        "Diketahui keputusan $x,y\\ge0$ dalam unit produk, konsumsi mesin pertama $2x+y\\le8$ jam dan mesin kedua $x+2y\\le8$ jam. Keuntungan $z=3x+3y$ dalam satuan uang. Karena satuan koefisien adalah uang per unit, setiap suku tujuan konsisten.",
        "Dua kendala aktif memberi $2x+y=8$ dan $x+2y=8$. Mengurangkan persamaan menghasilkan $x=y$; substitusi memberi $3x=8$, jadi $(x,y)=(8/3,8/3)$. Keduanya nonnegatif dan menggunakan tepat 8 jam pada tiap mesin.",
        "Untuk membuktikan optimum global, jumlahkan kedua kendala: $3x+3y\\le16$. Kandidat menghasilkan $z=3(8/3)+3(8/3)=16$, tepat mencapai batas. Titik pada sumbu memberi paling banyak 12, tetapi sertifikat batas sudah cukup untuk semua titik layak."
      ],
      "conclusion": "Keputusan kontinu optimal adalah $x=y=8/3$ dengan keuntungan 16; bila produk harus utuh, perlu model bilangan bulat."
    },
    {
      "title": "Contoh Kebutuhan Nutrisi Minimum",
      "forDefinition": "Kendala Kapasitas dan Kebutuhan Minimum",
      "problem": "Pangan A memberi 200 kkal dan 10 gram protein per unit dengan biaya 3, sedangkan B memberi 100 kkal dan 20 gram protein dengan biaya 4. Kebutuhan minimum 500 kkal dan 40 gram protein. Tentukan biaya minimum.",
      "solution": [
        "Diketahui jumlah $a,b\\ge0$ unit pangan. Setelah membagi kendala energi dengan 100 dan protein dengan 10, diperoleh $2a+b\\ge5$ dan $a+2b\\ge4$. Fungsi biaya $C=3a+4b$; arah kendala $\\ge$ karena keduanya kebutuhan minimum.",
        "Persilangan kedua garis batas memberi $2a+b=5$, $a+2b=4$, sehingga $a=2$, $b=1$. Kandidat memenuhi energi $2(200)+100=500$ kkal dan protein $2(10)+20=40$ gram. Biayanya $3(2)+4(1)=10$.",
        "Untuk seluruh keputusan layak, $\\frac23(2a+b)+\\frac53(a+2b)\\ge\\frac23(5)+\\frac53(4)=10$. Ruas kiri adalah $3a+4b$. Karena kedua pengali positif, ini sertifikat batas bawah biaya."
      ],
      "conclusion": "Biaya minimum 10 dicapai oleh dua unit A dan satu unit B."
    },
    {
      "title": "Contoh Campuran dengan Batas Kadar",
      "forDefinition": "Model Pencampuran dengan Mutu Rata-Rata",
      "problem": "Bahan A berbiaya 4/kg dan mengandung 20% zat aktif; B berbiaya 7/kg dan mengandung 50%. Siapkan sedikitnya 10 kg dengan zat aktif sedikitnya 3.5 kg. Tentukan biaya minimum.",
      "solution": [
        "Diketahui $a,b\\ge0$ dalam kg. Kendala massa $a+b\\ge10$ kg dan kandungan $0.2a+0.5b\\ge3.5$ kg zat aktif. Tujuan $C=4a+7b$ dalam satuan uang. Kedua kendala memakai besaran fisik berbeda sehingga tidak boleh dijumlahkan tanpa pengali berdimensi sesuai.",
        "Pada perpotongan $a+b=10$ dan $0.2a+0.5b=3.5$, substitusi $a=10-b$ menghasilkan $2+0.3b=3.5$, sehingga $b=5$, $a=5$. Biaya kandidat $4(5)+7(5)=55$.",
        "Sertifikat global diperoleh dengan mengalikan batas massa oleh 2 uang/kg dan batas zat aktif oleh 10 uang/kg zat aktif: $4a+7b=2(a+b)+10(0.2a+0.5b)\\ge20+35=55$. Kesamaan terjadi pada kandidat, sehingga tidak ada campuran layak yang lebih murah."
      ],
      "conclusion": "Campuran optimum adalah 5 kg A dan 5 kg B dengan biaya 55."
    },
    {
      "title": "Contoh Distribusi Dua Gudang",
      "forDefinition": "Model Transportasi Seimbang",
      "problem": "Gudang A memasok 5 unit dan B 7 unit; tujuan C dan D masing-masing memerlukan 6 unit. Biaya per unit AC=2, AD=5, BC=4, BD=1. Cari alokasi biaya minimum.",
      "solution": [
        "Diketahui $x_{AC}+x_{AD}=5$, $x_{BC}+x_{BD}=7$, $x_{AC}+x_{BC}=6$, $x_{AD}+x_{BD}=6$, dengan semua aliran nonnegatif. Pasokan total $5+7=12$ sama dengan permintaan total $6+6=12$.",
        "Ambil $t=x_{AC}$. Neraca memberi $(x_{AC},x_{AD},x_{BC},x_{BD})=(t,5-t,6-t,1+t)$. Semua aliran nonnegatif tepat ketika $0\\le t\\le5$. Biaya total menjadi $2t+5(5-t)+4(6-t)+(1+t)=50-6t$.",
        "Karena fungsi biaya menurun terhadap $t$, pilih $t=5$. Alokasi $(5,0,1,6)$ memenuhi kedua pasokan dan kedua permintaan. Biaya $2(5)+4(1)+1(6)=20$; interval seluruh solusi layak sudah ditelusuri, jadi optimum global."
      ],
      "conclusion": "Kirim 5 unit A→C, 1 unit B→C, dan 6 unit B→D; biaya minimum 20."
    },
    {
      "title": "Contoh Penjadwalan Tenaga Kerja",
      "problem": "Shift A melayani pagi dan siang dengan biaya 6; B melayani siang dan malam dengan biaya 5; C hanya siang dengan biaya 3. Kebutuhan minimal pagi 4, siang 10, dan malam 3 orang. Cari biaya minimum jika jumlah petugas setiap shift boleh kontinu sebagai relaksasi.",
      "solution": [
        "Diketahui keputusan $a,b,c\\ge0$. Kendala cakupan pagi $a\\ge4$, malam $b\\ge3$, dan siang $a+b+c\\ge10$. Biaya $C=6a+5b+3c$. Jika petugas wajib bilangan bulat, solusi yang diperoleh harus diperiksa integritasnya.",
        "Tulis $C=3a+2b+3(a+b+c)$. Dari kendala diperoleh $C\\ge3(4)+2(3)+3(10)=48$. Ini batas bawah yang berlaku untuk seluruh keputusan layak.",
        "Pilih $(a,b,c)=(4,3,3)$. Cakupan pagi 4, malam 3, siang $4+3+3=10$, dan biaya $6(4)+5(3)+3(3)=48$. Semua keputusan bulat, sehingga kandidat juga optimum untuk model integer dengan kendala sama."
      ],
      "conclusion": "Empat shift A, tiga B, dan tiga C mencapai biaya minimum 48."
    },
    {
      "title": "Contoh Investasi dan Interpretasi Risiko",
      "problem": "Modal 100 juta dibagi antara aset X dan Y, masing-masing dengan perkiraan imbal hasil 8% dan 5%. Kebijakan membatasi X paling banyak 40 juta. Tentukan alokasi yang memaksimumkan perkiraan imbal hasil linear dan jelaskan batas model.",
      "solution": [
        "Diketahui $x,y\\ge0$ dalam juta rupiah, $x+y=100$, dan $x\\le40$. Fungsi tujuan $z=0.08x+0.05y$ dalam juta rupiah per periode; persentase merupakan koefisien imbal hasil, bukan variabel keputusan.",
        "Substitusi $y=100-x$ memberi $z=0.08x+0.05(100-x)=5+0.03x$. Karena koefisien $x$ positif, nilai terbesar pada interval $0\\le x\\le40$ dicapai di $x=40$, $y=60$. Hasilnya $0.08(40)+0.05(60)=3.2+3=6.2$ juta.",
        "Verifikasi: $40+60=100$ dan batas X tepat aktif. Model hanya memaksimumkan ekspektasi linear berdasarkan imbal hasil yang diasumsikan tetap. Variansi portofolio $x^T\\Sigma x$ umumnya kuadratik, sehingga tidak boleh disebut telah diminimumkan oleh LP ini."
      ],
      "conclusion": "Alokasi LP adalah 40 juta pada X dan 60 juta pada Y, dengan perkiraan imbal hasil 6.2 juta per periode."
    },
    {
      "title": "Contoh Model Tidak Layak",
      "problem": "Sebuah rencana mengharuskan produksi A sedikitnya 5 unit, tetapi mesin hanya memiliki 8 jam; tiap A memakai 2 jam dan produk B memakai 1 jam. Tentukan apakah ada solusi dengan $x,y\\ge0$.",
      "solution": [
        "Diketahui $x\\ge5$, $y\\ge0$, dan $2x+y\\le8$. Tujuannya bukan menghitung nilai optimum, melainkan memeriksa apakah himpunan layak tidak kosong.",
        "Dari $x\\ge5$ dan $y\\ge0$, diperoleh $2x+y\\ge2(5)+0=10$. Namun kapasitas mensyaratkan $2x+y\\le8$.",
        "Satu bilangan real tidak mungkin sekaligus sekurang-kurangnya 10 dan paling banyak 8. Kontradiksi ini berlaku untuk setiap keputusan, sehingga mengubah fungsi tujuan tidak dapat memperbaiki ketidaklayakan. Kapasitas perlu dinaikkan sekurang-kurangnya menjadi 10 jam jika batas produksi tetap."
      ],
      "conclusion": "Model tidak layak karena kebutuhan minimum melampaui kapasitas."
    },
    {
      "title": "Contoh Sensitivitas Keuntungan",
      "problem": "Pada model produksi $2x+y\\le8$, $x+2y\\le8$, $x,y\\ge0$, keuntungan diubah menjadi $(3+\\delta)x+3y$. Untuk nilai $\\delta$ berapa titik $(8/3,8/3)$ tetap optimal?",
      "solution": [
        "Diketahui kandidat perpotongan dua kendala tetap $(8/3,8/3)$. Untuk membuat sertifikat dual pada titik itu, cari pengali $u,v\\ge0$ sehingga $2u+v=3+\\delta$ dan $u+2v=3$.",
        "Penyelesaian sistem memberi $u=1+2\\delta/3$ dan $v=1-\\delta/3$. Kedua pengali nonnegatif jika dan hanya jika $-3/2\\le\\delta\\le3$. Pada interval ini, $(3+\\delta)x+3y\\le u(2x+y)+v(x+2y)\\le8(u+v)$; kandidat mencapai kesamaan karena kedua kendala aktif.",
        "Untuk $\\delta>3$, bandingkan dengan titik $(4,0)$: selisih nilai titik tersebut terhadap perpotongan ialah $4(3+\\delta)-\\frac83(6+\\delta)=\\frac43(\\delta-3)>0$. Untuk $\\delta<-3/2$, titik $(0,4)$ lebih baik karena $12-\\frac83(6+\\delta)=\\frac43(-3-2\\delta)>0$. Jadi interval yang diperoleh juga perlu, bukan sekadar cukup."
      ],
      "conclusion": "Titik perpotongan tetap optimal tepat untuk $-3/2\\le\\delta\\le3$, termasuk kasus seri di ujung interval."
    }
  ],
  "exercises": [
    {
      "prompt": "AP-01. Maksimumkan $4x+3y$ untuk $x+y\\le5$, $2x+y\\le8$, $x,y\\ge0$. Berikan solusi dan sertifikat global.",
      "hint": "Cari perpotongan dua kendala, lalu gabungkan kendala dengan pengali nonnegatif.",
      "answer": "Diketahui $x+y\\le5$, $2x+y\\le8$, dan $x,y\\ge0$; ditentukan maksimum $z=4x+3y$. Kedua garis aktif memberi $x+y=5$ dan $2x+y=8$. Pengurangan menghasilkan $x=3$, lalu $y=2$. Titik $(3,2)$ memenuhi semua kendala dan memberi $z=4(3)+3(2)=18$. Untuk setiap titik layak, kalikan kendala pertama dengan 2 dan kendala kedua dengan 1: $2(x+y)+(2x+y)\\le2(5)+8=18$, yaitu $4x+3y\\le18$. Kandidat mencapai batas ini, sehingga optimum global 18. Kedua pengali positif; kesamaan mengharuskan kedua kendala aktif, yang berpotongan hanya di $(3,2)$, sehingga optimum tunggal."
    },
    {
      "prompt": "AP-02. Campurkan A berkadar 10% biaya 3/kg dan B berkadar 40% biaya 6/kg. Dibutuhkan sedikitnya 12 kg campuran dengan sedikitnya 3.6 kg zat aktif. Tentukan biaya minimum.",
      "hint": "Gunakan $a+b\\\\ge12$, $0.1a+0.4b\\\\ge3.6$, dan sertifikat kombinasi kendala.",
      "answer": "Diketahui $a,b\\ge0$ kg. Kendala massa $a+b\\ge12$ dan zat aktif $0.1a+0.4b\\ge3.6$ kg. Biaya $C=3a+6b$. Pada dua batas aktif, substitusi $a=12-b$ ke $0.1a+0.4b=3.6$ memberi $1.2+0.3b=3.6$, sehingga $b=8$ dan $a=4$. Kandidat berbiaya $3(4)+6(8)=60$ serta memenuhi semua kebutuhan. Untuk membuktikan minimum global, gunakan identitas $3a+6b=2(a+b)+10(0.1a+0.4b)\\ge2(12)+10(3.6)=60$. Semua pengali positif, maka setiap keputusan layak berbiaya minimal 60. Kandidat mencapai batas, sehingga campuran 4 kg A dan 8 kg B optimal. Perhitungan mutu memverifikasi $0.1(4)+0.4(8)=3.6$ kg."
    },
    {
      "prompt": "AP-03. Pasokan dua gudang 4 dan 6 unit; permintaan dua toko 5 dan 5 unit. Biaya pengiriman AC=1, AD=4, BC=3, BD=2. Tentukan semua aliran optimal.",
      "hint": "Parametrisasikan empat aliran menggunakan $t=x_{AC}$.",
      "answer": "Diketahui neraca $x_{AC}+x_{AD}=4$, $x_{BC}+x_{BD}=6$, $x_{AC}+x_{BC}=5$, dan $x_{AD}+x_{BD}=5$. Ambil $t=x_{AC}$. Maka $x_{AD}=4-t$, $x_{BC}=5-t$, dan $x_{BD}=1+t$. Syarat nonnegativitas menghasilkan $0\\le t\\le4$. Biaya $C=t+4(4-t)+3(5-t)+2(1+t)=33-4t$. Karena kemiringannya $-4<0$, minimum pada $t=4$, dengan aliran $(4,0,1,5)$ dan biaya $33-16=17$. Neraca diverifikasi: pasokan $4+0=4$ dan $1+5=6$, permintaan $4+1=5$ dan $0+5=5$. Karena biaya turun secara ketat pada interval layak, solusi ini juga satu-satunya optimum."
    },
    {
      "prompt": "AP-04. Pangan A memberi 300 kkal dan 10 g protein dengan biaya 5; B memberi 100 kkal dan 20 g protein dengan biaya 4. Minimal 600 kkal dan 60 g protein. Tentukan biaya minimum.",
      "hint": "Bagi kendala dengan satuannya dan bangun sertifikat batas bawah dari dua kendala.",
      "answer": "Diketahui $a,b\\ge0$ unit pangan. Kebutuhan energi setara dengan $3a+b\\ge6$ dalam ratusan kkal; kebutuhan protein setara dengan $a+2b\\ge6$ dalam puluhan gram. Biaya $C=5a+4b$. Dua batas aktif memberi $b=6-3a$ dan $a+2(6-3a)=6$, sehingga $a=6/5$, $b=12/5$. Biaya $5(6/5)+4(12/5)=6+48/5=78/5=15.6$. Untuk setiap keputusan layak, $\\frac65(3a+b)+\\frac75(a+2b)\\ge\\frac65(6)+\\frac75(6)=78/5$; ruas kiri tepat $5a+4b$. Maka kandidat mencapai batas bawah global. Verifikasi fisik: energi $300(6/5)+100(12/5)=600$ kkal dan protein $10(6/5)+20(12/5)=60$ gram. Jika unit pangan wajib utuh, solusi pecahan ini hanyalah relaksasi dan harus diselesaikan kembali sebagai model integer."
    },
    {
      "prompt": "AP-05. Shift A melayani pagi–siang (biaya 7), B siang–malam (biaya 6), C hanya siang (biaya 2). Minimal 3 petugas pagi, 9 siang, 4 malam. Tentukan jadwal biaya minimum.",
      "hint": "Tuliskan fungsi biaya sebagai kombinasi kendala dengan koefisien nonnegatif.",
      "answer": "Diketahui $a,b,c\\ge0$ banyak petugas shift. Kendala pagi $a\\ge3$, malam $b\\ge4$, dan siang $a+b+c\\ge9$. Biaya $C=7a+6b+2c$. Pecah fungsi biaya menjadi $C=5a+4b+2(a+b+c)$. Dari ketiga kendala, $C\\ge5(3)+4(4)+2(9)=15+16+18=49$. Pilih $(a,b,c)=(3,4,2)$. Cakupan pagi 3, malam 4, siang $3+4+2=9$, dan biaya $7(3)+6(4)+2(2)=21+24+4=49$. Jadi solusi tersebut mencapai batas bawah global dan juga memenuhi syarat bilangan bulat. Tidak diperlukan pembulatan yang dapat merusak cakupan."
    },
    {
      "prompt": "AP-06. Untuk kendala $x+y\\le5$, $2x+y\\le8$, $x,y\\ge0$, tentukan seluruh $delta$ sehingga $(3,2)$ optimal bagi tujuan $(4+delta)x+3y$.",
      "hint": "Cari pengali dual nonnegatif pada dua kendala aktif; uji titik sumbu di luar interval.",
      "answer": "Diketahui titik $(3,2)$ layak dan kedua kendala aktif. Cari $u,v\\ge0$ dengan $u+2v=4+\\delta$ dan $u+v=3$. Pengurangan memberi $v=1+\\delta$, lalu $u=2-\\delta$. Jadi sertifikat batas atas berlaku jika $-1\\le\\delta\\le2$. Pada interval ini, $(4+\\delta)x+3y\\le u(x+y)+v(2x+y)\\le5u+8v$, dan titik $(3,2)$ mencapai kesamaan; maka ia optimal. Untuk $\\delta>2$, titik $(4,0)$ layak dan selisih nilainya terhadap $(3,2)$ adalah $4(4+\\delta)-[3(4+\\delta)+6]=\\delta-2>0$. Untuk $\\delta<-1$, titik $(0,5)$ layak dan selisih nilainya terhadap $(3,2)$ ialah $15-[3(4+\\delta)+6]=-3(1+\\delta)>0$. Dengan demikian interval $[-1,2]$ perlu dan cukup. Pada kedua ujung interval, terdapat optimum alternatif di sepanjang sisi yang relevan."
    },
    {
      "prompt": "AP-07. Buktikan bahwa kendala $x\\ge4$, $2x+y\\le7$, dan $x,y\\ge0$ tidak mempunyai keputusan layak.",
      "hint": "Gunakan batas bawah $2x+y$ dari $x\\ge4$ dan $y\\ge0$.",
      "answer": "Diketahui $x\\ge4$, $y\\ge0$, dan kapasitas $2x+y\\le7$. Andaikan ada keputusan layak. Karena $x\\ge4$, berlaku $2x\\ge8$. Menambahkan $y\\ge0$ memberi $2x+y\\ge8$. Ini bertentangan dengan kendala $2x+y\\le7$, sebab tidak ada bilangan real yang sekaligus $\\ge8$ dan $\\le7$. Jadi himpunan layak kosong. Kesimpulan tidak bergantung pada fungsi tujuan, sehingga mengubah keuntungan atau biaya saja tidak menyelesaikan kontradiksi. Agar mungkin layak dengan $x\\ge4$, kapasitas minimal harus 8, dan $(4,0)$ memenuhi batas yang dinaikkan itu."
    },
    {
      "prompt": "AP-08. Maksimumkan $3x+4y$ dengan $2x+3y\\le7$ untuk $x,y$ bilangan bulat taknegatif. Bandingkan dengan relaksasi LP dan uji pembulatan solusi LP.",
      "hint": "Selesaikan relaksasi dengan batas atas, kemudian enumerasi seluruh nilai $y$ yang mungkin pada model integer.",
      "answer": "Diketahui $2x+3y\\le7$ dan $x,y\\ge0$. Dalam relaksasi kontinu, $3x+4y\\le\\frac32(2x+3y)\\le21/2$ karena $4y\\le\\frac92y$. Nilai $21/2$ dicapai oleh $(x,y)=(7/2,0)$, sehingga optimum LP adalah 10.5. Untuk model integer, $y\\in\\{0,1,2\\}$. Jika $y=0$, $x\\le3$ dan nilai maksimum 9; jika $y=1$, $2x\\le4$ dan nilai maksimum 10 pada $x=2$; jika $y=2$, $2x\\le1$ dan nilai maksimum 8 pada $x=0$. Maka optimum integer 10 pada $(2,1)$, dengan gap 0.5 terhadap LP. Pembulatan $7/2$ ke 4 melanggar $2x\\le7$; pembulatan ke 3 menghasilkan nilai 9 dan kalah dari $(2,1)$. Ini menunjukkan bahwa pembulatan biasa bukan algoritma optimal integer."
    }
  ],
  "mistakes": [],
  "connections": []
};
