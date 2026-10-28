import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Independently authored, proof-based lesson on applications of completeness.
 * Mathematical references: R. G. Bartle and D. R. Sherbert, Introduction to
 * Real Analysis, 4th ed., Wiley, 2011, Chapter 2; W. Rudin, Principles of
 * Mathematical Analysis, 3rd ed., McGraw-Hill, 1976, Chapter 1.
 * All examples, derivations, and exercise solutions below are original.
 */
export const supremumApplicationsContent:BookLessonContent={
  intro:[
    "Sifat supremum bukan sekadar cara menamai batas atas terkecil. Dari satu aksioma kelengkapan bilangan real, kita dapat membuktikan bahwa bilangan asli tidak terbatas di atas, setiap interval terbuka memuat bilangan rasional dan irasional, serta setiap bilangan real positif mempunyai akar kuadrat positif. Ketiga fakta ini sering dipakai tanpa pembuktian dalam kalkulus; di sini kita menurunkannya satu per satu.",
    "Langkah pertama adalah sifat Archimedean. Jika bilangan asli mempunyai batas atas, sifat supremum akan menghasilkan suatu bilangan real terkecil yang menjadi batas atasnya. Namun menambahkan satu pada bilangan asli yang cukup dekat dengan supremum justru melampaui batas tersebut. Kontradiksi inilah yang memungkinkan kita memilih bilangan asli sebesar apa pun yang diperlukan.",
    "Selanjutnya, interval $(x,y)$ dengan $x<y$ mempunyai panjang positif $y-x$. Kita memilih penyebut $n$ yang cukup besar sehingga $1/n<y-x$, lalu menggunakan bilangan bulat terdekat di atas $nx$. Hasilnya bukan sekadar perkiraan desimal, melainkan konstruksi eksplisit bilangan rasional di antara $x$ dan $y$.",
    "Keberadaan akar kuadrat memerlukan gagasan berbeda. Untuk $a>0$, kita membentuk himpunan semua $t\\ge0$ dengan $t^2\\le a$, kemudian mengambil supremumnya. Kita membuktikan bahwa supremum tersebut tidak mungkin memiliki kuadrat lebih kecil ataupun lebih besar daripada $a$. Dua pertentangan ini menghasilkan persamaan $x^2=a$ secara tepat, bukan hanya secara numerik.",
    "Visualisasi di bawah menghubungkan pembuktian dengan tiga objek yang benar-benar digunakan: saksi bilangan asli untuk sifat Archimedean, titik rasional di dalam interval terbuka, dan interval bersarang yang mengurung akar kuadrat. Rujukan: Bartle dan Sherbert, Introduction to Real Analysis, edisi ke-4 (2011), Bab 2; Rudin, Principles of Mathematical Analysis, edisi ke-3 (1976), Bab 1."
  ],
  formal:[
    {kind:"definition",title:"Sifat Archimedean",
      statement:"Suatu lapangan terurut $F$ disebut Archimedean apabila untuk setiap $x\\in F$ terdapat bilangan asli $n\\in\\mathbb N\\subseteq F$ sehingga $n>x$. Pada bilangan real, sifat ini akan diturunkan dari aksioma supremum, bukan diasumsikan tanpa pembuktian."},
    {kind:"definition",title:"Himpunan Padat",
      statement:"Untuk $D\\subseteq\\mathbb R$, himpunan $D$ disebut padat di $\\mathbb R$ jika untuk setiap $x,y\\in\\mathbb R$ dengan $x<y$ terdapat $d\\in D$ sehingga $x<d<y$. Syarat ini berlaku pada setiap interval terbuka tak kosong, sekecil apa pun panjangnya."},
    {kind:"definition",title:"Fungsi Lantai",
      statement:"Untuk $x\\in\\mathbb R$, fungsi lantai $\\lfloor x\\rfloor$ adalah bilangan bulat $m$ yang memenuhi $m\\le x<m+1$. Keberadaan dan ketunggalan bilangan bulat tersebut akan dibuktikan setelah sifat Archimedean."},
    {kind:"definition",title:"Akar Kuadrat Positif",
      statement:"Jika $a>0$, akar kuadrat positif dari $a$ adalah bilangan real $x>0$ yang memenuhi $x^2=a$. Apabila keberadaan dan ketunggalannya sudah dibuktikan, bilangan itu dinotasikan dengan $\\sqrt a$."},
    {kind:"definition",title:"Bilangan Irasional",
      statement:"Bilangan real $x$ disebut irasional jika $x\\notin\\mathbb Q$, yaitu tidak terdapat $p\\in\\mathbb Z$ dan $q\\in\\mathbb Z\\setminus\\{0\\}$ dengan $x=p/q$. Sifat irasional tidak berarti bilangan itu tidak dapat didekati oleh pecahan."
    },
    {kind:"theorem",title:"Sifat Archimedean Bilangan Real",
      statement:"Untuk setiap $x\\in\\mathbb R$ terdapat $n\\in\\mathbb N$ sehingga $n>x$.",
      given:"Aksioma kelengkapan supremum pada $\\mathbb R$ dan $x\\in\\mathbb R$.",
      toProve:"Ada $n\\in\\mathbb N$ yang melampaui $x$.",
      proof:[
        "Andaikan pernyataan salah. Maka terdapat $x_0\\in\\mathbb R$ sehingga $n\\le x_0$ untuk setiap $n\\in\\mathbb N$. Artinya, himpunan $\\mathbb N$ tak kosong dan terbatas di atas. Aksioma supremum menjamin adanya $u=\\sup\\mathbb N\\in\\mathbb R$.",
        "Bilangan $u-1$ tidak mungkin menjadi batas atas $\\mathbb N$, sebab $u$ adalah batas atas terkecil dan $u-1<u$. Oleh karena itu terdapat $n\\in\\mathbb N$ dengan $n>u-1$.",
        "Karena $n\\in\\mathbb N$, berlaku $n+1\\in\\mathbb N$. Namun $n>u-1$ mengakibatkan $n+1>u$, bertentangan dengan sifat $u$ sebagai batas atas seluruh anggota $\\mathbb N$.",
        "Kontradiksi menunjukkan bahwa $\\mathbb N$ tidak terbatas di atas. Dengan demikian, untuk setiap $x\\in\\mathbb R$ dapat dipilih $n\\in\\mathbb N$ dengan $n>x$."
      ],
      explanation:"Pernyataan ini lebih kuat daripada pengamatan bahwa beberapa bilangan asli besar. Kita membuktikan bahwa tidak ada satu pun bilangan real yang membatasi seluruh bilangan asli."
    },
    {kind:"corollary",title:"Penyebut Dapat Dipilih Sekecil Mungkin",
      statement:"Untuk setiap $\\varepsilon>0$ terdapat $n\\in\\mathbb N$ dengan $0<1/n<\\varepsilon$.",
      proof:[
        "Ambil sebarang $\\varepsilon>0$. Karena $1/\\varepsilon$ adalah bilangan real, sifat Archimedean memberikan $n\\in\\mathbb N$ dengan $n>1/\\varepsilon$.",
        "Kedua bilangan $n$ dan $1/\\varepsilon$ positif. Membalik ketaksamaan positif membalik arahnya, sehingga $0<1/n<\\varepsilon$. Ini menunjukkan bahwa panjang langkah $1/n$ dapat dibuat lebih kecil daripada batas positif yang ditentukan."
      ],
      explanation:"Akibat ini merupakan dasar pemilihan indeks atau penyebut dalam pembuktian limit, aproksimasi, dan kerapatan bilangan rasional."
    },
    {kind:"lemma",title:"Keberadaan dan Ketunggalan Fungsi Lantai",
      statement:"Untuk setiap $x\\in\\mathbb R$ terdapat tepat satu $m\\in\\mathbb Z$ yang memenuhi $m\\le x<m+1$.",
      proof:[
        "Ambil sebarang $x\\in\\mathbb R$. Menurut sifat Archimedean, pilih $N\\in\\mathbb N$ dengan $N>|x|+1$. Maka $-N<x<N$, sehingga himpunan $S=\\{k\\in\\mathbb Z:-N\\le k\\le x\\}$ tak kosong (memuat $-N$) dan hingga (seluruh anggotanya berada di antara $-N$ dan $N$).",
        "Karena $S$ merupakan himpunan hingga tak kosong bilangan bulat, terdapat anggota terbesar $m=\\max S$. Jelas $m\\le x$. Jika $m+1\\le x$, maka $m+1$ juga anggota $S$, sebab $m+1\\ge -N$ dan $m+1\\le x$, bertentangan dengan maksimalitas $m$. Jadi $x<m+1$.",
        "Untuk ketunggalan, andaikan $m,k\\in\\mathbb Z$ sama-sama memenuhi $m\\le x<m+1$ dan $k\\le x<k+1$. Jika $m<k$, karena keduanya bulat maka $m+1\\le k\\le x$, bertentangan dengan $x<m+1$. Kasus $k<m$ menghasilkan kontradiksi serupa. Karena itu $m=k$."
      ],
      explanation:"Definisi fungsi lantai tidak bergantung pada gambaran garis bilangan. Bukti ini juga berlaku ketika $x$ negatif, misalnya $\\lfloor-1.3\\rfloor=-2$."
    },
    {kind:"theorem",title:"Kerapatan Bilangan Rasional",
      statement:"Jika $x,y\\in\\mathbb R$ dan $x<y$, maka terdapat $r\\in\\mathbb Q$ sehingga $x<r<y$.",
      given:"Dua bilangan real $x<y$.",
      toProve:"Ada pecahan $m/n$ dengan $m\\in\\mathbb Z$, $n\\in\\mathbb N$, dan $x<m/n<y$.",
      proof:[
        "Karena $y-x>0$, akibat Archimedean memungkinkan kita memilih $n\\in\\mathbb N$ dengan $1/n<y-x$, atau secara ekuivalen $n(y-x)>1$. Perkalian dengan $n>0$ memberi $ny>nx+1$.",
        "Definisikan $m=\\lfloor nx\\rfloor+1\\in\\mathbb Z$. Menurut sifat fungsi lantai, $\\lfloor nx\\rfloor\\le nx<\\lfloor nx\\rfloor+1=m$, sehingga $nx<m$. Di sisi lain, $\\lfloor nx\\rfloor\\le nx$ memberikan $m\\le nx+1$.",
        "Dengan menggabungkan kedua batas diperoleh $nx<m\\le nx+1<ny$. Membagi seluruh ruas dengan $n>0$ menghasilkan $x<m/n<y$.",
        "Bilangan $r=m/n$ rasional karena $m\\in\\mathbb Z$ dan $n\\in\\mathbb N$. Kedua ketaksamaan bersifat ketat, jadi $r$ benar-benar berada di dalam interval terbuka $(x,y)$."
      ],
      explanation:"Penyebut $n$ dipilih berdasarkan panjang interval, lalu pembilang $m$ ditentukan oleh fungsi lantai. Ini konstruksi yang dapat diuji secara numerik pada laboratorium interval."
    },
    {kind:"theorem",title:"Keberadaan dan Ketunggalan Akar Kuadrat Positif",
      statement:"Untuk setiap $a\\in\\mathbb R$ dengan $a>0$ terdapat tepat satu $x\\in\\mathbb R$ dengan $x>0$ dan $x^2=a$.",
      given:"Bilangan real $a>0$ dan aksioma supremum.",
      toProve:"Ada tepat satu $x>0$ dengan $x^2=a$.",
      proof:[
        "Definisikan $S=\\{t\\in\\mathbb R:t\\ge0,\\ t^2\\le a\\}$. Himpunan ini tidak kosong karena $0\\in S$. Jika $t>a+1$, maka $t>1$ dan $t>a$, sehingga $t^2>t>a$; jadi setiap $t\\in S$ memenuhi $t\\le a+1$. Dengan demikian $S$ terbatas di atas dan mempunyai supremum $x=\\sup S\\ge0$.",
        "Buktikan dahulu $x>0$. Pilih $h=\\min\\{1,a\\}/2$. Karena $a>0$, berlaku $h>0$ dan $h<1$. Jika $a\\le1$, maka $h=a/2$ sehingga $h^2<a$; jika $a>1$, maka $h=1/2$ sehingga $h^2<a$. Jadi $h\\in S$ dan $x\\ge h>0$.",
        "Andaikan $x^2<a$. Ambil $h>0$ dengan $h<1$ dan $h<(a-x^2)/(2x+1)$, misalnya setengah dari nilai minimum kedua batas. Karena $h^2<h$, berlaku $(x+h)^2=x^2+2xh+h^2<x^2+(2x+1)h<a$. Maka $x+h\\in S$, padahal $x+h>x=\\sup S$. Ini kontradiksi.",
        "Andaikan $x^2>a$. Karena $x>0$, pilih $h>0$ dengan $h<x$ dan $2xh<x^2-a$. Maka $(x-h)^2=x^2-2xh+h^2>a$. Setiap $t\\in S$ harus memenuhi $t<x-h$: jika $t\\ge x-h>0$, maka $t^2\\ge(x-h)^2>a$, bertentangan dengan definisi $S$. Jadi $x-h$ adalah batas atas $S$ yang lebih kecil daripada $x$, juga kontradiksi.",
        "Kedua pertentangan meniadakan $x^2<a$ dan $x^2>a$, sehingga $x^2=a$. Untuk ketunggalan, jika $y>0$ dan $y^2=a$, maka $(x-y)(x+y)=x^2-y^2=0$. Karena $x+y>0$, diperoleh $x=y$."
      ],
      explanation:"Kelengkapan menghasilkan titik yang tepat dari himpunan semua pendekatan bawah. Argumen perturbasi positif $h$ memastikan bahwa supremum tidak berhenti terlalu rendah ataupun terlalu tinggi."
    },
    {kind:"lemma",title:"Irasionalitas Akar Dua",
      statement:"Bilangan $\\sqrt2$ tidak rasional.",
      proof:[
        "Andaikan $\\sqrt2=p/q$ untuk bilangan bulat $p,q$ dengan $q>0$ dan $\\gcd(|p|,q)=1$. Representasi tereduksi dapat dipilih karena setiap bilangan rasional memiliki pecahan dengan pembilang dan penyebut relatif prima.",
        "Mengkuadratkan kedua ruas menghasilkan $p^2=2q^2$. Maka $p^2$ genap. Jika $p$ ganjil, dapat ditulis $p=2k+1$ dan $p^2=4k(k+1)+1$ ganjil; jadi $p$ harus genap. Tulis $p=2s$.",
        "Substitusi memberikan $4s^2=2q^2$, sehingga $q^2=2s^2$ juga genap. Dengan alasan paritas yang sama, $q$ genap. Artinya $p$ dan $q$ sama-sama habis dibagi $2$, bertentangan dengan $\\gcd(|p|,q)=1$. Jadi $\\sqrt2\\notin\\mathbb Q$."
      ],
      explanation:"Keberadaan $\\sqrt2$ telah dijamin oleh teorema sebelumnya. Bukti paritas menunjukkan bahwa bilangan tersebut tidak dapat direpresentasikan sebagai rasio dua bilangan bulat."
    },
    {kind:"theorem",title:"Kerapatan Bilangan Irasional",
      statement:"Untuk setiap $x,y\\in\\mathbb R$ dengan $x<y$ terdapat $z\\in\\mathbb R\\setminus\\mathbb Q$ sehingga $x<z<y$.",
      proof:[
        "Karena $x<y$, berlaku $x-\\sqrt2<y-\\sqrt2$. Menurut teorema kerapatan bilangan rasional, pilih $r\\in\\mathbb Q$ sehingga $x-\\sqrt2<r<y-\\sqrt2$.",
        "Definisikan $z=r+\\sqrt2$. Dengan menambahkan $\\sqrt2$ pada pertidaksamaan diperoleh $x<z<y$. Andaikan $z$ rasional; karena $r$ rasional, selisih $z-r=\\sqrt2$ juga rasional, bertentangan dengan lemma irasionalitas akar dua.",
        "Jadi $z$ irasional dan terletak di dalam $(x,y)$. Kesimpulannya, setiap interval terbuka tak kosong memuat bilangan rasional maupun bilangan irasional."
      ],
      explanation:"Dua himpunan yang saling lepas, $\\mathbb Q$ dan $\\mathbb R\\setminus\\mathbb Q$, sama-sama padat di garis real. Tidak ada interval terbuka yang hanya memuat salah satunya."
    },
    {kind:"proposition",title:"Ketelitian Metode Pembagian Dua untuk Akar",
      statement:"Misalkan $a>0$ dan $M=\\max\\{1,a\\}$. Mulai dari $[L_0,U_0]=[0,M]$. Pada langkah ke-$k$, ambil $c_k=(L_k+U_k)/2$ dan pilih setengah interval yang tetap memuat $\\sqrt a$. Maka $L_k\\le\\sqrt a\\le U_k$ dan $0\\le U_k-L_k\\le M/2^k$ untuk setiap $k\\ge0$.",
      proof:[
        "Karena $a>0$, $0<\\sqrt a$. Jika $a\\ge1$, maka $M=a$ dan $M^2=a^2\\ge a$; jika $0<a<1$, maka $M=1$ dan $M^2=1>a$. Jadi $0\\le\\sqrt a\\le M$ dan klaim berlaku untuk $k=0$.",
        "Andaikan $L_k\\le\\sqrt a\\le U_k$. Karena fungsi $t\\mapsto t^2$ naik pada $[0,\\infty)$, jika $c_k^2<a$, akar berada pada $[c_k,U_k]$; jika $c_k^2>a$, akar berada pada $[L_k,c_k]$. Jika $c_k^2=a$, interval dapat dipersempit menjadi $[c_k,c_k]$.",
        "Dalam ketiga kasus, interval baru tetap memuat $\\sqrt a$ dan panjangnya paling besar setengah panjang interval sebelumnya. Dengan induksi, $U_k-L_k\\le (U_0-L_0)/2^k=M/2^k$ untuk semua $k\\ge0$.",
        "Setiap titik di dalam interval, termasuk titik tengahnya, mempunyai galat terhadap $\\sqrt a$ paling besar $U_k-L_k$. Oleh karena itu batas galat yang ditampilkan oleh laboratorium berasal dari pembuktian, bukan dari pembulatan desimal."
      ],
      explanation:"Setiap pembagian dua mengurangi lebar interval paling sedikit separuh. Walaupun visualisasi memakai bilangan desimal untuk menggambar, jaminan galatnya mengikuti pertidaksamaan eksak."
    }
  ],
  examples:[
    {title:"Saksi Sifat Archimedean",forDefinition:"Sifat Archimedean",
      problem:"Untuk $x=17.4$, tentukan bilangan asli terkecil $n$ dengan $n>x$. Jelaskan mengapa pilihan ini memenuhi sifat yang didefinisikan.",
      solution:["Bilangan asli $17$ belum memenuhi syarat karena $17<17.4$. Bilangan asli berikutnya adalah $18$, dan $18>17.4$.","Secara umum, jika $x\\ge0$, bilangan bulat $\\lfloor x\\rfloor+1$ selalu lebih besar daripada $x$. Untuk $x=17.4$, nilai lantainya $17$, sehingga $n=18$.","Pemilihan satu saksi untuk nilai $x$ tertentu memeriksa definisi pada kasus itu; teorema Archimedean membuktikan bahwa saksi selalu ada untuk setiap real."],
      conclusion:"Bilangan asli terkecil yang memenuhi syarat adalah $n=18$."},
    {title:"Rasional di Interval Sempit",forDefinition:"Himpunan Padat",
      problem:"Perlihatkan secara eksak bahwa interval $(1.4,1.5)$ memuat suatu bilangan rasional.",
      solution:["Tuliskan ujung interval sebagai $1.4=7/5$ dan $1.5=3/2$. Ambil $r=10/7$, yang merupakan bilangan rasional karena pembilang dan penyebutnya bulat dan penyebut tak nol.","Untuk batas kiri, $7/5<10/7$ ekuivalen dengan $49<50$ setelah kedua ruas dikalikan dengan $35>0$.","Untuk batas kanan, $10/7<3/2$ ekuivalen dengan $20<21$ setelah kedua ruas dikalikan dengan $14>0$. Jadi kedua ketaksamaan ketat berlaku."],
      conclusion:"Diperoleh $7/5<10/7<3/2$, sehingga $10/7\\in(1.4,1.5)$."},
    {title:"Lantai Bilangan Negatif",forDefinition:"Fungsi Lantai",
      problem:"Tentukan $\\lfloor-2.3\\rfloor$ dan jelaskan mengapa membuang bagian desimal memberikan jawaban yang salah.",
      solution:["Cari bilangan bulat $m$ yang memenuhi $m\\le-2.3<m+1$. Bilangan $m=-3$ memenuhi $-3\\le-2.3<-2$.","Pilihan $m=-2$ tidak memenuhi syarat karena $-2\\le-2.3$ salah. Dengan demikian, fungsi lantai bukan operasi memangkas angka di belakang koma.","Garis bilangan menunjukkan bahwa $-3$ berada di sebelah kiri $-2.3$, sedangkan $-2$ berada di sebelah kanannya."],
      conclusion:"Nilai yang benar adalah $\\lfloor-2.3\\rfloor=-3$."},
    {title:"Akar Kuadrat sebagai Solusi Positif",forDefinition:"Akar Kuadrat Positif",
      problem:"Periksa apakah $-3$ dan $3$ sama-sama merupakan akar kuadrat positif dari $9$.",
      solution:["Kedua bilangan memenuhi persamaan $x^2=9$, sebab $(-3)^2=3^2=9$. Akan tetapi, definisi akar kuadrat positif mensyaratkan $x>0$.","Bilangan $-3$ tidak memenuhi syarat positif. Bilangan $3$ memenuhi $3>0$ dan $3^2=9$, sehingga $\\sqrt9=3$.","Persamaan $x^2=9$ mempunyai dua penyelesaian, tetapi notasi $\\sqrt9$ menyatakan satu nilai positif yang unik."],
      conclusion:"Akar kuadrat positif dari $9$ adalah $3$, bukan $-3$."},
    {title:"Mengapa Akar Dua Irasional",forDefinition:"Bilangan Irasional",
      problem:"Buktikan bahwa tidak ada pecahan bilangan bulat tereduksi $p/q$ yang sama dengan $\\sqrt2$.",
      solution:["Andaikan $p/q=\\sqrt2$ dengan $q>0$ dan $\\gcd(|p|,q)=1$. Mengkuadratkan menghasilkan $p^2=2q^2$, sehingga $p$ genap.","Tuliskan $p=2k$. Maka $4k^2=2q^2$, atau $q^2=2k^2$, sehingga $q$ juga genap.","Ini bertentangan dengan $\\gcd(|p|,q)=1$. Jadi anggapan bahwa $\\sqrt2$ adalah rasional tidak mungkin benar."],
      conclusion:"Diperoleh $\\sqrt2\\in\\mathbb R\\setminus\\mathbb Q$."},
    {title:"Konstruksi Rasional Tanpa Tebakan",
      problem:"Gunakan teorema kerapatan untuk mencari bilangan rasional dalam interval $(\\sqrt2,3/2)$ tanpa memakai pendekatan desimal sebagai bukti.",
      solution:["Karena $\\sqrt2<3/2$ (kuadrat kedua ruas positif memberi $2<9/4$), panjang interval positif. Pilih $n=12$; ketaksamaan $12(3/2-\\sqrt2)>1$ benar karena $17/12>\\sqrt2$ dapat diperiksa dengan $289>288$.","Ambil $m=17$. Dari $17^2=289>288=2\\cdot12^2$ diperoleh $\\sqrt2<17/12$, sebab kedua bilangan positif.","Dari $17<18$ diperoleh $17/12<18/12=3/2$. Dengan demikian $17/12$ berada ketat di antara kedua ujung interval."],
      conclusion:"Salah satu saksi rasional adalah $17/12$."},
    {title:"Mengurung Akar Dua dengan Interval",
      problem:"Mulai dari $[0,2]$ dan lakukan empat langkah pembagian dua untuk mengurung $\\sqrt2$.",
      solution:["Titik tengah pertama $1$ mempunyai kuadrat $1<2$, jadi interval baru $[1,2]$. Titik tengah kedua $3/2$ mempunyai kuadrat $9/4>2$, jadi interval menjadi $[1,3/2]$.","Titik tengah ketiga $5/4$ mempunyai kuadrat $25/16<2$, sehingga interval menjadi $[5/4,3/2]$. Titik tengah keempat $11/8$ mempunyai kuadrat $121/64<2$, sehingga interval menjadi $[11/8,3/2]$.","Lebar interval akhir $3/2-11/8=1/8$, sesuai batas $M/2^4=2/16=1/8$. Kedua ujungnya dapat diverifikasi tanpa menghitung desimal akar."],
      conclusion:"Setelah empat langkah, $11/8\\le\\sqrt2\\le3/2$."},
    {title:"Irasional di Antara Dua Rasional",
      problem:"Temukan bilangan irasional dalam interval $(1,3/2)$ dan buktikan kedua sifatnya.",
      solution:["Pilih $z=\\sqrt2$. Dari $1^2<2$ dan $2<(3/2)^2$ serta semua bilangan yang dibandingkan positif, diperoleh $1<\\sqrt2<3/2$.","Lemma irasionalitas akar dua membuktikan bahwa $\\sqrt2\\notin\\mathbb Q$; jadi sifat irasional tidak didasarkan pada banyaknya digit desimal.","Bilangan ini sekaligus menunjukkan bahwa sebuah interval dengan ujung rasional dapat memuat bilangan irasional."],
      conclusion:"Saksi yang diminta adalah $z=\\sqrt2$."}
  ],
  exercises:[
    {prompt:"Buktikan bahwa untuk setiap $x\\in\\mathbb R$ terdapat $n\\in\\mathbb N$ sehingga $n>|x|+100$. Tuliskan secara eksplisit teorema yang digunakan.",
      hint:"Terapkan sifat Archimedean pada bilangan real $|x|+100$.",
      answer:"Ambil sebarang $x\\in\\mathbb R$. Bilangan $|x|+100$ adalah real dan tidak negatif. Sifat Archimedean menyatakan bahwa untuk setiap real $t$ terdapat bilangan asli $n$ yang memenuhi $n>t$. Terapkan teorema tersebut pada $t=|x|+100$. Diperoleh $n\\in\\mathbb N$ dengan $n>|x|+100$. Tidak diperlukan perhitungan nilai $x$ karena kuantor teorema berlaku untuk semua bilangan real."},
    {prompt:"Tentukan $\\lfloor-7/3\\rfloor$ dan buktikan bahwa bilangan bulat lain tidak dapat memenuhi ketaksamaan definisinya.",
      hint:"Cari $m$ dengan $m\\le-7/3<m+1$; gunakan selisih dua bilangan bulat.",
      answer:"Karena $-3\\le-7/3<-2$, bilangan $m=-3$ memenuhi definisi fungsi lantai. Andaikan ada bilangan bulat lain $k$ dengan $k\\le-7/3<k+1$. Jika $k>-3$, maka $k\\ge-2$ sehingga $k\\le-7/3$ salah. Jika $k<-3$, maka $k\\le-4$ sehingga $k+1\\le-3\\le-7/3$ dan ketaksamaan ketat $-7/3<k+1$ salah. Jadi hanya $m=-3$ yang mungkin."},
    {prompt:"Buktikan bahwa untuk setiap $x<y$ terdapat bilangan rasional $r$ dalam $(x,y)$ dengan penyebut positif $n$ yang memenuhi $n>100$.",
      hint:"Pilih $n>\\max\\{100,1/(y-x)\\}$ lalu gunakan $m=\\lfloor nx\\rfloor+1$.",
      answer:"Karena $y-x>0$, bilangan $\\max\\{100,1/(y-x)\\}$ terdefinisi. Sifat Archimedean memberikan $n\\in\\mathbb N$ yang lebih besar dari batas tersebut. Maka $n>100$ dan $n(y-x)>1$. Ambil $m=\\lfloor nx\\rfloor+1$. Definisi lantai memberikan $nx<m\\le nx+1<ny$. Membagi dengan $n>0$ menghasilkan $x<m/n<y$. Pecahan $m/n$ rasional dan penyebut yang dipilih benar-benar melebihi $100$."},
    {prompt:"Perlihatkan bahwa interval $(0,1/1000)$ memuat bilangan rasional positif dan bilangan irasional positif. Berikan pembuktian dengan pertidaksamaan eksak.",
      hint:"Untuk rasional coba $1/2000$. Untuk irasional gunakan $\\sqrt2/2000$.",
      answer:"Pilih $r=1/2000$. Jelas $r>0$, dan $1/2000<1/1000$ karena $2000>1000$ dan kedua penyebut positif. Untuk bilangan irasional pilih $z=\\sqrt2/2000$. Karena $1<\\sqrt2<2$, membagi dengan $2000>0$ memberi $0<z<1/1000$. Jika $z$ rasional, maka $2000z=\\sqrt2$ juga rasional, bertentangan dengan lemma irasionalitas akar dua. Jadi kedua jenis bilangan terdapat dalam interval tersebut."},
    {prompt:"Dengan definisi supremum, buktikan bahwa $\\sqrt5$ ada. Jelaskan secara rinci mengapa supremum $S=\\{t\\ge0:t^2\\le5\\}$ tidak dapat mempunyai kuadrat lebih besar daripada $5$.",
      hint:"Jika $x=\\sup S$ dan $x^2>5$, pilih $h$ kecil dengan $0<h<x$ dan $2xh<x^2-5$.",
      answer:"Himpunan $S$ memuat $0$ dan dibatasi di atas oleh $6$, sebab $t>6$ mengakibatkan $t^2>5$. Maka $x=\\sup S$ ada. Karena $1\\in S$, berlaku $x\\ge1>0$. Andaikan $x^2>5$. Pilih $h>0$ dengan $h<x$ dan $2xh<x^2-5$. Diperoleh $(x-h)^2=x^2-2xh+h^2>5$. Jika ada $t\\in S$ dengan $t\\ge x-h$, maka $t^2\\ge(x-h)^2>5$, kontradiksi. Jadi $x-h$ batas atas $S$ yang lebih kecil daripada supremum $x$. Ini mustahil; karena kasus $x^2<5$ juga disingkirkan oleh perturbasi ke atas, diperoleh $x^2=5$."},
    {prompt:"Buktikan keunikan akar kuadrat positif dari $a>0$ tanpa menggunakan grafik fungsi $y=x^2$.",
      hint:"Faktorkan $x^2-y^2$ untuk dua kandidat positif $x$ dan $y$.",
      answer:"Misalkan $x>0$ dan $y>0$ sama-sama memenuhi $x^2=a$ dan $y^2=a$. Mengurangkan kedua persamaan memberi $x^2-y^2=0$. Identitas selisih kuadrat menghasilkan $(x-y)(x+y)=0$. Karena $x+y>0$, faktor $x+y$ tidak nol. Sifat lapangan bilangan real mengharuskan faktor yang lain nol, yakni $x-y=0$. Jadi $x=y$. Syarat positif penting untuk memilih satu akar; tanpa syarat itu, $x$ dan $-x$ memiliki kuadrat sama."},
    {prompt:"Dari interval awal $[0,2]$, lakukan empat langkah pembagian dua untuk $\\sqrt2$ dan berikan batas galat yang terjamin jika titik tengah interval akhir dipakai sebagai aproksimasi.",
      hint:"Bandingkan kuadrat titik tengah dengan $2$; panjang interval menjadi setengah pada setiap langkah.",
      answer:"Langkah pertama: $1^2<2$, sehingga interval $[1,2]$. Kedua: $(3/2)^2>2$, sehingga $[1,3/2]$. Ketiga: $(5/4)^2<2$, sehingga $[5/4,3/2]$. Keempat: $(11/8)^2<2$, sehingga $[11/8,3/2]$. Panjang interval adalah $3/2-11/8=1/8$. Titik tengahnya $23/16$. Karena akar terletak dalam interval, galat titik tengah paling besar setengah panjang interval, yakni $1/16$. Batas ini bersifat eksak dan tidak membutuhkan nilai desimal $\\sqrt2$."},
    {prompt:"Buktikan bahwa untuk setiap $x<y$ dan setiap bilangan irasional tetap $\\alpha$, terdapat bilangan irasional $z\\in(x,y)$ berbentuk $z=r+\\alpha$ dengan $r\\in\\mathbb Q$.",
      hint:"Terapkan kerapatan rasional pada interval $(x-\\alpha,y-\\alpha)$.",
      answer:"Karena $x<y$, berlaku $x-\\alpha<y-\\alpha$. Kerapatan $\\mathbb Q$ menjamin adanya $r\\in\\mathbb Q$ dengan $x-\\alpha<r<y-\\alpha$. Tambahkan $\\alpha$ untuk memperoleh $x<r+\\alpha<y$. Misalkan $z=r+\\alpha$. Jika $z$ rasional, maka $\\alpha=z-r$ rasional karena selisih dua rasional rasional, bertentangan dengan hipotesis bahwa $\\alpha$ irasional. Dengan demikian $z$ irasional dan terletak dalam interval yang ditentukan."}
  ],
  mistakes:[],
  connections:[]
};
