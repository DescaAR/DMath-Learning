import type { BookExample, BookFormalItem, BookLessonContent } from "@/data/book-content-types";
import { additionalBookSubjects } from "@/data/additional-book-curricula";


function textbookFormal(subjectTitle:string,chapterTitle:string,sectionTitle:string,keyIdeas:string[]):BookFormalItem[]{
  const text=(chapterTitle+" "+sectionTitle+" "+keyIdeas.join(" ")).toLowerCase();

  if(subjectTitle==="Kombinatorika"){
    if(/permut|kombin|subset|multiset|pencacahan|counting/.test(text)){
      return[
        {kind:"definition",title:"Prinsip Perkalian",statement:"Jika suatu proses terdiri atas $r$ tahap dan tahap ke-$i$ dapat dilakukan dalam $n_i$ cara untuk setiap pilihan sebelumnya, banyak hasil keseluruhan adalah $n_1n_2\\cdots n_r$."},
        {kind:"proposition",title:"Banyak Permutasi",statement:"Banyak permutasi dari $n$ objek berbeda adalah $n!$.",proof:["Posisi pertama dapat diisi dalam $n$ cara.","Setelah satu objek dipilih, posisi kedua mempunyai $n-1$ pilihan, lalu berturut-turut $n-2,\\ldots,1$ pilihan.","Prinsip perkalian memberi $n(n-1)\\cdots1=n!$."]},
        {kind:"proposition",title:"Banyak $k$-Subhimpunan",statement:"Banyak cara memilih $k$ objek dari $n$ objek berbeda tanpa memperhatikan urutan adalah $\\binom nk=\\frac{n!}{k!(n-k)!}$.",proof:["Hitung dahulu susunan terurut $k$ objek, yaitu $n!/(n-k)!$.","Setiap $k$-subhimpunan dihitung tepat $k!$ kali karena unsur-unsurnya dapat diurutkan dalam $k!$ cara.","Pembagian dengan $k!$ memberi rumus yang dinyatakan."]}
      ];
    }
    if(/pigeon|rumah merpati|ramsey|averaging/.test(text)){
      return[
        {kind:"theorem",title:"Prinsip Pigeonhole Umum",statement:"Jika $N$ objek didistribusikan ke $k$ kotak, terdapat sedikitnya satu kotak yang memuat sekurang-kurangnya $\\lceil N/k\\rceil$ objek.",proof:["Diandaikan setiap kotak memuat paling banyak $\\lceil N/k\\rceil-1$ objek.","Jumlah objek seluruhnya paling banyak $k(\\lceil N/k\\rceil-1)$.","Dari sifat fungsi ceiling berlaku $k(\\lceil N/k\\rceil-1)<N$.","Hal ini bertentangan dengan adanya $N$ objek. Dengan demikian teorema terbukti."]},
        {kind:"note",title:"Averaging Principle",statement:"Prinsip pigeonhole dapat dibaca sebagai argumen rata-rata. Jika rata-rata isi kotak adalah $N/k$, sedikitnya satu kotak mempunyai isi tidak kurang dari rata-rata yang dibulatkan ke atas."}
      ];
    }
    if(/binomial|pascal/.test(text)){
      return[
        {kind:"proposition",title:"Identitas Pascal",statement:"Untuk $1\\le k\\le n-1$ berlaku $\\binom nk=\\binom{n-1}{k}+\\binom{n-1}{k-1}$.",proof:["Diambil satu unsur khusus $x$ dari himpunan beranggota $n$.","Setiap $k$-subhimpunan dapat dipisahkan menjadi dua kelas, yaitu yang tidak memuat $x$ dan yang memuat $x$.","Kelas pertama berjumlah $\\binom{n-1}{k}$, sedangkan kelas kedua ditentukan dengan memilih $k-1$ unsur lain dan berjumlah $\\binom{n-1}{k-1}$.","Kedua kelas saling lepas dan mencakup seluruh $k$-subhimpunan."]},
        {kind:"theorem",title:"Teorema Binomial",statement:"Untuk $n\\in\\mathbb N$, $(x+y)^n=\\sum_{k=0}^n\\binom nk x^{n-k}y^k$.",proof:["Ekspansi $(x+y)^n$ diperoleh dengan memilih satu suku dari setiap faktor.","Suku $x^{n-k}y^k$ muncul tepat ketika $y$ dipilih dari $k$ faktor.","Banyak pilihan faktor tersebut adalah $\\binom nk$.","Menjumlahkan terhadap seluruh $k$ menghasilkan formula binomial."]}
      ];
    }
    if(/inclusion|eksklusi|mobius/.test(text)){
      return[
        {kind:"theorem",title:"Prinsip Inklusi–Eksklusi",statement:"Untuk himpunan hingga $A_1,\\ldots,A_n$, kardinalitas gabungannya diperoleh dengan menjumlahkan kardinalitas tunggal, mengurangkan semua irisan berpasangan, menambah semua irisan bertiga, dan seterusnya secara berselang-seling.",proof:["Diambil sebarang elemen $x$ yang berada tepat pada $r$ dari himpunan tersebut.","Kontribusi $x$ pada ruas inklusi–eksklusi adalah $\\binom r1-\\binom r2+\\cdots+(-1)^{r+1}\\binom rr$.","Dari $(1-1)^r=0$ diperoleh jumlah tersebut sama dengan $1$.","Setiap elemen pada gabungan dihitung tepat satu kali, sedangkan elemen di luar gabungan tidak dihitung."]}
      ];
    }
    if(/recurr|rekuren|generating|pembangkit/.test(text)){
      return[
        {kind:"definition",title:"Fungsi Pembangkit Biasa",statement:"Untuk barisan $(a_n)_{n\\ge0}$, fungsi pembangkit biasa didefinisikan secara formal oleh $A(x)=\\sum_{n\\ge0}a_nx^n$."},
        {kind:"proposition",title:"Fungsi Pembangkit Rekurensi Fibonacci",statement:"Jika $F_0=0$, $F_1=1$, dan $F_n=F_{n-1}+F_{n-2}$, fungsi pembangkitnya adalah $F(x)=\\frac{x}{1-x-x^2}$.",proof:["Kalikan rekurensi dengan $x^n$ dan jumlahkan untuk $n\\ge2$.","Ruas kiri menjadi $F(x)-x$, sedangkan dua ruas kanan menjadi $xF(x)$ dan $x^2F(x)$.","Diperoleh $F(x)-x=xF(x)+x^2F(x)$.","Penyelesaian terhadap $F(x)$ memberi $F(x)=x/(1-x-x^2)$."]}
      ];
    }
    if(/catalan|stirling|partition|schroder/.test(text)){
      return[
        {kind:"definition",title:"Bilangan Catalan",statement:"Bilangan Catalan dapat didefinisikan oleh $C_n=\\frac{1}{n+1}\\binom{2n}{n}$ dan menghitung berbagai keluarga objek ekuinumerous, termasuk bracketing penuh dan lintasan Dyck."},
        {kind:"proposition",title:"Rekurensi Catalan",statement:"Untuk $n\\ge0$, $C_{n+1}=\\sum_{k=0}^{n}C_kC_{n-k}$.",proof:["Pada struktur Catalan yang mempunyai dekomposisi akar, pilih ukuran $k$ untuk bagian kiri.","Bagian kiri dapat dibentuk dalam $C_k$ cara dan bagian kanan dalam $C_{n-k}$ cara.","Prinsip perkalian memberi $C_kC_{n-k}$ untuk ukuran kiri tetap.","Menjumlahkan untuk seluruh $k$ menghasilkan rekurensi."]}
      ];
    }
    if(/distinct representative|marriage|wakil|matching/.test(text)){
      return[
        {kind:"definition",title:"System of Distinct Representatives",statement:"Untuk keluarga himpunan $A_1,\\ldots,A_n$, SDR adalah pilihan $a_i\\in A_i$ dengan semua $a_i$ berbeda."},
        {kind:"theorem",title:"Teorema Hall",statement:"Keluarga hingga $A_1,\\ldots,A_n$ mempunyai SDR jika dan hanya jika untuk setiap $I\\subseteq\\{1,\\ldots,n\\}$ berlaku $|\\bigcup_{i\\in I}A_i|\\ge |I|$.",proof:["Syarat perlu langsung karena wakil berbeda bagi subkeluarga berindeks $I$ harus semuanya berada dalam gabungan tersebut.","Untuk kecukupan digunakan induksi pada $n$.","Jika setiap subkeluarga tak kosong dengan ukuran kurang dari $n$ memiliki gabungan berukuran sedikitnya satu lebih besar, pilih satu elemen dari $A_n$ dan gunakan induksi pada keluarga sisanya setelah elemen tersebut dihapus.","Jika terdapat subkeluarga proper yang mencapai kesamaan Hall, gunakan induksi untuk memilih SDR pada subkeluarga itu, lalu kontraksikan wakil yang sudah dipakai dan terapkan induksi pada keluarga komplemennya.","Kedua kasus menghasilkan SDR untuk seluruh keluarga."]}
      ];
    }
    if(/latin|design|bibd|block/.test(text)){
      return[
        {kind:"definition",title:"Balanced Incomplete Block Design",statement:"BIBD dengan parameter $(v,b,r,k,\\lambda)$ terdiri atas $v$ titik dan $b$ blok berukuran $k$, setiap titik berada pada $r$ blok, dan setiap pasangan titik berada bersama dalam tepat $\\lambda$ blok."},
        {kind:"proposition",title:"Relasi Parameter BIBD",statement:"Pada BIBD berlaku $vr=bk$ dan $\\lambda(v-1)=r(k-1)$.",proof:["Hitung pasangan insidensi $(x,B)$ dengan $x\\in B$. Dari sisi titik terdapat $vr$ pasangan, sedangkan dari sisi blok terdapat $bk$ pasangan.","Untuk relasi kedua, tetapkan satu titik $x$ dan hitung pasangan $(y,B)$ dengan $y\\ne x$ serta $x,y\\in B$.","Dari $r$ blok yang memuat $x$, masing-masing memberi $k-1$ pilihan $y$, sehingga jumlahnya $r(k-1)$.","Dari $v-1$ pilihan $y$, setiap pasangan $x,y$ muncul pada $\\lambda$ blok, sehingga jumlahnya $\\lambda(v-1)$."]}
      ];
    }
    if(/graph|graf|tree|pohon|degree|derajat|connected|keterhubungan/.test(text)){
      return[
        {kind:"definition",title:"Graf Sederhana",statement:"Graf sederhana $G=(V,E)$ terdiri atas himpunan simpul $V$ dan himpunan sisi $E$ berupa pasangan dua simpul berbeda, tanpa loop dan tanpa sisi ganda."},
        {kind:"theorem",title:"Handshaking Lemma",statement:"Untuk graf hingga $G=(V,E)$ berlaku $\\sum_{v\\in V}\\deg(v)=2|E|$.",proof:["Hitung pasangan insidensi antara simpul dan sisi.","Setiap simpul $v$ menyumbang $\\deg(v)$ pasangan.","Setiap sisi mempunyai tepat dua ujung, sehingga setiap sisi menyumbang dua pasangan.","Kedua cara menghitung objek yang sama memberi identitas yang dinyatakan."]},
        {kind:"corollary",title:"Banyak Simpul Berderajat Ganjil",statement:"Pada setiap graf hingga, banyak simpul berderajat ganjil adalah genap.",proof:["Jumlah seluruh derajat adalah $2|E|$, sehingga genap.","Jumlah derajat simpul berderajat genap juga genap.","Oleh karena itu jumlah derajat ganjil harus genap, yang hanya mungkin jika banyak suku ganjilnya genap."]}
      ];
    }
    if(/digraph|network|flow|aliran|shortest|route/.test(text)){
      return[
        {kind:"definition",title:"Digraf dan Kapasitas",statement:"Digraf mempunyai busur berarah. Pada jaringan aliran, setiap busur $(u,v)$ mempunyai kapasitas $c(u,v)\\ge0$, dan aliran harus memenuhi batas kapasitas serta konservasi pada simpul selain sumber dan tujuan."},
        {kind:"proposition",title:"Batas Cut untuk Aliran",statement:"Nilai setiap aliran $s$–$t$ tidak melebihi kapasitas setiap cut $s$–$t$.",proof:["Jumlah aliran bersih yang keluar dari sisi sumber suatu cut sama dengan nilai aliran karena konservasi pada simpul internal.","Pada setiap busur yang melintasi cut ke arah tujuan, aliran tidak melebihi kapasitasnya.","Busur yang melintasi arah sebaliknya hanya mengurangi aliran bersih.","Dengan demikian nilai aliran tidak melebihi jumlah kapasitas busur keluar cut."]}
      ];
    }
    if(/burnside|polya|pólya|group action|orbit/.test(text)){
      return[
        {kind:"definition",title:"Orbit dan Titik Tetap",statement:"Jika grup $G$ bekerja pada himpunan $X$, orbit $x$ adalah $Gx=\\{gx:g\\in G\\}$, sedangkan $\\operatorname{Fix}(g)=\\{x\\in X:gx=x\\}$."},
        {kind:"theorem",title:"Lemma Burnside",statement:"Banyak orbit aksi grup hingga $G$ pada himpunan hingga $X$ adalah $\\frac1{|G|}\\sum_{g\\in G}|\\operatorname{Fix}(g)|$.",proof:["Hitung himpunan pasangan $(g,x)$ dengan $gx=x$.","Dengan mengelompokkan menurut $g$, jumlah pasangan adalah $\\sum_g|\\operatorname{Fix}(g)|$.","Dengan mengelompokkan menurut $x$, banyak $g$ yang menstabilkan $x$ adalah $|G_x|$.","Pada setiap orbit, teorema orbit–stabilizer memberi $|G_x|=|G|/|Gx|$, sehingga jumlah kontribusi seluruh elemen satu orbit adalah $|G|$.","Jika terdapat $m$ orbit, jumlah pasangan adalah $m|G|$. Membandingkan kedua hitungan memberi formula Burnside."]}
      ];
    }
  }

  if(subjectTitle==="Aljabar Linear"){
    if(/linear system|sistem persamaan|gauss|echelon|baris/.test(text)){
      return[
        {kind:"definition",title:"Bentuk Eselon Baris",statement:"Matriks berada pada bentuk eselon baris jika setiap baris nol berada di bawah baris tak nol, pivot setiap baris tak nol berada di kanan pivot baris sebelumnya, dan semua entri di bawah pivot bernilai nol."},
        {kind:"proposition",title:"Operasi Baris Elementer Mempertahankan Himpunan Solusi",statement:"Menukar dua persamaan, mengalikan satu persamaan dengan skalar tak nol, atau menambahkan kelipatan persamaan lain tidak mengubah himpunan solusi sistem linear.",proof:["Setiap operasi menghasilkan persamaan yang ekuivalen secara logis dengan sistem sebelum operasi.","Masing-masing operasi mempunyai operasi invers dari jenis yang sama.","Karena transformasi dapat dibalik, suatu tuple memenuhi sistem lama tepat ketika memenuhi sistem baru."]}
      ];
    }
    if(/matrix|matriks|inverse|invers|elementary/.test(text)){
      return[
        {kind:"definition",title:"Matriks Invertibel",statement:"Matriks persegi $A$ disebut invertibel jika terdapat matriks $A^{-1}$ dengan $AA^{-1}=A^{-1}A=I$."},
        {kind:"proposition",title:"Keunikan Invers",statement:"Jika invers suatu matriks ada, invers tersebut tunggal.",proof:["Andaikan $B$ dan $C$ keduanya invers dari $A$.","Diperoleh $B=BI=B(AC)=(BA)C=IC=C$.","Dengan demikian invers $A$ tunggal."]},
        {kind:"proposition",title:"Invers Hasil Kali",statement:"Jika $A$ dan $B$ invertibel, maka $AB$ invertibel dan $(AB)^{-1}=B^{-1}A^{-1}$.",proof:["Hitung $(AB)(B^{-1}A^{-1})=AIB^{-0+0}A^{-1}=I$ setelah menyederhanakan $BB^{-1}=I$.","Demikian pula $(B^{-1}A^{-1})(AB)=I$.","Karena matriks tersebut menjadi invers kiri dan kanan, formula terbukti."]}
      ].map((item)=>item.title==="Invers Hasil Kali"?{...item,proof:["Dihitung $(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AA^{-1}=I$.","Dihitung pula $(B^{-1}A^{-1})(AB)=B^{-1}(A^{-1}A)B=B^{-1}B=I$.","Dengan demikian $B^{-1}A^{-1}$ adalah invers dari $AB$."]}:item);
    }
    if(/determinant|determinan|cramer|cofactor/.test(text)){
      return[
        {kind:"definition",title:"Determinan",statement:"Determinan adalah fungsi skalar pada matriks persegi yang dapat didefinisikan melalui ekspansi kofaktor atau secara ekuivalen melalui sifat multilinear, alternating, dan normalisasi $\\det I=1$."},
        {kind:"theorem",title:"Determinan Hasil Kali",statement:"Untuk matriks persegi $A$ dan $B$ berukuran sama berlaku $\\det(AB)=\\det(A)\\det(B)$.",proof:["Fiksasi $B$ dan pandang $A\\mapsto\\det(AB)$ sebagai fungsi baris-baris $A$.","Fungsi ini multilinear dan alternating terhadap baris $A$.","Pada $A=I$, nilainya $\\det(B)$.","Keunikan karakterisasi determinan memberi $\\det(AB)=\\det(A)\\det(B)$."]}
      ];
    }
    if(/vector space|ruang vektor|subspace|subruang|span|linear combination/.test(text)){
      return[
        {kind:"definition",title:"Subruang",statement:"Subhimpunan tak kosong $W\\subseteq V$ disebut subruang jika tertutup terhadap penjumlahan dan perkalian skalar."},
        {kind:"proposition",title:"Span adalah Subruang Terkecil",statement:"Untuk $S\\subseteq V$, $\\operatorname{span}(S)$ adalah subruang terkecil dari $V$ yang memuat $S$.",proof:["Kombinasi linear dari kombinasi linear anggota $S$ kembali merupakan kombinasi linear anggota $S$, sehingga span adalah subruang.","Jelas $S\\subseteq\\operatorname{span}(S)$.","Jika $W$ subruang yang memuat $S$, ketertutupan $W$ terhadap kombinasi linear memberi $\\operatorname{span}(S)\\subseteq W$."]}
      ];
    }
    if(/independ|basis|dimension|dimensi|coordinate|koordinat/.test(text)){
      return[
        {kind:"definition",title:"Basis",statement:"Basis ruang vektor $V$ adalah himpunan vektor yang bebas linear dan merentang $V$."},
        {kind:"theorem",title:"Keunikan Koordinat terhadap Basis",statement:"Jika $B=(v_1,\\ldots,v_n)$ basis $V$, setiap $v\\in V$ mempunyai representasi tunggal $v=c_1v_1+\\cdots+c_nv_n$.",proof:["Keberadaan representasi mengikuti sifat merentang.","Untuk keunikan, andaikan dua representasi dengan koefisien $c_i$ dan $d_i$.","Mengurangkan keduanya memberi $\\sum_i(c_i-d_i)v_i=0$.","Kebebasan linear basis memberi $c_i-d_i=0$ untuk seluruh $i$."]}
      ];
    }
    if(/rank|nullity|null space|column space|row space/.test(text)){
      return[
        {kind:"theorem",title:"Teorema Rank–Nullity",statement:"Jika $T:V\\to W$ linear dan $V$ berdimensi hingga, maka $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$.",proof:["Ambil basis $(v_1,\\ldots,v_k)$ untuk $\\ker T$ dan perluas menjadi basis $(v_1,\\ldots,v_k,v_{k+1},\\ldots,v_n)$ untuk $V$.","Tunjukkan bahwa $T(v_{k+1}),\\ldots,T(v_n)$ merentang $\\operatorname{im}T$.","Jika kombinasi linearnya nol, kombinasi vektor asal berada di kernel; kebebasan basis $V$ memaksa semua koefisien nol.","Jadi citra tersebut merupakan basis image dengan $n-k$ elemen. Dengan demikian $n=k+(n-k)$."]}
      ];
    }
    if(/eigen|diagonal/.test(text)){
      return[
        {kind:"definition",title:"Nilai Eigen dan Vektor Eigen",statement:"Skalar $\\lambda$ adalah nilai eigen $A$ jika terdapat vektor tak nol $v$ dengan $Av=\\lambda v$; vektor tersebut disebut vektor eigen."},
        {kind:"theorem",title:"Kriteria Diagonalisasi",statement:"Matriks $n\\times n$ dapat didiagonalkan jika dan hanya jika mempunyai $n$ vektor eigen bebas linear.",proof:["Jika $A=PDP^{-1}$, kolom-kolom $P$ bebas linear dan dari $AP=PD$ masing-masing kolom adalah vektor eigen.","Sebaliknya, jika terdapat basis vektor eigen $v_1,\\ldots,v_n$, bentuk $P=[v_1\\ \\cdots\\ v_n]$ dan $D=\\operatorname{diag}(\\lambda_1,\\ldots,\\lambda_n)$.","Relasi $AP=PD$ memberi $A=PDP^{-1}$."]}
      ];
    }
    if(/inner product|hasil kali dalam|orthogonal|ortogonal|gram|least squares/.test(text)){
      return[
        {kind:"definition",title:"Ortogonalitas",statement:"Dua vektor $u,v$ pada ruang hasil kali dalam disebut ortogonal jika $\\langle u,v\\rangle=0$."},
        {kind:"theorem",title:"Proyeksi Ortogonal pada Subruang",statement:"Jika $W$ subruang berdimensi hingga dengan basis ortonormal $q_1,\\ldots,q_k$, maka proyeksi $v$ pada $W$ adalah $\\operatorname{proj}_Wv=\\sum_{i=1}^k\\langle v,q_i\\rangle q_i$.",proof:["Definisikan $p$ oleh formula tersebut dan hitung $\\langle v-p,q_j\\rangle$.","Ortogonalitas basis memberi $\\langle p,q_j\\rangle=\\langle v,q_j\\rangle$.","Jadi $v-p$ ortogonal terhadap setiap basis $W$, dan karenanya terhadap seluruh $W$.","Dengan $p\\in W$, dekomposisi $v=p+(v-p)$ memenuhi karakterisasi proyeksi ortogonal."]}
      ];
    }
    if(/linear transformation|transformasi linear|isomorph|similar/.test(text)){
      return[
        {kind:"definition",title:"Transformasi Linear",statement:"Pemetaan $T:V\\to W$ linear jika $T(u+v)=T(u)+T(v)$ dan $T(cv)=cT(v)$ untuk seluruh $u,v\\in V$ dan skalar $c$."},
        {kind:"proposition",title:"Transformasi Linear Ditentukan oleh Basis",statement:"Jika nilai transformasi linear diketahui pada suatu basis domain, nilainya pada setiap vektor ditentukan secara tunggal.",proof:["Tuliskan vektor sebarang $v=\\sum_i c_iv_i$ terhadap basis.","Linearitas memberi $T(v)=\\sum_i c_iT(v_i)$.","Koordinat $c_i$ tunggal, sehingga nilai $T(v)$ juga tunggal."]}
      ];
    }
    if(/svd|singular|lu|power method|numerical/.test(text)){
      return[
        {kind:"theorem",title:"Singular Value Decomposition",statement:"Setiap matriks real $A\\in\\mathbb R^{m\\times n}$ dapat ditulis $A=U\\Sigma V^T$, dengan $U,V$ ortogonal dan $\\Sigma$ diagonal persegi panjang dengan entri diagonal tak negatif.",proof:["Matriks $A^TA$ simetris positif semidefinit, sehingga mempunyai basis ortonormal vektor eigen $v_i$ dengan nilai eigen $\\sigma_i^2\\ge0$.","Untuk $\\sigma_i>0$, definisikan $u_i=Av_i/\\sigma_i$ dan verifikasi bahwa vektor-vektor tersebut ortonormal.","Lengkapi $u_i$ menjadi basis ortonormal pada $\\mathbb R^m$.","Dengan $V$ dan $U$ yang dibentuk dari basis-basis tersebut, relasi $Av_i=\\sigma_i u_i$ memberi $A=U\\Sigma V^T$."]}
      ];
    }
  }

  if(subjectTitle==="Olimpiade Matematika SMA/MA"){
    if(/empat langkah|memecahkan masalah|kreatif|strategi/.test(text)){
      return[
        {kind:"proposition",title:"Siklus Pemecahan Masalah",statement:"Pemecahan masalah yang efektif dapat disusun melalui empat tahap: memahami masalah, merancang strategi, menjalankan strategi, dan meninjau kembali hasil."},
        {kind:"note",title:"Meninjau Kembali",statement:"Tahap terakhir bukan formalitas. Pemeriksaan kasus batas, substitusi balik, pencarian solusi alternatif, dan generalisasi sering menghasilkan ide baru yang berguna untuk soal berikutnya."}
      ];
    }
    if(/permut|kombin|pencacahan|aturan perkalian|aturan penjumlahan|objek.*kotak|pengulangan/.test(text)){
      return[
        {kind:"proposition",title:"Aturan Perkalian",statement:"Jika keputusan berurutan mempunyai $n_1,n_2,\\ldots,n_r$ pilihan pada masing-masing tahap, dengan banyak pilihan tahap tidak bergantung pada pilihan spesifik sebelumnya selain syarat yang sudah dihitung, banyak hasil adalah $n_1\\cdots n_r$.",proof:["Setiap pilihan tahap pertama dapat dipasangkan dengan setiap pilihan tahap kedua, dan seterusnya.","Penghitungan berulang dengan prinsip perkalian memberi produk banyak pilihan tiap tahap."]},
        {kind:"proposition",title:"Permutasi Multihimpunan",statement:"Jika terdapat $n$ objek dengan multiplicity $n_1,\\ldots,n_r$ dan $n_1+\\cdots+n_r=n$, banyak susunan berbeda adalah $\\frac{n!}{n_1!\\cdots n_r!}$.",proof:["Anggap sementara seluruh objek dibedakan sehingga terdapat $n!$ susunan.","Pertukaran objek sejenis tidak mengubah susunan yang terlihat.","Setiap susunan berbeda dihitung $n_1!\\cdots n_r!$ kali, sehingga pembagian memberi formula."]}
      ];
    }
    if(/pigeon|rumah merpati/.test(text)){
      return[
        {kind:"theorem",title:"Prinsip Rumah Merpati Umum",statement:"Jika $N$ objek ditempatkan ke $k$ kotak, sedikitnya satu kotak berisi sekurang-kurangnya $\\lceil N/k\\rceil$ objek.",proof:["Diandaikan semua kotak berisi paling banyak $\\lceil N/k\\rceil-1$ objek.","Jumlah total kemudian kurang dari $N$, bertentangan dengan jumlah objek yang diberikan."]}
      ];
    }
    if(/induksi|kontradiksi|pembuktian|bukti/.test(text)){
      return[
        {kind:"theorem",title:"Prinsip Induksi Matematika",statement:"Jika $P(n_0)$ benar dan untuk setiap $n\\ge n_0$, kebenaran $P(n)$ mengakibatkan $P(n+1)$, maka $P(n)$ benar untuk seluruh $n\\ge n_0$.",proof:["Andaikan terdapat bilangan $n\\ge n_0$ terkecil dengan $P(n)$ salah.","Karena basis benar, $n>n_0$.","Minimalitas $n$ memberi $P(n-1)$ benar.","Langkah induksi mengakibatkan $P(n)$ benar, kontradiksi."]}
      ];
    }
    if(/barisan|deret|rekuren|recurrence|fibonacci/.test(text)){
      return[
        {kind:"definition",title:"Relasi Rekurensi",statement:"Relasi rekurensi mendefinisikan suku suatu barisan menggunakan satu atau beberapa suku sebelumnya bersama kondisi awal."},
        {kind:"proposition",title:"Identitas Dasar Fibonacci",statement:"Untuk $F_0=0$, $F_1=1$, dan $F_{n+1}=F_n+F_{n-1}$, berlaku $\\sum_{k=1}^{n}F_k=F_{n+2}-1$.",proof:["Basis $n=1$ memberi $F_1=1=F_3-1$.","Diandaikan identitas benar untuk $n$.","Tambahkan $F_{n+1}$ pada kedua ruas untuk memperoleh $F_{n+2}-1+F_{n+1}=F_{n+3}-1$.","Dengan demikian identitas berlaku untuk $n+1$."]}
      ];
    }
    if(/am-gm|cauchy|inequal|pertidaksamaan|jensen/.test(text)){
      return[
        {kind:"theorem",title:"Ketaksamaan AM–GM",statement:"Untuk bilangan real positif $a_1,\\ldots,a_n$, berlaku $\\frac{a_1+\\cdots+a_n}{n}\\ge(a_1\\cdots a_n)^{1/n}$, dengan kesamaan tepat ketika semua $a_i$ sama."},
        {kind:"theorem",title:"Ketaksamaan Cauchy–Schwarz",statement:"Untuk bilangan real $a_i,b_i$, berlaku $(\\sum_i a_ib_i)^2\\le(\\sum_i a_i^2)(\\sum_i b_i^2)$.",proof:["Untuk setiap real $t$, kuadrat norma $\\sum_i(a_it-b_i)^2$ tidak negatif.","Ekspansi memberi kuadrat dalam $t$ dengan diskriminan tidak positif.","Syarat diskriminan tersebut tepat menghasilkan ketaksamaan Cauchy–Schwarz."]}
      ];
    }
  }

  return[];
}

