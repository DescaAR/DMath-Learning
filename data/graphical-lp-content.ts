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
      "statement": "Untuk $P=\\{(x,y):x,y\\ge0,\\ x+2y\\le8,\\ 3x+y\\le9\\}$, masalah $\\max_{(x,y)\\in P}(3x+4y)$ mempunyai nilai optimal $18$ yang dicapai di $(2,3)$.",
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
  "examples": [],
  "exercises": [],
  "mistakes": [],
  "connections": []
};
