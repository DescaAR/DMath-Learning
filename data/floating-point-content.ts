import type { BookLessonContent } from "@/data/book-content-types";

/** Authored numerical floating-point analysis: Higham (2002); Goldberg (1991). */
export const floatingPointContent:BookLessonContent = {
  "intro": [
    "Perhitungan dengan bilangan real dan perhitungan pada mesin bukan operasi yang sama. Sebuah bilangan seperti $1{,}234$ dapat disimpan sebagai $1{,}23$ ketika mesin hanya menyediakan tiga angka signifikan. Penggantian tersebut tampak kecil, tetapi jika dua bilangan yang hampir sama dikurangkan, seluruh informasi tentang selisihnya dapat hilang. Oleh sebab itu ketelitian hasil tidak dapat disimpulkan hanya dari banyaknya digit yang dicetak.",
    "Halaman ini menggunakan sistem floating-point desimal mainan dengan tiga angka signifikan dan pembulatan ke bilangan terdekat; kasus tepat di tengah dibulatkan ke digit terakhir genap. Sistem tersebut bukan klaim tentang format IEEE 754 pada komputer nyata, melainkan model terbatas untuk memeriksa setiap operasi secara manual. Eksponen dianggap cukup luas kecuali ketika overflow atau underflow dibahas secara eksplisit.",
    "Dua pertanyaan harus dibedakan. Pertama, apakah perubahan kecil pada masukan eksak memang dapat mengubah keluaran eksak secara besar (conditioning masalah)? Kedua, apakah algoritma menambah kesalahan melebihi yang diharuskan masalah (stabilitas algoritma)? Penjumlahan yang dibulatkan benar dapat stabil secara backward meskipun pengurangan data yang sudah dibulatkan mengalami pembatalan digit yang parah.",
    "Rujukan: Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, edisi kedua (SIAM, 2002), bab 1–3; David Goldberg, What Every Computer Scientist Should Know About Floating-Point Arithmetic, ACM Computing Surveys 23(1), 1991. Pembuktian dan contoh di bawah dinyatakan untuk model desimal terbatas yang didefinisikan di halaman ini; hasilnya tidak otomatis berlaku pada subnormal, overflow, atau operasi yang tidak dibulatkan dengan benar."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Sistem Floating-Point Desimal Ternormalisasi",
      "statement": "Untuk $t\\ge2$, himpunan bilangan floating-point desimal ternormalisasi (selain nol) berbentuk $F_t=\\{\\pm(d_1.d_2\\ldots d_t)\\,10^e:d_1\\in\\{1,\\ldots,9\\},\\ d_j\\in\\{0,\\ldots,9\\},\\ e\\in\\mathbb Z\\}$. Pada model ini eksponen tidak dibatasi. Operasi aritmetika dilakukan pada bilangan real terlebih dahulu, lalu hasilnya dibulatkan kembali ke $F_t\\cup\\{0\\}$.",
      "explanation": "Normalisasi memisahkan banyak digit signifikan dari besar eksponen. Mesin sesungguhnya memiliki rentang eksponen terbatas; pembuktian relatif di bawah mengecualikan underflow dan overflow."
    },
    {
      "kind": "definition",
      "title": "Pembulatan Terdekat dan Unit Roundoff",
      "statement": "Operator $\\operatorname{fl}_t(x)$ memilih anggota $F_t\\cup\\{0\\}$ terdekat dari $x$; jika tepat di tengah dua tetangga, dipilih yang digit terakhirnya genap. Untuk pembulatan ternormalisasi dalam basis $10$, unit roundoff ialah $u=\\tfrac12\\,10^{1-t}$. Pada $t=3$ berlaku $u=0{,}005$.",
      "explanation": "Unit roundoff membatasi galat relatif satu pembulatan yang normal, bukan galat absolut universal. Besarnya galat absolut ikut berubah dengan eksponen."
    },
    {
      "kind": "definition",
      "title": "Galat Forward dan Galat Backward",
      "statement": "Untuk fungsi $f:D\\to\\mathbb R$ dan masukan $x\\in D$, algoritma menghasilkan $\\widehat y$. Galat forward absolut ialah $|\\widehat y-f(x)|$. Galat backward absolut ialah $|\\widehat x-x|$ untuk suatu $\\widehat x\\in D$ yang memenuhi $f(\\widehat x)=\\widehat y$; bila ada beberapa pilihan, yang relevan adalah infimumnya. Galat relatif hanya digunakan jika penyebutnya tidak nol.",
      "explanation": "Galat forward membandingkan keluaran dengan jawaban yang diminta. Galat backward menanyakan seberapa jauh data harus digeser agar keluaran komputasi menjadi jawaban eksak bagi data yang digeser."
    },
    {
      "kind": "definition",
      "title": "Bilangan Kondisi Relatif Lokal",
      "statement": "Jika $f$ terdiferensialkan pada persekitaran $x\\ne0$ dan $f(x)\\ne0$, bilangan kondisi relatif lokal skalar didefinisikan oleh $\\kappa_f(x)=|xf'(x)/f(x)|$. Untuk pengurangan $s(a,b)=a-b$ dengan $a\\ne b$, gunakan ukuran perturbasi relatif maksimum pada dua masukan; bilangan kondisinya ialah $\\kappa_{\\rm sub}(a,b)=(|a|+|b|)/|a-b|$.",
      "explanation": "Bilangan kondisi merupakan sifat fungsi dan titik masukan, bukan penilaian terhadap implementasi algoritma tertentu. Nilainya dapat sangat besar dekat pengurangan dua bilangan hampir sama."
    },
    {
      "kind": "definition",
      "title": "Stabilitas Backward Relatif",
      "statement": "Untuk masukan skalar $x\\ne0$, suatu algoritma disebut backward stable pada keluarga masukan yang ditinjau jika setiap hasil $\\widehat y$ dapat ditulis $\\widehat y=f(x+\\Delta x)$ dengan $|\\Delta x|/|x|\\le C u$, untuk konstanta $C$ yang tidak bergantung pada $u$ pada rentang model tersebut. Untuk masukan vektor digunakan norma atau batas relatif per komponen yang dinyatakan secara eksplisit.",
      "explanation": "Kondisi backward stable harus disertai model galat dan batas domain. Algoritma dapat stabil backward tetapi menghasilkan galat forward besar jika masalahnya ill-conditioned."
    },
    {
      "kind": "theorem",
      "title": "Batas Relatif Pembulatan Normal",
      "statement": "Misalkan $t\\ge2$, $x\\ne0$, dan pembulatan terdekat $\\operatorname{fl}_t(x)$ menghasilkan bilangan normal tanpa overflow atau underflow. Terdapat $\\delta$ dengan $|\\delta|\\le u=\\tfrac12 10^{1-t}$ sehingga $\\operatorname{fl}_t(x)=x(1+\\delta)$.",
      "proof": [
        "Diketahui $x\\ne0$. Karena pembulatan simetris terhadap tanda, cukup dipertimbangkan $x>0$. Pilih eksponen $e$ sehingga $10^e\\le x<10^{e+1}$. Jarak dua bilangan floating-point bertetangga di binade $[10^e,10^{e+1}]$ ialah $h=10^{e-t+1}$; jarak ke tetangga terdekat paling besar $h/2$. Batas tersebut juga berlaku pada batas binade karena jarak di sisi bawah justru lebih kecil.",
        "Dengan $\\widehat x=\\operatorname{fl}_t(x)$ diperoleh $|\\widehat x-x|\\le\\tfrac12 10^{e-t+1}$. Karena $x\\ge10^e$, pembagian oleh $x$ memberikan $|\\widehat x-x|/x\\le\\tfrac12 10^{1-t}=u$.",
        "Definisikan $\\delta=(\\widehat x-x)/x$. Identitas $\\widehat x=x(1+\\delta)$ dan batas $|\\delta|\\le u$ mengikuti langsung. Tidak ada klaim serupa untuk hasil subnormal atau overflow yang dikecualikan oleh hipotesis. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Interpretasi Diferensial Bilangan Kondisi",
      "statement": "Misalkan $f$ terdiferensialkan di $x\\ne0$ dengan $f(x)\\ne0$. Untuk $h\\to0$, berlaku $\\frac{f(x+h)-f(x)}{f(x)}=\\frac{xf'(x)}{f(x)}\\,\\frac h x+o(|h|)$; khususnya faktor penguatan relatif orde pertama adalah $\\kappa_f(x)$.",
      "proof": [
        "Dari definisi turunan, $f(x+h)=f(x)+f'(x)h+r(h)$ dengan $r(h)/|h|\\to0$. Kurangi $f(x)$ dan bagi dengan $f(x)\\ne0$ untuk memperoleh $\\frac{f(x+h)-f(x)}{f(x)}=\\frac{f'(x)}{f(x)}h+\\frac{r(h)}{f(x)}$.",
        "Karena $x\\ne0$, suku utama dapat ditulis $\\frac{xf'(x)}{f(x)}\\frac h x$. Suku sisa memenuhi $r(h)/f(x)=o(|h|)$ sebab $f(x)$ adalah konstanta tidak nol.",
        "Dengan mengambil nilai mutlak koefisien suku utama, diperoleh $\\kappa_f(x)=|xf'(x)/f(x)|$. Ini adalah pernyataan lokal orde pertama, bukan batas global untuk perturbasi yang sebarang besar. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Sensitivitas Pengurangan Dua Masukan",
      "statement": "Untuk $a\\ne b$ dan perturbasi $|\\Delta a|\\le\\varepsilon|a|$, $|\\Delta b|\\le\\varepsilon|b|$, galat relatif selisih memenuhi $\\frac{|(a+\\Delta a)-(b+\\Delta b)-(a-b)|}{|a-b|}\\le\\varepsilon\\frac{|a|+|b|}{|a-b|}$. Faktor pada ruas kanan tajam untuk pilihan tanda perturbasi yang sesuai.",
      "proof": [
        "Diketahui selisih eksak $s=a-b\\ne0$ dan selisih terperturbasi $\\widetilde s=(a+\\Delta a)-(b+\\Delta b)$. Pengurangan kedua persamaan memberi $\\widetilde s-s=\\Delta a-\\Delta b$.",
        "Ketaksamaan segitiga menghasilkan $|\\widetilde s-s|\\le|\\Delta a|+|\\Delta b|\\le\\varepsilon(|a|+|b|)$. Membagi dengan $|a-b|>0$ membuktikan batas yang dinyatakan.",
        "Jika $a,b$ tidak nol, pilih $\\Delta a$ dengan tanda sama dengan $a$ dan $\\Delta b$ dengan tanda berlawanan dengan $b$ agar $\\Delta a-\\Delta b$ mencapai salah satu tanda ekstrem yang sesuai; secara umum supremum atas perturbasi dalam batas yang diberikan ialah $\\varepsilon(|a|+|b|)$. Karena itu faktor kondisi tersebut tidak dapat diperkecil secara universal. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Penjumlahan yang Dibulatkan Benar Stabil Backward",
      "statement": "Misalkan $a,b$ adalah bilangan real terhingga yang dapat direpresentasikan tepat sebagai masukan, dan $\\widehat s=\\operatorname{fl}_t(a+b)$ merupakan hasil normal tanpa overflow atau underflow. Terdapat $\\delta$ dengan $|\\delta|\\le u$ sehingga $\\widehat s=(a+\\Delta a)+(b+\\Delta b)$, dengan $\\Delta a=\\delta a$ dan $\\Delta b=\\delta b$.",
      "proof": [
        "Berdasarkan Teorema Batas Relatif Pembulatan Normal, untuk $s=a+b\\ne0$ terdapat $|\\delta|\\le u$ sehingga $\\widehat s=(a+b)(1+\\delta)$. Jika $a+b=0$, pembulatan memberikan nol tepat dan dapat dipilih $\\delta=0$.",
        "Kembangkan $(a+b)(1+\\delta)=a+b+\\delta a+\\delta b$. Pilih $\\Delta a=\\delta a$ dan $\\Delta b=\\delta b$. Untuk setiap masukan tidak nol, $|\\Delta a|/|a|=|\\delta|\\le u$ dan analog untuk $b$; jika suatu masukan nol, perturbasinya juga nol.",
        "Keluaran komputasi merupakan penjumlahan eksak dua data yang masing-masing hanya berubah relatif paling besar $u$. Pernyataan ini membuktikan stabilitas backward operasi penjumlahan tunggal, tetapi tidak menyatakan bahwa seluruh rangkaian operasi atau pembulatan data sebelum operasi pasti akurat secara forward. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Akumulasi Galat Perkalian Berurutan",
      "statement": "Jika $\\delta_1,\\ldots,\\delta_n\\in\\mathbb R$, $|\\delta_i|\\le u$, dan $nu<1$, maka $\\prod_{i=1}^n(1+\\delta_i)=1+\\theta_n$ dengan $|\\theta_n|\\le\\gamma_n:=nu/(1-nu)$. Batas ini berlaku untuk produk faktor galat pembulatan yang memenuhi hipotesis, bukan untuk semua sumber galat algoritma.",
      "proof": [
        "Karena $u<1$, setiap $1+\\delta_i>0$. Produk dibatasi oleh $(1-u)^n\\le\\prod_{i=1}^n(1+\\delta_i)\\le(1+u)^n$. Dengan $\\theta_n$ sebagai produk dikurangi satu, diperoleh $|\\theta_n|\\le\\max\\{1-(1-u)^n,(1+u)^n-1\\}$.",
        "Ketaksamaan Bernoulli memberi $1-(1-u)^n\\le nu$. Sementara itu, teorema binomial dan $\\binom nk\\le n^k$ menghasilkan $(1+u)^n\\le\\sum_{k=0}^n(nu)^k\\le1/(1-nu)$ karena $nu<1$.",
        "Akibatnya $(1+u)^n-1\\le nu/(1-nu)=\\gamma_n$, dan $nu\\le\\gamma_n$. Kedua sisi simpangan produk telah dibatasi oleh $\\gamma_n$, sehingga $|\\theta_n|\\le\\gamma_n$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Rasionalisasi Akar Kecil Persamaan Kuadrat",
      "statement": "Misalkan $a>0$, $b<0$, $c>0$, dan $\\Delta=b^2-4ac>0$. Akar yang lebih kecil dari $ax^2+bx+c=0$ dapat ditulis secara eksak sebagai $r_{\\rm kecil}=\\frac{-b-\\sqrt\\Delta}{2a}=\\frac{2c}{-b+\\sqrt\\Delta}$. Bentuk kedua menghindari pengurangan dua bilangan positif yang hampir sama ketika $4ac\\ll b^2$.",
      "proof": [
        "Diketahui $\\Delta>0$ dan $a>0$. Rumus kuadrat memberi dua akar nyata $(-b\\pm\\sqrt\\Delta)/(2a)$. Karena $b<0$ dan $c>0$, berlaku $0<\\sqrt\\Delta<-b$, sehingga kedua akar positif dan tanda minus menghasilkan akar yang lebih kecil.",
        "Kalikan pembilang dan penyebut $(-b-\\sqrt\\Delta)/(2a)$ dengan $(-b+\\sqrt\\Delta)$, yang positif. Pembilang berubah menjadi $(-b)^2-\\Delta=b^2-(b^2-4ac)=4ac$.",
        "Pembagian oleh $2a(-b+\\sqrt\\Delta)$ menghasilkan $2c/(-b+\\sqrt\\Delta)$. Kedua bentuk identik dalam aritmetika eksak. Keunggulan numerik bentuk kedua terletak pada tidak adanya pengurangan bilangan hampir sama di penyebut; pernyataan ini tidak menghilangkan kewajiban memeriksa overflow, underflow, atau ketelitian perhitungan $\\Delta$. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Representasi tiga angka signifikan",
      "forDefinition": "Sistem Floating-Point Desimal Ternormalisasi",
      "problem": "Tuliskan representasi $1{,}234$, $12{,}34$, dan $0{,}01234$ pada sistem desimal $t=3$ dengan pembulatan terdekat.",
      "solution": [
        "Ketiga masukan mempunyai mantisa $1{,}234$ tetapi eksponen berbeda: $1{,}234=1{,}234\\cdot10^0$, $12{,}34=1{,}234\\cdot10^1$, dan $0{,}01234=1{,}234\\cdot10^{-2}$. Tiga digit signifikan pertama adalah $1,2,3$; digit keempat $4$ kurang dari $5$.",
        "Pembulatan menghasilkan $1{,}23$, $1{,}23\\cdot10^1=12{,}3$, dan $1{,}23\\cdot10^{-2}=0{,}0123$. Galat absolut berturut-turut $0{,}004$, $0{,}04$, dan $0{,}00004$, tetapi ketiga galat relatif sama, yaitu $0{,}004/1{,}234\\approx0{,}003241$.",
        "Hasil ini menunjukkan bahwa jumlah digit signifikan mengendalikan galat relatif normal, sedangkan besar galat absolut bergantung pada eksponen. Tidak ada operasi penjumlahan atau pengurangan yang diperlukan dalam contoh representasi ini."
      ]
    },
    {
      "title": "Menghitung unit roundoff dan aturan angka genap",
      "forDefinition": "Pembulatan Terdekat dan Unit Roundoff",
      "problem": "Pada sistem $t=3$, tentukan $u$, $\\operatorname{fl}_3(1{,}245)$, dan $\\operatorname{fl}_3(1{,}255)$.",
      "solution": [
        "Rumus unit roundoff memberikan $u=\\frac12\\,10^{1-3}=0{,}005$. Pada interval $[1,10)$, jarak antarbilangan tiga angka signifikan yang bertetangga adalah $0{,}01$, sehingga simpangan pembulatan terbesar ialah $0{,}005$.",
        "Bilangan $1{,}245$ tepat di tengah $1{,}24$ dan $1{,}25$. Digit terakhir pada $1{,}24$ adalah $4$ (genap), sehingga $\\operatorname{fl}_3(1{,}245)=1{,}24$. Bilangan $1{,}255$ tepat di tengah $1{,}25$ dan $1{,}26$; yang berakhir genap ialah $1{,}26$.",
        "Kedua galat absolut adalah $0{,}005$, tetapi galat relatif masing-masing $0{,}005/1{,}245$ dan $0{,}005/1{,}255$, keduanya lebih kecil dari $u$. Contoh ini memakai aturan ties-to-even, bukan pembulatan yang selalu menaikkan angka lima."
      ]
    },
    {
      "title": "Galat forward dan backward pada fungsi kuadrat",
      "forDefinition": "Galat Forward dan Galat Backward",
      "problem": "Untuk $f(x)=x^2$, $x=2$, dan keluaran aproksimasi $\\widehat y=4{,}04$, hitung kedua galat relatif.",
      "solution": [
        "Nilai yang diminta ialah $f(2)=4$. Galat forward absolut $|4{,}04-4|=0{,}04$, dan galat forward relatif $0{,}04/4=0{,}01$ atau $1\\%$. Nilai tersebut membandingkan hasil langsung dengan keluaran eksak.",
        "Untuk galat backward, cari data $\\widehat x>0$ yang memenuhi $\\widehat x^2=4{,}04$. Pilih $\\widehat x=\\sqrt{4{,}04}\\approx2{,}009975124$. Galat backward relatif terhadap masukan asli ialah $(\\sqrt{4{,}04}-2)/2\\approx0{,}00498756$.",
        "Verifikasi $\\widehat x^2=4{,}04$ menunjukkan bahwa keluaran tersebut benar-benar merupakan jawaban eksak bagi data yang sedikit digeser. Galat backward relatif sekitar $0{,}499\\%$ berbeda dari galat forward $1\\%$, sesuai sensitivitas fungsi kuadrat yang memiliki bilangan kondisi $2$."
      ]
    },
    {
      "title": "Bilangan kondisi dekat singularitas",
      "forDefinition": "Bilangan Kondisi Relatif Lokal",
      "problem": "Tentukan bilangan kondisi $f(x)=1/(1-x)$ pada $x=0{,}99$ dan uji perturbasi $h=0{,}0001$.",
      "solution": [
        "Untuk $x\\ne1$, turunan fungsi adalah $f'(x)=1/(1-x)^2$. Berdasarkan definisi, $\\kappa_f(x)=|x f'(x)/f(x)|=|x/(1-x)|$. Pada $x=0{,}99$ diperoleh $\\kappa_f(0{,}99)=99$.",
        "Keluaran awal $f(0{,}99)=100$, sedangkan keluaran setelah perturbasi $f(0{,}9901)=1/0{,}0099=101{,}010101\\ldots$. Perubahan relatif keluaran adalah $(101{,}010101\\ldots-100)/100\\approx0{,}01010101$.",
        "Perubahan relatif masukan adalah $0{,}0001/0{,}99\\approx0{,}0001010101$. Rasio keduanya sekitar $100$, mendekati faktor kondisi lokal $99$ karena perturbasinya kecil tetapi tidak nol. Sensitivitas ini melekat pada masalah, bukan bukti bahwa suatu implementasi telah tidak stabil."
      ]
    },
    {
      "title": "Stabil backward tidak selalu akurat forward",
      "forDefinition": "Stabilitas Backward Relatif",
      "problem": "Tunjukkan perbedaan stabilitas operasi dan conditioning saat mengurangkan $a=1{,}234$ dan $b=1{,}233$ pada sistem $t=3$.",
      "solution": [
        "Selisih eksak ialah $a-b=0{,}001$. Jika kedua data lebih dahulu disimpan dengan tiga digit signifikan, diperoleh $\\operatorname{fl}_3(a)=1{,}23$ dan $\\operatorname{fl}_3(b)=1{,}23$. Pengurangan dua data tersimpan itu menghasilkan $0$ secara eksak.",
        "Galat forward terhadap data real asli adalah $|0-0{,}001|=0{,}001$, atau $100\\%$ dari selisih eksak. Akan tetapi pengurangan dua data yang benar-benar tersimpan, yaitu $1{,}23-1{,}23$, tidak menambah galat aritmetika lagi; masalahnya terletak pada hilangnya informasi saat masukan dibulatkan.",
        "Bilangan kondisi pengurangan pada data asli ialah $(1{,}234+1{,}233)/0{,}001=2467$. Faktor yang besar ini menerangkan mengapa perturbasi relatif kecil pada masing-masing masukan dapat merusak selisih secara besar. Tidak tepat menyimpulkan bahwa operasi pengurangan yang dibulatkan benar otomatis tidak stabil backward."
      ]
    },
    {
      "title": "Dua cara menghitung akar kecil",
      "problem": "Selesaikan $x^2-1000x+1=0$ dan bandingkan dua rumus akar kecil dalam aritmetika desimal tiga angka signifikan.",
      "solution": [
        "Diskriminannya $\\Delta=1000^2-4=999996>0$. Akar kecil eksak ialah $r=(1000-\\sqrt{999996})/2\\approx0{,}001000001000002$. Pada model $t=3$, $\\sqrt{999996}\\approx999{,}998$ dibulatkan menjadi $1{,}00\\cdot10^3$.",
        "Substitusi ke rumus langsung memberikan $\\operatorname{fl}_3((1000-1000)/2)=0$, yang salah secara relatif sebesar $100\\%$. Penyebabnya adalah pembatalan dua bilangan positif hampir sama setelah keduanya dibulatkan.",
        "Rumus rasionalisasi memberi $r=2/(1000+\\sqrt{999996})$. Dengan angka tiga signifikan, penyebut mendekati $2{,}00\\cdot10^3$ dan hasilnya $1{,}00\\cdot10^{-3}$. Nilai tersebut berbeda relatif sekitar $10^{-6}$ dari akar eksak. Persamaan asal memverifikasi bahwa $r$ positif dan hasil yang dirasionalisasi mempertahankan skala akar kecil."
      ]
    },
    {
      "title": "Pengelompokan penjumlahan mengubah galat",
      "problem": "Bandingkan perhitungan $(1{,}00+0{,}006)+0{,}006$ dengan $1{,}00+(0{,}006+0{,}006)$ dalam aritmetika $t=3$.",
      "solution": [
        "Nilai eksak kedua ekspresi adalah $1{,}012$. Untuk urutan kiri, $1{,}00+0{,}006=1{,}006$ dibulatkan menjadi $1{,}01$. Penjumlahan berikutnya memberi $1{,}016$ yang dibulatkan menjadi $1{,}02$. Galat absolut akhir $|1{,}02-1{,}012|=0{,}008$.",
        "Untuk urutan kanan, $0{,}006+0{,}006=0{,}012$ dapat direpresentasikan tepat. Selanjutnya $1{,}00+0{,}012=1{,}012$ dibulatkan menjadi $1{,}01$, sehingga galat absolut $0{,}002$.",
        "Asosiativitas penjumlahan bilangan real tidak bertahan secara umum ketika setiap operasi dibulatkan. Kedua hasil berbeda walaupun input dan ekspresi matematisnya setara; untuk data yang memiliki skala sangat berbeda, urutan operasi dapat memengaruhi akurasi."
      ]
    },
    {
      "title": "Memeriksa batas galat perkalian",
      "problem": "Dalam sistem $t=3$, kalikan $1{,}01$ tiga kali dengan pembulatan pada setiap operasi, lalu bandingkan dengan batas $\\gamma_2$.",
      "solution": [
        "Operasi pertama menghasilkan $1{,}01\\cdot1{,}01=1{,}0201$, yang dibulatkan menjadi $1{,}02$. Operasi kedua menghasilkan $1{,}02\\cdot1{,}01=1{,}0302$, yang dibulatkan menjadi $1{,}03$. Terdapat dua faktor galat pembulatan karena tiga faktor dikalikan melalui dua operasi.",
        "Produk real eksak ialah $(1{,}01)^3=1{,}030301$. Galat relatif keluaran $|1{,}03-1{,}030301|/1{,}030301\\approx0{,}00029215$. Untuk $u=0{,}005$ dan $n=2$, batas teoretis $\\gamma_2=0{,}01/0{,}99\\approx0{,}01010101$.",
        "Hasil yang diamati jauh lebih kecil daripada batas terburuk, sebagaimana diperbolehkan teorema. Faktor $\\gamma_2$ adalah jaminan konservatif, bukan prediksi bahwa setiap perkalian pasti kehilangan sekitar satu persen akurasi."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "FP-01. Pada sistem desimal $t=3$ dengan ties-to-even, hitung $\\operatorname{fl}_3(1{,}245)$, $\\operatorname{fl}_3(1{,}255)$, dan galat absolut serta relatif masing-masing.",
      "hint": "Periksa dua tetangga pada jarak yang sama, lalu gunakan digit terakhir genap.",
      "answer": "Diketahui tiga angka signifikan dan pembulatan ke bilangan terdekat. Tetangga $1{,}245$ ialah $1{,}24$ dan $1{,}25$, keduanya berjarak $0{,}005$. Karena digit terakhir $4$ genap, $\\operatorname{fl}_3(1{,}245)=1{,}24$. Tetangga $1{,}255$ ialah $1{,}25$ dan $1{,}26$; yang berakhir genap ialah $1{,}26$, sehingga $\\operatorname{fl}_3(1{,}255)=1{,}26$. Kedua galat absolut bernilai $0{,}005$. Galat relatif pertama ialah $0{,}005/1{,}245\\approx0{,}00401606$, sedangkan yang kedua $0{,}005/1{,}255\\approx0{,}00398406$. Keduanya tidak melebihi $u=0{,}005$. Perbedaan arah pembulatan berasal dari aturan angka genap, bukan dari ketidakkonsistenan rumus.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-02. Buktikan batas galat relatif normal untuk $t=3$ dan periksa pembulatan $x=9{,}876$ menjadi $9{,}88$.",
      "hint": "Bandingkan setengah jarak antarbilangan dengan batas bawah binade.",
      "answer": "Diketahui $t=3$ sehingga $u=\\tfrac12 10^{-2}=0{,}005$. Jika $10^e\\le x<10^{e+1}$, jarak antarbilangan tiga angka signifikan pada binade tersebut adalah $10^{e-2}$. Pembulatan terdekat memberikan $|\\operatorname{fl}_3(x)-x|\\le\\tfrac12 10^{e-2}$. Pembagian dengan $x\\ge10^e$ menghasilkan galat relatif paling besar $0{,}005$. Untuk $x=9{,}876$, nilai representabel terdekat ialah $9{,}88$ dan galat absolut $0{,}004$. Galat relatif $0{,}004/9{,}876\\approx0{,}00040502<0{,}005$. Pemeriksaan ini memenuhi hipotesis normal tanpa overflow maupun underflow; tidak digunakan untuk menyimpulkan batas yang sama pada bilangan subnormal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-03. Untuk $a=12{,}34$ dan $b=12{,}33$, hitung bilangan kondisi pengurangan dan hasil setelah kedua data dibulatkan ke $t=3$.",
      "hint": "Pisahkan selisih eksak dari selisih dua data tersimpan.",
      "answer": "Selisih eksak ialah $a-b=0{,}01$, sedangkan $|a|+|b|=24{,}67$. Bilangan kondisi relatif terhadap perturbasi komponen maksimum adalah $\\kappa_{\\rm sub}=24{,}67/0{,}01=2467$. Pada sistem tiga angka signifikan, $12{,}34$ dibulatkan menjadi $12{,}3$ dan $12{,}33$ juga menjadi $12{,}3$. Selisih data tersimpan ialah $0$. Galat forward absolut terhadap masukan asli $0{,}01$, dan galat relatif keluaran $100\\%$. Besarnya bilangan kondisi menunjukkan bahwa kesalahan representasi yang kecil relatif terhadap masing-masing data dapat menjadi sangat besar relatif terhadap selisihnya. Perhitungan ini tidak membuktikan operasi pengurangan pada data tersimpan tidak stabil backward.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-04. Untuk $f(x)=x^2$ di $x=3$, tentukan $\\kappa_f(3)$ dan bandingkan perubahan relatif masukan $h=0{,}003$ dengan perubahan relatif keluaran.",
      "hint": "Gunakan turunan untuk kondisi lokal dan kuadrat langsung untuk verifikasi.",
      "answer": "Fungsi $f(x)=x^2$ terdiferensialkan dan $f(3)=9\\ne0$. Karena $f'(x)=2x$, bilangan kondisi relatif lokal ialah $\\kappa_f(3)=|3\\cdot6/9|=2$. Perubahan relatif masukan $h/x=0{,}003/3=0{,}001$. Nilai baru $f(3{,}003)=9{,}018009$, sehingga perubahan relatif keluaran $(9{,}018009-9)/9=0{,}002001$. Rasio kedua perubahan relatif adalah $2{,}001$, mendekati kondisi lokal $2$; selisih $0{,}001$ pada rasio berasal dari suku kuadrat $h^2$ yang diabaikan oleh pendekatan diferensial orde pertama. Perhitungan eksak tersebut memverifikasi arti lokal bilangan kondisi, bukan suatu jaminan untuk perturbasi besar.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-05. Pada aritmetika $t=3$, jelaskan kegagalan rumus langsung akar kecil $x^2-10000x+1=0$ dan peroleh pendekatan stabil dengan rasionalisasi.",
      "hint": "Gunakan diskriminan dan hubungan akar kecil dengan jumlah dua bilangan positif.",
      "answer": "Diskriminan persamaan adalah $\\Delta=10000^2-4=99999996>0$. Akar kecil eksak $r=(10000-\\sqrt{99999996})/2\\approx0{,}000100000001$. Dalam aritmetika tiga angka signifikan, $\\sqrt\\Delta\\approx9999{,}9998$ dibulatkan menjadi $1{,}00\\cdot10^4$. Pengurangan langsung menghasilkan $10000-10000=0$, yang kehilangan akar kecil sepenuhnya. Kalikan bentuk eksak dengan sekawan untuk memperoleh $r=2/(10000+\\sqrt\\Delta)$. Dengan nilai tiga angka signifikan pada penyebut, $10000+\\sqrt\\Delta\\approx20000$ dan $r\\approx2/20000=0{,}000100=1{,}00\\cdot10^{-4}$. Verifikasi menggunakan hubungan hasil kali akar $r_1r_2=1$ dan akar besar sekitar $10000$ memberi akar kecil sekitar $10^{-4}$, konsisten dengan hasil rasionalisasi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-06. Bandingkan dua urutan penjumlahan $1{,}00+0{,}004+0{,}004$ pada sistem $t=3$ dan tentukan urutan yang lebih akurat.",
      "hint": "Bulatkan setelah setiap operasi, bukan hanya pada hasil akhir.",
      "answer": "Nilai eksak adalah $1{,}008$. Jika dihitung dari kiri, $1{,}00+0{,}004=1{,}004$ dibulatkan menjadi $1{,}00$ karena digit berikutnya $4$. Penjumlahan $1{,}00+0{,}004$ sekali lagi dibulatkan menjadi $1{,}00$. Galat absolut akhir $0{,}008$. Jika dua suku kecil dijumlahkan terlebih dahulu, $0{,}004+0{,}004=0{,}008$ dapat direpresentasikan tepat. Penjumlahan dengan $1{,}00$ menghasilkan $1{,}008$, yang dibulatkan menjadi $1{,}01$ dengan galat absolut $0{,}002$. Urutan kedua empat kali lebih akurat dalam galat absolut untuk data ini. Kedua urutan sama secara aljabar real tetapi berbeda pada aritmetika dengan pembulatan tiap operasi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-07. Hitung produk $1{,}02^3$ dengan dua perkalian pada $t=3$ dan verifikasi batas $\\gamma_2$ untuk galat relatifnya.",
      "hint": "Terdapat dua operasi yang masing-masing dapat menyumbang faktor $1+delta_i$.",
      "answer": "Perkalian pertama $1{,}02\\cdot1{,}02=1{,}0404$ dibulatkan menjadi $1{,}04$. Perkalian kedua $1{,}04\\cdot1{,}02=1{,}0608$ dibulatkan menjadi $1{,}06$. Nilai real eksak $(1{,}02)^3=1{,}061208$, sehingga galat relatif $|1{,}06-1{,}061208|/1{,}061208\\approx0{,}00113833$. Dengan $u=0{,}005$ dan dua operasi, $2u=0{,}01<1$ sehingga $\\gamma_2=2u/(1-2u)=0{,}01/0{,}99\\approx0{,}01010101$. Galat yang diamati lebih kecil daripada batas tersebut. Teorema tidak mengharuskan galat mendekati batas terburuk; ia hanya memberikan jaminan maksimum bagi produk faktor pembulatan yang memenuhi hipotesis.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "FP-08. Untuk $f(x)=1/x$, $x=2$, dan keluaran $\\widehat y=0{,}499$, hitung galat forward dan backward relatif, kemudian nilai conditioning di $x=2$.",
      "hint": "Carilah $widehat x=1/widehat y$ agar $f(widehat x)=widehat y$.",
      "answer": "Nilai yang diminta ialah $f(2)=0{,}5$. Galat forward absolut $|0{,}499-0{,}5|=0{,}001$, sehingga galat forward relatif $0{,}001/0{,}5=0{,}002$. Agar keluaran aproksimasi tepat bagi masukan lain, pilih $\\widehat x=1/0{,}499=1000/499\\approx2{,}004008016$. Galat backward relatif ialah $|\\widehat x-2|/2=|(1000/499)-2|/2=1/499\\approx0{,}002004008$. Verifikasi $f(1000/499)=499/1000=0{,}499$. Karena $f'(x)=-1/x^2$, bilangan kondisi relatif $\\kappa_f(2)=|2(-1/4)/(1/2)|=1$. Kedua galat relatif memang hampir sama untuk perturbasi kecil, konsisten dengan kondisi lokal satu.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
