export const levels = ["SD","SMP","SMA","Kuliah"] as const;
export type Level = typeof levels[number];
export type Source = {kind:"original"|"competition";label:string;competition?:string;year?:number;stage?:string;number?:string;url?:string;note?:string;collection?:"MathNet"|"AoPS";collectionUrl?:string};
export type CompetitionProblem = {id:string;level:Level;topic:string;difficulty:number;title:string;prompt:string;source:Source};
export const competitionProblems: CompetitionProblem[] = [
  {
    "id": "sd-001",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Tiga kotak setelah dua pemindahan",
    "prompt": "Tiga kotak berisi seluruhnya 48 kelereng. Lima kelereng dipindahkan dari kotak pertama ke kotak kedua, kemudian tiga kelereng dipindahkan dari kotak kedua ke kotak ketiga. Setelah kedua pemindahan, ketiga kotak berisi sama banyak kelereng. Tentukan isi setiap kotak sebelum pemindahan.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sd-002",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Susunan kartu dengan puncak di tengah",
    "prompt": "Tersedia lima kartu bernomor 1, 2, 3, 4, dan 5. Tiga kartu berbeda dipilih dan disusun berjajar. Nomor kartu tengah harus lebih besar daripada kedua nomor di sampingnya, sedangkan jumlah kedua nomor di sampingnya harus genap. Berapa banyak susunan yang mungkin?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sd-003",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Keliling papan setelah enam ubin dilepas",
    "prompt": "Suatu papan persegi tersusun atas $36$ ubin persegi bersisi $1$ cm dalam susunan enam baris dan enam kolom. Empat ubin di sudut dilepas, kemudian ubin pada baris pertama kolom ketiga dan baris keenam kolom keempat juga dilepas. Tentukan luas dan keliling bangun yang tersisa.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sd-004",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kode dua angka dengan dua pembagian",
    "prompt": "Suatu kode merupakan bilangan bulat positif dua digit. Jika dibagi $4$, sisanya $1$. Jika dibagi $5$, sisanya $2$. Jumlah kedua digitnya adalah $10$. Tentukan kode tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-001",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Pembagi polinomial pada bilangan asli",
    "prompt": "Tentukan semua bilangan bulat positif $n$ sedemikian sehingga $n+1$ membagi $n^2+5n+12$. Buktikan bahwa tidak ada solusi lain.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-002",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Pemulihan tiga bilangan dari hasil kali",
    "prompt": "Tiga bilangan real positif $x,y,z$ memenuhi $x+y+z=9$, $xy+yz+zx=26$, dan $xyz=24$. Tanpa menebak ketiga bilangan, tentukan himpunan $\\{x,y,z\\}$ serta nilai $x^3+y^3+z^3$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-003",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Pemilihan titik pada segi delapan",
    "prompt": "Dari delapan titik sudut segi delapan beraturan, dipilih tepat tiga titik. Tidak ada dua titik terpilih yang merupakan ujung dari sisi yang sama atau yang saling berhadapan. Tentukan banyak himpunan tiga titik yang memenuhi kedua syarat.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-004",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas segitiga dari tiga sisi persegi panjang",
    "prompt": "Persegi panjang $ABCD$ memiliki $AB=12$ dan $BC=8$. Titik $P,Q,R$ masing-masing terletak pada $AB,BC,CD$ dengan $AP=3$, $BQ=2$, dan $CR=4$. Tentukan luas segitiga $PQR$ dengan memanfaatkan luas bangun-bangun di luar segitiga tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-001",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Batas tajam variasi tiga bilangan",
    "prompt": "Misalkan $a,b,c$ merupakan bilangan real positif dengan $a+b+c=1$. Tentukan supremum dari $$\\frac{(a-b)^2}{a+b}+\\frac{(b-c)^2}{b+c}+\\frac{(c-a)^2}{c+a}.$$ Selidiki apakah supremum tersebut dapat dicapai.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-002",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Lintasan dengan satu titik singgah diagonal",
    "prompt": "Suatu lintasan dari $(0,0)$ ke $(5,5)$ menggunakan langkah $(1,0)$ atau $(0,1)$ dan tidak pernah berada di atas garis $y=x$. Berapa banyak lintasan yang melalui tepat satu titik pada garis $y=x$ selain titik awal dan titik akhir?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-003",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Pembagi ekspresi eksponensial",
    "prompt": "Tentukan semua bilangan bulat positif $n$ sehingga $2^n-1$ membagi $3\\cdot 2^{2n}+5\\cdot 2^n+7$. Buktikan kelengkapan jawaban tanpa memeriksa nilai $n$ satu per satu.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-004",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Luas segitiga dengan tali penghubung",
    "prompt": "Segitiga $ABC$ siku-siku di $A$, dengan $AB=10$ dan $AC=12$. Titik $P$ pada $AB$ dan titik $Q$ pada $AC$ memenuhi $BP+CQ=12$. Tentukan luas maksimum segitiga $APQ$ dan posisi kedua titik saat maksimum dicapai.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-001",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Laju asimtotik barisan rasional rekursif",
    "prompt": "Diketahui $a_1>0$ dan $a_{n+1}=\\frac{a_n}{1+a_n^2}$ untuk setiap bilangan bulat positif $n$. Buktikan bahwa $$\\lim_{n\\to\\infty}\\sqrt n\\,a_n=\\frac{1}{\\sqrt2}.$$",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-002",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Klasifikasi matriks dengan persamaan transpose",
    "prompt": "Misalkan $A$ merupakan matriks real berordo $n$ yang memenuhi $A^2+A^{\\mathsf T}=I_n$. Buktikan bahwa $A$ simetris. Kemudian, tentukan seluruh kemungkinan nilai eigen $A$ dan karakterisasikan seluruh matriks yang memenuhi persamaan tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-003",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Bijeksi perkalian simetris pada grup berorde ganjil",
    "prompt": "Misalkan $G$ merupakan grup berhingga berorde ganjil dan $a\\in G$. Buktikan bahwa pemetaan $T_a:G\\to G$ dengan $T_a(x)=xax$ merupakan bijeksi. Nyatakan $T_a^{-1}(y)$ secara eksplisit menggunakan $a,y$, dan $|G|$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-004",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 5,
    "title": "Modulus konstan pada akar satuan",
    "prompt": "Misalkan $n\\ge1$ merupakan bilangan bulat dan $P\\in\\mathbb C[z]$ merupakan polinomial tak nol dengan $\\deg P\\le n$. Diketahui bahwa $|P(z)|$ bernilai sama pada seluruh akar persamaan $z^{2n+1}=1$. Buktikan bahwa $P(z)=cz^k$ untuk suatu $c\\in\\mathbb C\\setminus\\{0\\}$ dan $k\\in\\{0,1,\\ldots,n\\}$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "imo-2019-1",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada bilangan bulat",
    "prompt": "Classify the functions $f:\\mathbb Z\\to\\mathbb Z$ satisfying\n\n$$f(2a)+2f(b)=f(f(a+b))$$\n\nfor every pair of integers $a,b$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2019 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2019,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending.",
      "stage": "IMO"
    }
  },
  {
    "id": "imc-2024-1",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Bilangan kompleks pada lingkaran satuan",
    "prompt": "Determine all pairs $(a,b)\\in\\mathbb C\\times\\mathbb C$ satisfying\n\n$$|a|=|b|=1\\quad\\text{and}\\quad a+b+a\\overline b\\in\\mathbb R.$$",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF.",
      "stage": "IMC"
    }
  },
  {
    "id": "sd-005",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Tiga bilangan dari putaran angka",
    "prompt": "Tiga digit berbeda $a,b,c$ dipilih dari $\\{1,2,\\ldots,9\\}$. Dibentuk tiga bilangan dua digit $\\overline{ab}$, $\\overline{bc}$, dan $\\overline{ca}$. Jumlah ketiganya adalah $132$, bilangan $\\overline{ab}$ lebih besar $22$ daripada $\\overline{bc}$, dan $a$ merupakan digit terbesar di antara $a,b,c$. Tentukan ketiga bilangan tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sd-006",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Bendera dengan dua warna bersebelahan",
    "prompt": "Empat posisi berjajar diisi dengan tepat dua bendera merah, satu bendera biru, dan satu bendera hijau. Kedua bendera merah harus bersebelahan, sedangkan bendera biru dan hijau tidak boleh bersebelahan. Jika bendera dengan warna yang sama tidak dibedakan, tentukan banyak susunan warna yang mungkin.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sd-007",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Persegi yang tidak memuat ubin hilang",
    "prompt": "Papan berukuran $4\\times4$ tersusun atas $16$ ubin persegi satuan. Ubin pada baris kedua kolom kedua dilepas. Tentukan banyak persegi dari semua ukuran yang merupakan gabungan utuh ubin yang tersisa.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sd-008",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Tepat satu lampu menyala",
    "prompt": "Tiga lampu berkedip setiap 4, 6, dan 10 detik. Ketiganya berkedip bersamaan pada detik ke-0. Dari detik ke-1 sampai detik ke-60, berapa banyak detik ketika tepat satu lampu berkedip?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-005",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Pasangan bilangan dengan hasil kali bergeser",
    "prompt": "Tentukan semua pasangan terurut bilangan bulat positif $(x,y)$ yang memenuhi $xy=2x+2y+12$. Kemudian, tentukan pasangan yang meminimumkan $x^2+y^2$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-006",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Jabat tangan antara dua kelompok",
    "prompt": "Delapan peserta dibagi ke dalam dua kelompok yang telah ditentukan, masing-masing beranggotakan empat orang. Setiap peserta berjabat tangan dengan tepat tiga orang dari kelompok lain. Tidak ada jabat tangan di dalam kelompok yang sama, dan setiap pasangan berjabat tangan paling banyak sekali. (a) Buktikan bahwa setiap peserta pada kelompok pertama memiliki tepat satu peserta pada kelompok kedua yang tidak berjabat tangan dengannya. (b) Tentukan banyak pola jabat tangan berbeda jika seluruh peserta dibedakan.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-007",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Luas segitiga dengan titik yang bergerak",
    "prompt": "Persegi $ABCD$ memiliki panjang sisi 12. Titik $P$ pada $AB$ dan titik $Q$ pada $BC$ memenuhi $AP=BQ=x$, dengan $0<x<12$. Tentukan nilai $x$ jika luas segitiga $DPQ$ adalah 54 satuan luas. Buktikan bahwa tidak ada nilai lainnya.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "smp-008",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Dua pembagi untuk jumlah tiga suku",
    "prompt": "Tentukan semua bilangan bulat $n$ dengan $1\\le n\\le91$ sehingga $n^2+n+1$ habis dibagi 7 dan 13. Jelaskan mengapa tidak ada bilangan lain dalam rentang tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-005",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Polinomial dari selisih nilai berurutan",
    "prompt": "Tentukan semua polinomial real $P$ yang memenuhi $P(0)=1$ dan $$P(x+1)-P(x)=3x^2+5x+4$$ untuk setiap $x\\in\\mathbb R$. Kemudian, tentukan apakah $P$ mempunyai tepat satu akar real.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-006",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Subhimpunan dengan tepat satu pasangan berurutan",
    "prompt": "Misalkan $n,k$ merupakan bilangan bulat positif dengan $2\\le k\\le n$ dan $n\\ge2k-2$. Tentukan banyak himpunan bagian $S$ dari $\\{1,2,\\ldots,n\\}$ dengan $|S|=k$ dan tepat satu indeks $i\\in\\{1,\\ldots,n-1\\}$ memenuhi $i,i+1\\in S$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-007",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Persamaan kuadrat dengan pergeseran berbeda",
    "prompt": "Tentukan semua pasangan bilangan bulat positif $(x,y)$ yang memenuhi $x^2-y^2=2x+4y+20$. Buktikan kelengkapan jawaban dengan faktorisasi bilangan bulat.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "sma-008",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Ekstrem jumlah kuadrat jarak ke tiga sisi",
    "prompt": "Segitiga sama sisi $ABC$ mempunyai tinggi $h$. Untuk titik $P$ di dalam atau pada batas segitiga, misalkan $d_1,d_2,d_3$ berturut-turut jarak $P$ ke garis $AB,BC,CA$. Tentukan nilai minimum dan maksimum $d_1^2+d_2^2+d_3^2$ serta seluruh posisi $P$ yang mencapai kedua nilai tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-005",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Konvergensi seragam dan kegagalan pada turunan",
    "prompt": "Untuk setiap $x\\in[0,1]$, diperhatikan deret fungsi $$\\sum_{n=0}^{\\infty}x^n(1-x)^2.$$ Tentukan fungsi jumlahnya pada seluruh $[0,1]$. Buktikan bahwa deret konvergen seragam, kemudian selidiki konvergensi seragam deret turunan dari fungsi-fungsi sukunya pada interval yang sama.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-006",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Pasangan spektrum matriks antikomutatif",
    "prompt": "Misalkan $A,B$ merupakan matriks real simetris berordo sama yang memenuhi $A^2+B^2=I$ dan $AB+BA=0$. Buktikan bahwa setiap nilai eigen $\\lambda$ dari $A$ dengan $-1<\\lambda<1$ memiliki multiplisitas yang sama dengan $-\\lambda$. Karakterisasikan pemetaan linear oleh $B$ antara kedua ruang eigen tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-007",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Serat pemetaan dari automorfisme involutif",
    "prompt": "Misalkan $G$ merupakan grup berhingga dan $\\alpha:G\\to G$ merupakan automorfisme dengan $\\alpha^2=\\operatorname{id}_G$. Definisikan $F:G\\to G$ dan $H\\subseteq G$ melalui $$F(x)=x^{-1}\\alpha(x),\\qquad H=\\{g\\in G\\mid\\alpha(g)=g\\}.$$ (a) Buktikan bahwa $H$ merupakan subgrup dari $G$ dan setiap serat tak kosong dari $F$ berbentuk koset kanan $Hx$ untuk suatu $x\\in G$. (b) Tentukan kardinalitas $F(G)$. (c) Buktikan bahwa $\\alpha(y)=y^{-1}$ untuk setiap $y\\in F(G)$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "univ-008",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Regularitas graf dari jumlah tetangga bersama",
    "prompt": "Misalkan $G$ merupakan graf sederhana tak berarah dengan $n\\ge2$ titik. Untuk setiap dua titik berbeda $u,v$, terdapat tepat dua titik yang bertetangga dengan keduanya. Buktikan bahwa $G$ regular. Jika derajat setiap titik adalah $d$, buktikan pula bahwa $d(d-1)=2(n-1)$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed",
      "note": "Soal orisinal DMath; hipotesis, keterdefinisian, dan keterpecahan diperiksa secara matematis. Tidak memerlukan pencocokan naskah kompetisi."
    }
  },
  {
    "id": "osnk-sd-2024-01",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Penjumlahan kelipatan",
    "prompt": "Susi menyusun kelipatan positif 2 dari yang terkecil, sedangkan Wati menyusun kelipatan positif 3 dengan cara yang sama. Tentukan jumlah suku ke-25 pada daftar Susi dan suku ke-20 pada daftar Wati. Pilihan: A. 100; B. 110; C. 115; D. 125.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2024 — Nomor 1",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 1",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-tahun-2024.html?m=0",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN-K"
    }
  },
  {
    "id": "osnp-sd-2024-01",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Faktor bilangan berpangkat",
    "prompt": "Tentukan bilangan bulat terbesar $n$ sehingga $3^n$ merupakan faktor dari $18^{10}$.",
    "source": {
      "kind": "competition",
      "label": "OSN-P SD 2024 — Nomor 1",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 1",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN-P"
    }
  },
  {
    "id": "osnp-sd-2024-04",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Keterbagian bilangan lima angka",
    "prompt": "Bilangan lima angka memiliki bentuk $\\overline{a679b}$. Tentukan bilangan tersebut jika habis dibagi 72.",
    "source": {
      "kind": "competition",
      "label": "OSN-P SD 2024 — Nomor 4",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 4",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN-P"
    }
  },
  {
    "id": "osnp-sd-2024-18",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pemilihan jenis roti",
    "prompt": "Toko kue Echo menyediakan delapan jenis roti. Anita ingin membeli lima roti berlainan jenis. Jika dua jenis roti sudah ditentukan, berapa banyak kemungkinan pilihan lima roti Anita?",
    "source": {
      "kind": "competition",
      "label": "OSN-P SD 2024 — Nomor 18",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 18",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN-P"
    }
  },
  {
    "id": "osnk-smp-2024-09",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Jumlah empat bilangan berurutan",
    "prompt": "Bilangan bulat positif $n$ disebut JUMPAT jika $1+2+\\cdots+n$ dapat dinyatakan sebagai jumlah empat bilangan bulat positif berurutan. Tentukan banyak bilangan JUMPAT yang lebih kecil dari 2024. Pilihan: A. 252; B. 253; C. 504; D. 505.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2024 — Nomor 9",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 9",
      "url": "https://www.konsep-matematika.com/2025/11/solusi-osk-mat-smp-tahun-2024-nomor-1-10.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN-K"
    }
  },
  {
    "id": "osnk-smp-2024-08",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Rasio hasil kali",
    "prompt": "Misalkan $p,q,r,s$ merupakan bilangan real positif dengan $$p^2+q^2=r^2+s^2,\\qquad p^2+s^2-ps=q^2+r^2+qr.$$ Tentukan nilai $\\frac{pq+rs}{ps+qr}$. Pilihan: A. $\\frac23$; B. $\\frac22$; C. $\\frac33$; D. $\\frac32$.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2024 — Nomor 8",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 8",
      "url": "https://www.konsep-matematika.com/2025/11/solusi-osk-mat-smp-tahun-2024-nomor-1-10.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN-K"
    }
  },
  {
    "id": "osn-sma-2024-h1-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Sistem persamaan bentuk akar",
    "prompt": "Tentukan semua pasangan bilangan real positif $(a,b)$ yang memenuhi $$\\begin{cases}\\sqrt a+\\sqrt b=6,\\\\ \\sqrt{a-5}+\\sqrt{b-5}=4.\\end{cases}$$",
    "source": {
      "kind": "competition",
      "label": "OSN SMA 2024 — Hari 1, Nomor 1",
      "competition": "OSN",
      "year": 2024,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.aiairyn.com/2024/08/salinan-soal-osn-sma-2024-bidang.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "OSN Nasional"
    }
  },
  {
    "id": "imo-2024-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian jumlah fungsi lantai",
    "prompt": "Find the real numbers $\\alpha$ for which\n\n$$\\lfloor\\alpha\\rfloor+\\lfloor2\\alpha\\rfloor+\\cdots+\\lfloor n\\alpha\\rfloor$$\n\nis divisible by $n$ for each positive integer $n$. Here $\\lfloor z\\rfloor$ is the largest integer not exceeding $z$; for instance, $\\lfloor-\\pi\\rfloor=-4$ and $\\lfloor2\\rfloor=\\lfloor2.9\\rfloor=2$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2024 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2024,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending.",
      "stage": "IMO"
    }
  },
  {
    "id": "imo-2024-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "FPB perpangkatan",
    "prompt": "Classify the positive integer pairs $(a,b)$ admitting positive integers $g,N$ with\n\n$$\\gcd(a^n+b,b^n+a)=g$$\n\nfor all integers $n\\ge N$. The notation $\\gcd(x,y)$ means the greatest common divisor of $x$ and $y$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2024 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2024,
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending.",
      "stage": "IMO"
    }
  },
  {
    "id": "apmo-2024-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan produk dan jumlah",
    "prompt": "Let $n$ be a positive integer and $a_1,a_2,\\ldots,a_n$ be positive real numbers. Prove that\n\n$$\\sum_{i=1}^n\\frac{1}{2^i}\\left(\\frac{2}{1+a_i}\\right)^{2^i}\\ge\\frac{2}{1+a_1a_2\\cdots a_n}-\\frac{1}{2^n}.$$",
    "source": {
      "kind": "competition",
      "label": "APMO 2024 — Nomor 3",
      "competition": "APMO",
      "year": 2024,
      "number": "Nomor 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "2026-11-25: short original statement verified against official PDF.",
      "stage": "APMO"
    }
  },
  {
    "id": "onmipa-2024-w-h1-i1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Gabungan dan irisan interval",
    "prompt": "Diberikan koleksi interval terbuka pada $\\mathbb R$, yaitu $$I=\\left\\{I_n\\mid I_n=\\left(1,1+\\frac1n\\right),\\ n\\in\\mathbb N\\right\\}.$$ Tentukan $\\displaystyle\\bigcup_{I_n\\in I}I_n$ dan $\\displaystyle\\bigcap_{I_n\\in I}I_n$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA 2024 — Wilayah, Hari 1, Isian 1",
      "competition": "ON-MIPA",
      "year": 2024,
      "number": "Hari 1, Isian 1",
      "url": "https://paggalih.github.io/olimpiade/onmipa-w-2024/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "ON-MIPA Wilayah"
    }
  },
  {
    "id": "onmipa-2024-w-h1-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen grup berorde ganjil",
    "prompt": "Misalkan $G$ merupakan grup siklis berorde 2024. Tentukan banyak elemen $G$ yang memiliki orde ganjil.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA 2024 — Wilayah, Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2024,
      "number": "Hari 1, Isian 3",
      "url": "https://paggalih.github.io/olimpiade/onmipa-w-2024/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "ON-MIPA Wilayah"
    }
  },
  {
    "id": "imc-2024-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Kuadrat matriks biner",
    "prompt": "Determine the positive integers $n$ for which some $n\\times n$ matrix $A$ with entries in $\\{0,1\\}$ has $A^2$ equal to the all-ones matrix.",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 1, Nomor 3",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending.",
      "stage": "IMC"
    }
  },
  {
    "id": "imc-2024-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Puncak fungsi bernilai bulat",
    "prompt": "For an arbitrary function $f:\\mathbb Q\\to\\mathbb Z$, establish the existence of rational numbers $a<b<c$ satisfying $$f(b)\\ge f(a),\\qquad f(b)\\ge f(c).$$",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 2, Nomor 6",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending.",
      "stage": "IMC"
    }
  },
  {
    "id": "putnam-2024-a1",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Eksponen bulat yang memenuhi persamaan",
    "prompt": "Characterize $n\\in\\mathbb Z_{>0}$ for which the equation $2a^n+3b^n=4c^n$ admits $(a,b,c)\\in\\mathbb Z_{>0}^3$.",
    "source": {
      "kind": "competition",
      "label": "Putnam 2024 — A1",
      "competition": "Putnam",
      "year": 2024,
      "number": "A1",
      "url": "https://maa.org/wp-content/uploads/2026/02/2024-Putnam-Problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "Putnam"
    }
  },
  {
    "id": "putnam-2024-a2",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Keterbagian polinomial pada komposisi",
    "prompt": "Characterize the real polynomials $p$ for which some $q\\in\\mathbb R[x]$ satisfies $$p(p(x))-x=(p(x)-x)^2q(x)$$ at every real $x$.",
    "source": {
      "kind": "competition",
      "label": "Putnam 2024 — A2",
      "competition": "Putnam",
      "year": 2024,
      "number": "A2",
      "url": "https://maa.org/wp-content/uploads/2026/02/2024-Putnam-Problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "Putnam"
    }
  },
  {
    "id": "osnk-sd-2025-01",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Pengurutan bilangan",
    "prompt": "Urutkan $75\\%$, $0{,}745$, $\\frac{67}{100}$, dan $\\frac23$ dari yang terkecil hingga terbesar. Pilihan: A. $\\frac23,\\frac{67}{100},0{,}745,75\\%$; B. $\\frac{67}{100},\\frac23,0{,}745,75\\%$; C. $\\frac23,\\frac{67}{100},75\\%,0{,}745$; D. $\\frac{67}{100},\\frac23,75\\%,0{,}745$.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2025 — Nomor 1",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://www.defantri.com/2026/03/soal-dan-pembahasan-osnk-2025-matematika-sd.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2025-03",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Kubus yang dicat",
    "prompt": "Seluruh permukaan kubus berusuk $4$ cm dicat merah, kemudian kubus dipotong menjadi kubus-kubus kecil berusuk $1$ cm. Berapa banyak kubus kecil yang tepat dua sisinya berwarna merah? Pilihan: A. $16$; B. $24$; C. $32$; D. $48$",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2025 — Nomor 3",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K",
      "number": "Nomor 3",
      "url": "https://www.defantri.com/2026/03/soal-dan-pembahasan-osnk-2025-matematika-sd.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2026-05",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pertukaran huruf",
    "prompt": "Susunan huruf KELAPA hendak diubah menjadi KEPALA. Dalam setiap langkah, hanya dua huruf yang bersebelahan yang boleh ditukar. Tentukan jumlah langkah minimum yang diperlukan.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2026 — Nomor 5",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 5",
      "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sd-2026.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2026-10",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kelipatan persekutuan terkecil",
    "prompt": "Misalkan $A$ dan $B$ adalah dua bilangan prima yang berbeda. Jika $C=\\operatorname{KPK}(4B,5A,18)$, tentukan nilai terkecil yang mungkin untuk $C$.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2026 — Nomor 10",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 10",
      "url": "https://id.scribd.com/document/1053240605/Soal-Dan-Solusi-Osk-Sd-2026",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2026-20",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Keterbagian",
    "prompt": "Suatu bilangan kurang dari 4.000 habis dibagi 3. Jika bilangan tersebut dikurangi 2, hasilnya habis dibagi 4. Tentukan bilangan terbesar yang memenuhi kedua syarat tersebut.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2026 — Nomor 20",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 20",
      "url": "https://id.scribd.com/document/1053240605/Soal-Dan-Solusi-Osk-Sd-2026",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-smp-2025-01",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 3,
    "title": "Batas rata-rata",
    "prompt": "Suatu kumpulan data terdiri atas 35 bilangan bulat positif dengan median 22 dan nilai maksimum 29. Jika $x$ dan $y$ masing-masing menyatakan rata-rata minimum dan maksimum yang mungkin, tentukan $x+y$. Pilihan: A. 40,4; B. 37,4; C. 36,4; D. 25,4.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2025 — Nomor 1",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://www.catatanmatematika.com/2026/05/soal-osn-k-smp-2025.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnp-smp-2025-02",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Pangkat dua",
    "prompt": "Ali, Budi, dan Cika bermain gim. Pada akhir permainan, layar menunjukkan total skor $6208$ poin, yaitu jumlah tiga skor berbeda yang diperoleh mereka. Masing-masing skor merupakan perpangkatan $2$ dengan pangkat bilangan bulat positif. Tentukan jumlah ketiga pangkat tersebut.",
    "source": {
      "kind": "competition",
      "label": "OSN-P SMP 2025 — Nomor 2",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-P",
      "number": "Nomor 2",
      "url": "https://pusatprestasinasional.kemendikdasmen.go.id/api/open/4",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnp-smp-2025-03",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Representasi bilangan",
    "prompt": "Untuk bilangan bulat positif $b>1$, representasi bilangan bulat $N=(a_na_{n-1}\\ldots a_1a_0)_b$ dalam basis $b$ didefinisikan oleh $$N=a_nb^n+a_{n-1}b^{n-1}+\\cdots+a_1b+a_0,$$ dengan $a_k\\in\\mathbb Z$ dan $0\\le a_k<b$ untuk $k=0,1,\\ldots,n$. Jika $(1P3)_m=(2Q4)_{m-2}$ dan $m<8$, tentukan nilai $m+P+Q$.",
    "source": {
      "kind": "competition",
      "label": "OSN-P SMP 2025 — Nomor 3",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-P",
      "number": "Nomor 3",
      "url": "https://pusatprestasinasional.kemendikdasmen.go.id/api/open/4",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2026-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Ekspresi tiga variabel",
    "prompt": "Diketahui $x-y=1$, $y-z=2$, dan $xyz=77$. Tentukan nilai $$E=\\frac{x}{yz}+\\frac{y}{xz}+\\frac{z}{xy}-\\left(\\frac1x+\\frac1y+\\frac1z\\right).$$",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMA 2026 — Nomor 1",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://www.ruangparabintang.com/2026/07/soal-asli-matematika-osn-tingkat.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2026-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Digit dalam urutan naik",
    "prompt": "Tentukan banyak bilangan asli pada daftar $456,457,458,\\ldots,2026$ yang digit-digitnya berbeda dan berada dalam urutan naik jika dibaca dari kiri ke kanan.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMA 2026 — Nomor 5",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 5",
      "url": "https://id.scribd.com/document/1059177068/Osk-Sma-2026",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2025-w-h1-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Orde elemen grup hasil kali",
    "prompt": "Tentukan banyak elemen grup $\\mathbb Z_{12}\\times\\mathbb Z_6$ yang berorde 6.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2025 — Hari 1, Isian 1",
      "competition": "ON-MIPA",
      "year": 2025,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2025-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2025-w-h1-i3",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Limit jumlah pangkat",
    "prompt": "Misalkan $A_1,\\ldots,A_k$ merupakan bilangan real nonnegatif. Tentukan $$\\lim_{n\\to\\infty}\\left(\\sum_{j=1}^{k}A_j^n\\right)^{1/n}.$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2025 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2025,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2025-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2026-w-h1-i1",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Penempatan bola ke kotak",
    "prompt": "Sebanyak $n$ bola yang berbeda ditempatkan ke dalam $n$ kotak yang berbeda. Tentukan banyak cara penempatan jika tepat satu kotak dibiarkan kosong.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2026 — Hari 1, Isian 1",
      "competition": "ON-MIPA",
      "year": 2026,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2026-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2026-w-h1-i3",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Limit supremum fungsi",
    "prompt": "Untuk setiap $n\\in\\mathbb N$, misalkan $f_n:[0,1]\\to\\mathbb R$ didefinisikan oleh $f_n(x)=n^2x^2(1-x)^n$. Tentukan $$\\lim_{n\\to\\infty}\\sup_{0\\le x\\le1}f_n(x).$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2026 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2026,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2026-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sd-2020-02",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Pola jumlah kursi",
    "prompt": "Sebuah meja berbentuk segienam dapat dikelilingi 6 kursi. Jika dua meja disambung, tersedia tempat bagi 10 kursi, dan jika tiga meja disambung, tersedia tempat bagi 14 kursi. Sekolah Rini mempunyai 10 meja tersebut. Tentukan jumlah maksimum kursi jika seluruh meja disambung memanjang menurut pola yang sama.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 2",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 2",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sd-2020-03",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Selisih waktu bersepeda",
    "prompt": "Ani dan Budi bersepeda menuju toko buku Pak Dirman. Budi tiba dalam 15 menit dengan kecepatan rata-rata 30 km/jam, sedangkan kecepatan rata-rata Ani 25 km/jam. Jika keduanya berangkat bersama dan menempuh jarak yang sama, berapa menit Budi harus menunggu Ani?",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 3",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 3",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sd-2020-11",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 1,
    "title": "Bilangan prima",
    "prompt": "Carilah bilangan prima pertama setelah 350.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 11",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 11",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sd-2020-15",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Bilangan palindrom",
    "prompt": "Bilangan palindrom mempunyai susunan digit yang sama ketika dibaca dari kiri ataupun kanan, misalnya 111, 121, dan 131. Tentukan banyak bilangan palindrom tiga digit yang hanya menggunakan digit 1, 2, 3, 4, atau 5.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 15",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 15",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sd-2021-02",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Susunan huruf",
    "prompt": "Tentukan banyak susunan yang menggunakan seluruh huruf C, O, V, I, D, masing-masing sekali, dengan V dan D bersebelahan. Pilihan: A. 24; B. 32; C. 48; D. 52.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2021 — Nomor 2",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN-K",
      "number": "Nomor 2",
      "url": "https://id.scribd.com/document/790309363/2021-Soal-Osk-Matik-SD-www-konsep-matematika-com",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sd-2021-08",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Sisa hasil panen",
    "prompt": "Pak Agus memanen 4 ton padi. Ia menjual 32 kuintal kepada pedagang dan memberikan 85 kg kepada tetangga. Sisanya disimpan. Berapa kilogram padi yang disimpan? Pilihan: A. 615; B. 625; C. 715; D. 725.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2021 — Nomor 8",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN-K",
      "number": "Nomor 8",
      "url": "https://id.scribd.com/document/790309363/2021-Soal-Osk-Matik-SD-www-konsep-matematika-com",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2022-07",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Gaji setelah pajak",
    "prompt": "Gaji bruto seorang pekerja golongan I adalah Rp4.000.000 dengan pajak 5%. Pajak golongan II sebesar 20%. Tentukan gaji bruto pekerja golongan II agar penerimaan bersihnya Rp400.000 lebih tinggi daripada golongan I. Pilihan: A. Rp4.800.000; B. Rp5.250.000; C. Rp5.400.000; D. Rp6.100.000.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2022 — Nomor 7",
      "competition": "OSN",
      "year": 2022,
      "stage": "OSN-K",
      "number": "Nomor 7",
      "url": "https://id.scribd.com/document/1004179258/2022-Soal-Osk-Matik-SD-Edit",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2022-13",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Jarak perjalanan",
    "prompt": "Pak Guru berkendara dari sekolah menuju rumah dengan sepeda motor berkecepatan rata-rata 50 km/jam selama berkendara. Ia berhenti di toko buku selama 20 menit. Jika perjalanan seluruhnya berlangsung 65 menit, tentukan jarak dari sekolah ke rumah yang ditempuhnya. Pilihan: A. 54,17; B. 46; C. 37,5; D. 30 (km).",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2022 — Nomor 13",
      "competition": "OSN",
      "year": 2022,
      "stage": "OSN-K",
      "number": "Nomor 13",
      "url": "https://id.scribd.com/document/1004179258/2022-Soal-Osk-Matik-SD-Edit",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2023-01",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "FPB dan KPK",
    "prompt": "Suatu bilangan asli $a$ memenuhi $\\operatorname{FPB}(3,a)=3$ dan $\\operatorname{KPK}(15,a)=105$. Tentukan $a$. Pilihan: A. 7; B. 15; C. 21; D. 45.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2023 — Nomor 1",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html?m=1",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2023-02",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Operasi pecahan",
    "prompt": "Hitung nilai $125\\%\\times\\frac25\\div0{,}25\\times1\\frac14\\div2{,}5$. Pilihan: A. $0{,}1$; B. $0{,}64$; C. $1$; D. $10$",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2023 — Nomor 2",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 2",
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html?m=1",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2023-04",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Pertidaksamaan pecahan",
    "prompt": "Berapa banyak bilangan asli $q$ dalam pertidaksamaan $\\frac{21}{135}<\\frac q8<\\frac{27}{24}$? Pilihan: A. 7; B. 8; C. 9; D. 10.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2023 — Nomor 4",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 4",
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html?m=1",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sd-2023-08",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Jarak olahraga",
    "prompt": "Butet berolahraga selama $1\\frac14$ jam. Ia berjalan kaki selama $45$ menit dengan kecepatan rata-rata $4$ km/jam dan kemudian berlari selama $30$ menit dengan kecepatan rata-rata $10$ km/jam. Tentukan jarak yang ditempuh Butet dalam kilometer. Pilihan: A. $5$; B. $6$; C. $7$; D. $8$",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2023 — Nomor 8",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 8",
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html?m=1",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-smp-2020-01",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Nilai minimum rasio",
    "prompt": "Untuk empat bilangan bulat positif berbeda $a,b,c,d$ dengan $abcd=2020$, tentukan nilai minimum $\\frac{a+b}{c+d}$. Pilihan: A. $\\frac3{507}$; B. $\\frac5{106}$; C. $\\frac1{17}$; D. $\\frac1{69}$.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMP 2020 — Nomor 1",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 1",
      "url": "https://id.scribd.com/document/508163598/Soal-Dan-Solusi-KSN-Matematika-SMP-2020-KabKota",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-smp-2020-02",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Pemilihan bilangan prima",
    "prompt": "Manakah bilangan berikut yang prima? Pilihan: A. 2017; B. 2019; C. 2021; D. 2023.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMP 2020 — Nomor 2",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 2",
      "url": "https://id.scribd.com/document/508163598/Soal-Dan-Solusi-KSN-Matematika-SMP-2020-KabKota",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksn-smp-2021-05",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Tiga bilangan berurutan",
    "prompt": "Hasil kali tiga bilangan bulat positif berurutan sama dengan 16 kali jumlahnya. Tentukan jumlah kuadrat ketiga bilangan. Pilihan: A. 21; B. 149; C. 14; D. 441.",
    "source": {
      "kind": "competition",
      "label": "KSN Nasional SMP 2021 — Nomor 5",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN Nasional",
      "number": "Nomor 5",
      "url": "https://www.ruangparabintang.com/2021/09/soal-kompetisi-sains-nasional-ksn.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksn-smp-2021-07",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Permutasi dengan paritas sama",
    "prompt": "Bintang mengisi baris pertama sebuah tabel dengan bilangan $1,2,\\ldots,8$ secara berurutan. Ia akan mengisi baris kedua menggunakan kedelapan bilangan tersebut dalam suatu urutan. Pada baris ketiga, setiap bilangan adalah jumlah kedua bilangan di atasnya. Berapa banyak cara mengisi baris kedua agar seluruh bilangan pada baris ketiga genap? Pilihan: A. $8$; B. $16$; C. $48$; D. $576$",
    "source": {
      "kind": "competition",
      "label": "KSN Nasional SMP 2021 — Nomor 7",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN Nasional",
      "number": "Nomor 7",
      "url": "https://www.ruangparabintang.com/2021/09/soal-kompetisi-sains-nasional-ksn.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksn-smp-2021-08",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 3,
    "title": "Median data",
    "prompt": "Lima data bilangan asli paling besar 10 memiliki modus 5 dan rata-rata 6. Satu data bilangan asli yang tidak melebihi 10 ditambahkan. Manakah median enam data yang mungkin? Pilihan: A. 4; B. 4,5; C. 5; D. 6,5.",
    "source": {
      "kind": "competition",
      "label": "KSN Nasional SMP 2021 — Nomor 8",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN Nasional",
      "number": "Nomor 8",
      "url": "https://www.ruangparabintang.com/2021/09/soal-kompetisi-sains-nasional-ksn.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-smp-2022-02",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Barisan aritmetika bilangan bulat",
    "prompt": "Barisan aritmetika $(a_n)$ terdiri atas bilangan bulat. Diketahui $3\\mid a_1$, $5\\mid a_2$, $7\\mid a_3$, $a_1+a_2+a_3=405$, dan $a_1>105$. Tentukan indeks terkecil $k$ dengan $a_k>1000$. Pilihan: A. 74; B. 75; C. 76; D. 77.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2022 — Nomor 2",
      "competition": "OSN",
      "year": 2022,
      "stage": "OSN-K",
      "number": "Nomor 2",
      "url": "https://melajah-matematika.blogspot.com/2024/04/osk-smp-2022.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-smp-2023-01",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Jumlah kuadrat ganjil",
    "prompt": "Empat bilangan bulat positif berbeda $a,b,c,d$ memenuhi bahwa $a+b$, $a+c$, dan $a+d$ semuanya kuadrat sempurna ganjil. Tentukan minimum $a+b+c+d$. Pilihan: A. 33; B. 67; C. 81; D. 83.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2023 — Nomor 1",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://www.catatanmatematika.com/2023/06/pembahasan-soal-osn-k-smp-2023.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-smp-2023-13",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Bilangan biner habis dibagi enam",
    "prompt": "Berapa banyak bilangan desimal tujuh digit yang hanya menggunakan 0 dan 1 serta merupakan kelipatan 6? Pilihan: A. 11; B. 17; C. 21; D. 22.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2023 — Nomor 13",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 13",
      "url": "https://www.catatanmatematika.com/2023/06/pembahasan-soal-osn-k-smp-2023.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-smp-2023-20",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Himpunan bagian",
    "prompt": "Hitung banyak himpunan bagian beranggota tiga dari $\\{1,2,\\ldots,9\\}$ dengan tepat dua anggota ganjil. Pilihan: A. 40; B. 84; C. 30; D. 48.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2023 — Nomor 20",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 20",
      "url": "https://www.catatanmatematika.com/2023/06/pembahasan-soal-osn-k-smp-2023.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sma-2020-d01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Nilai polinomial",
    "prompt": "Untuk $$f(x)=\\frac{3(x-1)(x-2)}{2}+\\frac{(x-2)(x-3)}{2}-2(x-1)(x-3),$$ tentukan $f(20)$.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMA 2020 — Kemampuan Dasar, Nomor 1",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Kemampuan Dasar, Nomor 1",
      "url": "https://www.soalfismat.com/pembahasan-soal-seleksi-ksn-k-osk-matematika-sma-ma-2020-kemampuan-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sma-2020-d04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Maksimum bentuk linear",
    "prompt": "Misalkan $x,y$ bilangan asli dengan $2x+3y=2020$. Tentukan maksimum $3x+2y$.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMA 2020 — Kemampuan Dasar, Nomor 4",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Kemampuan Dasar, Nomor 4",
      "url": "https://www.soalfismat.com/pembahasan-soal-seleksi-ksn-k-osk-matematika-sma-ma-2020-kemampuan-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "ksnk-sma-2020-d06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Titik tengah kisi",
    "prompt": "Misalkan $S$ merupakan himpunan seluruh titik $(x,y)$ pada bidang Kartesius dengan $x,y$ bilangan bulat, $0\\le x\\le20$, dan $0\\le y\\le19$. Tentukan banyak cara memilih dua titik berbeda dari $S$ dengan titik tengah di $S$. Dua titik $P=(a,b)$ dan $Q=(c,d)$ berbeda jika $a\\ne c$ atau $b\\ne d$. Pemilihan $(P,Q)$ dan $(Q,P)$ dihitung sebagai satu cara.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMA 2020 — Kemampuan Dasar, Nomor 6",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Kemampuan Dasar, Nomor 6",
      "url": "https://www.soalfismat.com/pembahasan-soal-seleksi-ksn-k-osk-matematika-sma-ma-2020-kemampuan-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2020-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan berbobot",
    "prompt": "The real numbers $a,b,c,d$ are such that $a\\ge b\\ge c\\ge d>0$ and $a+b+c+d=1$. Prove that\n\n$$(a+2b+3c+4d)a^ab^bc^cd^d<1.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2020 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2021-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Partisi dan kuadrat sempurna",
    "prompt": "Take an integer $n\\ge100$. Ivan labels $n+1$ separate cards with the integers $n,n+1,\\ldots,2n$ and distributes them into two piles after shuffling. Show that some pile has two cards whose labels add to a perfect square.",
    "source": {
      "kind": "competition",
      "label": "IMO 2021 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2021-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan jumlah akar",
    "prompt": "Show that the inequality\n\n$$\\sum_{i=1}^n\\sum_{j=1}^n\\sqrt{|x_i-x_j|}\\le\\sum_{i=1}^n\\sum_{j=1}^n\\sqrt{|x_i+x_j|}$$\n\nholds for all real numbers $x_1,\\ldots,x_n$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2021 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2022-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi dengan solusi tunggal",
    "prompt": "Classify the maps $f:\\mathbb R^+\\to\\mathbb R^+$ for which, given any $x>0$, precisely one positive $y$ satisfies\n\n$$xf(y)+yf(x)\\le2.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2022 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2023-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian faktor berurutan",
    "prompt": "For a composite integer $n>1$, enumerate its positive divisors as $1=d_1<d_2<\\cdots<d_k=n$. Find all such $n$ satisfying $$d_i\\mid(d_{i+1}+d_{i+2})\\qquad(1\\le i\\le k-2).$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2023 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2023-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan dan polinomial monik",
    "prompt": "Fix an integer $k\\ge2$. Classify the infinite sequences $a_1,a_2,\\ldots$ of positive integers admitting a polynomial $P(x)=x^k+c_{k-1}x^{k-1}+\\cdots+c_1x+c_0$ with nonnegative integer coefficients $c_0,\\ldots,c_{k-1}$ such that\n\n$$P(a_n)=a_{n+1}a_{n+2}\\cdots a_{n+k}$$\n\nfor every positive integer $n$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2023 — Hari 1, Nomor 3",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imc-2020-01",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Susunan huruf berparitas genap",
    "prompt": "For a positive integer $n$, count the length-$n$ words over the alphabet $\\{\\texttt{a},\\texttt{b},\\texttt{c},\\texttt{d}\\}$ with both the number of occurrences of $\\texttt{a}$ and that of $\\texttt{b}$ even. For $n=2$, the six admissible words are $\\texttt{aa},\\texttt{bb},\\texttt{cc},\\texttt{dd},\\texttt{cd},\\texttt{dc}$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2020-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Rank komutator dan trace",
    "prompt": "Take real $n\\times n$ matrices $A,B$ satisfying $\\operatorname{rk}(AB-BA+I)=1$, with $I$ the identity matrix. Establish $$\\operatorname{trace}(ABAB)-\\operatorname{trace}(A^2B^2)=\\frac12n(n-1).$$ Here rank means the dimension of the column space and trace is the sum of diagonal entries.",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 2",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2020-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Ketaksamaan polinomial",
    "prompt": "Suppose $p\\in\\mathbb R[x]$ satisfies $p(x+1)-p(x)=x^{100}$ at every $x\\in\\mathbb R$. Establish the inequality $p(1-t)\\ge p(t)$ on $0\\le t\\le\\frac12$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 4",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "knmipa-2021-w-h1-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Lapangan kuosien",
    "prompt": "Misalkan $a$ bilangan asli terkecil sehingga $\\mathbb Z[x]/\\langle a,x^2+1\\rangle$ merupakan lapangan dengan lebih dari satu elemen. Jika banyak elemennya $b$, tentukan $ab$.",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Wilayah 2021 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2021-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "knmipa-2021-w-h1-i4",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup yang dibangkitkan",
    "prompt": "Misalkan $G$ merupakan grup berorde $2021$ dan $x,y\\in G$ adalah dua elemen bukan identitas dengan orde berbeda. Jika $H$ merupakan subgrup terkecil dari $G$ yang memuat $x$ dan $y$, tentukan banyak elemen $H$.",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Wilayah 2021 — Hari 1, Isian 4",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Wilayah",
      "number": "Hari 1, Isian 4",
      "url": "https://onmipa.filzabuana.id/onmipa/2021-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "knmipa-2021-n-h1-03",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Koprimalitas dan pangkat elemen grup",
    "prompt": "Misalkan $n,k$ merupakan bilangan bulat positif dan $G$ merupakan grup berorde $n$. Buktikan bahwa kedua pernyataan berikut ekuivalen.\n\n(a) $\\gcd(n,k)=1$.\n\n(b) Untuk setiap subgrup $H$ dari $G$, berlaku $$\\{x\\in G\\mid x^k\\in H\\}\\subseteq H.$$",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Nasional 2021 — Hari 1, Nomor 3",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Nasional",
      "number": "Hari 1, Nomor 3",
      "url": "https://id.scribd.com/document/1025602098/Soal-KNMIPA-Nasional-2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "knmipa-2021-n-h1-04",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Inti dan peta komposisi",
    "prompt": "Diberikan matriks $A\\in M_n(\\mathbb R)$. Pemetaan linear $T,S:\\mathbb R^n\\to\\mathbb R^n$ didefinisikan oleh $T(x)=Ax$ dan $S(x)=A^\\top x$ untuk setiap $x\\in\\mathbb R^n$.\n\n(a) Buktikan bahwa $\\ker(S\\circ T)=\\ker T$.\n\n(b) Jelaskan apakah $\\operatorname{Im}(S\\circ T)=\\operatorname{Im}S$ selalu berlaku.",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Nasional 2021 — Hari 1, Nomor 4",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Nasional",
      "number": "Hari 1, Nomor 4",
      "url": "https://id.scribd.com/document/1025602098/Soal-KNMIPA-Nasional-2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2022-w-h1-i1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Ketaksamaan fungsi",
    "prompt": "Misalkan $f:\\mathbb R\\to\\mathbb R$ memenuhi $|f(x)-f(y)|\\le|x^3-x^2y|^2$ untuk semua $x,y\\in\\mathbb R$. Jika $f(1)=1$, tentukan $f(2022)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2022 — Hari 1, Isian 1",
      "competition": "ON-MIPA",
      "year": 2022,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2022-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2022-w-h1-i2",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Limit jumlah Riemann",
    "prompt": "Untuk setiap bilangan asli positif $n$, didefinisikan $$a_n=\\sum_{k=0}^{n}\\frac{1}{n+k}.$$ Tentukan $\\lim_{n\\to\\infty}a_n$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2022 — Hari 1, Isian 2",
      "competition": "ON-MIPA",
      "year": 2022,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2022-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2022-w-h1-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Komposisi permutasi",
    "prompt": "Diberikan permutasi $$\\sigma=\\begin{pmatrix}1&2&3&4&5\\\\3&4&1&5&2\\end{pmatrix},\\qquad\\tau=\\begin{pmatrix}1&2&3&4&5\\\\5&2&1&3&4\\end{pmatrix}.$$ Jika $\\alpha=(\\sigma\\circ\\tau)^{-1}$, tentukan baris kedua dari $$\\alpha=\\begin{pmatrix}1&2&3&4&5\\\\?&?&?&?&?\\end{pmatrix}.$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2022 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2022,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2022-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2022-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Ketaksamaan integral",
    "prompt": "Let $f:[0,1]\\to(0,\\infty)$ be an integrable function such that $f(x)\\cdot f(1-x)=1$ for all $x\\in[0,1]$. Prove that\n\n$$\\int_0^1 f(x)\\,dx\\ge1.$$",
    "source": {
      "kind": "competition",
      "label": "IMC 2022 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "imc-2022-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Persamaan matriks dan transpos",
    "prompt": "For a positive integer $n$, classify the real $n\\times n$ matrices $A$ whose eigenvalues are all real and for which $$A+A^k=A^T$$ for at least one integer $k\\ge n$. Here $A^T$ is the transpose of $A$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2022 — Hari 1, Nomor 2",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "onmipa-2023-w-h1-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Indeks subgrup aditif",
    "prompt": "Misalkan $G=\\{m+n\\sqrt2\\mid m,n\\in\\mathbb Z\\}$ merupakan grup terhadap penjumlahan dan $H=\\{3a+5b\\sqrt2\\mid a,b\\in\\mathbb Z\\}$ merupakan subgrup dari $G$. Tentukan kardinalitas $G/H$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2023 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2023,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2023-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2023-w-h1-i4",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Banyak ideal gelanggang",
    "prompt": "Tentukan banyak ideal dari gelanggang $\\mathbb Z_{23}\\times\\mathbb Z_{24}$ dengan operasi komponen demi komponen.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2023 — Hari 1, Isian 4",
      "competition": "ON-MIPA",
      "year": 2023,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 4",
      "url": "https://onmipa.filzabuana.id/onmipa/2023-wilayah/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osn-sd-2005-i1",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Kelipatan tiga belas",
    "prompt": "Banyaknya bilangan bulat di antara 1000 dan 2005 yang habis dibagi 13 adalah . . .",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 1",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 1",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Matches archived exam sheet; source typography normalized."
    }
  },
  {
    "id": "osn-sd-2005-i2",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Nomor kendaraan terbesar",
    "prompt": "Di suatu negara, setiap nomor polisi mobil berupa bilangan empat digit dengan jumlah digit yang habis dibagi $5$. Tentukan nomor polisi terbesar yang diizinkan.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 2",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 2",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2005-i4",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Uang sebelum dibagikan",
    "prompt": "Pak Marpaung menyerahkan Rp240.000 kepada istrinya, kemudian memberikan dua pertiga sisa uangnya kepada anaknya. Uang yang masih dipegangnya adalah Rp195.000. Berapa jumlah uangnya semula?",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 4",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 4",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2005-i9",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Jumlah pertandingan",
    "prompt": "Dalam suatu kompetisi sepak bola yang diikuti oleh $10$ tim, setiap tim bertanding dua kali melawan masing-masing tim lainnya. Tentukan jumlah pertandingan yang dilaksanakan.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 9",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 9",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2005-i10",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Menentukan pecahan",
    "prompt": "Misalkan $X$ suatu pecahan. Penambahan $3$ pada pembilang $X$ menghasilkan pecahan $\\frac23$, sedangkan pengurangan $1$ pada penyebut $X$ menghasilkan pecahan $\\frac12$. Tentukan pecahan $X$ semula.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 10",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 10",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2006-i1",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Perbandingan tiga bahan",
    "prompt": "Sebuah benda dibuat menggunakan tiga bahan, yaitu $P$, $Q$, dan $R$. Jika perbandingan banyak bahan $P$ terhadap $Q$ adalah $6:8$ dan $Q$ terhadap $R$ adalah $7:3$, tentukan perbandingan banyak bahan $P$ terhadap $R$.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 1",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 1",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2006-i2",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Sudut dalam segitiga",
    "prompt": "Berapa besar sudut CAD?\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 2",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 2",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Matches archived exam sheet; source typography normalized."
    }
  },
  {
    "id": "osn-sd-2006-i4",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas trapesium siku-siku",
    "prompt": "Diberikan trapesium siku-siku $ABCD$ dengan $AB$ sejajar $DC$ dan $\\angle ABC=90^\\circ$. Jika $\\angle DAB=45^\\circ$, $AB=16\\,\\mathrm{cm}$, dan $DC=10\\,\\mathrm{cm}$, tentukan luas trapesium $ABCD$.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 4",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 4",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2006-i6",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Muatan truk",
    "prompt": "Sebuah truk membawa 300 kotak dengan berat masing-masing 1 kg atau 2 kg. Total berat kotak 530 kg. Berapa banyak kotak seberat 1 kg?",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 6",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 6",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Archived exam sheet compared; wording differs."
    }
  },
  {
    "id": "osn-sd-2007-i7",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 4,
    "title": "Waktu mengecat kamar",
    "prompt": "Dua belas tukang mengecat $75$ kamar hotel. Setiap tukang dapat menyelesaikan $\\frac34$ kamar dalam sehari. Selama $\\frac23$ dari total waktu pengerjaan, pekerjaan dilakukan oleh kedua belas tukang, sedangkan sisanya diselesaikan seorang tukang. Tentukan total lama pengerjaan dalam hari.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2007 — Isian 7",
      "competition": "OSN",
      "year": 2007,
      "stage": "OSN Nasional",
      "number": "Isian 7",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2013/01/2007-soal-osn-lengkap.pdf",
      "note": "Archived copy checked; original exam provenance pending."
    }
  },
  {
    "id": "osn-sd-2007-i9",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Kadar garam",
    "prompt": "Kadar garam dalam enam liter air laut adalah $4\\%$. Setelah air laut tersebut menguap sebanyak 1 liter, kadar garam menjadi ... persen.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2007 — Isian 9",
      "competition": "OSN",
      "year": 2007,
      "stage": "OSN Nasional",
      "number": "Isian 9",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2013/01/2007-soal-osn-lengkap.pdf",
      "note": "Archived copy checked; original exam provenance pending."
    }
  },
  {
    "id": "imso-sd-2005-06",
    "level": "SD",
    "topic": "Statistika",
    "difficulty": 2,
    "title": "Perubahan rata-rata",
    "prompt": "A mathematics test taken by $48$ students has a mean score of $80$. Two scores are subsequently corrected, from $86$ to $93$ and from $85$ to $84$. Determine the revised mean.",
    "source": {
      "kind": "competition",
      "label": "IMSO 2005 — Isian 6",
      "competition": "IMSO",
      "year": 2005,
      "stage": "IMSO",
      "number": "Isian 6",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/short-answer1.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imso-sd-2005-07",
    "level": "SD",
    "topic": "Logika",
    "difficulty": 3,
    "title": "Hari dalam kalender",
    "prompt": "Ms. Olmer pays her employees on the first Wednesday of each month and collects their salaries from the bank on the first Tuesday. One Wednesday morning she finds that payment is due although she has not yet collected the money. What weekday is the fifth day of that month?",
    "source": {
      "kind": "competition",
      "label": "IMSO 2005 — Isian 7",
      "competition": "IMSO",
      "year": 2005,
      "stage": "IMSO",
      "number": "Isian 7",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/short-answer1.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osn-smp-2005-h1-02",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Banyak solusi bilangan bulat nonnegatif",
    "prompt": "Salah satu penyelesaian persamaan $x_1+x_2+x_3+x_4=7$ adalah $(2,0,4,1)$. Jika semesta pembicaraannya adalah himpunan bilangan bulat nonnegatif, tentukan banyaknya penyelesaian persamaan tersebut.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SMP 2005 — Hari 1, Nomor 2",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Hari 1, Nomor 2",
      "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf",
      "note": "Archived copy checked; original exam provenance pending."
    }
  },
  {
    "id": "osn-smp-2005-h1-03",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 3,
    "title": "Data dengan rata-rata dan median sama",
    "prompt": "Adi, seorang karyawan perusahaan tekstil, diminta menyiapkan catatan kenaikan produksi selama lima periode. Ia hanya menemukan empat data, yaitu $4\\%$, $9\\%$, $7\\%$, dan $5\\%$. Selidiki kemungkinan data kelima jika rata-rata hitung dan median kelima data sama.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SMP 2005 — Hari 1, Nomor 3",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Hari 1, Nomor 3",
      "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf",
      "note": "Archived copy checked; original exam provenance pending."
    }
  },
  {
    "id": "osn-smp-2005-h1-04",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Sistem persamaan bilangan bulat",
    "prompt": "Tentukan semua pasangan bilangan bulat $(x,y)$ yang memenuhi sistem persamaan berikut.\n\n$$\\begin{cases}x(y+1)=y^2-1\\\\y(x+1)=x^2-1\\end{cases}$$",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SMP 2005 — Hari 1, Nomor 4",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Hari 1, Nomor 4",
      "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf",
      "note": "Archived copy checked; original exam provenance pending."
    }
  },
  {
    "id": "kmnr-smp-2016-78-02",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Perbandingan desimal",
    "prompt": "Tentukan bilangan terbesar dari pilihan berikut. Pilihan: A. $2{,}06$; B. $2{,}1$; C. $2{,}18$; D. $2{,}109$; E. $2{,}115$",
    "source": {
      "kind": "competition",
      "label": "KMNR Penyisihan 2016 — Kelas 7–8, Nomor 2",
      "competition": "KMNR",
      "year": 2016,
      "stage": "KMNR Penyisihan",
      "number": "Kelas 7–8, Nomor 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-babak-penyisihan-kategori-kelas-7-8-matematika-nalaria-realistik/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "kmnr-smp-2016-78-03",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Operasi aritmetika",
    "prompt": "Tentukan nilai $20\\cdot15+20\\cdot16$. Pilihan: A. 520; B. 620; C. 820; D. 5.120; E. 11.200.",
    "source": {
      "kind": "competition",
      "label": "KMNR Penyisihan 2016 — Kelas 7–8, Nomor 3",
      "competition": "KMNR",
      "year": 2016,
      "stage": "KMNR Penyisihan",
      "number": "Kelas 7–8, Nomor 3",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-babak-penyisihan-kategori-kelas-7-8-matematika-nalaria-realistik/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "kmnr-smp-2016-9-02",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Pecahan aritmetika",
    "prompt": "Hitung $\\frac{2+0+1+6}{6-1-0-2}$. Pilihan: A. $1$; B. $\\frac23$; C. $2$; D. $\\frac32$; E. $3$.",
    "source": {
      "kind": "competition",
      "label": "KMNR Penyisihan 2016 — Kelas 9, Nomor 2",
      "competition": "KMNR",
      "year": 2016,
      "stage": "KMNR Penyisihan",
      "number": "Kelas 9, Nomor 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-babak-penyisihan-kategori-kelas-9-kompetisi-matematika-nalaria-realistik-kmnr-tahun-2016/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-smp-2019-01",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Nilai maksimum perpangkatan",
    "prompt": "Diberikan himpunan $A=\\{0,1,2,3,4\\}$. Jika $a,b,c$ merupakan tiga anggota berbeda dari $A$ dan $n=(a^b)^c$, tentukan nilai maksimum $n$. Pilihan: A. $4096$; B. $6561$; C. $9561$; D. $9651$",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2019 — Nomor 1",
      "competition": "OSN",
      "year": 2019,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-osn-bidang-matematika-smp-kabupaten-kota-2019/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2005-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan dengan residu berbeda",
    "prompt": "Suppose an integer sequence $a_1,a_2,\\ldots$ has infinitely many positive terms and infinitely many negative terms. For each $n\\ge1$, the first $n$ terms represent distinct residue classes modulo $n$. Establish that each integer appears precisely once among the terms.",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2005-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan tiga variabel",
    "prompt": "Given positive real numbers $x,y,z$ satisfying $xyz\\ge1$, establish\n\n$$\\frac{x^5-x^2}{x^5+y^2+z^2}+\\frac{y^5-y^2}{x^2+y^5+z^2}+\\frac{z^5-z^2}{x^2+y^2+z^5}\\ge0.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 1, Nomor 3",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2005-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Koprimalitas pada barisan",
    "prompt": "Determine all positive integers relatively prime to all the terms of the infinite sequence\n\n$$a_n=2^n+3^n+6^n-1,\\ n\\ge1.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 2, Nomor 4",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "lmnas-ugm-sma-2018-pg01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Perpangkatan dan kebalikan",
    "prompt": "Bilangan real negatif $x$ memenuhi $x^2+\\frac{1}{x^2}=47$. Tentukan $x^3+\\frac{1}{x^3}$. Pilihan: A. $-332$; B. $-252$; C. $-7$; D. $7$; E. $322$.",
    "source": {
      "kind": "competition",
      "label": "LMNas UGM Penyisihan 2018 — Pilihan Ganda 1",
      "competition": "LMNas UGM",
      "year": 2018,
      "stage": "LMNas UGM Penyisihan",
      "number": "Pilihan Ganda 1",
      "url": "https://id.scribd.com/document/431458432/SOAL-OLIMPIADE-MATEMATIKA-UGM-BABAK-PENYISIHAN",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "lmnas-ugm-sma-2018-pg02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Sistem persamaan eksponensial",
    "prompt": "Misalkan $a,b\\in\\mathbb Z$ memenuhi $3^a=81^{b+2}$ dan $125^b=5^{a-3}$. Tentukan $ab$. Pilihan: A. 10; B. 29; C. 60; D. 64; E. 2018.",
    "source": {
      "kind": "competition",
      "label": "LMNas UGM Penyisihan 2018 — Pilihan Ganda 2",
      "competition": "LMNas UGM",
      "year": 2018,
      "stage": "LMNas UGM Penyisihan",
      "number": "Pilihan Ganda 2",
      "url": "https://id.scribd.com/document/431458432/SOAL-OLIMPIADE-MATEMATIKA-UGM-BABAK-PENYISIHAN",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "lmnas-ugm-sma-2018-pg03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Susunan tempat duduk",
    "prompt": "Delapan kursi berjajar ditempati oleh tiga siswi dan lima siswa, termasuk Budi. Berapa susunan tempat duduk yang membuat Budi duduk tepat di antara dua siswi? Pilihan: A. 720; B. 1440; C. 2160; D. 3600; E. 4320.",
    "source": {
      "kind": "competition",
      "label": "LMNas UGM Penyisihan 2018 — Pilihan Ganda 3",
      "competition": "LMNas UGM",
      "year": 2018,
      "stage": "LMNas UGM Penyisihan",
      "number": "Pilihan Ganda 3",
      "url": "https://id.scribd.com/document/431458432/SOAL-OLIMPIADE-MATEMATIKA-UGM-BABAK-PENYISIHAN",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "lmnas-ugm-sma-2018-pg05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Tiga digit terakhir jumlah faktorial",
    "prompt": "Misalkan $N=(1!)^3+(2!)^3+\\cdots+(2018!)^3$. Jika tiga digit terakhir $N$ berturut-turut adalah $a,b,c$, tentukan nilai $a+b+c$. Pilihan: A. $9$; B. $10$; C. $11$; D. $12$; E. $13$",
    "source": {
      "kind": "competition",
      "label": "LMNas UGM Penyisihan 2018 — Pilihan Ganda 5",
      "competition": "LMNas UGM",
      "year": 2018,
      "stage": "LMNas UGM Penyisihan",
      "number": "Pilihan Ganda 5",
      "url": "https://id.scribd.com/document/431458432/SOAL-OLIMPIADE-MATEMATIKA-UGM-BABAK-PENYISIHAN",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2006-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup berorde empat",
    "prompt": "Misalkan $G=\\{1,-1\\}$ merupakan grup terhadap perkalian. Pada $G^3=\\{(a,b,c)\\mid a,b,c\\in G\\}$, operasi didefinisikan oleh $$(a_1,b_1,c_1)*(a_2,b_2,c_2)=(a_1a_2,b_1b_2,c_1c_2).$$ Tentukan banyak subgrup $G^3$ yang berorde $4$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2006 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2006,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2006-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2006-w-struktur-aljabar-i5",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Ideal maksimal",
    "prompt": "Berikan sebuah contoh ideal maksimal di gelanggang $\\mathbb Z_{18}$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2006 — Struktur Aljabar, Isian 5",
      "competition": "ON-MIPA",
      "year": 2006,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 5",
      "url": "https://onmipa.filzabuana.id/onmipa/2006-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2006-w-struktur-aljabar-i7",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Faktorisasi polinomial",
    "prompt": "Faktorkan $x^4+4$ menjadi faktor-faktor tak tereduksi dalam $\\mathbb Z_5[x]$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2006 — Struktur Aljabar, Isian 7",
      "competition": "ON-MIPA",
      "year": 2006,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 7",
      "url": "https://onmipa.filzabuana.id/onmipa/2006-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2007-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Automorfisme grup",
    "prompt": "Tentukan banyak automorfisme dari grup aditif $\\mathbb Z_2\\times\\mathbb Z_2$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2007 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2007,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2007-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2007-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Pusat grup linear umum",
    "prompt": "Misalkan $F$ merupakan lapangan berhingga dengan $k$ elemen dan $G=GL_n(F)$. Jika pusat grup $G$ didefinisikan sebagai $$Z(G)=\\{g\\in G\\mid xg=gx\\text{ untuk setiap }x\\in G\\},$$ tentukan banyak elemen $Z(G)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2007 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2007,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2007-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2007-w-struktur-aljabar-i5",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Daerah integral idempoten",
    "prompt": "Misalkan $D$ merupakan daerah integral dengan $x^2=x$ untuk setiap $x\\in D$. Berapakah kardinalitas $D$?",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2007 — Struktur Aljabar, Isian 5",
      "competition": "ON-MIPA",
      "year": 2007,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 5",
      "url": "https://onmipa.filzabuana.id/onmipa/2007-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2008-w-aljabar-linear-i3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Trace komutator",
    "prompt": "Untuk suatu lapangan $F$ dan matriks $X=[x_{ij}]\\in M_n(F)$, didefinisikan $$\\operatorname{tr}(X)=\\sum_{i=1}^{n}x_{ii}.$$ Jika $A,B\\in M_n(F)$, tentukan $\\operatorname{tr}(AB-BA)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2008 — Aljabar Linear, Isian 3",
      "competition": "ON-MIPA",
      "year": 2008,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2008-aljabar-linear/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2008-w-aljabar-linear-i5",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Dimensi ruang vektor",
    "prompt": "Misalkan $U,V,W$ merupakan ruang vektor atas $F$, dengan $\\dim U=2008$ dan $\\dim V=8002$. Pemetaan linear $T:V\\to W$ injektif, $S:W\\to U$ surjektif, serta $\\operatorname{Im}T=\\ker S$. Tentukan $\\dim W$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2008 — Aljabar Linear, Isian 5",
      "competition": "ON-MIPA",
      "year": 2008,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 5",
      "url": "https://onmipa.filzabuana.id/onmipa/2008-aljabar-linear/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2009-w-aljabar-linear-i1",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Bentuk eselon tereduksi",
    "prompt": "Tentukan bentuk eselon baris tereduksi matriks $$\\begin{pmatrix}1&2&3&4\\\\5&6&7&8\\\\9&10&11&12\\end{pmatrix}.$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2009 — Aljabar Linear, Isian 1",
      "competition": "ON-MIPA",
      "year": 2009,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2009-aljabar-linear/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2009-w-aljabar-linear-i2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Dimensi ruang solusi",
    "prompt": "Misalkan $C(\\mathbb R)$ merupakan ruang vektor fungsi kontinu dari $\\mathbb R$ ke $\\mathbb R$. Tentukan dimensi subruang $\\{f\\in C(\\mathbb R)\\mid f''+f=0\\}$, dengan $f''$ terdefinisi pada $\\mathbb R$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2009 — Aljabar Linear, Isian 2",
      "competition": "ON-MIPA",
      "year": 2009,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2009-aljabar-linear/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2010-w-aljabar-linear-i2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Dimensi irisan subruang",
    "prompt": "Misalkan $K,L$ merupakan subruang dari $\\mathbb R^{10}$ dengan $\\dim K+\\dim L=12$. Tentukan nilai minimum $\\dim(K\\cap L)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2010 — Aljabar Linear, Isian 2",
      "competition": "ON-MIPA",
      "year": 2010,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2010-aljabar-linear/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2010-w-aljabar-linear-i3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Koordinat terhadap basis",
    "prompt": "Diketahui basis terurut $S=((1,1,1),(1,1,0),(1,0,0))$ dari $\\mathbb R^3$. Tentukan koordinat $u=(1,2,1)$ terhadap $S$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2010 — Aljabar Linear, Isian 3",
      "competition": "ON-MIPA",
      "year": 2010,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2010-aljabar-linear/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2011-w-analisis-real-i7",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Fungsi kontinu bernilai rasional",
    "prompt": "Misalkan $f:[0,1]\\to\\mathbb R$ kontinu, $f(x)\\in\\mathbb Q$ untuk setiap $x\\in[0,1]$, dan $f(0)=0$. Tentukan $f\\left(\\frac{\\sqrt2}{4}\\right)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2011 — Analisis Real, Isian 7",
      "competition": "ON-MIPA",
      "year": 2011,
      "stage": "ON-MIPA Wilayah",
      "number": "Analisis Real, Isian 7",
      "url": "https://onmipa.filzabuana.id/onmipa/2011-analisis-real/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2012-w-analisis-real-i1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Supremum dan infimum fungsi",
    "prompt": "Berikan contoh $D\\subseteq\\mathbb R$ serta fungsi $f,g:D\\to\\mathbb R$ dengan $f(x)\\le g(x)$ untuk setiap $x\\in D$, tetapi $\\sup_{x\\in D}f(x)>\\inf_{x\\in D}g(x)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2012 — Analisis Real, Isian 1",
      "competition": "ON-MIPA",
      "year": 2012,
      "stage": "ON-MIPA Wilayah",
      "number": "Analisis Real, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2012-analisis-real/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2012-w-analisis-real-i3",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Limit selisih terpusat",
    "prompt": "Misalkan $f:(a,b)\\to\\mathbb R$ mempunyai turunan semua orde di $c\\in(a,b)$. Tentukan $$\\lim_{h\\to0}\\frac{f(c+h)-2f(c)+f(c-h)}{h^2}.$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2012 — Analisis Real, Isian 3",
      "competition": "ON-MIPA",
      "year": 2012,
      "stage": "ON-MIPA Wilayah",
      "number": "Analisis Real, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2012-analisis-real/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2013-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup berorde prima",
    "prompt": "Misalkan $G$ merupakan grup berorde 2013. Tentukan banyak subgrup $H$ dari $G$ dengan $|H|=13$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2013 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2013,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2013-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2013-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen berorde dua",
    "prompt": "Diperhatikan grup dihedral berorde $8$, yaitu $$D_8=\\{e,y,y^2,y^3,x,xy,xy^2,xy^3\\},$$ dengan $x^2=y^4=e$ dan $xy=y^{-1}x$. Tentukan banyak elemen $D_8$ yang berorde $2$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2013 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2013,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2013-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2014-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Orde maksimum subgrup sejati",
    "prompt": "Tentukan orde terbesar di antara seluruh subgrup sejati dari grup aditif $\\mathbb Z_{2014}$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2014 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2014,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2014-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2015-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Citra homomorfisme",
    "prompt": "Misalkan $G,H,K$ merupakan grup berhingga, $\\varphi:G\\to H$ dan $\\psi:H\\to K$ homomorfisme dengan $\\operatorname{Im}\\varphi=\\ker\\psi$. Jika $\\psi$ surjektif dan $|H|=|K|=n$, tentukan $|\\operatorname{Im}\\varphi|$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2015 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2015,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2015-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2015-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Polinomial tak tereduksi",
    "prompt": "Tentukan banyak polinomial tak tereduksi berderajat 3 dalam $\\mathbb Z_2[x]$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2015 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2015,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2015-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2016-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup siklis hasil kali langsung",
    "prompt": "Tentukan orde subgrup siklis $\\langle(3,2)\\rangle$ dari $\\mathbb Z_{12}\\times\\mathbb Z_4$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2016 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2016,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2016-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2016-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Kernel operator diferensial",
    "prompt": "Misalkan $\\mathbb R[x,y]$ merupakan grup aditif polinomial real dalam dua variabel $x$ dan $y$. Didefinisikan homomorfisme $\\varphi:\\mathbb R[x,y]\\to\\mathbb R[x,y]$ oleh $$\\varphi(f)=\\frac{\\partial^2 f}{\\partial x\\,\\partial y}.$$ Tentukan kernel $\\varphi$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2016 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2016,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2016-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2017-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen berorde dua pada grup simetri",
    "prompt": "Misalkan $S_5$ merupakan grup permutasi pada himpunan $\\{1,2,3,4,5\\}$. Tentukan banyak elemen $S_5$ yang berorde $2$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2017 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2017,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2017-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2017-w-struktur-aljabar-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup hasil kali langsung",
    "prompt": "Tentukan banyak subgrup berorde 4 dari $\\mathbb Z_2\\times\\mathbb Z_4$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2017 — Struktur Aljabar, Isian 3",
      "competition": "ON-MIPA",
      "year": 2017,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2017-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2018-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup invariant terhadap pertukaran",
    "prompt": "Subgrup $H$ dari $\\mathbb Z_2\\times\\mathbb Z_2$ disebut swapped jika untuk setiap $(a,b)\\in H$ berlaku $(b,a)\\in H$. Tentukan banyak subgrup bertipe swapped dari $\\mathbb Z_2\\times\\mathbb Z_2$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2018 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2018-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-2018-w-struktur-aljabar-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Pembagi nol gelanggang kuosien",
    "prompt": "Misalkan $\\mathbb Z_2[x]$ merupakan gelanggang polinomial berkoefisien di $\\mathbb Z_2$ dan $I=\\langle x^2+x\\rangle$ merupakan idealnya. Tentukan banyak pembagi nol tak nol dalam gelanggang $R=\\mathbb Z_2[x]/I$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2018 — Struktur Aljabar, Isian 3",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2018-struktur-aljabar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2005-feb-1",
    "level": "SMA",
    "title": "Persamaan nilai mutlak",
    "prompt": "Determine the number of real solutions of $$|x-1|=|x-2|+|x-3|.$$",
    "topic": "Aljabar",
    "difficulty": 3,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2005 — Aljabar, Nomor 1",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2005,
      "number": "Aljabar, Nomor 1",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2005/feb/alg/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2005-feb-2",
    "level": "SMA",
    "title": "Persamaan eksponensial",
    "prompt": "Determine the number of real solutions of $$2003^x+2004^x=2005^x.$$",
    "topic": "Aljabar",
    "difficulty": 4,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2005 — Aljabar, Nomor 2",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2005,
      "number": "Aljabar, Nomor 2",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2005/feb/alg/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2005-feb-3",
    "level": "SMA",
    "title": "Rasio jumlah hasil kali",
    "prompt": "Suppose $x,y,z$ are pairwise distinct real numbers with $x+y+z=0$. Find the greatest attainable value of $$\\frac{xy+yz+zx}{x^2+y^2+z^2}.$$",
    "topic": "Aljabar",
    "difficulty": 3,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2005 — Aljabar, Nomor 3",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2005,
      "number": "Aljabar, Nomor 3",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2005/feb/alg/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2005-feb-9",
    "level": "SMA",
    "title": "Jumlah faktor prima",
    "prompt": "The integer $27{,}000{,}001$ has exactly four prime factors. Determine the sum of those factors.",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2005 — Aljabar, Nomor 9",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2005,
      "number": "Aljabar, Nomor 9",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2005/feb/alg/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2025-feb-1",
    "level": "SMA",
    "title": "Pembagi dengan digit satuan tertentu",
    "prompt": "Find the sum of all positive divisors of $9!$ whose units digit is $1$, counting the divisor $1$.",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2025 — Aljabar dan Teori Bilangan, Nomor 1",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2025,
      "number": "Aljabar dan Teori Bilangan, Nomor 1",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2025/feb/algnt/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2025-feb-4",
    "level": "SMA",
    "title": "Jumlahan fungsi lantai",
    "prompt": "For real $z$, let $\\lfloor z\\rfloor$ be the largest integer not exceeding $z$. Evaluate $$\\sum_{j=-1000}^{1000}\\left\\lfloor\\frac{2025}{j+0.5}\\right\\rfloor.$$",
    "topic": "Aljabar",
    "difficulty": 4,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2025 — Aljabar dan Teori Bilangan, Nomor 4",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2025,
      "number": "Aljabar dan Teori Bilangan, Nomor 4",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2025/feb/algnt/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "hmmt-2025-feb-10",
    "level": "SMA",
    "title": "Sistem persamaan kompleks siklik",
    "prompt": "Suppose $a,b,c$ are pairwise distinct complex numbers satisfying $$a^2=b+6,\\qquad b^2=c+6,\\qquad c^2=a+6.$$ Find both possible values of $a+b+c$.",
    "topic": "Aljabar",
    "difficulty": 5,
    "source": {
      "kind": "competition",
      "label": "HMMT Februari 2025 — Aljabar dan Teori Bilangan, Nomor 10",
      "competition": "HMMT",
      "stage": "HMMT Babak Individu",
      "year": 2025,
      "number": "Aljabar dan Teori Bilangan, Nomor 10",
      "url": "https://hmmt-archive.s3.amazonaws.com/tournaments/2025/feb/algnt/problems.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2018-isian-2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Perpangkatan matriks",
    "prompt": "Untuk $\\theta\\in\\mathbb R$, diberikan matriks $$A=\\frac12\\begin{pmatrix}2\\cos^2\\theta&\\sin 2\\theta\\\\\\sin 2\\theta&2\\sin^2\\theta\\end{pmatrix}.$$ Tentukan $2018A^{2018}-2018A^{2016}$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2018 — Isian 2",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2018/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2018-isian-3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 2,
    "title": "Dimensi ruang fungsi",
    "prompt": "Misalkan $C(\\mathbb R)$ adalah ruang fungsi kontinu bernilai real. Tentukan dimensi subruang $\\{f\\in C(\\mathbb R)\\mid f'=0\\}$, dengan $f'$ terdefinisi di seluruh $\\mathbb R$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2018 — Isian 3",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 3",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2018/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2018-isian-34",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Permutasi dengan pengulangan",
    "prompt": "Tentukan banyak susunan berbeda dari seluruh huruf dalam kata SUCCESS.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2018 — Isian 34",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 34",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2018/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2018-esai-2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Subgrup diagonal",
    "prompt": "Misalkan $G$ merupakan grup, $A=G\\times G$ merupakan grup hasil kali langsung, dan $T=\\{(g,g)\\mid g\\in G\\}$. Buktikan bahwa:\n\n(a) $T\\cong G$.\n\n(b) $T$ merupakan subgrup normal dari $A$ jika dan hanya jika $G$ abelian.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2018 — Esai 2",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Esai 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2018/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Menentukan citra pemetaan linear",
    "prompt": "Diketahui pemetaan linear $f:\\mathbb R^2\\to\\mathbb R^2$ dengan $$f\\left(\\begin{bmatrix}4\\\\1\\end{bmatrix}\\right)=\\begin{bmatrix}1\\\\1\\end{bmatrix},\\qquad f\\left(\\begin{bmatrix}1\\\\1\\end{bmatrix}\\right)=\\begin{bmatrix}3\\\\-2\\end{bmatrix}.$$ Tentukan $f\\left(\\begin{bmatrix}0\\\\1\\end{bmatrix}\\right)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 2",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-7",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen berorde dua",
    "prompt": "Misalkan $G=\\{(a,b)\\in\\mathbb R^2\\mid a\\ne0\\}$. Pada $G$ didefinisikan operasi biner $*$ melalui $$(a,b)*(c,d)=(ac,b+d)$$ untuk setiap $(a,b),(c,d)\\in G$. Tentukan satu-satunya elemen berorde dua di $G$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 7",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 7",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-11",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Kelas koset gelanggang kuosien",
    "prompt": "Diketahui ideal $I=\\{[0],[8],[16]\\}$ pada gelanggang $\\mathbb Z_{24}$. Tuliskan seluruh elemen gelanggang kuosien $\\mathbb Z_{24}/I$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 11",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 11",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-22",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Jari-jari konvergensi deret pangkat",
    "prompt": "Misalkan $(a_n)$ merupakan barisan bilangan real dengan $a_0=1$, $a_1=2$, serta $a_n=a_{n-1}+a_{n-2}$ untuk $n\\ge2$. Tentukan jari-jari konvergensi deret pangkat $$\\sum_{n=0}^{\\infty}a_nz^n.$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 22",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 22",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "amc8-2008-07",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Perbandingan",
    "prompt": "If $\\frac35=\\frac{M}{45}=\\frac{60}{N}$, what is $M+N$? Pilihan: A. $27$; B. $29$; C. $45$; D. $105$; E. $127$",
    "source": {
      "kind": "competition",
      "label": "AMC 8 2008 — Nomor 7 · Copyright © 2008, The Mathematical Association of America",
      "competition": "AMC 8",
      "year": 2008,
      "stage": "AMC 8",
      "number": "Nomor 7",
      "url": "https://live.poshenloh.com/past-contests/amc8/2008",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "amc12b-2007-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Nilai fungsi",
    "prompt": "A function $f$ has the property that $f(3x-1)=x^2+x+1$ for all real numbers $x$. What is $f(5)$? Pilihan: A. $7$; B. $13$; C. $31$; D. $111$; E. $211$",
    "source": {
      "kind": "competition",
      "label": "AMC 12 B 2007 — Nomor 9 · Copyright © 2007, The Mathematical Association of America",
      "competition": "AMC 12",
      "year": 2007,
      "stage": "AMC 12 B",
      "number": "Nomor 9",
      "url": "https://f.hubspotusercontent30.net/hubfs/981338/Math%20Competition%20Problems_PDFS/2007AMC12-B.pdf#page=3",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "aime2-2011-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pencacahan kuadruplet terurut",
    "prompt": "Define an ordered quadruple of integers $(a,b,c,d)$ to be interesting if $1\\le a<b<c<d\\le10$ and $a+d>b+c$. How many interesting ordered quadruples are there?",
    "source": {
      "kind": "competition",
      "label": "AIME II 2011 — Nomor 6 · Copyright © 2011, The Mathematical Association of America",
      "competition": "AIME",
      "year": 2011,
      "stage": "AIME II",
      "number": "Nomor 6",
      "url": "https://f.hubspotusercontent30.net/hubfs/981338/Math%20Competition%20Problems_PDFS/2011AIME-II.pdf#page=2",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "egmo-2013-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Sudut siku-siku dari kesamaan panjang ruas",
    "prompt": "In triangle $ABC$, extend $BC$ past $C$ to a point $D$ with $CD=BC$. Extend $CA$ past $A$ to a point $E$ with $AE=2CA$. Assuming $AD=BE$, prove that $ABC$ is a right triangle.",
    "source": {
      "kind": "competition",
      "competition": "EGMO",
      "year": 2013,
      "stage": "EGMO",
      "number": "Nomor 1",
      "label": "EGMO 2013 — Nomor 1",
      "url": "https://www.egmo.org/egmos/egmo2/paper-day1-English.pdf",
      "collection": "MathNet",
      "collectionUrl": "https://huggingface.co/datasets/ShadenA/MathNet",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "bmo-shortlist-2016-g1",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Pusat lingkaran dalam dan titik-titik konsiklis",
    "prompt": "Suppose a circle is tangent to all four sides of convex quadrilateral $ABCD$, and $M$ is an interior point of side $AB$. Denote the incenters of triangles $MBC$, $MCD$, and $MDA$ by $I_1$, $I_2$, and $I_3$, respectively. Prove that $M,I_1,I_2,I_3$ are concyclic.",
    "source": {
      "kind": "competition",
      "competition": "Balkan MO",
      "year": 2016,
      "stage": "Shortlist",
      "number": "G1",
      "label": "Balkan MO 2016 — Shortlist G1",
      "url": "https://imomath.com/srb/zadaci/2016_bmo_shortlist.pdf",
      "collection": "MathNet",
      "collectionUrl": "https://huggingface.co/datasets/ShadenA/MathNet",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "aime1-2024-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Sistem persamaan rasional",
    "prompt": "Aya walks a route of length $9$ kilometres each morning and then visits a coffee shop for $t$ minutes. Walking at constant speed $s$ kilometres per hour gives a total duration of four hours, including the visit. At speed $s+2$ kilometres per hour, the total is two hours and twenty-four minutes with the same visit duration. Find the total duration in minutes at speed $s+\\frac12$ kilometres per hour.",
    "source": {
      "kind": "competition",
      "competition": "AIME",
      "year": 2024,
      "stage": "AIME I",
      "number": "Nomor 1",
      "label": "AIME I 2024 — Nomor 1",
      "url": "https://live.poshenloh.com/past-contests/aime/2024I",
      "collection": "AoPS",
      "collectionUrl": "https://artofproblemsolving.com/school/mathjams-transcripts?id=682",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2016-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan penghapusan sisi graf",
    "prompt": "Ada and Otto play on a graph with six vertices $A,B,C,D,E,F$ and nine edges $AB,BC,CD,DE,EF,FA,AC,CE,EA$. Ada places a pebble at any vertex. She then takes the first turn, and the players alternate: move the pebble along an incident edge and remove that edge. The last player to move wins. For example, starting at $B$, the successive moves along $BC,CD,DE,EA,AB$ give Ada a win. Determine the winner under optimal play.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2016 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2016-02",
    "level": "SMA",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Pasangan dadu dengan jumlah sama",
    "prompt": "Four fair six-sided dice are rolled. Find the probability that their values can be grouped into two pairs with equal sums. For instance, $(1,4,6,3)$ can be grouped as $(1,6)$ and $(4,3)$, both summing to $7$, whereas $(1,1,5,2)$ admits no such grouping.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2016 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2016-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Pewarnaan dua warna pada bilangan bulat",
    "prompt": "Is there a red-blue coloring of the positive integers such that whenever positive integers $a,b,c,d$ satisfy $a+b+c=d$, at least two of the four have different colors? The four integers need not be distinct.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2016 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2016-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Segi empat bersinggungan dalam segi enam",
    "prompt": "Let $ABCDEF$ be an equiangular hexagon with $AB=CD=EF$ and $AB>BC$. The segments $AD$ and $CF$ meet at $X$, while $BE$ and $CF$ meet at $Y$. Suppose a circle inside quadrilateral $ABYX$ touches all four of its sides. Determine $\\frac{AB}{FA}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2016 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2016-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan bilangan bulat dengan identitas kuadrat",
    "prompt": "Classify integer sequences $(a_n)_{n\\ge0}$ satisfying, for every pair of nonnegative integers $n,k$,\n\n$a_{n+k}^2-(2k+1)a_na_{n+k}+(k^2+k)a_n^2=k^2-k$\n\nFind all possible sequences $(a_n)$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2016 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2016-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Syarat keterbagian",
    "prompt": "Find all positive integer pairs $(u,m)$ such that $u+m^2$ is divisible by $um-1$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2016 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2017-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Dua subgraf rentang terhubung",
    "prompt": "Four cities are joined by one road for each pair. Each road is painted either orange or blue. Count the colorings for which every pair of cities can be connected by a route using only orange roads and also by a route using only blue roads. Justify your answer.\n\nFor example, the coloring below is invalid because no orange-road route joins cities 1 and 2.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2017 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2017-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Maksimum jarak titik ke garis",
    "prompt": "Three different points $A,B,C$ belong to a circle with center $O$, where $\\angle AOB=\\angle BOC=60^\\circ$. Take $P$ on chord $\\overline{AC}$ and draw triangle $BPC$. Determine $AP:PC$ when $P$ is selected to maximize the length of the altitude from $C$ to $\\overline{BP}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2017 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2017-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Derajat minimum polinomial modulo enam belas",
    "prompt": "Among polynomials $P\\in\\mathbb Z[x]$ satisfying $nP(n)\\equiv1\\pmod{16}$ for every positive odd integer $n$ (so $nP(n)$ is one more than a multiple of $16$), determine the least possible degree and prove optimality.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2017 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2017-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permainan delapan wadah",
    "prompt": "You are challenged by the Great Pumpkin to a game involving eight empty buckets, each with a capacity of two liters of water. You take the first turn, and then alternate with the Great Pumpkin.\n\nOn each of your turns, distribute one liter of water among the buckets in any proportions. On each of its turns, the Great Pumpkin empties two buckets of its choice. You defeat the Great Pumpkin if any bucket overflows.\n\nCan you guarantee victory after sufficiently many turns, regardless of the Great Pumpkin's choices? Prove your conclusion.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2017 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2017-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permutasi berselang-seling modulo empat",
    "prompt": "For a deck containing the numbers $1,\\ldots,n$ once each, let $a_n$ count the arrangements $(p_1,\\ldots,p_n)$ satisfying $p_1<p_2>p_3<p_4>\\cdots$. For example, $a_1=a_2=1$, $a_3=2$, and $a_4=5$. Determine the remainder of $a_n$ upon division by $4$ for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2017 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2018-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Lingkaran bersarang dan pencacahan insidensi",
    "prompt": "(a) Show that seven circles and eleven points can be drawn on a page with these properties: \n\n• The circumferences do not intersect.\n\n• None of the points lies on a circumference.\n\n• The seven counts of enclosed points are distinct (zero is allowed).\n\n• Every point is enclosed by equally many circles.\n\n(b) Prove that no such arrangement exists with five circles and five points.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2018 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2018-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Dua polinomial kubik",
    "prompt": "For $a,b,c>0$, define $P(x)=(x-a)(x-b)(x-c)$ and $Q(x)=(x-ab)(x-bc)(x-ca)$. Suppose $P(x)=Q(x)$ for all $x$. Find the minimum possible sum $a+b+c$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2018 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2018-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan penempatan domino",
    "prompt": "On a $4\\times4$ grid, Kim and Li alternately place nonoverlapping dominoes aligned with the grid. Kim plays first and can place only vertical dominoes; Li can place only horizontal ones. The last player able to place a domino wins.\n\n[[FIGURE]]\n\nDetermine the winner under optimal play, with proof.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2018 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2018-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Pencerminan empat segitiga",
    "prompt": "A square $ABCD$ lies inside triangle $XYZ$, with $B$ on $\\overline{XY}$, $C$ on $\\overline{YZ}$, and $D$ on $\\overline{ZX}$. Draw $\\overline{XA}$, obtaining four triangular regions $\\triangle XAB$, $\\triangle YBC$, $\\triangle ZCD$, and $\\triangle XDA$. Reflect each region across the square side it touches, respectively $AB$, $BC$, $CD$, and $DA$. Prove that the four reflected regions together cover the square.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2018 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2018-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Pemisahan warna pada lingkaran",
    "prompt": "Twelve labeled points are equally spaced around a circle, as shown. Choose three points of each color: red, green, blue and white. Count the colorings for which, for any pair of colors, a line separates all three points of the first color from all three of the second. For instance, a line must exist with every green point on one side and every white point on the other.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2018 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2019-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pengubinan persegi",
    "prompt": "In how many ways can a $4\\times4$ square be partitioned into one or more squares of sizes $1\\times1$, $2\\times2$, $3\\times3$ and $4\\times4$? The figure illustrates three distinct partitions.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2019 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2019-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Identitas komposisi polinomial",
    "prompt": "Find all polynomials $p(x)$ with real coefficients such that $p(x)^2=p(p(x))$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2019 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2019-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Faktorial sebagai jumlah pangkat dua",
    "prompt": "Find all nonnegative integers $a,b,c$ such that $2^a+2^b=c!$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2019 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2019-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Sudut yang ditentukan oleh lingkaran dalam",
    "prompt": "Let $I$ be the incenter of $ABC$ and $D$ the contact point of its incircle on $\\overline{AB}$. The line $ID$ meets the circumcircle of $ABI$ at $I$ and $E$. If $IE=AC+BC$, determine angle $C$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2019 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2019-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Peluang kesamaan warna",
    "prompt": "A bag contains $n$ balls of various colors. For each integer $n\\ge200$ with $n\\equiv0$ or $1\\pmod4$, prove that colors can be assigned so that two balls drawn uniformly without replacement are equally likely to have matching or different colors. An example for $n=13$ consists of nine red, three green and one blue ball.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2019 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2021-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Persamaan kuadrat dengan koefisien prima",
    "prompt": "Find all ordered triples of integers $(x,b,c)$, such that $b$ is prime, $c$ is odd and positive, and $x^2+bx+c=0$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2021 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2021-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Lingkaran konsentris yang bersinggungan",
    "prompt": "Three circles $C_1,C_2,C_3$ are pairwise externally tangent. Suppose a fourth circle $D$ is externally tangent to each and a fifth circle $E$ is internally tangent to each, and these last two circles have a common center. Must the original three circles have equal radii? Prove or disprove.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2021 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2021-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Fungsi pada bidang",
    "prompt": "Does a function $f:\\mathbb R^2\\to\\mathbb R$ exist such that $f(P)+f(Q)+f(R)$ equals the perimeter of $PQR$ whenever $PQR$ is an equilateral triangle?",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2021 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2021-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan pemindahan batu",
    "prompt": "Gog and Magog start with zero stones. Gog moves first and turns alternate. A turn consists either of gaining one stone or transferring to the opponent an integer number of stones between one and half of the player's current holdings, inclusive. A player loses upon having at least $20$ stones. Prove whether Gog can force a win, Magog can force a win, or neither can (the game continues indefinitely).",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2021 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2021-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Pembagi faktorial",
    "prompt": "Prove that for all positive integers $n$, the number of divisors of $n!$ is a divisor of $(2n)!$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2021 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2022-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Koprimalitas bentuk kuadrat",
    "prompt": "Let $x$ and $y$ be relatively prime integers. Show that $x^2+xy+y^2$ and $x^2+3xy+y^2$ are relatively prime.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2022 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2022-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Dua identitas pada barisan",
    "prompt": "Find all sequences $a_1,a_2,a_3,\\ldots$ of real numbers such that for all positive integers $m,n\\ge1$, we have\n\n$$a_{m+n}=a_m+a_n-mn\\ \\text{and}$$\n\n$$a_{mn}=m^2a_n+n^2a_m+2a_ma_n.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2022 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2022-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan pelipatan kisi",
    "prompt": "Alpha and Beta alternate folds of a $10\\times100$ rectangular grid, with Alpha going first. A turn consists of folding the current grid along an interior horizontal or vertical gridline to produce a smaller rectangular grid. For instance, the initial choice is among nine horizontal and ninety-nine vertical lines. The player making the final fold wins. Determine the winner under optimal play, with proof.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2022 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2022-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pertumbuhan pada susunan melingkar",
    "prompt": "A circle of $2022$ lily pads begins with all heights equal to $1$. A frog starts on one pad. Whenever its current pad has height $k$, that pad grows by one unit and the frog jumps $k$ positions clockwise, passing over $k-1$ pads. Let $D(n)$ be the greatest height minus the least height after $n$ jumps. Determine the maximum of $D(n)$ over all $n$, with proof, or show that it is unbounded.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2022 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2022-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pencacahan kisi dengan lintasan penyeberangan",
    "prompt": "Call an $m\\times n$ grid fish-friendly if a subset of its cells is colored blue and there is a path of blue cells from the first column to the last, using only horizontal and vertical adjacency. Prove that at least $2^{2022}$ different blue-cell subsets make a $42\\times49$ grid fish-friendly.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2022 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2023-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Sudut terbesar dari empat titik",
    "prompt": "Given four distinct points $P,Q,R,S$ in the plane, let $M(P,Q,R,S)$ denote the greatest angle formed by any three of them. Find the least possible value of $M(P,Q,R,S)$ and exhibit an arrangement attaining it.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2023 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2023-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Permutasi komposisi fungsi",
    "prompt": "Daniel and nine other attendees each submit a function from $\\mathbb R$ to $\\mathbb R$. In every ordering $f_1,\\ldots,f_{10}$ of the submissions, the composition satisfies $$f_{10}(f_9(\\cdots f_2(f_1(0))\\cdots))=1.$$ If Daniel's function is $f(x)=mx+b$ with $m,b\\in\\{0,\\ldots,9\\}$, count the possible choices for his function.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2023 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2023-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Operasi asosiatif yang invarian terhadap translasi",
    "prompt": "Classify, with proof, the binary operations $\\mid$ on the integers such that for all integers $a,b,c$, $\\begin{aligned}(a\\mid b)+c&=(a+c)\\mid(b+c)\\\\ (a\\mid b)\\mid c&=a\\mid(b\\mid c).\\end{aligned}$ A binary operation here is a map $\\mathbb Z\\times\\mathbb Z\\to\\mathbb Z$; addition and multiplication are examples of binary operations.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2023 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2025-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Persegi pada segi delapan",
    "prompt": "Draw all edges and diagonals of a regular octagon. Count, with proof, the squares whose sides are contained in those drawn segments.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2025 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2025-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Identitas hasil bagi polinomial",
    "prompt": "For polynomials $f(x),g(x)$ with $g(x)\\ne0$, define $\\left\\lfloor\\frac{f(x)}{g(x)}\\right\\rfloor$ as the unique polynomial $q(x)$ in the division identity $f(x)=g(x)\\cdot q(x)+r(x)$, where $r(x)=0$ or $\\deg r(x)<\\deg g(x)$. Determine the real polynomials $p$ satisfying $$\\left\\lfloor\\frac{p(x)}x\\right\\rfloor+\\left\\lfloor\\frac{p(x)}{x+1}\\right\\rfloor=x^2.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2025 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2025-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Penjumlahan blok bilangan dengan digit berulang",
    "prompt": "For a positive integer $N$, its split-sum is obtained by splitting its decimal digits into two blocks, with the second block having the same length as the first or one more digit, and adding the resulting integers. For example, the split-sums of $2025,123,6$ are $20+25=45$, $1+23=24$, and $6$, respectively. Count the positive integers $m$ satisfying all three requirements:\n\n• $m$ has at most $2025$ digits.\n\n• All digits of $m$ are equal.\n\n• The split-sum of $m^2$ equals $m$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2025 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2025-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Segitiga sama sisi dan jajargenjang",
    "prompt": "For a parallelogram $ABCD$, construct an equilateral triangle $ABP$ with $P$ on the same side of $\\overline{AB}$ as $C,D$. If lines $\\overleftrightarrow{CP}$ and $\\overleftrightarrow{DA}$ meet at $Q$, show there is an $R$ on $\\overleftrightarrow{AB}$ such that $\\triangle CQR$ is equilateral.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2025 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2025-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Kesamaan bilangan rasional berpangkat dirinya",
    "prompt": "A positive rational $r$ is called friendly when another positive rational $s\\ne r$ satisfies $r^r=s^s$. Determine the second smallest friendly number and prove your answer.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2025 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2026-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Persamaan faktorial dan kuadrat sempurna",
    "prompt": "Find (with proof) all ordered pairs of integers $(n,k)$, with $n\\ge0$ and $1\\le k\\le10$, such that $$n!+1=(kn+1)^2.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2026 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2026-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permainan pengejaran pada kisi",
    "prompt": "James tries to catch his dog Brutus on an $N\\times N$ grid of lattice points. James begins at the top-left corner; Brutus starts at a randomly chosen different point. In each round Brutus moves first to a horizontal or vertical neighbor, and James then moves to a horizontal, vertical or diagonal neighbor. Both stay on the grid.\n\n[[FIGURE]]\n\nCapture occurs at any instant when the two occupy the same point. Find the expected number of moves James needs for capture, assuming James minimizes and Brutus maximizes the capture time.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2026 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2026-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Basis aditif berorde dua",
    "prompt": "An increasing sequence $a_0,a_1,a_2,\\ldots$ of nonnegative integers has the sum-of-two property if each nonnegative integer equals $a_i+a_j$ for some indices $i,j$, possibly equal. For example, $0,1,3,5,7,\\ldots$ (continuing with all odd numbers) has this property. Prove or disprove that every such sequence admits a constant $K$ with $a_i\\le Ki$ for all $i\\ge0$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2026 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "imc-2025-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Cakupan garis singgung",
    "prompt": "Let $P\\in\\mathbb R[x]$ have degree at least $2$. For each $x\\in\\mathbb R$, denote the tangent line at $(x,P(x))$ by $\\ell_x\\subseteq\\mathbb R^2$.\n\n(a) When $\\deg P$ is odd, establish $$\\bigcup_{x\\in\\mathbb R}\\ell_x=\\mathbb R^2.$$\n\n(b) Decide whether some even-degree polynomial also has this property.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2025 — Hari 1, Nomor 1",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-02",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Batas tajam integral",
    "prompt": "If $f\\in C^2(\\mathbb R)$, $\\int_{-1}^1 f(x)\\,dx=0$ and $f(1)=f(-1)=1$, establish $$\\int_{-1}^1 (f''(x))^2\\,dx\\ge15$$ and characterize equality.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2025 — Hari 1, Nomor 2",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Matriks acak yang komutatif",
    "prompt": "Choose $A,B$ independently and uniformly from $\\{X\\in M_{2025}(\\mathbb R):X=X^{\\mathsf T},\\ \\operatorname{rank}X=1,\\ x_{ij}\\in\\{-1,1\\}\\}$. Compute $\\mathbb P(AB=BA)$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2025 — Hari 1, Nomor 3",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-05",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Orde maksimum iterasi pemetaan",
    "prompt": "Write $o(T)=|\\{T^j:j\\ge1\\}|$ for a self-map of $\\{1,\\ldots,n\\}$. Let $f(n)$ and $g(n)$ be the maxima of $o(T)$ over permutations and arbitrary self-maps, respectively. Establish $g(n)-f(n)<n^{0.501}$ eventually.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2025 — Hari 1, Nomor 5",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Identitas turunan pada titik antara",
    "prompt": "Suppose $f\\in C^1((0,\\infty))$ and $b>a>0$ satisfy $f(a)=f(b)=k$. Establish the existence of $\\xi\\in(a,b)$ with $$f(\\xi)-\\xi f'(\\xi)=k.$$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2025 — Hari 2, Nomor 6",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-07",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Himpunan bilangan bulat positif yang tertutup terhadap operasi",
    "prompt": "Determine the nonempty subsets $M$ of the positive integers satisfying these two closure conditions:\n\n(a) $x\\in M\\implies 2x\\in M$;\n\n(b) $x,y\\in M$ and $x+y$ even imply $\\frac{x+y}{2}\\in M$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2025 — Hari 2, Nomor 7",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Nilai eigen matriks dengan simetri rotasi seperempat putaran",
    "prompt": "For a real square matrix $A$, use $A^{\\mathsf R}$ for its counterclockwise rotation by $90^\\circ$. For example, $$\\begin{bmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{bmatrix}^{R}=\\begin{bmatrix}3&6&9\\\\2&5&8\\\\1&4&7\\end{bmatrix}.$$ Assuming $A=A^{\\mathsf R}$, establish that every complex eigenvalue $\\lambda$ of $A$ satisfies $\\operatorname{Re}\\lambda=0$ or $\\operatorname{Im}\\lambda=0$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2025 — Hari 2, Nomor 8",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-09",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Maksimum sampel acak tanpa pengembalian",
    "prompt": "Starting with $\\mathbb Z_{>0}$, select and delete its $i$th smallest remaining member with probability $2^{-i}$ at each step. If $Y_n$ is the greatest of the first $n$ selected integers, prove $$\\mathbb E[Y_n]=\\sum_{i=1}^n\\frac{2^i}{2^i-1}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2025 — Hari 2, Nomor 9",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2025-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Pencacahan asimtotik hasil kali kuadrat sempurna",
    "prompt": "Set $$S_N=|\\{(a,b)\\in\\{1,\\ldots,N\\}^2:(a^2+a)(b^2+b)\\text{ is a square}\\}|.$$ Prove convergence of $$\\lim_{N\\to\\infty}\\frac{S_N}{N}$$ and determine its limit.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2025 — Hari 2, Nomor 10",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2026-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Persamaan trigonometri",
    "prompt": "Show that the equation $\\cos(\\cos x)=\\sin(\\sin x)$ has no real solutions.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2026 — Hari 1, Nomor 1",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: verbatim transcription verified against user-supplied IMC 2026 Day 1 PDF, page 1."
    }
  },
  {
    "id": "imc-2026-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Identitas matriks dan komutativitas",
    "prompt": "Let $n$ be a positive integer. Suppose that $A$ and $B$ are $n\\times n$ matrices with real entries such that\n\n$$A^\\top A+BB^\\top=AB+BA,$$\n\nwhere $X^\\top$ denotes the transpose of matrix $X$.\n\nDoes this imply that $AB=BA$?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2026 — Hari 1, Nomor 2",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: verbatim transcription verified against user-supplied IMC 2026 Day 1 PDF, page 1."
    }
  },
  {
    "id": "imc-2026-03",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Penggabungan berselang-seling himpunan bagian terurut",
    "prompt": "Consider a deck of $n\\ge2$ cards labeled $1,2,\\ldots,n$. An alternating shuffle of the deck is performed as follows. We split the deck into two non-empty stacks. We then sort the first stack in increasing order, and the second stack in decreasing order. Finally, we alternately take cards from the first and second stacks (starting with the first). If one of the stacks runs out, the remaining cards from the other stack are placed at the end. How many different final orders of the deck can be obtained in this way?\n\nExample: Suppose $n=6$, the first stack is $A=(1,3)$, and the second stack is $B=(6,5,4,2)$. Then the order resulting from the alternating shuffle is $(1,6,3,5,4,2)$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2026 — Hari 1, Nomor 3",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: verbatim transcription verified against user-supplied IMC 2026 Day 1 PDF, page 1."
    }
  },
  {
    "id": "imc-2026-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Limit barisan rekursif berbasis rata-rata",
    "prompt": "Let $x_1>0$. Define the sequence $\\{x_n\\}$ by the recurrence\n\n$$x_{n+1}=\\arctan\\left(\\frac{x_1+x_2+\\cdots+x_n}{n}\\right)\\quad\\text{for all }n\\ge1.$$\n\nFind $\\displaystyle\\lim_{n\\to\\infty}x_n\\sqrt{\\ln n}$, where $\\ln x$ denotes the natural logarithm of $x$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2026 — Hari 1, Nomor 4",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: verbatim transcription verified against user-supplied IMC 2026 Day 1 PDF, page 1."
    }
  },
  {
    "id": "imc-2026-05",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Konsentrasi polinomial",
    "prompt": "Prove that there exists a constant $C>0$ such that for every pair $A,B$ of positive integers, there is a real polynomial $p(x)$ with\n\n$$p(0)^2>\\sum_{i=1}^A p(-i)^2+\\sum_{i=1}^B p(i)^2\\quad\\text{and}\\quad\\deg p<C\\sqrt{AB}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2026 — Hari 1, Nomor 5",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: verbatim transcription verified against user-supplied IMC 2026 Day 1 PDF, page 1."
    }
  },
  {
    "id": "imc-2026-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Persamaan komposisi fungsi dan turunan",
    "prompt": "(a) Is there a differentiable function $f:\\mathbb R\\to\\mathbb R$ such that $f'(f(x))=x$ for every $x\\in\\mathbb R$?\n\n(b) Is there a differentiable function $f:\\mathbb R\\to\\mathbb R$ such that $f'(f(x))=|x|$ for every $x\\in\\mathbb R$?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2026 — Hari 2, Nomor 6",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: problem body checked word for word and visually against user-supplied IMC_2026_Day_2_Problems.pdf, page 1; web rendering pending."
    }
  },
  {
    "id": "imc-2026-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Luas gabungan ruas garis",
    "prompt": "For a continuous function $f:[0,1]\\to\\mathbb R$, let $S(f)$ be the union of all straight segments in the plane joining points $(x,0)$ and $(f(x),1)$, where $x\\in[0,1]$. Let $A(f)$ be the area of $S(f)$. Find the infimum of $A(f)$ over all continuous $f$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2026 — Hari 2, Nomor 7",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: problem body checked word for word and visually against user-supplied IMC_2026_Day_2_Problems.pdf, page 1; web rendering pending."
    }
  },
  {
    "id": "imc-2026-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Batas tajam energi matriks",
    "prompt": "Let $n\\ge5$, and suppose that $A=(a_{ij})$ is a real symmetric $n\\times n$ matrix such that\n\n$a_{ii}=0\\quad\\text{and}\\quad a_{ij}\\in\\{-1,1\\}\\text{ for }i\\ne j.$\n\nAssume that the scalar products of any two distinct rows of $A$ have the same value. Let $\\lambda_1,\\ldots,\\lambda_n$ be the eigenvalues of $A$. Prove that\n\n$\\sum_{i=1}^n|\\lambda_i|\\ge2n-2$\n\nand determine all matrices for which equality holds.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2026 — Hari 2, Nomor 8",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: problem body checked word for word and visually against user-supplied IMC_2026_Day_2_Problems.pdf, page 1; web rendering pending."
    }
  },
  {
    "id": "imc-2026-09",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Batas bawah barisan",
    "prompt": "Let $a_1,a_2,\\ldots$ be an infinite sequence of positive real numbers satisfying\n\n$a_1+a_2+\\cdots+a_{2n-1}=a_n^2$\n\nfor all positive integers $n$. Prove that $a_n\\ge2n-1$ for all positive integers $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2026 — Hari 2, Nomor 9",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: problem body checked word for word and visually against user-supplied IMC_2026_Day_2_Problems.pdf, page 1; web rendering pending."
    }
  },
  {
    "id": "imc-2026-10",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Himpunan berhingga pada papan catur",
    "prompt": "An *infinite chessboard of size* $d>0$ is obtained by colouring the interiors of the squares of an infinite square grid of side length $d$ alternately white and black following the usual chessboard pattern. The points belonging to the grid lines have neither colour and the grid may be translated and rotated arbitrarily in the plane.\n\nIs it true that for any finite set of points $p_1,\\ldots,p_n$ in the plane, there exist $d\\in(0,1)$ and an infinite chessboard of size $d$ such that all the points $p_i$ lie in white squares?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2026 — Hari 2, Nomor 10",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: problem body checked word for word and visually against user-supplied IMC_2026_Day_2_Problems.pdf, page 1; web rendering pending."
    }
  },
  {
    "id": "imc-2025-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Identitas fungsi lantai dengan akar berderajat genap",
    "prompt": "Fix a positive even integer $a$. Determine all real $x$ for which $$\\left\\lfloor\\sqrt[a]{b^a+x}\\cdot b^{a-1}\\right\\rfloor=b^a+\\left\\lfloor x/a\\right\\rfloor\\tag{1}$$ holds for every positive integer $b$, where $\\lfloor t\\rfloor$ is the greatest integer not exceeding $t$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2025 — Hari 1, Nomor 4",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-02",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Limit logaritmik",
    "prompt": "For each positive integer $n$, define $$S_n=\\log\\left(\\sqrt[n^2]{1^1\\cdot2^2\\cdots n^n}\\right)-\\log(\\sqrt n),$$ with $\\log$ the natural logarithm. Evaluate $\\displaystyle\\lim_{n\\to\\infty}S_n$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2024 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-04",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Subgrup yang dibangkitkan oleh hasil kali berurutan",
    "prompt": "Fix $g\\ne h$ in a group $G$ and $n\\in\\mathbb Z_{>0}$. For a non-eventually-periodic sequence $w\\in\\{g,h\\}^{\\mathbb N}$, put $$H_w=\\langle w_k w_{k+1}\\cdots w_{k+n-1}\\mid k\\ge1\\rangle.$$ Establish that all such sequences yield the same subgroup $H_w$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2024 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-05",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Monotonisitas radial peluang selubung konveks",
    "prompt": "Fix integers $n>d\\ge1$ and independent uniform samples $X_1,\\ldots,X_n$ in the Euclidean unit ball of $\\mathbb R^d$. Set $F(p)=\\mathbb P(p\\in\\operatorname{conv}\\{X_1,\\ldots,X_n\\})$. Show that $F(p)\\ge F(q)$ whenever $\\|p\\|<\\|q\\|\\le1$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2024 — Hari 1, Nomor 5",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-07",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Determinan pada identitas matriks",
    "prompt": "For fixed $n\\ge1$, determine the set of possible $\\det(AB)$ with $A,B\\in GL_n(\\mathbb C)$ subject to $$A+B=I,\\qquad (A^2+B^2)(A^4+B^4)=A^5+B^5.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2024 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-08",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Batas limit barisan rekursif nonlinear",
    "prompt": "Starting from $x_1=2,\\ x_2=4$, iterate $$x_{n+2}=3x_{n+1}-2x_n+\\frac{2^n}{x_n}\\quad(n\\ge1).$$ Establish existence of $\\lim_{n\\to\\infty}\\frac{x_n}{2^n}$ and the bounds $$\\frac{1+\\sqrt3}{2}\\le\\lim_{n\\to\\infty}\\frac{x_n}{2^n}\\le\\frac32.$$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2024 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-09",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Paritas pencacahan matriks bilangan bulat",
    "prompt": "Call an integer matrix $A=(a_{ij})$ nice when all four conditions hold: (i) its set of entries is $\\{1,\\ldots,2t\\}$ for some positive integer $t$; (ii) its rows and columns are nondecreasing: $a_{i,j}\\le a_{i,j+1}$ and $a_{i,j}\\le a_{i+1,j}$; (iii) if $a_{ij}=a_{k\\ell}$, then $i=k$ or $j=\\ell$; (iv) for each $s=1,\\ldots,2t-1$, some positions $(i,j),(k,\\ell)$ with $i\\ne k$ and $j\\ne\\ell$ have entries $s,s+1$, respectively. The two nice matrices of size $2\\times3$ are $$\\begin{pmatrix}1&1&1\\\\2&2&2\\end{pmatrix},\\qquad\\begin{pmatrix}1&1&3\\\\2&4&4\\end{pmatrix}.$$ Prove that, for all positive integers $m,n$, the number of nice $m\\times n$ matrices is even.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2024 — Hari 2, Nomor 9",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2024-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Kongruensi pembagi bilangan bebas kuadrat",
    "prompt": "Call a positive integer $n$ almost prime if it is square-free and its positive divisors $1=d_1<\\cdots<d_k=n$ satisfy $$n\\mid x^{d_1}+x^{d_2}+\\cdots+x^{d_k}-kx\\qquad(x\\in\\mathbb Z).$$ Square-free means that no square $d^2$ with integer $d>1$ divides $n$. Suppose $r=2^{2^m}+1$ is a Fermat prime, where $m\\ge0$ is an integer, and an almost prime integer $n$ has a prime divisor $p$ with $p\\equiv1\\pmod r$. Establish $d_i\\equiv1\\pmod r$ for every $1\\le i\\le k$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2024 — Hari 2, Nomor 10",
      "url": "https://www.imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Identitas dilatasi fungsi terdiferensialkan dua kali",
    "prompt": "Determine the solution set in $C^2(\\mathbb R)$ of $f(7x+1)=49f(x)$, with the identity required on $\\mathbb R$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2023 — Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 2,
    "title": "Perpangkatan matriks dengan identitas terkait",
    "prompt": "Given $A,B,C\\in M_n(\\mathbb C)$ satisfying $$A^2=B^2=C^2\\quad\\text{and}\\quad B^3=ABC+2I.$$ establish $A^6=I$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2023 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-03",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Polinomial multiplikatif dalam dua variabel real",
    "prompt": "Find all polynomials $P$ in two variables with real coefficients satisfying the identity\n\n$$P(x,y)P(z,t)=P(xz-yt,xt+yz).$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2023 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_1_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "imc-2023-04",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Polinomial permutasi modulo prima",
    "prompt": "For a prime $p$ and a positive integer $k$, define $a_i=i^k+i$ for $i=0,1,\\ldots,p-1$. Suppose these $p$ integers represent all residue classes modulo $p$. Determine the set of possible remainders of $a_2$ modulo $p$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2023 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-05",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Batas bawah kardinalitas keluarga permutasi",
    "prompt": "Fix integers $2\\le k\\le n$ and a set $M$ of $n$ fruits. Ivan has a nonempty collection of preferred orderings of the fruits. For each preferred ordering $x=(x_1,\\ldots,x_n)$, assume there are positions $i_1<\\cdots<i_k$ such that swapping $x_{i_j}$ with $x_{i_{j+1}}$ produces another preferred ordering for every $1\\le j<k$. Establish that the collection contains at least $k!$ orderings.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2023 — Hari 1, Nomor 5",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-06",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Ketercapaian melalui operasi baris dan kolom",
    "prompt": "Start with $\\begin{pmatrix}2&3\\\\2&4\\end{pmatrix}$. Allowed moves replace either row by its componentwise product or quotient with the other row; the analogous moves on columns are also allowed. Decide whether $\\begin{pmatrix}2&4\\\\2&3\\end{pmatrix}$ is reachable.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2023 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Syarat universal pada turunan",
    "prompt": "Set $V=\\{f\\in C([0,1]):f\\text{ is differentiable on }(0,1),\\ f(0)=0,\\ f(1)=1\\}$. Find the real parameters $\\alpha$ for which each $f\\in V$ admits $\\xi\\in(0,1)$ with $$f(\\xi)+\\alpha=f'(\\xi).$$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2023 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-08",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Indeks Wiener dan Harary pada pohon",
    "prompt": "Let $T$ be a tree (a connected simple graph without cycles) on $n$ vertices. For vertices $u,v$, let $d(u,v)$ count the edges on a shortest path connecting them. Define $$W(T)=\\sum_{\\substack{\\{u,v\\}\\subseteq V(T)\\\\u\\ne v}}d(u,v),\\qquad H(T)=\\sum_{\\substack{\\{u,v\\}\\subseteq V(T)\\\\u\\ne v}}\\frac1{d(u,v)}.$$ Establish $$W(T)\\cdot H(T)\\ge\\frac{(n-1)^3(n+2)}4.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2023 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-09",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Benda konveks dengan proyeksi saling lepas",
    "prompt": "Consider closed convex sets $X,Y\\subseteq[0,1]^3$ of equal volume $v$, whose orthogonal projections onto each coordinate plane are disjoint. Determine the supremum of the achievable values of $v$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2023 — Hari 2, Nomor 9",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2023-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Penyebut jumlah parsial deret eksponensial",
    "prompt": "Write $$1+\\frac1{1!}+\\frac1{2!}+\\cdots+\\frac1{n!}=\\frac{f(n)}{g(n)}$$ in lowest terms with $g(n)>0$. Decide whether $g(n)>n^{0.999n}$ holds for at least one integer $n\\ge1$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2023 — Hari 2, Nomor 10",
      "url": "https://www.imc-math.org.uk/archive/problems/2023/IMC_2023_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-01",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 2,
    "title": "Persamaan matriks linear dengan koefisien nilpoten",
    "prompt": "Let $A$ be a real $n\\times n$ matrix such that $A^3=0$.\n\n(a) Prove that there is a unique real $n\\times n$ matrix $X$ that satisfies the equation\n\n$$X+AX+XA^2=A.$$\n\n(b) Express $X$ in terms of $A$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2021 — Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_1_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "imc-2021-02",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Invariansi peluang pengurutan",
    "prompt": "Fix positive integers $n,k$ and take any nonnegative integer $a$. Choose a $k$-element subset $X$ of $\\{1,\\ldots,k+a\\}$ uniformly at random. Independently choose an $n$-element subset $Y$ of $\\{1,\\ldots,k+n+a\\}$ uniformly at random. Show that $$\\mathbb P\\left(\\min(Y)>\\max(X)\\right)$$ is independent of $a$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2021 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Pembagian interval berturut-turut yang optimal",
    "prompt": "Call a positive real number $d$ good when an infinite sequence $(a_j)_{j\\ge1}$ in $(0,d)$ exists such that, for every $n\\ge1$, the partition of $[0,d]$ by $a_1,\\ldots,a_n$ has every segment of length at most $\\frac1n$. Determine $\\sup\\{d\\mid d\\text{ is good}\\}$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2021 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Syarat cukup untuk fungsi kelas satu Baire",
    "prompt": "Suppose $f:\\mathbb R\\to\\mathbb R$ has the following property: for every $\\varepsilon>0$, there is a function $g:\\mathbb R\\to(0,\\infty)$ such that, for all real $x,y$, $$|x-y|<\\min\\{g(x),g(y)\\}\\implies |f(x)-f(y)|<\\varepsilon.$$ Establish the existence of continuous functions $h_j:\\mathbb R\\to\\mathbb R$ satisfying $\\lim_{j\\to\\infty}h_j(x)=f(x)$ for every $x\\in\\mathbb R$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2021 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-05",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Batas determinan dari solusi matriks simetris",
    "prompt": "For $A\\in M_n(\\mathbb R)$, suppose every $m\\ge1$ admits a symmetric real matrix $B$ with $$2021B=A^m+B^2.$$. Establish $|\\det A|\\le1$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 2, Nomor 5",
      "label": "IMC 2021 — Hari 2, Nomor 5",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-06",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Ketakberadaan representasi permutasi setia",
    "prompt": "For prime $p$, establish that $\\operatorname{GL}_2(\\mathbb Z/p\\mathbb Z)$ does not embed as a subgroup of the symmetric group $S_p$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2021 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-07",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Batas fungsi holomorfik yang dikalikan polinomial monik",
    "prompt": "Take $f$ holomorphic on an open neighborhood of $\\{z\\in\\mathbb C:|z|\\le1\\}$ and a monic polynomial $p$. Establish $$|f(0)|\\le\\max_{|z|=1}|f(z)p(z)|.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2021 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2021-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Vektor satuan dengan syarat ortogonalitas",
    "prompt": "Determine the maximum cardinality of $S\\subseteq\\{v\\in\\mathbb R^n:\\|v\\|=1\\}$ subject to every three-element subset of $S$ containing an orthogonal pair.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2021 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/archive/problems/2021/IMC_2021_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2022-03",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Pencacahan jalan tertutup modulo prima",
    "prompt": "A flea starts at $0$ on the real line. During each minute, it can move one unit left, move one unit right, or remain where it is. For a prime $p$, let $f(p)$ count the move sequences that return the flea to $0$ after $p-1$ minutes. For instance, $f(3)=3$, corresponding to the move pairs $(0,0),(-1,1),(1,-1)$. Find the remainder of $f(p)$ modulo $p$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2022 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2022-04",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Bilangan kromatik graf pergeseran pada tripel",
    "prompt": "Fix an integer $n>3$ and let $\\Omega$ consist of the three-element subsets of $\\{1,\\ldots,n\\}$. Let $m$ be the smallest number of colors needed to color $\\Omega$ so that $\\{a,b,c\\}$ and $\\{b,c,d\\}$ receive different colors whenever $1\\le a<b<c<d\\le n$. Establish $$\\frac1{100}\\log\\log n\\le m\\le100\\log\\log n.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2022 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2022-05",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Segitiga monokromatik dalam pewarnaan sisi regular",
    "prompt": "All sides and diagonals of a regular $43$-gon are colored red or blue. Exactly $20$ red segments and $22$ blue segments meet at each vertex. A triangle with vertices from the polygon is monochromatic when its three sides have one color. Given that $2022$ such triangles are blue, determine the number of red ones.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 2, Nomor 5",
      "label": "IMC 2022 — Hari 2, Nomor 5",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2022-06",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Permutasi dengan jumlah hasil kali bersebelahan tertentu",
    "prompt": "For each odd prime $p$, establish the existence of a permutation $(x_1,\\ldots,x_{p-1})$ of the nonzero residues modulo $p$ satisfying $$x_1x_2+x_2x_3+\\cdots+x_{p-2}x_{p-1}\\equiv2\\pmod p.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2022 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2022-07",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Batas rank matriks idempoten antikomutatif",
    "prompt": "Suppose $A_1,\\ldots,A_k\\in M_n(\\mathbb C)$ with $A_i^2=A_i$ for each $i$ and $A_iA_j=-A_jA_i$ for $i\\ne j$. Establish $$\\min_{1\\le i\\le k}\\operatorname{rank}(A_i)\\le\\frac nk.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2022 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2022-08",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Irisan dua poligon acak dalam lingkaran",
    "prompt": "Let $n,k\\ge3$. Independently sample $n$ blue and $k$ red points from the uniform distribution on a circle. Write $P_B$ and $P_R$ for the respective convex hulls. Determine the expected number of vertices of $P_B\\cap P_R$, counting zero vertices when the intersection is empty.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2022 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "iymc-2019-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Nilai maksimum polinomial kubik",
    "prompt": "Determine $\\max_{x\\ge0}(x+x^2-x^3)$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2019,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2019 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/problems/2019/IYMC_Qualification_Round_2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2019-qr-b",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Keterbagian ekspresi kubik",
    "prompt": "Establish divisibility of $1n^3+2n+3n^2$ by both $2$ and $3$ for each positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2019,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2019 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/problems/2019/IYMC_Qualification_Round_2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2019-qr-d",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Sistem persamaan linear simetris",
    "prompt": "Given real numbers $\\alpha,\\beta,\\gamma$ satisfying the three equations $$\\begin{aligned}\\alpha+\\beta+\\gamma&=1,\\\\\\beta+\\gamma+\\beta&=1,\\\\\\gamma+\\beta+\\gamma&=1,\\end{aligned}$$ determine $\\alpha$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2019,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2019 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/problems/2019/IYMC_Qualification_Round_2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2020-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Akar persamaan hasil kali eksponensial",
    "prompt": "Determine the real zeros of the function $$f(x)=(2^x-1)(x^2+2x-3).$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2020,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2020 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/problems/2020/IYMC_Qualification_Round_2020.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2020-qr-b",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Keterbagian oleh sembilan",
    "prompt": "Establish that $3\\cdot4^n+51$ is a multiple of both $3$ and $9$ for each positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2020,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2020 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/problems/2020/IYMC_Qualification_Round_2020.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2020-qr-c",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Nilai eksak ekspresi bersarang",
    "prompt": "Evaluate the following expression without a calculator: $$\\sqrt{\\sin\\left(\\frac{\\pi+\\log_2\\sqrt{2^\\pi\\cdot2^\\pi}}{2^5-2^4-2^3}\\right)\\sqrt[3]{\\frac{2^{4-1}}{2^{3/2}}}+\\log_2\\left(\\log_3(9^{15})+\\pi^{1+(-1)^{17}}+1\\right)+\\frac{(-1)^5+(-1)^{27}}{(-1)^{766}}}.$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2020,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2020 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/problems/2020/IYMC_Qualification_Round_2020.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2020-qr-d",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Ketaksamaan trigonometri",
    "prompt": "Establish the inequality $|\\cos(x)|\\ge1-\\sin^2(x)$ for every $x\\in\\mathbb R$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2020,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2020 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/problems/2020/IYMC_Qualification_Round_2020.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2021-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Dua pola barisan",
    "prompt": "Continue the two sequences shown in the table and give a formula for each. $$\\begin{array}{c|rrrrrr|c|c}n&1&2&3&4&5&6&7&\\text{Equation}\\\\\\hline a_n&2&5&9&14&20&27&&\\\\ b_n&1&3&12&60&360&2520&&\\end{array}$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2021,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2021 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2021-qr-b",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Penyelesaian persamaan kubik bersarang",
    "prompt": "Determine the real solution set of $123=x(2x(3x-3)-2)+100+20+3$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2021,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2021 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2021-qr-c",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Penjumlahan dan perkalian",
    "prompt": "Evaluate the following expression without a calculator: $$\\left(\\frac{\\log_{10}(1000^{100})}{100}+\\sum_{n=1}^{100}\\frac{\\sin(\\pi n)+1}{(-1)^n}\\right)\\sqrt{\\prod_{m=1}^{1000}\\frac{1}{\\cos^2(\\pi m)}}.$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2021,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2021 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2021-qr-d",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Batas eksponensial",
    "prompt": "Establish $(n+2)\\sin n<2^{n+1}$ whenever $n$ is a positive integer.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2021,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2021 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2022-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Akar persamaan hasil kali logaritmik",
    "prompt": "Find the real zeros of $$f(x)=(\\log(3^x)-2\\log(3))(x^2-1).$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2022,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2022 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2022-qr-b",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Jumlah deret geometri tak hingga",
    "prompt": "Find the sum of the infinite series $$1+\\frac3\\pi+\\frac3{\\pi^2}+\\frac3{\\pi^3}+\\frac3{\\pi^4}+\\frac3{\\pi^5}+\\cdots.$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2022,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2022 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2022-qr-c",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Nilai eksak ekspresi logaritmik",
    "prompt": "Evaluate the following expression without a calculator: $$\\log\\left[\\log(3)\\log(2)\\left(\\frac{\\sqrt3-2\\sin(\\pi/3)}{\\pi^3+1}+1\\right)-\\log(2)\\log(3)+(-1)^{100}\\right].$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2022,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2022 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2022-qr-d",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Jumlah pembagi kuadrat bilangan prima",
    "prompt": "For positive integers $n$, write $\\sigma(n)$ for the sum of the positive divisors of $n$. For every prime $p$, establish $\\sigma(n)<2n$ when $n=p^2$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2022,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2022 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2022-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Irisan dua segitiga sama sisi",
    "prompt": "Take two congruent upright equilateral triangles of side length $a>0$ on the same horizontal baseline. Translate one horizontally by $a/2$ relative to the other. Compute the area common to both triangles.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2022,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2022 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2023-qr-b",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Perpangkatan berselang-seling modulo tiga",
    "prompt": "Establish divisibility of $2^n-(-1)^n$ by $3$ at each positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2023,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2023 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2023-qr-c",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Jumlah berhingga dalam logaritma",
    "prompt": "Evaluate the following expression without a calculator: $$\\log_3\\left(\\frac{\\sin(2\\pi)}{\\tan(\\pi/3)}+\\sum_{n=0}^{10}\\left(\\frac{1+\\sqrt{1+\\sqrt1}}{1+(1^{-1}+1^{1-1})\\cos(\\pi/4)}-\\frac{2^4-2^3}{(1+\\sqrt1)^2}\\right)^n\\right).$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2023,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2023 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2023-qr-d",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Relasi rekursif jumlah pembagi",
    "prompt": "For positive integers $n$, denote their positive divisor sum by $\\sigma(n)$. For every prime $p$ and positive integer $m$, establish $$\\sigma(p^m)=1+p\\cdot\\sigma(p^{m-1}).$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2023,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2023 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2023-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Luas potongan segitiga",
    "prompt": "In an equilateral triangle of side length $a$, a segment of length $b$ parallel to one side cuts off a smaller triangle at the opposite vertex. Express the area of that smaller triangle in terms of $a$ and $b$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2023,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2023 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2024-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Kelanjutan dua barisan",
    "prompt": "Continue both sequences in the table and find a formula for their $n$th terms. $$\\begin{array}{c|rrrrrr|c|c}n&1&2&3&4&5&6&7&\\text{Equation}\\\\\\hline a_n&2&5&10&17&26&37&&\\\\ b_n&1&2&8&48&384&3840&&\\end{array}$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2024,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2024 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2024-qr-b",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Persamaan kuartik",
    "prompt": "Determine the set of real solutions of $x^4+x^2-x-1=1-x-x^2-x^4$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2024,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2024 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2024-qr-c",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Nilai hasil kali dua faktor",
    "prompt": "Evaluate the following expression without a calculator: $$\\left(\\sqrt2+(3^2)^{1/4}+\\sum_{m=1}^3\\left(\\frac1{m!}-\\sqrt m\\right)\\right)\\left(2^{\\log_2(8)}+\\frac1{2^3}-\\prod_{k=1}^8\\left(1+\\frac1k\\right)\\right).$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2024,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2024 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2024-qr-d",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Pangkat lima modulo lima",
    "prompt": "Establish $5\\mid(n^5-n)$ for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2024,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2024 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2025-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Rumus eksplisit barisan rekursif",
    "prompt": "Let $a_1=1$ and $a_{n+1}=a_n+n+1$ for $n\\ge1$. Express $a_n$ directly in terms of $n$, then evaluate $a_{100}$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2025,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2025 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/problems/2025/QR/en/IYMC_Qualification_Round_2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2025-qr-b",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Persamaan bentuk akar tanpa solusi real",
    "prompt": "Prove that the real solution set of $\\sqrt{3+x}+\\sqrt{7-x}=5$ is empty.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2025,
      "stage": "Qualification Round",
      "number": "Problem B",
      "label": "IYMC 2025 — Qualification Round, Problem B",
      "url": "https://iymc.info/docs/problems/2025/QR/en/IYMC_Qualification_Round_2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2025-qr-c",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Selisih jumlah dan hasil kali trigonometri",
    "prompt": "Evaluate the following expression without a calculator: $$\\sum_{k=1}^{3}\\frac{\\sin(\\frac{k\\pi}{12})+\\sin(\\frac{(6-k)\\pi}{12})}{\\cos(\\frac{k\\pi}{12})+\\cos(\\frac{(6-k)\\pi}{12})}-\\prod_{m=1}^{2}\\frac{\\tan(\\frac{\\pi}{4}+\\frac{m\\pi}{12})-\\tan(\\frac{\\pi}{4}-\\frac{m\\pi}{12})}{1+\\tan(\\frac{\\pi}{4}+\\frac{m\\pi}{12})\\tan(\\frac{\\pi}{4}-\\frac{m\\pi}{12})}.$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2025,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2025 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/problems/2025/QR/en/IYMC_Qualification_Round_2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2025-qr-d",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Ekspresi pangkat empat yang bernilai komposit",
    "prompt": "Determine the unique positive integer $n$ for which $n^4+4$ is not composite, and prove uniqueness.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2025,
      "stage": "Qualification Round",
      "number": "Problem D",
      "label": "IYMC 2025 — Qualification Round, Problem D",
      "url": "https://iymc.info/docs/problems/2025/QR/en/IYMC_Qualification_Round_2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2025-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Diagonal persegi panjang",
    "prompt": "A rectangle has side lengths $a$ and $b$. Its diagonal divides it into two triangles, as illustrated. Determine the perimeter and area of the two resulting triangles.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2025,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2025 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/problems/2025/QR/en/IYMC_Qualification_Round_2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2025-a1",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Koprimalitas pada barisan rekursif pecahan sederhana",
    "prompt": "Take distinct positive integers $m_0,n_0$. For every integer $k\\ge1$, let $m_k,n_k$ be positive coprime integers defined by $$\\frac{m_k}{n_k}=\\frac{2m_{k-1}+1}{2n_{k-1}+1}.$$ Prove that $\\gcd(2m_k+1,2n_k+1)=1$ for all sufficiently large $k$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2025,
      "stage": "Putnam",
      "number": "A1",
      "label": "Putnam 2025 — A1",
      "url": "https://kskedlaya.org/putnam-archive/2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2025-a2",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Batas kuadratik tajam fungsi sinus",
    "prompt": "Determine the greatest admissible real constant $a$ and the least admissible real constant $b$ in the inequality $$ax(\\pi-x)\\le\\sin x\\le bx(\\pi-x),\\qquad x\\in[0,\\pi].$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2025,
      "stage": "Putnam",
      "number": "A2",
      "label": "Putnam 2025 — A2",
      "url": "https://kskedlaya.org/putnam-archive/2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2025-a4",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Realisasi siklus melalui komutativitas matriks",
    "prompt": "Determine the least positive integer $k$ admitting real $k\\times k$ matrices $A_1,\\ldots,A_{2025}$ such that $$A_iA_j=A_jA_i\\quad\\Longleftrightarrow\\quad |i-j|\\in\\{0,1,2024\\}.$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2025,
      "stage": "Putnam",
      "number": "A4",
      "label": "Putnam 2025 — A4",
      "url": "https://kskedlaya.org/putnam-archive/2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2025-a6",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Valuasi 2-adik pada barisan rekursif",
    "prompt": "Define $b_0=0$ and $b_{n+1}=2b_n^2+b_n+1$ for $n\\ge0$. For each integer $k\\ge1$, prove the two divisibility assertions $$2^{2k+2}\\mid(b_{2k+1}-2b_{2k}),\\qquad 2^{2k+3}\\nmid(b_{2k+1}-2b_{2k}).$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2025,
      "stage": "Putnam",
      "number": "A6",
      "label": "Putnam 2025 — A6",
      "url": "https://kskedlaya.org/putnam-archive/2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2025-b6",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Syarat pertumbuhan fungsi bilangan bulat",
    "prompt": "Determine the maximum of the set $$\\{r\\in\\mathbb R\\mid \\exists g:\\mathbb Z_{>0}\\to\\mathbb Z_{>0},\\ \\forall n\\ge1,\\ g(n+1)-g(n)\\ge g(g(n))^r\\}.$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2025,
      "stage": "Putnam",
      "number": "B6",
      "label": "Putnam 2025 — B6",
      "url": "https://kskedlaya.org/putnam-archive/2025.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2024-a4",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Susunan perpangkatan sebagai barisan aritmetika modular",
    "prompt": "Classify primes $p>5$ for which some $a\\in\\mathbb F_p$ has the following property: the multiset $(a^j)_{j=0}^{p-5}$ admits an ordering forming an arithmetic progression in $\\mathbb F_p$ with nonzero common difference.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2024,
      "stage": "Putnam",
      "number": "A4",
      "label": "Putnam 2024 — A4",
      "url": "https://kskedlaya.org/putnam-archive/2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2024-a6",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Determinan Hankel dari deret aljabar",
    "prompt": "Define coefficients $c_j$ by the expansion at zero $$\\sum_{j\\ge0}c_jx^j=\\frac{1-3x-\\sqrt{1-14x+9x^2}}4.$$ For $n\\ge1$, evaluate $\\det(c_{i+j-1})_{1\\le i,j\\le n}$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2024,
      "stage": "Putnam",
      "number": "A6",
      "label": "Putnam 2024 — A6",
      "url": "https://kskedlaya.org/putnam-archive/2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2024-b1",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Permutasi dengan jumlah bergeser yang berurutan",
    "prompt": "Consider an $n\\times n$ array, where $n,k$ are positive integers and the entry in row $i$, column $j$ is $i+j-k$. Determine all $(n,k)$ for which one can choose exactly one cell in each row and each column, with the chosen entries comprising $1,2,\\ldots,n$ exactly once.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2024,
      "stage": "Putnam",
      "number": "B1",
      "label": "Putnam 2024 — B1",
      "url": "https://kskedlaya.org/putnam-archive/2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2024-b3",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Jarak antara akar persamaan tangen",
    "prompt": "Write $r_n$ for the $n$th positive root of $\\tan x=x$ in increasing order, with $x$ measured in radians. Establish $$0<r_{n+1}-r_n-\\pi<\\frac{1}{(n^2+n)\\pi}$$ for every $n\\ge1$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2024,
      "stage": "Putnam",
      "number": "B3",
      "label": "Putnam 2024 — B3",
      "url": "https://kskedlaya.org/putnam-archive/2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2024-b6",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Eksponen kritis deret eksponensial",
    "prompt": "For a real parameter $a$, define $$F_a(x)=\\sum_{n=1}^{\\infty}n^ae^{2n}x^{n^2},\\qquad 0\\le x<1.$$ Determine a real threshold $c$ satisfying both conditions: $$\\lim_{x\\to1^-}F_a(x)e^{-\\frac1{1-x}}=0\\quad(a<c),$$ $$\\lim_{x\\to1^-}F_a(x)e^{-\\frac1{1-x}}=+\\infty\\quad(a>c).$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2024,
      "stage": "Putnam",
      "number": "B6",
      "label": "Putnam 2024 — B6",
      "url": "https://kskedlaya.org/putnam-archive/2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2023-a1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Turunan kedua hasil kali fungsi kosinus",
    "prompt": "For a positive integer $n$, define $$f_n(x)=\\prod_{j=1}^n\\cos(jx).$$ Determine the least $n$ for which $|f_n''(0)|>2023$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2023,
      "stage": "Putnam",
      "number": "A1",
      "label": "Putnam 2023 — A1",
      "url": "https://kskedlaya.org/putnam-archive/2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2023-a2",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Akar tambahan pada identitas interpolasi",
    "prompt": "Take an even positive integer $n$ and a real polynomial $$p(x)=x^{2n}+a_{2n-1}x^{2n-1}+\\cdots+a_1x+a_0.$$ Assume $p(1/k)=k^2$ for all integers $k$ with $1\\le |k|\\le n$. Determine the other real solutions of $p(1/x)=x^2$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2023,
      "stage": "Putnam",
      "number": "A2",
      "label": "Putnam 2023 — A2",
      "url": "https://kskedlaya.org/putnam-archive/2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2023-a3",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Nol pertama dengan batas turunan terkait",
    "prompt": "Find the least $r>0$ admitting differentiable functions $f,g:\\mathbb R\\to\\mathbb R$ with the following properties: (a) $f(0)>0$; (b) $g(0)=0$; (c) $|f'(x)|\\le |g(x)|$ for every real $x$; (d) $|g'(x)|\\le |f(x)|$ for every real $x$; (e) $f(r)=0$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2023,
      "stage": "Putnam",
      "number": "A3",
      "label": "Putnam 2023 — A3",
      "url": "https://kskedlaya.org/putnam-archive/2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2023-b2",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Jumlah digit biner minimum suatu kelipatan",
    "prompt": "Write $s_2(m)$ for the binary digit sum of $m\\in\\mathbb Z_{>0}$. Evaluate $\\min_{n\\ge1}s_2(2023n)$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2023,
      "stage": "Putnam",
      "number": "B2",
      "label": "Putnam 2023 — B2",
      "url": "https://kskedlaya.org/putnam-archive/2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2023-b6",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Determinan matriks pencacahan",
    "prompt": "Fix a positive integer $n$. For $1\\le i,j\\le n$, put $s(i,j)=|\\{(a,b)\\in\\mathbb Z_{\\ge0}^2\\mid ai+bj=n\\}|$ and form the matrix $S=(s(i,j))_{1\\le i,j\\le n}$. For $n=5$, the construction gives $$S=\\begin{pmatrix}6&3&2&2&2\\\\3&0&1&0&1\\\\2&1&0&0&1\\\\2&0&0&0&1\\\\2&1&1&1&2\\end{pmatrix}.$$ Evaluate $\\det S$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2023,
      "stage": "Putnam",
      "number": "B6",
      "label": "Putnam 2023 — B6",
      "url": "https://kskedlaya.org/putnam-archive/2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2022-a1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Akar tunggal persamaan logaritmik",
    "prompt": "Determine the real pairs $(a,b)$ for which the graphs of $y=ax+b$ and $y=\\ln(1+x^2)$ have exactly one common point.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2022,
      "stage": "Putnam",
      "number": "A1",
      "label": "Putnam 2022 — A1",
      "url": "https://kskedlaya.org/putnam-archive/2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2022-a2",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Koefisien negatif pada kuadrat polinomial",
    "prompt": "For fixed $n\\ge2$, maximize $\\#\\{j\\mid [x^j]P(x)^2<0\\}$ over $P\\in\\mathbb R[x]$ of degree $n$, where $[x^j]$ denotes coefficient extraction.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2022,
      "stage": "Putnam",
      "number": "A2",
      "label": "Putnam 2022 — A2",
      "url": "https://kskedlaya.org/putnam-archive/2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2022-a3",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan rekursif modular tak nol",
    "prompt": "Let $p>5$ be prime and $\\mathcal S_p$ consist of infinite sequences in $\\mathbb F_p^\\times$ obeying $a_na_{n+2}=1+a_{n+1}$ for all $n\\ge1$. Prove $\\#\\mathcal S_p\\equiv0$ or $2\\pmod5$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2022,
      "stage": "Putnam",
      "number": "A3",
      "label": "Putnam 2022 — A3",
      "url": "https://kskedlaya.org/putnam-archive/2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2022-b1",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Koefisien Taylor tak nol",
    "prompt": "For $P\\in x\\mathbb Z[x]$ with $P'(0)$ odd, establish $[x^k]\\exp(P(x))\\ne0$ for every integer $k\\ge0$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2022,
      "stage": "Putnam",
      "number": "B1",
      "label": "Putnam 2022 — B1",
      "url": "https://kskedlaya.org/putnam-archive/2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2022-b2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Himpunan berhingga yang tertutup terhadap hasil kali silang",
    "prompt": "Find the possible positive cardinalities of a finite set $S\\subseteq\\mathbb R^3$ satisfying $$S=\\{u\\times v\\mid u,v\\in S\\},$$ with $\\times$ the usual vector cross product.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2022,
      "stage": "Putnam",
      "number": "B2",
      "label": "Putnam 2022 — B2",
      "url": "https://kskedlaya.org/putnam-archive/2022.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2021-a1",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Lintasan terpendek pada kisi dengan panjang lompatan tetap",
    "prompt": "A grasshopper starts at $(0,0)$ and hops between points of the integer lattice in the plane. Every hop has Euclidean length $5$, so the first hop has $12$ possible destinations. Determine the minimum number of hops required to reach $(2021,2021)$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2021,
      "stage": "Putnam",
      "number": "A1",
      "label": "Putnam 2021 — A1",
      "url": "https://kskedlaya.org/putnam-archive/2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2021-a2",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Limit iteratif yang melibatkan pangkat real",
    "prompt": "For $x>0$, define $$g(x)=\\lim_{r\\to0}\\big((x+1)^{r+1}-x^{r+1}\\big)^{\\frac1r}.$$ Evaluate $\\displaystyle\\lim_{x\\to+\\infty}\\frac{g(x)}x$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2021,
      "stage": "Putnam",
      "number": "A2",
      "label": "Putnam 2021 — A2",
      "url": "https://kskedlaya.org/putnam-archive/2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2021-a5",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Jumlah perpangkatan pada sistem residu tereduksi",
    "prompt": "Determine the integers $j\\ge0$ satisfying $$\\sum_{u\\in(\\mathbb Z/2021\\mathbb Z)^\\times}u^j=0\\quad\\text{in }\\mathbb Z/2021\\mathbb Z.$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2021,
      "stage": "Putnam",
      "number": "A5",
      "label": "Putnam 2021 — A5",
      "url": "https://kskedlaya.org/putnam-archive/2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2021-b2",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Optimasi rata-rata geometri berbobot",
    "prompt": "Compute $$\\max_{\\substack{a_k\\ge0\\\\\\sum_{k\\ge1}a_k=1}}\\sum_{n=1}^{\\infty}\\frac{n}{2^n}\\left(\\prod_{k=1}^n a_k\\right)^{1/n}.$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2021,
      "stage": "Putnam",
      "number": "B2",
      "label": "Putnam 2021 — B2",
      "url": "https://kskedlaya.org/putnam-archive/2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2021-b5",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Minor utama ganjil pada perpangkatan matriks",
    "prompt": "Suppose $A\\in M_n(\\mathbb Z)$ has odd determinant on each nonempty principal submatrix. Establish that every nonempty principal minor of $A^k$ is odd for each $k\\ge1$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2021,
      "stage": "Putnam",
      "number": "B5",
      "label": "Putnam 2021 — B5",
      "url": "https://kskedlaya.org/putnam-archive/2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2019-a1",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Daerah hasil bentuk kubik pada bilangan bulat nonnegatif",
    "prompt": "Characterize the set $$\\{a^3+b^3+c^3-3abc\\mid a,b,c\\in\\mathbb Z_{\\ge0}\\}.$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2019,
      "stage": "Putnam",
      "number": "A1",
      "label": "Putnam 2019 — A1",
      "url": "https://kskedlaya.org/putnam-archive/2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2019-a3",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Batas bawah tajam rata-rata modulus akar",
    "prompt": "Consider a degree-$2019$ polynomial $P(z)=\\sum_{k=0}^{2019}b_kz^k$ with real coefficients subject to $1\\le b_0<b_1<\\cdots<b_{2019}\\le2019$. Let $z_1,\\ldots,z_{2019}$ list its complex roots with multiplicities and set $$\\mu=\\frac{|z_1|+\\cdots+|z_{2019}|}{2019}.$$ Determine the greatest real lower bound $M$ for $\\mu$ over all such choices of coefficients.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2019,
      "stage": "Putnam",
      "number": "A3",
      "label": "Putnam 2019 — A3",
      "url": "https://kskedlaya.org/putnam-archive/2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2019-a5",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Multiplisitas akar polinomial atas lapangan berhingga",
    "prompt": "Fix an odd prime $p$ and set $Q(X)=\\sum_{k=1}^{p-1}k^{(p-1)/2}X^k\\in\\mathbb F_p[X]$. Determine the multiplicity of $1$ as a root of $Q$.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2019,
      "stage": "Putnam",
      "number": "A5",
      "label": "Putnam 2019 — A5",
      "url": "https://kskedlaya.org/putnam-archive/2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2019-b2",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Asimtotik jumlah trigonometri",
    "prompt": "Evaluate $$\\lim_{n\\to\\infty}\\frac1{n^3}\\sum_{k=1}^{n-1}\\frac{\\sin((2k-1)\\pi/(2n))}{\\cos^2((k-1)\\pi/(2n))\\cos^2(k\\pi/(2n))}.$$",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2019,
      "stage": "Putnam",
      "number": "B2",
      "label": "Putnam 2019 — B2",
      "url": "https://kskedlaya.org/putnam-archive/2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "putnam-2019-b3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Nilai eigen satu setelah refleksi Householder",
    "prompt": "Let $Q$ be a real orthogonal matrix of size $n$ and $u\\in\\mathbb R^n$ a column vector satisfying $u^{\\mathsf T}u=1$. Define $$P=I_n-2uu^{\\mathsf T}.$$ Establish that $1\\notin\\sigma(Q)$ implies $1\\in\\sigma(PQ)$, where $\\sigma$ denotes the set of eigenvalues.",
    "source": {
      "kind": "competition",
      "competition": "Putnam",
      "year": 2019,
      "stage": "Putnam",
      "number": "B3",
      "label": "Putnam 2019 — B3",
      "url": "https://kskedlaya.org/putnam-archive/2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2013-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan pemotongan kertas",
    "prompt": "Alice and Carl alternate cutting a sheet of paper, initially square. On each turn, a straight cut (not necessarily parallel to the sides of the page) divides the current sheet into two pieces; discard the smaller piece by area (either one in a tie) and pass the remaining piece to the other player. The first player to receive paper of area less than $1\\,\\mathrm{cm}^2$ loses. Alice starts. Characterize, with proof, the initial sizes for which Alice can force a win.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2013 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2013-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Tiga digit terakhir kuadrat sempurna",
    "prompt": "Find all $x$ with $1\\le x\\le999$ such that the last three digits of $x^2$ are all equal to the same nonzero digit.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2013 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2013-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Permainan penentuan koefisien polinomial",
    "prompt": "Cooper and Malone alternate selecting real values for the coefficients $a,b,c$ in the polynomial below, with Malone first.\n\n$P(x)=x^3+ax^2+bx+c$\n\n A coefficient already assigned cannot be changed. After three turns, Malone wins if $P$ has a nonreal root; otherwise Cooper wins. Determine who can force a win, describe the strategy, and justify it.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2013 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2015-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Jumlah minimum dengan FPB berbeda",
    "prompt": "Three trolls share $n$ pancakes subject to these conditions:\n\n• Each receives a positive integer number of pancakes.\n\n• The greatest common divisor of the holdings of each pair of trolls exceeds $1$.\n\n• The three resulting greatest common divisors are distinct.\n\nFind the least possible $n$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2015 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2015-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang median segitiga",
    "prompt": "In triangle $ABC$, $AC=13$, $AB=20$, and the altitude from $A$ to $\\overleftrightarrow{BC}$ has length $12$. Let $M$ be the midpoint of $\\overline{BC}$. Determine every possible length of $AM$ and demonstrate that each is attainable.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2015 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2015-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "FPB koefisien polinomial binomial",
    "prompt": "Find, with proof, all positive integers $n$ with $2\\le n\\le20$ such that the greatest common divisor of the coefficients of $(x+y)^n-x^n-y^n$ is equal to exactly $3$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2015 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2015-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Optimasi waktu perjalanan dengan satu sepeda",
    "prompt": "Anastasia and Balthazar must reach a grocery store $100$ km away. Their walking speeds are $5$ and $4$ km/h, respectively. They share one bicycle which either can ride at $10$ km/h. Either person may travel in either direction, and the bicycle may be left along the route for the other to collect. Find the shortest time by which both can reach the store.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2015 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2015-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Pencacahan matriks dengan hasil kali tetap",
    "prompt": "Fill a $3\\times3$ grid with integers, allowing negative entries, so that the product along each row and each column equals $20$. One admissible grid is \n\n$\\begin{bmatrix}1&-5&-4\\\\10&-2&-1\\\\2&2&5\\end{bmatrix}$\n\nCount all admissible fillings.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2015 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2015-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Tinggi minimum limas segitiga",
    "prompt": "A triangular pyramid has apex $O$ and base $ABC$ with perimeter $84$. A cylinder of radius $4$ and height $10$ fits wholly inside it, with one circular base in the plane of $ABC$. Determine the smallest possible altitude of $O$ above that plane and show that it can be attained.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2015 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2020-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Rasionalitas selisih perpangkatan",
    "prompt": "Let $a,b\\in\\mathbb R$. Suppose $a^n-b^n\\in\\mathbb Q$ for every integer $n\\ge2$. Prove that $a=b$ or $(a,b)\\in\\mathbb Q^2$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2020 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2020-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Lingkaran yang berpotongan secara ortogonal",
    "prompt": "Let $C$ be a circle disjoint from a line $L$. Denote the nearest and farthest points of $C$ from $L$ by $A$ and $B$, respectively, and put $X=AB\\cap L$. Let $C'$ be the circle centered at $B$ through $X$. Choose $K$ at an intersection of $C'$ and the perpendicular bisector of $\\overline{AX}$. The circle centered at $X$ through $K$ meets segment $\\overline{AB}$ at $H$. Prove that for every $P\\in L$, the circle centered at $P$ through $H$ is perpendicular to $C$. Two circles are perpendicular when their tangents at each intersection point form a right angle.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2020 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "imc-2020-03",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Aproksimasi politop konveks simetris",
    "prompt": "Fix an integer $d\\ge2$. Prove that there is a constant $C(d)$ such that every origin-symmetric convex polytope $K\\subset\\mathbb R^d$ and every $0<\\varepsilon<1$ admit a convex polytope $L$ having at most $C(d)\\varepsilon^{1-d}$ vertices and satisfying $$(1-\\varepsilon)K\\subseteq L\\subseteq K.$$ Here a convex polytope with at most $m$ vertices is a convex hull of at most $m$ points with nonempty interior, $\\lambda K=\\{\\lambda x\\mid x\\in K\\}$, and origin symmetry means $(-1)K=K$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2020 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2020-05",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Karakterisasi fungsi positif melalui turunan",
    "prompt": "Find all twice continuously differentiable functions $f:\\mathbb R\\to(0,+\\infty)$ satisfying\n\n$$f''(x)f(x)\\ge2(f'(x))^2$$\n\nfor all $x\\in\\mathbb R$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 2, Nomor 5",
      "label": "IMC 2020 — Hari 2, Nomor 5",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_2_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "imc-2020-06",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Akar tunggal polinomial kubik modulo prima",
    "prompt": "Determine the primes $p$ for which $X^3-3X+1\\in\\mathbb F_p[X]$ has exactly one distinct zero in $\\mathbb F_p$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2020 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2020-07",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Konjugasi subgrup melalui indeks irisan",
    "prompt": "Suppose $H_1,H_2$ are subgroups of a group $G$ and $n\\ge2$ is an integer with $$[G:H_1]=[G:H_2]=n,\\qquad [G:H_1\\cap H_2]=n(n-1).$$ Prove that $H_1$ and $H_2$ are conjugate, meaning $g^{-1}H_1g=H_2$ for some $g\\in G$. The index $[G:H]$ counts the distinct left cosets of $H$ in $G$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2020 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2020-08",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Limit jumlah binomial logaritmik",
    "prompt": "Using natural logarithms, determine the asymptotic ratio $$\\lim_{n\\to\\infty}\\frac1{\\log\\log n}\\sum_{k=1}^n(-1)^k\\binom nk\\log k.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2020 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-1",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Jumlah sumbangan",
    "prompt": "A charity receives a donation of five dollars from each of twelve friends. Find the total amount donated. Pilihan: A. $50$ dollars; B. $55$ dollars; C. $60$ dollars; D. $65$ dollars; E. $70$ dollars",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 1",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 1 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-5",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 1,
    "title": "Luas persegi",
    "prompt": "Which expression gives the area of a square of side length $8$? Pilihan: A. $8\\times2$; B. $2\\times(8+8)$; C. $8\\times8$; D. $4\\times8$; E. $8\\times8\\times8\\times8$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 5",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 5 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-7",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 2,
    "title": "Modus tunggal",
    "prompt": "A list contains the seven numbers $3,15,8,8,9,9,n$. Its only mode is $8$. Determine $n$. Pilihan: A. $15$; B. $9$; C. $3$; D. $8$; E. $10$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 7",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 7 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-8",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Pengukuran dengan pecahan",
    "prompt": "Sam needs $2\\frac12$ cups of flour for a recipe but has only a measuring container of capacity $\\frac12$ cup. How many times must he fill the container? Pilihan: A. $3$; B. $2\\frac12$; C. $10$; D. $4\\frac12$; E. $5$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 8",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 8 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-9",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Hari dalam kalender",
    "prompt": "June contains $30$ days. In a year when June 1 is a Tuesday, what day of the week is June 30? Pilihan: A. Monday; B. Tuesday; C. Wednesday; D. Thursday; E. Friday",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 9",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 9 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-11",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Translasi titik",
    "prompt": "Point $R$ has coordinates $(2,6)$. Which of the following translations takes $R$ to $(7,0)$? Pilihan: A. right 9, down 6; B. left 5, up 6; C. right 6, down 5; D. left 6, down 5; E. right 5, down 6",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 11",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 11 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-12",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Pertemuan dua jadwal",
    "prompt": "Trains stop at Waterloo Station every $3$ minutes, and buses every $5$ minutes. A train and a bus stop there together at 6:25 a.m. When do they next stop there together? Pilihan: A. 6:28 a.m.; B. 6:30 a.m.; C. 6:33 a.m.; D. 6:40 a.m.; E. 6:55 a.m.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 12",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 12 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-13",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Frekuensi digit pada pola berulang",
    "prompt": "How many occurrences of $5$ lie in the first $50$ terms of the periodic sequence $(2,0,2,5,2,0,2,5,\\ldots)$? Pilihan: A. $10$; B. $11$; C. $12$; D. $13$; E. $25$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 13",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 13 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-14",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Penyebut pecahan",
    "prompt": "Find the number that fills the box in $\\dfrac{28}{32}+\\dfrac{1}{\\square}=1$. Pilihan: A. $24$; B. $-3$; C. $7$; D. $16$; E. $8$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 14",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 14 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-15",
    "level": "SMP",
    "topic": "Peluang",
    "difficulty": 2,
    "title": "Jumlah dadu dengan peluang terkecil",
    "prompt": "For two independent fair six-sided dice numbered $1$ through $6$, which listed total has the smallest probability? Pilihan: A. $7$; B. $8$; C. $9$; D. $10$; E. $11$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 15",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 15 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-16",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Maksimum operasi bilangan dua digit",
    "prompt": "Form three two-digit integers $a,b,c$ using each digit of $\\{7,1,3,6,8,2\\}$ exactly once. Maximize $a+b-c$. Pilihan: A. $139$; B. $145$; C. $147$; D. $149$; E. $138$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 16",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 16 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-17",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Perubahan persentase lemparan koin",
    "prompt": "Savanah tosses a fair coin, obtaining tails on $50\\%$ of the tosses. She tosses it once more and obtains tails, so that $60\\%$ of all her tosses are now tails. How many tosses did she make altogether? Pilihan: A. $3$; B. $9$; C. $8$; D. $5$; E. $10$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 17",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 17 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-18",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Sudut yang bukan sudut segi empat",
    "prompt": "Four of the angles in the list $62^\\circ,85^\\circ,99^\\circ,108^\\circ,114^\\circ$ belong to one quadrilateral. Identify the excluded angle. Pilihan: A. $62^\\circ$; B. $85^\\circ$; C. $99^\\circ$; D. $108^\\circ$; E. $114^\\circ$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 18",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 18 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-19",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Klasifikasi bilangan",
    "prompt": "Ten students receive distinct integer labels from $10$ through $19$. Each student marks all the applicable properties of their label: odd, even, prime, composite, perfect square. How many students mark precisely two properties? Pilihan: A. $10$; B. $9$; C. $8$; D. $7$; E. $6$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 19",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 19 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-21",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Rata-rata luas lingkaran",
    "prompt": "The circles of radii $1$, $5$, and $x$ centimetres have mean area $30\\pi\\,\\mathrm{cm}^2$. Determine $x>0$. Pilihan: A. $64$; B. $5$; C. $24$; D. $8$; E. $2$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 21",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 21 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-22",
    "level": "SMP",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Peluang warna tidak terpakai",
    "prompt": "Independently assign to each of three doors one of three equally probable colours: black, white, gold. Calculate the probability that fewer than three colours occur. Pilihan: A. $\\frac79$; B. $\\frac59$; C. $\\frac{20}{27}$; D. $\\frac29$; E. $\\frac23$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 22",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 22 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-7-23",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kelipatan delapan belas dengan awalan tetap",
    "prompt": "Let $a,b,c$ be decimal digits and $N=\\overline{111abc}$. How many values of $N$ are divisible by $18$? Pilihan: A. $50$; B. $55$; C. $56$; D. $110$; E. $112$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 7",
      "number": "Nomor 23",
      "label": "CEMC Waterloo 2025 — Gauss Grade 7, 23 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-euclid-1",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Persamaan rasional dan bentuk akar",
    "prompt": "(a) Determine the integer $t$ satisfying $\\dfrac{2t}{3}+\\dfrac{3t}{2}=26$. (b) Determine the integer $x$ satisfying $\\dfrac{3+x}{4}=\\dfrac{6+x}{8}$. (c) Given $y>0$ and $$\\sqrt{3^2+4^2+12^2}=\\sqrt{3^2+4^2}+\\sqrt{y^2},$$ find $y$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Euclid",
      "number": "Nomor 1",
      "label": "CEMC Waterloo 2026 — Euclid, 1 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026EuclidContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-euclid-2",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Digit bilangan dan sistem persamaan",
    "prompt": "(a) The digits of $2026$ sum to $2+0+2+6=10$. Find the least integer $n>2026$ having the same digit sum. (b) The digits of $313$ have product $3\\cdot1\\cdot3=9$. Count integers from $100$ through $999$ whose digit product is $9$. (c) The sum of $x$, $3x$ and $4y$ is $48$, while the mean of $x$ and $y$ is $3x$. Find $(x,y)$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Euclid",
      "number": "Nomor 2",
      "label": "CEMC Waterloo 2026 — Euclid, 2 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026EuclidContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-euclid-3",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Kubik sempurna, eksponen, dan parabola",
    "prompt": "(a) Minimize the positive integer $n$ for which $\\frac{9\\cdot8\\cdot7\\cdot6\\cdot5\\cdot4\\cdot3}{n}$ is an integer cube. (b) Find $(a,b)$ satisfying $3^{a+b}=27$ and $a-b=-5$. (c) A parabola $y=-x^2+7x+c$ has x-intercepts $P=(10,0)$ and $Q$ and y-intercept $R$. Compute the area of $\\triangle PQR$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Euclid",
      "number": "Nomor 3",
      "label": "CEMC Waterloo 2026 — Euclid, 3 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026EuclidContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-euclid-7",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Proporsi dan iterasi logaritma",
    "prompt": "(a) A garden contains only roses and carnations, each either yellow or white. Of the yellow flowers, half are roses; of the roses, a quarter are yellow; of all flowers, a quarter are white carnations. Find the fraction of all flowers that are yellow roses. (b) For every $x>0$, define $$f(x)=\\begin{cases}0,&0<x\\le1,\\\\1+f(\\log_2 x),&x>1.\\end{cases}$$ Count positive integers $n$ satisfying $f(n)=4$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Euclid",
      "number": "Nomor 7",
      "label": "CEMC Waterloo 2026 — Euclid, 7 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026EuclidContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-euclid-9",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Segitiga sama kaki dengan luas dan keliling tetap",
    "prompt": "(a) For an isosceles triangle $XY=XZ$, base $YZ=b$, area $40$, and perimeter $32$, construct a cubic integer-coefficient polynomial having $b$ as a root. (b) Establish that for prescribed positive area $A$ and perimeter $P$, at most two pairwise noncongruent isosceles triangles have those measurements. (c) Find positive integers $A,P$ admitting two such noncongruent triangles, all of whose side lengths are positive integers below $300$, exactly one of the two bases being divisible by $7$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Euclid",
      "number": "Nomor 9",
      "label": "CEMC Waterloo 2026 — Euclid, 9 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026EuclidContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-euclid-10",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permutasi dengan tepat satu puncak internal",
    "prompt": "For $n\\ge5$, a permutation $(a_1,\\ldots,a_n)$ of $1,\\ldots,n$ has an internal peak at $t$ if $2\\le t<n$ and $a_{t-1}<a_t>a_{t+1}$. For instance, $(2,3,7,1,5,4,6,8)$ has internal peaks only at positions $3$ and $5$. (a) Count permutations of $1,2,3,4,5$ having their only internal peak at position $3$. (b) For $n\\ge5$, find a closed-form count of permutations with sole internal peak at position $2$. (c) For $n\\ge5$, find a closed-form count of permutations with sole internal peak at position $3$. $$\\sum_{k=0}^{r}k2^k=(r-1)2^{r+1}+2\\qquad(r\\in\\mathbb Z_{>0}).$$ The identity may be useful. The right-hand expression is a closed form, while an unevaluated sum is not.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Euclid",
      "number": "Nomor 10",
      "label": "CEMC Waterloo 2026 — Euclid, 10 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026EuclidContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-a-a1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Representasi fungsi sebagai maksimum polinomial",
    "prompt": "Call a map $f:[0,\\infty)\\to[0,\\infty)$ max-poly when there are finitely many real polynomials $p_1,\\ldots,p_n$ such that $p_i(x)\\ge0$ for every $x\\ge0$ and $1\\le i\\le n$, and $$f(x)=\\max\\{p_1(x),\\ldots,p_n(x)\\}\\qquad(x\\ge0).$$ Decide whether $f(x)=\\min\\{x,x^2\\}$ is max-poly.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper A",
      "number": "Nomor A1",
      "label": "SMMC 2025 — Paper A, A1",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_a.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-a-a2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Rata-rata banyak vektor eigen",
    "prompt": "Fix a prime $p$. For a square matrix $M$ over $\\mathbb Z/p\\mathbb Z$, call a nonzero vector $v$ over that field an eigenvector if $Mv=\\lambda v$ for some $\\lambda\\in\\mathbb Z/p\\mathbb Z$. For each positive integer $n$, find the mean number of eigenvectors among all $n\\times n$ matrices over $\\mathbb Z/p\\mathbb Z$, the integers modulo $p$.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper A",
      "number": "Nomor A2",
      "label": "SMMC 2025 — Paper A, A2",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_a.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-a-a3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Akar polinomial pada perpangkatan matriks",
    "prompt": "Set $$M(t)=\\begin{pmatrix}t+1&t\\\\1&1\\end{pmatrix},\\qquad a(t)=(M(t)^{2025})_{11},\\quad b(t)=(M(t)^{2025})_{12}.$$ Establish that each polynomial has $2025$ distinct real zeros and that their increasing lists of zeros interlace in the order $\\alpha_1<\\beta_1<\\cdots<\\alpha_{2025}<\\beta_{2025}$.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper A",
      "number": "Nomor A3",
      "label": "SMMC 2025 — Paper A, A3",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_a.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-a-a4",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Subruang fungsi mulus yang invarian terhadap dilatasi",
    "prompt": "Let $V$ be a finite-dimensional real linear subspace of the space of $C^\\infty$ functions $\\mathbb R\\to\\mathbb R$. Suppose the function $x\\mapsto g(2x)$ belongs to $V$ whenever $g\\in V$. Prove that every member of $V$ is polynomial. Here $C^\\infty$ means that derivatives of every positive integer order exist everywhere.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper A",
      "number": "Nomor A4",
      "label": "SMMC 2025 — Paper A, A4",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_a.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-b-b1",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Eksistensi fungsi dengan syarat keterbagian",
    "prompt": "For positive integers $m,n$, call $f:\\{1,\\ldots,n\\}\\to\\{m+1,\\ldots,m+n\\}$ beaut if $a\\mid f(a)$ for each $a$ in its domain and $f(a)\\ne f(b)$ whenever $a,b$ are distinct domain elements with $\\gcd(a,b)\\ne1$. Determine the positive integers $n$ admitting a beaut function for every positive integer $m$.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper B",
      "number": "Nomor B1",
      "label": "SMMC 2025 — Paper B, B1",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_b.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-b-b2",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Dekomposisi Minkowski segi empat",
    "prompt": "For the interior $W$ of a convex quadrilateral in $\\mathbb R^2$ without parallel sides, establish the existence of open triangle interiors $S,T$ satisfying $W=S+T=\\{s+t\\mid s\\in S,\\ t\\in T\\}$.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper B",
      "number": "Nomor B2",
      "label": "SMMC 2025 — Paper B, B2",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_b.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-b-b3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Determinan matriks berpangkat kompleks",
    "prompt": "Fix $n\\ge1$, put $\\omega=e^{2\\pi i/n}$, and choose pairwise distinct $z_1,\\ldots,z_n\\in\\mathbb C$. Prove the implication $$\\det\\big[(z_j-\\omega^k)^n\\big]_{j,k=1}^n=0\\ \\Longrightarrow\\ \\prod_{j=1}^nz_j=1.$$",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper B",
      "number": "Nomor B3",
      "label": "SMMC 2025 — Paper B, B3",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_b.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "smmc-2025-paper-b-b4",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan Diophantine jumlah pangkat",
    "prompt": "The contest identifies the second subquestion as open. Seven points are available for the first subquestion, with up to seven more for progress on the second. (a) Determine the integer triples $(x,y,q)$ satisfying $$x^3+x^2+x+1=y^q,$$ where $q\\ge3$ is odd. (b) Determine the integer quadruples $(x,y,n,q)$ satisfying $$x^n+x^{n-1}+\\cdots+x+1=y^q,$$ where $n,q\\ge2$.",
    "source": {
      "kind": "competition",
      "competition": "SMMC",
      "year": 2025,
      "stage": "Paper B",
      "number": "Nomor B4",
      "label": "SMMC 2025 — Paper B, B4",
      "url": "https://www.simonmarais.org/uploads/8/2/3/5/82358688/smmc2025_paper_b.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2025-apmo-2",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Lintasan kisi dan fungsi lantai",
    "prompt": "Take positive real parameters $\\alpha,\\beta$. Emerald begins at the origin $(0,0)$ of the coordinate plane. At each minute she moves one unit upwards or rightwards, staying within $|x-y|<2025$. At each visited point $(x,y)$, she records $\\lfloor x\\alpha+y\\beta\\rfloor$. Classify the pairs $(\\alpha,\\beta)$ permitting a journey in which every nonnegative integer is recorded exactly once.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 2",
      "label": "APMO 2025 — APMO, 2",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2025-apmo-3",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Keterbagian polinomial pada barisan",
    "prompt": "For $P\\in\\mathbb Z[x]$ of positive degree with $P(0)\\ne0$, prove that an infinite sequence $a_1,a_2,\\ldots$ of integers satisfying $P(i-j)\\mid a_i-a_j$ for all distinct $i,j\\ge1$ is constant: $a_n=c$ for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 3",
      "label": "APMO 2025 — APMO, 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2025-apmo-5",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan terbatas atau linear",
    "prompt": "Suppose $(a_n)_{n\\ge1}$ is an infinite sequence of positive integers for which $$100!(a_m+a_{m+1}+\\cdots+a_n)$$\n\nis a multiple of $a_{n-m+1}a_{n+m}$ for all positive integers $m,n$ with $m\\le n$. Prove that the sequence is bounded or linear. Observation: Bounded here means that a constant $N$ exists with $a_n<N$ at all positive indices, and linear means $a_n=na_1$ at every such index.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 5",
      "label": "APMO 2025 — APMO, 5",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2026-apmo-1",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Persamaan faktorial dan perpangkatan",
    "prompt": "Find all quadruples of positive integers $(a,p,m,o)$ with $o\\ge2$ such that\n\n$$a!+p!=m^o+26.$$",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 1",
      "label": "APMO 2026 — APMO, 1",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "apmo-2026-apmo-2",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Jumlah irisan himpunan bagian siklik",
    "prompt": "For $n\\ge2$, list the distinct subsets of an $n$-element set cyclically as $(A_j)_{j=1}^{2^n}$, setting $A_{2^n+1}=A_1$. Establish $$|A_1\\cap A_2|+|A_2\\cap A_3|+\\cdots+|A_{2^n-1}\\cap A_{2^n}|+|A_{2^n}\\cap A_1|\\ge2^{n-2}.$$",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 2",
      "label": "APMO 2026 — APMO, 2",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2026-apmo-3",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Fungsi yang mempertahankan urutan jarak",
    "prompt": "Classify $f:\\mathbb R_+\\to\\mathbb R$ for which $$|x-y|<|y-z|\\quad\\text{if and only if}\\quad |f(x)-f(y)|<|f(y)-f(z)|$$ for every positive real triple $(x,y,z)$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 3",
      "label": "APMO 2026 — APMO, 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "osnk-sma-2024-dasar-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Kesamaan jumlah dan hasil kali",
    "prompt": "Pada sebuah papan terdapat $90$ bilangan asli, yaitu $88$ buah bilangan $1$ serta dua bilangan $a$ dan $b$. Jumlah dan hasil kali seluruh bilangan pada papan bernilai sama, yaitu $A$. Tentukan nilai $A$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2024,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 3",
      "label": "OSN 2024 — OSN-K Kemampuan Dasar, Nomor 3",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2024-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2024-dasar-04",
    "level": "SMA",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Rasio jumlah deret aritmetika",
    "prompt": "Diketahui bilangan bulat positif $a$ dan $b$ yang relatif prima memenuhi $$\\frac{1+2+3+\\cdots+104}{3+4+5+\\cdots+106}=\\frac ab.$$ Tentukan nilai $a+b$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2024,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 4",
      "label": "OSN 2024 — OSN-K Kemampuan Dasar, Nomor 4",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2024-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2024-dasar-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Bilangan empat digit dengan jumlah digit delapan",
    "prompt": "Suatu bilangan empat digit disebut bilangan OSK jika digit pertamanya bukan nol dan jumlah seluruh digitnya adalah $8$. Contohnya adalah $2024$. Tentukan banyaknya bilangan OSK.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2024,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 5",
      "label": "OSN 2024 — OSN-K Kemampuan Dasar, Nomor 5",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2024-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2024-dasar-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Suku pertama barisan geometri",
    "prompt": "Misalkan $u_1,u_2,u_3,\\ldots$ merupakan barisan geometri dengan $u_1>u_2$. Diketahui $u_2=8$ dan $$u_5+u_7=\\frac{17u_6}{4}.$$ Tentukan nilai $u_1$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2024,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 6",
      "label": "OSN 2024 — OSN-K Kemampuan Dasar, Nomor 6",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2024-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2024-dasar-08",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Keterbagian jumlah bilangan dan kebalikan digit",
    "prompt": "Tentukan banyaknya bilangan dua digit $\\overline{ab}$ dengan kedua digitnya tak nol, sedemikian sehingga penjumlahan $\\overline{ab}+\\overline{ba}$ habis dibagi $66$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2024,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 8",
      "label": "OSN 2024 — OSN-K Kemampuan Dasar, Nomor 8",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2024-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2024-dasar-09",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kelipatan minimum dengan 28 pembagi",
    "prompt": "Misalkan $k$ merupakan kelipatan positif terkecil dari $2024$ yang memiliki tepat $28$ faktor positif. Tentukan sisa pembagian $k$ oleh $100$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2024,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 9",
      "label": "OSN 2024 — OSN-K Kemampuan Dasar, Nomor 9",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2024-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2025-dasar-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 1,
    "title": "Keterbagian faktorial",
    "prompt": "Tentukan bilangan bulat positif terkecil $n$ sedemikian sehingga $1430$ membagi $n!$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 2",
      "label": "OSN 2025 — OSN-K Kemampuan Dasar, Nomor 2",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2025-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2025-dasar-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Pencacahan himpunan bagian",
    "prompt": "Tentukan banyak himpunan bagian dari $\\{1,2,3,4,5,6,7\\}$ yang memuat seluruh anggota $\\{1,2,3,4,5\\}$ atau seluruh anggota $\\{4,5,6\\}$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 4",
      "label": "OSN 2025 — OSN-K Kemampuan Dasar, Nomor 4",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2025-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2025-dasar-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Anggota wajib pada himpunan tanpa pasangan berjumlah tetap",
    "prompt": "Afif memilih sembilan bilangan bulat positif berbeda, semuanya kurang dari $18$, sedemikian sehingga tidak ada dua bilangan terpilih yang berjumlah $18$. Bilangan positif manakah yang pasti dipilih Afif?",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 5",
      "label": "OSN 2025 — OSN-K Kemampuan Dasar, Nomor 5",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2025-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2025-dasar-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Koefisien binomial kelipatan 81",
    "prompt": "Diketahui koefisien suku $x^2$ pada penjabaran $(x+3)^n$ adalah $81k$, dengan $k$ bilangan asli. Tentukan nilai terkecil $k$ yang memenuhi kondisi tersebut.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 6",
      "label": "OSN 2025 — OSN-K Kemampuan Dasar, Nomor 6",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2025-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2025-dasar-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Nilai polinomial pada argumen eksponensial",
    "prompt": "Suatu polinomial $P$ memenuhi $P(5^b+1)=5^{5b}+4$ untuk seluruh $b\\in\\mathbb R$. Tentukan $P(3)$.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 9",
      "label": "OSN 2025 — OSN-K Kemampuan Dasar, Nomor 9",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2025-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osnk-sma-2025-dasar-10",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Banyak parameter persamaan tanpa akar real",
    "prompt": "Tentukan banyaknya bilangan bulat $m$ yang mengakibatkan persamaan kuadrat $$x^2+mx+37=m$$ tidak memiliki akar real.",
    "source": {
      "kind": "competition",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K Kemampuan Dasar",
      "number": "Nomor 10",
      "label": "OSN 2025 — OSN-K Kemampuan Dasar, Nomor 10",
      "url": "https://mathcyber1997.com/osn-k-matematika-sma-2025-dasar/",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "bmo-uk-2025-r1-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Pangkat prima sebagai jumlah rantai keterbagian",
    "prompt": "Call a sequence of three distinct positive integers $(a,b,c)$ a ramp when $a\\mid b$ and $b\\mid c$. For every prime $p$ and positive integer $n$, decide, with proof, whether $p^n$ is the sum of some ramp.",
    "source": {
      "kind": "competition",
      "competition": "BMO UK",
      "year": 2025,
      "stage": "Round 1",
      "number": "Nomor 1",
      "label": "BMO UK 2025 — Round 1, Nomor 1",
      "url": "https://bmos.ukmt.org.uk/home/bmo1-2026.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "bmo-uk-2025-r1-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Sistem persamaan kuadrat siklik",
    "prompt": "Determine the real solution set of $$x^2+2yz=4,\\quad y^2+2zx=4,\\quad z^2+2xy=1.$$",
    "source": {
      "kind": "competition",
      "competition": "BMO UK",
      "year": 2025,
      "stage": "Round 1",
      "number": "Nomor 2",
      "label": "BMO UK 2025 — Round 1, Nomor 2",
      "url": "https://bmos.ukmt.org.uk/home/bmo1-2026.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "bmo-uk-2025-r1-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Barisan rekursif dengan pencacahan suku satu",
    "prompt": "George constructs a positive integer sequence beginning with $t_1=1$. For $n\\ge1$, halve $t_n$ if it is even; if it is odd and exceeds $1$, divide it by $3$ and round to the nearest integer; if $t_n=1$, set $t_{n+1}=2025k$, where $k$ counts the occurrences of $1$ among the first $n$ terms. Does every positive integer occur in this sequence?",
    "source": {
      "kind": "competition",
      "competition": "BMO UK",
      "year": 2025,
      "stage": "Round 1",
      "number": "Nomor 5",
      "label": "BMO UK 2025 — Round 1, Nomor 5",
      "url": "https://bmos.ukmt.org.uk/home/bmo1-2026.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "egmo-2026-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Submatriks dengan jumlah ganjil",
    "prompt": "Call a $2026\\times2026$ board bordeaux when at least one unit cell is red. A rectangle consisting of cells is oddly-rectangular when its red-cell count is odd. Find the greatest positive integer $M$ such that every bordeaux board contains an oddly-rectangular region of at least $M$ unit cells. The rectangles must be aligned with the board and include their entire interiors.",
    "source": {
      "kind": "competition",
      "competition": "EGMO",
      "year": 2026,
      "stage": "Hari 1",
      "number": "Nomor 1",
      "label": "EGMO 2026 — Hari 1, Nomor 1",
      "url": "https://www.egmo.org/egmos/egmo15/paper-day1-English.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "egmo-2026-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan operasi pembulatan ke kelipatan",
    "prompt": "For a positive integer $n$, Marie starts with $1$ on a blackboard. She can repeatedly choose an integer $j$ satisfying $1\\le j\\le n$ and replace the current value $V$ by $jR\\left(\\frac Vj\\right)$. Here $R(x)$ rounds to the nearest integer, with a tie resolved upward; for example, $R(1.3)=1$ and $R(1.5)=R(1.8)=2$. (a) For each $n$, establish the existence of a positive integer $B$ which no obtainable value exceeds. (b) Let $f(n)$ denote the greatest value obtainable after finitely many moves. Prove that some positive integer $N$ satisfies $2026\\mid f(n)$ for every $n\\ge N$.",
    "source": {
      "kind": "competition",
      "competition": "EGMO",
      "year": 2026,
      "stage": "Hari 1",
      "number": "Nomor 2",
      "label": "EGMO 2026 — Hari 1, Nomor 2",
      "url": "https://www.egmo.org/egmos/egmo15/paper-day1-English.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "egmo-2026-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi kuadrat komposisi",
    "prompt": "Classify $f:\\mathbb R\\to\\mathbb R$ subject to $$f((f(x)+f(y))^2)=(x+y)f(x+y)\\qquad(x,y\\in\\mathbb R).$$",
    "source": {
      "kind": "competition",
      "competition": "EGMO",
      "year": 2026,
      "stage": "Hari 1",
      "number": "Nomor 3",
      "label": "EGMO 2026 — Hari 1, Nomor 3",
      "url": "https://www.egmo.org/egmos/egmo15/paper-day1-English.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-02",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 1,
    "title": "Persamaan linear sederhana",
    "prompt": "Which integer fills the box in $\\square-3=5$? Pilihan: A. $6$; B. $8$; C. $10$; D. $9$; E. $7$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 2",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 2 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-03",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Jarak maksimum dari nol",
    "prompt": "Which listed integer has greatest absolute value? Pilihan: A. $-10$; B. $-8$; C. $3$; D. $8$; E. $9$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 3",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 3 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-05",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Digit ribuan",
    "prompt": "Identify the thousands digit of $12635$. Pilihan: A. $1$; B. $2$; C. $6$; D. $3$; E. $5$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 5",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 5 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-07",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 1,
    "title": "Keliling persegi dengan sisi bulat",
    "prompt": "The side length of a square, measured in centimetres, is a whole number. Which of the following could be its perimeter? Pilihan: A. $26\\,\\mathrm{cm}$; B. $22\\,\\mathrm{cm}$; C. $31\\,\\mathrm{cm}$; D. $34\\,\\mathrm{cm}$; E. $32\\,\\mathrm{cm}$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 7",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 7 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-08",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Jumlah waktu berjalan",
    "prompt": "Mauricio walks on five successive days. His first walk takes $11$ minutes, and each subsequent walk takes $3$ minutes longer than the preceding one. Find his total walking time in minutes. Pilihan: A. $85$; B. $73$; C. $106$; D. $65$; E. $74$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 8",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 8 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-10",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Banyak suku barisan aritmetika",
    "prompt": "Count the terms of $(43,41,39,\\ldots,1)$. Pilihan: A. $19$; B. $20$; C. $21$; D. $22$; E. $23$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 10",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 10 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-11",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 1,
    "title": "Rata-rata hasil lompat jauh",
    "prompt": "Lana completes four long jumps with distances $1.60$, $1.65$, $1.85$, and $1.90$ metres. Find their arithmetic mean. Pilihan: A. $1.70\\,\\mathrm m$; B. $1.85\\,\\mathrm m$; C. $1.80\\,\\mathrm m$; D. $1.65\\,\\mathrm m$; E. $1.75\\,\\mathrm m$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 11",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 11 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-12",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Selisih dan jumlah usia",
    "prompt": "Riley is three years older than Elsa. Their ages total $27$ years. Determine Elsa's age. Pilihan: A. $10$; B. $11$; C. $12$; D. $13$; E. $14$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 12",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 12 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-14",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Permutasi digit dengan pengulangan",
    "prompt": "Count distinct integers exceeding $2000$ formed from precisely the digits $2,0,2,6$. Pilihan: A. $6$; B. $8$; C. $10$; D. $7$; E. $9$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 14",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 14 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-17",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Panjang potongan pita",
    "prompt": "Asha cuts a $36$-metre ribbon into pieces of equal whole-number lengths in metres, without changing its width. She must make at least one cut. How many different piece lengths are possible? Pilihan: A. $10$; B. $7$; C. $6$; D. $5$; E. $8$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 17",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 17 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-18",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Pembulatan bilangan desimal",
    "prompt": "For decimal $0.ABC$, rounding to tenths increases its value by $0.024$. Find $B+C$. Pilihan: A. $14$; B. $12$; C. $13$; D. $9$; E. $11$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 18",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 18 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-19",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kelipatan dengan jumlah digit tertentu",
    "prompt": "Emil selects an integer between $100$ and $199$, inclusive, that is divisible by $4$ and has a decimal digit sum of at least $5$. How many choices does he have? Pilihan: A. $20$; B. $19$; C. $22$; D. $23$; E. $21$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 19",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 19 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-20",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Irisan dua kelompok",
    "prompt": "An ice-cream shop sells chocolate, vanilla and twist cones, with twist containing both flavours. Of $85$ cones sold, $\\frac{11}{17}$ contain chocolate and $\\frac{10}{17}$ contain vanilla. How many are twist cones? Pilihan: A. $15$; B. $4$; C. $25$; D. $17$; E. $20$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 20",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 20 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-22",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Jumlah bilangan ganjil",
    "prompt": "A sequence starts with $s=0$ and $a=1$, recording $s$ as its first term. Repeat the following steps: add $a$ to $s$ and record the new $s$; stop if $a=9$, otherwise increase $a$ by $2$ and repeat. Find the final recorded term. Pilihan: A. $36$; B. $81$; C. $16$; D. $9$; E. $25$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 22",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 22 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-23",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Minimum jumlah berdasarkan dua rasio",
    "prompt": "Two bowls contain blueberries and raspberries, in ratios $3:7$ and $2:5$, respectively. Both types are present in each bowl. There are $89$ raspberries altogether. Find the minimum total number of blueberries. Pilihan: A. $36$; B. $38$; C. $35$; D. $37$; E. $34$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 23",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 23 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-gauss-grade-7-24",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Selisih ekstrem bilangan lima digit",
    "prompt": "Call a five-digit positive integer $\\overline{abcde}$ a Sorrol number if its digits are distinct members of $\\{1,\\ldots,9\\}$ and $5\\mid\\overline{abc}$, $3\\mid\\overline{bcd}$ and $11\\mid\\overline{cde}$. Determine the positive difference between the largest and smallest Sorrol numbers. Pilihan: A. $84978$; B. $83989$; C. $85015$; D. $84038$; E. $85968$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Gauss Grade 7",
      "number": "Nomor 24",
      "label": "CEMC Waterloo 2026 — Gauss Grade 7, Nomor 24 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026Gauss7Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-02",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Pembagian merata",
    "prompt": "Seong-hun divides $36$ pieces of dried apricot equally among his four children. How many pieces does each child get? Pilihan: A. $12$; B. $6$; C. $3$; D. $9$; E. $10$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 2",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 2 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-03",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Tanggal pada interval dua minggu",
    "prompt": "Recycling is collected once every two weeks. Its most recent collection was on May 12. Find the date of the next collection. Pilihan: A. May 19; B. May 20; C. May 25; D. May 26; E. May 27",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 3",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 3 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-04",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Waktu berakhir film",
    "prompt": "Aisha starts watching a movie at 8:45 a.m. Its duration is $2$ hours and $45$ minutes. If she does not pause the movie or take a break, when will it end? Pilihan: A. 10:30 a.m.; B. 11:15 a.m.; C. 11:30 a.m.; D. 10:50 a.m.; E. 10:45 a.m.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 4",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 4 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-05",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 1,
    "title": "Persamaan linear satu variabel",
    "prompt": "Solve $7x-3=60$. Pilihan: A. $9$; B. $7$; C. $10$; D. $6$; E. $8$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 5",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 5 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-06",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 1,
    "title": "Pencacahan pewarnaan dua bangun",
    "prompt": "A figure consists of a triangle above a square. The triangle may be red or yellow, and the square may be blue, purple or green. How many colourings of the figure are possible? Pilihan: A. $5$; B. $3$; C. $9$; D. $6$; E. $2$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 6",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 6 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-07",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 1,
    "title": "Pencerminan terhadap sumbu horizontal",
    "prompt": "Find the reflection of $(5,7)$ in the $x$-axis. Pilihan: A. $(5,-7)$; B. $(-5,-7)$; C. $(5,7)$; D. $(7,5)$; E. $(-7,-5)$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 7",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 7 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-09",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Penghapusan satu digit",
    "prompt": "Ruhab writes the digits $5,2,8,7,9$ and erases exactly one. The sum of the four remaining digits is divisible by $4$. Which digit was erased? Pilihan: A. $5$; B. $2$; C. $8$; D. $7$; E. $9$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 9",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 9 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-10",
    "level": "SMP",
    "topic": "Peluang",
    "difficulty": 2,
    "title": "Peluang terpilih kuadrat sempurna",
    "prompt": "Find the probability that a uniform integer from $\\{3,\\ldots,20\\}$ is a square. Pilihan: A. $\\frac3{20}$; B. $\\frac19$; C. $\\frac16$; D. $\\frac1{10}$; E. $\\frac29$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 10",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 10 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-12",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Jarak pada laju tetap",
    "prompt": "Leticia walks $1.5\\,\\mathrm{km}$ in $20$ minutes. How far can she walk in $4$ hours at the same speed? Pilihan: A. $18\\,\\mathrm{km}$; B. $30\\,\\mathrm{km}$; C. $22.5\\,\\mathrm{km}$; D. $15\\,\\mathrm{km}$; E. $4.5\\,\\mathrm{km}$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 12",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 12 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-13",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 2,
    "title": "Median data berfrekuensi",
    "prompt": "Find the median when each integer $k=1,\\ldots,6$ occurs exactly $k$ times. Pilihan: A. $2$; B. $3$; C. $4$; D. $5$; E. $6$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 13",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 13 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-15",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 2,
    "title": "Perubahan rata-rata usia",
    "prompt": "Three students have consecutive integer ages with mean $13$. After a fourth student joins, the mean age is $14$. Find the fourth student's age. Pilihan: A. $15$; B. $18$; C. $16$; D. $14$; E. $17$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 15",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 15 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-16",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Perbandingan jumlah wadah",
    "prompt": "At Doggy Daycare, one food bowl serves one dog, one water bowl serves two dogs, and one treat bowl serves three dogs. Every dog receives all three servings. If there are $77$ bowls altogether, determine the number of dogs. Pilihan: A. $35$; B. $77$; C. $42$; D. $11$; E. $24$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 16",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 16 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-18",
    "level": "SMP",
    "topic": "Peluang",
    "difficulty": 2,
    "title": "Hasil kali dadu paling mungkin",
    "prompt": "Select the most probable product of two independent fair six-sided dice. Pilihan: A. $4$; B. $6$; C. $9$; D. $15$; E. $8$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 18",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 18 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-19",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Banyak pasangan faktor kuadrat",
    "prompt": "Count positive integer pairs $(m,n)$ with $m^2n=2025$. Pilihan: A. $3$; B. $7$; C. $4$; D. $5$; E. $6$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 19",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 19 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2025-gauss-grade-8-23",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Kelipatan dengan empat digit akhir tetap",
    "prompt": "Find the digit sum of the least positive $n$ satisfying $2013n\\equiv2025\\pmod{10000}$. Pilihan: A. $17$; B. $13$; C. $15$; D. $14$; E. $16$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2025,
      "stage": "Gauss Grade 8",
      "number": "Nomor 23",
      "label": "CEMC Waterloo 2025 — Gauss Grade 8, Nomor 23 · © 2025 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2025/2025Gauss8Contest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-01",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Jumlah berselang-seling",
    "prompt": "Evaluate $8-7+6-5+4-3+2-1$. Pilihan: A. $4$; B. $6$; C. $5$; D. $8$; E. $3$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 1",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 1 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-02",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Bilangan terdekat dengan akar kuadrat",
    "prompt": "Which listed value minimizes the distance to $\\sqrt{37}$? Pilihan: A. $5$; B. $6$; C. $7$; D. $18$; E. $74$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 2",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 2 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-03",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 1,
    "title": "Eksponen bilangan dua",
    "prompt": "Solve $2+2+2+2=2^x$. Pilihan: A. $6$; B. $4$; C. $3$; D. $5$; E. $2$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 3",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 3 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-04",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 2,
    "title": "Median pecahan dan desimal",
    "prompt": "Find the median of $2\\frac34,2.3,2\\frac14,2.45,2\\frac9{10}$. Pilihan: A. $2\\frac34$; B. $2.45$; C. $2\\frac14$; D. $2.3$; E. $2\\frac9{10}$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 4",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 4 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-07",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 1,
    "title": "Banyak gerbong kereta",
    "prompt": "An engine of length $20$ m and $n$ cars of length $15$ m have combined length $140$ m. Find $n$. Pilihan: A. $5$; B. $8$; C. $7$; D. $6$; E. $9$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 7",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 7 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-08",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Kesamaan sisa pembagian",
    "prompt": "Choose an integer whose remainders modulo $3$ and $4$ coincide. Pilihan: A. $9$; B. $11$; C. $10$; D. $13$; E. $8$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 8",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 8 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-12",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Komposisi refleksi dan translasi",
    "prompt": "Point $P=(2,3)$ is reflected across the $x$-axis and then translated three units to the left. Find its final coordinates. Pilihan: A. $(-1,-3)$; B. $(-5,3)$; C. $(1,3)$; D. $(5,-3)$; E. $(2,-6)$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 12",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 12 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-13",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Jumlah awal buku",
    "prompt": "Max receives $b$ books. He reads one third in March and five more in April, without rereading any book. Seven books remain unread. Find $b$. Pilihan: A. $18$; B. $15$; C. $27$; D. $21$; E. $24$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 13",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 13 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-15",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Selisih biaya bahan bakar",
    "prompt": "Peter's car consumes $10.2$ litres per $100$ kilometres and Mike's hybrid car consumes $6.6$ litres per $100$ kilometres. Fuel costs $1.40$ dollars per litre. Both travel $200$ kilometres. How many dollars less does Mike pay for fuel? Pilihan: A. $3.96$ dollars; B. $5.32$ dollars; C. $7.36$ dollars; D. $8.63$ dollars; E. $10.08$ dollars",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 15",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 15 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-16",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang minimum ruas garis",
    "prompt": "Four distinct collinear points occur in order $P,Q,R,S$, with $PR=8$ and $QS=15$. Find the least possible integer length $PS$. Pilihan: A. $22$; B. $21$; C. $18$; D. $16$; E. $23$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 16",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 16 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-18",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Pergeseran jumlah barisan",
    "prompt": "Given $\\sum_{k=17}^{352}k=61992$, compute $\\sum_{k=20}^{355}k$. Pilihan: A. $61995$; B. $63003$; C. $62040$; D. $62997$; E. $63000$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 18",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 18 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-20",
    "level": "SMP",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Peluang jumlah nilai dua koin",
    "prompt": "A bag holds two quarters worth $25$ cents each, two dimes worth $10$ cents each, and two nickels worth $5$ cents each. Two coins are randomly selected without replacement. What is the probability that their combined value is at least $30$ cents? Pilihan: A. $\\frac8{15}$; B. $\\frac35$; C. $\\frac59$; D. $\\frac13$; E. $\\frac45$",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 20",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 20 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-21",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pencacahan kode tiga digit",
    "prompt": "A lock uses a three-digit combination. Each digit must belong to $\\{1,\\ldots,9\\}$, the digits must be distinct and in increasing order, and the last digit must equal the sum of the first two. How many combinations are possible?",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 21",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 21 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-22",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 3,
    "title": "Kesamaan median dan rata-rata",
    "prompt": "For five distinct integers $16,x,8,17,11$, the median equals the mean. Find the sum of all admissible $x$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 22",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 22 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "cemc-waterloo-2026-pascal-grade-9-24",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Jumlah digit pada pola berulang",
    "prompt": "The digit string $123451234551234555\\ldots$ is constructed by appending $k$ consecutive copies of the digit $5$ immediately after the $k$th copy of the block $1234$, for every $k\\ge1$. Let $S$ be the sum of its first $2026$ digits. Find the sum of the decimal digits of $S$.",
    "source": {
      "kind": "competition",
      "competition": "CEMC Waterloo",
      "year": 2026,
      "stage": "Pascal Grade 9",
      "number": "Nomor 24",
      "label": "CEMC Waterloo 2026 — Pascal Grade 9, Nomor 24 · © 2026 University of Waterloo · CC BY-NC 4.0",
      "url": "https://cemc.uwaterloo.ca/sites/default/files/documents/2026/2026PascalContest.html",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2017-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Deduksi posisi ratu pada papan catur",
    "prompt": "Quinn secretly places a queen on an empty $8\\times8$ chessboard. Alex learns only its row, and Adrian learns only its column. They are asked in turn whether they know how many moves the queen has available.\n\nAlex does not know. Adrian says that he did not know initially but knows now. Alex then says that he knows as well.\n\nDetermine the number of available moves. The queen may move to any other square in its row, column or either diagonal.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2017 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2018-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "FPB dari ekspresi bilangan prima",
    "prompt": "For distinct primes $p$ and $q$, determine the set of possible values of $$\\gcd\\left(p-1,\\frac{q^p-1}{q-1}\\right).$$ For positive integers $x,y$, the notation $\\gcd(x,y)$ means their greatest common divisor.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2018 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2021-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pertumbuhan populasi peternakan",
    "prompt": "On day 1, Georgia's farm has $c$ cows and no ostriches, where $c$ is a positive integer. Each subsequent day she adds animals without removing any, so that the new total number of animals equals half of the preceding day's total number of legs. Cows have four legs and ostriches have two. For example, the $4c$ legs on day 1 require exactly $2c$ animals on day 2.\n\nLet $P_c(n)$ count the possible population histories $(c_1,o_1),(c_2,o_2),\\ldots,(c_n,o_n)$ through day $n$, where $c_i,o_i$ are the respective populations on day $i$ and $(c_1,o_1)=(c,0)$. For example, $P_1(2)=2$, $P_1(3)=5$, and $P_2(3)=12$.\n\nDetermine all positive integers $c$ for which $P_c(2021)$ is a multiple of $3$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2021 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2022-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas gabungan persegi bertumpuk",
    "prompt": "For an integer $n\\ge2$, Thibaud the Tiger places $n$ overlapping axis-aligned squares of side length $2$ with centers equally spaced along the line $y=x$ from $(0,0)$ to $(1,1)$, including both endpoints. The illustration shows $n=4$, for which the union has area $\\frac{23}{3}$.\n\n[[FIGURE]]\n\nDetermine, with proof, the smallest $n$ for which the union has area at least $\\sqrt{63}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2022 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2023-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan pewarnaan baris dan kolom",
    "prompt": "Scarlett and Indigo alternate moves on the illustrated diamond-shaped board, with Scarlett starting. The board consists of unit squares in seven centered rows of lengths $1,3,5,7,5,3,1$. On a turn, a player chooses an unpainted square and paints every square in its row and column, even if already painted. \n\n[[FIGURE]]\n\nA player unable to move loses. Prove which player can force a win.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2023 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2023-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Deduksi bilangan melalui digit desimal",
    "prompt": "Abigail chooses an integer $A$ with $1\\le A\\le99$. Bruno is told the first digit after the decimal point of $A/11$ (zero if the quotient is integral), and Chris is told the corresponding digit of $A/99$.\n\nBruno says that he cannot identify $A$, but knows that Chris can reduce the candidates to exactly ten numbers. Chris responds that he can now reduce the candidates to $N$ numbers, each a product of two distinct primes.\n\nFind $N$ and all of Chris's remaining candidates.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2023 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2023-05",
    "level": "SMA",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Strategi optimal pelemparan dadu",
    "prompt": "Noureddine partitions 2023 fair six-sided dice into at least two nonempty piles before playing. He rolls the first pile and either keeps a single die, ending the game, or discards the entire pile and rolls the next. This process continues; if he reaches the final pile, he must select a die from it. His score is the face value of the chosen die. Describe and prove a strategy maximizing his expected score.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2023 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2025-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permainan strategi memetik apel",
    "prompt": "Menelaus and Paris alternate turns, starting with Menelaus, in an apple-picking competition. Menelaus may pick apples or discard all apples in Paris's basket. Paris may pick apples or transfer all apples from Menelaus's basket to his own, but he may use this theft action at most once.\n\nEach player's first picking action yields one apple; each later picking action yields one more than that player's previous picking action. The first player to accumulate $1225$ unspoiled apples wins.\n\nHere is an example of five rounds, where $(m,p)$ records the apples in the two baskets after each action:\n\nMenelaus picks one: $(1,0)$. Paris picks one: $(1,1)$.\nMenelaus picks two: $(3,1)$. Paris picks two: $(3,3)$.\nMenelaus discards Paris's apples: $(3,0)$. Paris picks three: $(3,3)$.\nMenelaus picks three: $(6,3)$. Paris steals Menelaus's apples: $(0,9)$.\nMenelaus discards Paris's apples: $(0,0)$. Paris picks four: $(0,4)$.\n\nDetermine which player can force a win, and prove the answer.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2025 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2013-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Penelusuran diagram",
    "prompt": "Consider the following diagram.\n\n[[FIGURE]]\n\n(a) Demonstrate a way to trace every line without lifting the pencil, using precisely nine straight segments; overlap is permitted.\n\n(b) Prove that eight or fewer such segments cannot suffice.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2013 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2013-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Syarat garis bagi sudut segitiga",
    "prompt": "Let $I$ and $X$ be distinct points of line $l_1$. Lines $l_2,l_3$ pass through $I$ with angles $\\alpha,\\beta$ indicated below. The segment $XY$ makes angle $\\gamma$ with $l_1$ and ends on $l_2$ at $Y$.\n\nDetermine necessary and sufficient conditions on $\\alpha,\\beta,\\gamma$ for a triangle having side $XY$ and angle bisectors $l_1,l_2,l_3$.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2013 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2013-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Penutupan batas kisi heksagonal",
    "prompt": "Count the tilings of the boundary of a triangular array of hexagons of side length $n$, using only $1\\times1$ and $1\\times2$ hexagon tiles. Express the count through a familiar sequence and prove the formula for every integer $n\\ge3$. The diagrams give the cases $n=3$, $n=4$, $n=5$, $n=6$.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2013 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2019-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi permainan pengkhianat",
    "prompt": "A leader starts with a ball and passes it to one of ten players, one of whom is secretly a traitor. Each player receiving the ball must pass it to another player, never to themselves or the leader.\n\nBefore play, the leader assigns each player an infinite list of recipients, possibly different for each player. On their kth reception of the ball, a player passes to recipient k on their list. No list contains its owner's name. The traitor alone may disregard the instructions. An example of the lists is shown below.\n\n[[FIGURE]]\n\nThe leader wins if every player, including the traitor, receives the ball at least once. The traitor wins if they receive it twice or if play continues indefinitely.\n\nProve that instructions guaranteeing the leader's victory exist, regardless of the traitor's identity and actions, or prove that no such instructions exist.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2019 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2020-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Lintasan sempurna pada kisi",
    "prompt": "An $n\\times n$ grid consists of islands joined by bridges between neighboring islands, as illustrated for $n=3$.\n\n[[FIGURE]]\n\nThis example contains nine islands and twelve bridges. A path begins and ends at any islands and travels along bridges; for example, traversing the top row from left to right uses two bridges. A perfect path satisfies the following conditions:\n\n• It visits each island exactly twice;\n\n• It crosses every bridge at least once; and\n\n• It never immediately reverses across the same bridge.\n\n(a) Construct a perfect path for $n=3$, or prove none exists.\n\n(b) Do the same for $n=4$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2020 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2020-03",
    "level": "SMA",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Ekspektasi banyak daerah arsiran",
    "prompt": "Choose and shade four cells uniformly at random in a $3\\times3$ square grid. A region is a connected group of shaded cells, using only horizontal and vertical adjacency. The example has two regions, of sizes three and one.\n\n[[FIGURE]]\n\nFind the expected number of regions.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2020 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2020-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Segitiga primitif khusus",
    "prompt": "A triangle with integer side lengths is primitive when their greatest common divisor is one, and special when an angle equals $120^\\circ$. The triangle with sides $3,5,7$ illustrates both properties.\n\n[[FIGURE]]\n\nProve that infinitely many primitive special triangles exist.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2020 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2020-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi pemungutan suara melingkar",
    "prompt": "The integers 1 through 10 sit clockwise around a circular table. Starting at 1, each votes for a president among the ten integers. Most votes wins, with ties settled in favor of the larger integer.\n\n[[FIGURE]]\n\nEach voter prefers itself, then successive integers clockwise; for instance, 8 prefers 8,9,10,1,2, and so forth. All are perfectly rational and know that the others are too. Prove who wins.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2020 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2026-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Susunan kubus dari tiga proyeksi",
    "prompt": "Orange unit cubes occupy cells of a $3\\times3\\times3$ cubic grid. Their front, top, and left projections are the three oriented pictures shown.\n\n[[FIGURE]]\n\nGravity imposes no constraint; cubes may float. Count the possible configurations.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2026 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2026-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Urutan panjang batang kayu optimal",
    "prompt": "Fiona stands on a tree stump in a swamp with $2n$ straight logs of distinct lengths. Starting in any direction, she repeats the following four actions $n$ times:\n\n1. Face directly away from the stump's center.\n2. Lay a log forward from her feet and walk to its far end.\n3. Turn $90^\\circ$ left.\n4. Lay another log forward and walk to its far end.\n\nFind every ordering that maximizes her final distance from the stump. For lengths $x_1<x_2<\\cdots<x_{2n}$, increasing order means $(x_1,x_2,\\ldots,x_{2n})$. A sample path for $n=2$ is shown.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2026 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2026-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis pusat dan titik kuasa lingkaran",
    "prompt": "Four distinct circles $\\omega_1,\\omega_2,\\omega_3,\\omega_4$ are pairwise tangent, with centers $O_i$. For each $i$, there is a unique point $P_i\\ne O_i$ exterior to the other three circles whose powers relative to those three circles agree.\n\nPartition the sixteen lines $\\overleftrightarrow{O_iP_j}$ into four sets $S_1,S_2,S_3,S_4$, and prove that the partition can satisfy both conditions for each $k$:\n\n(a) The lines of $S_k$ are all concurrent or all parallel.\n\n(b) Their union contains all eight points $O_1,\\ldots,O_4,P_1,\\ldots,P_4$.\n\nThe power of an exterior point $Z$ relative to a circle is the product $ZA\\cdot ZB$, where a secant through $Z$ meets the circle at $A,B$; this product is independent of the secant.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2026 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2014-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Permainan batu pada kisi",
    "prompt": "Todd and Allison alternate turns on the grid below, starting with an orange stone in the middle. Todd starts; he moves the orange stone one intersection horizontally or vertically, avoiding blue stones, and leaves a blue stone at its old position. Allison places one blue stone on an empty intersection. Todd loses upon being forced onto corner A, B, C or D; Allison loses if Todd cannot move.\n\nAllison minimizes the duration and Todd maximizes it. Assuming Todd loses, determine the final number of blue stones under optimal play.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2014 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2014-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Representasi jumlah dua kuadrat",
    "prompt": "(a) Determine every pair of positive integers $x,y$ satisfying $x^2+y^2=2014$, or establish nonexistence.\n\n(b) Determine every pair of positive integers $x,y$ satisfying $x^2+y^2=3222014$, or establish nonexistence.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2014 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2014-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Segitiga siku-siku dalam susunan persegi",
    "prompt": "Classify right triangles with positive integer leg lengths for which, in the illustrated arrangement of four copies, the incenters all lie on extensions of the inner square's sides. The incenter is the center of the inscribed circle.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2014 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2014-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Iterasi daftar frekuensi bilangan",
    "prompt": "Joel starts with an ordered list of nonnegative integers. Replace it by the frequencies of $0,1,2,\\ldots$ up to its largest entry, including zero frequencies. Repeat indefinitely. For example,\n\n$$(0,0,0,2)\\longrightarrow(3,0,1)\\longrightarrow(1,1,0,1)\\longrightarrow(1,3)\\longrightarrow\\cdots$$\n\nand\n\n$$(0,0)\\longrightarrow(2)\\longrightarrow(0,0,1)\\longrightarrow(2,1)\\longrightarrow\\cdots.$$\n\nDetermine every two-entry list $(m,n)$ that can recur infinitely often for some starting list.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2014 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2014-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Sistem persamaan bilangan real positif",
    "prompt": "Find all positive real numbers $x$, $y$, and $z$ that satisfy both of the following equations.\n\n$$xyz=1$$\n\n$$x^2+y^2+z^2=4x\\sqrt{yz}-2yz.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2014 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2014-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Jumlah lintasan pada kisi segitiga",
    "prompt": "Arrange $n$ rows of $2n$ equilateral triangles into a diamond, with southwest corner $A$ and northeast corner $B$. The drawing illustrates $n=3$, four permissible step directions, and one path.\n\nA path goes from $A$ to $B$ by permitted adjacent steps, using no segment twice. Prove that the number of paths is an integer square for every positive integer $n$.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2014 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2024-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang sisi segitiga dengan keliling satu",
    "prompt": "A triangle has side lengths $a$, $b$, and $c$ satisfying the following three properties:\n\n• $a\\ge b\\ge c$;\n\n• $a^2-ab+b^2=c^2$;\n\n• $a+b+c=1$.\n\nFind all possible values of $(a,b,c).$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2024 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2024-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Luas selubung konveks persegi satuan",
    "prompt": "Place at least one unit square with integer-coordinate vertices in the plane. Let $P$ be their convex hull. In the example, four dark squares and the light region together form $P$.\n\n[[FIGURE]]\n\nWhich positive integers $n$ can occur when the area of $P$ is $n/2$? You need not establish that every such area is a half-integer.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2024 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2024-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Digit awal dan akhir pangkat dua",
    "prompt": "Show that infinitely many powers of 2 begin with 20 and end with 24.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2024 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "umo-2024-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Sistem persamaan fungsional barisan kompleks",
    "prompt": "Classify the complex sequences $x_1,x_2,\\ldots$ and $y_1,y_2,\\ldots$ satisfying, for every pair of positive integers $m,n$, $\\begin{aligned}x_{m+n}&=y_my_n,\\\\ y_{mn}&=x_m+x_n.\\end{aligned}$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2024 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; partial corrections applied; exact wording replacement pending."
    }
  },
  {
    "id": "umo-2024-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi turnamen batu kertas gunting",
    "prompt": "A red team of 27 and a blue team of 2 play 1000 rock-paper-scissors rounds, one representative each. A win earns one team point; after every round each representative may stay or choose a teammate to play next.\n\nBeforehand, each team fixes its starter, every player's move, and that player's successor for each of the opponent's three moves.\n\nExample for three red players: Alice starts. Alice plays Rock, switching to Bob against Rock and Charlie otherwise. Bob plays Scissors, then switches to Alice. Charlie plays Rock and selects Alice against Rock, Bob against Paper, or Charlie against Scissors.\n\nCan Red guarantee victory against every prearranged Blue strategy? Moves are simultaneous; equal moves tie; Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2024 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2024-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Relasi rekurensi penutupan persegi panjang",
    "prompt": "Type A is an equilateral triangle of side $1$; Type B has sides $1,1,\\sqrt3$. With unlimited copies of both, let $x_n$ count the tilings of an $n\\times\\sqrt3$ rectangle, where $n$ is a positive integer. The drawing includes a tiling for $n=4$.\n\n[[FIGURE]]\n\nFind a linear recurrence for $x_n$, meaning a formula expressing a term as a linear combination of finitely many preceding terms, for example $a_n=3a_{n-1}-4a_{n-2}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2024 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "apmo-2024-apmo-1",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Kolinearitas pada trapesium",
    "prompt": "In an acute triangle $ABC$, choose $D\\in AB$ and $E\\in AC$ with $DE\\parallel BC$. An interior point $X$ of $BCED$ defines $P=DX\\cap BC$ and $Q=EX\\cap BC$ along the rays $DX,EX$, with $P,Q$ between $B,C$. If the circles through $B,Q,X$ and $C,P,X$ meet again at $Y\\ne X$, establish collinearity of $A,X,Y$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 1",
      "label": "APMO 2024 — Nomor 1",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2024-apmo-2",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Keterjangkauan langkah kuda",
    "prompt": "A piece starts at $(1,1)$ on the integer grid $\\{1,\\ldots,100\\}^2$. Fix an integer $51\\le k\\le99$. A $k$-knight moves from $(a,b)$ to $(c,d)$ when $(|a-c|,|b-d|)$ equals $(1,k)$ or $(k,1)$. A sequence of moves is $(x_0,y_0)=(1,1),(x_1,y_1),\\ldots,(x_n,y_n)$, with all coordinates in $\\{1,\\ldots,100\\}$ and successive cells connected by legal moves. Determine, as a function of $k$, the number $L(k)$ of cells reachable by a finite sequence of moves.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 2",
      "label": "APMO 2024 — Nomor 2",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2024-apmo-4",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permutasi koefisien binomial ganjil",
    "prompt": "For each positive integer $t$, establish existence and uniqueness of a permutation $(a_0,\\ldots,a_{t-1})$ of $\\{0,\\ldots,t-1\\}$ for which, for every $0\\le i\\le t-1$, $\\binom{t+i}{2a_i}$ is odd and $2a_i\\ne t+i$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 4",
      "label": "APMO 2024 — Nomor 4",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2024-apmo-5",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kolinearitas pada segiempat siklik",
    "prompt": "A cyclic quadrilateral $ABCD$ has a transversal $\\ell$ meeting the interiors of $BC,AD$ at $R,S$ and the rays $DC,BA$ beyond $C,A$ at $Q,P$. Define $N\\ne Q$ by intersecting the circumcircles of $QCR,QDS$, and $M\\ne P$ by intersecting those of $PAS,PBR$. With $X=MP\\cap NQ$, $K=AB\\cap CD$, $L=BC\\cap AD$, show $X$ lies on line $KL$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 5",
      "label": "APMO 2024 — Nomor 5",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2025-apmo-1",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Luas segiempat dan lingkaran luar",
    "prompt": "An acute triangle $ABC$ has circumcircle $\\Gamma$ and altitude $AA_1$ to $BC$. Project $A_1$ orthogonally onto $AB,AC$ to obtain $B_1,C_1$. Suppose $AB_1PC_1$ is convex and its area equals that of $ABC$. Can $P$ be strictly inside $\\Gamma$? Justify the conclusion.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 1",
      "label": "APMO 2025 — Nomor 1",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2025-apmo-4",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Dinamika ayam pada susunan melingkar",
    "prompt": "Arrange $n\\ge3$ binary-labelled cells in a circle. A rooster repeatedly performs the following operation:\n\n• On a cell labelled $0$, change it to $1$ and advance one cell counterclockwise.\n\n• On a cell labelled $1$, change it to $0$ and advance two cells counterclockwise.\n\nShow that eventually, from its current cell $C$, exactly three revolutions bring it back to $C$ with every label restored to the state at the beginning of those revolutions.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 4",
      "label": "APMO 2025 — Nomor 4",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2026-apmo-4",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis tegak lurus pada segiempat singgung",
    "prompt": "Let $ABCD$ admit an incircle $\\omega$ with centre $I$. Write $E=AC\\cap BD$ and let $J$ be the incentre of $ABD$. Extend ray $EJ$ to meet $\\omega$ at $P$. Establish $PI\\perp BD$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 4",
      "label": "APMO 2026 — Nomor 4",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "apmo-2026-apmo-5",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pola penguncian pintu pada kisi",
    "prompt": "For a positive integer $n$, arrange $n(n+1)$ rooms in a $(n+1)\\times n$ grid, with a door joining each pair of adjacent rooms. Count the subsets of doors that can be locked such that two rooms $S$ and $G$ satisfy:\n\n(i) $S$ is in the first row and $G$ is in the $(n+1)$-th row.\n\n(ii) There is a path from $S$ to $G$ using only unlocked doors.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 5",
      "label": "APMO 2026 — Nomor 5",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "2026-11-25: official PDF compared; exact wording replacement pending."
    }
  },
  {
    "id": "iymc-2019-qr-c",
    "level": "SMA",
    "topic": "Trigonometri",
    "difficulty": 3,
    "title": "Persamaan trigonometri",
    "prompt": "Give at least two values of $x$ satisfying $$\\sin\\left(x+\\frac{\\pi^3+2\\sqrt{\\pi^6}}{\\pi^2+\\pi^2}+\\pi^{\\pi^0}\\right)=\\cos\\left(x+\\frac{(-1)^{16}}2-\\frac{\\log_2(\\sqrt8)}3\\right).$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2019,
      "stage": "Qualification Round",
      "number": "Problem C",
      "label": "IYMC 2019 — Qualification Round, Problem C",
      "url": "https://iymc.info/docs/problems/2019/IYMC_Qualification_Round_2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2019-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Luas persegi dalam lingkaran",
    "prompt": "The illustrated circle has area $A_1=1\\,\\mathrm{m}^2$. Compute the area $A_2$ of the inscribed square.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2019,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2019 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/problems/2019/IYMC_Qualification_Round_2019.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2020-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas daerah abu-abu",
    "prompt": "In the figure, a white square of area $A$ lies at the center of the gray rectangle. The rectangle's width is twice the square's width $a$. Determine the area of the gray region excluding the white square.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2020,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2020 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/problems/2020/IYMC_Qualification_Round_2020.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2021-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang sisi segitiga siku-siku",
    "prompt": "A line parallel to side $z$ intersects the right triangle in the diagram and forms angle $\\alpha$. Given the lengths $x$ and $y$ of the indicated lower and upper segments and the angle $\\alpha$, obtain a formula for $z$.",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2021,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2021 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2021.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2023-qr-a",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Akar fungsi eksponensial",
    "prompt": "Determine the roots of $$f(x)=\\left(\\pi^x-\\frac1\\pi\\right)\\cdot x^\\pi\\cdot\\left(\\frac1{\\pi^2}-\\pi^x\\right),\\qquad x\\in\\mathbb R.$$",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2023,
      "stage": "Qualification Round",
      "number": "Problem A",
      "label": "IYMC 2023 — Qualification Round, Problem A",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2023.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "iymc-2024-qr-e",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas bagian persegi yang tidak beririsan",
    "prompt": "The figure depicts two squares of side length $a$. One is rotated through $45^\\circ$ and positioned at the center of the other as shown. Calculate the area of the rotated square outside the unrotated square (gray region).",
    "source": {
      "kind": "competition",
      "competition": "IYMC",
      "year": 2024,
      "stage": "Qualification Round",
      "number": "Problem E",
      "label": "IYMC 2024 — Qualification Round, Problem E",
      "url": "https://iymc.info/docs/IYMC_Qualification_Round_2024.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2022-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Operasi pemindahan rantai koin",
    "prompt": "Marianne has $n$ aluminium coins (A) and $n$ bronze coins (B) from the Bank of Oslo, in arbitrary linear order. A chain is a contiguous run of coins of one type. Fix $1\\le k\\le2n$. Repeatedly move the maximal chain containing coin number $k$ (counted from the left) to the front.\n\nFor $n=k=4$, one example is\n$$AAB\\underline{B}BABA\\to BBB\\underline{A}AABA\\to AAA\\underline{B}BBBA\\to BBB\\underline{B}AAAA\\to BBB\\underline{B}AAAA\\to\\cdots.$$\n\nClassify $(n,k)$ for which every initial ordering eventually has its first $n$ coins of a single type.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2022 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2022-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Susunan prima pada lingkaran",
    "prompt": "Fix a positive integer $k$ and a finite set $S$ of odd primes. Prove uniqueness, modulo rotations and reflections, of any circular ordering in which each neighboring product equals $x^2+x+k$ for some positive integer $x$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2022 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2022-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Empat titik konsiklik",
    "prompt": "In a convex pentagon $ABCDE$, suppose $BC=DE$. An interior point $T$ satisfies $TB=TD$, $TC=TE$, and $\\angle ABT=\\angle TEA$. Put $P=AB\\cap CD$, $Q=AB\\cap CT$, $R=AE\\cap CD$, $S=AE\\cap DT$, with collinear orders $P,B,A,Q$ and $R,E,A,S$. Prove that $P,S,Q,R$ are concyclic.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2022 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2022-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan faktorial dengan eksponen prima",
    "prompt": "Find all triples $(a,b,p)$ of positive integers with $p$ prime and\n\n$$a^p=b!+p.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2022 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2022-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Jumlah lintasan naik pada persegi Nordik",
    "prompt": "For positive $n$, fill an $n\\times n$ Nordic square bijectively with $1,\\ldots,n^2$. Cells are adjacent when sharing a side; a valley has no adjacent smaller entry. An uphill path is a nonempty sequence of cells satisfying these conditions:\n\n(i) It begins at a valley.\n\n(ii) Successive cells are adjacent.\n\n(iii) Entries increase strictly. Determine the minimum number of uphill paths in terms of $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2022 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2023-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung dan garis bagi sudut",
    "prompt": "An acute triangle $ABC$ satisfies $AB<AC$ and has circumcircle $\\Omega$. Let $S$ bisect arc $CB$ containing $A$. The perpendicular from $A$ to $BC$ meets $BS$ at $D$ and $\\Omega$ again at $E\\ne A$. Put $L=BE\\cap\\ell$, where $\\ell$ passes through $D$ parallel to $BC$. The circumcircle $\\omega$ of $BDL$ intersects $\\Omega$ at $B,P$. Show that its tangent at $P\\ne B$ intersects $BS$ on the internal bisector of $\\angle BAC$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2023 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2023-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Batas bawah barisan akar hasil kali",
    "prompt": "Suppose $x_1,\\ldots,x_{2023}$ are distinct positive reals and $$a_n=\\sqrt{(x_1+x_2+\\cdots+x_n)\\left(\\frac{1}{x_1}+\\frac{1}{x_2}+\\cdots+\\frac{1}{x_n}\\right)}$$ is integral for each $1\\le n\\le2023$. Establish $a_{2023}\\ge3034$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2023 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2023-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Lintasan ninja pada segitiga Jepang",
    "prompt": "For positive $n$, a Japanese triangle has $1+2+\\cdots+n$ circles in triangular formation, with one red circle among the $i$ circles of row $i$. A ninja path selects a circle in the first row and then one of the two circles directly below each selection until row $n$. The example for $n=6$ includes a path visiting two red circles.\n\n[[FIGURE]]\n\nDetermine the largest $k$ guaranteed as a lower bound on the number of red circles visited by some ninja path in every such triangle.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2023 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2023-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Tiga lingkaran dengan dua titik persekutuan",
    "prompt": "In equilateral $ABC$, choose interior points $A_1,B_1,C_1$ with $BA_1=A_1C$, $CB_1=B_1A$, $AC_1=C_1B$ and\n\n$$\\angle BA_1C+\\angle CB_1A+\\angle AC_1B=480^\\circ.$$\n\n Set $A_2=BC_1\\cap CB_1$, $B_2=CA_1\\cap AC_1$, $C_2=AB_1\\cap BA_1$. If $A_1B_1C_1$ is scalene, prove that the circumcircles of $AA_1A_2$, $BB_1B_2$, $CC_1C_2$ share two points.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2023 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2024-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Periodisitas barisan frekuensi",
    "prompt": "Take an infinite positive integer sequence $a_1,a_2,a_3,\\ldots$ and positive integer $N$. For $n>N$, let $a_n$ count occurrences of $a_{n-1}$ among $a_1,\\ldots,a_{n-1}$. Show that the sequence $a_1,a_3,a_5,\\ldots$ or $a_2,a_4,a_6,\\ldots$ is eventually periodic (possibly both). A sequence $b_1,b_2,b_3,\\ldots$ is eventually periodic when $b_{m+p}=b_m$ for all $m\\ge M$ for some positive integers $p,M$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2024 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2024-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Jumlah sudut pada konstruksi garis singgung",
    "prompt": "For triangle $ABC$ with $AB<AC<BC$, denote its incenter and incircle by $I,\\omega$. On line $BC$ choose $X\\ne C$ and $Y\\ne B$ so that parallels to $AC$ through $X$ and $AB$ through $Y$ touch $\\omega$. Let $P\\ne A$ be the second intersection of $AI$ with the circumcircle; $K,L$ are the midpoints of $AC,AB$, respectively. Prove $\\angle KIL+\\angle YPX=180^\\circ$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2024 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2024-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi Turbo pada papan monster",
    "prompt": "Turbo the snail faces a $2024\\times2023$ board with 2022 stationary hidden monsters, exactly one per row other than the first and last, at most one per column. Their locations are unknown. Each attempt starts in any top-row cell and proceeds by side-adjacent moves, including revisits. Encountering a monster ends the attempt and returns Turbo to the top row. He remembers the status of all visited cells. Arrival at the bottom row wins. Find the least $n$ permitting guaranteed success within $n$ attempts for every monster placement.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2024 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2024-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Fungsi aquaesulian pada bilangan rasional",
    "prompt": "Call $f:\\mathbb Q\\to\\mathbb Q$ aquaesulian when each rational pair $x,y$ satisfies at least one of the two equalities:\n\n$$f(x+f(y))=f(x)+y\\qquad\\text{or}\\qquad f(f(x)+y)=x+f(y).$$\n\n Find the least integer $c$ uniformly bounding the cardinality of $\\{f(r)+f(-r)\\mid r\\in\\mathbb Q\\}$ over aquaesulian functions, proving that such a bound exists.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2024 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2019-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Konsiklikitas empat titik",
    "prompt": "In triangle $ABC$, take $A_1\\in BC$, $B_1\\in AC$, $P\\in AA_1$ and $Q\\in BB_1$ (all on the indicated segments), with $PQ\\parallel AB$. Choose $P_1$ on line $PB_1$ and $Q_1$ on line $QA_1$, so that $B_1,A_1$ lie strictly between the corresponding endpoints $P,P_1$ and $Q,Q_1$. Given $\\angle PP_1C=\\angle BAC$ and $\\angle CQ_1Q=\\angle CBA$, establish concyclicity of $P,Q,P_1,Q_1$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2019,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2019 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2019-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Operasi perubahan hubungan pertemanan",
    "prompt": "A network of 2019 users has symmetric friendships. An operation replaces friendships $AB,AC$ by $BC$ whenever $A$ is friends with $B,C$ but $B,C$ are not friends; nothing else changes. Initially 1010 users each have 1009 friends, and the remaining 1009 each have 1010. Prove that operations can leave everyone with at most one friend.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2019,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2019 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2019-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan faktorial dan hasil kali",
    "prompt": "Find all pairs $(k,n)$ of positive integers such that\n\n$$k!=(2^n-1)(2^n-2)(2^n-4)\\cdots(2^n-2^{n-1}).$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2019,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2019 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2019-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Proses pembalikan koin",
    "prompt": "Harry arranges $n$ Bank of Bath coins, each marked H and T on opposite faces, in a row. If $k>0$ coins display H, flip the $k$th coin from the left; if none display H, stop. For $n=3$: $THT\\to HHT\\to HTT\\to TTT$ (three flips).\n\n(a) Establish termination for every starting configuration.\n\n(b) Define $L(C)$ as its flip count, e.g. $L(THT)=3$, $L(TTT)=0$. Compute the mean of $L(C)$ over the $2^n$ configurations.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2019,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2019 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2019-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Konkruensi garis pada konstruksi lingkaran",
    "prompt": "An acute triangle $ABC$ with $AB\\ne AC$ has incenter $I$ and incircle $\\omega$, touching $BC,CA,AB$ at $D,E,F$. The perpendicular to $EF$ through $D$ intersects $\\omega$ again at $R$; $AR$ intersects it again at $P$. The circumcircles of $PCE,PBF$ intersect again at $Q$. Show that $DI,PQ$ intersect on the perpendicular to $AI$ through $A$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2019,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2019 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2020-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kekonkurenan garis bagi sudut",
    "prompt": "Inside a convex quadrilateral $ABCD$, take $P$ satisfying\n\n$$\\angle PAD:\\angle PBA:\\angle DPA=1:2:3=\\angle CBP:\\angle BAP:\\angle BPC .$$\n\nShow that the internal angle bisectors of $\\angle ADP,\\angle PCB$ and the perpendicular bisector of $AB$ are concurrent.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2020 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2020-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Partisi batu berdasarkan warna dan berat",
    "prompt": "There are $4n$ pebbles with distinct weights $1,\\ldots,4n$, coloured in $n$ colours, four per colour. Establish a partition into two piles with both properties:\n\n• Equal total weight.\n\n• Two pebbles of every colour in each pile.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2020 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2020-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Keterhubungan stasiun kereta gantung",
    "prompt": "For integer $n>1$, a mountain has $n^2$ stations at distinct elevations. Companies $A,B$ each operate $k$ direct uphill cable cars. Within either company, origins are distinct, destinations are distinct, and origin order agrees with destination order by altitude. Two stations are linked by a company when the higher is reachable from the lower using only its cars, possibly several. Find the least positive $k$ forcing some pair to be linked by both companies.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2020 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2020-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Rata-rata aritmetika dan geometri",
    "prompt": "A deck of $n>1$ cards bears positive integers. The arithmetic mean for every pair of cards equals the geometric mean for some nonempty selection of cards from that deck. For which $n$ must all labels coincide?",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2020 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2020-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis pemisah himpunan titik",
    "prompt": "Establish a universal $c>0$: for every integer $n>1$, any planar $n$-point set $S$ with mutual distances at least $1$ admits a separating line $\\ell$ whose distance from every point of $S$ is at least $cn^{-1/3}$. Separating means that $\\ell$ crosses a segment joining two members of $S$.\n\nNote: partial credit may depend on the exponent $\\alpha>1/3$ if the bound is weakened to $cn^{-\\alpha}$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2020 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2021-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kekonkurenan garis dan pusat lingkaran",
    "prompt": "In acute $ABC$ with $AB>AC$, choose an interior $D$ satisfying $\\angle DAB=\\angle CAD$. Take $E\\in AC$ and $F\\in AB$ on the respective segments with $\\angle ADE=\\angle BCD$ and $\\angle FDA=\\angle DBC$. Take $X$ on line $AC$ with $CX=BX$. If $O_1,O_2$ are the circumcenters of $ADC,EXD$, prove concurrency of $BC,EF,O_1O_2$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2021 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2021-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan jumlah panjang ruas garis",
    "prompt": "A convex quadrilateral $ABCD$ has all four sides tangent to circle $\\Gamma$ centered at $I$. Let $\\Omega$ be the circumcircle of $AIC$. Extend $BA$ past $A$, $BC$ past $C$, and $AD,CD$ past $D$ to meet $\\Omega$ at $X,Z,Y,T$ respectively. Establish $$AD+DT+TX+XA=CD+DY+YZ+ZC.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2021 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2021-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pertukaran posisi kenari pada lingkaran",
    "prompt": "Squirrels Bushy and Jumpy collect 2021 walnuts. Jumpy labels them $1,\\ldots,2021$ and digs that many holes in a circular arrangement around their favourite tree. Bushy places one walnut in each hole in arbitrary order. Jumpy makes 2021 swaps: at step $k$, exchange the two neighbors of walnut $k$. Prove that some step $k$ exchanges labels $a,b$ with $a<k<b$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2021 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2021-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Batas kardinalitas himpunan bilangan bulat",
    "prompt": "For integer $m\\ge2$, suppose $A$ is a finite integer set (negative and zero elements allowed), and $B_1,\\ldots,B_m\\subseteq A$ satisfy $\\sum_{b\\in B_k}b=m^k$ for $1\\le k\\le m$. Show that $A$ contains at least $m/2$ elements.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2021 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2005-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kekonkurenan diagonal segienam",
    "prompt": "Choose $A_1,A_2$ on $BC$, $B_1,B_2$ on $CA$, and $C_1,C_2$ on $AB$ of equilateral $ABC$. If $A_1A_2B_1B_2C_1C_2$ is convex with all six sides equal, establish concurrency of $A_1B_2,B_1C_2,C_1A_2$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2005 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2005-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Titik tetap lingkaran luar",
    "prompt": "Fix convex $ABCD$ with $BC=DA$ but nonparallel sides $BC,DA$. Vary $E\\in BC$ and $F\\in DA$ subject to $BE=DF$. Define the line intersections $P=AC\\cap BD$, $Q=BD\\cap EF$, $R=EF\\cap AC$.\n\nProve that the circumcircles of $PQR$ all pass through a fixed second point distinct from $P$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2005 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2005-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Jumlah peserta dengan lima soal benar",
    "prompt": "A contest consists of six problems. For each pair, strictly more than $\\frac25$ of all contestants solved both. Nobody solved all six. Establish that at least two contestants solved precisely five.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2005 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2018-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesejajaran garis pada lingkaran",
    "prompt": "In acute $ABC$ with circumcircle $\\Gamma$, choose $D\\in AB$ and $E\\in AC$ with $AD=AE$. The perpendicular bisectors of $BD,CE$ meet the minor arcs $AB,AC$ at $F,G$, respectively. Establish that lines $DE,FG$ are parallel or coincident.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2018 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2018-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan real siklik",
    "prompt": "Find all integers $n\\ge3$ for which there exist real numbers $a_1,a_2,\\ldots,a_{n+2}$, such that $a_{n+1}=a_1$ and $a_{n+2}=a_2$, and\n\n$$a_ia_{i+1}+1=a_{i+2}$$\n\nfor $i=1,2,\\ldots,n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2018 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2018-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Segitiga anti-Pascal",
    "prompt": "An anti-Pascal triangle uses an equilateral triangular arrangement in which each entry above the bottom row equals the absolute difference of its two immediate lower neighbors. Here is a four-row example using $1$ through $10$:\n\n$$\\begin{array}{ccccccc}&&&4&&&\\\\&&2&&6&&\\\\&5&&7&&1&\\\\8&&3&&10&&9\\end{array}$$\n\nCan an anti-Pascal triangle of $2018$ rows contain every integer from $1$ through $1+2+\\cdots+2018$?",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2018 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2018-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi penempatan batu merah",
    "prompt": "Initially, all $400$ integer-coordinate sites $(x,y)$ with $1\\le x,y\\le20$ are empty. Amy and Ben alternate, Amy first. Amy places red stones on vacant sites, maintaining pairwise red-site distances unequal to $\\sqrt5$. Ben places blue stones on vacant sites without distance restrictions. Play stops when either player cannot move. Maximize the guaranteed number $K$ of red stones Amy can place.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2018 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2018-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan rasio bilangan bulat",
    "prompt": "Suppose $(a_n)_{n\\ge1}$ consists of positive integers and, for some integer $N>1$, the sum\n\n$$\\frac{a_1}{a_2}+\\frac{a_2}{a_3}+\\cdots+\\frac{a_{n-1}}{a_n}+\\frac{a_n}{a_1}$$\n\nis integral whenever $n\\ge N$. Prove eventual constancy: $a_m=a_{m+1}$ for all $m\\ge M$ for some positive integer $M$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2018 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2018-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Jumlah sudut pada segiempat",
    "prompt": "In convex $ABCD$, assume $AB\\cdot CD=BC\\cdot DA$. An interior point $X$ satisfies\n\n$$\\angle XAB=\\angle XCD\\qquad\\text{and}\\qquad\\angle XBC=\\angle XDA.$$ Establish $\\angle BXA+\\angle DXC=180^\\circ$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2018 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2025-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Penutupan titik kisi dengan garis sunny",
    "prompt": "Call a planar line sunny if it is parallel to neither coordinate axis nor $x+y=0$. Given integer $n\\ge3$, classify nonnegative integers $k$ allowing $n$ distinct lines satisfying both conditions:\n\n• Every point $(a,b)$ with positive integers $a,b$ and $a+b\\le n+1$ is covered.\n\n• Exactly $k$ lines are sunny.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2025 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2025-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung lingkaran BEF",
    "prompt": "Circles $\\Omega,\\Gamma$ centered at $M,N$ intersect at distinct points $A,B$, with $\\Omega$ smaller in radius. On line $MN$, select $C\\in\\Omega$, $D\\in\\Gamma$ in order $C,M,N,D$. Let $P$ be the circumcentre of $ACD$ and $H$ the orthocentre (intersection of the altitudes) of $PMN$. Line $AP$ meets $\\Omega,\\Gamma$ again at $E\\ne A,F\\ne A$, respectively. Establish tangency of the parallel to $AP$ through $H$ to the circumcircle of $BEF$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2025 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2025-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Batas fungsi bonza",
    "prompt": "Write $\\mathbb N=\\{1,2,\\ldots\\}$. Call $f:\\mathbb N\\to\\mathbb N$ bonza when $$f(a)\\mid b^a-f(b)^{f(a)}$$ for every $a,b\\in\\mathbb N$. Determine the least real $c$ bounding $f(n)\\le cn$ uniformly over these functions and positive integers $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2025 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2025-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Iterasi tiga pembagi sejati terbesar",
    "prompt": "A proper divisor of a positive integer is a positive divisor unequal to that integer. Every term of an infinite positive integer sequence $a_1,a_2,\\ldots$ has at least three proper divisors. For $n\\ge1$, set $a_{n+1}$ equal to the sum of the largest three proper divisors of $a_n$. Classify the possible starting values $a_1$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2025 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2025-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Strategi permainan inekoalaty",
    "prompt": "Alice and Bazza play inekoalaty with known $\\lambda>0$. On turn $n$:\n\n• If $n$ is odd, Alice chooses $x_n\\ge0$ subject to\n\n$$x_1+x_2+\\cdots+x_n\\le\\lambda n.$$\n\n• If $n$ is even, Bazza chooses $x_n\\ge0$ subject to\n\n$$x_1^2+x_2^2+\\cdots+x_n^2\\le n.$$ Choices are public. The first player unable to move loses; infinite play has no winner. Classify $\\lambda$ giving either player a winning strategy.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2025 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2025-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Penutupan kisi dengan ubin persegi panjang",
    "prompt": "Matilda places rectangular tiles of arbitrary sizes on a $2025\\times2025$ unit-square grid, with boundaries along gridlines and no cell covered twice. Minimize the tile count subject to exactly one uncovered cell in every row and every column.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2025 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2015-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Himpunan balanced dan centre-free",
    "prompt": "A finite planar set $S$ is balanced when every distinct pair $A,B\\in S$ admits $C\\in S$ with $AC=BC$. It is centre-free when no $P\\in S$ is equidistant from three distinct members of $S$.\n\n(a) Establish existence of balanced $n$-point sets for each integer $n\\ge3$.\n\n(b) Classify integers $n\\ge3$ admitting balanced centre-free $n$-point sets.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2015 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2015-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Tiga selisih berpangkat dua",
    "prompt": "Classify positive integer triples $(a,b,c)$ for which $$ab-c,\\qquad bc-a,\\qquad ca-b$$\n\neach equal a power $2^n$ with nonnegative integer exponent.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2015 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2015-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Persinggungan dua lingkaran luar",
    "prompt": "In acute $ABC$ with $AB>AC$, let $\\Gamma,H,F,M$ denote its circumcircle, orthocentre, altitude foot from $A$, and midpoint of $BC$. Choose $Q,K\\in\\Gamma$ satisfying $\\angle HQA=\\angle HKQ=90^\\circ$. Distinct points $A,B,C,K,Q$ occur in that order on $\\Gamma$. Establish tangency of circumcircles of $KQH,FKM$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2015 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2015-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Titik potong pada garis pusat lingkaran",
    "prompt": "Triangle $ABC$ has circumcircle $\\Omega$ centred at $O$. Circle $\\Gamma$ centered at $A$ meets segment $BC$ at $D,E$ (distinct order $B,D,E,C$) and $\\Omega$ at $F,G$ (order $A,F,B,C,G$). Circumcircles of $BDF,CGE$ meet segments $AB,CA$ again at $K,L$, respectively. If distinct lines $FK,GL$ intersect at $X$, show $X\\in AO$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2015 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2015-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi real",
    "prompt": "Classify $f:\\mathbb R\\to\\mathbb R$ satisfying\n\n$$f(x+f(x+y))+f(xy)=x+f(x+y)+yf(x)$$\n\nfor every real pair $x,y$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2015 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2015-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Keterbatasan jumlah parsial barisan",
    "prompt": "An integer sequence obeys\n\n(i) $1\\le a_j\\le2015$ for $j\\ge1$;\n\n(ii) $k+a_k\\ne\\ell+a_\\ell$ whenever $1\\le k<\\ell$.\n\nEstablish positive integers $b,N$ for which\n\n$$\\left|\\sum_{j=m+1}^{n}(a_j-b)\\right|\\le1007^2$$\n\nwhenever integers $n>m\\ge N$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2015 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2016-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kekonkurenan tiga garis",
    "prompt": "Triangle $BCF$ is right at $B$. Choose $A$ on line $CF$ with $FA=FB$, $F$ between $A,C$. Choose $D$ satisfying $DA=DC$ and $AC$ bisecting $\\angle DAB$, then $E$ satisfying $EA=ED$ and $AD$ bisecting $\\angle EAC$. For midpoint $M$ of $CF$, construct parallelogram $AMXE$ ($AM\\parallel EX$, $AE\\parallel MX$). Establish concurrency of $BD,FX,ME$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2016 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2016-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pewarnaan tabel IMO",
    "prompt": "Classify positive integers $n$ admitting an $n\\times n$ array of letters I, M, O satisfying:\n\n• Each row and column contains equal counts of all three letters.\n\n• Each diagonal of length divisible by three contains equal counts of all three letters.\n\nNote: Cells have indices $(i,j)$ with $1\\le i,j\\le n$. For $n>1$, there are $4n-2$ diagonals: sets of cells with constant $i+j$ or constant $i-j$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2016 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2016-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian luas poligon siklik",
    "prompt": "Let $S$ be the area of convex polygon $P=A_1\\cdots A_k$ with concyclic integer-coordinate vertices. Given odd positive integer $n$ dividing every squared side length, establish that $2S$ is integral and divisible by $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2016 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2016-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Himpunan bilangan fragrant",
    "prompt": "A positive-integer set is fragrant when it has at least two members and every member shares a prime divisor with another member. For $P(n)=n^2+n+1$, minimize positive integer $b$ admitting nonnegative integer $a$ with\n\n$$\\{P(a+1),P(a+2),\\ldots,P(a+b)\\}$$\n\nfragrant.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2016 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2016-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Penghapusan faktor persamaan polinomial",
    "prompt": "Start with\n\n$$(x-1)(x-2)\\cdots(x-2016)=(x-1)(x-2)\\cdots(x-2016)$$ Minimize the number $k$ of deleted factors among the $4032$ occurrences, leaving at least one factor on either side and no real solution.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2016 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2016-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Lintasan katak pada ruas berpotongan",
    "prompt": "Take $n\\ge2$ planar segments crossing pairwise, without triple intersections. Geoff places a frog at one endpoint per segment, facing the other endpoint. Each of $n-1$ claps triggers simultaneous forward jumps to the next crossings, without reversals.\n\n(a) Prove that the frogs can avoid sharing any crossing simultaneously for odd $n$.\n\n(b) Prove impossibility for even $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2016 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2017-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Iterasi akar kuadrat dan penjumlahan",
    "prompt": "For integer $a_0>1$ and each $n\\ge0$, define\n\n$$a_{n+1}=\\begin{cases}\\sqrt{a_n},&\\sqrt{a_n}\\in\\mathbb Z,\\\\a_n+3,&\\text{otherwise}.\\end{cases}$$\n\nClassify starting values permitting a number $A$ attained by infinitely many terms.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2017 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2017-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi komposisi",
    "prompt": "Classify maps $f:\\mathbb R\\to\\mathbb R$ obeying\n\n$$f(f(x)f(y))+f(x+y)=f(xy)$$\n\nfor every real $x,y$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2017 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2017-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi pemburu dan kelinci tak terlihat",
    "prompt": "A hunter and invisible rabbit start together at $B_0=A_0$ in the Euclidean plane. Round $n$ proceeds as follows:\n\n(i) Rabbit moves invisibly to $A_n$ with $A_{n-1}A_n=1$.\n\n(ii) A tracker reports $P_n$, guaranteeing only $P_nA_n\\le1$.\n\n(iii) Hunter moves visibly to $B_n$ with $B_{n-1}B_n=1$.\n\nCan she guarantee $A_{10^9}B_{10^9}\\le100$ regardless of rabbit moves and tracker reports?",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2017 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2017-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung lingkaran JST",
    "prompt": "Distinct $R,S\\in\\Omega$ do not form a diameter. Let $\\ell$ touch circle $\\Omega$ at $R$. Extend $RS$ to $T$ with midpoint $S$. Choose $J$ on minor arc $RS$ so circumcircle $\\Gamma$ of $JST$ crosses $\\ell$ twice. Let $A$ be the intersection nearer $R$; $AJ$ meets $\\Omega$ again at $K$. Establish tangency of $KT$ to $\\Gamma$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2017 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2017-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pemilihan pasangan pemain sepak bola",
    "prompt": "For integer $N\\ge2$, arrange $N(N+1)$ soccer players of distinct heights in a row. Sir Alex removes $N(N-1)$ players. Prove he can leave $2N$ players such that consecutive height ranks $(1,2),(3,4),\\ldots,(2N-1,2N)$ form adjacent pairs in the remaining row.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2017 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2017-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Polinomial homogen pada titik primitif",
    "prompt": "A primitive point is an integer pair $(x,y)$ with $\\gcd(x,y)=1$. Given a finite set $S$ of such points, establish a positive integer $n$ and integers $a_0,\\ldots,a_n$ satisfying\n\n$$a_0x^n+a_1x^{n-1}y+a_2x^{n-2}y^2+\\cdots+a_{n-1}xy^{n-1}+a_ny^n=1$$\n\nthroughout $S$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2017 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2012-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Titik tengah pada konstruksi lingkaran singgung luar",
    "prompt": "The $A$-excircle of triangle $ABC$, centered at $J$, touches segment $BC$ at $M$ and rays $AB,AC$ beyond $B,C$ at $K,L$. Set $F=LM\\cap BJ$, $G=KM\\cap CJ$, $S=AF\\cap BC$, $T=AG\\cap BC$ (line intersections). Establish $SM=MT$ with $M$ between $S,T$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2012 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2012-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan hasil kali berpangkat",
    "prompt": "Given integer $n\\ge3$ and positive reals $a_2,\\ldots,a_n$ with $a_2a_3\\cdots a_n=1$, establish\n\n$$(1+a_2)^2(1+a_3)^3\\cdots(1+a_n)^n>n^n.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2012 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2012-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi permainan penebak dan pembohong",
    "prompt": "In the liar's guessing game, both players know positive integers $k,n$. A chooses integers $1\\le x\\le N$, revealing $N$ truthfully but hiding $x$. B repeatedly asks whether $x\\in S$ for arbitrary positive-integer sets $S$ (repetitions allowed). A answers immediately yes or no; every block of $k+1$ successive answers must include a truthful one. B chooses when to stop and names a set $X$ of at most $n$ positive integers, winning precisely when $x\\in X$.\n\nProve:\n\n1. B has a guaranteed winning strategy for $n\\ge2^k$.\n2. For sufficiently large $k$, some integer $n\\ge1.99^k$ prevents B from guaranteeing victory.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2012 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2012-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada bilangan bulat",
    "prompt": "Classify integer-valued maps $f:\\mathbb Z\\to\\mathbb Z$ obeying\n\n$$f(a)^2+f(b)^2+f(c)^2=2f(a)f(b)+2f(b)f(c)+2f(c)f(a)$$\n\nwhenever integers $a,b,c$ sum to zero.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2012 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2012-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan panjang dua ruas",
    "prompt": "Triangle $ABC$ is right at $C$, with altitude foot $D$. Choose $X$ strictly inside $CD$, $K\\in AX$ satisfying $BK=BC$, and $L\\in BX$ satisfying $AL=AC$ (segment membership). For $M=AL\\cap BK$, establish $MK=ML$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2012 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2012-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Jumlah pecahan dengan pangkat dua dan tiga",
    "prompt": "Find all positive integers $n$ for which there exist non-negative integers $a_1,a_2,\\ldots,a_n$ such that\n\n$$\\frac{1}{2^{a_1}}+\\frac{1}{2^{a_2}}+\\cdots+\\frac{1}{2^{a_n}}=\\frac{1}{3^{a_1}}+\\frac{2}{3^{a_2}}+\\cdots+\\frac{n}{3^{a_n}}=1.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2012 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2013-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Faktorisasi pecahan positif",
    "prompt": "Prove that for any pair of positive integers $k$ and $n$, there exist $k$ positive integers $m_1,m_2,\\ldots,m_k$ (not necessarily different) such that\n\n$$1+\\frac{2^k-1}{n}=\\left(1+\\frac{1}{m_1}\\right)\\left(1+\\frac{1}{m_2}\\right)\\cdots\\left(1+\\frac{1}{m_k}\\right).$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2013 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2013-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pemisahan titik merah dan biru",
    "prompt": "A Colombian configuration comprises 2013 red and 2014 blue planar points, with no collinear triple. A good arrangement of lines avoids all marked points and divides the plane into regions containing at most one colour. Minimize $k$ guaranteeing such an arrangement of $k$ lines for every Colombian configuration.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2013 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2013-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Pusat lingkaran segitiga titik singgung",
    "prompt": "For triangle $ABC$, let $A_1,B_1,C_1$ be the contact points of its opposite excircles on $BC,CA,AB$, respectively. Each excircle touches the opposite side segment and the two adjacent side rays extended beyond their endpoints. If the circumcenter of $A_1B_1C_1$ belongs to the circumcircle of $ABC$, establish that $ABC$ is right-angled.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2013 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2013-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kolinearitas titik diameter dan ortosenter",
    "prompt": "In acute triangle $ABC$ with orthocenter $H$, choose $W$ strictly between $B,C$. Let $M,N$ be the altitude feet from $B,C$. Choose $X,Y$ so that $WX,WY$ are diameters of the circumcircles of $BWN,CWM$, respectively. Establish collinearity of $X,Y,H$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2013 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2013-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Karakterisasi fungsi identitas rasional positif",
    "prompt": "Suppose $f:\\mathbb Q_{>0}\\to\\mathbb R$ obeys\n\n(i) $f(x)f(y)\\ge f(xy)$ for positive rationals $x,y$;\n\n(ii) $f(x+y)\\ge f(x)+f(y)$ for positive rationals $x,y$;\n\n(iii) $f(a)=a$ for some rational $a>1$.\n\nEstablish $f(x)=x$ throughout $\\mathbb Q_{>0}$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2013 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2013-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pelabelan beautiful pada lingkaran",
    "prompt": "For integer $n\\ge3$, label $n+1$ equally spaced circular points bijectively by $0,\\ldots,n$, identifying rotations. A labelling is beautiful when chords $ad$ and $bc$ never intersect for labels $a<b<c<d$ satisfying $a+d=b+c$. Let $M$ count beautiful labellings and $N$ count ordered positive-integer pairs $(x,y)$ satisfying $x+y\\le n$ and $\\gcd(x,y)=1$. Establish\n\n$$M=N+1.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2013 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2014-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketunggalan indeks pada barisan meningkat",
    "prompt": "Let $a_0<a_1<a_2<\\cdots$ be an infinite sequence of positive integers. Prove that there exists a unique integer $n\\ge1$ such that\n\n$$a_n<\\frac{a_0+a_1+\\cdots+a_n}{n}\\le a_{n+1}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2014 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2014-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Persegi kosong pada papan benteng",
    "prompt": "For integer $n\\ge2$, a peaceful placement on an $n\\times n$ chessboard has one rook per row and column. Determine the largest positive integer $k$ such that every peaceful placement leaves some contiguous $k\\times k$ square of unit cells entirely rook-free.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2014 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2014-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung pada lingkaran TSH",
    "prompt": "Convex $ABCD$ satisfies $\\angle ABC=\\angle CDA=90^\\circ$. Let $H$ be the perpendicular foot from $A$ to line $BD$. Choose $S\\in AB,T\\in AD$ on the sides, with $H$ interior to $SCT$ and\n\n$$\\angle CHS-\\angle CSB=90^\\circ,\\qquad \\angle THC-\\angle DTC=90^\\circ.$$\n\nEstablish tangency of $BD$ to the circumcircle of $TSH$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2014 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2014-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Perpotongan garis pada lingkaran luar",
    "prompt": "In acute triangle $ABC$, take $P,Q$ on side $BC$ satisfying $\\angle PAB=\\angle BCA$, $\\angle CAQ=\\angle ABC$. Reflect $A$ through $P,Q$ to obtain $M,N$, respectively. Establish that $BM$ and $CN$ meet on the circumcircle of $ABC$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2014 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2014-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Partisi koleksi koin pecahan",
    "prompt": "The Bank of Cape Town issues denominations $\\frac1n$ for every positive integer $n$. Prove that any finite collection of these coins, allowing repeated denominations, worth at most $99+\\frac12$, can be partitioned into at most 100 groups each worth at most 1.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2014 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2014-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pewarnaan garis pada posisi umum",
    "prompt": "Planar lines are in general position when no two are parallel and no three concurrent. Their arrangement defines finite regions (regions of finite area). For sufficiently large $n$, establish that any $n$ such lines admit a selection of at least $\\sqrt n$ to colour blue, with no finite region bounded exclusively by blue lines.\n\nNote: Partial credit for the bound $c\\sqrt n$ depends on $c$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2014 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2009-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian pada rantai bilangan berbeda",
    "prompt": "For positive integer $n$, choose distinct $a_1,\\ldots,a_k\\in\\{1,\\ldots,n\\}$ with $k\\ge2$ and $n\\mid a_i(a_{i+1}-1)$ for $1\\le i<k$. Establish $n\\nmid a_k(a_1-1)$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2009 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2009-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan jarak terhadap pusat lingkaran",
    "prompt": "In triangle $ABC$ with circumcentre $O$, take $P,Q$ strictly inside sides $CA,AB$, respectively. Set $K,L,M$ as the midpoints of $BP,CQ,PQ$. If $PQ$ touches the circumcircle $\\Gamma$ of $KLM$, establish $OP=OQ$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2009 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2009-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan aritmetika dari subbarisan berindeks",
    "prompt": "A strictly increasing positive integer sequence $s_1,s_2,s_3,\\ldots$ has arithmetic subsequences \n\n$$s_{s_1},s_{s_2},s_{s_3},\\ldots\\qquad\\text{and}\\qquad s_{s_1+1},s_{s_2+1},s_{s_3+1},\\ldots$$\n\n. Establish that $s_1,s_2,s_3,\\ldots$ is arithmetic.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2009 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2009-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Sudut pada segitiga sama kaki",
    "prompt": "Triangle $ABC$ has $AB=AC$. The bisectors of $\\angle CAB,\\angle ABC$ meet $BC,CA$ at $D,E$, respectively. With $K$ the incentre of $ADC$ and $\\angle BEK=45^\\circ$, determine every possible $\\angle CAB$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2009 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2009-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Fungsi dengan syarat ketaksamaan segitiga",
    "prompt": "Classify maps $f:\\mathbb Z_{>0}\\to\\mathbb Z_{>0}$ for which, for every positive integer pair $a,b$, the lengths $a,f(b),f(b+f(a)-1)$ form a triangle with noncollinear vertices.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2009 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2009-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Urutan lompatan menghindari titik terlarang",
    "prompt": "Take distinct positive integers $a_1,\\ldots,a_n$ and a set $M$ of $n-1$ positive integers excluding $s=a_1+\\cdots+a_n$. Starting at $0$, a grasshopper makes $n$ rightward jumps of these lengths in some permutation. Prove that a permutation exists avoiding every landing point in $M$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2009 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2010-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi dengan fungsi lantai",
    "prompt": "Classify $f:\\mathbb R\\to\\mathbb R$ satisfying\n\n$$f(\\lfloor x\\rfloor y)=f(x)\\lfloor f(y)\\rfloor$$\n\nfor all real $x,y$. Here $\\lfloor z\\rfloor$ is the greatest integer not exceeding $z$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2010 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2010-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Perpotongan garis pada lingkaran luar",
    "prompt": "Let $I,\\Gamma$ be the incentre and circumcircle of $ABC$, and $D$ the second intersection of $AI$ with $\\Gamma$. Take $E$ on arc $BDC$ and $F$ on side $BC$ with\n\n$$\\angle BAF=\\angle CAE<\\frac12\\angle BAC.$$\n\nFor midpoint $G$ of $IF$, establish that $DG$ and $EI$ intersect on $\\Gamma$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2010 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2010-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Fungsi dengan hasil kali kuadrat sempurna",
    "prompt": "Let $\\mathbb N$ be the set of positive integers. Determine all functions $g:\\mathbb N\\to\\mathbb N$ such that\n\n$$(g(m)+n)(m+g(n))$$\n\nis a perfect square for all $m,n\\in\\mathbb N$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2010 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2010-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan panjang tali busur",
    "prompt": "For interior $P$ of triangle $ABC$, denote by $K,L,M$ the second intersections of $AP,BP,CP$ with its circumcircle $\\Gamma$. The tangent at $C$ meets line $AB$ at $S$. Given $SC=SP$, establish $MK=ML$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2010 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2010-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Operasi pemindahan koin antarkotak",
    "prompt": "Six boxes $B_1,\\ldots,B_6$ start with one coin apiece.\n\nType 1: For nonempty $B_j$, $1\\le j\\le5$, remove one coin and add two to $B_{j+1}$.\n\nType 2: For nonempty $B_k$, $1\\le k\\le4$, remove one coin and swap the contents of $B_{k+1},B_{k+2}$, including empty boxes.\n\nCan finitely many operations empty $B_1,\\ldots,B_5$ and leave precisely $2010^{2010^{2010}}$ coins in $B_6$? Exponents associate as $a^{b^c}=a^{(b^c)}$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2010 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2010-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Rekurensi maksimum barisan positif",
    "prompt": "A positive real sequence $a_1,a_2,a_3,\\ldots$ satisfies\n\n$$a_n=\\max\\{a_k+a_{n-k}\\mid1\\le k\\le n-1\\}$$\n\nwhenever $n>s$, for some positive integer $s$. Establish positive integers $\\ell,N$ with $\\ell\\le s$ and $a_n=a_\\ell+a_{n-\\ell}$ whenever $n\\ge N$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2010 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2011-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Maksimum pasangan pembagi jumlah",
    "prompt": "For $A=\\{a_1,a_2,a_3,a_4\\}$ of distinct positive integers, set $s_A=a_1+a_2+a_3+a_4$ and let $n_A$ count pairs $(i,j)$ with $1\\le i<j\\le4$ and $a_i+a_j\\mid s_A$. Classify the sets maximizing $n_A$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2011 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2011-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Proses windmill pada himpunan titik",
    "prompt": "A finite planar set $S$ has at least two points and no collinear triple. In a windmill, line $\\ell$ initially contains only one member $P$ of $S$. Rotate clockwise about $P$ until another member $Q$ is reached; switch the pivot to $Q$ and continue indefinitely. Prove that suitable initial choices of $P,\\ell$ make every member a pivot infinitely often.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2011 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2011-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan fungsi real",
    "prompt": "Suppose $f:\\mathbb R\\to\\mathbb R$ obeys\n\n$$f(x+y)\\le yf(x)+f(f(x))$$\n\nfor arbitrary real $x,y$. Establish $f(x)=0$ whenever $x\\le0$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2011 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2011-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Penempatan beban pada neraca",
    "prompt": "For positive integer $n$, place weights $2^0,2^1,\\ldots,2^{n-1}$ individually on either pan of a balance, choosing any unused weight each time. Count the sequences of placements for which the right pan never outweighs the left.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2011 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2011-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian pada nilai fungsi",
    "prompt": "Suppose $f:\\mathbb Z\\to\\mathbb Z_{>0}$ satisfies $f(m-n)\\mid f(m)-f(n)$ for arbitrary integers $m,n$. Establish $f(m)\\mid f(n)$ whenever $f(m)\\le f(n)$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2011 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2011-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Persinggungan lingkaran hasil refleksi garis",
    "prompt": "Let $\\Gamma$ be the circumcircle of acute $ABC$ and $\\ell$ a tangent to $\\Gamma$. Reflect $\\ell$ across $BC,CA,AB$ to obtain lines $\\ell_a,\\ell_b,\\ell_c$, respectively. Establish that the circumcircle of their triangle touches $\\Gamma$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2011 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2006-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Jarak titik interior dan incenter",
    "prompt": "In triangle $ABC$ with incentre $I$, suppose an interior point $P$ satisfies\n\n$$\\angle PBA+\\angle PCA=\\angle PBC+\\angle PCB.$$\n\nEstablish $AP\\ge AI$, with equality precisely when $P=I$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2006 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2006-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Triangulasi poligon dengan sisi good",
    "prompt": "In a regular $2006$-gon $P$, call its sides good, as well as diagonals splitting its boundary into two odd-length side chains. Triangulate $P$ using $2003$ diagonals that do not intersect inside $P$. Maximize the number of isosceles triangles with two good sides.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2006 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2006-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Konstanta optimal ketaksamaan siklik",
    "prompt": "Minimize the real constant $M$ for which\n\n$$\\left|ab(a^2-b^2)+bc(b^2-c^2)+ca(c^2-a^2)\\right|\\le M(a^2+b^2+c^2)^2$$\n\nfor arbitrary real $a,b,c$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2006 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2006-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan kuadrat dengan perpangkatan dua",
    "prompt": "Determine all pairs $(x,y)$ of integers such that\n\n$$1+2^x+2^{2x+1}=y^2.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2006 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2006-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Titik tetap iterasi polinomial",
    "prompt": "Take an integer-coefficient polynomial $P(x)$ of degree $n>1$ and a positive integer $k$. Write $Q(x)=P(P(\\ldots P(P(x))\\ldots))$ for its $k$-fold composition. Prove that $Q(t)=t$ admits at most $n$ integer solutions.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2006 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2006-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Jumlah luas maksimum segitiga dalam poligon",
    "prompt": "For every side $b$ of a convex polygon $P$, maximize the area of a triangle contained in $P$ with base $b$. Prove that the sum of these maxima is at least twice the area of $P$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2006 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2007-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Aproksimasi barisan dengan barisan monoton",
    "prompt": "Given reals $a_1,\\ldots,a_n$, for $1\\le i\\le n$, define\n\n$$d_i=\\max\\{a_j:1\\le j\\le i\\}-\\min\\{a_j:i\\le j\\le n\\}$$\n\nand\n\n$$d=\\max\\{d_i:1\\le i\\le n\\}.$$\n\n(a) For reals $x_1\\le\\cdots\\le x_n$, prove\n\n$$\\max\\{|x_i-a_i|:1\\le i\\le n\\}\\ge\\frac d2.\\tag{*}$$\n\n(b) Establish that a nondecreasing real sequence $x_1,\\ldots,x_n$ attaining equality exists.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2007 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2007-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis bagi sudut pada jajargenjang",
    "prompt": "Suppose $ABCD$ is a parallelogram and $BCED$ is cyclic. A line $\\ell$ through $A$ meets the interior of $DC$ at $F$ and line $BC$ at $G$. Given $EF=EG=EC$, prove $\\ell$ bisects $\\angle DAB$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2007 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2007-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pembagian peserta berdasarkan ukuran clique",
    "prompt": "Among contest participants, friendships are mutual. A clique is a group whose members are pairwise friends (including groups of size zero or one); its size is its membership count. If the maximum clique size is even, prove that partitioning participants between two rooms can equalize their respective maximum clique sizes.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2007 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2007-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan luas segitiga",
    "prompt": "In $ABC$, the bisector of $\\angle BCA$ meets its circumcircle again at $R$ and the perpendicular bisectors of $BC,AC$ at $P,Q$, respectively. With midpoints $K$ of $BC$ and $L$ of $AC$, prove equality of the areas of $RPK$ and $RQL$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2007 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2007-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian bentuk kuadrat",
    "prompt": "Let $a$ and $b$ be positive integers. Show that if $4ab-1$ divides $(4a^2-1)^2$, then $a=b$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2007 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2007-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Penutupan titik kisi tiga dimensi",
    "prompt": "For positive integer $n$, define\n\n$$S=\\{(x,y,z):x,y,z\\in\\{0,1,\\ldots,n\\},\\ x+y+z>0\\}$$\n\nas a set of $(n+1)^3-1$ points in three-dimensional space. Minimize the number of planes covering $S$ while excluding the origin.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2007 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2008-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Konsiklikitas enam titik",
    "prompt": "An acute triangle $ABC$ has orthocentre $H$. Draw the three circles through $H$ centred at the midpoints of $BC,CA,AB$ respectively. Their intersections with the corresponding side lines are $A_1,A_2$; $B_1,B_2$; and $C_1,C_2$. Prove all six points are concyclic.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2008 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2008-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan pecahan dan kasus kesetaraan",
    "prompt": "(a) For real $x,y,z$, none equal to $1$, with $xyz=1$, establish\n\n$$\\frac{x^2}{(x-1)^2}+\\frac{y^2}{(y-1)^2}+\\frac{z^2}{(z-1)^2}\\ge1.$$\n\n(b) Establish infinitely many rational triples satisfying the same restrictions and attaining equality.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2008 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2008-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Pembagi prima besar",
    "prompt": "Prove that there exist infinitely many positive integers $n$ such that $n^2+1$ has a prime divisor which is greater than $2n+\\sqrt{2n}$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2008 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2008-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada real positif",
    "prompt": "Classify maps $f:(0,\\infty)\\to(0,\\infty)$ satisfying\n\n$$\\frac{(f(w))^2+(f(x))^2}{f(y^2)+f(z^2)}=\\frac{w^2+x^2}{y^2+z^2}$$\n\nfor positive reals $w,x,y,z$ with $wx=yz$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2008 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2008-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Rasio banyak urutan sakelar lampu",
    "prompt": "Take positive integers $k\\ge n$ with $k-n$ even. Initially, lamps $1,\\ldots,2n$ are off. A step toggles one lamp.\n\nLet $N$ count $k$-step sequences ending with precisely lamps $1,\\ldots,n$ on.\n\nLet $M$ count those sequences that never turn on any lamp numbered above $n$.\n\nDetermine $N/M$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2008 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2008-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Perpotongan garis singgung persekutuan",
    "prompt": "In convex $ABCD$ with $|BA|\\ne|BC|$, let $\\omega_1,\\omega_2$ be the incircles of $ABC,ADC$. Suppose a circle $\\omega$ touches rays $BA,BC$ beyond $A,C$, respectively, and lines $AD,CD$. Establish that the common external tangents of $\\omega_1,\\omega_2$ meet on $\\omega$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2008 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2026-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Invariansi operasi FPB dan KPK",
    "prompt": "A blackboard holds 2026 integers exceeding $1$, repetitions allowed. Confucius repeatedly replaces two entries $m,n>1$ in different positions by\n\n$$\\gcd(m,n)\\qquad\\text{and}\\qquad\\frac{\\operatorname{lcm}(m,n)}{\\gcd(m,n)}.$$\n\nHe repeats this operation whenever possible.\n\n(a) Prove every such process terminates with precisely one entry $M>1$.\n\n(b) Prove $M$ is independent of the choices.\n\nHere $\\gcd$ and $\\operatorname{lcm}$ mean greatest common divisor and least common multiple.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2026 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2026-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan jarak pusat lingkaran",
    "prompt": "In $ABC$, let $M,N$ be the midpoints of $AB,AC$. Choose $K$ strictly inside both $BMC,ABL$, and $L$ strictly inside both $BNC,AKC$. Assume\n\n$$\\angle KBA=\\angle ACL,\\qquad\\angle LBK=\\angle LNC,\\qquad\\angle LCK=\\angle BMK.$$\n\n For circumcentre $O$ of $AKL$, prove $OM=ON$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2026 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2026-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi pembagian batang satuan",
    "prompt": "For positive integer $n$, Liu Bang marks up to $n$ distinct points on a unit stick, then Xiang Yu marks up to $n$ more distinct points. Cut at every mark. Starting with Liu, alternate taking one remaining piece, each seeking maximum total length. Find the greatest length $c$ Liu can guarantee.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2026 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2026-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Strategi pemotongan segitiga",
    "prompt": "Fix a known angle $0^\\circ<\\theta<180^\\circ$. Shan-Yu chooses a paper triangle $\\mathcal T$. Repeatedly:\n\n• Mulan wins immediately if an angle equals $\\theta$.\n\n• Otherwise she cuts along a straight line from a nonvertex boundary point $P$ to the opposite vertex.\n\n• Shan-Yu discards one resulting triangle; the other becomes $\\mathcal T$.\n\nClassify $\\theta$ permitting Mulan to force a finite win.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2026 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imo-2026-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan fungsi real positif",
    "prompt": "Let $\\mathbb R_{>0}$ be the set of positive real numbers. Determine all functions $f:\\mathbb R_{>0}\\to\\mathbb R_{>0}$ such that\n\n$$\\sqrt{\\frac{x^2+f(y)^2}{2}}\\ge\\frac{f(x)+y}{2}\\ge\\sqrt{xf(y)}$$\n\nfor every $x,y\\in\\mathbb R_{>0}$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2026 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "2026-11-25: original statement verified against official PDF page 2; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imo-2026-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Periodisitas aditif barisan FPB",
    "prompt": "In an infinite integer sequence $a_1,a_2,a_3,\\ldots$ with $a_i>1$, choose $a_{n+1}$ as the least integer exceeding $a_n$ with $\\gcd(a_{n+1},a_i)>1$ for $1\\le i\\le n$. Establish positive integers $T,L$ satisfying\n\n$$a_{n+T}=a_n+L$$\n\nfor every positive $n$. Here $\\gcd$ denotes greatest common divisor.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2026 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; full original replacement pending."
    }
  },
  {
    "id": "imc-2019-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Hasil kali tak hingga",
    "prompt": "Evaluate the product\n\n$$\\prod_{n=3}^{\\infty}\\frac{(n^3+3n)^2}{n^6-64}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2019 — Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "imc-2019-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Sistem persamaan linear dengan digit tahun",
    "prompt": "A four-digit integer $YEAR$ is very good when the following linear system in $x,y,z,w$ admits two or more solutions:\n\n$$\\begin{aligned}Yx+Ey+Az+Rw&=Y,\\\\Rx+Yy+Ez+Aw&=E,\\\\Ax+Ry+Yz+Ew&=A,\\\\Ex+Ay+Rz+Yw&=R.\\end{aligned}$$\n\nDetermine all very good years from 2001 through 2100, inclusive (the 21st century).",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2019 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Ketaksamaan integral",
    "prompt": "Suppose $f:(-1,1)\\to\\mathbb R$ is twice differentiable with\n\n$$2f'(x)+xf''(x)\\ge1\\quad\\text{for }x\\in(-1,1).$$\n\n Establish $$\\int_{-1}^{1}xf(x)\\,dx\\ge\\frac13.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2019 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Integrality barisan rekursif",
    "prompt": "Construct $a_0,a_1,\\ldots$ using\n\n$$a_0=1,\\quad a_1=2,\\quad (n+3)a_{n+2}=(6n+9)a_{n+1}-na_n\\quad\\text{for }n\\ge0.$$ Prove integrality of every term.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2019 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-05",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Identitas matriks dan komutativitas",
    "prompt": "Can an odd positive integer $n$ and integer-entry $n\\times n$ matrices $A,B$ satisfy all three requirements?\n\n1. $\\det(B)=1$;\n2. $AB=BA$;\n3. $A^4+4A^2B^2+16B^4=2019I$.\n\nHere $I$ is the identity matrix of size $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2019 — Hari 1, Nomor 5",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Turunan dan kekontinuan",
    "prompt": "Suppose $f,g:\\mathbb R\\to\\mathbb R$ are continuous, with $g$ differentiable, and $(f(0)-g'(0))(g'(1)-f(1))>0$. Establish existence of $c\\in(0,1)$ satisfying $f(c)=g'(c)$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2019 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Konvergensi deret dan faktorial",
    "prompt": "Let $C=\\{4,6,8,9,10,\\ldots\\}$ consist of positive composite integers. For $n\\in C$, define $a_n$ as the least positive $k$ with $n\\mid k!$. Decide convergence of $$\\sum_{n\\in C}\\left(\\frac{a_n}{n}\\right)^n.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2019 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-08",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pencacahan himpunan bagian dengan jumlah sama",
    "prompt": "For real $x_1,\\ldots,x_n$, assign $s(I)=\\sum_{i\\in I}x_i$ to each subset $I\\subset\\{1,2,\\ldots,n\\}$. If the $2^n$ subsets yield at least $1.8^n$ distinct sums, establish that at most $1.7^n$ subsets satisfy $s(I)=2019$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2019 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "imc-2019-09",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Persamaan matriks invertibel",
    "prompt": "Determine all positive integers $n$ for which there exist $n\\times n$ real invertible matrices $A$ and $B$ that satisfy $AB-BA=B^2A$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2019 — Hari 2, Nomor 9",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_2_Questions.pdf",
      "note": "2026-11-25: short original statement verified against official PDF."
    }
  },
  {
    "id": "imc-2019-10",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Peluang selubung konveks",
    "prompt": "Sample 2019 points independently and uniformly from the unit disc $\\{(x,y)\\in\\mathbb R^2:x^2+y^2\\le1\\}$. Write $C$ for their convex hull. Compare the probabilities that $C$ has three vertices and that it has four vertices: which is greater?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2019 — Hari 2, Nomor 10",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_2_Questions.pdf",
      "note": "2026-11-25: official PDF compared; full wording replacement pending."
    }
  },
  {
    "id": "koala-2025-p1-01",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $\\pi=(1\\ 4\\ 3\\ 2)(5\\ 6\\ 7\\ 8)(6\\ 8\\ 1\\ 5)(4\\ 5\\ 7)\\in S_8$. Order dari $\\pi$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 1",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 1",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan matriks\n\n$$\\begin{pmatrix}0&1&0&0\\\\0&0&1&0\\\\0&0&0&1\\\\0&0&0&0\\end{pmatrix}$$\n\nmerupakan matriks representasi relatif terhadap basis standar dari transformasi linear $T:\\mathbb R^4\\to\\mathbb R^4$. Dimensi dari $\\operatorname{Ker}(T\\circ T)$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 2",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 2",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-03",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Banyaknya elemen nilpoten di ring $\\mathbb Z_{45}$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 3",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 3",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-04",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diketahui $\\mathbb R^3$ merupakan ruang vektor atas lapangan $\\mathbb R$ dan misalkan $T:\\mathbb R^3\\to\\mathbb R^3$ transformasi linear yang memenuhi $\\|T(v)\\|=\\|v\\|$ untuk setiap $v\\in\\mathbb R^3$. Banyaknya transformasi linear $T$ yang matriks representasi relatifnya terhadap basis standar mempunyai entri-entri bilangan bulat adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 4",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 4",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-05",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diberikan himpunan $A:=\\{f:f\\text{ fungsi dari }\\mathbb Z_5\\text{ ke }\\mathbb Z_{25}\\}$ yang merupakan ring terhadap operasi penjumlahan dan perkalian fungsi. Banyaknya elemen nilpoten di ring $A$ adalah . . . .",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 5",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 5",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-06",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Order dari $\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$ sebagai elemen dari grup $GL_2(\\mathbb Z_{23})$ adalah . . . .",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 6",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 6",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-07",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $\\phi$ adalah homomorpisma grup dari $\\mathbb Z_{30}$ ke $\\mathbb Z_6$ sehingga $\\operatorname{Ker}(\\phi)=\\{0,6,12,18,24\\}$ dengan $\\phi(1)\\ne1$. Hasil dari $\\phi(1)$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 7",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 7",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diberikan ruang vektor $\\mathbb R[x]$ atas $\\mathbb R$. Misalkan $T:\\mathbb R[x]\\to\\mathbb R[x]$ merupakan transformasi linear dengan definisi $T(P(x))=x^3P(x)-P(x^2)$ untuk setiap $P(x)\\in\\mathbb R[x]$. Dimensi dari $\\operatorname{Ker}(T)$ adalah . . . .",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 8",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 8",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-09",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $M_5(\\mathbb R)$ adalah ruang vektor semua matriks dengan entri real yang berukuran $5\\times5$ atas lapangan $\\mathbb R$ dan $A\\in M_5(\\mathbb R)$. Misalkan juga $T:M_5(\\mathbb R)\\to M_5(\\mathbb R)$ adalah transformasi linear yang memenuhi $T(X)=AX-XA$ untuk setiap $X\\in M_5(\\mathbb R)$. Jika $p$ dan $q$ berturut-turut menyatakan nilai minimum dan nilai maksimum yang mungkin dari $\\operatorname{rank}(T)$, maka nilai dari $p+q$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 9",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 9",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-10",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diberikan matriks\n\n$$S=\\begin{pmatrix}1&11&111&1111\\\\11&111&1111&11111\\\\111&1111&11111&111111\\\\1111&11111&111111&1111111\\end{pmatrix}\\in M_{4\\times4}(\\mathbb R).$$\n\nBanyaknya entri tak nol pada bentuk eselon baris tereduksi dari $S$ adalah . . . .",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 10",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 10",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-11",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Jika $A=\\begin{pmatrix}1&3&2\\\\2&1&3\\\\3&2&1\\end{pmatrix}$ dan $v\\in\\mathbb R^3$ dengan $v\\ne\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}$, maka nilai maksimum dari $\\dfrac{\\|Av\\|}{\\|v\\|}$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 11",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 11",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-12",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $A$ adalah matriks berukuran $5\\times5$ dengan $A_{ij}=1+|i-j|$ untuk setiap $i,j\\in\\{1,2,3,4,5\\}$. Nilai dari $\\det(A)$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 12",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 12",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-13",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Elemen $x$ dari ring $R$ dikatakan tripoten jika memenuhi $x^3=x$. Banyaknya elemen tripoten di ring $\\mathbb Z_{216}$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 13",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 13",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-14",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $S_5$ adalah grup semua permutasi dari himpunan $T=\\{1,2,3,4,5\\}$. Pasangan $(i,j)\\in T\\times T$ disebut inversi dari permutasi $\\sigma\\in S_5$ jika memenuhi $\\sigma^{-1}(i)<\\sigma^{-1}(j)$ dan $i>j$. Banyaknya elemen dari $S_5$ yang memiliki setidaknya 5 inversi adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 14",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 14",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-15",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $\\mathcal H$ adalah himpunan matriks $2\\times2$ dengan entri-entrinya saling berbeda dan merupakan anggota himpunan $\\{1,2,3,4\\}$. Nilai dari\n\n$$\\sum_{M\\in\\mathcal H}\\det(M)$$\n\nadalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 15",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 15",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-16",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $a,b,c\\in\\mathbb R$ yang memenuhi $a^2+b^2+c^2=9$. Misalkan juga $m$ dan $n$ berturut-turut menyatakan nilai maksimum dan minimum determinan matriks\n\n$$C=\\begin{pmatrix}a+b&b+c&c+a\\\\c+a&a+b&b+c\\\\b+c&c+a&a+b\\end{pmatrix}.$$\n\nNilai dari $m-n$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 16",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 16",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-17",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $GL_3(\\mathbb Z_4)$ adalah grup semua matriks invertibel berukuran $3\\times3$ dengan entri elemen dari ring $\\mathbb Z_4$ (dengan operasi perkalian matriks pada umumnya). Jika kardinalitas dari $GL_3(\\mathbb Z_4)$ adalah $2^a\\cdot b$ untuk suatu bilangan asli $a$ dan $b$ dengan $b$ ganjil, maka nilai dari $a+b$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 17",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 17",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-18",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Jika banyaknya polinomial monik tak tereduksi dengan derajat 9 dan koefisien elemen dari ring $\\mathbb Z_4$ adalah $2^a\\cdot b$ untuk suatu bilangan asli $a$ dan $b$ dengan $b$ ganjil, maka nilai dari $a+b$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 18",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 18",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-19",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Banyaknya bilangan asli $n\\le2025$ sedemikian sehingga ring $\\mathbb Z_n$ memiliki subring yang isomorfis dengan $\\mathbb Z_2$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 19",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 19",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p1-20",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diberikan grup $G$ dan $a,b,c\\in G$ yang memenuhi $G=\\langle a,b,c\\rangle$ dan $abab=caca^{-1}=cbcb^{-1}=a^4=b^2=c^3=e$ dengan $e$ merupakan elemen identitas di grup $G$. Nilai maksimal dari $|G|$ adalah . . ..",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi I, Nomor 20",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi I",
      "number": "Nomor 20",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 1.pdf, page 3; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p2-01",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Aljabar Linear",
    "prompt": "Misalkan matriks $A$ berukuran $n\\times n$ dengan $n\\ge3$. Jika rank dari $A$ adalah $n-2$, maka tentukan rank dari adjoint dari matriks $A$.\n\nCatatan: Untuk matriks $A$ berukuran $n\\times n$, $M_{ij}$ menyatakan determinan matriks yang diperoleh dengan cara menghilangkan baris ke-$i$ dan kolom ke-$j$ dari matriks $A$. Selanjutnya dibentuk matriks $K$ dengan $(K)_{ij}=(-1)^{i+j}M_{ij}$. Tranpose dari matriks $K$ disebut adjoint dari matriks $A$.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi II, Nomor 1",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi II",
      "number": "Nomor 1",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 2.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p2-02",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Struktur Aljabar",
    "prompt": "Diketahui $G$ grup siklik dengan $|G|=p^2q^2$ dengan $p,q$ bilangan prima berbeda. Selanjutnya didefinisikan himpunan $S\\subseteq G$ dengan\n\n$$S=\\{x\\in G\\mid \\circ(x)=p^2\\text{ atau }\\circ(x)=q^2\\}$$\n\n(a) Tentukan $|S|$, banyaknya anggota himpunan $S$.\n\n(b) Buktikan bahwa $\\langle S\\rangle=G$.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi II, Nomor 2",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi II",
      "number": "Nomor 2",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 2.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p2-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $n\\in\\mathbb N$ dengan $n>1$ dan $v_1,v_2,\\ldots,v_n\\in\\mathbb R^n$. Misalkan juga $A$ adalah matriks berukuran $n\\times n$ dengan $(A)_{ij}=v_j^Tv_i$ untuk setiap $i,j\\in\\{1,2,\\ldots,n\\}$ dan $\\lambda^n+u_1\\lambda^{n-1}+u_2\\lambda^{n-2}+\\ldots+u_{n-2}\\lambda^2+u_{n-1}\\lambda+u_n$ adalah polinomial karakteristik dari $A$ dalam $\\lambda$. Untuk setiap $k\\in\\{1,2,\\ldots,n\\}$, buktikan bahwa $u_k\\le0$ jika $k$ ganjil dan $u_k\\ge0$ jika $k$ genap.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi II, Nomor 3",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi II",
      "number": "Nomor 3",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 2.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-p2-04",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $R$ adalah ring dengan sifat: untuk setiap $r\\in R$ dengan $rRr=\\{0_R\\}$, berlaku $r=0_R$. Jika $u,v,w\\in R$ memenuhi $urv+vrw=0_R$ untuk setiap $r\\in R$, buktikan bahwa $(u+w)rv=vr(u+w)=0_R$ untuk setiap $r\\in R$.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Penyisihan Sesi II, Nomor 4",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Penyisihan Sesi II",
      "number": "Nomor 4",
      "url": "https://math.fmipa.ugm.ac.id/id/babak-penyisihan-kompetisi-aljabar-mahasiswa-koala-2025-tingkat-perguruan-tinggi-digelar-secara-daring/",
      "note": "User-supplied University Challange ZIP: KOALA/Soal Sesi 2.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-final-01",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Struktur Aljabar",
    "prompt": "Suatu ring $R$ dikatakan lokal jika $R$ mempunyai tepat satu ideal maksimal. Diberikan ring komutatif $R$ dengan elemen identitas. Buktikan bahwa $R$ ring lokal jika dan hanya jika himpunan semua elemen bukan unit merupakan ideal.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Final, Nomor 1",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 1",
      "url": "https://math.fmipa.ugm.ac.id/id/dominasi-total-tim-ugm-borong-4-emas-di-ajang-perdana-koala-2025/",
      "note": "User-supplied University Challange ZIP: KOALA/final koala.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-final-02",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Struktur Aljabar",
    "prompt": "Diberikan grup $G$ dengan sifat $Z(\\operatorname{Aut}(G))$ merupakan subgrup nontrivial dari $\\operatorname{Aut}(G)$.\n\n(a) Buktikan bahwa $Z(G)$ merupakan subgrup nontrivial dari $G$.\n\n(b) Buktikan bahwa terdapat homomorfisma nontrivial dari $G$ ke $Z(G)$.\n\nCatatan: Untuk grup $H$, $\\operatorname{Aut}(H)=\\{f:H\\longrightarrow H\\mid f\\text{ isomorfisma grup}\\}$, grup terhadap komposisi fungsi, dan $Z(H)=\\{x\\in H\\mid xh=hx\\text{ untuk setiap }h\\in H\\}$.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Final, Nomor 2",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 2",
      "url": "https://math.fmipa.ugm.ac.id/id/dominasi-total-tim-ugm-borong-4-emas-di-ajang-perdana-koala-2025/",
      "note": "User-supplied University Challange ZIP: KOALA/final koala.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-final-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Aljabar Linear",
    "prompt": "Diberikan ruang vektor $V$ atas lapangan $F$ dan transformasi linear $T:V\\to V$.\n\n(a) Jika $\\{x_1,x_2,\\ldots,x_{2^k}\\}\\subseteq V$ serta berlaku $T^m(x_m)\\ne0$ dan $T^{2m}(x_m)=0$ untuk setiap $m$ dengan $1\\le m\\le2^k$, tunjukkan bahwa $\\{x_1,x_2,x_4,\\ldots,x_{2^k}\\}$ merupakan himpunan bebas linear.\n\n(b) Jika $V$ berdimensi hingga, tunjukkan bahwa ada bilangan bulat positif $m$ sedemikian sehingga $\\ker(T^m)\\cap\\operatorname{Im}(T^m)=\\{0\\}$.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Final, Nomor 3",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 3",
      "url": "https://math.fmipa.ugm.ac.id/id/dominasi-total-tim-ugm-borong-4-emas-di-ajang-perdana-koala-2025/",
      "note": "User-supplied University Challange ZIP: KOALA/final koala.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "koala-2025-final-04",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $A$ dan $B$ adalah matriks-matriks berukuran $3\\times3$ dengan entri real yang memenuhi $A^2B+BA^2=2ABA$. Buktikan bahwa $(AB-BA)^3=O_3$ dengan $O_3$ adalah matriks berukuran $3\\times3$ yang setiap entrinya bernilai 0.",
    "source": {
      "kind": "competition",
      "label": "KOALA 2025 — Final, Nomor 4",
      "competition": "KOALA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 4",
      "url": "https://math.fmipa.ugm.ac.id/id/dominasi-total-tim-ugm-borong-4-emas-di-ajang-perdana-koala-2025/",
      "note": "User-supplied University Challange ZIP: KOALA/final koala.pdf, page 2; public URL documents competition, not the exam PDF."
    }
  },
  {
    "id": "ktom-2023-nov-a-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyaknya bilangan 3 digit yang merupakan bilangan kuadrat sempurna serta jumlah digit-digitnya kurang dari 10.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Jika diketahui $x+\\frac1y=11$ dan $x^2+\\frac1{y^2}=65$, maka $xy+\\frac1{xy}=\\frac mn$ di mana $m$ dan $n$ adalah bilangan asli yang relatif prima. Tentukan nilai dari $m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Andi bermain dengan melempar sebuah dadu adil bersisi enam yang dilabeli angka-angka $1,2,3,4,5,6$ secara berulang. Ia dinyatakan kalah ketika angka yang muncul pada suatu pelemparan sama dengan angka yang muncul pada satu pelemparan sebelumnya. Jika peluang Andi belum kalah setelah 4 kali pelemparan adalah $\\frac mn$, di mana $m$ dan $n$ adalah bilangan asli yang relatif prima, tentukan nilai dari $m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan sebuah persegi $ABCD$ dengan titik $P$ dan $Q$ berturut-turut di dalam segmen $AB$ dan $CD$, sedangkan $M$ adalah titik tengah $BC$. Jika diketahui bahwa\n\n$$[PBM]:[QCM]:[APQD]=1:2:3$$\n\nmaka $[PMQ]:[ABCD]=m:n$, di mana $m$ dan $n$ adalah bilangan asli yang relatif prima. Tentukan nilai dari $m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan sebuah sistem persamaan dengan $x,y\\in\\mathbb R$\n\n$$\\begin{aligned}x^4+3x&=y^4+y\\\\x^2-y^2&=2\\end{aligned}$$\n\nJika jumlah semua $x$ yang memenuhi adalah $S$, tentukan nilai dari $\\lfloor|S|\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segilima beraturan $ABCDE$. Titik $F$ terletak di dalam segmen $AB$ sehingga $AC=AE+AF$. Tentukan besar sudut $\\angle ACF$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-07",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Untuk setiap bilangan asli $N$, definisikan $f(N)$ sebagai bilangan kuadrat terdekat dengan $N$. Sebagai contoh, $f(4)=4$, $f(6)=4$ (karena $|6-4|=2<3=|6-9|$), dan $f(7)=9$. Tentukan banyaknya bilangan asli $N\\le400$ yang memenuhi $\\gcd(f(N),N)=1$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-08",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Dalam negeri fantasi KTOM, jam tidur seseorang pada suatu malam diukur dengan sebuah bilangan bulat dari 0 sampai 20. Total jam tidur malam minimal dalam 4 malam berturut-turut yang direkomendasikan oleh dokter adalah 20 jam. Ariel ingin memenuhi target tepat 20 jam tidur dalam 4 malam. Ariel bisa mengendalikan jam tidurnya sesuka hati namun dengan syarat berikut: jika ia sudah tertidur lebih dari 1 jam, ia pasti akan tertidur pulas dan mencapai jam tidur setidaknya 4 jam. Tentukan banyaknya cara ia dapat mengatur jam tidurnya dalam 4 malam tersebut.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan sebuah polinom $P(x)=x^3-3x-1$ yang memiliki akar-akar kompleks berbeda $a,b,c$. Tentukan nilai dari\n\n$$\\left|\\frac{a}{b(a+b)}+\\frac{b}{c(b+c)}+\\frac{c}{a(c+a)}\\right|.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-a-10",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Diberikan fungsi $\\Omega(n)$ yang menyatakan hasil penjumlahan dari eksponen-eksponen setiap prima dalam faktorisasi prima $n$, di mana $n$ bilangan asli (dengan kata lain, $\\Omega(n)=\\sum_{p\\text{ prima}}v_p(n)$), dan $\\Omega(1)=0$. Sebagai contoh, $\\Omega(30)=3$ dan $\\Omega(48)=5$. Tentukan nilai dari\n\n$$S=\\sum_{n=1}^{2023}(-1)^{\\Omega(n)}\\left\\lfloor\\frac{2023}{n}\\right\\rfloor.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-b-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Diberikan segitiga lancip $ABC$ dengan $H$ merupakan perpotongan ketiga garis tingginya. Misalkan $D$ dan $E$ sedemikian sehingga $BCAE$ dan $BCHD$ keduanya jajar genjang. Tunjukkan bahwa $\\angle EDH=\\angle EBH=90^\\circ$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-nov-b-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Kombinatorika",
    "prompt": "Diberikan sebuah himpunan $S=\\{1,2,3,...,9\\}$. Tentukan nilai $n$ terkecil sehingga, untuk setiap $n$ himpunan bagian berbeda $A_1,A_2,...,A_n$ masing-masing berisikan 3 anggota, selalu terdapat dua bilangan berbeda $p,q\\in S$ dan dua indeks $i,j\\in\\{1,2,...,n\\}$ sehingga $\\{p,q\\}$ adalah subhimpunan dari $A_i$ dan $A_j$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — November, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 1",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: 12. KTOM November 2023.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-dec-b-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Diberikan suatu barisan bilangan asli $a_1,a_2,\\ldots,a_n$, di mana $n\\ge3$ dan $0<a_{i+1}-a_i<a_{j+1}-a_j$ untuk setiap $1\\le i<j\\le n-1$. Misalkan $b_k=\\frac{a_{k+1}-a_k}{k}$ untuk setiap $1\\le k\\le n-1$. Jika $b_1<b_2<\\cdots<b_{n-1}$, buktikan bahwa $a_{k+1}-a_k\\ge k+1$ untuk setiap $2\\le k\\le n-1$ dan tentukan kapan kesamaan terjadi.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — Desember, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 2",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM Desember 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-dec-b-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Kombinatorika",
    "prompt": "Pada papan tulis tertulis semua bilangan asli dari 1 sampai 15. Buktikan bahwa, jika Budi menghapus sembarang 4 bilangan dari papan, ia pasti masih dapat menemukan 3 bilangan berbeda di papan yang hasil kalinya merupakan bilangan kuadrat sempurna.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — Desember, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 2",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM Desember 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-dec-b-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Untuk sembarang bilangan asli $x$ dengan $3\\le x\\le2023$, misalkan $D(x)$ menyatakan banyaknya bilangan asli $y$ sehingga $x+y+1\\mid xy-x-1$. Tentukan nilai maksimum dari $D(x)$ dan nilai $x$ saat $D(x)$ mencapai maksimum.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — Desember, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 2",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM Desember 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2023-dec-b-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Diberikan segitiga lancip $\\triangle ABC$ dengan $\\angle ABC>\\angle BCA$. Misalkan $O$ adalah titik pusat lingkaran luar $\\triangle ABC$, dan $AO$ memotong $BC$ di $P$. Titik $D$ adalah kaki tinggi dari $A$ ke $BC$, dan $D'$ adalah titik di segmen $BC$ sehingga $BD=CD'$. Misalkan lingkaran luar $\\triangle BOC$ dan $\\triangle OPD'$ berpotongan untuk yang kedua kalinya di titik $Q$ ($Q\\ne O$). Misalkan pula $R$ adalah titik di sinar garis $\\overrightarrow{BC}$ sehingga $\\angle ARB=\\angle QD'C$. Buktikan bahwa $RO$ melalui titik tengah $AD$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2023 — Desember, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2023,
      "stage": "Kontes Akhir Tahun Babak 2",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM Desember 2023.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Carilah banyak cara menyusun kata $SURABAYA$ sehingga tidak ada dua huruf $A$ yang bersebelahan.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Tentukan bilangan asli $M$ terkecil sehingga\n\n$$1+2+\\cdots+M\\ge10000.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan jumlah seluruh bilangan asli $n$ sehingga $n^2+8n+151$ merupakan bilangan kuadrat sempurna.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan persegi $ABCD$ dengan panjang sisi 12. Lingkaran $\\omega$ terletak di dalam persegi $ABCD$ yang menyinggung keempat sisi $ABCD$. Terdapat persegi $EFGH$ sehingga $E,F,G,H$ semua terletak di $\\omega$ dan $A,B,C,D$ terletak di garis $EF,FG,GH,HE$ berturut-turut. Jika keliling dari segitiga $ABF$ dapat dinyatakan sebagai $m+\\sqrt n$ untuk bilangan asli $m$ dan $n$, tentukan nilai dari $m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Sebuah polinomial $P$ dengan koefisien bilangan bulat taknegatif memenuhi $P(1)=24$ dan $P(9)=2024$. Tentukan nilai dari $P(5)$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan panjang sisi-sisi $AB=13$, $BC=14$, dan $CA=15$. Diberikan titik $P$ di dalam segitiga $ABC$ sehingga jarak titik $P$ ke garis $AB,BC,CA$ berturut-turut adalah $x,y,z$. Jika diketahui bahwa $x,y,z$ merupakan bilangan bulat positif, tentukan nilai minimal yang mungkin dari $xyz$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-07",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyaknya bilangan bulat positif $b\\leqslant1000$ sehingga terdapat bilangan bulat positif $a$ dan $c$ sedemikian sehingga\n\n$$\\operatorname{FPB}(a,b)+\\operatorname{KPK}(b,c)=\\operatorname{KPK}(c,a)^3.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-08",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui pada segitiga $\\triangle ABC$ terdapat titik-titik $D,E,F$ pada ruas garis $BC$ secara terurut sehingga $AD,AE$, dan $AF$ membagi $\\angle BAC$ menjadi empat sudut yang sama. Jika $BD+EF=7$, $DE+FC=11$, dan $AB:AC=1:2$, tentukan nilai dari $AB^2+AC^2$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Misalkan $x,y,z$ adalah bilangan real positif sehingga $x+yz=13$ dan $x+y+z=10$. Tentukan nilai maksimal dari\n\n$$\\lfloor y+xz\\rfloor+\\lfloor z+xy\\rfloor.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-10",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Misalkan $(p_1,q_1),(p_2,q_2),\\ldots,(p_k,q_k)$ merupakan semua pasangan terurut bilangan prima $(p,q)$ sehingga terdapat bilangan asli $m$ dan $n$ yang memenuhi\n\n$$(p_i-q_i)^m=(p_i+q_i)^n.$$\n\nTentukan nilai dari\n\n$$p_1+q_1+p_2+q_2+\\cdots+p_k+q_k.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-11",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Diberikan himpunan enam elemen $S$, tentukan banyaknya fungsi bijeksi $f:S\\to S$ sehingga memenuhi\n\n$$f(f(f(x)))=f^{-1}(x)$$\n\nuntuk setiap $x\\in S$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 11",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 11",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-12",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Terletak 1001 titik berbeda pada satu lingkaran yang akan diwarnai dengan $k$ warna. Dua segmen dikatakan berteman jika mereka berpotongan di dalam lingkaran. Diketahui bahwa untuk setiap 5 segmen yang saling berteman di mana kesepuluh titik ujung nya merupakan sepuluh titik berbeda pada lingkaran, terdapat setidaknya 3 segmen sehingga kedua ujung segmen memiliki warna yang berbeda. Tentukan nilai minimum yang mungkin dari $k$ sehingga pewarnaan ini mungkin.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 12",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 12",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-13",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan nilai dari $a+b$ terkecil jika $a>b$ merupakan bilangan bulat positif dan koefisien binomial $\\binom ab$ merupakan kelipatan 1000.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 13",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 13",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-a-14",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Misalkan seluruh bilangan real positif $k$ sehingga persamaan\n\n$$\\lfloor x\\rfloor(x-\\lfloor x\\rfloor)=kx$$\n\nmemiliki tepat 24 solusi real $x$ adalah interval $a\\le k<b$. Tentukan nilai dari $\\left\\lceil\\frac1{b-a}\\right\\rceil$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian A, Nomor 14",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian A, Nomor 14",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (1).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-b-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Kombinatorika",
    "prompt": "Diberikan bilangan-bilangan $1,2,3,\\ldots,2025$ yang tertulis pada papan, urut dari kiri ke kanan. Mulai dari kiri ke kanan, Hopps menghapus bilangan yang ada pada urutan ketiga (jadi menghapus bilangan ketiga, keenam, kesembilan, dan seterusnya). Jika Hopps sudah menghapus sampai ujung, maka Hopps melakukan penghapusan bilangan lagi dimulai dari bilangan paling kiri dengan cara yang sama.\n\nJika Hopps berhenti menghapus bilangan-bilangan pada papan ketika dia sudah menghapus bilangan 67, tentukan jumlah tiga bilangan terbesar yang tersisa di papan.\n\nInilah contoh penghapusan yang dilakukan oleh Hopps untuk $1,2,3,4,5,6,7$:\n\n$$1,2,3,4,5,6,7\\to1,2,4,5,6,7\\to1,2,4,5,7\\to1,2,5,7\\to1,2,7\\to1,2$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (2).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-b-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Untuk setiap bilangan asli $n$, buktikan bahwa\n\n$$\\left\\lfloor\\frac{3n^2+2n}{4}\\right\\rfloor\\leqslant\\left\\lfloor\\frac n1\\right\\rfloor+2\\left\\lfloor\\frac n2\\right\\rfloor+3\\left\\lfloor\\frac n3\\right\\rfloor+\\cdots+n\\left\\lfloor\\frac nn\\right\\rfloor\\leqslant n^2.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (2).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-b-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Misalkan $\\mathbb N$ menyatakan himpunan seluruh bilangan bulat positif. Tentukan seluruh fungsi $f:\\mathbb N\\to\\mathbb N$ sehingga untuk seluruh bilangan asli $a$ dan $b$,\n\n$$f(a)+f(b)\\qquad\\text{habis membagi}\\qquad af(a)-bf(b).$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (2).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2025-dec-b-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Misalkan $\\Omega$ and $\\Gamma$ adalah lingkaran yang berpusat berturut-turut di $M$ dan $N$ sehingga panjang jari-jari lingkaran $\\Omega$ kurang dari panjang jari-jari lingkaran $\\Gamma$. Misalkan $\\Omega$ dan $\\Gamma$ berpotongan pada dua titik berbeda $A$ and $B$. Garis $MN$ memotong $\\Omega$ di $C$ dan $\\Gamma$ di $D$, sehingga titik $C,M,N,D$ terletak pada garis $MN$ dengan urutan tersebut. Misalkan $E$ dan $F$ adalah titik sehingga $CE$ adalah diameter $\\Omega$ dan $DF$ adalah diameter $\\Gamma$. Misalkan $X$ adalah titik pada segmen $AB$. Misalkan $EX$ dan $FX$ memotong $\\Omega$ dan $\\Gamma$ lagi di $Y\\ne E$ dan $Z\\ne F$. Misalkan $CX$ dan $DX$ memotong $\\Omega$ dan $\\Gamma$ lagi di $Q\\ne C$ dan $P\\ne D$.\n\nTunjukkan bahwa terdapat suatu titik $T$ sehingga $T$ dilewati $YZ,PQ,CD$, serta $TA$ menyinggung lingkaran luar $ACD$ dan lingkaran luar $AEF$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2025 — Desember, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2025,
      "stage": "Kontes Akhir Tahun",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (2).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan bilangan asli $n$ terbesar sehingga $3^n$ habis membagi 999999999 (ada 9 digit).",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Misalkan $O$ adalah titik pusat lingkaran luar dari segitiga $ABC$. Titik $D$ terletak pada $\\overline{AC}$ sehingga garis $BD$ adalah garis bagi dalam $\\angle ABC$. Jika $\\angle BOC=\\angle BDC$ dan $\\angle BCA=60^\\circ$, berapakah besar $\\angle BAC$ dalam satuan derajat?",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Tentukanlah banyak bilangan lima-digit yang digit-digitnya hanya terdiri dari 1, 2, dan 3, dengan setiap digit termuat setidaknya sekali (sebagai contoh, bilangan 21232 memenuhi soal, namun 33223 dan 12343 tidak memenuhi soal).",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diketahui bilangan riil $a,b,c,d$ yang tak nol sehingga barisan bilangan $ab,2bc,3cd,4da$ membentuk barisan geometrik. Tentukan nilai dari $\\left\\lfloor32\\left(\\frac ac+\\frac bd\\right)^2\\right\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Di depan pintu sebuah lift, ada tombol naik dan tombol turun. Karena lift sudah tua, lift akan rusak setelah menekan salah satu tombol 5 kali (tidak harus berturut-turut). Tentukan berapa banyak rangkaian penekanan tombol yang akan membuat lift rusak tepat setelah penekanan terakhir.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyak nilai $n$ asli yang mungkin sehingga persamaan $x^2-nx-20^{22}=0$ memiliki solusi bulat.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-07",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan $a,b$, dan $c$ di mana $a\\ne b\\ne c\\ne a$ memenuhi sistem persamaan\n\n$$\\begin{aligned}a^3+b^3&=c^2\\\\b^3+c^3&=a^2\\\\c^3+a^3&=b^2.\\end{aligned}$$\n\nTentukan nilai $100\\cdot abc$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-08",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan perbandingan ketiga garis tingginya adalah $10:12:15$ dan perbandingan luas dengan kelilingnya adalah $7:3$. Misalkan $R$ dan $r$ adalah panjang jari-jari lingkaran luar dan lingkaran dalam segitiga $ABC$ berturut-turut. Jika nilai dari $R+r$ dapat dinyatakan dalam bentuk $\\frac mn$ dengan $m,n$ relatif prima, maka tentukan $10m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-09",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Misalkan $N$ adalah banyaknya pasangan terurut himpunan $A$ dan $B$ yang memenuhi:\n\n• $A\\cup B=\\{1,2,3,4,5,6,7,8,9,10\\}$,\n\n• $A\\cap B=\\emptyset$,\n\n• $|A|$ bukan anggota $A$,\n\n• $|B|$ bukan anggota $B$.\n\nTentukan nilai $N$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-10",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan jumlah semua bilangan asli $n$ di mana $n\\ge3$ yang memenuhi $n!$ habis dibagi $n^{n-3}$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-11",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Misalkan $\\sqrt[6]{63\\sqrt[3]{20}-171}$ dapat dinyatakan dalam bentuk $\\sqrt[3]{x}+\\sqrt[3]{y}$ dengan $x,y$ adalah bilangan bulat. Tentukan nilai dari $x+y$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 11",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 11",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-12",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segiempat konveks $ABCD$. Diketahui bahwa $CD$ tegak lurus terhadap $AC$, $AB$ tegak lurus terhadap $BD$, $CD=130$, dan $AB=56$. Titik $E$ adalah proyeksi titik $B$ terhadap $AD$. Jika $BE$ memotong $AC$ di $O$ dengan $AO=16$ serta $CO=x$, tentukan $\\lfloor x\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 12",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 12",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-13",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Tentukan banyaknya kuadrupel bilangan asli terurut $(a,b,c,d)$ yang memenuhi persamaan\n\n$$a+2b+3c+4d=420.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 13",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 13",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-14",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan dua buah fungsi $f,g:\\mathbb R\\to\\mathbb R$. Kita katakan pasangan fungsi $(f,g)$ mengkomi apabila\n\n$$xg(x)+g(f(x)f(y))=|f(g(y))|+f(x)^2$$\n\nuntuk sembarang bilangan riil $x,y\\in\\mathbb R$. Definisikan sebuah himpunan $\\mathcal H$ sehingga\n\n$$\\mathcal H=\\left\\{h:\\mathbb R\\to\\mathbb R\\ \\middle|\\ \\begin{array}{l}\\text{terdapat finit (setidaknya satu) buah fungsi}\\\\ f:\\mathbb R\\to\\mathbb R\\text{ sehingga }(f,h)\\text{ mengkomi}\\end{array}\\right\\}$$\n\nTentukan nilai dari\n\n$$\\max_{h\\in\\mathcal H}\\sum_{(f,h)\\text{ mengkomi}} f(2022)$$\n\nCatatan: Jawab 9999 apabila $\\mathcal H$ merupakan himpunan kosong.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 14",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 14",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-15",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ di mana panjang $\\overline{AB}=5,\\overline{BC}=7$, dan $\\overline{CA}=8$. Titik $D$ terletak pada lingkaran luar segitiga $ABC$ sedemikian sehingga $AD$ berpotongan tegak lurus dengan $BC$ di titik $W$. Garis $AB$ memotong lingkaran luar segitiga $BWD$ sekali lagi di titik $X$. Garis $WX$ memotong lingkaran luar segitiga $CWD$ di titik $Y$ di mana $Y\\ne W$. Panjang $AY$ dapat dinyatakan dalam bentuk $\\frac ab$ di mana $a$ dan $b$ keduanya bilangan asli yang relatif prima. Tentukan nilai dari $a+b$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 15",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 15",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-a-16",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyaknya bilangan asli $n$ yang memenuhi\n\n$$\\left\\lfloor\\frac n3\\right\\rfloor+2=\\left\\lfloor\\frac n8\\right\\rfloor+\\left\\lfloor\\frac n9\\right\\rfloor+\\left\\lfloor\\frac n{10}\\right\\rfloor.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian A, Nomor 16",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian A, Nomor 16",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-b-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Diberikan sebuah persamaan\n\n$$(n+1)^a+(n+2)ab=(n+3)^b$$\n\ndengan $a,b$ bilangan bulat nonnegatif sehingga memenuhi untuk setiap bilangan asli $n$.\n\n(a) Buktikan jika salah satu dari $a$ atau $b$ bernilai 0, maka $a=b=0$.\n\n(b) Untuk $a,b$ bilangan asli, tinjau $n=2$, buktikan bahwa $a$ dan $b$ keduanya bilangan genap.\n\n(c) Berdasarkan bagian (b), misalkan $a=2x$ dan $b=2y$ dengan $x,y$ bilangan asli, buktikan bahwa $x\\le3$. (Petunjuk : $(5^y+3^x)(5^y-3^x)=16xy$)\n\n(d) Tentukan semua pasangan $(x,y)$ yang memenuhi untuk $n=2$.\n\n(e) Simpulkan semua pasangan $(a,b)$ yang memenuhi persamaan untuk setiap bilangan asli $n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-b-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Diberikan $a,b,c,d$ bilangan riil yang memenuhi $a+\\frac b2+\\frac c3+\\frac d4=k$ untuk suatu bilangan riil $k$. Apakah ada bilangan riil $k$ sehingga nilai minimal dari $|a|+|b|+|c|+|d|$ dapat tercapai oleh setidaknya dua buah pasangan bilangan riil $(a,b,c,d)$ yang berbeda?\n\nJika ada, tentukan nilai maksimal $k$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-b-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Kombinatorika",
    "prompt": "Terdapat $2n+1$ tim dalam sebuah turnamen, dan setiap dua tim dijadwalkan dalam tepat satu pertandingan pada waktu yang berbeda-beda. Setelah beberapa pertandingan, jika sebuah tim sudah kalah sebanyak $n$ kali, mereka akan tereliminasi dan tidak bertanding lagi. Tidak ada pertandingan yang berakhir seri, dan pertandingan yang belum dimulai akan dibatalkan jika salah satu tim tereliminasi.\n\n(a) Buktikan banyaknya pertandingan yang dimainkan selalu kurang dari $2n^2+n$.\n\n(b) Buktikan ada setidaknya $\\frac{3n^2+n}{2}$ pertandingan yang dimainkan.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2022-mar-b-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan $\\angle ABC$ sudut tumpul dan $AB\\ne BC$. Misalkan $\\omega$ adalah lingkaran luar $\\triangle ABC$ dan $O$ adalah titik pusatnya. Titik $N$ adalah titik tengah busur $ABC$. Lingkaran luar $\\triangle BON$ berpotongan dengan $AC$ di titik $X$ dan $Y$. Garis $BX$ dan $BY$ berpotongan dengan $\\omega$ untuk kedua kalinya di $P$ dan $Q$ berturut-turut. Jika $N'$ adalah pencerminan titik $N$ terhadap garis $AC$, buktikan bahwa $PQ$ menyinggung lingkaran luar $\\triangle XYN'$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2022 — Maret, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2022,
      "stage": "Kontes Maret",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM MARET 2022.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Selamat datang di KTOM November $\\overline{\\spadesuit\\circ\\star\\diamondsuit}$ ! Sebagai soal nomor $\\star$, kami ingin memberikan soal yang mudah. Sayang, komputer kami rusak sehingga semua tombol angka kami menghasilkan simbol. Tapi, kalian ialah murid-murid yang pintar, jadi kalian pasti dapat menyelesaikan soal ini! Selamat mengerjakan!\n\nJika $s(i)=i^{\\spadesuit}+\\diamondsuit i$, tentukan nilai dari $s(\\spadesuit)+s(\\spadesuit+\\star)+s(\\spadesuit+\\spadesuit)+\\ldots+s(\\overline{\\star\\circ})$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan $AB=14, BC=16, CA=18$. Titik $D$ terletak pada sisi $BC$ sedemikian hingga $AD$ adalah garis tinggi segitiga $ABC$. Apabila $M$ adalah titik tengah $AD$, tentukan nilai $BM^2$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Seorang pedagang kaki lima menjual eskrim 8 rasa dengan 5 toping berbeda. Jika Tendo ingin membeli eskrim dengan 1 macam toping, tentukan banyaknya kombinasi eskrim dan toping yang dapat dibeli Tendo.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Bilangan palindrom adalah bilangan yang jika dibaca dari depan ke belakang dan dari belakang ke depan adalah sama, sebagai contoh 1881, 13431, dan 284482 adalah bilangan palindrom. Bilangan dikatakan 11−indrom (Sebelasindrom) jika bilangan tersebut merupakan bilangan palindrom dan habis dibagi 11. Tentukan banyaknya bilangan 11−indrom 6−digit.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Terdapat dua buah dadu seimbang dengan delapan sisi. Pada setiap sisi dadu, dituliskan angka 1 hingga 8. Kedua dadu dilempar dan hasilnya dijumlahkan. Bila peluang jumlah kedua mata dadu adalah kelipatan 5 adalah $p$, tentukan nilai $128p$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyak bilangan asli $x\\le2018$ sehingga\n\n$$\\frac{x+2}{91}$$\n\nmerupakan pecahan yang tidak dapat disederhanakan lagi.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-07",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diketahui bilangan real $a,b,c$ memenuhi $a+2b+c=8$. Tentukan nilai $b$ sedemikian hingga $ab+bc+b^2$ mencapai nilai maksimum.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-08",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan layang-layang $ABCD$ dengan $\\angle ABC=\\angle ADC$. Lingkaran luar $\\triangle BCD$ memotong segmen $AD$ dan segmen $AB$ berturut-turut di $E$ dan $F$ sehingga $FE=ED=DC$. Jika $\\angle ADC=x^\\circ$ dan $\\angle BAD=y^\\circ$, maka tentukan nilai $\\frac{10x}{y}$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan $x$ dan $y$ merupakan bilangan real positif sehingga\n\n$$x^4+y^4+3(xy)^3=(xy)^5$$\n\nJika $V=\\sqrt[3]{\\frac xy}+\\sqrt[3]{\\frac yx}-\\sqrt{2+xy}$, tentukan nilai $\\lfloor20V^3+18\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-10",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan panjang $AB=6$. Titik $F$ pada $BC$ sehingga $AF$ adalah garis bagi $\\angle BAC$. $D$ adalah titik tengah segmen $BC$. Titik $E$ pada $AF$ sehingga $BE$ tegak lurus $AF$. Jika panjang $DE=2$, tentukan panjang garis $AC$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-11",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Diberikan barisan $\\{a_n\\}$ yang memenuhi\n\n$$a_n=n\\cdot2015^n+n^{2018}.$$\n\nuntuk setiap bilangan asli $n$. Tentukan nilai dari $FPB(a_1,a_2,\\ldots,a_{2018})$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 11",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 11",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-12",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Valen mewarnai dua buah persegi satuan dari sebuah papan berukuran $9\\times9$. Dua buah pewarnaan persegi dikatakan sama jika salah satu dari kedua pewarnaan tersebut merupakan hasil rotasi dari pewarnaan yang lain. Tentukan banyak cara berbeda Valen mewarnai papan.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 12",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 12",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-13",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan barisan bilangan $b_{n+1}=6b_n-4b_{n-1}, b_0=1$ dan $b_1=5$. Diketahui barisan bilangan tersebut dapat dinyatakan dalam bentuk $b_{n+1}=xb_n+\\lfloor\\sqrt{y}b_n\\rfloor$. Tentukan nilai dari $x+y$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 13",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 13",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-14",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Diketahui bahwa $V$ adalah bilangan real positif terkecil sedemikian hingga untuk setiap bilangan bulat positif $n$, pertidaksamaan berikut terpenuhi :\n\n$$FPB(n,\\lfloor n\\sqrt2\\rfloor)<\\sqrt{Vn}$$\n\nTentukanlah nilai dari $\\lceil100V\\rceil$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 14",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 14",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-15",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Misalkan $ABCD$ adalah segiempat talibusur dengan $AB=48, BC=75, CD=99, DA=180$. Diagonal $AC$ dan $BD$ berpotongan di $E$. $B_1,B_2,B_3,B_4$ adalah titik tengah dari $AE,BE,CE,DE$ secara berturut-turut. $G_1,G_2,G_3,G_4$ adalah titik berat dari segitiga $ABE,BCE,CDE,ADE$ secara berturut-turut. Tentukan luas dari segidelapan $B_1G_1B_2G_2B_3G_3B_4G_4$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 15",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 15",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-a-16",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Sebuah domino adalah persegi panjang berdimensi $1\\times2$. Tentukan banyaknya cara mewarnai sebuah kotak $8\\times8$ sedemikian hingga terdapat 16 domino berwarna hitam dan 32 persegi satuan berwarna putih sehingga setiap kotak $2\\times2$ mempunyai bagian putih yang berbentuk domino.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian A, Nomor 16",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian A, Nomor 16",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-b-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Misalkan $P(x)$ adalah polinomial berderajat 4 yang memenuhi\n\n$$P(1)=\\frac12,P(2)=\\frac16,P(3)=\\frac1{12},P(4)=\\frac1{20},P(5)=\\frac1{30}$$\n\n(a) Misalkan $Q(x)=x(x+1)P(x)-1$. Buktikan bahwa 1, 2, 3, 4 dan 5 adalah akar-akar dari $Q(x)$ serta $Q(x)$ merupakan polinomial berderajat 6.\n\n(b) Simpulkan bahwa\n\n$$x(x+1)P(x)-1=L(x)(x-1)(x-2)(x-3)(x-4)(x-5)$$\n\nuntuk suatu polinomial linear (berderajat 1) $L(x)$.\n\n(c) Tentukan polinomial $L(x)$ yang memenuhi persamaan pada nomor sebelumnya.\n\n(Petunjuk : Karena $P(x)$ merupakan polinomial, maka polinomial $x(x+1)$ harus membagi $L(x)(x-1)(x-2)(x-3)(x-4)(x-5)+1$. Gunakan fakta ini untuk menentukan $L(x)$).\n\n(d) Tentukan nilai $P(6)$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-b-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Saat upacara, 1234567 siswa di SMA Mantap berbaris. Orang yang berada di paling kiri memilih suatu bilangan prima, kemudian orang ke-2 dari kiri memilih bilangan prima yang lebih besar dari orang paling kiri. Selanjutnya, setiap orang memilih suatu bilangan prima yang lebih besar daripada bilangan prima orang disebelah kirinya. Lucas berdiri pada urutan 1234 dari kiri dan Jessen berdiri pada urutan 1235 dari kiri, Lucas menghitung FPB dari jumlah semua bilangan orang-orang disebelah kirinya dengan bilangan yang ia pilih kemudian menulis hasil tersebut di dahinya. Kemudian Jessen melakukan hal yang sama. Buktikan bahwa salah satu dari bilangan yang ada di dahi Jessen atau Lucas sama dengan 1.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-b-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Buktikan bahwa untuk setiap $n$ bilangan asli, berlaku\n\n$$\\sum_{0\\le j\\le i\\le n}\\frac{(-1)^j}{(n-i)!j!}=1.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-nov-b-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Diberikan suatu segitiga lancip $ABC$ dengan $AC>AB$, dan suatu titik $S$ di busur kecil $AB$ di lingkaran luar segitiga $ABC$. Misal refleksi $A$ terhadap $O$, titik pusat lingkaran luar segitiga $ABC$, adalah $A'$. $SA'$ memotong $BC$ di $P$, dan $PO$ memotong $AC$ di $Q$. Jika $H$ adalah titik tinggi segitiga $ABC$, buktikan bahwa $\\angle BSH=\\angle PQC$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — November, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes November",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM NOVEMBER 2018.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diketahui polinomial $x^2+20x+24$ memiliki akar $p$ dan $q$. Hasil penjumlahan dari semua akar $x^2+px+q$ dan $x^2+qx+p$ adalah ...",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan suatu persegi $ABCD$. Misalkan ada setengah lingkaran dengan diameter $CD$ yang dibuat ke arah luar persegi $ABCD$. Misalkan $E$ adalah titik tengah busur setengah lingkaran tersebut. Jika $AB=6$, tentukanlah luas $\\triangle BDE$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Dalam rangka merayakan tahun baru, Tommy menyalakan petasan putih, biru, kuning, dan hijau secara bersamaan. Jika peluang bahwa petasan terakhir yang meledak bukan petasan putih adalah $\\frac mn$, di mana $m$ dan $n$ adalah bilangan asli yang saling relatif prima, tentukan nilai dari $m+n$. (Asumsikan urutan ledakan 4 petasan tersebut terjadi secara acak dan dengan peluang yang setara, dan tidak ada dua petasan yang meledak secara bersamaan.)",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Diberikan sebuah bilangan asli $n$. Notasikan $f(n)$ sebagai banyaknya digit yang ada pada representasi desimal $n$. Sebagai contoh, $f(8)=1$ dan $f(20)=2$. Tentukan banyaknya bilangan asli $n<1000$ sehingga\n\n$$\\frac{f(1)+f(2)+\\cdots+f(n)}{n}$$\n\nmerupakan bilangan asli.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Bilangan $1,2,\\ldots,12$ ditulis di papan tulis, dengan setiap bilangan ditulis tepat sekali. Setiap menit, Kanade memilih dua bilangan yang tertulis di papan, sebutlah $a$ dan $b$, menghapus keduanya, dan menggantinya dengan $a+b-2$. Operasi ini dilakukan berulang-ulang hingga pada suatu saat hanya tersisa satu bilangan $K$. Tentukan nilai $K$ terkecil yang mungkin didapat Kanade.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Misalkan $f:\\mathbb Z\\to\\mathbb R_{>0}$ memenuhi $f(n)+f(10-n)=(5-n)^2+4$ untuk setiap $n$ bulat. Untuk setiap bilangan bulat $n\\le0$, berlaku pula $f(n)=2$. Tentukan bilangan asli terkecil $a$ agar $f(1)+f(2)+\\cdots+f(a)\\ge2024$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-07",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan trapesium siku-siku $ABCD$ dengan $AB\\parallel CD$ dan $DA\\perp AB$. Suatu lingkaran melewati $B,C$, dan menyinggung $AD$ di $E$ sehingga $CE$ membagi $\\angle BCD$ menjadi 2 bagian sama besar. Diketahui juga $BC=13, CD=3$, dan $DE=4$. Jika luas segiempat $ABCD$ dapat dinyatakan dalam bentuk $\\frac ab$, dengan $a$ dan $b$ adalah bilangan asli yang saling relatif prima, tentukan nilai $a+b$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-08",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyaknya pasangan bilangan asli $(a,b)$ yang memenuhi $a!=7^b+a^2+1$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Untuk setiap bilangan real $x\\ne1$, fungsi $f$ memenuhi\n\n$$f(x)=(1-x^{2024})^{-\\frac{1}{2024}}.$$\n\nJika $(\\underbrace{f(f(\\ldots(f(2024))\\ldots))}_{2024})^{2024}=\\frac ab$, di mana $a,b$ merupakan bilangan asli yang relatif prima, tentukan nilai dari $b-a$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-10",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Satu bidak gajah dan satu bidak benteng akan diletakkan pada 2 kotak berbeda di papan catur $8\\times8$. Sebuah gajah dapat menyerang semua kotak yang terletak pada arah diagonal dari posisinya (sejajar dengan salah satu dari kedua diagonal utama), dan sebuah benteng menyerang semua kotak yang terletak pada baris atau kolom yang sama dengan posisinya. Berapa banyak cara meletakkan dua bidak tersebut sehingga keduanya tidak saling menyerang?",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-11",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Sebuah bilangan asli $n$ memiliki faktor positif $d_1,d_2,\\ldots,d_{18}$, dengan $1=d_1<d_2<\\ldots<d_{18}=n$. Jika diketahui bahwa $d_7=20$ dan $d_{16}-d_3=601$, jumlah semua nilai $n$ yang mungkin adalah ...",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 11",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 11",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-12",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segiempat $ABCD$ yang terletak pada lingkaran $\\Gamma$. Diketahui bahwa jari-jari $\\Gamma$ adalah 5, dan $\\angle ABC=90^\\circ$. Misal $M$ adalah titik tengah $BD$, sehingga $AM=9$ dan $CM=3$. Tentukan luas dari $ABCD$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 12",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 12",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-13",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Untuk bilangan riil positif $a,b$, dan $c$, definisikan $K$ sebagai berikut:\n\n$$K=\\frac1{a+2b+4c}+\\frac1{b+2c+4a}+\\frac1{c+2a+4b}.$$\n\nJika diketahui $\\frac1a+\\frac1b+\\frac1c=3$, tentukan nilai maksimum dari $\\lfloor2024K\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 13",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 13",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-14",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukanlah banyak pasangan bilangan bulat $(a,b)$ yang merupakan solusi dari persamaan\n\n$$a^2(a^2+b^2-2ab-a-b)=(a^2+b^2)(a-b).$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 14",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 14",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-15",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Seekor katak awalnya berdiri di titik $(0,0)$ dari bidang koordinat kartesius. Setiap langkah, ia melompat 1 unit ke salah satu dari 4 arah: $x$-positif, $x$-negatif, $y$-positif, atau $y$-negatif. Ia ingin melangkah sebanyak 8 kali sehingga ia kembali ke titik $(0,0)$ setelah langkah terakhir, sedangkan pada 7 lompatan pertama ia tidak menyentuh titik $(0,0)$ kecuali di posisi awal. Jika ia boleh mengunjungi titik yang sama lebih dari sekali, tentukan banyaknya susunan langkah yang dapat ia lakukan.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 15",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 15",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-a-16",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga siku-siku $ABC$ dengan $\\angle C=90^\\circ$. Garis $\\ell$ menyinggung lingkaran luar $ABC$ di titik $C$, dan titik $I$ merupakan perpotongan ketiga garis bagi segitiga $ABC$. Garis yang melalui $I$ dan tegak lurus $AB$ memotong $\\overline{AB}$ dan $\\ell$ berturut-turut di titik $M$ dan $N$. Jika $[ABC]=2024$ dan panjang $NC=1$, tentukan panjang dari $MN$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian A, Nomor 16",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian A, Nomor 16",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-b-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Misalkan pasangan bilangan asli $(x,y)$ memenuhi\n\n$$x^{y+1}-(x+1)^y=99.$$\n\n(a) Tunjukkan bahwa $x\\mid100$.\n\n(b) Tunjukkan bahwa $x+1\\mid100$.\n\n(c) Tentukan semua pasangan bilangan asli $(x,y)$ yang mungkin.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-b-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan lingkaran luar $\\omega$. Misalkan $m$ dan $n$ adalah dua garis berbeda yang melalui $A$ dan memotong segmen $BC$ di $X$ dan $Y$, secara berturut-turut. Misalkan pula $m$ dan $n$ memotong $\\omega$ di $P$ dan $Q$ secara berturut-turut ($P\\ne A,Q\\ne A$). Diketahui bahwa keempat titik $X,Y,Q$, dan $P$ konsiklis. Buktikan bahwa $AB=AC$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-b-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Kombinatorika",
    "prompt": "Mula-mula pada papan tertulis dua pasangan bilangan terurut: $(7,7)$ dan $(21,49)$. Pada setiap langkah, Emily dapat menuliskan pasangan bilangan baru menurut aturan: jika pada papan terdapat pasangan $(a,b)$ dan $(c,d)$, Emily dapat menuliskan $(a+c,b+d)$, $(a+d,b+c)$, atau $(ka,kb)$, dengan $k$ merupakan bilangan bulat yang ia pilih secara bebas setiap langkah. Tentukan semua pasangan yang mungkin ditulis oleh Emily di papan.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2024-jan-b-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Tentukan semua bilangan asli $n\\ge2$ sehingga terdapat tepat dua buah fungsi $f:\\mathbb Q\\to\\mathbb Q$ yang memenuhi\n\n$$\\left\\{\\sum_{i=1}^nf(a_i),\\prod_{i=1}^nf(a_i)\\right\\}=\\left\\{f\\left(\\sum_{i=1}^na_i\\right),f\\left(\\prod_{i=1}^na_i\\right)\\right\\}$$\n\nuntuk sembarang bilangan rasional $a_1,\\ldots,a_n$. Catatan: Kita katakan $\\{x,y\\}=\\{z,w\\}$ apabila $x=z,y=w$ atau $x=w,y=z$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2024 — Januari, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2024,
      "stage": "Kontes Januari",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: soal (5).pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Tentukan banyaknya bilangan genap di antara 1000 sampai dengan 7000 yang semua digit-digitnya berbeda.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan bilangan asli terkecil $a$ yang membuat\n\n$$a+4a+7a+10a+\\cdots+97a$$\n\nmenjadi bilangan kuadrat sempurna.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Audrey, Bill dan Clifton berdiri pada satu garis lurus dengan urutan tersebut. Jarak Audrey ke Bill sama dengan jarak Bill ke Clifton dan kecepatan Bill berlari 2 kali lebih cepat dari kecepatan Clifton. Pada saat yang sama, Bill mulai berlari ke arah Clifton, Clifton berlari ke arah Bill dan Audrey berlari ke arah Bill. Diketahui bahwa mereka bertiga bertemu pada suatu titik secara bersamaan dan jarak yang ditempuh Bill adalah 180 meter. Tentukan jarak Audrey dan Clifton sebelum berlari dalam meter.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui titik $A=(2,4)$ dan $B=(4,8)$ di bidang Kartesius. Titik $C$ merupakan perpotongan garis $y=4$ dan garis yang melalui $B$ dan tegak lurus $AB$. Tentukan luas segitiga $ABC$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Tentukan nilai minimum dari\n\n$$4K^2+9T^2+3O^2+75M^2+12KT+30OM$$\n\ndimana $K,T,O,M$ adalah empat bilangan real positif yang memenuhi $KTOM=10$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Suatu komputer diprogram untuk menampilkan salah satu dari tiga warna (merah, biru, atau hitam). Warna ini berganti setiap detiknya. Jika komputer menampilkan warna merah, warna yang ditampilkan berikutnya adalah warna biru. Jika komputer menampilkan warna biru, warna yang ditampilkan berikutnya adalah warna hitam. Tentukan banyaknya kemungkinan komputer menampilkan 3 warna merah, 5 warna biru, dan 8 warna hitam dalam selang waktu 16 detik.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-07",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Gasly, Verstappen, dan Kvyat masing-masing memilih satu titik awal pada suatu bidang. Diketahui jarak terpendek antara titik awal Gasly dengan titik awal Verstappen adalah 15 meter, titik awal Verstappen dengan titik awal Kvyat adalah 41 meter, dan titik awal Kvyat dengan titik awal Gasly adalah 52 meter. Misalkan terdapat titik $R$ di bidang yang sama. Mereka bertiga hendak mencari jarak terpendek antara titik awal mereka masing-masing dengan titik $R$. Hasilnya, jarak terpendek antara titik awal Gasly dengan titik $R$ adalah 28 meter, sedangkan titik awal Kvyat dengan titik $R$ adalah 80 meter. Tentukan jarak terpendek antara titik awal Verstappen dengan titik $R$ dalam satuan meter.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-08",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukanlah jumlah semua nilai $p$ sedemikian sehingga $p,p^2+2018,p^4+2018$ merupakan bilangan prima.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-09",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Diberikan himpunan $A=\\{1,2,3,\\ldots,40\\}$. Tentukan banyaknya cara memilih pasangan tidak terurut $(a,b,c,d)$ sehingga $a,b,c,d\\in A$ dan $a+b=c+d$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-10",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan persegi $ABCD$ dengan titik $E$ dan $F$ pada segmen $AB$ dan $BC$ sehingga segitiga $DEF$ sama sisi. Titik $G,H$, dan $I$ berturut-turut terletak pada segmen $AE,ED$, dan $DA$ sehingga segiempat $AGHI$ adalah persegi. Titik $J$ dan $K$ terletak pada segmen $EF$ sehingga $HJ\\perp EF$ dan $FK=EJ$. Titik $L$ terletak pada $DF$ sehingga $HL\\parallel EF$. Jika luas persegi panjang $HJKL=x$ dan luas persegi $AGHI=y$. Tentukan nilai dari $\\left\\lfloor\\frac{100x}{y}\\right\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-11",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan sebuah fungsi satu-satu $f:\\mathbb V\\to\\mathbb V$ dimana $\\mathbb V=\\{1,2,3,4,5,6\\}$ dan $f(n)\\ne n,\\forall n\\in\\mathbb V$. Apabila\n\n$$f(1+2f(2))+f(1)=f(4f(m)+f(6))+f(2f(3)-3)+f(4)$$\n\nuntuk suatu bilangan asli $m$, tentukan nilai dari\n\n$$\\sum_{i=1}^6m^if(i).$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 11",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 11",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-12",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Barisan $7,63,511,728,\\cdots$ merupakan barisan bilangan-bilangan asli yang merupakan kelipatan 7 dan juga kurang 1 dari pangkat 3 suatu bilangan bulat. Di sini, 7, 63, 511, 728 semuanya habis dibagi 7, dan $7=2^3-1$, $63=4^3-1$, $511=8^3-1$ dan $728=9^3-1$.\n\nTentukan 3 digit terakhir dari suku ke 2018 dari barisan tersebut.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 12",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 12",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-13",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Sebuah bilangan empat digit dikatakan *aneh* jika dan hanya jika bilangan baru yang terbentuk dari penghapusan digit satuannya habis dibagi 7. Sebuah bilangan empat digit dikatakan *cantik* jika dan hanya jika bilangan baru yang terbentuk dari penghapusan digit ribuannya habis dibagi 9. Misalkan $R$ adalah himpunan seluruh bilangan yang aneh dan cantik. Jika $x$ adalah rata-rata dari penjumlahan seluruh anggota $R$, tentukan nilai dari $2x-10000$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 13",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 13",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-14",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Misalkan $ABCD$ adalah segiempat siklis. Garis $AB$ dan $CD$ bertemu di titik $R$. Garis $AD$ dan $BC$ bertemu di titik $V$. Diketahui titik $S$ dan titik $I$ terletak pada lingkaran luar segiempat $ABCD$ sehingga $RS$ dan $VI$ adalah garis singgung lingkaran tersebut. Jika panjang $VI=13552$ dan panjang $RV=17777$, tentukan panjang $RS$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 14",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 14",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-a-15",
    "level": "SMA",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diberikan sebuah nilai $S$ yang merupakan deret tak terhingga yang suku ke -$n$ didefinisikan sebagai\n\n$$U_n=\\frac{T_n\\times1^2+T_{n-1}\\times2^2+T_{n-2}\\times3^2+\\cdots+T_2\\times(n-1)^2+T_1\\times n^2}{10^n},$$\n\ndimana $T_n$ menyatakan bilangan segitiga ke-$n$. Dipunyai\n\n$$S=\\frac{1^2}{10}+\\frac{3\\times1^2+2^2}{10^2}+\\frac{6\\times1^2+3\\times2^2+1\\times3^2}{10^3}+\\ldots$$\n\nDiketahui bahwa nilai $S$ dapat dinyatakan dalam $\\frac ab$, dimana $a$ dan $b$ adalah dua buah bilangan bulat positif yang saling relatif prima. Apabila $X=a+b$, tentukan nilai dari $\\left\\lfloor\\frac X{100}\\right\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian A, Nomor 15",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian A, Nomor 15",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-b-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Misalkan $P$ adalah sebuah polinomial yang memenuhi $P(x)=x^4+2x^3+2x^2+6x-2$ untuk semua bilangan bulat $x$.\n\n(a) Jika $x>3$, tunjukkan $P(x)>x^4+2x^3+x^2=(x^2+x)^2$.\n\n(b) Jika $x>3$, tunjukkan $P(x)<x^4+2x^3+3x^2+2x+1=(x^2+x+1)^2$.\n\n(c) Jika $x<-6$, tunjukkan $P(x)>(x^2+x)^2$.\n\n(d) Jika $x<-6$, tunjukkan $P(x)<(x^2+x+1)^2$.\n\nDiketahui $t$ dan $u$ adalah bilangan bulat yang memenuhi $t^2=P(u)$.\n\n(e) Simpulkan bahwa $-6\\le u\\le3$.\n\n(f) Tentukan semua pasangan $(t,u)$ yang memenuhi persamaan tersebut.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian B, Nomor 1",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian B, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 7. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-b-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Buktikan bahwa tidak ada tripel bilangan bulat $(x,y,z)$ yang memenuhi persamaan\n\n$$x^2+y^2+z^2=xyz-1.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 7. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-b-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Kombinatorika",
    "prompt": "Ubai menuliskan 2018 bilangan asli pertama: $1,2,\\ldots,2018$ di papan tulis. Tiap menit, dia akan menghapus 4 bilangan (tidak harus berbeda): $x,y,z$ dan $x+y+z$ dan menuliskan $x+y$, $x+z$ dan $y+z$ pada papan tulis. Misalnya, bila Ubai menghapus 1, 2, 3, dan 6, maka dia akan menulis 3, 4, 5 di papan tulis.\n\nUbai akan berhenti apabila dia tidak dapat menghapus 4 bilangan manapun yang memenuhi syarat lagi. Apabila Ubai mulai menghapus bilangan pada pukul $08:00$, buktikan bahwa Ubai akan berhenti sebelum jam $16:30$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 7. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-sep-b-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Diberikan sebuah segiempat konveks $ABCD$. Misalkan $O$ perpotongan diagonal $AC$ dan $BD$, dan misalkan $I,K,H$ berturut-turut adalah proyeksi titik $B,O,C$ ke $AD$. Buktikan\n\n$$AD\\times BI\\times CH\\le AC\\times BD\\times OK$$\n\ndan tentukan kapan kesamaan terjadi.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — September, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes September",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM SEPTEMBER 2018.pdf, PDF page 7. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Terdapat 4 bola merah dan 3 bola putih pada suatu kotak. Dua bola dari kotak akan diambil secara bersamaan. Jika bentuk paling sederhana dari peluang terambilnya bola berwarna sama adalah $\\frac mn$, tentukan $m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 1",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 1",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan bilangan bulat $n$ terbesar sehingga $5000\\cdot(0,6)^n$ merupakan bilangan bulat.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 2",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diketahui $(g\\circ f)(x+2)=2x^2+8x+5$ serta $g(x)=2x+5$ untuk setiap bilangan real $x$. Tentukan bilangan real positif $x$ yang memenuhi $f(x)=96$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 3",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui luas segienam beraturan $ABCDEF$ adalah $150\\sqrt3$. Tentukan panjang $AD$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 4",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Seorang guru mengadakan ulangan sejarah. Ulangan tersebut terdiri dari lima soal pilihan ganda dan setiap soal terdiri dari lima pilihan jawaban. Kimi, salah satu peserta ulangan, mengetahui bahwa soal pertama terdapat empat pilihan jawaban yang pasti salah, soal kedua terdapat tiga pilihan jawaban yang pasti salah, soal ketiga terdapat dua pilihan jawaban yang pasti salah, soal keempat terdapat satu jawaban yang pasti salah, dan soal kelima tidak terdapat pilihan jawaban yang pasti salah. Asumsikan setiap soal hanya memiliki satu jawaban benar, Kimi menjawab semua soal dengan menebak jawaban dengna syarat Kimi tidak memilih jawaban yang sudah pasti salah. Jika peluang Kimi menjawab dengan benar tepat tiga dari lima soal dapat dinyatakan dalam bentuk $\\frac ab$ dimana $a$ dan $b$ adalah bilangan asli yang relatif prima, tentukan nilai dari $100a+b$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 5",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 5",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan faktor persekutuan terbesar dari $(2018!+1)$ dan $2019!$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 6",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 6",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-07",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Russell menyusun suatu persamaan kubik $x^3-px^2+qx-r=0$ dimana $(p,q,r)$ adalah susunan acak dari $(1,2,3)$. Bila akar-akar dari persamaan kubik tersebut adalah $a,b$, dan $c$, tentukan nilai terbesar dari $(a+2)(b+2)(c+2)$ yang mungkin.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 7",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 7",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-08",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui pada segitiga $ABC$, panjang $BC$ adalah 17. Titik $A,D,E$, dan $B$ terletak segaris dengan urutan demikian, sedangkan titik $A,F,G$, dan $C$ terletak segaris dengan urutan demikian sehingga luas kelima segitiga $ADF,DFG,DEG,CEG$, dan $BEC$ adalah sama. Bila $AE=12$ dan $CG=2$, tentukan luas segitiga $AFD$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 8",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 8",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-09",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Teori Bilangan",
    "prompt": "Tentukan banyaknya nilai $n$ bilangan bulat tak negatif sehingga\n\n$$((n!+1)!+2)!+3$$\n\nadalah bilangan kubik sempurna.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 9",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 9",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-10",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Misal $a$ dan $b$ adalah akar-akar dari persamaan kuadrat $x^2+20x+18=0$. Misalkan\n\n$$\\frac{20b^2-400a-20a^2}{18a-18b-a^2b}=\\frac pq$$\n\nuntuk suatu bilangan bulat $p$ dan $q$ yang positif dan relatif prima. Tentukan nilai $p-q^2$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 10",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 10",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 4. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-11",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Terdapat segmen $AB$ dengan panjang 6. $C$ dan $D$ dipilih acak pada segmen $AB$ sedemikian sehingga $0\\le AC\\le AD\\le AB$. Jika peluang $CD\\ge4$ dan $2AC\\le CD$ dapat dinyatakan dalam $\\frac ab$ dengan $a$ dan $b$ adalah dua bilangan bulat positif yang saling relatif prima, tentukan nilai dari $a+b$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 11",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 11",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-12",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui sebuah segitiga lancip $ABC$ dengan $BC>CA>AB$ dan $\\angle BCA=22.5^\\circ$. $H$ dan $O$ ialah titik tinggi dan titik pusat lingkaran luar segitiga tersebut. Jari-jari lingkaran luar segitiga ini ialah 2. Jika $[AHO]+[BHO]+[CHO]=\\sqrt{18}-\\sqrt6$, berapakah besar dari sudut $\\angle ABC$?",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 12",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 12",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-13",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Misalkan $a,b\\in\\mathbb R$ dan $b\\ne0$. Jika nilai maksimum dari\n\n$$\\min\\left(\\frac{4-a^2b}{4b},\\frac{4ab^2-1}{4b^2}\\right)$$\n\nadalah $M$, di mana $\\min(x,y)$ menyatakan bilangan terkecil di antara $x$ dan $y$. Tentukan nilai dari $\\lfloor100M\\rfloor$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 13",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 13",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-14",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Seorang pecinta alam bernama Afif sedang tersesat di tengah hutan weebuu yang berbentuk segitiga dengan titik sudut $(0,0),(4,0)$ dan $(0,4)$. Pada kedua sisi tegak hutan (yaitu sumbu-$x$ dan sumbu-$y$) terdapat katak raksasa yang lapar, sehingga ketika Afif menginjakkan kaki sisi tegak tersebut, ia akan langsung dimangsa. Namun, pada sisi miring segitiga siku-siku tersebut (garis $x+y=4$), terdapat pintu ke mana saja yang dapat mengantarkan Afif pulang dalam sekejap.\n\nPada saat ini, Afif berada pada titik $(1,1)$ dan melangkah secara acak karena ia tidak membawa kompas. Diketahui bahwa jika Afif berada pada titik $(x,y)$ maka Afif hanya dapat melangkah ke titik $(x-1,y)$ atau $(x,y-1)$ dengan peluang $\\frac38$ serta ke titik $(x+1,y)$ atau $(x,y+1)$ dengan peluang $\\frac18$. Jika peluang Afif berhasil pulang dapat dituliskan sebagai $\\frac mn$ dimana $m$ dan $n$ adalah bilangan asli relatif prima, tentukan nilai $m+n$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 14",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 14",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-15",
    "level": "SMA",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diberikan $j,k,l$ tiga buah bilangan bulat positif berbeda yang tidak lebih besar daripada 2018. Tentukan banyaknya pasangan bilangan bulat $(j,k,l)$ yang memenuhi kedua kondisi berikut:\n\n$$\\left\\lfloor\\frac jk\\right\\rfloor,\\left\\lfloor\\frac kl\\right\\rfloor,\\left\\lfloor\\frac lj\\right\\rfloor$$\n\nadalah barisan aritmatika dengan urutan tersebut dan\n\n$$\\left\\lceil\\frac jk\\right\\rceil,\\left\\lceil\\frac kl\\right\\rceil,\\left\\lceil\\frac lj\\right\\rceil$$\n\nadalah barisan geometri dengan urutan tersebut.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 15",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 15",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-a-16",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan segitiga $ABC$ dengan $BC=10$ dan $\\angle BAC=45^\\circ$. Pada sisi $AB$ dan $AC$, dibentuk persegi $ABDE$ dan $ACFG$ ke arah luar segitiga $ABC$. Misalkan $O$ adalah pusat lingkaran luar $AEG$. Diketahui bahwa $OD^2+OF^2=1308$. Tentukan luas segitiga $ADF$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian A, Nomor 16",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian A, Nomor 16",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 5. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-b-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Aljabar",
    "prompt": "Tentukan semua bilangan bulat positif $n$, sehingga untuk setiap bilangan real $a$ dan $b$, dipunyai\n\n$$a^n+b^n\\ge a^{n-1}b+b^{n-1}a.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian B, Nomor 2",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian B, Nomor 2",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-b-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Geometri",
    "prompt": "Pada segitiga lancip $ABC$, misalkan $D,E$ ialah dua titik di lingkaran luar segitiga $ABC$ sehingga $DE$ ialah diameter, $DE\\parallel BC$ dan $D$ lebih dekat ke $B$ dibandingkan dengan $C$. Misalkan $H$ titik tinggi dari $ABC$, dan $\\Gamma$ ialah lingkaran dengan diameter $AH$. $\\Gamma$ memotong $AD,AB,AC,AE$ berturut-turut di $M,G,F,L$, dan $MF$ memotong $GL$ di $P$. Buktikan $\\angle BPC=90^\\circ$.",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian B, Nomor 3",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian B, Nomor 3",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 6. URL is organizer homepage."
    }
  },
  {
    "id": "ktom-2018-oct-b-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Teori Bilangan",
    "prompt": "Diberikan barisan bilangan asli $(u_n)_{n=1}^\\infty$ dengan\n\n$$u_n=a^n-b^n$$\n\nuntuk suatu bilangan asli $a>b$ yang relatif prima. Tentukan, dengan bukti, semua pasangan $(a,b)$ yang mungkin sedemikian sehingga terdapat empat bilangan $u_p,u_q,u_r$, dan $u_s$, dimana $s\\ne p$, $s\\ne q$, dan $s\\ne r$, yang memenuhi\n\n$$u_pu_qu_r=u_s.$$",
    "source": {
      "kind": "competition",
      "label": "KTOM 2018 — Oktober, Bagian B, Nomor 4",
      "competition": "KTOM",
      "year": 2018,
      "stage": "Kontes Oktober",
      "number": "Bagian B, Nomor 4",
      "url": "https://www.ktom-tomi.or.id/",
      "note": "User-supplied KTOM ZIP: KTOM OKTOBER 2018.pdf, PDF page 6–7. URL is organizer homepage."
    }
  },
  {
    "id": "magd-2018-ii-01",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Analisis Kompleks",
    "prompt": "Buktikan bahwa\n\n$$\\int_0^\\infty e^{ix^2}\\,dx=\\frac{\\sqrt{\\pi}(1+i)}{2\\sqrt2}.$$\n\n**Petunjuk:** Tinjau fungsi $f(z)=e^{iz^2}$ dengan $z\\in\\mathbb C$ dan lintasan $C:=C_1\\cup C_2\\cup C_3$ dengan\n\n$$C_1:=\\{z=x:0\\le x\\le R\\},\\ C_2:=\\left\\{z=Re^{it}:0\\le t\\le\\frac{\\pi}{4}\\right\\},$$\n\n$$C_3:=\\left\\{z=\\frac{(1+i)x}{\\sqrt2}:0\\le x\\le R\\right\\},$$\n\ndengan $R>1$, dan tunjukkan bahwa\n\n$$\\lim_{R\\to\\infty}\\int_{C_2}f(z)\\,dz=0.$$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap II, Nomor 1",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap II",
      "number": "Nomor 1",
      "note": "User-supplied University Challange ZIP: MaGD/soal tahap ii magd 2018.pdf, PDF page 1."
    }
  },
  {
    "id": "magd-2018-ii-02",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Analisis Real",
    "prompt": "Misalkan $f(x)=x^5-7x+1$.\n\n(a) Buktikan bahwa $f$ memiliki akar $r\\in[0,1]$.\n\n(b) Tentukan suatu barisan bilangan rasional $\\{x_n\\}$ yang konvergen ke $r$ dengan $x_1=0$.\n\n(c) Tentukan suatu $N<8$ sehingga $|x_N-r|<10^{-3}$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap II, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap II",
      "number": "Nomor 2",
      "note": "User-supplied University Challange ZIP: MaGD/soal tahap ii magd 2018.pdf, PDF page 2."
    }
  },
  {
    "id": "magd-2018-ii-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 4,
    "title": "Kalkulus",
    "prompt": "Diketahui $f$ memenuhi\n\n$$f(x,y)+\\int_0^{\\sqrt\\pi/2}\\int_{2y}^{y} f(x,y)\\,dxdy=\\sin(x^2)+\\int_{\\sqrt\\pi/2}^{\\sqrt\\pi}\\int_y^{\\sqrt\\pi} f(x,y)\\,dxdy.$$\n\nTentukan\n\n$$\\int_0^{2\\sqrt\\pi}\\int_{y/2}^{\\sqrt\\pi}f(x,y)\\,dxdy.$$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap II, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap II",
      "number": "Nomor 3",
      "note": "User-supplied University Challange ZIP: MaGD/soal tahap ii magd 2018.pdf, PDF page 3."
    }
  },
  {
    "id": "magd-2019-sayembara",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 4,
    "title": "Kalkulus",
    "prompt": "Misalkan $f$ dan $g$ adalah fungsi bernilai real yang kontinu pada interval $[a,b]$ dan memenuhi $f(x)\\ge g(x)$ untuk semua $x\\in[a,b]$. Daerah $D$ didefinisikan sebagai daerah tertutup pada bidang dengan batas garis $x=a$, garis $x=b$, kurva $y=f(x)$ dan $y=g(x)$. Titik pusat massa daerah $D$, yang dinotasikan dengan $(\\overline x,\\overline y)$ dapat dihitung dengan menggunakan rumus\n\n$$\\overline x=\\frac{\\int_a^b x[f(x)-g(x)]\\,dx}{\\int_a^b[f(x)-g(x)]\\,dx}\\quad\\text{dan}\\quad\\overline y=\\frac{\\int_a^b[f(x)^2-g(x)^2]\\,dx}{2\\int_a^b[f(x)-g(x)]\\,dx}.$$\n\n1. Jika $a=1$, $b=4$, $f(x)=\\sqrt x$, dan $g(x)=\\frac{x}{4}$, sketsa daerah $D$ dan tentukan titik pusat massanya. Periksa apakah titik pusat massa berada di $D$.\n\n2. Berikan contoh interval $[a,b]$, fungsi $f$ dan $g$ sedemikian hingga titik pusat massa $(\\overline x,\\overline y)$ tidak berada pada daerah $D$.\n\n3. Tentukan suatu syarat cukup untuk fungsi $f$ dan $g$ agar titik pusat massa $(\\overline x,\\overline y)$ berada di $D$. Buktikan jawaban Anda.\n\n4. Diberikan fungsi $f$ yang grafiknya cekung ke bawah. Selidiki apakah ada syarat yang lebih lemah untuk fungsi $g$ agar titik pusat massa $(\\overline x,\\overline y)$ berada di $D$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2019 — Sayembara, Nomor 1–4",
      "competition": "MaG-D ITB",
      "year": 2019,
      "stage": "Sayembara",
      "number": "Nomor 1–4",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-Sayembara-MaGD2019.pdf, PDF page 1."
    }
  },
  {
    "id": "magd-2020-sayembara",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Analisis Real",
    "prompt": "1. Misalkan $n$ adalah suatu bilangan bulat positif. Diberikan bilangan real positif $x_1,x_2,\\ldots,x_n$ dan $y_1,y_2,\\ldots,y_n$. Definisikan\n\n$$u_n=\\frac{y_1+y_2+\\ldots+y_n}{x_1+x_2+\\ldots+x_n}\\quad\\text{dan}\\quad v_n=\\frac1n\\left(\\frac{y_1}{x_1}+\\frac{y_2}{x_2}+\\ldots+\\frac{y_n}{x_n}\\right).$$\n\nTentukan suatu syarat untuk $x_1,x_2,\\ldots,x_n$ dan $y_1,y_2,\\ldots,y_n$ agar $u_n\\le v_n$ dan syarat agar $u_n\\ge v_n$. Buktikan jawaban Anda.\n\n2. Asumsikan bahwa barisan $(u_n)_{n\\in\\mathbb N}$ dan $(v_n)_{n\\in\\mathbb N}$ keduanya konvergen. Misalkan $u=\\lim_{n\\to\\infty}u_n$ dan $v=\\lim_{n\\to\\infty}v_n$. Berikan suatu kondisi untuk barisan $(x_i)_{i\\in\\mathbb N}$ dan $(y_i)_{i\\in\\mathbb N}$ agar $u\\ge v$ dan kondisi agar $u\\le v$. Buktikan jawaban Anda.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2020 — Sayembara, Nomor 1–2",
      "competition": "MaG-D ITB",
      "year": 2020,
      "stage": "Sayembara",
      "number": "Nomor 1–2",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-Sayembara-MaG-D-XIII-2020.pdf, PDF page 1."
    }
  },
  {
    "id": "losema-2025-final-01",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Jika $V$ adalah himpunan pasangan terurut $(x,y)$ bilangan riil. Buktikan bahwa $V$ merupakan ruang Vektor dengan operasi\n\n$$(x,y)+(x_1,y_1)=(x+x_1,y+y_1+1)$$\n\ndan\n\n$$a(x,y)=(ax+a,ay+a-1)$$\n\ndan dapatkan nilai Vektor nol dari $V$.",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 1",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 1",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $T:V\\to W$ adalah pemetaan linear. Tunjukkan:\n\n(a) $T$ bijektif jika dan hanya jika $v_1,v_2,\\ldots,v_n$ basis $V$ maka $\\{T(v_1),T(v_2),\\ldots,T(v_n)\\}$ basis $W$.\n\n(b) Jika $T$ isomorfisma maka $T^{-1}:W\\to V$ juga isomorfisma.",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 2",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 2",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-03",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Tentukan persamaan garis bagi suatu sudut yang dibentuk oleh garis $4x+3y-12=0$ dan $5x-12y-60=0$.",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 3",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 3",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Seorang wanita berdiri pada karang memandang sebuah perahu motor yang bergerak ke arah pantai tepat di bawahnya. Jika teropong berada 250 kaki di atas permukaan laut dan jika perahu mendekat dengan laju 20 kaki/detik. Berapa laju perubahan sudut teropong pada waktu perahu berada 250 kaki dari pantai?",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 4",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 4",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Seorang arkeolog menemukan sebuah cawan kuno yang bentuknya sangat unik. Permukaan bagian dalam cawan tersebut, jika dilihat dalam penampang dua dimensi pada bidang koordinat kartesius $(x,y)$, dibatasi oleh grafik fungsi $y=\\sqrt{9-x^2}$ untuk rentang horizontal dari $-2$ hingga $3$, dan alasnya dibatasi oleh sumbu $x$. Tentukan Volume cawan kuno tersebut jika diputar mengelilingi sumbu $x$!",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 5",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 5",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan luas daerah antara kurva $y=|x^2-4|$ dan sumbu $x$ antara $-3\\le x\\le3$.",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 6",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 6",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diberikan fungsi dua peubah $u(x,y)=e^{ky^2}\\cos(ky)$ dengan $k$ adalah konstanta. Nilai dari $u_{xx}+u_{yy}$ adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 7",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 7",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Apabila diketahui $\\displaystyle\\int_{-\\infty}^{\\infty}e^{-x^2}dx=\\sqrt{\\pi}$ dan $f(t)=\\displaystyle\\int_{-\\infty}^{\\infty}e^{-tx^2}dx$, $t>0$. Maka nilai dari $f'(1)$ adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 8",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 8",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diketahui sebuah prisma segitiga di ruang yang dibatasi oleh bidang-bidang datar $x=0$, $y=0$, $3x+2y-6=0$, $z=-4$, dan $z=4$. Prisma tersebut kemudian dipenggal oleh bidang datar $x+2+z=a$. Nilai $a$ sehingga bidang penggal tersebut membagi prisma menjadi dua bagian yang volumenya sama besar adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 9",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 9",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-10",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Nilai dari deret $\\displaystyle\\sum_{k=1}^{\\infty}\\frac{\\ln\\left(\\frac{k^k+1}{(k+1)^2}\\right)}{k(k+1)}$ adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 10",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 10",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$f(x)$ fungsi ganjil yang memenuhi persamaan integral\n\n$$\\int_0^\\pi f(x)\\sin(nx)dx=4$$\n\ndan\n\n$$\\int_0^1 f(x)\\cos(nx)dx=6$$\n\nMaka nilai dari\n\n$$\\int_{-1}^1\\left(f(x)\\sin(x)+f(x)\\cos(x)+f(x)\\sin^2(x)\\right)dx$$\n\nadalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 11",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 11",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-12",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Diketahui segilima $ABCDE$ dengan $A(0,2)$, $B(4,0)$, $C(2\\pi+1,0)$, $D(2\\pi+1,4)$, dan $E(0,4)$. Titik $P$ dipilih secara acak dari titik di dalam segilima tersebut. Peluang sudut $APB$ berukuran tumpul adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 12",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 12",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-13",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Jika $D$ suatu daerah integral dengan sifat setiap unsur $x\\in D$ memenuhi $x^2=x$, maka unsur di $D$ adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 13",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 13",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-14",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diberikan bilangan real $c\\le2$. Buktikan bahwa untuk setiap bilangan real positif $x,y$ dengan $xy=1$ berlaku ketaksamaan:\n\n$$\\sqrt{\\frac{x^2+y^2}{2}}+\\frac{c}{x+y}\\ge1+\\frac c2$$",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 14",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 14",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "losema-2025-final-15",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan kedua dari fungsi $y=f(x)$ yakni $6x-16$. Gradien garis singgung kurva pada titik $P(2,7)$ adalah $5$. Maka $f(x)$ adalah...",
    "source": {
      "kind": "competition",
      "label": "LOSEMA 2025 — Final, Nomor 15",
      "competition": "LOSEMA",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 15",
      "note": "User-supplied ZIP: University Challange/LOSEMA/Final_LOSEMA_X.pdf, PDF page 2. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "umc-undip-2022-final-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diberikan lingkaran $\\Gamma_1$ dan $\\Gamma_2$ yang berpotongan di titik $X$ dan $Y$. Titik $Z$ berada pada garis singgung lingkaran $\\Gamma_1$ yang melewati $X$ sedemikian sehingga $\\angle XYZ=90^\\circ$. Titik $A$ dan $B$ terletak pada $\\Gamma_2$ sedemikian sehingga $A,B,Z$ terletak pada satu garis. Garis $XA$ memotong kembali $\\Gamma_1$ di titik $K$ dan garis $XB$ memotong $\\Gamma_1$ di titik $M$. Jika $L$ adalah titik yang terletak pada garis $AB$ sedemikian sehingga $XL\\perp AB$, buktikan bahwa $K,L,M$ terletak pada satu garis.",
    "source": {
      "kind": "competition",
      "label": "UMC UNDIP 2022 — Final, Nomor 1",
      "competition": "UMC UNDIP",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 1",
      "note": "User-supplied ZIP: UMC/Final Round_UNDIP 2022.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "umc-undip-2022-final-02",
    "level": "SMA",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Misalkan $n$ adalah bilangan bulat positif dengan $n\\ge2$. Diberikan barisan $n$ suku:\n\n$$1,\\quad-\\frac14,\\quad\\frac19,\\quad-\\frac1{16},\\quad\\cdots,\\quad\\frac{(-1)^{n+1}}{n^2}.\\tag{1}$$\n\nSelanjutnya dari barisan ini, dilakukan suatu proses yaitu: dibentuk barisan baru dengan cara mengambil rata-rata aritmatika dari setiap dua suku berurutan, sehingga dari barisan (1) diperoleh barisan dengan $n-1$ suku:\n\n$$\\frac38,\\quad-\\frac5{72},\\quad\\frac7{288},\\quad\\cdots,\\quad\\frac{n^2(-1)^n+(n-1)^2(-1)^{n+1}}{2n^2(n-1)^2}.\\tag{2}$$\n\nLakukan proses yang sama pada barisan (2) untuk memperoleh barisan baru yang terdiri dari $n-2$ suku, dan ulangi proses ini terus menerus hingga akhirnya diperoleh sebuah bilangan $x_n$. Buktikan bahwa $x_n<\\frac2n$.",
    "source": {
      "kind": "competition",
      "label": "UMC UNDIP 2022 — Final, Nomor 2",
      "competition": "UMC UNDIP",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 2",
      "note": "User-supplied ZIP: UMC/Final Round_UNDIP 2022.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "umc-undip-2022-final-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Untuk setiap bilangan riil positif $a,b,$ dan $c$. Buktikan bahwa\n\n$$\\sqrt{a+b-\\sqrt{3ab}}+\\sqrt{b+c-\\sqrt{3bc}}\\ge\\sqrt{a+c-\\sqrt{ac}}.$$",
    "source": {
      "kind": "competition",
      "label": "UMC UNDIP 2022 — Final, Nomor 3",
      "competition": "UMC UNDIP",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 3",
      "note": "User-supplied ZIP: UMC/Final Round_UNDIP 2022.pdf, PDF page 1. Retyped competition questions; official organizer paper not yet compared."
    }
  },
  {
    "id": "mathlicious-2022-final-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Diketahui $a,b,c$ akar dari persamaan $x^3-5x^2-9x+10=0$. Jika suku banyak $P(x)=Ax^3+Bx^2+Cx-2015$ memenuhi $P(a)=b+c$, $P(b)=a+c$, $P(c)=a+b$. Maka nilai dari $\\frac{-(A+B-C)}{3}$ adalah...",
    "source": {
      "kind": "competition",
      "label": "MATHLICIOUS 2022 — Final, Nomor 1",
      "competition": "MATHLICIOUS",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 1",
      "note": "User-supplied ZIP: MATHLICIOUS/SMA /FINAL MATHLICIOUS IAIN KUDUS 2022.pdf, PDF page 1. Photographed question sheet; identification based on supplied filename."
    }
  },
  {
    "id": "mathlicious-2022-final-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui sebuah segitiga dengan panjang alasnya adalah 10 cm dan luas segitiga adalah 60 $\\mathrm{cm}^2$. Jika terdapat lingkaran besar yang memotong semua titik segitiga pada sisi lingkaran tersebut dan terdapat lingkaran kecil di dalam segitiga dimana setiap sisi lingkaran tersebut bersinggungan dengan sisi segitiga misalkan $\\frac ab$ merupakan pecahan paling sederhana dari pembagian jari-jari lingkaran yang berada di dalam segitiga dengan jari-jari lingkaran yang berada di luar segitiga maka tentukanlah nilai $a+b$",
    "source": {
      "kind": "competition",
      "label": "MATHLICIOUS 2022 — Final, Nomor 2",
      "competition": "MATHLICIOUS",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 2",
      "note": "User-supplied ZIP: MATHLICIOUS/SMA /FINAL MATHLICIOUS IAIN KUDUS 2022.pdf, PDF page 1. Photographed question sheet; identification based on supplied filename."
    }
  },
  {
    "id": "mathlicious-2022-final-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Seekor kucing hendak melangkah ke makanan yang berada sejauh 10 langkah di depannya. Kucing tersebut hanya boleh melangkah ke depan sebanyak kelipatan tiga langkah dan selebihnya harus melangkah ke belakang. Tentukan banyaknya cara melangkah agar bisa mencapai makanan, jika ia harus melangkah tidak lebih dari 20 langkah!\n\n(Catatan: jika kucing melangkah 2 kali dimana masing-masing melangkah sekali ke belakang, maka dianggap sama saja dengan 2 langkah ke belakang.)",
    "source": {
      "kind": "competition",
      "label": "MATHLICIOUS 2022 — Final, Nomor 4",
      "competition": "MATHLICIOUS",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 4",
      "note": "User-supplied ZIP: MATHLICIOUS/SMA /FINAL MATHLICIOUS IAIN KUDUS 2022.pdf, PDF page 1. Photographed question sheet; identification based on supplied filename."
    }
  },
  {
    "id": "mathlicious-2022-final-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Diketahui terdapat 5 bola merah di kantong A. Jika satu bola dipindahkan ke kantong B yang berisikan sejumlah bola putih. Dari kantong B itu, dipilih secara acak satu bola, kemudian bola tersebut dipindahkan ke kantong A. Dari kantong A, dipilih secara acak lagi yaitu satu bola, kemudian dipindahkan ke kantong B. Akhirnya, bola dipilih secara acak dari kantong B. Jika peluang mendapatkan bola putih pada pengambilan terakhir ini adalah $\\frac35$, berapa bola putih yang ada di dalam kantong B mula-mula...",
    "source": {
      "kind": "competition",
      "label": "MATHLICIOUS 2022 — Final, Nomor 5",
      "competition": "MATHLICIOUS",
      "year": 2022,
      "stage": "Final",
      "number": "Nomor 5",
      "note": "User-supplied ZIP: MATHLICIOUS/SMA /FINAL MATHLICIOUS IAIN KUDUS 2022.pdf, PDF page 1. Photographed question sheet; identification based on supplied filename."
    }
  },
  {
    "id": "magd-2018-i-pg-02",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Misalkan $2n$ bilangan asli. Hasil pencerminan titik $(3,0)$ yang dicerminkan secara berturutan oleh garis $x=1$, $x=2$, $\\ldots$, $x=2n$ adalah ...\n\n(a) $(3,n)$\n\n(b) $(3+2n,0)$\n\n(c) $(3+3n,0)$\n\n(d) $(3+4n,0)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\int_0^{\\ln 2}\\frac{1}{e^{-x}+1}\\,dx=\\ldots$$\n\n(a) $\\ln3-\\ln2$\n\n(b) $\\ln3+\\ln2$\n\n(c) $\\ln3-2\\ln2$\n\n(d) $\\ln3+2\\ln2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 3",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-04",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika $z=1+i$, maka $|z^{10}|=\\ldots$\n\n(a) 10\n\n(b) 32\n\n(c) 100\n\n(d) 1024",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 4",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Misalkan $g$ kontinu di $\\mathbb R$ dan $3x^5-96=\\int_c^x g(t)dt$ untuk setiap $x\\in\\mathbb R$. Maka nilai $c$ adalah ...\n\n(a) $-96$\n\n(b) $-2$\n\n(c) 2\n\n(d) 96",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 5",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi bernilai vektor yang merepresentasikan kurva hasil perpotongan permukaan $z=\\sqrt{x^2+y^2}$ dengan bidang $z=y+1$ adalah ...\n\n(a) $f(t)=\\left(t,\\frac{t^2-1}{2},\\frac{t^2+1}{2}\\right)$\n\n(b) $f(t)=(t\\cos t,t\\sin t,1+t\\sin t)$\n\n(c) $f(t)=(\\sqrt{2t-1},t-1,t)$\n\n(d) $f(t)=(\\sqrt{2t+1},t,t+1)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 6",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Misalkan $f:\\mathbb R\\to\\mathbb R$ dan $B\\subset\\mathbb R$. Maka ...\n\n(a) $f\\left(f^{-1}(B)\\right)\\subset B$\n\n(b) $f\\left(f^{-1}(B)\\right)=B$\n\n(c) $f^{-1}(f(B))\\subset B$\n\n(d) $f^{-1}(f(B))=B$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 7",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-08",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Hasil pencerminan titik $(2,1)$ secara berurutan oleh sumbu $X$, garis $y=x+4$, dan $y=4-x$ adalah ...\n\n(a) $(2,9)$\n\n(b) $(9,2)$\n\n(c) $(-2,9)$\n\n(d) $(-2,-9)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 8",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi $f(x)$ yang memenuhi persamaan $f(x)+\\int_0^x f(t)\\,dt=x^2$ adalah ...\n\n(a) $x^2-2x+2-2e^{-x}$\n\n(b) $x^2-2x+2+2e^{-x}$\n\n(c) $2x-2-2e^{-x}$\n\n(d) $2x-2+2e^{-x}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 9",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-10",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Bagian imajiner dari $\\pi^i$ adalah ...\n\n(a) $\\sin(\\ln\\pi)$\n\n(b) $\\cos(\\ln\\pi)$\n\n(c) $\\ln\\pi$\n\n(d) 1",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 10",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 1. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Bilangan positif $c$ sehingga persamaan $\\ln x=cx^4$ memiliki tepat satu solusi real adalah ...\n\n(a) $\\frac1{4e}$\n\n(b) $\\frac1{4e^4}$\n\n(c) $\\frac{e^4}{4}$\n\n(d) $4e^{\\frac14}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 11",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-12",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Di antara polinom-polinom kompleks di bawah ini:\n\n$$\\begin{aligned}P_1(x,y)&=x^2-y^2+2ixy;\\\\P_2(x,y)&=x^2+y^2-2ixy;\\\\P_3(x,y)&=2xy+i(y^2-x^2);\\\\P_4(x,y)&=x^2+iy^2,\\end{aligned}$$\n\nyang merupakan polinom analitik adalah ...\n\n(a) $P_1$ dan $P_2$\n\n(b) $P_1$ dan $P_3$\n\n(c) $P_2$ dan $P_4$\n\n(d) $P_3$ dan $P_4$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 12",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-13",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika $f:[0,1]\\to\\mathbb R$ dengan\n\n$$f(x)=\\begin{cases}1+x,&\\text{jika }x\\notin\\mathbb Q\\cap[0,1]\\\\0,&\\text{jika }x\\in\\mathbb Q\\cap[0,1]\\end{cases},$$\n\nmaka ...\n\n(a) $f$ tidak terintegralkan Riemann pada $[0,1]$\n\n(b) $\\int_0^1 f(x)\\,dx=0$\n\n(c) $\\int_0^1 f(x)\\,dx=\\frac32$\n\n(d) $\\int_0^1 f(x)\\,dx=\\frac e2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 13",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-14",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Diketahui titik $A\\ (0,0)$ dan $B\\ (6,0)$. Misalkan pula $R_{X,\\alpha}$ menyatakan rotasi dengan pusat $X$ dan sudut $\\alpha$ (berlawanan jarum jam). Transformasi\n\n$$R_{A,90^\\circ}\\circ R_{B,90^\\circ}$$\n\ndapat diganti oleh $R_{C,\\beta}$ dengan ...\n\n(a) $C\\ (3,3)$ dan $\\beta=90^\\circ$\n\n(b) $C\\ (3,3)$ dan $\\beta=180^\\circ$\n\n(c) $C\\ (3,-3)$ dan $\\beta=90^\\circ$\n\n(d) $C\\ (3,-3)$ dan $\\beta=180^\\circ$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 14",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-15",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Persamaan bidang singgung dari permukaan\n\n$$f(x,y)=\\sqrt{20-x^2-7y^2}$$\n\ndi titik $(2,1,3)$ adalah ...\n\n(a) $z-3=0$\n\n(b) $2x+7y+3z-20=0$\n\n(c) $2x+7y-3z-2=0$\n\n(d) $2x-7y+3z-6=0$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 15",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-16",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Peta daerah $\\{z\\in\\mathbb C:|z|>1\\}$ oleh pemetaan $w=f(z)=\\frac{1+iz}{z}$ adalah ...\n\n(a) $\\{w\\in\\mathbb C:|w-i|>1\\}$\n\n(b) $\\{w\\in\\mathbb C:|w-i|<1\\}$\n\n(c) $\\{w\\in\\mathbb C:|w|>1\\}$\n\n(d) $\\{w\\in\\mathbb C:|w|<1\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 16",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-17",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $\\boldsymbol F(x,y)=(-2y,x^2)$ medan vektor di $\\mathbb R^2$, maka kerja $\\oint_C\\boldsymbol F\\cdot d\\boldsymbol r$ sepanjang lintasan tutup $C:x^2+y^2=9$ berorientasi positif adalah ...\n\n(a) 0\n\n(b) $6\\pi$\n\n(c) $12\\pi$\n\n(d) $18\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 17",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-18",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Himpunan titik kekonvergenan deret\n\n$$\\sum_{n=1}^{\\infty}\\frac{(-1)^n(x-1)^n}{ne^n}$$\n\nadalah ...\n\n(a) $\\{x\\in\\mathbb R|1-e<x<1+e\\}$\n\n(b) $\\{x\\in\\mathbb R|1-e\\le x<1+e\\}$\n\n(c) $\\{x\\in\\mathbb R|1-e<x\\le1+e\\}$\n\n(d) $\\{x\\in\\mathbb R|1-e\\le x\\le1+e\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 18",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 2. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-19",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diketahui $\\gamma:\\mathbb R\\longrightarrow\\mathbb R^3$ didefinisikan oleh:\n\n$$\\gamma(t):=(e^t,e^{-t},\\sqrt2t).$$\n\nFungsi $\\varphi:\\mathbb R\\longrightarrow\\mathbb R$ sehingga $\\nu(t)=\\gamma(\\varphi(t))$ memenuhi $\\|\\nu'\\|=1$ adalah ...\n\n(a) $\\varphi(t)=2\\sinh^{-1}\\left(\\frac12\\sqrt t\\right)$\n\n(b) $\\varphi(t)=2\\cosh^{-1}\\left(\\frac12\\sqrt t\\right)$\n\n(c) $\\varphi(t)=\\sqrt2\\sinh^{-1}(\\sqrt t)$\n\n(d) $\\varphi(t)=\\sqrt2\\cosh^{-1}(\\sqrt t)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 19",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 3. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-21",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diberikan fungsi dua variabel\n\n$$f(x,y)=-(x^2-1)^2-(x^2y-x-1)^2.$$\n\nPernyataan yang benar adalah ...\n\n(a) $f$ memiliki dua titik maksimum lokal dan satu titik minimum lokal\n\n(b) $f$ memiliki dua titik minimum lokal dan satu titik maksimum lokal\n\n(c) $f$ memiliki satu titik maksimum lokal dan satu titik minimum lokal\n\n(d) $f$ memiliki dua titik maksimum lokal",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 21",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 3. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-22",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Diberikan $f:(0,\\infty)\\to\\mathbb R$ mempunyai turunan dan $\\lim_{x\\to\\infty}f'(x)=1$. Jika $g(x)=f(x+1)-f(x)$, maka $\\lim_{x\\to\\infty}g(x)=\\ldots$\n\n(a) 0\n\n(b) 1\n\n(c) 2\n\n(d) $\\infty$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 22",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 3. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-23",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Misalkan $S\\subset\\mathbb R$ himpunan tak kosong dan terbatas. Jika $a+bS:=\\{a+bx:x\\in S\\}$ dengan $a,b<0$, maka ...\n\n(a) $\\inf(a+bS)=a+b\\inf S$\n\n(b) $\\inf(a+bS)=-a+b\\sup S$\n\n(c) $\\sup(a+bS)=-a-b\\sup S$\n\n(d) $\\sup(a+bS)=a+b\\inf S$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 23",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 3. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-24",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diketahui sistem persamaan tak linear:\n\n$$\\begin{cases}x^2+xu-v^2-yv=0\\\\xuv+xyv=2\\end{cases}$$\n\nmemiliki solusi $u(x,y)$ dan $v(x,y)$ di sekitar titik $(1,1,1,1)$. Pernyataan yang **salah** adalah ...\n\n(a) $\\frac{\\partial u}{\\partial x}=-\\frac{12}{5}$\n\n(b) $\\frac{\\partial u}{\\partial y}=-\\frac15$\n\n(c) $\\frac{\\partial v}{\\partial x}=-\\frac{12}{5}$\n\n(d) $\\frac{\\partial v}{\\partial y}=-\\frac25$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 24",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 3. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-pg-25",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Untuk menentukan secara tunggal transformasi afin $T:\\mathbb R^2\\to\\mathbb R^2$ dengan bentuk\n\n$$T(x)=Ax+b$$\n\ndengan $A$ matriks $2\\times2$, dan $x,b$ matriks $2\\times1$ diperlukan peta dari ...\n\n(a) tepat dua vektor yang bebas linear\n\n(b) tepat tiga titik sebarang\n\n(c) tepat tiga titik yang tidak segaris\n\n(d) tepat empat titik yang tidak segaris",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Pilihan Ganda, Nomor 25",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 3. Number assigned by original row order (unprinted)."
    }
  },
  {
    "id": "magd-2018-i-uraian-01",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Tentukan semua bilangan kompleks $z$ yang memenuhi persamaan $\\sinh z=i$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Uraian, Nomor 1",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Uraian, Nomor 1",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 4. "
    }
  },
  {
    "id": "magd-2018-i-uraian-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan bilangan $c$ yang meminimumkan nilai integral\n\n$$\\int_0^1|x^2-c|dx.$$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Uraian, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Uraian, Nomor 2",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 5. "
    }
  },
  {
    "id": "magd-2018-i-uraian-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Diketahui $f:[a,b]\\to\\mathbb R$ kontinu pada $[a,b]$ dan terdiferensialkan pada $(a,b)$. Misalkan $f(a)=0$ dan $\\int_a^b f(x)\\,dx=0$.\n\nBuktikan terdapat $c\\in(a,b)$ sehingga $f'(c)=0$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2018 — Tahap I, Uraian, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2018,
      "stage": "Tahap I",
      "number": "Uraian, Nomor 3",
      "note": "User-supplied ZIP: University Challange/MaGD/soal tahap i magd 2018.pdf, PDF page 6. "
    }
  },
  {
    "id": "magd-2013-i-uraian-02-a",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Buktikan untuk setiap $x$ yang memenuhi $x>1$ berlaku ketaksamaan $1-\\frac1x<\\ln x<x-1$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Esei Singkat, Nomor 2 (Varian halaman 7)",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 2 (Varian halaman 7)",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2013A.pdf, PDF page 7. Esei number assigned by row order; variant identified by page, not an official packet label."
    }
  },
  {
    "id": "magd-2013-i-uraian-03-a",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $f:\\mathbb R\\to\\mathbb R$, $f(x)=\\begin{cases}\\frac{\\sin x}{x},&x\\ne0\\\\1,&x=0\\end{cases}$, tentukan turunan pertama dari $f$ dan buktikan $f'$ kontinu di 0.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Esei Singkat, Nomor 3 (Varian halaman 7)",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 3 (Varian halaman 7)",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2013A.pdf, PDF page 7. Esei number assigned by row order; variant identified by page, not an official packet label."
    }
  },
  {
    "id": "magd-2013-i-uraian-02-b",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Buktikan untuk setiap $x$ yang memenuhi $0<x<\\frac{\\pi}{2}$ berlaku ketaksamaan $\\sin x<x<\\tan x$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Esei Singkat, Nomor 2 (Varian halaman 8)",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 2 (Varian halaman 8)",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2013A.pdf, PDF page 8. Esei number assigned by row order; variant identified by page, not an official packet label."
    }
  },
  {
    "id": "magd-2013-i-uraian-03-b",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $f:\\mathbb R\\to\\mathbb R$, $f(x)=\\begin{cases}\\frac{e^x-1}{x},&x\\ne0\\\\1,&x=0\\end{cases}$, tentukan turunan pertama dari $f$ dan buktikan $f'$ kontinu di 0.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Esei Singkat, Nomor 3 (Varian halaman 8)",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 3 (Varian halaman 8)",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2013A.pdf, PDF page 8. Esei number assigned by row order; variant identified by page, not an official packet label."
    }
  },
  {
    "id": "magd-2014-i-uraian-01",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan solusi pertaksamaan $\\sqrt{2-x}\\ge x$ kemudian periksa kebenaran solusinya dengan menggambarkan kurva $K_1:y=\\sqrt{2-x}$ dan $K_2:y=x$ pada satu sistem koordinat.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Esei Singkat, Nomor 1",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 1",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2014.pdf, PDF page 8. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2014-i-uraian-02",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika fungsi kompleks $w=f(z)=u(x,y)+iv(x,y)$, $z=x+iy$ analitik pada daerah $D$ di bidang kompleks dan $|f(z)|$ konstan $\\forall z\\in D$, buktikan fungsi $f$ konstan pada $D$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Esei Singkat, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 2",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2014.pdf, PDF page 8. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2014-i-uraian-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $f(x)=\\begin{cases}\\frac{1-\\cos x}{x},&x\\ne0\\\\0,&x=0\\end{cases}$, tentukan turunan pertama dari fungsi $f$ dan buktikan $f'$ kontinu di 0.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Esei Singkat, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 3",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2014.pdf, PDF page 8. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2015-i-uraian-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika $f:[a,b]\\subseteq\\mathbb R\\to\\mathbb R$, fungsi $f$ kontinu pada selang tutup $[a,b]$ dan $x_1,x_2,\\ldots,x_n\\in[a,b]$, buktikan\n\n$$\\exists s\\in[a,b]\\ni f(s)=\\frac1n(f(x_1)+f(x_2)+\\cdots+f(x_n)).$$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Esei Singkat, Nomor 1",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 1",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2015.pdf, PDF page 4. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2015-i-uraian-02",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Buktikan $f(z)=\\begin{cases}\\frac{\\overline z^2}{z},&z\\ne0\\\\0,&z=0\\end{cases}$ memenuhi persamaan Cauchy-Riemann di $(0,0)$ tetapi $f'(0)$ tidak ada.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Esei Singkat, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 2",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2015.pdf, PDF page 4. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2015-i-uraian-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika $\\{x_n\\}$ dan $\\{y_n\\}$ barisan di ruang metrik $(X,d)$, $x_n\\to x$, dan $d(x_n,y_n)<\\frac1n\\ \\forall n\\in\\mathbb N$, buktikan $y_n\\to x$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Esei Singkat, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 3",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2015.pdf, PDF page 4. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2016-i-uraian-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Buktikan grafik fungsi $y=x^3+ax^2+bx+c$ ($a,b,c$ konstanta real) selalu memotong sumbu $x$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Esei Singkat, Nomor 1",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 1",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2016.pdf, PDF page 4. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2016-i-uraian-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Daerah $D$ terletak di kuadran pertama yang dibatasi grafik fungsi $y=\\frac1x$, $y=\\frac4x$, $y=\\sqrt x$, dan $y=2\\sqrt x$. Gambarkan daerah $D$ dan hitunglah luasnya.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Esei Singkat, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 2",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2016.pdf, PDF page 4. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2016-i-uraian-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Tunjukkan fungsi $f(x)=\\frac{1-x^2}{1+x^2}$ terbatas kemudian tentukan $\\sup_{x\\in\\mathbb R}f(x)$ dan $\\inf_{x\\in\\mathbb R}f(x)$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Esei Singkat, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 3",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal-MagDay-2016.pdf, PDF page 4. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2017-i-uraian-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika $|x|<\\frac{\\pi}{2}$, buktikan $\\sin|x|\\le|x|\\le\\tan|x|$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Esei Singkat, Nomor 1",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 1",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal Babak I MagD 2017.pdf, PDF page 7. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2017-i-uraian-02",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Misalkan fungsi $f:\\mathbb R\\to\\mathbb R$ memenuhi $f(s+t)=f(s)+f(t)\\ \\forall s,t\\in\\mathbb R$. (1) Buktikan $f(0)=0$ dan $f$ adalah fungsi ganjil. (2) Jika $f$ kontinu di $c\\in\\mathbb R$, buktikan $f$ kontinu di setiap $x\\in\\mathbb R$ (kontinu pada $\\mathbb R$).",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Esei Singkat, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 2",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal Babak I MagD 2017.pdf, PDF page 7. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2017-i-uraian-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika fungsi $f$ kontinu pada selang tutup $[a,b]$ dan $\\exists c\\in(a,b)\\ni f(c)\\ne0$, buktikan $\\int_a^b|f(x)|\\,dx>0$.",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Esei Singkat, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Esei Singkat, Nomor 3",
      "note": "User-supplied ZIP: University Challange/MaGD/Soal Babak I MagD 2017.pdf, PDF page 7. Esei number assigned by row order; blank answer workspace omitted."
    }
  },
  {
    "id": "magd-2016-i-pg-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Luas daerah $D=\\{(x,y)\\mid 2y\\le x^2+y^2\\le 2x\\}$ adalah $L$ satuan luas, dengan $L=$\n\n(a) $\\pi-1$\n\n(b) $\\pi-\\frac12$\n\n(c) $\\frac12\\pi+1$\n\n(d) $\\frac34\\pi+\\frac12$\n\n(e) $\\frac43\\pi+\\frac12\\sqrt2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\lim_{u\\to2}\\frac{u^2+ux-2u-2x}{u^2-3u+2}=$$\n\n(a) 0\n\n(b) $x-2$\n\n(c) $x+2$\n\n(d) $-x+2$\n\n(e) $-x-2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 3",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Untuk fungsi $f(x)=3x^2+4x\\sqrt x-12x$ yang daerah asalnya selang $[0,\\infty)$, himpunan semua bilangan real $x$ sehingga fungsi $f$ monoton naik adalah selang\n\n(a) $(0,\\infty)$\n\n(b) $(1,\\infty)$\n\n(c) $(1,4)$\n\n(d) $(0,1)$\n\n(e) $(0,4)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 4",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $f$ kontinu pada $[0,\\infty)$ dan memenuhi $\\int_0^{x^2+x}f(t)\\,dt=x^3+3x^2$, maka $f(2)=$\n\n(a) 0\n\n(b) 1\n\n(c) 2\n\n(d) 3\n\n(e) 4",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 5",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Alas benda padat $B$ di ruang adalah $D=\\{(x,y)\\mid 0\\le x\\le4,0\\le y\\le2\\sqrt{4-x}\\}$. Jika irisan sejajar antara benda $B$ dengan bidang yang tegak lurus sumbu-$x$ selalu berbentuk setengah lingkaran, maka volum $B$ adalah\n\n(a) $4\\pi^2$\n\n(b) $2\\pi^2$\n\n(c) $8\\pi$\n\n(d) $6\\pi$\n\n(e) $4\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 6",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Pusat daerah separuh cakram lingkaran $D=\\{(x,y)\\mid -3\\le x\\le3,0\\le y\\le\\sqrt{9-x^2}\\}$ adalah titik $(0,\\overline y)$, dengan $\\overline y=$\n\n(a) $\\frac3\\pi$\n\n(b) $\\frac{10}{3\\pi}$\n\n(c) $\\frac4\\pi$\n\n(d) $\\frac43$\n\n(e) $\\frac32$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 7",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-08",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Bidang $\\alpha$ melalui titik $(0,0,0)$, $(2,0,4)$, dan $(0,2,4)$. Jika garis $g$ tegak lurus bidang $\\alpha$ dan melalui titik $(1,1,2)$, maka titik tembus garis $g$ dengan bidang $xoy$ adalah titik\n\n(a) $(5,5,0)$\n\n(b) $(4,5,0)$\n\n(c) $(4,4,0)$\n\n(d) $(5,4,0)$\n\n(e) $(5,6,0)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 8",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Persamaan bidang singgung pada permukaan ruang $S:xy^2+yz^2+xz=3$ di titik $A(1,1,1)$ adalah\n\n(a) $3x+3y+2z=8$\n\n(b) $2x+3y+3z=8$\n\n(c) $3x+2y+3z=8$\n\n(d) $2x+3y+4z=9$\n\n(e) $4x+3y+2z=9$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 9",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $F(x,y,z)=2(x+y)z$ dan $\\mathbf r(t)=\\cos t\\,\\mathbf i+\\sin t\\,\\mathbf j+\\cos t\\,\\mathbf k$, $0\\le t\\le2\\pi$, maka $F(\\mathbf r(t))$ adalah fungsi dari $t$, sebutlah $w=F(t)=F(\\mathbf r(t))$. Nilai maksimum dari turunan pertama $\\frac{dw}{dt}$ adalah\n\n(a) 2\n\n(b) 4\n\n(c) $\\sqrt2$\n\n(d) $2\\sqrt2$\n\n(e) $2\\sqrt3$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 10",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan berarah dari fungsi $F(x,y,z)=x^2yz^2$ sepanjang kurva $\\mathbf r(t)=t\\mathbf i+t^2\\mathbf j+(2t^3-4t)\\mathbf k$ di titik $(1,1,-2)$ adalah\n\n(a) 8\n\n(b) 6\n\n(c) $5\\frac13$\n\n(d) $4\\frac12$\n\n(e) $2\\frac23$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 11",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-12",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Ekstrim minimum relatif dari fungsi $f(x,y)=x^3+y^3-12x-3y$ untuk $(x,y)\\in\\mathbb R^2$ tercapai di titik\n\n(a) $(0,0)$\n\n(b) $(2,1)$\n\n(c) $(2,-1)$\n\n(d) $(-2,1)$\n\n(e) $(-2,-1)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 12",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-13",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi $(u,v)=\\mathbf F(x,y)=(x+y)\\mathbf i+\\frac{y}{x+y}\\mathbf j$ mempunyai invers untuk $x>0$ dan $y>0$. Invers dari fungsi $\\mathbf F$ adalah $(x,y)=\\mathbf F^{-1}(u,v)=$\n\n(a) $u(1-v)\\mathbf i+uv\\mathbf j$\n\n(b) $uv\\mathbf i+v(1-u)\\mathbf j$\n\n(c) $v(1-u)\\mathbf i+uv\\mathbf j$\n\n(d) $u(1+v)\\mathbf i-uv\\mathbf j$\n\n(e) $uv\\mathbf i+u(1-v)\\mathbf j$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 13",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Luas daerah $D=\\{(x,y)\\mid x\\ge0,y\\ge0,2x\\le x^2+y^2\\le2y\\}$ dalam koordinat kutub dapat dinyatakan sebagai integral lipat dua\n\n(a) $\\int_0^{\\pi/4}\\int_{2\\sin\\theta}^{2\\cos\\theta}r\\,dr\\,d\\theta$\n\n(b) $\\int_0^{\\pi/4}\\int_{2\\sin\\theta}^{2\\cos\\theta}dr\\,d\\theta$\n\n(c) $\\int_{\\pi/4}^{\\pi/2}\\int_{2\\cos\\theta}^{2\\sin\\theta}r\\,dr\\,d\\theta$\n\n(d) $\\int_{\\pi/4}^{\\pi/2}\\int_{2\\sin\\theta}^{2\\cos\\theta}dr\\,d\\theta$\n\n(e) $\\int_0^{\\pi/2}\\int_{2\\cos\\theta}^{2\\sin\\theta}r\\,dr\\,d\\theta$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 14",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-15",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $C=C_1+C_2$ ($C\\equiv$ lintasan $C_1$ dilanjutkan $C_2$) dengan $C_1:y=x^2$ dari $(0,0)$ ke $(4,2)$ dan $C_2:y=2x$ dari $(4,2)$ ke $(0,0)$, maka dengan teorema Green, $\\oint_C(e^xy^2-xy)dx+2ye^xdy=$\n\n(a) 1\n\n(b) $1\\frac13$\n\n(c) 2\n\n(d) $2\\frac23$\n\n(e) 3",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 15",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-16",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $B=\\{(x,y,z)\\mid x^2+y^2+z^2\\le a^2\\}$ dan $S$ adalah permukaan bola $x^2+y^2+z^2=a^2$ dengan vektor normal satuan $\\mathbf n$ ke arah luar, maka untuk $\\mathbf F(x,y,z)=2xy\\mathbf i-y^2\\mathbf j+3z\\mathbf k$ diperoleh $\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS=$\n\n(a) $12\\pi a^2$\n\n(b) $\\frac43\\pi a^3$\n\n(c) $\\frac83\\pi a^3$\n\n(d) $4\\pi a^3$\n\n(e) $4\\pi a^2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 16",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-17",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Argumen utama dari bilangan kompleks $z=(\\sqrt3-i)^8$ adalah $\\operatorname{Arg}z=$\n\n(a) $-\\frac23\\pi$\n\n(b) $-\\frac56\\pi$\n\n(c) $\\frac56\\pi$\n\n(d) $\\frac34\\pi$\n\n(e) $\\frac23\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 17",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-18",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Peta dari kuadran pertama $K\\text{-}1=\\{z\\in\\mathbb C\\mid\\operatorname{Re}z\\ge0,\\operatorname{Im}z\\ge0\\}$ oleh fungsi kompleks $w=f(z)=-iz^2$ adalah himpunan semua titik di bidang $uov$ yang memenuhi\n\n(a) $\\operatorname{Re}w\\ge0$ dan $\\operatorname{Im}w\\ge0$\n\n(b) $\\operatorname{Re}w\\le0$\n\n(c) $\\operatorname{Re}w\\ge0$\n\n(d) $\\operatorname{Re}w\\le\\operatorname{Im}w$\n\n(e) $\\operatorname{Im}w\\ge0$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 18",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-19",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Untuk bilangan kompleks $z=x+yi$, himpunan semua titik di bidang $xoy$ sehingga fungsi kompleks $f(z)=(x^2+y^2)+2xyi$ terdiferensialkan adalah\n\n(a) $\\{(x,y)\\mid y=0\\}$\n\n(b) $\\{(x,y)\\mid x=0\\}$\n\n(c) $\\{(x,y)\\mid y=x\\}$\n\n(d) $\\{(x,y)\\mid y>0\\}$\n\n(e) $\\{(x,y)\\mid x>0\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 19",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-20",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Deret Maclaurin dari fungsi kompleks $f(z)=\\begin{cases}\\frac{1-\\cos z}{z^2},&z\\ne0\\\\\\frac12,&z=0\\end{cases}$ yang analitik pada $\\mathbb C$ adalah\n\n(a) $\\displaystyle\\sum_{n=0}^\\infty\\frac{i^{2n+2}z^{2n}}{(2n+2)!}$\n\n(b) $\\displaystyle\\sum_{n=0}^\\infty\\frac{i^{2n}z^{2n}}{(2n+2)!}$\n\n(c) $\\displaystyle\\sum_{n=1}^\\infty\\frac{i^{2n+2}z^{2n}}{(2n)!}$\n\n(d) $\\displaystyle\\sum_{n=0}^\\infty\\frac{i^{2n}z^{2n}}{(2n)!}$\n\n(e) $\\displaystyle\\sum_{n=1}^\\infty\\frac{i^{2n}z^{2n-2}}{(2n)!}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 20",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 20",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-21",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Untuk himpunan terbatas $S=\\left\\{x\\in\\mathbb R\\mid x=1-\\frac{(-1)^n}{n},n\\in\\mathbb N\\right\\}$, $\\sup S+\\inf S=$\n\n(a) 2\n\n(b) 3\n\n(c) $2\\frac13$\n\n(d) $2\\frac12$\n\n(e) $3\\frac13$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 21",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-22",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Jika suku ke-$n$ suatu barisan adalah $u_n=\\sum_{k=1}^n\\frac{(-1)^k}{k}$, maka barisan $\\{u_n\\}$ konvergen ke\n\n(a) 2\n\n(b) 1\n\n(c) $\\frac12$\n\n(d) $\\ln2$\n\n(e) $\\ln\\frac12$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 22",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-23",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Barisan bilangan real $\\{u_n\\}$ dengan $u_1=\\sqrt{1+a^2},u_2=\\sqrt[3]{1+a^3},\\cdots,u_{n-1}=\\sqrt[n]{1+a^n},\\cdots\\ (a>1)$ konvergen ke\n\n(a) 1\n\n(b) $a^2$\n\n(c) $2a$\n\n(d) $a+1$\n\n(e) $a$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 23",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-24",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $y=f(x)$ terdiferensialkan pada selang buka $I$ yang memuat $C$, maka $\\lim_{h\\to0}\\frac{f(c+h)-f(c-h)}h=$\n\n(a) $f'(c)$\n\n(b) $f'(2c)$\n\n(c) $2f'(c)$\n\n(d) $f''(c)$\n\n(e) 0",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 24",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2016-i-pg-25",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $f$ kontinu dan monoton naik pada $[0,4]$, maka $\\int_1^4f(x)dx+\\int_{f(1)}^{f(4)}f^{-1}(y)dy=$\n\n(a) $4f(4)-f(1)$\n\n(b) $4(f(4)-f(1))$\n\n(c) $4f(4)$\n\n(d) $3f(4)-f(1)$\n\n(e) $3(f(4)-f(1))$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2016 — Tahap I, Pilihan Ganda, Nomor 25",
      "competition": "MaG-D ITB",
      "year": 2016,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2016.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-02",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Sisi terpanjang dari sebuah segitiga siku-siku sama dengan dua kali sisi terpendeknya. Jika keliling segitiga siku-siku ini adalah $6+2\\sqrt3$, maka luasnya adalah\n\n(a) $\\sqrt3$\n\n(b) $2\\sqrt3$\n\n(c) $4\\sqrt3$\n\n(d) $6\\sqrt3$\n\n(e) $8\\sqrt3$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-03",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Ekivalensi atau kesetaraan ($\\Leftrightarrow$) yang **salah** pada rangkaian operasi aljabar:\n\n$$x=4\\underset{1}{\\Leftrightarrow}x^2=4x\\underset{2}{\\Leftrightarrow}x^2-16=4x-16\\underset{3}{\\Leftrightarrow}(x+4)(x-4)=4(x-4)\\underset{4}{\\Leftrightarrow}x+4=4\\underset{5}{\\Leftrightarrow}x=0$$\n\nadalah langkah ke\n\n(a) 1, 4, dan 5\n\n(b) 3 dan 5\n\n(c) 4 dan 5\n\n(d) 1 dan 4\n\n(e) 1 dan 2",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 3",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\lim_{x\\to2^-}\\frac{\\sqrt{2-x}-\\sqrt{2+x}}{2x-x^2}=$$\n\n(a) $\\frac{\\sqrt2}{4}$\n\n(b) 0\n\n(c) $-\\frac{\\sqrt2}{4}$\n\n(d) $\\infty$\n\n(e) $-\\infty$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 4",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $\\lim_{x\\to0}\\frac{a-\\sqrt{a^2-x^2}}{x^2}=1$, $a$ konstanta positif, maka $a=$\n\n(a) 4\n\n(b) 2\n\n(c) 1\n\n(d) $\\frac12$\n\n(e) $\\frac14$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 5",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi $f(x)=\\begin{cases}\\frac{e^x-x-1}{x^2},&x\\ne0\\\\\\frac12,&x=0\\end{cases}$ kontinu di 0. Turunan dari fungsi $f$ di 0 adalah $f'(0)=$\n\n(a) 0\n\n(b) $\\frac16$\n\n(c) $\\frac12$\n\n(d) 1\n\n(e) tidak ada",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 6",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\int_1^3\\frac{dx}{\\sqrt x(1+x)}=$$\n\n(a) $\\frac16\\pi$\n\n(b) $\\frac13\\pi$\n\n(c) $\\frac23\\pi$\n\n(d) $1+\\sqrt2$\n\n(e) $\\ln4\\sqrt3$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 7",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Daerah $D$ terletak di kuadran pertama, dibatasi kurva $y=e^x$, garis $y=e$, dan sumbu $y$. Jika daerah $D$ diputar terhadap sumbu $y$, maka volume benda putar yang terjadi adalah\n\n(a) $\\frac12\\pi(e-2)$\n\n(b) $2\\pi(e-2)$\n\n(c) $\\pi(e-2)$\n\n(d) $2\\pi$\n\n(e) $2\\pi e$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 8",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\lim_{x\\to0}(1+\\sin x)^{1/x}$$\n\n(a) $\\frac1e$\n\n(b) $\\frac2e$\n\n(c) 1\n\n(d) $\\frac e2$\n\n(e) $e$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 9",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-10",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Untuk deret pangkat $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{(-1)^{n+1}(x-3)^n}{n\\cdot2^n}$, himpunan **semua** bilangan real $x$ sehingga deret ini konvergen adalah\n\n(a) $\\{x\\in\\mathbb R\\mid1<x<5\\}$\n\n(b) $\\{x\\in\\mathbb R\\mid1\\le x<5\\}$\n\n(c) $\\{x\\in\\mathbb R\\mid1<x<5,x\\ne3\\}$\n\n(d) $\\{x\\in\\mathbb R\\mid1<x\\le5\\}$\n\n(e) $\\{x\\in\\mathbb R\\mid1\\le x\\le5\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 10",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-11",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Persamaan garis yang melalui $(0,0,0)$ dan tegak lurus bidang $2x+2y+z=4$ adalah\n\n(a) $x=y=2z$\n\n(b) $2x=2y=z$\n\n(c) $2x=y=2z$\n\n(d) $x=2y=2z$\n\n(e) $x=y=z$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 11",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-12",
    "level": "Kuliah",
    "topic": "Persamaan Diferensial",
    "difficulty": 3,
    "title": "Persamaan Diferensial",
    "prompt": "Banyaknya polutan di suatu daerah pada tahun ke-$t$ diperkirakan $p=p(t)$ kg. Andaikan laju perubahan $p$ terhadap $t$ setiap saat $t$ memenuhi persamaan $\\frac{dp}{dt}=200-\\frac{p}{t+20}$ dengan banyaknya polutan saat awal adalah $p(0)=200$ kg. Banyaknya polutan saat $t=10$ tahun adalah $p(10)$ kg, dengan $p(10)=$\n\n(a) 1200\n\n(b) 1500\n\n(c) 1800\n\n(d) 2100\n\n(e) 2400",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 12",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-13",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika keping datar $D=\\{(x,y)\\mid-1\\le x\\le1,\\ 0\\le y\\le3(1-x^2)\\}$ mempunyai rapat massa konstan, maka titik pusat massa keping $D$ adalah $(\\overline x,\\overline y)$, dengan $\\overline x=0$ dan $\\overline y=$\n\n(a) $\\frac32$\n\n(b) $\\frac43$\n\n(c) $\\frac54$\n\n(d) $\\frac65$\n\n(e) 1",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 13",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Untuk fungsi tiga peubah $w=\\ln(x^2+y^2+2z)$, jika $x=s+t$, $y=s-t$, dan $z=2st$, maka $\\frac{\\partial w}{\\partial s}+\\frac{\\partial w}{\\partial t}=$\n\n(a) 0\n\n(b) $\\frac1s+\\frac1t$\n\n(c) $\\frac1{s+t}$\n\n(d) $\\frac4s+\\frac4t$\n\n(e) $\\frac4{s+t}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 14",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-15",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika vektor posisi gerakan partikel di setiap saat $t\\in\\mathbb R$ adalah $\\mathbf r(t)=2t\\mathbf i+(t^2-t)\\mathbf j+t^2\\mathbf k$, maka sudut antara vektor kecepatan dan vektor percepatannya pada saat $t=1$ adalah\n\n(a) $15^\\circ$\n\n(b) $30^\\circ$\n\n(c) $45^\\circ$\n\n(d) $60^\\circ$\n\n(e) $75^\\circ$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 15",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-16",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Kemiringan pendakian pada permukaan $z=2-\\frac12x^2-\\frac12y^2$ di titik $(1,1,1)$ pada $S$ dalam arah vektor $\\mathbf v=3\\mathbf i-4\\mathbf j$ adalah\n\n(a) $\\frac15$\n\n(b) $\\frac25$\n\n(c) $\\frac35$\n\n(d) $\\frac45$\n\n(e) 1",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 16",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-17",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $C=C_1+C_2$ ($C_1$ dilanjutkan $C_2$), $C_1$: ruas garis $y=0$ dari $(0,0)$ ke $(2,0)$ dan $C_2$: busur setengah lingkaran berorientasi positif $x^2+y^2=2x$ dari $(2,0)$ ke $(0,0)$, maka integral garis $\\oint_C e^xy^2dx+(2ye^x+6xy)dy=$\n\n(a) 2\n\n(b) 4\n\n(c) 8\n\n(d) 12\n\n(e) 16",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 17",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-18",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika kurva $C:\\mathbf r=\\mathbf r(t)$ adalah perpotongan permukaan $z=x^2+y^2$ dengan bidang $y=x$ dari titik $(0,0,0)$ ke $(1,1,2)$, dan $F(x,y,z)=yze^x\\mathbf i+ze^x\\mathbf j+ye^x\\mathbf k$ medan vektor konservatif, maka $\\int_C F\\cdot d\\mathbf r=$\n\n(a) $2e$\n\n(b) $e$\n\n(c) $e^2$\n\n(d) 6\n\n(e) 2",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 18",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-19",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $B=\\{(x,y,z)\\mid x^2+y^2+z^2\\le4\\text{ dan }z\\ge0\\}$, maka dengan menggunakan koordinat bola diperoleh $\\iiint_B\\sqrt{x^2+y^2+z^2}\\,dV=$\n\n(a) $4\\pi$\n\n(b) $8\\pi$\n\n(c) $16\\pi$\n\n(d) $2\\pi^2$\n\n(e) $4\\pi^2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 19",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-20",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Kurva $C:\\mathbf r=\\mathbf r(t)$ adalah $\\triangle PQR$ dengan $P(1,0,0)$, $Q(0,2,0)$, $R(0,0,1)$, $C$ berorientasi positif dan $S$ adalah permukaan $\\triangle PQR$. Jika $F(x,y,z)=2y\\mathbf i+4x\\mathbf j+(y-3z)\\mathbf k$, maka\n\n$$\\oint_C F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times F)\\cdot\\mathbf n_S\\,dS=k(\\text{luas }\\triangle PQR),$$\n\ndengan $k=$\n\n(a) 1\n\n(b) $\\frac43$\n\n(c) $\\frac53$\n\n(d) 2\n\n(e) $\\frac73$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 20",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 20",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-21",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Fungsi kompleks $w=f(z)$ memetakan $z=x+yi$ di bidang $xy$ ke $w=u+vi$ di bidang $uv$. Peta daerah $y\\ge0$ di bidang $xy$ oleh $w=\\frac{z-i}{z+i}$ adalah daerah di bidang $uv$ yang memenuhi\n\n(a) $u^2+v^2\\le2v$\n\n(b) $u^2+v^2\\le v$\n\n(c) $u^2+v^2\\le2u$\n\n(d) $u^2+v^2\\le u$\n\n(e) $u^2+v^2\\le1$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 21",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-22",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Bilangan kompleks $e^z$, $z=x+yi$ adalah bilangan real jika $z=$\n\n(a) $x+(n+\\frac12)\\pi i,\\ n\\in\\mathbb Z$\n\n(b) $x+n\\pi i,\\ n\\in\\mathbb Z$\n\n(c) $x+\\frac12n\\pi i,\\ n\\in\\mathbb Z$\n\n(d) $n\\pi+yi,\\ n\\in\\mathbb Z$\n\n(e) $(n+\\frac12)\\pi+yi,\\ n\\in\\mathbb Z$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 22",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-23",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika $A=[0,1)\\cup[2,3]\\subseteq\\mathbb R$, $B=[0,2]\\subseteq\\mathbb R$, dan $f:A\\to B$, $f(x)=\\begin{cases}x,&0\\le x<1\\\\x-1,&2\\le x\\le3\\end{cases}$, maka\n\n(a) $f$ bijektif, $f$ kontinu, dan $f^{-1}$ tak kontinu\n\n(b) $f$ bijektif, $f$ tak kontinu, dan $f^{-1}$ kontinu\n\n(c) $f$ bijektif, $f$ kontinu, dan $f^{-1}$ kontinu\n\n(d) $f$ bijektif serta $f$ dan $f^{-1}$ tak kontinu\n\n(e) $f$ tak bijektif serta $f$ dan $f^{-1}$ kontinu",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 23",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-24",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Barisan fungsi $f_n(x)=\\frac{x}{1+nx}$ dengan $x\\ge0$ dan $n\\in\\mathbb N$ konvergen ke $f(x)=0$. Untuk barisan $\\{f_n\\}$ ini, $\\sup_{x\\ge0}|f_n(x)-f(x)|=$\n\n(a) 1\n\n(b) $1-\\frac1n$\n\n(c) $\\frac1n$\n\n(d) $\\frac1{n+1}$\n\n(e) 0",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 24",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2015-i-pg-25",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Deret fungsi $\\displaystyle\\sum_{n=0}^{\\infty}x(1-x)^n$ bersifat\n\n(a) divergen untuk semua bilangan real $x$\n\n(b) konvergen ke $f(x)=x$ untuk $-1<x<1$\n\n(c) konvergen ke $f(x)=1$ untuk $-1<x<1$\n\n(d) konvergen ke $f(x)=x$ untuk $0<x<2$\n\n(e) konvergen ke $f(x)=1$ untuk $0<x<2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2015 — Tahap I, Pilihan Ganda, Nomor 25",
      "competition": "MaG-D ITB",
      "year": 2015,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2015.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-02",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Solusi dari pertaksamaan $x\\le\\sqrt{2-x}$ adalah selang\n\n(a) $[-2,1]$\n\n(b) $[-1,2]$\n\n(c) $(-\\infty,1]$\n\n(d) $(-\\infty,0]$\n\n(e) $(-\\infty,2]$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Agar fungsi $f(x)=\\begin{cases}\\frac1a x^2+2,&x\\le2\\\\ax,&x>2\\end{cases}$ ($a\\ne0$) kontinu di setiap $x\\in\\mathbb R$, maka konstanta $a=$\n\n(a) −2 atau 2\n\n(b) −1 atau 1\n\n(c) 1 atau 2\n\n(d) −2 atau 1\n\n(e) −1 atau 2",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 3",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Untuk polinom $f(x)=2ax^3+3bx^2+6cx+d$ ($a,b,c,d$ konstanta real), jika $a<0$ dan $D=b^2-4ac>0$, maka titik maksimum dari kurva $f$ tercapai di $(x_0,y_0)$ dengan $x_0=$\n\n(a) $\\frac{\\sqrt D}{a}$\n\n(b) $\\frac ca$\n\n(c) $-\\frac ba$\n\n(d) $-\\frac b{2a}-\\frac{\\sqrt D}{2a}$\n\n(e) $-\\frac b{2a}+\\frac{\\sqrt D}{2a}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 4",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi $f(x)=-x-\\sqrt{1+x^2}$ ($D_f=\\mathbb R$) bersifat\n\n(a) monoton turun dan cekung ke bawah\n\n(b) monoton naik dan cekung ke bawah\n\n(c) monoton turun dan cekung ke atas\n\n(d) monoton naik dan cekung atas\n\n(e) tidak monoton dan cekung ke bawah",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 5",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $f(x)=\\begin{cases}\\frac{g(x)}x,&x\\ne0\\\\0,&x=0\\end{cases}$ dengan $g(0)=0$, $g'(0)=0$, dan $g''$ kontinu di 0, maka $f'(0)=$\n\n(a) 0\n\n(b) $\\frac12g'(0)$\n\n(c) $\\frac12g''(0)$\n\n(d) $g''(0)$\n\n(e) $2g''(0)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 6",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $\\int_0^2x^3dx$ dihitung dengan membagi $[0,2]$ sama panjang dan $\\lim_{n\\to\\infty}\\sum_{k=1}^n x_k^3\\Delta x_k$, maka $\\int_0^2x^3dx=$\n\n(a) $\\displaystyle\\lim_{n\\to\\infty}\\frac8{n^4}\\sum_{k=1}^nk^3$\n\n(b) $\\displaystyle\\lim_{n\\to\\infty}\\frac8{n^3}\\sum_{k=1}^nk^3$\n\n(c) $\\displaystyle\\lim_{n\\to\\infty}\\frac{16}{n^4}\\sum_{k=1}^n(k-1)^3$\n\n(d) $\\displaystyle\\lim_{n\\to\\infty}\\frac{16}{n^4}\\sum_{k=1}^nk^3$\n\n(e) $\\displaystyle\\lim_{n\\to\\infty}\\frac{16}{n^4}\\sum_{k=1}^n(k+1)^3$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 7",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika daerah $D=\\{(x,y)\\mid0\\le x\\le\\pi,\\sin x\\le y\\le1\\}$ diputar terhadap sumbu $y$, maka volumenya adalah\n\n(a) $2\\pi^2$\n\n(b) $\\pi(\\pi^2-2)$\n\n(c) $\\pi(\\pi-2)$\n\n(d) $\\pi^2(\\pi-1)$\n\n(e) $\\pi^2(\\pi-2)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 8",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $f$ kontinu pada $\\mathbb R$ dan $\\int_0^xf(t)\\,dt=\\int_x^1t^2f(t)\\,dt+2x^2+4x+c\\ \\forall x\\in\\mathbb R$, maka konstanta $c$ adalah $c=$\n\n(a) 1\n\n(b) −1\n\n(c) 0\n\n(d) 2\n\n(e) −2",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 9",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Pusat daerah $D=\\{(x,y)\\mid-\\pi\\le x\\le\\pi,0\\le y\\le3\\cos\\frac x2\\}$ adalah titik $(0,\\overline y)$, dengan $\\overline y=$\n\n(a) $\\frac38\\pi$\n\n(b) $\\frac13\\pi$\n\n(c) $\\frac12\\pi$\n\n(d) 1\n\n(e) $1\\frac13$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 10",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Persamaan bidang singgung pada permukaan $S:2x^2+y^3+yz^2-z^4=3$ di $(1,1,1)$ adalah\n\n(a) $z=2x-2y+1$\n\n(b) $z=2y-2x+1$\n\n(c) $z=2x+3y-4$\n\n(d) $z=2x+2y-3$\n\n(e) $z=2x-y$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 11",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-12",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan berarah dari $f(x,y,z)=xy+xz+yz^2$ di $(1,0,1)$ sepanjang kurva $\\mathbf r(t)=\\cos t\\,\\mathbf i+\\sin t\\,\\mathbf j+e^t\\mathbf k$ adalah\n\n(a) $3\\sqrt2$\n\n(b) $\\frac32\\sqrt2$\n\n(c) $\\sqrt2$\n\n(d) 2\n\n(e) 3",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 12",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-13",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Dengan transformasi ke koordinat silinder $(x,y,z)=(r\\cos t,r\\sin t,z)$,\n\n$$\\int_{-1}^1\\int_0^{\\sqrt{1-x^2}}\\int_0^{\\sqrt{1-x^2-y^2}}\\sqrt{1-x^2-y^2}\\,dz\\,dy\\,dx=$$\n\n(a) $\\frac12$\n\n(b) $\\frac14$\n\n(c) $\\pi$\n\n(d) $\\frac\\pi2$\n\n(e) $\\frac\\pi4$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 13",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 3, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $C$ adalah kurva ruang berbentuk garis lurus dari titik $A(0,0,1)$ ke titik $B(2,2,0)$, maka integral garis $\\int_C(x+y+z)\\,ds=$\n\n(a) $6\\frac23$\n\n(b) 7\n\n(c) $7\\frac12$\n\n(d) 8\n\n(e) $8\\frac13$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 14",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-15",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Benda ruang $B$ yang dibatasi bidang $xoy$, $yoz$, $xoz$, $x+y=2$, dan $2x+z=4$ membentuk permukaan tutup $S$ dengan vektor normal $\\mathbf n$ ke arah luar. Jika $\\mathbf F(x,y,z)=y\\mathbf i+xz\\mathbf j+z^2\\mathbf k$, maka $\\oiint_S\\mathbf F\\cdot\\mathbf n\\,dS=$\n\n(a) $\\int_0^2\\int_0^{2-x}\\int_0^{4-2x}2z\\,dz\\,dy\\,dx$\n\n(b) $\\int_0^2\\int_0^{2y}\\int_0^{4-2x}2z\\,dz\\,dy\\,dx$\n\n(c) $\\int_0^2\\int_0^{2-x}\\int_0^{4-2x}z^2\\,dz\\,dy\\,dx$\n\n(d) $\\int_0^2\\int_0^{2-y}\\int_0^{4-2x}2z\\,dz\\,dy\\,dx$\n\n(e) $\\int_0^2\\int_0^{2y}\\int_0^{4-2x}z^2\\,dz\\,dy\\,dx$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 15",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-16",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Argumen utama dari bilangan kompleks $z=\\frac{1-i}{1+i}$ adalah\n\n(a) $\\pi$\n\n(b) $-\\frac\\pi2$\n\n(c) $\\frac\\pi2$\n\n(d) $-\\frac\\pi4$\n\n(e) $\\frac\\pi4$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 16",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-17",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika daerah tutup $D=\\{(x,y)\\mid0\\le x\\le1,0\\le y\\le x\\}$ di bidang-$z$ dipetakan oleh fungsi kompleks $w=f(z)=iz^2$, maka petanya adalah $f(D)=$\n\n(a) $\\{(u,v)\\mid-2\\le u\\le0,0\\le v\\le\\frac u2+1\\}$\n\n(b) $\\{(u,v)\\mid0\\le u\\le2,0\\le v\\le\\frac u2+1\\}$\n\n(c) $\\{(u,v)\\mid-2\\le u\\le0,0\\le v\\le1-\\frac{u^2}4\\}$\n\n(d) $\\{(u,v)\\mid0\\le u\\le2,0\\le v\\le1-\\frac{u^2}4\\}$\n\n(e) $\\{(u,v)\\mid-2\\le u\\le2,0\\le v\\le1-\\frac{u^2}4\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 17",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-18",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Solusi dari persamaan kompleks $\\sinh z=i$ adalah\n\n(a) $\\left(-\\frac\\pi2+2n\\pi\\right)i,\\ n\\in\\mathbb Z$\n\n(b) $-\\frac\\pi2i+2n\\pi,\\ n\\in\\mathbb Z$\n\n(c) $\\frac\\pi2i+2n\\pi,\\ n\\in\\mathbb Z$\n\n(d) $\\frac\\pi2+2n\\pi i,\\ n\\in\\mathbb Z$\n\n(e) $\\left(\\frac\\pi2+2n\\pi\\right)i,\\ n\\in\\mathbb Z$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 18",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-19",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Deret Laurent dari fungsi kompleks $w=\\frac1z$ untuk $|z-2|>2$ adalah\n\n(a) $\\displaystyle\\sum_{n=0}^\\infty\\frac{2^n}{(z-2)^{n+1}}$\n\n(b) $\\displaystyle\\sum_{n=1}^\\infty\\frac{(-1)^n2^n}{(z-2)^n}$\n\n(c) $\\displaystyle\\sum_{n=1}^\\infty\\frac{(-1)^n2^n}{(z-2)^{n+1}}$\n\n(d) $\\displaystyle\\sum_{n=0}^\\infty\\frac{(-1)^n2^n}{(z-2)^{n+1}}$\n\n(e) $\\displaystyle\\sum_{n=0}^\\infty\\frac{(-1)^n2^n}{(z-2)^n}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 19",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-20",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika $C$ adalah lintasan sederhana dari $z_1=i$ ke $z_2=2+2i$, maka $\\int_C\\frac{dz}{z}=$\n\n(a) $(\\ln2\\sqrt2)-\\frac\\pi4i$\n\n(b) $(\\ln2\\sqrt2)+\\frac\\pi4i$\n\n(c) $(\\ln2\\sqrt2)-\\frac\\pi2i$\n\n(d) $(\\ln2)-\\frac\\pi4i$\n\n(e) $(\\ln2)+\\frac\\pi4i$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 20",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 20",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-21",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika $C:|z-2|=1$ lintasan tutup sederhana yang berorientasi positif, maka $\\oint\\frac{e^{iz}\\,dz}{z\\cos z}=$\n\n(a) 4\n\n(b) −4\n\n(c) $2\\pi i$\n\n(d) $-2\\pi i$\n\n(e) $-\\frac2\\pi i$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 21",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-22",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Untuk sebarang bilangan real $a,b$, dan $c$, jika $c=\\frac12(a+b-|a-b|)$, maka $c$ adalah nilai\n\n(a) rata-rata dari $a$ dan $b$\n\n(b) minimum dari $a,b$ dan 0\n\n(c) maksimum dari $a,b$ dan 0\n\n(d) minimum dari $a$ dan $b$\n\n(e) maksimum dari $a$ dan $b$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 22",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-23",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Barisan bilangan real $\\{c_n\\}$ dengan $c_1=\\sqrt6$, $c_2=\\sqrt{6+\\sqrt6}=\\sqrt{6+c_1}$, $\\cdots$, $c_{n+1}=\\sqrt{6+c_n}$ konvergen ke\n\n(a) 2\n\n(b) $\\sqrt6$\n\n(c) 3\n\n(d) $2\\sqrt3$\n\n(e) 6",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 23",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-24",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $y=f(x)$ mempunyai turunan kedua yang kontinu di titik-dalam $c\\in D_f$, maka $\\lim_{h\\to0}\\frac{f(c+3h)-f(c-3h)-2f(c)}{h^2}=$\n\n(a) 0\n\n(b) $3f''(c)$\n\n(c) $4\\frac12f''(c)$\n\n(d) $6f''(c)$\n\n(e) $9f''(c)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 24",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2017-i-pg-25",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Untuk barisan fungsi real $\\{f_n\\}$ dengan $f_n(x)=\\frac{x}{1+nx}$ ($x\\ge0$), jika $\\lim_{n\\to\\infty}f_n(x)=f(x)$, maka $\\sup_{x\\ge0}|f_n(x)-f(x)|=$\n\n(a) 0\n\n(b) $\\frac1n$\n\n(c) $1-\\frac1n$\n\n(d) $1+\\frac1n$\n\n(e) 1",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2017 — Tahap I, Pilihan Ganda, Nomor 25",
      "competition": "MaG-D ITB",
      "year": 2017,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied University Challange ZIP: MaGD/Soal Babak I MagD 2017.pdf, PDF page 5, packet 1. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Luas daerah $D=\\{(x,y)\\mid4\\le x^2+y^2\\le4y\\}$ adalah $L$ satuan luas, dengan $L=$\n\n(a) $\\frac23\\pi+\\sqrt3$\n\n(b) $\\frac43\\pi+2\\sqrt3$\n\n(c) 8\n\n(d) $6\\sqrt3$\n\n(e) $3\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-04",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Jika daerah definisi fungsi $f(x)=\\frac{(1+x)^2}{1+x^2}$ adalah $D_f=\\mathbb R$, maka daerah nilai $f$ adalah $R_f=$\n\n(a) $\\mathbb R$\n\n(b) $\\{y\\in\\mathbb R\\mid0\\le y\\le2\\}$\n\n(c) $\\{y\\in\\mathbb R\\mid1\\le y\\le2\\}$\n\n(d) $\\{y\\in\\mathbb R\\mid y\\ge0\\}$\n\n(e) $\\{y\\in\\mathbb R\\mid y\\ge1\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 4",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\lim_{x\\to0}\\frac{\\sqrt{1-\\cos x}}{\\sin x}=$$\n\n(a) 0\n\n(b) $\\frac12\\sqrt2$\n\n(c) $-\\frac12\\sqrt2$\n\n(d) 1\n\n(e) tidak ada",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 5",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi $f(x)=\\frac{x^2}{1-\\cos x}$ kontinu untuk setiap $x\\ne0$. Agar fungsi ini kontinu di 0, maka nilai $f(0)$ harus didefinisikan sebagai $f(0)=$\n\n(a) 0\n\n(b) 1\n\n(c) −1\n\n(d) 2\n\n(e) −2",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 6",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan pertama dari fungsi $f(x)=\\frac x2+x^2\\sin\\frac2x$ di titik $x=\\frac2{n\\pi}$ untuk $n$ bilangan ganjil positif adalah $f'\\left(\\frac2{n\\pi}\\right)=$\n\n(a) $2\\frac12$\n\n(b) $1\\frac12$\n\n(c) $\\frac12$\n\n(d) $-\\frac12$\n\n(e) $-1\\frac12$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 7",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $A$ adalah himpunan semua titik ekstrim dari fungsi $f(x)=|2x^2-x^4|$, maka banyaknya unsur di himpunan $A$ adalah\n\n(a) 3\n\n(b) 4\n\n(c) 5\n\n(d) 6\n\n(e) 7",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 8",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-09",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Fungsi $f$ mempunyai turunan pertama yang kontinu pada selang buka $I$ yang memuat $c$. Jika $f(c)=0$ dan $f'(c)>0$, maka $\\exists\\delta>0$ sehingga\n\n(a) $f(x)=0\\ \\forall x\\in(c-\\delta,c+\\delta)$\n\n(b) $f(x)>0\\ \\forall x\\in(c-\\delta,c)$ dan $f(x)<0\\ \\forall x\\in(c,c+\\delta)$\n\n(c) $f(x)>0\\ \\forall x\\in(c-\\delta,c+\\delta)$\n\n(d) $f(x)<0\\ \\forall x\\in(c-\\delta,c)$ dan $f(x)>0\\ \\forall x\\in(c,c+\\delta)$\n\n(e) $f(x)<0\\ \\forall x\\in(c-\\delta,c+\\delta)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 9",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-10",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika fungsi $f$ terintegralkan pada $[0,1]$ dan $P$ suatu partisi yang membagi $[0,1]$ atas $n$ bagian sama panjang, maka $\\int_0^1 f(x)\\,dx=$\n\n(a) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac1k f\\left(\\frac kn\\right)$\n\n(b) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac nk f\\left(\\frac kn\\right)$\n\n(c) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n f\\left(\\frac kn\\right)$\n\n(d) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac kn f\\left(\\frac kn\\right)$\n\n(e) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac1n f\\left(\\frac kn\\right)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 10",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $f$ kontinu dan monoton naik pada $[a,b]$ dan $a>0$, maka $\\int_a^b f(x)\\,dx+\\int_{f(a)}^{f(b)} f^{-1}(y)\\,dy=$\n\n(a) $af(a)+bf(b)$\n\n(b) $(b-a)(f(b)-f(a))$\n\n(c) $bf(b)-af(a)$\n\n(d) $af(b)-bf(a)$\n\n(e) $bf(b)-bf(a)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 11",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-12",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika fungsi $f$ dan $g$ yang kontinu pada $[a,b]$ memenuhi $\\int_a^b f(x)\\,dx=\\int_a^b g(x)\\,dx$, maka\n\n(a) $\\exists C$ ($C$ konstanta real) $\\ni f(x)=g(x)+C\\ \\forall x\\in[a,b]$\n\n(b) $\\exists c\\in[a,b]\\ni f(c)+g(c)=0$\n\n(c) $f(x)=g(x)\\ \\forall x\\in[a,b]$\n\n(d) $f(x)+g(x)=0\\ \\forall x\\in[a,b]$\n\n(e) $\\exists c\\in[a,b]\\ni f(c)=g(c)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 12",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 2. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-13",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Jika suku barisan bilangan real $\\{a_n\\}$, $n\\in\\mathbb N$ adalah $a_1>0$, $a_2=\\frac1{2+a_1},\\cdots,a_{n+1}=\\frac1{2+a_n},\\cdots$, maka barisan $\\{a_n\\}$ konvergen ke\n\n(a) $2-\\sqrt2$\n\n(b) $\\sqrt2+1$\n\n(c) 2\n\n(d) $\\sqrt2-1$\n\n(e) 1",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 13",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-14",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika barisan fungsi $\\{f_n\\}$, $n\\in\\mathbb N$ dengan $f_n(x)=nxe^{-nx}$, $x\\in\\mathbb R$ konvergen $y=f(x)$, $x\\in\\mathbb R$, maka $\\sup\\{|f_n(x)-f(x)|:x\\in\\mathbb R\\}=$\n\n(a) 0\n\n(b) 1\n\n(c) $\\frac1e$\n\n(d) $\\frac1{e-1}$\n\n(e) $e$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 14",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-15",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Deret Maclaurin dari fungsi $f(x)=\\frac{1-e^{-x^2}}{x^2}$, $x\\ne0$; $f(0)=1$ adalah\n\n(a) $\\displaystyle\\sum_{n=0}^\\infty\\frac{(-1)^nx^{2n}}{(n+1)!}$\n\n(b) $\\displaystyle\\sum_{n=1}^\\infty\\frac{(-1)^{n+1}x^{2n}}{n!}$\n\n(c) $\\displaystyle\\sum_{n=0}^\\infty\\frac{(-1)^nx^{2n}}{n!}$\n\n(d) $\\displaystyle\\sum_{n=0}^\\infty\\frac{(-1)^{n+1}x^{2n}}{(n+1)!}$\n\n(e) $\\displaystyle\\sum_{n=0}^\\infty\\frac{x^{2n}}{(n+1)!}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 15",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-16",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Jika garis $g$ melalui titik $A(1,1,1)$ dan $B(2,3,4)$, maka titik tembus $g$ dengan bidang $yoz$ adalah titik\n\n(a) $(0,-2,-1)$\n\n(b) $(0,-1,-2)$\n\n(c) $(0,1,2)$\n\n(d) $(0,2,3)$\n\n(e) $(0,3,4)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 16",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-17",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\lim_{(x,y)\\to(1,2)}\\frac{4x^2-y^2}{2x^2-xy}=$$\n\n(a) 4\n\n(b) 2\n\n(c) 0\n\n(d) −4\n\n(e) tidak ada",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 17",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-18",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Sebutir peluru ditembakkan ke arah bidang $xoy$ dengan ujung senjata di titik $(1,2,1)$ pada permukaan $S:z=y^2-3x^2$. Jika arah peluru tegak lurus permukaan $S$ dan lintasannya berbentuk garis lurus, maka titik tembus peluru di bidang $xoy$ adalah\n\n(a) $(-5,-6,0)$\n\n(b) $(-6,5,0)$\n\n(c) $(6,-5,0)$\n\n(d) $(-5,6,0)$\n\n(e) $(5,6,0)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 18",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-19",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $g$ terdiferensialkan pada kuadran pertama dan $f(x,y)=\\frac yx+g\\left(\\frac xy\\right)$, maka $x\\frac{\\partial f}{\\partial x}+y\\frac{\\partial f}{\\partial y}=$\n\n(a) $-2\\frac xy$\n\n(b) $-2\\frac yx$\n\n(c) 0\n\n(d) $2\\frac xy$\n\n(e) $2\\frac yx$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 19",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-20",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Dengan transformasi ke koordinat bola, jika $B=\\{(x,y,z)\\mid1\\le x^2+y^2+z^2\\le4\\}$, maka $\\iiint_B(x^2+y^2)\\,dV=$\n\n(a) $\\int_0^{2\\pi}\\int_0^{2\\pi}\\int_1^2r^3\\sin\\phi\\,dr\\,d\\phi\\,d\\theta$\n\n(b) $\\int_0^{2\\pi}\\int_0^\\pi\\int_1^4r^4\\sin^3\\phi\\,dr\\,d\\phi\\,d\\theta$\n\n(c) $\\int_0^{2\\pi}\\int_0^\\pi\\int_1^2r^3\\sin\\phi\\,dr\\,d\\phi\\,d\\theta$\n\n(d) $\\int_0^{2\\pi}\\int_0^\\pi\\int_1^2r^4\\sin^3\\theta\\,dr\\,d\\phi\\,d\\theta$\n\n(e) $\\int_0^{2\\pi}\\int_0^\\pi\\int_1^2r^4\\sin^3\\phi\\,dr\\,d\\phi\\,d\\theta$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 20",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 20",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-21",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $\\mathbf F(x,y)=e^xy^2\\mathbf i+(2ye^x+6xy)\\mathbf j$ dan $C=C_1+C_2$; $C_1:y=0$ dari $(0,0)$ ke $(2,0)$, $C_2$: busur lingkaran $x^2+y^2=2x$ dari $(2,0)$ ke $(0,0)$, maka dalam koordinat kutub integral garis $\\oint_C\\mathbf F\\cdot d\\mathbf r=$\n\n(a) $\\int_0^{\\pi/2}\\int_0^{2\\cos\\theta}6r\\sin\\theta\\,dr\\,d\\theta$\n\n(b) $\\int_0^{\\pi/2}\\int_0^{2\\sin\\theta}6r\\cos\\theta\\,dr\\,d\\theta$\n\n(c) $\\int_{-\\pi/2}^{\\pi/2}\\int_0^{2\\cos\\theta}6r^2\\sin\\theta\\,dr\\,d\\theta$\n\n(d) $\\int_0^{\\pi/2}\\int_0^{2\\cos\\theta}6r^2\\sin\\theta\\,dr\\,d\\theta$\n\n(e) $\\int_0^{\\pi/2}\\int_0^{2\\sin\\theta}6r^2\\cos\\theta\\,dr\\,d\\theta$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 21",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-22",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $B=\\{(x,y,z)\\mid-1\\le x\\le1,0\\le y\\le3,0\\le z\\le\\sqrt{1-x^2}\\}$, $S$ adalah permukaan batas $B$ dengan vektor normal satuan $\\mathbf n$ ke arah luar, dan $\\mathbf F(x,y,z)=(2xy+y^2z)\\mathbf i+(xz-y^2)\\mathbf j+(xy^2+z^2)\\mathbf k$, maka $\\oiint_S\\mathbf F\\cdot\\mathbf n\\,dS=$\n\n(a) 2\n\n(b) 4\n\n(c) 6\n\n(d) $\\pi$\n\n(e) $2\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 22",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-23",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Argumen dari $z\\in\\mathbb C$, $z\\ne0$ adalah sudut antara $0z$ dengan sumbu-$x$ positif. Jika $z\\ne0$, maka $\\arg(z^{-1})=$\n\n(a) $\\arg z$\n\n(b) $\\arg(-z)$\n\n(c) $\\arg iz$\n\n(d) $-\\arg iz$\n\n(e) $-\\arg z$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 23",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-24",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Himpunan semua bilangan kompleks yang memenuhi $\\cosh z=0$ adalah\n\n(a) $n\\pi i,n\\in\\mathbb Z$\n\n(b) $(n+\\frac12)\\pi i,n\\in\\mathbb Z$\n\n(c) $(2n+\\frac12)\\pi i,n\\in\\mathbb Z$\n\n(d) $(2n+1)\\pi i,n\\in\\mathbb Z$\n\n(e) $2n\\pi i,n\\in\\mathbb Z$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 24",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2014-i-pg-25",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika lintasan $C:|z|=2$ berorientasi positif, maka integral kompleks $\\int_C\\frac{e^{iz}\\,dz}{\\cos z}=$\n\n(a) $4\\pi$\n\n(b) $4\\pi i$\n\n(c) 0\n\n(d) $-4\\pi i$\n\n(e) $-4\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2014 — Tahap I, Pilihan Ganda, Nomor 25",
      "competition": "MaG-D ITB",
      "year": 2014,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2014.pdf, PDF page 3. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-02",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Pada sebuah bak terdapat dua saluran pengisian yang lajunya konstan. Saluran I dapat mengisi bak dari keadaan kosong sampai penuh dalam 2 jam dan saluran II dapat melakukannya dalam 3 jam. Jika kedua saluran dibuka bersamaan, maka bak ini penuh dalam waktu $T$ menit, dengan $T=$\n\n(a) 60\n\n(b) 64\n\n(c) 72\n\n(d) 80\n\n(e) 90",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 2",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika konstanta $a$ dan $b$ memenuhi $\\lim_{x\\to1}\\frac{x-1}{\\sqrt{x+a}+b}=4$, maka $a+b=$\n\n(a) 2\n\n(b) 1\n\n(c) 0\n\n(d) −1\n\n(e) −2",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 3",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 3",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Untuk fungsi $f,g:\\mathbb R\\to\\mathbb R$ yang memenuhi $g(x)=f(2ax)\\ \\forall x\\in\\mathbb R$ dan $a>0$, jika $\\lim_{x\\to0}f(x)=\\ell$, maka $\\lim_{x\\to0}g(x)=$\n\n(a) 0\n\n(b) $a\\ell$\n\n(c) $2a\\ell$\n\n(d) $\\ell$\n\n(e) $2\\ell$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 4",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-05",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\lim_{x\\to\\infty}\\left(1+\\frac1{2x}\\right)^x=$$\n\n(a) $e$\n\n(b) $2e$\n\n(c) $e^2$\n\n(d) $\\frac1{\\sqrt e}$\n\n(e) $\\sqrt e$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 5",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-06",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Aljabar",
    "prompt": "Jika bilangan real $a,b,c$ dengan $a\\ne b\\ne c$ memenuhi $|a-b|-|b-c|=|a-c|$, maka suatu urutan yang mungkin dari titik $a,b$, dan $c$ pada garis bilangan adalah\n\n(a) $c<a<b$\n\n(b) $c<b<a$\n\n(c) $b<c<a$\n\n(d) $b<a<c$\n\n(e) $a<b<c$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 6",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika kurva $f(x)=ax^3+bx^2+cx$ melalui titik $(1,4)$, $f'(1)=2$, dan $f''(1)=0$, maka $f(2)=$\n\n(a) 2\n\n(b) 4\n\n(c) 6\n\n(d) 8\n\n(e) 12",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 7",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi $f(x)=x^{1/3}\\sin x$, $x\\in\\mathbb R$ bersifat\n\n(a) $f'$ kontinu di setiap $x\\in\\mathbb R$\n\n(b) $f$ kontinu di setiap $x\\in\\mathbb R$ kecuali di 0\n\n(c) $f$ kontinu di 0 tetapi $f'(0)$ tidak ada\n\n(d) $f'$ kontinu di setiap $x\\in\\mathbb R$ kecuali di 0\n\n(e) $f$ dan $f'$ tidak kontinu di 0",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 8",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $y=\\sqrt{1+x^2}-x$, $x\\in\\mathbb R$, maka $\\forall x\\in\\mathbb R$ berlaku sifat\n\n(a) $y'<0$ dan $y''<0$\n\n(b) $y'>0$ dan $y''<0$\n\n(c) $y'<0$ dan $y''>0$\n\n(d) $y'>0$ dan $y''>0$\n\n(e) $y>0$ dan $y''<0$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 9",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Sifat fungsi $f(x)=\\sqrt{x+2|x|}$, $x\\in\\mathbb R$ di 0 adalah\n\n(a) punya limit tetapi tidak kontinu\n\n(b) punya turunan dan kurvanya punya garis singgung\n\n(c) punya turunan tetapi kurvanya tidak punya garis singgung\n\n(d) tidak punya turunan tetapi kurvanya punya garis singgung\n\n(e) tidak punya turunan dan juga kurvanya tidak punya garis singgung",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 10",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika fungsi $f$ kontinu pada selang $[0,\\infty)$ dan memenuhi $\\int_0^{x^2}f(t)\\,dt=x^3$, maka aturan fungsi $f$ pada $[0,\\infty)$ adalah $f(x)=$\n\n(a) $\\sqrt{\\frac32x}$\n\n(b) $\\frac32\\sqrt x$\n\n(c) $\\frac32x$\n\n(d) $\\frac12\\sqrt{3x}$\n\n(e) $\\frac23\\sqrt x$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 11",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-12",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "$$\\int_0^1\\frac{x\\,dx}{1+x}=$$\n\n(a) $1-\\ln2$\n\n(b) $-1+2\\ln2$\n\n(c) $2(1-\\ln2)$\n\n(d) $1+\\ln2$\n\n(e) $\\ln2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 12",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-13",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Jika $P_n$ adalah partisi regular yang membagi selang $[0,1]$ atas $n$ bagian yang sama panjang, maka limit jumlah atas (*upper sum*) dari $\\int_0^1\\frac{x\\,dx}{1+x^2}$ adalah\n\n(a) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac{n^2}{n^2+k^2}$\n\n(b) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac{kn}{n^2+k^2}$\n\n(c) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac n{n^2+k^2}$\n\n(d) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac{k^2}{n^2+k^2}$\n\n(e) $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^n\\frac k{n^2+k^2}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 13",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 3, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika cakram lingkaran $D=\\{(x,y)\\mid x^2+y^2\\le4\\}$ diputar terhadap garis $x+y=4$, maka volum benda putar yang terjadi adalah $v$ satuan volum, dengan $v=$\n\n(a) $16\\pi$\n\n(b) $32\\pi^2$\n\n(c) $16\\sqrt2\\pi^2$\n\n(d) $8\\sqrt2\\pi^2$\n\n(e) $16\\sqrt2\\pi$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 14",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-15",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Untuk barisan $\\{x_n\\}$, jika $S=\\{x_n\\mid x_n=1-\\frac{(-1)^n}{n},n\\text{ bilangan asli}\\}$, maka $\\sup S+\\inf S=$\n\n(a) 1\n\n(b) $1\\frac12$\n\n(c) 2\n\n(d) $2\\frac12$\n\n(e) $3\\frac12$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 15",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-16",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Barisan bilangan real $u_n=\\sqrt[n]{1+\\left(\\frac32\\right)^n}$, $n=1,2,\\cdots$ bersifat\n\n(a) konvergen ke $\\frac32$\n\n(b) konvergen ke 1\n\n(c) konvergen ke $\\frac23$\n\n(d) divergen ke $\\infty$\n\n(e) divergen oskilasi",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 16",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-17",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Selang kekonvergenan dari deret $\\displaystyle\\sum_{n=0}^\\infty\\frac{(-1)^nx^{n+1}}{n+1}=x-\\frac12x^2+\\frac13x^3-\\frac14x^4+\\cdots$ adalah himpunan semua $x$ yang memenuhi\n\n(a) $-1<x<1$\n\n(b) $-1\\le x<1$\n\n(c) $-1<x\\le1$\n\n(d) $-1\\le x\\le1$\n\n(e) $0\\le x\\le1$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 17",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-18",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika vektor kecepatan gerakan partikel setiap saat $t$ adalah $\\mathbf v(t)=\\cos t\\,\\mathbf i-\\sin t\\,\\mathbf j+\\sin t\\,\\mathbf k$ dan saat $t=0$ posisi partikel di titik $(1,2,1)$, maka posisi partikel saat $t=3\\pi$ adalah\n\n(a) $(0,1,1)$\n\n(b) $(1,0,3)$\n\n(c) $(0,1,-1)$\n\n(d) $(1,2,1)$\n\n(e) $(-1,-2,-1)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 18",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-19",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Sebutir peluru ditembakkan dengan ujung senjata di titik $(2,1,2)$ pada permukaan $S:z=x^2-2y^2$ ke bidang $xoy$. Jika arah peluru tegak lurus permukaan $S$ dan lintasannya berbentuk garis lurus, maka koordinat titik tembus peluru dengan bidang $xoy$ adalah\n\n(a) $(14,-5,0)$\n\n(b) $(10,7,0)$\n\n(c) $(9,-5,0)$\n\n(d) $(10,5,0)$\n\n(e) $(10,-7,0)$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 19",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-20",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Untuk fungsi $z=f(x,y)$ yang terdiferensialkan pada $\\mathbb R^2$, jika $x=u+v$ dan $y=u-v$, maka $\\frac{\\partial z}{\\partial u}+\\frac{\\partial z}{\\partial v}=$\n\n(a) 0\n\n(b) $\\frac{\\partial z}{\\partial y}$\n\n(c) $\\frac{\\partial z}{\\partial x}$\n\n(d) $2\\frac{\\partial z}{\\partial x}$\n\n(e) $2\\frac{\\partial z}{\\partial y}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 20",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 20",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-21",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Dengan mengubah urutan integralnya ke $dy\\,dx$, $\\displaystyle\\int_0^4\\int_{\\sqrt y}^2\\frac{dx\\,dy}{1+x^3}=$\n\n(a) $\\frac13\\ln3$\n\n(b) $\\frac23\\ln3$\n\n(c) $\\ln3$\n\n(d) $1\\frac13$\n\n(e) $1\\frac23$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 21",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-22",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika $D=\\{(x,y)\\mid x^2+y^2\\le2x,x^2+y^2\\ge1,y\\ge0\\}$, maka dengan transformasi ke koordinat polar, $\\displaystyle\\iint_D\\frac{dA}{\\sqrt{x^2+y^2}}=$\n\n(a) $\\sqrt3-\\frac\\pi3$\n\n(b) $2-\\frac\\pi3$\n\n(c) $1-\\frac\\pi6$\n\n(d) $\\sqrt3-\\frac\\pi6$\n\n(e) $2\\sqrt3-\\frac\\pi2$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 22",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-23",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Untuk medan vektor konservatif $\\mathbf F(x,y,z)=(y+z)\\mathbf i+(z+x)\\mathbf j+(x+y)\\mathbf k$, suatu fungsi potensial $u=\\phi(x,y,z)$ yang memenuhi $\\nabla\\phi(x,y,z)=\\mathbf F(x,y,z)$ adalah $\\phi(x,y,z)=$\n\n(a) $xy+yz+xz$\n\n(b) $xy+yz+xyz$\n\n(c) $\\frac12(x^2+y^2+z^2)$\n\n(d) $\\frac12(xy+yz+xz)$\n\n(e) $x+y+z$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 23",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-24",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Fungsi kompleks $w=\\frac{-i}{z+i}$ memetakan himpunan titik di bidang $xoy$ ke bidang $uov$. Peta dari himpunan $\\{(x,y)\\mid y\\ge0\\}$ oleh $w=\\frac{-i}{z+i}$ adalah himpunan\n\n(a) $\\{(u,v)\\mid u^2+v^2\\le v\\}$\n\n(b) $\\{(u,v)\\mid u^2+v^2\\le u\\}$\n\n(c) $\\{(u,v)\\mid u^2+v^2\\le-u\\}$\n\n(d) $\\{(u,v)\\mid u^2+v^2\\le-v\\}$\n\n(e) $\\{(u,v)\\mid u^2+v^2\\ge u\\}$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 24",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "magd-2013-i-pg-25",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika $C:|z|=1$ adalah lintasan tutup sederhana berorientasi positif di bidang kompleks, maka dengan rumus integral Cauchy diperoleh\n\n$$\\oint_C\\frac{1-\\cos z}{z^3}\\,dz=$$\n\n(a) 0\n\n(b) $2\\pi i$\n\n(c) $-2\\pi i$\n\n(d) $-\\pi i$\n\n(e) $\\pi i$",
    "source": {
      "kind": "competition",
      "label": "MaG-D ITB 2013 — Tahap I, Pilihan Ganda, Nomor 25",
      "competition": "MaG-D ITB",
      "year": 2013,
      "stage": "Tahap I",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied University Challange ZIP: MaGD/Soal-MagDay-2013A.pdf, PDF page 5, first MCQ variant. Number assigned by original row order."
    }
  },
  {
    "id": "smartmc-2022-pg-01",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan A dan B adalah matriks dalam $\\mathbb R^{2022}$ yang memenuhi persamaan-persamaan\n\n$$A^{-1}=(A+B)^{-1}-B^{-1}$$\n\ndan $\\det(A^{-1})=2022$. Tentukan det (B)!\n\nA. $\\frac1{2020}$\n\nB. 2020\n\nC. 2022\n\nD. $\\frac1{2022}$\n\nE. 1",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 1",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 1",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 1. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Koordinat $x^2$ terhadap basis $\\{x^2-1,x^2-2x,-x+1\\}$ di $P_2$ adalah…\n\nA. $\\begin{bmatrix}\\frac12\\\\-1\\\\\\frac12\\end{bmatrix}$\n\nB. $\\begin{bmatrix}2\\\\-1\\\\2\\end{bmatrix}$\n\nC. $\\begin{bmatrix}-\\frac12\\\\1\\\\-\\frac12\\end{bmatrix}$\n\nD. $\\begin{bmatrix}-2\\\\1\\\\-2\\end{bmatrix}$\n\nE. $\\begin{bmatrix}1\\\\1\\\\1\\end{bmatrix}$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 2",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 2",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 1. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan A $=\\begin{bmatrix}0&1\\\\0&-1\\end{bmatrix}$. Misalkan T operator linear pada $\\mathbb R^2$ dengan aturan $T(x)=AX-XA$, $\\forall x\\in\\mathbb R^2$. Maka rank(T) adalah….\n\nA. -1\n\nB. 0\n\nC. 1\n\nD. -2\n\nE. 2",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 3",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 3",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 1. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-04",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "If $A=\\begin{bmatrix}1&0&4\\\\-1&a&5\\\\0&1&b\\end{bmatrix}$ has a rank equal to 2. The value of $a^2b^2$ is…\n\nA. 100\n\nB. 121\n\nC. 144\n\nD. 169\n\nE. 196",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 4",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 4",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 1. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-05",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Misalkan $A$ dan $B$ adalah matriks $\\mathbb R^{n\\times n}$ yang memenuhi persamaan\n\n$$AB^2-2BAB+B^2A=0$$\n\nNilai eigen terbesar dari matriks $AB-BA$ adalah…\n\nA. 8\n\nB. 2\n\nC. 0\n\nD. 1\n\nE. 4",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 5",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 5",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 1. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-06",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "It is known that matrix $A$ is :\n\n$$A=\\begin{bmatrix}2&2&6\\\\10&4&12\\\\-4&-2&-6\\end{bmatrix}$$\n\nThe value of $A^{222}+I^{223}+2022A^{2022}+2023I^{2023}$ is ...\n\nA. $2022A+2023I$\n\nB. $2023I$\n\nC. $2023A+2024I$\n\nD. $2024I$\n\nE. $2042A+2025I$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 6",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 6",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 1–2. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-07",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Berapa banyak kata sandi yang dapat dibuat jika diperlukan kata sandi yang panjangnya 4-7 karakter. Setiap karakter hanya boleh berupa angka genap dan huruf, serta huruf kecil dan huruf besar dianggap sama.\n\nA. 2.419.111.000\n\nB. 2.941.110.000\n\nC. 2.149.110.000\n\nD. 2.194.111.000\n\nE. 2.914.110.000",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 7",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 7",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 2. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-08",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Didefinisikan notasi $\\lfloor x\\rfloor$ yaitu bilangan bulat terbesar yang kurang dari atau sama dengan $x$ (sebagai contoh, nilai dari $\\lfloor2.2\\rfloor$ adalah 2). Misalkan\n\n$$\\begin{aligned}S_n={}&\\left\\lfloor\\frac{2^1}{3}\\right\\rfloor\\binom{2n}{1}+\\left\\lfloor\\frac{2^2}{3}\\right\\rfloor\\binom{2n}{2}+\\cdots\\\\&+\\left\\lfloor\\frac{2^{2n-1}}{3}\\right\\rfloor\\binom{2n}{2n-1}+\\frac13\\left[\\sum_{k=1}^n\\binom{2n}{2k-1}-\\sum_{k=1}^{2n}2^k\\binom{2n}{k}\\right]\\end{aligned}$$\n\nuntuk setiap $n\\in\\mathbb N$. Nilai dari $(4-6S_{2022})$ adalah ….\n\nA. $2_{2022}$\n\nB. $2_{2023}$\n\nC. $4_{2021}$\n\nD. $4_{2022}$\n\nE. $4_{2023}$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 8",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 8",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 2. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-09",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Banyaknya permutasi dari 0,1,2,⋯,9 yang diawali dengan digit 789 atau memuat digit 54 pada posisi ke-5 dan 6 atau diakhiri dengan digit 321 adalah …\n\nA. 50134\n\nB. 50138\n\nC. 50186\n\nD. 50614\n\nE. 50662",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 9",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 9",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 2. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-10",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Defined a recursive function, $\\forall n\\in Z$ obtain $f(1)=1$, $f(2)=5$, dan $f(n+1)=f(n)+2f(n-1)$, $\\forall n>2$. The value of $f(n)$ is…\n\nA. $2^n+1$\n\nB. $2^{2n}+1$\n\nC. $2^{2n}+(-1)^n$\n\nD. $2^n+(-1)^n$\n\nE. $2^n$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 10",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 10",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 2–3. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-11",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Solusi dari relasi rekuren\n\n$$x_n=4x_{n-1}-3x_{n-2}+2^n,\\ (n\\ge3)$$\n\ndengan syarat $x_1=1,x_2=11$ untuk setiap $n\\in\\mathbb N$ adalah…\n\nA. $x_n=3_{n-1}-2_{n-2}$\n\nB. $x_n=3_{n-1}+2_{n-2}$\n\nC. $x_n=3_{n+1}-2_{n+2}$\n\nD. $x_n=2_{n+1}-3_{n+2}$\n\nE. $x_n=2_{n-1}+3_{n-2}$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 11",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 11",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 3. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-12",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Untuk setiap bilangan asli $n\\in\\mathbb N$ dengan $n\\ge2$, nilai dari\n\n$$\\frac1n\\binom n1+\\frac2n\\binom n2+\\cdots+\\frac{n-1}{n}\\binom n{n-1}$$\n\nadalah…\n\nA. $2^{\\frac1n-1}-1$\n\nB. $2^{\\frac1n-1}+1$\n\nC. $2^{\\frac1n+1}+1$\n\nD. $2_{n-1}-1$\n\nE. $2_{n+1}+1$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 12",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 12",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 3. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-13",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Let $u(x,y)=y^3-3x^2y$, find the harmonics / conjugates of functions $v(x,y)$.\n\nA. $v(x,y)=x^2-3xy^2$\n\nB. $v(x,y)=x^2-3xy^3$\n\nC. $v(x,y)=x^3-3xy^2$\n\nD. $v(x,y)=x^3-3xy^3$\n\nE. $v(x,y)=x^3-3x^2y$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 13",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 13",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 3. Original apparent subscript and wording errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-14",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Diberikan $z_1=4+2i$ dan $z_2=2\\sqrt8+\\sqrt2i$. Tentukan nilai dari\n\n$$|z_1-z_2|+\\int_0^{\\frac\\pi4}2e^{it}\\,dt=\\cdots$$\n\nA. $6-\\sqrt2+i(2-5\\sqrt2)$\n\nB. $6-2\\sqrt2+i(2-\\sqrt2)$\n\nC. $6-3\\sqrt2+i(2-2\\sqrt2)$\n\nD. $6-4\\sqrt2+i(2-3\\sqrt2)$\n\nE. $6-5\\sqrt2+i(2-4\\sqrt2)$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 14",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 14",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 3–4. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-15",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Diberikan t sebagai berikut\n\n$$t=\\frac{6+5i^{851}+7i^{947}}{3-3i^{533}+3^{779}+2i^{1234}},$$\n\nmaka tentukan nilai dari $\\operatorname{Re}(t)\\times\\frac{|t|}{\\operatorname{Im}(t)}$.\n\nA. $3\\sqrt5$\n\nB. $3\\sqrt5+6$\n\nC. $-3\\sqrt5$\n\nD. $-3\\sqrt5+6$\n\nE. $-6\\sqrt5$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 15",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 15",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 4. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-16",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Tentukan nilai dari\n\n$$\\sin\\left(\\frac\\pi2+i\\ln(\\pi+\\sqrt{\\pi^2-1})\\right)+\\cos\\left(\\frac\\pi2+i\\ln(\\pi+\\sqrt{\\pi^2-1})\\right).$$\n\nA. $\\pi-\\frac{\\sqrt{\\pi^2-1}}i$\n\nB. $\\pi+\\frac{\\sqrt{\\pi^2-1}}i$\n\nC. $2\\pi-\\frac{\\sqrt{\\pi^2-1}}{2i}$\n\nD. $2\\pi+\\frac{\\sqrt{\\pi^2-1}}{2i}$\n\nE. $2\\pi-\\frac{\\sqrt{\\pi^2-1}}i$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 16",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 16",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 4. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-17",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "If $h(z)$ is the Laurent series that represents the function\n\n$$f(z)=\\frac{2022}{z^2-iz}$$\n\nin the domain $|z+i|<1$. Then find $\\frac43h(z)$.\n\nA. $2696\\sum(z+i)^n\\left(\\frac1{(-i)^n}+\\frac1{(2^n)(i^n)}\\right)$\n\nB. $2696\\sum(z+i)^n\\left(\\frac1{(-i)^n}+\\frac1{(2^{n+1})(i^n)}\\right)$\n\nC. $2696\\sum(z+i)^n\\left(\\frac1{(-i)^n}+\\frac1{(2^n)(i^{n+1})}\\right)$\n\nD. $2696\\sum(z+i)^n\\left(\\frac1{(-i)^{n+1}}+\\frac1{(2^n)(i^n)}\\right)$\n\nE. $2696\\sum(z+i)^n\\left(\\frac1{(-i)^{n+1}}+\\frac1{(2^{n+1})(i^{n+1})}\\right)$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 17",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 17",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 4–5. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-18",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Diberikan $z_n$ sebagai berikut\n\n$$z_n=\\frac{2n-n^2i}{4+3i}$$\n\nuntuk setiap $n\\in\\mathbb N$ dan $i=\\sqrt{-1}$. Tentukan nilai dari ekspresi di bawah ini\n\n$$25\\sum_{n=1}^{25}(\\operatorname{Re}(z_n)-\\operatorname{Im}(z_n))=\\cdots$$\n\nA. 10075\n\nB. 10750\n\nC. 15070\n\nD. 17050\n\nE. 17500",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 18",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 18",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 5. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-19",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan S suatu grup dengan $|S|=2022$, banyak subgrup T dari S sehingga $|T|=22$ adalah ...\n\nA. 0\n\nB. 1\n\nC. 2\n\nD. 11\n\nE. 22",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 19",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 19",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 5. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-20",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diberikan $(S,\\star)$ suatu grup dan $a,b\\in S$. Diketahui $a\\star b=b\\star a^{-1}$ dan $b\\star a=a\\star b^{-1}$. Elemen identitas dari $S$ adalah …\n\nA. $a^5$\n\nB. $a^4$\n\nC. $a^3$\n\nD. $a^2$\n\nE. $a$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 20",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 20",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 5. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-21",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diketahui suatu grup sebagai berikut :\n\n$$\\frac{\\mathbb Z_{64}\\times\\mathbb Z_9}{\\langle(\\overline4,\\overline3)\\rangle}$$\n\nTentukan orde dari grup tersebut adalah...\n\nA. 10\n\nB. 12\n\nC. 14\n\nD. 16\n\nE. 18",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 21",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 21",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 5. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-22",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $a$ dan $b$ berturut-turut menyatakan banyaknya elemen idempoten dan pembagi nol di $\\mathbb Z_{2022}$. Nilai dari $\\sum_{i=a}^b i$ adalah ….\n\nA. 910603\n\nB. 901630\n\nC. 601903\n\nD. 630109\n\nE. 360910",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 22",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 22",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 5–6. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-23",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $T=\\{a,b,c,d\\}$ terhadap operasi $\\oplus$ dan operasi $\\otimes$ yang didefinisikan oleh tabel berikut ini merupakan suatu Ring.\n\n$$\\begin{array}{c|cccc}\\oplus&a&b&c&d\\\\\\hline a&a&b&c&d\\\\ b&b&a&d&c\\\\ c&c&d&a&b\\\\ d&d&c&b&a\\end{array}\\qquad\\begin{array}{c|cccc}\\otimes&a&b&c&d\\\\\\hline a&a&a&a&a\\\\ b&a&b&c&d\\\\ c&a&c&d&b\\\\ d&a&d&b&c\\end{array}$$\n\nMaka $T$ adalah?\n\nA. Ring dengan pembagi nol\n\nB. Daerah integral namun bukan lapangan\n\nC. Lapangan namun bukan daerah integral\n\nD. Daerah integral sekaligus lapangan\n\nE. Semua salah",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 23",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 23",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 6. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-24",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "If $G$ is a group with the identity element $e$. Let $x,y,z\\in G$ so that $x^2=e$, $y^3=e$, and $z^3=e$ and $zxyz=y^2xz^3$. Find the order of an element $xyz$ of a group G.\n\nA. 2\n\nB. 3\n\nC. 4\n\nD. 5\n\nE. 6",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 24",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 24",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 6. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-25",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Di bawah ini yang merupakan supremum dan infimum dari himpunan $S=\\left\\{\\frac{n+3}{4n}\\mid n\\in N\\right\\}$ adalah …\n\nA. $Sup(S)=2,Inf(S)=0$\n\nB. $Sup(S)=2,Inf(S)=\\frac14$\n\nC. $Sup(S)=1,Inf(S)=\\frac25$\n\nD. $Sup(S)=1,Inf(S)=\\frac14$\n\nE. $Sup(S)=\\frac25,Inf(S)=0$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 25",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 25",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 6. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-26",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Diberikan ruang metrik $(d,\\mathbb Q)$ dengan fungsi jarak $d(x,y)=|x-y|$ dan didefinisikan himpunan $T=\\{x\\in\\mathbb Q:6<x^2<7\\}$. Sifat-sifat himpunan $T$ pada $\\mathbb Q$ adalah….\n\nA. Terbatas ke bawah, tidak terbuka, dan kompak\n\nB. Terbatas ke atas, terbuka, dan kompak\n\nC. Terbatas, tertutup, dan tidak kompak\n\nD. Terbatas, tidak tertutup, dan tidak kompak\n\nE. Tidak terbatas, tertutup, dan tidak kompak",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 26",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 26",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 7. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-27",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Diberikan barisan $\\{x_n\\}$ di dalam $\\mathbb R^2$ dengan\n\n$$x_n=\\left(2n^{20}\\cos^{22}\\left(\\frac{(2n^2+1)\\pi}{2}\\right),3n^{-20}\\sin^{22}\\left(\\frac{(n+1)n\\pi}{2}\\right)\\right)$$\n\ndan didefinisikan metrik $d:X\\times Y\\to\\mathbb R^+$ pada $\\mathbb R^2$ dengan\n\n$$d((x1,y1),(x2,y2))=|x1-x2|+|y1-y2|.$$\n\nNilai dari $d(x_n,(2n^{-20},22))$ untuk setiap $n$ dan $n\\to\\infty$ berturut-turut adalah….\n\nA. $(3n^{-20}-22)$ dan $-22$\n\nB. $(2n^{-20}+22)$ dan 22\n\nC. $(2n^{20}-2n^{-20})$ dan $\\infty$\n\nD. $5n^{-20}$ dan 0\n\nE. $-n^{20}$ dan $-\\infty$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 27",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 27",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 7. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-28",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Misalkan $(p_n)_{n\\ge1}$ merupakan barisan bilangan real dengan $p_1=0.75$ dan\n\n$$p_{n+1}=\\frac{p_n^2}{\\frac12p_n^2-p_n+2}$$\n\nUntuk $n\\ge1$. Nilai dari $\\sum_{n=1}^\\infty p_n$ adalah…\n\nA. $\\frac45$\n\nB. $\\frac65$\n\nC. $\\frac43$\n\nD. 3\n\nE. $\\infty$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 28",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 28",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 7. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-29",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Determine the value of $\\lim_{n\\to\\infty}a_n$ if given a sequence of real numbers $\\{a_n\\}$ with\n\n$$a_n=\\sum_{k=1}^n\\frac{6^{k+2}+6k!}{k!\\,6^{k+1}}$$\n\nA. $6e-\\frac{28}5$\n\nB. $6e-\\frac{29}5$\n\nC. $6e-\\frac{28}6$\n\nD. $6e-\\frac{29}6$\n\nE. $3e-\\frac{28}6$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 29",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 29",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 7–8. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-pg-30",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Analisis Real",
    "prompt": "Let\n\n$$S=\\left\\{\\frac{x+1}{x!}:x\\in\\mathbb N\\right\\}\\cup\\{x\\in\\mathbb R:x^3-6x^2+8x\\le0\\}\\cup[-1,1]$$\n\nIf the set of all interior points of $S$ denoted by $int(S)$, then the members of $S$ and $int(S)$ are…\n\nA. $S=(-\\infty,1]\\cup\\left\\{\\frac32\\right\\}\\cup[2,4]$ and $int(S)=(-\\infty,1)\\cup(2,4)$\n\nB. $S=[-1,1]\\cup[2,4]$ and $int(S)=(-1,1)\\cup(2,4)$\n\nC. $S=[-1,2]\\cup[4,\\infty)$ and $int(S)=(-1,2)\\cup(4,\\infty)$\n\nD. $S=[-1,1]\\cup\\left\\{\\frac32,2\\right\\}\\cup[4,\\infty)$ and $int(S)=[-1,1]\\cup\\left\\{\\frac32,2\\right\\}\\cup[4,\\infty)$\n\nE. $S=(-\\infty,1]\\cup\\left\\{\\frac32\\right\\}\\cup[2,\\infty)$ and $int(S)=(-\\infty,1)\\cup\\left\\{\\frac32\\right\\}\\cup(2,\\infty)$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Pilihan Ganda, Nomor 30",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Pilihan Ganda, Nomor 30",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 8. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-isian-01",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Tentukan bilangan bulat positif terkecil $k$ terkecil, sedemikian sehingga untuk setiap $k$ buah matriks $A_1,A_2,\\ldots,A_k$ berukuran $100\\times100$ dengan komponen riil, senantiasa terdapat bilangan riil $\\alpha_1,\\alpha_2,\\ldots,\\alpha_k$ yang tidak semuanya nol sehingga\n\n$$det(\\alpha_1A_1+\\alpha_2A_2+\\cdots+\\alpha_kA_k)=0$$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Isian, Nomor 1",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Isian, Nomor 1",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 8. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-isian-02",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Given a permutation $\\pi=\\begin{pmatrix}1&2&\\cdots&n\\\\\\pi(1)&\\pi(2)&\\cdots&\\pi(n)\\end{pmatrix}$ over the set $\\{1,2,\\ldots,n\\}$ with $n\\ge7$. The number of permutations $\\pi$ so that $\\pi(1)=5$ or $\\pi(3)=7$ or $\\pi(6)=2$ is…",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Isian, Nomor 2",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Isian, Nomor 2",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 8. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-isian-03",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Tentukan bilangan bulat terkecil $n$ denga $n\\ge337$ sehingga $(\\sqrt{12}+6i)^n$ merupakan bilangan real.",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Isian, Nomor 3",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Isian, Nomor 3",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 8. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-isian-04",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Given $f(x)=x^6+2x^5+x^2+2x+1,g(x)=2x^4+x^3+2x+1\\in Z_3[x]$ and the polynomial $q(x),r(x)\\in Z_3[x]$ so that $f(x)=q(x)g(x)+r(x)$ where $r(x)=0$ or $0\\le deg\\ deg(r(x))<deg\\ deg(g(x))$. If the sum of all coefficients (without constant) in $q(x)$ is $a$ and the sum of all coefficients (without constant) in $r(x)$ is $b$, then determine the value of $(a\\times b)^2$.",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Isian, Nomor 4",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Isian, Nomor 4",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 8–9. Apparent source errors retained."
    }
  },
  {
    "id": "smartmc-2022-isian-05",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diberikan fungsi $f:\\mathbb R\\mapsto\\mathbb R$ dengan $f(x)=4x^2+1$ dan barisan\n\n$$x_n=\\sum_{k=1}^n\\frac1{k^2+5k+6}$$\n\nuntuk setiap $n\\in\\mathbb N$. Nilai $\\lim_{x\\to\\infty}f(x_n)=\\ldots.$",
    "source": {
      "kind": "competition",
      "label": "SMART-MC UNS 2022 — Penyisihan, Isian, Nomor 5",
      "competition": "SMART-MC UNS",
      "year": 2022,
      "stage": "Penyisihan",
      "number": "Isian, Nomor 5",
      "note": "User-supplied ZIP: PENYISIHAN SMARTMC MAHASISWA 2022.pdf, PDF page 9. Apparent source errors retained."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-01",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tentukan hasil dari\n\n$$\\lim_{n\\to\\infty}\\left(\\frac{n^{12}}{\\sqrt{n^{26}+1^{20}}}+\\frac{n^{12}}{\\sqrt{n^{26}+2^{20}}}+\\cdots+\\frac{n^{12}}{\\sqrt{n^{26}+n^{20}}}\\right).$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 1",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 1",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-02",
    "level": "Kuliah",
    "topic": "Teori Graf",
    "difficulty": 3,
    "title": "Teori Graf",
    "prompt": "Tentukan banyaknya graf terhubung dari graf berlabel yang memiliki 4 titik.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 2",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 2",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diketahui $\\det(A)\\ne 0$ dan $\\det(B)\\ne 0$, serta\n\n$$\\operatorname{tr}(AB^{-1})=\\det(AB^{-1})=1.$$\n\nTentukan nilai\n\n$$\\det\\left(I_2+A^{-1}B\\right).$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 3",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 3",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitung integral tak wajar berikut:\n\n$$\\int_1^\\infty\\left(\\frac{\\ln x}{x}\\right)^{2026}dx.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 4",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 4",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-05",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diketahui operasi biner $\\ast$ memenuhi\n\n$$(x\\cdot y)\\ast y=x\\cdot(y\\cdot y),\\quad (x\\ast1)\\ast x=x\\ast1,\\quad 1\\ast1=1.$$\n\nTentukan nilai\n\n$$2008\\ast2026.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 5",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 5",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-06",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Tentukan bilangan $a$ sehingga\n\n$$\\oint_{|z-i|=1}\\frac{dz}{z^2-z+a}=\\pi.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 6",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 6",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-07",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Diberikan 10 pertanyaan dengan opsi benar/salah. Jika seseorang menjawab tepat 5 benar dan 5 salah, maka dapat dipastikan ia memperoleh setidaknya 4 poin. Berapa banyak kemungkinan kunci jawaban yang ada?",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 7",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 7",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan nilai maksimum dari fungsi\n\n$$f(x)=\\frac{\\sqrt{2026^3x}-2026\\sqrt[3]{2026^2x}}{2026-\\sqrt[4]{2026x^3}}.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 8",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 8",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-09",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Diketahui\n\n$$\\varepsilon=\\cos\\left(\\frac{2\\pi}{3}\\right)+i\\sin\\left(\\frac{2\\pi}{3}\\right).$$\n\nTentukan nilai\n\n$$(1+\\varepsilon)(1+\\varepsilon^2)\\cdots(1+\\varepsilon^{2026}).$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 9",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 9",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 2. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-penyisihan-10",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Sebuah matriks $A$ berukuran $2026\\times2026$ dengan setiap entri didefinisikan oleh\n\n$$A_{ij}=\\frac{1}{\\min(i,j)},\\quad 1\\le i,j\\le2026.$$\n\nTentukan nilai\n\n$$\\det(A).$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Penyisihan, Nomor 10",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Penyisihan",
      "number": "Nomor 10",
      "note": "Cuplikan pengguna: Cuplikan_Penyisihan_MATICS_2026.pdf, PDF page 2. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-semifinal-01",
    "level": "Kuliah",
    "topic": "Teori Graf",
    "difficulty": 3,
    "title": "Teori Graf",
    "prompt": "Banyaknya spanning tree dari graf lengkap dengan 9 titik adalah $S$. Tentukan nilai\n\n$$S\\bmod 63.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Semifinal, Nomor 1",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Semifinal",
      "number": "Nomor 1",
      "note": "Cuplikan pengguna: Cuplikan_Semifinal_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-semifinal-02",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Tentukan banyaknya subhimpunan $S\\subseteq\\{1,2,3,\\ldots,10\\}$ yang memenuhi syarat: terdapat $a<b<c$ sehingga\n\n$$a\\in S,\\quad b\\notin S,\\quad c\\in S.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Semifinal, Nomor 2",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Semifinal",
      "number": "Nomor 2",
      "note": "Cuplikan pengguna: Cuplikan_Semifinal_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-semifinal-03",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Jika bilangan kompleks $z$ memenuhi\n\n$$11z^{10}+10iz^9+10iz-11=0,$$\n\ntentukan modulus $|z|$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Semifinal, Nomor 3",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Semifinal",
      "number": "Nomor 3",
      "note": "Cuplikan pengguna: Cuplikan_Semifinal_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-semifinal-04",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Tentukan nilai\n\n$$\\frac{1}{2\\pi}\\int_0^{2\\pi}\\frac{1}{|3e^{i\\theta}-4|}d\\theta.$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Semifinal, Nomor 4",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Semifinal",
      "number": "Nomor 4",
      "note": "Cuplikan pengguna: Cuplikan_Semifinal_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-semifinal-05",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tentukan konstanta $c_0$ sehingga deret\n\n$$\\sum_{n=0}^\\infty\\frac{n!}{(cn)^n}$$\n\nkonvergen untuk $c>c_0$ dan divergen untuk $0<c<c_0$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Semifinal, Nomor 5",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Semifinal",
      "number": "Nomor 5",
      "note": "Cuplikan pengguna: Cuplikan_Semifinal_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-semifinal-06",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diketahui dalam suatu grup berlaku\n\n$$aba=ba^2b,\\quad a^3=e,\\quad b^{2n-1}=e$$\n\nuntuk suatu bilangan bulat positif $n$. Tentukan\n\n$$\\operatorname{ord}\\left(b^{2026}\\right).$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Semifinal, Nomor 6",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Semifinal",
      "number": "Nomor 6",
      "note": "Cuplikan pengguna: Cuplikan_Semifinal_MATICS_2026.pdf, PDF page 1. Dibandingkan dengan tampilan PDF; naskah resmi dan render website belum diperiksa."
    }
  },
  {
    "id": "matics-unhas-2026-final-01",
    "level": "Kuliah",
    "topic": "Teori Graf",
    "difficulty": 3,
    "title": "Teori Graf",
    "prompt": "Diberikan sebuah unlabeled tree dengan 7 titik sudut (vertices). Tentukan banyaknya struktur tree yang dapat dibentuk yang saling non-isomorfik.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 1",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 1",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan hasil dari nilai integral berikut:\n\n$$\\int_{-\\infty}^\\infty\\frac{\\sin^2 x}{x^2}dx$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 2",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 2",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diberikan ruang vektor polinomial berderajat 4 dengan hasil kali dalam $\\langle f,g\\rangle=\\int_{-1}^1 f(x)g(x)\\,dx$. Jika sebuah polinomial $f(x)=a+bx-x^3$ bersifat ortogonal terhadap setiap vektor yang derajatnya kurang dari 3, tentukan nilai dari $a+b$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 3",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 3",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-04",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Banyaknya permutasi $(a_1,a_2,\\ldots,a_8)$ dari himpunan bilangan $\\{1,2,\\ldots,8\\}$ yang memenuhi persamaan $a_1-a_2+a_3-a_4+a_5-a_6+a_7-a_8=0$ adalah...",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 4",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 4",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-05",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Ada berapa banyak cara mewarnai titik-titik sudut sebuah kubus dengan warna merah atau biru sedemikian rupa sehingga warna setiap titik sudut merupakan warna mayoritas dari tiga titik sudut yang bertetangga dengannya?",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 5",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 5",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-06",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diberikan sistem persamaan berikut:\n\n(a) $x+y+kz=2$\n\n(b) $x+ky+z=1$\n\n(c) $kx+y+z=1$\n\nTentukan semua nilai $k$ agar sistem tersebut tidak memiliki solusi.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 6",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 6",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-07",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diberikan grup siklik $G=\\mathbb{Z}_{20}$ dan grup simetri $S_3$.\n\n(a) Tentukan banyaknya homomorfisma tidak trivial $\\phi:\\mathbb{Z}_{20}\\to S_3$.\n\n(b) Tentukan banyaknya elemen dari grup automorfisma $\\operatorname{Aut}(\\mathbb{Z}_{20})$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 7",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 7",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-08",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Tentukan banyaknya akar (nol) dari persamaan kompleks:\n\n$$15z^5+z^8-4z^4+z^3-2z+e^z+\\sin(z)+1=0$$\n\nyang terletak di dalam cakram unit $|z|<1$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 8",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 8",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-final-09",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diberikan matriks $A\\in M_{2\\times2}(\\mathbb{R})$ yang memenuhi $\\det(A)=2$ dan $\\operatorname{tr}(A)=2$. Jika $k$ adalah konstanta riil yang memenuhi persamaan:\n\n$$\\det(A^4+4I)+\\det(kA^2)+\\det(A-I)=\\det(A^2-2A)+\\det(A)+\\det(I)$$\n\nTentukan nilai $k$ yang mungkin.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Final, Nomor 9",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Final",
      "number": "Nomor 9",
      "note": "Cuplikan pengguna: Cuplikan_Final_MATICS_2026.pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-01",
    "level": "Kuliah",
    "topic": "Teori Graf",
    "difficulty": 3,
    "title": "Teori Graf",
    "prompt": "Berapa banyaknya graf non-isomorfik yang memiliki 9 titik dan setiap titik terhubung dengan 6 titik lainnya?",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Nomor 1",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Nomor 1",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-02",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Misalkan $\\{x\\}$ adalah bagian pecahan dari $x$. Tentukan nilai dari:\n\n$$\\{\\ln(1+e)\\}+\\{\\ln(1+e^2)\\}+\\{\\ln(1+e^4)\\}+\\{\\ln(1+e^8)\\}+\\ldots$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Nomor 2",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Nomor 2",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-03",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Angka 1 sampai 10 akan diwarnai dengan 3 warna berbeda. Diberikan ketentuan bahwa untuk setiap pasangan bilangan $a$ dan $b$, jika $|a-b|$ adalah bilangan ganjil, maka $a$ dan $b$ harus memiliki warna yang berbeda. Berapa banyak pewarnaan yang mungkin dilakukan?",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Nomor 3",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Nomor 3",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-04",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Diberikan sebuah grid berukuran $2\\times2026$ yang akan diwarnai dengan 3 warna. Ketentuannya adalah tidak boleh ada dua kotak yang berbagi sisi memiliki warna yang sama. Berapa banyak kemungkinan pewarnaan yang dapat dibentuk?",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Nomor 4",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Nomor 4",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-05",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Diberikan sebuah grup $G$ yang didefinisikan oleh presentasi berikut:\n\n$$G=\\langle x,y\\mid x^2=y^3,\\ x=yxy^{-1},\\ y^{10}=e\\rangle$$\n\nJika diberikan elemen $z=x^3y^2$, tentukan invers dari $z$ (yaitu $z^{-1}$) dan nyatakan dalam bentuk $x^ay^b$, di mana $a$ dan $b$ adalah bilangan bulat non-negatif terkecil.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Nomor 5",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Nomor 5",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-presentasi-01",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Kombinatorika",
    "prompt": "Dalam kurun waktu 10 hari, terdapat total 15 pertandingan yang diselenggarakan. Jika setiap hari minimal terjadi 1 pertandingan, tunjukkan bahwa pasti ada periode beberapa hari berturut-turut di mana jumlah total pertandingannya tepat sebanyak 4 pertandingan.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Soal Presentasi, Nomor 1",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Soal Presentasi, Nomor 1",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-presentasi-02",
    "level": "Kuliah",
    "topic": "Analisis Riil",
    "difficulty": 3,
    "title": "Analisis Riil",
    "prompt": "Misalkan $f:\\mathbb{R}\\to\\mathbb{R}$ adalah fungsi kontinu yang memenuhi persamaan $f(x)=f(x^2)$ untuk setiap $x\\in\\mathbb{R}$. Buktikan bahwa $f$ adalah fungsi konstan.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Soal Presentasi, Nomor 2",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Soal Presentasi, Nomor 2",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-presentasi-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Aljabar Linear",
    "prompt": "Diberikan ruang vektor $V$ yang berisi matriks berordo $2\\times2$ dengan entri bilangan riil. Misalkan $W$ adalah subruang dari $V$ yang direntang (spanned) oleh matriks-matriks berbentuk $(AB-BA)^3$ untuk semua $A,B\\in V$. Tentukan dimensi dari subruang $W$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Soal Presentasi, Nomor 3",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Soal Presentasi, Nomor 3",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-presentasi-04",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Struktur Aljabar",
    "prompt": "Misalkan $R$ adalah suatu ring komutatif dengan elemen identitas 1. Misalkan $a\\in R$ merupakan elemen unit dan $b\\in R$ merupakan elemen nilpoten. Buktikan bahwa polinomial:\n\n$$f(z)=a+bz$$\n\nmerupakan elemen unit dalam ring polinomial $R[z]$.",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Soal Presentasi, Nomor 4",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Soal Presentasi, Nomor 4",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "matics-unhas-2026-grand-final-presentasi-05",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Analisis Kompleks",
    "prompt": "Misalkan $a\\in\\mathbb{R}$ dengan $a\\ne0$. Jika diketahui persamaan polinomial $P(x)=x^{2026}+ax+1=0$ tidak mempunyai akar real, tunjukkan bahwa setiap akar kompleks $z$ dari persamaan tersebut memenuhi:\n\n$$|z|\\ge\\sqrt[2026]{\\frac{1}{2025}}$$",
    "source": {
      "kind": "competition",
      "label": "MATICS UNHAS 2026 — Grand Final, Soal Presentasi, Nomor 5",
      "competition": "MATICS UNHAS",
      "year": 2026,
      "stage": "Grand Final",
      "number": "Soal Presentasi, Nomor 5",
      "note": "Cuplikan pengguna: Cuplikan_Grandfinal_MATICS (1).pdf. Transkripsi dari teks PDF; belum dibandingkan visual maupun dengan naskah resmi."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-01",
    "level": "Kuliah",
    "topic": "Limit",
    "difficulty": 3,
    "title": "Limit",
    "prompt": "Hitung:\n\n$$\\lim_{x\\to\\infty}\\left(x+2-\\sqrt{x^2-2x+6}\\right)$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 1",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-02",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Hitung\n\n$$\\int_0^2\\int_0^{45}\\frac{xy}{2025}\\,dy\\,dx$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 2",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-03",
    "level": "Kuliah",
    "topic": "Limit",
    "difficulty": 3,
    "title": "Limit",
    "prompt": "Hitung:\n\n$$\\lim_{x\\to-\\infty}\\frac{\\sqrt{x^2-x+1}}{2x+1}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 3",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan turunan $(\\frac{dy}{dx})$ dari fungsi:\n\n$$y=\\ln\\sqrt{1+x^2}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 4",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 4",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-05",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Diketahui fungsi:\n\n$$f(x,y,z)=\\frac{x^2+y^2}{z},\\quad z\\ne0.$$\n\nTentukan:\n\n(a) Gradien $\\nabla f$\n\n(b) Evaluasi gradien di titik $(1,2,-1)$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 5",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 5",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-06",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tunjukkan bahwa deret berikut konvergen dan tentukan jumlahnya:\n\n$$\\sum_{k=2}^{\\infty}\\left(\\frac1k-\\frac1{k-1}\\right)$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 6",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 6",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan titik kritis dan nilai ekstrem fungsi:\n\n$$h(t)=\\frac{t^{5/3}}{t+2},\\quad t\\in[-1,8].$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 7",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 7",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Panjang kurva yang didefinisikan menggunakan persamaan parametrik\n\n$$x(t)=6\\sin2t,\\quad y(t)=8\\sin2t$$\n\nuntuk $\\frac{\\pi}{12}\\le t\\le\\frac{\\pi}{8}$ adalah $a(\\sqrt2-b)$. Tentukan nilai $a+b$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 8",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 8",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-09",
    "level": "Kuliah",
    "topic": "Limit",
    "difficulty": 3,
    "title": "Limit",
    "prompt": "Hitung:\n\n$$\\lim_{x\\to0}\\frac{3x\\tan x}{\\sin x}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 9",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 9",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan rumus umum untuk turunan ke-$n$ dari hasil kali dua fungsi $u$ dan $v$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 10",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 10",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-11",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan rotasi dari medan vektor:\n\n$$\\vec F(x,y,z)=(y,z,x)$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 11",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 11",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-12",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan luas permukaan benda pejal yang diperoleh dari memutar daerah yang dibatasi oleh kurva\n\n$$y=\\cosh x,\\quad -\\ln2\\le x\\le\\ln2$$\n\nterhadap sumbu-$x$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 12",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 12",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-13",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tunjukkan bahwa medan vektor $F(x,y)=(y^2,2xy)$ adalah konservatif, dan tentukan fungsi potensial $\\Phi(x,y)$ sehingga $F=\\nabla\\Phi$. Selanjutnya, hitung integral garis $\\int_C F.dr$ sepanjang kurva $C$ yang menghubungkan titik $(0,0)$ ke titik $(1,1)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 13",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 13",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan selang nilai $x$ dimana grafik fungsi\n\n$$f(x)=28x-\\frac32x^2-\\frac13x^3$$\n\nmonoton turun dan cekung ke atas.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 14",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 14",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-15",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tentukan apakah deret berikut konvergen atau divergen:\n\n$$\\sum_{k=5}^{\\infty}\\frac{1000}{k(\\ln k)^2}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 15",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 15",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-16",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan hasil dari:\n\n$$\\int_{\\frac{\\pi}{20}}^{\\frac{\\pi}{15}}\\frac{\\sec(5P)\\tan(5P)}{\\sqrt[7]{5+\\sec(5P)}}\\,dP$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 16",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 16",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-17",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Ujilah apakah deret\n\n$$\\sum_{n=1}^{\\infty}\\frac{n^2+5}{n^3+2n}$$\n\nkonvergen atau divergen.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 17",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 17",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-18",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan turunan dari fungsi:\n\n$$y=\\frac{\\sin(5x^2)}{\\cos^2(3x^2)}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 18",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 18",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-19",
    "level": "Kuliah",
    "topic": "Limit",
    "difficulty": 3,
    "title": "Limit",
    "prompt": "Tentukan limit dari:\n\n$$\\lim_{x\\to0}\\frac{x^3\\ln(x+1)}{e^x-1}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 19",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 19",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-1-20",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Untuk fungsi\n\n$$f(x,y)=x^2ye^{xy}+\\sin(xy),$$\n\ntentukan turunan parsial $f_{xy}$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 1, Nomor 20",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 1",
      "number": "Nomor 20",
      "note": "User Drive: Soal Penyisihan 1 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-01",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Hitunglah:\n\n$$\\iint_R(x^2+y)\\,dA,\\quad R=[-1,2]\\times[1,4]$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 1",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-02",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan titik pada bidang $x+y+z=12$ yang terdekat dengan titik $P=(3,2,1)$ dan hitung jaraknya.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 2",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-03",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika\n\n$$y=(x^3-2x^2-3x+1)^{11},$$\n\ntentukan $\\frac{dy}{dx}$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 3",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-04",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Hitung luas jajar genjang yang dibentuk oleh\n\n$$\\vec u=(1,2,3),\\quad \\vec v=(2,1,1).$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 4",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 4",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-05",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diberikan deret A, B, dan C berikut.\n\n$$A.\\sum_{n=1}^\\infty(-1)^n\\frac{2^n}{(n+3)!},$$\n\n$$B.\\sum_{n=1}^\\infty(-1)^n\\frac{4n}{\\sin 5n},$$\n\n$$C.\\sum_{n=1}^\\infty(-1)^n\\frac{6}{n+7}.$$\n\nSebutkan huruf-hurufnya secara terurut untuk deret yang:\n\n(a) Tidak konvergen\n\n(b) Konvergen bersyarat\n\n(c) Konvergen secara mutlak",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 5",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 5",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan himpunan solusi real dari persamaan:\n\n$$\\ln(x^2+1)-3\\ln|x|=\\ln 2.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 6",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 6",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diketahui kurva\n\n$$x^2-xy+y^2=16.$$\n\nTentukan persamaan garis singgung pada dua titik potong elips dengan sumbu-$x$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 7",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 7",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan nilai dari:\n\n$$\\int\\frac{\\sin(\\ln x^2)}{x}\\,dx.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 8",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 8",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan koordinat polar dari titik $(3,-4)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 9",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 9",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan $\\frac{dy}{dx}$ dari persamaan:\n\n$$e^{xy}+xy=2.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 10",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 10",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-11",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diketahui $f'(x)=\\sum_{n=0}^\\infty(n+1)x^n$ dan $f(0)=2$. Tentukan nilai $f\\left(\\frac{2023}{2024}\\right)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 11",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 11",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-12",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan:\n\n$$\\int\\frac{6x^2-3x+1}{4x^3+x^2+4x+1}\\,dx.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 12",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 12",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-13",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tentukan jari-jari kekonvergenan dari deret pangkat:\n\n$$\\sum_{n=1}^\\infty\\frac{n}{(n+1)!}x^n.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 13",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 13",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitunglah:\n\n$$\\int_0^{\\frac{\\pi}{2}}x\\cos x\\,dx.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 14",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 14",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-15",
    "level": "Kuliah",
    "topic": "Analisis Riil",
    "difficulty": 3,
    "title": "Analisis Riil",
    "prompt": "Diketahui:\n\n$$f(x)=\\begin{cases}x\\sin\\left(\\frac1x\\right),&x\\ne0,\\\\0,&x=0.\\end{cases}$$\n\nBuktikan bahwa $f(x)$ kontinu di $x=0$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 15",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 15",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-16",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Daerah di kuadran kedua yang berada di dalam kardoida\n\n$$r=2+2\\sin\\theta$$\n\ndan di luar kardoida\n\n$$r=2+2\\cos\\theta,$$\n\ntentukan luas daerah tersebut.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 16",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 16",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-17",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan nilai dari integral berikut:\n\n$$I=\\iiint_{\\mathcal D}|xz^2|\\,dx\\,dy\\,dz,$$\n\ndengan\n\n$$\\mathcal D=\\{(x,y,z)\\in\\mathbb R^3\\mid x^2+y^2+z^2\\le1,\\ y\\ge0\\}.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 17",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 17",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-18",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Ujilah apakah deret\n\n$$\\sum_{n=2}^\\infty\\frac1{n(\\ln n)^2}$$\n\nkonvergen atau divergen.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 18",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 18",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-19",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Sebuah mobil memiliki posisi $s(t)=5t^3-12t^2+3t$ meter. Tentukan kecepatan dan percepatan mobil pada $t=2$ detik.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 19",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 19",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-penyisihan-2-20",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan turunan $D_xy$, jika\n\n$$y=\\coth^{-1}(x^5).$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Penyisihan 2, Nomor 20",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Penyisihan 2",
      "number": "Nomor 20",
      "note": "User Drive: Soal Penyisihan 2 (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-01",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diketahui\n\n$$G(x)=\\int_{\\sin x}^{x^3}\\sqrt{1+t^4}\\,dt.$$\n\nHitunglah $G'(0)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 1",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan interval monoton naik/turun dan cekung ke atas/ke bawah untuk\n\n$$f(x)=e^x-x^2.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 2",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-03",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan nilai dari integral berikut:\n\n$$I=\\int_0^1\\int_0^1\\int_{x^2}^1 12xz^2e^{zy^2}\\,dy\\,dx\\,dz.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 3",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-04",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Sebuah fraktal dikonstruksi sebagai berikut:\n\n- Mula-mula diambil sebuah bola dengan jari-jari 4.\n- Pada bola ini dilekatkan 12 bola yang masing-masing berjari-jari $\\frac44$.\n- Selanjutnya, pada setiap bola berjari-jari 1 tersebut, dilekatkan kembali 12 bola yang berjari-jari $\\frac4{16}$.\n- Selanjutnya, pada setiap bola berjari-jari $\\frac14$ tersebut, dilekatkan kembali 12 bola yang berjari-jari $\\frac4{64}$.\n\nJika proses ini dilanjutkan sebanyak takhingga kali, tentukan luas permukaan total fraktal yang terbentuk.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 4",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 4",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-05",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Buktikan medan vektor $F(x,y)=(2xy,x^2+y^2)$ ini adalah konservatif. Selanjutnya, tentukan fungsi potensial $\\Phi(x,y)$ sedemikian hingga $F=\\nabla\\Phi$, dan integral garis $\\int_C F.dr$ sepanjang kurva $C$ dari titik $(0,0)$ ke $(2,1)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 5",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 5",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan titik $(x,y)$ dimana garis singgung dari grafik $y=\\ln(2025x)$ memiliki gradien 2025.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 6",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 6",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-07",
    "level": "Kuliah",
    "topic": "Limit",
    "difficulty": 3,
    "title": "Limit",
    "prompt": "Tentukan limit dari:\n\n$$\\lim_{x\\to0}\\frac{x^2\\sin(2x)}{\\ln(1+3x)}.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 7",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 7",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-08",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan banyaknya bilangan bulat $a$ sehingga\n\n$$\\int_{-\\infty}^\\infty\\frac6{x^2+a}\\,dx$$\n\nkonvergen dan bernilai kelipatan bilangan bulat dari $\\pi$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 8",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 8",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-09",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diketahui\n\n$$f(x)=\\sqrt{a+x}+\\sqrt{1-x}.$$\n\nTentukan deret Maclaurin dari $f(x)$ dan gunakan deret tersebut untuk menghitung $f^{(4)}(0)$ dan $f^{(31)}(0)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 9",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 9",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Misalkan grafik\n\n$$y=b-a\\cosh\\left(\\frac xa\\right)$$\n\nmerupakan suatu *catenary* terbalik yang terletak di atas sumbu-$x$. Diketahui jika lebar busur sepanjang sumbu-$x$ adalah $2a$, maka\n\n$$b=a\\cosh(1)\\approx1.54308a.$$\n\nSeorang petani membangun gudang jerami dengan panjang 100 ft dan lebar 48 ft, dengan penampang melintang berbentuk catenary terbalik\n\n$$y=37-24\\cosh\\left(\\frac x{24}\\right).$$\n\nTentukan volume gudang.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 10",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 10",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-11",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Diketahui fungsi\n\n$$f(x,y,z)=e^{xyz}\\ln(x^2+y^2+z^2+1).$$\n\nTentukan turunan parsial campuran $f_{xy}$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 11",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 11",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-12",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan nilai integral berikut:\n\n$$I=\\iiint_V|x^2-y^2|\\,z\\,dV$$\n\ndengan\n\n$$V=\\{(x,y,z)\\mid x^2+y^2\\le4,\\ 0\\le z\\le3-\\frac12(x^2+y^2)\\}.$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 12",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 12",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-13",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan turunan dari fungsi:\n\n$$y=\\big(\\tan(2e^x)\\big)\\big(\\arcsin(\\cos(3x))\\big).$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 13",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 13",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Fungsi biaya produksi suatu barang diberikan oleh\n\n$$C(x)=2x^3-15x^2+24x+50,$$\n\ndengan $x$ menyatakan jumlah barang yang diproduksi. Tentukan jumlah barang $x$ yang meminimalkan biaya produksi dan nilai minimumnya (dalam juta rupiah).",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 14",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 14",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-semifinal-15",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diketahui:\n\n$$\\sin^{-1}x=\\int_0^x\\frac1{\\sqrt{1-t^2}}\\,dt.$$\n\nGunakan teorema binomial untuk menentukan empat suku pertama deret Maclaurin dari $\\sin^{-1}x$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Semifinal, Nomor 15",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Semifinal",
      "number": "Nomor 15",
      "note": "User Drive: Soal Semifinal (1).pdf, PDF page 2; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-final-01",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Diberikan fungsi\n\n$$f(x,y)=x^2+2x+2y^2$$\n\ndan $C$ adalah lingkaran berpusat di $(0,0)$ yang berjari-jari 5. Tentukan semua titik $(x,y)$ pada $C$ di mana $f(x,y)$ **minimal dan maksimal**, beserta nilai fungsinya.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Final, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 1",
      "note": "User Drive: Soal Final (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-final-02",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Jika $P$ adalah himpunan semua titik yang terletak pada parabola\n\n$$x=y^2-2y+4,$$\n\ntentukan nilai minimal dari fungsi\n\n$$f(x,y)=x^2+y^2-2x-2y+2$$\n\npada $P$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Final, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 2",
      "note": "User Drive: Soal Final (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xvi-2025-final-03",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Misalkan $S$ adalah ruang di bawah permukaan\n\n$$z=8-\\sqrt{4x^2+5y^2}$$\n\ndi atas bidang $xy$. Sebuah balok dibuat di dalam ruang $S$ dengan rusuk sejajar sumbu-sumbu koordinat. Tentukan volume terbesar balok yang dapat dibuat.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XVI — Final, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2025,
      "stage": "Final",
      "number": "Nomor 3",
      "note": "User Drive: Soal Final (1).pdf, PDF page 1; header identifies edition XVI. Year inferred from dated source metadata. Visual PDF comparison done; official final-use confirmation and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-01",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan dari fungsi $f(x)=x^3\\sqrt{2x^2-3x}$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 1",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-02",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan divergensi dari medan vektor\n\n$$\\bar F=xz^2\\mathbf i-3y^3z^2\\mathbf j+xy^2z^2\\mathbf k$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 2",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-03",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Hitunglah nilai dari integral berikut!\n\n$$\\int_0^1\\int_1^2(x^2+y^2)\\,dy\\,dx$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 3",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Grafik fungsi $g(x)=\\cos(x+\\frac{\\pi}{3})$ simetri terhadap $\\cdots$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 4",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 4",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-05",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Misalkan $\\mathbf F(x,y)=(10x^2+8y)\\mathbf i+(8x-7y^2)\\mathbf j$. Hitunglah integral garis $\\int_C\\mathbf F(\\mathbf r).d\\mathbf r$ dengan $C$ adalah garis yang menghubungkan titik (0,0) ke (1,0) dilanjutkan dengan garis dari titik (1,0) ke (1,2).",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 5",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 5",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-06",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Jika $S$ adalah daerah persegi panjang di bidang $xy$ yang dibatasi oleh $x=0$, $x=3$, $y=0$, dan $y=1$, maka tentukan luas permukaan dari $f(x,y)=\\sqrt{9-x^2}$ yang diproyeksikan ke $S$ !",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 6",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 6",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Diketahui $y=\\frac{x^m+1}{x-1}$ dengan $m>3$. Nilai dari $y'''(0)$ adalah...",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 7",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 7",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-08",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Suatu elips berfokus di titik $(-4,1)$ dan $(0,1)$. Jika elips tersebut melalui titik $(5,13)$ maka luas elips tersebut adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 8",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 8",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukanlah\n\n$$\\int\\frac{\\ln^3(x^3)}{x}dx$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 9",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 9",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitunglah panjang kurva dengan persamaan $16x^2y-x^6-8=0,\\ 1\\le x\\le2$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 10",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 10",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-11",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan daerah definisi dari fungsi $f(x)=\\ln\\left(\\frac{\\sqrt{x+1}}{x-1}\\right)$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 11",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 11",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-12",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Misalkan $\\mathbf F(x,y)=(2x+xy^2)\\mathbf i+(x^2y-2y)\\mathbf j$. Hitunglah $\\oint_C\\mathbf F(\\mathbf r).d\\mathbf r$ dengan $C$ adalah lingkaran satuan dengan pusat (0,0).",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 12",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 12",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-13",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitung luas daerah tertutup yang dibatasi oleh kurva $r=4\\sin\\sin 3\\theta$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 13",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 13",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-14",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Jika $f(x)=\\sum_{n=1}^\\infty\\frac{4^n}{n}x^n$ dan $g(x)=\\sum_{n=1}^\\infty\\frac{n}{(n^2+1)}x^n$ maka tiga suku pertama yang tidak nol dari perkalian $f(x)g(x)$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 14",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 14",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-15",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diketahui deret pangkat $\\frac1{1-x}=\\sum_{n=0}^\\infty x^n$, maka deret pangkat dari $\\frac{x^3}{x+2}$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 15",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 15",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-16",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitunglah panjang kurva dengan persamaan sebagai berikut!\n\n$$x=\\frac1{2y^3}+\\frac{y^5}{30},\\ 1\\le y\\le2$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 16",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 16",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-17",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan dari fungsi $f(x)=\\frac{\\sin(e^{3x})}{\\tan^2(x)}$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 17",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 17",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-18",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitunglah integral tak wajar $\\int_{-\\infty}^\\infty\\frac{x^2dx}{(1-x^3)^2}$ jika ada!",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 18",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 18",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-19",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Misalkan $z=\\sin 2x\\cos 3y$, Tentukan $\\frac{\\partial^2z}{\\partial x\\partial y}$!",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 19",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 19",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-1-20",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitunglah $\\int\\cos\\sinh(1+\\sin(x))dx$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 1, Nomor 20",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 1",
      "number": "Nomor 20",
      "note": "User Drive: Soal Penyisihan 1.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-01",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Hitunglah nilai dari integral berikut!\n\n$$\\int_0^1\\int_0^1(yx+2y^3)\\,dy\\,dx$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 1",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-02",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan hasil dari integral lipat tiga berikut ini!\n\n$$\\int_0^1\\int_1^2\\int_2^3 2x+y^3\\,dz\\,dy\\,dx$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 2",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-03",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan luas permukaan $S$ dari 2 dimensi parabola $z=x^2+y^2$ yang diproyeksikan pada bidang $z=4$!",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 3",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Sketsalah grafik fungsi $f(x)=\\ln(|\\sin(x)|+1)$ pada interval $0\\le x\\le2\\pi$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 4",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 4",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-05",
    "level": "Kuliah",
    "topic": "Limit",
    "difficulty": 3,
    "title": "Limit",
    "prompt": "Tentukan nilai limit fungsi trigonometri berikut!\n\n$$\\lim_{t\\to0}\\frac{\\sin(3r)+4t}{t\\sec(t)}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 5",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 5",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan hasil dari\n\n$$\\int_{\\frac{\\pi}{12}}^{\\frac{\\pi}{8}}\\frac{\\csc(4P)\\cot(4P)}{\\sqrt[5]{3+\\csc(4P)}}\\,dP$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 6",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 6",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-07",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tentukan apakah barisan $a_n=(1+3n)^{\\frac1{3n}}$ konvergen atau divergen? Jika konvergen, tentukan limitnya!",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 7",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 7",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-08",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Diketahui benda $S$ dibatasi oleh $x+y+z=1$, $x=0$, $z=0$, kepadatan dari benda $S$ adalah $\\delta(x,y,z)=kxyz$, $k$ adalah konstanta. Tentukan massa dari benda tersebut!",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 8",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 8",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-09",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Jika:\n\n$$\\int\\frac{\\cos(4x)+\\cos(2x)}{2\\cos(2x)-1}dx=\\frac{\\cos(Px)\\tan(x)}2+\\frac{\\sin(x)}{2\\cos(x)}+\\frac{x^Q+Rx^2}{x+1}+C$$\n\nTentukan nilai dari $3P\\ (\\bmod(2Q+3R))$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 9",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 9",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-10",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan hasil dari\n\n$$\\int\\frac{x^3-8x^2-1}{(x+3)(x^2-4x+5)}dx$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 10",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 10",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-11",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Misalkan $z=3x^2-5xy+3y^2$, Tentukan $\\frac{\\partial^2z}{\\partial y\\partial x}$!",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 11",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 11",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-12",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Andaikan vektor $F=(x+yz)\\mathbf i+(y+xz)\\mathbf j+(z-xy)\\mathbf k$. Tentukan integral garis $\\int_c F\\cdot dr$, Dimana $C$ merupakan kurva yang dinyatakan $x=2t,y=t^2,z=2t^3,0<t<1$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 12",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 12",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-13",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Diberikan lintasan $\\vec r(t)=\\begin{pmatrix}t\\\\t^2\\\\t^3\\end{pmatrix}$. Vektor normal satuan lintasan tersebut untuk $t=1$ adalah",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 13",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 13",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-14",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Tentukan nilai maksimum dan minimum fungsi $f(x)=\\cos^2(x)-2\\sin(x),\\ 0\\le x\\le2\\pi$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 14",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 14",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-penyisihan-2-15",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Diberikan permukaan $f(x,y)=xy+\\sqrt[3]{xy}$. Bidang $U$ menyinggung permukaan tersebut di titik $(1,1,2)$ sedangkan bidang $V$ menyinggung permukaan tersebut di titik $\\left(\\frac18,8,2\\right)$. Garis $g$ adalah perpotongan antara bidang $U$ dan $V$. Garis $g$ memotong bidang $xy$ di titik berkoordinat",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Penyisihan 2, Nomor 15",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Penyisihan 2",
      "number": "Nomor 15",
      "note": "User Drive: Soal Penyisihan 2.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-01",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Gradien garis singgung kurva $y+\\cos\\cos(xy^2)+3x^2=4$ di titik $\\left(\\pi,\\frac12\\right)$ adalah $\\frac{\\sqrt a+\\pi}{b+c\\pi^2}$ dengan $a,b,c\\in Z$. Tentukan tripel $(a,b,c)$ yang memenuhi.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 1",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-02",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Hitung luas daerah tertutup yang dibatasi oleh kurva $r^2=8\\cos\\cos 2\\theta$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 2",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-03",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Geometri",
    "prompt": "Suatu hiperbola mendatar mempunyai asimtot dengan persamaan $y=2x-5$ dan $y=-2x+7$. Jika jarak kedua puncak hiperbola tersebut adalah 6 maka persamaan hiperbola tersebut adalah $\\ldots$ (sajikan dalam bentuk $\\frac{(x-h)^2}{a^2}-\\frac{(y-k)^2}{b^2}=1$ atau $\\frac{(x-h)^2}{a^2}-\\frac{(y-k)^2}{b^2}=-1$).",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 3",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-04",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Garis-garis singgung lintasan $4x^3+7xy^2=2y^4$ di titik berabsis 1 berpotongan di titik $(h,k)$. Tentukan koordinat $(h,k)$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 4",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 4",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-05",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Tentukan himpunan kekonvergenan deret pangkat berikut ini.\n\n$$\\sum_{n=0}^\\infty\\frac{(x-2)^n}{n^2+1}$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 5",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 5",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-06",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Turunan kedua dari fungsi $f(x)=\\ln(\\tan x^3)$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 6",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 6",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-07",
    "level": "Kuliah",
    "topic": "Kalkulus",
    "difficulty": 3,
    "title": "Kalkulus",
    "prompt": "Misalkan $y=x^3\\sinh^{-1}(\\sinh(x))$, maka $D_xy=\\cdots$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 7",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 7",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-08",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Hitung nilai minimum dari $f(x,y)=(x+2)^2-y$ untuk $(x,y)$ yang memenuhi $x+y-xy=-31$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 8",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 8",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-09",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Andaikan vektor $F=(x^2-3z)\\mathbf i+(y+2x)\\mathbf j+(z^2-xy)\\mathbf k$. Tentukan integral garis $\\int_c F\\cdot dr$, Dimana $C$ merupakan kurva bergaris lurus dari $(0,0,0)$ ke $(1,0,0)$ kemudian ke $(1,1,0)$ dan kemudian ke $(1,1,1)$. Dimana $x=2t,y=t^2,z=2t^3,0<t<1$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 9",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 9",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-10",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Nilai maksimum dari $f(x,y,z)=2x^2+3y^2+5z^2$ untuk $(x,y,z)$ yang memenuhi $x^2+2y^2+3z^2\\le6$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 10",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 10",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-11",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Tentukan koordinat titik pada permukaan $x^2y-z^2=-9$ yang paling dekat dengan origin adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 11",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 11",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-12",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Andaikan vektor $F=(3x^2+z)\\mathbf i+(y^2+xz)\\mathbf j+(2zy-xy)\\mathbf k$. Tentukan integral garis $\\int_c F\\cdot dr$, dimana C merupakan kurva yang dinyatakan $x=t,y=2t^2,z=3t^3,0<t<1$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 12",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 12",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-13",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diketahui deret Maclaurin berikut\n\n$$e^x=\\sum_{n=0}^\\infty\\frac{x^n}{n!}.$$\n\nBentuk deret dari\n\n$$\\int\\frac{e^x-1}{x}dx$$\n\nadalah $\\cdots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 13",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 13",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 1; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-14",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Nilai maksimum dari $f(x,y)=x^4-x^2+2y$ untuk $(x,y)$ yang memenuhi $x^2+y^2=2$ adalah $\\ldots$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 14",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 14",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2025-semifinal-15",
    "level": "Kuliah",
    "topic": "Barisan dan Deret",
    "difficulty": 3,
    "title": "Barisan dan Deret",
    "prompt": "Diketahui deret Maclaurin berikut\n\n$$e^x=\\sum_{n=0}^\\infty\\frac{x^n}{n!}$$\n\ndan\n\n$$\\sin(x)=\\sum_{n=0}^\\infty(-1)^n\\frac{x^{2n+1}}{(2n+1)!}$$\n\nMaka deret Maclaurin dari fungsi $f(x)=e^{-x}+\\cos(x)$ adalah $\\cdots$.",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Semifinal, Nomor 15",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Semifinal",
      "number": "Nomor 15",
      "note": "User Drive: Soal Semifinal.pdf, PDF page 2; edition XV explicit, year confirmed by UNRI official event report. Apparent source errors retained. Actual administered paper and web render pending."
    }
  },
  {
    "id": "calculus-cup-xv-2024-final-01",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Pada soal, $C$ adalah batas daerah $D$ yang diarsir. Hitung $\\oint_c M\\,dx+N\\,dy$ untuk masing-masing nilai $M$ dan $N$ yang diberikan\n\n[[FIGURE]]\n\nLintasan $C$ terdiri dari 2 potongan busur lingkaran seperti pada gambar.\n\n$$M=-y^2(y+x)\\qquad N=x(x-3y^2)$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Final, Nomor 1",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Final",
      "number": "Nomor 1",
      "note": "User Drive: Soal Final.pdf, PDF page 1. Source text and diagram visually inspected; diagram redrawn in SVG. Year confirmed by UNRI event report. Actual administered paper and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xv-2024-final-02",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Pada soal, $C$ adalah batas daerah $D$ yang diarsir. Hitung $\\oint_c M\\,dx+N\\,dy$ untuk masing-masing nilai $M$ dan $N$ yang diberikan\n\n[[FIGURE]]\n\n$C$ adalah batas dari juring lingkaran pada gambar.\n\n$$M=-2y^2\\qquad N=x^2$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Final, Nomor 2",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Final",
      "number": "Nomor 2",
      "note": "User Drive: Soal Final.pdf, PDF page 1. Source text and diagram visually inspected; diagram redrawn in SVG. Year confirmed by UNRI event report. Actual administered paper and web rendering pending."
    }
  },
  {
    "id": "calculus-cup-xv-2024-final-03",
    "level": "Kuliah",
    "topic": "Kalkulus Vektor",
    "difficulty": 3,
    "title": "Kalkulus Vektor",
    "prompt": "Pada soal, $C$ adalah batas daerah $D$ yang diarsir. Hitung $\\oint_c M\\,dx+N\\,dy$ untuk masing-masing nilai $M$ dan $N$ yang diberikan\n\n[[FIGURE]]\n\nLintasan $C$ terdiri dari 2 potongan busur lingkaran seperti pada gambar.\n\n$$M=3xy\\qquad N=x(y-x)$$",
    "source": {
      "kind": "competition",
      "label": "Calculus Cup XV 2024 — Final, Nomor 3",
      "competition": "Calculus Cup",
      "year": 2024,
      "stage": "Final",
      "number": "Nomor 3",
      "note": "User Drive: Soal Final.pdf, PDF page 1–2. Source text and diagram visually inspected; diagram redrawn in SVG. Year confirmed by UNRI event report. Actual administered paper and web rendering pending."
    }
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan pemecahan masalah tingkat perguruan tinggi.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Arsip soal resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
