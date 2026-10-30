import type { BookLessonContent } from "@/data/book-content-types";

/** Authored truncation-error lesson: Burden–Faires (2011), Atkinson (1989). */
export const truncationErrorContent:BookLessonContent = {
  "intro": [
    "Galat pemotongan muncul ketika prosedur matematika yang secara eksak memerlukan proses tak hingga diganti dengan proses berhingga. Mengganti deret Taylor oleh polinom, turunan oleh selisih hingga, atau lintasan solusi persamaan diferensial oleh langkah Euler adalah tiga bentuk yang berbeda dari gagasan tersebut. Setiap penggantian meninggalkan sisa yang harus dihitung atau dibatasi, bukan sekadar disebut kecil.",
    "Besarnya sisa bergantung pada regularitas fungsi, posisi titik evaluasi, dan ukuran langkah. Untuk menguji klaim orde, halaman ini membedakan persamaan galat eksak, batas atas yang sah, dan notasi asimtotik. Perhitungan menggunakan aritmetika real eksak sebelum pembulatan, kecuali contoh terakhir yang secara eksplisit memperkenalkan model galat pembulatan ilustratif.",
    "Dalam integrasi numerik persamaan diferensial, galat satu langkah yang dimulai dari nilai eksak disebut galat pemotongan lokal. Galat global berbeda karena kesalahan yang telah terjadi pada langkah sebelumnya ikut dipropagasikan. Perbedaan ini menjelaskan mengapa galat lokal Euler berorde dua sedangkan galat global pada interval waktu tetap umumnya hanya berorde satu.",
    "Rujukan: Richard L. Burden dan J. Douglas Faires, Numerical Analysis, edisi kesembilan (Brooks/Cole, 2011), pembahasan Taylor, diferensiasi numerik, dan Euler; Kendall Atkinson, An Introduction to Numerical Analysis, edisi kedua (Wiley, 1989), bab galat interpolasi dan diferensiasi. Hipotesis setiap hasil dinyatakan di bawah; orde asimtotik bukan jaminan kesalahan mesin untuk semua ukuran langkah."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Galat Pemotongan Deret Taylor",
      "statement": "Misalkan $f$ mempunyai turunan sampai orde $n$ di sekitar $x$ dan $P_n(x+h)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x)}{k!}h^k$. Galat pemotongan deret Taylor pada $x+h$ didefinisikan sebagai $R_n(x,h)=f(x+h)-P_n(x+h)$. Galat ini ditentukan oleh suku-suku yang diabaikan, bukan oleh banyaknya digit dalam representasi bilangan.",
      "explanation": "Definisi ini berlaku sebagai selisih eksak. Bentuk dan batas sisa memerlukan asumsi turunan tambahan; sekadar menulis deret tidak membuktikan bahwa sisanya menuju nol."
    },
    {
      "kind": "definition",
      "title": "Galat Diskretisasi Turunan",
      "statement": "Untuk $h>0$, turunan maju $D_h^+f(x)=\\frac{f(x+h)-f(x)}{h}$ dan turunan pusat $D_h^0f(x)=\\frac{f(x+h)-f(x-h)}{2h}$ merupakan aproksimasi $f'(x)$. Galat diskretisasi masing-masing ialah $D_h^+f(x)-f'(x)$ dan $D_h^0f(x)-f'(x)$, asalkan semua nilai fungsi dan turunannya terdefinisi.",
      "explanation": "Turunan maju dan pusat tidak mempunyai orde yang sama pada fungsi halus. Perhitungan di bawah memisahkan galat diskretisasi dari galat pembulatan."
    },
    {
      "kind": "definition",
      "title": "Orde Galat Asimtotik",
      "statement": "Untuk $p>0$, pernyataan $E(h)=O(h^p)$ ketika $h\\to0^+$ berarti terdapat $C>0$ dan $h_0>0$ sehingga $|E(h)|\\le Ch^p$ untuk setiap $0<h<h_0$. Pernyataan $E(h)=o(h^p)$ berarti $\\lim_{h\\to0^+}|E(h)|/h^p=0$. Kedua pernyataan tidak menyebut konstanta atau toleransi numerik secara otomatis.",
      "explanation": "Batas Big-O dapat benar sekaligus untuk beberapa pangkat lebih kecil. Klaim orde tepat memerlukan informasi tambahan tentang koefisien galat dominan."
    },
    {
      "kind": "definition",
      "title": "Galat Pemotongan Lokal dan Galat Global Euler",
      "statement": "Untuk masalah nilai awal $y'=f(t,y)$, $y(t_0)=y_0$, dengan langkah $h>0$, metode Euler memberi $w_{n+1}=w_n+hf(t_n,w_n)$ dan $t_n=t_0+nh$. Galat pemotongan lokal tanpa normalisasi didefinisikan oleh $\\tau_{n+1}=y(t_{n+1})-y(t_n)-hf(t_n,y(t_n))$. Galat global pada node ke-$n$ ialah $e_n=y(t_n)-w_n$.",
      "explanation": "Sebagian buku mendefinisikan galat lokal yang dinormalisasi sebagai tau dibagi h. Halaman ini selalu menggunakan definisi tanpa normalisasi, sehingga orde lokal Euler adalah O(h²)."
    },
    {
      "kind": "theorem",
      "title": "Rumus Integral Sisa Taylor",
      "statement": "Misalkan $n\\ge0$, $h>0$, dan $f\\in C^{n+1}([x,x+h])$. Berlaku $f(x+h)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x)}{k!}h^k+\\frac1{n!}\\int_0^h(h-s)^n f^{(n+1)}(x+s)\\,ds$. Jika $|f^{(n+1)}(t)|\\le M$ pada interval tersebut, maka $|R_n(x,h)|\\le Mh^{n+1}/(n+1)!$.",
      "proof": [
        "Diketahui $f\\in C^{n+1}([x,x+h])$ dan $h>0$. Untuk $n=0$, Teorema Dasar Kalkulus memberikan $f(x+h)-f(x)=\\int_0^h f'(x+s)\\,ds$. Ini tepat bentuk integral sisa dengan faktor $1/0!$ dan pangkat nol.",
        "Andaikan identitas berlaku pada orde $n-1$ untuk $n\\ge1$. Sisa saat itu adalah $\\frac1{(n-1)!}\\int_0^h(h-s)^{n-1}f^{(n)}(x+s)\\,ds$. Integrasi parsial dengan $u=f^{(n)}(x+s)$ dan $dv=(h-s)^{n-1}ds$ menghasilkan $\\frac{h^n}{n!}f^{(n)}(x)+\\frac1{n!}\\int_0^h(h-s)^n f^{(n+1)}(x+s)\\,ds$. Suku batas di $s=h$ lenyap karena $(h-s)^n=0$. Ini menambah tepat suku Taylor orde $n$ dan membuktikan identitas secara induksi.",
        "Untuk batasnya, ketaksamaan segitiga dan $|f^{(n+1)}(x+s)|\\le M$ memberikan $|R_n|\\le\\frac{M}{n!}\\int_0^h(h-s)^n\\,ds=\\frac{M}{n!}\\frac{h^{n+1}}{n+1}=\\frac{Mh^{n+1}}{(n+1)!}$. Batas ini sah untuk setiap $h$ yang seluruh intervalnya memenuhi hipotesis, bukan hanya secara asimtotik. $\\square$"
      ],
      "explanation": "Bentuk integral memungkinkan batas eksplisit tanpa mengasumsikan bahwa deret Taylor tak hingga sama dengan fungsi."
    },
    {
      "kind": "proposition",
      "title": "Galat Turunan Maju Berorde Satu",
      "statement": "Jika $f\\in C^2([x,x+h])$, $h>0$, dan $|f''(t)|\\le M_2$ pada interval tersebut, maka $|D_h^+f(x)-f'(x)|\\le M_2h/2$. Jika juga $f\\in C^3$ dan $|f'''|\\le M_3$ di interval yang sama, berlaku $D_h^+f(x)-f'(x)=\\frac h2 f''(x)+r_h$ dengan $|r_h|\\le M_3h^2/6$.",
      "proof": [
        "Gunakan rumus integral Taylor pada orde satu: $f(x+h)=f(x)+hf'(x)+\\int_0^h(h-s)f''(x+s)\\,ds$. Kurangkan $f(x)$ lalu bagi dengan $h>0$. Selisih terhadap $f'(x)$ menjadi $\\frac1h\\int_0^h(h-s)f''(x+s)\\,ds$.",
        "Ambil nilai mutlak dan gunakan $|f''|\\le M_2$. Diperoleh $|D_h^+f(x)-f'(x)|\\le\\frac{M_2}{h}\\int_0^h(h-s)\\,ds=M_2h/2$. Ini membuktikan batas berorde satu dengan konstanta yang eksplisit.",
        "Untuk pernyataan lebih tajam, terapkan Taylor orde dua: $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+R_2$ dengan $|R_2|\\le M_3h^3/6$. Pembagian dengan $h$ memberi $r_h=R_2/h$ dan $|r_h|\\le M_3h^2/6$. Suku dominan hilang hanya jika $f''(x)=0$ atau ada struktur khusus. $\\square$"
      ],
      "explanation": "Pengecilan h dua kali biasanya membagi galat dominan dengan dua, selama suku berorde satu memang tidak nol dan pembulatan belum mendominasi."
    },
    {
      "kind": "theorem",
      "title": "Galat Turunan Pusat Berorde Dua",
      "statement": "Jika $h>0$, $f\\in C^3([x-h,x+h])$, dan $|f'''(t)|\\le M_3$ pada interval tersebut, maka $|D_h^0f(x)-f'(x)|\\le M_3h^2/6$. Secara khusus, turunan pusat eksak untuk setiap polinom berderajat paling tinggi dua.",
      "proof": [
        "Diketahui regularitas sampai turunan ketiga pada interval simetris. Teorema Taylor dengan sisa Lagrange memberikan $f(x+h)=f(x)+hf'(x)+\\frac{h^2}{2}f''(x)+\\frac{h^3}{6}f'''(\\xi_+)$ untuk suatu $\\xi_+\\in(x,x+h)$. Untuk titik di kiri diperoleh $f(x-h)=f(x)-hf'(x)+\\frac{h^2}{2}f''(x)-\\frac{h^3}{6}f'''(\\xi_-)$ dengan $\\xi_-\\in(x-h,x)$.",
        "Kurangkan kedua persamaan. Suku konstanta dan suku turunan kedua saling menghapus; hasilnya $f(x+h)-f(x-h)=2hf'(x)+\\frac{h^3}{6}\\big(f'''(\\xi_+)+f'''(\\xi_-)\\big)$. Karena $2h>0$, pembagian menghasilkan $D_h^0f(x)-f'(x)=\\frac{h^2}{12}\\big(f'''(\\xi_+)+f'''(\\xi_-)\\big)$.",
        "Dari batas $M_3$ diperoleh $|D_h^0f(x)-f'(x)|\\le\\frac{h^2}{12}(M_3+M_3)=M_3h^2/6$. Untuk polinom berderajat paling tinggi dua, turunan ketiganya identik nol; identitas yang sama menunjukkan galat nol untuk semua $h$ dengan titik evaluasi terdefinisi. $\\square$"
      ],
      "explanation": "Simetri menghilangkan suku galat orde pertama. Keunggulan ini bukan jaminan terhadap pembatalan digit saat h sangat kecil."
    },
    {
      "kind": "proposition",
      "title": "Batas Galat Pemotongan Lokal Euler",
      "statement": "Misalkan solusi eksak $y\\in C^2([t_n,t_{n+1}])$ memenuhi $y'=f(t,y)$ dan $|y''(t)|\\le M$ di interval tersebut. Untuk galat lokal tanpa normalisasi $\\tau_{n+1}$ sebagaimana didefinisikan di atas, berlaku $|\\tau_{n+1}|\\le Mh^2/2$.",
      "proof": [
        "Titik awal pada definisi galat lokal adalah nilai eksak $y(t_n)$, bukan nilai komputasi $w_n$. Dengan rumus Taylor orde satu di $t_n$, $y(t_n+h)=y(t_n)+hy'(t_n)+\\int_0^h(h-s)y''(t_n+s)\\,ds$.",
        "Persamaan diferensial memberi $y'(t_n)=f(t_n,y(t_n))$. Mengurangkan $y(t_n)+hf(t_n,y(t_n))$ dari kedua ruas menghasilkan identitas $\\tau_{n+1}=\\int_0^h(h-s)y''(t_n+s)\\,ds$.",
        "Gunakan batas turunan kedua dan integralkan bobot positif: $|\\tau_{n+1}|\\le M\\int_0^h(h-s)\\,ds=Mh^2/2$. Batas ini tidak mengandung galat langkah sebelumnya, karena pengukuran lokal selalu dimulai dari solusi eksak. $\\square$"
      ],
      "explanation": "Jika buku lain membagi tau dengan h, batas yang dilaporkan menjadi Mh/2. Kedua konvensi tidak boleh dicampur."
    },
    {
      "kind": "theorem",
      "title": "Batas Galat Global Euler di Interval Tetap",
      "statement": "Misalkan $y\\in C^2([t_0,T])$ menyelesaikan $y'=f(t,y)$, $y(t_0)=y_0$, dan $|y''|\\le M$. Andaikan $f(t,\\cdot)$ Lipschitz dengan konstanta $L\\ge0$ pada daerah yang memuat semua $y(t_n)$ dan $w_n$, serta Euler dimulai dengan $w_0=y_0$ dan $t_n=t_0+nh\\le T$. Jika $L>0$, maka $|e_n|\\le\\frac{Mh}{2L}((1+Lh)^n-1)$; jika $L=0$, maka $|e_n|\\le nMh^2/2$.",
      "proof": [
        "Tuliskan identitas solusi eksak $y(t_{n+1})=y(t_n)+hf(t_n,y(t_n))+\\tau_{n+1}$ dan langkah Euler $w_{n+1}=w_n+hf(t_n,w_n)$. Pengurangan menghasilkan $e_{n+1}=e_n+h(f(t_n,y(t_n))-f(t_n,w_n))+\\tau_{n+1}$.",
        "Ketaksamaan segitiga, hipotesis Lipschitz, dan batas galat lokal memberi $|e_{n+1}|\\le(1+Lh)|e_n|+Mh^2/2$. Karena $e_0=0$, iterasi ketaksamaan sebanyak $n$ kali menghasilkan $|e_n|\\le(Mh^2/2)\\sum_{j=0}^{n-1}(1+Lh)^j$. Tidak diperlukan asumsi tanda dari galat.",
        "Untuk $L>0$, jumlah geometri sama dengan $((1+Lh)^n-1)/(Lh)$, sehingga batas pertama diperoleh. Untuk $L=0$, setiap suku dalam jumlah sama dengan satu dan batasnya $nMh^2/2$. Karena $nh\\le T-t_0$, kedua bentuk adalah $O(h)$ pada interval waktu tetap. Hipotesis Lipschitz mencegah penguatan galat yang tidak terkendali pada langkah berikutnya. $\\square$"
      ],
      "explanation": "Galat lokal O(h²) terakumulasi dalam sekitar 1/h langkah. Untuk menjamin orde global, perlu mengendalikan propagasi melalui sifat Lipschitz atau kestabilan lain."
    },
    {
      "kind": "proposition",
      "title": "Ekstrapolasi Richardson Menghapus Galat Dominan",
      "statement": "Misalkan $p,q>0$, $r>1$, dan $A(h)=\\ell+ch^p+R(h)$ untuk $0<h<h_0$, dengan $|R(h)|\\le Ch^{p+q}$. Definisikan $Q(h)=\\frac{r^p A(h/r)-A(h)}{r^p-1}$. Untuk $0<h<h_0$, berlaku $|Q(h)-\\ell|\\le \\frac{C(1+r^{-q})}{r^p-1}h^{p+q}$.",
      "proof": [
        "Diketahui ekspansi galat untuk dua ukuran langkah $h$ dan $h/r$. Substitusi menghasilkan $r^p A(h/r)=r^p\\ell+ch^p+r^pR(h/r)$, sedangkan $A(h)=\\ell+ch^p+R(h)$.",
        "Pengurangan kedua ekspresi menghapus suku $ch^p$ secara tepat. Pembagian dengan $r^p-1>0$ memberikan $Q(h)-\\ell=[r^pR(h/r)-R(h)]/(r^p-1)$. Rumus ini adalah identitas aljabar, bukan hanya pendekatan.",
        "Batas sisa memberikan $|r^pR(h/r)|\\le r^p C(h/r)^{p+q}=Cr^{-q}h^{p+q}$ dan $|R(h)|\\le Ch^{p+q}$. Ketaksamaan segitiga membuktikan batas yang dinyatakan. Peningkatan orde berlaku jika ekspansi galat memang benar; data yang telah dibulatkan tidak otomatis memenuhi model tersebut. $\\square$"
      ],
      "explanation": "Richardson menghilangkan koefisien galat dominan yang sama pada dua resolusi. Menggabungkan dua hasil acak tanpa ekspansi asimtotik tidak mempunyai jaminan yang sama."
    }
  ],
  "examples": [
    {
      "title": "Sisa Taylor eksponensial di titik 0,2",
      "forDefinition": "Galat Pemotongan Deret Taylor",
      "problem": "Dekati $e^{0.2}$ dengan Taylor derajat dua di nol, hitung galat aktual, dan berikan batas yang dibuktikan.",
      "solution": [
        "Diketahui $f(x)=e^x$, titik pusat $0$, $h=0.2$, dan derajat $n=2$. Turunan ke-$k$ semuanya $e^x$ dan bernilai satu di nol. Polinomnya $P_2(0.2)=1+0.2+0.2^2/2=1.22$.",
        "Nilai acuan $e^{0.2}\\approx1.22140275816$, sehingga sisa bertanda $R_2=e^{0.2}-1.22\\approx0.00140275816$. Karena $f'''(t)=e^t\\le e^{0.2}$ untuk $0\\le t\\le0.2$, Teorema Sisa Taylor memberi $|R_2|\\le e^{0.2}(0.2)^3/6\\approx0.00162853701$.",
        "Pemeriksaan menunjukkan $0.00140275816<0.00162853701$. Galat positif karena seluruh suku deret eksponensial berikutnya positif pada $h>0$. Batasnya lebih besar daripada galat aktual, sebagaimana mestinya untuk suatu estimasi atas."
      ]
    },
    {
      "title": "Turunan maju fungsi kuadrat",
      "forDefinition": "Galat Diskretisasi Turunan",
      "problem": "Untuk $f(x)=x^2$ di $x=1$, bandingkan turunan maju pada $h=0.1$ dan $h=0.05$ dengan turunan eksak.",
      "solution": [
        "Diketahui $f'(x)=2x$, sehingga $f'(1)=2$. Dengan $h=0.1$, diperoleh $D_{0.1}^+f(1)=[(1.1)^2-1]/0.1=(1.21-1)/0.1=2.1$. Galat bertandanya $2.1-2=0.1$.",
        "Dengan $h=0.05$, diperoleh $D_{0.05}^+f(1)=[(1.05)^2-1]/0.05=(1.1025-1)/0.05=2.05$. Galat bertandanya $0.05$.",
        "Secara aljabar, $D_h^+f(1)=((1+h)^2-1)/h=2+h$, sehingga galat tepat sama dengan $h$ untuk setiap $h>0$. Rasio galat $0.1/0.05=2$ mengonfirmasi orde satu tanpa memerlukan pendekatan desimal tambahan."
      ]
    },
    {
      "title": "Makna orde tepat pada turunan pusat",
      "forDefinition": "Orde Galat Asimtotik",
      "problem": "Untuk $f(x)=x^3$ di $x=1$, tunjukkan bahwa galat turunan pusat berorde tepat dua.",
      "solution": [
        "Diketahui $f'(1)=3$. Ekspansi kubik eksak memberikan $(1+h)^3-(1-h)^3=6h+2h^3$. Pembagian dengan $2h$ menghasilkan $D_h^0f(1)=3+h^2$.",
        "Galat bertanda $E(h)=h^2$ memenuhi $|E(h)|\\le1\\cdot h^2$ untuk setiap $h>0$, sehingga $E(h)=O(h^2)$. Akan tetapi $|E(h)|/h^3=1/h$ tidak terbatas ketika $h\\to0^+$; karena itu $E(h)$ bukan $O(h^3)$.",
        "Pada $h=0.1$ galatnya $0.01$, sedangkan pada $h=0.05$ galatnya $0.0025$. Rasio empat sesuai $E(h)/E(h/2)=4$ dan menunjukkan orde tepat dua, bukan sekadar label tanpa perhitungan."
      ]
    },
    {
      "title": "Galat lokal dan global Euler tidak sama",
      "forDefinition": "Galat Pemotongan Lokal dan Galat Global Euler",
      "problem": "Untuk $y'=y$, $y(0)=1$, dan $h=0.1$, hitung galat lokal pertama dan galat global setelah dua langkah.",
      "solution": [
        "Solusi eksak ialah $y(t)=e^t$. Galat lokal pertama, dengan nilai awal eksak $y(0)=1$, adalah $\\tau_1=e^{0.1}-1-0.1\\approx0.00517091808$. Langkah Euler memberi $w_1=1+0.1=1.1$ dan $w_2=1.1+0.1(1.1)=1.21$.",
        "Pada $t_2=0.2$, nilai eksak $y(0.2)=e^{0.2}\\approx1.22140275816$, sehingga galat global $e_2=e^{0.2}-1.21\\approx0.01140275816$. Galat lokal kedua harus dimulai dari $y(0.1)=e^{0.1}$ dan bernilai $\\tau_2=e^{0.1}(e^{0.1}-1.1)\\approx0.00571474828$.",
        "Identitas propagasi $e_2=(1+h)e_1+\\tau_2$ menjelaskan mengapa galat global dua langkah tidak sama dengan $\\tau_2$. Galat langkah pertama ikut diperbesar oleh faktor $1.1$, lalu ditambah galat lokal langkah kedua."
      ]
    },
    {
      "title": "Pemotongan Taylor sinus dengan suku genap nol",
      "problem": "Dekati $\\sin(0.3)$ dengan $P_3(x)=x-x^3/6$ dan berikan batas sisa yang lebih tajam daripada batas turunan keempat.",
      "solution": [
        "Diketahui $f(x)=\\sin x$. Turunan keempat di nol bernilai $\\sin0=0$, sehingga polinom Taylor derajat empat tetap $P_4(x)=x-x^3/6$. Pada $x=0.3$ nilainya $0.3-0.027/6=0.2955$.",
        "Gunakan Teorema Taylor orde empat, bukan berhenti pada orde tiga. Turunan kelima ialah $\\cos x$, dengan $|\\cos x|\\le1$ pada $[0,0.3]$. Karena itu $|\\sin(0.3)-0.2955|\\le(0.3)^5/5!=0.00243/120=0.00002025$.",
        "Nilai acuan $\\sin(0.3)\\approx0.29552020666$ memberi galat aktual sekitar $0.00002020666$, yang memang lebih kecil daripada $0.00002025$. Pemilihan orde Taylor yang memanfaatkan koefisien nol menghasilkan batas yang lebih informatif."
      ]
    },
    {
      "title": "Turunan pusat fungsi eksponensial",
      "problem": "Perkirakan $f'(0)$ untuk $f(x)=e^x$ menggunakan turunan pusat dengan $h=0.2$ dan periksa batas galatnya.",
      "solution": [
        "Diketahui $f'(0)=1$ dan $D_{0.2}^0f(0)=[e^{0.2}-e^{-0.2}]/0.4=\\sinh(0.2)/0.2\\approx1.00668001271$. Galat aktualnya sekitar $0.00668001271$.",
        "Turunan ketiga $f'''(x)=e^x$ memenuhi $|f'''(x)|\\le e^{0.2}$ pada $[-0.2,0.2]$. Teorema galat turunan pusat memberi batas $e^{0.2}(0.2)^2/6\\approx0.00814268505$.",
        "Galat aktual berada di bawah batas tersebut. Nilai ini juga menunjukkan bahwa pernyataan berorde dua memerlukan konstanta yang bergantung pada turunan ketiga, bukan hanya angka $h^2$ tanpa faktor."
      ]
    },
    {
      "title": "Richardson pada turunan maju kuadrat",
      "problem": "Gunakan dua langkah untuk menghilangkan galat dominan turunan maju $f(x)=x^2$ di $x=1$.",
      "solution": [
        "Diketahui $D_h^+f(1)=2+h$. Untuk $h=0.2$ diperoleh $A(0.2)=2.2$, sedangkan untuk $h/2=0.1$ diperoleh $A(0.1)=2.1$. Koefisien galat dominan berorde $p=1$.",
        "Ekstrapolasi Richardson dengan $r=2$ memberikan $Q(0.2)=[2A(0.1)-A(0.2)]/(2-1)=2(2.1)-2.2=2$. Suku $+h$ menghilang karena $2(h/2)-h=0$.",
        "Nilai yang diperoleh tepat sama dengan $f'(1)=2$. Keeksakan ini khusus terjadi karena tidak ada sisa orde lebih tinggi untuk fungsi kuadrat; pada fungsi umum Richardson hanya menjamin peningkatan orde di bawah hipotesis ekspansi galat."
      ]
    },
    {
      "title": "Akumulasi galat Euler untuk ruas kanan tanpa y",
      "problem": "Selesaikan numerik $y'=t$, $y(0)=0$ sampai $t=1$ dengan empat langkah Euler dan hitung galat global eksak.",
      "solution": [
        "Solusi eksak memenuhi $y(t)=t^2/2$. Dengan $h=1/4$, titik grid ialah $t_k=k/4$. Euler menggunakan $w_{k+1}=w_k+h t_k$ dan $w_0=0$.",
        "Empat penambahan berturut-turut menghasilkan $w_1=0$, $w_2=1/16$, $w_3=3/16$, dan $w_4=6/16=0.375$. Nilai eksak $y(1)=1/2$, sehingga galat global $e_4=1/2-3/8=1/8=0.125$.",
        "Karena $y''(t)=1$, setiap galat lokal tanpa normalisasi sama dengan $h^2/2=1/32$. Ruas kanan $f(t,y)=t$ tidak bergantung pada $y$, sehingga $L=0$ dan galat global adalah jumlah empat galat lokal: $4/32=1/8$."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "TR-01. Untuk $f(x)=e^x$, tentukan Taylor derajat dua di nol pada $x=0.1$, galat aktual, dan batas sisa yang sah.",
      "hint": "Gunakan turunan ketiga maksimum pada interval [0,0.1] dan rumus integral sisa.",
      "answer": "Diketahui $f(x)=e^x$, pusat $x_0=0$, orde $n=2$, dan $h=0.1$. Karena semua turunan $e^x$ bernilai satu di nol, $P_2(0.1)=1+0.1+(0.1)^2/2=1.105$. Nilai eksak $e^{0.1}\\approx1.10517018599$ memberikan galat bertanda $R_2=e^{0.1}-1.105\\approx0.00017018599$. Hipotesis Taylor terpenuhi karena $e^x$ mempunyai turunan kontinu pada seluruh real. Untuk $0\\le t\\le0.1$, turunan ketiga dibatasi $M=e^{0.1}$. Oleh karena itu $|R_2|\\le e^{0.1}(0.1)^3/3!\\approx0.00018419515$. Perbandingan $0.00017018599<0.00018419515$ memverifikasi batas. Nilai 1.105 adalah aproksimasi, bukan pembulatan yang dijamin benar sampai enam desimal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-02. Untuk $f(x)=x^3$ di $x=2$, hitung turunan maju dengan $h=0.2$ dan $h=0.1$ serta tentukan rumus galat eksaknya.",
      "hint": "Ekspansikan (2+h)^3 sebelum mengganti nilai h.",
      "answer": "Diketahui $f(x)=x^3$ dan $f'(2)=3(2)^2=12$. Turunan maju ialah $D_h^+f(2)=((2+h)^3-8)/h$. Ekspansi kubik memberikan $(2+h)^3=8+12h+6h^2+h^3$, sehingga $D_h^+f(2)=12+6h+h^2$. Untuk $h=0.2$, nilainya $12+1.2+0.04=13.24$ dengan galat $1.24$. Untuk $h=0.1$, nilainya $12+0.6+0.01=12.61$ dengan galat $0.61$. Rasio galat $1.24/0.61\\approx2.0328$, mendekati dua saat langkah diperkecil karena suku dominannya $6h$. Rumus eksak juga membuktikan $E(h)=O(h)$ dan menunjukkan mengapa rasio pada langkah berhingga tidak harus tepat dua.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-03. Untuk $f(x)=x^3$ di $x=2$, tentukan turunan pusat dengan $h=0.2$ dan $h=0.1$; bandingkan dengan turunan maju.",
      "hint": "Gunakan simetri (2+h)^3-(2-h)^3.",
      "answer": "Diketahui turunan eksak $f'(2)=12$. Dengan identitas kubik, $(2+h)^3-(2-h)^3=24h+2h^3$, sehingga $D_h^0f(2)=12+h^2$. Pada $h=0.2$, hasilnya $12.04$ dan galat $0.04$; pada $h=0.1$, hasilnya $12.01$ dan galat $0.01$. Rasio galat adalah empat, sesuai orde dua. Sebagai pembanding, turunan maju pada langkah yang sama menghasilkan galat $1.24$ dan $0.61$. Perbedaan bukan karena fungsi kubik memiliki turunan tak kontinu, melainkan karena kombinasi simetris menghapus suku turunan kedua. Turunan ketiga $f'''=6$ membuat batas $M_3h^2/6=h^2$ tercapai tepat.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-04. Buktikan bahwa galat turunan pusat untuk $f(x)=x^3$ di $x=1$ merupakan $O(h^2)$ tetapi bukan $O(h^3)$ saat $h\\to0^+$.",
      "hint": "Periksa definisi Big-O dengan membagi galat oleh h² dan h³.",
      "answer": "Diketahui $f'(1)=3$ dan $D_h^0f(1)=3+h^2$ dari pengembangan dua kubik. Dengan demikian $E(h)=D_h^0f(1)-f'(1)=h^2$ untuk setiap $h>0$. Untuk membuktikan $E(h)=O(h^2)$, pilih $C=1$ dan $h_0=1$; untuk seluruh $0<h<1$ berlaku $|E(h)|=h^2\\le Ch^2$. Sebaliknya, andaikan $E(h)=O(h^3)$. Terdapat $C>0$ dan $h_0>0$ sehingga $h^2\\le Ch^3$ untuk semua $0<h<h_0$, yang setara dengan $1/h\\le C$. Ambil $h<\\min(h_0,1/(C+1))$; diperoleh $1/h>C+1>C$, kontradiksi. Kedua arah pemeriksaan menunjukkan orde dua adalah orde tepat pada contoh ini.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-05. Untuk $y'=y$, $y(0)=1$, gunakan Euler dengan $h=0.5$ sampai $t=1$. Hitung galat global dan batas teoritisnya.",
      "hint": "Gunakan L=1, M=e pada [0,1], lalu rumus batas global Euler.",
      "answer": "Solusi eksak adalah $y(t)=e^t$, sehingga $y(1)=e\\approx2.71828182846$. Euler dengan $h=0.5$ memberi $w_0=1$, $w_1=1+0.5(1)=1.5$, dan $w_2=1.5+0.5(1.5)=2.25$. Galat global aktual $e_2=e-2.25\\approx0.46828182846$. Fungsi $f(t,y)=y$ bersifat Lipschitz dalam $y$ dengan $L=1$ dan $|y''(t)|=e^t\\le e=M$ pada $[0,1]$. Batas teorema untuk $n=2$ ialah $\\frac{e(0.5)}{2}((1+0.5)^2-1)=\\frac e4(2.25-1)=0.3125e\\approx0.84946307139$. Galat aktual lebih kecil daripada batas tersebut. Batas ini konservatif dan tidak boleh diperlakukan sebagai nilai galat eksak.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-06. Untuk $y'=t$, $y(0)=0$, hitung Euler pada [0,1] dengan $N=5$ langkah dan turunkan galat global untuk sembarang N.",
      "hint": "Jumlahkan progresi aritmetika t_k=k/N.",
      "answer": "Solusi eksak adalah $y(t)=t^2/2$, sehingga $y(1)=1/2$. Untuk $N$ langkah, $h=1/N$ dan $t_k=kh$. Iterasi Euler $w_{k+1}=w_k+ht_k$ menghasilkan $w_N=h^2\\sum_{k=0}^{N-1}k=h^2N(N-1)/2=(N-1)/(2N)$. Pada $N=5$, diperoleh $h=0.2$ dan $w_5=4/10=0.4$. Galat global $e_N=1/2-(N-1)/(2N)=1/(2N)=h/2$, sehingga pada lima langkah galatnya $0.1$. Karena $y''=1$, galat lokal tiap langkah adalah $h^2/2$, dan jumlah $N$ galat lokal memberi $Nh^2/2=h/2$. Rumus ini memverifikasi orde global satu dengan konstanta eksak.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-07. Terapkan Richardson pada turunan maju $f(x)=x^3$ di $x=1$ dengan langkah h=0.2 dan h/2. Hitung galat sisa.",
      "hint": "Bentuk A(h)=3+3h+h² dan gunakan p=1, r=2.",
      "answer": "Diketahui $f'(1)=3$. Dari ekspansi $(1+h)^3$, turunan maju adalah $A(h)=((1+h)^3-1)/h=3+3h+h^2$. Pada $h=0.2$ diperoleh $A(0.2)=3+0.6+0.04=3.64$, sedangkan pada $h/2=0.1$ diperoleh $A(0.1)=3+0.3+0.01=3.31$. Karena suku dominan berorde satu, rumus Richardson ialah $Q(h)=2A(h/2)-A(h)=2(3.31)-3.64=2.98$. Galat bertanda $Q(h)-3=-0.02$. Secara simbolik, $2[3+3h/2+h^2/4]-[3+3h+h^2]=3-h^2/2$, sehingga galatnya tepat $-h^2/2=-0.02$. Penghilangan suku $3h$ meningkatkan orde dari satu menjadi dua, tetapi tidak menjadikan hasil eksak untuk kubik.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "TR-08. Pada model ilustratif batas galat $B(h)=h+10^{-4}/h$, $h>0$, tentukan langkah optimal dan bandingkan tiga ukuran langkah.",
      "hint": "Turunkan B dan periksa turunan kedua serta nilai pada 0.1, 0.01, 0.001.",
      "answer": "Diketahui $B(h)=h+10^{-4}h^{-1}$ untuk $h>0$. Suku pertama merepresentasikan batas pemotongan berorde satu dan suku kedua model pembesaran pembulatan ketika h terlalu kecil; ini bukan identitas galat untuk setiap algoritma. Turunannya $B'(h)=1-10^{-4}/h^2$, sehingga titik stasioner positif memenuhi $h^2=10^{-4}$, yaitu $h=0.01$. Turunan kedua $B''(h)=2\\cdot10^{-4}/h^3>0$ untuk $h>0$, dan $B(h)\\to\\infty$ ketika $h\\to0^+$ maupun $h\\to\\infty$; titik tersebut adalah minimum global. Nilainya $B(0.1)=0.1+0.001=0.101$, $B(0.01)=0.01+0.01=0.02$, dan $B(0.001)=0.001+0.1=0.101$. Contoh ini membuktikan bahwa memperkecil h terus-menerus tidak selalu memperkecil batas galat total.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
