import type { BookExample, BookFormalItem, BookLessonContent } from "@/data/book-content-types";
import { numericalAnalysisBook } from "@/data/numerical-analysis-curricula";

type Notation={symbol:string;meaning:string};

const notationByUnit:Record<string,Notation[]>={
  "1":[
    {symbol:"$p$",meaning:"nilai eksak atau nilai acuan"},
    {symbol:"$p^*$",meaning:"aproksimasi terhadap $p$"},
    {symbol:"$|p-p^*|$",meaning:"galat absolut"},
    {symbol:"$|p-p^*|/|p|$",meaning:"galat relatif untuk $p\\ne0$"},
    {symbol:"$O(h^q)$",meaning:"orde asimtotik terhadap ukuran langkah $h$"},
  ],
  "2":[
    {symbol:"$f(x)=0$",meaning:"persamaan nonlinear satu variabel"},
    {symbol:"$p_n$",meaning:"aproksimasi akar pada iterasi ke-$n$"},
    {symbol:"$e_n=p-p_n$",meaning:"galat iterasi terhadap akar eksak $p$"},
    {symbol:"$\\mathrm{TOL}$",meaning:"toleransi penghentian"},
  ],
  "3":[
    {symbol:"$x_0,\\ldots,x_n$",meaning:"node interpolasi"},
    {symbol:"$P_n(x)$",meaning:"polinom interpolasi derajat paling tinggi $n$"},
    {symbol:"$f[x_i,\\ldots,x_j]$",meaning:"selisih terbagi"},
    {symbol:"$S(x)$",meaning:"fungsi spline piecewise"},
  ],
  "4":[
    {symbol:"$h$",meaning:"ukuran langkah atau lebar panel"},
    {symbol:"$D_hf$",meaning:"aproksimasi diskret terhadap turunan"},
    {symbol:"$Q_h(f)$",meaning:"aproksimasi kuadratur"},
    {symbol:"$E_h$",meaning:"galat diskretisasi pada ukuran langkah $h$"},
  ],
  "5":[
    {symbol:"$y'=f(t,y)$",meaning:"masalah nilai awal orde satu"},
    {symbol:"$t_n=t_0+nh$",meaning:"grid waktu seragam"},
    {symbol:"$w_n$",meaning:"aproksimasi numerik terhadap $y(t_n)$"},
    {symbol:"$\\tau_n$",meaning:"galat truncation lokal"},
  ],
  "6":[
    {symbol:"$Ax=b$",meaning:"sistem persamaan linear"},
    {symbol:"$r=b-Ax$",meaning:"residual"},
    {symbol:"$\\kappa(A)$",meaning:"condition number matriks"},
    {symbol:"$A=LU$",meaning:"faktorisasi lower–upper"},
    {symbol:"$\\rho(T)$",meaning:"spectral radius matriks iterasi"},
  ],
  "7":[
    {symbol:"$r_i=y_i-p(x_i)$",meaning:"residual aproksimasi data"},
    {symbol:"$\\|r\\|_2$",meaning:"norm Euclidean residual"},
    {symbol:"$T_n(x)$",meaning:"polinom Chebyshev derajat $n$"},
    {symbol:"$\\widehat{x}_k$",meaning:"koefisien transformasi Fourier diskret"},
  ],
  "8":[
    {symbol:"$Av=\\lambda v$",meaning:"persamaan nilai eigen"},
    {symbol:"$r=Av-\\lambda v$",meaning:"residual eigenpair"},
    {symbol:"$A=U\\Sigma V^T$",meaning:"singular value decomposition"},
    {symbol:"$J_F(x)$",meaning:"Jacobian sistem nonlinear $F(x)=0$"},
  ],
  "9":[
    {symbol:"$L_hu_h=f_h$",meaning:"sistem diskret hasil pendekatan operator diferensial"},
    {symbol:"$h$",meaning:"ukuran grid atau mesh"},
    {symbol:"$u_h$",meaning:"aproksimasi diskret terhadap solusi kontinu"},
    {symbol:"$V_h$",meaning:"ruang aproksimasi berdimensi hingga"},
  ],
};

