import type { BookLessonContent } from "@/data/book-content-types";

/** Ukuran pemusatan: naskah asli dan solusi rinci, bukan generator rubrik. */
export const centralTendencyContent:BookLessonContent={
  "intro": [
    "Ukuran pemusatan merangkum sekumpulan pengamatan dengan satu bilangan, tetapi satu bilangan tidak pernah menggantikan seluruh distribusi. Misalnya data $2,3,4,5,6$ dan $2,3,4,5,106$ memiliki empat pengamatan yang sama, namun rata-ratanya sangat berbeda. Median keduanya justru tetap $4$. Perbedaan ini timbul dari fungsi kerugian yang diminimalkan: kuadrat penyimpangan untuk rata-rata dan penyimpangan absolut untuk median.",
    "Misalkan data kuantitatif yang telah diamati adalah $x_1,\\ldots,x_n\\in\\mathbb R$ dengan $n\\ge1$. Kita mulai dari rata-rata aritmetika, median, rata-rata berbobot, dan rata-rata pangkas. Setelah masing-masing definisi langsung diuji dengan angka, kita membuktikan identitas titik keseimbangan, optimalitas kuadrat, optimalitas absolut, dan perubahan di bawah transformasi afin. Pembedaan antara statistik sampel dan parameter populasi dijaga: semua rumus pada halaman ini dihitung dari data yang benar-benar tersedia.",
    "Pada soal terbahas, urutan data selalu ditunjukkan sebelum menghitung median atau melakukan pemangkasan. Untuk rata-rata berbobot, syarat jumlah bobot positif tidak boleh diabaikan; untuk data dengan pencilan, perbandingan pemusatan dilakukan bersama nilai pengamatan yang berubah. Rujukan: David S. Moore, George P. McCabe, dan Bruce A. Craig, Introduction to the Practice of Statistics, edisi ke-9 (2017), bagian eksplorasi distribusi; Larry Wasserman, All of Statistics (2004), bagian statistik deskriptif."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Rata-rata Aritmetika",
      "statement": "Untuk data real $x_1,\\ldots,x_n$ dengan $n\\ge1$, rata-rata aritmetika didefinisikan oleh $\\bar x=\\frac1n\\sum_{i=1}^{n}x_i$. Rata-rata adalah statistik dari data yang diamati, bukan otomatis nilai harapan suatu distribusi."
    },
    {
      "kind": "definition",
      "title": "Median Data",
      "statement": "Urutkan pengamatan menjadi $x_{(1)}\\le\\cdots\\le x_{(n)}$. Median $m$ didefinisikan sebagai $x_{((n+1)/2)}$ bila $n$ ganjil, dan $\\frac12(x_{(n/2)}+x_{(n/2+1)})$ bila $n$ genap. Definisi median sebagai titik tengah untuk kasus genap dipilih agar nilainya tunggal; seluruh interval di antara dua data tengah sama-sama meminimalkan jumlah simpangan absolut."
    },
    {
      "kind": "definition",
      "title": "Rata-rata Berbobot",
      "statement": "Diberikan $x_1,\\ldots,x_n\\in\\mathbb R$ dan bobot $w_i\\ge0$ dengan $W=\\sum_{i=1}^n w_i>0$. Rata-rata berbobot didefinisikan oleh $\\bar x_w=\\frac{\\sum_{i=1}^n w_ix_i}{W}$. Bobot nol berarti pengamatan itu tidak memengaruhi nilai rata-rata; bobot negatif tidak diperkenankan dalam definisi ini."
    },
    {
      "kind": "definition",
      "title": "Rata-rata Pangkas Simetris",
      "statement": "Untuk data terurut $x_{(1)}\\le\\cdots\\le x_{(n)}$ dan bilangan bulat $k$ dengan $0\\le2k<n$, rata-rata pangkas simetris tingkat $k$ adalah $T_k=\\frac{1}{n-2k}\\sum_{i=k+1}^{n-k}x_{(i)}$. Tepat $k$ nilai terkecil dan $k$ nilai terbesar dibuang sebelum menghitung rata-rata; tidak boleh memilih $2k\\ge n$ karena penyebutnya tidak positif."
    },
    {
      "kind": "lemma",
      "title": "Identitas Titik Keseimbangan",
      "statement": "Untuk setiap data $x_1,\\ldots,x_n\\in\\mathbb R$, $n\\ge1$, dan $\\bar x=\\frac1n\\sum_i x_i$, berlaku $\\sum_{i=1}^n(x_i-\\bar x)=0$. Sebaliknya, jika suatu $c\\in\\mathbb R$ memenuhi $\\sum_i(x_i-c)=0$, maka $c=\\bar x$.",
      "proof": [
        "Dari definisi $\\bar x$, diperoleh $\\sum_i(x_i-\\bar x)=\\sum_i x_i-n\\bar x=\\sum_i x_i-\\sum_i x_i=0$. Tidak ada asumsi distribusi peluang dalam identitas ini.",
        "Untuk arah sebaliknya, $\\sum_i(x_i-c)=0$ berarti $\\sum_i x_i-nc=0$. Karena $n>0$, pembagian oleh $n$ sah dan menghasilkan $c=(\\sum_i x_i)/n=\\bar x$. Dengan demikian titik keseimbangan ini tunggal. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Rata-rata Meminimalkan Jumlah Kuadrat",
      "statement": "Untuk $x_1,\\ldots,x_n\\in\\mathbb R$ dan $n\\ge1$, fungsi $Q(t)=\\sum_{i=1}^n(x_i-t)^2$ pada $t\\in\\mathbb R$ mempunyai minimum global tunggal di $t=\\bar x$. Lebih tepat, $Q(t)=Q(\\bar x)+n(t-\\bar x)^2$.",
      "proof": [
        "Tulis $x_i-t=(x_i-\\bar x)+(\\bar x-t)$. Setelah dikuadratkan dan dijumlahkan, diperoleh $Q(t)=\\sum_i(x_i-\\bar x)^2+2(\\bar x-t)\\sum_i(x_i-\\bar x)+n(\\bar x-t)^2$.",
        "Menurut identitas titik keseimbangan, suku tengah bernilai nol. Maka $Q(t)-Q(\\bar x)=n(t-\\bar x)^2\\ge0$. Kesamaan terjadi jika dan hanya jika $t=\\bar x$, sebab $n>0$. Ini membuktikan keberadaan sekaligus ketunggalan peminimum global. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Median Meminimalkan Jumlah Simpangan Absolut",
      "statement": "Untuk data terurut $x_{(1)}\\le\\cdots\\le x_{(n)}$ dan $A(t)=\\sum_{i=1}^n|x_i-t|$, himpunan seluruh peminimum global $A$ ialah $\\{x_{((n+1)/2)}\\}$ jika $n$ ganjil, dan interval tertutup $[x_{(n/2)},x_{(n/2+1)}]$ jika $n$ genap. Karena itu median menurut definisi di atas selalu merupakan peminimum.",
      "proof": [
        "Untuk setiap pasangan $a\\le b$, ketaksamaan segitiga memberi $|a-t|+|b-t|\\ge b-a$. Kesamaan terjadi tepat ketika $t\\in[a,b]$. Pasangkan pengamatan terkecil dengan terbesar, kedua terkecil dengan kedua terbesar, dan seterusnya.",
        "Jika $n=2r$, jumlah $A(t)$ terdiri dari $r$ pasangan. Agar setiap pasangan mencapai batas bawahnya, $t$ harus berada pada irisan interval $[x_{(i)},x_{(2r+1-i)}]$ untuk $i=1,\\ldots,r$. Karena data terurut, irisan itu tepat $[x_{(r)},x_{(r+1)}]$. Nilai di luar interval tersebut membuat sedikitnya pasangan terdalam tidak mencapai kesamaan, sehingga bukan peminimum.",
        "Jika $n=2r+1$, selain $r$ pasangan terdapat suku tengah $|x_{(r+1)}-t|$. Semua pasangan mencapai batas bawah bila $t$ berada di interval tengah, tetapi suku tunggal menjadi nol hanya pada $t=x_{(r+1)}$. Untuk $t$ lain, jumlah lebih besar. Kedua kasus terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Rata-rata Berbobot dan Kuadrat Tertimbang",
      "statement": "Jika $w_i\\ge0$, $W=\\sum_iw_i>0$, dan $\\bar x_w=\\sum_iw_ix_i/W$, maka $Q_w(t)=\\sum_iw_i(x_i-t)^2$ mempunyai peminimum global tunggal $t=\\bar x_w$ dan $Q_w(t)=Q_w(\\bar x_w)+W(t-\\bar x_w)^2$.",
      "proof": [
        "Definisi rata-rata berbobot memberikan $\\sum_iw_i(x_i-\\bar x_w)=\\sum_iw_ix_i-W\\bar x_w=0$.",
        "Kembangkan $x_i-t=(x_i-\\bar x_w)+(\\bar x_w-t)$ dalam setiap kuadrat dan kalikan dengan $w_i$. Setelah dijumlahkan, suku silang hilang oleh identitas sebelumnya; sisanya $Q_w(t)-Q_w(\\bar x_w)=W(t-\\bar x_w)^2$. Karena $W>0$, ruas kanan tidak negatif dan nol tepat ketika $t=\\bar x_w$. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Perubahan Afin pada Ukuran Pemusatan",
      "statement": "Misalkan $y_i=ax_i+b$ untuk $a,b\\in\\mathbb R$. Maka $\\bar y=a\\bar x+b$ dan $\\bar y_w=a\\bar x_w+b$ untuk bobot yang sama. Median memenuhi $\\operatorname{med}(y)=a\\operatorname{med}(x)+b$, termasuk jika $a<0$. Untuk setiap $k$ dengan $0\\le2k<n$, rata-rata pangkas simetris memenuhi $T_k(y)=aT_k(x)+b$.",
      "proof": [
        "Dengan linearitas jumlah, $\\bar y=n^{-1}\\sum_i(ax_i+b)=a\\bar x+b$. Untuk bobot, $\\bar y_w=W^{-1}\\sum_iw_i(ax_i+b)=a\\bar x_w+b$.",
        "Jika $a>0$, urutan data tetap dan setiap statistik urutan berubah menjadi $ax_{(i)}+b$. Jika $a<0$, urutan berbalik: $y_{(i)}=ax_{(n+1-i)}+b$. Untuk $n$ ganjil, posisi tengah tetap sama; untuk $n$ genap, dua posisi tengah saling bertukar, sehingga rata-ratanya tetap $a\\operatorname{med}(x)+b$.",
        "Untuk pemangkasan simetris, indeks yang dipertahankan adalah $k+1,\\ldots,n-k$, yang tetap merupakan himpunan indeks yang sama setelah pembalikan. Menjumlahkan $ax_{(i)}+b$ pada indeks tersebut memberi $aT_k(x)+b$. Jika $a=0$, semua $y_i=b$ sehingga semua identitas juga berlaku. $\\square$"
      ]
    },
    {
      "kind": "corollary",
      "title": "Rata-rata Berada di Antara Pengamatan Ekstrem",
      "statement": "Untuk data real tak kosong, $\\min_i x_i\\le\\bar x\\le\\max_i x_i$. Jika $w_i\\ge0$ dan $W>0$, juga $\\min_i x_i\\le\\bar x_w\\le\\max_i x_i$. Untuk rata-rata biasa, kesamaan dengan salah satu ujung terjadi jika dan hanya jika semua pengamatan sama.",
      "proof": [
        "Tulis $m=\\min_i x_i$ dan $M=\\max_i x_i$. Dari $m\\le x_i\\le M$, penjumlahan menghasilkan $nm\\le\\sum_i x_i\\le nM$; karena $n>0$, pembagian oleh $n$ memberi batas untuk $\\bar x$.",
        "Kalikan setiap ketaksamaan dengan $w_i\\ge0$, jumlahkan, lalu bagi dengan $W>0$ untuk memperoleh $m\\le\\bar x_w\\le M$. Jika $\\bar x=m$, maka $\\sum_i(x_i-m)=0$ dengan setiap suku tidak negatif; akibatnya semua suku nol dan $x_i=m$ untuk setiap $i$. Argumen untuk $\\bar x=M$ serupa. Sebaliknya data konstan jelas mencapai kedua batas. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Pembaruan Rata-rata Setelah Observasi Baru",
      "statement": "Jika $x_1,\\ldots,x_n$ mempunyai rata-rata $\\bar x_n$ dan ditambahkan observasi $z$, maka rata-rata baru memenuhi $\\bar x_{n+1}=\\frac{n\\bar x_n+z}{n+1}=\\bar x_n+\\frac{z-\\bar x_n}{n+1}$.",
      "proof": [
        "Jumlah $n$ observasi lama ialah $n\\bar x_n$ menurut definisi. Sesudah menambahkan $z$, jumlah menjadi $n\\bar x_n+z$ dan banyak observasi menjadi $n+1>0$. Pembagian memberi identitas pertama.",
        "Kurangkan $\\bar x_n$ dari ruas pertama: $\\bar x_{n+1}-\\bar x_n=(z-\\bar x_n)/(n+1)$. Rumus ini juga menunjukkan arah perubahan rata-rata ditentukan oleh apakah $z$ lebih besar atau lebih kecil daripada rata-rata lama. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Contoh Definisi Rata-rata",
      "problem": "Hitung rata-rata data $2,4,4,10$ dan periksa jumlah penyimpangannya.",
      "solution": [
        "Diketahui $n=4$ dan jumlah pengamatan $2+4+4+10=20$. Berdasarkan definisi, $\\bar x=20/4=5$.",
        "Selisih terhadap rata-rata berturut-turut adalah $-3,-1,-1,5$; jumlahnya $-3-1-1+5=0$. Jadi nilai $5$ bukan hasil pembulatan, melainkan titik keseimbangan tepat bagi keempat data.",
        "Selain itu, nilai $5$ berada di antara minimum $2$ dan maksimum $10$, sebagaimana dipastikan oleh sifat rata-rata. Jika pusat digeser ke $6$, jumlah kuadrat penyimpangan meningkat dari $Q(5)=9+1+1+25=36$ menjadi $Q(6)=16+4+4+16=40$; selisih $4$ sesuai $n(6-5)^2=4$."
      ],
      "forDefinition": "Rata-rata Aritmetika"
    },
    {
      "title": "Contoh Definisi Median",
      "problem": "Tentukan median data $10,1,9,2$ dan seluruh peminimum simpangan absolut.",
      "solution": [
        "Data harus diurutkan dahulu: $1,2,9,10$. Karena $n=4$ genap, median menurut definisi adalah $(2+9)/2=11/2$.",
        "Setiap $t\\in[2,9]$ memberi $|1-t|+|2-t|+|9-t|+|10-t|=(t-1)+(t-2)+(9-t)+(10-t)=16$. Di luar interval tersebut, sedikitnya satu pasangan ekstrem melampaui batas ketaksamaan segitiga, sehingga nilainya lebih besar. Median $11/2$ adalah satu wakil dari interval peminimum $[2,9]$."
      ],
      "forDefinition": "Median Data"
    },
    {
      "title": "Contoh Definisi Rata-rata Berbobot",
      "problem": "Nilai $3,9,12$ masing-masing berbobot $2,1,3$. Tentukan rata-rata berbobot.",
      "solution": [
        "Bobot semuanya tidak negatif dan $W=2+1+3=6>0$, sehingga definisi berlaku. Jumlah tertimbang adalah $2(3)+1(9)+3(12)=6+9+36=51$.",
        "Maka $\\bar x_w=51/6=17/2=8{,}5$. Verifikasi: $\\sum_iw_i(x_i-17/2)=2(-11/2)+(1/2)+3(7/2)=-11+1/2+21/2=0$.",
        "Rata-rata tanpa bobot untuk tiga nilai tersebut adalah $(3+9+12)/3=8$. Nilai berbobot $8{,}5$ lebih besar karena pengamatan terbesar, $12$, mendapat bobot tiga. Hasil tetap berada dalam interval $[3,12]$ sesuai sifat kombinasi konveks dengan bobot tak negatif."
      ],
      "forDefinition": "Rata-rata Berbobot"
    },
    {
      "title": "Contoh Definisi Rata-rata Pangkas",
      "problem": "Hitung rata-rata pangkas tingkat satu untuk data $100,4,1,3,2$.",
      "solution": [
        "Urutkan dahulu menjadi $1,2,3,4,100$. Dengan $n=5$ dan $k=1$, syarat $2k<n$ terpenuhi karena $2<5$.",
        "Buang satu nilai terkecil dan satu terbesar, yakni $1$ dan $100$. Data yang dipertahankan ialah $2,3,4$ sehingga $T_1=(2+3+4)/3=3$. Rata-rata tanpa pemangkasan adalah $110/5=22$; perbedaan ini menunjukkan pengaruh observasi $100$ terhadap rata-rata biasa.",
        "Jika hanya nilai terbesar $100$ diganti $1000$, urutan tiga pengamatan tengah tetap $2,3,4$ sehingga rata-rata pangkas tetap $3$. Sebaliknya, rata-rata biasa menjadi $(1+2+3+4+1000)/5=202$. Ini memperlihatkan secara konkret bahwa pemangkasan simetris membatasi pengaruh nilai ekstrem pada data ini."
      ],
      "forDefinition": "Rata-rata Pangkas Simetris"
    },
    {
      "title": "Contoh Optimalitas Kuadrat",
      "problem": "Untuk data $1,2,7$, bandingkan $Q(3)$ dengan nilai minimum $Q(\\bar x)$.",
      "solution": [
        "Rata-rata data adalah $\\bar x=(1+2+7)/3=10/3$. Menurut teorema kuadrat, peminimum global tunggal terjadi pada $t=10/3$.",
        "Hitung $Q(10/3)=(-7/3)^2+(-4/3)^2+(11/3)^2=(49+16+121)/9=62/3$. Sementara itu $Q(3)=(1-3)^2+(2-3)^2+(7-3)^2=4+1+16=21$.",
        "Selisih $21-62/3=1/3$ sama dengan $3(3-10/3)^2=1/3$, sesuai identitas teorema. Karena selisih positif, $t=3$ bukan peminimum.",
        "Pemeriksaan kedua pada $t=4$ memberi $Q(4)=9+4+9=22>62/3$. Namun dua perbandingan numerik saja tidak membuktikan minimum global; kepastian global berasal dari identitas $Q(t)=62/3+3(t-10/3)^2$ yang berlaku untuk setiap bilangan real $t$."
      ]
    },
    {
      "title": "Contoh Optimalitas Absolut",
      "problem": "Tentukan seluruh peminimum $A(t)$ untuk data $1,2,7,12$.",
      "solution": [
        "Data sudah terurut dan $n=4$. Menurut teorema median, seluruh peminimum adalah $[x_{(2)},x_{(3)}]=[2,7]$, bukan hanya satu angka.",
        "Untuk $2\\le t\\le7$, $A(t)=(t-1)+(t-2)+(7-t)+(12-t)=16$. Sebagai pemeriksaan, $A(4)=3+2+3+8=16$, sedangkan $A(0)=1+2+7+12=22$. Median yang didefinisikan sebagai titik tengah adalah $(2+7)/2=9/2$, dan juga menghasilkan $A(9/2)=16$.",
        "Untuk nilai di luar interval, misalnya $t=8$, didapat $A(8)=7+6+1+4=18>16$. Ketaksamaan pasangan pada pembuktian teorema menjamin bahwa setiap titik di luar $[2,7]$ memberikan nilai lebih besar, sehingga tidak ada kandidat yang terlewat."
      ]
    },
    {
      "title": "Contoh Pengaruh Pencilan",
      "problem": "Pada data $2,3,4,5,6$, ganti nilai terbesar dengan $106$. Bandingkan tiga ukuran pemusatan.",
      "solution": [
        "Data awal mempunyai jumlah $20$, rata-rata $4$, median $4$, dan rata-rata pangkas tingkat satu $(3+4+5)/3=4$.",
        "Setelah penggantian, data terurut menjadi $2,3,4,5,106$. Jumlah baru $120$, sehingga rata-rata $120/5=24$. Median tetap pengamatan ketiga, yakni $4$, dan rata-rata pangkas tingkat satu tetap $(3+4+5)/3=4$.",
        "Perubahan satu pengamatan sebesar $100$ menggeser rata-rata sebesar $100/5=20$, tetapi pada contoh ini tidak menggeser median maupun rata-rata pangkas. Ini tidak berarti median kebal terhadap perubahan sembarang banyak pengamatan."
      ]
    },
    {
      "title": "Contoh Rekonstruksi Data",
      "problem": "Empat data adalah $1,2,3,4$. Berapa pengamatan kelima agar rata-rata lima data tepat $4$?",
      "solution": [
        "Jumlah empat pengamatan adalah $10$. Jika rata-rata lima data harus $4$, maka jumlah lima data harus $5(4)=20$.",
        "Jadi pengamatan kelima $z=20-10=10$. Verifikasi langsung: $(1+2+3+4+10)/5=20/5=4$. Rumus pembaruan juga memberi $(4(5/2)+10)/5=4$, sehingga hasil konsisten.",
        "Ketunggalan nilai kelima juga jelas: persamaan $10+z=20$ memiliki tepat satu penyelesaian, yakni $z=10$. Jika $z$ diganti nilai lain, jumlah lima pengamatan bukan $20$, sehingga rata-ratanya tidak mungkin $4$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "S-01. Untuk data $3,3,5,9,10$, tentukan rata-rata, median, dan bandingkan jumlah simpangan absolut pada keduanya.",
      "hint": "Urutkan data dan gunakan definisi masing-masing statistik.",
      "answer": "Data sudah terurut dengan $n=5$. Jumlahnya $3+3+5+9+10=30$, sehingga rata-rata $\\bar x=30/5=6$. Karena banyak data ganjil, median adalah data ketiga, yaitu $m=5$. Untuk memeriksa peran median, hitung $A(5)=2+2+0+4+5=13$, sedangkan $A(6)=3+3+1+3+4=14$. Teorema median menjamin $A(5)$ minimum global, bukan hanya lebih kecil daripada $A(6)$. Jadi kedua ukuran berbeda: rata-rata $6$ dan median $5$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-02. Tentukan semua $t$ yang meminimalkan $\\sum_{i=1}^{4}|x_i-t|$ untuk data $(x_1,x_2,x_3,x_4)=(0,2,8,10)$.",
      "hint": "Pasangkan data terkecil dengan terbesar dan gunakan ketaksamaan segitiga.",
      "answer": "Data terurut adalah $0,2,8,10$. Pasangan $(0,10)$ memberi $|t|+|10-t|\\ge10$ dan pasangan $(2,8)$ memberi $|2-t|+|8-t|\\ge6$. Kedua kesamaan berlaku sekaligus tepat ketika $t\\in[0,10]\\cap[2,8]=[2,8]$. Dengan demikian nilai minimum $10+6=16$ dicapai oleh semua $t\\in[2,8]$ dan tidak oleh nilai lain. Median menurut konvensi titik tengah adalah $(2+8)/2=5$; $A(5)=5+3+3+5=16$ memverifikasi hasil.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-03. Data $2,5,11$ berbobot $1,2,1$. Cari peminimum unik $Q_w(t)=\\sum_iw_i(x_i-t)^2$ dan nilai minimumnya.",
      "hint": "Hitung jumlah bobot, rata-rata berbobot, kemudian substitusikan.",
      "answer": "Diketahui bobot $1,2,1$ tidak negatif dan $W=4>0$. Rata-rata berbobot adalah $\\bar x_w=(1(2)+2(5)+1(11))/4=23/4$. Teorema kuadrat tertimbang menjamin ini peminimum tunggal. Nilai minimumnya $Q_w(23/4)=(2-23/4)^2+2(5-23/4)^2+(11-23/4)^2=(225+18+441)/16=171/4$. Untuk sembarang $t$, $Q_w(t)=171/4+4(t-23/4)^2$, sehingga tidak ada $t$ lain yang mencapai nilai minimum.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-04. Data $1,2,3,4,20,100,120$ dipangkas dua pengamatan pada setiap ujung. Bandingkan dengan median dan rata-rata biasa.",
      "hint": "Pastikan syarat $2k<n$ sebelum memangkas.",
      "answer": "Banyak data $n=7$ dan $k=2$, sehingga $2k=4<7$. Setelah membuang $1,2$ dan $100,120$, tersisa $3,4,20$ dan $T_2=(3+4+20)/3=9$. Median adalah data keempat, yaitu $4$. Jumlah semua data $1+2+3+4+20+100+120=250$, sehingga rata-rata biasa $250/7$. Ketiga statistik berbeda karena masing-masing menggunakan informasi dan pembobotan berbeda; khususnya rata-rata biasa sangat dipengaruhi dua nilai besar.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-05. Data $1,3,8$ ditransformasikan oleh $y=10-2x$. Buktikan hubungan median sebelum dan sesudah transformasi.",
      "hint": "Transformasi dengan koefisien negatif membalik urutan.",
      "answer": "Data semula terurut $1,3,8$ dengan median $3$. Transformasi menghasilkan nilai $8,4,-6$ dalam urutan asal, sehingga urutan naiknya $-6,4,8$. Median baru adalah $4$. Secara aljabar, $10-2(3)=4$. Pembalikan urutan tidak mengubah posisi tengah untuk $n=3$, dan untuk data genap hanya menukar dua posisi tengah. Oleh sebab itu identitas $\\operatorname{med}(10-2x)=10-2\\operatorname{med}(x)$ benar, termasuk ketika koefisien pengali negatif.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-06. Salah satu pengamatan $x_j$ diganti $x_j+M$. Turunkan perubahan rata-rata dan periksa pada data $1,2,3,4$ dengan $M=40$ pada nilai terakhir.",
      "hint": "Bandingkan jumlah data sebelum dan sesudah.",
      "answer": "Jumlah semula $S=\\sum_i x_i$ dan rata-ratanya $S/n$. Sesudah satu pengamatan diganti $x_j+M$, jumlah baru $S+M$ sehingga rata-rata baru $(S+M)/n=\\bar x+M/n$. Untuk $1,2,3,4$, rata-rata awal $10/4=5/2$. Penggantian $4$ menjadi $44$ menambah jumlah sebesar $40$; rata-rata baru $(1+2+3+44)/4=50/4=25/2$, tepat $10$ lebih besar. Median tetap $(2+3)/2=5/2$ pada contoh ini, tetapi pernyataan umum yang dibuktikan hanya mengenai rata-rata.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-07. Empat data $4,6,9,y$ mempunyai rata-rata $8$. Tentukan $y$ dan median data lengkap.",
      "hint": "Gunakan jumlah total yang dipaksa oleh rata-rata.",
      "answer": "Karena ada empat pengamatan dengan rata-rata $8$, jumlah yang diperlukan ialah $4(8)=32$. Jumlah tiga pengamatan yang diketahui $4+6+9=19$, maka $y=32-19=13$. Urutan lengkap $4,6,9,13$; median adalah $(6+9)/2=15/2$. Verifikasi rata-rata: $(4+6+9+13)/4=32/4=8$. Jadi $y=13$ dan median $15/2$. Nilai $y$ tunggal karena persamaan jumlah $19+y=32$ mempunyai koefisien $y$ sama dengan satu; nilai lain tidak dapat menghasilkan rata-rata $8$. Median $15/2$ juga berada di antara dua pengamatan tengah $6$ dan $9$, sesuai definisi untuk banyak data genap.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "S-08. Untuk data $1,2,20$, tentukan peminimum kerugian kuadrat dan absolut; hitung kedua kerugian pada kedua kandidat.",
      "hint": "Bedakan teorema rata-rata dan median.",
      "answer": "Rata-rata adalah $\\bar x=(1+2+20)/3=23/3$, sehingga ini peminimum tunggal $Q(t)=\\sum(x_i-t)^2$. Median adalah $2$, sehingga ini peminimum tunggal $A(t)=\\sum|x_i-t|$. Hitung $Q(23/3)=(-20/3)^2+(-17/3)^2+(37/3)^2=(400+289+1369)/9=686/3$, sedangkan $Q(2)=1+0+324=325$, lebih besar. Untuk kerugian absolut, $A(2)=1+0+18=19$, sedangkan $A(23/3)=20/3+17/3+37/3=74/3>19$. Dua pilihan pusat berbeda karena dua fungsi kerugian berbeda; keduanya telah diverifikasi dengan perhitungan.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
