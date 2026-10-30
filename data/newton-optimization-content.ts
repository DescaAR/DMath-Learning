import type { BookLessonContent } from "@/data/book-content-types";

/** Authored Newton optimization: Nocedal–Wright (2006); Boyd–Vandenberghe (2004). */
export const newtonOptimizationContent:BookLessonContent = {
  "intro": [
    "Metode Newton untuk optimisasi mencari titik stasioner fungsi multivariabel dengan memanfaatkan informasi kelengkungan, bukan sekadar arah gradien. Pada setiap iterasi, gradien dan Hessian membentuk model kuadratik lokal. Titik minimum model itu menjadi usulan langkah, tetapi hanya jika Hessian positif definit. Tanpa pemeriksaan tanda Hessian, langkah Newton bahkan dapat menuju maksimum.",
    "Contoh sederhana ialah $f(x,y)=(x-1)^2+2(y+1)^2$. Dari $(3,1)$, model kuadratik Newton tepat sama dengan fungsi aslinya sehingga satu langkah menghasilkan $(1,-1)$. Sebaliknya, pada $f(x)=-x^2$ langkah Newton dari $x=1$ menuju $x=0$, yaitu maksimum, bukan minimum. Kedua perhitungan ini menjelaskan mengapa syarat definit positif tidak boleh dihilangkan.",
    "Naskah ini membedakan titik stasioner, arah turun, langkah penuh, dan pencarian langkah teredam. Teorema konvergensi lokal dibuktikan dengan hipotesis Hessian Lipschitz dan invers Hessian terbatas; tidak dinyatakan sebagai jaminan global. Rujukan: Nocedal dan Wright, Numerical Optimization, edisi kedua (2006), bab 3; Boyd dan Vandenberghe, Convex Optimization (2004), bagian Newton's method."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Model Kuadratik Lokal",
      "statement": "Misalkan $D\\subseteq\\mathbb R^n$ terbuka dan $f\\in C^2(D)$. Untuk $x\\in D$, $g=\\nabla f(x)$ dan $H=\\nabla^2f(x)$, model kuadratik perpindahan $p$ adalah $m_x(p)=f(x)+g^Tp+\\frac12p^THp$, dengan $x+p\\in D$ untuk evaluasi fungsi sebenarnya.",
      "explanation": "Model menggunakan dua turunan pertama di titik $x$; untuk fungsi kuadratik model ini tepat, sedangkan untuk fungsi lain hanya aproksimasi lokal."
    },
    {
      "kind": "definition",
      "title": "Arah Newton dan Iterasi Newton",
      "statement": "Jika $H=\\nabla^2f(x)$ invertibel, arah Newton $p_N$ adalah solusi tunggal $Hp_N=-g$. Langkah penuh menghasilkan $x^+=x+p_N$. Langkah teredam memakai $x^+=x+\\alpha p_N$ dengan $0<\\alpha\\le1$. Jika $H$ singular, rumus invers tidak dapat digunakan tanpa analisis tambahan.",
      "explanation": "Persamaan linear Hessian lebih baik diselesaikan dengan faktorisasi numerik daripada membentuk invers matriks secara eksplisit."
    },
    {
      "kind": "definition",
      "title": "Matriks Positif Definit dan Arah Turun",
      "statement": "Matriks simetris $H$ disebut positif definit jika $v^THv>0$ untuk setiap $v\\ne0$. Vektor $p$ disebut arah turun bagi fungsi terdiferensialkan di $x$ jika $\\nabla f(x)^Tp<0$. Kedua istilah berbeda: definit positif adalah sifat matriks, sedangkan arah turun adalah sifat vektor terhadap gradien.",
      "explanation": "Ketika $H$ positif definit dan gradien tidak nol, arah Newton pasti arah turun; kesimpulan ini tidak berlaku bagi Hessian indefinit atau negatif definit."
    },
    {
      "kind": "definition",
      "title": "Syarat Armijo",
      "statement": "Untuk $f$ terdiferensialkan, titik $x\\in D$, arah turun $p$, konstanta $c\\in(0,1)$, dan $\\alpha>0$ dengan $x+\\alpha p\\in D$, syarat Armijo adalah $f(x+\\alpha p)\\le f(x)+c\\alpha\\nabla f(x)^Tp$. Backtracking menguji $\\alpha=1,\\beta,\\beta^2,\\ldots$ dengan $\\beta\\in(0,1)$ hingga syarat dipenuhi.",
      "explanation": "Ruas kanan lebih kecil dari $f(x)$ karena $\\nabla f(x)^Tp<0$, sehingga penerimaan langkah menjamin penurunan nilai fungsi."
    },
    {
      "kind": "proposition",
      "title": "Minimum Unik Model Kuadratik dan Arah Turun",
      "statement": "Jika $H$ simetris positif definit dan $g\\ne0$, maka $p_N=-H^{-1}g$ merupakan minimizer global tunggal $m(p)=a+g^Tp+\\frac12p^THp$ dan $g^Tp_N<0$.",
      "proof": [
        "Diketahui $H$ simetris positif definit. Untuk $p_N$ yang memenuhi $Hp_N=-g$, tulis $p=p_N+h$. Dengan ekspansi kuadrat, $m(p)-m(p_N)=(g+Hp_N)^Th+\\frac12h^THh=\\frac12h^THh$.",
        "Karena $H$ positif definit, selisih tersebut nonnegatif dan bernilai nol hanya jika $h=0$. Jadi $p_N$ minimizer global tunggal dari model kuadratik, bukan otomatis minimizer fungsi asli $f$.",
        "Selanjutnya $g^Tp_N=-(Hp_N)^Tp_N=-p_N^THp_N$. Karena $g\\ne0$ dan $H$ invertibel, $p_N\\ne0$, sehingga $p_N^THp_N>0$ dan $g^Tp_N<0$. Dengan demikian arah Newton merupakan arah turun. $\\square$"
      ],
      "explanation": "Sifat turun bersifat lokal; panjang langkah satu belum tentu menurunkan fungsi nonkuadratik."
    },
    {
      "kind": "theorem",
      "title": "Satu Langkah Newton Menyelesaikan Kuadratik Positif Definit",
      "statement": "Jika $Q=Q^T$ positif definit dan $f(x)=\\frac12x^TQx-b^Tx+c$ pada $\\mathbb R^n$, maka dari sembarang $x_0$ langkah Newton penuh menghasilkan $x_1=Q^{-1}b$, yaitu minimizer global tunggal.",
      "proof": [
        "Diketahui $\\nabla f(x)=Qx-b$ dan $\\nabla^2f(x)=Q$. Matriks $Q$ positif definit sehingga invertibel. Persamaan Newton di $x_0$ adalah $Qp_0=-(Qx_0-b)$, maka $p_0=-x_0+Q^{-1}b$.",
        "Dengan demikian $x_1=x_0+p_0=Q^{-1}b$. Untuk setiap $x=x_1+h$, karena $Qx_1=b$, diperoleh $f(x)-f(x_1)=\\frac12h^TQh\\ge0$, dengan kesamaan hanya untuk $h=0$.",
        "Jadi $x_1$ minimizer global tunggal. Hasil satu langkah ini bergantung pada Hessian konstan dan positif definit; tidak boleh digeneralisasi untuk semua fungsi $C^2$. $\\square$"
      ],
      "explanation": "Contoh kuadratik berguna sebagai pemeriksaan tepat terhadap implementasi algoritma."
    },
    {
      "kind": "theorem",
      "title": "Backtracking Armijo Berhenti untuk Arah Turun",
      "statement": "Misalkan $D\\subseteq\\mathbb R^n$ terbuka, $f:D\\to\\mathbb R$ terdiferensialkan di $x\\in D$, $p$ memenuhi $\\nabla f(x)^Tp<0$, serta $c,\\beta\\in(0,1)$. Maka terdapat $k\\ge0$ sehingga $\\alpha=\\beta^k$ memenuhi $x+\\alpha p\\in D$ dan syarat Armijo.",
      "proof": [
        "Diketahui $D$ terbuka dan $x\\in D$. Ada $\\delta>0$ sehingga $x+\\alpha p\\in D$ untuk semua $\\alpha\\ge0$ cukup kecil. Definisikan $d=\\nabla f(x)^Tp<0$.",
        "Dari diferensiabilitas, $f(x+\\alpha p)=f(x)+\\alpha d+r(\\alpha)$ dengan $r(\\alpha)/\\alpha\\to0$ ketika $\\alpha\\downarrow0$. Karena $(1-c)(-d)>0$, terdapat $\\eta>0$ sehingga $r(\\alpha)/\\alpha\\le(1-c)(-d)$ untuk $0<\\alpha<\\eta$.",
        "Akibatnya $f(x+\\alpha p)\\le f(x)+\\alpha d+(1-c)\\alpha(-d)=f(x)+c\\alpha d$. Barisan $\\beta^k\\to0$, sehingga suatu $k$ memenuhi batas domain dan $\\eta$ sekaligus. Dengan demikian backtracking menerima langkah dalam banyak pengujian berhingga. $\\square$"
      ],
      "explanation": "Teorema ini menjamin adanya langkah yang diterima, bukan batas jumlah iterasi global untuk mencapai minimum."
    },
    {
      "kind": "theorem",
      "title": "Batas Galat Kuadratik Lokal Newton",
      "statement": "Misalkan $B_r(x^*)$ bola terbuka konveks, $f\\in C^2(B_r(x^*))$, $\\nabla f(x^*)=0$, Hessian Lipschitz dengan konstanta $L>0$, dan $\\|[\\nabla^2f(x)]^{-1}\\|\\le M$ untuk setiap $x$ dalam bola. Untuk $x$ dalam bola, langkah Newton $x^+=x-[\\nabla^2f(x)]^{-1}\\nabla f(x)$ memenuhi $\\|x^+-x^*\\|\\le\\frac{ML}{2}\\|x-x^*\\|^2$. Jika $MLr/2<1$, iterasi yang dimulai dalam bola tetap di sana dan konvergen setidaknya secara kuadratik.",
      "proof": [
        "Diketahui $e=x-x^*$, $H(x)=\\nabla^2f(x)$, dan $\\nabla f(x^*)=0$. Karena ruas garis dari $x^*$ ke $x$ terletak dalam bola, teorema dasar kalkulus sepanjang ruas garis memberi $\\nabla f(x)=\\int_0^1H(x^*+te)e\\,dt$.",
        "Persamaan Newton menghasilkan $x^+-x^*=e-H(x)^{-1}\\nabla f(x)=H(x)^{-1}\\int_0^1[H(x)-H(x^*+te)]e\\,dt$. Dengan norma operator, batas invers, dan Lipschitz Hessian, diperoleh $\\|x^+-x^*\\|\\le M\\int_0^1L(1-t)\\|e\\|^2dt=\\frac{ML}{2}\\|e\\|^2$.",
        "Jika $MLr/2<1$, untuk setiap $\\|e\\|<r$ berlaku $\\|x^+-x^*\\|\\le(MLr/2)\\|e\\|<\\|e\\|<r$. Induksi menunjukkan seluruh iterasi tetap dalam bola dan galat menurun ke nol; estimasi kuadratik berlaku pada setiap langkah. Dengan demikian pernyataan terbukti. $\\square$"
      ],
      "explanation": "Kedekatan awal, Hessian Lipschitz, dan invers yang seragam terbatas adalah hipotesis penting; Hessian singular di solusi dapat menghilangkan laju kuadratik."
    },
    {
      "kind": "proposition",
      "title": "Hessian Negatif Definit Tidak Menjamin Minimum",
      "statement": "Terdapat fungsi $C^\\infty$ dengan Hessian invertibel di setiap titik dan langkah Newton yang menuju maksimum ketat. Secara khusus $f(x)=-x^2$ dari $x_0=1$ menghasilkan $x_1=0$.",
      "proof": [
        "Diketahui $f(x)=-x^2$ sehingga $f'(x)=-2x$ dan $f''(x)=-2\\ne0$. Persamaan Newton pada $x_0=1$ ialah $-2p_0=2$, sehingga $p_0=-1$ dan $x_1=0$.",
        "Akan tetapi $f(0)=0$ dan untuk semua $x\\ne0$ berlaku $f(x)=-x^2<0$. Dengan demikian $0$ adalah maksimum global ketat, bukan minimum. Selain itu $f'(1)p_0=(-2)(-1)=2>0$, sehingga arah Newton bukan arah turun.",
        "Contoh ini membuktikan bahwa invertibilitas Hessian saja tidak cukup. Tanda positif definit diperlukan untuk kesimpulan arah turun pada proposisi sebelumnya. $\\square$"
      ],
      "explanation": "Sistem Newton menyelesaikan persamaan stasioner; klasifikasi minimum memerlukan informasi tambahan."
    },
    {
      "kind": "proposition",
      "title": "Hessian Singular dan Kegagalan Laju Kuadratik",
      "statement": "Untuk $f(x)=x^4$, titik $x^*=0$ adalah minimum global, tetapi $f''(0)=0$. Untuk setiap $x\\ne0$, langkah Newton penuh memberi $x^+=\\frac23x$, sehingga galat hanya berkurang secara linear dengan rasio $2/3$.",
      "proof": [
        "Diketahui $f'(x)=4x^3$ dan $f''(x)=12x^2$. Jika $x\\ne0$, Hessian skalar invertibel dan persamaan Newton memberi $p=-4x^3/(12x^2)=-x/3$. Jadi $x^+=x+p=2x/3$.",
        "Karena $f(x)\\ge0$ dan $f(0)=0$, titik nol adalah minimum global. Namun $f''(0)=0$, sehingga invers Hessian tidak terdefinisi pada solusi; hipotesis teorema konvergensi lokal tidak terpenuhi.",
        "Untuk $x_k\\ne0$, $\\lvert x_{k+1}\\rvert/\\lvert x_k\\rvert=2/3$ konstan, bukan menuju nol. Maka iterasi memiliki laju linear dan tidak kuadratik. Dengan demikian pernyataan terbukti. $\\square$"
      ],
      "explanation": "Konvergensi pada contoh ini tetap terjadi, tetapi kecepatannya tidak sesuai klaim kuadratik tanpa syarat."
    }
  ],
  "examples": [
    {
      "title": "Contoh 1 · Membangun Model Kuadratik",
      "forDefinition": "Model Kuadratik Lokal",
      "problem": "Diketahui $f(x)=x^4$ dan titik $x=1$. Bentuk model kuadratik $m_1(p)$ dan bandingkan dengan $f(1+p)$ untuk $p=1/2$.",
      "solution": [
        "Diketahui $f(1)=1$, $f'(x)=4x^3$, dan $f''(x)=12x^2$. Karena $f'(1)=4$ dan $f''(1)=12$, definisi model memberi $m_1(p)=1+4p+6p^2$.",
        "Pada $p=1/2$, model bernilai $1+2+6/4=9/2$. Nilai sebenarnya $f(3/2)=(3/2)^4=81/16$, sehingga selisih $f(3/2)-m_1(1/2)=81/16-72/16=9/16$.",
        "Selisih tersebut muncul karena suku orde tiga dan empat pada ekspansi $(1+p)^4$. Dengan demikian model kuadratik bukan identitas global bagi fungsi berpangkat empat; akurasinya membaik untuk perpindahan kecil."
      ]
    },
    {
      "title": "Contoh 2 · Langkah Newton Dua Variabel",
      "forDefinition": "Arah Newton dan Iterasi Newton",
      "problem": "Minimalkan $f(x,y)=(x-1)^2+2(y+1)^2$ dengan satu langkah Newton dari $(3,1)$.",
      "solution": [
        "Diketahui $\\nabla f(x,y)=(2(x-1),4(y+1))^T$ dan $H=\\operatorname{diag}(2,4)$. Pada $(3,1)$, gradien $(4,8)^T$. Persamaan $Hp=-(4,8)^T$ memberi $2p_1=-4$ dan $4p_2=-8$.",
        "Diperoleh $p=(-2,-2)^T$ dan titik baru $(3,1)+p=(1,-1)$. Di titik ini gradien nol, sedangkan Hessian positif definit karena kedua nilai eigennya $2,4>0$.",
        "Untuk setiap $(x,y)$, $f(x,y)$ adalah jumlah dua kuadrat nonnegatif dan hanya nol pada $(1,-1)$. Dengan demikian titik hasil Newton merupakan minimum global tunggal, dengan nilai tujuan nol."
      ]
    },
    {
      "title": "Contoh 3 · Positif Definit dan Arah Turun",
      "forDefinition": "Matriks Positif Definit dan Arah Turun",
      "problem": "Untuk $H=\\operatorname{diag}(2,8)$ dan $g=(2,-4)^T$, tentukan arah Newton dan verifikasi sifat turun.",
      "solution": [
        "Diketahui $H$ simetris dan $v^THv=2v_1^2+8v_2^2>0$ untuk $v\\ne0$, jadi $H$ positif definit. Persamaan $Hp=-g$ memberi $p_1=-1$ dan $p_2=1/2$.",
        "Hasil kali gradien dengan arah adalah $g^Tp=2(-1)+(-4)(1/2)=-4<0$. Selain itu $p^THp=2(1)+8(1/4)=4$, sehingga identitas $g^Tp=-p^THp$ benar secara numerik.",
        "Dengan demikian arah $(-1,1/2)$ merupakan arah turun. Pernyataan ini belum menjamin bahwa langkah penuh akan menurunkan fungsi nonkuadratik; untuk itu perlu memeriksa nilai fungsi atau melakukan line search."
      ]
    },
    {
      "title": "Contoh 4 · Memeriksa Armijo",
      "forDefinition": "Syarat Armijo",
      "problem": "Diberikan $f(x)=x^4-4x^2$, $x=1$, arah Newton $p=1$, $c=1/4$, dan $\\beta=1/2$. Tentukan langkah backtracking pertama yang diterima.",
      "solution": [
        "Diketahui $f(1)=-3$, $f'(1)=4-8=-4$, dan $f''(1)=12-8=4$, sehingga $p=-f'(1)/f''(1)=1$ memang arah turun dengan $f'(1)p=-4$.",
        "Uji $\\alpha=1$: $f(2)=16-16=0$, sedangkan batas Armijo $-3+(1/4)(1)(-4)=-4$. Karena $0\\not\\le-4$, langkah penuh ditolak.",
        "Uji $\\alpha=1/2$: $f(3/2)=81/16-9=-63/16=-3{,}9375$, sedangkan batas Armijo $-3+(1/4)(1/2)(-4)=-7/2=-3{,}5$. Karena $-63/16\\le-7/2$, langkah setengah diterima. Titik baru $3/2$ menurunkan nilai fungsi dari $-3$ menjadi $-63/16$."
      ]
    },
    {
      "title": "Contoh 5 · Kuadratik Tepat Satu Langkah",
      "problem": "Untuk $f(x)=\\frac12(4x^2)-8x+1$, mulai dari $x_0=-5$. Hitung langkah Newton dan buktikan minimum global.",
      "solution": [
        "Diketahui $f'(x)=4x-8$ dan $f''(x)=4>0$. Pada $x_0=-5$, gradien $-28$. Persamaan Newton $4p_0=28$ menghasilkan $p_0=7$.",
        "Titik baru adalah $x_1=-5+7=2$. Dengan melengkapkan kuadrat, $f(x)=2(x-2)^2-7$, sehingga $f(x)\\ge-7$ untuk setiap $x$ dengan kesamaan hanya pada $x=2$.",
        "Karena $f'(2)=0$ dan Hessian konstan positif, langkah penuh dari $-5$ langsung mencapai minimizer global tunggal $x=2$ dengan nilai $-7$."
      ]
    },
    {
      "title": "Contoh 6 · Kegagalan Hessian Negatif",
      "problem": "Jalankan Newton pada $f(x)=-x^2$ dari $x_0=1$ dan klasifikasikan titik akhirnya.",
      "solution": [
        "Diketahui $f'(1)=-2$ dan $f''(1)=-2$. Persamaan $f''(1)p=-f'(1)$ memberi $-2p=2$, sehingga $p=-1$ dan $x_1=0$.",
        "Untuk semua $x$, $f(x)=-x^2\\le0=f(0)$, sehingga titik akhir merupakan maksimum global. Pemeriksaan turunan kedua memberi $f''(0)=-2<0$, sesuai klasifikasi maksimum ketat.",
        "Selain itu $f'(1)p=(-2)(-1)=2>0$, jadi arah Newton pada titik awal justru arah naik. Dengan demikian invers Hessian saja tidak membuktikan keberhasilan minimisasi."
      ]
    },
    {
      "title": "Contoh 7 · Laju Linear pada Minimum Degenerat",
      "problem": "Untuk $f(x)=x^4$ dari $x_0=3$, hitung tiga iterasi dan tentukan laju galat.",
      "solution": [
        "Diketahui untuk $x\\ne0$ berlaku $p=-x/3$, sehingga $x^+=(2/3)x$. Dari $x_0=3$ diperoleh $x_1=2$, $x_2=4/3$, dan $x_3=8/9$.",
        "Minimum global adalah $x^*=0$ karena $x^4\\ge0$. Galat absolut berturut-turut $3,2,4/3,8/9$ dengan rasio setiap pasangan berurutan $2/3$.",
        "Karena rasio tidak menuju nol, konvergensinya linear. Hessian $12x^2$ menjadi singular pada $x^*=0$, sehingga tidak memenuhi hipotesis teorema konvergensi kuadratik."
      ]
    },
    {
      "title": "Contoh 8 · Galat Gradien dan Kelengkungan",
      "problem": "Untuk $f_\\varepsilon(x)=\\frac\\varepsilon2(x-1)^2$ dengan $\\varepsilon=10^{-6}$, periksa gradien pada $x=0$ dan jarak ke minimizer.",
      "solution": [
        "Diketahui $f'_\\varepsilon(x)=\\varepsilon(x-1)$ dan $f''_\\varepsilon(x)=\\varepsilon>0$. Minimum global tunggal terjadi pada $x^*=1$, karena $f_\\varepsilon(x)\\ge0$ dengan kesamaan hanya pada $x=1$.",
        "Pada $x=0$, nilai gradien adalah $-10^{-6}$, sangat kecil, tetapi galat titik $\\lvert0-1\\rvert=1$. Jika toleransi penghentian hanya $\\lvert f'(x)\\rvert\\le10^{-5}$, algoritma akan berhenti terlalu dini.",
        "Langkah Newton yang tepat adalah $p=-f'(0)/f''(0)=1$ dan mencapai solusi dalam satu langkah. Dengan demikian ukuran gradien harus ditafsirkan bersama skala kelengkungan, bukan sebagai jaminan akurasi posisi secara mandiri."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "NO-01 (Dasar). Untuk $f(x)=3x^2-12x+7$ dan $x_0=0$, hitung $p_N$, $x_1$, dan nilai minimum global.",
      "hint": "Hitung $f'$ dan $f''$; lengkapkan kuadrat untuk verifikasi.",
      "answer": "Diketahui $f'(x)=6x-12$ dan $f''(x)=6>0$. Pada $x_0=0$ gradien $-12$, sehingga persamaan Newton $6p_N=12$ memberi $p_N=2$ dan $x_1=2$. Verifikasi dengan $f(x)=3(x-2)^2-5$: karena kuadrat nonnegatif, nilai minimum global adalah $-5$, dicapai hanya di $x=2$. Selain itu $f'(2)=0$ dan $f''(2)=6>0$. Jadi satu langkah Newton telah mencapai solusi global.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-02 (Dasar). Dari $(0,0)$, lakukan satu langkah Newton untuk $f(x,y)=(x-2)^2+3(y-1)^2$ dan periksa optimalitas.",
      "hint": "Bentuk gradien dan Hessian diagonal.",
      "answer": "Diketahui $\\nabla f(x,y)=(2(x-2),6(y-1))^T$ dan $H=\\operatorname{diag}(2,6)$. Pada $(0,0)$ gradien $(-4,-6)^T$. Persamaan $Hp=(4,6)^T$ memberi $p=(2,1)^T$, sehingga titik baru $(2,1)$. Gradien di sana nol. Hessian positif definit karena $v^THv=2v_1^2+6v_2^2>0$ untuk $v\\ne0$. Secara langsung $f(x,y)$ jumlah kuadrat nonnegatif yang bernilai nol hanya di $(2,1)$. Dengan demikian titik itu minimum global tunggal.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-03 (Menengah). Untuk $g=(3,-6)^T$ dan $H=\\operatorname{diag}(3,12)$, cari arah Newton dan buktikan bahwa arahnya turun.",
      "hint": "Gunakan $Hp=-g$ dan identitas $g^Tp=-p^THp$.",
      "answer": "Diketahui $H$ simetris positif definit karena $v^THv=3v_1^2+12v_2^2>0$ untuk $v\\ne0$. Persamaan $Hp=-g$ menghasilkan $3p_1=-3$ dan $12p_2=6$, sehingga $p=(-1,1/2)^T$. Hitung $g^Tp=3(-1)+(-6)(1/2)=-6<0$. Sementara itu $p^THp=3(1)+12(1/4)=6$, jadi $g^Tp=-p^THp$ benar. Dengan demikian $p$ arah turun bagi fungsi yang mempunyai gradien dan Hessian tersebut di titik yang ditinjau.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-04 (Menengah). Pada $f(x)=x^4-4x^2$, $x=1$, $c=1/4$, $\\beta=1/2$, buktikan bahwa langkah penuh Newton ditolak dan langkah setengah diterima oleh Armijo.",
      "hint": "Periksa kedua ruas ketaksamaan pada $\\alpha=1$ dan $\\alpha=1/2$.",
      "answer": "Diketahui $f(1)=-3$, $f'(1)=-4$, $f''(1)=4$, maka $p=1$ dan $f'(1)p=-4<0$. Untuk $\\alpha=1$, titik uji $2$ memberi $f(2)=0$, sedangkan batas Armijo $-3+(1/4)(1)(-4)=-4$; ketaksamaan $0\\le-4$ salah. Untuk $\\alpha=1/2$, titik uji $3/2$ memberi $f(3/2)=81/16-9=-63/16$, sedangkan batas $-3+(1/4)(1/2)(-4)=-7/2=-56/16$. Karena $-63/16\\le-56/16$, langkah setengah diterima. Nilai fungsi turun sebesar $-63/16-(-3)=-15/16$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-05 (Menengah). Buktikan bahwa untuk kuadratik $f(x)=\\frac12x^TQx-b^Tx+c$ dengan $Q$ simetris positif definit, iterasi Newton dari titik mana pun mencapai $Q^{-1}b$ dalam satu langkah.",
      "hint": "Selesaikan persamaan Newton lalu gunakan penyelesaian kuadrat.",
      "answer": "Diketahui $\\nabla f(x)=Qx-b$ dan $\\nabla^2f(x)=Q$. Karena $Q$ positif definit, inversnya ada. Diambil sebarang $x_0$. Persamaan Newton $Qp=-(Qx_0-b)$ memberi $p=-x_0+Q^{-1}b$, sehingga $x_1=x_0+p=Q^{-1}b$. Untuk sebarang $x=x_1+h$, identitas $Qx_1=b$ menghasilkan $f(x)-f(x_1)=\\frac12h^TQh\\ge0$, dengan kesamaan hanya ketika $h=0$. Maka $x_1$ minimizer global tunggal. Kedua klaim, satu langkah dan optimalitas, telah diverifikasi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-06 (Menantang). Tunjukkan dengan contoh bahwa Hessian invertibel tidak menjamin arah Newton turun maupun titik minimum.",
      "hint": "Gunakan fungsi kuadrat cekung dan hitung hasil kali gradien dengan arah.",
      "answer": "Ambil $f(x)=-x^2$ dan titik awal $x_0=1$. Diketahui $f'(1)=-2$, $f''(1)=-2$ invertibel. Persamaan Newton $-2p=2$ memberi $p=-1$. Tetapi $f'(1)p=2>0$, sehingga $p$ bukan arah turun. Langkah penuh mencapai $x_1=0$ dengan $f(0)=0$, sedangkan untuk $x\\ne0$ berlaku $f(x)<0$. Jadi $x_1$ justru maksimum global ketat. Contoh ini memenuhi syarat invertibilitas Hessian, tetapi melanggar positif definit, sehingga kedua kesimpulan yang keliru terbantahkan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-07 (Menantang). Untuk $f(x)=x^4$ dan $x_0=3$, buktikan rumus $x_k=3(2/3)^k$ serta jelaskan mengapa konvergensi tidak kuadratik.",
      "hint": "Turunkan iterasi dan gunakan induksi; bandingkan rasio galat.",
      "answer": "Diketahui $f'(x)=4x^3$, $f''(x)=12x^2$. Untuk $x_k\\ne0$, arah Newton $p_k=-x_k/3$, sehingga $x_{k+1}=(2/3)x_k$. Basis $k=0$ memenuhi $x_0=3(2/3)^0=3$. Jika $x_k=3(2/3)^k$, maka $x_{k+1}=(2/3)3(2/3)^k=3(2/3)^{k+1}$; induksi selesai. Karena $x_k>0$ untuk setiap $k$ dan $(2/3)^k\\to0$, iterasi konvergen ke minimizer $x^*=0$. Namun rasio $\\lvert x_{k+1}\\rvert/\\lvert x_k\\rvert=2/3$ tidak menuju nol, sehingga laju hanya linear. Hessian pada solusi $f''(0)=0$, jadi hipotesis invers Hessian terbatas tidak terpenuhi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "NO-08 (Menantang). Misalkan Hessian $H$ Lipschitz dengan konstanta $L$ pada bola di sekitar titik stasioner $x^*$, dan $\\|H(x)^{-1}\\|\\le M$. Turunkan batas galat satu langkah Newton secara lengkap.",
      "hint": "Gunakan integral gradien sepanjang ruas garis dan batas Lipschitz.",
      "answer": "Diketahui $\\nabla f(x^*)=0$ dan $e=x-x^*$. Dari teorema dasar kalkulus pada ruas garis diperoleh $\\nabla f(x)=\\int_0^1H(x^*+te)e\\,dt$. Langkah Newton memberi $e^+=e-H(x)^{-1}\\nabla f(x)=H(x)^{-1}\\int_0^1[H(x)-H(x^*+te)]e\\,dt$. Dengan ketaksamaan norma dan hipotesis, $\\|e^+\\|\\le M\\int_0^1L\\|x-(x^*+te)\\|\\|e\\|\\,dt=ML\\|e\\|^2\\int_0^1(1-t)\\,dt=\\frac{ML}{2}\\|e\\|^2$. Jika $MLr/2<1$ dan $\\|e\\|<r$, maka $\\|e^+\\|<\\|e\\|<r$, sehingga iterasi tetap dalam bola. Dengan demikian batas kuadratik berlaku selama hipotesis dipertahankan.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