function coreFormal(slug:string,title:string,summary:string,unit:string):BookFormalItem[]{
  if(slug==="num-galat-absolut-relatif")return[
    {kind:"definition",title:"Galat Absolut",statement:"Jika $p^*$ mengaproksimasi $p$, galat absolut didefinisikan sebagai $E_{abs}=|p-p^*|$."},
    {kind:"definition",title:"Galat Relatif",statement:"Jika $p\\ne0$, galat relatif didefinisikan sebagai $E_{rel}=|p-p^*|/|p|$."},
    {kind:"note",title:"Skala Galat",statement:"Galat relatif membandingkan besar kesalahan dengan skala nilai acuan dan biasanya lebih informatif ketika besaran yang dibandingkan mempunyai orde magnitudo berbeda."},
  ];
  if(slug==="num-conditioning-stability")return[
    {kind:"definition",title:"Masalah Well-Conditioned",statement:"Secara informal, suatu masalah disebut well-conditioned apabila perturbasi kecil pada data menghasilkan perubahan kecil pada solusi; conditioning adalah sifat masalah, bukan algoritma."},
    {kind:"definition",title:"Algoritma Stabil",statement:"Algoritma disebut stabil apabila galat yang timbul selama komputasi tidak diperbesar secara tidak terkendali dibanding skala masalah."},
    {kind:"note",title:"Pemisahan Konsep",statement:"Masalah ill-conditioned dapat membuat algoritma yang baik tetap menghasilkan solusi sensitif, sedangkan algoritma tidak stabil dapat merusak masalah yang sebenarnya well-conditioned."},
  ];
  if(slug==="num-bisection")return[
    {kind:"theorem",title:"Invariant Bisection",statement:"Jika $f$ kontinu pada $[a_0,b_0]$ dan $f(a_0)f(b_0)<0$, setiap iterasi bisection dapat memilih subinterval $[a_n,b_n]$ yang tetap mengurung sedikitnya satu akar.",proof:["Diambil titik tengah $m_n=(a_n+b_n)/2$.","Jika $f(m_n)=0$, akar ditemukan.","Jika tidak, tepat salah satu dari $[a_n,m_n]$ atau $[m_n,b_n]$ mempertahankan perubahan tanda.","Kontinuitas dan Teorema Nilai Antara menjamin akar tetap berada pada interval terpilih."]},
    {kind:"proposition",title:"Batas Galat Bisection",statement:"Setelah $n$ pembagian, panjang interval menjadi $(b_0-a_0)/2^n$, sehingga titik tengah mempunyai galat paling besar setengah panjang interval tersebut."},
  ];
  if(slug==="num-fixed-point")return[
    {kind:"theorem",title:"Prinsip Kontraksi Satu Dimensi",statement:"Jika $g$ memetakan interval tertutup $I$ ke dirinya sendiri dan terdapat $0<L<1$ dengan $|g'(x)|\\le L$ pada $I$, iterasi $p_{n+1}=g(p_n)$ konvergen ke satu-satunya titik tetap di $I$."},
    {kind:"note",title:"Desain Iterasi",statement:"Persamaan $f(x)=0$ dapat diubah menjadi banyak bentuk $x=g(x)$; tidak semuanya memiliki sifat kontraksi pada daerah yang sama."},
  ];
  if(slug==="num-newton")return[
    {kind:"definition",title:"Iterasi Newton",statement:"Untuk $f'(p_n)\\ne0$, iterasi Newton diberikan oleh $p_{n+1}=p_n-f(p_n)/f'(p_n)$."},
    {kind:"proposition",title:"Konvergensi Lokal Kuadratik",statement:"Di sekitar akar sederhana $p$, dengan regularitas yang cukup dan tebakan awal yang sesuai, galat Newton secara asimtotik memenuhi $|e_{n+1}|\\approx C|e_n|^2$."},
  ];
  if(slug==="num-secant")return[
    {kind:"definition",title:"Iterasi Secant",statement:"Metode secant mengganti $f'(p_n)$ pada Newton dengan kemiringan secant dari dua iterasi terakhir, sehingga tidak memerlukan evaluasi turunan eksplisit."},
    {kind:"proposition",title:"Orde Superlinear",statement:"Untuk akar sederhana dan kondisi lokal yang sesuai, metode secant memiliki orde konvergensi $\\varphi=(1+\\sqrt5)/2$."},
  ];
  if(slug==="num-lagrange")return[
    {kind:"definition",title:"Basis Lagrange",statement:"Untuk node berbeda $x_0,\\ldots,x_n$, didefinisikan $L_i(x)=\\prod_{j\\ne i}(x-x_j)/(x_i-x_j)$ sehingga $L_i(x_j)=\\delta_{ij}$."},
    {kind:"theorem",title:"Keunikan Interpolan Polinomial",statement:"Terdapat tepat satu polinom berderajat paling tinggi $n$ yang melalui $n+1$ data dengan node berbeda.",proof:["Eksistensi diberikan oleh bentuk Lagrange $P_n(x)=\\sum_i f(x_i)L_i(x)$.","Jika $P$ dan $Q$ keduanya interpolan, $P-Q$ mempunyai sedikitnya $n+1$ akar berbeda.","Karena derajat $P-Q$ paling tinggi $n$, polinom tersebut harus identik nol.","Dengan demikian interpolan unik."]},
  ];
  if(slug==="num-divided-differences")return[
    {kind:"definition",title:"Selisih Terbagi",statement:"Secara rekursif, $f[x_i]=f(x_i)$ dan $f[x_i,\\ldots,x_j]=(f[x_{i+1},\\ldots,x_j]-f[x_i,\\ldots,x_{j-1}])/(x_j-x_i)$."},
    {kind:"proposition",title:"Bentuk Newton",statement:"Interpolan dapat ditulis dalam basis bertingkat $(x-x_0)(x-x_1)\\cdots$, sehingga node baru dapat ditambahkan tanpa membangun seluruh polinom dari awal."},
  ];
  if(slug==="num-hermite")return[
    {kind:"definition",title:"Interpolasi Hermite",statement:"Interpolasi Hermite mencocokkan nilai fungsi dan satu atau lebih turunannya pada node yang ditentukan."},
    {kind:"note",title:"Repeated Nodes",statement:"Dalam tabel selisih terbagi, data turunan diperlakukan melalui limit pada node berulang, misalnya $f[x_i,x_i]=f'(x_i)$."},
  ];
  if(slug==="num-splines")return[
    {kind:"definition",title:"Spline Kubik",statement:"Spline kubik adalah fungsi piecewise cubic yang menginterpolasi node dan biasanya memiliki kontinuitas sampai turunan kedua pada node interior."},
    {kind:"note",title:"Kondisi Batas",statement:"Natural spline menggunakan turunan kedua nol di endpoint, sedangkan clamped spline menggunakan informasi turunan pertama di endpoint."},
  ];
  if(slug==="num-finite-differences")return[
    {kind:"proposition",title:"Central Difference Orde Dua",statement:"Untuk fungsi cukup halus, $f'(x)=[f(x+h)-f(x-h)]/(2h)+O(h^2)$."},
    {kind:"note",title:"Trade-off Langkah",statement:"Memperkecil $h$ menurunkan truncation error sampai round-off dan cancellation mulai mendominasi."},
  ];
  if(slug==="num-richardson")return[
    {kind:"proposition",title:"Eliminasi Galat Dominan",statement:"Jika $A(h)=L+Ch^p+O(h^{p+q})$, kombinasi aproksimasi pada $h$ dan $h/r$ dapat dipilih untuk menghilangkan suku $Ch^p$ dan meningkatkan orde."},
    {kind:"note",title:"Syarat Asimtotik",statement:"Ekstrapolasi efektif ketika model ekspansi galat benar pada rentang ukuran langkah yang digunakan."},
  ];
  if(slug==="num-newton-cotes")return[
    {kind:"definition",title:"Kuadratur Interpolatorik",statement:"Rumus kuadratur interpolatorik diperoleh dengan mengintegralkan polinom yang menginterpolasi integran pada node tertentu."},
    {kind:"proposition",title:"Aturan Simpson",statement:"Pada dua panel seragam, aturan Simpson menggunakan kombinasi $(h/3)[f(x_0)+4f(x_1)+f(x_2)]$ dan eksak untuk polinom sampai derajat tiga."},
  ];
  if(slug==="num-romberg")return[
    {kind:"definition",title:"Tabel Romberg",statement:"Integrasi Romberg membangun kolom pertama dari aturan trapezoid yang terus diperhalus lalu menggunakan ekstrapolasi Richardson untuk meningkatkan orde."},
    {kind:"note",title:"Diagnostik Konvergensi",statement:"Perbedaan antarelemen diagonal tabel dapat digunakan sebagai indikator praktis konvergensi, tetapi bukan pengganti analisis galat ketika jaminan rigor diperlukan."},
  ];
  if(slug==="num-gaussian-quadrature")return[
    {kind:"theorem",title:"Degree of Precision Gaussian",statement:"Kuadratur Gaussian dengan $n$ node yang dipilih sebagai akar polinom ortogonal dapat mencapai keeksakan untuk seluruh polinom berderajat sampai $2n-1$."},
    {kind:"note",title:"Transformasi Interval",statement:"Aturan Gauss pada interval standar dapat dipindahkan ke $[a,b]$ dengan transformasi affine dan penyesuaian bobot."},
  ];
  if(slug==="num-euler-method")return[
    {kind:"definition",title:"Metode Euler",statement:"Dengan langkah $h$, metode Euler eksplisit menggunakan $w_{n+1}=w_n+h f(t_n,w_n)$."},
    {kind:"proposition",title:"Orde Global",statement:"Di bawah regularitas dan kestabilan yang sesuai, Euler mempunyai galat truncation lokal orde $O(h^2)$ dan galat global orde $O(h)$."},
  ];
  if(slug==="num-runge-kutta")return[
    {kind:"definition",title:"Metode Runge–Kutta",statement:"Metode Runge–Kutta membentuk $w_{n+1}$ dari kombinasi beberapa evaluasi kemiringan dalam satu langkah tanpa memerlukan turunan tinggi eksplisit."},
    {kind:"note",title:"RK4 Klasik",statement:"RK4 klasik menggunakan empat tahap dan mempunyai orde global empat untuk solusi yang cukup halus."},
  ];
  if(slug==="num-rkf-adaptive")return[
    {kind:"definition",title:"Pasangan Embedded",statement:"Pasangan embedded menghitung dua aproksimasi dengan orde berbeda dari sekumpulan stage yang hampir sama; selisihnya dipakai mengestimasi galat lokal."},
    {kind:"note",title:"Kontrol Langkah",statement:"Langkah berikutnya dipilih dari toleransi dan estimasi galat dengan faktor keselamatan agar perubahan ukuran langkah tidak terlalu agresif."},
  ];
  if(slug==="num-gaussian-elimination")return[
    {kind:"definition",title:"Eliminasi Gaussian",statement:"Eliminasi Gaussian mengubah $Ax=b$ menjadi sistem triangular atas melalui operasi baris yang mempertahankan himpunan solusi."},
    {kind:"proposition",title:"Biaya Dominan",statement:"Untuk matriks dense $n\\times n$, eliminasi membutuhkan orde $O(n^3)$ operasi aritmetika, sedangkan back substitution membutuhkan orde $O(n^2)$."},
  ];
  if(slug==="num-lu-factorization")return[
    {kind:"definition",title:"Faktorisasi LU",statement:"Faktorisasi $A=LU$ memisahkan matriks menjadi triangular bawah $L$ dan triangular atas $U$, sehingga $Ax=b$ diselesaikan melalui $Ly=b$ lalu $Ux=y$."},
    {kind:"note",title:"Pivoting",statement:"Dalam praktik, pivoting sering menghasilkan bentuk $PA=LU$ agar kestabilan numerik lebih baik."},
  ];
  if(slug==="num-special-matrices")return[
    {kind:"theorem",title:"Faktorisasi Cholesky",statement:"Jika $A$ simetris positif definit, terdapat faktor triangular bawah $L$ dengan diagonal positif sehingga $A=LL^T$."},
    {kind:"note",title:"Eksploitasi Struktur",statement:"Matriks banded, tridiagonal, sparse, atau SPD sebaiknya tidak diperlakukan sebagai matriks dense umum karena struktur dapat menghemat waktu dan memori."},
  ];
  if(slug==="num-jacobi-gauss-seidel")return[
    {kind:"definition",title:"Iterasi Stasioner",statement:"Dengan splitting $A=M-N$, iterasi berbentuk $x^{(k+1)}=M^{-1}Nx^{(k)}+M^{-1}b$."},
    {kind:"theorem",title:"Kriteria Spectral Radius",statement:"Iterasi linear $x^{(k+1)}=Tx^{(k)}+c$ konvergen untuk setiap tebakan awal jika dan hanya jika $\\rho(T)<1$."},
  ];
  if(slug==="num-conjugate-gradient")return[
    {kind:"definition",title:"Arah Konjugat",statement:"Dua arah $p_i,p_j$ disebut $A$-konjugat jika $p_i^TAp_j=0$ untuk $i\\ne j$."},
    {kind:"note",title:"Krylov Subspace",statement:"Conjugate Gradient membangun aproksimasi pada ruang Krylov dan sangat efektif untuk sistem SPD besar, khususnya dengan preconditioner yang baik."},
  ];
  if(slug==="num-least-squares-discrete")return[
    {kind:"definition",title:"Masalah Least Squares",statement:"Diberikan data $(x_i,y_i)$, dipilih model $p$ yang meminimalkan $\\sum_i(y_i-p(x_i))^2$."},
    {kind:"proposition",title:"Normal Equations",statement:"Untuk model linear $Ac\\approx y$, titik minimum memenuhi $A^TAc=A^Ty$ apabila kondisi rank memadai."},
  ];
  if(slug==="num-chebyshev")return[
    {kind:"definition",title:"Polinom Chebyshev",statement:"Polinom Chebyshev memenuhi $T_n(\\cos\\theta)=\\cos(n\\theta)$ dan mempunyai osilasi terkontrol pada $[-1,1]$."},
    {kind:"note",title:"Node Chebyshev",statement:"Distribusi node yang lebih rapat dekat endpoint menekan osilasi besar yang dapat muncul pada interpolasi node seragam berderajat tinggi."},
  ];
  if(slug==="num-dft")return[
    {kind:"definition",title:"Discrete Fourier Transform",statement:"Untuk data $x_0,\\ldots,x_{N-1}$, DFT didefinisikan oleh $\\widehat{x}_k=\\sum_{j=0}^{N-1}x_j e^{-2\\pi i jk/N}$."},
    {kind:"note",title:"Interpretasi Frekuensi",statement:"Koefisien DFT mengukur kontribusi mode diskret kompleks pada data sampel."},
  ];
  if(slug==="num-fft")return[
    {kind:"proposition",title:"Ide Divide and Conquer",statement:"Jika $N$ genap, DFT dapat dipecah menjadi DFT indeks genap dan ganjil; rekursi ini menurunkan biaya dari $O(N^2)$ menjadi $O(N\\log N)$ pada ukuran yang sesuai."},
    {kind:"note",title:"FFT Bukan Transformasi Baru",statement:"FFT adalah keluarga algoritma cepat untuk menghitung DFT, bukan transformasi yang berbeda."},
  ];
  if(slug==="num-power-method")return[
    {kind:"definition",title:"Power Iteration",statement:"Power method membentuk $y_{k+1}=Ax_k$ lalu menormalisasi untuk menonjolkan komponen pada eigenspace dengan magnitudo eigenvalue dominan."},
    {kind:"note",title:"Spectral Gap",statement:"Laju konvergensi terutama dipengaruhi rasio magnitudo nilai eigen terbesar kedua terhadap yang dominan."},
  ];
  if(slug==="num-qr-algorithm")return[
    {kind:"definition",title:"QR Iteration",statement:"Satu langkah QR menfaktorkan $A_k=Q_kR_k$ lalu membentuk $A_{k+1}=R_kQ_k$, yang similar dengan $A_k$."},
    {kind:"proposition",title:"Similarity",statement:"Karena $A_{k+1}=Q_k^TA_kQ_k$ untuk $Q_k$ ortogonal, seluruh iterasi mempertahankan nilai eigen."},
  ];
  if(slug==="num-svd")return[
    {kind:"theorem",title:"Singular Value Decomposition",statement:"Setiap matriks real $A\\in\\mathbb R^{m\\times n}$ dapat ditulis $A=U\\Sigma V^T$ dengan $U,V$ ortogonal dan entri diagonal $\\Sigma$ taknegatif."},
    {kind:"note",title:"Low-Rank Approximation",statement:"Pemotongan singular values kecil memberikan aproksimasi rank rendah yang optimal dalam norma Euclidean/Frobenius yang sesuai."},
  ];
  if(slug==="num-newton-systems")return[
    {kind:"definition",title:"Newton Multivariabel",statement:"Untuk $F(x)=0$, langkah Newton menyelesaikan $J_F(x_k)s_k=-F(x_k)$ lalu menetapkan $x_{k+1}=x_k+s_k$."},
    {kind:"note",title:"Jacobian dan Globalisasi",statement:"Kedekatan tebakan awal dan conditioning Jacobian sangat mempengaruhi perilaku Newton; damping atau line search dapat digunakan untuk memperluas daerah keberhasilan."},
  ];
  if(slug==="num-finite-difference-bvp")return[
    {kind:"definition",title:"Diskretisasi BVP",statement:"Finite difference mengganti turunan pada node grid dengan formula beda hingga, sehingga BVP berubah menjadi sistem persamaan algebraik."},
    {kind:"note",title:"Consistency dan Stability",statement:"Orde stencil saja belum cukup; conditioning sistem dan kestabilan diskret juga menentukan kualitas solusi numerik."},
  ];
  if(slug==="num-pde-classification")return[
    {kind:"definition",title:"Klasifikasi PDE Orde Dua",statement:"Untuk PDE linear orde dua dalam dua variabel, tanda diskriminan koefisien bagian orde dua membedakan tipe elliptic, parabolic, dan hyperbolic."},
    {kind:"note",title:"Prinsip Lax",statement:"Untuk kelas masalah linear well-posed tertentu, consistency dan stability merupakan dua komponen utama yang mengarahkan pada convergence."},
  ];
  if(slug==="num-finite-element")return[
    {kind:"definition",title:"Weak Formulation",statement:"Weak formulation memindahkan sebagian diferensiasi dari solusi ke fungsi uji melalui integrasi parsial sehingga kebutuhan regularitas solusi berkurang."},
    {kind:"definition",title:"Finite Element Space",statement:"Ruang $V_h$ dibangun dari fungsi basis lokal pada mesh; solusi diskret dicari sebagai kombinasi linear basis tersebut."},
    {kind:"note",title:"Assembly",statement:"Matriks global dibentuk dengan menjumlahkan kontribusi elemen lokal sesuai konektivitas mesh."},
  ];

  return[
    {kind:"definition",title:title,statement:summary},
    {kind:"note",title:"Objek Numerik",statement:"Pada submateri ini, kuantitas eksak dibedakan dari representasi diskret dan aproksimasinya. Setiap hasil harus menyebut sumber galat dan asumsi regularitas atau struktur yang digunakan."},
    {kind:"proposition",title:"Prinsip Verifikasi",statement:"Aproksimasi numerik sebaiknya disertai sedikitnya satu diagnostik: residual, estimator galat, pembandingan grid, pembandingan metode, atau bound teoritis yang relevan."},
  ];
}

