import type { BookLessonContent } from "@/data/book-content-types";

/** Root-finding error certificates; Burden–Faires (2011), Süli–Mayers (2003), Higham (2002). */
export const iterativeRootErrorContent:BookLessonContent = {
  "intro": [
    "Dalam pencarian akar $f(p)=0$, nilai iterasi $p_n$ hanyalah pendekatan terhadap akar $p$. Perbedaan $|p_n-p|$ tidak biasanya dapat dihitung karena $p$ belum diketahui. Sebaliknya, residual $f(p_n)$ dan perubahan langkah $p_n-p_{n-1}$ tersedia dari algoritma. Masalah utamanya ialah menentukan kapan besaran terukur itu benar-benar membatasi galat solusi.",
    "Untuk memisahkan ketiganya, pembahasan dimulai dengan galat maju, residual, dan perubahan iterasi. Teorema Nilai Rata-rata menghubungkan residual dengan galat apabila turunan memiliki batas bawah positif. Prinsip kontraksi menghasilkan batas sebelum iterasi (a priori) dan setelah iterasi (a posteriori). Pada Newton dan secant, persamaan galat menjelaskan mengapa pendekatan dapat menjadi sangat cepat di dekat akar sederhana.",
    "Kriteria penghentian harus dibaca sebagai pernyataan matematis dengan hipotesis. Residual kecil pada fungsi yang sangat datar tidak menjamin akar sudah dekat. Demikian pula, dua iterasi yang hampir sama dapat berasal dari pemetaan yang justru menjauh dari titik tetap. Contoh-contoh di bawah membandingkan sertifikat galat yang sah dengan indikator numerik yang hanya bersifat diagnostik.",
    "Rujukan: R. L. Burden dan J. D. Faires, Numerical Analysis, edisi ke-9 (2011), pembahasan solusi persamaan nonlinear; E. Süli dan D. F. Mayers, An Introduction to Numerical Analysis (2003), pembahasan iterasi dan analisis galat; N. J. Higham, Accuracy and Stability of Numerical Algorithms, edisi ke-2 (2002), pembahasan residual dan conditioning."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Galat Maju Aproksimasi Akar",
      "statement": "Misalkan $f:I\\to\\mathbb R$ mempunyai akar $p\\in I$ dan $p_n\\in I$ adalah aproksimasi. Galat bertanda didefinisikan oleh $e_n=p_n-p$, sedangkan galat absolut (forward error) ialah $E_n=|p_n-p|$. Galat relatif $E_n/|p|$ hanya didefinisikan apabila $p\\ne0$.",
      "explanation": "Galat maju mengukur ketepatan jawaban, tetapi umumnya tidak dapat dihitung tanpa informasi tambahan tentang akar."
    },
    {
      "kind": "definition",
      "title": "Residual Persamaan Akar",
      "statement": "Untuk $f:I\\to\\mathbb R$ dan $x\\in I$, residual adalah $r_f(x)=f(x)$. Residual absolut ialah $|f(x)|$; residual bernilai nol tepat ketika $x$ merupakan akar $f$.",
      "explanation": "Nilai residual kecil tidak dengan sendirinya mengukur jarak ke akar: skala dan kemiringan fungsi berpengaruh."
    },
    {
      "kind": "definition",
      "title": "Perubahan Iterasi dan Residual Titik Tetap",
      "statement": "Untuk iterasi $p_{n+1}=g(p_n)$, perubahan langkah ke-$n$ ialah $d_n=|p_n-p_{n-1}|$ ($n\\ge1$), sedangkan residual titik tetap pada $x$ ialah $r_g(x)=x-g(x)$. Pada iterasi yang terdefinisi, $|r_g(p_n)|=|p_n-p_{n+1}|=d_{n+1}$.",
      "explanation": "Selisih langkah dapat dihitung, tetapi hanya menjadi batas galat bila tersedia kondisi stabilitas atau kontraksi."
    },
    {
      "kind": "definition",
      "title": "Sertifikat Penghentian",
      "statement": "Diberikan toleransi $\\varepsilon>0$. Suatu ketaksamaan terverifikasi $|p_n-p|\\le B_n$, dengan $B_n$ dapat dihitung dari data dan asumsi yang sudah dibuktikan, disebut sertifikat galat. Penghentian bersertifikat terjadi jika $B_n\\le\\varepsilon$.",
      "explanation": "Memeriksa residual atau selisih iterasi saja tidak setara dengan membuktikan sertifikat galat."
    },
    {
      "kind": "proposition",
      "title": "Batas Galat dari Residual dan Turunan",
      "statement": "Misalkan $I=[a,b]$, $f$ kontinu pada $I$ dan terdiferensial pada $(a,b)$, serta terdapat $m>0$ dengan $|f'(t)|\\ge m$ untuk setiap $t\\in(a,b)$. Jika $p,x\\in I$ dan $f(p)=0$, maka $|x-p|\\le |f(x)|/m$. Jika juga $|f'(t)|\\le M$, berlaku $|f(x)|/M\\le|x-p|\\le|f(x)|/m$.",
      "proof": [
        "Untuk $x=p$ semua ketaksamaan bernilai nol. Ambil $x\\ne p$. Teorema Nilai Rata-rata berlaku pada interval berujung $x$ dan $p$ karena kontinuitas dan keterdiferensialan yang diasumsikan.",
        "Terdapat $\\xi$ di antara $x$ dan $p$ sehingga $f(x)-f(p)=f'(\\xi)(x-p)$. Karena $f(p)=0$, diperoleh $|f(x)|=|f'(\\xi)|\\,|x-p|\\ge m|x-p|$. Pembagian dengan $m>0$ memberi batas atas galat.",
        "Apabila $|f'|\\le M$, identitas yang sama juga memberi $|f(x)|\\le M|x-p|$, sehingga $|f(x)|/M\\le|x-p|$ (dengan $M\\ge m>0$). Kedua batas mengikuti dari hipotesis turunan, bukan dari residual saja. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kontraksi dan Batas Galat A Priori",
      "statement": "Misalkan $I=[a,b]$ tidak kosong, $g:I\\to I$, dan $|g(x)-g(y)|\\le L|x-y|$ untuk setiap $x,y\\in I$ dengan $0\\le L<1$. Untuk setiap $p_0\\in I$, iterasi $p_{n+1}=g(p_n)$ konvergen ke titik tetap tunggal $p\\in I$. Untuk setiap $n\\ge1$ berlaku $|p_n-p|\\le L^n|p_1-p_0|/(1-L)$.",
      "proof": [
        "Karena $g(I)\\subseteq I$, seluruh iterasi terdefinisi. Sifat kontraksi menghasilkan $|p_{k+1}-p_k|\\le L^k|p_1-p_0|$ untuk $k\\ge0$, melalui induksi dari $|p_{k+1}-p_k|=|g(p_k)-g(p_{k-1})|\\le L|p_k-p_{k-1}|$.",
        "Jika $m>n$, ketaksamaan segitiga dan deret geometri memberi $|p_m-p_n|\\le\\sum_{k=n}^{m-1}|p_{k+1}-p_k|\\le L^n|p_1-p_0|/(1-L)$ untuk $n\\ge1$. Ruas kanan menuju nol saat $n\\to\\infty$; untuk $L=0$ iterasi konstan mulai indeks satu. Barisan Cauchy di $\\mathbb R$ mempunyai limit $p$, dan $I$ tertutup menjamin $p\\in I$.",
        "Kontraksi bersifat kontinu. Dari $p_{n+1}=g(p_n)$ dan limit diperoleh $p=g(p)$. Jika $q$ juga titik tetap, $|p-q|=|g(p)-g(q)|\\le L|p-q|$ mengakibatkan $p=q$ karena $L<1$.",
        "Ambil limit $m\\to\\infty$ pada batas jumlah langkah untuk memperoleh $|p-p_n|\\le L^n|p_1-p_0|/(1-L)$. Ini merupakan batas yang dapat direncanakan sebelum langkah ke-$n$ dilakukan. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas A Posteriori dari Dua Iterasi",
      "statement": "Di bawah hipotesis teorema kontraksi, untuk setiap $n\\ge1$ berlaku $|p_n-p|\\le \\frac{L}{1-L}|p_n-p_{n-1}|$.",
      "proof": [
        "Karena $p=g(p)$ dan $p_n=g(p_{n-1})$, sifat kontraksi memberikan $|p_n-p|\\le L|p_{n-1}-p|$.",
        "Ketaksamaan segitiga menghasilkan $|p_{n-1}-p|\\le |p_{n-1}-p_n|+|p_n-p|$. Substitusi memberi $(1-L)|p_n-p|\\le L|p_n-p_{n-1}|$.",
        "Karena $1-L>0$, pembagian mempertahankan arah ketaksamaan dan menghasilkan batas yang dinyatakan. Untuk $L=0$, semua $p_n$ dengan $n\\ge1$ tepat sama dengan titik tetap. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat dari Residual Titik Tetap",
      "statement": "Jika $g:I\\to I$ kontraksi berkonstanta $L<1$ dan $p$ titik tetap tunggalnya, maka setiap $x\\in I$ memenuhi $|x-p|\\le |x-g(x)|/(1-L)$.",
      "proof": [
        "Tulis identitas $x-p=(x-g(x))+(g(x)-g(p))$ dengan menggunakan $g(p)=p$.",
        "Ketaksamaan segitiga dan kontraksi memberi $|x-p|\\le |x-g(x)|+L|x-p|$. Pindahkan suku terakhir untuk memperoleh $(1-L)|x-p|\\le |x-g(x)|$.",
        "Pembagian oleh $1-L>0$ membuktikan klaim. Faktor $1/(1-L)$ penting ketika $L$ mendekati satu, karena residual yang kecil dapat masih berkaitan dengan galat besar. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Persamaan Galat Newton untuk Akar Sederhana",
      "statement": "Misalkan $f\\in C^2(I)$ pada interval $I$, $p\\in I$ memenuhi $f(p)=0$, dan $|f'(x)|\\ge m>0$, $|f''(x)|\\le M$ untuk setiap $x\\in I$. Jika $x_n\\in I$ dan $x_{n+1}=x_n-f(x_n)/f'(x_n)$, maka $|x_{n+1}-p|\\le \\frac{M}{2m}|x_n-p|^2$. Kesimpulan berlaku pada setiap langkah yang titik awalnya berada di $I$; keberadaan seluruh orbit dalam $I$ harus diperiksa terpisah.",
      "proof": [
        "Rumus Taylor dengan sisa Lagrange pada ruas antara $x_n$ dan $p$ memberikan $0=f(p)=f(x_n)+f'(x_n)(p-x_n)+\\frac12 f''(\\xi_n)(p-x_n)^2$ untuk suatu $\\xi_n$ di antara kedua titik.",
        "Dari definisi Newton, $x_{n+1}=x_n-f(x_n)/f'(x_n)$. Susun ulang identitas Taylor dan bagi dengan $f'(x_n)\\ne0$ untuk memperoleh $p-x_{n+1}=-\\frac{f''(\\xi_n)}{2f'(x_n)}(p-x_n)^2$.",
        "Pengambilan nilai mutlak dan batas $|f''(\\xi_n)|\\le M$, $|f'(x_n)|\\ge m$ menghasilkan $|p-x_{n+1}|\\le (M/(2m))|p-x_n|^2$. Bentuk kuadratik ini tidak menyatakan konvergensi global dari tebakan sembarang. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Identitas Galat Secant pada Persamaan Kuadratik",
      "statement": "Misalkan $a>0$, $p=\\sqrt a$, $f(x)=x^2-a$, dan dua iterasi $x_{n-1}\\ne x_n$ memenuhi $x_n+x_{n-1}\\ne0$. Langkah secant terdefinisi dan memenuhi $x_{n+1}=(x_nx_{n-1}+a)/(x_n+x_{n-1})$. Jika $e_k=x_k-p$, maka $e_{n+1}=e_ne_{n-1}/(x_n+x_{n-1})$.",
      "proof": [
        "Selisih nilai fungsi dapat difaktorkan sebagai $f(x_n)-f(x_{n-1})=(x_n-x_{n-1})(x_n+x_{n-1})$. Dengan $x_n\\ne x_{n-1}$ dan $x_n+x_{n-1}\\ne0$, penyebut rumus secant tidak nol.",
        "Substitusi ke $x_{n+1}=x_n-f(x_n)(x_n-x_{n-1})/(f(x_n)-f(x_{n-1}))$ menghasilkan $x_{n+1}=x_n-(x_n^2-a)/(x_n+x_{n-1})=(x_nx_{n-1}+a)/(x_n+x_{n-1})$.",
        "Karena $p^2=a$, pengurangan $p$ memberikan $x_{n+1}-p=(x_nx_{n-1}+p^2-px_n-px_{n-1})/(x_n+x_{n-1})=(x_n-p)(x_{n-1}-p)/(x_n+x_{n-1})$. Identitas eksak ini menjelaskan keterkaitan dua galat terakhir, selama penyebut tidak mendekati nol. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Residual atau Langkah Kecil Tidak Selalu Menjamin Galat Kecil",
      "statement": "Tanpa batas bawah turunan atau hipotesis kontraksi, tidak terdapat jaminan umum bahwa residual kecil ataupun perubahan iterasi kecil memaksa galat akar kecil.",
      "proof": [
        "Untuk $\\delta>0$, ambil $f_\\delta(x)=\\delta(x-1)$ dengan akar tunggal $p=1$. Pada $x=0$, residual absolut $|f_\\delta(0)|=\\delta$ dapat dibuat sekecil mungkin, sedangkan galat $|0-p|=1$ tetap. Tidak ada konstanta batas galat seragam yang bebas dari kemiringan $\\delta$.",
        "Untuk perubahan langkah, ambil $g_\\delta(x)=(1+\\delta)x-\\delta$ dengan titik tetap $p=1$ dan $x_0=0$. Diperoleh $x_1=-\\delta$, sehingga $|x_1-x_0|=\\delta$ sangat kecil tetapi $|x_0-p|=1$.",
        "Induksi dari $x_{n+1}-1=(1+\\delta)(x_n-1)$ memberi $x_n=1-(1+\\delta)^n$. Karena $1+\\delta>1$, galat justru bertambah dan iterasi divergen. Kedua contoh membuktikan perlunya hipotesis tambahan sebelum menerapkan kriteria penghentian. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Menghitung galat maju yang diketahui",
      "problem": "Untuk $f(x)=x^2-2$, ambil akar positif $p=\\sqrt2$ dan aproksimasi $x=1.4$. Tentukan galat absolut dan residual.",
      "forDefinition": "Galat Maju Aproksimasi Akar",
      "solution": [
        "Nilai acuan $p=\\sqrt2\\approx1.4142135624$ memberi galat absolut $|1.4-\\sqrt2|\\approx0.0142135624$. Karena akar positif, galat relatifnya sekitar $0.0142135624/1.4142135624\\approx0.0100505$.",
        "Residual dihitung tanpa mengetahui akar: $f(1.4)=1.96-2=-0.04$, sehingga $|f(1.4)|=0.04$. Kedua angka tidak sama karena residual mengukur perubahan nilai fungsi, bukan jarak pada sumbu $x$.",
        "Sebagai verifikasi, $1.4^2<2<1.5^2$ menunjukkan akar memang berada di $(1.4,1.5)$. Galat maju lebih kecil dari $0.1$ sesuai lokasi akar, sedangkan residual diperoleh langsung dari evaluasi fungsi."
      ]
    },
    {
      "title": "Residual dan sertifikat turunan",
      "problem": "Buktikan batas galat untuk $f(x)=x^2-2$ pada $I=[1.4,1.5]$ dengan $x=1.4$.",
      "forDefinition": "Residual Persamaan Akar",
      "solution": [
        "Fungsi kontinu dan terdiferensial pada interval. Akar positif $\\sqrt2$ berada di $I$ karena $1.4^2<2<1.5^2$. Turunannya $f'(t)=2t\\ge2.8$ untuk semua $t\\in I$, sehingga hipotesis batas residual berlaku dengan $m=2.8$.",
        "Nilai residual ialah $|f(1.4)|=0.04$. Oleh karena itu $|1.4-\\sqrt2|\\le0.04/2.8=1/70\\approx0.0142857143$.",
        "Galat sebenarnya sekitar $0.0142135624$, lebih kecil dari sertifikat. Batas diperoleh dari informasi turunan, bukan dari anggapan bahwa residual dan galat sama besar."
      ]
    },
    {
      "title": "Perubahan langkah pada kontraksi",
      "problem": "Untuk $g(x)=(x+2)/3$, $p_0=0$, hitung $p_1,p_2,p_3$ dan bandingkan perubahan langkah dengan galat.",
      "forDefinition": "Perubahan Iterasi dan Residual Titik Tetap",
      "solution": [
        "Rekursi memberikan $p_1=2/3$, $p_2=(2/3+2)/3=8/9$, dan $p_3=(8/9+2)/3=26/27$. Persamaan $p=(p+2)/3$ mempunyai solusi tunggal $p=1$.",
        "Perubahan terakhir $d_3=|26/27-8/9|=2/27$, sedangkan galat sesungguhnya $E_3=|26/27-1|=1/27$. Keduanya tidak identik.",
        "Karena $g([0,2])=[2/3,4/3]\\subseteq[0,2]$ dan $|g(x)-g(y)|=|x-y|/3$, konstanta kontraksi $L=1/3$ sah. Batas a posteriori memberi $E_3\\le (L/(1-L))d_3=(1/2)(2/27)=1/27$, tepat sama dengan galat sebenarnya."
      ]
    },
    {
      "title": "Menghentikan iterasi dengan sertifikat",
      "problem": "Pada iterasi $g(x)=(x+2)/3$ dari $p_0=0$, tentukan indeks pertama yang menjamin galat kurang dari $10^{-3}$.",
      "forDefinition": "Sertifikat Penghentian",
      "solution": [
        "Kontraksi $L=1/3$ dan $|p_1-p_0|=2/3$ telah diverifikasi. Batas a priori memberikan $|p_n-p|\\le (1/3)^n(2/3)/(1-1/3)=3^{-n}$ untuk $n\\ge1$.",
        "Syarat ketat $3^{-n}<10^{-3}$ ekuivalen dengan $3^n>1000$. Karena $3^6=729$ dan $3^7=2187$, indeks pertama yang dijamin adalah $n=7$.",
        "Verifikasi dengan rumus eksak $p_n=1-3^{-n}$ menghasilkan $|p_7-1|=1/2187<0.001$, sedangkan $|p_6-1|=1/729>0.001$. Sertifikat bukan hanya cukup, melainkan tepat untuk contoh ini."
      ]
    },
    {
      "title": "Galat kuadratik Newton",
      "problem": "Gunakan Newton untuk $x^2-2=0$ dari $x_0=3/2$. Hitung dua langkah dan periksa batas galat.",
      "solution": [
        "Rumus Newton ialah $x_{n+1}=\\frac12(x_n+2/x_n)$ untuk $x_n\\ne0$. Dari $x_0=3/2$ diperoleh $x_1=\\frac12(3/2+4/3)=17/12$ dan $x_2=\\frac12(17/12+24/17)=577/408$.",
        "Pada $I=[1,2]$, $f'(x)=2x\\ge2$ dan $|f''(x)|=2$, sehingga $m=M=2$. Akar $p=\\sqrt2$ dan kedua iterasi berada dalam interval. Teorema galat Newton memberikan $|x_{n+1}-p|\\le\\frac12|x_n-p|^2$ untuk langkah yang diperiksa.",
        "Secara numerik $x_1\\approx1.4166666667$ dan $x_2\\approx1.4142156863$. Galat berkurang dari sekitar $0.0024531$ menjadi $0.000002124$, konsisten dengan kuadrat galat sebelumnya. Perhitungan tidak digunakan sebagai pengganti pemeriksaan hipotesis."
      ]
    },
    {
      "title": "Persamaan galat secant",
      "problem": "Untuk $f(x)=x^2-2$, gunakan $x_0=1$ dan $x_1=2$ untuk menghitung $x_2,x_3$.",
      "solution": [
        "Karena $x_0+x_1=3\\ne0$, rumus khusus kuadratik berlaku: $x_2=(x_1x_0+2)/(x_1+x_0)=(2+2)/3=4/3$.",
        "Langkah berikutnya mempunyai penyebut $x_2+x_1=4/3+2=10/3\\ne0$, sehingga $x_3=((4/3)2+2)/(10/3)=(14/3)/(10/3)=7/5$.",
        "Untuk $p=\\sqrt2$, identitas galat menjamin $x_3-p=(x_2-p)(x_1-p)/(x_2+x_1)$. Nilai $x_2=1.3333$ dan $x_3=1.4$ mendekati $p\\approx1.4142$, tetapi galat bertanda tidak harus monoton di setiap langkah."
      ]
    },
    {
      "title": "Residual kecil pada fungsi datar",
      "problem": "Tunjukkan bahwa residual $10^{-8}$ belum membuktikan galat akar kurang dari $10^{-3}$.",
      "solution": [
        "Ambil $f(x)=10^{-8}(x-1)$ dan $x=0$. Persamaan $f(p)=0$ mempunyai akar tunggal $p=1$ karena koefisien $10^{-8}$ tidak nol.",
        "Residual pada $x=0$ ialah $f(0)=-10^{-8}$, sehingga $|f(0)|=10^{-8}<10^{-3}$. Akan tetapi galat maju $|0-1|=1>10^{-3}$.",
        "Turunan fungsi bernilai konstan $10^{-8}$. Batas residual yang benar ialah $|x-p|\\le |f(x)|/10^{-8}=1$, tepat sama dengan galat. Contoh ini mengidentifikasi sumber kegagalan: conditioning fungsi, bukan kesalahan aritmetika."
      ]
    },
    {
      "title": "Bisection dan batas geometris",
      "problem": "Untuk akar $\\sqrt2$ pada interval awal $[1,2]$, berapa batas galat titik tengah setelah lima kali pembagian bisection?",
      "solution": [
        "Fungsi $f(x)=x^2-2$ kontinu dan memiliki tanda berlawanan pada $1$ dan $2$. Teorema Nilai Antara menjamin akar di interval. Setiap pembagian mempertahankan perubahan tanda, kecuali bila titik tengah tepat akar.",
        "Setelah lima pembagian, panjang interval ialah $(2-1)/2^5=1/32$. Titik tengah $m_5$ berjarak paling jauh setengah panjang interval dari akar, yakni $|m_5-\\sqrt2|\\le1/64=0.015625$.",
        "Batas ini bersifat geometris dan tidak memerlukan batas bawah turunan. Untuk toleransi $10^{-3}$, perlu $2^{n+1}>1000$, sehingga $n\\ge9$ pembagian cukup untuk galat titik tengah kurang dari $10^{-3}$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "ER-01. Untuk $f(x)=x^3-2$ dan $x=5/4$, gunakan Teorema Nilai Rata-rata pada $[1,13/10]$ untuk memberi sertifikat galat akar positif.",
      "hint": "Pastikan akar berada dalam interval, lalu cari batas bawah turunan.",
      "answer": "Akar $p=\\sqrt[3]{2}$ berada di $(1,13/10)$ karena $1^3<2<(13/10)^3=2197/1000$. Fungsi kontinu dan terdiferensial, dengan $f'(t)=3t^2\\ge3$ pada interval. Nilai residual $f(5/4)=125/64-2=-3/64$. Teorema Nilai Rata-rata pada ruas antara $5/4$ dan $p$ memberikan $|f(5/4)|=|f'(\\xi)|\\,|5/4-p|\\ge3|5/4-p|$. Oleh karena itu $|5/4-p|\\le(3/64)/3=1/64=0.015625$. Akar sebenarnya sekitar $1.259921$, sehingga galat sekitar $0.009921$, berada di bawah batas. Hipotesis turunan penting: residual $3/64$ saja tidak memberikan faktor pembagi tiga.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-02. Untuk $g(x)=(x+3)/4$ pada $[0,2]$ dan $p_0=0$, buktikan kontraksi, temukan $p_n$, dan periksa batas a priori.",
      "hint": "Selesaikan titik tetap dan gunakan induksi pada bentuk $p_n$.",
      "answer": "Citra $g([0,2])=[3/4,5/4]$ termuat dalam $[0,2]$. Untuk setiap $x,y$, $|g(x)-g(y)|=|x-y|/4$, sehingga $L=1/4<1$ memenuhi kontraksi. Persamaan $p=(p+3)/4$ memberi $p=1$. Dari $p_0=0$, diperoleh $p_1=3/4$ dan $p_2=15/16$. Induksi membuktikan $p_n=1-4^{-n}$: basis $n=0$ benar, sedangkan $g(1-4^{-n})=(4-4^{-n})/4=1-4^{-(n+1)}$. Galat eksak $|p_n-p|=4^{-n}$. Batas a priori menghasilkan $L^n|p_1-p_0|/(1-L)=(1/4)^n(3/4)/(3/4)=4^{-n}$, tepat sama. Contoh ini memperlihatkan bahwa konstanta kontraksi memberi sertifikat yang tajam.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-03. Untuk iterasi ER-02 pada $n=2$, bandingkan sertifikat galat dari perubahan langkah dan residual titik tetap.",
      "hint": "Hitung $p_2-p_1$ serta $p_2-g(p_2)$.",
      "answer": "Dari ER-02, $p_1=3/4$, $p_2=15/16$, dan $p=1$. Selisih langkah ialah $|p_2-p_1|=3/16$. Dengan $L=1/4$, batas a posteriori memberikan $|p_2-p|\\le\\frac{1/4}{3/4}(3/16)=1/16$. Selanjutnya $g(p_2)=(15/16+3)/4=63/64$, sehingga residual titik tetap $|p_2-g(p_2)|=|60/64-63/64|=3/64$. Batas residual memberikan $|p_2-p|\\le(3/64)/(1-1/4)=1/16$. Galat sebenarnya $|15/16-1|=1/16$. Kedua sertifikat sama dan tepat karena pemetaan ini afine dengan kemiringan $1/4$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-04. Terapkan dua langkah Newton pada $f(x)=x^2-3$ dari $x_0=2$ dan verifikasi hipotesis batas kuadratik pada $[1,2]$.",
      "hint": "Gunakan $x_{n+1}=(x_n+3/x_n)/2$.",
      "answer": "Turunan $f'(x)=2x\\ge2$ pada $[1,2]$ dan $f''(x)=2$, sehingga $m=M=2$. Akar $p=\\sqrt3\\in[1,2]$. Iterasi pertama $x_1=(2+3/2)/2=7/4$. Iterasi kedua $x_2=(7/4+12/7)/2=(49/28+48/28)/2=97/56$. Semua titik awal yang digunakan berada di interval, sehingga batas teorema sah pada kedua langkah: $|x_{n+1}-p|\\le\\frac12|x_n-p|^2$. Nilai $x_1=1.75$ dan $x_2\\approx1.732142857$ mendekati $\\sqrt3\\approx1.732050808$. Besarnya galat kedua sekitar $0.00009205$, jauh lebih kecil daripada galat pertama sekitar $0.0179492$. Ini memverifikasi penyusutan yang konsisten dengan orde kuadratik tanpa mengklaim bahwa sembarang tebakan awal akan konvergen.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-05. Untuk $f(x)=x^2-3$, hitung tiga langkah secant mulai $x_0=1,x_1=2$, dan periksa setiap penyebut.",
      "hint": "Gunakan bentuk $(x_nx_{n-1}+3)/(x_n+x_{n-1})$.",
      "answer": "Langkah pertama memakai $x_0+x_1=3\\ne0$ dan menghasilkan $x_2=(2+3)/3=5/3$. Berikutnya $x_1+x_2=2+5/3=11/3\\ne0$, sehingga $x_3=((5/3)2+3)/(11/3)=(19/3)/(11/3)=19/11$. Terakhir $x_2+x_3=5/3+19/11=(55+57)/33=112/33\\ne0$, sehingga $x_4=((5/3)(19/11)+3)/(112/33)=(95/33+99/33)/(112/33)=97/56$. Akar positif $\\sqrt3\\approx1.732050808$ berada dekat $x_4\\approx1.732142857$. Identitas $e_{n+1}=e_ne_{n-1}/(x_n+x_{n-1})$ berlaku pada setiap langkah karena kedua titik input berbeda dan penyebut tidak nol. Pemeriksaan ini diperlukan: rumus secant tidak sah jika nilai fungsi pada dua titik input sama.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-06. Pada $f(x)=10^{-10}(x-7)$, bandingkan residual di $x=0$ dengan galat sebenarnya dan sertifikat turunan.",
      "hint": "Akar tunggal dapat dihitung persis; gunakan $m=10^{-10}$.",
      "answer": "Karena $10^{-10}\\ne0$, persamaan $f(p)=0$ ekuivalen dengan $p-7=0$, sehingga akar tunggal $p=7$. Pada $x=0$, residual $f(0)=-7\\cdot10^{-10}$ mempunyai nilai mutlak $7\\cdot10^{-10}$, sangat kecil. Galat sebenarnya $|x-p|=7$, bukan bilangan yang kecil. Turunan $f'(x)=10^{-10}$ untuk semua $x$, sehingga batas bawah yang sah ialah $m=10^{-10}$. Teorema residual memberi $|x-p|\\le |f(x)|/m=(7\\cdot10^{-10})/(10^{-10})=7$, tepat. Contoh ini menolak penghentian yang hanya memeriksa $|f(x)|<10^{-6}$ tanpa memperhatikan kemiringan fungsi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-07. Untuk $g(x)=(x+2)/3$ dari $p_0=0$, tentukan $n$ terkecil yang menjamin galat kurang dari $10^{-4}$ dengan batas a priori.",
      "hint": "Buktikan $|p_n-p|le3^{-n}$ dan bandingkan pangkat tiga.",
      "answer": "Pemetaan mengirim $[0,2]$ ke $[2/3,4/3]$ dan mempunyai konstanta kontraksi $L=1/3$. Titik tetap tunggalnya $p=1$. Dengan $p_1=2/3$, batas a priori memberi $|p_n-p|\\le (1/3)^n(2/3)/(1-1/3)=3^{-n}$. Untuk galat kurang dari $10^{-4}$ diperlukan $3^n>10^4$. Karena $3^8=6561<10000$ dan $3^9=19683>10000$, indeks terkecil adalah $n=9$. Rumus eksak $p_n=1-3^{-n}$ dapat dibuktikan dengan induksi dan memberikan galat tepat $3^{-n}$, sehingga $n=8$ memang belum cukup sedangkan $n=9$ sudah memenuhi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "ER-08. Untuk $g_\\delta(x)=(1+\\delta)x-\\delta$ dengan $\\delta=10^{-6}$ dan $x_0=0$, periksa apakah langkah kecil membuktikan konvergensi.",
      "hint": "Cari titik tetap dan rumus tertutup iterasi.",
      "answer": "Persamaan $p=(1+\\delta)p-\\delta$ menghasilkan $\\delta(p-1)=0$. Karena $\\delta>0$, titik tetap tunggal $p=1$. Iterasi pertama dari $x_0=0$ ialah $x_1=-\\delta=-10^{-6}$, sehingga selisih langkah $|x_1-x_0|=10^{-6}$ tampak kecil, tetapi galat awal $|x_0-p|=1$ dan galat langkah pertama $|x_1-p|=1+\\delta$. Dari $x_{n+1}-1=(1+\\delta)(x_n-1)$, induksi memberi $x_n=1-(1+\\delta)^n$. Karena $1+\\delta>1$, berlaku $|x_n-p|=(1+\\delta)^n\\to\\infty$. Faktor Lipschitz pemetaan $1+\\delta$ melebihi satu, sehingga hipotesis kontraksi gagal. Perubahan langkah kecil di awal tidak boleh dipakai sebagai sertifikat galat.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
