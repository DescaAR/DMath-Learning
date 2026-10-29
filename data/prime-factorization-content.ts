import type { BookLessonContent } from "@/data/book-content-types";

/** Dedicated proofs and solutions for nt-primes; Hardy–Wright (2008), Niven–Zuckerman–Montgomery (1991). */
export const primeFactorizationContent: BookLessonContent = {
  "intro": [
    "Sebuah bilangan seperti $91$ terlihat besar dibandingkan prima kecil, tetapi faktorisasi $91=7\\cdot13$ menunjukkan bahwa ia komposit. Sebaliknya, untuk menyatakan $97$ prima, kita harus menyingkirkan seluruh kemungkinan faktor nontrivial. Materi ini membangun dua jenis argumen tersebut secara formal, lalu menjelaskan mengapa setiap bilangan bulat lebih dari satu memiliki faktorisasi prima yang tunggal.",
    "Keunikan faktor prima bukan sekadar kebiasaan menulis bilangan sebagai perkalian. Ia bergantung pada Lemma Euclid: apabila suatu prima membagi hasil kali, prima itu harus membagi sedikitnya satu faktor. Lemma tersebut dibuktikan menggunakan algoritma pembagian dan sifat urutan baik, sehingga tidak diperlukan asumsi Teorema Bézout dari submateri berikutnya.",
    "Dari faktorisasi prima kita memperoleh valuasi $v_p(n)$, uji keprimaan sampai akar kuadrat, dan formula banyak pembagi. Setiap hasil dinyatakan dengan domain yang tepat: bilangan prima lebih dari satu, valuasi di sini hanya untuk bilangan positif, dan argumen keterbagian dengan eksponen mempergunakan keunikan faktorisasi.",
    "Rujukan: Hardy dan Wright, *An Introduction to the Theory of Numbers*, edisi ke-6, Oxford University Press, 2008, bab awal tentang prima dan faktorisasi; Niven, Zuckerman, dan Montgomery, *An Introduction to the Theory of Numbers*, edisi ke-5, Wiley, 1991, pembahasan keterbagian dan prima. Bukti, contoh, dan soal pada halaman ini disusun khusus untuk DMath Learning."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Bilangan Prima",
      "statement": "Bilangan bulat $p>1$ disebut prima apabila pembagi positifnya tepat $1$ dan $p$. Persyaratan $p>1$ merupakan bagian definisi: bilangan $1$ bukan prima, dan bilangan prima selalu positif."
    },
    {
      "kind": "definition",
      "title": "Bilangan Komposit",
      "statement": "Bilangan bulat $n>1$ disebut komposit apabila terdapat bilangan bulat $a,b$ dengan $1<a<n$, $1<b<n$, dan $n=ab$. Jadi bilangan komposit mempunyai pembagi positif selain $1$ dan dirinya sendiri."
    },
    {
      "kind": "definition",
      "title": "Faktorisasi Prima",
      "statement": "Faktorisasi prima dari bilangan bulat $n>1$ ialah representasi $n=p_1^{\\alpha_1}\\cdots p_r^{\\alpha_r}$, dengan $p_1<\\cdots<p_r$ bilangan prima berbeda dan $\\alpha_i\\in\\mathbb N$ positif. Eksistensi dan ketunggalan representasi ini akan dibuktikan, bukan diasumsikan sebagai bagian definisi."
    },
    {
      "kind": "definition",
      "title": "Valuasi Prima pada Bilangan Positif",
      "statement": "Untuk prima $p$ dan bilangan bulat positif $n$, $v_p(n)$ adalah bilangan bulat taknegatif terbesar $k$ sehingga $p^k\\mid n$. Khususnya $v_p(1)=0$. Nilai ini hingga karena $p^k>n$ untuk $k$ cukup besar; definisi ini tidak diterapkan pada $n=0$."
    },
    {
      "kind": "lemma",
      "title": "Pembagi Prima dari Bilangan Lebih dari Satu",
      "statement": "Setiap bilangan bulat $n>1$ mempunyai sedikitnya satu pembagi prima.",
      "proof": [
        "Diketahui $n\\in\\mathbb Z$ dengan $n>1$. Himpunan $D=\\{d\\in\\mathbb N:d>1,\\ d\\mid n\\}$ tidak kosong karena $n\\in D$. Menurut sifat urutan baik, terdapat elemen terkecil $p$ dari $D$.",
        "Dibuktikan bahwa $p$ prima. Andaikan $p$ komposit. Maka $p=ab$ untuk bilangan bulat $1<a<p$ dan $1<b<p$. Karena $a\\mid p$ dan $p\\mid n$, berlaku $a\\mid n$, sehingga $a\\in D$.",
        "Ketaksamaan $1<a<p$ bertentangan dengan minimalitas $p$. Dengan demikian $p$ tidak komposit dan, karena $p>1$, $p$ prima. Lemma terbukti."
      ],
      "explanation": "Lemma ini menjamin bahwa ketika sebuah bilangan komposit diuraikan, proses selalu mencapai faktor prima; ia belum menyatakan keunikan penguraian."
    },
    {
      "kind": "lemma",
      "title": "Lemma Euclid",
      "statement": "Jika $p$ prima dan $a,b\\in\\mathbb Z$, maka $p\\mid ab$ mengakibatkan $p\\mid a$ atau $p\\mid b$.",
      "proof": [
        "Diketahui $p$ prima dan $p\\mid ab$. Jika $p\\mid a$, kesimpulan sudah benar. Selanjutnya diambil kasus $p\\nmid a$; akan dibuktikan bahwa $p\\mid b$.",
        "Pertimbangkan himpunan $S=\\{ua+vp:u,v\\in\\mathbb Z,\\ ua+vp>0\\}$. Himpunan ini tidak kosong karena $p=0a+1p\\in S$. Ambil elemen terkecil $d=ua+vp$.",
        "Dengan algoritma pembagian, tuliskan $a=qd+r$ dengan $0\\le r<d$. Karena $r=a-q(ua+vp)=(1-qu)a+(-qv)p$, jika $r>0$ maka $r\\in S$, bertentangan dengan minimalitas $d$. Jadi $r=0$ dan $d\\mid a$. Argumen sama untuk $p$ menunjukkan $d\\mid p$.",
        "Karena $p$ prima, pembagi positif $d$ dari $p$ hanya $1$ atau $p$. Kasus $d=p$ tidak mungkin: $d\\mid a$ akan memberikan $p\\mid a$. Maka $d=1$, yakni terdapat $u,v\\in\\mathbb Z$ dengan $ua+vp=1$.",
        "Kalikan identitas terakhir dengan $b$: $uab+vpb=b$. Kedua suku pada ruas kiri habis dibagi $p$ karena $p\\mid ab$. Jadi $p\\mid b$. Kedua kasus mencakup seluruh kemungkinan, sehingga lemma terbukti."
      ],
      "explanation": "Kondisi prima esensial: $6mid2cdot3$, tetapi $6\nmid2$ dan $6\nmid3$. Identitas kombinasi linear dibangun di dalam bukti agar tidak bergantung pada teorema Bézout yang dibahas di bagian berikutnya."
    },
    {
      "kind": "theorem",
      "title": "Teorema Fundamental Aritmetika",
      "statement": "Setiap bilangan bulat $n>1$ dapat ditulis sebagai hasil kali sejumlah berhingga bilangan prima. Jika $n=p_1\\cdots p_r=q_1\\cdots q_s$ dengan seluruh $p_i,q_j$ prima, maka $r=s$ dan kedua daftar faktor sama hingga permutasi.",
      "proof": [
        "Diketahui $n>1$. Untuk eksistensi, gunakan induksi kuat pada $n$. Basis $n=2$ berlaku karena $2$ prima. Andaikan setiap bilangan bulat $m$ dengan $2\\le m<n$ mempunyai faktorisasi prima.",
        "Jika $n$ prima, $n$ sendiri merupakan faktorisasi prima. Jika $n$ komposit, terdapat $a,b$ dengan $1<a,b<n$ dan $n=ab$. Hipotesis induksi memberikan faktorisasi prima bagi $a$ dan $b$; menggabungkannya menghasilkan faktorisasi prima bagi $n$. Maka eksistensi berlaku untuk seluruh $n>1$.",
        "Untuk ketunggalan, andaikan $n=p_1\\cdots p_r=q_1\\cdots q_s$. Karena $p_1\\mid q_1\\cdots q_s$, penerapan berulang Lemma Euclid menunjukkan $p_1\\mid q_j$ untuk suatu $j$. Kedua bilangan prima, sehingga $p_1=q_j$.",
        "Susun ulang faktor $q_j$ ke posisi pertama, kemudian batalkan faktor positif $p_1$ dari kedua ruas dalam $\\mathbb Z$. Diperoleh $p_2\\cdots p_r=q_2'\\cdots q_s'$. Ulangi proses pembatalan untuk faktor berikutnya.",
        "Jika satu daftar habis lebih dahulu, produk faktor pada daftar lainnya harus $1$, padahal setiap faktor prima sedikitnya $2$. Jadi kedua daftar habis bersamaan, $r=s$, dan setiap faktor cocok setelah permutasi. Dengan demikian eksistensi dan ketunggalan terbukti."
      ],
      "explanation": "Urutan faktor tidak penting, tetapi eksponennya penting. Teorema ini memungkinkan perhitungan FPB, KPK, dan banyak pembagi dari eksponen prima."
    },
    {
      "kind": "theorem",
      "title": "Terdapat Tak Hingga Banyak Bilangan Prima",
      "statement": "Himpunan seluruh bilangan prima tidak berhingga.",
      "proof": [
        "Diketahui himpunan bilangan prima. Dibuktikan bahwa tidak mungkin seluruh prima termuat dalam suatu daftar hingga. Andaikan sebaliknya, seluruh prima adalah $p_1,\\ldots,p_k$.",
        "Bentuk bilangan bulat $N=p_1p_2\\cdots p_k+1>1$. Berdasarkan lemma pembagi prima, ada prima $q$ dengan $q\\mid N$.",
        "Menurut asumsi, $q=p_i$ untuk suatu $i$. Akan tetapi $q$ juga membagi produk $p_1\\cdots p_k$, sehingga $q$ membagi selisih $N-p_1\\cdots p_k=1$. Tidak ada prima yang membagi $1$.",
        "Kontradiksi menunjukkan bahwa tidak ada daftar hingga yang memuat semua prima. Dengan demikian banyak bilangan prima tak hingga. Terbukti."
      ],
      "explanation": "Bilangan $N$ tidak harus prima; yang dipakai ialah keberadaan suatu pembagi prima baru dari $N$."
    },
    {
      "kind": "proposition",
      "title": "Kriteria Uji Prima sampai Akar Kuadrat",
      "statement": "Untuk bilangan bulat $n>1$, $n$ prima jika dan hanya jika tidak ada bilangan prima $p\\le\\sqrt n$ yang membagi $n$.",
      "proof": [
        "Diketahui $n>1$. Untuk arah $(\\Rightarrow)$, jika $n$ prima maka setiap pembagi positif $n$ hanya $1$ dan $n$. Karena $n>\\sqrt n$ untuk $n>1$, tidak ada prima $p\\le\\sqrt n$ yang membagi $n$.",
        "Untuk arah $(\\Leftarrow)$, andaikan tidak ada prima $p\\le\\sqrt n$ yang membagi $n$, tetapi $n$ komposit. Maka $n=ab$ dengan $1<a\\le b<n$ setelah menukar faktor jika perlu.",
        "Dari $a^2\\le ab=n$ diperoleh $a\\le\\sqrt n$. Lemma pembagi prima memberikan prima $p\\mid a$. Karena $p\\le a\\le\\sqrt n$ dan $a\\mid n$, diperoleh $p\\mid n$, bertentangan dengan asumsi.",
        "Maka $n$ tidak komposit. Karena $n>1$, $n$ prima. Kedua arah telah dibuktikan."
      ],
      "explanation": "Batas akar kuadrat memungkinkan uji prima hingga. Untuk $n=1$, kriteria ini tidak boleh dipakai karena syarat $n>1$ tidak terpenuhi."
    },
    {
      "kind": "proposition",
      "title": "Valuasi Perkalian dan Keterbagian",
      "statement": "Untuk prima $p$ dan bilangan bulat positif $a,b$, berlaku $v_p(ab)=v_p(a)+v_p(b)$. Selain itu, untuk bilangan bulat positif $a,b$, berlaku $a\\mid b$ jika dan hanya jika $v_p(a)\\le v_p(b)$ untuk setiap prima $p$.",
      "proof": [
        "Diketahui $a,b>0$. Menurut Teorema Fundamental Aritmetika, tuliskan $a=p^\\alpha u$ dan $b=p^\\beta v$, dengan $p\\nmid u$ dan $p\\nmid v$. Eksponen $\\alpha=v_p(a)$ dan $\\beta=v_p(b)$ terdefinisi, termasuk ketika bernilai nol.",
        "Perkalian memberi $ab=p^{\\alpha+\\beta}uv$. Jika $p\\mid uv$, Lemma Euclid memaksa $p\\mid u$ atau $p\\mid v$, bertentangan dengan pemilihan $u,v$. Jadi $v_p(ab)=\\alpha+\\beta$.",
        "Untuk arah $(\\Rightarrow)$ dari kriteria keterbagian, jika $a\\mid b$ maka $b=ac$ untuk suatu bilangan bulat positif $c$. Identitas perkalian memberi $v_p(b)=v_p(a)+v_p(c)\\ge v_p(a)$ bagi setiap prima $p$.",
        "Untuk arah $(\\Leftarrow)$, andaikan $v_p(a)\\le v_p(b)$ untuk setiap prima $p$. Faktorisasi prima unik memungkinkan menulis $a=\\prod p^{\\alpha_p}$ dan $b=\\prod p^{\\beta_p}$ dengan hanya berhingga banyak eksponen tidak nol. Karena semua $\\beta_p-\\alpha_p\\ge0$, bilangan $c=\\prod p^{\\beta_p-\\alpha_p}$ merupakan bilangan bulat positif dan $b=ac$. Jadi $a\\mid b$. Kedua arah terbukti."
      ],
      "explanation": "Kriteria ini khusus bilangan positif; keterbagian bilangan bertanda dapat diperiksa dengan nilai absolut."
    },
    {
      "kind": "corollary",
      "title": "Banyak Pembagi Positif",
      "statement": "Jika $n=p_1^{\\alpha_1}\\cdots p_r^{\\alpha_r}>1$ merupakan faktorisasi prima dengan prima berbeda dan $\\alpha_i\\ge1$, maka banyak pembagi positif $n$ ialah $\\tau(n)=\\prod_{i=1}^r(\\alpha_i+1)$. Untuk $n=1$, berlaku $\\tau(1)=1$.",
      "proof": [
        "Diketahui faktorisasi prima $n$. Setiap pembagi positif $d$ harus mempunyai faktorisasi $d=\\prod_{i=1}^r p_i^{\\beta_i}$ dengan $0\\le\\beta_i\\le\\alpha_i$, berdasarkan kriteria keterbagian melalui valuasi.",
        "Sebaliknya, untuk setiap pilihan eksponen $\\beta_i$ dalam rentang tersebut, produk $\\prod_i p_i^{\\beta_i}$ membagi $n$. Ketunggalan faktorisasi prima memastikan bahwa dua pilihan vektor eksponen berbeda menghasilkan dua pembagi berbeda.",
        "Terdapat $\\alpha_i+1$ pilihan untuk eksponen ke-$i$, dan semua pilihan independen. Prinsip perkalian memberikan $\\tau(n)=\\prod_i(\\alpha_i+1)$. Untuk $n=1$, satu-satunya pembagi positif adalah $1$, sehingga $\\tau(1)=1$. Terbukti."
      ],
      "explanation": "Formula menghitung pembagi positif, bukan banyak faktor prima berbeda. Contoh $360$ mempunyai tiga faktor prima berbeda, tetapi 24 pembagi positif."
    }
  ],
  "examples": [
    {
      "title": "Contoh Bilangan Prima",
      "forDefinition": "Bilangan Prima",
      "problem": "Tentukan apakah $97$ prima dengan memeriksa seluruh pembagi yang diperlukan.",
      "solution": [
        "Diketahui $n=97>1$. Kriteria akar kuadrat memberi $\\sqrt{97}<10$, sehingga hanya prima $2,3,5,7$ yang perlu diuji.",
        "Bilangan $97$ ganjil, jumlah digitnya $9+7=16$ tidak habis dibagi $3$, dan digit terakhir bukan $0$ atau $5$. Jadi $2,3,5$ bukan pembaginya.",
        "Untuk $7$, hitung $7\\cdot13=91$ dan $7\\cdot14=98$, sehingga $97$ bukan kelipatan $7$. Tidak ada prima $\\le\\sqrt{97}$ yang membagi $97$.",
        "Dengan kriteria uji prima, $97$ prima. Angka $1$ tidak termasuk bilangan prima karena definisi mengharuskan bilangan lebih dari satu."
      ]
    },
    {
      "title": "Contoh Bilangan Komposit",
      "forDefinition": "Bilangan Komposit",
      "problem": "Periksa status $91$, $49$, dan $1$ berdasarkan definisi komposit.",
      "solution": [
        "Diketahui $91=7\\cdot13$ dengan $1<7,13<91$. Karena kedua faktor merupakan bilangan bulat, $91$ memenuhi definisi komposit.",
        "Demikian pula $49=7\\cdot7$ dengan $1<7<49$, sehingga $49$ komposit walaupun kedua faktor sama.",
        "Bilangan $1$ tidak mempunyai dua faktor yang lebih besar dari $1$ dan lebih kecil dari dirinya; terlebih lagi definisi komposit mensyaratkan $n>1$. Maka $1$ bukan komposit dan juga bukan prima.",
        "Kesimpulannya, $91$ dan $49$ komposit, sedangkan $1$ berada di luar kedua kelas tersebut."
      ]
    },
    {
      "title": "Contoh Faktorisasi Prima",
      "forDefinition": "Faktorisasi Prima",
      "problem": "Tentukan faktorisasi prima $756$ dan jelaskan mengapa tidak ada faktorisasi prima lain yang berbeda.",
      "solution": [
        "Diketahui $756$ genap. Pembagian berulang memberi $756=2\\cdot378=2^2\\cdot189$. Selanjutnya $189=3\\cdot63=3^3\\cdot7$.",
        "Karena $2$, $3$, dan $7$ semuanya prima, diperoleh $756=2^2\\cdot3^3\\cdot7$. Verifikasi perkalian: $4\\cdot27\\cdot7=756$.",
        "Teorema Fundamental Aritmetika menyatakan setiap faktorisasi prima bilangan $756$ mempunyai multihimpunan faktor yang sama. Maka setiap faktorisasi lain hanya dapat berbeda dalam urutan penulisan.",
        "Jadi faktorisasi prima terurutnya adalah $2^2\\cdot3^3\\cdot7$, dengan eksponen $2,3,1$ berturut-turut."
      ]
    },
    {
      "title": "Contoh Valuasi Prima",
      "forDefinition": "Valuasi Prima pada Bilangan Positif",
      "problem": "Hitung $v_2(360)$, $v_3(360)$, $v_5(360)$, dan $v_7(360)$.",
      "solution": [
        "Diketahui $360=36\\cdot10=2^3\\cdot3^2\\cdot5$. Karena ketiga faktor dasar $2,3,5$ prima dan berbeda, ini merupakan faktorisasi prima.",
        "Dari definisi valuasi, eksponen terbesar yang memenuhi $2^k\\mid360$ adalah $k=3$; $2^4=16$ tidak membagi $360$. Jadi $v_2(360)=3$.",
        "Dengan alasan yang sama, $v_3(360)=2$ dan $v_5(360)=1$. Karena $7$ tidak muncul dalam faktorisasi prima, $v_7(360)=0$.",
        "Verifikasi: $2^3\\cdot3^2\\cdot5=8\\cdot9\\cdot5=360$. Valuasi tidak boleh diterapkan pada $0$ dengan definisi berhingga ini."
      ]
    },
    {
      "title": "Contoh Penerapan Lemma Euclid",
      "problem": "Diketahui $5\\mid14\\cdot15$ dan $5\\nmid14$. Tentukan faktor mana yang harus habis dibagi $5$ dan periksa secara langsung.",
      "solution": [
        "Bilangan $5$ prima dan $14\\cdot15=210$ habis dibagi $5$ karena $210=5\\cdot42$. Syarat Lemma Euclid terpenuhi.",
        "Karena $14=5\\cdot2+4$, diperoleh $5\\nmid14$. Lemma Euclid memaksa $5\\mid15$.",
        "Pemeriksaan langsung memberi $15=5\\cdot3$. Kesimpulan ini tidak dapat diperluas ke sembarang pembagi komposit: $6\\mid2\\cdot3$ tetapi $6$ tidak membagi masing-masing faktor."
      ]
    },
    {
      "title": "Contoh Faktorisasi dan Ketunggalan",
      "problem": "Faktorkan $2310$ dan tentukan semua faktor prima berbedanya.",
      "solution": [
        "Karena $2310$ genap, $2310=2\\cdot1155$. Karena jumlah digit $1155$ adalah $12$, bilangan ini habis dibagi $3$, sehingga $1155=3\\cdot385$.",
        "Selanjutnya $385=5\\cdot77=5\\cdot7\\cdot11$. Semua faktor $2,3,5,7,11$ adalah prima.",
        "Perkalian balik menghasilkan $2\\cdot3\\cdot5\\cdot7\\cdot11=2310$. Ketunggalan faktorisasi prima menjamin tidak ada faktor prima lain.",
        "Jadi terdapat lima faktor prima berbeda, semuanya berpangkat satu; jumlah pembagi positifnya adalah $2^5=32$."
      ]
    },
    {
      "title": "Contoh Uji Komposit sampai Akar",
      "problem": "Tentukan apakah $221$ prima dan jelaskan mengapa pemeriksaan sampai $\\sqrt{221}$ cukup.",
      "solution": [
        "Diketahui $221>1$ dan $14^2=196<221<225=15^2$, sehingga $\\sqrt{221}<15$. Prima yang perlu diuji ialah $2,3,5,7,11,13$.",
        "Bilangan $221$ tidak habis dibagi $2$, $3$, atau $5$. Pemeriksaan lebih lanjut memberi $7\\cdot31=217$, $11\\cdot20=220$, dan $13\\cdot17=221$.",
        "Ditemukan pembagi prima $13\\le\\sqrt{221}$, sehingga $221=13\\cdot17$ komposit. Tidak perlu memeriksa pembagi lebih besar karena satu faktor dalam setiap faktorisasi komposit pasti tidak melebihi akar kuadratnya."
      ]
    },
    {
      "title": "Contoh Menghitung Pembagi",
      "problem": "Tentukan banyak pembagi positif $360$ tanpa mendaftar seluruh pembaginya.",
      "solution": [
        "Diketahui faktorisasi prima $360=2^3\\cdot3^2\\cdot5^1$. Setiap pembagi positif berbentuk $2^a3^b5^c$ dengan $0\\le a\\le3$, $0\\le b\\le2$, dan $0\\le c\\le1$.",
        "Ada empat pilihan untuk $a$, tiga untuk $b$, dan dua untuk $c$. Karena faktorisasi prima unik, setiap pilihan menghasilkan pembagi berbeda.",
        "Prinsip perkalian memberi $\\tau(360)=4\\cdot3\\cdot2=24$. Sebagai pemeriksaan, pasangan pembagi $d$ dan $360/d$ berjumlah $12$ pasangan karena $360$ bukan kuadrat sempurna, sehingga totalnya $24$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "P-01. Klasifikasikan $1,2,49,97,121$ sebagai prima, komposit, atau bukan keduanya.",
      "hint": "Gunakan definisi dan uji prima sampai akar kuadrat.",
      "answer": "Diketahui lima bilangan positif. Bilangan $1$ bukan prima maupun komposit karena kedua definisi mensyaratkan bilangan lebih dari satu. Bilangan $2$ prima karena pembagi positifnya hanya $1$ dan $2$.\n\nUntuk $49$, diperoleh $49=7^2$ dengan $1<7<49$, sehingga komposit. Untuk $121$, diperoleh $121=11^2$, sehingga komposit.\n\nUntuk $97$, karena $\\sqrt{97}<10$, cukup memeriksa prima $2,3,5,7$. Bilangan $97$ ganjil, jumlah digitnya $16$, digit akhirnya $7$, dan $7\\cdot13=91<97<98=7\\cdot14$; jadi tidak habis dibagi keempat prima tersebut.\n\nDengan demikian klasifikasi berurutan adalah: bukan keduanya, prima, komposit, prima, komposit. Setiap keputusan telah diverifikasi dari definisi atau kriteria prima."
    },
    {
      "prompt": "P-02. Tentukan faktorisasi prima $1386$, nilai $v_3(1386)$, dan banyak pembagi positifnya.",
      "hint": "Bagi berturut-turut dengan prima kecil dan gunakan eksponen faktorisasi.",
      "answer": "Diketahui $1386$ genap. Hitung $1386=2\\cdot693$, $693=3\\cdot231=3^2\\cdot77$, dan $77=7\\cdot11$. Jadi $1386=2\\cdot3^2\\cdot7\\cdot11$.\n\nKarena $2,3,7,11$ prima, hasil ini faktorisasi prima. Perkalian balik $2\\cdot9\\cdot7\\cdot11=1386$ memverifikasi nilainya. Eksponen prima $3$ tepat dua, sehingga $v_3(1386)=2$.\n\nSetiap pembagi positif berbentuk $2^a3^b7^c11^d$ dengan $a,c,d\\in\\{0,1\\}$ dan $b\\in\\{0,1,2\\}$. Ketunggalan faktorisasi memberi $(1+1)(2+1)(1+1)(1+1)=24$ pembagi.\n\nKesimpulannya, faktorisasi $1386=2\\cdot3^2\\cdot7\\cdot11$, valuasi $v_3=2$, dan banyak pembagi positif $24$."
    },
    {
      "prompt": "P-03. Buktikan bahwa jika $p$ prima, $k\\in\\mathbb N$ positif, dan $p\\mid a^k$, maka $p\\mid a$.",
      "hint": "Gunakan Lemma Euclid secara berulang atau induksi pada pangkat.",
      "answer": "Diketahui prima $p$, bilangan bulat $a$, dan $k\\ge1$ dengan $p\\mid a^k$. Akan dibuktikan $p\\mid a$ dengan induksi pada $k$.\n\nBasis $k=1$ langsung: $p\\mid a^1$ sama dengan $p\\mid a$. Andaikan pernyataan benar untuk pangkat $k$ dan misalkan $p\\mid a^{k+1}=a\\cdot a^k$.\n\nLemma Euclid menyatakan $p\\mid a$ atau $p\\mid a^k$. Jika alternatif pertama terjadi, selesai. Jika alternatif kedua terjadi, hipotesis induksi memberi $p\\mid a$.\n\nMaka kedua alternatif memberikan $p\\mid a$, sehingga induksi selesai. Sebaliknya, jika $p\\mid a$ maka jelas $p\\mid a^k$ untuk setiap $k\\ge1$; jadi untuk prima $p$, $p\\mid a^k$ ekuivalen dengan $p\\mid a$."
    },
    {
      "prompt": "P-04. Buktikan $437$ komposit dan tentukan faktor prima terkecilnya tanpa menguji semua bilangan sampai $437$.",
      "hint": "Gunakan batas $\\sqrt{437}<21$ dan daftar prima hingga $19$.",
      "answer": "Diketahui $437>1$ dan $20^2=400<437<441=21^2$. Jika komposit, bilangan ini memiliki pembagi prima tidak melebihi $\\sqrt{437}<21$, yakni salah satu dari $2,3,5,7,11,13,17,19$.\n\nUji berurutan: $437$ ganjil; jumlah digit $14$ tidak habis dibagi $3$; digit akhir bukan $0$ atau $5$. Selanjutnya $7\\cdot62=434$, $11\\cdot39=429$, $13\\cdot33=429$, dan $17\\cdot25=425$, semuanya menyisakan bilangan bukan nol.\n\nAkhirnya $19\\cdot23=437$. Karena $19$ prima dan semua prima yang lebih kecil dalam daftar telah gagal membagi $437$, $19$ merupakan faktor prima terkecil.\n\nFaktor kedua $23$ juga prima karena tidak habis dibagi $2,3$, dan $\\sqrt{23}<5$. Jadi faktorisasi prima $437=19\\cdot23$ sekaligus memverifikasi sifat kompositnya."
    },
    {
      "prompt": "P-05. Hitung banyak pembagi positif $540$ dan banyak pembagi positif yang merupakan kuadrat sempurna.",
      "hint": "Tuliskan setiap pembagi sebagai produk pangkat prima; kuadrat memerlukan eksponen genap.",
      "answer": "Diketahui $540=54\\cdot10=2^2\\cdot3^3\\cdot5$. Setiap pembagi positif berbentuk $d=2^a3^b5^c$ dengan $0\\le a\\le2$, $0\\le b\\le3$, dan $0\\le c\\le1$.\n\nBanyak pilihan eksponen berturut-turut $3$, $4$, dan $2$, sehingga banyak seluruh pembagi positif ialah $\\tau(540)=3\\cdot4\\cdot2=24$.\n\nAgar $d$ kuadrat sempurna, semua eksponen harus genap: $a\\in\\{0,2\\}$, $b\\in\\{0,2\\}$, dan $c=0$. Terdapat $2\\cdot2\\cdot1=4$ pilihan, yaitu $1,4,9,36$.\n\nVerifikasi langsung menunjukkan $1^2,2^2,3^2,6^2$ semuanya membagi $540$. Jadi ada $24$ pembagi positif dan tepat $4$ di antaranya kuadrat sempurna."
    },
    {
      "prompt": "P-06. Untuk $a=360$ dan $b=840$, tentukan FPB dan KPK dari faktorisasi prima, kemudian verifikasi $\\gcd(a,b)\\operatorname{lcm}(a,b)=ab$.",
      "hint": "FPB menggunakan minimum eksponen, KPK menggunakan maksimum.",
      "answer": "Diketahui $360=2^3\\cdot3^2\\cdot5$ dan $840=2^3\\cdot3\\cdot5\\cdot7$. Kedua faktorisasi diperoleh dari Teorema Fundamental Aritmetika.\n\nUntuk FPB, ambil minimum eksponen pada tiap prima: $\\gcd(360,840)=2^3\\cdot3\\cdot5=120$. Untuk KPK, ambil maksimum: $\\operatorname{lcm}(360,840)=2^3\\cdot3^2\\cdot5\\cdot7=2520$.\n\nVerifikasi keterbagian: $360/120=3$ dan $840/120=7$ bilangan bulat, sedangkan $2520/360=7$ dan $2520/840=3$ juga bilangan bulat. Tidak ada FPB lebih besar atau KPK lebih kecil karena eksponen masing-masing prima telah ekstrem.\n\nAkhirnya $120\\cdot2520=302400$ dan $360\\cdot840=302400$. Identitas FPB–KPK benar pada data ini dan mengikuti secara umum dari $\\min(\\alpha,\\beta)+\\max(\\alpha,\\beta)=\\alpha+\\beta$ untuk setiap prima."
    },
    {
      "prompt": "P-07. Buktikan terdapat tak hingga banyak bilangan prima yang kongruen dengan $3$ modulo $4$.",
      "hint": "Andaikan semua prima tersebut $p_1,\\ldots,p_k$ dan tinjau $N=4p_1\\cdots p_k-1$.",
      "answer": "Diketahui kelas prima $p\\equiv3\\pmod4$. Andaikan kelas ini berhingga dan seluruh anggotanya $p_1,\\ldots,p_k$. Himpunan tidak kosong karena $3$ prima dan $3\\equiv3\\pmod4$.\n\nBentuk $N=4p_1\\cdots p_k-1$. Bilangan $N>1$ dan $N\\equiv3\\pmod4$. Untuk setiap $i$, $N\\equiv-1\\pmod{p_i}$, sehingga $p_i\\nmid N$.\n\nMenurut Teorema Fundamental Aritmetika, $N$ adalah hasil kali prima. Semua faktor prima ganjil karena $N$ ganjil. Jika seluruh faktor prima kongruen $1\\pmod4$, produk mereka juga $1\\pmod4$, bertentangan dengan $N\\equiv3\\pmod4$.\n\nJadi setidaknya satu faktor prima $q$ dari $N$ memenuhi $q\\equiv3\\pmod4$. Berdasarkan asumsi $q=p_i$ untuk suatu $i$, tetapi $p_i\\nmid N$. Kontradiksi membuktikan bahwa terdapat tak hingga banyak prima yang kongruen $3$ modulo $4$."
    },
    {
      "prompt": "P-08. Tentukan bilangan bulat positif terkecil yang mempunyai tepat $12$ pembagi positif. Buktikan minimalitasnya.",
      "hint": "Uraikan $12$ menjadi hasil kali $(\\alpha_i+1)$ dan tempatkan eksponen besar pada prima kecil.",
      "answer": "Diketahui bilangan positif $n=\\prod p_i^{\\alpha_i}$ mempunyai $\\tau(n)=\\prod(\\alpha_i+1)=12$. Karena $12>1$, semua $\\alpha_i\\ge1$. Partisi perkalian tak berurutan dari $12$ adalah $12$, $6\\cdot2$, $4\\cdot3$, dan $3\\cdot2\\cdot2$.\n\nUntuk meminimalkan bilangan pada pola eksponen tertentu, gunakan prima terkecil $2,3,5,\\ldots$ dan tempatkan eksponen terbesar pada prima terkecil. Alasannya: jika $p<q$ tetapi eksponen pada $p$ lebih kecil daripada pada $q$, menukarnya menurunkan produk karena $(p/q)^{\\beta-\\alpha}<1$ ketika $\\beta>\\alpha$.\n\nKeempat pola menghasilkan kandidat minimum berturut-turut $2^{11}=2048$, $2^5\\cdot3=96$, $2^3\\cdot3^2=72$, dan $2^2\\cdot3\\cdot5=60$. Semua kemungkinan bentuk faktorisasi dengan tepat $12$ pembagi sudah tercakup oleh partisi tersebut.\n\nNilai terkecil ialah $60$. Verifikasi: $60=2^2\\cdot3\\cdot5$, sehingga $\\tau(60)=(2+1)(1+1)(1+1)=12$. Dengan demikian $60$ adalah bilangan positif terkecil yang mempunyai tepat $12$ pembagi positif."
    }
  ],
  "mistakes": [],
  "connections": []
};
