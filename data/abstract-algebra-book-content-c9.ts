import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-ideals": {
    "title": "Ideal",
    "focus": "Ideal adalah subring aditif yang menyerap perkalian oleh elemen ring. Ideal berperan pada teori ring seperti subgrup normal pada teori grup, karena ideal adalah tepat objek yang dapat digunakan untuk membentuk ring faktor dan muncul sebagai kernel homomorfisma ring.",
    "definitions": [
      {
        "title": "Ideal Dua Sisi",
        "statement": "Subset $I\\subseteq R$ disebut ideal jika $(I,+)$ subgrup dari $(R,+)$ dan untuk setiap $r\\in R$, $a\\in I$ berlaku $ra\\in I$ dan $ar\\in I$. Pada ring komutatif kedua syarat absorpsi sama."
      },
      {
        "title": "Ideal Utama",
        "statement": "Untuk $a\\in R$ komutatif, ideal utama yang dibangkitkan $a$ adalah $(a)=\\{ra:r\\in R\\}$. Lebih umum, ideal yang dibangkitkan subset $S$ adalah ideal terkecil yang memuat $S$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Uji Ideal pada Ring Komutatif",
        "statement": "Subset tak kosong $I$ dari ring komutatif $R$ adalah ideal jika untuk setiap $a,b\\in I$ berlaku $a-b\\in I$ dan untuk setiap $r\\in R$, $a\\in I$ berlaku $ra\\in I$.",
        "proof": [
          "Syarat $a-b\\in I$ membuat $I$ menjadi subgrup aditif berdasarkan uji subgrup pada $(R,+)$.",
          "Syarat absorpsi memastikan hasil kali elemen ideal dengan elemen sebarang ring tetap berada di ideal. Karena ring komutatif, absorpsi kiri otomatis sama dengan absorpsi kanan.",
          "Dua syarat tersebut tepat definisi ideal dua sisi dalam ring komutatif. Dengan demikian $I$ ideal."
        ]
      },
      {
        "kind": "proposition",
        "title": "Ideal dalam $\\mathbb Z$",
        "statement": "Setiap ideal $I$ pada $\\mathbb Z$ berbentuk $n\\mathbb Z$ untuk suatu $n\\ge0$.",
        "proof": [
          "Jika $I=\\{0\\}$, ambil $n=0$. Jika tidak, himpunan elemen positif $I$ tak kosong; pilih elemen positif terkecil $n$.",
          "Karena $I$ ideal, setiap kelipatan $kn$ berada di $I$, sehingga $n\\mathbb Z\\subseteq I$.",
          "Untuk $a\\in I$, bagi $a=qn+r$ dengan $0\\le r<n$. Karena $a,qn\\in I$, diperoleh $r=a-qn\\in I$. Minimalitas $n$ memaksa $r=0$, sehingga $a\\in n\\mathbb Z$. Dengan demikian $I=n\\mathbb Z$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ideal $6\\mathbb Z$",
        "problem": "Buktikan $6\\mathbb Z$ ideal di $\\mathbb Z$.",
        "solution": [
          "Selisih $6a-6b=6(a-b)$ masih kelipatan 6.",
          "Untuk $r\\in\\mathbb Z$, $r(6a)=6(ra)$ tetap kelipatan 6."
        ],
        "conclusion": "$6\\mathbb Z$ merupakan ideal $\\mathbb Z$."
      },
      {
        "title": "Subring yang Bukan Ideal",
        "problem": "Tunjukkan $\\mathbb Z$ adalah subring $\\mathbb Q$ tetapi bukan ideal.",
        "solution": [
          "$\\mathbb Z$ tertutup terhadap selisih dan perkalian, sehingga subring.",
          "Jika ideal, dari $1\\in\\mathbb Z$ dan $1/2\\in\\mathbb Q$ harus berlaku $(1/2)1\\in\\mathbb Z$.",
          "Tetapi $1/2\\notin\\mathbb Z$."
        ],
        "conclusion": "$\\mathbb Z$ bukan ideal di $\\mathbb Q$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan ideal yang dibangkitkan 12 dan 18 di $\\mathbb Z$.",
        "hint": "Gunakan bahwa $(a,b)=(\\gcd(a,b))$ di $\\mathbb Z$.",
        "answer": "$(12,18)=(6)=6\\mathbb Z$."
      },
      {
        "prompt": "Buktikan irisan dua ideal $I\\cap J$ adalah ideal.",
        "hint": "Gunakan uji ideal.",
        "answer": "Irisan tidak kosong karena memuat 0. Selisih dua elemen irisan berada di kedua ideal, dan perkalian oleh elemen ring juga berada di kedua ideal. Dengan demikian, irisan ideal."
      },
      {
        "prompt": "Buktikan jumlah $I+J=\\{i+j:i\\in I,j\\in J\\}$ adalah ideal.",
        "hint": "Periksa selisih dan absorpsi.",
        "answer": "Selisih $(i_1+j_1)-(i_2+j_2)=(i_1-i_2)+(j_1-j_2)$ berada di $I+J$. Untuk $r\\in R$, $r(i+j)=ri+rj$ juga berada di $I+J$."
      }
    ]
  },
  "alg-factor-rings": {
    "title": "Ring Faktor",
    "focus": "Ring faktor mengidentifikasi dua elemen ring jika selisihnya berada dalam suatu ideal. Ideal diperlukan agar penjumlahan dan perkalian koset tidak bergantung pada wakil yang dipilih.",
    "definitions": [
      {
        "title": "Ring Faktor",
        "statement": "Jika $I$ ideal pada ring $R$, himpunan koset $R/I=\\{r+I:r\\in R\\}$ diberi operasi $(r+I)+(s+I)=(r+s)+I$ dan $(r+I)(s+I)=rs+I$."
      },
      {
        "title": "Peta Kuosien Ring",
        "statement": "Peta kanonik $\\pi:R\\to R/I$ didefinisikan oleh $\\pi(r)=r+I$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Operasi Ring Faktor Well-Defined",
        "statement": "Jika $I$ ideal pada $R$, operasi penjumlahan dan perkalian pada $R/I$ tidak bergantung pada pemilihan wakil koset.",
        "proof": [
          "Diandaikan $r+I=r'+I$ dan $s+I=s'+I$. Artinya $r-r'\\in I$ dan $s-s'\\in I$.",
          "Untuk penjumlahan, $(r+s)-(r'+s')=(r-r')+(s-s')\\in I$, sehingga $(r+s)+I=(r'+s')+I$.",
          "Untuk perkalian, $rs-r's'=r(s-s')+(r-r')s'$. Kedua suku berada di $I$ karena sifat absorpsi ideal. Dengan demikian $rs+I=r's'+I$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Peta Kuosien Ring",
        "statement": "Peta $\\pi:R\\to R/I$ adalah homomorfisma ring surjektif dan $\\ker\\pi=I$.",
        "proof": [
          "$\\pi(r+s)=(r+s)+I=(r+I)+(s+I)$ dan $\\pi(rs)=rs+I=(r+I)(s+I)$, sehingga operasi dipertahankan.",
          "Setiap koset $r+I$ mempunyai wakil $r$, sehingga peta surjektif.",
          "$\\pi(r)=I$ tepat ketika $r+I=I$, ekuivalen dengan $r\\in I$. Oleh karena itu kernel tepat $I$."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z/5\\mathbb Z$",
        "problem": "Bangun ring faktor $\\mathbb Z/5\\mathbb Z$.",
        "solution": [
          "Idealnya $5\\mathbb Z$.",
          "Koset berbeda dapat diwakili oleh $0,1,2,3,4$.",
          "Operasi koset sama dengan penjumlahan dan perkalian modulo 5."
        ],
        "conclusion": "$\\mathbb Z/5\\mathbb Z$ adalah field dengan lima elemen."
      },
      {
        "title": "$\\mathbb R[x]/(x^2+1)$",
        "problem": "Jelaskan bentuk elemen kuosien $\\mathbb R[x]/(x^2+1)$.",
        "solution": [
          "Setiap polinom dapat dibagi oleh $x^2+1$ dengan sisa derajat kurang dari 2.",
          "Setiap koset mempunyai wakil unik $a+bx$.",
          "Dalam kuosien berlaku $x^2+1=0$, sehingga $x^2=-1$."
        ],
        "conclusion": "Ring faktor tersebut isomorfik dengan $\\mathbb C$ melalui $a+bx\\mapsto a+bi$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan banyak elemen $\\mathbb Z/12\\mathbb Z$.",
        "hint": "Koset ditentukan oleh sisa modulo 12.",
        "answer": "Terdapat 12 koset berbeda."
      },
      {
        "prompt": "Tentukan kapan $[a]+n\\mathbb Z=[b]+n\\mathbb Z$.",
        "hint": "Hubungkan dengan selisih wakil.",
        "answer": "Kesamaan terjadi jika dan hanya jika $a-b\\in n\\mathbb Z$, yaitu $a\\equiv b\\pmod n$."
      },
      {
        "prompt": "Buktikan $R/I$ komutatif jika $R$ komutatif.",
        "hint": "Bandingkan hasil kali dua koset.",
        "answer": "$(r+I)(s+I)=rs+I=sr+I=(s+I)(r+I)$."
      }
    ]
  },
  "alg-ring-homomorphisms": {
    "title": "Homomorfisma Ring",
    "focus": "Homomorfisma ring mempertahankan penjumlahan dan perkalian. Kernel selalu ideal, image selalu subring, dan sifat injektif dikontrol oleh kernel seperti pada teori grup.",
    "definitions": [
      {
        "title": "Homomorfisma Ring",
        "statement": "Fungsi $\\varphi:R\\to S$ disebut homomorfisma ring jika $\\varphi(a+b)=\\varphi(a)+\\varphi(b)$ dan $\\varphi(ab)=\\varphi(a)\\varphi(b)$ untuk setiap $a,b\\in R$. Untuk ring beridentitas, konvensi dapat pula mensyaratkan $\\varphi(1_R)=1_S$."
      },
      {
        "title": "Kernel dan Image Ring",
        "statement": "Kernel $\\ker\\varphi=\\{r\\in R:\\varphi(r)=0_S\\}$ dan image $\\operatorname{im}\\varphi=\\{\\varphi(r):r\\in R\\}$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Kernel adalah Ideal dan Image adalah Subring",
        "statement": "Untuk homomorfisma ring $\\varphi:R\\to S$, $\\ker\\varphi$ adalah ideal $R$ dan $\\operatorname{im}\\varphi$ adalah subring $S$.",
        "proof": [
          "Jika $a,b\\in\\ker\\varphi$, maka $\\varphi(a-b)=\\varphi(a)-\\varphi(b)=0$, sehingga kernel subgrup aditif. Untuk $r\\in R$, $a\\in\\ker\\varphi$, diperoleh $\\varphi(ra)=\\varphi(r)0=0$ dan serupa untuk $ar$, sehingga kernel ideal.",
          "Image memuat 0. Jika $x=\\varphi(a)$ dan $y=\\varphi(b)$ berada di image, maka $x-y=\\varphi(a-b)$ dan $xy=\\varphi(ab)$ juga berada di image.",
          "Uji subring memberi image subring. Dengan demikian kernel dan image mempunyai jenis struktur yang berbeda tetapi alami."
        ]
      },
      {
        "kind": "proposition",
        "title": "Kriteria Injektif",
        "statement": "Homomorfisma ring $\\varphi:R\\to S$ injektif jika dan hanya jika $\\ker\\varphi=\\{0_R\\}$.",
        "proof": [
          "Jika $\\varphi$ injektif dan $r\\in\\ker\\varphi$, maka $\\varphi(r)=0_S=\\varphi(0_R)$, sehingga $r=0_R$.",
          "Sebaliknya, jika kernel trivial dan $\\varphi(a)=\\varphi(b)$, maka $\\varphi(a-b)=0_S$.",
          "Diperoleh $a-b\\in\\ker\\varphi=\\{0\\}$, sehingga $a=b$. Dengan demikian peta injektif."
        ]
      }
    ],
    "examples": [
      {
        "title": "Evaluasi Polinom",
        "problem": "Definisikan $\\operatorname{ev}_a:F[x]\\to F$ dengan $f(x)\\mapsto f(a)$. Tentukan kernel.",
        "solution": [
          "Evaluasi mempertahankan penjumlahan dan perkalian polinom.",
          "$f(a)=0$ tepat ketika $x-a$ membagi $f(x)$ berdasarkan Teorema Faktor."
        ],
        "conclusion": "$\\ker(\\operatorname{ev}_a)=(x-a)$."
      },
      {
        "title": "Reduksi Koefisien Modulo $p$",
        "problem": "Definisikan $\\varphi:\\mathbb Z[x]\\to\\mathbb Z_p[x]$ dengan mereduksi setiap koefisien modulo $p$.",
        "solution": [
          "Penjumlahan dan perkalian koefisien kompatibel dengan reduksi modulo $p$.",
          "Polinom berada di kernel tepat ketika seluruh koefisien habis dibagi $p$."
        ],
        "conclusion": "$\\ker\\varphi=p\\mathbb Z[x]$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan homomorfisma ring memenuhi $\\varphi(0_R)=0_S$ dan $\\varphi(-a)=-\\varphi(a)$.",
        "hint": "Gunakan struktur grup aditif.",
        "answer": "$\\varphi(0)=\\varphi(0+0)=\\varphi(0)+\\varphi(0)$ memberi $\\varphi(0)=0$. Dari $0=\\varphi(a-a)=\\varphi(a)+\\varphi(-a)$ diperoleh rumus negatif."
      },
      {
        "prompt": "Tentukan kernel $\\varphi:\\mathbb Z\\to\\mathbb Z_{10}$, $n\\mapsto[n]_{10}$.",
        "hint": "Cari integer yang kongruen 0 modulo 10.",
        "answer": "Kernel $=10\\mathbb Z$."
      },
      {
        "prompt": "Buktikan prapeta ideal di bawah homomorfisma ring adalah ideal.",
        "hint": "Gunakan definisi prapeta dan sifat homomorfisma.",
        "answer": "Jika $J\\trianglelefteq S$, maka selisih dua elemen dengan citra di $J$ tetap mempunyai citra di $J$, dan perkalian oleh elemen $R$ memetakan ke hasil kali oleh elemen $S$, tetap di $J$."
      }
    ]
  },
  "alg-ring-isomorphisms": {
    "title": "Isomorfisma dan Automorfisma Ring",
    "focus": "Isomorfisma ring menyatakan dua ring mempunyai struktur penjumlahan dan perkalian yang sama. Automorfisma ring merekam simetri internal suatu ring dan sering berkaitan dengan permutasi akar polinom atau struktur field.",
    "definitions": [
      {
        "title": "Isomorfisma Ring",
        "statement": "Homomorfisma ring bijektif $\\varphi:R\\to S$ disebut isomorfisma ring. Jika ada, ditulis $R\\cong S$."
      },
      {
        "title": "Automorfisma Ring",
        "statement": "Automorfisma ring adalah isomorfisma $\\sigma:R\\to R$. Himpunan automorfisma membentuk grup terhadap komposisi."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Isomorfisma Mempertahankan Unit dan Pembagi Nol",
        "statement": "Untuk isomorfisma unital $\\varphi:R\\to S$, elemen $u$ unit jika dan hanya jika $\\varphi(u)$ unit, dan pembagi nol dipertahankan.",
        "proof": [
          "Jika $uv=1_R$, maka $\\varphi(u)\\varphi(v)=\\varphi(1_R)=1_S$, sehingga $\\varphi(u)$ unit. Arah sebaliknya menggunakan isomorfisma invers.",
          "Jika $a\\ne0$ pembagi nol, terdapat $b\\ne0$ dengan $ab=0$. Injektivitas memberi $\\varphi(a),\\varphi(b)\\ne0$, sedangkan $\\varphi(a)\\varphi(b)=0$.",
          "Terapkan argumen pada invers untuk arah sebaliknya. Dengan demikian kedua sifat merupakan invarian isomorfisma."
        ]
      },
      {
        "kind": "proposition",
        "title": "Automorfisma Membentuk Grup",
        "statement": "$\\operatorname{Aut}(R)$ merupakan grup terhadap komposisi.",
        "proof": [
          "Komposisi dua isomorfisma ring kembali mempertahankan penjumlahan dan perkalian serta bijektif.",
          "Komposisi fungsi asosiatif dan identitas $\\operatorname{id}_R$ adalah automorfisma.",
          "Invers fungsi dari isomorfisma ring juga homomorfisma ring dan bijektif. Dengan demikian seluruh aksioma grup terpenuhi."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z[x]/(x)$",
        "problem": "Tunjukkan $\\mathbb Z[x]/(x)\\cong\\mathbb Z$.",
        "solution": [
          "Gunakan evaluasi di 0: $\\varphi(f)=f(0)$.",
          "Peta surjektif dan kernel terdiri dari polinom dengan konstanta nol, yaitu ideal $(x)$.",
          "Teorema Isomorfisma Pertama memberi kuosien yang diinginkan."
        ],
        "conclusion": "$\\mathbb Z[x]/(x)\\cong\\mathbb Z$."
      },
      {
        "title": "Konjugasi Kompleks",
        "problem": "Tunjukkan $\\sigma:\\mathbb C\\to\\mathbb C$, $z\\mapsto\\bar z$, adalah automorfisma ring.",
        "solution": [
          "$\\overline{z+w}=\\bar z+\\bar w$ dan $\\overline{zw}=\\bar z\\bar w$.",
          "Konjugasi dua kali menghasilkan identitas, sehingga peta bijektif."
        ],
        "conclusion": "Konjugasi kompleks adalah automorfisma berorde 2."
      }
    ],
    "exercises": [
      {
        "prompt": "Tunjukkan $\\mathbb Z_6\\cong\\mathbb Z_2\\times\\mathbb Z_3$ sebagai ring.",
        "hint": "Gunakan Teorema Sisa Cina.",
        "answer": "Peta $[a]_6\\mapsto([a]_2,[a]_3)$ adalah homomorfisma bijektif karena 2 dan 3 relatif prima."
      },
      {
        "prompt": "Tentukan semua automorfisma ring unital $\\mathbb Z$.",
        "hint": "Automorfisma harus mengirim 1 ke 1.",
        "answer": "Setiap integer $n$ dibangun dari 1 dengan penjumlahan dan invers aditif, sehingga $\\sigma(n)=n$. Hanya automorfisma identitas."
      },
      {
        "prompt": "Jelaskan mengapa field isomorfik harus mempunyai karakteristik sama.",
        "hint": "Karakteristik adalah orde aditif identitas.",
        "answer": "Isomorfisma unital mengirim $1_R$ ke $1_S$ dan mempertahankan struktur grup aditif, sehingga orde aditif keduanya sama."
      }
    ]
  },
  "alg-ring-isomorphism-theorems": {
    "title": "Teorema Isomorfisma untuk Ring",
    "focus": "Teorema isomorfisma ring adalah analog teorema isomorfisma grup dengan ideal menggantikan subgrup normal. Hasil ini menghubungkan kernel, image, ideal, dan ring faktor.",
    "definitions": [
      {
        "title": "Ideal Kuosien",
        "statement": "Jika $I\\subseteq J$ adalah ideal pada $R$, maka $J/I=\\{j+I:j\\in J\\}$ merupakan ideal pada $R/I$."
      },
      {
        "title": "Korespondensi Ideal",
        "statement": "Ideal pada $R/I$ bersesuaian dengan ideal $J$ pada $R$ yang memuat $I$, melalui $J\\mapsto J/I$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Teorema Isomorfisma Pertama untuk Ring",
        "statement": "Jika $\\varphi:R\\to S$ homomorfisma ring, maka $R/\\ker\\varphi\\cong\\operatorname{im}\\varphi$.",
        "proof": [
          "Definisikan $\\overline\\varphi(r+\\ker\\varphi)=\\varphi(r)$. Jika dua koset sama, selisih wakil berada di kernel, sehingga nilai citra sama. Peta well-defined.",
          "Peta faktor mempertahankan penjumlahan dan perkalian karena $\\varphi$ melakukannya, serta surjektif ke image.",
          "Kernel $\\overline\\varphi$ hanya koset nol. Oleh karena itu peta injektif dan menjadi isomorfisma."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Korespondensi Ideal",
        "statement": "Jika $I\\trianglelefteq R$, maka ideal-ideal $R/I$ berkorespondensi satu-satu dengan ideal-ideal $J\\trianglelefteq R$ yang memuat $I$, melalui $J\\leftrightarrow J/I$.",
        "proof": [
          "Untuk peta kuosien $\\pi:R\\to R/I$, prapeta setiap ideal $K\\trianglelefteq R/I$ adalah ideal $\\pi^{-1}(K)$ yang memuat kernel $I$.",
          "Sebaliknya, jika $J\\trianglelefteq R$ dan $I\\subseteq J$, image $\\pi(J)=J/I$ adalah ideal di $R/I$.",
          "Mengambil image lalu prapeta, atau prapeta lalu image, mengembalikan ideal semula karena $I$ sudah termuat. Dengan demikian diperoleh bijeksi."
        ]
      }
    ],
    "examples": [
      {
        "title": "Kuosien Evaluasi",
        "problem": "Gunakan evaluasi $\\operatorname{ev}_2:\\mathbb R[x]\\to\\mathbb R$ untuk menentukan kuosien.",
        "solution": [
          "Kernel adalah $(x-2)$.",
          "Evaluasi surjektif karena setiap konstanta $c$ adalah nilai polinom konstan $c$."
        ],
        "conclusion": "$\\mathbb R[x]/(x-2)\\cong\\mathbb R$."
      },
      {
        "title": "Korespondensi pada $\\mathbb Z/12\\mathbb Z$",
        "problem": "Tentukan ideal-ideal $\\mathbb Z/12\\mathbb Z$ melalui ideal $\\mathbb Z$ yang memuat $12\\mathbb Z$.",
        "solution": [
          "Ideal $n\\mathbb Z$ memuat $12\\mathbb Z$ tepat ketika $n\\mid12$.",
          "Pembagi positif 12 adalah 1,2,3,4,6,12."
        ],
        "conclusion": "Ideal kuosien bersesuaian dengan $(1),(2),(3),(4),(6),(12)$ modulo 12."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $\\mathbb Z[x]/(2,x)\\cong\\mathbb Z_2$.",
        "hint": "Gunakan peta $f(x)\\mapsto f(0)\\bmod2$.",
        "answer": "Peta surjektif dan kernel terdiri dari polinom dengan konstanta genap, tepat ideal $(2,x)$. Teorema Isomorfisma Pertama memberi hasil."
      },
      {
        "prompt": "Jika $I\\subseteq J\\trianglelefteq R$, buktikan $(R/I)/(J/I)\\cong R/J$.",
        "hint": "Definisikan $r+I\\mapsto r+J$.",
        "answer": "Peta well-defined, surjektif, dan kernelnya $J/I$. Terapkan Teorema Isomorfisma Pertama."
      },
      {
        "prompt": "Jelaskan peran kernel dalam Teorema Isomorfisma Pertama.",
        "hint": "Hubungkan dua elemen yang mempunyai citra sama.",
        "answer": "$\\varphi(r)=\\varphi(s)$ tepat ketika $r-s\\in\\ker\\varphi$, sehingga koset kernel adalah kelas elemen yang tidak dibedakan oleh homomorfisma."
      }
    ]
  },
  "alg-prime-maximal-ideals": {
    "title": "Ideal Prima dan Maksimal",
    "focus": "Ideal prima dan ideal maksimal mengukur seberapa dekat suatu ideal dengan membuat kuosien menjadi domain integral atau field. Karakterisasi melalui ring faktor merupakan alat utama untuk mengenali kedua jenis ideal.",
    "definitions": [
      {
        "title": "Ideal Prima",
        "statement": "Pada ring komutatif $R$ beridentitas, ideal proper $P$ disebut prima jika $ab\\in P$ mengakibatkan $a\\in P$ atau $b\\in P$."
      },
      {
        "title": "Ideal Maksimal",
        "statement": "Ideal proper $M$ disebut maksimal jika tidak ada ideal $I$ dengan $M\\subsetneq I\\subsetneq R$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Kriteria Kuosien untuk Ideal Prima",
        "statement": "Ideal proper $P$ pada ring komutatif $R$ adalah prima jika dan hanya jika $R/P$ merupakan domain integral.",
        "proof": [
          "Jika $P$ prima dan $(a+P)(b+P)=P$, maka $ab\\in P$. Keprimaan memberi $a\\in P$ atau $b\\in P$, sehingga salah satu koset nol. Dengan demikian, tidak ada pembagi nol nontrivial di kuosien.",
          "Sebaliknya, jika $R/P$ domain integral dan $ab\\in P$, maka $(a+P)(b+P)=P$. Tidak adanya pembagi nol memberi $a+P=P$ atau $b+P=P$.",
          "Kesamaan koset nol ekuivalen dengan keanggotaan di $P$. Dengan demikian $a\\in P$ atau $b\\in P$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kriteria Kuosien untuk Ideal Maksimal",
        "statement": "Ideal proper $M$ pada ring komutatif beridentitas $R$ maksimal jika dan hanya jika $R/M$ merupakan field.",
        "proof": [
          "Diandaikan $M$ maksimal dan ambil $a+M\\ne M$. Karena $a\\notin M$, ideal $M+(a)$ secara ketat memuat $M$, sehingga maksimalitas memberi $M+(a)=R$.",
          "Terdapat $m\\in M$, $r\\in R$ dengan $m+ra=1$. Modulo $M$ diperoleh $(r+M)(a+M)=1+M$, sehingga setiap koset nonnol invertibel.",
          "Sebaliknya, jika $R/M$ field dan $M\\subseteq I\\subseteq R$, maka $I/M$ ideal pada field. Ideal field hanya nol atau seluruh field, sehingga $I=M$ atau $I=R$. Oleh karena itu $M$ maksimal."
        ]
      },
      {
        "kind": "corollary",
        "title": "Ideal Maksimal adalah Prima",
        "statement": "Setiap ideal maksimal pada ring komutatif beridentitas adalah prima.",
        "proof": [
          "Jika $M$ maksimal, $R/M$ field berdasarkan teorema sebelumnya.",
          "Setiap field merupakan domain integral.",
          "Kriteria kuosien untuk ideal prima memberi bahwa $M$ prima."
        ]
      }
    ],
    "examples": [
      {
        "title": "Ideal pada $\\mathbb Z$",
        "problem": "Tentukan kapan $(n)$ prima atau maksimal di $\\mathbb Z$.",
        "solution": [
          "$\\mathbb Z/(n)\\cong\\mathbb Z_n$.",
          "$\\mathbb Z_n$ domain integral dan field tepat ketika $n$ prima, untuk $n>1$."
        ],
        "conclusion": "Untuk prima $p$, $(p)$ sekaligus prima dan maksimal."
      },
      {
        "title": "Ideal $(x)$ di $F[x]$",
        "problem": "Tentukan apakah $(x)$ maksimal.",
        "solution": [
          "$F[x]/(x)\\cong F$ melalui evaluasi di 0.",
          "$F$ adalah field."
        ],
        "conclusion": "$(x)$ maksimal, dan karena itu juga prima."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan apakah $(x^2+1)$ maksimal di $\\mathbb R[x]$.",
        "hint": "Periksa apakah polinom dapat difaktorkan di $\\mathbb R[x]$.",
        "answer": "$x^2+1$ tidak mempunyai akar real dan irreducible derajat 2. Pada PID $\\mathbb R[x]$, ideal yang dibangkitkan irreducible maksimal. Dengan demikian, maksimal."
      },
      {
        "prompt": "Tentukan apakah $(6)$ ideal prima di $\\mathbb Z$.",
        "hint": "Gunakan kuosien atau faktor $2\\cdot3$.",
        "answer": "Tidak. $2\\cdot3\\in(6)$ tetapi $2,3\\notin(6)$; ekuivalen dengan $\\mathbb Z_6$ mempunyai pembagi nol."
      },
      {
        "prompt": "Buktikan ideal nol $(0)$ prima jika dan hanya jika $R$ domain integral.",
        "hint": "Terapkan definisi ideal prima pada $ab=0$.",
        "answer": "$(0)$ prima berarti $ab=0$ mengakibatkan $a=0$ atau $b=0$, tepat kondisi tidak adanya pembagi nol pada ring komutatif beridentitas."
      }
    ]
  }
};

export const abstractAlgebraContentC9 = buildAlgebraContent(specs);