function textbookExamples(subjectTitle:string,chapterTitle:string,sectionTitle:string,keyIdeas:string[]):BookExample[]{
  const text=(chapterTitle+" "+sectionTitle+" "+keyIdeas.join(" ")).toLowerCase();

  if(subjectTitle==="Kombinatorika"){
    if(/pigeon|rumah merpati/.test(text))return[
      {title:"Sisa Pembagian yang Sama",problem:"Dipilih 11 bilangan bulat. Buktikan ada dua bilangan yang mempunyai sisa sama ketika dibagi 10.",solution:["Ada 10 kelas sisa modulo 10, yaitu $0,1,\\ldots,9$.","Kesebelas bilangan menjadi 11 objek yang ditempatkan ke 10 kelas sisa.","Prinsip pigeonhole menjamin sedikitnya satu kelas memuat minimal dua bilangan."],conclusion:"Dua bilangan tersebut kongruen modulo 10."}
    ];
    if(/inclusion|eksklusi/.test(text))return[
      {title:"Menghitung Kelipatan",problem:"Berapa banyak bilangan dari 1 sampai 100 yang habis dibagi 2 atau 5?",solution:["Ada $\\lfloor100/2\\rfloor=50$ kelipatan 2.","Ada $\\lfloor100/5\\rfloor=20$ kelipatan 5.","Kelipatan keduanya adalah kelipatan 10 sebanyak 10.","Inklusi–eksklusi memberi $50+20-10=60$."],conclusion:"Terdapat 60 bilangan."}
    ];
    if(/burnside|polya|pólya/.test(text))return[
      {title:"Pewarnaan Kalung Sederhana",problem:"Gunakan Burnside untuk menghitung pewarnaan dua warna pada tiga posisi melingkar hingga rotasi.",solution:["Aksi identitas menetapkan semua $2^3=8$ pewarnaan.","Masing-masing dari dua rotasi nontrivial menetapkan hanya dua pewarnaan konstan.","Rata-rata banyak titik tetap adalah $(8+2+2)/3=4$."],conclusion:"Ada 4 kelas pewarnaan hingga rotasi."}
    ];
  }

  if(subjectTitle==="Aljabar Linear"){
    if(/basis|dimension|dimensi|independ/.test(text))return[
      {title:"Basis Ruang Polinom",problem:"Tunjukkan bahwa $\\{1,x,x^2\\}$ merupakan basis $P_2$.",solution:["Setiap $p(x)=a+bx+cx^2$ merupakan kombinasi linear dari ketiga polinom tersebut.","Jika $\\alpha+\\beta x+\\gamma x^2=0$ sebagai polinom, kesamaan koefisien memberi $\\alpha=\\beta=\\gamma=0$.","Himpunan tersebut merentang dan bebas linear."],conclusion:"$\\{1,x,x^2\\}$ adalah basis $P_2$ dan $\\dim P_2=3$."}
    ];
    if(/eigen|diagonal/.test(text))return[
      {title:"Nilai Eigen Matriks Diagonal",problem:"Tentukan nilai eigen $A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}$.",solution:["Persamaan karakteristik adalah $(2-\\lambda)(5-\\lambda)=0$.","Diperoleh $\\lambda=2$ dan $\\lambda=5$.","Vektor basis standar menjadi vektor eigen yang bersesuaian."],conclusion:"Matriks sudah diagonal dalam basis standar."}
    ];
  }

  if(subjectTitle==="Olimpiade Matematika SMA/MA"){
    if(/pigeon|rumah merpati/.test(text))return[
      {title:"Dua Bilangan Berdekatan",problem:"Pilih 6 bilangan berbeda dari $\\{1,2,\\ldots,10\\}$. Buktikan ada dua yang selisihnya 1.",solution:["Kelompokkan bilangan menjadi lima pasangan $\\{1,2\\},\\{3,4\\},\\ldots,\\{9,10\\}$.","Enam pilihan ditempatkan ke lima pasangan.","Prinsip rumah merpati memberi satu pasangan yang kedua elemennya terpilih."],conclusion:"Dua bilangan terpilih tersebut berbeda 1."}
    ];
    if(/am-gm|pertidaksamaan/.test(text))return[
      {title:"AM–GM Dua Variabel",problem:"Buktikan untuk $x>0$ bahwa $x+1/x\\ge2$.",solution:["Terapkan AM–GM pada $x$ dan $1/x$.","Diperoleh $(x+1/x)/2\\ge\\sqrt{x(1/x)}=1$.","Kalikan kedua ruas dengan 2."],conclusion:"$x+1/x\\ge2$, dengan kesamaan saat $x=1$."}
    ];
  }

  return[];
}

