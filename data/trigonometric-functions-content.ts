import type { BookLessonContent } from "@/data/book-content-types";

/** Exact trigonometric identities, rotations and complete original problems. */
export const trigonometricFunctionsContent: BookLessonContent =  {
  "intro": [
    "Fungsi trigonometri menyatakan koordinat titik pada lingkaran satuan setelah diputar dengan sudut tertentu. Pengertian ini berlaku untuk sudut positif, negatif, dan sudut yang melebihi satu putaran; ia lebih luas daripada perbandingan sisi pada segitiga siku-siku. Jika sebuah titik bergerak satu putaran penuh, koordinatnya kembali seperti semula. Dari geometri sederhana ini muncul identitas, periodisitas, serta model osilasi.",
    "Ukuran sudut yang dipakai adalah radian. Untuk jari-jari $r>0$, busur berorientasi sepanjang $s$ berkaitan dengan sudut $\\theta=s/r$. Dalam lingkaran satuan, koordinat titik akhir rotasi $\\theta$ adalah $(\\cos\\theta,\\sin\\theta)$. Persamaan $\\cos^2\\theta+\\sin^2\\theta=1$ merupakan konsekuensi langsung persamaan lingkaran, bukan rumus yang perlu dihafal tanpa alasan.",
    "Materi bergerak dari ukuran sudut dan definisi fungsi menuju identitas Pythagoras, rumus penjumlahan sudut, sifat ganjil-genap, periodisitas, domain tangen, dan penyelesaian persamaan trigonometri. Contoh menelusuri sudut istimewa, kuadran, nilai tepat, dan model periodik; latihan menguji alasan matematis di balik setiap perhitungan.",
    "Rujukan: Weir, Hass, dan Thomas, Thomas' Calculus: Early Transcendentals, edisi ke-13 (2014), bagian fungsi trigonometri; Stewart, Calculus: Early Transcendentals, edisi ke-8 (2016), bagian trigonometri dan fungsi periodik. Bukti dan penyelesaian pada halaman ini disusun khusus untuk DMath Learning."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Sudut dalam Radian",
      "statement": "Untuk lingkaran berjari-jari $r>0$, besar sudut berorientasi $\\theta$ dalam radian adalah $\\theta=s/r$, dengan $s$ panjang busur bertanda yang dilalui dari sisi awal ke sisi akhir. Satu putaran berorientasi positif besarnya $2\\pi$ radian atau $360^\\circ$.",
      "explanation": "Radian merupakan perbandingan dua panjang, sehingga tidak memiliki satuan panjang. Arah searah jarum jam diberi tanda negatif."
    },
    {
      "kind": "definition",
      "title": "Sinus dan Kosinus pada Lingkaran Satuan",
      "statement": "Untuk setiap $\\theta\\in\\mathbb R$, putar titik $(1,0)$ pada lingkaran $x^2+y^2=1$ sebesar $\\theta$ radian berlawanan arah jarum jam. Jika titik akhirnya $(x_\\theta,y_\\theta)$, didefinisikan $\\cos\\theta=x_\\theta$ dan $\\sin\\theta=y_\\theta$.",
      "explanation": "Definisi melalui koordinat membuat sinus dan kosinus terdefinisi untuk semua sudut real, termasuk sudut negatif dan sudut lebih dari satu putaran."
    },
    {
      "kind": "definition",
      "title": "Tangen dan Domainnya",
      "statement": "Untuk $\\theta\\in\\mathbb R$ dengan $\\cos\\theta\\ne0$, tangen didefinisikan oleh $\\tan\\theta=\\sin\\theta/\\cos\\theta$. Fungsi tangen tidak terdefinisi ketika $\\cos\\theta=0$, yaitu pada $\\theta=\\pi/2+k\\pi$ dengan $k\\in\\mathbb Z$.",
      "explanation": "Pembagian oleh nol tidak boleh dilakukan; titik lingkaran satuan yang berkoordinat horizontal nol tidak mempunyai nilai tangen."
    },
    {
      "kind": "definition",
      "title": "Periode Fungsi",
      "statement": "Misalkan $f:D\\to\\mathbb R$ dan $T>0$. Bilangan $T$ disebut periode $f$ jika $x+T\\in D$ untuk setiap $x\\in D$ dan $f(x+T)=f(x)$ untuk setiap $x\\in D$. Periode fundamental adalah periode positif terkecil apabila ada.",
      "explanation": "Kembali ke nilai yang sama pada satu titik tidak cukup untuk membuktikan periode; persamaan harus berlaku bagi semua titik domain."
    },
    {
      "kind": "proposition",
      "title": "Identitas Pythagoras",
      "statement": "Untuk setiap $\\theta\\in\\mathbb R$, berlaku $\\sin^2\\theta+\\cos^2\\theta=1$. Akibatnya $|\\sin\\theta|\\le1$ dan $|\\cos\\theta|\\le1$.",
      "proof": [
        "Diketahui titik hasil rotasi $\\theta$ dari $(1,0)$ berada pada lingkaran satuan. Berdasarkan definisi sinus dan kosinus, titik tersebut adalah $(\\cos\\theta,\\sin\\theta)$. Persamaan lingkaran satuan menyatakan $x^2+y^2=1$ untuk setiap titiknya.",
        "Substitusi koordinat memberi $\\cos^2\\theta+\\sin^2\\theta=1$. Karena kedua kuadrat tidak negatif, masing-masing paling besar $1$, sehingga $|\\cos\\theta|\\le1$ dan $|\\sin\\theta|\\le1$. Misalnya untuk $\\theta=\\pi/3$, nilai $\\frac14+\\frac34=1$ memverifikasi identitas. Pernyataan terbukti. $\\square$"
      ],
      "explanation": "Identitas ini merupakan sifat geometri koordinat, bukan asumsi tentang segitiga yang hanya berlaku pada sudut lancip."
    },
    {
      "kind": "theorem",
      "title": "Rumus Penjumlahan Sudut",
      "statement": "Untuk setiap $\\alpha,\\beta\\in\\mathbb R$, berlaku $\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta$ dan $\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$.",
      "proof": [
        "Rotasi bidang sebesar $\\alpha$ adalah pemetaan linear yang mengirim basis $e_1=(1,0)$ ke $(\\cos\\alpha,\\sin\\alpha)$ dan basis $e_2=(0,1)$ ke $(-\\sin\\alpha,\\cos\\alpha)$. Citra kedua diperoleh karena rotasi mempertahankan sudut siku-siku dan orientasi. Oleh linearitas rotasi, citra $(x,y)$ adalah $(x\\cos\\alpha-y\\sin\\alpha,\\;x\\sin\\alpha+y\\cos\\alpha)$.",
        "Mulai dari $(1,0)$, rotasi sebesar $\\beta$ menghasilkan $(\\cos\\beta,\\sin\\beta)$. Rotasi lanjutan sebesar $\\alpha$ memberi koordinat $(\\cos\\beta\\cos\\alpha-\\sin\\beta\\sin\\alpha,\\;\\cos\\beta\\sin\\alpha+\\sin\\beta\\cos\\alpha)$. Komposisi dua rotasi berorientasi tersebut sama dengan rotasi sebesar $\\alpha+\\beta$, yang menurut definisi mempunyai koordinat $(\\cos(\\alpha+\\beta),\\sin(\\alpha+\\beta))$.",
        "Samakan masing-masing koordinat untuk memperoleh kedua identitas yang dinyatakan. Tidak diperlukan pembatasan sudut ke kuadran pertama karena rotasi dan koordinat didefinisikan untuk seluruh bilangan real. Pembuktian selesai. $\\square$"
      ],
      "explanation": "Tanda minus pada rumus kosinus berasal dari koordinat horizontal citra basis vertikal, yaitu $(-sinalpha,cosalpha)$."
    },
    {
      "kind": "proposition",
      "title": "Simetri dan Periodisitas",
      "statement": "Untuk setiap $\\theta\\in\\mathbb R$, berlaku $\\cos(-\\theta)=\\cos\\theta$, $\\sin(-\\theta)=-\\sin\\theta$, $\\cos(\\theta+2\\pi)=\\cos\\theta$, $\\sin(\\theta+2\\pi)=\\sin\\theta$, dan $\\tan(\\theta+\\pi)=\\tan\\theta$ ketika tangen terdefinisi.",
      "proof": [
        "Refleksi terhadap sumbu horizontal mengubah sudut berorientasi $\\theta$ menjadi $-\\theta$ dan titik $(x,y)$ menjadi $(x,-y)$. Karena itu koordinat horizontal tetap dan koordinat vertikal berubah tanda, yang membuktikan sifat genap kosinus serta ganjil sinus.",
        "Rotasi penuh $2\\pi$ mengembalikan setiap titik lingkaran satuan ke posisi semula. Definisi koordinat memberi $\\cos(\\theta+2\\pi)=\\cos\\theta$ dan $\\sin(\\theta+2\\pi)=\\sin\\theta$. Rotasi setengah putaran mengubah $(x,y)$ menjadi $(-x,-y)$, sehingga $\\cos(\\theta+\\pi)=-\\cos\\theta$ dan $\\sin(\\theta+\\pi)=-\\sin\\theta$.",
        "Jika $\\cos\\theta\\ne0$, kedua koordinat yang berlawanan tanda tetap memiliki rasio sama: $\\tan(\\theta+\\pi)=(-\\sin\\theta)/(-\\cos\\theta)=\\tan\\theta$. Domain juga terpelihara karena $\\cos(\\theta+\\pi)\\ne0$. Semua identitas terbukti. $\\square$"
      ],
      "explanation": "Pernyataan bahwa $2pi$ adalah periode belum dengan sendirinya membuktikan bahwa periode fundamentalnya $2pi$; ketunggalan periode terkecil diperiksa tersendiri."
    },
    {
      "kind": "corollary",
      "title": "Rumus Selisih Sudut",
      "statement": "Untuk semua $\\alpha,\\beta\\in\\mathbb R$, berlaku $\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$ dan $\\sin(\\alpha-\\beta)=\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta$.",
      "proof": [
        "Terapkan rumus penjumlahan pada $\\alpha+(-\\beta)$. Untuk kosinus diperoleh $\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos(-\\beta)-\\sin\\alpha\\sin(-\\beta)$.",
        "Gunakan sifat genap kosinus dan ganjil sinus: $\\cos(-\\beta)=\\cos\\beta$ dan $\\sin(-\\beta)=-\\sin\\beta$. Substitusi memberi $\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$. Dengan cara yang sama, $\\sin(\\alpha-\\beta)=\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta$. Kedua identitas terbukti. $\\square$"
      ],
      "explanation": "Rumus ini juga menunjukkan bahwa hasil kali titik dua vektor satuan bersudut $\\alpha$ dan $\\beta$ adalah kosinus selisih sudutnya."
    },
    {
      "kind": "proposition",
      "title": "Nol Sinus dan Kosinus",
      "statement": "Untuk $\\theta\\in\\mathbb R$, $\\sin\\theta=0$ jika dan hanya jika $\\theta=k\\pi$ untuk suatu $k\\in\\mathbb Z$. Selain itu, $\\cos\\theta=0$ jika dan hanya jika $\\theta=\\pi/2+k\\pi$ untuk suatu $k\\in\\mathbb Z$.",
      "proof": [
        "$(\\Rightarrow)$ Jika $\\sin\\theta=0$, titik lingkaran satuan berkoordinat vertikal nol. Persamaan $x^2+y^2=1$ memberi $x=\\pm1$, sehingga titiknya $(1,0)$ atau $(-1,0)$. Sudut yang berakhir pada kedua titik itu adalah kelipatan bulat $\\pi$, karena putaran penuh bernilai $2\\pi$ dan setengah putaran bernilai $\\pi$.",
        "$(\\Leftarrow)$ Jika $\\theta=k\\pi$, rotasi sebanyak $k$ setengah putaran berakhir pada $(1,0)$ atau $(-1,0)$. Koordinat vertikalnya nol, sehingga $\\sin\\theta=0$. Ini menyelesaikan kedua arah karakterisasi nol sinus.",
        "Untuk kosinus, $(\\Rightarrow)$ jika $\\cos\\theta=0$, titik akhir rotasi mempunyai koordinat horizontal nol. Dari $x^2+y^2=1$ diperoleh $y=\\pm1$, sehingga titiknya $(0,1)$ atau $(0,-1)$. Kedua titik itu dicapai tepat oleh sudut $\\pi/2+k\\pi$, $k\\in\\mathbb Z$. Sebaliknya, $(\\Leftarrow)$ jika $\\theta=\\pi/2+k\\pi$, rotasi dimulai dengan seperempat putaran lalu dilanjutkan $k$ setengah putaran; titik akhir tetap pada sumbu vertikal, sehingga koordinat horizontalnya nol dan $\\cos\\theta=0$. Kedua arah bagi kedua fungsi terbukti. $\\square$"
      ],
      "explanation": "Kriteria ini memberikan domain tangen secara tepat; mengabaikan titik nol kosinus menghasilkan pembagian yang tidak terdefinisi."
    }
  ],
  "examples": [
    {
      "title": "Contoh Sudut Radian",
      "forDefinition": "Sudut dalam Radian",
      "problem": "Busur berorientasi positif sepanjang $5\\pi$ cm berada pada lingkaran berjari-jari $10$ cm. Tentukan sudut dalam radian dan derajat.",
      "solution": [
        "Diketahui panjang busur $s=5\\pi$ cm dan jari-jari $r=10$ cm dengan $r>0$. Menurut definisi radian, $\\theta=s/r=(5\\pi)/10=\\pi/2$. Satuan sentimeter pada pembilang dan penyebut saling menghapus, sehingga sudut tidak bersatuan panjang.",
        "Karena $2\\pi$ radian sama dengan $360^\\circ$, diperoleh $\\pi/2$ radian $=90^\\circ$. Sudut positif berarti rotasi berlawanan arah jarum jam dari sisi awal.",
        "Pemeriksaan balik menggunakan rumus busur $s=r\\theta=10(\\pi/2)=5\\pi$ cm, tepat sama dengan data. Nilai sudut yang dicari adalah $\\pi/2$ radian atau $90^\\circ$."
      ],
      "conclusion": "Sudut pusatnya adalah seperempat putaran positif."
    },
    {
      "title": "Contoh Koordinat Sudut Kuadran II",
      "forDefinition": "Sinus dan Kosinus pada Lingkaran Satuan",
      "problem": "Tentukan $\\sin(2\\pi/3)$ dan $\\cos(2\\pi/3)$ tanpa kalkulator.",
      "solution": [
        "Sudut $2\\pi/3=\\pi-\\pi/3$ berada di kuadran II. Sudut acuan $\\pi/3$ memiliki koordinat lingkaran satuan $(1/2,\\sqrt3/2)$, yang diperoleh dari segitiga sama sisi dengan sisi $2$ dan tinggi $\\sqrt3$.",
        "Refleksi titik terhadap sumbu vertikal mengubah koordinat horizontal menjadi negatif dan mempertahankan koordinat vertikal. Karena itu $\\cos(2\\pi/3)=-1/2$ dan $\\sin(2\\pi/3)=\\sqrt3/2$.",
        "Verifikasi identitas Pythagoras memberi $(-1/2)^2+(\\sqrt3/2)^2=1/4+3/4=1$. Tanda kedua koordinat juga sesuai kuadran II."
      ],
      "conclusion": "Nilai tepatnya adalah kosinus negatif setengah dan sinus positif akar tiga per dua."
    },
    {
      "title": "Contoh Tangen dan Pembagian oleh Nol",
      "forDefinition": "Tangen dan Domainnya",
      "problem": "Hitung $\\tan(3\\pi/4)$ dan tentukan apakah $\\tan(\\pi/2)$ ada.",
      "solution": [
        "Pada sudut $3\\pi/4$, koordinat lingkaran satuan adalah $(-\\sqrt2/2,\\sqrt2/2)$. Karena kosinusnya tidak nol, definisi tangen sah dan memberi $\\tan(3\\pi/4)=(\\sqrt2/2)/(-\\sqrt2/2)=-1$.",
        "Pada sudut $\\pi/2$, koordinatnya $(0,1)$, sehingga $\\cos(\\pi/2)=0$. Rasio $\\sin(\\pi/2)/\\cos(\\pi/2)=1/0$ tidak terdefinisi pada bilangan real.",
        "Perbandingan ini menunjukkan mengapa nilai sinus yang ada tidak menjamin nilai tangen ada. Hanya sudut dengan kosinus tak nol yang termasuk domain tangen."
      ],
      "conclusion": "Tangen pada $3pi/4$ bernilai $-1$, sedangkan pada $pi/2$ tidak terdefinisi."
    },
    {
      "title": "Contoh Model Periodik",
      "forDefinition": "Periode Fungsi",
      "problem": "Untuk $f(t)=3\\sin(2t-\\pi/3)+1$, tentukan periode, amplitudo, garis tengah, dan pergeseran fase.",
      "solution": [
        "Tulis argumen sebagai $2(t-\\pi/6)$. Bentuk $3\\sin(2(t-\\pi/6))+1$ menunjukkan amplitudo $3$, garis tengah $y=1$, dan pergeseran horizontal $\\pi/6$ ke kanan.",
        "Untuk memperoleh periode, pilih $T>0$ sehingga kenaikan argumen $2T$ adalah satu putaran penuh $2\\pi$. Diperoleh $T=\\pi$. Secara langsung, $f(t+\\pi)=3\\sin(2t+2\\pi-\\pi/3)+1=f(t)$ untuk semua $t\\in\\mathbb R$.",
        "Pemeriksaan pada titik $t=\\pi/6$ menghasilkan $f(\\pi/6)=1$ dan $f(\\pi/6+\\pi)=1$. Nilai maksimum $4$ dan minimum $-2$ juga konsisten dengan amplitudo $3$ di sekitar garis tengah $1$."
      ],
      "conclusion": "Periode model adalah $pi$, amplitudo 3, dan garis tengah 1."
    },
    {
      "title": "Contoh Persamaan Sinus",
      "problem": "Tentukan seluruh $\\theta\\in[0,2\\pi)$ dengan $\\sin\\theta=\\sqrt3/2$.",
      "solution": [
        "Diketahui nilai sinus positif, sehingga sudut dalam satu putaran harus berada di kuadran I atau II. Sudut acuan $\\pi/3$ mempunyai sinus $\\sqrt3/2$ berdasarkan segitiga istimewa.",
        "Di kuadran I diperoleh $\\theta=\\pi/3$. Refleksi terhadap sumbu vertikal memberi sudut kuadran II $\\theta=\\pi-\\pi/3=2\\pi/3$ dengan koordinat vertikal sama.",
        "Keduanya berada dalam $[0,2\\pi)$ dan memenuhi persamaan. Tidak ada sudut lain karena pada setiap setengah lingkaran koordinat vertikal $\\sqrt3/2$ dicapai tepat pada dua titik simetris tersebut."
      ],
      "conclusion": "Himpunan solusi adalah ${pi/3,2pi/3}$."
    },
    {
      "title": "Contoh Rumus Selisih",
      "problem": "Verifikasi $\\cos(\\pi/3-\\pi/6)$ melalui rumus selisih dan nilai sudut istimewa.",
      "solution": [
        "Diketahui $\\alpha=\\pi/3$ dan $\\beta=\\pi/6$. Rumus selisih menyatakan $\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$.",
        "Substitusikan $\\cos(\\pi/3)=1/2$, $\\cos(\\pi/6)=\\sqrt3/2$, $\\sin(\\pi/3)=\\sqrt3/2$, dan $\\sin(\\pi/6)=1/2$. Ruas kanan menjadi $\\sqrt3/4+\\sqrt3/4=\\sqrt3/2$.",
        "Karena $\\pi/3-\\pi/6=\\pi/6$, ruas kiri langsung bernilai $\\cos(\\pi/6)=\\sqrt3/2$. Kedua cara cocok dan tanda plus pada rumus kosinus selisih terverifikasi."
      ],
      "conclusion": "Nilai kosinus selisih adalah $sqrt3/2$."
    },
    {
      "title": "Contoh Nonperiode Setengah Putaran",
      "problem": "Apakah $\\pi$ merupakan periode fungsi $f(t)=\\sin t$?",
      "solution": [
        "Definisi periode mengharuskan $\\sin(t+\\pi)=\\sin t$ untuk setiap $t$. Namun rumus penjumlahan memberi $\\sin(t+\\pi)=\\sin t\\cos\\pi+\\cos t\\sin\\pi=-\\sin t$.",
        "Pilih $t=\\pi/2$. Nilai awal $\\sin(\\pi/2)=1$, sedangkan nilai setelah digeser $\\sin(3\\pi/2)=-1$. Kedua nilai berbeda, sehingga satu contoh tandingan sudah cukup menolak klaim periode $\\pi$.",
        "Sebaliknya, rotasi penuh menghasilkan $\\sin(t+2\\pi)=\\sin t$ untuk semua $t$. Pemeriksaan ini membedakan kesamaan pada beberapa titik dari syarat universal dalam definisi periode."
      ],
      "conclusion": "Bilangan $pi$ bukan periode sinus, sedangkan $2pi$ merupakan periode."
    },
    {
      "title": "Contoh Domain Model Tangen",
      "problem": "Tentukan domain real $g(t)=\\tan(2t-\\pi/2)$ dan periksa $t=0$.",
      "solution": [
        "Definisi tangen mensyaratkan $\\cos(2t-\\pi/2)\\ne0$. Nol kosinus terjadi ketika $2t-\\pi/2=\\pi/2+k\\pi$, dengan $k\\in\\mathbb Z$.",
        "Selesaikan persamaan sudut terlarang: $2t=\\pi+k\\pi$, sehingga $t=(k+1)\\pi/2$. Karena $k+1$ juga menjangkau seluruh bilangan bulat, domainnya $\\mathbb R\\setminus\\{k\\pi/2:k\\in\\mathbb Z\\}$.",
        "Pada $t=0$, argumen $-\\pi/2$ mempunyai kosinus nol, sehingga $g(0)$ tidak terdefinisi. Pengujian ini sesuai himpunan titik yang dikeluarkan."
      ],
      "conclusion": "Semua kelipatan bulat $pi/2$ harus dikeluarkan dari domain."
    }
  ],
  "exercises": [
    {
      "prompt": "TG-01. Ubah $150^\\circ$ ke radian, lalu hitung panjang busur pada lingkaran berjari-jari $12$ cm.",
      "hint": "Gunakan $180^\\circ=\\pi$ radian dan $s=r\\theta$.",
      "answer": "Diketahui sudut pusat $150^\\circ$ dan jari-jari $r=12$ cm. Konversi ke radian memakai perbandingan satu putaran: $\\theta=150(\\pi/180)=5\\pi/6$ radian. Karena sudut ini lebih kecil daripada $\\pi$, panjang busurnya harus kurang daripada setengah keliling $12\\pi$ cm. Rumus panjang busur dalam radian memberikan $s=r\\theta=12(5\\pi/6)=10\\pi$ cm. Pemeriksaan balik: $s/r=(10\\pi)/12=5\\pi/6$, yang dikonversi menjadi $150^\\circ$. Selain itu $10\\pi<12\\pi$, sesuai ukuran sudut. Panjang busur yang diminta tepat $10\\pi$ cm."
    },
    {
      "prompt": "TG-02. Tentukan nilai tepat $\\sin(5\\pi/6)$ dan $\\cos(5\\pi/6)$ serta periksa identitas Pythagoras.",
      "hint": "Sudut acuan adalah $pi/6$ dan sudut berada di kuadran II.",
      "answer": "Diketahui $5\\pi/6=\\pi-\\pi/6$, sehingga titik akhirnya berada di kuadran II. Sudut acuan $\\pi/6$ mempunyai koordinat $(\\sqrt3/2,1/2)$ pada lingkaran satuan. Refleksi terhadap sumbu vertikal mengubah tanda koordinat horizontal saja. Diperoleh $\\cos(5\\pi/6)=-\\sqrt3/2$ dan $\\sin(5\\pi/6)=1/2$. Pemeriksaan identitas memberikan $(1/2)^2+(-\\sqrt3/2)^2=1/4+3/4=1$. Sinus positif dan kosinus negatif juga cocok dengan kuadran II. Kedua nilai tepat telah diperoleh tanpa pendekatan desimal. Pemeriksaan tambahan menggunakan rumus selisih memberi $\\sin(\\pi-\\pi/6)=\\sin(\\pi/6)=1/2$ dan $\\cos(\\pi-\\pi/6)=-\\cos(\\pi/6)=-\\sqrt3/2$, sesuai hasil koordinat."
    },
    {
      "prompt": "TG-03. Buktikan $1+\\tan^2\\theta=1/\\cos^2\\theta$ pada seluruh domain yang sah dan jelaskan mengapa $\\theta=\\pi/2$ dikecualikan.",
      "hint": "Mulai dari $\\sin^2\\theta+\\cos^2\\theta=1$ dan periksa penyebut.",
      "answer": "Diketahui $\\cos\\theta\\ne0$, sehingga $\\tan\\theta=\\sin\\theta/\\cos\\theta$ dan pembagian oleh $\\cos^2\\theta$ sah. Identitas Pythagoras memberi $\\sin^2\\theta+\\cos^2\\theta=1$. Bagi setiap suku dengan $\\cos^2\\theta$ untuk memperoleh $\\sin^2\\theta/\\cos^2\\theta+1=1/\\cos^2\\theta$, yakni $1+\\tan^2\\theta=1/\\cos^2\\theta$. Sebagai pemeriksaan, pada $\\theta=\\pi/4$ kedua ruas bernilai $2$. Pada $\\theta=\\pi/2$, kosinus nol, sehingga kedua bentuk yang memuat pembagian tidak terdefinisi; identitas tidak boleh diterapkan di titik itu. Pembuktian selesai. $\\square$"
    },
    {
      "prompt": "TG-04. Gunakan rumus penjumlahan untuk menghitung $\\sin(\\pi/6+\\pi/3)$ dan verifikasi secara geometris.",
      "hint": "Gunakan $\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$.",
      "answer": "Diketahui $\\alpha=\\pi/6$ dan $\\beta=\\pi/3$. Rumus penjumlahan memberi $\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta$. Substitusi nilai sudut istimewa menghasilkan $(1/2)(1/2)+(\\sqrt3/2)(\\sqrt3/2)=1/4+3/4=1$. Secara geometris, $\\pi/6+\\pi/3=\\pi/2$, dan titik lingkaran satuan pada sudut $\\pi/2$ adalah $(0,1)$, sehingga sinusnya tepat $1$. Kedua perhitungan saling memverifikasi. Hasilnya tidak bergantung pada pendekatan desimal dan menunjukkan konsistensi rumus penjumlahan dengan definisi lingkaran satuan."
    },
    {
      "prompt": "TG-05. Tentukan seluruh $\\theta\\in[0,2\\pi)$ yang memenuhi $\\cos\\theta=-1/2$.",
      "hint": "Periksa kuadran II dan III dengan sudut acuan $pi/3$.",
      "answer": "Diketahui kosinus bernilai negatif. Pada satu putaran $[0,2\\pi)$, koordinat horizontal negatif hanya terjadi di kuadran II dan III. Sudut acuan $\\pi/3$ memiliki kosinus $1/2$, sehingga sudut kuadran II adalah $\\pi-\\pi/3=2\\pi/3$ dan sudut kuadran III adalah $\\pi+\\pi/3=4\\pi/3$. Substitusi pada lingkaran satuan memberi $\\cos(2\\pi/3)=-1/2$ dan $\\cos(4\\pi/3)=-1/2$. Kedua sudut berada dalam interval yang ditentukan. Tidak ada sudut lain karena garis vertikal $x=-1/2$ memotong lingkaran satuan tepat di dua titik. Himpunan solusinya $\\{2\\pi/3,4\\pi/3\\}$."
    },
    {
      "prompt": "TG-06. Selesaikan $\\tan\\theta=1$ untuk $\\theta\\in[0,2\\pi)$, dan periksa domain.",
      "hint": "Gunakan sudut acuan $pi/4$ dan periode $pi$.",
      "answer": "Diketahui $\\tan\\theta=\\sin\\theta/\\cos\\theta$ hanya jika $\\cos\\theta\\ne0$. Nilai tangen $1$ terjadi ketika koordinat sinus dan kosinus sama serta tidak nol. Sudut acuan $\\pi/4$ memenuhi $\\sin(\\pi/4)=\\cos(\\pi/4)=\\sqrt2/2$. Karena tangen berperiode $\\pi$, kandidat dalam $[0,2\\pi)$ adalah $\\pi/4$ dan $5\\pi/4$. Verifikasi: pada keduanya pembilang dan penyebut sama, masing-masing keduanya positif atau keduanya negatif, sehingga rasionya $1$. Kosinus di kedua sudut tak nol, jadi kandidat termasuk domain. Tidak ada kandidat lain dalam satu putaran. Solusinya $\\{\\pi/4,5\\pi/4\\}$."
    },
    {
      "prompt": "TG-07. Model tinggi air $h(t)=2+1{,}5\\cos(\\pi t/6)$ meter untuk $t\\ge0$ jam. Tentukan periode, tinggi maksimum-minimum, dan waktu pencapaiannya pada $[0,12]$.",
      "hint": "Satu putaran kosinus terjadi ketika argumennya bertambah $2pi$.",
      "answer": "Diketahui $h(t)=2+1{,}5\\cos(\\pi t/6)$ untuk $t\\ge0$. Periode positif terkecil memenuhi $(\\pi/6)T=2\\pi$, sehingga $T=12$ jam. Karena $-1\\le\\cos u\\le1$, tinggi berada dalam interval $2-1{,}5\\le h(t)\\le2+1{,}5$, yaitu $0{,}5\\le h(t)\\le3{,}5$ meter. Maksimum $3{,}5$ terjadi ketika argumen kelipatan $2\\pi$: pada interval $[0,12]$, waktunya $t=0$ dan $t=12$. Minimum $0{,}5$ terjadi ketika argumen $\\pi$, yaitu $t=6$. Substitusi langsung memberi $h(0)=h(12)=3{,}5$ dan $h(6)=0{,}5$, memverifikasi hasil dan satuannya."
    },
    {
      "prompt": "TG-08. Buktikan bahwa periode fundamental $\\sin t$ adalah $2\\pi$, bukan $\\pi$.",
      "hint": "Jika $T>0$ periode, gunakan $t=0$ dan $t=pi/2$.",
      "answer": "Diketahui $T>0$ merupakan periode sinus, sehingga $\\sin(t+T)=\\sin t$ untuk setiap $t\\in\\mathbb R$. Ambil $t=0$: $\\sin T=\\sin0=0$. Karakterisasi nol sinus memberi $T=k\\pi$ untuk suatu $k\\in\\mathbb Z$. Ambil pula $t=\\pi/2$: $\\sin(\\pi/2+T)=\\sin(\\pi/2)=1$. Rumus penjumlahan menyatakan $\\sin(\\pi/2+T)=\\cos T$, sehingga $\\cos T=1$. Di antara kelipatan $\\pi$, hal itu hanya terjadi ketika $k$ genap, yakni $T=2m\\pi$. Karena $T>0$, nilai terkecil adalah $2\\pi$. Sebaliknya, rotasi penuh membuktikan $\\sin(t+2\\pi)=\\sin t$ untuk semua $t$, sehingga $2\\pi$ benar-benar periode. Kedua arah membuktikan bahwa periode fundamental sinus tepat $2\\pi$. $\\square$"
    }
  ],
  "mistakes": [],
  "connections": []
};
