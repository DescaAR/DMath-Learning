import type { BookLessonContent } from "@/data/book-content-types";

/** Exact differential equations: authored lesson, Simmons (2017); Boyce–DiPrima–Meade (2017). */
export const exactDifferentialContent: BookLessonContent = {
  "intro": [
    "Persamaan diferensial $M(x,y)\\,dx+N(x,y)\\,dy=0$ disebut eksak jika kedua koefisiennya merupakan turunan parsial dari satu fungsi potensial $F$. Dalam keadaan ini, sepanjang kurva solusi berlaku $dF=0$, sehingga persamaan diferensial berubah menjadi persamaan tingkat $F(x,y)=C$. Persoalan utama bukan menghafal rumus, melainkan menentukan kapan fungsi $F$ benar-benar ada dan bagaimana membangunnya.",
    "Syarat $M_y=N_x$ sering diajarkan sebagai uji eksak, tetapi bentuk pernyataan yang tepat harus menyebutkan domain. Pada persegi panjang terbuka, kesamaan turunan silang dan kontinuitas turunannya cukup untuk membangun potensial secara eksplisit. Pada domain berlubang, syarat yang sama belum tentu cukup. Perbedaan ini dibuktikan dengan contoh medan putar di bidang tanpa titik asal.",
    "Setiap perhitungan berikut memisahkan uji turunan silang, konstruksi potensial, verifikasi kedua turunan parsial, dan penentuan konstanta melalui data awal. Ketika solusi ditulis implisit, syarat $F_y\\ne0$ diperlukan agar kurva dapat dinyatakan sebagai grafik $y(x)$ di sekitar titik awal. Referensi: G. F. Simmons, Differential Equations with Applications and Historical Notes, edisi ke-3 (2017), Bab 2; W. E. Boyce, R. C. DiPrima, dan D. B. Meade, Elementary Differential Equations and Boundary Value Problems, edisi ke-11 (2017), Bab 2."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Persamaan Diferensial Eksak dan Fungsi Potensial",
      "statement": "Misalkan $U\\subseteq\\mathbb R^2$ terbuka dan $M,N\\in C^1(U)$. Bentuk diferensial $M(x,y)\\,dx+N(x,y)\\,dy$ disebut eksak pada $U$ apabila terdapat $F\\in C^2(U)$ sehingga $F_x=M$ dan $F_y=N$ di setiap titik $U$. Persamaan $M\\,dx+N\\,dy=0$ disebut persamaan eksak pada $U$.",
      "explanation": "Eksak adalah sifat pada seluruh domain yang disebutkan, bukan hanya kesamaan dua turunan pada satu titik."
    },
    {
      "kind": "definition",
      "title": "Fungsi Potensial",
      "statement": "Untuk bentuk diferensial eksak $M\\,dx+N\\,dy$ pada $U$, fungsi $F$ yang memenuhi $\\nabla F=(M,N)$ disebut fungsi potensial. Setiap himpunan tingkat $F(x,y)=C$ merupakan kandidat kurva solusi; pada bagian dengan $F_y\\ne0$ kurva tersebut dapat dinyatakan sebagai fungsi $y(x)$.",
      "explanation": "Konstanta tambahan pada $F$ tidak mengubah turunannya. Verifikasi harus memeriksa kedua turunan parsial."
    },
    {
      "kind": "definition",
      "title": "Bentuk Diferensial Tertutup",
      "statement": "Bentuk diferensial $M\\,dx+N\\,dy$ dengan $M,N\\in C^1(U)$ disebut tertutup apabila $M_y=N_x$ pada seluruh $U$. Bentuk eksak selalu tertutup, tetapi kebalikannya memerlukan kondisi domain, misalnya $U$ persegi panjang terbuka.",
      "explanation": "Istilah tertutup berkaitan dengan turunan silang, bukan dengan himpunan tertutup dalam topologi."
    },
    {
      "kind": "definition",
      "title": "Titik Reguler untuk Solusi Implisit",
      "statement": "Jika $F\\in C^1(U)$, titik $(x_0,y_0)\\in U$ dengan $F_y(x_0,y_0)\\ne0$ disebut reguler terhadap variabel $y$. Di sekitar titik ini, persamaan $F(x,y)=F(x_0,y_0)$ menentukan fungsi terdiferensialkan $y(x)$ dan $y'=-F_x/F_y$.",
      "explanation": "Bila $F_y=0$, rumus pembagian tidak sah; kurva tingkat masih mungkin ada tetapi tidak selalu berupa grafik $y(x)$."
    },
    {
      "kind": "proposition",
      "title": "Eksak Mengakibatkan Tertutup",
      "statement": "Jika $U\\subseteq\\mathbb R^2$ terbuka, $M,N\\in C^1(U)$, dan $M\\,dx+N\\,dy$ eksak pada $U$, maka $M_y=N_x$ pada $U$.",
      "proof": [
        "Diketahui terdapat $F\\in C^2(U)$ dengan $F_x=M$ dan $F_y=N$. Dibuktikan bahwa kedua turunan silang koefisien sama di setiap titik domain.",
        "Ambil sebarang $(x,y)\\in U$. Dari $F_x=M$ diperoleh $M_y=F_{xy}$. Dari $F_y=N$ diperoleh $N_x=F_{yx}$.",
        "Karena $F\\in C^2(U)$, teorema kesamaan turunan parsial campuran memberikan $F_{xy}=F_{yx}$. Jadi $M_y(x,y)=N_x(x,y)$. Karena titik dipilih sebarang, kesamaan berlaku pada seluruh $U$. Dengan demikian, setiap bentuk eksak adalah tertutup."
      ],
      "explanation": "Ini adalah syarat perlu; tanpa hipotesis domain tambahan, belum menjadi syarat cukup."
    },
    {
      "kind": "theorem",
      "title": "Kriteria Eksak pada Persegi Panjang Terbuka",
      "statement": "Misalkan $I,J\\subseteq\\mathbb R$ interval terbuka, $U=I\\times J$, dan $M,N\\in C^1(U)$. Bentuk $M\\,dx+N\\,dy$ eksak pada $U$ jika dan hanya jika $M_y=N_x$ di seluruh $U$.",
      "proof": [
        "Diketahui $M,N\\in C^1(I\\times J)$. Dibuktikan kedua arah. ($\\Rightarrow$) Jika bentuk eksak, proposisi sebelumnya langsung memberi $M_y=N_x$ pada seluruh persegi panjang.",
        "($\\Leftarrow$) Andaikan $M_y=N_x$. Pilih $(a,b)\\in I\\times J$ dan definisikan $F(x,y)=\\int_a^x M(t,b)\\,dt+\\int_b^y N(x,s)\\,ds$. Semua ruas integral berada di dalam $U$ karena $I$ dan $J$ interval.",
        "Dengan teorema dasar kalkulus, $F_y(x,y)=N(x,y)$. Diferensiasi integral terhadap parameter $x$ sah karena $N_x$ kontinu, sehingga $F_x(x,y)=M(x,b)+\\int_b^y N_x(x,s)\\,ds$.",
        "Gunakan $N_x=M_y$ dan teorema dasar kalkulus sekali lagi: $F_x(x,y)=M(x,b)+\\int_b^y M_y(x,s)\\,ds=M(x,b)+M(x,y)-M(x,b)=M(x,y)$.",
        "Kedua turunan $F_x=M$ dan $F_y=N$ berkelas $C^1$, sehingga $F\\in C^2(U)$. Jadi bentuk eksak. Dengan demikian, kedua implikasi terbukti."
      ],
      "explanation": "Rumus konstruksi memakai lintasan dua ruas di dalam persegi panjang; tidak boleh langsung diterapkan pada domain yang mempunyai lubang."
    },
    {
      "kind": "proposition",
      "title": "Keunikan Potensial hingga Konstanta",
      "statement": "Misalkan $U=I\\times J$ persegi panjang terbuka dan $F,G\\in C^1(U)$ memenuhi $F_x=G_x$ serta $F_y=G_y$. Maka terdapat $C\\in\\mathbb R$ sehingga $F=G+C$ pada seluruh $U$.",
      "proof": [
        "Diketahui dua fungsi dengan gradien sama. Dibuktikan selisihnya konstan. Definisikan $H=F-G$. Maka $H_x=H_y=0$ pada $U$.",
        "Pilih $(a,b)\\in U$ dan sebarang $(x,y)\\in U$. Sepanjang ruas horizontal dari $(a,b)$ ke $(x,b)$, fungsi $t\\mapsto H(t,b)$ mempunyai turunan $H_x(t,b)=0$. Teorema nilai rata-rata memberi $H(x,b)=H(a,b)$.",
        "Sepanjang ruas vertikal dari $(x,b)$ ke $(x,y)$, turunan $s\\mapsto H(x,s)$ adalah $H_y(x,s)=0$, sehingga $H(x,y)=H(x,b)$.",
        "Gabungkan kedua identitas: $H(x,y)=H(a,b)=C$ untuk setiap $(x,y)$. Jadi $F=G+C$. Dengan demikian, keunikan hingga konstanta terbukti."
      ],
      "explanation": "Keterhubungan domain penting: pada domain yang terpisah, konstanta dapat berbeda antar-komponen."
    },
    {
      "kind": "theorem",
      "title": "Solusi Lokal sebagai Kurva Tingkat",
      "statement": "Misalkan $F\\in C^2(U)$ dan $(x_0,y_0)\\in U$ memenuhi $F_y(x_0,y_0)\\ne0$. Secara lokal terdapat tepat satu fungsi $C^1$ dengan $y(x_0)=y_0$ dan $F(x,y(x))=F(x_0,y_0)$. Fungsi itu memenuhi $F_x+F_y y'=0$, atau $y'=-F_x/F_y$.",
      "proof": [
        "Diketahui titik awal reguler terhadap $y$. Dibuktikan keberadaan lokal, ketunggalan lokal, dan persamaan turunannya. Karena $F\\in C^2$, fungsi $F$ terdiferensialkan kontinu dan $F_y(x_0,y_0)\\ne0$.",
        "Teorema fungsi implisit memberikan interval terbuka di sekitar $x_0$, interval di sekitar $y_0$, dan tepat satu fungsi $C^1$ bernilai pada interval tersebut yang memenuhi $F(x,y(x))=F(x_0,y_0)$ serta $y(x_0)=y_0$.",
        "Turunkan identitas tingkat terhadap $x$ menggunakan aturan rantai: $F_x(x,y(x))+F_y(x,y(x))y'(x)=0$. Karena $F_y$ tetap taknol pada lingkungan yang cukup kecil, diperoleh $y'=-F_x/F_y$.",
        "Sebaliknya, setiap fungsi $C^1$ pada lingkungan yang sama dengan $y'=-F_x/F_y$ dan nilai awal yang sama memenuhi $\\frac{d}{dx}F(x,y(x))=0$, sehingga $F$ konstan menurut teorema nilai rata-rata. Ketunggalan fungsi implisit memastikan grafiknya sama. Dengan demikian, klaim terbukti secara lokal."
      ],
      "explanation": "Teorema ini tidak mengklaim bahwa satu grafik $y(x)$ selalu dapat diperpanjang melewati titik dengan $F_y=0$."
    },
    {
      "kind": "proposition",
      "title": "Integral Garis Bentuk Eksak",
      "statement": "Jika $F\\in C^1(U)$ dan $\\gamma:[a,b]\\to U$ lintasan $C^1$ bagian demi bagian, maka $\\int_\\gamma F_x\\,dx+F_y\\,dy=F(\\gamma(b))-F(\\gamma(a))$. Khususnya, integral bentuk eksak pada lintasan tertutup bernilai nol.",
      "proof": [
        "Diketahui $\\gamma(t)=(x(t),y(t))$ dan gradien $F$ pada lintasan. Dibuktikan integral hanya bergantung pada kedua ujungnya.",
        "Pada setiap subinterval tempat $\\gamma$ berkelas $C^1$, aturan rantai memberikan $\\frac{d}{dt}F(\\gamma(t))=F_x(\\gamma(t))x'(t)+F_y(\\gamma(t))y'(t)$.",
        "Integralkan terhadap $t$ pada setiap subinterval dan gunakan teorema dasar kalkulus. Jumlah semua selisih nilai $F$ bersifat teleskopik; nilai pada titik sambung saling menghapus.",
        "Maka integral garis sama dengan $F(\\gamma(b))-F(\\gamma(a))$. Jika lintasan tertutup, kedua ujungnya sama dan selisih bernilai nol. Dengan demikian, sifat kebebasan lintasan terbukti."
      ],
      "explanation": "Sifat ini dapat dipakai sebagai uji ketidakeksakan: satu lintasan tertutup dengan integral tidak nol cukup untuk menolak adanya potensial global."
    },
    {
      "kind": "proposition",
      "title": "Konstruksi Faktor Integrasi yang Hanya Bergantung pada x",
      "statement": "Misalkan $U=I\\times J$ persegi panjang terbuka, $M,N\\in C^1(U)$, dan $N$ tidak nol di $U$. Jika $(M_y-N_x)/N=g(x)$ untuk fungsi kontinu $g:I\\to\\mathbb R$, maka $\\mu(x)=\\exp(\\int_a^x g(t)\\,dt)$, $a\\in I$, merupakan faktor integrasi positif sehingga $\\mu M\\,dx+\\mu N\\,dy$ eksak pada $U$.",
      "proof": [
        "Diketahui rasio $(M_y-N_x)/N$ hanya bergantung pada $x$. Dibuktikan bahwa bentuk setelah dikalikan $\\mu$ memenuhi kriteria eksak. Karena $g$ kontinu, $\\mu>0$ dan $\\mu'=\\mu g$.",
        "Karena $\\mu$ tidak bergantung pada $y$, diperoleh $\\partial_y(\\mu M)=\\mu M_y$. Di sisi lain, aturan hasil kali memberi $\\partial_x(\\mu N)=\\mu' N+\\mu N_x=\\mu(gN+N_x)$.",
        "Definisi $g$ menghasilkan $gN=M_y-N_x$. Karena itu $\\partial_x(\\mu N)=\\mu M_y=\\partial_y(\\mu M)$ pada seluruh $U$.",
        "Kedua koefisien baru berkelas $C^1$ pada persegi panjang. Teorema kriteria eksak memberikan fungsi potensial untuk bentuk baru. Karena $\\mu$ taknol, perkalian tidak mengubah kurva solusi persamaan asal. Dengan demikian, faktor integrasi yang dinyatakan sah."
      ],
      "explanation": "Rasio harus terdefinisi di seluruh domain; rumus tidak dapat digunakan di titik dengan $N=0$ tanpa analisis tambahan."
    },
    {
      "kind": "proposition",
      "title": "Bentuk Tertutup yang Tidak Eksak pada Bidang Berlubang",
      "statement": "Pada $U=\\mathbb R^2\\setminus\\{(0,0)\\}$, tetapkan $M=-y/(x^2+y^2)$ dan $N=x/(x^2+y^2)$. Berlaku $M_y=N_x$ pada $U$, tetapi tidak ada potensial $F$ pada seluruh $U$ dengan $F_x=M$ dan $F_y=N$.",
      "proof": [
        "Diketahui domain tidak memuat titik asal. Dibuktikan bentuk tertutup tetapi tidak eksak. Perhitungan aturan hasil bagi memberi $M_y=(y^2-x^2)/(x^2+y^2)^2$ dan $N_x=(y^2-x^2)/(x^2+y^2)^2$, sehingga bentuk tertutup pada seluruh $U$.",
        "Andaikan ada potensial global $F$. Ambil lintasan tertutup $\\gamma(t)=(\\cos t,\\sin t)$, $0\\le t\\le2\\pi$. Di sepanjang lintasan, $M=-\\sin t$, $N=\\cos t$, $dx=-\\sin t\\,dt$, dan $dy=\\cos t\\,dt$.",
        "Integral garis menjadi $\\int_0^{2\\pi}[\\sin^2 t+\\cos^2 t]\\,dt=2\\pi$. Namun proposisi integral garis menyatakan integral setiap bentuk eksak pada lintasan tertutup harus nol.",
        "Karena $2\\pi\\ne0$, diperoleh kontradiksi. Jadi tidak ada potensial global pada $U$. Dengan demikian, syarat turunan silang saja tidak cukup pada domain berlubang."
      ],
      "explanation": "Secara lokal bentuk ini mempunyai potensial sudut, tetapi sudut tidak dapat dipilih sebagai fungsi kontinu bernilai real tunggal di seluruh bidang berlubang."
    }
  ],
  "examples": [
    {
      "title": "Eksak dan Potensial yang Terverifikasi",
      "problem": "Periksa bentuk $(2xy+3)\\,dx+(x^2+2y)\\,dy$ pada $\\mathbb R^2$.",
      "solution": [
        "Diketahui $M=2xy+3$ dan $N=x^2+2y$. Diperoleh $M_y=2x$ dan $N_x=2x$, sehingga syarat kriteria pada persegi panjang $\\mathbb R^2$ terpenuhi.",
        "Integrasikan $M$ terhadap $x$: $F(x,y)=x^2y+3x+h(y)$. Turunan terhadap $y$ ialah $F_y=x^2+h'(y)$; persamaan $F_y=N$ memberi $h'(y)=2y$, sehingga $h(y)=y^2+C$.",
        "Pilih $C=0$. Verifikasi langsung: $F_x=2xy+3=M$ dan $F_y=x^2+2y=N$. Maka kurva solusi implisit adalah $x^2y+3x+y^2=C$."
      ],
      "conclusion": "Bentuk tersebut eksak pada seluruh bidang, dan kedua turunan potensial telah diverifikasi.",
      "forDefinition": "Persamaan Diferensial Eksak dan Fungsi Potensial"
    },
    {
      "title": "Potensial Tidak Ditentukan oleh Satu Turunan Saja",
      "problem": "Dari $M=3x^2+2y$ dan $N=2x+4y$, tentukan potensial.",
      "solution": [
        "Diketahui $M_y=2$ dan $N_x=2$. Pada $\\mathbb R^2$ kedua koefisien $C^1$, sehingga potensial ada.",
        "Dari $F_x=3x^2+2y$ diperoleh $F=x^3+2xy+h(y)$. Turunan $F_y=2x+h'(y)$ harus sama dengan $2x+4y$, sehingga $h'(y)=4y$ dan $h(y)=2y^2+C$.",
        "Dengan $F=x^3+2xy+2y^2$ diperoleh $F_x=3x^2+2y$ serta $F_y=2x+4y$. Konstanta tambahan tidak memengaruhi kedua turunan."
      ],
      "conclusion": "Semua potensial pada bidang ini berbentuk $x^3+2xy+2y^2+C$.",
      "forDefinition": "Fungsi Potensial"
    },
    {
      "title": "Bentuk yang Tidak Tertutup",
      "problem": "Periksa apakah $y\\,dx+2x\\,dy$ eksak pada $\\mathbb R^2$.",
      "solution": [
        "Diketahui $M=y$ dan $N=2x$. Turunan silang $M_y=1$, sedangkan $N_x=2$.",
        "Karena $1\\ne2$, syarat perlu eksak gagal pada setiap titik. Jika ada potensial $F\\in C^2(\\mathbb R^2)$, teorema kesamaan turunan campuran akan mengharuskan $F_{xy}=1$ dan $F_{yx}=2$ secara bersamaan, suatu kontradiksi.",
        "Jadi bentuk ini tidak tertutup dan tidak eksak pada $\\mathbb R^2$."
      ],
      "conclusion": "Perbedaan turunan silang adalah bukti ketidakeksakan, bukan sekadar indikasi numerik.",
      "forDefinition": "Bentuk Diferensial Tertutup"
    },
    {
      "title": "Titik Reguler pada Lingkaran",
      "problem": "Pada $F(x,y)=x^2+y^2$ dan $(x_0,y_0)=(0,1)$, tentukan solusi lokal $F=1$.",
      "solution": [
        "Diketahui $F_y=2y$, sehingga $F_y(0,1)=2\\ne0$. Teorema fungsi implisit menjamin grafik $y(x)$ yang unik di sekitar $x=0$.",
        "Karena $x^2+y^2=1$ dan nilai awal $y(0)=1>0$, cabang yang sesuai adalah $y(x)=\\sqrt{1-x^2}$ untuk $|x|<1$.",
        "Diferensiasi memberi $y'=-x/\\sqrt{1-x^2}=-F_x/F_y$. Di titik $(\\pm1,0)$, $F_y=0$ dan rumus tersebut tidak dapat digunakan untuk grafik $y(x)$ yang melewati titik itu."
      ],
      "conclusion": "Cabang atas lingkaran adalah solusi lokal yang benar; cabang bawah tidak memenuhi data awal.",
      "forDefinition": "Titik Reguler untuk Solusi Implisit"
    },
    {
      "title": "Membangun Potensial dari Dua Integral",
      "problem": "Tentukan potensial bagi $(2xy+y^2)\\,dx+(x^2+2xy)\\,dy$.",
      "solution": [
        "Diketahui $M_y=2x+2y$ dan $N_x=2x+2y$. Karena domain $\\mathbb R^2$ persegi panjang terbuka, kriteria eksak berlaku.",
        "Ambil titik dasar $(0,0)$. Rumus konstruksi memberi $F(x,y)=\\int_0^x M(t,0)\\,dt+\\int_0^y N(x,s)\\,ds=0+\\int_0^y(x^2+2xs)\\,ds=x^2y+xy^2$.",
        "Verifikasi $F_x=2xy+y^2=M$ dan $F_y=x^2+2xy=N$. Oleh sebab itu solusi implisit adalah $x^2y+xy^2=C$."
      ],
      "conclusion": "Rumus dua integral menghindari ketidakjelasan fungsi integrasi tambahan."
    },
    {
      "title": "Syarat Tertutup Tidak Cukup pada Domain Berlubang",
      "problem": "Tinjau bentuk $-y/(x^2+y^2)\\,dx+x/(x^2+y^2)\\,dy$ pada bidang tanpa asal.",
      "solution": [
        "Diketahui $M_y=N_x=(y^2-x^2)/(x^2+y^2)^2$ di seluruh domain. Jadi bentuk tertutup.",
        "Untuk lingkaran satuan $\\gamma(t)=(\\cos t,\\sin t)$, $0\\le t\\le2\\pi$, diperoleh integral $\\int_0^{2\\pi}1\\,dt=2\\pi$.",
        "Andaikan bentuk eksak, integral sepanjang lintasan tertutup harus $F(\\gamma(2\\pi))-F(\\gamma(0))=0$, bertentangan dengan $2\\pi$. Maka tidak ada potensial global."
      ],
      "conclusion": "Domain tidak dapat diabaikan ketika menggunakan kriteria eksak."
    },
    {
      "title": "Faktor Integrasi Bergantung pada x",
      "problem": "Cari faktor integrasi untuk $2y\\,dx+x\\,dy=0$ pada $x>0$.",
      "solution": [
        "Diketahui $M=2y$, $N=x$, sehingga $M_y=2$ dan $N_x=1$. Karena $N=x>0$, rasio $(M_y-N_x)/N=1/x$ terdefinisi dan hanya bergantung pada $x$.",
        "Ambil $\\mu(x)=\\exp(\\int_1^x dt/t)=x$. Persamaan menjadi $2xy\\,dx+x^2\\,dy=0$, yang memiliki potensial $F=x^2y$ karena $F_x=2xy$ dan $F_y=x^2$.",
        "Maka $x^2y=C$. Substitusi $y=C/x^2$ menghasilkan $2y+x y'=2C/x^2-2C/x^2=0$, sehingga solusi terverifikasi untuk $x>0$."
      ],
      "conclusion": "Faktor integrasi mengubah bentuk tidak eksak menjadi eksak tanpa mengubah solusi pada domain $x>0$."
    },
    {
      "title": "Integral Garis Tidak Bergantung pada Lintasan",
      "problem": "Hitung integral $(2x+y)\\,dx+(x+2y)\\,dy$ dari $(0,0)$ ke $(1,2)$.",
      "solution": [
        "Diketahui $M=2x+y$, $N=x+2y$ dan $M_y=N_x=1$. Potensial yang memenuhi kedua persamaan adalah $F=x^2+xy+y^2$.",
        "Teorema integral garis memberi nilai $F(1,2)-F(0,0)=1+2+4=7$.",
        "Verifikasi melalui lintasan dua ruas: pada $(t,0)$, $0\\le t\\le1$, integralnya $\\int_0^1 2t\\,dt=1$; pada $(1,s)$, $0\\le s\\le2$, integralnya $\\int_0^2(1+2s)\\,ds=2+4=6$. Jumlah $1+6=7$ sesuai dengan potensial."
      ],
      "conclusion": "Kedua cara memberi nilai 7, menguji sekaligus perhitungan potensial dan independensi lintasan."
    }
  ],
  "exercises": [
    {
      "prompt": "EX-01. Selesaikan $(2xy+4x)\\,dx+(x^2+6y)\\,dy=0$ dengan data awal $y(1)=1$, lalu hitung $y'(1)$.",
      "hint": "Periksa $M_y=N_x$, bangun potensial, lalu gunakan $y'=-M/N$ pada titik awal.",
      "answer": "Diketahui $M=2xy+4x$, $N=x^2+6y$, dan $y(1)=1$. Ditentukan kurva tingkat serta kemiringannya. Pertama, $M_y=2x=N_x$ pada $\\mathbb R^2$; jadi bentuk eksak. Integrasi terhadap $x$ memberi $F=x^2y+2x^2+h(y)$. Karena $F_y=x^2+h'(y)=x^2+6y$, diperoleh $h'(y)=6y$ dan $h(y)=3y^2+C$. Ambil $F=x^2y+2x^2+3y^2$ dan verifikasi $F_x=2xy+4x=M$, $F_y=x^2+6y=N$. Data awal memberi $F(1,1)=1+2+3=6$, sehingga solusi implisitnya $x^2y+2x^2+3y^2=6$. Di $(1,1)$, $F_y=7\\ne0$, maka ada grafik solusi lokal dan $y'(1)=-F_x(1,1)/F_y(1,1)=-(2+4)/(1+6)=-6/7$. Dengan demikian, kurva tingkat 6 memenuhi data awal dan memiliki kemiringan $-6/7$."
    },
    {
      "prompt": "EX-02. Buktikan bahwa $y\\,dx+2x\\,dy=0$ tidak eksak pada setiap persegi panjang terbuka yang tidak kosong.",
      "hint": "Gunakan syarat perlu eksak dan turunan silang, bukan sekadar mencoba mengintegralkan.",
      "answer": "Diketahui $M(x,y)=y$ dan $N(x,y)=2x$, keduanya berkelas $C^1$ pada seluruh bidang. Dibuktikan tidak ada potensial $C^2$ pada persegi panjang terbuka takkosong $I\\times J$. Hitung $M_y=1$ dan $N_x=2$ di setiap titik. Andaikan terdapat $F$ dengan $F_x=M$ dan $F_y=N$. Karena $F\\in C^2$, turunan campuran harus memenuhi $F_{xy}=F_{yx}$. Tetapi $F_{xy}=M_y=1$ dan $F_{yx}=N_x=2$ pada titik mana pun, kontradiksi $1=2$. Jadi tidak ada potensial pada persegi panjang tersebut. Kesimpulan ini berlaku untuk semua persegi panjang terbuka takkosong karena perbedaan turunan silang tidak bergantung pada titik."
    },
    {
      "prompt": "EX-03. Cari solusi implisit $(3x^2y+2y)\\,dx+(x^3+2x+4y)\\,dy=0$ melalui $(0,1)$.",
      "hint": "Integrasikan koefisien $dx$ lalu cocokkan turunan terhadap $y$.",
      "answer": "Diketahui $M=3x^2y+2y$, $N=x^3+2x+4y$, dan titik awal $(0,1)$. Ditentukan potensial dan konstanta tingkat. Diperoleh $M_y=3x^2+2=N_x$, sehingga bentuk eksak pada $\\mathbb R^2$. Integrasi $M$ terhadap $x$ memberi $F=x^3y+2xy+h(y)$. Karena $F_y=x^3+2x+h'(y)$ harus sama dengan $N$, diperoleh $h'(y)=4y$ dan $h(y)=2y^2+C$. Pilih $F=x^3y+2xy+2y^2$. Verifikasi $F_x=3x^2y+2y$ dan $F_y=x^3+2x+4y$. Substitusi $(0,1)$ memberi $C=2$. Maka kurva solusi $x^3y+2xy+2y^2=2$. Selain itu, $F_y(0,1)=4\\ne0$, sehingga kurva menentukan solusi lokal $y(x)$ yang tunggal melalui titik awal."
    },
    {
      "prompt": "EX-04. Untuk $x>0$, cari solusi masalah nilai awal $2y\\,dx+x\\,dy=0$, $y(1)=3$, dengan faktor integrasi yang hanya bergantung pada $x$.",
      "hint": "Gunakan rasio $(M_y-N_x)/N$ dan verifikasi kembali ke persamaan awal.",
      "answer": "Diketahui $M=2y$, $N=x$, dan domain $x>0$. Karena $M_y=2$ dan $N_x=1$, bentuk awal tidak eksak. Rasio $(M_y-N_x)/N=(2-1)/x=1/x$ hanya bergantung pada $x$, dan $N\\ne0$ pada domain. Ambil $\\mu(x)=\\exp(\\int_1^x dt/t)=x>0$. Persamaan setelah dikalikan menjadi $2xy\\,dx+x^2\\,dy=0$. Potensialnya $F=x^2y$ sebab $F_x=2xy$ dan $F_y=x^2$. Jadi $x^2y=C$; syarat $y(1)=3$ memberi $C=3$, sehingga $y(x)=3/x^2$ untuk $x>0$. Turunannya $y'=-6/x^3$, dan persamaan asal dalam bentuk $2y+xy'=0$ menjadi $6/x^2-6/x^2=0$. Nilai awal juga tepat 3. Dengan demikian, solusi yang dicari terverifikasi pada seluruh interval $(0,\\infty)$."
    },
    {
      "prompt": "EX-05. Pada $x>0$, $y>0$, temukan faktor integrasi yang hanya bergantung pada $y$ untuk $y\\,dx+2x\\,dy=0$, lalu cari solusi melalui $(1,1)$.",
      "hint": "Jika $M\\ne0$, periksa $(N_x-M_y)/M$ sebagai fungsi $y$.",
      "answer": "Diketahui $M=y$, $N=2x$ pada kuadran positif. Ditentukan faktor integrasi $\\mu(y)$ dan solusi melalui $(1,1)$. Karena $N_x-M_y=2-1=1$, rasio $(N_x-M_y)/M=1/y$ hanya bergantung pada $y$, dengan $M=y>0$. Persamaan eksak untuk faktor $\\mu(y)$ menuntut $\\partial_y(\\mu M)=\\partial_x(\\mu N)$, yakni $\\mu' M+\\mu M_y=\\mu N_x$, atau $\\mu'/\\mu=(N_x-M_y)/M=1/y$. Ambil $\\mu(y)=\\exp(\\int_1^y ds/s)=y$. Bentuk baru ialah $y^2\\,dx+2xy\\,dy=0$ dengan potensial $F=xy^2$, sebab $F_x=y^2$ dan $F_y=2xy$. Data awal memberi $F(1,1)=1$, jadi $xy^2=1$. Karena $x,y>0$, diperoleh $y=x^{-1/2}$. Verifikasi $y'=-\\tfrac12 x^{-3/2}$ dan $y+2xy'=x^{-1/2}-x^{-1/2}=0$. Dengan demikian, solusi positif memenuhi persamaan awal dan data awal."
    },
    {
      "prompt": "EX-06. Buktikan bentuk $-y/(x^2+y^2)\\,dx+x/(x^2+y^2)\\,dy$ tertutup tetapi tidak eksak pada $\\mathbb R^2\\setminus\\{(0,0)\\}$.",
      "hint": "Hitung turunan silang dan integral sepanjang lingkaran satuan.",
      "answer": "Diketahui $U=\\mathbb R^2\\setminus\\{(0,0)\\}$, $M=-y/(x^2+y^2)$, dan $N=x/(x^2+y^2)$. Dibuktikan tertutup tetapi tidak eksak. Turunan parsial menghasilkan $M_y=-(x^2+y^2)^{-1}+2y^2(x^2+y^2)^{-2}=(y^2-x^2)/(x^2+y^2)^2$ dan $N_x=(x^2+y^2)^{-1}-2x^2(x^2+y^2)^{-2}=(y^2-x^2)/(x^2+y^2)^2$. Jadi $M_y=N_x$ pada $U$. Andaikan terdapat potensial global $F$. Parametrisasi lingkaran satuan $\\gamma(t)=(\\cos t,\\sin t)$, $0\\le t\\le2\\pi$, memberikan $M(\\gamma(t))=-\\sin t$, $N(\\gamma(t))=\\cos t$, $x'(t)=-\\sin t$, $y'(t)=\\cos t$. Integral garis adalah $\\int_0^{2\\pi}(\\sin^2t+\\cos^2t)\\,dt=2\\pi$. Namun integral gradien di sepanjang lintasan tertutup harus $F(\\gamma(2\\pi))-F(\\gamma(0))=0$, kontradiksi. Jadi bentuk tertutup tetapi tidak eksak secara global. Contoh ini membuktikan bahwa syarat domain pada kriteria eksak tidak boleh dihilangkan."
    },
    {
      "prompt": "EX-07. Hitung integral garis $(2x+y)\\,dx+(x+2y)\\,dy$ dari $(0,0)$ ke $(1,2)$ melalui potensial dan lintasan dua ruas.",
      "hint": "Gunakan $F=x^2+xy+y^2$ dan cek masing-masing ruas.",
      "answer": "Diketahui $M=2x+y$ dan $N=x+2y$. Karena $M_y=N_x=1$, bentuk eksak pada $\\mathbb R^2$. Potensial $F=x^2+xy+y^2$ memenuhi $F_x=2x+y$ dan $F_y=x+2y$. Oleh teorema integral garis, integral dari $(0,0)$ ke $(1,2)$ bernilai $F(1,2)-F(0,0)=1+2+4=7$. Verifikasi dengan lintasan dua ruas: ruas pertama $\\gamma_1(t)=(t,0)$, $0\\le t\\le1$, memberi $\\int_{\\gamma_1}M\\,dx+N\\,dy=\\int_0^1 2t\\,dt=1$. Ruas kedua $\\gamma_2(s)=(1,s)$, $0\\le s\\le2$, memberi $\\int_{\\gamma_2}M\\,dx+N\\,dy=\\int_0^2(1+2s)\\,ds=[s+s^2]_0^2=6$. Jumlah kedua ruas $1+6=7$ sama dengan selisih potensial. Dengan demikian, kedua metode saling memverifikasi dan hasil integral adalah 7."
    },
    {
      "prompt": "EX-08. Buktikan bahwa dua potensial untuk bentuk eksak pada persegi panjang terbuka berbeda hanya dengan konstanta, dan jelaskan mengapa keterhubungan tidak boleh dihapus.",
      "hint": "Periksa turunan selisih sepanjang ruas horizontal dan vertikal; buat contoh domain dua komponen.",
      "answer": "Diketahui $U=I\\times J$ persegi panjang terbuka serta $F,G\\in C^1(U)$ dengan $F_x=G_x$ dan $F_y=G_y$. Dibuktikan $F-G$ konstan pada $U$. Definisikan $H=F-G$; maka $H_x=H_y=0$. Pilih titik dasar $(a,b)\\in U$ dan sebarang $(x,y)\\in U$. Karena $I,J$ interval, ruas horizontal dari $(a,b)$ ke $(x,b)$ dan ruas vertikal dari $(x,b)$ ke $(x,y)$ berada di $U$. Teorema nilai rata-rata pada $t\\mapsto H(t,b)$ memberikan $H(x,b)=H(a,b)$, sedangkan pada $s\\mapsto H(x,s)$ memberikan $H(x,y)=H(x,b)$. Jadi $H(x,y)=H(a,b)$ untuk setiap $(x,y)$, sehingga $F=G+C$ dengan $C=H(a,b)$. Untuk menunjukkan keterhubungan diperlukan, ambil domain terbuka $V=\\{(x,y):x<0\\}\\cup\\{(x,y):x>0\\}$. Fungsi $F=0$ dan $G=0$ pada $x<0$ serta $G=1$ pada $x>0$ sama-sama $C^1(V)$ dan mempunyai gradien nol, tetapi $F-G$ tidak konstan pada seluruh $V$. Dengan demikian, keunikan satu konstanta global bergantung pada keterhubungan domain."
    },
    {
      "prompt": "EX-09. Tentukan solusi implisit $(3x^2+2y)\\,dx+(2x+4y)\\,dy=0$.",
      "hint": "Integrasikan koefisien dx terhadap x, lalu tentukan fungsi integrasi dari koefisien dy.",
      "answer": "Diketahui $M(x,y)=3x^2+2y$ dan $N(x,y)=2x+4y$ pada domain $\\mathbb R^2$. Ditentukan seluruh kurva solusi implisit. Karena $M,N\\in C^1(\\mathbb R^2)$ dan $M_y=2=N_x$, teorema kriteria eksak pada persegi panjang terbuka menjamin keberadaan potensial. Dari $F_x=3x^2+2y$, integrasi terhadap $x$ memberikan $F(x,y)=x^3+2xy+h(y)$; fungsi $h$ belum boleh dianggap konstan karena dapat bergantung pada $y$. Turunkan terhadap $y$: $F_y=2x+h'(y)$. Syarat $F_y=N=2x+4y$ mengakibatkan $h'(y)=4y$, sehingga $h(y)=2y^2+C_0$. Pilih potensial $F(x,y)=x^3+2xy+2y^2$ karena konstanta tambahan tidak mengubah turunannya. Verifikasi kedua persamaan: $F_x=3x^2+2y=M$ dan $F_y=2x+4y=N$. Sepanjang setiap grafik solusi $y(x)$ yang terdefinisi dan memenuhi $N\\ne0$, aturan rantai memberikan $\\frac{d}{dx}F(x,y(x))=F_x+F_y y'=M+Ny'=0$. Maka $F$ konstan, sehingga kurva tingkat $x^3+2xy+2y^2=C$ merupakan solusi implisit. Sebaliknya, pada bagian kurva tingkat dengan $2x+4y\\ne0$, diferensiasi implisit memberi $y'=-(3x^2+2y)/(2x+4y)$, yaitu persamaan asal. Dengan demikian, keluarga kurva tingkat tersebut memberikan seluruh solusi lokal reguler dan verifikasinya berlaku dalam kedua arah."
    }
  ],
  "mistakes": [],
  "connections": []
};