function genericContent(subjectTitle:string,chapterTitle:string,sectionTitle:string,summary:string,keyIdeas:string[]):BookLessonContent{
  const ideas=keyIdeas.join(", ");
  const first=keyIdeas[0] ?? sectionTitle;
  const second=keyIdeas[1] ?? "konsep terkait";
  const third=keyIdeas[2] ?? "struktur pendukung";
  const notation =
    subjectTitle==="Aljabar Linear" ? [
      {symbol:"$V,W$",meaning:"ruang vektor"},
      {symbol:"$\\operatorname{span}(S)$",meaning:"span himpunan vektor $S$"},
      {symbol:"$\\ker T$",meaning:"kernel transformasi linear $T$"},
      {symbol:"$\\operatorname{im}T$",meaning:"image transformasi linear $T$"},
      {symbol:"$\\lambda$",meaning:"skalar atau nilai eigen sesuai konteks"},
    ] : subjectTitle==="Struktur Aljabar" ? [
      {symbol:"$(G,*)$",meaning:"grup dengan operasi biner $*$"},
      {symbol:"$H\\le G$",meaning:"$H$ subgrup dari $G$"},
      {symbol:"$G/N$",meaning:"grup faktor oleh subgrup normal $N$"},
      {symbol:"$R/I$",meaning:"ring faktor oleh ideal $I$"},
      {symbol:"$\\varphi$",meaning:"homomorfisma sesuai konteks"},
    ] : subjectTitle==="Kombinatorika" ? [
      {symbol:"$\\binom nk$",meaning:"banyak cara memilih $k$ objek dari $n$ objek"},
      {symbol:"$|A|$",meaning:"kardinalitas himpunan $A$"},
      {symbol:"G=(V,E)",meaning:"graf dengan simpul $V$ dan sisi $E$"},
      {symbol:"$a_n$",meaning:"suku ke-$n$ suatu barisan"},
      {symbol:"$[x^n]F(x)$",meaning:"koefisien $x^n$ pada fungsi pembangkit $F$"},
    ] : [
      {symbol:"$n,k\\in\\mathbb Z$",meaning:"parameter integer yang digunakan pada konteks diskret"},
      {symbol:"$S$",meaning:"himpunan atau ruang objek yang sedang dipelajari"},
      {symbol:"$|S|$",meaning:"banyak elemen pada $S$"},
      {symbol:"$P$",meaning:"pernyataan, pola, atau struktur sesuai submateri"},
    ];

  return {
    intro:[
      summary,
      "Submateri ini merupakan bagian dari jalur belajar "+subjectTitle+". Alurnya dimulai dari motivasi dan contoh kecil, dilanjutkan dengan bahasa formal, lalu digunakan pada pembuktian dan penyelesaian masalah.",
      "Konsep inti yang membentuk peta pembahasan adalah "+ideas+". Setiap konsep dibedakan berdasarkan definisi, syarat, contoh, noncontoh, dan hubungan logisnya dengan konsep lain.",
      "Pembahasan tidak berhenti pada pengenalan istilah. Setiap halaman diarahkan untuk menjawab mengapa konsep diperlukan, bagaimana objek direpresentasikan, hasil apa yang dapat dibuktikan, dan kapan teknik tertentu lebih efisien daripada teknik lain.",
      "Visualisasi digunakan untuk membangun intuisi, sedangkan validitas matematis tetap ditentukan oleh definisi dan pembuktian. Setelah memahami bagian formal, contoh terbahas dan latihan digunakan untuk menguji kemampuan menerapkan konsep pada situasi baru."
    ],
    notation,
    formal:(()=>{
      const specific=textbookFormal(subjectTitle,chapterTitle,sectionTitle,keyIdeas);
      return specific.length?specific:[
        {
          kind:"note",
          title:"Kerangka Konseptual",
          statement:"Istilah utama yang perlu dibedakan secara cermat adalah "+ideas+". Untuk setiap istilah, periksa objek yang dibicarakan, syarat yang wajib dipenuhi, dan konsekuensi yang benar-benar mengikuti definisi."
        },
        {
          kind:"note",
          title:"Arah Penalaran",
          statement:"Hubungan antara "+first+", "+second+", dan "+third+" tidak boleh diasumsikan sebagai ekuivalensi. Setiap arah implikasi harus didukung definisi, teorema, atau konstruksi yang sah."
        },
        {
          kind:"note",
          title:"Strategi Pembuktian",
          statement:"Pembuktian pada submateri ini dapat melibatkan argumen langsung, kontraposisi, kontradiksi, induksi, konstruksi, double counting, invariant, atau reduksi ke hasil sebelumnya sesuai sifat objek."
        }
      ];
    })(),
    examples:[
      ...textbookExamples(subjectTitle,chapterTitle,sectionTitle,keyIdeas),
      {
        title:"Membaca Struktur Konsep",
        problem:"Identifikasi peran "+first+" dan "+second+" pada satu situasi sederhana yang relevan dengan "+sectionTitle+". Jelaskan objek yang diketahui, kondisi yang harus diperiksa, dan kesimpulan yang ingin diperoleh.",
        solution:[
          "Ditentukan terlebih dahulu objek matematika dan semesta tempat objek tersebut berada.",
          "Diperiksa definisi "+first+" serta "+second+" yang relevan.",
          "Dihubungkan syarat yang diketahui dengan definisi atau hasil formal yang tersedia.",
          "Dituliskan kesimpulan beserta alasan matematisnya, bukan hanya hasil akhir."
        ],
        conclusion:"Struktur argumen dimulai dari definisi dan hipotesis."
      },
      {
        title:"Contoh dan Noncontoh",
        problem:"Berikan satu contoh yang memenuhi konsep "+first+" dan satu noncontoh yang gagal memenuhi sedikitnya satu syarat penting.",
        solution:[
          "Dipilih objek paling sederhana yang memenuhi seluruh syarat definisi.",
          "Untuk noncontoh, diubah tepat satu syarat agar alasan kegagalannya terlihat jelas.",
          "Dibandingkan kedua objek untuk menentukan syarat yang benar-benar esensial."
        ],
        conclusion:"Contoh dan noncontoh memisahkan syarat inti dari ciri yang hanya kebetulan."
      },
      {
        title:"Dua Representasi",
        problem:"Representasikan konsep "+sectionTitle+" dengan dua cara berbeda, misalnya simbolik dan visual, atau aljabar dan kombinatorial.",
        solution:[
          "Dipilih representasi pertama yang paling langsung dari definisi.",
          "Dibangun representasi kedua yang menonjolkan struktur berbeda.",
          "Dijelaskan informasi apa yang mudah terlihat pada masing-masing representasi.",
          "Diperiksa bahwa kedua representasi menggambarkan objek yang sama."
        ],
        conclusion:"Pergantian representasi sering membuka strategi yang lebih singkat."
      },
      {
        title:"Menyusun Argumen",
        problem:"Susun garis besar pembuktian yang menggunakan sedikitnya dua konsep dari "+ideas+".",
        solution:[
          "Tujuan akhir ditulis dalam bentuk matematis yang jelas.",
          "Dipilih dua konsep yang paling dekat dengan hipotesis.",
          "Dibangun rantai implikasi tanpa melompati syarat.",
          "Kesimpulan akhir dinyatakan kembali sesuai pernyataan yang harus dibuktikan."
        ],
        conclusion:"Kejelasan hubungan antar-konsep lebih penting daripada banyaknya langkah."
      }
    ],
    exercises:[
      {
        prompt:"Tuliskan kembali definisi atau karakterisasi utama yang berkaitan dengan "+first+" menggunakan bahasamu sendiri, lalu nyatakan semua syaratnya secara eksplisit.",
        hint:"Pisahkan objek, hipotesis, dan kesimpulan.",
        answer:"Jawaban yang baik memuat seluruh syarat definisi tanpa menambah asumsi yang tidak diperlukan."
      },
      {
        prompt:"Jelaskan hubungan antara "+first+" dan "+second+". Uji kedua arah implikasi secara terpisah.",
        hint:"Bedakan implikasi, ekuivalensi, dan keterkaitan biasa.",
        answer:"Hubungan harus dinilai dari definisi atau teorema yang sah; jangan menyimpulkan dua arah tanpa dasar."
      },
      {
        prompt:"Bangun satu contoh baru yang memenuhi konsep-konsep utama pada submateri ini dan verifikasi setiap syarat secara berurutan.",
        hint:"Mulai dari objek berukuran kecil atau struktur paling sederhana.",
        answer:"Verifikasi harus merujuk langsung pada syarat definisi."
      },
      {
        prompt:"Bangun satu noncontoh dan tunjukkan tepat di bagian mana definisi gagal.",
        hint:"Ubah satu syarat dari contoh yang valid.",
        answer:"Noncontoh yang baik memperlihatkan mengapa sebuah hipotesis memang diperlukan."
      },
      {
        prompt:"Tuliskan satu kesalahan penalaran yang mungkin terjadi ketika menggunakan "+sectionTitle+" dan jelaskan cara memperbaikinya.",
        hint:"Periksa syarat yang sering diabaikan.",
        answer:"Perbaikan harus menunjukkan syarat yang hilang dan bagaimana syarat tersebut digunakan."
      },
      {
        prompt:"Hubungkan "+sectionTitle+" dengan submateri sebelumnya dan berikutnya dalam satu diagram konsep.",
        hint:"Gunakan "+first+", "+second+", dan "+third+" sebagai simpul awal.",
        answer:"Diagram harus menunjukkan arah ketergantungan konsep, bukan hanya daftar istilah."
      },
      {
        prompt:"Selesaikan satu kasus kecil menggunakan dua metode berbeda dan bandingkan efisiensinya.",
        hint:"Coba pendekatan definisional lalu pendekatan teorema atau representasi alternatif.",
        answer:"Kedua metode harus memberi hasil konsisten dan perbandingan harus menyebut kelebihan masing-masing."
      },
      {
        prompt:"Rancang satu soal menantang yang menggabungkan sedikitnya dua ide dari submateri ini, lalu tuliskan garis besar solusinya.",
        hint:"Gunakan dua ide dari: "+ideas+".",
        answer:"Soal dan garis besar solusi harus dapat diselesaikan dengan materi pada halaman tanpa asumsi tambahan yang tidak dijelaskan."
      }
    ],
    mistakes:[
      "Menghafal nama hasil tanpa memeriksa seluruh hipotesis yang diperlukan.",
      "Menganggap contoh khusus atau gambar sebagai bukti pernyataan umum.",
      "Menggunakan implikasi secara terbalik tanpa teorema yang menjamin ekuivalensi.",
      "Melompati verifikasi definisi ketika membuktikan suatu objek mempunyai sifat tertentu.",
      "Mencampur notasi atau semesta objek sehingga operasi yang digunakan sebenarnya tidak terdefinisi.",
      "Tidak melakukan pemeriksaan akhir melalui contoh, substitusi balik, atau representasi alternatif."
    ],
    connections:[
      "Konsep pada bagian ini digunakan kembali pada submateri berikutnya dalam jalur belajar DMath Learning.",
      "Hubungkan setiap definisi dengan contoh konkret, noncontoh, dan representasi visual.",
      "Bandingkan pendekatan konstruktif, aljabar, kombinatorial, geometris, atau algoritmik ketika lebih dari satu pendekatan tersedia.",
      "Hasil formal pada halaman ini dapat berfungsi sebagai lemma untuk soal atau teorema yang lebih lanjut.",
      "Latihan sintesis dirancang agar pembaca menggabungkan sedikitnya dua konsep, bukan hanya menjalankan prosedur rutin."
    ]
  };
}

