import type { BookLessonContent } from "@/data/book-content-types";

/** Original DMath Learning exposition. References: Rosen (2019), ch. 1;
 * Velleman, How to Prove It, 3rd ed. (2019), chs. 1–3. */
export const inferenceRulesContent: BookLessonContent = {
  intro: [
    "Dari premis yang benar, kesimpulan tidak boleh dipilih hanya karena terdengar masuk akal. Aturan inferensi adalah pola argumen yang menjamin: pada setiap penilaian kebenaran yang membuat semua premis benar, kesimpulannya juga benar. Perbedaan antara bentuk argumen dan isi kalimat akan diperiksa melalui valuasi dan contoh tandingan.",
    "Kita mulai dari implikasi dan aturan proposisional, lalu beralih ke kuantor. Pada kuantor eksistensial, saksi yang diperkenalkan harus baru dan tidak boleh diasumsikan memiliki sifat tambahan. Pada generalisasi universal, unsur yang digunakan harus benar-benar sebarang. Dua pembatasan ini penting agar argumen tidak menyelundupkan kesimpulan.",
    "Rujukan: Kenneth H. Rosen, Discrete Mathematics and Its Applications, edisi ke-8, McGraw-Hill, 2019, bagian Rules of Inference; Daniel J. Velleman, How to Prove It, edisi ke-3, Cambridge University Press, 2019, pembahasan argumen dan kuantor. Seluruh contoh dan soal di bawah disusun khusus untuk DMath Learning."
  ],
  formal: [
    {kind:"definition",title:"Valuasi Proposisional",statement:"Valuasi $v$ memberikan tepat satu nilai dalam $\\{\\mathrm{B},\\mathrm{S}\\}$ kepada setiap variabel proposisional dan memperluasnya secara rekursif ke formula majemuk menurut tabel kebenaran. Khususnya, $v(P\\to Q)=\\mathrm{S}$ tepat ketika $v(P)=\\mathrm{B}$ dan $v(Q)=\\mathrm{S}$."},
    {kind:"definition",title:"Argumen Valid",statement:"Argumen dengan premis $\\Gamma=\\{P_1,\\ldots,P_n\\}$ dan kesimpulan $Q$ disebut valid, ditulis $\\Gamma\\models Q$, apabila untuk setiap valuasi $v$, jika $v(P_i)=\\mathrm{B}$ bagi seluruh $i$, maka $v(Q)=\\mathrm{B}$. Validitas tidak menyatakan bahwa premis-premisnya memang benar di dunia nyata."},
    {kind:"definition",title:"Aturan Inferensi",statement:"Aturan inferensi adalah skema perpindahan dari satu atau beberapa formula premis menuju formula kesimpulan yang valid untuk setiap substitusi seragam formula ke variabel skema. Notasi $P_1,\\ldots,P_n\\;\\therefore\\;Q$ membedakan premis dari kesimpulan."},
    {kind:"definition",title:"Kontramodel",statement:"Kontramodel bagi argumen $P_1,\\ldots,P_n\\;\\therefore\\;Q$ ialah valuasi atau interpretasi yang membuat semua premis benar tetapi kesimpulan salah. Satu kontramodel cukup untuk membuktikan argumen tidak valid."},
    {kind:"proposition",title:"Modus Ponens",statement:"Untuk sebarang formula proposisional $P,Q$, argumen $P,\\;P\\to Q\\;\\therefore\\;Q$ valid.",proof:[
      "Diketahui valuasi sebarang $v$ yang membuat $P$ dan $P\\to Q$ benar. Dibuktikan bahwa $Q$ benar pada valuasi yang sama.",
      "Karena $v(P)=\\mathrm{B}$, implikasi $P\\to Q$ hanya dapat bernilai benar jika $v(Q)=\\mathrm{B}$. Jika $Q$ salah, baris $P$ benar dan $Q$ salah justru membuat implikasi salah, bertentangan dengan premis kedua.",
      "Jadi tidak ada valuasi yang membuat kedua premis benar dan kesimpulan salah. Dengan demikian, modus ponens merupakan aturan inferensi yang valid."
    ],explanation:"Aturan ini menggunakan arah implikasi dari anteseden ke konsekuen; membaliknya menjadi $Q\\therefore P$ tidak sah."},
    {kind:"proposition",title:"Modus Tollens",statement:"Untuk sebarang formula $P,Q$, argumen $P\\to Q,\\;\\neg Q\\;\\therefore\\;\\neg P$ valid.",proof:[
      "Diketahui valuasi $v$ yang membuat $P\\to Q$ dan $\\neg Q$ benar. Dengan demikian $Q$ salah. Dibuktikan bahwa $P$ salah.",
      "Andaikan $P$ benar. Karena $Q$ salah, menurut tabel kebenaran implikasi, $P\\to Q$ salah. Ini bertentangan dengan premis bahwa implikasi benar.",
      "Oleh sebab itu $P$ harus salah dan $\\neg P$ benar. Argumen berlaku untuk setiap valuasi yang memenuhi premis. Dengan demikian, modus tollens terbukti valid."
    ]},
    {kind:"proposition",title:"Silogisme Hipotetis",statement:"Untuk sebarang formula $P,Q,R$, argumen $P\\to Q,\\;Q\\to R\\;\\therefore\\;P\\to R$ valid.",proof:[
      "Diketahui dua implikasi benar pada suatu valuasi sebarang. Dibuktikan $P\\to R$ benar. Untuk memeriksa implikasi terakhir, cukup memeriksa keadaan ketika $P$ benar, sebab ketika $P$ salah implikasi otomatis benar.",
      "Jika $P$ benar, kebenaran $P\\to Q$ memaksa $Q$ benar. Selanjutnya kebenaran $Q\\to R$ memaksa $R$ benar. Jadi tidak mungkin $P$ benar sekaligus $R$ salah.",
      "Pada kedua kemungkinan nilai $P$, formula $P\\to R$ benar. Dengan demikian, silogisme hipotetis valid tanpa perlu mengasumsikan $P$ benar sebagai premis global."
    ]},
    {kind:"proposition",title:"Silogisme Disjungtif",statement:"Untuk sebarang formula $P,Q$, argumen $P\\lor Q,\\;\\neg P\\;\\therefore\\;Q$ valid, dengan $\\lor$ disjungsi inklusif.",proof:[
      "Diketahui $P\\lor Q$ benar dan $\\neg P$ benar pada valuasi yang sama. Dibuktikan bahwa $Q$ benar.",
      "Premis kedua berarti $P$ salah. Disjungsi inklusif bernilai benar jika sedikitnya satu komponennya benar. Karena komponen $P$ salah, satu-satunya cara memenuhi premis pertama ialah membuat $Q$ benar.",
      "Jadi setiap valuasi yang memenuhi kedua premis juga memenuhi $Q$. Dengan demikian, aturan silogisme disjungtif terbukti."
    ]},
    {kind:"proposition",title:"Instansiasi Universal dan Generalisasi Universal",statement:"Misalkan $D\\ne\\varnothing$ dan $P(x)$ predikat pada $D$. (i) Dari $\\forall x\\in D\\,P(x)$ dapat disimpulkan $P(a)$ untuk setiap $a\\in D$. (ii) Jika $P(a)$ dibuktikan untuk unsur $a\\in D$ yang benar-benar sebarang, tanpa asumsi khusus mengenai $a$, maka $\\forall x\\in D\\,P(x)$.",proof:[
      "Untuk (i), diketahui $\\forall x\\in D\\,P(x)$ benar. Menurut semantik kuantor universal, $P(d)$ benar untuk setiap anggota $d$ domain. Karena $a\\in D$, khususnya $P(a)$ benar.",
      "Untuk (ii), diketahui argumen yang membuktikan $P(a)$ hanya memakai asumsi yang berlaku bagi setiap anggota $D$, dan $a$ tidak ditentukan secara khusus. Ambil sebarang $d\\in D$; seluruh langkah pembuktian untuk $a$ tetap sah setelah $a$ diganti dengan $d$, sehingga $P(d)$ benar.",
      "Karena $d$ dipilih sebarang, semantik kuantor universal memberikan $\\forall x\\in D\\,P(x)$. Jika pembuktian memakai syarat khusus seperti $a=2$, generalisasi ini tidak sah. Dengan demikian, kedua aturan terbukti dengan batasan yang dinyatakan."
    ]},
    {kind:"proposition",title:"Instansiasi Eksistensial dengan Saksi Baru",statement:"Misalkan $D\\ne\\varnothing$ dan $\\exists x\\in D\\,P(x)$ benar. Dalam pembuktian dapat dipilih simbol baru $c\\in D$ dengan $P(c)$, asalkan $c$ tidak muncul dalam asumsi lain atau kesimpulan yang bergantung pada pilihan saksi; hasil akhir harus tidak bergantung pada identitas $c$.",proof:[
      "Diketahui ada sedikitnya satu $d\\in D$ yang memenuhi $P(d)$. Untuk menalar dari keberadaan tersebut, gunakan simbol baru $c$ sebagai nama sementara bagi salah satu saksi yang dijamin ada.",
      "Semua langkah berikutnya boleh menggunakan $P(c)$, tetapi tidak boleh menyimpulkan sifat tambahan yang tidak mengikuti dari $P(c)$. Misalnya, dari $\\exists x\\,P(x)$ saja tidak dapat disimpulkan $P(a)$ untuk suatu unsur tetap $a$ yang telah ditentukan sebelumnya.",
      "Jika dari asumsi $P(c)$ dan premis awal diturunkan kesimpulan $R$ yang tidak menyebut $c$ serta tidak menggunakan asumsi khusus lain tentang $c$, penalaran berlaku bagi saksi mana pun. Maka $R$ mengikuti dari premis semula. Dengan demikian, aturan penggunaan saksi eksistensial sah dengan syarat kesegaran tersebut."
    ],explanation:"Memperkenalkan saksi adalah langkah dalam pembuktian, bukan klaim bahwa setiap unsur domain memenuhi predikat."},
    {kind:"proposition",title:"Rantai Inferensi dari Premis Berkuantor",statement:"Untuk domain $D\\ne\\varnothing$, predikat $P,Q$ pada $D$, dan $a\\in D$, premis $\\forall x\\in D\\,(P(x)\\to Q(x))$ dan $P(a)$ mengakibatkan $Q(a)$.",proof:[
      "Diketahui premis universal dan fakta $P(a)$, dengan $a\\in D$. Dibuktikan $Q(a)$ tanpa menambahkan asumsi mengenai unsur lain.",
      "Dengan instansiasi universal pada unsur $a$, diperoleh $P(a)\\to Q(a)$. Kedua formula $P(a)$ dan $P(a)\\to Q(a)$ kini merupakan premis proposisional yang sesuai dengan pola modus ponens.",
      "Menerapkan modus ponens menghasilkan $Q(a)$. Tidak diperlukan generalisasi $\\forall x\\,Q(x)$, yang memang tidak mengikuti dari premis. Dengan demikian, rantai inferensi yang dinyatakan valid."
    ]}
  ],
  examples: [
    {title:"Valuasi Implikasi",forDefinition:"Valuasi Proposisional",problem:"Tentukan nilai $P\\to Q$ jika $P$ benar dan $Q$ salah; bandingkan dengan $Q\\to P$.",solution:[
      "Diketahui $v(P)=\\mathrm{B}$ dan $v(Q)=\\mathrm{S}$. Implikasi bernilai salah tepat pada pasangan anteseden benar dan konsekuen salah.",
      "Karena itu $v(P\\to Q)=\\mathrm{S}$. Pada implikasi terbalik, anteseden $Q$ salah; menurut tabel kebenaran $v(Q\\to P)=\\mathrm{B}$.",
      "Dua formula tersebut memiliki nilai berbeda pada valuasi yang sama, sehingga tidak ekuivalen secara logis."
    ],conclusion:"Implikasi tidak dapat dibalik tanpa alasan tambahan."},
    {title:"Argumen dengan Premis Salah",forDefinition:"Argumen Valid",problem:"Apakah $P, P\\to Q\\therefore Q$ tetap valid ketika pada kenyataannya $P$ salah?",solution:[
      "Validitas menguji semua valuasi yang membuat seluruh premis benar; validitas tidak menuntut premis benar pada setiap situasi nyata.",
      "Ambil valuasi dengan $P$ salah. Valuasi itu tidak memenuhi premis pertama, sehingga bukan kontramodel bagi argumen.",
      "Untuk semua valuasi yang memenuhi kedua premis, aturan modus ponens memaksa $Q$ benar. Jadi argumen tetap valid meskipun sebuah penerapan dengan premis salah tidak menjamin kebenaran faktual kesimpulan."
    ],conclusion:"Validitas adalah sifat bentuk inferensi, bukan jaminan bahwa premis faktual benar."},
    {title:"Aturan Inferensi Berantai",forDefinition:"Aturan Inferensi",problem:"Dari $P\\to Q$, $Q\\to R$, dan $P$, turunkan $R$ dengan aturan yang sah.",solution:[
      "Diketahui tiga premis. Dari $P\\to Q$ dan $P$ diperoleh $Q$ menggunakan modus ponens.",
      "Dari $Q\\to R$ dan hasil $Q$ diperoleh $R$ dengan modus ponens sekali lagi.",
      "Verifikasi alternatif: silogisme hipotetis menghasilkan $P\\to R$ dari dua premis implikasi; bersama $P$ didapat $R$. Kedua rantai memakai aturan valid."
    ],conclusion:"Kesimpulan $R$ mengikuti secara logis dari ketiga premis."},
    {title:"Kontramodel Penegasan Konsekuen",forDefinition:"Kontramodel",problem:"Uji validitas $P\\to Q,\\;Q\\therefore P$.",solution:[
      "Diketahui bentuk argumen yang mencoba menarik anteseden dari konsekuennya. Untuk membantah validitas, cari satu valuasi yang memenuhi kedua premis tetapi menolak kesimpulan.",
      "Pilih $P$ salah dan $Q$ benar. Implikasi $P\\to Q$ benar karena antesedennya salah, sedangkan premis $Q$ benar.",
      "Kesimpulan $P$ salah pada valuasi tersebut. Maka valuasi ini kontramodel dan argumen tidak valid."
    ],conclusion:"Penegasan konsekuen merupakan kekeliruan inferensi."},
    {title:"Menolak Anteseden",problem:"Periksa argumen $P\\to Q,\\;\\neg P\\therefore\\neg Q$.",solution:[
      "Diketahui premis implikasi dan negasi anteseden. Agar argumen tidak valid, cukup menemukan valuasi yang membuat keduanya benar dan kesimpulan salah.",
      "Ambil $P$ salah dan $Q$ benar. Maka $P\\to Q$ benar dan $\\neg P$ benar, tetapi $\\neg Q$ salah.",
      "Keberadaan kontramodel ini membuktikan ketidakvalidan. Sebagai pembanding, modus tollens menggunakan $\\neg Q$ sebagai premis untuk menyimpulkan $\\neg P$, bukan sebaliknya."
    ],conclusion:"Menolak anteseden tidak membenarkan penolakan konsekuen."},
    {title:"Membaca Kuantor pada Domain Berhingga",problem:"Pada $D=\\{1,2,3\\}$ dan $P(x)$ berarti $x^2\\ge x$, simpulkan $P(2)$ dari pernyataan universal dan periksa secara langsung.",solution:[
      "Untuk setiap $x\\in D$, diperiksa $x^2\\ge x$: nilai $1,2,3$ memberikan $1\\ge1$, $4\\ge2$, dan $9\\ge3$. Jadi $\\forall x\\in D\\,P(x)$ benar.",
      "Karena $2\\in D$, instansiasi universal menghasilkan $P(2)$ tanpa memerlukan pengujian tambahan.",
      "Pemeriksaan langsung memberi $2^2=4\\ge2$, sesuai kesimpulan. Kebenaran satu kasus tidak boleh digunakan untuk menyimpulkan pernyataan universal tanpa memeriksa unsur sebarang."
    ],conclusion:"Instansiasi universal sah dan menghasilkan pernyataan benar $P(2)$."},
    {title:"Saksi Eksistensial Bukan Unsur Tetap",problem:"Dari $\\exists x\\in\\mathbb Z\\,(x^2=4)$, apakah boleh langsung menyimpulkan $3^2=4$?",solution:[
      "Diketahui ada bilangan bulat yang kuadratnya $4$, misalnya $2$ atau $-2$. Pernyataan eksistensial hanya menjamin keberadaan sedikitnya satu saksi.",
      "Unsur $3$ sudah ditentukan sebelumnya dan tidak memenuhi sifat itu karena $3^2=9\\ne4$. Mengganti saksi yang belum diketahui dengan unsur tetap $3$ melanggar aturan instansiasi eksistensial.",
      "Saksi baru $c$ boleh diperkenalkan dengan $c^2=4$ untuk menyimpulkan $c\\in\\{-2,2\\}$; kesimpulan akhir tidak boleh bergantung pada pemilihan nilai tertentu tanpa pembenaran."
    ],conclusion:"Eksistensi tidak memberi izin menyatakan sifat yang sama bagi setiap bilangan bulat."},
    {title:"Dari Universal ke Kasus Spesifik",problem:"Diketahui semua kelipatan $6$ habis dibagi $3$, dan $42$ kelipatan $6$. Buktikan $3\\mid42$.",solution:[
      "Tuliskan $P(x)$ untuk $6\\mid x$ dan $Q(x)$ untuk $3\\mid x$ pada domain $\\mathbb Z$. Premis pertama berbentuk $\\forall x\\in\\mathbb Z\\,(P(x)\\to Q(x))$.",
      "Karena $42=6\\cdot7$, premis kedua $P(42)$ benar. Instansiasi universal memberikan $P(42)\\to Q(42)$; modus ponens menghasilkan $Q(42)$.",
      "Verifikasi aritmetika: $42=3\\cdot14$, sehingga benar $3\\mid42$. Langkah ini juga menunjukkan peran masing-masing premis."
    ],conclusion:"Pernyataan $3\\mid42$ terbukti melalui instansiasi universal dan modus ponens."}
  ],
  exercises: [
    {prompt:"IF-01. Dari $P\\to Q$, $Q\\to R$, dan $P$, buktikan $R$ dengan dua rantai inferensi berbeda.",hint:"Gunakan modus ponens dua kali atau silogisme hipotetis lalu modus ponens.",answer:"Diketahui tiga premis $P\\to Q$, $Q\\to R$, dan $P$. Ditentukan apakah $R$ merupakan konsekuensi logis. Cara pertama: dari $P$ dan $P\\to Q$, modus ponens menghasilkan $Q$; dari $Q$ dan $Q\\to R$, modus ponens menghasilkan $R$. Cara kedua: silogisme hipotetis pada dua implikasi memberi $P\\to R$, kemudian modus ponens dengan $P$ memberi $R$. Kedua cara berlaku pada setiap valuasi yang memenuhi premis; tidak ada kasus yang membuat premis benar tetapi $R$ salah. Dengan demikian, $R$ terbukti."},
    {prompt:"IF-02. Tentukan apakah $P\\to Q,\\neg Q\\therefore\\neg P$ valid; jelaskan mengapa $P\\to Q,\\neg P\\therefore\\neg Q$ tidak valid.",hint:"Buktikan bentuk pertama dengan kontradiksi dan cari valuasi untuk bentuk kedua.",answer:"Diketahui dua bentuk argumen. Untuk yang pertama, andaikan premis $P\\to Q$ dan $\\neg Q$ benar tetapi $\\neg P$ salah. Maka $P$ benar dan $Q$ salah, sehingga implikasi $P\\to Q$ salah, bertentangan dengan premis. Jadi bentuk pertama valid menurut modus tollens. Untuk bentuk kedua, ambil valuasi $P$ salah dan $Q$ benar. Premis $P\\to Q$ benar karena anteseden salah; premis $\\neg P$ juga benar; tetapi kesimpulan $\\neg Q$ salah. Valuasi tersebut merupakan kontramodel. Dengan demikian, bentuk kedua tidak valid meskipun tampak menyerupai modus tollens."},
    {prompt:"IF-03. Dari $P\\lor Q$, $\\neg P$, dan $Q\\to R$, turunkan $R$ dan periksa setiap langkah.",hint:"Mulai dengan silogisme disjungtif.",answer:"Diketahui $P\\lor Q$ benar, $\\neg P$ benar, dan $Q\\to R$ benar pada valuasi yang sama. Karena $P$ salah, disjungsi $P\\lor Q$ memaksa $Q$ benar: ini silogisme disjungtif. Dengan $Q$ dan implikasi $Q\\to R$, modus ponens memberi $R$. Sebagai verifikasi semantik, andaikan semua premis benar dan $R$ salah. Implikasi $Q\\to R$ lalu memaksa $Q$ salah, sedangkan $P\\lor Q$ dan $\\neg P$ memaksa $Q$ benar. Kontradiksi. Dengan demikian, $R$ mengikuti secara valid."},
    {prompt:"IF-04. Uji argumen $P\\to Q,\\ Q\\therefore P$ dengan satu kontramodel, lalu nyatakan kondisi tambahan yang membuat kesimpulannya sah.",hint:"Coba $P$ salah dan $Q$ benar.",answer:"Diketahui premis $P\\to Q$ dan $Q$; kesimpulan yang diuji adalah $P$. Pilih valuasi $P=\\mathrm{S}$ dan $Q=\\mathrm{B}$. Pada valuasi itu implikasi $P\\to Q$ benar dan $Q$ benar, sedangkan $P$ salah. Maka argumen awal tidak valid. Jika ditambahkan premis $Q\\to P$, kesimpulan menjadi sah: dari $Q$ dan $Q\\to P$ diperoleh $P$ dengan modus ponens. Alternatifnya, premis $P\\leftrightarrow Q$ juga memuat arah $Q\\to P$. Dengan demikian, kegagalan semula berasal dari tidak tersedianya implikasi balik."},
    {prompt:"IF-05. Pada domain bilangan bulat, dari $\\forall x\\,(6\\mid x\\to3\\mid x)$ dan $6\\mid 54$, simpulkan $3\\mid54$ dan periksa hitungannya.",hint:"Instansiasikan kuantor pada $x=54$.",answer:"Diketahui domain $\\mathbb Z$, pernyataan universal $\\forall x\\,(6\\mid x\\to3\\mid x)$, serta fakta $6\\mid54$. Karena $54\\in\\mathbb Z$, instansiasi universal sah dan menghasilkan implikasi $6\\mid54\\to3\\mid54$. Fakta $6\\mid54$ benar karena $54=6\\cdot9$. Dengan modus ponens diperoleh $3\\mid54$. Verifikasi langsung: $54=3\\cdot18$ dengan $18\\in\\mathbb Z$, sehingga memenuhi definisi keterbagian. Kesimpulan hanya untuk bilangan $54$; tanpa fakta tambahan kita tidak menyimpulkan bahwa semua bilangan bulat habis dibagi $3$."},
    {prompt:"IF-06. Dari $\\exists x\\in\\mathbb Z\\,(x^2=9)$, apakah $x=3$ dapat disimpulkan sebagai satu-satunya saksi? Tentukan semua saksi.",hint:"Faktorkan $x^2-9$ dan periksa kedua nilai.",answer:"Diketahui pernyataan eksistensial bahwa ada $x\\in\\mathbb Z$ dengan $x^2=9$. Untuk menentukan seluruh saksi, selesaikan $x^2-9=(x-3)(x+3)=0$. Karena $\\mathbb Z$ tidak memiliki pembagi nol, berlaku $x-3=0$ atau $x+3=0$. Jadi $x=3$ atau $x=-3$. Keduanya memenuhi persamaan karena $3^2=(-3)^2=9$. Pernyataan eksistensial tidak memilih satu saksi tertentu dan tidak menjamin keunikan. Kesimpulan bahwa $3$ satu-satunya saksi salah, sebab $-3$ adalah saksi lain yang berbeda."},
    {prompt:"IF-07. Periksa validitas $\\forall x\\in\\mathbb Z\\,(P(x)\\to Q(x)),\\ \\exists x\\in\\mathbb Z\\,P(x)\\therefore\\exists x\\in\\mathbb Z\\,Q(x)$.",hint:"Pilih saksi baru bagi premis eksistensial.",answer:"Diketahui pernyataan universal $\\forall x\\,(P(x)\\to Q(x))$ dan eksistensial $\\exists x\\,P(x)$ pada domain takkosong $\\mathbb Z$. Pilih simbol saksi baru $c\\in\\mathbb Z$ sehingga $P(c)$ benar; tidak diasumsikan bahwa $c$ mempunyai nilai tertentu. Instansiasi universal memberikan $P(c)\\to Q(c)$. Dengan modus ponens dari $P(c)$ diperoleh $Q(c)$. Karena ada setidaknya satu saksi $c$ yang memenuhi $Q$, generalisasi eksistensial menghasilkan $\\exists x\\,Q(x)$. Kesimpulan akhir tidak memuat $c$ dan tidak bergantung pada pilihan saksi, sehingga inferensi valid."},
    {prompt:"IF-08. Periksa argumen $\\exists x\\,P(x)\\therefore\\forall x\\,P(x)$ pada domain $D=\\{1,2\\}$ dan jelaskan kegagalan generalisasi.",hint:"Buat $P(1)$ benar dan $P(2)$ salah.",answer:"Diketahui domain $D=\\{1,2\\}$. Definisikan $P(x)$ sebagai $x=1$. Premis $\\exists x\\in D\\,P(x)$ benar dengan saksi $x=1$. Namun kesimpulan $\\forall x\\in D\\,P(x)$ salah karena $P(2)$ salah. Interpretasi ini merupakan kontramodel, sehingga argumen tidak valid. Aturan generalisasi universal hanya boleh digunakan setelah $P(a)$ dibuktikan untuk unsur $a$ yang dipilih sebarang tanpa sifat khusus. Di sini saksi $1$ justru dipilih karena memenuhi syarat khusus $x=1$, sehingga tidak dapat mewakili seluruh domain. Dengan demikian, satu contoh eksistensial tidak membuktikan pernyataan universal."}
  ],
  mistakes: [],
  connections: []
};
