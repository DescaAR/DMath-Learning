import type { BookExercise, BookFormalItem } from "@/data/book-content-types";

export type LessonEnrichment = {intro:string[];formal:BookFormalItem[];exercises:BookExercise[]};
/** Authored statements and full solutions; no templates or automatic fabricated claims. */
export const academicEnrichment:Record<string,LessonEnrichment> = {
  "tup-classes-sets": {
    "intro": [
      "Operasi selisih himpunan dapat diturunkan hanya dari aksioma ketertutupan sigma-algebra terhadap komplemen dan gabungan. Karena itu, pembuktian ketertutupan terhadap operasi lain tidak memerlukan aksioma tambahan."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Sigma-Algebra Tertutup terhadap Selisih Dua Himpunan",
        "statement": "Jika $\\mathcal A$ sigma-algebra pada $X$ dan $A,B\\in\\mathcal A$, maka $A\\setminus B\\in\\mathcal A$.",
        "proof": [
          "Diketahui $A,B\\in\\mathcal A$. Ketertutupan terhadap komplemen memberikan $B^c\\in\\mathcal A$.",
          "Menurut hukum De Morgan, $A\\cap B^c=(A^c\\cup B)^{c}$. Karena $A^c,B\\in\\mathcal A$, gabungannya terukur, dan komplemennya juga terukur.",
          "Diperoleh $A\\setminus B=A\\cap B^c\\in\\mathcal A$, sehingga sigma-algebra tertutup terhadap selisih dua himpunan."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk $\\mathcal A=\\{\\varnothing,\\{1\\},\\{2,3\\},X\\}$ pada $X=\\{1,2,3\\}$, hitung $\\{1\\}\\setminus\\{2,3\\}$ dan $X\\setminus\\{1\\}$; periksa keanggotaannya dalam $\\mathcal A$.",
        "hint": "Gunakan operasi selisih sebagai irisan dengan komplemen.",
        "answer": "Diperoleh $\\{1\\}\\setminus\\{2,3\\}=\\{1\\}\\in\\mathcal A$. Selain itu, $X\\setminus\\{1\\}=\\{2,3\\}\\in\\mathcal A$. Kedua hasil sesuai sifat ketertutupan sigma-algebra terhadap selisih.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-measures": {
    "intro": [
      "Monotonisitas ukuran bukan aksioma independen: sifat tersebut mengikuti aditivitas dan nonnegativitas. Fakta ini tetap benar walaupun salah satu ukuran bernilai tak hingga."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Monotonisitas Ukuran",
        "statement": "Jika $A,B\\in\\mathcal A$ dan $A\\subseteq B$, maka $\\mu(A)\\le\\mu(B)$ untuk setiap ukuran $\\mu$ pada $(X,\\mathcal A)$.",
        "proof": [
          "Karena $A\\subseteq B$, berlaku dekomposisi saling lepas $B=A\\cup(B\\setminus A)$. Kedua himpunan pada ruas kanan terukur.",
          "Aditivitas ukuran pada dua himpunan saling lepas memberi $\\mu(B)=\\mu(A)+\\mu(B\\setminus A)$.",
          "Dari nonnegativitas $\\mu(B\\setminus A)\\ge0$, diperoleh $\\mu(B)\\ge\\mu(A)$, termasuk apabila ukuran bernilai tak hingga."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk ukuran pembobotan $\\mu(A)=\\sum_{x\\in A}w(x)$ pada $\\{a,b,c\\}$ dengan bobot $2,1,3$, bandingkan $\\mu(\\{a\\})$ dan $\\mu(\\{a,c\\})$.",
        "hint": "Gunakan inklusi himpunan dan hitung jumlah bobot.",
        "answer": "Karena $\\{a\\}\\subseteq\\{a,c\\}$, monotonisitas memberi $\\mu(\\{a\\})\\le\\mu(\\{a,c\\})$. Perhitungan langsung menghasilkan $2\\le5$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-measurable-functions": {
    "intro": [
      "Fungsi indikator menjadi jembatan paling sederhana antara teori himpunan terukur dan teori fungsi. Keterukuran himpunan dapat diuji hanya melalui keterukuran indikatornya."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Keterukuran Indikator",
        "statement": "Untuk $A\\subseteq X$ pada ruang terukur $(X,\\mathcal A)$, fungsi indikator $\\mathbf1_A:X\\to\\mathbb R$ terukur jika dan hanya jika $A\\in\\mathcal A$.",
        "proof": [
          "(⇒) Misalkan $\\mathbf1_A$ terukur. Karena $A=\\{x:\\mathbf1_A(x)>1/2\\}$, pracitra sinar Borel $(1/2,\\infty)$ terukur, sehingga $A\\in\\mathcal A$.",
          "(⇐) Misalkan $A\\in\\mathcal A$. Fungsi $\\mathbf1_A$ hanya bernilai nol dan satu; pracitra setiap himpunan Borel merupakan salah satu dari $\\varnothing,A,A^c,X$.",
          "Seluruh himpunan tersebut termasuk $\\mathcal A$. Jadi $\\mathbf1_A$ terukur."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Pada $X=[0,1]$ dengan sigma-algebra Borel, buktikan bahwa $\\mathbf1_{[0,1/2]}$ terukur.",
        "hint": "Gunakan kriteria bahwa indikator terukur tepat bila himpunannya terukur.",
        "answer": "Interval $[0,1/2]$ tertutup dalam $X$ dan karenanya Borel. Berdasarkan proposisi keterukuran indikator, $\\mathbf1_{[0,1/2]}$ merupakan fungsi Borel-terukur.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-induced-measure": {
    "intro": [
      "Ukuran dorong mengubah ukuran pada ruang asal menjadi ukuran pada ruang sasaran. Komposisi dengan pemetaan terukur memungkinkan pengintegralan pada ruang sasaran dihitung dari ruang asal."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Identitas Integral Ukuran Dorong",
        "statement": "Jika $T:(X,\\mathcal A)\\to(Y,\\mathcal B)$ terukur, $\\mu$ ukuran pada $X$, dan $g:Y\\to[0,\\infty]$ terukur, maka $\\int_Yg\\,d(T_\\#\\mu)=\\int_X(g\\circ T)\\,d\\mu$.",
        "proof": [
          "Untuk $g=\\mathbf1_B$ dengan $B\\in\\mathcal B$, ruas kiri bernilai $(T_\\#\\mu)(B)=\\mu(T^{-1}(B))$, sedangkan ruas kanan bernilai $\\int_X\\mathbf1_{T^{-1}(B)}\\,d\\mu$, sehingga keduanya sama.",
          "Dari linearitas integral untuk fungsi sederhana nonnegatif, identitas tersebut berlaku bagi setiap fungsi sederhana nonnegatif $g$.",
          "Untuk $g$ terukur nonnegatif, pilih fungsi sederhana $g_n\\uparrow g$. Maka $g_n\\circ T\\uparrow g\\circ T$ dan Teorema Konvergensi Monoton pada kedua ruang memberi identitas yang diminta."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Jika $X$ merata pada $\\{1,2,3\\}$ dan $T(x)=x\\bmod2$, hitung $\\int_{\\{0,1\\}}y\\,d(T_\\#P)(y)$.",
        "hint": "Hitung massa $0$ dan $1$ setelah pemetaan, atau gunakan identitas pushforward.",
        "answer": "Pemetaan menghasilkan massa $P(T=0)=1/3$ dan $P(T=1)=2/3$. Oleh karena itu $\\int y\\,d(T_\\#P)=0(1/3)+1(2/3)=2/3$. Identitas integral ukuran dorong memberi hasil yang sama dari $E[T(X)]$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-lebesgue-integral": {
    "intro": [
      "Monotonisitas integral Lebesgue diperoleh dari urutan pointwise pada fungsi terukur nonnegatif dan konstruksi integral melalui supremum fungsi sederhana."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Monotonisitas Integral Fungsi Nonnegatif",
        "statement": "Jika $f,g:X\\to[0,\\infty]$ terukur dan $f\\le g$ di seluruh $X$, maka $\\int_X f\\,d\\mu\\le\\int_X g\\,d\\mu$.",
        "proof": [
          "Setiap fungsi sederhana nonnegatif $s$ dengan $0\\le s\\le f$ juga memenuhi $0\\le s\\le g$.",
          "Karena integral fungsi nonnegatif adalah supremum integral semua fungsi sederhana yang berada di bawahnya, himpunan calon pembatas integral $f$ termuat dalam himpunan calon pembatas integral $g$.",
          "Akibatnya supremum pertama tidak melebihi supremum kedua, yakni $\\int_X f\\,d\\mu\\le\\int_X g\\,d\\mu$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Pada $[0,1]$, tunjukkan $\\int_0^1 x^2\\,dx\\le\\int_0^1x\\,dx$ tanpa menghitung antiturunan terlebih dahulu.",
        "hint": "Bandingkan kedua integran secara pointwise pada interval.",
        "answer": "Untuk setiap $0\\le x\\le1$ berlaku $x^2\\le x$. Kedua fungsi kontinu dan karenanya terukur nonnegatif. Monotonisitas integral menghasilkan $\\int_0^1x^2\\,dx\\le\\int_0^1x\\,dx$. Memang, nilainya masing-masing $1/3$ dan $1/2$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-dct": {
    "intro": [
      "Dominasi integrabel diperlukan untuk mengendalikan massa integral secara global. Konvergensi titik demi titik saja tidak mencukupi untuk menukar limit dan integral."
    ],
    "formal": [
      {
        "kind": "corollary",
        "title": "Integral Pangkat pada Interval Satuan",
        "statement": "Pada $[0,1]$ dengan ukuran Lebesgue, berlaku $\\lim_{n\\to\\infty}\\int_0^1x^n\\,dx=0$.",
        "proof": [
          "Untuk setiap $x\\in[0,1)$, barisan $x^n$ konvergen ke nol. Pada $x=1$ limitnya satu; himpunan pengecualian $\\{1\\}$ berukuran nol.",
          "Untuk semua $n$ dan $x\\in[0,1]$ berlaku $0\\le x^n\\le1$, sedangkan fungsi dominasi $g\\equiv1$ terintegralkan pada $[0,1]$.",
          "Teorema Konvergensi Terdominasi memberi $\\lim_{n\\to\\infty}\\int_0^1x^n\\,dx=\\int_0^1 0\\,dx=0$. Hal ini konsisten dengan $\\int_0^1x^n\\,dx=1/(n+1)$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung $\\lim_{n\\to\\infty}\\int_0^1\\frac{x^n}{1+x}\\,dx$ menggunakan dominasi.",
        "hint": "Periksa konvergensi hampir di mana-mana dan cari pembatas terintegralkan.",
        "answer": "Untuk setiap $x\\in[0,1)$, $x^n/(1+x)\\to0$, dan $x=1$ merupakan himpunan pengecualian berukuran nol. Selain itu $0\\le x^n/(1+x)\\le1$ pada $[0,1]$. Karena fungsi konstan $1$ terintegralkan, Teorema Konvergensi Terdominasi memberi limit integral sama dengan nol.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-independent-events": {
    "intro": [
      "Independensi tidak berubah ketika salah satu atau kedua kejadian diganti komplemennya. Hasil ini berguna untuk menurunkan peluang gabungan tanpa mendaftar seluruh titik sampel."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Komplemen Kejadian Independen",
        "statement": "Jika kejadian $A,B$ independen, maka $A^c$ dan $B$, $A$ dan $B^c$, serta $A^c$ dan $B^c$ juga independen.",
        "proof": [
          "Dari dekomposisi saling lepas $B=(A\\cap B)\\cup(A^c\\cap B)$ diperoleh $P(A^c\\cap B)=P(B)-P(A\\cap B)$.",
          "Karena $A,B$ independen, $P(A^c\\cap B)=P(B)-P(A)P(B)=(1-P(A))P(B)=P(A^c)P(B)$.",
          "Argumen simetris membuktikan independensi $A$ dan $B^c$. Mengganti $B$ dengan $B^c$ pada hasil pertama memberi independensi $A^c$ dan $B^c$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Jika $A$ dan $B$ independen dengan $P(A)=0.3$ dan $P(B)=0.4$, hitung $P(A^c\\cap B^c)$.",
        "hint": "Gunakan independensi komplemen.",
        "answer": "Komplemen kedua kejadian juga independen. Karena $P(A^c)=0.7$ dan $P(B^c)=0.6$, maka $P(A^c\\cap B^c)=0.7(0.6)=0.42$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-cond-expectation": {
    "intro": [
      "Ekspektasi bersyarat merupakan proyeksi informasi dalam arti integral: setelah informasi dipersempit menjadi sigma-algebra yang lebih kecil, nilai rata-rata total tetap dipertahankan."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Ekspektasi Rata-Rata dari Ekspektasi Bersyarat",
        "statement": "Jika $X$ integrabel dan $\\mathcal G\\subseteq\\mathcal F$, maka $E[E[X\\mid\\mathcal G]]=E[X]$.",
        "proof": [
          "Definisi ekspektasi bersyarat memberikan peubah $Y=E[X\\mid\\mathcal G]$ yang $\\mathcal G$-terukur dan integrabel.",
          "Untuk setiap $G\\in\\mathcal G$ berlaku $\\int_GY\\,dP=\\int_GX\\,dP$.",
          "Karena $\\Omega\\in\\mathcal G$, pilih $G=\\Omega$ dan diperoleh $\\int_\\Omega Y\\,dP=\\int_\\Omega X\\,dP$, yaitu $E[Y]=E[X]$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Pada dua atom $\\{1,2\\}$ dan $\\{3,4\\}$ sama mungkin dengan $X(\\omega)=\\omega$, periksa $E[E[X\\mid\\mathcal G]]=E[X]$.",
        "hint": "Hitung rata-rata ekspektasi bersyarat pada dua atom.",
        "answer": "Ekspektasi bersyarat bernilai $3/2$ dan $7/2$ pada kedua atom yang masing-masing mempunyai peluang $1/2$. Oleh karena itu, $E[E[X\\mid\\mathcal G]]=(3/2)(1/2)+(7/2)(1/2)=5/2$. Sementara $E[X]=(1+2+3+4)/4=5/2$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "tup-martingale": {
    "intro": [
      "Salah satu konsekuensi langsung sifat martingale adalah konservasi ekspektasi. Perubahan nilai pada lintasan individu tidak bertentangan dengan kestabilan nilai rata-ratanya."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Ekspektasi Martingale Tetap",
        "statement": "Jika $(M_n,\\mathcal F_n)_{n\\ge0}$ martingale integrabel, maka $E[M_n]=E[M_0]$ untuk semua $n\\ge0$.",
        "proof": [
          "Definisi martingale menyatakan $E[M_{n+1}\\mid\\mathcal F_n]=M_n$ hampir pasti.",
          "Dengan mengambil ekspektasi dan menggunakan sifat ekspektasi bersyarat, diperoleh $E[M_{n+1}]=E[E[M_{n+1}\\mid\\mathcal F_n]]=E[M_n]$.",
          "Induksi terhadap $n$ memberi $E[M_n]=E[M_{n-1}]=\\cdots=E[M_0]$ untuk seluruh $n$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk random walk simetris $M_n=\\sum_{k=1}^n\\xi_k$ dengan $E[\\xi_k]=0$, hitung $E[M_{100}]$.",
        "hint": "Gunakan linearitas ekspektasi atau sifat martingale.",
        "answer": "Karena setiap inkremen integrabel dan bermean nol, $E[M_{100}]=\\sum_{k=1}^{100}E[\\xi_k]=0$. Hasilnya sama dengan sifat ekspektasi tetap bagi martingale dengan $M_0=0$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "alg-groups": {
    "intro": [
      "Pada grup hingga, keberhinggaan memastikan setiap elemen mempunyai pangkat positif yang sama dengan identitas. Argumen ini tidak memerlukan komutativitas."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Setiap Elemen Grup Hingga Memiliki Orde Hingga",
        "statement": "Jika $G$ grup hingga dan $a\\in G$, terdapat bilangan bulat positif $m$ sehingga $a^m=e$.",
        "proof": [
          "Perhatikan barisan pangkat $e,a,a^2,\\ldots,a^{|G|}$. Terdapat $|G|+1$ elemen dalam daftar ini, sedangkan $G$ hanya mempunyai $|G|$ anggota.",
          "Prinsip pigeonhole memberikan $0\\le i<j\\le|G|$ dengan $a^i=a^j$.",
          "Kalikan kedua ruas dari kiri dengan $(a^i)^{-1}$, sehingga $e=a^{j-i}$. Karena $j-i\\ge1$, orde $a$ hingga."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan orde $[4]$ dalam grup aditif $\\mathbb Z_{10}$.",
        "hint": "Cari kelipatan positif terkecil yang kongruen dengan nol modulo sepuluh.",
        "answer": "Kelipatan $[4]$ berturut-turut adalah $[4],[8],[2],[6],[0]$. Karena kelipatan kelima pertama kali menghasilkan $[0]$, orde $[4]$ adalah $5$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "alg-group-homomorphisms": {
    "intro": [
      "Citra dan kernel adalah struktur subgrup alami yang dibentuk setiap homomorfisma. Keduanya memuat informasi tentang bagian domain yang menjadi identitas dan bagian kodomain yang benar-benar dicapai."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Citra Homomorfisma Merupakan Subgrup",
        "statement": "Jika $\\varphi:G\\to H$ homomorfisma grup, maka $\\operatorname{im}\\varphi=\\{\\varphi(g):g\\in G\\}$ merupakan subgrup dari $H$.",
        "proof": [
          "Karena $\\varphi(e_G)=e_H$, identitas $H$ berada dalam $\\operatorname{im}\\varphi$, sehingga citra tidak kosong.",
          "Ambil $x=\\varphi(a)$ dan $y=\\varphi(b)$ dari citra. Karena $\\varphi$ homomorfisma dan $\\varphi(b^{-1})=\\varphi(b)^{-1}$, diperoleh $xy^{-1}=\\varphi(a)\\varphi(b^{-1})=\\varphi(ab^{-1})$.",
          "Karena $ab^{-1}\\in G$, hasil $xy^{-1}$ kembali berada dalam citra. Kriteria subgrup satu langkah membuktikan klaim."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk $\\varphi:\\mathbb Z\\to\\mathbb Z_6$, $\\varphi(n)=[2n]_6$, tentukan citra $\\varphi$.",
        "hint": "Hitung semua kelas residu genap modulo enam.",
        "answer": "Untuk setiap $n\\in\\mathbb Z$, $\\varphi(n)$ adalah salah satu dari $[0],[2],[4]$. Ketiganya tercapai berturut-turut untuk $n=0,1,2$. Jadi $\\operatorname{im}\\varphi=\\{[0],[2],[4]\\}$, suatu subgrup aditif $\\mathbb Z_6$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "alg-cosets-lagrange": {
    "intro": [
      "Teorema Lagrange menghubungkan kardinalitas grup dan ukuran subgrup. Ketika diterapkan pada subgrup siklik, diperoleh pembatas aritmetika untuk orde setiap elemen."
    ],
    "formal": [
      {
        "kind": "corollary",
        "title": "Orde Elemen Membagi Orde Grup Hingga",
        "statement": "Untuk grup hingga $G$ dan $a\\in G$, orde $\\operatorname{ord}(a)$ membagi $|G|$.",
        "proof": [
          "Subgrup siklik $\\langle a\\rangle$ terdiri atas semua pangkat $a$ dan banyak anggotanya sama dengan orde $a$.",
          "Menurut Teorema Lagrange, untuk setiap subgrup $H\\le G$, bilangan $|H|$ membagi $|G|$.",
          "Ambil $H=\\langle a\\rangle$ sehingga $\\operatorname{ord}(a)=|\\langle a\\rangle|$ membagi $|G|$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan bahwa grup berorde $11$ adalah siklik.",
        "hint": "Perhatikan suatu elemen bukan identitas dan gunakan pembagi dari orde grup.",
        "answer": "Ambil $a\\ne e$ pada grup $G$ dengan $|G|=11$. Orde $a$ membagi $11$ menurut Lagrange dan tidak sama dengan $1$. Karena $11$ prima, diperoleh $\\operatorname{ord}(a)=11$. Maka $\\langle a\\rangle=G$, jadi grup siklik.",
        "provenance": "dmath-original"
      }
    ]
  },
  "alg-subgroups": {
    "intro": [
      "Uji subgrup satu langkah menyederhanakan pemeriksaan subgrup: cukup menunjukkan himpunan tidak kosong dan tertutup terhadap operasi $ab^{-1}$, bukan memverifikasi seluruh aksioma grup ulang."
    ],
    "formal": [
      {
        "kind": "lemma",
        "title": "Irisan Dua Subgrup adalah Subgrup",
        "statement": "Jika $H,K\\le G$, maka $H\\cap K$ merupakan subgrup dari $G$.",
        "proof": [
          "Karena $H$ dan $K$ subgrup, identitas $e$ berada pada keduanya, sehingga $H\\cap K$ tidak kosong.",
          "Ambil $a,b\\in H\\cap K$. Kedua subgrup tertutup terhadap $ab^{-1}$, sehingga $ab^{-1}\\in H$ dan $ab^{-1}\\in K$.",
          "Dengan demikian, $ab^{-1}\\in H\\cap K$. Kriteria subgrup satu langkah menunjukkan $H\\cap K\\le G$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan $4\\mathbb Z\\cap6\\mathbb Z$ sebagai subgrup $\\mathbb Z$.",
        "hint": "Cari bilangan bulat yang habis dibagi empat sekaligus enam.",
        "answer": "Bilangan yang sekaligus kelipatan $4$ dan $6$ adalah kelipatan $\\operatorname{lcm}(4,6)=12$. Karena itu $4\\mathbb Z\\cap6\\mathbb Z=12\\mathbb Z$, yang memang subgrup penjumlahan.",
        "provenance": "dmath-original"
      }
    ]
  },
  "num-bisection": {
    "intro": [
      "Jaminan metode bisection berasal dari Teorema Nilai Antara, dan batas galatnya tidak memerlukan turunan. Batas galat yang jelas menjadikan metode ini pilihan aman untuk akar yang sudah terkurung."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Estimasi Galat Titik Tengah Bisection",
        "statement": "Jika sebuah akar $p$ berada pada interval $[a_n,b_n]$ setelah $n$ kali pembagian dua dari $[a_0,b_0]$, titik tengah $m_n=(a_n+b_n)/2$ memenuhi $|p-m_n|\\le(b_0-a_0)/2^{n+1}$.",
        "proof": [
          "Setiap iterasi membelah interval menjadi dua bagian sama panjang sehingga $b_n-a_n=(b_0-a_0)/2^n$.",
          "Karena $p\\in[a_n,b_n]$ dan $m_n$ titik tengah interval, jarak terbesar $p$ dari $m_n$ sama dengan setengah panjang interval.",
          "Oleh karena itu, $|p-m_n|\\le(b_n-a_n)/2=(b_0-a_0)/2^{n+1}$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Metode bisection dimulai dari interval $[1,3]$. Berapa pembagian dua cukup untuk menjamin galat titik tengah kurang dari $10^{-3}$?",
        "hint": "Gunakan $(b_0-a_0)/2^{n+1}<10^{-3}$.",
        "answer": "Dari panjang awal $2$, batas galat adalah $2/2^{n+1}=2^{-n}$. Syarat $2^{-n}<10^{-3}$ setara dengan $2^n>1000$. Karena $2^9=512$ dan $2^{10}=1024$, diperlukan sedikitnya $n=10$ kali pembagian dua.",
        "provenance": "dmath-original"
      }
    ]
  },
  "num-newton": {
    "intro": [
      "Iterasi Newton menggunakan garis singgung sebagai aproksimasi lokal kurva. Hubungan dengan akar sederhana terlihat dari sifat titik tetap pemetaan Newton."
    ],
    "formal": [
      {
        "kind": "lemma",
        "title": "Akar Sederhana Menjadi Titik Tetap Newton",
        "statement": "Jika $f(p)=0$ dan $f'(p)\\ne0$, maka $N(p)=p$ untuk $N(x)=x-f(x)/f'(x)$ pada titik di mana turunannya tak nol.",
        "proof": [
          "Diketahui $f(p)=0$ dan $f'(p)\\ne0$, sehingga nilai $N(p)$ terdefinisi.",
          "Dengan substitusi, $N(p)=p-\\frac{f(p)}{f'(p)}=p-\\frac0{f'(p)}$.",
          "Oleh karena itu, $N(p)=p$, yakni akar sederhana merupakan titik tetap pemetaan Newton."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Pada $f(x)=x^2-4$, tentukan $N(x)$ dan periksa apakah $x=2$ titik tetap.",
        "hint": "Tentukan turunan dan substitusikan akar sederhana.",
        "answer": "Karena $f'(x)=2x$, pemetaan Newton untuk $x\\ne0$ adalah $N(x)=x-(x^2-4)/(2x)=\\frac12(x+4/x)$. Substitusi $x=2$ menghasilkan $N(2)=\\frac12(2+2)=2$, sesuai sifat titik tetap.",
        "provenance": "dmath-original"
      }
    ]
  },
  "num-lagrange": {
    "intro": [
      "Polinom basis Lagrange memenuhi suatu identitas partisi-satu. Identitas ini memastikan interpolan fungsi konstan tetap konstan dan mempermudah pembuktian ketepatan metode."
    ],
    "formal": [
      {
        "kind": "lemma",
        "title": "Jumlah Basis Lagrange adalah Satu",
        "statement": "Untuk node berbeda $x_0,\\ldots,x_n$ dan basis Lagrange $L_0,\\ldots,L_n$, berlaku $\\sum_{i=0}^n L_i(x)=1$ untuk setiap $x$.",
        "proof": [
          "Definisikan polinom $Q(x)=\\sum_{i=0}^n L_i(x)-1$. Derajat $Q$ paling tinggi $n$ karena setiap $L_i$ berderajat paling tinggi $n$.",
          "Pada node $x_j$, sifat dasar Lagrange memberi $L_i(x_j)=\\delta_{ij}$, sehingga $Q(x_j)=\\sum_i\\delta_{ij}-1=0$.",
          "Polinom $Q$ mempunyai $n+1$ akar berbeda dan berderajat paling tinggi $n$, sehingga $Q\\equiv0$. Jadi $\\sum_i L_i(x)=1$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk node $x_0=0$ dan $x_1=2$, verifikasi $L_0(x)+L_1(x)=1$.",
        "hint": "Tuliskan kedua basis secara eksplisit.",
        "answer": "Basisnya $L_0(x)=(2-x)/2$ dan $L_1(x)=x/2$. Penjumlahan memberi $L_0(x)+L_1(x)=(2-x+x)/2=1$ untuk semua $x$.",
        "provenance": "dmath-original"
      }
    ]
  },
  "num-euler-method": {
    "intro": [
      "Metode Euler memperkirakan perubahan solusi melalui kemiringan pada awal setiap langkah. Untuk persamaan dengan kemiringan konstan, aproksimasi tersebut tepat tanpa galat diskretisasi."
    ],
    "formal": [
      {
        "kind": "proposition",
        "title": "Metode Euler Eksak untuk Kemiringan Konstan",
        "statement": "Untuk masalah nilai awal $y'(t)=c$, $y(t_0)=y_0$, metode Euler eksplisit dengan ukuran langkah $h$ memberikan nilai eksak $w_n=y_0+cnh$ pada $t_n=t_0+nh$.",
        "proof": [
          "Metode Euler memberi $w_{n+1}=w_n+h c$ dengan $w_0=y_0$.",
          "Andaikan $w_n=y_0+cnh$. Maka $w_{n+1}=y_0+cnh+ch=y_0+c(n+1)h$. Induksi menghasilkan rumus untuk seluruh $n$.",
          "Solusi diferensial eksak adalah $y(t)=y_0+c(t-t_0)$. Substitusi $t=t_n$ memberi $y(t_n)=y_0+cnh=w_n$."
        ]
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk $y'=3$, $y(0)=2$, gunakan Euler dengan $h=0.25$ sampai $t=1$.",
        "hint": "Setiap langkah menambah $3h=0.75$.",
        "answer": "Rumus Euler memberi $w_{n+1}=w_n+0.75$. Berawal dari $w_0=2$, diperoleh $w_1=2.75$, $w_2=3.5$, $w_3=4.25$, dan $w_4=5$. Solusi eksaknya $y(t)=2+3t$ sehingga $y(1)=5$, sama dengan Euler.",
        "provenance": "dmath-original"
      }
    ]
  }
};
