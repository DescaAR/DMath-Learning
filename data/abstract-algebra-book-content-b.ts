import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-direct-products": {
    "title": "Produk Langsung",
    "focus": "Produk langsung membangun grup baru dari beberapa grup dengan mengoperasikan setiap komponen secara terpisah. Konstruksi ini penting untuk mendeskripsikan grup abelian hingga dan memecah struktur menjadi faktor-faktor yang lebih sederhana.",
    "definitions": [
      {
        "title": "Produk Langsung Eksternal",
        "statement": "Jika $G$ dan $H$ grup, produk langsung $G\\times H$ adalah himpunan pasangan $(g,h)$ dengan operasi $(g_1,h_1)(g_2,h_2)=(g_1g_2,h_1h_2)$."
      },
      {
        "title": "Produk Langsung Internal",
        "statement": "Jika $H,K\\le G$, dikatakan $G$ merupakan produk langsung internal $H$ dan $K$ apabila $H,K\\trianglelefteq G$, $H\\cap K=\\{e\\}$, dan $HK=G$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Orde Elemen pada Produk Langsung",
        "statement": "Jika $g$ dan $h$ berorde hingga, maka $\\operatorname{ord}(g,h)=\\operatorname{lcm}(\\operatorname{ord}(g),\\operatorname{ord}(h))$.",
        "proof": [
          "$(g,h)^n=(g^n,h^n)$. Pasangan ini identitas tepat ketika $g^n=e_G$ dan $h^n=e_H$ sekaligus.",
          "Syarat pertama berarti $\\operatorname{ord}(g)\\mid n$, sedangkan syarat kedua berarti $\\operatorname{ord}(h)\\mid n$.",
          "Bilangan positif terkecil yang habis dibagi kedua orde tersebut adalah KPK-nya. Dengan demikian rumus orde berlaku."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kriteria Produk Langsung Internal",
        "statement": "Jika $H,K\\trianglelefteq G$, $H\\cap K=\\{e\\}$, dan $HK=G$, maka $G\\cong H\\times K$.",
        "proof": [
          "Untuk $h\\in H$ dan $k\\in K$, komutator $hkh^{-1}k^{-1}$ berada di $H$ karena $H$ normal dan berada di $K$ karena $K$ normal. Irisan trivial memaksa komutator sama dengan $e$, sehingga $hk=kh$.",
          "Definisikan $\\varphi:H\\times K\\to G$ dengan $\\varphi(h,k)=hk$. Komutativitas silang yang baru dibuktikan membuat $\\varphi$ homomorfisma.",
          "Syarat $HK=G$ memberi surjektivitas. Jika $hk=e$, maka $h=k^{-1}\\in H\\cap K$, sehingga $h=k=e$. Kernel trivial memberi injektivitas, sehingga $\\varphi$ isomorfisma."
        ]
      }
    ],
    "examples": [
      {
        "title": "Produk $\\mathbb Z_4\\times\\mathbb Z_6$",
        "problem": "Tentukan orde elemen $([1],[2])$.",
        "solution": [
          "$[1]\\in\\mathbb Z_4$ berorde 4.",
          "$[2]\\in\\mathbb Z_6$ berorde $6/\\gcd(6,2)=3$.",
          "KPK dari 4 dan 3 adalah 12."
        ],
        "conclusion": "Orde $([1],[2])$ adalah $12$."
      },
      {
        "title": "Kapan Produk Dua Grup Siklik Siklik",
        "problem": "Tentukan kapan $\\mathbb Z_m\\times\\mathbb Z_n$ siklik.",
        "solution": [
          "Elemen $([1],[1])$ berorde $\\operatorname{lcm}(m,n)$.",
          "Produk mempunyai $mn$ elemen.",
          "Agar satu elemen berorde $mn$, diperlukan $\\operatorname{lcm}(m,n)=mn$, ekuivalen dengan $\\gcd(m,n)=1$."
        ],
        "conclusion": "$\\mathbb Z_m\\times\\mathbb Z_n$ siklik jika dan hanya jika $\\gcd(m,n)=1$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan orde $([2],[3])$ di $\\mathbb Z_8\\times\\mathbb Z_{12}$.",
        "hint": "Hitung orde masing-masing komponen lalu ambil KPK.",
        "answer": "Orde $[2]$ di $\\mathbb Z_8$ adalah 4, orde $[3]$ di $\\mathbb Z_{12}$ adalah 4, sehingga orde pasangan adalah 4."
      },
      {
        "prompt": "Buktikan $G\\times H$ abelian jika dan hanya jika $G$ dan $H$ abelian.",
        "hint": "Bandingkan komponen dari hasil kali dua pasangan.",
        "answer": "Jika produk abelian, bandingkan $(g,e)(g',e)$ dan urutan terbaliknya untuk memperoleh $gg'=g'g$; serupa untuk $H$. Arah sebaliknya langsung dari operasi komponen."
      },
      {
        "prompt": "Tentukan apakah $\\mathbb Z_2\\times\\mathbb Z_4$ isomorfik dengan $\\mathbb Z_8$.",
        "hint": "Bandingkan orde maksimum elemen.",
        "answer": "Setiap elemen produk berorde paling besar 4, sedangkan $\\mathbb Z_8$ mempunyai elemen berorde 8. Oleh karena itu keduanya tidak isomorfik."
      }
    ]
  },
  "alg-finite-abelian": {
    "title": "Teorema Fundamental Grup Abelian Hingga",
    "focus": "Teorema fundamental grup abelian hingga menyatakan bahwa setiap grup abelian hingga dapat diuraikan sebagai produk langsung grup siklik berorde pangkat prima. Uraian ini unik sampai urutan faktor dan memberi klasifikasi lengkap.",
    "definitions": [
      {
        "title": "Komponen $p$-Primer",
        "statement": "Untuk grup abelian hingga $G$ dan prima $p$, komponen $p$-primer $G_p$ adalah himpunan elemen yang ordonya merupakan pangkat $p$."
      },
      {
        "title": "Dekomposisi Primer",
        "statement": "Dekomposisi primer menulis $G$ sebagai produk langsung $\\prod_p G_p$ atas semua prima yang membagi $|G|$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Dekomposisi Primer Grup Abelian Hingga",
        "statement": "Jika $G$ abelian hingga dan $|G|=\\prod_{i=1}^r p_i^{a_i}$, maka $G\\cong G_{p_1}\\times\\cdots\\times G_{p_r}$, dengan $|G_{p_i}|=p_i^{a_i}$.",
        "proof": [
          "Untuk setiap $p_i$, definisikan $G_{p_i}$ sebagai elemen yang ordonya pangkat $p_i$. Karena $G$ abelian, hasil kali dan invers dua elemen $p_i$-primer tetap $p_i$-primer, sehingga $G_{p_i}\\le G$.",
          "Jika $i\\ne j$, elemen pada $G_{p_i}\\cap G_{p_j}$ mempunyai orde yang sekaligus pangkat $p_i$ dan pangkat $p_j$, sehingga ordonya 1. Dengan demikian, irisan faktor yang berbeda trivial.",
          "Untuk $g\\in G$, gunakan identitas Bézout pada faktor-faktor koprima dari $|G|$ untuk memisahkan $g$ menjadi hasil kali komponen $p_i$-primer. Seluruh faktor saling komutatif, sehingga peta produk komponen ke $G$ adalah isomorfisma."
        ]
      },
      {
        "kind": "theorem",
        "title": "Bentuk Pangkat Prima",
        "statement": "Setiap grup abelian hingga berorde $p^n$ isomorfik dengan produk $\\mathbb Z_{p^{\\lambda_1}}\\times\\cdots\\times\\mathbb Z_{p^{\\lambda_k}}$ untuk suatu partisi $n=\\lambda_1+\\cdots+\\lambda_k$.",
        "proof": [
          "Pilih elemen berorde maksimum $p^{\\lambda_1}$. Subgrup siklik yang dibangkitkan menyumbang satu faktor utama.",
          "Dengan menggunakan struktur subgrup dan kuosien pada grup abelian $p$-hingga, lanjutkan secara induktif pada kuosien yang berorde lebih kecil untuk memperoleh faktor-faktor siklik tambahan.",
          "Proses berakhir karena orde grup berhingga. Keunikan tipe faktor diperoleh dari banyak elemen yang dimatikan oleh setiap pangkat $p^j$, yang menentukan multiset eksponen $\\lambda_i$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Grup Abelian Berorde 72",
        "problem": "Daftarkan tipe grup abelian hingga berorde $72=2^3\\cdot3^2$.",
        "solution": [
          "Komponen orde $2^3$ mempunyai tipe $\\mathbb Z_8$, $\\mathbb Z_4\\times\\mathbb Z_2$, atau $\\mathbb Z_2^3$.",
          "Komponen orde $3^2$ mempunyai tipe $\\mathbb Z_9$ atau $\\mathbb Z_3^2$.",
          "Gabungkan satu tipe dari masing-masing komponen."
        ],
        "conclusion": "Terdapat $3\\cdot2=6$ tipe isomorfisma grup abelian berorde 72."
      },
      {
        "title": "Membedakan Dua Grup",
        "problem": "Bedakan $\\mathbb Z_4\\times\\mathbb Z_2$ dan $\\mathbb Z_2^3$.",
        "solution": [
          "Grup pertama mempunyai elemen berorde 4, misalnya $([1],[0])$.",
          "Pada $\\mathbb Z_2^3$, setiap elemen nonidentitas berorde 2."
        ],
        "conclusion": "Kedua grup tidak isomorfik."
      }
    ],
    "exercises": [
      {
        "prompt": "Daftarkan semua tipe grup abelian berorde $p^4$.",
        "hint": "Gunakan partisi integer 4.",
        "answer": "Tipe-tipe adalah $\\mathbb Z_{p^4}$, $\\mathbb Z_{p^3}\\times\\mathbb Z_p$, $\\mathbb Z_{p^2}\\times\\mathbb Z_{p^2}$, $\\mathbb Z_{p^2}\\times\\mathbb Z_p^2$, dan $\\mathbb Z_p^4$."
      },
      {
        "prompt": "Berapa banyak tipe grup abelian berorde $2^3 5^2$?",
        "hint": "Kalikan banyak partisi eksponen 3 dan 2.",
        "answer": "Banyak partisi 3 adalah 3 dan partisi 2 adalah 2, sehingga terdapat 6 tipe."
      },
      {
        "prompt": "Tentukan apakah grup abelian berorde 30 selalu siklik.",
        "hint": "Gunakan bahwa 30 square-free.",
        "answer": "Ya. Setiap komponen primer berorde prima, sehingga masing-masing siklik, dan produk grup siklik berorde saling koprima kembali siklik. Dengan demikian, grup abelian berorde 30 isomorfik dengan $\\mathbb Z_{30}$."
      }
    ]
  },
  "alg-elementary-divisors": {
    "title": "Pembagi Elementer dan Faktor Invarian",
    "focus": "Dua format ekuivalen digunakan untuk menulis klasifikasi grup abelian hingga: pembagi elementer mengelompokkan faktor menurut pangkat prima, sedangkan faktor invarian menggabungkan faktor-faktor primer menjadi rantai pembagi.",
    "definitions": [
      {
        "title": "Pembagi Elementer",
        "statement": "Pada dekomposisi $G\\cong\\prod \\mathbb Z_{p_i^{a_i}}$, setiap pangkat prima $p_i^{a_i}$ disebut pembagi elementer."
      },
      {
        "title": "Faktor Invarian",
        "statement": "Dekomposisi faktor invarian menulis $G\\cong\\mathbb Z_{n_1}\\times\\cdots\\times\\mathbb Z_{n_r}$ dengan $n_1\\mid n_2\\mid\\cdots\\mid n_r$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Ekuivalensi Dua Bentuk Klasifikasi",
        "statement": "Data pembagi elementer menentukan faktor invarian secara unik, dan sebaliknya.",
        "proof": [
          "Kelompokkan pembagi elementer berdasarkan prima, lalu urutkan eksponen untuk setiap prima dari kecil ke besar.",
          "Sejajarkan daftar setiap prima dari sisi kanan dan kalikan pangkat-pangkat prima yang berada pada kolom yang sama. Karena eksponen tidak menurun, hasil kolom memenuhi rantai pembagian $n_1\\mid\\cdots\\mid n_r$.",
          "Sebaliknya, faktorkan setiap $n_j$ ke dalam pangkat prima. Faktor-faktor pangkat prima yang muncul tepat merupakan pembagi elementer. Keunikan faktorisasi prima menjamin kedua proses saling invers."
        ]
      }
    ],
    "examples": [
      {
        "title": "Dari Pembagi Elementer ke Faktor Invarian",
        "problem": "Ubah $\\mathbb Z_4\\times\\mathbb Z_2\\times\\mathbb Z_9\\times\\mathbb Z_3$ ke bentuk faktor invarian.",
        "solution": [
          "Komponen 2-primer mempunyai faktor $2,4$; komponen 3-primer mempunyai faktor $3,9$.",
          "Sejajarkan dan kalikan: $2\\cdot3=6$ dan $4\\cdot9=36$."
        ],
        "conclusion": "$G\\cong\\mathbb Z_6\\times\\mathbb Z_{36}$ dengan $6\\mid36$."
      },
      {
        "title": "Dari Faktor Invarian ke Pembagi Elementer",
        "problem": "Uraikan $\\mathbb Z_{12}\\times\\mathbb Z_{60}$ ke pembagi elementer.",
        "solution": [
          "$12=4\\cdot3$ dan $60=4\\cdot3\\cdot5$ dengan faktor pangkat prima yang saling koprima.",
          "Gunakan Teorema Sisa Cina pada tiap faktor siklik."
        ],
        "conclusion": "Pembagi elementernya $4,3,4,3,5$."
      }
    ],
    "exercises": [
      {
        "prompt": "Ubah $\\mathbb Z_8\\times\\mathbb Z_4\\times\\mathbb Z_9$ ke bentuk faktor invarian.",
        "hint": "Sejajarkan faktor 2-primer $4,8$ dengan faktor 3-primer $9$.",
        "answer": "Sejajarkan $4,8$ dan $1,9$, lalu kalikan: $4$ dan $72$. Diperoleh $\\mathbb Z_4\\times\\mathbb Z_{72}$."
      },
      {
        "prompt": "Tentukan pembagi elementer dari $\\mathbb Z_{18}\\times\\mathbb Z_{90}$.",
        "hint": "Faktorkan 18 dan 90 menjadi pangkat prima.",
        "answer": "$18=2\\cdot9$ dan $90=2\\cdot9\\cdot5$. Pembagi elementer: $2,9,2,9,5$."
      },
      {
        "prompt": "Jelaskan mengapa faktor invarian terakhir sama dengan eksponen grup.",
        "hint": "Eksponen grup adalah KPK orde semua elemen.",
        "answer": "Pada bentuk $n_1\\mid\\cdots\\mid n_r$, KPK semua orde faktor adalah $n_r$, dan terdapat elemen yang mempunyai orde tepat $n_r$."
      }
    ]
  },
  "alg-infinite-abelian": {
    "title": "Sekilas Grup Abelian Tak Hingga",
    "focus": "Klasifikasi grup abelian hingga tidak meluas secara sederhana ke semua grup abelian tak hingga. Bagian ini memperkenalkan grup abelian bebas, rank, grup divisible, dan contoh yang menunjukkan keragaman struktur tak hingga.",
    "definitions": [
      {
        "title": "Grup Abelian Bebas",
        "statement": "Grup abelian $A$ disebut bebas jika $A\\cong\\bigoplus_{i\\in I}\\mathbb Z$ untuk suatu himpunan indeks $I$. Kardinalitas basis disebut rank."
      },
      {
        "title": "Grup Divisible",
        "statement": "Grup abelian $A$ disebut divisible jika untuk setiap $a\\in A$ dan setiap integer $n\\ge1$, terdapat $x\\in A$ dengan $nx=a$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Subgrup Hingga Rank dari $\\mathbb Z^n$ Bebas",
        "statement": "Setiap subgrup $H\\le\\mathbb Z^n$ adalah grup abelian bebas dengan rank paling besar $n$.",
        "proof": [
          "Untuk $n=1$, setiap subgrup $\\mathbb Z$ berbentuk $d\\mathbb Z$ dan isomorfik dengan $\\mathbb Z$ atau trivial.",
          "Untuk $n>1$, proyeksikan $H$ ke koordinat terakhir. Image adalah subgrup $d\\mathbb Z$, sedangkan kernel berada di $\\mathbb Z^{n-1}$ dan bebas berdasarkan induksi.",
          "Pilih elemen $h\\in H$ yang memetakan ke generator $d$ dari image. Setiap elemen $H$ dapat ditulis unik sebagai elemen kernel ditambah kelipatan $h$, menghasilkan basis bebas dan rank paling besar $n$."
        ]
      },
      {
        "kind": "proposition",
        "title": "$\\mathbb Q$ Divisible tetapi Tidak Bebas",
        "statement": "Grup aditif $\\mathbb Q$ adalah divisible dan bukan grup abelian bebas nontrivial.",
        "proof": [
          "Untuk $q\\in\\mathbb Q$ dan $n\\ge1$, ambil $x=q/n\\in\\mathbb Q$. Diperoleh $nx=q$, sehingga $\\mathbb Q$ divisible.",
          "Dalam grup abelian bebas nontrivial, pilih elemen basis $b$. Persamaan $2x=b$ tidak mempunyai solusi karena koefisien $b$ pada $2x$ selalu genap.",
          "Karena pada $\\mathbb Q$ setiap persamaan $2x=q$ mempunyai solusi, $\\mathbb Q$ tidak dapat isomorfik dengan grup abelian bebas nontrivial."
        ]
      }
    ],
    "examples": [
      {
        "title": "Rank $\\mathbb Z^3$",
        "problem": "Tentukan rank $\\mathbb Z^3$ dan satu basisnya.",
        "solution": [
          "Elemen standar $e_1,e_2,e_3$ menghasilkan seluruh $\\mathbb Z^3$ melalui kombinasi linear integer.",
          "Representasi terhadap ketiga elemen tersebut unik."
        ],
        "conclusion": "Rank $\\mathbb Z^3$ adalah 3 dengan basis standar."
      },
      {
        "title": "Subgrup Tak Hingga Siklik",
        "problem": "Tentukan struktur $H=\\{(2m,3m):m\\in\\mathbb Z\\}\\le\\mathbb Z^2$.",
        "solution": [
          "Setiap elemen $H$ adalah $m(2,3)$.",
          "Peta $m\\mapsto(2m,3m)$ dari $\\mathbb Z$ ke $H$ bijektif dan homomorfik."
        ],
        "conclusion": "$H\\cong\\mathbb Z$ dan mempunyai rank 1."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $\\mathbb Z^n$ torsion-free.",
        "hint": "Jika $kx=0$ dengan $k\\ne0$, lihat setiap koordinat.",
        "answer": "Untuk $x=(x_1,\\ldots,x_n)$, $kx=0$ memberi $kx_i=0$ di $\\mathbb Z$ untuk semua $i$, sehingga seluruh $x_i=0$."
      },
      {
        "prompt": "Tentukan apakah $\\mathbb Q/\\mathbb Z$ mempunyai elemen torsion.",
        "hint": "Perhatikan kelas $1/n+\\mathbb Z$.",
        "answer": "Ya. Kelas $1/n+\\mathbb Z$ mempunyai orde $n$, karena $n(1/n+\\mathbb Z)=\\mathbb Z$."
      },
      {
        "prompt": "Berikan contoh grup abelian tak hingga yang bukan siklik.",
        "hint": "Gunakan $\\mathbb Z\\times\\mathbb Z$.",
        "answer": "$\\mathbb Z^2$ tidak siklik. Satu elemen $(a,b)$ hanya menghasilkan titik pada satu garis integer $k(a,b)$ dan tidak dapat menghasilkan sekaligus $(1,0)$ dan $(0,1)$."
      }
    ]
  },
  "alg-symmetric-groups": {
    "title": "Grup Simetrik dan Notasi Siklus",
    "focus": "Grup simetrik $S_n$ terdiri dari seluruh permutasi $n$ simbol. Notasi siklus mengungkap struktur permutasi, sementara dekomposisi siklus saling lepas memungkinkan orde permutasi dihitung dengan mudah.",
    "definitions": [
      {
        "title": "Grup Simetrik",
        "statement": "$S_n$ adalah grup seluruh bijeksi dari $\\{1,\\ldots,n\\}$ ke dirinya sendiri dengan operasi komposisi."
      },
      {
        "title": "Siklus",
        "statement": "Siklus $(a_1\\ a_2\\ \\cdots\\ a_k)$ memetakan $a_1\\mapsto a_2,\\ldots,a_k\\mapsto a_1$ dan memperbaiki elemen lain. Dua siklus disebut saling lepas jika himpunan elemen yang digerakkannya saling lepas."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Dekomposisi Siklus Saling Lepas",
        "statement": "Setiap permutasi dapat ditulis sebagai hasil kali siklus-siklus saling lepas, dan dekomposisi ini unik sampai urutan siklus serta rotasi penulisan tiap siklus.",
        "proof": [
          "Mulai dari elemen $a$. Ikuti orbit $a,\\sigma(a),\\sigma^2(a),\\ldots$. Karena himpunan hingga dan $\\sigma$ bijektif, orbit kembali pertama kali ke $a$ dan membentuk satu siklus.",
          "Pilih elemen yang belum muncul dan ulangi proses. Orbit yang berbeda tidak beririsan; jika beririsan, bijektivitas memaksa keduanya menjadi orbit yang sama.",
          "Seluruh elemen akhirnya tercakup atau diperbaiki. Orbit tiap elemen ditentukan unik oleh $\\sigma$, sehingga dekomposisi unik sampai urutan dan titik awal penulisan siklus."
        ]
      },
      {
        "kind": "corollary",
        "title": "Orde Permutasi",
        "statement": "Orde permutasi sama dengan KPK panjang siklus-siklus saling lepas pada dekomposisinya.",
        "proof": [
          "Pangkat ke-$m$ dari permutasi adalah identitas tepat ketika setiap siklus kembali ke posisi semula.",
          "Siklus panjang $k$ kembali ke identitas tepat ketika $k\\mid m$.",
          "Bilangan positif terkecil yang habis dibagi seluruh panjang siklus adalah KPK-nya."
        ]
      }
    ],
    "examples": [
      {
        "title": "Mengubah Notasi Dua Baris ke Siklus",
        "problem": "Ubah permutasi $1\\mapsto2,2\\mapsto4,4\\mapsto1,3\\mapsto5,5\\mapsto3$ menjadi notasi siklus.",
        "solution": [
          "Orbit 1 adalah $1\\to2\\to4\\to1$, memberi $(1\\ 2\\ 4)$.",
          "Orbit 3 adalah $3\\to5\\to3$, memberi $(3\\ 5)$."
        ],
        "conclusion": "Permutasi adalah $(1\\ 2\\ 4)(3\\ 5)$."
      },
      {
        "title": "Orde Permutasi",
        "problem": "Tentukan orde $\\sigma=(1\\ 2\\ 3\\ 4)(5\\ 6\\ 7)$. ",
        "solution": [
          "Panjang siklus adalah 4 dan 3.",
          "KPK$(4,3)=12$."
        ],
        "conclusion": "$\\operatorname{ord}(\\sigma)=12$."
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung orde $(1\\ 4\\ 2)(3\\ 5)(6\\ 7\\ 8\\ 9)$.",
        "hint": "Ambil KPK panjang siklus 3,2,4.",
        "answer": "KPK$(3,2,4)=12$."
      },
      {
        "prompt": "Buktikan siklus saling lepas komutatif.",
        "hint": "Periksa aksi pada elemen yang digerakkan masing-masing siklus.",
        "answer": "Jika elemen digerakkan satu siklus, siklus lain memperbaikinya; jika tidak digerakkan keduanya, keduanya memperbaikinya. Hasil komposisi sama pada semua elemen."
      },
      {
        "prompt": "Tentukan banyak elemen $S_n$.",
        "hint": "Hitung banyak bijeksi dari himpunan $n$ elemen ke dirinya sendiri.",
        "answer": "Terdapat $n!$ permutasi, sehingga $|S_n|=n!$."
      }
    ]
  },
  "alg-transpositions-alternating": {
    "title": "Transposisi dan Grup Alternating",
    "focus": "Setiap permutasi dapat ditulis sebagai hasil kali transposisi. Paritas banyak transposisi dalam suatu dekomposisi ternyata invariant, sehingga muncul homomorfisma tanda dan subgrup alternating $A_n$.",
    "definitions": [
      {
        "title": "Transposisi",
        "statement": "Transposisi adalah siklus panjang 2, yaitu permutasi $(ab)$ yang menukar $a$ dan $b$ serta memperbaiki elemen lain."
      },
      {
        "title": "Permutasi Genap dan $A_n$",
        "statement": "Permutasi disebut genap jika dapat ditulis sebagai hasil kali sejumlah genap transposisi. Himpunan permutasi genap disebut grup alternating $A_n$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Paritas Dekomposisi Transposisi Well-Defined",
        "statement": "Tidak ada permutasi yang dapat sekaligus ditulis sebagai hasil kali genap dan ganjil banyak transposisi.",
        "proof": [
          "Definisikan untuk permutasi $\\sigma$ polinom Vandermonde $\\Delta=\\prod_{i<j}(x_i-x_j)$. Permutasi variabel oleh $\\sigma$ mengubah $\\Delta$ menjadi $\\pm\\Delta$.",
          "Satu transposisi menukar dua variabel dan mengubah tanda $\\Delta$. Oleh karena itu hasil kali $k$ transposisi mengubah tanda sebesar $(-1)^k$.",
          "Tanda akhir hanya bergantung pada permutasi $\\sigma$, bukan dekomposisinya. Dua dekomposisi harus mempunyai paritas $k$ yang sama."
        ]
      },
      {
        "kind": "proposition",
        "title": "$A_n$ Normal Berindeks Dua",
        "statement": "Peta tanda $\\operatorname{sgn}:S_n\\to\\{\\pm1\\}$ adalah homomorfisma surjektif dengan kernel $A_n$. Akibatnya $A_n\\trianglelefteq S_n$ dan $[S_n:A_n]=2$.",
        "proof": [
          "Paritas hasil kali permutasi adalah jumlah paritas modulo 2, sehingga $\\operatorname{sgn}(\\sigma\\tau)=\\operatorname{sgn}(\\sigma)\\operatorname{sgn}(\\tau)$.",
          "Identitas bertanda $+1$ dan setiap transposisi bertanda $-1$, sehingga peta surjektif.",
          "Kernel tepat permutasi genap, yaitu $A_n$. Kernel homomorfisma normal, dan image berorde 2 memberi indeks 2."
        ]
      }
    ],
    "examples": [
      {
        "title": "Menulis Siklus sebagai Transposisi",
        "problem": "Tulis $(1\\ 2\\ 3\\ 4)$ sebagai hasil kali transposisi dan tentukan paritasnya.",
        "solution": [
          "$(1\\ 2\\ 3\\ 4)=(1\\ 4)(1\\ 3)(1\\ 2)$.",
          "Terdapat tiga transposisi."
        ],
        "conclusion": "Siklus panjang 4 merupakan permutasi ganjil."
      },
      {
        "title": "Menentukan Keanggotaan $A_5$",
        "problem": "Tentukan apakah $(1\\ 2\\ 3)(4\\ 5)$ berada di $A_5$.",
        "solution": [
          "Siklus 3 dapat ditulis sebagai 2 transposisi, sehingga genap.",
          "Transposisi $(4\\ 5)$ ganjil.",
          "Hasil kali genap dan ganjil adalah ganjil."
        ],
        "conclusion": "Permutasi tersebut tidak berada di $A_5$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan siklus panjang $k$ mempunyai tanda $(-1)^{k-1}$.",
        "hint": "Gunakan $(a_1\\cdots a_k)=(a_1a_k)\\cdots(a_1a_2)$.",
        "answer": "Dekomposisi standar menggunakan tepat $k-1$ transposisi, sehingga tandanya $(-1)^{k-1}$."
      },
      {
        "prompt": "Hitung $|A_n|$ untuk $n\\ge2$.",
        "hint": "Gunakan indeks dua dalam $S_n$.",
        "answer": "$|A_n|=n!/2$."
      },
      {
        "prompt": "Tentukan tanda permutasi dengan tipe siklus $(5)(4)(2)$.",
        "hint": "Kalikan tanda tiap siklus.",
        "answer": "Tandanya $(-1)^4(-1)^3(-1)^1=+1$, sehingga permutasi genap."
      }
    ]
  },
  "alg-simplicity-an": {
    "title": "Kesederhanaan Grup Alternating",
    "focus": "Untuk $n\\ge5$, grup alternating $A_n$ adalah simple, yaitu tidak mempunyai subgrup normal nontrivial yang proper. Hasil ini merupakan salah satu titik penting teori grup hingga dan menjelaskan peran khusus $A_5$ sebagai grup simple nonabelian terkecil.",
    "definitions": [
      {
        "title": "Grup Simple",
        "statement": "Grup $G$ disebut simple jika subgrup normalnya hanya $\\{e\\}$ dan $G$."
      },
      {
        "title": "3-Siklus",
        "statement": "3-siklus adalah permutasi berbentuk $(abc)$. Setiap 3-siklus genap dan berada di $A_n$."
      }
    ],
    "results": [
      {
        "kind": "lemma",
        "title": "$A_n$ Dibangkitkan oleh 3-Siklus",
        "statement": "Untuk $n\\ge3$, setiap elemen $A_n$ dapat ditulis sebagai hasil kali 3-siklus.",
        "proof": [
          "Setiap elemen $A_n$ merupakan hasil kali genap transposisi. Kelompokkan transposisi menjadi pasangan.",
          "Jika pasangan berbagi satu simbol, $(ab)(ac)$ sudah merupakan 3-siklus. Jika pasangan saling lepas, $(ab)(cd)=(acb)(acd)$, yaitu hasil kali dua 3-siklus.",
          "Mengganti setiap pasangan transposisi dengan satu atau dua 3-siklus menulis seluruh permutasi genap sebagai hasil kali 3-siklus."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kesederhanaan $A_n$",
        "statement": "Untuk setiap $n\\ge5$, grup $A_n$ adalah simple.",
        "proof": [
          "Misalkan $N\\trianglelefteq A_n$ nontrivial dan pilih $\\sigma\\in N$, $\\sigma\\ne e$, dengan dukungan sesedikit mungkin. Dengan mengomutasikan $\\sigma$ dengan 3-siklus yang dipilih sesuai bentuk siklus $\\sigma$, diperoleh elemen nonidentitas $[\\sigma,\\tau]=\\sigma\\tau\\sigma^{-1}\\tau^{-1}\\in N$ yang dukungannya lebih kecil kecuali ketika $\\sigma$ sendiri memaksa keberadaan 3-siklus di $N$.",
          "Analisis tipe siklus menunjukkan kasus minimal tersebut menghasilkan suatu 3-siklus dalam $N$. Intinya, siklus panjang sedikitnya 4, dua siklus disjoint, atau produk transposisi genap memungkinkan pemilihan $\\tau$ yang membuat komutator menggerakkan lebih sedikit titik, bertentangan dengan minimalitas.",
          "Semua 3-siklus saling konjugat di $A_n$ untuk $n\\ge5$. Karena $N$ normal dan memuat satu 3-siklus, $N$ memuat seluruh 3-siklus.",
          "Lemma sebelumnya menyatakan 3-siklus membangkitkan $A_n$. Oleh karena itu $N=A_n$. Tidak ada subgrup normal nontrivial proper, sehingga $A_n$ simple."
        ]
      }
    ],
    "examples": [
      {
        "title": "$A_5$ Simple",
        "problem": "Jelaskan konsekuensi kesederhanaan $A_5$ terhadap homomorfisma $\\varphi:A_5\\to H$.",
        "solution": [
          "Kernel homomorfisma adalah subgrup normal $A_5$.",
          "Karena $A_5$ simple, kernel hanya mungkin $\\{e\\}$ atau seluruh $A_5$."
        ],
        "conclusion": "Setiap homomorfisma dari $A_5$ bersifat injektif atau trivial."
      },
      {
        "title": "$A_4$ Tidak Simple",
        "problem": "Tunjukkan $A_4$ tidak simple.",
        "solution": [
          "Pertimbangkan $V=\\{e,(12)(34),(13)(24),(14)(23)\\}$.",
          "$V$ adalah subgrup berorde 4 dan merupakan satu-satunya subgrup yang memuat tiga double-transposition.",
          "Konjugasi mempertahankan tipe siklus, sehingga $V$ normal."
        ],
        "conclusion": "$V\\trianglelefteq A_4$ nontrivial dan proper, sehingga $A_4$ tidak simple."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan 3-siklus merupakan permutasi genap.",
        "hint": "Tuliskan sebagai dua transposisi.",
        "answer": "$(abc)=(ac)(ab)$, yaitu hasil kali dua transposisi."
      },
      {
        "prompt": "Buktikan $A_5$ tidak mempunyai subgrup normal berorde 30.",
        "hint": "Gunakan bahwa subgrup berindeks dua akan menghasilkan homomorfisma ke $\\mathbb Z_2$.",
        "answer": "Jika ada subgrup normal berorde 30, indeksnya 2 dan kernel peta kuosien nontrivial proper. Ini bertentangan dengan kesederhanaan $A_5$."
      },
      {
        "prompt": "Jelaskan mengapa kesederhanaan $A_n$ tidak berlaku untuk $n=4$.",
        "hint": "Cari subgrup normal Klein four.",
        "answer": "$V_4=\\{e,(12)(34),(13)(24),(14)(23)\\}$ normal di $A_4$, nontrivial, dan proper."
      }
    ]
  },
  "alg-normalizers-centralizers": {
    "title": "Normalizer dan Centralizer",
    "focus": "Centralizer mengukur elemen yang komutatif dengan suatu subset, sedangkan normalizer mengukur elemen yang mempertahankan subset tersebut di bawah konjugasi. Keduanya mengubah informasi tentang aksi konjugasi menjadi subgrup konkret.",
    "definitions": [
      {
        "title": "Centralizer",
        "statement": "Untuk $S\\subseteq G$, centralizer $C_G(S)=\\{g\\in G:gs=sg\\text{ untuk semua }s\\in S\\}$. Untuk satu elemen $x$, ditulis $C_G(x)$."
      },
      {
        "title": "Normalizer",
        "statement": "Untuk $H\\le G$, normalizer $N_G(H)=\\{g\\in G:gHg^{-1}=H\\}$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Centralizer dan Normalizer adalah Subgrup",
        "statement": "$C_G(S)\\le G$ untuk setiap $S\\subseteq G$, dan $N_G(H)\\le G$ untuk setiap $H\\le G$.",
        "proof": [
          "Identitas mengomutasi setiap elemen dan menormalkan setiap subgrup. Jika $a,b\\in C_G(S)$, maka untuk $s\\in S$, $(ab^{-1})s=a(b^{-1}s)=a(sb^{-1})=(as)b^{-1}=s(ab^{-1})$, sehingga $ab^{-1}$ tetap di centralizer.",
          "Jika $a,b\\in N_G(H)$, maka $(ab^{-1})H(ab^{-1})^{-1}=a(b^{-1}Hb)a^{-1}=aHa^{-1}=H$.",
          "Uji subgrup satu langkah memberi kedua himpunan adalah subgrup."
        ]
      },
      {
        "kind": "proposition",
        "title": "Normalizer adalah Subgrup Terbesar tempat $H$ Normal",
        "statement": "Jika $H\\le G$, maka $H\\trianglelefteq N_G(H)$, dan jika $H\\trianglelefteq K\\le G$, maka $K\\le N_G(H)$.",
        "proof": [
          "Untuk setiap $h\\in H$, jelas $hHh^{-1}=H$, sehingga $H\\subseteq N_G(H)$. Definisi normalizer sendiri memberi $H$ normal di $N_G(H)$.",
          "Jika $H\\trianglelefteq K$, maka setiap $k\\in K$ memenuhi $kHk^{-1}=H$.",
          "Oleh karena itu setiap $k$ berada di $N_G(H)$, sehingga $K\\le N_G(H)$. Ini membuktikan sifat maksimal."
        ]
      }
    ],
    "examples": [
      {
        "title": "Centralizer di $S_3$",
        "problem": "Tentukan $C_{S_3}((12))$.",
        "solution": [
          "Identitas dan $(12)$ jelas komutatif dengan $(12)$.",
          "3-siklus serta dua transposisi lain tidak komutatif dengan $(12)$."
        ],
        "conclusion": "$C_{S_3}((12))=\\{e,(12)\\}$."
      },
      {
        "title": "Normalizer Subgrup",
        "problem": "Jika $H\\trianglelefteq G$, tentukan $N_G(H)$.",
        "solution": [
          "Normalitas berarti $gHg^{-1}=H$ untuk setiap $g\\in G$.",
          "Dengan definisi normalizer, seluruh $g$ berada di $N_G(H)$."
        ],
        "conclusion": "$N_G(H)=G$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $Z(G)=C_G(G)$.",
        "hint": "Bandingkan definisi pusat dan centralizer seluruh grup.",
        "answer": "Keduanya terdiri tepat dari elemen yang komutatif dengan setiap elemen $G$."
      },
      {
        "prompt": "Tentukan $C_{S_4}((1234))$.",
        "hint": "Centralizer siklus penuh di $S_n$ adalah subgrup yang dibangkitkannya.",
        "answer": "$C_{S_4}((1234))=\\langle(1234)\\rangle$ dan berorde 4."
      },
      {
        "prompt": "Buktikan $H\\le N_G(H)$ untuk setiap $H\\le G$.",
        "hint": "Konjugasi subgrup oleh elemennya sendiri.",
        "answer": "Untuk $h\\in H$, $hHh^{-1}=H$ karena ketertutupan dan invers dalam $H$. Dengan demikian, setiap $h$ menormalkan $H$."
      }
    ]
  },
  "alg-conjugacy-class-equation": {
    "title": "Konjugasi dan Persamaan Kelas",
    "focus": "Aksi konjugasi memecah grup menjadi kelas-kelas konjugasi. Ukuran kelas dikendalikan oleh centralizer, dan persamaan kelas mengubah data lokal tersebut menjadi identitas global yang sangat kuat, khususnya pada $p$-grup.",
    "definitions": [
      {
        "title": "Kelas Konjugasi",
        "statement": "Kelas konjugasi elemen $x\\in G$ adalah $\\operatorname{Cl}_G(x)=\\{gxg^{-1}:g\\in G\\}$."
      },
      {
        "title": "Pusat Grup",
        "statement": "Pusat $Z(G)=\\{z\\in G:zg=gz\\text{ untuk semua }g\\in G\\}$. Elemen pusat mempunyai kelas konjugasi berukuran 1."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Ukuran Kelas Konjugasi",
        "statement": "Jika $G$ hingga, maka $|\\operatorname{Cl}_G(x)|=[G:C_G(x)]$.",
        "proof": [
          "Grup $G$ bertindak pada dirinya melalui konjugasi. Stabilizer $x$ adalah tepat $C_G(x)$ karena $gxg^{-1}=x$ ekuivalen dengan $gx=xg$.",
          "Peta dari koset kiri $G/C_G(x)$ ke orbit $x$ yang diberikan oleh $gC_G(x)\\mapsto gxg^{-1}$ well-defined dan bijektif.",
          "Banyak elemen orbit, yaitu ukuran kelas konjugasi, sama dengan banyak koset stabilizer. Dengan demikian $|\\operatorname{Cl}_G(x)|=[G:C_G(x)]$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Persamaan Kelas",
        "statement": "Jika $G$ hingga dan $x_1,\\ldots,x_r$ wakil kelas konjugasi nontrivial di luar pusat, maka $|G|=|Z(G)|+\\sum_{i=1}^r [G:C_G(x_i)]$.",
        "proof": [
          "Kelas-kelas konjugasi membentuk partisi $G$.",
          "Elemen pusat tepat elemen yang kelas konjugasinya singleton, sehingga seluruh kelas berukuran 1 menyumbang $|Z(G)|$.",
          "Setiap kelas lain mempunyai ukuran $[G:C_G(x_i)]$ berdasarkan teorema orbit-centralizer. Menjumlahkan seluruh ukuran blok partisi memberi persamaan kelas."
        ]
      },
      {
        "kind": "corollary",
        "title": "Pusat $p$-Grup Tidak Trivial",
        "statement": "Jika $|G|=p^n$ dengan $p$ prima dan $n\\ge1$, maka $|Z(G)|$ habis dibagi $p$, khususnya $Z(G)\\ne\\{e\\}$.",
        "proof": [
          "Setiap ukuran kelas konjugasi membagi $|G|$ dan merupakan pangkat $p$.",
          "Kelas nonpusat mempunyai ukuran lebih besar dari 1, sehingga setiap sukunya habis dibagi $p$.",
          "Persamaan kelas memberi $|G|\\equiv|Z(G)|\\pmod p$. Karena $p\\mid|G|$, diperoleh $p\\mid|Z(G)|$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Kelas Konjugasi di $S_3$",
        "problem": "Tentukan kelas-kelas konjugasi $S_3$.",
        "solution": [
          "Konjugasi di $S_n$ mempertahankan tipe siklus.",
          "Tipe-tipe pada $S_3$: identitas, transposisi, dan 3-siklus."
        ],
        "conclusion": "Kelasnya $\\{e\\}$, $\\{(12),(13),(23)\\}$, dan $\\{(123),(132)\\}$."
      },
      {
        "title": "Grup Berorde $p^2$",
        "problem": "Gunakan hasil pusat $p$-grup untuk menunjukkan grup berorde $p^2$ abelian.",
        "solution": [
          "$|Z(G)|$ membagi $p^2$ dan sedikitnya $p$.",
          "Jika $|Z(G)|=p^2$, selesai. Jika $|Z(G)|=p$, maka $G/Z(G)$ berorde $p$ dan siklik.",
          "Jika $G/Z(G)$ siklik, $G$ abelian."
        ],
        "conclusion": "Setiap grup berorde $p^2$ abelian."
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung ukuran kelas konjugasi $x$ jika $|G|=48$ dan $|C_G(x)|=12$.",
        "hint": "Gunakan indeks centralizer.",
        "answer": "Ukuran kelas adalah $48/12=4$."
      },
      {
        "prompt": "Buktikan elemen $x$ berada di pusat jika dan hanya jika kelas konjugasinya berukuran 1.",
        "hint": "Gunakan $gxg^{-1}=x\\iff gx=xg$.",
        "answer": "Kelas singleton berarti setiap konjugat sama dengan $x$, ekuivalen dengan $x$ komutatif dengan semua $g$."
      },
      {
        "prompt": "Jelaskan mengapa ukuran kelas konjugasi selalu membagi orde grup hingga.",
        "hint": "Gunakan rumus kelas-centralizer.",
        "answer": "Ukuran kelas adalah indeks subgrup $C_G(x)$, yaitu $|G|/|C_G(x)|$."
      }
    ]
  },
  "alg-sylow-theorems": {
    "title": "Tiga Teorema Sylow",
    "focus": "Teorema Sylow memperhalus Teorema Lagrange untuk subgrup berorde pangkat prima maksimum. Ketiga teorema memberi eksistensi, konjugasi, dan pembatasan jumlah subgrup Sylow.",
    "definitions": [
      {
        "title": "Subgrup Sylow $p$",
        "statement": "Jika $|G|=p^n m$ dengan $p\\nmid m$, subgrup berorde $p^n$ disebut subgrup Sylow $p$."
      },
      {
        "title": "Bilangan Sylow",
        "statement": "Banyak subgrup Sylow $p$ dalam $G$ ditulis $n_p$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Teorema Sylow I",
        "statement": "Jika $|G|=p^n m$ dengan $p\\nmid m$, maka $G$ mempunyai subgrup berorde $p^n$.",
        "proof": [
          "Salah satu pembuktian menggunakan aksi $G$ pada himpunan subset berukuran $p^n$ atau induksi melalui persamaan kelas. Pada langkah induksi, jika $p$ membagi orde pusat, ambil elemen pusat berorde $p$ dan turunkan masalah ke kuosien.",
          "Jika $p$ tidak membagi orde pusat, persamaan kelas memaksa adanya centralizer proper yang ordonya masih mengandung faktor $p^n$. Terapkan hipotesis induksi pada centralizer tersebut.",
          "Pada kedua kasus diperoleh subgrup berorde pangkat $p$ maksimum $p^n$. Dengan demikian subgrup Sylow $p$ selalu ada."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Sylow II",
        "statement": "Setiap dua subgrup Sylow $p$ dari $G$ saling konjugat. Setiap $p$-subgrup $Q$ termuat dalam suatu subgrup Sylow $p$.",
        "proof": [
          "Biarkan subgrup Sylow $P$ bertindak pada himpunan koset kiri $G/Q$ dengan perkalian kiri, dengan $Q$ suatu $p$-subgrup.",
          "Orbit-orbit mempunyai ukuran pangkat $p$. Karena indeks yang relevan tidak seluruhnya habis dibagi $p$, terdapat koset tetap $gQ$ untuk aksi subgrup yang sesuai.",
          "Kondisi tetap memberi $P\\subseteq gQg^{-1}$ atau, setelah menempatkan arah aksi sesuai ukuran, $Q\\subseteq gPg^{-1}$. Jika $Q$ juga Sylow, ukuran sama memaksa kesamaan. Oleh karena itu semua Sylow saling konjugat."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Sylow III",
        "statement": "Bilangan $n_p$ memenuhi $n_p\\equiv1\\pmod p$ dan $n_p\\mid m$, ketika $|G|=p^n m$ dan $p\\nmid m$.",
        "proof": [
          "Aksi konjugasi $G$ pada himpunan subgrup Sylow $p$ bersifat transitif berdasarkan Teorema Sylow II. Stabilizer suatu $P$ adalah $N_G(P)$, sehingga $n_p=[G:N_G(P)]$. Karena $P\\le N_G(P)$, indeks tersebut membagi $m$.",
          "Biarkan $P$ sendiri bertindak dengan konjugasi pada himpunan subgrup Sylow $p$. Subgrup $P$ merupakan titik tetap.",
          "Orbit lain mempunyai ukuran kelipatan $p$. Oleh karena itu jumlah total titik $n_p$ kongruen dengan banyak titik tetap modulo $p$. Analisis normalizer dalam $P$ memberi hanya $P$ sebagai titik tetap, sehingga $n_p\\equiv1\\pmod p$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Subgrup Sylow pada Orde 12",
        "problem": "Tentukan kemungkinan $n_3$ untuk grup berorde 12.",
        "solution": [
          "$12=3\\cdot4$.",
          "$n_3\\mid4$ dan $n_3\\equiv1\\pmod3$.",
          "Pembagi 4 yang kongruen 1 modulo 3 adalah 1 dan 4."
        ],
        "conclusion": "$n_3\\in\\{1,4\\}$."
      },
      {
        "title": "Subgrup Sylow Normal",
        "problem": "Jika $|G|=21$, buktikan subgrup Sylow 7 normal.",
        "solution": [
          "$n_7\\mid3$ dan $n_7\\equiv1\\pmod7$.",
          "Satu-satunya kemungkinan adalah $n_7=1$."
        ],
        "conclusion": "Subgrup Sylow 7 unik, sehingga normal."
      }
    ],
    "exercises": [
      {
        "prompt": "Jika $|G|=40$, tentukan kemungkinan $n_5$.",
        "hint": "Gunakan $n_5\\mid8$ dan $n_5\\equiv1\\pmod5$.",
        "answer": "Kemungkinan adalah $n_5=1$ atau $8$."
      },
      {
        "prompt": "Buktikan subgrup Sylow unik jika dan hanya jika normal.",
        "hint": "Gunakan konjugasi semua subgrup Sylow.",
        "answer": "Jika unik, setiap konjugatnya tetap subgrup Sylow dan harus sama, sehingga normal. Jika normal, semua konjugat sama dengannya; Teorema Sylow II menyatakan semua Sylow adalah konjugat, sehingga hanya satu."
      },
      {
        "prompt": "Jika $|G|=56$, tentukan kemungkinan $n_7$.",
        "hint": "Gunakan $n_7\\mid8$ dan $n_7\\equiv1\\pmod7$.",
        "answer": "Kemungkinan $n_7=1$ atau $8$."
      }
    ]
  },
  "alg-sylow-applications": {
    "title": "Penerapan Teorema Sylow",
    "focus": "Pembatasan aritmetika pada jumlah subgrup Sylow sering memaksa keberadaan subgrup normal, menolak keberadaan grup simple, atau mengontrol interaksi antar-subgrup. Bagian ini melatih strategi penggunaan ketiga Teorema Sylow.",
    "definitions": [
      {
        "title": "Subgrup Sylow Unik",
        "statement": "Subgrup Sylow $p$ disebut unik jika $n_p=1$. Keunikan ekuivalen dengan normalitas subgrup Sylow tersebut."
      },
      {
        "title": "Argumen Penghitungan Elemen",
        "statement": "Jika dua subgrup berorde prima berbeda, irisan keduanya trivial. Fakta ini memungkinkan banyak elemen dihitung dari keluarga subgrup Sylow yang berbeda."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Grup Berorde $pq$",
        "statement": "Misalkan $p<q$ prima dan $p\\nmid(q-1)$. Setiap grup $G$ berorde $pq$ mempunyai subgrup Sylow $q$ normal; jika juga $q\\nmid(p-1)$ yang otomatis untuk $p<q$, struktur sangat dibatasi.",
        "proof": [
          "$n_q\\mid p$ dan $n_q\\equiv1\\pmod q$. Karena $n_q$ hanya mungkin 1 atau $p<q$, satu-satunya kemungkinan adalah $n_q=1$.",
          "Dengan demikian subgrup Sylow $q$ unik dan normal.",
          "Untuk subgrup Sylow $p$, $n_p\\mid q$ dan $n_p\\equiv1\\pmod p$. Jika $p\\nmid(q-1)$, nilai $q$ tidak memenuhi kongruensi, sehingga $n_p=1$ juga. Kedua subgrup normal dengan irisan trivial dan hasil kalinya seluruh $G$, sehingga $G\\cong\\mathbb Z_p\\times\\mathbb Z_q\\cong\\mathbb Z_{pq}$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Grup Berorde 15 Siklik",
        "statement": "Setiap grup berorde 15 bersifat siklik.",
        "proof": [
          "$n_5\\mid3$ dan $n_5\\equiv1\\pmod5$, sehingga $n_5=1$. Demikian pula $n_3\\mid5$ dan $n_3\\equiv1\\pmod3$; kemungkinan 1 atau 10, tetapi 10 tidak membagi 5, sehingga $n_3=1$.",
          "Subgrup Sylow 3 dan Sylow 5 keduanya normal, irisan trivial, dan produk mempunyai orde $3\\cdot5=15$, sehingga seluruh grup.",
          "Produk langsung $\\mathbb Z_3\\times\\mathbb Z_5$ siklik karena 3 dan 5 relatif prima. Dengan demikian $G\\cong\\mathbb Z_{15}$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Tidak Ada Grup Simple Berorde 30",
        "problem": "Tunjukkan setiap grup berorde 30 tidak simple.",
        "solution": [
          "$n_5\\mid6$ dan $n_5\\equiv1\\pmod5$, sehingga $n_5=1$ atau 6.",
          "$n_3\\mid10$ dan $n_3\\equiv1\\pmod3$, sehingga $n_3=1$ atau 10.",
          "Jika keduanya tidak normal, 6 subgrup orde 5 menyumbang 24 elemen nonidentitas dan 10 subgrup orde 3 menyumbang 20 elemen nonidentitas, sudah melebihi 29 elemen nonidentitas grup."
        ],
        "conclusion": "Sedikitnya satu subgrup Sylow normal, sehingga grup tidak simple."
      },
      {
        "title": "Grup Berorde 28",
        "problem": "Tentukan kemungkinan jumlah subgrup Sylow 7.",
        "solution": [
          "$n_7\\mid4$.",
          "$n_7\\equiv1\\pmod7$."
        ],
        "conclusion": "Satu-satunya kemungkinan adalah $n_7=1$, sehingga Sylow 7 normal."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan setiap grup berorde 45 mempunyai subgrup normal nontrivial.",
        "hint": "Analisis $n_5$.",
        "answer": "$n_5\\mid9$ dan $n_5\\equiv1\\pmod5$, sehingga satu-satunya kemungkinan adalah $n_5=1$ atau 6? Karena 6 tidak membagi 9, diperoleh $n_5=1$. Dengan demikian, Sylow 5 normal."
      },
      {
        "prompt": "Jika $|G|=66$, buktikan subgrup Sylow 11 normal.",
        "hint": "Gunakan $n_{11}\\mid6$ dan kongruensi modulo 11.",
        "answer": "Pembagi 6 hanya 1,2,3,6; yang kongruen 1 modulo 11 hanya 1. Dengan demikian, $n_{11}=1$."
      },
      {
        "prompt": "Tentukan kemungkinan $n_2$ untuk grup berorde 24.",
        "hint": "Gunakan $n_2\\mid3$ dan $n_2\\equiv1\\pmod2$.",
        "answer": "Kemungkinan $n_2=1$ atau $3$."
      }
    ]
  },
  "alg-small-groups": {
    "title": "Klasifikasi Grup Berorde Kecil",
    "focus": "Klasifikasi grup berorde kecil menggabungkan Teorema Lagrange, Sylow, grup siklik, produk langsung, dan aksi konjugasi. Tujuannya bukan sekadar menghafal daftar, tetapi memahami alasan mengapa hanya beberapa tipe struktur yang mungkin.",
    "definitions": [
      {
        "title": "Klasifikasi sampai Isomorfisma",
        "statement": "Mengklasifikasikan grup berorde $n$ berarti menentukan semua kelas isomorfisma grup dengan tepat $n$ elemen."
      },
      {
        "title": "Tipe Abelian dan Nonabelian",
        "statement": "Untuk orde tertentu, grup abelian dapat diklasifikasikan dengan Teorema Fundamental Grup Abelian Hingga; grup nonabelian memerlukan analisis tambahan, misalnya melalui Sylow atau presentasi."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Grup Berorde $p^2$",
        "statement": "Untuk prima $p$, setiap grup berorde $p^2$ abelian dan isomorfik dengan $\\mathbb Z_{p^2}$ atau $\\mathbb Z_p\\times\\mathbb Z_p$.",
        "proof": [
          "Persamaan kelas untuk $p$-grup memberi $Z(G)\\ne\\{e\\}$. Karena $|Z(G)|$ membagi $p^2$, ukurannya $p$ atau $p^2$.",
          "Jika pusat seluruh $G$, grup abelian. Jika $|Z(G)|=p$, kuosien $G/Z(G)$ berorde $p$ dan siklik; grup dengan kuosien oleh pusat yang siklik harus abelian, sehingga kasus ini juga menghasilkan grup abelian.",
          "Teorema Fundamental Grup Abelian Hingga untuk orde $p^2$ memberi tepat dua tipe: $\\mathbb Z_{p^2}$ dan $\\mathbb Z_p^2$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Grup Berorde 6",
        "statement": "Setiap grup berorde 6 isomorfik dengan $\\mathbb Z_6$ atau $S_3$.",
        "proof": [
          "Jika grup abelian, klasifikasi grup abelian hingga memberi $\\mathbb Z_6$ karena 2 dan 3 relatif prima.",
          "Jika nonabelian, Sylow memberi subgrup $P_3$ normal berorde 3 dan subgrup $P_2$ berorde 2. Pilih $r$ generator $P_3$ dan $s$ generator $P_2$.",
          "Konjugasi oleh $s$ memberi automorfisma nontrivial pada $P_3$, sehingga $srs^{-1}=r^{-1}$. Presentasi $r^3=s^2=e$, $srs=r^{-1}$ adalah presentasi $S_3$. Dengan demikian tidak ada tipe ketiga."
        ]
      }
    ],
    "examples": [
      {
        "title": "Grup Berorde 4",
        "problem": "Daftarkan grup berorde 4 sampai isomorfisma.",
        "solution": [
          "Semua grup berorde $2^2$ abelian.",
          "Partisi eksponen 2 adalah 2 dan 1+1."
        ],
        "conclusion": "Tipe-tipe adalah $\\mathbb Z_4$ dan $\\mathbb Z_2\\times\\mathbb Z_2$."
      },
      {
        "title": "Grup Berorde 8",
        "problem": "Sebutkan lima tipe grup berorde 8.",
        "solution": [
          "Tiga tipe abelian: $\\mathbb Z_8$, $\\mathbb Z_4\\times\\mathbb Z_2$, dan $\\mathbb Z_2^3$.",
          "Dua tipe nonabelian klasik: grup dihedral $D_4$ dan grup quaternion $Q_8$."
        ],
        "conclusion": "Terdapat lima kelas isomorfisma grup berorde 8."
      }
    ],
    "exercises": [
      {
        "prompt": "Klasifikasikan grup berorde 9.",
        "hint": "Gunakan hasil grup berorde $p^2$.",
        "answer": "Tipe-tipe adalah $\\mathbb Z_9$ dan $\\mathbb Z_3\\times\\mathbb Z_3$."
      },
      {
        "prompt": "Buktikan grup berorde 10 mempunyai subgrup normal berorde 5.",
        "hint": "Gunakan $n_5\\mid2$ dan $n_5\\equiv1\\pmod5$.",
        "answer": "Satu-satunya kemungkinan adalah $n_5=1$."
      },
      {
        "prompt": "Jelaskan perbedaan utama $D_4$ dan $Q_8$ melalui elemen berorde 2.",
        "hint": "Hitung banyak elemen orde 2.",
        "answer": "$D_4$ mempunyai lima elemen berorde 2, sedangkan $Q_8$ hanya mempunyai satu, yaitu $-1$. Oleh karena itu keduanya tidak isomorfik."
      }
    ]
  },
  "alg-rings": {
    "title": "Ring",
    "focus": "Ring memiliki dua operasi: penjumlahan yang membentuk grup abelian dan perkalian yang asosiatif serta distributif terhadap penjumlahan. Struktur ring menyatukan integer, kelas residu, matriks, fungsi, dan polinom.",
    "definitions": [
      {
        "title": "Ring",
        "statement": "Himpunan $R$ dengan operasi $+$ dan $\\cdot$ disebut ring jika $(R,+)$ grup abelian, perkalian asosiatif, dan berlaku $a(b+c)=ab+ac$ serta $(a+b)c=ac+bc$. Jika terdapat $1_R$ dengan $1_Ra=a1_R=a$, ring disebut mempunyai identitas."
      },
      {
        "title": "Ring Komutatif",
        "statement": "Ring disebut komutatif jika $ab=ba$ untuk setiap $a,b\\in R$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Aturan Nol dan Negatif pada Ring",
        "statement": "Untuk setiap $a,b\\in R$, berlaku $a0=0a=0$, $a(-b)=-(ab)$, $(-a)b=-(ab)$, dan $(-a)(-b)=ab$.",
        "proof": [
          "$a0=a(0+0)=a0+a0$. Tambahkan invers aditif $-(a0)$ pada kedua ruas untuk memperoleh $a0=0$. Argumen kanan serupa.",
          "$0=a(b+(-b))=ab+a(-b)$, sehingga $a(-b)$ adalah invers aditif $ab$, yaitu $-(ab)$. Rumus $(-a)b=-(ab)$ serupa.",
          "Terapkan rumus negatif dua kali: $(-a)(-b)=-((-a)b)=-(-(ab))=ab$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Perkalian Integer sebagai Penjumlahan Berulang di Ring Beridentitas",
        "statement": "Untuk $n\\in\\mathbb Z$ dan $a\\in R$, elemen $(n1_R)a$ sama dengan penjumlahan $a$ sebanyak $n$ kali untuk $n>0$, dengan perluasan alami untuk $n\\le0$.",
        "proof": [
          "Untuk $n>0$, distributivitas memberi $(1_R+\\cdots+1_R)a=a+\\cdots+a$.",
          "Untuk $n=0$, $(0_R)a=0_R$. Untuk $n<0$, gunakan aturan negatif yang telah dibuktikan.",
          "Dengan demikian embedding integer melalui kelipatan $1_R$ konsisten dengan struktur aditif ring."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ring Integer",
        "problem": "Verifikasi bahwa $\\mathbb Z$ adalah ring komutatif dengan identitas.",
        "solution": [
          "$(\\mathbb Z,+)$ grup abelian.",
          "Perkalian integer asosiatif, komutatif, dan distributif terhadap penjumlahan.",
          "Identitas multiplikatif adalah 1."
        ],
        "conclusion": "$\\mathbb Z$ merupakan ring komutatif beridentitas."
      },
      {
        "title": "Ring Matriks",
        "problem": "Periksa apakah $M_2(\\mathbb R)$ komutatif.",
        "solution": [
          "Penjumlahan matriks membentuk grup abelian dan perkalian matriks asosiatif serta distributif.",
          "Ambil matriks elementer $E_{12}$ dan $E_{21}$. Produk $E_{12}E_{21}=E_{11}$ sedangkan $E_{21}E_{12}=E_{22}$."
        ],
        "conclusion": "$M_2(\\mathbb R)$ adalah ring beridentitas tetapi tidak komutatif."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $(-1_R)a=-a$ pada ring beridentitas.",
        "hint": "Gunakan $(1_R+(-1_R))a=0a$.",
        "answer": "$a+(-1_R)a=0$, sehingga $(-1_R)a$ adalah invers aditif $a$, yaitu $-a$."
      },
      {
        "prompt": "Tentukan apakah $2\\mathbb Z$ merupakan ring terhadap operasi biasa.",
        "hint": "Periksa ketertutupan dan keberadaan identitas jika definisi mensyaratkannya.",
        "answer": "Terhadap definisi ring tanpa harus memiliki identitas, $2\\mathbb Z$ adalah ring. Ia tidak mempunyai identitas multiplikatif internal."
      },
      {
        "prompt": "Berikan contoh ring nonkomutatif.",
        "hint": "Gunakan matriks ukuran paling kecil yang menunjukkan ketakkomutatifan.",
        "answer": "$M_2(\\mathbb R)$ nonkomutatif karena, misalnya, $E_{12}E_{21}=E_{11}\\ne E_{22}=E_{21}E_{12}$."
      }
    ]
  },
  "alg-ring-properties": {
    "title": "Sifat Dasar Ring",
    "focus": "Setelah aksioma ring ditetapkan, konsep unit, pembagi nol, nilpoten, dan idempoten menjelaskan perilaku perkalian. Konsep-konsep ini membedakan ring yang memiliki pembatalan multiplikatif dari ring yang tidak memilikinya.",
    "definitions": [
      {
        "title": "Unit dan Grup Unit",
        "statement": "Pada ring beridentitas, $u\\in R$ disebut unit jika terdapat $v\\in R$ dengan $uv=vu=1_R$. Himpunan unit ditulis $R^\\times$."
      },
      {
        "title": "Pembagi Nol, Nilpoten, dan Idempoten",
        "statement": "Elemen tak nol $a$ disebut pembagi nol jika terdapat $b\\ne0$ dengan $ab=0$ atau $ba=0$. Elemen $a$ nilpoten jika $a^n=0$ untuk suatu $n\\ge1$, dan idempoten jika $a^2=a$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Unit Tidak Dapat Menjadi Pembagi Nol",
        "statement": "Jika $u$ unit pada ring beridentitas dan $ux=0$, maka $x=0$; serupa jika $xu=0$.",
        "proof": [
          "Karena $u$ unit, terdapat $u^{-1}$ dengan $u^{-1}u=1$.",
          "Dari $ux=0$, kalikan dari kiri dengan $u^{-1}$ untuk memperoleh $x=(u^{-1}u)x=u^{-1}0=0$.",
          "Argumen kanan menggunakan perkalian dari kanan dengan $u^{-1}$. Dengan demikian unit tidak menjadi pembagi nol nontrivial."
        ]
      },
      {
        "kind": "proposition",
        "title": "Elemen Nilpoten Menghasilkan Unit",
        "statement": "Jika $a^n=0$, maka $1-a$ adalah unit dengan invers $1+a+\\cdots+a^{n-1}$.",
        "proof": [
          "Kalikan $(1-a)(1+a+\\cdots+a^{n-1})$. Suku-suku tengah saling menghapus secara teleskopik.",
          "Hasilnya $1-a^n=1$ karena $a^n=0$.",
          "Perkalian dalam urutan sebaliknya memberi hasil yang sama karena seluruh faktor adalah polinom dalam $a$. Dengan demikian invers yang dinyatakan valid."
        ]
      }
    ],
    "examples": [
      {
        "title": "Unit di $\\mathbb Z_{12}$",
        "problem": "Tentukan unit dalam $\\mathbb Z_{12}$.",
        "solution": [
          "Kelas $[a]$ unit tepat ketika $\\gcd(a,12)=1$.",
          "Residu yang relatif prima dengan 12 adalah 1,5,7,11."
        ],
        "conclusion": "$\\mathbb Z_{12}^\\times=\\{[1],[5],[7],[11]\\}$."
      },
      {
        "title": "Pembagi Nol",
        "problem": "Tunjukkan $[3]$ pembagi nol di $\\mathbb Z_{12}$.",
        "solution": [
          "$[3]\\ne[0]$ dan $[4]\\ne[0]$.",
          "$[3][4]=[12]=[0]$."
        ],
        "conclusion": "$[3]$ dan $[4]$ adalah pembagi nol."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan semua idempoten di $\\mathbb Z_6$.",
        "hint": "Selesaikan $x^2\\equiv x\\pmod6$.",
        "answer": "Uji residu memberi idempoten $[0],[1],[3],[4]$."
      },
      {
        "prompt": "Buktikan elemen nilpoten nonnol adalah pembagi nol.",
        "hint": "Jika $a^n=0$, pilih pangkat terkecil.",
        "answer": "Ambil $n$ minimum dengan $a^n=0$. Jika $n>1$, maka $a^{n-1}\\ne0$ tetapi $a\\,a^{n-1}=0$, sehingga $a$ pembagi nol."
      },
      {
        "prompt": "Buktikan unit ring membentuk grup terhadap perkalian.",
        "hint": "Periksa identitas, ketertutupan, invers, dan asosiativitas.",
        "answer": "Identitas ring adalah unit; hasil kali dua unit $u,v$ mempunyai invers $v^{-1}u^{-1}$; invers unit tetap unit; asosiativitas diwarisi dari ring. Dengan demikian, $R^\\times$ grup."
      }
    ]
  },
  "alg-subrings": {
    "title": "Subring",
    "focus": "Subring adalah subset ring yang tertutup terhadap operasi ring dan tetap membentuk ring dengan operasi yang diwarisi. Uji subring memperpendek verifikasi dengan memanfaatkan struktur ring induk.",
    "definitions": [
      {
        "title": "Subring",
        "statement": "Subset $S\\subseteq R$ disebut subring jika $S$ merupakan ring terhadap penjumlahan dan perkalian yang diwarisi dari $R$."
      },
      {
        "title": "Subring yang Dibangkitkan",
        "statement": "Subring yang dibangkitkan oleh subset $A\\subseteq R$ adalah irisan seluruh subring $R$ yang memuat $A$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Uji Subring",
        "statement": "Subset tak kosong $S\\subseteq R$ adalah subring jika untuk setiap $a,b\\in S$ berlaku $a-b\\in S$ dan $ab\\in S$.",
        "proof": [
          "Jika $S$ subring, kedua kondisi mengikuti ketertutupan terhadap penjumlahan, invers aditif, dan perkalian.",
          "Sebaliknya, syarat $a-b\\in S$ membuat $S$ menjadi subgrup aditif berdasarkan uji subgrup. Syarat $ab\\in S$ memberi ketertutupan perkalian.",
          "Asosiativitas dan distributivitas diwarisi dari $R$. Dengan demikian $S$ merupakan ring."
        ]
      },
      {
        "kind": "proposition",
        "title": "Irisan Subring",
        "statement": "Irisan sebarang keluarga subring dari $R$ adalah subring.",
        "proof": [
          "Semua subring memuat nol, sehingga irisan tidak kosong.",
          "Jika $a,b$ berada pada irisan, pada setiap subring berlaku $a-b$ dan $ab$ juga berada di subring tersebut.",
          "Dengan demikian $a-b$ dan $ab$ berada pada irisan. Uji subring memberi hasil."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z$ sebagai Subring $\\mathbb Q$",
        "problem": "Buktikan $\\mathbb Z$ subring dari $\\mathbb Q$.",
        "solution": [
          "$0\\in\\mathbb Z$.",
          "Jika $a,b\\in\\mathbb Z$, maka $a-b\\in\\mathbb Z$ dan $ab\\in\\mathbb Z$."
        ],
        "conclusion": "$\\mathbb Z\\le_{\\text{ring}}\\mathbb Q$."
      },
      {
        "title": "Bilangan Gaussian",
        "problem": "Tunjukkan $\\mathbb Z[i]=\\{a+bi:a,b\\in\\mathbb Z\\}$ subring dari $\\mathbb C$.",
        "solution": [
          "Selisih dua bilangan Gaussian tetap berbentuk integer plus integer kali $i$.",
          "Produk $(a+bi)(c+di)=(ac-bd)+(ad+bc)i$ juga tetap dalam bentuk yang sama."
        ],
        "conclusion": "$\\mathbb Z[i]$ adalah subring $\\mathbb C$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $n\\mathbb Z$ adalah subring dari $\\mathbb Z$ untuk setiap $n\\ge1$.",
        "hint": "Gunakan uji subring.",
        "answer": "Jika $na,nb\\in n\\mathbb Z$, maka $na-nb=n(a-b)$ dan $(na)(nb)=n(nab)$ berada di $n\\mathbb Z$."
      },
      {
        "prompt": "Tentukan apakah $\\mathbb Q$ subring dari $\\mathbb R$.",
        "hint": "Periksa selisih dan hasil kali rasional.",
        "answer": "Ya, rasional tertutup terhadap selisih dan perkalian."
      },
      {
        "prompt": "Buktikan irisan dua subring beridentitas yang sama kembali memuat identitas tersebut.",
        "hint": "Identitas yang sama berada pada keduanya.",
        "answer": "Jika $1_R\\in S$ dan $1_R\\in T$, maka $1_R\\in S\\cap T$. Bersama uji subring, irisan merupakan subring beridentitas yang sama."
      }
    ]
  },
  "alg-domains-fields": {
    "title": "Domain Integral dan Field",
    "focus": "Domain integral menghilangkan pembagi nol dari ring komutatif beridentitas, sedangkan field menuntut setiap elemen tak nol mempunyai invers. Perbedaan ini mengontrol validitas hukum pembatalan dan kemungkinan melakukan pembagian.",
    "definitions": [
      {
        "title": "Domain Integral",
        "statement": "Domain integral adalah ring komutatif beridentitas $1\\ne0$ yang tidak mempunyai pembagi nol."
      },
      {
        "title": "Field",
        "statement": "Field adalah ring komutatif beridentitas $1\\ne0$ yang setiap elemen tak nolnya merupakan unit."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Field adalah Domain Integral",
        "statement": "Setiap field merupakan domain integral.",
        "proof": [
          "Misalkan $F$ field dan $ab=0$ dengan $a\\ne0$.",
          "Karena $a$ mempunyai invers, kalikan persamaan dengan $a^{-1}$ untuk memperoleh $b=a^{-1}0=0$.",
          "Dengan demikian tidak ada dua elemen tak nol yang hasil kalinya nol. Ring field juga komutatif dan beridentitas, sehingga merupakan domain integral."
        ]
      },
      {
        "kind": "theorem",
        "title": "Domain Integral Hingga adalah Field",
        "statement": "Setiap domain integral berhingga merupakan field.",
        "proof": [
          "Ambil $a\\ne0$ dalam domain integral hingga $R$. Definisikan $L_a:R\\to R$ dengan $L_a(x)=ax$.",
          "Jika $L_a(x)=L_a(y)$, maka $a(x-y)=0$. Tidak adanya pembagi nol dan $a\\ne0$ memberi $x-y=0$, sehingga $L_a$ injektif.",
          "Pada himpunan hingga, injektif berarti surjektif. Karena $1\\in R$, ada $x$ dengan $ax=1$. Komutativitas memberi $xa=1$, sehingga setiap $a\\ne0$ invertibel."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z$ Domain tetapi Bukan Field",
        "problem": "Jelaskan status $\\mathbb Z$.",
        "solution": [
          "$\\mathbb Z$ komutatif, beridentitas, dan tidak mempunyai pembagi nol.",
          "Elemen 2 tidak mempunyai invers di $\\mathbb Z$."
        ],
        "conclusion": "$\\mathbb Z$ adalah domain integral tetapi bukan field."
      },
      {
        "title": "$\\mathbb Z_p$",
        "problem": "Tentukan kapan $\\mathbb Z_n$ merupakan field.",
        "solution": [
          "Jika $n=p$ prima, setiap $1\\le a<p$ relatif prima dengan $p$ dan mempunyai invers modulo $p$.",
          "Jika $n$ komposit, tulis $n=ab$ dengan $1<a,b<n$. Kelas $[a]$ dan $[b]$ nonnol tetapi hasil kalinya nol."
        ],
        "conclusion": "$\\mathbb Z_n$ field jika dan hanya jika $n$ prima."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan hukum pembatalan pada domain integral: jika $a\\ne0$ dan $ab=ac$, maka $b=c$.",
        "hint": "Pindahkan semua ke satu ruas.",
        "answer": "$a(b-c)=0$. Karena tidak ada pembagi nol dan $a\\ne0$, diperoleh $b-c=0$, sehingga $b=c$."
      },
      {
        "prompt": "Tentukan apakah $\\mathbb Z_{15}$ domain integral.",
        "hint": "Cari pembagi nol.",
        "answer": "Tidak. $[3][5]=[0]$ dengan kedua faktor nonnol."
      },
      {
        "prompt": "Berikan contoh field hingga berorde 5.",
        "hint": "Gunakan kelas residu modulo prima.",
        "answer": "$\\mathbb Z_5$ adalah field dengan lima elemen."
      }
    ]
  },
  "alg-characteristic": {
    "title": "Karakteristik Ring",
    "focus": "Karakteristik ring mengukur berapa kali identitas aditif harus dijumlahkan sebelum kembali ke nol. Pada domain integral, karakteristik hanya mungkin nol atau bilangan prima, dan karakteristik menentukan prime subfield.",
    "definitions": [
      {
        "title": "Karakteristik Ring",
        "statement": "Untuk ring beridentitas $R$, karakteristik $\\operatorname{char}(R)$ adalah orde aditif $1_R$ jika hingga, dan 0 jika $1_R$ mempunyai orde aditif tak hingga."
      },
      {
        "title": "Prime Subring",
        "statement": "Subring terkecil dari ring beridentitas $R$ yang memuat $1_R$ terdiri dari semua kelipatan integer $n1_R$ dan isomorfik dengan $\\mathbb Z$ jika karakteristik 0 atau $\\mathbb Z_n$ jika karakteristik $n>0$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Karakteristik Domain Integral",
        "statement": "Jika $R$ domain integral, maka $\\operatorname{char}(R)=0$ atau suatu bilangan prima.",
        "proof": [
          "Diandaikan karakteristik positif $n$ dan $n$ komposit, $n=ab$ dengan $1<a,b<n$.",
          "Di dalam $R$, $(a1_R)(b1_R)=(ab)1_R=n1_R=0$.",
          "Minimalitas $n$ sebagai orde aditif $1_R$ memastikan $a1_R\\ne0$ dan $b1_R\\ne0$, sehingga muncul pembagi nol. Ini bertentangan dengan domain integral. Oleh karena itu $n$ harus prima."
        ]
      },
      {
        "kind": "proposition",
        "title": "Karakteristik Membagi Orde Ring Hingga",
        "statement": "Jika $R$ ring hingga beridentitas, maka $\\operatorname{char}(R)$ membagi $|R|$.",
        "proof": [
          "Karakteristik adalah orde elemen $1_R$ dalam grup aditif $(R,+)$.",
          "Teorema Lagrange pada grup aditif menyatakan orde setiap elemen membagi orde grup.",
          "Orde grup aditif sama dengan banyak elemen ring, sehingga $\\operatorname{char}(R)\\mid|R|$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Karakteristik $\\mathbb Z_n$",
        "problem": "Tentukan karakteristik $\\mathbb Z_n$.",
        "solution": [
          "Identitas multiplikatifnya $[1]$.",
          "$k[1]=[0]$ tepat ketika $n\\mid k$.",
          "Bilangan positif terkecil adalah $n$."
        ],
        "conclusion": "$\\operatorname{char}(\\mathbb Z_n)=n$."
      },
      {
        "title": "Karakteristik Field Rasional",
        "problem": "Tentukan karakteristik $\\mathbb Q$.",
        "solution": [
          "Menjumlahkan $1$ sebanyak berapa pun positif tidak pernah menghasilkan 0 di $\\mathbb Q$.",
          "Orde aditif 1 tak hingga."
        ],
        "conclusion": "$\\operatorname{char}(\\mathbb Q)=0$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan karakteristik $M_3(\\mathbb Z_5)$.",
        "hint": "Perhatikan identitas matriks $I_3$.",
        "answer": "$5I_3=0$ dan tidak ada bilangan positif lebih kecil yang mematikannya, sehingga karakteristik 5."
      },
      {
        "prompt": "Buktikan field berkarakteristik positif mempunyai karakteristik prima.",
        "hint": "Field adalah domain integral.",
        "answer": "Setiap field domain integral; teorema karakteristik domain integral memberi karakteristik positif harus prima."
      },
      {
        "prompt": "Jika ring beridentitas mempunyai 21 elemen, tentukan kemungkinan karakteristiknya.",
        "hint": "Karakteristik membagi 21.",
        "answer": "Kemungkinan karakteristik positif adalah pembagi 21: 1,3,7,21, tetapi karakteristik 1 hanya untuk ring nol dengan $1=0$, yang tidak mungkin jika 21 elemen. Dengan demikian, kemungkinan 3,7,21; jika ring domain, hanya 3 atau 7."
      }
    ]
  }
};

export const abstractAlgebraContentB = buildAlgebraContent(specs);
