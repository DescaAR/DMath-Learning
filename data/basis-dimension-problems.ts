export type ProblemDifficulty = "Dasar" | "Menengah" | "Sulit" | "Sangat Sulit" | "Challenge";
export type ProblemType = "Konsep" | "Hitungan" | "Pembuktian" | "True/False" | "Counterexample" | "Construction";

export type Problem = {
  id: string;
  title: string;
  difficulty: ProblemDifficulty;
  type: ProblemType;
  estimatedTime: string;
  concepts: string[];
  problem: string;
  hint1: string;
  hint2: string;
  solution: string;
  answer: string;
};

export const basisDimensionProblems: Problem[] = [
  {
    id: "LA-BD-001", title: "Basis Standar R²", difficulty: "Dasar", type: "Konsep", estimatedTime: "3 menit",
    concepts: ["basis", "span", "bebas linear"],
    problem: "Tentukan apakah {(1,0),(0,1)} merupakan basis untuk R².",
    hint1: "Periksa bebas linear dan apakah kedua vektor merentang R².",
    hint2: "Setiap (x,y) dapat ditulis sebagai x(1,0)+y(0,1).",
    solution: "Kedua vektor bebas linear karena a(1,0)+b(0,1)=(0,0) hanya terjadi untuk a=b=0. Setiap (x,y)∈R² dapat ditulis sebagai x(1,0)+y(0,1). Jadi himpunan tersebut bebas linear dan merentang R².",
    answer: "Ya, merupakan basis R²."
  },
  {
    id: "LA-BD-002", title: "Dua Vektor Bergantung", difficulty: "Dasar", type: "Konsep", estimatedTime: "3 menit",
    concepts: ["bebas linear"],
    problem: "Selidiki kebebasan linear dari {(1,2),(2,4)}.",
    hint1: "Bandingkan vektor kedua dengan vektor pertama.",
    hint2: "(2,4)=2(1,2).",
    solution: "Vektor kedua merupakan dua kali vektor pertama. Terdapat relasi nontrivial 2(1,2)−(2,4)=(0,0), sehingga himpunan tidak bebas linear.",
    answer: "Bergantung linear."
  },
  {
    id: "LA-BD-003", title: "Merentang R²", difficulty: "Dasar", type: "Hitungan", estimatedTime: "4 menit",
    concepts: ["span"],
    problem: "Apakah {(1,1),(1,−1)} merentang R²?",
    hint1: "Coba nyatakan (x,y) sebagai kombinasi linear kedua vektor.",
    hint2: "Selesaikan a+b=x dan a−b=y.",
    solution: "Dari a+b=x dan a−b=y diperoleh a=(x+y)/2 dan b=(x−y)/2. Nilai tersebut ada untuk setiap x,y∈R, jadi setiap vektor R² merupakan kombinasi linear kedua vektor.",
    answer: "Ya, merentang R²."
  },
  {
    id: "LA-BD-004", title: "Basis Ruang Polinom P₂", difficulty: "Menengah", type: "Hitungan", estimatedTime: "7 menit",
    concepts: ["basis", "polinom"],
    problem: "Tentukan apakah {1+x, x+x², 1+x²} merupakan basis P₂.",
    hint1: "Tuliskan vektor koefisien terhadap basis standar {1,x,x²}.",
    hint2: "Periksa determinan matriks yang kolomnya (1,1,0), (0,1,1), (1,0,1).",
    solution: "Matriks koefisien memiliki determinan 2, tidak nol. Ketiga polinom bebas linear. Karena dim P₂=3 dan terdapat tiga vektor bebas linear, himpunan tersebut merupakan basis.",
    answer: "Ya, merupakan basis P₂."
  },
  {
    id: "LA-BD-005", title: "Koordinat terhadap Basis", difficulty: "Dasar", type: "Hitungan", estimatedTime: "5 menit",
    concepts: ["koordinat", "basis"],
    problem: "Untuk B={(1,1),(1,−1)}, tentukan koordinat (4,2) terhadap B.",
    hint1: "Cari a,b dengan a(1,1)+b(1,−1)=(4,2).",
    hint2: "Gunakan a+b=4 dan a−b=2.",
    solution: "Menjumlahkan kedua persamaan memberikan 2a=6, jadi a=3. Selanjutnya b=1. Dengan demikian (4,2)=3(1,1)+1(1,−1).",
    answer: "[(4,2)]_B=(3,1)."
  },
  {
    id: "LA-BD-006", title: "Dimensi dari Span", difficulty: "Dasar", type: "Hitungan", estimatedTime: "5 menit",
    concepts: ["dimensi", "span"],
    problem: "Tentukan dim span{(1,0,1),(0,1,1),(1,1,2)}.",
    hint1: "Periksa apakah vektor ketiga berkaitan dengan dua vektor pertama.",
    hint2: "(1,1,2)=(1,0,1)+(0,1,1).",
    solution: "Vektor ketiga adalah jumlah dua vektor pertama. Dua vektor pertama bebas linear, jadi basis span dapat dipilih {(1,0,1),(0,1,1)}.",
    answer: "Dimensinya 2."
  },
  {
    id: "LA-BD-007", title: "Basis Bidang x+y+z=0", difficulty: "Menengah", type: "Construction", estimatedTime: "6 menit",
    concepts: ["subruang", "basis", "dimensi"],
    problem: "Tentukan suatu basis dan dimensi W={(x,y,z)∈R³ : x+y+z=0}.",
    hint1: "Ambil x dan y sebagai parameter bebas.",
    hint2: "Tuliskan z=−x−y.",
    solution: "Setiap anggota W berbentuk (x,y,−x−y)=x(1,0,−1)+y(0,1,−1). Kedua vektor pembangun bebas linear.",
    answer: "Salah satu basis adalah {(1,0,−1),(0,1,−1)} dan dim W=2."
  },
  {
    id: "LA-BD-008", title: "Memperluas Himpunan Bebas Linear", difficulty: "Menengah", type: "Construction", estimatedTime: "6 menit",
    concepts: ["ekstensi basis"],
    problem: "Perluas {(1,0,1),(0,1,1)} menjadi basis R³.",
    hint1: "Tambahkan satu vektor yang tidak berada pada span kedua vektor.",
    hint2: "Coba (0,0,1).",
    solution: "Himpunan {(1,0,1),(0,1,1),(0,0,1)} bebas linear; matriks dengan ketiga vektor sebagai kolom memiliki determinan 1. Karena terdiri dari tiga vektor bebas linear di R³, himpunan ini merupakan basis.",
    answer: "{(1,0,1),(0,1,1),(0,0,1)} adalah salah satu jawaban."
  },
  {
    id: "LA-BD-009", title: "Basis Ruang Baris", difficulty: "Menengah", type: "Hitungan", estimatedTime: "7 menit",
    concepts: ["ruang baris", "rank"],
    problem: "Tentukan basis ruang baris dari A=[[1,2,3],[2,4,6],[0,1,1]].",
    hint1: "Gunakan baris tak nol dari bentuk eselon baris.",
    hint2: "Baris kedua adalah dua kali baris pertama.",
    solution: "Baris pertama dan baris ketiga bebas linear, sedangkan baris kedua merupakan dua kali baris pertama. Keduanya merentang ruang baris.",
    answer: "Salah satu basis: {(1,2,3),(0,1,1)}."
  },
  {
    id: "LA-BD-010", title: "Basis Ruang Kolom", difficulty: "Menengah", type: "Hitungan", estimatedTime: "8 menit",
    concepts: ["ruang kolom", "pivot"],
    problem: "Untuk A=[[1,2,3],[0,1,1],[1,3,4]], tentukan basis ruang kolom.",
    hint1: "Cari kolom pivot melalui eliminasi baris.",
    hint2: "Kolom ketiga adalah jumlah kolom pertama dan kedua.",
    solution: "Kolom ketiga memenuhi c₃=c₁+c₂. Kolom pertama dan kedua bebas linear, sehingga keduanya membentuk basis ruang kolom.",
    answer: "Basis dapat dipilih {(1,0,1),(2,1,3)}."
  },
  {
    id: "LA-BD-011", title: "Keunikan Dimensi", difficulty: "Sulit", type: "Pembuktian", estimatedTime: "12 menit",
    concepts: ["dimensi", "teorema pertukaran"],
    problem: "Buktikan bahwa setiap dua basis hingga dari ruang vektor V mempunyai banyak anggota yang sama.",
    hint1: "Gunakan Teorema Pertukaran Steinitz.",
    hint2: "Terapkan pertukaran dari basis pertama terhadap basis kedua, lalu lakukan sebaliknya.",
    solution: "Misalkan B memiliki m anggota dan C memiliki n anggota. Karena B bebas linear dan C merentang V, Teorema Pertukaran Steinitz memberi m≤n. Sebaliknya, C bebas linear dan B merentang V, jadi n≤m. Akibatnya m=n.",
    answer: "Banyak anggota basis hingga V adalah unik; bilangan ini disebut dim V."
  },
  {
    id: "LA-BD-012", title: "Empat Vektor di R³", difficulty: "Dasar", type: "Pembuktian", estimatedTime: "4 menit",
    concepts: ["dimensi", "ketergantungan linear"],
    problem: "Buktikan bahwa setiap himpunan yang terdiri atas empat vektor di R³ bergantung linear.",
    hint1: "Gunakan fakta dim R³=3.",
    hint2: "Himpunan bebas linear tidak dapat memiliki lebih banyak vektor daripada dimensi ruang.",
    solution: "Dim R³=3. Setiap himpunan bebas linear di ruang berdimensi tiga memiliki paling banyak tiga vektor. Oleh karena itu, himpunan empat vektor di R³ tidak mungkin bebas linear.",
    answer: "Setiap empat vektor di R³ bergantung linear."
  },
  {
    id: "LA-BD-013", title: "n Vektor yang Merentang", difficulty: "Menengah", type: "True/False", estimatedTime: "5 menit",
    concepts: ["basis", "dimensi"],
    problem: "Benar atau salah: jika dim V=n dan S terdiri dari n vektor yang merentang V, maka S adalah basis V.",
    hint1: "Gunakan karakterisasi basis pada ruang berdimensi hingga.",
    hint2: "Spanning set dengan tepat n vektor tidak dapat memiliki redundansi.",
    solution: "Benar. Jika S bergantung linear, salah satu vektor dapat dihapus tanpa mengubah span, menghasilkan spanning set dengan kurang dari n vektor. Hal ini bertentangan dengan dim V=n.",
    answer: "Benar."
  },
  {
    id: "LA-BD-014", title: "Ekstensi Set Bebas Linear", difficulty: "Menengah", type: "True/False", estimatedTime: "5 menit",
    concepts: ["ekstensi basis"],
    problem: "Benar atau salah: setiap himpunan bebas linear pada ruang vektor berdimensi hingga dapat diperluas menjadi basis.",
    hint1: "Jika belum merentang, tambahkan vektor di luar span.",
    hint2: "Proses berhenti karena dimensi ruang hingga.",
    solution: "Benar. Selama span himpunan belum sama dengan V, pilih vektor di luar span dan tambahkan. Kebebasan linear tetap terjaga. Karena dimensi V hingga, proses berhenti setelah sejumlah hingga langkah dengan sebuah basis.",
    answer: "Benar."
  },
  {
    id: "LA-BD-015", title: "Spanning Set Bukan Basis", difficulty: "Dasar", type: "Counterexample", estimatedTime: "4 menit",
    concepts: ["span", "basis"],
    problem: "Berikan contoh spanning set R² yang bukan basis.",
    hint1: "Tambahkan satu vektor redundan ke basis standar.",
    hint2: "Gunakan {(1,0),(0,1),(1,1)}.",
    solution: "Himpunan {(1,0),(0,1),(1,1)} merentang R² karena dua vektor pertama sudah merentang R². Namun himpunan tersebut bergantung linear sebab (1,1)=(1,0)+(0,1).",
    answer: "{(1,0),(0,1),(1,1)}."
  },
  {
    id: "LA-BD-016", title: "Koordinat Polinom", difficulty: "Dasar", type: "Hitungan", estimatedTime: "4 menit",
    concepts: ["koordinat", "polinom"],
    problem: "Tentukan koordinat p(x)=2−3x+x² terhadap basis standar {1,x,x²} dari P₂.",
    hint1: "Koordinat adalah koefisien terhadap urutan basis.",
    hint2: "Baca koefisien 1, x, dan x².",
    solution: "p(x)=2·1+(−3)·x+1·x².",
    answer: "[p]_B=(2,−3,1)."
  },
  {
    id: "LA-BD-017", title: "Ruang Solusi Sistem Homogen", difficulty: "Menengah", type: "Hitungan", estimatedTime: "9 menit",
    concepts: ["null space", "basis", "dimensi"],
    problem: "Tentukan basis dan dimensi solusi sistem x+y+z+w=0 dan x−z=0.",
    hint1: "Dari x−z=0 diperoleh z=x.",
    hint2: "Ambil x dan w sebagai parameter bebas.",
    solution: "Karena z=x, persamaan pertama memberi 2x+y+w=0 atau y=−2x−w. Jadi (x,y,z,w)=x(1,−2,1,0)+w(0,−1,0,1). Kedua vektor bebas linear.",
    answer: "Basis {(1,−2,1,0),(0,−1,0,1)}, dimensi 2."
  },
  {
    id: "LA-BD-018", title: "Rank–Nullity", difficulty: "Dasar", type: "Hitungan", estimatedTime: "4 menit",
    concepts: ["rank-nullity"],
    problem: "Jika T:R⁴→R³ mempunyai rank 2, tentukan nullity T.",
    hint1: "Gunakan dim domain = rank T + nullity T.",
    hint2: "4=2+nullity T.",
    solution: "Teorema rank-nullity memberikan 4=rank T+nullity T=2+nullity T.",
    answer: "nullity T=2."
  },
  {
    id: "LA-BD-019", title: "Kernel dan Image Transformasi", difficulty: "Menengah", type: "Hitungan", estimatedTime: "10 menit",
    concepts: ["kernel", "image", "basis"],
    problem: "Untuk T:R³→R², T(x,y,z)=(x+y,y+z), tentukan basis ker T dan basis im T.",
    hint1: "Untuk kernel, selesaikan x+y=0 dan y+z=0.",
    hint2: "Untuk image, gunakan citra basis standar R³.",
    solution: "Kernel memenuhi x=−y dan z=−y, jadi (x,y,z)=t(−1,1,−1). Untuk image, T(e₁)=(1,0), T(e₂)=(1,1), T(e₃)=(0,1). Dua vektor pertama sudah bebas linear dan merentang R².",
    answer: "Basis ker T={(-1,1,-1)}; basis im T dapat dipilih {(1,0),(1,1)}."
  },
  {
    id: "LA-BD-020", title: "Dimensi Irisan", difficulty: "Menengah", type: "Hitungan", estimatedTime: "5 menit",
    concepts: ["dimensi jumlah subruang"],
    problem: "Jika dim U=2, dim W=3, dan dim(U+W)=4, tentukan dim(U∩W).",
    hint1: "Gunakan rumus dim(U+W)=dim U+dim W−dim(U∩W).",
    hint2: "Substitusikan 4=2+3−dim(U∩W).",
    solution: "Dari rumus dimensi, 4=2+3−dim(U∩W). Dengan demikian dim(U∩W)=1.",
    answer: "1."
  },
  {
    id: "LA-BD-021", title: "Mengganti Satu Vektor Basis", difficulty: "Sulit", type: "Pembuktian", estimatedTime: "14 menit",
    concepts: ["basis", "pertukaran"],
    problem: "Misalkan B={v₁,…,vₙ} basis V dan w=a₁v₁+⋯+aₙvₙ dengan a₁≠0. Buktikan {w,v₂,…,vₙ} juga basis V.",
    hint1: "Tunjukkan v₁ dapat dinyatakan menggunakan w,v₂,…,vₙ.",
    hint2: "Gunakan v₁=(1/a₁)(w−a₂v₂−⋯−aₙvₙ).",
    solution: "Karena a₁≠0, v₁=(1/a₁)(w−a₂v₂−⋯−aₙvₙ). Jadi setiap anggota basis lama berada pada span{w,v₂,…,vₙ}; himpunan baru merentang V. Himpunan baru memiliki n vektor di ruang berdimensi n dan merentang V, jadi merupakan basis.",
    answer: "{w,v₂,…,vₙ} merupakan basis V."
  },
  {
    id: "LA-BD-022", title: "Polinom Bebas Linear", difficulty: "Menengah", type: "Hitungan", estimatedTime: "6 menit",
    concepts: ["bebas linear", "polinom"],
    problem: "Selidiki kebebasan linear {1+x,1−x,x²} di P₂.",
    hint1: "Samakan a(1+x)+b(1−x)+cx² dengan polinom nol.",
    hint2: "Bandingkan koefisien konstanta, x, dan x².",
    solution: "Koefisien memberi a+b=0, a−b=0, dan c=0. Dua persamaan pertama menghasilkan a=b=0. Jadi hanya kombinasi trivial yang menghasilkan polinom nol.",
    answer: "Bebas linear."
  },
  {
    id: "LA-BD-023", title: "Basis M₂(R)", difficulty: "Dasar", type: "Construction", estimatedTime: "5 menit",
    concepts: ["basis", "ruang matriks"],
    problem: "Berikan basis standar untuk ruang M₂(R).",
    hint1: "Gunakan matriks yang masing-masing memiliki satu entri 1.",
    hint2: "Ada empat posisi bebas pada matriks 2×2.",
    solution: "Setiap matriks [[a,b],[c,d]] merupakan kombinasi linear aE₁₁+bE₁₂+cE₂₁+dE₂₂. Keempat matriks E₁₁,E₁₂,E₂₁,E₂₂ bebas linear.",
    answer: "{E₁₁,E₁₂,E₂₁,E₂₂}; dim M₂(R)=4."
  },
  {
    id: "LA-BD-024", title: "Matriks Simetris 2×2", difficulty: "Menengah", type: "Construction", estimatedTime: "6 menit",
    concepts: ["subruang", "basis", "dimensi"],
    problem: "Tentukan basis dan dimensi ruang matriks simetris 2×2.",
    hint1: "Matriks simetris berbentuk [[a,b],[b,d]].",
    hint2: "Pisahkan parameter a,b,d.",
    solution: "Setiap matriks simetris 2×2 dapat ditulis sebagai a[[1,0],[0,0]]+b[[0,1],[1,0]]+d[[0,0],[0,1]]. Ketiga matriks bebas linear.",
    answer: "Dimensi 3 dengan basis standar simetris tersebut."
  },
  {
    id: "LA-BD-025", title: "Tiga Karakterisasi Basis", difficulty: "Challenge", type: "Pembuktian", estimatedTime: "15 menit",
    concepts: ["basis", "dimensi", "ekuivalensi"],
    problem: "Misalkan dim V=n dan S terdiri dari tepat n vektor. Buktikan bahwa kondisi berikut ekuivalen: S bebas linear, S merentang V, dan S merupakan basis V.",
    hint1: "Basis secara definisi bebas linear dan merentang.",
    hint2: "Pada ruang n-dimensi, n vektor bebas linear otomatis merentang; n vektor yang merentang otomatis bebas linear.",
    solution: "Jika S basis, kedua sifat lainnya langsung berlaku. Jika S bebas linear dan |S|=n=dim V, S adalah himpunan bebas linear maksimal dan harus merentang V; jadi S basis. Jika S merentang dan memiliki n vektor, S tidak dapat bergantung linear karena satu vektor redundan akan menghasilkan spanning set dengan kurang dari n vektor, bertentangan dengan definisi dimensi. Jadi S bebas linear dan merupakan basis.",
    answer: "Ketiga kondisi ekuivalen."
  },
];
