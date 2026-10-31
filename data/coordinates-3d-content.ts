import type { BookLessonContent } from "@/data/book-content-types";

/** Three-dimensional coordinates: exact metric proofs, spatial loci, and fully worked problems. */
export const coordinates3dContent:BookLessonContent = {
  "intro": [
    "Koordinat tiga dimensi memperluas jarak dan bentuk geometri bidang menjadi geometri ruang. Perubahan pada salah satu koordinat dapat memindahkan titik keluar dari bidang gambar, sehingga pemeriksaan aljabar diperlukan untuk membedakan kedekatan pada proyeksi dengan jarak ruang sebenarnya.",
    "Sebagai contoh utama, perpindahan dari $A=(1,-2,3)$ ke $B=(5,1,-9)$ terdiri dari komponen $(4,3,-12)$. Panjang perpindahan adalah 13, bukan 5: nilai 5 hanya panjang proyeksi horizontal. Dari kasus ini dibangun rumus jarak, titik tengah, lokus pembagi tegak lurus, serta irisan bola dengan bidang.",
    "Urutan pembahasan bergerak dari interpretasi koordinat dan norma ke pembuktian sifat jarak, kemudian ke persamaan permukaan bola dan penalaran lokus. Setiap definisi langsung diikuti contoh numerik, sedangkan teorema diturunkan dengan hipotesis yang dapat diperiksa pada soal.",
    "Visualisasi ruang dapat membantu membaca posisi dan irisan, tetapi perspektif pada layar tidak mempertahankan panjang. Oleh sebab itu perhitungan kuadrat jarak, substitusi balik, dan bukti dua arah menjadi dasar validasi bentuk yang ditemukan.",
    "Rujukan: James Stewart, Calculus: Early Transcendentals, edisi ke-8 (2016), pembahasan Three-Dimensional Coordinate Systems; Gilbert Strang, Introduction to Linear Algebra, edisi ke-5 (2016), pembahasan vektor, norma, dan hasil kali titik. Contoh dan pembuktian di halaman ini disusun mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Titik, Vektor, dan Norma Euclid di Ruang",
      "statement": "Ruang koordinat tiga dimensi adalah $\\mathbb R^3=\\{(x,y,z):x,y,z\\in\\mathbb R\\}$. Titik $P=(p_1,p_2,p_3)$ menyatakan posisi, sedangkan vektor $u=(u_1,u_2,u_3)$ menyatakan perpindahan. Operasi vektor didefinisikan komponen demi komponen, hasil kali titik $u\\cdot v=\\sum_{i=1}^3u_iv_i$, dan norma Euclid $\\|u\\|=\\sqrt{u\\cdot u}$.",
      "explanation": "Tiga koordinat bertanda menentukan posisi relatif terhadap bidang koordinat; titik dan vektor boleh memiliki representasi triple yang sama tetapi perannya berbeda."
    },
    {
      "kind": "definition",
      "title": "Jarak Euclid Antardua Titik",
      "statement": "Untuk $P,Q\\in\\mathbb R^3$, jarak Euclid didefinisikan oleh $d(P,Q)=\\|Q-P\\|=\\sqrt{(q_1-p_1)^2+(q_2-p_2)^2+(q_3-p_3)^2}$. Nilai ini selalu taknegatif dan nol tepat ketika $P=Q$.",
      "explanation": "Selisih koordinat menyatakan perpindahan; tanda selisih tidak memengaruhi jarak karena setiap komponen dikuadratkan."
    },
    {
      "kind": "definition",
      "title": "Ruas Garis dan Titik Tengah",
      "statement": "Untuk $P,Q\\in\\mathbb R^3$, ruas garis tertutup $[P,Q]=\\{(1-t)P+tQ:0\\le t\\le1\\}$. Titik tengahnya adalah $M=(P+Q)/2$, yakni titik pada ruas yang memenuhi $M-P=Q-M$.",
      "explanation": "Parameter t menginterpolasi posisi, bukan jarak pada kurva sembarang; t=0 memberi P dan t=1 memberi Q."
    },
    {
      "kind": "definition",
      "title": "Bola, Bola Terbuka, dan Bola Tertutup",
      "statement": "Untuk pusat $C\\in\\mathbb R^3$ dan $r>0$, permukaan bola $S(C,r)=\\{X:d(X,C)=r\\}$, bola terbuka $B(C,r)=\\{X:d(X,C)<r\\}$, dan bola tertutup $\\overline B(C,r)=\\{X:d(X,C)\\le r\\}$. Ketiga objek ini berbeda: permukaan bola hanya batasnya.",
      "explanation": "Persamaan $(x-c_1)^2+(y-c_2)^2+(z-c_3)^2=r^2$ menggambarkan permukaan, sedangkan pertidaksamaan menggambarkan daerah ruang."
    },
    {
      "kind": "lemma",
      "title": "Ketaksamaan Cauchy–Schwarz di $\mathbb R^3$",
      "statement": "Untuk setiap $u,v\\in\\mathbb R^3$, berlaku $|u\\cdot v|\\le\\|u\\|\\|v\\|$. Jika $u,v$ tidak nol, kesamaan terjadi tepat ketika keduanya bergantung linear.",
      "explanation": "Ketaksamaan ini menjadi landasan pembuktian ketaksamaan segitiga tanpa mengandalkan intuisi gambar.",
      "proof": [
        "Jika $v=0$, kedua ruas sama dengan nol. Misalkan $v\\ne0$. Untuk setiap $t\\in\\mathbb R$, sifat norma memberi $0\\le\\|u-tv\\|^2=\\|v\\|^2t^2-2(u\\cdot v)t+\\|u\\|^2$.",
        "Pilih $t_0=(u\\cdot v)/\\|v\\|^2$. Substitusi memberikan $0\\le\\|u\\|^2-(u\\cdot v)^2/\\|v\\|^2$. Karena $\\|v\\|^2>0$, diperoleh $(u\\cdot v)^2\\le\\|u\\|^2\\|v\\|^2$. Mengambil akar taknegatif membuktikan ketaksamaan.",
        "Kesamaan berlaku tepat ketika $\\|u-t_0v\\|^2=0$, yakni $u=t_0v$. Untuk $u,v\\ne0$, kondisi tersebut ekuivalen dengan ketergantungan linear. Sebaliknya, jika $u=tv$, maka $|u\\cdot v|=|t|\\|v\\|^2=\\|u\\|\\|v\\|$. Kedua arah telah dibuktikan. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Sifat Metrik Jarak Euclid dan Ketaksamaan Segitiga",
      "statement": "Untuk setiap $P,Q,R\\in\\mathbb R^3$, jarak Euclid memenuhi $d(P,Q)\\ge0$ dengan kesamaan tepat ketika $P=Q$, $d(P,Q)=d(Q,P)$, serta $d(P,R)\\le d(P,Q)+d(Q,R)$. Akibatnya $|d(P,R)-d(Q,R)|\\le d(P,Q)$.",
      "explanation": "Pertidaksamaan terakhir mengontrol perubahan jarak terhadap perubahan titik pengamatan.",
      "proof": [
        "Definisi memberi $d(P,Q)=\\sqrt{\\sum_i(q_i-p_i)^2}\\ge0$. Akar ini nol tepat ketika semua kuadrat nol, yaitu $P=Q$. Simetri mengikuti $(q_i-p_i)^2=(p_i-q_i)^2$.",
        "Tuliskan $u=Q-P$ dan $v=R-Q$, sehingga $R-P=u+v$. Berdasarkan Cauchy–Schwarz, $\\|u+v\\|^2=\\|u\\|^2+2u\\cdot v+\\|v\\|^2\\le(\\|u\\|+\\|v\\|)^2$. Kedua ruas taknegatif, sehingga $\\|u+v\\|\\le\\|u\\|+\\|v\\|$, yang tepat merupakan ketaksamaan segitiga.",
        "Terapkan hasil tersebut pada lintasan $P\\to Q\\to R$ untuk memperoleh $d(P,R)-d(Q,R)\\le d(P,Q)$. Pertukarkan $P$ dan $Q$ untuk memperoleh $d(Q,R)-d(P,R)\\le d(P,Q)$. Kedua ketaksamaan digabung menjadi $|d(P,R)-d(Q,R)|\\le d(P,Q)$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Karakterisasi Titik Tengah yang Unik",
      "statement": "Untuk $P,Q\\in\\mathbb R^3$, tepat satu titik $M$ memenuhi $M-P=Q-M$, yaitu $M=(P+Q)/2$. Titik ini berada pada $[P,Q]$ dan memenuhi $d(P,M)=d(M,Q)=d(P,Q)/2$.",
      "explanation": "Kesamaan dua jarak saja tidak menentukan titik tengah secara unik di ruang; perlu syarat vektor atau keanggotaan pada ruas.",
      "proof": [
        "Dari persamaan vektor $M-P=Q-M$, penjumlahan $M$ dan $P$ pada kedua ruas memberikan $2M=P+Q$. Karena skalar 2 tidak nol, solusinya tunggal: $M=(P+Q)/2$.",
        "Sebaliknya, untuk titik tersebut, $M-P=(Q-P)/2=Q-M$, sehingga persamaan terpenuhi. Bentuk $M=(1-\\tfrac12)P+\\tfrac12Q$ menunjukkan $M\\in[P,Q]$.",
        "Homogenitas norma memberi $d(P,M)=\\|(Q-P)/2\\|=\\tfrac12\\|Q-P\\|$ dan $d(M,Q)=\\|(Q-P)/2\\|$ pula. Sebagai pembeda, semua titik pada bidang sumbu tegak lurus $PQ$ berjarak sama ke $P,Q$, tetapi tidak semuanya titik tengah. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Bidang Pembagi Tegak Lurus sebagai Lokus Dua Jarak Sama",
      "statement": "Jika $P,Q\\in\\mathbb R^3$ dan $P\\ne Q$, maka $\\{X:d(X,P)=d(X,Q)\\}$ adalah bidang melalui $M=(P+Q)/2$ dengan vektor normal $Q-P$. Persamaannya $2X\\cdot(Q-P)=\\|Q\\|^2-\\|P\\|^2$.",
      "explanation": "Hipotesis P berbeda dari Q penting: jika P=Q, semua titik ruang memenuhi kesamaan jarak, bukan sebuah bidang.",
      "proof": [
        "Arah $(\\\\Rightarrow)$. Misalkan $d(X,P)=d(X,Q)$. Kedua jarak taknegatif, sehingga boleh dikuadratkan: $(X-P)\\cdot(X-P)=(X-Q)\\cdot(X-Q)$. Mengembangkan dan menghapus $\\|X\\|^2$ di kedua ruas memberi $-2X\\cdot P+\\|P\\|^2=-2X\\cdot Q+\\|Q\\|^2$, atau $2X\\cdot(Q-P)=\\|Q\\|^2-\\|P\\|^2$.",
        "Arah $(\\\\Leftarrow)$. Misalkan $X$ memenuhi persamaan linear tersebut. Menyusun ulang langkah aljabar di atas menghasilkan $\\|X-P\\|^2=\\|X-Q\\|^2$. Karena kedua norma taknegatif, akar kuadrat memberikan $d(X,P)=d(X,Q)$.",
        "Untuk $M=(P+Q)/2$, $2M\\cdot(Q-P)=(P+Q)\\cdot(Q-P)=\\|Q\\|^2-\\|P\\|^2$. Dengan $Q-P\\ne0$, persamaan linear itu memang mendefinisikan bidang yang melalui M dan bervektor normal $Q-P$. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Irisan Permukaan Bola dengan Bidang Horizontal",
      "statement": "Misalkan $C=(a,b,c)\\in\\mathbb R^3$, $r>0$, dan $H_h=\\{(x,y,z):z=h\\}$. Jika $|h-c|>r$, maka $S(C,r)\\cap H_h=\\varnothing$; jika $|h-c|=r$, irisannya satu titik $(a,b,h)$; jika $|h-c|<r$, irisannya lingkaran pada $H_h$ dengan pusat $(a,b,h)$ dan jari-jari $\\sqrt{r^2-(h-c)^2}$.",
      "explanation": "Lingkaran hasil irisan merupakan kurva satu dimensi pada bidang, bukan cakram; kasus singgung harus dibedakan dari kasus irisan kosong.",
      "proof": [
        "Setiap titik $X=(x,y,h)$ pada $H_h$ berada pada permukaan bola tepat ketika $(x-a)^2+(y-b)^2+(h-c)^2=r^2$. Persamaan tersebut ekuivalen dengan $(x-a)^2+(y-b)^2=r^2-(h-c)^2$.",
        "Jika $|h-c|>r$, ruas kanan negatif, sedangkan ruas kiri adalah jumlah kuadrat taknegatif; tidak ada solusi. Jika $|h-c|=r$, ruas kanan nol, memaksa $x=a$ dan $y=b$, sehingga tepat satu titik $(a,b,h)$.",
        "Jika $|h-c|<r$, ruas kanan positif. Menulis $\\rho=\\sqrt{r^2-(h-c)^2}>0$ memberikan $(x-a)^2+(y-b)^2=\\rho^2$, yakni lingkaran berjari-jari $\\rho$ pada bidang z=h. Sebaliknya setiap titik pada lingkaran ini memenuhi persamaan bola setelah suku $(h-c)^2$ dikembalikan. Ketiga kasus lengkap dan saling lepas. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Kekonveksan Bola Euclid Terbuka dan Tertutup",
      "statement": "Untuk $C\\in\\mathbb R^3$ dan $r>0$, jika $P,Q\\in\\overline B(C,r)$ dan $0\\le t\\le1$, maka $(1-t)P+tQ\\in\\overline B(C,r)$. Pernyataan yang sama berlaku untuk $B(C,r)$ ketika $P,Q$ berada dalam bola terbuka.",
      "explanation": "Permukaan bola umumnya tidak konveks: ruas penghubung dua titik permukaan dapat melalui bagian dalam.",
      "proof": [
        "Ambil $X_t=(1-t)P+tQ$. Dengan mengurangkan pusat, diperoleh $X_t-C=(1-t)(P-C)+t(Q-C)$ karena $(1-t)+t=1$.",
        "Ketaksamaan segitiga dan homogenitas norma menghasilkan $\\|X_t-C\\|\\le(1-t)\\|P-C\\|+t\\|Q-C\\|$. Jika $P,Q$ di bola tertutup, ruas kanan paling besar $(1-t)r+tr=r$, sehingga $X_t$ tetap di bola tertutup.",
        "Jika kedua titik di bola terbuka, tulis $\\|P-C\\|<r$ dan $\\|Q-C\\|<r$. Kombinasi konveks dua bilangan yang masing-masing kurang dari r tetap kurang dari r, termasuk pada t=0 dan t=1. Karena itu $\\|X_t-C\\|<r$. Dua klaim telah terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Koordinat Bertanda dan Norma Vektor",
      "forDefinition": "Titik, Vektor, dan Norma Euclid di Ruang",
      "problem": "Untuk $P=(-2,3,4)$, tentukan posisi relatif terhadap bidang koordinat, proyeksi pada bidang $xy$, dan panjang vektor posisi $OP$.",
      "solution": [
        "Diketahui $P=(-2,3,4)$. Koordinat $x$ negatif, $y$ positif, dan $z$ positif. Artinya titik berada pada sisi negatif bidang $yz$ dan sisi positif bidang $xz$ maupun $xy$; penentuan tanda ini tidak memerlukan sketsa perspektif.",
        "Proyeksi ortogonal ke bidang $xy$ menghapus komponen tegak lurus bidang itu, sehingga $P_{xy}=(-2,3,0)$. Vektor posisi dari asal ialah $OP=(-2,3,4)$.",
        "Normanya $\\|OP\\|=\\sqrt{(-2)^2+3^2+4^2}=\\sqrt{4+9+16}=\\sqrt{29}$. Sebagai verifikasi, jarak asal ke $P$ menurut definisi adalah $d(O,P)=\\sqrt{29}$ pula."
      ]
    },
    {
      "title": "Jarak Ruang dengan Segitiga Siku-Siku Bertahap",
      "forDefinition": "Jarak Euclid Antardua Titik",
      "problem": "Hitung jarak $A=(1,-2,3)$ dan $B=(5,1,-9)$ dengan rumus koordinat dan pemeriksaan Pythagoras.",
      "solution": [
        "Selisih koordinat $B-A=(4,3,-12)$, sehingga $d(A,B)=\\sqrt{4^2+3^2+(-12)^2}=\\sqrt{16+9+144}=\\sqrt{169}=13$. Tanda negatif pada perubahan z tidak mengurangi panjang.",
        "Untuk pemeriksaan kedua, perpindahan pada bidang horizontal memiliki panjang $\\sqrt{4^2+3^2}=5$. Perpindahan vertikal berukuran $|-12|=12$ dan tegak lurus perpindahan horizontal.",
        "Pythagoras pada dua komponen ortogonal tersebut menghasilkan $\\sqrt{5^2+12^2}=13$, sesuai hasil rumus tiga koordinat. Jarak yang diminta adalah 13 satuan panjang."
      ]
    },
    {
      "title": "Titik Tengah dan Verifikasi Dua Perpindahan",
      "forDefinition": "Ruas Garis dan Titik Tengah",
      "problem": "Tentukan titik tengah ruas $A=(1,-2,3)$ ke $B=(5,4,-1)$, lalu periksa dua vektor setengah ruas.",
      "solution": [
        "Titik tengah diperoleh dengan merata-ratakan setiap koordinat: $M=((1+5)/2,(-2+4)/2,(3-1)/2)=(3,1,1)$. Bentuk ini sama dengan $A+\\tfrac12(B-A)$.",
        "Perpindahan $M-A=(2,3,-2)$ dan $B-M=(2,3,-2)$ identik. Keduanya mempunyai panjang $\\sqrt{2^2+3^2+(-2)^2}=\\sqrt{17}$.",
        "Panjang seluruh ruas ialah $\\|B-A\\|=\\|(4,6,-4)\\|=2\\sqrt{17}$, sehingga masing-masing setengahnya $\\sqrt{17}$. Identitas vektor dan jarak memverifikasi titik tengah, bukan hanya kesamaan dua jarak."
      ]
    },
    {
      "title": "Membedakan Permukaan, Bagian Dalam, dan Bagian Luar Bola",
      "forDefinition": "Bola, Bola Terbuka, dan Bola Tertutup",
      "problem": "Untuk $C=(1,-2,3)$ dan $r=5$, klasifikasikan $Q=(4,2,3)$, $R=(1,-2,3)$, dan $T=(7,-2,3)$.",
      "solution": [
        "Hitung jarak kuadrat dari pusat untuk menghindari akar yang tidak perlu. Untuk Q, $\\|Q-C\\|^2=3^2+4^2+0^2=25=r^2$, sehingga Q berada tepat pada permukaan $S(C,5)$ dan juga dalam bola tertutup, tetapi bukan dalam bola terbuka.",
        "Untuk R, $\\|R-C\\|^2=0<25$, sehingga R berada dalam bola terbuka maupun tertutup tetapi tidak pada permukaan. Untuk T, $\\|T-C\\|^2=6^2=36>25$, sehingga T di luar ketiganya.",
        "Klasifikasi ini juga menunjukkan bahwa tanda persamaan dan pertidaksamaan tidak dapat dipertukarkan: titik pusat memenuhi ketaksamaan ketat, sedangkan titik batas hanya memenuhi ketaksamaan lemah."
      ]
    },
    {
      "title": "Bidang Semua Titik yang Sama Jauh",
      "problem": "Carilah lokus titik yang sama jauh dari $P=(0,0,0)$ dan $Q=(2,-2,4)$, lalu uji $X=(0,0,3)$.",
      "solution": [
        "Karena $P\\ne Q$, teorema pembagi tegak lurus berlaku. Selisih $Q-P=(2,-2,4)$ dan $\\|Q\\|^2-\\|P\\|^2=4+4+16=24$. Persamaan $2X\\cdot(Q-P)=24$ menjadi $4x-4y+8z=24$, atau $x-y+2z=6$.",
        "Titik tengah $M=(1,-1,2)$ berada pada bidang karena $1-(-1)+2(2)=6$. Normal bidang $(1,-1,2)$ sejajar vektor $Q-P$, sebagaimana disyaratkan teorema.",
        "Untuk $X=(0,0,3)$, ruas kiri persamaan bidang bernilai 6. Verifikasi langsung: $d(X,P)=3$ dan $d(X,Q)=\\sqrt{(-2)^2+2^2+(-1)^2}=3$. Jadi X benar-benar anggota lokus."
      ]
    },
    {
      "title": "Tiga Kasus Irisan Bola dengan Bidang",
      "problem": "Potong bola berpusat $(1,-1,2)$ berjari-jari 5 dengan bidang $z=5$, $z=7$, dan $z=8$.",
      "solution": [
        "Persamaan permukaan bola adalah $(x-1)^2+(y+1)^2+(z-2)^2=25$. Pada $z=5$, selisih tinggi 3, sehingga $(x-1)^2+(y+1)^2=25-9=16$. Irisan berupa lingkaran berpusat $(1,-1,5)$ dan berjari-jari 4.",
        "Pada $z=7$, selisih tinggi 5 sama dengan jari-jari. Persamaan berubah menjadi $(x-1)^2+(y+1)^2=0$, yang mempunyai satu solusi $x=1,y=-1$. Bidang menyinggung bola pada $(1,-1,7)$.",
        "Pada $z=8$, selisih tinggi 6 lebih besar dari 5, sehingga ruas kanan $25-36=-11$ negatif. Tidak ada pasangan bilangan real yang jumlah kuadratnya negatif; irisannya kosong."
      ]
    },
    {
      "title": "Ketaksamaan Segitiga: Kesamaan dan Ketaksamaan Ketat",
      "problem": "Bandingkan $\\|u+v\\|$ dan $\\|u\\|+\\|v\\|$ untuk (i) $u=(1,2,2),v=(2,4,4)$; (ii) $u=(3,0,0),v=(0,4,0)$.",
      "solution": [
        "Pada (i), $\\|u\\|=\\sqrt{1+4+4}=3$ dan $v=2u$, sehingga $\\|v\\|=6$. Jumlah $u+v=(3,6,6)$ memiliki norma 9. Karena $v$ merupakan kelipatan positif u, ketaksamaan segitiga mencapai kesamaan $9=3+6$.",
        "Pada (ii), $\\|u\\|=3$ dan $\\|v\\|=4$, sedangkan $u+v=(3,4,0)$ bernorma 5. Diperoleh ketaksamaan ketat $5<3+4=7$.",
        "Perbedaan ini sesuai dengan bukti Cauchy–Schwarz: vektor tegak lurus pada (ii) tidak dapat menghasilkan suku hasil kali titik maksimum, sedangkan vektor searah pada (i) dapat."
      ]
    },
    {
      "title": "Ruas di Dalam Bola dan Batas Permukaan",
      "problem": "Untuk bola terbuka $B(O,5)$, periksa seluruh ruas dari $P=(3,0,0)$ ke $Q=(0,4,0)$ dan tentukan jarak titik tengah ke pusat.",
      "solution": [
        "Diketahui $\\|P\\|=3<5$ dan $\\|Q\\|=4<5$. Titik sembarang ruas ialah $X_t=(1-t)P+tQ=(3(1-t),4t,0)$ untuk $0\\le t\\le1$.",
        "Dengan ketaksamaan segitiga, $\\|X_t\\|\\le3(1-t)+4t=3+t\\le4<5$. Karena estimasi berlaku untuk setiap t pada interval, seluruh ruas berada di bola terbuka, tanpa perlu memeriksa titik demi titik.",
        "Titik tengah $X_{1/2}=(3/2,2,0)$ mempunyai jarak $\\sqrt{(3/2)^2+2^2}=\\sqrt{25/4}=5/2$. Nilai ini lebih kecil dari 5 dan memberi pemeriksaan numerik terhadap hasil umum."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "KG3-01. Diberikan $P=(2,-1,4)$ dan $Q=(-1,3,4)$. Hitung jarak, tentukan apakah keduanya terletak pada bidang horizontal yang sama, dan verifikasi dengan segitiga siku-siku.",
      "hint": "Hitung selisih tiga koordinat; periksa komponen z.",
      "answer": "Diketahui $Q-P=(-3,4,0)$. Rumus jarak Euclid memberi $d(P,Q)=\\sqrt{(-3)^2+4^2+0^2}=\\sqrt{25}=5$. Karena koordinat z kedua titik sama-sama 4, keduanya berada pada bidang $z=4$; ruas penghubungnya tidak memiliki komponen vertikal. Pemeriksaan independen dilakukan di bidang horizontal: perpindahan 3 satuan sepanjang arah x dan 4 satuan sepanjang arah y saling tegak lurus, sehingga Pythagoras memberi panjang $\\sqrt{3^2+4^2}=5$. Tidak ada suku z tambahan. Jarak kedua titik adalah 5 satuan dan ruasnya seluruhnya berada pada bidang $z=4$."
    },
    {
      "prompt": "KG3-02. Tentukan persamaan permukaan bola berpusat $C=(0,1,-1)$ yang melalui $P=(2,1,1)$. Tentukan pula apakah $Q=(0,1,0)$ berada di dalam bola terbuka.",
      "hint": "Jari-jari diperoleh dari jarak C ke P.",
      "answer": "Bola berpusat C dan melalui P memiliki $r^2=\\|P-C\\|^2=2^2+0^2+2^2=8$, sehingga $r=2\\sqrt2>0$. Persamaan permukaannya $x^2+(y-1)^2+(z+1)^2=8$. Substitusi P menghasilkan $4+0+4=8$, jadi titik yang ditentukan memang terletak pada permukaan. Untuk Q, jarak kuadrat ke pusat adalah $0^2+0^2+1^2=1<8$, sehingga Q termasuk bola terbuka dan bola tertutup, tetapi bukan permukaannya. Pembedaan ini penting karena persamaan bola sendiri hanya mendeskripsikan batas, bukan semua titik di dalamnya."
    },
    {
      "prompt": "KG3-03. Pada ruas dari $A=(1,0,2)$ ke $B=(7,6,-4)$, tentukan titik yang terletak sepertiga perjalanan dari A menuju B. Buktikan rasio jaraknya.",
      "hint": "Gunakan X=A+(B-A)/3 dan homogenitas norma.",
      "answer": "Parameter ruas untuk sepertiga perjalanan ialah $t=1/3$. Vektor $B-A=(6,6,-6)$, sehingga $X=A+\\tfrac13(B-A)=(1,0,2)+(2,2,-2)=(3,2,0)$. Verifikasi: $X-A=(2,2,-2)$ memiliki panjang $2\\sqrt3$, sedangkan $B-X=(4,4,-4)$ memiliki panjang $4\\sqrt3$. Oleh sebab itu $d(A,X):d(X,B)=1:2$, sesuai makna sepertiga perjalanan. Selain itu $X$ berada pada ruas karena parameter $1/3$ terletak dalam $[0,1]$. Jawaban bukan hanya triple koordinat, melainkan titik yang memenuhi posisi dan rasio yang diminta."
    },
    {
      "prompt": "KG3-04. Tentukan seluruh $X=(x,y,z)$ dengan $d(X,(1,0,0))=d(X,(-1,0,0))$. Jelaskan mengapa lokus bukan satu titik.",
      "hint": "Kuadratkan kedua jarak lalu sederhanakan.",
      "answer": "Ambil $P=(1,0,0)$ dan $Q=(-1,0,0)$; keduanya berbeda. Persamaan jarak sama memberi $(x-1)^2+y^2+z^2=(x+1)^2+y^2+z^2$. Setelah mengembangkan, $x^2-2x+1=x^2+2x+1$, sehingga $-4x=0$ dan $x=0$. Sebaliknya, untuk setiap $X=(0,y,z)$, kedua jarak kuadrat sama dengan $1+y^2+z^2$, sehingga semua titik bidang $x=0$ memenuhi syarat. Lokus bukan satu titik: misalnya $(0,0,0)$ dan $(0,2,3)$ sama-sama anggota. Bidang ini melalui titik tengah kedua pusat dan normalnya sejajar $Q-P=(-2,0,0)$."
    },
    {
      "prompt": "KG3-05. Bola $S((0,0,1),3)$ dipotong oleh bidang $z=4$ dan $z=0$. Tentukan bentuk kedua irisan dan periksa jari-jarinya.",
      "hint": "Substitusikan nilai z ke persamaan bola.",
      "answer": "Persamaan bola adalah $x^2+y^2+(z-1)^2=9$. Untuk $z=4$, diperoleh $x^2+y^2+9=9$, atau $x^2+y^2=0$. Satu-satunya solusi real ialah $(x,y)=(0,0)$, sehingga irisannya satu titik $(0,0,4)$; bidang ini menyinggung bola karena jarak pusat ke bidang 3 sama dengan jari-jari. Untuk $z=0$, diperoleh $x^2+y^2+1=9$, yakni $x^2+y^2=8$, suatu lingkaran pada bidang $z=0$ berpusat $(0,0,0)$ dan berjari-jari $\\sqrt8=2\\sqrt2$. Substitusi titik $(2\\sqrt2,0,0)$ memverifikasi persamaan bola: $8+0+1=9$."
    },
    {
      "prompt": "KG3-06. Buktikan bahwa permukaan bola $S(C,r)$ dengan $r>0$ tidak konveks, tetapi bola tertutup $\\overline B(C,r)$ konveks.",
      "hint": "Gunakan dua titik antipodal pada permukaan dan ketaksamaan segitiga.",
      "answer": "Ambil vektor satuan $e=(1,0,0)$ serta dua titik antipodal $P=C+re$ dan $Q=C-re$. Keduanya pada permukaan karena $\\|P-C\\|=\\|Q-C\\|=r$. Titik tengahnya $(P+Q)/2=C$ berjarak 0 dari pusat, sedangkan $r>0$. Oleh karena itu C tidak berada pada $S(C,r)$, sehingga ruas antara dua anggota permukaan tidak seluruhnya berada pada permukaan; permukaan tidak konveks. Untuk bola tertutup, ambil sebarang P,Q dengan $\\|P-C\\|,\\|Q-C\\|\\le r$ dan $0\\le t\\le1$. Ketaksamaan segitiga memberi $\\|(1-t)P+tQ-C\\|\\le(1-t)\\|P-C\\|+t\\|Q-C\\|\\le r$. Semua titik ruas tetap di bola tertutup, yang membuktikan kekonveksannya."
    },
    {
      "prompt": "KG3-07. Berikan satu pasangan vektor taknol yang mencapai kesamaan ketaksamaan segitiga dan satu pasangan yang memberi ketaksamaan ketat; buktikan kedua hasil dengan hitungan.",
      "hint": "Bandingkan vektor searah dengan vektor tegak lurus.",
      "answer": "Untuk kesamaan, pilih $u=(1,2,2)$ dan $v=(2,4,4)=2u$. Norma masing-masing ialah 3 dan 6, sedangkan $u+v=(3,6,6)$ bernorma 9. Karena $9=3+6$, kesamaan tercapai; kedua vektor searah sesuai kondisi kesamaan Cauchy–Schwarz. Untuk ketaksamaan ketat, pilih $a=(3,0,0)$ dan $b=(0,4,0)$. Diperoleh $\\|a\\|=3$, $\\|b\\|=4$, dan $\\|a+b\\|=\\sqrt{9+16}=5<7$. Hasil ini tidak bertentangan dengan ketaksamaan segitiga karena teorema hanya menjamin batas atas, bukan selalu kesamaan. Pemeriksaan hasil kali titik $a\\cdot b=0$ juga menegaskan bahwa kedua vektor tidak searah."
    },
    {
      "prompt": "KG3-08. Tentukan irisan dua permukaan bola $x^2+y^2+z^2=25$ dan $(x-6)^2+y^2+z^2=25$. Buktikan tidak ada titik irisan lain.",
      "hint": "Kurangkan kedua persamaan sebelum menentukan radius irisan.",
      "answer": "Setiap titik irisan harus memenuhi kedua persamaan. Kurangkan persamaan pertama dari persamaan kedua: $(x-6)^2-x^2=0$, yakni $x^2-12x+36-x^2=0$, sehingga $x=3$. Substitusi ke persamaan pertama menghasilkan $9+y^2+z^2=25$, atau $y^2+z^2=16$. Jadi calon irisan adalah lingkaran pada bidang $x=3$ dengan pusat $(3,0,0)$ dan jari-jari 4. Sebaliknya, setiap titik $(3,y,z)$ dengan $y^2+z^2=16$ memenuhi bola pertama karena $9+16=25$, dan bola kedua karena $(3-6)^2+16=25$. Kedua implikasi membuktikan kesamaan himpunan irisan dengan lingkaran tersebut; tidak ada titik lain."
    }
  ],
  "mistakes": [],
  "connections": []
};
