import type { BookLessonContent } from "@/data/book-content-types";

/** Pemodelan linear: proposisi yang dapat dibuktikan dan solusi asli. */
export const linearityModelContent:BookLessonContent={
  intro:[
    "Dalam perencanaan produksi, suatu model disebut linear bukan karena grafik kendalanya tampak lurus, melainkan karena setiap tambahan unit keputusan memberi kontribusi tetap dan kontribusi berbagai keputusan dapat dijumlahkan. Sebagai contoh, jika satu unit produk A memerlukan dua jam mesin dan satu unit produk B memerlukan satu jam, penggunaan mesin adalah $2x+y$ jam. Hubungan ini dapat diperiksa dari satuan, dari eksperimen perubahan keputusan, dan dari identitas aljabar.",
    "Kita membedakan fungsi linear $L(x)=c^Tx$ dari fungsi afine $g(x)=c^Tx+d$, serta membedakan linearitas fungsi dari bentuk pertidaksamaan program linear. Ruas kanan kendala dapat berupa konstanta tanpa menghilangkan sifat program linear. Sebaliknya, biaya interaksi $xy$, diskon berdasarkan ambang, atau biaya tetap yang aktif hanya ketika produksi positif memerlukan perhatian khusus.",
    "Empat asumsi pemodelan program linear yang diperiksa adalah proporsionalitas, aditivitas, keterbagian keputusan, dan kepastian parameter. Dua yang pertama menyangkut hubungan matematis; keterbagian menyangkut domain keputusan; kepastian menyangkut status data. Memenuhi dua asumsi pertama saja tidak membenarkan penggunaan keputusan pecahan ketika unit barang harus utuh.",
    "Rujukan: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017), pembahasan asumsi linear programming; Dimitris Bertsimas dan John N. Tsitsiklis, Introduction to Linear Optimization (1997), pembahasan formulasi, poliedron, dan relaksasi linear. Semua identitas serta sertifikat optimum yang dipakai di bawah dibuktikan langsung."
  ],
  formal:[
    {
      kind:"definition",title:"Fungsi Linear dan Prinsip Superposisi",
      statement:"Suatu fungsi $L:\\mathbb R^n\\to\\mathbb R^m$ disebut linear apabila untuk setiap $u,v\\in\\mathbb R^n$ dan $\\alpha,\\beta\\in\\mathbb R$ berlaku $L(\\alpha u+\\beta v)=\\alpha L(u)+\\beta L(v)$. Dalam pemodelan sumber daya, identitas ini menggabungkan aditivitas dan homogenitas (proporsionalitas).",
      explanation:"Identitas diuji pada domain vektor, bukan dengan mencoba dua titik lalu menggeneralisasikannya ke semua keputusan."
    },
    {
      kind:"definition",title:"Fungsi Afine dan Kendala Program Linear",
      statement:"Fungsi $g:\\mathbb R^n\\to\\mathbb R$ disebut afine apabila $g(x)=c^Tx+d$ untuk vektor koefisien tetap $c$ dan konstanta $d$. Kendala $c^Tx\\le b$ disebut kendala linear program meskipun fungsi residual $c^Tx-b$ afine dan tidak linear bila $b\\ne0$.",
      explanation:"Biaya dasar yang selalu dibayar dapat menjadi konstanta objektif; biaya pembukaan fasilitas yang hanya dibayar jika fasilitas aktif tidak dapat dimodelkan sebagai konstanta global."
    },
    {
      kind:"definition",title:"Keterbagian dan Relaksasi Linear",
      statement:"Keputusan kontinu $x_j\\in\\mathbb R_{\\ge0}$ dapat bernilai pecahan. Jika unit ke-$j$ tidak dapat dibagi, domain yang benar adalah $x_j\\in\\mathbb Z_{\\ge0}$. Relaksasi linear suatu model bilangan bulat diperoleh dengan mengganti syarat integritas oleh syarat kontinu, tanpa mengubah kendala linear lainnya.",
      explanation:"Relaksasi memperluas himpunan layak; optimum relaksasi bukan otomatis keputusan yang dapat diterapkan."
    },
    {
      kind:"definition",title:"Kepastian Parameter dan Kelayakan Tangguh",
      statement:"Model dengan parameter pasti menggunakan satu matriks $A$ dan ruas kanan $b$ yang ditetapkan. Jika parameter dapat berada dalam himpunan skenario $\\mathcal U$, keputusan $x$ disebut layak tangguh apabila $A(u)x\\le b(u)$ untuk setiap $u\\in\\mathcal U$. Kelayakan pada parameter rata-rata tidak mengimplikasikan kelayakan tangguh.",
      explanation:"Kuantor 'untuk setiap skenario' tidak dapat diganti dengan 'untuk skenario rata-rata' tanpa hipotesis tambahan."
    },
    {
      kind:"proposition",title:"Karakterisasi Linearitas melalui Dua Identitas",
      statement:"Untuk $L:\\mathbb R^n\\to\\mathbb R^m$, pernyataan berikut ekuivalen: (i) $L$ linear; (ii) $L(u+v)=L(u)+L(v)$ untuk semua $u,v$ dan $L(\\alpha u)=\\alpha L(u)$ untuk semua $u,\\alpha$.",
      proof:[
        "($\\Rightarrow$) Diketahui $L$ linear. Dalam definisi superposisi, ambil $\\alpha=\\beta=1$ untuk memperoleh $L(u+v)=L(u)+L(v)$. Dengan mengambil $v=0$ dan $\\beta=0$, diperoleh $L(\\alpha u)=\\alpha L(u)$. Kedua identitas berlaku untuk semua argumen yang disyaratkan.",
        "($\\Leftarrow$) Andaikan aditivitas dan homogenitas berlaku. Untuk sebarang $u,v,\\alpha,\\beta$, aditivitas memberi $L(\\alpha u+\\beta v)=L(\\alpha u)+L(\\beta v)$; homogenitas mengubah ruas kanan menjadi $\\alpha L(u)+\\beta L(v)$. Ini tepat definisi linearitas. Kedua arah terbukti. $\\square$"
      ]
    },
    {
      kind:"proposition",title:"Fungsi Afine Linear Tepat Ketika Konstanta Nol",
      statement:"Misalkan $g(x)=c^Tx+d$ pada seluruh $\\mathbb R^n$. Fungsi $g$ linear jika dan hanya jika $d=0$.",
      proof:[
        "($\\Rightarrow$) Setiap fungsi linear memenuhi $g(0)=g(0\\cdot0)=0g(0)=0$ menurut homogenitas. Karena $g(0)=d$, harus berlaku $d=0$.",
        "($\\Leftarrow$) Jika $d=0$, maka $g(\\alpha u+\\beta v)=c^T(\\alpha u+\\beta v)=\\alpha c^Tu+\\beta c^Tv=\\alpha g(u)+\\beta g(v)$ untuk semua argumen. Karena kedua arah telah dibuktikan, karakterisasi berlaku. $\\square$"
      ]
    },
    {
      kind:"theorem",title:"Representasi Koefisien Tetap dari Fungsi Linear",
      statement:"Jika $L:\\mathbb R^n\\to\\mathbb R$ linear, terdapat tepat satu $c\\in\\mathbb R^n$ sehingga $L(x)=c^Tx$ untuk setiap $x\\in\\mathbb R^n$.",
      proof:[
        "Diketahui basis standar $e_1,\\ldots,e_n$. Setiap $x=(x_1,\\ldots,x_n)^T$ mempunyai dekomposisi $x=\\sum_{j=1}^n x_je_j$. Linearitas yang diterapkan berulang memberi $L(x)=\\sum_{j=1}^n x_jL(e_j)$.",
        "Definisikan $c_j=L(e_j)$ untuk setiap $j$. Persamaan sebelumnya menjadi $L(x)=\\sum_jc_jx_j=c^Tx$, sehingga representasi ada. Untuk ketunggalan, andaikan juga $L(x)=d^Tx$ untuk semua $x$. Substitusi $x=e_j$ memberi $c_j=d_j$ bagi setiap $j$, sehingga $c=d$. Eksistensi dan ketunggalan terbukti. $\\square$"
      ]
    },
    {
      kind:"theorem",title:"Kekonveksan Daerah Layak Program Linear",
      statement:"Untuk matriks tetap $A\\in\\mathbb R^{m\\times n}$ dan vektor $b\\in\\mathbb R^m$, himpunan $F=\\{x\\in\\mathbb R^n:Ax\\le b,\\ x\\ge0\\}$ konveks, termasuk ketika $F$ kosong.",
      proof:[
        "Jika $F$ kosong, definisi konveks terpenuhi secara vakum. Jika tidak, ambil sebarang $u,v\\in F$ dan $t\\in[0,1]$. Diketahui $Au\\le b$, $Av\\le b$, serta $u,v\\ge0$, seluruhnya per komponen.",
        "Karena $t,1-t\\ge0$, kombinasi kedua kendala menghasilkan $A(tu+(1-t)v)=tAu+(1-t)Av\\le tb+(1-t)b=b$. Setiap komponen $tu+(1-t)v$ juga taknegatif. Jadi $tu+(1-t)v\\in F$ untuk semua pilihan tersebut. Ini membuktikan kekonveksan. $\\square$"
      ]
    },
    {
      kind:"proposition",title:"Nilai Tujuan pada Kombinasi Konveks",
      statement:"Untuk $c\\in\\mathbb R^n$, $u,v\\in\\mathbb R^n$, dan $t\\in[0,1]$, berlaku $c^T(tu+(1-t)v)=tc^Tu+(1-t)c^Tv$. Nilai tersebut terletak di antara $c^Tu$ dan $c^Tv$.",
      proof:[
        "Distributivitas perkalian matriks memberi $c^T(tu+(1-t)v)=t(c^Tu)+(1-t)(c^Tv)$. Misalkan $a=c^Tu$ dan $b=c^Tv$. Jika $a\\le b$, selisih $ta+(1-t)b-a=(1-t)(b-a)\\ge0$, sedangkan $b-[ta+(1-t)b]=t(b-a)\\ge0$.",
        "Jika $b\\le a$, pertukarkan peran $a$ dan $b$ pada argumen yang sama. Dengan demikian nilai kombinasi berada di interval tertutup dengan ujung $a,b$. Klaim terbukti. $\\square$"
      ]
    },
    {
      kind:"theorem",title:"Batas Optimum Relaksasi terhadap Model Bilangan Bulat",
      statement:"Misalkan $F_{\\mathrm{IP}}=F_{\\mathrm{LP}}\\cap\\mathbb Z^n$ dan kedua himpunan tidak kosong. Untuk fungsi tujuan $c^Tx$, berlaku $\\sup_{x\\in F_{\\mathrm{IP}}}c^Tx\\le\\sup_{x\\in F_{\\mathrm{LP}}}c^Tx$ pada masalah maksimum, sedangkan $\\inf_{x\\in F_{\\mathrm{LP}}}c^Tx\\le\\inf_{x\\in F_{\\mathrm{IP}}}c^Tx$ pada masalah minimum. Nilai dapat dipahami dalam bilangan real diperluas.",
      proof:[
        "Diketahui $F_{\\mathrm{IP}}\\subseteq F_{\\mathrm{LP}}$. Untuk setiap $x\\in F_{\\mathrm{IP}}$, nilainya termasuk dalam himpunan nilai tujuan relaksasi. Oleh definisi supremum, $c^Tx\\le\\sup_{y\\in F_{\\mathrm{LP}}}c^Ty$. Mengambil supremum atas semua $x\\in F_{\\mathrm{IP}}$ mempertahankan ketaksamaan maksimum.",
        "Untuk masalah minimum, setiap $x\\in F_{\\mathrm{IP}}$ memenuhi $c^Tx\\ge\\inf_{y\\in F_{\\mathrm{LP}}}c^Ty$. Mengambil infimum atas himpunan yang lebih kecil memberi ketaksamaan minimum. Tidak diperlukan klaim bahwa optimum tercapai. Kedua batas terbukti. $\\square$"
      ]
    }
  ],
  examples:[
    {
      title:"Contoh Proporsionalitas dan Aditivitas",forDefinition:"Fungsi Linear dan Prinsip Superposisi",
      problem:"Penggunaan mesin untuk $x$ unit A dan $y$ unit B adalah $L(x,y)=2x+y$. Periksa superposisi pada dua keputusan dan buktikan untuk keputusan umum.",
      solution:[
        "Diketahui keputusan $u=(2,1)$ dan $v=(1,2)$. Penggunaan mesin masing-masing $L(u)=2(2)+1=5$ jam dan $L(v)=2(1)+2=4$ jam. Keputusan gabungan $u+v=(3,3)$ menggunakan $L(u+v)=2(3)+3=9$ jam, tepat sama dengan $5+4$.",
        "Untuk sembarang $u=(u_1,u_2)$, $v=(v_1,v_2)$, dan skalar $\\alpha,\\beta$, hitung $L(\\alpha u+\\beta v)=2(\\alpha u_1+\\beta v_1)+(\\alpha u_2+\\beta v_2)=\\alpha(2u_1+u_2)+\\beta(2v_1+v_2)$.",
        "Ruas kanan adalah $\\alpha L(u)+\\beta L(v)$, sehingga pengujian contoh numerik didukung oleh pembuktian umum. Koefisien 2 dan 1 memiliki satuan jam per unit produk, sedangkan $L$ mempunyai satuan jam."
      ]
    },
    {
      title:"Contoh Biaya Afine",forDefinition:"Fungsi Afine dan Kendala Program Linear",
      problem:"Biaya $g(x)=100+2x$ rupiah dinyatakan untuk $x\\ge0$. Apakah $g$ linear sebagai fungsi pada $\\mathbb R$? Apakah meminimalkan biaya ini dengan kendala linear masih program linear?",
      solution:[
        "Diketahui $g(0)=100$, padahal setiap fungsi linear harus memetakan nol ke nol. Dengan proposisi fungsi afine, $g$ tidak linear karena suku konstanta 100 tidak nol. Perhitungan lain memberi $g(2)=104$, sedangkan $2g(1)=204$, sehingga homogenitas gagal.",
        "Untuk dua keputusan layak $x_1,x_2$, perbandingan biaya memenuhi $g(x_1)-g(x_2)=2(x_1-x_2)$. Konstanta 100 tidak memengaruhi urutan biaya. Karena itu meminimalkan $g$ ekuivalen dengan meminimalkan $2x$ apabila 100 benar-benar dibayar pada semua keputusan termasuk $x=0$.",
        "Kendala afine seperti $3x\\le12$ tetap diizinkan dalam program linear. Namun, jika 100 hanya dibayar ketika $x>0$, fungsi biaya menjadi potongan $0$ saat $x=0$ dan $100+2x$ saat $x>0$; model ini berbeda dan membutuhkan variabel aktivasi."
      ]
    },
    {
      title:"Contoh Keputusan Bulat dan Pecahan",forDefinition:"Keterbagian dan Relaksasi Linear",
      problem:"Maksimumkan $x$ dengan $2x\\le3$, $x\\ge0$. Bandingkan hasil ketika $x$ boleh pecahan dan ketika $x$ bilangan bulat.",
      solution:[
        "Pada relaksasi kontinu, kendala ekuivalen dengan $0\\le x\\le3/2$. Karena tujuan $x$ meningkat terhadap $x$, optimum kontinu adalah $x=3/2$ dengan nilai $3/2$.",
        "Jika $x\\in\\mathbb Z_{\\ge0}$, bilangan bulat yang memenuhi $x\\le3/2$ hanyalah 0 dan 1. Nilai tujuan masing-masing 0 dan 1, sehingga optimum bulat adalah $x=1$.",
        "Selisih batas optimum maksimum adalah $3/2-1=1/2$. Keputusan $3/2$ bukan solusi yang dapat dilaksanakan jika $x$ menghitung mesin utuh; membulatkannya ke 2 justru melanggar $2x\\le3$."
      ]
    },
    {
      title:"Contoh Ketidakpastian Koefisien",forDefinition:"Kepastian Parameter dan Kelayakan Tangguh",
      problem:"Satu produk memerlukan $a$ jam per unit dengan $a\\in[2,3]$ dan kapasitas 9 jam. Tentukan produksi terbesar yang aman untuk semua $a$, lalu bandingkan dengan memakai $a=2{,}5$.",
      solution:[
        "Diketahui $x\\ge0$ unit dan kendala skenario $ax\\le9$ untuk setiap $a\\in[2,3]$. Karena $x\\ge0$, fungsi $a\\mapsto ax$ tidak menurun, sehingga skenario terberat adalah $a=3$. Syarat tangguh setara dengan $3x\\le9$, yaitu $x\\le3$.",
        "Jika hanya memakai nilai tengah $a=2{,}5$, batas nominal adalah $x\\le9/2{,}5=3{,}6$. Pada skenario $a=3$, keputusan nominal 3,6 membutuhkan $10{,}8$ jam, melebihi kapasitas 9 jam sebanyak 1,8 jam.",
        "Produksi maksimum tangguh adalah 3 unit; pemeriksaan $a(3)\\le3(3)=9$ berlaku untuk setiap $a\\in[2,3]$. Kelayakan nominal bukan bukti kelayakan semua skenario."
      ]
    },
    {
      title:"Contoh Interaksi yang Merusak Aditivitas",
      problem:"Uji apakah keluaran $h(x,y)=xy$ linear dan jelaskan konsekuensi bila $xy$ ditambahkan ke fungsi tujuan.",
      solution:[
        "Ambil $u=(1,0)$ dan $v=(0,1)$. Diperoleh $h(u)=0$ dan $h(v)=0$, tetapi $h(u+v)=h(1,1)=1$. Karena $1\\ne0+0$, aditivitas gagal; satu contoh tandingan cukup untuk menolak klaim linearitas universal.",
        "Interaksi $xy$ mengukur pengaruh gabungan kedua keputusan yang tidak dapat diperoleh dengan menjumlahkan kontribusi terpisah. Jika $x$ dan $y$ sama-sama variabel, fungsi tujuan yang mengandung $xy$ bukan fungsi linear.",
        "Jika $y=2$ merupakan parameter tetap, suku $xy=2x$ kembali linear terhadap variabel keputusan $x$. Status suatu simbol sebagai variabel atau parameter harus ditetapkan sebelum mengklasifikasikan model."
      ]
    },
    {
      title:"Contoh Matriks Penggunaan Sumber Daya",
      problem:"Dua produk memakai matriks sumber daya $A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$ dengan kapasitas $b=(10,12)^T$. Periksa keputusan $(3,2)$ dan $(4,3)$.",
      solution:[
        "Untuk $u=(3,2)^T$, perkalian matriks memberi $Au=(2\\cdot3+2,3+3\\cdot2)^T=(8,9)^T$. Kedua komponen tidak melebihi $(10,12)^T$, dan $u\\ge0$, sehingga $u$ layak.",
        "Untuk $v=(4,3)^T$, diperoleh $Av=(2\\cdot4+3,4+3\\cdot3)^T=(11,13)^T$. Komponen pertama melampaui kapasitas 10 sebesar 1, sedangkan komponen kedua melampaui 12 sebesar 1; keputusan tidak layak.",
        "Kedua baris $A$ mengukur jenis sumber daya berbeda. Perbandingan harus dilakukan per komponen, bukan hanya membandingkan jumlah keseluruhan jam."
      ]
    },
    {
      title:"Contoh Sertifikat Optimalitas dari Kendala",
      problem:"Maksimumkan $5x+4y$ dengan $x+y\\le3$, $2x+y\\le4$, $x,y\\ge0$. Temukan keputusan optimal tanpa mengandalkan gambar.",
      solution:[
        "Diketahui kedua kendala linear. Untuk setiap keputusan layak, kalikan kendala pertama dengan 3 dan kendala kedua dengan 1, lalu jumlahkan: $3(x+y)+(2x+y)\\le3(3)+4$. Ruas kiri tepat $5x+4y$, sehingga nilai tujuan tidak dapat melebihi 13.",
        "Untuk mencapai batas tersebut, kedua kendala harus aktif karena pengalinya positif. Selesaikan $x+y=3$ dan $2x+y=4$: pengurangan persamaan memberi $x=1$, lalu $y=2$. Keduanya taknegatif dan memenuhi semua kendala.",
        "Nilai tujuan pada $(1,2)$ adalah $5+8=13$, sama dengan batas atas. Jika titik lain juga mencapai 13, kedua kendala harus aktif dan sistem dua persamaan itu mempunyai solusi tunggal. Karena itu $(1,2)$ adalah pemaksimum global tunggal."
      ]
    },
    {
      title:"Contoh Kombinasi Konveks Keputusan Layak",
      problem:"Untuk $x+y\\le4$, $2x+y\\le6$, $x,y\\ge0$, periksa bahwa titik tengah $(2,0)$ dan $(0,3)$ layak serta bandingkan tujuan $3x+2y$.",
      solution:[
        "Kedua titik layak: $(2,0)$ memberi ruas kiri 2 dan 4; $(0,3)$ memberi 3 dan 3, semuanya di bawah kapasitas 4 dan 6. Titik tengahnya adalah $w=\\frac12(2,0)+\\frac12(0,3)=(1,3/2)$.",
        "Substitusi menghasilkan $1+3/2=5/2\\le4$ dan $2+3/2=7/2\\le6$, dengan komponen taknegatif. Ini sesuai teorema kekonveksan daerah layak.",
        "Nilai tujuan pada kedua ujung masing-masing 6 dan 6. Pada titik tengah, $3(1)+2(3/2)=6$, tepat kombinasi konveks kedua nilai ujung. Identitas ini tidak mengharuskan setiap titik layak menjadi optimum."
      ]
    }
  ],
  exercises:[
    {
      prompt:"LM-01. Buktikan $L(x,y)=3x-2y$ linear pada $\\mathbb R^2$ dan hitung $L(2,-1)$.",
      hint:"Periksa superposisi dengan empat simbol bebas, bukan hanya satu pasangan contoh.",
      answer:"Diketahui $L(x,y)=3x-2y$. Ambil sembarang $u=(u_1,u_2)$, $v=(v_1,v_2)$ dan skalar $\\alpha,\\beta$. Diperoleh $L(\\alpha u+\\beta v)=3(\\alpha u_1+\\beta v_1)-2(\\alpha u_2+\\beta v_2)=\\alpha(3u_1-2u_2)+\\beta(3v_1-2v_2)=\\alpha L(u)+\\beta L(v)$. Identitas ini berlaku untuk semua argumen sehingga linearitas terbukti. Untuk $(2,-1)$, $L(2,-1)=3(2)-2(-1)=8$. Pemeriksaan $L(0,0)=0$ konsisten dengan sifat linear, tetapi tidak dipakai sebagai satu-satunya bukti."
    },
    {
      prompt:"LM-02. Tentukan apakah $g(x)=4+3x$ linear atau afine. Jelaskan dampak konstanta 4 terhadap peminimum pada $0\\le x\\le5$.",
      hint:"Gunakan $g(0)$ untuk klasifikasi dan bandingkan selisih biaya.",
      answer:"Diketahui $g(0)=4\\ne0$. Jika $g$ linear, homogenitas pada skalar nol mengharuskan $g(0)=0$, sehingga $g$ bukan fungsi linear. Bentuk $g(x)=3x+4$ menunjukkan bahwa $g$ afine. Untuk setiap $x_1,x_2\\in[0,5]$, selisih $g(x_1)-g(x_2)=3(x_1-x_2)$; konstanta 4 hilang dalam perbandingan. Karena koefisien 3 positif, $g$ meningkat dan mencapai minimum di $x=0$, dengan nilai $g(0)=4$. Jika konstanta dihilangkan, peminimumnya tetap 0 tetapi nilai optimum berubah menjadi 0. Kesimpulan ini berlaku karena biaya 4 diasumsikan dibayar pada semua keputusan."
    },
    {
      prompt:"LM-03. Tunjukkan dengan contoh tandingan bahwa $h(x)=x^2$ bukan linear pada $\\mathbb R$; periksa juga homogenitas.",
      hint:"Pilih dua argumen sama dengan 1 dan skalar 2.",
      answer:"Untuk $u=v=1$, diperoleh $h(u+v)=h(2)=4$, sedangkan $h(u)+h(v)=1+1=2$. Karena aditivitas harus berlaku bagi semua pasangan, ketidaksamaan $4\\ne2$ sudah membuktikan $h$ tidak linear. Homogenitas juga gagal: $h(2\\cdot1)=4$, sedangkan $2h(1)=2$. Kedua pemeriksaan menggunakan definisi, bukan kesan bentuk kurva. Pada $x\\ge0$ fungsi ini dapat dipakai dalam optimisasi nonlinier, tetapi tidak dapat disebut fungsi tujuan linear hanya karena koefisiennya tetap."
    },
    {
      prompt:"LM-04. Untuk $A=\\begin{pmatrix}1&2\\\\3&1\\end{pmatrix}$ dan $b=(8,9)^T$, periksa kelayakan $u=(2,2)^T$ dan $v=(3,3)^T$.",
      hint:"Hitung kedua komponen $Au$ dan $Av$, lalu bandingkan dengan kapasitas yang sesuai.",
      answer:"Diketahui kendala $Ax\\le b$ dan $x\\ge0$. Untuk $u=(2,2)^T$, hasil kali matriks adalah $Au=(2+4,6+2)^T=(6,8)^T$. Karena $6\\le8$, $8\\le9$, dan $u\\ge0$, keputusan $u$ layak. Untuk $v=(3,3)^T$, diperoleh $Av=(3+6,9+3)^T=(9,12)^T$. Komponen pertama melampaui 8 sebanyak 1 dan komponen kedua melampaui 9 sebanyak 3. Walaupun $v\\ge0$, dua kendala sumber daya dilanggar, sehingga $v$ tidak layak. Pengujian per komponen diperlukan karena sumber daya pertama tidak dapat ditukar dengan sumber daya kedua."
    },
    {
      prompt:"LM-05. Buktikan kedua arah bahwa suatu titik $w=tu+(1-t)v$ dengan $0\\le t\\le1$ layak jika $u,v$ layak untuk $Ax\\le b$, $x\\ge0$; apakah pernyataan balik bahwa kelayakan $w$ memaksa kelayakan kedua ujung benar?",
      hint:"Arah pertama adalah kekonveksan; untuk kebalikan cari titik tengah layak dari satu titik taklayak.",
      answer:"Diketahui $Au\\le b$, $Av\\le b$, dan $u,v\\ge0$. Untuk $0\\le t\\le1$, kedua bobot taknegatif dan jumlahnya satu. Karena itu $A[tu+(1-t)v]=tAu+(1-t)Av\\le tb+(1-t)b=b$, sedangkan $tu+(1-t)v\\ge0$. Ini membuktikan arah maju: kombinasi konveks dua keputusan layak selalu layak. Pernyataan balik tidak berlaku. Ambil satu dimensi dengan $F=[0,2]$, yaitu $x\\le2$, $x\\ge0$; pilih $u=3$ (tidak layak), $v=1$ (layak), dan $t=1/2$. Titik tengah $w=2$ layak walaupun $u$ tidak layak. Pemeriksaan $3>2$, $1\\le2$, dan $2\\le2$ membantah implikasi balik. Karena itu teorema kekonveksan hanya menjamin arah dari kedua ujung layak menuju kombinasi layak."
    },
    {
      prompt:"LM-06. Maksimumkan $2x+3y$ pada $x+y\\le5$, $x+2y\\le8$, $x,y\\ge0$ dan berikan sertifikat optimum global.",
      hint:"Jumlahkan kedua kendala dengan pengali satu untuk memperoleh tepat fungsi tujuan.",
      answer:"Diketahui $x+y\\le5$ dan $x+2y\\le8$. Penjumlahan memberikan $2x+3y\\le13$ untuk setiap titik layak; ini batas atas global. Supaya batas 13 tercapai, kedua kendala harus aktif, karena setiap slack taknegatif dan jumlah slack harus nol. Selesaikan $x+y=5$ dan $x+2y=8$: pengurangan menghasilkan $y=3$, lalu $x=2$. Titik $(2,3)$ taknegatif, memenuhi $2+3=5$ dan $2+6=8$, dan mempunyai tujuan $2(2)+3(3)=13$. Karena batas atas tercapai, nilai optimum adalah 13. Sistem dua persamaan aktif memiliki solusi tunggal, sehingga titik optimum juga tunggal."
    },
    {
      prompt:"LM-07. Maksimumkan $3x$ dengan $4x\\le11$ dan $x\\ge0$; bandingkan solusi kontinu dan solusi $x\\in\\mathbb Z$.",
      hint:"Relaksasi memberi $x\\le11/4$; bandingkan dengan bilangan bulat terbesar yang memenuhi.",
      answer:"Diketahui $4x\\le11$, sehingga $0\\le x\\le11/4=2{,}75$. Pada model kontinu, koefisien tujuan 3 positif; maksimum tercapai di $x=11/4$ dengan nilai $3(11/4)=33/4=8{,}25$. Pada model bilangan bulat, nilai yang diizinkan adalah $x\\in\\{0,1,2\\}$, karena $x=3$ membutuhkan 12 unit sumber daya dan melampaui 11. Nilai tujuan terbesar ialah $3(2)=6$. Celah relaksasi pada nilai tujuan adalah $33/4-6=9/4=2{,}25$. Pembulatan solusi kontinu ke 3 tidak layak; pembulatan ke 2 kebetulan menghasilkan optimum bulat untuk model satu variabel ini, bukan aturan umum semua model."
    },
    {
      prompt:"LM-08. Modelkan biaya aktivasi 7 dan biaya produksi 2 per unit dengan kapasitas 5 unit. Gunakan keputusan produksi $x\\ge0$ dan variabel biner $y$. Hitung biaya pada $x=3$ serta bandingkan dengan relaksasi biner.",
      hint:"Tuliskan $0\\le x\\le5y$ dan $y\\in\\{0,1\\}$, lalu minimalkan $7y+2x$ untuk produksi yang ditentukan.",
      answer:"Diketahui biaya aktivasi dibayar hanya ketika fasilitas digunakan. Definisikan $y=1$ jika fasilitas aktif dan $y=0$ jika tidak. Kendala penghubung $0\\le x\\le5y$ memastikan $y=0$ memaksa $x=0$, sedangkan $y=1$ mengizinkan produksi sampai 5. Fungsi biaya $C=7y+2x$ linear terhadap pasangan variabel, tetapi syarat $y\\in\\{0,1\\}$ menjadikannya model campuran bilangan bulat, bukan LP kontinu murni. Untuk target $x=3$, kendala $3\\le5y$ dan kebineran memaksa $y=1$, sehingga biaya tepat $7+2(3)=13$. Jika $y$ direlaksasi ke $[0,1]$, syarat menjadi $y\\ge3/5$ dan biaya minimum pada $y=3/5$ adalah $7(3/5)+6=10{,}2$. Nilai 10,2 adalah batas bawah relaksasi, bukan biaya aktivasi nyata; keputusan $y=0{,}6$ tidak memenuhi arti operasional fasilitas aktif."
    }
  ],
  mistakes:[],
  connections:[]
};
