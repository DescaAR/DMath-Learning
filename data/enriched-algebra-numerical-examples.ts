import type { BookExample } from "@/data/book-content-types";

/** Reviewed introductory and intermediate algebra/numerical examples. */
export const enrichedAlgebraNumericalExamples:Record<string,BookExample>={
  "struktur-aljabar:Grup Abelian": {
    "forDefinition": "Grup Abelian",
    "title": "Grup Aditif yang Komutatif",
    "problem": "Tunjukkan bahwa $(\\mathbb Z_5,+)$ merupakan grup abelian.",
    "solution": [
      "Operasi penjumlahan modulo $5$ tertutup dan asosiatif, karena diturunkan dari penjumlahan bilangan bulat.",
      "Elemen identitas adalah $[0]$. Invers dari $[a]$ ialah $[-a]$, sebab $[a]+[-a]=[0]$.",
      "Untuk setiap $[a],[b]\\in\\mathbb Z_5$, berlaku $[a]+[b]=[a+b]=[b+a]=[b]+[a]$."
    ],
    "conclusion": "$(\\mathbb Z_5,+)$ adalah grup abelian."
  },
  "struktur-aljabar:Subgrup yang Dibangkitkan": {
    "forDefinition": "Subgrup yang Dibangkitkan",
    "title": "Subgrup Siklik dari Satu Elemen",
    "problem": "Dalam grup aditif $(\\mathbb Z_{12},+)$, tentukan subgrup yang dibangkitkan oleh $[8]$.",
    "solution": [
      "Menurut definisi, $\\langle[8]\\rangle=\\{[8k]:k\\in\\mathbb Z\\}$.",
      "Kelipatan berturut-turut menghasilkan $[0],[8],[4]$ lalu kembali ke $[0]$, sehingga tidak ada anggota lain.",
      "Ketiga unsur tersebut tertutup terhadap penjumlahan dan invers modulo $12$."
    ],
    "conclusion": "$\\langle[8]\\rangle=\\{[0],[4],[8]\\}$."
  },
  "struktur-aljabar:Koset Kiri dan Kanan": {
    "forDefinition": "Koset Kiri dan Kanan",
    "title": "Menghitung Koset pada Bilangan Bulat",
    "problem": "Untuk $G=(\\mathbb Z,+)$ dan $H=4\\mathbb Z$, tentukan koset $1+H$ dan $3+H$.",
    "solution": [
      "Koset aditif $1+H$ terdiri atas semua bilangan berbentuk $1+4k$ dengan $k\\in\\mathbb Z$.",
      "Dengan cara sama, $3+H=\\{3+4k:k\\in\\mathbb Z\\}$.",
      "Jika kedua koset memiliki elemen bersama, akan berlaku $1+4k=3+4m$, sehingga $4(k-m)=2$, yang tidak mungkin untuk bilangan bulat."
    ],
    "conclusion": "Kedua koset berbeda dan saling lepas."
  },
  "struktur-aljabar:Indeks Subgrup": {
    "forDefinition": "Indeks Subgrup",
    "title": "Indeks Subgrup pada $mathbb Z$",
    "problem": "Tentukan indeks $[\\mathbb Z:5\\mathbb Z]$.",
    "solution": [
      "Dua bilangan bulat berada dalam koset yang sama modulo $5\\mathbb Z$ jika dan hanya jika selisihnya habis dibagi $5$.",
      "Setiap bilangan bulat kongruen tepat dengan salah satu $0,1,2,3,4$ modulo $5$.",
      "Karena terdapat tepat lima koset berbeda, indeks subgrup bernilai $5$."
    ],
    "conclusion": "$[\\mathbb Z:5\\mathbb Z]=5$."
  },
  "struktur-aljabar:Kernel dan Image": {
    "forDefinition": "Kernel dan Image",
    "title": "Kernel Homomorfisma Reduksi Modulo",
    "problem": "Definisikan $\\varphi:\\mathbb Z\\to\\mathbb Z_6$ oleh $\\varphi(n)=[n]_6$. Tentukan kernel dan citranya.",
    "solution": [
      "Untuk $m,n\\in\\mathbb Z$, berlaku $\\varphi(m+n)=[m+n]_6=[m]_6+[n]_6$, sehingga $\\varphi$ homomorfisma.",
      "Kernel terdiri atas bilangan $n$ yang memenuhi $[n]_6=[0]_6$, yakni kelipatan $6$.",
      "Setiap kelas residu modulo $6$ memiliki wakil bilangan bulat, sehingga citranya seluruh $\\mathbb Z_6$."
    ],
    "conclusion": "$\\ker\\varphi=6\\mathbb Z$ dan $\\operatorname{im}\\varphi=\\mathbb Z_6$."
  },
  "struktur-aljabar:Ring Komutatif": {
    "forDefinition": "Ring Komutatif",
    "title": "Ring Matriks Tidak Komutatif",
    "problem": "Tunjukkan bahwa $M_2(\\mathbb R)$ bukan ring komutatif.",
    "solution": [
      "Ambil $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ dan $B=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$.",
      "Perkalian langsung memberi $AB=B$ tetapi $BA=0$.",
      "Karena terdapat dua elemen dengan $AB\\ne BA$, perkalian matriks tidak komutatif."
    ],
    "conclusion": "$M_2(\\mathbb R)$ adalah ring beridentitas yang tidak komutatif."
  },
  "struktur-aljabar:Domain Integral": {
    "forDefinition": "Domain Integral",
    "title": "Pembagi Nol pada Kelas Residu",
    "problem": "Periksa apakah $\\mathbb Z_6$ merupakan domain integral.",
    "solution": [
      "Dalam $\\mathbb Z_6$, elemen $[2]$ dan $[3]$ keduanya bukan nol.",
      "Akan tetapi, $[2][3]=[6]=[0]$, sehingga terdapat pembagi nol.",
      "Domain integral tidak boleh memiliki pembagi nol."
    ],
    "conclusion": "$\\mathbb Z_6$ bukan domain integral."
  },
  "struktur-aljabar:Field": {
    "forDefinition": "Field",
    "title": "Invers pada Lapangan Modulo Prima",
    "problem": "Buktikan $\\mathbb Z_5$ merupakan field dengan menunjukkan invers setiap elemen tak nol.",
    "solution": [
      "Ring komutatif $\\mathbb Z_5$ memiliki identitas perkalian $[1]$.",
      "Elemen $[1]$ dan $[4]$ saling invers terhadap dirinya, karena $1\\cdot1\\equiv4\\cdot4\\equiv1\\pmod5$.",
      "Elemen $[2]$ dan $[3]$ saling invers, karena $2\\cdot3\\equiv1\\pmod5$.",
      "Dengan demikian, semua elemen tak nol mempunyai invers perkalian."
    ],
    "conclusion": "$\\mathbb Z_5$ merupakan field."
  },
  "struktur-aljabar:Kongruensi Modulo $n$": {
    "forDefinition": "Kongruensi Modulo $n$",
    "title": "Memeriksa Kongruensi",
    "problem": "Tentukan apakah $47\\equiv5\\pmod7$ dan apakah $47\\equiv6\\pmod7$.",
    "solution": [
      "Menurut definisi, $a\\equiv b\\pmod n$ tepat ketika $n$ membagi $a-b$.",
      "Karena $47-5=42=6\\cdot7$, berlaku $47\\equiv5\\pmod7$.",
      "Karena $47-6=41$ tidak habis dibagi $7$, kongruensi kedua tidak berlaku."
    ],
    "conclusion": "$47\\equiv5\\pmod7$, tetapi $47\\not\\equiv6\\pmod7$."
  },
  "struktur-aljabar:Unit Modulo $n$": {
    "forDefinition": "Unit Modulo $n$",
    "title": "Menghitung Semua Unit Modulo Dua Belas",
    "problem": "Tentukan himpunan unit ring $\\mathbb Z_{12}$.",
    "solution": [
      "Kelas $[a]$ modulo $12$ invertibel tepat ketika $\\gcd(a,12)=1$, berdasarkan identitas Bézout.",
      "Di antara $0,\\ldots,11$, bilangan yang relatif prima dengan $12$ adalah $1,5,7,11$.",
      "Masing-masing memiliki kuadrat kongruen $1$ modulo $12$, sehingga memang mempunyai invers."
    ],
    "conclusion": "$\\mathbb Z_{12}^{\\times}=\\{[1],[5],[7],[11]\\}$."
  },
  "struktur-aljabar:Grup Siklik dan Generator": {
    "forDefinition": "Grup Siklik dan Generator",
    "title": "Generator Grup Aditif Modulo",
    "problem": "Tentukan apakah $[3]$ membangkitkan grup aditif $\\mathbb Z_8$.",
    "solution": [
      "Kelipatan $[3]$ secara berurutan ialah $[0],[3],[6],[1],[4],[7],[2],[5]$.",
      "Semua delapan kelas residu muncul sebelum kembali ke $[0]$.",
      "Karena $\\langle[3]\\rangle$ memuat seluruh $\\mathbb Z_8$, kelas $[3]$ merupakan generator."
    ],
    "conclusion": "$\\mathbb Z_8=\\langle[3]\\rangle$."
  },
  "struktur-aljabar:Subgrup Siklik": {
    "forDefinition": "Subgrup Siklik",
    "title": "Subgrup Siklik dalam $mathbb Z_{10}$",
    "problem": "Untuk $\\mathbb Z_{10}$ aditif, tentukan $\\langle[4]\\rangle$.",
    "solution": [
      "Kelipatan berturut-turut dari $[4]$ adalah $[0],[4],[8],[2],[6]$, kemudian kembali ke $[0]$.",
      "Kelima elemen berbeda tersebut tertutup terhadap penjumlahan modulo $10$.",
      "Orde $[4]$ adalah $10/\\gcd(10,4)=5$, sesuai dengan banyaknya elemen yang ditemukan."
    ],
    "conclusion": "$\\langle[4]\\rangle=\\{[0],[2],[4],[6],[8]\\}$."
  },
  "struktur-aljabar:Subgrup Normal": {
    "forDefinition": "Subgrup Normal",
    "title": "Normalitas pada Grup Abelian",
    "problem": "Buktikan bahwa $H=3\\mathbb Z$ normal dalam grup $(\\mathbb Z,+)$.",
    "solution": [
      "Untuk semua $g\\in\\mathbb Z$ dan $h\\in H$, konjugasi aditif memberikan $g+h-g=h$.",
      "Karena $h\\in H$, diperoleh $g+H-g=H$ untuk setiap $g\\in\\mathbb Z$.",
      "Definisi normalitas subgrup terpenuhi."
    ],
    "conclusion": "Setiap subgrup dari grup abelian normal; khususnya $3\\mathbb Z\\trianglelefteq\\mathbb Z$."
  },
  "struktur-aljabar:Kelas Ekuivalensi": {
    "forDefinition": "Kelas Ekuivalensi",
    "title": "Relasi Kongruensi Menghasilkan Partisi",
    "problem": "Pada $\\mathbb Z$, definisikan $a\\sim b$ jika $a-b$ kelipatan $3$. Tentukan kelas $[1]$.",
    "solution": [
      "Syarat $a\\sim b$ bersifat refleksif karena $a-a=0$, simetris karena jika $3\\mid(a-b)$ maka $3\\mid(b-a)$, dan transitif dengan menjumlahkan selisih.",
      "Kelas ekuivalensi dari $1$ terdiri atas seluruh bilangan $1+3k$ untuk $k\\in\\mathbb Z$.",
      "Kelas lain diwakili oleh $0$ dan $2$, sehingga terdapat tiga kelas saling lepas."
    ],
    "conclusion": "$[1]=1+3\\mathbb Z$ dan himpunan kelas membentuk $\\mathbb Z/3\\mathbb Z$."
  },
  "analisis-numerik:Galat Absolut": {
    "forDefinition": "Galat Absolut",
    "title": "Galat Pembulatan Akar Dua",
    "problem": "Jika $\\sqrt2$ diaproksimasi oleh $1.41$, tentukan galat absolutnya.",
    "solution": [
      "Galat absolut didefinisikan sebagai $E_{\\mathrm{abs}}=|\\sqrt2-1.41|$.",
      "Karena $\\sqrt2\\approx1.414213562$, diperoleh $E_{\\mathrm{abs}}\\approx0.004213562$.",
      "Nilai tersebut mengukur selisih numerik tanpa membaginya dengan skala nilai acuan."
    ],
    "conclusion": "Galat absolut kira-kira $4.213562\\times10^{-3}$."
  },
  "analisis-numerik:Galat Relatif": {
    "forDefinition": "Galat Relatif",
    "title": "Galat Relatif Akar Dua",
    "problem": "Untuk aproksimasi $p^*=1.41$ terhadap $p=\\sqrt2$, hitung galat relatif.",
    "solution": [
      "Menurut definisi, $E_{\\mathrm{rel}}=|p-p^*|/|p|$.",
      "Substitusi memberi $E_{\\mathrm{rel}}=|\\sqrt2-1.41|/\\sqrt2\\approx0.0029793$.",
      "Dalam persen, nilai tersebut kira-kira $0.29793\\%$."
    ],
    "conclusion": "Galat relatif sekitar $0.298\\%$."
  },
  "analisis-numerik:Iterasi Newton": {
    "forDefinition": "Iterasi Newton",
    "title": "Dua Iterasi Newton untuk Akar Dua",
    "problem": "Gunakan Newton pada $f(x)=x^2-2$ dari $p_0=1$ dan tentukan $p_1,p_2$.",
    "solution": [
      "Karena $f'(x)=2x$, rumus Newton adalah $p_{n+1}=p_n-(p_n^2-2)/(2p_n)=\\tfrac12(p_n+2/p_n)$.",
      "Untuk $p_0=1$, diperoleh $p_1=\\frac12(1+2)=3/2$.",
      "Selanjutnya $p_2=\\frac12(3/2+4/3)=17/12\\approx1.4166667$."
    ],
    "conclusion": "Dua iterasi menghasilkan $p_1=3/2$ dan $p_2=17/12$."
  },
  "analisis-numerik:Basis Lagrange": {
    "forDefinition": "Basis Lagrange",
    "title": "Interpolasi Dua Titik",
    "problem": "Diberikan titik data $(0,1)$ dan $(2,5)$. Bentuk polinom interpolasi Lagrange derajat paling tinggi satu.",
    "solution": [
      "Basis Lagrange adalah $L_0(x)=\\frac{x-2}{0-2}=(2-x)/2$ dan $L_1(x)=\\frac{x-0}{2-0}=x/2$.",
      "Interpolan $P_1(x)=1L_0(x)+5L_1(x)=(2-x)/2+5x/2=1+2x$.",
      "Pemeriksaan langsung memberi $P_1(0)=1$ dan $P_1(2)=5$."
    ],
    "conclusion": "Polinom interpolasi adalah $P_1(x)=1+2x$."
  },
  "analisis-numerik:Metode Euler": {
    "forDefinition": "Metode Euler",
    "title": "Dua Langkah Euler Eksplisit",
    "problem": "Terapkan Euler dengan $h=0.1$ pada $y'=y$, $y(0)=1$, sampai $t=0.2$.",
    "solution": [
      "Rumus Euler adalah $w_{n+1}=w_n+h f(t_n,w_n)=(1+h)w_n$.",
      "Dari $w_0=1$ diperoleh $w_1=1.1$ pada $t_1=0.1$.",
      "Langkah kedua memberi $w_2=1.1(1.1)=1.21$ pada $t_2=0.2$."
    ],
    "conclusion": "Aproksimasi Euler pada $t=0.2$ adalah $1.21$; solusi eksak adalah $e^{0.2}$."
  },
  "analisis-numerik:Faktorisasi LU": {
    "forDefinition": "Faktorisasi LU",
    "title": "Faktorisasi Matriks Dua Kali Dua",
    "problem": "Tentukan faktorisasi $A=LU$ untuk $A=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}$ tanpa pivoting.",
    "solution": [
      "Eliminasi menghilangkan elemen $4$ di bawah pivot pertama menggunakan pengali $m_{21}=4/2=2$.",
      "Diperoleh $U=\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}$ dan $L=\\begin{pmatrix}1&0\\\\2&1\\end{pmatrix}$.",
      "Perkalian langsung menghasilkan $LU=\\begin{pmatrix}2&1\\\\4&3\\end{pmatrix}=A$."
    ],
    "conclusion": "Faktorisasi LU yang diminta berlaku tanpa pertukaran baris."
  },
  "analisis-numerik:Eliminasi Gaussian": {
    "forDefinition": "Eliminasi Gaussian",
    "title": "Eliminasi pada Sistem Linear Dua Variabel",
    "problem": "Selesaikan $2x+y=5$ dan $4x+3y=11$ menggunakan eliminasi Gaussian.",
    "solution": [
      "Kurangkan dua kali baris pertama dari baris kedua sehingga diperoleh persamaan baru $y=1$.",
      "Substitusi balik ke $2x+y=5$ menghasilkan $2x=4$, jadi $x=2$.",
      "Verifikasi memberi $2(2)+1=5$ dan $4(2)+3(1)=11$."
    ],
    "conclusion": "Solusi tunggal sistem adalah $(x,y)=(2,1)$."
  }
};
