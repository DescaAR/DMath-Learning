export type IntegralWorkedExercise = {
  prompt: string;
  solution: string;
  visual?: "tagged-partition" | "parabola-darboux" | "step-darboux" | "piecewise-partition" | "accumulated-integral" | null;
  solutionGoals?: Array<{ label: string; text: string }>;
};
export const integralRiemannWorkedExercises: IntegralWorkedExercise[] = [
  {
    "prompt": "(a) Bentuk partisi berlabel $\\dot P=\\{([x_{i-1},x_i],t_i)\\}_{i=1}^{5}$ pada $[-5,5]$ dengan panjang subinterval tidak semuanya sama, kemudian tentukan $\\lVert P\\rVert$.\n\n(b) Jika $f(x)=|x|-1$ pada $[-5,5]$, tentukan $S(f,\\dot P)$ untuk partisi berlabel pada bagian (a).\n\n(c) Tentukan\n\\[\nF(x)=\\int_{-5}^{x}f(t)\\,d t,\\qquad x\\in[-5,5].\n\\]\n\n(d) Buktikan bahwa\n\\[\n\\int_{-5}^{5}f(t)\\,d t=F(5)-F(-5).\n\\]",
    "solution": "Diketahui $n=5$ dan fungsi $f(x)=|x|-1$ pada $[-5,5]$.\n\nDitentukan partisi berlabel tidak seragam, norma partisi, jumlah Riemann, fungsi $F$, dan hubungan integral dengan $F(5)-F(-5)$.\n\n(a) Dipilih partisi\n\\[\nP=\\{-5,-4,-2,0,2,5\\}.\n\\]\nPanjang kelima subinterval berturut-turut adalah\n\\[\n1,\\ 2,\\ 2,\\ 2,\\ 3.\n\\]\nDipilih titik label\n\\[\nt_1=-\\frac{9}{2},\\qquad t_2=-3,\\qquad t_3=-1,\\qquad t_4=1,\\qquad t_5=\\frac{7}{2}.\n\\]\nSetiap $t_i$ berada di subinterval yang bersesuaian, sehingga diperoleh partisi berlabel\n\\[\n\\dot P=\\left\\{\\left([-5,-4],-\\frac{9}{2}\\right),([-4,-2],-3),([-2,0],-1),([0,2],1),\\left([2,5],\\frac{7}{2}\\right)\\right\\}.\n\\]\nBerdasarkan definisi norma partisi,\n\\[\n\\lVert P\\rVert=\\max\\{1,2,2,2,3\\}=3.\n\\]\n\n(b) Nilai fungsi pada titik-titik label adalah\n\\[\nf\\left(-\\frac{9}{2}\\right)=\\frac{7}{2},\\qquad f(-3)=2,\\qquad f(-1)=0,\\qquad f(1)=0,\\qquad f\\left(\\frac{7}{2}\\right)=\\frac{5}{2}.\n\\]\nOleh karena itu,\n\\[\n\\begin{aligned}\nS(f,\\dot P)\n&=\\sum_{i=1}^{5}f(t_i)(x_i-x_{i-1})\\\\\n&=\\frac{7}{2}(1)+2(2)+0(2)+0(2)+\\frac{5}{2}(3)\\\\\n&=\\frac{7}{2}+4+\\frac{15}{2}\\\\\n&=15.\n\\end{aligned}\n\\]\n\n(c) Karena\n\\[\n|t|-1=\n\\begin{cases}\n-t-1,&-5\\le t\\le0,\\\\\nt-1,&0\\le t\\le5,\n\\end{cases}\n\\]\nperhitungan $F$ dipisahkan menjadi dua kasus.\n\nUntuk $-5\\le x\\le0$,\n\\[\n\\begin{aligned}\nF(x)\n&=\\int_{-5}^{x}(-t-1)\\,d t\\\\\n&=\\left[-\\frac{t^2}{2}-t\\right]_{-5}^{x}\\\\\n&=-\\frac{x^2}{2}-x+\\frac{15}{2}.\n\\end{aligned}\n\\]\nUntuk $0\\le x\\le5$,\n\\[\n\\begin{aligned}\nF(x)\n&=\\int_{-5}^{0}(-t-1)\\,d t+\\int_{0}^{x}(t-1)\\,d t\\\\\n&=\\frac{15}{2}+\\left[\\frac{t^2}{2}-t\\right]_{0}^{x}\\\\\n&=\\frac{15}{2}+\\frac{x^2}{2}-x.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\nF(x)=\n\\begin{cases}\n\\displaystyle \\frac{15}{2}-x-\\frac{x^2}{2},&-5\\le x\\le0,\\\\[1mm]\n\\displaystyle \\frac{15}{2}-x+\\frac{x^2}{2},&0\\le x\\le5.\n\\end{cases}\n\\]\n\n(d) Diketahui dari bagian (c) bahwa\n\\[\nF(-5)=0,\\qquad F(5)=15.\n\\]\nDi sisi lain,\n\\[\n\\begin{aligned}\n\\int_{-5}^{5}(|t|-1)\\,d t\n&=2\\int_{0}^{5}(t-1)\\,d t\\\\\n&=2\\left[\\frac{t^2}{2}-t\\right]_{0}^{5}\\\\\n&=2\\left(\\frac{25}{2}-5\\right)=15.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\int_{-5}^{5}f(t)\\,d t=15=F(5)-F(-5).\n\\]\nDengan demikian, pernyataan pada bagian (d) terbukti. \n■",
    "visual": "tagged-partition",
    "solutionGoals": [
      {
        "label": "a",
        "text": "Akan dibentuk partisi berlabel $\\dot P=\\{([x_{i-1},x_i],t_i)\\}_{i=1}^{5}$ pada $[-5,5]$ dengan panjang subinterval yang tidak semuanya sama, kemudian ditentukan $\\lVert P\\rVert$."
      },
      {
        "label": "b",
        "text": "Akan ditentukan jumlah Riemann $S(f,\\dot P)$ untuk partisi berlabel pada bagian (a)."
      },
      {
        "label": "c",
        "text": "Akan ditentukan fungsi $F(x)=\\int_{-5}^{x}f(t)\\,d t$."
      },
      {
        "label": "d",
        "text": "Akan dibuktikan bahwa $\\int_{-5}^{5}f(t)\\,d t=F(5)-F(-5)$."
      }
    ]
  },
  {
    "prompt": "Misalkan fungsi $f$ yang terintegralkan Riemann pada $[a,b]$ dan\n\\[\nF(x)=\\int_a^x f(t)\\,d t,\\qquad x\\in[a,b].\n\\]\nJika $c\\in[a,b]$ dan\n\\[\nG(x)=\\int_c^x f(t)\\,d t,\n\\]\nnyatakan $G(x)$ dalam $F(x)$.",
    "solution": "Diketahui\n\\[\nF(x)=\\int_a^x f(t)\\,d t\n\\]\ndan\n\\[\nG(x)=\\int_c^x f(t)\\,d t.\n\\]\nDitentukan bentuk $G(x)$ dalam $F(x)$.\n\nBerdasarkan sifat aditivitas integral,\n\\[\n\\int_a^x f(t)\\,d t=\\int_a^c f(t)\\,d t+\\int_c^x f(t)\\,d t.\n\\]\nDengan notasi yang diberikan,\n\\[\nF(x)=F(c)+G(x).\n\\]\nAkibatnya,\n\\[\n\\boxed{G(x)=F(x)-F(c)}.\n\\]\nRumus tersebut berlaku untuk setiap $x,c\\in[a,b]$ dengan konvensi orientasi integral yang biasa.",
    "visual": null
  },
  {
    "prompt": "Misalkan fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ dan partisi\n\\[\nP=\\{x_0,x_1,\\ldots,x_n\\}\n\\]\npada $[a,b]$. Buktikan pernyataan berikut.\n\n(a) Untuk setiap $\\varepsilon>0$ terdapat partisi berlabel $\\dot P=\\{([x_{i-1},x_i],t_i)\\}_{i=1}^{n}$ dengan partisi dasar $P$ sehingga\n\\[\n0\\le S(f,\\dot P)-L(f,P)<\\varepsilon.\n\\]\n\n(b) Untuk setiap $\\varepsilon>0$ terdapat partisi berlabel $\\dot P=\\{([x_{i-1},x_i],t_i)\\}_{i=1}^{n}$ dengan partisi dasar $P$ sehingga\n\\[\n0\\le U(f,P)-S(f,\\dot P)<\\varepsilon.\n\\]",
    "solution": "Diketahui fungsi $f$ terbatas pada $[a,b]$ dan partisi $P=\\{x_0,\\ldots,x_n\\}$. Untuk setiap $i$ dituliskan\n\\[\nI_i=[x_{i-1},x_i],\\qquad \\Delta x_i=x_i-x_{i-1},\n\\]\n\\[\nm_i=\\inf_{x\\in I_i}f(x),\\qquad M_i=\\sup_{x\\in I_i}f(x).\n\\]\nDibuktikan dua pernyataan aproksimasi jumlah Darboux oleh jumlah Riemann.\n\n(a) Diambil sebarang $\\varepsilon>0$ dan ditetapkan\n\\[\n\\eta=\\frac{\\varepsilon}{b-a}>0.\n\\]\nBerdasarkan sifat aproksimasi infimum, untuk setiap $i$ dapat dipilih $t_i\\in I_i$ sehingga\n\\[\nm_i\\le f(t_i)<m_i+\\eta.\n\\]\nDibentuk partisi berlabel $\\dot P$ dengan label-label tersebut. Karena $f(t_i)-m_i\\ge0$,\n\\[\n\\begin{aligned}\n0\n&\\le S(f,\\dot P)-L(f,P)\\\\\n&=\\sum_{i=1}^{n}\\bigl(f(t_i)-m_i\\bigr)\\Delta x_i\\\\\n&<\\sum_{i=1}^{n}\\eta\\,\\Delta x_i\\\\\n&=\\eta(b-a)=\\varepsilon.\n\\end{aligned}\n\\]\nDengan demikian, pernyataan pada bagian (a) terbukti. \n■\n\n(b) Diambil sebarang $\\varepsilon>0$ dan ditetapkan kembali\n\\[\n\\eta=\\frac{\\varepsilon}{b-a}.\n\\]\nBerdasarkan sifat aproksimasi supremum, untuk setiap $i$ dapat dipilih $t_i\\in I_i$ sehingga\n\\[\nM_i-\\eta<f(t_i)\\le M_i.\n\\]\nDibentuk partisi berlabel $\\dot P$ dengan label-label tersebut. Karena $M_i-f(t_i)\\ge0$,\n\\[\n\\begin{aligned}\n0\n&\\le U(f,P)-S(f,\\dot P)\\\\\n&=\\sum_{i=1}^{n}\\bigl(M_i-f(t_i)\\bigr)\\Delta x_i\\\\\n&<\\sum_{i=1}^{n}\\eta\\,\\Delta x_i\\\\\n&=\\eta(b-a)=\\varepsilon.\n\\end{aligned}\n\\]\nDengan demikian, pernyataan pada bagian (b) terbukti. \n■",
    "visual": null,
    "solutionGoals": [
      {
        "label": "a",
        "text": "Akan dibuktikan bahwa jumlah Riemann dapat dipilih sedekat yang diinginkan dengan jumlah Darboux bawah."
      },
      {
        "label": "b",
        "text": "Akan dibuktikan bahwa jumlah Riemann dapat dipilih sedekat yang diinginkan dengan jumlah Darboux atas."
      }
    ]
  },
  {
    "prompt": "Misalkan fungsi\n\\[\nf(x)=6x-x^2,\\qquad x\\in[0,6],\n\\]\ndan untuk setiap bilangan asli $n\\ge7$ diberikan partisi\n\\[\nP_n=\\left\\{x_i=\\frac{6i}{n}:i=0,1,\\ldots,n\\right\\}.\n\\]\n\n(a) Tentukan nilai integral Darboux atas berdasarkan barisan partisi $(P_n)$.\n\n(b) Tentukan nilai integral Darboux bawah berdasarkan barisan partisi $(P_n)$.\n\n(c) Tentukan apakah $f$ terintegralkan Darboux pada $[0,6]$.",
    "solution": "Diketahui\n\\[\nf(x)=6x-x^2=9-(x-3)^2.\n\\]\nDitentukan integral Darboux atas, integral Darboux bawah, dan keterintegralan Darboux $f$.\n\nFungsi $f$ naik pada $[0,3]$ dan turun pada $[3,6]$. Untuk memperoleh perhitungan eksak digunakan subbarisan partisi dengan $n=2m$. Pada keadaan ini,\n\\[\n\\Delta x=\\frac{6}{2m}=\\frac{3}{m},\n\\qquad\nx_i=\\frac{3i}{m},\n\\]\ndan titik maksimum $x=3$ merupakan titik partisi $x_m$. Nilai pada titik partisi adalah\n\\[\nf(x_i)=6\\left(\\frac{3i}{m}\\right)-\\left(\\frac{3i}{m}\\right)^2\n=\\frac{9i(2m-i)}{m^2}.\n\\]\nKarena $f(0)=f(6)=0$ dan grafik simetris terhadap $x=3$, jumlah Darboux bawah adalah\n\\[\nL(f,P_{2m})=2\\frac{3}{m}\\sum_{i=1}^{m-1}f(x_i).\n\\]\nDengan rumus\n\\[\n\\sum_{i=1}^{m-1}i=\\frac{m(m-1)}2,\n\\qquad\n\\sum_{i=1}^{m-1}i^2=\\frac{m(m-1)(2m-1)}6,\n\\]\ndiperoleh\n\\[\n\\begin{aligned}\nL(f,P_{2m})\n&=\\frac{6}{m}\\sum_{i=1}^{m-1}\\left(\\frac{18i}{m}-\\frac{9i^2}{m^2}\\right)\\\\\n&=36-\\frac{27}{m}-\\frac{9}{m^2}.\n\\end{aligned}\n\\]\nPada sisi lain, selisih jumlah Darboux atas dan bawah pada bagian naik dan turun menelusur secara teleskopik. Diperoleh\n\\[\nU(f,P_{2m})-L(f,P_{2m})\n=2\\Delta x\\,[f(3)-f(0)]\n=2\\frac{3}{m}(9)=\\frac{54}{m}.\n\\]\nAkibatnya,\n\\[\nU(f,P_{2m})=36+\\frac{27}{m}-\\frac{9}{m^2}.\n\\]\n\n(a) Karena\n\\[\n\\lim_{m\\to\\infty}U(f,P_{2m})=36,\n\\]\nberlaku\n\\[\n\\overline{\\int_0^6}f\\le36.\n\\]\n\n(b) Karena\n\\[\n\\lim_{m\\to\\infty}L(f,P_{2m})=36,\n\\]\nberlaku\n\\[\n\\underline{\\int_0^6}f\\ge36.\n\\]\nUntuk setiap fungsi terbatas selalu berlaku\n\\[\n\\underline{\\int_0^6}f\\le\\overline{\\int_0^6}f.\n\\]\nGabungan ketaksamaan tersebut memberikan\n\\[\n36\\le\\underline{\\int_0^6}f\\le\\overline{\\int_0^6}f\\le36.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\underline{\\int_0^6}f=\\overline{\\int_0^6}f=36}.\n\\]\n\n(c) Berdasarkan kesamaan integral Darboux bawah dan atas, fungsi $f$ terintegralkan Darboux pada $[0,6]$ dan\n\\[\n\\boxed{\\int_0^6(6x-x^2)\\,d x=36}.\n\\]\nDengan demikian, ketiga bagian telah ditentukan. \n■",
    "visual": "parabola-darboux",
    "solutionGoals": [
      {
        "label": "a",
        "text": "Akan ditentukan integral Darboux atas berdasarkan barisan partisi $(P_n)$."
      },
      {
        "label": "b",
        "text": "Akan ditentukan integral Darboux bawah berdasarkan barisan partisi $(P_n)$."
      },
      {
        "label": "c",
        "text": "Akan dibuktikan bahwa $f$ terintegralkan Darboux pada $[0,6]$ dan ditentukan nilai integralnya."
      }
    ]
  },
  {
    "prompt": "Misalkan\n\\[\ng(x)=\n\\begin{cases}\n-x,&|x|<1,\\\\\nx,&|x|\\ge1,\n\\end{cases}\n\\]\ndan\n\\[\nG(x)=\\frac{1}{2}(x^2-1).\n\\]\nBuktikan bahwa\n\\[\n\\int_{-2}^{3}g(x)\\,d x=G(3)-G(-2)=\\frac{5}{2}.\n\\]",
    "solution": "Diketahui fungsi $g$ berubah rumus pada $x=-1$ dan $x=1$.\n\nDibuktikan bahwa integral $g$ pada $[-2,3]$ sama dengan $G(3)-G(-2)=\\frac{5}{2}$.\n\nIntegral dipisahkan sesuai rumus fungsi:\n\\[\n\\int_{-2}^{3}g(x)\\,d x\n=\\int_{-2}^{-1}x\\,d x+\\int_{-1}^{1}(-x)\\,d x+\\int_{1}^{3}x\\,d x.\n\\]\nPerhitungan masing-masing bagian memberikan\n\\[\n\\int_{-2}^{-1}x\\,d x\n=\\left[\\frac{x^2}{2}\\right]_{-2}^{-1}\n=\\frac{1}{2}-2=-\\frac{3}{2},\n\\]\n\\[\n\\int_{-1}^{1}(-x)\\,d x=0,\n\\]\ndan\n\\[\n\\int_{1}^{3}x\\,d x\n=\\left[\\frac{x^2}{2}\\right]_{1}^{3}\n=\\frac{9}{2}-\\frac{1}{2}=4.\n\\]\nOleh karena itu,\n\\[\n\\int_{-2}^{3}g(x)\\,d x=-\\frac{3}{2}+0+4=\\frac{5}{2}.\n\\]\nSelanjutnya,\n\\[\nG(3)=\\frac{1}{2}(9-1)=4,\n\\qquad\nG(-2)=\\frac{1}{2}(4-1)=\\frac{3}{2}.\n\\]\nAkibatnya,\n\\[\nG(3)-G(-2)=4-\\frac{3}{2}=\\frac{5}{2}.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_{-2}^{3}g(x)\\,d x=G(3)-G(-2)=\\frac{5}{2}}.\n\\]\nPerlu diperhatikan bahwa $G'(x)=x$ dan tidak sama dengan $g(x)$ pada $(-1,1)$. Kesamaan pada soal diperoleh dari perhitungan integral secara terpisah, bukan karena $G$ merupakan antiturunan global dari $g$. Dengan demikian, pernyataan terbukti. \n■",
    "visual": null
  },
  {
    "prompt": "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<1,\\\\\n1,&1\\le x\\le2.\n\\end{cases}\n\\]\nBuktikan bahwa $f$ terintegralkan Darboux dan tentukan nilai integralnya.",
    "solution": "Diketahui fungsi tangga $f$ pada $[0,2]$ dengan satu titik lompatan di $x=1$.\n\nDibuktikan bahwa $f$ terintegralkan Darboux dan ditentukan nilai integralnya.\n\nDiambil sebarang $0<\\delta<1$ dan digunakan partisi\n\\[\nP_\\delta=\\{0,1-\\delta,1,2\\}.\n\\]\nPada $[0,1-\\delta]$, nilai minimum dan maksimum sama-sama $2$. Pada $[1-\\delta,1]$, nilai fungsi yang muncul adalah $2$ dan $1$, sehingga infimum $1$ dan supremum $2$. Pada $[1,2]$, nilai minimum dan maksimum sama-sama $1$. Oleh karena itu,\n\\[\n\\begin{aligned}\nL(f,P_\\delta)\n&=2(1-\\delta)+1(\\delta)+1(1)\\\\\n&=3-\\delta,\n\\end{aligned}\n\\]\ndan\n\\[\n\\begin{aligned}\nU(f,P_\\delta)\n&=2(1-\\delta)+2(\\delta)+1(1)\\\\\n&=3.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\nU(f,P_\\delta)-L(f,P_\\delta)=\\delta.\n\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih\n\\[\n0<\\delta<\\min\\{1,\\varepsilon\\}.\n\\]\nDiperoleh\n\\[\nU(f,P_\\delta)-L(f,P_\\delta)=\\delta<\\varepsilon.\n\\]\nBerdasarkan Kriteria Darboux, $f$ terintegralkan Darboux. Selain itu,\n\\[\n3-\\delta=L(f,P_\\delta)\\le\\int_0^2 f(x)\\,d x\\le U(f,P_\\delta)=3.\n\\]\nDengan membiarkan $\\delta\\to0^+$ diperoleh\n\\[\n\\boxed{\\int_0^2 f(x)\\,d x=3}.\n\\]\nDengan demikian, keterintegralan dan nilai integral telah dibuktikan. \n■",
    "visual": "step-darboux"
  },
  {
    "prompt": "Misalkan fungsi kontinu $f:I=[a,b]\\to\\mathbb{R}$ dengan\n\\[\nf(x)\\ge0\\qquad\\text{untuk setiap }x\\in I.\n\\]\nBuktikan bahwa jika integral Darboux bawah $L(f)=0$, maka $f(x)=0$ untuk setiap $x\\in I$.",
    "solution": "Diketahui fungsi $f$ kontinu dan tidak negatif pada $I=[a,b]$, serta integral Darboux bawah $L(f)=0$.\n\nDibuktikan bahwa $f(x)=0$ untuk setiap $x\\in I$.\n\nDiandaikan terdapat $c\\in[a,b]$ dengan\n\\[\nf(c)>0.\n\\]\nDitetapkan\n\\[\n\\eta=\\frac{f(c)}2>0.\n\\]\nKarena $f$ kontinu di $c$, terdapat $\\delta>0$ sehingga\n\\[\n|x-c|<\\delta\n\\]\nmengakibatkan\n\\[\n|f(x)-f(c)|<\\eta.\n\\]\nAkibatnya,\n\\[\nf(x)>f(c)-\\eta=\\frac{f(c)}2\n\\]\nuntuk setiap $x$ yang cukup dekat dengan $c$. Dipilih subinterval tertutup $J=[u,v]\\subseteq[a,b]$ yang mempunyai panjang positif, memuat $c$ sebagai titik interior atau titik ujung, dan memenuhi $J\\subseteq(c-\\delta,c+\\delta)\\cap[a,b]$. Dengan demikian,\n\\[\n\\inf_{x\\in J}f(x)\\ge\\frac{f(c)}2>0.\n\\]\nDibentuk suatu partisi $P$ yang memuat $u$ dan $v$. Karena $f\\ge0$ di seluruh $[a,b]$, seluruh suku pada jumlah Darboux bawah tidak negatif, sedangkan kontribusi subinterval $J$ memenuhi\n\\[\nL(f,P)\\ge\\frac{f(c)}2(v-u)>0.\n\\]\nBerdasarkan definisi integral Darboux bawah,\n\\[\nL(f)=\\sup_P L(f,P)\\ge L(f,P)>0.\n\\]\nPernyataan tersebut bertentangan dengan asumsi $L(f)=0$. Oleh karena itu, tidak terdapat $c\\in[a,b]$ dengan $f(c)>0$. Karena $f\\ge0$, diperoleh\n\\[\n\\boxed{f(x)=0\\quad\\text{untuk setiap }x\\in[a,b]}.\n\\]\nDengan demikian, pernyataan terbukti. \n■",
    "visual": null
  },
  {
    "prompt": "Misalkan fungsi $f:[a,b]\\to\\mathbb{R}$. Buktikan bahwa apabila $f$ terintegralkan Riemann pada $[a,b]$, nilai integral Riemannnya tunggal.",
    "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terintegralkan Riemann.\n\nDibuktikan bahwa nilai integral Riemann $f$ tunggal.\n\nDiandaikan terdapat dua bilangan $I,J\\in\\mathbb{R}$ yang keduanya memenuhi definisi integral Riemann untuk $f$. Diambil sebarang $\\varepsilon>0$. Karena $I$ memenuhi definisi integral Riemann, terdapat $\\delta_1>0$ sehingga untuk setiap partisi berlabel $\\dot P$ dengan $\\lVert P\\rVert<\\delta_1$ berlaku\n\\[\n|S(f,\\dot P)-I|<\\frac{\\varepsilon}{2}.\n\\]\nKarena $J$ juga memenuhi definisi integral Riemann, terdapat $\\delta_2>0$ sehingga untuk setiap partisi berlabel $\\dot P$ dengan $\\lVert P\\rVert<\\delta_2$ berlaku\n\\[\n|S(f,\\dot P)-J|<\\frac{\\varepsilon}{2}.\n\\]\nDipilih partisi berlabel $\\dot P$ dengan\n\\[\n\\lVert P\\rVert<\\min\\{\\delta_1,\\delta_2\\}.\n\\]\nKedua ketaksamaan berlaku sekaligus. Berdasarkan ketaksamaan segitiga,\n\\[\n\\begin{aligned}\n|I-J|\n&=|I-S(f,\\dot P)+S(f,\\dot P)-J|\\\\\n&\\le|I-S(f,\\dot P)|+|S(f,\\dot P)-J|\\\\\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon.\n\\end{aligned}\n\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh $|I-J|=0$, sehingga\n\\[\n\\boxed{I=J}.\n\\]\nDengan demikian, nilai integral Riemann fungsi $f$ tunggal. \n■",
    "visual": null
  },
  {
    "prompt": "Perhatikan dua pernyataan berikut.\n\nPernyataan pertama: $f$ terintegralkan Riemann pada $[a,b]$.\n\nPernyataan kedua: $f$ terbatas pada $[a,b]$.\n\nTentukan hubungan yang benar.\n\n(a) Pernyataan pertama berakibat pernyataan kedua.\n\n(b) Pernyataan kedua berakibat pernyataan pertama.\n\n(c) Pernyataan pertama benar jika dan hanya jika pernyataan kedua benar.\n\n(d) Tidak ada kaitan antara kedua pernyataan tersebut.",
    "solution": "Diketahui pernyataan pertama menyatakan keterintegralan Riemann dan pernyataan kedua menyatakan keterbatasan fungsi.\n\nDitentukan hubungan logis antara kedua pernyataan.\n\nDalam teori integral Riemann pada selang tertutup yang digunakan di materi, fungsi yang terintegralkan Riemann harus terbatas. Dengan demikian,\n\\[\n\\text{$f$ terintegralkan Riemann}\\quad\\Longrightarrow\\quad\\text{$f$ terbatas}.\n\\]\nImplikasi sebaliknya tidak benar. Sebagai contoh digunakan fungsi Dirichlet\n\\[\nh(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nFungsi $h$ terbatas karena $0\\le h(x)\\le1$. Akan tetapi, pada setiap subinterval terdapat bilangan rasional dan irasional, sehingga infimum $h$ sama dengan $0$ dan supremumnya sama dengan $1$. Untuk setiap partisi $P$,\n\\[\nL(h,P)=0,\n\\qquad\nU(h,P)=1.\n\\]\nIntegral Darboux bawah dan atas tidak sama, sehingga $h$ tidak terintegralkan Riemann. Dengan demikian, pernyataan kedua tidak berakibat pernyataan pertama.\n\nDengan demikian, jawaban yang benar adalah\n\\[\n\\boxed{\\text{(a) Pernyataan pertama berakibat pernyataan kedua.}}\n\\]",
    "visual": null
  },
  {
    "prompt": "Misalkan konstanta $a,b\\in\\mathbb{R}$ dan fungsi\n\\[\nf(x)=\n\\begin{cases}\na,&0\\le x<1,\\\\\nb,&1\\le x\\le2.\n\\end{cases}\n\\]\nBuktikan bahwa $f$ terintegralkan Darboux dan tentukan nilai integralnya.",
    "solution": "Diketahui $a,b\\in\\mathbb{R}$ dan fungsi tangga $f$ pada $[0,2]$.\n\nDibuktikan bahwa $f$ terintegralkan Darboux dan ditentukan nilai integralnya.\n\nJika $a=b$, fungsi $f$ konstan dan hasil langsung diperoleh. Selanjutnya diandaikan $a\\neq b$. Diambil sebarang $0<\\delta<1$ dan partisi\n\\[\nP_\\delta=\\{0,1-\\delta,1,2\\}.\n\\]\nPada $[0,1-\\delta]$ diperoleh $m=M=a$. Pada $[1-\\delta,1]$ diperoleh\n\\[\nm=\\min\\{a,b\\},\\qquad M=\\max\\{a,b\\}.\n\\]\nPada $[1,2]$ diperoleh $m=M=b$. Oleh karena itu,\n\\[\nL(f,P_\\delta)=a(1-\\delta)+\\min\\{a,b\\}\\delta+b,\n\\]\ndan\n\\[\nU(f,P_\\delta)=a(1-\\delta)+\\max\\{a,b\\}\\delta+b.\n\\]\nSelisihnya adalah\n\\[\nU(f,P_\\delta)-L(f,P_\\delta)\n=\\bigl(\\max\\{a,b\\}-\\min\\{a,b\\}\\bigr)\\delta\n=|a-b|\\delta.\n\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih\n\\[\n0<\\delta<\\min\\left\\{1,\\frac{\\varepsilon}{|a-b|}\\right\\}.\n\\]\nDiperoleh\n\\[\nU(f,P_\\delta)-L(f,P_\\delta)<\\varepsilon.\n\\]\nBerdasarkan Kriteria Darboux, $f$ terintegralkan Darboux. Karena\n\\[\n\\lim_{\\delta\\to0^+}L(f,P_\\delta)=a+b\n\\]\ndan\n\\[\n\\lim_{\\delta\\to0^+}U(f,P_\\delta)=a+b,\n\\]\ndiperoleh\n\\[\n\\boxed{\\int_0^2 f(x)\\,d x=a+b}.\n\\]\nDengan demikian, keterintegralan Darboux dan nilai integral telah dibuktikan. \n■",
    "visual": null
  },
  {
    "prompt": "Jelaskan hal-hal berikut.\n\n(a) Bilamana fungsi $f:[a,b]\\to\\mathbb{R}$ terintegralkan Riemann pada $[a,b]$?\n\n(b) Buktikan bahwa jika $f$ terintegralkan Riemann pada $[a,b]$, maka nilai integralnya tunggal.",
    "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$.\n\nDitentukan syarat keterintegralan Riemann dan dibuktikan keunikan nilai integral.\n\n(a) Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ disebut terintegralkan Riemann apabila terdapat $I\\in\\mathbb{R}$ sedemikian sehingga untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ dengan sifat: untuk setiap partisi berlabel\n\\[\n\\dot P=\\{([x_{i-1},x_i],t_i)\\}_{i=1}^{n}\n\\]\nyang memenuhi\n\\[\n\\lVert P\\rVert<\\delta,\n\\]\nberlaku\n\\[\n\\left|\\sum_{i=1}^{n}f(t_i)(x_i-x_{i-1})-I\\right|<\\varepsilon.\n\\]\nBilangan $I$ tersebut ditulis sebagai\n\\[\nI=\\int_a^b f(x)\\,d x.\n\\]\n\n(b) Diandaikan $I$ dan $J$ sama-sama memenuhi definisi integral Riemann bagi $f$. Diambil sebarang $\\varepsilon>0$. Terdapat $\\delta_1,\\delta_2>0$ sehingga untuk setiap partisi berlabel dengan norma partisi kurang dari $\\delta_1$ berlaku\n\\[\n|S(f,\\dot P)-I|<\\frac{\\varepsilon}{2},\n\\]\ndan untuk norma partisi kurang dari $\\delta_2$ berlaku\n\\[\n|S(f,\\dot P)-J|<\\frac{\\varepsilon}{2}.\n\\]\nDipilih partisi berlabel dengan\n\\[\n\\lVert P\\rVert<\\min\\{\\delta_1,\\delta_2\\}.\n\\]\nBerdasarkan ketaksamaan segitiga,\n\\[\n|I-J|\\le|I-S(f,\\dot P)|+|S(f,\\dot P)-J|<\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ sebarang, diperoleh $I=J$. Dengan demikian, nilai integral Riemann tunggal. \n■",
    "visual": null,
    "solutionGoals": [
      {
        "label": "a",
        "text": "Akan dinyatakan syarat fungsi $f$ terintegralkan Riemann pada $[a,b]$."
      },
      {
        "label": "b",
        "text": "Akan dibuktikan bahwa nilai integral Riemann bersifat tunggal."
      }
    ]
  },
  {
    "prompt": "Misalkan fungsi\n\\[\nf(x)=\n\\begin{cases}\nx+2,&0\\le x\\le2,\\\\\n4-x,&2<x\\le4,\n\\end{cases}\n\\]\ndan partisi\n\\[\nP=\\left\\{0,1,\\frac{3}{2},\\frac{5}{2},\\frac{7}{2},4\\right\\}.\n\\]\nTentukan $U(f,P)$ dan $L(f,P)$.",
    "solution": "Diketahui fungsi $f$ pada $[0,4]$ dan partisi\n\\[\nP=\\left\\{0,1,\\frac{3}{2},\\frac{5}{2},\\frac{7}{2},4\\right\\}.\n\\]\nDitentukan jumlah Darboux bawah dan jumlah Darboux atas.\n\nData pada setiap subinterval adalah sebagai berikut.\n(1) $I_1=[0,1]$, $\\Delta x_1=1$, $m_1=2$, dan $M_1=3$.\n(2) $I_2=[1,\\frac{3}{2}]$, $\\Delta x_2=\\frac{1}{2}$, $m_2=3$, dan $M_2=\\frac{7}{2}$.\n(3) $I_3=[\\frac{3}{2},\\frac{5}{2}]$, $\\Delta x_3=1$, $m_3=\\frac{3}{2}$, dan $M_3=4$.\n(4) $I_4=[\\frac{5}{2},\\frac{7}{2}]$, $\\Delta x_4=1$, $m_4=\\frac{1}{2}$, dan $M_4=\\frac{3}{2}$.\n(5) $I_5=[\\frac{7}{2},4]$, $\\Delta x_5=\\frac{1}{2}$, $m_5=0$, dan $M_5=\\frac{1}{2}$.\n\nPada subinterval ketiga perlu diperhatikan bahwa $f(2)=4$, sedangkan untuk $2<x\\le\\frac{5}{2}$ berlaku $f(x)=4-x$, sehingga nilai terendah pada subinterval tersebut adalah $f(\\frac{5}{2})=\\frac{3}{2}$ dan nilai tertinggi adalah $f(2)=4$.\n\nJumlah Darboux bawah adalah\n\\[\n\\begin{aligned}\nL(f,P)\n&=2(1)+3\\left(\\frac{1}{2}\\right)+\\frac{3}{2}(1)+\\frac{1}{2}(1)+0\\left(\\frac{1}{2}\\right)\\\\\n&=2+\\frac{3}{2}+\\frac{3}{2}+\\frac{1}{2}\\\\\n&=\\boxed{\\frac{11}{2}}.\n\\end{aligned}\n\\]\nJumlah Darboux atas adalah\n\\[\n\\begin{aligned}\nU(f,P)\n&=3(1)+\\frac{7}{2}\\left(\\frac{1}{2}\\right)+4(1)+\\frac{3}{2}(1)+\\frac{1}{2}\\left(\\frac{1}{2}\\right)\\\\\n&=3+\\frac{7}{4}+4+\\frac{3}{2}+\\frac{1}{4}\\\\\n&=\\boxed{\\frac{21}{2}}.\n\\end{aligned}\n\\]",
    "visual": "piecewise-partition"
  },
  {
    "prompt": "Misalkan fungsi\n\\[\nf(x)=\n\\begin{cases}\nx+2,&0\\le x\\le2,\\\\\n4-x,&2<x\\le4.\n\\end{cases}\n\\]\n\n(a) Tentukan\n\\[\nF(x)=\\int_0^x f(t)\\,d t.\n\\]\n\n(b) Buktikan bahwa $F(x)$ kontinu di $x=2$.",
    "solution": "Diketahui fungsi $f$ pada $[0,4]$ dan\n\\[\nF(x)=\\int_0^x f(t)\\,d t.\n\\]\nDitentukan bentuk $F$ dan dibuktikan kekontinuannya di $x=2$.\n\n(a) Untuk $0\\le x\\le2$,\n\\[\n\\begin{aligned}\nF(x)\n&=\\int_0^x(t+2)\\,d t\\\\\n&=\\left[\\frac{t^2}{2}+2t\\right]_0^x\\\\\n&=\\frac{x^2}{2}+2x.\n\\end{aligned}\n\\]\nUntuk $2<x\\le4$,\n\\[\n\\begin{aligned}\nF(x)\n&=\\int_0^2(t+2)\\,d t+\\int_2^x(4-t)\\,d t\\\\\n&=6+\\left[4t-\\frac{t^2}{2}\\right]_2^x\\\\\n&=6+\\left(4x-\\frac{x^2}{2}\\right)-6\\\\\n&=4x-\\frac{x^2}{2}.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\boxed{\nF(x)=\n\\begin{cases}\n\\displaystyle \\frac{x^2}{2}+2x,&0\\le x\\le2,\\\\[1mm]\n\\displaystyle 4x-\\frac{x^2}{2},&2<x\\le4.\n\\end{cases}}\n\\]\n\n(b) Diketahui\n\\[\nF(2)=\\frac{2^2}{2}+2(2)=6.\n\\]\nLimit dari kiri adalah\n\\[\n\\lim_{x\\to2^-}F(x)\n=\\lim_{x\\to2^-}\\left(\\frac{x^2}{2}+2x\\right)=6.\n\\]\nLimit dari kanan adalah\n\\[\n\\lim_{x\\to2^+}F(x)\n=\\lim_{x\\to2^+}\\left(4x-\\frac{x^2}{2}\\right)=6.\n\\]\nDengan demikian,\n\\[\n\\lim_{x\\to2}F(x)=6=F(2).\n\\]\nBerdasarkan definisi kekontinuan, $F$ kontinu di $x=2$. Dengan demikian, bagian (b) terbukti. \n■",
    "visual": "accumulated-integral",
    "solutionGoals": [
      {
        "label": "a",
        "text": "Akan ditentukan fungsi akumulasi $F(x)=\\int_0^x f(t)\\,d t$."
      },
      {
        "label": "b",
        "text": "Akan dibuktikan bahwa $F$ kontinu di $x=2$."
      }
    ]
  }
];
