import type { BookLessonContent } from "@/data/book-content-types";

/** Independensi kejadian dan peubah diskret, dengan bukti dua arah dan kontramodel XOR. */
export const statisticalIndependenceContent:BookLessonContent={
  "intro": [
    "Pada satu lemparan koin, peluang kepala dapat dihitung tanpa membahas kejadian lain. Pada dua atau tiga percobaan, pertanyaan yang lebih penting adalah apakah informasi tentang suatu hasil mengubah peluang hasil lainnya. Independensi merupakan persamaan yang harus diperiksa, bukan sinonim dari kejadian saling lepas. Dua kejadian yang saling lepas dan sama-sama berpeluang positif justru tidak independen karena peluang irisannya nol.",
    "Perbedaan paling penting muncul ketika terdapat tiga kejadian: semua pasangan dapat independen walaupun ketiganya tidak independen bersama. Kita akan menggunakan dua bit adil dan operasi XOR sebagai contoh tandingan yang dapat diperiksa melalui empat titik sampel. Setelah itu, konsep diperluas ke peubah acak diskret melalui faktorisasi massa peluang, hubungan dengan kovarians, serta distribusi binomial.",
    "Seluruh contoh menyebut ruang sampel atau distribusi, menghitung peluang marginal dan irisan, serta memeriksa persamaan yang relevan. Referensi konsep: Hogg, McKean, dan Craig, Introduction to Mathematical Statistics, edisi ke-8 (2019); Ross, A First Course in Probability, edisi ke-10 (2019). Pembuktian di bawah diberikan secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Independensi Dua Kejadian",
      "statement": "Dalam ruang probabilitas $(\\Omega,\\mathcal F,P)$, kejadian $A,B\\in\\mathcal F$ disebut independen apabila $P(A\\cap B)=P(A)P(B)$. Persamaan ini tetap bermakna jika salah satu kejadian berpeluang nol; definisi tidak mensyaratkan peluang positif."
    },
    {
      "kind": "definition",
      "title": "Independensi Berpasangan",
      "statement": "Kejadian $A_1,\\ldots,A_n$ dengan $n\\ge2$ disebut independen berpasangan apabila $P(A_i\\cap A_j)=P(A_i)P(A_j)$ untuk setiap $1\\le i<j\\le n$. Syarat ini hanya menguji irisan dua kejadian dan belum mengendalikan irisan tiga kejadian atau lebih."
    },
    {
      "kind": "definition",
      "title": "Independensi Bersama",
      "statement": "Kejadian $A_1,\\ldots,A_n$ disebut independen bersama apabila untuk setiap himpunan indeks tidak kosong $I\\subseteq\\{1,\\ldots,n\\}$ berlaku $P(\\bigcap_{i\\in I}A_i)=\\prod_{i\\in I}P(A_i)$. Untuk $|I|=1$ persamaan otomatis benar; informasi pentingnya muncul mulai $|I|=2$. Istilah independen bersama juga disebut independen mutual."
    },
    {
      "kind": "definition",
      "title": "Independensi Dua Peubah Acak Diskret",
      "statement": "Peubah acak diskret $X,Y$ disebut independen apabila untuk setiap himpunan nilai $C,D$ berlaku $P(X\\in C,Y\\in D)=P(X\\in C)P(Y\\in D)$. Untuk peubah dengan dukungan hingga, syarat ini ekuivalen dengan $p_{X,Y}(x,y)=p_X(x)p_Y(y)$ untuk setiap pasangan nilai $x,y$. Syarat independensi lebih kuat daripada $\\operatorname{Cov}(X,Y)=0$."
    },
    {
      "kind": "proposition",
      "title": "Karakterisasi melalui Probabilitas Bersyarat",
      "statement": "Misalkan $A,B\\in\\mathcal F$ dengan $P(B)>0$. Kejadian $A$ dan $B$ independen jika dan hanya jika $P(A\\mid B)=P(A)$.",
      "proof": [
        "Diketahui $P(B)>0$, sehingga $P(A\\mid B)=P(A\\cap B)/P(B)$ terdefinisi. Jika $A$ dan $B$ independen, definisi memberikan $P(A\\cap B)=P(A)P(B)$. Membagi dengan $P(B)>0$ menghasilkan $P(A\\mid B)=P(A)$; arah $(\\Rightarrow)$ terbukti.",
        "Sebaliknya, andaikan $P(A\\mid B)=P(A)$. Dengan definisi probabilitas bersyarat, $P(A\\cap B)/P(B)=P(A)$. Perkalian oleh $P(B)$ memberi $P(A\\cap B)=P(A)P(B)$, yaitu definisi independensi; arah $(\\Leftarrow)$ terbukti.",
        "Syarat $P(B)>0$ diperlukan agar pembagian sah. Jika $P(B)=0$, identitas perkalian pada definisi independensi masih berlaku untuk setiap $A$, tetapi probabilitas bersyarat elementer $P(A\\mid B)$ tidak terdefinisi. Kedua implikasi telah dibuktikan. $\\square$"
      ],
      "explanation": "Ketiadaan pengaruh informasi B pada peluang A hanya dapat dirumuskan dengan peluang bersyarat biasa ketika B berpeluang positif."
    },
    {
      "kind": "proposition",
      "title": "Komplemen Mempertahankan Independensi",
      "statement": "Untuk $A,B\\in\\mathcal F$, jika $A$ dan $B$ independen, maka pasangan $(A^c,B)$, $(A,B^c)$, dan $(A^c,B^c)$ semuanya independen.",
      "proof": [
        "Diketahui $P(A\\cap B)=P(A)P(B)$. Karena $B=(A\\cap B)\\,\\dot\\cup\\,(A^c\\cap B)$ merupakan gabungan saling lepas, aditivitas memberi $P(A^c\\cap B)=P(B)-P(A\\cap B)$.",
        "Substitusi identitas independensi menghasilkan $P(A^c\\cap B)=P(B)(1-P(A))=P(A^c)P(B)$. Pertukaran peran $A$ dan $B$ dengan argumen sama menghasilkan $P(A\\cap B^c)=P(A)P(B^c)$.",
        "Karena $A^c$ independen dari $B$, penerapan hasil yang baru dibuktikan pada pasangan $(A^c,B)$ menghasilkan $P(A^c\\cap B^c)=P(A^c)P(B^c)$. Ketiga pasangan memenuhi definisi independensi. $\\square$"
      ],
      "explanation": "Hasil ini tidak menyatakan bahwa A dan komplemennya sendiri independen: untuk $0<P(A)<1$, irisan keduanya kosong tetapi hasil kali peluang positif."
    },
    {
      "kind": "theorem",
      "title": "Independensi Bersama Mengakibatkan Independensi Berpasangan",
      "statement": "Jika $A_1,\\ldots,A_n$ independen bersama dan $n\\ge2$, maka kejadian-kejadian tersebut independen berpasangan.",
      "proof": [
        "Diketahui definisi independensi bersama berlaku untuk setiap himpunan indeks tidak kosong. Diambil sebarang $i,j$ dengan $1\\le i<j\\le n$.",
        "Pilih himpunan indeks $I=\\{i,j\\}$. Karena $I$ tidak kosong, hipotesis memberikan $P(\\bigcap_{k\\in I}A_k)=\\prod_{k\\in I}P(A_k)$. Kedua ruas berturut-turut sama dengan $P(A_i\\cap A_j)$ dan $P(A_i)P(A_j)$.",
        "Indeks $i,j$ dipilih sebarang, sehingga persamaan berlaku bagi semua pasangan berbeda. Berdasarkan definisi, keluarga tersebut independen berpasangan. Implikasi sebaliknya tidak umum benar dan ditunjukkan pada proposisi berikut. $\\square$"
      ],
      "explanation": "Perbedaan antara syarat semua subkeluarga dan syarat setiap pasangan sangat penting ketika tiga atau lebih kejadian terlibat."
    },
    {
      "kind": "proposition",
      "title": "Independensi Berpasangan Tidak Menjamin Independensi Bersama",
      "statement": "Terdapat tiga kejadian yang independen berpasangan, tetapi tidak independen bersama, bahkan pada ruang probabilitas hingga dengan semua titik sama mungkin.",
      "proof": [
        "Ambil $\\Omega=\\{(0,0),(0,1),(1,0),(1,1)\\}$ dengan peluang setiap titik $1/4$. Untuk koordinat $(u,v)$, tetapkan $A=\\{u=1\\}$, $B=\\{v=1\\}$, dan $C=\\{u\\oplus v=1\\}$, dengan $\\oplus$ operasi XOR.",
        "Ketiga kejadian mempunyai peluang $1/2$. Irisan $A\\cap B=\\{(1,1)\\}$, $A\\cap C=\\{(1,0)\\}$, dan $B\\cap C=\\{(0,1)\\}$ masing-masing berpeluang $1/4=(1/2)(1/2)$. Seluruh pasangan memenuhi persamaan independensi.",
        "Namun, $A\\cap B\\cap C=\\varnothing$ karena $(1,1)$ mempunyai XOR nol. Jadi $P(A\\cap B\\cap C)=0$, sedangkan $P(A)P(B)P(C)=1/8$. Syarat independensi bersama untuk indeks $\\{1,2,3\\}$ gagal. Contoh tandingan telah dibangun. $\\square$"
      ],
      "explanation": "Menguji hanya kovarians atau semua pasangan tidak cukup untuk menyimpulkan independensi gabungan."
    },
    {
      "kind": "theorem",
      "title": "Faktorisasi Massa Peluang untuk Dua Peubah Diskret Hingga",
      "statement": "Misalkan $X,Y$ mempunyai dukungan hingga. Kedua peubah independen jika dan hanya jika $p_{X,Y}(x,y)=p_X(x)p_Y(y)$ untuk setiap pasangan nilai $x,y$.",
      "proof": [
        "Arah $(\\Rightarrow)$: pilih himpunan singleton $C=\\{x\\}$ dan $D=\\{y\\}$. Dari independensi peubah acak, $P(X=x,Y=y)=P(X=x)P(Y=y)$, tepat sama dengan persamaan faktorisasi massa peluang.",
        "Arah $(\\Leftarrow)$: andaikan faktorisasi berlaku untuk setiap pasangan nilai. Untuk sebarang himpunan nilai $C,D$, karena dukungan hingga, $P(X\\in C,Y\\in D)=\\sum_{x\\in C}\\sum_{y\\in D}p_{X,Y}(x,y)$.",
        "Substitusi faktorisasi dan distributivitas jumlah hingga memberi $(\\sum_{x\\in C}p_X(x))(\\sum_{y\\in D}p_Y(y))=P(X\\in C)P(Y\\in D)$. Ini persis definisi independensi peubah acak. Kedua arah terbukti. $\\square$"
      ],
      "explanation": "Satu sel tabel gabungan yang tidak sama dengan hasil kali marginal sudah cukup untuk membuktikan ketakindependenan."
    },
    {
      "kind": "proposition",
      "title": "Fungsi dari Peubah Independen Tetap Independen",
      "statement": "Jika $X,Y$ independen dan $f,g$ adalah fungsi terukur pada masing-masing ruang nilainya, maka $f(X)$ dan $g(Y)$ independen.",
      "proof": [
        "Diambil sebarang himpunan terukur $C,D$ pada ruang hasil $f(X)$ dan $g(Y)$. Keterukuran menjamin bahwa $f^{-1}(C)$ dan $g^{-1}(D)$ merupakan himpunan nilai yang sah untuk peristiwa probabilitas.",
        "Kejadian $\\{f(X)\\in C\\}$ sama dengan $\\{X\\in f^{-1}(C)\\}$, sedangkan $\\{g(Y)\\in D\\}$ sama dengan $\\{Y\\in g^{-1}(D)\\}$. Karena $X,Y$ independen, peluang irisan kedua kejadian tersebut sama dengan hasil kali peluang masing-masing.",
        "Identitas itu berlaku untuk semua $C,D$, sehingga memenuhi definisi independensi bagi $f(X),g(Y)$. Pernyataan tidak mengizinkan $f$ memakai nilai $Y$ atau $g$ memakai nilai $X$; kedua fungsi harus bekerja pada peubah masing-masing. $\\square$"
      ],
      "explanation": "Fungsi yang merangkum informasi dari peubah terpisah tidak menimbulkan ketergantungan baru."
    },
    {
      "kind": "proposition",
      "title": "Independensi Mengakibatkan Kovarians Nol",
      "statement": "Jika $X,Y$ independen, mempunyai dukungan hingga dan momen kedua hingga, maka $E[XY]=E[X]E[Y]$ dan $\\operatorname{Cov}(X,Y)=0$. Kebalikannya tidak selalu berlaku.",
      "proof": [
        "Karena dukungan hingga, ekspektasi produk dapat ditulis $E[XY]=\\sum_x\\sum_y xy\\,p_{X,Y}(x,y)$. Independensi dan teorema faktorisasi memberi $p_{X,Y}(x,y)=p_X(x)p_Y(y)$.",
        "Pisahkan jumlah hingga: $E[XY]=(\\sum_x xp_X(x))(\\sum_y yp_Y(y))=E[X]E[Y]$. Dengan definisi kovarians, $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0$.",
        "Untuk melihat kegagalan kebalikan, ambil $X$ seragam pada $\\{-1,0,1\\}$ dan $Y=X^2$. Simetri memberi $E[X]=E[X^3]=0$, sehingga kovarians nol. Namun $P(X=0,Y=0)=1/3$, sedangkan $P(X=0)P(Y=0)=1/9$; faktorisasi gagal. Dengan demikian hanya implikasi satu arah yang benar. $\\square$"
      ],
      "explanation": "Kovarians hanya mengukur asosiasi linear, bukan semua bentuk ketergantungan."
    },
    {
      "kind": "theorem",
      "title": "Distribusi Binomial sebagai Jumlah Bernoulli Independen",
      "statement": "Jika $X_1,\\ldots,X_n$ independen bersama dengan $P(X_i=1)=p$ dan $P(X_i=0)=1-p$ untuk setiap $i$, maka $S=\\sum_{i=1}^n X_i$ memenuhi $P(S=k)=\\binom nk p^k(1-p)^{n-k}$ untuk $k=0,\\ldots,n$.",
      "proof": [
        "Diketahui $X_i$ Bernoulli dengan parameter sama $p$ dan independen bersama. Untuk suatu urutan tertentu yang mempunyai tepat $k$ nilai satu dan $n-k$ nilai nol, independensi bersama atas kejadian koordinat memberikan peluang $p^k(1-p)^{n-k}$.",
        "Terdapat tepat $\\binom nk$ cara memilih posisi $k$ nilai satu di antara $n$ posisi. Kejadian-kejadian yang merepresentasikan urutan berbeda saling lepas dan gabungannya adalah $\\{S=k\\}$.",
        "Aditivitas hingga memberikan $P(S=k)=\\binom nk p^k(1-p)^{n-k}$. Rumus juga benar untuk $p=0$ atau $p=1$ dengan interpretasi peluang urutan secara langsung, tanpa pembagian. Inilah fungsi massa distribusi binomial. $\\square$"
      ],
      "explanation": "Kesamaan parameter saja tidak cukup: tanpa independensi bersama, probabilitas urutan tidak dapat difaktorkan."
    }
  ],
  "examples": [
    {
      "title": "Dua Koin dan Independensi Kejadian",
      "forDefinition": "Independensi Dua Kejadian",
      "problem": "Dua koin adil dilempar. Jika $A$ menyatakan koin pertama kepala dan $B$ koin kedua kepala, tentukan apakah $A,B$ independen.",
      "solution": [
        "Ruang sampel berisi $HH,HT,TH,TT$ dengan peluang masing-masing $1/4$. Diketahui $A=\\{HH,HT\\}$ dan $B=\\{HH,TH\\}$, sehingga $P(A)=P(B)=1/2$.",
        "Irisannya hanya $\\{HH\\}$, jadi $P(A\\cap B)=1/4$. Hasil kali peluang marginal adalah $(1/2)(1/2)=1/4$.",
        "Karena kedua bilangan sama, definisi independensi terpenuhi. Informasi bahwa koin kedua kepala tidak mengubah peluang koin pertama kepala, yakni $P(A\\mid B)=(1/4)/(1/2)=1/2$."
      ],
      "conclusion": "A dan B independen; verifikasi memakai peluang irisan, bukan sekadar intuisi bahwa koin berbeda."
    },
    {
      "title": "Tiga Kejadian Independen Berpasangan",
      "forDefinition": "Independensi Berpasangan",
      "problem": "Pada dua bit adil independen $U,V$, tetapkan $A=\\{U=1\\}$, $B=\\{V=1\\}$, $C=\\{U\\ne V\\}$. Periksa semua pasangan dan irisan tiga kejadian.",
      "solution": [
        "Keempat pasangan bit $00,01,10,11$ mempunyai peluang $1/4$. Diperoleh $A=\\{10,11\\}$, $B=\\{01,11\\}$, $C=\\{01,10\\}$ dan masing-masing berpeluang $1/2$.",
        "Irisan $A\\cap B=\\{11\\}$, $A\\cap C=\\{10\\}$, $B\\cap C=\\{01\\}$ masing-masing berpeluang $1/4=(1/2)^2$. Jadi semua pasangan independen.",
        "Irisan tiga kejadian kosong, sehingga peluangnya nol, berbeda dari $P(A)P(B)P(C)=1/8$. Pemeriksaan tambahan ini menunjukkan kegagalan independensi bersama."
      ],
      "conclusion": "Tiga kejadian ini independen berpasangan, tetapi tidak independen bersama."
    },
    {
      "title": "Pemeriksaan Seluruh Subkeluarga",
      "forDefinition": "Independensi Bersama",
      "problem": "Tiga koin adil dilempar independen. Misalkan $A_i$ adalah kejadian lemparan ke-$i$ menghasilkan kepala. Periksa syarat independensi bersama.",
      "solution": [
        "Terdapat delapan urutan hasil yang sama mungkin. Untuk setiap indeks $i$, tepat empat urutan mempunyai kepala pada posisi $i$, sehingga $P(A_i)=1/2$.",
        "Untuk setiap dua indeks berbeda, tepat dua urutan mempunyai kepala pada kedua posisi itu; peluang irisan adalah $2/8=1/4=(1/2)^2$.",
        "Hanya satu urutan $HHH$ memenuhi ketiga kejadian sekaligus, sehingga $P(A_1\\cap A_2\\cap A_3)=1/8=(1/2)^3$. Subkeluarga singleton otomatis memenuhi definisi; semua subkeluarga telah diperiksa."
      ],
      "conclusion": "Ketiga kejadian independen bersama, bukan hanya berpasangan."
    },
    {
      "title": "Tabel Massa Peluang Dua Bit",
      "forDefinition": "Independensi Dua Peubah Acak Diskret",
      "problem": "Misalkan $X,Y$ adalah hasil dua lemparan Bernoulli adil yang independen. Tuliskan tabel gabungan dan periksa faktorisasi.",
      "solution": [
        "Untuk $x,y\\in\\{0,1\\}$, empat pasangan $(x,y)$ masing-masing mempunyai peluang $1/4$. Marginalnya $p_X(0)=p_X(1)=p_Y(0)=p_Y(1)=1/2$.",
        "Pada setiap sel, $p_X(x)p_Y(y)=(1/2)(1/2)=1/4$, tepat sama dengan $p_{X,Y}(x,y)$. Karena semua pasangan nilai diperiksa, kriteria faktorisasi terpenuhi.",
        "Sebagai verifikasi tambahan, $P(X+Y=1)=P(X=0,Y=1)+P(X=1,Y=0)=1/4+1/4=1/2$. Perhitungan ini sah karena kedua sel saling lepas."
      ],
      "conclusion": "Tabel gabungan terfaktorisasi dan kedua peubah acak independen."
    },
    {
      "title": "Independensi dengan Peluang Bersyarat",
      "forDefinition": null,
      "problem": "Diketahui $P(A)=3/5$, $P(B)=1/2$, dan $P(A\\cap B)=3/10$. Periksa independensi dan hitung $P(A\\mid B)$.",
      "solution": [
        "Peluang $B$ positif, sehingga definisi $P(A\\mid B)=P(A\\cap B)/P(B)$ dapat digunakan. Substitusi menghasilkan $(3/10)/(1/2)=3/5$.",
        "Hasil kali marginal $P(A)P(B)=(3/5)(1/2)=3/10$, sama dengan peluang irisan yang diketahui. Oleh sebab itu $A,B$ independen.",
        "Perhitungan balik memberi $P(A\\mid B)=P(A)=3/5$, sesuai karakterisasi kondisional. Nilai peluang gabungan juga konsisten karena $P(A\\cup B)=3/5+1/2-3/10=4/5\\le1$."
      ],
      "conclusion": "Kejadian independen, dengan peluang bersyarat 3/5 dan peluang gabungan 4/5."
    },
    {
      "title": "Kovarians Nol Bukan Independensi",
      "forDefinition": null,
      "problem": "Jika $X$ seragam pada $\\{-1,0,1\\}$ dan $Y=X^2$, periksa kovarians dan independensinya.",
      "solution": [
        "Distribusi $X$ simetris sehingga $E[X]=(-1+0+1)/3=0$. Karena $XY=X^3$, diperoleh $E[XY]=(-1+0+1)/3=0$ dan $\\operatorname{Cov}(X,Y)=0$.",
        "Akan tetapi, $P(X=0,Y=0)=P(X=0)=1/3$, sedangkan $P(X=0)P(Y=0)=(1/3)(1/3)=1/9$.",
        "Kedua bilangan berbeda, sehingga kriteria faktorisasi gagal. Ketergantungan juga tampak dari hubungan deterministik $Y=X^2$, yang tidak hilang hanya karena kovarians nol."
      ],
      "conclusion": "X dan Y bergantung walaupun kovariansnya nol."
    },
    {
      "title": "Fungsi Peubah Independen",
      "forDefinition": null,
      "problem": "Jika $X,Y$ independen dan masing-masing seragam pada $\\{-1,0,1\\}$, tentukan peluang $X^2=1$ dan $Y^2=0$ sekaligus.",
      "solution": [
        "Diketahui $P(X^2=1)=P(X\\in\\{-1,1\\})=2/3$ dan $P(Y^2=0)=P(Y=0)=1/3$. Kedua peristiwa bergantung pada peubah yang berbeda.",
        "Karena $X,Y$ independen, fungsi terukur $f(x)=x^2$ dan $g(y)=y^2$ mempertahankan independensi. Dengan demikian peluang irisan adalah $(2/3)(1/3)=2/9$.",
        "Verifikasi langsung: kejadian yang diminta terdiri dari dua pasangan nilai $(-1,0)$ dan $(1,0)$, masing-masing berpeluang $1/9$, sehingga jumlahnya $2/9$."
      ],
      "conclusion": "Peluang kedua syarat kuadrat terpenuhi bersamaan adalah 2/9."
    },
    {
      "title": "Jumlah Tiga Bernoulli Independen",
      "forDefinition": null,
      "problem": "Tiga percobaan Bernoulli independen dengan peluang sukses $1/2$ dilakukan. Hitung peluang tepat dua sukses dan peluang sekurang-kurangnya dua sukses.",
      "solution": [
        "Jumlah sukses $S$ berdistribusi binomial dengan $n=3$ dan $p=1/2$ karena percobaan independen bersama dan parameternya sama.",
        "Tepat dua sukses mempunyai $\\binom32=3$ urutan, masing-masing berpeluang $(1/2)^3=1/8$. Oleh sebab itu $P(S=2)=3/8$.",
        "Untuk sekurang-kurangnya dua sukses, tambahkan kejadian saling lepas $S=2$ dan $S=3$. Diperoleh $P(S\\ge2)=3/8+\\binom33(1/2)^3=3/8+1/8=1/2$. Jumlah semua peluang $S=0,1,2,3$ juga sama dengan satu."
      ],
      "conclusion": "Peluang tepat dua sukses 3/8, sedangkan peluang minimal dua sukses 1/2."
    }
  ],
  "exercises": [
    {
      "prompt": "ID-01. Pada $\\Omega=\\{1,\\ldots,8\\}$ seragam, $A$ adalah bilangan genap dan $B$ adalah bilangan habis dibagi 3. Apakah $A,B$ independen?",
      "hint": "Tuliskan A, B, dan irisannya sebelum membandingkan peluang.",
      "answer": "Diketahui delapan titik sampel mempunyai peluang masing-masing $1/8$. Kejadian $A=\\{2,4,6,8\\}$ memiliki empat anggota, sehingga $P(A)=4/8=1/2$. Kejadian $B=\\{3,6\\}$ memiliki dua anggota, sehingga $P(B)=2/8=1/4$. Irisannya $A\\cap B=\\{6\\}$ mempunyai peluang $1/8$. Hasil kali peluang marginal ialah $(1/2)(1/4)=1/8$. Karena $P(A\\cap B)=P(A)P(B)$, kedua kejadian independen. Sebagai pemeriksaan, $P(A\\mid B)=(1/8)/(1/4)=1/2=P(A)$; syarat $P(B)>0$ terpenuhi."
    },
    {
      "prompt": "ID-02. Jika $P(A)=2/5$, $P(B)=1/2$, dan $P(A\\cap B)=1/5$, hitung kedua probabilitas bersyarat, tentukan independensi, dan hitung $P(A\\cup B)$.",
      "hint": "Gunakan pembagian oleh peluang kejadian yang dikondisikan dan rumus inklusi–eksklusi.",
      "answer": "Diketahui $P(A)=2/5>0$, $P(B)=1/2>0$, dan $P(A\\cap B)=1/5$. Definisi probabilitas bersyarat memberikan $P(A\\mid B)=(1/5)/(1/2)=2/5$ dan $P(B\\mid A)=(1/5)/(2/5)=1/2$. Kedua nilai sama dengan peluang tanpa pengondisian. Secara ekuivalen, $P(A)P(B)=(2/5)(1/2)=1/5=P(A\\cap B)$, sehingga A dan B independen. Untuk gabungan, aditivitas dan koreksi irisan memberi $P(A\\cup B)=2/5+1/2-1/5=7/10$. Nilai ini berada dalam interval $[0,1]$ dan lebih besar daripada masing-masing peluang marginal, sesuai sifat gabungan."
    },
    {
      "prompt": "ID-03. Bangun tiga kejadian independen berpasangan tetapi tidak independen bersama pada ruang empat titik sama mungkin, dan periksa semua irisan yang diperlukan.",
      "hint": "Gunakan dua bit U,V dan paritas U XOR V.",
      "answer": "Ambil $\\Omega=\\{00,01,10,11\\}$ seragam. Tetapkan $A=\\{10,11\\}$, $B=\\{01,11\\}$, dan $C=\\{01,10\\}$. Ketiganya mempunyai peluang $1/2$. Irisan pasangan adalah $A\\cap B=\\{11\\}$, $A\\cap C=\\{10\\}$, serta $B\\cap C=\\{01\\}$; masing-masing berpeluang $1/4=(1/2)(1/2)$. Ini memeriksa seluruh tiga pasangan, sehingga independensi berpasangan terbukti. Namun $A\\cap B\\cap C=\\varnothing$ dan $P(A\\cap B\\cap C)=0\\ne(1/2)^3=1/8$. Syarat untuk subkeluarga berukuran tiga gagal. Contoh ini membuktikan bahwa independensi berpasangan tidak cukup untuk independensi bersama."
    },
    {
      "prompt": "ID-04. Buktikan bahwa $A$ dan $B$ independen jika dan hanya jika $A^c$ dan $B$ independen.",
      "hint": "Uraikan B menjadi dua irisan yang saling lepas; buktikan kedua arah.",
      "answer": "Arah $(\\Rightarrow)$: andaikan $P(A\\cap B)=P(A)P(B)$. Karena $B=(A\\cap B)\\,\\dot\\cup\\,(A^c\\cap B)$, diperoleh $P(A^c\\cap B)=P(B)-P(A\\cap B)=P(B)(1-P(A))=P(A^c)P(B)$. Jadi $A^c$ dan $B$ independen. Arah $(\\Leftarrow)$: andaikan $P(A^c\\cap B)=P(A^c)P(B)$. Dari dekomposisi sama, $P(A\\cap B)=P(B)-P(A^c\\cap B)=P(B)(1-P(A^c))=P(A)P(B)$. Jadi $A$ dan $B$ independen. Kedua implikasi menggunakan hanya aditivitas untuk kejadian saling lepas dan rumus peluang komplemen; tidak diperlukan pembagian oleh peluang positif. Dengan demikian ekuivalensi berlaku bahkan jika salah satu kejadian berpeluang nol. $\\square$"
    },
    {
      "prompt": "ID-05. Ambil $X$ seragam pada $\\{-1,0,1\\}$ dan $Y=X^2$. Buktikan bahwa $\\operatorname{Cov}(X,Y)=0$ tetapi $X,Y$ tidak independen.",
      "hint": "Hitung E[X], E[XY], lalu uji satu sel tabel massa gabungan.",
      "answer": "Diketahui $P(X=-1)=P(X=0)=P(X=1)=1/3$ dan $Y=X^2$. Maka $E[X]=(-1+0+1)/3=0$, $E[Y]=(1+0+1)/3=2/3$, serta $E[XY]=E[X^3]=(-1+0+1)/3=0$. Berdasarkan definisi, $\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]=0-0(2/3)=0$. Untuk independensi, periksa pasangan nilai $x=0,y=0$: $P(X=0,Y=0)=1/3$, tetapi $P(X=0)P(Y=0)=(1/3)(1/3)=1/9$. Karena keduanya berbeda, faktorisasi massa peluang gagal dan X,Y tidak independen. Perhitungan ini menolak kebalikan pernyataan independensi mengakibatkan kovarians nol."
    },
    {
      "prompt": "ID-06. Peubah $X\\sim\\mathrm{Bernoulli}(1/3)$ dan $Y\\sim\\mathrm{Bernoulli}(1/2)$ independen. Hitung $P(X+Y=1)$ dan $\\operatorname{Var}(X+Y)$.",
      "hint": "Pisahkan dua kasus jumlah satu, lalu gunakan kovarians nol akibat independensi.",
      "answer": "Diketahui $P(X=1)=1/3$, $P(X=0)=2/3$, $P(Y=1)=P(Y=0)=1/2$. Kejadian $\\{X+Y=1\\}$ adalah gabungan saling lepas $\\{X=1,Y=0\\}$ dan $\\{X=0,Y=1\\}$. Karena independen, peluangnya $(1/3)(1/2)+(2/3)(1/2)=1/6+1/3=1/2$. Untuk ragam, peubah Bernoulli parameter p mempunyai ragam $p(1-p)$; jadi $\\operatorname{Var}(X)=2/9$ dan $\\operatorname{Var}(Y)=1/4$. Independensi menjamin $\\operatorname{Cov}(X,Y)=0$, sehingga $\\operatorname{Var}(X+Y)=2/9+1/4=8/36+9/36=17/36$. Hasilnya positif dan konsisten dengan jumlah dua peubah yang tidak konstan."
    },
    {
      "prompt": "ID-07. Dari kantong berisi dua bola merah dan satu bola biru diambil dua bola tanpa pengembalian. Apakah kejadian A = “bola pertama merah” dan B = “bola kedua merah” independen?",
      "hint": "Gunakan peluang kondisional pada pengambilan kedua.",
      "answer": "Diketahui terdapat dua bola merah dari tiga bola. Karena posisi pertama dan kedua simetris, $P(A)=P(B)=2/3$. Untuk kedua pengambilan merah, peluangnya $P(A\\cap B)=P(A)P(B\\mid A)=(2/3)(1/2)=1/3$: setelah bola merah pertama diambil, tersisa satu merah dari dua bola. Sementara hasil kali marginal $P(A)P(B)=(2/3)^2=4/9$. Karena $1/3\\ne4/9$, kejadian A dan B tidak independen. Pemeriksaan lain memberi $P(B\\mid A)=1/2\\ne P(B)=2/3$. Ketergantungan muncul karena pengambilan tanpa pengembalian mengubah komposisi kantong."
    },
    {
      "prompt": "ID-08. Tiga percobaan Bernoulli independen dengan peluang sukses $1/3$ dilakukan. Hitung $P(S=2)$ dan $P(S\\ge1)$ untuk jumlah sukses S; jelaskan hipotesis yang dipakai.",
      "hint": "Hitung jumlah urutan dua sukses dan gunakan komplemen untuk minimal satu sukses.",
      "answer": "Diketahui $X_1,X_2,X_3$ Bernoulli dengan parameter sama $p=1/3$ dan independen bersama. Teorema binomial berlaku, sehingga $P(S=2)=\\binom32(1/3)^2(2/3)=3(1/9)(2/3)=2/9$. Untuk sekurang-kurangnya satu sukses, gunakan komplemen $S=0$: $P(S\\ge1)=1-P(S=0)=1-(2/3)^3=1-8/27=19/27$. Verifikasi dengan distribusi lengkap: $P(S=0)=8/27$, $P(S=1)=3(1/3)(2/3)^2=12/27$, $P(S=2)=6/27$, $P(S=3)=1/27$, yang berjumlah $27/27=1$. Asumsi independensi bersama diperlukan agar peluang setiap urutan terfaktorisasi; peluang sukses sama saja tidak menjamin rumus binomial."
    }
  ],
  "mistakes": [],
  "connections": []
};
