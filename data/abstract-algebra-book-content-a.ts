import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-sets": {
    "title": "Himpunan dan Operasi Himpunan",
    "focus": "Himpunan merupakan bahasa dasar untuk seluruh struktur aljabar. Pada bagian ini dibahas inklusi, operasi himpunan, komplemen relatif, produk Kartesius, keluarga himpunan, serta identitas himpunan yang akan digunakan saat mendefinisikan relasi, fungsi, koset, dan struktur faktor.",
    "definitions": [
      {
        "title": "Subset dan Kesamaan Himpunan",
        "statement": "Untuk himpunan $A$ dan $B$, ditulis $A\\subseteq B$ apabila setiap $x\\in A$ juga memenuhi $x\\in B$. Dua himpunan sama, ditulis $A=B$, apabila $A\\subseteq B$ dan $B\\subseteq A$."
      },
      {
        "title": "Operasi Himpunan dan Produk Kartesius",
        "statement": "Irisan $A\\cap B$ memuat elemen yang berada pada keduanya, gabungan $A\\cup B$ memuat elemen yang berada pada sedikitnya salah satu, selisih $A\\setminus B$ memuat elemen $A$ yang tidak berada di $B$, sedangkan $A\\times B=\\{(a,b):a\\in A,b\\in B\\}$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Prinsip Dua Inklusi",
        "statement": "Untuk membuktikan $A=B$, cukup membuktikan $A\\subseteq B$ dan $B\\subseteq A$.",
        "proof": [
          "Diambil sebarang $x\\in A$. Dari pembuktian $A\\subseteq B$ diperoleh $x\\in B$, sehingga tidak ada elemen $A$ yang berada di luar $B$.",
          "Sebaliknya, diambil sebarang $x\\in B$. Dari pembuktian $B\\subseteq A$ diperoleh $x\\in A$, sehingga tidak ada elemen $B$ yang berada di luar $A$.",
          "Kedua inklusi menunjukkan bahwa $A$ dan $B$ mempunyai tepat elemen yang sama. Dengan demikian, $A=B$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Hukum De Morgan",
        "statement": "Untuk semesta $U$ dan $A,B\\subseteq U$, berlaku $(A\\cup B)^c=A^c\\cap B^c$ dan $(A\\cap B)^c=A^c\\cup B^c$.",
        "proof": [
          "Diambil sebarang $x\\in U$. Pernyataan $x\\in(A\\cup B)^c$ ekuivalen dengan $x\\notin A\\cup B$.",
          "Syarat tersebut ekuivalen dengan $x\\notin A$ dan $x\\notin B$, yaitu $x\\in A^c\\cap B^c$. Prinsip dua inklusi memberi identitas pertama.",
          "Argumen yang sama dengan menukar kata 'dan' dan 'atau' memberi $(A\\cap B)^c=A^c\\cup B^c$. Dengan demikian, kedua hukum terbukti."
        ]
      }
    ],
    "examples": [
      {
        "title": "Operasi Himpunan",
        "problem": "Diberikan $A=\\{1,2,3,4\\}$ dan $B=\\{3,4,5\\}$. Tentukan $A\\cap B$, $A\\cup B$, dan $A\\setminus B$.",
        "solution": [
          "Elemen bersama $A$ dan $B$ adalah $3$ dan $4$.",
          "Gabungan memuat semua elemen yang muncul pada sedikitnya salah satu himpunan.",
          "Elemen $A$ yang tidak berada di $B$ adalah $1$ dan $2$."
        ],
        "conclusion": "$A\\cap B=\\{3,4\\}$, $A\\cup B=\\{1,2,3,4,5\\}$, dan $A\\setminus B=\\{1,2\\}$."
      },
      {
        "title": "Produk Kartesius",
        "problem": "Jika $A=\\{a,b\\}$ dan $B=\\{1,2,3\\}$, tentukan $A\\times B$ dan banyak elemennya.",
        "solution": [
          "Setiap elemen $A$ dipasangkan dengan setiap elemen $B$.",
          "Diperoleh enam pasangan terurut, yaitu $(a,1),(a,2),(a,3),(b,1),(b,2),(b,3)$."
        ],
        "conclusion": "$A\\times B$ mempunyai $2\\cdot3=6$ elemen."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$.",
        "hint": "Gunakan prinsip dua inklusi dan uraikan arti keanggotaan pada irisan serta gabungan.",
        "answer": "Untuk $x\\in A\\cap(B\\cup C)$, berlaku $x\\in A$ dan $x\\in B$ atau $x\\in C$, sehingga $x$ berada di salah satu $A\\cap B$ atau $A\\cap C$. Arah sebaliknya diperoleh dengan argumen yang sama. Kedua inklusi memberi kesamaan."
      },
      {
        "prompt": "Tentukan $|A\\times B\\times C|$ jika $|A|=2$, $|B|=3$, dan $|C|=5$.",
        "hint": "Gunakan aturan perkalian pada pilihan koordinat.",
        "answer": "Setiap koordinat pertama mempunyai 2 pilihan, kedua 3 pilihan, dan ketiga 5 pilihan. Diperoleh $2\\cdot3\\cdot5=30$."
      },
      {
        "prompt": "Buktikan jika $A\\subseteq B$, maka $A\\cap C\\subseteq B\\cap C$.",
        "hint": "Ambil sebarang elemen dari $A\\cap C$.",
        "answer": "Jika $x\\in A\\cap C$, maka $x\\in A\\subseteq B$ dan $x\\in C$. Oleh karena itu $x\\in B\\cap C$."
      }
    ]
  },
  "alg-relations": {
    "title": "Relasi",
    "focus": "Relasi biner memformalkan cara dua elemen saling berhubungan. Bagian ini membahas representasi relasi sebagai subset produk Kartesius, relasi invers, komposisi relasi, serta sifat refleksif, simetris, antisimetris, dan transitif.",
    "definitions": [
      {
        "title": "Relasi Biner",
        "statement": "Relasi biner $R$ pada himpunan $A$ adalah subset $R\\subseteq A\\times A$. Notasi $aRb$ berarti $(a,b)\\in R$."
      },
      {
        "title": "Sifat Relasi",
        "statement": "Relasi $R$ pada $A$ disebut refleksif jika $aRa$ untuk setiap $a\\in A$, simetris jika $aRb$ mengakibatkan $bRa$, antisimetris jika $aRb$ dan $bRa$ mengakibatkan $a=b$, serta transitif jika $aRb$ dan $bRc$ mengakibatkan $aRc$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Komposisi Relasi Transitif",
        "statement": "Relasi $R$ pada $A$ transitif jika dan hanya jika $R\\circ R\\subseteq R$.",
        "proof": [
          "Diandaikan $R$ transitif. Jika $(a,c)\\in R\\circ R$, terdapat $b\\in A$ dengan $aRb$ dan $bRc$. Transitivitas memberi $aRc$, sehingga $(a,c)\\in R$.",
          "Sebaliknya, diandaikan $R\\circ R\\subseteq R$. Jika $aRb$ dan $bRc$, definisi komposisi memberi $(a,c)\\in R\\circ R$.",
          "Inklusi yang diasumsikan memberi $(a,c)\\in R$, yaitu $aRc$. Dengan demikian, $R$ transitif."
        ]
      },
      {
        "kind": "proposition",
        "title": "Invers Relasi Simetris",
        "statement": "Relasi $R$ simetris jika dan hanya jika $R=R^{-1}$.",
        "proof": [
          "Jika $R$ simetris dan $(a,b)\\in R$, simetri memberi $(b,a)\\in R$. Ini berarti $(a,b)\\in R^{-1}$, sehingga $R\\subseteq R^{-1}$.",
          "Argumen yang sama memberi $R^{-1}\\subseteq R$, sehingga $R=R^{-1}$.",
          "Sebaliknya, jika $R=R^{-1}$ dan $(a,b)\\in R$, diperoleh $(a,b)\\in R^{-1}$, yang berarti $(b,a)\\in R$. Dengan demikian, $R$ simetris."
        ]
      }
    ],
    "examples": [
      {
        "title": "Relasi Kurang dari atau Sama dengan",
        "problem": "Periksa sifat relasi $aRb$ jika dan hanya jika $a\\le b$ pada $\\mathbb Z$.",
        "solution": [
          "Refleksif karena $a\\le a$ untuk setiap bilangan bulat $a$.",
          "Tidak simetris karena $2\\le3$ tetapi $3\\nleq2$.",
          "Antisimetris karena $a\\le b$ dan $b\\le a$ memaksa $a=b$.",
          "Transitif karena $a\\le b$ dan $b\\le c$ memberi $a\\le c$."
        ],
        "conclusion": "Relasi $\\le$ refleksif, antisimetris, dan transitif, tetapi tidak simetris."
      },
      {
        "title": "Relasi Keterbagian",
        "problem": "Pada $A=\\{1,2,3,6\\}$, definisikan $aRb$ jika $a\\mid b$. Tentukan pasangan dalam $R$.",
        "solution": [
          "Setiap bilangan membagi dirinya sendiri.",
          "$1$ membagi seluruh elemen, $2$ membagi $2$ dan $6$, $3$ membagi $3$ dan $6$, sedangkan $6$ hanya membagi $6$ di dalam $A$."
        ],
        "conclusion": "$R=\\{(1,1),(1,2),(1,3),(1,6),(2,2),(2,6),(3,3),(3,6),(6,6)\\}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan apakah relasi $aRb\\iff a-b$ genap pada $\\mathbb Z$ bersifat refleksif, simetris, dan transitif.",
        "hint": "Gunakan fakta bahwa selisih dua bilangan genap tetap genap.",
        "answer": "Relasi refleksif karena $a-a=0$ genap, simetris karena jika $a-b$ genap maka $b-a=-(a-b)$ genap, dan transitif karena $(a-b)+(b-c)=a-c$ genap."
      },
      {
        "prompt": "Berikan contoh relasi yang simetris tetapi tidak transitif pada $\\{1,2,3\\}$.",
        "hint": "Pilih pasangan bolak-balik yang tidak menutup komposisi.",
        "answer": "Ambil $R=\\{(1,2),(2,1),(2,3),(3,2)\\}$. Relasi simetris, tetapi $(1,2),(2,3)\\in R$ sedangkan $(1,3)\\notin R$, sehingga tidak transitif."
      },
      {
        "prompt": "Buktikan bahwa irisan dua relasi transitif pada himpunan yang sama juga transitif.",
        "hint": "Ambil dua pasangan berturutan yang berada pada irisan.",
        "answer": "Jika $a(R\\cap S)b$ dan $b(R\\cap S)c$, maka $aRb,bRc$ serta $aSb,bSc$. Transitivitas $R$ dan $S$ memberi $aRc$ dan $aSc$, sehingga $a(R\\cap S)c$."
      }
    ]
  },
  "alg-equivalence-relations": {
    "title": "Relasi Ekuivalensi",
    "focus": "Relasi ekuivalensi mengelompokkan elemen yang dianggap sama menurut suatu kriteria. Konsep ini menghasilkan kelas ekuivalensi dan partisi, lalu menjadi dasar bagi konstruksi koset, grup faktor, dan ring faktor.",
    "definitions": [
      {
        "title": "Relasi Ekuivalensi",
        "statement": "Relasi $\\sim$ pada $A$ disebut relasi ekuivalensi apabila refleksif, simetris, dan transitif."
      },
      {
        "title": "Kelas Ekuivalensi",
        "statement": "Untuk $a\\in A$, kelas ekuivalensi $[a]=\\{x\\in A:x\\sim a\\}$. Himpunan semua kelas ekuivalensi disebut himpunan faktor dan ditulis $A/\\!\\sim$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Kelas Ekuivalensi Sama atau Saling Lepas",
        "statement": "Jika $\\sim$ merupakan relasi ekuivalensi pada $A$, maka untuk setiap $a,b\\in A$, berlaku $[a]=[b]$ atau $[a]\\cap[b]=\\varnothing$.",
        "proof": [
          "Diandaikan $[a]\\cap[b]\\ne\\varnothing$ dan diambil $x$ pada irisan tersebut. Diperoleh $x\\sim a$ dan $x\\sim b$.",
          "Simetri memberi $a\\sim x$. Bersama $x\\sim b$, transitivitas memberi $a\\sim b$.",
          "Jika $y\\in[a]$, maka $y\\sim a$ dan $a\\sim b$ memberi $y\\sim b$, sehingga $[a]\\subseteq[b]$. Arah sebaliknya serupa. Dengan demikian $[a]=[b]$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Ekuivalensi antara Partisi dan Relasi Ekuivalensi",
        "statement": "Setiap relasi ekuivalensi pada $A$ menentukan sebuah partisi $A$, dan setiap partisi $A$ menentukan suatu relasi ekuivalensi.",
        "proof": [
          "Kelas ekuivalensi menutupi $A$ karena $a\\in[a]$ oleh refleksivitas. Teorema sebelumnya menunjukkan dua kelas yang berbeda saling lepas, sehingga kelas-kelas membentuk partisi.",
          "Sebaliknya, diberikan partisi $\\mathcal P$ dari $A$. Definisikan $a\\sim b$ apabila $a$ dan $b$ berada pada blok partisi yang sama.",
          "Setiap elemen berada pada blok yang sama dengan dirinya, kebersamaan dalam satu blok bersifat simetris, dan jika $a,b$ serta $b,c$ berada pada blok yang sama maka keunikan blok yang memuat $b$ memberi bahwa $a,c$ juga berada pada blok yang sama. Dengan demikian relasi tersebut ekuivalensi."
        ]
      }
    ],
    "examples": [
      {
        "title": "Kongruensi Modulo 4",
        "problem": "Pada $\\mathbb Z$, definisikan $a\\sim b$ jika $a\\equiv b\\pmod4$. Tentukan kelas-kelas ekuivalensinya.",
        "solution": [
          "Dua bilangan ekuivalen tepat ketika mempunyai sisa pembagian yang sama oleh $4$.",
          "Kemungkinan sisa hanya $0,1,2,3$."
        ],
        "conclusion": "Terdapat empat kelas, yaitu $[0],[1],[2],[3]$, yang membentuk partisi $\\mathbb Z$."
      },
      {
        "title": "Kesamaan Nilai Mutlak",
        "problem": "Pada $\\mathbb R$, definisikan $x\\sim y$ jika $|x|=|y|$. Tentukan $[3]$ dan $[0]$.",
        "solution": [
          "$|x|=3$ terjadi untuk $x=3$ atau $x=-3$.",
          "$|x|=0$ hanya terjadi untuk $x=0$."
        ],
        "conclusion": "$[3]=\\{-3,3\\}$ dan $[0]=\\{0\\}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan relasi $a\\sim b\\iff 5\\mid(a-b)$ pada $\\mathbb Z$ merupakan relasi ekuivalensi.",
        "hint": "Periksa refleksif, simetris, dan transitif menggunakan sifat keterbagian.",
        "answer": "$5\\mid0$ memberi refleksif. Jika $5\\mid(a-b)$, maka $5\\mid(b-a)$ memberi simetris. Jika $5\\mid(a-b)$ dan $5\\mid(b-c)$, maka $5\\mid(a-c)$ memberi transitif."
      },
      {
        "prompt": "Tentukan kelas ekuivalensi $[2]$ untuk relasi pada $\\mathbb Z$ yang didefinisikan oleh kongruensi modulo $6$.",
        "hint": "Tuliskan semua bilangan yang berbeda dari 2 dengan kelipatan 6.",
        "answer": "$[2]=\\{2+6k:k\\in\\mathbb Z\\}$."
      },
      {
        "prompt": "Buktikan jika $a\\sim b$, maka $[a]=[b]$.",
        "hint": "Gunakan transitivitas dua kali untuk menunjukkan dua inklusi.",
        "answer": "Jika $x\\in[a]$, maka $x\\sim a$ dan $a\\sim b$ memberi $x\\sim b$, sehingga $x\\in[b]$. Arah sebaliknya memakai $b\\sim a$."
      }
    ]
  },
  "alg-functions": {
    "title": "Fungsi",
    "focus": "Fungsi adalah relasi yang memasangkan setiap elemen domain dengan tepat satu elemen kodomain. Pada struktur aljabar, fungsi digunakan untuk membandingkan struktur melalui homomorfisma, isomorfisma, automorfisma, dan pemetaan faktor.",
    "definitions": [
      {
        "title": "Fungsi, Citra, dan Prapeta",
        "statement": "Fungsi $f:A\\to B$ memasangkan setiap $a\\in A$ dengan tepat satu $f(a)\\in B$. Untuk $S\\subseteq A$, citra $f(S)=\\{f(s):s\\in S\\}$; untuk $T\\subseteq B$, prapeta $f^{-1}(T)=\\{a\\in A:f(a)\\in T\\}$."
      },
      {
        "title": "Injektif, Surjektif, dan Bijektif",
        "statement": "Fungsi $f:A\\to B$ injektif jika $f(a_1)=f(a_2)$ mengakibatkan $a_1=a_2$, surjektif jika setiap $b\\in B$ mempunyai prapeta, dan bijektif jika sekaligus injektif dan surjektif."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Kriteria Keberadaan Invers",
        "statement": "Fungsi $f:A\\to B$ mempunyai invers dua sisi $f^{-1}:B\\to A$ jika dan hanya jika $f$ bijektif.",
        "proof": [
          "Jika invers dua sisi ada dan $f(a_1)=f(a_2)$, penerapan $f^{-1}$ pada kedua ruas memberi $a_1=a_2$, sehingga $f$ injektif. Untuk setiap $b\\in B$, elemen $f^{-1}(b)$ dipetakan ke $b$, sehingga $f$ surjektif.",
          "Sebaliknya, jika $f$ bijektif, untuk setiap $b\\in B$ terdapat tepat satu $a\\in A$ dengan $f(a)=b$. Definisikan $f^{-1}(b)=a$.",
          "Keunikan prapeta menjamin definisi tersebut well-defined dan langsung memberi $f^{-1}\\circ f=\\operatorname{id}_A$ serta $f\\circ f^{-1}=\\operatorname{id}_B$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Komposisi Fungsi Injektif dan Surjektif",
        "statement": "Komposisi dua fungsi injektif adalah injektif, dan komposisi dua fungsi surjektif adalah surjektif.",
        "proof": [
          "Untuk injektivitas, jika $(g\\circ f)(x_1)=(g\\circ f)(x_2)$, injektivitas $g$ memberi $f(x_1)=f(x_2)$, lalu injektivitas $f$ memberi $x_1=x_2$.",
          "Untuk surjektivitas, diambil sebarang $z$ pada kodomain $g$. Surjektivitas $g$ memberi $y$ dengan $g(y)=z$, dan surjektivitas $f$ memberi $x$ dengan $f(x)=y$.",
          "Diperoleh $(g\\circ f)(x)=z$. Dengan demikian kedua pernyataan terbukti."
        ]
      }
    ],
    "examples": [
      {
        "title": "Uji Bijektif",
        "problem": "Tentukan apakah $f:\\mathbb Z\\to\\mathbb Z$ dengan $f(n)=n+5$ bijektif dan cari inversnya.",
        "solution": [
          "Jika $f(m)=f(n)$, maka $m+5=n+5$, sehingga $m=n$.",
          "Untuk sebarang $y\\in\\mathbb Z$, pilih $n=y-5$. Diperoleh $f(n)=y$.",
          "Penyelesaian $y=n+5$ terhadap $n$ memberi $n=y-5$."
        ],
        "conclusion": "$f$ bijektif dan $f^{-1}(y)=y-5$."
      },
      {
        "title": "Fungsi Tidak Surjektif",
        "problem": "Periksa $f:\\mathbb Z\\to\\mathbb Z$ dengan $f(n)=2n$.",
        "solution": [
          "Jika $2m=2n$, diperoleh $m=n$, sehingga $f$ injektif.",
          "Bilangan ganjil tidak mempunyai prapeta di $\\mathbb Z$, karena $2n$ selalu genap."
        ],
        "conclusion": "$f$ injektif tetapi tidak surjektif."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan jika $g\\circ f$ injektif, maka $f$ injektif.",
        "hint": "Andaikan $f(x_1)=f(x_2)$ lalu terapkan $g$.",
        "answer": "Dari $f(x_1)=f(x_2)$ diperoleh $(g\\circ f)(x_1)=(g\\circ f)(x_2)$. Injektivitas komposisi memberi $x_1=x_2$."
      },
      {
        "prompt": "Buktikan jika $g\\circ f$ surjektif, maka $g$ surjektif.",
        "hint": "Ambil sebarang elemen pada kodomain $g$.",
        "answer": "Untuk setiap $z$, surjektivitas $g\\circ f$ memberi $x$ dengan $g(f(x))=z$. Dengan $y=f(x)$, terdapat $y$ yang dipetakan $g$ ke $z$."
      },
      {
        "prompt": "Tentukan banyak fungsi bijektif dari himpunan beranggota $n$ ke dirinya sendiri.",
        "hint": "Hubungkan dengan permutasi $n$ elemen.",
        "answer": "Fungsi bijektif adalah permutasi. Terdapat $n!$ permutasi."
      }
    ]
  },
  "alg-induction-well-ordering": {
    "title": "Induksi dan Well-Ordering",
    "focus": "Prinsip well-ordering dan induksi adalah fondasi pembuktian pada bilangan bulat positif. Bagian ini menekankan hubungan logis antara nilai terkecil, induksi biasa, dan induksi kuat.",
    "definitions": [
      {
        "title": "Prinsip Well-Ordering",
        "statement": "Setiap subset tak kosong dari $\\mathbb N$ mempunyai elemen terkecil."
      },
      {
        "title": "Prinsip Induksi Matematika",
        "statement": "Jika pernyataan $P(n)$ memenuhi $P(n_0)$ dan untuk setiap $k\\ge n_0$, kebenaran $P(k)$ mengakibatkan $P(k+1)$, maka $P(n)$ benar untuk setiap $n\\ge n_0$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Well-Ordering Mengakibatkan Induksi",
        "statement": "Prinsip well-ordering mengakibatkan prinsip induksi matematika.",
        "proof": [
          "Diandaikan basis $P(n_0)$ benar dan langkah induksi $P(k)\\Rightarrow P(k+1)$ benar, tetapi terdapat bilangan $n\\ge n_0$ yang membuat $P(n)$ salah.",
          "Himpunan $S=\\{n\\ge n_0:P(n)\\text{ salah}\\}$ tak kosong. Well-ordering memberi elemen terkecil $m\\in S$.",
          "Karena basis benar, $m>n_0$. Minimalitas $m$ memberi $P(m-1)$ benar. Langkah induksi menghasilkan $P(m)$ benar, bertentangan dengan $m\\in S$. Dengan demikian, $S$ kosong."
        ]
      },
      {
        "kind": "theorem",
        "title": "Induksi Kuat",
        "statement": "Jika $P(n_0)$ benar dan untuk setiap $n>n_0$, kebenaran semua $P(k)$ dengan $n_0\\le k<n$ mengakibatkan $P(n)$, maka $P(n)$ benar untuk semua $n\\ge n_0$.",
        "proof": [
          "Definisikan $Q(n)$ sebagai pernyataan bahwa $P(k)$ benar untuk setiap $n_0\\le k\\le n$.",
          "Basis $Q(n_0)$ sama dengan basis $P(n_0)$. Jika $Q(n)$ benar, hipotesis induksi kuat memberi $P(n+1)$, sehingga seluruh $P(k)$ sampai $n+1$ benar.",
          "Induksi biasa memberi $Q(n)$ untuk semua $n\\ge n_0$. Karena $Q(n)$ mencakup $P(n)$, prinsip induksi kuat terbukti."
        ]
      }
    ],
    "examples": [
      {
        "title": "Jumlah Bilangan Ganjil",
        "problem": "Buktikan $1+3+\\cdots+(2n-1)=n^2$ untuk setiap $n\\ge1$.",
        "solution": [
          "Basis $n=1$ memberi $1=1^2$.",
          "Diandaikan jumlah sampai suku ke-$k$ sama dengan $k^2$.",
          "Tambahkan suku berikutnya $2k+1$: $k^2+(2k+1)=(k+1)^2$."
        ],
        "conclusion": "Identitas berlaku untuk setiap $n\\ge1$ berdasarkan induksi."
      },
      {
        "title": "Representasi dengan 2 dan 3",
        "problem": "Buktikan setiap bilangan bulat $n\\ge2$ dapat ditulis sebagai $2a+3b$ dengan $a,b\\ge0$.",
        "solution": [
          "Basis: $2=2\\cdot1+3\\cdot0$ dan $3=2\\cdot0+3\\cdot1$.",
          "Untuk $n\\ge4$, jika $n-2$ telah mempunyai representasi, tambahkan satu faktor $2$.",
          "Induksi kuat memberi representasi untuk setiap $n\\ge2$."
        ],
        "conclusion": "Setiap $n\\ge2$ merupakan kombinasi nonnegatif dari 2 dan 3."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $1+2+\\cdots+n=\\frac{n(n+1)}2$ dengan induksi.",
        "hint": "Periksa basis $n=1$, lalu tambahkan $k+1$.",
        "answer": "Basis benar. Jika jumlah sampai $k$ adalah $k(k+1)/2$, maka setelah menambah $k+1$ diperoleh $(k+1)(k+2)/2$."
      },
      {
        "prompt": "Buktikan $2^n\\ge n+1$ untuk setiap $n\\ge0$.",
        "hint": "Gunakan $2^{k+1}=2\\cdot2^k$ dan bandingkan dengan $k+2$.",
        "answer": "Basis $n=0$ benar. Jika $2^k\\ge k+1$, maka $2^{k+1}\\ge2k+2\\ge k+2$ untuk $k\\ge0$."
      },
      {
        "prompt": "Jelaskan mengapa memilih elemen terkecil sering efektif pada pembuktian bilangan bulat.",
        "hint": "Hubungkan dengan kontradiksi dan well-ordering.",
        "answer": "Jika himpunan counterexample tidak kosong, well-ordering memberi counterexample terkecil. Minimalitas sering membuat kasus sebelumnya benar dan menghasilkan kontradiksi."
      }
    ]
  },
  "alg-divisibility": {
    "title": "Keterbagian",
    "focus": "Keterbagian mengatur struktur aritmetika bilangan bulat. Fokusnya mencakup pembagi bersama terbesar, algoritma Euclid, identitas Bézout, serta konsekuensi yang kelak digunakan pada kongruensi dan teori grup siklik.",
    "definitions": [
      {
        "title": "Keterbagian dan Pembagi Bersama Terbesar",
        "statement": "Untuk $a,b\\in\\mathbb Z$, ditulis $a\\mid b$ jika terdapat $k\\in\\mathbb Z$ dengan $b=ak$. Untuk $a,b$ tidak keduanya nol, $\\gcd(a,b)$ adalah pembagi bersama positif terbesar."
      },
      {
        "title": "Kombinasi Linear Integer",
        "statement": "Bilangan berbentuk $ax+by$ dengan $x,y\\in\\mathbb Z$ disebut kombinasi linear integer dari $a$ dan $b$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Identitas Bézout",
        "statement": "Untuk $a,b\\in\\mathbb Z$ tidak keduanya nol, terdapat $x,y\\in\\mathbb Z$ sehingga $\\gcd(a,b)=ax+by$.",
        "proof": [
          "Pertimbangkan himpunan $S=\\{ax+by>0:x,y\\in\\mathbb Z\\}$. Himpunan ini tak kosong, sehingga well-ordering memberi elemen terkecil $d=ax_0+by_0$.",
          "Bagi $a$ dengan $d$: $a=qd+r$ dengan $0\\le r<d$. Karena $r=a-q(ax_0+by_0)$ juga kombinasi linear $a,b$, minimalitas $d$ memaksa $r=0$. Dengan demikian, $d\\mid a$. Argumen sama memberi $d\\mid b$.",
          "Setiap pembagi bersama $c$ dari $a,b$ membagi setiap kombinasi linear $ax+by$, khususnya $d$. Oleh karena itu $d$ adalah pembagi bersama terbesar positif, yaitu $\\gcd(a,b)$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Lemma Euclid",
        "statement": "Jika $\\gcd(a,b)=1$ dan $a\\mid bc$, maka $a\\mid c$.",
        "proof": [
          "Identitas Bézout memberi $ax+by=1$ untuk suatu $x,y\\in\\mathbb Z$.",
          "Kalikan dengan $c$ untuk memperoleh $acx+bcy=c$.",
          "$a$ membagi $acx$ dan, karena $a\\mid bc$, juga membagi $bcy$. Oleh karena itu $a$ membagi jumlahnya, yaitu $c$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Algoritma Euclid",
        "problem": "Hitung $\\gcd(252,198)$ dan nyatakan sebagai kombinasi linear kedua bilangan.",
        "solution": [
          "$252=1(198)+54$, $198=3(54)+36$, dan $54=1(36)+18$, sehingga FPB adalah $18$.",
          "Substitusi balik memberi $18=54-36=54-(198-3\\cdot54)=4\\cdot54-198$.",
          "Karena $54=252-198$, diperoleh $18=4\\cdot252-5\\cdot198$."
        ],
        "conclusion": "$\\gcd(252,198)=18=4(252)-5(198)$."
      },
      {
        "title": "Persamaan Diofantin Linear",
        "problem": "Tentukan apakah $18x+30y=12$ mempunyai solusi integer.",
        "solution": [
          "$\\gcd(18,30)=6$ dan $6\\mid12$, sehingga solusi ada.",
          "Dari $6=2(18)-1(30)$, kalikan dua untuk memperoleh $12=4(18)-2(30)$."
        ],
        "conclusion": "Salah satu solusi adalah $(x,y)=(4,-2)$."
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung $\\gcd(414,662)$ dengan algoritma Euclid.",
        "hint": "Lakukan pembagian berulang sampai sisa nol.",
        "answer": "$662=1(414)+248$, $414=1(248)+166$, $248=1(166)+82$, $166=2(82)+2$, $82=41(2)$. Dengan demikian, FPB adalah $2$."
      },
      {
        "prompt": "Buktikan jika $d=\\gcd(a,b)$, maka $\\gcd(a/d,b/d)=1$.",
        "hint": "Andaikan ada pembagi bersama lebih besar dari 1 setelah pembagian.",
        "answer": "Jika $c>1$ membagi $a/d$ dan $b/d$, maka $cd$ membagi $a$ dan $b$, bertentangan dengan maksimalitas $d$."
      },
      {
        "prompt": "Tentukan syarat agar $ax+by=c$ mempunyai solusi integer.",
        "hint": "Gunakan identitas Bézout.",
        "answer": "Persamaan mempunyai solusi integer jika dan hanya jika $\\gcd(a,b)\\mid c$."
      }
    ]
  },
  "alg-prime-factorization": {
    "title": "Faktorisasi Prima",
    "focus": "Bilangan prima berperan sebagai blok dasar perkalian pada bilangan bulat. Bagian ini membahas bilangan prima, elemen irreducible pada konteks integer, Lemma Euclid untuk prima, dan Teorema Fundamental Aritmetika.",
    "definitions": [
      {
        "title": "Bilangan Prima",
        "statement": "Bilangan bulat $p>1$ disebut prima jika pembagi positifnya hanya $1$ dan $p$. Bilangan $n>1$ yang bukan prima disebut komposit."
      },
      {
        "title": "Faktorisasi Prima",
        "statement": "Faktorisasi prima suatu $n>1$ adalah representasi $n=p_1^{\\alpha_1}\\cdots p_r^{\\alpha_r}$ dengan $p_i$ prima berbeda dan $\\alpha_i\\ge1$."
      }
    ],
    "results": [
      {
        "kind": "lemma",
        "title": "Lemma Euclid untuk Bilangan Prima",
        "statement": "Jika $p$ prima dan $p\\mid ab$, maka $p\\mid a$ atau $p\\mid b$.",
        "proof": [
          "Jika $p\\mid a$, pernyataan selesai. Diandaikan $p\\nmid a$.",
          "Karena $p$ prima, pembagi bersama positif $p$ dan $a$ hanya $1$, sehingga $\\gcd(p,a)=1$.",
          "Lemma Euclid dari identitas Bézout diterapkan pada $p\\mid ab$ dan $\\gcd(p,a)=1$, sehingga $p\\mid b$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Fundamental Aritmetika",
        "statement": "Setiap integer $n>1$ dapat ditulis sebagai hasil kali prima, dan faktorisasi tersebut unik sampai urutan faktor.",
        "proof": [
          "Eksistensi dibuktikan dengan induksi kuat. Jika $n$ prima, selesai. Jika komposit, tulis $n=ab$ dengan $1<a,b<n$; hipotesis induksi memfaktorkan $a$ dan $b$ menjadi prima.",
          "Untuk keunikan, diandaikan $p_1\\cdots p_r=q_1\\cdots q_s$. Prima $p_1$ membagi ruas kanan, sehingga Lemma Euclid berulang memberi $p_1=q_j$ untuk suatu $j$.",
          "Coret faktor prima yang sama dan ulangi proses. Seluruh faktor serta multiplisitasnya harus sama. Dengan demikian, faktorisasi unik sampai urutan."
        ]
      }
    ],
    "examples": [
      {
        "title": "Faktorisasi 756",
        "problem": "Faktorkan $756$ menjadi faktor prima.",
        "solution": [
          "$756=2\\cdot378=2^2\\cdot189$.",
          "$189=3\\cdot63=3^3\\cdot7$."
        ],
        "conclusion": "$756=2^2\\cdot3^3\\cdot7$."
      },
      {
        "title": "FPB dan KPK dari Faktorisasi",
        "problem": "Gunakan faktorisasi prima untuk menentukan $\\gcd(360,504)$ dan $\\operatorname{lcm}(360,504)$.",
        "solution": [
          "$360=2^3\\cdot3^2\\cdot5$ dan $504=2^3\\cdot3^2\\cdot7$.",
          "FPB mengambil pangkat minimum, sedangkan KPK mengambil pangkat maksimum."
        ],
        "conclusion": "$\\gcd=2^3\\cdot3^2=72$ dan $\\operatorname{lcm}=2^3\\cdot3^2\\cdot5\\cdot7=2520$."
      }
    ],
    "exercises": [
      {
        "prompt": "Faktorkan $2310$ menjadi faktor prima.",
        "hint": "Uji keterbagian oleh 2, 3, 5, 7, dan seterusnya.",
        "answer": "$2310=2\\cdot3\\cdot5\\cdot7\\cdot11$."
      },
      {
        "prompt": "Buktikan jika $p$ prima dan $p\\mid a^n$, maka $p\\mid a$.",
        "hint": "Gunakan Lemma Euclid berulang pada $a^n=a\\cdot a^{n-1}$.",
        "answer": "Dari $p\\mid a^n$, Lemma Euclid memberi $p\\mid a$ atau $p\\mid a^{n-1}$. Jika kasus kedua terjadi, ulangi sampai diperoleh $p\\mid a$."
      },
      {
        "prompt": "Tentukan banyak pembagi positif dari $n=p_1^{a_1}\\cdots p_r^{a_r}$.",
        "hint": "Setiap pembagi memilih pangkat tiap prima secara independen.",
        "answer": "Pangkat $p_i$ dapat dipilih dari $0$ sampai $a_i$, memberi $a_i+1$ pilihan. Banyak pembagi adalah $\\prod_{i=1}^r(a_i+1)$."
      }
    ]
  },
  "alg-integer-properties": {
    "title": "Sifat Bilangan Bulat",
    "focus": "Bagian ini mengumpulkan sifat struktural bilangan bulat yang penting untuk aljabar abstrak: unit, tanda, FPB/KPK, persamaan Diofantin, dan perilaku divisibilitas terhadap operasi aritmetika.",
    "definitions": [
      {
        "title": "Unit pada $\\mathbb Z$",
        "statement": "Elemen $u\\in\\mathbb Z$ disebut unit jika terdapat $v\\in\\mathbb Z$ dengan $uv=1$. Unit pada $\\mathbb Z$ adalah tepat $1$ dan $-1$."
      },
      {
        "title": "KPK",
        "statement": "Untuk $a,b\\ne0$, kelipatan persekutuan terkecil $\\operatorname{lcm}(a,b)$ adalah bilangan positif terkecil yang habis dibagi oleh $a$ dan $b$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Hubungan FPB dan KPK",
        "statement": "Untuk $a,b\\in\\mathbb Z$ tak nol, berlaku $\\gcd(a,b)\\operatorname{lcm}(a,b)=|ab|$.",
        "proof": [
          "Tuliskan faktorisasi prima $|a|=\\prod p_i^{\\alpha_i}$ dan $|b|=\\prod p_i^{\\beta_i}$ dengan pangkat nol diizinkan.",
          "FPB mempunyai pangkat $\\min(\\alpha_i,\\beta_i)$ dan KPK mempunyai pangkat $\\max(\\alpha_i,\\beta_i)$.",
          "Jumlah kedua pangkat tersebut adalah $\\alpha_i+\\beta_i$ untuk setiap $i$. Hasil kali FPB dan KPK sama dengan $\\prod p_i^{\\alpha_i+\\beta_i}=|ab|$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Solusi Persamaan Diofantin Linear",
        "statement": "Persamaan $ax+by=c$ mempunyai solusi integer jika dan hanya jika $\\gcd(a,b)$ membagi $c$.",
        "proof": [
          "Jika solusi ada, setiap pembagi bersama $a,b$ membagi $ax+by=c$, khususnya $\\gcd(a,b)\\mid c$.",
          "Sebaliknya, misalkan $d=\\gcd(a,b)$ dan $c=kd$. Identitas Bézout memberi $d=au+bv$.",
          "Kalikan dengan $k$ untuk memperoleh $c=a(ku)+b(kv)$, sehingga $(x,y)=(ku,kv)$ merupakan solusi integer."
        ]
      }
    ],
    "examples": [
      {
        "title": "Menentukan Unit",
        "problem": "Tentukan semua unit dalam $\\mathbb Z$.",
        "solution": [
          "Jika $u$ unit, terdapat $v\\in\\mathbb Z$ dengan $uv=1$.",
          "Nilai mutlak memberi $|u||v|=1$, sehingga $|u|=|v|=1$."
        ],
        "conclusion": "Unit dalam $\\mathbb Z$ adalah $\\{1,-1\\}$."
      },
      {
        "title": "Diofantin $21x+15y=6$",
        "problem": "Cari satu solusi integer.",
        "solution": [
          "$\\gcd(21,15)=3$ dan $3\\mid6$.",
          "$3=21-15$, sehingga $6=2(21)-2(15)$."
        ],
        "conclusion": "Salah satu solusi adalah $(x,y)=(2,-2)$."
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung $\\operatorname{lcm}(84,126)$.",
        "hint": "Gunakan faktorisasi prima.",
        "answer": "$84=2^2\\cdot3\\cdot7$ dan $126=2\\cdot3^2\\cdot7$, sehingga KPK $=2^2\\cdot3^2\\cdot7=252$."
      },
      {
        "prompt": "Buktikan unit pada $\\mathbb Z$ hanya $\\pm1$.",
        "hint": "Gunakan nilai mutlak dari persamaan $uv=1$.",
        "answer": "Jika $uv=1$, maka $|u||v|=1$. Karena keduanya integer nonnegatif, harus $|u|=1$."
      },
      {
        "prompt": "Tentukan apakah $14x+21y=5$ mempunyai solusi integer.",
        "hint": "Periksa apakah FPB membagi ruas kanan.",
        "answer": "$\\gcd(14,21)=7$ tetapi $7\\nmid5$, sehingga tidak ada solusi integer."
      }
    ]
  },
  "alg-modular-arithmetic": {
    "title": "Aritmetika Modular",
    "focus": "Kongruensi modulo $n$ mengubah aritmetika bilangan bulat menjadi aritmetika kelas residu. Bagian ini membahas kelas kongruensi, operasi yang well-defined, unit modulo $n$, invers multiplikatif, dan persamaan kongruensi linear.",
    "definitions": [
      {
        "title": "Kongruensi Modulo $n$",
        "statement": "Untuk $n\\ge2$, ditulis $a\\equiv b\\pmod n$ jika $n\\mid(a-b)$. Kelas residu $[a]_n$ adalah himpunan semua integer yang kongruen dengan $a$ modulo $n$."
      },
      {
        "title": "Unit Modulo $n$",
        "statement": "Kelas $[a]_n\\in\\mathbb Z_n$ disebut unit jika terdapat $[b]_n$ dengan $[a]_n[b]_n=[1]_n$. Himpunan semua unit ditulis $\\mathbb Z_n^\\times$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Operasi pada Kelas Residu Well-Defined",
        "statement": "Jika $a\\equiv a'\\pmod n$ dan $b\\equiv b'\\pmod n$, maka $a+b\\equiv a'+b'\\pmod n$ dan $ab\\equiv a'b'\\pmod n$.",
        "proof": [
          "Dari hipotesis terdapat $r,s\\in\\mathbb Z$ dengan $a-a'=rn$ dan $b-b'=sn$.",
          "$(a+b)-(a'+b')=(r+s)n$, sehingga penjumlahan tidak bergantung pada wakil kelas.",
          "$ab-a'b'=a(b-b')+b'(a-a')=asn+b'rn=n(as+b'r)$, sehingga perkalian juga tidak bergantung pada wakil."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kriteria Invers Modulo",
        "statement": "Kelas $[a]_n$ mempunyai invers multiplikatif modulo $n$ jika dan hanya jika $\\gcd(a,n)=1$.",
        "proof": [
          "Jika $[a]_n[b]_n=[1]_n$, maka $ab\\equiv1\\pmod n$, sehingga $ab+nk=1$ untuk suatu $k$. Setiap pembagi bersama $a,n$ harus membagi 1, jadi FPB-nya 1.",
          "Sebaliknya, jika $\\gcd(a,n)=1$, identitas Bézout memberi $ax+ny=1$.",
          "Reduksi modulo $n$ memberi $ax\\equiv1\\pmod n$. Dengan demikian $[x]_n$ adalah invers $[a]_n$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Invers Modulo 17",
        "problem": "Tentukan invers $5$ modulo $17$.",
        "solution": [
          "Algoritma Euclid memberi $17=3(5)+2$ dan $5=2(2)+1$.",
          "Substitusi balik memberi $1=5-2(17-3\\cdot5)=7\\cdot5-2\\cdot17$."
        ],
        "conclusion": "$5^{-1}\\equiv7\\pmod{17}$."
      },
      {
        "title": "Kongruensi Linear",
        "problem": "Selesaikan $6x\\equiv9\\pmod{15}$.",
        "solution": [
          "$\\gcd(6,15)=3$ dan $3\\mid9$, sehingga solusi ada.",
          "Bagi persamaan dan modulus dengan 3: $2x\\equiv3\\pmod5$.",
          "Invers 2 modulo 5 adalah 3, sehingga $x\\equiv9\\equiv4\\pmod5$."
        ],
        "conclusion": "Modulo 15 terdapat tiga solusi: $x\\equiv4,9,14\\pmod{15}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan semua unit di $\\mathbb Z_{12}$.",
        "hint": "Pilih kelas yang relatif prima dengan 12.",
        "answer": "Unit adalah $[1],[5],[7],[11]$."
      },
      {
        "prompt": "Selesaikan $7x\\equiv5\\pmod{13}$.",
        "hint": "Cari invers 7 modulo 13.",
        "answer": "Karena $7\\cdot2=14\\equiv1$, invers 7 adalah 2. Diperoleh $x\\equiv10\\pmod{13}$."
      },
      {
        "prompt": "Buktikan kongruensi modulo $n$ merupakan relasi ekuivalensi.",
        "hint": "Periksa refleksif, simetris, dan transitif melalui divisibilitas selisih.",
        "answer": "$n\\mid(a-a)$ memberi refleksif; $n\\mid(a-b)$ mengakibatkan $n\\mid(b-a)$; dan jika $n\\mid(a-b)$ serta $n\\mid(b-c)$, maka $n\\mid(a-c)$."
      }
    ]
  },
  "alg-group-example": {
    "title": "Contoh Penting Grup",
    "focus": "Sebelum definisi abstrak diberikan, grup dapat dipahami melalui transformasi yang dapat dikomposisikan. Simetri bangun datar dan permutasi merupakan contoh utama karena operasi komposisi memperlihatkan identitas, invers, dan ketakkomutatifan secara konkret.",
    "definitions": [
      {
        "title": "Simetri Suatu Objek",
        "statement": "Simetri objek $X$ adalah transformasi bijektif $f:X\\to X$ yang mempertahankan struktur yang sedang diperhatikan. Dua simetri dikombinasikan dengan komposisi fungsi."
      },
      {
        "title": "Grup Dihedral $D_n$",
        "statement": "$D_n$ adalah himpunan seluruh simetri poligon beraturan bersisi $n$, terdiri dari $n$ rotasi dan $n$ refleksi, dengan operasi komposisi."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Simetri Tertutup terhadap Komposisi dan Invers",
        "statement": "Komposisi dua simetri objek kembali merupakan simetri, dan invers suatu simetri juga merupakan simetri.",
        "proof": [
          "Jika $f$ dan $g$ mempertahankan struktur objek, penerapan $f$ lalu $g$ tetap mengirim objek ke konfigurasi yang mempertahankan struktur yang sama. Dengan demikian $g\\circ f$ merupakan simetri.",
          "Karena simetri bijektif, invers $f^{-1}$ ada. Jika $f$ mempertahankan seluruh relasi struktur, pembalikan pemetaan mengembalikan setiap relasi ke bentuk semula, sehingga $f^{-1}$ juga mempertahankan struktur.",
          "Identitas jelas merupakan simetri. Fakta-fakta ini mempersiapkan aksioma grup pada himpunan simetri."
        ]
      },
      {
        "kind": "proposition",
        "title": "Relasi Dasar Grup Dihedral",
        "statement": "Jika $r$ adalah rotasi sebesar $2\\pi/n$ dan $s$ suatu refleksi, maka pada $D_n$ berlaku $r^n=e$, $s^2=e$, dan $srs=r^{-1}$.",
        "proof": [
          "Melakukan rotasi $r$ sebanyak $n$ kali menghasilkan satu putaran penuh, sehingga $r^n=e$.",
          "Melakukan refleksi yang sama dua kali mengembalikan setiap titik ke posisi semula, sehingga $s^2=e$.",
          "Konjugasi rotasi oleh refleksi membalik orientasi arah rotasi. Oleh karena itu rotasi satu langkah berubah menjadi rotasi satu langkah berlawanan, yaitu $srs=r^{-1}$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Simetri Persegi",
        "problem": "Tuliskan unsur $D_4$ menggunakan rotasi $r$ dan refleksi $s$.",
        "solution": [
          "Rotasi memberi $e,r,r^2,r^3$.",
          "Mengomposisikan masing-masing rotasi dengan refleksi memberi $s,rs,r^2s,r^3s$."
        ],
        "conclusion": "$D_4=\\{e,r,r^2,r^3,s,rs,r^2s,r^3s\\}$ dan mempunyai 8 unsur."
      },
      {
        "title": "Ketakkomutatifan",
        "problem": "Tunjukkan bahwa pada $D_3$, umumnya $rs\\ne sr$.",
        "solution": [
          "Dari relasi $srs=r^{-1}$ diperoleh $sr=r^{-1}s$.",
          "Untuk $D_3$, $r^{-1}=r^2\\ne r$."
        ],
        "conclusion": "$sr=r^2s\\ne rs$, sehingga $D_3$ tidak abelian."
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung orde $D_5$.",
        "hint": "Hitung banyak rotasi dan refleksi.",
        "answer": "Terdapat 5 rotasi dan 5 refleksi, sehingga $|D_5|=10$."
      },
      {
        "prompt": "Sederhanakan $sr^3s$ pada $D_6$.",
        "hint": "Gunakan $sr^ks=r^{-k}$.",
        "answer": "$sr^3s=r^{-3}=r^3$ karena $r^6=e$."
      },
      {
        "prompt": "Jelaskan mengapa komposisi simetri asosiatif.",
        "hint": "Gunakan sifat komposisi fungsi.",
        "answer": "Komposisi fungsi selalu asosiatif: $(f\\circ g)\\circ h=f\\circ(g\\circ h)$. Karena operasi simetri adalah komposisi, sifat ini diwarisi."
      }
    ]
  },
  "alg-groups": {
    "title": "Grup",
    "focus": "Grup memformalkan sistem dengan satu operasi biner yang tertutup, asosiatif, mempunyai identitas, dan setiap unsur mempunyai invers. Definisi ini menyatukan aritmetika, simetri, matriks invertibel, dan banyak struktur lain.",
    "definitions": [
      {
        "title": "Grup",
        "statement": "Pasangan $(G,*)$ disebut grup jika operasi $*:G\\times G\\to G$ asosiatif, terdapat $e\\in G$ dengan $e*a=a*e=a$ untuk setiap $a$, dan untuk setiap $a\\in G$ terdapat $a^{-1}$ dengan $a*a^{-1}=a^{-1}*a=e$."
      },
      {
        "title": "Grup Abelian",
        "statement": "Grup $G$ disebut abelian jika $a*b=b*a$ untuk setiap $a,b\\in G$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Identitas dan Invers Unik",
        "statement": "Dalam suatu grup, elemen identitas unik dan invers setiap elemen juga unik.",
        "proof": [
          "Jika $e$ dan $f$ keduanya identitas, maka $e=e*f=f$. Dengan demikian identitas unik.",
          "Jika $b$ dan $c$ keduanya invers dari $a$, diperoleh $b=b*e=b*(a*c)=(b*a)*c=e*c=c$.",
          "Asosiativitas dan sifat identitas digunakan secara eksplisit pada langkah tersebut. Dengan demikian invers setiap unsur unik."
        ]
      },
      {
        "kind": "proposition",
        "title": "Invers Hasil Kali",
        "statement": "Untuk $a,b\\in G$, berlaku $(ab)^{-1}=b^{-1}a^{-1}$.",
        "proof": [
          "Hitung $(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=aea^{-1}=aa^{-1}=e$.",
          "Sebaliknya, $(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=b^{-1}eb=e$.",
          "Karena invers unik, elemen $b^{-1}a^{-1}$ harus sama dengan $(ab)^{-1}$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Bilangan Bulat terhadap Penjumlahan",
        "problem": "Verifikasi bahwa $(\\mathbb Z,+)$ adalah grup abelian.",
        "solution": [
          "Jumlah dua integer tetap integer dan penjumlahan asosiatif.",
          "Identitas adalah $0$.",
          "Invers aditif dari $a$ adalah $-a$.",
          "Penjumlahan integer komutatif."
        ],
        "conclusion": "$(\\mathbb Z,+)$ adalah grup abelian."
      },
      {
        "title": "Bilangan Asli Positif terhadap Perkalian",
        "problem": "Tentukan apakah $(\\mathbb N_{>0},\\cdot)$ merupakan grup.",
        "solution": [
          "Perkalian tertutup dan asosiatif, serta identitasnya 1.",
          "Elemen 2 tidak mempunyai invers di $\\mathbb N_{>0}$ karena tidak ada bilangan asli positif $x$ dengan $2x=1$."
        ],
        "conclusion": "Struktur tersebut bukan grup."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan apakah $(\\mathbb R\\setminus\\{0\\},\\cdot)$ merupakan grup abelian.",
        "hint": "Periksa identitas dan invers multiplikatif.",
        "answer": "Ya. Identitas 1, invers $x^{-1}=1/x$, perkalian asosiatif dan komutatif."
      },
      {
        "prompt": "Buktikan hukum pembatalan kiri: jika $ab=ac$, maka $b=c$.",
        "hint": "Kalikan kedua ruas dari kiri dengan $a^{-1}$.",
        "answer": "$a^{-1}(ab)=a^{-1}(ac)$ memberi $(a^{-1}a)b=(a^{-1}a)c$, sehingga $b=c$."
      },
      {
        "prompt": "Buktikan jika $a^2=e$ untuk setiap $a\\in G$, maka $G$ abelian.",
        "hint": "Gunakan $(ab)^2=e$.",
        "answer": "Karena $(ab)^2=e$, diperoleh $abab=e$. Kalikan kiri dengan $a$ dan kanan dengan $b$ menggunakan $a^{-1}=a$, $b^{-1}=b$, diperoleh $ba=ab$."
      }
    ]
  },
  "alg-group-properties": {
    "title": "Sifat Dasar Grup",
    "focus": "Aksioma grup mempunyai banyak konsekuensi yang tidak perlu diasumsikan terpisah. Bagian ini menurunkan persamaan dasar, hukum pembatalan, keunikan solusi, dan aturan invers dari aksioma grup.",
    "definitions": [
      {
        "title": "Persamaan Grup",
        "statement": "Persamaan $ax=b$ dan $ya=b$ dipahami di dalam grup dengan operasi yang mungkin tidak komutatif. Posisi perkalian harus dipertahankan."
      },
      {
        "title": "Pembatalan",
        "statement": "Hukum pembatalan kiri menyatakan $ab=ac\\Rightarrow b=c$, sedangkan pembatalan kanan menyatakan $ba=ca\\Rightarrow b=c$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Persamaan Linear di Grup Mempunyai Solusi Unik",
        "statement": "Untuk $a,b\\in G$, persamaan $ax=b$ mempunyai solusi unik $x=a^{-1}b$, dan $ya=b$ mempunyai solusi unik $y=ba^{-1}$.",
        "proof": [
          "Kalikan $ax=b$ dari kiri dengan $a^{-1}$. Asosiativitas memberi $x=(a^{-1}a)x=a^{-1}b$.",
          "Substitusi $x=a^{-1}b$ memberi $a(a^{-1}b)=(aa^{-1})b=b$, sehingga solusi tersebut memang ada.",
          "Jika $x_1,x_2$ keduanya solusi, $ax_1=ax_2$ dan pembatalan kiri memberi $x_1=x_2$. Argumen kanan serupa untuk $ya=b$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Invers dari Invers",
        "statement": "Untuk setiap $a\\in G$, berlaku $(a^{-1})^{-1}=a$.",
        "proof": [
          "Definisi invers memberi $aa^{-1}=e$ dan $a^{-1}a=e$.",
          "Dua persamaan tersebut menunjukkan bahwa $a$ merupakan invers dari $a^{-1}$.",
          "Keunikan invers memberi $(a^{-1})^{-1}=a$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Menyelesaikan Persamaan Matriks",
        "problem": "Dalam grup $GL_2(\\mathbb R)$, selesaikan $AX=B$.",
        "solution": [
          "Karena $A$ invertibel, kalikan persamaan dari kiri dengan $A^{-1}$.",
          "Diperoleh $X=A^{-1}B$."
        ],
        "conclusion": "Solusi unik adalah $X=A^{-1}B$."
      },
      {
        "title": "Urutan Perkalian Penting",
        "problem": "Selesaikan $XA=B$ di grup yang tidak diasumsikan abelian.",
        "solution": [
          "Kalikan ruas kanan dari kanan dengan $A^{-1}$.",
          "Diperoleh $X=BA^{-1}$, bukan $A^{-1}B$ pada umumnya."
        ],
        "conclusion": "Solusi unik adalah $X=BA^{-1}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan jika $ab=e$, maka $b=a^{-1}$ dan juga $ba=e$.",
        "hint": "Gunakan keunikan solusi persamaan $ax=e$.",
        "answer": "Persamaan $ax=e$ mempunyai solusi unik $x=a^{-1}$. Karena $b$ juga solusi, $b=a^{-1}$, lalu $ba=a^{-1}a=e$."
      },
      {
        "prompt": "Sederhanakan $(abc)^{-1}$.",
        "hint": "Gunakan aturan invers hasil kali secara berulang.",
        "answer": "$(abc)^{-1}=c^{-1}b^{-1}a^{-1}$."
      },
      {
        "prompt": "Buktikan satu-satunya elemen idempoten dalam grup adalah identitas.",
        "hint": "Jika $a^2=a$, lakukan pembatalan.",
        "answer": "Dari $aa=a e$, pembatalan kiri memberi $a=e$."
      }
    ]
  },
  "alg-powers-orders": {
    "title": "Pangkat dan Orde",
    "focus": "Pangkat elemen grup memperpanjang notasi eksponen ke semua bilangan bulat. Orde elemen mengukur kapan pangkat elemen kembali ke identitas dan menghubungkan dinamika satu elemen dengan struktur subgrup siklik.",
    "definitions": [
      {
        "title": "Pangkat Elemen Grup",
        "statement": "Untuk $a\\in G$, didefinisikan $a^0=e$, $a^n=a\\cdots a$ sebanyak $n$ faktor jika $n>0$, dan $a^{-n}=(a^{-1})^n$."
      },
      {
        "title": "Orde Elemen",
        "statement": "Orde elemen $a$, ditulis $|a|$ atau $\\operatorname{ord}(a)$, adalah bilangan positif terkecil $n$ dengan $a^n=e$, jika ada. Jika tidak ada, orde $a$ tak hingga."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Kriteria Pangkat dan Orde",
        "statement": "Jika $\\operatorname{ord}(a)=n<\\infty$, maka $a^m=e$ jika dan hanya jika $n\\mid m$.",
        "proof": [
          "Jika $n\\mid m$, tulis $m=qn$. Diperoleh $a^m=(a^n)^q=e$.",
          "Sebaliknya, bagi $m$ oleh $n$: $m=qn+r$ dengan $0\\le r<n$. Jika $a^m=e$, maka $e=a^{qn+r}=(a^n)^qa^r=a^r$.",
          "Minimalitas $n$ sebagai pangkat positif pertama yang menghasilkan identitas memaksa $r=0$. Oleh karena itu $n\\mid m$."
        ]
      },
      {
        "kind": "proposition",
        "title": "Orde Pangkat",
        "statement": "Jika $\\operatorname{ord}(a)=n<\\infty$, maka $\\operatorname{ord}(a^k)=\\frac{n}{\\gcd(n,k)}$.",
        "proof": [
          "Misalkan $d=\\gcd(n,k)$, tulis $n=dn'$ dan $k=dk'$ dengan $\\gcd(n',k')=1$.",
          "$(a^k)^{n'}=a^{kn'}=a^{dk'n'}=a^{k'n}=e$, sehingga orde $a^k$ membagi $n'$.",
          "Jika $(a^k)^m=e$, maka $n\\mid km$, sehingga $dn'\\mid dk'm$ dan $n'\\mid k'm$. Karena $\\gcd(n',k')=1$, diperoleh $n'\\mid m$. Dengan demikian orde tepat $n'$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Orde Kelas Residu",
        "problem": "Tentukan orde $[4]$ dalam grup aditif $\\mathbb Z_{12}$.",
        "solution": [
          "Dicari $n>0$ terkecil dengan $n[4]=[0]$.",
          "Syaratnya $12\\mid4n$, setara dengan $3\\mid n$."
        ],
        "conclusion": "Orde $[4]$ adalah $3$."
      },
      {
        "title": "Orde Pangkat",
        "problem": "Jika $a$ berorde 18, tentukan orde $a^{12}$.",
        "solution": [
          "Gunakan rumus $\\operatorname{ord}(a^k)=18/\\gcd(18,12)$.",
          "$\\gcd(18,12)=6$."
        ],
        "conclusion": "$\\operatorname{ord}(a^{12})=3$."
      }
    ],
    "exercises": [
      {
        "prompt": "Jika $a$ berorde 20, tentukan orde $a^6$.",
        "hint": "Hitung $20/\\gcd(20,6)$.",
        "answer": "Orde adalah $20/2=10$."
      },
      {
        "prompt": "Buktikan jika $a$ dan $b$ komutatif serta berorde hingga relatif prima, maka $\\operatorname{ord}(ab)=\\operatorname{ord}(a)\\operatorname{ord}(b)$.",
        "hint": "Gunakan $(ab)^m=a^mb^m$ dan relatif prima orde.",
        "answer": "Jika $(ab)^k=e$, maka $a^k=b^{-k}$ berada pada $\\langle a\\rangle\\cap\\langle b\\rangle$. Karena orde kedua subgrup relatif prima, irisannya hanya $e$, sehingga kedua orde membagi $k$. KPK-nya adalah hasil kali. Sebaliknya pangkat hasil kali jelas menghasilkan $e$."
      },
      {
        "prompt": "Tentukan semua elemen berorde 4 dalam $\\mathbb Z_8$ aditif.",
        "hint": "Gunakan orde $[k]=8/\\gcd(8,k)$.",
        "answer": "Orde 4 terjadi ketika $\\gcd(8,k)=2$, yaitu $[2]$ dan $[6]$."
      }
    ]
  },
  "alg-subgroups": {
    "title": "Subgrup",
    "focus": "Subgrup adalah subset yang tetap membentuk grup dengan operasi yang diwarisi. Kriteria subgrup memungkinkan verifikasi yang lebih singkat daripada memeriksa seluruh aksioma grup dari awal.",
    "definitions": [
      {
        "title": "Subgrup",
        "statement": "Subset $H\\subseteq G$ disebut subgrup, ditulis $H\\le G$, jika $H$ sendiri merupakan grup terhadap operasi yang diwarisi dari $G$."
      },
      {
        "title": "Subgrup yang Dibangkitkan",
        "statement": "Untuk $S\\subseteq G$, subgrup yang dibangkitkan oleh $S$, ditulis $\\langle S\\rangle$, adalah subgrup terkecil dari $G$ yang memuat $S$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Uji Subgrup Satu Langkah",
        "statement": "Subset tak kosong $H\\subseteq G$ adalah subgrup jika dan hanya jika $ab^{-1}\\in H$ untuk setiap $a,b\\in H$.",
        "proof": [
          "Jika $H$ subgrup, invers $b^{-1}$ berada di $H$ dan ketertutupan memberi $ab^{-1}\\in H$.",
          "Sebaliknya, ambil $h\\in H$. Dengan $a=b=h$, diperoleh $e=hh^{-1}\\in H$. Dengan $a=e$ dan $b=h$, diperoleh $h^{-1}\\in H$.",
          "Untuk $a,b\\in H$, karena $b^{-1}\\in H$, terapkan kriteria pada $a$ dan $b^{-1}$ untuk memperoleh $a(b^{-1})^{-1}=ab\\in H$. Asosiativitas diwarisi dari $G$, sehingga $H$ subgrup."
        ]
      },
      {
        "kind": "proposition",
        "title": "Irisan Subgrup",
        "statement": "Irisan sebarang keluarga subgrup dari $G$ adalah subgrup dari $G$.",
        "proof": [
          "Setiap subgrup memuat identitas $e$, sehingga irisan keluarga subgrup tidak kosong.",
          "Jika $a,b$ berada pada irisan, keduanya berada pada setiap subgrup dalam keluarga. Uji subgrup pada masing-masing memberi $ab^{-1}$ berada pada setiap subgrup.",
          "Dengan demikian $ab^{-1}$ berada pada irisan. Uji subgrup satu langkah memberi bahwa irisan tersebut subgrup."
        ]
      }
    ],
    "examples": [
      {
        "title": "Subgrup Kelipatan 4",
        "problem": "Buktikan $4\\mathbb Z$ adalah subgrup dari $(\\mathbb Z,+)$.",
        "solution": [
          "$4\\mathbb Z$ tidak kosong karena memuat 0.",
          "Jika $4m,4n\\in4\\mathbb Z$, maka $4m-4n=4(m-n)\\in4\\mathbb Z$."
        ],
        "conclusion": "$4\\mathbb Z\\le\\mathbb Z$."
      },
      {
        "title": "Subset Bukan Subgrup",
        "problem": "Periksa $H=\\{1,2,4\\}$ dalam grup $\\mathbb Z_7^\\times$.",
        "solution": [
          "Operasi adalah perkalian modulo 7.",
          "$2\\cdot4=8\\equiv1$, tetapi $4\\cdot4=16\\equiv2$ masih di $H$ dan $2\\cdot2=4$.",
          "Invers 1,2,4 masing-masing 1,4,2."
        ],
        "conclusion": "$H$ merupakan subgrup berorde 3."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan pusat $Z(G)=\\{z\\in G:zg=gz\\text{ untuk semua }g\\in G\\}$ adalah subgrup.",
        "hint": "Gunakan uji $ab^{-1}$.",
        "answer": "Identitas berada di pusat. Jika $a,b$ komutatif dengan semua $g$, maka $(ab^{-1})g=a(b^{-1}g)=a(gb^{-1})=(ag)b^{-1}=(ga)b^{-1}=g(ab^{-1})$."
      },
      {
        "prompt": "Tentukan semua subgrup dari $\\mathbb Z_8$ aditif.",
        "hint": "Subgrup grup siklik bersesuaian dengan pembagi orde.",
        "answer": "Subgrupnya adalah $\\{0\\}$, $\\langle4\\rangle=\\{0,4\\}$, $\\langle2\\rangle=\\{0,2,4,6\\}$, dan $\\mathbb Z_8$."
      },
      {
        "prompt": "Buktikan gabungan dua subgrup $H\\cup K$ merupakan subgrup jika dan hanya jika $H\\subseteq K$ atau $K\\subseteq H$.",
        "hint": "Untuk arah sulit, andaikan tidak ada yang memuat yang lain dan pilih $h\\in H\\setminus K$, $k\\in K\\setminus H$.",
        "answer": "Jika $H\\cup K$ subgrup, $hk$ berada di gabungan. Jika $hk\\in H$, maka $k=h^{-1}(hk)\\in H$, kontradiksi. Jika $hk\\in K$, maka $h=(hk)k^{-1}\\in K$, kontradiksi."
      }
    ]
  },
  "alg-cyclic-groups": {
    "title": "Grup Siklik",
    "focus": "Grup siklik dibangkitkan oleh satu elemen. Struktur ini dapat diklasifikasikan secara lengkap, dan seluruh subgrupnya juga siklik. Grup siklik menjadi model dasar untuk memahami orde, koset, dan homomorfisma.",
    "definitions": [
      {
        "title": "Grup Siklik dan Generator",
        "statement": "Grup $G$ disebut siklik jika terdapat $a\\in G$ dengan $G=\\langle a\\rangle=\\{a^n:n\\in\\mathbb Z\\}$. Elemen $a$ disebut generator."
      },
      {
        "title": "Subgrup Siklik",
        "statement": "Untuk elemen $a\\in G$, $\\langle a\\rangle$ adalah himpunan semua pangkat integer dari $a$ dan merupakan subgrup siklik."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Setiap Subgrup Grup Siklik adalah Siklik",
        "statement": "Jika $G=\\langle a\\rangle$ dan $H\\le G$, maka $H$ siklik. Jika $G$ tak hingga dan $H\\ne\\{e\\}$, terdapat $m\\ge1$ sehingga $H=\\langle a^m\\rangle$.",
        "proof": [
          "Jika $H=\\{e\\}$, jelas siklik. Untuk $H\\ne\\{e\\}$, pilih $m$ positif terkecil dengan $a^m\\in H$.",
          "Setiap $h\\in H$ berbentuk $a^k$. Bagi $k=qm+r$ dengan $0\\le r<m$. Karena $a^k(a^m)^{-q}=a^r\\in H$, minimalitas $m$ memaksa $r=0$.",
          "Dengan demikian setiap $h$ adalah pangkat dari $a^m$, sehingga $H\\subseteq\\langle a^m\\rangle$. Inklusi sebaliknya jelas karena $a^m\\in H$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Klasifikasi Grup Siklik",
        "statement": "Setiap grup siklik tak hingga isomorfik dengan $(\\mathbb Z,+)$, dan setiap grup siklik berorde $n$ isomorfik dengan $(\\mathbb Z_n,+)$.",
        "proof": [
          "Jika $G=\\langle a\\rangle$ tak hingga, definisikan $\\varphi:\\mathbb Z\\to G$ dengan $\\varphi(k)=a^k$. Peta ini homomorfisma dan surjektif. Orde $a$ tak hingga membuat kernel hanya $0$, sehingga injektif.",
          "Jika $|G|=n$, definisikan $\\psi:\\mathbb Z_n\\to G$ dengan $\\psi([k])=a^k$. Karena $a^n=e$, peta well-defined dan homomorfisma.",
          "Setiap elemen $G$ merupakan pangkat $a$, sehingga surjektif. Jika $a^r=a^s$, maka $n\\mid(r-s)$ dan $[r]=[s]$, sehingga injektif."
        ]
      }
    ],
    "examples": [
      {
        "title": "Generator $\\mathbb Z_{10}$",
        "problem": "Tentukan semua generator grup aditif $\\mathbb Z_{10}$.",
        "solution": [
          "Elemen $[k]$ menghasilkan seluruh grup tepat ketika $\\gcd(k,10)=1$.",
          "Kelas yang relatif prima dengan 10 adalah 1,3,7,9."
        ],
        "conclusion": "Generator adalah $[1],[3],[7],[9]$."
      },
      {
        "title": "Subgrup $\\mathbb Z_{12}$",
        "problem": "Tentukan subgrup yang dibangkitkan oleh $[8]$.",
        "solution": [
          "Kelipatan berturut-turut: $0,8,16\\equiv4,24\\equiv0$ modulo 12.",
          "Siklus kembali setelah tiga langkah."
        ],
        "conclusion": "$\\langle[8]\\rangle=\\{[0],[4],[8]\\}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan banyak generator grup siklik berorde 18.",
        "hint": "Gunakan fungsi totien Euler.",
        "answer": "Banyak generator adalah $\\varphi(18)=18(1-1/2)(1-1/3)=6$."
      },
      {
        "prompt": "Buktikan grup siklik selalu abelian.",
        "hint": "Tulis dua elemen sebagai pangkat generator.",
        "answer": "Jika $x=a^m$ dan $y=a^n$, maka $xy=a^{m+n}=a^{n+m}=yx$."
      },
      {
        "prompt": "Tentukan semua subgrup $\\mathbb Z_{18}$.",
        "hint": "Gunakan satu subgrup unik untuk setiap pembagi 18.",
        "answer": "Untuk pembagi $d$ dari 18, terdapat subgrup berorde $d$. Subgrupnya berorde 1,2,3,6,9,18, masing-masing dapat ditulis $\\langle[18/d]\\rangle$."
      }
    ]
  },
  "alg-cosets-lagrange": {
    "title": "Koset dan Teorema Lagrange",
    "focus": "Koset menerjemahkan subgrup di dalam grup menjadi blok-blok berukuran sama. Teorema Lagrange menghubungkan ukuran subgrup, indeks, dan orde grup, lalu memberi konsekuensi kuat tentang orde elemen.",
    "definitions": [
      {
        "title": "Koset Kiri dan Kanan",
        "statement": "Jika $H\\le G$ dan $g\\in G$, koset kiri $gH=\\{gh:h\\in H\\}$ dan koset kanan $Hg=\\{hg:h\\in H\\}$."
      },
      {
        "title": "Indeks Subgrup",
        "statement": "Indeks $[G:H]$ adalah banyak koset kiri berbeda dari $H$ dalam $G$."
      }
    ],
    "results": [
      {
        "kind": "lemma",
        "title": "Koset Sama atau Saling Lepas",
        "statement": "Dua koset kiri $aH$ dan $bH$ sama atau saling lepas.",
        "proof": [
          "Diandaikan $aH\\cap bH\\ne\\varnothing$. Pilih $x=ah_1=bh_2$ pada irisan.",
          "Dari $ah_1=bh_2$ diperoleh $a=b h_2h_1^{-1}$. Karena $h_2h_1^{-1}\\in H$, berlaku $aH\\subseteq bH$.",
          "Argumen simetris memberi $bH\\subseteq aH$, sehingga $aH=bH$. Dengan demikian dua koset yang berbeda harus saling lepas."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Lagrange",
        "statement": "Jika $G$ grup hingga dan $H\\le G$, maka $|G|=[G:H]|H|$. Khususnya, $|H|$ membagi $|G|$.",
        "proof": [
          "Koset-koset kiri $H$ membentuk partisi $G$ berdasarkan lemma koset.",
          "Untuk setiap $g\\in G$, peta $H\\to gH$ yang diberikan oleh $h\\mapsto gh$ adalah bijektif, sehingga setiap koset mempunyai tepat $|H|$ elemen.",
          "Jika terdapat $[G:H]$ koset, menjumlahkan ukuran seluruh blok partisi memberi $|G|=[G:H]|H|$."
        ]
      },
      {
        "kind": "corollary",
        "title": "Orde Elemen Membagi Orde Grup",
        "statement": "Jika $G$ hingga dan $a\\in G$, maka $\\operatorname{ord}(a)$ membagi $|G|$.",
        "proof": [
          "Subgrup $\\langle a\\rangle$ mempunyai ukuran sama dengan orde $a$.",
          "Teorema Lagrange diterapkan pada $\\langle a\\rangle\\le G$.",
          "Diperoleh $|\\langle a\\rangle|\\mid|G|$, sehingga $\\operatorname{ord}(a)\\mid|G|$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Koset pada $\\mathbb Z_{12}$",
        "problem": "Ambil $H=\\{[0],[4],[8]\\}\\le\\mathbb Z_{12}$. Tentukan semua koset.",
        "solution": [
          "$H$ sendiri adalah satu koset.",
          "$[1]+H=\\{[1],[5],[9]\\}$, $[2]+H=\\{[2],[6],[10]\\}$, dan $[3]+H=\\{[3],[7],[11]\\}$.",
          "Koset berikutnya mengulang salah satu dari empat blok tersebut."
        ],
        "conclusion": "Terdapat 4 koset, sehingga $[\\mathbb Z_{12}:H]=4$."
      },
      {
        "title": "Menentukan Kemungkinan Orde Elemen",
        "problem": "Jika $|G|=30$, tentukan kemungkinan orde suatu elemen.",
        "solution": [
          "Orde elemen membagi orde grup.",
          "Pembagi positif 30 adalah $1,2,3,5,6,10,15,30$."
        ],
        "conclusion": "Orde elemen hanya mungkin salah satu pembagi positif 30."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan grup berorde prima bersifat siklik.",
        "hint": "Ambil elemen bukan identitas dan gunakan Lagrange.",
        "answer": "Jika $|G|=p$ prima dan $a\\ne e$, orde $a$ membagi $p$ tetapi bukan 1. Oleh karena itu orde $a=p$ dan $\\langle a\\rangle=G$."
      },
      {
        "prompt": "Jika $|G|=24$ dan $|H|=6$, hitung $[G:H]$.",
        "hint": "Gunakan Teorema Lagrange.",
        "answer": "$[G:H]=24/6=4$."
      },
      {
        "prompt": "Buktikan $aH=bH$ jika dan hanya jika $a^{-1}b\\in H$.",
        "hint": "Manipulasi persamaan perwakilan koset.",
        "answer": "Jika koset sama, $b\\in aH$, sehingga $b=ah$ dan $a^{-1}b=h\\in H$. Sebaliknya, jika $a^{-1}b=h\\in H$, maka $b=ah$ dan $bH=ahH=aH$."
      }
    ]
  },
  "alg-normal-subgroups": {
    "title": "Subgrup Normal",
    "focus": "Subgrup normal adalah subgrup yang koset kiri dan kanannya berimpit. Normalitas merupakan syarat tepat agar himpunan koset dapat diberi operasi grup dan menjadi grup faktor.",
    "definitions": [
      {
        "title": "Subgrup Normal",
        "statement": "Subgrup $N\\le G$ disebut normal, ditulis $N\\trianglelefteq G$, jika $gN=Ng$ untuk setiap $g\\in G$."
      },
      {
        "title": "Konjugat Subgrup",
        "statement": "Untuk $g\\in G$ dan $N\\le G$, konjugat $gNg^{-1}=\\{gng^{-1}:n\\in N\\}$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Kriteria Normalitas melalui Konjugasi",
        "statement": "Untuk $N\\le G$, kondisi berikut ekuivalen: $N\\trianglelefteq G$ dan $gNg^{-1}=N$ untuk setiap $g\\in G$.",
        "proof": [
          "Jika $N$ normal, $gN=Ng$. Kalikan himpunan ini dari kanan dengan $g^{-1}$ untuk memperoleh $gNg^{-1}=Ngg^{-1}=N$.",
          "Sebaliknya, jika $gNg^{-1}=N$, kalikan dari kanan dengan $g$ untuk memperoleh $gN=Ng$.",
          "Karena ekuivalensi berlaku untuk setiap $g\\in G$, kedua karakterisasi normalitas sama."
        ]
      },
      {
        "kind": "proposition",
        "title": "Subgrup Indeks Dua Normal",
        "statement": "Jika $H\\le G$ dan $[G:H]=2$, maka $H\\trianglelefteq G$.",
        "proof": [
          "Terdapat tepat dua koset kiri, salah satunya $H$. Untuk $g\\notin H$, koset kiri $gH$ harus sama dengan komplemen $G\\setminus H$.",
          "Demikian pula terdapat tepat dua koset kanan, dan untuk $g\\notin H$, $Hg=G\\setminus H$.",
          "Jika $g\\in H$, kedua koset sama dengan $H$; jika $g\\notin H$, keduanya sama dengan komplemen. Dengan demikian $gH=Hg$ untuk semua $g$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Subgrup pada Grup Abelian",
        "problem": "Buktikan setiap subgrup grup abelian adalah normal.",
        "solution": [
          "Jika $G$ abelian, untuk $g\\in G$ dan $h\\in H$ berlaku $gh=hg$.",
          "Oleh karena itu setiap elemen $gH$ berada di $Hg$ dan sebaliknya."
        ],
        "conclusion": "Setiap $H\\le G$ normal apabila $G$ abelian."
      },
      {
        "title": "Subgrup Tidak Normal di $S_3$",
        "problem": "Ambil $H=\\{e,(12)\\}\\le S_3$. Tunjukkan $H$ tidak normal.",
        "solution": [
          "Konjugasikan $(12)$ oleh $(123)$.",
          "$(123)(12)(123)^{-1}=(23)$.",
          "$(23)\\notin H$."
        ],
        "conclusion": "$H$ tidak normal di $S_3$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan kernel setiap homomorfisma grup adalah subgrup normal.",
        "hint": "Gunakan $\\varphi(gng^{-1})=\\varphi(g)e\\varphi(g)^{-1}$.",
        "answer": "Jika $n\\in\\ker\\varphi$, maka $\\varphi(gng^{-1})=\\varphi(g)\\varphi(n)\\varphi(g)^{-1}=e$. Dengan demikian, $gng^{-1}\\in\\ker\\varphi$ untuk semua $g$."
      },
      {
        "prompt": "Buktikan pusat $Z(G)$ normal di $G$.",
        "hint": "Konjugasi elemen pusat.",
        "answer": "Jika $z\\in Z(G)$, maka $gzg^{-1}=zgg^{-1}=z$. Dengan demikian, setiap konjugat tetap di pusat."
      },
      {
        "prompt": "Jika $H$ satu-satunya subgrup berorde $m$ pada $G$, buktikan $H$ normal.",
        "hint": "Konjugat $gHg^{-1}$ mempunyai orde sama dengan $H$.",
        "answer": "Untuk setiap $g$, $gHg^{-1}$ adalah subgrup berorde $m$. Keunikan memaksa $gHg^{-1}=H$, sehingga $H$ normal."
      }
    ]
  },
  "alg-factor-groups": {
    "title": "Grup Faktor",
    "focus": "Grup faktor menggabungkan elemen-elemen grup yang berbeda hanya sebesar elemen subgrup normal. Konstruksi ini memerlukan pengecekan operasi koset yang well-defined dan menjadi salah satu cara utama menyederhanakan struktur grup.",
    "definitions": [
      {
        "title": "Grup Faktor",
        "statement": "Jika $N\\trianglelefteq G$, grup faktor $G/N$ adalah himpunan koset $\\{gN:g\\in G\\}$ dengan operasi $(gN)(hN)=(gh)N$."
      },
      {
        "title": "Peta Kuosien Kanonik",
        "statement": "Peta $\\pi:G\\to G/N$ yang diberikan oleh $\\pi(g)=gN$ disebut peta kuosien kanonik."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Operasi pada $G/N$ Well-Defined",
        "statement": "Jika $N\\trianglelefteq G$, operasi $(gN)(hN)=(gh)N$ tidak bergantung pada pemilihan wakil koset.",
        "proof": [
          "Diandaikan $gN=g'N$ dan $hN=h'N$. Terdapat $n_1,n_2\\in N$ dengan $g'=gn_1$ dan $h'=hn_2$.",
          "Diperoleh $g'h'=gn_1hn_2=gh(h^{-1}n_1h)n_2$. Normalitas $N$ memberi $h^{-1}n_1h\\in N$, sehingga faktor setelah $gh$ berada di $N$.",
          "Oleh karena itu $g'h'N=ghN$. Dengan demikian hasil kali koset tidak berubah ketika wakil diganti."
        ]
      },
      {
        "kind": "proposition",
        "title": "Peta Kuosien adalah Homomorfisma",
        "statement": "Peta $\\pi:G\\to G/N$, $\\pi(g)=gN$, surjektif dan memenuhi $\\ker\\pi=N$.",
        "proof": [
          "$\\pi(gh)=ghN=(gN)(hN)=\\pi(g)\\pi(h)$, sehingga $\\pi$ homomorfisma.",
          "Setiap koset $gN$ merupakan citra $g$, sehingga $\\pi$ surjektif.",
          "$\\pi(g)=N$ jika dan hanya jika $gN=N$, ekuivalen dengan $g\\in N$. Dengan demikian kernel tepat $N$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Grup Faktor $\\mathbb Z/4\\mathbb Z$",
        "problem": "Jelaskan $\\mathbb Z/4\\mathbb Z$ sebagai grup faktor.",
        "solution": [
          "$4\\mathbb Z\\trianglelefteq\\mathbb Z$ karena $\\mathbb Z$ abelian.",
          "Kosetnya adalah $0+4\\mathbb Z,1+4\\mathbb Z,2+4\\mathbb Z,3+4\\mathbb Z$.",
          "Penjumlahan koset sama dengan penjumlahan modulo 4."
        ],
        "conclusion": "$\\mathbb Z/4\\mathbb Z\\cong\\mathbb Z_4$."
      },
      {
        "title": "Faktor $S_3/A_3$",
        "problem": "Tentukan orde $S_3/A_3$.",
        "solution": [
          "$|S_3|=6$ dan $|A_3|=3$.",
          "$A_3$ berindeks 2, sehingga normal.",
          "Teorema Lagrange memberi dua koset."
        ],
        "conclusion": "$|S_3/A_3|=2$, sehingga grup faktor isomorfik dengan $\\mathbb Z_2$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan semua elemen $\\mathbb Z/6\\mathbb Z$.",
        "hint": "Tuliskan enam koset berbeda dari $6\\mathbb Z$.",
        "answer": "Elemennya adalah $0+6\\mathbb Z,\\ldots,5+6\\mathbb Z$."
      },
      {
        "prompt": "Jika $|G|=60$ dan $|N|=12$ dengan $N\\trianglelefteq G$, hitung $|G/N|$.",
        "hint": "Gunakan Lagrange.",
        "answer": "$|G/N|=60/12=5$."
      },
      {
        "prompt": "Buktikan jika $G/N$ siklik dan $N\\subseteq Z(G)$, tidak selalu berarti $G$ siklik; berikan contoh.",
        "hint": "Cari grup abelian tak siklik dengan faktor siklik.",
        "answer": "Ambil $G=\\mathbb Z_2\\times\\mathbb Z_2$ dan $N=\\mathbb Z_2\\times\\{0\\}$. Karena $G$ abelian, $N\\subseteq Z(G)$, dan $G/N\\cong\\mathbb Z_2$ siklik, tetapi $G$ sendiri tidak siklik."
      }
    ]
  },
  "alg-group-homomorphisms": {
    "title": "Homomorfisma Grup",
    "focus": "Homomorfisma grup adalah fungsi yang mempertahankan operasi. Kernel dan image merekam dua aspek penting: bagian domain yang runtuh ke identitas dan bagian kodomain yang benar-benar dicapai.",
    "definitions": [
      {
        "title": "Homomorfisma Grup",
        "statement": "Fungsi $\\varphi:G\\to H$ disebut homomorfisma jika $\\varphi(ab)=\\varphi(a)\\varphi(b)$ untuk setiap $a,b\\in G$."
      },
      {
        "title": "Kernel dan Image",
        "statement": "Kernel $\\ker\\varphi=\\{g\\in G:\\varphi(g)=e_H\\}$, sedangkan image $\\operatorname{im}\\varphi=\\{\\varphi(g):g\\in G\\}\\le H$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Homomorfisma Mempertahankan Identitas dan Invers",
        "statement": "Untuk homomorfisma $\\varphi:G\\to H$, berlaku $\\varphi(e_G)=e_H$ dan $\\varphi(g^{-1})=\\varphi(g)^{-1}$.",
        "proof": [
          "$\\varphi(e_G)=\\varphi(e_Ge_G)=\\varphi(e_G)^2$. Pembatalan di $H$ memberi $\\varphi(e_G)=e_H$.",
          "$e_H=\\varphi(e_G)=\\varphi(gg^{-1})=\\varphi(g)\\varphi(g^{-1})$.",
          "Keunikan invers di $H$ memberi $\\varphi(g^{-1})=\\varphi(g)^{-1}$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kernel Normal dan Kriteria Injektif",
        "statement": "Kernel homomorfisma $\\varphi:G\\to H$ adalah subgrup normal $G$, dan $\\varphi$ injektif jika dan hanya jika $\\ker\\varphi=\\{e_G\\}$.",
        "proof": [
          "Untuk $x,y\\in\\ker\\varphi$, $\\varphi(xy^{-1})=\\varphi(x)\\varphi(y)^{-1}=e$, sehingga kernel subgrup. Untuk $g\\in G$ dan $x\\in\\ker\\varphi$, $\\varphi(gxg^{-1})=e$, sehingga kernel normal.",
          "Jika $\\varphi$ injektif dan $x\\in\\ker\\varphi$, maka $\\varphi(x)=\\varphi(e_G)$, sehingga $x=e_G$.",
          "Sebaliknya, jika kernel trivial dan $\\varphi(a)=\\varphi(b)$, maka $\\varphi(ab^{-1})=e$, sehingga $ab^{-1}=e$ dan $a=b$. Dengan demikian $\\varphi$ injektif."
        ]
      }
    ],
    "examples": [
      {
        "title": "Reduksi Modulo $n$",
        "problem": "Definisikan $\\varphi:\\mathbb Z\\to\\mathbb Z_n$ dengan $\\varphi(k)=[k]_n$. Tentukan kernel dan image.",
        "solution": [
          "$\\varphi(a+b)=[a+b]=[a]+[b]$, sehingga homomorfisma.",
          "Kernel terdiri dari integer yang kongruen 0 modulo $n$, yaitu $n\\mathbb Z$.",
          "Setiap kelas residu mempunyai wakil integer, sehingga image seluruh $\\mathbb Z_n$."
        ],
        "conclusion": "$\\ker\\varphi=n\\mathbb Z$ dan $\\operatorname{im}\\varphi=\\mathbb Z_n$."
      },
      {
        "title": "Determinan",
        "problem": "Tunjukkan $\\det:GL_n(\\mathbb R)\\to\\mathbb R^\\times$ adalah homomorfisma.",
        "solution": [
          "Sifat determinan memberi $\\det(AB)=\\det(A)\\det(B)$.",
          "Karena $A$ invertibel, $\\det(A)\\ne0$, sehingga nilai berada di $\\mathbb R^\\times$."
        ],
        "conclusion": "Kernel adalah $SL_n(\\mathbb R)=\\{A:\\det A=1\\}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan kernel homomorfisma $\\varphi:\\mathbb Z\\to\\mathbb Z_8$ dengan $\\varphi(k)=[3k]_8$.",
        "hint": "Cari $k$ dengan $8\\mid3k$.",
        "answer": "Karena $\\gcd(3,8)=1$, syaratnya $8\\mid k$. Dengan demikian, kernel $=8\\mathbb Z$."
      },
      {
        "prompt": "Buktikan image homomorfisma selalu subgrup.",
        "hint": "Gunakan uji subgrup satu langkah.",
        "answer": "Jika $x=\\varphi(a)$ dan $y=\\varphi(b)$, maka $xy^{-1}=\\varphi(a)\\varphi(b^{-1})=\\varphi(ab^{-1})$ berada pada image."
      },
      {
        "prompt": "Jika $G$ hingga dan $\\varphi:G\\to H$ homomorfisma, buktikan $|G|=|\\ker\\varphi|\\,|\\operatorname{im}\\varphi|$.",
        "hint": "Gunakan Teorema Isomorfisma Pertama atau hitung ukuran koset kernel.",
        "answer": "Koset kernel tepat merupakan serat-serat nilai homomorfisma dan semuanya berukuran $|\\ker\\varphi|$. Banyak serat sama dengan $|\\operatorname{im}\\varphi|$."
      }
    ]
  },
  "alg-group-isomorphisms": {
    "title": "Isomorfisma Grup",
    "focus": "Isomorfisma adalah homomorfisma bijektif dan menyatakan dua grup mempunyai struktur aljabar yang sama meskipun unsur-unsurnya tampak berbeda. Invarian seperti orde elemen, sifat abelian, dan struktur subgrup dipertahankan.",
    "definitions": [
      {
        "title": "Isomorfisma Grup",
        "statement": "Homomorfisma bijektif $\\varphi:G\\to H$ disebut isomorfisma. Jika ada isomorfisma, ditulis $G\\cong H$."
      },
      {
        "title": "Invarian Isomorfisma",
        "statement": "Sifat yang selalu sama pada grup-grup isomorfik disebut invarian isomorfisma, misalnya orde grup, orde elemen yang bersesuaian, dan sifat abelian."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Isomorfisma Mempertahankan Orde Elemen",
        "statement": "Jika $\\varphi:G\\to H$ isomorfisma, maka $\\operatorname{ord}(\\varphi(g))=\\operatorname{ord}(g)$ untuk setiap $g\\in G$.",
        "proof": [
          "Untuk setiap integer $n$, homomorfisma memberi $\\varphi(g^n)=\\varphi(g)^n$.",
          "Jika $g^n=e_G$, maka $\\varphi(g)^n=e_H$, sehingga orde $\\varphi(g)$ membagi orde $g$.",
          "Terapkan argumen yang sama pada isomorfisma invers $\\varphi^{-1}$ untuk memperoleh pembagian sebaliknya. Dua orde positif yang saling membagi harus sama."
        ]
      },
      {
        "kind": "proposition",
        "title": "Sifat Abelian Dipertahankan",
        "statement": "Jika $G\\cong H$, maka $G$ abelian jika dan hanya jika $H$ abelian.",
        "proof": [
          "Misalkan $G$ abelian dan $x,y\\in H$. Karena isomorfisma surjektif, terdapat $a,b\\in G$ dengan $x=\\varphi(a)$ dan $y=\\varphi(b)$.",
          "$xy=\\varphi(a)\\varphi(b)=\\varphi(ab)=\\varphi(ba)=\\varphi(b)\\varphi(a)=yx$.",
          "Arah sebaliknya diperoleh dengan menerapkan argumen yang sama pada isomorfisma invers."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z_6$ dan Akar Keenam Satuan",
        "problem": "Tunjukkan grup aditif $\\mathbb Z_6$ isomorfik dengan grup akar keenam satuan $\\mu_6=\\{e^{2\\pi ik/6}:0\\le k<6\\}$.",
        "solution": [
          "Definisikan $\\varphi([k])=e^{2\\pi ik/6}$.",
          "$\\varphi([a]+[b])=e^{2\\pi i(a+b)/6}=\\varphi([a])\\varphi([b])$.",
          "Setiap akar keenam satuan muncul tepat sekali dari satu kelas modulo 6."
        ],
        "conclusion": "$\\mathbb Z_6\\cong\\mu_6$."
      },
      {
        "title": "Membedakan $\\mathbb Z_4$ dan Klein Four",
        "problem": "Tunjukkan $\\mathbb Z_4\\not\\cong\\mathbb Z_2\\times\\mathbb Z_2$.",
        "solution": [
          "$\\mathbb Z_4$ mempunyai elemen $[1]$ berorde 4.",
          "Setiap elemen tak identitas pada $\\mathbb Z_2\\times\\mathbb Z_2$ berorde 2."
        ],
        "conclusion": "Perbedaan orde elemen membuktikan kedua grup tidak isomorfik."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $2\\mathbb Z$ dan $\\mathbb Z$ isomorfik sebagai grup aditif.",
        "hint": "Definisikan $\\varphi(n)=2n$.",
        "answer": "Peta $n\\mapsto2n$ homomorfisma, injektif, dan setiap elemen $2k$ mempunyai prapeta $k$."
      },
      {
        "prompt": "Tentukan apakah $(\\mathbb R,+)$ isomorfik dengan $(\\mathbb R_{>0},\\cdot)$.",
        "hint": "Gunakan fungsi eksponensial.",
        "answer": "Peta $x\\mapsto e^x$ bijektif dan $e^{x+y}=e^xe^y$, sehingga merupakan isomorfisma."
      },
      {
        "prompt": "Jelaskan mengapa grup berorde berbeda tidak dapat isomorfik.",
        "hint": "Isomorfisma adalah bijeksi.",
        "answer": "Bijeksi antara himpunan hingga mempertahankan banyak elemen. Dengan demikian, orde grup harus sama."
      }
    ]
  },
  "alg-group-isomorphism-theorems": {
    "title": "Teorema Isomorfisma untuk Grup",
    "focus": "Teorema isomorfisma menghubungkan homomorfisma, kernel, image, subgrup normal, dan grup faktor. Hasil-hasil ini memungkinkan struktur grup dipelajari melalui peta dan kuosien yang lebih sederhana.",
    "definitions": [
      {
        "title": "Kuosien oleh Kernel",
        "statement": "Untuk homomorfisma $\\varphi:G\\to H$, kernel $K=\\ker\\varphi$ normal di $G$, sehingga grup faktor $G/K$ terdefinisi."
      },
      {
        "title": "Subgrup Produk $HN$",
        "statement": "Jika $H\\le G$ dan $N\\trianglelefteq G$, himpunan $HN=\\{hn:h\\in H,n\\in N\\}$ merupakan subgrup $G$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Teorema Isomorfisma Pertama",
        "statement": "Jika $\\varphi:G\\to H$ homomorfisma, maka $G/\\ker\\varphi\\cong\\operatorname{im}\\varphi$.",
        "proof": [
          "Definisikan $\\overline\\varphi:G/\\ker\\varphi\\to\\operatorname{im}\\varphi$ dengan $\\overline\\varphi(g\\ker\\varphi)=\\varphi(g)$. Jika dua koset sama, selisih wakil berada di kernel, sehingga nilai $\\varphi$ sama. Peta well-defined.",
          "$\\overline\\varphi$ homomorfisma dan surjektif menurut definisi image.",
          "Jika $\\overline\\varphi(gK)=e$, maka $g\\in K$, sehingga $gK=K$. Kernel peta faktor trivial, sehingga peta injektif. Dengan demikian peta tersebut isomorfisma."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Isomorfisma Kedua",
        "statement": "Jika $H\\le G$ dan $N\\trianglelefteq G$, maka $H/(H\\cap N)\\cong HN/N$.",
        "proof": [
          "Definisikan $\\varphi:H\\to HN/N$ dengan $\\varphi(h)=hN$. Peta ini homomorfisma.",
          "Image-nya adalah seluruh $HN/N$, karena setiap koset dalam $HN/N$ mempunyai bentuk $hnN=hN$. Kernel terdiri dari $h\\in H$ yang juga berada di $N$, yaitu $H\\cap N$.",
          "Teorema Isomorfisma Pertama memberi $H/(H\\cap N)\\cong HN/N$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Teorema Isomorfisma Ketiga",
        "statement": "Jika $N\\trianglelefteq H\\trianglelefteq G$ dan $N\\trianglelefteq G$, maka $(G/N)/(H/N)\\cong G/H$.",
        "proof": [
          "Definisikan $\\psi:G/N\\to G/H$ dengan $\\psi(gN)=gH$. Inklusi $N\\subseteq H$ memastikan peta well-defined.",
          "Peta surjektif dan kernelnya terdiri dari koset $gN$ dengan $g\\in H$, yaitu $H/N$.",
          "Teorema Isomorfisma Pertama diterapkan pada $\\psi$ memberi $(G/N)/(H/N)\\cong G/H$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Reduksi Modulo",
        "problem": "Gunakan Teorema Isomorfisma Pertama pada $\\varphi:\\mathbb Z\\to\\mathbb Z_n$, $k\\mapsto[k]_n$.",
        "solution": [
          "Kernel $\\varphi=n\\mathbb Z$ dan image seluruh $\\mathbb Z_n$.",
          "Teorema Isomorfisma Pertama memberi $\\mathbb Z/n\\mathbb Z\\cong\\mathbb Z_n$."
        ],
        "conclusion": "Kuosien integer oleh kelipatan $n$ merealisasikan aritmetika modulo $n$."
      },
      {
        "title": "Determinan",
        "problem": "Gunakan determinan untuk memperoleh kuosien $GL_n(\\mathbb R)/SL_n(\\mathbb R)$.",
        "solution": [
          "$\\det:GL_n(\\mathbb R)\\to\\mathbb R^\\times$ surjektif.",
          "Kernelnya $SL_n(\\mathbb R)$."
        ],
        "conclusion": "$GL_n(\\mathbb R)/SL_n(\\mathbb R)\\cong\\mathbb R^\\times$."
      }
    ],
    "exercises": [
      {
        "prompt": "Gunakan Teorema Isomorfisma Pertama untuk menentukan $\\mathbb Z/\\ker\\varphi$ bagi $\\varphi(k)=[4k]_{12}$.",
        "hint": "Hitung kernel dan image.",
        "answer": "$[4k]_{12}=0$ jika $3\\mid k$, sehingga kernel $3\\mathbb Z$. Image $=\\{[0],[4],[8]\\}\\cong\\mathbb Z_3$. Dengan demikian, $\\mathbb Z/3\\mathbb Z\\cong\\operatorname{im}\\varphi$."
      },
      {
        "prompt": "Buktikan $HN/N$ merupakan subgrup dari $G/N$ ketika $H\\le G$ dan $N\\trianglelefteq G$.",
        "hint": "Gunakan bahwa $HN$ subgrup dan memuat $N$.",
        "answer": "Karena $HN\\le G$ dan $N\\trianglelefteq HN$, himpunan koset $(HN)/N$ membentuk grup, yang merupakan subgrup dari $G/N$."
      },
      {
        "prompt": "Jelaskan makna intuitif Teorema Isomorfisma Pertama.",
        "hint": "Hubungkan elemen yang mempunyai citra sama dengan koset kernel.",
        "answer": "Dua elemen $g_1,g_2$ mempunyai citra sama tepat ketika $g_1^{-1}g_2\\in\\ker\\varphi$, yaitu ketika berada pada koset kernel yang sama. Kuosien mengidentifikasi tepat elemen-elemen yang tidak dapat dibedakan oleh homomorfisma."
      }
    ]
  },
  "alg-automorphisms": {
    "title": "Automorfisma",
    "focus": "Automorfisma adalah isomorfisma dari grup ke dirinya sendiri. Himpunan automorfisma mengukur simetri internal struktur grup dan membentuk grup baru di bawah komposisi.",
    "definitions": [
      {
        "title": "Automorfisma",
        "statement": "Automorfisma grup $G$ adalah isomorfisma $\\varphi:G\\to G$. Himpunan seluruh automorfisma ditulis $\\operatorname{Aut}(G)$."
      },
      {
        "title": "Automorfisma Dalam",
        "statement": "Untuk $g\\in G$, peta $\\iota_g:G\\to G$ dengan $\\iota_g(x)=gxg^{-1}$ disebut automorfisma dalam. Himpunan semua automorfisma dalam ditulis $\\operatorname{Inn}(G)$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Automorfisma Membentuk Grup",
        "statement": "$\\operatorname{Aut}(G)$ merupakan grup terhadap komposisi fungsi.",
        "proof": [
          "Komposisi dua isomorfisma $G\\to G$ kembali merupakan homomorfisma bijektif, sehingga tertutup.",
          "Komposisi fungsi asosiatif. Identitas $\\operatorname{id}_G$ adalah automorfisma.",
          "Invers fungsi dari automorfisma merupakan isomorfisma dan kembali memetakan $G$ ke $G$. Dengan demikian seluruh aksioma grup terpenuhi."
        ]
      },
      {
        "kind": "theorem",
        "title": "Automorfisma Dalam dan Pusat",
        "statement": "Peta $\\Theta:G\\to\\operatorname{Aut}(G)$, $g\\mapsto\\iota_g$, adalah homomorfisma dengan kernel $Z(G)$. Akibatnya $G/Z(G)\\cong\\operatorname{Inn}(G)$.",
        "proof": [
          "$\\iota_{gh}(x)=ghx(gh)^{-1}=g(hxh^{-1})g^{-1}=(\\iota_g\\circ\\iota_h)(x)$, sehingga $\\Theta$ homomorfisma.",
          "$g$ berada di kernel tepat ketika $gxg^{-1}=x$ untuk setiap $x$, ekuivalen dengan $gx=xg$ untuk setiap $x$. Dengan demikian kernel adalah $Z(G)$.",
          "Image $\\Theta$ tepat $\\operatorname{Inn}(G)$. Teorema Isomorfisma Pertama memberi $G/Z(G)\\cong\\operatorname{Inn}(G)$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Automorfisma Grup Siklik",
        "problem": "Tentukan automorfisma $\\mathbb Z_8$.",
        "solution": [
          "Automorfisma ditentukan oleh citra generator $[1]$.",
          "Citra generator harus kembali generator.",
          "Generator $\\mathbb Z_8$ adalah $[1],[3],[5],[7]$."
        ],
        "conclusion": "$|\\operatorname{Aut}(\\mathbb Z_8)|=4$."
      },
      {
        "title": "Automorfisma Dalam pada Grup Abelian",
        "problem": "Tentukan $\\operatorname{Inn}(G)$ jika $G$ abelian.",
        "solution": [
          "Untuk setiap $g,x\\in G$, $gxg^{-1}=xgg^{-1}=x$.",
          "Semua automorfisma dalam adalah identitas."
        ],
        "conclusion": "$\\operatorname{Inn}(G)=\\{\\operatorname{id}_G\\}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $\\operatorname{Aut}(\\mathbb Z_n)\\cong\\mathbb Z_n^\\times$.",
        "hint": "Automorfisma ditentukan oleh citra generator $[1]$.",
        "answer": "Setiap automorfisma mengirim $[1]$ ke generator $[u]$ dengan $\\gcd(u,n)=1$. Komposisi peta $[k]\\mapsto[uk]$ bersesuaian dengan perkalian unit modulo $n$, menghasilkan isomorfisma."
      },
      {
        "prompt": "Tentukan $|\\operatorname{Aut}(\\mathbb Z_{12})|$.",
        "hint": "Hitung $\\varphi(12)$.",
        "answer": "$\\varphi(12)=12(1-1/2)(1-1/3)=4$."
      },
      {
        "prompt": "Buktikan $Z(G)$ adalah kernel homomorfisma $G\\to\\operatorname{Aut}(G)$ melalui konjugasi.",
        "hint": "Tentukan kapan $\\iota_g$ identitas.",
        "answer": "$\\iota_g=\\operatorname{id}$ tepat ketika $gxg^{-1}=x$ untuk semua $x$, ekuivalen dengan $gx=xg$ untuk semua $x$. Ini tepat definisi $g\\in Z(G)$."
      }
    ]
  }
};

export const abstractAlgebraContentA = buildAlgebraContent(specs);
