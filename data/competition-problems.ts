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
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan pemecahan masalah tingkat perguruan tinggi.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Arsip soal resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