const generated:Record<string,BookLessonContent>={};
for(const subject of additionalBookSubjects){
  for(const chapter of subject.chapters){
    for(const section of chapter.sections){
      generated[section.slug]=genericContent(subject.title,chapter.title,section.title,section.summary,section.keyIdeas);
    }
  }
}

generated["komb-perfect-covers"]={
  intro:[
    "Masalah penutupan papan dengan domino merupakan contoh awal bagaimana kombinatorika mempelajari keberadaan suatu konfigurasi, bukan sekadar menghitung banyaknya konfigurasi.",
    "Pada papan $8\\times8$, sebuah domino menutup dua petak yang bertetangga. Pewarnaan hitam–putih memberi invariant sederhana: setiap domino selalu menutup tepat satu petak hitam dan satu petak putih.",
    "Gagasan pewarnaan dapat diperluas dari domino menjadi $b$-omino dengan $b$ warna. Teknik ini memperlihatkan kekuatan invariant dalam membuktikan bahwa suatu konfigurasi mustahil ada."
  ],
  notation:[
    {symbol:"$m\\times n$",meaning:"papan dengan $m$ baris dan $n$ kolom"},
    {symbol:"$b$-omino",meaning:"ubin yang menutup $b$ petak berurutan pada satu baris atau satu kolom"}
  ],
  formal:[
    {
      kind:"definition",
      title:"Perfect Cover",
      statement:"Suatu perfect cover dari papan adalah susunan ubin tanpa tumpang tindih yang menutup setiap petak papan tepat satu kali."
    },
    {
      kind:"proposition",
      title:"Invariant Warna untuk Domino",
      statement:"Jika papan berpola hitam–putih mempunyai perfect cover oleh domino, banyak petak hitam dan putih yang tersisa harus sama.",
      proof:[
        "Diambil sembarang domino pada penutupan. Karena dua petak yang bertetangga mempunyai warna berbeda, domino tersebut menutup satu petak hitam dan satu petak putih.",
        "Setiap domino memberikan kontribusi satu petak untuk masing-masing warna.",
        "Akibatnya, setelah seluruh papan tertutup, jumlah petak hitam yang tertutup sama dengan jumlah petak putih yang tertutup.",
        "Dengan demikian, kesamaan banyak petak kedua warna merupakan syarat perlu untuk adanya perfect cover."
      ]
    },
    {
      kind:"theorem",
      title:"Kriteria Penutupan oleh $b$-omino",
      statement:"Papan $m\\times n$ mempunyai perfect cover oleh $b$-omino jika dan hanya jika $b$ membagi $m$ atau $b$ membagi $n$.",
      proof:[
        "Jika $b\\mid m$, setiap kolom dapat dipartisi menjadi blok vertikal sepanjang $b$. Jika $b\\mid n$, argumen yang sama berlaku secara horizontal.",
        "Untuk arah sebaliknya, andaikan perfect cover ada. Papan diwarnai periodik dengan $b$ warna sehingga setiap $b$-omino menutup satu petak dari setiap warna.",
        "Dituliskan $m=pb+r$ dan $n=qb+s$ dengan $0\\le r,s<b$. Dengan menukar peran $m,n$ jika perlu, diandaikan $r\\le s$.",
        "Bagian berukuran kelipatan $b$ menyumbang setiap warna dalam jumlah sama. Oleh karena itu bagian sisa $r\\times s$ juga harus memiliki jumlah yang sama untuk setiap warna.",
        "Pola pewarnaan memberi tepat $r$ petak untuk setiap warna pada bagian sisa. Banyak petaknya sekaligus adalah $rs$ dan $rb$, sehingga $rs=rb$.",
        "Jika $r\\ne0$, diperoleh $s=b$, bertentangan dengan $s<b$. Jadi $r=0$, sehingga $b\\mid m$."
      ]
    }
  ],
  examples:[
    {
      title:"Papan Catur dengan Dua Sudut Dihapus",
      problem:"Dari papan $8\\times8$ dihapus dua petak sudut yang berseberangan. Dapatkah 31 domino menutup papan yang tersisa?",
      solution:[
        "Dua sudut berseberangan pada papan catur mempunyai warna yang sama.",
        "Setelah keduanya dihapus, tersisa 30 petak dari satu warna dan 32 dari warna lainnya.",
        "Setiap domino selalu menutup satu petak hitam dan satu petak putih.",
        "Sebanyak 31 domino akan menutup 31 petak hitam dan 31 petak putih, bertentangan dengan komposisi warna papan yang tersisa."
      ],
      conclusion:"Perfect cover tidak ada."
    },
    {
      title:"Papan $10\\times15$ dengan 5-omino",
      problem:"Tentukan apakah papan $10\\times15$ dapat ditutup sempurna oleh 5-omino.",
      solution:[
        "Karena $5\\mid10$ dan juga $5\\mid15$, syarat kriteria terpenuhi.",
        "Sebagai konstruksi, papan dapat dipartisi menjadi blok horizontal panjang 5 atau blok vertikal panjang 5."
      ],
      conclusion:"Perfect cover ada."
    }
  ],
  exercises:[
    {prompt:"Dapatkah papan $7\\times12$ ditutup sempurna oleh 3-omino?",hint:"Periksa apakah $3$ membagi salah satu dimensi.",answer:"Ya, karena $3\\mid12$."},
    {prompt:"Dapatkah papan $10\\times14$ ditutup sempurna oleh 6-omino?",hint:"Gunakan kriteria pembagian.",answer:"Tidak, karena $6$ tidak membagi $10$ maupun $14$."},
    {prompt:"Jelaskan mengapa keseimbangan banyak petak hitam dan putih hanyalah syarat perlu, bukan selalu syarat cukup, untuk papan yang telah dipangkas.",hint:"Cari konfigurasi dengan jumlah warna seimbang tetapi geometri menghalangi penutupan.",answer:"Kesamaan jumlah warna hanya menghilangkan satu obstruction. Bentuk dan keterhubungan papan masih dapat mencegah semua petak dipasangkan oleh domino."}
  ],
  mistakes:[
    "Menganggap jumlah petak genap otomatis menjamin adanya penutupan domino.",
    "Menggunakan pewarnaan tanpa memeriksa berapa warna yang ditutup setiap ubin.",
    "Menyimpulkan syarat perlu sebagai syarat cukup tanpa konstruksi atau teorema tambahan."
  ],
  connections:[
    "Invariant pewarnaan merupakan teknik penting dalam problem solving olimpiade.",
    "Masalah tiling berhubungan dengan matching pada graf bipartit.",
    "Gagasan keberadaan konfigurasi muncul kembali pada Hall's theorem dan desain kombinatorial."
  ]
};

