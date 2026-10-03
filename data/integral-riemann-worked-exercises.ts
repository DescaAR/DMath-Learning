export type IntegralWorkedExercise = {
  title?: string;
  source?: string;
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
  },
  {
    "prompt": "Misalkan\n\\[\nB(x)=\n\\begin{cases}\n-\\frac{1}{2}x^2,&x<0,\\\\[1mm]\n\\frac{1}{2}x^2,&x\\ge0.\n\\end{cases}\n\\]\nTunjukkan bahwa\n\\[\n\\int_a^b |x|\\,d x=B(b)-B(a).\n\\]",
    "solution": "Diketahui\n\\[\nB(x)=\n\\begin{cases}\n-\\frac{1}{2}x^2,&x<0,\\\\[1mm]\n\\frac{1}{2}x^2,&x\\ge0.\n\\end{cases}\n\\]\n\nDibuktikan bahwa\n\\[\n\\int_a^b |x|\\,d x=B(b)-B(a).\n\\]\n\nUntuk $x<0$,\n\\[\nB'(x)=-x=|x|.\n\\]\nUntuk $x>0$,\n\\[\nB'(x)=x=|x|.\n\\]\nPada $x=0$, diperiksa turunan secara langsung. Karena $B(0)=0$,\n\\[\n\\frac{B(h)-B(0)}{h}=\n\\begin{cases}\n-\\frac{1}{2}h,&h<0,\\\\[1mm]\n\\frac{1}{2}h,&h>0.\n\\end{cases}\n\\]\nKedua ruas mempunyai limit $0$ ketika $h\\to0$. Oleh karena itu,\n\\[\nB'(0)=0=|0|.\n\\]\nDengan demikian,\n\\[\nB'(x)=|x|\\qquad\\text{untuk setiap }x\\in\\mathbb{R}.\n\\]\nFungsi $|x|$ kontinu pada $[a,b]$. Berdasarkan Teorema Fundamental Kalkulus II,\n\\[\n\\int_a^b |x|\\,d x=B(b)-B(a).\n\\]\nDengan demikian, pernyataan terbukti. \n■",
    "visual": null
  },
  {
    "prompt": "Tunjukkan bahwa jika\n\\[\nf(x)=x,\\qquad x\\in[a,b],\n\\]\nintegral Darboux dari $f$ adalah\n\\[\n\\frac{1}{2}(b^2-a^2).\n\\]",
    "solution": "Diketahui $f(x)=x$ pada $[a,b]$.\n\nDibuktikan bahwa $f$ terintegralkan Darboux dan\n\\[\n\\int_a^b f(x)\\,d x=\\frac{1}{2}(b^2-a^2).\n\\]\nDipilih partisi seragam\n\\[\nP_n=\\{x_0,x_1,\\ldots,x_n\\},\\qquad x_i=a+\\frac{i(b-a)}{n}.\n\\]\nPanjang setiap subinterval adalah\n\\[\n\\Delta x_i=\\frac{b-a}{n}.\n\\]\nKarena $f(x)=x$ monoton naik, pada $I_i=[x_{i-1},x_i]$ diperoleh\n\\[\nm_i=x_{i-1},\\qquad M_i=x_i.\n\\]\nJumlah Darboux bawah adalah\n\\[\n\\begin{aligned}\nL(f,P_n)\n&=\\sum_{i=1}^{n}x_{i-1}\\frac{b-a}{n}\\\\\n&=\\frac{b-a}{n}\\sum_{i=1}^{n}\\left(a+\\frac{(i-1)(b-a)}{n}\\right)\\\\\n&=a(b-a)+\\frac{(b-a)^2(n-1)}{2n}.\n\\end{aligned}\n\\]\nJumlah Darboux atas adalah\n\\[\n\\begin{aligned}\nU(f,P_n)\n&=\\sum_{i=1}^{n}x_i\\frac{b-a}{n}\\\\\n&=\\frac{b-a}{n}\\sum_{i=1}^{n}\\left(a+\\frac{i(b-a)}{n}\\right)\\\\\n&=a(b-a)+\\frac{(b-a)^2(n+1)}{2n}.\n\\end{aligned}\n\\]\nSelanjutnya,\n\\[\n\\lim_{n\\to\\infty}L(f,P_n)=\\frac{b^2-a^2}{2},\n\\qquad\n\\lim_{n\\to\\infty}U(f,P_n)=\\frac{b^2-a^2}{2}.\n\\]\nUntuk setiap $n$ berlaku\n\\[\nL(f,P_n)\\le\\underline{\\int_a^b}f(x)\\,d x\\le\\overline{\\int_a^b}f(x)\\,d x\\le U(f,P_n).\n\\]\nKarena kedua ruas luar menuju nilai yang sama, Teorema Jepit memberikan\n\\[\n\\boxed{\\underline{\\int_a^b}f(x)\\,d x=\\overline{\\int_a^b}f(x)\\,d x=\\frac{1}{2}(b^2-a^2)}.\n\\]\nDengan demikian, $f$ terintegralkan Darboux pada $[a,b]$ dan\n\\[\n\\boxed{\\int_a^b x\\,d x=\\frac{1}{2}(b^2-a^2)}.\n\\]\nDengan demikian, pernyataan terbukti. \n■",
    "visual": null
  },
  {
    "prompt": "Misalkan $f$ dan $g$ terbatas pada $[a,b]$. Tunjukkan bahwa\n\\[\nL(f)+L(g)\\le L(f+g),\n\\]\ndengan $L(h)$ menyatakan integral Darboux bawah dari fungsi $h$.",
    "solution": "Diketahui $f$ dan $g$ terbatas pada $[a,b]$.\n\nDibuktikan bahwa\n\\[\nL(f)+L(g)\\le L(f+g).\n\\]\nDiambil sebarang partisi\n\\[\nP=\\{a=x_0<x_1<\\cdots<x_n=b\\}.\n\\]\nPada subinterval $I_i=[x_{i-1},x_i]$, dituliskan\n\\[\nm_i(f)=\\inf_{x\\in I_i}f(x),\\qquad m_i(g)=\\inf_{x\\in I_i}g(x).\n\\]\nUntuk setiap $x\\in I_i$ berlaku\n\\[\nf(x)\\ge m_i(f)\\qquad\\text{dan}\\qquad g(x)\\ge m_i(g).\n\\]\nAkibatnya,\n\\[\nf(x)+g(x)\\ge m_i(f)+m_i(g).\n\\]\nBerdasarkan definisi infimum,\n\\[\nm_i(f+g)=\\inf_{x\\in I_i}(f(x)+g(x))\\ge m_i(f)+m_i(g).\n\\]\nSetelah dikalikan dengan $\\Delta x_i>0$ dan dijumlahkan untuk seluruh subinterval, diperoleh\n\\[\n\\begin{aligned}\nL(f+g,P)\n&=\\sum_{i=1}^{n}m_i(f+g)\\Delta x_i\\\\\n&\\ge\\sum_{i=1}^{n}\\bigl(m_i(f)+m_i(g)\\bigr)\\Delta x_i\\\\\n&=L(f,P)+L(g,P).\n\\end{aligned}\n\\]\nSekarang diambil sebarang dua partisi $P$ dan $Q$ dari $[a,b]$. Dibentuk partisi penghalus bersama\n\\[\nR=P\\cup Q.\n\\]\nSifat partisi penghalus memberikan\n\\[\nL(f,R)\\ge L(f,P)\\qquad\\text{dan}\\qquad L(g,R)\\ge L(g,Q).\n\\]\nDari ketaksamaan yang telah dibuktikan untuk partisi yang sama,\n\\[\nL(f+g,R)\\ge L(f,R)+L(g,R)\\ge L(f,P)+L(g,Q).\n\\]\nKarena integral Darboux bawah merupakan supremum seluruh jumlah Darboux bawah,\n\\[\nL(f+g)=\\sup_S L(f+g,S)\\ge L(f+g,R).\n\\]\nAkibatnya,\n\\[\nL(f+g)\\ge L(f,P)+L(g,Q).\n\\]\nPartisi $P$ dan $Q$ dipilih sebarang. Dengan mengambil supremum terhadap $P$ dan $Q$, diperoleh\n\\[\n\\boxed{L(f+g)\\ge L(f)+L(g)}.\n\\]\nDengan demikian,\n\\[\n\\boxed{L(f)+L(g)\\le L(f+g)}.\n\\]\nDengan demikian, pernyataan terbukti. \n■",
    "visual": null
  }
];


