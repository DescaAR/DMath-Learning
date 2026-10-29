import type { BookLessonContent } from "@/data/book-content-types";

/** Geometri analitik; penulisan mandiri, dengan rujukan OpenStax Precalculus 2e dan Calculus Vol. 1. */
export const analyticGeometryContent: BookLessonContent = {
  "intro": [
    "Sebuah gambar garis atau lingkaran dapat menyarankan suatu jawaban, tetapi tidak membuktikan bahwa semua titik yang memenuhi persamaan telah ditemukan. Geometri analitik menerjemahkan hubungan jarak dan arah di bidang Euclidean menjadi persamaan, kemudian mengembalikan hasil aljabar itu menjadi pernyataan geometris yang dapat diverifikasi.",
    "Sebagai contoh, persamaan $x^2+y^2=4$ menyatakan semua titik yang berjarak tepat $2$ dari asal. Garis $y=h$ dapat memotong lingkaran tersebut di dua titik, tepat satu titik, atau tidak sama sekali. Jumlah titik potong ditentukan oleh perbandingan jarak garis dari pusat dengan jari-jari, bukan oleh ketebalan garis pada gambar.",
    "Kita mulai dari garis dan jarak, kemudian menurunkan persamaan lingkaran, kriteria garis singgung, dan parabola melalui definisi fokus–direktriks. Setiap ekuivalensi dibuktikan dalam kedua arah; kasus degenerat (jari-jari nol, garis tanpa vektor normal, dan fokus pada direktriks) dibedakan secara eksplisit.",
    "Rujukan konsep: OpenStax, Calculus Volume 1, Appendix A (Review of Precalculus); OpenStax, Precalculus 2e, bagian Analytic Geometry. Seluruh soal dan pembuktian pada halaman ini ditulis mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Garis melalui Persamaan Linear",
      "statement": "Untuk $a,b,c\\in\\mathbb R$ dengan $(a,b)\\ne(0,0)$, garis $L$ di bidang Euclidean adalah himpunan $L=\\{(x,y)\\in\\mathbb R^2:ax+by=c\\}$. Vektor $n=(a,b)$ disebut vektor normal garis. Jika $a=b=0$, persamaan tidak mendefinisikan garis: untuk $c=0$ diperoleh seluruh bidang, sedangkan untuk $c\\ne0$ diperoleh himpunan kosong.",
      "explanation": "Vektor normal selalu taknol dan tegak lurus terhadap setiap vektor arah garis. Garis vertikal seperti $x=2$ termasuk dalam definisi ini."
    },
    {
      "kind": "definition",
      "title": "Jarak Euclidean dan Lingkaran",
      "statement": "Jarak Euclidean dua titik $P=(x_1,y_1)$ dan $Q=(x_2,y_2)$ adalah $d(P,Q)=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$. Untuk pusat $C=(h,k)$ dan jari-jari $r>0$, lingkaran $S(C,r)$ adalah $\\{P\\in\\mathbb R^2:d(P,C)=r\\}$.",
      "explanation": "Lingkaran adalah himpunan titik pada batas, bukan seluruh cakram. Jika $r=0$, himpunan jarak tepat nol hanya berisi pusat dan bukan lingkaran takdegenerat."
    },
    {
      "kind": "definition",
      "title": "Parabola sebagai Lokus Fokus–Direktriks",
      "statement": "Misalkan $F\\in\\mathbb R^2$ dan $D$ garis dengan $F\\notin D$. Parabola berfokus $F$ dan berdirektriks $D$ adalah himpunan titik $P$ yang memenuhi $d(P,F)=d(P,D)$, dengan $d(P,D)=\\inf_{Q\\in D}d(P,Q)$.",
      "explanation": "Syarat fokus tidak terletak pada direktriks menjamin parabola takdegenerat. Untuk direktriks horizontal, jarak ke garis dihitung secara tegak lurus."
    },
    {
      "kind": "definition",
      "title": "Garis Singgung Lingkaran",
      "statement": "Untuk lingkaran $S(C,r)$ dengan $r>0$, sebuah garis $L$ disebut garis singgung apabila $L\\cap S(C,r)$ terdiri atas tepat satu titik $P$. Titik $P$ disebut titik singgung.",
      "explanation": "Definisi ini tidak menyebut kemiringan sehingga tetap berlaku untuk garis singgung vertikal."
    },
    {
      "kind": "theorem",
      "title": "Garis Unik melalui Dua Titik Berbeda",
      "statement": "Jika $P=(x_1,y_1)$ dan $Q=(x_2,y_2)$ adalah dua titik berbeda di $\\mathbb R^2$, maka tepat satu garis memuat keduanya, yaitu $(y_2-y_1)(x-x_1)-(x_2-x_1)(y-y_1)=0$.",
      "proof": [
        "Tuliskan $u=Q-P=(x_2-x_1,y_2-y_1)$. Karena $P\\ne Q$, maka $u\\ne0$. Vektor $n=(y_2-y_1,-(x_2-x_1))$ juga taknol dan memenuhi $n\\cdot u=0$. Persamaan $n\\cdot((x,y)-P)=0$ karena itu mendefinisikan garis melalui $P$ dan $Q$.",
        "Untuk ketunggalan, misalkan garis lain $L'$ melalui $P$ dan $Q$ memiliki vektor normal $m\\ne0$. Selisih dua persamaan di $P$ dan $Q$ memberi $m\\cdot u=0$. Ruang vektor di $\\mathbb R^2$ yang ortogonal terhadap $u\\ne0$ berdimensi satu, sehingga $m=\\lambda n$ untuk suatu $\\lambda\\ne0$. Karena kedua garis melalui $P$, persamaannya hanya berbeda faktor taknol dan himpunan titiknya sama.",
        "Jadi ada tepat satu garis melalui dua titik berbeda, termasuk jika $x_1=x_2$ (garis vertikal). $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Rumus Jarak Titik ke Garis",
      "statement": "Misalkan $L=\\{(x,y):ax+by=c\\}$ dengan $a^2+b^2>0$ dan $P=(x_0,y_0)$. Jarak Euclidean dari $P$ ke $L$ adalah $d(P,L)=\\frac{|ax_0+by_0-c|}{\\sqrt{a^2+b^2}}$.",
      "proof": [
        "Definisikan $n=(a,b)$, $s=ax_0+by_0-c$, dan $H=P-\\frac{s}{a^2+b^2}n$. Perhitungan langsung memberi $aH_x+bH_y=ax_0+by_0-s=c$, sehingga $H\\in L$.",
        "Untuk setiap $Q\\in L$, vektor $Q-H$ ortogonal terhadap $n$ karena $n\\cdot(Q-H)=c-c=0$. Sementara $P-H=\\frac{s}{a^2+b^2}n$ sejajar $n$. Oleh Teorema Pythagoras, $|P-Q|^2=|P-H|^2+|H-Q|^2\\ge|P-H|^2$, dengan kesamaan tepat ketika $Q=H$.",
        "Dengan demikian $H$ merupakan titik terdekat yang unik dan $d(P,L)=|P-H|=\\frac{|s|}{\\sqrt{a^2+b^2}}$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Klasifikasi Persamaan Lingkaran Umum",
      "statement": "Untuk $A,B,C\\in\\mathbb R$, himpunan solusi $x^2+y^2+Ax+By+C=0$ merupakan (i) lingkaran berjari-jari $\\sqrt{\\rho}$ jika $\\rho>0$, (ii) satu titik jika $\\rho=0$, atau (iii) himpunan kosong jika $\\rho<0$, dengan $\\rho=\\frac{A^2+B^2}{4}-C$ dan pusat $(-A/2,-B/2)$. Sebaliknya, setiap lingkaran $S((h,k),r)$, $r>0$, memiliki persamaan dalam bentuk tersebut.",
      "proof": [
        "Lengkapi kuadrat pada kedua variabel: $x^2+Ax=(x+A/2)^2-A^2/4$ dan $y^2+By=(y+B/2)^2-B^2/4$. Persamaan semula ekuivalen dengan $(x+A/2)^2+(y+B/2)^2=\\rho$.",
        "Ruas kiri adalah jumlah dua kuadrat nonnegatif. Jika $\\rho<0$ tidak ada solusi. Jika $\\rho=0$, kedua kuadrat harus nol sehingga hanya ada satu titik. Jika $\\rho>0$, mengambil akar kuadrat kedua ruas menunjukkan bahwa jarak ke $(-A/2,-B/2)$ tepat $\\sqrt{\\rho}$, yakni definisi lingkaran.",
        "Sebaliknya, untuk lingkaran berpusat $(h,k)$ dan berjari-jari $r>0$, definisi jarak setara dengan $(x-h)^2+(y-k)^2=r^2$. Mengembangkan kuadrat memberi $x^2+y^2-2hx-2ky+(h^2+k^2-r^2)=0$. Kedua arah terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Garis Singgung Lingkaran",
      "statement": "Misalkan $S(C,r)$ lingkaran dengan $r>0$, $P\\in S(C,r)$, dan $L$ garis melalui $P$ dengan vektor arah $u\\ne0$. Garis $L$ menyinggung lingkaran di $P$ jika dan hanya jika $(P-C)\\cdot u=0$.",
      "proof": [
        "Setiap titik garis berbentuk $P+tu$ dengan $t\\in\\mathbb R$. Karena $|P-C|^2=r^2$, syarat titik tersebut terletak pada lingkaran ekuivalen dengan $|P+tu-C|^2=r^2$, atau $2t(P-C)\\cdot u+t^2|u|^2=0$.",
        "($\\Leftarrow$) Jika $(P-C)\\cdot u=0$, persamaan menjadi $t^2|u|^2=0$. Karena $u\\ne0$, satu-satunya solusi ialah $t=0$, sehingga titik potong tunggal adalah $P$ dan garis menyinggung lingkaran.",
        "($\\Rightarrow$) Jika garis menyinggung di $P$, tidak boleh ada solusi $t\\ne0$. Apabila $(P-C)\\cdot u\\ne0$, persamaan mempunyai solusi kedua $t=-2(P-C)\\cdot u/|u|^2\\ne0$, kontradiksi. Jadi $(P-C)\\cdot u=0$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Persamaan Fokus–Direktriks Parabola",
      "statement": "Untuk $p>0$, fokus $F=(0,p)$, dan direktriks $D=\\{(x,-p):x\\in\\mathbb R\\}$, suatu titik $P=(x,y)$ termasuk parabola yang ditentukan oleh $F$ dan $D$ jika dan hanya jika $x^2=4py$.",
      "proof": [
        "($\\Rightarrow$) Dari definisi parabola diperoleh $\\sqrt{x^2+(y-p)^2}=|y+p|$. Kedua ruas nonnegatif, sehingga menguadratkan tidak mengubah kesetaraan. Setelah mengembangkan dan menghapus $y^2+p^2$, diperoleh $x^2-2py=2py$, yaitu $x^2=4py$.",
        "($\\Leftarrow$) Jika $x^2=4py$ dan $p>0$, maka $y=x^2/(4p)\\ge0$, sehingga $y+p>0$. Hitung $x^2+(y-p)^2=4py+y^2-2py+p^2=(y+p)^2$. Mengambil akar nonnegatif menghasilkan $\\sqrt{x^2+(y-p)^2}=y+p=|y+p|$, yakni jarak ke fokus sama dengan jarak ke direktriks.",
        "Kedua implikasi berlaku dan titik puncak parabola adalah $(0,0)$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Jumlah Perpotongan Garis dan Lingkaran",
      "statement": "Misalkan $S(C,r)$ lingkaran dengan $r>0$ dan $L$ garis dengan jarak $d=d(C,L)$. Banyak titik pada $S(C,r)\\cap L$ berturut-turut adalah $2$, $1$, atau $0$ ketika $d<r$, $d=r$, atau $d>r$.",
      "proof": [
        "Misalkan $H$ proyeksi ortogonal pusat $C$ pada $L$ dan $u$ vektor arah satuan garis. Setiap titik pada garis dapat ditulis unik sebagai $H+tu$ untuk $t\\in\\mathbb R$. Karena $(C-H)\\cdot u=0$, Teorema Pythagoras memberi $|H+tu-C|^2=d^2+t^2$.",
        "Persamaan perpotongan dengan lingkaran menjadi $t^2=r^2-d^2$. Jika $d<r$ terdapat dua nilai $t=\\pm\\sqrt{r^2-d^2}$ yang berbeda; jika $d=r$ hanya $t=0$; jika $d>r$ ruas kanan negatif sehingga tidak ada nilai real.",
        "Klasifikasi ini berlaku untuk semua garis, termasuk yang vertikal, karena tidak menggunakan gradien. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Garis melalui Dua Titik Berbeda",
      "forDefinition": "Garis melalui Persamaan Linear",
      "problem": "Tentukan garis melalui $P=(1,2)$ dan $Q=(3,-2)$ serta verifikasi kedua titik.",
      "solution": [
        "Diketahui dua titik berbeda, sehingga teorema garis unik dapat diterapkan. Vektor arahnya $Q-P=(2,-4)$; normal yang tegak lurus adalah $(2,1)$ karena $(2,1)\\cdot(2,-4)=0$.",
        "Gunakan bentuk titik–normal: $2(x-1)+(y-2)=0$, sehingga $2x+y=4$. Koefisien normal tidak keduanya nol, jadi persamaan benar-benar mendefinisikan garis.",
        "Verifikasi: pada $P$, $2(1)+2=4$; pada $Q$, $2(3)-2=4$. Kedua titik memenuhi persamaan. Keunikan dijamin oleh teorema karena $P\\ne Q$."
      ],
      "conclusion": "Garis yang diminta adalah $2x+y=4$."
    },
    {
      "title": "Lingkaran dari Pusat dan Jari-jari",
      "forDefinition": "Jarak Euclidean dan Lingkaran",
      "problem": "Tentukan persamaan lingkaran berpusat $C=(2,-1)$ dan berjari-jari $3$; periksa apakah $P=(5,-1)$ terletak padanya.",
      "solution": [
        "Definisi lingkaran mensyaratkan $d((x,y),C)=3$. Karena jarak nonnegatif, kuadrat kedua ruas setara: $(x-2)^2+(y+1)^2=9$.",
        "Titik $P=(5,-1)$ memberi $(5-2)^2+(-1+1)^2=9$, sehingga $P$ termasuk lingkaran. Secara geometris jaraknya dari pusat adalah $\\sqrt{9}=3$.",
        "Sebaliknya, setiap titik yang memenuhi persamaan kuadrat mempunyai jarak tepat $3$ dari $C$, sebab akar kuadrat kedua ruas bernilai nonnegatif."
      ],
      "conclusion": "Persamaan lingkaran adalah $(x-2)^2+(y+1)^2=9$."
    },
    {
      "title": "Parabola dengan Fokus dan Direktriks",
      "forDefinition": "Parabola sebagai Lokus Fokus–Direktriks",
      "problem": "Fokus parabola $F=(0,2)$ dan direktriksnya $y=-2$. Tentukan persamaan dan uji titik $(4,2)$.",
      "solution": [
        "Diketahui $p=2>0$, jadi hipotesis teorema fokus–direktriks terpenuhi. Persamaan lokus adalah $x^2=4py=8y$. Titik puncak $(0,0)$ berada tepat di tengah fokus dan direktriks.",
        "Untuk $P=(4,2)$, ruas kiri $x^2=16$ dan ruas kanan $8y=16$, sehingga persamaan dipenuhi. Pemeriksaan geometris independen: jarak $P$ ke fokus ialah $4$, sedangkan jarak tegak lurus ke garis $y=-2$ ialah $|2+2|=4$.",
        "Kesamaan dua jarak membuktikan keanggotaan menurut definisi, bukan hanya berdasarkan bentuk grafik."
      ],
      "conclusion": "Parabola adalah $x^2=8y$, dan $(4,2)$ terletak padanya."
    },
    {
      "title": "Garis Singgung di Titik Lingkaran",
      "forDefinition": "Garis Singgung Lingkaran",
      "problem": "Tentukan garis singgung lingkaran $x^2+y^2=25$ di $P=(3,4)$.",
      "solution": [
        "Pemeriksaan awal: $3^2+4^2=25$, jadi $P$ memang pada lingkaran berpusat $C=(0,0)$ dengan $r=5>0$. Vektor radius adalah $P-C=(3,4)$.",
        "Menurut karakterisasi singgung, vektor arah garis harus ortogonal terhadap $(3,4)$. Persamaan titik–normal ialah $3(x-3)+4(y-4)=0$, yaitu $3x+4y=25$.",
        "Verifikasi keunikan titik potong: substitusi garis ke lingkaran atau identitas $|P+tu|^2=25+t^2|u|^2$ untuk arah $u=(-4,3)$ memaksa $t=0$. Jadi tidak ada titik potong kedua."
      ],
      "conclusion": "Garis singgung yang diminta adalah $3x+4y=25$."
    },
    {
      "title": "Jarak Titik ke Garis dan Kaki Proyeksi",
      "problem": "Hitung jarak $P=(1,-2)$ ke $L:3x-4y+5=0$ dan tentukan titik terdekat pada garis.",
      "solution": [
        "Ubah persamaan menjadi $3x-4y=-5$, sehingga $n=(3,-4)$ dan $c=-5$. Hipotesis $a^2+b^2=25>0$ terpenuhi. Nilai $s=3(1)-4(-2)-(-5)=16$.",
        "Rumus jarak memberi $d(P,L)=|16|/\\sqrt{25}=16/5$. Kaki proyeksi adalah $H=P-\\frac{16}{25}(3,-4)=(-23/25,14/25)$.",
        "Verifikasi bahwa $H\\in L$: $3(-23/25)-4(14/25)+5=(-69-56+125)/25=0$. Selisih $P-H=(48/25,-64/25)$ mempunyai panjang $\\sqrt{48^2+64^2}/25=80/25=16/5$, sesuai hasil rumus."
      ],
      "conclusion": "Jarak minimum adalah $16/5$ dan dicapai unik di $H=(-23/25,14/25)$."
    },
    {
      "title": "Klasifikasi Persamaan Kuadrat Lingkaran",
      "problem": "Tentukan pusat dan jari-jari himpunan $x^2+y^2-4x+6y+9=0$.",
      "solution": [
        "Kelompokkan suku menurut variabel: $(x^2-4x)+(y^2+6y)+9=0$. Lengkapi kuadrat dengan menambah dan mengurangi $4$ serta $9$.",
        "Diperoleh $(x-2)^2-4+(y+3)^2-9+9=0$, atau $(x-2)^2+(y+3)^2=4$. Karena ruas kanan positif, himpunan tersebut benar-benar lingkaran, bukan satu titik atau himpunan kosong.",
        "Pusatnya $(2,-3)$ dan jari-jarinya $2$. Sebagai verifikasi, titik $(4,-3)$ memenuhi persamaan awal: $16+9-16-18+9=0$."
      ],
      "conclusion": "Himpunan itu lingkaran berpusat $(2,-3)$ dengan jari-jari $2$."
    },
    {
      "title": "Dua, Satu, atau Nol Perpotongan",
      "problem": "Untuk lingkaran $x^2+y^2=4$, tentukan titik potong dengan garis $y=1$, $y=2$, dan $y=3$.",
      "solution": [
        "Pusat lingkaran adalah asal dan jari-jarinya $2$. Jarak pusat ke garis horizontal $y=h$ ialah $|h|$. Karena $|1|<2$, $|2|=2$, dan $|3|>2$, proposisi perpotongan memprediksi berturut-turut dua, satu, dan nol titik.",
        "Substitusi $y=1$ memberi $x^2=3$, sehingga titiknya $(\\sqrt3,1)$ dan $(-\\sqrt3,1)$. Untuk $y=2$ diperoleh $x^2=0$, sehingga titik tunggalnya $(0,2)$.",
        "Untuk $y=3$ diperoleh $x^2=-5$, yang tidak memiliki solusi real. Perhitungan ini memverifikasi ketiga kemungkinan secara aljabar dan menunjukkan bahwa garis $y=2$ memang singgung."
      ],
      "conclusion": "Jumlah perpotongan masing-masing adalah dua, satu, dan nol."
    },
    {
      "title": "Perpotongan Garis dengan Parabola",
      "problem": "Tentukan seluruh perpotongan $x^2=4y$ dengan $y=x+2$.",
      "solution": [
        "Setiap titik potong harus memenuhi kedua persamaan. Substitusikan $y=x+2$ ke $x^2=4y$ untuk memperoleh $x^2-4x-8=0$. Diskriminannya $\\Delta=(-4)^2-4(1)(-8)=48>0$.",
        "Rumus kuadrat memberi $x=(4\\pm\\sqrt{48})/2=2\\pm2\\sqrt3$. Dari $y=x+2$ diperoleh $y=4\\pm2\\sqrt3$ dengan tanda yang sama.",
        "Verifikasi untuk kedua tanda: jika $x=2\\pm2\\sqrt3$, maka $x^2=16\\pm8\\sqrt3=4(4\\pm2\\sqrt3)=4y$. Persamaan garis juga terpenuhi berdasarkan konstruksi. Karena persamaan kuadrat mempunyai tepat dua akar real berbeda, tidak ada perpotongan lain."
      ],
      "conclusion": "Kedua titik potong adalah $(2+2sqrt3,4+2sqrt3)$ dan $(2-2sqrt3,4-2sqrt3)$."
    }
  ],
  "exercises": [
    {
      "prompt": "Tentukan titik potong garis vertikal $x=2$ dan garis $2x+y=7$. Buktikan titik tersebut tunggal.",
      "hint": "Substitusikan nilai $x$ lalu periksa kedua persamaan.",
      "answer": "Diketahui sistem $x=2$ dan $2x+y=7$. Substitusi persamaan pertama ke kedua menghasilkan $2(2)+y=7$, sehingga $y=3$. Verifikasi: $(2,3)$ memenuhi $x=2$ dan $2(2)+3=7$. Untuk ketunggalan, setiap titik pada garis pertama wajib memiliki koordinat $x=2$; setelah nilai itu ditetapkan, persamaan kedua memaksa $y=3$. Jadi tidak ada pasangan lain. Titik potong uniknya adalah $(2,3)$, meskipun salah satu garis tidak mempunyai gradien terdefinisi."
    },
    {
      "prompt": "Carilah persamaan garis melalui $(-1,3)$ dan $(2,9)$ tanpa menggunakan rumus gradien, lalu periksa hasilnya.",
      "hint": "Bentuk vektor arah dari selisih titik, kemudian pilih vektor normal.",
      "answer": "Diketahui $P=(-1,3)$ dan $Q=(2,9)$, sehingga vektor arahnya $u=Q-P=(3,6)\\ne0$. Vektor normal $n=(2,-1)$ memenuhi $n\\cdot u=6-6=0$. Persamaan garis melalui $P$ adalah $2(x+1)-(y-3)=0$, atau $y=2x+5$. Substitusi $P$ memberi $3=2(-1)+5$, dan substitusi $Q$ memberi $9=2(2)+5$. Karena kedua titik berbeda, teorema garis unik menjamin tidak ada garis lain yang memuat keduanya. Jadi persamaan yang diminta adalah $y=2x+5$."
    },
    {
      "prompt": "Tentukan jarak titik $(3,4)$ ke garis $x+y=1$ beserta kaki proyeksi ortogonalnya.",
      "hint": "Gunakan vektor normal $(1,1)$ dan cek kaki proyeksi pada garis.",
      "answer": "Untuk $L:x+y=1$, vektor normalnya $(1,1)$ dan $a^2+b^2=2>0$. Pada $P=(3,4)$ diperoleh $s=3+4-1=6$. Rumus jarak memberikan $d(P,L)=6/\\sqrt2=3\\sqrt2$. Kaki proyeksi adalah $H=P-\\frac{6}{2}(1,1)=(0,1)$. Pemeriksaan: $H$ terletak pada garis karena $0+1=1$; vektor $P-H=(3,3)$ sejajar normal garis. Panjang $P-H=\\sqrt{3^2+3^2}=3\\sqrt2$ cocok dengan jarak. Oleh bukti proyeksi ortogonal, titik $H$ adalah titik terdekat yang unik."
    },
    {
      "prompt": "Lingkaran mempunyai ruas diameter dengan ujung $A=(1,1)$ dan $B=(5,1)$. Tentukan persamaannya dan verifikasi kedua ujung diameter.",
      "hint": "Pusat adalah titik tengah diameter dan jari-jari setengah panjang diameter.",
      "answer": "Diketahui ujung diameter $A=(1,1)$ dan $B=(5,1)$. Titik tengahnya $C=((1+5)/2,(1+1)/2)=(3,1)$, sehingga $C$ adalah pusat. Panjang diameter $AB=\\sqrt{(5-1)^2+(1-1)^2}=4$, maka jari-jari $r=2>0$. Berdasarkan definisi lingkaran, persamaannya $(x-3)^2+(y-1)^2=4$. Substitusi $A$ memberi $(-2)^2+0=4$ dan substitusi $B$ memberi $2^2+0=4$. Keduanya benar-benar berada pada lingkaran dan berjarak $2$ dari pusat pada arah berlawanan. Jadi persamaan tersebut memenuhi data diameter."
    },
    {
      "prompt": "Klasifikasikan himpunan solusi $x^2+y^2+2x-6y+10=0$. Apakah ini lingkaran berjari-jari positif?",
      "hint": "Lengkapi kuadrat dan periksa tanda kuadrat jari-jari.",
      "answer": "Persamaan yang diketahui ekuivalen dengan $(x^2+2x)+(y^2-6y)+10=0$. Lengkapi kuadrat: $(x+1)^2-1+(y-3)^2-9+10=0$, sehingga $(x+1)^2+(y-3)^2=0$. Kedua kuadrat tidak negatif, dan jumlahnya nol hanya jika keduanya nol. Karena itu $x=-1$ dan $y=3$ adalah satu-satunya solusi. Verifikasi pada persamaan awal: $1+9-2-18+10=0$. Himpunan solusi adalah singleton $\\{(-1,3)\\}$, bukan lingkaran berjari-jari positif. Kasus ini menunjukkan mengapa pemeriksaan $\\rho>0$ wajib dilakukan sebelum menyebut persamaan umum sebagai lingkaran."
    },
    {
      "prompt": "Lingkaran berpusat $(1,-1)$ dengan jari-jari $\\sqrt5$. Tentukan garis singgung pada $P=(3,0)$ dan buktikan hanya ada satu titik potong.",
      "hint": "Periksa keanggotaan $P$ lalu gunakan vektor radius sebagai normal.",
      "answer": "Pertama, $|P-C|^2=(3-1)^2+(0+1)^2=5=r^2$, jadi $P$ terletak pada lingkaran. Vektor radius $P-C=(2,1)$ tidak nol, sehingga garis singgung melalui $P$ harus memiliki normal $(2,1)$. Persamaannya $2(x-3)+(y-0)=0$, yakni $2x+y=6$. Untuk verifikasi keunikan, ambil arah $u=(1,-2)$ yang ortogonal terhadap radius. Titik sembarang garis ialah $P+tu=(3+t,-2t)$. Jarak kuadrat ke pusat adalah $|(2,1)+t(1,-2)|^2=5+5t^2$. Kesamaan dengan $r^2=5$ memaksa $t=0$. Jadi hanya $P$ yang berada pada lingkaran; garis tersebut benar-benar singgung."
    },
    {
      "prompt": "Parabola mempunyai fokus $(0,3)$ dan direktriks $y=-3$. Tentukan persamaannya, lalu putuskan apakah $(6,3)$ dan $(0,1)$ termasuk parabola.",
      "hint": "Gunakan $p=3$ dan verifikasi jarak fokus serta direktriks.",
      "answer": "Fokus dan direktriks diketahui dengan $p=3>0$, sehingga teorema lokus memberikan $x^2=4py=12y$. Untuk $P=(6,3)$, $x^2=36$ dan $12y=36$, jadi titik termasuk parabola. Secara langsung, jarak ke fokus $(0,3)$ ialah $6$, sedangkan jarak ke direktriks $y=-3$ ialah $|3+3|=6$. Untuk $Q=(0,1)$, $x^2=0$ tetapi $12y=12$, jadi titik tidak termasuk. Pemeriksaan jarak memberi $d(Q,F)=2$ dan $d(Q,D)=|1+3|=4$, memang berbeda. Jadi hanya $(6,3)$ dari dua titik tersebut yang berada pada parabola."
    },
    {
      "prompt": "Tentukan seluruh titik potong parabola $x^2=4y$ dan garis $y=x+1$. Jelaskan mengapa tidak ada titik lain.",
      "hint": "Substitusikan persamaan garis dan gunakan diskriminan.",
      "answer": "Setiap titik perpotongan harus memenuhi $x^2=4(x+1)$, yaitu $x^2-4x-4=0$. Diskriminannya $\\Delta=16+16=32>0$, sehingga ada tepat dua akar real, yakni $x=(4\\pm\\sqrt{32})/2=2\\pm2\\sqrt2$. Dari persamaan garis, $y=x+1=3\\pm2\\sqrt2$ dengan tanda yang sesuai. Substitusi balik: untuk masing-masing akar, identitas $x^2=4x+4=4(x+1)=4y$ benar, dan $y=x+1$ benar menurut konstruksi. Karena persamaan kuadrat tersebut mempunyai tepat dua akar real, tidak mungkin ada titik perpotongan ketiga. Jadi jawabannya $(2+2\\sqrt2,3+2\\sqrt2)$ dan $(2-2\\sqrt2,3-2\\sqrt2)$."
    }
  ],
  "mistakes": [],
  "connections": []
};
