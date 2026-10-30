import type { BookLessonContent } from "@/data/book-content-types";

/** Authored Radon–Nikodym lesson; Folland (1999), Royden–Fitzpatrick (2010), Bogachev (2007). */
export const radonNikodymContent:BookLessonContent = {
  "intro": [
    "Turunan Radon–Nikodym menjawab pertanyaan berikut: apabila ukuran kedua tidak memberikan massa pada himpunan yang diabaikan oleh ukuran pertama, dapatkah ukuran kedua dihitung dengan mengintegralkan sebuah fungsi terhadap ukuran pertama? Fungsi tersebut disebut densitas relatif; ia tidak harus berupa densitas peluang terhadap panjang Lebesgue.",
    "Kita mulai dari ruang hingga agar pembaca dapat melihat perbandingan massa pada setiap atom, kemudian beralih ke integral Lebesgue dan ukuran sigma-hingga. Pernyataan eksistensi umum dibuktikan dengan mereduksi masalah ke ukuran hingga dan memakai Teorema Representasi Riesz pada ruang Hilbert L²; penggunaan teorema tersebut dinyatakan secara terbuka, bukan disamarkan sebagai langkah elementer.",
    "Perlu dibedakan tiga pernyataan: ν≪μ adalah syarat tentang himpunan nol; ν(A)=∫_A f dμ adalah representasi ukuran; dan f=dν/dμ adalah kelas fungsi yang unik hanya hampir di mana-mana. Kesamaan nilai integral untuk semua himpunan terukur, bukan hanya untuk seluruh ruang, adalah inti representasi.",
    "Rujukan: G. B. Folland, Real Analysis: Modern Techniques and Their Applications, edisi kedua (1999), bagian ukuran bertanda dan Teorema Radon–Nikodym; H. L. Royden dan P. M. Fitzpatrick, Real Analysis, edisi keempat (2010), bagian diferensiasi ukuran; V. I. Bogachev, Measure Theory, Volume I (2007), bagian kontinuitas absolut dan densitas."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Kontinuitas Absolut Dua Ukuran",
      "statement": "Pada ruang terukur $(X,\\mathcal A)$, ukuran $\\nu$ kontinu absolut terhadap ukuran $\\mu$, ditulis $\\nu\\ll\\mu$, apabila untuk setiap $A\\in\\mathcal A$ berlaku $\\mu(A)=0\\Rightarrow\\nu(A)=0$. Definisi ini tidak menyatakan bahwa $\\nu(A)\\le\\mu(A)$ untuk semua $A$.",
      "explanation": "Syarat ini hanya membandingkan himpunan yang mempunyai ukuran nol; perbandingan besar massa pada himpunan lain boleh berapa pun."
    },
    {
      "kind": "definition",
      "title": "Densitas atau Turunan Radon–Nikodym",
      "statement": "Fungsi terukur $f:X\\to[0,\\infty]$ disebut densitas $\\nu$ terhadap $\\mu$ jika $\\nu(A)=\\int_A f\\,d\\mu$ untuk setiap $A\\in\\mathcal A$. Jika densitas ada, ditulis $f=d\\nu/d\\mu$; apabila $\\mu$ dan $\\nu$ sigma-hingga, densitas yang ada unik $\\mu$-hampir di mana-mana; tanpa hipotesis tambahan, ketunggalan tidak boleh diasumsikan.",
      "explanation": "Satu fungsi f harus mewakili seluruh himpunan terukur sekaligus. Mengubah f pada himpunan μ-nol tidak mengubah ukuran ν."
    },
    {
      "kind": "definition",
      "title": "Ukuran Sigma-Hingga",
      "statement": "Ukuran $\\mu$ pada $(X,\\mathcal A)$ disebut sigma-hingga jika terdapat $E_1,E_2,\\ldots\\in\\mathcal A$ dengan $X=\\bigcup_{n\\ge1}E_n$ dan $\\mu(E_n)<\\infty$ untuk setiap $n$. Himpunan penutup dapat dibuat saling lepas dengan mengganti $E_n$ oleh $E_n\\setminus\\bigcup_{k<n}E_k$.",
      "explanation": "Ukuran panjang pada garis real tidak hingga secara total, tetapi sigma-hingga karena garis dapat ditutup oleh interval berhingga."
    },
    {
      "kind": "definition",
      "title": "Ukuran yang Diinduksi Densitas",
      "statement": "Jika $\\mu$ ukuran pada $(X,\\mathcal A)$ dan $f:X\\to[0,\\infty]$ terukur, definisikan $\\nu_f(A)=\\int_A f\\,d\\mu$ untuk setiap $A\\in\\mathcal A$. Maka $\\nu_f$ adalah ukuran nonnegatif; nilainya boleh tak hingga.",
      "explanation": "Aditivitas terhitung diperoleh dari konvergensi monoton pada jumlah indikator himpunan saling lepas."
    },
    {
      "kind": "proposition",
      "title": "Representasi Densitas Mengimplikasikan Kontinuitas Absolut",
      "statement": "Jika $f\\ge0$ terukur dan $\\nu(A)=\\int_A f\\,d\\mu$ untuk semua $A\\in\\mathcal A$, maka $\\nu\\ll\\mu$, tanpa memerlukan asumsi sigma-hingga.",
      "proof": [
        "Diketahui $A\\in\\mathcal A$ dengan $\\mu(A)=0$. Dibuktikan bahwa $\\nu(A)=0$. Menurut definisi, $\\nu(A)=\\int_X 1_A f\\,d\\mu$.",
        "Untuk fungsi sederhana nonnegatif $s\\le 1_Af$, setiap himpunan tempat $s$ bernilai positif merupakan subhimpunan $A$ dan mempunyai ukuran nol. Oleh karena itu $\\int s\\,d\\mu=0$.",
        "Integral Lebesgue nonnegatif adalah supremum integral fungsi sederhana yang dibatasi oleh integran. Seluruh integral sederhana tersebut nol, sehingga $\\int_A f\\,d\\mu=0$.",
        "Dengan demikian $\\mu(A)=0$ mengakibatkan $\\nu(A)=0$ untuk setiap $A$, yaitu $\\nu\\ll\\mu$. Pernyataan ini hanya memberikan arah perlu; arah sebaliknya memerlukan hipotesis eksistensi Radon–Nikodym."
      ]
    },
    {
      "kind": "proposition",
      "title": "Ketunggalan Densitas untuk Ukuran Hingga",
      "statement": "Misalkan $\\nu(X)<\\infty$ dan $f,g\\ge0$ terukur dengan $\\nu(A)=\\int_A f\\,d\\mu=\\int_A g\\,d\\mu$ untuk semua $A\\in\\mathcal A$. Maka $f=g$ hampir di mana-mana terhadap $\\mu$.",
      "proof": [
        "Diketahui dua densitas $f$ dan $g$ bagi ukuran hingga $\\nu$. Karena $\\int_X f\\,d\\mu=\\int_X g\\,d\\mu=\\nu(X)<\\infty$, keduanya integrabel. Dibuktikan bahwa $\\mu(\\{f\\ne g\\})=0$.",
        "Ambil $B=\\{x:f(x)>g(x)\\}$. Dari hipotesis diperoleh $\\int_B(f-g)\\,d\\mu=0$, sebab kedua integral pada $B$ berhingga dan sama. Integran $f-g$ positif pada $B$.",
        "Jika $\\mu(B)>0$, maka $B=\\bigcup_{n\\ge1}\\{x\\in B:f(x)-g(x)\\ge1/n\\}$ memiliki salah satu himpunan bagian dengan ukuran positif. Integral selisih pada himpunan itu sekurang-kurangnya $\\mu(\\cdot)/n>0$, bertentangan dengan integral nol.",
        "Jadi $\\mu(\\{f>g\\})=0$. Dengan menukar peran $f$ dan $g$, diperoleh $\\mu(\\{g>f\\})=0$. Gabungannya adalah $\\{f\\ne g\\}$, sehingga kedua densitas sama hampir di mana-mana."
      ]
    },
    {
      "kind": "theorem",
      "title": "Radon–Nikodym untuk Dua Ukuran Hingga",
      "statement": "Misalkan $\\mu$ dan $\\nu$ ukuran hingga pada $(X,\\mathcal A)$ dan $\\nu\\ll\\mu$. Maka terdapat fungsi terukur $h\\ge0$ dengan $\\nu(A)=\\int_A h\\,d\\mu$ untuk setiap $A\\in\\mathcal A$. Fungsi $h$ unik $\\mu$-hampir di mana-mana. Pembuktian menggunakan Teorema Representasi Riesz pada ruang Hilbert $L^2$.",
      "proof": [
        "Diketahui $\\mu(X),\\nu(X)<\\infty$ dan $\\nu\\ll\\mu$. Definisikan ukuran hingga $\\lambda=\\mu+\\nu$. Untuk $u\\in L^2(\\lambda)$, bentuk linear $T(u)=\\int_Xu\\,d\\nu$ terdefinisi dengan baik karena ketaksamaan Cauchy–Schwarz memberikan $|T(u)|\\le\\sqrt{\\nu(X)}\\,\\|u\\|_{L^2(\\nu)}\\le\\sqrt{\\nu(X)}\\,\\|u\\|_{L^2(\\lambda)}$.",
        "Jadi $T$ fungsional linear kontinu pada ruang Hilbert $L^2(\\lambda)$. Teorema Representasi Riesz untuk ruang Hilbert memberikan $g\\in L^2(\\lambda)$ sehingga $T(u)=\\int_Xug\\,d\\lambda$ bagi setiap $u\\in L^2(\\lambda)$. Karena $\\lambda(X)<\\infty$, indikator $1_A$ berada dalam $L^2(\\lambda)$ untuk semua $A\\in\\mathcal A$. Maka $\\nu(A)=\\int_Ag\\,d\\lambda$.",
        "Karena $0\\le\\nu(A)\\le\\lambda(A)$ untuk setiap $A$, kita peroleh $0\\le g\\le1$ hampir di mana-mana terhadap $\\lambda$: bila $\\lambda(\\{g<0\\})>0$ atau $\\lambda(\\{g>1\\})>0$, integrasi pada himpunan tersebut bertentangan dengan ketaksamaan ukuran tadi. Selanjutnya $\\mu(A)=\\lambda(A)-\\nu(A)=\\int_A(1-g)\\,d\\lambda$.",
        "Tuliskan $B=\\{g=1\\}$. Identitas terakhir memberi $\\mu(B)=0$. Hipotesis $\\nu\\ll\\mu$ memberikan $\\nu(B)=0$, sehingga $\\lambda(B)=\\mu(B)+\\nu(B)=0$. Di luar $B$, definisikan $h=g/(1-g)$, dan ambil $h=0$ pada $B$. Fungsi ini terukur dan nonnegatif.",
        "Dengan identitas $d\\mu=(1-g)\\,d\\lambda$, untuk setiap $A$ berlaku $\\int_Ah\\,d\\mu=\\int_Ah(1-g)\\,d\\lambda=\\int_Ag\\,d\\lambda=\\nu(A)$; kontribusi $B$ nol. Jadi densitas ada. Ketunggalannya mengikuti proposisi sebelumnya karena $\\nu$ hingga. Dengan demikian pernyataan terbukti dengan satu penggunaan eksplisit Teorema Representasi Riesz."
      ]
    },
    {
      "kind": "corollary",
      "title": "Radon–Nikodym pada Ukuran Sigma-Hingga",
      "statement": "Jika $\\mu$ dan $\\nu$ sama-sama sigma-hingga pada $(X,\\mathcal A)$ serta $\\nu\\ll\\mu$, maka terdapat densitas terukur $h\\ge0$ dengan $\\nu(A)=\\int_Ah\\,d\\mu$ untuk setiap $A$. Densitas tersebut unik $\\mu$-hampir di mana-mana.",
      "proof": [
        "Diketahui penutup terhitung $X=\\bigcup_n U_n=\\bigcup_m V_m$ dengan $\\mu(U_n)<\\infty$ dan $\\nu(V_m)<\\infty$. Bentuk semua irisan $U_n\\cap V_m$, urutkan menjadi barisan, lalu kurangi irisan sebelumnya untuk memperoleh partisi terukur saling lepas $(E_k)$ dari $X$.",
        "Untuk setiap $k$, pembatasan $\\mu_k(A)=\\mu(A\\cap E_k)$ dan $\\nu_k(A)=\\nu(A\\cap E_k)$ merupakan ukuran hingga. Karena $\\nu\\ll\\mu$, juga berlaku $\\nu_k\\ll\\mu_k$. Teorema Radon–Nikodym ukuran hingga memberikan $h_k\\ge0$ terukur pada $E_k$ dengan $\\nu(A\\cap E_k)=\\int_{A\\cap E_k}h_k\\,d\\mu$.",
        "Definisikan $h(x)=h_k(x)$ jika $x\\in E_k$. Partisi terhitung membuat $h$ terukur. Karena $A$ adalah gabungan saling lepas dari $A\\cap E_k$, aditivitas terhitung dan konvergensi monoton memberikan $\\nu(A)=\\sum_k\\nu(A\\cap E_k)=\\sum_k\\int_{A\\cap E_k}h\\,d\\mu=\\int_Ah\\,d\\mu$.",
        "Untuk ketunggalan, terapkan proposisi ketunggalan ukuran hingga pada setiap $E_k$, kemudian gabungkan himpunan nol yang dihasilkan. Dengan demikian densitas global ada dan unik $\\mu$-hampir di mana-mana."
      ]
    },
    {
      "kind": "proposition",
      "title": "Aturan Rantai Densitas",
      "statement": "Misalkan $\\mu,\\nu,\\rho$ ukuran sigma-hingga pada $(X,\\mathcal A)$, $\\rho\\ll\\nu\\ll\\mu$, $g=d\\nu/d\\mu$, dan $h=d\\rho/d\\nu$. Maka $d\\rho/d\\mu=hg$ hampir di mana-mana terhadap $\\mu$ (dengan produk ditafsirkan sebagai nol pada $\\{g=0\\}$).",
      "proof": [
        "Diketahui $\\rho(A)=\\int_Ah\\,d\\nu$ dan $\\nu(A)=\\int_Ag\\,d\\mu$. Dibuktikan bahwa $\\rho(A)=\\int_Ahg\\,d\\mu$ untuk setiap $A\\in\\mathcal A$.",
        "Untuk fungsi indikator $1_A$, rumus perubahan ukuran menyatakan $\\int_X1_A\\,d\\nu=\\int_X1_Ag\\,d\\mu$. Linearitas memberikan rumus yang sama untuk setiap fungsi sederhana nonnegatif $s$.",
        "Jika $s_n\\uparrow h1_A$ dengan $s_n$ sederhana nonnegatif, teorema konvergensi monoton pada kedua ukuran menghasilkan $\\int_Ah\\,d\\nu=\\lim_n\\int_Xs_n\\,d\\nu=\\lim_n\\int_Xs_ng\\,d\\mu=\\int_Ahg\\,d\\mu$.",
        "Jadi $hg$ merepresentasikan $\\rho$ terhadap $\\mu$. Ketunggalan Radon–Nikodym pada ukuran sigma-hingga memberikan identitas turunan hampir di mana-mana. Nilai $h$ pada himpunan $\\nu$-nol tidak memengaruhi produk karena $g=0$ di sana $\\mu$-hampir di mana-mana."
      ]
    },
    {
      "kind": "proposition",
      "title": "Rumus Perubahan Ukuran",
      "statement": "Jika $\\nu(A)=\\int_Ah\\,d\\mu$ untuk semua $A$ dengan $h\\ge0$ terukur, maka untuk setiap $\\varphi\\ge0$ terukur berlaku $\\int_X\\varphi\\,d\\nu=\\int_X\\varphi h\\,d\\mu$. Untuk $\\varphi$ bertanda, identitas berlaku apabila $\\int|\\varphi|\\,d\\nu<\\infty$.",
      "proof": [
        "Diketahui representasi $\\nu$ melalui $h$. Untuk $\\varphi=1_A$, identitas yang akan dibuktikan adalah tepat definisi densitas. Untuk $\\varphi=\\sum_{j=1}^mc_j1_{A_j}$ dengan $c_j\\ge0$, linearitas integral memperluas identitas ke semua fungsi sederhana nonnegatif.",
        "Untuk $\\varphi\\ge0$ terukur, terdapat fungsi sederhana $s_n\\uparrow\\varphi$. Karena $h\\ge0$, juga berlaku $s_nh\\uparrow\\varphi h$. Teorema konvergensi monoton pada kedua ukuran memberi $\\int\\varphi\\,d\\nu=\\lim_n\\int s_n\\,d\\nu=\\lim_n\\int s_nh\\,d\\mu=\\int\\varphi h\\,d\\mu$.",
        "Jika $\\varphi$ bertanda dan $\\int|\\varphi|\\,d\\nu<\\infty$, terapkan identitas nonnegatif pada bagian positif $\\varphi^+$ dan negatif $\\varphi^-$. Kedua integral berhingga, sehingga pengurangan sah dan menghasilkan rumus yang sama untuk $\\varphi$. Dengan demikian kedua kasus terbukti."
      ]
    }
  ],
  "examples": [
    {
      "title": "Massa pada Dua Atom",
      "problem": "Pada $X=\\{a,b\\}$, diketahui $\\mu(\\{a\\})=2,\\mu(\\{b\\})=3$, sedangkan $\\nu(\\{a\\})=4,\\nu(\\{b\\})=3$. Periksa $\\nu\\ll\\mu$ dan tentukan densitas.",
      "solution": [
        "Diketahui ruang dua atom dengan kedua massa $\\mu$ positif. Setiap himpunan takkosong memiliki ukuran $\\mu$ positif, sehingga satu-satunya himpunan $\\mu$-nol adalah $\\varnothing$. Karena $\\nu(\\varnothing)=0$, syarat $\\nu\\ll\\mu$ dipenuhi.",
        "Densitas pada atom diperoleh dari identitas $\\nu(\\{x\\})=h(x)\\mu(\\{x\\})$. Dengan demikian $h(a)=4/2=2$ dan $h(b)=3/3=1$. Nilai ini ditentukan oleh perbandingan massa, bukan oleh selisih kedua ukuran.",
        "Verifikasi pada semua himpunan: $\\nu(\\varnothing)=0$, $\\nu(\\{a\\})=2\\cdot2=4$, $\\nu(\\{b\\})=1\\cdot3=3$, dan $\\nu(X)=4+3=7=\\int_Xh\\,d\\mu$. Karena keempat himpunan sudah diperiksa, representasi berlaku pada seluruh sigma-algebra."
      ],
      "conclusion": "Densitas adalah $h(a)=2$ dan $h(b)=1$.",
      "forDefinition": "Kontinuitas Absolut Dua Ukuran"
    },
    {
      "title": "Densitas Probabilitas terhadap Lebesgue",
      "problem": "Pada $X=[0,1]$ dengan $\\mu$ ukuran Lebesgue, definisikan $\\nu(A)=\\int_A2x\\,d\\mu(x)$. Tentukan $d\\nu/d\\mu$, $\\nu([0,1/2])$, dan apakah densitas unik pada $x=1/2$.",
      "solution": [
        "Diketahui fungsi $f(x)=2x$ pada $[0,1]$. Fungsi ini terukur dan nonnegatif. Integral totalnya $\\int_0^1 2x\\,dx=[x^2]_0^1=1$, sehingga $\\nu$ merupakan ukuran probabilitas dan $f$ adalah densitasnya terhadap ukuran Lebesgue.",
        "Untuk $A=[0,1/2]$, hitung $\\nu(A)=\\int_0^{1/2}2x\\,dx=[x^2]_0^{1/2}=1/4$. Nilai ini berasal dari integral atas $A$, bukan dari substitusi titik tengah ke dalam $f$.",
        "Definisikan $g(x)=2x$ untuk $x\\ne1/2$ dan $g(1/2)=100$. Karena singleton $\\{1/2\\}$ berukuran Lebesgue nol, $\\int_Ag\\,d\\mu=\\int_Af\\,d\\mu$ untuk setiap $A$. Maka turunan Radon–Nikodym tidak mempunyai nilai titik tunggal yang dipaksakan pada $1/2$."
      ],
      "conclusion": "$d\\nu/d\\mu=2x$ hampir di mana-mana dan $\\nu([0,1/2])=1/4$.",
      "forDefinition": "Densitas atau Turunan Radon–Nikodym"
    },
    {
      "title": "Panjang pada Garis Positif Sigma-Hingga",
      "problem": "Pada $X=[0,\\infty)$, periksa apakah ukuran Lebesgue $\\mu$ sigma-hingga dan hitung $\\nu([0,t])$ jika $d\\nu/d\\mu=e^{-x}$.",
      "solution": [
        "Diketahui $\\mu(X)=\\infty$, sehingga $\\mu$ bukan ukuran hingga. Namun $X=\\bigcup_{n=1}^{\\infty}[0,n]$ dan $\\mu([0,n])=n<\\infty$. Ini membuktikan sigma-hingga secara langsung dari definisinya.",
        "Fungsi $h(x)=e^{-x}$ terukur dan nonnegatif. Ukuran $\\nu(A)=\\int_Ah\\,d\\mu$ memenuhi $\\nu([0,t])=\\int_0^te^{-x}\\,dx=[-e^{-x}]_0^t=1-e^{-t}$ untuk $t\\ge0$.",
        "Sebagai pemeriksaan, $\\nu(X)=\\lim_{t\\to\\infty}(1-e^{-t})=1$ melalui konvergensi monoton. Jadi ukuran acuan $\\mu$ boleh tak hingga secara total, sedangkan ukuran yang memiliki densitas terhadapnya dapat berupa probabilitas."
      ],
      "conclusion": "$\\mu$ sigma-hingga dan $\\nu([0,t])=1-e^{-t}$.",
      "forDefinition": "Ukuran Sigma-Hingga"
    },
    {
      "title": "Ukuran dari Densitas Polinomial",
      "problem": "Pada $[0,1]$, definisikan $h(x)=3x^2$ terhadap ukuran Lebesgue. Tentukan $\\nu_h((a,b])$ untuk $0\\le a<b\\le1$ dan verifikasi aditivitas pada partisi dua interval.",
      "solution": [
        "Diketahui $h(x)=3x^2\\ge0$ dan kontinu, sehingga terukur. Definisi ukuran yang diinduksi memberi $\\nu_h((a,b])=\\int_a^b3x^2\\,dx=[x^3]_a^b=b^3-a^3$.",
        "Ambil $a<c<b$. Interval $(a,b]$ merupakan gabungan saling lepas dari $(a,c]$ dan $(c,b]$. Perhitungan memberikan $\\nu_h((a,c])+\\nu_h((c,b])=(c^3-a^3)+(b^3-c^3)=b^3-a^3$.",
        "Kesamaan ini memverifikasi aditivitas pada partisi tersebut. Aditivitas terhitung untuk semua keluarga saling lepas mengikuti teorema konvergensi monoton pada integral Lebesgue, bukan hanya dari pemeriksaan dua interval."
      ],
      "conclusion": "$\\nu_h((a,b])=b^3-a^3$ dan $\\nu_h([0,1])=1$.",
      "forDefinition": "Ukuran yang Diinduksi Densitas"
    },
    {
      "title": "Atom Dirac Tidak Memiliki Densitas Lebesgue",
      "problem": "Misalkan $\\mu$ ukuran Lebesgue pada $\\mathbb R$ dan $\\nu=\\delta_0$ adalah ukuran Dirac di nol. Tentukan apakah $\\nu\\ll\\mu$ dan apakah $d\\nu/d\\mu$ ada.",
      "solution": [
        "Diketahui $\\delta_0(A)=1$ jika $0\\in A$ dan nol jika tidak. Pilih himpunan terukur $A=\\{0\\}$. Ukuran Lebesgue singleton adalah $\\mu(A)=0$, tetapi $\\nu(A)=\\delta_0(\\{0\\})=1$.",
        "Syarat kontinuitas absolut gagal pada himpunan $A$ tersebut. Andaikan terdapat densitas terukur nonnegatif $h$ dengan $\\nu(B)=\\int_Bh\\,d\\mu$ untuk semua $B$, maka untuk $B=\\{0\\}$ integral terhadap himpunan Lebesgue-nol harus bernilai nol.",
        "Hal itu bertentangan dengan $\\nu(\\{0\\})=1$. Jadi tidak ada densitas Radon–Nikodym terhadap ukuran Lebesgue. Sebaliknya $\\delta_0$ mempunyai densitas satu terhadap dirinya sendiri, sehingga eksistensi densitas selalu bergantung pada ukuran acuan."
      ],
      "conclusion": "$\\delta_0\\not\\ll\\mu$ dan turunan $d\\delta_0/d\\mu$ tidak ada."
    },
    {
      "title": "Aturan Rantai untuk Tiga Ukuran",
      "problem": "Pada $[0,1]$, ambil $d\\nu=2x\\,dx$ dan $d\\rho=3x^2\\,dx$. Hitung $d\\rho/d\\nu$ dan verifikasi aturan rantai.",
      "solution": [
        "Diketahui $\\mu$ ukuran Lebesgue, $\\nu(A)=\\int_A2x\\,dx$, dan $\\rho(A)=\\int_A3x^2\\,dx$. Karena $2x>0$ untuk $x\\in(0,1]$, setiap himpunan $\\nu$-nol juga Lebesgue-nol di luar singleton $\\{0\\}$; maka $\\rho\\ll\\nu$.",
        "Pada $x>0$, rasio densitas adalah $h(x)=(3x^2)/(2x)=3x/2$. Nilai $h(0)$ boleh ditetapkan nol karena $\\nu(\\{0\\})=0$. Untuk setiap $A$, $\\int_Ah\\,d\\nu=\\int_A(3x/2)(2x)\\,dx=\\int_A3x^2\\,dx=\\rho(A)$.",
        "Aturan rantai menghasilkan $(d\\rho/d\\nu)(d\\nu/d\\mu)=(3x/2)(2x)=3x^2=d\\rho/d\\mu$ hampir di mana-mana. Perhitungan pada seluruh himpunan $A$ memastikan bahwa rumus rasio benar-benar mewakili ukuran."
      ],
      "conclusion": "$d\\rho/d\\nu=3x/2$ untuk $x>0$ dan aturan rantai menghasilkan $3x^2$."
    },
    {
      "title": "Perubahan Peluang pada Dua Kejadian",
      "problem": "Ruang $\\Omega=\\{a,b\\}$ memiliki $P(a)=P(b)=1/2$. Diberikan $L(a)=3/2$ dan $L(b)=1/2$. Definisikan $Q(A)=E_P[1_AL]$. Tentukan $Q(a)$, $Q(b)$, dan $E_Q[1_{\\{a\\}}]$.",
      "solution": [
        "Diketahui $L\\ge0$ dan $E_P[L]=(1/2)(3/2)+(1/2)(1/2)=1$. Maka $Q$ adalah ukuran probabilitas dengan densitas $L=dQ/dP$. Kedua atom memiliki massa $P$ positif, sehingga $Q\\ll P$.",
        "Hitung $Q(\\{a\\})=E_P[1_{\\{a\\}}L]=(1/2)(3/2)=3/4$ dan $Q(\\{b\\})=(1/2)(1/2)=1/4$. Penjumlahan memberikan $Q(\\Omega)=1$, sesuai normalisasi densitas.",
        "Dengan rumus perubahan ukuran, $E_Q[1_{\\{a\\}}]=E_P[1_{\\{a\\}}L]=3/4$. Hasil ini berbeda dari $P(\\{a\\})=1/2$ karena densitas mengubah bobot relatif atom, bukan sekadar mengganti nama probabilitas."
      ],
      "conclusion": "$Q(a)=3/4$, $Q(b)=1/4$, dan $E_Q[1_{\\{a\\}}]=3/4$."
    },
    {
      "title": "Konstruksi Densitas pada Partisi Tak Hingga",
      "problem": "Pada $\\mathbb N$, tetapkan $\\mu(\\{n\\})=1$ dan $\\nu(\\{n\\})=2^{-n}$ untuk $n\\ge1$. Tunjukkan sigma-hingga dan tentukan densitas pada setiap atom.",
      "solution": [
        "Diketahui ukuran hitung $\\mu$ pada $\\mathbb N$ dengan $\\mu(\\mathbb N)=\\infty$. Partisi $\\mathbb N=\\bigcup_{n\\ge1}\\{n\\}$ menunjukkan sigma-hingga karena tiap singleton berukuran satu. Ukuran $\\nu$ hingga sebab $\\sum_{n\\ge1}2^{-n}=1$.",
        "Setiap himpunan $\\mu$-nol harus kosong, sehingga $\\nu\\ll\\mu$. Dari identitas pada singleton diperoleh $h(n)=\\nu(\\{n\\})/\\mu(\\{n\\})=2^{-n}$.",
        "Untuk setiap $A\\subseteq\\mathbb N$, integral terhadap ukuran hitung sama dengan penjumlahan: $\\int_Ah\\,d\\mu=\\sum_{n\\in A}2^{-n}=\\nu(A)$. Dengan demikian densitas yang dihitung pada setiap atom memang berlaku untuk semua himpunan, termasuk yang tak hingga."
      ],
      "conclusion": "$d\\nu/d\\mu(n)=2^{-n}$ untuk setiap $n\\in\\mathbb N$."
    }
  ],
  "exercises": [
    {
      "prompt": "RN-01. Pada $X=\\{1,2,3\\}$ diketahui $\\mu(\\{1\\})=1$, $\\mu(\\{2\\})=2$, $\\mu(\\{3\\})=4$ dan $\\nu(\\{1\\})=3$, $\\nu(\\{2\\})=0$, $\\nu(\\{3\\})=2$. Tentukan densitas dan periksa representasi pada $A=\\{1,3\\}$.",
      "hint": "Hitung perbandingan massa atom dan uji penjumlahan integral pada A.",
      "answer": "Diketahui ukuran pada tiga atom dengan massa $\\mu$ semuanya positif. Karena itu setiap himpunan $\\mu$-nol harus kosong, sehingga $\\nu\\ll\\mu$. Yang ditentukan adalah $h=d\\nu/d\\mu$ dan verifikasi pada $A=\\{1,3\\}$.\n\nDari persamaan $\\nu(\\{i\\})=h(i)\\mu(\\{i\\})$ diperoleh $h(1)=3/1=3$, $h(2)=0/2=0$, dan $h(3)=2/4=1/2$. Ini adalah satu-satunya pilihan nilai pada ketiga atom karena massa $\\mu$ tiap atom positif.\n\nPada $A=\\{1,3\\}$, $\\int_Ah\\,d\\mu=h(1)\\mu(\\{1\\})+h(3)\\mu(\\{3\\})=3\\cdot1+(1/2)\\cdot4=5$. Sementara itu $\\nu(A)=3+2=5$. Kesamaan berlaku juga untuk setiap himpunan lain karena kedua ruas aditif atas atom. Jadi densitas yang ditentukan benar.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-02. Pada $[0,1]$ dengan ukuran Lebesgue, tetapkan $\\nu(A)=\\int_A6x(1-x)\\,dx$. Buktikan bahwa $\\nu$ probabilitas, tentukan $\\nu([0,1/2])$, dan jelaskan kontinuitas absolutnya.",
      "hint": "Periksa integral total, hitung antiturunan, lalu gunakan sifat integral pada himpunan nol.",
      "answer": "Diketahui $f(x)=6x(1-x)$ yang nonnegatif pada $[0,1]$ dan kontinu, sehingga terukur. Akan dibuktikan normalisasi dan kontinuitas absolut, kemudian dihitung massa interval. Antiturunannya adalah $F(x)=3x^2-2x^3$.\n\nIntegral total $\\nu([0,1])=[3x^2-2x^3]_0^1=3-2=1$, jadi $\\nu$ ukuran probabilitas. Untuk interval kiri, $\\nu([0,1/2])=F(1/2)-F(0)=3/4-1/4=1/2$.\n\nJika $\\mu(A)=0$, integral Lebesgue fungsi nonnegatif $f$ pada $A$ nol; akibatnya $\\nu(A)=0$. Maka $\\nu\\ll\\mu$. Kesimpulan ini tidak bergantung pada bentuk polinomial khusus, tetapi pada representasi sebagai integral densitas nonnegatif.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-03. Pada $\\mathbb R$ dengan ukuran Lebesgue $\\mu$, definisikan $\\nu(A)=\\int_A1_{[0,2]}(x)\\,dx+\\delta_3(A)$. Apakah $\\nu\\ll\\mu$? Buktikan atau bantah dan jelaskan mengapa tidak ada densitas global terhadap $\\mu$.",
      "hint": "Cari himpunan ukuran Lebesgue nol yang mendapat massa dari atom Dirac.",
      "answer": "Diketahui ukuran $\\nu$ merupakan jumlah ukuran panjang yang dibatasi pada $[0,2]$ dan ukuran Dirac di titik 3. Diuji implikasi $\\mu(A)=0\\Rightarrow\\nu(A)=0$ untuk semua $A$.\n\nPilih $A=\\{3\\}$. Ukuran Lebesgue singleton nol, yaitu $\\mu(A)=0$. Suku integral pertama juga nol karena $1_{[0,2]}(3)=0$ dan singleton Lebesgue-nol, tetapi $\\delta_3(A)=1$. Maka $\\nu(A)=1$.\n\nJadi $\\nu\\not\\ll\\mu$. Jika terdapat $h\\ge0$ terukur dengan $\\nu(B)=\\int_Bh\\,d\\mu$ untuk setiap $B$, maka $\\nu(\\{3\\})=\\int_{\\{3\\}}h\\,d\\mu=0$, bertentangan dengan hasil satu. Dengan demikian ukuran ini tidak mempunyai turunan Radon–Nikodym terhadap Lebesgue, walaupun bagian kontinu absolutnya mempunyai densitas $1_{[0,2]}$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-04. Diketahui $\\mu$ ukuran hingga dan $f,g\\ge0$ dua densitas bagi ukuran hingga yang sama $\\nu$. Buktikan bahwa $\\mu(\\{f\\ne g\\})=0$; jelaskan mengapa menyamakan integral hanya pada $X$ tidak cukup.",
      "hint": "Pisahkan daerah f>g dan g>f; berikan contoh dua fungsi dengan integral total sama tetapi integral pada suatu himpunan berbeda.",
      "answer": "Diketahui $\\int_Af\\,d\\mu=\\int_Ag\\,d\\mu=\\nu(A)$ untuk setiap $A$ dan $\\nu(X)<\\infty$. Dibuktikan bahwa kedua fungsi sama hampir di mana-mana. Karena kedua integral total berhingga, selisih integrabel pada setiap himpunan.\n\nPada $B=\\{f>g\\}$, berlaku $\\int_B(f-g)\\,d\\mu=0$. Bila $\\mu(B)>0$, ada $n$ dengan $\\mu(\\{f-g\\ge1/n\\}\\cap B)>0$; maka integral selisih sedikitnya $(1/n)\\mu(\\cdot)>0$, kontradiksi. Jadi $\\mu(B)=0$. Argumen simetris pada $\\{g>f\\}$ memberi ukuran nol juga. Gabungan keduanya adalah $\\{f\\ne g\\}$.\n\nKesamaan integral hanya pada seluruh ruang tidak cukup: pada $[0,1]$ dengan Lebesgue, fungsi $f(x)=2x$ dan $g(x)=1$ sama-sama berintegral satu, tetapi $\\int_0^{1/2}f\\,dx=1/4$ sedangkan $\\int_0^{1/2}g\\,dx=1/2$. Karena itu definisi densitas mengharuskan kesamaan untuk semua himpunan terukur.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-05. Pada $[0,1]$, definisikan $d\\nu=2x\\,dx$ dan $d\\rho=4x^3\\,dx$. Tentukan $d\\rho/d\\nu$, verifikasi pada interval $[0,t]$, dan periksa aturan rantai.",
      "hint": "Bagi densitas pada x>0; perlakukan titik nol sebagai himpunan ν-nol.",
      "answer": "Diketahui $g(x)=d\\nu/dx=2x$ dan $k(x)=d\\rho/dx=4x^3$. Untuk $x>0$, rasio $h(x)=k(x)/g(x)=2x^2$; pada $x=0$ tetapkan $h(0)=0$ karena singleton itu berukuran $\\nu$ nol.\n\nUntuk $0\\le t\\le1$, $\\int_{[0,t]}h\\,d\\nu=\\int_0^t(2x^2)(2x)\\,dx=\\int_0^t4x^3\\,dx=t^4$. Secara langsung $\\rho([0,t])=\\int_0^t4x^3\\,dx=t^4$, sehingga hasil sesuai. Pada himpunan terukur umum kesamaan mengikuti identitas integran $h(x)g(x)=k(x)$ hampir di mana-mana.\n\nAturan rantai memberikan $(d\\rho/d\\nu)(d\\nu/dx)=(2x^2)(2x)=4x^3=d\\rho/dx$. Ini membuktikan representasi yang diminta; pembagian oleh $2x$ tidak dilakukan pada titik nol, sehingga tidak ada pembagian oleh nol.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-06. Misalkan $P$ seragam pada $\\{1,2,3\\}$ dan $L(i)=i/2$. Tentukan apakah $L$ merupakan densitas suatu probabilitas $Q$ terhadap $P$, kemudian hitung $Q(\\{2,3\\})$ dan $E_Q[I]$ untuk $I(i)=i$.",
      "hint": "Periksa E_P[L]=1 lalu gunakan E_Q[φ]=E_P[φL].",
      "answer": "Diketahui $P(\\{i\\})=1/3$ untuk $i=1,2,3$, dan $L(i)=i/2\\ge0$. Agar $Q(A)=E_P[1_AL]$ menjadi probabilitas, perlu $E_P[L]=1$. Hitung $E_P[L]=(1/3)(1/2+1+3/2)=1$, sehingga normalisasi benar.\n\nMassa atom baru ialah $Q(\\{1\\})=(1/3)(1/2)=1/6$, $Q(\\{2\\})=1/3$, dan $Q(\\{3\\})=(1/3)(3/2)=1/2$. Maka $Q(\\{2,3\\})=1/3+1/2=5/6$.\n\nDengan rumus perubahan ukuran, $E_Q[I]=E_P[IL]=(1/3)\\sum_{i=1}^3i(i/2)=(1/6)(1+4+9)=14/6=7/3$. Verifikasi langsung memberi $1(1/6)+2(1/3)+3(1/2)=1/6+4/6+9/6=14/6$. Jadi hasil konsisten.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-07. Pada $\\mathbb N$ dengan ukuran hitung $\\mu$, definisikan $\\nu(A)=\\sum_{n\\in A}3^{-n}$. Buktikan sigma-hingga, tentukan densitas, dan hitung $\\nu(\\mathbb N)$ serta $\\nu(\\{2,4,6,\\ldots\\})$.",
      "hint": "Gunakan partisi singleton dan dua deret geometri.",
      "answer": "Diketahui $\\mu(\\{n\\})=1$ dan $\\nu(\\{n\\})=3^{-n}$ untuk $n\\ge1$. Ruang $\\mathbb N$ merupakan gabungan terhitung singleton yang masing-masing berukuran $\\mu$ satu; maka $\\mu$ sigma-hingga. Ukuran $\\nu$ juga hingga karena deret geometri konvergen.\n\nSatu-satunya himpunan $\\mu$-nol adalah kosong, sehingga $\\nu\\ll\\mu$. Pada setiap atom, densitas harus $h(n)=\\nu(\\{n\\})/\\mu(\\{n\\})=3^{-n}$. Untuk setiap $A\\subseteq\\mathbb N$, $\\int_Ah\\,d\\mu=\\sum_{n\\in A}3^{-n}=\\nu(A)$, jadi identitas berlaku untuk semua himpunan.\n\nTotal massa $\\nu(\\mathbb N)=\\sum_{n=1}^\\infty3^{-n}=(1/3)/(1-1/3)=1/2$. Untuk bilangan genap, $\\nu(\\{2,4,\\ldots\\})=\\sum_{k=1}^\\infty3^{-2k}=(1/9)/(1-1/9)=1/8$. Ukuran ini bukan probabilitas karena total massanya $1/2$, tetapi tetap mempunyai densitas Radon–Nikodym.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "RN-08. Pada $[0,1]$, diketahui $d\\nu/d\\mu=2x$ dengan $\\mu$ Lebesgue. Tentukan $\\int_0^1x^2\\,d\\nu$ dengan rumus perubahan ukuran dan buktikan bahwa hasilnya bukan $\\int_0^1x^2\\,d\\mu$.",
      "hint": "Gunakan integran baru x²(2x) dan bandingkan dengan integral Lebesgue biasa.",
      "answer": "Diketahui ukuran $\\nu(A)=\\int_A2x\\,d\\mu$ dan fungsi $\\varphi(x)=x^2$. Karena $\\varphi\\ge0$ terukur, rumus perubahan ukuran dapat digunakan tanpa persoalan integrabilitas bertanda. Yang ditentukan ialah integral terhadap $\\nu$, bukan terhadap Lebesgue.\n\nRumus perubahan ukuran memberi $\\int_0^1x^2\\,d\\nu=\\int_0^1x^2(2x)\\,dx=\\int_0^12x^3\\,dx=[x^4/2]_0^1=1/2$. Sebaliknya, integral terhadap $\\mu$ adalah $\\int_0^1x^2\\,dx=[x^3/3]_0^1=1/3$.\n\nPerbedaan $1/2$ dan $1/3$ muncul karena $\\nu$ memberikan bobot lebih besar pada titik dekat 1. Identitas $d\\nu=(2x)\\,d\\mu$ harus diterapkan pada integran sebelum integrasi. Dengan demikian nilai yang diminta adalah $1/2$, bukan $1/3$.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
