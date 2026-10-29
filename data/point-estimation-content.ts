import type { BookLessonContent } from "@/data/book-content-types";

/** Authored point-estimation lesson; Hogg–McKean–Craig (2019), Casella–Berger (2002). */
export const pointEstimationContent: BookLessonContent = {
  "intro": [
    "Dalam inferensi statistik, parameter populasi seperti mean $\\mu$ tidak diketahui, tetapi kita mengamati sampel acak $X_1,\\ldots,X_n$. Rumus yang diterapkan pada sampel disebut estimator; bilangan yang diperoleh setelah data masuk disebut estimasi. Dua estimator dapat sama-sama menaksir $\\mu$, tetapi memiliki bias, variasi, dan galat kuadrat yang berbeda. Karena itu, memilih estimator memerlukan kriteria matematis, bukan sekadar melihat apakah sebuah hasil tampak dekat dengan data.",
    "Perhatikan dua prosedur untuk menaksir mean: $\\overline X=n^{-1}\\sum_{i=1}^n X_i$ dan $T_c=c\\overline X+(1-c)\\mu_0$, dengan $\\mu_0$ suatu nilai acuan tetap. Estimator pertama tak bias jika setiap observasi memiliki mean $\\mu$. Estimator kedua biasanya bias, tetapi dapat memiliki mean squared error (MSE) lebih kecil pada nilai parameter tertentu. Kita akan membuktikan kapan hal itu terjadi dan mengapa keunggulan lokal tidak sama dengan keunggulan untuk semua parameter.",
    "Semua pernyataan varians di halaman ini menggunakan momen kedua yang hingga. Saat sampel diasumsikan i.i.d., artinya $X_1,\\ldots,X_n$ saling independen dan berdistribusi identik; asumsi ini akan dinyatakan kembali di setiap hasil yang membutuhkannya. Konsistensi dibedakan dari ketakbiasan: yang pertama berbicara tentang perilaku saat $n\\to\\infty$, sedangkan yang kedua adalah sifat ekspektasi pada ukuran sampel tertentu.",
    "Rujukan: Hogg, McKean, dan Craig, *Introduction to Mathematical Statistics*, edisi ke-8, Pearson, 2019, pembahasan estimasi titik; Casella dan Berger, *Statistical Inference*, edisi ke-2, Duxbury, 2002, Bab 7; Wasserman, *All of Statistics*, Springer, 2004, Bab 6. Soal dan uraian di halaman ini disusun tersendiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Estimator Titik",
      "statement": "Misalkan $X=(X_1,\\ldots,X_n)$ adalah sampel dari keluarga distribusi $\\{P_\\theta:\\theta\\in\\Theta\\}$. Estimator titik untuk parameter real $\\theta$ ialah statistik terukur $T_n=t_n(X_1,\\ldots,X_n)$ yang tidak bergantung pada nilai parameter tak diketahui. Setelah diamati $X=x$, bilangan $t_n(x)$ disebut estimasi titik."
    },
    {
      "kind": "definition",
      "title": "Bias dan Ketakbiasan",
      "statement": "Jika $E_\\theta|T_n|<\\infty$, bias estimator $T_n$ untuk $\\theta$ adalah $b_\\theta(T_n)=E_\\theta[T_n]-\\theta$. Estimator disebut tak bias pada keluarga $\\{P_\\theta:\\theta\\in\\Theta\\}$ apabila $b_\\theta(T_n)=0$ untuk setiap $\\theta\\in\\Theta$. Ketakbiasan pada satu nilai $\\theta$ saja tidak cukup untuk menyebut estimator tak bias pada seluruh keluarga."
    },
    {
      "kind": "definition",
      "title": "Varians dan Galat Kuadrat Rata-rata",
      "statement": "Jika $E_\\theta[T_n^2]<\\infty$, varians estimator ialah $\\operatorname{Var}_\\theta(T_n)=E_\\theta[(T_n-E_\\theta T_n)^2]$, sedangkan galat kuadrat rata-rata terhadap $\\theta$ adalah $\\operatorname{MSE}_\\theta(T_n)=E_\\theta[(T_n-\\theta)^2]$. Kedua besaran berbeda ketika estimator bias."
    },
    {
      "kind": "definition",
      "title": "Konsistensi dalam Probabilitas",
      "statement": "Barisan estimator $(T_n)$ untuk parameter $\\theta$ disebut konsisten dalam probabilitas jika untuk setiap $\\varepsilon>0$ berlaku $\\lim_{n\\to\\infty}P_\\theta(|T_n-\\theta|>\\varepsilon)=0$ bagi setiap $\\theta\\in\\Theta$. Definisi ini tidak mengharuskan $E_\\theta T_n=\\theta$ untuk setiap $n$."
    },
    {
      "kind": "proposition",
      "title": "Dekomposisi MSE",
      "statement": "Jika $E_\\theta[T^2]<\\infty$ dan $\\theta\\in\\mathbb R$, maka $\\operatorname{MSE}_\\theta(T)=\\operatorname{Var}_\\theta(T)+b_\\theta(T)^2$.",
      "proof": [
        "Diketahui $E_\\theta[T^2]<\\infty$. Akibat ketaksamaan Cauchy–Schwarz, $E_\\theta|T|<\\infty$, sehingga $m=E_\\theta[T]$, bias, dan varians semuanya terdefinisi.",
        "Tuliskan $T-\\theta=(T-m)+(m-\\theta)$. Dengan menguadratkan diperoleh $(T-\\theta)^2=(T-m)^2+2(T-m)(m-\\theta)+(m-\\theta)^2$.",
        "Ambil ekspektasi. Karena $E_\\theta[T-m]=0$ dan $m-\\theta$ konstan, suku silang bernilai $2(m-\\theta)E_\\theta[T-m]=0$.",
        "Dengan demikian $E_\\theta[(T-\\theta)^2]=E_\\theta[(T-m)^2]+(m-\\theta)^2=\\operatorname{Var}_\\theta(T)+b_\\theta(T)^2$. Identitas berlaku untuk estimator bias maupun tak bias. Terbukti."
      ],
      "explanation": "Identitas ini memungkinkan perbandingan estimator melalui dua sumber kesalahan yang berbeda: penyebaran estimator dan pergeseran rata-ratanya dari parameter."
    },
    {
      "kind": "theorem",
      "title": "Mean Sampel: Tak Bias dan Variansnya",
      "statement": "Jika $X_1,\\ldots,X_n$ i.i.d. dengan $E[X_i]=\\mu$ dan $\\operatorname{Var}(X_i)=\\sigma^2<\\infty$, maka $\\overline X=n^{-1}\\sum_{i=1}^nX_i$ tak bias untuk $\\mu$, $\\operatorname{Var}(\\overline X)=\\sigma^2/n$, dan $\\operatorname{MSE}_\\mu(\\overline X)=\\sigma^2/n$.",
      "proof": [
        "Diketahui sampel i.i.d. dengan mean $\\mu$ dan varians hingga $\\sigma^2$. Karena $E|X_i|<\\infty$, linearitas ekspektasi dapat diterapkan pada jumlah hingga.",
        "Diperoleh $E[\\overline X]=n^{-1}\\sum_{i=1}^nE[X_i]=n^{-1}(n\\mu)=\\mu$. Jadi bias $\\overline X$ terhadap $\\mu$ sama dengan nol.",
        "Untuk varians, $\\operatorname{Var}(\\sum_iX_i)=\\sum_i\\operatorname{Var}(X_i)+2\\sum_{i<j}\\operatorname{Cov}(X_i,X_j)$. Independensi menyebabkan semua kovarians silang nol.",
        "Karena varians setiap $X_i$ sama dengan $\\sigma^2$, diperoleh $\\operatorname{Var}(\\overline X)=n^{-2}(n\\sigma^2)=\\sigma^2/n$. Dekomposisi MSE dengan bias nol memberikan $\\operatorname{MSE}_\\mu(\\overline X)=\\sigma^2/n$. Terbukti."
      ],
      "explanation": "Tanpa independensi, suku kovarians tidak boleh dihapus. Tanpa momen kedua hingga, rumus varians tidak dapat digunakan."
    },
    {
      "kind": "theorem",
      "title": "Varians Sampel Tak Bias",
      "statement": "Jika $n\\ge2$ dan $X_1,\\ldots,X_n$ i.i.d. dengan mean $\\mu$ serta varians $\\sigma^2<\\infty$, maka $S^2=\\frac{1}{n-1}\\sum_{i=1}^n(X_i-\\overline X)^2$ memenuhi $E[S^2]=\\sigma^2$.",
      "proof": [
        "Diketahui $n\\ge2$ dan sampel i.i.d. dengan momen kedua hingga. Dari $X_i-\\overline X=(X_i-\\mu)-(\\overline X-\\mu)$, pengembangan kuadrat dan $\\sum_i(X_i-\\mu)=n(\\overline X-\\mu)$ menghasilkan identitas $\\sum_i(X_i-\\overline X)^2=\\sum_i(X_i-\\mu)^2-n(\\overline X-\\mu)^2$.",
        "Ambil ekspektasi pada kedua ruas. Karena $E[(X_i-\\mu)^2]=\\sigma^2$, suku pertama mempunyai ekspektasi $n\\sigma^2$.",
        "Menurut teorema mean sampel, $E[(\\overline X-\\mu)^2]=\\operatorname{Var}(\\overline X)=\\sigma^2/n$. Jadi $E[\\sum_i(X_i-\\overline X)^2]=n\\sigma^2-n(\\sigma^2/n)=(n-1)\\sigma^2$.",
        "Karena $n-1>0$, pembagian oleh $n-1$ memberikan $E[S^2]=\\sigma^2$. Dengan demikian penyebut $n-1$ menghasilkan estimator tak bias untuk varians populasi. Terbukti."
      ],
      "explanation": "Penyebut $n$ akan memberikan ekspektasi $(n-1)sigma^2/n$, sehingga pada umumnya bias ke bawah."
    },
    {
      "kind": "theorem",
      "title": "Konsistensi Mean Sampel",
      "statement": "Jika $X_1,X_2,\\ldots$ i.i.d. dengan mean $\\mu$ dan varians $\\sigma^2<\\infty$, maka $\\overline X_n=n^{-1}\\sum_{i=1}^nX_i$ konvergen dalam probabilitas ke $\\mu$.",
      "proof": [
        "Diketahui $X_i$ i.i.d. dengan varians hingga. Untuk setiap $n$, teorema mean sampel memberi $E[\\overline X_n]=\\mu$ dan $\\operatorname{Var}(\\overline X_n)=\\sigma^2/n$.",
        "Ambil sebarang $\\varepsilon>0$. Ketaksamaan Chebyshev berlaku karena varians $\\overline X_n$ hingga, sehingga $P(|\\overline X_n-\\mu|\\ge\\varepsilon)\\le\\operatorname{Var}(\\overline X_n)/\\varepsilon^2=\\sigma^2/(n\\varepsilon^2)$.",
        "Peluang $P(|\\overline X_n-\\mu|>\\varepsilon)$ tidak melebihi peluang dengan tanda $\\ge$, dan karenanya juga dibatasi oleh $\\sigma^2/(n\\varepsilon^2)$.",
        "Karena $\\sigma^2$ dan $\\varepsilon$ tetap, batas atas menuju nol saat $n\\to\\infty$. Dengan prinsip apit, $P(|\\overline X_n-\\mu|>\\varepsilon)\\to0$. Definisi konsistensi terpenuhi. Terbukti."
      ],
      "explanation": "Hasil ini merupakan bentuk hukum bilangan besar lemah dengan asumsi varians hingga; ia tidak mengatakan bahwa semua realisasi sampel sama dengan mean."
    },
    {
      "kind": "proposition",
      "title": "Optimalitas Mean di Antara Estimator Linear Tak Bias",
      "statement": "Misalkan $X_1,\\ldots,X_n$ saling independen, masing-masing mempunyai mean $\\mu$ dan varians yang sama $\\sigma^2>0$. Untuk bobot tetap $a_1,\\ldots,a_n$ dengan $\\sum_ia_i=1$, estimator $T=\\sum_ia_iX_i$ tak bias dan $\\operatorname{Var}(T)\\ge\\sigma^2/n$. Kesamaan berlaku jika dan hanya jika $a_i=1/n$ untuk semua $i$.",
      "proof": [
        "Diketahui $E[X_i]=\\mu$, $\\operatorname{Var}(X_i)=\\sigma^2>0$, dan $\\sum_i a_i=1$. Linearitas ekspektasi memberi $E[T]=\\sum_i a_i\\mu=\\mu$, sehingga $T$ tak bias.",
        "Independensi dan varians bersama memberikan $\\operatorname{Var}(T)=\\sum_i a_i^2\\sigma^2=\\sigma^2\\sum_i a_i^2$.",
        "Ketaksamaan Cauchy–Schwarz untuk vektor $(a_1,\\ldots,a_n)$ dan $(1,\\ldots,1)$ memberi $(\\sum_i a_i)^2\\le(\\sum_i a_i^2)(\\sum_i1^2)=n\\sum_i a_i^2$. Karena jumlah bobot satu, $\\sum_i a_i^2\\ge1/n$.",
        "Dengan mengalikan oleh $\\sigma^2>0$, diperoleh $\\operatorname{Var}(T)\\ge\\sigma^2/n$. Kesamaan Cauchy–Schwarz terjadi tepat ketika semua $a_i$ sama; karena jumlahnya satu, masing-masing harus $1/n$. Dengan demikian mean sampel adalah satu-satunya peminimum varians dalam kelas bobot tersebut. Terbukti."
      ],
      "explanation": "Kesimpulan hanya berlaku dalam kelas estimator linear berbobot tetap yang tak bias dan memenuhi asumsi varians bersama; bukan klaim bahwa mean selalu estimator terbaik tanpa syarat."
    },
    {
      "kind": "proposition",
      "title": "Risiko Estimator Penyusutan ke Nilai Acuan",
      "statement": "Jika $X_1,\\ldots,X_n$ i.i.d. dengan mean $\\mu$, varians $\\sigma^2<\\infty$, dan $\\mu_0$ konstan, maka untuk $T_c=c\\overline X+(1-c)\\mu_0$, $c\\in[0,1]$, berlaku $\\operatorname{MSE}_\\mu(T_c)=c^2\\sigma^2/n+(1-c)^2(\\mu_0-\\mu)^2$. Jika $\\sigma^2/n+(\\mu_0-\\mu)^2>0$, minimumnya dicapai tepat pada $c_*=\\frac{(\\mu_0-\\mu)^2}{(\\mu_0-\\mu)^2+\\sigma^2/n}$. Jika kedua suku nol, setiap $c$ optimal.",
      "proof": [
        "Diketahui $\\mu_0$ tetap dan $c\\in[0,1]$. Dari linearitas ekspektasi, $E[T_c]=c\\mu+(1-c)\\mu_0$, sehingga bias terhadap $\\mu$ adalah $(1-c)(\\mu_0-\\mu)$.",
        "Karena $\\mu_0$ konstan, $\\operatorname{Var}(T_c)=c^2\\operatorname{Var}(\\overline X)=c^2\\sigma^2/n$. Dengan dekomposisi MSE diperoleh fungsi risiko $R(c)=Ac^2+B(1-c)^2$, dengan $A=\\sigma^2/n\\ge0$ dan $B=(\\mu_0-\\mu)^2\\ge0$.",
        "Jika $A+B>0$, penyelesaian kuadrat memberi $R(c)=(A+B)(c-B/(A+B))^2+AB/(A+B)$. Karena $0\\le B/(A+B)\\le1$, minimizer unik pada $c_*=B/(A+B)$ dan nilai minimumnya $AB/(A+B)$.",
        "Jika $A+B=0$, nonnegativitas $A,B$ memaksa $A=B=0$, sehingga $R(c)=0$ untuk seluruh $c\\in[0,1]$. Dengan demikian kedua kasus telah dicakup. Terbukti."
      ],
      "explanation": "Koefisien optimum melibatkan $mu$ yang biasanya tidak diketahui. Karena itu rumus ini adalah perbandingan risiko teoretis pada parameter tertentu, bukan algoritma yang otomatis dapat diterapkan tanpa estimasi tambahan."
    }
  ],
  "examples": [
    {
      "title": "Contoh Estimator dan Estimasi",
      "problem": "Untuk sampel numerik $(2,4,7)$, bedakan estimator mean sampel dengan estimasi yang dihasilkan; jelaskan mengapa konstanta yang ditentukan setelah melihat data bukan definisi estimator yang tepat.",
      "solution": [
        "Diketahui tiga observasi $x_1=2,x_2=4,x_3=7$. Estimator sebelum data diamati adalah fungsi statistik $\\overline X=(X_1+X_2+X_3)/3$; rumusnya ditentukan untuk seluruh sampel yang mungkin, bukan hanya sampel ini.",
        "Setelah data dimasukkan, diperoleh estimasi $\\overline x=(2+4+7)/3=13/3$. Bilangan $13/3$ adalah realisasi estimator, bukan variabel acak.",
        "Sebagai pembanding, statistik $T=(X_1+2X_2+X_3)/4$ juga estimator yang sah karena merupakan fungsi terukur dari sampel, tetapi estimasinya $(2+8+7)/4=17/4$. Keduanya tidak otomatis mempunyai sifat risiko yang sama.",
        "Kesimpulannya, istilah estimator merujuk pada aturan berbasis sampel, sedangkan estimasi merujuk pada angka hasil aturan itu untuk data yang diberikan."
      ],
      "forDefinition": "Estimator Titik"
    },
    {
      "title": "Contoh Bias pada Bernoulli",
      "problem": "Jika $X_1,\\ldots,X_n$ i.i.d. Bernoulli$(p)$, bandingkan bias $\\widehat p=\\overline X$ dan $T=(n\\overline X+1)/(n+2)$ untuk $p\\in[0,1]$.",
      "solution": [
        "Diketahui $E[X_i]=p$ dan sampel i.i.d. Dari linearitas ekspektasi, $E[\\overline X]=p$, sehingga $\\widehat p$ tak bias pada seluruh $p\\in[0,1]$.",
        "Untuk estimator kedua, $E[T]=(np+1)/(n+2)$. Kurangi dengan parameter $p$: $b_p(T)=(np+1)/(n+2)-p=(1-2p)/(n+2)$.",
        "Bias $T$ bernilai nol hanya ketika $p=1/2$ dan positif untuk $p<1/2$, negatif untuk $p>1/2$. Karena definisi ketakbiasan menuntut bias nol pada setiap nilai parameter, $T$ tidak tak bias pada seluruh keluarga Bernoulli.",
        "Pemeriksaan batas: pada $p=0$, bias $1/(n+2)$; pada $p=1$, bias $-1/(n+2)$. Kedua hasil konsisten dengan arah penyusutan estimator menuju $1/2$."
      ],
      "forDefinition": "Bias dan Ketakbiasan"
    },
    {
      "title": "Contoh Varians dan MSE Berbeda",
      "problem": "Jika $X$ mempunyai mean $3$ dan varians $4$, bandingkan MSE $T_1=X$ dan $T_2=(X+3)/2$ untuk menaksir parameter $\\theta=3$.",
      "solution": [
        "Diketahui $E[X]=3$, $\\operatorname{Var}(X)=4$, dan target $\\theta=3$. Untuk $T_1=X$, bias nol sehingga $\\operatorname{MSE}_3(T_1)=\\operatorname{Var}(X)=4$.",
        "Untuk $T_2=(X+3)/2$, linearitas memberi $E[T_2]=(3+3)/2=3$, sehingga estimator ini juga tak bias pada parameter yang ditentukan. Variansnya adalah $\\operatorname{Var}(T_2)=\\operatorname{Var}(X)/4=1$.",
        "Dekomposisi MSE memberikan $\\operatorname{MSE}_3(T_2)=1+0^2=1$. Karena $1<4$, estimator kedua memiliki MSE lebih kecil pada model ini.",
        "Perlu dibedakan: jika mean sebenarnya bukan $3$, konstanta acuan pada $T_2$ dapat menimbulkan bias. Jadi keunggulan yang dihitung bersifat bergantung pada parameter."
      ],
      "forDefinition": "Varians dan Galat Kuadrat Rata-rata"
    },
    {
      "title": "Contoh Konsistensi yang Tetap Bias",
      "problem": "Misalkan $X_i$ i.i.d. dengan mean $\\mu$ dan varians hingga $\\sigma^2$. Tunjukkan bahwa $T_n=\\overline X_n+1/n$ konsisten meskipun bias untuk setiap $n$.",
      "solution": [
        "Diketahui $E[\\overline X_n]=\\mu$ dan $\\operatorname{Var}(\\overline X_n)=\\sigma^2/n$. Karena $1/n$ konstan, $E[T_n]=\\mu+1/n$, sehingga bias $T_n$ adalah $1/n\\ne0$ untuk setiap $n$ berhingga.",
        "Varians $T_n$ sama dengan $\\sigma^2/n$. Dekomposisi MSE menghasilkan $E[(T_n-\\mu)^2]=\\sigma^2/n+1/n^2$, yang menuju nol ketika $n\\to\\infty$.",
        "Untuk sebarang $\\varepsilon>0$, ketaksamaan Markov pada peubah taknegatif $(T_n-\\mu)^2$ memberi $P(|T_n-\\mu|>\\varepsilon)\\le E[(T_n-\\mu)^2]/\\varepsilon^2$. Ruas kanan menuju nol.",
        "Maka $T_n$ konsisten dalam probabilitas tetapi tidak tak bias pada ukuran sampel berhingga. Contoh ini membuktikan bahwa kedua sifat tersebut tidak ekuivalen."
      ],
      "forDefinition": "Konsistensi dalam Probabilitas"
    },
    {
      "title": "Contoh Perhitungan Varians Sampel",
      "problem": "Untuk data $1,2,4,5$, hitung $\\overline x$, jumlah kuadrat deviasi, varians dengan penyebut $n$ dan varians sampel dengan penyebut $n-1$.",
      "solution": [
        "Diketahui $n=4$ dan jumlah data $1+2+4+5=12$, sehingga $\\overline x=12/4=3$. Deviasi terhadap mean adalah $-2,-1,1,2$.",
        "Kuadrat deviasinya berturut-turut $4,1,1,4$; jumlahnya $10$. Jika dibagi oleh $n=4$, diperoleh $10/4=5/2$.",
        "Varians sampel dengan koreksi derajat bebas adalah $s^2=10/(4-1)=10/3$. Perbedaan $10/3-5/2=5/6$ muncul karena penyebut berbeda.",
        "Angka $10/3$ adalah realisasi estimator $S^2$ yang tak bias di bawah model i.i.d. dengan varians hingga; angka itu bukan klaim bahwa varians populasi pasti $10/3$."
      ]
    },
    {
      "title": "Contoh Estimator Linear Berbobot",
      "problem": "Untuk dua pengamatan independen dengan varians sama $\\sigma^2>0$, tentukan bobot $a$ yang meminimalkan varians $T=aX_1+(1-a)X_2$.",
      "solution": [
        "Diketahui $E[X_1]=E[X_2]=\\mu$, varians keduanya $\\sigma^2>0$, dan keduanya independen. Untuk semua $a\\in\\mathbb R$, jumlah bobot adalah $a+(1-a)=1$, sehingga $E[T]=\\mu$.",
        "Independensi memberikan $\\operatorname{Var}(T)=\\sigma^2[a^2+(1-a)^2]$. Lengkapi kuadrat: $a^2+(1-a)^2=2(a-1/2)^2+1/2$.",
        "Karena suku kuadrat tidak negatif dan $\\sigma^2>0$, varians minimum adalah $\\sigma^2/2$ tepat ketika $a=1/2$. Pada bobot ini, $T=(X_1+X_2)/2$.",
        "Verifikasi: untuk $a=0$, varians $\\sigma^2$; untuk $a=1/2$, varians $\\sigma^2/2$. Jadi menggabungkan dua observasi independen secara seimbang mengurangi varians."
      ]
    },
    {
      "title": "Contoh Risiko Penyusutan",
      "problem": "Jika $n=9$, $\\sigma^2=9$, $\\mu=5$, dan nilai acuan $\\mu_0=4$, cari koefisien $c$ yang meminimalkan MSE $T_c=c\\overline X+(1-c)4$.",
      "solution": [
        "Diketahui varians mean sampel $A=\\sigma^2/n=9/9=1$, dan kuadrat jarak acuan $B=(\\mu_0-\\mu)^2=(4-5)^2=1$.",
        "Menurut proposisi penyusutan, $R(c)=Ac^2+B(1-c)^2=c^2+(1-c)^2=2(c-1/2)^2+1/2$.",
        "Nilai minimum $1/2$ dicapai pada $c=1/2$. Sebaliknya estimator tanpa penyusutan $c=1$ mempunyai MSE $1$, sedangkan estimator konstan $c=0$ juga mempunyai MSE $1$.",
        "Kesimpulannya, pada parameter $\\mu=5$ penyusutan setengah ke acuan $4$ menurunkan risiko dari $1$ menjadi $1/2$. Namun $c$ optimum menggunakan $\\mu$ yang tidak diketahui, sehingga tidak dapat langsung dipilih dari data tanpa prosedur tambahan."
      ]
    },
    {
      "title": "Contoh Kontra-Ilustrasi Optimalitas Global",
      "problem": "Bandingkan estimator konstan $T_0=0$ dengan $\\overline X$ pada keluarga distribusi dengan mean $\\mu$ dan varians $4$, menggunakan sampel i.i.d. berukuran $n=16$.",
      "solution": [
        "Diketahui $\\operatorname{Var}(X_i)=4$ dan $n=16$. Mean sampel tak bias sehingga $\\operatorname{MSE}_\\mu(\\overline X)=4/16=1/4$ untuk setiap $\\mu$.",
        "Estimator konstan $T_0=0$ mempunyai varians nol dan bias $-\\mu$, sehingga $\\operatorname{MSE}_\\mu(T_0)=\\mu^2$.",
        "Jika $\\mu=0$, risiko estimator konstan nol dan lebih kecil daripada $1/4$. Jika $\\mu=1$, risikonya $1$, lebih besar daripada $1/4$. Kedua hasil berasal dari estimator yang sama tetapi nilai parameter berbeda.",
        "Dengan demikian, satu estimator dapat lebih baik pada sebagian parameter dan lebih buruk pada parameter lain. Menyatakan suatu estimator terbaik memerlukan kelas pembanding dan kriteria risiko yang eksplisit."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "E-01. Untuk sampel Bernoulli $(1,0,1,1,0)$ dengan parameter $p$, tentukan estimasi $\\widehat p=\\overline x$, bias, varians, dan MSE estimator $\\overline X$ sebelum data diamati.",
      "hint": "Pisahkan hasil numerik sampel dari sifat distribusi estimator.",
      "answer": "Diketahui $n=5$ dan data mengandung tiga keberhasilan. Estimasi yang diperoleh adalah $\\overline x=(1+0+1+1+0)/5=3/5$. Sebelum data diamati, $\\overline X=5^{-1}\\sum_{i=1}^5X_i$ adalah estimator acak. Karena $X_i$ i.i.d. Bernoulli$(p)$, berlaku $E[X_i]=p$ dan $\\operatorname{Var}(X_i)=p(1-p)$. Oleh karena itu $E[\\overline X]=p$, sehingga bias nol pada setiap $p\\in[0,1]$. Independensi memberi $\\operatorname{Var}(\\overline X)=p(1-p)/5$, dan karena bias nol, $\\operatorname{MSE}_p(\\overline X)=p(1-p)/5$. Nilai $3/5$ adalah estimasi dari data, bukan pengganti parameter $p$ dalam identitas risiko yang berlaku untuk seluruh keluarga.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-02. Hitung $\\overline x$, $s^2$, dan varians dengan penyebut $n$ untuk data $1,2,4,5$. Jelaskan mengapa $s^2$ memakai $n-1$.",
      "hint": "Gunakan identitas jumlah kuadrat deviasi dan perhatikan syarat n≥2.",
      "answer": "Diketahui data $1,2,4,5$ dengan $n=4$. Mean sampel adalah $\\overline x=(1+2+4+5)/4=3$. Deviasi dari mean ialah $-2,-1,1,2$, sehingga jumlah kuadrat deviasi $4+1+1+4=10$. Varians dengan penyebut $n$ bernilai $10/4=5/2$, sedangkan varians sampel $s^2=10/(4-1)=10/3$. Di bawah sampel i.i.d. dengan varians populasi $\\sigma^2<\\infty$, identitas $\\sum_i(X_i-\\overline X)^2=\\sum_i(X_i-\\mu)^2-n(\\overline X-\\mu)^2$ memberi ekspektasi jumlah kuadrat $(n-1)\\sigma^2$. Karena itu pembagian dengan $n-1$, bukan $n$, membuat $E[S^2]=\\sigma^2$. Angka $10/3$ tetap hanya taksiran dari satu sampel.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-03. Jika $X_1,X_2$ independen dengan mean $\\mu$ dan varians sama $\\sigma^2>0$, tentukan seluruh $a\\in\\mathbb R$ yang meminimalkan varians estimator $T_a=aX_1+(1-a)X_2$.",
      "hint": "Lengkapi kuadrat; periksa ketakbiasan dan kasus kesamaan.",
      "answer": "Diketahui dua observasi independen dengan mean sama $\\mu$ dan varians $\\sigma^2>0$. Untuk setiap $a$, $E[T_a]=a\\mu+(1-a)\\mu=\\mu$, sehingga seluruh estimator dalam kelas ini tak bias. Karena independensi, $\\operatorname{Var}(T_a)=a^2\\sigma^2+(1-a)^2\\sigma^2=\\sigma^2[2(a-1/2)^2+1/2]$. Suku $2\\sigma^2(a-1/2)^2$ selalu nonnegatif dan sama dengan nol tepat ketika $a=1/2$, sebab $\\sigma^2>0$. Jadi peminimum unik adalah $a=1/2$ dengan varians minimum $\\sigma^2/2$. Sebagai verifikasi, $a=0$ atau $a=1$ menghasilkan varians $\\sigma^2$, lebih besar daripada $\\sigma^2/2$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-04. Untuk $X\\sim\\operatorname{Bernoulli}(p)$, $p\\in[0,1]$, estimator $T=2X-1$ digunakan menaksir $p$. Hitung bias, varians, MSE, dan nilainya ketika $p=1/4$.",
      "hint": "Gunakan E[X]=p dan Var(X)=p(1−p).",
      "answer": "Diketahui $X\\sim\\operatorname{Bernoulli}(p)$ dan $T=2X-1$. Karena $E[X]=p$, maka $E[T]=2p-1$ dan bias $b_p(T)=E[T]-p=p-1$. Varians tidak berubah oleh translasi konstanta dan dikalikan kuadrat faktor skala, sehingga $\\operatorname{Var}(T)=4p(1-p)$. Identitas MSE memberikan $\\operatorname{MSE}_p(T)=4p(1-p)+(p-1)^2$. Pada $p=1/4$, bias $-3/4$, varians $4(1/4)(3/4)=3/4$, dan MSE $3/4+9/16=21/16$. Pemeriksaan langsung: $T=1$ dengan peluang $1/4$ dan $T=-1$ dengan peluang $3/4$; maka $E[(T-1/4)^2]=(1/4)(3/4)^2+(3/4)(-5/4)^2=9/64+75/64=84/64=21/16$, sesuai hasil dekomposisi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-05. Diketahui $n=9$, $\\sigma^2=9$, $\\mu=5$, $\\mu_0=4$. Tentukan $c\\in[0,1]$ yang meminimalkan MSE $T_c=c\\overline X+(1-c)\\mu_0$ dan bandingkan dengan $c=0,1$.",
      "hint": "Tuliskan risiko sebagai kuadrat sempurna.",
      "answer": "Diketahui varians mean sampel $\\sigma^2/n=9/9=1$ dan kuadrat jarak acuan $(\\mu_0-\\mu)^2=(4-5)^2=1$. Untuk $c\\in[0,1]$, dekomposisi bias–varians memberikan $R(c)=c^2+(1-c)^2=2(c-1/2)^2+1/2$. Karena kuadrat tidak negatif, risiko minimum $1/2$ terjadi tepat pada $c=1/2$. Substitusi batas memberi $R(0)=1$ dan $R(1)=1$. Jadi $c=1/2$ lebih baik pada parameter yang ditentukan. Hasil ini bukan pemilihan koefisien yang dapat dilakukan tanpa mengetahui $\\mu$, sebab rumus $c_*$ secara umum bergantung pada parameter yang sedang ditaksir.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-06. Untuk sampel i.i.d. Bernoulli$(0{,}4)$, tentukan batas atas Chebyshev bagi $P(|\\overline X_n-0{,}4|\\ge0{,}1)$ dan ukuran sampel minimum yang membuat batas tersebut tidak lebih dari $0{,}01$.",
      "hint": "Varians Bernoulli p(1−p); jangan menganggap batas Chebyshev sebagai peluang eksak.",
      "answer": "Diketahui $p=0{,}4$, sehingga $\\operatorname{Var}(X_i)=p(1-p)=0{,}4(0{,}6)=0{,}24$. Karena sampel i.i.d., $\\operatorname{Var}(\\overline X_n)=0{,}24/n$ dan mean $\\overline X_n$ adalah $0{,}4$. Untuk $\\varepsilon=0{,}1$, Chebyshev memberikan $P(|\\overline X_n-0{,}4|\\ge0{,}1)\\le(0{,}24/n)/(0{,}1)^2=24/n$. Agar batas ini tidak lebih dari $0{,}01$, perlu $24/n\\le0{,}01$, yaitu $n\\ge2400$. Ukuran sampel bilangan bulat minimum menurut kriteria batas Chebyshev tersebut adalah $2400$. Ini jaminan konservatif, bukan perhitungan peluang binomial eksak.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-07. Pada keluarga i.i.d. dengan mean $\\mu$ dan varians $4$, bandingkan MSE $\\overline X_n$ dan estimator konstan $T_0=0$ ketika $n=16$ untuk $\\mu=0$ serta $\\mu=1$.",
      "hint": "Risiko estimator konstan bergantung pada parameter.",
      "answer": "Diketahui $\\operatorname{Var}(X_i)=4$ dan $n=16$. Mean sampel tak bias untuk $\\mu$, sehingga $\\operatorname{MSE}_\\mu(\\overline X_n)=4/16=1/4$ untuk semua nilai $\\mu$. Estimator konstan $T_0=0$ mempunyai varians nol, mean nol, dan bias $-\\mu$, sehingga $\\operatorname{MSE}_\\mu(T_0)=\\mu^2$. Ketika $\\mu=0$, risiko konstan nol sedangkan risiko mean $1/4$; jadi estimator konstan lebih baik di titik itu. Ketika $\\mu=1$, risiko konstan satu sedangkan risiko mean tetap $1/4$; jadi mean sampel lebih baik. Karena urutan risiko berubah dengan parameter, tidak ada dominasi seragam di antara kedua estimator berdasarkan dua titik ini.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "E-08. Misalkan $X_i$ i.i.d. dengan mean $\\mu$ dan varians $\\sigma^2<\\infty$. Buktikan bahwa $T_n=\\overline X_n+1/n$ konsisten tetapi bias untuk setiap $n$.",
      "hint": "Hitung bias, varians, MSE, lalu gunakan Markov pada galat kuadrat.",
      "answer": "Diketahui sampel i.i.d. dengan mean $\\mu$ dan varians hingga. Karena $E[\\overline X_n]=\\mu$, maka $E[T_n]=\\mu+1/n$, sehingga $b_\\mu(T_n)=1/n\\ne0$ untuk setiap $n\\ge1$. Penambahan konstanta tidak mengubah varians, jadi $\\operatorname{Var}(T_n)=\\sigma^2/n$. Dekomposisi MSE memberi $E[(T_n-\\mu)^2]=\\sigma^2/n+1/n^2\\to0$. Untuk setiap $\\varepsilon>0$, peubah $(T_n-\\mu)^2$ taknegatif dan integrabel; ketaksamaan Markov menghasilkan $P(|T_n-\\mu|>\\varepsilon)\\le(\\sigma^2/n+1/n^2)/\\varepsilon^2\\to0$. Dengan demikian $T_n$ konsisten dalam probabilitas meskipun tidak tak bias untuk satu pun ukuran sampel berhingga. Kedua sifat harus dibedakan.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
