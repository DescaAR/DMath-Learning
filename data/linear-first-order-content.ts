import type { BookLessonContent } from "@/data/book-content-types";

/** Original rigorous treatment of first-order linear ODEs. Sources: Simmons (2017), Ch. 2; Boyce–DiPrima–Meade (2017), Ch. 2. */
export const linearFirstOrderContent:BookLessonContent = {
  "intro": [
    "Persamaan diferensial linear orde satu bukan sekadar persamaan yang memuat turunan pertama. Bentuk $y'(t)+p(t)y(t)=q(t)$ memiliki struktur khusus: setelah dikalikan fungsi positif yang tepat, ruas kiri menjadi turunan hasil kali. Dengan demikian masalah mencari fungsi yang tidak diketahui berubah menjadi masalah menghitung satu integral biasa.",
    "Koefisien $p$ dan masukan $q$ diasumsikan kontinu pada interval $I$. Interval sangat penting: persamaan $y'+(2/t)y=t$ hanya didefinisikan pada interval yang tidak melewati $t=0$. Data awal $y(t_0)=y_0$ harus diberikan di titik $t_0\\in I$; rumus solusi yang diperoleh berlaku pada seluruh interval tersebut, bukan otomatis melintasi singularitas.",
    "Faktor integrasi $\\mu(t)=\\exp(\\int_{t_0}^{t}p(s)\\,ds)$ bernilai positif dan memenuhi $\\mu'=p\\mu$. Identitas $(\\mu y)'=\\mu(y'+py)$ menjelaskan secara tepat mengapa faktor ini bekerja. Keberadaan dan ketunggalan solusi dapat dibuktikan langsung dari rumus integral tanpa mengutip teorema umum eksistensi dan ketunggalan.",
    "Visualisasi membandingkan kurva solusi eksak dengan iterasi Euler untuk koefisien konstan. Grafik kemiringan pada setiap titik memperlihatkan arah $y'=b-ay$. Metode Euler hanyalah aproksimasi; persamaan dan pembuktian di bawah tetap eksak. Rujukan matematis: G. F. Simmons, Differential Equations with Applications and Historical Notes, edisi ke-3 (2017), Bab 2; W. E. Boyce, R. C. DiPrima, dan D. B. Meade, Elementary Differential Equations and Boundary Value Problems, edisi ke-11 (2017), Bab 2."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Persamaan Diferensial Linear Orde Satu",
      "statement": "Pada interval terbuka $I\\subseteq\\mathbb R$, persamaan $y'(t)+p(t)y(t)=q(t)$ disebut persamaan diferensial linear orde satu jika $p,q:I\\to\\mathbb R$ diketahui. Solusi adalah fungsi $y\\in C^1(I)$ yang memenuhi identitas tersebut untuk setiap $t\\in I$. Persamaan homogen berarti $q\\equiv0$.",
      "explanation": "Linear berarti tidak terdapat pangkat atau hasil kali nonlinear dari y dan turunannya; koefisien boleh bergantung pada t."
    },
    {
      "kind": "definition",
      "title": "Masalah Nilai Awal",
      "statement": "Untuk $t_0\\in I$ dan $y_0\\in\\mathbb R$, masalah nilai awal terdiri atas $y'(t)+p(t)y(t)=q(t)$ pada $I$ dan syarat $y(t_0)=y_0$. Solusi harus memenuhi persamaan pada seluruh $I$ sekaligus syarat pada satu titik tersebut.",
      "explanation": "Syarat awal menentukan satu anggota keluarga solusi. Nilai awal tidak dapat ditempatkan di titik yang berada di luar domain koefisien."
    },
    {
      "kind": "definition",
      "title": "Faktor Integrasi Ternormalisasi",
      "statement": "Jika $p$ kontinu pada $I$ dan $t_0\\in I$, faktor integrasi ternormalisasi didefinisikan oleh $\\mu(t)=\\exp\\!\\left(\\int_{t_0}^{t}p(s)\\,ds\\right)$. Fungsi ini positif pada $I$, memenuhi $\\mu(t_0)=1$, dan $\\mu'(t)=p(t)\\mu(t)$.",
      "explanation": "Pemilihan batas bawah t0 menghilangkan konstanta yang tidak diperlukan; mengalikan faktor integrasi dengan konstanta taknol menghasilkan metode yang sama."
    },
    {
      "kind": "definition",
      "title": "Solusi Homogen dan Solusi Particular",
      "statement": "Solusi homogen memenuhi $y_h'+py_h=0$. Solusi particular $y_p$ memenuhi $y_p'+py_p=q$. Jika $y_p$ suatu solusi particular, keluarga $y_p+C\\mu^{-1}$, $C\\in\\mathbb R$, disebut keluarga solusi umum pada $I$.",
      "explanation": "Solusi particular tidak harus memenuhi nilai awal; konstanta pada solusi homogen yang menyesuaikan data awal."
    },
    {
      "kind": "theorem",
      "title": "Rumus Faktor Integrasi dan Eksistensi Solusi",
      "statement": "Misalkan $I$ interval terbuka, $p,q\\in C(I)$, $t_0\\in I$, dan $y_0\\in\\mathbb R$. Dengan $\\mu(t)=\\exp(\\int_{t_0}^{t}p(s)\\,ds)$, fungsi $y(t)=\\mu(t)^{-1}\\left[y_0+\\int_{t_0}^{t}\\mu(s)q(s)\\,ds\\right]$ merupakan solusi $C^1$ masalah nilai awal $y'+py=q$, $y(t_0)=y_0$ pada seluruh $I$.",
      "proof": [
        "Karena $p$ kontinu pada $I$, teorema dasar kalkulus memberikan $P(t)=\\int_{t_0}^{t}p(s)\\,ds$ yang terdiferensialkan dan $P'=p$. Maka $\\mu=e^P>0$, $\\mu'=p\\mu$, dan $\\mu(t_0)=1$. Pembagian oleh $\\mu$ terdefinisi di seluruh $I$.",
        "Definisikan $F(t)=y_0+\\int_{t_0}^{t}\\mu(s)q(s)\\,ds$. Kontinuitas $\\mu q$ memastikan $F$ terdiferensialkan dengan $F'(t)=\\mu(t)q(t)$. Jadi $y=F/\\mu$ adalah fungsi $C^1$ pada $I$.",
        "Dengan aturan hasil bagi dan identitas $\\mu'=p\\mu$, diperoleh $y'=\\frac{F'}{\\mu}-\\frac{F\\mu'}{\\mu^2}=q-p\\frac{F}{\\mu}=q-py$. Dengan demikian $y'+py=q$ pada setiap $t\\in I$.",
        "Pada titik awal, $F(t_0)=y_0$ karena integral dari $t_0$ ke $t_0$ nol. Karena $\\mu(t_0)=1$, didapat $y(t_0)=y_0$. Jadi fungsi yang dibangun memenuhi persamaan dan data awal. $\\square$"
      ],
      "explanation": "Ini adalah bukti konstruktif keberadaan: fungsi solusinya diberikan langsung dan kemudian diverifikasi."
    },
    {
      "kind": "theorem",
      "title": "Ketunggalan Solusi Masalah Nilai Awal",
      "statement": "Di bawah hipotesis teorema faktor integrasi, masalah nilai awal $y'+py=q$, $y(t_0)=y_0$ mempunyai tepat satu solusi pada $I$.",
      "proof": [
        "Andaikan $y_1,y_2\\in C^1(I)$ keduanya memenuhi persamaan dan data awal yang sama. Tetapkan $z=y_1-y_2$. Pengurangan kedua persamaan memberi $z'+pz=0$ dan $z(t_0)=0$.",
        "Kalikan persamaan untuk $z$ dengan $\\mu$ yang positif dan terdiferensialkan. Aturan hasil kali menghasilkan $(\\mu z)'=\\mu(z'+pz)=0$ di seluruh $I$.",
        "Karena $I$ interval dan turunan $\\mu z$ nol di setiap titiknya, teorema nilai rata-rata menyatakan $\\mu(t)z(t)$ konstan pada $I$. Evaluasi di $t_0$ memberi konstanta $\\mu(t_0)z(t_0)=0$.",
        "Akibatnya $\\mu(t)z(t)=0$ untuk semua $t\\in I$. Dari $\\mu(t)>0$ diperoleh $z(t)=0$, yaitu $y_1=y_2$. Teorema sebelumnya menjamin keberadaan, sehingga solusi tepat satu. $\\square$"
      ],
      "explanation": "Ketunggalan bergantung pada interval dan kontinuitas koefisien, bukan pada tebakan bentuk solusi."
    },
    {
      "kind": "proposition",
      "title": "Keluarga Seluruh Solusi dan Prinsip Selisih",
      "statement": "Jika $p,q\\in C(I)$ dan $y_p$ satu solusi $y'+py=q$, maka setiap solusi lain dan hanya solusi lain berbentuk $y=y_p+C\\mu^{-1}$ untuk suatu $C\\in\\mathbb R$. Secara khusus, selisih dua solusi memenuhi persamaan homogen.",
      "proof": [
        "Ambil solusi lain $y$. Selisih $z=y-y_p$ memenuhi $z'+pz=(y'+py)-(y_p'+py_p)=q-q=0$.",
        "Kalikan dengan $\\mu$ sehingga $(\\mu z)'=0$. Karena $I$ interval, $\\mu z=C$ konstan. Karena $\\mu>0$, diperoleh $y=y_p+C\\mu^{-1}$.",
        "Sebaliknya, ambil sembarang $C\\in\\mathbb R$ dan tetapkan $y=y_p+C\\mu^{-1}$. Turunan $\\mu^{-1}$ adalah $-p\\mu^{-1}$; karenanya $(\\mu^{-1})'+p\\mu^{-1}=0$.",
        "Maka $y'+py=(y_p'+py_p)+C[(\\mu^{-1})'+p\\mu^{-1}]=q$. Kedua arah terbukti, sehingga keluarga yang dinyatakan memuat semua dan hanya semua solusi. $\\square$"
      ],
      "explanation": "Keluarga solusi persamaan nonhomogen adalah translasi ruang solusi homogen, bukan ruang vektor kecuali q identik nol."
    },
    {
      "kind": "proposition",
      "title": "Rumus Koefisien Konstan dan Titik Setimbang",
      "statement": "Untuk konstanta $a,b\\in\\mathbb R$, solusi $y'+ay=b$, $y(t_0)=y_0$ adalah $y(t)=\\frac ba+(y_0-\\frac ba)e^{-a(t-t_0)}$ jika $a\\ne0$, dan $y(t)=y_0+b(t-t_0)$ jika $a=0$. Bila $a\\ne0$, titik setimbangnya adalah $b/a$.",
      "proof": [
        "Jika $a\\ne0$, faktor integrasi ternormalisasi ialah $\\mu(t)=e^{a(t-t_0)}$. Rumus faktor integrasi memberi $y=e^{-a(t-t_0)}[y_0+b\\int_{t_0}^{t}e^{a(s-t_0)}\\,ds]$.",
        "Integralnya adalah $(e^{a(t-t_0)}-1)/a$, sehingga $y=y_0e^{-a(t-t_0)}+(b/a)(1-e^{-a(t-t_0)})$, yang sama dengan rumus pada pernyataan.",
        "Jika $a=0$, persamaan menjadi $y'=b$. Teorema dasar kalkulus memberikan $y(t)=y_0+\\int_{t_0}^{t}b\\,ds=y_0+b(t-t_0)$.",
        "Solusi konstan $y(t)\\equiv c$ memenuhi $ac=b$. Untuk $a\\ne0$ diperoleh $c=b/a$, dan substitusi langsung menunjukkan $y'=0$ serta $ay=b$. Ketunggalan mengikuti teorema sebelumnya. $\\square$"
      ],
      "explanation": "Jika a positif, solusi mendekati titik setimbang ke arah waktu maju; jika a negatif, penyimpangan dari setimbang justru membesar."
    },
    {
      "kind": "corollary",
      "title": "Peluruhan Selisih Dua Solusi",
      "statement": "Misalkan $p,q\\in C([t_0,\\infty))$ dan $p(t)\\ge m>0$ untuk semua $t\\ge t_0$. Jika $y_1,y_2$ solusi $y'+py=q$ dengan nilai awal mungkin berbeda, maka $|y_1(t)-y_2(t)|\\le e^{-m(t-t_0)}|y_1(t_0)-y_2(t_0)|$ untuk $t\\ge t_0$.",
      "proof": [
        "Tetapkan $z=y_1-y_2$. Karena kedua solusi memiliki ruas kanan $q$ yang sama, $z'+pz=0$ pada $[t_0,\\infty)$.",
        "Dengan faktor integrasi yang sama, $(\\mu z)'=0$. Evaluasi pada $t_0$ memberi $z(t)=z(t_0)\\exp(-\\int_{t_0}^{t}p(s)\\,ds)$.",
        "Untuk $t\\ge t_0$, hipotesis $p(s)\\ge m$ memberikan $\\int_{t_0}^{t}p(s)\\,ds\\ge m(t-t_0)$. Karena fungsi eksponensial meningkat, $e^{-\\int p}\\le e^{-m(t-t_0)}$.",
        "Mengambil nilai mutlak pada rumus $z$ dan menggunakan ketaksamaan tersebut menghasilkan batas yang dinyatakan. Jadi pengaruh perbedaan data awal berkurang paling lambat secara eksponensial. $\\square$"
      ],
      "explanation": "Estimasi ini membahas kepekaan terhadap data awal untuk masukan q yang sama; ia bukan klaim bahwa setiap solusi mendekati nol."
    },
    {
      "kind": "proposition",
      "title": "Prinsip Positivitas",
      "statement": "Misalkan $p,q\\in C([t_0,T])$, $q(t)\\ge0$ pada $[t_0,T]$, dan $y(t_0)=y_0\\ge0$. Maka solusi $y'+py=q$ memenuhi $y(t)\\ge0$ untuk setiap $t\\in[t_0,T]$, tanpa memerlukan syarat tanda pada $p$.",
      "proof": [
        "Faktor integrasi $\\mu(t)=\\exp(\\int_{t_0}^{t}p(s)\\,ds)$ bernilai positif di seluruh interval, meskipun $p$ berubah tanda.",
        "Untuk $t\\ge t_0$, fungsi integran $\\mu(s)q(s)$ tidak negatif. Oleh karena itu integral $\\int_{t_0}^{t}\\mu(s)q(s)\\,ds$ juga tidak negatif.",
        "Dari $y_0\\ge0$ diperoleh $y_0+\\int_{t_0}^{t}\\mu(s)q(s)\\,ds\\ge0$.",
        "Membagi ekspresi tersebut dengan $\\mu(t)>0$ mempertahankan tanda. Rumus faktor integrasi memberikan $y(t)\\ge0$ pada seluruh $[t_0,T]$. $\\square$"
      ],
      "explanation": "Arah waktu penting: kesimpulan tidak otomatis berlaku untuk t lebih kecil dari t0."
    },
    {
      "kind": "proposition",
      "title": "Kesalahan Global Metode Euler untuk Koefisien Konstan",
      "statement": "Untuk $a,b\\in\\mathbb R$, $T>0$, dan $n\\in\\mathbb N$, metode Euler dengan $h=T/n$ pada $y'=b-ay$, $y(0)=y_0$, menghasilkan $Y_k=(b/a)+(y_0-b/a)(1-ah)^k$ jika $a\\ne0$; untuk $a=0$, $Y_k=y_0+bkh$. Jika $a>0$, iterasi menuju $b/a$ saat $k\\to\\infty$ dengan $h$ tetap tepat ketika $|1-ah|<1$ (kecuali bila mulai tepat di setimbang).",
      "proof": [
        "Metode Euler menggunakan $Y_{k+1}=Y_k+h(b-aY_k)=(1-ah)Y_k+bh$, dengan $Y_0=y_0$.",
        "Untuk $a\\ne0$, tulis $c=b/a$ dan $Z_k=Y_k-c$. Karena $(1-ah)c+bh=c$, berlaku $Z_{k+1}=(1-ah)Z_k$.",
        "Induksi pada $k$ memberi $Z_k=(1-ah)^k(y_0-c)$. Mengembalikan $Y_k=Z_k+c$ menghasilkan rumus pertama. Untuk $a=0$, rekurensi $Y_{k+1}=Y_k+bh$ memberi $Y_k=y_0+bkh$ melalui penjumlahan.",
        "Jika $a>0$ dan $y_0\\ne c$, deret $(1-ah)^k(y_0-c)$ menuju nol jika dan hanya jika $|1-ah|<1$, setara dengan $0<ah<2$. Jika $y_0=c$, semua iterasi tepat sama dengan $c$ untuk ukuran langkah apa pun. $\\square$"
      ],
      "explanation": "Syarat 0<ah<2 adalah stabilitas Euler terhadap titik setimbang untuk langkah tetap, bukan syarat eksistensi solusi eksak."
    }
  ],
  "examples": [
    {
      "forDefinition": "Persamaan Diferensial Linear Orde Satu",
      "title": "Mengenali Linearitas dan Bentuk Baku",
      "problem": "Tentukan apakah $t y'+2y=t^2$ pada $t>0$, $y'+y^2=1$, dan $y'+t y=\\sin t$ merupakan persamaan linear orde satu.",
      "solution": [
        "Untuk $t>0$, bagi persamaan pertama dengan $t$ sehingga diperoleh $y'+(2/t)y=t$. Koefisien $2/t$ dan masukan $t$ kontinu pada $(0,\\infty)$, maka persamaan pertama linear pada interval itu.",
        "Persamaan kedua tidak linear karena memuat $y^2$. Keberadaan turunan pertama tidak cukup untuk menyebut persamaan linear.",
        "Persamaan ketiga sudah berbentuk $y'+p(t)y=q(t)$ dengan $p(t)=t$ dan $q(t)=\\sin t$, yang kontinu di seluruh $\\mathbb R$."
      ],
      "conclusion": "Linearitas ditentukan oleh ketergantungan terhadap fungsi y dan turunannya, bukan oleh bentuk koefisien t."
    },
    {
      "forDefinition": "Masalah Nilai Awal",
      "title": "Interval Maksimal dari Data Awal",
      "problem": "Perhatikan $y'+\\frac2t y=t$ dengan $y(1)=0$. Tentukan interval yang sah dan selesaikan masalah nilai awal.",
      "solution": [
        "Koefisien $2/t$ tidak terdefinisi pada $t=0$. Karena data awal berada di $t_0=1$, interval terhubung terbesar yang mengandung titik awal dan tidak melintasi singularitas adalah $I=(0,\\infty)$.",
        "Faktor integrasi ternormalisasi ialah $\\mu(t)=\\exp(\\int_1^t2/s\\,ds)=t^2$. Karena $(t^2y)'=t^3$, integrasi dari $1$ ke $t$ memberi $t^2y=(t^4-1)/4$.",
        "Jadi $y(t)=(t^4-1)/(4t^2)$ untuk $t>0$. Substitusi menghasilkan $y(1)=0$ dan $y'+(2/t)y=t$. Rumus ini tidak boleh diklaim berlaku di $t=0$."
      ],
      "conclusion": "Solusi tunggal pada (0,∞), dan titik singular harus dikecualikan."
    },
    {
      "forDefinition": "Faktor Integrasi Ternormalisasi",
      "title": "Membangun Faktor Integrasi",
      "problem": "Untuk $y'+2t\\,y=2t$ dengan $y(0)=0$, tentukan faktor integrasi dan solusi.",
      "solution": [
        "Pilih $t_0=0$. Integrasi koefisien memberi $\\int_0^t2s\\,ds=t^2$, sehingga $\\mu(t)=e^{t^2}$ dan $\\mu(0)=1$.",
        "Kalikan persamaan dengan $e^{t^2}$. Aturan hasil kali menunjukkan $(e^{t^2}y)'=2te^{t^2}$.",
        "Integrasi dari $0$ ke $t$ memberi $e^{t^2}y(t)=\\int_0^t2se^{s^2}\\,ds=e^{t^2}-1$. Karena itu $y(t)=1-e^{-t^2}$, yang memenuhi data awal."
      ],
      "conclusion": "Faktor integrasi mengubah ruas kiri menjadi satu turunan hasil kali."
    },
    {
      "forDefinition": "Solusi Homogen dan Solusi Particular",
      "title": "Memisahkan Solusi Particular dan Homogen",
      "problem": "Tentukan seluruh solusi $y'+3y=6$ dan jelaskan peran konstanta bebas.",
      "solution": [
        "Fungsi konstan $y_p(t)=2$ memenuhi $y_p'+3y_p=6$, sehingga merupakan solusi particular.",
        "Persamaan homogen $z'+3z=0$ memberikan $(e^{3t}z)'=0$ dan karenanya $z=Ce^{-3t}$.",
        "Seluruh solusi adalah $y=2+Ce^{-3t}$. Bila diberikan $y(0)=5$, konstanta ditentukan oleh $5=2+C$, sehingga $C=3$."
      ],
      "conclusion": "Solusi umum adalah solusi particular ditambah satu keluarga homogen."
    },
    {
      "title": "Input Berubah terhadap Waktu",
      "problem": "Selesaikan $y'+y=t$ dengan $y(0)=2$ dan verifikasi dengan diferensiasi.",
      "solution": [
        "Faktor integrasi $\\mu=e^t$ mengubah persamaan menjadi $(e^t y)'=te^t$.",
        "Integrasi parsial memberi $\\int te^t\\,dt=(t-1)e^t+C$, sehingga $y=t-1+Ce^{-t}$.",
        "Data awal $2=-1+C$ memberi $C=3$. Dengan $y'=1-3e^{-t}$, substitusi menghasilkan $y'+y=(1-3e^{-t})+(t-1+3e^{-t})=t$."
      ],
      "conclusion": "Solusi unik adalah $y(t)=t-1+3e^{-t}$."
    },
    {
      "title": "Koefisien yang Berubah Tanda",
      "problem": "Selesaikan $y'-2t\\,y=0$, $y(0)=3$, dan periksa apakah solusi tetap positif.",
      "solution": [
        "Faktor integrasi ialah $\\mu(t)=e^{-t^2}$, karena $\\int_0^t-2s\\,ds=-t^2$.",
        "Persamaan menjadi $(e^{-t^2}y)'=0$, sehingga $e^{-t^2}y=C$. Dari $y(0)=3$ diperoleh $C=3$.",
        "Dengan demikian $y(t)=3e^{t^2}>0$ untuk setiap $t\\in\\mathbb R$. Turunannya $6te^{t^2}$ memenuhi $y'-2ty=0$."
      ],
      "conclusion": "Positivitas tidak mensyaratkan p(t) positif."
    },
    {
      "title": "Estimasi Kepekaan terhadap Data Awal",
      "problem": "Dua solusi $y'+(2+\\sin t)y=\\cos t$ pada $t\\ge0$ memiliki data awal masing-masing $4$ dan $-1$. Berikan batas selisihnya pada $t=3$ tanpa menghitung kedua solusi.",
      "solution": [
        "Koefisien $p(t)=2+\\sin t$ memenuhi $p(t)\\ge1$ karena $\\sin t\\ge-1$ untuk semua $t$.",
        "Selisih $z=y_1-y_2$ memenuhi persamaan homogen $z'+pz=0$ dan $z(0)=4-(-1)=5$.",
        "Teorema peluruhan selisih dengan $m=1$ memberikan $|z(3)|\\le e^{-3}|z(0)|=5e^{-3}$. Ini berlaku tanpa menghitung integral dari $\\cos t$."
      ],
      "conclusion": "Selisih pada t=3 tidak melebihi $5e^{-3}$."
    },
    {
      "title": "Euler dan Stabilitas Diskret",
      "problem": "Untuk $y'+2y=4$, $y(0)=5$, gunakan Euler dengan $h=1.2$ dan tentukan apakah iterasi mendekati titik setimbang.",
      "solution": [
        "Persamaan dapat ditulis $y'=4-2y$ dengan titik setimbang $c=4/2=2$. Rekurensi Euler adalah $Y_{k+1}=Y_k+1.2(4-2Y_k)=-1.4Y_k+4.8$.",
        "Dari rumus eksak diskret diperoleh $Y_k=2+(5-2)(1-2(1.2))^k=2+3(-1.4)^k$.",
        "Karena $|-1.4|>1$, penyimpangan $|Y_k-2|=3(1.4)^k$ tumbuh. Sebaliknya solusi ODE eksak $y(t)=2+3e^{-2t}$ mendekati $2$."
      ],
      "conclusion": "Langkah Euler yang terlalu besar dapat tidak stabil walaupun solusi eksak stabil."
    }
  ],
  "exercises": [
    {
      "prompt": "Selesaikan masalah nilai awal $y'+4y=8$, $y(0)=-1$. Buktikan hasilnya dengan mensubstitusikan fungsi dan turunannya ke persamaan semula.",
      "hint": "Gunakan faktor integrasi e^{4t} atau titik setimbang.",
      "answer": "Diketahui $p=4$ dan $q=8$ kontinu di seluruh $\\mathbb R$. Titik setimbang ialah $8/4=2$. Teorema koefisien konstan memberi $y(t)=2+(-1-2)e^{-4t}=2-3e^{-4t}$. Turunannya $y'=12e^{-4t}$. Maka $y'+4y=12e^{-4t}+8-12e^{-4t}=8$ untuk setiap $t$. Nilai awal $y(0)=2-3=-1$ juga benar. Karena koefisien kontinu, teorema ketunggalan memastikan tidak ada solusi lain pada $\\mathbb R$."
    },
    {
      "prompt": "Selesaikan $y'+(1/t)y=t^2$ dengan $y(2)=1$ pada interval terbesar yang mengandung $2$. Jelaskan mengapa rumus tidak boleh langsung diperluas melewati nol.",
      "hint": "Untuk t>0 faktor integrasi ternormalisasi adalah t/2.",
      "answer": "Koefisien $1/t$ tidak terdefinisi di nol, sehingga interval terbesar yang mengandung $2$ adalah $(0,\\infty)$. Faktor integrasi ternormalisasi $\\mu(t)=\\exp(\\int_2^t1/s\\,ds)=t/2$. Mengalikan persamaan memberi $(ty)'=t^3$. Integrasi menghasilkan $ty=t^4/4+C$ dan $y=t^3/4+C/t$. Dari $y(2)=1$ diperoleh $1=8/4+C/2$, sehingga $C=-2$. Jadi $y=t^3/4-2/t$ untuk $t>0$. Fungsi tidak terdefinisi di $t=0$ dan koefisien ODE juga singular di sana; memperluasnya melewati nol tidak sah."
    },
    {
      "prompt": "Buktikan bahwa jika $p$ kontinu pada interval $I$, semua solusi $y'+p(t)y=0$ memiliki bentuk $y(t)=C\\exp(-\\int_{t_0}^{t}p(s)\\,ds)$. Jelaskan mengapa konstanta $C$ boleh nol.",
      "hint": "Kalikan dengan faktor integrasi ternormalisasi.",
      "answer": "Ambil $t_0\\in I$ dan definisikan $\\mu(t)=\\exp(\\int_{t_0}^{t}p(s)\\,ds)>0$. Untuk solusi homogen, aturan hasil kali memberi $(\\mu y)'=\\mu(y'+py)=0$. Karena $I$ interval, teorema nilai rata-rata menyatakan $\\mu(t)y(t)=C$ untuk suatu konstanta real $C$. Pembagian oleh $\\mu(t)>0$ menghasilkan $y(t)=C\\exp(-\\int_{t_0}^{t}p(s)\\,ds)$. Sebaliknya, diferensiasi rumus tersebut memberi $y'=-py$, sehingga setiap fungsi berbentuk itu memang solusi. Konstanta $C=0$ menghasilkan solusi nol yang sah, dan tidak boleh dibuang melalui pembagian oleh $y$."
    },
    {
      "prompt": "Selesaikan $y'+2ty=2t$ dengan $y(1)=3$. Tentukan pula nilai $y(0)$ dan verifikasi bahwa data awal terpenuhi secara tepat.",
      "hint": "Gunakan mu=e^{t²-1} atau temukan solusi particular konstan.",
      "answer": "Solusi particular konstan $y_p=1$ memenuhi $y_p'+2ty_p=2t$. Persamaan homogen $z'+2tz=0$ mempunyai solusi $z=Ce^{-t^2}$. Karena itu $y=1+Ce^{-t^2}$. Dari $y(1)=3$ diperoleh $3=1+Ce^{-1}$, sehingga $C=2e$. Dengan demikian $y(t)=1+2e^{1-t^2}$ dan $y(0)=1+2e$. Turunannya $y'=-4t e^{1-t^2}$; penjumlahan $y'+2ty=-4t e^{1-t^2}+2t+4t e^{1-t^2}=2t$. Pada $t=1$, $y=1+2=3$."
    },
    {
      "prompt": "Dua solusi $y_1,y_2$ dari $y'+(3+\\cos t)y=\\sin t$ memiliki $y_1(0)=2$ dan $y_2(0)=-2$. Buktikan batas eksplisit untuk $|y_1(t)-y_2(t)|$ pada $t\\ge0$.",
      "hint": "Gunakan 3+cos t≥2 dan persamaan untuk selisih.",
      "answer": "Definisikan $z=y_1-y_2$. Karena kedua solusi memenuhi persamaan nonhomogen yang sama, pengurangan memberi $z'+(3+\\cos t)z=0$. Data awalnya $z(0)=4$. Rumus solusi homogen menyatakan $z(t)=4\\exp(-\\int_0^t(3+\\cos s)\\,ds)=4e^{-3t-\\sin t}$. Karena $3+\\cos s\\ge2$, integral $\\int_0^t(3+\\cos s)\\,ds\\ge2t$ untuk $t\\ge0$. Akibatnya $|z(t)|=4e^{-\\int_0^t(3+\\cos s)\\,ds}\\le4e^{-2t}$. Ini membuktikan peluruhan selisih tanpa mengasumsikan kedua solusi menuju nol."
    },
    {
      "prompt": "Misalkan $q(t)\\ge0$ kontinu pada $[0,5]$ dan $p(t)$ kontinu tanpa batasan tanda. Jika $y'+py=q$ dan $y(0)=0$, buktikan $y(t)\\ge0$ untuk $0\\le t\\le5$; tentukan kondisi cukup agar $y(t)>0$ untuk $t>0$.",
      "hint": "Faktor integrasi positif dan integral fungsi nonnegatif.",
      "answer": "Tetapkan $\\mu(t)=\\exp(\\int_0^tp(s)\\,ds)>0$. Rumus solusi memberi $y(t)=\\mu(t)^{-1}\\int_0^t\\mu(s)q(s)\\,ds$. Karena $\\mu(s)>0$ dan $q(s)\\ge0$, integran tidak negatif. Untuk $t\\ge0$, integral tersebut tidak negatif; pembagian oleh $\\mu(t)>0$ mempertahankan ketaksamaan, sehingga $y(t)\\ge0$. Syarat cukup agar $y(t)>0$ untuk setiap $t>0$ adalah $q(s)>0$ untuk setiap $s\\in(0,5]$ (bahkan cukup bila pada setiap $(0,t)$ terdapat subinterval tempat $q>0$). Kontinuitas memastikan integralnya positif."
    },
    {
      "prompt": "Untuk ODE $y'=3-3y$ dengan $y(0)=2$, bandingkan solusi eksak pada $t=2$ dengan Euler menggunakan $h=1$ dan $h=1/4$. Jelaskan stabilitas tiap pilihan langkah tanpa menyamakan kestabilan dengan galat kecil.",
      "hint": "Gunakan faktor Euler 1-3h dan titik setimbang 1.",
      "answer": "Solusi eksak adalah $y(t)=1+e^{-3t}$, sehingga $y(2)=1+e^{-6}$. Untuk $h=1$, setelah dua langkah, $Y_2=1+(1-3)^2=5$; karena $|1-3h|=2>1$, iterasi tidak stabil terhadap setimbang. Untuk $h=1/4$, diperlukan delapan langkah dan $Y_8=1+(1-3/4)^8=1+4^{-8}$. Karena $|1-3h|=1/4<1$, iterasi stabil. Galat pada $t=2$ masing-masing $|5-(1+e^{-6})|$ dan $|4^{-8}-e^{-6}|$. Stabilitas membahas perilaku iterasi berulang dengan h tetap, bukan jaminan bahwa galat pada satu waktu tertentu kecil."
    },
    {
      "prompt": "Periksa klaim: “Jika $y_1$ dan $y_2$ menyelesaikan $y'+y=1$, maka $y_1+y_2$ juga solusi.” Berikan kontra-contoh dan rumus kombinasi afin yang benar.",
      "hint": "Periksa ruas kanan operator L[y]=y'+y.",
      "answer": "Ambil $y_1=y_2=1$, yang keduanya menyelesaikan $y'+y=1$ karena turunannya nol. Jumlahnya $y_1+y_2=2$ menghasilkan $(y_1+y_2)'+(y_1+y_2)=2$, bukan $1$. Jadi klaim salah. Secara umum operator linear $L[y]=y'+y$ memenuhi $L[y_1+y_2]=L[y_1]+L[y_2]=2$. Namun jika $\\lambda\\in\\mathbb R$, kombinasi afin $y=\\lambda y_1+(1-\\lambda)y_2$ memenuhi $L[y]=\\lambda L[y_1]+(1-\\lambda)L[y_2]=\\lambda+(1-\\lambda)=1$. Ini menunjukkan bahwa himpunan solusi nonhomogen merupakan translasi ruang solusi homogen, bukan ruang vektor."
    }
  ],
  "mistakes": [],
  "connections": []
};