generated["la-linear-systems"]={
  intro:[
    "Sistem persamaan linear menghubungkan persamaan, geometri, dan matriks. Persamaan linear dalam $n$ peubah berbentuk $a_1x_1+\\cdots+a_nx_n=b$, dengan koefisien peubah tidak semuanya nol.",
    "Solusi suatu sistem adalah tuple yang membuat setiap persamaan benar secara simultan. Secara geometris, solusi sistem dua peubah merupakan titik perpotongan garis, sedangkan pada tiga peubah berkaitan dengan perpotongan bidang.",
    "Klasifikasi dasar sistem linear adalah konsisten atau tidak konsisten. Sistem konsisten dapat mempunyai tepat satu solusi atau tak hingga banyak solusi."
  ],
  notation:[
    {symbol:"$A\\mathbf{x}=\\mathbf{b}$",meaning:"bentuk matriks suatu sistem linear"},
    {symbol:"$[A\\mid\\mathbf b]$",meaning:"matriks augmented sistem"}
  ],
  formal:[
    {
      kind:"definition",
      title:"Persamaan Linear",
      statement:"Persamaan linear dalam peubah $x_1,\\ldots,x_n$ adalah persamaan $a_1x_1+\\cdots+a_nx_n=b$, dengan $a_1,\\ldots,a_n,b$ konstanta dan koefisien $a_i$ tidak semuanya nol."
    },
    {
      kind:"definition",
      title:"Solusi dan Konsistensi",
      statement:"Solusi sistem linear adalah tuple yang memenuhi semua persamaan. Sistem disebut konsisten jika memiliki sedikitnya satu solusi dan tidak konsisten jika tidak memiliki solusi."
    },
    {
      kind:"theorem",
      title:"Banyak Solusi Sistem Linear",
      statement:"Sistem persamaan linear atas $\\mathbb R$ mempunyai nol, tepat satu, atau tak hingga banyak solusi.",
      proof:[
        "Jika sistem tidak konsisten, banyak solusinya nol.",
        "Andaikan sistem konsisten dan mempunyai dua solusi berbeda $\\mathbf x_0$ dan $\\mathbf x_1$.",
        "Untuk setiap $t\\in\\mathbb R$, linearitas memberi $A((1-t)\\mathbf x_0+t\\mathbf x_1)=(1-t)A\\mathbf x_0+tA\\mathbf x_1=\\mathbf b$.",
        "Karena $\\mathbf x_0\\ne\\mathbf x_1$, nilai $t$ yang berbeda menghasilkan tak hingga banyak solusi.",
        "Dengan demikian, sistem konsisten yang tidak memiliki solusi tunggal mempunyai tak hingga banyak solusi."
      ]
    }
  ],
  examples:[
    {
      title:"Sistem dengan Solusi Tunggal",
      problem:"Selesaikan $x-y=1$ dan $2x+y=6$.",
      solution:[
        "Dari persamaan pertama diperoleh $x=1+y$.",
        "Substitusi ke persamaan kedua memberi $2(1+y)+y=6$.",
        "Diperoleh $3y=4$, sehingga $y=4/3$ dan $x=7/3$."
      ],
      conclusion:"Sistem mempunyai tepat satu solusi, yaitu $(7/3,4/3)$."
    },
    {
      title:"Sistem Tidak Konsisten",
      problem:"Tentukan banyak solusi dari $x+y=4$ dan $3x+3y=6$.",
      solution:[
        "Tiga kali persamaan pertama memberi $3x+3y=12$.",
        "Persamaan kedua menuntut $3x+3y=6$.",
        "Kedua syarat bertentangan."
      ],
      conclusion:"Sistem tidak mempunyai solusi."
    }
  ],
  exercises:[
    {prompt:"Klasifikasikan sistem $x+y=2$ dan $2x+2y=4$.",hint:"Periksa apakah kedua persamaan ekuivalen.",answer:"Persamaan kedua adalah dua kali persamaan pertama, sehingga terdapat tak hingga banyak solusi."},
    {prompt:"Tuliskan matriks augmented dari $2x-y=3$ dan $x+4y=5$.",hint:"Koefisien peubah berada sebelum garis pemisah.",answer:"$\\left[\\begin{array}{cc|c}2&-1&3\\\\1&4&5\\end{array}\\right]$."},
    {prompt:"Buktikan bahwa jika sistem homogen mempunyai solusi nonnol, sistem tersebut mempunyai tak hingga banyak solusi.",hint:"Kalikan solusi nonnol dengan skalar.",answer:"Jika $A\\mathbf x=0$ dan $\\mathbf x\\ne0$, maka $A(t\\mathbf x)=tA\\mathbf x=0$ untuk setiap $t\\in\\mathbb R$; pilihan $t$ yang berbeda memberi tak hingga banyak solusi."}
  ],
  mistakes:[
    "Menganggap setiap sistem persegi mempunyai solusi tunggal.",
    "Melakukan operasi pada satu ruas persamaan tanpa operasi ekuivalen pada ruas lainnya.",
    "Menyamakan matriks koefisien dengan matriks augmented."
  ],
  connections:[
    "Eliminasi Gauss mengubah sistem menjadi bentuk yang lebih mudah dibaca tanpa mengubah himpunan solusi.",
    "Konsep konsistensi terhubung dengan rank, ruang kolom, dan invertibilitas.",
    "Interpretasi geometris berkembang menjadi subruang dan transformasi linear."
  ]
};

