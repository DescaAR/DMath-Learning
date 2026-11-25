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
    "title": "Pasangan yang tepat",
    "prompt": "Hitung jumlah $1+2+\\cdots+40$ tanpa menjumlahkan satu per satu.",
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
    "title": "Kaus dan celana",
    "prompt": "Rina mempunyai 4 kaus berbeda dan 3 celana berbeda. Salah satu kaus tidak boleh dipasangkan dengan satu celana tertentu. Berapa banyak pakaian berbeda yang dapat dipilih?",
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
    "title": "Bangun titik tengah",
    "prompt": "Sebuah persegi panjang berukuran 12 cm × 8 cm. Keempat titik tengah sisinya dihubungkan berurutan. Tentukan luas bangun di bagian dalam.",
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
    "title": "Sisa yang sama",
    "prompt": "Tentukan bilangan asli terkecil yang lebih besar dari 20 dan bersisa 2 ketika dibagi 3 maupun 5.",
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
    "title": "Tiga bilangan berurutan",
    "prompt": "Buktikan bahwa $6\\mid(n^3-n)$ untuk setiap bilangan bulat $n$.",
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
    "title": "Jumlah dan hasil kali",
    "prompt": "Diketahui $x+y=9$ dan $xy=14$. Tentukan $x^2+y^2$ dan $x^3+y^3$ tanpa mencari $x$ serta $y$ secara eksplisit.",
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
    "title": "Tidak mungkin semuanya berbeda",
    "prompt": "Dipilih enam bilangan berbeda dari $\\{1,2,\\ldots,10\\}$. Buktikan bahwa ada dua bilangan terpilih yang jumlahnya 11.",
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
    "title": "Luas yang tidak berubah",
    "prompt": "Pada segitiga $ABC$, titik $D$ terletak pada $BC$ dengan $BD:DC=2:3$. Jika luas $ABC$ adalah 60, tentukan luas $ABD$ dan $ADC$.",
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
    "prompt": "Untuk $a,b,c>0$, buktikan $\\frac a{b+c}+\\frac b{c+a}+\\frac c{a+b}\\ge\\frac32$ dan tentukan kondisi kesamaan.",
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
    "title": "Lintasan tanpa melintasi diagonal",
    "prompt": "Berapa banyak lintasan dari $(0,0)$ ke $(4,4)$ dengan langkah $(1,0)$ atau $(0,1)$ yang tidak pernah berada di atas garis $y=x$?",
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
    "title": "Sisa kuadrat prima",
    "prompt": "Buktikan bahwa untuk setiap bilangan prima $p>3$, berlaku $24\\mid(p^2-1)$.",
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
    "title": "Jarak titik tengah",
    "prompt": "Segitiga $ABC$ mempunyai sisi $AB=13$, $AC=15$, dan $BC=14$. Jika $M$ titik tengah $BC$, tentukan panjang $AM$.",
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
    "title": "Barisan akar bersarang",
    "prompt": "Misalkan $a_1=\\sqrt2$ dan $a_{n+1}=\\sqrt{2+a_n}$ untuk $n\\in\\mathbb N$. Buktikan konvergensi barisan dan tentukan limitnya.",
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
    "title": "Proyeksi idempoten",
    "prompt": "Misalkan $V$ ruang vektor berdimensi hingga dan $P:V\\to V$ linear dengan $P^2=P$. Buktikan $V=\\ker P\\oplus\\operatorname{Im}P$.",
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
    "title": "Subgrup berindeks dua",
    "prompt": "Misalkan $H$ subgrup dari grup $G$ dengan $[G:H]=2$. Buktikan bahwa $H$ merupakan subgrup normal dari $G$.",
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
    "title": "Akar kesatuan",
    "prompt": "Misalkan $\\omega=e^{2\\pi i/n}$ dengan $n\\ge2$. Buktikan $\\sum_{k=0}^{n-1}\\omega^k=0$.",
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
    "prompt": "Carilah semua pemetaan $f:\\mathbb Z\\to\\mathbb Z$ yang memenuhi $f(2a)+2f(b)=f(f(a+b))$ untuk setiap $a,b\\in\\mathbb Z$.",
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
    "title": "Dua bilangan pada lingkaran satuan",
    "prompt": "Klasifikasikan seluruh pasangan $a,b\\in\\mathbb C$ dengan $|a|=|b|=1$ dan $a+b+a\\overline b$ bernilai real.",
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
    "prompt": "Jumlah angka puluhan dan angka satuan suatu bilangan dua angka adalah 11. Jika kedua angka ditukar, bilangan baru lebih besar 27 daripada bilangan semula. Tentukan bilangan semula.",
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
    "title": "Menyusun angka berbeda",
    "prompt": "Berapa banyak bilangan tiga angka genap yang dapat dibentuk dari angka 0, 1, 2, 3, dan 4 jika tidak ada angka yang berulang?",
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
    "title": "Pagar kebun",
    "prompt": "Sebuah kebun berbentuk persegi panjang mempunyai keliling 60 meter. Panjang dan lebar kebun merupakan bilangan bulat positif. Tentukan luas terbesar yang mungkin.",
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
    "title": "Lampu yang menyala bersama",
    "prompt": "Tiga lampu masing-masing berkedip setiap 6 detik, 8 detik, dan 15 detik. Ketiganya berkedip bersama pada awal pengamatan. Berapa kali ketiganya berkedip bersama selama 10 menit berikutnya, termasuk tepat pada akhir pengamatan jika ketiganya berkedip saat itu, tetapi tidak termasuk awal pengamatan?",
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
    "prompt": "Tentukan semua pasangan bilangan bulat positif $(x,y)$ yang memenuhi $\\frac1x+\\frac1y=\\frac16$.",
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
    "prompt": "Dalam suatu pertemuan terdapat 12 orang. Setiap pasangan orang berjabat tangan tepat satu kali, kecuali tiga pasangan tertentu yang tidak berjabat tangan. Tentukan banyak jabat tangan yang terjadi.",
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
    "title": "Titik di dalam persegi",
    "prompt": "Persegi $ABCD$ mempunyai panjang sisi 10. Titik $P$ berada di dalam persegi dengan $PA=5$, $PB=\\sqrt{65}$, dan $PC=\\sqrt{85}$. Tentukan $PD$.",
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
    "title": "Sisa perpangkatan",
    "prompt": "Tentukan sisa pembagian $7^{2026}+3^{2026}$ oleh 100.",
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
    "title": "Persamaan fungsi real",
    "prompt": "Tentukan seluruh fungsi $f:\\mathbb R\\to\\mathbb R$ yang memenuhi $f(x+y)=f(x)+f(y)+2xy$ untuk setiap $x,y\\in\\mathbb R$, jika $f$ kontinu di 0 dan $f(1)=3$.",
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
    "title": "Himpunan tanpa tetangga",
    "prompt": "Untuk bilangan asli $n,k$ dengan $1\\le k\\le\\lfloor(n+1)/2\\rfloor$, tentukan banyak himpunan bagian beranggota tepat $k$ dari $\\{1,2,\\ldots,n\\}$ yang tidak memuat dua bilangan berurutan.",
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
    "title": "Kuadrat sempurna",
    "prompt": "Tentukan seluruh pasangan bilangan bulat positif $(x,y)$ yang memenuhi $x^2-y^2=2025$.",
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
    "title": "Titik singgung lingkaran",
    "prompt": "Lingkaran dalam segitiga $ABC$ menyinggung sisi $BC$, $CA$, dan $AB$ berturut-turut di $D$, $E$, dan $F$. Jika $AB=13$, $BC=14$, dan $CA=15$, tentukan luas segitiga $DEF$.",
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
    "title": "Konvergensi seragam",
    "prompt": "Untuk $n\\in\\mathbb N$, definisikan $f_n:[0,1]\\to\\mathbb R$ dengan $f_n(x)=nx(1-x)^n$. Tentukan limit titik demi titik dari $(f_n)$ dan selidiki apakah konvergensinya seragam pada $[0,1]$.",
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
    "title": "Komutator matriks",
    "prompt": "Misalkan $A,B\\in M_n(\\mathbb R)$ dengan $AB-BA=A$. Buktikan bahwa $A$ merupakan matriks nilpoten.",
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
    "title": "Orde hasil kali",
    "prompt": "Misalkan $G$ merupakan grup dan $a,b\\in G$ memenuhi $ab=ba$. Jika orde $a$ dan $b$ berturut-turut adalah $m$ dan $n$ dengan $\\gcd(m,n)=1$, buktikan bahwa orde $ab$ adalah $mn$.",
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
    "title": "Graf dengan derajat minimum",
    "prompt": "Misalkan $G$ merupakan graf sederhana tak berarah dengan $n\\ge3$ titik. Jika setiap titik mempunyai derajat sedikitnya $\\lceil n/2\\rceil$, buktikan bahwa $G$ memuat siklus Hamilton.",
    "source": {
      "kind": "original",
      "label": "DMath Learning Proposed"
    }
  }
];
export const levelMeta = {SD:{title:"Olimpiade SD",description:"Aritmetika, pola, logika dan geometri.",targets:"OSN · SEAMO · SASMO"},SMP:{title:"Olimpiade SMP",description:"Strategi nonrutin dan dasar pembuktian.",targets:"OSN · SEAMO · SASMO"},SMA:{title:"Olimpiade SMA",description:"Aljabar, teori bilangan, geometri dan kombinatorika.",targets:"OSN · IMO · APMO"},Kuliah:{title:"Olimpiade Mahasiswa",description:"Pembuktian dan pemecahan masalah tingkat perguruan tinggi.",targets:"ON-MIPA · IMC · Putnam"}} as const;
export const officialResources = [{name:"IMO",level:"SMA",description:"Arsip soal resmi International Mathematical Olympiad.",url:"https://www.imo-official.org/problems/"},{name:"IMC",level:"Kuliah",description:"Arsip soal resmi kompetisi mahasiswa.",url:"https://www.imc-math.org.uk/?section=problems&year=2024"},{name:"SEAMO",level:"SD · SMP · SMA",description:"Silabus dan contoh soal yang tersedia dari penyelenggara.",url:"https://www.seamo-official.org/resources"},{name:"OSN",level:"SD · SMP · SMA",description:"Portal ajang talenta nasional dan informasi penyelenggara.",url:"https://sma.pusatprestasinasional.kemdikbud.go.id/osn/login"},{name:"ON-MIPA",level:"Kuliah",description:"Informasi penyelenggara Pusat Prestasi Nasional; soal resmi ditambahkan setelah diverifikasi.",url:"https://pusatprestasinasional.kemdikbud.go.id/"}];