function examplesFor(unit:string,title:string,keyIdeas:string[]):BookExample[]{
  if(unit==="1")return[
    {title:"Membandingkan Galat",problem:"Nilai acuan adalah $p=\\sqrt2$ dan digunakan aproksimasi $p^*=1.414$. Tentukan galat absolut dan relatif.",solution:["Dihitung $E_{abs}=|\\sqrt2-1.414|$.","Galat relatif diperoleh dengan membagi $E_{abs}$ oleh $|\\sqrt2|$.","Kedua ukuran dilaporkan bersama agar besar kesalahan dan skala masalah terlihat."],conclusion:"Galat absolut dan relatif menjawab dua pertanyaan yang berbeda tentang kualitas aproksimasi."},
    {title:"Cancellation",problem:"Jelaskan mengapa menghitung $\\sqrt{x+1}-\\sqrt{x}$ secara langsung untuk $x$ sangat besar dapat kehilangan digit signifikan.",solution:["Kedua akar mempunyai nilai sangat berdekatan.","Pengurangan dua bilangan berdekatan membuang digit awal yang sama.","Rasionalisasi menghasilkan $1/(\\sqrt{x+1}+\\sqrt{x})$, bentuk yang lebih stabil secara numerik."]},
    {title:"Orde Galat",problem:"Jika galat sebuah metode kira-kira $Ch^2$, apa yang terjadi saat $h$ dibagi dua?",solution:["Galat baru kira-kira $C(h/2)^2$.","Nilainya sekitar seperempat galat lama.","Rasio ini dapat diuji secara numerik untuk memperkirakan orde konvergensi."]},
    {title:"Residual dan Error",problem:"Bedakan residual kecil dengan error kecil pada masalah yang ill-conditioned.",solution:["Residual mengukur seberapa baik aproksimasi memenuhi persamaan.","Error mengukur jarak terhadap solusi eksak.","Pada masalah ill-conditioned, residual kecil belum tentu mengimplikasikan error kecil."]},
  ];
  if(unit==="2")return[
    {title:"Isolasi Akar",problem:"Untuk $f(x)=x^3-x-1$, tunjukkan bahwa terdapat akar pada $(1,2)$.",solution:["Dihitung $f(1)=-1$ dan $f(2)=5$.","Polinom kontinu pada $[1,2]$.","Karena tanda berubah, Teorema Nilai Antara menjamin sedikitnya satu akar pada interval tersebut."]},
    {title:"Satu Langkah Newton",problem:"Lakukan satu iterasi Newton untuk $f(x)=x^2-2$ dari $p_0=1.5$.",solution:["Turunan adalah $f'(x)=2x$.","Digunakan $p_1=p_0-f(p_0)/f'(p_0)$.","Diperoleh $p_1=1.5-(0.25/3)=1.416\\overline6$."]},
    {title:"Kriteria Henti",problem:"Bandingkan penghentian berdasarkan $|p_{n+1}-p_n|$ dan $|f(p_{n+1})|$.",solution:["Selisih iterasi mengukur stagnasi langkah.","Residual mengukur pemenuhan persamaan.","Keduanya dapat menyesatkan pada kondisi tertentu, sehingga kombinasi toleransi absolut/relatif dan residual lebih aman."]},
    {title:"Perbandingan Metode",problem:"Kapan bisection lebih menarik daripada Newton?",solution:["Bisection memerlukan bracket dan kontinuitas tetapi sangat robust.","Newton biasanya lebih cepat dekat akar tetapi memerlukan turunan dan tebakan awal yang baik.","Pemilihan metode ditentukan oleh informasi yang tersedia dan kebutuhan jaminan."]},
  ];
  if(unit==="3")return[
    {title:"Interpolasi Dua Node",problem:"Bangun interpolan linear melalui $(0,1)$ dan $(2,5)$.",solution:["Kemiringan garis adalah $(5-1)/(2-0)=2$.","Dengan titik $(0,1)$ diperoleh $P(x)=1+2x$.","Substitusi kedua node memverifikasi interpolasi."]},
    {title:"Node Tambahan",problem:"Jelaskan keuntungan bentuk Newton saat satu node baru ditambahkan.",solution:["Koefisien lama tetap dipertahankan.","Hanya satu selisih terbagi tingkat baru yang perlu dihitung.","Interpolan baru diperoleh dengan menambah satu suku basis bertingkat."]},
    {title:"Spline versus Polinom Global",problem:"Mengapa spline sering lebih stabil daripada interpolasi polinom derajat tinggi pada banyak node?",solution:["Spline memakai polinom berderajat rendah secara lokal.","Kontinuitas antarsegmen dikendalikan pada node.","Osilasi global yang besar dapat dihindari."]},
    {title:"Pemilihan Node",problem:"Apa tujuan penggunaan node Chebyshev pada interpolasi global?",solution:["Node ditempatkan lebih rapat dekat endpoint.","Distribusi ini menekan faktor produk pada galat interpolasi.","Risiko osilasi Runge berkurang dibanding node seragam."]},
  ];
  if(unit==="4")return[
    {title:"Central Difference",problem:"Aproksimasi $f'(1)$ untuk $f(x)=x^2$ dengan central difference dan $h=0.1$.",solution:["Dihitung $f(1.1)=1.21$ dan $f(0.9)=0.81$.","Central difference memberi $(1.21-0.81)/(0.2)=2$.","Hasil sama dengan nilai eksak $f'(1)=2$ karena struktur polinomnya."]},
    {title:"Trapezoid Satu Panel",problem:"Aproksimasi $\\int_0^1 x^2\\,dx$ dengan aturan trapezoid satu panel.",solution:["Lebar interval adalah $1$.","Nilai endpoint $f(0)=0$ dan $f(1)=1$.","Aturan trapezoid memberi $T=(1/2)(0+1)=1/2$, lalu dibandingkan dengan nilai eksak $1/3$."]},
    {title:"Refinement",problem:"Bagaimana mendeteksi apakah kuadratur mulai berada pada regime asimtotik?",solution:["Hitung aproksimasi pada $h,h/2,h/4$.","Bandingkan selisih berturut-turut.","Rasio yang mendekati faktor teoritis memberi indikasi orde yang diharapkan."]},
    {title:"Adaptive Strategy",problem:"Pada integral dengan perubahan tajam hanya dekat satu endpoint, mengapa mesh adaptif lebih efisien?",solution:["Daerah halus tidak memerlukan banyak panel.","Estimator lokal menandai daerah yang membutuhkan refinement.","Komputasi difokuskan pada daerah sulit."]},
  ];
  if(unit==="5")return[
    {title:"Satu Langkah Euler",problem:"Untuk $y'=y$, $y(0)=1$, gunakan Euler dengan $h=0.1$ untuk menghitung $w_1$.",solution:["Kemiringan awal adalah $f(0,1)=1$.","Euler memberi $w_1=1+0.1(1)=1.1$.","Nilai eksak $e^{0.1}$ dapat digunakan sebagai pembanding galat."]},
    {title:"RK versus Euler",problem:"Mengapa metode Runge–Kutta dapat berorde tinggi tanpa menghitung turunan tinggi $f$ secara simbolik?",solution:["Metode mengambil beberapa sampel kemiringan dalam satu langkah.","Bobot dan lokasi stage dipilih agar ekspansi Taylor metode cocok sampai orde tertentu.","Informasi turunan tinggi direpresentasikan secara implisit melalui kombinasi stage."]},
    {title:"Langkah Adaptif",problem:"Apa yang dilakukan solver ketika estimator galat lokal melebihi toleransi?",solution:["Langkah biasanya ditolak.","Ukuran langkah diperkecil berdasarkan rasio toleransi terhadap error estimate.","Langkah dihitung ulang sebelum solusi diteruskan."]},
    {title:"Stiffness",problem:"Mengapa ODE stiff dapat memaksa metode eksplisit memakai $h$ sangat kecil walaupun solusi berubah perlahan?",solution:["Komponen cepat yang stabil membatasi stability region metode eksplisit.","Langkah yang terlalu besar menghasilkan instabilitas numerik.","Metode implicit dengan stability region lebih besar sering lebih cocok."]},
  ];
  if(unit==="6")return[
    {title:"Residual Sistem Linear",problem:"Untuk $A=\\begin{pmatrix}2&1\\\\1&3\\end{pmatrix}$, $b=(3,4)^T$, dan $x=(1,1)^T$, hitung residual.",solution:["Dihitung $Ax=(3,4)^T$.","Residual $r=b-Ax=(0,0)^T$.","Aproksimasi tersebut merupakan solusi eksak dalam aritmetika yang digunakan."]},
    {title:"Pivot Kecil",problem:"Mengapa membagi dengan pivot sangat kecil berisiko?",solution:["Kesalahan relatif pada numerator dapat diperbesar ketika dibagi dengan bilangan kecil.","Eliminasi berikutnya dapat menyebarkan galat tersebut.","Pivoting memilih pivot yang lebih aman bila tersedia."]},
    {title:"LU untuk Banyak Ruas Kanan",problem:"Mengapa $LU$ efisien jika matriks $A$ tetap tetapi $b$ berubah berkali-kali?",solution:["Faktorisasi mahal dilakukan sekali.","Setiap $b$ baru hanya memerlukan dua penyelesaian triangular.","Biaya total lebih rendah daripada mengulang eliminasi dari awal."]},
    {title:"Iterasi dan Residual",problem:"Dalam iterative solver, mengapa norma residual dipantau?",solution:["Residual mudah dihitung tanpa mengetahui solusi eksak.","Penurunannya memberi indikator pemenuhan persamaan.","Conditioning tetap perlu dipertimbangkan sebelum menyamakan residual kecil dengan error kecil."]},
  ];
  if(unit==="7")return[
    {title:"Least Squares Garis",problem:"Jelaskan tujuan mencari garis $y=a+bx$ dari sekumpulan data yang tidak kolinear.",solution:["Residual vertikal setiap data dibentuk.","Dipilih $a,b$ yang meminimalkan jumlah kuadrat residual.","Kondisi optimum menghasilkan sistem normal atau dapat dihitung dengan metode numerik yang lebih stabil."]},
    {title:"Basis Ortogonal",problem:"Mengapa basis ortogonal memudahkan aproksimasi least squares?",solution:["Koefisien proyeksi dapat dihitung hampir independen.","Cross terms pada inner product menghilang.","Conditioning sering lebih baik daripada basis monomial mentah."]},
    {title:"DFT",problem:"Apa makna koefisien Fourier diskret yang besar pada suatu indeks frekuensi?",solution:["Mode kompleks pada frekuensi tersebut mempunyai kontribusi kuat.","Amplitudo dan fase dapat dibaca dari koefisien.","Interpretasi harus mempertimbangkan sampling dan aliasing."]},
    {title:"FFT",problem:"Mengapa FFT penting meskipun hasil matematisnya sama dengan DFT langsung?",solution:["DFT langsung memerlukan orde kuadratik operasi.","FFT mengeksploitasi simetri akar kesatuan dan pemecahan masalah.","Untuk data besar, perbedaan biaya komputasi sangat signifikan."]},
  ];
  if(unit==="8")return[
    {title:"Power Iteration",problem:"Apa yang terjadi jika tebakan awal tidak mempunyai komponen pada eigenspace dominan?",solution:["Komponen dominan tidak dapat muncul melalui perkalian linear jika benar-benar nol.","Iterasi dapat menuju eigenspace lain atau gagal menunjukkan eigenvalue dominan.","Pemilihan awal atau perturbasi numerik mempengaruhi hasil."]},
    {title:"Residual Eigenpair",problem:"Bagaimana memeriksa kualitas pasangan aproksimasi $(\\lambda,v)$?",solution:["Hitung $r=Av-\\lambda v$.","Skalakan residual relatif terhadap norma $A$ dan $v$ bila perlu.","Residual kecil menunjukkan persamaan eigen dipenuhi dengan baik, tetapi sensitivitas spektral tetap perlu dipertimbangkan."]},
    {title:"SVD dan Rank",problem:"Mengapa singular values kecil berhubungan dengan near-rank-deficiency?",solution:["Singular values mengukur penguatan pada arah singular.","Nilai sangat kecil menunjukkan arah yang hampir dipetakan ke nol.","Pseudoinverse dapat memperbesar noise pada arah tersebut."]},
    {title:"Newton Sistem",problem:"Jelaskan satu iterasi Newton untuk $F:\\mathbb R^n\\to\\mathbb R^n$.",solution:["Evaluasi $F(x_k)$ dan Jacobian $J_F(x_k)$.","Selesaikan sistem linear $J_F(x_k)s_k=-F(x_k)$.","Perbarui $x_{k+1}=x_k+s_k$ atau gunakan damping bila diperlukan."]},
  ];
  return[
    {title:"Diskretisasi",problem:"Jelaskan langkah umum mengubah masalah diferensial kontinu menjadi sistem diskret pada "+title+".",solution:["Pilih grid atau mesh.","Ganti operator kontinu dengan aproksimasi diskret atau weak form.","Terapkan kondisi batas.","Selesaikan sistem dan lakukan pemeriksaan refinement."]},
    {title:"Grid Refinement",problem:"Mengapa solusi perlu dibandingkan pada dua atau lebih ukuran mesh?",solution:["Solusi eksak biasanya tidak diketahui.","Perubahan antar-mesh memberi informasi empiris tentang konvergensi.","Rasio perubahan dapat dibandingkan dengan orde teoritis metode."]},
    {title:"Stabilitas",problem:"Apa konsekuensi skema yang konsisten tetapi tidak stabil?",solution:["Galat kecil dapat diperbesar oleh evolusi diskret.","Refinement tidak menjamin hasil membaik.","Analisis stabilitas harus melengkapi consistency."]},
    {title:"Finite Element View",problem:"Apa perbedaan ide dasar finite difference dan finite element?",solution:["Finite difference mendekati operator diferensial pada node.","Finite element bekerja dari weak/variational formulation pada ruang basis lokal.","Keduanya menghasilkan sistem algebraik tetapi dari konstruksi berbeda."]},
  ];
}

