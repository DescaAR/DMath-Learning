import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-polynomial-rings": {
    "title": "Ring Polinom",
    "focus": "Ring polinom $R[x]$ memperluas ring koefisien dengan peubah formal. Derajat mengontrol hasil kali pada domain integral, algoritma pembagian tersedia ketika koefisien berada pada field, dan evaluasi menjadi homomorfisma penting.",
    "definitions": [
      {
        "title": "Polinom Formal",
        "statement": "Polinom atas ring $R$ adalah ekspresi formal $f(x)=a_0+a_1x+\\cdots+a_nx^n$ dengan koefisien $a_i\\in R$ dan hanya hingga banyak koefisien tak nol. Himpunannya ditulis $R[x]$."
      },
      {
        "title": "Derajat dan Polinom Monik",
        "statement": "Untuk $f\\ne0$, derajat $\\deg f$ adalah indeks terbesar koefisien tak nol. Polinom disebut monik jika koefisien utamanya sama dengan $1_R$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Derajat Hasil Kali pada Domain Integral",
        "statement": "Jika $R$ domain integral dan $f,g\\in R[x]$ tidak nol, maka $\\deg(fg)=\\deg f+\\deg g$.",
        "proof": [
          "Tuliskan koefisien utama $f$ sebagai $a_m\\ne0$ dan koefisien utama $g$ sebagai $b_n\\ne0$.",
          "Koefisien $x^{m+n}$ pada $fg$ adalah $a_mb_n$. Karena $R$ tidak mempunyai pembagi nol, $a_mb_n\\ne0$.",
          "Tidak ada suku dengan derajat lebih tinggi dari $m+n$. Oleh karena itu derajat hasil kali tepat $m+n$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Algoritma Pembagian Polinom",
        "statement": "Jika $F$ field, $f,g\\in F[x]$, dan $g\\ne0$, terdapat unik $q,r\\in F[x]$ sehingga $f=qg+r$ dengan $r=0$ atau $\\deg r<\\deg g$.",
        "proof": [
          "Jika $\\deg f<\\deg g$, ambil $q=0$ dan $r=f$. Jika tidak, bagi suku utama $f$ dengan suku utama $g$ menggunakan invers koefisien utama di field, lalu kurangi kelipatan tersebut untuk menurunkan derajat.",
          "Ulangi proses. Derajat sisa turun pada setiap langkah, sehingga setelah hingga banyak langkah diperoleh sisa berderajat kurang dari $\\deg g$.",
          "Untuk keunikan, jika $f=qg+r=q'g+r'$, maka $(q-q')g=r'-r$. Jika $q\\ne q'$, derajat ruas kiri sedikitnya $\\deg g$, sedangkan ruas kanan kurang dari $\\deg g$, kontradiksi. Oleh karena itu $q=q'$ dan $r=r'$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Pembagian Polinom",
        "problem": "Bagi $x^3-1$ dengan $x-1$ di $\\mathbb Q[x]$.",
        "solution": [
          "Gunakan identitas selisih kubus $x^3-1=(x-1)(x^2+x+1)$.",
          "Tidak terdapat sisa."
        ],
        "conclusion": "Hasil bagi adalah $x^2+x+1$ dan sisanya 0."
      },
      {
        "title": "Unit pada $F[x]$",
        "problem": "Tentukan semua unit di $F[x]$ untuk field $F$.",
        "solution": [
          "Jika $fg=1$, rumus derajat memberi $\\deg f+\\deg g=0$.",
          "Kedua derajat harus 0, sehingga $f$ dan $g$ merupakan konstanta tak nol."
        ],
        "conclusion": "Unit $F[x]$ adalah tepat elemen $F^\\times$."
      }
    ],
    "exercises": [
      {
        "prompt": "Hitung hasil bagi dan sisa pembagian $x^4+1$ oleh $x^2+1$ di $\\mathbb Q[x]$.",
        "hint": "Lakukan pembagian panjang.",
        "answer": "$x^4+1=(x^2-1)(x^2+1)+2$. Dengan demikian, $q=x^2-1$ dan $r=2$."
      },
      {
        "prompt": "Buktikan jika $R$ domain integral, maka $R[x]$ juga domain integral.",
        "hint": "Gunakan derajat hasil kali.",
        "answer": "Jika $f,g\\ne0$, maka $\\deg(fg)=\\deg f+\\deg g$, sehingga $fg\\ne0$. Tidak ada pembagi nol di $R[x]$."
      },
      {
        "prompt": "Tentukan derajat $(2x^3+x)(5x^2-1)$ di $\\mathbb Z[x]$.",
        "hint": "Jumlahkan derajat karena $\\mathbb Z$ domain integral.",
        "answer": "Derajatnya $3+2=5$."
      }
    ]
  },
  "alg-euclidean-domains": {
    "title": "Domain Euclidean",
    "focus": "Domain Euclidean adalah domain integral yang memiliki fungsi ukuran dan algoritma pembagian. Struktur ini memberi algoritma untuk FPB dan identitas Bézout, memperluas algoritma Euclid pada bilangan bulat ke ring seperti $F[x]$.",
    "definitions": [
      {
        "title": "Domain Euclidean",
        "statement": "Domain integral $R$ disebut Euclidean jika terdapat fungsi $d:R\\setminus\\{0\\}\\to\\mathbb N$ sehingga untuk $a,b\\ne0$ terdapat $q,r\\in R$ dengan $a=bq+r$, di mana $r=0$ atau $d(r)<d(b)$."
      },
      {
        "title": "FPB pada Domain",
        "statement": "Elemen $g$ disebut FPB dari $a,b$ jika $g\\mid a$, $g\\mid b$, dan setiap pembagi bersama $c$ dari $a,b$ membagi $g$. FPB unik sampai perkalian oleh unit."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Algoritma Euclid pada Domain Euclidean",
        "statement": "Algoritma pembagian berulang pada domain Euclidean berakhir dan sisa tak nol terakhir adalah FPB dari dua elemen.",
        "proof": [
          "Mulai dengan $a=bq_1+r_1$, lalu $b=r_1q_2+r_2$, dan seterusnya. Nilai Euclidean $d(r_i)$ turun ketat setiap kali sisa tak nol.",
          "Karena bilangan asli tidak mempunyai rantai turun tak hingga, proses berhenti setelah hingga banyak langkah.",
          "Setiap pembagi bersama $a,b$ membagi setiap sisa berdasarkan persamaan pembagian. Sebaliknya, substitusi balik menunjukkan sisa terakhir membagi $a$ dan $b$. Dengan demikian sisa terakhir adalah FPB."
        ]
      },
      {
        "kind": "corollary",
        "title": "Identitas Bézout pada Domain Euclidean",
        "statement": "Jika $g=\\gcd(a,b)$ di domain Euclidean, terdapat $x,y\\in R$ dengan $g=ax+by$.",
        "proof": [
          "Setiap sisa algoritma Euclid adalah kombinasi linear dari dua sisa sebelumnya.",
          "Dengan substitusi balik dari sisa terakhir menuju persamaan awal, sisa terakhir dapat ditulis sebagai kombinasi linear $a$ dan $b$.",
          "Karena sisa terakhir merupakan FPB, diperoleh $g=ax+by$."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z$ sebagai Domain Euclidean",
        "problem": "Jelaskan fungsi Euclidean untuk $\\mathbb Z$.",
        "solution": [
          "Untuk $a,b$ dengan $b\\ne0$, algoritma pembagian integer memberi $a=bq+r$ dengan $0\\le r<|b|$.",
          "Ambil $d(b)=|b|$."
        ],
        "conclusion": "$\\mathbb Z$ adalah domain Euclidean."
      },
      {
        "title": "$F[x]$ sebagai Domain Euclidean",
        "problem": "Jelaskan fungsi Euclidean untuk $F[x]$.",
        "solution": [
          "Algoritma pembagian polinom bekerja karena koefisien utama pembagi invertibel di field.",
          "Ambil $d(f)=\\deg f$ untuk $f\\ne0$."
        ],
        "conclusion": "$F[x]$ adalah domain Euclidean."
      }
    ],
    "exercises": [
      {
        "prompt": "Gunakan algoritma Euclid di $\\mathbb Q[x]$ untuk mencari FPB $x^3-1$ dan $x^2-1$.",
        "hint": "Faktorkan atau lakukan pembagian.",
        "answer": "$x^3-1=(x-1)(x^2+x+1)$ dan $x^2-1=(x-1)(x+1)$, sehingga FPB monik adalah $x-1$."
      },
      {
        "prompt": "Buktikan setiap domain Euclidean adalah PID.",
        "hint": "Pilih elemen ideal nonnol dengan nilai Euclidean minimal.",
        "answer": "Untuk ideal nonnol $I$, pilih $d\\in I$ dengan nilai Euclidean minimum. Bagi setiap $a\\in I$ oleh $d$: $a=qd+r$. Sisa $r=a-qd\\in I$ dan minimalitas memaksa $r=0$. Dengan demikian, $I=(d)$."
      },
      {
        "prompt": "Jelaskan mengapa penurunan nilai Euclidean menjamin algoritma berhenti.",
        "hint": "Gunakan well-ordering pada $\\mathbb N$.",
        "answer": "Tidak ada barisan tak hingga bilangan asli yang turun ketat. Karena nilai sisa terus turun selama sisa nonnol, proses harus berhenti."
      }
    ]
  },
  "alg-pid": {
    "title": "Principal Ideal Domains",
    "focus": "Principal Ideal Domain atau PID adalah domain integral yang setiap idealnya dibangkitkan oleh satu elemen. PID memperluas banyak sifat bilangan bulat, termasuk FPB, identitas Bézout, dan hubungan kuat antara irreducible dan prima.",
    "definitions": [
      {
        "title": "Principal Ideal Domain",
        "statement": "PID adalah domain integral $R$ yang setiap ideal $I\\trianglelefteq R$ berbentuk $(a)$ untuk suatu $a\\in R$."
      },
      {
        "title": "Elemen Irreducible dan Prima",
        "statement": "Elemen nonnol nonunit $p$ irreducible jika $p=ab$ memaksa salah satu $a,b$ unit. Elemen $p$ prima jika $p\\mid ab$ mengakibatkan $p\\mid a$ atau $p\\mid b$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Irreducible adalah Prima pada PID",
        "statement": "Dalam PID, setiap elemen irreducible adalah elemen prima.",
        "proof": [
          "Ambil irreducible $p$ dan andaikan $p\\mid ab$. Pertimbangkan ideal $(p,a)$. Karena PID, $(p,a)=(d)$ untuk suatu $d$ yang membagi $p$ dan $a$.",
          "Karena $p$ irreducible dan $d\\mid p$, $d$ unit atau associate dengan $p$. Jika $d$ associate dengan $p$, diperoleh $p\\mid a$.",
          "Jika $d$ unit, maka $(p,a)=R$, sehingga terdapat $x,y$ dengan $px+ay=1$. Kalikan dengan $b$: $pbx+aby=b$. Kedua suku ruas kiri habis dibagi $p$, sehingga $p\\mid b$. Dengan demikian $p$ prima."
        ]
      },
      {
        "kind": "proposition",
        "title": "FPB sebagai Generator Ideal",
        "statement": "Dalam PID, jika $(a,b)=(d)$, maka $d$ adalah FPB $a,b$ dan terdapat $x,y$ dengan $d=ax+by$.",
        "proof": [
          "Karena $a,b\\in(d)$, elemen $d$ membagi $a$ dan $b$.",
          "Jika $c$ membagi $a$ dan $b$, setiap elemen ideal $(a,b)$ habis dibagi $c$, khususnya generator $d$.",
          "Karena $d\\in(a,b)$, terdapat $x,y$ dengan $d=ax+by$. Dengan demikian $d$ memenuhi definisi FPB dan identitas Bézout."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z$ adalah PID",
        "problem": "Jelaskan mengapa setiap ideal $\\mathbb Z$ principal.",
        "solution": [
          "Setiap ideal nonnol memiliki elemen positif terkecil $n$.",
          "Algoritma pembagian menunjukkan setiap elemen ideal habis dibagi $n$."
        ],
        "conclusion": "Setiap ideal berbentuk $(n)$, sehingga $\\mathbb Z$ PID."
      },
      {
        "title": "$F[x]$ adalah PID",
        "problem": "Jelaskan mengapa ring polinom satu variabel atas field adalah PID.",
        "solution": [
          "$F[x]$ merupakan domain Euclidean dengan fungsi derajat.",
          "Setiap domain Euclidean adalah PID."
        ],
        "conclusion": "$F[x]$ merupakan PID."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan ideal maksimal nonnol pada PID dibangkitkan oleh elemen irreducible.",
        "hint": "Gunakan rantai $(p)\\subseteq(a)\\subseteq R$ jika $p=ab$.",
        "answer": "Jika $(p)$ maksimal dan $p=ab$ dengan keduanya nonunit, maka $(p)\\subsetneq(a)\\subsetneq R$, kontradiksi. Dengan demikian, $p$ irreducible."
      },
      {
        "prompt": "Tentukan ideal $(12,30)$ di $\\mathbb Z$.",
        "hint": "Generatornya adalah FPB 12 dan 30.",
        "answer": "$(12,30)=(6)$."
      },
      {
        "prompt": "Buktikan setiap field adalah PID.",
        "hint": "Tentukan semua ideal pada field.",
        "answer": "Ideal field hanya $(0)$ dan $(1)=F$, keduanya principal. Field juga domain integral."
      }
    ]
  },
  "alg-ufd": {
    "title": "Unique Factorization Domains",
    "focus": "UFD adalah domain integral tempat setiap elemen nonnol nonunit dapat difaktorkan menjadi irreducible secara unik sampai urutan dan associate. Struktur ini menangkap inti Teorema Fundamental Aritmetika dalam konteks ring yang lebih luas.",
    "definitions": [
      {
        "title": "Unique Factorization Domain",
        "statement": "Domain integral $R$ disebut UFD jika setiap elemen nonnol nonunit dapat ditulis sebagai hasil kali elemen irreducible, dan setiap dua faktorisasi seperti itu berbeda hanya pada urutan serta faktor unit."
      },
      {
        "title": "Associate",
        "statement": "Elemen $a,b\\in R$ disebut associate jika $a=ub$ untuk suatu unit $u$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Setiap PID adalah UFD",
        "statement": "Setiap Principal Ideal Domain merupakan Unique Factorization Domain.",
        "proof": [
          "Eksistensi faktorisasi diperoleh dengan memfaktorkan nonunit yang belum irreducible. Jika proses tidak berhenti, diperoleh rantai ideal utama naik ketat. Pada PID, gabungan rantai ideal tersebut menjadi ideal principal dan bertentangan dengan kenaikan tanpa akhir.",
          "Pada PID setiap irreducible adalah prima. Misalkan $p_1\\cdots p_r=q_1\\cdots q_s$ dua faktorisasi irreducible.",
          "Prima $p_1$ membagi salah satu $q_j$ dan karena $q_j$ irreducible, keduanya associate. Coret pasangan associate dan ulangi. Dengan induksi diperoleh keunikan sampai urutan dan associate."
        ]
      },
      {
        "kind": "theorem",
        "title": "Lemma Gauss untuk UFD",
        "statement": "Jika $R$ UFD, maka $R[x]$ juga UFD.",
        "proof": [
          "Setiap polinom dapat dipisahkan menjadi content, yaitu FPB koefisien, dikali polinom primitive.",
          "Lemma Gauss menyatakan hasil kali dua polinom primitive tetap primitive. Oleh karena itu faktorisasi dalam field pecahan dapat dibersihkan penyebutnya menjadi faktorisasi primitive di $R[x]$.",
          "Keunikan faktor di field pecahan dan keunikan content di $R$ menghasilkan keunikan faktorisasi di $R[x]$. Dengan demikian $R[x]$ UFD."
        ]
      }
    ],
    "examples": [
      {
        "title": "$\\mathbb Z[x]$ UFD",
        "problem": "Jelaskan mengapa $\\mathbb Z[x]$ UFD.",
        "solution": [
          "$\\mathbb Z$ adalah PID, sehingga UFD.",
          "Lemma Gauss menyatakan ring polinom satu variabel atas UFD kembali UFD."
        ],
        "conclusion": "$\\mathbb Z[x]$ adalah UFD."
      },
      {
        "title": "UFD yang Bukan PID",
        "problem": "Berikan contoh UFD yang bukan PID.",
        "solution": [
          "$\\mathbb Z[x]$ adalah UFD.",
          "Ideal $(2,x)$ tidak principal di $\\mathbb Z[x]$."
        ],
        "conclusion": "$\\mathbb Z[x]$ menunjukkan implikasi UFD ke PID tidak berlaku secara umum."
      }
    ],
    "exercises": [
      {
        "prompt": "Susun rantai implikasi antara field, domain Euclidean, PID, dan UFD.",
        "hint": "Gunakan teorema yang telah dibuktikan.",
        "answer": "Field $\\Rightarrow$ domain Euclidean $\\Rightarrow$ PID $\\Rightarrow$ UFD. Implikasi balik tidak berlaku secara umum."
      },
      {
        "prompt": "Buktikan di UFD setiap irreducible adalah prima.",
        "hint": "Gunakan keunikan faktorisasi.",
        "answer": "Jika irreducible $p$ membagi $ab$, faktorisasi $ab$ memuat faktor associate dengan $p$. Keunikan faktorisasi membuat faktor tersebut muncul pada faktorisasi $a$ atau $b$, sehingga $p\\mid a$ atau $p\\mid b$."
      },
      {
        "prompt": "Jelaskan mengapa $F[x,y]$ UFD jika $F$ field.",
        "hint": "Terapkan Lemma Gauss dua kali.",
        "answer": "$F$ adalah UFD, maka $F[x]$ UFD; selanjutnya $(F[x])[y]=F[x,y]$ juga UFD."
      }
    ]
  }
};

export const abstractAlgebraContentC10 = buildAlgebraContent(specs);
