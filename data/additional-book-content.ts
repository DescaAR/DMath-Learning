import type { BookLessonContent } from "@/data/book-content-types";
import { additionalBookSubjects } from "@/data/additional-book-curricula";

function genericContent(subjectTitle:string,chapterTitle:string,sectionTitle:string,summary:string,keyIdeas:string[]):BookLessonContent{
  const ideas=keyIdeas.join(", ");
  const first=keyIdeas[0] ?? sectionTitle;
  const second=keyIdeas[1] ?? "konsep terkait";
  const third=keyIdeas[2] ?? "struktur pendukung";
  const notation =
    subjectTitle==="Aljabar Linear" ? [
      {symbol:"$V,W$",meaning:"ruang vektor"},
      {symbol:"$\operatorname{span}(S)$",meaning:"span himpunan vektor $S$"},
      {symbol:"$\ker T$",meaning:"kernel transformasi linear $T$"},
      {symbol:"$\operatorname{im}T$",meaning:"image transformasi linear $T$"},
      {symbol:"$\lambda$",meaning:"skalar atau nilai eigen sesuai konteks"},
    ] : subjectTitle==="Struktur Aljabar" ? [
      {symbol:"$(G,*)$",meaning:"grup dengan operasi biner $*$"},
      {symbol:"$H\le G$",meaning:"$H$ subgrup dari $G$"},
      {symbol:"$G/N$",meaning:"grup faktor oleh subgrup normal $N$"},
      {symbol:"$R/I$",meaning:"ring faktor oleh ideal $I$"},
      {symbol:"$\varphi$",meaning:"homomorfisma sesuai konteks"},
    ] : subjectTitle==="Kombinatorika" ? [
      {symbol:"$\binom nk$",meaning:"banyak cara memilih $k$ objek dari $n$ objek"},
      {symbol:"$|A|$",meaning:"kardinalitas himpunan $A$"},
      {symbol:"G=(V,E)",meaning:"graf dengan simpul $V$ dan sisi $E$"},
      {symbol:"$a_n$",meaning:"suku ke-$n$ suatu barisan"},
      {symbol:"$[x^n]F(x)$",meaning:"koefisien $x^n$ pada fungsi pembangkit $F$"},
    ] : [
      {symbol:"$n,k\in\mathbb Z$",meaning:"parameter integer yang digunakan pada konteks diskret"},
      {symbol:"$S$",meaning:"himpunan atau ruang objek yang sedang dipelajari"},
      {symbol:"$|S|$",meaning:"banyak elemen pada $S$"},
      {symbol:"$P$",meaning:"pernyataan, pola, atau struktur sesuai submateri"},
    ];

  return {
    intro:[
      summary,
      "Submateri ini merupakan bagian dari jalur belajar "+subjectTitle+" pada DMath Curriculum. Alurnya dimulai dari motivasi dan contoh kecil, dilanjutkan dengan bahasa formal, lalu digunakan pada pembuktian dan penyelesaian masalah.",
      "Konsep inti yang membentuk peta pembahasan adalah "+ideas+". Setiap konsep dibedakan berdasarkan definisi, syarat, contoh, noncontoh, dan hubungan logisnya dengan konsep lain.",
      "Pembahasan tidak berhenti pada pengenalan istilah. Setiap halaman diarahkan untuk menjawab mengapa konsep diperlukan, bagaimana objek direpresentasikan, hasil apa yang dapat dibuktikan, dan kapan teknik tertentu lebih efisien daripada teknik lain.",
      "Visualisasi digunakan untuk membangun intuisi, sedangkan validitas matematis tetap ditentukan oleh definisi dan pembuktian. Setelah memahami bagian formal, contoh terbahas dan latihan digunakan untuk menguji kemampuan menerapkan konsep pada situasi baru."
    ],
    notation,
    formal:[
      {
        kind:"note",
        title:"Kerangka Konseptual",
        statement:"Istilah utama yang perlu dibedakan secara cermat adalah "+ideas+". Untuk setiap istilah, periksa objek yang dibicarakan, syarat yang wajib dipenuhi, dan konsekuensi yang benar-benar mengikuti definisi."
      },
      {
        kind:"note",
        title:"Arah Penalaran",
        statement:"Hubungan antara "+first+", "+second+", dan "+third+" tidak boleh diasumsikan sebagai ekuivalensi. Setiap arah implikasi harus didukung definisi, teorema, atau konstruksi yang sah."
      },
      {
        kind:"note",
        title:"Strategi Pembuktian",
        statement:"Pembuktian pada submateri ini dapat melibatkan argumen langsung, kontraposisi, kontradiksi, induksi, konstruksi, double counting, invariant, atau reduksi ke hasil sebelumnya sesuai sifat objek."
      },
      {
        kind:"note",
        title:"Pemeriksaan Hasil",
        statement:"Jawaban akhir perlu diperiksa kembali melalui definisi, contoh ekstrem, representasi alternatif, atau substitusi balik agar kesalahan notasi dan asumsi tersembunyi dapat terdeteksi."
      }
    ],
    examples:[
      {
        title:"Membaca Struktur Konsep",
        problem:"Identifikasi peran "+first+" dan "+second+" pada satu situasi sederhana yang relevan dengan "+sectionTitle+". Jelaskan objek yang diketahui, kondisi yang harus diperiksa, dan kesimpulan yang ingin diperoleh.",
        solution:[
          "Ditentukan terlebih dahulu objek matematika dan semesta tempat objek tersebut berada.",
          "Diperiksa definisi "+first+" serta "+second+" yang relevan.",
          "Dihubungkan syarat yang diketahui dengan definisi atau hasil formal yang tersedia.",
          "Dituliskan kesimpulan beserta alasan matematisnya, bukan hanya hasil akhir."
        ],
        conclusion:"Struktur argumen dimulai dari definisi dan hipotesis."
      },
      {
        title:"Contoh dan Noncontoh",
        problem:"Berikan satu contoh yang memenuhi konsep "+first+" dan satu noncontoh yang gagal memenuhi sedikitnya satu syarat penting.",
        solution:[
          "Dipilih objek paling sederhana yang memenuhi seluruh syarat definisi.",
          "Untuk noncontoh, diubah tepat satu syarat agar alasan kegagalannya terlihat jelas.",
          "Dibandingkan kedua objek untuk menentukan syarat yang benar-benar esensial."
        ],
        conclusion:"Contoh dan noncontoh memisahkan syarat inti dari ciri yang hanya kebetulan."
      },
      {
        title:"Dua Representasi",
        problem:"Representasikan konsep "+sectionTitle+" dengan dua cara berbeda, misalnya simbolik dan visual, atau aljabar dan kombinatorial.",
        solution:[
          "Dipilih representasi pertama yang paling langsung dari definisi.",
          "Dibangun representasi kedua yang menonjolkan struktur berbeda.",
          "Dijelaskan informasi apa yang mudah terlihat pada masing-masing representasi.",
          "Diperiksa bahwa kedua representasi menggambarkan objek yang sama."
        ],
        conclusion:"Pergantian representasi sering membuka strategi yang lebih singkat."
      },
      {
        title:"Menyusun Argumen",
        problem:"Susun garis besar pembuktian yang menggunakan sedikitnya dua konsep dari "+ideas+".",
        solution:[
          "Tujuan akhir ditulis dalam bentuk matematis yang jelas.",
          "Dipilih dua konsep yang paling dekat dengan hipotesis.",
          "Dibangun rantai implikasi tanpa melompati syarat.",
          "Kesimpulan akhir dinyatakan kembali sesuai pernyataan yang harus dibuktikan."
        ],
        conclusion:"Kejelasan hubungan antar-konsep lebih penting daripada banyaknya langkah."
      }
    ],
    exercises:[
      {
        prompt:"Tuliskan kembali definisi atau karakterisasi utama yang berkaitan dengan "+first+" menggunakan bahasamu sendiri, lalu nyatakan semua syaratnya secara eksplisit.",
        hint:"Pisahkan objek, hipotesis, dan kesimpulan.",
        answer:"Jawaban yang baik memuat seluruh syarat definisi tanpa menambah asumsi yang tidak diperlukan."
      },
      {
        prompt:"Jelaskan hubungan antara "+first+" dan "+second+". Uji kedua arah implikasi secara terpisah.",
        hint:"Bedakan implikasi, ekuivalensi, dan keterkaitan biasa.",
        answer:"Hubungan harus dinilai dari definisi atau teorema yang sah; jangan menyimpulkan dua arah tanpa dasar."
      },
      {
        prompt:"Bangun satu contoh baru yang memenuhi konsep-konsep utama pada submateri ini dan verifikasi setiap syarat secara berurutan.",
        hint:"Mulai dari objek berukuran kecil atau struktur paling sederhana.",
        answer:"Verifikasi harus merujuk langsung pada syarat definisi."
      },
      {
        prompt:"Bangun satu noncontoh dan tunjukkan tepat di bagian mana definisi gagal.",
        hint:"Ubah satu syarat dari contoh yang valid.",
        answer:"Noncontoh yang baik memperlihatkan mengapa sebuah hipotesis memang diperlukan."
      },
      {
        prompt:"Tuliskan satu kesalahan penalaran yang mungkin terjadi ketika menggunakan "+sectionTitle+" dan jelaskan cara memperbaikinya.",
        hint:"Periksa syarat yang sering diabaikan.",
        answer:"Perbaikan harus menunjukkan syarat yang hilang dan bagaimana syarat tersebut digunakan."
      },
      {
        prompt:"Hubungkan "+sectionTitle+" dengan submateri sebelumnya dan berikutnya dalam satu diagram konsep.",
        hint:"Gunakan "+first+", "+second+", dan "+third+" sebagai simpul awal.",
        answer:"Diagram harus menunjukkan arah ketergantungan konsep, bukan hanya daftar istilah."
      },
      {
        prompt:"Selesaikan satu kasus kecil menggunakan dua metode berbeda dan bandingkan efisiensinya.",
        hint:"Coba pendekatan definisional lalu pendekatan teorema atau representasi alternatif.",
        answer:"Kedua metode harus memberi hasil konsisten dan perbandingan harus menyebut kelebihan masing-masing."
      },
      {
        prompt:"Rancang satu soal menantang yang menggabungkan sedikitnya dua ide dari submateri ini, lalu tuliskan garis besar solusinya.",
        hint:"Gunakan dua ide dari: "+ideas+".",
        answer:"Soal dan garis besar solusi harus dapat diselesaikan dengan materi pada halaman tanpa asumsi tambahan yang tidak dijelaskan."
      }
    ],
    mistakes:[
      "Menghafal nama hasil tanpa memeriksa seluruh hipotesis yang diperlukan.",
      "Menganggap contoh khusus atau gambar sebagai bukti pernyataan umum.",
      "Menggunakan implikasi secara terbalik tanpa teorema yang menjamin ekuivalensi.",
      "Melompati verifikasi definisi ketika membuktikan suatu objek mempunyai sifat tertentu.",
      "Mencampur notasi atau semesta objek sehingga operasi yang digunakan sebenarnya tidak terdefinisi.",
      "Tidak melakukan pemeriksaan akhir melalui contoh, substitusi balik, atau representasi alternatif."
    ],
    connections:[
      "Konsep pada bagian ini digunakan kembali pada submateri berikutnya dalam jalur belajar DMath Learning.",
      "Hubungkan setiap definisi dengan contoh konkret, noncontoh, dan representasi visual.",
      "Bandingkan pendekatan konstruktif, aljabar, kombinatorial, geometris, atau algoritmik ketika lebih dari satu pendekatan tersedia.",
      "Hasil formal pada halaman ini dapat berfungsi sebagai lemma untuk soal atau teorema yang lebih lanjut.",
      "Latihan sintesis dirancang agar pembaca menggabungkan sedikitnya dua konsep, bukan hanya menjalankan prosedur rutin."
    ]
  };
}

