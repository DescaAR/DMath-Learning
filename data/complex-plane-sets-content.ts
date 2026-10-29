import type { BookLessonContent } from "@/data/book-content-types";

/** Author-written complex-plane topology lesson. References: Zill–Shanahan (2003); Conway (1978). */
export const complexPlaneSetsContent: BookLessonContent = {
  "intro": [
    "Dalam bidang kompleks, jarak antara dua bilangan $z,w\\in\\mathbb C$ diukur oleh $|z-w|$. Karena $\\mathbb C$ dapat diidentifikasi dengan $\\mathbb R^2$, suatu lingkungan titik bukan sekadar interval pada garis, melainkan cakram dua dimensi. Keberadaan cakram kecil yang seluruhnya berada di dalam suatu himpunan merupakan inti definisi keterbukaan.",
    "Perhatikan perbedaan antara $D(0;2)=\\{z:|z|<2\\}$, cakram tertutup $\\{z:|z|\\le2\\}$, dan anulus $A=\\{z:1<|z|<2\\}$. Ketiganya terlihat serupa, tetapi titik batas dan lubang pada anulus menentukan sifat topologinya. Untuk membuktikan suatu himpunan terbuka, setiap titik harus memiliki radius lingkungan yang boleh bergantung pada titik itu.",
    "Keterhubungan dan keterhubungan lintasan tidak sama dengan keterhubungan sederhana. Anulus tetap dapat menghubungkan setiap dua titik dengan lintasan di dalamnya, tetapi lingkaran yang mengitari lubang tidak dapat dikerutkan menjadi titik tanpa meninggalkan anulus. Pernyataan tentang lubang perlu dibedakan dari pembuktian keterbukaan dan keterhubungan.",
    "Hasil-hasil berikut menggunakan ketaksamaan segitiga $|z+w|\\le |z|+|w|$, sifat kontinu fungsi modulus, dan teorema nilai antara untuk fungsi real. Referensi: Zill–Shanahan, A First Course in Complex Analysis with Applications (2003), Bab 1; Conway, Functions of One Complex Variable I, edisi ke-2 (1978), Bab I. Visualisasi hanya menguji konfigurasi tertentu; pembuktian formal tetap berlaku bagi semua titik yang memenuhi hipotesis."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Cakram Terbuka dan Lingkungan",
      "statement": "Untuk $z_0\\in\\mathbb C$ dan $r>0$, cakram terbuka berpusat di $z_0$ dengan jari-jari $r$ ialah $D(z_0;r)=\\{z\\in\\mathbb C:|z-z_0|<r\\}$. Suatu lingkungan dari $z_0$ adalah himpunan yang memuat suatu cakram $D(z_0;r)$ dengan $r>0$.",
      "explanation": "Pusat selalu termasuk dalam cakram terbuka; kelilingnya tidak. Radius lingkungan harus positif."
    },
    {
      "kind": "definition",
      "title": "Himpunan Terbuka",
      "statement": "Himpunan $U\\subseteq\\mathbb C$ disebut terbuka jika untuk setiap $z\\in U$ terdapat $\\varepsilon_z>0$ sehingga $D(z;\\varepsilon_z)\\subseteq U$. Himpunan kosong terbuka karena syarat tersebut benar secara vakum.",
      "explanation": "Jari-jari boleh berbeda pada setiap titik; satu radius seragam tidak diwajibkan."
    },
    {
      "kind": "definition",
      "title": "Himpunan Tertutup dan Batas",
      "statement": "Himpunan $F\\subseteq\\mathbb C$ tertutup jika $\\mathbb C\\setminus F$ terbuka. Untuk $E\\subseteq\\mathbb C$, titik $z$ berada pada batas $\\partial E$ jika setiap $D(z;r)$, $r>0$, bertemu $E$ dan $\\mathbb C\\setminus E$.",
      "explanation": "Terbuka dan tertutup bukan sifat yang saling meniadakan: himpunan kosong dan seluruh bidang memenuhi keduanya."
    },
    {
      "kind": "definition",
      "title": "Lintasan dan Keterhubungan Lintasan",
      "statement": "Lintasan dari $z_0$ ke $z_1$ di $E\\subseteq\\mathbb C$ adalah fungsi kontinu $\\gamma:[0,1]\\to E$ dengan $\\gamma(0)=z_0$ dan $\\gamma(1)=z_1$. Himpunan $E$ terhubung lintasan jika setiap dua titiknya dapat dihubungkan oleh lintasan di $E$.",
      "explanation": "Lintasan dapat terdiri atas beberapa ruas garis dan busur lingkaran yang disambung secara kontinu."
    },
    {
      "kind": "definition",
      "title": "Keterhubungan dan Domain",
      "statement": "Himpunan $E\\subseteq\\mathbb C$ terhubung jika tidak ada dua himpunan takkosong $A,B$ yang terbuka relatif terhadap $E$, saling lepas, dan memenuhi $E=A\\cup B$. Domain ialah himpunan terbuka dan terhubung yang takkosong.",
      "explanation": "Keterhubungan merupakan sifat topologis, sedangkan domain menambahkan syarat keterbukaan dan ketakkosongan."
    },
    {
      "kind": "definition",
      "title": "Domain Terhubung Sederhana",
      "statement": "Domain $U\\subseteq\\mathbb C$ disebut terhubung sederhana jika setiap lintasan tertutup $\\gamma:[0,1]\\to U$ dengan $\\gamma(0)=\\gamma(1)$ dapat dihomotopikan di $U$ menjadi lintasan konstan. Artinya, terdapat fungsi kontinu $H:[0,1]^2\\to U$ dengan $H(0,t)=\\gamma(t)$, $H(1,t)=p$ untuk suatu $p\\in U$, dan $H(s,0)=H(s,1)$ bagi setiap $s\\in[0,1]$.",
      "explanation": "Syarat ini lebih kuat daripada terhubung lintasan. Pada anulus, lingkaran yang mengitari lubang menjadi penghalang."
    },
    {
      "kind": "proposition",
      "title": "Setiap Cakram Terbuka Benar-benar Terbuka",
      "statement": "Untuk $a\\in\\mathbb C$ dan $R>0$, himpunan $D(a;R)$ terbuka.",
      "proof": [
        "Ambil sebarang $z\\in D(a;R)$. Karena $|z-a|<R$, bilangan $\\delta=R-|z-a|$ positif.",
        "Ambil $w\\in D(z;\\delta)$. Ketaksamaan segitiga memberi $|w-a|\\le |w-z|+|z-a|<\\delta+|z-a|=R$.",
        "Jadi $w\\in D(a;R)$, sehingga $D(z;\\delta)\\subseteq D(a;R)$. Radius $\\delta$ diperoleh untuk setiap $z$ yang dipilih. Pemilihan ini tidak bergantung pada titik $w$ melainkan hanya pada titik $z$ yang sedang diperiksa.",
        "Menurut definisi himpunan terbuka, $D(a;R)$ terbuka. $\\square$"
      ],
      "explanation": "Margin ke keliling, yaitu R−|z−a|, memberikan radius eksplisit."
    },
    {
      "kind": "theorem",
      "title": "Gabungan Sembarang Himpunan Terbuka",
      "statement": "Jika $\\{U_\\alpha\\}_{\\alpha\\in I}$ keluarga himpunan terbuka di $\\mathbb C$, maka $\\bigcup_{\\alpha\\in I}U_\\alpha$ terbuka, termasuk ketika $I$ kosong.",
      "proof": [
        "Ambil $z\\in\\bigcup_{\\alpha\\in I}U_\\alpha$. Berdasarkan definisi gabungan, terdapat indeks $\\alpha_0\\in I$ sehingga $z\\in U_{\\alpha_0}$.",
        "Karena $U_{\\alpha_0}$ terbuka, terdapat $r>0$ dengan $D(z;r)\\subseteq U_{\\alpha_0}$.",
        "Inklusi $U_{\\alpha_0}\\subseteq\\bigcup_{\\alpha\\in I}U_\\alpha$ memberi $D(z;r)\\subseteq\\bigcup_{\\alpha\\in I}U_\\alpha$.",
        "Jika $I=\\varnothing$, gabungannya kosong dan terbuka secara vakum. Jadi pernyataan berlaku untuk semua keluarga. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Irisan Hingga Himpunan Terbuka",
      "statement": "Untuk setiap bilangan bulat $n\\ge1$, jika $U_1,\\ldots,U_n$ terbuka, maka $\\bigcap_{j=1}^{n}U_j$ terbuka.",
      "proof": [
        "Ambil $z\\in\\bigcap_{j=1}^n U_j$. Untuk setiap $j$, karena $U_j$ terbuka, terdapat $r_j>0$ dengan $D(z;r_j)\\subseteq U_j$.",
        "Definisikan $r=\\min\\{r_1,\\ldots,r_n\\}$. Minimum dari himpunan hingga bilangan positif tetap positif.",
        "Jika $w\\in D(z;r)$, maka $|w-z|<r\\le r_j$ untuk setiap $j$. Akibatnya $w\\in U_j$ untuk seluruh $j$.",
        "Jadi $D(z;r)\\subseteq\\bigcap_{j=1}^n U_j$. Inilah syarat keterbukaan irisan tersebut. $\\square$"
      ],
      "explanation": "Irisan takhingga tidak harus terbuka; misalnya irisan semua cakram berpusat nol dengan radius 1/n adalah {0}."
    },
    {
      "kind": "proposition",
      "title": "Batas Cakram adalah Lingkaran",
      "statement": "Untuk $a\\in\\mathbb C$ dan $R>0$, batas $D(a;R)$ tepat $\\{z\\in\\mathbb C:|z-a|=R\\}$.",
      "proof": [
        "Jika $|z-a|=R$, setiap cakram $D(z;\\varepsilon)$ bertemu bagian dalam dan luar $D(a;R)$: pilih titik pada garis radial ke arah $a$ dan menjauhi $a$ dengan perpindahan kurang dari $\\min\\{\\varepsilon,R\\}/2$.",
        "Jika $|z-a|<R$, hasil keterbukaan cakram memberi radius $R-|z-a|>0$ yang seluruhnya di dalam cakram; maka $z$ bukan titik batas.",
        "Jika $|z-a|>R$, ambil radius $(|z-a|-R)/2>0$. Ketaksamaan segitiga terbalik memastikan semua $w$ dalam lingkungan itu memenuhi $|w-a|>R$; jadi $z$ bukan titik batas.",
        "Ketiga kasus mencakup semua titik di $\\mathbb C$. Dengan demikian batas cakram tepat lingkaran yang dinyatakan. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Cakram adalah Konveks dan Terhubung Lintasan",
      "statement": "Untuk $a\\in\\mathbb C$, $R>0$, dan $z,w\\in D(a;R)$, seluruh ruas $\\gamma(t)=(1-t)z+tw$, $0\\le t\\le1$, berada dalam $D(a;R)$.",
      "proof": [
        "Ambil sebarang $t\\in[0,1]$. Diperoleh $\\gamma(t)-a=(1-t)(z-a)+t(w-a)$.",
        "Ketaksamaan segitiga dan homogenitas modulus memberi $|\\gamma(t)-a|\\le(1-t)|z-a|+t|w-a|$.",
        "Karena $|z-a|<R$ dan $|w-a|<R$, ruas kanan lebih kecil dari $(1-t)R+tR=R$, termasuk pada titik ujung.",
        "Pemetaan $\\gamma$ kontinu, dengan $\\gamma(0)=z$ dan $\\gamma(1)=w$. Jadi cakram konveks dan terhubung lintasan. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Terhubung Lintasan Mengakibatkan Terhubung",
      "statement": "Jika $E\\subseteq\\mathbb C$ terhubung lintasan, maka $E$ terhubung.",
      "proof": [
        "Andaikan $E$ tidak terhubung. Maka terdapat himpunan $A,B$ takkosong, terbuka relatif terhadap $E$, saling lepas, dengan $E=A\\cup B$.",
        "Pilih $a\\in A$ dan $b\\in B$. Karena $E$ terhubung lintasan, ada lintasan kontinu $\\gamma:[0,1]\\to E$ dari $a$ ke $b$.",
        "Himpunan $P=\\gamma^{-1}(A)$ dan $Q=\\gamma^{-1}(B)$ terbuka relatif terhadap $[0,1]$, saling lepas, takkosong karena $0\\in P$ dan $1\\in Q$, dan memenuhi $[0,1]=P\\cup Q$.",
        "Ini bertentangan dengan keterhubungan interval $[0,1]$, yang mengikuti teorema nilai antara. Jadi pemisahan tersebut mustahil dan $E$ terhubung. $\\square$"
      ],
      "explanation": "Arah sebaliknya tidak berlaku untuk semua himpunan bidang, tetapi berlaku untuk domain terbuka di bidang Euclid."
    },
    {
      "kind": "proposition",
      "title": "Anulus adalah Domain",
      "statement": "Untuk $0<r<R$, anulus $A(r,R)=\\{z\\in\\mathbb C:r<|z|<R\\}$ terbuka dan terhubung lintasan; akibatnya merupakan domain.",
      "proof": [
        "Karena $z\\mapsto|z|$ kontinu, himpunan $\\{z:|z|>r\\}$ dan $\\{z:|z|<R\\}$ terbuka. Irisan keduanya adalah $A(r,R)$, sehingga anulus terbuka.",
        "Ambil $z=\\rho_1e^{i\\theta_1}$ dan $w=\\rho_2e^{i\\theta_2}$ di anulus. Pilih radius tetap $s=(r+R)/2$ yang memenuhi $r<s<R$.",
        "Hubungkan $z$ secara radial dengan $se^{i\\theta_1}$, lalu gunakan busur $se^{i((1-t)\\theta_1+t\\theta_2)}$ untuk mencapai $se^{i\\theta_2}$, kemudian hubungkan secara radial dengan $w$.",
        "Pada dua ruas radial, modulus merupakan kombinasi konveks dari dua bilangan dalam $(r,R)$; pada busur, modulus sama dengan $s$. Semua ruas kontinu dan dapat disambung menjadi satu lintasan di anulus.",
        "Jadi anulus terhubung lintasan, maka terhubung oleh teorema sebelumnya. Bersama keterbukaan dan ketakkosongan, anulus merupakan domain. $\\square$"
      ],
      "explanation": "Terhubungnya anulus tidak menghapus lubang; anulus bukan domain terhubung sederhana."
    },
    {
      "kind": "theorem",
      "title": "Kriteria Kontinuitas melalui Pra-Citra Terbuka",
      "statement": "Untuk fungsi $f:E\\to\\mathbb C$ pada $E\\subseteq\\mathbb C$ dengan topologi relatif, $f$ kontinu pada seluruh $E$ jika dan hanya jika $f^{-1}(V)$ terbuka relatif terhadap $E$ untuk setiap himpunan terbuka $V\\subseteq\\mathbb C$.",
      "proof": [
        "$(\\Rightarrow)$ Andaikan $f$ kontinu. Ambil himpunan terbuka $V$ dan $z\\in f^{-1}(V)$. Karena $f(z)\\in V$, ada $\\varepsilon>0$ sehingga $D(f(z);\\varepsilon)\\subseteq V$.",
        "Kontinuitas $f$ di $z$ memberikan $\\delta>0$ sehingga untuk semua $w\\in E$ dengan $|w-z|<\\delta$, berlaku $|f(w)-f(z)|<\\varepsilon$. Jadi $D(z;\\delta)\\cap E\\subseteq f^{-1}(V)$, sehingga pra-citra terbuka relatif.",
        "$(\\Leftarrow)$ Andaikan semua pra-citra himpunan terbuka bersifat terbuka relatif. Ambil $z\\in E$ dan $\\varepsilon>0$. Himpunan $V=D(f(z);\\varepsilon)$ terbuka, sehingga $f^{-1}(V)$ terbuka relatif dan memuat $z$.",
        "Maka ada $\\delta>0$ dengan $D(z;\\delta)\\cap E\\subseteq f^{-1}(V)$. Dengan demikian, jika $w\\in E$ dan $|w-z|<\\delta$, berlaku $|f(w)-f(z)|<\\varepsilon$.",
        "Ini adalah definisi kontinuitas di $z$. Karena $z$ sebarang, $f$ kontinu pada $E$. Kedua arah terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Definisi 1: Cakram dan Lingkungan",
      "forDefinition": "Cakram Terbuka dan Lingkungan",
      "problem": "Tentukan apakah $2+i$ berada di $D(1+i;2)$ dan berikan radius lingkungan yang menjamin cakram kecil di dalamnya.",
      "solution": [
        "Hitung jarak $|(2+i)-(1+i)|=|1|=1<2$, sehingga titik berada di dalam cakram.",
        "Margin ke batas adalah $2-1=1$. Jika $|w-(2+i)|<1$, maka $|w-(1+i)|<|w-(2+i)|+1<2$.",
        "Jadi $D(2+i;1)\\subseteq D(1+i;2)$; titik pada keliling jarak tepat dua tidak termasuk cakram."
      ]
    },
    {
      "title": "Contoh Definisi 2: Keterbukaan Anulus",
      "forDefinition": "Himpunan Terbuka",
      "problem": "Buktikan langsung bahwa $U=\\{z:1<|z|<3\\}$ terbuka di titik $z_0=2$.",
      "solution": [
        "Di $z_0=2$ jarak modulus ke dua lingkaran batas masing-masing $2-1=1$ dan $3-2=1$.",
        "Pilih $\\delta=\\frac12$. Jika $|w-2|<\\delta$, ketaksamaan segitiga terbalik memberi $|w|>2-\\frac12=\\frac32>1$.",
        "Ketaksamaan segitiga memberi $|w|<2+\\frac12=\\frac52<3$. Maka $D(2;\\frac12)\\subseteq U$. Untuk membuktikan seluruh $U$ terbuka, lakukan hal yang sama pada setiap titik dengan radius $\\min\\{|z|-1,3-|z|\\}/2$."
      ]
    },
    {
      "title": "Contoh Definisi 3: Titik Batas Cakram",
      "forDefinition": "Himpunan Tertutup dan Batas",
      "problem": "Tentukan apakah $z=1$ merupakan titik batas cakram terbuka $D(0;1)$ dan apakah cakram tertutup $F=\\{z:|z|\\le1\\}$ terbuka.",
      "solution": [
        "Setiap lingkungan $D(1;\\varepsilon)$ memuat titik $1-t$ untuk $0<t<\\min\\{\\varepsilon,1\\}$, yang berada di dalam cakram.",
        "Lingkungan yang sama memuat $1+t$ di luar cakram. Karena setiap lingkungan memotong kedua sisi, $1\\in\\partial D(0;1)$.",
        "Titik $1$ berada di $F$, tetapi setiap lingkungannya memuat $1+t\\notin F$. Jadi $F$ tidak terbuka. Komplemennya $\\{|z|>1\\}$ terbuka, sehingga $F$ tertutup."
      ]
    },
    {
      "title": "Contoh Definisi 4: Lintasan Menghindari Nol",
      "forDefinition": "Lintasan dan Keterhubungan Lintasan",
      "problem": "Bangun lintasan di $\\mathbb C\\setminus\\{0\\}$ dari $1$ ke $-1$ tanpa melewati titik asal.",
      "solution": [
        "Gunakan $\\gamma(t)=e^{i\\pi t}=\\cos(\\pi t)+i\\sin(\\pi t)$ untuk $0\\le t\\le1$.",
        "Pemetaan ini kontinu, dengan $\\gamma(0)=1$ dan $\\gamma(1)=-1$. Untuk setiap $t$, $|\\gamma(t)|=1$, sehingga $\\gamma(t)\\ne0$.",
        "Lintasan berbentuk setengah lingkaran satuan; garis lurus dari $1$ ke $-1$ tidak sah karena melewati nol. Satu contoh lintasan tidak sendiri membuktikan keterhubungan lintasan seluruh bidang berlubang."
      ]
    },
    {
      "title": "Contoh Definisi 5: Domain dan Pemisahan",
      "forDefinition": "Keterhubungan dan Domain",
      "problem": "Tentukan apakah $U=D(-2;1)\\cup D(2;1)$ merupakan domain.",
      "solution": [
        "Masing-masing cakram terbuka, sehingga gabungannya terbuka. Kedua cakram saling lepas karena jarak pusat $4$ lebih besar daripada jumlah jari-jari $2$.",
        "Kedua cakram takkosong dan terbuka relatif terhadap $U$; gabungannya $U$, sehingga memberikan pemisahan $U$.",
        "Akibatnya $U$ tidak terhubung dan bukan domain, walaupun merupakan himpunan terbuka."
      ]
    },
    {
      "title": "Contoh Definisi 6: Anulus dan Lubang",
      "forDefinition": "Domain Terhubung Sederhana",
      "problem": "Bandingkan cakram $D(0;2)$ dengan anulus $A=\\{z:1<|z|<2\\}$ terhadap keterhubungan sederhana.",
      "solution": [
        "Cakram konveks: setiap lintasan tertutup $\\gamma$ dapat dikerutkan menuju $0$ melalui $H(s,t)=(1-s)\\gamma(t)$. Kombinasi konveks tetap di cakram, sehingga cakram terhubung sederhana.",
        "Pada anulus, lingkaran $\\gamma(t)=\\frac32e^{2\\pi it}$ mempunyai bilangan lilitan $1$ terhadap $0$. Bilangan lilitan tetap di bawah homotopi lintasan tertutup yang menghindari $0$ (teorema invariansi bilangan lilitan).",
        "Lintasan konstan mempunyai bilangan lilitan $0$. Karena $1\\ne0$, lingkaran itu tidak dapat dikerutkan di anulus. Jadi anulus domain, tetapi bukan terhubung sederhana."
      ]
    },
    {
      "title": "Lingkungan untuk Titik Kompleks Takreal",
      "problem": "Pada $U=\\{z:|z-(1+i)|<3\\}$, tentukan radius lingkungan di sekitar $z=3+i$ dan periksa titik $w=\\frac72+i$.",
      "solution": [
        "Jarak pusat $|z-(1+i)|=2$; margin ke batas $3-2=1$.",
        "Pilih radius $\\delta=1$ atau lebih kecil. Titik $w=\\frac72+i$ berjarak $\\frac12$ dari $z$, sehingga berada dalam $D(z;1)$.",
        "Ketaksamaan segitiga memastikan $|w-(1+i)|<3$; secara langsung nilainya $\\frac52<3$."
      ]
    },
    {
      "title": "Pra-Citra Cakram oleh Fungsi Kompleks",
      "problem": "Untuk $f(z)=z^2$, jelaskan mengapa $f^{-1}(D(0;4))$ terbuka dan tentukan himpunannya.",
      "solution": [
        "Syarat $f(z)\\in D(0;4)$ berarti $|z^2|<4$. Multiplikativitas modulus memberi $|z|^2<4$.",
        "Karena $|z|\\ge0$, ketaksamaan ekuivalen dengan $|z|<2$, sehingga pra-citra adalah $D(0;2)$.",
        "Himpunan tersebut terbuka. Secara umum, karena fungsi polinomial kontinu, pra-citra setiap himpunan terbuka juga terbuka."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "Diberikan $U=\\{z\\in\\mathbb C:|z-(2-i)|<5\\}$ dan $z_0=5+3i$. Periksa apakah $z_0\\in U$. Jika berada di dalam, tentukan radius lingkungan yang menjamin keterbukaan; jika tidak, jelaskan tepatnya posisi titik.",
      "hint": "Hitung modulus selisih pusat dan bandingkan secara ketat dengan lima.",
      "answer": "Hitung $z_0-(2-i)=3+4i$, sehingga $|z_0-(2-i)|=\\sqrt{3^2+4^2}=5$. Syarat keanggotaan ialah jarak ketat kurang dari $5$, sedangkan titik ini berjarak tepat $5$. Jadi $z_0\\notin U$ dan berada pada batas $\\partial U$. Setiap lingkungan titik ini memotong bagian dalam dan luar cakram, sehingga tidak mungkin ada radius positif dengan $D(z_0;r)\\subseteq U$."
    },
    {
      "prompt": "Buktikan bahwa $E=\\{z\\in\\mathbb C:\\operatorname{Re}z>0,\\ \\operatorname{Im}z>0\\}$ terbuka. Untuk $z=x+iy\\in E$, berikan satu radius eksplisit yang sah dan jelaskan mengapa kedua koordinat tetap positif.",
      "hint": "Gunakan fakta |Re(w-z)| dan |Im(w-z)| tidak melebihi |w-z|.",
      "answer": "Ambil $z=x+iy$ dengan $x,y>0$, lalu pilih $\\delta=\\frac12\\min\\{x,y\\}>0$. Untuk setiap $w=u+iv$ dengan $|w-z|<\\delta$, berlaku $|u-x|\\le|w-z|<\\delta$ dan $|v-y|\\le|w-z|<\\delta$. Karena itu $u>x-\\delta\\ge x/2>0$ dan $v>y-\\delta\\ge y/2>0$. Jadi $D(z;\\delta)\\subseteq E$. Karena $z$ sebarang, $E$ terbuka. Radius yang dipilih bergantung pada koordinat titik $z$, sesuai dengan urutan kuantor dalam definisi keterbukaan; tidak diperlukan radius seragam bagi seluruh kuadran."
    },
    {
      "prompt": "Perlihatkan bahwa irisan takhingga himpunan terbuka tidak harus terbuka dengan $U_n=D(0;1/n)$ untuk $n\\in\\mathbb N$ positif. Tentukan irisannya dan uji keterbukaannya menggunakan definisi lingkungan.",
      "hint": "Gunakan sifat Archimedean untuk setiap z taknol.",
      "answer": "Titik $0$ berada di setiap $U_n$. Jika $z\\ne0$, sifat Archimedean menghasilkan $n>1/|z|$, sehingga $1/n<|z|$ dan $z\\notin U_n$. Maka $\\bigcap_{n=1}^{\\infty}U_n=\\{0\\}$. Himpunan singleton itu tidak terbuka: untuk setiap $\\delta>0$, titik $\\delta/2$ berada di $D(0;\\delta)$ tetapi tidak berada di $\\{0\\}$. Jadi syarat irisan hingga dalam teorema tidak dapat dibuang."
    },
    {
      "prompt": "Tentukan batas $E=\\{z:2<|z|<5\\}$ dan buktikan bahwa kedua lingkaran batas benar-benar termasuk $\\partial E$, sedangkan titik yang modulusnya bukan 2 atau 5 tidak berada di batas.",
      "hint": "Pisahkan tiga kasus modulus di bawah 2, antara 2 dan 5, serta di atas 5.",
      "answer": "Batasnya adalah $\\partial E=\\{z:|z|=2\\}\\cup\\{z:|z|=5\\}$. Pada setiap titik $z$ dengan modulus $2$ atau $5$, geser sedikit sepanjang arah radial ke dalam anulus dan ke komplemennya; kedua titik dapat dipilih sedekat apa pun ke $z$. Jika $2<|z|<5$, pilih $\\delta=\\frac12\\min\\{|z|-2,5-|z|\\}$; lingkungannya seluruhnya di $E$. Jika $|z|<2$, pilih $\\delta=(2-|z|)/2$; jika $|z|>5$, pilih $\\delta=(|z|-5)/2$; kedua lingkungan seluruhnya di komplemen. Tidak ada titik lain pada batas."
    },
    {
      "prompt": "Buktikan bahwa himpunan $F=\\{z:|z-a|\\le R\\}$ untuk $R>0$ tertutup tetapi tidak terbuka. Nyatakan peran titik pada lingkaran $|z-a|=R$ secara eksplisit.",
      "hint": "Periksa komplemen dan lingkungan titik a+R.",
      "answer": "Komplemen $F$ ialah $\\{z:|z-a|>R\\}$. Ambil $w$ dalam komplemen dan pilih $\\delta=(|w-a|-R)/2>0$. Jika $|z-w|<\\delta$, maka $|z-a|\\ge|w-a|-|z-w|>R$, sehingga komplemen terbuka dan $F$ tertutup. Untuk membuktikan $F$ tidak terbuka, pilih $w=a+R\\in F$. Setiap $D(w;\\varepsilon)$ memuat $w+t$ untuk $0<t<\\varepsilon$ yang berada di luar $F$ karena $|w+t-a|=R+t>R$. Jadi tidak ada lingkungan titik batas itu yang termuat dalam $F$."
    },
    {
      "prompt": "Buktikan bahwa $U=\\{z:1<|z|<4\\}$ terhubung lintasan dengan membangun lintasan eksplisit dari $z=2$ ke $w=-3$. Jelaskan mengapa ruas garis langsung gagal dan bagaimana sambungan lintasan diperoleh.",
      "hint": "Gunakan dua ruas radial dan satu busur berjari-jari 2,5.",
      "answer": "Ruas garis dari $2$ ke $-3$ melewati $0$, sehingga bukan lintasan di $U$. Pilih $s=5/2$. Pada bagian pertama gerakkan $2$ ke $s$ sepanjang sumbu real positif; modulusnya di $[2,5/2]\\subset(1,4)$. Pada bagian kedua gunakan busur $se^{i\\pi t}$, $0\\le t\\le1$, yang menghubungkan $s$ ke $-s$ dengan modulus tetap $s$. Pada bagian ketiga gerakkan $-s$ ke $-3$ secara radial; modulusnya di $[5/2,3]\\subset(1,4)$. Parameterisasi ulang ketiga bagian ke interval $[0,1/3]$, $[1/3,2/3]$, dan $[2/3,1]$ menghasilkan lintasan kontinu di $U$. Konstruksi yang sama berlaku bagi dua titik sembarang dengan menyesuaikan sudut dan radius."
    },
    {
      "prompt": "Periksa apakah $D(-2;1)\\cup D(2;1)$ terbuka, terhubung, dan merupakan domain. Berikan pemisahan topologis yang sah; jangan hanya mengandalkan gambar dua cakram yang tampak terpisah.",
      "hint": "Dua cakram terbuka takkosong dan saling lepas.",
      "answer": "Tuliskan $A=D(-2;1)$ dan $B=D(2;1)$. Keduanya terbuka, maka $A\\cup B$ terbuka. Jika $z\\in A\\cap B$, ketaksamaan segitiga akan memberi $4=|2-(-2)|\\le|2-z|+|z+2|<1+1=2$, kontradiksi. Jadi $A\\cap B=\\varnothing$. Kedua himpunan takkosong, terbuka relatif terhadap $A\\cup B$, dan gabungannya seluruh $A\\cup B$; maka mereka merupakan pemisahan. Dengan demikian gabungannya tidak terhubung dan bukan domain."
    },
    {
      "prompt": "Untuk fungsi $f(z)=z^2+1$ dan cakram terbuka $V=D(1;9)$, tentukan $f^{-1}(V)$ secara eksplisit. Jelaskan keterbukaannya dengan dua cara, yakni melalui modulus dan melalui teorema pra-citra.",
      "hint": "Gunakan |z²+1−1|=|z|².",
      "answer": "Syarat $f(z)\\in V$ ekuivalen dengan $|z^2+1-1|=|z^2|=|z|^2<9$, yakni $|z|<3$. Maka $f^{-1}(V)=D(0;3)$. Cara pertama: cakram ini terbuka berdasarkan proposisi keterbukaan cakram. Cara kedua: $f$ polinomial kompleks sehingga kontinu, dan $V$ terbuka; teorema pra-citra terbuka menjamin $f^{-1}(V)$ terbuka. Kedua penalaran konsisten dan tidak memerlukan asumsi $z$ real."
    }
  ],
  "mistakes": [],
  "connections": []
};