generated["alg-sets"]={
  intro:[
    "Struktur aljabar dibangun di atas bahasa himpunan, relasi, dan fungsi. Karena itu operasi himpunan dan produk Kartesius perlu dipahami secara presisi sebelum masuk ke grup, ring, dan field.",
    "Himpunan dapat berupa himpunan bilangan maupun objek lain. Hubungan inklusi, irisan, gabungan, selisih, dan produk Kartesius akan digunakan berulang kali untuk membentuk struktur baru.",
    "Produk Kartesius sangat penting karena relasi didefinisikan sebagai subset dari suatu produk Kartesius, sedangkan operasi biner pada struktur aljabar adalah fungsi dari $S\\times S$ ke $S$."
  ],
  notation:[
    {symbol:"$S\\subseteq T$",meaning:"$S$ merupakan subset dari $T$"},
    {symbol:"$S\\cap T$",meaning:"irisan $S$ dan $T$"},
    {symbol:"$S\\cup T$",meaning:"gabungan $S$ dan $T$"},
    {symbol:"$S\\setminus T$",meaning:"selisih himpunan"},
    {symbol:"$S\\times T$",meaning:"produk Kartesius"}
  ],
  formal:[
    {
      kind:"definition",
      title:"Subset",
      statement:"Untuk himpunan $S$ dan $T$, ditulis $S\\subseteq T$ jika setiap elemen $S$ juga merupakan elemen $T$."
    },
    {
      kind:"definition",
      title:"Irisan, Gabungan, dan Selisih",
      statement:"$S\\cap T$ berisi elemen yang berada di $S$ dan $T$; $S\\cup T$ berisi elemen yang berada di sedikitnya salah satu; $S\\setminus T$ berisi elemen $S$ yang tidak berada di $T$."
    },
    {
      kind:"definition",
      title:"Produk Kartesius",
      statement:"Produk Kartesius $S\\times T$ adalah himpunan semua pasangan terurut $(s,t)$ dengan $s\\in S$ dan $t\\in T$."
    },
    {
      kind:"proposition",
      title:"Distributivitas Gabungan terhadap Irisan",
      statement:"Untuk sebarang himpunan $R,S,T$, berlaku $R\\cup(S\\cap T)=(R\\cup S)\\cap(R\\cup T)$.",
      proof:[
        "Diambil sebarang $x\\in R\\cup(S\\cap T)$. Jika $x\\in R$, maka $x$ berada di kedua himpunan $R\\cup S$ dan $R\\cup T$. Jika $x\\in S\\cap T$, hasil yang sama juga berlaku.",
        "Akibatnya, $R\\cup(S\\cap T)\\subseteq(R\\cup S)\\cap(R\\cup T)$.",
        "Sebaliknya, diambil $x\\in(R\\cup S)\\cap(R\\cup T)$. Jika $x\\in R$, selesai. Jika $x\\notin R$, keanggotaan pada kedua gabungan memaksa $x\\in S$ dan $x\\in T$.",
        "Dengan demikian, $x\\in R\\cup(S\\cap T)$ dan kedua himpunan sama."
      ]
    }
  ],
  examples:[
    {
      title:"Operasi Dua Himpunan",
      problem:"Untuk $S=\\{1,2,3,4,5\\}$ dan $T=\\{2,4,6,8,10\\}$, tentukan $S\\cap T$, $S\\cup T$, dan $S\\setminus T$.",
      solution:[
        "Elemen yang muncul pada keduanya adalah 2 dan 4.",
        "Gabungan memuat semua elemen yang muncul sedikitnya sekali.",
        "Elemen $S$ yang tidak berada di $T$ adalah 1, 3, dan 5."
      ],
      conclusion:"$S\\cap T=\\{2,4\\}$, $S\\cup T=\\{1,2,3,4,5,6,8,10\\}$, dan $S\\setminus T=\\{1,3,5\\}$."
    },
    {
      title:"Produk Kartesius",
      problem:"Jika $S=\\{1,2,3\\}$ dan $T=\\{2,3\\}$, tuliskan $S\\times T$.",
      solution:[
        "Setiap elemen $S$ dipasangkan dengan setiap elemen $T$.",
        "Urutan pasangan diperhatikan; koordinat pertama berasal dari $S$ dan koordinat kedua dari $T$."
      ],
      conclusion:"$S\\times T=\\{(1,2),(1,3),(2,2),(2,3),(3,2),(3,3)\\}$."
    }
  ],
  exercises:[
    {prompt:"Jika $S=\\{1,2,3\\}$ dan $T=\\{3,4\\}$, tentukan $S\\cap T$, $S\\cup T$, $S\\setminus T$, dan $T\\setminus S$.",hint:"Periksa keanggotaan setiap elemen.",answer:"$S\\cap T=\\{3\\}$, $S\\cup T=\\{1,2,3,4\\}$, $S\\setminus T=\\{1,2\\}$, $T\\setminus S=\\{4\\}$."},
    {prompt:"Buktikan jika $R\\subseteq S$, maka $R\\cup T\\subseteq S\\cup T$.",hint:"Ambil sebarang elemen dari $R\\cup T$ dan pisahkan dua kasus.",answer:"Jika elemen berada di $R$, ia berada di $S$; jika berada di $T$, ia langsung berada di $S\\cup T$. Jadi inklusi berlaku."},
    {prompt:"Berapa banyak elemen $S\\times T$ jika $|S|=m$ dan $|T|=n$?",hint:"Untuk setiap elemen $S$ ada $n$ pilihan koordinat kedua.",answer:"$|S\\times T|=mn$."}
  ],
  mistakes:[
    "Menganggap $S\\in T$ sama dengan $S\\subseteq T$.",
    "Mengabaikan urutan pada pasangan terurut dalam produk Kartesius.",
    "Menganggap $S\\setminus T$ sama dengan $T\\setminus S$."
  ],
  connections:[
    "Relasi dari $S$ ke $T$ adalah subset dari $S\\times T$.",
    "Fungsi merupakan relasi dengan syarat keunikan pasangan pada setiap elemen domain.",
    "Koset, kelas ekuivalensi, quotient group, dan quotient ring semuanya menggunakan bahasa himpunan."
  ]
};

export const additionalBookContent=generated;
