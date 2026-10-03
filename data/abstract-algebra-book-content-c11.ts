import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-irreducibility-roots": {
    "title": "Tak Tereduksi dan Akar",
    "focus": "Polinom tak tereduksi adalah analog bilangan prima di dalam ring polinom. Untuk derajat 2 dan 3 atas field, keberadaan akar sepenuhnya menentukan reducibility; pada derajat lebih tinggi dibutuhkan kriteria tambahan.",
    "definitions": [
      {
        "title": "Polinom Tak Tereduksi",
        "statement": "Polinom nonkonstan $f\\in F[x]$ disebut tak tereduksi di atas field $F$ jika setiap faktorisasi $f=gh$ memaksa salah satu $g,h$ berderajat 0. Jika tidak, $f$ disebut tereduksi."
      },
      {
        "title": "Akar Polinom",
        "statement": "Elemen $a\\in F$ disebut akar $f$ jika $f(a)=0$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Teorema Faktor",
        "statement": "Untuk $f\\in F[x]$ dan $a\\in F$, $f(a)=0$ jika dan hanya jika $(x-a)\\mid f(x)$.",
        "proof": [
          "Algoritma pembagian memberi $f(x)=(x-a)q(x)+r$ dengan sisa konstanta $r$.",
          "Substitusi $x=a$ memberi $f(a)=r$.",
          "Dengan demikian $f(a)=0$ tepat ketika $r=0$, yaitu tepat ketika $f$ habis dibagi $x-a$."
        ]
      },
      {
        "kind": "corollary",
        "title": "Kriteria Derajat 2 atau 3",
        "statement": "Polinom derajat 2 atau 3 atas field $F$ tereduksi jika dan hanya jika mempunyai akar di $F$.",
        "proof": [
          "Jika mempunyai akar $a$, Teorema Faktor memberi faktor linear $(x-a)$, sehingga polinom tereduksi.",
          "Sebaliknya, jika polinom berderajat 2 atau 3 tereduksi, ia terfaktor sebagai polinom berderajat positif dengan jumlah derajat 2 atau 3.",
          "Sedikitnya satu faktor harus berderajat 1, berbentuk konstanta kali $(x-a)$ untuk suatu $a\\in F$, sehingga $a$ adalah akar."
        ]
      }
    ],
    "examples": [
      {
        "title": "Tak Tereduksi di $\\mathbb Q[x]$",
        "problem": "Tentukan apakah $x^2-2$ tak tereduksi atas $\\mathbb Q$.",
        "solution": [
          "Polinom derajat 2 tereduksi tepat ketika mempunyai akar rasional.",
          "Persamaan $x^2=2$ tidak mempunyai solusi rasional."
        ],
        "conclusion": "$x^2-2$ tak tereduksi di $\\mathbb Q[x]$."
      },
      {
        "title": "Tereduksi di $\\mathbb R[x]$",
        "problem": "Faktorkan $x^2-2$ di $\\mathbb R[x]$.",
        "solution": [
          "Akar realnya $\\pm\\sqrt2$.",
          "Teorema Faktor memberi kedua faktor linear."
        ],
        "conclusion": "$x^2-2=(x-\\sqrt2)(x+\\sqrt2)$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan apakah $x^3+x+1$ tak tereduksi di $\\mathbb F_2[x]$.",
        "hint": "Untuk derajat 3, cukup uji akar 0 dan 1.",
        "answer": "$f(0)=1$ dan $f(1)=1+1+1=1$ di $\\mathbb F_2$. Tidak ada akar, sehingga tak tereduksi."
      },
      {
        "prompt": "Buktikan polinom linear nonkonstan selalu tak tereduksi.",
        "hint": "Tidak mungkin membagi derajat 1 menjadi dua derajat positif.",
        "answer": "Jika $f=gh$, maka $1=\\deg f=\\deg g+\\deg h$, sehingga salah satu derajat 0. Salah satu faktor unit."
      },
      {
        "prompt": "Berikan contoh polinom derajat 4 tanpa akar tetapi tereduksi.",
        "hint": "Gunakan produk dua kuadrat yang masing-masing tidak mempunyai akar.",
        "answer": "Di $\\mathbb R[x]$, $(x^2+1)(x^2+2)$ tidak mempunyai akar real tetapi jelas tereduksi."
      }
    ]
  },
  "alg-irreducible-rationals": {
    "title": "Tak Tereduksi atas Bilangan Rasional",
    "focus": "Tak tereduksi di $\\mathbb Q[x]$ dapat diperiksa menggunakan polinom primitive, Lemma Gauss, Uji Akar Rasional, dan Kriteria Eisenstein. Teknik-teknik ini memungkinkan irreducibility dibuktikan tanpa mencari semua faktor secara langsung.",
    "definitions": [
      {
        "title": "Content dan Polinom Primitive",
        "statement": "Untuk $f\\in\\mathbb Z[x]$, content $c(f)$ adalah FPB seluruh koefisiennya. Polinom disebut primitive jika $c(f)=1$."
      },
      {
        "title": "Kriteria Eisenstein",
        "statement": "Jika terdapat prima $p$ yang membagi semua koefisien selain koefisien utama, tidak membagi koefisien utama, dan $p^2$ tidak membagi suku konstanta, maka polinom primitive tersebut tak tereduksi di $\\mathbb Q[x]$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Lemma Gauss untuk Irreducibility",
        "statement": "Polinom primitive $f\\in\\mathbb Z[x]$ tereduksi di $\\mathbb Q[x]$ jika dan hanya jika tereduksi di $\\mathbb Z[x]$ sebagai hasil kali dua polinom berderajat positif.",
        "proof": [
          "Jika tereduksi di $\\mathbb Z[x]$, tentu tereduksi di $\\mathbb Q[x]$.",
          "Sebaliknya, dari faktorisasi $f=gh$ di $\\mathbb Q[x]$, bersihkan penyebut untuk memperoleh $mf=GH$ dengan $G,H\\in\\mathbb Z[x]$. Pisahkan content sehingga bagian primitive dari $G$ dan $H$ tetap menghasilkan faktorisasi bagian primitive.",
          "Lemma Gauss bahwa hasil kali dua polinom primitive tetap primitive dan primitiveness $f$ memungkinkan faktor skalar diserap. Diperoleh faktorisasi nontrivial $f=G_1H_1$ di $\\mathbb Z[x]$."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kriteria Eisenstein",
        "statement": "Polinom $f=a_nx^n+\\cdots+a_0\\in\\mathbb Z[x]$ primitive tak tereduksi di $\\mathbb Q[x]$ jika ada prima $p$ dengan $p\\nmid a_n$, $p\\mid a_i$ untuk $i<n$, dan $p^2\\nmid a_0$.",
        "proof": [
          "Diandaikan $f=gh$ di $\\mathbb Z[x]$ dengan kedua derajat positif, yang cukup berdasarkan Lemma Gauss.",
          "Reduksi modulo $p$ menghasilkan $\\bar f=\\bar a_nx^n$. Karena $\\mathbb F_p[x]$ mempunyai faktorisasi unik, reduksi $g$ dan $h$ masing-masing harus memiliki konstanta nol modulo $p$.",
          "Akibatnya suku konstanta kedua faktor habis dibagi $p$, sehingga suku konstanta $a_0$ habis dibagi $p^2$. Ini bertentangan dengan hipotesis. Oleh karena itu tidak ada faktorisasi nontrivial."
        ]
      }
    ],
    "examples": [
      {
        "title": "Eisenstein",
        "problem": "Buktikan $x^5+10x+5$ tak tereduksi di $\\mathbb Q[x]$.",
        "solution": [
          "Ambil $p=5$.",
          "Koefisien utama 1 tidak habis dibagi 5; seluruh koefisien selain utama habis dibagi 5; konstanta 5 tidak habis dibagi 25."
        ],
        "conclusion": "Kriteria Eisenstein memberi bahwa polinom tak tereduksi."
      },
      {
        "title": "Uji Akar Rasional",
        "problem": "Tentukan akar rasional yang mungkin dari $2x^3-3x^2+4x-6$.",
        "solution": [
          "Jika $p/q$ akar dalam bentuk sederhana, Teorema Akar Rasional memberi $p\\mid6$ dan $q\\mid2$.",
          "Daftar kandidat diperoleh dengan menggabungkan pembagi bertanda 6 dan pembagi positif 2."
        ],
        "conclusion": "Kandidatnya $\\pm1,\\pm2,\\pm3,\\pm6,\\pm\\frac12,\\pm\\frac32$."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $x^4+5x^3+10x^2+15x+5$ tak tereduksi di $\\mathbb Q[x]$.",
        "hint": "Gunakan Eisenstein dengan $p=5$.",
        "answer": "Semua koefisien selain utama habis dibagi 5, koefisien utama tidak, dan 25 tidak membagi konstanta 5. Dengan demikian, polinom tak tereduksi."
      },
      {
        "prompt": "Gunakan substitusi untuk membuktikan $x^4+1$ tak tereduksi di $\\mathbb Q[x]$.",
        "hint": "Terapkan Eisenstein pada $(x+1)^4+1$.",
        "answer": "$(x+1)^4+1=x^4+4x^3+6x^2+4x+2$ memenuhi Eisenstein dengan $p=2$. Substitusi linear invertibel mempertahankan reducibility, sehingga $x^4+1$ tak tereduksi."
      },
      {
        "prompt": "Jelaskan mengapa Uji Akar Rasional saja tidak cukup untuk derajat 4.",
        "hint": "Polinom derajat 4 dapat terfaktor menjadi dua kuadrat tanpa akar rasional.",
        "answer": "Contoh $x^4+5x^2+6=(x^2+2)(x^2+3)$ tereduksi tetapi tidak mempunyai akar rasional."
      }
    ]
  },
  "alg-irreducible-real-complex": {
    "title": "Tak Tereduksi atas Real dan Kompleks",
    "focus": "Teorema Fundamental Aljabar menentukan bentuk polinom tak tereduksi di $\\mathbb C[x]$ dan $\\mathbb R[x]$. Di kompleks hanya polinom linear yang tak tereduksi; di real, selain linear terdapat kuadrat dengan diskriminan negatif.",
    "definitions": [
      {
        "title": "Teorema Fundamental Aljabar",
        "statement": "Setiap polinom nonkonstan di $\\mathbb C[x]$ mempunyai sedikitnya satu akar kompleks."
      },
      {
        "title": "Pasangan Akar Konjugat",
        "statement": "Jika $f\\in\\mathbb R[x]$ dan $z\\in\\mathbb C$ merupakan akar, maka $\\bar z$ juga akar."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Polinom Tak Tereduksi di $\\mathbb C[x]$",
        "statement": "Polinom nonkonstan di $\\mathbb C[x]$ tak tereduksi jika dan hanya jika berderajat 1.",
        "proof": [
          "Polinom linear tak tereduksi karena derajat 1 tidak dapat dibagi menjadi jumlah dua derajat positif.",
          "Jika $f$ berderajat sedikitnya 2, Teorema Fundamental Aljabar memberi akar $\\alpha\\in\\mathbb C$.",
          "Teorema Faktor memberi $f=(x-\\alpha)g$ dengan $\\deg g\\ge1$, sehingga $f$ tereduksi. Dengan demikian hanya polinom linear yang tak tereduksi."
        ]
      },
      {
        "kind": "theorem",
        "title": "Polinom Tak Tereduksi di $\\mathbb R[x]$",
        "statement": "Polinom nonkonstan di $\\mathbb R[x]$ tak tereduksi tepat jika berderajat 1, atau berderajat 2 dengan diskriminan negatif.",
        "proof": [
          "Polinom linear tak tereduksi. Kuadrat dengan diskriminan negatif tidak mempunyai akar real, sehingga tidak mempunyai faktor linear dan tak tereduksi.",
          "Ambil $f\\in\\mathbb R[x]$ berderajat sedikitnya 3. Sebagai polinom kompleks, $f$ mempunyai akar $z$.",
          "Jika $z$ real, terdapat faktor linear real. Jika $z$ nonreal, pasangan $z,\\bar z$ menghasilkan faktor real $(x-z)(x-\\bar z)=x^2-2\\operatorname{Re}(z)x+|z|^2$. Faktor proper tersebut membuktikan $f$ tereduksi."
        ]
      }
    ],
    "examples": [
      {
        "title": "Kuadrat Real Tak Tereduksi",
        "problem": "Tentukan apakah $x^2+4x+8$ tak tereduksi di $\\mathbb R[x]$.",
        "solution": [
          "Diskriminan $\\Delta=4^2-4(1)(8)=16-32=-16<0$.",
          "Tidak ada akar real."
        ],
        "conclusion": "Polinom tak tereduksi di $\\mathbb R[x]$."
      },
      {
        "title": "Faktorisasi Real $x^4+1$",
        "problem": "Faktorkan $x^4+1$ menjadi faktor tak tereduksi real.",
        "solution": [
          "Akar kompleks terletak pada sudut $\\pi/4,3\\pi/4,5\\pi/4,7\\pi/4$.",
          "Pasangkan akar konjugat untuk memperoleh faktor kuadrat real."
        ],
        "conclusion": "$x^4+1=(x^2+\\sqrt2x+1)(x^2-\\sqrt2x+1)$."
      }
    ],
    "exercises": [
      {
        "prompt": "Faktorkan $x^4-1$ sepenuhnya di $\\mathbb C[x]$.",
        "hint": "Cari akar keempat dari 1.",
        "answer": "$x^4-1=(x-1)(x+1)(x-i)(x+i)$."
      },
      {
        "prompt": "Tentukan semua tipe polinom tak tereduksi di $\\mathbb R[x]$.",
        "hint": "Gunakan teorema klasifikasi real.",
        "answer": "Hanya polinom linear dan kuadrat dengan diskriminan negatif."
      },
      {
        "prompt": "Buktikan jika $f\\in\\mathbb R[x]$ mempunyai akar nonreal $a+bi$, maka $x^2-2ax+(a^2+b^2)$ membagi $f$.",
        "hint": "Gunakan akar konjugat.",
        "answer": "Karena koefisien real, $a-bi$ juga akar. Teorema Faktor memberi kedua faktor linear kompleks; hasil kalinya adalah kuadrat real yang dinyatakan dan membagi $f$."
      }
    ]
  },
  "alg-irreducible-finite-fields": {
    "title": "Tak Tereduksi atas Field Hingga",
    "focus": "Pada field hingga, tak tereduksi dapat diperiksa secara eksplisit karena hanya ada hingga banyak elemen dan faktor potensial. Polinom tak tereduksi menjadi bahan utama untuk membangun perluasan field hingga.",
    "definitions": [
      {
        "title": "Polinom Tak Tereduksi atas $\\mathbb F_q$",
        "statement": "Polinom $f\\in\\mathbb F_q[x]$ berderajat positif disebut tak tereduksi jika tidak dapat ditulis sebagai hasil kali dua polinom berderajat positif di $\\mathbb F_q[x]$."
      },
      {
        "title": "Polinom Frobenius",
        "statement": "Polinom $x^{q^n}-x$ mempunyai sebagai akar tepat elemen field $\\mathbb F_{q^n}$ di dalam penutupan aljabar $\\mathbb F_q$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Uji Akar untuk Derajat 2 dan 3",
        "statement": "Polinom derajat 2 atau 3 di $\\mathbb F_q[x]$ tak tereduksi jika dan hanya jika tidak mempunyai akar di $\\mathbb F_q$.",
        "proof": [
          "Jika mempunyai akar, Teorema Faktor memberi faktor linear, sehingga polinom tereduksi.",
          "Jika tereduksi dan derajatnya 2 atau 3, salah satu faktor dalam faktorisasi nontrivial harus berderajat 1.",
          "Faktor linear menghasilkan akar dalam $\\mathbb F_q$. Oleh karena itu ketiadaan akar ekuivalen dengan tak tereduksi untuk derajat 2 atau 3."
        ]
      },
      {
        "kind": "theorem",
        "title": "Faktor Tak Tereduksi dari $x^{q^n}-x$",
        "statement": "Polinom monik tak tereduksi $f\\in\\mathbb F_q[x]$ berderajat $d$ membagi $x^{q^n}-x$ jika dan hanya jika $d\\mid n$.",
        "proof": [
          "Jika $f$ tak tereduksi berderajat $d$ dan $\\alpha$ salah satu akarnya, field $\\mathbb F_q(\\alpha)$ mempunyai $q^d$ elemen dan isomorfik dengan $\\mathbb F_{q^d}$.",
          "$f\\mid x^{q^n}-x$ tepat ketika $\\alpha^{q^n}=\\alpha$, yaitu tepat ketika $\\alpha\\in\\mathbb F_{q^n}$.",
          "Subfield $\\mathbb F_{q^d}$ termuat di $\\mathbb F_{q^n}$ tepat ketika $d\\mid n$. Dengan demikian kondisi pembagian polinom ekuivalen dengan $d\\mid n$."
        ]
      }
    ],
    "examples": [
      {
        "title": "Kuadrat Tak Tereduksi di $\\mathbb F_2$",
        "problem": "Tentukan apakah $x^2+x+1$ tak tereduksi.",
        "solution": [
          "Uji $x=0$: nilainya 1.",
          "Uji $x=1$: $1+1+1=1$ di $\\mathbb F_2$.",
          "Tidak ada akar di field."
        ],
        "conclusion": "$x^2+x+1$ tak tereduksi di $\\mathbb F_2[x]$."
      },
      {
        "title": "Kubik di $\\mathbb F_3$",
        "problem": "Periksa $f=x^3-x+1$.",
        "solution": [
          "$f(0)=1$.",
          "$f(1)=1-1+1=1$.",
          "$f(2)=8-2+1=7\\equiv1\\pmod3$."
        ],
        "conclusion": "Tidak ada akar di $\\mathbb F_3$, sehingga polinom tak tereduksi."
      }
    ],
    "exercises": [
      {
        "prompt": "Daftarkan polinom monik tak tereduksi derajat 2 di $\\mathbb F_2[x]$.",
        "hint": "Ada empat polinom monik kuadrat; uji akar 0 dan 1.",
        "answer": "Satu-satunya adalah $x^2+x+1$."
      },
      {
        "prompt": "Tentukan apakah $x^4+x+1$ tak tereduksi di $\\mathbb F_2[x]$.",
        "hint": "Uji tidak ada akar dan tidak habis dibagi satu-satunya tak tereduksi kuadrat $x^2+x+1$.",
        "answer": "Tidak ada akar di 0 atau 1. Pembagian oleh $x^2+x+1$ memberi sisa bukan nol. Karena faktor proper derajat 4 harus mempunyai faktor derajat 1 atau 2, polinom tak tereduksi."
      },
      {
        "prompt": "Jelaskan cara membangun field berorde 8.",
        "hint": "Gunakan polinom kubik tak tereduksi atas $\\mathbb F_2$.",
        "answer": "Pilih misalnya $f=x^3+x+1$ yang tak tereduksi. Ring faktor $\\mathbb F_2[x]/(f)$ adalah field dan mempunyai $2^3=8$ elemen."
      }
    ]
  }
};

export const abstractAlgebraContentC11 = buildAlgebraContent(specs);