const generated:Record<string,BookLessonContent>={};
for(const subject of additionalBookSubjects){
  for(const chapter of subject.chapters){
    for(const section of chapter.sections){
      generated[section.slug]=genericContent(subject.title,chapter.title,section.title,section.summary,section.keyIdeas);
    }
  }
}

generated["komb-perfect-covers"]={
  intro:[
    "Masalah penutupan papan dengan domino merupakan contoh awal bagaimana kombinatorika mempelajari keberadaan suatu konfigurasi, bukan sekadar menghitung banyaknya konfigurasi.",
    "Pada papan $8\\times8$, sebuah domino menutup dua petak yang bertetangga. Pewarnaan hitam–putih memberi invariant sederhana: setiap domino selalu menutup tepat satu petak hitam dan satu petak putih.",
    "Gagasan pewarnaan dapat diperluas dari domino menjadi $b$-omino dengan $b$ warna. Teknik ini memperlihatkan kekuatan invariant dalam membuktikan bahwa suatu konfigurasi mustahil ada."
  ],
  notation:[
    {symbol:"$m\\times n$",meaning:"papan dengan $m$ baris dan $n$ kolom"},
    {symbol:"$b$-omino",meaning:"ubin yang menutup $b$ petak berurutan pada satu baris atau satu kolom"}
  ],
  formal:[
    {
      kind:"definition",
      title:"Perfect Cover",
      statement:"Suatu perfect cover dari papan adalah susunan ubin tanpa tumpang tindih yang menutup setiap petak papan tepat satu kali."
    },
    {
      kind:"proposition",
      title:"Invariant Warna untuk Domino",
      statement:"Jika papan berpola hitam–putih mempunyai perfect cover oleh domino, banyak petak hitam dan putih yang tersisa harus sama.",
      proof:[
        "Diambil sembarang domino pada penutupan. Karena dua petak yang bertetangga mempunyai warna berbeda, domino tersebut menutup satu petak hitam dan satu petak putih.",
        "Setiap domino memberikan kontribusi satu petak untuk masing-masing warna.",
        "Akibatnya, setelah seluruh papan tertutup, jumlah petak hitam yang tertutup sama dengan jumlah petak putih yang tertutup.",
        "Dengan demikian, kesamaan banyak petak kedua warna merupakan syarat perlu untuk adanya perfect cover."
      ]
    },
    {
      kind:"theorem",
      title:"Kriteria Penutupan oleh $b$-omino",
      statement:"Papan $m\\times n$ mempunyai perfect cover oleh $b$-omino jika dan hanya jika $b$ membagi $m$ atau $b$ membagi $n$.",
      proof:[
        "Jika $b\\mid m$, setiap kolom dapat dipartisi menjadi blok vertikal sepanjang $b$. Jika $b\\mid n$, argumen yang sama berlaku secara horizontal.",
        "Untuk arah sebaliknya, andaikan perfect cover ada. Papan diwarnai periodik dengan $b$ warna sehingga setiap $b$-omino menutup satu petak dari setiap warna.",
        "Dituliskan $m=pb+r$ dan $n=qb+s$ dengan $0\\le r,s<b$. Dengan menukar peran $m,n$ jika perlu, diandaikan $r\\le s$.",
        "Bagian berukuran kelipatan $b$ menyumbang setiap warna dalam jumlah sama. Oleh karena itu bagian sisa $r\\times s$ juga harus memiliki jumlah yang sama untuk setiap warna.",
        "Pola pewarnaan memberi tepat $r$ petak untuk setiap warna pada bagian sisa. Banyak petaknya sekaligus adalah $rs$ dan $rb$, sehingga $rs=rb$.",
        "Jika $r\\ne0$, diperoleh $s=b$, bertentangan dengan $s<b$. Jadi $r=0$, sehingga $b\\mid m$."
      ]
    }
  ],
  examples:[
    {
      title:"Papan Catur dengan Dua Sudut Dihapus",
      problem:"Dari papan $8\\times8$ dihapus dua petak sudut yang berseberangan. Dapatkah 31 domino menutup papan yang tersisa?",
      solution:[
        "Dua sudut berseberangan pada papan catur mempunyai warna yang sama.",
        "Setelah keduanya dihapus, tersisa 30 petak dari satu warna dan 32 dari warna lainnya.",
        "Setiap domino selalu menutup satu petak hitam dan satu petak putih.",
        "Sebanyak 31 domino akan menutup 31 petak hitam dan 31 petak putih, bertentangan dengan komposisi warna papan yang tersisa."
      ],
      conclusion:"Perfect cover tidak ada."
    },
    {
      title:"Papan $10\\times15$ dengan 5-omino",
      problem:"Tentukan apakah papan $10\\times15$ dapat ditutup sempurna oleh 5-omino.",
      solution:[
        "Karena $5\\mid10$ dan juga $5\\mid15$, syarat kriteria terpenuhi.",
        "Sebagai konstruksi, papan dapat dipartisi menjadi blok horizontal panjang 5 atau blok vertikal panjang 5."
      ],
      conclusion:"Perfect cover ada."
    }
  ],
  exercises:[
    {prompt:"Dapatkah papan $7\\times12$ ditutup sempurna oleh 3-omino?",hint:"Periksa apakah $3$ membagi salah satu dimensi.",answer:"Ya, karena $3\\mid12$."},
    {prompt:"Dapatkah papan $10\\times14$ ditutup sempurna oleh 6-omino?",hint:"Gunakan kriteria pembagian.",answer:"Tidak, karena $6$ tidak membagi $10$ maupun $14$."},
    {prompt:"Jelaskan mengapa keseimbangan banyak petak hitam dan putih hanyalah syarat perlu, bukan selalu syarat cukup, untuk papan yang telah dipangkas.",hint:"Cari konfigurasi dengan jumlah warna seimbang tetapi geometri menghalangi penutupan.",answer:"Kesamaan jumlah warna hanya menghilangkan satu obstruction. Bentuk dan keterhubungan papan masih dapat mencegah semua petak dipasangkan oleh domino."}
  ],
  mistakes:[
    "Menganggap jumlah petak genap otomatis menjamin adanya penutupan domino.",
    "Menggunakan pewarnaan tanpa memeriksa berapa warna yang ditutup setiap ubin.",
    "Menyimpulkan syarat perlu sebagai syarat cukup tanpa konstruksi atau teorema tambahan."
  ],
  connections:[
    "Invariant pewarnaan merupakan teknik penting dalam problem solving olimpiade.",
    "Masalah tiling berhubungan dengan matching pada graf bipartit.",
    "Gagasan keberadaan konfigurasi muncul kembali pada Hall's theorem dan desain kombinatorial."
  ]
};

