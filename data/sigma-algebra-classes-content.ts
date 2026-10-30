import type { BookLessonContent } from "@/data/book-content-types";

/** Finite sigma-algebras, generating classes and a complete pi-lambda proof. */
export const sigmaAlgebraClassesContent: BookLessonContent = {
  "intro": [
    "Sigma-aljabar bukan sekadar kumpulan himpunan yang terlihat wajar. Pada ruang sampel X, kita hanya dapat memberikan ukuran atau probabilitas secara konsisten kepada kejadian yang berada dalam suatu sigma-aljabar. Syarat gabungan terhitung diperlukan, misalnya ketika kejadian limit dinyatakan sebagai irisan atau gabungan tak hingga. Pada himpunan hingga, sifat ini dapat diperiksa lewat blok-blok partisi, tetapi pemeriksaan beberapa gabungan berhingga tidak cukup pada ruang tak hingga.",
    "Sebagai contoh, partisi X={1,2,3,4} menjadi dua blok {1,2} dan {3,4} hanya dapat membedakan dua kelompok tersebut. Sigma-aljabar yang dibangkitkannya mempunyai empat anggota, bukan semua 16 subset X. Menambahkan informasi mengenai apakah elemen berada di {1,3} akan memecah kedua blok menjadi empat singleton, sehingga sigma-aljabar hasilnya menjadi seluruh himpunan kuasa. Konstruksi ini menjelaskan makna sigma-aljabar yang dibangkitkan oleh observasi.",
    "Sistem pi menekankan ketertutupan terhadap irisan, sedangkan sistem lambda menekankan selisih bertingkat dan gabungan terhitung saling lepas. Kedua struktur ini tidak sama dengan sigma-aljabar. Teorema pi–lambda menghubungkan keduanya dan menjadi dasar pembuktian ketunggalan ukuran: kesamaan pada kelas pembangkit yang tepat dapat diperluas ke semua kejadian terukur. Pada halaman ini setiap penggunaan teorema menyebutkan kelas pembangkit serta hipotesisnya.",
    "Rujukan: Bogachev, Measure Theory, Vol. I (2007), bagian kelas himpunan dan ukuran; Durrett, Probability: Theory and Examples, edisi ke-5 (2019), bagian sistem pi–lambda. Semua pernyataan elementer di bawah dibuktikan langsung dari aksioma yang dinyatakan."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Sigma-Aljabar pada Ruang X",
      "statement": "Untuk himpunan tak kosong X, keluarga \\mathcal A\\subseteq 2^X disebut sigma-aljabar apabila (i) X\\in\\mathcal A; (ii) A\\in\\mathcal A mengakibatkan X\\setminus A\\in\\mathcal A; dan (iii) untuk setiap barisan (A_n)_{n\\ge1} dalam \\mathcal A, berlaku \\bigcup_{n=1}^{\\infty}A_n\\in\\mathcal A. Komplemen selalu relatif terhadap X. Dari (i)–(ii) diperoleh \\varnothing\\in\\mathcal A.",
      "explanation": "Syarat ketiga mencakup gabungan berhingga melalui pengulangan himpunan kosong. Sebuah aljabar yang hanya tertutup terhadap gabungan berhingga belum tentu sigma-aljabar."
    },
    {
      "kind": "definition",
      "title": "Sigma-Aljabar yang Dibangkitkan",
      "statement": "Untuk keluarga \\mathcal C\\subseteq 2^X, definisikan \\sigma(\\mathcal C)=\\bigcap\\{\\mathcal A:\\mathcal A\\text{ sigma-aljabar pada }X,\\ \\mathcal C\\subseteq\\mathcal A\\}. Keluarga yang diiriskan tidak kosong karena 2^X selalu merupakan sigma-aljabar. Jadi \\sigma(\\mathcal C) adalah sigma-aljabar terkecil yang memuat \\mathcal C.",
      "explanation": "Dibangkitkan berarti menambahkan hanya himpunan yang dipaksa oleh operasi komplemen dan gabungan terhitung, bukan otomatis seluruh himpunan kuasa."
    },
    {
      "kind": "definition",
      "title": "Sistem Pi",
      "statement": "Keluarga tak kosong \\mathcal P\\subseteq 2^X disebut sistem \\pi apabila A\\cap B\\in\\mathcal P untuk setiap A,B\\in\\mathcal P. Dengan induksi, \\mathcal P tertutup terhadap semua irisan berhingga. Sistem \\pi tidak diwajibkan tertutup terhadap komplemen maupun gabungan.",
      "explanation": "Kelas interval setengah-terbuka yang sesuai sering membentuk sistem pi, sehingga kesamaan dua ukuran dapat diperiksa pada kelas yang lebih kecil."
    },
    {
      "kind": "definition",
      "title": "Sistem Lambda atau Sistem Dynkin",
      "statement": "Keluarga \\mathcal L\\subseteq2^X disebut sistem \\lambda apabila (i) X\\in\\mathcal L; (ii) A,B\\in\\mathcal L dan A\\subseteq B mengakibatkan B\\setminus A\\in\\mathcal L; dan (iii) jika (A_n)_{n\\ge1}\\subseteq\\mathcal L saling lepas, maka \\bigcup_{n\\ge1}A_n\\in\\mathcal L. Syarat (ii) bersama X\\in\\mathcal L memberi ketertutupan terhadap komplemen.",
      "explanation": "Sistem lambda mengizinkan gabungan terhitung hanya untuk keluarga saling lepas; tanpa sifat irisan, ia belum tentu sigma-aljabar."
    },
    {
      "kind": "proposition",
      "title": "Ketertutupan Sigma-Aljabar terhadap Irisan Terhitung",
      "statement": "Jika \\mathcal A sigma-aljabar pada X dan A_n\\in\\mathcal A untuk setiap n\\ge1, maka \\bigcap_{n=1}^{\\infty}A_n\\in\\mathcal A. Selain itu, A\\setminus B\\in\\mathcal A untuk setiap A,B\\in\\mathcal A.",
      "proof": [
        "Diketahui \\mathcal A memenuhi aksioma sigma-aljabar. Diambil sebarang barisan (A_n) dengan A_n\\in\\mathcal A. Ketertutupan terhadap komplemen memberikan A_n^c=X\\setminus A_n\\in\\mathcal A untuk setiap n.",
        "Aksioma gabungan terhitung memberikan U=\\bigcup_{n=1}^{\\infty}A_n^c\\in\\mathcal A. Dengan hukum De Morgan, U^c=\\bigcap_{n=1}^{\\infty}A_n. Karena \\mathcal A tertutup terhadap komplemen, irisan tersebut berada dalam \\mathcal A.",
        "Selanjutnya, untuk A,B\\in\\mathcal A, berlaku A\\setminus B=A\\cap B^c. Komplemen B^c berada dalam \\mathcal A, dan ketertutupan terhadap irisan dua himpunan mengikuti hasil pertama dengan mengulang X pada indeks berikutnya. Dengan demikian kedua klaim terbukti. \\square"
      ],
      "explanation": "Bukti ini menggunakan ketertutupan gabungan terhitung, bukan hanya gabungan berhingga."
    },
    {
      "kind": "proposition",
      "title": "Irisan Keluarga Sigma-Aljabar",
      "statement": "Jika (\\mathcal A_i)_{i\\in I} adalah keluarga tak kosong sigma-aljabar pada X, maka \\mathcal A=\\bigcap_{i\\in I}\\mathcal A_i juga sigma-aljabar. Akibatnya, definisi \\sigma(\\mathcal C) benar-benar menghasilkan sigma-aljabar terkecil yang memuat \\mathcal C.",
      "proof": [
        "Diketahui setiap \\mathcal A_i sigma-aljabar pada semesta X yang sama. Karena X\\in\\mathcal A_i untuk semua i, maka X\\in\\bigcap_{i\\in I}\\mathcal A_i.",
        "Diambil A\\in\\mathcal A. Artinya A\\in\\mathcal A_i untuk setiap i. Masing-masing \\mathcal A_i tertutup terhadap komplemen, sehingga A^c\\in\\mathcal A_i untuk semua i; jadi A^c\\in\\mathcal A. Jika A_n\\in\\mathcal A untuk seluruh n, maka setiap \\mathcal A_i memuat semua A_n dan karenanya memuat \\bigcup_n A_n. Gabungan itu pun berada dalam \\mathcal A.",
        "Ketiga aksioma terpenuhi. Khusus untuk keluarga semua sigma-aljabar yang memuat \\mathcal C, keluarga ini tidak kosong karena 2^X termasuk di dalamnya. Irisannya merupakan sigma-aljabar yang memuat \\mathcal C dan terkandung dalam setiap sigma-aljabar lain yang memuat \\mathcal C. Dengan demikian sifat minimal dan keberadaannya terbukti. \\square"
      ],
      "explanation": "Gabungan dua sigma-aljabar tidak harus sigma-aljabar; konstruksi pembangkit menggunakan irisan, bukan gabungan."
    },
    {
      "kind": "theorem",
      "title": "Sigma-Aljabar dari Partisi Hingga",
      "statement": "Misalkan B_1,\\ldots,B_m adalah himpunan tak kosong, saling lepas, dengan \\bigcup_{i=1}^m B_i=X. Maka \\sigma(\\{B_1,\\ldots,B_m\\})=\\{\\bigcup_{i\\in J}B_i:J\\subseteq\\{1,\\ldots,m\\}\\}. Keluarga tersebut mempunyai tepat 2^m anggota.",
      "proof": [
        "Diketahui (B_i) membentuk partisi hingga X. Definisikan \\mathcal U sebagai keluarga semua gabungan blok dengan indeks J\\subseteq\\{1,\\ldots,m\\}. Pilihan J=\\varnothing menghasilkan \\varnothing, sedangkan J seluruh indeks menghasilkan X.",
        "Jika A=\\bigcup_{i\\in J}B_i, maka karena blok saling lepas dan menutupi X, komplemennya adalah X\\setminus A=\\bigcup_{i\\notin J}B_i\\in\\mathcal U. Untuk barisan A_n=\\bigcup_{i\\in J_n}B_i, berlaku \\bigcup_n A_n=\\bigcup_{i\\in\\bigcup_nJ_n}B_i\\in\\mathcal U; gabungan indeks tetap subset himpunan hingga \\{1,\\ldots,m\\}. Jadi \\mathcal U sigma-aljabar yang memuat seluruh blok, sehingga \\sigma(\\{B_i\\})\\subseteq\\mathcal U.",
        "Sebaliknya, setiap sigma-aljabar yang memuat semua B_i tertutup terhadap gabungan berhingga dan memuat \\varnothing. Karena itu ia memuat setiap gabungan blok, yakni seluruh \\mathcal U. Secara khusus \\mathcal U\\subseteq\\sigma(\\{B_i\\}). Kedua inklusi memberikan kesamaan. Untuk J\\ne K, terdapat indeks i yang berada tepat di salah satunya; karena B_i tak kosong dan saling lepas, gabungan yang bersangkutan berbeda. Ada 2^m pilihan J, sehingga jumlah anggotanya tepat 2^m. \\square"
      ],
      "explanation": "Jika blok kosong diperbolehkan, perhitungan 2^m dapat menghitung himpunan yang sama berulang; syarat tak kosong diperlukan."
    },
    {
      "kind": "theorem",
      "title": "Atom Sigma-Aljabar Hingga",
      "statement": "Jika X himpunan hingga dan \\mathcal A sigma-aljabar pada X, maka terdapat partisi unik X oleh atom-atom \\mathcal A, yaitu anggota tak kosong minimal terhadap inklusi. Setiap A\\in\\mathcal A adalah gabungan atom, dan \\mathcal A tepat keluarga semua gabungan atom tersebut.",
      "proof": [
        "Diketahui X hingga, sehingga 2^X hingga dan \\mathcal A juga hingga. Untuk setiap x\\in X, definisikan C_x=\\bigcap\\{A\\in\\mathcal A:x\\in A\\}. Keluarga yang diiriskan tidak kosong karena X\\in\\mathcal A, dan irisannya hingga; akibatnya C_x\\in\\mathcal A serta x\\in C_x.",
        "Jika y\\in C_x dan A\\in\\mathcal A, maka x\\in A mengakibatkan y\\in A. Jika x\\notin A, maka x\\in A^c\\in\\mathcal A, sehingga y\\in A^c dan y\\notin A. Jadi x dan y mempunyai keanggotaan sama pada setiap A\\in\\mathcal A. Akibatnya C_y=C_x. Dua himpunan C_x dan C_z yang beririsan karena itu harus sama; keluarga C_x yang berbeda membentuk partisi X.",
        "Ambil D\\in\\mathcal A dengan \\varnothing\\ne D\\subseteq C_x. Pilih y\\in D. Karena y\\in C_x, berlaku C_y=C_x. Tetapi D memuat y, sehingga dari definisi irisan C_y\\subseteq D. Jadi D=C_x; setiap C_x merupakan atom. Untuk setiap A\\in\\mathcal A dan x\\in A, definisi memberi C_x\\subseteq A, sehingga A adalah gabungan atom yang terkandung di dalamnya.",
        "Sebaliknya, setiap gabungan atom berada dalam \\mathcal A karena jumlah atom hingga dan \\mathcal A tertutup terhadap gabungan berhingga. Jadi \\mathcal A tepat semua gabungan atom. Partisi atom unik karena setiap atom yang memuat x harus sama dengan C_x menurut minimalitas. Dengan demikian semua pernyataan terbukti. \\square"
      ],
      "explanation": "Teorema ini memerlukan X hingga. Pada ruang tak hingga, irisan semua himpunan terukur yang memuat x tidak selalu terukur."
    },
    {
      "kind": "theorem",
      "title": "Teorema Pi–Lambda",
      "statement": "Misalkan \\mathcal P\\subseteq2^X sistem \\pi tak kosong, dan \\lambda(\\mathcal P) sistem \\lambda terkecil yang memuat \\mathcal P. Maka \\lambda(\\mathcal P)=\\sigma(\\mathcal P). Dengan kata lain, setiap sistem \\lambda yang memuat \\mathcal P juga memuat \\sigma(\\mathcal P).",
      "proof": [
        "Diketahui \\mathcal P sistem \\pi. Sistem \\lambda terkecil D=\\lambda(\\mathcal P) ada karena irisan semua sistem \\lambda yang memuat \\mathcal P tetap sistem \\lambda (verifikasi ketiga aksioma dilakukan anggota demi anggota). Setiap sigma-aljabar adalah sistem \\lambda, sehingga D\\subseteq\\sigma(\\mathcal P). Kita membuktikan inklusi sebaliknya dengan menunjukkan bahwa D tertutup terhadap irisan.",
        "Tetapkan A\\in\\mathcal P dan definisikan D_A=\\{B\\in D:A\\cap B\\in D\\}. Karena A\\in D, diperoleh X\\in D_A. Jika B,C\\in D_A dengan C\\subseteq B, maka A\\cap(B\\setminus C)=(A\\cap B)\\setminus(A\\cap C)\\in D oleh aksioma selisih bertingkat pada D. Jika B_n\\in D_A saling lepas, himpunan A\\cap B_n juga saling lepas dan A\\cap\\bigcup_nB_n=\\bigcup_n(A\\cap B_n)\\in D. Jadi D_A adalah sistem \\lambda.",
        "Untuk setiap B\\in\\mathcal P, sifat sistem \\pi memberi A\\cap B\\in\\mathcal P\\subseteq D. Maka \\mathcal P\\subseteq D_A, sehingga minimalitas D memberi D\\subseteq D_A. Artinya A\\cap B\\in D untuk semua A\\in\\mathcal P dan B\\in D.",
        "Sekarang tetapkan B\\in D dan definisikan E_B=\\{A\\in D:A\\cap B\\in D\\}. Dengan argumen sama, E_B adalah sistem \\lambda; langkah sebelumnya memastikan \\mathcal P\\subseteq E_B. Minimalitas D kembali memberi D\\subseteq E_B. Jadi D tertutup terhadap irisan dua anggota sebarang.",
        "Karena D sistem \\lambda, ia memuat X dan tertutup terhadap komplemen X\\setminus A. Karena kini juga tertutup terhadap irisan, hukum De Morgan memberi ketertutupan terhadap gabungan berhingga. Untuk barisan A_n\\in D, bentuk B_1=A_1 dan B_n=A_n\\setminus\\bigcup_{j<n}A_j untuk n\\ge2. Setiap B_n berada dalam D, saling lepas, dan \\bigcup_nB_n=\\bigcup_nA_n. Aksioma gabungan terhitung saling lepas pada D memberi \\bigcup_nA_n\\in D. Maka D sigma-aljabar yang memuat \\mathcal P, sehingga \\sigma(\\mathcal P)\\subseteq D. Bersama inklusi pertama diperoleh D=\\sigma(\\mathcal P). \\square"
      ],
      "explanation": "Syarat sistem pi pada kelas pembangkit tidak boleh dihapus; sistem lambda secara umum tidak tertutup terhadap irisan."
    }
  ],
  "examples": [
    {
      "title": "Sigma-Algebra pada Himpunan Tiga Elemen",
      "forDefinition": "Sigma-Aljabar pada Ruang X",
      "problem": "Pada X=\\{1,2,3\\}, periksa apakah \\mathcal A=\\{\\varnothing,\\{1\\},\\{2,3\\},X\\} merupakan sigma-aljabar.",
      "solution": [
        "Diketahui X=\\{1,2,3\\} dan empat anggota \\mathcal A. Yang diperiksa adalah ketiga aksioma sigma-aljabar, termasuk gabungan terhitung, bukan hanya beberapa contoh gabungan dua himpunan.",
        "Himpunan X memang anggota \\mathcal A. Komplementasi relatif X menukar \\varnothing dengan X serta menukar \\{1\\} dengan \\{2,3\\}; jadi tidak ada komplemen yang keluar dari keluarga.",
        "Setiap anggota \\mathcal A adalah gabungan dari dua blok saling lepas B_1=\\{1\\}, B_2=\\{2,3\\}. Untuk barisan anggota sebarang, gabungannya hanya dapat berupa \\varnothing, B_1, B_2, atau X, sebab masing-masing blok muncul seluruhnya atau tidak muncul sama sekali. Keempat kemungkinan tetap anggota \\mathcal A.",
        "Dengan demikian \\mathcal A sigma-aljabar. Sebagai pemeriksaan batas, \\{2\\}\\notin\\mathcal A; jadi sigma-aljabar tidak harus sama dengan 2^X."
      ],
      "conclusion": "Keempat himpunan tersebut membentuk sigma-aljabar, tetapi tidak membedakan 2 dari 3."
    },
    {
      "title": "Pembangkit dari Satu Kejadian",
      "forDefinition": "Sigma-Aljabar yang Dibangkitkan",
      "problem": "Pada X=\\{a,b,c,d\\}, hitung \\sigma(\\{\\{a,b\\}\\}) dan buktikan minimalitasnya.",
      "solution": [
        "Diketahui A=\\{a,b\\}\\subseteq X. Sigma-aljabar yang memuat A harus memuat komplemennya A^c=\\{c,d\\}, juga X dan \\varnothing. Jadi paling sedikit empat himpunan itu wajib ada.",
        "Keluarga \\mathcal U=\\{\\varnothing,A,A^c,X\\} tertutup terhadap komplemen. Gabungan terhitung anggota \\mathcal U hanya mungkin salah satu dari empat anggota tersebut, karena A dan A^c adalah dua blok yang saling lepas.",
        "Karena \\mathcal U sendiri sigma-aljabar yang memuat A, minimalitas pembangkit memberi \\sigma(\\{A\\})\\subseteq\\mathcal U. Sebaliknya setiap sigma-aljabar yang memuat A harus memuat keempat anggota \\mathcal U, sehingga \\mathcal U\\subseteq\\sigma(\\{A\\})."
      ],
      "conclusion": "\\sigma(\\{\\{a,b\\}\\})=\\{\\varnothing,\\{a,b\\},\\{c,d\\},X\\}, bukan 2^X."
    },
    {
      "title": "Sistem Pi yang Bukan Sigma-Aljabar",
      "forDefinition": "Sistem Pi",
      "problem": "Untuk X=\\{1,2,3\\}, tentukan apakah \\mathcal P=\\{X,\\{1,2\\},\\{1\\}\\} sistem pi dan apakah ia sigma-aljabar.",
      "solution": [
        "Diketahui tiga himpunan bersarang \\{1\\}\\subseteq\\{1,2\\}\\subseteq X. Irisan dua anggota selalu sama dengan anggota yang lebih kecil, sehingga setiap irisan kembali berada dalam \\mathcal P. Karena \\mathcal P tidak kosong, syarat sistem pi dipenuhi.",
        "Namun komplemen \\{1\\} relatif X adalah \\{2,3\\}, yang tidak termasuk \\mathcal P. Maka aksioma komplemen sigma-aljabar gagal. Keberadaan X saja tidak cukup untuk menjadikannya sigma-aljabar.",
        "Lebih lanjut, sigma-aljabar yang dibangkitkan \\mathcal P memuat \\{2\\}=\\{1,2\\}\\setminus\\{1\\} dan \\{3\\}=X\\setminus\\{1,2\\}. Ketiga singleton terukur, sehingga seluruh delapan subset X berada dalam pembangkit."
      ],
      "conclusion": "\\mathcal P sistem pi tetapi bukan sigma-aljabar; \\sigma(\\mathcal P)=2^X."
    },
    {
      "title": "Sistem Lambda yang Bukan Sistem Pi",
      "forDefinition": "Sistem Lambda atau Sistem Dynkin",
      "problem": "Pada X=\\{1,2,3,4\\}, periksa \\mathcal L=\\{\\varnothing,X,\\{1,2\\},\\{3,4\\},\\{1,3\\},\\{2,4\\}\\}.",
      "solution": [
        "Diketahui \\mathcal L terdiri atas \\varnothing, X, dan dua pasang himpunan berukuran dua yang saling berkomplemen. Ia memuat X. Komplemen setiap anggota juga berada dalam \\mathcal L: \\{1,2\\}^c=\\{3,4\\} dan \\{1,3\\}^c=\\{2,4\\}.",
        "Untuk selisih bertingkat, dua anggota berukuran dua yang berbeda tidak saling memuat. Jadi pasangan A\\subseteq B yang relevan hanyalah A=\\varnothing, A=B, atau B=X. Selisihnya masing-masing B, \\varnothing, atau komplemen A; semuanya berada dalam \\mathcal L.",
        "Keluarga anggota tak kosong yang saling lepas hanya dapat terdiri atas satu anggota, atau satu pasangan komplemen berukuran dua (selain kemungkinan X sendiri). Gabungannya kembali anggota \\mathcal L. Ini juga berlaku untuk barisan terhitung karena paling banyak dua anggota tak kosong dapat muncul.",
        "Akan tetapi \\{1,2\\}\\cap\\{1,3\\}=\\{1\\}\\notin\\mathcal L. Jadi \\mathcal L tidak tertutup terhadap irisan dan bukan sistem pi."
      ],
      "conclusion": "Contoh ini memisahkan aksioma sistem lambda dari aksioma sistem pi secara konkret."
    },
    {
      "title": "Dua Kejadian yang Memecah Empat Atom",
      "problem": "Pada X=\\{1,2,3,4\\}, A=\\{1,2\\} dan B=\\{2,3\\}. Tentukan \\sigma(\\{A,B\\}).",
      "solution": [
        "Diketahui A dan B saling tumpang tindih tetapi tidak sama. Empat wilayah yang ditentukan oleh dua indikator keanggotaan adalah A\\cap B=\\{2\\}, A\\cap B^c=\\{1\\}, A^c\\cap B=\\{3\\}, dan A^c\\cap B^c=\\{4\\}.",
        "Setiap wilayah diperoleh dengan komplemen dan irisan dari A,B, sehingga setiap singleton berada dalam \\sigma(\\{A,B\\}). Ketertutupan terhadap gabungan berhingga kemudian menghasilkan seluruh subset X.",
        "Sebaliknya, setiap sigma-aljabar pada X adalah subset 2^X. Jadi 2^X\\subseteq\\sigma(\\{A,B\\})\\subseteq2^X. Banyak anggota pembangkit adalah 2^4=16."
      ],
      "conclusion": "Dua kejadian A,B sudah membangkitkan seluruh 16 subset X."
    },
    {
      "title": "Tiga Blok Partisi dan Delapan Kejadian",
      "problem": "Partisi X=\\{1,2,3,4,5\\} menjadi B_1=\\{1,2\\}, B_2=\\{3\\}, B_3=\\{4,5\\}. Tentukan banyak anggota sigma-aljabarnya.",
      "solution": [
        "Diketahui tiga blok tidak kosong, saling lepas, dan gabungannya X. Setiap kejadian yang dapat dibedakan oleh partisi merupakan gabungan sejumlah blok utuh, bukan potongan sebagian blok.",
        "Pilihan indeks J\\subseteq\\{1,2,3\\} menghasilkan \\varnothing, B_1, B_2, B_3, B_1\\cup B_2, B_1\\cup B_3, B_2\\cup B_3, X. Tidak ada dua pilihan J yang memberi himpunan sama karena blok-blok tidak kosong dan saling lepas.",
        "Ada 2^3=8 pilihan indeks. Contohnya \\{1,3\\} bukan anggota karena hanya mengambil sebagian blok B_1. Hasil ini juga memeriksa bahwa ukuran ruang X=5 tidak berarti sigma-aljabarnya harus mempunyai 2^5 anggota."
      ],
      "conclusion": "Sigma-aljabar partisi ini mempunyai tepat delapan anggota."
    },
    {
      "title": "Memperluas Kelas Pembangkit melalui Pi–Lambda",
      "problem": "Pada X=\\{1,2,3\\}, \\mathcal P=\\{X,\\{1\\},\\{1,2\\}\\}. Tentukan \\lambda(\\mathcal P).",
      "solution": [
        "Diketahui \\mathcal P sistem pi karena tiga anggotanya bersarang. Teorema pi–lambda berlaku sehingga \\lambda(\\mathcal P)=\\sigma(\\mathcal P). Kita tetap menghitung isi pembangkitnya, bukan hanya menyebut teorema.",
        "Karena \\{1\\} dan \\{1,2\\} anggota pembangkit, selisihnya \\{2\\} terukur. Komplemen \\{1,2\\} memberi \\{3\\}. Jadi semua singleton berada dalam pembangkit. Setiap subset X merupakan gabungan sejumlah singleton dan karena itu terukur.",
        "Kedua inklusi memberi \\sigma(\\mathcal P)=2^X. Maka sistem lambda terkecil yang memuat \\mathcal P mempunyai delapan anggota, meskipun \\mathcal P mula-mula hanya mempunyai tiga."
      ],
      "conclusion": "\\lambda(\\mathcal P)=\\sigma(\\mathcal P)=2^X."
    },
    {
      "title": "Kejadian yang Tidak Dapat Dibedakan",
      "problem": "Pada X=\\{1,2,3\\}, \\mathcal A=\\{\\varnothing,X,\\{1\\},\\{2,3\\}\\}. Apakah kejadian \\{2\\} terukur? Jelaskan tanpa menyebutnya tidak mungkin secara probabilistik.",
      "solution": [
        "Diketahui sigma-aljabar \\mathcal A berasal dari partisi dua blok \\{1\\} dan \\{2,3\\}. Daftar anggotanya eksplisit dan tidak memuat singleton \\{2\\}. Jadi \\{2\\}\\notin\\mathcal A.",
        "Kesimpulan itu berarti kejadian \\{2\\} tidak termasuk domain ukuran yang didefinisikan hanya pada \\mathcal A. Ini tidak menyatakan bahwa elemen 2 tidak mungkin terjadi; 2 tetap anggota ruang sampel X.",
        "Jika kita ingin mengukur \\{2\\}, kita harus memperbesar sigma-aljabar. Keluarga \\sigma(\\mathcal A\\cup\\{\\{2\\}\\}) memuat juga \\{3\\}=\\{2,3\\}\\setminus\\{2\\} dan karenanya seluruh 2^X."
      ],
      "conclusion": "Keterukuran ditentukan oleh keluarga kejadian, bukan oleh kemungkinan fisik suatu hasil."
    }
  ],
  "exercises": [
    {
      "prompt": "CL-01. Pada X=\\{1,2,3\\}, periksa apakah \\mathcal F=\\{\\varnothing,X,\\{1\\},\\{2\\}\\} sigma-aljabar. Jika tidak, tentukan \\sigma(\\mathcal F).",
      "hint": "Periksa komplemen singleton dan bangun atom yang dipaksa oleh dua singleton.",
      "answer": "Diketahui X=\\{1,2,3\\} dan \\mathcal F berisi empat himpunan. Ditentukan apakah ketiga aksioma sigma-aljabar terpenuhi. Walaupun X\\in\\mathcal F, komplemen \\{1\\}^c=\\{2,3\\} tidak ada di \\mathcal F; jadi \\mathcal F bukan sigma-aljabar. Kegagalan satu aksioma sudah cukup, tanpa perlu menguji semua barisan gabungan. Untuk menentukan pembangkit, perhatikan bahwa setiap sigma-aljabar yang memuat \\mathcal F harus memuat \\{1\\},\\{2\\} dan \\{3\\}=X\\setminus(\\{1\\}\\cup\\{2\\}). Maka ketiga singleton terukur. Semua subset X adalah gabungan singleton, sehingga 2^X\\subseteq\\sigma(\\mathcal F). Inklusi sebaliknya selalu benar karena pembangkit terdiri dari subset X. Dengan demikian \\sigma(\\mathcal F)=2^X, yang mempunyai delapan anggota, bukan sekadar menambahkan satu komplemen.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-02. Pada X=\\{a,b,c,d\\}, A=\\{a,b\\}. Tentukan \\sigma(\\{A\\}) dan buktikan kedua inklusi dalam karakterisasi tersebut.",
      "hint": "Gunakan partisi A dan A^c; periksa semua gabungan blok.",
      "answer": "Diketahui A=\\{a,b\\} dan A^c=\\{c,d\\}. Definisikan \\mathcal U=\\{\\varnothing,A,A^c,X\\}. Akan dibuktikan \\sigma(\\{A\\})=\\mathcal U. Arah pertama: karena A\\in\\sigma(\\{A\\}), ketertutupan terhadap komplemen memaksa A^c, sedangkan \\varnothing dan X adalah anggota setiap sigma-aljabar. Jadi \\mathcal U\\subseteq\\sigma(\\{A\\}). Arah kedua: \\mathcal U memuat X; komplemen menukar A dan A^c serta menukar X dan \\varnothing. Gabungan terhitung dari anggota \\mathcal U tetap salah satu dari empat anggota itu, karena A dan A^c merupakan dua blok partisi. Maka \\mathcal U sigma-aljabar yang memuat A. Berdasarkan minimalitas pembangkit, \\sigma(\\{A\\})\\subseteq\\mathcal U. Kedua inklusi memberi kesamaan, dan \\{a\\} tidak terukur dalam sigma-aljabar tersebut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-03. Pada X=\\{1,2,3,4\\}, tentukan irisan \\sigma(\\{\\{1,2\\}\\}) dan \\sigma(\\{\\{1,3\\}\\}). Apakah gabungan kedua sigma-aljabar pasti sigma-aljabar?",
      "hint": "Tulis masing-masing empat anggota dan uji gabungan terhadap komplemen atau irisan.",
      "answer": "Diketahui A=\\{1,2\\} dan B=\\{1,3\\}. Sigma-aljabar pertama adalah \\mathcal A=\\{\\varnothing,X,\\{1,2\\},\\{3,4\\}\\}, sedangkan kedua \\mathcal B=\\{\\varnothing,X,\\{1,3\\},\\{2,4\\}\\}. Perbandingan anggota memperlihatkan bahwa irisan keduanya tepat \\{\\varnothing,X\\}; ini sigma-aljabar menurut teorema irisan keluarga sigma-aljabar. Gabungan \\mathcal A\\cup\\mathcal B memuat A dan B, tetapi tidak memuat A\\cap B=\\{1\\}. Jika gabungan tersebut sigma-aljabar, ia harus tertutup terhadap irisan dua himpunan, sehingga muncul kontradiksi. Jadi gabungan dua sigma-aljabar tidak selalu sigma-aljabar. Sigma-aljabar yang dibangkitkan oleh gabungan keduanya justru 2^X, karena empat atom singleton dapat dibentuk dari A dan B.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-04. Buktikan bahwa \\mathcal P=\\{X,\\{1\\},\\{1,2\\}\\} pada X=\\{1,2,3\\} sistem pi tetapi bukan sigma-aljabar; tentukan pembangkitnya.",
      "hint": "Gunakan sifat bersarang, lalu selisih untuk memperoleh singleton 2 dan 3.",
      "answer": "Diketahui \\{1\\}\\subseteq\\{1,2\\}\\subseteq X. Diambil sebarang A,B\\in\\mathcal P. Karena keluarga bersarang, A\\cap B adalah salah satu dari A atau B dan karena itu anggota \\mathcal P. Maka \\mathcal P sistem pi. Akan tetapi \\{1\\}^c=\\{2,3\\}\\notin\\mathcal P, sehingga \\mathcal P bukan sigma-aljabar. Untuk pembangkit, \\{2\\}=\\{1,2\\}\\setminus\\{1\\} dan \\{3\\}=X\\setminus\\{1,2\\} berada dalam \\sigma(\\mathcal P), karena sigma-aljabar tertutup terhadap selisih dan komplemen. Ketiga singleton kini berada dalam pembangkit, sehingga semua delapan subset X dapat dibentuk sebagai gabungan. Dengan demikian \\sigma(\\mathcal P)=2^X. Menurut teorema pi–lambda, hasil yang sama berlaku bagi \\lambda(\\mathcal P).",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-05. Pada X=\\{1,2,3,4\\}, verifikasi bahwa \\mathcal L=\\{\\varnothing,X,\\{1,2\\},\\{3,4\\},\\{1,3\\},\\{2,4\\}\\} sistem lambda, tetapi bukan sistem pi.",
      "hint": "Periksa semua kemungkinan selisih bertingkat dan keluarga saling lepas.",
      "answer": "Diketahui \\mathcal L memuat X dan \\varnothing. Dua pasang nontrivial saling berkomplemen, yakni \\{1,2\\}^c=\\{3,4\\} dan \\{1,3\\}^c=\\{2,4\\}. Jika A,B\\in\\mathcal L dengan A\\subseteq B, selain kasus A=\\varnothing atau A=B, hanya B=X yang mungkin, sebab dua himpunan berbeda berukuran dua tidak saling memuat. Selisih B\\setminus A dalam ketiga kasus masing-masing B,\\varnothing, atau A^c, semuanya anggota \\mathcal L. Untuk barisan himpunan saling lepas dalam \\mathcal L, paling banyak dua anggota tak kosong dapat muncul; jika dua, keduanya harus pasangan komplemen dan gabungannya X. Jadi ketertutupan terhadap gabungan terhitung saling lepas terpenuhi. Namun \\{1,2\\}\\cap\\{1,3\\}=\\{1\\}\\notin\\mathcal L. Maka \\mathcal L sistem lambda tetapi bukan sistem pi, sehingga tidak otomatis sigma-aljabar.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-06. Untuk X=\\{1,2,3,4\\}, A=\\{1,2\\} dan B=\\{2,3\\}, tentukan atom \\sigma(\\{A,B\\}) dan jumlah anggotanya.",
      "hint": "Irisankan A atau komplemennya dengan B atau komplemennya.",
      "answer": "Diketahui dua kejadian A dan B. Ditentukan atom pembangkitnya. Kombinasi keanggotaan menghasilkan A\\cap B=\\{2\\}, A\\cap B^c=\\{1\\}, A^c\\cap B=\\{3\\}, dan A^c\\cap B^c=\\{4\\}. Keempatnya tidak kosong, saling lepas, dan menutupi X. Masing-masing berada dalam \\sigma(\\{A,B\\}) karena diperoleh dari operasi komplemen dan irisan. Setiap singleton adalah atom karena tidak mempunyai subset tak kosong yang lebih kecil. Setiap subset X merupakan gabungan sejumlah singleton, sehingga semua 2^4=16 subset berada dalam pembangkit. Sebaliknya, pembangkit tentu subset 2^X. Dengan demikian \\sigma(\\{A,B\\})=2^X dan jumlah anggotanya 16. Pembuktian ini sekaligus menunjukkan ketunggalan partisi atom pada contoh hingga tersebut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-07. Pada X=\\{1,2,3\\}, dua ukuran probabilitas P,Q sepakat pada \\mathcal P=\\{X,\\{1\\},\\{1,2\\}\\}. Buktikan P=Q pada seluruh 2^X dan hitung massa singleton jika P(\\{1\\})=0{,}2 serta P(\\{1,2\\})=0{,}5.",
      "hint": "Gunakan selisih kejadian dan total massa; atau terapkan teorema pi–lambda.",
      "answer": "Diketahui P dan Q adalah ukuran probabilitas, sehingga P(X)=Q(X)=1. Kelas \\mathcal P adalah sistem pi karena bersarang dan membangkitkan 2^X. Secara teoretis, kelas \\mathcal D=\\{A\\subseteq X:P(A)=Q(A)\\} merupakan sistem lambda: X termasuk, selisih bertingkat mempertahankan kesamaan karena aditivitas hingga, dan gabungan terhitung saling lepas mempertahankan kesamaan karena aditivitas terhitung. Karena \\mathcal P\\subseteq\\mathcal D, teorema pi–lambda memberi 2^X=\\sigma(\\mathcal P)\\subseteq\\mathcal D. Perhitungan langsung memverifikasi: P(\\{2\\})=P(\\{1,2\\})-P(\\{1\\})=0{,}5-0{,}2=0{,}3, dan P(\\{3\\})=1-P(\\{1,2\\})=0{,}5. Q mempunyai nilai sama karena sepakat pada \\mathcal P. Setiap kejadian merupakan gabungan singleton, sehingga kedua ukuran sama pada semua kejadian. Massa 0{,}2+0{,}3+0{,}5=1 juga memverifikasi normalisasi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CL-08. Pada X=\\mathbb N, keluarga \\mathcal F semua himpunan hingga atau berk komplemen hingga. Buktikan \\mathcal F aljabar himpunan tetapi bukan sigma-aljabar.",
      "hint": "Gunakan gabungan terhitung singleton genap dan periksa komplemennya.",
      "answer": "Diketahui \\mathcal F=\\{A\\subseteq\\mathbb N:A\\text{ hingga atau }\\mathbb N\\setminus A\\text{ hingga}\\}. Kata berk komplemen hingga berarti komplemennya hingga. Keluarga ini memuat \\varnothing (hingga) dan X (komplemennya kosong). Jika A hingga, A^c berk komplemen hingga; jika A berk komplemen hingga, A^c hingga. Jadi \\mathcal F tertutup terhadap komplemen. Gabungan dua himpunan hingga tetap hingga; gabungan yang melibatkan himpunan berk komplemen hingga juga berk komplemen hingga karena komplemennya merupakan irisan dengan suatu himpunan hingga. Dengan demikian \\mathcal F tertutup terhadap gabungan berhingga dan merupakan aljabar himpunan. Namun untuk setiap n, singleton \\{2n\\} berada dalam \\mathcal F, sedangkan \\bigcup_{n=1}^{\\infty}\\{2n\\}=\\{2,4,6,\\ldots\\} tidak hingga dan komplemennya \\{1,3,5,\\ldots\\} juga tidak hingga. Gabungan terhitung tersebut tidak berada dalam \\mathcal F. Jadi aksioma sigma-aljabar gagal; inilah perbedaan esensial antara gabungan berhingga dan terhitung.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
