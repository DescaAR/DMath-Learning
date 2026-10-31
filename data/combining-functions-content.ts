import type { BookLessonContent } from "@/data/book-content-types";

/** Authored algebra and coordinate proofs for function combinations and graph transformations. */
export const combiningFunctionsContent:BookLessonContent = {
  "intro": [
    "Menjumlahkan dua rumus tidak selalu menghasilkan fungsi yang terdefinisi pada seluruh bilangan real. Jika salah satu fungsi hanya menerima masukan positif atau jika suatu penyebut bernilai nol, domain fungsi gabungan harus dipersempit. Demikian pula, menggambar pergeseran grafik tanpa melacak koordinat titik dapat menghasilkan arah pergeseran yang terbalik.",
    "Sebagai contoh, ambil $f(x)=\\sqrt{x}$ dan $g(x)=x-2$. Jumlah $f+g$ hanya terdefinisi untuk $x\\ge0$, sedangkan komposisi $f\\circ g$ memerlukan $x-2\\ge0$, yaitu $x\\ge2$. Sebaliknya, $g\\circ f$ terdefinisi untuk $x\\ge0$ dan bernilai $\\sqrt{x}-2$. Perbedaan ini berasal dari urutan masukan, bukan dari manipulasi simbol semata.",
    "Untuk transformasi grafik, kita menggunakan bentuk $g(x)=a f(b(x-h))+k$ dengan $a,b\\ne0$. Jika $(u,v)$ berada pada grafik $f$, titik yang bersesuaian pada grafik $g$ adalah $(h+u/b,\\;av+k)$. Rumus koordinat ini menjadi dasar pembuktian arah pergeseran, peregangan, refleksi, perubahan domain, dan perubahan range.",
    "Urutan materi mengikuti pemeriksaan domain, operasi aljabar fungsi, komposisi, dan transformasi koordinat. Pembuktian disajikan sebelum penerapan numerik; setiap contoh memeriksa kembali domain dan persamaan grafik. Rujukan konsep: OpenStax, Precalculus 2e, bab Functions dan bagian Transformations of Functions; Stewart, Calculus: Early Transcendentals, edisi ke-8 (2016), bagian Functions and Their Graphs. Contoh serta pembuktian ditulis khusus untuk halaman ini."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Operasi Aljabar Dua Fungsi",
      "statement": "Misalkan $f:A\\to\\mathbb R$ dan $g:B\\to\\mathbb R$. Pada $A\\cap B$ didefinisikan $(f+g)(x)=f(x)+g(x)$, $(f-g)(x)=f(x)-g(x)$, dan $(fg)(x)=f(x)g(x)$. Hasil bagi $(f/g)(x)=f(x)/g(x)$ hanya didefinisikan pada $\\{x\\in A\\cap B:g(x)\\ne0\\}$. Domain tersebut adalah domain alami operasi apabila $A$ dan $B$ merupakan domain alami kedua fungsi.",
      "explanation": "Syarat penyebut tidak nol diperiksa setelah syarat kedua fungsi terdefinisi; membatalkan faktor aljabar tidak otomatis mengembalikan titik yang telah dikeluarkan dari domain."
    },
    {
      "kind": "definition",
      "title": "Komposisi Fungsi dan Domainnya",
      "statement": "Untuk $g:B\\to\\mathbb R$ dan $f:A\\to\\mathbb R$, komposisi $f\\circ g$ didefinisikan pada $D=\\{x\\in B:g(x)\\in A\\}$ oleh $(f\\circ g)(x)=f(g(x))$. Jika $D=\\varnothing$, tidak ada nilai real komposisi pada masukan mana pun.",
      "explanation": "Fungsi di sebelah kanan simbol komposisi dijalankan terlebih dahulu. Domain komposisi tidak selalu sama dengan domain salah satu fungsi penyusunnya."
    },
    {
      "kind": "definition",
      "title": "Translasi Grafik Fungsi",
      "statement": "Jika $f:D\\to\\mathbb R$ dan $h,k\\in\\mathbb R$, translasi grafik oleh vektor $(h,k)$ menghasilkan fungsi $g(x)=f(x-h)+k$ dengan domain $D+h=\\{u+h:u\\in D\\}$. Grafik $g$ adalah $\\{(u+h,f(u)+k):u\\in D\\}$.",
      "explanation": "Tanda minus pada masukan menunjukkan perpindahan grafik ke kanan jika $h>0$; tanda plus pada keluaran menunjukkan perpindahan ke atas jika $k>0$."
    },
    {
      "kind": "definition",
      "title": "Penskalaan dan Refleksi Grafik",
      "statement": "Untuk $f:D\\to\\mathbb R$, $a,b\\in\\mathbb R\\setminus\\{0\\}$, dan $h,k\\in\\mathbb R$, definisikan $g(x)=a f(b(x-h))+k$ pada $D_g=\\{x:b(x-h)\\in D\\}$. Parameter $a$ mengalikan koordinat vertikal, sedangkan $b$ membagi koordinat horizontal; tanda negatif masing-masing menghasilkan refleksi terhadap sumbu horizontal atau vertikal sebelum translasi.",
      "explanation": "Faktor horizontal adalah $1/|b|$, bukan $|b|$. Untuk $b=0$ rumus menjadi fungsi konstan dan tidak lagi memiliki korespondensi satu-satu antarabsis grafik."
    },
    {
      "kind": "proposition",
      "title": "Domain Operasi dan Pembatalan Faktor",
      "statement": "Misalkan $f:A\\to\\mathbb R$ dan $g:B\\to\\mathbb R$ memiliki domain yang telah ditetapkan. Domain hasil bagi $f/g$ tepat $D=\\{x\\in A\\cap B:g(x)\\ne0\\}$. Jika pada $D$ rumus $f(x)/g(x)$ dapat disederhanakan menjadi $r(x)$, fungsi hasil bagi tetap mempunyai domain $D$, meskipun rumus $r$ terdefinisi pada himpunan yang lebih luas.",
      "proof": [
        "Diketahui $x\\in D$. Karena $x\\in A\\cap B$, kedua nilai $f(x)$ dan $g(x)$ ada; karena $g(x)\\ne0$, pembagian real sah. Oleh karena itu hasil bagi terdefinisi di setiap $x\\in D$.",
        "Sebaliknya, jika $(f/g)(x)$ terdefinisi menurut operasi fungsi, nilai $f(x)$ dan $g(x)$ harus ada dan penyebut harus tidak nol. Hal ini memaksa $x\\in A\\cap B$ dan $g(x)\\ne0$, yakni $x\\in D$. Kedua inklusi membuktikan ketepatan domain.",
        "Kesamaan $f(x)/g(x)=r(x)$ hanya dibuktikan untuk $x\\in D$; kesamaan nilai pada domain bersama tidak menyatakan bahwa kedua fungsi mempunyai domain yang sama. Sebagai contoh, $(x^2-1)/(x-1)=x+1$ hanya untuk $x\\ne1$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Domain Komposisi",
      "statement": "Untuk $f:A\\to\\mathbb R$ dan $g:B\\to\\mathbb R$, berlaku $\\operatorname{dom}(f\\circ g)=B\\cap g^{-1}(A)$, dengan $g^{-1}(A)=\\{x\\in B:g(x)\\in A\\}$. Jika $f,g,h$ dapat dikomposisikan pada suatu masukan, berlaku $f\\circ(g\\circ h)=(f\\circ g)\\circ h$ beserta kesamaan domain alaminya.",
      "proof": [
        "Diketahui $x\\in\\operatorname{dom}(f\\circ g)$. Evaluasi $f(g(x))$ mensyaratkan $x\\in B$ dan $g(x)\\in A$, sehingga $x\\in B\\cap g^{-1}(A)$. Sebaliknya, jika kedua syarat tersebut terpenuhi, $g(x)$ ada dan dapat dimasukkan ke $f$; komposisi terdefinisi. Ini membuktikan kedua inklusi.",
        "Untuk asosiativitas, ambil $h:C\\to\\mathbb R$. Kedua bentuk tiga fungsi terdefinisi tepat pada masukan $x\\in C$ yang memenuhi $h(x)\\in B$ dan $g(h(x))\\in A$. Pada himpunan yang sama, kedua ruas mempunyai nilai $f(g(h(x)))$ karena tanda kurung hanya mengatur pengelompokan evaluasi.",
        "Dengan demikian domain dan nilai kedua komposisi bertingkat sama. Asosiativitas tidak menyatakan komutativitas: misalnya $f(x)=x^2$ dan $g(x)=x+1$ memberi $f(g(1))=4$ tetapi $g(f(1))=2$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Korespondensi Titik pada Transformasi Grafik",
      "statement": "Misalkan $f:D\\to\\mathbb R$, $a,b\\ne0$, dan $h,k\\in\\mathbb R$. Titik $(x,y)$ berada pada grafik $g(x)=a f(b(x-h))+k$ jika dan hanya jika terdapat $(u,v)$ pada grafik $f$ dengan $x=h+u/b$ dan $y=av+k$.",
      "proof": [
        "($\\Rightarrow$) Diketahui $(x,y)$ pada grafik $g$. Definisikan $u=b(x-h)$ dan $v=f(u)$. Karena $x$ berada pada domain $g$, diperoleh $u\\in D$ dan $(u,v)$ berada pada grafik $f$. Dari $b\\ne0$ didapat $x=h+u/b$, sedangkan definisi $g$ memberi $y=av+k$.",
        "($\\Leftarrow$) Sebaliknya, misalkan $(u,v)$ berada pada grafik $f$ dan $x=h+u/b$, $y=av+k$. Karena $v=f(u)$ dan $b(x-h)=u\\in D$, masukan $x$ sah bagi $g$. Substitusi menghasilkan $g(x)=a f(u)+k=av+k=y$.",
        "Kedua arah membuktikan korespondensi grafik. Pemetaan koordinatnya bijektif dengan invers $(x,y)\\mapsto(b(x-h),(y-k)/a)$, karena $a,b\\ne0$. $\\square$"
      ]
    },
    {
      "kind": "corollary",
      "title": "Domain, Range, dan Titik Potong Sumbu pada Transformasi",
      "statement": "Dengan hipotesis teorema transformasi, $\\operatorname{dom}g=h+(1/b)D$ dan $\\operatorname{ran}g=a\\,\\operatorname{ran}f+k$. Selain itu, $g(x)=0$ jika dan hanya jika $f(b(x-h))=-k/a$ untuk $x\\in\\operatorname{dom}g$.",
      "proof": [
        "Dari definisi, $x$ berada pada domain $g$ tepat ketika $u=b(x-h)\\in D$. Karena $b\\ne0$, ini ekuivalen dengan $x=h+u/b$ untuk suatu $u\\in D$. Dengan demikian diperoleh rumus domain sebagai dua inklusi, bukan hanya dugaan dari gambar.",
        "Setiap nilai $g(x)$ berbentuk $af(u)+k$ dengan $u\\in D$, sehingga $\\operatorname{ran}g\\subseteq a\\,\\operatorname{ran}f+k$. Sebaliknya, untuk setiap $v=f(u)$ pada range $f$, pilih $x=h+u/b$; teorema transformasi memberi $g(x)=av+k$. Inklusi balik berlaku.",
        "Akhirnya, karena $a\\ne0$, persamaan $af(b(x-h))+k=0$ setara dengan $f(b(x-h))=-k/a$ pada domain yang sah. Ketiga karakterisasi terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Paritas dan Refleksi Grafik",
      "statement": "Misalkan $D=-D$ dan $f:D\\to\\mathbb R$. Fungsi $f$ genap jika dan hanya jika grafiknya simetris terhadap sumbu $y$; fungsi $f$ ganjil jika dan hanya jika grafiknya simetris terhadap titik asal.",
      "proof": [
        "($\\Rightarrow$) Jika $f$ genap, untuk setiap $(x,f(x))$ pada grafik berlaku $-x\\in D$ dan $f(-x)=f(x)$; karena itu $(-x,f(x))$ juga berada pada grafik. Jika $f$ ganjil, $f(-x)=-f(x)$ sehingga $(-x,-f(x))$ juga berada pada grafik.",
        "($\\Leftarrow$) Sebaliknya, jika grafik simetris terhadap sumbu $y$, titik $(-x,f(x))$ harus berada pada grafik. Karena fungsi mempunyai tepat satu keluaran pada setiap masukan, $f(-x)=f(x)$. Simetri terhadap titik asal dengan cara sama memaksa $f(-x)=-f(x)$.",
        "Hipotesis $D=-D$ memastikan kedua masukan dapat dibandingkan; misalnya fungsi $f(x)=x^2$ yang dibatasi pada $[0,\\infty)$ tidak mempunyai grafik simetris terhadap sumbu $y$. Kedua ekuivalensi terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Domain Jumlah dan Hasil Bagi",
      "forDefinition": "Operasi Aljabar Dua Fungsi",
      "problem": "Untuk $f(x)=\\sqrt{x-1}$ dan $g(x)=x-3$, tentukan domain $(f+g)$ dan $(f/g)$ serta nilai keduanya di $x=5$.",
      "solution": [
        "Diketahui $f$ memerlukan $x-1\\ge0$, sehingga domainnya $[1,\\infty)$. Fungsi polinomial $g$ mempunyai domain $\\mathbb R$. Irisannya adalah $[1,\\infty)$, yang menjadi domain jumlah.",
        "Untuk hasil bagi, penyebut $x-3$ harus tidak nol. Oleh karena itu $\\operatorname{dom}(f/g)=[1,\\infty)\\setminus\\{3\\}$. Titik $3$ tidak dapat dikembalikan hanya dengan manipulasi aljabar, karena operasi awal tidak terdefinisi di titik itu.",
        "Pada $x=5$, diperoleh $f(5)=\\sqrt4=2$ dan $g(5)=2$. Nilai jumlah adalah $4$ dan nilai hasil bagi adalah $1$. Kedua masukan sah karena $5\\ge1$ dan $5\\ne3$."
      ],
      "conclusion": "Domain jumlah dan hasil bagi berbeda; nilai di 5 masing-masing 4 dan 1."
    },
    {
      "title": "Komposisi Akar dan Translasi",
      "forDefinition": "Komposisi Fungsi dan Domainnya",
      "problem": "Diberikan $f(x)=\\sqrt{x}$ pada $[0,\\infty)$ dan $g(x)=x-2$ pada $\\mathbb R$. Tentukan kedua urutan komposisi beserta domainnya.",
      "solution": [
        "Diketahui $f\\circ g$ memasukkan keluaran $g(x)=x-2$ ke fungsi akar. Syaratnya $x-2\\ge0$, sehingga $(f\\circ g)(x)=\\sqrt{x-2}$ pada $[2,\\infty)$. Titik $x=1$ tidak sah untuk komposisi ini.",
        "Sebaliknya, $g\\circ f$ lebih dahulu menghitung $\\sqrt{x}$, sehingga hanya memerlukan $x\\ge0$. Karena domain $g$ adalah seluruh real, tidak ada pembatas tambahan. Diperoleh $(g\\circ f)(x)=\\sqrt{x}-2$ pada $[0,\\infty)$.",
        "Sebagai verifikasi, pada $x=4$ kedua komposisi terdefinisi, tetapi nilainya $\\sqrt2$ dan $0$. Perbedaan domain serta nilai membuktikan bahwa urutan komposisi tidak dapat dipertukarkan."
      ],
      "conclusion": "Komposisi pertama berdomain [2,∞), sedangkan komposisi kedua berdomain [0,∞)."
    },
    {
      "title": "Translasi Parabola",
      "forDefinition": "Translasi Grafik Fungsi",
      "problem": "Grafik $f(x)=x^2$ ditranslasi 3 satuan ke kanan dan 2 satuan ke bawah. Tentukan persamaan, puncak, dan dua titik hasil translasi.",
      "solution": [
        "Diketahui vektor translasi $(h,k)=(3,-2)$. Definisi memberi $g(x)=f(x-3)-2=(x-3)^2-2$, dengan domain seluruh real karena domain $f$ adalah $\\mathbb R$.",
        "Titik puncak lama $(0,0)$ berpindah ke $(0+3,0-2)=(3,-2)$. Titik $(1,1)$ dan $(-1,1)$ pada grafik asal masing-masing menjadi $(4,-1)$ dan $(2,-1)$.",
        "Verifikasi langsung: $g(4)=(4-3)^2-2=-1$ dan $g(2)=(2-3)^2-2=-1$. Karena kuadrat selalu nonnegatif, $g(x)\\ge-2$ dengan kesamaan tepat pada $x=3$, sehingga puncak yang dihitung benar."
      ],
      "conclusion": "Grafik baru adalah y=(x−3)²−2 dengan puncak (3,−2)."
    },
    {
      "title": "Refleksi dan Skala Horizontal",
      "forDefinition": "Penskalaan dan Refleksi Grafik",
      "problem": "Untuk $f(u)=\\sqrt{u}$, analisis $g(x)=-2f(-3(x-1))+4$: domain, range, dan citra titik $(9,3)$ pada grafik asal.",
      "solution": [
        "Diketahui $a=-2$, $b=-3$, $h=1$, dan $k=4$. Syarat akar adalah $-3(x-1)\\ge0$, yakni $x\\le1$. Jadi domain $g$ adalah $(-\\infty,1]$.",
        "Karena $f(u)\\ge0$, diperoleh $g(x)=4-2\\sqrt{-3(x-1)}\\le4$. Ketika $x\\to-\\infty$, nilai akar takterbatas dan $g(x)\\to-\\infty$; range adalah $(-\\infty,4]$.",
        "Titik $(u,v)=(9,3)$ pada grafik $f$ dipetakan menjadi $x=1+9/(-3)=-2$ dan $y=-2(3)+4=-2$. Verifikasi: $g(-2)=4-2\\sqrt9=-2$. Faktor horizontal $1/3$ dan tanda negatif merefleksikan absis sebelum translasi."
      ],
      "conclusion": "Domain x≤1, range y≤4, dan citra titik (9,3) adalah (−2,−2)."
    },
    {
      "title": "Lubang yang Tidak Hilang karena Penyederhanaan",
      "problem": "Tentukan domain alami $r(x)=(x^2-4)/(x-2)$, sederhanakan rumusnya, dan jelaskan perilaku di $x=2$.",
      "solution": [
        "Diketahui pembilang dan penyebut polinomial, tetapi penyebut nol di $x=2$. Karena pembagian oleh nol tidak sah, domain alami fungsi $r$ adalah $\\mathbb R\\setminus\\{2\\}$.",
        "Faktorisasi menghasilkan $x^2-4=(x-2)(x+2)$. Untuk setiap $x\\ne2$, faktor $x-2$ dapat dicoret sehingga $r(x)=x+2$. Pencoretan menggunakan syarat $x-2\\ne0$, bukan identitas yang sah di seluruh $\\mathbb R$.",
        "Limit saat $x\\to2$ adalah $4$, tetapi nilai $r(2)$ tetap tidak terdefinisi. Jika didefinisikan fungsi baru $\\widetilde r(2)=4$ dan $\\widetilde r(x)=r(x)$ di luar titik itu, barulah diperoleh perluasan kontinu. Grafik asli mempunyai lubang pada $(2,4)$."
      ],
      "conclusion": "Penyederhanaan aljabar tidak menghapus titik yang dikecualikan dari domain."
    },
    {
      "title": "Komposisi dengan Domain Berlapis",
      "problem": "Untuk $f(u)=1/\\sqrt{u}$ dan $g(x)=4-x^2$, tentukan domain $f\\circ g$ dan evaluasi pada $x=1$.",
      "solution": [
        "Fungsi $f(u)=1/\\sqrt u$ memerlukan $u>0$: akar harus real dan penyebut tidak nol. Komposisi $f(g(x))$ karena itu memerlukan $4-x^2>0$.",
        "Faktorisasi memberi $(2-x)(2+x)>0$, yang ekuivalen dengan $-2<x<2$. Domain komposisi adalah $(-2,2)$; kedua titik ujung tidak termasuk karena akan membuat penyebut nol.",
        "Untuk $x=1$ diperoleh $g(1)=3>0$ dan $(f\\circ g)(1)=1/\\sqrt3=\\sqrt3/3$. Pemeriksaan domain memastikan nilai tersebut sah. Di luar interval, argumen akar negatif atau penyebut nol, sehingga tidak ada nilai real."
      ],
      "conclusion": "Domain komposisi adalah (−2,2), dan nilainya di 1 ialah √3/3."
    },
    {
      "title": "Menentukan Parameter Transformasi dari Dua Titik",
      "problem": "Grafik $f(u)=u^2$ diubah menjadi $g(x)=a f(x-2)+k$ dengan $a>0$. Diketahui $g(2)=-1$ dan $g(4)=7$. Tentukan $a,k$ dan range.",
      "solution": [
        "Diketahui $g(x)=a(x-2)^2+k$. Pada $x=2$, suku kuadrat nol sehingga $g(2)=k=-1$. Substitusi data kedua memberi $g(4)=4a-1=7$, jadi $a=2$.",
        "Persamaan yang diperoleh adalah $g(x)=2(x-2)^2-1$. Karena $a=2>0$, nilai kuadrat dikalikan bilangan positif dan nilai minimum adalah $-1$ tepat ketika $x=2$. Dengan demikian range $[-1,\\infty)$.",
        "Verifikasi data: $g(2)=-1$ dan $g(4)=2(4)-1=7$. Keunikan parameter mengikuti dua persamaan linear independen dalam $a,k$; syarat $a>0$ juga dipenuhi."
      ],
      "conclusion": "Parameter unik a=2, k=−1; range grafik baru [−1,∞)."
    },
    {
      "title": "Simetri Grafik dan Pembatasan Domain",
      "problem": "Bandingkan paritas $f(x)=x^2$ pada $\\mathbb R$ dengan pembatasannya $h:[0,\\infty)\\to\\mathbb R$, $h(x)=x^2$.",
      "solution": [
        "Pada domain $\\mathbb R$ yang simetris terhadap nol, $f(-x)=(-x)^2=x^2=f(x)$ untuk setiap $x$. Oleh definisi, $f$ genap dan grafiknya simetris terhadap sumbu $y$.",
        "Untuk pembatasan $h$, masukan $1$ sah tetapi $-1$ tidak berada pada domain. Definisi genap sebagai kesamaan $h(-x)=h(x)$ untuk setiap $x$ mensyaratkan kedua nilai ada, sehingga $h$ tidak dapat diklasifikasikan genap pada domain yang tidak simetris.",
        "Grafik $h$ hanya cabang kanan parabola. Refleksi titik $(1,1)$ terhadap sumbu $y$ menghasilkan $(-1,1)$ yang tidak ada pada grafik $h$. Jadi rumus yang sama belum cukup untuk menjamin simetri; domain merupakan bagian dari definisi fungsi."
      ],
      "conclusion": "f genap pada ℝ, sedangkan h tidak memiliki simetri sumbu-y sebagai grafik pada domainnya."
    }
  ],
  "exercises": [
    {
      "prompt": "KF-01. Diberikan $f(x)=\\sqrt{x+2}$ dan $g(x)=x-1$. Tentukan domain $f+g$, $f/g$, dan nilainya pada $x=2$.",
      "hint": "Tentukan domain akar, kemudian keluarkan nol penyebut dari hasil bagi.",
      "answer": "Diketahui $f$ bernilai real jika $x+2\\ge0$, sehingga domainnya $[-2,\\infty)$; $g$ terdefinisi untuk semua real. Untuk penjumlahan, kedua nilai harus ada, sehingga domain $f+g$ adalah $[-2,\\infty)$. Untuk hasil bagi, diperlukan syarat tambahan $g(x)=x-1\\ne0$. Karena itu domain $f/g=[-2,\\infty)\\setminus\\{1\\}$. Pada $x=2$, nilai $f(2)=\\sqrt4=2$ dan $g(2)=1$. Diperoleh $(f+g)(2)=3$ dan $(f/g)(2)=2$. Pemeriksaan akhir: $2\\ge-2$ dan $2\\ne1$, jadi kedua evaluasi sah. Titik $1$ tetap dikeluarkan dari domain hasil bagi meskipun nilai fungsi akar di sana terdefinisi."
    },
    {
      "prompt": "KF-02. Untuk $f(x)=\\sqrt{x-1}$ dan $g(x)=x^2-4$, tentukan domain $f\\circ g$ dan $g\\circ f$. Periksa apakah $x=0$ sah untuk masing-masing.",
      "hint": "Pada f∘g perlu g(x)≥1; pada g∘f perlu x≥1.",
      "answer": "Diketahui $f$ mempunyai domain $[1,\\infty)$, sedangkan $g$ terdefinisi di seluruh $\\mathbb R$. Komposisi $f\\circ g$ mensyaratkan $g(x)=x^2-4\\ge1$, yaitu $x^2\\ge5$. Oleh sifat nilai mutlak, ini ekuivalen dengan $x\\le-\\sqrt5$ atau $x\\ge\\sqrt5$. Rumusnya $(f\\circ g)(x)=\\sqrt{x^2-5}$. Sebaliknya, $(g\\circ f)(x)=(\\sqrt{x-1})^2-4=x-5$ hanya untuk $x\\ge1$; penyederhanaan tidak memperluas domainnya ke seluruh real. Pada $x=0$, syarat $0^2\\ge5$ salah dan $0\\ge1$ juga salah, sehingga kedua komposisi tidak terdefinisi. Untuk verifikasi pembeda, $x=-3$ sah pada $f\\circ g$ dengan nilai $2$, tetapi tidak sah pada $g\\circ f$."
    },
    {
      "prompt": "KF-03. Grafik $y=|x|$ digeser 2 ke kiri dan 3 ke atas. Tentukan persamaan, puncak, domain, dan range.",
      "hint": "Pergeseran ke kiri berarti h=−2 dalam f(x−h).",
      "answer": "Diketahui $f(x)=|x|$ mempunyai puncak $(0,0)$, domain $\\mathbb R$, dan range $[0,\\infty)$. Translasi ke kiri 2 dan ke atas 3 berarti vektor $(h,k)=(-2,3)$. Berdasarkan definisi, $g(x)=f(x-(-2))+3=|x+2|+3$. Puncak berpindah ke $(-2,3)$. Domain tetap $\\mathbb R$ karena translasi bilangan real tidak mengeluarkan masukan apa pun. Karena $|x+2|\\ge0$, nilai minimum $g$ adalah $3$ yang dicapai tepat pada $x=-2$; range $[3,\\infty)$. Verifikasi titik: $(1,1)$ pada grafik asal menjadi $(-1,4)$ dan $g(-1)=|-1+2|+3=4$. Hasil ini memastikan arah pergeseran horizontal tidak terbalik."
    },
    {
      "prompt": "KF-04. Untuk $f(u)=u^2$, tentukan grafik $g(x)=-3f(2(x+1))+5$, puncak, dan range; tentukan citra titik $(2,4)$.",
      "hint": "Gunakan a=−3, b=2, h=−1, k=5 dan rumus x=h+u/b.",
      "answer": "Diketahui $a=-3$, $b=2$, $h=-1$, dan $k=5$. Substitusi $f(u)=u^2$ memberi $g(x)=-3[2(x+1)]^2+5=-12(x+1)^2+5$. Karena koefisien kuadrat negatif, nilai maksimum adalah $5$ pada $x=-1$; puncaknya $(-1,5)$ dan range $(-\\infty,5]$. Titik $(u,v)=(2,4)$ pada grafik asal dipetakan menjadi $x=-1+2/2=0$ dan $y=-3(4)+5=-7$. Pemeriksaan langsung menghasilkan $g(0)=-12(1)^2+5=-7$, sehingga citra $(0,-7)$ benar. Domain tetap seluruh real. Faktor horizontal $1/2$ tidak boleh tertukar dengan faktor vertikal $3$."
    },
    {
      "prompt": "KF-05. Buktikan bahwa $f(x)=x^3$ ganjil pada $\\mathbb R$, sedangkan $g(x)=x^3+2$ bukan ganjil maupun genap.",
      "hint": "Periksa domain dan bandingkan f(−x), g(−x) dengan ±f(x), ±g(x).",
      "answer": "Diketahui kedua fungsi polinomial memiliki domain $\\mathbb R$, yang simetris terhadap nol. Untuk setiap $x$, $f(-x)=(-x)^3=-x^3=-f(x)$, sehingga $f$ ganjil. Untuk $g$, cukup cari masukan yang menyangkal kedua identitas universal. Pada $x=1$, diperoleh $g(1)=3$ dan $g(-1)=1$. Karena $1\\ne3$, persamaan $g(-1)=g(1)$ gagal; jadi $g$ bukan genap. Karena $1\\ne-3$, persamaan $g(-1)=-g(1)$ juga gagal; jadi $g$ bukan ganjil. Sebagai pemeriksaan tambahan, fungsi ganjil pada domain yang memuat nol harus memenuhi $g(0)=0$, sedangkan di sini $g(0)=2$. Translasi vertikal merusak simetri titik asal pada contoh ini."
    },
    {
      "prompt": "KF-06. Diketahui $f(x)=1/(x-2)$ dan $g(x)=x+2$. Tentukan domain kedua komposisi dan nilai masing-masing pada $x=1$.",
      "hint": "Komposisi f∘g mengecualikan g(x)=2; g∘f mengecualikan x=2.",
      "answer": "Diketahui domain $f$ adalah $\\mathbb R\\setminus\\{2\\}$ dan domain $g$ adalah $\\mathbb R$. Pada $f\\circ g$, masukan $g(x)=x+2$ harus tidak sama dengan 2. Persamaan $x+2=2$ memberikan $x=0$, sehingga $(f\\circ g)(x)=1/x$ pada $\\mathbb R\\setminus\\{0\\}$. Pada $g\\circ f$, lebih dahulu dihitung $f(x)$, yang mensyaratkan $x\\ne2$; karena $g$ menerima seluruh real, tidak ada syarat tambahan. Diperoleh $(g\\circ f)(x)=1/(x-2)+2$ pada $\\mathbb R\\setminus\\{2\\}$. Pada $x=1$, nilai pertama adalah $1$ dan nilai kedua adalah $1/(-1)+2=1$. Kesamaan nilai pada satu titik tidak membuktikan kesamaan fungsi: domain keduanya berbeda, misalnya $x=0$ sah hanya bagi $g\\circ f$."
    },
    {
      "prompt": "KF-07. Untuk $f(u)=\\sqrt u$, tentukan domain dan range $g(x)=3-2\\sqrt{5-x}$, lalu cari titik potong sumbu $x$.",
      "hint": "Gunakan 5−x≥0 dan selesaikan 3−2√(5−x)=0.",
      "answer": "Diketahui $g(x)=3-2\\sqrt{5-x}$. Agar akar real, diperlukan $5-x\\ge0$, yakni $x\\le5$. Domainnya $(-\\infty,5]$. Nilai akar tidak negatif, sehingga $g(x)\\le3$, dengan kesamaan pada $x=5$. Ketika $x\\to-\\infty$, akar membesar tanpa batas dan $g(x)\\to-\\infty$; range adalah $(-\\infty,3]$. Titik potong sumbu $x$ memenuhi $3-2\\sqrt{5-x}=0$, sehingga $\\sqrt{5-x}=3/2$. Kedua ruas nonnegatif; menguadratkan memberi $5-x=9/4$ atau $x=11/4$. Verifikasi: $g(11/4)=3-2\\sqrt{9/4}=0$, dan $11/4\\le5$, sehingga titik $(11/4,0)$ sah dan unik karena fungsi akar meningkat terhadap argumennya."
    },
    {
      "prompt": "KF-08. Buktikan bahwa domain dan range $g(x)=a f(b(x-h))+k$ adalah hasil transformasi domain dan range $f$, dengan $a,b\\ne0$. Berikan contoh yang menunjukkan mengapa $b\\ne0$ penting.",
      "hint": "Buktikan kedua inklusi dengan u=b(x−h) dan x=h+u/b.",
      "answer": "Diketahui $f:D\\to\\mathbb R$, $a,b\\ne0$, dan $g(x)=a f(b(x-h))+k$. Untuk domain, jika $x\\in\\operatorname{dom}g$, maka $u=b(x-h)\\in D$, sehingga $x=h+u/b\\in h+(1/b)D$. Sebaliknya, jika $x=h+u/b$ untuk suatu $u\\in D$, maka $b(x-h)=u$ dan $g(x)$ terdefinisi. Kedua inklusi memberikan $\\operatorname{dom}g=h+(1/b)D$. Untuk range, setiap $g(x)=af(u)+k$ dengan $u\\in D$ berada di $a\\,\\operatorname{ran}f+k$. Sebaliknya, setiap nilai $av+k$ dengan $v=f(u)$ dicapai pada $x=h+u/b$. Jadi kedua range sama. Jika $b=0$ dan $0\\in D$, fungsi berubah menjadi konstanta $af(0)+k$ pada seluruh $\\mathbb R$, bukan citra horizontal bijektif dari $D$. Contoh $f(u)=u$ menunjukkan range yang semula $\\mathbb R$ runtuh menjadi singleton."
    }
  ],
  "mistakes": [],
  "connections": []
};