export const integralRiemannArticleExercises: IntegralWorkedExercise[] = [
  {
    "title": "Partisi, norma partisi, dan partisi penghalus",
    "prompt": "Misalkan\n\\[\nP=\\left\\{0,\\frac15,\\frac12,\\frac34,1\\right\\}\n\\]\nmerupakan partisi dari $[0,1]$.\n\n(a) Tentukan panjang setiap subinterval.\n\n(b) Tentukan $\\lVert P\\rVert$.\n\n(c) Tentukan apakah $Q=\\{0,\\frac{1}{5},\\frac{2}{5},\\frac{1}{2},\\frac{3}{4},1\\}$ merupakan partisi penghalus dari $P$.",
    "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac15,\\frac12,\\frac34,1\\right\\}\n\\]\ndari $[0,1]$ dan himpunan\n\\[\nQ=\\left\\{0,\\frac15,\\frac25,\\frac12,\\frac34,1\\right\\}.\n\\]\n\nDitentukan panjang setiap subinterval dari $P$, nilai $\\lVert P\\rVert$, dan apakah $Q$ merupakan partisi penghalus dari $P$.\n\n(a) Dari titik-titik partisi $P$, diperoleh\n\\[\nI_1=\\left[0,\\frac15\\right],\\qquad\nI_2=\\left[\\frac15,\\frac12\\right],\\qquad\nI_3=\\left[\\frac12,\\frac34\\right],\\qquad\nI_4=\\left[\\frac34,1\\right].\n\\]\nPanjang masing-masing subinterval adalah\n\\[\n\\begin{aligned}\n\\Delta x_1&=\\frac15-0=\\frac15,\\\\\n\\Delta x_2&=\\frac12-\\frac15=\\frac3{10},\\\\\n\\Delta x_3&=\\frac34-\\frac12=\\frac14,\\\\\n\\Delta x_4&=1-\\frac34=\\frac14.\n\\end{aligned}\n\\]\nDengan demikian, panjang subinterval berturut-turut adalah\n\\[\n\\boxed{\\frac15,\\ \\frac3{10},\\ \\frac14,\\ \\frac14}.\n\\]\n\n(b) Berdasarkan definisi norma partisi,\n\\[\n\\lVert P\\rVert\n=\\max\\left\\{\\frac15,\\frac3{10},\\frac14,\\frac14\\right\\}\n=\\frac3{10}.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\lVert P\\rVert=\\frac3{10}}.\n\\]\n\n(c) Berdasarkan definisi partisi penghalus, perlu diperiksa apakah $P\\subseteq Q$. Semua titik pada $P$ masih terdapat pada $Q$, sedangkan $Q$ menambahkan titik baru $\\frac25$. Oleh karena itu,\n\\[\nP\\subseteq Q.\n\\]\nDengan demikian,\n\\[\n\\boxed{Q\\text{ merupakan partisi penghalus dari }P}.\n\\]\nDengan demikian, seluruh bagian pada soal ini telah diselesaikan.",
    "visual": null,
    "solutionGoals": [
      {
        "label": "a",
        "text": "Akan ditentukan panjang setiap subinterval yang dibentuk oleh partisi $P$."
      },
      {
        "label": "b",
        "text": "Akan ditentukan norma partisi $\\lVert P\\rVert$."
      },
      {
        "label": "c",
        "text": "Akan dibuktikan apakah $Q$ merupakan partisi penghalus dari $P$."
      }
    ]
  },
  {
    "title": "Jumlah Riemann fungsi linear",
    "prompt": "Misalkan $f(x)=2x+1$ pada $[0,1]$. Gunakan partisi seragam $x_i=\\frac{i}{n}$ dan label kanan $t_i=x_i$. Hitung limit jumlah Riemannnya.",
    "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ dengan\n\\[\nf(x)=2x+1,\n\\]\npartisi seragam $x_i=\\frac{i}{n}$, dan label kanan $t_i=x_i$.\nDitentukan nilai limit jumlah Riemann $S_n$ ketika $n\\to\\infty$.\n\nPartisi seragam membagi $[0,1]$ menjadi $n$ subinterval dengan\n\\[\n\\Delta x_i=x_i-x_{i-1}=\\frac1n.\n\\]\nKarena label yang dipakai adalah titik kanan,\n\\[\nt_i=x_i=\\frac{i}{n}.\n\\]\nNilai fungsi pada label adalah\n\\[\nf(t_i)=2\\frac{i}{n}+1.\n\\]\nJumlah Riemann menjadi\n\\[\\begin{aligned}\nS_n\n&=\\sum_{i=1}^{n}f(t_i)\\Delta x_i\\\\\n&=\\sum_{i=1}^{n}\\left(2\\frac{i}{n}+1\\right)\\frac1n\\\\\n&=\\frac{2}{n^2}\\sum_{i=1}^{n}i+\\frac1n\\sum_{i=1}^{n}1.\n\\end{aligned}\\]\nDigunakan rumus\n\\[\n\\sum_{i=1}^{n}i=\\frac{n(n+1)}2,\n\\qquad\n\\sum_{i=1}^{n}1=n.\n\\]\nDiperoleh\n\\[\\begin{aligned}\nS_n\n&=\\frac{2}{n^2}\\cdot\\frac{n(n+1)}2+\\frac1n\\cdot n\\\\\n&=\\frac{n+1}{n}+1\\\\\n&=2+\\frac1n.\n\\end{aligned}\\]\nKarena $\\frac{1}{n}\\to0$, maka\n\\[\n\\lim_{n\\to\\infty}S_n=2.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1(2x+1)\\,d x=2.}\n\\]\nHasil ini juga sesuai dengan perhitungan antiturunan:\n\\[\n\\left[x^2+x\\right]_0^1=2.\n\\]\nDengan demikian, nilai limit jumlah Riemann pada soal 2 telah ditentukan.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Jumlah Darboux bawah dan atas untuk $x^2$",
    "prompt": "Misalkan $f(x)=x^2$ pada $[0,1]$. Gunakan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac1n,\\frac2n,\\ldots,1\\right\\}.\n\\]\nTentukan $L(f,P_n)$ dan $U(f,P_n)$.",
    "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ dengan $f(x)=x^2$ dan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac1n,\\frac2n,\\ldots,1\\right\\}.\n\\]\nDitentukan jumlah Darboux bawah $L(f,P_n)$ dan jumlah Darboux atas $U(f,P_n)$.\n\nLangkah 1: penentuan infimum dan supremum lokal. Fungsi $f(x)=x^2$ naik pada $[0,1]$. Pada subinterval\n\\[\nI_i=\\left[\\frac{i-1}{n},\\frac{i}{n}\\right],\n\\]\nnilai terkecil dicapai di ujung kiri dan nilai terbesar dicapai di ujung kanan. Dengan demikian,\n\\[\nm_i=\\left(\\frac{i-1}{n}\\right)^2,\n\\qquad\nM_i=\\left(\\frac{i}{n}\\right)^2.\n\\]\nSelain itu,\n\\[\n\\Delta x_i=\\frac1n.\n\\]\nLangkah 2: perhitungan jumlah Darboux bawah.\\\\\n\\[\\begin{aligned}\nL(f,P_n)\n&=\\sum_{i=1}^{n}m_i\\Delta x_i\\\\\n&=\\sum_{i=1}^{n}\\left(\\frac{i-1}{n}\\right)^2\\frac1n\\\\\n&=\\frac1{n^3}\\sum_{i=1}^{n}(i-1)^2.\n\\end{aligned}\\]\nDengan substitusi $j=i-1$,\n\\[\n\\sum_{i=1}^{n}(i-1)^2=\\sum_{j=0}^{n-1}j^2\n=\\frac{(n-1)n(2n-1)}6.\n\\]\nDengan demikian,\n\\[\n\\boxed{L(f,P_n)=\\frac{(n-1)(2n-1)}{6n^2}.}\n\\]\nLangkah 3: perhitungan jumlah Darboux atas.\\\\\n\\[\\begin{aligned}\nU(f,P_n)\n&=\\sum_{i=1}^{n}M_i\\Delta x_i\\\\\n&=\\frac1{n^3}\\sum_{i=1}^{n}i^2\\\\\n&=\\frac1{n^3}\\cdot\\frac{n(n+1)(2n+1)}6.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\boxed{U(f,P_n)=\\frac{(n+1)(2n+1)}{6n^2}.}\n\\]\nLangkah 4: perbandingan kedua limit.\\\\\n\\[\n\\lim_{n\\to\\infty}L(f,P_n)\n=\\frac13,\n\\qquad\n\\lim_{n\\to\\infty}U(f,P_n)\n=\\frac13.\n\\]\nKarena jumlah bawah dan jumlah atas mendekati bilangan yang sama,\n\\[\n\\boxed{\\int_0^1 x^2\\,d x=\\frac13.}\n\\]\n\nDengan demikian, jumlah Darboux bawah dan jumlah Darboux atas pada soal 3 telah ditentukan.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Fungsi tangga",
    "prompt": "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<\\frac{1}{3},\\\\\n5,&\\frac{1}{3}\\le x\\le1.\n\\end{cases}\n\\]\nHitung $\\int_0^1f(x)\\,d x$ dan jelaskan mengapa fungsi ini terintegralkan.",
    "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<\\frac{1}{3},\\\\\n5,&\\frac{1}{3}\\le x\\le1.\n\\end{cases}\n\\]\nDitentukan nilai $\\int_0^1 f(x)\\,d x$ dan dibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[0,1]$.\n\nFungsi $f$ konstan pada dua bagian, yaitu bernilai $2$ pada $[0,\\frac{1}{3})$ dan bernilai $5$ pada $[\\frac{1}{3},1]$. Satu-satunya titik diskontinuitas adalah $x=\\frac{1}{3}$.\nSecara geometris, integralnya merupakan jumlah luas dua persegi panjang:\n\\[\n\\text{luas pertama}=2\\cdot\\frac13=\\frac23,\n\\]\n\\[\n\\text{luas kedua}=5\\cdot\\left(1-\\frac13\\right)\n=5\\cdot\\frac23=\\frac{10}{3}.\n\\]\nDengan demikian,\n\\[\n\\int_0^1f(x)\\,d x\n=\\frac23+\\frac{10}{3}=4.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1f(x)\\,d x=4.}\n\\]\nUntuk alasan keterintegralan secara Darboux, diambil interval kecil\n\\[\n\\left[\\frac13-\\eta,\\frac13+\\eta\\right]\n\\]\nyang memuat titik loncatan. Di luar interval ini, fungsi konstan sehingga kontribusi $U-L$ sama dengan nol. Pada interval kecil tersebut, osilasi fungsi adalah $5-2=3$, sehingga kontribusinya terhadap $U-L$ tidak lebih dari\n\\[\n3(2\\eta)=6\\eta.\n\\]\nUntuk setiap $\\varepsilon>0$, dipilih $\\eta<\\frac{\\varepsilon}{6}$. Dengan pilihan tersebut diperoleh $U-L<\\varepsilon$. Berdasarkan kriteria Darboux, $f$ terintegralkan Riemann.\n\nDengan demikian, nilai integral telah ditentukan dan keterintegralan fungsi pada soal 4 telah dibuktikan.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Fungsi Dirichlet",
    "prompt": "Buktikan bahwa fungsi Dirichlet\n\\[\nf(x)=\\begin{cases}\n1,&x\\in\\mathbb{Q},\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1],\n\\]\ntidak terintegralkan Riemann.",
    "solution": "Diketahui fungsi Dirichlet $f:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\\\\\n0,&x\\notin\\mathbb{Q}.\n\\end{cases}\n\\]\nDibuktikan bahwa fungsi $f$ tidak terintegralkan Riemann pada $[0,1]$.\n\nDiambil sembarang partisi\n\\[\nP=\\{x_0,x_1,\\ldots,x_n\\}.\n\\]\nSetiap subinterval $I_i=[x_{i-1},x_i]$ mempunyai panjang positif. Bilangan rasional dan irasional sama-sama rapat di $\\mathbb{R}$, sehingga setiap $I_i$ mengandung kedua jenis bilangan tersebut.\nAkibatnya, pada setiap $I_i$ fungsi mengambil nilai $0$ dan $1$. Dengan demikian,\n\\[\nm_i=\\inf_{I_i}f=0,\n\\qquad\nM_i=\\sup_{I_i}f=1.\n\\]\njumlah bawah adalah\n\\[\nL(f,P)=\\sum_{i=1}^{n}0\\cdot\\Delta x_i=0,\n\\]\nsedangkan jumlah atas adalah\n\\[\nU(f,P)=\\sum_{i=1}^{n}1\\cdot\\Delta x_i\n=\\sum_{i=1}^{n}\\Delta x_i=1.\n\\]\nIni berlaku untuk setiap partisi. Karena itu\n\\[\n\\underline{\\int_0^1}f=0,\n\\qquad\n\\overline{\\int_0^1}f=1.\n\\]\nKedua integral Darboux tidak sama. Oleh karena itu,\n\\[\n\\boxed{f\\text{ tidak terintegralkan Riemann}.}\n\\]\nIntinya, memperbanyak titik partisi tidak mengurangi osilasi fungsi: pada setiap subinterval osilasinya tetap $1$.\nDengan demikian, pernyataan pada soal 5 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "jumlah bawah fungsi Thomae",
    "prompt": "Untuk fungsi Thomae\n\\[\nf(x)=\n\\begin{cases}\n\\frac{1}{q},&x=\\frac{p}{q}\\in\\mathbb{Q},\\ (p,q)=1,\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\]\nJelaskan mengapa jumlah Darboux bawah pada setiap partisi $P$ dari $[0,1]$ adalah nol.",
    "solution": "Diketahui fungsi Thomae $f:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\nf(x)=\n\\begin{cases}\n\\frac{1}{q},&x=\\frac{p}{q}\\in\\mathbb{Q},\\ (p,q)=1,\\\\\n0,&x\\notin\\mathbb{Q}.\n\\end{cases}\n\\]\nDibuktikan bahwa untuk setiap partisi $P$ dari $[0,1]$ berlaku $L(f,P)=0$.\n\nDiambil sembarang subinterval $I_i=[x_{i-1},x_i]$ dari suatu partisi $P$. Karena bilangan irasional rapat di $\\mathbb{R}$, $I_i$ mengandung suatu bilangan irasional $r$. Pada titik ini,\n\\[\nf(r)=0.\n\\]\nDi sisi lain, fungsi Thomae selalu tidak negatif, sehingga\n\\[\nf(x)\\ge0\\qquad\\text{untuk semua }x.\n\\]\nDengan demikian, $0$ adalah batas bawah nilai fungsi pada $I_i$, dan karena nilai $0$ benar-benar dicapai pada titik-titik irasional,\n\\[\nm_i=\\inf_{I_i}f=0.\n\\]\nHal tersebut berlaku untuk seluruh subinterval. Oleh karena itu,\n\\[\nL(f,P)=\\sum_{i=1}^{n}m_i\\Delta x_i\n=\\sum_{i=1}^{n}0\\cdot\\Delta x_i=0.\n\\]\nDengan demikian,\n\\[\n\\boxed{L(f,P)=0\\text{ untuk setiap partisi }P.}\n\\]\nPerlu dicatat bahwa kesimpulan ini belum sendirinya membuktikan keterintegralan Thomae; masih perlu ditunjukkan bahwa jumlah atas dapat dibuat sekecil yang diinginkan.\nDengan demikian, pernyataan pada soal 6 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Fungsi monoton",
    "prompt": "Misalkan $f:[a,b]\\to\\mathbb{R}$ monoton naik. Buktikan bahwa $f$ terintegralkan Riemann menggunakan partisi seragam.",
    "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ monoton naik.\n\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[a,b]$ dengan menggunakan partisi seragam.\n\nUntuk $n\\in\\mathbb N$, diambil partisi seragam\n\\[\nx_i=a+i\\frac{b-a}{n},\\qquad i=0,1,\\ldots,n.\n\\]\nSetiap subinterval mempunyai panjang\n\\[\n\\Delta x=\\frac{b-a}{n}.\n\\]\nKarena $f$ naik, pada $I_i=[x_{i-1},x_i]$ berlaku\n\\[\nm_i=f(x_{i-1}),\n\\qquad\nM_i=f(x_i).\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(f,P_n)-L(f,P_n)\n&=\\sum_{i=1}^{n}[M_i-m_i]\\Delta x\\\\\n&=\\frac{b-a}{n}\\sum_{i=1}^{n}[f(x_i)-f(x_{i-1})].\n\\end{aligned}\\]\nJumlah di dalam kurung bersifat teleskopik:\n\\[\\begin{aligned}\n&[f(x_1)-f(x_0)]+[f(x_2)-f(x_1)]+\\cdots+[f(x_n)-f(x_{n-1})]\\\\\n&\\qquad=f(x_n)-f(x_0)=f(b)-f(a).\n\\end{aligned}\\]\nDengan demikian,\n\\[\nU(f,P_n)-L(f,P_n)\n=\\frac{(b-a)[f(b)-f(a)]}{n}.\n\\]\nUntuk setiap $\\varepsilon>0$, dipilih\n\\[\nn>\\frac{(b-a)[f(b)-f(a)]}{\\varepsilon}.\n\\]\nDengan pemilihan tersebut,\n\\[\nU(f,P_n)-L(f,P_n)<\\varepsilon.\n\\]\nBerdasarkan kriteria Darboux,\n\\[\n\\boxed{f\\text{ terintegralkan Riemann pada }[a,b].}\n\\]\nDengan demikian, pernyataan pada soal 7 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Fungsi kontinu",
    "prompt": "Buktikan bahwa jika $f$ kontinu pada $[a,b]$, maka $f$ terintegralkan Riemann.",
    "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ kontinu pada interval tertutup $[a,b]$.\n\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[a,b]$.\n\nKarena $[a,b]$ kompak dan $f$ kontinu, Teorema Heine--Cantor menyatakan bahwa $f$ kontinu seragam. Artinya, untuk setiap $\\eta>0$ terdapat $\\delta>0$ sedemikian sehingga\n\\[\n|x-y|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(x)-f(y)|<\\eta.\n\\]\nDiambil $\\varepsilon>0$ dan dipilih\n\\[\n\\eta=\\frac{\\varepsilon}{b-a}.\n\\]\nDari kontinuitas seragam terdapat $\\delta>0$ yang sesuai. Sekarang dipilih partisi $P$ dengan\n\\[\n\\lVert P\\rVert<\\delta.\n\\]\nJika $x,y$ berada dalam subinterval yang sama $I_i$, maka\n\\[\n|x-y|\\le \\Delta x_i\\le\\lVert P\\rVert<\\delta.\n\\]\nAkibatnya\n\\[\n|f(x)-f(y)|<\\frac{\\varepsilon}{b-a}.\n\\]\nDengan mengambil supremum terhadap $x$ dan infimum terhadap $y$ di $I_i$, diperoleh\n\\[\nM_i-m_i\\le\\frac{\\varepsilon}{b-a}.\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\n&=\\sum_{i=1}^{n}(M_i-m_i)\\Delta x_i\\\\\n&\\le\\frac{\\varepsilon}{b-a}\\sum_{i=1}^{n}\\Delta x_i\\\\\n&=\\frac{\\varepsilon}{b-a}(b-a)=\\varepsilon.\n\\end{aligned}\\]\nKarena $\\varepsilon>0$ sebarang, kriteria Darboux memberikan\n\\[\n\\boxed{f\\text{ terintegralkan Riemann}.}\n\\]\nDengan demikian, pernyataan pada soal 8 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Linearitas integral",
    "prompt": "Misalkan $f,g$ terintegralkan pada $[a,b]$. Buktikan bahwa $3f-2g$ terintegralkan dan\n\\[\n\\int_a^b(3f-2g)\\,d x\n=3\\int_a^bf\\,d x-2\\int_a^bg\\,d x.\n\\]",
    "solution": "Diketahui fungsi $f,g:[a,b]\\to\\mathbb{R}$ terintegralkan Riemann.\n\nDibuktikan bahwa fungsi $3f-2g$ terintegralkan Riemann dan memenuhi\n\\[\n\\int_a^b(3f-2g)\\,d x\n=3\\int_a^b f\\,d x-2\\int_a^b g\\,d x.\n\\]\nDituliskan\n\\[\nI_f=\\int_a^bf(x)\\,d x,\n\\qquad\nI_g=\\int_a^bg(x)\\,d x.\n\\]\nUntuk sembarang partisi berlabel $\\dot P$,\n\\[\\begin{aligned}\nS(3f-2g,\\dot P)\n&=\\sum_{i=1}^{n}[3f(t_i)-2g(t_i)]\\Delta x_i\\\\\n&=3\\sum_{i=1}^{n}f(t_i)\\Delta x_i\n-2\\sum_{i=1}^{n}g(t_i)\\Delta x_i\\\\\n&=3S(f,\\dot P)-2S(g,\\dot P).\n\\end{aligned}\\]\nKarena $f$ dan $g$ terintegralkan Riemann, untuk partisi yang cukup halus berlaku\n\\[\nS(f,\\dot P)\\to I_f,\n\\qquad\nS(g,\\dot P)\\to I_g.\n\\]\nDengan linearitas limit,\n\\[\nS(3f-2g,\\dot P)\\to3I_f-2I_g.\n\\]\nDengan demikian, $3f-2g$ terintegralkan Riemann dan\n\\[\n\\boxed{\n\\int_a^b(3f-2g)\\,d x\n=3\\int_a^bf\\,d x-2\\int_a^bg\\,d x.}\n\\]\nJika ingin menuliskannya langsung dalam bahasa $\\varepsilon$-$\\delta$, untuk $\\varepsilon>0$ dipilih partisi cukup halus agar\n\\[\n|S(f,\\dot P)-I_f|<\\frac{\\varepsilon}{6},\n\\qquad\n|S(g,\\dot P)-I_g|<\\frac{\\varepsilon}{4}.\n\\]\nKemudian\n\\[\\begin{aligned}\n|S(3f-2g,\\dot P)-(3I_f-2I_g)|\n&\\le3|S(f,\\dot P)-I_f|+2|S(g,\\dot P)-I_g|\\\\\n&<\\frac\\varepsilon2+\\frac\\varepsilon2=\\varepsilon.\n\\end{aligned}\\]\nDengan demikian, pernyataan pada soal 9 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Ketaksamaan nilai mutlak",
    "prompt": "Misalkan fungsi $f$ terintegralkan Riemann pada $[a,b]$. Buktikan bahwa\n\\[\n\\left|\\int_a^bf(x)\\,d x\\right|\n\\le\\int_a^b|f(x)|\\,d x.\n\\]",
    "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terintegralkan Riemann.\n\nDibuktikan bahwa\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\n\\le \\int_a^b |f(x)|\\,d x.\n\\]\nUntuk setiap $x\\in[a,b]$ berlaku\n\\[\n-|f(x)|\\le f(x)\\le |f(x)|.\n\\]\nKarena integral mempertahankan urutan, integral diterapkan pada seluruh ruas:\n\\[\n\\int_a^b-|f(x)|\\,d x\n\\le\n\\int_a^bf(x)\\,d x\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]\nDengan linearitas integral,\n\\[\n-\\int_a^b|f(x)|\\,d x\n\\le\n\\int_a^bf(x)\\,d x\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]\nJika suatu bilangan real $z$ memenuhi $-A\\le z\\le A$ dengan $A\\ge0$, maka $|z|\\le A$. Diambil\n\\[\nz=\\int_a^bf(x)\\,d x,\n\\qquad\nA=\\int_a^b|f(x)|\\,d x.\n\\]\nDengan demikian,\n\\[\n\\boxed{\n\\left|\\int_a^bf(x)\\,d x\\right|\n\\le\\int_a^b|f(x)|\\,d x.}\n\\]\nDengan demikian, pernyataan pada soal 10 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Kriteria Darboux",
    "prompt": "Misalkan $f$ terbatas pada $[a,b]$. Buktikan bahwa jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon,\n\\]\nfungsi $f$ terintegralkan Darboux.",
    "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas dan untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDibuktikan bahwa fungsi $f$ terintegralkan Darboux pada $[a,b]$.\n\nDari definisi integral Darboux bawah sebagai supremum jumlah bawah dan integral Darboux atas sebagai infimum jumlah atas, untuk setiap partisi $P$ berlaku\n\\[\nL(f,P)\\le\\underline{\\int_a^b} f\n\\le\\overline{\\int_a^b} f\\le U(f,P).\n\\]\nDengan mengurangkan integral Darboux bawah dari integral Darboux atas berdasarkan urutan di atas, diperoleh\n\\[\n0\\le\\overline{\\int_a^b} f-\\underline{\\int_a^b} f\n\\le U(f,P)-L(f,P).\n\\]\nMenurut asumsi, untuk setiap $\\varepsilon>0$ dapat dipilih $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDengan demikian,\n\\[\n0\\le\\overline{\\int_a^b} f-\\underline{\\int_a^b} f<\\varepsilon.\n\\]\nKetaksamaan ini benar untuk setiap $\\varepsilon>0$. Satu-satunya bilangan real nonnegatif yang lebih kecil daripada setiap $\\varepsilon>0$ adalah nol. Oleh karena itu,\n\\[\n\\overline{\\int_a^b} f-\\underline{\\int_a^b} f=0.\n\\]\nDengan demikian\n\\[\n\\underline{\\int_a^b} f=\\overline{\\int_a^b} f,\n\\]\nBerdasarkan definisi,\n\\[\n\\boxed{f\\text{ terintegralkan Darboux}.}\n\\]\nDengan demikian, pernyataan pada soal 11 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Diskontinuitas berhingga",
    "prompt": "Misalkan $f:[0,1]\\to\\mathbb{R}$ terbatas dan kontinu kecuali di $\\frac{1}{4},\\frac{1}{2},\\frac{3}{4}$. Jelaskan strategi Darboux untuk membuktikan bahwa $f$ terintegralkan.",
    "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ terbatas dan kontinu kecuali pada titik $\\frac{1}{4}$, $\\frac{1}{2}$, dan $\\frac{3}{4}$.\n\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[0,1]$ dengan menggunakan Kriteria Darboux.\n\nKarena $f$ terbatas, terdapat $M>0$ sehingga\n\\[\n|f(x)|\\le M\n\\qquad (x\\in[0,1]).\n\\]\nDengan demikian, osilasi fungsi pada sembarang subinterval paling besar $2M$.\nDiambil $\\varepsilon>0$. Dipilih tiga interval kecil $J_1,J_2,J_3$ yang masing-masing memuat $\\frac{1}{4},\\frac{1}{2},\\frac{3}{4}$ dan mempunyai total panjang\n\\[\n|J_1|+|J_2|+|J_3|<\\frac{\\varepsilon}{4M}.\n\\]\nPada gabungan interval kecil yang memuat titik-titik diskontinuitas tersebut, kontribusi maksimum terhadap $U-L$ adalah\n\\[\n2M(|J_1|+|J_2|+|J_3|)\n<2M\\frac{\\varepsilon}{4M}=\\frac\\varepsilon2.\n\\]\nSelanjutnya, komplemen ketiga interval kecil tersebut di $[0,1]$ merupakan gabungan berhingga interval tertutup yang tidak mengandung titik diskontinuitas. Pada masing-masing interval tertutup itu, $f$ kontinu, sehingga kontinu seragam. Berdasarkan kekontinuan seragam tersebut, dapat dipilih partisi cukup halus agar pada setiap subinterval bagian ini\n\\[\nM_i-m_i<\\frac\\varepsilon2.\n\\]\nLebih tepat, cukup membuat total kontribusi bagian kontinu kurang dari $\\frac{\\varepsilon}{2}$.\nSeluruh titik ujung interval kecil dan titik-titik partisi pada bagian kontinu kemudian digabungkan menjadi satu partisi $P$. Dengan demikian,\n\\[\nU(f,P)-L(f,P)\n<\\frac\\varepsilon2+\\frac\\varepsilon2=\\varepsilon.\n\\]\nKriteria Darboux memberikan\n\\[\n\\boxed{f\\text{ terintegralkan Riemann}.}\n\\]\nDengan demikian, pernyataan pada soal 12 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Osilasi lokal",
    "prompt": "Untuk $f(x)=x^2$ pada $[0,2]$, tentukan osilasi $f$ pada $[u,v]\\subseteq[0,2]$.",
    "solution": "Diketahui fungsi $f:[0,2]\\to\\mathbb{R}$ dengan $f(x)=x^2$ dan subinterval $[u,v]\\subseteq[0,2]$.\n\nDitentukan nilai osilasi $\\operatorname{osc}(f,[u,v])$.\n\nKarena $x^2$ meningkat pada $[0,2]$, untuk $u\\le v$ berlaku\n\\[\n\\inf_{x\\in[u,v]}x^2=u^2,\n\\qquad\n\\sup_{x\\in[u,v]}x^2=v^2.\n\\]\nMenurut definisi osilasi,\n\\[\\begin{aligned}\n\\operatorname{osc}(f,[u,v])\n&=\\sup_{[u,v]}f-\\inf_{[u,v]}f\\\\\n&=v^2-u^2\\\\\n&=(v-u)(v+u).\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\boxed{\\operatorname{osc}(f,[u,v])=v^2-u^2.}\n\\]\nRumus ini juga menunjukkan bahwa jika panjang interval $v-u$ mengecil, osilasinya ikut mengecil. Karena $0\\le u,v\\le2$, bahkan diperoleh estimasi\n\\[\n\\operatorname{osc}(f,[u,v])=(v-u)(v+u)\\le4(v-u).\n\\]\nEstimasi tersebut merupakan contoh konkret hubungan antara panjang subinterval dan osilasi fungsi kontinu.\nDengan demikian, nilai osilasi pada soal 13 telah ditentukan.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Riemann versus Darboux",
    "prompt": "Jelaskan mengapa syarat\n\\[\nU(f,P)-L(f,P)<\\varepsilon\n\\]\nmenjamin semua jumlah Riemann yang memakai partisi dasar $P$ saling dekat.",
    "solution": "Diketahui fungsi terbatas $f:[a,b]\\to\\mathbb{R}$, suatu partisi $P$ dari $[a,b]$, dan\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDibuktikan bahwa setiap dua jumlah Riemann yang menggunakan partisi dasar $P$ berbeda kurang dari $\\varepsilon$.\n\nDiambil dua pemilihan label yang berbeda pada partisi dasar yang sama $P$. partisi berlabel yang dihasilkan dinyatakan sebagai $\\dot P_1$ dan $\\dot P_2$. Dari Lemma Jepit Riemann--Darboux,\n\\[\nL(f,P)\\le S(f,\\dot P_1)\\le U(f,P),\n\\]\ndan\n\\[\nL(f,P)\\le S(f,\\dot P_2)\\le U(f,P).\n\\]\nArtinya, kedua jumlah Riemann berada di dalam interval bilangan real yang sama,\n\\[\n[L(f,P),U(f,P)].\n\\]\nPanjang interval tersebut adalah\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nJarak dua titik mana pun di dalam interval sepanjang kurang dari $\\varepsilon$ juga kurang dari $\\varepsilon$. Oleh karena itu,\n\\[\n|S(f,\\dot P_1)-S(f,\\dot P_2)|<\\varepsilon.\n\\]\nDengan demikian,\n\\[\n\\boxed{U(f,P)-L(f,P)<\\varepsilon\n\\Longrightarrow\n\\text{semua jumlah Riemann pada }P\\text{ saling berjarak }<\\varepsilon.}\n\\]\nInilah alasan konseptual mengapa pendekatan Darboux efektif: cukup mengontrol dua batas ekstrem untuk sekaligus mengontrol semua kemungkinan label.\nDengan demikian, pernyataan pada soal 14 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  },
  {
    "title": "Perubahan pada berhingga banyak titik",
    "prompt": "Misalkan $f,g$ terintegralkan pada $[a,b]$ dan $f(x)=g(x)$ kecuali mungkin pada sejumlah hingga titik. Buktikan bahwa\n\\[\n\\int_a^bf(x)\\,d x=\n\\int_a^bg(x)\\,d x.\n\\]",
    "solution": "Diketahui fungsi $f,g:[a,b]\\to\\mathbb{R}$ terintegralkan Riemann dan memenuhi $f(x)=g(x)$ kecuali pada berhingga banyak titik.\n\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,d x=\\int_a^b g(x)\\,d x.\n\\]\nDidefinisikan\n\\[\nh=f-g.\n\\]\nKarena $f$ dan $g$ terintegralkan, linearitas integral memberi bahwa $h$ juga terintegralkan dan\n\\[\n\\int_a^bh\n=\\int_a^bf-\\int_a^bg.\n\\]\nDengan demikian, cukup dibuktikan bahwa\n\\[\n\\int_a^bh=0.\n\\]\nMenurut asumsi, terdapat berhingga banyak titik\n\\[\nc_1,c_2,\\ldots,c_m\n\\]\ntempat $h$ mungkin tidak nol. Karena $h$ terintegralkan, $h$ terbatas; dipilih $M\\ge0$ sehingga\n\\[\n|h(x)|\\le M\n\\qquad (x\\in[a,b]).\n\\]\nJika $M=0$, maka $h\\equiv0$ dan hasil langsung selesai. Sekarang dianggap $M>0$.\nDiambil $\\varepsilon>0$. Untuk setiap $c_j$, dipilih interval kecil $J_j$ yang memuat $c_j$, dengan total panjang yang diatur agar memenuhi\n\\[\n\\sum_{j=1}^{m}|J_j|<\\frac{\\varepsilon}{2M}.\n\\]\nDibentuk partisi $P$ yang memuat semua ujung interval $J_j$. Pada setiap subinterval yang tidak berpotongan dengan $J_1\\cup\\cdots\\cup J_m$, berlaku $h=0$, sehingga kontribusinya terhadap jumlah atas dan jumlah bawah nol.\nPada subinterval yang berada di dalam gabungan interval kecil, berlaku\n\\[\n-M\\le h(x)\\le M.\n\\]\nKarena itu kontribusi total jumlah atas memenuhi\n\\[\nU(h,P)\n\\le M\\sum_{j=1}^{m}|J_j|\n<\\frac\\varepsilon2,\n\\]\nsedangkan jumlah bawah memenuhi\n\\[\nL(h,P)\n\\ge -M\\sum_{j=1}^{m}|J_j|\n>-\\frac\\varepsilon2.\n\\]\nKarena integral $h$ dijepit di antara jumlah bawah dan jumlah atas,\n\\[\n-\\frac\\varepsilon2\n<L(h,P)\n\\le\\int_a^bh\n\\le U(h,P)\n<\\frac\\varepsilon2.\n\\]\nDengan demikian,\n\\[\n\\left|\\int_a^bh\\right|<\\frac\\varepsilon2<\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ sebarang,\n\\[\n\\int_a^bh=0.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_a^bf(x)\\,d x=\\int_a^bg(x)\\,d x.}\n\\]\nDengan demikian, pernyataan pada soal 15 terbukti.",
    "visual": null,
    "source": "Artikel Integral Riemann dan Darboux"
  }
];