generated["la-linear-systems"]={
  intro:[
    "Sistem persamaan linear menghubungkan persamaan, geometri, dan matriks. Persamaan linear dalam $n$ peubah berbentuk $a_1x_1+\\cdots+a_nx_n=b$, dengan koefisien peubah tidak semuanya nol.",
    "Solusi suatu sistem adalah tuple yang membuat setiap persamaan benar secara simultan. Secara geometris, solusi sistem dua peubah merupakan titik perpotongan garis, sedangkan pada tiga peubah berkaitan dengan perpotongan bidang.",
    "Klasifikasi dasar sistem linear adalah konsisten atau tidak konsisten. Sistem konsisten dapat mempunyai tepat satu solusi atau tak hingga banyak solusi."
  ],
  notation:[
    {symbol:"$A\\mathbf{x}=\\mathbf{b}$",meaning:"bentuk matriks suatu sistem linear"},
    {symbol:"$[A\\mid\\mathbf b]$",meaning:"matriks augmented sistem"}
  ],
  formal:[
    {
      kind:"definition",
      title:"Persamaan Linear",
      statement:"Persamaan linear dalam peubah $x_1,\\ldots,x_n$ adalah persamaan $a_1x_1+\\cdots+a_nx_n=b$, dengan $a_1,\\ldots,a_n,b$ konstanta dan koefisien $a_i$ tidak semuanya nol."
    },
    {
      kind:"definition",
      title:"Solusi dan Konsistensi",
      statement:"Solusi sistem linear adalah tuple yang memenuhi semua persamaan. Sistem disebut konsisten jika memiliki sedikitnya satu solusi dan tidak konsisten jika tidak memiliki solusi."
    },
    {
      kind:"theorem",
      title:"Banyak Solusi Sistem Linear",
      statement:"Sistem persamaan linear atas $\\mathbb R$ mempunyai nol, tepat satu, atau tak hingga banyak solusi.",
      proof:[
        "Jika sistem tidak konsisten, banyak solusinya nol.",
        "Andaikan sistem konsisten dan mempunyai dua solusi berbeda $\\mathbf x_0$ dan $\\mathbf x_1$.",
        "Untuk setiap $t\\in\\mathbb R$, linearitas memberi $A((1-t)\\mathbf x_0+t\\mathbf x_1)=(1-t)A\\mathbf x_0+tA\\mathbf x_1=\\mathbf b$.",
        "Karena $\\mathbf x_0\\ne\\mathbf x_1$, nilai $t$ yang berbeda menghasilkan tak hingga banyak solusi.",
        "Dengan demikian, sistem konsisten yang tidak memiliki solusi tunggal mempunyai tak hingga banyak solusi."
      ]
    }
  ],
  examples:[
    {
      title:"Sistem dengan Solusi Tunggal",
      problem:"Selesaikan $x-y=1$ dan $2x+y=6$.",
      solution:[
        "Dari persamaan pertama diperoleh $x=1+y$.",
        "Substitusi ke persamaan kedua memberi $2(1+y)+y=6$.",
        "Diperoleh $3y=4$, sehingga $y=4/3$ dan $x=7/3$."
      ],
      conclusion:"Sistem mempunyai tepat satu solusi, yaitu $(7/3,4/3)$."
    },
    {
      title:"Sistem Tidak Konsisten",
      problem:"Tentukan banyak solusi dari $x+y=4$ dan $3x+3y=6$.",
      solution:[
        "Tiga kali persamaan pertama memberi $3x+3y=12$.",
        "Persamaan kedua menuntut $3x+3y=6$.",
        "Kedua syarat bertentangan."
      ],
      conclusion:"Sistem tidak mempunyai solusi."
    }
  ],
  exercises:[
    {prompt:"Klasifikasikan sistem $x+y=2$ dan $2x+2y=4$.",hint:"Periksa apakah kedua persamaan ekuivalen.",answer:"Persamaan kedua adalah dua kali persamaan pertama, sehingga terdapat tak hingga banyak solusi."},
    {prompt:"Tuliskan matriks augmented dari $2x-y=3$ dan $x+4y=5$.",hint:"Koefisien peubah berada sebelum garis pemisah.",answer:"$\\left[\\begin{array}{cc|c}2&-1&3\\\\1&4&5\\end{array}\\right]$."},
    {prompt:"Buktikan bahwa jika sistem homogen mempunyai solusi nonnol, sistem tersebut mempunyai tak hingga banyak solusi.",hint:"Kalikan solusi nonnol dengan skalar.",answer:"Jika $A\\mathbf x=0$ dan $\\mathbf x\\ne0$, maka $A(t\\mathbf x)=tA\\mathbf x=0$ untuk setiap $t\\in\\mathbb R$; pilihan $t$ yang berbeda memberi tak hingga banyak solusi."}
  ],
  mistakes:[
    "Menganggap setiap sistem persegi mempunyai solusi tunggal.",
    "Melakukan operasi pada satu ruas persamaan tanpa operasi ekuivalen pada ruas lainnya.",
    "Menyamakan matriks koefisien dengan matriks augmented."
  ],
  connections:[
    "Eliminasi Gauss mengubah sistem menjadi bentuk yang lebih mudah dibaca tanpa mengubah himpunan solusi.",
    "Konsep konsistensi terhubung dengan rank, ruang kolom, dan invertibilitas.",
    "Interpretasi geometris berkembang menjadi subruang dan transformasi linear."
  ]
};

