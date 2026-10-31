import type { BookLessonContent } from "@/data/book-content-types";

/** Newsvendor satu periode: distribusi diskret, fraktil kritis, bukti dua arah, dan soal asli. */
export const newsvendorContent: BookLessonContent = {
  "intro": [
    "Masalah persediaan satu periode muncul ketika jumlah barang harus diputuskan sebelum permintaan diketahui dan barang yang tersisa tidak dapat dipindahkan secara bebas ke periode berikutnya. Contohnya adalah makanan segar, tiket dengan tanggal tertentu, dan produk musiman. Memesan terlalu banyak menimbulkan biaya kelebihan, sedangkan memesan terlalu sedikit menimbulkan biaya kekurangan. Kedua biaya ini umumnya tidak sama, sehingga mengganti permintaan acak dengan rata-ratanya tidak otomatis menghasilkan keputusan terbaik.",
    "Misalkan keputusan pemesanan adalah $q\\ge 0$ unit, sedangkan permintaan acak $D$ bernilai $4$ unit dengan peluang $2/5$ atau $8$ unit dengan peluang $3/5$. Setiap unit yang tersisa merugikan $c_o=2$ satuan biaya, dan setiap unit permintaan yang tidak terpenuhi merugikan $c_u=5$ satuan biaya. Kerugian ketika permintaan nyata adalah $d$ ditulis $L(q,d)=2(q-d)_++5(d-q)_+$, dengan $x_+=\\max\\{x,0\\}$. Kerugian satuan dan kerugian total tidak boleh tertukar.",
    "Tujuan model adalah meminimalkan $R(q)=E[L(q,D)]$, bukan meminimalkan kerugian pada satu skenario yang dipilih sesudah permintaan diketahui. Kita akan menurunkan syarat optimalitas dari kemiringan kiri dan kanan fungsi risiko yang konveks, memeriksa kasus ketika seluruh interval keputusan sama-sama optimal, membandingkan keputusan berbasis rata-rata, serta menyelesaikan pembatasan kapasitas dan perubahan peluang secara eksak.",
    "Rujukan konseptual: Zipkin, Foundations of Inventory Management (McGraw-Hill, 2000), dan Porteus, Foundations of Stochastic Inventory Theory (Stanford University Press, 2002). Pembuktian, perhitungan, dan latihan pada halaman ini dituliskan secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Keputusan Sebelum Permintaan Teramati",
      "statement": "Dalam model persediaan satu periode, $q\\in Q\\subseteq[0,\\infty)$ merupakan jumlah barang yang dipilih sebelum realisasi peubah acak permintaan $D$ diketahui. Untuk distribusi diskret hingga, $P(D=d_i)=p_i>0$ dengan $\\sum_{i=1}^{m}p_i=1$. Nilai $q$ adalah keputusan, sedangkan $d_i$ adalah skenario, sehingga keputusan yang sama harus dievaluasi pada seluruh skenario."
    },
    {
      "kind": "definition",
      "title": "Kerugian Kelebihan dan Kekurangan",
      "statement": "Untuk biaya kelebihan per unit $c_o>0$ dan biaya kekurangan per unit $c_u>0$, definisikan $x_+=\\max\\{x,0\\}$ dan $L(q,d)=c_o(q-d)_++c_u(d-q)_+$. Jika $q>d$, kerugian adalah $c_o(q-d)$; jika $q<d$, kerugian adalah $c_u(d-q)$; dan jika $q=d$, kerugian nol. Parameter $c_o,c_u$ harus mempunyai satuan biaya per unit barang."
    },
    {
      "kind": "definition",
      "title": "Risiko Ekspektasi",
      "statement": "Untuk dukungan hingga $d_1<\\cdots<d_m$ dan peluang $p_i>0$, risiko keputusan $q$ adalah $R(q)=E[L(q,D)]=\\sum_{i=1}^{m}p_iL(q,d_i)$. Keputusan $q^*\\in Q$ optimal apabila $R(q^*)\\le R(q)$ untuk setiap $q\\in Q$. Kelayakan dan optimalitas merupakan dua pemeriksaan berbeda."
    },
    {
      "kind": "definition",
      "title": "Distribusi Kumulatif dan Batas Kirinya",
      "statement": "Fungsi distribusi kumulatif permintaan adalah $F(q)=P(D\\le q)=\\sum_{d_i\\le q}p_i$, sedangkan $F(q^-)=P(D<q)=\\sum_{d_i<q}p_i$. Pada titik massa $d_i$, selisih $F(d_i)-F(d_i^-)=p_i>0$; kedua nilai tidak boleh dipertukarkan dalam syarat optimalitas."
    },
    {
      "kind": "definition",
      "title": "Fraktil Kritis",
      "statement": "Untuk $c_o,c_u>0$, fraktil kritis didefinisikan sebagai $\\alpha=c_u/(c_o+c_u)\\in(0,1)$. Bilangan $\\alpha$ adalah tingkat kumulatif sasaran yang diturunkan dari perbandingan biaya kekurangan dan kelebihan, bukan peluang skenario baru."
    },
    {
      "kind": "proposition",
      "title": "Konveksitas Kerugian dan Risiko",
      "statement": "Untuk setiap $d\\in\\mathbb R$ dan $c_o,c_u>0$, fungsi $q\\mapsto L(q,d)$ konveks pada $\\mathbb R$. Jika $D$ mempunyai dukungan hingga dengan peluang nonnegatif yang berjumlah satu, fungsi $R(q)=E[L(q,D)]$ juga konveks dan kontinu pada $\\mathbb R$.",
      "proof": [
        "Diketahui $L(q,d)=c_o(q-d)_++c_u(d-q)_+$. Pada $q\\ge d$, fungsi ini sama dengan $c_o(q-d)$, sedangkan pada $q\\le d$ sama dengan $c_u(d-q)$. Kedua fungsi tersebut merupakan fungsi afin dengan kemiringan masing-masing $c_o>0$ dan $-c_u<0$. Untuk semua $q$, berlaku $L(q,d)=\\max\\{c_o(q-d),c_u(d-q)\\}$ karena tepat salah satu dari kedua ekspresi tidak negatif, kecuali pada $q=d$ ketika keduanya nol.",
        "Maksimum dua fungsi afin konveks: untuk $0\\le t\\le1$ dan $x,y\\in\\mathbb R$, masing-masing fungsi afin di $tx+(1-t)y$ sama dengan kombinasi nilai pada $x,y$, yang tidak melebihi $tL(x,d)+(1-t)L(y,d)$. Dengan mengambil maksimum, ketaksamaan konveksitas $L(tx+(1-t)y,d)\\le tL(x,d)+(1-t)L(y,d)$ diperoleh.",
        "Kalikan ketaksamaan tersebut dengan $p_i\\ge0$ dan jumlahkan pada seluruh $d_i$. Diperoleh $R(tx+(1-t)y)\\le tR(x)+(1-t)R(y)$. Setiap $L(\\cdot,d_i)$ kontinu sebagai maksimum dua fungsi kontinu, dan jumlah hingga fungsi kontinu tetap kontinu. Kedua klaim terbukti. $\\square$"
      ]
    },
    {
      "kind": "lemma",
      "title": "Kemiringan Satu Sisi Fungsi Risiko",
      "statement": "Jika $D$ berdistrubusi diskret dengan dukungan hingga dan $c_o,c_u>0$, turunan kiri dan kanan $R$ ada di setiap $q\\in\\mathbb R$ serta memenuhi $R'_-(q)=(c_o+c_u)F(q^-)-c_u$ dan $R'_+(q)=(c_o+c_u)F(q)-c_u$.",
      "proof": [
        "Untuk satu skenario $d_i$, fungsi $L(q,d_i)$ memiliki kemiringan $-c_u$ ketika $q<d_i$ dan $c_o$ ketika $q>d_i$. Tepat pada $q=d_i$, kemiringan kiri adalah $-c_u$ dan kemiringan kanan $c_o$. Karena dukungan hingga, perubahan kecil dari $q$ ke kiri atau kanan tidak melewati titik dukungan lain; turunan satu sisi dari jumlah dapat dihitung dengan menjumlahkan kemiringan berbobot.",
        "Di sisi kiri $q$, massa dengan $d_i<q$ berkontribusi $c_op_i$, sedangkan massa dengan $d_i\\ge q$ berkontribusi $-c_up_i$. Jumlahnya $c_oP(D<q)-c_uP(D\\ge q)=(c_o+c_u)F(q^-)-c_u$.",
        "Di sisi kanan $q$, massa dengan $d_i\\le q$ berkontribusi $c_op_i$, sedangkan massa dengan $d_i>q$ berkontribusi $-c_up_i$. Jumlahnya $(c_o+c_u)F(q)-c_u$. Ini membuktikan kedua rumus, termasuk pada titik lompatan distribusi. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Optimalitas Fraktil Kritis",
      "statement": "Misalkan $D$ mempunyai dukungan hingga, $c_o,c_u>0$, dan keputusan diperbolehkan pada seluruh $\\mathbb R$. Titik $q^*$ meminimalkan $R(q)=E[L(q,D)]$ secara global jika dan hanya jika $F((q^*)^-)\\le\\alpha\\le F(q^*)$, dengan $\\alpha=c_u/(c_o+c_u)$.",
      "proof": [
        "Arah $(\\Rightarrow)$. Misalkan $q^*$ peminimum global. Untuk setiap $h>0$ cukup kecil, $R(q^*)\\le R(q^*-h)$ dan $R(q^*)\\le R(q^*+h)$. Pembagian selisih yang sesuai dan limit satu sisi memberi $R'_-(q^*)\\le0$ serta $R'_+(q^*)\\ge0$. Substitusi rumus lemma menghasilkan $(c_o+c_u)F((q^*)^-)-c_u\\le0\\le(c_o+c_u)F(q^*)-c_u$. Karena $c_o+c_u>0$, diperoleh $F((q^*)^-)\\le\\alpha\\le F(q^*)$.",
        "Arah $(\\Leftarrow)$. Misalkan kedua ketaksamaan distribusi berlaku. Lemma memberi $R'_-(q^*)\\le0\\le R'_+(q^*)$. Karena $R$ konveks, kemiringan secan menuju titik di kiri $q^*$ tidak lebih besar daripada kemiringan kiri di $q^*$, sedangkan kemiringan secan ke kanan tidak lebih kecil daripada kemiringan kanan di $q^*$. Untuk $x<q^*$, berlaku $(R(q^*)-R(x))/(q^*-x)\\le R'_-(q^*)\\le0$, sehingga $R(x)\\ge R(q^*)$. Untuk $x>q^*$, berlaku $(R(x)-R(q^*))/(x-q^*)\\ge R'_+(q^*)\\ge0$, sehingga $R(x)\\ge R(q^*)$.",
        "Seluruh $x\\in\\mathbb R$ telah tercakup, termasuk $x=q^*$ yang memberi kesamaan. Dengan demikian $q^*$ peminimum global, dan kedua arah ekuivalensi terbukti. $\\square$"
      ],
      "explanation": "Untuk keputusan nonnegatif dan permintaan nonnegatif, peminimum global di atas otomatis berada dalam rentang dukungan nonnegatif. Ketaksamaan tidak ketat diperlukan agar interval optimum pada distribusi diskret tidak hilang."
    },
    {
      "kind": "proposition",
      "title": "Keberadaan Peminimum dan Batas Dukungan",
      "statement": "Jika dukungan permintaan hingga adalah $d_1<\\cdots<d_m$ dengan $p_i>0$ dan $c_o,c_u>0$, maka $R$ mencapai minimum global, dan setiap peminimumnya berada dalam interval $[d_1,d_m]$.",
      "proof": [
        "Untuk $q<d_1$, semua skenario memenuhi $d_i>q$, sehingga $R(q)=c_u(E[D]-q)$. Fungsi ini turun secara ketat ketika $q$ dinaikkan, sebab $c_u>0$; titik di luar interval pada sisi kiri tidak mungkin optimal. Untuk $q>d_m$, semua skenario memenuhi $d_i<q$, sehingga $R(q)=c_o(q-E[D])$ dan naik secara ketat ketika $q$ dinaikkan. Titik di sisi kanan juga tidak mungkin optimal.",
        "Fungsi $R$ kontinu menurut proposisi konveksitas. Teorema nilai ekstrem pada interval kompak $[d_1,d_m]$ menjamin bahwa $R$ mencapai minimum di interval tersebut. Karena nilai di luar interval dapat diperbaiki dengan bergerak ke arah interval, peminimum pada interval sekaligus global, dan semua peminimum harus berada di dalamnya. Kasus satu titik dukungan $d_1=d_m$ menghasilkan peminimum tunggal $q=d_1$ langsung dari rumus kerugian. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Distribusi Dua Titik dan Interval Optimum",
      "statement": "Misalkan $P(D=a)=p$, $P(D=b)=1-p$, dengan $a<b$, $0<p<1$, dan $c_o,c_u>0$. Untuk $\\alpha=c_u/(c_o+c_u)$, himpunan peminimum $R$ adalah $\\{a\\}$ jika $p>\\alpha$, $\\{b\\}$ jika $p<\\alpha$, dan seluruh interval $[a,b]$ jika $p=\\alpha$.",
      "proof": [
        "Di luar $[a,b]$, risiko menurun ketat pada sisi kiri dan meningkat ketat pada sisi kanan, sebagaimana dibuktikan pada proposisi sebelumnya. Pada interval $[a,b]$, biaya untuk skenario $a$ adalah $c_o(q-a)$ dan untuk skenario $b$ adalah $c_u(b-q)$. Oleh karena itu $R(q)=pc_o(q-a)+(1-p)c_u(b-q)$.",
        "Kemiringan pada bagian dalam interval adalah $pc_o-(1-p)c_u=(c_o+c_u)(p-\\alpha)$. Jika $p>\\alpha$, kemiringan positif dan minimum dicapai hanya di $a$; jika $p<\\alpha$, kemiringan negatif dan minimum dicapai hanya di $b$. Jika $p=\\alpha$, kemiringan nol sehingga semua titik $q\\in[a,b]$ memberi risiko yang sama dan minimum; titik di luar interval tetap lebih buruk. Ketiga kasus saling lepas dan mencakup seluruh kemungkinan. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Bahaya Mengganti Permintaan dengan Rata-rata",
      "statement": "Untuk distribusi permintaan hingga dan setiap keputusan tetap $q$, berlaku $L(q,E[D])\\le E[L(q,D)]$. Jika terdapat peluang positif untuk permintaan di kedua sisi $q$ dan $c_o,c_u>0$, ketaksamaan ini ketat.",
      "proof": [
        "Tulis $A_i=c_o(q-d_i)$ dan $B_i=c_u(d_i-q)$. Karena $L(q,d_i)=\\max\\{A_i,B_i\\}$, setiap suku memenuhi $L(q,d_i)\\ge A_i$ dan $L(q,d_i)\\ge B_i$. Kalikan dengan $p_i\\ge0$ dan jumlahkan: $R(q)\\ge\\max\\{\\sum_i p_iA_i,\\sum_i p_iB_i\\}$.",
        "Linearitas ekspektasi memberi $\\sum_i p_iA_i=c_o(q-E[D])$ dan $\\sum_i p_iB_i=c_u(E[D]-q)$. Maksimum keduanya tepat $L(q,E[D])$. Apabila terdapat massa positif pada $d_i<q$ dan pada $d_j>q$, jumlah maksimum lebih besar secara ketat daripada masing-masing jumlah fungsi afin, sebab pada setidaknya satu kelompok skenario cabang afin yang tidak aktif bernilai lebih kecil. Dengan demikian $R(q)>L(q,E[D])$ pada keadaan tersebut. $\\square$"
      ]
    },
    {
      "kind": "corollary",
      "title": "Peminimum Bilangan Bulat pada Dukungan Bilangan Bulat",
      "statement": "Jika seluruh nilai dukungan $D$ merupakan bilangan bulat nonnegatif, $c_o,c_u>0$, dan $q$ dibatasi pada $\\mathbb Z_{\\ge0}$, maka terdapat keputusan optimal yang sama dengan salah satu nilai dukungan $d_i$.",
      "proof": [
        "Ambil $\\alpha=c_u/(c_o+c_u)\\in(0,1)$ dan pilih indeks terkecil $k$ yang memenuhi $F(d_k)\\ge\\alpha$. Indeks ini ada karena $F(d_m)=1>\\alpha$. Minimalitas $k$ memberi $F(d_k^-)<\\alpha$ (untuk $k=1$, nilai kirinya nol), sehingga $F(d_k^-)\\le\\alpha\\le F(d_k)$.",
        "Teorema fraktil kritis menunjukkan $d_k$ meminimalkan risiko pada seluruh $\\mathbb R$. Karena $d_k$ adalah bilangan bulat nonnegatif, ia juga layak dalam masalah bilangan bulat dan tidak mungkin dikalahkan oleh keputusan bilangan bulat lain. Keberadaan peminimum pada salah satu titik dukungan terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh 1 · Keputusan Tetap pada Dua Skenario",
      "problem": "Sebuah kios memilih jumlah barang $q=6$ sebelum mengetahui apakah permintaan $D=4$ atau $D=8$. Jelaskan objek yang merupakan keputusan dan yang merupakan peubah acak.",
      "solution": [
        "Diketahui $q=6$ ditetapkan sebelum pengamatan. Nilai $D$ belum diketahui dan hanya dapat mengambil nilai $4$ atau $8$ sesuai distribusi yang diberikan. Oleh sebab itu $q$ bukan peubah acak pada model keputusan satu tahap ini.",
        "Pada realisasi $D=4$, stok tersisa adalah $6-4=2$ unit; pada realisasi $D=8$, terjadi kekurangan $8-6=2$ unit. Kedua konsekuensi muncul dari keputusan yang sama, bukan dari dua keputusan berbeda.",
        "Mengganti $q$ setelah $D$ teramati menjadi $q=D$ akan menghilangkan risiko secara artifisial dan mengubah masalah menjadi keputusan dengan informasi sempurna. Pemisahan waktu keputusan dan observasi adalah bagian dari definisi model."
      ],
      "conclusion": "Jumlah pesanan tetap 6 unit, sedangkan permintaan adalah peubah acak dengan dua kemungkinan hasil.",
      "forDefinition": "Keputusan Sebelum Permintaan Teramati"
    },
    {
      "title": "Contoh 2 · Menghitung Kerugian per Skenario",
      "problem": "Untuk $c_o=2$, $c_u=5$, dan $q=6$, hitung kerugian saat $d=4$ serta saat $d=8$.",
      "solution": [
        "Diketahui $L(q,d)=2(q-d)_++5(d-q)_+$. Untuk $d=4$, berlaku $(6-4)_+=2$ dan $(4-6)_+=0$, sehingga $L(6,4)=2(2)+5(0)=4$ satuan biaya.",
        "Untuk $d=8$, berlaku $(6-8)_+=0$ dan $(8-6)_+=2$, sehingga $L(6,8)=2(0)+5(2)=10$ satuan biaya.",
        "Pemeriksaan kasus: tidak mungkin terjadi kelebihan dan kekurangan sekaligus untuk satu pasangan $(q,d)$. Kedua nilai berbeda meskipun selisih jumlah barang sama-sama 2 unit karena biaya per unit tidak simetris."
      ],
      "conclusion": "Kerugian pada permintaan 4 adalah 4, sedangkan pada permintaan 8 adalah 10.",
      "forDefinition": "Kerugian Kelebihan dan Kekurangan"
    },
    {
      "title": "Contoh 3 · Risiko dan Rata-rata Kerugian",
      "problem": "Dengan $P(D=4)=2/5$ dan $P(D=8)=3/5$, bandingkan $R(4)$, $R(6)$, dan $R(8)$ untuk $c_o=2,c_u=5$.",
      "solution": [
        "Diketahui risiko adalah rata-rata kerugian berbobot peluang. Pada $q=4$, kerugian untuk $d=4$ nol dan untuk $d=8$ adalah $5(8-4)=20$, sehingga $R(4)=(2/5)0+(3/5)20=12$.",
        "Pada $q=6$, contoh sebelumnya memberi $L(6,4)=4$ dan $L(6,8)=10$, sehingga $R(6)=(2/5)4+(3/5)10=8/5+6=38/5=7{,}6$.",
        "Pada $q=8$, kerugian untuk $d=4$ adalah $2(8-4)=8$ dan untuk $d=8$ nol, sehingga $R(8)=(2/5)8+(3/5)0=16/5=3{,}2$. Ketiga keputusan layak, tetapi memiliki risiko berbeda."
      ],
      "conclusion": "Di antara 4, 6, dan 8 unit, pemesanan 8 unit mempunyai risiko terendah, yakni 16/5.",
      "forDefinition": "Risiko Ekspektasi"
    },
    {
      "title": "Contoh 4 · Distribusi Kumulatif Diskret",
      "problem": "Untuk $P(D=4)=2/5$ dan $P(D=8)=3/5$, hitung $F(4^-)$, $F(4)$, $F(8^-)$, dan $F(8)$.",
      "solution": [
        "Diketahui $F(q)=P(D\\le q)$ dan $F(q^-)=P(D<q)$. Tidak ada permintaan di bawah 4, sehingga $F(4^-)=0$, sedangkan $F(4)=P(D=4)=2/5$.",
        "Sebelum titik 8, hanya skenario 4 yang telah terhitung, sehingga $F(8^-)=2/5$. Tepat pada 8, seluruh peluang telah terakumulasi, sehingga $F(8)=2/5+3/5=1$.",
        "Pemeriksaan lompatan: $F(4)-F(4^-)=2/5$ dan $F(8)-F(8^-)=3/5$, sama dengan peluang masing-masing titik. Perbedaan tanda $<$ dan $\\le$ penting untuk keputusan optimum di titik massa."
      ],
      "conclusion": "Nilai batas kiri dan kanan adalah 0, 2/5, 2/5, dan 1 secara berurutan.",
      "forDefinition": "Distribusi Kumulatif dan Batas Kirinya"
    },
    {
      "title": "Contoh 5 · Menggunakan Fraktil Kritis",
      "problem": "Dengan biaya kelebihan $2$ dan kekurangan $5$, tentukan keputusan optimal pada permintaan $4$ atau $8$ dengan peluang $2/5$ dan $3/5$.",
      "solution": [
        "Diketahui $c_o=2$ dan $c_u=5$, keduanya positif. Fraktil kritis adalah $\\alpha=5/(2+5)=5/7$. Peluang kumulatif pada 4 adalah $F(4)=2/5<5/7$, sehingga syarat optimalitas tidak dipenuhi oleh $q=4$.",
        "Pada $q=8$, batas kiri $F(8^-)=2/5$ dan nilai kanan $F(8)=1$. Ketaksamaan $2/5\\le5/7\\le1$ benar, sehingga teorema fraktil kritis membuktikan $q^*=8$ sebagai peminimum global.",
        "Sebagai verifikasi independen, risiko pada rentang $4\\le q\\le8$ adalah $R(q)=(2/5)2(q-4)+(3/5)5(8-q)=104/5-(11/5)q$, yang menurun ketat. Di luar rentang itu, risiko memburuk ketika menjauhi dukungan. Hasilnya konsisten dengan $R(8)=16/5$."
      ],
      "conclusion": "Jumlah pesanan optimal adalah 8 unit dengan risiko 16/5.",
      "forDefinition": "Fraktil Kritis"
    },
    {
      "title": "Contoh 6 · Interval Keputusan Optimal",
      "problem": "Misalkan $P(D=2)=3/5$, $P(D=5)=2/5$, $c_o=2$, dan $c_u=3$. Tentukan semua peminimum risiko.",
      "solution": [
        "Diketahui fraktil kritis $\\alpha=3/(2+3)=3/5$. Massa pada titik permintaan terkecil tepat sama dengan fraktil kritis, yakni $p=3/5=\\alpha$. Proposisi distribusi dua titik menyatakan bahwa setiap $q\\in[2,5]$ optimal.",
        "Verifikasi langsung untuk $2\\le q\\le5$: $R(q)=(3/5)2(q-2)+(2/5)3(5-q)=(6/5)(q-2)+(6/5)(5-q)=18/5$, tidak bergantung pada $q$.",
        "Untuk $q<2$, risiko turun saat $q$ dinaikkan karena seluruh permintaan lebih besar; untuk $q>5$, risiko naik saat $q$ dinaikkan karena seluruh permintaan lebih kecil. Tidak ada titik di luar $[2,5]$ yang dapat menyamai risiko minimum."
      ],
      "conclusion": "Himpunan seluruh keputusan optimal adalah interval [2,5], dengan risiko 18/5."
    },
    {
      "title": "Contoh 7 · Kapasitas Maksimum",
      "problem": "Gunakan distribusi dan biaya pada Contoh 5, tetapi gudang hanya mampu menyimpan $0\\le q\\le6$. Tentukan keputusan optimal baru.",
      "solution": [
        "Tanpa pembatasan, keputusan optimal adalah $q=8$, yang tidak layak karena kapasitas maksimum 6. Untuk $q\\in[4,8]$, kemiringan risiko adalah $(2/5)2-(3/5)5=4/5-3=-11/5<0$. Jadi risiko terus menurun sepanjang $[4,6]$.",
        "Untuk $0\\le q<4$, semua permintaan melebihi $q$, sehingga $R(q)=5(E[D]-q)$ juga menurun ketat terhadap $q$. Oleh karena itu $q=6$ meminimalkan risiko pada seluruh interval layak $[0,6]$.",
        "Perhitungan langsung memberi $R(6)=(2/5)\\,2(6-4)+(3/5)\\,5(8-6)=8/5+6=38/5$. Nilai ini lebih tinggi daripada risiko optimum tanpa kapasitas $16/5$, tetapi perbandingan tersebut tidak membenarkan penggunaan keputusan yang tidak layak."
      ],
      "conclusion": "Dengan kapasitas 6 unit, keputusan optimal adalah q=6 dan risiko 38/5."
    },
    {
      "title": "Contoh 8 · Kepekaan terhadap Estimasi Peluang",
      "problem": "Untuk permintaan 4 dan 8, $c_o=2$, $c_u=5$, bandingkan keputusan optimal ketika $P(D=4)=7/10$ dan ketika $P(D=4)=3/4$.",
      "solution": [
        "Fraktil kritis tetap $\\alpha=5/7\\approx0{,}7143$. Jika $p=P(D=4)=7/10<5/7$, proposisi dua titik memberi peminimum tunggal $q=8$. Risikonya $R(8)=p\\,2(8-4)=(7/10)8=28/5=5{,}6$.",
        "Jika $p=3/4>5/7$, peminimum tunggal bergeser ke $q=4$. Risikonya $R(4)=(1-p)5(8-4)=(1/4)20=5$.",
        "Perubahan peluang dari 0,70 menjadi 0,75 membalik pilihan optimal, karena keduanya berada pada sisi berbeda dari ambang 5/7. Kesimpulan ini bersyarat pada biaya dan dukungan permintaan yang tetap; ketidakpastian estimasi peluang perlu dilaporkan saat model digunakan."
      ],
      "conclusion": "Peluang 0,70 memilih 8 unit, sedangkan peluang 0,75 memilih 4 unit."
    }
  ],
  "exercises": [
    {
      "prompt": "Untuk $q=7$, $d=5$, $c_o=3$, dan $c_u=4$, hitung kerugian dan periksa satuannya. Ulangi untuk $d=9$.",
      "hint": "Pisahkan kasus kelebihan dan kekurangan menggunakan bagian positif.",
      "answer": "Diketahui $L(q,d)=3(q-d)_++4(d-q)_+$. Saat $q=7$ dan $d=5$, jumlah kelebihan adalah $7-5=2$ unit dan tidak ada kekurangan. Perhitungannya $L(7,5)=3(2)+4(0)=6$ satuan biaya. Saat $d=9$, jumlah kekurangan adalah $9-7=2$ unit dan tidak ada kelebihan, sehingga $L(7,9)=3(0)+4(2)=8$ satuan biaya. Setiap koefisien biaya mempunyai satuan biaya per unit, sedangkan selisih jumlah barang dalam unit; hasil perkalian keduanya adalah satuan biaya. Pemeriksaan tanda menunjukkan kedua kerugian tidak negatif. Untuk selisih fisik yang sama, kerugian berbeda karena $c_o\\ne c_u$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Permintaan $D$ bernilai $2,5,8$ dengan peluang berturut-turut $1/5,1/2,3/10$. Jika $c_o=2$ dan $c_u=3$, tentukan pemesanan optimal dan hitung risikonya.",
      "hint": "Hitung fraktil kritis dan nilai CDF pada setiap titik dukungan.",
      "answer": "Diketahui $p_1=1/5$, $p_2=1/2$, $p_3=3/10$ yang berjumlah satu, dan $c_o,c_u>0$. Fraktil kritis adalah $\\alpha=3/(2+3)=3/5$. Nilai CDF pada titik dukungan adalah $F(2)=1/5$, $F(5)=7/10$, dan $F(8)=1$. Titik pertama yang memenuhi $F(q)\\ge3/5$ ialah $q=5$; batas kirinya $F(5^-)=1/5\\le3/5$. Teorema fraktil kritis menjamin $q^*=5$ optimal global. Risiko pada keputusan tersebut adalah $R(5)=(1/5)2(5-2)+(1/2)0+(3/10)3(8-5)=6/5+27/10=39/10=3{,}9$. Sebagai pemeriksaan, $R(2)=(1/2)3(3)+(3/10)3(6)=99/10$ dan $R(8)=(1/5)2(6)+(1/2)2(3)=27/5$, keduanya lebih besar daripada $39/10$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa untuk permintaan dua titik $a<b$ dengan peluang $p$ dan $1-p$, seluruh interval $[a,b]$ optimal tepat ketika $p=c_u/(c_o+c_u)$.",
      "hint": "Tulis risiko secara eksplisit pada interval, lalu periksa kemiringan dan perilaku di luarnya.",
      "answer": "Diketahui $c_o,c_u>0$ dan $0<p<1$. Pada $q\\in[a,b]$, permintaan $a$ menimbulkan kelebihan $q-a$, sedangkan permintaan $b$ menimbulkan kekurangan $b-q$. Dengan demikian $R(q)=pc_o(q-a)+(1-p)c_u(b-q)$ dan kemiringannya $s=pc_o-(1-p)c_u=(c_o+c_u)p-c_u$. Arah $(\\Rightarrow)$: jika seluruh interval optimal, khususnya dua titik berbeda di dalam interval mempunyai nilai risiko sama; karena $R$ afin, kemiringannya harus nol. Pembagian $s=0$ oleh $c_o+c_u>0$ memberi $p=c_u/(c_o+c_u)$. Arah $(\\Leftarrow)$: jika persamaan peluang itu berlaku, $s=0$, sehingga $R$ konstan pada $[a,b]$. Untuk $q<a$, seluruh permintaan lebih besar daripada $q$, sehingga risiko turun ketika $q$ mendekati $a$; untuk $q>b$, seluruh permintaan lebih kecil, sehingga risiko naik ketika $q$ menjauhi $b$. Setiap titik di $[a,b]$ dan hanya titik-titik tersebut merupakan peminimum global. Kedua arah terbukti.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Pada model $D\\in\\{4,8\\}$ dengan peluang $2/5,3/5$, $c_o=2$, dan $c_u=5$, bandingkan $L(q,E[D])$ dengan $E[L(q,D)]$ pada $q=E[D]$.",
      "hint": "Rata-rata permintaan tidak sama dengan rata-rata fungsi kerugian yang berbentuk sudut.",
      "answer": "Diketahui $E[D]=(2/5)4+(3/5)8=8/5+24/5=32/5=6{,}4$. Pilih $q=E[D]=32/5$. Jika permintaan diganti oleh mean, kerugian yang dihitung adalah $L(32/5,32/5)=0$. Akan tetapi, pada permintaan 4 terjadi kelebihan $32/5-4=12/5$, sehingga kerugiannya $2(12/5)=24/5$. Pada permintaan 8 terjadi kekurangan $8-32/5=8/5$, sehingga kerugiannya $5(8/5)=8$. Risiko sebenarnya adalah $(2/5)(24/5)+(3/5)8=48/25+24/5=168/25=6{,}72$. Ketaksamaan $0<168/25$ menegaskan bahwa mengganti permintaan acak dengan mean menghilangkan biaya variasi skenario. Syarat peluang positif di kedua sisi keputusan dipenuhi, sehingga ketaksamaan memang ketat.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Permintaan bilangan bulat mempunyai dukungan $\\{2,5,9\\}$ dan peluang $\\{1/5,1/2,3/10\\}$. Untuk $c_o=3$ dan $c_u=2$, buktikan ada peminimum bilangan bulat dan tentukan nilainya.",
      "hint": "Gunakan fraktil kritis serta argumen bahwa titik dukungan bilangan bulat adalah layak.",
      "answer": "Diketahui semua titik dukungan merupakan bilangan bulat nonnegatif, sehingga corollary peminimum bilangan bulat berlaku. Fraktil kritis adalah $\\alpha=2/(3+2)=2/5$. Nilai CDF memenuhi $F(2)=1/5<2/5$, sedangkan $F(5)=1/5+1/2=7/10\\ge2/5$. Karena $F(5^-)=1/5\\le2/5\\le7/10=F(5)$, teorema fraktil kritis membuktikan bahwa $q=5$ meminimalkan risiko pada seluruh bilangan real. Titik 5 juga bilangan bulat nonnegatif, sehingga layak dan optimal pada himpunan keputusan bilangan bulat. Risiko $R(5)=(1/5)3(3)+(1/2)0+(3/10)2(4)=9/5+12/5=21/5$. Pada interval $(2,5)$ kemiringan risiko $(c_o+c_u)F(q)-c_u=5(1/5)-2=-1<0$, sedangkan pada $(5,9)$ kemiringannya $5(7/10)-2=3/2>0$; ini memverifikasi ketunggalan peminimum 5.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Dengan permintaan 4 atau 8 berpeluang $2/5$ dan $3/5$, serta biaya $c_o=2,c_u=5$, tentukan keputusan optimal apabila kapasitas gudang membatasi $0\\le q\\le6$.",
      "hint": "Periksa kemiringan risiko pada bagian interval layak sebelum dan sesudah titik dukungan 4.",
      "answer": "Diketahui keputusan tanpa kapasitas adalah $q=8$, tetapi titik ini melanggar $q\\le6$. Pada $0\\le q<4$, semua permintaan lebih besar daripada $q$, sehingga $R(q)=5(E[D]-q)$ mempunyai kemiringan $-5<0$. Pada $4<q\\le6$, hanya permintaan 4 berada di bawah keputusan dan permintaan 8 di atasnya. Kemiringan risiko adalah $(2/5)c_o-(3/5)c_u=(2/5)2-(3/5)5=4/5-3=-11/5<0$. Kontinuitas pada $q=4$ memastikan risiko menurun pada seluruh interval layak, sehingga minimum dicapai di batas kanan $q^*=6$. Nilai risikonya $R(6)=(2/5)2(2)+(3/5)5(2)=8/5+6=38/5$. Keputusan 6 layak, sedangkan keputusan 8 meskipun berisiko lebih rendah tidak boleh dipilih. Tidak ada keputusan dalam $[0,6]$ dengan risiko lebih kecil daripada $38/5$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Suatu daftar skenario mencantumkan $D=3$ dengan peluang $0$, $D=5$ dengan peluang $3/5$, dan $D=9$ dengan peluang $2/5$. Untuk $c_o=2,c_u=3$, tentukan semua peminimum dan jelaskan pengaruh skenario peluang nol.",
      "hint": "Skenario dengan peluang nol tidak memengaruhi risiko maupun CDF.",
      "answer": "Diketahui peluang pada $D=3$ adalah nol, sehingga titik tersebut bukan anggota dukungan probabilistik positif. Distribusi efektif hanya mempunyai dua titik $a=5$ dan $b=9$, dengan $p=3/5$ dan $1-p=2/5$. Fraktil kritis adalah $\\alpha=3/(2+3)=3/5=p$. Proposisi dua titik memberi himpunan peminimum tepat $[5,9]$. Verifikasi langsung: untuk $5\\le q\\le9$, $R(q)=(3/5)2(q-5)+(2/5)3(9-q)=(6/5)(q-5)+(6/5)(9-q)=24/5$. Di luar interval, risiko naik ketika bergerak menjauhi interval. Menambahkan skenario peluang nol tidak mengubah nilai ekspektasi, sebab suku $0\\cdot L(q,3)=0$ untuk setiap $q$. Memperlakukan $D=3$ sebagai massa positif akan menghasilkan CDF dan keputusan yang salah.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk permintaan 4 atau 8 dengan biaya $c_o=2,c_u=5$, tentukan keputusan optimum jika peluang permintaan 4 berubah dari $7/10$ menjadi $3/4$, dan hitung risiko minimum pada masing-masing keadaan.",
      "hint": "Bandingkan kedua peluang dengan fraktil 5/7, lalu evaluasi risiko pada keputusan terpilih.",
      "answer": "Diketahui $a=4$, $b=8$, $c_o=2$, dan $c_u=5$, sehingga $\\alpha=5/7$. Pada keadaan pertama, $p=P(D=4)=7/10$. Perbandingan silang $7\\cdot7=49<50=5\\cdot10$ menunjukkan $7/10<5/7$. Oleh proposisi dua titik, peminimum tunggal adalah $q=8$, dengan risiko $R(8)=(7/10)2(8-4)=56/10=28/5$. Pada keadaan kedua, $p=3/4$ dan $3\\cdot7=21>20=5\\cdot4$, sehingga $3/4>5/7$. Peminimum tunggal berpindah ke $q=4$, dengan risiko $R(4)=(1-3/4)5(8-4)=5$. Kedua keputusan diperoleh dari model yang sama dengan hanya peluang skenario diubah. Risiko minimum pada keadaan pertama 28/5 dan pada keadaan kedua 5; keputusan berubah secara diskret ketika peluang melintasi ambang 5/7.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
