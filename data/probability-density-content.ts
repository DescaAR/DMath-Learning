import type { BookLessonContent } from "@/data/book-content-types";

/** Probabilitas dan integral: rujukan Ross (2019), Durrett (2019). */
export const probabilityDensityContent:BookLessonContent={
  "intro": [
    "Pada peubah acak kontinu, peluang suatu interval bukan diperoleh dengan menghitung banyaknya titik, melainkan dengan mengintegralkan fungsi kepadatan. Panjang interval saja tidak menentukan peluang: dua interval sama panjang dapat memiliki peluang berbeda ketika densitas tidak konstan. Sebagai contoh, pada densitas yang meningkat ke kanan, interval dekat ujung kanan membawa massa lebih besar.",
    "Ambil peubah acak real X dengan densitas f. Kita akan memeriksa terlebih dahulu dua syarat yang membuat f sah: f tidak negatif dan integralnya pada seluruh garis real sama dengan satu. Sesudah itu fungsi distribusi kumulatif F(x)=P(X≤x) menyatakan akumulasi luas di sebelah kiri x. Turunan F, bila ada, mengembalikan kepadatan lokal; sebaliknya peluang pada satu titik tetap nol meskipun nilai f di titik itu besar.",
    "Ekspektasi merupakan rata-rata berbobot integral, bukan sekadar titik tengah daerah dukungan. Untuk menghitungnya kita harus memeriksa integrabilitas |X|. Transformasi peubah dan pengondisian pada suatu kejadian kemudian mengubah distribusi dengan cara yang dapat diturunkan dari definisi, bukan dengan menebak rumus. Contoh dan latihan mempertahankan dukungan, normalisasi, dan verifikasi probabilitas pada setiap perhitungan.",
    "Pembuktian menggunakan sifat integral tak negatif, Teorema Dasar Kalkulus pada titik kontinuitas densitas, dan—khusus identitas integral ekor—Teorema Tonelli. Rujukan yang dapat diperiksa: Sheldon Ross, A First Course in Probability, edisi ke-10 (2019), bab peubah acak kontinu; Rick Durrett, Probability: Theory and Examples, edisi ke-5 (2019), bagian ekspektasi dan distribusi."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Fungsi Kepadatan Probabilitas",
      "statement": "Peubah acak real $X$ mempunyai fungsi kepadatan (densitas) $f:\\mathbb R\\to[0,\\infty)$ jika $f$ terukur, $\\int_{-\\infty}^{\\infty}f(x)\\,dx=1$, dan untuk setiap himpunan Borel $A\\subseteq\\mathbb R$ berlaku $P(X\\in A)=\\int_A f(x)\\,dx$. Integral yang digunakan adalah integral Lebesgue; untuk densitas potongan kontinu pada contoh-contoh di bawah, nilainya dapat dihitung dengan integral tak wajar biasa."
    },
    {
      "kind": "definition",
      "title": "Fungsi Distribusi Kumulatif",
      "statement": "Untuk peubah acak real $X$, fungsi distribusi kumulatifnya ialah $F_X(t)=P(X\\le t)$, $t\\in\\mathbb R$. Jika $X$ mempunyai densitas $f$, maka $F_X(t)=\\int_{-\\infty}^{t}f(x)\\,dx$. Perbedaan $F_X(b)-F_X(a)$ memberikan $P(a<X\\le b)$ untuk $a<b$."
    },
    {
      "kind": "definition",
      "title": "Ekspektasi dan Varians Peubah Kontinu",
      "statement": "Jika $X$ mempunyai densitas $f$ dan $\\int_{\\mathbb R}|x|f(x)\\,dx<\\infty$, ekspektasinya didefinisikan oleh $E[X]=\\int_{\\mathbb R}xf(x)\\,dx$. Jika juga $\\int_{\\mathbb R}x^2f(x)\\,dx<\\infty$, variansnya ialah $\\operatorname{Var}(X)=E[(X-E[X])^2]=\\int_{\\mathbb R}(x-E[X])^2f(x)\\,dx$."
    },
    {
      "kind": "definition",
      "title": "Probabilitas dan Densitas Bersyarat pada Kejadian",
      "statement": "Untuk kejadian $B$ dengan $P(B)>0$, $P(C\\mid B)=P(C\\cap B)/P(B)$. Jika $B=\\{X\\in A\\}$ untuk himpunan Borel $A$ dan $X$ mempunyai densitas $f$, densitas bersyarat $X$ setelah diketahui $B$ adalah $f_{X\\mid B}(x)=\\mathbf 1_A(x)f(x)/P(B)$, dipahami hampir di mana-mana."
    },
    {
      "kind": "proposition",
      "title": "Akumulasi Massa dan Peluang Interval",
      "statement": "Jika $f$ densitas $X$, maka $F_X$ monoton tak turun, $0\\le F_X(t)\\le1$, $\\lim_{t\\to-\\infty}F_X(t)=0$, $\\lim_{t\\to\\infty}F_X(t)=1$, dan untuk setiap $a<b$ berlaku $P(a<X\\le b)=\\int_a^bf(x)\\,dx$. Khususnya $P(X=a)=0$ untuk setiap $a\\in\\mathbb R$.",
      "proof": [
        "Diketahui $f\\ge0$ dan $\\int_{\\mathbb R}f=1$. Jika $a<b$, maka $\\int_{-\\infty}^b f-\\int_{-\\infty}^a f=\\int_a^b f\\ge0$. Karena $F_X(t)$ adalah integral pada subhimpunan $\\mathbb R$, diperoleh $0\\le F_X(t)\\le1$ dan monotonisitas.",
        "Menurut kontinuitas ukuran integral untuk himpunan meningkat, $\\int_{(-\\infty,t]}f\\to\\int_{\\mathbb R}f=1$ saat $t\\to\\infty$. Untuk himpunan menurun $(-\\infty,t]$ dengan $t\\to-\\infty$, kontinuitas dari atas berlaku karena massa total satu, sehingga limitnya nol.",
        "Definisi distribusi memberi $P(a<X\\le b)=P(X\\le b)-P(X\\le a)=F_X(b)-F_X(a)=\\int_a^bf$. Himpunan singleton $\\{a\\}$ mempunyai ukuran Lebesgue nol, sehingga $P(X=a)=\\int_{\\{a\\}}f=0$. Semua pernyataan terbukti."
      ]
    },
    {
      "kind": "theorem",
      "title": "Turunan Fungsi Distribusi pada Titik Kontinuitas Densitas",
      "statement": "Misalkan $X$ mempunyai densitas $f$ dan $f$ kontinu pada $t_0\\in\\mathbb R$. Maka $F_X$ terdiferensialkan di $t_0$ dan $F_X'(t_0)=f(t_0)$. Tidak diperlukan kontinuitas $f$ di seluruh garis real.",
      "proof": [
        "Untuk $h\\ne0$, definisi integral kumulatif memberikan $\\frac{F_X(t_0+h)-F_X(t_0)}h=\\frac1h\\int_{t_0}^{t_0+h}f(x)\\,dx$, dengan integral berorientasi untuk $h<0$.",
        "Kurangkan $f(t_0)$ dan gunakan ketaksamaan nilai mutlak integral: $\\left|\\frac1h\\int_{t_0}^{t_0+h}(f(x)-f(t_0))\\,dx\\right|\\le\\sup_{|x-t_0|\\le|h|}|f(x)-f(t_0)|$.",
        "Kontinuitas $f$ di $t_0$ menjadikan ruas kanan menuju nol ketika $h\\to0$ dari kedua sisi. Jadi limit hasil bagi selisih ada dan sama dengan $f(t_0)$; teorema terbukti. Pada titik diskontinuitas densitas, kesimpulan ini tidak otomatis berlaku."
      ]
    },
    {
      "kind": "proposition",
      "title": "Linearitas Ekspektasi dan Identitas Varians",
      "statement": "Jika $E|X|<\\infty$ dan $a,b\\in\\mathbb R$, maka $E[aX+b]=aE[X]+b$. Jika $E[X^2]<\\infty$, maka $\\operatorname{Var}(X)=E[X^2]-(E[X])^2$ dan $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$.",
      "proof": [
        "Karena $E|X|<\\infty$, fungsi $ax+b$ terintegralkan terhadap distribusi $X$. Linearitas integral memberi $E[aX+b]=\\int(ax+b)f(x)\\,dx=a\\int xf(x)\\,dx+b\\int f(x)\\,dx=aE[X]+b$.",
        "Tuliskan $\\mu=E[X]$. Dengan momen kedua hingga, kembangkan kuadrat di dalam integral: $E[(X-\\mu)^2]=E[X^2]-2\\mu E[X]+\\mu^2=E[X^2]-\\mu^2$.",
        "Karena $E[aX+b]=a\\mu+b$, berlaku $(aX+b)-(a\\mu+b)=a(X-\\mu)$. Mengkuadratkan lalu mengambil ekspektasi menghasilkan $\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$. Pernyataan terbukti."
      ]
    },
    {
      "kind": "theorem",
      "title": "Identitas Integral Ekor untuk Peubah Tak Negatif",
      "statement": "Jika $X\\ge0$ hampir pasti dan $E[X]<\\infty$, maka $E[X]=\\int_0^\\infty P(X>t)\\,dt=\\int_0^\\infty(1-F_X(t))\\,dt$. Identitas tetap benar dalam arti nilai $+\\infty$ jika syarat ekspektasi hingga dilepas.",
      "proof": [
        "Untuk setiap bilangan $x\\ge0$, panjang interval $[0,x)$ sama dengan $x$. Jadi identitas titik demi titik $x=\\int_0^\\infty\\mathbf 1_{\\{t<x\\}}\\,dt$ berlaku; substitusikan $x=X(\\omega)$.",
        "Fungsi $(\\omega,t)\\mapsto\\mathbf 1_{\\{t<X(\\omega)\\}}$ terukur dan tak negatif. Teorema Tonelli mengizinkan pertukaran dua integral tanpa perlu lebih dahulu mengasumsikan integrabilitas absolut: $E[X]=\\int_\\Omega\\int_0^\\infty\\mathbf 1_{\\{t<X(\\omega)\\}}\\,dt\\,dP(\\omega)=\\int_0^\\infty P(X>t)\\,dt$.",
        "Karena $P(X>t)=1-P(X\\le t)=1-F_X(t)$, bentuk kedua mengikuti. Hipotesis $E[X]<\\infty$ menjamin nilai integral hingga; kedua identitas telah dibuktikan."
      ]
    },
    {
      "kind": "theorem",
      "title": "Transformasi Monoton dari Densitas",
      "statement": "Misalkan $X$ memiliki densitas $f$ yang nol di luar interval terbuka $I$, dan $g:I\\to J$ bijeksi yang terdiferensialkan kontinu, monoton ketat, dengan $g'(x)\\ne0$ pada $I$. Untuk $Y=g(X)$, densitas pada $y\\in J$ adalah $f_Y(y)=f(g^{-1}(y))/|g'(g^{-1}(y))|$ dan nol di luar $J$ (nilai pada batas dapat ditentukan sebarang).",
      "proof": [
        "Misalkan $g$ meningkat. Untuk $y\\in J$, $F_Y(y)=P(g(X)\\le y)=P(X\\le g^{-1}(y))=F_X(g^{-1}(y))$. Dengan aturan rantai pada titik kontinuitas densitas, $F_Y'(y)=f(g^{-1}(y))(g^{-1})'(y)=f(g^{-1}(y))/g'(g^{-1}(y))$.",
        "Jika $g$ menurun, pertidaksamaan berbalik: $F_Y(y)=P(X\\ge g^{-1}(y))=1-F_X(g^{-1}(y))$ karena $X$ tidak memiliki atom. Diferensiasi memberi $F_Y'(y)=-f(g^{-1}(y))/g'(g^{-1}(y))$, yang sama dengan rumus nilai mutlak karena $g'<0$.",
        "Pada kedua kasus, substitusi integral $y=g(x)$ menunjukkan $\\int_Jf_Y(y)\\,dy=\\int_If(x)\\,dx=1$ dan untuk setiap interval di $J$ integral $f_Y$ memberikan probabilitasnya. Karena interval menghasilkan himpunan Borel, rumus berlaku sebagai densitas hingga kesetaraan hampir di mana-mana. Teorema terbukti."
      ]
    },
    {
      "kind": "proposition",
      "title": "Normalisasi Densitas Bersyarat",
      "statement": "Misalkan $X$ mempunyai densitas $f$, $A$ himpunan Borel, dan $p=P(X\\in A)>0$. Fungsi $h(x)=\\mathbf1_A(x)f(x)/p$ adalah densitas peluang dan untuk setiap himpunan Borel $C$, $\\int_Ch(x)\\,dx=P(X\\in C\\mid X\\in A)$.",
      "proof": [
        "Karena $f\\ge0$ dan $p>0$, fungsi $h$ terukur serta tak negatif. Normalisasi dihitung langsung: $\\int_{\\mathbb R}h(x)\\,dx=p^{-1}\\int_Af(x)\\,dx=p^{-1}P(X\\in A)=1$.",
        "Untuk setiap himpunan Borel $C$, $\\int_Ch(x)\\,dx=p^{-1}\\int_{C\\cap A}f(x)\\,dx=P(X\\in C\\cap A)/P(X\\in A)$. Menurut definisi probabilitas bersyarat, ruas kanan sama dengan $P(X\\in C\\mid X\\in A)$. Jadi fungsi tersebut benar-benar densitas bersyarat; proposisi terbukti."
      ]
    },
    {
      "kind": "proposition",
      "title": "Ketaksamaan Markov",
      "statement": "Jika $X\\ge0$ hampir pasti, $E[X]<\\infty$, dan $t>0$, maka $P(X\\ge t)\\le E[X]/t$. Tidak diperlukan keberadaan densitas untuk hasil ini.",
      "proof": [
        "Pada kejadian $\\{X\\ge t\\}$ berlaku $X\\ge t$, sedangkan di luarnya $X\\ge0$. Karena itu ketaksamaan titik demi titik $X\\ge t\\mathbf1_{\\{X\\ge t\\}}$ berlaku hampir pasti.",
        "Monotonisitas ekspektasi dan linearitas untuk konstanta memberi $E[X]\\ge tE[\\mathbf1_{\\{X\\ge t\\}}]=tP(X\\ge t)$. Membagi dengan $t>0$ membuktikan ketaksamaan Markov."
      ]
    }
  ],
  "examples": [
    {
      "title": "Menguji Kepadatan Seragam",
      "forDefinition": "Fungsi Kepadatan Probabilitas",
      "problem": "Diberikan $f(x)=1/2$ untuk $0\\le x\\le2$ dan nol selainnya. Periksa apakah $f$ densitas dan hitung $P(1/2<X<3/2)$.",
      "solution": [
        "Diketahui $f$ tidak negatif di setiap titik dan bernilai nol di luar $[0,2]$. Syarat pertama densitas terpenuhi; syarat kedua memerlukan integral massa total satu.",
        "Hitung $\\int_{\\mathbb R}f(x)\\,dx=\\int_0^2\\frac12\\,dx=\\frac12(2-0)=1$. Jadi $f$ adalah densitas yang sah, bukan hanya fungsi tidak negatif.",
        "Karena distribusi kontinu, ujung interval tidak memengaruhi peluang. Maka $P(1/2<X<3/2)=\\int_{1/2}^{3/2}\\frac12\\,dx=\\frac12(3/2-1/2)=1/2$.",
        "Verifikasi: panjang interval yang ditanyakan satu satuan, yaitu separuh panjang dukungan dua satuan; kepadatan konstan membuat peluangnya tepat setengah."
      ],
      "conclusion": "Densitas sah dan $P(1/2<X<3/2)=1/2$."
    },
    {
      "title": "Distribusi Kumulatif Eksponensial",
      "forDefinition": "Fungsi Distribusi Kumulatif",
      "problem": "Untuk $f(x)=2e^{-2x}$ jika $x\\ge0$ dan nol jika $x<0$, tentukan $F_X(t)$ dan $P(1<X\\le2)$.",
      "solution": [
        "Diketahui $f$ tidak negatif dan $\\int_0^\\infty2e^{-2x}\\,dx=[-e^{-2x}]_0^\\infty=1$. Dengan demikian $f$ memenuhi normalisasi densitas.",
        "Jika $t<0$, interval $(-\\infty,t]$ tidak bertemu dukungan sehingga $F_X(t)=0$. Jika $t\\ge0$, gunakan definisi: $F_X(t)=\\int_0^t2e^{-2x}\\,dx=[-e^{-2x}]_0^t=1-e^{-2t}$.",
        "Peluang interval adalah $F_X(2)-F_X(1)=(1-e^{-4})-(1-e^{-2})=e^{-2}-e^{-4}$. Kedua titik ujung tidak mempunyai massa atom.",
        "Periksa $F_X(0)=0$, fungsi meningkat karena turunannya $2e^{-2t}>0$ untuk $t>0$, dan limitnya satu saat $t\\to\\infty$."
      ],
      "conclusion": "$F_X(t)=0$ untuk $t<0$ dan $1-e^{-2t}$ untuk $t\\ge0$; peluang yang diminta $e^{-2}-e^{-4}$."
    },
    {
      "title": "Ekspektasi dan Varians Distribusi Seragam",
      "forDefinition": "Ekspektasi dan Varians Peubah Kontinu",
      "problem": "Untuk $X$ seragam pada $[0,2]$, hitung $E[X]$, $E[X^2]$, dan $\\operatorname{Var}(X)$ dengan integral.",
      "solution": [
        "Diketahui densitas $f(x)=1/2$ pada $[0,2]$ dan nol di luar. Karena dukungannya terbatas, integral $|x|f(x)$ dan $x^2f(x)$ berhingga, sehingga ekspektasi dan varians terdefinisi.",
        "Hitung $E[X]=\\int_0^2x/2\\,dx=[x^2/4]_0^2=1$. Momen kedua $E[X^2]=\\int_0^2x^2/2\\,dx=[x^3/6]_0^2=4/3$.",
        "Dengan identitas varians, $\\operatorname{Var}(X)=E[X^2]-(E[X])^2=4/3-1=1/3$. Sebagai pemeriksaan, integral langsung $\\int_0^2(x-1)^2/2\\,dx=1/3$.",
        "Mean satu terletak di tengah interval karena densitas simetris; varians positif mencatat sebaran titik di sekitar satu."
      ],
      "conclusion": "$E[X]=1$, $E[X^2]=4/3$, dan $\\operatorname{Var}(X)=1/3$."
    },
    {
      "title": "Kepadatan Setelah Mengetahui Kejadian",
      "forDefinition": "Probabilitas dan Densitas Bersyarat pada Kejadian",
      "problem": "Untuk $X$ seragam pada $[0,2]$, diketahui kejadian $B=\\{X>1\\}$. Tentukan densitas bersyarat dan $E[X\\mid B]$.",
      "solution": [
        "Diketahui $f(x)=1/2$ pada $[0,2]$. Peluang syarat ialah $P(B)=\\int_1^2(1/2)\\,dx=1/2>0$, sehingga distribusi bersyarat terdefinisi.",
        "Menurut rumus densitas bersyarat, $f_{X\\mid B}(x)=f(x)\\mathbf1_{(1,2]}(x)/(1/2)=1$ untuk $1<x\\le2$, dan nol di luar. Integral densitas baru adalah $\\int_1^2 1\\,dx=1$.",
        "Ekspektasi bersyarat ialah $\\int_1^2 x\\cdot1\\,dx=[x^2/2]_1^2=(4-1)/2=3/2$. Ini juga dapat dihitung dari $E[X\\mathbf1_B]/P(B)$.",
        "Nilai $3/2$ lebih besar daripada mean semula satu, sesuai informasi bahwa hanya nilai di atas satu yang masih mungkin."
      ],
      "conclusion": "$X\\mid B$ seragam pada $(1,2]$ dan $E[X\\mid B]=3/2$."
    },
    {
      "title": "Mengubah Peubah dengan Kuadrat",
      "problem": "Misalkan $X$ seragam pada $[0,2]$ dan $Y=X^2$. Tentukan $F_Y$, $f_Y$, serta $E[Y]$ dengan dua metode.",
      "solution": [
        "Diketahui $X\\in[0,2]$ hampir pasti dan fungsi $g(x)=x^2$ meningkat ketat pada $(0,2)$. Dukungan $Y$ adalah $[0,4]$. Untuk $0\\le y\\le4$, $F_Y(y)=P(X^2\\le y)=P(X\\le\\sqrt y)=\\sqrt y/2$.",
        "Diferensiasikan pada $0<y<4$: $f_Y(y)=1/(4\\sqrt y)$, dan nol di luar $(0,4)$. Walaupun tidak terbatas saat $y\\downarrow0$, densitas ini integrabel: $\\int_0^4(4\\sqrt y)^{-1}dy=[\\sqrt y/2]_0^4=1$.",
        "Metode pertama untuk mean: $E[Y]=E[X^2]=\\int_0^2 x^2/2\\,dx=4/3$. Metode kedua: $\\int_0^4y f_Y(y)\\,dy=\\frac14\\int_0^4\\sqrt y\\,dy=[y^{3/2}/6]_0^4=8/6=4/3$.",
        "Kedua perhitungan sama, sehingga transformasi dan normalisasi telah diverifikasi secara independen. Nilai densitas di $y=0$ dapat dipilih sebarang karena singleton mempunyai massa nol."
      ],
      "conclusion": "$F_Y(y)=\\sqrt y/2$ pada $[0,4]$, $f_Y(y)=1/(4\\sqrt y)$ pada $(0,4)$, dan $E[Y]=4/3$."
    },
    {
      "title": "Peluang Bersyarat Eksponensial",
      "problem": "Jika $X$ mempunyai densitas $2e^{-2x}$ untuk $x\\ge0$, hitung $P(X>3\\mid X>1)$ dan jelaskan apakah nilainya sama dengan $P(X>2)$.",
      "solution": [
        "Diketahui distribusi eksponensial dengan parameter dua. Integral ekor pada $t\\ge0$ ialah $P(X>t)=\\int_t^\\infty2e^{-2x}\\,dx=e^{-2t}$. Kejadian $\\{X>3\\}$ merupakan subkejadian $\\{X>1\\}$.",
        "Menurut definisi peluang bersyarat, $P(X>3\\mid X>1)=P(X>3)/P(X>1)=e^{-6}/e^{-2}=e^{-4}$. Penyebut positif, sehingga pengondisian sah.",
        "Sementara itu $P(X>2)=e^{-4}$. Kesamaan tersebut bukan kebetulan aritmetika: untuk setiap $s,t\\ge0$, rasio $P(X>s+t)/P(X>s)=e^{-2(s+t)}/e^{-2s}=e^{-2t}$.",
        "Sifat tanpa ingatan ini khusus untuk distribusi eksponensial dalam kelas kontinu dengan asumsi yang sesuai; tidak boleh diterapkan pada sembarang densitas."
      ],
      "conclusion": "$P(X>3\\mid X>1)=e^{-4}=P(X>2)$."
    },
    {
      "title": "Batas Markov dan Peluang Sebenarnya",
      "problem": "Untuk $X$ seragam pada $[0,2]$, bandingkan $P(X\\ge3/2)$ dengan batas ketaksamaan Markov.",
      "solution": [
        "Diketahui $X\\ge0$ hampir pasti dan $E[X]=1<\\infty$, sehingga semua hipotesis ketaksamaan Markov berlaku untuk ambang $t=3/2>0$.",
        "Peluang sebenarnya dihitung dari densitas: $P(X\\ge3/2)=\\int_{3/2}^2(1/2)\\,dx=(2-3/2)/2=1/4$. Titik ujung tidak menambah massa.",
        "Ketaksamaan Markov memberi $P(X\\ge3/2)\\le E[X]/(3/2)=1/(3/2)=2/3$. Memang $1/4\\le2/3$, jadi batas tersebut benar tetapi tidak tajam pada contoh ini.",
        "Perbedaan muncul karena Markov hanya menggunakan mean dan nonnegativitas, sedangkan integral densitas memakai seluruh bentuk distribusi."
      ],
      "conclusion": "Peluang eksak $1/4$, sedangkan batas Markov $2/3$."
    },
    {
      "title": "Mengapa Peubah Bernoulli Tidak Memiliki Densitas Lebesgue",
      "problem": "Misalkan $P(X=0)=P(X=1)=1/2$. Tunjukkan bahwa tidak ada fungsi densitas Lebesgue untuk distribusi ini, walaupun fungsi distribusinya ada.",
      "solution": [
        "Diketahui $X$ hanya mengambil nilai nol dan satu, masing-masing dengan peluang $1/2$. Fungsi distribusinya adalah $F_X(t)=0$ untuk $t<0$, $1/2$ untuk $0\\le t<1$, dan $1$ untuk $t\\ge1$.",
        "Andaikan terdapat densitas Lebesgue $f$. Menurut definisi densitas, $P(X=0)=\\int_{\\{0\\}}f(x)\\,dx=0$ karena himpunan satu titik berukuran Lebesgue nol.",
        "Namun data distribusi memberi $P(X=0)=1/2$, bertentangan dengan hasil integral. Jadi asumsi adanya densitas salah. Lompatan $F_X$ di nol dan satu adalah massa atom, bukan nilai densitas yang sangat besar.",
        "Contoh ini membedakan keberadaan fungsi distribusi kumulatif—selalu ada untuk peubah acak real—dari keberadaan densitas Lebesgue yang memerlukan distribusi absolut kontinu."
      ],
      "conclusion": "Distribusi Bernoulli memiliki CDF, tetapi tidak mempunyai densitas terhadap ukuran Lebesgue."
    }
  ],
  "exercises": [
    {
      "prompt": "Diberikan $f(x)=cx$ pada $0\\le x\\le2$ dan nol di luar. Tentukan $c$, $F_X$, $P(1<X\\le2)$, dan $E[X]$.",
      "hint": "Normalisasikan integral terlebih dahulu; untuk CDF, pecah kasus sebelum, di dalam, dan setelah dukungan.",
      "answer": "Diketahui $f(x)=cx$ pada $[0,2]$. Normalisasi memberi $1=\\int_0^2cx\\,dx=2c$, sehingga $c=1/2$; fungsi ini tidak negatif. Untuk $t<0$, $F_X(t)=0$; untuk $0\\le t\\le2$, $F_X(t)=\\int_0^t x/2\\,dx=t^2/4$; untuk $t>2$, $F_X(t)=1$. Maka $P(1<X\\le2)=F_X(2)-F_X(1)=1-1/4=3/4$. Ekspektasi $E[X]=\\int_0^2x(x/2)\\,dx=[x^3/6]_0^2=4/3$. Pemeriksaan: $F_X$ naik dari nol ke satu, peluang interval berada di $[0,1]$, dan mean $4/3$ berada di dukungan $[0,2]$."
    },
    {
      "prompt": "Misalkan $f(x)=c(1-x^2)$ untuk $-1\\le x\\le1$ dan nol selainnya. Tentukan $c$, $E[X]$, dan $\\operatorname{Var}(X)$.",
      "hint": "Gunakan simetri integran untuk mean dan hitung momen kedua.",
      "answer": "Diketahui $1-x^2\\ge0$ pada $[-1,1]$. Normalisasi: $1=c\\int_{-1}^1(1-x^2)\\,dx=c(2-2/3)=4c/3$, sehingga $c=3/4$. Ekspektasi $E[X]=(3/4)\\int_{-1}^1x(1-x^2)\\,dx=0$ karena integran ganjil pada interval simetris. Momen kedua $E[X^2]=(3/4)\\int_{-1}^1(x^2-x^4)\\,dx=(3/4)(2/3-2/5)=1/5$. Maka $\\operatorname{Var}(X)=1/5-0^2=1/5$. Varians nonnegatif dan tidak melebihi satu, sesuai $|X|\\le1$ hampir pasti."
    },
    {
      "prompt": "Jika $f(x)=3e^{-3x}$ untuk $x\\ge0$, tentukan $P(X>2\\mid X>1)$ dan $E[X]$.",
      "hint": "Hitung integral ekor; untuk mean gunakan integrasi parsial atau identitas integral ekor.",
      "answer": "Diketahui densitas eksponensial dengan parameter tiga, dan $\\int_0^\\infty3e^{-3x}\\,dx=1$. Untuk $t\\ge0$, $P(X>t)=\\int_t^\\infty3e^{-3x}\\,dx=e^{-3t}$. Karena $\\{X>2\\}\\subset\\{X>1\\}$ dan $P(X>1)=e^{-3}>0$, diperoleh $P(X>2\\mid X>1)=e^{-6}/e^{-3}=e^{-3}$. Identitas integral ekor memberi $E[X]=\\int_0^\\infty e^{-3t}\\,dt=1/3$. Sebagai verifikasi, integrasi parsial $\\int_0^\\infty3xe^{-3x}\\,dx$ juga menghasilkan $1/3$."
    },
    {
      "prompt": "Misalkan $X$ seragam pada $[0,2]$ dan $Y=3X+1$. Tentukan densitas, mean, dan varians $Y$.",
      "hint": "Transformasi linear meningkat; bandingkan integral langsung dengan sifat ekspektasi.",
      "answer": "Diketahui $f_X(x)=1/2$ pada $[0,2]$ dan $g(x)=3x+1$ meningkat dengan turunan tiga. Dukungan $Y$ adalah $[1,7]$, inversnya $x=(y-1)/3$, sehingga $f_Y(y)=f_X((y-1)/3)/3=1/6$ pada $(1,7)$ dan nol di luar. Normalisasi $\\int_1^7(1/6)\\,dy=1$. Karena $E[X]=1$ dan $\\operatorname{Var}(X)=1/3$, linearitas memberi $E[Y]=3(1)+1=4$ dan $\\operatorname{Var}(Y)=9(1/3)=3$. Verifikasi integral: $\\int_1^7y/6\\,dy=(49-1)/12=4$, sesuai hasil transformasi."
    },
    {
      "prompt": "Jika $X$ seragam pada $[-1,1]$ dan $Y=X^2$, tentukan $F_Y(y)$, densitas $Y$, dan $E[Y]$. Jelaskan mengapa rumus transformasi monoton tidak boleh diterapkan langsung pada seluruh $[-1,1]$.",
      "hint": "Hitung kejadian $-sqrt yle Xlesqrt y$ dan diferensiasikan CDF.",
      "answer": "Diketahui $f_X(x)=1/2$ pada $[-1,1]$ dan $Y\\in[0,1]$. Fungsi $x^2$ tidak satu-satu pada $[-1,1]$, sehingga teorema transformasi monoton tidak berlaku langsung untuk seluruh dukungan. Untuk $0\\le y\\le1$, $F_Y(y)=P(-\\sqrt y\\le X\\le\\sqrt y)=\\int_{-\\sqrt y}^{\\sqrt y}(1/2)\\,dx=\\sqrt y$. Untuk $y<0$ CDF nol, dan untuk $y>1$ CDF satu. Turunannya $f_Y(y)=1/(2\\sqrt y)$ untuk $0<y<1$. Normalisasi $\\int_0^1(2\\sqrt y)^{-1}\\,dy=1$. Mean $\\int_0^1 y/(2\\sqrt y)\\,dy=1/3$, sama dengan $E[X^2]=\\int_{-1}^1x^2/2\\,dx=1/3$."
    },
    {
      "prompt": "Buktikan bahwa setiap peubah acak yang memiliki densitas Lebesgue memenuhi $P(X=a)=0$ untuk setiap $a\\in\\mathbb R$. Berikan distribusi yang melanggar sifat tersebut.",
      "hint": "Gunakan integral pada singleton dan contoh peubah acak konstan.",
      "answer": "Diketahui $X$ mempunyai densitas $f$ dalam arti $P(X\\in A)=\\int_Af(x)\\,dx$ untuk setiap himpunan Borel $A$. Ambil $A=\\{a\\}$. Karena ukuran Lebesgue singleton nol, integral fungsi terukur tak negatif pada $\\{a\\}$ juga nol; akibatnya $P(X=a)=0$. Pernyataan ini berlaku untuk setiap $a$, tanpa perlu kontinuitas $f$ di titik itu. Sebagai contoh tandingan terhadap keberadaan densitas, peubah konstan $Y=2$ hampir pasti memenuhi $P(Y=2)=1$. Jika $Y$ memiliki densitas, hasil yang baru dibuktikan akan memberi $P(Y=2)=0$, kontradiksi. Jadi peubah konstan tidak mempunyai densitas Lebesgue."
    },
    {
      "prompt": "Untuk $f(x)=2x$ pada $0\\le x\\le1$, tentukan densitas $X$ bersyarat pada $B=\\{X>1/2\\}$ dan hitung $E[X\\mid B]$.",
      "hint": "Normalisasikan pada subinterval, lalu hitung integral mean baru.",
      "answer": "Diketahui $\\int_0^1 2x\\,dx=1$, jadi $f$ sah. Peluang syarat ialah $P(B)=\\int_{1/2}^1 2x\\,dx=[x^2]_{1/2}^1=1-1/4=3/4>0$. Densitas bersyarat $h(x)=2x/(3/4)=8x/3$ pada $(1/2,1]$ dan nol di luar. Periksa $\\int_{1/2}^1(8x/3)\\,dx=(4/3)(1-1/4)=1$. Mean bersyarat $E[X\\mid B]=\\int_{1/2}^1x(8x/3)\\,dx=(8/9)[x^3]_{1/2}^1=(8/9)(7/8)=7/9$. Nilai $7/9$ terletak dalam $(1/2,1)$, sesuai dukungan bersyarat."
    },
    {
      "prompt": "Diberikan $f(x)=2/(1+x)^3$ untuk $x\\ge0$ dan nol di luar. Hitung $F_X(t)$, $E[X]$ dengan integral ekor, serta bandingkan $P(X\\ge2)$ dengan batas Markov.",
      "hint": "Antiturunan $2(1+x)^{-3}$ adalah $-(1+x)^{-2}$.",
      "answer": "Diketahui $f\\ge0$ dan $\\int_0^\\infty2(1+x)^{-3}\\,dx=[-(1+x)^{-2}]_0^\\infty=1$, sehingga ini densitas sah. Untuk $t<0$, $F_X(t)=0$; untuk $t\\ge0$, $F_X(t)=1-(1+t)^{-2}$. Karena $X\\ge0$, identitas integral ekor memberi $E[X]=\\int_0^\\infty(1-F_X(t))\\,dt=\\int_0^\\infty(1+t)^{-2}\\,dt=1$. Peluang sebenarnya $P(X\\ge2)=1-F_X(2)=1/9$, sebab tidak ada massa pada titik dua. Markov dengan $t=2$ memberi batas $P(X\\ge2)\\le E[X]/2=1/2$. Pemeriksaan $1/9\\le1/2$ benar; batas tidak tajam karena hanya memakai mean."
    }
  ],
  "mistakes": [],
  "connections": []
};
