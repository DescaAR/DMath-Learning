import type { BookLessonContent } from "@/data/book-content-types";

/** Rigorous, original bisection lesson. Burden–Faires (2011); Atkinson (1989). */
export const bisectionContent:BookLessonContent = {
  "intro": [
    "Metode bagi dua (bisection) tidak menebak akar melalui bentuk grafik semata. Metode ini mempertahankan sebuah interval tertutup yang ujung-ujungnya mempunyai nilai fungsi dengan tanda berlawanan. Kontinuitas menjamin bahwa di dalam interval tersebut terdapat akar. Setelah interval dibelah, satu dari dua bagiannya tetap memiliki perubahan tanda; bagian itulah yang dipertahankan.",
    "Perbedaan mendasar antara metode ini dan metode Newton adalah jenis jaminannya. Bisection mempunyai jaminan keberadaan akar dan batas galat yang dapat dihitung sebelum komputasi, tetapi memerlukan interval awal yang memenuhi syarat. Perubahan tanda merupakan syarat cukup untuk keberadaan akar fungsi kontinu, bukan syarat perlu: fungsi $f(x)=(x-1)^2$ mempunyai akar $x=1$ walaupun tidak berubah tanda.",
    "Tuliskan $I_0=[a_0,b_0]$ dengan $a_0<b_0$ dan $f(a_0)f(b_0)<0$. Pada tahap $n$, titik tengahnya $m_n=(a_n+b_n)/2$. Bila $f(m_n)=0$, perhitungan selesai secara eksak. Bila tidak, pilih salah satu dari $[a_n,m_n]$ dan $[m_n,b_n]$ yang ujung-ujungnya masih berlainan tanda. Semua pernyataan galat di bawah merujuk pada aritmetika real eksak; komputasi floating-point memerlukan perhatian tambahan terhadap pembulatan.",
    "Visualisasi interaktif menampilkan grafik, interval aktif, titik tengah, nilai fungsi pada ujung interval, dan panjang interval setelah setiap langkah. Empat fungsi disediakan untuk membandingkan kasus dengan perubahan tanda, akar tepat pada titik tengah, serta akar tanpa perubahan tanda. Rujukan: R. L. Burden dan J. D. Faires, Numerical Analysis, edisi ke-9 (2011), bagian metode bisection; K. E. Atkinson, An Introduction to Numerical Analysis, edisi ke-2 (1989), bab pencarian akar."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Interval Pengurung Akar",
      "statement": "Misalkan $f:[a,b]\\to\\mathbb R$ kontinu dan $a<b$. Interval $[a,b]$ disebut interval pengurung dengan perubahan tanda apabila $f(a)f(b)<0$. Dengan Teorema Nilai Antara, terdapat sekurang-kurangnya satu $p\\in(a,b)$ dengan $f(p)=0$. Istilah ini tidak menyatakan bahwa akar tersebut tunggal.",
      "explanation": "Tanda yang berbeda memberikan jaminan eksistensi, sedangkan keunikan memerlukan asumsi lain."
    },
    {
      "kind": "definition",
      "title": "Titik Tengah dan Langkah Bisection",
      "statement": "Untuk $a_n<b_n$ yang memenuhi $f(a_n)f(b_n)<0$, tetapkan $m_n=(a_n+b_n)/2$. Jika $f(m_n)=0$, $m_n$ adalah akar. Jika $f(a_n)f(m_n)<0$, ambil $[a_{n+1},b_{n+1}]=[a_n,m_n]$; selain itu ambil $[a_{n+1},b_{n+1}]=[m_n,b_n]$. Kasus terakhir sah karena $f(m_n)\\ne0$ dan tanda $f(m_n)$ berlawanan dengan $f(b_n)$.",
      "explanation": "Setiap langkah mempertahankan satu subinterval, bukan kedua-duanya."
    },
    {
      "kind": "definition",
      "title": "Galat Titik Tengah dan Batas A Priori",
      "statement": "Jika $p\\in[a_n,b_n]$ merupakan suatu akar, aproksimasi titik tengah $m_n=(a_n+b_n)/2$ mempunyai galat absolut $|m_n-p|$. Batas galat a priori yang hanya menggunakan geometri interval ialah $|m_n-p|\\le(b_n-a_n)/2$. Nilai ini tidak membutuhkan pengetahuan tentang posisi akar sebenarnya.",
      "explanation": "Batas ini valid untuk setiap akar di dalam interval aktif, walaupun terdapat lebih dari satu akar."
    },
    {
      "kind": "definition",
      "title": "Residual dan Batas A Posteriori",
      "statement": "Untuk pendekatan $x$ terhadap akar $p$ dari $f$, residual adalah $r=f(x)$. Residual kecil tidak dengan sendirinya menjamin $|x-p|$ kecil. Jika $f$ terdiferensialkan pada interval yang memuat $x,p$ dan terdapat $c>0$ sehingga $|f'(t)|\\ge c$ di seluruh interval, maka $|x-p|\\le |f(x)|/c$.",
      "explanation": "Turunan yang mendekati nol dapat membuat residual tampak kecil walaupun kesalahan posisi besar."
    },
    {
      "kind": "theorem",
      "title": "Keberadaan Akar dari Perubahan Tanda",
      "statement": "Misalkan $f:[a,b]\\to\\mathbb R$ kontinu, $a<b$, dan $f(a)f(b)<0$. Maka terdapat $p\\in(a,b)$ sehingga $f(p)=0$. Pernyataan tidak menjamin keunikan akar.",
      "proof": [
        "Karena hasil kali $f(a)f(b)$ negatif, kedua nilai tidak nol dan memiliki tanda berlawanan. Tanpa mengurangi keumuman, misalkan $f(a)<0<f(b)$; jika tanda terbalik, argumen yang sama berlaku dengan pertukaran arah ketaksamaan.",
        "Bilangan nol terletak di antara $f(a)$ dan $f(b)$. Kontinuitas $f$ pada seluruh interval tertutup $[a,b]$ memenuhi hipotesis Teorema Nilai Antara.",
        "Teorema Nilai Antara memberikan suatu $p\\in[a,b]$ dengan $f(p)=0$. Karena $f(a)$ dan $f(b)$ keduanya tidak nol, titik $p$ tidak mungkin sama dengan $a$ ataupun $b$.",
        "Jadi $p\\in(a,b)$. Teorema ini tidak melarang akar lain di dalam interval; contoh $f(x)=x(x^2-1)$ pada $[-2,2]$ memiliki tiga akar meskipun nilai di ujung berlainan tanda. $\\square$"
      ],
      "explanation": "Kontinuitas dan perubahan tanda cukup untuk menjamin akar, tetapi tidak untuk menjamin akar tunggal."
    },
    {
      "kind": "lemma",
      "title": "Invarian Perubahan Tanda pada Setiap Langkah",
      "statement": "Misalkan $f$ kontinu pada $[a_0,b_0]$ dan $f(a_0)f(b_0)<0$. Selama titik tengah bukan akar eksak, bisection menghasilkan interval bersarang $[a_{n+1},b_{n+1}]\\subset[a_n,b_n]$ dengan $f(a_{n+1})f(b_{n+1})<0$.",
      "proof": [
        "Asumsikan pada langkah $n$ telah tersedia $f(a_n)f(b_n)<0$ dan $a_n<b_n$. Titik tengah $m_n$ berada ketat di antara kedua ujung karena $m_n-a_n=b_n-m_n=(b_n-a_n)/2>0$.",
        "Jika $f(m_n)=0$, akar telah ditemukan dan tidak perlu memilih interval baru. Untuk langkah yang berlanjut, $f(m_n)\\ne0$ sehingga tanda nilai tengah terdefinisi.",
        "Apabila $f(a_n)f(m_n)<0$, interval kiri memenuhi syarat. Jika tidak, $f(a_n)$ dan $f(m_n)$ bertanda sama, sehingga karena $f(a_n)$ berlawanan tanda dengan $f(b_n)$, nilai $f(m_n)$ berlawanan tanda dengan $f(b_n)$; interval kanan memenuhi syarat.",
        "Dalam kedua kasus, interval baru merupakan salah satu setengah interval lama, tetap tertutup, dan mempertahankan perubahan tanda. Induksi dari $n=0$ membuktikan pernyataan untuk setiap langkah yang dijalankan. $\\square$"
      ],
      "explanation": "Invarian adalah alasan formal bahwa akar tidak hilang ketika separuh interval dibuang."
    },
    {
      "kind": "proposition",
      "title": "Penyusutan Panjang Interval dan Batas Galat",
      "statement": "Selama $n$ langkah pembagian berlangsung tanpa menemukan akar eksak, panjang interval memenuhi $b_n-a_n=(b_0-a_0)/2^n$. Untuk setiap akar $p\\in[a_n,b_n]$ dan titik tengah $m_n$, berlaku $|p-m_n|\\le(b_0-a_0)/2^{n+1}$.",
      "proof": [
        "Pada setiap langkah yang berlanjut, interval baru adalah salah satu setengah interval sebelumnya. Oleh karena itu $b_{k+1}-a_{k+1}=(b_k-a_k)/2$.",
        "Untuk $n=0$, rumus panjang interval jelas benar. Jika benar untuk $n=k$, maka panjang pada langkah $k+1$ adalah $(b_0-a_0)/2^{k+1}$. Induksi memberikan rumus untuk semua $n$ yang dicapai.",
        "Karena $m_n$ titik tengah $[a_n,b_n]$ dan $p$ terletak dalam interval yang sama, jarak maksimum $|p-m_n|$ terjadi jika $p$ berada di salah satu ujung, yakni tidak lebih dari $(b_n-a_n)/2$.",
        "Substitusi rumus panjang interval menghasilkan $|p-m_n|\\le(b_0-a_0)/2^{n+1}$. Batas ini tidak mengasumsikan akar tunggal dan tidak memakai nilai turunan. $\\square$"
      ],
      "explanation": "Satu pembagian mengurangi panjang interval dan batas galat titik tengah menjadi setengahnya."
    },
    {
      "kind": "theorem",
      "title": "Konvergensi Metode Bisection",
      "statement": "Jika $f:[a_0,b_0]\\to\\mathbb R$ kontinu dan $f(a_0)f(b_0)<0$, maka algoritma bisection menemukan akar pada suatu langkah atau menghasilkan barisan titik tengah $m_n$ yang konvergen ke suatu $p\\in[a_0,b_0]$ dengan $f(p)=0$.",
      "proof": [
        "Jika terdapat $n$ dengan $f(m_n)=0$, algoritma telah menemukan akar dan kesimpulan pertama berlaku. Selanjutnya andaikan tidak ada titik tengah yang merupakan akar, sehingga semua interval $I_n=[a_n,b_n]$ terdefinisi.",
        "Menurut lemma invarian, $I_{n+1}\\subseteq I_n$, semuanya tidak kosong dan tertutup. Menurut proposisi panjang interval, $\\operatorname{diam}(I_n)=(b_0-a_0)/2^n\\to0$. Sifat kelengkapan bilangan real (teorema interval bersarang) memberi satu titik $p$ dalam irisan seluruh $I_n$.",
        "Karena $a_n\\le p\\le b_n$ dan $b_n-a_n\\to0$, diperoleh $a_n\\to p$, $b_n\\to p$, serta $|m_n-p|\\le(b_n-a_n)/2\\to0$. Jadi titik tengah konvergen ke $p$.",
        "Kontinuitas $f$ memberikan $f(a_n)\\to f(p)$ dan $f(b_n)\\to f(p)$. Tetapi untuk semua $n$ berlaku $f(a_n)f(b_n)<0$. Jika $f(p)>0$, akhirnya kedua nilai ujung positif; jika $f(p)<0$, akhirnya keduanya negatif. Keduanya bertentangan dengan perubahan tanda. Maka $f(p)=0$. $\\square$"
      ],
      "explanation": "Konvergensi tidak memerlukan diferensiabilitas; hanya kontinuitas, perubahan tanda, dan kelengkapan bilangan real."
    },
    {
      "kind": "corollary",
      "title": "Jumlah Pembagian untuk Toleransi Galat",
      "statement": "Misalkan $L=b_0-a_0>0$ dan toleransi $\\varepsilon>0$. Agar titik tengah interval setelah $n$ pembagian memenuhi batas galat $|m_n-p|\\le\\varepsilon$, cukup memilih bilangan bulat $n\\ge\\max\\{0,\\lceil\\log_2(L/(2\\varepsilon))\\rceil\\}$. Jika akar ditemukan lebih dahulu, galatnya nol.",
      "proof": [
        "Proposisi penyusutan memberikan batas $|m_n-p|\\le L/2^{n+1}$ untuk setiap akar yang masih berada dalam interval setelah $n$ pembagian.",
        "Agar batas tersebut tidak melebihi $\\varepsilon$, cukup meminta $L/2^{n+1}\\le\\varepsilon$. Karena $L,\\varepsilon>0$, ketaksamaan ekuivalen dengan $2^n\\ge L/(2\\varepsilon)$.",
        "Fungsi logaritma basis dua meningkat, sehingga syarat menjadi $n\\ge\\log_2(L/(2\\varepsilon))$. Karena $n$ bilangan bulat taknegatif, pembulatan ke atas dan maksimum dengan nol menghasilkan rumus yang dinyatakan.",
        "Jika suatu titik tengah merupakan akar eksak, algoritma berhenti dan tidak perlu mencapai banyak pembagian tersebut. Rumus adalah jaminan terburuk berdasarkan panjang interval, bukan prediksi jumlah langkah aktual. $\\square$"
      ],
      "explanation": "Perhatikan indeks: setelah n pembagian, galat titik tengah interval terakhir dibatasi oleh L/2^(n+1)."
    },
    {
      "kind": "proposition",
      "title": "Keunikan Akar di Bawah Monotonisitas Ketat",
      "statement": "Jika $f$ kontinu pada $[a,b]$, $f(a)f(b)<0$, dan $f$ monoton ketat pada $[a,b]$, maka terdapat tepat satu akar $p\\in(a,b)$. Tanpa monotonisitas ketat, perubahan tanda saja tidak menjamin ketunggalan.",
      "proof": [
        "Dari kontinuitas dan perubahan tanda, Teorema Nilai Antara menjamin paling sedikit satu akar $p\\in(a,b)$.",
        "Andaikan terdapat dua akar berbeda $p,q\\in(a,b)$ dengan $p<q$. Karena $f$ monoton ketat, berlaku $f(p)<f(q)$ jika $f$ meningkat ketat, atau $f(p)>f(q)$ jika $f$ menurun ketat.",
        "Namun keduanya akar, sehingga $f(p)=f(q)=0$. Kedua ketaksamaan ketat tersebut mustahil. Jadi tidak dapat terdapat dua akar berbeda.",
        "Keberadaan dan paling banyak satu akar bersama-sama memberikan tepat satu akar. Sebagai pembanding, fungsi $x(x^2-1)$ berubah tanda pada $[-2,2]$ tetapi tidak monoton dan memiliki tiga akar. $\\square$"
      ],
      "explanation": "Pembedaan eksistensi dan keunikan penting ketika hasil numerik akan ditafsirkan sebagai satu-satunya solusi."
    },
    {
      "kind": "proposition",
      "title": "Batas Galat dari Residual dan Turunan",
      "statement": "Misalkan $f$ kontinu pada $[a,b]$, terdiferensialkan pada $(a,b)$, dan $p\\in[a,b]$ memenuhi $f(p)=0$. Jika $|f'(t)|\\ge c>0$ untuk setiap $t\\in(a,b)$, maka untuk semua $x\\in[a,b]$ berlaku $|x-p|\\le |f(x)|/c$.",
      "proof": [
        "Untuk $x=p$, kedua ruas bernilai nol sehingga kesimpulan langsung benar. Ambil $x\\ne p$. Interval tertutup dengan ujung $x,p$ termuat dalam $[a,b]$, dan $f$ memenuhi syarat Teorema Nilai Rata-rata pada interval tersebut.",
        "Teorema Nilai Rata-rata memberikan suatu $\\xi$ di antara $x$ dan $p$ dengan $f(x)-f(p)=f'(\\xi)(x-p)$.",
        "Karena $f(p)=0$, mengambil nilai mutlak menghasilkan $|f(x)|=|f'(\\xi)|\\,|x-p|$. Hipotesis $|f'(\\xi)|\\ge c$ memberikan $|f(x)|\\ge c|x-p|$.",
        "Pembagian dengan $c>0$ menghasilkan $|x-p|\\le |f(x)|/c$. Tanpa batas bawah turunan, residual kecil tidak cukup: $f(x)=10^{-8}(x-100)$ memiliki residual kecil pada $x=0$ tetapi galat posisi sebesar 100. $\\square$"
      ],
      "explanation": "Batas a posteriori memerlukan informasi tambahan tentang sensitivitas fungsi; jangan menyamakan residual dengan galat."
    }
  ],
  "examples": [
    {
      "forDefinition": "Interval Pengurung Akar",
      "title": "Memeriksa Syarat Perubahan Tanda",
      "problem": "Tentukan apakah $[1,2]$ mengurung akar $f(x)=x^2-2$, dan apakah $[0,2]$ merupakan interval pengurung dengan perubahan tanda untuk $g(x)=(x-1)^2$.",
      "solution": [
        "Fungsi polinomial kontinu pada setiap interval tertutup. Untuk $f$, diperoleh $f(1)=-1$ dan $f(2)=2$, sehingga $f(1)f(2)=-2<0$.",
        "Teorema Nilai Antara menjamin suatu akar $p\\in(1,2)$. Bahkan $f$ meningkat ketat pada $[1,2]$, sehingga akar tersebut tunggal.",
        "Untuk $g$, diperoleh $g(0)=g(2)=1$, sehingga hasil kali positif. Meskipun demikian $g(1)=0$. Jadi syarat perubahan tanda cukup tetapi tidak perlu."
      ],
      "conclusion": "Interval pertama sah untuk bisection; interval kedua memuat akar tetapi tidak memenuhi syarat awal standar."
    },
    {
      "forDefinition": "Titik Tengah dan Langkah Bisection",
      "title": "Tiga Langkah untuk Akar Dua",
      "problem": "Lakukan tiga pembagian interval $[1,2]$ untuk $f(x)=x^2-2$; nyatakan interval hasil setiap langkah.",
      "solution": [
        "Langkah pertama: $m_0=3/2$ dan $f(m_0)=1/4>0$, sedangkan $f(1)=-1<0$. Pertahankan $[1,3/2]$.",
        "Langkah kedua: $m_1=5/4$ dan $f(m_1)=25/16-2=-7/16<0$. Pertahankan $[5/4,3/2]$.",
        "Langkah ketiga: $m_2=11/8$ dan $f(m_2)=121/64-2=-7/64<0$. Pertahankan $[11/8,3/2]$.",
        "Panjang interval terakhir $3/2-11/8=1/8$. Titik tengah interval hasil adalah $23/16=1.4375$."
      ],
      "conclusion": "Tiga pembagian menghasilkan interval [1.375,1.5], dengan akar tetap berada di dalamnya."
    },
    {
      "forDefinition": "Galat Titik Tengah dan Batas A Priori",
      "title": "Menghitung Galat Tanpa Mengetahui Akar",
      "problem": "Setelah tiga pembagian pada $f(x)=x^2-2$ dari $[1,2]$, berapa batas galat titik tengah interval aktif?",
      "solution": [
        "Panjang interval awal $L=2-1=1$. Setelah $n=3$ pembagian, panjang interval $L/2^3=1/8$.",
        "Titik tengah interval aktif adalah $m_3=(11/8+3/2)/2=23/16$. Karena akar berada di dalam interval, jaraknya ke titik tengah tidak melebihi setengah panjang interval.",
        "Jadi $|m_3-\\sqrt2|\\le(1/8)/2=1/16=0.0625$. Perhitungan ini tidak menggunakan nilai desimal $\\sqrt2$."
      ],
      "conclusion": "Batas galat bersifat terjamin meskipun akar eksak belum dihitung."
    },
    {
      "forDefinition": "Residual dan Batas A Posteriori",
      "title": "Residual untuk Akar Dua",
      "problem": "Gunakan $x=1.4$ sebagai pendekatan akar $f(t)=t^2-2$ pada $[1,2]$. Hitung residual dan batas galat dari turunan.",
      "solution": [
        "Residual $f(1.4)=1.96-2=-0.04$, sehingga $|f(1.4)|=0.04$.",
        "Untuk $t\\in[1,2]$, turunan $f'(t)=2t$ memenuhi $|f'(t)|\\ge2$. Karena akar $\\sqrt2$ berada pada interval tersebut, teorema residual berlaku dengan $c=2$.",
        "Diperoleh $|1.4-\\sqrt2|\\le0.04/2=0.02$. Batas ini memanfaatkan struktur fungsi dan lebih tajam daripada batas interval yang sangat lebar."
      ],
      "conclusion": "Residual tidak sama dengan galat; diperlukan batas bawah turunan untuk menghubungkannya."
    },
    {
      "title": "Bisection pada Fungsi Kubik",
      "problem": "Lakukan dua pembagian untuk $f(x)=x^3-x-2$ dari interval $[1,2]$.",
      "solution": [
        "Nilai ujung $f(1)=-2$ dan $f(2)=4$ berbeda tanda. Karena polinomial kontinu, akar berada dalam $(1,2)$.",
        "Titik tengah pertama $m_0=1.5$ menghasilkan $f(1.5)=3.375-1.5-2=-0.125$, sehingga interval baru $[1.5,2]$.",
        "Titik tengah kedua $m_1=1.75$ menghasilkan $f(1.75)=5.359375-1.75-2=1.609375$, sehingga interval baru $[1.5,1.75]$.",
        "Titik tengah interval akhir $1.625$ mempunyai batas galat paling besar $(1.75-1.5)/2=0.125$."
      ],
      "conclusion": "Akar tetap terkurung meskipun kedua titik tengah belum menghasilkan nilai nol."
    },
    {
      "title": "Toleransi dan Banyak Pembagian",
      "problem": "Dari interval awal $[1,2]$, tentukan banyak pembagian yang cukup agar galat titik tengah interval akhir paling besar $10^{-3}$.",
      "solution": [
        "Lebar awal $L=1$ dan toleransi $\\varepsilon=0.001$. Rumus a priori meminta $n\\ge\\lceil\\log_2(1/(2\\cdot0.001))\\rceil=\\lceil\\log_2(500)\\rceil$.",
        "Karena $2^8=256<500<512=2^9$, diperoleh $n=9$ pembagian.",
        "Setelah sembilan pembagian, lebar interval $1/512$ dan batas galat titik tengah $1/1024\\approx0.0009765625<0.001$."
      ],
      "conclusion": "Sembilan pembagian cukup menurut jaminan terburuk."
    },
    {
      "title": "Keunikan Tidak Mengikuti Perubahan Tanda",
      "problem": "Periksa apakah $f(x)=x(x-1)(x+1)$ pada $[-2,2]$ mempunyai tepat satu akar hanya karena perubahan tanda.",
      "solution": [
        "Diperoleh $f(-2)=(-2)(-3)(-1)=-6$ dan $f(2)=2\\cdot1\\cdot3=6$, sehingga terdapat perubahan tanda.",
        "Akan tetapi $f(-1)=f(0)=f(1)=0$. Jadi terdapat sedikitnya tiga akar berbeda pada interval tersebut.",
        "Teorema Nilai Antara hanya menyatakan eksistensi; fungsi ini tidak monoton ketat pada seluruh interval, sehingga teorema ketunggalan tidak berlaku."
      ],
      "conclusion": "Perubahan tanda menjamin sekurang-kurangnya satu akar, bukan satu-satunya akar."
    },
    {
      "title": "Akar Tepat pada Titik Tengah",
      "problem": "Jalankan bisection untuk $f(x)=x-1$ pada $[0,2]$. Berapa langkah yang diperlukan dan apa galatnya?",
      "solution": [
        "Fungsi kontinu dan $f(0)=-1$, $f(2)=1$, sehingga syarat interval awal dipenuhi.",
        "Titik tengah pertama $m_0=(0+2)/2=1$. Evaluasi memberikan $f(m_0)=0$.",
        "Karena nilai fungsi tepat nol, algoritma berhenti tanpa memilih setengah interval berikutnya. Galat absolut $|m_0-1|=0$, bukan sekadar dibatasi oleh panjang interval."
      ],
      "conclusion": "Kriteria akar eksak harus diperiksa sebelum memilih setengah interval."
    }
  ],
  "exercises": [
    {
      "prompt": "Buktikan bahwa bisection pada $f(x)=x^2-3$ dengan interval awal $[1,2]$ dapat dijalankan dan tentukan dua interval pertama setelah pembagian. Sertakan evaluasi nilai fungsi di setiap titik tengah.",
      "hint": "Periksa tanda ujung, lalu titik tengah $3/2$ dan titik tengah interval hasil.",
      "answer": "Karena $f$ polinomial, $f$ kontinu pada $[1,2]$. Diperoleh $f(1)=-2$ dan $f(2)=1$, sehingga perubahan tanda terjamin. Titik tengah pertama $m_0=3/2$ memberikan $f(m_0)=9/4-3=-3/4<0$, maka interval pertama $[3/2,2]$. Titik tengah berikutnya $m_1=7/4$ memberikan $f(m_1)=49/16-3=1/16>0$, sehingga interval kedua $[3/2,7/4]$. Nilai ujung interval terakhir bertanda berlawanan, jadi akar $\\sqrt3$ masih berada di dalamnya. Batas galat titik tengah interval terakhir ialah $(7/4-3/2)/2=1/8$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Dari interval $[0,4]$ yang memenuhi syarat perubahan tanda, tentukan jumlah pembagian minimal yang dijamin cukup untuk batas galat titik tengah paling besar $10^{-4}$. Jelaskan indeks yang digunakan.",
      "hint": "Gunakan $L/2^{n+1}\\le\\varepsilon$, dengan n banyak pembagian yang sudah selesai.",
      "answer": "Panjang awal adalah $L=4$. Sesudah $n$ pembagian, interval aktif mempunyai lebar $4/2^n$, sehingga titik tengah interval itu berjarak paling besar $4/2^{n+1}$ dari setiap akar di dalamnya. Kita memerlukan $4/2^{n+1}\\le10^{-4}$, setara dengan $2^n\\ge4/(2\\cdot10^{-4})=20000$. Karena $2^{14}=16384<20000$ dan $2^{15}=32768>20000$, bilangan bulat terkecil yang memenuhi syarat ialah $n=15$. Jadi lima belas pembagian cukup; ini tidak menyatakan bahwa algoritma pasti membutuhkan sebanyak itu jika akar ditemukan lebih dahulu.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Jelaskan mengapa $f(x)=(x-2)^2$ mempunyai akar pada $[1,3]$ tetapi bisection standar tidak boleh langsung mengklaim syarat perubahan tanda terpenuhi.",
      "hint": "Hitung nilai di kedua ujung dan di x=2.",
      "answer": "Fungsi polinomial $f(x)=(x-2)^2$ kontinu pada $[1,3]$. Nilai pada ujung kiri $f(1)=1$ dan ujung kanan $f(3)=1$, sehingga $f(1)f(3)=1>0$. Hipotesis perubahan tanda $f(a)f(b)<0$ tidak terpenuhi. Namun $f(2)=0$, sehingga interval tersebut memang memuat akar. Tidak ada kontradiksi: Teorema Nilai Antara dalam bentuk perubahan tanda memberikan syarat cukup, bukan syarat perlu. Kita boleh mengetahui akar melalui analisis aljabar, tetapi tidak boleh memakai jaminan invarian bisection tanpa memeriksa hipotesisnya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa jika $f$ kontinu dan monoton ketat pada $[a,b]$ dengan $f(a)f(b)<0$, bisection tidak dapat kehilangan akar tunggal ketika membuang setengah interval.",
      "hint": "Gabungkan Teorema Nilai Antara, ketunggalan, dan invarian tanda.",
      "answer": "Dari perubahan tanda dan kontinuitas diperoleh setidaknya satu akar $p\\in(a,b)$. Monotonisitas ketat melarang dua titik berbeda mempunyai nilai fungsi sama, sehingga akar itu tunggal. Pada setiap langkah yang tidak menemukan akar tepat di titik tengah, salah satu setengah interval tetap mempunyai nilai ujung berlainan tanda. Teorema Nilai Antara menjamin adanya akar di setengah interval terpilih. Karena pada seluruh interval awal hanya ada satu akar, akar pada interval terpilih haruslah $p$ yang sama. Induksi menunjukkan $p$ selalu berada dalam interval aktif. Dengan demikian membuang separuh lainnya tidak pernah membuang akar tunggal tersebut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk $f(x)=x^3-2$, gunakan interval $[1,2]$ dan lakukan tiga pembagian bisection. Tulis seluruh titik tengah, tanda, dan interval hasil.",
      "hint": "Titik tengah pertama 1.5, berikutnya 1.25, lalu 1.375.",
      "answer": "Nilai ujung $f(1)=-1$ dan $f(2)=6$, sehingga interval awal sah. Langkah pertama: $m_0=1.5$, $f(m_0)=3.375-2=1.375>0$; interval menjadi $[1,1.5]$. Langkah kedua: $m_1=1.25$, $f(m_1)=1.953125-2=-0.046875<0$; interval menjadi $[1.25,1.5]$. Langkah ketiga: $m_2=1.375$, $f(m_2)=2.599609375-2=0.599609375>0$; interval menjadi $[1.25,1.375]$. Lebar interval akhir adalah $0.125$, sehingga titik tengah $1.3125$ memiliki batas galat paling besar $0.0625$ terhadap akar yang terkurung.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Untuk $f(x)=x^2-5$ pada $[2,3]$, gunakan titik pendekatan $x=2.2$. Turunkan batas galat posisi dari residual dan bandingkan dengan galat absolut yang sebenarnya secara simbolik.",
      "hint": "Pada [2,3], turunan 2x paling kecil 4.",
      "answer": "Fungsi $f(x)=x^2-5$ mempunyai akar $p=\\sqrt5\\in(2,3)$ karena $f(2)=-1$ dan $f(3)=4$. Pada titik $x=2.2$, residual $f(2.2)=4.84-5=-0.16$, sehingga besarnya $0.16$. Turunan $f'(t)=2t$ memenuhi $|f'(t)|\\ge4$ untuk $t\\in[2,3]$. Teorema Nilai Rata-rata memberikan $|2.2-\\sqrt5|\\le0.16/4=0.04$. Galat sebenarnya ialah $\\sqrt5-2.2$ karena $\\sqrt5>2.2$; nilainya sekitar $0.0360679$, yang memang lebih kecil daripada $0.04$. Kesimpulan ini memakai batas turunan, bukan asumsi bahwa residual sama dengan galat.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Berikan contoh fungsi kontinu dengan perubahan tanda pada interval tertutup tetapi mempunyai lebih dari satu akar. Jelaskan secara matematis mengapa jaminan bisection tetap sah.",
      "hint": "Gunakan fungsi kubik dengan tiga akar berbeda.",
      "answer": "Ambil $f(x)=x(x-1)(x+1)$ pada $[-2,2]$. Karena polinomial, fungsi kontinu. Nilai $f(-2)=-6$ dan $f(2)=6$ mempunyai tanda berlawanan. Namun $f(-1)=f(0)=f(1)=0$, sehingga ada tiga akar berbeda. Bisection tetap sah karena invarian perubahan tanda menjamin bahwa pada setiap langkah yang berlanjut, setengah interval terpilih memuat setidaknya satu akar. Teorema konvergensi memastikan titik tengah menuju suatu akar, tetapi tidak menjanjikan bahwa semua akar ditemukan atau bahwa akar yang ditemukan selalu sama untuk setiap interval awal. Keunikan baru dapat disimpulkan dari hipotesis tambahan, misalnya monotonisitas ketat.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Analisis perbedaan antara berhenti karena $|f(m_n)|<10^{-6}$ dan berhenti karena batas interval $(b_n-a_n)/2<10^{-6}$. Berikan fungsi konkret yang menunjukkan residual kecil bisa menyesatkan.",
      "hint": "Pertimbangkan fungsi dengan kemiringan sangat kecil.",
      "answer": "Kriteria batas interval bersifat geometris: jika interval aktif masih mengurung akar, maka titik tengah berjarak paling besar setengah lebar interval dari suatu akar. Sebaliknya, kriteria residual hanya mengatakan nilai fungsi kecil, tidak langsung mengendalikan posisi akar. Ambil $f(x)=10^{-8}(x-100)$ dengan akar tunggal $p=100$. Pada $x=0$ residual $|f(0)|=10^{-6}$, dan pada $x=1$ residual $9.9\\cdot10^{-7}<10^{-6}$ meskipun galat posisi $|1-100|=99$. Jika diketahui batas bawah turunan $c=10^{-8}$, estimasi residual memberi $|x-p|\\le|f(x)|/c$, yang tidak kecil. Karena itu kriteria residual perlu digabung dengan informasi conditioning atau jaminan pengurungan.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
