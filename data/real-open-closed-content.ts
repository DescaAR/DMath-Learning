import type { BookLessonContent } from "@/data/book-content-types";

/** Open and closed subsets of R: complete proofs and original solved problems. */
export const realOpenClosedContent: BookLessonContent = {
  "intro": [
    "Himpunan terbuka dan tertutup pada garis real bukan sekadar dua jenis interval. Keduanya menjelaskan apakah suatu titik memiliki ruang gerak kecil yang seluruhnya berada dalam himpunan, serta apakah suatu himpunan mempertahankan limit barisan anggotanya. Misalnya, titik $1$ termasuk $[0,1]$, tetapi tidak mempunyai interval terbuka berpusat di $1$ yang seluruhnya berada di dalam $[0,1]$. Sebaliknya, $[0,1]$ tetap tertutup karena semua titik limit dari barisan di dalamnya masih berada di interval itu.",
    "Untuk $A=(0,1)\\cup\\{2\\}$, titik-titik $(0,1)$ merupakan bagian dalam, sedangkan $0,1,$ dan $2$ berada pada batas. Titik $2$ bahkan termasuk $A$ tetapi bukan titik bagian dalam. Pembedaan ini mengantar pada interior $\\operatorname{int}(A)$, penutupan $\\overline A$, dan batas $\\partial A$; ketiganya selalu ditentukan relatif terhadap ruang ambient $\\mathbb R$.",
    "Urutan materi dimulai dari definisi berbasis interval terbuka, lalu operasi gabungan dan irisan, karakterisasi penutupan melalui setiap lingkungan, dualitas interior dan komplemen, serta kriteria sekuensial ketertutupan. Contoh rasional dan irasional memperlihatkan bahwa himpunan dapat rapat di seluruh $\\mathbb R$ meskipun tidak mempunyai satu pun titik interior. Semua bukti menuliskan arah implikasi dan menangani kasus himpunan kosong ketika relevan.",
    "Rujukan: Walter Rudin, Principles of Mathematical Analysis, edisi ke-3 (1976), Bab 2; James R. Munkres, Topology, edisi ke-2 (2000), bagian dasar ruang topologi. Pembuktian dan soal terbahas disusun khusus untuk halaman ini."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Himpunan Terbuka di Garis Real",
      "statement": "Himpunan $U\\subseteq\\mathbb R$ disebut terbuka apabila untuk setiap $x\\in U$ terdapat $\\varepsilon>0$ sehingga $(x-\\varepsilon,x+\\varepsilon)\\subseteq U$. Himpunan kosong terbuka karena syarat universalnya terpenuhi secara vakum.",
      "explanation": "Radius boleh bergantung pada titik x. Keterbukaan tidak mengharuskan satu radius yang sama untuk semua titik."
    },
    {
      "kind": "definition",
      "title": "Himpunan Tertutup di Garis Real",
      "statement": "Himpunan $F\\subseteq\\mathbb R$ disebut tertutup apabila $\\mathbb R\\setminus F$ terbuka. Himpunan $\\varnothing$ dan $\\mathbb R$ sekaligus terbuka dan tertutup.",
      "explanation": "Tertutup tidak berarti terbatas. Interval [0,∞) tertutup, tetapi tidak terbatas."
    },
    {
      "kind": "definition",
      "title": "Titik Interior dan Interior",
      "statement": "Untuk $A\\subseteq\\mathbb R$, titik $x\\in A$ disebut titik interior apabila terdapat $\\varepsilon>0$ dengan $(x-\\varepsilon,x+\\varepsilon)\\subseteq A$. Interior $A$, ditulis $\\operatorname{int}(A)$, adalah himpunan seluruh titik interiornya.",
      "explanation": "Titik anggota A belum tentu interior; sebuah titik terisolasi tidak mempunyai lingkungan kecil yang tetap di dalam A."
    },
    {
      "kind": "definition",
      "title": "Penutupan Himpunan",
      "statement": "Untuk $A\\subseteq\\mathbb R$, penutupan $\\overline A$ didefinisikan sebagai irisan seluruh himpunan tertutup di $\\mathbb R$ yang memuat $A$. Keluarga tersebut tidak kosong karena $\\mathbb R$ tertutup.",
      "explanation": "Penutupan memasukkan semua titik A dan semua titik yang dapat didekati dari A; definisi melalui irisan tetap berlaku untuk A kosong."
    },
    {
      "kind": "definition",
      "title": "Titik Batas dan Batas Himpunan",
      "statement": "Titik $x\\in\\mathbb R$ disebut titik batas $A$ jika untuk setiap $\\varepsilon>0$, interval $(x-\\varepsilon,x+\\varepsilon)$ bertemu $A$ dan juga $\\mathbb R\\setminus A$. Himpunan semua titik batas ditulis $\\partial A$.",
      "explanation": "Titik batas boleh termasuk A atau berada di luar A. Pada himpunan yang rapat dan berkomplemen rapat, setiap titik real merupakan titik batas."
    },
    {
      "kind": "proposition",
      "title": "Gabungan Sebarang dan Irisan Hingga Himpunan Terbuka",
      "statement": "Jika $(U_i)_{i\\in I}$ adalah keluarga himpunan terbuka di $\\mathbb R$, maka $\\bigcup_{i\\in I}U_i$ terbuka. Jika $U_1,\\ldots,U_m$ terbuka dengan $m\\ge1$, maka $\\bigcap_{j=1}^m U_j$ terbuka; irisan keluarga kosong didefinisikan sebagai $\\mathbb R$ dan juga terbuka.",
      "proof": [
        "Diketahui setiap $U_i$ terbuka. Diambil sebarang $x\\in\\bigcup_{i\\in I}U_i$. Terdapat indeks $i_0\\in I$ dengan $x\\in U_{i_0}$. Menurut definisi keterbukaan, ada $\\varepsilon>0$ sehingga $(x-\\varepsilon,x+\\varepsilon)\\subseteq U_{i_0}\\subseteq\\bigcup_{i\\in I}U_i$. Karena $x$ sebarang, gabungan terbuka. Jika $I=\\varnothing$, gabungannya $\\varnothing$, yang terbuka.",
        "Untuk irisan, ambil sebarang $x\\in\\bigcap_{j=1}^m U_j$. Bagi setiap $j$, pilih $\\varepsilon_j>0$ sehingga $(x-\\varepsilon_j,x+\\varepsilon_j)\\subseteq U_j$. Karena jumlah indeks hingga, $\\varepsilon=\\min_{1\\le j\\le m}\\varepsilon_j>0$. Interval $(x-\\varepsilon,x+\\varepsilon)$ berada dalam setiap $U_j$, sehingga berada dalam irisannya. Irisan kosong bernilai $\\mathbb R$, yang terbuka dengan memilih radius sebarang di setiap titik. Kedua klaim terbukti. $\\square$"
      ],
      "explanation": "Irisan tak hingga tidak harus terbuka; keluarga (-1/n,1/n) akan menghasilkan contoh tandingan."
    },
    {
      "kind": "proposition",
      "title": "Irisan Sebarang dan Gabungan Hingga Himpunan Tertutup",
      "statement": "Jika $(F_i)_{i\\in I}$ adalah keluarga himpunan tertutup di $\\mathbb R$, maka $\\bigcap_{i\\in I}F_i$ tertutup. Jika $F_1,\\ldots,F_m$ tertutup dengan $m\\ge1$, maka $\\bigcup_{j=1}^mF_j$ tertutup; gabungan keluarga kosong adalah $\\varnothing$ dan tertutup.",
      "proof": [
        "Diketahui setiap $F_i$ tertutup. Komplementer $\\mathbb R\\setminus F_i$ terbuka. Hukum De Morgan memberikan $\\mathbb R\\setminus\\bigcap_{i\\in I}F_i=\\bigcup_{i\\in I}(\\mathbb R\\setminus F_i)$. Ruas kanan terbuka berdasarkan proposisi sebelumnya, termasuk saat $I=\\varnothing$; oleh definisi, irisan semula tertutup.",
        "Untuk keluarga hingga, $\\mathbb R\\setminus\\bigcup_{j=1}^mF_j=\\bigcap_{j=1}^m(\\mathbb R\\setminus F_j)$. Irisan hingga himpunan terbuka adalah terbuka, sehingga gabungan semula tertutup. Gabungan kosong adalah $\\varnothing$ dan komplemennya $\\mathbb R$ terbuka. Dengan demikian seluruh kasus terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Penutupan melalui Lingkungan",
      "statement": "Untuk setiap $A\\subseteq\\mathbb R$ dan $x\\in\\mathbb R$, berlaku $x\\in\\overline A$ jika dan hanya jika $(x-\\varepsilon,x+\\varepsilon)\\cap A\\ne\\varnothing$ untuk setiap $\\varepsilon>0$. Selain itu, $\\overline A$ adalah himpunan tertutup terkecil yang memuat $A$.",
      "proof": [
        "Tuliskan $C=\\{x\\in\\mathbb R:(x-\\varepsilon,x+\\varepsilon)\\cap A\\ne\\varnothing\\ \\text{untuk setiap }\\varepsilon>0\\}$. Setiap $a\\in A$ termasuk $C$ karena $a$ sendiri berada dalam setiap lingkungan berpusat di $a$, sehingga $A\\subseteq C$.",
        "Dibuktikan bahwa $C$ tertutup. Jika $x\\notin C$, terdapat $r>0$ dengan $(x-r,x+r)\\cap A=\\varnothing$. Untuk setiap $y$ yang memenuhi $|y-x|<r/2$, interval $(y-r/2,y+r/2)$ berada dalam $(x-r,x+r)$ dan tidak bertemu $A$. Dengan demikian $y\\notin C$. Diperoleh $(x-r/2,x+r/2)\\subseteq\\mathbb R\\setminus C$, sehingga komplemen $C$ terbuka dan $C$ tertutup.",
        "Diambil sebarang himpunan tertutup $F$ yang memuat $A$. Jika $x\\notin F$, keterbukaan $\\mathbb R\\setminus F$ memberikan $r>0$ dengan $(x-r,x+r)\\subseteq\\mathbb R\\setminus F$. Karena $A\\subseteq F$, lingkungan ini tidak bertemu $A$, sehingga $x\\notin C$. Kontraposisinya memberi $C\\subseteq F$. Karena $C$ sendiri tertutup dan memuat $A$, sedangkan $C$ termuat dalam setiap himpunan tertutup yang memuat $A$, irisan semua himpunan tersebut tepat $C$. Definisi penutupan memberikan $\\overline A=C$, yang membuktikan kedua arah karakterisasi serta minimalitasnya. $\\square$"
      ],
      "explanation": "Kondisi bertemu A tidak menuntut titik pertemuan berbeda dari x. Karena itu setiap anggota A otomatis berada dalam penutupannya, termasuk titik yang terisolasi."
    },
    {
      "kind": "proposition",
      "title": "Interior sebagai Himpunan Terbuka Terbesar dan Dualitas Komplemen",
      "statement": "Untuk setiap $A\\subseteq\\mathbb R$, $\\operatorname{int}(A)$ adalah himpunan terbuka terbesar yang termuat dalam $A$, dan berlaku $\\operatorname{int}(A)=\\mathbb R\\setminus\\overline{\\mathbb R\\setminus A}$.",
      "proof": [
        "Diambil sebarang $x\\in\\operatorname{int}(A)$. Ada $r>0$ sehingga $(x-r,x+r)\\subseteq A$. Jika $y\\in(x-r/2,x+r/2)$, pilih $s=r/2-|x-y|>0$. Interval $(y-s,y+s)$ berada dalam $(x-r,x+r)\\subseteq A$, sehingga $y\\in\\operatorname{int}(A)$. Dengan demikian interior terbuka dan, menurut definisi, termuat dalam $A$.",
        "Jika $U$ terbuka dan $U\\subseteq A$, setiap $x\\in U$ mempunyai lingkungan yang berada dalam $U$ dan karenanya dalam $A$. Diperoleh $U\\subseteq\\operatorname{int}(A)$, yang membuktikan sifat terbesar.",
        "Untuk identitas komplemen, diketahui $x\\in\\operatorname{int}(A)$ jika dan hanya jika terdapat $r>0$ dengan $(x-r,x+r)\\subseteq A$. Ini ekuivalen dengan adanya lingkungan $x$ yang tidak bertemu $\\mathbb R\\setminus A$. Menurut karakterisasi penutupan, kondisi tersebut ekuivalen dengan $x\\notin\\overline{\\mathbb R\\setminus A}$. Kedua implikasi berlaku karena setiap ekuivalensi dapat dibalik. Dengan demikian kesamaan himpunan terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Batas dan Ketertutupannya",
      "statement": "Untuk setiap $A\\subseteq\\mathbb R$, berlaku $\\partial A=\\overline A\\cap\\overline{\\mathbb R\\setminus A}=\\overline A\\setminus\\operatorname{int}(A)$. Himpunan $\\partial A$ tertutup di $\\mathbb R$.",
      "proof": [
        "Diketahui $x\\in\\partial A$. Menurut definisi batas, setiap lingkungan $x$ bertemu $A$ dan komplemennya. Karakterisasi penutupan memberikan $x\\in\\overline A$ dan $x\\in\\overline{\\mathbb R\\setminus A}$, sehingga $x$ berada dalam irisannya.",
        "Sebaliknya, jika $x\\in\\overline A\\cap\\overline{\\mathbb R\\setminus A}$, setiap lingkungan $x$ bertemu kedua himpunan berdasarkan karakterisasi penutupan. Ini tepat definisi titik batas, sehingga $x\\in\\partial A$. Kedua inklusi membuktikan kesamaan pertama.",
        "Dari dualitas komplemen, $\\overline{\\mathbb R\\setminus A}=\\mathbb R\\setminus\\operatorname{int}(A)$. Substitusi menghasilkan $\\partial A=\\overline A\\setminus\\operatorname{int}(A)$. Kedua penutupan pada kesamaan pertama tertutup; irisan dua himpunan tertutup juga tertutup. Seluruh pernyataan terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kriteria Sekuensial untuk Himpunan Tertutup",
      "statement": "Himpunan $F\\subseteq\\mathbb R$ tertutup jika dan hanya jika setiap barisan $(x_n)$ dengan $x_n\\in F$ untuk semua $n$ dan $x_n\\to x$ di $\\mathbb R$ memenuhi $x\\in F$.",
      "proof": [
        "($\\Rightarrow$) Diketahui $F$ tertutup dan $(x_n)\\subseteq F$ konvergen ke $x$. Andaikan $x\\notin F$. Karena $\\mathbb R\\setminus F$ terbuka, ada $\\varepsilon>0$ dengan $(x-\\varepsilon,x+\\varepsilon)\\subseteq\\mathbb R\\setminus F$. Dari $x_n\\to x$, terdapat $N$ sehingga $|x_n-x|<\\varepsilon$ untuk setiap $n\\ge N$. Ini menempatkan $x_n$ sekaligus di $F$ dan di komplemennya, kontradiksi. Oleh karena itu $x\\in F$.",
        "($\\Leftarrow$) Diketahui setiap barisan dalam $F$ yang konvergen di $\\mathbb R$ memiliki limit di $F$. Andaikan $F$ tidak tertutup. Karena $\\overline F$ adalah himpunan tertutup terkecil yang memuat $F$, terdapat $x\\in\\overline F\\setminus F$. Untuk setiap $n\\ge1$, karakterisasi penutupan memungkinkan pemilihan $x_n\\in F\\cap(x-1/n,x+1/n)$. Ketaksamaan $|x_n-x|<1/n$ memberikan $x_n\\to x$, padahal $x\\notin F$, bertentangan dengan hipotesis. Dengan demikian $F$ tertutup. Kedua arah terbukti. $\\square$"
      ],
      "explanation": "Hipotesisnya mengharuskan barisan seluruhnya berada dalam F, sedangkan konvergensinya diuji di ruang ambient ℝ."
    },
    {
      "kind": "proposition",
      "title": "Kerapatan Rasional dan Irasional",
      "statement": "Setiap interval terbuka $(a,b)$ dengan $a<b$ memuat sebuah bilangan rasional dan sebuah bilangan irasional. Akibatnya $\\overline{\\mathbb Q}=\\overline{\\mathbb R\\setminus\\mathbb Q}=\\mathbb R$, sedangkan $\\operatorname{int}(\\mathbb Q)=\\operatorname{int}(\\mathbb R\\setminus\\mathbb Q)=\\varnothing$.",
      "proof": [
        "Diketahui $a<b$. Menurut sifat Archimedes, pilih bilangan bulat positif $n$ sehingga $1/n<b-a$. Tetapkan $k=\\lfloor na\\rfloor+1$. Sifat fungsi lantai memberi $na<k\\le na+1<nb$. Pembagian dengan $n>0$ menghasilkan $a<k/n<b$, sehingga $k/n\\in\\mathbb Q\\cap(a,b)$.",
        "Untuk bilangan irasional, terapkan konstruksi rasional yang baru dibuktikan pada interval $(a-\\sqrt2,b-\\sqrt2)$. Ada $q\\in\\mathbb Q$ dengan $a-\\sqrt2<q<b-\\sqrt2$. Bilangan $q+\\sqrt2$ terletak dalam $(a,b)$ dan irasional: jika rasional, selisihnya dengan $q$ akan membuat $\\sqrt2$ rasional, kontradiksi.",
        "Karena setiap lingkungan titik real memuat rasional dan irasional, karakterisasi penutupan memberi $\\overline{\\mathbb Q}=\\overline{\\mathbb R\\setminus\\mathbb Q}=\\mathbb R$. Tidak ada lingkungan terbuka nonkosong yang seluruhnya rasional atau seluruhnya irasional; definisi interior memberikan kedua interior kosong. Seluruh klaim terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Interval Terbuka dan Radius Lokal",
      "forDefinition": "Himpunan Terbuka di Garis Real",
      "problem": "Buktikan $(0,3)$ terbuka dan jelaskan mengapa $[0,3)$ tidak terbuka di $\\mathbb R$.",
      "solution": [
        "Diketahui $x\\in(0,3)$ sebarang. Kedua bilangan $x$ dan $3-x$ positif. Pilih $\\varepsilon=\\frac12\\min\\{x,3-x\\}>0$. Jika $|y-x|<\\varepsilon$, maka $y>x-\\varepsilon\\ge x/2>0$ dan $y<x+\\varepsilon<3$, sehingga $(x-\\varepsilon,x+\\varepsilon)\\subseteq(0,3)$.",
        "Untuk $[0,3)$, titik $0$ termasuk himpunan. Namun bagi setiap $\\varepsilon>0$, bilangan $-\\varepsilon/2$ berada dalam $(-\\varepsilon,\\varepsilon)$ tetapi tidak berada dalam $[0,3)$. Tidak ada radius yang memenuhi definisi keterbukaan pada titik $0$. Perbedaan berasal dari keberadaan titik ujung kiri, bukan dari panjang interval."
      ]
    },
    {
      "title": "Interval Tertutup dan Komplemennya",
      "forDefinition": "Himpunan Tertutup di Garis Real",
      "problem": "Periksa bahwa $[0,3]$ tertutup dan $(0,3]$ tidak tertutup dalam $\\mathbb R$.",
      "solution": [
        "Diketahui $\\mathbb R\\setminus[0,3]=(-\\infty,0)\\cup(3,\\infty)$. Kedua sinar terbuka: bagi $x<0$ pilih $\\varepsilon=-x/2$, sedangkan bagi $x>3$ pilih $\\varepsilon=(x-3)/2$. Gabungan dua himpunan terbuka juga terbuka, sehingga $[0,3]$ tertutup.",
        "Untuk $(0,3]$, komplemennya $(-\\infty,0]\\cup(3,\\infty)$ tidak terbuka karena titik $0$ termasuk komplemen, tetapi setiap lingkungannya memuat bilangan positif yang lebih kecil dari $3$ dan tidak termasuk komplemen. Dengan demikian $(0,3]$ tidak tertutup. Pemeriksaan alternatif: barisan $x_n=1/n$ berada dalam $(0,3]$ dan konvergen ke $0$ yang tidak termasuk himpunan."
      ]
    },
    {
      "title": "Interior dengan Titik Terisolasi",
      "forDefinition": "Titik Interior dan Interior",
      "problem": "Tentukan $\\operatorname{int}(A)$ untuk $A=[0,1)\\cup\\{2\\}$ dan periksa titik $0$, $1/2$, serta $2$.",
      "solution": [
        "Setiap $x\\in(0,1)$ mempunyai radius $\\varepsilon=\\frac12\\min\\{x,1-x\\}$ yang menjaga seluruh interval berpusat di $x$ berada dalam $[0,1)\\subseteq A$. Karena itu $(0,1)\\subseteq\\operatorname{int}(A)$.",
        "Titik $0$ tidak interior karena setiap lingkungan berpusat di $0$ memuat bilangan negatif di luar $A$. Titik $2$ juga tidak interior: untuk radius $\\varepsilon>0$, pilih $y=2+\\min\\{\\varepsilon/2,1/2\\}$, yang berada dalam lingkungan tetapi tidak di $A$. Tidak ada titik lain dalam $A$ selain $[0,1)$ dan $\\{2\\}$. Diperoleh $\\operatorname{int}(A)=(0,1)$; khususnya $1/2$ interior, sedangkan $0$ dan $2$ bukan."
      ]
    },
    {
      "title": "Penutupan Barisan Resiprokal",
      "forDefinition": "Penutupan Himpunan",
      "problem": "Untuk $A=\\{1/n:n\\in\\mathbb N,\\ n\\ge1\\}$, tentukan $\\overline A$ dan jelaskan mengapa tidak ada titik limit lain.",
      "solution": [
        "Diketahui $1/n\\to0$, sehingga setiap lingkungan $0$ memuat $1/n$ untuk $n$ cukup besar. Karakterisasi penutupan memberi $0\\in\\overline A$. Semua titik $1/n$ juga berada dalam $\\overline A$ karena $A\\subseteq\\overline A$.",
        "Diambil $x\\notin A\\cup\\{0\\}$. Jika $x<0$ atau $x>1$, terdapat lingkungan kecil yang tidak bertemu $A$. Jika $0<x<1$, pilih $N$ dengan $1/N<x/2$. Seluruh anggota $1/n$ untuk $n\\ge N$ berada di $(0,x/2)$ dan berjarak sedikitnya $x/2$ dari $x$. Dari himpunan hingga $\\{1,1/2,\\ldots,1/(N-1)\\}$, tidak ada yang sama dengan $x$, sehingga jarak minimumnya terhadap $x$ positif. Pilih radius lebih kecil daripada setengah jarak minimum itu dan $x/4$; lingkungan tersebut tidak bertemu $A$.",
        "Karena setiap titik di luar $A\\cup\\{0\\}$ mempunyai lingkungan yang tidak bertemu $A$, karakterisasi penutupan menunjukkan $\\overline A=A\\cup\\{0\\}$. Titik $0$ adalah satu-satunya titik baru yang harus ditambahkan."
      ]
    },
    {
      "title": "Batas Interval Setengah Terbuka",
      "forDefinition": "Titik Batas dan Batas Himpunan",
      "problem": "Tentukan $\\partial[0,1)$ dengan memeriksa lingkungan titik ujung dan titik selain ujung.",
      "solution": [
        "Diketahui $A=[0,1)$. Setiap lingkungan $0$ bertemu $A$ pada bilangan positif kecil dan bertemu komplemen $A$ pada bilangan negatif kecil. Setiap lingkungan $1$ bertemu $A$ pada bilangan sedikit lebih kecil dari $1$ dan bertemu komplemen pada titik $1$ sendiri. Dengan definisi, $0,1\\in\\partial A$.",
        "Jika $0<x<1$, terdapat radius lebih kecil daripada $\\min\\{x,1-x\\}$ yang menghasilkan lingkungan seluruhnya dalam $A$; titik ini bukan batas. Jika $x<0$ atau $x>1$, ada lingkungan yang tidak bertemu $A$; titik itu juga bukan batas. Dengan demikian $\\partial[0,1)=\\{0,1\\}$, meskipun hanya $0$ yang merupakan anggota $A$ di antara dua titik batas."
      ]
    },
    {
      "title": "Irisan Tak Hingga Himpunan Terbuka",
      "problem": "Untuk $U_n=(-1/n,1/n)$, $n\\ge1$, hitung $\\bigcap_{n=1}^{\\infty}U_n$ dan tentukan apakah hasilnya terbuka.",
      "solution": [
        "Setiap $U_n$ terbuka karena merupakan interval terbuka. Titik $0$ berada dalam setiap $U_n$, sehingga $\\{0\\}\\subseteq\\bigcap_nU_n$.",
        "Jika $x\\ne0$, sifat Archimedes memberi $n>1/|x|$, sehingga $1/n<|x|$ dan $x\\notin U_n$. Tidak ada titik taknol dalam irisan. Oleh karena itu $\\bigcap_nU_n=\\{0\\}$. Himpunan ini tidak terbuka di $\\mathbb R$: setiap interval berpusat di $0$ mengandung titik selain $0$. Contoh ini menunjukkan alasan syarat 'hingga' pada teorema irisan terbuka tidak boleh dihapus."
      ]
    },
    {
      "title": "Rasional dan Irasional Memiliki Batas Sama",
      "problem": "Tentukan interior, penutupan, dan batas $\\mathbb Q$ dalam $\\mathbb R$.",
      "solution": [
        "Setiap interval terbuka nonkosong mengandung bilangan rasional dan irasional. Karena itu setiap lingkungan titik real bertemu $\\mathbb Q$, sehingga $\\overline{\\mathbb Q}=\\mathbb R$. Di sisi lain, tidak ada lingkungan yang seluruhnya berada dalam $\\mathbb Q$, sebab selalu ada bilangan irasional di dalamnya. Diperoleh $\\operatorname{int}(\\mathbb Q)=\\varnothing$.",
        "Rumus batas memberikan $\\partial\\mathbb Q=\\overline{\\mathbb Q}\\setminus\\operatorname{int}(\\mathbb Q)=\\mathbb R$. Hasil yang sama berlaku untuk $\\mathbb R\\setminus\\mathbb Q$. Ini tidak menyatakan setiap titik real rasional; pernyataannya adalah setiap lingkungan sekecil apa pun bertemu kedua jenis bilangan."
      ]
    },
    {
      "title": "Himpunan Sekuensial Tertutup dengan Interior Kosong",
      "problem": "Buktikan $F=\\{0\\}\\cup\\{1/n:n\\ge1\\}$ tertutup, tetapi interiornya kosong.",
      "solution": [
        "Diambil barisan $(x_k)$ di $F$ yang konvergen ke $x$. Jika $x=0$ atau $x=1/n$ untuk suatu $n$, limitnya berada dalam $F$. Andaikan $x\\notin F$. Argumen pemisahan yang digunakan pada contoh penutupan barisan resiprokal memberikan lingkungan $x$ yang tidak bertemu $F$, bertentangan dengan konvergensi $x_k\\to x$. Berdasarkan kriteria sekuensial, $F$ tertutup.",
        "Untuk interior, setiap interval terbuka nonkosong memuat tak hingga bilangan real, sedangkan $F$ terhitung dan memiliki titik-titik yang terpisah; secara lebih langsung, untuk $x=1/n$ pilih bilangan $y$ sangat dekat ke $x$ tetapi tidak sama dengan salah satu $1/m$, dan untuk $x=0$ pilih bilangan negatif. Tidak ada titik $F$ yang mempunyai lingkungan seluruhnya di $F$, sehingga $\\operatorname{int}(F)=\\varnothing$. Karena $\\overline F=F$, batasnya $\\partial F=F$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "BT-01. Buktikan bahwa gabungan keluarga sebarang himpunan terbuka tetap terbuka, tetapi irisan terhitung himpunan terbuka belum tentu terbuka. Berikan keluarga eksplisit.",
      "hint": "Gunakan radius pada satu anggota gabungan dan interval (-1/n,1/n) untuk bagian kedua.",
      "answer": "Diketahui keluarga $(U_i)_{i\\in I}$ terbuka. Jika $x$ berada dalam gabungannya, ada indeks $i_0$ dengan $x\\in U_{i_0}$. Keterbukaan $U_{i_0}$ memberi $r>0$ sehingga $(x-r,x+r)\\subseteq U_{i_0}$, dan karenanya berada dalam gabungan. Jika keluarga kosong, gabungannya kosong dan tetap terbuka. Untuk irisan terhitung, ambil $U_n=(-1/n,1/n)$. Setiap $U_n$ terbuka. Titik $0$ ada dalam seluruh $U_n$, sedangkan setiap $x\\ne0$ dikeluarkan oleh $U_n$ untuk $n>1/|x|$. Irisannya tepat $\\{0\\}$, yang tidak terbuka karena setiap lingkungannya mengandung titik taknol. Kesimpulan spesifiknya: gabungan tidak memerlukan pembatasan jumlah anggota, tetapi pernyataan irisan terbuka hanya dijamin untuk keluarga hingga."
    },
    {
      "prompt": "BT-02. Buktikan irisan sebarang himpunan tertutup tertutup, lalu berikan contoh gabungan terhitung himpunan tertutup yang tidak tertutup.",
      "hint": "Gunakan De Morgan dan F_n=[-1+1/n,1-1/n] untuk n≥2.",
      "answer": "Diketahui setiap $F_i$ tertutup, sehingga $F_i^c$ terbuka. Hukum De Morgan memberi $(\\bigcap_iF_i)^c=\\bigcup_iF_i^c$. Gabungan di kanan terbuka, sehingga irisan semula tertutup; untuk keluarga kosong, irisan $\\mathbb R$ juga tertutup. Sebagai contoh tandingan gabungan terhitung, tetapkan $F_n=[-1+1/n,1-1/n]$ untuk $n\\ge2$. Setiap $F_n$ tertutup. Jika $-1<x<1$, pilih $n$ cukup besar sehingga $1/n<\\min\\{x+1,1-x\\}$; diperoleh $x\\in F_n$. Sebaliknya, semua anggota setiap $F_n$ terletak ketat antara $-1$ dan $1$. Karena itu $\\bigcup_{n\\ge2}F_n=(-1,1)$, yang tidak tertutup: barisan $1-1/n$ berada dalam gabungan untuk $n\\ge2$ dan konvergen ke $1$ di luar gabungan. Ini memisahkan sifat irisan sebarang dari gabungan hanya hingga."
    },
    {
      "prompt": "BT-03. Untuk $A=(-2,1]\\cup\\{3\\}$, tentukan $\\operatorname{int}(A)$, $\\overline A$, dan $\\partial A$, serta buktikan setiap bagian.",
      "hint": "Periksa titik ujung -2, 1, titik terisolasi 3, dan semua titik selainnya.",
      "answer": "Diketahui $A=(-2,1]\\cup\\{3\\}$. Jika $-2<x<1$, radius setengah minimum jarak ke kedua ujung menghasilkan lingkungan di dalam $A$. Titik $1$ tidak interior karena lingkungan apa pun memuat bilangan di $(1,3)$ di luar $A$; titik $3$ terisolasi dan tidak interior. Maka $\\operatorname{int}(A)=(-2,1)$. Untuk penutupan, setiap lingkungan $-2$ bertemu $(-2,1]$, sedangkan $1$ dan $3$ sudah termasuk $A$. Titik di luar $[-2,1]\\cup\\{3\\}$ memiliki jarak positif ke himpunan itu, sehingga mempunyai lingkungan yang tidak bertemu $A$. Diperoleh $\\overline A=[-2,1]\\cup\\{3\\}$. Selisih penutupan dengan interior memberikan $\\partial A=\\{-2,1,3\\}$. Masing-masing titik tersebut memang mempunyai lingkungan yang bertemu $A$ dan komplemennya; tidak ada titik lain yang demikian."
    },
    {
      "prompt": "BT-04. Untuk $A=\\mathbb Q\\cap[0,1]$, hitung interior, penutupan, dan batas relatif terhadap $\\mathbb R$.",
      "hint": "Gunakan kerapatan rasional dan irasional, tetapi periksa pula lingkungan titik di luar [0,1].",
      "answer": "Diketahui $A$ terdiri dari rasional pada interval tertutup $[0,1]$. Setiap interval terbuka yang bertemu $(0,1)$ mengandung rasional, sehingga semua titik $(0,1)$ berada dalam $\\overline A$. Titik $0$ dan $1$ sendiri rasional, sehingga termasuk $A\\subseteq\\overline A$. Jika $x<0$ atau $x>1$, radius kurang dari jarak ke $[0,1]$ menghasilkan lingkungan yang tidak bertemu $A$. Oleh karena itu $\\overline A=[0,1]$. Setiap lingkungan titik $x\\in A$ memuat bilangan irasional yang tidak berada dalam $A$; tidak ada titik interior. Dengan demikian $\\operatorname{int}(A)=\\varnothing$ dan $\\partial A=\\overline A\\setminus\\operatorname{int}(A)=[0,1]$. Batas ini tidak sama dengan batas interval biasa $\\{0,1\\}$ karena titik-titik irasional di dalam interval juga mendekati $A$ dan komplemennya."
    },
    {
      "prompt": "BT-05. Buktikan $A=\\{1/n:n\\ge1\\}$ tidak tertutup di $\\mathbb R$, lalu tentukan penutupannya tanpa mengasumsikan hasilnya sejak awal.",
      "hint": "Bangun barisan yang konvergen ke titik luar, lalu pisahkan semua titik lain dengan lingkungan.",
      "answer": "Diketahui $1/n\\in A$ untuk setiap $n$ dan $1/n\\to0$, tetapi $0\\notin A$. Kriteria sekuensial memberikan bahwa $A$ tidak tertutup. Setiap anggota $A$ berada dalam $\\overline A$, dan $0$ berada dalam $\\overline A$ karena setiap lingkungan $0$ mengandung $1/n$ untuk $n$ cukup besar. Untuk $x\\notin A\\cup\\{0\\}$ dengan $x<0$ atau $x>1$, jelas ada interval di sekitar $x$ yang tidak bertemu $A$. Jika $0<x<1$, pilih $N$ dengan $1/N<x/2$; semua $1/n$ untuk $n\\ge N$ berada di bawah $x/2$. Jarak $x$ ke anggota himpunan hingga $\\{1,\\ldots,1/(N-1)\\}$ positif karena $x$ tidak sama dengan anggotanya. Radius lebih kecil dari setengah minimum jarak tersebut dan $x/4$ memberi lingkungan bebas $A$. Tidak ada titik lain dalam penutupan, sehingga $\\overline A=A\\cup\\{0\\}$."
    },
    {
      "prompt": "BT-06. Untuk $A,B\\subseteq\\mathbb R$, buktikan $\\overline{A\\cup B}=\\overline A\\cup\\overline B$ dengan dua inklusi.",
      "hint": "Gunakan minimalitas penutupan dan fakta gabungan hingga himpunan tertutup tertutup.",
      "answer": "Diketahui $A\\subseteq A\\cup B$ dan $B\\subseteq A\\cup B$. Karena $\\overline{A\\cup B}$ tertutup dan memuat masing-masing $A$ dan $B$, minimalitas penutupan memberi $\\overline A\\subseteq\\overline{A\\cup B}$ serta $\\overline B\\subseteq\\overline{A\\cup B}$. Penggabungan menghasilkan $\\overline A\\cup\\overline B\\subseteq\\overline{A\\cup B}$. Untuk inklusi sebaliknya, $\\overline A$ dan $\\overline B$ tertutup, sehingga gabungan hingganya tertutup dan memuat $A\\cup B$. Minimalitas $\\overline{A\\cup B}$ memberikan $\\overline{A\\cup B}\\subseteq\\overline A\\cup\\overline B$. Kedua inklusi membuktikan kesamaan, termasuk ketika salah satu himpunan kosong. Argumen ini tidak otomatis berlaku untuk gabungan tak hingga karena gabungan tak hingga himpunan tertutup dapat tidak tertutup."
    },
    {
      "prompt": "BT-07. Buktikan $\\operatorname{int}(A\\cap B)=\\operatorname{int}(A)\\cap\\operatorname{int}(B)$ untuk semua $A,B\\subseteq\\mathbb R$.",
      "hint": "Buktikan dua inklusi menggunakan radius dan minimum dua radius.",
      "answer": "Diketahui $A,B\\subseteq\\mathbb R$. Untuk arah pertama, jika $x\\in\\operatorname{int}(A\\cap B)$, ada $r>0$ sehingga $(x-r,x+r)\\subseteq A\\cap B$. Interval itu termuat sekaligus dalam $A$ dan $B$, sehingga $x\\in\\operatorname{int}(A)\\cap\\operatorname{int}(B)$. Untuk arah sebaliknya, jika $x$ termasuk kedua interior, ada $r_A,r_B>0$ dengan $(x-r_A,x+r_A)\\subseteq A$ dan $(x-r_B,x+r_B)\\subseteq B$. Pilih $r=\\min\\{r_A,r_B\\}>0$. Interval $(x-r,x+r)$ berada dalam $A\\cap B$, sehingga $x\\in\\operatorname{int}(A\\cap B)$. Dua inklusi telah dibuktikan; identitas juga berlaku untuk himpunan kosong karena interiornya kosong."
    },
    {
      "prompt": "BT-08. Buktikan $\\partial(A\\cup B)\\subseteq\\partial A\\cup\\partial B$ dan berikan contoh bahwa inklusi dapat ketat.",
      "hint": "Gunakan identitas batas dan contoh dua interval yang saling menyambung.",
      "answer": "Diketahui $x\\in\\partial(A\\cup B)$. Karakterisasi batas memberi $x\\in\\overline{A\\cup B}=\\overline A\\cup\\overline B$ dan $x\\notin\\operatorname{int}(A\\cup B)$. Jika $x\\in\\overline A$, maka $x\\notin\\operatorname{int}(A)$ karena $\\operatorname{int}(A)\\subseteq\\operatorname{int}(A\\cup B)$. Akibatnya $x\\in\\overline A\\setminus\\operatorname{int}(A)=\\partial A$. Jika $x\\notin\\overline A$, keanggotaan pada gabungan penutupan memaksa $x\\in\\overline B$; argumen serupa memberi $x\\in\\partial B$. Inklusi terbukti. Untuk ketegasan, ambil $A=(0,1)$ dan $B=[1,2)$. Gabungannya $(0,2)$ mempunyai batas $\\{0,2\\}$, sedangkan $\\partial A=\\{0,1\\}$ dan $\\partial B=\\{1,2\\}$. Karena $\\{0,2\\}\\subsetneq\\{0,1,2\\}$, inklusi dapat ketat: titik $1$ berhenti menjadi batas setelah kedua himpunan digabung. "
    }
  ],
  "mistakes": [],
  "connections": []
};
