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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-003",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Keliling papan setelah enam ubin dilepas",
    "prompt": "Papan persegi terdiri atas 36 ubin persegi berukuran $1\\text{ cm}\\times1\\text{ cm}$, tersusun dalam enam baris dan enam kolom. Empat ubin di sudut dilepas. Dua ubin lain, yaitu ubin pada baris pertama kolom ketiga dan baris keenam kolom keempat, juga dilepas. Tentukan luas dan keliling bangun yang tersisa.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-004",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kode dua angka dengan dua pembagian",
    "prompt": "Suatu kode merupakan bilangan dua angka. Jika dibagi 4, sisanya 1. Jika dibagi 5, sisanya 2. Jumlah kedua angkanya adalah 10. Tentukan kode tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-001",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Pembagi polinomial pada bilangan asli",
    "prompt": "Tentukan semua bilangan asli $n$ sedemikian sehingga $n+1$ membagi $n^2+5n+12$. Buktikan bahwa daftar yang diperoleh lengkap.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-003",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Pemilihan titik pada segi delapan",
    "prompt": "Pada delapan titik sudut segi delapan beraturan, dipilih tepat tiga titik. Tidak ada dua titik terpilih yang bertetangga maupun saling berhadapan. Berapa banyak himpunan tiga titik yang memenuhi kedua syarat?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-001",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Laju asimtotik barisan rasional rekursif",
    "prompt": "Diketahui $a_1>0$ dan $a_{n+1}=\\frac{a_n}{1+a_n^2}$ untuk setiap $n\\in\\mathbb N$. Buktikan bahwa $\\lim_{n\\to\\infty}\\sqrt n\\,a_n=\\frac{1}{\\sqrt2}$, tanpa mengasumsikan terlebih dahulu laju konvergensi barisan $(a_n)$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-004",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 5,
    "title": "Modulus konstan pada akar satuan",
    "prompt": "Misalkan $n\\ge1$ dan $P\\in\\mathbb C[z]$ merupakan polinomial tak nol berderajat paling tinggi $n$. Diketahui bahwa $|P(z)|$ bernilai sama pada seluruh akar persamaan $z^{2n+1}=1$. Buktikan bahwa $P(z)=cz^k$ untuk suatu $c\\in\\mathbb C\\setminus\\{0\\}$ dan $0\\le k\\le n$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "imo-2019-1",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi pada bilangan bulat",
    "prompt": "Tentukan semua fungsi $f:\\mathbb Z\\to\\mathbb Z$ yang memenuhi persamaan $$f(2a)+2f(b)=f(f(a+b))$$ untuk setiap $a,b\\in\\mathbb Z$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2019 — Nomor 1",
      "competition": "IMO",
      "year": 2019,
      "number": "Nomor 1",
      "url": "https://www.imo-official.org/problems/2019/eng.pdf",
      "note": "Pernyataan soal dalam bahasa Indonesia.",
      "stage": "IMO"
    }
  },
  {
    "id": "imc-2024-1",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Bilangan kompleks pada lingkaran satuan",
    "prompt": "Tentukan semua pasangan bilangan kompleks $(a,b)$ yang memenuhi $|a|=|b|=1$ sedemikian sehingga $a+b+a\\overline{b}$ merupakan bilangan real.",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2024",
      "note": "Pernyataan soal dalam bahasa Indonesia.",
      "stage": "IMC"
    }
  },
  {
    "id": "sd-005",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Tiga bilangan dari putaran angka",
    "prompt": "Tiga angka berbeda $a,b,c$ berada di antara 1 dan 9. Dibentuk tiga bilangan dua angka $\\overline{ab},\\overline{bc},\\overline{ca}$. Jumlah ketiganya 132. Bilangan $\\overline{ab}$ lebih besar 22 daripada $\\overline{bc}$, dan $a$ merupakan angka terbesar. Tentukan ketiga bilangan tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-006",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Bendera dengan dua warna bersebelahan",
    "prompt": "Empat posisi berjajar akan diisi dengan tepat dua bendera merah, satu bendera biru, dan satu bendera hijau. Bendera biru tidak boleh bersebelahan dengan bendera hijau, sedangkan kedua bendera merah harus bersebelahan. Berapa banyak susunan warna yang mungkin?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-007",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Persegi yang tidak memuat ubin hilang",
    "prompt": "Sebuah papan $4\\times4$ tersusun dari 16 ubin persegi satuan. Ubin pada baris kedua kolom kedua dilepas. Berapa banyak persegi dengan sisi sejajar tepi papan yang masih dapat dibentuk seluruhnya dari ubin yang tersisa? Hitung persegi dari semua ukuran.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-006",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Jabat tangan antara dua kelompok",
    "prompt": "Delapan peserta terbagi ke dalam dua kelompok, masing-masing beranggotakan empat orang. Setiap peserta berjabat tangan dengan tepat tiga orang, dan tidak ada jabat tangan di dalam kelompok yang sama. Buktikan bahwa setiap peserta pada kelompok pertama memiliki tepat satu peserta pada kelompok kedua yang tidak berjabat tangan dengannya. Berapa banyak pola jabat tangan berbeda jika seluruh peserta dibedakan?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sma-006",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Subhimpunan dengan tepat satu pasangan berurutan",
    "prompt": "Misalkan $n,k$ merupakan bilangan asli dengan $2\\le k\\le n$ dan $n\\ge2k-2$. Tentukan banyak himpunan bagian beranggota tepat $k$ dari $\\{1,2,\\ldots,n\\}$ yang memuat tepat satu pasangan bilangan berurutan. Dua pasangan seperti $(2,3)$ dan $(3,4)$ dihitung sebagai dua pasangan berbeda.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-006",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Pasangan spektrum matriks antikomutatif",
    "prompt": "Misalkan $A,B$ merupakan matriks real simetris berordo sama yang memenuhi $A^2+B^2=I$ dan $AB+BA=0$. Buktikan bahwa setiap nilai eigen $\\lambda$ dari $A$ dengan $-1<\\lambda<1$ memiliki multiplicitas yang sama dengan $-\\lambda$. Karakterisasikan peran $B$ pada ruang eigen terkait.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-007",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Serat pemetaan dari automorfisme involutif",
    "prompt": "Misalkan $G$ merupakan grup berhingga dan $\\alpha:G\\to G$ merupakan automorfisme dengan $\\alpha^2=\\operatorname{id}_G$. Definisikan $F(x)=x^{-1}\\alpha(x)$ dan $H=\\{g\\in G\\mid\\alpha(g)=g\\}$. Buktikan bahwa setiap serat tak kosong dari $F$ merupakan koset kanan dari $H$, tentukan kardinalitas $F(G)$, dan buktikan bahwa $\\alpha(y)=y^{-1}$ untuk setiap $y\\in F(G)$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
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
      "label": "DMath Learning Proposed"
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
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
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
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
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
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
      "stage": "OSN-P"
    }
  },
  {
    "id": "osnp-sd-2024-18",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pemilihan jenis roti",
    "prompt": "Sebuah toko menyediakan delapan jenis roti. Anita hendak membeli lima roti yang jenisnya berbeda-beda. Dua jenis telah ia tentukan. Berapa banyak pilihan pembelian yang masih mungkin?",
    "source": {
      "kind": "competition",
      "label": "OSN-P SD 2024 — Nomor 18",
      "competition": "OSN",
      "year": 2024,
      "number": "Nomor 18",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
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
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
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
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa. Pilihan B dan C sama nilainya pada salinan sumber.",
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
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
      "stage": "OSN Nasional"
    }
  },
  {
    "id": "imo-2024-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian jumlah fungsi lantai",
    "prompt": "Tentukan semua $\\alpha\\in\\mathbb R$ dengan sifat bahwa untuk setiap bilangan bulat positif $n$, berlaku $$n\\mid\\sum_{k=1}^{n}\\lfloor k\\alpha\\rfloor.$$ Notasi $\\lfloor x\\rfloor$ menyatakan bilangan bulat terbesar yang tidak melebihi $x$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2024 — Nomor 1",
      "competition": "IMO",
      "year": 2024,
      "number": "Nomor 1",
      "url": "https://www.imo-official.org/problems/2024/",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
      "stage": "IMO"
    }
  },
  {
    "id": "imo-2024-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "FPB perpangkatan",
    "prompt": "Carilah pasangan bilangan bulat positif $(a,b)$ yang membuat barisan $\\bigl(\\gcd(a^n+b,b^n+a)\\bigr)_{n\\ge1}$ bernilai konstan mulai suatu indeks tertentu.",
    "source": {
      "kind": "competition",
      "label": "IMO 2024 — Nomor 2",
      "competition": "IMO",
      "year": 2024,
      "number": "Nomor 2",
      "url": "https://www.imo-official.org/problems/2024/",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
      "stage": "IMO"
    }
  },
  {
    "id": "apmo-2024-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan produk dan jumlah",
    "prompt": "Untuk setiap bilangan bulat positif $n$ dan setiap pilihan $a_1,\\ldots,a_n>0$, buktikan bahwa $$\\sum_{i=1}^{n}\\frac{1}{2^i}\\left(\\frac{2}{1+a_i}\\right)^{2^i}\\ge\\frac{2}{1+a_1a_2\\cdots a_n}-\\frac{1}{2^n}.$$",
    "source": {
      "kind": "competition",
      "label": "APMO 2024 — Nomor 3",
      "competition": "APMO",
      "year": 2024,
      "number": "Nomor 3",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
      "stage": "APMO"
    }
  },
  {
    "id": "onmipa-2024-w-h1-i1",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Gabungan dan irisan interval",
    "prompt": "Untuk $n\\in\\mathbb N$ dengan $n\\ge1$, misalkan $I_n=\\left(1,1+\\frac1n\\right)$. Tentukan $\\bigcup_{n=1}^{\\infty}I_n$ dan $\\bigcap_{n=1}^{\\infty}I_n$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA 2024 — Wilayah, Hari 1, Isian 1",
      "competition": "ON-MIPA",
      "year": 2024,
      "number": "Hari 1, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2024-wilayah/",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
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
      "url": "https://onmipa.filzabuana.id/onmipa/2024-wilayah/",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa.",
      "stage": "ON-MIPA Wilayah"
    }
  },
  {
    "id": "imc-2024-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Kuadrat matriks biner",
    "prompt": "Tentukan semua $n\\in\\mathbb Z_{>0}$ sehingga terdapat $A\\in\\{0,1\\}^{n\\times n}$ dengan $A^2=J_n$, dengan $J_n$ menyatakan matriks berordo $n$ yang seluruh entrinya 1.",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 1, Nomor 3",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 1, Nomor 3",
      "url": "https://imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
      "stage": "IMC"
    }
  },
  {
    "id": "imc-2024-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Puncak fungsi bernilai bulat",
    "prompt": "Misalkan $f:\\mathbb Q\\to\\mathbb Z$ merupakan fungsi sebarang. Buktikan bahwa terdapat $a,b,c\\in\\mathbb Q$ dengan $a<b<c$ dan $f(b)\\ge\\max\\{f(a),f(c)\\}$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2024 — Hari 2, Nomor 6",
      "competition": "IMC",
      "year": 2024,
      "number": "Hari 2, Nomor 6",
      "url": "https://imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
      "stage": "IMC"
    }
  },
  {
    "id": "putnam-2024-a1",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Persamaan Diophantine berpangkat",
    "prompt": "Karakterisasikan semua bilangan bulat positif $n$ yang memungkinkan persamaan $$2a^n+3b^n=4c^n$$ mempunyai solusi $(a,b,c)\\in\\mathbb Z_{>0}^3$.",
    "source": {
      "kind": "competition",
      "label": "Putnam 2024 — A1",
      "competition": "Putnam",
      "year": 2024,
      "number": "A1",
      "url": "https://maa.org/wp-content/uploads/2026/02/2024-Putnam-Problems.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
      "stage": "Putnam"
    }
  },
  {
    "id": "putnam-2024-a2",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Komposisi polinomial",
    "prompt": "Tentukan semua $p\\in\\mathbb R[x]$ sehingga terdapat $q\\in\\mathbb R[x]$ dengan identitas $$p(p(x))-x=(p(x)-x)^2q(x).$$",
    "source": {
      "kind": "competition",
      "label": "Putnam 2024 — A2",
      "competition": "Putnam",
      "year": 2024,
      "number": "A2",
      "url": "https://maa.org/wp-content/uploads/2026/02/2024-Putnam-Problems.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber.",
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "osnk-sd-2025-03",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Kubus yang dicat",
    "prompt": "Permukaan sebuah kubus dengan rusuk 4 cm dicat merah. Kubus tersebut dibagi menjadi kubus-kubus kecil dengan rusuk 1 cm. Berapa banyak kubus kecil yang mempunyai tepat dua sisi merah? Pilihan: A. 16; B. 24; C. 32; D. 48.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2025 — Nomor 3",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-K",
      "number": "Nomor 3",
      "url": "https://www.defantri.com/2026/03/soal-dan-pembahasan-osnk-2025-matematika-sd.html",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sd-2026.html",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "osnk-sd-2026-20",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Keterbagian",
    "prompt": "Carilah bilangan terbesar kurang dari 4000 yang habis dibagi 3 dan bersisa 2 apabila dibagi 4.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2026 — Nomor 20",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 20",
      "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sd-2026.html",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "osnp-smp-2025-02",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Pangkat dua",
    "prompt": "Jumlah tiga bilangan berbeda adalah 6208. Setiap bilangan merupakan perpangkatan 2 dengan eksponen bilangan bulat positif. Tentukan jumlah ketiga eksponen tersebut.",
    "source": {
      "kind": "competition",
      "label": "OSN-P SMP 2025 — Nomor 2",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-P",
      "number": "Nomor 2",
      "url": "https://www.acceleratemyedu.com/resources/osn/smp/matematika/provinsi",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "osnp-smp-2025-03",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Representasi bilangan",
    "prompt": "Diketahui $(1P3)_m=(2Q4)_{m-2}$ dengan $m<8$. Notasi $(a_na_{n-1}\\ldots a_0)_b$ menyatakan representasi bilangan dalam basis bilangan bulat $b>1$, dengan setiap digit memenuhi $0\\le a_k<b$. Tentukan $m+P+Q$.",
    "source": {
      "kind": "competition",
      "label": "OSN-P SMP 2025 — Nomor 3",
      "competition": "OSN",
      "year": 2025,
      "stage": "OSN-P",
      "number": "Nomor 3",
      "url": "https://www.acceleratemyedu.com/resources/osn/smp/matematika/provinsi",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "osnk-sma-2026-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Ekspresi tiga variabel",
    "prompt": "Misalkan $x,y,z\\in\\mathbb R$ memenuhi $x-y=1$, $y-z=2$, dan $xyz=77$. Tentukan nilai $$\\frac{x}{yz}+\\frac{y}{xz}+\\frac{z}{xy}-\\left(\\frac1x+\\frac1y+\\frac1z\\right).$$",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMA 2026 — Nomor 1",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sma-2026.html",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "osnk-sma-2026-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Digit dalam urutan naik",
    "prompt": "Tentukan banyak bilangan bulat pada daftar $456,457,\\ldots,2026$ yang digit-digitnya berbeda dan tersusun naik dari kiri ke kanan.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMA 2026 — Nomor 5",
      "competition": "OSN",
      "year": 2026,
      "stage": "OSN-K",
      "number": "Nomor 5",
      "url": "https://www.catatanmatematika.com/2026/06/soal-osn-k-sma-2026.html",
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
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
      "note": "Redaksi Indonesia disusun ulang berdasarkan salinan publik pihak ketiga; belum dicocokkan dengan naskah asli."
    }
  },
  {
    "id": "ksnk-sd-2020-02",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Pola jumlah kursi",
    "prompt": "Satu meja segienam dapat ditempati 6 kursi. Dua meja yang dirapatkan memuat 10 kursi, dan tiga meja memuat 14 kursi. Jika 10 meja disusun memanjang dengan pola yang sama, berapakah kapasitas kursinya?",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 2",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 2",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksnk-sd-2020-03",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Selisih waktu bersepeda",
    "prompt": "Dua pesepeda menempuh jarak yang sama dengan kecepatan tetap 30 km/jam dan 25 km/jam. Pesepeda yang lebih cepat tiba setelah 15 menit. Berapa menit selisih waktu tempuh mereka?",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 3",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 3",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksnk-sd-2020-15",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Bilangan palindrom",
    "prompt": "Berapa banyak bilangan palindrom tiga digit yang dapat dibentuk menggunakan digit 1 hingga 5? Bilangan palindrom memiliki susunan digit yang sama ketika dibaca dari kedua arah.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2020 — Nomor 15",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 15",
      "url": "https://id.scribd.com/document/1055438818/Ksn-Matematika-Sd-Tahun-2020-Tingkat-Kabupaten",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksnk-sd-2021-02",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Susunan huruf",
    "prompt": "Berapa banyak permutasi huruf C, O, V, I, D apabila V dan D harus bersebelahan? Pilihan: A. 24; B. 32; C. 48; D. 52.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2021 — Nomor 2",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN-K",
      "number": "Nomor 2",
      "url": "https://id.scribd.com/document/790309363/2021-Soal-Osk-Matik-SD-www-konsep-matematika-com",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksnk-sd-2021-08",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Sisa hasil panen",
    "prompt": "Dari 4 ton padi, sebanyak 32 kuintal dijual dan 85 kg dibagikan. Berapa kilogram padi yang tersisa? Pilihan: A. 615; B. 625; C. 715; D. 725.",
    "source": {
      "kind": "competition",
      "label": "KSN-K SD 2021 — Nomor 8",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN-K",
      "number": "Nomor 8",
      "url": "https://id.scribd.com/document/790309363/2021-Soal-Osk-Matik-SD-www-konsep-matematika-com",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "osnk-sd-2022-13",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Jarak perjalanan",
    "prompt": "Seorang guru mengendarai sepeda motor dengan kecepatan rata-rata 50 km/jam selama waktu berkendara. Dari total perjalanan 65 menit, 20 menit digunakan untuk singgah di toko buku. Berapakah jarak perjalanannya dalam kilometer? Pilihan: A. 54,17; B. 46; C. 37,5; D. 30.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2022 — Nomor 13",
      "competition": "OSN",
      "year": 2022,
      "stage": "OSN-K",
      "number": "Nomor 13",
      "url": "https://id.scribd.com/document/1004179258/2022-Soal-Osk-Matik-SD-Edit",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "osnk-sd-2023-02",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Operasi pecahan",
    "prompt": "Hitung nilai $125\\%\\times\\frac25\\div0{,}25\\times1\\frac14\\div2{,}5$. Pilihan: A. 0,1; B. 0,64; C. 1; D. 10.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2023 — Nomor 2",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 2",
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "osnk-sd-2023-08",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Jarak olahraga",
    "prompt": "Butet berjalan selama 45 menit dengan laju rata-rata 4 km/jam, kemudian berlari selama 30 menit dengan laju rata-rata 10 km/jam. Tentukan total jaraknya dalam kilometer. Pilihan: A. 5; B. 6; C. 7; D. 8.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SD 2023 — Nomor 8",
      "competition": "OSN",
      "year": 2023,
      "stage": "OSN-K",
      "number": "Nomor 8",
      "url": "https://www.defantri.com/2023/06/soal-dan-pembahasan-osnk-matematika-sd.html",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "url": "https://www.defantri.com/2020/09/soal-pembahasan-ksn-k-2020-matematika.html?m=1",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksnk-smp-2020-02",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Pemilihan bilangan prima",
    "prompt": "Dari bilangan 2017, 2019, 2021, dan 2023, manakah yang prima?",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMP 2020 — Nomor 2",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Nomor 2",
      "url": "https://www.defantri.com/2020/09/soal-pembahasan-ksn-k-2020-matematika.html?m=1",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksn-smp-2021-07",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Permutasi dengan paritas sama",
    "prompt": "Baris pertama berisi $1,2,\\ldots,8$. Baris kedua adalah suatu permutasi dari bilangan-bilangan tersebut. Berapa permutasi yang membuat jumlah pada setiap kolom genap? Pilihan: A. 8; B. 16; C. 48; D. 576.",
    "source": {
      "kind": "competition",
      "label": "KSN Nasional SMP 2021 — Nomor 7",
      "competition": "OSN",
      "year": 2021,
      "stage": "KSN Nasional",
      "number": "Nomor 7",
      "url": "https://www.ruangparabintang.com/2021/09/soal-kompetisi-sains-nasional-ksn.html",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "ksnk-sma-2020-d06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Titik tengah kisi",
    "prompt": "Diberikan $S=\\{(x,y)\\in\\mathbb Z^2\\mid0\\le x\\le20,\\ 0\\le y\\le19\\}$. Berapa banyak pasangan tak berurutan dari dua titik berbeda di $S$ yang titik tengahnya juga berada di $S$?",
    "source": {
      "kind": "competition",
      "label": "KSN-K SMA 2020 — Kemampuan Dasar, Nomor 6",
      "competition": "OSN",
      "year": 2020,
      "stage": "KSN-K",
      "number": "Kemampuan Dasar, Nomor 6",
      "url": "https://www.soalfismat.com/pembahasan-soal-seleksi-ksn-k-osk-matematika-sma-ma-2020-kemampuan-dasar/",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "imo-2020-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan berbobot",
    "prompt": "Untuk $a\\ge b\\ge c\\ge d>0$ dengan $a+b+c+d=1$, buktikan $$ (a+2b+3c+4d)a^ab^bc^cd^d<1.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2020 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2020,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2020/2020_eng.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imo-2021-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Partisi dan kuadrat sempurna",
    "prompt": "Misalkan $n\\ge100$ bilangan bulat. Buktikan bahwa pada setiap pembagian $\\{n,n+1,\\ldots,2n\\}$ menjadi dua kelompok, terdapat dua anggota berbeda dalam satu kelompok yang jumlahnya kuadrat sempurna.",
    "source": {
      "kind": "competition",
      "label": "IMO 2021 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imo-2021-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan jumlah akar",
    "prompt": "Untuk sebarang bilangan real $x_1,\\ldots,x_n$, buktikan $$\\sum_{i,j=1}^n\\sqrt{|x_i-x_j|}\\le\\sum_{i,j=1}^n\\sqrt{|x_i+x_j|}.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2021 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2021,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2021/2021_eng.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imo-2022-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Persamaan fungsi dengan solusi tunggal",
    "prompt": "Tentukan semua fungsi $f:(0,\\infty)\\to(0,\\infty)$ dengan sifat: bagi setiap $x>0$, terdapat tepat satu $y>0$ yang memenuhi $xf(y)+yf(x)\\le2$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2022 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2022,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/assets/documents/problems/2022/2022_eng.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imo-2023-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Keterbagian faktor berurutan",
    "prompt": "Tentukan semua bilangan komposit $n>1$ dengan sifat berikut: apabila pembagi positifnya diurutkan sebagai $1=d_1<d_2<\\cdots<d_k=n$, maka $d_i\\mid(d_{i+1}+d_{i+2})$ untuk $1\\le i\\le k-2$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2023 — Hari 1, Nomor 1",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imo-2023-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Barisan dan polinomial monik",
    "prompt": "Untuk setiap bilangan bulat $k\\ge2$, tentukan semua barisan tak berhingga bilangan bulat positif $(a_n)$ yang memiliki polinomial monik $P\\in\\mathbb Z[x]$ berderajat $k$ dengan koefisien nonnegatif sehingga $P(a_n)=a_{n+1}\\cdots a_{n+k}$ bagi setiap $n\\ge1$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2023 — Hari 1, Nomor 3",
      "competition": "IMO",
      "year": 2023,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/assets/documents/problems/2023/2023_eng.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imc-2020-01",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Susunan huruf berparitas genap",
    "prompt": "Untuk $n$ bilangan bulat positif, hitung banyak kata sepanjang $n$ dari alfabet $\\{a,b,c,d\\}$ yang memuat huruf $a$ sebanyak bilangan genap dan huruf $b$ sebanyak bilangan genap.",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imc-2020-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Rank komutator dan trace",
    "prompt": "Misalkan $A,B\\in M_n(\\mathbb R)$ dengan $\\operatorname{rank}(AB-BA+I_n)=1$. Buktikan $$\\operatorname{tr}(ABAB)-\\operatorname{tr}(A^2B^2)=\\frac{n(n-1)}2.$$",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 2",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imc-2020-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Ketaksamaan polinomial",
    "prompt": "Misalkan $p\\in\\mathbb R[x]$ memenuhi $p(x+1)-p(x)=x^{100}$ untuk semua $x\\in\\mathbb R$. Buktikan $p(1-t)\\ge p(t)$ bagi $0\\le t\\le\\frac12$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2020 — Hari 1, Nomor 4",
      "competition": "IMC",
      "year": 2020,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "url": "https://www.imc-math.org.uk/archive/problems/2020/IMC_2020_Day_1_Questions.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "knmipa-2021-w-h1-i4",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup yang dibangkitkan",
    "prompt": "Grup $G$ berorde 2021 memuat dua elemen tak identitas $x,y$ yang ordenya berbeda. Tentukan orde subgrup $\\langle x,y\\rangle$.",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Wilayah 2021 — Hari 1, Isian 4",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Wilayah",
      "number": "Hari 1, Isian 4",
      "url": "https://onmipa.filzabuana.id/onmipa/2021-wilayah/",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "knmipa-2021-n-h1-03",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 5,
    "title": "Koprimalitas dan pangkat elemen grup",
    "prompt": "Misalkan $G$ merupakan grup berorde $n$ dan $k$ bilangan bulat positif. Buktikan ekuivalensi antara $\\gcd(n,k)=1$ dan sifat bahwa $\\{x\\in G\\mid x^k\\in H\\}\\subseteq H$ untuk setiap subgrup $H$ dari $G$.",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Nasional 2021 — Hari 1, Nomor 3",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Nasional",
      "number": "Hari 1, Nomor 3",
      "url": "https://id.scribd.com/document/1025602098/Soal-KNMIPA-Nasional-2021",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "knmipa-2021-n-h1-04",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Inti dan peta komposisi",
    "prompt": "Untuk $A\\in M_n(\\mathbb R)$, definisikan $T,S:\\mathbb R^n\\to\\mathbb R^n$ oleh $T(x)=Ax$ dan $S(x)=A^\\top x$. (a) Buktikan $\\ker(S\\circ T)=\\ker T$. (b) Selidiki apakah $\\operatorname{Im}(S\\circ T)=\\operatorname{Im}S$ selalu berlaku.",
    "source": {
      "kind": "competition",
      "label": "KNMIPA Nasional 2021 — Hari 1, Nomor 4",
      "competition": "ON-MIPA",
      "year": 2021,
      "stage": "KNMIPA Nasional",
      "number": "Hari 1, Nomor 4",
      "url": "https://id.scribd.com/document/1025602098/Soal-KNMIPA-Nasional-2021",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "onmipa-2022-w-h1-i2",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Limit jumlah Riemann",
    "prompt": "Hitung $$\\lim_{n\\to\\infty}\\sum_{k=0}^n\\frac1{n+k}.$$",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2022 — Hari 1, Isian 2",
      "competition": "ON-MIPA",
      "year": 2022,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2022-wilayah/",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "onmipa-2022-w-h1-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Komposisi permutasi",
    "prompt": "Diberikan permutasi $$\\sigma=\\begin{pmatrix}1&2&3&4&5\\\\3&4&1&5&2\\end{pmatrix},\\qquad\\tau=\\begin{pmatrix}1&2&3&4&5\\\\5&2&1&3&4\\end{pmatrix}.$$ Tentukan baris kedua representasi dua baris permutasi $(\\sigma\\circ\\tau)^{-1}$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2022 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2022,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2022-wilayah/",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
    }
  },
  {
    "id": "imc-2022-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Ketaksamaan integral",
    "prompt": "Misalkan $f:[0,1]\\to(0,\\infty)$ terintegralkan dan $f(x)f(1-x)=1$ untuk setiap $x\\in[0,1]$. Buktikan $\\int_0^1 f(x)\\,dx\\ge1$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2022 — Hari 1, Nomor 1",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "imc-2022-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Persamaan matriks dan transpos",
    "prompt": "Untuk $n$ bilangan bulat positif, tentukan semua $A\\in M_n(\\mathbb R)$ yang seluruh nilai eigennya real dan memenuhi $A+A^k=A^\\top$ bagi suatu bilangan bulat $k\\ge n$.",
    "source": {
      "kind": "competition",
      "label": "IMC 2022 — Hari 1, Nomor 2",
      "competition": "IMC",
      "year": 2022,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imc-math.org.uk/archive/problems/2022/IMC_2022_Day_1_Questions.pdf",
      "note": "Redaksi matematika dalam bahasa Indonesia berdasarkan naskah penyelenggara."
    }
  },
  {
    "id": "onmipa-2023-w-h1-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Indeks subgrup aditif",
    "prompt": "Misalkan $G=\\{m+n\\sqrt2\\mid m,n\\in\\mathbb Z\\}$ merupakan grup aditif dan $H=\\{3a+5b\\sqrt2\\mid a,b\\in\\mathbb Z\\}$. Tentukan kardinalitas $G/H$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2023 — Hari 1, Isian 3",
      "competition": "ON-MIPA",
      "year": 2023,
      "stage": "ON-MIPA Wilayah",
      "number": "Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2023-wilayah/",
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi disusun ulang dari salinan publik pihak ketiga; belum dicocokkan dengan naskah resmi."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2005-i2",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Nomor kendaraan terbesar",
    "prompt": "Nomor kendaraan terdiri atas empat digit dengan digit pertama bukan nol. Jumlah keempat digit harus merupakan kelipatan 5. Tentukan nomor terbesar yang diperbolehkan.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 2",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 2",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2005-i9",
    "level": "SD",
    "topic": "Kombinatorika",
    "difficulty": 2,
    "title": "Jumlah pertandingan",
    "prompt": "Sepuluh tim mengikuti sebuah turnamen. Setiap pasangan tim bertanding dua kali. Berapa banyak pertandingan yang berlangsung?",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 9",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 9",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2005-i10",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Menentukan pecahan",
    "prompt": "Suatu pecahan berubah menjadi $\\frac{2}{3}$ jika pembilangnya ditambah 3. Jika penyebut pecahan semula dikurangi 1, nilainya menjadi $\\frac{1}{2}$. Tentukan pecahan semula.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2005 — Isian 10",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Isian 10",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/a1-final-isian-singkat-osn-2005.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2006-i1",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Perbandingan tiga bahan",
    "prompt": "Tiga bahan $P,Q,R$ digunakan dengan perbandingan $P:Q=6:8$ dan $Q:R=7:3$. Tentukan $P:R$.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 1",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 1",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2006-i2",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Sudut dalam segitiga",
    "prompt": "Pada segitiga $ABC$, titik $D$ terletak pada sisi $AB$. Diketahui $\\angle ACD=43^\\circ$, $\\angle DCB=29^\\circ$, dan $\\angle ABC=48^\\circ$. Berapakah besar $\\angle CAD$?",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 2",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 2",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2006-i4",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Luas trapesium siku-siku",
    "prompt": "Pada trapesium $ABCD$, sisi $AB$ sejajar $DC$. Diketahui $\\angle ABC=90^\\circ$, $\\angle DAB=45^\\circ$, $AB=16$ cm, dan $DC=10$ cm. Tentukan luasnya.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2006 — Isian 4",
      "competition": "OSN",
      "year": 2006,
      "stage": "OSN Nasional",
      "number": "Isian 4",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/e1-zoalisiansingkatosn-2006.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2007-i7",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 4,
    "title": "Waktu mengecat kamar",
    "prompt": "Sebanyak 75 kamar harus dicat. Setiap pekerja mampu mengecat tiga perempat kamar per hari. Selama dua pertiga waktu pengerjaan, ada 12 pekerja; selama sisa waktunya, hanya satu pekerja. Tentukan lama pengerjaan dalam hari.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2007 — Isian 7",
      "competition": "OSN",
      "year": 2007,
      "stage": "OSN Nasional",
      "number": "Isian 7",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2013/01/2007-soal-osn-lengkap.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-sd-2007-i9",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Kadar garam",
    "prompt": "Enam liter air laut mempunyai kadar garam 4%. Satu liter air menguap tanpa mengurangi jumlah garamnya. Tentukan persentase kadar garam setelah penguapan.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SD 2007 — Isian 9",
      "competition": "OSN",
      "year": 2007,
      "stage": "OSN Nasional",
      "number": "Isian 9",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2013/01/2007-soal-osn-lengkap.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "imso-sd-2005-06",
    "level": "SD",
    "topic": "Statistika",
    "difficulty": 2,
    "title": "Perubahan rata-rata",
    "prompt": "Nilai rata-rata ulangan 48 siswa adalah 80. Dua nilai dikoreksi: 86 menjadi 93 dan 85 menjadi 84. Hitung rata-rata setelah koreksi.",
    "source": {
      "kind": "competition",
      "label": "IMSO 2005 — Isian 6",
      "competition": "IMSO",
      "year": 2005,
      "stage": "IMSO",
      "number": "Isian 6",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/short-answer1.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "imso-sd-2005-07",
    "level": "SD",
    "topic": "Logika",
    "difficulty": 3,
    "title": "Hari dalam kalender",
    "prompt": "Gaji dibayarkan pada Rabu pertama setiap bulan dan uangnya diambil dari bank pada Selasa pertama. Pada Rabu pertama suatu bulan, pengambilan uang belum dilakukan. Hari apakah tanggal 5 pada bulan tersebut?",
    "source": {
      "kind": "competition",
      "label": "IMSO 2005 — Isian 7",
      "competition": "IMSO",
      "year": 2005,
      "stage": "IMSO",
      "number": "Isian 7",
      "url": "https://fadjarp3g.wordpress.com/wp-content/uploads/2008/12/short-answer1.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-smp-2005-h1-02",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Banyak solusi bilangan bulat nonnegatif",
    "prompt": "Hitung banyak tupel $(x_1,x_2,x_3,x_4)$ dengan setiap $x_i$ bilangan bulat nonnegatif dan $x_1+x_2+x_3+x_4=7$.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SMP 2005 — Hari 1, Nomor 2",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Hari 1, Nomor 2",
      "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osn-smp-2005-h1-03",
    "level": "SMP",
    "topic": "Statistika",
    "difficulty": 3,
    "title": "Data dengan rata-rata dan median sama",
    "prompt": "Kenaikan produksi suatu perusahaan dalam lima periode dicatat sebagai persentase. Empat data yang diketahui adalah 4%, 9%, 7%, dan 5%. Tentukan kemungkinan data kelima jika rata-rata dan median kelima data tersebut sama.",
    "source": {
      "kind": "competition",
      "label": "OSN Nasional SMP 2005 — Hari 1, Nomor 3",
      "competition": "OSN",
      "year": 2005,
      "stage": "OSN Nasional",
      "number": "Hari 1, Nomor 3",
      "url": "https://masdwijanto.wordpress.com/wp-content/uploads/2011/07/osn-matematika-smp-2005.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "kmnr-smp-2016-78-02",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Perbandingan desimal",
    "prompt": "Manakah yang terbesar di antara $2{,}06$, $2{,}1$, $2{,}18$, $2{,}109$, dan $2{,}115$?",
    "source": {
      "kind": "competition",
      "label": "KMNR Penyisihan 2016 — Kelas 7–8, Nomor 2",
      "competition": "KMNR",
      "year": 2016,
      "stage": "KMNR Penyisihan",
      "number": "Kelas 7–8, Nomor 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-babak-penyisihan-kategori-kelas-7-8-matematika-nalaria-realistik/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "osnk-smp-2019-01",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Nilai maksimum perpangkatan",
    "prompt": "Pilih tiga anggota berbeda $a,b,c$ dari $\\{0,1,2,3,4\\}$ sehingga $(a^b)^c$ terdefinisi. Berapakah nilai terbesarnya? Pilihan: A. 4096; B. 6561; C. 9561; D. 9651.",
    "source": {
      "kind": "competition",
      "label": "OSN-K SMP 2019 — Nomor 1",
      "competition": "OSN",
      "year": 2019,
      "stage": "OSN-K",
      "number": "Nomor 1",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-osn-bidang-matematika-smp-kabupaten-kota-2019/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "imo-2005-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Barisan dengan residu berbeda",
    "prompt": "Misalkan $(a_n)$ barisan bilangan bulat yang mempunyai tak berhingga banyak suku positif dan tak berhingga banyak suku negatif. Untuk setiap $n\\ge1$, residu dari $a_1,\\ldots,a_n$ modulo $n$ semuanya berbeda. Buktikan bahwa setiap bilangan bulat muncul tepat sekali dalam barisan itu.",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 1, Nomor 2",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 2",
      "url": "https://www.imo-official.org/problems/2005/eng.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "imo-2005-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Ketaksamaan tiga variabel",
    "prompt": "Buktikan bahwa untuk $x,y,z>0$ dan $xyz\\ge1$, berlaku $$\\frac{x^5-x^2}{x^5+y^2+z^2}+\\frac{y^5-y^2}{x^2+y^5+z^2}+\\frac{z^5-z^2}{x^2+y^2+z^5}\\ge0.$$",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 1, Nomor 3",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 1, Nomor 3",
      "url": "https://www.imo-official.org/problems/2005/eng.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "imo-2005-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Koprimalitas pada barisan",
    "prompt": "Tentukan semua bilangan bulat positif yang relatif prima terhadap setiap suku barisan $a_n=2^n+3^n+6^n-1$, $n\\ge1$.",
    "source": {
      "kind": "competition",
      "label": "IMO 2005 — Hari 2, Nomor 4",
      "competition": "IMO",
      "year": 2005,
      "stage": "IMO",
      "number": "Hari 2, Nomor 4",
      "url": "https://www.imo-official.org/problems/2005/eng.pdf",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "lmnas-ugm-sma-2018-pg05",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Tiga digit terakhir jumlah faktorial",
    "prompt": "Jika $N=\\sum_{k=1}^{2018}(k!)^3$ dan tiga digit terakhir $N$ adalah $a,b,c$, hitung $a+b+c$. Pilihan: A. 9; B. 10; C. 11; D. 12; E. 13.",
    "source": {
      "kind": "competition",
      "label": "LMNas UGM Penyisihan 2018 — Pilihan Ganda 5",
      "competition": "LMNas UGM",
      "year": 2018,
      "stage": "LMNas UGM Penyisihan",
      "number": "Pilihan Ganda 5",
      "url": "https://id.scribd.com/document/431458432/SOAL-OLIMPIADE-MATEMATIKA-UGM-BABAK-PENYISIHAN",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2006-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup berorde empat",
    "prompt": "Misalkan $G=\\{1,-1\\}$ merupakan grup terhadap perkalian. Tentukan banyak subgrup berorde 4 dari grup hasil kali langsung $G^3$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2006 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2006,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2006-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2007-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Pusat grup linear umum",
    "prompt": "Misalkan $F$ merupakan lapangan berhingga dengan $k$ elemen dan $G=GL_n(F)$. Tentukan kardinalitas pusat $Z(G)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2007 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2007,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2007-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2008-w-aljabar-linear-i3",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Trace komutator",
    "prompt": "Untuk $A,B\\in M_n(F)$ dengan $F$ suatu lapangan, tentukan $\\operatorname{tr}(AB-BA)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2008 — Aljabar Linear, Isian 3",
      "competition": "ON-MIPA",
      "year": 2008,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2008-aljabar-linear/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2009-w-aljabar-linear-i2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Dimensi ruang solusi",
    "prompt": "Tentukan dimensi subruang fungsi kontinu real $\\{f\\mid f''+f=0\\}$, dengan turunan kedua terdefinisi pada $\\mathbb R$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2009 — Aljabar Linear, Isian 2",
      "competition": "ON-MIPA",
      "year": 2009,
      "stage": "ON-MIPA Wilayah",
      "number": "Aljabar Linear, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2009-aljabar-linear/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2013-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen berorde dua",
    "prompt": "Misalkan $D_8=\\langle x,y\\mid x^2=y^4=e,\\ xy=y^{-1}x\\rangle$ merupakan grup dihedral berorde 8. Berapa banyak elemen yang berorde 2?",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2013 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2013,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2013-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2016-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Kernel operator diferensial",
    "prompt": "Pada grup aditif $\\mathbb R[x,y]$, didefinisikan $\\varphi(f)=\\frac{\\partial^2 f}{\\partial x\\,\\partial y}$. Tentukan $\\ker\\varphi$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2016 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2016,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2016-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2017-w-struktur-aljabar-i2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen berorde dua pada grup simetri",
    "prompt": "Tentukan banyak elemen berorde 2 dari grup simetri $S_5$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2017 — Struktur Aljabar, Isian 2",
      "competition": "ON-MIPA",
      "year": 2017,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 2",
      "url": "https://onmipa.filzabuana.id/onmipa/2017-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
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
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2018-w-struktur-aljabar-i1",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Subgrup invariant terhadap pertukaran",
    "prompt": "Tentukan banyak subgrup $H$ dari $\\mathbb Z_2\\times\\mathbb Z_2$ yang memenuhi $(b,a)\\in H$ untuk setiap $(a,b)\\in H$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2018 — Struktur Aljabar, Isian 1",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2018-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "onmipa-2018-w-struktur-aljabar-i3",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Pembagi nol gelanggang kuosien",
    "prompt": "Misalkan $I=\\langle x^2+x\\rangle$ di $\\mathbb Z_2[x]$. Tentukan banyak pembagi nol tak nol dalam gelanggang $\\mathbb Z_2[x]/I$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Wilayah 2018 — Struktur Aljabar, Isian 3",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Wilayah",
      "number": "Struktur Aljabar, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2018-struktur-aljabar/",
      "note": "Redaksi Indonesia disusun berdasarkan salinan yang ditelusuri. Nomor mengikuti sumber."
    }
  },
  {
    "id": "hmmt-2005-feb-1",
    "level": "SMA",
    "title": "Persamaan nilai mutlak",
    "prompt": "Tentukan banyak solusi real dari $|x-1|=|x-2|+|x-3|$.",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
    }
  },
  {
    "id": "hmmt-2005-feb-2",
    "level": "SMA",
    "title": "Persamaan eksponensial",
    "prompt": "Berapa banyak $x\\in\\mathbb R$ yang memenuhi $2003^x+2004^x=2005^x$?",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
    }
  },
  {
    "id": "hmmt-2005-feb-3",
    "level": "SMA",
    "title": "Rasio jumlah hasil kali",
    "prompt": "Untuk tiga bilangan real berbeda $x,y,z$ dengan $x+y+z=0$, tentukan nilai maksimum $\\frac{xy+yz+zx}{x^2+y^2+z^2}$.",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
    }
  },
  {
    "id": "hmmt-2005-feb-9",
    "level": "SMA",
    "title": "Jumlah faktor prima",
    "prompt": "Bilangan $27.000.001$ mempunyai tepat empat faktor prima. Tentukan jumlah keempat faktor tersebut.",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
    }
  },
  {
    "id": "hmmt-2025-feb-1",
    "level": "SMA",
    "title": "Pembagi dengan digit satuan tertentu",
    "prompt": "Jumlahkan seluruh pembagi positif dari $9!$ yang berakhir dengan digit 1, termasuk pembagi 1.",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
    }
  },
  {
    "id": "hmmt-2025-feb-4",
    "level": "SMA",
    "title": "Jumlahan fungsi lantai",
    "prompt": "Hitung nilai $$\\sum_{j=-1000}^{1000}\\left\\lfloor\\frac{2025}{j+0{,}5}\\right\\rfloor.$$",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
    }
  },
  {
    "id": "hmmt-2025-feb-10",
    "level": "SMA",
    "title": "Sistem persamaan kompleks siklik",
    "prompt": "Tiga bilangan kompleks $a,b,c$ berbeda satu sama lain dan memenuhi $a^2=b+6$, $b^2=c+6$, serta $c^2=a+6$. Tentukan kedua kemungkinan nilai $a+b+c$.",
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
      "note": "Pernyataan matematis dalam bahasa Indonesia; nomor diperiksa pada naskah penyelenggara."
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
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
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
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
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
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
    }
  },
  {
    "id": "onmipa-untan-2018-esai-2",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Subgrup diagonal",
    "prompt": "Misalkan $G$ grup dan $A=G\\times G$. Definisikan $T=\\{(g,g)\\mid g\\in G\\}$. Buktikan bahwa $T\\cong G$ dan bahwa $T$ normal dalam $A$ jika dan hanya jika $G$ abelian.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2018 — Esai 2",
      "competition": "ON-MIPA",
      "year": 2018,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Esai 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2018/",
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-2",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Menentukan citra pemetaan linear",
    "prompt": "Pemetaan linear $f:\\mathbb R^2\\to\\mathbb R^2$ memenuhi $f(4,1)=(1,1)$ dan $f(1,1)=(3,-2)$. Tentukan $f(0,1)$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 2",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 2",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-7",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Elemen berorde dua",
    "prompt": "Misalkan $G=\\{(a,b)\\in\\mathbb R^2\\mid a\\ne0\\}$ dengan operasi $(a,b)*(c,d)=(ac,b+d)$. Tentukan elemen berorde 2 dalam $G$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 7",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 7",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
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
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
    }
  },
  {
    "id": "onmipa-untan-2019-isian-22",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 4,
    "title": "Jari-jari konvergensi deret pangkat",
    "prompt": "Misalkan $(a_n)$ barisan real dengan $a_0=1$, $a_1=2$, dan $a_n=a_{n-1}+a_{n-2}$ untuk $n\\ge2$. Tentukan jari-jari konvergensi deret $\\sum_{n=0}^{\\infty}a_nz^n$.",
    "source": {
      "kind": "competition",
      "label": "ON-MIPA Seleksi Universitas Tanjungpura 2019 — Isian 22",
      "competition": "ON-MIPA",
      "year": 2019,
      "stage": "ON-MIPA Seleksi Universitas",
      "number": "Universitas Tanjungpura, Isian 22",
      "url": "https://mathcyber1997.com/soal-dan-pembahasan-on-mipa-pt-matematika-seleksi-universitas-tanjungpura-tahun-2019/",
      "note": "Redaksi disusun dari salinan Mathcyber1997; naskah asli belum diperiksa."
    }
  },
  {
    "id": "amc8-2008-07",
    "level": "SMP",
    "topic": "Aritmetika",
    "difficulty": 2,
    "title": "Ratios",
    "prompt": "If $\\frac35=\\frac{M}{45}=\\frac{60}{N}$, what is $M+N$? Pilihan: A. $27$; B. $29$; C. $45$; D. $105$; E. $127$",
    "source": {
      "kind": "competition",
      "label": "AMC 8 2008 — Nomor 7 · Copyright © 2008, The Mathematical Association of America",
      "competition": "AMC 8",
      "year": 2008,
      "stage": "AMC 8",
      "number": "Nomor 7",
      "url": "https://agmath.com/media/DIR_37352/2008AMC8.pdf#page=3",
      "note": "Redaksi bahasa Inggris dicocokkan dengan naskah asli. Izin penggunaan soal individual untuk pendidikan nonkomersial tercantum pada naskah."
    }
  },
  {
    "id": "amc12b-2007-09",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Function evaluation",
    "prompt": "A function $f$ has the property that $f(3x-1)=x^2+x+1$ for all real numbers $x$. What is $f(5)$? Pilihan: A. $7$; B. $13$; C. $31$; D. $111$; E. $211$",
    "source": {
      "kind": "competition",
      "label": "AMC 12 B 2007 — Nomor 9 · Copyright © 2007, The Mathematical Association of America",
      "competition": "AMC 12",
      "year": 2007,
      "stage": "AMC 12 B",
      "number": "Nomor 9",
      "url": "https://f.hubspotusercontent30.net/hubfs/981338/Math%20Competition%20Problems_PDFS/2007AMC12-B.pdf#page=3",
      "note": "Redaksi bahasa Inggris dicocokkan dengan naskah asli. Izin penggunaan soal individual untuk pendidikan nonkomersial tercantum pada naskah."
    }
  },
  {
    "id": "aime2-2011-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Interesting ordered quadruples",
    "prompt": "Define an ordered quadruple of integers $(a,b,c,d)$ to be interesting if $1\\le a<b<c<d\\le10$ and $a+d>b+c$. How many interesting ordered quadruples are there?",
    "source": {
      "kind": "competition",
      "label": "AIME II 2011 — Nomor 6 · Copyright © 2011, The Mathematical Association of America",
      "competition": "AIME",
      "year": 2011,
      "stage": "AIME II",
      "number": "Nomor 6",
      "url": "https://f.hubspotusercontent30.net/hubfs/981338/Math%20Competition%20Problems_PDFS/2011AIME-II.pdf#page=2",
      "note": "Redaksi bahasa Inggris dicocokkan dengan naskah asli. Izin penggunaan soal individual untuk pendidikan nonkomersial tercantum pada naskah."
    }
  },
  {
    "id": "egmo-2013-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "A right angle from equal segments",
    "prompt": "In the plane, take noncollinear points $A,B,C$ and define $D=2C-B$ and $E=3A-2C$. Prove that $|AD|=|BE|$ implies that $\\triangle ABC$ is right-angled.",
    "source": {
      "kind": "competition",
      "competition": "EGMO",
      "year": 2013,
      "stage": "EGMO",
      "number": "Nomor 1",
      "label": "EGMO 2013 — Nomor 1 · MathNet",
      "url": "https://imomath.com/srb/zadaci/2013_egmo_resenja_e.pdf",
      "collection": "MathNet",
      "collectionUrl": "https://huggingface.co/datasets/ShadenA/MathNet",
      "note": "Independent mathematical formulation in English; MathNet record 05dg; not verbatim."
    }
  },
  {
    "id": "bmo-shortlist-2016-g1",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Incenters and concyclicity",
    "prompt": "Let $ABCD$ be a convex tangential quadrilateral, with $M$ in the interior of segment $AB$. Write $I(XYZ)$ for the incenter of triangle $XYZ$. Prove that $$M,\\ I(MBC),\\ I(MCD),\\ I(MDA)$$ are concyclic.",
    "source": {
      "kind": "competition",
      "competition": "Balkan MO",
      "year": 2016,
      "stage": "Shortlist",
      "number": "G1",
      "label": "Balkan MO 2016 — Shortlist G1 · MathNet",
      "url": "https://huggingface.co/datasets/AI-MO/olympiads/blob/main/Balkan_Shortlist/md/en-2016_bmo_shortlist.md",
      "collection": "MathNet",
      "collectionUrl": "https://huggingface.co/datasets/ShadenA/MathNet",
      "note": "Independent mathematical formulation in English; MathNet record 00rl; not verbatim."
    }
  },
  {
    "id": "aime1-2024-01",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "A system of rational equations",
    "prompt": "Let $s>0$ and $t\\ge0$ satisfy $$\\frac{9}{s}+\\frac{t}{60}=4,\\qquad \\frac{9}{s+2}+\\frac{t}{60}=\\frac{12}{5}.$$ Determine the value of $\\frac{540}{s+\\frac12}+t$.",
    "source": {
      "kind": "competition",
      "competition": "AIME",
      "year": 2024,
      "stage": "AIME I",
      "number": "Nomor 1",
      "label": "AIME I 2024 — Nomor 1 · AoPS",
      "url": "https://artofproblemsolving.com/school/mathjams-transcripts?id=682",
      "collection": "AoPS",
      "collectionUrl": "https://artofproblemsolving.com/school/mathjams-transcripts?id=682",
      "note": "Independent symbolic formulation of the original mathematical task, not verbatim."
    }
  },
  {
    "id": "umo-2016-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Edge-removal game",
    "prompt": "Consider the graph on vertices $A,B,C,D,E,F$ with edges $AB,BC,CD,DE,EF,FA,AC,CE,EA$. Ada chooses the initial vertex of a token. Starting with Ada, players alternately move the token along an incident edge and delete that edge. The player unable to move loses. Which player has a winning strategy?",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2016 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2016-02",
    "level": "SMA",
    "topic": "Peluang",
    "difficulty": 3,
    "title": "Equal-sum dice pairs",
    "prompt": "Roll four independent fair dice, each numbered $1$ through $6$. Determine the probability that the four outcomes admit a partition into two pairs having equal sums.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2016 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2016-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Two-color obstruction",
    "prompt": "Does there exist a coloring $c:\\mathbb Z_{>0}\\to\\{0,1\\}$ for which no solution $a+b+c_0=d$ in positive integers satisfies $c(a)=c(b)=c(c_0)=c(d)$? Repeated integers are allowed.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2016 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2016-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Tangential quadrilateral inside a hexagon",
    "prompt": "An equiangular hexagon $ABCDEF$ satisfies $AB=CD=EF>BC$. Define $X=AD\\cap CF$ and $Y=BE\\cap CF$, where the intersections are of segments. If $ABYX$ has an incircle, determine $\\frac{AB}{FA}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2016 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2016-05",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Integer sequences satisfying a quadratic identity",
    "prompt": "Classify integer sequences $(a_n)_{n\\ge0}$ satisfying $$a_{n+k}^2-(2k+1)a_na_{n+k}+(k^2+k)a_n^2=k^2-k$$ for every pair of nonnegative integers $n,k$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2016 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2016-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "A divisibility condition",
    "prompt": "Determine the positive integer pairs $(u,m)$ for which $um-1\\mid u+m^2$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2016,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2016 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2016UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2017-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Two connected spanning subgraphs",
    "prompt": "Color each edge of the complete graph $K_4$ orange or blue. Count the colorings for which the subgraphs of both colors are connected and span all four vertices. Justify the count.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2017 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2017-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Maximizing an altitude",
    "prompt": "Distinct points $A,B,C$ lie on a circle centered at $O$, with $\\angle AOB=\\angle BOC=60^\\circ$. Among points $P$ of segment $AC$, choose one maximizing the distance from $C$ to line $BP$. Determine $AP:PC$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2017 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2017-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Minimum polynomial degree modulo sixteen",
    "prompt": "Among polynomials $P\\in\\mathbb Z[x]$ satisfying $nP(n)\\equiv1\\pmod{16}$ for every positive odd integer $n$, determine the least possible degree and prove optimality.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2017 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2017-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Eight-bucket game",
    "prompt": "Eight empty containers each hold two liters. In each round, player A distributes one liter among the containers, then player B empties two containers of B's choice. Player A wins as soon as a container overflows. Can A force a win after finitely many rounds? Prove the answer.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2017 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2017-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Alternating permutations modulo four",
    "prompt": "Let $a_n$ count permutations $(p_1,\\ldots,p_n)$ of $\\{1,\\ldots,n\\}$ with $p_1<p_2>p_3<p_4>\\cdots$. Determine $a_n\\bmod4$ for every positive integer $n$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2017,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2017 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2017UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2018-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Nested circles and incidence counts",
    "prompt": "Construct seven pairwise nonintersecting circles and eleven points, none on a circle, such that the numbers of points inside the seven circles are distinct and each point belongs to the interior of the same number of circles. Prove that the analogous construction with five circles and five points is impossible.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2018 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2018-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Two cubic polynomials",
    "prompt": "For $a,b,c>0$, suppose $$(x-a)(x-b)(x-c)=(x-ab)(x-bc)(x-ca)$$ identically in $x$. Find the minimum possible sum $a+b+c$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2018 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2018-03",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Domino placement game",
    "prompt": "On a $4\\times4$ grid, Kim and Li alternately place nonoverlapping dominoes aligned with the grid. Kim plays first and can place only vertical dominoes; Li can place only horizontal ones. The last player able to place a domino wins. Determine the winner under optimal play, with proof.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2018 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2018-04",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Reflections of four triangles",
    "prompt": "A square $ABCD$ is inside triangle $XYZ$, with $B\\in XY$, $C\\in YZ$, and $D\\in ZX$. Reflect triangles $XAB$, $YBC$, $ZCD$, and $XDA$ in lines $AB$, $BC$, $CD$, and $DA$, respectively. Prove that the union of the reflected triangles covers the square.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2018 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2018-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Separating colors on a circle",
    "prompt": "Color twelve distinct equally spaced labeled points on a circle with four specified colors, using each color exactly three times. Require that the points of any two different colors can be strictly separated by a line. Count all admissible colorings.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2018,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2018 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2018UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2019-01",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Square tilings",
    "prompt": "Count the tilings of a $4\\times4$ square by axis-aligned squares whose side lengths belong to $\\{1,2,3,4\\}$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2019 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2019-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "A polynomial composition identity",
    "prompt": "Find all polynomials $p(x)$ with real coefficients such that $p(x)^2=p(p(x))$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2019 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2019-03",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Factorials as sums of powers of two",
    "prompt": "Find all nonnegative integers $a,b,c$ such that $2^a+2^b=c!$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2019 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2019-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "An angle from the incircle",
    "prompt": "Let $I$ be the incenter of $ABC$ and $D$ the contact point of its incircle on $AB$. The line $ID$ meets the circumcircle of $ABI$ again at $E$. If $IE=AC+BC$, determine $\\angle ACB$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2019 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2019-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Equal probability of matching colors",
    "prompt": "Show that for each integer $n\\ge200$ with $n\\equiv0,1\\pmod4$, one can assign colors to $n$ balls so that two uniformly chosen distinct balls have the same color with probability $\\frac12$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2019,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2019 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2019UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2021-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "A quadratic equation with prime coefficient",
    "prompt": "Classify triples $(x,b,c)\\in\\mathbb Z^3$ satisfying $x^2+bx+c=0$, with $b$ prime and $c$ positive and odd.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2021 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2021-02",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Concentric tangent circles",
    "prompt": "Three circles are pairwise externally tangent. Suppose a fourth circle is externally tangent to each and a fifth circle is internally tangent to each, and these last two circles have a common center. Must the original three circles have equal radii? Prove or disprove.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2021 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2021-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "A function on the plane",
    "prompt": "Does a function $f:\\mathbb R^2\\to\\mathbb R$ exist such that $f(P)+f(Q)+f(R)$ equals the perimeter of $PQR$ whenever $PQR$ is an equilateral triangle?",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2021 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2021-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Stone-transfer game",
    "prompt": "Two players initially hold zero stones. On a turn, a player either acquires one stone or transfers a positive number of stones not exceeding half their holdings to the opponent. A player loses immediately upon holding at least twenty stones. With alternating turns, determine which player, if any, has a forced win.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2021 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2021-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Divisors of a factorial",
    "prompt": "Prove that for all positive integers $n$, the number of divisors of $n!$ is a divisor of $(2n)!$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2021,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2021 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2021UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2022-02",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Coprimality of quadratic forms",
    "prompt": "Let $x$ and $y$ be relatively prime integers. Show that $x^2+xy+y^2$ and $x^2+3xy+y^2$ are relatively prime.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2022 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2022-03",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Two identities for a sequence",
    "prompt": "Classify real sequences $(a_n)_{n\\ge1}$ obeying $$a_{m+n}=a_m+a_n-mn,\\qquad a_{mn}=m^2a_n+n^2a_m+2a_ma_n$$ for every $m,n\\ge1$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2022 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2022-04",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Folding game",
    "prompt": "Two players alternately fold a $10\\times100$ rectangular grid along an interior horizontal or vertical gridline, leaving a smaller rectangular grid. The player making the final fold wins. Determine the winner under optimal play, with proof.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2022 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2022-05",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Growth on a circular arrangement",
    "prompt": "Arrange $2022$ sites cyclically, initially with height $1$. A token starts at one site; at a site of height $k$ it raises that height to $k+1$ and advances $k$ sites clockwise. Determine the maximum achievable difference between the greatest and least heights, or establish that no finite bound exists.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2022 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2022-06",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Counting grids with crossing paths",
    "prompt": "Prove that there are at least $2^{2022}$ subsets of the cells of a $42\\times49$ grid that contain an orthogonally adjacent cell path from the first column to the last column.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2022,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2022 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2022UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2023-03",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "The largest angle of four points",
    "prompt": "Given four distinct points in the plane, consider all angles $\\angle XYZ$ formed by ordered triples of distinct points from the four. Minimize the greatest such angle over all configurations, and exhibit an attaining configuration.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 3",
      "label": "UMO 2023 — Nomor 3 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2023-04",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Permutations of function compositions",
    "prompt": "Ten functions $\\mathbb R\\to\\mathbb R$ have the property that composing them in any order and evaluating at $0$ gives $1$. Determine how many affine functions $x\\mapsto mx+b$, with $m,b\\in\\{0,\\ldots,9\\}$, can occur among such ten functions.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2023 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2023-06",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Associative translation-invariant operations",
    "prompt": "Classify binary operations $\\star:\\mathbb Z\\times\\mathbb Z\\to\\mathbb Z$ satisfying $$(a\\star b)+c=(a+c)\\star(b+c),\\qquad (a\\star b)\\star c=a\\star(b\\star c)$$ for all integers $a,b,c$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2023,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2023 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2023UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2025-01",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Squares in an octagon",
    "prompt": "Draw all edges and diagonals of a regular octagon. Count, with proof, the squares whose sides are contained in those drawn segments.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2025 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2025-02",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 4,
    "title": "Polynomial quotient identity",
    "prompt": "For real polynomials $f,g$ with $g\\ne0$, denote the quotient in Euclidean polynomial division by $Q(f,g)$. Classify the polynomials $p\\in\\mathbb R[x]$ for which $$Q(p,x)+Q(p,x+1)=x^2.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2025 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2025-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Repeated-digit split sums",
    "prompt": "For a positive integer $N$, define $S(N)$ by splitting its decimal representation into two blocks, the second of length $\\lceil d/2\\rceil$ when $N$ has $d$ digits, and adding the blocks (the empty block is zero). Count positive integers $m$ of at most $2025$ digits, all identical, with $S(m^2)=m$.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2025 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2025-05",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 4,
    "title": "Equilateral triangles and a parallelogram",
    "prompt": "For a parallelogram $ABCD$, construct an equilateral triangle $ABP$ with $P$ on the same side of line $AB$ as $C,D$. If lines $CP$ and $DA$ meet at $Q$, show there is an $R$ on line $AB$ such that $CQR$ is equilateral.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 5",
      "label": "UMO 2025 — Nomor 5 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2025-06",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Equal rational self-powers",
    "prompt": "Call a positive rational $r$ admissible if some positive rational $s\\ne r$ satisfies $r^r=s^s$. Determine the second smallest admissible rational, with proof.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2025,
      "stage": "UMO",
      "number": "Nomor 6",
      "label": "UMO 2025 — Nomor 6 · © UMO Committee",
      "url": "https://utahmath.org/doc/2025UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2026-01",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "A factorial-square equation",
    "prompt": "Find (with proof) all ordered pairs of integers $(n,k)$, with $n\\ge0$ and $1\\le k\\le10$, such that $$n!+1=(kn+1)^2.$$",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 1",
      "label": "UMO 2026 — Nomor 1 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2026-02",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Pursuit on a lattice",
    "prompt": "On the $N\\times N$ lattice, a pursuer starts at the top-left corner and a target at a uniformly random different vertex. Each round the target moves one step horizontally or vertically, then the pursuer moves one step horizontally, vertically or diagonally. Both remain on the lattice. Capture occurs whenever their locations agree. Under optimal opposing play, find the expected number of pursuer moves before capture.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 2",
      "label": "UMO 2026 — Nomor 2 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "umo-2026-04",
    "level": "SMA",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Additive bases of order two",
    "prompt": "Let $(a_i)_{i\\ge0}$ be a strictly increasing sequence of nonnegative integers for which every nonnegative integer belongs to $\\{a_i+a_j:i,j\\ge0\\}$. Must there exist a constant $K$ such that $a_i\\le Ki$ for every $i\\ge0$? Prove or disprove.",
    "source": {
      "kind": "competition",
      "competition": "UMO",
      "year": 2026,
      "stage": "UMO",
      "number": "Nomor 4",
      "label": "UMO 2026 — Nomor 4 · © UMO Committee",
      "url": "https://utahmath.org/doc/2026UtahMathOlympiad.pdf",
      "note": "Educational reuse with attribution permitted by https://utahmath.org/problems/. English mathematical transcription or independent formulation; not guaranteed verbatim."
    }
  },
  {
    "id": "imc-2025-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Coverage by tangent lines",
    "prompt": "For $P\\in\\mathbb R[x]$ of degree at least two define $L_x=\\{(t,P(x)+P'(x)(t-x)):t\\in\\mathbb R\\}$. Prove that $\\bigcup_{x\\in\\mathbb R}L_x=\\mathbb R^2$ when $\\deg P$ is odd. Can equality also hold for even degree?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2025 — Hari 1, Nomor 1",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-02",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Sharp integral estimate",
    "prompt": "If $f\\in C^2(\\mathbb R)$, $f(-1)=f(1)=1$, and $\\int_{-1}^1 f(x)\\,dx=0$, establish $$\\int_{-1}^1 |f''(x)|^2\\,dx\\ge15$$ and characterize equality.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2025 — Hari 1, Nomor 2",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-03",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Commuting random matrices",
    "prompt": "Choose $A,B$ independently and uniformly from $\\{X\\in M_{2025}(\\mathbb R):X=X^{\\mathsf T},\\ \\operatorname{rank}X=1,\\ x_{ij}\\in\\{-1,1\\}\\}$. Compute $\\mathbb P(AB=BA)$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2025 — Hari 1, Nomor 3",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-05",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 5,
    "title": "Maximal iteration orders",
    "prompt": "Write $o(T)=|\\{T^j:j\\ge1\\}|$ for a self-map of $\\{1,\\ldots,n\\}$. Let $f(n)$ and $g(n)$ be the maxima of $o(T)$ over permutations and arbitrary self-maps, respectively. Establish $g(n)-f(n)<n^{0.501}$ eventually.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2025 — Hari 1, Nomor 5",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day1-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "An intermediate derivative identity",
    "prompt": "Suppose $f\\in C^1((0,\\infty))$ and $0<a<b$ satisfy $f(a)=f(b)=k$. Establish the existence of $\\xi\\in(a,b)$ with $f(\\xi)-\\xi f'(\\xi)=k$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2025 — Hari 2, Nomor 6",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-07",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 4,
    "title": "Closed subsets of positive integers",
    "prompt": "Classify nonempty $M\\subseteq\\mathbb Z_{>0}$ closed under doubling and under arithmetic means of pairs of its elements whose sum is even.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2025 — Hari 2, Nomor 7",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Eigenvalues under quarter-turn symmetry",
    "prompt": "Suppose $A=(a_{ij})\\in M_n(\\mathbb R)$ satisfies $a_{ij}=a_{j,n+1-i}$. Establish $\\sigma(A)\\subseteq\\mathbb R\\cup i\\mathbb R$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2025 — Hari 2, Nomor 8",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-09",
    "level": "Kuliah",
    "topic": "Peluang",
    "difficulty": 5,
    "title": "Maximum of a random sample without replacement",
    "prompt": "Starting with $\\mathbb Z_{>0}$, select and delete its $i$th smallest remaining member with probability $2^{-i}$ at each step. If $Y_n$ is the greatest of the first $n$ selected integers, prove $$\\mathbb E Y_n=\\sum_{i=1}^n\\frac{2^i}{2^i-1}.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2025 — Hari 2, Nomor 9",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2025-10",
    "level": "Kuliah",
    "topic": "Teori Bilangan",
    "difficulty": 5,
    "title": "Asymptotic count of square products",
    "prompt": "Set $$S_N=|\\{(a,b)\\in\\{1,\\ldots,N\\}^2:a(a+1)b(b+1)\\text{ is a square}\\}|.$$ Prove convergence of $S_N/N$ and determine its limit.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2025,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2025 — Hari 2, Nomor 10",
      "url": "https://imc-math.org.uk/imc2025/imc2025-day2-questions.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-01",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 2,
    "title": "A trigonometric equation",
    "prompt": "Show that $\\{x\\in\\mathbb R:\\cos(\\cos x)=\\sin(\\sin x)\\}=\\emptyset$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 1",
      "label": "IMC 2026 — Hari 1, Nomor 1",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-02",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Matrix identity and commutation",
    "prompt": "For real square matrices $A,B$ of equal size, does $A^{\\mathsf T}A+BB^{\\mathsf T}=AB+BA$ imply $AB=BA$?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 2",
      "label": "IMC 2026 — Hari 1, Nomor 2",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-03",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Alternating merges of ordered subsets",
    "prompt": "Partition $\\{1,\\ldots,n\\}$, $n\\ge2$, into nonempty ordered subsets $A,B$. Read $A$ increasingly and $B$ decreasingly, alternating between them beginning with $A$, and append the unused entries when one is exhausted. Count the distinct resulting permutations.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 3",
      "label": "IMC 2026 — Hari 1, Nomor 3",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-04",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Limit of a mean-driven recurrence",
    "prompt": "For $x_1>0$ and $x_{n+1}=\\arctan(n^{-1}\\sum_{j=1}^n x_j)$, compute $\\lim_{n\\to\\infty}x_n\\sqrt{\\ln n}$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 4",
      "label": "IMC 2026 — Hari 1, Nomor 4",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-05",
    "level": "Kuliah",
    "topic": "Aljabar",
    "difficulty": 5,
    "title": "Polynomial concentration",
    "prompt": "Establish the existence of a universal $C>0$ such that each $A,B\\in\\mathbb Z_{>0}$ admits $p\\in\\mathbb R[x]$ with $$\\deg p<C\\sqrt{AB},\\qquad p(0)^2>\\sum_{i=-A,\\ i\\ne0}^{B}p(i)^2.$$",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 1, Nomor 5",
      "label": "IMC 2026 — Hari 1, Nomor 5",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_1_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-06",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Composed derivative equations",
    "prompt": "For each $g(x)=x$ and $g(x)=|x|$, decide whether a differentiable $f:\\mathbb R\\to\\mathbb R$ can satisfy $f'(f(x))=g(x)$ identically.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 6",
      "label": "IMC 2026 — Hari 2, Nomor 6",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-07",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Area of a union of segments",
    "prompt": "For $f\\in C([0,1],\\mathbb R)$ define $$S_f=\\{((1-t)x+tf(x),t):x,t\\in[0,1]\\}.$$ Determine the infimum of the planar area of $S_f$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 7",
      "label": "IMC 2026 — Hari 2, Nomor 7",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-08",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 5,
    "title": "Sharp matrix energy bound",
    "prompt": "Let $A=A^{\\mathsf T}\\in M_n(\\mathbb R)$, $n\\ge5$, have zero diagonal and off-diagonal entries $\\pm1$. Suppose $(A^2)_{ij}$ is constant for $i\\ne j$. Establish $\\sum_{\\lambda\\in\\sigma(A)}|\\lambda|\\ge2n-2$, counting multiplicities, and classify equality.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 8",
      "label": "IMC 2026 — Hari 2, Nomor 8",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-09",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 5,
    "title": "Lower bound for a sequence",
    "prompt": "Suppose $a_n>0$ and $\\sum_{j=1}^{2n-1}a_j=a_n^2$ for every $n\\ge1$. Establish $a_n\\ge2n-1$.",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 9",
      "label": "IMC 2026 — Hari 2, Nomor 9",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  },
  {
    "id": "imc-2026-10",
    "level": "Kuliah",
    "topic": "Geometri",
    "difficulty": 5,
    "title": "Finite sets on a chessboard",
    "prompt": "For every finite $F\\subset\\mathbb R^2$, can one choose $0<d<1$ and a translated and rotated square grid of mesh $d$, with alternating black and white open cells, so that $F$ lies entirely in white cells?",
    "source": {
      "kind": "competition",
      "competition": "IMC",
      "year": 2026,
      "stage": "IMC",
      "number": "Hari 2, Nomor 10",
      "label": "IMC 2026 — Hari 2, Nomor 10",
      "url": "https://imc-math.org.uk/archive/problems/2026/IMC_2026_Day_2_Problems.pdf",
      "note": "Independent English mathematical formulation; original statement in official paper."
    }
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan pemecahan masalah tingkat perguruan tinggi.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Arsip soal resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
