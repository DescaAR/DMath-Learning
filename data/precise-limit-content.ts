import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Dedicated epsilon-delta lesson with constructive proofs and examples.
 * References: J. Stewart, Calculus: Early Transcendentals, 8th ed.,
 * Cengage, 2016, Ch. 2; R. G. Bartle and D. R. Sherbert,
 * Introduction to Real Analysis, 4th ed., Wiley, 2011, Ch. 4.
 * The explanations, proofs and solutions are independently authored.
 */
export const preciseLimitContent: BookLessonContent = {
  "intro": [
    "Limit fungsi menyatakan perilaku nilai $f(x)$ ketika masukan $x$ mendekati suatu titik $a$, bukan sekadar hasil substitusi $x=a$. Pada fungsi $f(x)=(x^2-1)/(x-1)$, nilai $f(1)$ bahkan tidak terdefinisi, tetapi untuk $x\\ne1$ fungsi tersebut sama dengan $x+1$. Dengan demikian, nilai-nilainya mendekati $2$ ketika $x$ mendekati $1$. Perbedaan antara nilai fungsi di titik dan perilaku di sekitar titik menjadi alasan kita memakai lingkungan berlubang.",
    "Kalimat “$f(x)$ dapat dibuat sedekat mungkin dengan $L$” perlu diubah menjadi pernyataan yang dapat diuji: untuk setiap toleransi keluaran $\\varepsilon>0$, kita harus dapat memilih toleransi masukan $\\delta>0$ sehingga seluruh $x$ dalam domain dengan $0<|x-a|<\\delta$ memenuhi $|f(x)-L|<\\varepsilon$. Urutan kuantor ini tidak boleh dibalik: $\\delta$ boleh bergantung pada $\\varepsilon$, tetapi harus bekerja untuk semua $x$ yang memenuhi syarat.",
    "Titik $a$ tidak harus termasuk domain fungsi, tetapi harus merupakan titik akumulasi domain agar limitnya tidak bersifat kosong. Sebagai contoh, jika domain hanya $\\{0,1\\}$, maka di sekitar $0$ yang cukup kecil tidak ada titik domain lain. Tanpa syarat titik akumulasi, setiap bilangan $L$ akan memenuhi implikasi $\\varepsilon$–$\\delta$ secara vakum, sehingga ketunggalan limit gagal.",
    "Kita akan membuktikan ketunggalan limit, ketidakbergantungan limit terhadap nilai fungsi tepat di titik, limit fungsi linear dan kuadrat, keterbatasan lokal, kriteria barisan, kriteria dua limit satu sisi, serta teorema apit. Setiap pembuktian akan menunjukkan secara eksplisit bagaimana $\\delta$ dipilih dari $\\varepsilon$ dan hipotesis yang tersedia, bukan hanya menyebut “ambil cukup kecil”.",
    "Visualisasi interaktif di bawah menggambarkan dua pita: pita horizontal $L-\\varepsilon<y<L+\\varepsilon$ dan pita vertikal $a-\\delta<x<a+\\delta$. Pembaca dapat mengubah toleransi untuk melihat kapan seluruh grafik di lingkungan berlubang masuk ke pita horizontal. Kasus loncatan sengaja disertakan untuk memperlihatkan mengapa tidak setiap fungsi mempunyai limit. Rujukan: J. Stewart, Calculus: Early Transcendentals, edisi ke-8 (Cengage, 2016), Bab 2; R. G. Bartle dan D. R. Sherbert, Introduction to Real Analysis, edisi ke-4 (Wiley, 2011), Bab 4."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Titik Akumulasi Domain",
      "statement": "Misalkan $D\\subseteq\\mathbb R$ dan $a\\in\\mathbb R$. Titik $a$ disebut titik akumulasi $D$ jika untuk setiap $r>0$ terdapat $x\\in D$ dengan $0<|x-a|<r$. Syarat ini tidak mengharuskan $a\\in D$."
    },
    {
      "kind": "definition",
      "title": "Lingkungan Berlubang",
      "statement": "Untuk $a\\in\\mathbb R$ dan $\\delta>0$, lingkungan berlubang berjari-jari $\\delta$ adalah $U_\\delta^*(a)=\\{x\\in\\mathbb R:0<|x-a|<\\delta\\}$. Untuk fungsi $f:D\\to\\mathbb R$, yang diperiksa ialah $U_\\delta^*(a)\\cap D$."
    },
    {
      "kind": "definition",
      "title": "Limit Fungsi melalui Epsilon–Delta",
      "statement": "Misalkan $f:D\\to\\mathbb R$ dan $a$ titik akumulasi $D$. Dikatakan $\\lim_{x\\to a,\\;x\\in D}f(x)=L$ apabila untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga bagi setiap $x\\in D$, implikasi $0<|x-a|<\\delta\\implies |f(x)-L|<\\varepsilon$ berlaku."
    },
    {
      "kind": "definition",
      "title": "Limit Satu Sisi",
      "statement": "Misalkan $a$ titik akumulasi $D\\cap(-\\infty,a)$, berturut-turut $D\\cap(a,\\infty)$. Limit kiri $\\lim_{x\\to a^-}f(x)=L_-$ berarti definisi $\\varepsilon$–$\\delta$ berlaku untuk semua $x\\in D$ dengan $a-\\delta<x<a$. Limit kanan $\\lim_{x\\to a^+}f(x)=L_+$ didefinisikan serupa dengan $a<x<a+\\delta$."
    },
    {
      "kind": "definition",
      "title": "Barisan Domain yang Mendekati Titik",
      "statement": "Untuk $D\\subseteq\\mathbb R$ dan $a\\in\\mathbb R$, barisan $(x_n)$ disebut mendekati $a$ melalui domain berlubang jika $x_n\\in D\\setminus\\{a\\}$ untuk setiap $n\\in\\mathbb N$ dan $\\lim_{n\\to\\infty}x_n=a$. Barisan ini digunakan untuk menguji limit fungsi tanpa pernah mensubstitusi $x=a$."
    },
    {
      "kind": "definition",
      "title": "Kontinuitas pada Titik",
      "statement": "Misalkan $f:D\\to\\mathbb R$ dan $a\\in D$ titik akumulasi $D$. Fungsi $f$ kontinu di $a$ jika dan hanya jika $\\lim_{x\\to a,\\;x\\in D}f(x)=f(a)$. Jadi kontinuitas memerlukan nilai $f(a)$ terdefinisi dan sama dengan limit dari titik-titik domain lain."
    },
    {
      "kind": "theorem",
      "title": "Ketunggalan Limit Fungsi",
      "statement": "Misalkan $f:D\\to\\mathbb R$ dan $a$ titik akumulasi $D$. Jika $\\lim_{x\\to a}f(x)=L$ dan $\\lim_{x\\to a}f(x)=M$, maka $L=M$.",
      "proof": [
        "Andaikan $L\\ne M$ dan tulis $d=|L-M|>0$. Pilih $\\varepsilon=d/3$. Dari hipotesis limit pertama, terdapat $\\delta_1>0$ sehingga $x\\in D$ dan $0<|x-a|<\\delta_1$ mengakibatkan $|f(x)-L|<d/3$.",
        "Dari hipotesis limit kedua, terdapat $\\delta_2>0$ sehingga $x\\in D$ dan $0<|x-a|<\\delta_2$ mengakibatkan $|f(x)-M|<d/3$. Ambil $\\delta=\\min\\{\\delta_1,\\delta_2\\}>0$.",
        "Karena $a$ titik akumulasi $D$, terdapat setidaknya satu $x\\in D$ dengan $0<|x-a|<\\delta$. Untuk $x$ tersebut kedua estimasi berlaku serentak. Ketaksamaan segitiga memberi $d=|L-M|\\le |L-f(x)|+|f(x)-M|<2d/3$, padahal $d>0$.",
        "Kontradiksi $d<2d/3$ membuktikan bahwa asumsi $L\\ne M$ tidak mungkin. Dengan demikian, nilai limit jika ada adalah tunggal, yakni $L=M$."
      ],
      "explanation": "Peran titik akumulasi sangat penting: kita memerlukan satu titik domain di dalam lingkungan berlubang untuk menerapkan kedua batas secara bersamaan.",
      "given": "$a$ titik akumulasi $D$ dan kedua limit bernilai hingga.",
      "toProve": "Kedua nilai limit harus sama."
    },
    {
      "kind": "proposition",
      "title": "Mengubah Nilai Fungsi di Satu Titik Tidak Mengubah Limit",
      "statement": "Misalkan $a$ titik akumulasi $D$ dan $f,g:D\\to\\mathbb R$. Jika ada $r>0$ sehingga $f(x)=g(x)$ untuk setiap $x\\in D$ dengan $0<|x-a|<r$, maka $\\lim_{x\\to a}f(x)=L$ jika dan hanya jika $\\lim_{x\\to a}g(x)=L$.",
      "proof": [
        "($\\Rightarrow$) Misalkan $\\lim_{x\\to a}f(x)=L$. Untuk setiap $\\varepsilon>0$ terdapat $\\delta_f>0$ sehingga $0<|x-a|<\\delta_f$ dan $x\\in D$ mengakibatkan $|f(x)-L|<\\varepsilon$.",
        "Pilih $\\delta=\\min\\{r,\\delta_f\\}>0$. Apabila $x\\in D$ dan $0<|x-a|<\\delta$, maka $f(x)=g(x)$ menurut hipotesis kesamaan di lingkungan berlubang. Akibatnya $|g(x)-L|=|f(x)-L|<\\varepsilon$. Jadi $\\lim_{x\\to a}g(x)=L$.",
        "($\\Leftarrow$) Sebaliknya, andaikan $\\lim_{x\\to a}g(x)=L$. Pilih $\\delta_g>0$ dari definisi limit untuk $g$, lalu ambil $\\delta=\\min\\{r,\\delta_g\\}$. Untuk setiap $x\\in D$ dengan $0<|x-a|<\\delta$, berlaku $|f(x)-L|=|g(x)-L|<\\varepsilon$.",
        "Kedua implikasi telah dibuktikan, sehingga keberadaan dan nilai limit sama untuk $f$ dan $g$ walaupun nilai keduanya pada $x=a$ boleh berbeda."
      ],
      "explanation": "Pembuktian ini menjelaskan mengapa lubang pada grafik tidak otomatis menghilangkan limit. Yang menentukan limit ialah perilaku pada titik-titik domain di sekitarnya."
    },
    {
      "kind": "proposition",
      "title": "Limit Fungsi Linear",
      "statement": "Untuk setiap $m,b,a\\in\\mathbb R$, fungsi $f(x)=mx+b$ pada $\\mathbb R$ memenuhi $\\lim_{x\\to a}f(x)=ma+b$.",
      "proof": [
        "Ambil sebarang $\\varepsilon>0$. Jika $m=0$, maka $f(x)=b=ma+b$ untuk semua $x$. Karena $|f(x)-(ma+b)|=0<\\varepsilon$, sembarang $\\delta>0$, misalnya $\\delta=1$, memenuhi definisi limit.",
        "Jika $m\\ne0$, tetapkan $\\delta=\\varepsilon/|m|>0$. Pilihan ini dibuat agar perubahan keluaran $|m||x-a|$ lebih kecil daripada $\\varepsilon$ setiap kali perubahan masukan lebih kecil daripada $\\delta$.",
        "Sekarang ambil sembarang $x\\in\\mathbb R$ dengan $0<|x-a|<\\delta$. Dengan menggunakan distributivitas dan sifat nilai mutlak diperoleh $|f(x)-(ma+b)|=|mx+b-ma-b|=|m||x-a|<|m|\\delta=\\varepsilon$.",
        "Karena konstruksi $\\delta$ berlaku untuk setiap $\\varepsilon>0$ dan setiap $x$ yang memenuhi syarat, terbukti $\\lim_{x\\to a}(mx+b)=ma+b$."
      ],
      "explanation": "Kasus kemiringan nol perlu ditangani terpisah agar rumus $\u000barepsilon/|m|$ tidak membagi dengan nol. Pembagian dengan nol tidak dibenarkan, sekalipun limit fungsi konstannya tetap ada."
    },
    {
      "kind": "proposition",
      "title": "Limit Fungsi Kuadrat",
      "statement": "Untuk setiap $a\\in\\mathbb R$, berlaku $\\lim_{x\\to a}x^2=a^2$.",
      "proof": [
        "Ambil sebarang $\\varepsilon>0$. Kita ingin membatasi $|x^2-a^2|=|x-a||x+a|$. Faktor pertama dapat dibuat kecil melalui $\\delta$, tetapi faktor kedua juga harus dibatasi menggunakan kedekatan $x$ terhadap $a$.",
        "Tetapkan $\\delta=\\min\\{1,\\varepsilon/(2|a|+1)\\}>0$. Jika $0<|x-a|<\\delta$, maka $|x-a|<1$ dan ketaksamaan segitiga memberikan $|x+a|=|(x-a)+2a|\\le |x-a|+2|a|<2|a|+1$.",
        "Karena kedua faktor taknegatif, kita memperoleh $|x^2-a^2|=|x-a||x+a|<(2|a|+1)|x-a|<(2|a|+1)\\delta\\le\\varepsilon$. Ketaksamaan ketat tetap berlaku meskipun $\\delta$ sama dengan salah satu batas dalam operasi minimum.",
        "Untuk setiap $\\varepsilon>0$ telah ditemukan $\\delta>0$ yang bekerja bagi semua $x$ di lingkungan berlubang. Dengan demikian, limit fungsi kuadrat di $a$ adalah $a^2$."
      ],
      "explanation": "Langkah membatasi $|x+a|$ menjelaskan mengapa memilih $delta=\u000barepsilon$ tanpa memeriksa faktor lain tidak cukup untuk fungsi nonlinier."
    },
    {
      "kind": "lemma",
      "title": "Fungsi dengan Limit Hingga Terbatas Secara Lokal",
      "statement": "Jika $f:D\\to\\mathbb R$ memiliki limit hingga $L$ di titik akumulasi $a$ dari $D$, maka terdapat $\\delta>0$ dan $M>0$ sehingga $|f(x)|<M$ untuk semua $x\\in D$ dengan $0<|x-a|<\\delta$.",
      "proof": [
        "Karena $\\lim_{x\\to a}f(x)=L$, definisi limit dapat diterapkan pada pilihan toleransi khusus $\\varepsilon=1$. Maka terdapat $\\delta>0$ sehingga untuk setiap $x\\in D$ dengan $0<|x-a|<\\delta$ berlaku $|f(x)-L|<1$.",
        "Dengan ketaksamaan segitiga diperoleh $|f(x)|=|(f(x)-L)+L|\\le |f(x)-L|+|L|<1+|L|$. Pilih $M=|L|+1>0$, yang tidak bergantung pada titik $x$.",
        "Dengan demikian, seluruh nilai fungsi pada lingkungan berlubang tersebut dibatasi oleh satu konstanta $M$. Pernyataan ini tidak otomatis membatasi $f(a)$ jika $a\\in D$ dan nilai fungsi di titik itu berbeda dari perilaku di sekitarnya.",
        "Kesimpulan berlaku tanpa mensyaratkan fungsi kontinu di $a$, karena hanya nilai fungsi pada $x\\ne a$ yang digunakan."
      ],
      "explanation": "Teorema ini merupakan alat penting ketika membuktikan hukum limit hasil kali: satu faktor dapat dibatasi secara lokal sebelum mengestimasi hasil kali."
    },
    {
      "kind": "theorem",
      "title": "Kriteria Barisan untuk Limit Fungsi",
      "statement": "Misalkan $f:D\\to\\mathbb R$ dan $a$ titik akumulasi $D$. Maka $\\lim_{x\\to a}f(x)=L$ jika dan hanya jika untuk setiap barisan $(x_n)$ dengan $x_n\\in D\\setminus\\{a\\}$ dan $x_n\\to a$, berlaku $f(x_n)\\to L$.",
      "proof": [
        "($\\Rightarrow$) Andaikan limit fungsi sama dengan $L$. Ambil sebarang barisan $(x_n)$ di $D\\setminus\\{a\\}$ yang konvergen ke $a$. Untuk setiap $\\varepsilon>0$, pilih $\\delta>0$ dari definisi limit fungsi. Karena $x_n\\to a$, ada $N\\in\\mathbb N$ sehingga $n\\ge N$ mengakibatkan $|x_n-a|<\\delta$.",
        "Seluruh $x_n$ berbeda dari $a$, sehingga untuk $n\\ge N$ berlaku $0<|x_n-a|<\\delta$ dan karenanya $|f(x_n)-L|<\\varepsilon$. Ini tepat definisi $f(x_n)\\to L$.",
        "($\\Leftarrow$) Andaikan setiap barisan domain berlubang yang menuju $a$ menghasilkan $f(x_n)\\to L$, tetapi limit fungsi bukan $L$. Negasi definisi limit menyatakan bahwa terdapat $\\varepsilon_0>0$ sehingga untuk setiap $\\delta>0$ ada $x\\in D$ dengan $0<|x-a|<\\delta$ dan $|f(x)-L|\\ge\\varepsilon_0$.",
        "Untuk setiap $n\\in\\mathbb N$, terapkan pernyataan tersebut dengan $\\delta=1/n$ dan pilih $x_n\\in D$ sehingga $0<|x_n-a|<1/n$ dan $|f(x_n)-L|\\ge\\varepsilon_0$. Karena $1/n\\to0$, teorema apit untuk barisan memberikan $x_n\\to a$, tetapi $f(x_n)$ tidak konvergen ke $L$ sebab semua suku berada setidaknya sejauh $\\varepsilon_0$ dari $L$.",
        "Kontradiksi terhadap hipotesis sekuensial membuktikan limit fungsi harus sama dengan $L$. Kedua arah telah dibuktikan."
      ],
      "explanation": "Untuk menyangkal limit, cukup menemukan dua barisan yang menuju titik sama tetapi citra-citranya mempunyai limit berbeda; untuk membuktikan limit, semua barisan yang diizinkan harus diperiksa."
    },
    {
      "kind": "theorem",
      "title": "Kriteria Dua Limit Satu Sisi",
      "statement": "Misalkan $f:D\\to\\mathbb R$ dan ada $r>0$ sehingga $(a-r,a)\\cup(a,a+r)\\subseteq D$. Maka $\\lim_{x\\to a}f(x)=L$ jika dan hanya jika $\\lim_{x\\to a^-}f(x)=L$ dan $\\lim_{x\\to a^+}f(x)=L$.",
      "proof": [
        "($\\Rightarrow$) Andaikan limit dua sisi sama dengan $L$. Untuk setiap $\\varepsilon>0$ pilih $\\delta>0$ dari definisi limit dua sisi. Jika $a-\\delta<x<a$ dan $x\\in D$, maka $0<|x-a|<\\delta$ sehingga $|f(x)-L|<\\varepsilon$. Argumen identik berlaku untuk $a<x<a+\\delta$. Jadi kedua limit satu sisi bernilai $L$.",
        "($\\Leftarrow$) Andaikan limit kiri dan limit kanan sama-sama $L$. Untuk toleransi $\\varepsilon>0$, definisi limit kiri memberi $\\delta_->0$, sedangkan definisi limit kanan memberi $\\delta_+>0$. Tetapkan $\\delta=\\min\\{r,\\delta_-,\\delta_+\\}>0$.",
        "Ambil sebarang $x\\in D$ dengan $0<|x-a|<\\delta$. Karena bilangan real terurut total dan $x\\ne a$, tepat satu dari $x<a$ atau $x>a$ berlaku. Pada kasus pertama, $a-\\delta<x<a$ sehingga estimasi limit kiri memberi $|f(x)-L|<\\varepsilon$. Pada kasus kedua, $a<x<a+\\delta$ sehingga estimasi limit kanan memberikan ketaksamaan sama.",
        "Kedua kasus mencakup semua titik yang diizinkan. Maka definisi $\\varepsilon$–$\\delta$ untuk limit dua sisi terpenuhi, sehingga limitnya $L$."
      ],
      "explanation": "Persamaan limit kiri dan kanan bukan sekadar heuristik grafik; kedua arah mengikuti definisi dengan memilih minimum dari dua radius yang sah."
    },
    {
      "kind": "theorem",
      "title": "Teorema Apit untuk Limit Fungsi",
      "statement": "Misalkan $f,g,h:D\\to\\mathbb R$, $a$ titik akumulasi $D$, dan ada $r>0$ sehingga $f(x)\\le g(x)\\le h(x)$ untuk setiap $x\\in D$ dengan $0<|x-a|<r$. Jika $\\lim_{x\\to a}f(x)=\\lim_{x\\to a}h(x)=L$, maka $\\lim_{x\\to a}g(x)=L$.",
      "proof": [
        "Ambil sebarang $\\varepsilon>0$. Dari $\\lim_{x\\to a}f(x)=L$ terdapat $\\delta_f>0$ sehingga $0<|x-a|<\\delta_f$ mengakibatkan $|f(x)-L|<\\varepsilon$, yang khususnya memberikan $L-\\varepsilon<f(x)$.",
        "Dari $\\lim_{x\\to a}h(x)=L$ terdapat $\\delta_h>0$ sehingga $0<|x-a|<\\delta_h$ mengakibatkan $|h(x)-L|<\\varepsilon$, yang khususnya memberikan $h(x)<L+\\varepsilon$.",
        "Pilih $\\delta=\\min\\{r,\\delta_f,\\delta_h\\}>0$. Untuk setiap $x\\in D$ dengan $0<|x-a|<\\delta$, semua hipotesis ketaksamaan berlaku serentak dan diperoleh $L-\\varepsilon<f(x)\\le g(x)\\le h(x)<L+\\varepsilon$.",
        "Dari ketaksamaan tersebut didapat $-\\varepsilon<g(x)-L<\\varepsilon$, atau ekuivalen $|g(x)-L|<\\varepsilon$. Karena $\\varepsilon$ sebarang, definisi limit membuktikan $\\lim_{x\\to a}g(x)=L$."
      ],
      "explanation": "Teorema apit dapat menangani osilasi yang tidak memiliki limit sendiri, selama amplitudonya terkurung oleh dua fungsi yang menuju nilai sama."
    }
  ],
  "examples": [
    {
      "forDefinition": "Titik Akumulasi Domain",
      "title": "Menguji Titik Akumulasi pada Domain Berlubang",
      "problem": "Tentukan apakah $a=1$ merupakan titik akumulasi $D=\\mathbb R\\setminus\\{1\\}$, lalu bandingkan dengan $a=0$ pada domain hingga $F=\\{0,1\\}$.",
      "solution": [
        "Ambil sebarang $r>0$. Untuk $D$, pilih $x=1+r/2$. Bilangan ini bukan $1$, sehingga $x\\in D$, dan memenuhi $0<|x-1|=r/2<r$. Jadi $1$ titik akumulasi $D$.",
        "Untuk $F$, pilih radius $r=1/2$. Satu-satunya anggota $F$ yang berada dalam $( -1/2,1/2)$ ialah $0$, tetapi definisi mensyaratkan $x\\ne a$.",
        "Tidak ada $x\\in F$ dengan $0<|x-0|<1/2$. Jadi $0$ bukan titik akumulasi $F$, walaupun $0\\in F$."
      ],
      "conclusion": "Keanggotaan suatu titik dalam domain dan sifatnya sebagai titik akumulasi merupakan dua kondisi berbeda."
    },
    {
      "forDefinition": "Lingkungan Berlubang",
      "title": "Membaca Pertidaksamaan Lingkungan Berlubang",
      "problem": "Tuliskan secara eksplisit $U_{1/2}^*(2)$, tentukan apakah $2$, $7/4$, dan $5/2$ termasuk di dalamnya, serta jelaskan peran batas ketat.",
      "solution": [
        "Dari $0<|x-2|<1/2$ diperoleh $3/2<x<5/2$ dengan $x\\ne2$. Jadi $U_{1/2}^*(2)=(3/2,2)\\cup(2,5/2)$.",
        "Titik $2$ tidak termasuk karena $|2-2|=0$ melanggar syarat pertama, sedangkan $7/4$ termasuk karena $0<1/4<1/2$.",
        "Titik $5/2$ tidak termasuk karena jaraknya tepat $1/2$, sementara definisi memakai ketaksamaan ketat $|x-2|<1/2$."
      ],
      "conclusion": "Lingkungan berlubang mengecualikan titik pusat sekaligus kedua ujung radius."
    },
    {
      "forDefinition": "Limit Fungsi melalui Epsilon–Delta",
      "title": "Memilih Delta dari Toleransi Keluaran",
      "problem": "Buktikan dengan definisi bahwa $\\lim_{x\\to2}(3x+1)=7$ ketika toleransi keluaran ditetapkan $\\varepsilon=0.3$, kemudian jelaskan pilihan umum.",
      "solution": [
        "Hitung selisih keluaran: $|(3x+1)-7|=|3x-6|=3|x-2|$. Agar lebih kecil dari $0.3$, cukup memastikan $|x-2|<0.1$.",
        "Pilih $\\delta=0.1$. Setiap $x$ dengan $0<|x-2|<0.1$ memenuhi $|(3x+1)-7|=3|x-2|<3(0.1)=0.3$.",
        "Untuk toleransi umum $\\varepsilon>0$, gunakan $\\delta=\\varepsilon/3$. Karena $\\delta$ positif dan bekerja untuk semua $x$ yang diizinkan, definisi limit terpenuhi."
      ],
      "conclusion": "Pilihan $delta$ harus menjamin ketaksamaan bagi semua masukan yang cukup dekat, bukan hanya satu titik uji."
    },
    {
      "forDefinition": "Limit Satu Sisi",
      "title": "Membuktikan Ketidaksamaan Limit Kiri dan Kanan",
      "problem": "Untuk $f(x)=|x|/x$ pada $D=\\mathbb R\\setminus\\{0\\}$, tentukan limit kiri dan kanan di $0$ serta putuskan apakah limit dua sisi ada.",
      "solution": [
        "Jika $x<0$, maka $|x|=-x$, sehingga $f(x)=-1$. Karena fungsi konstan di sisi kiri, untuk setiap $\\varepsilon>0$ dan sembarang $\\delta>0$ berlaku $|f(x)-(-1)|=0<\\varepsilon$.",
        "Jika $x>0$, maka $|x|=x$, sehingga $f(x)=1$. Dengan alasan serupa, $\\lim_{x\\to0^+}f(x)=1$.",
        "Karena $-1\\ne1$, kriteria dua limit satu sisi menunjukkan limit dua sisi di $0$ tidak ada. Nilai $f(0)$ memang tidak diperlukan dalam pemeriksaan ini."
      ],
      "conclusion": "Dua sisi mendekati titik sama, tetapi nilai keluaran menuju dua bilangan berbeda."
    },
    {
      "forDefinition": "Barisan Domain yang Mendekati Titik",
      "title": "Dua Barisan Menyangkal Limit",
      "problem": "Tunjukkan bahwa fungsi $f(x)=|x|/x$ pada $D=\\mathbb R\\setminus\\{0\\}$ tidak memiliki limit di $0$ menggunakan dua barisan domain berlubang.",
      "solution": [
        "Pilih $x_n=1/n$. Untuk setiap $n\\ge1$, berlaku $x_n\\in D$, $x_n\\ne0$, dan $x_n\\to0$ dari kanan. Namun $f(x_n)=1$ untuk semua $n$, sehingga citranya menuju $1$.",
        "Pilih $y_n=-1/n$. Barisan ini juga berada di $D\\setminus\\{0\\}$ dan menuju $0$, tetapi $f(y_n)=-1$ untuk semua $n$, sehingga citranya menuju $-1$.",
        "Andaikan limit dua sisi $L$ ada. Kriteria barisan mengharuskan kedua barisan citra menuju $L$. Ketunggalan limit barisan memaksa $L=1$ dan $L=-1$, kontradiksi."
      ],
      "conclusion": "Dua jalur barisan dengan limit citra berbeda cukup untuk membantah limit fungsi."
    },
    {
      "forDefinition": "Kontinuitas pada Titik",
      "title": "Membedakan Limit dan Kontinuitas",
      "problem": "Definisikan $g(x)=x+1$ untuk $x\\ne1$ dan $g(1)=9$. Tentukan $\\lim_{x\\to1}g(x)$ dan apakah $g$ kontinu di $1$.",
      "solution": [
        "Untuk $x\\ne1$, berlaku $|g(x)-2|=|x+1-2|=|x-1|$. Dengan memilih $\\delta=\\varepsilon$, definisi limit memberi $\\lim_{x\\to1}g(x)=2$.",
        "Di sisi lain, nilai fungsi pada titik pusat didefinisikan $g(1)=9$. Nilai ini tidak mengubah limit karena lingkungan berlubang mengecualikan $x=1$.",
        "Kontinuitas di $1$ mensyaratkan limit sama dengan nilai fungsi, tetapi $2\\ne9$. Jadi $g$ tidak kontinu di $1$; mengganti $g(1)$ menjadi $2$ akan membuatnya kontinu."
      ],
      "conclusion": "Limit yang ada tidak cukup untuk kontinuitas jika nilai fungsi di titik berbeda."
    },
    {
      "title": "Pembuktian Epsilon–Delta untuk Fungsi Kuadrat",
      "problem": "Buktikan secara langsung bahwa $\\lim_{x\\to2}x^2=4$ dengan pilihan $\\delta$ yang eksplisit dan berlaku untuk semua $\\varepsilon>0$.",
      "solution": [
        "Faktorkan $|x^2-4|=|x-2||x+2|$. Faktor $|x+2|$ belum dibatasi, sehingga terlebih dahulu syaratkan $|x-2|<1$.",
        "Dari $|x-2|<1$ diperoleh $1<x<3$, maka $3<x+2<5$ dan khususnya $|x+2|<5$.",
        "Pilih $\\delta=\\min\\{1,\\varepsilon/5\\}$. Jika $0<|x-2|<\\delta$, maka $|x^2-4|=|x-2||x+2|<5\\delta\\le\\varepsilon$."
      ],
      "conclusion": "Batas tambahan $deltale1$ memungkinkan kita mengontrol faktor kedua sebelum menggunakan $\u000barepsilon$."
    },
    {
      "title": "Teorema Apit untuk Osilasi",
      "problem": "Buktikan bahwa $\\lim_{x\\to0}x\\sin(1/x)=0$ meskipun $\\sin(1/x)$ sendiri tidak memiliki limit ketika $x\\to0$.",
      "solution": [
        "Untuk setiap $x\\ne0$ berlaku $|\\sin(1/x)|\\le1$. Karena itu $|x\\sin(1/x)|\\le|x|$, atau $-|x|\\le x\\sin(1/x)\\le|x|$.",
        "Limit fungsi $|x|$ di $0$ adalah $0$, sebab untuk $\\varepsilon>0$ pilihan $\\delta=\\varepsilon$ memberikan $||x|-0|=|x|<\\varepsilon$. Limit $-|x|$ juga $0$ melalui estimasi yang sama.",
        "Teorema apit pada domain $\\mathbb R\\setminus\\{0\\}$ memberikan $\\lim_{x\\to0}x\\sin(1/x)=0$. Kita tidak pernah mengasumsikan limit $\\sin(1/x)$ ada."
      ],
      "conclusion": "Faktor $x$ mengecilkan amplitudo osilasi sehingga seluruh nilai terjepit menuju nol."
    }
  ],
  "exercises": [
    {
      "prompt": "Buktikan dengan definisi $\\varepsilon$–$\\delta$ bahwa $\\lim_{x\\to-3}(4x-5)=-17$. Jelaskan secara eksplisit kasus $\\varepsilon>0$ sebarang dan mengapa $\\delta$ tidak bergantung pada $x$.",
      "hint": "Faktorkan selisih keluaran menjadi konstanta kali $|x+3|$.",
      "answer": "Ambil sebarang $\\varepsilon>0$ dan pilih $\\delta=\\varepsilon/4>0$. Jika $x\\in\\mathbb R$ memenuhi $0<|x-(-3)|=|x+3|<\\delta$, maka $|(4x-5)-(-17)|=|4x+12|=4|x+3|<4\\delta=\\varepsilon$. Pilihan $\\delta$ hanya bergantung pada toleransi $\\varepsilon$ dan kemiringan $4$, bukan pada nilai $x$ tertentu. Karena ketaksamaan terbukti untuk setiap $x$ dalam lingkungan berlubang tersebut, definisi limit menyatakan $\\lim_{x\\to-3}(4x-5)=-17$. Ketaksamaan ketat muncul dari syarat masukan $|x+3|<\\delta$, bukan dari pemeriksaan beberapa contoh numerik saja."
    },
    {
      "prompt": "Buktikan bahwa $\\lim_{x\\to-1}x^2=1$ dengan memilih $\\delta=\\min\\{1,\\varepsilon/3\\}$. Uraikan mengapa batas $\\delta\\le1$ diperlukan untuk mengontrol faktor $|x-1|$.",
      "hint": "Gunakan $x^2-1=(x+1)(x-1)$ dan ketaksamaan segitiga.",
      "answer": "Ambil $\\varepsilon>0$ dan tetapkan $\\delta=\\min\\{1,\\varepsilon/3\\}>0$. Jika $0<|x+1|<\\delta$, maka $|x+1|<1$. Tulis $x-1=(x+1)-2$, sehingga $|x-1|\\le|x+1|+2<3$. Oleh karena itu $|x^2-1|=|x+1||x-1|<3|x+1|<3\\delta\\le\\varepsilon$. Pengendalian faktor kedua tidak dapat diabaikan: dari kecilnya $|x+1|$ saja belum ada konstanta numerik eksplisit untuk $|x-1|$ sebelum kita membatasi radius. Karena konstruksi ini berlaku untuk setiap $\\varepsilon$, limit terbukti."
    },
    {
      "prompt": "Untuk $f(x)=(x^2-9)/(x-3)$ pada $\\mathbb R\\setminus\\{3\\}$, buktikan bahwa limit di $3$ adalah $6$. Jelaskan mengapa menuliskan $f(3)=6$ tanpa mengubah domain tidak sah.",
      "hint": "Faktorkan pembilang dan gunakan syarat $x\\ne3$ sebelum menyederhanakan.",
      "answer": "Untuk setiap $x\\in D=\\mathbb R\\setminus\\{3\\}$, faktorisasi $x^2-9=(x-3)(x+3)$ memberi $f(x)=x+3$. Ambil $\\varepsilon>0$ dan pilih $\\delta=\\varepsilon$. Jika $x\\in D$ serta $0<|x-3|<\\delta$, maka $|f(x)-6|=|x+3-6|=|x-3|<\\varepsilon$. Jadi $\\lim_{x\\to3}f(x)=6$. Namun $3\\notin D$, sehingga ekspresi $f(3)$ tidak memiliki nilai. Menetapkan nilai $6$ berarti mendefinisikan perluasan fungsi baru pada $D\\cup\\{3\\}$; tindakan itu sah sebagai konstruksi, tetapi bukan hasil substitusi pada fungsi semula."
    },
    {
      "prompt": "Tentukan apakah fungsi $f(x)=0$ untuk $x<0$ dan $f(x)=2$ untuk $x\\ge0$ mempunyai limit dua sisi di $0$. Berikan pembuktian dengan dua barisan dan sebutkan nilai limit kiri serta kanan.",
      "hint": "Ambil $x_n=-1/n$ dan $y_n=1/n$ untuk $n\\ge1$.",
      "answer": "Untuk setiap $n\\ge1$, $x_n=-1/n<0$ dan $y_n=1/n>0$, sedangkan kedua barisan menuju $0$ tanpa pernah sama dengan $0$. Menurut definisi fungsi, $f(x_n)=0$ untuk semua $n$ dan $f(y_n)=2$ untuk semua $n$. Jika limit dua sisi $L$ ada, kriteria barisan mengharuskan $f(x_n)\\to L$ dan $f(y_n)\\to L$. Ketunggalan limit barisan akan memberi $L=0$ sekaligus $L=2$, suatu kontradiksi. Dengan argumen fungsi konstan pada masing-masing sisi, limit kiri adalah $0$ dan limit kanan adalah $2$. Jadi limit dua sisi tidak ada."
    },
    {
      "prompt": "Tunjukkan bahwa fungsi $f(x)=1/x$ pada $\\mathbb R\\setminus\\{0\\}$ tidak memiliki limit hingga ketika $x\\to0$. Gunakan lemma keterbatasan lokal atau suatu barisan eksplisit dan jelaskan alasan kontradiksinya.",
      "hint": "Coba $x_n=1/n$ dan periksa nilai $f(x_n)$.",
      "answer": "Andaikan terdapat $L\\in\\mathbb R$ sehingga $\\lim_{x\\to0}1/x=L$. Menurut lemma keterbatasan lokal, ada $\\delta>0$ dan $M>0$ sehingga $|1/x|<M$ bagi semua $x\\ne0$ dengan $|x|<\\delta$. Sifat Archimedean memungkinkan kita memilih $n\\in\\mathbb N$ dengan $n>\\max\\{M,1/\\delta\\}$. Ambil $x=1/n$. Maka $0<|x|=1/n<\\delta$, tetapi $|1/x|=n>M$, bertentangan dengan batas lokal. Dengan demikian, limit hingga tidak ada. Secara sekuensial, $x_n=1/n\\to0$ tetapi $f(x_n)=n$ tidak konvergen ke bilangan real."
    },
    {
      "prompt": "Misalkan $D=\\{0,1\\}$ dan $f:D\\to\\mathbb R$ didefinisikan oleh $f(0)=7$ dan $f(1)=9$. Jelaskan mengapa tanpa syarat titik akumulasi setiap $L\\in\\mathbb R$ tampak memenuhi implikasi epsilon–delta di $a=0$.",
      "hint": "Gunakan radius $\\delta=1/2$ dan periksa ada tidaknya $x\\in D$ dengan $0<|x|<\\delta$.",
      "answer": "Ambil sebarang bilangan $L\\in\\mathbb R$ dan sebarang $\\varepsilon>0$. Pilih $\\delta=1/2$. Tidak ada $x\\in D=\\{0,1\\}$ yang memenuhi $0<|x-0|<1/2$: titik $0$ dikeluarkan oleh ketaksamaan pertama, sedangkan titik $1$ berjarak $1$. Karena anteseden implikasi selalu salah, pernyataan $0<|x|<\\delta\\implies |f(x)-L|<\\varepsilon$ benar secara vakum untuk setiap $L$. Jika hal ini disebut limit, limit tidak tunggal. Definisi formal menghindari masalah tersebut dengan mensyaratkan $a$ titik akumulasi domain."
    },
    {
      "prompt": "Buktikan bahwa $\\lim_{x\\to0}x^2\\cos(1/x)=0$ untuk domain $\\mathbb R\\setminus\\{0\\}$ menggunakan teorema apit. Sertakan pembuktian singkat limit kedua fungsi pembatas dari definisi.",
      "hint": "Gunakan $-x^2\\le x^2\\cos(1/x)\\le x^2$.",
      "answer": "Untuk $x\\ne0$ berlaku $-1\\le\\cos(1/x)\\le1$. Karena $x^2\\ge0$, perkalian memberi $-x^2\\le x^2\\cos(1/x)\\le x^2$. Untuk membuktikan $\\lim_{x\\to0}x^2=0$, ambil $\\varepsilon>0$ dan $\\delta=\\sqrt{\\varepsilon}>0$. Jika $0<|x|<\\delta$, maka $|x^2|=|x|^2<\\delta^2=\\varepsilon$. Limit $-x^2$ juga $0$ karena $|-x^2|=x^2$. Kedua fungsi pembatas memiliki limit sama, sehingga teorema apit memberikan $\\lim_{x\\to0}x^2\\cos(1/x)=0$. Perilaku osilasi kosinus tidak perlu mempunyai limit sendiri."
    },
    {
      "prompt": "Diberikan $f(x)=x^2$ untuk $x\\ne2$ dan $f(2)=100$. Tentukan limit di $2$, tentukan kontinuitasnya, dan bangun satu fungsi $g$ yang kontinu di $2$ serta sama dengan $f$ di semua titik lain.",
      "hint": "Gunakan teorema perubahan nilai di satu titik dan limit fungsi kuadrat.",
      "answer": "Pada setiap $x\\ne2$, $f(x)=x^2$. Teorema limit fungsi kuadrat menyatakan $\\lim_{x\\to2}x^2=4$, dan proposisi ketidakbergantungan terhadap nilai tepat di titik menjamin $\\lim_{x\\to2}f(x)=4$ meskipun $f(2)=100$. Karena $f(2)\\ne4$, fungsi $f$ tidak kontinu di $2$. Definisikan $g:\\mathbb R\\to\\mathbb R$ dengan $g(x)=x^2$ untuk semua $x$, khususnya $g(2)=4$. Fungsi $g$ sama dengan $f$ pada $\\mathbb R\\setminus\\{2\\}$ dan kontinu di $2$ karena $\\lim_{x\\to2}g(x)=g(2)=4$. Perbaikan ini disebut pengisian diskontinuitas yang dapat dihilangkan."
    }
  ],
  "mistakes": [],
  "connections": []
};
