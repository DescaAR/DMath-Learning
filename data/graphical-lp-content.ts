import type { BookLessonContent } from "@/data/book-content-types";
export const graphicalLinearProgrammingContent:BookLessonContent = {
  "intro": [
    "Model program linear dua variabel ditentukan oleh kendala yang membentuk irisan setengah bidang. Memeriksa kelayakan, menemukan titik sudut, dan membuktikan optimalitas merupakan tiga pekerjaan yang berbeda.",
    "Kita akan mengkaji $P=\\{(x,y)\\in\\mathbb R^2:x,y\\ge0,\\ x+2y\\le8,\\ 3x+y\\le9\\}$ dan memaksimumkan $3x+4y$. Rujukan: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017)."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Daerah Layak",
      "statement": "Untuk matriks $A\\in\\mathbb R^{m\\times2}$ dan $b\\in\\mathbb R^m$, daerah layak $P=\\{x\\in\\mathbb R^2:Ax\\le b\\}$ adalah himpunan semua vektor yang memenuhi setiap pertidaksamaan komponen. Jika keputusan menyatakan kuantitas produksi, kendala nonnegativitas $x_1,x_2\\ge0$ ditulis eksplisit.",
      "explanation": "Titik yang melanggar satu kendala saja tidak layak."
    },
    {
      "kind": "definition",
      "title": "Titik Ekstrem",
      "statement": "Titik $v$ pada himpunan konveks $P$ disebut ekstrem apabila persamaan $v=tu+(1-t)w$ dengan $u,w\\in P$ dan $0<t<1$ hanya mungkin jika $u=w=v$. Titik ekstrem poligon konveks disebut titik sudut; titik di bagian dalam suatu sisi bukan titik ekstrem.",
      "explanation": "Titik ekstrem tidak dapat diuraikan menjadi kombinasi konveks taktrivial dua titik berbeda."
    },
    {
      "kind": "definition",
      "title": "Solusi Optimal",
      "statement": "Untuk $c\\in\\mathbb R^2$ dan daerah layak $P$, solusi optimal maksimisasi adalah $x^*\\in P$ sehingga $c^Tx\\le c^Tx^*$ untuk setiap $x\\in P$. Nilai optimal $z^*=c^Tx^*$. Masalah infeasible berarti $P$ kosong; masalah unbounded berarti nilai tujuan tak terbatas ke atas pada $P$.",
      "explanation": "Satu nilai optimal dapat dicapai oleh lebih dari satu titik."
    },
    {
      "kind": "definition",
      "title": "Sertifikat Batas Atas",
      "statement": "Untuk $\\max\\{c^Tx:Ax\\le b,\\ x\\ge0\\}$, vektor $\\lambda\\ge0$ dengan $A^T\\lambda\\ge c$ merupakan sertifikat batas atas karena memberikan $c^Tx\\le b^T\\lambda$ bagi setiap titik layak. Sertifikat tajam jika ada titik layak yang mencapai nilai batas atas tersebut.",
      "explanation": "Sertifikat mengubah klaim optimalitas menjadi ketaksamaan yang dapat diverifikasi."
    },
    {
      "kind": "lemma",
      "title": "Konveksitas Daerah Layak",
      "statement": "Untuk setiap $A\\in\\mathbb R^{m\\times2}$ dan $b\\in\\mathbb R^m$, himpunan $P=\\{x:Ax\\le b\\}$ konveks. Dengan kata lain, jika $u,w\\in P$ dan $t\\in[0,1]$, maka $tu+(1-t)w\\in P$.",
      "explanation": "Konveksitas memastikan ruas yang menghubungkan dua keputusan layak tetap layak.",
      "proof": [
        "Ambil $u,w\\in P$ dan $t\\in[0,1]$ sebarang. Karena kedua titik layak, berlaku $Au\\le b$ dan $Aw\\le b$ secara komponen.",
        "Karena $t\\ge0$ dan $1-t\\ge0$, perkalian dengan kedua skalar mempertahankan arah pertidaksamaan: $tAu\\le tb$ dan $(1-t)Aw\\le(1-t)b$.",
        "Dengan linearitas perkalian matriks, $A(tu+(1-t)w)=tAu+(1-t)Aw\\le tb+(1-t)b=b$.",
        "Jadi kombinasi konveks memenuhi seluruh kendala dan termasuk $P$. Pilihan $u,w,t$ sebarang, sehingga $P$ konveks.",
        "\\square"
      ]
    },
    {
      "kind": "proposition",
      "title": "Keberadaan Optimum pada Poligon Terbatas",
      "statement": "Jika $P=\\{x\\in\\mathbb R^2:Ax\\le b\\}$ tidak kosong dan terbatas, maka untuk setiap $c\\in\\mathbb R^2$, fungsi linear $x\\mapsto c^Tx$ mencapai maksimum dan minimum pada $P$.",
      "explanation": "Teorema ini menggunakan kekompakan, bukan sekadar gambar daerah arsiran.",
      "proof": [
        "Setiap kendala $a_i^Tx\\le b_i$ adalah pra-citra himpunan tertutup $(-\\infty,b_i]$ oleh fungsi kontinu $x\\mapsto a_i^Tx$. Karena itu setiap setengah bidang kendala tertutup.",
        "Irisan berhingga himpunan tertutup juga tertutup, sehingga $P$ tertutup. Menurut hipotesis, $P$ tidak kosong dan terbatas.",
        "Berdasarkan teorema Heine–Borel, $P$ kompak di $\\mathbb R^2$. Fungsi $f(x)=c^Tx$ kontinu karena linear.",
        "Teorema nilai ekstrem pada himpunan kompak tidak kosong menjamin adanya $u,v\\in P$ sehingga $f(u)\\le f(x)\\le f(v)$ untuk semua $x\\in P$. Kedua ekstrem dicapai.",
        "\\square"
      ]
    },
    {
      "kind": "lemma",
      "title": "Nilai Fungsi Linear pada Ruas",
      "statement": "Untuk $u,w,c\\in\\mathbb R^2$ dan $t\\in[0,1]$, berlaku $c^T(tu+(1-t)w)=tc^Tu+(1-t)c^Tw\\le\\max\\{c^Tu,c^Tw\\}$. Jika nilai kedua ujung sama, seluruh ruas mempunyai nilai tujuan yang sama.",
      "explanation": "Sisi optimal muncul ketika fungsi tujuan konstan sepanjang sisi tersebut.",
      "proof": [
        "Linearitas hasil kali dalam memberi identitas $c^T(tu+(1-t)w)=tc^Tu+(1-t)c^Tw$.",
        "Tuliskan $M=\\max\\{c^Tu,c^Tw\\}$. Karena $c^Tu\\le M$, $c^Tw\\le M$, dan $t,1-t\\ge0$, maka $tc^Tu+(1-t)c^Tw\\le tM+(1-t)M=M$.",
        "Jika kedua ujung mempunyai nilai yang sama, misalnya $c^Tu=c^Tw=K$, identitas awal menjadi $tK+(1-t)K=K$ untuk setiap $t\\in[0,1]$.",
        "Maka fungsi linear pada ruas tidak melebihi nilai ujung terbaik, dan dua ujung dengan nilai sama membuat seluruh ruas setara.",
        "\\square"
      ]
    },
    {
      "kind": "theorem",
      "title": "Prinsip Titik Sudut pada Poligon Konveks",
      "statement": "Misalkan $P\\subset\\mathbb R^2$ poligon konveks tertutup, terbatas, tidak kosong, dan berinterior tidak kosong. Untuk setiap $c\\in\\mathbb R^2$, maksimum $c^Tx$ dicapai pada sekurang-kurangnya satu titik sudut $P$. Jika dua titik sudut bertetangga optimal, seluruh sisi di antaranya optimal.",
      "explanation": "Teorema tidak boleh digunakan pada daerah tak layak atau pada tujuan yang tidak memiliki maksimum.",
      "proof": [
        "Menurut proposisi keberadaan optimum, terdapat pemaksimum $x^*\\in P$. Jika $c=0$, fungsi tujuan konstan dan setiap titik sudut optimal. Anggap $c\\ne0$.",
        "Jika $x^*$ di interior $P$, terdapat $\\varepsilon>0$ cukup kecil dengan $x^*+\\varepsilon c\\in P$. Tetapi $c^T(x^*+\\varepsilon c)=c^Tx^*+\\varepsilon\\|c\\|^2>c^Tx^*$, kontradiksi. Jadi pemaksimum berada pada batas.",
        "Batas poligon merupakan gabungan sisi-sisi tertutup. Maka $x^*$ berada pada ruas $[v_i,v_j]$ dengan $v_i,v_j$ titik sudut bertetangga. Tuliskan $x^*=tv_i+(1-t)v_j$ untuk $t\\in[0,1]$.",
        "Lemma ruas memberikan $c^Tx^*\\le\\max\\{c^Tv_i,c^Tv_j\\}$. Karena $x^*$ optimal, setidaknya satu ujung optimal. Jika kedua ujung optimal, seluruh sisi optimal menurut lemma yang sama.",
        "\\square"
      ]
    },
    {
      "kind": "proposition",
      "title": "Sertifikat Pengali dan Dualitas Lemah",
      "statement": "Misalkan $P=\\{x\\in\\mathbb R_{\\ge0}^2:Ax\\le b\\}$ dan $\\lambda\\in\\mathbb R_{\\ge0}^m$ memenuhi $A^T\\lambda\\ge c$. Maka $c^Tx\\le b^T\\lambda$ bagi setiap $x\\in P$. Jika ada $x^*\\in P$ dengan $c^Tx^*=b^T\\lambda$, titik $x^*$ optimal.",
      "explanation": "Sertifikat diperoleh dari penjumlahan kendala dengan pengali nonnegatif.",
      "proof": [
        "Ambil $x\\in P$. Karena $A^T\\lambda\\ge c$ dan $x\\ge0$, diperoleh $c^Tx\\le(A^T\\lambda)^Tx=\\lambda^TAx$.",
        "Karena $Ax\\le b$ dan $\\lambda\\ge0$, diperoleh $\\lambda^TAx\\le\\lambda^Tb=b^T\\lambda$.",
        "Dengan menggabungkan ketaksamaan, $c^Tx\\le b^T\\lambda$ berlaku untuk setiap titik layak. Maka $b^T\\lambda$ batas atas yang sah.",
        "Jika titik layak $x^*$ mencapai batas atas itu, tidak ada titik layak lain dengan nilai tujuan lebih besar. Berdasarkan definisi, $x^*$ optimal.",
        "\\square"
      ]
    },
    {
      "kind": "theorem",
      "title": "Optimum Eksak Model Produksi",
      "statement": "Untuk daerah layak tidak kosong $P=\\{(x,y)\\in\\mathbb R^2:x,y\\ge0,\\ x+2y\\le8,\\ 3x+y\\le9\\}$, masalah $\\max_{(x,y)\\in P}(3x+4y)$ mempunyai nilai optimal $18$ yang dicapai di $(2,3)$.",
      "explanation": "Dua pengali nonnegatif menghasilkan pembuktian optimalitas tanpa mengandalkan pembacaan grafik.",
      "proof": [
        "Titik $(2,3)$ layak sebab $2+2(3)=8$ dan $3(2)+3=9$, dengan kedua koordinat nonnegatif. Nilai tujuan di titik tersebut adalah $3(2)+4(3)=18$.",
        "Kalikan kendala $x+2y\\le8$ dengan $9/5$ dan kendala $3x+y\\le9$ dengan $2/5$. Kedua pengali nonnegatif, sehingga arah ketaksamaan tetap.",
        "Penjumlahan menghasilkan $(9/5+6/5)x+(18/5+2/5)y\\le(9/5)8+(2/5)9$, yakni $3x+4y\\le18$.",
        "Karena semua titik layak memenuhi batas atas $18$ dan $(2,3)$ mencapainya, titik tersebut optimal dengan nilai optimal $18$.",
        "\\square"
      ]
    },
    {
      "kind": "theorem",
      "title": "Sensitivitas Koefisien Tujuan",
      "statement": "Pada poligon $P$ yang sama, untuk $c_1,c_2>0$, titik $(2,3)$ optimal bagi $\\max(c_1x+c_2y)$ jika dan hanya jika $c_2/2\\le c_1\\le3c_2$. Jika $c_1>3c_2$, $(3,0)$ optimal; jika $c_1<c_2/2$, $(0,4)$ optimal. Pada batas kesamaan, sisi yang menghubungkan dua titik sudut terkait optimal.",
      "explanation": "Mengubah keuntungan dapat menggeser titik optimal tanpa mengubah kapasitas sumber daya.",
      "proof": [
        "Titik sudut $P$ adalah $(0,0)$, $(3,0)$, $(2,3)$, dan $(0,4)$. Nilai tujuan masing-masing adalah $0$, $3c_1$, $2c_1+3c_2$, dan $4c_2$. Karena $c_1,c_2>0$, titik asal tidak lebih baik.",
        "Titik $(2,3)$ tidak kalah dari $(3,0)$ tepat ketika $2c_1+3c_2\\ge3c_1$, ekuivalen dengan $c_1\\le3c_2$. Ia tidak kalah dari $(0,4)$ tepat ketika $2c_1+3c_2\\ge4c_2$, ekuivalen dengan $c_1\\ge c_2/2$.",
        "Prinsip titik sudut membuat kedua syarat perlu dan cukup. Jika $c_1>3c_2$, nilai di $(3,0)$ melebihi nilai di $(2,3)$ dan $(0,4)$; jika $c_1<c_2/2$, nilai di $(0,4)$ melebihi dua kandidat lainnya.",
        "Pada $c_1=3c_2$, nilai di $(3,0)$ dan $(2,3)$ sama; pada $c_1=c_2/2$, nilai di $(2,3)$ dan $(0,4)$ sama. Lemma ruas membuktikan seluruh sisi terkait optimal.",
        "\\square"
      ]
    }
  ],
  "examples": [
    {
      "title": "Uji Kelayakan Tiga Kandidat",
      "forDefinition": "Daerah Layak",
      "problem": "Uji $(2,3)$, $(3,2)$, dan $(-1,2)$ pada $P=\\{x,y\\ge0:x+2y\\le8,\\ 3x+y\\le9\\}$.",
      "solution": [
        "Pada $(2,3)$ berlaku $2+6=8$ dan $6+3=9$, sedangkan kedua koordinat nonnegatif. Jadi titik layak.",
        "Pada $(3,2)$, kendala kedua memberi $9+2=11>9$, sehingga titik tidak layak walaupun kendala pertama dipenuhi.",
        "Pada $(-1,2)$, syarat $x\\ge0$ gagal; titik tidak layak tanpa perlu menafsirkan produksi negatif.",
        "Hanya $(2,3)$ layak dari ketiga kandidat. Semua kendala, termasuk nonnegativitas, harus diperiksa."
      ]
    },
    {
      "title": "Titik Ekstrem dan Titik pada Sisi",
      "forDefinition": "Titik Ekstrem",
      "problem": "Tunjukkan bahwa $(1,0)$ bukan titik ekstrem $P$, sedangkan $(2,3)$ titik ekstrem.",
      "solution": [
        "Titik $(1,0)=\\frac23(0,0)+\\frac13(3,0)$ adalah kombinasi konveks taktrivial dua titik layak berbeda, sehingga bukan ekstrem.",
        "Andaikan $(2,3)=tu+(1-t)w$ dengan $u,w\\in P$ dan $0<t<1$. Pada $(2,3)$ kedua kendala sumber daya aktif.",
        "Karena kombinasi dua bilangan yang masing-masing tidak melebihi batasnya mencapai batas, kedua ujung $u,w$ juga harus memenuhi $x+2y=8$ dan $3x+y=9$.",
        "Sistem kedua garis mempunyai solusi tunggal $(2,3)$, maka $u=w=(2,3)$. Jadi titik tersebut ekstrem."
      ]
    },
    {
      "title": "Mengevaluasi Titik Sudut",
      "forDefinition": "Solusi Optimal",
      "problem": "Tentukan maksimum $3x+4y$ pada keempat titik sudut $(0,0),(3,0),(2,3),(0,4)$.",
      "solution": [
        "Nilai di $(0,0)$ adalah $0$, sedangkan di $(3,0)$ adalah $9$.",
        "Nilai di $(2,3)$ adalah $6+12=18$, sedangkan di $(0,4)$ adalah $16$.",
        "Poligon layak tertutup dan terbatas, sehingga teorema titik sudut berlaku untuk tujuan linear.",
        "Nilai terbesar $18$ dicapai di $(2,3)$."
      ]
    },
    {
      "title": "Sertifikat Batas Atas yang Tajam",
      "forDefinition": "Sertifikat Batas Atas",
      "problem": "Buktikan $3x+4y\\le18$ untuk semua $(x,y)\\in P$ tanpa menguji titik sudut satu per satu.",
      "solution": [
        "Ambil pengali $\\lambda_1=9/5$ untuk kendala $x+2y\\le8$ dan $\\lambda_2=2/5$ untuk kendala $3x+y\\le9$.",
        "Jumlah ruas kiri menjadi $(9/5+6/5)x+(18/5+2/5)y=3x+4y$.",
        "Jumlah ruas kanan menjadi $(9/5)8+(2/5)9=18$. Karena pengali nonnegatif, diperoleh batas atas sah.",
        "Titik $(2,3)$ layak dan mencapai nilai $18$, sehingga batas atas tersebut tajam."
      ]
    },
    {
      "title": "Enumerasi Seluruh Titik Sudut",
      "problem": "Temukan semua titik sudut $P$ melalui perpotongan garis batas.",
      "solution": [
        "Pada sumbu $y=0$, kendala $3x\\le9$ memberi $x\\le3$, sehingga ujungnya $(3,0)$. Pada sumbu $x=0$, kendala $2y\\le8$ memberi $y\\le4$, sehingga ujungnya $(0,4)$.",
        "Perpotongan $x+2y=8$ dan $3x+y=9$ memberi $x=2,y=3$. Titik asal $(0,0)$ adalah perpotongan kedua sumbu.",
        "Keempat titik memenuhi semua kendala. Kandidat lain seperti $(8,0)$ dan $(0,9)$ melanggar kendala lain.",
        "Jadi titik sudut lengkap adalah $(0,0),(3,0),(2,3),(0,4)$."
      ]
    },
    {
      "title": "Perubahan Keuntungan Produksi",
      "problem": "Jika fungsi tujuan diganti menjadi $6x+y$, tentukan titik optimal baru.",
      "solution": [
        "Nilai tujuan pada empat titik sudut berturut-turut $0$, $18$, $15$, dan $4$.",
        "Karena nilai terbesar $18$ dicapai pada $(3,0)$, titik tersebut optimal.",
        "Syarat sensitivitas juga memberi kesimpulan yang sama karena $c_1=6>3c_2=3$.",
        "Perubahan keuntungan mengubah campuran produksi optimal meskipun kapasitas sumber daya tidak berubah."
      ]
    },
    {
      "title": "Sisi Optimal dengan Tak Hingga Banyak Titik",
      "problem": "Tentukan seluruh titik optimal untuk fungsi tujuan $3x+y$ pada poligon $P$.",
      "solution": [
        "Kendala $3x+y\\le9$ memberikan batas atas langsung sebesar $9$.",
        "Titik $(3,0)$ dan $(2,3)$ layak dan masing-masing mencapai nilai $9$.",
        "Konveksitas menjamin seluruh ruas $[(3,0),(2,3)]$ layak; linearitas tujuan menjamin nilainya tetap $9$.",
        "Sebaliknya setiap pemaksimum harus memenuhi $3x+y=9$, dan irisannya dengan $P$ tepat ruas tersebut."
      ]
    },
    {
      "title": "Membedakan Infeasible dan Unbounded",
      "problem": "Bandingkan $\\max\\{x:x\\ge0\\}$ dan $\\max\\{x:x\\ge1,\\ x\\le0\\}$.",
      "solution": [
        "Masalah pertama memiliki titik layak, tetapi untuk setiap $M$ terdapat $x>\\max\\{M,0\\}$ yang layak. Maka nilai tujuan tidak terbatas ke atas.",
        "Karena setiap kandidat $x$ dapat diperbesar, masalah pertama tidak mempunyai pemaksimum.",
        "Masalah kedua tidak mempunyai titik layak: tidak ada bilangan real yang sekaligus memenuhi $x\\ge1$ dan $x\\le0$.",
        "Keduanya tidak mempunyai solusi optimal, tetapi yang pertama unbounded sedangkan yang kedua infeasible."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "Untuk $x,y\\ge0$, $x+y\\le5$, $2x+y\\le8$, periksa kelayakan $(3,2)$ dan $(4,1)$ serta tentukan seluruh titik sudut.",
      "hint": "Periksa kendala satu per satu dan perpotongan garis batas.",
      "answer": "1. Pada $(3,2)$ berlaku $3+2=5$ dan $6+2=8$, sehingga titik layak. Pada $(4,1)$ kendala kedua bernilai $9>8$, sehingga tidak layak.\\n\\n2. Pada sumbu x, kendala kedua membatasi x sampai 4, sehingga muncul $(4,0)$. Pada sumbu y, kendala pertama membatasi y sampai 5, sehingga muncul $(0,5)$.\\n\\n3. Perpotongan $x+y=5$ dan $2x+y=8$ menghasilkan $(3,2)$. Bersama titik asal, keempat titik sudut adalah $(0,0),(4,0),(3,2),(0,5)$.\\n\\n4. Semua kandidat telah diuji terhadap seluruh kendala, sehingga daftar titik sudut lengkap.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan titik tengah dua titik layak dari $Ax\\le b$ juga layak. Berikan kontra-contoh jika koefisien kombinasi diperbolehkan negatif.",
      "hint": "Gunakan linearitas A dan pertidaksamaan komponen.",
      "answer": "1. Ambil $Au\\le b$ dan $Av\\le b$. Maka $A((u+v)/2)=(Au+Av)/2\\le b$, sehingga titik tengah layak.\\n\\n2. Lebih umum, $A(tu+(1-t)v)\\le tb+(1-t)b=b$ untuk $0\\le t\\le1$.\\n\\n3. Untuk koefisien negatif, ambil $P=[0,1]$ pada garis real, $u=0$, $v=1$, dan $t=2$. Kombinasi $2u+(1-2)v=-1$ tidak termasuk P.\\n\\n4. Karena itu syarat koefisien nonnegatif tidak boleh dihilangkan dari argumen konveksitas.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Maksimumkan $2x+5y$ pada poligon $P$ dan buktikan pilihan titik optimal.",
      "hint": "Evaluasi keempat titik sudut.",
      "answer": "1. Titik sudut P adalah $(0,0),(3,0),(2,3),(0,4)$. Daerahnya poligon konveks tertutup dan terbatas.\\n\\n2. Nilai $2x+5y$ pada titik-titik itu berturut-turut $0,6,19,20$.\\n\\n3. Prinsip titik sudut menjamin maksimum pada salah satu titik sudut karena tujuan linear.\\n\\n4. Nilai terbesar adalah $20$, sehingga $(0,4)$ optimal. Ketaksamaan ketat dengan semua titik sudut lain menunjukkan titik optimal tunggal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Temukan pengali nonnegatif yang membuktikan $3x+4y\\le18$ dari kendala $x+2y\\le8$ dan $3x+y\\le9$.",
      "hint": "Samakan koefisien x dan y.",
      "answer": "1. Cari $\\lambda_1,\\lambda_2\\ge0$ dengan $\\lambda_1+3\\lambda_2=3$ dan $2\\lambda_1+\\lambda_2=4$.\\n\\n2. Penyelesaian sistem memberikan $\\lambda_1=9/5$ dan $\\lambda_2=2/5$, keduanya nonnegatif.\\n\\n3. Menjumlahkan kendala dengan pengali tersebut menghasilkan $3x+4y\\le(9/5)8+(2/5)9=18$.\\n\\n4. Karena $(2,3)$ layak dan memberikan nilai 18, batas atas ini tajam dan membuktikan optimalitas.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk $c_1,c_2>0$, cari syarat perlu dan cukup agar $(2,3)$ optimal pada $P$ untuk tujuan $c_1x+c_2y$.",
      "hint": "Bandingkan dengan dua titik sudut yang bertetangga.",
      "answer": "1. Nilai tujuan di $(2,3)$ adalah $2c_1+3c_2$, di $(3,0)$ adalah $3c_1$, dan di $(0,4)$ adalah $4c_2$.\\n\\n2. Syarat tidak kalah dari $(3,0)$ setara dengan $c_1\\le3c_2$. Syarat tidak kalah dari $(0,4)$ setara dengan $c_1\\ge c_2/2$.\\n\\n3. Nilai di asal nol, sehingga tidak mengalahkan kandidat karena kedua koefisien positif.\\n\\n4. Dengan prinsip titik sudut, syarat perlu dan cukup adalah $c_2/2\\le c_1\\le3c_2$. Pada batas kesamaan terdapat sisi optimal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Tentukan semua solusi optimal $x+2y$ pada poligon $P$ dan buktikan tidak ada solusi optimal lain.",
      "hint": "Gunakan kendala pertama sebagai batas atas.",
      "answer": "1. Dari kendala pertama diperoleh $x+2y\\le8$ untuk setiap titik layak.\\n\\n2. Titik $(0,4)$ dan $(2,3)$ layak dan mencapai nilai $8$. Konveksitas serta linearitas menunjukkan seluruh ruas di antara kedua titik juga optimal.\\n\\n3. Setiap titik optimal harus memenuhi $x+2y=8$ karena nilai optimalnya 8.\\n\\n4. Irisan garis $x+2y=8$ dengan P tepat ruas $[(0,4),(2,3)]$. Jadi ruas tersebut adalah seluruh himpunan solusi optimal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Tunjukkan bahwa daerah layak tidak terbatas tidak selalu membuat nilai tujuan tidak terbatas: maksimalkan $-x-y$ pada $x,y\\ge0$.",
      "hint": "Bandingkan daerah layak dengan tanda fungsi tujuan.",
      "answer": "1. Daerah layak adalah kuadran pertama, yang tidak terbatas karena memuat $(t,0)$ untuk semua $t\\ge0$.\\n\\n2. Untuk setiap titik layak, $-x-y\\le0$, sehingga nilai tujuan tetap terbatas ke atas.\\n\\n3. Titik asal $(0,0)$ layak dan memberikan nilai 0, sehingga maksimum tercapai di titik tersebut.\\n\\n4. Contoh ini menunjukkan bahwa keterbatasan P merupakan syarat cukup untuk teorema eksistensi, tetapi tidak perlu bagi setiap tujuan linear.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Jelaskan secara formal perbedaan masalah $\\max\\{x:x\\ge1,x\\le0\\}$ dan $\\max\\{x:x\\ge0\\}$.",
      "hint": "Uji keberadaan titik layak sebelum menguji batas nilai tujuan.",
      "answer": "1. Sistem pertama menuntut sekaligus $x\\ge1$ dan $x\\le0$, yang tidak mungkin. Jadi daerah layaknya kosong.\\n\\n2. Sistem kedua mempunyai titik layak, misalnya $x=0$, sehingga bukan masalah infeasible.\\n\\n3. Untuk setiap kandidat $x_0\\ge0$, titik $x_0+1$ juga layak dan memberi nilai tujuan lebih besar. Karena itu masalah kedua unbounded.\\n\\n4. Keduanya tidak mempunyai pemaksimum, tetapi penyebabnya berbeda dan harus dilaporkan dengan istilah yang tepat.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
