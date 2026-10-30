import type { BookLessonContent } from "@/data/book-content-types";

/** Authored topological-continuity lesson. Munkres (2000), Rudin (1976). */
export const topologicalContinuityContent: BookLessonContent = {
  "intro": [
    "Kontinuitas tidak hanya berarti bahwa grafik dapat digambar tanpa mengangkat pena. Pada ruang yang tidak memiliki grafik atau koordinat, gagasan tersebut harus dinyatakan melalui himpunan terbuka: fungsi kontinu apabila setiap himpunan terbuka di ruang tujuan mempunyai pracitra terbuka di ruang asal. Formulasi ini membedakan dengan tegas pracitra dari citra; fungsi kontinu tidak harus mengirim himpunan terbuka menjadi himpunan terbuka.",
    "Sebagai pengantar, perhatikan fungsi kuadrat dari garis real ke garis real. Pracitra interval terbuka (1,4) adalah gabungan dua interval terbuka, yaitu (-2,-1) dan (1,2). Akan tetapi, citra interval terbuka (-1,1) justru [0,1), yang tidak terbuka di garis real. Contoh sederhana ini menunjukkan arah operasi himpunan yang benar dalam definisi kontinuitas.",
    "Materi dimulai dari topologi dan pracitra, dilanjutkan dengan ekuivalensi karakterisasi himpunan terbuka dan epsilon–delta pada ruang metrik, karakterisasi himpunan tertutup, komposisi, topologi relatif, dan kekompakan. Semua pembuktian menyebutkan ruang asal serta ruang tujuan. Rujukan: James R. Munkres, Topology, edisi ke-2 (2000), Bab 2; Walter Rudin, Principles of Mathematical Analysis, edisi ke-3 (1976), Bab 2 dan 4. Contoh serta latihan merupakan susunan asli DMath Learning."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Topologi dan Himpunan Terbuka",
      "statement": "Misalkan $X$ himpunan. Keluarga $\\tau\\subseteq\\mathcal P(X)$ disebut topologi pada $X$ apabila (i) $\\varnothing,X\\in\\tau$; (ii) gabungan sebarang keluarga anggota $\\tau$ kembali anggota $\\tau$; dan (iii) irisan hingga anggota $\\tau$ kembali anggota $\\tau$. Pasangan $(X,\\tau)$ disebut ruang topologi, sedangkan setiap $U\\in\\tau$ disebut terbuka.",
      "explanation": "Kata sebarang pada gabungan mencakup keluarga tak hingga, sedangkan kata hingga pada irisan tidak dapat dihapus. Dalam topologi diskrit setiap subhimpunan terbuka; dalam topologi indiscret hanya himpunan kosong dan seluruh ruang yang terbuka."
    },
    {
      "kind": "definition",
      "title": "Pracitra Himpunan",
      "statement": "Untuk fungsi $f:X\\to Y$ dan $B\\subseteq Y$, pracitra $B$ adalah $f^{-1}(B)=\\{x\\in X:f(x)\\in B\\}$. Notasi ini tetap bermakna walaupun $f$ tidak bijektif; simbol $f^{-1}(B)$ di sini tidak menyatakan fungsi invers.",
      "explanation": "Keanggotaan pracitra selalu diuji pada titik domain. Identitas operasi himpunan pada pracitra berlaku tanpa mengasumsikan kontinuitas."
    },
    {
      "kind": "definition",
      "title": "Kontinuitas Topologis",
      "statement": "Misalkan $(X,\\tau_X)$ dan $(Y,\\tau_Y)$ ruang topologi. Fungsi $f:X\\to Y$ disebut kontinu apabila untuk setiap $V\\in\\tau_Y$ berlaku $f^{-1}(V)\\in\\tau_X$. Kontinuitas ditentukan oleh dua topologi yang dipakai, bukan hanya oleh rumus fungsi.",
      "explanation": "Perhatikan arah dari ruang tujuan ke ruang asal. Syarat citra himpunan terbuka harus terbuka merupakan sifat pemetaan terbuka, yang berbeda dari kontinuitas."
    },
    {
      "kind": "definition",
      "title": "Homeomorfisme",
      "statement": "Fungsi $f:X\\to Y$ antara dua ruang topologi disebut homeomorfisme apabila $f$ bijektif, $f$ kontinu, dan fungsi invers $f^{-1}:Y\\to X$ juga kontinu. Dua ruang yang dihubungkan homeomorfisme disebut homeomorfik.",
      "explanation": "Bijeksi kontinu saja tidak selalu homeomorfisme; syarat kontinuitas invers harus diperiksa, kecuali terdapat hipotesis tambahan yang menjaminnya."
    },
    {
      "kind": "definition",
      "title": "Topologi Relatif",
      "statement": "Misalkan $(X,\\tau)$ ruang topologi dan $A\\subseteq X$. Topologi relatif pada $A$ adalah $\\tau_A=\\{A\\cap U:U\\in\\tau\\}$. Dengan demikian, $W\\subseteq A$ terbuka relatif terhadap $A$ jika dan hanya jika ada $U$ terbuka di $X$ sehingga $W=A\\cap U$.",
      "explanation": "Terbuka relatif tidak sama dengan terbuka pada ruang ambient. Sebagai contoh, [0,1) terbuka di [0,1] dengan topologi relatif, tetapi tidak terbuka di garis real."
    },
    {
      "kind": "proposition",
      "title": "Pracitra Mempertahankan Operasi Himpunan",
      "statement": "Untuk fungsi sebarang $f:X\\to Y$, keluarga $(B_i)_{i\\in I}$ dengan $B_i\\subseteq Y$, dan $B\\subseteq Y$, berlaku $f^{-1}(\\bigcup_{i\\in I}B_i)=\\bigcup_{i\\in I}f^{-1}(B_i)$, $f^{-1}(\\bigcap_{i\\in I}B_i)=\\bigcap_{i\\in I}f^{-1}(B_i)$, serta $f^{-1}(Y\\setminus B)=X\\setminus f^{-1}(B)$.",
      "proof": [
        "Diketahui fungsi $f:X\\to Y$ dan keluarga $(B_i)_{i\\in I}$. Dibuktikan masing-masing kesamaan himpunan melalui dua inklusi, yaitu dengan menunjukkan bahwa unsur pada ruas kiri tepat merupakan unsur pada ruas kanan.",
        "Untuk gabungan, ambil $x\\in f^{-1}(\\bigcup_i B_i)$. Maka $f(x)\\in\\bigcup_i B_i$, sehingga ada $j\\in I$ dengan $f(x)\\in B_j$. Akibatnya $x\\in f^{-1}(B_j)\\subseteq\\bigcup_i f^{-1}(B_i)$. Sebaliknya, jika $x\\in\\bigcup_i f^{-1}(B_i)$, ada $j$ dengan $f(x)\\in B_j\\subseteq\\bigcup_i B_i$, sehingga $x\\in f^{-1}(\\bigcup_i B_i)$.",
        "Untuk irisan, $x\\in f^{-1}(\\bigcap_i B_i)$ berarti $f(x)\\in B_i$ untuk setiap $i$, yang ekuivalen dengan $x\\in f^{-1}(B_i)$ untuk setiap $i$. Kedua implikasi ini memberi dua inklusi. Apabila $I=\\varnothing$, gunakan konvensi gabungan kosong $\\varnothing$ dan irisan kosong $Y$; pracitranya masing-masing $\\varnothing$ dan $X$, sehingga identitas tetap berlaku.",
        "Terakhir, $x\\in f^{-1}(Y\\setminus B)$ jika dan hanya jika $f(x)\\notin B$, yakni $x\\notin f^{-1}(B)$, yang ekuivalen dengan $x\\in X\\setminus f^{-1}(B)$. Karena semua identitas dibuktikan dua arah, ketiga kesamaan berlaku untuk setiap fungsi $f$. Dengan demikian, proposisi terbukti."
      ]
    },
    {
      "kind": "theorem",
      "title": "Ekuivalensi Kontinuitas Topologis dan Epsilon–Delta",
      "statement": "Misalkan $(X,d)$ dan $(Y,\\rho)$ ruang metrik, masing-masing dilengkapi topologi yang diinduksi metriknya, serta $f:X\\to Y$. Fungsi $f$ kontinu secara topologis jika dan hanya jika untuk setiap $a\\in X$ dan setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $d(x,a)<\\delta$ mengakibatkan $\\rho(f(x),f(a))<\\varepsilon$ bagi setiap $x\\in X$.",
      "proof": [
        "Diketahui kedua ruang metrik dengan topologi bola terbuka. Dibuktikan kedua implikasi. Untuk arah ($\\Rightarrow$), andaikan pracitra setiap himpunan terbuka di $Y$ terbuka di $X$. Pilih sebarang $a\\in X$ dan $\\varepsilon>0$.",
        "Bola $V=B_\\rho(f(a),\\varepsilon)$ terbuka di $Y$. Maka $U=f^{-1}(V)$ terbuka di $X$ dan $a\\in U$. Menurut definisi terbuka pada ruang metrik, terdapat $\\delta>0$ dengan $B_d(a,\\delta)\\subseteq U$. Jadi, jika $d(x,a)<\\delta$, maka $x\\in U$ dan $\\rho(f(x),f(a))<\\varepsilon$. Inilah syarat epsilon–delta.",
        "Untuk arah ($\\Leftarrow$), andaikan syarat epsilon–delta berlaku pada setiap titik $a\\in X$. Ambil sebarang himpunan terbuka $V\\subseteq Y$. Jika $f^{-1}(V)=\\varnothing$, pracitranya terbuka. Jika tidak, pilih sebarang $a\\in f^{-1}(V)$, sehingga $f(a)\\in V$.",
        "Karena $V$ terbuka, terdapat $\\varepsilon>0$ dengan $B_\\rho(f(a),\\varepsilon)\\subseteq V$. Syarat epsilon–delta di $a$ memberikan $\\delta>0$ sehingga $f(B_d(a,\\delta))\\subseteq B_\\rho(f(a),\\varepsilon)\\subseteq V$. Jadi $B_d(a,\\delta)\\subseteq f^{-1}(V)$. Karena $a$ sebarang, $f^{-1}(V)$ terbuka. Dengan demikian, kedua karakterisasi ekuivalen."
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Melalui Pracitra Himpunan Tertutup",
      "statement": "Untuk ruang topologi $X,Y$ dan fungsi $f:X\\to Y$, $f$ kontinu jika dan hanya jika untuk setiap himpunan tertutup $F\\subseteq Y$, pracitra $f^{-1}(F)$ tertutup di $X$.",
      "proof": [
        "Diketahui fungsi $f:X\\to Y$. Dibuktikan arah ($\\Rightarrow$). Andaikan $f$ kontinu dan ambil sebarang himpunan tertutup $F\\subseteq Y$. Karena $Y\\setminus F$ terbuka, kontinuitas memberi $f^{-1}(Y\\setminus F)$ terbuka di $X$.",
        "Identitas pracitra komplemen menghasilkan $f^{-1}(Y\\setminus F)=X\\setminus f^{-1}(F)$. Jadi komplemen $f^{-1}(F)$ terbuka, yang menurut definisi berarti $f^{-1}(F)$ tertutup.",
        "Untuk arah ($\\Leftarrow$), andaikan pracitra setiap himpunan tertutup di $Y$ tertutup di $X$. Ambil sebarang himpunan terbuka $V\\subseteq Y$. Komplemen $F=Y\\setminus V$ tertutup, sehingga $f^{-1}(F)$ tertutup di $X$.",
        "Sekali lagi identitas pracitra komplemen memberi $f^{-1}(V)=X\\setminus f^{-1}(F)$, yang terbuka di $X$. Karena $V$ dipilih sebarang, $f$ kontinu. Dengan demikian, kedua implikasi terbukti."
      ]
    },
    {
      "kind": "proposition",
      "title": "Komposisi Fungsi Kontinu",
      "statement": "Misalkan $X,Y,Z$ ruang topologi, $f:X\\to Y$ kontinu, dan $g:Y\\to Z$ kontinu. Maka komposisi $g\\circ f:X\\to Z$ kontinu.",
      "proof": [
        "Diketahui $f$ dan $g$ kontinu dengan domain dan kodomain yang sesuai. Dibuktikan bahwa pracitra setiap himpunan terbuka di $Z$ oleh $g\\circ f$ terbuka di $X$.",
        "Ambil sebarang $W\\subseteq Z$ yang terbuka. Karena $g$ kontinu, himpunan $g^{-1}(W)$ terbuka di $Y$. Karena $f$ kontinu, himpunan $f^{-1}(g^{-1}(W))$ terbuka di $X$.",
        "Untuk setiap $x\\in X$, berlaku $x\\in(g\\circ f)^{-1}(W)$ jika dan hanya jika $g(f(x))\\in W$, jika dan hanya jika $f(x)\\in g^{-1}(W)$, jika dan hanya jika $x\\in f^{-1}(g^{-1}(W))$. Jadi kedua himpunan tersebut sama.",
        "Akibatnya $(g\\circ f)^{-1}(W)$ terbuka untuk setiap $W$ terbuka. Dengan demikian, $g\\circ f$ kontinu."
      ]
    },
    {
      "kind": "proposition",
      "title": "Pembatasan Fungsi Kontinu ke Subruang",
      "statement": "Misalkan $f:X\\to Y$ kontinu, $A\\subseteq X$ diberi topologi relatif, dan $f|_A:A\\to Y$ adalah pembatasan $f$ pada $A$. Maka $f|_A$ kontinu.",
      "proof": [
        "Diketahui $f:X\\to Y$ kontinu dan $A$ dilengkapi topologi relatif dari $X$. Dibuktikan bahwa untuk setiap $V\\subseteq Y$ terbuka, pracitra $V$ oleh $f|_A$ terbuka relatif terhadap $A$.",
        "Ambil sebarang $V$ terbuka di $Y$. Dari definisi pembatasan, $(f|_A)^{-1}(V)=\\{a\\in A:f(a)\\in V\\}=A\\cap f^{-1}(V)$.",
        "Karena $f$ kontinu, $f^{-1}(V)$ terbuka di $X$. Berdasarkan definisi topologi relatif, irisan $A\\cap f^{-1}(V)$ terbuka di $A$.",
        "Karena $V$ dipilih sebarang, semua pracitra himpunan terbuka di $Y$ terbuka di $A$. Dengan demikian, pembatasan $f|_A$ kontinu, tanpa perlu mengasumsikan bahwa $A$ sendiri terbuka di $X$."
      ]
    },
    {
      "kind": "theorem",
      "title": "Citra Kontinu dari Ruang Kompak adalah Kompak",
      "statement": "Misalkan $X,Y$ ruang topologi, $K\\subseteq X$ kompak dengan topologi relatif, dan $f:X\\to Y$ kontinu. Maka $f(K)\\subseteq Y$ kompak dengan topologi relatif.",
      "proof": [
        "Diketahui $K$ kompak dan $f$ kontinu. Dibuktikan bahwa setiap penutup terbuka dari $f(K)$ mempunyai subpenutup hingga. Ambil sebarang keluarga $(V_i)_{i\\in I}$ himpunan terbuka di $Y$ yang memenuhi $f(K)\\subseteq\\bigcup_{i\\in I}V_i$.",
        "Untuk setiap $i\\in I$, kontinuitas $f$ menjamin $f^{-1}(V_i)$ terbuka di $X$. Himpunan $K\\cap f^{-1}(V_i)$ terbuka relatif di $K$. Karena setiap $x\\in K$ memenuhi $f(x)\\in f(K)$, sedikitnya satu $V_i$ memuat $f(x)$; maka keluarga pracitra relatif ini menutupi $K$.",
        "Dari kekompakan $K$, terdapat indeks hingga $i_1,\\ldots,i_m$ sehingga $K\\subseteq\\bigcup_{j=1}^{m}f^{-1}(V_{i_j})$. Untuk setiap $y\\in f(K)$, pilih $x\\in K$ dengan $f(x)=y$; sedikitnya satu pracitra tadi memuat $x$, sehingga $y\\in V_{i_j}$.",
        "Jadi $f(K)\\subseteq V_{i_1}\\cup\\cdots\\cup V_{i_m}$. Karena penutup awal dipilih sebarang, $f(K)$ kompak. Dengan demikian, teorema terbukti tanpa mengasumsikan ruang tujuan Hausdorff."
      ]
    },
    {
      "kind": "proposition",
      "title": "Homeomorfisme Mempertahankan Himpunan Terbuka",
      "statement": "Jika $f:X\\to Y$ homeomorfisme, maka untuk setiap $U\\subseteq X$, $U$ terbuka di $X$ jika dan hanya jika $f(U)$ terbuka di $Y$. Akibatnya, homeomorfisme mempertahankan kekompakan melalui citra.",
      "proof": [
        "Diketahui $f:X\\to Y$ bijektif, kontinu, dan $f^{-1}:Y\\to X$ kontinu. Dibuktikan kedua arah karakterisasi keterbukaan. Untuk ($\\Rightarrow$), misalkan $U$ terbuka di $X$.",
        "Karena fungsi invers $f^{-1}$ kontinu, pracitra $U$ oleh fungsi invers terbuka di $Y$. Bijektivitas memberi $(f^{-1})^{-1}(U)=f(U)$, sehingga $f(U)$ terbuka di $Y$.",
        "Untuk ($\\Leftarrow$), andaikan $f(U)$ terbuka di $Y$. Kontinuitas $f$ menjamin $f^{-1}(f(U))$ terbuka di $X$. Karena $f$ injektif, $f^{-1}(f(U))=U$, sehingga $U$ terbuka.",
        "Selanjutnya, jika $K\\subseteq X$ kompak, teorema citra kontinu memberikan $f(K)$ kompak di $Y$. Sebaliknya, jika $L\\subseteq Y$ kompak, terapkan teorema yang sama pada fungsi invers kontinu untuk memperoleh $f^{-1}(L)$ kompak di $X$. Dengan demikian, kedua arah dan akibatnya terbukti."
      ]
    }
  ],
  "examples": [
    {
      "title": "Topologi Diskrit dan Indiskrit",
      "forDefinition": "Topologi dan Himpunan Terbuka",
      "problem": "Untuk $X=\\{a,b\\}$, periksa apakah $\\tau_1=\\mathcal P(X)$ dan $\\tau_2=\\{\\varnothing,X\\}$ merupakan topologi.",
      "solution": [
        "Diketahui $X=\\{a,b\\}$. Untuk $\\tau_1$, semua subhimpunan $X$ menjadi anggota keluarga. Himpunan kosong dan $X$ jelas termasuk, sedangkan gabungan maupun irisan berapa pun anggota $\\mathcal P(X)$ tetap merupakan subhimpunan $X$. Jadi seluruh aksioma topologi terpenuhi.",
        "Untuk $\\tau_2$, hanya terdapat dua himpunan, yakni $\\varnothing$ dan $X$. Gabungan sebarang anggotanya hanya mungkin $\\varnothing$ atau $X$, demikian pula irisan hingga anggotanya. Maka $\\tau_2$ juga topologi.",
        "Namun $\\{a\\}$ terbuka dalam $\\tau_1$ dan tidak terbuka dalam $\\tau_2$. Dengan demikian, keterbukaan bergantung pada topologi yang dipilih, bukan hanya pada himpunan dasarnya."
      ]
    },
    {
      "title": "Pracitra Tidak Memerlukan Fungsi Invers",
      "forDefinition": "Pracitra Himpunan",
      "problem": "Misalkan $f:\\mathbb R\\to\\mathbb R$ dengan $f(x)=x^2$. Tentukan $f^{-1}(\\{4\\})$ dan $f^{-1}((-1,1))$.",
      "solution": [
        "Diketahui $f(x)=x^2$, yang tidak injektif karena $f(2)=f(-2)=4$. Meski tidak ada fungsi invers global pada $\\mathbb R$, pracitra himpunan tetap terdefinisi melalui keanggotaan.",
        "Syarat $x\\in f^{-1}(\\{4\\})$ ekuivalen dengan $x^2=4$, sehingga $x=-2$ atau $x=2$. Jadi $f^{-1}(\\{4\\})=\\{-2,2\\}$.",
        "Untuk interval $(-1,1)$, syarat $-1<x^2<1$ menyederhana menjadi $x^2<1$ sebab kuadrat nonnegatif. Ini ekuivalen dengan $-1<x<1$. Jadi $f^{-1}((-1,1))=(-1,1)$; kedua jawaban mematuhi definisi pracitra."
      ]
    },
    {
      "title": "Kontinuitas Fungsi Kuadrat",
      "forDefinition": "Kontinuitas Topologis",
      "problem": "Buktikan bahwa $f(x)=x^2$ kontinu di setiap $a\\in\\mathbb R$ dengan epsilon–delta, lalu simpulkan sifat pracitra terbukanya.",
      "solution": [
        "Diketahui $a\\in\\mathbb R$ dan $\\varepsilon>0$ sebarang. Dibuktikan ada $\\delta>0$ sehingga $|x-a|<\\delta$ mengakibatkan $|x^2-a^2|<\\varepsilon$.",
        "Gunakan faktorisasi $|x^2-a^2|=|x-a|\\,|x+a|$. Jika $|x-a|<1$, ketaksamaan segitiga memberi $|x+a|\\le |x-a|+2|a|<1+2|a|$.",
        "Pilih $\\delta=\\min\\{1,\\varepsilon/(2|a|+1)\\}>0$. Apabila $|x-a|<\\delta$, diperoleh $|x^2-a^2|<\\delta(1+2|a|)\\le\\varepsilon$. Karena $a$ dan $\\varepsilon$ sebarang, fungsi kontinu di setiap titik.",
        "Teorema ekuivalensi kontinuitas kemudian menjamin $f^{-1}(V)$ terbuka di $\\mathbb R$ untuk setiap $V$ terbuka. Kesimpulan ini bukan pernyataan bahwa $f(U)$ terbuka untuk setiap $U$ terbuka."
      ]
    },
    {
      "title": "Homeomorfisme Afin",
      "forDefinition": "Homeomorfisme",
      "problem": "Buktikan bahwa $f:\\mathbb R\\to\\mathbb R$, $f(x)=3x-2$, adalah homeomorfisme.",
      "solution": [
        "Diketahui $f(x)=3x-2$. Jika $f(x_1)=f(x_2)$, maka $3x_1-2=3x_2-2$ dan $x_1=x_2$, sehingga $f$ injektif. Untuk setiap $y\\in\\mathbb R$, pilih $x=(y+2)/3$; diperoleh $f(x)=y$, sehingga $f$ surjektif.",
        "Untuk setiap $a,x\\in\\mathbb R$, berlaku $|f(x)-f(a)|=3|x-a|$. Diberikan $\\varepsilon>0$, pilih $\\delta=\\varepsilon/3$; ini membuktikan kontinuitas $f$.",
        "Fungsi inversnya $f^{-1}(y)=(y+2)/3$ memenuhi $|f^{-1}(y)-f^{-1}(b)|=|y-b|/3$. Untuk $\\varepsilon>0$, pilih $\\delta=3\\varepsilon$; maka invers kontinu.",
        "Ketiga syarat—bijeksi, kontinuitas, dan kontinuitas invers—terpenuhi. Dengan demikian, $f$ merupakan homeomorfisme $\\mathbb R$ ke dirinya sendiri."
      ]
    },
    {
      "title": "Terbuka Relatif tetapi Tidak Terbuka di Real",
      "forDefinition": "Topologi Relatif",
      "problem": "Untuk $A=[0,1]\\subseteq\\mathbb R$, tentukan apakah $W=[0,1)$ terbuka di $A$ dan di $\\mathbb R$.",
      "solution": [
        "Diketahui $A=[0,1]$ dengan topologi relatif dari garis real. Ambil himpunan terbuka $U=(-1,1)$ di $\\mathbb R$. Irisannya dengan $A$ adalah $A\\cap U=[0,1)=W$.",
        "Menurut definisi topologi relatif, representasi $W=A\\cap U$ membuktikan bahwa $W$ terbuka di $A$, walaupun $W$ memuat titik 0 yang merupakan ujung kiri interval.",
        "Sebaliknya, $W$ tidak terbuka di $\\mathbb R$. Untuk setiap $r>0$, interval $(0-r,0+r)$ mengandung bilangan negatif, yang tidak termasuk $W$. Jadi tidak ada persekitaran terbuka real di sekitar 0 yang seluruhnya berada dalam $W$.",
        "Dengan demikian, status keterbukaan $W$ berbeda ketika ruang ambient berubah; pernyataan selalu harus menyebutkan ruangnya."
      ]
    },
    {
      "title": "Pracitra Interval oleh Nilai Mutlak",
      "problem": "Tentukan pracitra $V=(1,3)$ oleh $f(x)=|x|$ dan periksa keterbukaannya.",
      "solution": [
        "Diketahui $f:\\mathbb R\\to\\mathbb R$, $f(x)=|x|$, dan $V=(1,3)$. Keanggotaan $x\\in f^{-1}(V)$ ekuivalen dengan $1<|x|<3$.",
        "Pisahkan kasus $x\\ge0$ dan $x<0$. Untuk $x\\ge0$, syaratnya $1<x<3$; untuk $x<0$, syaratnya $-3<x<-1$. Karena batas ketat, titik $-3,-1,1,3$ tidak termasuk.",
        "Jadi $f^{-1}(V)=(-3,-1)\\cup(1,3)$. Kedua interval terbuka dan gabungannya terbuka, sesuai dengan kontinuitas nilai mutlak. Perhitungan kasus menghindari kesalahan memasukkan 0."
      ]
    },
    {
      "title": "Fungsi Kontinu Tidak Harus Pemetaan Terbuka",
      "problem": "Berikan fungsi kontinu dan himpunan terbuka yang citranya tidak terbuka.",
      "solution": [
        "Ambil $f:\\mathbb R\\to\\mathbb R$, $f(x)=x^2$, dan $U=(-1,1)$ yang terbuka. Kontinuitas $f$ sudah dibuktikan dengan epsilon–delta.",
        "Untuk setiap $x\\in U$, berlaku $0\\le x^2<1$, sehingga $f(U)\\subseteq[0,1)$. Sebaliknya, jika $y\\in[0,1)$, pilih $x=\\sqrt y\\in[0,1)\\subset U$; maka $f(x)=y$. Jadi $f(U)=[0,1)$.",
        "Himpunan $[0,1)$ tidak terbuka di $\\mathbb R$ karena setiap persekitaran real dari 0 mengandung bilangan negatif. Dengan demikian, kontinuitas tidak menjamin citra himpunan terbuka terbuka; yang dijamin adalah pracitra himpunan terbuka terbuka."
      ]
    },
    {
      "title": "Citra Kompak oleh Fungsi Kuadrat",
      "problem": "Tentukan $f(K)$ untuk $K=[-2,1]$ dan $f(x)=x^2$ serta jelaskan kekompakannya.",
      "solution": [
        "Diketahui $K=[-2,1]$ kompak di $\\mathbb R$ berdasarkan Heine–Borel karena tertutup dan terbatas. Fungsi kuadrat kontinu pada $\\mathbb R$, sehingga teorema citra kontinu memastikan $f(K)$ kompak.",
        "Karena $0\\in K$, nilai minimum $x^2$ pada $K$ adalah 0. Nilai maksimum adalah 4 yang dicapai di $x=-2$, sebab $|x|\\le2$ bagi seluruh $x\\in K$. Jadi $f(K)\\subseteq[0,4]$.",
        "Untuk setiap $y\\in[0,4]$, pilih $x=-\\sqrt y\\in[-2,0]\\subseteq K$; diperoleh $f(x)=y$. Jadi $[0,4]\\subseteq f(K)$.",
        "Dua inklusi memberikan $f(K)=[0,4]$, suatu interval tertutup dan terbatas. Ini memverifikasi secara langsung kesimpulan kekompakan dari teorema."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "KT-01. Untuk $f(x)=x^2$, tentukan $f^{-1}((1,4))$ dan buktikan bahwa hasilnya terbuka di $\\mathbb R$.",
      "hint": "Ubah syarat ke $1<x^2<4$ dan pisahkan tanda $x$.",
      "answer": "Diketahui $f:\\mathbb R\\to\\mathbb R$, $f(x)=x^2$, dan $V=(1,4)$. Ditentukan semua $x$ yang memenuhi $1<f(x)<4$. Ketaksamaan tersebut setara dengan $1<|x|<2$, sebab $|x|=\\sqrt{x^2}$ dan akar kuadrat mempertahankan urutan bilangan nonnegatif. Jika $x\\ge0$, diperoleh $1<x<2$; jika $x<0$, diperoleh $-2<x<-1$. Maka $f^{-1}(V)=(-2,-1)\\cup(1,2)$. Untuk setiap $x$ pada salah satu interval, pilih radius lebih kecil daripada jaraknya ke kedua ujung interval itu; bola real di sekitar $x$ seluruhnya berada pada interval yang sama. Dengan demikian kedua interval terbuka, dan gabungannya terbuka. Titik $\\pm1,\\pm2$ dikecualikan karena batas ketat. Hasil ini konsisten dengan kontinuitas $x^2$ tetapi diperoleh langsung melalui perhitungan pracitra."
    },
    {
      "prompt": "KT-02. Buktikan dengan dua inklusi bahwa $f^{-1}(B\\cup C)=f^{-1}(B)\\cup f^{-1}(C)$ untuk fungsi $f:X\\to Y$ dan $B,C\\subseteq Y$.",
      "hint": "Mulai dari keanggotaan $x$ pada masing-masing ruas.",
      "answer": "Diketahui fungsi sebarang $f:X\\to Y$ dan $B,C\\subseteq Y$. Dibuktikan dua inklusi. ($\\subseteq$) Ambil $x\\in f^{-1}(B\\cup C)$. Menurut definisi pracitra, $f(x)\\in B\\cup C$. Karena keanggotaan gabungan berarti sedikitnya salah satu kondisi terpenuhi, berlaku $f(x)\\in B$ atau $f(x)\\in C$. Jadi $x\\in f^{-1}(B)$ atau $x\\in f^{-1}(C)$, sehingga $x\\in f^{-1}(B)\\cup f^{-1}(C)$. ($\\supseteq$) Ambil $x\\in f^{-1}(B)\\cup f^{-1}(C)$. Maka $f(x)\\in B$ atau $f(x)\\in C$, sehingga $f(x)\\in B\\cup C$. Akibatnya $x\\in f^{-1}(B\\cup C)$. Kedua inklusi tidak menggunakan injektivitas, surjektivitas, atau kontinuitas. Dengan demikian identitas pracitra gabungan berlaku untuk setiap fungsi."
    },
    {
      "prompt": "KT-03. Berikan contoh yang membantah klaim bahwa fungsi kontinu selalu memetakan himpunan terbuka ke himpunan terbuka.",
      "hint": "Coba fungsi kuadrat pada interval yang memuat 0.",
      "answer": "Diketahui klaim universal: jika $f$ kontinu dan $U$ terbuka, maka $f(U)$ terbuka. Untuk membantahnya, cukup satu pasangan $(f,U)$ yang memenuhi hipotesis tetapi tidak memenuhi kesimpulan. Ambil $f:\\mathbb R\\to\\mathbb R$ dengan $f(x)=x^2$ dan $U=(-1,1)$. Fungsi kuadrat kontinu karena untuk setiap $a$ dan $\\varepsilon>0$ pilihan $\\delta=\\min\\{1,\\varepsilon/(2|a|+1)\\}$ menjamin $|x^2-a^2|<\\varepsilon$ ketika $|x-a|<\\delta$. Himpunan $U$ terbuka. Namun $f(U)=[0,1)$: inklusi pertama mengikuti $0\\le x^2<1$ untuk $|x|<1$, dan inklusi sebaliknya diperoleh dari $x=\\sqrt y$ untuk setiap $0\\le y<1$. Citra ini tidak terbuka di $\\mathbb R$ karena 0 tidak memiliki interval terbuka yang seluruhnya berada dalam $[0,1)$. Jadi klaim salah; definisi kontinuitas menggunakan pracitra, bukan citra."
    },
    {
      "prompt": "KT-04. Definisikan $f(0)=0$ dan $f(x)=x\\sin(1/x)$ untuk $x\\ne0$. Buktikan kontinuitas di 0 dan jelaskan akibat topologisnya.",
      "hint": "Gunakan $|sin t|le1$ dan pembatasan langsung.",
      "answer": "Diketahui $f:\\mathbb R\\to\\mathbb R$ dengan $f(0)=0$ dan $f(x)=x\\sin(1/x)$ jika $x\\ne0$. Dibuktikan kontinuitas di $a=0$. Ambil sebarang $\\varepsilon>0$ dan pilih $\\delta=\\varepsilon$. Jika $|x|<\\delta$ serta $x\\ne0$, maka $|f(x)-f(0)|=|x\\sin(1/x)|\\le|x|<\\varepsilon$ karena $|\\sin t|\\le1$. Jika $x=0$, selisih fungsi bernilai 0 dan ketaksamaan tetap terpenuhi. Jadi syarat epsilon–delta berlaku di 0. Untuk $x\\ne0$, fungsi $x\\mapsto1/x$, sinus, dan perkalian kontinu pada lingkungannya, sehingga $f$ kontinu di setiap titik lain. Teorema ekuivalensi kontinuitas pada ruang metrik sekarang menjamin bahwa untuk setiap himpunan terbuka $V\\subseteq\\mathbb R$, pracitra $f^{-1}(V)$ terbuka. Osilasi $\\sin(1/x)$ tidak merusak kontinuitas karena faktor $x$ menekan amplitudo menuju nol."
    },
    {
      "prompt": "KT-05. Dalam $A=[0,1]$ dengan topologi relatif dari $\\mathbb R$, periksa apakah $W=[0,1)$ terbuka relatif dan apakah $\\{0\\}$ tertutup relatif.",
      "hint": "Nyatakan setiap himpunan sebagai irisan $A$ dengan himpunan terbuka atau tertutup di $mathbb R$.",
      "answer": "Diketahui $A=[0,1]$ sebagai subruang garis real. Untuk memeriksa $W=[0,1)$, ambil $U=(-1,1)$ yang terbuka di $\\mathbb R$. Karena $A\\cap U=[0,1)=W$, definisi topologi relatif menunjukkan $W$ terbuka di $A$. Namun $W$ tidak terbuka di $\\mathbb R$, sebab setiap interval di sekitar 0 memuat bilangan negatif yang tidak ada dalam $W$. Selanjutnya $\\{0\\}=A\\cap\\{0\\}$, dengan $\\{0\\}$ tertutup di $\\mathbb R$ karena komplemennya $(-\\infty,0)\\cup(0,\\infty)$ terbuka. Irisan himpunan tertutup ambient dengan $A$ tertutup relatif: komplemennya di $A$ adalah $A\\cap(\\mathbb R\\setminus\\{0\\})$, yang terbuka relatif. Jadi $\\{0\\}$ tertutup di $A$. Kedua klasifikasi mengikuti ruang ambient yang dinyatakan secara eksplisit."
    },
    {
      "prompt": "KT-06. Buktikan bahwa $f:(0,\\infty)\\to\\mathbb R$, $f(x)=\\ln x$, adalah homeomorfisme, dengan topologi relatif biasa.",
      "hint": "Gunakan invers eksponensial dan kontinuitas kedua fungsi.",
      "answer": "Diketahui $X=(0,\\infty)$ dan $Y=\\mathbb R$ dengan topologi yang diinduksi nilai mutlak. Fungsi logaritma natural terdefinisi pada seluruh $X$, monoton naik ketat, dan mempunyai jangkauan seluruh $\\mathbb R$. Oleh sebab itu $f$ injektif dan surjektif. Untuk setiap $y\\in Y$, persamaan $y=\\ln x$ mempunyai tepat satu solusi $x=e^y$, sehingga fungsi inversnya adalah $f^{-1}(y)=e^y$. Berdasarkan sifat analitik fungsi elementer, $\\ln x$ kontinu pada $(0,\\infty)$ dan $e^y$ kontinu pada $\\mathbb R$; kedua fakta dapat pula dibuktikan melalui turunan $1/x$ dan $e^y$ pada domain masing-masing. Dengan demikian $f$ bijektif, $f$ kontinu, dan $f^{-1}$ kontinu. Ketiga syarat definisi homeomorfisme terpenuhi, sehingga $(0,\\infty)$ dan $\\mathbb R$ homeomorfik. Hasil ini tidak menyatakan bahwa kedua himpunan sama sebagai subset $\\mathbb R$, melainkan bahwa struktur topologinya ekuivalen."
    },
    {
      "prompt": "KT-07. Untuk $K=[0,1]$ dan $f(x)=x(1-x)$, tentukan $f(K)$ dan verifikasi teorema citra kompak.",
      "hint": "Lengkapi kuadrat lalu tunjukkan semua nilai antara batas tercapai.",
      "answer": "Diketahui $K=[0,1]$ dan $f(x)=x(1-x)$. Karena $K$ tertutup dan terbatas di $\\mathbb R$, teorema Heine–Borel menjamin $K$ kompak. Fungsi $f$ polinomial sehingga kontinu. Lengkapi kuadrat: $f(x)=\\frac14-(x-\\frac12)^2$. Untuk $0\\le x\\le1$, berlaku $0\\le f(x)\\le\\frac14$, dengan nilai minimum 0 dicapai pada $x=0$ dan $x=1$, serta maksimum $\\frac14$ dicapai pada $x=\\frac12$. Untuk menunjukkan seluruh nilai antara tercapai, ambil sebarang $y\\in[0,\\frac14]$ dan pilih $x=\\frac{1-\\sqrt{1-4y}}2$. Karena $0\\le\\sqrt{1-4y}\\le1$, diperoleh $x\\in[0,\\frac12]\\subseteq K$, dan substitusi ke $x(1-x)$ menghasilkan $y$. Jadi $f(K)=[0,\\frac14]$. Interval ini tertutup dan terbatas, sehingga kompak; hasilnya cocok dengan teorema citra kontinu dari himpunan kompak."
    },
    {
      "prompt": "KT-08. Pada ruang metrik, buktikan kedua arah: $f:X\\to Y$ kontinu di $a$ jika dan hanya jika setiap barisan $x_n\\to a$ memenuhi $f(x_n)\\to f(a)$.",
      "hint": "Untuk arah balik, negasikan epsilon–delta dan pilih titik pada radius $1/n$.",
      "answer": "Diketahui ruang metrik $(X,d)$ dan $(Y,\\rho)$, fungsi $f:X\\to Y$, serta $a\\in X$. Dibuktikan dua implikasi. ($\\Rightarrow$) Andaikan $f$ kontinu di $a$ dan $x_n\\to a$. Untuk $\\varepsilon>0$, kontinuitas memberi $\\delta>0$ sehingga $d(x,a)<\\delta$ mengakibatkan $\\rho(f(x),f(a))<\\varepsilon$. Konvergensi $x_n$ memberi $N$ sehingga $d(x_n,a)<\\delta$ untuk $n\\ge N$. Maka $\\rho(f(x_n),f(a))<\\varepsilon$ untuk $n\\ge N$, sehingga $f(x_n)\\to f(a)$. ($\\Leftarrow$) Andaikan setiap barisan yang menuju $a$ dipetakan ke barisan yang menuju $f(a)$, tetapi $f$ tidak kontinu di $a$. Negasi definisi kontinuitas menyatakan ada $\\varepsilon_0>0$ sehingga untuk setiap $\\delta>0$ terdapat $x\\in X$ dengan $d(x,a)<\\delta$ tetapi $\\rho(f(x),f(a))\\ge\\varepsilon_0$. Pilih $\\delta=1/n$ dan titik $x_n$ yang memenuhi dua syarat tersebut. Karena $d(x_n,a)<1/n$, diperoleh $x_n\\to a$, tetapi $\\rho(f(x_n),f(a))\\ge\\varepsilon_0$ untuk semua $n$, sehingga $f(x_n)$ tidak konvergen ke $f(a)$. Ini bertentangan dengan asumsi. Jadi $f$ kontinu di $a$. Dengan demikian, karakterisasi sekuensial terbukti dalam kedua arah. "
    }
  ],
  "mistakes": [],
  "connections": []
};
