import type { BookLessonContent } from "@/data/book-content-types";

/** Authored Jacobi and Gauss–Seidel lesson: exact hypotheses, proofs, and worked solutions. */
export const jacobiGaussSeidelContent: BookLessonContent = {
  "intro": [
    "Pada sistem linear besar, eliminasi langsung dapat mahal, sedangkan metode iteratif membangun aproksimasi berurutan yang diharapkan mendekati solusi. Perbedaan Jacobi dan Gauss–Seidel terletak pada kapan komponen yang baru dihitung digunakan. Untuk menilai keberhasilannya, kita tidak cukup melihat angka yang tampak stabil: perlu memeriksa matriks iterasi, residual, dan batas galat.",
    "Gunakan sistem $4x+y=1$ dan $2x+3y=2$. Solusi eksaknya $(1/10,3/5)$, tetapi untuk latihan algoritma kita memulai dari $(0,0)$. Jacobi memakai dua nilai lama pada setiap langkah, sedangkan Gauss–Seidel segera menggunakan nilai $x$ terbaru ketika menghitung $y$. Dengan contoh yang sama, kita dapat membandingkan iterasi secara adil dan memeriksa setiap operasi.",
    "Dominasi diagonal ketat merupakan syarat cukup yang mudah diuji untuk konvergensi kedua metode. Syarat yang lebih umum adalah radius spektral matriks iterasi lebih kecil dari satu. Kita akan membuktikan keduanya, memberi contoh sistem nonsingular yang iterasinya divergen, serta membedakan galat maju yang tidak diketahui dari residual yang dapat dihitung.",
    "Rujukan: Richard S. Varga, Matrix Iterative Analysis, edisi ke-2 (2000), pembahasan splitting dan iterasi stasioner; Yousef Saad, Iterative Methods for Sparse Linear Systems, edisi ke-2 (2003), pembahasan Jacobi, Gauss–Seidel, dan konvergensi. Semua perhitungan contoh di bawah diturunkan langsung dari sistem yang dinyatakan."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Splitting Matriks untuk Iterasi Stasioner",
      "statement": "Diketahui sistem $Ax=b$ dengan $A\\in\\mathbb R^{n\\times n}$. Splitting $A=M-N$ disebut dapat digunakan apabila $M$ nonsingular. Iterasi stasioner yang bersesuaian adalah $x^{(k+1)}=M^{-1}Nx^{(k)}+M^{-1}b$. Matriks $T=M^{-1}N$ disebut matriks iterasi dan $c=M^{-1}b$ disebut vektor konstanta."
    },
    {
      "kind": "definition",
      "title": "Metode Jacobi",
      "statement": "Misalkan $A=D+L+U$, dengan $D$ diagonal, $L$ segitiga bawah ketat, dan $U$ segitiga atas ketat. Jika setiap $a_{ii}\\ne0$, metode Jacobi memperbarui seluruh komponen dari iterasi lama melalui $x_i^{(k+1)}=\\bigl(b_i-\\sum_{j\\ne i}a_{ij}x_j^{(k)}\\bigr)/a_{ii}$. Matriks iterasinya $T_J=-D^{-1}(L+U)$."
    },
    {
      "kind": "definition",
      "title": "Metode Gauss–Seidel",
      "statement": "Dengan $A=D+L+U$ dan $a_{ii}\\ne0$, metode Gauss–Seidel menggunakan komponen terbaru untuk indeks $j<i$: $x_i^{(k+1)}=\\bigl(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)}\\bigr)/a_{ii}$. Splitting-nya $M=D+L$, $N=-U$, sehingga $T_{GS}=-(D+L)^{-1}U$."
    },
    {
      "kind": "definition",
      "title": "Residual, Galat, dan Dominasi Diagonal Ketat",
      "statement": "Untuk aproksimasi $\\widehat x$ pada $Ax=b$, residual adalah $r=b-A\\widehat x$, sedangkan galat maju adalah $e=x^*-\\widehat x$ apabila solusi eksak $x^*$ ada. Matriks $A$ disebut dominan diagonal ketat menurut baris apabila $|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ untuk setiap $i$. Residual dapat dihitung tanpa mengetahui $x^*$; galat maju umumnya tidak."
    },
    {
      "kind": "proposition",
      "title": "Titik Tetap Iterasi dan Solusi Sistem",
      "statement": "Misalkan $A=M-N$, $M$ nonsingular, dan $T=M^{-1}N$, $c=M^{-1}b$. Vektor $x^*$ memenuhi $x^*=Tx^*+c$ jika dan hanya jika $Ax^*=b$.",
      "proof": [
        "Diketahui $A=M-N$ dan $M$ nonsingular. Dibuktikan bahwa persamaan titik tetap ekuivalen dengan sistem linear semula. Untuk arah $(\\Rightarrow)$, misalkan $x^*=M^{-1}Nx^*+M^{-1}b$. Kalikan kedua ruas dengan $M$; operasi ini sah karena $M$ invertibel.",
        "Diperoleh $Mx^*=Nx^*+b$, sehingga $(M-N)x^*=b$. Dengan identitas $M-N=A$, diperoleh $Ax^*=b$. Tidak ada asumsi bahwa iterasinya konvergen yang diperlukan untuk arah ini.",
        "Untuk arah $(\\Leftarrow)$, misalkan $Ax^*=b$. Karena $A=M-N$, berlaku $Mx^*-Nx^*=b$, atau $Mx^*=Nx^*+b$. Kalikan dengan $M^{-1}$ sehingga $x^*=M^{-1}Nx^*+M^{-1}b=Tx^*+c$. Dengan demikian kedua implikasi terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kontraksi Jacobi pada Matriks Dominan Diagonal Ketat",
      "statement": "Jika $A$ dominan diagonal ketat menurut baris, maka $T_J=-D^{-1}(L+U)$ memenuhi $\\|T_J\\|_\\infty=q_J:=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|<1$. Akibatnya Jacobi konvergen ke solusi tunggal $Ax=b$ untuk setiap tebakan awal.",
      "proof": [
        "Diketahui $|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ untuk setiap $i$. Semua $a_{ii}$ tidak nol, sehingga $D^{-1}$ ada. Baris ke-$i$ matriks $T_J$ memiliki diagonal nol dan entri luar diagonal $-a_{ij}/a_{ii}$. Definisi norma matriks tak hingga memberikan $\\|T_J\\|_\\infty=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|=q_J<1$.",
        "Untuk dua vektor $u,v$, berlaku $\\|T_Ju+c-(T_Jv+c)\\|_\\infty\\le q_J\\|u-v\\|_\\infty$. Jadi pemetaan iterasi merupakan kontraksi pada ruang lengkap $(\\mathbb R^n,\\|\\cdot\\|_\\infty)$. Teorema titik tetap Banach memberikan satu titik tetap $x^*$ dan konvergensi dari setiap $x^{(0)}$.",
        "Berdasarkan proposisi titik tetap, $Ax^*=b$. Jika $Ay=b$ juga, maka $y$ merupakan titik tetap dan ketunggalan titik tetap memberi $y=x^*$. Dengan demikian solusi sistem tunggal dan iterasi Jacobi konvergen kepadanya. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Konvergensi Gauss–Seidel pada Dominasi Diagonal Ketat",
      "statement": "Jika $A$ dominan diagonal ketat menurut baris, iterasi Gauss–Seidel terdefinisi dan terdapat $q=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|<1$ sedemikian sehingga $\\|e^{(k+1)}\\|_\\infty\\le q\\|e^{(k)}\\|_\\infty$. Karena itu iterasi konvergen ke solusi tunggal dari setiap tebakan awal.",
      "proof": [
        "Diketahui dominasi diagonal ketat. Pertama, $A$ nonsingular: andaikan $Az=0$ untuk $z\\ne0$. Pilih $i$ dengan $|z_i|=\\|z\\|_\\infty>0$. Persamaan baris ke-$i$ menghasilkan $|a_{ii}||z_i|\\le\\sum_{j\\ne i}|a_{ij}||z_j|\\le(\\sum_{j\\ne i}|a_{ij}|)|z_i|$, bertentangan dengan dominasi ketat. Maka solusi $x^*$ dari $Ax=b$ ada dan tunggal.",
        "Tuliskan $e^{(k)}=x^{(k)}-x^*$ dan $E=\\|e^{(k)}\\|_\\infty$. Pengurangan persamaan Gauss–Seidel dengan persamaan solusi eksak memberi $|e_i^{(k+1)}|\\le\\sum_{j<i}\\frac{|a_{ij}|}{|a_{ii}|}|e_j^{(k+1)}|+\\sum_{j>i}\\frac{|a_{ij}|}{|a_{ii}|}|e_j^{(k)}|$. Buktikan secara induksi atas $i$ bahwa $|e_i^{(k+1)}|\\le qE$: untuk $i=1$ hanya suku iterasi lama muncul; untuk indeks berikutnya gunakan hipotesis induksi dan $q<1$, sehingga ruas kanan tidak melebihi $qE\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|\\le qE$.",
        "Maksimumkan atas $i$ untuk memperoleh $\\|e^{(k+1)}\\|_\\infty\\le q\\|e^{(k)}\\|_\\infty$. Dengan induksi atas $k$, $\\|e^{(k)}\\|_\\infty\\le q^k\\|e^{(0)}\\|_\\infty\\to0$. Dengan demikian Gauss–Seidel konvergen; syarat dominasi adalah cukup, bukan perlu. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Kriteria Radius Spektral untuk Iterasi Linear",
      "statement": "Untuk $T\\in\\mathbb R^{n\\times n}$ dan $c\\in\\mathbb R^n$, iterasi $x^{(k+1)}=Tx^{(k)}+c$ konvergen ke satu titik tetap yang sama untuk setiap $x^{(0)}$ jika dan hanya jika $\\rho(T)<1$, dengan $\\rho(T)=\\max_{\\lambda\\in\\sigma(T)}|\\lambda|$.",
      "proof": [
        "Diketahui matriks $T$ dan vektor $c$. Jika $\\rho(T)<1$, maka $1$ bukan nilai eigen $T$, sehingga $I-T$ nonsingular dan $x^*=(I-T)^{-1}c$ merupakan satu-satunya titik tetap. Dengan mengurangkan persamaan titik tetap diperoleh identitas galat $x^{(k)}-x^*=T^k(x^{(0)}-x^*)$.",
        "Di atas $\\mathbb C$, matriks $T$ serupa dengan matriks bentuk Jordan. Setiap blok Jordan dengan nilai eigen $\\lambda$ berpangkat $k$ memiliki entri berupa kombinasi $\\binom{k}{j}\\lambda^{k-j}$ untuk $j$ terbatas. Jika $|\\lambda|<1$, setiap suku tersebut menuju nol, termasuk kasus $\\lambda=0$ yang akhirnya nol. Jadi $T^k\\to0$ dan setiap galat iterasi menuju nol.",
        "Sebaliknya, andaikan setiap tebakan awal konvergen ke titik tetap yang sama $x^*$. Untuk setiap $v\\in\\mathbb R^n$, pilih $x^{(0)}=x^*+v$; maka $T^kv\\to0$. Karena basis standar berhingga, seluruh kolom $T^k$ menuju nol, sehingga $T^k\\to0$. Jika $Tv=\\lambda v$ untuk vektor eigen kompleks $v\\ne0$, maka $T^kv=\\lambda^kv\\to0$ (perluasan kompleks dari konvergensi matriks), sehingga $|\\lambda|<1$. Dengan demikian $\\rho(T)<1$ dan kedua arah terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat dari Residual",
      "statement": "Jika $A\\in\\mathbb R^{n\\times n}$ nonsingular, $Ax^*=b$, dan $r=b-A\\widehat x$, maka $x^*-\\widehat x=A^{-1}r$ dan $\\|x^*-\\widehat x\\|\\le\\|A^{-1}\\|\\,\\|r\\|$ untuk setiap norma vektor dengan norma operator terinduksi.",
      "proof": [
        "Diketahui $A$ nonsingular, $Ax^*=b$, dan residual $r=b-A\\widehat x$. Dibuktikan hubungan eksak antara galat maju dan residual. Substitusi $b=Ax^*$ menghasilkan $r=Ax^*-A\\widehat x=A(x^*-\\widehat x)$.",
        "Karena $A^{-1}$ ada, kalikan persamaan itu dengan $A^{-1}$ dari kiri. Diperoleh $A^{-1}r=x^*-\\widehat x$. Identitas ini tidak menggunakan asumsi iterasi Jacobi atau Gauss–Seidel; ia berlaku untuk setiap aproksimasi.",
        "Definisi norma operator terinduksi memberi $\\|A^{-1}r\\|\\le\\|A^{-1}\\|\\|r\\|$. Maka $\\|x^*-\\widehat x\\|\\le\\|A^{-1}\\|\\|r\\|$. Residual kecil saja belum menjamin galat kecil jika $\\|A^{-1}\\|$ sangat besar. Dengan demikian pernyataan terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Batas Galat A Priori dan A Posteriori untuk Kontraksi",
      "statement": "Misalkan $F:\\mathbb R^n\\to\\mathbb R^n$ kontraksi dengan konstanta $0\\le q<1$ pada suatu norma, dan $x^{(k+1)}=F(x^{(k)})$. Jika $x^*$ titik tetapnya, untuk $k\\ge1$ berlaku $\\|x^*-x^{(k)}\\|\\le \\frac{q^k}{1-q}\\|x^{(1)}-x^{(0)}\\|$ serta $\\|x^*-x^{(k)}\\|\\le\\frac{q}{1-q}\\|x^{(k)}-x^{(k-1)}\\|$.",
      "proof": [
        "Diketahui $F$ kontraksi dengan konstanta $q<1$. Dari $\\|F(u)-F(v)\\|\\le q\\|u-v\\|$ diperoleh $\\|x^{(j+1)}-x^{(j)}\\|\\le q^j\\|x^{(1)}-x^{(0)}\\|$ melalui induksi atas $j$. Kontraksi pada ruang lengkap menjamin iterasi menuju titik tetap $x^*$.",
        "Untuk $m>k$, ketaksamaan segitiga dan jumlah geometri memberikan $\\|x^{(m)}-x^{(k)}\\|\\le\\sum_{j=k}^{m-1}\\|x^{(j+1)}-x^{(j)}\\|\\le\\frac{q^k(1-q^{m-k})}{1-q}\\|x^{(1)}-x^{(0)}\\|$. Ambil limit $m\\to\\infty$ untuk mendapatkan batas a priori.",
        "Untuk batas a posteriori, mulai dari $\\|x^*-x^{(k)}\\|\\le\\sum_{j=k}^{\\infty}\\|x^{(j+1)}-x^{(j)}\\|$. Karena selisih pertama pada ekor dibatasi $q\\|x^{(k)}-x^{(k-1)}\\|$, penjumlahan geometri menghasilkan $\\frac{q}{1-q}\\|x^{(k)}-x^{(k-1)}\\|$. Dengan demikian kedua batas terbukti dan dapat dipakai sebagai aturan berhenti bersertifikat. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Splitting dan Matriks Iterasi",
      "problem": "Untuk $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$, $b=(1,2)^T$, bentuk splitting Jacobi dan matriks iterasinya.",
      "solution": [
        "Diketahui $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$ dan $b=(1,2)^T$. Pisahkan $D=\\operatorname{diag}(4,3)$, $L=\\begin{pmatrix}0&0\\\\2&0\\end{pmatrix}$, dan $U=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$. Untuk Jacobi, $M=D$ dan $N=-(L+U)$, sehingga $A=M-N$.",
        "Karena $D^{-1}=\\operatorname{diag}(1/4,1/3)$, diperoleh $T_J=-D^{-1}(L+U)=\\begin{pmatrix}0&-1/4\\\\-2/3&0\\end{pmatrix}$ dan $c=D^{-1}b=(1/4,2/3)^T$. Persamaan titik tetapnya $x=T_Jx+c$.",
        "Verifikasi: persamaan komponen adalah $x_1=(1-x_2)/4$ dan $x_2=(2-2x_1)/3$, yang ekuivalen dengan $4x_1+x_2=1$ dan $2x_1+3x_2=2$. Jadi splitting benar-benar mempertahankan sistem asal."
      ],
      "forDefinition": "Splitting Matriks untuk Iterasi Stasioner"
    },
    {
      "title": "Contoh Tiga Langkah Jacobi",
      "problem": "Mulai dari $x^{(0)}=(0,0)^T$, hitung tiga iterasi Jacobi untuk $4x+y=1$, $2x+3y=2$.",
      "solution": [
        "Diketahui $x^{(0)}=(0,0)^T$ dan rumus Jacobi $x^{(k+1)}=(1-y^{(k)})/4$, $y^{(k+1)}=(2-2x^{(k)})/3$. Kedua komponen pada langkah baru harus memakai pasangan nilai lama yang sama.",
        "Iterasi pertama memberi $x^{(1)}=(1/4,2/3)^T$. Iterasi kedua menghasilkan $x^{(2)}=((1-2/3)/4,(2-2(1/4))/3)^T=(1/12,1/2)^T$. Iterasi ketiga memberi $x^{(3)}=((1-1/2)/4,(2-2(1/12))/3)^T=(1/8,11/18)^T$.",
        "Solusi eksak sistem adalah $(1/10,3/5)^T$, sebab $4/10+3/5=1$ dan $2/10+9/5=2$. Selisih iterasi ketiga dengan solusi adalah $(1/40,1/90)^T$. Karena setiap baris dominan diagonal ketat, teorema kontraksi menjamin iterasi selanjutnya mendekati solusi tersebut."
      ],
      "forDefinition": "Metode Jacobi"
    },
    {
      "title": "Contoh Tiga Langkah Gauss–Seidel",
      "problem": "Mulai dari nol, hitung tiga langkah Gauss–Seidel pada sistem yang sama.",
      "solution": [
        "Diketahui $4x+y=1$, $2x+3y=2$, dan $(x^{(0)},y^{(0)})=(0,0)$. Aturan Gauss–Seidel menghitung $x^{(k+1)}=(1-y^{(k)})/4$ lebih dahulu, kemudian memakai $x^{(k+1)}$ pada $y^{(k+1)}=(2-2x^{(k+1)})/3$.",
        "Langkah pertama menghasilkan $(1/4,1/2)$. Langkah kedua menghasilkan $x^{(2)}=(1-1/2)/4=1/8$ dan $y^{(2)}=(2-2/8)/3=7/12$. Langkah ketiga memberi $x^{(3)}=(1-7/12)/4=5/48$ serta $y^{(3)}=(2-2(5/48))/3=43/72$.",
        "Solusi eksak $(1/10,3/5)$ dapat diperiksa dengan substitusi. Galat langkah ketiga adalah $(5/48-1/10,43/72-3/5)=(1/240,-1/360)$; dibandingkan Jacobi pada langkah sama, galat ini lebih kecil dalam norma tak hingga untuk contoh khusus ini, tetapi tidak membuktikan Gauss–Seidel selalu lebih cepat pada setiap matriks."
      ],
      "forDefinition": "Metode Gauss–Seidel"
    },
    {
      "title": "Contoh Residual dan Galat Maju",
      "problem": "Untuk aproksimasi $\\widehat x=(1/8,7/12)^T$, hitung residual dan galat eksak pada sistem $Ax=b$ di atas.",
      "solution": [
        "Diketahui $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$, $b=(1,2)^T$, dan $\\widehat x=(1/8,7/12)^T$. Perkalian matriks memberi $A\\widehat x=(4/8+7/12,2/8+21/12)^T=(13/12,2)^T$. Maka $r=b-A\\widehat x=(-1/12,0)^T$.",
        "Determinan $A=4\\cdot3-2\\cdot1=10\\ne0$, sehingga $A^{-1}=\\frac1{10}\\begin{pmatrix}3&-1\\\\-2&4\\end{pmatrix}$. Karena $e=x^*-\\widehat x=A^{-1}r$, diperoleh $e=(-1/40,1/60)^T$. Ini sama dengan selisih langsung $(1/10,3/5)-(1/8,7/12)$.",
        "Norma tak hingga invers adalah $\\|A^{-1}\\|_\\infty=\\max(4/10,6/10)=3/5$. Karena $\\|r\\|_\\infty=1/12$, batas umum adalah $\\|e\\|_\\infty\\le(3/5)(1/12)=1/20$. Galat sebenarnya $1/40$, sehingga batas sah tetapi tidak harus tajam."
      ],
      "forDefinition": "Residual, Galat, dan Dominasi Diagonal Ketat"
    },
    {
      "title": "Contoh Radius Spektral Dua Metode",
      "problem": "Bandingkan radius spektral matriks iterasi Jacobi dan Gauss–Seidel untuk $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$.",
      "solution": [
        "Diketahui $T_J=\\begin{pmatrix}0&-1/4\\\\-2/3&0\\end{pmatrix}$. Persamaan karakteristiknya $\\det(\\lambda I-T_J)=\\lambda^2-1/6=0$, sehingga nilai eigennya $\\pm1/\\sqrt6$ dan $\\rho(T_J)=1/\\sqrt6\\approx0{,}408248<1$.",
        "Untuk Gauss–Seidel, substitusi pembaruan komponen menghasilkan $T_{GS}=\\begin{pmatrix}0&-1/4\\\\0&1/6\\end{pmatrix}$. Karena matriks segitiga, nilai eigennya $0$ dan $1/6$, sehingga $\\rho(T_{GS})=1/6\\approx0{,}166667<1$.",
        "Kedua metode konvergen dari setiap tebakan awal menurut teorema radius spektral. Pada contoh ini radius Gauss–Seidel lebih kecil; perbandingan tersebut spesifik terhadap matriks dan urutan pembaruan yang dipilih."
      ]
    },
    {
      "title": "Contoh Sertifikat Berhenti A Posteriori",
      "problem": "Gunakan kontraksi Jacobi untuk membatasi galat setelah dua iterasi pada sistem contoh.",
      "solution": [
        "Diketahui dominasi diagonal menghasilkan $q=\\|T_J\\|_\\infty=\\max(1/4,2/3)=2/3$. Dua iterasi pertama adalah $x^{(1)}=(1/4,2/3)^T$ dan $x^{(2)}=(1/12,1/2)^T$. Selisihnya mempunyai norma $\\|x^{(2)}-x^{(1)}\\|_\\infty=1/6$.",
        "Teorema batas a posteriori memberi $\\|x^*-x^{(2)}\\|_\\infty\\le\\frac{q}{1-q}\\|x^{(2)}-x^{(1)}\\|_\\infty=\\frac{2/3}{1/3}\\frac16=\\frac13$. Penggunaan $q$ sah karena kontraksi telah dibuktikan dari dominasi diagonal.",
        "Solusi eksak $(1/10,3/5)^T$ menunjukkan galat aktual $\\max(|1/10-1/12|,|3/5-1/2|)=1/10<1/3$. Batas ini konservatif, tetapi dapat dihitung tanpa mengetahui solusi eksak dan karena itu berguna sebagai sertifikat berhenti."
      ]
    },
    {
      "title": "Contoh Divergensi Meski Sistem Memiliki Solusi",
      "problem": "Tunjukkan bahwa Jacobi dapat divergen pada $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ dan $b=(3,3)^T$.",
      "solution": [
        "Diketahui sistem $x+2y=3$ dan $2x+y=3$ mempunyai determinan $1-4=-3\\ne0$, sehingga solusi tunggalnya $(1,1)^T$. Namun $A$ tidak dominan diagonal ketat. Matriks Jacobi adalah $T_J=\\begin{pmatrix}0&-2\\\\-2&0\\end{pmatrix}$ dengan nilai eigen $2$ dan $-2$, sehingga $\\rho(T_J)=2>1$.",
        "Dari tebakan $(0,0)$, diperoleh $(3,3)$, kemudian $(-3,-3)$, lalu $(9,9)$. Secara umum, galat pada arah $(1,1)$ dikalikan $-2$ setiap langkah; besarnya bertambah dengan faktor $2$.",
        "Dengan demikian sistem memiliki solusi eksak tunggal, tetapi algoritma Jacobi yang dipilih gagal konvergen. Kegagalan iterasi tidak sama dengan ketidakadaan solusi sistem."
      ]
    },
    {
      "title": "Contoh Penukaran Baris Mengubah Konvergensi",
      "problem": "Untuk $x+3y=7$ dan $4x+y=6$, periksa pengaruh menukar urutan dua persamaan pada iterasi Jacobi.",
      "solution": [
        "Diketahui sistem semula memiliki solusi $(1,2)$ melalui substitusi. Tanpa penukaran, diagonal matriks adalah $(1,1)$ dan $T_J=\\begin{pmatrix}0&-3\\\\-4&0\\end{pmatrix}$, sehingga $\\rho(T_J)=\\sqrt{12}>1$. Iterasi Jacobi semula tidak konvergen untuk setiap tebakan awal.",
        "Tukar kedua persamaan (bukan variabel) sehingga matriks baru $A'=\\begin{pmatrix}4&1\\\\1&3\\end{pmatrix}$ dan $b'=(6,7)^T$. Kedua baris kini dominan diagonal ketat; konstanta kontraksi Jacobi $q=\\max(1/4,1/3)=1/3<1$.",
        "Mulai dari nol, iterasi baru memberi $(3/2,7/3)$ lalu $(11/12,11/6)$. Solusi $(1,2)$ tetap memenuhi kedua persamaan, sebab penukaran baris tidak mengubah himpunan solusi. Dengan demikian perbaikan susunan persamaan dapat mengubah konvergensi metode tanpa mengubah masalah aljabarnya."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "JG-01. Pada $3x+y=5$ dan $x+2y=5$, mulai dari $(0,0)$ dan hitung dua iterasi Jacobi. Buktikan iterasinya konvergen.",
      "hint": "Gunakan nilai lama untuk kedua komponen; hitung dominasi diagonal menurut baris.",
      "answer": "Diketahui $A=\\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}$, $b=(5,5)^T$, dan $x^{(0)}=(0,0)^T$. Rumus Jacobi ialah $x^{(k+1)}=(5-y^{(k)})/3$ dan $y^{(k+1)}=(5-x^{(k)})/2$. Dengan memakai nilai lama, diperoleh $x^{(1)}=(5/3,5/2)^T$. Iterasi kedua adalah $x^{(2)}=((5-5/2)/3,(5-5/3)/2)^T=(5/6,5/3)^T$.\\n\\nDominasi diagonal ketat berlaku karena $3>1$ dan $2>1$. Maka $\\|T_J\\|_\\infty=\\max(1/3,1/2)=1/2<1$; teorema kontraksi menjamin konvergensi dari setiap tebakan awal. Solusi eksak $(1,2)$ memenuhi $3(1)+2=5$ dan $1+2(2)=5$.\\n\\nSebagai verifikasi, iterasi kedua mendekati solusi tersebut, dengan galat $(5/6-1,5/3-2)=(-1/6,-1/3)$. Perhitungan ini tidak digunakan sebagai bukti konvergensi; jaminan global berasal dari ketaksamaan kontraksi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-02. Pada sistem JG-01, hitung dua iterasi Gauss–Seidel dari nol dan periksa nilai komponen yang digunakan.",
      "hint": "Komponen $y^{(k+1)}$ harus memakai $x^{(k+1)}$ yang baru dihitung.",
      "answer": "Diketahui $3x+y=5$, $x+2y=5$, dan $(x^{(0)},y^{(0)})=(0,0)$. Gauss–Seidel menghitung $x^{(k+1)}=(5-y^{(k)})/3$ dahulu, lalu $y^{(k+1)}=(5-x^{(k+1)})/2$. Pada langkah pertama, $x^{(1)}=5/3$ dan $y^{(1)}=(5-5/3)/2=5/3$.\\n\\nLangkah kedua menggunakan $y^{(1)}=5/3$ untuk menghasilkan $x^{(2)}=(5-5/3)/3=10/9$. Nilai baru ini langsung dimasukkan ke persamaan kedua, sehingga $y^{(2)}=(5-10/9)/2=35/18$. Jika $y^{(2)}$ dihitung dari $x^{(1)}$, itu merupakan pembaruan yang salah untuk Gauss–Seidel.\\n\\nSolusi eksak adalah $(1,2)$. Galat langkah kedua $(10/9-1,35/18-2)=(1/9,-1/18)$, sehingga norma tak hingganya $1/9$. Dominasi diagonal ketat menjamin galat selanjutnya menuju nol.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-03. Untuk $A(a)=\\begin{pmatrix}2&a\\\\1&3\\end{pmatrix}$, tentukan kapan dominasi diagonal ketat berlaku dan berikan nilai $a$ yang melanggarnya tetapi Jacobi tetap konvergen.",
      "hint": "Bedakan syarat cukup dominasi diagonal dari syarat perlu-dan-cukup radius spektral.",
      "answer": "Diketahui baris pertama mempunyai diagonal $2$ dan entri luar diagonal $a$, sedangkan baris kedua mempunyai diagonal $3$ dan entri luar diagonal $1$. Dominasi diagonal ketat berlaku tepat ketika $2>|a|$ dan $3>1$, yaitu $|a|<2$.\\n\\nMatriks Jacobi adalah $T_J=\\begin{pmatrix}0&-a/2\\\\-1/3&0\\end{pmatrix}$. Persamaan karakteristiknya $\\lambda^2-a/6=0$. Untuk $a$ real, kedua nilai eigen mempunyai modulus $\\sqrt{|a|/6}$ (jika $a<0$, keduanya imajiner murni). Maka $\\rho(T_J)<1$ tepat ketika $|a|<6$.\\n\\nAmbil $a=3$. Syarat dominasi ketat gagal karena $2<3$, tetapi $\\rho(T_J)=1/\\sqrt2<1$, sehingga Jacobi tetap konvergen dari setiap tebakan awal. Ini memverifikasi bahwa dominasi diagonal ketat adalah syarat cukup, bukan syarat perlu.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-04. Untuk $A=\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}$, $b=(1,2)^T$, dan $\\widehat x=(0,1/2)^T$, hitung residual, galat maju, serta batas normanya.",
      "hint": "Gunakan $A^{-1}=\\frac1{10}\\begin{pmatrix}3&-1\\\\-2&4\\end{pmatrix}$.",
      "answer": "Diketahui $\\widehat x=(0,1/2)^T$. Perkalian memberi $A\\widehat x=(1/2,3/2)^T$, sehingga residual $r=b-A\\widehat x=(1/2,1/2)^T$. Determinan $A=10\\ne0$ dan inversnya $A^{-1}=\\frac1{10}\\begin{pmatrix}3&-1\\\\-2&4\\end{pmatrix}$.\\n\\nIdentitas $e=x^*-\\widehat x=A^{-1}r$ menghasilkan $e=\\frac1{10}(1,1)^T=(1/10,1/10)^T$. Verifikasi dengan solusi eksak $x^*=(1/10,3/5)^T$ memberi selisih yang sama. Norma galat aktual adalah $\\|e\\|_\\infty=1/10$.\\n\\nNorma operator $\\|A^{-1}\\|_\\infty=\\max(4/10,6/10)=3/5$ dan $\\|r\\|_\\infty=1/2$. Jadi batas residual adalah $\\|e\\|_\\infty\\le(3/5)(1/2)=3/10$, yang memang lebih besar daripada $1/10$. Hasil ini membedakan batas bersertifikat dari nilai galat aktual.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-05. Buktikan bahwa iterasi dengan $T=\\begin{pmatrix}0&-1/2\\\\-1/3&0\\end{pmatrix}$ konvergen ke titik tetap tunggal untuk setiap vektor $c$ dan tebakan awal.",
      "hint": "Hitung $T^2$ sebelum memakai teorema radius spektral.",
      "answer": "Diketahui $T=\\begin{pmatrix}0&-1/2\\\\-1/3&0\\end{pmatrix}$. Perkalian langsung memberi $T^2=\\begin{pmatrix}1/6&0\\\\0&1/6\\end{pmatrix}=(1/6)I$. Maka $T^{2m}=(1/6)^mI\\to0$ dan $T^{2m+1}=(1/6)^mT\\to0$ ketika $m\\to\\infty$.\\n\\nSecara ekuivalen, nilai eigen $T$ adalah $\\pm1/\\sqrt6$, sehingga $\\rho(T)=1/\\sqrt6<1$. Akibatnya $I-T$ invertibel dan untuk setiap $c$ ada titik tetap tunggal $x^*=(I-T)^{-1}c$. Pengurangan persamaan titik tetap memberi $x^{(k)}-x^*=T^k(x^{(0)}-x^*)$.\\n\\nKarena $T^k\\to0$, galat menuju nol untuk setiap tebakan awal. Pembuktian ini tidak memerlukan nilai numerik $c$, sebab $c$ hanya menentukan lokasi titik tetap, sedangkan $T$ menentukan konvergensi galat.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-06. Untuk $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$, $b=0$, dan $x^{(0)}=(1,1)^T$, hitung tiga langkah Jacobi dan buktikan divergensi.",
      "hint": "Periksa determinan dan faktor pengali pada arah $(1,1)^T$.",
      "answer": "Diketahui $Ax=0$ dengan $\\det A=1-4=-3\\ne0$. Jadi solusi eksak tunggal adalah $x^*=(0,0)^T$. Jacobi memberikan $x^{(k+1)}=(-2y^{(k)},-2x^{(k)})^T$. Dari $(1,1)^T$ diperoleh $x^{(1)}=(-2,-2)^T$, $x^{(2)}=(4,4)^T$, dan $x^{(3)}=(-8,-8)^T$.\\n\\nKarena setiap vektor berbentuk $(t,t)^T$ dipetakan menjadi $(-2t,-2t)^T$, induksi menghasilkan $x^{(k)}=(-2)^k(1,1)^T$. Normanya $\\|x^{(k)}\\|_\\infty=2^k\\to\\infty$; ini membuktikan divergensi, bukan sekadar menunjukkan tiga nilai yang berosilasi.\\n\\nMatriks iterasi mempunyai nilai eigen $2$ dan $-2$, sehingga radius spektralnya $2>1$, konsisten dengan kriteria umum. Sistem mempunyai solusi tepat, tetapi iterasi gagal karena pilihan splitting.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-07. Sebuah iterasi kontraksi mempunyai konstanta $q=1/2$ dan $\\|x^{(1)}-x^{(0)}\\|=2$. Berikan batas galat a priori setelah empat iterasi.",
      "hint": "Jumlahkan ekor geometri dari selisih iterasi.",
      "answer": "Diketahui pemetaan iterasi kontraksi dengan $q=1/2$, serta jarak dua iterasi awal $d_1=2$. Untuk setiap $j\\ge1$, kontraksi memberi $\\|x^{(j+1)}-x^{(j)}\\|\\le q^j d_1$. Karena ruang yang digunakan lengkap, iterasi mempunyai titik tetap $x^*$ dan deret selisih konvergen.\\n\\nDengan ketaksamaan segitiga, $\\|x^*-x^{(4)}\\|\\le\\sum_{j=4}^{\\infty}\\|x^{(j+1)}-x^{(j)}\\|\\le\\sum_{j=4}^{\\infty}(1/2)^j(2)$. Jumlah geometri bernilai $\\frac{(1/2)^4}{1-1/2}(2)=\\frac14$.\\n\\nJadi galat setelah empat iterasi paling besar $1/4$ pada norma yang sama dengan konstanta kontraksi. Nilai ini merupakan batas atas, bukan pernyataan bahwa galat aktual pasti tepat $1/4$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "JG-08. Sistem $x+3y=7$, $4x+y=6$ disusun ulang dengan menukar dua baris. Hitung dua iterasi Jacobi dari nol sesudah penukaran dan buktikan konvergensinya.",
      "hint": "Penukaran baris tidak mengubah solusi, tetapi mengubah diagonal matriks iterasi.",
      "answer": "Diketahui sistem $x+3y=7$ dan $4x+y=6$. Setelah menukar baris, diperoleh $4x+y=6$ dan $x+3y=7$, dengan matriks $A'=\\begin{pmatrix}4&1\\\\1&3\\end{pmatrix}$. Kedua baris dominan diagonal ketat karena $4>1$ dan $3>1$, sehingga kontraksi Jacobi mempunyai $q=\\max(1/4,1/3)=1/3<1$.\\n\\nRumus iterasi adalah $x^{(k+1)}=(6-y^{(k)})/4$ dan $y^{(k+1)}=(7-x^{(k)})/3$. Dari $(0,0)$ diperoleh $x^{(1)}=(3/2,7/3)$, lalu $x^{(2)}=((6-7/3)/4,(7-3/2)/3)=(11/12,11/6)$.\\n\\nSolusi eksak $(1,2)$ memenuhi $1+3(2)=7$ dan $4(1)+2=6$, sehingga penukaran baris tidak mengubah jawaban. Teorema kontraksi menjamin $x^{(k)}\\to(1,2)$, sedangkan susunan awal memiliki radius spektral $\\sqrt{12}>1$ dan tidak menjamin konvergensi dari setiap tebakan awal.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
