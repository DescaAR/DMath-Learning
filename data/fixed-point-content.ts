import type { BookLessonContent } from "@/data/book-content-types";

/** Authored fixed-point analysis: Burden–Faires (2011), Süli–Mayers (2003). */
export const fixedPointContent:BookLessonContent = {
  "intro": [
    "Untuk menyelesaikan $f(x)=0$, sering dipilih fungsi $g$ sehingga akar yang dicari memenuhi $x=g(x)$, kemudian dihitung $p_{n+1}=g(p_n)$. Bentuk aljabar yang ekuivalen tidak otomatis menghasilkan algoritma konvergen. Pemilihan fungsi iterasi menentukan apakah jarak ke akar menyusut, membesar, atau berosilasi.",
    "Dua syarat yang perlu dibedakan ialah $g(I)\\subseteq I$ dan $|g(x)-g(y)|\\le L|x-y|$ untuk setiap $x,y\\in I$ dengan $0\\le L<1$. Syarat pertama mempertahankan seluruh iterasi di dalam interval; syarat kedua menghasilkan barisan Cauchy. Ketertutupan interval menjamin limitnya tetap berada di dalam domain.",
    "Pembuktian lengkap diberikan untuk eksistensi dan ketunggalan titik tetap, batas galat a priori, batas galat a posteriori, serta hubungan residual dengan galat. Contoh tandingan menunjukkan bahwa $L=1$ dan residual kecil tidak cukup untuk menjamin perilaku yang diharapkan.",
    "Rujukan: R. L. Burden dan J. D. Faires, Numerical Analysis, edisi ke-9 (2011), bagian fixed-point iteration; E. Süli dan D. F. Mayers, An Introduction to Numerical Analysis (2003), bagian iterative methods."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Titik Tetap",
      "statement": "Untuk $g:I\\to I$, titik $p\\in I$ disebut titik tetap jika $g(p)=p$.",
      "explanation": "Titik tetap merupakan solusi persamaan, bukan nama lain untuk barisan iterasi."
    },
    {
      "kind": "definition",
      "title": "Iterasi Titik Tetap",
      "statement": "Diberikan $p_0\\in I$ dan $g:I\\to I$. Barisan iterasi didefinisikan oleh $p_{n+1}=g(p_n)$ untuk setiap $n\\ge0$.",
      "explanation": "Keberadaan titik tetap tidak dengan sendirinya menjamin konvergensi dari setiap titik awal."
    },
    {
      "kind": "definition",
      "title": "Pemetaan Kontraksi",
      "statement": "Pemetaan $g:I\\to I$ disebut kontraksi jika terdapat $L\\in[0,1)$ sehingga $|g(x)-g(y)|\\le L|x-y|$ untuk setiap $x,y\\in I$.",
      "explanation": "Konstanta kontraksi dapat berupa batas atas yang sah, tidak harus konstanta Lipschitz terkecil."
    },
    {
      "kind": "definition",
      "title": "Residual Titik Tetap",
      "statement": "Residual pada $x\\in I$ adalah $r_g(x)=x-g(x)$. Jika $p$ titik tetap, galat solusi pada $x$ ialah $|x-p|$.",
      "explanation": "Residual dapat dihitung tanpa mengetahui p, sedangkan galat solusi tidak."
    },
    {
      "kind": "lemma",
      "title": "Kriteria Turunan Kontraksi",
      "statement": "Misalkan $I=[a,b]$, $a<b$, $g:I\\to I$ kontinu pada $I$ dan terdiferensial pada $(a,b)$. Jika $|g'(x)|\\le L<1$ untuk setiap $x\\in(a,b)$, maka $g$ kontraksi dengan konstanta $L$.",
      "proof": [
        "Ambil sebarang $x,y\\in I$ dengan $x\\ne y$. Fungsi $g$ memenuhi hipotesis Teorema Nilai Rata-rata pada interval dengan ujung $x$ dan $y$.",
        "Terdapat $c$ di antara keduanya sehingga $g(x)-g(y)=g'(c)(x-y)$. Oleh karena itu $|g(x)-g(y)|=|g'(c)|\\,|x-y|\\le L|x-y|$.",
        "Untuk $x=y$ ketaksamaan juga benar. Syarat $g(I)\\subseteq I$ dan $L<1$ sudah tersedia, sehingga definisi kontraksi terpenuhi. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Prinsip Kontraksi pada Interval Tertutup",
      "statement": "Misalkan $I=[a,b]$ tidak kosong dan $g:I\\to I$ kontraksi dengan konstanta $L\\in[0,1)$. Untuk setiap $p_0\\in I$, iterasi $p_{n+1}=g(p_n)$ konvergen ke satu-satunya titik tetap $p\\in I$.",
      "proof": [
        "Karena $g(I)\\subseteq I$, seluruh $p_n$ terdefinisi di dalam $I$. Sifat kontraksi memberi $|p_{n+1}-p_n|\\le L|p_n-p_{n-1}|$, sehingga induksi menghasilkan $|p_{n+1}-p_n|\\le L^n|p_1-p_0|$.",
        "Untuk $m>n$, ketaksamaan segitiga memberikan $|p_m-p_n|\\le\\sum_{k=n}^{m-1}|p_{k+1}-p_k|\\le |p_1-p_0|L^n/(1-L)$. Ruas terakhir menuju nol untuk $n\\to\\infty$, seragam terhadap $m>n$. Dengan demikian $(p_n)$ Cauchy.",
        "Kelengkapan $\\mathbb R$ memberi limit $p$; ketertutupan $I$ menjamin $p\\in I$. Kontraksi bersifat Lipschitz dan karenanya kontinu, sehingga $p=\\lim p_{n+1}=\\lim g(p_n)=g(p)$.",
        "Jika $q$ titik tetap lain, maka $|p-q|=|g(p)-g(q)|\\le L|p-q|$. Karena $1-L>0$, haruslah $p=q$. Eksistensi, konvergensi, dan ketunggalan terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat A Priori",
      "statement": "Dengan hipotesis Prinsip Kontraksi, untuk $n\\ge0$ berlaku $|p-p_n|\\le L^n|p_1-p_0|/(1-L)$.",
      "proof": [
        "Dari pembuktian Prinsip Kontraksi, untuk setiap $m>n$ diperoleh $|p_m-p_n|\\le |p_1-p_0|\\sum_{k=n}^{m-1}L^k$.",
        "Jumlah geometri bernilai $L^n(1-L^{m-n})/(1-L)$ apabila $0<L<1$; untuk $L=0$ semua iterasi setelah langkah pertama sudah tetap.",
        "Ambil limit $m\\to\\infty$. Karena $p_m\\to p$, diperoleh $|p-p_n|\\le L^n|p_1-p_0|/(1-L)$, dengan konvensi $0^0=1$ untuk $n=0$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat A Posteriori",
      "statement": "Dengan hipotesis yang sama, untuk $n\\ge1$ berlaku $|p-p_n|\\le L|p_n-p_{n-1}|/(1-L)$.",
      "proof": [
        "Identitas $p=g(p)$ dan $p_n=g(p_{n-1})$ memberikan $|p-p_n|\\le L|p-p_{n-1}|$.",
        "Ketaksamaan segitiga memberi $|p-p_{n-1}|\\le |p-p_n|+|p_n-p_{n-1}|$. Gabungkan kedua ketaksamaan untuk memperoleh $(1-L)|p-p_n|\\le L|p_n-p_{n-1}|$.",
        "Pembagian oleh $1-L>0$ menghasilkan batas yang dapat dihitung dari dua iterasi terakhir tanpa mengetahui nilai titik tetap. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat dari Residual",
      "statement": "Jika $g:I\\to I$ kontraksi berkonstanta $L<1$ dengan titik tetap $p$, maka $|x-p|\\le |x-g(x)|/(1-L)$ untuk setiap $x\\in I$.",
      "proof": [
        "Karena $g(p)=p$, tulis $x-p=(x-g(x))+(g(x)-g(p))$.",
        "Ketaksamaan segitiga dan sifat kontraksi menghasilkan $|x-p|\\le |x-g(x)|+L|x-p|$.",
        "Pindahkan suku terakhir ke ruas kiri dan bagi dengan $1-L>0$. Faktor $1/(1-L)$ memperlihatkan mengapa residual kecil tidak selalu berarti galat kecil.",
        "Batas ini dapat tepat: untuk $g(x)=0.99x+0.01$ pada $[0,2]$, titik tetap $p=1$ dan pada $x=0$ diperoleh $|x-p|=1=|x-g(x)|/(1-0.99)$. Dengan demikian faktor kontraksi tidak dapat diabaikan. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Kesetaraan Akar dan Titik Tetap",
      "statement": "Untuk $f:I\\to\\mathbb R$, $\\lambda\\ne0$, dan $g(x)=x-\\lambda f(x)$, berlaku $f(p)=0\\iff g(p)=p$ untuk setiap $p\\in I$. Kesetaraan ini tidak menjamin $g(I)\\subseteq I$ ataupun kontraksi.",
      "proof": [
        "($\\Rightarrow$) Jika $f(p)=0$, maka $g(p)=p-\\lambda\\cdot0=p$.",
        "($\\Leftarrow$) Jika $g(p)=p$, persamaan $p-\\lambda f(p)=p$ memberikan $\\lambda f(p)=0$. Karena $\\lambda\\ne0$, diperoleh $f(p)=0$.",
        "Kedua arah telah dibuktikan. Konvergensi iterasi memerlukan hipotesis tambahan dari Prinsip Kontraksi. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Titik Tetap Repulsif",
      "statement": "Jika $g$ memiliki turunan kontinu pada persekitaran titik tetap $p$ dan $|g'(p)|>1$, terdapat $\\delta>0$ dan $q>1$ sehingga $0<|x-p|<\\delta$ mengakibatkan $|g(x)-p|\\ge q|x-p|$. Orbit yang tidak pernah tepat mencapai $p$ tidak dapat konvergen ke $p$.",
      "proof": [
        "Pilih $q$ dengan $1<q<|g'(p)|$. Kontinuitas turunan menjamin suatu $\\delta>0$ dengan $|g'(t)|\\ge q$ jika $|t-p|<\\delta$.",
        "Untuk $x$ dalam persekitaran tersebut, Teorema Nilai Rata-rata memberikan $g(x)-g(p)=g'(c)(x-p)$ dengan $c$ di antara $x$ dan $p$. Karena $g(p)=p$, didapat $|g(x)-p|\\ge q|x-p|$.",
        "Andaikan orbit dengan $p_n\\ne p$ untuk semua $n$ konvergen ke $p$. Setelah indeks tertentu, jarak positif $|p_n-p|$ justru dikalikan sekurang-kurangnya $q>1$ pada tiap langkah, bertentangan dengan konvergensi ke nol. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Mencari titik tetap",
      "problem": "Cari titik tetap $g(x)=(x+2)/3$ pada $[0,2]$.",
      "solution": [
        "Persamaan $p=(p+2)/3$ setara dengan $3p=p+2$, sehingga $p=1$.",
        "Verifikasi langsung $g(1)=1$ dan $1\\in[0,2]$. Persamaan linear hanya memiliki satu solusi."
      ],
      "forDefinition": "Titik Tetap"
    },
    {
      "title": "Menghitung iterasi secara eksak",
      "problem": "Hitung $p_1,p_2,p_3$ untuk $g(x)=(x+2)/3$, $p_0=0$.",
      "solution": [
        "Dari rekursi diperoleh $p_1=2/3$, $p_2=(2/3+2)/3=8/9$, dan $p_3=(8/9+2)/3=26/27$.",
        "Terhadap titik tetap $p=1$, galat berturut-turut $1/3,1/9,1/27$; setiap langkah mengurangi galat tepat menjadi sepertiga."
      ],
      "forDefinition": "Iterasi Titik Tetap"
    },
    {
      "title": "Membuktikan kontraksi",
      "problem": "Periksa $g(x)=(x+2)/3$ pada $[0,2]$.",
      "solution": [
        "Citra interval ialah $[2/3,4/3]\\subseteq[0,2]$. Untuk setiap $x,y$ berlaku $|g(x)-g(y)|=|x-y|/3$.",
        "Konstanta $L=1/3<1$ sah. Prinsip Kontraksi menjamin seluruh iterasi dari interval konvergen ke $1$."
      ],
      "forDefinition": "Pemetaan Kontraksi"
    },
    {
      "title": "Residual versus galat",
      "problem": "Bandingkan residual dan galat pada $x=0$ untuk $g(x)=0.99x+0.01$ di $[0,2]$.",
      "solution": [
        "Pemetaan memiliki $L=0.99$ dan titik tetap $p=1$. Citra interval $[0.01,1.99]$ tetap berada dalam $[0,2]$.",
        "Residual di $0$ adalah $|0-g(0)|=0.01$, sedangkan galat sebenarnya $|0-1|=1$. Batas residual $0.01/(1-0.99)=1$ tepat."
      ],
      "forDefinition": "Residual Titik Tetap"
    },
    {
      "title": "Kontraksi kosinus",
      "problem": "Buktikan bahwa $p_{n+1}=\\cos p_n$ konvergen dari setiap $p_0\\in[0,1]$.",
      "solution": [
        "Karena $\\cos1\\le\\cos x\\le1$ untuk $0\\le x\\le1$, fungsi memetakan interval ke dirinya sendiri.",
        "Turunan $-\\sin x$ memenuhi $|g'(x)|\\le\\sin1<1$. Prinsip Kontraksi memberikan titik tetap tunggal. Dari $p_0=0$ diperoleh $p_1=1$, $p_2\\approx0.5403023$, dan $p_3\\approx0.8575532$.",
        "Iterasi tidak harus monoton untuk konvergen; titik tetapnya sekitar $0.7390851$."
      ]
    },
    {
      "title": "Akar kuadrat dengan syarat lengkap",
      "problem": "Analisis $g(x)=(x+2/x)/2$ pada $[1,2]$ dari $p_0=1$.",
      "solution": [
        "Turunan $g'(x)=1/2-1/x^2$ memenuhi $|g'(x)|\\le1/2$. Nilai minimum $g(\\sqrt2)=\\sqrt2$ dan maksimum $g(1)=g(2)=3/2$ memastikan $g([1,2])\\subseteq[1,2]$.",
        "Titik tetap memenuhi $p^2=2$; hanya $\\sqrt2$ berada dalam interval. Iterasi $p_1=3/2$ dan $p_2=17/12$; konvergensi dijamin oleh teorema, bukan dua angka tersebut."
      ]
    },
    {
      "title": "Kontraksi ketat diperlukan",
      "problem": "Periksa $g(x)=1-x$ pada $[0,1]$ dari $p_0=0$.",
      "solution": [
        "Titik tetap tunggal adalah $1/2$, tetapi $|g(x)-g(y)|=|x-y|$ sehingga konstanta terbaik $L=1$.",
        "Orbitnya $0,1,0,1,\\ldots$; dua subsekuens memiliki limit berbeda. Pemetaan ke dalam interval saja tidak cukup."
      ]
    },
    {
      "title": "Persamaan sama, algoritma berbeda",
      "problem": "Bandingkan $g_1(x)=(x+2)/3$ dan $g_2(x)=2-x$ pada $[0,2]$.",
      "solution": [
        "Kedua persamaan $g_i(p)=p$ memberikan $p=1$. Untuk $g_1$, $L=1/3$ sehingga iterasi dari $0$ menuju $1$.",
        "Untuk $g_2$, $L=1$ dan iterasi dari $0$ menghasilkan $0,2,0,2,\\ldots$. Kesamaan akar tidak menjamin kesamaan perilaku iterasi."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "FP-01. Untuk $g(x)=(x+2)/3$ dan $p_0=0$, tentukan $p_4$ dan galat terhadap titik tetap.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Diketahui $p_{n+1}=(p_n+2)/3$ dan $p_0=0$. Titik tetap memenuhi $3p=p+2$, sehingga $p=1$. Iterasi berurutan ialah $p_1=2/3$, $p_2=8/9$, $p_3=26/27$, dan $p_4=80/81$. Galat eksak $|p-p_4|=1/81$. Verifikasi residual: $g(80/81)=242/243$, sehingga $|p_4-g(p_4)|=2/243$. Dengan $L=1/3$, batas residual adalah $(2/243)/(2/3)=1/81$, tepat sama dengan galat yang dihitung. Secara umum, identitas $p_n=1-3^{-n}$ terbukti dengan induksi: benar pada $n=0$, dan $g(1-3^{-n})=1-3^{-(n+1)}$. Rumus ini memastikan nilai $p_4$ bukan hasil pembulatan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-02. Buktikan $g(x)=(x+3)/4$ kontraksi pada $[0,2]$ dan hitung batas galat a priori setelah tiga iterasi dari $p_0=2$.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Untuk $x\\in[0,2]$, $g(x)\\in[3/4,5/4]\\subseteq[0,2]$. Selain itu $|g(x)-g(y)|=|x-y|/4$, sehingga $L=1/4<1$. Titik tetap $4p=p+3$ memberi $p=1$. Iterasi dari $2$ adalah $p_1=5/4$, $p_2=17/16$, dan $p_3=65/64$. Batas a priori menghasilkan $|p-p_3|\\le(1/4)^3|5/4-2|/(1-1/4)=1/64$. Pemeriksaan langsung $|1-65/64|=1/64$ menunjukkan batas tersebut tercapai. Selain batas a priori, batas a posteriori pada $n=3$ memberi $|p-p_3|\\le(1/4)/(3/4)\\,|65/64-17/16|=(1/3)(3/64)=1/64$. Kedua estimator galat konsisten dengan hasil eksak.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-03. Pada $g(x)=0.99x+0.01$ di $[0,2]$, bandingkan residual dan galat di $x=0$.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Pemetaan mengirim $[0,2]$ ke $[0.01,1.99]$ dan memiliki $L=0.99$. Titik tetap memenuhi $p=0.99p+0.01$, sehingga $p=1$. Residual di $x=0$ adalah $|0-0.01|=0.01$, tetapi galat sesungguhnya $|0-1|=1$. Batas residual memberi $|x-p|\\le0.01/(1-0.99)=1$, sama dengan galat aktual. Perhitungan ini menunjukkan bahwa residual kecil tanpa informasi kontraksi tidak cukup untuk menyatakan galat kecil. Setelah satu langkah, $x_1=g(0)=0.01$, residual berikutnya $|x_1-g(x_1)|=0.0099$, sedangkan galat ke titik tetap masih $|0.01-1|=0.99$. Faktor rasio residual terhadap galat tetap $0.01$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-04. Buktikan $g(x)=1-x$ pada $[0,1]$ memiliki titik tetap tunggal tetapi iterasi dari $0$ tidak konvergen.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Persamaan $p=1-p$ memberikan satu-satunya titik tetap $p=1/2$. Pemetaan mengirim $[0,1]$ ke dirinya sendiri, tetapi $|g(x)-g(y)|=|x-y|$, sehingga $L=1$ dan hipotesis kontraksi ketat gagal. Dari $p_0=0$ diperoleh $p_1=1$, $p_2=0$, $p_3=1$. Induksi memberi $p_{2k}=0$ dan $p_{2k+1}=1$ untuk semua $k\\ge0$. Kedua subsekuens memiliki limit berbeda; karena itu barisan tidak konvergen meskipun titik tetapnya unik. Jika titik awal justru $p_0=1/2$, barisan konstan $p_n=1/2$. Ini tidak bertentangan dengan contoh tandingan: yang gagal adalah jaminan konvergensi dari setiap titik awal, bukan keberadaan orbit konstan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-05. Buktikan $g(x)=\\cos x$ kontraksi pada $[0,1]$ dan hitung tiga iterasi dari $p_0=0$.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Pada $[0,1]$ berlaku $\\cos1\\le\\cos x\\le1$ dan $\\cos1>0$, sehingga $g(I)\\subseteq I$. Turunan $g'(x)=-\\sin x$ memenuhi $|g'(x)|\\le\\sin1<1$. Teorema Nilai Rata-rata memberikan konstanta kontraksi $L=\\sin1$. Iterasi adalah $p_1=\\cos0=1$, $p_2=\\cos1\\approx0.5403023059$, dan $p_3=\\cos(\\cos1)\\approx0.8575532158$. Prinsip Kontraksi membuktikan konvergensi ke solusi tunggal $p=\\cos p$ pada interval, walaupun iterasi awal tidak monoton. Langkah berikutnya ialah $p_4=\\cos(p_3)\\approx0.6542897905$. Residual pada $p_3$ sama dengan $|p_3-p_4|\\approx0.2032634$; residual belum nol, tetapi batas kontraksi memastikan galat akhirnya menyusut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-06. Untuk $f(x)=x^2-2$, gunakan $g(x)=x-\\frac13 f(x)$ pada $[1,2]$ dan hitung $p_1,p_2$ dari $p_0=1$.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Diketahui $g(x)=x-(x^2-2)/3$ dan $g'(x)=1-2x/3$. Pada $[1,2]$ berlaku $|g'(x)|\\le1/3$. Nilai minimum $g(1)=g(2)=4/3$ dan maksimum $g(3/2)=17/12$ menunjukkan $g([1,2])=[4/3,17/12]\\subseteq[1,2]$. Prinsip Kontraksi menjamin konvergensi. Persamaan $g(p)=p$ setara dengan $p^2-2=0$, sehingga titik tetap tunggal pada interval adalah $\\sqrt2$. Dari $p_0=1$ diperoleh $p_1=4/3$ dan $p_2=4/3-((16/9)-2)/3=38/27$. Kedua iterasi berada dalam interval dan sesuai dengan arah menuju $\\sqrt2$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-07. Untuk $g(x)=x^2$, bandingkan perilaku iterasi dekat titik tetap $0$ dan $1$.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Titik tetap memenuhi $p^2=p$, sehingga $p\\in\\{0,1\\}$. Karena $g'(1)=2>1$, proposisi titik tetap repulsif berlaku di sekitar $1$. Dari rekursi $x_{n+1}=x_n^2$ diperoleh dengan induksi $x_n=x_0^{2^n}$. Untuk $0<x_0<1$, karena $2^n\\to\\infty$, berlaku $x_n\\to0$; titik tetap $0$ menarik orbit tersebut. Untuk $x_0>1$, barisan meningkat menjauhi $1$. Kedua titik tetap memiliki sifat stabilitas berbeda walaupun berasal dari persamaan yang sama. Sebagai pemeriksaan eksplisit, jika $x_0=1/2$, maka $x_1=1/4$, $x_2=1/16$, dan $x_3=1/256$. Deret nilai ini sesuai dengan rumus $x_n=(1/2)^{2^n}$ dan mendekati nol lebih cepat daripada penurunan geometri biasa.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-08. Untuk $g(x)=(x+2)/3$ dan $p_0=0$, cari $n$ terkecil yang menjamin galat kurang dari $10^{-3}$ menggunakan batas a priori.",
      "hint": "Periksa hipotesis, hitung secara eksak, dan verifikasi hasil.",
      "answer": "Konstanta kontraksi $L=1/3$, titik tetap $p=1$, dan $|p_1-p_0|=2/3$. Batas a priori memberi $|p-p_n|\\le(1/3)^n(2/3)/(1-1/3)=3^{-n}$. Agar galat kurang dari $10^{-3}$, diperlukan $3^n>1000$. Karena $3^6=729<1000$ dan $3^7=2187>1000$, bilangan terkecil adalah $n=7$. Verifikasi langsung dari rekursi memberikan $p_n=1-3^{-n}$, sehingga galat pada $n=7$ tepat $1/2187<10^{-3}$, sedangkan pada $n=6$ masih $1/729>10^{-3}$. Konstanta $L=1/3$ memang sah karena $g([0,2])=[2/3,4/3]\\subseteq[0,2]$ dan $|g(x)-g(y)|=|x-y|/3$. Dengan demikian penggunaan batas a priori tidak melompati pemeriksaan hipotesis.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
