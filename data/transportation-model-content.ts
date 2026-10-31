import type { BookLessonContent } from "@/data/book-content-types";

/** Transportation modeling with exact feasibility, primal-dual proofs and original solutions. */
export const transportationModelContent:BookLessonContent={
  "intro": [
    "Model transportasi memutuskan jumlah barang yang dikirim dari setiap gudang ke setiap tujuan. Memilih rute dengan biaya satuan terkecil saja tidak cukup: setiap gudang memiliki persediaan terbatas dan setiap tujuan harus menerima jumlah yang tepat. Matriks pengiriman yang tampak murah dapat melanggar salah satu dari dua kelompok persamaan tersebut.",
    "Sebagai model utama, dua gudang memiliki persediaan 4 dan 6 unit, dua toko membutuhkan masing-masing 5 unit, dan biaya satuan adalah $\\begin{pmatrix}2&5\\\\4&1\\end{pmatrix}$. Seluruh rencana layak akan dinyatakan dengan satu parameter, lalu biaya minimum 17 dibuktikan melalui optimisasi affine dan sertifikat dual yang independen.",
    "Keseimbangan total merupakan syarat perlu, bukan jaminan kelayakan apabila rute dilarang. Untuk surplus persediaan, tujuan semu hanya sah jika penyimpanan memang diperbolehkan dan biaya penyimpanan dimodelkan secara tepat. Setiap definisi diikuti contoh yang memeriksa syarat-syaratnya secara eksplisit.",
    "Rujukan: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017), bab model transportasi; Dimitris Bertsimas dan John N. Tsitsiklis, Introduction to Linear Optimization (1997), bab dualitas program linear. Perhitungan dan sertifikat di halaman ini diturunkan langsung dari model."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Model Transportasi Berimbang",
      "statement": "Untuk sumber $i=1,\\ldots,m$ dengan persediaan $a_i\\ge0$, tujuan $j=1,\\ldots,n$ dengan permintaan $b_j\\ge0$, dan biaya satuan $c_{ij}$, model transportasi berimbang meminimumkan $C(X)=\\sum_{i=1}^m\\sum_{j=1}^n c_{ij}x_{ij}$ dengan $\\sum_jx_{ij}=a_i$, $\\sum_ix_{ij}=b_j$, dan $x_{ij}\\ge0$. Total persediaan sama dengan total permintaan.",
      "explanation": "Variabel $x_{ij}$ mengukur unit yang dikirim dari sumber $i$ ke tujuan $j$; persamaan baris dan kolom mempunyai makna berbeda. Larangan rute dinyatakan dengan $x_{ij}=0$."
    },
    {
      "kind": "definition",
      "title": "Rencana Pengiriman Layak",
      "statement": "Matriks $X=(x_{ij})$ disebut layak apabila seluruh entrinya nonnegatif, setiap jumlah baris sama dengan persediaan terkait, setiap jumlah kolom sama dengan permintaan terkait, dan seluruh larangan rute dipenuhi. Rencana $X^*$ optimal apabila $C(X^*)\\le C(X)$ untuk setiap rencana layak $X$.",
      "explanation": "Nilai biaya rendah tidak membuktikan kelayakan. Periksa setiap jumlah marjinal sebelum membandingkan biaya."
    },
    {
      "kind": "definition",
      "title": "Tujuan Semu",
      "statement": "Jika $\\sum_i a_i>\\sum_jb_j$ dan sisa persediaan boleh disimpan, tujuan semu dengan permintaan $b_{n+1}=\\sum_i a_i-\\sum_jb_j$ mencatat barang yang tidak dikirim ke tujuan nyata. Biaya $c_{i,n+1}$ adalah biaya nyata menyimpan atau membuang unit dari sumber $i$; nilai nol hanya sah jika penyimpanan memang gratis.",
      "explanation": "Tujuan semu tidak dapat ditambahkan jika seluruh persediaan wajib dikirim ke tujuan nyata tanpa izin menyimpan."
    },
    {
      "kind": "definition",
      "title": "Potensial Dual Transportasi",
      "statement": "Bilangan real $u_i,v_j$ merupakan potensial dual layak untuk transportasi minimum jika $u_i+v_j\\le c_{ij}$ pada setiap rute yang diizinkan. Biaya tereduksi ialah $\\bar c_{ij}=c_{ij}-u_i-v_j\\ge0$, dan nilai dualnya $D(u,v)=\\sum_i a_i u_i+\\sum_jb_jv_j$.",
      "explanation": "Potensial boleh negatif. Pada rute dengan aliran positif dalam sertifikat optimalitas, biaya tereduksi harus nol."
    },
    {
      "kind": "proposition",
      "title": "Keseimbangan Total sebagai Syarat Perlu",
      "statement": "Jika suatu matriks memenuhi semua persamaan baris dan kolom model transportasi, maka $\\sum_i a_i=\\sum_jb_j$, sekalipun beberapa rute dilarang.",
      "proof": [
        "Diketahui $\\sum_jx_{ij}=a_i$ untuk setiap sumber $i$ dan $\\sum_ix_{ij}=b_j$ untuk setiap tujuan $j$. Jumlahkan persamaan baris: $\\sum_i a_i=\\sum_i\\sum_jx_{ij}$.",
        "Karena banyak sumber dan tujuan hingga, penjumlahan dapat ditukar: $\\sum_i\\sum_jx_{ij}=\\sum_j\\sum_ix_{ij}=\\sum_jb_j$. Rute yang dilarang hanya mempunyai aliran nol dan tidak mengubah identitas.",
        "Dengan demikian kesamaan total persediaan dan permintaan diperlukan. Kesamaan ini belum cukup jika beberapa rute tidak tersedia; contoh tandingan diberikan kemudian. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kelayakan pada Jaringan Lengkap",
      "statement": "Jika semua rute diizinkan dan $a_i,b_j\\ge0$, rencana layak ada jika dan hanya jika $\\sum_i a_i=\\sum_jb_j=:S$. Untuk $S>0$, matriks $x_{ij}=a_ib_j/S$ layak; untuk $S=0$, matriks nol layak.",
      "proof": [
        "Arah $(\\Rightarrow)$ diperoleh dari proposisi keseimbangan total. Untuk arah $(\\Leftarrow)$, misalkan kedua jumlah sama dengan $S$. Jika $S=0$, nonnegativitas semua persediaan dan permintaan mengakibatkan semuanya nol; matriks nol memenuhi seluruh persamaan.",
        "Jika $S>0$, tetapkan $x_{ij}=a_ib_j/S$. Setiap entri nonnegatif. Jumlah baris ke-$i$ adalah $\\sum_jx_{ij}=(a_i/S)\\sum_jb_j=a_i$. Jumlah kolom ke-$j$ adalah $\\sum_ix_{ij}=(b_j/S)\\sum_ia_i=b_j$.",
        "Karena setiap rute tersedia, tidak ada larangan lain. Matriks tersebut memenuhi semua kendala dan menjadi rencana layak. Kedua implikasi telah dibuktikan. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Parameterisasi Seluruh Rencana Dua Kali Dua",
      "statement": "Untuk persediaan $(a_1,a_2)$ dan permintaan $(b_1,b_2)$ yang berimbang, setiap rencana layak pada jaringan lengkap berbentuk $X(t)=\\begin{pmatrix}t&a_1-t\\\\b_1-t&a_2-b_1+t\\end{pmatrix}$ dengan $\\max\\{0,b_1-a_2\\}\\le t\\le\\min\\{a_1,b_1\\}$.",
      "proof": [
        "Ambil sebarang rencana layak dan tulis $t=x_{11}$. Persamaan baris pertama memberi $x_{12}=a_1-t$, persamaan kolom pertama memberi $x_{21}=b_1-t$, dan persamaan baris kedua memberi $x_{22}=a_2-b_1+t$.",
        "Persamaan kolom kedua otomatis terpenuhi: $x_{12}+x_{22}=a_1+a_2-b_1=b_2$. Nonnegativitas keempat entri ekuivalen dengan $t\\ge0$, $t\\le a_1$, $t\\le b_1$, dan $t\\ge b_1-a_2$.",
        "Sebaliknya, setiap $t$ dalam interval yang ditentukan menghasilkan entri nonnegatif dengan seluruh jumlah baris dan kolom yang benar. Dengan demikian parameterisasi ini mencakup tepat semua rencana layak. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Dualitas Lemah dan Sertifikat Optimalitas",
      "statement": "Untuk setiap rencana transportasi layak $X$ dan potensial dual layak $(u,v)$, berlaku $C(X)\\ge D(u,v)$. Jika $C(X^*)=D(u,v)$ untuk suatu pasangan layak, maka $X^*$ optimal global.",
      "proof": [
        "Diketahui $c_{ij}\\ge u_i+v_j$ dan $x_{ij}\\ge0$. Kalikan setiap ketaksamaan dengan $x_{ij}$, lalu jumlahkan: $C(X)=\\sum_{i,j}c_{ij}x_{ij}\\ge\\sum_{i,j}(u_i+v_j)x_{ij}$.",
        "Kelompokkan suku berdasarkan sumber dan tujuan. Kelayakan menghasilkan $\\sum_{i,j}u_ix_{ij}=\\sum_i u_ia_i$ dan $\\sum_{i,j}v_jx_{ij}=\\sum_jv_jb_j$. Oleh karena itu $C(X)\\ge D(u,v)$.",
        "Jika $X^*$ layak dan mencapai batas bawah dual tersebut, untuk setiap rencana layak $Y$ berlaku $C(Y)\\ge D(u,v)=C(X^*)$. Tidak ada rencana dengan biaya lebih kecil; $X^*$ optimal. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Kriteria Kesamaan Biaya Tereduksi",
      "statement": "Untuk rencana layak $X$ dan potensial dual layak $(u,v)$, kesamaan $C(X)=D(u,v)$ berlaku jika dan hanya jika setiap rute dengan $x_{ij}>0$ mempunyai $c_{ij}=u_i+v_j$.",
      "proof": [
        "Dari persamaan baris dan kolom, selisih biaya primal dan nilai dual dapat ditulis $C(X)-D(u,v)=\\sum_{i,j}(c_{ij}-u_i-v_j)x_{ij}$.",
        "Setiap suku pada jumlah ini nonnegatif karena biaya tereduksi dan aliran nonnegatif. Jumlah hingga suku nonnegatif sama dengan nol jika dan hanya jika setiap suku nol.",
        "Untuk tiap pasangan $(i,j)$, persamaan $(c_{ij}-u_i-v_j)x_{ij}=0$ ekuivalen dengan $x_{ij}=0$ atau $c_{ij}=u_i+v_j$. Ini membuktikan kedua arah karakterisasi. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Invariansi terhadap Pergeseran Biaya Baris dan Kolom",
      "statement": "Jika biaya diubah menjadi $c'_{ij}=c_{ij}+r_i+s_j$ dengan persediaan dan permintaan tetap, maka setiap rencana layak memenuhi $C'(X)=C(X)+\\sum_i r_ia_i+\\sum_js_jb_j$. Himpunan rencana optimal tidak berubah.",
      "proof": [
        "Untuk sebarang rencana layak $X$, substitusikan biaya baru: $C'(X)=\\sum_{i,j}(c_{ij}+r_i+s_j)x_{ij}=C(X)+\\sum_i r_i\\sum_jx_{ij}+\\sum_j s_j\\sum_ix_{ij}$.",
        "Jumlah baris dan kolom pada rencana layak berturut-turut sama dengan $a_i$ dan $b_j$. Karena itu $C'(X)=C(X)+K$ dengan $K=\\sum_i r_ia_i+\\sum_js_jb_j$ yang sama untuk semua rencana.",
        "Bagi dua rencana layak $X,Y$, berlaku $C'(X)\\le C'(Y)$ jika dan hanya jika $C(X)+K\\le C(Y)+K$, yang ekuivalen dengan $C(X)\\le C(Y)$. Seluruh peminimum tetap sama. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Model Dua Gudang Dua Toko",
      "problem": "Persediaan $(4,6)$, permintaan $(5,5)$, dan biaya $c=\\begin{pmatrix}2&5\\\\4&1\\end{pmatrix}$. Bentuk kendala model.",
      "solution": [
        "Definisikan $x_{ij}$ sebagai unit dari gudang $i$ ke toko $j$. Jumlah persediaan $4+6=10$ sama dengan permintaan $5+5=10$. Modelnya $\\min 2x_{11}+5x_{12}+4x_{21}+x_{22}$ dengan $x_{11}+x_{12}=4$, $x_{21}+x_{22}=6$, $x_{11}+x_{21}=5$, $x_{12}+x_{22}=5$, dan seluruh entri nonnegatif.",
        "Matriks $X=\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$ memenuhi jumlah baris $(4,6)$ dan kolom $(5,5)$. Biayanya $2(4)+5(0)+4(1)+1(5)=17$. Kelayakan sudah diperiksa; optimalitas akan dibuktikan terpisah."
      ],
      "forDefinition": "Model Transportasi Berimbang"
    },
    {
      "title": "Membedakan Rencana Layak dan Optimal",
      "problem": "Periksa $Y=\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$ untuk model dua gudang dan bandingkan dengan $X$.",
      "solution": [
        "Jumlah baris $Y$ adalah $3+1=4$ dan $2+4=6$, sedangkan jumlah kolomnya $3+2=5$ dan $1+4=5$. Semua entri nonnegatif; $Y$ layak. Biaya $C(Y)=2(3)+5(1)+4(2)+1(4)=23$.",
        "Biaya $X$ adalah $17$, sehingga $Y$ lebih mahal sebesar $6$. Membandingkan dua kandidat hanya membuktikan $Y$ bukan peminimum, bukan membuktikan $X$ minimum global. Untuk $X$, bukti global diberikan melalui parameterisasi atau dualitas."
      ],
      "forDefinition": "Rencana Pengiriman Layak"
    },
    {
      "title": "Menyeimbangkan Surplus dengan Tujuan Semu",
      "problem": "Persediaan $(4,6)$ dan permintaan nyata $(5,3)$; penyimpanan gratis. Bentuk permintaan semu dan rencana layak.",
      "solution": [
        "Total persediaan $10$ melebihi permintaan nyata $8$ sebesar $2$. Tambahkan tujuan semu ketiga dengan permintaan $2$ dan biaya simpan nol sesuai asumsi soal. Total permintaan baru $5+3+2=10$.",
        "Rencana $\\begin{pmatrix}4&0&0\\\\1&3&2\\end{pmatrix}$ mempunyai jumlah baris $4,6$ dan jumlah kolom $5,3,2$. Dua unit pada kolom ketiga berarti barang gudang kedua disimpan, bukan dikirim ke toko. Jika penyimpanan tidak gratis, koefisien biaya kolom semu harus diganti."
      ],
      "forDefinition": "Tujuan Semu"
    },
    {
      "title": "Membangun Potensial dan Memeriksa Semua Rute",
      "problem": "Untuk biaya $\\begin{pmatrix}2&5\\\\4&1\\end{pmatrix}$, periksa $u=(0,2)$ dan $v=(2,-1)$ serta nilai dual.",
      "solution": [
        "Keempat pemeriksaan $u_i+v_j\\le c_{ij}$ ialah $2\\le2$, $-1\\le5$, $4\\le4$, dan $1\\le1$. Semua terpenuhi, sehingga potensial dual layak; nilai negatif pada $v_2$ tidak melanggar syarat.",
        "Nilai dual $D=4(0)+6(2)+5(2)+5(-1)=17$. Rencana $X=\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$ layak dengan biaya $17$, sehingga dualitas lemah membuktikan minimum global tepat $17$. Rute positif $(1,1),(2,1),(2,2)$ semuanya memiliki biaya tereduksi nol."
      ],
      "forDefinition": "Potensial Dual Transportasi"
    },
    {
      "title": "Seluruh Rencana Dua Kali Dua",
      "problem": "Minimalkan biaya dua gudang di atas dengan satu parameter.",
      "solution": [
        "Ambil $t=x_{11}$. Dari kendala diperoleh $X(t)=\\begin{pmatrix}t&4-t\\\\5-t&1+t\\end{pmatrix}$. Nonnegativitas tepat ketika $0\\le t\\le4$. Persamaan kolom kedua tetap $4-t+1+t=5$.",
        "Biaya $C(t)=2t+5(4-t)+4(5-t)+(1+t)=41-6t$. Karena fungsi ini menurun ketat pada $[0,4]$, minimum dicapai hanya ketika $t=4$. Matriks optimal $X(4)=\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$ dengan biaya $17$. Seluruh rencana layak tercakup oleh interval tersebut."
      ]
    },
    {
      "title": "Keseimbangan Tidak Cukup jika Rute Dilarang",
      "problem": "Persediaan $(5,5)$ dan permintaan $(6,4)$, tetapi hanya rute $(1,1)$ dan $(2,2)$ yang tersedia. Tentukan kelayakan.",
      "solution": [
        "Jumlah persediaan dan permintaan sama-sama $10$, tetapi larangan rute memaksa $x_{12}=x_{21}=0$. Persamaan baris pertama memberi $x_{11}=5$, sedangkan persamaan kolom pertama menuntut $x_{11}=6$.",
        "Kedua persamaan bertentangan, sehingga tidak ada rencana layak. Toko pertama hanya terhubung ke gudang pertama yang memiliki $5$ unit, lebih kecil daripada kebutuhannya $6$ unit. Contoh ini membuktikan keseimbangan total tidak cukup pada jaringan terbatas."
      ]
    },
    {
      "title": "Biaya yang Menghasilkan Banyak Optimum",
      "problem": "Gunakan persediaan $(4,6)$, permintaan $(5,5)$, dan biaya $\\begin{pmatrix}2&3\\\\4&5\\end{pmatrix}$. Tentukan semua optimum.",
      "solution": [
        "Seluruh rencana layak tetap $X(t)=\\begin{pmatrix}t&4-t\\\\5-t&1+t\\end{pmatrix}$ dengan $0\\le t\\le4$. Biaya $C(t)=2t+3(4-t)+4(5-t)+5(1+t)=37$ karena koefisien $t$ adalah $2-3-4+5=0$.",
        "Setiap $t\\in[0,4]$ memberi biaya sama $37$, sehingga semuanya optimal. Misalnya $t=0$ dan $t=4$ menghasilkan dua rencana berbeda dengan jumlah baris dan kolom yang tetap benar. Nilai optimum ada tetapi peminimumnya tidak tunggal."
      ]
    },
    {
      "title": "Sertifikat untuk Tiga Gudang",
      "problem": "Persediaan $(3,4,3)$, permintaan $(6,4)$, biaya $\\begin{pmatrix}1&4\\\\3&2\\\\2&5\\end{pmatrix}$. Buktikan biaya minimum.",
      "solution": [
        "Rencana $X=\\begin{pmatrix}3&0\\\\0&4\\\\3&0\\end{pmatrix}$ layak karena jumlah baris $(3,4,3)$, jumlah kolom $(6,4)$, dan semua entri nonnegatif. Biaya $3(1)+4(2)+3(2)=17$.",
        "Pilih potensial $u=(1,2,2)$ dan $v=(0,0)$. Pada keenam rute, $u_i+v_j$ tidak melebihi biaya: $(1,1)\\le(1,4)$, $(2,2)\\le(3,2)$, dan $(2,2)\\le(2,5)$ secara komponen. Nilai dual $D=3(1)+4(2)+3(2)=17$. Kesamaan biaya primal dan dual membuktikan optimum global $17$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "TR-01. Periksa kelayakan dan biaya $Y=\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$ untuk persediaan $(4,6)$, permintaan $(5,5)$ dan biaya $\\begin{pmatrix}2&5\\\\4&1\\end{pmatrix}$.",
      "answer": "Diketahui persediaan $(4,6)$ dan permintaan $(5,5)$. Jumlah baris rencana $Y$ adalah $3+1=4$ dan $2+4=6$, sama dengan persediaan. Jumlah kolom adalah $3+2=5$ dan $1+4=5$, sama dengan permintaan. Semua entri nonnegatif. Dengan demikian $Y$ layak. Biaya dihitung dari definisi $C(Y)=\\sum_{i,j}c_{ij}y_{ij}=2(3)+5(1)+4(2)+1(4)=6+5+8+4=23$. Hasil ini adalah biaya rencana yang diuji, bukan biaya minimum. Sebagai pemeriksaan, rencana lain $\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$ layak dengan biaya $17$, sehingga $Y$ tidak optimal.",
      "hint": "Hitung empat jumlah marjinal sebelum biaya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-02. Selesaikan secara global masalah persediaan $(4,6)$, permintaan $(5,5)$, biaya $\\begin{pmatrix}2&5\\\\4&1\\end{pmatrix}$.",
      "answer": "Diketahui model berimbang dengan seluruh rute tersedia. Ambil $t=x_{11}$. Persamaan baris pertama memberi $x_{12}=4-t$, kolom pertama memberi $x_{21}=5-t$, dan baris kedua memberi $x_{22}=1+t$. Syarat nonnegativitas tepat ketika $0\\le t\\le4$, sedangkan kolom kedua otomatis berjumlah $5$. Biaya $C(t)=2t+5(4-t)+4(5-t)+(1+t)=41-6t$. Untuk semua $t\\in[0,4]$, $C(t)\\ge41-6(4)=17$, dengan kesamaan hanya pada $t=4$. Matriks $X^*=\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$ memenuhi semua kendala dan mempunyai biaya $17$. Karena setiap rencana layak telah dinyatakan oleh $t$, optimum global tunggal adalah $17$ pada $X^*$.",
      "hint": "Gunakan parameter $t=x_{11}$ dan periksa intervalnya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-03. Persediaan $(4,6)$, permintaan $(5,3)$, dan penyimpanan gratis. Bentuk tujuan semu dan satu rencana layak.",
      "answer": "Diketahui total persediaan $4+6=10$ dan total permintaan nyata $5+3=8$. Surplus $2$ unit boleh disimpan tanpa biaya, sehingga tujuan semu ketiga mempunyai permintaan $2$ dan biaya per unit nol. Model yang diperluas berimbang karena $5+3+2=10$. Pilih $X=\\begin{pmatrix}4&0&0\\\\1&3&2\\end{pmatrix}$. Jumlah baris $4$ dan $6$, jumlah kolom $5$, $3$, dan $2$; semua entri nonnegatif. Dua unit pada kolom ketiga bukan pengiriman ke toko, melainkan persediaan gudang kedua yang tidak dikirim. Jika penyimpanan berbiaya positif, nilai biaya semu harus mengikuti biaya tersebut.",
      "hint": "Selisih total adalah permintaan semu.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-04. Buktikan tidak ada rencana layak untuk persediaan $(5,5)$, permintaan $(6,4)$ dengan rute hanya $(1,1)$ dan $(2,2)$.",
      "answer": "Jumlah persediaan $10$ sama dengan permintaan $10$, tetapi rute yang tidak diizinkan mengharuskan $x_{12}=x_{21}=0$. Persamaan persediaan sumber pertama menjadi $x_{11}+0=5$, sehingga $x_{11}=5$. Persamaan permintaan tujuan pertama menjadi $x_{11}+0=6$, sehingga $x_{11}=6$. Dua nilai tersebut tidak mungkin dipenuhi sekaligus. Oleh karena itu himpunan rencana layak kosong. Secara substantif, tujuan pertama membutuhkan $6$ unit tetapi satu-satunya sumber yang terhubung hanya memiliki $5$ unit. Ini merupakan contoh tandingan terhadap dugaan keliru bahwa keseimbangan total cukup untuk jaringan dengan rute terlarang.",
      "hint": "Bandingkan persamaan sumber pertama dan tujuan pertama.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-05. Dengan persediaan $(4,6)$, permintaan $(5,5)$ dan biaya $\\begin{pmatrix}2&3\\\\4&5\\end{pmatrix}$, tentukan seluruh solusi optimal.",
      "answer": "Setiap rencana layak berbentuk $X(t)=\\begin{pmatrix}t&4-t\\\\5-t&1+t\\end{pmatrix}$ dengan $0\\le t\\le4$, sebagaimana diperoleh dari empat persamaan jumlah marjinal. Substitusi biaya menghasilkan $C(t)=2t+3(4-t)+4(5-t)+5(1+t)=37+(2-3-4+5)t=37$. Koefisien parameter nol, sehingga setiap $t$ dalam interval layak memberikan biaya minimum sama $37$. Misalnya $t=0$ menghasilkan $\\begin{pmatrix}0&4\\\\5&1\\end{pmatrix}$, sedangkan $t=4$ menghasilkan $\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$; kedua matriks memenuhi jumlah baris dan kolom. Seluruh keluarga $X(t)$, bukan hanya kedua ujungnya, merupakan himpunan solusi optimal.",
      "hint": "Periksa koefisien $t$ dalam fungsi biaya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-06. Biaya semua rute sumber pertama naik 3 per unit pada model berimbang dengan persediaan $(4,6)$. Buktikan himpunan optimum tidak berubah.",
      "answer": "Pada setiap rencana layak $X$, jumlah aliran dari sumber pertama tetap $x_{11}+x_{12}=4$. Jika kedua biaya rute sumber pertama dinaikkan $3$, perubahan biaya adalah $3x_{11}+3x_{12}=3(4)=12$. Karena itu $C'(X)=C(X)+12$ untuk semua rencana layak. Untuk sebarang $X,Y$ layak, berlaku $C'(X)\\le C'(Y)$ jika dan hanya jika $C(X)+12\\le C(Y)+12$, yang ekuivalen dengan $C(X)\\le C(Y)$. Dengan demikian urutan biaya dan seluruh peminimum tetap, sedangkan nilai minimum meningkat tepat $12$. Kesimpulan memerlukan jumlah baris tetap $4$; jika pengiriman dari sumber pertama boleh berubah, perubahan biaya tidak otomatis konstan.",
      "hint": "Gunakan jumlah baris pertama yang tetap.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-07. Buktikan optimalitas $X=\\begin{pmatrix}4&0\\\\1&5\\end{pmatrix}$ pada biaya $\\begin{pmatrix}2&5\\\\4&1\\end{pmatrix}$ menggunakan dualitas.",
      "answer": "Rencana $X$ layak karena jumlah baris $(4,6)$ dan kolom $(5,5)$, dengan seluruh entri nonnegatif. Biayanya $C(X)=2(4)+4(1)+1(5)=17$. Pilih potensial $u=(0,2)$ dan $v=(2,-1)$. Empat syarat dual diperiksa: $0+2=2\\le2$, $0-1=-1\\le5$, $2+2=4\\le4$, dan $2-1=1\\le1$. Nilai dual $D=4(0)+6(2)+5(2)+5(-1)=17$. Dualitas lemah menyatakan setiap rencana layak $Y$ mempunyai $C(Y)\\ge D=17$. Karena $X$ mencapai batas itu, $X$ optimal global. Ketiga rute dengan aliran positif mempunyai biaya tereduksi nol, sesuai kriteria kesamaan.",
      "hint": "Cari potensial yang ketat pada rute dengan aliran positif.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-08. Untuk persediaan $(3,4,3)$, permintaan $(6,4)$ dan biaya $\\begin{pmatrix}1&4\\\\3&2\\\\2&5\\end{pmatrix}$, berikan sertifikat optimum.",
      "answer": "Diketahui total persediaan $3+4+3=10$ sama dengan permintaan $6+4=10$. Pilih $X=\\begin{pmatrix}3&0\\\\0&4\\\\3&0\\end{pmatrix}$. Jumlah barisnya $(3,4,3)$ dan kolomnya $(6,4)$, serta setiap entri nonnegatif; rencana layak. Biaya $C(X)=3(1)+4(2)+3(2)=17$. Pilih potensial $u=(1,2,2)$ dan $v=(0,0)$. Syarat dual untuk keenam rute ialah $1\\le1,4$, $2\\le3,2$, dan $2\\le2,5$, semuanya benar. Nilai dual $D=3(1)+4(2)+3(2)+6(0)+4(0)=17$. Dualitas lemah menjamin setiap rencana layak mempunyai biaya sedikitnya $17$, dan $X$ mencapainya. Nilai minimum global adalah $17$.",
      "hint": "Periksa kelayakan primal dan potensial dual.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
