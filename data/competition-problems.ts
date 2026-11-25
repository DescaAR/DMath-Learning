export const levels = ["SD","SMP","SMA","Kuliah"] as const;
export type Level = typeof levels[number];
export type Source = {kind:"original"|"competition";label:string;competition?:string;year?:number;number?:string;url?:string;note?:string};
export type CompetitionProblem = {id:string;level:Level;topic:string;difficulty:number;title:string;prompt:string;hints:string[];idea:string;solutions:{title:string;steps:string[]}[];proof:{prompt:string;answer:string};evolution:{prompt:string;steps:string[]};source:Source};
export const competitionProblems: CompetitionProblem[] = [
  {
    "id": "sd-001",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Pasangan yang tepat",
    "prompt": "Hitung jumlah $1+2+\\cdots+40$ tanpa menjumlahkan satu per satu.",
    "hints": [
      "Pasangkan bilangan terkecil dengan terbesar.",
      "Setiap pasangan memiliki jumlah yang sama. Berapa banyak pasangan?",
      "Pasangan pertama adalah 1 dan 40; pasangan terakhir adalah 20 dan 21."
    ],
    "idea": "Carilah struktur yang tetap ketika urutan bilangan dibalik.",
    "solutions": [
      {
        "title": "Memasangkan bilangan",
        "steps": [
          "Diperhatikan pasangan $(1,40),(2,39),\\ldots,(20,21)$. Masing-masing berjumlah $41$.",
          "Terdapat tepat $20$ pasangan karena setiap pasangan menggunakan dua dari $40$ bilangan.",
          "Jumlah seluruh bilangan adalah $20\\cdot41=820$."
        ]
      },
      {
        "title": "Melipatgandakan jumlah",
        "steps": [
          "Misalkan $S=1+2+\\cdots+40$. Tuliskan pula $S=40+39+\\cdots+1$.",
          "Jika kedua persamaan dijumlahkan menurut posisi, terdapat 40 suku yang masing-masing bernilai 41. Diperoleh $2S=40\\cdot41=1640$, sehingga $S=820$."
        ]
      }
    ],
    "proof": {
      "prompt": "Lengkapi alasan mengapa pasangan $(i,41-i)$ untuk $1\\le i\\le20$ mencakup semua bilangan.",
      "answer": "Anggota pertama mencakup 1 sampai 20. Anggota kedua mencakup 40 sampai 21. Kedua kelompok terpisah dan gabungannya tepat 1 sampai 40."
    },
    "evolution": {
      "prompt": "Tentukan jumlah $1+2+\\cdots+n$ untuk sembarang bilangan asli $n$.",
      "steps": [
        "Tuliskan jumlah dalam dua urutan yang berlawanan. Setiap pasangan posisi berjumlah $n+1$.",
        "Diperoleh $2S=n(n+1)$, sehingga $S=\\frac{n(n+1)}2$. Cara ini juga berlaku jika $n$ ganjil, sebab yang dipasangkan adalah posisi pada dua salinan jumlah."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sd-002",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Kaus dan celana",
    "prompt": "Rina mempunyai 4 kaus berbeda dan 3 celana berbeda. Salah satu kaus tidak boleh dipasangkan dengan satu celana tertentu. Berapa banyak pakaian berbeda yang dapat dipilih?",
    "hints": [
      "Hitung dahulu semua pilihan tanpa larangan.",
      "Setiap kaus dapat dipasangkan dengan tiga celana.",
      "Kurangi tepat satu pasangan yang dilarang."
    ],
    "idea": "Gunakan prinsip perkalian lalu keluarkan pilihan yang tidak sah.",
    "solutions": [
      {
        "title": "Pencacahan komplemen",
        "steps": [
          "Untuk setiap kaus terdapat 3 pilihan celana. Karena terdapat 4 kaus, tanpa larangan ada $4\\cdot3=12$ pasangan.",
          "Hanya satu pasangan kaus-celana yang dilarang. Semua pasangan lain sah, sehingga jumlahnya $12-1=11$."
        ]
      },
      {
        "title": "Membagi berdasarkan kaus",
        "steps": [
          "Kaus yang terkena larangan mempunyai 2 pilihan celana. Ketiga kaus lain masing-masing mempunyai 3 pilihan.",
          "Karena kelompok pasangan berdasarkan kaus saling terpisah, diperoleh $2+3+3+3=11$."
        ]
      }
    ],
    "proof": {
      "prompt": "Mengapa dua pilihan pakaian dari kaus berbeda tidak boleh dihitung sebagai pasangan yang sama?",
      "answer": "Pasangan ditentukan oleh kaus dan celana secara bersamaan. Jika kaus berbeda, pasangan tersebut berbeda, meskipun celananya sama."
    },
    "evolution": {
      "prompt": "Jika ada $m$ kaus dan $n$ celana dengan tepat $k$ pasangan berbeda yang dilarang, berapa banyak pilihan sah?",
      "steps": [
        "Tanpa larangan ada $mn$ pasangan. Karena $k$ pasangan dilarang itu berbeda, pengurangan tidak menghitung satu pasangan dua kali.",
        "Banyak pilihan sah adalah $mn-k$, dengan $0\\le k\\le mn$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sd-003",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Bangun titik tengah",
    "prompt": "Sebuah persegi panjang berukuran 12 cm × 8 cm. Keempat titik tengah sisinya dihubungkan berurutan. Tentukan luas bangun di bagian dalam.",
    "hints": [
      "Perhatikan empat segitiga di luar bangun tengah.",
      "Setiap segitiga sudut memiliki kaki 6 cm dan 4 cm.",
      "Kurangi luas keempat segitiga dari luas persegi panjang."
    ],
    "idea": "Bagian yang sulit dapat dihitung sebagai selisih luas yang mudah.",
    "solutions": [
      {
        "title": "Menghitung luas komplemen",
        "steps": [
          "Luas persegi panjang adalah $12\\cdot8=96\\text{ cm}^2$.",
          "Pada setiap sudut terbentuk segitiga siku-siku dengan kaki 6 cm dan 4 cm. Luas masing-masing adalah $\\frac12\\cdot6\\cdot4=12\\text{ cm}^2$.",
          "Keempat segitiga tidak saling bertumpuk di bagian dalam. Luas bangun tengah adalah $96-4\\cdot12=48\\text{ cm}^2$."
        ]
      },
      {
        "title": "Menggunakan diagonal",
        "steps": [
          "Bangun tengah adalah belah ketupat: setiap sisinya merupakan sisi miring segitiga siku-siku dengan kaki yang sama panjang, yaitu 6 dan 4.",
          "Diagonalnya menghubungkan titik tengah sisi yang berhadapan dan masing-masing panjangnya 12 cm dan 8 cm. Luasnya $\\frac12\\cdot12\\cdot8=48\\text{ cm}^2$."
        ]
      }
    ],
    "proof": {
      "prompt": "Mengapa semua segitiga sudut memiliki luas yang sama?",
      "answer": "Setiap segitiga memiliki alas setengah panjang persegi panjang dan tinggi setengah lebarnya. Rumus luas segitiga memberikan hasil yang sama."
    },
    "evolution": {
      "prompt": "Buktikan bahwa untuk persegi panjang berukuran $a\\times b$, bangun titik tengah selalu memiliki setengah luas persegi panjang.",
      "steps": [
        "Setiap segitiga sudut mempunyai luas $\\frac12\\cdot\\frac a2\\cdot\\frac b2=\\frac{ab}{8}$.",
        "Luas bagian dalam adalah $ab-4\\cdot\\frac{ab}{8}=\\frac{ab}{2}$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sd-004",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Sisa yang sama",
    "prompt": "Tentukan bilangan asli terkecil yang lebih besar dari 20 dan bersisa 2 ketika dibagi 3 maupun 5.",
    "hints": [
      "Kurangi bilangan yang dicari dengan 2.",
      "Hasilnya harus habis dibagi 3 dan 5.",
      "Kelipatan bersama positif terkecil adalah 15."
    ],
    "idea": "Ubah kondisi sisa menjadi kondisi keterbagian.",
    "solutions": [
      {
        "title": "Kelipatan persekutuan",
        "steps": [
          "Misalkan bilangan yang dicari adalah $n$. Karena kedua sisanya 2, bilangan $n-2$ habis dibagi 3 dan 5.",
          "Karena 3 dan 5 relatif prima, $n-2$ adalah kelipatan 15. Bilangan yang memenuhi berbentuk $n=15k+2$.",
          "Untuk $k=1$ diperoleh 17, belum lebih dari 20. Untuk $k=2$ diperoleh 32.",
          "Karena $k$ harus bulat dan nilai meningkat ketika $k$ meningkat, 32 merupakan nilai terkecil. Pemeriksaan: $32=3\\cdot10+2=5\\cdot6+2$."
        ]
      }
    ],
    "proof": {
      "prompt": "Lengkapi: jika $n-2$ habis dibagi 3 dan 5, maka $n-2$ habis dibagi ... . Mengapa?",
      "answer": "Habis dibagi 15, karena KPK dari 3 dan 5 adalah 15."
    },
    "evolution": {
      "prompt": "Cari rumus semua bilangan bulat yang bersisa sama $r$ ketika dibagi $a$ dan $b$, dengan $0\\le r<\\min(a,b)$.",
      "steps": [
        "Syarat tersebut ekuivalen dengan $a\\mid(n-r)$ dan $b\\mid(n-r)$.",
        "Dengan sifat KPK, seluruh solusinya adalah $n=r+k\\operatorname{KPK}(a,b)$ untuk $k\\in\\mathbb Z$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "smp-001",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Tiga bilangan berurutan",
    "prompt": "Buktikan bahwa $6\\mid(n^3-n)$ untuk setiap bilangan bulat $n$.",
    "hints": [
      "Faktorkan selisih pangkat.",
      "Perhatikan sifat tiga bilangan bulat berurutan.",
      "Gunakan bahwa 2 dan 3 relatif prima."
    ],
    "idea": "Pangkat yang rumit dapat diubah menjadi produk yang mudah dianalisis keterbagiannya.",
    "solutions": [
      {
        "title": "Faktorisasi",
        "steps": [
          "Diambil sebarang $n\\in\\mathbb Z$. Diperoleh $n^3-n=n(n-1)(n+1)$.",
          "Di antara dua bilangan bulat berurutan terdapat tepat satu bilangan genap. Oleh karena itu, salah satu dari $n-1,n,n+1$ habis dibagi 2.",
          "Tiga bilangan berurutan mempunyai tiga sisa berbeda modulo 3. Salah satunya habis dibagi 3.",
          "Karena $\\gcd(2,3)=1$, jika produk tersebut habis dibagi 2 dan 3 maka habis dibagi 6. Dengan demikian $6\\mid(n^3-n)$. $\\square$"
        ]
      },
      {
        "title": "Kongruensi",
        "steps": [
          "Untuk modulo 2, setiap bilangan bulat kongruen dengan 0 atau 1, dan pada kedua kasus $n^3\\equiv n\\pmod2$.",
          "Untuk modulo 3, perwakilan sisa dapat dipilih $-1,0,1$. Ketiganya memenuhi $r^3=r$. Oleh karena itu $n^3\\equiv n\\pmod3$.",
          "Kedua kongruensi memberikan keterbagian oleh 6 karena 2 dan 3 relatif prima."
        ]
      }
    ],
    "proof": {
      "prompt": "Lengkapi pembuktian: setiap bilangan bulat $n$ mempunyai sisa 0, 1, atau 2 jika dibagi 3. Mengapa produk $(n-1)n(n+1)$ mempunyai faktor kelipatan 3?",
      "answer": "Jika $n\\equiv0$ maka $n$ kelipatan 3; jika $n\\equiv1$ maka $n-1$ kelipatan 3; jika $n\\equiv2$ maka $n+1$ kelipatan 3."
    },
    "evolution": {
      "prompt": "Buktikan bahwa produk $k$ bilangan bulat positif berurutan habis dibagi $k!$.",
      "steps": [
        "Misalkan bilangan itu $m,m+1,\\ldots,m+k-1$ dengan $m\\ge1$.",
        "Dari rumus kombinasi, $\\frac{m(m+1)\\cdots(m+k-1)}{k!}=\\binom{m+k-1}{k}$ adalah bilangan bulat. Oleh karena itu $k!$ membagi produk."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "smp-002",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Jumlah dan hasil kali",
    "prompt": "Diketahui $x+y=9$ dan $xy=14$. Tentukan $x^2+y^2$ dan $x^3+y^3$ tanpa mencari $x$ serta $y$ secara eksplisit.",
    "hints": [
      "Gunakan kuadrat jumlah.",
      "Tuliskan pangkat tiga dari jumlah dua bilangan.",
      "Pisahkan suku campuran dengan menggunakan xy."
    ],
    "idea": "Ekspresi simetris sering dapat ditentukan hanya dari jumlah dan hasil kali.",
    "solutions": [
      {
        "title": "Identitas aljabar",
        "steps": [
          "Identitas $(x+y)^2=x^2+2xy+y^2$ memberikan $x^2+y^2=9^2-2(14)=53$.",
          "Identitas $(x+y)^3=x^3+y^3+3xy(x+y)$ memberikan $x^3+y^3=9^3-3(14)(9)=729-378=351$.",
          "Dengan demikian kedua nilai adalah 53 dan 351. Tidak diperlukan penentuan masing-masing akar."
        ]
      },
      {
        "title": "Relasi rekurensi",
        "steps": [
          "Karena $x+y=9$ dan $xy=14$, kedua bilangan memenuhi persamaan $t^2-9t+14=0$.",
          "Untuk $t=x,y$ berlaku $t^2=9t-14$. Penjumlahan memberikan $x^2+y^2=9(x+y)-28=53$.",
          "Kalikan relasi dengan $t$, lalu jumlahkan untuk memperoleh $x^3+y^3=9(53)-14(9)=351$."
        ]
      }
    ],
    "proof": {
      "prompt": "Buktikan identitas $x^3+y^3=(x+y)^3-3xy(x+y)$ dengan mengembangkan ruas kanan.",
      "answer": "Ruas kanan adalah $x^3+3x^2y+3xy^2+y^3-3x^2y-3xy^2=x^3+y^3$."
    },
    "evolution": {
      "prompt": "Jika $s=x+y$ dan $p=xy$, tentukan relasi untuk $u_n=x^n+y^n$.",
      "steps": [
        "Masing-masing $t=x,y$ memenuhi $t^2-st+p=0$. Kalikan dengan $t^{n-2}$ untuk $n\\ge2$, lalu jumlahkan.",
        "Diperoleh $u_n=su_{n-1}-pu_{n-2}$, dengan $u_0=2$ (pangkat nol dipandang sebagai suku awal) dan $u_1=s$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "smp-003",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Tidak mungkin semuanya berbeda",
    "prompt": "Dipilih enam bilangan berbeda dari $\\{1,2,\\ldots,10\\}$. Buktikan bahwa ada dua bilangan terpilih yang jumlahnya 11.",
    "hints": [
      "Kelompokkan bilangan yang saling melengkapi menjadi 11.",
      "Terdapat lima kelompok, masing-masing berisi dua bilangan.",
      "Enam pilihan tidak mungkin menempati lima kelompok berbeda."
    ],
    "idea": "Susun kotak-kotak sedemikian rupa sehingga benturan memaksa sifat yang diinginkan.",
    "solutions": [
      {
        "title": "Prinsip rumah merpati",
        "steps": [
          "Partisi himpunan tersebut menjadi $\\{1,10\\},\\{2,9\\},\\{3,8\\},\\{4,7\\},\\{5,6\\}$.",
          "Setiap bilangan berada tepat pada satu pasangan. Karena terdapat enam bilangan terpilih tetapi hanya lima pasangan, prinsip rumah merpati menjamin sedikitnya satu pasangan memuat dua bilangan terpilih.",
          "Setiap pasangan berjumlah 11, sehingga klaim terbukti. $\\square$"
        ]
      }
    ],
    "proof": {
      "prompt": "Tunjukkan bahwa pemilihan lima bilangan belum cukup untuk menjamin kesimpulan.",
      "answer": "Himpunan pilihan {1,2,3,4,5} tidak memuat pasangan berjumlah 11 karena jumlah dua anggota terbesarnya hanya 9."
    },
    "evolution": {
      "prompt": "Tentukan jumlah pilihan minimum dari $\\{1,\\ldots,2m\\}$ yang menjamin adanya pasangan berjumlah $2m+1$.",
      "steps": [
        "Terdapat $m$ pasangan saling lepas yang berjumlah $2m+1$. Memilih $m+1$ bilangan memaksa salah satu pasangan terpilih lengkap.",
        "Memilih tepat $m$ bilangan belum menjamin hasil karena $\\{1,\\ldots,m\\}$ tidak memuat pasangan berjumlah $2m+1$. Minimum adalah $m+1$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "smp-004",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas yang tidak berubah",
    "prompt": "Pada segitiga $ABC$, titik $D$ terletak pada $BC$ dengan $BD:DC=2:3$. Jika luas $ABC$ adalah 60, tentukan luas $ABD$ dan $ADC$.",
    "hints": [
      "Gunakan BC sebagai garis alas.",
      "Kedua segitiga memiliki tinggi yang sama.",
      "Rasio luas sama dengan rasio panjang alas."
    ],
    "idea": "Jangan mencari tinggi apabila hanya rasio luas yang dibutuhkan.",
    "solutions": [
      {
        "title": "Rasio luas",
        "steps": [
          "Misalkan tinggi dari $A$ ke garis $BC$ adalah $h$. Karena $BD$ dan $DC$ terletak pada garis yang sama, luas $ABD=\\frac12 BD\\cdot h$ dan luas $ADC=\\frac12 DC\\cdot h$.",
          "Rasionya $BD:DC=2:3$. Karena kedua segitiga membentuk $ABC$, jumlah luasnya adalah 60.",
          "Misalkan luasnya $2k$ dan $3k$. Diperoleh $5k=60$ sehingga $k=12$. Jadi luas masing-masing adalah 24 dan 36."
        ]
      }
    ],
    "proof": {
      "prompt": "Jelaskan mengapa tinggi kedua segitiga sama walaupun kaki tinggi dari $A$ mungkin berada di luar salah satu segitiga.",
      "answer": "Tinggi terhadap alas adalah jarak tegak lurus dari $A$ ke garis yang memuat alas. Kedua alas berada pada garis $BC$, sehingga jaraknya sama."
    },
    "evolution": {
      "prompt": "Jika $BC$ dibagi menjadi $k$ segmen yang sama panjang, buktikan bahwa segitiga-segitiga dengan puncak $A$ memiliki luas sama.",
      "steps": [
        "Semua alas mempunyai panjang $BC/k$ dan tinggi yang sama. Maka masing-masing luas $\\frac12(BC/k)h=\\frac1k[ABC]$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sma-001",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Ketaksamaan tiga pecahan",
    "prompt": "Untuk $a,b,c>0$, buktikan $\\frac a{b+c}+\\frac b{c+a}+\\frac c{a+b}\\ge\\frac32$ dan tentukan kondisi kesamaan.",
    "hints": [
      "Tuliskan setiap pecahan sebagai kuadrat pembilang dibagi hasil kali.",
      "Gunakan ketaksamaan Cauchy–Schwarz bentuk Engel.",
      "Bandingkan ab+bc+ca dengan a²+b²+c²."
    ],
    "idea": "Penyebut yang saling bergantung dapat disatukan menggunakan Cauchy–Schwarz.",
    "solutions": [
      {
        "title": "Cauchy–Schwarz langsung",
        "steps": [
          "Tuliskan $\\frac a{b+c}=\\frac{a^2}{a(b+c)}$, demikian pula untuk dua suku lain. Karena semua penyebut positif, ketaksamaan Cauchy–Schwarz memberikan",
          "$$\\sum_{\\rm cyc}\\frac{a^2}{a(b+c)}\\ge\\frac{(a+b+c)^2}{2(ab+bc+ca)}.$$",
          "Karena $(a-b)^2+(b-c)^2+(c-a)^2\\ge0$, berlaku $a^2+b^2+c^2\\ge ab+bc+ca$. Oleh karena itu $(a+b+c)^2\\ge3(ab+bc+ca)$.",
          "Gabungan keduanya menghasilkan batas $\\frac32$. Kesamaan pada ketaksamaan kuadrat terjadi tepat ketika $a=b=c$, dan substitusi nilai tersebut memberikan tiga suku $\\frac12$. $\\square$"
        ]
      },
      {
        "title": "Mengubah pembilang",
        "steps": [
          "Tuliskan $S=a+b+c>0$. Karena $a=S-(b+c)$, jumlah ruas kiri adalah $S(\\frac1{b+c}+\\frac1{c+a}+\\frac1{a+b})-3$.",
          "Cauchy–Schwarz memberikan $\\sum_{\\rm cyc}\\frac1{b+c}\\ge\\frac9{2S}$. Dengan demikian ruas kiri sekurang-kurangnya $\\frac92-3=\\frac32$.",
          "Kesamaan terjadi tepat jika $b+c=c+a=a+b$, ekuivalen dengan $a=b=c$."
        ]
      }
    ],
    "proof": {
      "prompt": "Lengkapi alasan $(a+b+c)^2\\ge3(ab+bc+ca)$.",
      "answer": "Selisih kedua ruas adalah $a^2+b^2+c^2-ab-bc-ca=\\frac12((a-b)^2+(b-c)^2+(c-a)^2)\\ge0$."
    },
    "evolution": {
      "prompt": "Untuk $n\\ge2$ dan $x_i>0$, buktikan $\\sum_{i=1}^n\\frac{x_i}{S-x_i}\\ge\\frac n{n-1}$ dengan $S=\\sum_i x_i$.",
      "steps": [
        "Karena $\\frac{x_i}{S-x_i}=\\frac S{S-x_i}-1$, ruas kiri sama dengan $S\\sum_i\\frac1{S-x_i}-n$.",
        "Cauchy–Schwarz memberi $\\sum_i\\frac1{S-x_i}\\ge\\frac{n^2}{(n-1)S}$. Hasilnya $\\frac{n^2}{n-1}-n=\\frac n{n-1}$, dengan kesamaan tepat ketika semua $x_i$ sama."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sma-002",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Lintasan tanpa melintasi diagonal",
    "prompt": "Berapa banyak lintasan dari $(0,0)$ ke $(4,4)$ dengan langkah $(1,0)$ atau $(0,1)$ yang tidak pernah berada di atas garis $y=x$?",
    "hints": [
      "Hitung semua lintasan tanpa batasan.",
      "Untuk lintasan buruk, cari titik pertama dengan y=x+1.",
      "Tukarkan langkah mendatar dan vertikal hingga titik pertama tersebut."
    ],
    "idea": "Refleksi mengubah kumpulan lintasan buruk menjadi objek yang lebih mudah dihitung.",
    "solutions": [
      {
        "title": "Prinsip refleksi",
        "steps": [
          "Seluruh lintasan terdiri atas 4 langkah mendatar dan 4 langkah vertikal. Banyaknya adalah $\\binom84=70$.",
          "Lintasan buruk mempunyai titik pertama dengan $y=x+1$. Tukarkan setiap langkah mendatar dengan vertikal dan sebaliknya pada bagian lintasan sampai titik tersebut. Jumlah langkah mendatar bertambah satu dan vertikal berkurang satu, sehingga lintasan baru berakhir di $(5,3)$.",
          "Sebaliknya, setiap lintasan ke $(5,3)$ mempunyai titik pertama dengan $x=y+1$. Pertukaran pada awalan itu menghasilkan lintasan buruk semula. Dengan demikian operasi tersebut bijektif.",
          "Banyak lintasan buruk adalah $\\binom83=56$. Maka banyak lintasan yang diminta $70-56=14$."
        ]
      }
    ],
    "proof": {
      "prompt": "Mengapa setiap lintasan ke (5,3) pasti mempunyai titik pertama dengan x=y+1?",
      "answer": "Selisih x-y mulai dari 0 dan berakhir di 2. Setiap langkah mengubah selisih tepat satu, sehingga harus pernah bernilai 1."
    },
    "evolution": {
      "prompt": "Generalisasikan ke lintasan dari $(0,0)$ ke $(n,n)$ yang tidak melampaui $y=x$.",
      "steps": [
        "Dengan refleksi yang sama, terdapat $\\binom{2n}{n}$ lintasan total dan $\\binom{2n}{n-1}$ lintasan buruk.",
        "Selisihnya adalah $\\binom{2n}{n}-\\binom{2n}{n-1}=\\frac1{n+1}\\binom{2n}{n}$, bilangan Catalan ke-$n$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sma-003",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Sisa kuadrat prima",
    "prompt": "Buktikan bahwa untuk setiap bilangan prima $p>3$, berlaku $24\\mid(p^2-1)$.",
    "hints": [
      "Faktorkan p²−1.",
      "Karena p ganjil, p−1 dan p+1 genap; salah satunya kelipatan 4.",
      "Gunakan sisa modulo 3 dan relatif prima antara 3 dan 8."
    ],
    "idea": "Pisahkan faktor 24 menjadi bagian yang dapat dipahami lewat paritas dan kongruensi.",
    "solutions": [
      {
        "title": "Keterbagian",
        "steps": [
          "Karena $p>3$ prima, $p$ ganjil dan tidak habis dibagi 3. Diperoleh $p^2-1=(p-1)(p+1)$.",
          "Kedua faktor genap, dan tepat satu di antaranya habis dibagi 4. Oleh karena itu produk habis dibagi $2\\cdot4=8$.",
          "Karena $p\\not\\equiv0\\pmod3$, berlaku $p\\equiv1$ atau $-1\\pmod3$. Akibatnya $p^2-1\\equiv0\\pmod3$.",
          "Karena $\\gcd(8,3)=1$, diperoleh $24\\mid p^2-1$. $\\square$"
        ]
      }
    ],
    "proof": {
      "prompt": "Tunjukkan bahwa jika $p$ ganjil, salah satu dari $p-1,p+1$ adalah kelipatan 4.",
      "answer": "Sisa bilangan ganjil modulo 4 adalah 1 atau 3. Jika sisanya 1, maka $p-1$ kelipatan 4; jika sisanya 3, maka $p+1$ kelipatan 4."
    },
    "evolution": {
      "prompt": "Karakterisasikan semua bilangan bulat $n$ yang memenuhi $24\\mid(n^2-1)$.",
      "steps": [
        "Jika $24\\mid n^2-1$, maka $n$ ganjil karena kuadratnya kongruen 1 modulo 2; juga $3\\nmid n$ karena kuadratnya kongruen 1 modulo 3.",
        "Sebaliknya, setiap bilangan ganjil yang bukan kelipatan 3 memenuhi bukti di atas. Dengan demikian syarat ekuivalen dengan $\\gcd(n,6)=1$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "sma-004",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Jarak titik tengah",
    "prompt": "Segitiga $ABC$ mempunyai sisi $AB=13$, $AC=15$, dan $BC=14$. Jika $M$ titik tengah $BC$, tentukan panjang $AM$.",
    "hints": [
      "Gunakan identitas median atau Teorema Apollonius.",
      "Dapat pula meletakkan B dan C simetris terhadap titik asal.",
      "Kuadrat jarak AB dan AC jika dijumlahkan menghilangkan suku linear."
    ],
    "idea": "Pemilihan koordinat simetris membantu menghilangkan besaran yang tidak diperlukan.",
    "solutions": [
      {
        "title": "Koordinat",
        "steps": [
          "Ambil $B=(-7,0)$, $C=(7,0)$, $M=(0,0)$ dan $A=(u,v)$.",
          "Dari panjang sisi diperoleh $(u+7)^2+v^2=169$ dan $(u-7)^2+v^2=225$.",
          "Jumlahkan: $2u^2+2v^2+98=394$. Diperoleh $u^2+v^2=148$.",
          "Karena $AM=\\sqrt{u^2+v^2}$, panjang median adalah $\\sqrt{148}=2\\sqrt{37}$."
        ]
      },
      {
        "title": "Teorema Apollonius",
        "steps": [
          "Pada segitiga dengan median $AM$, berlaku $AB^2+AC^2=2(AM^2+BM^2)$.",
          "Substitusi memberikan $169+225=2(AM^2+49)$. Dengan demikian $AM^2=148$ dan $AM=2\\sqrt{37}$."
        ]
      }
    ],
    "proof": {
      "prompt": "Buktikan identitas Apollonius dengan menuliskan $B=(-d,0)$ dan $C=(d,0)$.",
      "answer": "Untuk $A=(u,v)$, diperoleh $AB^2+AC^2=(u+d)^2+v^2+(u-d)^2+v^2=2(u^2+v^2+d^2)=2(AM^2+BM^2)$."
    },
    "evolution": {
      "prompt": "Jika $BC=a$, $CA=b$, dan $AB=c$, tentukan panjang median dari $A$.",
      "steps": [
        "Dari identitas Apollonius, $b^2+c^2=2(m_a^2+(a/2)^2)$.",
        "Dengan mengisolasi $m_a^2$, diperoleh $m_a=\\frac12\\sqrt{2b^2+2c^2-a^2}$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "univ-001",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Barisan akar bersarang",
    "prompt": "Misalkan $a_1=\\sqrt2$ dan $a_{n+1}=\\sqrt{2+a_n}$ untuk $n\\in\\mathbb N$. Buktikan konvergensi barisan dan tentukan limitnya.",
    "hints": [
      "Buktikan terlebih dahulu 0<a_n<2 dengan induksi.",
      "Bandingkan kuadrat dua suku berturutan.",
      "Gunakan Teorema Konvergensi Monoton dan kontinuitas akar."
    ],
    "idea": "Persamaan titik tetap hanya memberi calon limit. Eksistensi limit perlu dibuktikan terlebih dahulu.",
    "solutions": [
      {
        "title": "Monoton dan terbatas",
        "steps": [
          "Basis induksi memberikan $0<a_1<2$. Jika $0<a_n<2$, maka $0<a_{n+1}=\\sqrt{2+a_n}<2$. Prinsip induksi memberikan batas tersebut untuk setiap $n$.",
          "Karena $a_{n+1}^2-a_n^2=2+a_n-a_n^2=(2-a_n)(a_n+1)>0$ dan kedua suku positif, maka $a_{n+1}>a_n$.",
          "Barisan monoton naik dan terbatas di atas. Berdasarkan Teorema Konvergensi Monoton, terdapat $L=\\lim_n a_n$ dengan $0\\le L\\le2$.",
          "Kontinuitas fungsi akar pada $[2,4]$ memberikan $L=\\sqrt{2+L}$. Kuadratkan untuk memperoleh $(L-2)(L+1)=0$. Karena $L\\ge0$, nilai yang mungkin hanya $L=2$. $\\square$"
        ]
      },
      {
        "title": "Kontraksi galat",
        "steps": [
          "Induksi seperti di atas memberikan $0<a_n<2$. Tuliskan $e_n=2-a_n>0$.",
          "Rasionalisasi memberikan $e_{n+1}=\\frac{2-a_n}{2+\\sqrt{2+a_n}}\\le\\frac12e_n$.",
          "Diperoleh $0\\le e_n\\le2^{1-n}e_1\\to0$ melalui teorema apit. Karena $a_n=2-e_n$, diperoleh $a_n\\to2$."
        ]
      }
    ],
    "proof": {
      "prompt": "Isi langkah yang hilang: dari $a_{n+1}^2-a_n^2>0$, mengapa $a_{n+1}>a_n$?",
      "answer": "Faktorkan sebagai $(a_{n+1}-a_n)(a_{n+1}+a_n)>0$. Karena faktor kedua positif, faktor pertama harus positif."
    },
    "evolution": {
      "prompt": "Untuk $c>0$, definisikan $x_1=\\sqrt c$, $x_{n+1}=\\sqrt{c+x_n}$. Tentukan limitnya.",
      "steps": [
        "Ambil $r=\\frac{1+\\sqrt{1+4c}}2>0$ sehingga $r^2=c+r$. Karena $0<x_1<r$ dan pemetaan akar meningkat, induksi memberikan $0<x_n<r$.",
        "Identitas $x_{n+1}^2-x_n^2=c+x_n-x_n^2=(r-x_n)(x_n+r-1)>0$ karena $r>1$. Barisan naik dan terbatas, sehingga limit $L$ ada.",
        "Kontinuitas menghasilkan $L^2-L-c=0$. Karena $L\\ge0$, $L=r$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "univ-002",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Proyeksi idempoten",
    "prompt": "Misalkan $V$ ruang vektor berdimensi hingga dan $P:V\\to V$ linear dengan $P^2=P$. Buktikan $V=\\ker P\\oplus\\operatorname{Im}P$.",
    "hints": [
      "Uraikan v menjadi Pv dan v−Pv.",
      "Terapkan P pada v−Pv.",
      "Periksa vektor yang berada sekaligus dalam kernel dan image."
    ],
    "idea": "Idempotensi membuat P bertindak sebagai identitas pada citranya; selisih dari proyeksi masuk kernel.",
    "solutions": [
      {
        "title": "Dekomposisi langsung",
        "steps": [
          "Diambil sebarang $v\\in V$. Tuliskan $v=(v-Pv)+Pv$. Karena $P(v-Pv)=Pv-P^2v=0$, maka $v-Pv\\in\\ker P$, sedangkan $Pv\\in\\operatorname{Im}P$. Dengan demikian $V=\\ker P+\\operatorname{Im}P$.",
          "Diambil sebarang $w\\in\\ker P\\cap\\operatorname{Im}P$. Karena $w\\in\\operatorname{Im}P$, terdapat $u\\in V$ dengan $w=Pu$. Oleh karena itu $Pw=P^2u=Pu=w$.",
          "Di sisi lain, $w\\in\\ker P$ memberi $Pw=0$. Diperoleh $w=0$, sehingga irisan kedua subruang tepat $\\{0\\}$.",
          "Berdasarkan definisi jumlah langsung, $V=\\ker P\\oplus\\operatorname{Im}P$. $\\square$"
        ]
      }
    ],
    "proof": {
      "prompt": "Apakah dekomposisi $V=\\ker P\\oplus\\operatorname{Im}P$ selalu berlaku jika syarat $P^2=P$ dihapus? Berikan contoh tandingan.",
      "answer": "Ambil $V=\\mathbb R^2$ dan $P(x,y)=(y,0)$. Pemetaan ini linear, tetapi $P^2=0\\ne P$. Diperoleh $\\ker P=\\operatorname{Im}P=\\{(x,0)\\mid x\\in\\mathbb R\\}$, sehingga irisannya tidak trivial dan jumlahnya bukan seluruh $V$. Jadi dekomposisi langsung tersebut tidak selalu berlaku tanpa idempotensi."
    },
    "evolution": {
      "prompt": "Jika $V=U\\oplus W$, konstruksikan proyeksi $P$ dengan $\\operatorname{Im}P=U$ dan $\\ker P=W$.",
      "steps": [
        "Setiap $v\\in V$ memiliki representasi unik $v=u+w$, dengan $u\\in U,w\\in W$. Definisikan $P(v)=u$.",
        "Keunikan dekomposisi memastikan definisi sah dan linearitas mengikuti penjumlahan serta perkalian skalar komponen. Karena $P(u)=u$ untuk $u\\in U$, berlaku $P^2=P$.",
        "Setiap $u\\in U$ adalah citra dirinya, sedangkan $P(v)=0$ tepat ketika komponen $U$ nol. Jadi citra $U$ dan kernel $W$."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "univ-003",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup berindeks dua",
    "prompt": "Misalkan $H$ subgrup dari grup $G$ dengan $[G:H]=2$. Buktikan bahwa $H$ merupakan subgrup normal dari $G$.",
    "hints": [
      "Pisahkan kasus g∈H dan g∉H.",
      "Jika g∉H, koset kiri gH adalah komplemen H.",
      "Jumlah koset kanan juga dua; bandingkan Hg dengan gH."
    ],
    "idea": "Indeks dua memaksa setiap koset bukan-identitas menjadi himpunan komplemen yang sama.",
    "solutions": [
      {
        "title": "Membandingkan koset",
        "steps": [
          "Diambil sebarang $g\\in G$. Jika $g\\in H$, ketertutupan subgrup memberikan $gH=H=Hg$.",
          "Jika $g\\notin H$, koset kiri $gH$ berbeda dari $H$. Koset kiri mempartisi $G$ dan hanya terdapat dua koset, sehingga $gH=G\\setminus H$.",
          "Pemetaan invers $xH\\mapsto Hx^{-1}$ memberikan bijeksi antara koset kiri dan kanan. Karena indeks kiri dua, jumlah koset kanan juga dua. Maka $Hg=G\\setminus H$.",
          "Kedua kasus menghasilkan $gH=Hg$ untuk setiap $g\\in G$. Berdasarkan karakterisasi normalitas, $H\\trianglelefteq G$. $\\square$"
        ]
      }
    ],
    "proof": {
      "prompt": "Mengapa $gH=H$ mengakibatkan $g\\in H$?",
      "answer": "Karena identitas $e\\in H$, berlaku $g=ge\\in gH=H$."
    },
    "evolution": {
      "prompt": "Apakah setiap subgrup berindeks tiga harus normal? Berikan contoh tandingan.",
      "steps": [
        "Ambil $G=S_3$ dan $H=\\{e,(12)\\}$. Karena $|G|=6$ dan $|H|=2$, indeksnya 3.",
        "Untuk $g=(123)$, berlaku $g(12)g^{-1}=(23)\\notin H$. Jadi $gHg^{-1}\\ne H$, sehingga $H$ tidak normal."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "univ-004",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Akar kesatuan",
    "prompt": "Misalkan $\\omega=e^{2\\pi i/n}$ dengan $n\\ge2$. Buktikan $\\sum_{k=0}^{n-1}\\omega^k=0$.",
    "hints": [
      "Perhatikan ω^n=1 tetapi ω≠1.",
      "Kalikan jumlah dengan 1−ω.",
      "Gunakan pembatalan deret geometri hingga."
    ],
    "idea": "Akar kesatuan dapat dipahami dengan identitas aljabar deret geometri maupun simetri rotasi.",
    "solutions": [
      {
        "title": "Deret geometri",
        "steps": [
          "Karena $\\omega^n=1$ dan $\\omega\\ne1$, misalkan $S=1+\\omega+\\cdots+\\omega^{n-1}$.",
          "Diperoleh $(1-\\omega)S=1-\\omega^n=0$ dengan mengurangkan $\\omega S$ dari $S$.",
          "Karena $1-\\omega\\ne0$ di medan $\\mathbb C$, maka $S=0$. $\\square$"
        ]
      },
      {
        "title": "Invariansi rotasi",
        "steps": [
          "Perkalian dengan $\\omega$ memutasikan akar kesatuan: $\\omega\\cdot\\omega^k=\\omega^{k+1}$, dengan $\\omega^n=1$.",
          "Oleh karena itu $\\omega S=S$, atau $(\\omega-1)S=0$. Karena $\\omega\\ne1$, diperoleh $S=0$."
        ]
      }
    ],
    "proof": {
      "prompt": "Mengapa $\\omega\\ne1$ jika $n\\ge2$?",
      "answer": "Sudut $2\\pi/n$ berada dalam interval $(0,2\\pi)$ dan bukan kelipatan $2\\pi$. Jadi eksponensial kompleksnya tidak sama dengan 1."
    },
    "evolution": {
      "prompt": "Untuk $m\\in\\mathbb Z$, hitung $\\sum_{k=0}^{n-1}\\omega^{mk}$.",
      "steps": [
        "Jika $n\\mid m$, maka $\\omega^m=1$ sehingga semua suku bernilai 1 dan jumlahnya $n$.",
        "Jika $n\\nmid m$, maka $\\omega^m\\ne1$ tetapi $(\\omega^m)^n=1$. Deret geometri memberikan jumlah 0."
      ]
    },
    "source": {
      "kind": "original",
      "label": "DMath Learning — latihan mandiri (disusun untuk DMath)"
    }
  },
  {
    "id": "imo-2019-1",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada bilangan bulat",
    "prompt": "Carilah semua pemetaan $f:\\mathbb Z\\to\\mathbb Z$ yang memenuhi $f(2a)+2f(b)=f(f(a+b))$ untuk setiap $a,b\\in\\mathbb Z$.",
    "hints": [
      "Tetapkan c=f(0) dan substitusikan a=0.",
      "Bandingkan hasil dengan persamaan ketika b=0.",
      "Tunjukkan bahwa g(n)=f(n)−c aditif pada Z."
    ],
    "idea": "Persamaan melibatkan f di dalam f; eliminasi komposisi dengan dua substitusi yang memberikan argumen sama.",
    "solutions": [
      {
        "title": "Reduksi menjadi fungsi aditif",
        "steps": [
          "Misalkan $c=f(0)$. Substitusi $a=0$ memberi $f(f(b))=c+2f(b)$ untuk setiap $b$. Substitusi identitas tersebut ke persamaan awal menghasilkan $f(2a)+2f(b)=c+2f(a+b)$.",
          "Ambil $b=0$ pada persamaan terakhir. Diperoleh $f(2a)+2c=c+2f(a)$, yakni $f(2a)=2f(a)-c$.",
          "Dengan mengganti $f(2a)$, diperoleh $f(a+b)=f(a)+f(b)-c$. Definisikan $g(n)=f(n)-c$. Maka $g(a+b)=g(a)+g(b)$.",
          "Jika $k=g(1)\\in\\mathbb Z$, induksi memberi $g(n)=kn$ bagi $n\\ge1$. Karena $g(0)=0$ dan $g(-n)=-g(n)$, rumus berlaku untuk semua bilangan bulat. Maka $f(n)=kn+c$.",
          "Substitusi bentuk tersebut ke persamaan awal: ruas kiri $2k(a+b)+3c$, ruas kanan $k^2(a+b)+kc+c$. Kesamaan untuk semua $a,b$ memberikan $k^2=2k$ dan $(k-2)c=0$.",
          "Jika $k=0$, diperoleh $c=0$; jika $k=2$, setiap $c\\in\\mathbb Z$ diperbolehkan. Substitusi kembali menunjukkan bahwa $f(n)=0$ dan $f(n)=2n+c$ (dengan $c$ sebarang bilangan bulat) memenuhi persamaan. Dengan demikian tidak ada solusi lain. $\\square$"
        ]
      }
    ],
    "proof": {
      "prompt": "Dari $g(a+b)=g(a)+g(b)$, buktikan rumus $g(n)=ng(1)$ juga untuk bilangan bulat negatif.",
      "answer": "Karena $g(0)=0$ dan $g(n)+g(-n)=g(0)$, berlaku $g(-n)=-g(n)=-ng(1)$ untuk $n>0$."
    },
    "evolution": {
      "prompt": "Untuk bilangan bulat tetap $m\\ge2$, selesaikan $f(ma)+mf(b)=f(f(a+b))$ pada $\\mathbb Z$.",
      "steps": [
        "Dengan $c=f(0)$, substitusi $a=0$ memberi $f(f(b))=c+mf(b)$. Substitusi $b=0$ setelah eliminasi menghasilkan $f(ma)=mf(a)-(m-1)c$.",
        "Diperoleh $m(f(a+b)-f(a)-f(b)+c)=0$. Karena bekerja di $\\mathbb Z$, pembatalan $m$ sah. Maka $f(n)=kn+c$.",
        "Koefisien pada persamaan asal memberikan $k^2=mk$ dan $(k-m)c=0$. Setelah pemeriksaan substitusi, solusi adalah $f\\equiv0$ atau $f(n)=mn+c$ untuk sebarang $c\\in\\mathbb Z$."
      ]
    },
    "source": {
      "kind": "competition",
      "label": "IMO 2019 — Problem 1",
      "competition": "IMO",
      "year": 2019,
      "number": "1",
      "url": "https://www.imo-official.org/problems/2019/eng.pdf",
      "note": "Pernyataan dalam bahasa Indonesia; pembahasan disusun untuk DMath Learning."
    }
  },
  {
    "id": "imc-2024-1",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Dua bilangan pada lingkaran satuan",
    "prompt": "Klasifikasikan seluruh pasangan $a,b\\in\\mathbb C$ dengan $|a|=|b|=1$ dan $a+b+a\\overline b$ bernilai real.",
    "hints": [
      "Untuk bilangan kompleks bermodulus 1, konjugat sama dengan invers.",
      "Suatu bilangan kompleks real tepat ketika sama dengan konjugatnya.",
      "Kalikan persamaan dengan ab lalu faktorkan."
    ],
    "idea": "Syarat real dapat dinyatakan sebagai identitas aljabar tanpa parametrization sudut.",
    "solutions": [
      {
        "title": "Faktorisasi aljabar",
        "steps": [
          "Karena $|a|=|b|=1$, berlaku $\\overline a=1/a$ dan $\\overline b=1/b$. Misalkan $z=a+b+a/b$. Syarat $z\\in\\mathbb R$ ekuivalen dengan $z=\\overline z$.",
          "Dengan substitusi invers, persamaan menjadi $a+b+a/b=1/a+1/b+b/a$. Karena $ab\\ne0$, perkalian dengan $ab$ memberikan $a^2b+ab^2+a^2=b+a+b^2$.",
          "Pindahkan semua suku ke ruas kiri. Diperoleh $(a+b)(ab+a-b-1)=0$, yang sama dengan $(a+b)(a-1)(b+1)=0$.",
          "Karena $\\mathbb C$ merupakan medan, salah satu faktor nol. Jadi $a=-b$, atau $a=1$, atau $b=-1$. Setiap pasangan yang memenuhi salah satu kondisi dan syarat modulus memang memenuhi persamaan awal karena seluruh transformasi ekuivalen. $\\square$"
        ]
      }
    ],
    "proof": {
      "prompt": "Periksa faktor $(a+b)(a-1)(b+1)$ dengan mengembangkannya.",
      "answer": "Karena $(a-1)(b+1)=ab+a-b-1$, produk adalah $a^2b+ab^2+a^2-b^2-a-b$, sesuai persamaan hasil perkalian dengan $ab$."
    },
    "evolution": {
      "prompt": "Jika $|a|=|b|=1$, karakterisasikan pasangan dengan $a+b$ real.",
      "steps": [
        "Syarat real memberi $a+b=1/a+1/b$. Kalikan dengan $ab$ untuk memperoleh $(a+b)(ab-1)=0$.",
        "Dengan demikian $a=-b$ atau $ab=1$, ekuivalen dengan $b=\\overline a$ pada kondisi kedua. Semua solusi memenuhi syarat semula."
      ]
    },
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Day 1, Problem 1",
      "competition": "IMC",
      "year": 2024,
      "number": "Day 1 / 1",
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2024",
      "note": "Pernyataan dalam bahasa Indonesia; pembahasan aljabar disusun untuk DMath Learning."
    }
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan problem solving tingkat universitas.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Soal dan solusi resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
