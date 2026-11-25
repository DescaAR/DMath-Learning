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
    "prompt": "Classify the functions $f:\\mathbb Z\\to\\mathbb Z$ satisfying $$f(2a)+2f(b)=f(f(a+b))$$ for every pair of integers $a,b$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2019 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2019,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "IMO"
    }
  },
  {
    "id": "imc-2024-1",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Bilangan kompleks pada lingkaran satuan",
    "prompt": "Determine the complex pairs $(a,b)$ satisfying $$|a|=|b|=1,\\qquad a+b+a\\overline b\\in\\mathbb R.$$",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
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
    "prompt": "Find the real numbers $\\alpha$ for which $$\\lfloor\\alpha\\rfloor+\\lfloor2\\alpha\\rfloor+\\cdots+\\lfloor n\\alpha\\rfloor$$ is divisible by $n$ for each positive integer $n$. Here $\\lfloor z\\rfloor$ is the largest integer not exceeding $z$; for instance, $\\lfloor-\\pi\\rfloor=-4$ and $\\lfloor2\\rfloor=\\lfloor2.9\\rfloor=2$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2024 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2024,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "IMO"
    }
  },
  {
    "id": "imo-2024-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "FPB perpangkatan",
    "prompt": "Classify the positive integer pairs $(a,b)$ admitting positive integers $g,N$ with $$\\gcd(a^n+b,b^n+a)=g\\qquad(n\\ge N,\\ n\\in\\mathbb Z).$$ The notation $\\gcd(x,y)$ means the greatest common divisor of $x$ and $y$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2024 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2024,
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
      "stage": "IMO"
    }
  },
  {
    "id": "apmo-2024-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan produk dan jumlah",
    "prompt": "For each positive integer $n$ and positive reals $a_1,\\ldots,a_n$, establish $$\\sum_{i=1}^n\\frac{1}{2^i}\\left(\\frac{2}{1+a_i}\\right)^{2^i}\\ge\\frac{2}{1+a_1a_2\\cdots a_n}-\\frac{1}{2^n}.$$",
    "source": {
      "kind": "competition",
      "label": "APMO 2024 — Nomor 3",
      "competition": "APMO",
      "year": 2024,
      "number": "Nomor 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
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
      "url": "https://www.imc-math.org.uk/?item=prob3q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
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
      "url": "https://www.imc-math.org.uk/?item=prob6q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription.",
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
    "prompt": "Suppose $a,b,c,d$ are real, $a\\ge b\\ge c\\ge d>0$, and $a+b+c+d=1$. Establish $$(a+2b+3c+4d)a^ab^bc^cd^d<1.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2020 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2021-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan jumlah akar",
    "prompt": "For arbitrary real $x_1,\\ldots,x_n$, establish $$\\sum_{i=1}^n\\sum_{j=1}^n\\sqrt{|x_i-x_j|}\\le\\sum_{i=1}^n\\sum_{j=1}^n\\sqrt{|x_i+x_j|}.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2021 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2022-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi dengan solusi tunggal",
    "prompt": "Classify the maps $f:\\mathbb R_{>0}\\to\\mathbb R_{>0}$ for which, given any $x>0$, precisely one positive $y$ satisfies $$xf(y)+yf(x)\\le2.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2022 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2023-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan dan polinomial monik",
    "prompt": "Fix an integer $k\\ge2$. Classify the infinite sequences $(a_n)_{n\\ge1}$ of positive integers admitting a polynomial $$P(x)=x^k+c_{k-1}x^{k-1}+\\cdots+c_1x+c_0$$ with nonnegative integer coefficients $c_0,\\ldots,c_{k-1}$ such that $$P(a_n)=a_{n+1}a_{n+2}\\cdots a_{n+k}$$ for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2023 — Hari 1, Nomor 3",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2020-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Rank komutator dan trace",
    "prompt": "Take real $n\\times n$ matrices $A,B$ satisfying $\\operatorname{rank}(AB-BA+I_n)=1$, with $I_n$ the identity matrix. Establish $$\\operatorname{tr}(ABAB)-\\operatorname{tr}(A^2B^2)=\\frac12n(n-1).$$ Here rank means the dimension of the column space and trace is the sum of diagonal entries.",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 2",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/?item=prob2q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob4q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Suppose $f:[0,1]\\to(0,\\infty)$ is integrable and $f(x)f(1-x)=1$ for every $x\\in[0,1]$. Establish $$\\int_0^1 f(x)\\,dx\\ge1.$$",
    "source": {
      "kind": "competition",
      "label": "IMC 2022 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2022-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Persamaan matriks dan transpos",
    "prompt": "For a positive integer $n$, classify the real $n\\times n$ matrices $A$ whose eigenvalues are all real and for which $$A+A^k=A^{\\mathsf T}$$ for at least one integer $k\\ge n$. Here $A^{\\mathsf T}$ is the transpose of $A$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2022 — Hari 1, Nomor 2",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Hitung banyak bilangan bulat kelipatan 13 yang terletak di antara 1000 dan 2005.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 1",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 1",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osn-sd-2006-i2",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Sudut dalam segitiga",
    "prompt": "Berapa besar sudut $CAD$?",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 2",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 2",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osn-sd-2007-i9",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Kadar garam",
    "prompt": "Enam liter air laut memiliki kadar garam $4\\%$. Setelah satu liter air laut menguap, berapakah persentase kadar garam yang baru?",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2007 — Isian 9",
      "competition": "OSN",
      "year": 2007,
      "stage": "OSN Nasional",
      "number": "Isian 9",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2013/01/2007-soal-osn-lengkap.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "osn-smp-2005-h1-04",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Sistem persamaan bilangan bulat",
    "prompt": "Tentukan seluruh pasangan $(x,y)\\in\\mathbb Z^2$ yang memenuhi $$x(y+1)=y^2-1,\\qquad y(x+1)=x^2-1.$$",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SMP 2005 — Hari 1, Nomor 4",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Hari 1, Nomor 4",
      "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Suppose an integer sequence $(a_n)_{n\\ge1}$ has infinitely many positive terms and infinitely many negative terms. For each $n\\ge1$, the first $n$ terms represent distinct residue classes modulo $n$. Establish that each integer appears precisely once among the terms.",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2005-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan tiga variabel",
    "prompt": "Given positive real numbers $x,y,z$ satisfying $xyz\\ge1$, establish $$\\frac{x^5-x^2}{x^5+y^2+z^2}+\\frac{y^5-y^2}{x^2+y^5+z^2}+\\frac{z^5-z^2}{x^2+y^2+z^5}\\ge0.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 1, Nomor 3",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2005-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Koprimalitas pada barisan",
    "prompt": "Classify the positive integers $m$ satisfying $\\gcd(m,a_n)=1$ at every index $n\\ge1$, where $$a_n=2^n+3^n+6^n-1.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 2, Nomor 4",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Classify integer sequences $(a_n)_{n\\ge0}$ satisfying $$a_{n+k}^2-(2k+1)a_na_{n+k}+(k^2+k)a_n^2=k^2-k$$ for every pair of nonnegative integers $n,k$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2016 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
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
    "prompt": "Four cities are joined by one road for each pair. Each road is painted either orange or blue. Count the colorings for which every pair of cities can be connected by a route using only orange roads and also by a route using only blue roads. Justify your answer.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2017 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2017-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Maksimum jarak titik ke garis",
    "prompt": "Three different points $A,B,C$ belong to a circle with center $O$, where $\\angle AOB=\\angle BOC=60^\\circ$. Take $P$ on chord $AC$ and draw triangle $BPC$. Determine $AP:PC$ when $P$ is selected to maximize the length of the altitude from $C$ to $BP$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2017 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2017-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Derajat minimum polinomial modulo enam belas",
    "prompt": "Among polynomials $P\\in\\mathbb Z[x]$ satisfying $nP(n)\\equiv1\\pmod{16}$ for every positive odd integer $n$, determine the least possible degree and prove optimality.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2017 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
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
    "prompt": "(a) Show that seven circles and eleven points can be drawn on a page with these properties: the circumferences do not intersect, none of the points lies on a circumference, the seven counts of enclosed points are distinct (zero is allowed), and every point is enclosed by equally many circles. (b) Prove that no such arrangement exists with five circles and five points.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2018 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2018-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Dua polinomial kubik",
    "prompt": "For $a,b,c>0$, suppose $$(x-a)(x-b)(x-c)=(x-ab)(x-bc)(x-ca)$$ identically in $x$. Find the minimum possible sum $a+b+c$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2018 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
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
    "prompt": "A square $ABCD$ lies inside triangle $XYZ$, with $B$ on $XY$, $C$ on $YZ$, and $D$ on $ZX$. Draw $XA$, obtaining four triangular regions $XAB$, $YBC$, $ZCD$, and $XDA$. Reflect each region across the square side it touches, respectively $AB$, $BC$, $CD$, and $DA$. Prove that the four reflected regions together cover the square.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2018 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 2; wording differs; exact replacement pending."
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
    "prompt": "Let $I$ be the incenter of $ABC$ and $D$ the contact point of its incircle on $AB$. The line $ID$ meets the circumcircle of $ABI$ again at $E$. If $IE=AC+BC$, determine $\\angle ACB$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2019 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
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
    "prompt": "Three circles are pairwise externally tangent. Suppose a fourth circle is externally tangent to each and a fifth circle is internally tangent to each, and these last two circles have a common center. Must the original three circles have equal radii? Prove or disprove.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2021 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
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
    "prompt": "Gog and Magog start with zero stones. Gog moves first and turns alternate. A turn consists either of gaining one stone or transferring to the opponent an integer number of stones between one and half of the player's current holdings, inclusive. A player loses upon having at least $20$ stones. Prove whether Gog can force a win, Magog can force a win, or neither can.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2021 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
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
    "prompt": "Classify real sequences $(a_n)_{n\\ge1}$ obeying $$a_{m+n}=a_m+a_n-mn,\\qquad a_{mn}=m^2a_n+n^2a_m+2a_ma_n$$ for every $m,n\\ge1$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2022 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "Given four distinct points in the plane, consider all angles $\\angle XYZ$ formed by ordered triples of distinct points from the four. Minimize the greatest such angle over all configurations, and exhibit an attaining configuration.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2023 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "Classify, with proof, the binary operations $\\mid$ on the integers such that for all integers $a,b,c$, $$(a\\mid b)+c=(a+c)\\mid(b+c),$(a\\mid b)\\mid c=a\\mid(b\\mid c).$$ A binary operation here is a map $\\mathbb Z\\times\\mathbb Z\\to\\mathbb Z$; addition and multiplication are examples of binary operations.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2023 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
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
    "prompt": "For polynomials $f,g$ with $g\\ne0$, define $\\left\\lfloor\\frac{f(x)}{g(x)}\\right\\rfloor$ as the unique polynomial $q$ in the division identity $f=gq+r$, where $r=0$ or $\\deg r<\\deg g$. Determine the real polynomials $p$ satisfying $$\\left\\lfloor\\frac{p(x)}x\\right\\rfloor+\\left\\lfloor\\frac{p(x)}{x+1}\\right\\rfloor=x^2.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2025 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2025-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Penjumlahan blok bilangan dengan digit berulang",
    "prompt": "For a positive integer $N$, its split-sum is obtained by splitting its decimal digits into two blocks, with the second block having the same length as the first or one more digit, and adding the resulting integers. For example, the split-sums of $2025,123,6$ are $45,24,6$, respectively. Count the positive integers $m$ satisfying all three requirements: at most $2025$ digits, all digits equal, and split-sum of $m^2$ equal to $m$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2025 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "umo-2025-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Segitiga sama sisi dan jajargenjang",
    "prompt": "For a parallelogram $ABCD$, construct an equilateral triangle $ABP$ with $P$ on the same side of line $AB$ as $C,D$. If lines $CP$ and $DA$ meet at $Q$, show there is an $R$ on line $AB$ such that $CQR$ is equilateral.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2025 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "A strictly increasing sequence $(a_i)_{i\\ge0}$ of nonnegative integers has the sum-of-two property if each nonnegative integer equals $a_i+a_j$ for some indices $i,j$, possibly equal. For example, $0,1,3,5,7,\\ldots$ has this property. Prove or disprove that every such sequence admits a constant $K$ with $a_i\\le Ki$ for all $i\\ge0$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2026 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2025-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Cakupan garis singgung",
    "prompt": "Let $P\\in\\mathbb R[x]$ have degree at least $2$. For each $x\\in\\mathbb R$, denote the tangent line at $(x,P(x))$ by $\\ell_x\\subseteq\\mathbb R^2$. (a) When $\\deg P$ is odd, establish $$\\bigcup_{x\\in\\mathbb R}\\ell_x=\\mathbb R^2.$$ (b) Decide whether some even-degree polynomial also has this property.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2025 — Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2025-02",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Batas tajam integral",
    "prompt": "If $f\\in C^2(\\mathbb R)$, $f(-1)=f(1)=1$, and $\\int_{-1}^1 f(x)\\,dx=0$, establish $$\\int_{-1}^1 |f''(x)|^2\\,dx\\ge15$$ and characterize equality.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2025 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/?item=prob2q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob3q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob5q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2025-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Identitas turunan pada titik antara",
    "prompt": "Suppose $f\\in C^1((0,\\infty))$ and $0<a<b$ satisfy $f(a)=f(b)=k$. Establish the existence of $\\xi\\in(a,b)$ with $f(\\xi)-\\xi f'(\\xi)=k$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2025 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/?item=prob6q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2025-07",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Himpunan bilangan bulat positif yang tertutup terhadap operasi",
    "prompt": "Determine the nonempty subsets $M$ of the positive integers satisfying these two closure conditions: (a) $x\\in M\\implies 2x\\in M$; (b) $x,y\\in M$ and $x+y$ even imply $\\frac{x+y}{2}\\in M$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2025 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/?item=prob7q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2025-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Nilai eigen matriks dengan simetri rotasi seperempat putaran",
    "prompt": "For a real square matrix $A$, use $A^R$ for its counterclockwise rotation by $90^\\circ$. For example, $$\\begin{pmatrix}1&2&3\\\\4&5&6\\\\7&8&9\\end{pmatrix}^{R}=\\begin{pmatrix}3&6&9\\\\2&5&8\\\\1&4&7\\end{pmatrix}.$$ Assuming $A=A^R$, establish that every complex eigenvalue $\\lambda$ of $A$ satisfies $\\operatorname{Re}\\lambda=0$ or $\\operatorname{Im}\\lambda=0$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2025 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/?item=prob8q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2025-09",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Maksimum sampel acak tanpa pengembalian",
    "prompt": "Starting with $\\mathbb Z_{>0}$, select and delete its $i$th smallest remaining member with probability $2^{-i}$ at each step. If $Y_n$ is the greatest of the first $n$ selected integers, prove $$\\mathbb E Y_n=\\sum_{i=1}^n\\frac{2^i}{2^i-1}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2025 — Hari 2, Nomor 9",
      "url": "https://www.imc-math.org.uk/?item=prob9q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2025-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Pencacahan asimtotik hasil kali kuadrat sempurna",
    "prompt": "Set $$S_N=|\\{(a,b)\\in\\{1,\\ldots,N\\}^2:a(a+1)b(b+1)\\text{ is a square}\\}|.$$ Prove convergence of $S_N/N$ and determine its limit.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2025 — Hari 2, Nomor 10",
      "url": "https://www.imc-math.org.uk/?item=prob10q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imc-2026-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Identitas matriks dan komutativitas",
    "prompt": "Suppose $n$ is a positive integer and $A$ and $B$ are real $n\\times n$ matrices satisfying $$A^\\top A+BB^\\top=AB+BA,$$ with $X^\\top$ denoting the transpose of $X$. Is $AB=BA$ necessarily true?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2026 — Hari 1, Nomor 2",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2026-03",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Penggabungan berselang-seling himpunan bagian terurut",
    "prompt": "A deck contains $n\\ge2$ cards numbered $1,2,\\ldots,n$. An alternating shuffle splits the deck into two nonempty stacks, orders the first increasingly and the second decreasingly, and draws alternately from them, beginning with the first. When either stack is exhausted, append the remaining cards in their existing order. Count the distinct resulting deck orders.\n\nExample: With $n=6$, stacks $A=(1,3)$ and $B=(6,5,4,2)$ produce $(1,6,3,5,4,2)$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2026 — Hari 1, Nomor 3",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2026-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Limit barisan rekursif berbasis rata-rata",
    "prompt": "Given $x_1>0$, construct the sequence $\\{x_n\\}$ recursively by $$x_{n+1}=\\arctan\\left(\\frac{x_1+x_2+\\cdots+x_n}{n}\\right)\\qquad\\text{for all }n\\ge1.$$ Evaluate $\\displaystyle\\lim_{n\\to\\infty}x_n\\sqrt{\\ln n}$, using $\\ln x$ for the natural logarithm of $x$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2026 — Hari 1, Nomor 4",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2026-05",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Konsentrasi polinomial",
    "prompt": "Establish a constant $C>0$ for which each pair of positive integers $A,B$ admits a real polynomial $p(x)$ satisfying $$p(0)^2>\\sum_{i=1}^A p(-i)^2+\\sum_{i=1}^B p(i)^2\\qquad\\text{and}\\qquad \\deg p<C\\sqrt{AB}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2026 — Hari 1, Nomor 5",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Questions.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
      "note": "2026-11-25: original statement verified against official PDF page 1; mathematical typesetting spacing normalized."
    }
  },
  {
    "id": "imc-2026-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Luas gabungan ruas garis",
    "prompt": "Given a continuous function $f:[0,1]\\to\\mathbb R$, define $S(f)$ as the union of all straight segments in the plane connecting $(x,0)$ and $(f(x),1)$ for $x\\in[0,1]$. Denote the area of $S(f)$ by $A(f)$. Determine its infimum over all continuous $f$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2026 — Hari 2, Nomor 7",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2026-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Batas tajam energi matriks",
    "prompt": "Suppose $n\\ge5$ and $A=(a_{ij})$ is a real symmetric $n\\times n$ matrix satisfying $$a_{ii}=0\\qquad\\text{and}\\qquad a_{ij}\\in\\{-1,1\\}\\text{ for }i\\ne j.$$ All scalar products between distinct rows of $A$ have a common value. Denote the eigenvalues of $A$ by $\\lambda_1,\\ldots,\\lambda_n$. Establish $$\\sum_{i=1}^n|\\lambda_i|\\ge2n-2$$ and identify every matrix attaining equality.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2026 — Hari 2, Nomor 8",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2026-09",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Batas bawah barisan",
    "prompt": "Suppose $a_1,a_2,\\ldots$ form an infinite sequence of positive real numbers with $$a_1+a_2+\\cdots+a_{2n-1}=a_n^2$$ for every positive integer $n$. Establish $a_n\\ge2n-1$ for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2026 — Hari 2, Nomor 9",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2026-10",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Himpunan berhingga pada papan catur",
    "prompt": "An infinite chessboard of size $d>0$ is a square grid of side length $d$ whose square interiors alternate white and black; the grid lines have neither colour. The grid admits arbitrary planar translations and rotations.\n\nGiven any finite planar set $p_1,\\ldots,p_n$, must there exist $d\\in(0,1)$ and an infinite chessboard of size $d$ containing every $p_i$ in a white square?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2026 — Hari 2, Nomor 10",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2025-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Identitas fungsi lantai dengan akar berderajat genap",
    "prompt": "Fix a positive even integer $a$. Determine all real $x$ for which $$\\left\\lfloor\\sqrt[a]{b^a+x}\\,b^{a-1}\\right\\rfloor=b^a+\\left\\lfloor\\frac xa\\right\\rfloor$$ holds for every positive integer $b$, where $\\lfloor t\\rfloor$ is the greatest integer not exceeding $t$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2025 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/?item=prob4q&section=problems&year=2025",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob2q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob4q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob5q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2024-07",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Determinan pada identitas matriks",
    "prompt": "For fixed $n\\ge1$, determine the set of possible $\\det(AB)$ with $A,B\\in GL_n(\\mathbb C)$ subject to $$A+B=I_n,\\qquad (A^2+B^2)(A^4+B^4)=A^5+B^5.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2024 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/?item=prob7q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2024-08",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Batas limit barisan rekursif nonlinear",
    "prompt": "Starting from $x_1=2,\\ x_2=4$, iterate $$x_{n+2}=3x_{n+1}-2x_n+\\frac{2^n}{x_n}\\quad(n\\ge1).$$ Establish existence of $L=\\lim_{n\\to\\infty}2^{-n}x_n$ and the bounds $(1+\\sqrt3)/2\\le L\\le3/2$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2024 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/?item=prob8q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2024-09",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Paritas pencacahan matriks bilangan bulat",
    "prompt": "Call an integer matrix $A=(a_{ij})$ nice when all four conditions hold: (a) its set of entries is $\\{1,\\ldots,2t\\}$ for some positive integer $t$; (b) its rows and columns are nondecreasing; (c) if $a_{ij}=a_{k\\ell}$, then $i=k$ or $j=\\ell$; (d) for each $s=1,\\ldots,2t-1$, some positions $(i,j),(k,\\ell)$ with $i\\ne k$ and $j\\ne\\ell$ have entries $s,s+1$, respectively. The two nice matrices of size $2\\times3$ are $$\\begin{pmatrix}1&1&1\\\\2&2&2\\end{pmatrix},\\qquad\\begin{pmatrix}1&1&3\\\\2&4&4\\end{pmatrix}.$$ Prove that, for all positive integers $m,n$, the number of nice $m\\times n$ matrices is even.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2024 — Hari 2, Nomor 9",
      "url": "https://www.imc-math.org.uk/?item=prob9q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2024-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Kongruensi pembagi bilangan bebas kuadrat",
    "prompt": "Call a positive integer $n$ almost prime if it is square-free and its positive divisors $1=d_1<\\cdots<d_k=n$ satisfy $$n\\mid\\left(\\sum_{i=1}^k x^{d_i}-kx\\right)\\qquad(x\\in\\mathbb Z).$$ Square-free means that no square $d^2$ with integer $d>1$ divides $n$. Suppose $r=2^{2^m}+1$ is a Fermat prime, where $m\\ge0$ is an integer, and an almost prime integer $n$ has a prime divisor $p$ with $p\\equiv1\\pmod r$. Establish $d_i\\equiv1\\pmod r$ for every $1\\le i\\le k$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2024,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2024 — Hari 2, Nomor 10",
      "url": "https://www.imc-math.org.uk/?item=prob10q&section=problems&year=2024",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2023-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 2,
    "title": "Perpangkatan matriks dengan identitas terkait",
    "prompt": "Given $A,B,C\\in M_n(\\mathbb C)$ satisfying $A^2=B^2=C^2$ and $B^3-ABC=2I_n$, establish $A^6=I_n$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2023 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/?item=prob2q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2023-03",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Polinomial multiplikatif dalam dua variabel real",
    "prompt": "Classify $P\\in\\mathbb R[X,Y]$ for which $$P(x,y)P(z,t)=P(xz-yt,xt+yz)$$ identically.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2023 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/?item=prob3q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob4q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob5q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob6q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2023-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Syarat universal pada turunan",
    "prompt": "Set $\\mathcal V=\\{f\\in C([0,1]):f\\text{ is differentiable on }(0,1),\\ f(0)=0,\\ f(1)=1\\}$. Find the real parameters $\\alpha$ for which each $f\\in\\mathcal V$ admits $\\xi\\in(0,1)$ with $f'(\\xi)-f(\\xi)=\\alpha$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2023 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/?item=prob7q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2023-08",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Indeks Wiener dan Harary pada pohon",
    "prompt": "Let $T$ be a tree (a connected simple graph without cycles) on $n$ vertices. For vertices $u,v$, let $d(u,v)$ count the edges on a shortest path connecting them. Define $$W(T)=\\sum_{\\substack{\\{u,v\\}\\subseteq V(T)\\\\u\\ne v}}d(u,v),\\qquad H(T)=\\sum_{\\substack{\\{u,v\\}\\subseteq V(T)\\\\u\\ne v}}\\frac1{d(u,v)}.$$ Establish $$W(T)H(T)\\ge\\frac{(n-1)^3(n+2)}4.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2023 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/?item=prob8q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob9q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2023-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Penyebut jumlah parsial deret eksponensial",
    "prompt": "Write $\\sum_{j=0}^{n}1/j!=f_n/g_n$ in lowest terms with $g_n>0$. Decide whether $g_n>n^{0.999n}$ holds for at least one integer $n\\ge1$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2023,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2023 — Hari 2, Nomor 10",
      "url": "https://www.imc-math.org.uk/?item=prob10q&section=problems&year=2023",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2021-01",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 2,
    "title": "Persamaan matriks linear dengan koefisien nilpoten",
    "prompt": "Suppose $A\\in M_n(\\mathbb R)$ satisfies $A^3=0$. (a) Establish existence and uniqueness of a real $n\\times n$ matrix $X$ satisfying $$X+AX+XA^2=A.$$ (b) Give a formula for $X$ in terms of $A$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2021 — Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2021-02",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Invariansi peluang pengurutan",
    "prompt": "Fix positive integers $n,k$ and take any nonnegative integer $a$. Choose a $k$-element subset $X$ of $\\{1,\\ldots,k+a\\}$ uniformly at random. Independently choose an $n$-element subset $Y$ of $\\{1,\\ldots,k+n+a\\}$ uniformly at random. Show that $\\mathbb P(\\min Y>\\max X)$ is independent of $a$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2021 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/?item=prob2q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob3q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob4q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2021-05",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Batas determinan dari solusi matriks simetris",
    "prompt": "For $A\\in M_n(\\mathbb R)$, suppose every $m\\ge1$ admits a symmetric real matrix $B$ with $A^m=2021B-B^2$. Establish $|\\det A|\\le1$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 2, Nomor 5",
      "label": "IMC 2021 — Hari 2, Nomor 5",
      "url": "https://www.imc-math.org.uk/?item=prob5q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2021-06",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Ketakberadaan representasi permutasi setia",
    "prompt": "For prime $p$, establish that $\\operatorname{GL}_2(\\mathbb F_p)$ does not embed as a subgroup of the symmetric group $S_p$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2021,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2021 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/?item=prob6q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob7q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob8q&section=problems&year=2021",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/imc2022/imc2022day1questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2022-04",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Bilangan kromatik graf pergeseran pada tripel",
    "prompt": "Fix an integer $n>3$ and let $\\Omega$ consist of the three-element subsets of $\\{1,\\ldots,n\\}$. Let $m$ be the smallest number of colors needed to color $\\Omega$ so that $\\{a,b,c\\}$ and $\\{b,c,d\\}$ receive different colors whenever $1\\le a<b<c<d\\le n$. Establish $$\\frac{\\log\\log n}{100}\\le m\\le100\\log\\log n.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2022 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/imc2022/imc2022day1questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/imc2022/imc2022day2questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2022-06",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Permutasi dengan jumlah hasil kali bersebelahan tertentu",
    "prompt": "For each odd prime $p$, establish the existence of a permutation $(x_1,\\ldots,x_{p-1})$ of the nonzero residues modulo $p$ satisfying $$\\sum_{i=1}^{p-2}x_ix_{i+1}\\equiv2\\pmod p.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2022 — Hari 2, Nomor 6",
      "url": "https://www.imc-math.org.uk/imc2022/imc2022day2questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2022-07",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Batas rank matriks idempoten antikomutatif",
    "prompt": "Suppose $A_1,\\ldots,A_k\\in M_n(\\mathbb C)$ with $A_i^2=A_i$ for each $i$ and $A_iA_j+A_jA_i=0$ for $i\\ne j$. Establish $$\\min_{1\\le i\\le k}\\operatorname{rank}(A_i)\\le\\frac nk.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2022 — Hari 2, Nomor 7",
      "url": "https://www.imc-math.org.uk/imc2022/imc2022day2questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/imc2022/imc2022day2questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Alice and Carl alternate cutting a sheet of paper, initially square. On each turn, a straight cut divides the current sheet into two pieces; discard the smaller piece by area (either one in a tie) and pass the remaining piece to the other player. The first player to receive paper of area less than $1\\,\\mathrm{cm}^2$ loses. Alice starts. Characterize, with proof, the initial sizes for which Alice can force a win.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2013 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2013-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Tiga digit terakhir kuadrat sempurna",
    "prompt": "Determine all integers $x\\in[1,999]$ such that $x^2\\equiv111d\\pmod{1000}$ for some $d\\in\\{1,\\ldots,9\\}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2013 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2013-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Permainan penentuan koefisien polinomial",
    "prompt": "Malone and Cooper alternate selecting real values for the coefficients $a,b,c$ in $P(x)=x^3+ax^2+bx+c$, with Malone first. A coefficient already assigned cannot be changed. After three turns, Malone wins if $P$ has a nonreal root; otherwise Cooper wins. Determine who can force a win, describe the strategy, and justify it.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2013 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2015-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Jumlah minimum dengan FPB berbeda",
    "prompt": "Three trolls share $n$ pancakes, each receiving a positive integer number. The greatest common divisor of the holdings of each pair of trolls exceeds $1$, and the three resulting greatest common divisors are distinct. Find the least possible $n$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2015 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2015-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang median segitiga",
    "prompt": "In triangle $ABC$, $AC=13$, $AB=20$, and the altitude from $A$ to line $BC$ has length $12$. Let $M$ be the midpoint of $BC$. Determine every possible length of $AM$ and demonstrate that each is attainable.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2015 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2015-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "FPB koefisien polinomial binomial",
    "prompt": "Determine, with proof, every integer $n$ with $2\\le n\\le20$ for which the greatest common divisor of the coefficients of $(x+y)^n-x^n-y^n$ is exactly $3$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2015 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2015-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Pencacahan matriks dengan hasil kali tetap",
    "prompt": "Fill a $3\\times3$ grid with integers, allowing negative entries, so that the product along each row and each column equals $20$. One admissible grid is $$\\begin{pmatrix}1&-5&-4\\\\10&-2&-1\\\\2&2&5\\end{pmatrix}.$$ Count all admissible fillings.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2015,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2015 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2015UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Let $\\mathcal C$ be a circle disjoint from a line $L$. Denote the nearest and farthest points of $\\mathcal C$ from $L$ by $A$ and $B$, respectively, and put $X=AB\\cap L$. Let $\\mathcal C'$ be the circle centered at $B$ through $X$. Choose $K$ at an intersection of $\\mathcal C'$ and the perpendicular bisector of $AX$. The circle centered at $X$ through $K$ meets segment $AB$ at $H$. Prove that for every $P\\in L$, the circle centered at $P$ through $H$ is perpendicular to $\\mathcal C$. Two circles are perpendicular when their tangents at each intersection point form a right angle.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2020 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 2 compared; wording differs and exact transcription pending."
    }
  },
  {
    "id": "imc-2020-03",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Aproksimasi politop konveks simetris",
    "prompt": "Fix an integer $d\\ge2$. Prove that there is a constant $C(d)$ such that every origin-symmetric convex polytope $K\\subset\\mathbb R^d$ and every $0<\\varepsilon<1$ admit a convex polytope $L$ having at most $C(d)\\varepsilon^{1-d}$ vertices and satisfying $$(1-\\varepsilon)K\\subseteq L\\subseteq K.$$ Here a convex polytope with at most $m$ vertices is a convex hull of at most $m$ points with nonempty interior, $\\lambda K=\\{\\lambda x\\mid x\\in K\\}$, and origin symmetry means $-K=K$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2020 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/?item=prob3q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2020-05",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Karakterisasi fungsi positif melalui turunan",
    "prompt": "Characterize the positive real-valued functions in $C^2(\\mathbb R)$ subject to the pointwise inequality $ff''-2(f')^2\\ge0$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 2, Nomor 5",
      "label": "IMC 2020 — Hari 2, Nomor 5",
      "url": "https://www.imc-math.org.uk/?item=prob5q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob6q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "url": "https://www.imc-math.org.uk/?item=prob7q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2020-08",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Limit jumlah binomial logaritmik",
    "prompt": "Using natural logarithms, determine the asymptotic ratio $$\\lim_{n\\to\\infty}\\frac{\\sum_{k=1}^n(-1)^k\\binom nk\\ln k}{\\ln\\ln n}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2020 — Hari 2, Nomor 8",
      "url": "https://www.imc-math.org.uk/?item=prob8q&section=problems&year=2020",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Take positive real parameters $\\alpha,\\beta$. Emerald begins at the origin of the coordinate plane. At each minute she moves one unit upwards or rightwards, staying within $|x-y|<2025$. At each visited point $(x,y)$, she records $\\lfloor x\\alpha+y\\beta\\rfloor$. Classify the pairs $(\\alpha,\\beta)$ permitting a journey in which every nonnegative integer is recorded exactly once.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 2",
      "label": "APMO 2025 — APMO, 2",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2025-apmo-3",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Keterbagian polinomial pada barisan",
    "prompt": "For $P\\in\\mathbb Z[x]$ of positive degree with $P(0)\\ne0$, prove that any integer sequence satisfying $P(i-j)\\mid a_i-a_j$ for all distinct $i,j\\ge1$ is constant.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 3",
      "label": "APMO 2025 — APMO, 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2025-apmo-5",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan terbatas atau linear",
    "prompt": "Suppose $(a_n)_{n\\ge1}$ is an infinite sequence of positive integers for which $$a_{n-m+1}a_{n+m}\\mid100!(a_m+a_{m+1}+\\cdots+a_n)\\qquad(1\\le m\\le n).$$ Prove that the sequence is bounded or linear. Bounded here means that a constant $N$ exists with $a_n<N$ at all positive indices, and linear means $a_n=na_1$ at every such index.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 5",
      "label": "APMO 2025 — APMO, 5",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2026-apmo-1",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Persamaan faktorial dan perpangkatan",
    "prompt": "Classify positive integer quadruples $(a,p,m,o)$ with $o\\ge2$ satisfying $$a!+p!=m^o+26.$$",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 1",
      "label": "APMO 2026 — APMO, 1",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2026-apmo-2",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Jumlah irisan himpunan bagian siklik",
    "prompt": "For $n\\ge2$, list the distinct subsets of an $n$-element set cyclically as $(A_j)_{j=1}^{2^n}$, setting $A_{2^n+1}=A_1$. Establish $$\\sum_{j=1}^{2^n}|A_j\\cap A_{j+1}|\\ge2^{n-2}.$$",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 2",
      "label": "APMO 2026 — APMO, 2",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2026-apmo-3",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Fungsi yang mempertahankan urutan jarak",
    "prompt": "Classify $f:\\mathbb R_{>0}\\to\\mathbb R$ for which $$|x-y|<|y-z|\\iff |f(x)-f(y)|<|f(y)-f(z)|$$ for every positive real triple $(x,y,z)$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 3",
      "label": "APMO 2026 — APMO, 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "On day 1, Georgia's farm has $c$ cows and no ostriches, where $c$ is a positive integer. Each subsequent day she adds animals without removing any, so that the new total number of animals equals half of the preceding day's total number of legs. Cows have four legs and ostriches have two.\n\nLet $P_c(n)$ count the possible population histories $((c_1,o_1),\\ldots,(c_n,o_n))$ through day $n$, where $c_i,o_i$ are the respective populations on day $i$ and $(c_1,o_1)=(c,0)$. For example, $P_1(2)=2$, $P_1(3)=5$, and $P_2(3)=12$.\n\nDetermine all positive integers $c$ for which $3\\mid P_c(2021)$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2021 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "2026-11-25: compared against official PDF page 1; wording differs; exact replacement pending."
    }
  },
  {
    "id": "umo-2022-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas gabungan persegi bertumpuk",
    "prompt": "For an integer $n\\ge2$, Thibaud the Tiger places $n$ overlapping axis-aligned squares of side length $2$ with centers equally spaced on the segment joining $(0,0)$ and $(1,1)$, including both endpoints. The illustration shows $n=4$, for which the union has area $\\frac{23}{3}$.\n\n\n\n[[FIGURE]]\n\nDetermine, with proof, the smallest $n$ for which the union has area at least $\\sqrt{63}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2022 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "Abigail chooses an integer $A$ with $1\\le A\\le99$. Bruno is told the first digit after the decimal point of $\\frac{A}{11}$ (zero if the quotient is integral), and Chris is told the corresponding digit of $\\frac{A}{99}$.\n\nBruno says that he cannot identify $A$, but knows that Chris can reduce the candidates to exactly ten numbers. Chris responds that he can now reduce the candidates to $N$ numbers, each a product of two distinct primes.\n\nFind $N$ and all of Chris's remaining candidates.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2023 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "Consider the diagram.\n\n[[FIGURE]]\n\n(a) Demonstrate a way to trace every line without lifting the pencil, using precisely nine straight segments; overlap is permitted.\n\n(b) Prove that eight or fewer such segments cannot suffice.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2013 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2013-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Syarat garis bagi sudut segitiga",
    "prompt": "Let $I$ and $X$ be distinct points of line $l_1$. Lines $l_2,l_3$ pass through $I$ with angles $\\alpha,\\beta$ indicated below. The segment $XY$ makes angle $\\gamma$ with $l_1$ and ends on $l_2$ at $Y$.\n\n[[FIGURE]]\n\nDetermine necessary and sufficient conditions on $\\alpha,\\beta,\\gamma$ for a triangle having side $XY$ and angle bisectors $l_1,l_2,l_3$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2013 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2013-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Penutupan batas kisi heksagonal",
    "prompt": "Count the tilings of the boundary of a triangular array of hexagons of side length $n$, using only single hexagons and pairs of adjoining hexagons. Express the count through a familiar sequence and prove the formula for every integer $n\\ge3$. The diagrams give the cases $n=3,4,5,6$.\n\n[[FIGURE]]",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2013,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2013 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2013UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "An $n\\times n$ grid consists of islands joined by bridges between neighboring islands, as illustrated for $n=3$.\n\n[[FIGURE]]\n\nThis example contains nine islands and twelve bridges. A path begins and ends at any islands and travels along bridges; for example, traversing the top row from left to right uses two bridges. A perfect path visits each island exactly twice, crosses every bridge at least once, and never immediately reverses across the same bridge.\n\n(a) Construct a perfect path for $n=3$, or prove none exists.\n\n(b) Do the same for $n=4$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2020,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2020 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2020UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2014-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Representasi jumlah dua kuadrat",
    "prompt": "(a) Determine every pair of positive integers $x,y$ satisfying $x^2+y^2=2014$, or establish nonexistence.\n\n(b) Repeat for $x^2+y^2=3222014$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2014 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2014-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Iterasi daftar frekuensi bilangan",
    "prompt": "Joel starts with an ordered list of nonnegative integers. Replace it by the frequencies of $0,1,2,\\ldots$ up to its largest entry, including zero frequencies. Repeat indefinitely. For example,\n\n$(0,0,0,2)\\longrightarrow(3,0,1)\\longrightarrow(1,1,0,1)\\longrightarrow(1,3)\\longrightarrow\\cdots$\n\nand\n\n$(0,0)\\longrightarrow(2)\\longrightarrow(0,0,1)\\longrightarrow(2,1)\\longrightarrow\\cdots.$\n\nDetermine every two-entry list $(m,n)$ that can recur infinitely often for some starting list.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2014 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2014-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Sistem persamaan bilangan real positif",
    "prompt": "Determine all positive real triples $(x,y,z)$ satisfying $$xyz=1,\\qquad x^2+y^2+z^2=4x\\sqrt{yz}-2yz.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2014 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2014-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Jumlah lintasan pada kisi segitiga",
    "prompt": "Arrange $n$ rows of $2n$ equilateral triangles into a diamond, with southwest corner $A$ and northeast corner $B$. The drawing illustrates $n=3$, four permissible step directions, and one path.\n\n[[FIGURE]]\n\nA path goes from $A$ to $B$ by permitted adjacent steps, using no segment twice. Prove that the number of paths is an integer square for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2014,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2014 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2014UtahMathOlympiad.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "umo-2024-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang sisi segitiga dengan keliling satu",
    "prompt": "Find all possible side-length triples $(a,b,c)$ of a triangle satisfying $$a\\ge b\\ge c,\\qquad a^2-ab+b^2=c^2,\\qquad a+b+c=1.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2024 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "Classify the complex sequences $(x_n)_{n\\ge1},(y_n)_{n\\ge1}$ satisfying, for every pair of positive integers $m,n$, $$x_{m+n}=y_my_n,\\qquad y_{mn}=x_m+x_n.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2024,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2024 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2024UtahMathOlympiad.pdf",
      "note": "2026-11-25: official PDF page 1 compared; wording differs and exact transcription pending."
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
    "prompt": "In an acute triangle $ABC$, choose $D\\in AB$ and $E\\in AC$ with $DE\\parallel BC$. An interior point $X$ of $BCED$ defines $P=DX\\cap BC$ and $Q=EX\\cap BC$ along the rays $DX,EX$, with $P,Q$ between $B,C$. If the circles through $B,Q,X$ and $C,P,X$ meet again at $Y$, establish collinearity of $A,X,Y$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 1",
      "label": "APMO 2024 — Nomor 1",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2024-apmo-2",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Keterjangkauan langkah kuda",
    "prompt": "A piece starts at $(1,1)$ on the integer grid $\\{1,\\ldots,100\\}^2$. Fix an integer $51\\le k\\le99$. Each legal move changes the two coordinates in absolute value by $1,k$, in either order, while remaining on the grid. Determine, as a function of $k$, the number $L(k)$ of cells reachable by a finite sequence of moves.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 2",
      "label": "APMO 2024 — Nomor 2",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2024-apmo-4",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Permutasi koefisien binomial ganjil",
    "prompt": "For each positive integer $t$, establish existence and uniqueness of a permutation $(a_0,\\ldots,a_{t-1})$ of $\\{0,\\ldots,t-1\\}$ for which, at every index $i$, $\\binom{t+i}{2a_i}$ is odd and $2a_i\\ne t+i$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 4",
      "label": "APMO 2024 — Nomor 4",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2024-apmo-5",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kolinearitas pada segiempat siklik",
    "prompt": "A cyclic quadrilateral $ABCD$ has a transversal $\\ell$ meeting the interiors of $BC,AD$ at $R,S$ and the rays $DC,BA$ beyond $C,A$ at $Q,P$. Define $N\\ne Q$ by intersecting the circumcircles of $QCR,QDS$, and $M\\ne P$ by intersecting those of $PAS,PBR$. With $X=MP\\cap NQ$, $K=AB\\cap CD$, $L=BC\\cap AD$, show $X\\in KL$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2024,
      "stage": "APMO",
      "number": "Nomor 5",
      "label": "APMO 2024 — Nomor 5",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2025-apmo-4",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Dinamika ayam pada susunan melingkar",
    "prompt": "Arrange $n\\ge3$ binary-labelled cells in a circle. A rooster repeatedly flips the bit of its current cell, then advances counterclockwise one cell if the old bit was $0$, or two cells if it was $1$.\n\nShow that eventually, from its current cell $C$, exactly three revolutions bring it back to $C$ with every label restored to the state at the beginning of those revolutions.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2025,
      "stage": "APMO",
      "number": "Nomor 4",
      "label": "APMO 2025 — Nomor 4",
      "url": "https://www.apmo-official.org/static/problems/apmo2025_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2026-apmo-4",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis tegak lurus pada segiempat singgung",
    "prompt": "Let $ABCD$ admit an incircle $\\omega$ with centre $I$. Write $E=AC\\cap BD$ and let $J$ be the incenter of $ABD$. Extend ray $EJ$ to meet $\\omega$ at $P$. Establish $PI\\perp BD$.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 4",
      "label": "APMO 2026 — Nomor 4",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "apmo-2026-apmo-5",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pola penguncian pintu pada kisi",
    "prompt": "For a positive integer $n$, arrange $n(n+1)$ rooms in $n+1$ rows and $n$ columns, with a door joining each pair of adjacent rooms. Count the subsets of doors that can be locked while preserving an unlocked-door path from some room $S$ of the first row to some room $G$ of the last row.",
    "source": {
      "kind": "competition",
      "competition": "APMO",
      "year": 2026,
      "stage": "APMO",
      "number": "Nomor 5",
      "label": "APMO 2026 — Nomor 5",
      "url": "https://www.apmo-official.org/static/problems/apmo2026_prb.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
    "prompt": "Marianne has $n$ aluminium coins (A) and $n$ bronze coins (B) from the Bank of Oslo, in arbitrary linear order. A chain is a contiguous run of coins of one type. Fix $1\\le k\\le2n$. Repeatedly move the maximal chain containing coin number $k$ (counted from the left) to the front.\n\nFor $n=k=4$, one example is\n$AAB\\underline{B}BABA\\to BBB\\underline{A}AABA\\to AAA\\underline{B}BBBA\\to BBB\\underline{B}AAAA\\to BBB\\underline{B}AAAA\\to\\cdots$.\n\nClassify $(n,k)$ for which every initial ordering eventually has its first $n$ coins of a single type.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2022 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2022-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan faktorial dengan eksponen prima",
    "prompt": "Classify the positive integer triples $(a,b,p)$ satisfying $a^p=b!+p$, where $p$ is prime.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2022 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2022-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Jumlah lintasan naik pada persegi Nordik",
    "prompt": "For positive $n$, fill an $n\\times n$ Nordic square bijectively with $1,\\ldots,n^2$. Cells are adjacent when sharing a side; a valley has no adjacent smaller entry. An uphill path is a nonempty sequence of cells beginning at a valley, moving between adjacent cells, with strictly increasing entries. Determine the minimum number of uphill paths in terms of $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2022 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2023-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung dan garis bagi sudut",
    "prompt": "An acute triangle $ABC$ satisfies $AB<AC$ and has circumcircle $\\Omega$. Let $S$ bisect arc $CB$ containing $A$. The perpendicular from $A$ to $BC$ meets $BS$ at $D$ and $\\Omega$ again at $E$. Put $L=BE\\cap\\ell$, where $\\ell$ passes through $D$ parallel to $BC$. The circumcircle $\\omega$ of $BDL$ intersects $\\Omega$ at $B,P$. Show that its tangent at $P\\ne B$ intersects $BS$ on the internal bisector of $\\angle BAC$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2023 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2023-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Batas bawah barisan akar hasil kali",
    "prompt": "Suppose $x_1,\\ldots,x_{2023}$ are distinct positive reals and $a_n=\\sqrt{(x_1+\\cdots+x_n)\\left(\\frac1{x_1}+\\cdots+\\frac1{x_n}\\right)}$ is integral for each $1\\le n\\le2023$. Establish $a_{2023}\\ge3034$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2023 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2023-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Tiga lingkaran dengan dua titik persekutuan",
    "prompt": "In equilateral $ABC$, choose interior points $A_1,B_1,C_1$ with $BA_1=A_1C$, $CB_1=B_1A$, $AC_1=C_1B$ and $\\angle BA_1C+\\angle CB_1A+\\angle AC_1B=480^\\circ$. Set $A_2=BC_1\\cap CB_1$, $B_2=CA_1\\cap AC_1$, $C_2=AB_1\\cap BA_1$. If $A_1B_1C_1$ has three unequal sides, prove that the circumcircles of $AA_1A_2$, $BB_1B_2$, $CC_1C_2$ share two points.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2023 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2024-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Periodisitas barisan frekuensi",
    "prompt": "Take an infinite positive integer sequence $(a_n)$ and positive integer $N$. For $n>N$, let $a_n$ count occurrences of $a_{n-1}$ among $a_1,\\ldots,a_{n-1}$. Show that the odd-indexed or even-indexed subsequence is eventually periodic (possibly both). A sequence $(b_m)$ is eventually periodic when $b_{m+p}=b_m$ for all $m\\ge M$ for some positive integers $p,M$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2024 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2024-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Strategi Turbo pada papan monster",
    "prompt": "Turbo the snail faces a $2024\\times2023$ board with 2022 stationary hidden monsters, one per interior row, at most one per column. Their locations are unknown. Each attempt starts in any top-row cell and proceeds by side-adjacent moves, including revisits. Encountering a monster ends the attempt and returns Turbo to the top row. He remembers the status of all visited cells. Arrival at the bottom row wins. Find the least $n$ permitting guaranteed success within $n$ attempts for every monster placement.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2024 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2024-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Fungsi aquaesulian pada bilangan rasional",
    "prompt": "Call $f:\\mathbb Q\\to\\mathbb Q$ aquaesulian when each rational pair $x,y$ satisfies at least one of $f(x+f(y))=f(x)+y$ or $f(f(x)+y)=x+f(y)$. Find the least integer $c$ uniformly bounding the cardinality of $\\{f(r)+f(-r)\\mid r\\in\\mathbb Q\\}$ over aquaesulian functions, proving that such a bound exists.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2024,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2024 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2019-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan faktorial dan hasil kali",
    "prompt": "Classify positive integer pairs $(k,n)$ satisfying $$k!=(2^n-1)(2^n-2)(2^n-4)\\cdots(2^n-2^{n-1}).$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2019,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2019 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2019/2019_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2020-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kekonkurenan garis bagi sudut",
    "prompt": "Inside a convex quadrilateral $ABCD$, take $P$ satisfying $$\\angle PAD:\\angle PBA:\\angle DPA=1:2:3=\\angle CBP:\\angle BAP:\\angle BPC.$$ Show that the internal angle bisectors of $\\angle ADP,\\angle PCB$ and the perpendicular bisector of $AB$ are concurrent.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2020 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2021-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pertukaran posisi kenari pada lingkaran",
    "prompt": "Squirrels Bushy and Jumpy collect 2021 walnuts. Jumpy labels them $1,\\ldots,2021$ and digs that many holes around their favourite tree. Bushy places one walnut in each hole in arbitrary order. Jumpy makes 2021 swaps: at step $k$, exchange the two neighbors of walnut $k$. Prove that some step $k$ exchanges labels $a,b$ with $a<k<b$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2021 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2021-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Batas kardinalitas himpunan bilangan bulat",
    "prompt": "For integer $m\\ge2$, suppose $A$ is a finite integer set (negative and zero elements allowed), and $B_1,\\ldots,B_m\\subseteq A$ satisfy $\\sum_{b\\in B_k}b=m^k$ for $1\\le k\\le m$. Show $|A|\\ge\\frac m2$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2021 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2005-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Titik tetap lingkaran luar",
    "prompt": "Fix convex $ABCD$ with $BC=DA$ but nonparallel sides $BC,DA$. Vary $E\\in BC$ and $F\\in DA$ subject to $BE=DF$. Define the line intersections $P=AC\\cap BD$, $Q=BD\\cap EF$, $R=EF\\cap AC$. Prove that the circumcircles of $PQR$ all pass through a fixed second point distinct from $P$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2005 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2005/2005_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2018-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan real siklik",
    "prompt": "Classify integers $n\\ge3$ admitting real numbers $a_1,\\ldots,a_{n+2}$ with $a_{n+1}=a_1$, $a_{n+2}=a_2$, and $a_ia_{i+1}+1=a_{i+2}$ for $1\\le i\\le n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2018 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2018-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Segitiga anti-Pascal",
    "prompt": "An anti-Pascal triangle uses an equilateral triangular arrangement in which each entry above the bottom row equals the absolute difference of its two immediate lower neighbors. Here is a four-row example using $1$ through $10$:\n\n$\\begin{array}{ccccccc}&&&4&&&\\\\&&2&&6&&\\\\&5&&7&&1&\\\\8&&3&&10&&9\\end{array}$\n\nCan an anti-Pascal triangle of $2018$ rows contain every integer from $1$ through $1+2+\\cdots+2018$?",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2018 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2018-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan rasio bilangan bulat",
    "prompt": "Suppose $(a_n)_{n\\ge1}$ consists of positive integers and, for some integer $N>1$, the sum $\\frac{a_1}{a_2}+\\frac{a_2}{a_3}+\\cdots+\\frac{a_{n-1}}{a_n}+\\frac{a_n}{a_1}$ is integral whenever $n\\ge N$. Prove eventual constancy: $a_m=a_{m+1}$ for all $m\\ge M$ for some positive integer $M$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2018 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2018-06",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Jumlah sudut pada segiempat",
    "prompt": "In convex $ABCD$, assume $AB\\cdot CD=BC\\cdot DA$. An interior point $X$ satisfies $\\angle XAB=\\angle XCD$ and $\\angle XBC=\\angle XDA$. Establish $\\angle BXA+\\angle DXC=180^\\circ$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2018,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2018 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2018/2018_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2025-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Penutupan titik kisi dengan garis sunny",
    "prompt": "Call a planar line sunny if it is parallel to neither coordinate axis nor $x+y=0$. Given integer $n\\ge3$, classify nonnegative integers $k$ allowing $n$ distinct lines that cover every point $(a,b)$ with $a,b$ positive integers and $a+b\\le n+1$, exactly $k$ lines being sunny.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2025 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2025-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung lingkaran BEF",
    "prompt": "Circles $\\Omega,\\Gamma$ centered at $M,N$ intersect at distinct points $A,B$, with $\\Omega$ smaller in radius. On line $MN$, select $C\\in\\Omega$, $D\\in\\Gamma$ in order $C,M,N,D$. Let $P$ be the circumcenter of $ACD$ and $H$ the intersection of the altitudes of $PMN$. Line $AP$ meets $\\Omega,\\Gamma$ again at $E\\ne A,F\\ne A$, respectively. Establish tangency of the parallel to $AP$ through $H$ to the circumcircle of $BEF$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2025 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2025-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Batas fungsi bonza",
    "prompt": "Write $\\mathbb N=\\{1,2,\\ldots\\}$. Call $f:\\mathbb N\\to\\mathbb N$ bonza when $f(a)\\mid b^a-f(b)^{f(a)}$ for every $a,b\\in\\mathbb N$. Determine the least real $c$ bounding $f(n)\\le cn$ uniformly over these functions and positive integers $n$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2025 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2025-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Iterasi tiga pembagi sejati terbesar",
    "prompt": "Every term of an infinite positive integer sequence $(a_n)$ has at least three positive divisors smaller than itself. For $n\\ge1$, set $a_{n+1}$ equal to the sum of the largest three such divisors of $a_n$. Classify the possible starting values $a_1$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2025 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2025-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Strategi permainan inekoalaty",
    "prompt": "Alice and Bazza play inekoalaty with known $\\lambda>0$. On odd turn $n$, Alice chooses $x_n\\ge0$ subject to $\\sum_{i=1}^n x_i\\le\\lambda n$; on even turn $n$, Bazza chooses $x_n\\ge0$ subject to $\\sum_{i=1}^n x_i^2\\le n$. Choices are public. The first player unable to move loses; infinite play has no winner. Classify $\\lambda$ giving either player a winning strategy.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2025,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2025 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2025/2025_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2015-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Tiga selisih berpangkat dua",
    "prompt": "Classify positive integer triples $(a,b,c)$ for which $ab-c$, $bc-a$, and $ca-b$ each equal a power $2^n$ with nonnegative integer exponent.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2015 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2015-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Persinggungan dua lingkaran luar",
    "prompt": "In acute $ABC$ with $AB>AC$, let $\\Gamma,H,F,M$ denote its circumcircle, orthocenter, altitude foot from $A$, and midpoint of $BC$. Choose $Q,K\\in\\Gamma$ satisfying $\\angle HQA=\\angle HKQ=90^\\circ$. Distinct points $A,B,C,K,Q$ occur in that order on $\\Gamma$. Establish tangency of circumcircles of $KQH,FKM$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2015 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2015-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Titik potong pada garis pusat lingkaran",
    "prompt": "Triangle $ABC$ has circumcircle $\\Omega$ centered at $O$. Circle $\\Gamma$ centered at $A$ meets segment $BC$ at $D,E$ (distinct order $B,D,E,C$) and $\\Omega$ at $F,G$ (order $A,F,B,C,G$). Circumcircles of $BDF,CGE$ meet segments $AB,CA$ again at $K,L$, respectively. If distinct lines $FK,GL$ intersect at $X$, show $X\\in AO$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2015 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2015-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi real",
    "prompt": "Classify $f:\\mathbb R\\to\\mathbb R$ satisfying $f(x+f(x+y))+f(xy)=x+f(x+y)+yf(x)$ for every real pair $x,y$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2015 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2015-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Keterbatasan jumlah parsial barisan",
    "prompt": "An integer sequence obeys\n\n(i) $1\\le a_j\\le2015$ for $j\\ge1$;\n\n(ii) $k+a_k\\ne\\ell+a_\\ell$ whenever $1\\le k<\\ell$.\n\nEstablish positive integers $b,N$ for which $\\left|\\sum_{j=m+1}^{n}(a_j-b)\\right|\\le1007^2$ whenever integers $n>m\\ge N$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2015,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2015 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2015/2015_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2016-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Himpunan bilangan fragrant",
    "prompt": "A positive-integer set is fragrant when it has at least two members and every member shares a prime divisor with another member. For $P(n)=n^2+n+1$, minimize positive integer $b$ admitting nonnegative integer $a$ with $\\{P(a+1),\\ldots,P(a+b)\\}$ fragrant.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2016 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2016-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Penghapusan faktor persamaan polinomial",
    "prompt": "Start with $(x-1)(x-2)\\cdots(x-2016)=(x-1)(x-2)\\cdots(x-2016)$. Minimize the number $k$ of deleted factors among the $4032$ occurrences, leaving at least one factor on either side and no real solution.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2016,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2016 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2016/2016_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2017-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Iterasi akar kuadrat dan penjumlahan",
    "prompt": "For integer $a_0>1$ and each $n\\ge0$, define\n\n$a_{n+1}=\\begin{cases}\\sqrt{a_n},&\\sqrt{a_n}\\in\\mathbb Z,\\\\a_n+3,&\\text{otherwise}.\\end{cases}$\n\nClassify starting values permitting a number $A$ attained by infinitely many terms.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2017 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2017-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi komposisi",
    "prompt": "Classify maps $f:\\mathbb R\\to\\mathbb R$ obeying $f(f(x)f(y))+f(x+y)=f(xy)$ for every real $x,y$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2017 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2017-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Polinomial homogen pada titik primitif",
    "prompt": "A primitive point is an integer pair $(x,y)$ with $\\gcd(x,y)=1$. Given a finite set $S$ of such points, establish a positive integer $n$ and integers $a_0,\\ldots,a_n$ satisfying $a_0x^n+a_1x^{n-1}y+a_2x^{n-2}y^2+\\cdots+a_{n-1}xy^{n-1}+a_ny^n=1$ throughout $S$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2017,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2017 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2017/2017_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2012-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan hasil kali berpangkat",
    "prompt": "Given integer $n\\ge3$ and positive reals $a_2,\\ldots,a_n$ with $a_2a_3\\cdots a_n=1$, establish $$(1+a_2)^2(1+a_3)^3\\cdots(1+a_n)^n>n^n.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2012 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2012-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada bilangan bulat",
    "prompt": "Classify integer-valued maps $f:\\mathbb Z\\to\\mathbb Z$ obeying $$f(a)^2+f(b)^2+f(c)^2=2f(a)f(b)+2f(b)f(c)+2f(c)f(a)$$ whenever integers $a,b,c$ sum to zero.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2012 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2012-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Jumlah pecahan dengan pangkat dua dan tiga",
    "prompt": "Classify positive integers $n$ admitting nonnegative integers $a_1,\\ldots,a_n$ with $$\\frac1{2^{a_1}}+\\frac1{2^{a_2}}+\\cdots+\\frac1{2^{a_n}}=\\frac1{3^{a_1}}+\\frac2{3^{a_2}}+\\cdots+\\frac n{3^{a_n}}=1.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2012,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2012 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2012/2012_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2013-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Faktorisasi pecahan positif",
    "prompt": "For positive integers $k,n$, establish existence of positive integers $m_1,\\ldots,m_k$, allowing repetitions, satisfying $$1+\\frac{2^k-1}{n}=\\left(1+\\frac1{m_1}\\right)\\left(1+\\frac1{m_2}\\right)\\cdots\\left(1+\\frac1{m_k}\\right).$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2013 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2013-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pelabelan beautiful pada lingkaran",
    "prompt": "For integer $n\\ge3$, label $n+1$ equally spaced circular points bijectively by $0,\\ldots,n$, identifying rotations. A labelling is beautiful when chords $ad$ and $bc$ never intersect for labels $a<b<c<d$ satisfying $a+d=b+c$. Let $M$ count beautiful labellings and $N$ count ordered positive-integer pairs $(x,y)$ satisfying $x+y\\le n$ and $\\gcd(x,y)=1$. Establish $M=N+1$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2013,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2013 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2013/2013_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2014-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketunggalan indeks pada barisan meningkat",
    "prompt": "Given an infinite strictly increasing sequence $a_0<a_1<a_2<\\cdots$ of positive integers, establish existence and uniqueness of integer $n\\ge1$ satisfying $$a_n<\\frac{a_0+a_1+\\cdots+a_n}{n}\\le a_{n+1}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2014 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2014-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Garis singgung pada lingkaran TSH",
    "prompt": "Convex $ABCD$ satisfies $\\angle ABC=\\angle CDA=90^\\circ$. Let $H$ be the perpendicular foot from $A$ to line $BD$. Choose $S\\in AB,T\\in AD$ on the sides, with $H$ interior to $SCT$ and $\\angle CHS-\\angle CSB=90^\\circ$, $\\angle THC-\\angle DTC=90^\\circ$. Establish tangency of $BD$ to the circumcircle of $TSH$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2014,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2014 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2014/2014_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2009-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan aritmetika dari subbarisan berindeks",
    "prompt": "A strictly increasing positive integer sequence $(s_i)_{i\\ge1}$ has arithmetic subsequences $(s_{s_i})_{i\\ge1}$ and $(s_{s_i+1})_{i\\ge1}$. Establish that $(s_i)_{i\\ge1}$ is arithmetic.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2009,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2009 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2009/2009_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2010-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi dengan fungsi lantai",
    "prompt": "Classify $f:\\mathbb R\\to\\mathbb R$ satisfying $f(\\lfloor x\\rfloor y)=f(x)\\lfloor f(y)\\rfloor$ for all real $x,y$. Here $\\lfloor z\\rfloor$ is the greatest integer not exceeding $z$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2010 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2010-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Perpotongan garis pada lingkaran luar",
    "prompt": "Let $I,\\Gamma$ be the incentre and circumcircle of $ABC$, and $D$ the second intersection of $AI$ with $\\Gamma$. Take $E$ on arc $BDC$ and $F$ on side $BC$ with $\\angle BAF=\\angle CAE<\\frac12\\angle BAC$. For midpoint $G$ of $IF$, establish that $DG$ and $EI$ intersect on $\\Gamma$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2010 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2010-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Fungsi dengan hasil kali kuadrat sempurna",
    "prompt": "Write $\\mathbb N=\\{1,2,\\ldots\\}$. Classify $g:\\mathbb N\\to\\mathbb N$ for which $(g(m)+n)(m+g(n))$ is a perfect square for every $m,n\\in\\mathbb N$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2010 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2010-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Rekurensi maksimum barisan positif",
    "prompt": "A positive real sequence $(a_n)_{n\\ge1}$ satisfies $a_n=\\max\\{a_k+a_{n-k}\\mid1\\le k\\le n-1\\}$ whenever $n>s$, for some positive integer $s$. Establish positive integers $\\ell,N$ with $\\ell\\le s$ and $a_n=a_\\ell+a_{n-\\ell}$ whenever $n\\ge N$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2010,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2010 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2010/2010_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2011-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan fungsi real",
    "prompt": "Suppose $f:\\mathbb R\\to\\mathbb R$ obeys $f(x+y)\\le yf(x)+f(f(x))$ for arbitrary real $x,y$. Establish $f(x)=0$ whenever $x\\le0$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2011,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2011 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2011/2011_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2006-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Jarak titik interior dan incenter",
    "prompt": "In triangle $ABC$ with incenter $I$, suppose an interior point $P$ satisfies $\\angle PBA+\\angle PCA=\\angle PBC+\\angle PCB$. Establish $AP\\ge AI$, with equality precisely when $P=I$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2006 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2006-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Konstanta optimal ketaksamaan siklik",
    "prompt": "Minimize the real constant $M$ for which $$\\left|ab(a^2-b^2)+bc(b^2-c^2)+ca(c^2-a^2)\\right|\\le M(a^2+b^2+c^2)^2$$ for arbitrary real $a,b,c$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2006 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2006-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan kuadrat dengan perpangkatan dua",
    "prompt": "Find every integer pair $(x,y)$ satisfying $1+2^x+2^{2x+1}=y^2$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2006 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2006-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Titik tetap iterasi polinomial",
    "prompt": "Take an integer-coefficient polynomial $P(x)$ of degree $n>1$ and a positive integer $k$. Write $Q(x)=P(P(\\cdots P(x)\\cdots))$ for its $k$-fold composition. Prove that $Q(t)=t$ admits at most $n$ integer solutions.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2006,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2006 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2006/2006_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2007-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Aproksimasi barisan dengan barisan monoton",
    "prompt": "Given reals $a_1,\\ldots,a_n$, define $d_i=\\max\\{a_j:1\\le j\\le i\\}-\\min\\{a_j:i\\le j\\le n\\}$ for $1\\le i\\le n$, and $d=\\max\\{d_i:1\\le i\\le n\\}$.\n\n(a) For reals $x_1\\le\\cdots\\le x_n$, prove $\\max\\{|x_i-a_i|:1\\le i\\le n\\}\\ge\\frac d2$.\n\n(b) Establish that a nondecreasing real sequence $x_1,\\ldots,x_n$ attaining equality exists.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2007 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2007-05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian bentuk kuadrat",
    "prompt": "For positive integers $a,b$, establish that $4ab-1\\mid(4a^2-1)^2$ implies $a=b$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2007 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2007-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Penutupan titik kisi tiga dimensi",
    "prompt": "For positive integer $n$, define $S=\\{(x,y,z):x,y,z\\in\\{0,1,\\ldots,n\\},\\ x+y+z>0\\}$, a set of $(n+1)^3-1$ points in three-dimensional space. Minimize the number of planes covering $S$ while excluding the origin.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2007,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2007 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2007/2007_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2008-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan pecahan dan kasus kesetaraan",
    "prompt": "(a) For real $x,y,z$, none equal to $1$, with $xyz=1$, establish $$\\frac{x^2}{(x-1)^2}+\\frac{y^2}{(y-1)^2}+\\frac{z^2}{(z-1)^2}\\ge1.$$\n\n(b) Establish infinitely many rational triples satisfying the same restrictions and attaining equality.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2008 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2008-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Pembagi prima besar",
    "prompt": "Prove that infinitely many positive integers $n$ admit a prime divisor of $n^2+1$ exceeding $2n+\\sqrt{2n}$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "label": "IMO 2008 — Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2008-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada real positif",
    "prompt": "Classify maps $f:(0,\\infty)\\to(0,\\infty)$ satisfying $$\\frac{(f(w))^2+(f(x))^2}{f(y^2)+f(z^2)}=\\frac{w^2+x^2}{y^2+z^2}$$ for positive reals $w,x,y,z$ with $wx=yz$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2008 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2008-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Rasio banyak urutan sakelar lampu",
    "prompt": "Take positive integers $k\\ge n$ with $k-n$ even. Initially, lamps $1,\\ldots,2n$ are off. A step toggles one lamp. Let $N$ count $k$-step sequences ending with precisely lamps $1,\\ldots,n$ on. Let $M$ count those sequences that never turn on any lamp numbered above $n$. Determine $\\frac NM$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2008,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2008 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2008/2008_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2026-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Invariansi operasi FPB dan KPK",
    "prompt": "A blackboard holds 2026 integers exceeding $1$, repetitions allowed. Confucius repeatedly replaces two entries $m,n>1$ in different positions by $\\gcd(m,n)$ and $\\frac{\\operatorname{lcm}(m,n)}{\\gcd(m,n)}$ whenever possible.\n\n(a) Prove every such process terminates with precisely one entry $M>1$.\n\n(b) Prove $M$ is independent of the choices.\n\nHere $\\gcd$ and $\\operatorname{lcm}$ mean greatest common divisor and least common multiple.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "label": "IMO 2026 — Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2026-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Kesamaan jarak pusat lingkaran",
    "prompt": "In $ABC$, let $M,N$ be the midpoints of $AB,AC$. Choose $K$ strictly inside both $BMC,ABL$, and $L$ strictly inside both $BNC,AKC$. Assume $\\angle KBA=\\angle ACL$, $\\angle LBK=\\angle LNC$, $\\angle LCK=\\angle BMK$. For circumcentre $O$ of $AKL$, prove $OM=ON$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "label": "IMO 2026 — Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2026-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Strategi pemotongan segitiga",
    "prompt": "Fix a known angle $0^\\circ<\\theta<180^\\circ$. Shan-Yu chooses a paper triangle $\\mathcal T$. Repeatedly:\n\n• Mulan wins immediately if an angle equals $\\theta$.\n\n• Otherwise she cuts from a nonvertex boundary point $P$ to the opposite vertex.\n\n• Shan-Yu discards one resulting triangle; the other becomes $\\mathcal T$.\n\nClassify $\\theta$ permitting Mulan to force a finite win.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "label": "IMO 2026 — Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2026-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan fungsi real positif",
    "prompt": "Classify $f:\\mathbb R_{>0}\\to\\mathbb R_{>0}$ satisfying $$\\sqrt{\\frac{x^2+f(y)^2}{2}}\\ge\\frac{f(x)+y}{2}\\ge\\sqrt{xf(y)}$$ for every positive real pair $x,y$.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 2, Nomor 5",
      "label": "IMO 2026 — Hari 2, Nomor 5",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imo-2026-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Periodisitas aditif barisan FPB",
    "prompt": "In an infinite integer sequence with $a_i>1$, choose $a_{n+1}$ as the least integer exceeding $a_n$ with $\\gcd(a_{n+1},a_i)>1$ for $1\\le i\\le n$. Establish positive integers $T,L$ satisfying $a_{n+T}=a_n+L$ for every positive $n$. Here $\\gcd$ denotes greatest common divisor.",
    "source": {
      "kind": "competition",
      "competition": "IMO",
      "year": 2026,
      "stage": "IMO",
      "number": "Hari 2, Nomor 6",
      "label": "IMO 2026 — Hari 2, Nomor 6",
      "url": "https://www.imo-official.org/assets/documents/problems/2026/2026_eng.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2019-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "Hasil kali tak hingga",
    "prompt": "Calculate $$\\prod_{n=3}^{\\infty}\\frac{(n^3+3n)^2}{n^6-64}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2019 — Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2019-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Sistem persamaan linear dengan digit tahun",
    "prompt": "A four-digit integer $YEAR$ is very good when the following linear system in $x,y,z,w$ admits two or more solutions:\n\n$\\begin{aligned}Yx+Ey+Az+Rw&=Y,\\\\Rx+Yy+Ez+Aw&=E,\\\\Ax+Ry+Yz+Ew&=A,\\\\Ex+Ay+Rz+Yw&=R.\\end{aligned}$\n\nDetermine all very good years from 2001 through 2100, inclusive (the 21st century).",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2019 — Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2019-03",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Ketaksamaan integral",
    "prompt": "Suppose $f:(-1,1)\\to\\mathbb R$ is twice differentiable and $2f'(x)+xf''(x)\\ge1$ throughout $(-1,1)$. Establish $$\\int_{-1}^{1}xf(x)\\,dx\\ge\\frac13.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2019 — Hari 1, Nomor 3",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2019-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Integrality barisan rekursif",
    "prompt": "Construct $a_0,a_1,\\ldots$ using $a_0=1$, $a_1=2$, and $(n+3)a_{n+2}=(6n+9)a_{n+1}-na_n$ for $n\\ge0$. Prove integrality of every term.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2019 — Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_1_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  },
  {
    "id": "imc-2019-09",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Persamaan matriks invertibel",
    "prompt": "Classify positive integers $n$ admitting invertible real $n\\times n$ matrices $A,B$ with $AB-BA=B^2A$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2019,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2019 — Hari 2, Nomor 9",
      "url": "https://www.imc-math.org.uk/archive/problems/2019/IMC_2019_Day_2_Questions.pdf",
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
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
      "note": "Original wording not independently verified in current audit. Earlier metadata is not proof of exact transcription."
    }
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan pemecahan masalah tingkat perguruan tinggi.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Arsip soal resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
