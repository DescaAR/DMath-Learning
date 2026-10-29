import type { BookLessonContent } from "@/data/book-content-types";

/** Optimisasi satu variabel; pembuktian dan soal ditulis mandiri. */
export const optimizationContent: BookLessonContent = {
  "intro": [
    "Optimisasi satu variabel tidak dimulai dengan menyamakan turunan dengan nol. Pertama-tama harus ditetapkan himpunan nilai yang diizinkan oleh kendala, kemudian dibedakan antara titik yang hanya stasioner dan titik yang benar-benar memberikan nilai terbaik pada seluruh himpunan tersebut.",
    "Misalnya, fungsi keuntungan $P(x)=x(6-x)$ untuk $0\\le x\\le6$ mencapai maksimum di $x=3$. Persamaan $P'(x)=0$ menghasilkan kandidat itu, tetapi klaim maksimum global memerlukan pemeriksaan batas domain atau argumen konkavitas. Jika domain berubah, jawabannya dapat berubah meskipun rumus fungsi sama.",
    "Pembahasan berikut membangun definisi daerah layak, ekstrem lokal dan global, titik stasioner, dan kekonveksan. Teorema keberadaan ekstrem, syarat Fermat, teorema nilai rata-rata, serta karakterisasi garis singgung pendukung dipakai untuk menjustifikasi setiap langkah penyelesaian, termasuk kasus ujung interval dan titik tak terdiferensialkan.",
    "Rujukan konsep: OpenStax, Calculus Volume 1, bagian Maximum and Minimum Values dan Applied Optimization Problems; Rockafellar, Convex Analysis (1970), bagian dasar fungsi konveks. Semua contoh dan pembuktian di sini ditulis secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Himpunan Layak dan Fungsi Tujuan",
      "statement": "Suatu masalah optimisasi satu variabel terdiri atas himpunan layak $D\\subseteq\\mathbb R$ yang takkosong dan fungsi tujuan $f:D\\to\\mathbb R$. Masalah minimisasi mencari $x^*\\in D$ dengan $f(x^*)\\le f(x)$ untuk setiap $x\\in D$; masalah maksimisasi membalik ketaksamaan tersebut.",
      "explanation": "Kendala menentukan $D$ sebelum proses diferensiasi. Nilai $x$ di luar $D$ tidak dapat menjadi solusi, walaupun memberikan nilai fungsi yang lebih baik."
    },
    {
      "kind": "definition",
      "title": "Ekstrem Global dan Lokal",
      "statement": "Untuk $f:D\\to\\mathbb R$, titik $x^*\\in D$ adalah minimum global jika $f(x^*)\\le f(x)$ bagi semua $x\\in D$, dan maksimum global jika $f(x^*)\\ge f(x)$ bagi semua $x\\in D$. Minimum lokal relatif terhadap $D$ berarti terdapat $\\delta>0$ sehingga $f(x^*)\\le f(x)$ untuk semua $x\\in D\\cap(x^*-\\delta,x^*+\\delta)$; maksimum lokal didefinisikan analog.",
      "explanation": "Kata lokal selalu relatif terhadap himpunan layak. Ujung interval dapat menjadi ekstrem lokal meskipun tidak ada lingkungan dua sisi yang sepenuhnya berada dalam domain."
    },
    {
      "kind": "definition",
      "title": "Titik Stasioner",
      "statement": "Jika $f$ terdiferensialkan pada suatu titik interior $c$ dari domainnya, maka $c$ disebut titik stasioner apabila $f'(c)=0$. Titik stasioner merupakan kandidat ekstrem, bukan jaminan ekstrem.",
      "explanation": "Titik tempat turunan tidak ada perlu diperiksa tersendiri. Titik ujung interval juga tidak tercakup oleh definisi stasioner interior."
    },
    {
      "kind": "definition",
      "title": "Fungsi Konveks dan Konveks Ketat",
      "statement": "Fungsi $f:I\\to\\mathbb R$ pada interval $I$ disebut konveks jika untuk semua $x,y\\in I$ dan $t\\in[0,1]$ berlaku $f((1-t)x+ty)\\le(1-t)f(x)+tf(y)$. Disebut konveks ketat jika ketaksamaan bersifat ketat untuk $x\\ne y$ dan $0<t<1$.",
      "explanation": "Kekonveksan membatasi bentuk grafik: ruas tali busur berada pada atau di atas grafik. Konveks ketat memastikan bahwa dua titik berbeda tidak dapat sama-sama menjadi minimizer global."
    },
    {
      "kind": "theorem",
      "title": "Keberadaan Nilai Maksimum dan Minimum pada Interval Tertutup",
      "statement": "Jika $a<b$ dan $f:[a,b]\\to\\mathbb R$ kontinu, maka terdapat $u,v\\in[a,b]$ sehingga $f(u)\\le f(x)\\le f(v)$ untuk setiap $x\\in[a,b]$.",
      "proof": [
        "Karena $[a,b]$ terbatas dan tertutup, setiap barisan di dalamnya mempunyai subbarisan yang konvergen ke titik di $[a,b]$ (teorema Bolzano–Weierstrass). Andaikan $f$ tidak terbatas di atas. Untuk tiap $n\\in\\mathbb N$, pilih $x_n\\in[a,b]$ dengan $f(x_n)>n$. Ada subbarisan $x_{n_k}\\to v\\in[a,b]$; kontinuitas memberi $f(x_{n_k})\\to f(v)\\in\\mathbb R$, bertentangan dengan $f(x_{n_k})>n_k\\to\\infty$. Jadi $M=\\sup f([a,b])$ berhingga.",
        "Dari definisi supremum, untuk setiap $n\\ge1$ terdapat $y_n\\in[a,b]$ dengan $M-1/n<f(y_n)\\le M$. Ambil subbarisan $y_{n_k}\\to v\\in[a,b]$. Kontinuitas memberi $f(v)=\\lim_k f(y_{n_k})=M$, sehingga maksimum dicapai.",
        "Terapkan argumen yang sama pada fungsi kontinu $-f$ untuk memperoleh maksimum $-f$ pada suatu $u\\in[a,b]$. Ini ekuivalen dengan $f(u)=\\inf f([a,b])$. Maka kedua ekstrem global ada. $\\square$"
      ],
      "explanation": "Kekompakan domain dan kontinuitas adalah syarat cukup keberadaan; interval terbuka tidak menjamin ekstrem dicapai."
    },
    {
      "kind": "theorem",
      "title": "Syarat Perlu Fermat untuk Ekstrem Interior",
      "statement": "Misalkan $c$ titik interior domain $D$, fungsi $f$ terdiferensialkan di $c$, dan $c$ merupakan ekstrem lokal relatif terhadap $D$. Maka $f'(c)=0$.",
      "proof": [
        "Misalkan $c$ minimum lokal. Karena $c$ interior, terdapat $\\delta>0$ dengan $(c-\\delta,c+\\delta)\\subseteq D$ dan $f(c+h)\\ge f(c)$ untuk semua $|h|$ cukup kecil. Untuk $h>0$ hasil bagi $[f(c+h)-f(c)]/h\\ge0$, sedangkan untuk $h<0$ hasil bagi yang sama $\\le0$.",
        "Turunan dua sisi ada menurut hipotesis. Limit dari kanan harus nonnegatif dan limit dari kiri harus nonpositif. Karena keduanya sama dengan $f'(c)$, diperoleh $0\\le f'(c)\\le0$, sehingga $f'(c)=0$.",
        "Untuk maksimum lokal, semua tanda ketaksamaan dibalik dan kesimpulan tetap $f'(c)=0$. Syarat ini tidak berlaku untuk titik ujung yang bukan interior maupun titik tempat turunan tidak ada. $\\square$"
      ],
      "explanation": "Persamaan turunan nol hanya syarat perlu bagi ekstrem interior terdiferensialkan; contoh $x^3$ menunjukkan syarat ini tidak cukup."
    },
    {
      "kind": "proposition",
      "title": "Tanda Turunan dan Monotonisitas",
      "statement": "Jika $f$ kontinu pada $[a,b]$ dan terdiferensialkan pada $(a,b)$, serta $f'(x)\\ge0$ untuk setiap $x\\in(a,b)$, maka $f$ tidak menurun pada $[a,b]$. Jika $f'(x)>0$ di setiap titik interior, maka $f$ naik ketat.",
      "proof": [
        "Ambil sebarang $u,v\\in[a,b]$ dengan $u<v$. Pembatasan $f$ ke $[u,v]$ kontinu dan terdiferensialkan pada $(u,v)$, sehingga Teorema Nilai Rata-Rata menghasilkan $c\\in(u,v)$ dengan $f(v)-f(u)=f'(c)(v-u)$.",
        "Karena $v-u>0$, jika $f'(c)\\ge0$ maka $f(v)\\ge f(u)$; jika $f'(c)>0$ maka $f(v)>f(u)$. Pilihan $u,v$ sebarang, jadi sifat monoton berlaku pada seluruh interval. $\\square$"
      ],
      "explanation": "Tanda turunan di sepanjang interval, bukan sekadar pada satu titik, menentukan arah perubahan fungsi."
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Garis Singgung Pendukung bagi Fungsi Konveks",
      "statement": "Misalkan $I$ interval terbuka dan $f:I\\to\\mathbb R$ terdiferensialkan. Maka $f$ konveks pada $I$ jika dan hanya jika $f(y)\\ge f(x)+f'(x)(y-x)$ untuk setiap $x,y\\in I$.",
      "proof": [
        "($\\Rightarrow$) Anggap $f$ konveks. Untuk $x<y$ dan $0<t<1$, kekonveksan pada titik $x+t(y-x)$ memberi $f(x+t(y-x))\\le(1-t)f(x)+tf(y)$. Setelah mengurangkan $f(x)$ dan membagi $t(y-x)>0$, diperoleh $[f(x+t(y-x))-f(x)]/[t(y-x)]\\le[f(y)-f(x)]/(y-x)$. Dengan $t\\downarrow0$, ruas kiri menuju $f'(x)$; kalikan dengan $y-x>0$ untuk mendapat $f(y)\\ge f(x)+f'(x)(y-x)$. Untuk $y<x$, terapkan kekonveksan pada $x+t(y-x)$; pembagian oleh $t(y-x)<0$ membalik ketaksamaan dan limit kembali menghasilkan pernyataan yang sama. Kasus $x=y$ adalah kesamaan.",
        "($\\Leftarrow$) Andaikan ketaksamaan garis singgung berlaku bagi setiap pasangan. Ambil $x,y\\in I$, $t\\in[0,1]$, dan $z=(1-t)x+ty\\in I$. Ketaksamaan dengan titik dasar $z$ memberi $f(x)\\ge f(z)+f'(z)(x-z)$ dan $f(y)\\ge f(z)+f'(z)(y-z)$. Kalikan masing-masing dengan $1-t$ dan $t$, kemudian jumlahkan. Suku turunan hilang karena $(1-t)(x-z)+t(y-z)=0$. Akibatnya $(1-t)f(x)+tf(y)\\ge f(z)$, yaitu definisi konveks. Kedua arah terbukti. $\\square$"
      ],
      "explanation": "Ketaksamaan ini sekaligus memberi sertifikat minimum global: bila $f'(x^*)=0$, maka $f(y)\\ge f(x^*)$ untuk setiap $y\\in I$."
    },
    {
      "kind": "theorem",
      "title": "Ketunggalan Minimum untuk Fungsi Konveks Ketat",
      "statement": "Misalkan $D$ interval dan $f:D\\to\\mathbb R$ konveks ketat. Jika $f$ mencapai minimum global pada $D$, maka titik minimumnya tunggal.",
      "proof": [
        "Andaikan terdapat dua minimizer berbeda $u,v\\in D$, $u\\ne v$, dengan $f(u)=f(v)=m=\\min_{x\\in D}f(x)$. Karena $D$ interval, titik tengah $w=(u+v)/2$ juga berada dalam $D$.",
        "Konveks ketat dengan $t=1/2$ menghasilkan $f(w)<[f(u)+f(v)]/2=m$. Namun definisi minimum global menuntut $f(w)\\ge m$. Kontradiksi ini membuktikan bahwa tidak mungkin ada dua minimizer berbeda. $\\square$"
      ],
      "explanation": "Teorema ini menjamin ketunggalan, bukan keberadaan: pada interval terbuka fungsi konveks ketat dapat mempunyai infimum yang tidak dicapai."
    },
    {
      "kind": "corollary",
      "title": "Kandidat Ekstrem Global pada Interval Tertutup",
      "statement": "Jika $f$ kontinu pada $[a,b]$ dan terdiferensialkan pada $(a,b)$, maka setiap titik tempat maksimum atau minimum global dicapai adalah $a$, $b$, atau titik interior $c$ dengan $f'(c)=0$.",
      "proof": [
        "Teorema keberadaan menjamin bahwa maksimum dan minimum dicapai di suatu titik $x^*\\in[a,b]$. Jika $x^*=a$ atau $x^*=b$, titik tersebut sudah tercantum sebagai kandidat ujung.",
        "Jika $x^*\\in(a,b)$, ekstrem global juga merupakan ekstrem lokal, dan $f$ terdiferensialkan di sana. Dengan syarat perlu Fermat, $f'(x^*)=0$. Jadi setiap ekstrem global termasuk himpunan kandidat yang dinyatakan. $\\square$"
      ],
      "explanation": "Untuk fungsi yang tidak terdiferensialkan pada beberapa titik interior, titik tersebut harus ditambahkan ke daftar kandidat sebelum membandingkan nilai fungsi."
    }
  ],
  "examples": [
    {
      "title": "Menentukan Daerah Layak",
      "problem": "Tentukan himpunan layak bagi $x\\ge0$, $2x\\le8$, dan jelaskan mengapa $x=5$ tidak dapat dipilih.",
      "solution": [
        "Dari $2x\\le8$ dan pembagian dengan bilangan positif $2$ diperoleh $x\\le4$. Irisan dengan syarat $x\\ge0$ adalah $D=[0,4]$.",
        "Nilai $x=5$ memenuhi $x\\ge0$, tetapi menghasilkan $2x=10>8$. Karena melanggar salah satu kendala, titik tersebut tidak layak walaupun fungsi tujuan mungkin bernilai besar di sana.",
        "Sebagai verifikasi, kedua ujung $0$ dan $4$ memenuhi semua kendala, dan setiap titik di antaranya juga memenuhi ketaksamaan linear tersebut."
      ],
      "conclusion": "Himpunan layaknya tepat $[0,4]$; optimisasi harus dilakukan pada interval ini.",
      "forDefinition": "Himpunan Layak dan Fungsi Tujuan"
    },
    {
      "title": "Ekstrem Lokal dan Global pada Interval",
      "problem": "Untuk $f(x)=(x-2)^2+1$ dan $D=[0,4]$, tentukan ekstrem global dan nilai pada kedua ujung.",
      "solution": [
        "Karena $(x-2)^2\\ge0$, untuk semua $x\\in[0,4]$ berlaku $f(x)\\ge1$. Kesamaan terjadi tepat ketika $x=2$, yang berada di dalam daerah layak. Maka $x=2$ adalah minimizer global tunggal.",
        "Untuk $x\\in[0,4]$ berlaku $|x-2|\\le2$, sehingga $(x-2)^2\\le4$ dan $f(x)\\le5$. Kesamaan dicapai pada $x=0$ dan $x=4$.",
        "Kedua ujung juga merupakan maksimum lokal relatif terhadap $D$: nilai fungsi di titik-titik layak yang cukup dekat dengan ujung tidak melebihi nilai ujung tersebut."
      ],
      "conclusion": "Minimum global $1$ di $x=2$; maksimum global $5$ di $x=0$ dan $x=4$.",
      "forDefinition": "Ekstrem Global dan Lokal"
    },
    {
      "title": "Stasioner Tidak Berarti Ekstrem",
      "problem": "Periksa apakah titik stasioner $f(x)=x^3$ di $x=0$ merupakan ekstrem lokal.",
      "solution": [
        "Turunannya adalah $f'(x)=3x^2$, sehingga $f'(0)=0$ dan $0$ memang titik stasioner. Ini hanya memenuhi syarat perlu Fermat, bukan syarat cukup.",
        "Untuk setiap $\\varepsilon>0$, pilih $t>0$ yang lebih kecil dari $\\varepsilon$. Maka $f(-t)=-t^3<0=f(0)<t^3=f(t)$. Jadi pada setiap lingkungan nol ada nilai fungsi yang lebih kecil dan lebih besar daripada $f(0)$.",
        "Karena kedua jenis nilai selalu ada di sekitar nol, definisi minimum lokal maupun maksimum lokal tidak terpenuhi."
      ],
      "conclusion": "Titik $0$ stasioner, tetapi bukan ekstrem lokal.",
      "forDefinition": "Titik Stasioner"
    },
    {
      "title": "Menguji Konveksitas Kuadrat",
      "problem": "Buktikan bahwa $f(x)=x^2$ konveks ketat pada $\\mathbb R$.",
      "solution": [
        "Ambil $x\\ne y$ dan $0<t<1$. Kembangkan kuadrat: $((1-t)x+ty)^2=(1-t)x^2+ty^2-t(1-t)(x-y)^2$.",
        "Karena $t(1-t)>0$ dan $(x-y)^2>0$, suku yang dikurangkan positif. Dengan demikian $f((1-t)x+ty)<(1-t)f(x)+tf(y)$.",
        "Argumen berlaku untuk semua pasangan titik berbeda dan semua bobot interior, tepat seperti definisi konveks ketat."
      ],
      "conclusion": "Fungsi kuadrat konveks ketat pada seluruh garis real.",
      "forDefinition": "Fungsi Konveks dan Konveks Ketat"
    },
    {
      "title": "Maksimum Keuntungan Kuadratik",
      "problem": "Maksimumkan $P(x)=x(6-x)$ untuk $0\\le x\\le6$.",
      "solution": [
        "Fungsi $P(x)=6x-x^2$ kontinu pada interval kompak $[0,6]$, sehingga maksimum global ada. Turunannya $P'(x)=6-2x$; satu-satunya titik stasioner interior adalah $x=3$.",
        "Nilai kandidat adalah $P(0)=0$, $P(3)=9$, dan $P(6)=0$. Perbandingan ketiganya memberi nilai maksimum $9$ pada $x=3$.",
        "Sebagai verifikasi independen, $P(x)=9-(x-3)^2\\le9$ untuk semua $x$; kesamaan hanya ketika $x=3$. Jadi tidak ada titik layak lain dengan nilai lebih besar."
      ],
      "conclusion": "Maksimum global $9$ dicapai tepat pada $x=3$."
    },
    {
      "title": "Optimum pada Ujung Tanpa Turunan Nol",
      "problem": "Tentukan minimum dan maksimum $f(x)=x$ pada $[0,2]$.",
      "solution": [
        "Fungsi kontinu pada $[0,2]$ dan terdiferensialkan di interior, dengan $f'(x)=1$ untuk semua $x\\in(0,2)$. Tidak ada titik stasioner interior.",
        "Karena $f'(x)>0$, teorema monotonisitas menyatakan $f$ naik ketat. Maka nilai terkecil berada pada ujung kiri dan terbesar pada ujung kanan.",
        "Evaluasi langsung memberi $f(0)=0$ dan $f(2)=2$. Kedua titik memenuhi domain dan setiap $x\\in[0,2]$ memenuhi $0\\le f(x)\\le2$."
      ],
      "conclusion": "Minimum $0$ di $x=0$ dan maksimum $2$ di $x=2$, walaupun tidak ada titik stasioner."
    },
    {
      "title": "Luas Persegi Panjang dengan Keliling Tetap",
      "problem": "Persegi panjang mempunyai keliling $20$. Tentukan luas maksimum dan ukurannya.",
      "solution": [
        "Misalkan panjang sisi $x>0$ dan $y>0$. Kendala keliling $2x+2y=20$ setara dengan $y=10-x$, sehingga daerah layak untuk bentuk takdegenerat adalah $0<x<10$.",
        "Luas sebagai fungsi satu variabel ialah $A(x)=x(10-x)=25-(x-5)^2$. Karena kuadrat tidak negatif, $A(x)\\le25$ untuk setiap $x$ yang layak.",
        "Kesamaan terjadi tepat pada $x=5$; saat itu $y=10-5=5>0$, jadi kandidat memenuhi semua kendala. Walaupun domain terbuka, maksimum ini tetap dicapai; luas mendekati nol pada kedua ujung tanpa mencapai nol selama kedua sisi positif."
      ],
      "conclusion": "Luas maksimum $25$ satuan luas, dicapai oleh persegi $5\\times5$."
    },
    {
      "title": "Titik Tak Terdiferensialkan sebagai Kandidat",
      "problem": "Tentukan ekstrem global $f(x)=|x|$ pada $[-1,2]$.",
      "solution": [
        "Fungsi nilai mutlak kontinu pada interval tertutup sehingga kedua ekstrem global ada. Untuk $x<0$, $f'(x)=-1$; untuk $x>0$, $f'(x)=1$. Pada $x=0$ turunan dua sisi tidak ada, sehingga titik tersebut tidak boleh diabaikan.",
        "Kandidat yang harus dibandingkan adalah kedua ujung $-1,2$ dan titik interior tak terdiferensialkan $0$. Nilainya $f(-1)=1$, $f(0)=0$, dan $f(2)=2$.",
        "Untuk setiap $x\\in[-1,2]$ berlaku $0\\le|x|\\le2$. Kesamaan bawah terjadi hanya pada nol dan kesamaan atas hanya pada dua, sehingga daftar kandidat telah menghasilkan ekstrem global."
      ],
      "conclusion": "Minimum global $0$ di $x=0$ dan maksimum global $2$ di $x=2$."
    }
  ],
  "exercises": [
    {
      "prompt": "Tentukan semua titik maksimum dan minimum global $f(x)=x^3-3x$ pada $[-2,2]$.",
      "hint": "Turunkan, periksa kedua titik stasioner dan kedua ujung, kemudian cari semua titik yang mencapai nilai ekstrem.",
      "answer": "Diketahui $f$ polinomial, maka kontinu pada $[-2,2]$ dan terdiferensialkan di interior. Turunannya $f'(x)=3x^2-3=3(x-1)(x+1)$, sehingga titik stasioner interior adalah $x=-1$ dan $x=1$. Menurut teorema kandidat ekstrem, kita harus membandingkan keempat titik $-2,-1,1,2$. Perhitungannya: $f(-2)=-8+6=-2$, $f(-1)=-1+3=2$, $f(1)=1-3=-2$, dan $f(2)=8-6=2$. Karena semua kandidat telah diperiksa dan keberadaan ekstrem dijamin kekompakan, maksimum global adalah $2$ pada dua titik $x=-1$ dan $x=2$, sedangkan minimum global adalah $-2$ pada $x=-2$ dan $x=1$. Nilai yang sama di beberapa titik tidak melanggar teorema konveks ketat karena fungsi ini bukan konveks ketat pada interval tersebut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Optimalkan $f(x)=-x^2+4x+1$ pada $[0,5]$ dan verifikasi dengan melengkapi kuadrat.",
      "hint": "Cari titik stasioner, hitung nilai di ujung, lalu gunakan identitas kuadrat.",
      "answer": "Fungsi kontinu pada $[0,5]$, sehingga maksimum dan minimum global dicapai. Turunannya $f'(x)=-2x+4$ dan $f'(x)=0$ tepat ketika $x=2$, yang berada di interior. Nilai kandidat adalah $f(0)=1$, $f(2)=-4+8+1=5$, dan $f(5)=-25+20+1=-4$. Jadi maksimum global $5$ di $x=2$ dan minimum global $-4$ di $x=5$. Verifikasi maksimum: $f(x)=5-(x-2)^2\\le5$ dengan kesamaan hanya di $2$. Untuk minimum, karena $|x-2|\\le3$ pada $[0,5]$, berlaku $f(x)=5-(x-2)^2\\ge5-9=-4$; kesamaan hanya di $x=5$. Kedua batas terbukti tanpa mengandalkan gambar.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan bahwa $x=0$ stasioner bagi $f(x)=x^3$, tetapi bukan ekstrem lokal.",
      "hint": "Periksa tanda fungsi pada kedua sisi nol, bukan hanya tanda turunan di nol.",
      "answer": "Turunan $f'(x)=3x^2$ ada di seluruh $\\mathbb R$ dan $f'(0)=0$, sehingga nol adalah titik stasioner. Namun, untuk setiap radius lingkungan $\\delta>0$ kita dapat memilih $t=\\delta/2>0$. Titik $-t$ dan $t$ berada dalam lingkungan itu dan memenuhi $f(-t)=-t^3<0=f(0)<t^3=f(t)$. Definisi minimum lokal memerlukan semua nilai cukup dekat tidak lebih kecil daripada $f(0)$, yang dibantah oleh $-t$. Definisi maksimum lokal dibantah oleh $t$. Maka nol bukan ekstrem lokal meskipun syarat perlu Fermat terpenuhi; ini contoh bahwa kebalikan teorema Fermat salah.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan $f(x)=x^2+2x+2$ konveks ketat dan tentukan minimum globalnya pada $\\mathbb R$.",
      "hint": "Gunakan identitas selisih kuadrat atau bentuk kuadrat sempurna.",
      "answer": "Tuliskan $f(x)=(x+1)^2+1$. Untuk setiap $x,y\\in\\mathbb R$ dan $0<t<1$, selisih antara kombinasi nilai fungsi dan nilai pada kombinasi titik adalah $(1-t)f(x)+tf(y)-f((1-t)x+ty)=t(1-t)(x-y)^2$. Jika $x\\ne y$, selisih ini positif, sehingga fungsi konveks ketat menurut definisi. Selanjutnya $(x+1)^2\\ge0$ memberi $f(x)\\ge1$ untuk setiap real $x$, dan kesamaan terjadi tepat ketika $x=-1$. Maka minimum global $1$ dicapai di $-1$. Teorema ketunggalan minimum konveks ketat menjamin tidak ada minimizer lain; pemeriksaan kesamaan kuadrat juga memberi hasil yang sama.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Persegi panjang berkeliling $24$ dengan kedua sisi positif. Tentukan luas maksimum dan apakah luas minimum tercapai.",
      "hint": "Bedakan domain terbuka dari interval tertutup, lalu gunakan kuadrat sempurna.",
      "answer": "Misalkan kedua sisi $x>0$ dan $y>0$. Kendala $2(x+y)=24$ memberi $y=12-x$, sehingga $0<x<12$. Luas $A(x)=x(12-x)=36-(x-6)^2\\le36$; kesamaan tepat ketika $x=6$ dan $y=6$, yang keduanya positif. Jadi luas maksimum $36$ dicapai oleh persegi. Di sisi lain, setiap luas layak positif karena $x,y>0$, sehingga luas nol tidak tercapai. Namun untuk barisan $x_n=1/n$ dengan $n$ cukup besar, $y_n=12-1/n>0$ dan $A(x_n)=(1/n)(12-1/n)\\to0$. Dengan demikian infimum luas adalah $0$, tetapi tidak ada minimum global pada domain persegi panjang takdegenerat. Kasus ini menunjukkan pentingnya membedakan infimum dan minimum.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Minimalkan $C(x)=x+9/x$ pada $x>0$ dengan dua metode independen.",
      "hint": "Gunakan turunan dan ketaksamaan AM–GM, lalu verifikasi kesamaan.",
      "answer": "Untuk $x>0$, fungsi terdiferensialkan dan $C'(x)=1-9/x^2=(x-3)(x+3)/x^2$. Karena $x+3>0$ dan $x^2>0$, tanda turunan negatif untuk $0<x<3$ dan positif untuk $x>3$. Jadi fungsi turun menuju $x=3$ lalu naik, sehingga $x=3$ merupakan minimizer global. Nilainya $C(3)=3+3=6$. Secara independen, AM–GM untuk dua bilangan positif $x$ dan $9/x$ memberi $x+9/x\\ge2\\sqrt{x(9/x)}=6$. Kesamaan AM–GM terjadi tepat ketika $x=9/x$, yaitu $x^2=9$; syarat $x>0$ memilih $x=3$. Kedua metode menyatakan nilai minimum yang sama dan membuktikan bahwa tidak ada titik layak lain dengan nilai lebih kecil.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Buktikan ketaksamaan garis singgung $y^2\\ge x^2+2x(y-x)$ untuk semua $x,y\\in\\mathbb R$ dan tentukan kondisi kesamaan.",
      "hint": "Pindahkan semua suku ke satu ruas dan faktorkan kuadrat.",
      "answer": "Diketahui $f(t)=t^2$ terdiferensialkan dengan $f'(x)=2x$. Selisih antara ruas kiri dan ruas kanan adalah $y^2-x^2-2x(y-x)=y^2-2xy+x^2=(y-x)^2$. Karena kuadrat bilangan real selalu nonnegatif, selisih tersebut $\\ge0$ untuk semua pasangan $x,y$, sehingga ketaksamaan terbukti tanpa asumsi urutan $x$ dan $y$. Kesamaan berlaku jika dan hanya jika $(y-x)^2=0$, yakni $y=x$. Ini tepat ketaksamaan garis singgung pendukung untuk fungsi konveks $f(t)=t^2$; pada titik dasar $x=0$, misalnya, diperoleh $y^2\\ge0$ dengan kesamaan hanya pada $y=0$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Berikan contoh fungsi terdiferensialkan pada $[0,1]$ yang mencapai ekstrem global tetapi tidak mempunyai titik stasioner interior; jelaskan mengapa tidak bertentangan dengan Fermat.",
      "hint": "Perhatikan hipotesis titik interior pada teorema Fermat.",
      "answer": "Ambil $f(x)=x$ untuk $x\\in[0,1]$. Fungsi ini kontinu pada interval tertutup dan terdiferensialkan pada interval terbuka dengan $f'(x)=1$ untuk setiap $0<x<1$. Jadi tidak ada titik stasioner interior karena turunan tidak pernah nol. Akan tetapi, dari $0\\le x\\le1$ diperoleh $f(0)=0\\le f(x)\\le1=f(1)$, sehingga minimum global $0$ dicapai di ujung kiri dan maksimum global $1$ di ujung kanan. Teorema Fermat mensyaratkan ekstrem lokal pada titik interior yang terdiferensialkan; kedua ekstrem ini berada di ujung, sehingga hipotesis interior tidak terpenuhi. Contoh ini menunjukkan mengapa algoritma optimisasi pada interval tertutup wajib memeriksa ujungnya.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [
    "Menyimpulkan titik stasioner pasti maksimum atau minimum tanpa uji tanda, kekonveksan, atau pembandingan nilai.",
    "Melupakan titik ujung domain dan titik interior tempat turunan tidak ada.",
    "Menganggap infimum pada interval terbuka selalu dicapai.",
    "Menggunakan syarat Fermat pada ujung interval atau pada fungsi yang tidak terdiferensialkan."
  ],
  "connections": [
    "Teorema Nilai Rata-Rata dan kontinuitas memberi landasan bagi pengujian turunan.",
    "Kekonveksan menghubungkan optimisasi satu variabel dengan sertifikat optimalitas global.",
    "Optimisasi dengan kendala linear menjadi dasar model program linear dalam Riset Operasi."
  ]
};
