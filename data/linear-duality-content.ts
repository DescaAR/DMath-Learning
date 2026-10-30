import type { BookLessonContent } from "@/data/book-content-types";

/** Authored primal-dual certificates; Taha (2017), Bertsimas–Tsitsiklis (1997). */
export const linearDualityContent:BookLessonContent = {
  "intro": [
    "Pasangan primal–dual memberi cara memeriksa optimalitas program linear tanpa mengandalkan tebakan dari tabel simplex. Setiap titik dual layak menyediakan batas atas bagi masalah primal maksimum. Jika batas tersebut dicapai oleh keputusan primal yang layak, optimalitas keduanya terbukti melalui ketaksamaan, bukan semata hasil komputasi.",
    "Pembahasan menggunakan satu konvensi tetap: primal maksimum dengan $Ax\\le b$ dan $x\\ge0$, dual minimum dengan $A^Ty\\ge c$ dan $y\\ge0$. Kita membedakan kelayakan, celah dualitas, complementary slackness, dan ketakterbatasan. Klaim dualitas kuat yang memerlukan teorema eksistensi umum tidak dipakai tanpa pembuktian; sertifikat celah nol cukup untuk semua contoh di halaman ini.",
    "Model acuan: maksimum $3x+2z$ dengan $x+z\\le4$, $2x+z\\le6$, dan $x,z\\ge0$. Dualnya minimum $4u+6v$ dengan $u+2v\\ge3$, $u+v\\ge2$, dan $u,v\\ge0$. Seluruh contoh menghitung kelayakan secara eksplisit sebelum mengklaim optimalitas.",
    "Rujukan: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017), bab linear programming dan duality; Dimitris Bertsimas dan John N. Tsitsiklis, Introduction to Linear Optimization (1997), bab duality."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Pasangan Primal–Dual",
      "statement": "Diberikan $A\\in\\mathbb R^{m\\times n}$, $b\\in\\mathbb R^m$, dan $c\\in\\mathbb R^n$. Pasangan program linear dalam konvensi ini ialah primal $(P):\\ \\max\\{c^Tx:Ax\\le b,\\ x\\ge0\\}$ dan dual $(D):\\ \\min\\{b^Ty:A^Ty\\ge c,\\ y\\ge0\\}$. Semua pertidaksamaan vektor dipahami per komponen.",
      "explanation": "Koefisien tiap kendala primal menjadi kolom pada kendala dual. Arah pertidaksamaan dan tanda variabel bergantung pada bentuk primal yang dipilih."
    },
    {
      "kind": "definition",
      "title": "Kelayakan Primal dan Dual",
      "statement": "Vektor $x$ layak primal jika $x\\ge0$ dan $Ax\\le b$. Vektor $y$ layak dual jika $y\\ge0$ dan $A^Ty\\ge c$. Kelayakan tidak sama dengan optimalitas; nilai tujuan pada titik layak dapat masih ditingkatkan.",
      "explanation": "Memeriksa setiap komponen kendala merupakan syarat sebelum membandingkan nilai tujuan."
    },
    {
      "kind": "definition",
      "title": "Slack dan Reduced Cost",
      "statement": "Untuk pasangan layak $(x,y)$, slack primal ialah $s=b-Ax\\ge0$, sedangkan surplus dual (reduced cost dalam konvensi ini) ialah $r=A^Ty-c\\ge0$. Kondisi complementary slackness ditulis $y_is_i=0$ untuk semua $i$ dan $x_jr_j=0$ untuk semua $j$.",
      "explanation": "Slack positif menunjukkan kendala primal tidak aktif; surplus positif menunjukkan kendala dual tidak aktif."
    },
    {
      "kind": "definition",
      "title": "Celah Dualitas",
      "statement": "Untuk pasangan layak $(x,y)$, celah dualitas didefinisikan sebagai $G(x,y)=b^Ty-c^Tx$. Dualitas lemah menjamin $G(x,y)\\ge0$. Celah nol adalah sertifikat bahwa kedua titik layak tersebut optimal.",
      "explanation": "Celah adalah selisih dua nilai objektif, bukan jarak Euclidean antara dua vektor keputusan."
    },
    {
      "kind": "theorem",
      "title": "Dualitas Lemah",
      "statement": "Jika $x\\ge0$, $Ax\\le b$, $y\\ge0$, dan $A^Ty\\ge c$, maka $c^Tx\\le b^Ty$. Tidak diperlukan asumsi bahwa kedua masalah mempunyai optimum.",
      "given": "Diketahui $x$ dan $y$ masing-masing layak untuk $(P)$ dan $(D)$.",
      "toProve": "Dibuktikan bahwa $c^Tx\\le b^Ty$.",
      "proof": [
        "Diketahui $A^Ty-c\\ge0$ per komponen dan $x\\ge0$. Karena hasil kali setiap pasangan komponen taknegatif, $\\sum_jx_j((A^Ty)_j-c_j)\\ge0$. Dengan demikian $c^Tx\\le x^TA^Ty$.",
        "Diketahui pula $b-Ax\\ge0$ dan $y\\ge0$. Dengan alasan serupa, $\\sum_i y_i(b_i-(Ax)_i)\\ge0$, sehingga $y^TAx\\le b^Ty$.",
        "Sifat asosiatif perkalian matriks dan identitas skalar $x^TA^Ty=y^TAx$ menghasilkan $c^Tx\\le x^TA^Ty=y^TAx\\le b^Ty$. Kedua titik hanya diasumsikan layak, sehingga ketaksamaan berlaku untuk setiap pasangan layak. Dengan demikian dualitas lemah terbukti."
      ]
    },
    {
      "kind": "proposition",
      "title": "Identitas Celah Dualitas",
      "statement": "Untuk setiap pasangan layak $(x,y)$ berlaku $G(x,y)=y^T(b-Ax)+x^T(A^Ty-c)=\\sum_i y_is_i+\\sum_jx_jr_j$. Setiap suku pada jumlah terakhir taknegatif.",
      "proof": [
        "Diketahui $G=b^Ty-c^Tx$. Tambahkan dan kurangkan skalar $y^TAx$: $G=b^Ty-y^TAx+y^TAx-c^Tx$.",
        "Kelompokkan suku pertama menjadi $y^T(b-Ax)$, dan gunakan $y^TAx=x^TA^Ty$ pada dua suku terakhir sehingga $G=y^T(b-Ax)+x^T(A^Ty-c)$.",
        "Karena $s=b-Ax\\ge0$, $r=A^Ty-c\\ge0$, serta $x,y\\ge0$, setiap hasil kali $y_is_i$ dan $x_jr_j$ taknegatif. Identitas juga memperlihatkan sumber celah secara komponen. Dengan demikian proposisi terbukti."
      ]
    },
    {
      "kind": "theorem",
      "title": "Sertifikat Optimalitas dari Celah Nol",
      "statement": "Jika $x^*$ dan $y^*$ layak bagi $(P)$ dan $(D)$ serta $c^Tx^*=b^Ty^*$, maka $x^*$ memaksimumkan tujuan primal dan $y^*$ meminimumkan tujuan dual.",
      "proof": [
        "Diketahui $x^*,y^*$ layak dan kedua nilai tujuan sama, misalkan $v=c^Tx^*=b^Ty^*$. Diambil sebarang titik primal layak $x$.",
        "Dualitas lemah yang diterapkan pada pasangan $(x,y^*)$ memberikan $c^Tx\\le b^Ty^*=v=c^Tx^*$. Karena $x$ sebarang, tidak ada solusi primal layak dengan nilai lebih besar daripada $x^*$.",
        "Selanjutnya diambil sebarang titik dual layak $y$. Dualitas lemah pada pasangan $(x^*,y)$ memberi $b^Ty\\ge c^Tx^*=v=b^Ty^*$. Karena $y$ sebarang, tidak ada solusi dual layak dengan nilai lebih kecil. Dengan demikian keduanya optimal."
      ]
    },
    {
      "kind": "theorem",
      "title": "Complementary Slackness dan Optimalitas",
      "statement": "Untuk pasangan layak $(x,y)$, kedua kondisi $y_i(b_i-(Ax)_i)=0$ bagi semua $i$ dan $x_j((A^Ty)_j-c_j)=0$ bagi semua $j$ berlaku jika dan hanya jika $G(x,y)=0$. Akibatnya, kondisi ini cukup untuk optimalitas kedua titik. Jika kedua titik optimal dan nilai optimalnya sama, kondisi ini juga perlu.",
      "proof": [
        "(⇒) Diketahui semua hasil kali complementary slackness nol. Identitas celah memberikan $G(x,y)=\\sum_i0+\\sum_j0=0$. Teorema sertifikat optimalitas kemudian menunjukkan bahwa $x$ dan $y$ optimal.",
        "(⇐) Diketahui $G(x,y)=0$. Identitas celah menyatakan nol sebagai jumlah berhingga bilangan taknegatif $y_is_i$ dan $x_jr_j$. Jika ada satu suku positif, jumlahnya positif, bertentangan dengan $G=0$. Karena itu seluruh suku harus nol.",
        "Untuk pernyataan keperluan, andaikan kedua titik optimal dan kedua nilai optimal sama. Maka $G=0$ menurut definisi, sehingga arah balik yang telah dibuktikan memberikan complementary slackness. Dengan demikian ekuivalensi dan akibat optimalitas terbukti."
      ]
    },
    {
      "kind": "corollary",
      "title": "Kendala Longgar dan Variabel Positif",
      "statement": "Untuk pasangan layak dengan celah nol, $b_i-(Ax)_i>0$ mengakibatkan $y_i=0$, dan $(A^Ty)_j-c_j>0$ mengakibatkan $x_j=0$. Sebaliknya, $y_i>0$ mengharuskan kendala primal ke-$i$ aktif, dan $x_j>0$ mengharuskan kendala dual ke-$j$ aktif.",
      "proof": [
        "Diketahui pasangan layak dengan celah nol. Teorema complementary slackness memberi $y_is_i=0$ dan $x_jr_j=0$ dengan semua faktor taknegatif.",
        "Jika $s_i>0$, persamaan $y_is_i=0$ hanya mungkin apabila $y_i=0$; jika $y_i>0$, persamaan yang sama memaksa $s_i=0$. Dengan mengganti $y_i,s_i$ oleh $x_j,r_j$ diperoleh kedua implikasi lain.",
        "Semua implikasi mengikuti sifat hasil kali dua bilangan real taknegatif. Implikasi kebalikannya tidak boleh disalahartikan: $y_i=0$ tidak memaksa $s_i>0$. Dengan demikian akibat terbukti."
      ]
    },
    {
      "kind": "proposition",
      "title": "Primal Tak Terbatas Mengakibatkan Dual Tidak Layak",
      "statement": "Jika himpunan layak primal tidak kosong dan $c^Tx$ tidak terbatas ke atas pada himpunan tersebut, maka himpunan layak dual kosong. Secara simetris, jika dual layak dan $b^Ty$ tidak terbatas ke bawah, primal tidak layak.",
      "proof": [
        "Diketahui primal layak dan nilainya tidak terbatas ke atas. Andaikan untuk kontradiksi ada $y$ layak dual. Nilai $b^Ty$ merupakan bilangan real berhingga karena data dan vektor berdimensi hingga.",
        "Dualitas lemah akan memberi $c^Tx\\le b^Ty$ untuk setiap $x$ layak primal. Ini memberikan batas atas hingga terhadap seluruh nilai primal, bertentangan dengan asumsi tak terbatas. Jadi dual tidak mempunyai titik layak.",
        "Untuk pernyataan simetris, andaikan dual tak terbatas ke bawah tetapi terdapat $x$ layak primal. Dualitas lemah memberi batas bawah hingga $b^Ty\\ge c^Tx$ untuk semua $y$ layak dual, kontradiksi. Dengan demikian kedua pernyataan terbukti."
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Sensitivitas dari Solusi Dual Layak",
      "statement": "Jika $y\\ge0$ dan $A^Ty\\ge c$, maka untuk setiap ruas kanan $b'$ dan setiap $x\\ge0$ dengan $Ax\\le b'$ berlaku $c^Tx\\le (b')^Ty$. Kelayakan dual tidak bergantung pada $b'$.",
      "proof": [
        "Diketahui $A^Ty\\ge c$ dan $y\\ge0$. Ketaksamaan pertama hanya melibatkan $A,c,y$, sehingga tetap benar ketika ruas kanan primal diganti dari $b$ menjadi $b'$.",
        "Ambil sebarang $x\\ge0$ yang memenuhi $Ax\\le b'$. Dengan mengalikan ketaksamaan $A^Ty\\ge c$ oleh $x\\ge0$ diperoleh $c^Tx\\le y^TAx$.",
        "Karena $Ax\\le b'$ dan $y\\ge0$, diperoleh $y^TAx\\le y^Tb'=(b')^Ty$. Maka nilai setiap keputusan layak pada model baru tidak melebihi batas dual tersebut. Pernyataan tidak mengklaim bahwa batas itu selalu tercapai. Dengan demikian proposisi terbukti."
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh 1 · Menyusun Pasangan Primal–Dual",
      "problem": "Untuk $\\max 3x+2z$ dengan $x+z\\le4$, $2x+z\\le6$, dan $x,z\\ge0$, susun dual secara eksplisit.",
      "solution": [
        "Diketahui $A=\\begin{pmatrix}1&1\\\\2&1\\end{pmatrix}$, $b=(4,6)^T$, dan $c=(3,2)^T$. Ada dua kendala primal sehingga dual mempunyai dua variabel $u,v\\ge0$.",
        "Fungsi tujuan dual diperoleh dari $b^T(u,v)^T=4u+6v$ dan harus diminimumkan. Transposisi matriks memberi $A^T(u,v)^T=(u+2v,u+v)^T$.",
        "Dengan membandingkan komponen terhadap $c$, kendala dual adalah $u+2v\\ge3$ dan $u+v\\ge2$. Karena primal maksimum dengan kendala $\\le$ dan variabel taknegatif, tanda kedua kendala dual adalah $\\ge$.",
        "Verifikasi: $(u,v)=(1,1)$ memenuhi $1+2=3$ dan $1+1=2$. Jadi dual memiliki sekurang-kurangnya satu titik layak, dan bentuknya konsisten dengan konvensi yang digunakan."
      ],
      "conclusion": "Dualnya adalah minimum $4u+6v$ pada $u+2vge3$, $u+vge2$, $u,vge0$.",
      "forDefinition": "Pasangan Primal–Dual"
    },
    {
      "title": "Contoh 2 · Memeriksa Kelayakan",
      "problem": "Periksa apakah $x=(1,2)$ layak primal dan $y=(0,2)$ layak dual pada pasangan program linear contoh pertama.",
      "solution": [
        "Diketahui kendala primal $x_1+x_2\\le4$ dan $2x_1+x_2\\le6$. Untuk $(1,2)$, ruas kiri masing-masing $3\\le4$ dan $4\\le6$; kedua komponen juga taknegatif.",
        "Pada dual, $(u,v)=(0,2)$ memenuhi $u+2v=4\\ge3$ dan $u+v=2\\ge2$. Kedua variabel dual juga taknegatif, sehingga pasangan tersebut layak.",
        "Nilai tujuan primal ialah $3(1)+2(2)=7$, sedangkan nilai tujuan dual ialah $4(0)+6(2)=12$. Perbandingan $7\\le12$ cocok dengan dualitas lemah tetapi belum membuktikan bahwa salah satu titik optimal.",
        "Untuk memastikan bukan sertifikat optimal, perhatikan bahwa titik primal $(2,2)$ layak dan menghasilkan nilai $10>7$. Jadi kelayakan saja tidak cukup untuk optimalitas."
      ],
      "conclusion": "Kedua titik layak, tetapi nilai primal $7$ bukan optimum.",
      "forDefinition": "Kelayakan Primal dan Dual"
    },
    {
      "title": "Contoh 3 · Slack dan Surplus Dual",
      "problem": "Untuk $x=(1,2)$ dan $y=(2,1)$ pada contoh pertama, hitung slack dan surplus dual.",
      "solution": [
        "Diketahui $b=(4,6)^T$ dan $Ax=(3,4)^T$, sehingga $s=b-Ax=(1,2)^T$. Kedua komponen positif: kedua kendala primal longgar pada titik ini.",
        "Selanjutnya $A^Ty=(4,3)^T$ sedangkan $c=(3,2)^T$. Jadi $r=A^Ty-c=(1,1)^T$, dan dual layak karena $y=(2,1)\\ge0$.",
        "Produk complementary slackness adalah $y_1s_1=2$, $y_2s_2=2$, $x_1r_1=1$, dan $x_2r_2=2$. Seluruhnya tidak nol, sehingga pasangan tidak dapat memiliki celah nol.",
        "Cek nilai: tujuan dual $4(2)+6(1)=14$, tujuan primal $7$, dan celah $14-7=7$. Jumlah produk $2+2+1+2=7$ mengonfirmasi identitas celah."
      ],
      "conclusion": "Slack $(1,2)$, surplus $(1,1)$, dan celah $7$.",
      "forDefinition": "Slack dan Reduced Cost"
    },
    {
      "title": "Contoh 4 · Menguraikan Celah",
      "problem": "Untuk $x=(2,2)$ dan $y=(0,2)$, tentukan celah dualitas dengan dua cara.",
      "solution": [
        "Diketahui $Ax=(4,6)^T=b$, sehingga slack primal $s=(0,0)^T$. Nilai tujuan primal adalah $3(2)+2(2)=10$.",
        "Vektor $y=(0,2)$ layak dual sebab $A^Ty=(4,2)^T\\ge(3,2)^T$. Surplus dualnya $r=(1,0)^T$. Nilai dual adalah $4(0)+6(2)=12$.",
        "Perhitungan langsung memberi $G=12-10=2$. Dari identitas celah diperoleh $y^Ts+x^Tr=(0,2)\\cdot(0,0)+(2,2)\\cdot(1,0)=2$.",
        "Celah positif tidak berarti titik primal salah: titik primal ini optimal, tetapi titik dual yang dipilih bukan optimum. Mengganti $y$ dengan $(1,1)$ menurunkan nilai dual ke $10$."
      ],
      "conclusion": "Celah $2$ berasal seluruhnya dari surplus kendala dual pertama.",
      "forDefinition": "Celah Dualitas"
    },
    {
      "title": "Contoh 5 · Sertifikat Optimum",
      "problem": "Buktikan optimalitas $x=(2,2)$ dan $y=(1,1)$ tanpa enumerasi semua titik sudut.",
      "solution": [
        "Diketahui $(2,2)$ layak primal karena $2+2=4$ dan $2(2)+2=6$, serta kedua komponen taknegatif. Nilai tujuannya $3(2)+2(2)=10$.",
        "Vektor $(1,1)$ layak dual karena $1+2(1)=3$ dan $1+1=2$. Nilai tujuan dual $4(1)+6(1)=10$.",
        "Untuk setiap $x'$ layak primal, dualitas lemah memberi $c^Tx'\\le10$. Karena titik yang dipilih mencapai $10$, tidak ada keputusan primal lebih baik.",
        "Untuk setiap $y'$ layak dual, dualitas lemah memberi $b^Ty'\\ge10$. Karena $(1,1)$ mencapai batas bawah tersebut, dual juga optimal. Argumen ini membuktikan kedua optimalitas sekaligus."
      ],
      "conclusion": "Nilai optimal kedua masalah adalah $10$ dan celahnya nol."
    },
    {
      "title": "Contoh 6 · Complementary Slackness Bukan Tebakan",
      "problem": "Tunjukkan mengapa $x=(3,0)$ dan $y=(1,1)$ tidak merupakan pasangan optimum, meskipun keduanya layak.",
      "solution": [
        "Diketahui $x=(3,0)$ menghasilkan $Ax=(3,6)^T\\le(4,6)^T$ dan nilai primal $9$. Vektor dual $y=(1,1)$ layak dengan nilai $10$.",
        "Slack primal $s=(1,0)^T$ dan surplus dual $r=(0,0)^T$. Maka $y_1s_1=1\\cdot1=1$, sedangkan semua produk lainnya nol.",
        "Satu produk complementary slackness yang positif sudah cukup menunjukkan celah tidak nol. Identitas celah memberi $G=1$, sama dengan selisih nilai dual dan primal $10-9$.",
        "Titik primal dapat ditingkatkan ke $(2,2)$ dengan nilai $10$, sehingga $(3,0)$ bukan optimum. Contoh ini menegaskan bahwa kendala yang longgar tidak boleh mempunyai multiplier positif pada pasangan optimum bercelah nol."
      ],
      "conclusion": "Pasangan layak tetapi bukan pasangan optimum karena $G=1$."
    },
    {
      "title": "Contoh 7 · Ketaklayakan dan Ketakterbatasan",
      "problem": "Analisis primal $\\max\\{x: -x\\le-2,\\ x\\le1,\\ x\\ge0\\}$ dan dualnya.",
      "solution": [
        "Diketahui kendala primal pertama menyatakan $x\\ge2$, sedangkan kendala kedua menyatakan $x\\le1$. Tidak ada bilangan real yang memenuhi keduanya, sehingga primal tidak layak.",
        "Dengan $A=(-1,1)^T$, $b=(-2,1)^T$, dan $c=1$, dualnya adalah meminimumkan $-2u+v$ dengan $-u+v\\ge1$, $u,v\\ge0$.",
        "Untuk setiap $t\\ge0$, pilih $u=t$ dan $v=t+1$. Semua kendala dual dipenuhi karena $-t+(t+1)=1$. Nilai dual menjadi $-2t+(t+1)=1-t$.",
        "Ketika $t\\to\\infty$, nilai dual menuju $-\\infty$. Jadi dual layak tetapi tidak terbatas ke bawah. Hal ini tidak bertentangan dengan dualitas lemah karena tidak ada titik primal layak yang dapat dipasangkan."
      ],
      "conclusion": "Primal tidak layak, sedangkan dual layak dan tidak terbatas ke bawah."
    },
    {
      "title": "Contoh 8 · Sensitivitas Ruas Kanan",
      "problem": "Ganti kendala pertama pada contoh awal menjadi $x+z\\le4+\\delta$, sementara kendala kedua tetap $2x+z\\le6$. Cari interval $\\delta$ saat sertifikat $y=(1,1)$ tetap tajam.",
      "solution": [
        "Diketahui dual $y=(1,1)$ tetap layak untuk setiap $\\delta$ karena $A$ dan $c$ tidak berubah. Nilai tujuan dual baru ialah $(4+\\delta)(1)+6(1)=10+\\delta$.",
        "Agar kedua kendala primal aktif, selesaikan $x+z=4+\\delta$ dan $2x+z=6$. Pengurangan persamaan memberi $x=2-\\delta$, lalu $z=2+2\\delta$.",
        "Kedua komponen taknegatif tepat ketika $\\delta\\le2$ dan $\\delta\\ge-1$. Pada interval $[-1,2]$ titik tersebut memenuhi kedua kendala dengan kesamaan dan bernilai $3(2-\\delta)+2(2+2\\delta)=10+\\delta$.",
        "Karena nilai primal sama dengan batas dual, keduanya optimal untuk setiap $\\delta\\in[-1,2]$. Di luar interval itu, titik perpotongan yang sama tidak lagi layak; tidak boleh mengklaim rumus optimum tetap berlaku tanpa analisis tambahan."
      ],
      "conclusion": "Untuk $-1ledeltale2$, nilai optimum $10+delta$ dengan solusi $(2-delta,2+2delta)$."
    }
  ],
  "exercises": [
    {
      "prompt": "D-01. Pada primal $\\max\\{2x+5z:x+z\\le5,\\ x+3z\\le9,\\ x,z\\ge0\\}$, bentuk dual dan cari satu pasangan optimum.",
      "hint": "Gunakan titik perpotongan dua kendala dan pecahkan dua kendala dual sebagai persamaan.",
      "answer": "Diketahui $A=\\begin{pmatrix}1&1\\\\1&3\\end{pmatrix}$, $b=(5,9)^T$, dan $c=(2,5)^T$. Dualnya $\\min 5u+9v$ dengan $u+v\\ge2$, $u+3v\\ge5$, $u,v\\ge0$. Kedua kendala primal aktif memberi $x+z=5$ dan $x+3z=9$, sehingga $2z=4$, $z=2$, dan $x=3$. Titik ini taknegatif dan layak. Nilai primal $2(3)+5(2)=16$. Untuk dual, persamaan $u+v=2$ dan $u+3v=5$ memberi $v=3/2$ dan $u=1/2$, keduanya taknegatif. Nilai dual $5/2+27/2=16$. Karena kedua titik layak dan nilainya sama, dualitas lemah membuktikan bahwa keduanya optimal, bukan sekadar kandidat hasil perpotongan."
    },
    {
      "prompt": "D-02. Untuk primal dan dual contoh utama, hitung celah pada $x=(1,2)$ dan $y=(1,1)$ serta verifikasi identitasnya.",
      "hint": "Hitung slack primal dan surplus dual secara terpisah.",
      "answer": "Diketahui $x=(1,2)$ layak karena $Ax=(3,4)^T\\le(4,6)^T$, sedangkan $y=(1,1)$ layak karena $A^Ty=(3,2)^T=c$. Nilai primal adalah $3+4=7$ dan nilai dual $4+6=10$, sehingga celah langsung $G=3$. Slack primal $s=b-Ax=(1,2)^T$, sementara surplus dual $r=A^Ty-c=(0,0)^T$. Identitas celah memberi $y^Ts+x^Tr=(1,1)\\cdot(1,2)+(1,2)\\cdot(0,0)=3$. Kedua perhitungan sama. Celah positif menunjukkan pasangan ini belum sama-sama optimal; titik $(2,2)$ memberi nilai primal $10$ dan memperbaiki $x=(1,2)$."
    },
    {
      "prompt": "D-03. Buktikan dari identitas celah bahwa $G=0$ setara dengan seluruh produk complementary slackness nol.",
      "hint": "Gunakan nonnegativitas setiap suku, bukan hanya nonnegativitas jumlah.",
      "answer": "Diketahui pasangan $x,y$ layak. Maka $x,y,s=b-Ax,r=A^Ty-c$ semuanya taknegatif. Identitas aljabar memberikan $G=\\sum_i y_is_i+\\sum_jx_jr_j$. (⇒) Jika $G=0$, setiap suku dalam jumlah merupakan bilangan taknegatif. Andaikan salah satu suku positif, jumlah seluruhnya pasti positif, kontradiksi. Jadi setiap $y_is_i=0$ dan setiap $x_jr_j=0$. (⇐) Jika semua produk itu nol, penjumlahan memberikan $G=0$ secara langsung. Kedua arah terbukti. Karena pasangan juga layak, kesamaan nilai tujuan selanjutnya menjamin optimalitas melalui dualitas lemah. Hipotesis kelayakan diperlukan agar argumen jumlah suku taknegatif sah."
    },
    {
      "prompt": "D-04. Apakah $x=(3,0)$ dan $y=(1,1)$ optimal untuk pasangan utama? Periksa dengan complementary slackness.",
      "hint": "Cari slack kendala pertama dan multiplier terkait.",
      "answer": "Diketahui $x=(3,0)$ layak: $x_1+x_2=3\\le4$ dan $2x_1+x_2=6\\le6$. Nilai primalnya $9$. Dual $y=(1,1)$ layak dan bernilai $10$. Slack primal adalah $s=(4-3,6-6)=(1,0)$, sedangkan surplus dual $r=(0,0)$. Produk $y_1s_1=1$ tidak nol, sehingga complementary slackness gagal. Secara independen celah $G=10-9=1$, sesuai identitas $G=y^Ts+x^Tr$. Titik primal $(2,2)$ layak dengan nilai $10$, jadi $(3,0)$ bukan optimum. Kesimpulannya kegagalan kondisi perlu bukan sekadar tanda aljabar, tetapi sejalan dengan perbaikan objektif konkret."
    },
    {
      "prompt": "D-05. Tunjukkan bahwa primal $\\max\\{x:0x\\le0,\\ x\\ge0\\}$ tidak terbatas dan dualnya tidak layak.",
      "hint": "Tuliskan $A=(0)$, $b=0$, dan $c=1$.",
      "answer": "Diketahui setiap $x\\ge0$ memenuhi $0x\\le0$, sehingga seluruh sinar $[0,\\infty)$ layak. Untuk setiap $M>0$, pilih $x=M+1$; nilai tujuan $x>M$. Maka primal tidak terbatas ke atas. Dual formalnya $\\min\\{0y:0y\\ge1,\\ y\\ge0\\}$. Kendala $0y\\ge1$ setara dengan $0\\ge1$, yang salah untuk setiap bilangan real. Jadi dual tidak layak. Contoh ini memverifikasi arah teorema primal tak terbatas ⇒ dual tidak layak. Arah sebaliknya tidak dapat disimpulkan tanpa hipotesis tambahan, karena dual tidak layak juga mungkin ketika primal tidak layak."
    },
    {
      "prompt": "D-06. Tentukan semua optimum primal $\\max\\{x+z:x+z\\le4,\\ x,z\\ge0\\}$ dan satu optimum dual.",
      "hint": "Gunakan satu variabel dual $u$ dan kendala $u\\ge1$.",
      "answer": "Diketahui tujuan sama dengan ruas kiri kendala utama, sehingga setiap titik layak memenuhi $x+z\\le4$. Titik $(4,0)$ layak dan mencapai nilai $4$, sehingga maksimum adalah $4$. Semua pasangan $(t,4-t)$ dengan $0\\le t\\le4$ layak dan bernilai $4$; sebaliknya, jika titik optimum bernilai $4$, pasti $x+z=4$, sehingga tidak ada optimum lain. Dualnya $\\min4u$ dengan $u\\ge1$ dan $u\\ge0$, maka $u^*=1$ layak dan bernilai $4$. Dualitas lemah membuktikan optimalitas keduanya. Contoh ini menunjukkan optimum primal dapat berupa seluruh ruas, tidak selalu satu titik."
    },
    {
      "prompt": "D-07. Jika kendala pertama contoh utama berubah menjadi $x+z\\le4+\\delta$, cari solusi dan nilai optimal untuk $\\delta=1$ serta jelaskan batas validitas rumus umum.",
      "hint": "Selesaikan dua persamaan aktif lalu cek nonnegativitas.",
      "answer": "Diketahui $\\delta=1$, maka kendala menjadi $x+z\\le5$ dan $2x+z\\le6$. Persamaan aktif memberi $x=1$ dan $z=4$, keduanya taknegatif. Nilai primal $3(1)+2(4)=11$. Dual $y=(1,1)$ tetap layak sebab $A^Ty=(3,2)^T=c$, dan nilai dual baru $5+6=11$. Kesamaan membuktikan optimum $11$. Untuk $\\delta$ umum, titik aktif $(2-\\delta,2+2\\delta)$ taknegatif tepat ketika $-1\\le\\delta\\le2$; pada rentang itu nilai optimum $10+\\delta$. Di luar rentang tersebut, kandidat aktif melanggar nonnegativitas, sehingga rumus yang sama tidak boleh diterapkan otomatis."
    },
    {
      "prompt": "D-08. Jelaskan dengan contoh mengapa primal tidak layak tidak berarti dual juga tidak layak.",
      "hint": "Gunakan dua kendala $x\\ge2$ dan $x\\le1$.",
      "answer": "Diketahui primal $\\max x$ dengan $-x\\le-2$, $x\\le1$, dan $x\\ge0$. Dua kendala pertama memaksa $x\\ge2$ dan $x\\le1$ sekaligus, sehingga tidak ada titik primal layak. Dualnya meminimumkan $-2u+v$ dengan $-u+v\\ge1$ dan $u,v\\ge0$. Ambil $u=0,v=1$; kendala dual terpenuhi, sehingga dual justru layak. Bahkan untuk setiap $t\\ge0$, pasangan $(u,v)=(t,t+1)$ layak dan mempunyai nilai $1-t$, yang menuju $-\\infty$. Jadi dual layak dan tidak terbatas ke bawah, sedangkan primal tidak layak. Hal ini tidak bertentangan dengan dualitas lemah, karena teorema itu membandingkan nilai hanya ketika kedua titik layak."
    }
  ],
  "mistakes": [],
  "connections": []
};
