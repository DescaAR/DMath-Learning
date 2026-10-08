import type { BookExample } from "@/data/book-content-types";

/** Additional examples written for the stated definition, not assigned by array index. */
export const moreDefinitionExamples:Record<string,BookExample>={
  "analisis-kompleks:Bilangan Kompleks":{
    title:"Membaca Bagian Real dan Imajiner",forDefinition:"Bilangan Kompleks",
    problem:"Tuliskan bagian real dan imajiner $z=4-3i$ serta pasangan koordinatnya pada bidang kompleks.",
    solution:["Bentuk umum bilangan kompleks adalah $z=x+iy$.","Membandingkan $4-3i$ dengan $x+iy$ memberi $x=4$ dan $y=-3$.","Bidang kompleks merepresentasikan $z$ dengan titik $(4,-3)$."],
    conclusion:"$\\operatorname{Re}z=4$ dan $\\operatorname{Im}z=-3$."
  },
  "analisis-kompleks:Modulus":{
    title:"Jarak dari Titik Asal",forDefinition:"Modulus",
    problem:"Hitung modulus $z=-5+12i$.",
    solution:["Untuk $z=x+iy$, $|z|=\\sqrt{x^2+y^2}$.","Substitusi $x=-5$ dan $y=12$ memberi $|z|=\\sqrt{25+144}$.","Akar dari $169$ adalah $13$."],
    conclusion:"$|z|=13$."
  },
  "analisis-kompleks:Limit Kompleks":{
    title:"Limit Polinom Kompleks",forDefinition:"Limit Kompleks",
    problem:"Tentukan $\\lim_{z\\to1+i}z^2$.",
    solution:["Polinom kompleks kontinu pada seluruh $\\mathbb C$.","Substitusi $z=1+i$ memberi $(1+i)^2=1+2i+i^2$.","Karena $i^2=-1$, diperoleh $2i$."],
    conclusion:"$\\lim_{z\\to1+i}z^2=2i$."
  },
  "struktur-aljabar:Grup":{
    title:"Bilangan Bulat sebagai Grup",forDefinition:"Grup",
    problem:"Verifikasi bahwa $(\\mathbb Z,+)$ merupakan grup.",
    solution:["Penjumlahan bilangan bulat bersifat tertutup dan asosiatif.","Elemen identitas adalah $0$ karena $a+0=0+a=a$.","Untuk setiap $a\\in\\mathbb Z$, inversnya adalah $-a$ sebab $a+(-a)=0$.","Karena penjumlahan juga komutatif, grup ini bahkan abelian."],
    conclusion:"$(\\mathbb Z,+)$ memenuhi seluruh aksioma grup."
  },
  "struktur-aljabar:Subgrup":{
    title:"Bilangan Genap sebagai Subgrup",forDefinition:"Subgrup",
    problem:"Periksa apakah $2\\mathbb Z=\\{2k:k\\in\\mathbb Z\\}$ merupakan subgrup $(\\mathbb Z,+)$.",
    solution:["$0=2\\cdot0$ berada pada $2\\mathbb Z$.","Untuk $2a,2b\\in2\\mathbb Z$, berlaku $2a-2b=2(a-b)\\in2\\mathbb Z$.","Uji subgrup terhadap operasi penjumlahan terpenuhi."],
    conclusion:"$2\\mathbb Z$ adalah subgrup dari $(\\mathbb Z,+)$."
  },
  "struktur-aljabar:Homomorfisma Grup":{
    title:"Homomorfisma Modulo 3",forDefinition:"Homomorfisma Grup",
    problem:"Tunjukkan $\\varphi:(\\mathbb Z,+)\\to(\\mathbb Z_3,+)$, $\\varphi(n)=[n]_3$, adalah homomorfisma.",
    solution:["Untuk setiap $a,b\\in\\mathbb Z$, $\\varphi(a+b)=[a+b]_3$.","Aritmetika kelas sisa memberi $[a+b]_3=[a]_3+[b]_3$.","Ruas kanan sama dengan $\\varphi(a)+\\varphi(b)$."],
    conclusion:"$\\varphi$ mempertahankan operasi penjumlahan."
  },
  "struktur-aljabar:Ring":{
    title:"Cincin Bilangan Bulat",forDefinition:"Ring",
    problem:"Periksa dua sifat distributif pada bilangan bulat untuk $a=2$, $b=3$, dan $c=4$.",
    solution:["$a(b+c)=2(3+4)=14$ dan $ab+ac=6+8=14$.","$(a+b)c=(2+3)4=20$ dan $ac+bc=8+12=20$.","Kedua perhitungan mengilustrasikan aksioma distributif; bukti umum berasal dari sifat aritmetika $\\mathbb Z$."],
    conclusion:"Contoh memenuhi kedua identitas distributif pada ring $\\mathbb Z$."
  },
  "aljabar-linear:Subruang":{
    title:"Subruang Solusi Persamaan Homogen",forDefinition:"Subruang",
    problem:"Apakah $W=\\{(x,y)\\in\\mathbb R^2:x+y=0\\}$ subruang $\\mathbb R^2$?",
    solution:["Vektor nol memenuhi $0+0=0$, sehingga $0\\in W$.","Jika $(a,-a),(b,-b)\\in W$, jumlahnya $(a+b,-a-b)$ masih di $W$.","Untuk skalar $c$, berlaku $c(a,-a)=(ca,-ca)\\in W$."],
    conclusion:"$W$ adalah subruang berdimensi satu."
  },
  "aljabar-linear:Nilai Eigen dan Vektor Eigen":{
    title:"Vektor Eigen Matriks Diagonal",forDefinition:"Nilai Eigen dan Vektor Eigen",
    problem:"Untuk $A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}$, periksa apakah $v=(1,0)^T$ merupakan vektor eigen.",
    solution:["Hitung $Av=(2,0)^T$.","Ruas tersebut sama dengan $2v$.","Karena $v\\ne0$, syarat $Av=\\lambda v$ terpenuhi dengan $\\lambda=2$."],
    conclusion:"$v$ adalah vektor eigen dengan nilai eigen $2$."
  },
  "aljabar-linear:Ortogonalitas":{
    title:"Dua Vektor Ortogonal",forDefinition:"Ortogonalitas",
    problem:"Periksa apakah $u=(2,1)$ dan $v=(1,-2)$ ortogonal di $\\mathbb R^2$.",
    solution:["Hasil kali dalam Euclid adalah $\\langle u,v\\rangle=2\\cdot1+1\\cdot(-2)$.","Diperoleh $\\langle u,v\\rangle=0$.","Menurut definisi, kedua vektor ortogonal."],
    conclusion:"$u\\perp v$."
  },
  "aljabar-linear:Transformasi Linear":{
    title:"Uji Linearitas",forDefinition:"Transformasi Linear",
    problem:"Periksa apakah $T:\\mathbb R^2\\to\\mathbb R^2$ dengan $T(x,y)=(x+y,2y)$ linear.",
    solution:["Untuk $u=(x_1,y_1)$ dan $v=(x_2,y_2)$, $T(u+v)=(x_1+x_2+y_1+y_2,2y_1+2y_2)=T(u)+T(v)$.","Untuk skalar $c$, $T(cu)=(cx_1+cy_1,2cy_1)=cT(u)$.","Dua syarat linearitas terpenuhi."],
    conclusion:"$T$ transformasi linear."
  },
  "kombinatorika:Bilangan Catalan":{
    title:"Catalan untuk Dua Pasang Kurung",forDefinition:"Bilangan Catalan",
    problem:"Berapa banyak susunan tanda kurung seimbang dengan dua pasangan tanda kurung?",
    solution:["Rumus Catalan memberi $C_2=\\frac1{3}\\binom42=2$.","Kedua susunan yang mungkin adalah $(())$ dan $()()$.","Tidak ada susunan lain yang menjaga setiap prefiks memiliki kurung buka sekurang-kurangnya kurung tutup."],
    conclusion:"Ada dua susunan."
  },
  "kombinatorika:Fungsi Pembangkit Biasa":{
    title:"Fungsi Pembangkit Barisan Konstan",forDefinition:"Fungsi Pembangkit Biasa",
    problem:"Tentukan fungsi pembangkit biasa untuk $a_n=1$ bagi semua $n\\ge0$.",
    solution:["Definisi memberi $A(x)=\\sum_{n=0}^{\\infty}a_nx^n=\\sum_{n=0}^{\\infty}x^n$.","Gunakan identitas deret geometri untuk $|x|<1$.","Diperoleh $A(x)=1/(1-x)$."],
    conclusion:"$A(x)=\\frac1{1-x}$, baik sebagai deret pangkat formal maupun fungsi analitik pada $|x|<1$."
  },
  "kalkulus:Integral Riemann":{
    title:"Jumlah Riemann Fungsi Identitas",forDefinition:"Integral Riemann",
    problem:"Hitung $\\int_0^1x\\,dx$ melalui partisi seragam dan titik ujung kanan.",
    solution:["Pilih $x_i=i/n$ sehingga $\\Delta x_i=1/n$ dan label $t_i=i/n$.","Jumlah Riemann adalah $S_n=\\sum_{i=1}^n(i/n)(1/n)=\\frac1{n^2}\\sum_{i=1}^ni$.","Rumus jumlah bilangan asli memberi $S_n=\\frac{n(n+1)}{2n^2}=\\frac12+\\frac1{2n}$.","Ketika $n\\to\\infty$, $S_n\\to1/2$."],
    conclusion:"$\\int_0^1x\\,dx=\\frac12$."
  },
  "kalkulus:Integral Tak Wajar":{
    title:"Integral pada Interval Tak Hingga",forDefinition:"Integral Tak Wajar",
    problem:"Periksa konvergensi $\\int_1^\\infty x^{-2}\\,dx$.",
    solution:["Definisikan integral sebagai $\\lim_{R\\to\\infty}\\int_1^R x^{-2}\\,dx$.","Antiturunannya adalah $-1/x$, sehingga integral hingga $R$ bernilai $1-1/R$.","Limit ketika $R\\to\\infty$ bernilai $1$."],
    conclusion:"Integral konvergen dengan nilai $1$."
  },
  "kalkulus:Konvergensi Barisan":{
    title:"Konvergensi Barisan Harmonik Sederhana",forDefinition:"Konvergensi Barisan",
    problem:"Buktikan $a_n=1/n$ konvergen ke $0$.",
    solution:["Diberikan $\\varepsilon>0$.","Sifat Archimedean memberi $N\\in\\mathbb N$ dengan $N>1/\\varepsilon$.","Untuk $n\\ge N$, $|a_n-0|=1/n\\le1/N<\\varepsilon$."],
    conclusion:"$1/n\\to0$."
  },
  "teori-graf:Graf Sederhana":{
    title:"Memeriksa Graf Sederhana",forDefinition:"Graf Sederhana",
    problem:"Apakah $V=\\{1,2,3\\}$ dan $E=\\{\\{1,2\\},\\{2,3\\}\\}$ membentuk graf sederhana?",
    solution:["Setiap sisi menghubungkan dua simpul berbeda dari $V$.","Tidak ada loop seperti $\\{1,1\\}$ dan tidak ada sisi ganda.","Karena $E$ adalah himpunan pasangan tak berurut, persyaratan graf sederhana dipenuhi."],
    conclusion:"$G=(V,E)$ merupakan graf sederhana."
  },
  "teori-graf:Polinom Kromatik":{
    title:"Pewarnaan Segitiga",forDefinition:"Polinom Kromatik",
    problem:"Tentukan $P_{C_3}(k)$ untuk graf cycle segitiga.",
    solution:["Simpul pertama dapat diberi satu dari $k$ warna.","Simpul kedua harus berbeda dari simpul pertama, sehingga ada $k-1$ pilihan.","Simpul ketiga bertetangga dengan keduanya, sehingga ada $k-2$ pilihan."],
    conclusion:"$P_{C_3}(k)=k(k-1)(k-2)$."
  },
  "teori-bilangan-olimpiade:Kongruensi":{
    title:"Kelas Sisa Modulo 5",forDefinition:"Kongruensi",
    problem:"Periksa apakah $37\\equiv12\\pmod5$.",
    solution:["Selisih kedua bilangan adalah $37-12=25$.","Karena $5\\mid25$, definisi kongruensi terpenuhi."],
    conclusion:"$37\\equiv12\\pmod5$."
  },
  "riset-operasi:Intensitas Lalu Lintas":{
    title:"Utilisasi Antrean M/M/1",forDefinition:"Intensitas Lalu Lintas",
    problem:"Server menerima rata-rata empat pelanggan per jam dan melayani rata-rata lima pelanggan per jam. Hitung $\\rho$.",
    solution:["Gunakan laju kedatangan $\\lambda=4$ dan laju pelayanan $\\mu=5$.","Rasio utilisasi adalah $\\rho=\\lambda/\\mu=4/5=0.8$.","Karena $\\rho<1$, sistem memenuhi syarat kestabilan M/M/1 dasar."],
    conclusion:"Utilisasi server adalah 80%."
  },
  "riset-operasi:Fungsi Konveks":{
    title:"Memeriksa Konveksitas Kuadrat",forDefinition:"Fungsi Konveks",
    problem:"Tunjukkan bahwa $f(x)=x^2$ merupakan fungsi konveks pada $\\mathbb R$.",
    solution:["Ambil $x,y\\in\\mathbb R$ dan $t\\in[0,1]$.","Hitung $tf(x)+(1-t)f(y)-f(tx+(1-t)y)$.","Ekspansi menghasilkan $t(1-t)(x-y)^2\\ge0$.","Oleh karena itu $f(tx+(1-t)y)\\le tf(x)+(1-t)f(y)$."],
    conclusion:"$f(x)=x^2$ konveks."
  },
  "statistika-terapan:p-value":{
    title:"p-value Uji Binomial Satu Sisi",forDefinition:"p-value",
    problem:"Di bawah $H_0:p=1/2$, empat uji Bernoulli independen menghasilkan empat sukses. Dengan alternatif $H_1:p>1/2$, berapa p-value?",
    solution:["Statistik uji $X$ adalah banyak sukses dan di bawah $H_0$ berdistribusi $\\operatorname{Bin}(4,1/2)$.","Hasil pengamatan $X=4$ berada pada ujung kanan distribusi.","Untuk alternatif satu sisi kanan, p-value adalah $P_{H_0}(X\\ge4)=\\binom44(1/2)^4=1/16$."],
    conclusion:"p-value adalah $0.0625$."
  },
  "statistika-matematika:Likelihood":{
    title:"Likelihood Bernoulli",forDefinition:"Likelihood",
    problem:"Untuk tiga observasi Bernoulli independen $(1,0,1)$ dan parameter $p$, tuliskan fungsi likelihood.",
    solution:["Fungsi peluang satu observasi adalah $p^x(1-p)^{1-x}$.","Perkalian untuk ketiga observasi memberi $p(1-p)p$.","Dengan data tetap, likelihood adalah fungsi $L(p)=p^2(1-p)$ pada $0\\le p\\le1$."],
    conclusion:"$L(p)=p^2(1-p)$."
  },
  "statistika-matematika:Ekspektasi":{
    title:"Ekspektasi Variabel Bernoulli",forDefinition:"Ekspektasi",
    problem:"Jika $X\\sim\\operatorname{Bernoulli}(p)$, tentukan $E[X]$.",
    solution:["Peubah $X$ bernilai $0$ dengan probabilitas $1-p$ dan $1$ dengan probabilitas $p$.","Definisi ekspektasi diskret memberi $E[X]=0(1-p)+1\\cdot p$."],
    conclusion:"$E[X]=p$."
  },
  "matematika-diskrit:Tautologi":{
    title:"Hukum P atau Bukan P",forDefinition:"Tautologi",
    problem:"Periksa apakah $P\\lor\\neg P$ merupakan tautologi.",
    solution:["Jika $P$ benar, disjungsi $P\\lor\\neg P$ benar karena suku pertama benar.","Jika $P$ salah, maka $\\neg P$ benar sehingga disjungsi tetap benar.","Semua kemungkinan nilai kebenaran telah diperiksa."],
    conclusion:"$P\\lor\\neg P$ adalah tautologi."
  },
  "matematika-diskrit:Kongruensi":{
    title:"Kongruensi Bilangan Bulat",forDefinition:"Kongruensi",
    problem:"Apakah $28\\equiv4\\pmod6$?",
    solution:["Selisih $28-4=24$.","Karena $6\\mid24$, definisi kongruensi berlaku."],
    conclusion:"$28\\equiv4\\pmod6$."
  },
  "kalkulus-stokastik:Brownian Motion Standar":{
    title:"Sebaran Increment Brownian",forDefinition:"Brownian Motion Standar",
    problem:"Jika $W_t$ Brownian motion standar, tentukan distribusi $W_5-W_2$.",
    solution:["Panjang interval waktu ialah $5-2=3$.","Aksioma increment Brownian memberi sebaran normal dengan mean nol dan varians panjang interval.","Oleh karena itu $W_5-W_2\\sim N(0,3)$."],
    conclusion:"Increment berdistribusi $N(0,3)$."
  },
  "kalkulus-stokastik:Integral Itô untuk Proses Sederhana":{
    title:"Integral Itô Integrand Konstan",forDefinition:"Integral Itô untuk Proses Sederhana",
    problem:"Hitung $\\int_0^t2\\,dW_s$ untuk Brownian motion standar $W$.",
    solution:["Integrand $H_s=2$ merupakan proses sederhana adapted.","Definisi jumlah Itô pada partisi memberikan $\\sum_i2(W_{t_{i+1}}-W_{t_i})$.","Jumlah tersebut teleskopik menjadi $2(W_t-W_0)$.","Karena $W_0=0$, hasilnya adalah $2W_t$."],
    conclusion:"$\\int_0^t2\\,dW_s=2W_t$."
  }
};
