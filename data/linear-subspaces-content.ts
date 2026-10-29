import type { BookLessonContent } from "@/data/book-content-types";

/** Authored proof-based treatment of linear subspaces. References: Anton & Rorres (2014), Ch. 4; Axler (2015), Ch. 1. */
export const linearSubspacesContent:BookLessonContent = {
  "intro": [
    "Subruang adalah cara untuk mengenali struktur linear di dalam ruang yang lebih besar. Garis $y=2x$ dan bidang $x+y-z=0$ melalui titik asal dapat dijumlahkan dan dikalikan skalar tanpa meninggalkan himpunannya. Garis $y=2x+1$ tampak serupa secara geometris, tetapi tidak memuat vektor nol; perbedaan satu konstanta ini menentukan apakah suatu himpunan benar-benar subruang.",
    "Untuk membuktikan suatu himpunan subruang, kita tidak perlu memeriksa ulang seluruh aksioma ruang vektor. Semua sifat yang melibatkan tiga atau lebih operasi diwarisi dari ruang induk; cukup tunjukkan himpunan tidak kosong serta tertutup terhadap kombinasi linear $au+bv$. Sebaliknya, untuk membuktikan bukan subruang, satu kontra-contoh terhadap salah satu syarat sudah cukup.",
    "Dua konstruksi utama adalah rentang (span), yang membangun subruang dari vektor pembangkit, dan kernel, yang menghasilkan subruang dari persamaan linear homogen. Sistem takhomogen $Ax=b$ yang konsisten membentuk translasi kernel, bukan subruang kecuali $b=0$. Perbedaan ini penting untuk memahami geometri sistem linear dan kelak rank–nullity.",
    "Visualisasi pada halaman ini membandingkan garis melalui asal, garis bergeser, bidang koordinat, dan gabungan dua sumbu. Titik dan vektor yang digambar hanya membantu intuisi; pembuktian tetap menggunakan kuantor dan ketertutupan bagi semua skalar. Bacaan: Anton & Rorres, Elementary Linear Algebra, edisi ke-11 (2014), Bab 4; Axler, Linear Algebra Done Right, edisi ke-3 (2015), Bab 1."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Ruang Vektor atas Lapangan",
      "statement": "Misalkan $F$ suatu lapangan. Ruang vektor atas $F$ ialah himpunan takkosong $V$ dengan penjumlahan $+:V\\times V\\to V$ dan perkalian skalar $F\\times V\\to V$ yang memenuhi: penjumlahan asosiatif dan komutatif; terdapat vektor nol $0_V$; setiap $v$ mempunyai invers aditif $-v$; serta, untuk semua $a,b\\in F$ dan $u,v\\in V$, berlaku $a(u+v)=au+av$, $(a+b)v=av+bv$, $a(bv)=(ab)v$, dan $1_Fv=v$. Penjumlahan dan perkalian skalar harus tertutup dalam $V$.",
      "explanation": "Periksa terlebih dahulu himpunan dan operasi yang digunakan. Syarat aljabar selalu berlaku terhadap semua unsur dan semua skalar, bukan hanya satu contoh numerik."
    },
    {
      "kind": "definition",
      "title": "Subruang Vektor",
      "statement": "Diberikan ruang vektor $V$ atas lapangan $F$. Himpunan $W\\subseteq V$ disebut subruang dari $V$ jika $W$ sendiri merupakan ruang vektor atas $F$ dengan operasi yang dibatasi dari $V$. Khususnya, subruang wajib mengandung $0_V$ dan tertutup terhadap penjumlahan serta perkalian skalar.",
      "explanation": "Periksa terlebih dahulu himpunan dan operasi yang digunakan. Syarat aljabar selalu berlaku terhadap semua unsur dan semua skalar, bukan hanya satu contoh numerik."
    },
    {
      "kind": "definition",
      "title": "Kombinasi Linear dan Rentang (Span)",
      "statement": "Untuk $v_1,\\ldots,v_k\\in V$, kombinasi linear ialah vektor $a_1v_1+\\cdots+a_kv_k$ dengan $a_i\\in F$. Rentang himpunan $S\\subseteq V$ didefinisikan sebagai himpunan semua kombinasi linear hingga unsur-unsur $S$, ditulis $\\operatorname{span}(S)$. Secara khusus, $\\operatorname{span}(\\varnothing)=\\{0_V\\}$.",
      "explanation": "Periksa terlebih dahulu himpunan dan operasi yang digunakan. Syarat aljabar selalu berlaku terhadap semua unsur dan semua skalar, bukan hanya satu contoh numerik."
    },
    {
      "kind": "definition",
      "title": "Kernel Transformasi Linear",
      "statement": "Misalkan $T:V\\to U$ transformasi linear antara ruang vektor atas lapangan yang sama $F$, yaitu $T(av+bw)=aT(v)+bT(w)$. Kernel $T$ ialah $\\ker T=\\{v\\in V:T(v)=0_U\\}$. Untuk matriks $A\\in F^{m\\times n}$, kernel transformasi $x\\mapsto Ax$ adalah ruang solusi sistem homogen $Ax=0$.",
      "explanation": "Periksa terlebih dahulu himpunan dan operasi yang digunakan. Syarat aljabar selalu berlaku terhadap semua unsur dan semua skalar, bukan hanya satu contoh numerik."
    },
    {
      "kind": "theorem",
      "title": "Uji Subruang melalui Kombinasi Linear",
      "statement": "Misalkan $V$ ruang vektor atas lapangan $F$ dan $W\\subseteq V$ takkosong. Maka $W$ subruang jika dan hanya jika $au+bv\\in W$ untuk semua $u,v\\in W$ dan semua $a,b\\in F$.",
      "proof": [
        "$(\\Rightarrow)$ Andaikan $W$ subruang. Karena $W$ tertutup terhadap perkalian skalar, $au,bv\\in W$ untuk setiap $a,b\\in F$ dan $u,v\\in W$. Ketertutupan penjumlahan memberi $au+bv\\in W$.",
        "$(\\Leftarrow)$ Andaikan $W$ takkosong dan tertutup terhadap semua kombinasi $au+bv$. Pilih $w\\in W$. Dengan $a=b=0$ dan $u=v=w$, diperoleh $0_V=0w+0w\\in W$.",
        "Untuk $u,v\\in W$, ambil $a=b=1$ sehingga $u+v\\in W$. Untuk $a\\in F$ dan $u\\in W$, pilih $v=0_V$ dan $b=0$ sehingga $au\\in W$. Pilih $a=-1$ untuk memperoleh $-u\\in W$.",
        "Seluruh aksioma lainnya diwarisi dari $V$ karena kedua operasi pada $W$ hanyalah pembatasan operasi $V$. Jadi $W$ subruang. Kedua arah telah terbukti."
      ],
      "explanation": "Syarat takkosong esensial; himpunan kosong memenuhi implikasi ketertutupan secara vakum tetapi bukan ruang vektor."
    },
    {
      "kind": "proposition",
      "title": "Irisan Subruang",
      "statement": "Jika $\\{W_i:i\\in I\\}$ keluarga subruang dari $V$ dengan $I\\ne\\varnothing$, maka $\\bigcap_{i\\in I}W_i$ merupakan subruang dari $V$.",
      "proof": [
        "Karena setiap $W_i$ subruang, $0_V\\in W_i$ untuk setiap $i\\in I$. Dengan demikian $0_V\\in\\bigcap_{i\\in I}W_i$, sehingga irisannya takkosong.",
        "Ambil $u,v\\in\\bigcap_{i\\in I}W_i$ dan $a,b\\in F$. Artinya $u,v\\in W_i$ untuk setiap indeks $i$.",
        "Menurut uji subruang, $au+bv\\in W_i$ untuk setiap $i\\in I$. Maka $au+bv\\in\\bigcap_{i\\in I}W_i$.",
        "Himpunan irisan takkosong dan tertutup terhadap kombinasi linear. Dengan teorema uji subruang, irisannya merupakan subruang."
      ],
      "explanation": "Irisan dua garis berbeda yang melalui asal di bidang biasanya hanya vektor nol, dan himpunan nol tetap subruang."
    },
    {
      "kind": "theorem",
      "title": "Span adalah Subruang Terkecil",
      "statement": "Untuk setiap $S\\subseteq V$, himpunan $\\operatorname{span}(S)$ adalah subruang dari $V$ yang memuat $S$. Jika $W$ subruang dan $S\\subseteq W$, maka $\\operatorname{span}(S)\\subseteq W$.",
      "proof": [
        "Vektor nol merupakan kombinasi linear kosong, sehingga $0_V\\in\\operatorname{span}(S)$. Setiap $s\\in S$ adalah kombinasi linear satu suku $1s$, sehingga $S\\subseteq\\operatorname{span}(S)$.",
        "Ambil $u=\\sum_{i=1}^k a_is_i$ dan $v=\\sum_{j=1}^{\\ell}b_jt_j$ dalam $\\operatorname{span}(S)$. Untuk $\\alpha,\\beta\\in F$, diperoleh $\\alpha u+\\beta v=\\sum_{i=1}^k(\\alpha a_i)s_i+\\sum_{j=1}^{\\ell}(\\beta b_j)t_j$.",
        "Ruas kanan masih merupakan kombinasi linear hingga unsur $S$. Jadi $\\operatorname{span}(S)$ tertutup terhadap kombinasi linear dan, berdasarkan uji subruang, merupakan subruang.",
        "Sekarang andaikan $W$ subruang yang memuat $S$. Karena $W$ tertutup terhadap penjumlahan dan perkalian skalar, setiap kombinasi linear hingga unsur $S$ berada di $W$. Oleh sebab itu $\\operatorname{span}(S)\\subseteq W$."
      ],
      "explanation": "Kata 'terkecil' bermakna inklusi himpunan, bukan jumlah vektor paling sedikit."
    },
    {
      "kind": "proposition",
      "title": "Kernel Transformasi Linear adalah Subruang",
      "statement": "Jika $T:V\\to U$ linear, maka $\\ker T$ subruang dari $V$. Khususnya, himpunan solusi sistem homogen $Ax=0$ merupakan subruang dari $F^n$.",
      "proof": [
        "Linearitas memberikan $T(0_V)=T(0_V+0_V)=T(0_V)+T(0_V)$. Dengan mengurangkan $T(0_V)$ pada kedua ruas di $U$, diperoleh $T(0_V)=0_U$. Jadi $0_V\\in\\ker T$.",
        "Ambil $u,v\\in\\ker T$ dan $a,b\\in F$. Berdasarkan definisi kernel, $T(u)=T(v)=0_U$.",
        "Karena $T$ linear, $T(au+bv)=aT(u)+bT(v)=a0_U+b0_U=0_U$. Dengan demikian $au+bv\\in\\ker T$.",
        "Kernel takkosong dan tertutup terhadap kombinasi linear, sehingga merupakan subruang menurut uji subruang. Untuk $T(x)=Ax$, persamaan $T(x)=0$ sama persis dengan $Ax=0$."
      ],
      "explanation": "Sistem takhomogen $Ax=b$ dengan $b\\ne0$ tidak mempunyai himpunan solusi yang merupakan subruang, walaupun mungkin memiliki banyak solusi."
    },
    {
      "kind": "theorem",
      "title": "Himpunan Solusi Sistem Takhomogen adalah Translasi Kernel",
      "statement": "Misalkan $A\\in F^{m\\times n}$ dan sistem $Ax=b$ konsisten dengan satu solusi $x_0$. Maka $\\{x\\in F^n:Ax=b\\}=x_0+\\ker A=\\{x_0+v:v\\in\\ker A\\}$.",
      "proof": [
        "Ambil sebarang solusi $x$ dengan $Ax=b$. Karena $Ax_0=b$, linearitas perkalian matriks memberikan $A(x-x_0)=Ax-Ax_0=b-b=0$.",
        "Dengan demikian $x-x_0\\in\\ker A$. Tuliskan $v=x-x_0$ sehingga $x=x_0+v$. Ini membuktikan bahwa setiap solusi berada di $x_0+\\ker A$.",
        "Sebaliknya, ambil $x=x_0+v$ dengan $v\\in\\ker A$. Maka $Ax=Ax_0+Av=b+0=b$, sehingga $x$ solusi sistem.",
        "Kedua inklusi berlaku, jadi himpunan solusi tepat sama dengan $x_0+\\ker A$. Jika $b\\ne0$, titik asal bukan solusi karena $A0=0\\ne b$."
      ],
      "explanation": "Translasi sebuah subruang menghasilkan himpunan afin; ini menjelaskan secara geometris garis atau bidang solusi yang tidak melewati asal."
    },
    {
      "kind": "proposition",
      "title": "Jumlah Dua Subruang",
      "statement": "Jika $U,W$ subruang dari $V$, maka $U+W=\\{u+w:u\\in U,\\ w\\in W\\}$ merupakan subruang dari $V$ dan merupakan subruang terkecil yang memuat $U\\cup W$.",
      "proof": [
        "Karena $0_V\\in U$ dan $0_V\\in W$, diperoleh $0_V=0_V+0_V\\in U+W$. Jadi $U+W$ takkosong.",
        "Ambil $x=u_1+w_1$ dan $y=u_2+w_2$ dari $U+W$, serta $a,b\\in F$.",
        "Dengan sifat ruang vektor, $ax+by=(au_1+bu_2)+(aw_1+bw_2)$. Ketertutupan $U$ dan $W$ memberi $au_1+bu_2\\in U$ serta $aw_1+bw_2\\in W$. Jadi $ax+by\\in U+W$.",
        "Untuk setiap $u\\in U$, berlaku $u=u+0_V\\in U+W$; serupa $W\\subseteq U+W$. Jika $Z$ subruang memuat $U\\cup W$, maka $u+w\\in Z$ untuk setiap $u\\in U,w\\in W$. Jadi $U+W\\subseteq Z$, membuktikan sifat terkecil."
      ],
      "explanation": "Penjumlahan subruang tidak sama dengan gabungan himpunan. Dua garis berbeda melalui asal menghasilkan seluruh bidang sebagai jumlah."
    },
    {
      "kind": "theorem",
      "title": "Gabungan Dua Subruang",
      "statement": "Untuk dua subruang $U,W$ dari ruang vektor $V$, gabungan $U\\cup W$ merupakan subruang jika dan hanya jika $U\\subseteq W$ atau $W\\subseteq U$.",
      "proof": [
        "$(\\Leftarrow)$ Jika $U\\subseteq W$, maka $U\\cup W=W$ yang merupakan subruang. Jika $W\\subseteq U$, maka $U\\cup W=U$ juga subruang.",
        "$(\\Rightarrow)$ Andaikan $U\\cup W$ subruang, tetapi tidak berlaku $U\\subseteq W$ maupun $W\\subseteq U$. Pilih $u\\in U\\setminus W$ dan $w\\in W\\setminus U$.",
        "Karena $u,w\\in U\\cup W$ dan gabungan diasumsikan subruang, vektor $u+w$ berada di $U\\cup W$.",
        "Jika $u+w\\in U$, maka $w=(u+w)-u\\in U$, bertentangan dengan $w\\notin U$. Jika $u+w\\in W$, maka $u=(u+w)-w\\in W$, bertentangan dengan $u\\notin W$.",
        "Kedua kemungkinan mustahil, sehingga asumsi bahwa kedua inklusi gagal adalah salah. Jadi $U\\subseteq W$ atau $W\\subseteq U$. Kedua arah terbukti."
      ],
      "explanation": "Dua sumbu koordinat bukan subruang bila digabungkan: jumlah $(1,0)+(0,1)=(1,1)$ tidak berada pada salah satu sumbu."
    }
  ],
  "examples": [
    {
      "title": "Contoh Definisi 1: Ruang Vektor atas Lapangan",
      "forDefinition": "Ruang Vektor atas Lapangan",
      "problem": "Periksa secara langsung aksioma ruang vektor untuk operasi biasa pada pasangan bilangan real.",
      "solution": [
        "Periksa $V=\\mathbb R^2$ dengan operasi biasa. Untuk $u=(1,2)$, $v=(-2,3)$, dan $a=2$, diperoleh $u+v=(-1,5)\\in V$ serta $au=(2,4)\\in V$. Vektor nol $(0,0)$ dan invers $(-1,-2)$ berada di $V$. Identitas distributif dapat diperiksa per koordinat, misalnya $2(u+v)=(-2,10)=2u+2v$. Semua aksioma lain mengikuti sifat bilangan real; jadi $\\mathbb R^2$ merupakan ruang vektor.",
        "Pemeriksaan dilakukan pada seluruh unsur yang dinyatakan secara parametrik, bukan hanya pada satu pilihan vektor. Karena bentuk parametrik mencakup semua unsur himpunan, kesimpulan berlaku umum.",
        "Perhatikan bahwa persamaan yang menentukan himpunan harus dipenuhi setelah penjumlahan dan perkalian skalar. Kehadiran vektor nol membedakan ruang linear dari himpunan afin."
      ]
    },
    {
      "title": "Contoh Definisi 2: Subruang Vektor",
      "forDefinition": "Subruang Vektor",
      "problem": "Tentukan apakah garis melalui asal dan garis bergeser merupakan subruang di bidang.",
      "solution": [
        "Ambil $W=\\{(x,y)\\in\\mathbb R^2:y=2x\\}$. Karena setiap unsur berbentuk $(t,2t)$, penjumlahan $(s,2s)+(t,2t)=(s+t,2(s+t))$ dan perkalian $a(t,2t)=(at,2at)$ tetap berada di $W$. Pilihan $t=0$ menghasilkan $(0,0)$. Maka $W$ subruang. Sebaliknya, $L=\\{(x,y):y=2x+1\\}$ bukan subruang karena $(0,0)\\notin L$.",
        "Pemeriksaan dilakukan pada seluruh unsur yang dinyatakan secara parametrik, bukan hanya pada satu pilihan vektor. Karena bentuk parametrik mencakup semua unsur himpunan, kesimpulan berlaku umum.",
        "Perhatikan bahwa persamaan yang menentukan himpunan harus dipenuhi setelah penjumlahan dan perkalian skalar. Kehadiran vektor nol membedakan ruang linear dari himpunan afin."
      ]
    },
    {
      "title": "Contoh Definisi 3: Kombinasi Linear dan Rentang (Span)",
      "forDefinition": "Kombinasi Linear dan Rentang (Span)",
      "problem": "Tentukan bentuk eksplisit rentang dua vektor di ruang tiga dimensi.",
      "solution": [
        "Di $\\mathbb R^3$, ambil $v_1=(1,0,1)$ dan $v_2=(0,1,1)$. Setiap kombinasi linear $av_1+bv_2=(a,b,a+b)$, sehingga $\\operatorname{span}\\{v_1,v_2\\}=\\{(x,y,z):z=x+y\\}$. Vektor $(2,-1,1)$ berada dalam rentang karena $2v_1-v_2=(2,-1,1)$; sedangkan $(1,1,0)$ tidak, sebab $0\\ne1+1$.",
        "Pemeriksaan dilakukan pada seluruh unsur yang dinyatakan secara parametrik, bukan hanya pada satu pilihan vektor. Karena bentuk parametrik mencakup semua unsur himpunan, kesimpulan berlaku umum.",
        "Perhatikan bahwa persamaan yang menentukan himpunan harus dipenuhi setelah penjumlahan dan perkalian skalar. Kehadiran vektor nol membedakan ruang linear dari himpunan afin."
      ]
    },
    {
      "title": "Contoh Definisi 4: Kernel Transformasi Linear",
      "forDefinition": "Kernel Transformasi Linear",
      "problem": "Tentukan kernel suatu fungsi linear tiga variabel.",
      "solution": [
        "Definisikan $T:\\mathbb R^3\\to\\mathbb R$ dengan $T(x,y,z)=x+y-z$. Pemetaan ini linear karena $T(au+bv)=aT(u)+bT(v)$ diperoleh dari distributivitas tiap koordinat. Maka $\\ker T=\\{(x,y,z):z=x+y\\}$, bidang melalui titik asal. Sebagai pemeriksaan, $T(1,2,3)=0$, sedangkan $T(1,2,0)=3\\ne0$.",
        "Pemeriksaan dilakukan pada seluruh unsur yang dinyatakan secara parametrik, bukan hanya pada satu pilihan vektor. Karena bentuk parametrik mencakup semua unsur himpunan, kesimpulan berlaku umum.",
        "Perhatikan bahwa persamaan yang menentukan himpunan harus dipenuhi setelah penjumlahan dan perkalian skalar. Kehadiran vektor nol membedakan ruang linear dari himpunan afin."
      ]
    },
    {
      "title": "Garis Solusi Homogen dan Takhomogen",
      "problem": "Bandingkan $x+2y=0$ dengan $x+2y=3$ sebagai himpunan bagian $\\mathbb R^2$.",
      "solution": [
        "Sistem homogen memiliki solusi $(x,y)=(-2t,t)$ untuk setiap $t\\in\\mathbb R$. Karena sama dengan $\\operatorname{span}\\{(-2,1)\\}$, himpunannya subruang.",
        "Untuk persamaan takhomogen, pilih solusi khusus $(3,0)$. Setiap solusi lain berbentuk $(3,0)+(-2t,t)=(3-2t,t)$.",
        "Karena $(0,0)$ tidak memenuhi $x+2y=3$, himpunan kedua bukan subruang. Secara geometris kedua garis sejajar, tetapi hanya yang pertama melalui titik asal."
      ]
    },
    {
      "title": "Irisan dan Jumlah Dua Garis",
      "problem": "Di $\\mathbb R^2$, misalkan $U=\\operatorname{span}\\{(1,0)\\}$ dan $W=\\operatorname{span}\\{(1,1)\\}$. Tentukan $U\\cap W$ dan $U+W$.",
      "solution": [
        "Jika $(a,0)=(b,b)$, koordinat kedua memberi $b=0$, kemudian $a=0$. Maka $U\\cap W=\\{(0,0)\\}$.",
        "Setiap $(x,y)$ dapat ditulis $(x-y,0)+(y,y)$ dengan suku pertama di $U$ dan suku kedua di $W$. Jadi $\\mathbb R^2\\subseteq U+W$.",
        "Karena $U+W$ terdiri atas vektor $\\mathbb R^2$, berlaku $U+W=\\mathbb R^2$. Ini juga menunjukkan bahwa gabungan $U\\cup W$ bukan subruang."
      ]
    },
    {
      "title": "Subruang Polinomial",
      "problem": "Misalkan $P_2$ ruang polinomial real berderajat paling tinggi dua. Tentukan apakah $W=\\{p\\in P_2:p(1)=0\\}$ merupakan subruang, lalu berikan bentuk umumnya.",
      "solution": [
        "Polinomial nol memenuhi $p(1)=0$. Jika $p(1)=q(1)=0$, maka $(ap+bq)(1)=ap(1)+bq(1)=0$ untuk setiap $a,b\\in\\mathbb R$. Jadi $W$ subruang.",
        "Tuliskan $p(x)=c_0+c_1x+c_2x^2$. Syarat $p(1)=0$ berarti $c_0=-c_1-c_2$. Maka $p(x)=c_1(x-1)+c_2(x^2-1)$.",
        "Dengan demikian $W=\\operatorname{span}\\{x-1,x^2-1\\}$. Kedua polinomial bebas linear karena koefisien $x$ dan $x^2$ harus nol bila kombinasinya polinomial nol."
      ]
    },
    {
      "title": "Kontra-contoh Ketertutupan",
      "problem": "Periksa $C=\\{(x,y)\\in\\mathbb R^2:x\\ge0,\\ y\\ge0\\}$ dan $H=\\{(x,y):xy=0\\}$ terhadap uji subruang.",
      "solution": [
        "Himpunan $C$ memuat $(1,0)$, tetapi perkalian dengan skalar $-1$ menghasilkan $(-1,0)\\notin C$. Jadi $C$ bukan subruang walaupun memuat nol dan tertutup terhadap penjumlahan.",
        "Himpunan $H$ memuat $(1,0)$ dan $(0,1)$, tetapi jumlah keduanya $(1,1)$ mempunyai hasil kali koordinat $1\\ne0$, sehingga tidak berada di $H$.",
        "Kegagalan satu aksioma saja cukup untuk membantah status subruang. Tidak perlu menguji semua aksioma setelah ditemukan kontra-contoh yang sah."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "Tentukan apakah $W=\\{(x,y,z)\\in\\mathbb R^3:x-2y+z=0\\}$ subruang, dan nyatakan sebagai span.",
      "hint": "Gunakan parameter $y=s$ dan $z=t$; kemudian periksa ketertutupan dengan bentuk persamaan homogen.",
      "answer": "Misalkan $L(x,y,z)=x-2y+z$. Fungsi $L$ linear, sehingga $W=\\ker L$ adalah subruang. Secara langsung, $L(0,0,0)=0$ dan untuk $u,v\\in W$, $L(au+bv)=aL(u)+bL(v)=0$. Untuk memperoleh span, ambil $y=s$, $z=t$. Persamaan memberi $x=2s-t$, sehingga $(x,y,z)=s(2,1,0)+t(-1,0,1)$. Jadi $W=\\operatorname{span}\\{(2,1,0),(-1,0,1)\\}$. Kedua vektor itu memang memenuhi persamaan semula.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa $W=\\{f\\in C[0,1]:f(0)=f(1)\\}$ subruang dari ruang fungsi kontinu real pada $[0,1]$.",
      "hint": "Gunakan linearitas evaluasi pada titik $0$ dan $1$.",
      "answer": "Fungsi nol kontinu dan memenuhi $0(0)=0(1)$, sehingga $W$ takkosong. Ambil $f,g\\in W$ dan $a,b\\in\\mathbb R$. Karena kombinasi linear fungsi kontinu tetap kontinu, $h=af+bg\\in C[0,1]$. Selain itu, $h(0)=af(0)+bg(0)=af(1)+bg(1)=h(1)$. Maka $h\\in W$. Dengan uji subruang, $W$ merupakan subruang. Contohnya $f(x)=x(1-x)$ termasuk $W$, tetapi $g(x)=x$ tidak karena $g(0)\\ne g(1)$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Tentukan apakah $S=\\{(x,y)\\in\\mathbb R^2:x+y=1\\}$ subruang. Nyatakan $S$ sebagai translasi subruang.",
      "hint": "Cari satu solusi khusus dan kernel bentuk linear $x+y$.",
      "answer": "Titik asal $(0,0)$ tidak memenuhi $x+y=1$, sehingga $S$ bukan subruang. Ambil solusi khusus $p=(1,0)$. Kernel bentuk linear $L(x,y)=x+y$ ialah $K=\\{(t,-t):t\\in\\mathbb R\\}=\\operatorname{span}\\{(1,-1)\\}$. Untuk setiap $(x,y)\\in S$, berlaku $(x,y)-p=(x-1,y)$ dan $(x-1)+y=0$, sehingga $(x,y)-p\\in K$. Sebaliknya, setiap $p+(t,-t)=(1+t,-t)$ memenuhi jumlah koordinat $1$. Jadi $S=p+K$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa gabungan sumbu-$x$ dan sumbu-$y$ bukan subruang $\\mathbb R^2$, meskipun kedua sumbu merupakan subruang.",
      "hint": "Periksa ketertutupan terhadap penjumlahan dua vektor yang dipilih dari sumbu berbeda.",
      "answer": "Definisikan $U=\\{(t,0):t\\in\\mathbb R\\}$ dan $W=\\{(0,s):s\\in\\mathbb R\\}$. Masing-masing subruang karena mengandung nol dan tertutup terhadap kombinasi linear. Vektor $u=(1,0)\\in U$ dan $w=(0,1)\\in W$ keduanya berada di $U\\cup W$. Akan tetapi $u+w=(1,1)$ tidak berada di $U$ maupun $W$, sebab kedua koordinatnya tidak nol. Jadi $U\\cup W$ tidak tertutup terhadap penjumlahan dan bukan subruang. Sebaliknya, $U+W=\\mathbb R^2$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Diberikan $A=\\begin{pmatrix}1&1&-1\\\\2&2&-2\\end{pmatrix}$. Tentukan $\\ker A$ dan buktikan bahwa hasilnya subruang.",
      "hint": "Baris kedua merupakan kelipatan baris pertama; parametrisasikan solusi homogen.",
      "answer": "Persamaan $Ax=0$ ekuivalen dengan $x_1+x_2-x_3=0$ karena baris kedua hanya dua kali baris pertama. Ambil $x_1=s$ dan $x_2=t$, maka $x_3=s+t$. Jadi $\\ker A=\\{(s,t,s+t):s,t\\in\\mathbb R\\}=\\operatorname{span}\\{(1,0,1),(0,1,1)\\}$. Karena span selalu subruang, kernel ini subruang. Dapat juga diperiksa langsung: $A(au+bv)=aAu+bAv=0$ bagi $u,v\\in\\ker A$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Di $\\mathbb R^3$, misalkan $U=\\{(x,y,0):x,y\\in\\mathbb R\\}$ dan $W=\\{(0,y,z):y,z\\in\\mathbb R\\}$. Tentukan $U\\cap W$ dan $U+W$.",
      "hint": "Samakan bentuk umum unsur kedua himpunan, lalu pecah sembarang vektor sebagai jumlah dua unsur.",
      "answer": "Vektor yang sekaligus berbentuk $(x,y,0)$ dan $(0,y',z)$ harus mempunyai koordinat pertama dan ketiga nol. Maka $U\\cap W=\\{(0,t,0):t\\in\\mathbb R\\}$. Untuk sembarang $(a,b,c)\\in\\mathbb R^3$, tuliskan $(a,b,c)=(a,b,0)+(0,0,c)$; suku pertama berada di $U$, suku kedua berada di $W$. Karena setiap vektor dapat ditulis demikian, $U+W=\\mathbb R^3$. Perhatikan bahwa irisan dan jumlah sama-sama subruang tetapi dimensinya berbeda.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Misalkan $T:P_2\\to\\mathbb R$ didefinisikan oleh $T(p)=p(1)$. Tentukan $\\ker T$ dan apakah $S=\\{p\\in P_2:p(1)=2\\}$ subruang.",
      "hint": "Gunakan polinomial khusus konstan $2$ dan teorema translasi kernel.",
      "answer": "Untuk $p(x)=a+bx+cx^2$, berlaku $T(p)=a+b+c$. Kernel adalah $a+b+c=0$, sehingga $p(x)=b(x-1)+c(x^2-1)$ dan $\\ker T=\\operatorname{span}\\{x-1,x^2-1\\}$. Himpunan $S$ tidak memuat polinomial nol karena $0(1)=0\\ne2$. Namun polinomial konstan $p_0(x)=2$ berada di $S$, dan setiap unsur $S$ berbentuk $p_0+q$ dengan $q(1)=0$. Jadi $S=2+\\ker T$, suatu translasi afin, bukan subruang.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa jika $S\\subseteq T\\subseteq V$, maka $\\operatorname{span}(S)\\subseteq\\operatorname{span}(T)$; kemudian buktikan $\\operatorname{span}(\\operatorname{span}(S))=\\operatorname{span}(S)$.",
      "hint": "Gunakan definisi kombinasi linear hingga dan sifat minimal span sebagai subruang.",
      "answer": "Ambil $v\\in\\operatorname{span}(S)$. Maka $v=\\sum_{i=1}^k a_is_i$ dengan $s_i\\in S$. Karena $S\\subseteq T$, setiap $s_i$ juga anggota $T$, sehingga $v\\in\\operatorname{span}(T)$. Jadi inklusi pertama terbukti. Selanjutnya $S\\subseteq\\operatorname{span}(S)$, sehingga monotonisitas memberi $\\operatorname{span}(S)\\subseteq\\operatorname{span}(\\operatorname{span}(S))$. Sebaliknya, $\\operatorname{span}(S)$ sudah merupakan subruang, maka setiap kombinasi linear hingga unsurnya tetap di $\\operatorname{span}(S)$. Ini membuktikan inklusi sebaliknya dan karenanya kesamaan kedua span.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
