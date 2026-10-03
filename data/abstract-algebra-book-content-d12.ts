import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-vector-spaces": {
    "title": "Ruang Vektor",
    "focus": "Ruang vektor menjadi jembatan antara aljabar linear dan teori field. Dalam struktur aljabar, perluasan field $E/F$ dipandang sebagai ruang vektor atas $F$, sehingga kombinasi linear, subruang, dan transformasi linear digunakan untuk mengukur derajat perluasan.",
    "definitions": [
      {
        "title": "Ruang Vektor atas Field",
        "statement": "Ruang vektor $V$ atas field $F$ adalah grup abelian $(V,+)$ yang dilengkapi perkalian skalar $F\\times V\\to V$ dan memenuhi distributivitas, kompatibilitas perkalian skalar, serta $1_Fv=v$."
      },
      {
        "title": "Subruang Vektor",
        "statement": "Subset $W\\subseteq V$ disebut subruang jika $W$ tidak kosong dan untuk setiap $u,v\\in W$ serta $a,b\\in F$, kombinasi $au+bv$ berada di $W$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Uji Subruang",
        "statement": "Subset tak kosong $W\\subseteq V$ merupakan subruang jika dan hanya jika $au+bv\\in W$ untuk setiap $u,v\\in W$ dan setiap $a,b\\in F$.",
        "proof": [
          "Jika $W$ subruang, ketertutupan terhadap penjumlahan dan perkalian skalar langsung memberi $au+bv\\in W$.",
          "Sebaliknya, ambil $w\\in W$. Dengan $a=b=0$ diperoleh $0\\in W$. Dengan memilih $a=b=1$ diperoleh ketertutupan penjumlahan, sedangkan dengan $b=0$ diperoleh ketertutupan perkalian skalar.",
          "Seluruh aksioma lain diwarisi dari $V$, sehingga $W$ merupakan ruang vektor atas field yang sama."
        ]
      },
      {
        "kind": "proposition",
        "title": "Kernel dan Image Transformasi Linear",
        "statement": "Jika $T:V\\to W$ linear, maka $\\ker T$ adalah subruang $V$ dan $\\operatorname{im}T$ adalah subruang $W$.",
        "proof": [
          "Untuk $u,v\\in\\ker T$ dan $a,b\\in F$, linearitas memberi $T(au+bv)=aT(u)+bT(v)=0$, sehingga kernel tertutup terhadap kombinasi linear.",
          "Untuk $x=T(u)$ dan $y=T(v)$ di image, $ax+by=T(au+bv)$ juga berada di image.",
          "Kedua himpunan tidak kosong karena memuat nol. Uji subruang memberi kesimpulan."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb C$ sebagai Ruang Vektor atas $\\mathbb R$",
        "problem": "Tentukan satu basis dan dimensinya.",
        "solution": [
          "Setiap $z=a+bi$ dapat ditulis sebagai $a(1)+b(i)$ dengan $a,b\\in\\mathbb R$.",
          "Jika $a+bi=0$, maka $a=b=0$, sehingga $1$ dan $i$ bebas linear."
        ],
        "conclusion": "$\\{1,i\\}$ adalah basis $\\mathbb C$ atas $\\mathbb R$ dan dimensinya 2."
      },
      {
        "title": "$\\mathbb Q(\\sqrt2)$",
        "problem": "Tunjukkan $\\mathbb Q(\\sqrt2)=\\{a+b\\sqrt2:a,b\\in\\mathbb Q\\}$ adalah ruang vektor atas $\\mathbb Q$.",
        "solution": [
          "Penjumlahan dan perkalian skalar rasional mempertahankan bentuk $a+b\\sqrt2$.",
          "Vektor $1$ dan $\\sqrt2$ merentang seluruh himpunan.",
          "Jika $a+b\\sqrt2=0$ dengan $b\\ne0$, maka $\\sqrt2=-a/b$ rasional, kontradiksi."
        ],
        "conclusion": "Basisnya $\\{1,\\sqrt2\\}$ dan dimensinya 2."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan irisan dua subruang adalah subruang.",
        "hint": "Gunakan uji kombinasi linear.",
        "answer": "Jika $u,v$ berada di $U\\cap W$, maka $au+bv$ berada di $U$ dan di $W$, sehingga berada di irisan."
      },
      {
        "prompt": "Tentukan dimensi $\\mathbb C$ sebagai ruang vektor atas $\\mathbb C$.",
        "hint": "Perhatikan bahwa satu elemen 1 sudah merentang seluruh field.",
        "answer": "Basisnya $\\{1\\}$, sehingga dimensinya 1."
      },
      {
        "prompt": "Tentukan apakah $\\mathbb R$ berdimensi hingga atas $\\mathbb Q$.",
        "hint": "Gunakan fakta bahwa span hingga atas $\\mathbb Q$ terhitung.",
        "answer": "Jika basisnya hingga, setiap real merupakan kombinasi rasional hingga dari basis tersebut, menghasilkan himpunan terhitung. Karena $\\mathbb R$ tak terhitung, dimensinya atas $\\mathbb Q$ tidak hingga."
      }
    ]
  },
  "alg-basis-dimension": {
    "title": "Basis dan Dimensi",
    "focus": "Basis adalah himpunan yang sekaligus bebas linear dan merentang ruang. Dalam teori perluasan field, dimensi basis $E$ sebagai ruang vektor atas $F$ menjadi derajat perluasan $[E:F]$ dan mengukur kompleksitas aljabar.",
    "definitions": [
      {
        "title": "Basis",
        "statement": "Himpunan $B\\subseteq V$ disebut basis jika $B$ bebas linear dan $\\operatorname{span}(B)=V$."
      },
      {
        "title": "Dimensi",
        "statement": "Jika $V$ mempunyai basis hingga, banyak elemen pada setiap basis sama dan disebut dimensi $\\dim_FV$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Lemma Pertukaran",
        "statement": "Jika $v_1,\\ldots,v_m$ bebas linear dan $w_1,\\ldots,w_n$ merentang $V$, maka $m\\le n$.",
        "proof": [
          "Karena $w_1,\\ldots,w_n$ merentang $V$, tulis $v_1$ sebagai kombinasi mereka. Sedikitnya satu koefisien tidak nol, sehingga satu $w_j$ dapat diselesaikan sebagai kombinasi $v_1$ dan $w$ lain. Ganti $w_j$ dengan $v_1$ tanpa mengubah span.",
          "Ulangi proses untuk $v_2,\\ldots,v_m$. Kebebasan linear menjamin pada setiap tahap ada vektor lama yang dapat diganti dan bukan salah satu $v_i$ yang sudah dimasukkan.",
          "Daftar awal hanya mempunyai $n$ vektor, sehingga proses penggantian paling banyak dilakukan $n$ kali. Oleh karena itu $m\\le n$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Keunikan Dimensi",
        "statement": "Setiap dua basis hingga suatu ruang vektor mempunyai banyak elemen yang sama.",
        "proof": [
          "Misalkan $B$ basis berukuran $m$ dan $C$ basis berukuran $n$.",
          "Karena $B$ bebas linear dan $C$ merentang, Lemma Pertukaran memberi $m\\le n$.",
          "Tukar peran $B$ dan $C$ untuk memperoleh $n\\le m$. Dengan demikian $m=n$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Basis $\\mathbb Q(\\sqrt3)$",
        "problem": "Tentukan basis $\\mathbb Q(\\sqrt3)$ atas $\\mathbb Q$.",
        "solution": [
          "Setiap elemen berbentuk $a+b\\sqrt3$.",
          "$1$ dan $\\sqrt3$ merentang field tersebut.",
          "Keduanya bebas linear karena $\\sqrt3\\notin\\mathbb Q$."
        ],
        "conclusion": "$\\{1,\\sqrt3\\}$ basis dan $[\\mathbb Q(\\sqrt3):\\mathbb Q]=2$."
      },
      {
        "title": "Basis Perluasan Kubik",
        "problem": "Jika $\\alpha$ mempunyai polinom minimal derajat 3 atas $F$, tentukan basis $F(\\alpha)$ yang alami.",
        "solution": [
          "Setiap pangkat $\\alpha^k$ dengan $k\\ge3$ dapat direduksi menggunakan persamaan polinom minimal.",
          "Jika $a+b\\alpha+c\\alpha^2=0$ nontrivial, diperoleh polinom berderajat paling besar 2 yang mematikan $\\alpha$, bertentangan dengan minimalitas derajat 3."
        ],
        "conclusion": "$\\{1,\\alpha,\\alpha^2\\}$ adalah basis $F(\\alpha)$ atas $F$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan himpunan bebas linear berukuran sama dengan dimensi ruang merupakan basis.",
        "hint": "Gunakan Lemma Pertukaran atau argumen dimensi.",
        "answer": "Himpunan bebas dengan $n=\\dim V$ elemen tidak dapat diperluas tanpa melebihi ukuran basis. Oleh karena itu ia harus sudah merentang dan menjadi basis."
      },
      {
        "prompt": "Jika $[E:F]=4$, apakah lima elemen $E$ dapat bebas linear atas $F$?",
        "hint": "Bandingkan banyak elemen dengan dimensi.",
        "answer": "Tidak. Setiap himpunan bebas linear mempunyai ukuran paling besar 4."
      },
      {
        "prompt": "Tentukan dimensi $\\mathbb Q(\\sqrt2,\\sqrt3)$ atas $\\mathbb Q$.",
        "hint": "Pertimbangkan basis $1,\\sqrt2,\\sqrt3,\\sqrt6$.",
        "answer": "Keempat elemen merentang dan bebas linear. Dimensinya 4."
      }
    ]
  },
  "alg-field-extensions": {
    "title": "Perluasan Field",
    "focus": "Perluasan field $E/F$ adalah pasangan field dengan $F\\subseteq E$. Elemen pada $E$ dapat bersifat aljabar atau transenden atas $F$, dan polinom minimal mengukur relasi aljabar terkecil yang dipenuhi elemen tersebut.",
    "definitions": [
      {
        "title": "Perluasan dan Derajat Field",
        "statement": "Jika $F\\subseteq E$ adalah field, ditulis $E/F$ dan disebut perluasan field. Derajat $[E:F]$ adalah dimensi $E$ sebagai ruang vektor atas $F$."
      },
      {
        "title": "Elemen Aljabar dan Polinom Minimal",
        "statement": "Elemen $\\alpha\\in E$ disebut aljabar atas $F$ jika terdapat polinom nonnol $f\\in F[x]$ dengan $f(\\alpha)=0$. Polinom monik tak tereduksi berderajat minimum yang mematikan $\\alpha$ disebut polinom minimal $m_{\\alpha,F}(x)$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Perluasan Sederhana oleh Elemen Aljabar",
        "statement": "Jika $\\alpha$ aljabar atas $F$ dengan polinom minimal berderajat $n$, maka $F(\\alpha)=F[\\alpha]$ dan $[F(\\alpha):F]=n$, dengan basis $1,\\alpha,\\ldots,\\alpha^{n-1}$.",
        "proof": [
          "Setiap polinom $f(\\alpha)$ dapat dibagi oleh polinom minimal $m(x)$ untuk memperoleh sisa berderajat kurang dari $n$. Karena $m(\\alpha)=0$, setiap elemen $F[\\alpha]$ dapat ditulis sebagai kombinasi $1,\\alpha,\\ldots,\\alpha^{n-1}$.",
          "Jika kombinasi nontrivial dari basis kandidat sama dengan nol, diperoleh polinom nonnol berderajat kurang dari $n$ yang mematikan $\\alpha$, bertentangan dengan minimalitas $m$.",
          "Karena $m$ tak tereduksi, ideal $(m)$ maksimal di $F[x]$ dan $F[x]/(m)$ field. Peta evaluasi menunjukkan $F[\\alpha]$ field, sehingga sama dengan $F(\\alpha)$. Dimensinya tepat $n$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Hukum Menara",
        "statement": "Jika $F\\subseteq K\\subseteq E$ dan kedua derajat $[E:K]$, $[K:F]$ hingga, maka $[E:F]=[E:K][K:F]$.",
        "proof": [
          "Ambil basis $\\{u_1,\\ldots,u_m\\}$ untuk $E$ atas $K$ dan basis $\\{v_1,\\ldots,v_n\\}$ untuk $K$ atas $F$.",
          "Setiap $x\\in E$ ditulis $x=\\sum_i k_i u_i$ dengan $k_i\\in K$, lalu setiap $k_i=\\sum_j a_{ij}v_j$ dengan $a_{ij}\\in F$. Dengan demikian elemen $u_iv_j$ merentang $E$ atas $F$.",
          "Jika $\\sum_{i,j}a_{ij}u_iv_j=0$, kelompokkan menurut $u_i$. Kebebasan $u_i$ atas $K$ memberi $\\sum_j a_{ij}v_j=0$ untuk setiap $i$, lalu kebebasan $v_j$ atas $F$ memaksa semua $a_{ij}=0$. Dengan demikian, $mn$ elemen tersebut basis."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Q(\\sqrt2)$",
        "problem": "Tentukan polinom minimal dan derajat perluasan.",
        "solution": [
          "$\\sqrt2$ memenuhi $x^2-2$.",
          "$x^2-2$ tak tereduksi di $\\mathbb Q[x]$ karena tidak mempunyai akar rasional."
        ],
        "conclusion": "$m_{\\sqrt2,\\mathbb Q}=x^2-2$ dan $[\\mathbb Q(\\sqrt2):\\mathbb Q]=2$."
      },
      {
        "title": "$\\mathbb Q(\\sqrt2,\\sqrt3)$",
        "problem": "Gunakan Hukum Menara untuk menghitung derajat.",
        "solution": [
          "$[\\mathbb Q(\\sqrt2):\\mathbb Q]=2$.",
          "$\\sqrt3\\notin\\mathbb Q(\\sqrt2)$, sehingga penambahan $\\sqrt3$ memberi derajat 2 di atas $\\mathbb Q(\\sqrt2)$."
        ],
        "conclusion": "$[\\mathbb Q(\\sqrt2,\\sqrt3):\\mathbb Q]=2\\cdot2=4$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan polinom minimal $\\sqrt[3]{2}$ atas $\\mathbb Q$.",
        "hint": "Gunakan Eisenstein dengan $p=2$ pada $x^3-2$.",
        "answer": "$x^3-2$ tak tereduksi di $\\mathbb Q[x]$, sehingga polinom minimalnya $x^3-2$ dan derajat perluasan 3."
      },
      {
        "prompt": "Jika $[E:F]=6$ dan $[K:F]=2$ untuk $F\\subseteq K\\subseteq E$, tentukan $[E:K]$.",
        "hint": "Gunakan Hukum Menara.",
        "answer": "$6=[E:K]\\cdot2$, sehingga $[E:K]=3$."
      },
      {
        "prompt": "Buktikan setiap elemen pada perluasan berhingga $E/F$ adalah aljabar atas $F$.",
        "hint": "Gunakan ketergantungan linear $1,\\alpha,\\ldots,\\alpha^n$.",
        "answer": "Jika $[E:F]=n$, maka $n+1$ elemen $1,\\alpha,\\ldots,\\alpha^n$ bergantung linear. Relasi nontrivial menghasilkan polinom nonnol atas $F$ yang mematikan $\\alpha$."
      }
    ]
  },
  "alg-splitting-fields": {
    "title": "Splitting Fields",
    "focus": "Splitting field suatu polinom adalah perluasan field terkecil tempat polinom terurai menjadi faktor linear. Konstruksi ini mengumpulkan seluruh akar sekaligus dan menjadi tahap awal menuju teori Galois.",
    "definitions": [
      {
        "title": "Splitting Field",
        "statement": "Untuk $f\\in F[x]$, splitting field $E$ dari $f$ atas $F$ adalah perluasan $E/F$ tempat $f$ terurai menjadi hasil kali faktor linear dan $E$ dibangkitkan oleh akar-akar $f$."
      },
      {
        "title": "Field Pemisah Minimal",
        "statement": "Jika akar-akar $f$ dalam suatu penutupan aljabar adalah $\\alpha_1,\\ldots,\\alpha_r$, maka splitting field dapat ditulis $F(\\alpha_1,\\ldots,\\alpha_r)$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Eksistensi Splitting Field",
        "statement": "Setiap polinom nonkonstan $f\\in F[x]$ mempunyai splitting field atas $F$.",
        "proof": [
          "Buktikan dengan induksi pada derajat $f$. Jika $f$ berderajat 1, ia sudah terurai di $F$.",
          "Jika derajat lebih besar, pilih faktor tak tereduksi $p$ dari $f$. Ring faktor $F[x]/(p)$ adalah field dan memuat akar $\\alpha=x+(p)$ dari $p$.",
          "Di field $F(\\alpha)$, faktor linear $x-\\alpha$ dapat dikeluarkan dari $f$. Terapkan induksi pada faktor yang tersisa, lalu gabungkan perluasan yang diperoleh. Proses berhingga menghasilkan field tempat seluruh faktor linear muncul."
        ]
      },
      {
        "kind": "theorem",
        "title": "Keunikan sampai Isomorfisma",
        "statement": "Dua splitting field dari polinom yang sama $f\\in F[x]$ isomorfik melalui isomorfisma yang memperbaiki setiap elemen $F$.",
        "proof": [
          "Bangun isomorfisma dengan memilih akar $\\alpha$ pada splitting field pertama dan akar bersesuaian $\\beta$ pada splitting field kedua dari faktor tak tereduksi yang sama.",
          "Isomorfisma $F(\\alpha)\\to F(\\beta)$ diperoleh dengan mengirim $\\alpha$ ke $\\beta$, karena kedua field isomorfik dengan $F[x]/(m)$ untuk polinom minimal yang sama.",
          "Perluas isomorfisma secara induktif ketika akar-akar berikutnya ditambahkan. Setelah seluruh akar dimasukkan, diperoleh isomorfisma antara kedua splitting field yang memperbaiki $F$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Splitting Field $x^2-2$",
        "problem": "Tentukan splitting field $x^2-2$ atas $\\mathbb Q$.",
        "solution": [
          "Akar-akarnya $\\pm\\sqrt2$.",
          "Memasukkan $\\sqrt2$ otomatis memasukkan $-\\sqrt2$."
        ],
        "conclusion": "Splitting field adalah $\\mathbb Q(\\sqrt2)$ dengan derajat 2."
      },
      {
        "title": "Splitting Field $x^3-2$",
        "problem": "Tentukan bentuk splitting field atas $\\mathbb Q$.",
        "solution": [
          "Satu akar real adalah $\\alpha=\\sqrt[3]{2}$.",
          "Akar lain adalah $\\alpha\\omega$ dan $\\alpha\\omega^2$, dengan $\\omega=e^{2\\pi i/3}$.",
          "Diperlukan penambahan $\\alpha$ dan $\\omega$."
        ],
        "conclusion": "Splitting field adalah $\\mathbb Q(\\sqrt[3]{2},\\omega)$ dan berderajat 6 atas $\\mathbb Q$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan splitting field $x^4-1$ atas $\\mathbb Q$.",
        "hint": "Akar-akarnya $\\pm1,\\pm i$.",
        "answer": "Cukup menambahkan $i$, sehingga splitting field adalah $\\mathbb Q(i)$."
      },
      {
        "prompt": "Tentukan splitting field $x^2+1$ atas $\\mathbb R$.",
        "hint": "Akar-akarnya $\\pm i$.",
        "answer": "Splitting field adalah $\\mathbb C=\\mathbb R(i)$."
      },
      {
        "prompt": "Jelaskan mengapa splitting field dibangkitkan oleh hingga banyak elemen untuk polinom berderajat hingga.",
        "hint": "Banyak akar berbeda paling banyak sama dengan derajat.",
        "answer": "Polinom derajat $n$ mempunyai paling banyak $n$ akar berbeda. Splitting field dibangkitkan dengan menambahkan akar-akar tersebut satu per satu."
      }
    ]
  },
  "alg-finite-fields": {
    "title": "Aplikasi pada Field Hingga",
    "focus": "Setiap field hingga mempunyai karakteristik prima dan banyak elemennya merupakan pangkat prima. Struktur field hingga dikendalikan oleh polinom tak tereduksi, automorfisma Frobenius, dan grup multiplikatif yang bersifat siklik.",
    "definitions": [
      {
        "title": "Field Hingga",
        "statement": "Field dengan banyak elemen hingga disebut field hingga. Field dengan $q$ elemen sering ditulis $\\mathbb F_q$ atau $GF(q)$."
      },
      {
        "title": "Automorfisma Frobenius",
        "statement": "Pada field berkarakteristik $p$, peta $\\Phi(x)=x^p$ disebut Frobenius. Pada field hingga, Frobenius merupakan automorfisma."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Orde Field Hingga adalah Pangkat Prima",
        "statement": "Jika $F$ field hingga, terdapat prima $p$ dan integer $n\\ge1$ sehingga $|F|=p^n$.",
        "proof": [
          "Karakteristik field positif harus prima; tulis $\\operatorname{char}(F)=p$. Prime subfield yang dibangkitkan oleh 1 isomorfik dengan $\\mathbb F_p$.",
          "Field $F$ menjadi ruang vektor atas $\\mathbb F_p$. Karena $F$ hingga, dimensinya berhingga, misalkan $n$.",
          "Setiap elemen ditentukan oleh $n$ koefisien basis, masing-masing mempunyai $p$ pilihan. Oleh karena itu terdapat tepat $p^n$ elemen."
        ]
      },
      {
        "kind": "theorem",
        "title": "Grup Multiplikatif Field Hingga Siklik",
        "statement": "Untuk field hingga $F_q$, grup $F_q^\\times$ berorde $q-1$ dan bersifat siklik.",
        "proof": [
          "Grup $F_q^\\times$ adalah grup abelian hingga berorde $q-1$. Misalkan eksponennya $m$, yaitu KPK orde seluruh elemen.",
          "Setiap elemen memenuhi $x^m=1$. Polinom $x^m-1$ mempunyai paling banyak $m$ akar di field. Karena seluruh $q-1$ elemen nonnol merupakan akar, diperoleh $q-1\\le m$.",
          "Eksponen grup membagi orde grup, sehingga $m\\le q-1$. Dengan demikian $m=q-1$, dan pada grup abelian hingga terdapat elemen yang ordonya sama dengan eksponen. Elemen tersebut menghasilkan seluruh $F_q^\\times$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Frobenius pada Field Hingga",
        "statement": "Pada $F_q$ dengan $q=p^n$, berlaku $x^q=x$ untuk setiap $x\\in F_q$.",
        "proof": [
          "Untuk $x=0$ pernyataan jelas.",
          "Jika $x\\ne0$, elemen $x$ berada pada grup multiplikatif berorde $q-1$. Teorema Lagrange memberi $x^{q-1}=1$.",
          "Kalikan dengan $x$ untuk memperoleh $x^q=x$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Membangun $\\mathbb F_4$",
        "problem": "Bangun field berorde 4.",
        "solution": [
          "Polinom $x^2+x+1$ tak tereduksi di $\\mathbb F_2[x]$.",
          "Ambil $\\mathbb F_4=\\mathbb F_2[x]/(x^2+x+1)$.",
          "Jika $\\alpha=x+(x^2+x+1)$, maka $\\alpha^2=\\alpha+1$ karena karakteristik 2."
        ],
        "conclusion": "Elemennya $0,1,\\alpha,\\alpha+1$."
      },
      {
        "title": "Grup Multiplikatif $\\mathbb F_5$",
        "problem": "Tentukan generator $\\mathbb F_5^\\times$.",
        "solution": [
          "Grup mempunyai orde 4.",
          "$2^1=2$, $2^2=4$, $2^3=3$, dan $2^4=1$ modulo 5."
        ],
        "conclusion": "$2$ adalah generator $\\mathbb F_5^\\times$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan banyak elemen field hingga berkarakteristik 3 dan berdimensi 4 atas prime subfield.",
        "hint": "Gunakan $p^n$.",
        "answer": "Banyak elemennya $3^4=81$."
      },
      {
        "prompt": "Buktikan setiap elemen $\\mathbb F_{p^n}$ merupakan akar $x^{p^n}-x$.",
        "hint": "Gunakan hasil Frobenius field hingga.",
        "answer": "Untuk setiap $a$, berlaku $a^{p^n}=a$, sehingga substitusi memberi nol."
      },
      {
        "prompt": "Tentukan orde setiap elemen nonnol $\\mathbb F_8$.",
        "hint": "Orde harus membagi 7.",
        "answer": "Karena $\\mathbb F_8^\\times$ berorde prima 7, setiap elemen nonidentitas mempunyai orde 7; elemen 1 berorde 1."
      }
    ]
  }
};

export const abstractAlgebraContentD12 = buildAlgebraContent(specs);
