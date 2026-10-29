import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Penulisan mandiri untuk Bab 11, submateri ruang metrik.
 * Rujukan konsep: Rudin, Principles of Mathematical Analysis, 3rd ed. (1976),
 * Bab 2; Munkres, Topology, 2nd ed. (2000), Bab 2.
 */
export const metricSpacesContent: BookLessonContent = {
  intro: [
    "Pada garis real, dua bilangan dikatakan berdekatan ketika nilai mutlak selisihnya kecil. Gagasan ini tidak memerlukan operasi penjumlahan pada objek yang sedang dibandingkan: untuk dua fungsi, misalnya, jarak dapat diukur dengan selisih maksimum nilai fungsi. Ruang metrik memisahkan sifat-sifat jarak yang benar-benar dipakai dalam pembuktian dari sifat khusus bilangan real.",
    "Perhatikan tiga cara mengukur jarak titik di bidang: $d_2(x,y)=\\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}$, $d_\\infty(x,y)=\\max\\{|x_1-y_1|,|x_2-y_2|\\}$, dan metrik diskrit yang bernilai satu untuk dua titik berbeda. Ketiganya memenuhi aksioma metrik, tetapi bola terbukanya berbeda bentuk. Karena itu, istilah 'dekat', 'konvergen', dan 'kontinu' selalu harus dibaca relatif terhadap metrik yang ditetapkan.",
    "Perbedaan lain yang penting adalah antara barisan Cauchy dan barisan konvergen. Barisan Cauchy hanya mensyaratkan suku-sukunya akhirnya saling dekat; konvergensi mensyaratkan keberadaan titik limit di ruang yang sama. Aproksimasi rasional terhadap $\\sqrt2$ memperlihatkan mengapa kedua pengertian tersebut tidak boleh disamakan tanpa kelengkapan ruang.",
    "Urutan pembahasan dimulai dari aksioma metrik dan bola terbuka, dilanjutkan dengan konvergensi, Cauchy, kelengkapan, serta kontinuitas. Setiap hasil dinyatakan dengan ruang asal dan ruang tujuan yang jelas. Rujukan: Walter Rudin, Principles of Mathematical Analysis, edisi ke-3 (1976), Bab 2; James R. Munkres, Topology, edisi ke-2 (2000), Bab 2."
  ],
  formal: [
    {
      kind: "definition",
      title: "Metrik dan Ruang Metrik",
      statement: "Misalkan $X$ himpunan takkosong. Fungsi $d:X\\times X\\to[0,\\infty)$ disebut metrik apabila untuk setiap $x,y,z\\in X$ berlaku (i) $d(x,y)=0$ jika dan hanya jika $x=y$; (ii) $d(x,y)=d(y,x)$; dan (iii) $d(x,z)\\le d(x,y)+d(y,z)$. Pasangan $(X,d)$ disebut ruang metrik.",
      explanation: "Kodomain $[0,\\infty)$ menjamin nonnegativitas; syarat pertama sekaligus menjamin bahwa titik berlainan berjarak positif. Ketaksamaan segitiga bukan sekadar sifat tambahan: ia memungkinkan kita menggabungkan dua perkiraan kedekatan."
    },
    {
      kind: "definition",
      title: "Bola Terbuka dan Himpunan Terbuka",
      statement: "Untuk ruang metrik $(X,d)$, $a\\in X$, dan $r>0$, bola terbuka adalah $B_d(a,r)=\\{x\\in X:d(x,a)<r\\}$. Himpunan $U\\subseteq X$ disebut terbuka apabila untuk setiap $a\\in U$ terdapat $r_a>0$ sehingga $B_d(a,r_a)\\subseteq U$. Himpunan kosong terbuka karena kondisi tersebut terpenuhi secara vakum.",
      explanation: "Radius boleh bergantung pada titik $a$. Dalam metrik maksimum pada $\\mathbb R^2$, bola terbuka berbentuk persegi dengan sisi sejajar sumbu, bukan lingkaran."
    },
    {
      kind: "definition",
      title: "Konvergensi Barisan",
      statement: "Barisan $(x_n)_{n\\ge1}$ pada $(X,d)$ konvergen ke $x\\in X$ jika untuk setiap $\\varepsilon>0$ terdapat $N\\in\\mathbb N$ sehingga $n\\ge N$ mengakibatkan $d(x_n,x)<\\varepsilon$. Ditulis $x_n\\to x$.",
      explanation: "Pernyataan ini menuntut satu titik $x$ dalam $X$ yang dapat didekati semua suku yang cukup jauh, bukan hanya bahwa jarak antara dua suku mengecil."
    },
    {
      kind: "definition",
      title: "Barisan Cauchy",
      statement: "Barisan $(x_n)_{n\\ge1}$ pada $(X,d)$ disebut Cauchy jika untuk setiap $\\varepsilon>0$ terdapat $N\\in\\mathbb N$ sehingga $m,n\\ge N$ mengakibatkan $d(x_m,x_n)<\\varepsilon$.",
      explanation: "Dua indeks $m$ dan $n$ harus dapat dipilih secara bebas setelah ambang $N$; memeriksa hanya $d(x_n,x_{n+1})\\to0$ tidak cukup."
    },
    {
      kind: "definition",
      title: "Ruang Metrik Lengkap",
      statement: "Ruang metrik $(X,d)$ disebut lengkap apabila setiap barisan Cauchy di $X$ konvergen terhadap $d$ ke suatu titik yang juga termasuk $X$.",
      explanation: "Kelengkapan adalah sifat pasangan $(X,d)$, bukan hanya himpunan $X$. Bilangan rasional dengan jarak biasa tidak lengkap meskipun padat dalam bilangan real."
    },
    {
      kind: "definition",
      title: "Kontinuitas pada Ruang Metrik",
      statement: "Misalkan $(X,d)$ dan $(Y,\\rho)$ ruang metrik serta $f:X\\to Y$. Fungsi $f$ kontinu di $a\\in X$ jika untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga $d(x,a)<\\delta$ mengakibatkan $\\rho(f(x),f(a))<\\varepsilon$ untuk semua $x\\in X$.",
      explanation: "Metrik pada domain dan kodomain tidak harus sama. Kuantor $\\delta$ boleh bergantung pada $a$ dan $\\varepsilon$, tetapi tidak pada titik $x$ yang kemudian dipilih."
    },
    {
      kind: "proposition",
      title: "Setiap Bola Terbuka Merupakan Himpunan Terbuka",
      statement: "Jika $(X,d)$ ruang metrik, $a\\in X$, dan $R>0$, maka $B_d(a,R)$ terbuka di $X$.",
      proof: [
        "Ambil sembarang $x\\in B_d(a,R)$. Dari $d(x,a)<R$ diperoleh bilangan $r=R-d(x,a)>0$.",
        "Untuk setiap $y\\in B_d(x,r)$, ketaksamaan segitiga memberi $d(y,a)\\le d(y,x)+d(x,a)<r+d(x,a)=R$.",
        "Jadi $B_d(x,r)\\subseteq B_d(a,R)$. Karena titik $x$ dipilih sebarang dan radius $r$ positif, definisi himpunan terbuka terpenuhi. $\\square$"
      ],
      explanation: "Bukti ini berlaku pada setiap ruang metrik, termasuk ketika bola tidak berbentuk bulat dalam gambar Euclidean."
    },
    {
      kind: "theorem",
      title: "Ketunggalan Limit pada Ruang Metrik",
      statement: "Jika $(X,d)$ ruang metrik dan barisan $(x_n)$ konvergen ke $a\\in X$ serta ke $b\\in X$, maka $a=b$.",
      proof: [
        "Ambil $\\varepsilon>0$. Karena $x_n\\to a$, terdapat $N_1$ sehingga $d(x_n,a)<\\varepsilon/2$ untuk $n\\ge N_1$. Karena $x_n\\to b$, terdapat $N_2$ sehingga $d(x_n,b)<\\varepsilon/2$ untuk $n\\ge N_2$.",
        "Pilih $n\\ge\\max\\{N_1,N_2\\}$. Simetri dan ketaksamaan segitiga memberi $0\\le d(a,b)\\le d(a,x_n)+d(x_n,b)<\\varepsilon$.",
        "Karena ketaksamaan $d(a,b)<\\varepsilon$ berlaku untuk setiap $\\varepsilon>0$, haruslah $d(a,b)=0$: jika positif, ambil $\\varepsilon=d(a,b)/2$ untuk memperoleh kontradiksi.",
        "Aksioma identitas metrik kemudian memberi $a=b$. $\\square$"
      ]
    },
    {
      kind: "theorem",
      title: "Setiap Barisan Konvergen Adalah Cauchy",
      statement: "Pada setiap ruang metrik $(X,d)$, jika $x_n\\to a\\in X$, maka $(x_n)$ adalah barisan Cauchy.",
      proof: [
        "Tetapkan $\\varepsilon>0$. Dari $x_n\\to a$, terdapat $N\\in\\mathbb N$ sehingga $d(x_k,a)<\\varepsilon/2$ untuk setiap $k\\ge N$.",
        "Ambil sembarang $m,n\\ge N$. Dengan ketaksamaan segitiga dan simetri, $d(x_m,x_n)\\le d(x_m,a)+d(a,x_n)<\\varepsilon/2+\\varepsilon/2=\\varepsilon$.",
        "Satu indeks $N$ bekerja serentak untuk semua pasangan $m,n\\ge N$. Itulah definisi Cauchy. $\\square$"
      ],
      explanation: "Arah sebaliknya memerlukan kelengkapan; pada $\\mathbb Q$ dengan jarak biasa terdapat barisan Cauchy yang tidak mempunyai limit rasional."
    },
    {
      kind: "theorem",
      title: "Karakterisasi Kontinuitas melalui Barisan",
      statement: "Misalkan $(X,d)$ dan $(Y,\\rho)$ ruang metrik, $f:X\\to Y$, dan $a\\in X$. Fungsi $f$ kontinu di $a$ jika dan hanya jika untuk setiap barisan $(x_n)$ pada $X$ dengan $x_n\\to a$ berlaku $f(x_n)\\to f(a)$ pada $Y$.",
      proof: [
        "($\\Rightarrow$) Misalkan $f$ kontinu di $a$ dan $x_n\\to a$. Untuk setiap $\\varepsilon>0$, kontinuitas memberikan $\\delta>0$ sehingga $d(x,a)<\\delta$ berakibat $\\rho(f(x),f(a))<\\varepsilon$.",
        "Dari $x_n\\to a$ terdapat $N$ dengan $d(x_n,a)<\\delta$ untuk $n\\ge N$. Maka $\\rho(f(x_n),f(a))<\\varepsilon$ untuk $n\\ge N$, sehingga $f(x_n)\\to f(a)$.",
        "($\\Leftarrow$) Andaikan semua barisan yang menuju $a$ dipetakan ke barisan yang menuju $f(a)$, tetapi $f$ tidak kontinu di $a$. Negasi definisi kontinuitas menghasilkan $\\varepsilon_0>0$ sehingga untuk setiap $\\delta>0$ terdapat $x\\in X$ dengan $d(x,a)<\\delta$ dan $\\rho(f(x),f(a))\\ge\\varepsilon_0$.",
        "Untuk setiap $n\\ge1$, pilih $x_n\\in X$ menggunakan $\\delta=1/n$. Karena $0\\le d(x_n,a)<1/n$, diperoleh $x_n\\to a$. Namun $\\rho(f(x_n),f(a))\\ge\\varepsilon_0$ untuk semua $n$, sehingga $f(x_n)$ tidak konvergen ke $f(a)$, bertentangan dengan hipotesis.",
        "Kontradiksi tersebut membuktikan kontinuitas di $a$. Kedua arah telah dibuktikan. $\\square$"
      ],
      explanation: "Konstruksi barisan $x_n$ dari negasi $\\varepsilon$–$\\delta$ merupakan langkah kunci arah balik; menyatakan 'jelas ekuivalen' tidak cukup."
    },
    {
      kind: "proposition",
      title: "Metrik Diskrit Bersifat Lengkap",
      statement: "Untuk himpunan takkosong $X$, definisikan $d_0(x,y)=0$ jika $x=y$ dan $d_0(x,y)=1$ jika $x\\ne y$. Maka $(X,d_0)$ ruang metrik lengkap. Barisan pada $X$ konvergen jika dan hanya jika akhirnya konstan.",
      proof: [
        "Nonnegativitas, identitas, dan simetri langsung berlaku. Untuk ketaksamaan segitiga, jika $x=z$ maka ruas kiri nol. Jika $x\\ne z$, sekurang-kurangnya salah satu dari $x\\ne y$ atau $y\\ne z$ berlaku, sehingga $1=d_0(x,z)\\le d_0(x,y)+d_0(y,z)$. Jadi $d_0$ metrik.",
        "Jika $x_n\\to a$, pilih $\\varepsilon=1/2$. Terdapat $N$ sehingga $d_0(x_n,a)<1/2$ untuk $n\\ge N$; karena nilai jarak hanya nol atau satu, harus $x_n=a$ untuk semua $n\\ge N$.",
        "Sebaliknya, jika $x_n=a$ untuk semua $n\\ge N$, maka $d_0(x_n,a)=0<\\varepsilon$ untuk setiap $\\varepsilon>0$ dan $n\\ge N$; jadi barisan konvergen.",
        "Jika $(x_n)$ Cauchy, ambil lagi $\\varepsilon=1/2$. Untuk $m,n\\ge N$ harus $d_0(x_m,x_n)=0$, sehingga $x_n=x_N$ untuk semua $n\\ge N$. Barisan akhirnya konstan dan karenanya konvergen di $X$. Jadi ruang lengkap. $\\square$"
      ]
    },
    {
      kind: "proposition",
      title: "Fungsi Lipschitz Selalu Kontinu",
      statement: "Misalkan $(X,d)$ dan $(Y,\\rho)$ ruang metrik. Jika $f:X\\to Y$ dan terdapat $L\\ge0$ sehingga $\\rho(f(x),f(y))\\le Ld(x,y)$ untuk semua $x,y\\in X$, maka $f$ kontinu di setiap titik $X$.",
      proof: [
        "Tetapkan $a\\in X$ dan $\\varepsilon>0$. Jika $L=0$, untuk setiap $x\\in X$ berlaku $\\rho(f(x),f(a))=0$, sehingga $f(x)=f(a)$ dan kontinuitas berlaku untuk setiap $\\delta>0$.",
        "Jika $L>0$, pilih $\\delta=\\varepsilon/L$. Untuk $d(x,a)<\\delta$, hipotesis Lipschitz memberi $\\rho(f(x),f(a))\\le Ld(x,a)<L\\delta=\\varepsilon$.",
        "Dalam kedua kasus, definisi kontinuitas di $a$ terpenuhi. Karena $a$ sebarang, $f$ kontinu di seluruh $X$. $\\square$"
      ]
    },
    {
      kind: "proposition",
      title: "Rasional dengan Metrik Biasa Tidak Lengkap",
      statement: "Ruang $(\\mathbb Q,d)$ dengan $d(p,q)=|p-q|$ tidak lengkap.",
      proof: [
        "Untuk setiap $n\\ge1$ definisikan $q_n=\\lfloor10^n\\sqrt2\\rfloor/10^n\\in\\mathbb Q$. Sifat fungsi lantai memberi $0\\le\\sqrt2-q_n<10^{-n}$.",
        "Bagi setiap $m,n\\ge N$, ketaksamaan segitiga pada $\\mathbb R$ menghasilkan $|q_m-q_n|\\le|q_m-\\sqrt2|+|\\sqrt2-q_n|<10^{-m}+10^{-n}\\le2\\cdot10^{-N}$.",
        "Untuk $\\varepsilon>0$, pilih $N$ sehingga $2\\cdot10^{-N}<\\varepsilon$. Maka $(q_n)$ Cauchy dalam $\\mathbb Q$.",
        "Andaikan $q_n\\to q$ untuk suatu $q\\in\\mathbb Q$. Karena $|q_n-\\sqrt2|<10^{-n}\\to0$, barisan yang sama juga konvergen ke $\\sqrt2$ dalam $\\mathbb R$. Ketunggalan limit pada $\\mathbb R$ memaksa $q=\\sqrt2$, padahal $\\sqrt2\\notin\\mathbb Q$. Kontradiksi.",
        "Dengan demikian terdapat barisan Cauchy dalam $\\mathbb Q$ yang tidak konvergen di $\\mathbb Q$, sehingga ruang tersebut tidak lengkap. $\\square$"
      ],
      explanation: "Argumen ini tidak mengatakan barisan tersebut tidak mempunyai limit sama sekali; limitnya ada dalam perluasan $\\mathbb R$, tetapi berada di luar ruang asal."
    }
  ],
  examples: [
    {
      title: "Memeriksa Metrik Diskrit",
      forDefinition: "Metrik dan Ruang Metrik",
      problem: "Pada $X=\\{a,b,c\\}$, tetapkan $d(x,y)=0$ untuk $x=y$ dan $d(x,y)=1$ untuk $x\\ne y$. Verifikasi semua aksioma metrik, lalu tentukan jarak $d(a,c)$.",
      solution: [
        "Diketahui $d$ hanya bernilai $0$ atau $1$, sehingga selalu nonnegatif. Nilai $d(x,y)=0$ tepat ketika $x=y$, sesuai aksioma identitas. Karena kondisi $x\\ne y$ simetris, $d(x,y)=d(y,x)$.",
        "Untuk ketaksamaan segitiga, ambil sembarang $x,y,z\\in X$. Jika $x=z$, maka $d(x,z)=0\\le d(x,y)+d(y,z)$. Jika $x\\ne z$, mustahil $x=y$ dan $y=z$ sekaligus. Maka paling sedikit satu dari $d(x,y)$ dan $d(y,z)$ bernilai $1$, sehingga $d(x,z)=1\\le d(x,y)+d(y,z)$.",
        "Semua aksioma dipenuhi untuk setiap tiga titik, bukan hanya tiga titik yang berbeda. Karena $a\\ne c$, didapat $d(a,c)=1$."
      ],
      conclusion: "Fungsi tersebut merupakan metrik diskrit dan jarak $a$ ke $c$ adalah $1$."
    },
    {
      title: "Bola pada Metrik Maksimum",
      forDefinition: "Bola Terbuka dan Himpunan Terbuka",
      problem: "Di $\\mathbb R^2$ dengan $d_\\infty(x,y)=\\max\\{|x_1-y_1|,|x_2-y_2|\\}$, tentukan $B_{d_\\infty}((1,-1),2)$ dan jelaskan mengapa bentuknya bukan cakram Euclidean.",
      solution: [
        "Titik $(u,v)$ berada dalam bola tepat ketika $\\max\\{|u-1|,|v+1|\\}<2$. Sifat maksimum memberi ekuivalensi dengan dua syarat sekaligus, yaitu $|u-1|<2$ dan $|v+1|<2$.",
        "Ketaksamaan pertama setara dengan $-1<u<3$, sedangkan ketaksamaan kedua setara dengan $-3<v<1$. Jadi bolanya adalah hasil kali interval terbuka $(-1,3)\\times(-3,1)$.",
        "Sebagai verifikasi bentuk, titik $(2.9,0.9)$ memenuhi kedua syarat karena maksimum jaraknya $1.9<2$, meskipun jarak Euclidean ke pusat adalah $\\sqrt{1.9^2+1.9^2}>2$. Karena itu bola metrik maksimum tidak sama dengan cakram Euclidean berjari-jari dua."
      ],
      conclusion: "Bola terbuka metrik maksimum adalah persegi terbuka $(-1,3)\\times(-3,1)$."
    },
    {
      title: "Limit Barisan Rasional Sederhana",
      forDefinition: "Konvergensi Barisan",
      problem: "Buktikan dengan definisi metrik bahwa $x_n=1/n$ konvergen ke $0$ dalam $(\\mathbb R,|\\cdot|)$.",
      solution: [
        "Yang harus dibuktikan adalah: untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $n\\ge N$ mengakibatkan $|1/n-0|<\\varepsilon$.",
        "Ambil $N\\in\\mathbb N$ dengan $N>1/\\varepsilon$ (keberadaan bilangan asli seperti ini mengikuti sifat Archimedes). Jika $n\\ge N$, maka $0<1/n\\le1/N<\\varepsilon$.",
        "Jadi untuk semua $n\\ge N$ berlaku $d(x_n,0)=1/n<\\varepsilon$. Pilihan $N$ hanya bergantung pada $\\varepsilon$, sebagaimana disyaratkan definisi."
      ],
      conclusion: "Barisan $(1/n)$ konvergen ke $0$ dalam metrik biasa."
    },
    {
      title: "Cauchy Bukan Sekadar Selisih Suku Berurutan",
      forDefinition: "Barisan Cauchy",
      problem: "Tentukan apakah barisan $s_n=\\sum_{k=1}^n1/k$ Cauchy dalam $\\mathbb R$. Perhatikan bahwa $|s_{n+1}-s_n|\\to0$.",
      solution: [
        "Memang $|s_{n+1}-s_n|=1/(n+1)\\to0$. Akan tetapi definisi Cauchy meminta jarak $|s_m-s_n|$ kecil untuk semua $m,n$ yang cukup besar, bukan hanya untuk pasangan indeks bertetangga.",
        "Untuk setiap $n\\ge1$, ambil $m=2n$. Diperoleh $s_{2n}-s_n=\\sum_{k=n+1}^{2n}1/k$. Terdapat $n$ suku dan setiap suku sedikitnya $1/(2n)$, sehingga $s_{2n}-s_n\\ge n/(2n)=1/2$.",
        "Andaikan $(s_n)$ Cauchy. Pilih $\\varepsilon=1/3$ dan ambil $N$ yang dijamin definisi. Untuk $n\\ge N$ dan $m=2n\\ge N$ seharusnya $|s_m-s_n|<1/3$, bertentangan dengan batas bawah $1/2$."
      ],
      conclusion: "Jumlah parsial deret harmonik bukan barisan Cauchy, walaupun selisih dua suku berturut-turut menuju nol."
    },
    {
      title: "Kelengkapan Metrik Diskrit",
      forDefinition: "Ruang Metrik Lengkap",
      problem: "Buktikan bahwa setiap barisan Cauchy pada himpunan takhingga $X$ dengan metrik diskrit tetap konvergen. Apakah keterhinggaan $X$ diperlukan?",
      solution: [
        "Ambil barisan Cauchy $(x_n)$ dan pilih $\\varepsilon=1/2$. Ada $N$ sehingga $d_0(x_m,x_n)<1/2$ untuk semua $m,n\\ge N$.",
        "Nilai metrik diskrit hanya $0$ dan $1$, jadi ketaksamaan tersebut memaksa $d_0(x_m,x_n)=0$ atau $x_m=x_n$. Dengan mengambil $m=N$, diperoleh $x_n=x_N$ untuk setiap $n\\ge N$.",
        "Maka untuk semua $\\varepsilon>0$ dan $n\\ge N$, jarak $d_0(x_n,x_N)=0<\\varepsilon$. Barisan konvergen ke $x_N\\in X$. Bukti tidak pernah menggunakan banyaknya elemen $X$."
      ],
      conclusion: "Setiap ruang bermetrik diskrit lengkap, termasuk yang mempunyai takhingga banyak titik."
    },
    {
      title: "Kontinuitas Fungsi Kuadrat",
      forDefinition: "Kontinuitas pada Ruang Metrik",
      problem: "Dengan metrik biasa pada domain dan kodomain $\\mathbb R$, buktikan langsung bahwa $f(x)=x^2$ kontinu di $a=1$.",
      solution: [
        "Diketahui $f(1)=1$. Untuk $\\varepsilon>0$, perlu dicari $\\delta>0$ sehingga $|x-1|<\\delta$ menjamin $|x^2-1|<\\varepsilon$.",
        "Faktorisasi memberi $|x^2-1|=|x-1||x+1|$. Jika $|x-1|<1$, maka $0<x<2$, sehingga $|x+1|<3$. Karena itu cukup mensyaratkan $|x-1|<\\varepsilon/3$ sekaligus $|x-1|<1$.",
        "Pilih $\\delta=\\min\\{1,\\varepsilon/3\\}>0$. Jika $|x-1|<\\delta$, maka $|x^2-1|<3\\delta\\le\\varepsilon$. Jadi syarat $\\varepsilon$–$\\delta$ terpenuhi."
      ],
      conclusion: "Fungsi $f(x)=x^2$ kontinu di titik $1$."
    },
    {
      title: "Kuadrat Jarak Tidak Selalu Metrik",
      problem: "Periksa apakah $D(x,y)=|x-y|^2$ mendefinisikan metrik pada $\\mathbb R$.",
      solution: [
        "Fungsi $D$ nonnegatif, simetris, dan bernilai nol tepat ketika $x=y$. Namun tiga sifat ini belum cukup untuk menyimpulkan bahwa $D$ adalah metrik; ketaksamaan segitiga harus berlaku untuk semua tiga titik.",
        "Pilih $x=0$, $y=1$, dan $z=2$. Diperoleh $D(0,2)=|0-2|^2=4$, sedangkan $D(0,1)+D(1,2)=1+1=2$.",
        "Ketaksamaan yang diwajibkan adalah $4\\le2$, dan ini salah. Satu contoh tandingan cukup untuk menggugurkan pernyataan universal aksioma segitiga."
      ],
      conclusion: "$D(x,y)=|x-y|^2$ bukan metrik pada $\\mathbb R$."
    },
    {
      title: "Barisan Rasional yang Tidak Konvergen di Ruang Asal",
      problem: "Untuk $q_n=\\lfloor10^n\\sqrt2\\rfloor/10^n$, buktikan bahwa $(q_n)$ Cauchy dalam $\\mathbb Q$ tetapi tidak konvergen dalam $\\mathbb Q$.",
      solution: [
        "Sifat lantai memberi $q_n\\in\\mathbb Q$ dan $0\\le\\sqrt2-q_n<10^{-n}$. Untuk $m,n\\ge N$, ketaksamaan segitiga pada $\\mathbb R$ memberi $|q_m-q_n|<10^{-m}+10^{-n}\\le2\\cdot10^{-N}$.",
        "Ambil sembarang $\\varepsilon>0$ dan pilih $N$ dengan $2\\cdot10^{-N}<\\varepsilon$. Maka $|q_m-q_n|<\\varepsilon$ untuk setiap $m,n\\ge N$, sehingga barisan Cauchy menurut metrik terinduksi pada $\\mathbb Q$.",
        "Dalam $\\mathbb R$ diperoleh $q_n\\to\\sqrt2$. Jika barisan ini konvergen ke $q\\in\\mathbb Q$ dalam metrik biasa pada $\\mathbb Q$, ia juga konvergen ke $q$ dalam $\\mathbb R$. Ketunggalan limit real memaksa $q=\\sqrt2$, bertentangan dengan irasionalitas $\\sqrt2$."
      ],
      conclusion: "Barisan Cauchy tersebut tidak memiliki limit dalam $\\mathbb Q$; inilah kegagalan kelengkapan."
    }
  ],
  exercises: [
    {
      prompt: "Pada $\\mathbb R$, buktikan bahwa $d_1(x,y)=\\min\\{1,|x-y|\\}$ merupakan metrik.",
      hint: "Gunakan $\\min\\{1,a+b\\}\\le\\min\\{1,a\\}+\\min\\{1,b\\}$ untuk $a,b\\ge0$.",
      answer: "Diketahui $d_1(x,y)=\\min\\{1,|x-y|\\}$. Karena nilai mutlak nonnegatif, $d_1\\ge0$; $d_1(x,y)=0$ tepat ketika $|x-y|=0$, yakni $x=y$; dan simetri mengikuti $|x-y|=|y-x|$. Untuk ketaksamaan segitiga, dari $|x-z|\\le|x-y|+|y-z|$ dan sifat monoton fungsi $t\\mapsto\\min\\{1,t\\}$ diperoleh $d_1(x,z)\\le\\min\\{1,|x-y|+|y-z|\\}$. Jika salah satu dari $|x-y|$ atau $|y-z|$ sedikitnya satu, ruas kanan yang ingin dibuktikan, $d_1(x,y)+d_1(y,z)$, sedikitnya satu, sedangkan $d_1(x,z)\\le1$. Jika keduanya kurang dari satu, maka $d_1(x,y)+d_1(y,z)=|x-y|+|y-z|\\ge d_1(x,z)$. Jadi dalam kedua kasus ketaksamaan segitiga berlaku. Dengan demikian $d_1$ metrik pada $\\mathbb R$."
    },
    {
      prompt: "Di $\\mathbb R^2$ dengan metrik maksimum, tentukan bola $B((0,0),3/2)$ dan uji apakah titik $(1,1)$ serta $(3/2,0)$ termasuk di dalamnya.",
      hint: "Ubah ketaksamaan maksimum menjadi dua ketaksamaan koordinat yang ketat.",
      answer: "Metrik maksimum didefinisikan oleh $d_\\infty((x_1,x_2),(y_1,y_2))=\\max\\{|x_1-y_1|,|x_2-y_2|\\}$. Maka $(u,v)$ berada dalam $B((0,0),3/2)$ jika dan hanya jika $\\max\\{|u|,|v|\\}<3/2$. Ini ekuivalen dengan $|u|<3/2$ dan $|v|<3/2$, sehingga bola adalah $(-3/2,3/2)\\times(-3/2,3/2)$. Untuk $(1,1)$ jaraknya $\\max\\{1,1\\}=1<3/2$, jadi termasuk. Untuk $(3/2,0)$ jaraknya tepat $3/2$, bukan kurang dari $3/2$, sehingga tidak termasuk. Perbedaan tanda $<$ dan $\\le$ menentukan apakah titik batas masuk."
    },
    {
      prompt: "Buktikan dengan definisi bahwa $x_n=n/(n+1)$ konvergen ke $1$ dalam metrik biasa pada $\\mathbb R$.",
      hint: "Sederhanakan $|x_n-1|$ dan pilih indeks dari $1/(n+1)<\\varepsilon$.",
      answer: "Diketahui $x_n=n/(n+1)$ dan kandidat limit $1$. Selisihnya adalah $|x_n-1|=|n/(n+1)-(n+1)/(n+1)|=1/(n+1)$. Untuk setiap $\\varepsilon>0$, pilih bilangan asli $N>1/\\varepsilon$. Jika $n\\ge N$, maka $1/(n+1)\\le1/(N+1)<1/N<\\varepsilon$. Jadi $d(x_n,1)<\\varepsilon$ bagi semua $n\\ge N$. Semua kuantor definisi terpenuhi, sehingga $x_n\\to1$. Sebagai pemeriksaan, $x_n<1$ dan jaraknya dari $1$ memang mengecil seiring $n$ bertambah."
    },
    {
      prompt: "Tentukan apakah $x_n=(-1)^n$ merupakan barisan Cauchy dalam $\\mathbb R$.",
      hint: "Untuk setiap ambang indeks, pilih satu indeks genap dan satu indeks ganjil yang lebih besar.",
      answer: "Andaikan $(x_n)$ Cauchy. Ambil $\\varepsilon=1$. Maka seharusnya terdapat $N$ sehingga $|x_m-x_n|<1$ untuk semua $m,n\\ge N$. Pilih $n$ genap dan $m$ ganjil yang keduanya sedikitnya $N$. Diperoleh $x_n=1$ dan $x_m=-1$, sehingga $|x_m-x_n|=2$, bertentangan dengan syarat kurang dari satu. Karena untuk setiap $N$ dapat dipilih pasangan berparitas berbeda, tidak ada ambang yang memenuhi definisi. Jadi barisan tersebut bukan Cauchy dan, menurut teorema bahwa konvergen mengakibatkan Cauchy, juga tidak konvergen."
    },
    {
      prompt: "Berikan contoh barisan Cauchy rasional yang tidak konvergen di $\\mathbb Q$ dan buktikan kedua sifatnya.",
      hint: "Gunakan pemotongan desimal $\\sqrt2$ dan ketunggalan limit di $\\mathbb R$.",
      answer: "Ambil $q_n=\\lfloor10^n\\sqrt2\\rfloor/10^n$. Setiap $q_n$ rasional dan $|q_n-\\sqrt2|<10^{-n}$. Untuk setiap $\\varepsilon>0$, pilih $N$ dengan $2\\cdot10^{-N}<\\varepsilon$. Jika $m,n\\ge N$, ketaksamaan segitiga memberi $|q_m-q_n|\\le|q_m-\\sqrt2|+|q_n-\\sqrt2|<2\\cdot10^{-N}<\\varepsilon$. Maka $(q_n)$ Cauchy dalam $\\mathbb Q$. Namun $q_n\\to\\sqrt2$ dalam $\\mathbb R$. Seandainya terdapat $q\\in\\mathbb Q$ dengan $q_n\\to q$ dalam $\\mathbb Q$, jarak yang sama menunjukkan konvergensi ke $q$ dalam $\\mathbb R$. Ketunggalan limit memaksa $q=\\sqrt2$, yang irasional. Kontradiksi ini membuktikan barisan tidak konvergen dalam $\\mathbb Q$."
    },
    {
      prompt: "Buktikan kontinuitas $f(x)=x^2$ di $a=2$ dengan argumen $\\varepsilon$–$\\delta$ yang eksplisit.",
      hint: "Faktorkan $|x^2-4|=|x-2||x+2|$ dan batasi $|x+2|$ ketika $|x-2|<1$.",
      answer: "Diketahui $f(2)=4$. Untuk setiap $\\varepsilon>0$, kita perlu $\\delta>0$ yang menjamin $|x^2-4|<\\varepsilon$ bila $|x-2|<\\delta$. Faktorisasi memberi $|x^2-4|=|x-2||x+2|$. Jika $|x-2|<1$, maka $1<x<3$, sehingga $|x+2|<5$. Pilih $\\delta=\\min\\{1,\\varepsilon/5\\}$. Jika $|x-2|<\\delta$, diperoleh $|x^2-4|<5\\delta\\le\\varepsilon$. Dengan demikian definisi kontinuitas terpenuhi di $a=2$. Nilai $\\delta$ dipilih sebelum $x$ dan hanya bergantung pada $\\varepsilon$, sesuai urutan kuantor."
    },
    {
      prompt: "Buktikan bahwa pada ruang bermetrik diskrit, barisan konvergen jika dan hanya jika akhirnya konstan.",
      hint: "Untuk arah maju gunakan $\\varepsilon=1/2$; untuk arah balik gunakan jarak nol.",
      answer: "($\\Rightarrow$) Misalkan $x_n\\to a$. Untuk $\\varepsilon=1/2$, terdapat $N$ sehingga $d_0(x_n,a)<1/2$ untuk semua $n\\ge N$. Karena $d_0$ hanya bernilai nol atau satu, harus $d_0(x_n,a)=0$, yaitu $x_n=a$ untuk semua $n\\ge N$. Jadi barisan akhirnya konstan. ($\\Leftarrow$) Misalkan terdapat $a\\in X$ dan $N$ sehingga $x_n=a$ untuk semua $n\\ge N$. Untuk sembarang $\\varepsilon>0$, berlaku $d_0(x_n,a)=0<\\varepsilon$ bagi setiap $n\\ge N$. Ini tepat definisi $x_n\\to a$. Kedua implikasi terbukti, tanpa memerlukan asumsi $X$ berhingga."
    },
    {
      prompt: "Misalkan $f:(X,d)\\to(Y,\\rho)$ memenuhi $\\rho(f(x),f(y))\\le3d(x,y)$ untuk setiap $x,y\\in X$. Buktikan $f$ kontinu dan tentukan pilihan $\\delta$ yang berlaku di setiap titik.",
      hint: "Gunakan $\\delta=\\varepsilon/3$ dan periksa urutan kuantor.",
      answer: "Diketahui ketaksamaan Lipschitz dengan konstanta $L=3$ untuk semua pasangan titik. Tetapkan sembarang $a\\in X$ dan $\\varepsilon>0$. Pilih $\\delta=\\varepsilon/3>0$. Jika $d(x,a)<\\delta$, maka $\\rho(f(x),f(a))\\le3d(x,a)<3\\delta=\\varepsilon$. Ini membuktikan kontinuitas di $a$ karena untuk setiap $\\varepsilon$ kita telah memberikan satu $\\delta$ yang bekerja bagi semua $x$ dalam bola domain. Karena $a$ dipilih sebarang, fungsi kontinu pada seluruh $X$. Bahkan pilihan $\\delta$ tidak bergantung pada $a$, sehingga bukti ini juga menunjukkan kontinuitas seragam."
    }
  ],
  mistakes: [],
  connections: []
};
