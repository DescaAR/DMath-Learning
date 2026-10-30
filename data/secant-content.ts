import type { BookLessonContent } from "@/data/book-content-types";

/** Authored secant method: precise hypotheses, exact error identities, and original solved exercises. */
export const secantContent: BookLessonContent =  {
  "intro": [
    "Metode secant mencari akar persamaan $f(x)=0$ tanpa menghitung turunan secara eksplisit. Dua titik terakhir, $(x_{n-1},f(x_{n-1}))$ dan $(x_n,f(x_n))$, dihubungkan oleh garis; perpotongan garis tersebut dengan sumbu horizontal menjadi pendekatan berikutnya. Berbeda dengan bisection, kedua titik tidak harus mengapit akar, sehingga iterasi dapat keluar dari interval awal atau bahkan tidak terdefinisi.",
    "Sebagai masalah konkret, kita akan menyelesaikan $x^2-2=0$ dengan titik awal $x_0=1$ dan $x_1=2$. Kedua nilai fungsi, $-1$ dan $2$, berbeda sehingga kemiringan secant terdefinisi. Iterasi menghasilkan $x_2=4/3$, $x_3=7/5$, dan $x_4=58/41$. Setiap nilai akan diperiksa melalui substitusi ke persamaan asli, bukan sekadar dinilai dari kecilnya selisih dua iterasi.",
    "Kedalaman matematis metode ini terletak pada hubungan antara kesalahan dua langkah sebelumnya dan kesalahan langkah berikutnya. Untuk model kuadratik lokal tertentu, hubungan itu dapat dibuktikan secara eksak; dari sana tampak mengapa secant biasanya lebih cepat daripada konvergensi linear tetapi memerlukan hipotesis lokal. Kegagalan penyebut nol, akar multipel, dan perbedaan residual dengan galat akar akan dibahas dengan contoh tandingan yang dapat dihitung.",
    "Rujukan: Richard L. Burden dan J. Douglas Faires, Numerical Analysis, edisi ke-9 (2011), bab solusi persamaan nonlinear; J. F. Traub, Iterative Methods for the Solution of Equations (1964), pembahasan metode dua titik. Hasil dan contoh berikut diturunkan langsung untuk hipotesis yang dinyatakan."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Kemiringan Secant dan Iterasi Dua Titik",
      "statement": "Untuk fungsi $f$ dan dua pendekatan berbeda $x_{n-1}\\ne x_n$ dengan $f(x_n)\\ne f(x_{n-1})$, metode secant mendefinisikan $x_{n+1}=x_n-\\dfrac{f(x_n)(x_n-x_{n-1})}{f(x_n)-f(x_{n-1})}$. Pembagian mensyaratkan penyebut taknol; jika kedua nilai fungsi sama, iterasi ini tidak didefinisikan."
    },
    {
      "kind": "definition",
      "title": "Selisih Terbagi Orde Satu",
      "statement": "Untuk $u\\ne v$, selisih terbagi pertama fungsi $f$ didefinisikan sebagai $f[u,v]=\\dfrac{f(u)-f(v)}{u-v}$. Jika $f[u,v]\\ne0$, langkah secant dapat ditulis $x_{n+1}=x_n-\\dfrac{f(x_n)}{f[x_{n-1},x_n]}$. Nilai ini merupakan kemiringan garis interpolasi linear melalui kedua titik data."
    },
    {
      "kind": "definition",
      "title": "Akar Sederhana dan Galat Iterasi",
      "statement": "Bilangan $r$ disebut akar sederhana dari fungsi terdiferensialkan $f$ jika $f(r)=0$ dan $f'(r)\\ne0$. Jika iterasi $x_n$ mendekati $r$, galat bertanda didefinisikan $e_n=x_n-r$, sedangkan galat absolutnya $|e_n|$. Nilai $e_n$ umumnya tidak diketahui dalam komputasi karena $r$ belum diketahui."
    },
    {
      "kind": "definition",
      "title": "Residual dan Sertifikat Galat",
      "statement": "Residual pendekatan $x$ untuk $f(x)=0$ adalah $f(x)$, sedangkan galat akarnya adalah $x-r$. Residual kecil sendiri tidak menjamin galat akar kecil tanpa informasi tentang sensitivitas $f$. Batas $|f'(t)|\\ge m>0$ pada interval antara $x$ dan akar $r$ memberi sertifikat $|x-r|\\le |f(x)|/m$."
    },
    {
      "kind": "proposition",
      "title": "Secant Merupakan Akar Interpolan Linear",
      "statement": "Misalkan $u\\ne v$ dan $f(u)\\ne f(v)$. Garis yang menginterpolasi data $(u,f(u))$ dan $(v,f(v))$ mempunyai tepat satu akar, yaitu $z=v-f(v)(v-u)/(f(v)-f(u))$. Dengan demikian rumus secant adalah akar interpolan linear pada dua titik terakhir.",
      "proof": [
        "Diketahui $u\\ne v$ dan $f(u)\\ne f(v)$. Garis interpolasi linear dapat ditulis $\\ell(x)=f(v)+\\dfrac{f(v)-f(u)}{v-u}(x-v)$. Kemiringannya taknol karena pembilang dan penyebut taknol.",
        "Untuk mencari perpotongan dengan sumbu horizontal, tetapkan $\\ell(z)=0$. Maka $\\dfrac{f(v)-f(u)}{v-u}(z-v)=-f(v)$ dan $z=v-\\dfrac{f(v)(v-u)}{f(v)-f(u)}$. Karena kemiringan $\\ell$ taknol, persamaan linear $\\ell(z)=0$ mempunyai tepat satu solusi.",
        "Mengganti $u=x_{n-1}$ dan $v=x_n$ menghasilkan rumus iterasi secant. Dengan demikian rumus diperoleh dari interpolasi, bukan dari anggapan bahwa garis secant sama dengan kurva asli. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Ketepatan Satu Langkah untuk Fungsi Afine",
      "statement": "Jika $f(x)=ax+b$ dengan $a\\ne0$, maka untuk sebarang $x_0\\ne x_1$ iterasi secant pertama terdefinisi dan menghasilkan akar eksak $r=-b/a$.",
      "proof": [
        "Diketahui $a\\ne0$ dan $x_0\\ne x_1$. Selisih nilai fungsi adalah $f(x_1)-f(x_0)=a(x_1-x_0)\\ne0$, sehingga penyebut rumus secant sah.",
        "Substitusi ke rumus memberi $x_2=x_1-\\dfrac{(ax_1+b)(x_1-x_0)}{a(x_1-x_0)}=x_1-\\dfrac{ax_1+b}{a}=-b/a$.",
        "Verifikasi langsung menunjukkan $f(x_2)=a(-b/a)+b=0$. Jadi pada aritmetika eksak, satu langkah secant cukup untuk fungsi afine dengan kemiringan taknol. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Identitas Galat Eksak pada Model Kuadratik",
      "statement": "Misalkan $f(x)=c(x-r)(1+a(x-r))$, dengan $c\\ne0$, dan $e_k=x_k-r$. Jika $x_n\\ne x_{n-1}$ serta $1+a(e_n+e_{n-1})\\ne0$, iterasi secant terdefinisi dan memenuhi $e_{n+1}=\\dfrac{a e_n e_{n-1}}{1+a(e_n+e_{n-1})}$.",
      "proof": [
        "Diketahui $f(r+e)=ce(1+ae)$. Dengan mengurangkan dua nilai fungsi, diperoleh $f(x_n)-f(x_{n-1})=c(e_n-e_{n-1})[1+a(e_n+e_{n-1})]$. Kedua faktor terakhir taknol menurut hipotesis, sehingga penyebut iterasi sah.",
        "Substitusikan ke rumus secant dan gunakan $x_n-x_{n-1}=e_n-e_{n-1}$. Hasilnya $e_{n+1}=e_n-\\dfrac{ce_n(1+ae_n)(e_n-e_{n-1})}{c(e_n-e_{n-1})[1+a(e_n+e_{n-1})]}$.",
        "Setelah membatalkan faktor yang taknol, $e_{n+1}=e_n\\left(1-\\dfrac{1+ae_n}{1+a(e_n+e_{n-1})}\\right)=\\dfrac{ae_ne_{n-1}}{1+a(e_n+e_{n-1})}$. Identitas ini eksak untuk model yang dinyatakan, bukan pendekatan asimtotik. $\\square$"
      ],
      "explanation": "Jika $a=0$, fungsi menjadi afine dan galat berikutnya nol. Jika $a\\ne0$ dan galat kecil, pembilang berupa produk dua galat sebelumnya; inilah mekanisme percepatan lokal secant."
    },
    {
      "kind": "theorem",
      "title": "Konvergensi Lokal Model Kuadratik dengan Batas Eksplisit",
      "statement": "Untuk $f(x)=c(x-r)(1+a(x-r))$ dengan $c\\ne0$ dan $a\\ne0$, ambil $\\delta>0$ sehingga $2|a|\\delta<1$ dan $q=|a|\\delta/(1-2|a|\\delta)<1$. Jika dua galat awal berbeda, $|e_0|,|e_1|\\le\\delta$, dan iterasi belum tepat mencapai akar, maka semua langkah secant berikut terdefinisi, $|e_n|\\le\\delta$, dan $e_n\\to0$.",
      "proof": [
        "Diketahui $|e_0|,|e_1|\\le\\delta$ dan $2|a|\\delta<1$. Untuk dua galat yang berada dalam interval tersebut, $|1+a(e_n+e_{n-1})|\\ge1-|a|(|e_n|+|e_{n-1}|)\\ge1-2|a|\\delta>0$.",
        "Menurut identitas galat, $|e_{n+1}|\\le\\dfrac{|a||e_n||e_{n-1}|}{1-2|a|\\delta}\\le q|e_n|$ karena $|e_{n-1}|\\le\\delta$. Karena $0<q<1$, diperoleh $|e_{n+1}|\\le q\\delta<\\delta$; induksi menjaga kedua galat dalam interval yang sama.",
        "Periksa keterdefinisian iterasi secara induktif. Pada pasangan awal, $x_0\\ne x_1$. Jika pasangan $(x_{n-1},x_n)$ berbeda dan tidak ada akar yang telah dicapai, selisih fungsi adalah $c(e_n-e_{n-1})[1+a(e_n+e_{n-1})]\\ne0$. Rumus secant memberi $x_{n+1}-x_n=-f(x_n)(x_n-x_{n-1})/[f(x_n)-f(x_{n-1})]$. Karena $|ae_n|\\le|a|\\delta<1$, berlaku $f(x_n)=ce_n(1+ae_n)\\ne0$ untuk $e_n\\ne0$; jadi $x_{n+1}\\ne x_n$. Dengan demikian langkah berikutnya juga sah. Jika $e_n=0$, akar telah ditemukan dan proses berhenti. Pada proses yang tidak berhenti, $|e_{n+1}|\\le q|e_n|$ menghasilkan $|e_n|\\le q^{n-1}|e_1|\\to0$. Maka iterasi konvergen ke $r$. $\\square$"
      ],
      "explanation": "Teorema ini hanya menyatakan konvergensi lokal untuk model kuadratik yang tertulis. Ia tidak menyatakan bahwa setiap fungsi terdiferensialkan atau setiap dua titik awal pasti menghasilkan konvergensi."
    },
    {
      "kind": "proposition",
      "title": "Sertifikat Galat dari Residual",
      "statement": "Misalkan $f$ kontinu pada interval tertutup yang menghubungkan $x$ dan $r$, terdiferensialkan di interiornya, $f(r)=0$, serta $|f'(t)|\\ge m>0$ pada interior interval. Maka $|x-r|\\le |f(x)|/m$.",
      "proof": [
        "Diketahui hipotesis kontinuitas dan diferensiabilitas yang memungkinkan penerapan Teorema Nilai Rata-rata pada interval dengan ujung $x$ dan $r$. Jika $x=r$, kesimpulan langsung benar.",
        "Jika $x\\ne r$, terdapat $\\xi$ di antara kedua ujung sehingga $f(x)-f(r)=f'(\\xi)(x-r)$. Karena $f(r)=0$, pengambilan nilai mutlak menghasilkan $|f(x)|=|f'(\\xi)|\\,|x-r|$.",
        "Dari $|f'(\\xi)|\\ge m>0$ diperoleh $m|x-r|\\le|f(x)|$. Membagi dengan $m$ menghasilkan batas yang dinyatakan. Dengan demikian residual dapat digunakan sebagai sertifikat hanya ketika batas turunan tersebut telah diperiksa. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Invariansi terhadap Perkalian Fungsi dengan Konstanta Taknol",
      "statement": "Jika $g(x)=\\lambda f(x)$ untuk $\\lambda\\ne0$, maka dari pasangan titik awal yang sama, setiap langkah secant yang terdefinisi untuk $f$ menghasilkan pendekatan identik untuk $g$.",
      "proof": [
        "Diketahui $g(x)=\\lambda f(x)$ dengan $\\lambda\\ne0$. Selisih nilai $g(x_n)-g(x_{n-1})=\\lambda[f(x_n)-f(x_{n-1})]$, sehingga penyebut untuk $g$ taknol tepat ketika penyebut untuk $f$ taknol.",
        "Rumus secant bagi $g$ adalah $x_{n+1}=x_n-\\dfrac{\\lambda f(x_n)(x_n-x_{n-1})}{\\lambda[f(x_n)-f(x_{n-1})]}$. Faktor $\\lambda$ dapat dibatalkan karena taknol, dan diperoleh rumus secant untuk $f$.",
        "Dengan induksi dari dua titik awal yang sama, seluruh iterasi yang terdefinisi berimpit. Kesimpulan berlaku pada aritmetika eksak; pembulatan floating-point dapat menimbulkan perbedaan dalam implementasi. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Rumus Secant Dua Iterasi",
      "forDefinition": "Kemiringan Secant dan Iterasi Dua Titik",
      "problem": "Gunakan $f(x)=x^2-2$, $x_0=1$, dan $x_1=2$ untuk menghitung $x_2$ dan $x_3$ secara eksak.",
      "solution": [
        "Diketahui $f(1)=-1$ dan $f(2)=2$. Kedua titik awal berbeda dan penyebut $2-(-1)=3\\ne0$. Maka $x_2=2-\\dfrac{2(2-1)}{2-(-1)}=2-\\dfrac23=\\dfrac43$.",
        "Hitung $f(4/3)=16/9-2=-2/9$. Dengan pasangan $x_1=2$ dan $x_2=4/3$, diperoleh $x_3=\\dfrac43-\\dfrac{(-2/9)(4/3-2)}{-2/9-2}=\\dfrac43+\\dfrac1{15}=\\dfrac75$.",
        "Verifikasi: $f(7/5)=49/25-2=-1/25$, lebih kecil secara mutlak daripada $|f(4/3)|=2/9$. Residual berkurang pada contoh ini, tetapi sifat tersebut tidak boleh digeneralisasi tanpa hipotesis."
      ],
      "conclusion": "Dua pendekatan berikutnya adalah 4/3 dan 7/5, dengan residual berturut-turut -2/9 dan -1/25."
    },
    {
      "title": "Contoh Selisih Terbagi",
      "forDefinition": "Selisih Terbagi Orde Satu",
      "problem": "Tentukan $f[1,2]$ untuk $f(x)=x^2-2$ dan gunakan untuk menghitung langkah secant pertama.",
      "solution": [
        "Diketahui $u=1$, $v=2$, $f(1)=-1$, dan $f(2)=2$. Definisi selisih terbagi memberi $f[1,2]=\\dfrac{f(2)-f(1)}{2-1}=\\dfrac{2-(-1)}1=3$.",
        "Karena kemiringan $3\\ne0$, rumus selisih terbagi sah. Maka $x_2=2-f(2)/f[1,2]=2-2/3=4/3$.",
        "Pemeriksaan geometri: garis interpolan melalui $(1,-1)$ dan $(2,2)$ adalah $\\ell(x)=3x-4$. Akarnya $x=4/3$, sama dengan pendekatan secant."
      ],
      "conclusion": "Kemiringan secant adalah 3 dan akar garis interpolasinya 4/3."
    },
    {
      "title": "Contoh Akar Sederhana dan Multipel",
      "forDefinition": "Akar Sederhana dan Galat Iterasi",
      "problem": "Bandingkan akar $r=1$ dari $f(x)=x-1$ dan $h(x)=(x-1)^2$.",
      "solution": [
        "Diketahui kedua fungsi bernilai nol pada $r=1$. Turunan pertama $f'(x)=1$, sehingga $f'(1)=1\\ne0$ dan $r$ akar sederhana dari $f$.",
        "Untuk $h(x)=(x-1)^2$, turunannya $h'(x)=2(x-1)$ sehingga $h'(1)=0$. Karena syarat turunan taknol gagal, akar $r=1$ bukan akar sederhana dari $h$.",
        "Pada $x=1{,}1$, kedua galat akar sama-sama $0{,}1$, tetapi residual berbeda: $f(1{,}1)=0{,}1$ dan $h(1{,}1)=0{,}01$. Jadi residual kecil pada akar multipel dapat menyamarkan galat yang lebih besar."
      ],
      "conclusion": "Akar sederhana harus memenuhi f'(r) tidak nol; residual tidak boleh disamakan dengan galat akar."
    },
    {
      "title": "Contoh Residual dengan Batas Turunan",
      "forDefinition": "Residual dan Sertifikat Galat",
      "problem": "Untuk $f(x)=x^2-2$ dan $x=7/5$, berikan batas galat terhadap $\\sqrt2$ menggunakan Teorema Nilai Rata-rata.",
      "solution": [
        "Diketahui $r=\\sqrt2\\in[1,2]$ dan $x=7/5\\in[1,2]$. Fungsi kontinu dan terdiferensialkan pada interval ini, dengan $f'(t)=2t\\ge2$ untuk semua $t\\in[1,2]$. Maka $m=2$ memenuhi hipotesis sertifikat.",
        "Residual pada $x=7/5$ adalah $f(7/5)=49/25-2=-1/25$. Dari proposisi diperoleh $|7/5-\\sqrt2|\\le |f(7/5)|/2=1/50=0{,}02$.",
        "Nilai galat aktual sekitar $|1{,}4-1{,}41421356|=0{,}01421356$, sehingga berada di bawah batas. Kesimpulan memakai batas turunan, bukan sekadar dugaan dari residual."
      ],
      "conclusion": "Galat akar pada 7/5 paling besar 0,02, dan galat aktual sekitar 0,014214."
    },
    {
      "title": "Contoh Kegagalan Penyebut",
      "problem": "Jelaskan mengapa metode secant tidak dapat dimulai dari $x_0=-1$ dan $x_1=1$ untuk $f(x)=x^2-2$.",
      "solution": [
        "Diketahui kedua titik awal berbeda, tetapi $f(-1)=(-1)^2-2=-1$ dan $f(1)=1-2=-1$. Jadi nilai fungsi pada kedua titik sama.",
        "Penyebut rumus secant $f(1)-f(-1)=(-1)-(-1)=0$. Pembilangnya $f(1)(1-(-1))=-2\\ne0$, sehingga rumus meminta pembagian oleh nol dan tidak mendefinisikan $x_2$.",
        "Garis melalui kedua titik data mendatar pada ketinggian $-1$, sehingga tidak memotong sumbu horizontal. Mengganti nilai $x_2$ dengan salah satu titik awal bukan langkah secant yang sah."
      ],
      "conclusion": "Iterasi pertama tidak terdefinisi meskipun dua titik awal berbeda."
    },
    {
      "title": "Contoh Identitas Galat Kuadratik",
      "problem": "Untuk $f(x)=(x-1)(1+(x-1)/2)$, gunakan $x_0=1{,}1$ dan $x_1=0{,}9$ untuk menentukan $x_2$ tanpa pembulatan.",
      "solution": [
        "Diketahui $r=1$, $c=1$, $a=1/2$, $e_0=1/10$, dan $e_1=-1/10$. Dua titik awal berbeda. Faktor penyebut identitas galat adalah $1+a(e_1+e_0)=1$, sehingga taknol.",
        "Identitas eksak menghasilkan $e_2=\\dfrac{(1/2)(-1/10)(1/10)}1=-1/200$. Karena $x_2=r+e_2$, diperoleh $x_2=199/200=0{,}995$.",
        "Periksa langsung: $f(1{,}1)=(1/10)(21/20)=21/200$, sedangkan $f(0{,}9)=(-1/10)(19/20)=-19/200$. Rumus secant memberi $0{,}9-(-19/200)(-1/5)/(-1/5)=0{,}995$, sesuai identitas galat."
      ],
      "conclusion": "Langkah berikutnya adalah 199/200 dan galat bertandanya -1/200."
    },
    {
      "title": "Contoh Ketepatan Fungsi Afine",
      "problem": "Untuk $f(x)=3x-6$ dengan $x_0=0$ dan $x_1=3$, hitung langkah secant dan verifikasi.",
      "solution": [
        "Diketahui $f(0)=-6$ dan $f(3)=3$, sehingga selisih nilai fungsi $9\\ne0$ dan titik awal berbeda. Rumus secant dapat diterapkan.",
        "Diperoleh $x_2=3-\\dfrac{3(3-0)}{3-(-6)}=3-1=2$. Substitusi ke fungsi memberi $f(2)=3(2)-6=0$.",
        "Akar eksak fungsi afine tersebut memang $r=6/3=2$. Satu langkah cukup karena garis secant sama persis dengan grafik fungsi afine, bukan sekadar pendekatan lokal."
      ],
      "conclusion": "Secant mencapai akar eksak 2 dalam satu langkah."
    },
    {
      "title": "Contoh Langkah Secant dan Newton",
      "problem": "Bandingkan langkah pertama secant dari $1,2$ dan langkah Newton dari $x_0=1$ untuk $f(x)=x^2-2$.",
      "solution": [
        "Diketahui $f(1)=-1$, $f(2)=2$, dan $f'(1)=2$. Metode secant memakai dua titik, sedangkan Newton memakai satu titik beserta turunannya.",
        "Langkah secant adalah $x_2=2-\\dfrac{2(2-1)}{2-(-1)}=4/3$. Langkah Newton dari $1$ adalah $x_1^{(N)}=1-\\dfrac{-1}{2}=3/2$.",
        "Residualnya masing-masing $f(4/3)=-2/9$ dan $f(3/2)=1/4$. Secant memiliki residual lebih kecil pada perbandingan satu langkah ini, tetapi dua metode menggunakan informasi awal berbeda sehingga satu contoh tidak membuktikan keunggulan universal."
      ],
      "conclusion": "Secant menghasilkan 4/3 dan Newton menghasilkan 3/2; perbandingan biaya harus memperhitungkan evaluasi fungsi dan turunan."
    }
  ],
  "exercises": [
    {
      "prompt": "SC-01. Untuk $f(x)=x^2-2$, $x_0=1$, dan $x_1=2$, hitung tiga pendekatan secant berikutnya secara eksak, lalu verifikasi residual terakhir.",
      "hint": "Gunakan pecahan biasa dan jangan bulatkan sebelum langkah selesai.",
      "answer": "Diketahui $f(1)=-1$ dan $f(2)=2$, dengan penyebut awal $3\\ne0$. Iterasi pertama menghasilkan $x_2=2-2/3=4/3$. Nilai fungsi di titik ini adalah $f(4/3)=-2/9$. \\n\\nIterasi berikut memberi $x_3=4/3-\\dfrac{(-2/9)(4/3-2)}{-2/9-2}=7/5$, dengan $f(7/5)=-1/25$. Untuk langkah ketiga, $x_4=7/5-\\dfrac{(-1/25)(7/5-4/3)}{-1/25+2/9}=58/41$. \\n\\nVerifikasi residual terakhir: $f(58/41)=3364/1681-2=2/1681$, sehingga $|f(x_4)|\\approx0{,}001190$. Ketiga pendekatan $4/3$, $7/5$, dan $58/41$ diperoleh dari rumus yang terdefinisi pada setiap langkah."
    },
    {
      "prompt": "SC-02. Buktikan secant mencapai akar fungsi $f(x)=5x-15$ dari $x_0=-2$ dan $x_1=4$ dalam satu langkah.",
      "hint": "Periksa penyebut terlebih dahulu dan substitusikan hasilnya.",
      "answer": "Diketahui $f(-2)=-25$ dan $f(4)=5$. Titik awal berbeda dan selisih nilai fungsi $5-(-25)=30\\ne0$, sehingga langkah secant terdefinisi. \\n\\nRumusnya memberi $x_2=4-\\dfrac{5(4-(-2))}{5-(-25)}=4-\\dfrac{30}{30}=3$. Akar fungsi afine $5x-15=0$ juga $x=3$. \\n\\nVerifikasi: $f(3)=15-15=0$. Hasil ini bukan kebetulan numerik; interpolan linear sama dengan fungsi afine itu sendiri, sehingga secant tepat dalam satu langkah."
    },
    {
      "prompt": "SC-03. Untuk $f(x)=x^2-2$, jelaskan mengapa pasangan $x_0=-1$ dan $x_1=1$ gagal, lalu berikan pasangan lain yang sah.",
      "hint": "Syarat f(x1) berbeda dari f(x0) tidak otomatis mengikuti x1 berbeda dari x0.",
      "answer": "Diketahui $f(-1)=-1$ dan $f(1)=-1$. Walaupun $x_0\\ne x_1$, penyebut $f(1)-f(-1)=0$ sehingga rumus secant meminta pembagian oleh nol. Karena itu tidak ada nilai $x_2$ yang sah dari pasangan tersebut. \\n\\nSebagai pengganti, pilih $x_0=1$ dan $x_1=2$. Nilai fungsi $-1$ dan $2$ berbeda, sehingga penyebut $3\\ne0$. Iterasi sah dan menghasilkan $x_2=2-\\dfrac{2(2-1)}{3}=4/3$. \\n\\nVerifikasi $f(4/3)=-2/9$ menunjukkan pendekatan baru mempunyai residual terdefinisi. Contoh ini membedakan syarat dua absis berbeda dari syarat dua ordinat berbeda."
    },
    {
      "prompt": "SC-04. Turunkan identitas galat secant untuk $f(x)=c(x-r)(1+a(x-r))$, dengan semua syarat pembagian dinyatakan.",
      "hint": "Faktorkan f(xn)-f(xn-1) sebelum membagi.",
      "answer": "Diketahui $c\\ne0$, $e_k=x_k-r$, $x_n\\ne x_{n-1}$, dan $1+a(e_n+e_{n-1})\\ne0$. Karena $f(x_k)=ce_k(1+ae_k)$, selisih fungsi adalah $c(e_n-e_{n-1})[1+a(e_n+e_{n-1})]$. Semua faktor yang dibatalkan taknol oleh hipotesis. \\n\\nRumus secant memberi $e_{n+1}=e_n-\\dfrac{ce_n(1+ae_n)(e_n-e_{n-1})}{c(e_n-e_{n-1})[1+a(e_n+e_{n-1})]}$. Pembatalan faktor menghasilkan $e_n[1-(1+ae_n)/(1+a(e_n+e_{n-1}))]$. \\n\\nSederhanakan pembilang dalam kurung menjadi $ae_{n-1}$ dan peroleh $e_{n+1}=\\dfrac{ae_ne_{n-1}}{1+a(e_n+e_{n-1})}$. Identitas terbukti tepat, termasuk tanda galat, tanpa menggunakan aproksimasi Taylor."
    },
    {
      "prompt": "SC-05. Untuk $f(x)=x^2-2$ dan $x=7/5$, buktikan batas galat akar menggunakan residual pada interval $[1,2]$.",
      "hint": "Gunakan f'(t)=2t dan Teorema Nilai Rata-rata.",
      "answer": "Diketahui akar positif $r=\\sqrt2$ terletak di $[1,2]$ dan pendekatan $x=7/5$ juga di interval itu. Fungsi $f$ kontinu pada $[1,2]$ dan terdiferensialkan di interior; $f'(t)=2t\\ge2$ pada interval tersebut. \\n\\nTeorema Nilai Rata-rata memberi $f(x)-f(r)=f'(\\xi)(x-r)$ untuk suatu $\\xi$ di antara $x$ dan $r$. Karena $f(r)=0$ dan $|f'(\\xi)|\\ge2$, maka $|x-r|\\le|f(x)|/2$. \\n\\nHitung $f(7/5)=49/25-2=-1/25$. Maka $|7/5-\\sqrt2|\\le(1/25)/2=1/50=0{,}02$. Nilai aktual sekitar $0{,}014214$ memenuhi batas tersebut, sehingga kesimpulan didukung hipotesis turunan yang eksplisit."
    },
    {
      "prompt": "SC-06. Untuk $f(x)=(x-1)(1+(x-1)/2)$, $x_0=11/10$, dan $x_1=9/10$, tentukan galat $e_2$ dan verifikasi $x_2$.",
      "hint": "Gunakan identitas galat kuadratik dengan a=1/2.",
      "answer": "Diketahui akar $r=1$, $a=1/2$, $e_0=1/10$, dan $e_1=-1/10$. Faktor penyebut $1+a(e_1+e_0)=1$ taknol, sedangkan dua titik awal berbeda. \\n\\nIdentitas galat memberi $e_2=(1/2)(-1/10)(1/10)/1=-1/200$. Karena $x_2=r+e_2$, diperoleh $x_2=199/200=0{,}995$. \\n\\nVerifikasi dengan nilai fungsi: $f(11/10)=21/200$ dan $f(9/10)=-19/200$. Rumus secant menghasilkan $9/10-\\dfrac{(-19/200)(-1/5)}{-1/5}=199/200$. Kedua cara konsisten, sehingga galat bertanda $-1/200$ benar."
    },
    {
      "prompt": "SC-07. Untuk $f(x)=x^2-2$, bandingkan satu langkah secant dari $1,2$ dengan satu langkah Newton dari $1$; hitung residual masing-masing.",
      "hint": "Newton membutuhkan f'(1); secant membutuhkan f(1) dan f(2).",
      "answer": "Diketahui $f(1)=-1$, $f(2)=2$, dan $f'(1)=2$. Rumus secant dengan dua titik memberi $x_2=2-\\dfrac{2(2-1)}{2-(-1)}=4/3$. Rumus Newton dari $x_0=1$ memberi $x_1^{(N)}=1-\\dfrac{-1}{2}=3/2$. \\n\\nResidual secant $f(4/3)=16/9-2=-2/9$, sehingga nilai mutlaknya $2/9\\approx0{,}2222$. Residual Newton $f(3/2)=9/4-2=1/4=0{,}25$. \\n\\nPada data awal ini residual secant sedikit lebih kecil, tetapi secant memakai dua nilai fungsi awal sedangkan Newton memakai turunan. Kesimpulan spesifik hanya berlaku untuk satu perbandingan ini; tidak membuktikan bahwa secant selalu lebih cepat atau lebih stabil."
    },
    {
      "prompt": "SC-08. Buktikan bahwa mengganti $f$ dengan $g=7f$ tidak mengubah iterasi secant dalam aritmetika eksak, lalu periksa pada $f(x)=x^2-2$ dengan titik awal $1,2$.",
      "hint": "Batalkan faktor 7 pada pembilang dan penyebut yang sama-sama taknol.",
      "answer": "Diketahui $g(x)=7f(x)$ dan dua titik $x_{n-1}\\ne x_n$ dengan $f(x_n)-f(x_{n-1})\\ne0$. Karena $7\\ne0$, penyebut untuk $g$ adalah $7[f(x_n)-f(x_{n-1})]\\ne0$. \\n\\nRumus untuk $g$ menghasilkan $x_{n+1}=x_n-\\dfrac{7f(x_n)(x_n-x_{n-1})}{7[f(x_n)-f(x_{n-1})]}=x_n-\\dfrac{f(x_n)(x_n-x_{n-1})}{f(x_n)-f(x_{n-1})}$. Faktor 7 dibatalkan secara sah, sehingga langkah identik; induksi membuktikan seluruh iterasi berikutnya identik selama terdefinisi. \\n\\nUntuk $f(x)=x^2-2$, $f(1)=-1$ dan $f(2)=2$, sedangkan $g(1)=-7$ dan $g(2)=14$. Keduanya menghasilkan $x_2=2-\\dfrac{2}{3}=4/3$ atau $2-\\dfrac{14}{21}=4/3$. Invariansi berlaku eksak; galat pembulatan mesin tidak dibahas oleh klaim ini."
    }
  ],
  "mistakes": [],
  "connections": []
};
