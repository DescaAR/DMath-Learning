import type { BookLessonContent } from "@/data/book-content-types";

/** Carefully reviewed simple-versus-simple hypothesis testing; no generated rubric answers. */
export const neymanPearsonContent:BookLessonContent={
  "intro": [
    "Dalam pengujian dua hipotesis sederhana, pemilihan daerah penolakan tidak cukup hanya mempertimbangkan apakah suatu data tampak tidak lazim menurut hipotesis nol. Di antara seluruh aturan dengan peluang salah menolak hipotesis nol yang dibatasi, kita ingin aturan dengan peluang mendeteksi alternatif sebesar mungkin.",
    "Misalkan satu pengamatan $X$ mempunyai fungsi massa atau kepadatan $f_0$ di bawah $H_0$ dan $f_1$ di bawah $H_1$, keduanya terhadap ukuran acuan yang sama. Perbandingan $f_1(x)/f_0(x)$ mengukur seberapa kuat hasil $x$ mendukung alternatif dibandingkan nol. Pada ruang diskret, batas taraf signifikansi sering memerlukan pengacakan di titik dengan rasio yang sama.",
    "Materi ini membuktikan secara lengkap optimalitas uji rasio likelihood, termasuk aturan pada titik dengan probabilitas nol di bawah hipotesis nol, pengacakan di batas, dan batasan bahwa hasilnya berlaku untuk dua hipotesis sederhana yang ditentukan. Penurunan mengikuti prinsip pengujian dalam Casella dan Berger, Statistical Inference (2002), serta Lehmann dan Romano, Testing Statistical Hypotheses (2005)."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Hipotesis Sederhana dan Model Terdominasi",
      "statement": "Dua hipotesis $H_0:P=P_0$ dan $H_1:P=P_1$ disebut sederhana apabila masing-masing menentukan satu distribusi probabilitas. Model terdominasi berarti terdapat ukuran $\\mu$ pada ruang pengamatan $(\\mathcal X,\\mathcal A)$ dan fungsi terukur $f_0,f_1\\geq0$ sehingga $P_j(A)=\\int_A f_j\\,d\\mu$ untuk $j=0,1$ dan semua $A\\in\\mathcal A$. Dalam kasus diskret, $\\mu$ dapat berupa ukuran hitung."
    },
    {
      "kind": "definition",
      "title": "Fungsi Uji Teracak",
      "statement": "Fungsi uji adalah fungsi terukur $\\phi:\\mathcal X\\to[0,1]$. Setelah mengamati $X=x$, hipotesis nol ditolak dengan probabilitas $\\phi(x)$; uji deterministik mempunyai nilai hanya $0$ atau $1$. Ukuran (size) uji ialah $E_0[\\phi(X)]$ dan power terhadap alternatif sederhana ialah $E_1[\\phi(X)]$. Uji bertaraf $\\alpha$ memenuhi $E_0[\\phi]\\leq\\alpha$."
    },
    {
      "kind": "definition",
      "title": "Rasio Likelihood yang Diperluas",
      "statement": "Untuk dua densitas $f_0,f_1$, definisikan $\\Lambda(x)=f_1(x)/f_0(x)$ apabila $f_0(x)>0$; tetapkan $\\Lambda(x)=+\\infty$ jika $f_0(x)=0<f_1(x)$, dan $\\Lambda(x)=0$ jika $f_0(x)=f_1(x)=0$. Nilai pada himpunan tempat kedua densitas nol tidak memengaruhi size maupun power."
    },
    {
      "kind": "definition",
      "title": "Uji Rasio Likelihood dan Uji Paling Kuat",
      "statement": "Untuk $k\\geq0$ dan $\\gamma\\in[0,1]$, uji rasio likelihood ialah $\\phi_{k,\\gamma}(x)=1$ jika $f_1(x)>kf_0(x)$, $\\phi_{k,\\gamma}(x)=\\gamma$ jika $f_1(x)=kf_0(x)$, dan $\\phi_{k,\\gamma}(x)=0$ jika $f_1(x)<kf_0(x)$. Uji $\\phi^*$ disebut paling kuat (most powerful) pada taraf $\\alpha$ untuk $H_1$ jika $E_0[\\phi^*]\\leq\\alpha$ dan $E_1[\\phi^*]\\geq E_1[\\psi]$ untuk setiap uji $\\psi$ dengan $E_0[\\psi]\\leq\\alpha$."
    },
    {
      "kind": "lemma",
      "title": "Keberadaan Ambang dengan Ukuran Tepat",
      "statement": "Untuk dua distribusi sederhana terdominasi $P_0,P_1$ dan setiap $0<\\alpha<1$, terdapat $k\\geq0$ dan $\\gamma\\in[0,1]$ sehingga uji rasio likelihood $\\phi_{k,\\gamma}$ mempunyai ukuran tepat $\\alpha$.",
      "proof": [
        "Diketahui rasio likelihood diperluas $\\Lambda$. Di bawah $P_0$, $\\Lambda$ bernilai hingga hampir pasti: himpunan tempat $f_0=0$ mempunyai probabilitas $P_0$ nol. Karena $\\Lambda\\geq0$, fungsi $t\\mapsto P_0(\\Lambda>t)$ tidak naik dan menuju nol ketika $t\\to\\infty$.",
        "Definisikan $k=\\inf\\{t\\geq0:P_0(\\Lambda>t)\\leq\\alpha\\}$. Himpunan di dalam infimum tidak kosong, sehingga $k$ hingga. Ambil barisan $t_n\\downarrow k$ dari himpunan tersebut; kontinuitas probabilitas dari bawah pada kejadian $\\{\\Lambda>t_n\\}$ memberi $P_0(\\Lambda>k)\\leq\\alpha$.",
        "Jika $k>0$, ambil $s_n\\uparrow k$ dengan $s_n<k$. Berdasarkan definisi infimum, $P_0(\\Lambda>s_n)>\\alpha$. Kontinuitas probabilitas dari atas memberi $P_0(\\Lambda\\geq k)\\geq\\alpha$. Jika $k=0$, ketaksamaan terakhir juga berlaku karena $P_0(\\Lambda\\geq0)=1$.",
        "Tuliskan $p_>=P_0(\\Lambda>k)$ dan $p_=P_0(\\Lambda=k)$. Telah diperoleh $p_>\\leq\\alpha\\leq p_>+p_=$. Jika $p_=>0$, pilih $\\gamma=(\\alpha-p_>)/p_=$, yang berada dalam $[0,1]$; jika $p_=0$, ketaksamaan memaksa $p_>=\\alpha$ dan $\\gamma$ dapat dipilih sebarang.",
        "Dengan definisi uji pada daerah $>$, $=$, dan $<$, diperoleh $E_0[\\phi_{k,\\gamma}]=p_>+\\gamma p_==\\alpha$. Jadi ambang dan pengacakan yang diperlukan benar-benar ada untuk $0<\\alpha<1$."
      ],
      "citation": "Casella dan Berger (2002); Lehmann dan Romano (2005)."
    },
    {
      "kind": "theorem",
      "title": "Lemma Neyman–Pearson untuk Uji Teracak",
      "statement": "Misalkan $P_0$ dan $P_1$ mempunyai densitas $f_0,f_1$ terhadap ukuran acuan $\\mu$ yang sama. Jika $k\\geq0$, $\\gamma\\in[0,1]$, dan uji $\\phi^*=\\phi_{k,\\gamma}$ mempunyai ukuran $E_0[\\phi^*]=\\alpha$, maka untuk setiap fungsi uji $\\psi:\\mathcal X\\to[0,1]$ dengan $E_0[\\psi]\\leq\\alpha$ berlaku $E_1[\\psi]\\leq E_1[\\phi^*]$.",
      "proof": [
        "Diketahui dua hipotesis sederhana dengan densitas terhadap ukuran $\\mu$ yang sama. Ambil uji pesaing sebarang $\\psi$ dengan $0\\leq\\psi\\leq1$ dan $E_0[\\psi]\\leq\\alpha$. Targetnya ialah membandingkan power, bukan sekadar membandingkan ukuran kedua uji.",
        "Pada himpunan $f_1>kf_0$, definisi uji rasio likelihood memberi $\\phi^*=1$, sehingga $\\phi^*-\\psi\\geq0$ dan $f_1-kf_0>0$. Pada himpunan $f_1<kf_0$, berlaku $\\phi^*=0$, sehingga $\\phi^*-\\psi\\leq0$ dan $f_1-kf_0<0$. Pada himpunan kesamaan, faktor $f_1-kf_0=0$ apa pun nilai pengacakan $\\gamma$.",
        "Dengan demikian $(\\phi^*-\\psi)(f_1-kf_0)\\geq0$ untuk $\\mu$-hampir setiap $x$. Fungsi tersebut integrabel karena $|\\phi^*-\\psi|\\leq1$ dan $f_0,f_1$ dapat diintegralkan. Integrasi menghasilkan $0\\leq\\int(\\phi^*-\\psi)(f_1-kf_0)\\,d\\mu$.",
        "Uraikan integral sebagai $E_1[\\phi^*]-E_1[\\psi]-k(E_0[\\phi^*]-E_0[\\psi])\\geq0$. Oleh karena itu $E_1[\\phi^*]-E_1[\\psi]\\geq k(\\alpha-E_0[\\psi])\\geq0$; ketaksamaan terakhir menggunakan $k\\geq0$ dan syarat taraf uji pesaing.",
        "Karena $\\psi$ dipilih sebarang di antara seluruh uji bertaraf tidak melebihi $\\alpha$, power $\\phi^*$ tidak lebih kecil daripada power uji pesaing mana pun. Dengan demikian $\\phi^*$ paling kuat pada taraf $\\alpha$."
      ],
      "citation": "Casella dan Berger, Statistical Inference (2002); Lehmann dan Romano, Testing Statistical Hypotheses (2005)."
    },
    {
      "kind": "corollary",
      "title": "Keunikan Uji Paling Kuat di Luar Batas",
      "statement": "Dalam hipotesis Lemma Neyman–Pearson, jika $k>0$, $E_0[\\phi^*]=\\alpha$, dan $P_0(f_1=kf_0)=P_1(f_1=kf_0)=0$, maka setiap uji $\\psi$ dengan $E_0[\\psi]\\leq\\alpha$ dan $E_1[\\psi]=E_1[\\phi^*]$ sama dengan $\\phi^*$ hampir pasti di bawah kedua distribusi.",
      "proof": [
        "Diketahui $\\psi$ mempunyai power sama dengan uji rasio likelihood $\\phi^*$. Dalam bukti teorema, kedua suku $I=\\int(\\phi^*-\\psi)(f_1-kf_0)\\,d\\mu$ dan $k(\\alpha-E_0[\\psi])$ tidak negatif, sedangkan selisih power sama dengan jumlah keduanya. Karena selisih power nol, diperoleh $I=0$ dan $E_0[\\psi]=\\alpha$ sebab $k>0$.",
        "Integran pembentuk $I$ tidak negatif di setiap titik. Karena integralnya nol, integran tersebut nol hampir di mana-mana terhadap $\\mu$. Di luar himpunan batas $B=\\{f_1=kf_0\\}$, faktor $f_1-kf_0$ tidak nol; maka harus berlaku $\\phi^*-\\psi=0$ hampir di mana-mana terhadap $\\mu$ di luar $B$.",
        "Pada $B$, kedua hipotesis memberikan probabilitas nol menurut asumsi. Akibatnya perbedaan uji pada $B$ tidak memengaruhi distribusi $P_0$ maupun $P_1$. Maka $\\psi=\\phi^*$ hampir pasti di bawah kedua distribusi. Kesimpulan ini tidak menuntut kedua fungsi sama pada titik-titik yang tidak mungkin teramati."
      ]
    },
    {
      "kind": "proposition",
      "title": "Kriteria Monoton untuk Pergeseran Normal",
      "statement": "Jika $H_0:X\\sim N(\\mu_0,\\sigma^2)$ dan $H_1:X\\sim N(\\mu_1,\\sigma^2)$ dengan $\\sigma>0$ diketahui dan $\\mu_1>\\mu_0$, maka uji paling kuat pada taraf $0<\\alpha<1$ menolak $H_0$ jika $X>\\mu_0+\\sigma\\Phi^{-1}(1-\\alpha)$. Power-nya $1-\\Phi(\\Phi^{-1}(1-\\alpha)-(\\mu_1-\\mu_0)/\\sigma)$.",
      "proof": [
        "Diketahui kedua distribusi normal dengan varians sama dan $\\mu_1>\\mu_0$. Pembagian densitas memberi $\\Lambda(x)=\\exp\\{[(x-\\mu_0)^2-(x-\\mu_1)^2]/(2\\sigma^2)\\}$.",
        "Mengembangkan kedua kuadrat menghasilkan $\\log\\Lambda(x)=(\\mu_1-\\mu_0)x/\\sigma^2-(\\mu_1^2-\\mu_0^2)/(2\\sigma^2)$. Koefisien $x$ positif, sehingga rasio likelihood naik ketat terhadap $x$. Karena itu daerah penolakan rasio likelihood berbentuk $x>c$.",
        "Pilih $c=\\mu_0+\\sigma\\Phi^{-1}(1-\\alpha)$. Di bawah $H_0$, peubah $(X-\\mu_0)/\\sigma$ normal baku, sehingga $P_0(X>c)=\\alpha$. Tidak diperlukan pengacakan karena distribusi normal tidak mempunyai atom pada $c$.",
        "Di bawah $H_1$, standarisasi menghasilkan $P_1(X>c)=1-\\Phi((c-\\mu_1)/\\sigma)=1-\\Phi(\\Phi^{-1}(1-\\alpha)-(\\mu_1-\\mu_0)/\\sigma)$. Karena uji tersebut berbentuk rasio likelihood dan memiliki size tepat, Lemma Neyman–Pearson menjamin optimalitasnya."
      ]
    }
  ],
  "examples": [
    {
      "title": "Model Bernoulli sebagai Dua Hipotesis Sederhana",
      "forDefinition": "Hipotesis Sederhana dan Model Terdominasi",
      "problem": "Satu peubah $X$ bernilai $0$ atau $1$. Di bawah $H_0$, $P(X=1)=1/4$; di bawah $H_1$, $P(X=1)=3/4$. Nyatakan ukuran acuan dan kedua fungsi massa.",
      "solution": [
        "Diketahui ruang pengamatan $\\mathcal X=\\{0,1\\}$. Ambil $\\mu$ sebagai ukuran hitung, sehingga integral terhadap $\\mu$ menjadi penjumlahan atas dua titik. Hipotesis nol menetapkan satu distribusi penuh, demikian pula hipotesis alternatif; keduanya hipotesis sederhana.",
        "Di bawah $H_0$ diperoleh $f_0(0)=3/4$ dan $f_0(1)=1/4$. Di bawah $H_1$ diperoleh $f_1(0)=1/4$ dan $f_1(1)=3/4$. Kedua fungsi tidak negatif dan jumlah massanya sama dengan satu.",
        "Untuk setiap kejadian $A\\subseteq\\{0,1\\}$, berlaku $P_j(A)=\\sum_{x\\in A}f_j(x)$, sesuai definisi densitas terhadap ukuran hitung. Jadi kedua distribusi benar-benar didominasi oleh ukuran acuan yang sama; tidak ada parameter bebas yang belum ditentukan."
      ]
    },
    {
      "title": "Ukuran dan Power Uji Teracak",
      "forDefinition": "Fungsi Uji Teracak",
      "problem": "Pada model Bernoulli sebelumnya, uji menolak ketika $X=1$ dengan probabilitas $2/5$ dan tidak menolak ketika $X=0$. Hitung size dan power.",
      "solution": [
        "Diketahui fungsi uji $\\phi(1)=2/5$ dan $\\phi(0)=0$. Karena keduanya berada di $[0,1]$, ini fungsi uji teracak yang sah. Ukuran dihitung terhadap distribusi $H_0$, bukan terhadap distribusi alternatif.",
        "Dengan rumus ekspektasi diskret, $E_0[\\phi]=(2/5)(1/4)+0(3/4)=1/10$. Sementara itu $E_1[\\phi]=(2/5)(3/4)+0(1/4)=3/10$. Perhitungan kedua menggunakan fungsi uji yang sama tetapi bobot probabilitas berbeda.",
        "Jadi uji ini mempunyai size $0{,}1$ dan power $0{,}3$. Angka $2/5$ adalah probabilitas penolakan bersyarat pada $X=1$, bukan size keseluruhan; perbedaan ini penting ketika batas taraf lebih kecil daripada massa satu titik."
      ]
    },
    {
      "title": "Rasio Likelihood pada Titik Nol",
      "forDefinition": "Rasio Likelihood yang Diperluas",
      "problem": "Di bawah $H_0$, $X=0$ hampir pasti, sedangkan di bawah $H_1$, $X=1$ hampir pasti. Hitung rasio likelihood pada $0$ dan $1$ serta jelaskan keputusan yang optimal.",
      "solution": [
        "Gunakan ukuran hitung pada $\\{0,1\\}$. Maka $f_0(0)=1$, $f_0(1)=0$, $f_1(0)=0$, dan $f_1(1)=1$. Rasio di $0$ adalah $\\Lambda(0)=0/1=0$, sedangkan pada $1$ penyebut nol tetapi pembilang positif.",
        "Sesuai definisi rasio yang diperluas, $\\Lambda(1)=+\\infty$. Uji $\\phi(1)=1$ dan $\\phi(0)=0$ menolak tepat ketika data mustahil di bawah $H_0$ tetapi pasti di bawah $H_1$. Ukurannya $E_0[\\phi]=0$ dan power-nya $E_1[\\phi]=1$.",
        "Dengan demikian ada uji yang sekaligus tidak pernah salah menolak $H_0$ dan selalu mendeteksi $H_1$. Menetapkan rasio $0/0$ pada titik di luar kedua dukungan tidak mengubah kedua peluang tersebut."
      ]
    },
    {
      "title": "Aturan Batas pada Bernoulli",
      "forDefinition": "Uji Rasio Likelihood dan Uji Paling Kuat",
      "problem": "Untuk $H_0:\\operatorname{Bernoulli}(1/4)$ melawan $H_1:\\operatorname{Bernoulli}(3/4)$, bentuk uji rasio likelihood dengan size tepat $\\alpha=1/10$.",
      "solution": [
        "Rasio pada $X=1$ ialah $(3/4)/(1/4)=3$, sedangkan pada $X=0$ ialah $(1/4)/(3/4)=1/3$. Oleh sebab itu pengamatan $X=1$ harus diprioritaskan untuk penolakan karena rasio likelihood-nya lebih besar.",
        "Penolakan deterministik pada $X=1$ memiliki size $1/4$, melampaui $1/10$. Pilih ambang $k=3$ sehingga $X=1$ berada pada daerah kesamaan dan gunakan probabilitas pengacakan $\\gamma$ di sana. Syarat size tepat memberikan $\\gamma(1/4)=1/10$, jadi $\\gamma=2/5$.",
        "Uji tersebut menolak dengan peluang $2/5$ bila $X=1$ dan tidak menolak bila $X=0$. Size-nya $1/10$ dan power-nya $(2/5)(3/4)=3/10$. Teorema Neyman–Pearson di bawah akan membuktikan bahwa tidak ada uji lain pada taraf yang sama dengan power lebih besar."
      ]
    },
    {
      "title": "Normal Bergeser dan Ambang Satu Sisi",
      "problem": "Misalkan $H_0:X\\sim N(0,1)$ dan $H_1:X\\sim N(1,1)$. Tentukan bentuk uji paling kuat pada taraf $0{,}05$ dan aproksimasi power-nya.",
      "solution": [
        "Kedua distribusi memiliki densitas terhadap ukuran Lebesgue. Dengan membagi densitas normal diperoleh $\\Lambda(x)=\\exp(-(x-1)^2/2+x^2/2)=\\exp(x-1/2)$. Fungsi ini naik ketat terhadap $x$, sehingga daerah rasio likelihood besar sama dengan daerah $x$ besar.",
        "Agar size tepat $0{,}05$, pilih $c$ yang memenuhi $P_0(X>c)=0{,}05$. Untuk normal baku, $c=\\Phi^{-1}(0{,}95)\\approx1{,}64485$. Karena distribusi kontinu, $P_0(X=c)=0$, sehingga tidak diperlukan pengacakan pada batas.",
        "Di bawah alternatif, $X-1\\sim N(0,1)$. Power adalah $P_1(X>c)=1-\\Phi(c-1)=1-\\Phi(0{,}64485)\\approx0{,}2595$. Uji menolak untuk $X>1{,}64485$; nilai power bukan $0{,}95$ karena distribusi alternatif masih bertumpang tindih dengan nol."
      ]
    },
    {
      "title": "Tiga Titik dengan Pengacakan",
      "problem": "Diketahui $f_0=(0{,}5,0{,}3,0{,}2)$ dan $f_1=(0{,}1,0{,}3,0{,}6)$ pada $\\{a,b,c\\}$. Bentuk uji paling kuat berukuran $0{,}3$.",
      "solution": [
        "Hitung rasio pada setiap titik: $\\Lambda(a)=0{,}1/0{,}5=0{,}2$, $\\Lambda(b)=0{,}3/0{,}3=1$, dan $\\Lambda(c)=0{,}6/0{,}2=3$. Urutan penolakan dari yang paling mendukung alternatif adalah $c$, lalu $b$, lalu $a$.",
        "Menolak selalu pada $c$ memakai size $P_0(c)=0{,}2$, sehingga masih tersedia $0{,}1$. Pada titik $b$, pilih probabilitas penolakan $\\gamma$ dari persamaan $0{,}2+0{,}3\\gamma=0{,}3$, sehingga $\\gamma=1/3$. Jangan menolak pada $a$.",
        "Power-nya $P_1(c)+\\gamma P_1(b)=0{,}6+(1/3)(0{,}3)=0{,}7$. Pemeriksaan size memberi $0{,}2+0{,}1=0{,}3$ tepat, dan semua probabilitas penolakan berada dalam $[0,1]$."
      ]
    },
    {
      "title": "Hipotesis yang Sama Tidak Bisa Dibedakan",
      "problem": "Misalkan $f_0=f_1$ hampir di mana-mana. Tentukan power terbesar yang mungkin pada taraf $\\alpha=0{,}08$.",
      "solution": [
        "Diketahui dua distribusi yang sebenarnya sama. Untuk setiap fungsi uji terukur $\\phi$ dengan nilai dalam $[0,1]$, integrasi terhadap kedua densitas menghasilkan $E_1[\\phi]=\\int\\phi f_1\\,d\\mu=\\int\\phi f_0\\,d\\mu=E_0[\\phi]$.",
        "Karena taraf mensyaratkan $E_0[\\phi]\\leq0{,}08$, otomatis $E_1[\\phi]\\leq0{,}08$. Batas ini tercapai dengan uji teracak konstan $\\phi(x)=0{,}08$, yang menolak dengan probabilitas sama untuk setiap data.",
        "Jadi power maksimum hanya $0{,}08$. Tidak ada aturan berbasis data yang dapat membedakan dua distribusi identik; menaikkan power di atas taraf berarti juga menaikkan peluang salah menolak."
      ]
    },
    {
      "title": "Alternatif Berlawanan dan Tidak Adanya Uji Seragam",
      "problem": "Untuk $H_0:N(0,1)$, bandingkan uji paling kuat melawan $N(1,1)$ dan melawan $N(-1,1)$ pada taraf $0{,}05$.",
      "solution": [
        "Untuk alternatif $N(1,1)$, rasio likelihood $\\exp(x-1/2)$ naik terhadap $x$, sehingga uji paling kuat menolak pada ekor kanan $x>c$, dengan $c=\\Phi^{-1}(0{,}95)$. Untuk alternatif $N(-1,1)$, rasio $\\exp(-x-1/2)$ turun, sehingga uji paling kuat menolak pada ekor kiri $x<-c$.",
        "Kedua daerah penolakan berbeda pada himpunan yang mempunyai peluang positif di bawah $H_0$. Karena rasio likelihood kontinu dan ketat monoton, uji paling kuat pada masing-masing alternatif unik hingga himpunan peluang nol: ketaksamaan optimalitas menjadi ketat jika aturan berbeda pada daerah dengan $f_1-kf_0\\ne0$.",
        "Karena itu tidak ada satu uji bertaraf $0{,}05$ yang sekaligus paling kuat untuk kedua alternatif sederhana tersebut. Lemma Neyman–Pearson tidak otomatis menghasilkan uji uniformly most powerful untuk alternatif dua sisi."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "Untuk $X\\sim\\operatorname{Bernoulli}(p)$, uji $H_0:p=1/5$ melawan $H_1:p=4/5$ pada taraf $\\alpha=1/5$. Tentukan aturan dan power uji paling kuat.",
      "hint": "Hitung rasio pada $X=0,1$, lalu pakai seluruh anggaran size pada titik dengan rasio lebih besar.",
      "answer": "Diketahui $f_0(1)=1/5$, $f_0(0)=4/5$, $f_1(1)=4/5$, dan $f_1(0)=1/5$. Rasio likelihood pada $1$ adalah $4$, sedangkan pada $0$ adalah $1/4$, sehingga data $1$ lebih mendukung alternatif. Ambil $\\phi(1)=1$ dan $\\phi(0)=0$. Size dihitung sebagai $E_0[\\phi]=(1/5)(1)+(4/5)(0)=1/5$, tepat memenuhi taraf. Power-nya $E_1[\\phi]=(4/5)(1)+(1/5)(0)=4/5$. Aturan ini merupakan uji rasio likelihood dengan ambang di antara $1/4$ dan $4$, sehingga paling kuat menurut teorema Neyman–Pearson.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Pada model soal sebelumnya, jika taraf diturunkan menjadi $\\alpha=1/10$, tentukan probabilitas pengacakan dan power yang tepat.",
      "hint": "Penolakan penuh pada $X=1$ terlalu besar; kalikan peluang $P_0(X=1)$ dengan probabilitas pengacakan.",
      "answer": "Rasio likelihood tetap $4$ pada $X=1$ dan $1/4$ pada $X=0$, sehingga penolakan pertama tetap dialokasikan pada $X=1$. Misalkan $\\phi(1)=\\gamma$ dan $\\phi(0)=0$. Persamaan size tepat adalah $(1/5)\\gamma=1/10$, yang memberikan $\\gamma=1/2$. Nilai ini sah karena berada dalam interval $[0,1]$. Power dihitung di bawah $H_1$, yakni $E_1[\\phi]=(4/5)(1/2)=2/5$. Verifikasi langsung memberi size $1/10$ dan power $2/5$. Pengacakan di titik batas menjaga taraf tanpa mengalihkan peluang penolakan ke pengamatan yang rasio likelihood-nya lebih rendah.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Pada ruang $\\{a,b,c\\}$ dengan $f_0=(0{,}5,0{,}3,0{,}2)$ dan $f_1=(0{,}1,0{,}3,0{,}6)$, tentukan uji paling kuat untuk $\\alpha=0{,}15$.",
      "hint": "Titik $c$ mempunyai rasio likelihood tertinggi, tetapi massanya di bawah $H_0$ adalah $0{,}2$.",
      "answer": "Rasio likelihood pada $(a,b,c)$ berturut-turut $(0{,}2,1,3)$. Karena taraf $0{,}15$ lebih kecil daripada $P_0(c)=0{,}2$, seluruh anggaran penolakan ditempatkan pada $c$ dengan pengacakan $\\gamma$ dan pada dua titik lain peluang penolakan nol. Syarat $0{,}2\\gamma=0{,}15$ memberikan $\\gamma=3/4$. Dengan demikian $\\phi(a)=0$, $\\phi(b)=0$, dan $\\phi(c)=3/4$. Size tepat $0{,}2(3/4)=0{,}15$, sedangkan power $0{,}6(3/4)=0{,}45$. Karena urutan rasio tidak dilanggar dan aturan berbentuk ambang, teorema Neyman–Pearson menjamin optimalitasnya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Uji $H_0:X\\sim N(0,1)$ melawan $H_1:X\\sim N(2,1)$ pada taraf $0{,}025$. Tentukan daerah penolakan dan tuliskan power sebagai fungsi $\\Phi$.",
      "hint": "Rasio likelihood $\\exp(2x-2)$ meningkat terhadap $x$; gunakan kuantil normal baku $0{,}975$.",
      "answer": "Diketahui densitas normal dengan varians sama dan mean berbeda. Pembagian densitas memberi $\\Lambda(x)=\\exp(-(x-2)^2/2+x^2/2)=\\exp(2x-2)$, yang naik ketat terhadap $x$. Oleh karena itu uji paling kuat menolak ketika $X>c$. Agar size tepat $0{,}025$, harus berlaku $P_0(X>c)=0{,}025$, sehingga $c=\\Phi^{-1}(0{,}975)\\approx1{,}95996$. Di bawah $H_1$, peubah $X-2$ normal baku, jadi power $P_1(X>c)=1-\\Phi(c-2)=1-\\Phi(-0{,}04004)\\approx0{,}5160$. Distribusi kontinu membuat pengacakan pada batas tidak diperlukan; substitusi $c$ memverifikasi size.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Misalkan $H_0:X\\sim N(0,1)$ dan $H_1$ adalah campuran sama besar $N(-a,1)$ dan $N(a,1)$ untuk $a>0$. Tentukan bentuk daerah penolakan uji paling kuat.",
      "hint": "Tulis $f_1/f_0$ dan sederhanakan dengan fungsi hiperbolik kosinus.",
      "answer": "Diketahui densitas alternatif $f_1(x)=\\tfrac12\\varphi(x-a)+\\tfrac12\\varphi(x+a)$ dan densitas nol $f_0(x)=\\varphi(x)$, dengan $\\varphi$ densitas normal baku. Pembagian memberi $\\Lambda(x)=\\tfrac12e^{ax-a^2/2}+\\tfrac12e^{-ax-a^2/2}=e^{-a^2/2}\\cosh(ax)$. Karena $a>0$ dan $\\cosh$ genap serta naik ketat pada $[0,\\infty)$, rasio likelihood naik bersama $|x|$. Oleh sebab itu daerah penolakan berbentuk $|X|>c_\\alpha$, dengan $P_0(|X|>c_\\alpha)=\\alpha$, yaitu $c_\\alpha=\\Phi^{-1}(1-\\alpha/2)$ untuk $0<\\alpha<1$. Distribusi kontinu memastikan size tepat. Ini uji paling kuat untuk alternatif campuran yang ditentukan, bukan otomatis untuk setiap alternatif dua sisi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Pada ruang $\\{0,1\\}$, $P_0(X=0)=1$ dan $P_1(X=1)=1$. Buktikan bahwa terdapat uji bertaraf nol dengan power satu.",
      "hint": "Perhatikan titik yang mustahil di bawah $H_0$ tetapi pasti di bawah $H_1$.",
      "answer": "Kedua hipotesis sederhana mempunyai massa $f_0(0)=1$, $f_0(1)=0$, $f_1(0)=0$, dan $f_1(1)=1$. Definisikan $\\phi(0)=0$ dan $\\phi(1)=1$. Fungsi uji ini terukur dan bernilai dalam $[0,1]$. Ukuran uji adalah $E_0[\\phi]=1\\cdot0+0\\cdot1=0$, sehingga memenuhi taraf $\\alpha=0$. Power-nya $E_1[\\phi]=0\\cdot0+1\\cdot1=1$. Pada $x=1$, rasio likelihood diperluas bernilai $+\\infty$ karena $f_0(1)=0<f_1(1)$. Jadi penolakan pada $x=1$ merupakan aturan rasio likelihood yang tepat dan sekaligus mencapai power maksimum yang mungkin.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Jelaskan mengapa uji paling kuat untuk $H_0:N(0,1)$ melawan $H_1:N(1,1)$ tidak sekaligus paling kuat melawan $H_1':N(-1,1)$ pada taraf $0{,}05$.",
      "hint": "Bandingkan arah monotonisitas dua rasio likelihood dan gunakan ketunggalan hingga himpunan nol.",
      "answer": "Untuk alternatif mean $1$, rasio likelihood terhadap nol adalah $e^{x-1/2}$, naik ketat terhadap $x$. Teorema Neyman–Pearson memberi daerah penolakan $X>c$ dengan $c=\\Phi^{-1}(0{,}95)>0$. Untuk alternatif mean $-1$, rasio adalah $e^{-x-1/2}$, turun ketat, sehingga daerah paling kuat adalah $X<-c$. Kedua daerah berbeda pada himpunan berpeluang positif di bawah normal baku. Ketunggalan uji rasio likelihood berlaku hampir pasti karena himpunan batas $\\{x:\\Lambda(x)=k\\}$ hanya satu titik yang berpeluang nol. Maka uji ekor kanan tidak mungkin juga paling kuat untuk alternatif ekor kiri. Pernyataan Neyman–Pearson harus selalu menyebut alternatif sederhana yang sedang dioptimalkan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "Pada model $H_0:\\operatorname{Bernoulli}(1/5)$ dan $H_1:\\operatorname{Bernoulli}(4/5)$, buktikan langsung bahwa tidak ada uji bertaraf $1/5$ dengan power melebihi $4/5$.",
      "hint": "Tuliskan peluang penolakan $r_0=\\psi(0)$ dan $r_1=\\psi(1)$, lalu gunakan kendala size.",
      "answer": "Ambil sebarang uji teracak $\\psi$ dan tulis $r_0=\\psi(0)$ serta $r_1=\\psi(1)$, dengan $0\\le r_0,r_1\\le1$. Syarat size adalah $(4/5)r_0+(1/5)r_1\\le1/5$, sehingga $r_1\\le1-4r_0$. Power uji tersebut adalah $(1/5)r_0+(4/5)r_1$. Dengan mengganti batas atas $r_1$, diperoleh $E_1[\\psi]\\le(1/5)r_0+(4/5)(1-4r_0)=4/5-3r_0\\le4/5$, karena $r_0\\ge0$. Kesamaan tercapai pada $r_0=0,r_1=1$, yang memang memenuhi batas size. Dengan demikian aturan menolak tepat ketika $X=1$ paling kuat, dibuktikan tanpa mengasumsikan kesimpulan teorema.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
