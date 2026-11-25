export const levels = ["SD","SMP","SMA","Kuliah"] as const;
export type Level = typeof levels[number];
export type Source = {kind:"original"|"competition";label:string;competition?:string;year?:number;number?:string;url?:string;note?:string};
export type CompetitionProblem = {id:string;level:Level;topic:string;difficulty:number;title:string;prompt:string;source:Source};
export const competitionProblems: CompetitionProblem[] = [
  {
    "id": "sd-001",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 1,
    "title": "Penjumlahan bilangan asli",
    "prompt": "Tentukan hasil penjumlahan $1+2+3+\\cdots+40$ tanpa menjumlahkan bilangan-bilangan tersebut satu per satu.",
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
    "title": "Pemilihan pakaian",
    "prompt": "Rina memiliki 4 kaus dan 3 celana yang semuanya berbeda. Ia ingin mengenakan satu kaus dan satu celana, tetapi ada tepat satu pasangan kaus dan celana yang tidak boleh dikenakan bersama. Berapa banyak pilihan pakaian yang dapat dikenakan Rina?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-003",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Luas bangun dari titik tengah sisi",
    "prompt": "Sebuah persegi panjang memiliki panjang 12 cm dan lebar 8 cm. Titik-titik tengah keempat sisinya dihubungkan secara berurutan sehingga terbentuk sebuah bangun datar. Berapakah luas bangun datar tersebut?",
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
    "title": "Bilangan dengan sisa pembagian sama",
    "prompt": "Suatu bilangan asli lebih besar dari 20. Jika dibagi 3, bilangan tersebut bersisa 2. Jika dibagi 5, bilangan tersebut juga bersisa 2. Tentukan bilangan terkecil yang memenuhi kedua syarat tersebut.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-001",
    "level": "SMP",
    "topic": "Teori Bilangan",
    "difficulty": 2,
    "title": "Keterbagian selisih pangkat tiga",
    "prompt": "Buktikan bahwa $n^3-n$ habis dibagi 6 untuk setiap bilangan bulat $n$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-002",
    "level": "SMP",
    "topic": "Aljabar",
    "difficulty": 2,
    "title": "Jumlah kuadrat dan pangkat tiga",
    "prompt": "Diketahui dua bilangan $x$ dan $y$ memenuhi $x+y=9$ dan $xy=14$. Tanpa menentukan nilai $x$ dan $y$ masing-masing, tentukan nilai $x^2+y^2$ serta $x^3+y^3$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-003",
    "level": "SMP",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pemilihan enam bilangan",
    "prompt": "Enam bilangan berbeda dipilih dari himpunan $\\{1,2,\\ldots,10\\}$. Buktikan bahwa di antara keenam bilangan tersebut terdapat dua bilangan yang jumlahnya 11.",
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
    "title": "Perbandingan luas segitiga",
    "prompt": "Diketahui segitiga $ABC$ memiliki luas 60 satuan luas. Titik $D$ terletak pada sisi $BC$ sedemikian sehingga $BD:DC=2:3$. Tentukan luas segitiga $ABD$ dan luas segitiga $ADC$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sma-001",
    "level": "SMA",
    "topic": "Aljabar",
    "difficulty": 3,
    "title": "Ketaksamaan tiga pecahan",
    "prompt": "Misalkan $a,b,c$ merupakan bilangan real positif. Buktikan bahwa $$\\frac{a}{b+c}+\\frac{b}{c+a}+\\frac{c}{a+b}\\ge\\frac{3}{2}.$$ Tentukan pula syarat terjadinya kesamaan.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sma-002",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 3,
    "title": "Pencacahan lintasan pada bidang koordinat",
    "prompt": "Suatu lintasan pada bidang koordinat dimulai dari titik $(0,0)$ dan berakhir di titik $(4,4)$. Pada setiap langkah, lintasan bergerak satu satuan ke kanan atau satu satuan ke atas. Tentukan banyak lintasan yang tidak pernah berada di atas garis $y=x$.",
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
    "title": "Keterbagian kuadrat bilangan prima",
    "prompt": "Misalkan $p$ merupakan bilangan prima yang lebih besar dari 3. Buktikan bahwa $p^2-1$ habis dibagi 24.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sma-004",
    "level": "SMA",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Panjang garis berat segitiga",
    "prompt": "Diketahui segitiga $ABC$ dengan panjang sisi $AB=13$, $BC=14$, dan $CA=15$. Jika $M$ merupakan titik tengah sisi $BC$, tentukan panjang $AM$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-001",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 3,
    "title": "Konvergensi barisan rekursif",
    "prompt": "Misalkan $(a_n)_{n\\in\\mathbb N}$ merupakan barisan yang didefinisikan secara rekursif oleh $$a_1=\\sqrt{2},\\qquad a_{n+1}=\\sqrt{2+a_n}$$ untuk setiap $n\\in\\mathbb N$. Buktikan bahwa $(a_n)$ konvergen dan tentukan limitnya.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-002",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 3,
    "title": "Dekomposisi ruang vektor oleh proyeksi",
    "prompt": "Misalkan $V$ merupakan ruang vektor berdimensi hingga dan $P:V\\to V$ merupakan pemetaan linear yang memenuhi $P^2=P$. Buktikan bahwa $$V=\\ker P\\oplus\\operatorname{Im}P.$$",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-003",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 3,
    "title": "Normalitas subgrup berindeks dua",
    "prompt": "Misalkan $G$ merupakan suatu grup dan $H$ merupakan subgrup dari $G$ dengan indeks $[G:H]=2$. Buktikan bahwa $H$ merupakan subgrup normal dari $G$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-004",
    "level": "Kuliah",
    "topic": "Analisis Kompleks",
    "difficulty": 3,
    "title": "Jumlah akar kesatuan",
    "prompt": "Misalkan $n\\ge2$ merupakan bilangan bulat dan $\\omega=e^{2\\pi i/n}$. Buktikan bahwa $$\\sum_{k=0}^{n-1}\\omega^k=0.$$",
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
      "label": "IMO 2019 — Problem 1",
      "competition": "IMO",
      "year": 2019,
      "number": "1",
      "url": "https://www.imo-official.org/problems/2019/eng.pdf",
      "note": "Pernyataan soal dalam bahasa Indonesia."
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
      "label": "IMC 2024 — Day 1, Problem 1",
      "competition": "IMC",
      "year": 2024,
      "number": "Day 1 / 1",
      "url": "https://www.imc-math.org.uk/?item=prob1q&section=problems&year=2024",
      "note": "Pernyataan soal dalam bahasa Indonesia."
    }
  },
  {
    "id": "sd-005",
    "level": "SD",
    "topic": "Aritmetika",
    "difficulty": 3,
    "title": "Bilangan dua angka",
    "prompt": "Jumlah angka puluhan dan angka satuan suatu bilangan dua angka adalah 11. Jika kedua angka tersebut ditukar tempatnya, diperoleh bilangan baru yang 27 lebih besar daripada bilangan semula. Berapakah bilangan semula?",
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
    "title": "Penyusunan bilangan genap",
    "prompt": "Dari angka 0, 1, 2, 3, dan 4 akan dibentuk bilangan genap yang terdiri atas tiga angka. Setiap angka hanya boleh digunakan satu kali dalam sebuah bilangan. Berapa banyak bilangan genap yang dapat dibentuk?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-007",
    "level": "SD",
    "topic": "Geometri",
    "difficulty": 2,
    "title": "Luas maksimum kebun",
    "prompt": "Sebuah kebun berbentuk persegi panjang memiliki keliling 60 meter. Jika panjang dan lebar kebun dalam satuan meter merupakan bilangan bulat positif, berapakah luas terbesar yang dapat dimiliki kebun tersebut?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sd-008",
    "level": "SD",
    "topic": "Teori Bilangan",
    "difficulty": 3,
    "title": "Kedipan tiga lampu",
    "prompt": "Tiga lampu berkedip secara berkala. Lampu pertama berkedip setiap 6 detik, lampu kedua setiap 8 detik, dan lampu ketiga setiap 15 detik. Pada awal pengamatan, ketiga lampu berkedip secara bersamaan. Berapa kali ketiga lampu kembali berkedip secara bersamaan selama 10 menit berikutnya? Kedipan pada awal pengamatan tidak dihitung, sedangkan kedipan tepat pada akhir pengamatan tetap dihitung.",
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
    "title": "Persamaan pecahan",
    "prompt": "Tentukan semua pasangan bilangan bulat positif $(x,y)$ yang memenuhi persamaan $$\\frac{1}{x}+\\frac{1}{y}=\\frac{1}{6}.$$",
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
    "title": "Jabat tangan",
    "prompt": "Dalam suatu pertemuan yang dihadiri oleh 12 orang, setiap dua orang berjabat tangan tepat satu kali, kecuali tiga pasangan orang yang tidak saling berjabat tangan. Berapa banyak jabat tangan yang terjadi dalam pertemuan tersebut?",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "smp-007",
    "level": "SMP",
    "topic": "Geometri",
    "difficulty": 3,
    "title": "Jarak titik ke titik sudut persegi",
    "prompt": "Diketahui persegi $ABCD$ dengan panjang sisi 10 satuan. Titik $P$ terletak di bagian dalam persegi tersebut sedemikian sehingga $PA=5$, $PB=\\sqrt{65}$, dan $PC=\\sqrt{85}$. Tentukan panjang $PD$.",
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
    "title": "Sisa pembagian bilangan berpangkat",
    "prompt": "Tentukan sisa yang diperoleh ketika $7^{2026}+3^{2026}$ dibagi oleh 100.",
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
    "title": "Persamaan fungsi pada bilangan real",
    "prompt": "Tentukan semua fungsi $f:\\mathbb R\\to\\mathbb R$ yang kontinu di 0, memenuhi $f(1)=3$, dan memenuhi persamaan $$f(x+y)=f(x)+f(y)+2xy$$ untuk setiap $x,y\\in\\mathbb R$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "sma-006",
    "level": "SMA",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Himpunan bagian tanpa bilangan berurutan",
    "prompt": "Misalkan $n$ dan $k$ merupakan bilangan asli dengan $1\\le k\\le\\left\\lfloor\\frac{n+1}{2}\\right\\rfloor$. Tentukan banyak himpunan bagian dari $\\{1,2,\\ldots,n\\}$ yang memiliki tepat $k$ anggota dan tidak memuat dua bilangan bulat berurutan.",
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
    "title": "Persamaan selisih dua kuadrat",
    "prompt": "Tentukan semua pasangan bilangan bulat positif $(x,y)$ yang memenuhi persamaan $$x^2-y^2=2025.$$",
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
    "title": "Luas segitiga titik singgung",
    "prompt": "Diketahui segitiga $ABC$ dengan panjang sisi $AB=13$, $BC=14$, dan $CA=15$. Lingkaran dalam segitiga tersebut menyinggung sisi $BC$, $CA$, dan $AB$ berturut-turut di titik $D$, $E$, dan $F$. Tentukan luas segitiga $DEF$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-005",
    "level": "Kuliah",
    "topic": "Analisis Real",
    "difficulty": 4,
    "title": "Konvergensi titik demi titik dan seragam",
    "prompt": "Untuk setiap $n\\in\\mathbb N$, didefinisikan fungsi $f_n:[0,1]\\to\\mathbb R$ oleh $$f_n(x)=nx(1-x)^n.$$ Tentukan limit titik demi titik barisan fungsi $(f_n)$ pada $[0,1]$. Selidiki pula apakah barisan fungsi tersebut konvergen seragam pada $[0,1]$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-006",
    "level": "Kuliah",
    "topic": "Aljabar Linear",
    "difficulty": 4,
    "title": "Nilpotensi matriks",
    "prompt": "Misalkan $A$ dan $B$ merupakan matriks persegi berordo $n$ dengan entri bilangan real. Jika $AB-BA=A$, buktikan bahwa $A$ merupakan matriks nilpoten.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-007",
    "level": "Kuliah",
    "topic": "Struktur Aljabar",
    "difficulty": 4,
    "title": "Orde hasil kali elemen grup",
    "prompt": "Misalkan $G$ merupakan suatu grup dan $a,b\\in G$ memenuhi $ab=ba$. Diketahui orde $a$ adalah $m$ dan orde $b$ adalah $n$, dengan $\\gcd(m,n)=1$. Buktikan bahwa orde $ab$ adalah $mn$.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  },
  {
    "id": "univ-008",
    "level": "Kuliah",
    "topic": "Kombinatorika",
    "difficulty": 4,
    "title": "Derajat minimum dan siklus Hamilton",
    "prompt": "Misalkan $G$ merupakan graf sederhana tak berarah dengan $n\\ge3$ titik. Jika derajat setiap titik pada $G$ sekurang-kurangnya $\\left\\lceil\\frac{n}{2}\\right\\rceil$, buktikan bahwa $G$ memuat siklus Hamilton.",
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
      "number": "Kabupaten/Kota, 1",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-tahun-2024.html?m=0",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Provinsi, 1",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Provinsi, 4",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Provinsi, 18",
      "url": "https://www.folderosn.com/2025/01/soal-osn-matematika-sd-2024-tingkat-provinsi.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Kabupaten/Kota, 9",
      "url": "https://www.konsep-matematika.com/2025/11/solusi-osk-mat-smp-tahun-2024-nomor-1-10.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Kabupaten/Kota, 8",
      "url": "https://www.konsep-matematika.com/2025/11/solusi-osk-mat-smp-tahun-2024-nomor-1-10.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa. Pilihan B dan C sama nilainya pada salinan sumber."
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
      "number": "Nasional, Hari 1, 1",
      "url": "https://www.aiairyn.com/2024/08/salinan-soal-osn-sma-2024-bidang.html",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "1",
      "url": "https://www.imo-official.org/problems/2024/",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
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
      "number": "2",
      "url": "https://www.imo-official.org/problems/2024/",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
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
      "number": "3",
      "url": "https://www.apmo-official.org/static/problems/apmo2024_prb.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
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
      "number": "Wilayah, Hari 1, Isian 1",
      "url": "https://onmipa.filzabuana.id/onmipa/2024-wilayah/",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Wilayah, Hari 1, Isian 3",
      "url": "https://onmipa.filzabuana.id/onmipa/2024-wilayah/",
      "note": "Redaksi Indonesia disusun ulang dari arsip publik pihak ketiga; naskah asli lengkap belum diperiksa."
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
      "number": "Hari 1, 3",
      "url": "https://imc-math.org.uk/archive/problems/2024/IMC_2024_Day_1_Questions.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
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
      "number": "Hari 2, 6",
      "url": "https://imc-math.org.uk/archive/problems/2024/IMC_2024_Day_2_Questions.pdf",
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
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
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
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
      "note": "Redaksi Indonesia; naskah resmi tersedia melalui tautan sumber."
    }
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan pemecahan masalah tingkat perguruan tinggi.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Arsip soal resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
