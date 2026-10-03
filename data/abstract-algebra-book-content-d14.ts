import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-ancient-construction": {
    "title": "Tiga Masalah Klasik",
    "focus": "Konstruksi penggaris dan jangka menerjemahkan operasi geometri menjadi operasi aljabar pada koordinat. Tiga masalah klasik Yunani adalah menggandakan kubus, membagi tiga sudut sebarang, dan mengkuadratkan lingkaran.",
    "definitions": [
      {
        "title": "Bilangan Dapat Dikonstruksi",
        "statement": "Bilangan real $x$ disebut dapat dikonstruksi jika, mulai dari titik berkoordinat $0$ dan $1$, panjang $|x|$ dapat diperoleh melalui hingga banyak langkah dengan penggaris tanpa skala dan jangka."
      },
      {
        "title": "Tiga Masalah Klasik",
        "statement": "Penggandaan kubus meminta konstruksi sisi kubus bervolume dua kali kubus satuan; triseksi sudut meminta pembagian sudut sebarang menjadi tiga bagian sama; kuadratur lingkaran meminta konstruksi persegi dengan luas sama dengan lingkaran yang diberikan."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Operasi Field pada Bilangan Konstruktibel",
        "statement": "Jika $a$ dan $b$ dapat dikonstruksi, maka $a+b$, $a-b$, $ab$, dan $a/b$ untuk $b\\ne0$ juga dapat dikonstruksi.",
        "proof": [
          "Penjumlahan dan pengurangan direalisasikan dengan memindahkan panjang pada satu garis menggunakan jangka dan orientasi koordinat.",
          "Perkalian dan pembagian direalisasikan melalui segitiga sebangun. Dengan menempatkan panjang 1, $a$, dan $b$ pada dua sinar serta menggambar garis sejajar, perbandingan sisi menghasilkan panjang $ab$ atau $a/b$.",
          "Setiap tahap memakai konstruksi garis dan lingkaran yang diizinkan. Dengan demikian himpunan bilangan konstruktibel tertutup terhadap empat operasi field."
        ]
      },
      {
        "kind": "proposition",
        "title": "Akar Kuadrat Bilangan Positif Konstruktibel",
        "statement": "Jika $a>0$ dapat dikonstruksi, maka $\\sqrt a$ juga dapat dikonstruksi.",
        "proof": [
          "Bangun ruas garis sepanjang $1+a$ dan sebuah setengah lingkaran yang mempunyai ruas tersebut sebagai diameter.",
          "Pada titik pembagi diameter yang menghasilkan dua ruas sepanjang 1 dan $a$, dirikan garis tegak lurus hingga memotong setengah lingkaran dengan tinggi $h$.",
          "Teorema tinggi pada segitiga siku-siku memberi $h^2=1\\cdot a$. Karena $h>0$, diperoleh $h=\\sqrt a$. Dengan demikian $\\sqrt a$ dapat dikonstruksi."
        ]
      }
    ],
    "examples": [
      {
        "title": "Membangun $\\sqrt2$",
        "problem": "Jelaskan konstruksi panjang $\\sqrt2$ dari segmen satuan.",
        "solution": [
          "Bangun segitiga siku-siku dengan kedua kaki sepanjang 1.",
          "Teorema Pythagoras memberi panjang hipotenusa $\\sqrt{1^2+1^2}=\\sqrt2$."
        ],
        "conclusion": "$\\sqrt2$ dapat dikonstruksi dengan penggaris dan jangka."
      },
      {
        "title": "Target Penggandaan Kubus",
        "problem": "Jika kubus awal bersisi 1, tentukan panjang sisi kubus yang volumenya dua kali lebih besar.",
        "solution": [
          "Volume kubus sisi $x$ adalah $x^3$.",
          "Syarat volume dua kali volume kubus satuan memberi $x^3=2$."
        ],
        "conclusion": "Panjang yang harus dikonstruksi adalah $\\sqrt[3]{2}$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan panjang yang harus dikonstruksi untuk mengkuadratkan lingkaran berjari-jari 1.",
        "hint": "Samakan luas persegi dengan luas lingkaran.",
        "answer": "Luas lingkaran adalah $\\pi$. Jika sisi persegi $s$, diperlukan $s^2=\\pi$, sehingga $s=\\sqrt\\pi$."
      },
      {
        "prompt": "Buktikan setiap bilangan rasional dapat dikonstruksi.",
        "hint": "Mulai dari panjang 1 dan gunakan operasi field.",
        "answer": "Integer diperoleh melalui penjumlahan dan pengurangan berulang. Untuk $p/q$ dengan $q\\ne0$, gunakan konstruksi pembagian melalui segitiga sebangun. Oleh karena itu setiap rasional konstruktibel."
      },
      {
        "prompt": "Jelaskan mengapa masalah konstruksi dapat diterjemahkan menjadi masalah field.",
        "hint": "Perhatikan operasi yang muncul pada koordinat titik hasil perpotongan.",
        "answer": "Koordinat titik konstruksi diperoleh dari operasi field dan penarikan akar kuadrat. Oleh karena itu kumpulan koordinat yang dapat dibuat berada dalam perluasan field dari $\\mathbb Q$."
      }
    ]
  },
  "alg-field-construction": {
    "title": "Hubungan dengan Perluasan Field",
    "focus": "Setiap langkah penggaris dan jangka menghasilkan koordinat yang diperoleh melalui operasi field dan penyelesaian persamaan kuadrat. Akibatnya bilangan konstruktibel tepat berada di dalam suatu menara perluasan kuadrat dari bilangan rasional.",
    "definitions": [
      {
        "title": "Menara Perluasan Kuadrat",
        "statement": "Menara perluasan kuadrat adalah rantai field $\\mathbb Q=F_0\\subseteq F_1\\subseteq\\cdots\\subseteq F_r$ dengan $[F_{i+1}:F_i]\\le2$ untuk setiap $i$."
      },
      {
        "title": "Derajat Bilangan Aljabar",
        "statement": "Jika $\\alpha$ aljabar atas $\\mathbb Q$, derajat $\\alpha$ adalah $[\\mathbb Q(\\alpha):\\mathbb Q]$, yang sama dengan derajat polinom minimalnya."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Karakterisasi Bilangan Konstruktibel",
        "statement": "Bilangan real $\\alpha$ dapat dikonstruksi dengan penggaris dan jangka jika dan hanya jika $\\alpha$ berada dalam suatu field pada menara perluasan kuadrat dari $\\mathbb Q$.",
        "proof": [
          "Pada sebuah tahap konstruksi, koordinat titik baru diperoleh dari perpotongan dua garis, garis dengan lingkaran, atau dua lingkaran. Perpotongan dua garis memerlukan hanya operasi field pada koordinat yang sudah tersedia. Kasus yang melibatkan lingkaran setelah eliminasi menghasilkan persamaan kuadrat atas field koordinat sebelumnya.",
          "Oleh karena itu setiap langkah memperluas field paling besar dengan menambahkan akar suatu persamaan kuadrat. Setelah hingga banyak langkah, semua koordinat yang terbentuk berada dalam menara dengan derajat setiap tahap paling besar 2.",
          "Sebaliknya, empat operasi field dapat direalisasikan melalui konstruksi geometri dasar, dan penambahan $\\sqrt d$ untuk $d>0$ dapat direalisasikan dengan konstruksi akar kuadrat. Induksi sepanjang menara menunjukkan setiap elemen real pada menara kuadrat dapat dikonstruksi."
        ]
      },
      {
        "kind": "corollary",
        "title": "Syarat Derajat untuk Konstruktibilitas",
        "statement": "Jika $\\alpha$ aljabar atas $\\mathbb Q$ dan dapat dikonstruksi, maka $[\\mathbb Q(\\alpha):\\mathbb Q]$ merupakan pangkat dua.",
        "proof": [
          "Karakterisasi konstruktibel memberi field $F_r$ dalam suatu menara kuadrat yang memuat $\\alpha$.",
          "Hukum Menara memberi $[F_r:\\mathbb Q]=\\prod_i[F_{i+1}:F_i]$. Setiap faktor bernilai 1 atau 2, sehingga derajat total merupakan pangkat dua.",
          "Karena $\\mathbb Q(\\alpha)\\subseteq F_r$, Hukum Menara juga memberi $[F_r:\\mathbb Q]=[F_r:\\mathbb Q(\\alpha)][\\mathbb Q(\\alpha):\\mathbb Q]$. Derajat $\\alpha$ membagi suatu pangkat dua, sehingga sendiri merupakan pangkat dua."
        ]
      }
    ],
    "examples": [
      {
        "title": "Bilangan $\\sqrt{2+\\sqrt2}$",
        "problem": "Buktikan $\\sqrt{2+\\sqrt2}$ dapat dikonstruksi.",
        "solution": [
          "$\\sqrt2$ diperoleh dari $\\mathbb Q$ melalui satu perluasan kuadrat.",
          "$2+\\sqrt2$ berada dalam field $\\mathbb Q(\\sqrt2)$ dan positif.",
          "Menarik akar kuadrat sekali lagi menempatkan $\\sqrt{2+\\sqrt2}$ dalam perluasan kuadrat berikutnya."
        ],
        "conclusion": "Bilangan tersebut berada dalam menara kuadrat dan dapat dikonstruksi."
      },
      {
        "title": "Derajat Empat yang Konstruktibel",
        "problem": "Tentukan apakah $\\sqrt2+\\sqrt3$ dapat dikonstruksi.",
        "solution": [
          "$\\sqrt2$ dan $\\sqrt3$ masing-masing konstruktibel.",
          "Bilangan konstruktibel tertutup terhadap penjumlahan.",
          "Elemen tersebut berada pada $\\mathbb Q(\\sqrt2,\\sqrt3)$, suatu perluasan berderajat 4."
        ],
        "conclusion": "$\\sqrt2+\\sqrt3$ dapat dikonstruksi."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan setiap elemen real dalam $\\mathbb Q(\\sqrt2,\\sqrt3)$ dapat dikonstruksi.",
        "hint": "Gunakan menara $\\mathbb Q\\subseteq\\mathbb Q(\\sqrt2)\\subseteq\\mathbb Q(\\sqrt2,\\sqrt3)$.",
        "answer": "Kedua langkah diperoleh dengan menambahkan akar kuadrat dan masing-masing berderajat paling besar 2. Karakterisasi konstruktibel memberi bahwa setiap elemen real dalam field akhir dapat dikonstruksi."
      },
      {
        "prompt": "Jika polinom minimal suatu bilangan real berderajat 6, apakah bilangan tersebut dapat dikonstruksi?",
        "hint": "Gunakan syarat perlu bahwa derajat harus pangkat dua.",
        "answer": "Tidak. Derajat bilangan aljabar konstruktibel harus berupa pangkat dua, sedangkan 6 bukan pangkat dua."
      },
      {
        "prompt": "Apakah syarat derajat berupa pangkat dua saja cukup untuk menjamin suatu bilangan aljabar konstruktibel?",
        "hint": "Bedakan syarat perlu dan karakterisasi menara kuadrat.",
        "answer": "Tidak secara umum. Konstruktibilitas memerlukan keberadaan menara perluasan kuadrat yang memuat bilangan tersebut. Derajat berupa pangkat dua hanya merupakan syarat perlu."
      }
    ]
  },
  "alg-impossibility-construction": {
    "title": "Pembuktian Ketidakmungkinan",
    "focus": "Teori perluasan field mengubah ketidakmungkinan konstruksi geometri menjadi pernyataan tentang derajat polinom minimal. Penggandaan kubus dan triseksi sudut tertentu gagal karena membutuhkan elemen berderajat 3, sedangkan kuadratur lingkaran gagal karena membutuhkan bilangan yang berkaitan dengan konstanta transenden $\\pi$.",
    "definitions": [
      {
        "title": "Hambatan Derajat",
        "statement": "Jika bilangan real aljabar $\\alpha$ dapat dikonstruksi dari $\\mathbb Q$, maka derajat $[\\mathbb Q(\\alpha):\\mathbb Q]$ harus berupa pangkat dua."
      },
      {
        "title": "Bilangan Transenden",
        "statement": "Bilangan kompleks disebut transenden atas $\\mathbb Q$ jika tidak menjadi akar dari polinom nonnol apa pun di $\\mathbb Q[x]$."
      }
    ],
    "results": [
      {
        "kind": "theorem",
        "title": "Penggandaan Kubus Mustahil",
        "statement": "Tidak ada konstruksi penggaris dan jangka yang, dari kubus satuan, menghasilkan sisi kubus dengan volume 2.",
        "proof": [
          "Sisi yang diperlukan adalah $\\alpha=\\sqrt[3]{2}$ karena $\\alpha^3=2$.",
          "Polinom $x^3-2$ tak tereduksi di $\\mathbb Q[x]$ berdasarkan Kriteria Eisenstein dengan prima 2. Oleh karena itu polinom minimal $\\alpha$ berderajat 3 dan $[\\mathbb Q(\\alpha):\\mathbb Q]=3$.",
          "Jika $\\alpha$ dapat dikonstruksi, derajatnya harus berupa pangkat dua. Bilangan 3 bukan pangkat dua. Kontradiksi ini membuktikan bahwa penggandaan kubus tidak mungkin dilakukan hanya dengan penggaris dan jangka."
        ]
      },
      {
        "kind": "theorem",
        "title": "Triseksi Sudut $60^\\circ$ Mustahil",
        "statement": "Sudut $60^\\circ$ tidak dapat dibagi menjadi tiga sudut sama besar menggunakan hanya penggaris dan jangka.",
        "proof": [
          "Jika sudut $20^\\circ$ dapat dikonstruksi, maka $x=2\\cos20^\\circ$ juga konstruktibel. Identitas $2\\cos3\\theta=(2\\cos\\theta)^3-3(2\\cos\\theta)$ dengan $\\theta=20^\\circ$ memberi $x^3-3x-1=0$.",
          "Polinom $x^3-3x-1$ tidak mempunyai akar rasional karena kandidat akar rasional hanya $\\pm1$ dan keduanya bukan akar. Sebagai polinom kubik, ketiadaan akar rasional membuatnya tak tereduksi di $\\mathbb Q[x]$.",
          "Diperoleh $[\\mathbb Q(x):\\mathbb Q]=3$, bukan pangkat dua. Oleh karena itu $x$ tidak dapat dikonstruksi dan sudut $20^\\circ$ tidak dapat diperoleh dari sudut $60^\\circ$ dengan penggaris dan jangka."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kuadratur Lingkaran Mustahil",
        "statement": "Tidak ada konstruksi penggaris dan jangka yang menghasilkan persegi dengan luas sama dengan lingkaran satuan.",
        "proof": [
          "Persegi yang luasnya sama dengan lingkaran satuan harus mempunyai sisi $s=\\sqrt\\pi$ karena $s^2=\\pi$.",
          "Setiap bilangan yang dapat dikonstruksi dari $\\mathbb Q$ melalui menara kuadrat adalah aljabar atas $\\mathbb Q$. Jika $\\sqrt\\pi$ konstruktibel, maka $\\sqrt\\pi$ aljabar, dan kuadratnya $\\pi$ juga aljabar.",
          "Teorema Lindemann menyatakan bahwa $\\pi$ transenden atas $\\mathbb Q$. Ini bertentangan dengan kesimpulan sebelumnya. Oleh karena itu $\\sqrt\\pi$ tidak konstruktibel. Pembuktian transcendensi $\\pi$ merupakan hasil terpisah yang berada di luar teori perluasan field elementer pada materi ini."
        ]
      }
    ],
    "examples": [
      {
        "title": "Hambatan Derajat Tiga",
        "problem": "Tentukan apakah akar real $\\alpha$ dari $x^3-x-1=0$ dapat dikonstruksi jika polinom tersebut tak tereduksi di $\\mathbb Q[x]$.",
        "solution": [
          "Tak tereduksi derajat 3 memberi $[\\mathbb Q(\\alpha):\\mathbb Q]=3$.",
          "Bilangan 3 bukan pangkat dua."
        ],
        "conclusion": "$\\alpha$ tidak dapat dikonstruksi dengan penggaris dan jangka."
      },
      {
        "title": "Akar Pangkat Empat",
        "problem": "Tentukan apakah $\\sqrt[4]{2}$ dapat dikonstruksi.",
        "solution": [
          "$\\sqrt2$ dapat dikonstruksi.",
          "$\\sqrt[4]{2}=\\sqrt{\\sqrt2}$ diperoleh dengan satu penarikan akar kuadrat tambahan."
        ],
        "conclusion": "$\\sqrt[4]{2}$ dapat dikonstruksi."
      }
    ],
    "exercises": [
      {
        "prompt": "Buktikan $\\sqrt[3]{5}$ tidak dapat dikonstruksi.",
        "hint": "Gunakan Kriteria Eisenstein pada $x^3-5$.",
        "answer": "Polinom $x^3-5$ tak tereduksi dengan Eisenstein untuk prima 5. Derajat $\\sqrt[3]{5}$ atas $\\mathbb Q$ adalah 3, bukan pangkat dua, sehingga tidak konstruktibel."
      },
      {
        "prompt": "Tentukan apakah $\\sqrt[8]{2}$ dapat dikonstruksi.",
        "hint": "Tuliskan sebagai penarikan akar kuadrat berulang.",
        "answer": "$\\sqrt[8]{2}=\\sqrt{\\sqrt{\\sqrt2}}$. Dimulai dari 2, tiga kali konstruksi akar kuadrat menghasilkan panjang tersebut, sehingga konstruktibel."
      },
      {
        "prompt": "Jelaskan mengapa transcendensi $\\pi$ memberi hambatan yang lebih kuat daripada derajat aljabar yang bukan pangkat dua.",
        "hint": "Bandingkan definisi aljabar dan transenden.",
        "answer": "Bilangan transenden tidak mempunyai polinom minimal aljabar berderajat hingga. Semua bilangan konstruktibel dari $\\mathbb Q$ bersifat aljabar, sehingga transcendensi langsung menolak konstruktibilitas tanpa perlu menghitung derajat."
      }
    ]
  }
};

export const abstractAlgebraContentD14 = buildAlgebraContent(specs);