function buildContent(unit:string,title:string,summary:string,keyIdeas:string[]):BookLessonContent{
  const ideas=keyIdeas.join(", ");
  return{
    intro:[
      summary,
      "Submateri ini berada dalam DMath Curriculum Analisis Numerik. Pembahasan dimulai dari persoalan komputasi, kemudian membedakan objek eksak, model diskret, algoritma, dan keluaran floating-point agar sumber galat dapat dilacak secara sistematis.",
      "Peta konsep halaman ini mencakup "+ideas+". Setiap metode tidak hanya dipelajari sebagai rumus, tetapi juga melalui asumsi, derivasi, algoritma, biaya komputasi, estimasi galat, conditioning, stabilitas, dan kriteria penghentian yang relevan.",
      "Analisis numerik selalu memerlukan dua sisi yang berjalan bersama: membangun aproksimasi dan menilai kualitas aproksimasi. Karena itu residual, error bound, convergence order, atau grid refinement digunakan untuk menguji hasil.",
      "Implementasi komputasional harus mempertimbangkan finite precision. Bentuk aljabar yang ekuivalen secara eksak dapat mempunyai perilaku numerik yang berbeda ketika dijalankan pada mesin.",
      "Visualisasi pada halaman digunakan untuk menunjukkan hubungan antara objek kontinu, titik/grid diskret, iterasi, dan galat. Bukti atau argumentasi formal tetap dipakai untuk menjelaskan mengapa metode bekerja dan kapan metode dapat gagal."
    ],
    notation:notationByUnit[unit]??notationByUnit["1"],
    formal:[],
    examples:examplesFor(unit,title,keyIdeas),
    exercises:[
      {prompt:"Jelaskan dengan bahasamu sendiri tujuan utama "+title+" dan bedakan objek eksak dari aproksimasi numeriknya.",hint:"Identifikasi input, output eksak, output komputasi, serta sumber galat.",answer:"Jawaban yang baik memisahkan model matematika, metode diskret, implementasi floating-point, dan ukuran kualitas hasil."},
      {prompt:"Tuliskan semua asumsi atau kondisi yang perlu diperiksa sebelum menggunakan metode utama pada submateri "+title+".",hint:"Periksa regularitas fungsi, struktur matriks, interval, ukuran langkah, atau kondisi batas sesuai topik.",answer:"Metode numerik hanya memiliki jaminan teoritis di bawah hipotesis tertentu; setiap syarat perlu dihubungkan dengan kesimpulan yang dijamin."},
      {prompt:"Buat satu contoh kecil terkait "+(keyIdeas[0]??title)+" yang dapat dihitung manual untuk satu atau dua langkah.",hint:"Gunakan angka sederhana agar fokus berada pada algoritma.",answer:"Contoh harus memperlihatkan keadaan awal, langkah komputasi, aproksimasi yang dihasilkan, dan satu pemeriksaan galat atau residual."},
      {prompt:"Identifikasi sedikitnya dua sumber galat yang mungkin muncul pada "+title+" dan jelaskan cara membedakannya.",hint:"Pertimbangkan modeling, truncation, iteration, discretization, dan round-off.",answer:"Sumber galat yang berbeda memerlukan diagnosis berbeda; misalnya refinement menguji discretization error sedangkan precision yang lebih tinggi dapat menguji round-off."},
      {prompt:"Rancang kriteria penghentian yang masuk akal untuk algoritma pada submateri ini.",hint:"Jangan hanya memakai satu selisih iterasi tanpa skala.",answer:"Gunakan kombinasi toleransi absolut/relatif, residual atau estimator galat, serta batas maksimum iterasi bila relevan."},
      {prompt:"Bandingkan dua strategi yang dapat digunakan untuk masalah pada "+title+" dan sebutkan trade-off akurasi, robustness, dan biaya komputasi.",hint:"Bandingkan metode sederhana yang robust dengan metode berorde lebih tinggi bila tersedia.",answer:"Perbandingan harus menyebut informasi yang diperlukan, biaya per langkah, kecepatan konvergensi, dan risiko kegagalan."},
      {prompt:"Jelaskan eksperimen numerik untuk menguji orde konvergensi yang diklaim oleh suatu metode pada "+title+".",hint:"Gunakan beberapa ukuran langkah atau iterasi dan bandingkan rasio error.",answer:"Hitung solusi pada refinement berurutan, ukur error atau surrogate error, lalu periksa apakah rasio konsisten dengan faktor orde teoritis."},
      {prompt:"Susun satu soal sintesis yang menggabungkan "+(keyIdeas.slice(0,2).join(" dan ")||"dua konsep utama")+" serta sertakan garis besar verifikasi hasilnya.",hint:"Tambahkan satu syarat yang memaksa pemeriksaan kestabilan atau galat.",answer:"Soal yang baik menghasilkan aproksimasi sekaligus meminta alasan bahwa hasil tersebut dapat dipercaya."}
    ].map((exercise)=>({...exercise,provenance:"dmath-original" as const})),
    mistakes:[
      "Melaporkan banyak digit tanpa menilai apakah digit tersebut benar-benar signifikan.",
      "Menganggap residual kecil selalu berarti error solusi kecil tanpa mempertimbangkan conditioning.",
      "Memperkecil ukuran langkah terus-menerus tanpa mempertimbangkan round-off dan cancellation.",
      "Menerapkan rumus tanpa memeriksa hipotesis regularitas, struktur matriks, atau kondisi stabilitas.",
      "Membandingkan metode hanya dari jumlah iterasi tanpa menghitung biaya per iterasi dan evaluasi fungsi.",
      "Mengambil satu hasil komputasi sebagai kebenaran tanpa refinement, bound, residual, atau validasi silang."
    ],
    connections:[
      "Analisis Real menyediakan limit, kontinuitas, Teorema Nilai Rata-rata, dan Taylor yang digunakan untuk menurunkan error bound.",
      "Aljabar Linear menyediakan ruang vektor, norma, nilai eigen, faktorisasi, dan conditioning untuk numerical linear algebra.",
      "Persamaan Diferensial menyediakan model kontinu yang kemudian didiskretkan oleh solver ODE, BVP, PDE, dan finite element.",
      "Kalkulus menyediakan diferensiasi, integrasi, Taylor, dan optimasi yang menjadi dasar berbagai algoritma.",
      "Pemrograman dan scientific computing diperlukan untuk mengimplementasikan algoritma secara efisien dan reproducible.",
      "Setiap metode terhubung oleh tema yang sama: consistency, stability, convergence, conditioning, dan error control."
    ]
  };
}

const generated:Record<string,BookLessonContent>={};
for(const chapter of numericalAnalysisBook.chapters){
  for(const section of chapter.sections){
    const content=buildContent(chapter.number,section.title,section.summary,section.keyIdeas);
    content.formal=coreFormal(section.slug,section.title,section.summary,chapter.number);
    generated[section.slug]=content;
  }
}

export const numericalAnalysisContent=generated;
