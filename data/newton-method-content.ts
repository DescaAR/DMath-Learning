import type { BookLessonContent } from "@/data/book-content-types";

/** Original, proof-based Newton lesson; Burden–Faires (2011), Atkinson (1989). */
export const newtonMethodContent: BookLessonContent = {
  "intro": [
    "Metode Newton mencari akar persamaan $f(x)=0$ dengan mengganti grafik fungsi di dekat tebakan saat ini oleh garis singgungnya. Jika garis singgung tersebut memotong sumbu horizontal di $x_{n+1}$, titik potong itu digunakan sebagai tebakan baru. Konstruksi ini bersifat lokal: garis singgung hanya merepresentasikan fungsi dengan baik apabila titik saat ini cukup dekat dengan akar dan turunannya tidak terlalu kecil.",
    "Dari persamaan garis singgung $y=f(x_n)+f'(x_n)(x-x_n)$, syarat $y=0$ menghasilkan $x_{n+1}=x_n-f(x_n)/f'(x_n)$. Pembagian ini hanya sah jika $f'(x_n)\\ne0$. Newton bukan metode pengurung akar: iterasinya dapat meninggalkan interval awal, berosilasi, atau gagal ketika turunan nol. Sebaliknya, di sekitar akar sederhana dengan turunan yang tetap jauh dari nol, galatnya dapat mengecil secara kuadratik.",
    "Materi ini membedakan tiga pernyataan yang sering tercampur: rumus pembentukan iterasi, teorema konvergensi lokal dengan hipotesis kuantitatif, dan pemeriksaan galat sesudah komputasi. Contoh dan latihan menggunakan aritmetika eksak jika memungkinkan agar galat pembulatan tidak disalahartikan sebagai sifat metode. Rujukan: R. L. Burden dan J. D. Faires, Numerical Analysis, edisi ke-9 (2011), pembahasan metode Newton; K. E. Atkinson, An Introduction to Numerical Analysis, edisi ke-2 (1989), bab persamaan nonlinear."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Akar Sederhana",
      "statement": "Misalkan $f$ terdiferensialkan pada lingkungan titik $p$. Titik $p$ disebut akar sederhana apabila $f(p)=0$ dan $f'(p)\\ne0$. Jika $f'(p)=0$, akar tersebut tidak memenuhi syarat kesederhanaan; informasi orde akar memerlukan asumsi lebih lanjut.",
      "explanation": "Turunan tak nol menjamin bahwa grafik melintasi sumbu secara transversal secara lokal."
    },
    {
      "kind": "definition",
      "title": "Langkah Newton",
      "statement": "Misalkan $f$ terdiferensialkan di $x_n$ dan $f'(x_n)\\ne0$. Langkah Newton didefinisikan oleh $x_{n+1}=N_f(x_n)$, dengan $N_f(x)=x-f(x)/f'(x)$ pada himpunan tempat $f'(x)\\ne0$.",
      "explanation": "Rumus berasal dari titik potong garis singgung dengan sumbu horizontal, bukan dari substitusi akar yang sudah diketahui."
    },
    {
      "kind": "definition",
      "title": "Galat Iterasi dan Residual",
      "statement": "Jika $p$ adalah akar yang dituju, galat bertanda pada iterasi ke-$n$ adalah $e_n=x_n-p$ dan galat absolutnya $|e_n|$. Residual adalah $r_n=f(x_n)$. Kedua besaran berbeda: residual dapat dihitung tanpa mengetahui $p$, sedangkan galat biasanya tidak.",
      "explanation": "Hubungan keduanya memerlukan informasi tambahan tentang besarnya turunan."
    },
    {
      "kind": "definition",
      "title": "Konvergensi Kuadratik",
      "statement": "Barisan $x_n\\to p$ dikatakan konvergen setidaknya secara kuadratik apabila terdapat $C>0$ dan indeks $n_0$ sehingga $|x_{n+1}-p|\\le C|x_n-p|^2$ untuk semua $n\\ge n_0$. Jika galat menjadi nol pada suatu langkah, akar telah ditemukan tepat dan iterasi boleh dihentikan.",
      "explanation": "Definisi ini merupakan batas galat, bukan janji bahwa semua tebakan awal menghasilkan konvergensi."
    },
    {
      "kind": "lemma",
      "title": "Identitas Galat Newton dari Taylor",
      "statement": "Misalkan $f\\in C^2(I)$ pada interval $I$, $p,x\\in I$, $f(p)=0$, dan $f'(x)\\ne0$. Untuk $x\\ne p$ terdapat $\\xi$ di antara $x$ dan $p$ sehingga $N_f(x)-p=\\frac{f''(\\xi)}{2f'(x)}(x-p)^2$. Untuk $x=p$ identitas berlaku dengan kedua ruas nol.",
      "proof": [
        "Karena $f$ dua kali terdiferensialkan dengan turunan kedua kontinu pada interval yang menghubungkan $x$ dan $p$, Teorema Taylor dengan sisa Lagrange di sekitar $x$ memberikan $f(p)=f(x)+f'(x)(p-x)+\\frac12f''(\\xi)(p-x)^2$ untuk suatu $\\xi$ di antara kedua titik.",
        "Gunakan $f(p)=0$ dan pindahkan suku-suku: $\\frac{f(x)}{f'(x)}=x-p-\\frac{f''(\\xi)}{2f'(x)}(x-p)^2$. Pembagian sah karena $f'(x)\\ne0$.",
        "Dari definisi $N_f(x)=x-f(x)/f'(x)$ diperoleh $N_f(x)-p=\\frac{f''(\\xi)}{2f'(x)}(x-p)^2$. Jika $x=p$, karena $f(p)=0$ dan $f'(p)\\ne0$, maka $N_f(p)=p$; kedua ruas bernilai nol. $\\square$"
      ],
      "explanation": "Faktor galat kuadrat muncul dari suku sisa Taylor, bukan semata dari pengamatan tabel iterasi."
    },
    {
      "kind": "theorem",
      "title": "Konvergensi Lokal Newton di Sekitar Akar Sederhana",
      "statement": "Misalkan $f\\in C^2([p-r,p+r])$, $r>0$, $f(p)=0$, serta terdapat $m>0$ dan $M\\ge0$ sehingga $|f'(x)|\\ge m$ dan $|f''(x)|\\le M$ untuk semua $x$ pada interval tersebut. Jika $q=Mr/(2m)<1$, maka untuk setiap $x_0\\in[p-r,p+r]$ iterasi Newton terdefinisi, tetap di interval itu, dan konvergen ke $p$ dengan $|x_{n+1}-p|\\le \\frac{M}{2m}|x_n-p|^2$.",
      "proof": [
        "Dari batas bawah $|f'(x)|\\ge m>0$, penyebut rumus Newton tidak pernah nol pada interval yang dipertimbangkan. Lemma Taylor berlaku bagi setiap $x$ dalam interval, sehingga $|N_f(x)-p|\\le\\frac{M}{2m}|x-p|^2$.",
        "Karena $|x-p|\\le r$, diperoleh $|N_f(x)-p|\\le\\frac{Mr}{2m}|x-p|=q|x-p|\\le qr<r$. Jadi $N_f(x)$ tetap berada pada $[p-r,p+r]$. Induksi memastikan semua iterasi terdefinisi dan tidak keluar dari interval.",
        "Dengan induksi yang sama, $|x_n-p|\\le q^n|x_0-p|$. Karena $0\\le q<1$, ruas kanan menuju nol, sehingga $x_n\\to p$. Ketaksamaan kuadratik yang telah diperoleh berlaku pada setiap langkah, sehingga laju konvergensinya setidaknya kuadratik. Bila $M=0$, satu langkah langsung memberikan $x_1=p$. $\\square$"
      ],
      "explanation": "Hipotesis teorema sengaja kuantitatif: radius, batas turunan pertama, dan batas turunan kedua menjelaskan seberapa lokal jaminan tersebut."
    },
    {
      "kind": "corollary",
      "title": "Konstanta Galat Asimtotik",
      "statement": "Dalam hipotesis teorema konvergensi lokal, jika iterasi tidak mencapai $p$ secara tepat pada langkah berhingga, maka $\\lim_{n\\to\\infty}\\frac{x_{n+1}-p}{(x_n-p)^2}=\\frac{f''(p)}{2f'(p)}$.",
      "proof": [
        "Dari identitas galat Taylor untuk $x=x_n\\ne p$, terdapat $\\xi_n$ di antara $x_n$ dan $p$ sehingga $\\frac{x_{n+1}-p}{(x_n-p)^2}=\\frac{f''(\\xi_n)}{2f'(x_n)}$.",
        "Karena $x_n\\to p$ dan $\\xi_n$ berada di antara $x_n$ dan $p$, maka $\\xi_n\\to p$. Kontinuitas $f''$ dan $f'$ memberi $f''(\\xi_n)\\to f''(p)$ dan $f'(x_n)\\to f'(p)\\ne0$. Mengambil limit hasil bagi memberikan rumus. $\\square$"
      ],
      "explanation": "Konstanta limit boleh nol; istilah kuadratik tidak berarti bahwa setiap fungsi mempunyai konstanta limit positif."
    },
    {
      "kind": "proposition",
      "title": "Batas Galat Berdasarkan Residual",
      "statement": "Misalkan $f$ kontinu pada interval tertutup yang menghubungkan $x$ dan akar $p$, terdiferensialkan pada interiornya, $f(p)=0$, dan $|f'(t)|\\ge m>0$ di seluruh interior. Maka $|x-p|\\le |f(x)|/m$.",
      "proof": [
        "Jika $x=p$, kedua ruas bernilai nol. Untuk $x\\ne p$, Teorema Nilai Rata-rata memberikan suatu $\\xi$ di antara $x$ dan $p$ dengan $f(x)-f(p)=f'(\\xi)(x-p)$.",
        "Karena $f(p)=0$, diperoleh $|f(x)|=|f'(\\xi)|\\,|x-p|\\ge m|x-p|$. Membagi dengan $m>0$ menghasilkan batas yang dinyatakan. $\\square$"
      ],
      "explanation": "Residual tanpa batas bawah turunan bukan sertifikat jarak terhadap akar."
    },
    {
      "kind": "proposition",
      "title": "Akar Multipel Mengurangi Orde Newton",
      "statement": "Misalkan $k\\ge2$ bilangan bulat, $f(x)=(x-a)^k$, dan $x_n\\ne a$. Newton biasa memenuhi $x_{n+1}-a=(1-\\frac1k)(x_n-a)$; karena itu konvergensinya linear, bukan kuadratik. Jika multiplicity $k$ diketahui, iterasi termodifikasi $x_{n+1}=x_n-kf(x_n)/f'(x_n)$ mencapai $a$ dalam satu langkah.",
      "proof": [
        "Untuk $x\\ne a$, berlaku $f'(x)=k(x-a)^{k-1}\\ne0$ dan $\\frac{f(x)}{f'(x)}=\\frac{x-a}{k}$. Maka $N_f(x)=x-\\frac{x-a}{k}=a+(1-\\frac1k)(x-a)$.",
        "Dengan induksi, $x_n-a=(1-\\frac1k)^n(x_0-a)$. Karena $0<1-\\frac1k<1$, galat menuju nol secara geometrik dengan rasio tetap, sehingga laju linear. Akar ini bukan akar sederhana sebab $f'(a)=0$.",
        "Untuk iterasi termodifikasi, $x-kf(x)/f'(x)=x-(x-a)=a$ selama $x\\ne a$. Jika sudah berada di $a$, komputasi dihentikan tanpa membagi dengan turunan nol. $\\square$"
      ],
      "explanation": "Contoh ini menunjukkan mengapa hipotesis akar sederhana tidak boleh dihilangkan dari teorema kuadratik."
    },
    {
      "kind": "proposition",
      "title": "Newton untuk Akar Kuadrat Positif",
      "statement": "Misalkan $a>0$ dan $x_0>0$. Iterasi Newton bagi $f(x)=x^2-a$ adalah $x_{n+1}=\\frac12(x_n+a/x_n)$. Semua iterasi positif; untuk $n\\ge1$, berlaku $x_n\\ge\\sqrt a$, barisan sejak indeks satu menurun, dan limitnya $\\sqrt a$.",
      "proof": [
        "Jika $x_n>0$, maka $x_{n+1}=\\frac12(x_n+a/x_n)>0$, sehingga seluruh iterasi terdefinisi. Identitas $x_{n+1}-\\sqrt a=\\frac{(x_n-\\sqrt a)^2}{2x_n}\\ge0$ membuktikan $x_{n+1}\\ge\\sqrt a$.",
        "Untuk $x_n\\ge\\sqrt a$ diperoleh $x_{n+1}-x_n=(a-x_n^2)/(2x_n)\\le0$. Jadi $(x_n)_{n\\ge1}$ menurun dan dibatasi bawah oleh $\\sqrt a$, sehingga mempunyai limit $L\\ge\\sqrt a>0$.",
        "Kontinuitas pemetaan $x\\mapsto(x+a/x)/2$ pada bilangan positif memberi $L=(L+a/L)/2$, atau $L^2=a$. Karena $L>0$, diperoleh $L=\\sqrt a$. $\\square$"
      ],
      "explanation": "Argumen ini bersifat global untuk fungsi khusus $x^2-a$ dan tidak boleh digeneralisasi ke semua fungsi."
    }
  ],
  "examples": [
    {
      "title": "Akar Sederhana pada Polinom Kuadrat",
      "forDefinition": "Akar Sederhana",
      "problem": "Periksa apakah $p=3$ akar sederhana dari $f(x)=x^2-9$, dan bandingkan dengan $g(x)=(x-3)^2$.",
      "solution": [
        "Diketahui $f(3)=9-9=0$, sehingga $p=3$ merupakan akar. Turunannya $f'(x)=2x$, maka $f'(3)=6\\ne0$; sesuai definisi, akar tersebut sederhana.",
        "Untuk $g$, berlaku $g(3)=0$ tetapi $g'(x)=2(x-3)$ sehingga $g'(3)=0$. Jadi akar $3$ pada $g$ bukan akar sederhana. Keduanya mempunyai akar yang sama, tetapi perilaku Newton di dekatnya dapat berbeda.",
        "Pemeriksaan ini penting sebelum memakai teorema konvergensi kuadratik, karena hipotesis $f'(p)\\ne0$ terpenuhi untuk $f$ tetapi gagal untuk $g$."
      ],
      "conclusion": "Akar sederhana ditentukan oleh nilai fungsi dan turunan pada akar, bukan oleh letak akarnya saja."
    },
    {
      "title": "Dua Langkah Eksak Menuju Akar Dua",
      "forDefinition": "Langkah Newton",
      "problem": "Untuk $f(x)=x^2-2$ dan $x_0=3/2$, hitung $x_1,x_2$ serta residual masing-masing.",
      "solution": [
        "Diketahui $f'(x)=2x$. Karena $x_0=3/2>0$, pembagian sah. Rumus Newton menjadi $x_{n+1}=(x_n+2/x_n)/2$.",
        "Langkah pertama: $x_1=\\frac12(\\frac32+\\frac43)=\\frac{17}{12}$. Residualnya $f(x_1)=\\frac{289}{144}-2=\\frac1{144}$; jadi $x_1$ belum merupakan akar eksak.",
        "Langkah kedua: $x_2=\\frac12(\\frac{17}{12}+\\frac{24}{17})=\\frac{577}{408}$. Karena $577^2-2(408)^2=1$, residual $f(x_2)=\\frac1{166464}$, jauh lebih kecil daripada $1/144$.",
        "Untuk memeriksa galat tanpa mengasumsikan nilai desimal akar, gunakan $x_2-\\sqrt2=\\frac{x_2^2-2}{x_2+\\sqrt2}=\\frac{1}{166464(x_2+\\sqrt2)}>0$. Galat ini positif dan jauh lebih kecil daripada residual."
      ],
      "conclusion": "Dua langkah menghasilkan $17/12$ dan $577/408$ dengan residual eksak yang dapat diperiksa."
    },
    {
      "title": "Residual Tidak Sama dengan Galat",
      "forDefinition": "Galat Iterasi dan Residual",
      "problem": "Misalkan $f(x)=10^{-8}(x-1)$, akar $p=1$, dan pendekatan $x=0$. Bandingkan residual dengan galat.",
      "solution": [
        "Dari $f(p)=0$ didapat akar tepat $p=1$. Galat absolut pada $x=0$ adalah $|0-1|=1$, sedangkan residual $|f(0)|=10^{-8}$.",
        "Walaupun residual terlihat sangat kecil, pendekatan masih berjarak satu satuan dari akar. Penyebabnya adalah turunan $f'(x)=10^{-8}$ yang juga sangat kecil; skala fungsi menekan nilai residual.",
        "Proposisi residual dengan $m=10^{-8}$ memberikan $|x-p|\\le |f(x)|/m=10^{-8}/10^{-8}=1$. Batas ini tepat pada contoh tersebut dan menjelaskan mengapa residual harus dinormalisasi oleh informasi turunan."
      ],
      "conclusion": "Residual $10^{-8}$ tidak berarti galat $10^{-8}$; pada contoh ini galatnya $1$."
    },
    {
      "title": "Memeriksa Ketaksamaan Kuadratik",
      "forDefinition": "Konvergensi Kuadratik",
      "problem": "Untuk $f(x)=x^2-2$ pada $I=[1,2]$, tentukan batas galat satu langkah Newton terhadap $p=\\sqrt2$.",
      "solution": [
        "Pada $I$, turunan $f'(x)=2x$ memenuhi $|f'(x)|\\ge2$, sedangkan $f''(x)=2$ sehingga dapat diambil $m=2$ dan $M=2$. Akar $p=\\sqrt2$ memang berada di $I$.",
        "Identitas galat memberi $|N_f(x)-p|=\\frac{|x-p|^2}{2x}\\le\\frac12|x-p|^2$ untuk $x\\in[1,2]$. Konstanta $1/2$ berasal dari $M/(2m)=2/4$.",
        "Misalnya pada $x=3/2$, $|x-p|<1/10$ sebab $1.4<\\sqrt2<1.5$. Maka batas satu langkah $|x_1-p|<\\frac12(1/10)^2=1/200$ sah. Nilai sebenarnya $17/12-\\sqrt2\\approx0.00245$ berada di bawah batas tersebut."
      ],
      "conclusion": "Batas kuadratik adalah ketaksamaan yang dibuktikan dari turunan, bukan hasil membaca rasio desimal."
    },
    {
      "title": "Siklus Newton Meski Turunan Tidak Nol",
      "problem": "Untuk $f(x)=x^3-2x+2$, mulai dari $x_0=0$. Hitung dua langkah dan simpulkan apakah iterasi konvergen.",
      "solution": [
        "Turunannya $f'(x)=3x^2-2$. Pada $x_0=0$ berlaku $f(0)=2$ dan $f'(0)=-2\\ne0$, sehingga $x_1=0-2/(-2)=1$.",
        "Pada $x_1=1$, diperoleh $f(1)=1$ dan $f'(1)=1\\ne0$, sehingga $x_2=1-1/1=0$. Karena pemetaan Newton deterministik, langkah berikutnya mengulang $0\\mapsto1\\mapsto0$.",
        "Barisan $0,1,0,1,\\ldots$ tidak konvergen, dan baik $0$ maupun $1$ bukan akar. Ini tidak bertentangan dengan teorema lokal: tebakan awal tidak berada dalam lingkungan akar yang memenuhi syarat kontraksi teorema."
      ],
      "conclusion": "Newton dapat bersiklus meskipun pembagian pada setiap langkah sah."
    },
    {
      "title": "Akar Multipel dan Iterasi Termodifikasi",
      "problem": "Untuk $f(x)=(x-1)^3$ dan $x_0=4$, hitung dua iterasi Newton biasa dan satu iterasi termodifikasi dengan multiplicity $3$.",
      "solution": [
        "Untuk $x\\ne1$, $f'(x)=3(x-1)^2$, sehingga Newton biasa memberikan $x_{n+1}=x_n-(x_n-1)/3=1+\\frac23(x_n-1)$.",
        "Dari $x_0=4$, galat awal $3$ berubah menjadi $2$, sehingga $x_1=3$; galat berikutnya $4/3$, sehingga $x_2=7/3$. Rasio galat tetap $2/3$, bukan menuju nol secara kuadratik.",
        "Jika multiplicity $3$ diketahui, iterasi termodifikasi adalah $x_1^{\\mathrm{mod}}=4-3(4-1)^3/[3(4-1)^2]=4-3=1$. Nilai ini benar-benar akar karena $f(1)=0$; iterasi dihentikan di sini agar tidak membagi dengan $f'(1)=0$."
      ],
      "conclusion": "Akar multipel memerlukan perhatian tersendiri; Newton biasa hanya linear pada contoh ini."
    },
    {
      "title": "Satu Langkah untuk Akar Sembilan",
      "problem": "Tentukan dua langkah Newton bagi $x^2-9=0$ dari $x_0=5$, lalu periksa apakah tebakan mendekati akar positif.",
      "solution": [
        "Dari $f'(x)=2x$ diperoleh $x_{n+1}=\\frac12(x_n+9/x_n)$. Karena $x_0=5>0$, seluruh langkah terdefinisi dan menuju akar positif menurut proposisi khusus akar kuadrat.",
        "Langkah pertama memberi $x_1=\\frac12(5+9/5)=17/5=3.4$. Langkah kedua memberi $x_2=\\frac12(17/5+45/17)=257/85\\approx3.0235294$.",
        "Akar positif eksaknya $3$. Galat berturut-turut adalah $2$, $2/5$, dan $2/85$. Residual kedua $f(257/85)=(257^2-9\\cdot85^2)/85^2=1024/7225$, positif. Kedua langkah menurunkan galat dan tetap di atas akar."
      ],
      "conclusion": "Perhitungan dan verifikasi menunjukkan penurunan galat $2\to2/5\to2/85$."
    },
    {
      "title": "Menggunakan Turunan untuk Sertifikat Galat",
      "problem": "Pada $f(x)=x^2-5$, pendekatan $x=9/4$ berada pada interval $[2,9/4]$ yang memuat akar positif. Berikan batas galat berbasis residual.",
      "solution": [
        "Karena $f(2)=-1<0$ dan $f(9/4)=81/16-5=1/16>0$, Teorema Nilai Antara menjamin akar $p=\\sqrt5$ di $(2,9/4)$. Turunan $f'(t)=2t\\ge4$ di seluruh interval.",
        "Dengan $m=4$, proposisi residual menghasilkan $|9/4-\\sqrt5|\\le|f(9/4)|/4=(1/16)/4=1/64$.",
        "Sebagai verifikasi independen, $\\sqrt5\\approx2.2360679$ sehingga galat aktual $\\approx0.0139321<0.015625=1/64$. Nilai desimal hanya untuk memeriksa; jaminan formal berasal dari Teorema Nilai Rata-rata."
      ],
      "conclusion": "Batas $1/64$ terbukti dari hipotesis interval dan turunan, bukan dari pembulatan akar."
    }
  ],
  "exercises": [
    {
      "prompt": "Untuk $f(x)=x^2-5$ dengan $x_0=2$, hitung satu langkah Newton dan residualnya. Berikan batas galat terhadap akar positif tanpa memakai nilai desimal $\\sqrt5$.",
      "hint": "Gunakan rumus Newton dan Teorema Nilai Rata-rata pada interval yang memuat akar.",
      "answer": "Diketahui $f'(x)=2x$ dan $f(2)=-1$, maka $x_1=2-(-1)/4=9/4$. Substitusi memberi residual $f(9/4)=81/16-5=1/16$. Karena $f(2)<0<f(9/4)$ dan $f$ kontinu, terdapat akar $p\\in(2,9/4)$; akar ini positif sehingga $p=\\sqrt5$. Untuk $t\\in[2,9/4]$, $f'(t)=2t\\ge4$. Teorema Nilai Rata-rata memberi $|f(x_1)-f(p)|=|f'(\\xi)|\\,|x_1-p|\\ge4|x_1-p|$. Maka $|9/4-\\sqrt5|\\le(1/16)/4=1/64$. Semua hipotesis batas residual telah diperiksa; hasilnya sertifikat galat, bukan hanya estimasi desimal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa Newton bagi $f(x)=ax+b$ dengan $a\\ne0$ mencapai akar tepat dalam satu langkah dari sembarang $x_0\\in\\mathbb R$.",
      "hint": "Turunan fungsi affine adalah konstanta tidak nol.",
      "answer": "Diketahui $f'(x)=a\\ne0$ untuk setiap $x$, sehingga rumus Newton sah dari sembarang tebakan. Hitung $x_1=x_0-(ax_0+b)/a=x_0-x_0-b/a=-b/a$. Substitusi ke persamaan semula memberikan $f(x_1)=a(-b/a)+b=0$. Karena fungsi affine dengan $a\\ne0$ memiliki satu-satunya akar $-b/a$, langkah ini tepat dan tidak perlu iterasi berikutnya. Kasus $a=0$ dikecualikan karena turunannya nol dan persamaan bisa tak mempunyai akar atau identik nol.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk $f(x)=x^3$ dan $x_0=8$, tentukan $x_1,x_2$ dengan Newton biasa dan buktikan orde konvergensinya.",
      "hint": "Gunakan rumus untuk akar multipel dengan $k=3$.",
      "answer": "Diketahui akar $p=0$ mempunyai multiplicity $3$ dan $f'(x)=3x^2$. Untuk $x_n\\ne0$, Newton menghasilkan $x_{n+1}=x_n-x_n^3/(3x_n^2)=2x_n/3$. Dari $x_0=8$ didapat $x_1=16/3$ dan $x_2=32/9$. Dengan induksi $x_n=8(2/3)^n$, sehingga $x_n\\to0$ dan $|e_{n+1}|/|e_n|=2/3$ untuk setiap $n$. Rasio ini tidak menuju nol; jadi konvergensinya linear, bukan kuadratik. Pemeriksaan $f(0)=0$ menegaskan limit adalah akar, sedangkan pembagian di $x=0$ tidak dilakukan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Tunjukkan bahwa Newton dari $x_0=0$ untuk $f(x)=x^3-2x+2$ tidak konvergen, walaupun kedua langkah awal terdefinisi.",
      "hint": "Hitung pemetaan Newton pada 0 dan 1.",
      "answer": "Turunan $f'(x)=3x^2-2$. Pada $x_0=0$, $f(0)=2$ dan $f'(0)=-2$, sehingga $x_1=1$. Pada $x_1=1$, $f(1)=1$ dan $f'(1)=1$, sehingga $x_2=0$. Pemetaan Newton pada kedua titik itu tidak berubah, maka induksi memberi $x_{2n}=0$ dan $x_{2n+1}=1$ untuk semua $n\\ge0$. Dua subbarisan konstan mempunyai limit berbeda, sehingga barisan penuh tidak konvergen. Selain itu $f(0)=2$ dan $f(1)=1$, jadi tidak satu pun titik siklus merupakan akar. Contoh ini memperlihatkan batas jaminan lokal metode.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Diketahui $f\\in C^2([p-r,p+r])$, $f(p)=0$, $|f'|\\ge2$, $|f''|\\le1$, dan $r=1$. Buktikan iterasi Newton dari setiap $x_0$ dalam interval konvergen ke $p$ serta berikan batas galat setelah tiga langkah jika $|x_0-p|\\le1$.",
      "hint": "Hitung $q=Mr/(2m)$ dan gunakan induksi.",
      "answer": "Hipotesis memberi $m=2$, $M=1$, dan $q=Mr/(2m)=1/4<1$. Dari identitas Taylor, $|e_{n+1}|\\le(M/(2m))|e_n|^2=|e_n|^2/4$. Karena $|e_n|\\le1$ selama iterasi berada di interval, maka $|e_{n+1}|\\le|e_n|/4\\le1/4$, sehingga iterasi tetap di interval; induksi memastikan penyebut tidak nol dan seluruh langkah sah. Batas berulang yang lebih kuat memberi $|e_1|\\le1/4$, $|e_2|\\le(1/4)^2/4=1/64$, dan $|e_3|\\le(1/64)^2/4=1/16384$. Dengan demikian iterasi konvergen dan setelah tiga langkah galat tidak melebihi $1/16384$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk $f(x)=10^{-6}(x-2)$ dan tebakan $x=0$, hitung residual dan galat. Jelaskan apakah syarat berhenti $|f(x)|<10^{-5}$ menjamin galat di bawah $10^{-5}$.",
      "hint": "Bandingkan residual dengan batas bawah turunan.",
      "answer": "Akar persamaan adalah $p=2$ karena $10^{-6}(p-2)=0$. Pada $x=0$, residual absolut $|f(0)|=2\\cdot10^{-6}<10^{-5}$, sehingga aturan penghentian yang diusulkan menerima titik tersebut. Akan tetapi galat absolut $|0-2|=2$, jauh lebih besar daripada $10^{-5}$. Turunan konstan $f'(x)=10^{-6}$ memberi batas yang tepat $|x-p|\\le|f(x)|/10^{-6}=2$. Karena itu syarat residual tanpa mempertimbangkan skala turunan tidak dapat menjamin toleransi galat yang diminta.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Misalkan $f(x)=(x-4)^2$ dan $x_0=10$. Bandingkan dua iterasi Newton biasa dengan satu iterasi Newton termodifikasi jika multiplicity diketahui.",
      "hint": "Tulis galat terhadap akar 4.",
      "answer": "Untuk $x\\ne4$, turunan $f'(x)=2(x-4)$ sehingga Newton biasa menghasilkan $x_{n+1}=x_n-(x_n-4)/2=(x_n+4)/2$. Dari $x_0=10$ diperoleh $x_1=7$ dan $x_2=11/2$, dengan galat berturut-turut $6,3,3/2$. Jadi galat berkurang dengan rasio $1/2$ secara linear. Jika multiplicity $k=2$ diketahui, langkah termodifikasi memberi $x_1^{\\mathrm{mod}}=10-2(10-4)^2/[2(10-4)]=4$. Verifikasi $f(4)=0$ menunjukkan akar tercapai tepat; perhitungan harus berhenti sebelum mengevaluasi $f'(4)=0$ sebagai penyebut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan untuk $a>0$ dan $x_0>0$ bahwa iterasi $x_{n+1}=(x_n+a/x_n)/2$ tidak dapat menjadi negatif dan bahwa semua $x_n$ dengan $n\\ge1$ tidak kurang dari $\\sqrt a$.",
      "hint": "Gunakan identitas kuadrat sempurna.",
      "answer": "Karena $x_0>0$ dan $a>0$, jika $x_n>0$ maka kedua suku $x_n$ dan $a/x_n$ positif, sehingga $x_{n+1}>0$. Induksi menjamin seluruh iterasi terdefinisi dan positif. Selanjutnya, untuk $x_n>0$ hitung $x_{n+1}-\\sqrt a=\\frac{x_n^2+a-2x_n\\sqrt a}{2x_n}=\\frac{(x_n-\\sqrt a)^2}{2x_n}\\ge0$. Karena penyebut positif dan pembilang kuadrat, ketaksamaan berlaku tanpa perlu mengasumsikan $x_n\\ge\\sqrt a$. Jadi sejak iterasi pertama, semua tebakan berada di atas atau tepat pada akar positif. Jika $x_n=\\sqrt a$, residual nol dan proses berhenti.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
