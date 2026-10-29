import type { BookLessonContent } from "@/data/book-content-types";

/** Pemodelan deterministik dan stokastik: sumber asli dengan bukti dan solusi. */
export const modelingContent:BookLessonContent={
  "intro": [
    "Model matematika bukan sekadar menempatkan angka ke dalam rumus. Sebelum menghitung, kita harus menetapkan besaran yang diputuskan, besaran yang diukur, satuannya, batas yang tidak boleh dilanggar, dan cara model dibandingkan dengan keadaan yang diamati. Misalnya, persediaan yang dipilih sebelum permintaan diketahui tidak dapat dinilai hanya dengan memasukkan permintaan rata-rata: kelebihan dan kekurangan persediaan mempunyai biaya yang berbeda.",
    "Kita akan membandingkan model deterministik dan model stokastik dengan masalah persediaan satu periode. Keputusan $q$ menyatakan jumlah unit yang disiapkan; permintaan acak $D$ dapat bernilai $4$ unit dengan peluang $0{,}4$ atau $8$ unit dengan peluang $0{,}6$. Kelebihan satu unit berbiaya $2$, sedangkan kekurangan satu unit berbiaya $5$. Fungsi kerugian yang dipakai adalah $L(q,d)=2(q-d)_++5(d-q)_+$, dengan $x_+=\\max\\{x,0\\}$. Satuan $L$ adalah satuan biaya, bukan unit barang.",
    "Contoh ini menghubungkan formulasi, peluang skenario, fungsi tujuan, dan validasi. Kita membuktikan kapan keputusan layak pada semua skenario, mengapa memasukkan permintaan rata-rata tidak sama dengan merata-ratakan kerugian, bagaimana memperoleh keputusan optimal, dan kapan parameter dapat diidentifikasi dari informasi yang tersedia. Model stokastik tidak berarti bahwa setiap besaran harus acak: $q$ tetap merupakan keputusan yang ditentukan sebelum $D$ teramati.",
    "Rujukan konseptual: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017), bagian pemodelan dan keputusan; Sheldon M. Ross, Introduction to Probability Models, edisi ke-12 (2019), bagian peubah acak dan ekspektasi. Identitas dan perhitungan pada halaman ini diturunkan secara eksplisit, bukan dikutip sebagai hasil tanpa pembuktian."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Model Deterministik",
      "statement": "Model deterministik menetapkan hubungan $y=f(x;\\theta)$ antara masukan $x$, parameter tetap $\\theta$, dan keluaran $y$. Jika $x$ dan $\\theta$ diketahui, keluaran ditentukan secara tunggal oleh $f$. Pernyataan ini tidak menjamin bahwa model cocok dengan data nyata; kecocokannya harus diperiksa terpisah."
    },
    {
      "kind": "definition",
      "title": "Model Stokastik Skenario Hingga",
      "statement": "Model stokastik skenario hingga memuat peubah acak $D$ yang bernilai $d_1,\\ldots,d_m$ dengan peluang $p_i\\ge0$ dan $\\sum_{i=1}^m p_i=1$. Untuk keputusan tetap $q$, keluaran atau kerugian $L(q,D)$ menjadi peubah acak. Ekspektasinya, jika setiap nilai kerugian hingga, adalah $E[L(q,D)]=\\sum_{i=1}^m p_iL(q,d_i)$."
    },
    {
      "kind": "definition",
      "title": "Identifiabilitas Parameter",
      "statement": "Suatu keluarga distribusi pengamatan $\\{P_\\theta:\\theta\\in\\Theta\\}$ disebut teridentifikasi apabila $P_{\\theta_1}=P_{\\theta_2}$ mengakibatkan $\\theta_1=\\theta_2$. Identifiabilitas adalah sifat keluarga model pada tingkat distribusi, bukan jaminan bahwa satu sampel hingga menentukan parameter secara tepat."
    },
    {
      "kind": "definition",
      "title": "Kerugian dan Keputusan Optimal",
      "statement": "Untuk himpunan keputusan layak $Q\\subseteq\\mathbb R$ dan fungsi kerugian $L:Q\\times\\{d_1,\\ldots,d_m\\}\\to[0,\\infty)$, risiko keputusan $q\\in Q$ didefinisikan oleh $R(q)=E[L(q,D)]$. Keputusan $q^*\\in Q$ disebut optimal dalam arti risiko apabila $R(q^*)\\le R(q)$ untuk setiap $q\\in Q$. Infimum risiko tidak selalu dicapai jika $Q$ tidak tertutup."
    },
    {
      "kind": "proposition",
      "title": "Kelayakan pada Semua Skenario",
      "statement": "Misalkan $Q\\subseteq\\mathbb R^n$ dan, untuk setiap skenario $d_i$, $F_i=\\{q\\in Q:g_j(q,d_i)\\le0,\\ j=1,\\ldots,r\\}$. Suatu keputusan memenuhi seluruh kendala pada semua skenario jika dan hanya jika $q\\in\\bigcap_{i=1}^m F_i$.",
      "proof": [
        "Diketahui $q$ memenuhi seluruh kendala pada semua skenario. Untuk setiap $i$ dan setiap $j$, berlaku $g_j(q,d_i)\\le0$ serta $q\\in Q$. Berdasarkan definisi $F_i$, diperoleh $q\\in F_i$ untuk setiap $i$, sehingga $q\\in\\bigcap_{i=1}^m F_i$. Ini membuktikan arah $(\\Rightarrow)$.",
        "Sebaliknya, diketahui $q\\in\\bigcap_{i=1}^m F_i$. Maka $q\\in F_i$ untuk setiap $i$. Dengan menguraikan definisi masing-masing $F_i$, diperoleh $q\\in Q$ dan $g_j(q,d_i)\\le0$ untuk semua pasangan indeks $i,j$. Jadi seluruh kendala dipenuhi pada semua skenario. Arah $(\\Leftarrow)$ terbukti; dengan demikian kedua pernyataan ekuivalen. $\\square$"
      ],
      "explanation": "Irisan skenario merupakan syarat tangguh (robust), lebih kuat daripada sekadar memenuhi kendala pada permintaan rata-rata. Skenario dengan peluang positif kecil tetap harus diperiksa jika syaratnya memang “semua skenario”."
    },
    {
      "kind": "proposition",
      "title": "Nonnegativitas Risiko dan Kasus Kesamaan",
      "statement": "Untuk skenario hingga dengan $p_i\\ge0$, $\\sum_i p_i=1$, dan kerugian $L(q,d_i)\\ge0$, berlaku $R(q)\\ge0$. Selain itu, $R(q)=0$ jika dan hanya jika $L(q,d_i)=0$ untuk setiap skenario dengan $p_i>0$.",
      "proof": [
        "Diketahui setiap suku $p_iL(q,d_i)$ tidak negatif. Penjumlahannya menghasilkan $R(q)=\\sum_i p_iL(q,d_i)\\ge0$. Jika semua skenario berpeluang positif mempunyai kerugian nol, setiap suku pada jumlah itu nol, termasuk suku dengan $p_i=0$, sehingga $R(q)=0$.",
        "Untuk arah sebaliknya, misalkan $R(q)=0$. Karena jumlah hingga dari suku-suku tidak negatif bernilai nol, setiap suku harus nol: $p_iL(q,d_i)=0$. Apabila $p_i>0$, pembagian oleh $p_i$ memberi $L(q,d_i)=0$. Skenario dengan $p_i=0$ tidak dapat disimpulkan mempunyai kerugian nol. Dengan demikian karakterisasi kesamaan terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Dekomposisi Risiko Galat Kuadrat",
      "statement": "Jika $D$ mempunyai momen kedua hingga dan $\\mu=E[D]$, maka untuk setiap $q\\in\\mathbb R$ berlaku $E[(D-q)^2]=\\operatorname{Var}(D)+(q-\\mu)^2$. Oleh karena itu $q=\\mu$ adalah peminimum global tunggal risiko galat kuadrat.",
      "proof": [
        "Diketahui $E[D^2]<\\infty$. Tuliskan $D-q=(D-\\mu)+(\\mu-q)$ dan kuadratkan: $(D-q)^2=(D-\\mu)^2+2(D-\\mu)(\\mu-q)+(\\mu-q)^2$. Semua ekspektasi pada ruas kanan terdefinisi karena momen kedua hingga.",
        "Dengan mengambil ekspektasi dan menggunakan $E[D-\\mu]=0$, suku silang lenyap. Diperoleh $E[(D-q)^2]=E[(D-\\mu)^2]+(\\mu-q)^2=\\operatorname{Var}(D)+(q-\\mu)^2$. Suku kuadrat tidak negatif dan nol tepat saat $q=\\mu$. Dengan demikian $q=\\mu$ merupakan peminimum global tunggal. $\\square$"
      ],
      "explanation": "Optimalitas mean berlaku untuk kerugian kuadrat, bukan otomatis untuk biaya kekurangan dan kelebihan yang tidak simetris."
    },
    {
      "kind": "theorem",
      "title": "Ketaksamaan Jensen untuk Skenario Hingga",
      "statement": "Misalkan $d_1,\\ldots,d_m$ berada dalam interval $I$, $p_i\\ge0$ dengan $\\sum_i p_i=1$, dan $\\varphi:I\\to\\mathbb R$ terdiferensialkan serta konveks. Dengan $\\mu=\\sum_i p_id_i$, berlaku $\\varphi(\\mu)\\le\\sum_i p_i\\varphi(d_i)$.",
      "proof": [
        "Diketahui $\\varphi$ konveks dan terdiferensialkan pada interval yang memuat $\\mu$ dan semua $d_i$. Ketaksamaan garis singgung pendukung untuk fungsi konveks memberi $\\varphi(d_i)\\ge\\varphi(\\mu)+\\varphi'(\\mu)(d_i-\\mu)$ bagi setiap $i$.",
        "Kalikan masing-masing ketaksamaan dengan $p_i\\ge0$ dan jumlahkan. Ruas kanan menjadi $\\varphi(\\mu)\\sum_i p_i+\\varphi'(\\mu)\\sum_i p_i(d_i-\\mu)=\\varphi(\\mu)$, karena $\\sum_i p_i=1$ dan $\\sum_i p_i d_i=\\mu$. Maka $\\sum_i p_i\\varphi(d_i)\\ge\\varphi(\\mu)$. Dengan demikian ketaksamaan terbukti. $\\square$"
      ],
      "explanation": "Mengganti permintaan acak dengan mean biasanya meremehkan risiko kerugian yang konveks terhadap permintaan; ketaksamaan dapat ketat meskipun mean sudah diketahui tepat."
    },
    {
      "kind": "theorem",
      "title": "Fraktil Kritis untuk Biaya Kekurangan dan Kelebihan",
      "statement": "Misalkan $D$ mempunyai dukungan hingga, $c_o,c_u>0$, dan $R(q)=E[c_o(q-D)_++c_u(D-q)_+]$ untuk $q\\in\\mathbb R$. Dengan $F(q)=P(D\\le q)$ dan $F(q^-)=P(D<q)$, keputusan $q$ meminimalkan $R$ jika dan hanya jika $F(q^-)\\le\\frac{c_u}{c_o+c_u}\\le F(q)$.",
      "proof": [
        "Diketahui untuk setiap $d$ fungsi $q\\mapsto c_o(q-d)_++c_u(d-q)_+$ konveks dan linear pada masing-masing sisi $d$. Jumlah berbobot dengan peluang nonnegatif tetap konveks. Kemiringan dari kiri pada $q$ adalah $c_oP(D<q)-c_uP(D\\ge q)=(c_o+c_u)F(q^-)-c_u$.",
        "Kemiringan dari kanan pada $q$ adalah $c_oP(D\\le q)-c_uP(D>q)=(c_o+c_u)F(q)-c_u$. Untuk fungsi konveks satu variabel, $q$ merupakan peminimum global jika dan hanya jika kemiringan kiri tidak positif dan kemiringan kanan tidak negatif: bila keduanya demikian, fungsi tidak dapat menurun saat meninggalkan $q$ ke kiri maupun ke kanan; jika salah satu gagal, perpindahan kecil ke arah terkait menurunkan fungsi.",
        "Jadi syarat optimalitas setara dengan $(c_o+c_u)F(q^-)-c_u\\le0\\le(c_o+c_u)F(q)-c_u$. Karena $c_o+c_u>0$, pembagian memberi $F(q^-)\\le c_u/(c_o+c_u)\\le F(q)$. Seluruh langkah dapat dibalik, sehingga kedua arah terbukti. $\\square$"
      ],
      "explanation": "Pada distribusi diskret, peminimum dapat berupa satu titik atau interval. Tanda ketaksamaan yang tidak ketat diperlukan agar kasus peluang tepat pada fraktil kritis tidak terbuang."
    },
    {
      "kind": "proposition",
      "title": "Identifiabilitas Peluang Dua Titik dari Distribusi",
      "statement": "Dalam keluarga distribusi dengan dukungan diketahui $\\{a,b\\}$, $a<b$, dan parameter $p=P(D=b)\\in[0,1]$, berlaku $E[D]=a+(b-a)p$. Parameter $p$ teridentifikasi oleh distribusi, bahkan oleh mean populasinya, melalui $p=(E[D]-a)/(b-a)$.",
      "proof": [
        "Diketahui $P(D=a)=1-p$ dan $P(D=b)=p$. Menurut definisi ekspektasi diskret, $E[D]=a(1-p)+bp=a+(b-a)p$. Karena $a<b$, penyebut $b-a$ tidak nol, sehingga persamaan tersebut dapat diselesaikan secara tunggal untuk $p$.",
        "Jika dua parameter $p_1,p_2$ menghasilkan distribusi yang sama, mean kedua distribusi juga sama. Rumus di atas memberi $(b-a)p_1=(b-a)p_2$, sehingga $p_1=p_2$. Dengan demikian keluarga model teridentifikasi. Ini tidak berarti mean sampel dari sejumlah observasi pasti sama dengan mean populasi. $\\square$"
      ],
      "explanation": "Jika dukungan $\\{a,b\\}$ tidak diketahui atau keluarga distribusi dibiarkan bebas, mean saja tidak menentukan seluruh distribusi; contoh tandingan diberikan pada latihan."
    },
    {
      "kind": "proposition",
      "title": "Neraca Akumulasi dan Pemeriksaan Satuan",
      "statement": "Misalkan stok $S_t$ diukur dalam unit barang dan untuk $t=0,\\ldots,T-1$ berlaku $S_{t+1}=S_t+u_t-v_t$, dengan $u_t,v_t$ masing-masing jumlah unit masuk dan keluar selama periode $t$. Maka $S_T=S_0+\\sum_{t=0}^{T-1}u_t-\\sum_{t=0}^{T-1}v_t$.",
      "proof": [
        "Diketahui persamaan neraca berlaku pada setiap periode. Jumlahkan persamaan $S_{t+1}-S_t=u_t-v_t$ untuk $t=0,\\ldots,T-1$. Ruas kiri membentuk jumlah teleskopik: $(S_1-S_0)+(S_2-S_1)+\\cdots+(S_T-S_{T-1})=S_T-S_0$.",
        "Ruas kanan menjadi $\\sum_t u_t-\\sum_t v_t$. Tambahkan $S_0$ pada kedua ruas untuk memperoleh identitas yang dinyatakan. Karena $S_t,u_t,v_t$ semuanya diukur dalam unit barang, setiap penjumlahan mempunyai dimensi yang konsisten. Jika $u_t$ dinyatakan dalam unit per hari, ia harus dikalikan panjang periode terlebih dahulu. Dengan demikian identitas neraca terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Model Deterministik",
      "forDefinition": "Model Deterministik",
      "problem": "Tangki berisi $10$ liter air dan menerima aliran masuk konstan $3$ liter/menit selama $4$ menit tanpa aliran keluar. Tentukan volume akhir dan satuannya.",
      "solution": [
        "Diketahui volume awal $V_0=10$ liter, laju masuk $r=3$ liter/menit, waktu $t=4$ menit, dan tidak ada aliran keluar. Model deterministiknya $V(t)=V_0+rt$; masukan dan parameter yang ditetapkan menentukan satu volume akhir.",
        "Substitusi memberi $V(4)=10+(3)(4)=22$ liter. Pemeriksaan dimensi: $(\\mathrm{liter/menit})(\\mathrm{menit})=\\mathrm{liter}$, sehingga penjumlahan dengan volume awal sah.",
        "Hasil $22$ liter hanya berlaku selama laju masuk benar-benar tetap dan tidak ada kebocoran atau luapan. Jika data nyata menunjukkan volume $20$ liter, itu merupakan residual model sebesar $-2$ liter, bukan alasan mengubah aritmetika model."
      ],
      "conclusion": "Dengan asumsi laju tetap dan tanpa kebocoran, volume akhir tangki adalah 22 liter."
    },
    {
      "title": "Contoh Model Stokastik Dua Skenario",
      "forDefinition": "Model Stokastik Skenario Hingga",
      "problem": "Permintaan $D$ adalah $4$ unit dengan peluang $0{,}4$ dan $8$ unit dengan peluang $0{,}6$. Jika disiapkan $q=6$ unit, hitung peluang dan kerugian tiap skenario untuk $L(q,d)=2(q-d)_++5(d-q)_+$.",
      "solution": [
        "Diketahui $P(D=4)=0{,}4$ dan $P(D=8)=0{,}6$. Jumlah peluang $0{,}4+0{,}6=1$ dan keduanya tidak negatif, sehingga distribusi skenario sah. Keputusan $q=6$ dipilih sebelum skenario diketahui.",
        "Pada $d=4$, terjadi kelebihan $6-4=2$ unit; kerugian $L(6,4)=2(2)+5(0)=4$. Pada $d=8$, terjadi kekurangan $8-6=2$ unit; kerugian $L(6,8)=2(0)+5(2)=10$.",
        "Ekspektasi kerugian adalah $R(6)=0{,}4(4)+0{,}6(10)=1{,}6+6=7{,}6$ satuan biaya. Risiko bukan $L(6,E[D])$; mean permintaan adalah $6{,}4$ unit dan memasukkannya ke fungsi kerugian menghasilkan $2$, bukan $7{,}6$."
      ],
      "conclusion": "Kerugian acak bernilai 4 atau 10, dengan risiko keputusan q=6 sebesar 7,6 satuan biaya."
    },
    {
      "title": "Contoh Identifiabilitas Peluang Skenario",
      "forDefinition": "Identifiabilitas Parameter",
      "problem": "Pada keluarga model $D\\in\\{4,8\\}$ dengan $p=P(D=8)$, mean populasi diketahui $6{,}4$. Tentukan $p$ dan bedakan dari penaksiran berdasarkan sampel.",
      "solution": [
        "Diketahui dukungan model tepat $\\{4,8\\}$ dan parameter yang belum diketahui adalah $p$. Menurut definisi ekspektasi, $E[D]=4(1-p)+8p=4+4p$.",
        "Dari informasi mean populasi $6{,}4$, diperoleh $4+4p=6{,}4$, sehingga $4p=2{,}4$ dan $p=0{,}6$. Verifikasi: $P(D=4)=0{,}4$ dan $4(0{,}4)+8(0{,}6)=1{,}6+4{,}8=6{,}4$.",
        "Kesimpulan identifiabilitas menggunakan mean populasi eksak. Jika $6{,}4$ hanya rata-rata dari sampel kecil, $p=0{,}6$ adalah taksiran, bukan parameter yang telah diketahui tanpa galat."
      ],
      "conclusion": "Dalam keluarga dua titik yang dukungannya diketahui, p=0,6 teridentifikasi oleh mean populasi 6,4."
    },
    {
      "title": "Contoh Risiko dan Keputusan Optimal",
      "forDefinition": "Kerugian dan Keputusan Optimal",
      "problem": "Untuk model dua skenario pada pengantar, bandingkan keputusan $q=4$, $q=6{,}4$, dan $q=8$ berdasarkan risiko yang sebenarnya.",
      "solution": [
        "Diketahui $R(q)=0{,}4L(q,4)+0{,}6L(q,8)$, dengan biaya kelebihan $2$ dan kekurangan $5$ per unit. Semua keputusan dibandingkan pada distribusi skenario yang sama.",
        "Untuk $q=4$, kerugian masing-masing $0$ dan $5(8-4)=20$, sehingga $R(4)=0{,}4(0)+0{,}6(20)=12$. Untuk $q=8$, kerugian masing-masing $2(8-4)=8$ dan $0$, sehingga $R(8)=0{,}4(8)=3{,}2$.",
        "Untuk $q=6{,}4$, kerugian pada $D=4$ adalah $2(2{,}4)=4{,}8$ dan pada $D=8$ adalah $5(1{,}6)=8$. Jadi $R(6{,}4)=0{,}4(4{,}8)+0{,}6(8)=1{,}92+4{,}8=6{,}72$. Di antara tiga kandidat, $q=8$ terbaik; teorema fraktil kritis kemudian membuktikan optimalitas globalnya."
      ],
      "conclusion": "Risiko q=8 adalah 3,2, lebih kecil daripada risiko q=6,4 dan q=4."
    },
    {
      "title": "Contoh Kelayakan Tangguh",
      "problem": "Sebuah gudang harus memenuhi permintaan $D\\in\\{4,8\\}$ dari stok awal $q\\in[0,10]$, tanpa pasokan susulan. Tentukan seluruh keputusan yang memenuhi semua skenario.",
      "solution": [
        "Diketahui syarat fisik $0\\le q\\le10$ dan kebutuhan $q\\ge d$ pada setiap skenario. Untuk $d=4$, himpunan keputusan layak adalah $F_1=[4,10]$. Untuk $d=8$, himpunannya $F_2=[8,10]$.",
        "Menurut proposisi kelayakan semua skenario, daerah layak tangguh adalah $F_1\\cap F_2=[8,10]$. Pemeriksaan langsung: jika $q\\in[8,10]$, maka $q\\ge8\\ge4$; jadi kedua permintaan dapat dipenuhi.",
        "Sebaliknya, jika $q<8$, skenario permintaan $8$ tidak terpenuhi, meskipun $q$ mungkin lebih besar daripada mean $6{,}4$. Maka tidak ada keputusan di bawah $8$ yang tangguh."
      ],
      "conclusion": "Seluruh stok tangguh adalah interval tertutup [8,10] unit."
    },
    {
      "title": "Contoh Jensen dan Risiko Rata-rata",
      "problem": "Dengan $D=4$ atau $8$ berpeluang $0{,}4$ dan $0{,}6$, periksa secara numerik ketaksamaan Jensen untuk $\\varphi(d)=(d-6)^2$.",
      "solution": [
        "Diketahui $\\varphi(d)=(d-6)^2$ konveks dan terdiferensialkan karena $\\varphi''(d)=2>0$. Mean permintaan $\\mu=0{,}4(4)+0{,}6(8)=6{,}4$ berada pada interval yang memuat kedua skenario.",
        "Nilai fungsi pada mean adalah $\\varphi(\\mu)=(6{,}4-6)^2=0{,}16$. Sebaliknya, rata-rata nilai fungsi adalah $0{,}4(4-6)^2+0{,}6(8-6)^2=0{,}4(4)+0{,}6(4)=4$.",
        "Dengan demikian $0{,}16<4$, sesuai Jensen. Selisih $3{,}84$ adalah varians $D$, sebab $0{,}4(4-6{,}4)^2+0{,}6(8-6{,}4)^2=2{,}304+1{,}536=3{,}84$."
      ],
      "conclusion": "Kerugian pada permintaan rata-rata 0,16 lebih kecil daripada ekspektasi kerugian 4."
    },
    {
      "title": "Contoh Fraktil Kritis",
      "problem": "Tentukan seluruh keputusan optimal $q\\in\\mathbb R$ untuk $D\\in\\{4,8\\}$ dengan peluang $0{,}4,0{,}6$, biaya kelebihan $2$, dan biaya kekurangan $5$.",
      "solution": [
        "Diketahui $c_o=2>0$ dan $c_u=5>0$. Fraktil kritis adalah $c_u/(c_o+c_u)=5/7\\approx0{,}7142857$. CDF bernilai $0$ untuk $q<4$, $0{,}4$ untuk $4\\le q<8$, dan $1$ untuk $q\\ge8$.",
        "Pada $q=8$, diperoleh $F(8^-)=0{,}4$ dan $F(8)=1$, sehingga $0{,}4\\le5/7\\le1$. Untuk $q<8$, berlaku $F(q)\\le0{,}4<5/7$, jadi syarat kanan gagal. Untuk $q>8$, berlaku $F(q^-)=1>5/7$, jadi syarat kiri gagal.",
        "Maka peminimum global tunggal adalah $q^*=8$. Verifikasi langsung: $R(8)=0{,}4(2\\cdot4)+0{,}6(0)=3{,}2$. Keputusan ini tidak diperoleh hanya dengan mengganti $D$ oleh mean $6{,}4$."
      ],
      "conclusion": "Keputusan optimal global tunggal adalah q=8 dengan risiko 3,2."
    },
    {
      "title": "Contoh Neraca Stok dan Residual",
      "problem": "Stok awal $S_0=10$ unit. Dua periode mempunyai pemasukan $(u_0,u_1)=(5,3)$ dan pengeluaran $(v_0,v_1)=(4,6)$. Tentukan stok akhir dan verifikasi dengan dua cara.",
      "solution": [
        "Diketahui seluruh besaran dalam unit barang. Pada periode pertama, $S_1=S_0+u_0-v_0=10+5-4=11$. Pada periode kedua, $S_2=S_1+u_1-v_1=11+3-6=8$.",
        "Pemeriksaan independen dengan identitas neraca teleskopik memberi $S_2=S_0+(u_0+u_1)-(v_0+v_1)=10+(5+3)-(4+6)=8$. Kedua cara menghasilkan nilai yang sama.",
        "Residual neraca adalah $S_2-S_0-\\sum u_t+\\sum v_t=8-10-8+10=0$. Jika data observasi menyatakan stok akhir $7$, residual menjadi $-1$ unit dan model atau data perlu diperiksa, bukan disembunyikan."
      ],
      "conclusion": "Stok akhir adalah 8 unit dan residual neraca model bernilai nol."
    }
  ],
  "exercises": [
    {
      "prompt": "M-01. Sebuah waduk berisi $50$ m³ air. Debit masuk $2$ m³/jam dan debit keluar $0{,}5$ m³/jam, keduanya konstan selama $6$ jam. Formulasikan model, hitung volume akhir, dan periksa satuan.",
      "hint": "Pisahkan stok awal dari debit; debit harus dikalikan durasi.",
      "answer": "Diketahui volume awal $V_0=50$ m³, debit masuk $r_{\\mathrm{in}}=2$ m³/jam, debit keluar $r_{\\mathrm{out}}=0{,}5$ m³/jam, dan durasi $t=6$ jam. Ditentukan volume akhir berdasarkan asumsi debit konstan tanpa sumber atau kebocoran lain.\n\nNeraca deterministik menyatakan $V(t)=V_0+(r_{\\mathrm{in}}-r_{\\mathrm{out}})t$. Selisih debit $2-0{,}5=1{,}5$ m³/jam. Dengan mengalikan waktu diperoleh pertambahan $1{,}5(6)=9$ m³, sehingga $V(6)=50+9=59$ m³.\n\nVerifikasi satuan: m³/jam dikalikan jam menghasilkan m³. Pemeriksaan melalui aliran terpisah memberi masuk $12$ m³ dan keluar $3$ m³, jadi $50+12-3=59$ m³. Hasil ini bergantung pada asumsi debit tetap sepanjang enam jam.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-02. Permintaan $D$ bernilai $4$ unit dengan peluang $0{,}4$ atau $8$ unit dengan peluang $0{,}6$. Untuk $q=5$, hitung $E[D]$, kerugian tiap skenario, dan $R(5)$ jika biaya lebih $2$ dan biaya kurang $5$ per unit.",
      "hint": "Gunakan kerugian potongan, lalu rata-ratakan dengan peluang masing-masing.",
      "answer": "Diketahui dua skenario dengan peluang total $1$ dan keputusan $q=5$ unit. Mean permintaan adalah $E[D]=0{,}4(4)+0{,}6(8)=1{,}6+4{,}8=6{,}4$ unit. Yang dicari adalah ekspektasi kerugian, bukan kerugian pada permintaan rata-rata.\n\nJika $D=4$, kelebihan stok satu unit menimbulkan $L(5,4)=2(5-4)=2$. Jika $D=8$, kekurangan tiga unit menimbulkan $L(5,8)=5(8-5)=15$. Maka $R(5)=0{,}4(2)+0{,}6(15)=0{,}8+9=9{,}8$ satuan biaya.\n\nVerifikasi: $L(5,6{,}4)=5(1{,}4)=7$ tidak sama dengan $9{,}8$; kedua operasi tidak dapat ditukar karena fungsi kerugian tidak linear di seluruh domain. Hasil $9{,}8$ adalah risiko yang relevan untuk keputusan sebelum permintaan diketahui.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-03. Untuk distribusi pada M-02, hitung $E[(D-6)^2]$ dengan dua cara dan jelaskan mengapa $q=E[D]$ meminimalkan kerugian kuadrat tetapi tidak otomatis meminimalkan biaya kekurangan–kelebihan.",
      "hint": "Hitung varians lalu gunakan dekomposisi galat kuadrat.",
      "answer": "Diketahui $D\\in\\{4,8\\}$ dengan peluang $0{,}4,0{,}6$ dan $\\mu=6{,}4$. Pertama, hitung langsung $E[(D-6)^2]=0{,}4(4-6)^2+0{,}6(8-6)^2=0{,}4(4)+0{,}6(4)=4$.\n\nKedua, varians $D$ adalah $0{,}4(4-6{,}4)^2+0{,}6(8-6{,}4)^2=0{,}4(5{,}76)+0{,}6(2{,}56)=3{,}84$. Dekomposisi memberi $E[(D-6)^2]=3{,}84+(6-6{,}4)^2=3{,}84+0{,}16=4$, cocok dengan cara pertama.\n\nKarena $E[(D-q)^2]=3{,}84+(q-6{,}4)^2$, minimum tunggalnya pada $q=6{,}4$. Untuk biaya asimetris, sebaliknya, $R(6{,}4)=6{,}72$ sedangkan $R(8)=3{,}2$. Jadi optimalitas mean bergantung pada bentuk fungsi kerugian, bukan hanya distribusi permintaan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-04. Buktikan bahwa jika $\\varphi$ konveks terdiferensialkan dan $D$ mempunyai dua skenario $a,b$ berpeluang $p,1-p$, maka $\\varphi(E[D])\\le E[\\varphi(D)]$. Uji ketaksamaan pada $\\varphi(x)=x^2$, $a=0$, $b=2$, $p=1/2$.",
      "hint": "Gunakan garis singgung pendukung di mean, lalu hitung kedua sisi contoh.",
      "answer": "Diketahui $0\\le p\\le1$, $\\mu=pa+(1-p)b$, dan $\\varphi$ konveks terdiferensialkan pada interval yang memuat $a,b$. Dibuktikan ketaksamaan Jensen untuk dua skenario. Konveksitas memberi $\\varphi(a)\\ge\\varphi(\\mu)+\\varphi'(\\mu)(a-\\mu)$ serta $\\varphi(b)\\ge\\varphi(\\mu)+\\varphi'(\\mu)(b-\\mu)$.\n\nKalikan ketaksamaan pertama dengan $p$ dan kedua dengan $1-p$, lalu jumlahkan. Karena $p(a-\\mu)+(1-p)(b-\\mu)=0$, suku gradien lenyap dan diperoleh $p\\varphi(a)+(1-p)\\varphi(b)\\ge\\varphi(\\mu)$. Ini membuktikan pernyataan.\n\nUntuk contoh, $\\mu=(0+2)/2=1$, sehingga $\\varphi(\\mu)=1$, sedangkan $E[\\varphi(D)]=(0^2+2^2)/2=2$. Jadi $1\\le2$ dan ketaksamaan ketat. Dengan demikian bukti formal dan pemeriksaan numerik konsisten.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-05. Untuk $D\\in\\{4,8\\}$ berpeluang $0{,}4,0{,}6$ dan biaya lebih $c_o=3$, biaya kurang $c_u=2$, tentukan seluruh peminimum risiko pada $q\\in\\mathbb R$ dan nilai minimum.",
      "hint": "Fraktil kritisnya 2/5; periksa nilai CDF tepat di titik 4 dan 8.",
      "answer": "Diketahui $c_o=3>0$, $c_u=2>0$, sehingga fraktil kritis adalah $c_u/(c_o+c_u)=2/5=0{,}4$. Distribusi mempunyai $F(4^-)=0$, $F(4)=0{,}4$, $F(8^-)=0{,}4$, dan $F(8)=1$.\n\nUntuk setiap $q\\in[4,8]$, berlaku $F(q^-)\\le0{,}4\\le F(q)$: pada titik 4 dan 8 periksa nilai batas tersebut, sedangkan di bagian dalam kedua nilai CDF sama dengan $0{,}4$. Jadi semua $q\\in[4,8]$ optimal. Jika $q<4$, maka $F(q)=0<0{,}4$; jika $q>8$, maka $F(q^-)=1>0{,}4$. Tidak ada peminimum di luar interval.\n\nPada $q\\in[4,8]$, risiko adalah $0{,}4\\cdot3(q-4)+0{,}6\\cdot2(8-q)=1{,}2(q-4)+1{,}2(8-q)=4{,}8$. Verifikasi di kedua ujung memberi $R(4)=0{,}6(2)(4)=4{,}8$ dan $R(8)=0{,}4(3)(4)=4{,}8$. Seluruh interval, bukan satu titik, merupakan himpunan solusi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-06. Kapasitas $q$ dibatasi $0\\le q\\le12$. Skenario kebutuhan $d$ adalah $5$, $9$, atau $11$ unit dan kendalanya $q\\ge d$. Tentukan daerah layak untuk setiap skenario, irisannya, dan apakah $q=10$ tangguh.",
      "hint": "Buat tiga interval lalu gunakan karakterisasi irisan skenario.",
      "answer": "Diketahui $Q=[0,12]$ dan kendala untuk skenario $d$ adalah $q\\ge d$. Maka daerah layak pada $d=5$ ialah $F_1=[5,12]$, pada $d=9$ ialah $F_2=[9,12]$, dan pada $d=11$ ialah $F_3=[11,12]$.\n\nDaerah layak tangguh adalah irisan ketiganya: $F_1\\cap F_2\\cap F_3=[11,12]$. Inklusi dari kiri ke kanan mengikuti definisi irisan; sebaliknya setiap $q\\in[11,12]$ memenuhi $q\\ge11\\ge9\\ge5$ dan batas kapasitas, sehingga termasuk ketiga daerah.\n\nKeputusan $q=10$ memenuhi skenario $5$ dan $9$, tetapi gagal pada skenario $11$ karena kekurangan satu unit. Dengan demikian $q=10$ tidak tangguh, meskipun memenuhi dua dari tiga skenario.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-07. Model A menetapkan $D=6$ hampir pasti. Model B menetapkan $D=4$ atau $8$ dengan peluang sama. Periksa apakah mean saja mengidentifikasi distribusi dan hitung risiko kuadrat untuk keputusan $q=6$ pada kedua model.",
      "hint": "Bandingkan mean, varians, dan nilai harapan kerugian pada kedua distribusi.",
      "answer": "Diketahui pada model A, $P(D=6)=1$, sehingga $E_A[D]=6$ dan $E_A[(D-6)^2]=0$. Pada model B, $P(D=4)=P(D=8)=1/2$, sehingga $E_B[D]=(4+8)/2=6$. Kedua model mempunyai mean populasi yang sama.\n\nNamun distribusinya berbeda: $P_A(D=6)=1$ sedangkan $P_B(D=6)=0$. Pada model B, risiko kuadrat untuk $q=6$ adalah $E_B[(D-6)^2]=\\frac12(4-6)^2+\\frac12(8-6)^2=4$. Pada model A nilainya nol.\n\nDengan demikian mean saja tidak mengidentifikasi distribusi dalam keluarga model yang tidak membatasi dukungan. Ini tidak bertentangan dengan identifiabilitas parameter pada keluarga dua titik dengan dukungan diketahui; pada keluarga terbatas itu struktur model memberi informasi tambahan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "M-08. Dengan $D\\in\\{4,8\\}$ berpeluang $0{,}4,0{,}6$ dan biaya lebih $c_o=2$, tentukan nilai biaya kurang $c_u>0$ yang membuat $q=4$ optimal, $q=8$ optimal, atau seluruh $[4,8]$ optimal.",
      "hint": "Bandingkan c_u/(2+c_u) dengan F(4)=0,4; perhatikan kasus kesamaan.",
      "answer": "Diketahui $c_o=2$ dan $c_u>0$. Fraktil kritis $\\alpha=c_u/(2+c_u)$ meningkat terhadap $c_u$. Nilai batas $\\alpha=0{,}4$ memberi $c_u=0{,}4(2+c_u)$, sehingga $0{,}6c_u=0{,}8$ dan $c_u=4/3$.\n\nJika $0<c_u<4/3$, maka $\\alpha<0{,}4$, dan syarat fraktil kritis terpenuhi hanya di $q=4$, sebab $F(4^-)=0\\le\\alpha\\le F(4)=0{,}4$. Jika $c_u>4/3$, maka $\\alpha>0{,}4$, dan syarat terpenuhi hanya di $q=8$, sebab $F(8^-)=0{,}4<\\alpha<1=F(8)$.\n\nJika $c_u=4/3$, maka $\\alpha=0{,}4$ dan setiap $q\\in[4,8]$ memenuhi ketaksamaan fraktil. Risiko pada interval itu sama, yaitu $0{,}4(2)(q-4)+0{,}6(4/3)(8-q)=0{,}8(q-4)+0{,}8(8-q)=3{,}2$. Jadi kasus batas menghasilkan interval peminimum, bukan pilihan tunggal.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