generated["alg-sets"]={
  intro:[
    "Struktur aljabar dibangun di atas bahasa himpunan, relasi, dan fungsi. Karena itu operasi himpunan dan produk Kartesius perlu dipahami secara presisi sebelum masuk ke grup, ring, dan field.",
    "Himpunan dapat berupa himpunan bilangan maupun objek lain. Hubungan inklusi, irisan, gabungan, selisih, dan produk Kartesius akan digunakan berulang kali untuk membentuk struktur baru.",
    "Produk Kartesius sangat penting karena relasi didefinisikan sebagai subset dari suatu produk Kartesius, sedangkan operasi biner pada struktur aljabar adalah fungsi dari $S\\times S$ ke $S$."
  ],
  notation:[
    {symbol:"$S\\subseteq T$",meaning:"$S$ merupakan subset dari $T$"},
    {symbol:"$S\\cap T$",meaning:"irisan $S$ dan $T$"},
    {symbol:"$S\\cup T$",meaning:"gabungan $S$ dan $T$"},
    {symbol:"$S\\setminus T$",meaning:"selisih himpunan"},
    {symbol:"$S\\times T$",meaning:"produk Kartesius"}
  ],
  formal:[
    {
      kind:"definition",
      title:"Subset",
      statement:"Untuk himpunan $S$ dan $T$, ditulis $S\\subseteq T$ jika setiap elemen $S$ juga merupakan elemen $T$."
    },
    {
      kind:"definition",
      title:"Irisan, Gabungan, dan Selisih",
      statement:"$S\\cap T$ berisi elemen yang berada di $S$ dan $T$; $S\\cup T$ berisi elemen yang berada di sedikitnya salah satu; $S\\setminus T$ berisi elemen $S$ yang tidak berada di $T$."
    },
    {
      kind:"definition",
      title:"Produk Kartesius",
      statement:"Produk Kartesius $S\\times T$ adalah himpunan semua pasangan terurut $(s,t)$ dengan $s\\in S$ dan $t\\in T$."
    },
    {
      kind:"proposition",
      title:"Distributivitas Gabungan terhadap Irisan",
      statement:"Untuk sebarang himpunan $R,S,T$, berlaku $R\\cup(S\\cap T)=(R\\cup S)\\cap(R\\cup T)$.",
      proof:[
        "Diambil sebarang $x\\in R\\cup(S\\cap T)$. Jika $x\\in R$, maka $x$ berada di kedua himpunan $R\\cup S$ dan $R\\cup T$. Jika $x\\in S\\cap T$, hasil yang sama juga berlaku.",
        "Akibatnya, $R\\cup(S\\cap T)\\subseteq(R\\cup S)\\cap(R\\cup T)$.",
        "Sebaliknya, diambil $x\\in(R\\cup S)\\cap(R\\cup T)$. Jika $x\\in R$, selesai. Jika $x\\notin R$, keanggotaan pada kedua gabungan memaksa $x\\in S$ dan $x\\in T$.",
        "Dengan demikian, $x\\in R\\cup(S\\cap T)$ dan kedua himpunan sama."
      ]
    }
  ],
  examples:[
    {
      title:"Operasi Dua Himpunan",
      problem:"Untuk $S=\\{1,2,3,4,5\\}$ dan $T=\\{2,4,6,8,10\\}$, tentukan $S\\cap T$, $S\\cup T$, dan $S\\setminus T$.",
      solution:[
        "Elemen yang muncul pada keduanya adalah 2 dan 4.",
        "Gabungan memuat semua elemen yang muncul sedikitnya sekali.",
        "Elemen $S$ yang tidak berada di $T$ adalah 1, 3, dan 5."
      ],
      conclusion:"$S\\cap T=\\{2,4\\}$, $S\\cup T=\\{1,2,3,4,5,6,8,10\\}$, dan $S\\setminus T=\\{1,3,5\\}$."
    },
    {
      title:"Produk Kartesius",
      problem:"Jika $S=\\{1,2,3\\}$ dan $T=\\{2,3\\}$, tuliskan $S\\times T$.",
      solution:[
        "Setiap elemen $S$ dipasangkan dengan setiap elemen $T$.",
        "Urutan pasangan diperhatikan; koordinat pertama berasal dari $S$ dan koordinat kedua dari $T$."
      ],
      conclusion:"$S\\times T=\\{(1,2),(1,3),(2,2),(2,3),(3,2),(3,3)\\}$."
    }
  ],
  exercises:[
    {prompt:"Jika $S=\\{1,2,3\\}$ dan $T=\\{3,4\\}$, tentukan $S\\cap T$, $S\\cup T$, $S\\setminus T$, dan $T\\setminus S$.",hint:"Periksa keanggotaan setiap elemen.",answer:"$S\\cap T=\\{3\\}$, $S\\cup T=\\{1,2,3,4\\}$, $S\\setminus T=\\{1,2\\}$, $T\\setminus S=\\{4\\}$."},
    {prompt:"Buktikan jika $R\\subseteq S$, maka $R\\cup T\\subseteq S\\cup T$.",hint:"Ambil sebarang elemen dari $R\\cup T$ dan pisahkan dua kasus.",answer:"Jika elemen berada di $R$, ia berada di $S$; jika berada di $T$, ia langsung berada di $S\\cup T$. Jadi inklusi berlaku."},
    {prompt:"Berapa banyak elemen $S\\times T$ jika $|S|=m$ dan $|T|=n$?",hint:"Untuk setiap elemen $S$ ada $n$ pilihan koordinat kedua.",answer:"$|S\\times T|=mn$."}
  ],
  mistakes:[
    "Menganggap $S\\in T$ sama dengan $S\\subseteq T$.",
    "Mengabaikan urutan pada pasangan terurut dalam produk Kartesius.",
    "Menganggap $S\\setminus T$ sama dengan $T\\setminus S$."
  ],
  connections:[
    "Relasi dari $S$ ke $T$ adalah subset dari $S\\times T$.",
    "Fungsi merupakan relasi dengan syarat keunikan pasangan pada setiap elemen domain.",
    "Koset, kelas ekuivalensi, quotient group, dan quotient ring semuanya menggunakan bahasa himpunan."
  ]
};

export const additionalBookContent=generated;
