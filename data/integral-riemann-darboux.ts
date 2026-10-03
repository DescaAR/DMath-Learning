export type IntegralSourceBlock = {
  kind: "paragraph" | "definition" | "lemma" | "proposition" | "theorem" | "corollary" | "note" | "example" | "exercise" | "proof";
  title?: string;
  text?: string;
  body?: string;
  proof?: string;
  solution?: string;
};
export type IntegralSourceSubsection = { title: string; blocks: IntegralSourceBlock[] };
export type IntegralSourceSection = { title: string; blocks: IntegralSourceBlock[]; subsections: IntegralSourceSubsection[] };
export const integralRiemannDarbouxSections: IntegralSourceSection[] = [
  {
    "title": "Pendahuluan dan Objek Dasar",
    "blocks": [],
    "subsections": [
      {
        "title": "Motivasi integral",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Diberikan $f:[a,b]\\to\\mathbb{R}$. Secara geometris, ketika $f(x)\\ge 0$ pada $[a,b]$, integral diharapkan menyatakan luas daerah di bawah grafik $f$. Jika fungsi dapat bernilai negatif, integral dipahami sebagai luas bertanda. Tantangan utama Analisis Real bukan sekadar menghitung luas untuk fungsi sederhana, melainkan mendefinisikan secara formal kapan suatu fungsi mempunyai integral dan mengapa nilai integral tersebut tunggal.\nDua pendekatan klasik yang akan dipakai adalah pendekatan Riemann dan Darboux. Riemann menggunakan titik label pada tiap subinterval, sedangkan Darboux menggunakan batas bawah dan batas atas fungsi pada tiap subinterval."
          },
          {
            "kind": "definition",
            "title": "Fungsi terbatas",
            "body": "Fungsi $f:[a,b]\\to\\mathbb{R}$ disebut terbatas apabila terdapat $M>0$ sehingga\n\\[\n|f(x)|\\le M\n\\qquad\\text{untuk setiap }x\\in[a,b].\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan fungsi\n\\[\nf(x)=\\sin x,\\qquad x\\in[0,2\\pi],\n\\]\ndan\n\\[\ng(x)=\\frac{1}{x},\\qquad x\\in(0,1].\n\\]\nBuktikan bahwa $f$ terbatas pada $[0,2\\pi]$, sedangkan $g$ tidak terbatas pada $(0,1]$.",
            "solution": "Diketahui fungsi $f(x)=\\sin x$ pada $[0,2\\pi]$ dan $g(x)=\\frac{1}{x}$ pada $(0,1]$.\nDibuktikan bahwa $f$ terbatas pada $[0,2\\pi]$ dan $g$ tidak terbatas pada $(0,1]$.\nUntuk setiap $x\\in[0,2\\pi]$ berlaku\n\\[\n-1\\le \\sin x\\le 1.\n\\]\nAkibatnya,\n\\[\n|f(x)|=|\\sin x|\\le1.\n\\]\nBerdasarkan Definisi fungsi terbatas, dapat digunakan konstanta $M=1$. Dengan demikian, $f$ terbatas pada $[0,2\\pi]$.\nSelanjutnya dibuktikan bahwa $g$ tidak terbatas. Diambil sebarang $M>0$. Dipilih\n\\[\nx=\\frac{1}{M+1}.\n\\]\nKarena $M>0$, diperoleh $0<x\\le1$, sehingga $x\\in(0,1]$. Nilai fungsi pada titik tersebut adalah\n\\[\ng(x)=\\frac{1}{x}=M+1>M.\n\\]\nDengan demikian, untuk setiap calon batas atas $M>0$ selalu terdapat $x\\in(0,1]$ dengan $g(x)>M$. Tidak terdapat bilangan real yang membatasi $g$ dari atas pada $(0,1]$.\nDengan demikian, $f$ terbatas pada $[0,2\\pi]$ dan $g$ tidak terbatas pada $(0,1]$, sehingga pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Asumsi keterbatasan diperlukan dalam teori Darboux klasik karena infimum dan supremum fungsi pada setiap subinterval harus berupa bilangan real. Sepanjang artikel ini, kecuali dinyatakan lain, fungsi yang dibahas adalah fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ dengan $a<b$."
          }
        ]
      },
      {
        "title": "Infimum dan supremum",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Jika $A\\subseteq\\mathbb{R}$ tidak kosong dan terbatas, maka $\\inf A$ adalah batas bawah terbesar dari $A$, sedangkan $\\sup A$ adalah batas atas terkecil dari $A$. Sifat aproksimasi berikut akan digunakan berulang kali."
          },
          {
            "kind": "lemma",
            "title": "Sifat aproksimasi supremum dan infimum",
            "body": "Diberikan $A\\subseteq\\mathbb{R}$ tidak kosong dan terbatas. Jika $M=\\sup A$, maka untuk setiap $\\eta>0$ terdapat $a\\in A$ sehingga\n\\[\nM-\\eta<a\\le M.\n\\]\nJika $m=\\inf A$, maka untuk setiap $\\eta>0$ terdapat $a\\in A$ sehingga\n\\[\nm\\le a<m+\\eta.\n\\]",
            "proof": "Diketahui himpunan $A\\subseteq\\mathbb{R}$ tidak kosong dan terbatas, dengan $M=\\sup A$ dan $m=\\inf A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat elemen $a\\in A$ yang mendekati supremum dari bawah dan infimum dari atas. Pembuktian dilakukan dalam dua bagian.\n(1) Aproksimasi supremum.\nDiketahui $M=\\sup A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat $a\\in A$ yang memenuhi\n\\[\nM-\\eta<a\\le M.\n\\]\nDiambil sebarang $\\eta>0$. Diandaikan tidak terdapat $a\\in A$ yang memenuhi $M-\\eta<a$. Dengan demikian, setiap $a\\in A$ memenuhi\n\\[\na\\le M-\\eta.\n\\]\nHal ini berarti $M-\\eta$ merupakan batas atas bagi $A$. Karena $\\eta>0$, berlaku $M-\\eta<M$, sehingga diperoleh suatu batas atas yang lebih kecil daripada $M$. Pernyataan tersebut bertentangan dengan fakta bahwa $M=\\sup A$ merupakan batas atas terkecil dari $A$. Oleh karena itu, terdapat $a\\in A$ yang memenuhi\n\\[\nM-\\eta<a\\le M.\n\\]\n(2) Aproksimasi infimum.\nDiketahui $m=\\inf A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat $a\\in A$ yang memenuhi\n\\[\nm\\le a<m+\\eta.\n\\]\nDiambil sebarang $\\eta>0$. Diandaikan tidak terdapat $a\\in A$ yang memenuhi $a<m+\\eta$. Dengan demikian, setiap $a\\in A$ memenuhi\n\\[\na\\ge m+\\eta.\n\\]\nHal ini berarti $m+\\eta$ merupakan batas bawah bagi $A$. Karena $\\eta>0$, berlaku $m+\\eta>m$, sehingga diperoleh suatu batas bawah yang lebih besar daripada $m$. Pernyataan tersebut bertentangan dengan fakta bahwa $m=\\inf A$ merupakan batas bawah terbesar dari $A$. Oleh karena itu, terdapat $a\\in A$ yang memenuhi\n\\[\nm\\le a<m+\\eta.\n\\]\nBerdasarkan kedua bagian tersebut, sifat aproksimasi supremum dan infimum berlaku. Dengan demikian, lemma tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, titik-titik himpunan dapat ditemukan sedekat yang diinginkan dengan supremum dari bawah dan dengan infimum dari atas."
          }
        ]
      }
    ]
  },
  {
    "title": "Partisi dan Jumlah Riemann",
    "blocks": [],
    "subsections": [
      {
        "title": "Partisi interval",
        "blocks": [
          {
            "kind": "definition",
            "title": "Partisi",
            "body": "Sebuah partisi $P$ dari $[a,b]$ adalah himpunan berhingga\n\\[\nP=\\{x_0,x_1,\\ldots,x_n\\}\n\\]\ndengan\n\\[\na=x_0<x_1<\\cdots<x_n=b.\n\\]\nPartisi tersebut membagi $[a,b]$ menjadi subinterval\n\\[\nI_i=[x_{i-1},x_i],\\qquad i=1,2,\\ldots,n.\n\\]\nPanjang subinterval ke-$i$ ditulis\n\\[\n\\Delta x_i=x_i-x_{i-1}.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Pada interval $[0,1]$ diberikan himpunan\n\\[\nP=\\left\\{0,\\frac{1}{4},\\frac{1}{2},1\\right\\}.\n\\]\nBuktikan bahwa $P$ merupakan partisi dari $[0,1]$, kemudian ditentukan subinterval dan panjang masing-masing subintervalnya.",
            "solution": "Diketahui interval $[0,1]$ dan himpunan\n\\[\nP=\\left\\{0,\\frac{1}{4},\\frac{1}{2},1\\right\\}.\n\\]\nDibuktikan bahwa $P$ merupakan partisi dari $[0,1]$ dan ditentukan subinterval yang dibentuk oleh $P$.\nUrutan titik-titik pada $P$ memenuhi\n\\[\n0<\\frac{1}{4}<\\frac{1}{2}<1.\n\\]\nTitik pertama adalah $0$ dan titik terakhir adalah $1$. Oleh karena itu, syarat definisi partisi terpenuhi.\nSubinterval yang terbentuk adalah\n\\[\n\\left[0,\\frac{1}{4}\\right],\\qquad\n\\left[\\frac{1}{4},\\frac{1}{2}\\right],\\qquad\n\\left[\\frac{1}{2},1\\right].\n\\]\nPanjang masing-masing subinterval adalah\n\\[\n\\frac{1}{4}-0=\\frac{1}{4},\n\\]\n\\[\n\\frac{1}{2}-\\frac{1}{4}=\\frac{1}{4},\n\\]\ndan\n\\[\n1-\\frac{1}{2}=\\frac{1}{2}.\n\\]\nDengan demikian, $P$ merupakan partisi dari $[0,1]$ dengan panjang subinterval berturut-turut $\\frac{1}{4}$, $\\frac{1}{4}$, dan $\\frac{1}{2}$. Pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "definition",
            "title": "Norma partisi",
            "body": "Jika $P=\\{x_0,\\ldots,x_n\\}$ adalah partisi $[a,b]$, maka norma partisi didefinisikan oleh\n\\[\n\\lVert P\\rVert=\\max_{1\\le i\\le n}(x_i-x_{i-1})\n=\\max_{1\\le i\\le n}\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan partisi\n\\[\nP=\\left\\{0,\\frac{1}{4},\\frac{1}{2},1\\right\\}\n\\]\ndari $[0,1]$. Tentukan norma partisi $\\lVert P\\rVert$.",
            "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac{1}{4},\\frac{1}{2},1\\right\\}.\n\\]\nDitentukan nilai norma partisi $\\lVert P\\rVert$.\nPanjang subinterval-subinterval yang dibentuk oleh $P$ adalah\n\\[\n\\Delta x_1=\\frac{1}{4},\n\\qquad\n\\Delta x_2=\\frac{1}{4},\n\\qquad\n\\Delta x_3=\\frac{1}{2}.\n\\]\nBerdasarkan definisi norma partisi,\n\\[\n\\lVert P\\rVert=\\max\\left\\{\\frac{1}{4},\\frac{1}{4},\\frac{1}{2}\\right\\}.\n\\]\nNilai maksimum dari ketiga panjang tersebut adalah $\\frac{1}{2}$. Dengan demikian,\n\\[\n\\boxed{\\lVert P\\rVert=\\frac{1}{2}}.\n\\]\nNilai norma partisi pada contoh tersebut telah ditentukan."
          },
          {
            "kind": "paragraph",
            "text": "Semakin kecil $\\lVert P\\rVert$, semakin halus partisi tersebut. Untuk partisi seragam\n\\[\nx_i=a+i\\frac{b-a}{n},\n\\]\nsemua subinterval mempunyai panjang yang sama, sehingga\n\\[\n\\lVert P\\rVert=\\frac{b-a}{n}.\n\\]"
          },
          {
            "kind": "definition",
            "title": "Partisi penghalus",
            "body": "Jika $P,Q$ adalah partisi $[a,b]$ dan $P\\subseteq Q$, maka $Q$ disebut partisi penghalus dari $P$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan dua partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac{1}{4},\\frac{1}{2},\\frac{3}{4},1\\right\\}.\n\\]\nBuktikan bahwa $Q$ merupakan partisi penghalus dari $P$.",
            "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac{1}{4},\\frac{1}{2},\\frac{3}{4},1\\right\\}.\n\\]\nDibuktikan bahwa $Q$ merupakan partisi penghalus dari $P$.\nSetiap titik pada $P$ juga merupakan titik pada $Q$, yaitu\n\\[\n0\\in Q,\\qquad \\frac{1}{2}\\in Q,\\qquad 1\\in Q.\n\\]\nOleh karena itu,\n\\[\nP\\subseteq Q.\n\\]\nBerdasarkan definisi partisi penghalus, hubungan $P\\subseteq Q$ menunjukkan bahwa $Q$ merupakan partisi penghalus dari $P$.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "definition",
            "title": "Partisi penghalus bersama",
            "body": "Untuk dua partisi $P,Q$, partisi\n\\[\nR=P\\cup Q\n\\]\ndisebut partisi penghalus bersama. Jelas $P\\subseteq R$ dan $Q\\subseteq R$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan dua partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac{1}{3},\\frac{2}{3},1\\right\\}.\n\\]\nTentukan partisi penghalus bersama dari $P$ dan $Q$.",
            "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac{1}{3},\\frac{2}{3},1\\right\\}.\n\\]\nDitentukan partisi penghalus bersama dari $P$ dan $Q$.\nBerdasarkan definisi, partisi penghalus bersama diperoleh melalui gabungan kedua himpunan titik partisi. Diperoleh\n\\[\nR=P\\cup Q\n=\\left\\{0,\\frac{1}{3},\\frac{1}{2},\\frac{2}{3},1\\right\\}.\n\\]\nTerlihat bahwa\n\\[\nP\\subseteq R\n\\qquad\\text{dan}\\qquad\nQ\\subseteq R.\n\\]\nDengan demikian, $R$ merupakan partisi penghalus dari $P$ sekaligus partisi penghalus dari $Q$. Dengan demikian,\n\\[\n\\boxed{R=\\left\\{0,\\frac{1}{3},\\frac{1}{2},\\frac{2}{3},1\\right\\}}\n\\]\nmerupakan partisi penghalus bersama yang ditentukan."
          }
        ]
      },
      {
        "title": "Partisi berlabel dan jumlah Riemann",
        "blocks": [
          {
            "kind": "definition",
            "title": "Partisi berlabel",
            "body": "Diberikan $P=\\{x_0,\\ldots,x_n\\}$ partisi $[a,b]$. Sebuah partisi berlabel adalah pasangan\n\\[\n\\dot P=\\bigl(P;t_1,\\ldots,t_n\\bigr),\n\\]\ndengan\n\\[\nt_i\\in[x_{i-1},x_i],\\qquad i=1,\\ldots,n.\n\\]\nTitik $t_i$ disebut label atau titik label."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\}\n\\]\ndan titik\n\\[\nt_1=\\frac{1}{4},\n\\qquad\nt_2=\\frac{3}{4}.\n\\]\nBuktikan bahwa\n\\[\n\\dot P=\\left(P;\\frac{1}{4},\\frac{3}{4}\\right)\n\\]\nmerupakan partisi berlabel dari $[0,1]$.",
            "solution": "Diketahui partisi $P=\\{0,\\frac{1}{2},1\\}$ dengan $t_1=\\frac{1}{4}$ dan $t_2=\\frac{3}{4}$.\nDibuktikan bahwa $\\dot P=(P;\\frac{1}{4},\\frac{3}{4})$ merupakan partisi berlabel.\nSubinterval pertama adalah $[0,\\frac{1}{2}]$. Berlaku\n\\[\n\\frac{1}{4}\\in\\left[0,\\frac{1}{2}\\right].\n\\]\nSubinterval kedua adalah $[\\frac{1}{2},1]$. Berlaku\n\\[\n\\frac{3}{4}\\in\\left[\\frac{1}{2},1\\right].\n\\]\nSetiap label berada pada subinterval yang bersesuaian. Berdasarkan definisi partisi berlabel, pasangan\n\\[\n\\dot P=\\left(P;\\frac{1}{4},\\frac{3}{4}\\right)\n\\]\nmerupakan partisi berlabel dari $[0,1]$.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "definition",
            "title": "Jumlah Riemann",
            "body": "Untuk partisi berlabel $\\dot P$, jumlah Riemann fungsi $f$ didefinisikan oleh\n\\[\nS(f,\\dot P)=\\sum_{i=1}^{n}f(t_i)\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan fungsi $f(x)=x^2$ pada $[0,1]$, partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\},\n\\]\ndan label\n\\[\nt_1=\\frac{1}{4},\n\\qquad\nt_2=\\frac{3}{4}.\n\\]\nTentukan jumlah Riemann $S(f,\\dot P)$.",
            "solution": "Diketahui fungsi $f(x)=x^2$, partisi $P=\\{0,\\frac{1}{2},1\\}$, serta label $t_1=\\frac{1}{4}$ dan $t_2=\\frac{3}{4}$.\nDitentukan nilai jumlah Riemann $S(f,\\dot P)$.\nPanjang kedua subinterval adalah\n\\[\n\\Delta x_1=\\frac{1}{2},\n\\qquad\n\\Delta x_2=\\frac{1}{2}.\n\\]\nNilai fungsi pada kedua label adalah\n\\[\nf(t_1)=\\left(\\frac{1}{4}\\right)^2=\\frac1{16},\n\\qquad\nf(t_2)=\\left(\\frac{3}{4}\\right)^2=\\frac9{16}.\n\\]\nBerdasarkan definisi jumlah Riemann,\n\\[\\begin{aligned}\nS(f,\\dot P)\\\\\n&=f(t_1)\\Delta x_1+f(t_2)\\Delta x_2\\\\\n&=\\frac1{16}\\cdot\\frac{1}{2}+\\frac9{16}\\cdot\\frac{1}{2}\\\\\n&=\\frac1{32}+\\frac9{32}\\\\\n&=\\frac{10}{32}\\\\\n&=\\frac5{16}.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\boxed{S(f,\\dot P)=\\frac5{16}}.\n\\]\nNilai jumlah Riemann pada contoh tersebut telah ditentukan."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, $f(t_i)\\Delta x_i$ merupakan luas bertanda persegi panjang pada subinterval ke-$i$."
          },
          {
            "kind": "example",
            "title": "Jumlah Riemann untuk $f(x)=x$",
            "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$, partisi seragam\n\\[\nx_i=\\frac{i}{n},\n\\qquad i=0,1,\\ldots,n,\n\\]\ndan label kanan $t_i=x_i$. Tentukan jumlah Riemann $S_n$ dan limitnya ketika $n\\to\\infty$.",
            "solution": "Diketahui fungsi $f(x)=x$, partisi seragam $x_i=\\frac{i}{n}$, dan label kanan $t_i=\\frac{i}{n}$.\nDitentukan bentuk jumlah Riemann $S_n$ dan nilai $\\lim_{n\\to\\infty}S_n$.\nSetiap subinterval mempunyai panjang\n\\[\n\\Delta x_i=\\frac{1}{n}.\n\\]\nBerdasarkan definisi jumlah Riemann,\n\\[\\begin{aligned}\nS_n\\\\\n&=\\sum_{i=1}^{n}f(t_i)\\Delta x_i\\\\\n&=\\sum_{i=1}^{n}\\frac{i}{n}\\cdot\\frac{1}{n}\\\\\n&=\\frac1{n^2}\\sum_{i=1}^{n}i.\n\\end{aligned}\\]\nDigunakan identitas\n\\[\n\\sum_{i=1}^{n}i=\\frac{n(n+1)}2.\n\\]\nDiperoleh\n\\[\nS_n=\\frac1{n^2}\\cdot\\frac{n(n+1)}2\n=\\frac{n+1}{2n}.\n\\]\nLimitnya adalah\n\\[\n\\lim_{n\\to\\infty}\\frac{n+1}{2n}\n=\\frac{1}{2}.\n\\]\nDengan demikian,\n\\[\n\\boxed{S_n=\\frac{n+1}{2n}},\n\\qquad\n\\boxed{\\lim_{n\\to\\infty}S_n=\\frac{1}{2}}.\n\\]\nNilai yang ditentukan telah diperoleh."
          },
          {
            "kind": "paragraph",
            "text": "Contoh tersebut baru menggunakan satu jenis partisi dan satu pilihan label. Definisi formal integral Riemann harus menjamin bahwa semua partisi berlabel yang cukup halus menghasilkan jumlah Riemann yang mendekati nilai yang sama."
          }
        ]
      }
    ]
  },
  {
    "title": "Integral Riemann",
    "blocks": [],
    "subsections": [
      {
        "title": "Definisi formal",
        "blocks": [
          {
            "kind": "definition",
            "title": "Integral Riemann",
            "body": "Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ disebut terintegralkan Riemann apabila terdapat $I\\in\\mathbb{R}$ sedemikian sehingga untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga untuk setiap partisi berlabel $\\dot P$ dari $[a,b]$, berlaku\n\\[\n\\lVert P\\rVert<\\delta\n\\quad\\Longrightarrow\\quad\n\\left|S(f,\\dot P)-I\\right|<\\varepsilon.\n\\]\nJika kondisi ini terpenuhi, ditulis\n\\[\nI=\\int_a^b f(x)\\,d x.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan fungsi konstan\n\\[\nf(x)=c,\n\\qquad x\\in[a,b].\n\\]\nBuktikan bahwa $f$ terintegralkan Riemann dan\n\\[\n\\int_a^b c\\,d x=c(b-a).\n\\]",
            "solution": "Diketahui fungsi konstan $f(x)=c$ pada $[a,b]$.\nDibuktikan bahwa $f$ terintegralkan Riemann dan nilai integralnya adalah\n\\[\n\\int_a^b c\\,d x=c(b-a).\n\\]\nDitetapkan\n\\[\nI=c(b-a).\n\\]\nDiambil sebarang partisi berlabel\n\\[\n\\dot P=(P;t_1,\\ldots,t_n)\n\\]\ndari $[a,b]$. Karena $f(t_i)=c$ untuk setiap $i$, jumlah Riemannnya adalah\n\\[\\begin{aligned}\nS(f,\\dot P)\\\\\n&=\\sum_{i=1}^{n}f(t_i)\\Delta x_i\\\\\n&=\\sum_{i=1}^{n}c\\,\\Delta x_i\\\\\n&=c\\sum_{i=1}^{n}(x_i-x_{i-1})\\\\\n&=c(b-a)\\\\\n&=I.\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih sebarang $\\delta>0$, misalnya $\\delta=1$. Untuk setiap partisi berlabel dengan $\\lVert P\\rVert<\\delta$ diperoleh\n\\[\n|S(f,\\dot P)-I|=|I-I|=0<\\varepsilon.\n\\]\nSyarat definisi integral Riemann terpenuhi. Oleh karena itu, $f$ terintegralkan Riemann dan\n\\[\n\\boxed{\\int_a^b c\\,d x=c(b-a)}.\n\\]\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, setelah norma partisi cukup kecil, semua pilihan label menghasilkan jumlah Riemann yang berada dalam pita $\\varepsilon$ di sekitar nilai integral $I$.\nDefinisi ini mengandung kuantor yang kuat. Bilangan $\\delta$ harus bekerja untuk semua bentuk partisi, semua banyak subinterval, dan semua pemilihan label selama norma partisi partisi lebih kecil daripada $\\delta$. Dengan demikian nilai integral tidak boleh bergantung pada cara partisi atau label dipilih."
          },
          {
            "kind": "proposition",
            "title": "Keunikan integral Riemann",
            "body": "Jika $f$ terintegralkan Riemann pada $[a,b]$, maka nilai integral Riemannnya tunggal.",
            "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nDibuktikan bahwa nilai integral Riemann dari $f$ pada $[a,b]$ bersifat tunggal.\nDiandaikan terdapat dua bilangan $I,J\\in\\mathbb{R}$ yang sama-sama memenuhi definisi integral Riemann untuk $f$. Diambil sebarang $\\varepsilon>0$.\nKarena $I$ memenuhi definisi integral Riemann, terdapat $\\delta_1>0$ sehingga untuk setiap partisi berlabel $\\dot P$ dengan $\\lVert P\\rVert<\\delta_1$ berlaku\n\\[\n|S(f,\\dot P)-I|<\\frac{\\varepsilon}{2}.\n\\]\nKarena $J$ juga memenuhi definisi integral Riemann, terdapat $\\delta_2>0$ sehingga untuk setiap partisi berlabel $\\dot P$ dengan $\\lVert P\\rVert<\\delta_2$ berlaku\n\\[\n|S(f,\\dot P)-J|<\\frac{\\varepsilon}{2}.\n\\]\nDiambil suatu partisi berlabel $\\dot P$ yang memenuhi\n\\[\n\\lVert P\\rVert<\\min\\{\\delta_1,\\delta_2\\}.\n\\]\nKedua ketaksamaan di atas berlaku secara bersamaan. Berdasarkan ketaksamaan segitiga,\n\\[\\begin{aligned}\n|I-J|\\\\\n&=|I-S(f,\\dot P)+S(f,\\dot P)-J|\\\\\n&\\le |I-S(f,\\dot P)|+|S(f,\\dot P)-J|\\\\\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\\\\\n&=\\varepsilon.\n\\end{aligned}\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh $|I-J|=0$. Dengan demikian $I=J$, sehingga nilai integral Riemann bersifat tunggal.\nDengan demikian, proposisi tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan proposisi",
            "body": "Misalkan fungsi konstan $f(x)=3$ pada $[0,2]$. Diketahui bahwa nilai $6$ memenuhi definisi integral Riemann untuk $f$. Buktikan bahwa tidak terdapat nilai integral Riemann lain selain $6$.",
            "solution": "Diketahui fungsi $f(x)=3$ pada $[0,2]$ terintegralkan Riemann dengan\n\\[\n\\int_0^2 3\\,d x=6.\n\\]\nDibuktikan bahwa $6$ merupakan satu-satunya nilai integral Riemann dari $f$ pada $[0,2]$.\nDiandaikan terdapat bilangan $J\\in\\mathbb{R}$ yang juga memenuhi definisi integral Riemann untuk fungsi $f$. Karena fungsi $f$ terintegralkan Riemann, Proposisi yang telah dibuktikan menyatakan bahwa nilai integral Riemann bersifat tunggal. Oleh karena itu,\n\\[\nJ=6.\n\\]\nTidak terdapat bilangan lain yang dapat menjadi nilai integral Riemann fungsi tersebut.\nDengan demikian, contoh penerapan proposisi yang telah dibuktikan terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, satu jumlah Riemann yang sekaligus berada dalam jarak kurang dari $\\frac{\\varepsilon}{2}$ terhadap $I$ dan $J$ memaksa $|I-J|<\\varepsilon$."
          },
          {
            "kind": "note",
            "title": "",
            "body": "Sampai titik ini, teori Riemann sudah dibangun melalui partisi, partisi berlabel, jumlah Riemann, definisi integral, dan keunikan nilai integral. Selanjutnya Darboux diperkenalkan sebagai pendekatan yang lebih nyaman untuk banyak pembuktian integrabilitas."
          }
        ]
      }
    ]
  },
  {
    "title": "Jumlah Darboux",
    "blocks": [],
    "subsections": [
      {
        "title": "Infimum dan supremum lokal",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Diberikan $P=\\{x_0,\\ldots,x_n\\}$ partisi $[a,b]$ dan $I_i=[x_{i-1},x_i]$. Didefinisikan\n\\[\nm_i=\\inf_{x\\in I_i}f(x),\n\\qquad\nM_i=\\sup_{x\\in I_i}f(x).\n\\]\nKarena $f$ terbatas, $m_i,M_i\\in\\mathbb{R}$. Untuk setiap $x\\in I_i$ selalu berlaku\n\\[\nm_i\\le f(x)\\le M_i.\n\\]"
          },
          {
            "kind": "definition",
            "title": "jumlah Darboux bawah",
            "body": "jumlah Darboux bawah fungsi $f$ terhadap partisi $P$ didefinisikan oleh\n\\[\nL(f,P)=\\sum_{i=1}^{n}m_i\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\}.\n\\]\nTentukan jumlah Darboux bawah $L(f,P)$.",
            "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$ dan partisi $P=\\{0,\\frac{1}{2},1\\}$.\nDitentukan nilai jumlah Darboux bawah $L(f,P)$.\nSubinterval yang dibentuk adalah\n\\[\nI_1=\\left[0,\\frac{1}{2}\\right],\n\\qquad\nI_2=\\left[\\frac{1}{2},1\\right].\n\\]\nKarena $f(x)=x$ naik, infimum pada setiap subinterval terletak di ujung kiri. Diperoleh\n\\[\nm_1=0,\n\\qquad\nm_2=\\frac{1}{2}.\n\\]\nKedua subinterval mempunyai panjang $\\frac{1}{2}$. Berdasarkan definisi jumlah Darboux bawah,\n\\[\\begin{aligned}\nL(f,P)\\\\\n&=m_1\\Delta x_1+m_2\\Delta x_2\\\\\n&=0\\cdot\\frac{1}{2}+\\frac{1}{2}\\cdot\\frac{1}{2}\\\\\n&=\\frac{1}{4}.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\boxed{L(f,P)=\\frac{1}{4}}.\n\\]\nNilai jumlah Darboux bawah telah ditentukan."
          },
          {
            "kind": "paragraph",
            "text": "Pada representasi geometris, tinggi setiap persegi panjang ditentukan oleh infimum fungsi pada subinterval yang bersesuaian."
          },
          {
            "kind": "definition",
            "title": "jumlah Darboux atas",
            "body": "jumlah Darboux atas fungsi $f$ terhadap partisi $P$ didefinisikan oleh\n\\[\nU(f,P)=\\sum_{i=1}^{n}M_i\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\}.\n\\]\nTentukan jumlah Darboux atas $U(f,P)$ dan dibandingkan dengan $L(f,P)$.",
            "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$ dan partisi $P=\\{0,\\frac{1}{2},1\\}$.\nDitentukan nilai jumlah Darboux atas $U(f,P)$ dan dibuktikan bahwa $L(f,P)\\le U(f,P)$.\nKarena $f$ naik, supremum pada setiap subinterval terletak di ujung kanan. Diperoleh\n\\[\nM_1=\\frac{1}{2},\n\\qquad\nM_2=1.\n\\]\nKedua subinterval mempunyai panjang $\\frac{1}{2}$. Berdasarkan definisi jumlah Darboux atas,\n\\[\\begin{aligned}\nU(f,P)\\\\\n&=M_1\\Delta x_1+M_2\\Delta x_2\\\\\n&=\\frac{1}{2}\\cdot\\frac{1}{2}+1\\cdot\\frac{1}{2}\\\\\n&=\\frac{1}{4}+\\frac{1}{2}\\\\\n&=\\frac{3}{4}.\n\\end{aligned}\\]\nDari contoh jumlah Darboux bawah sebelumnya telah diperoleh $L(f,P)=\\frac{1}{4}$. Oleh karena itu,\n\\[\nL(f,P)=\\frac{1}{4}\\le\\frac{3}{4}=U(f,P).\n\\]\nDengan demikian,\n\\[\n\\boxed{U(f,P)=\\frac{3}{4}},\n\\]\ndan ketaksamaan $L(f,P)\\le U(f,P)$ pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Pada representasi geometris, tinggi setiap persegi panjang ditentukan oleh supremum fungsi pada subinterval yang bersesuaian."
          },
          {
            "kind": "lemma",
            "title": "Jepit Riemann–Darboux",
            "body": "Untuk setiap partisi berlabel $\\dot P$ yang berasal dari partisi $P$, berlaku\n\\[\nL(f,P)\\le S(f,\\dot P)\\le U(f,P).\n\\]",
            "proof": "Diketahui partisi berlabel $\\dot P$ yang berasal dari partisi $P=\\{x_0,x_1,\\ldots,x_n\\}$ pada $[a,b]$.\nDibuktikan bahwa\n\\[\nL(f,P)\\le S(f,\\dot P)\\le U(f,P).\n\\]\nUntuk setiap $i=1,2,\\ldots,n$, titik label memenuhi $t_i\\in I_i=[x_{i-1},x_i]$. Berdasarkan definisi infimum dan supremum lokal,\n\\[\nm_i\\le f(t_i)\\le M_i.\n\\]\nKarena $\\Delta x_i=x_i-x_{i-1}>0$, perkalian dengan $\\Delta x_i$ mempertahankan arah ketaksamaan, sehingga\n\\[\nm_i\\Delta x_i\\le f(t_i)\\Delta x_i\\le M_i\\Delta x_i.\n\\]\nKetaksamaan tersebut dijumlahkan untuk $i=1,2,\\ldots,n$. Diperoleh\n\\[\n\\sum_{i=1}^n m_i\\Delta x_i\n\\le\n\\sum_{i=1}^n f(t_i)\\Delta x_i\n\\le\n\\sum_{i=1}^n M_i\\Delta x_i.\n\\]\nBerdasarkan definisi jumlah Darboux bawah, jumlah Riemann, dan jumlah Darboux atas, bentuk tersebut sama dengan\n\\[\nL(f,P)\\le S(f,\\dot P)\\le U(f,P).\n\\]\nDengan demikian, lemma tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, luas persegi panjang yang menggunakan titik label selalu berada di antara persegi panjang Darboux bawah dan Darboux atas pada subinterval yang sama."
          }
        ]
      },
      {
        "title": "Pengaruh partisi penghalus",
        "blocks": [
          {
            "kind": "lemma",
            "title": "Partisi penghalus menaikkan jumlah bawah",
            "body": "Jika $Q$ partisi penghalus dari $P$, maka\n\\[\nL(f,P)\\le L(f,Q).\n\\]",
            "proof": "Diketahui partisi $Q$ merupakan partisi penghalus dari partisi $P$.\nDibuktikan bahwa\n\\[\nL(f,P)\\le L(f,Q).\n\\]\nPembuktian terlebih dahulu dilakukan pada keadaan ketika $Q$ diperoleh dari $P$ dengan menambahkan satu titik $c\\in(x_{k-1},x_k)$. Semua subinterval selain $[x_{k-1},x_k]$ tetap sama, sehingga perubahan jumlah bawah hanya berasal dari subinterval tersebut.\nDituliskan\n\\[\nm=\\inf_{[x_{k-1},x_k]}f,\n\\qquad\nm'=\\inf_{[x_{k-1},c]}f,\n\\qquad\nm''=\\inf_{[c,x_k]}f.\n\\]\nKarena\n\\[\n[x_{k-1},c]\\subseteq[x_{k-1},x_k],\n\\qquad\n[c,x_k]\\subseteq[x_{k-1},x_k],\n\\]\ninfimum pada masing-masing subinterval yang lebih kecil tidak mungkin lebih kecil daripada infimum pada interval asal. Oleh karena itu,\n\\[\nm\\le m',\n\\qquad\nm\\le m''.\n\\]\nAkibatnya,\n\\[\\begin{aligned}\nm(x_k-x_{k-1})\\\\\n&=m(c-x_{k-1})+m(x_k-c)\\\\\n&\\le m'(c-x_{k-1})+m''(x_k-c).\n\\end{aligned}\\]\nDengan demikian, penambahan satu titik partisi tidak menurunkan jumlah bawah. Karena setiap partisi penghalus berhingga dapat diperoleh dengan menambahkan titik-titik baru satu per satu, ketaksamaan tersebut dapat diterapkan berulang kali sampai diperoleh\n\\[\nL(f,P)\\le L(f,Q).\n\\]\nDengan demikian, lemma tersebut terbukti."
          },
          {
            "kind": "lemma",
            "title": "Partisi penghalus menurunkan jumlah atas",
            "body": "Jika $Q$ partisi penghalus dari $P$, maka\n\\[\nU(f,Q)\\le U(f,P).\n\\]",
            "proof": "Diketahui partisi $Q$ merupakan partisi penghalus dari partisi $P$.\nDibuktikan bahwa\n\\[\nU(f,Q)\\le U(f,P).\n\\]\nPembuktian terlebih dahulu dilakukan pada keadaan ketika satu titik $c\\in(x_{k-1},x_k)$ ditambahkan pada partisi $P$. Dituliskan\n\\[\nM=\\sup_{[x_{k-1},x_k]}f,\n\\qquad\nM'=\\sup_{[x_{k-1},c]}f,\n\\qquad\nM''=\\sup_{[c,x_k]}f.\n\\]\nKarena kedua subinterval baru merupakan subhimpunan dari $[x_{k-1},x_k]$, supremum pada masing-masing subinterval baru tidak mungkin lebih besar daripada supremum pada interval asal. Dengan demikian,\n\\[\nM'\\le M,\n\\qquad\nM''\\le M.\n\\]\nAkibatnya,\n\\[\\begin{aligned}\nM'(c-x_{k-1})+M''(x_k-c)\\\\\n&\\le M(c-x_{k-1})+M(x_k-c)\\\\\n&=M(x_k-x_{k-1}).\n\\end{aligned}\\]\nDengan demikian, penambahan satu titik partisi tidak menaikkan jumlah atas. Karena partisi $Q$ dapat diperoleh dari $P$ melalui penambahan berhingga banyak titik, ketaksamaan tersebut dapat diterapkan berulang kali sehingga\n\\[\nU(f,Q)\\le U(f,P).\n\\]\nDengan demikian, lemma tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, pemecahan subinterval dapat menaikkan jumlah bawah dan menurunkan jumlah atas."
          },
          {
            "kind": "proposition",
            "title": "Perbandingan dua partisi sembarang",
            "body": "Untuk setiap dua partisi $P,Q$ dari $[a,b]$, berlaku\n\\[\nL(f,P)\\le U(f,Q).\n\\]",
            "proof": "Diketahui partisi $P$ dan $Q$ merupakan dua partisi sembarang dari $[a,b]$.\nDibuktikan bahwa\n\\[\nL(f,P)\\le U(f,Q).\n\\]\nDibentuk partisi penghalus bersama\n\\[\nR=P\\cup Q.\n\\]\nKarena $R$ merupakan partisi penghalus dari $P$, berdasarkan lemma yang telah dibuktikan berlaku\n\\[\nL(f,P)\\le L(f,R).\n\\]\nKarena $R$ merupakan partisi penghalus dari $Q$, berdasarkan lemma yang telah dibuktikan berlaku\n\\[\nU(f,R)\\le U(f,Q).\n\\]\nUntuk partisi yang sama selalu berlaku\n\\[\nL(f,R)\\le U(f,R).\n\\]\nKetiga ketaksamaan tersebut memberikan rantai\n\\[\nL(f,P)\\le L(f,R)\\le U(f,R)\\le U(f,Q).\n\\]\nOleh karena itu, diperoleh $L(f,P)\\le U(f,Q)$. Dengan demikian, proposisi tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan proposisi",
            "body": "Misalkan fungsi $f(x)=x^2$ pada $[0,1]$ serta partisi\n\\[\nP=\\left\\{0,\\frac{1}{2},1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac{1}{3},1\\right\\}.\n\\]\nBuktikan secara langsung bahwa\n\\[\nL(f,P)\\le U(f,Q).\n\\]",
            "solution": "Diketahui fungsi $f(x)=x^2$ pada $[0,1]$ serta partisi $P=\\{0,\\frac{1}{2},1\\}$ dan $Q=\\{0,\\frac{1}{3},1\\}$.\nDibuktikan bahwa $L(f,P)\\le U(f,Q)$.\nKarena $f(x)=x^2$ naik pada $[0,1]$, infimum pada setiap subinterval partisi $P$ terletak di ujung kiri. Diperoleh\n\\[\nL(f,P)\n=0\\cdot\\frac{1}{2}+\\left(\\frac{1}{2}\\right)^2\\frac{1}{2}\n=\\frac{1}{8}.\n\\]\nUntuk partisi $Q$, supremum pada setiap subinterval terletak di ujung kanan. Diperoleh\n\\[\\begin{aligned}\nU(f,Q)\\\\\n&=\\left(\\frac{1}{3}\\right)^2\\left(\\frac{1}{3}\\right)\\\\\n+1^2\\left(\\frac{2}{3}\\right)\\\\\n&=\\frac1{27}+\\frac{18}{27}\\\\\n&=\\frac{19}{27}.\n\\end{aligned}\\]\nPerbandingan kedua nilai memberikan\n\\[\n\\frac{1}{8}\\le\\frac{19}{27}.\n\\]\nDengan demikian,\n\\[\nL(f,P)\\le U(f,Q),\n\\]\nsesuai dengan proposisi yang telah dibuktikan.\nDengan demikian, contoh penerapan proposisi yang telah dibuktikan terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, $R=P\\cup Q$ memuat seluruh titik partisi $P$ dan $Q$, sehingga $R$ menjadi partisi penghalus bagi keduanya."
          }
        ]
      }
    ]
  },
  {
    "title": "Integral Darboux",
    "blocks": [
      {
        "kind": "definition",
        "title": "integral Darboux bawah",
        "body": "integral Darboux bawah didefinisikan oleh\n\\[\n\\underline{\\int_a^b} f\n=\n\\sup\\{L(f,P):P\\in\\mathcal{P}[a,b]\\}.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$. Tentukan integral Darboux bawah\n\\[\n\\underline{\\int_0^1}x\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDitentukan nilai integral Darboux bawah $\\underline{\\int_0^1}x\\,d x$.\nPertama dibuktikan bahwa setiap jumlah Darboux bawah tidak melebihi $\\frac{1}{2}$. Diambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nKarena $f(x)=x$ naik, diperoleh $m_i=x_{i-1}$. Oleh karena itu,\n\\[\nL(f,P)=\\sum_{i=1}^{n}x_{i-1}(x_i-x_{i-1}).\n\\]\nUntuk setiap $i$ berlaku\n\\[\n2x_{i-1}(x_i-x_{i-1})\n\\le (x_i+x_{i-1})(x_i-x_{i-1})\n=x_i^2-x_{i-1}^2.\n\\]\nSetelah dijumlahkan untuk $i=1,\\ldots,n$ diperoleh\n\\[\n2L(f,P)\\le\\sum_{i=1}^{n}(x_i^2-x_{i-1}^2)=1.\n\\]\nDengan demikian,\n\\[\nL(f,P)\\le\\frac{1}{2}\n\\]\nuntuk setiap partisi $P$. Dengan demikian, $\\frac{1}{2}$ merupakan batas atas bagi himpunan seluruh jumlah bawah.\nSelanjutnya digunakan partisi seragam\n\\[\nP_n=\\left\\{\\frac{i}{n}:i=0,1,\\ldots,n\\right\\}.\n\\]\njumlah bawah-nya adalah\n\\[\\begin{aligned}\nL(f,P_n)\\\\\n&=\\frac{1}{n}\\sum_{i=1}^{n}\\frac{i-1}{n}\\\\\n&=\\frac{n-1}{2n}.\n\\end{aligned}\\]\nNilai tersebut memenuhi\n\\[\n\\lim_{n\\to\\infty}L(f,P_n)=\\frac{1}{2}.\n\\]\nDengan demikian, terdapat jumlah bawah yang dapat dibuat sedekat yang diinginkan dengan $\\frac{1}{2}$ dari bawah. Berdasarkan definisi supremum,\n\\[\n\\boxed{\\underline{\\int_0^1}x\\,d x=\\frac{1}{2}}.\n\\]\nNilai integral Darboux bawah telah ditentukan."
      },
      {
        "kind": "paragraph",
        "text": "Interpretasi geometris menegaskan bahwa integral Darboux bawah bukanlah satu jumlah bawah tertentu. Nilai tersebut merupakan batas atas terkecil dari himpunan semua nilai $L(f,P)$. Dengan demikian, setiap jumlah bawah memenuhi\n\\[\nL(f,P)\\le \\underline{\\int_a^b}f,\n\\]\ndan untuk setiap $\\varepsilon>0$ terdapat suatu partisi $P$ sehingga\n\\[\n\\underline{\\int_a^b}f-\\varepsilon<L(f,P)\\le \\underline{\\int_a^b}f.\n\\]"
      },
      {
        "kind": "definition",
        "title": "integral Darboux atas",
        "body": "integral Darboux atas didefinisikan oleh\n\\[\n\\overline{\\int_a^b} f\n=\n\\inf\\{U(f,P):P\\in\\mathcal{P}[a,b]\\}.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$. Tentukan integral Darboux atas\n\\[\n\\overline{\\int_0^1}x\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDitentukan nilai integral Darboux atas $\\overline{\\int_0^1}x\\,d x$.\nPertama dibuktikan bahwa setiap jumlah Darboux atas tidak lebih kecil daripada $\\frac{1}{2}$. Diambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nKarena $f(x)=x$ naik, diperoleh $M_i=x_i$. Oleh karena itu,\n\\[\nU(f,P)=\\sum_{i=1}^{n}x_i(x_i-x_{i-1}).\n\\]\nUntuk setiap $i$ berlaku\n\\[\n2x_i(x_i-x_{i-1})\n\\ge (x_i+x_{i-1})(x_i-x_{i-1})\n=x_i^2-x_{i-1}^2.\n\\]\nSetelah dijumlahkan diperoleh\n\\[\n2U(f,P)\\ge\\sum_{i=1}^{n}(x_i^2-x_{i-1}^2)=1.\n\\]\nDengan demikian,\n\\[\nU(f,P)\\ge\\frac{1}{2}\n\\]\nuntuk setiap partisi $P$. Dengan demikian, $\\frac{1}{2}$ merupakan batas bawah bagi himpunan seluruh jumlah atas.\nDigunakan partisi seragam $P_n=\\{\\frac{i}{n}:i=0,1,\\ldots,n\\}$. jumlah atas-nya adalah\n\\[\\begin{aligned}\nU(f,P_n)\\\\\n&=\\frac{1}{n}\\sum_{i=1}^{n}\\frac{i}{n}\\\\\n&=\\frac{n+1}{2n}.\n\\end{aligned}\\]\nBerlaku\n\\[\n\\lim_{n\\to\\infty}U(f,P_n)=\\frac{1}{2}.\n\\]\nDengan demikian, jumlah atas dapat dibuat sedekat yang diinginkan dengan $\\frac{1}{2}$ dari atas. Berdasarkan definisi infimum,\n\\[\n\\boxed{\\overline{\\int_0^1}x\\,d x=\\frac{1}{2}}.\n\\]\nNilai integral Darboux atas telah ditentukan."
      },
      {
        "kind": "paragraph",
        "text": "Interpretasi geometris menegaskan bahwa integral Darboux atas bukanlah satu jumlah atas tertentu. Nilai tersebut merupakan batas bawah terbesar dari himpunan semua nilai $U(f,P)$. Dengan demikian, setiap jumlah atas memenuhi\n\\[\n\\overline{\\int_a^b}f\\le U(f,P),\n\\]\ndan untuk setiap $\\varepsilon>0$ terdapat suatu partisi $P$ sehingga\n\\[\n\\overline{\\int_a^b}f\\le U(f,P)<\\overline{\\int_a^b}f+\\varepsilon.\n\\]"
      },
      {
        "kind": "proposition",
        "title": "Perbandingan integral Darboux bawah dan atas",
        "body": "Untuk setiap fungsi terbatas $f:[a,b]\\to\\mathbb{R}$,\n\\[\n\\underline{\\int_a^b} f\\le \\overline{\\int_a^b} f.\n\\]",
        "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas.\nDibuktikan bahwa\n\\[\n\\underline{\\int_a^b}f\\le\\overline{\\int_a^b}f.\n\\]\nBerdasarkan proposisi yang telah dibuktikan, untuk setiap partisi $P,Q$ berlaku\n\\[\nL(f,P)\\le U(f,Q).\n\\]\nDitetapkan sebarang partisi $Q$. Karena $U(f,Q)$ merupakan batas atas bagi seluruh bilangan $L(f,P)$, maka\n\\[\n\\sup_P L(f,P)\\le U(f,Q).\n\\]\nKetaksamaan ini berlaku untuk setiap partisi $Q$. Oleh karena itu, $\\sup_P L(f,P)$ merupakan batas bawah bagi himpunan seluruh jumlah atas, sehingga\n\\[\n\\sup_P L(f,P)\\le \\inf_Q U(f,Q).\n\\]\nBerdasarkan definisi integral Darboux bawah dan integral Darboux atas, diperoleh\n\\[\n\\underline{\\int_a^b}f\\le\\overline{\\int_a^b}f.\n\\]\nDengan demikian, proposisi tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan proposisi",
        "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$. Buktikan bahwa integral Darboux bawah tidak melebihi integral Darboux atas.",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDibuktikan bahwa\n\\[\n\\underline{\\int_0^1}x\\,d x\n\\le\n\\overline{\\int_0^1}x\\,d x.\n\\]\nPada contoh sebelumnya telah dibuktikan secara terpisah bahwa\n\\[\n\\underline{\\int_0^1}x\\,d x=\\frac{1}{2}\n\\]\ndan\n\\[\n\\overline{\\int_0^1}x\\,d x=\\frac{1}{2}.\n\\]\nOleh karena itu,\n\\[\n\\underline{\\int_0^1}x\\,d x\n=\\frac{1}{2}\n\\le\\frac{1}{2}\n=\\overline{\\int_0^1}x\\,d x.\n\\]\nPada contoh ini ketaksamaan dalam proposisi yang telah dibuktikan berlaku sebagai kesamaan.\nDengan demikian, contoh penerapan proposisi yang telah dibuktikan terbukti."
      },
      {
        "kind": "definition",
        "title": "terintegralkan Darboux",
        "body": "Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ disebut terintegralkan Darboux apabila\n\\[\n\\underline{\\int_a^b} f=\\overline{\\int_a^b} f.\n\\]\nNilai bersama tersebut disebut integral Darboux dan ditulis\n\\[\n\\int_a^b f(x)\\,d x.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Misalkan fungsi $f(x)=x$ pada $[0,1]$. Buktikan bahwa $f$ terintegralkan Darboux dan ditentukan nilai\n\\[\n\\int_0^1x\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDibuktikan bahwa $f$ terintegralkan Darboux dan ditentukan nilai integral Darbouxnya.\nDari dua contoh sebelumnya telah dibuktikan bahwa\n\\[\n\\underline{\\int_0^1}x\\,d x=\\frac{1}{2}\n\\]\ndan\n\\[\n\\overline{\\int_0^1}x\\,d x=\\frac{1}{2}.\n\\]\nDengan demikian,\n\\[\n\\underline{\\int_0^1}x\\,d x\n=\n\\overline{\\int_0^1}x\\,d x.\n\\]\nBerdasarkan definisi terintegralkan Darboux, kesamaan integral Darboux bawah dan integral Darboux atas menunjukkan bahwa $f(x)=x$ terintegralkan Darboux pada $[0,1]$. Nilai integralnya adalah nilai bersama tersebut, yaitu\n\\[\n\\boxed{\\int_0^1x\\,d x=\\frac{1}{2}}.\n\\]\nDengan demikian, pernyataan pada contoh tersebut terbukti."
      }
    ],
    "subsections": [
      {
        "title": "Kriteria Darboux",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Kriteria Darboux",
            "body": "Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ terintegralkan Darboux jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sedemikian sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas.\nDibuktikan bahwa fungsi $f$ terintegralkan Darboux jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ yang memenuhi\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nPembuktian dilakukan dalam dua arah.\n\\,\n($\\Rightarrow$)\nDiketahui fungsi $f$ terintegralkan Darboux.\nDibuktikan bahwa untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$.\nDituliskan\n\\[\nI=\\underline{\\int_a^b}f=\\overline{\\int_a^b}f.\n\\]\nDiambil sebarang $\\varepsilon>0$. Karena $I$ merupakan supremum dari seluruh jumlah bawah, terdapat partisi $P_1$ sehingga\n\\[\nI-\\frac{\\varepsilon}{2}<L(f,P_1)\\le I.\n\\]\nKarena $I$ merupakan infimum dari seluruh jumlah atas, terdapat partisi $P_2$ sehingga\n\\[\nI\\le U(f,P_2)<I+\\frac{\\varepsilon}{2}.\n\\]\nDibentuk partisi penghalus bersama\n\\[\nR=P_1\\cup P_2.\n\\]\nBerdasarkan lemma yang telah dibuktikan dan lemma yang telah dibuktikan, berlaku\n\\[\nL(f,P_1)\\le L(f,R),\n\\qquad\nU(f,R)\\le U(f,P_2).\n\\]\nDengan demikian,\n\\[\\begin{aligned}\n0\\le U(f,R)-L(f,R)\\\\\n&\\le U(f,P_2)-L(f,P_1)\\\\\n&<\\left(I+\\frac{\\varepsilon}{2}\\right)-\\left(I-\\frac{\\varepsilon}{2}\\right)\\\\\n&=\\varepsilon.\n\\end{aligned}\\]\nDengan demikian, terdapat partisi $R$ yang memenuhi $U(f,R)-L(f,R)<\\varepsilon$.\n\\,\n($\\Leftarrow$)\nDiketahui bahwa untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$.\nDibuktikan bahwa fungsi $f$ terintegralkan Darboux.\nDiambil sebarang $\\varepsilon>0$, kemudian dipilih partisi $P$ yang memenuhi\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan definisi integral Darboux bawah dan integral Darboux atas,\n\\[\nL(f,P)\\le \\underline{\\int_a^b}f\n\\le \\overline{\\int_a^b}f\\le U(f,P).\n\\]\nOleh karena itu,\n\\[\n0\\le\n\\overline{\\int_a^b}f-\\underline{\\int_a^b}f\n\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh\n\\[\n\\overline{\\int_a^b}f-\\underline{\\int_a^b}f=0.\n\\]\nDengan demikian, integral bawah sama dengan integral atas, sehingga $f$ terintegralkan Darboux.\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh ekuivalensi yang dinyatakan. Dengan demikian, teorema tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan Kriteria Darboux pada $f(x)=x$",
            "body": "Diberikan $f(x)=x$ pada $[0,1]$. Gunakan Kriteria Darboux untuk membuktikan bahwa $f$ terintegralkan Darboux.",
            "solution": "Diketahui $f(x)=x$ monoton naik pada $[0,1]$. Dipilih partisi seragam\n\\[\nP_n=\\left\\{0,\\frac{1}{n},\\frac{2}{n},\\ldots,1\\right\\}.\n\\]\nPada subinterval ke-$i$ berlaku\n\\[\nm_i=\\frac{i-1}{n},\\qquad M_i=\\frac{i}{n},\\qquad \\Delta x_i=\\frac{1}{n}.\n\\]\nDengan demikian,\n\\[\n\\begin{aligned}\nU(f,P_n)-L(f,P_n)\n&=\\sum_{i=1}^{n}(M_i-m_i)\\Delta x_i\\\\\n&=\\sum_{i=1}^{n}\\frac{1}{n}\\frac{1}{n}\\\\\n&=\\frac{1}{n}.\n\\end{aligned}\n\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih $n\\in\\mathbb{N}$ sehingga $n>\\frac{1}{\\varepsilon}$. Diperoleh\n\\[\nU(f,P_n)-L(f,P_n)=\\frac{1}{n}<\\varepsilon.\n\\]\nBerdasarkan Teorema Kriteria Darboux, $f$ terintegralkan Darboux pada $[0,1]$."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, celah $U(f,P)-L(f,P)$ dapat dibuat sebarang kecil ketika partisi dipilih secara sesuai."
          }
        ]
      },
      {
        "title": "Interpretasi melalui osilasi lokal",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pada subinterval $I_i$, didefinisikan\n\\[\n\\omega_i=M_i-m_i.\n\\]\nDengan demikian,\n\\[\nU(f,P)-L(f,P)=\\sum_{i=1}^n\\omega_i\\Delta x_i.\n\\]\nDengan demikian kriteria Darboux menyatakan bahwa fungsi terintegralkan apabila total osilasi tertimbang dapat dibuat sekecil yang diinginkan melalui pemilihan partisi yang sesuai."
          }
        ]
      }
    ]
  },
  {
    "title": "Perbandingan dan Ekuivalensi Riemann–Darboux",
    "blocks": [],
    "subsections": [
      {
        "title": "Visualisasi perbandingan",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Ekuivalensi Riemann–Darboux",
            "body": "Untuk fungsi terbatas $f:[a,b]\\to\\mathbb{R}$, pernyataan berikut ekuivalen:\n(1) $f$ terintegralkan Riemann;\n(2) $f$ terintegralkan Darboux;\n(3) untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sehingga $U(f,P)-L(f,P)<\\varepsilon$.\nJika kondisi-kondisi tersebut terpenuhi, nilai integral Riemann dan Darboux sama.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas.\nDibuktikan bahwa integrabilitas Riemann, integrabilitas Darboux, dan Kriteria Darboux saling ekuivalen, serta nilai integral Riemann dan Darboux sama. Ekuivalensi antara integrabilitas Darboux dan Kriteria Darboux telah diperoleh pada teorema yang telah dibuktikan. Oleh karena itu, hubungan antara integral Darboux dan integral Riemann dibuktikan dalam dua arah.\n\\,\n($\\Rightarrow$) Darboux ke Riemann\nDiketahui fungsi $f$ terintegralkan Darboux dengan nilai integral $I$.\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann dan nilai integral Riemannnya adalah $I$.\nKarena $f$ terbatas, terdapat $M\\ge0$ sehingga $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$. Diambil sebarang $\\varepsilon>0$. Berdasarkan teorema yang telah dibuktikan, dipilih partisi tetap\n\\[\nP_0=\\{a=c_0<c_1<\\cdots<c_m=b\\}\n\\]\nyang memenuhi\n\\[\nU(f,P_0)-L(f,P_0)<\\frac{\\varepsilon}{2}.\n\\]\nJika $M=0$, maka $f$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $M>0$. Jika $m=1$, tidak terdapat titik interior pada $P_0$; jika $m>1$, dipilih $\\delta>0$ sedemikian sehingga\n\\[\n2M(m-1)\\delta<\\frac{\\varepsilon}{2}.\n\\]\nDiambil sebarang partisi berlabel $\\dot Q$ dengan $\\lVert Q\\rVert<\\delta$. Subinterval-subinterval $Q$ dipisahkan menjadi subinterval yang tidak memuat titik interior $c_1,\\ldots,c_{m-1}$ dan subinterval yang memuat sedikitnya satu titik interior tersebut. Subinterval jenis kedua berjumlah paling banyak $m-1$ dan total panjangnya kurang dari $(m-1)\\delta$.\nPada subinterval jenis pertama, nilai $f(t_i)$ dijepit oleh infimum dan supremum dari subinterval $P_0$ yang memuatnya. Pada subinterval jenis kedua, karena $|f|\\le M$, galat maksimum terhadap penjepit Darboux dibatasi oleh dua kali $M$ dikalikan total panjang subinterval jenis kedua. Dengan demikian diperoleh\n\\[\nL(f,P_0)-2M(m-1)\\delta\n\\le S(f,\\dot Q)\n\\le U(f,P_0)+2M(m-1)\\delta.\n\\]\nKarena\n\\[\nL(f,P_0)\\le I\\le U(f,P_0),\n\\]\nberlaku\n\\[\n|S(f,\\dot Q)-I|\n\\le U(f,P_0)-L(f,P_0)+2M(m-1)\\delta\n<\\varepsilon.\n\\]\nKarena $\\dot Q$ dipilih sebarang selama $\\lVert Q\\rVert<\\delta$, definisi integral Riemann terpenuhi. Dengan demikian, $f$ terintegralkan Riemann dengan integral $I$.\n\\,\n($\\Leftarrow$) Riemann ke Darboux\nDiketahui fungsi $f$ terintegralkan Riemann dengan integral $I$.\nDibuktikan bahwa fungsi $f$ terintegralkan Darboux dan nilai integral Darbouxnya adalah $I$.\nDiambil sebarang $\\varepsilon>0$. Berdasarkan definisi integral Riemann, terdapat $\\delta>0$ sehingga untuk setiap partisi berlabel $\\dot P$ dengan $\\lVert P\\rVert<\\delta$ berlaku\n\\[\n|S(f,\\dot P)-I|<\\frac{\\varepsilon}{4}.\n\\]\nDipilih partisi $P=\\{x_0,\\ldots,x_n\\}$ dengan $\\lVert P\\rVert<\\delta$. Pada setiap subinterval $I_i=[x_{i-1},x_i]$, berdasarkan lemma yang telah dibuktikan, dipilih $s_i,r_i\\in I_i$ yang memenuhi\n\\[\nM_i-\\frac{\\varepsilon}{4(b-a)}<f(s_i)\\le M_i,\n\\qquad\nm_i\\le f(r_i)<m_i+\\frac{\\varepsilon}{4(b-a)}.\n\\]\nDibentuk dua jumlah Riemann\n\\[\nS_U=\\sum_{i=1}^n f(s_i)\\Delta x_i,\n\\qquad\nS_L=\\sum_{i=1}^n f(r_i)\\Delta x_i.\n\\]\nDari pemilihan $s_i$ diperoleh\n\\[\nS_U>U(f,P)-\\frac{\\varepsilon}{4},\n\\]\nAkibatnya,\n\\[\nU(f,P)<S_U+\\frac{\\varepsilon}{4}<I+\\frac{\\varepsilon}{2}.\n\\]\nDengan cara yang sama, dari pemilihan $r_i$ diperoleh\n\\[\nS_L<L(f,P)+\\frac{\\varepsilon}{4},\n\\]\nAkibatnya,\n\\[\nL(f,P)>S_L-\\frac{\\varepsilon}{4}>I-\\frac{\\varepsilon}{2}.\n\\]\nAkibatnya,\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan teorema yang telah dibuktikan, $f$ terintegralkan Darboux. Karena untuk setiap partisi berlaku\n\\[\nL(f,P)\\le I\\le U(f,P)\n\\]\ndalam limit yang dihasilkan, nilai integral Darboux sama dengan $I$.\nBerdasarkan pembuktian arah Darboux ke Riemann dan arah Riemann ke Darboux, serta teorema yang telah dibuktikan, ketiga pernyataan pada teorema saling ekuivalen. Dengan demikian, teorema tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan ekuivalensi Riemann–Darboux",
            "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$. Diketahui dari perhitungan Darboux bahwa\n\\[\n\\underline{\\int_0^1}x\\,\\,d x\n=\\overline{\\int_0^1}x\\,\\,d x\n=\\frac{1}{2}.\n\\]\nTentukan kesimpulan mengenai integral Riemann fungsi $f$.",
            "solution": "Diketahui integral Darboux bawah dan integral Darboux atas sama, yaitu\n\\[\n\\underline{\\int_0^1}x\\,\\,d x\n=\\overline{\\int_0^1}x\\,\\,d x\n=\\frac{1}{2}.\n\\]\nBerdasarkan definisi, kesamaan tersebut menunjukkan bahwa $f$ terintegralkan Darboux. Teorema Ekuivalensi Riemann–Darboux menyatakan bahwa keterintegralan Darboux ekuivalen dengan keterintegralan Riemann untuk fungsi terbatas. Oleh karena itu, $f$ juga terintegralkan Riemann dan nilai kedua integral sama. Diperoleh\n\\[\n\\boxed{\\int_0^1x\\,\\,d x=\\frac{1}{2}}.\n\\]\nDengan demikian, hasil Darboux dapat langsung dipindahkan menjadi hasil Riemann melalui teorema ekuivalensi."
          },
          {
            "kind": "paragraph",
            "text": "Hubungan konsep tersebut menunjukkan bahwa integrabilitas Riemann, integrabilitas Darboux, dan Kriteria Darboux merupakan tiga formulasi yang ekuivalen untuk fungsi terbatas pada interval tertutup."
          },
          {
            "kind": "note",
            "title": "",
            "body": "Pada pembuktian arah Darboux ke Riemann, perhatian terhadap partisi yang tidak selalu merupakan partisi penghalus dari $P_0$ diperlukan karena definisi Riemann berbasis norma partisi harus berlaku untuk setiap partisi yang cukup halus."
          }
        ]
      }
    ]
  },
  {
    "title": "Kelas Fungsi yang Terintegralkan Riemann",
    "blocks": [],
    "subsections": [
      {
        "title": "Fungsi kontinu",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Keterintegralan fungsi kontinu",
            "body": "Jika $f$ kontinu pada $[a,b]$, maka $f$ terintegralkan Riemann pada $[a,b]$.",
            "proof": "Diketahui fungsi $f$ kontinu pada interval tertutup $[a,b]$.\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nKarena $[a,b]$ kompak dan $f$ kontinu, berdasarkan Teorema Heine--Cantor, $f$ kontinu seragam pada $[a,b]$. Diambil sebarang $\\varepsilon>0$. Dari kontinuitas seragam, terdapat $\\delta>0$ sehingga\n\\[\n|x-y|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(x)-f(y)|<\\frac{\\varepsilon}{b-a}.\n\\]\nDipilih partisi $P$ dengan $\\lVert P\\rVert<\\delta$. Pada setiap subinterval $I_i=[x_{i-1},x_i]$, untuk sebarang $x,y\\in I_i$ berlaku\n\\[\n|x-y|\\le\\Delta x_i<\\delta.\n\\]\nDengan demikian,\n\\[\n|f(x)-f(y)|<\\frac{\\varepsilon}{b-a}.\n\\]\nKarena $f$ kontinu pada interval kompak $I_i$, maksimum dan minimum dicapai. Oleh karena itu,\n\\[\nM_i-m_i<\\frac{\\varepsilon}{b-a}.\n\\]\nSelanjutnya,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\\\\\n&=\\sum_{i=1}^n(M_i-m_i)\\Delta x_i\\\\\n&<\\frac{\\varepsilon}{b-a}\\sum_{i=1}^n\\Delta x_i\\\\\n&=\\frac{\\varepsilon}{b-a}(b-a)\\\\\n&=\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan teorema yang telah dibuktikan, $f$ terintegralkan Riemann pada $[a,b]$.\nDengan demikian, teorema tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Fungsi kontinu langsung terintegralkan",
            "body": "Diberikan fungsi\n\\[\nf(x)=\\sin x,\\qquad x\\in[0,\\pi].\n\\]\nTentukan apakah $f$ terintegralkan Riemann.",
            "solution": "Diketahui fungsi sinus kontinu pada $\\mathbb{R}$. Dengan demikian, restriksi\n\\[\nf(x)=\\sin x\n\\]\nkontinu pada interval tertutup $[0,\\pi]$. Berdasarkan Teorema Keterintegralan fungsi kontinu, setiap fungsi kontinu pada interval tertutup terintegralkan Riemann. Oleh karena itu,\n\\[\n\\boxed{f(x)=\\sin x\\text{ terintegralkan Riemann pada }[0,\\pi].}\n\\]\nTidak diperlukan perhitungan langsung jumlah Riemann atau jumlah Darboux untuk menyimpulkan keterintegralannya."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, kontinuitas seragam mengendalikan osilasi fungsi pada setiap subinterval yang cukup pendek."
          }
        ]
      },
      {
        "title": "Fungsi monoton",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Keterintegralan fungsi monoton",
            "body": "Jika $f$ monoton pada $[a,b]$, maka $f$ terintegralkan Riemann.",
            "proof": "Diketahui fungsi $f$ monoton pada $[a,b]$.\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nPembuktian dituliskan untuk kasus $f$ monoton naik. Kasus monoton turun diperoleh secara analog dengan menukar peran supremum dan infimum.\nDiambil partisi seragam\n\\[\nx_i=a+i\\frac{b-a}{n},\n\\qquad\n\\Delta x=\\frac{b-a}{n}.\n\\]\nKarena $f$ monoton naik, pada setiap subinterval $[x_{i-1},x_i]$ berlaku\n\\[\nm_i=f(x_{i-1}),\n\\qquad\nM_i=f(x_i).\n\\]\nOleh karena itu,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\\\\\n&=\\sum_{i=1}^n\\bigl(f(x_i)-f(x_{i-1})\\bigr)\\Delta x\\\\\n&=\\frac{b-a}{n}\\sum_{i=1}^n\\bigl(f(x_i)-f(x_{i-1})\\bigr).\n\\end{aligned}\\]\nJumlah pada ruas kanan bersifat teleskopik, sehingga\n\\[\n\\sum_{i=1}^n\\bigl(f(x_i)-f(x_{i-1})\\bigr)=f(b)-f(a).\n\\]\nDengan demikian,\n\\[\nU(f,P)-L(f,P)\n=\\frac{(b-a)(f(b)-f(a))}{n}.\n\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih $n$ cukup besar sehingga\n\\[\n\\frac{(b-a)(f(b)-f(a))}{n}<\\varepsilon.\n\\]\nBerdasarkan teorema yang telah dibuktikan, $f$ terintegralkan Riemann.\nDengan demikian, teorema tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Fungsi monoton langsung terintegralkan",
            "body": "Diberikan fungsi\n\\[\nf(x)=\\frac{1}{1+x},\\qquad x\\in[0,1].\n\\]\nTentukan apakah $f$ terintegralkan Riemann.",
            "solution": "Diketahui\n\\[\nf'(x)=-\\frac{1}{(1+x)^2}<0\n\\]\nuntuk setiap $x\\in[0,1]$. Dengan demikian, $f$ monoton turun pada $[0,1]$. Berdasarkan Teorema Keterintegralan fungsi monoton, setiap fungsi monoton pada interval tertutup terintegralkan Riemann. Oleh karena itu,\n\\[\n\\boxed{\\frac{1}{1+x}\\text{ terintegralkan Riemann pada }[0,1].}\n\\]"
          },
          {
            "kind": "paragraph",
            "text": "Pada representasi geometris, jumlah bawah menggunakan nilai ujung kiri dan jumlah atas menggunakan nilai ujung kanan, sehingga selisih keduanya membentuk jumlah teleskopik."
          }
        ]
      },
      {
        "title": "Fungsi Lipschitz",
        "blocks": [
          {
            "kind": "definition",
            "title": "Fungsi Lipschitz",
            "body": "Fungsi $f:[a,b]\\to\\mathbb{R}$ disebut fungsi Lipschitz jika terdapat konstanta $K\\ge0$ sedemikian sehingga\n\\[\n|f(x)-f(y)|\\le K|x-y|\n\\]\nuntuk setiap $x,y\\in[a,b]$. Konstanta $K$ disebut konstanta Lipschitz."
          },
          {
            "kind": "example",
            "title": "Contoh fungsi Lipschitz",
            "body": "Diberikan fungsi\n\\[\nf(x)=3x-2,\\qquad x\\in[-1,2].\n\\]\nDibuktikan bahwa $f$ merupakan fungsi Lipschitz dan ditentukan salah satu konstanta Lipschitznya.",
            "solution": "Diketahui $f(x)=3x-2$ pada $[-1,2]$.\n\nDibuktikan bahwa terdapat $K\\ge0$ sehingga\n\\[\n|f(x)-f(y)|\\le K|x-y|\n\\]\nuntuk setiap $x,y\\in[-1,2]$.\n\nDiambil sebarang $x,y\\in[-1,2]$. Diperoleh\n\\[\n|f(x)-f(y)|\n=|(3x-2)-(3y-2)|\n=|3x-3y|\n=3|x-y|.\n\\]\nDengan demikian, ketaksamaan Lipschitz berlaku dengan $K=3$. Konstanta tersebut tidak harus unik; setiap $K\\ge3$ juga memenuhi definisi. Oleh karena itu, $f$ merupakan fungsi Lipschitz pada $[-1,2]$ dengan salah satu konstanta Lipschitz $K=3$."
          },
          {
            "kind": "theorem",
            "title": "Keterintegralan fungsi Lipschitz",
            "body": "Jika $f:[a,b]\\to\\mathbb{R}$ merupakan fungsi Lipschitz, maka $f$ terintegralkan Riemann pada $[a,b]$.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ memenuhi\n\\[\n|f(x)-f(y)|\\le K|x-y|\n\\]\nuntuk setiap $x,y\\in[a,b]$, dengan $K\\ge0$.\n\nDibuktikan bahwa $f$ terintegralkan Riemann pada $[a,b]$.\n\nJika $K=0$, fungsi $f$ konstan dan pernyataan langsung berlaku. Selanjutnya diandaikan $K>0$. Diambil sebarang $\\varepsilon>0$. Dipilih partisi $P$ dari $[a,b]$ yang memenuhi\n\\[\n\\lVert P\\rVert<\\frac{\\varepsilon}{K(b-a)}.\n\\]\nPada setiap subinterval $I_i=[x_{i-1},x_i]$, untuk sebarang $x,y\\in I_i$ berlaku\n\\[\n|f(x)-f(y)|\\le K|x-y|\\le K\\Delta x_i.\n\\]\nKarena fungsi Lipschitz kontinu, maksimum dan minimum pada $I_i$ dicapai. Oleh karena itu,\n\\[\nM_i-m_i\\le K\\Delta x_i.\n\\]\nDiperoleh\n\\[\n\\begin{aligned}\nU(f,P)-L(f,P)\n&=\\sum_{i=1}^{n}(M_i-m_i)\\Delta x_i\\\\\n&\\le K\\sum_{i=1}^{n}(\\Delta x_i)^2\\\\\n&\\le K\\lVert P\\rVert\\sum_{i=1}^{n}\\Delta x_i\\\\\n&=K(b-a)\\lVert P\\rVert\\\\\n&<\\varepsilon.\n\\end{aligned}\n\\]\nBerdasarkan Teorema Kriteria Darboux, fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nDengan demikian, Teorema Keterintegralan Fungsi Lipschitz terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan teorema Lipschitz",
            "body": "Diberikan fungsi\n\\[\nf(x)=|x|,\\qquad x\\in[-1,1].\n\\]\nBuktikan secara singkat bahwa $f$ terintegralkan Riemann menggunakan sifat Lipschitz.",
            "solution": "Diketahui ketaksamaan segitiga terbalik\n\\[\n\\bigl||x|-|y|\\bigr|\\le|x-y|\n\\]\nuntuk setiap $x,y\\in\\mathbb{R}$. Dengan demikian,\n\\[\n|f(x)-f(y)|\\le|x-y|,\n\\]\nsehingga $f$ merupakan fungsi Lipschitz dengan konstanta $K=1$. Berdasarkan Teorema Keterintegralan fungsi Lipschitz, fungsi Lipschitz pada interval tertutup terintegralkan Riemann. Oleh karena itu,\n\\[\n\\boxed{|x|\\text{ terintegralkan Riemann pada }[-1,1].}\n\\]"
          }
        ]
      },
      {
        "title": "Fungsi monoton sepotong-sepotong",
        "blocks": [
          {
            "kind": "definition",
            "title": "Fungsi monoton sepotong-sepotong",
            "body": "Fungsi $f:[a,b]\\to\\mathbb{R}$ disebut monoton sepotong-sepotong jika terdapat partisi\n\\[\na=c_0<c_1<\\cdots<c_m=b\n\\]\nsedemikian sehingga restriksi $f$ pada setiap interval $[c_{j-1},c_j]$ monoton."
          },
          {
            "kind": "example",
            "title": "Contoh fungsi monoton sepotong-sepotong",
            "body": "Diberikan fungsi\n\\[\nf(x)=\\left|x-\\frac{1}{2}\\right|,\\qquad x\\in[0,1].\n\\]\nDibuktikan bahwa $f$ merupakan fungsi monoton sepotong-sepotong.",
            "solution": "Diketahui\n\\[\nf(x)=\\left|x-\\frac{1}{2}\\right|.\n\\]\nFungsi dapat ditulis sebagai\n\\[\nf(x)=\n\\begin{cases}\n\\frac{1}{2}-x,&0\\le x\\le\\frac{1}{2},\\\\\nx-\\frac{1}{2},&\\frac{1}{2}\\le x\\le1.\n\\end{cases}\n\\]\nPada interval $[0,\\frac{1}{2}]$, fungsi $\\frac{1}{2}-x$ monoton turun. Pada interval $[\\frac{1}{2},1]$, fungsi $x-\\frac{1}{2}$ monoton naik. Dipilih partisi\n\\[\n0<\\frac{1}{2}<1.\n\\]\nRestriksi $f$ pada setiap subinterval partisi tersebut monoton. Dengan demikian, $f$ merupakan fungsi monoton sepotong-sepotong pada $[0,1]$."
          },
          {
            "kind": "theorem",
            "title": "Keterintegralan fungsi monoton sepotong-sepotong",
            "body": "Jika $f:[a,b]\\to\\mathbb{R}$ monoton sepotong-sepotong, maka $f$ terintegralkan Riemann pada $[a,b]$.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ monoton sepotong-sepotong. Dengan demikian, terdapat partisi\n\\[\na=c_0<c_1<\\cdots<c_m=b\n\\]\nsedemikian sehingga $f$ monoton pada setiap $[c_{j-1},c_j]$.\n\nDibuktikan bahwa $f$ terintegralkan Riemann pada $[a,b]$.\n\nDiambil sebarang $\\varepsilon>0$. Untuk setiap $j=1,2,\\ldots,m$, Teorema Keterintegralan Fungsi Monoton memberikan partisi $P_j$ dari $[c_{j-1},c_j]$ yang memenuhi\n\\[\nU(f,P_j)-L(f,P_j)<\\frac{\\varepsilon}{m}.\n\\]\nDibentuk partisi $P$ dari $[a,b]$ dengan menggabungkan seluruh partisi $P_1,P_2,\\ldots,P_m$. Karena titik $c_0,c_1,\\ldots,c_m$ termuat dalam $P$, jumlah Darboux pada $[a,b]$ dapat dipisahkan menurut interval-interval tersebut. Diperoleh\n\\[\n\\begin{aligned}\nU(f,P)-L(f,P)\n&=\\sum_{j=1}^{m}\\bigl(U(f,P_j)-L(f,P_j)\\bigr)\\\\\n&<\\sum_{j=1}^{m}\\frac{\\varepsilon}{m}\\\\\n&=\\varepsilon.\n\\end{aligned}\n\\]\nBerdasarkan Teorema Kriteria Darboux, fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nDengan demikian, Teorema Keterintegralan Fungsi Monoton Sepotong-sepotong terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan teorema monoton sepotong-sepotong",
            "body": "Diberikan fungsi\n\\[\nf(x)=\\left|x-\\frac{1}{2}\\right|,\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Riemann fungsi tersebut menggunakan sifat monoton sepotong-sepotong.",
            "solution": "Pada $[0,\\frac{1}{2}]$, fungsi dapat ditulis sebagai\n\\[\nf(x)=\\frac{1}{2}-x,\n\\]\nyang monoton turun. Pada $[\\frac{1}{2},1]$, fungsi dapat ditulis sebagai\n\\[\nf(x)=x-\\frac{1}{2},\n\\]\nyang monoton naik. Dengan partisi\n\\[\n0<\\frac{1}{2}<1,\n\\]\nfungsi monoton pada setiap bagian. Dengan demikian, $f$ monoton sepotong-sepotong. Berdasarkan Teorema Keterintegralan fungsi monoton sepotong-sepotong, diperoleh\n\\[\n\\boxed{f\\text{ terintegralkan Riemann pada }[0,1].}\n\\]"
          }
        ]
      },
      {
        "title": "Fungsi bervariasi terbatas",
        "blocks": [
          {
            "kind": "definition",
            "title": "Variasi total",
            "body": "Diberikan fungsi $f:[a,b]\\to\\mathbb{R}$ dan partisi\n\\[\nP=\\{a=x_0<x_1<\\cdots<x_n=b\\}.\n\\]\nVariasi $f$ terhadap partisi $P$ didefinisikan oleh\n\\[\nV(f,P)=\\sum_{i=1}^{n}|f(x_i)-f(x_{i-1})|.\n\\]\nVariasi total $f$ pada $[a,b]$ didefinisikan oleh\n\\[\nV_a^b(f)=\\sup_P V(f,P),\n\\]\ndengan supremum diambil terhadap seluruh partisi $P$ dari $[a,b]$."
          },
          {
            "kind": "example",
            "title": "Menghitung variasi terhadap suatu partisi",
            "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac{1}{3},\\frac{3}{4},1\\right\\}.\n\\]\nDitentukan $V(f,P)$.",
            "solution": "Diketahui $f(x)=x$ dan\n\\[\nP=\\left\\{0,\\frac{1}{3},\\frac{3}{4},1\\right\\}.\n\\]\nBerdasarkan definisi,\n\\[\nV(f,P)=\\sum_{i=1}^{3}|f(x_i)-f(x_{i-1})|.\n\\]\nDiperoleh\n\\[\n\\begin{aligned}\nV(f,P)\n&=\\left|\\frac{1}{3}-0\\right|\n+\\left|\\frac{3}{4}-\\frac{1}{3}\\right|\n+\\left|1-\\frac{3}{4}\\right|\\\\\n&=\\frac{1}{3}+\\frac{5}{12}+\\frac{1}{4}\\\\\n&=1.\n\\end{aligned}\n\\]\nDengan demikian, variasi $f$ terhadap partisi $P$ adalah\n\\[\n\\boxed{V(f,P)=1}.\n\\]"
          },
          {
            "kind": "definition",
            "title": "Fungsi bervariasi terbatas",
            "body": "Fungsi $f:[a,b]\\to\\mathbb{R}$ disebut bervariasi terbatas pada $[a,b]$ jika\n\\[\nV_a^b(f)<\\infty.\n\\]"
          },
          {
            "kind": "example",
            "title": "Contoh fungsi bervariasi terbatas",
            "body": "Diberikan fungsi\n\\[\nf(x)=x^2,\\qquad x\\in[0,1].\n\\]\nDibuktikan bahwa $f$ bervariasi terbatas dan ditentukan variasi totalnya.",
            "solution": "Diketahui $f(x)=x^2$ pada $[0,1]$. Fungsi $f$ monoton naik. Diambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nKarena $f(x_i)\\ge f(x_{i-1})$, berlaku\n\\[\n|f(x_i)-f(x_{i-1})|=f(x_i)-f(x_{i-1}).\n\\]\nDengan demikian,\n\\[\n\\begin{aligned}\nV(f,P)\n&=\\sum_{i=1}^{n}[f(x_i)-f(x_{i-1})]\\\\\n&=f(1)-f(0)\\\\\n&=1.\n\\end{aligned}\n\\]\nNilai tersebut berlaku untuk setiap partisi $P$. Oleh karena itu,\n\\[\nV_0^1(f)=\\sup_PV(f,P)=1<\\infty.\n\\]\nDengan demikian, $f(x)=x^2$ bervariasi terbatas pada $[0,1]$."
          },
          {
            "kind": "theorem",
            "title": "Keterintegralan fungsi bervariasi terbatas",
            "body": "Jika $f:[a,b]\\to\\mathbb{R}$ bervariasi terbatas pada $[a,b]$, maka $f$ terintegralkan Riemann pada $[a,b]$.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ bervariasi terbatas, yaitu\n\\[\nV_a^b(f)<\\infty.\n\\]\n\nDibuktikan bahwa $f$ terintegralkan Riemann pada $[a,b]$.\n\nDidefinisikan fungsi variasi\n\\[\nv(x)=V_a^x(f),\n\\qquad x\\in[a,b],\n\\]\ndengan $v(a)=0$. Diambil $x,y\\in[a,b]$ dengan $x<y$. Setiap partisi dari $[a,x]$ dapat diperluas dengan menambahkan titik $y$. Berdasarkan definisi variasi total diperoleh\n\\[\nv(y)\\ge v(x)+|f(y)-f(x)|.\n\\]\nAkibatnya,\n\\[\nv(y)-v(x)\\ge |f(y)-f(x)|\\ge0,\n\\]\nsehingga $v$ monoton naik. Selanjutnya didefinisikan\n\\[\nw(x)=v(x)-f(x).\n\\]\nUntuk $x<y$ berlaku\n\\[\n\\begin{aligned}\nw(y)-w(x)\n&=v(y)-v(x)-\\bigl(f(y)-f(x)\\bigr)\\\\\n&\\ge |f(y)-f(x)|-\\bigl(f(y)-f(x)\\bigr)\\\\\n&\\ge0.\n\\end{aligned}\n\\]\nDengan demikian, $w$ juga monoton naik. Berdasarkan Teorema Keterintegralan Fungsi Monoton, fungsi $v$ dan $w$ terintegralkan Riemann. Karena\n\\[\nf=v-w,\n\\]\nTeorema Linearitas memberikan bahwa $f$ terintegralkan Riemann pada $[a,b]$.\nDengan demikian, Teorema Keterintegralan Fungsi Bervariasi Terbatas terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan teorema variasi terbatas",
            "body": "Diberikan fungsi $f(x)=x^2$ pada $[0,1]$. Gunakan variasi total untuk menyimpulkan keterintegralan Riemannnya.",
            "solution": "Diketahui $f(x)=x^2$ monoton naik pada $[0,1]$. Untuk sebarang partisi $P=\\{0=x_0<\\cdots<x_n=1\\}$,\n\\[\n\\begin{aligned}\nV(f,P)\n&=\\sum_{i=1}^{n}|x_i^2-x_{i-1}^2|\\\\\n&=\\sum_{i=1}^{n}(x_i^2-x_{i-1}^2)\\\\\n&=1.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\nV_0^1(f)=1<\\infty,\n\\]\nsehingga $f$ bervariasi terbatas. Berdasarkan Teorema Keterintegralan fungsi bervariasi terbatas, diperoleh\n\\[\n\\boxed{x^2\\text{ terintegralkan Riemann pada }[0,1].}\n\\]"
          }
        ]
      },
      {
        "title": "Fungsi tangga dan diskontinuitas berhingga",
        "blocks": [
          {
            "kind": "definition",
            "title": "Fungsi tangga",
            "body": "Fungsi $s:[a,b]\\to\\mathbb{R}$ disebut fungsi tangga jika terdapat partisi\n\\[\na=c_0<c_1<\\cdots<c_m=b\n\\]\nsedemikian sehingga $s$ konstan pada setiap interval terbuka $(c_{j-1},c_j)$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan fungsi\n\\[\ns(x)=\n\\begin{cases}\n2,&0\\le x<\\frac{1}{3},\\\\\n5,&\\frac{1}{3}\\le x\\le1.\n\\end{cases}\n\\]\nBuktikan bahwa $s$ merupakan fungsi tangga pada $[0,1]$.",
            "solution": "Diketahui fungsi $s:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\ns(x)=\n\\begin{cases}\n2,&0\\le x<\\frac{1}{3},\\\\\n5,&\\frac{1}{3}\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $s$ merupakan fungsi tangga pada $[0,1]$.\nDipilih partisi\n\\[\n0=c_0<c_1=\\frac{1}{3}<c_2=1.\n\\]\nPada interval terbuka $(c_0,c_1)=(0,\\frac{1}{3})$ berlaku\n\\[\ns(x)=2.\n\\]\nHal ini menunjukkan bahwa $s$ konstan pada interval tersebut. Pada interval terbuka $(c_1,c_2)=(\\frac{1}{3},1)$ berlaku\n\\[\ns(x)=5.\n\\]\nHal ini menunjukkan bahwa $s$ juga konstan pada interval tersebut.\nTerdapat partisi berhingga yang membuat $s$ konstan pada setiap interval terbuka antar titik partisi. Berdasarkan definisi fungsi tangga, $s$ merupakan fungsi tangga pada $[0,1]$.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "proposition",
            "title": "Keterintegralan fungsi tangga",
            "body": "Setiap fungsi tangga pada $[a,b]$ terintegralkan Riemann.",
            "proof": "Diketahui fungsi tangga $s$ pada $[a,b]$.\nDibuktikan bahwa fungsi $s$ terintegralkan Riemann pada $[a,b]$.\nDiandaikan titik-titik loncatan potensial fungsi $s$ adalah $c_1,\\ldots,c_{m-1}$. Karena $s$ terbatas, terdapat $M\\ge0$ sehingga $|s(x)|\\le M$ pada $[a,b]$.\nJika $M=0$, maka $s$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $M>0$. Diambil sebarang $\\varepsilon>0$. Di sekitar setiap titik $c_j$ dipilih interval terbuka kecil $J_j$ sedemikian sehingga\n\\[\n\\sum_{j=1}^{m-1}|J_j|<\\frac{\\varepsilon}{2M}.\n\\]\nDibentuk partisi $P$ yang memuat seluruh ujung interval $J_j$ dan seluruh titik $c_j$.\nPada subinterval partisi yang tidak beririsan dengan interval kecil di sekitar titik loncatan, fungsi $s$ konstan. Oleh karena itu, pada subinterval tersebut berlaku\n\\[\nM_i-m_i=0.\n\\]\nPada subinterval yang berada dalam gabungan interval $J_j$, osilasi $s$ paling besar $2M$. Dengan demikian,\n\\[\\begin{aligned}\nU(s,P)-L(s,P)\\\\\n&=\\sum_i(M_i-m_i)\\Delta x_i\\\\\n&\\le 2M\\sum_{j=1}^{m-1}|J_j|\\\\\n&<\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan teorema yang telah dibuktikan, $s$ terintegralkan Riemann.\nDengan demikian, proposisi tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan proposisi",
            "body": "Misalkan fungsi\n\\[\ns(x)=\n\\begin{cases}\n2,&0\\le x<\\frac{1}{3},\\\\\n5,&\\frac{1}{3}\\le x\\le1.\n\\end{cases}\n\\]\nBuktikan bahwa $s$ terintegralkan Riemann pada $[0,1]$.",
            "solution": "Diketahui fungsi $s$ yang bernilai $2$ pada $[0,\\frac{1}{3})$ dan bernilai $5$ pada $[\\frac{1}{3},1]$.\nDibuktikan bahwa $s$ terintegralkan Riemann pada $[0,1]$.\nPada contoh sebelumnya telah dibuktikan bahwa $s$ merupakan fungsi tangga dengan partisi\n\\[\n0<\\frac{1}{3}<1.\n\\]\nProposisi yang telah dibuktikan menyatakan bahwa setiap fungsi tangga pada interval tertutup merupakan fungsi terintegralkan Riemann. Karena $s$ memenuhi definisi fungsi tangga, proposisi tersebut dapat diterapkan langsung.\nDiperoleh bahwa $s$ terintegralkan Riemann pada $[0,1]$.\nDengan demikian, contoh penerapan proposisi yang telah dibuktikan terbukti."
          },
          {
            "kind": "proposition",
            "title": "Diskontinuitas berhingga",
            "body": "Jika $f:[a,b]\\to\\mathbb{R}$ terbatas dan kontinu kecuali pada berhingga banyak titik, maka $f$ terintegralkan Riemann.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas dan kontinu kecuali pada berhingga banyak titik.\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nDiandaikan titik-titik diskontinuitas $f$ adalah $c_1,\\ldots,c_m$. Karena $f$ terbatas, terdapat $M\\ge0$ sehingga $|f(x)|\\le M$ pada $[a,b]$.\nJika $M=0$, maka $f$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $M>0$. Diambil sebarang $\\varepsilon>0$. Di sekitar setiap $c_j$ dipilih interval terbuka kecil $J_j$ sehingga\n\\[\n\\sum_{j=1}^m|J_j|<\\frac{\\varepsilon}{4M}.\n\\]\nPada gabungan interval tersebut, osilasi $f$ paling besar $2M$. Oleh karena itu, kontribusi bagian tersebut terhadap $U-L$ kurang dari\n\\[\n2M\\cdot\\frac{\\varepsilon}{4M}=\\frac{\\varepsilon}{2}.\n\\]\nHimpunan tertutup yang tersisa setelah persekitaran-persekitaran kecil tersebut dikeluarkan merupakan gabungan berhingga interval tertutup yang tidak mengandung titik diskontinuitas. Pada setiap komponen tertutup itu, $f$ kontinu, sehingga kontinu seragam. Dipilih partisi yang cukup halus pada bagian kontinu sehingga osilasi pada setiap subintervalnya kurang dari\n\\[\n\\frac{\\varepsilon}{2(b-a)}.\n\\]\nKontribusi bagian kontinu terhadap $U-L$ kurang dari\n\\[\n\\frac{\\varepsilon}{2(b-a)}(b-a)=\\frac{\\varepsilon}{2}.\n\\]\nDengan menggabungkan kedua bagian, diperoleh suatu partisi $P$ dengan\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan teorema yang telah dibuktikan, $f$ terintegralkan Riemann.\nDengan demikian, proposisi tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, daerah di sekitar titik diskontinuitas dapat ditutup oleh interval dengan total panjang kecil, sedangkan pada bagian lainnya osilasi dikendalikan oleh kontinuitas seragam."
          },
          {
            "kind": "example",
            "title": "Fungsi loncatan sebagai penerapan proposisi yang telah dibuktikan",
            "body": "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n0,&0\\le x<\\frac{1}{2},\\\\\n1,&\\frac{1}{2}\\le x\\le1.\n\\end{cases}\n\\]\nBuktikan bahwa $f$ terintegralkan Riemann pada $[0,1]$ dan\n\\[\n\\int_0^1f(x)\\,d x=\\frac{1}{2}.\n\\]",
            "solution": "Diketahui fungsi\n\\[\nf(x)=\n\\begin{cases}\n0,&0\\le x<\\frac{1}{2},\\\\\n1,&\\frac{1}{2}\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $f$ terintegralkan Riemann pada $[0,1]$ dan ditentukan nilai integralnya.\nFungsi $f$ kontinu pada setiap titik selain $x=\\frac{1}{2}$. Dengan demikian, $f$ hanya mempunyai satu titik diskontinuitas. Berdasarkan proposisi yang telah dibuktikan, $f$ terintegralkan Riemann.\nNilai integral dapat diverifikasi langsung dengan pendekatan Darboux. Diambil sebarang $\\varepsilon>0$. Dipilih $0<\\eta<\\min\\{\\varepsilon,\\frac{1}{2}\\}$ dan partisi\n\\[\nP_\\eta=\\left\\{0,\\frac{1}{2}-\\eta,\\frac{1}{2},1\\right\\}.\n\\]\nPada $[0,\\frac{1}{2}-\\eta]$ fungsi identik $0$. Pada $[\\frac{1}{2},1]$ fungsi identik $1$. Hanya subinterval $[\\frac{1}{2}-\\eta,\\frac{1}{2}]$ yang memuat dua nilai fungsi $0$ dan $1$. Oleh karena itu,\n\\[\nL(f,P_\\eta)=\\frac{1}{2}\n\\]\ndan\n\\[\nU(f,P_\\eta)=\\frac{1}{2}+\\eta.\n\\]\nDiperoleh\n\\[\n0\\le U(f,P_\\eta)-L(f,P_\\eta)=\\eta<\\varepsilon.\n\\]\nSelain itu, semua jumlah bawah tidak melebihi integral dan semua jumlah atas tidak kurang daripada integral. Karena jumlah bawah di atas selalu bernilai $\\frac{1}{2}$ dan jumlah atas dapat dibuat sedekat yang diinginkan dengan $\\frac{1}{2}$, diperoleh\n\\[\n\\underline{\\int_0^1}f\n=\n\\overline{\\int_0^1}f\n=\\frac{1}{2}.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1f(x)\\,d x=\\frac{1}{2}}.\n\\]\nPernyataan pada contoh tersebut terbukti."
          }
        ]
      },
      {
        "title": "Fungsi Dirichlet dan Thomae",
        "blocks": [
          {
            "kind": "example",
            "title": "Fungsi Dirichlet",
            "body": "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa fungsi Dirichlet tidak terintegralkan Darboux dan tidak terintegralkan Riemann pada $[0,1]$.",
            "solution": "Diketahui fungsi Dirichlet $f:[0,1]\\to\\mathbb{R}$ dengan $f(x)=1$ untuk $x\\in\\mathbb{Q}$ dan $f(x)=0$ untuk $x\\notin\\mathbb{Q}$.\nDibuktikan bahwa $f$ tidak terintegralkan Darboux dan tidak terintegralkan Riemann pada $[0,1]$.\nDiambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nSetiap subinterval $[x_{i-1},x_i]$ mengandung bilangan rasional dan bilangan irasional karena kedua himpunan tersebut rapat di $\\mathbb{R}$. Oleh karena itu,\n\\[\nm_i=0,\n\\qquad\nM_i=1\n\\]\nuntuk setiap $i$. jumlah Darboux bawah menjadi\n\\[\nL(f,P)=\\sum_{i=1}^{n}0\\cdot\\Delta x_i=0,\n\\]\nsedangkan jumlah Darboux atas menjadi\n\\[\nU(f,P)=\\sum_{i=1}^{n}1\\cdot\\Delta x_i\n=\\sum_{i=1}^{n}\\Delta x_i\n=1.\n\\]\nKarena nilai ini berlaku untuk setiap partisi,\n\\[\n\\underline{\\int_0^1}f=0,\n\\qquad\n\\overline{\\int_0^1}f=1.\n\\]\nIntegral Darboux bawah dan integral Darboux atas tidak sama. Berdasarkan definisi, $f$ tidak terintegralkan Darboux. Berdasarkan ekuivalensi integral Riemann dan Darboux, $f$ juga tidak terintegralkan Riemann.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Interpretasi geometris menunjukkan bahwa bilangan rasional dan irasional sama-sama rapat, sehingga setiap subinterval memiliki infimum $0$ dan supremum $1$."
          },
          {
            "kind": "example",
            "title": "Fungsi Thomae",
            "body": "Misalkan fungsi Thomae\n\\[\nf(x)=\n\\begin{cases}\n\\frac{1}{q},&x=\\frac pq,\\ (p,q)=1,\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa $f$ terintegralkan Riemann dan\n\\[\n\\int_0^1f(x)\\,d x=0.\n\\]",
            "solution": "Diketahui fungsi Thomae $f:[0,1]\\to\\mathbb{R}$.\nDibuktikan bahwa $f$ terintegralkan Riemann dan\n\\[\n\\int_0^1f(x)\\,d x=0.\n\\]\nSetiap subinterval dari $[0,1]$ mengandung bilangan irasional. Nilai fungsi pada bilangan irasional adalah $0$. Oleh karena itu, infimum $f$ pada setiap subinterval adalah $0$. Untuk setiap partisi $P$ berlaku\n\\[\nL(f,P)=0.\n\\]\nDengan demikian, integral Darboux bawah bernilai $0$.\nDiambil sebarang $\\varepsilon>0$. Dipilih bilangan bulat $N$ sedemikian sehingga\n\\[\n\\frac{1}{N}<\\frac{\\varepsilon}{2}.\n\\]\nDiperhatikan himpunan\n\\[\nF_N=\\left\\{\\frac pq\\in[0,1]:(p,q)=1,\\ q\\le N\\right\\}.\n\\]\nHimpunan $F_N$ berhingga. Setiap titik pada $F_N$ ditutup oleh interval terbuka sedemikian sehingga jumlah seluruh panjang interval tersebut kurang dari $\\frac{\\varepsilon}{2}$.\nDibentuk partisi $P$ yang memuat seluruh ujung interval penutup tersebut. Pada subinterval yang tidak beririsan dengan interval penutup, tidak terdapat rasional tereduksi dengan penyebut $q\\le N$. Setiap nilai positif fungsi pada bagian tersebut memenuhi\n\\[\nf(x)=\\frac{1}{q}<\\frac{1}{N}<\\frac{\\varepsilon}{2}.\n\\]\nKarena panjang total $[0,1]$ adalah $1$, kontribusi jumlah atas dari bagian ini kurang dari $\\frac{\\varepsilon}{2}$.\nPada bagian yang berada di dalam interval penutup, berlaku $0\\le f(x)\\le1$. Karena jumlah panjang interval penutup kurang dari $\\frac{\\varepsilon}{2}$, kontribusi jumlah atas dari bagian ini kurang dari $\\frac{\\varepsilon}{2}$. Akibatnya,\n\\[\nU(f,P)<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon.\n\\]\nKarena $L(f,P)=0$, diperoleh\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Kriteria Darboux, $f$ terintegralkan Darboux. Ekuivalensi Riemann–Darboux memberikan bahwa $f$ terintegralkan Riemann. integral bawah bernilai $0$ dan integral atas dapat dibuat lebih kecil daripada setiap $\\varepsilon>0$, sehingga nilai integralnya adalah $0$.\nDengan demikian,\n\\[\n\\boxed{\\int_0^1f(x)\\,d x=0}.\n\\]\nPernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, nilai yang relatif tinggi hanya muncul pada bilangan rasional dengan penyebut kecil, sedangkan nilai pada rasional dengan penyebut besar semakin dekat ke nol."
          },
          {
            "kind": "proposition",
            "title": "Integrabilitas fungsi Thomae",
            "body": "Fungsi Thomae pada $[0,1]$ terintegralkan Riemann dan\n\\[\n\\int_0^1 f(x)\\,d x=0.\n\\]",
            "proof": "Diketahui fungsi $f$ merupakan fungsi Thomae pada $[0,1]$.\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann dan\n\\[\n\\int_0^1f(x)\\,d x=0.\n\\]\nKarena setiap subinterval dari $[0,1]$ memuat bilangan irasional dan nilai fungsi Thomae pada setiap bilangan irasional adalah $0$, infimum fungsi pada setiap subinterval adalah $0$. Dengan demikian, untuk setiap partisi $P$ berlaku\n\\[\nL(f,P)=0.\n\\]\nSelanjutnya dibuktikan bahwa jumlah atas dapat dibuat sekecil yang dikehendaki.\nDiambil sebarang $\\varepsilon>0$. Dipilih $N\\in\\mathbb{N}$ sehingga\n\\[\n\\frac{1}{N}<\\frac{\\varepsilon}{2}.\n\\]\nHimpunan bilangan rasional $\\frac{p}{q}\\in[0,1]$ dalam bentuk paling sederhana dengan $q\\le N$ berhingga. Dituliskan titik-titik tersebut sebagai\n\\[\nr_1,r_2,\\ldots,r_k.\n\\]\nDi sekitar setiap $r_j$ dipilih interval kecil $J_j$ sehingga\n\\[\n\\sum_{j=1}^k|J_j|<\\frac{\\varepsilon}{2}.\n\\]\nDibentuk partisi $P$ yang memuat seluruh ujung interval $J_j$.\nPada setiap subinterval yang tidak beririsan dengan $J_1\\cup\\cdots\\cup J_k$, setiap bilangan rasional di dalamnya mempunyai penyebut $q>N$. Oleh karena itu,\n\\[\nf(x)\\le\\frac{1}{N}<\\frac{\\varepsilon}{2}.\n\\]\nKarena panjang total interval $[0,1]$ adalah $1$, kontribusi jumlah atas dari bagian tersebut kurang dari $\\frac{\\varepsilon}{2}$.\nPada gabungan $J_1\\cup\\cdots\\cup J_k$, berlaku $0\\le f\\le1$. Kontribusi jumlah atas dari bagian ini kurang dari total panjang gabungan interval tersebut, yaitu kurang dari $\\frac{\\varepsilon}{2}$. Dengan demikian,\n\\[\nU(f,P)<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon.\n\\]\nKarena $L(f,P)=0$, diperoleh\n\\[\n0\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan teorema yang telah dibuktikan, $f$ terintegralkan Riemann. Karena seluruh jumlah bawah bernilai $0$, nilai integralnya adalah $0$.\nDengan demikian, proposisi tersebut terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan proposisi",
            "body": "Misalkan fungsi Thomae $f$ pada $[0,1]$. Tentukan nilai integral Riemann fungsi tersebut.",
            "solution": "Diketahui fungsi $f$ merupakan fungsi Thomae pada $[0,1]$.\nDitentukan nilai\n\\[\n\\int_0^1f(x)\\,d x.\n\\]\nBerdasarkan proposisi yang telah dibuktikan, fungsi Thomae terintegralkan Riemann pada $[0,1]$ dan nilai integralnya adalah nol. Oleh karena itu,\n\\[\n\\boxed{\\int_0^1f(x)\\,d x=0}.\n\\]\nHasil tersebut konsisten dengan pembuktian pada contoh fungsi Thomae: setiap jumlah Darboux bawah bernilai $0$, sedangkan jumlah Darboux atas dapat dibuat sekecil yang diinginkan.\nDengan demikian, nilai integral pada contoh penerapan proposisi yang telah dibuktikan telah ditentukan."
          }
        ]
      }
    ]
  },
  {
    "title": "Sifat-Sifat Integral Riemann",
    "blocks": [
      {
        "kind": "theorem",
        "title": "Linearitas",
        "body": "Jika $f,g$ terintegralkan Riemann pada $[a,b]$ dan $\\alpha,\\beta\\in\\mathbb{R}$, maka $\\alpha f+\\beta g$ terintegralkan Riemann dan\n\\[\n\\int_a^b(\\alpha f+\\beta g)\\,d x\n=\\alpha\\int_a^b f\\,d x+\\beta\\int_a^b g\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ dan $g$ terintegralkan Riemann pada $[a,b]$, serta $\\alpha,\\beta\\in\\mathbb{R}$.\nDibuktikan bahwa fungsi $\\alpha f+\\beta g$ terintegralkan Riemann dan\n\\[\n\\int_a^b(\\alpha f+\\beta g)\\,d x\n=\\alpha\\int_a^b f\\,d x+\\beta\\int_a^b g\\,d x.\n\\]\nDituliskan\n\\[\nI_f=\\int_a^b f(x)\\,d x,\n\\qquad\nI_g=\\int_a^b g(x)\\,d x.\n\\]\nUntuk setiap partisi berlabel $\\dot P$ berlaku\n\\[\\begin{aligned}\nS(\\alpha f+\\beta g,\\dot P)\\\\\n&=\\sum_{i=1}^n\\bigl(\\alpha f(t_i)+\\beta g(t_i)\\bigr)\\Delta x_i\\\\\n&=\\alpha S(f,\\dot P)+\\beta S(g,\\dot P).\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Dituliskan\n\\[\nC=|\\alpha|+|\\beta|+1.\n\\]\nKarena $f$ dan $g$ terintegralkan Riemann, terdapat $\\delta_f,\\delta_g>0$ sehingga\n\\[\n\\lVert P\\rVert<\\delta_f\n\\Longrightarrow\n|S(f,\\dot P)-I_f|<\\frac{\\varepsilon}{2C},\n\\]\ndan\n\\[\n\\lVert P\\rVert<\\delta_g\n\\Longrightarrow\n|S(g,\\dot P)-I_g|<\\frac{\\varepsilon}{2C}.\n\\]\nDitetapkan $\\delta=\\min\\{\\delta_f,\\delta_g\\}$. Untuk setiap partisi berlabel $\\dot P$ dengan $\\lVert P\\rVert<\\delta$ diperoleh\n\\[\\begin{aligned}\n&\\left|S(\\alpha f+\\beta g,\\dot P)-(\\alpha I_f+\\beta I_g)\\right|\\\\\n&\\quad\\le |\\alpha|\\,|S(f,\\dot P)-I_f|+|\\beta|\\,|S(g,\\dot P)-I_g|\\\\\n&\\quad<\\frac{|\\alpha|+|\\beta|}{2C}\\varepsilon<\\varepsilon.\n\\end{aligned}\\]\nDengan demikian definisi integral Riemann terpenuhi dan nilai integralnya adalah $\\alpha I_f+\\beta I_g$.\nDengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan linearitas integral",
        "body": "Diketahui\n\\[\n\\int_0^1x^2\\,\\,d x=\\frac{1}{3},\n\\qquad\n\\int_0^1x\\,\\,d x=\\frac{1}{2}.\n\\]\nHitung\n\\[\n\\int_0^1(3x^2-2x)\\,\\,d x\n\\]\nmenggunakan linearitas.",
        "solution": "Berdasarkan Teorema Linearitas,\n\\[\n\\begin{aligned}\n\\int_0^1(3x^2-2x)\\,\\,d x\n&=3\\int_0^1x^2\\,\\,d x-2\\int_0^1x\\,\\,d x\\\\\n&=3\\left(\\frac{1}{3}\\right)-2\\left(\\frac{1}{2}\\right)\\\\\n&=1-1\\\\\n&=0.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1(3x^2-2x)\\,\\,d x=0}.\n\\]"
      },
      {
        "kind": "theorem",
        "title": "Monotonisitas integral",
        "body": "Jika $f,g$ terintegralkan Riemann pada $[a,b]$ dan $f(x)\\le g(x)$ untuk setiap $x\\in[a,b]$, maka\n\\[\n\\int_a^b f(x)\\,d x\\le\\int_a^b g(x)\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ dan $g$ terintegralkan Riemann pada $[a,b]$ serta memenuhi $f(x)\\le g(x)$ untuk setiap $x\\in[a,b]$.\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,d x\\le\\int_a^b g(x)\\,d x.\n\\]\nDidefinisikan\n\\[\nh=g-f.\n\\]\nBerdasarkan teorema yang telah dibuktikan, fungsi $h$ terintegralkan Riemann. Dari asumsi $f(x)\\le g(x)$ diperoleh\n\\[\nh(x)=g(x)-f(x)\\ge0\n\\]\nuntuk setiap $x\\in[a,b]$.\nUntuk setiap partisi berlabel $\\dot P$ berlaku\n\\[\nS(h,\\dot P)=\\sum_{i=1}^n h(t_i)\\Delta x_i\\ge0,\n\\]\nkarena setiap $h(t_i)\\ge0$ dan setiap $\\Delta x_i>0$. Ketika norma partisi menuju nol, jumlah Riemann tersebut menuju $\\int_a^b h(x)\\,d x$. Oleh karena itu,\n\\[\n\\int_a^b h(x)\\,d x\\ge0.\n\\]\nBerdasarkan linearitas,\n\\[\n\\int_a^b g(x)\\,d x-\\int_a^b f(x)\\,d x\\ge0.\n\\]\nDengan demikian,\n\\[\n\\int_a^b f(x)\\,d x\\le\\int_a^b g(x)\\,d x.\n\\]\nDengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan monotonisitas integral",
        "body": "Gunakan Teorema Monotonisitas Integral untuk membandingkan\n\\[\n\\int_0^1x^2\\,\\,d x\n\\quad\\text{dan}\\quad\n\\int_0^1x\\,\\,d x.\n\\]",
        "solution": "Untuk setiap $x\\in[0,1]$ berlaku\n\\[\n0\\le x^2\\le x.\n\\]\nFungsi $x^2$ dan $x$ kontinu, sehingga keduanya terintegralkan Riemann. Berdasarkan Teorema Monotonisitas integral,\n\\[\n\\int_0^1x^2\\,\\,d x\\le\\int_0^1x\\,\\,d x.\n\\]\nNilai kedua integral adalah\n\\[\n\\frac{1}{3}\\le\\frac{1}{2}.\n\\]\nDengan demikian, perbandingan integral konsisten dengan urutan titik demi titik $x^2\\le x$."
      },
      {
        "kind": "corollary",
        "title": "Kepositifan integral",
        "body": "Jika $f$ terintegralkan Riemann dan $f(x)\\ge0$ untuk semua $x\\in[a,b]$, maka\n\\[\n\\int_a^b f(x)\\,d x\\ge0.\n\\]",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan $f(x)\\ge0$ untuk setiap $x\\in[a,b]$.\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,d x\\ge0.\n\\]\nFungsi nol $z(x)=0$ terintegralkan Riemann pada $[a,b]$ dan memenuhi $z(x)\\le f(x)$ untuk setiap $x\\in[a,b]$. Berdasarkan teorema monotonisitas integral,\n\\[\n\\int_a^b z(x)\\,d x\\le\\int_a^b f(x)\\,d x.\n\\]\nKarena $\\int_a^b z(x)\\,d x=0$, diperoleh $0\\le\\int_a^b f(x)\\,d x$. Dengan demikian, akibat tersebut terbukti."
      },
      {
        "kind": "theorem",
        "title": "Nilai mutlak",
        "body": "Jika $f$ terintegralkan Riemann pada $[a,b]$, maka $|f|$ terintegralkan Riemann dan\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nDibuktikan bahwa fungsi $|f|$ terintegralkan Riemann dan\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]\nUntuk sebarang $x,y\\in[a,b]$, ketaksamaan balik segitiga memberikan\n\\[\n\\bigl||f(x)|-|f(y)|\\bigr|\\le|f(x)-f(y)|.\n\\]\nDengan demikian, osilasi $|f|$ pada setiap subinterval tidak lebih besar daripada osilasi $f$ pada subinterval yang sama. Diambil sebarang $\\varepsilon>0$. Karena $f$ terintegralkan Riemann, berdasarkan teorema yang telah dibuktikan terdapat partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nUntuk partisi yang sama berlaku\n\\[\nU(|f|,P)-L(|f|,P)\n\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan teorema yang telah dibuktikan, fungsi $|f|$ terintegralkan Riemann.\nSelanjutnya, untuk setiap $x\\in[a,b]$ berlaku\n\\[\n-|f(x)|\\le f(x)\\le |f(x)|.\n\\]\nBerdasarkan teorema yang telah dibuktikan, diperoleh\n\\[\n-\\int_a^b|f(x)|\\,d x\n\\le\n\\int_a^b f(x)\\,d x\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]\nPernyataan tersebut ekuivalen dengan\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]\nDengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan ketaksamaan nilai mutlak",
        "body": "Diberikan\n\\[\nf(x)=x-\\frac{1}{2},\\qquad x\\in[0,1].\n\\]\nVerifikasi ketaksamaan\n\\[\n\\left|\\int_0^1f(x)\\,\\,d x\\right|\n\\le\n\\int_0^1|f(x)|\\,\\,d x.\n\\]",
        "solution": "Diperoleh\n\\[\n\\int_0^1\\left(x-\\frac{1}{2}\\right)\\,d x\n=\\left[\\frac{x^2}{2}-\\frac{x}{2}\\right]_0^1\n=0.\n\\]\nSelanjutnya,\n\\[\n\\begin{aligned}\n\\int_0^1\\left|x-\\frac{1}{2}\\right|\\,d x\n&=2\\int_0^{1/2}\\left(\\frac{1}{2}-x\\right)\\,d x\\\\\n&=2\\left[\\frac{x}{2}-\\frac{x^2}{2}\\right]_0^{1/2}\\\\\n&=\\frac{1}{4}.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\left|\\int_0^1f\\right|=0\\le\\frac{1}{4}=\\int_0^1|f|,\n\\]\nsesuai Teorema Nilai mutlak."
      },
      {
        "kind": "paragraph",
        "text": "Secara geometris, pembentukan $|f|$ merefleksikan bagian negatif ke atas tanpa memperbesar osilasi dibandingkan perubahan nilai fungsi $f$."
      },
      {
        "kind": "corollary",
        "title": "Estimasi supremum",
        "body": "Jika $|f(x)|\\le M$ pada $[a,b]$, maka\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\\le M(b-a).\n\\]",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan memenuhi $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$.\nDibuktikan bahwa\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\\le M(b-a).\n\\]\nBerdasarkan teorema yang telah dibuktikan,\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]\nKarena $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$, berdasarkan teorema yang telah dibuktikan,\n\\[\n\\int_a^b|f(x)|\\,d x\n\\le\n\\int_a^bM\\,d x.\n\\]\nIntegral fungsi konstan memberikan\n\\[\n\\int_a^bM\\,d x=M(b-a).\n\\]\nOleh karena itu,\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\\le M(b-a).\n\\]\nDengan demikian, akibat tersebut terbukti."
      },
      {
        "kind": "theorem",
        "title": "Aditivitas interval",
        "body": "Jika $f$ terintegralkan Riemann pada $[a,b]$ dan $c\\in[a,b]$, maka $f$ terintegralkan pada $[a,c]$ dan $[c,b]$, serta\n\\[\n\\int_a^b f(x)\\,d x\n=\n\\int_a^c f(x)\\,d x+\n\\int_c^b f(x)\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan $c\\in[a,b]$.\nDibuktikan bahwa fungsi $f$ terintegralkan Riemann pada $[a,c]$ dan $[c,b]$, serta\n\\[\n\\int_a^b f(x)\\,d x\n=\n\\int_a^c f(x)\\,d x+\n\\int_c^b f(x)\\,d x.\n\\]\nDiambil sebarang $\\varepsilon>0$. Karena $f$ terintegralkan Riemann pada $[a,b]$, berdasarkan teorema yang telah dibuktikan terdapat partisi $P$ dari $[a,b]$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDibentuk partisi penghalus\n\\[\nR=P\\cup\\{c\\}.\n\\]\nBerdasarkan sifat partisi penghalus,\n\\[\nU(f,R)-L(f,R)\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nPartisi $R$ terpecah menjadi partisi $R_1$ pada $[a,c]$ dan partisi $R_2$ pada $[c,b]$. Karena selisih Darboux tidak negatif pada setiap bagian,\n\\[\nU(f,R_1)-L(f,R_1)\n\\le U(f,R)-L(f,R)<\\varepsilon,\n\\]\ndan\n\\[\nU(f,R_2)-L(f,R_2)\n\\le U(f,R)-L(f,R)<\\varepsilon.\n\\]\nBerdasarkan teorema yang telah dibuktikan, $f$ terintegralkan Riemann pada kedua subinterval tersebut.\nDituliskan\n\\[\nI=\\int_a^b f(x)\\,d x,\n\\qquad\nI_1=\\int_a^c f(x)\\,d x,\n\\qquad\nI_2=\\int_c^b f(x)\\,d x.\n\\]\nUntuk partisi berlabel pada $[a,b]$ yang memuat $c$, jumlah Riemann terurai menjadi\n\\[\nS(f,\\dot P)=S_1(f,P_1^*)+S_2(f,P_2^*).\n\\]\nKetika norma partisi menuju nol, ruas kiri menuju $I$, sedangkan dua suku pada ruas kanan masing-masing menuju $I_1$ dan $I_2$. Oleh karena itu,\n\\[\nI=I_1+I_2.\n\\]\nDengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Memecah integral pada titik tengah",
        "body": "Hitung\n\\[\n\\int_0^2x\\,\\,d x\n\\]\ndengan membagi interval pada $c=1$.",
        "solution": "Berdasarkan Teorema Aditivitas interval,\n\\[\n\\int_0^2x\\,\\,d x\n=\n\\int_0^1x\\,\\,d x+\n\\int_1^2x\\,\\,d x.\n\\]\nDiperoleh\n\\[\n\\int_0^1x\\,\\,d x=\\frac{1}{2}\n\\]\ndan\n\\[\n\\int_1^2x\\,\\,d x\n=\\left[\\frac{x^2}{2}\\right]_1^2\n=2-\\frac{1}{2}\n=\\frac{3}{2}.\n\\]\nOleh karena itu,\n\\[\n\\boxed{\\int_0^2x\\,\\,d x=\\frac{1}{2}+\\frac{3}{2}=2}.\n\\]"
      },
      {
        "kind": "theorem",
        "title": "Integrabilitas hasil kali",
        "body": "Jika $f,g$ terintegralkan Riemann pada $[a,b]$, maka $fg$ terintegralkan Riemann.",
        "proof": "Diketahui fungsi $f$ dan $g$ terintegralkan Riemann pada $[a,b]$.\nDibuktikan bahwa hasil kali $fg$ terintegralkan Riemann pada $[a,b]$.\nKarena fungsi terintegralkan Riemann terbatas, terdapat $M,N\\ge0$ sehingga\n\\[\n|f(x)|\\le M,\n\\qquad\n|g(x)|\\le N\n\\]\nuntuk setiap $x\\in[a,b]$.\nUntuk sebarang $x,y$ yang berada pada subinterval yang sama,\n\\[\\begin{aligned}\n|f(x)g(x)-f(y)g(y)|\\\\\n&=|f(x)(g(x)-g(y))+g(y)(f(x)-f(y))|\\\\\n&\\le M|g(x)-g(y)|+N|f(x)-f(y)|.\n\\end{aligned}\\]\nDengan demikian, jika $\\omega_i(h)$ menyatakan osilasi fungsi $h$ pada subinterval ke-$i$, maka\n\\[\n\\omega_i(fg)\\le M\\omega_i(g)+N\\omega_i(f).\n\\]\nAkibatnya, untuk setiap partisi $P$,\n\\[\nU(fg,P)-L(fg,P)\n\\le M\\bigl(U(g,P)-L(g,P)\\bigr)\n+N\\bigl(U(f,P)-L(f,P)\\bigr).\n\\]\nDiambil sebarang $\\varepsilon>0$. Berdasarkan teorema yang telah dibuktikan, dipilih partisi $P_f$ dan $P_g$ sehingga\n\\[\nU(f,P_f)-L(f,P_f)<\\frac{\\varepsilon}{2(N+1)},\n\\]\ndan\n\\[\nU(g,P_g)-L(g,P_g)<\\frac{\\varepsilon}{2(M+1)}.\n\\]\nDibentuk partisi penghalus bersama $P=P_f\\cup P_g$. Karena penghalusan tidak memperbesar selisih jumlah atas dan jumlah bawah, kedua ketaksamaan tetap berlaku untuk $P$. Dengan demikian,\n\\[\\begin{aligned}\nU(fg,P)-L(fg,P)\\\\\n&<M\\frac{\\varepsilon}{2(M+1)}\\\\\n+N\\frac{\\varepsilon}{2(N+1)}\\\\\n&<\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan teorema yang telah dibuktikan, $fg$ terintegralkan Riemann.\nDengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Hasil kali dua fungsi terintegralkan",
        "body": "Diberikan\n\\[\nf(x)=x,\n\\qquad\ng(x)=1-x,\n\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan fungsi $h(x)=f(x)g(x)$.",
        "solution": "Fungsi $f(x)=x$ dan $g(x)=1-x$ kontinu pada $[0,1]$, sehingga keduanya terintegralkan Riemann. Berdasarkan Teorema keterintegralan hasil kali, hasil kali\n\\[\nh(x)=f(x)g(x)=x(1-x)\n\\]\njuga terintegralkan Riemann. Dengan demikian,\n\\[\n\\boxed{x(1-x)\\text{ terintegralkan Riemann pada }[0,1].}\n\\]\nTeorema ini memberikan kesimpulan keterintegralan tanpa perlu menghitung jumlah Riemann dari $h$ secara langsung."
      },
      {
        "kind": "theorem",
        "title": "Komposisi dengan fungsi kontinu",
        "body": "Diberikan $f$ terintegralkan Riemann pada $[a,b]$, dan $\\varphi$ kontinu pada interval kompak yang memuat citra $f$. Fungsi $\\varphi\\circ f$ terintegralkan Riemann.",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan $\\varphi$ kontinu pada interval kompak yang memuat citra $f$.\nDibuktikan bahwa komposisi $\\varphi\\circ f$ terintegralkan Riemann pada $[a,b]$.\nKarena $f$ terbatas, citra $f$ termuat dalam suatu interval kompak $K_0$. Karena $\\varphi$ kontinu pada $K_0$, fungsi $\\varphi$ kontinu seragam dan terbatas pada $K_0$. Oleh karena itu, terdapat $K\\ge0$ sehingga\n\\[\n|\\varphi(t)|\\le K\n\\]\nuntuk setiap $t\\in K_0$.\nJika $K=0$, komposisi $\\varphi\\circ f$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $K>0$. Diambil sebarang $\\varepsilon>0$. Dari kontinuitas seragam $\\varphi$, terdapat $\\eta>0$ sehingga\n\\[\n|u-v|<\\eta\n\\quad\\Longrightarrow\\quad\n|\\varphi(u)-\\varphi(v)|<\\frac{\\varepsilon}{2(b-a)}.\n\\]\nKarena $f$ terintegralkan Riemann, berdasarkan teorema yang telah dibuktikan dipilih partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)\n=\\sum_i\\omega_i(f)\\Delta x_i\n<\\frac{\\eta\\varepsilon}{4K}.\n\\]\nIndeks subinterval dipisahkan menjadi\n\\[\nG=\\{i:\\omega_i(f)<\\eta\\},\n\\qquad\nB=\\{i:\\omega_i(f)\\ge\\eta\\}.\n\\]\nUntuk $i\\in G$, kontinuitas seragam memberikan\n\\[\n\\omega_i(\\varphi\\circ f)<\\frac{\\varepsilon}{2(b-a)}.\n\\]\nUntuk $i\\in B$, karena $|\\varphi|\\le K$, berlaku\n\\[\n\\omega_i(\\varphi\\circ f)\\le2K.\n\\]\nSelain itu,\n\\[\n\\eta\\sum_{i\\in B}\\Delta x_i\n\\le\\sum_{i\\in B}\\omega_i(f)\\Delta x_i\n<\\frac{\\eta\\varepsilon}{4K},\n\\]\nAkibatnya,\n\\[\n\\sum_{i\\in B}\\Delta x_i<\\frac{\\varepsilon}{4K}.\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(\\varphi\\circ f,P)-L(\\varphi\\circ f,P)\\\\\n&\\le \\sum_{i\\in G}\\frac{\\varepsilon}{2(b-a)}\\Delta x_i\\\\\n+\\sum_{i\\in B}2K\\Delta x_i\\\\\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\\\\\n&=\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan teorema yang telah dibuktikan, $\\varphi\\circ f$ terintegralkan Riemann.\nDengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan komposisi kontinu",
        "body": "Diberikan $f(x)=x$ pada $[-1,1]$ dan\n\\[\n\\varphi(t)=|t|.\n\\]\nGunakan Teorema Komposisi untuk menentukan keterintegralan $\\varphi\\circ f$.",
        "solution": "Fungsi $f(x)=x$ terintegralkan Riemann pada $[-1,1]$. Fungsi\n\\[\n\\varphi(t)=|t|\n\\]\nkontinu pada $[-1,1]$, yang memuat range $f$. Berdasarkan Teorema Komposisi dengan fungsi kontinu, fungsi\n\\[\n(\\varphi\\circ f)(x)=|x|\n\\]\nterintegralkan Riemann. Dengan demikian,\n\\[\n\\boxed{|x|\\text{ terintegralkan Riemann pada }[-1,1].}\n\\]"
      },
      {
        "kind": "theorem",
        "title": "Perubahan nilai pada sejumlah hingga titik",
        "body": "Diberikan fungsi $f:[a,b]\\to\\mathbb{R}$ yang terintegralkan Riemann dan fungsi $g:[a,b]\\to\\mathbb{R}$ yang memenuhi\n\\[\nf(x)=g(x)\n\\]\nuntuk setiap $x\\in[a,b]$, kecuali mungkin pada sejumlah hingga titik. Dalam kondisi tersebut, $g$ terintegralkan Riemann dan\n\\[\n\\int_a^b g(x)\\,\\,d x\n=\n\\int_a^b f(x)\\,\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan terdapat himpunan hingga\n\\[\nE=\\{c_1,c_2,\\ldots,c_m\\}\\subseteq[a,b]\n\\]\nsedemikian sehingga\n\\[\nf(x)=g(x)\n\\]\nuntuk setiap $x\\in[a,b]\\setminus E$.\n\nDibuktikan bahwa $g$ terintegralkan Riemann dan\n\\[\n\\int_a^b g(x)\\,\\,d x\n=\n\\int_a^b f(x)\\,\\,d x.\n\\]\nDidefinisikan\n\\[\nh=g-f.\n\\]\nFungsi $h$ bernilai nol pada $[a,b]\\setminus E$. Karena $E$ hingga dan setiap $h(c_j)$ merupakan bilangan real, terdapat $K\\ge0$ sehingga\n\\[\n|h(x)|\\le K\n\\]\nuntuk setiap $x\\in[a,b]$. Jika $K=0$, diperoleh $h\\equiv0$, sehingga $g=f$ dan pernyataan langsung berlaku. Selanjutnya diandaikan $K>0$.\n\nDiambil sebarang $\\varepsilon>0$. Untuk setiap $j=1,2,\\ldots,m$, dipilih interval terbuka $J_j$ yang memuat $c_j$ sedemikian sehingga\n\\[\n\\sum_{j=1}^{m}|J_j|\n<\n\\frac{\\varepsilon}{2K}.\n\\]\nDibentuk partisi $P$ yang memuat seluruh ujung interval $J_j$ dan seluruh titik $c_j$. Pada setiap subinterval partisi yang tidak beririsan dengan $E$, fungsi $h$ identik nol. Oleh karena itu, pada subinterval tersebut berlaku\n\\[\nm_i(h)=M_i(h)=0.\n\\]\nPada subinterval yang memuat titik dari $E$, osilasi $h$ paling besar $2K$. Dengan demikian,\n\\[\\begin{aligned}\nU(h,P)-L(h,P)\n&\\le\n2K\\sum_{j=1}^{m}|J_j|\\\\\n&<\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan Teorema, fungsi $h$ terintegralkan Riemann.\n\nSelain itu, setiap subinterval tak degenerat yang memuat suatu titik $c_j$ juga memuat titik lain di luar $E$. Pada titik tersebut $h=0$. Akibatnya,\n\\[\nL(h,P)\\le0\\le U(h,P).\n\\]\nDengan pilihan interval $J_j$ seperti di atas, diperoleh\n\\[\n|L(h,P)|\\le K\\sum_{j=1}^{m}|J_j|\n<\\frac{\\varepsilon}{2}\n\\]\ndan\n\\[\n|U(h,P)|\\le K\\sum_{j=1}^{m}|J_j|\n<\\frac{\\varepsilon}{2}.\n\\]\nKarena $\\varepsilon>0$ dipilih sebarang, integral Darboux bawah dan atas dari $h$ sama dengan nol. Berdasarkan Teorema,\n\\[\n\\int_a^b h(x)\\,\\,d x=0.\n\\]\nBerdasarkan Teorema Linearitas dan identitas $g=f+h$,\n\\[\n\\int_a^b g(x)\\,\\,d x\n=\n\\int_a^b f(x)\\,\\,d x\n+\n\\int_a^b h(x)\\,\\,d x\n=\n\\int_a^b f(x)\\,\\,d x.\n\\]\nDengan demikian, Teorema Perubahan nilai pada sejumlah hingga titik terbukti."
      },
      {
        "kind": "example",
        "title": "Mengubah nilai fungsi pada satu titik",
        "body": "Diberikan\n\\[\nf(x)=x,\n\\]\ndan\n\\[\ng(x)=\n\\begin{cases}\nx,&x\\ne\\frac{1}{2},\\\\\n10,&x=\\frac{1}{2},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan $\\int_0^1g(x)\\,\\,d x$.",
        "solution": "Fungsi $f(x)=x$ terintegralkan Riemann dan\n\\[\n\\int_0^1f(x)\\,\\,d x=\\frac{1}{2}.\n\\]\nFungsi $f$ dan $g$ memenuhi\n\\[\nf(x)=g(x)\n\\]\nuntuk setiap $x\\in[0,1]$, kecuali mungkin pada satu titik, yaitu $x=\\frac{1}{2}$. Berdasarkan Teorema Perubahan nilai pada sejumlah hingga titik, perubahan nilai pada sejumlah hingga titik tidak mengubah nilai integral. Oleh karena itu,\n\\[\n\\boxed{\\int_0^1g(x)\\,\\,d x=\\frac{1}{2}}.\n\\]"
      },
      {
        "kind": "corollary",
        "title": "Fungsi yang tidak nol hanya pada sejumlah hingga titik",
        "body": "Diberikan fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ yang memenuhi\n\\[\nf(x)=0\n\\]\nuntuk setiap $x\\in[a,b]$, kecuali mungkin pada sejumlah hingga titik. Fungsi $f$ terintegralkan Riemann dan\n\\[\n\\int_a^b f(x)\\,\\,d x=0.\n\\]",
        "proof": "Diketahui fungsi $f$ terbatas dan bernilai nol kecuali mungkin pada sejumlah hingga titik.\n\nDibuktikan bahwa $f$ terintegralkan Riemann dan\n\\[\n\\int_a^b f(x)\\,\\,d x=0.\n\\]\nDidefinisikan fungsi nol\n\\[\ng(x)=0\n\\]\nuntuk setiap $x\\in[a,b]$. Fungsi $g$ terintegralkan Riemann dan\n\\[\n\\int_a^b g(x)\\,\\,d x=0.\n\\]\nFungsi $f$ dan $g$ sama pada seluruh $[a,b]$, kecuali mungkin pada sejumlah hingga titik. Berdasarkan Teorema Perubahan nilai pada sejumlah hingga titik, fungsi $f$ terintegralkan Riemann dan\n\\[\n\\int_a^b f(x)\\,\\,d x\n=\n\\int_a^b g(x)\\,\\,d x\n=0.\n\\]\nDengan demikian, Akibat Fungsi yang tidak nol hanya pada sejumlah hingga titik terbukti."
      },
      {
        "kind": "corollary",
        "title": "Rumus integral fungsi tangga",
        "body": "Diberikan fungsi tangga $s:[a,b]\\to\\mathbb{R}$. Diandaikan terdapat partisi\n\\[\na=x_0<x_1<\\cdots<x_n=b\n\\]\nsedemikian sehingga\n\\[\ns(x)=c_i\n\\]\nuntuk setiap $x\\in(x_{i-1},x_i)$, dengan $i=1,2,\\ldots,n$. Nilai $s$ pada titik-titik partisi boleh berbeda dari $c_i$. Dalam kondisi tersebut,\n\\[\n\\int_a^b s(x)\\,\\,d x\n=\n\\sum_{i=1}^{n}c_i(x_i-x_{i-1}).\n\\]",
        "proof": "Diketahui fungsi tangga $s$ dengan nilai konstan $c_i$ pada setiap interval terbuka $(x_{i-1},x_i)$.\n\nDibuktikan bahwa\n\\[\n\\int_a^b s(x)\\,\\,d x\n=\n\\sum_{i=1}^{n}c_i(x_i-x_{i-1}).\n\\]\nDidefinisikan fungsi $g:[a,b]\\to\\mathbb{R}$ yang pada setiap interval $[x_{i-1},x_i)$ bernilai $c_i$, dan pada titik $b$ diberi nilai $c_n$. Fungsi $g$ hanya berbeda dari $s$ pada sejumlah hingga titik, yaitu titik-titik partisi. Berdasarkan Teorema Perubahan nilai pada sejumlah hingga titik,\n\\[\n\\int_a^b s(x)\\,\\,d x\n=\n\\int_a^b g(x)\\,\\,d x.\n\\]\nBerdasarkan Teorema Aditivitas interval,\n\\[\\begin{aligned}\n\\int_a^b g(x)\\,\\,d x\n&=\n\\sum_{i=1}^{n}\n\\int_{x_{i-1}}^{x_i} c_i\\,\\,d x\\\\\n&=\n\\sum_{i=1}^{n}c_i(x_i-x_{i-1}).\n\\end{aligned}\\]\nDengan demikian, Akibat Rumus integral fungsi tangga terbukti."
      },
      {
        "kind": "corollary",
        "title": "Fungsi kontinu sepotong-sepotong terintegralkan",
        "body": "Diberikan fungsi $f:[a,b]\\to\\mathbb{R}$. Jika terdapat partisi\n\\[\na=x_0<x_1<\\cdots<x_n=b\n\\]\nsedemikian sehingga $f$ kontinu pada setiap interval terbuka $(x_{i-1},x_i)$ dan mempunyai limit satu sisi hingga pada titik-titik pemisah, maka $f$ terintegralkan Riemann pada $[a,b]$.",
        "proof": "Diketahui fungsi $f$ kontinu sepotong-sepotong pada $[a,b]$ dalam arti yang dinyatakan pada akibat.\n\nDibuktikan bahwa $f$ terintegralkan Riemann pada $[a,b]$.\n\nPada setiap bagian $(x_{i-1},x_i)$, fungsi $f$ kontinu. Keberadaan limit satu sisi hingga pada titik-titik pemisah menunjukkan bahwa $f$ terbatas di sekitar setiap titik tersebut. Karena hanya terdapat sejumlah hingga bagian, fungsi $f$ terbatas pada seluruh $[a,b]$. Titik diskontinuitas hanya mungkin terjadi pada\n\\[\nx_1,x_2,\\ldots,x_{n-1},\n\\]\nyang merupakan himpunan hingga. Berdasarkan Proposisi Diskontinuitas berhingga, fungsi $f$ terintegralkan Riemann pada $[a,b]$.\nDengan demikian, Akibat Fungsi kontinu sepotong-sepotong terintegralkan terbukti."
      },
      {
        "kind": "theorem",
        "title": "Estimasi Darboux untuk fungsi dengan turunan terbatas",
        "body": "Diberikan fungsi $f:[a,b]\\to\\mathbb{R}$ yang terdiferensialkan dan memenuhi\n\\[\n|f'(x)|\\le M\n\\]\nuntuk setiap $x\\in(a,b)$, dengan $M\\ge0$. Untuk setiap partisi $P$ dari $[a,b]$ berlaku\n\\[\nU(f,P)-L(f,P)\n\\le\nM(b-a)\\lVert P\\rVert.\n\\]\nAkibatnya, $f$ terintegralkan Riemann pada $[a,b]$.",
        "proof": "Diketahui fungsi $f$ terdiferensialkan pada $[a,b]$ dan memenuhi $|f'(x)|\\le M$ untuk setiap $x\\in(a,b)$.\n\nDibuktikan bahwa untuk setiap partisi $P$ berlaku\n\\[\nU(f,P)-L(f,P)\n\\le\nM(b-a)\\lVert P\\rVert,\n\\]\nserta $f$ terintegralkan Riemann.\n\nDiambil sebarang subinterval\n\\[\nI_i=[x_{i-1},x_i]\n\\]\ndari partisi $P$. Untuk sebarang $x,y\\in I_i$, Teorema Nilai Rata-Rata diferensial memberikan suatu $\\xi$ di antara $x$ dan $y$ sehingga\n\\[\nf(x)-f(y)=f'(\\xi)(x-y).\n\\]\nOleh karena itu,\n\\[\n|f(x)-f(y)|\n\\le\nM|x-y|\n\\le\nM\\Delta x_i.\n\\]\nDengan mengambil supremum terhadap seluruh $x,y\\in I_i$, diperoleh\n\\[\nM_i-m_i\\le M\\Delta x_i.\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\n&=\n\\sum_{i=1}^{n}(M_i-m_i)\\Delta x_i\\\\\n&\\le\nM\\sum_{i=1}^{n}(\\Delta x_i)^2.\n\\end{aligned}\\]\nKarena $\\Delta x_i\\le\\lVert P\\rVert$, berlaku\n\\[\n(\\Delta x_i)^2\n\\le\n\\lVert P\\rVert\\Delta x_i.\n\\]\nAkibatnya,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\n&\\le\nM\\lVert P\\rVert\\sum_{i=1}^{n}\\Delta x_i\\\\\n&=\nM(b-a)\\lVert P\\rVert.\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Jika $M=0$, fungsi $f$ konstan dan terintegralkan. Jika $M>0$, dipilih partisi $P$ dengan\n\\[\n\\lVert P\\rVert\n<\n\\frac{\\varepsilon}{M(b-a)}.\n\\]\nDiperoleh\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Teorema, fungsi $f$ terintegralkan Riemann.\nDengan demikian, Teorema Estimasi Darboux untuk fungsi dengan turunan terbatas terbukti."
      },
      {
        "kind": "example",
        "title": "Estimasi Darboux untuk $f(x)=x^2$",
        "body": "Diberikan $f(x)=x^2$ pada $[0,1]$. Gunakan estimasi turunan terbatas untuk membuktikan keterintegralan Darboux.",
        "solution": "Diperoleh\n\\[\nf'(x)=2x,\n\\]\nsehingga\n\\[\n|f'(x)|\\le2\n\\]\nuntuk setiap $x\\in[0,1]$. Teorema Estimasi Darboux untuk fungsi dengan turunan terbatas memberikan\n\\[\nU(f,P)-L(f,P)\n\\le2(1-0)\\|P\\|\n=2\\|P\\|.\n\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih partisi $P$ dengan\n\\[\n\\|P\\|<\\frac{\\varepsilon}{2}.\n\\]\nDiperoleh\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Kriteria Darboux, $f(x)=x^2$ terintegralkan Darboux pada $[0,1]$."
      },
      {
        "kind": "theorem",
        "title": "Superaditivitas jumlah Darboux bawah",
        "body": "Diberikan fungsi terbatas $f,g:[a,b]\\to\\mathbb{R}$ dan partisi $P$ dari $[a,b]$. Berlaku\n\\[\nL(f,P)+L(g,P)\n\\le\nL(f+g,P).\n\\]",
        "proof": "Diketahui fungsi terbatas $f$ dan $g$ serta partisi\n\\[\nP=\\{a=x_0<x_1<\\cdots<x_n=b\\}.\n\\]\nDibuktikan bahwa\n\\[\nL(f,P)+L(g,P)\n\\le\nL(f+g,P).\n\\]\nPada subinterval\n\\[\nI_i=[x_{i-1},x_i],\n\\]\nditulis\n\\[\nm_i(f)=\\inf_{x\\in I_i}f(x),\n\\qquad\nm_i(g)=\\inf_{x\\in I_i}g(x).\n\\]\nUntuk setiap $x\\in I_i$ berlaku\n\\[\nf(x)\\ge m_i(f)\n\\]\ndan\n\\[\ng(x)\\ge m_i(g).\n\\]\nDengan menjumlahkan kedua ketaksamaan tersebut,\n\\[\nf(x)+g(x)\n\\ge\nm_i(f)+m_i(g).\n\\]\nKarena berlaku untuk setiap $x\\in I_i$,\n\\[\nm_i(f+g)\n\\ge\nm_i(f)+m_i(g).\n\\]\nDikalikan dengan $\\Delta x_i>0$ dan dijumlahkan untuk $i=1,2,\\ldots,n$, diperoleh\n\\[\\begin{aligned}\nL(f+g,P)\n&=\n\\sum_{i=1}^{n}m_i(f+g)\\Delta x_i\\\\\n&\\ge\n\\sum_{i=1}^{n}\\bigl(m_i(f)+m_i(g)\\bigr)\\Delta x_i\\\\\n&=\nL(f,P)+L(g,P).\n\\end{aligned}\\]\nDengan demikian, Teorema Superaditivitas jumlah Darboux bawah terbukti."
      },
      {
        "kind": "example",
        "title": "Ketaksamaan jumlah bawah dapat bersifat ketat",
        "body": "Diberikan $f(x)=x$ dan $g(x)=-x$ pada $[0,1]$ dengan partisi\n\\[\nP=\\{0,1\\}.\n\\]\nVerifikasi\n\\[\nL(f,P)+L(g,P)\\le L(f+g,P).\n\\]",
        "solution": "Pada $[0,1]$ diperoleh\n\\[\n\\inf f=0,\n\\qquad\n\\inf g=-1.\n\\]\nKarena panjang interval sama dengan $1$,\n\\[\nL(f,P)=0,\n\\qquad\nL(g,P)=-1.\n\\]\nSementara itu,\n\\[\nf(x)+g(x)=0\n\\]\nuntuk setiap $x$, sehingga\n\\[\nL(f+g,P)=0.\n\\]\nDengan demikian,\n\\[\nL(f,P)+L(g,P)=-1\\le0=L(f+g,P).\n\\]\nContoh ini juga menunjukkan bahwa ketaksamaan dapat bersifat ketat."
      },
      {
        "kind": "theorem",
        "title": "Subaditivitas jumlah Darboux atas",
        "body": "Diberikan fungsi terbatas $f,g:[a,b]\\to\\mathbb{R}$ dan partisi $P$ dari $[a,b]$. Berlaku\n\\[\nU(f+g,P)\n\\le\nU(f,P)+U(g,P).\n\\]",
        "proof": "Diketahui fungsi terbatas $f$ dan $g$ serta partisi\n\\[\nP=\\{a=x_0<x_1<\\cdots<x_n=b\\}.\n\\]\nDibuktikan bahwa\n\\[\nU(f+g,P)\n\\le\nU(f,P)+U(g,P).\n\\]\nPada subinterval\n\\[\nI_i=[x_{i-1},x_i],\n\\]\nditulis\n\\[\nM_i(f)=\\sup_{x\\in I_i}f(x),\n\\qquad\nM_i(g)=\\sup_{x\\in I_i}g(x).\n\\]\nUntuk setiap $x\\in I_i$ berlaku\n\\[\nf(x)\\le M_i(f)\n\\]\ndan\n\\[\ng(x)\\le M_i(g).\n\\]\nDengan menjumlahkan kedua ketaksamaan tersebut,\n\\[\nf(x)+g(x)\n\\le\nM_i(f)+M_i(g).\n\\]\nKarena berlaku untuk setiap $x\\in I_i$,\n\\[\nM_i(f+g)\n\\le\nM_i(f)+M_i(g).\n\\]\nDikalikan dengan $\\Delta x_i>0$ dan dijumlahkan untuk $i=1,2,\\ldots,n$, diperoleh\n\\[\\begin{aligned}\nU(f+g,P)\n&=\n\\sum_{i=1}^{n}M_i(f+g)\\Delta x_i\\\\\n&\\le\n\\sum_{i=1}^{n}\\bigl(M_i(f)+M_i(g)\\bigr)\\Delta x_i\\\\\n&=\nU(f,P)+U(g,P).\n\\end{aligned}\\]\nDengan demikian, Teorema Subaditivitas jumlah Darboux atas terbukti."
      },
      {
        "kind": "example",
        "title": "Ketaksamaan jumlah atas dapat bersifat ketat",
        "body": "Diberikan $f(x)=x$ dan $g(x)=-x$ pada $[0,1]$ dengan partisi $P=\\{0,1\\}$. Verifikasi\n\\[\nU(f+g,P)\\le U(f,P)+U(g,P).\n\\]",
        "solution": "Pada $[0,1]$ berlaku\n\\[\n\\sup f=1,\n\\qquad\n\\sup g=0.\n\\]\nDengan demikian,\n\\[\nU(f,P)=1,\n\\qquad\nU(g,P)=0.\n\\]\nKarena $f+g=0$ identik,\n\\[\nU(f+g,P)=0.\n\\]\nOleh karena itu,\n\\[\n0=U(f+g,P)\\le1=U(f,P)+U(g,P).\n\\]\nDengan demikian, Teorema Subaditivitas jumlah Darboux atas terverifikasi pada contoh ini."
      },
      {
        "kind": "corollary",
        "title": "Ketaksamaan integral Darboux bawah dan atas",
        "body": "Diberikan fungsi terbatas $f,g:[a,b]\\to\\mathbb{R}$. Berlaku\n\\[\n\\underline{\\int_a^b}f(x)\\,\\,d x\n+\n\\underline{\\int_a^b}g(x)\\,\\,d x\n\\le\n\\underline{\\int_a^b}(f+g)(x)\\,\\,d x,\n\\]\ndan\n\\[\n\\overline{\\int_a^b}(f+g)(x)\\,\\,d x\n\\le\n\\overline{\\int_a^b}f(x)\\,\\,d x\n+\n\\overline{\\int_a^b}g(x)\\,\\,d x.\n\\]",
        "proof": "Diketahui fungsi terbatas $f$ dan $g$ pada $[a,b]$.\n\nDibuktikan kedua ketaksamaan pada pernyataan akibat.\n\n(a) Integral Darboux bawah.\n\nDiambil sebarang partisi $P$ dan $Q$. Dibentuk partisi penghalus bersama\n\\[\nR=P\\cup Q.\n\\]\nBerdasarkan sifat partisi penghalus,\n\\[\nL(f,P)\\le L(f,R)\n\\]\ndan\n\\[\nL(g,Q)\\le L(g,R).\n\\]\nBerdasarkan Teorema Superaditivitas jumlah Darboux bawah,\n\\[\nL(f,R)+L(g,R)\n\\le\nL(f+g,R).\n\\]\nKarena\n\\[\nL(f+g,R)\n\\le\n\\underline{\\int_a^b}(f+g)(x)\\,\\,d x,\n\\]\ndiperoleh\n\\[\nL(f,P)+L(g,Q)\n\\le\n\\underline{\\int_a^b}(f+g)(x)\\,\\,d x.\n\\]\nDiambil supremum terlebih dahulu terhadap $P$ dan kemudian terhadap $Q$. Diperoleh\n\\[\n\\underline{\\int_a^b}f(x)\\,\\,d x\n+\n\\underline{\\int_a^b}g(x)\\,\\,d x\n\\le\n\\underline{\\int_a^b}(f+g)(x)\\,\\,d x.\n\\]\n\n(b) Integral Darboux atas.\n\nDiambil sebarang partisi $P$ dan $Q$, lalu dibentuk $R=P\\cup Q$. Berdasarkan sifat partisi penghalus,\n\\[\nU(f,R)\\le U(f,P)\n\\]\ndan\n\\[\nU(g,R)\\le U(g,Q).\n\\]\nBerdasarkan Teorema Subaditivitas jumlah Darboux atas,\n\\[\nU(f+g,R)\n\\le\nU(f,R)+U(g,R).\n\\]\nKarena\n\\[\n\\overline{\\int_a^b}(f+g)(x)\\,\\,d x\n\\le\nU(f+g,R),\n\\]\ndiperoleh\n\\[\n\\overline{\\int_a^b}(f+g)(x)\\,\\,d x\n\\le\nU(f,P)+U(g,Q).\n\\]\nDiambil infimum terlebih dahulu terhadap $P$ dan kemudian terhadap $Q$. Diperoleh\n\\[\n\\overline{\\int_a^b}(f+g)(x)\\,\\,d x\n\\le\n\\overline{\\int_a^b}f(x)\\,\\,d x\n+\n\\overline{\\int_a^b}g(x)\\,\\,d x.\n\\]\n\nDengan demikian, Akibat Ketaksamaan integral Darboux bawah dan atas terbukti."
      },
      {
        "kind": "theorem",
        "title": "Maksimum dan minimum dua fungsi terintegralkan",
        "body": "Jika $f$ dan $g$ terintegralkan Riemann pada $[a,b]$, maka fungsi\n\\[\n\\max\\{f,g\\}\n\\]\ndan\n\\[\n\\min\\{f,g\\}\n\\]\njuga terintegralkan Riemann pada $[a,b]$.",
        "proof": "Diketahui fungsi $f$ dan $g$ terintegralkan Riemann pada $[a,b]$.\n\nDibuktikan bahwa $\\max\\{f,g\\}$ dan $\\min\\{f,g\\}$ terintegralkan Riemann.\n\nBerdasarkan Teorema Linearitas, fungsi\n\\[\nf-g\n\\]\nterintegralkan Riemann. Berdasarkan Teorema Nilai mutlak, fungsi\n\\[\n|f-g|\n\\]\njuga terintegralkan Riemann. Digunakan identitas\n\\[\n\\max\\{f,g\\}\n=\n\\frac{f+g+|f-g|}{2}\n\\]\ndan\n\\[\n\\min\\{f,g\\}\n=\n\\frac{f+g-|f-g|}{2}.\n\\]\nRuas kanan kedua identitas tersebut merupakan kombinasi linear dari fungsi-fungsi yang terintegralkan Riemann. Berdasarkan Teorema Linearitas, kedua fungsi tersebut terintegralkan Riemann.\nDengan demikian, Teorema Maksimum dan minimum dua fungsi terintegralkan terbukti."
      },
      {
        "kind": "example",
        "title": "Maksimum dan minimum dua fungsi",
        "body": "Diberikan\n\\[\nf(x)=x,\n\\qquad\ng(x)=1-x,\n\\qquad x\\in[0,1].\n\\]\nTentukan apakah $\\max\\{f,g\\}$ dan $\\min\\{f,g\\}$ terintegralkan Riemann.",
        "solution": "Fungsi $f$ dan $g$ kontinu, sehingga keduanya terintegralkan Riemann. Berdasarkan Teorema Maksimum dan minimum dua fungsi terintegralkan, fungsi\n\\[\nh(x)=\\max\\{x,1-x\\}\n\\]\ndan\n\\[\nk(x)=\\min\\{x,1-x\\}\n\\]\nterintegralkan Riemann. Secara eksplisit,\n\\[\nh(x)=\n\\begin{cases}\n1-x,&0\\le x\\le\\frac{1}{2},\\\\\nx,&\\frac{1}{2}\\le x\\le1,\n\\end{cases}\n\\]\ndan\n\\[\nk(x)=\n\\begin{cases}\nx,&0\\le x\\le\\frac{1}{2},\\\\\n1-x,&\\frac{1}{2}\\le x\\le1.\n\\end{cases}\n\\]\nDengan demikian, kedua fungsi tersebut terintegralkan tanpa perlu menguji definisi Riemann secara langsung."
      },
      {
        "kind": "theorem",
        "title": "Resiprokal fungsi terintegralkan",
        "body": "Diberikan fungsi $f$ yang terintegralkan Riemann pada $[a,b]$. Jika terdapat $m>0$ sehingga\n\\[\n|f(x)|\\ge m\n\\]\nuntuk setiap $x\\in[a,b]$, maka fungsi\n\\[\n\\frac{1}{f}\n\\]\nterintegralkan Riemann pada $[a,b]$.",
        "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan terdapat $m>0$ dengan\n\\[\n|f(x)|\\ge m\n\\]\nuntuk setiap $x\\in[a,b]$.\n\nDibuktikan bahwa fungsi $\\frac{1}{f}$ terintegralkan Riemann pada $[a,b]$.\n\nKarena $f$ terintegralkan Riemann, fungsi $f$ terbatas. Terdapat $M\\ge m$ sehingga\n\\[\n|f(x)|\\le M\n\\]\nuntuk setiap $x\\in[a,b]$. Range fungsi $f$ termuat dalam himpunan kompak\n\\[\n[-M,-m]\\cup[m,M].\n\\]\nFungsi\n\\[\n\\varphi(t)=\\frac{1}{t}\n\\]\nkontinu pada himpunan tersebut. Berdasarkan Teorema Komposisi dengan fungsi kontinu, fungsi\n\\[\n\\varphi\\circ f\n=\n\\frac{1}{f}\n\\]\nterintegralkan Riemann pada $[a,b]$.\nDengan demikian, Teorema Resiprokal fungsi terintegralkan terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan teorema resiprokal",
        "body": "Diberikan\n\\[\nf(x)=x+2,\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa $1/f$ terintegralkan Riemann.",
        "solution": "Fungsi $f(x)=x+2$ kontinu, sehingga terintegralkan Riemann. Selain itu,\n\\[\n2\\le x+2\\le3\n\\]\nuntuk setiap $x\\in[0,1]$. Dengan demikian,\n\\[\n|f(x)|\\ge2.\n\\]\nSyarat Teorema Resiprokal fungsi terintegralkan terpenuhi dengan $m=2$. Oleh karena itu,\n\\[\n\\boxed{\\frac{1}{x+2}\\text{ terintegralkan Riemann pada }[0,1].}\n\\]"
      }
    ],
    "subsections": []
  },
  {
    "title": "Teorema Fundamental Kalkulus dan Konsekuensinya",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Bagian ini menghubungkan integral Riemann dengan turunan. Hasil-hasil sebelumnya menjelaskan kapan suatu fungsi terintegralkan dan sifat-sifat nilai integralnya. Teorema Fundamental Kalkulus menunjukkan bahwa, untuk fungsi yang cukup regular, proses integrasi dan diferensiasi saling membalik."
      }
    ],
    "subsections": [
      {
        "title": "Batas integral dan fungsi integral",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Batas integral",
            "body": "Diberikan fungsi $f$ terintegralkan Riemann pada $[a,b]$. Jika terdapat $m,M\\in\\mathbb{R}$ sehingga\n\\[\nm\\le f(x)\\le M\n\\]\nuntuk setiap $x\\in[a,b]$, berlaku\n\\[\nm(b-a)\n\\le\n\\int_a^b f(x)\\,d x\n\\le\nM(b-a).\n\\]",
            "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan memenuhi\n\\[\nm\\le f(x)\\le M\n\\]\nuntuk setiap $x\\in[a,b]$.\n\nDibuktikan bahwa\n\\[\nm(b-a)\n\\le\n\\int_a^b f(x)\\,d x\n\\le\nM(b-a).\n\\]\n\nFungsi konstan $x\\mapsto m$ dan $x\\mapsto M$ terintegralkan Riemann. Berdasarkan Teorema Monotonisitas Integral,\n\\[\n\\int_a^b m\\,d x\n\\le\n\\int_a^b f(x)\\,d x\n\\le\n\\int_a^b M\\,d x.\n\\]\nIntegral fungsi konstan memberikan\n\\[\n\\int_a^b m\\,d x=m(b-a)\n\\]\ndan\n\\[\n\\int_a^b M\\,d x=M(b-a).\n\\]\nDengan demikian,\n\\[\nm(b-a)\n\\le\n\\int_a^b f(x)\\,d x\n\\le\nM(b-a).\n\\]\nDengan demikian, Teorema Batas Integral terbukti."
          },
          {
            "kind": "example",
            "title": "Membatasi nilai integral tanpa menghitung tepat",
            "body": "Diberikan\n\\[\nf(x)=x+2,\n\\qquad x\\in[0,1].\n\\]\nGunakan Teorema Batas Integral untuk memperoleh batas nilai $\\int_0^1f(x)\\,\\,d x$.",
            "solution": "Untuk setiap $x\\in[0,1]$ berlaku\n\\[\n2\\le x+2\\le3.\n\\]\nDengan $m=2$, $M=3$, $a=0$, dan $b=1$, Teorema Batas integral memberikan\n\\[\n2(1-0)\n\\le\n\\int_0^1(x+2)\\,\\,d x\n\\le\n3(1-0).\n\\]\nDengan demikian,\n\\[\n\\boxed{2\\le\\int_0^1(x+2)\\,\\,d x\\le3}.\n\\]\nSebagai pemeriksaan, nilai tepatnya adalah $\\frac{5}{2}$, yang memang berada di antara $2$ dan $3$."
          },
          {
            "kind": "theorem",
            "title": "Kontinuitas fungsi integral",
            "body": "Diberikan fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan didefinisikan\n\\[\nF(x)=\\int_a^x f(t)\\,d t,\n\\qquad x\\in[a,b].\n\\]\nJika $|f(x)|\\le M$ pada $[a,b]$, untuk setiap $x,y\\in[a,b]$ berlaku\n\\[\n|F(x)-F(y)|\\le M|x-y|.\n\\]\nKhususnya, $F$ kontinu pada $[a,b]$.",
            "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$,\n\\[\nF(x)=\\int_a^x f(t)\\,d t,\n\\]\ndan $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$.\n\nDibuktikan bahwa\n\\[\n|F(x)-F(y)|\\le M|x-y|\n\\]\nuntuk setiap $x,y\\in[a,b]$, serta $F$ kontinu pada $[a,b]$.\n\nDiambil sebarang $x,y\\in[a,b]$. Tanpa mengurangi keumuman, diandaikan $x<y$. Berdasarkan Teorema Aditivitas Interval,\n\\[\nF(y)-F(x)=\\int_x^y f(t)\\,d t.\n\\]\nBerdasarkan Teorema Nilai Mutlak,\n\\[\n\\begin{aligned}\n|F(y)-F(x)|\n&=\\left|\\int_x^y f(t)\\,d t\\right|\\\\\n&\\le \\int_x^y |f(t)|\\,d t\\\\\n&\\le \\int_x^y M\\,d t\\\\\n&=M(y-x).\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n|F(x)-F(y)|\\le M|x-y|.\n\\]\n\nDiambil sebarang $c\\in[a,b]$ dan $\\varepsilon>0$. Jika $M=0$, fungsi $F$ konstan. Jika $M>0$, dipilih\n\\[\n\\delta=\\frac{\\varepsilon}{M}.\n\\]\nUntuk $|x-c|<\\delta$ diperoleh\n\\[\n|F(x)-F(c)|\\le M|x-c|<M\\delta=\\varepsilon.\n\\]\nOleh karena itu, $F$ kontinu di setiap $c\\in[a,b]$. Dengan demikian, Teorema Kontinuitas Fungsi Integral terbukti."
          },
          {
            "kind": "example",
            "title": "Fungsi integral dari $f(t)=t$",
            "body": "Diberikan\n\\[\nF(x)=\\int_0^x t\\,\\,d t,\n\\qquad x\\in[0,1].\n\\]\nGunakan Teorema Kontinuitas Fungsi Integral untuk menunjukkan bahwa $F$ kontinu.",
            "solution": "Pada $[0,1]$ berlaku\n\\[\n|t|\\le1.\n\\]\nDengan demikian, dapat dipilih $M=1$. Teorema Kontinuitas fungsi integral memberikan untuk setiap $x,y\\in[0,1]$,\n\\[\n|F(x)-F(y)|\\le|x-y|.\n\\]\nKetaksamaan tersebut menunjukkan bahwa $F$ bahkan Lipschitz dengan konstanta $1$, sehingga kontinu pada $[0,1]$. Secara eksplisit,\n\\[\nF(x)=\\frac{x^2}{2},\n\\]\nyang konsisten dengan kesimpulan tersebut."
          }
        ]
      },
      {
        "title": "Teorema Fundamental Kalkulus",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Teorema Fundamental Kalkulus I",
            "body": "Diberikan fungsi $f$ terintegralkan Riemann pada $[a,b]$ dan\n\\[\nF(x)=\\int_a^x f(t)\\,d t.\n\\]\nJika $f$ kontinu di $c\\in(a,b)$, fungsi $F$ terdiferensialkan di $c$ dan\n\\[\nF'(c)=f(c).\n\\]\nKhususnya, jika $f$ kontinu pada $[a,b]$, berlaku\n\\[\nF'(x)=f(x)\n\\]\nuntuk setiap $x\\in(a,b)$.",
            "proof": "Diketahui fungsi $f$ terintegralkan Riemann pada $[a,b]$,\n\\[\nF(x)=\\int_a^x f(t)\\,d t,\n\\]\ndan $f$ kontinu di $c\\in(a,b)$.\n\nDibuktikan bahwa $F$ terdiferensialkan di $c$ dan\n\\[\nF'(c)=f(c).\n\\]\n\nDiambil $h\\ne0$ cukup kecil sehingga $c+h\\in[a,b]$. Berdasarkan Teorema Aditivitas Interval,\n\\[\nF(c+h)-F(c)=\\int_c^{c+h}f(t)\\,d t.\n\\]\nOleh karena itu,\n\\[\n\\begin{aligned}\n\\frac{F(c+h)-F(c)}{h}-f(c)\n&=\n\\frac{1}{h}\\int_c^{c+h}f(t)\\,d t\n-\\frac{1}{h}\\int_c^{c+h}f(c)\\,d t\\\\\n&=\n\\frac{1}{h}\\int_c^{c+h}\\bigl(f(t)-f(c)\\bigr)\\,d t.\n\\end{aligned}\n\\]\n\nDiambil sebarang $\\varepsilon>0$. Karena $f$ kontinu di $c$, terdapat $\\delta>0$ sehingga\n\\[\n|t-c|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(t)-f(c)|<\\varepsilon.\n\\]\nUntuk $0<|h|<\\delta$, setiap $t$ yang terletak di antara $c$ dan $c+h$ memenuhi $|t-c|<\\delta$. Berdasarkan Teorema Nilai Mutlak,\n\\[\n\\begin{aligned}\n\\left|\n\\frac{F(c+h)-F(c)}{h}-f(c)\n\\right|\n&\\le\n\\frac{1}{|h|}\n\\int_{\\min\\{c,c+h\\}}^{\\max\\{c,c+h\\}}\n|f(t)-f(c)|\\,d t\\\\\n&<\n\\frac{1}{|h|}\\varepsilon |h|\\\\\n&=\\varepsilon.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\lim_{h\\to0}\n\\frac{F(c+h)-F(c)}{h}\n=f(c).\n\\]\nAkibatnya, $F'(c)=f(c)$. Dengan demikian, Teorema Fundamental Kalkulus I terbukti."
          },
          {
            "kind": "example",
            "title": "Diferensiasi fungsi yang didefinisikan oleh integral",
            "body": "Didefinisikan\n\\[\nF(x)=\\int_0^x t^2\\,\\,d t,\n\\qquad x\\in[0,1].\n\\]\nTentukan $F'(x)$ menggunakan Teorema Fundamental Kalkulus I.",
            "solution": "Fungsi\n\\[\nf(t)=t^2\n\\]\nkontinu pada $[0,1]$. Berdasarkan Teorema Teorema Fundamental Kalkulus I, jika\n\\[\nF(x)=\\int_0^xf(t)\\,\\,d t,\n\\]\nmaka\n\\[\nF'(x)=f(x).\n\\]\nOleh karena itu,\n\\[\n\\boxed{F'(x)=x^2}.\n\\]\nHasil ini diperoleh tanpa terlebih dahulu menghitung bentuk eksplisit $F(x)=\\frac{x^3}{3}$."
          },
          {
            "kind": "theorem",
            "title": "Teorema Fundamental Kalkulus II atau Newton–Leibniz",
            "body": "Diberikan fungsi $f$ kontinu pada $[a,b]$. Jika $A$ merupakan antiturunan $f$, yaitu\n\\[\nA'(x)=f(x)\n\\]\nuntuk setiap $x\\in(a,b)$, berlaku\n\\[\n\\int_a^b f(x)\\,d x=A(b)-A(a).\n\\]",
            "proof": "Diketahui fungsi $f$ kontinu pada $[a,b]$ dan fungsi $A$ memenuhi\n\\[\nA'(x)=f(x)\n\\]\nuntuk setiap $x\\in(a,b)$.\n\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,d x=A(b)-A(a).\n\\]\n\nDiambil sebarang partisi\n\\[\nP=\\{a=x_0<x_1<\\cdots<x_n=b\\}.\n\\]\nPada setiap subinterval $[x_{i-1},x_i]$, Teorema Nilai Rata-Rata diferensial memberikan suatu $\\xi_i\\in(x_{i-1},x_i)$ sehingga\n\\[\nA(x_i)-A(x_{i-1})\n=A'(\\xi_i)(x_i-x_{i-1}).\n\\]\nKarena $A'(\\xi_i)=f(\\xi_i)$,\n\\[\nA(x_i)-A(x_{i-1})\n=f(\\xi_i)\\Delta x_i.\n\\]\nDijumlahkan untuk $i=1,\\ldots,n$,\n\\[\n\\begin{aligned}\nA(b)-A(a)\n&=\\sum_{i=1}^n\\bigl(A(x_i)-A(x_{i-1})\\bigr)\\\\\n&=\\sum_{i=1}^n f(\\xi_i)\\Delta x_i\\\\\n&=S(f,\\dot P),\n\\end{aligned}\n\\]\ndengan $\\dot P$ partisi berlabel yang labelnya adalah $\\xi_i$.\n\nKarena $f$ kontinu pada $[a,b]$, fungsi $f$ terintegralkan Riemann. Ketika $\\lVert P\\rVert\\to0$, definisi integral Riemann memberikan\n\\[\nS(f,\\dot P)\\longrightarrow\\int_a^b f(x)\\,d x.\n\\]\nRuas kiri $A(b)-A(a)$ tidak bergantung pada partisi. Oleh karena itu,\n\\[\nA(b)-A(a)=\\int_a^b f(x)\\,d x.\n\\]\nDengan demikian, Teorema Fundamental Kalkulus II terbukti."
          },
          {
            "kind": "example",
            "title": "Menghitung integral dengan antiturunan",
            "body": "Hitung\n\\[\n\\int_0^1x^3\\,\\,d x\n\\]\nmenggunakan Teorema Fundamental Kalkulus II.",
            "solution": "Fungsi $f(x)=x^3$ kontinu pada $[0,1]$. Salah satu antiturunannya adalah\n\\[\nA(x)=\\frac{x^4}{4},\n\\]\nkarena $A'(x)=x^3$. Berdasarkan Teorema Teorema Fundamental Kalkulus II atau Newton–Leibniz,\n\\[\n\\begin{aligned}\n\\int_0^1x^3\\,\\,d x\n&=A(1)-A(0)\\\\\n&=\\frac{1}{4}-0\\\\\n&=\\frac{1}{4}.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1x^3\\,\\,d x=\\frac{1}{4}}.\n\\]"
          },
          {
            "kind": "corollary",
            "title": "Diferensiasi integral dengan batas berubah",
            "body": "Diberikan fungsi $f$ kontinu pada interval yang memuat range fungsi $\\alpha$ dan $\\beta$. Jika $\\alpha$ dan $\\beta$ terdiferensialkan, serta\n\\[\nH(x)=\\int_{\\alpha(x)}^{\\beta(x)}f(t)\\,d t,\n\\]\nberlaku\n\\[\nH'(x)\n=f(\\beta(x))\\beta'(x)\n-f(\\alpha(x))\\alpha'(x).\n\\]",
            "proof": "Diketahui\n\\[\nH(x)=\\int_{\\alpha(x)}^{\\beta(x)}f(t)\\,d t\n\\]\ndengan $f$ kontinu, sedangkan $\\alpha$ dan $\\beta$ terdiferensialkan.\n\nDibuktikan bahwa\n\\[\nH'(x)\n=f(\\beta(x))\\beta'(x)\n-f(\\alpha(x))\\alpha'(x).\n\\]\n\nDipilih titik tetap $c$ pada domain $f$ dan didefinisikan\n\\[\nF(u)=\\int_c^u f(t)\\,d t.\n\\]\nBerdasarkan Teorema Fundamental Kalkulus I,\n\\[\nF'(u)=f(u).\n\\]\nBerdasarkan aditivitas interval,\n\\[\nH(x)=F(\\beta(x))-F(\\alpha(x)).\n\\]\nAturan rantai memberikan\n\\[\n\\begin{aligned}\nH'(x)\n&=F'(\\beta(x))\\beta'(x)-F'(\\alpha(x))\\alpha'(x)\\\\\n&=f(\\beta(x))\\beta'(x)-f(\\alpha(x))\\alpha'(x).\n\\end{aligned}\n\\]\nDengan demikian, Akibat Diferensiasi Integral dengan Batas Berubah terbukti."
          }
        ]
      },
      {
        "title": "Teorema Nilai Rata-Rata untuk Integral",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Teorema Nilai Rata-Rata untuk Integral",
            "body": "Diberikan fungsi $f$ kontinu pada $[a,b]$ dengan $a<b$. Terdapat $c\\in[a,b]$ sehingga\n\\[\n\\int_a^b f(x)\\,d x=f(c)(b-a).\n\\]\nDengan kata lain, nilai rata-rata fungsi\n\\[\nf_{\\mathrm{rata}}\n=\\frac{1}{b-a}\\int_a^b f(x)\\,d x\n\\]\ndicapai oleh $f$ pada suatu titik $c\\in[a,b]$.",
            "proof": "Diketahui fungsi $f$ kontinu pada $[a,b]$ dengan $a<b$.\n\nDibuktikan bahwa terdapat $c\\in[a,b]$ sehingga\n\\[\n\\int_a^b f(x)\\,d x=f(c)(b-a).\n\\]\n\nKarena $f$ kontinu pada interval kompak $[a,b]$, Teorema Nilai Ekstrem memberikan titik $x_m,x_M\\in[a,b]$ sehingga\n\\[\nm=f(x_m)=\\min_{x\\in[a,b]}f(x)\n\\]\ndan\n\\[\nM=f(x_M)=\\max_{x\\in[a,b]}f(x).\n\\]\nBerdasarkan Teorema Batas Integral,\n\\[\nm(b-a)\n\\le\n\\int_a^b f(x)\\,d x\n\\le\nM(b-a).\n\\]\nKarena $b-a>0$,\n\\[\nm\n\\le\n\\frac{1}{b-a}\\int_a^b f(x)\\,d x\n\\le\nM.\n\\]\nFungsi $f$ kontinu dan mengambil nilai $m$ serta $M$. Berdasarkan Teorema Nilai Antara, terdapat $c\\in[a,b]$ sehingga\n\\[\nf(c)\n=\\frac{1}{b-a}\\int_a^b f(x)\\,d x.\n\\]\nDikalikan dengan $b-a$,\n\\[\n\\int_a^b f(x)\\,d x=f(c)(b-a).\n\\]\nDengan demikian, Teorema Nilai Rata-Rata untuk Integral terbukti."
          },
          {
            "kind": "example",
            "title": "Menentukan titik nilai rata-rata",
            "body": "Diberikan $f(x)=x^2$ pada $[0,1]$. Tentukan salah satu $c\\in[0,1]$ yang memenuhi\n\\[\n\\int_0^1x^2\\,\\,d x=f(c)(1-0).\n\\]",
            "solution": "Diketahui\n\\[\n\\int_0^1x^2\\,\\,d x=\\frac{1}{3}.\n\\]\nTeorema Teorema Nilai Rata-Rata untuk Integral menjamin adanya $c\\in[0,1]$ sehingga\n\\[\nf(c)=\\frac{1}{3}.\n\\]\nKarena $f(c)=c^2$, diperoleh\n\\[\nc^2=\\frac{1}{3}.\n\\]\nPada interval $[0,1]$, solusi yang sesuai adalah\n\\[\n\\boxed{c=\\frac{1}{\\sqrt{3}}}.\n\\]\nDengan demikian,\n\\[\n\\int_0^1x^2\\,\\,d x=f\\left(\\frac{1}{\\sqrt{3}}\\right).\n\\]"
          },
          {
            "kind": "theorem",
            "title": "Integral nol untuk fungsi nonnegatif kontinu",
            "body": "Diberikan fungsi $f$ kontinu pada $[a,b]$ dan $f(x)\\ge0$ untuk setiap $x\\in[a,b]$. Berlaku\n\\[\n\\int_a^b f(x)\\,d x=0\n\\quad\\Longleftrightarrow\\quad\nf(x)=0\\text{ untuk setiap }x\\in[a,b].\n\\]",
            "proof": "Diketahui fungsi $f$ kontinu pada $[a,b]$ dan $f(x)\\ge0$ untuk setiap $x\\in[a,b]$.\n\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,d x=0\n\\quad\\Longleftrightarrow\\quad\nf\\equiv0.\n\\]\n\nPembuktian dilakukan dalam dua arah.\n\n(1) Diandaikan\n\\[\n\\int_a^b f(x)\\,d x=0.\n\\]\nDibuktikan bahwa $f(x)=0$ untuk setiap $x\\in[a,b]$. Diandaikan terdapat $c\\in[a,b]$ dengan $f(c)>0$. Dipilih\n\\[\n\\varepsilon_0=\\frac{f(c)}{2}>0.\n\\]\nBerdasarkan kontinuitas $f$ di $c$, terdapat $\\delta>0$ sehingga\n\\[\n|x-c|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(x)-f(c)|<\\frac{f(c)}{2}.\n\\]\nAkibatnya,\n\\[\nf(x)>\\frac{f(c)}{2}\n\\]\npada suatu subinterval tak degenerat $J\\subseteq[a,b]$. Berdasarkan Teorema Batas Integral,\n\\[\n\\int_J f(x)\\,d x\n\\ge\n\\frac{f(c)}{2}|J|>0.\n\\]\nKarena $f\\ge0$ pada seluruh $[a,b]$, aditivitas interval memberikan\n\\[\n\\int_a^b f(x)\\,d x>0,\n\\]\nbertentangan dengan asumsi. Oleh karena itu, tidak terdapat $c$ dengan $f(c)>0$. Bersama dengan $f\\ge0$, diperoleh $f\\equiv0$.\n\n(2) Diandaikan $f(x)=0$ untuk setiap $x\\in[a,b]$. Integral fungsi nol adalah\n\\[\n\\int_a^b f(x)\\,d x=0.\n\\]\n\nBerdasarkan kedua arah tersebut, ekuivalensi terbukti. Dengan demikian, Teorema Integral Nol untuk Fungsi Nonnegatif Kontinu terbukti."
          },
          {
            "kind": "example",
            "title": "Konsekuensi integral nol",
            "body": "Misalkan $f:[0,1]\\to\\mathbb{R}$ kontinu, $f(x)\\ge0$ untuk setiap $x$, dan\n\\[\n\\int_0^1f(x)\\,\\,d x=0.\n\\]\nTentukan $f(\\frac{1}{3})$.",
            "solution": "Semua syarat Teorema Integral nol untuk fungsi nonnegatif kontinu terpenuhi: $f$ kontinu, nonnegatif, dan integralnya sama dengan nol. Berdasarkan teorema tersebut,\n\\[\nf(x)=0\n\\]\nuntuk setiap $x\\in[0,1]$. Khususnya,\n\\[\n\\boxed{f\\left(\\frac{1}{3}\\right)=0}.\n\\]\nKesimpulan ini tidak memerlukan bentuk eksplisit fungsi $f$."
          }
        ]
      },
      {
        "title": "Substitusi dan integrasi parsial",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Substitusi pada integral Riemann",
            "body": "Diberikan fungsi $\\varphi:[\\alpha,\\beta]\\to\\mathbb{R}$ yang mempunyai turunan kontinu dan fungsi $f$ kontinu pada suatu interval yang memuat $\\varphi([\\alpha,\\beta])$. Berlaku\n\\[\n\\int_{\\alpha}^{\\beta}\nf(\\varphi(x))\\varphi'(x)\\,d x\n=\n\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)}f(u)\\,d u.\n\\]",
            "proof": "Diketahui $\\varphi$ mempunyai turunan kontinu pada $[\\alpha,\\beta]$ dan $f$ kontinu pada interval yang memuat $\\varphi([\\alpha,\\beta])$.\n\nDibuktikan bahwa\n\\[\n\\int_{\\alpha}^{\\beta}\nf(\\varphi(x))\\varphi'(x)\\,d x\n=\n\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)}f(u)\\,d u.\n\\]\n\nDipilih titik tetap $u_0$ pada domain $f$ dan didefinisikan\n\\[\nF(u)=\\int_{u_0}^{u}f(t)\\,d t.\n\\]\nBerdasarkan Teorema Fundamental Kalkulus I,\n\\[\nF'(u)=f(u).\n\\]\nAturan rantai memberikan\n\\[\n\\frac{d}{d x}F(\\varphi(x))\n=F'(\\varphi(x))\\varphi'(x)\n=f(\\varphi(x))\\varphi'(x).\n\\]\nBerdasarkan Teorema Fundamental Kalkulus II,\n\\[\n\\begin{aligned}\n\\int_{\\alpha}^{\\beta}f(\\varphi(x))\\varphi'(x)\\,d x\n&=F(\\varphi(\\beta))-F(\\varphi(\\alpha))\\\\\n&=\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)}f(u)\\,d u.\n\\end{aligned}\n\\]\nDengan demikian, Teorema Substitusi pada Integral Riemann terbukti."
          },
          {
            "kind": "example",
            "title": "Substitusi $u=x^2$",
            "body": "Hitung\n\\[\n\\int_0^1 2x\\cos(x^2)\\,\\,d x\n\\]\nmenggunakan Teorema Substitusi.",
            "solution": "Dipilih\n\\[\n\\varphi(x)=x^2,\n\\qquad\n\\varphi'(x)=2x,\n\\]\ndan $f(u)=\\cos u$. Batas baru adalah\n\\[\n\\varphi(0)=0,\n\\qquad\n\\varphi(1)=1.\n\\]\nBerdasarkan Teorema Substitusi pada integral Riemann,\n\\[\n\\begin{aligned}\n\\int_0^1 2x\\cos(x^2)\\,\\,d x\n&=\\int_0^1\\cos u\\,\\,d u\\\\\n&=[\\sin u]_0^1\\\\\n&=\\sin1.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1 2x\\cos(x^2)\\,\\,d x=\\sin1}.\n\\]"
          },
          {
            "kind": "theorem",
            "title": "Integrasi parsial",
            "body": "Diberikan fungsi $u$ dan $v$ yang mempunyai turunan kontinu pada $[a,b]$. Berlaku\n\\[\n\\int_a^b u(x)v'(x)\\,d x\n=\n\\bigl[u(x)v(x)\\bigr]_a^b\n-\n\\int_a^b u'(x)v(x)\\,d x.\n\\]",
            "proof": "Diketahui fungsi $u$ dan $v$ mempunyai turunan kontinu pada $[a,b]$.\n\nDibuktikan bahwa\n\\[\n\\int_a^b u(x)v'(x)\\,d x\n=\n\\bigl[u(x)v(x)\\bigr]_a^b\n-\n\\int_a^b u'(x)v(x)\\,d x.\n\\]\n\nAturan hasil kali memberikan\n\\[\n\\frac{d}{d x}\\bigl(u(x)v(x)\\bigr)\n=u'(x)v(x)+u(x)v'(x).\n\\]\nBerdasarkan Teorema Fundamental Kalkulus II,\n\\[\n\\int_a^b\n\\bigl(u'(x)v(x)+u(x)v'(x)\\bigr)\\,d x\n=\n\\bigl[u(x)v(x)\\bigr]_a^b.\n\\]\nBerdasarkan Teorema Linearitas,\n\\[\n\\int_a^b u'(x)v(x)\\,d x\n+\n\\int_a^b u(x)v'(x)\\,d x\n=\n\\bigl[u(x)v(x)\\bigr]_a^b.\n\\]\nDipindahkan suku pertama pada ruas kiri ke ruas kanan,\n\\[\n\\int_a^b u(x)v'(x)\\,d x\n=\n\\bigl[u(x)v(x)\\bigr]_a^b\n-\n\\int_a^b u'(x)v(x)\\,d x.\n\\]\nDengan demikian, Teorema Integrasi Parsial terbukti."
          },
          {
            "kind": "example",
            "title": "Integrasi parsial pada $xe^x$",
            "body": "Hitung\n\\[\n\\int_0^1xe^x\\,\\,d x\n\\]\nmenggunakan integrasi parsial.",
            "solution": "Dipilih\n\\[\nu(x)=x,\n\\qquad\nv'(x)=e^x.\n\\]\nDiperoleh\n\\[\nu'(x)=1,\n\\qquad\nv(x)=e^x.\n\\]\nBerdasarkan Teorema Integrasi parsial,\n\\[\n\\begin{aligned}\n\\int_0^1xe^x\\,\\,d x\n&=[xe^x]_0^1-\\int_0^1e^x\\,\\,d x\\\\\n&=e-(e-1)\\\\\n&=1.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1xe^x\\,\\,d x=1}.\n\\]"
          }
        ]
      }
    ]
  },
  {
    "title": "Osilasi dan Kriteria Lebesgue",
    "blocks": [
      {
        "kind": "definition",
        "title": "Osilasi pada interval",
        "body": "Untuk interval $I\\subseteq[a,b]$, osilasi $f$ pada $I$ didefinisikan sebagai\n\\[\n\\operatorname{osc}(f,I)=\\sup_{x\\in I}f(x)-\\inf_{x\\in I}f(x).\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Misalkan fungsi $f(x)=x^2$ pada interval $I=[1,2]$. Tentukan osilasi $f$ pada $I$.",
        "solution": "Diketahui fungsi $f(x)=x^2$ pada interval $I=[1,2]$.\nDitentukan nilai $\\operatorname{osc}(f,I)$.\nUntuk $x\\in[1,2]$, fungsi $f(x)=x^2$ naik. Nilai terkecil dicapai di $x=1$ dan nilai terbesar dicapai di $x=2$. Diperoleh\n\\[\n\\inf_{x\\in I}f(x)=f(1)=1\n\\]\ndan\n\\[\n\\sup_{x\\in I}f(x)=f(2)=4.\n\\]\nBerdasarkan definisi osilasi pada interval,\n\\[\n\\operatorname{osc}(f,I)\n=\\sup_{x\\in I}f(x)-\\inf_{x\\in I}f(x)\n=4-1\n=3.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\operatorname{osc}(f,[1,2])=3}.\n\\]\nNilai osilasi telah ditentukan."
      },
      {
        "kind": "paragraph",
        "text": "Jika $I_i=[x_{i-1},x_i]$, maka\n\\[\n\\operatorname{osc}(f,I_i)=M_i-m_i,\n\\]\nDengan demikian,\n\\[\nU(f,P)-L(f,P)\n=\n\\sum_{i=1}^{n}\\operatorname{osc}(f,I_i)\\Delta x_i.\n\\]\nDengan demikian, kriteria Darboux dapat dipahami sebagai kemampuan membuat total osilasi tertimbang sekecil yang diinginkan."
      },
      {
        "kind": "definition",
        "title": "Osilasi di titik",
        "body": "Untuk $c\\in[a,b]$, osilasi $f$ di titik $c$ didefinisikan oleh\n\\[\n\\omega_f(c)=\n\\inf\\{\\operatorname{osc}(f,I): I\\text{ interval relatif di }[a,b]\\text{ yang memuat }c\\}.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Misalkan fungsi $f(x)=x$ dan titik $c=1$. Tentukan osilasi fungsi di titik $c$, yaitu $\\omega_f(1)$.",
        "solution": "Diketahui fungsi $f(x)=x$ dan titik $c=1$.\nDitentukan nilai $\\omega_f(1)$.\nDiambil $r>0$ dan interval\n\\[\nI_r=[1-r,1+r].\n\\]\nKarena $f(x)=x$ naik, infimum dan supremum pada $I_r$ berturut-turut adalah $1-r$ dan $1+r$. Oleh karena itu,\n\\[\n\\operatorname{osc}(f,I_r)=(1+r)-(1-r)=2r.\n\\]\nUntuk setiap $\\varepsilon>0$ dipilih\n\\[\n0<r<\\frac{\\varepsilon}{2}.\n\\]\nDiperoleh\n\\[\n\\operatorname{osc}(f,I_r)=2r<\\varepsilon.\n\\]\nOsilasi selalu tidak negatif. Selain itu, terdapat interval yang memuat $1$ dengan osilasi sekecil yang diinginkan. Berdasarkan definisi infimum,\n\\[\n\\omega_f(1)=0.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\omega_f(1)=0}.\n\\]\nNilai osilasi di titik tersebut telah ditentukan."
      },
      {
        "kind": "proposition",
        "title": "Kontinuitas dan osilasi titik",
        "body": "Fungsi $f$ kontinu di $c$ jika dan hanya jika\n\\[\n\\omega_f(c)=0.\n\\]",
        "proof": "Diketahui fungsi $f$ terbatas pada $[a,b]$ dan $c\\in[a,b]$.\nDibuktikan bahwa fungsi $f$ kontinu di $c$ jika dan hanya jika\n\\[\n\\omega_f(c)=0.\n\\]\nPembuktian dilakukan dalam dua arah.\n\\,\n($\\Rightarrow$)\nDiketahui fungsi $f$ kontinu di $c$.\nDibuktikan bahwa $\\omega_f(c)=0$.\nDiambil sebarang $\\varepsilon>0$. Berdasarkan kontinuitas $f$ di $c$, terdapat persekitaran interval $I$ dari $c$ sehingga untuk setiap $x\\in I$ berlaku\n\\[\n|f(x)-f(c)|<\\frac{\\varepsilon}{2}.\n\\]\nUntuk sebarang $x,y\\in I$, berdasarkan ketaksamaan segitiga,\n\\[\\begin{aligned}\n|f(x)-f(y)|\\\\\n&\\le |f(x)-f(c)|+|f(y)-f(c)|\\\\\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\\\\\n&=\\varepsilon.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\operatorname{osc}(f,I)\\le\\varepsilon.\n\\]\nKarena $\\omega_f(c)$ merupakan infimum osilasi pada seluruh interval yang memuat $c$, diperoleh\n\\[\n0\\le\\omega_f(c)\\le\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh $\\omega_f(c)=0$.\n\\,\n($\\Leftarrow$)\nDiketahui $\\omega_f(c)=0$.\nDibuktikan bahwa fungsi $f$ kontinu di $c$.\nDiambil sebarang $\\varepsilon>0$. Karena $\\omega_f(c)=0$ merupakan infimum osilasi pada interval yang memuat $c$, terdapat interval $I$ yang memuat $c$ dengan\n\\[\n\\operatorname{osc}(f,I)<\\varepsilon.\n\\]\nUntuk setiap $x\\in I$, karena $x$ dan $c$ berada pada interval yang sama,\n\\[\n|f(x)-f(c)|\\le\\operatorname{osc}(f,I)<\\varepsilon.\n\\]\nPernyataan ini merupakan definisi kontinuitas $f$ di $c$.\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh ekuivalensi yang dinyatakan. Dengan demikian, proposisi tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan proposisi",
        "body": "Misalkan fungsi $f(x)=x^2$ dan titik $c=1$. Buktikan menggunakan osilasi bahwa $f$ kontinu di $c=1$.",
        "solution": "Diketahui fungsi $f(x)=x^2$ dan titik $c=1$.\nDibuktikan bahwa $f$ kontinu di $c=1$ dengan menggunakan proposisi yang telah dibuktikan.\nDiambil $0<r<1$ dan interval\n\\[\nI_r=[1-r,1+r].\n\\]\nKarena $x^2$ naik pada $I_r\\subset(0,2)$, diperoleh\n\\[\n\\inf_{x\\in I_r}f(x)=(1-r)^2\n\\]\ndan\n\\[\n\\sup_{x\\in I_r}f(x)=(1+r)^2.\n\\]\nOsilasinya adalah\n\\[\\begin{aligned}\n\\operatorname{osc}(f,I_r)\\\\\n&=(1+r)^2-(1-r)^2\\\\\n&=4r.\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih\n\\[\n0<r<\\min\\left\\{1,\\frac{\\varepsilon}{4}\\right\\}.\n\\]\nDiperoleh\n\\[\n\\operatorname{osc}(f,I_r)=4r<\\varepsilon.\n\\]\nKarena osilasi pada persekitaran $1$ dapat dibuat sekecil yang diinginkan dan selalu tidak negatif, diperoleh\n\\[\n\\omega_f(1)=0.\n\\]\nBerdasarkan proposisi yang telah dibuktikan, kesamaan $\\omega_f(1)=0$ ekuivalen dengan kontinuitas $f$ di $1$.\nDengan demikian, $f(x)=x^2$ kontinu di $c=1$, sehingga contoh penerapan proposisi yang telah dibuktikan terbukti."
      },
      {
        "kind": "paragraph",
        "text": "Secara geometris, ketika interval yang memuat $c$ diperkecil, osilasi fungsi dapat dikendalikan menuju nol tepat ketika fungsi kontinu di $c$."
      },
      {
        "kind": "definition",
        "title": "Himpunan berukuran Lebesgue nol",
        "body": "Himpunan $E\\subseteq\\mathbb{R}$ disebut mempunyai ukuran Lebesgue nol apabila untuk setiap $\\varepsilon>0$ terdapat interval terbuka $I_1,I_2,\\ldots$ yang menutupi $E$ dan memenuhi\n\\[\n\\sum_{k=1}^{\\infty}|I_k|<\\varepsilon.\n\\]"
      },
      {
        "kind": "example",
        "title": "Himpunan hingga mempunyai ukuran Lebesgue nol",
        "body": "Diberikan himpunan\n\\[\nE=\\left\\{\\frac{1}{4},\\frac{1}{2},\\frac{3}{4}\\right\\}.\n\\]\nDibuktikan bahwa $E$ mempunyai ukuran Lebesgue nol.",
        "solution": "Diketahui\n\\[\nE=\\left\\{\\frac{1}{4},\\frac{1}{2},\\frac{3}{4}\\right\\}.\n\\]\nDibuktikan bahwa untuk setiap $\\varepsilon>0$, himpunan $E$ dapat ditutupi oleh interval-interval terbuka yang jumlah panjangnya kurang dari $\\varepsilon$.\n\nDiambil sebarang $\\varepsilon>0$. Untuk setiap titik $c\\in E$, dipilih interval\n\\[\nJ_c=\\left(c-\\frac{\\varepsilon}{12},c+\\frac{\\varepsilon}{12}\\right).\n\\]\nSetiap interval mempunyai panjang $\\frac{\\varepsilon}{6}$. Ketiga interval tersebut menutupi $E$, dan jumlah panjangnya\n\\[\n3\\left(\\frac{\\varepsilon}{6}\\right)=\\frac{\\varepsilon}{2}<\\varepsilon.\n\\]\nDengan demikian, $E$ mempunyai ukuran Lebesgue nol."
      },
      {
        "kind": "theorem",
        "title": "Kriteria Lebesgue untuk integrabilitas Riemann",
        "body": "Diberikan $f:[a,b]\\to\\mathbb{R}$ terbatas. Fungsi $f$ terintegralkan Riemann jika dan hanya jika himpunan titik diskontinuitas $D_f$ mempunyai ukuran Lebesgue nol.",
        "proof": "Diketahui fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ dan himpunan titik diskontinuitasnya $D_f$.\nDibuktikan bahwa $f$ terintegralkan Riemann jika dan hanya jika $D_f$ mempunyai ukuran Lebesgue nol.\n\n(1) Arah ke kanan. Diandaikan $f$ terintegralkan Riemann. Untuk setiap $m\\in\\mathbb{N}$ didefinisikan\n\\[\nE_m=\\left\\{x\\in[a,b]:\\omega_f(x)\\ge\\frac{1}{m}\\right\\}.\n\\]\nKarena $f$ diskontinu di $x$ tepat ketika $\\omega_f(x)>0$,\n\\[\nD_f=\\bigcup_{m=1}^{\\infty}E_m.\n\\]\nDiambil sebarang $\\varepsilon>0$. Berdasarkan Kriteria Darboux, dipilih partisi $P$ dengan\n\\[\nU(f,P)-L(f,P)<\\frac{\\varepsilon}{m}.\n\\]\nJika $\\omega_i=\\operatorname{osc}(f,[x_{i-1},x_i])$, setiap titik $E_m$ berada pada subinterval dengan $\\omega_i\\ge\\frac{1}{m}$. Oleh karena itu,\n\\[\n\\frac{1}{m}\\sum_{\\omega_i\\ge\\frac{1}{m}}\\Delta x_i\n\\le\\sum_{i=1}^{n}\\omega_i\\Delta x_i\n=U(f,P)-L(f,P)\n<\\frac{\\varepsilon}{m}.\n\\]\nAkibatnya, jumlah panjang subinterval yang menutupi $E_m$ kurang dari $\\varepsilon$. Dengan demikian, setiap $E_m$ berukuran Lebesgue nol. Gabungan terhitung himpunan berukuran nol tetap berukuran nol, sehingga $D_f$ berukuran Lebesgue nol.\n\n(2) Arah ke kiri. Diandaikan $D_f$ berukuran Lebesgue nol. Karena $f$ terbatas, terdapat $M\\ge0$ sehingga $|f(x)|\\le M$. Kasus $M=0$ langsung terpenuhi. Untuk $M>0$, diambil sebarang $\\varepsilon>0$ dan ditetapkan\n\\[\n\\eta=\\frac{\\varepsilon}{2(b-a)}.\n\\]\nHimpunan $E_\\eta=\\{x:\\omega_f(x)\\ge\\eta\\}$ tertutup, kompak, dan termuat dalam $D_f$. Pilih penutup berhingga oleh interval terbuka dengan jumlah panjang kurang dari $\\frac{\\varepsilon}{4M}$. Pada komplemennya, setiap titik mempunyai persekitaran dengan osilasi kurang dari $\\eta$. Dengan kekompakan, dapat dibentuk partisi $P$ yang setiap subintervalnya berada di dalam bagian penutup atau di dalam persekitaran berosilasi kurang dari $\\eta$. Kontribusi bagian penutup terhadap $U(f,P)-L(f,P)$ kurang dari\n\\[\n2M\\frac{\\varepsilon}{4M}=\\frac{\\varepsilon}{2},\n\\]\nsedangkan kontribusi bagian lainnya kurang dari\n\\[\n\\eta(b-a)=\\frac{\\varepsilon}{2}.\n\\]\nDengan demikian, $U(f,P)-L(f,P)<\\varepsilon$. Berdasarkan Kriteria Darboux, $f$ terintegralkan Riemann. Kedua arah telah dibuktikan. Dengan demikian, teorema tersebut terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan Kriteria Lebesgue pada perubahan satu titik",
        "body": "Didefinisikan\n\\[\ng(x)=\n\\begin{cases}\nx,&x\\ne\\frac{1}{2},\\\\\n10,&x=\\frac{1}{2},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nGunakan Kriteria Lebesgue untuk menentukan keterintegralan Riemann $g$.",
        "solution": "Fungsi $g$ terbatas pada $[0,1]$. Untuk setiap $x\\ne\\frac{1}{2}$, terdapat persekitaran kecil yang tidak memuat $\\frac{1}{2}$, dan pada persekitaran tersebut $g(x)=x$, sehingga $g$ kontinu. Pada $x=\\frac{1}{2}$,\n\\[\n\\lim_{x\\to1/2}g(x)=\\frac{1}{2}\\ne10=g\\left(\\frac{1}{2}\\right),\n\\]\nsehingga $g$ diskontinu tepat di $\\frac{1}{2}$. Dengan demikian,\n\\[\nD_g=\\left\\{\\frac{1}{2}\\right\\}.\n\\]\nHimpunan satu titik mempunyai ukuran Lebesgue nol. Berdasarkan Teorema Kriteria Lebesgue untuk keterintegralan Riemann,\n\\[\n\\boxed{g\\text{ terintegralkan Riemann pada }[0,1].}\n\\]"
      },
      {
        "kind": "note",
        "title": "",
        "body": "Kriteria Lebesgue menghubungkan keterintegralan Riemann dengan ukuran himpunan diskontinuitas dan menjadi jembatan menuju teori ukuran Lebesgue."
      },
      {
        "kind": "corollary",
        "title": "Diskontinuitas berhingga",
        "body": "Jika $f$ terbatas dan diskontinu hanya pada berhingga banyak titik, maka $f$ terintegralkan Riemann.",
        "proof": "Diketahui himpunan diskontinuitas $D_f=\\{x_1,\\ldots,x_m\\}$. Untuk setiap $\\varepsilon>0$, pilih interval terbuka $I_j$ yang memuat $x_j$ dan mempunyai panjang kurang dari $\\frac{\\varepsilon}{m}$. Jumlah panjang seluruh interval kurang dari $\\varepsilon$, sehingga $D_f$ berukuran Lebesgue nol. Berdasarkan Kriteria Lebesgue, $f$ terintegralkan Riemann. Dengan demikian, akibat tersebut terbukti."
      },
      {
        "kind": "corollary",
        "title": "Diskontinuitas terhitung",
        "body": "Jika himpunan diskontinuitas fungsi terbatas $f$ terhitung, maka $f$ terintegralkan Riemann, karena setiap himpunan terhitung mempunyai ukuran Lebesgue nol.",
        "proof": "Diketahui $D_f=\\{x_1,x_2,\\ldots\\}$. Untuk setiap $\\varepsilon>0$, pilih interval terbuka $I_k$ yang memuat $x_k$ dan memenuhi\n\\[\n|I_k|<\\frac{\\varepsilon}{2^{k+1}}.\n\\]\nDengan demikian,\n\\[\n\\sum_{k=1}^{\\infty}|I_k|<\\sum_{k=1}^{\\infty}\\frac{\\varepsilon}{2^{k+1}}=\\frac{\\varepsilon}{2}<\\varepsilon.\n\\]\nDengan demikian, $D_f$ berukuran Lebesgue nol. Berdasarkan Kriteria Lebesgue, $f$ terintegralkan Riemann. Dengan demikian, akibat tersebut terbukti."
      }
    ],
    "subsections": []
  }
];
export const integralRiemannDarbouxExercises: string[] = [
  "Misalkan fungsi $f(x)=x^2$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac{1}{4},\\frac{1}{2},\\frac{3}{4},1\\right\\}.\n\\]\nTentukan jumlah Darboux bawah $L(f,P)$, jumlah Darboux atas $U(f,P)$, dan selisih $U(f,P)-L(f,P)$.",
  "Misalkan fungsi $f(x)=x^3$ pada $[0,1]$ dan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac{1}{n},\\frac{2}{n},\\ldots,1\\right\\}.\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1x^3\\,d x$ menggunakan jumlah Darboux bawah dan atas.",
  "Misalkan fungsi $f(x)=x$ pada $[0,1]$ dan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac{1}{n},\\frac{2}{n},\\ldots,1\\right\\}.\n\\]\nTentukan integral Darboux bawah dan integral Darboux atas dari $f$.",
  "Misalkan fungsi\n\\[\nf(x)=\\left|x-\\frac{1}{2}\\right|,\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1\\left|x-\\frac{1}{2}\\right|\\,d x$.",
  "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<\\frac{1}{3},\\\\\n-1,&\\frac{1}{3}\\le x<\\frac{2}{3},\\\\\n3,&\\frac{2}{3}\\le x\\le1.\n\\end{cases}\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1f(x)\\,d x$.",
  "Misalkan\n\\[\nf(x)=\n\\begin{cases}\nx,&x\\neq\\frac{1}{2},\\\\\n10,&x=\\frac{1}{2},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1f(x)\\,d x$.",
  "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\left\\{\\frac{1}{4},\\frac{1}{2},\\frac{3}{4}\\right\\},\\\\\n0,&\\text{selainnya},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan integral Darboux bawah, integral Darboux atas, dan keterintegralan Darboux fungsi $f$.",
  "Misalkan fungsi Dirichlet\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan integral Darboux bawah dan integral Darboux atas dari $f$ serta keterintegralan Riemannnya.",
  "Misalkan\n\\[\nf(x)=\n\\begin{cases}\nx,&x\\in\\mathbb{Q},\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan integral Darboux bawah, integral Darboux atas, dan keterintegralan Darboux fungsi $f$.",
  "Misalkan fungsi Thomae\n\\[\nf(x)=\n\\begin{cases}\n\\dfrac{1}{q},&x=\\dfrac pq\\in\\mathbb{Q},\\ (p,q)=1,\\\\\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa $f$ terintegralkan Darboux dan nilai integralnya sama dengan $0$.",
  "Misalkan\n\\[\nf(x)=\n\\begin{cases}\n\\dfrac{1}{n},&x=\\dfrac{1}{n}\\text{ untuk suatu }n\\in\\mathbb{N},\\\\\n0,&\\text{selainnya},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai integralnya.",
  "Misalkan fungsi\n\\[\nf(x)=\\frac1{1+x},\\qquad x\\in[0,1],\n\\]\ndan partisi seragam $P_n=\\{0,\\frac{1}{n},\\ldots,1\\}$.\nBuktikan bahwa $f$ terintegralkan Darboux dengan menunjukkan bahwa $U(f,P_n)-L(f,P_n)\\to0$.",
  "Misalkan fungsi $f(x)=\\sqrt{x}$ pada $[0,1]$ dan partisi seragam $P_n=\\{0,\\frac{1}{n},\\ldots,1\\}$.\nTentukan suatu syarat pada $n$ yang menjamin\n\\[\nU(f,P_n)-L(f,P_n)<\\varepsilon\n\\]\nuntuk setiap $\\varepsilon>0$.",
  "Misalkan fungsi $f(x)=x(1-x)$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac{1}{4},\\frac{1}{2},\\frac{3}{4},1\\right\\}.\n\\]\nTentukan $L(f,P)$ dan $U(f,P)$.",
  "Misalkan fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ serta dua partisi $P$ dan $Q$ dengan $P\\subseteq Q$.\nBuktikan bahwa\n\\[\nL(f,P)\\le L(f,Q)\\le U(f,Q)\\le U(f,P).\n\\]",
  "Misalkan fungsi $f(x)=x$ pada $[0,1]$ dengan\n\\[\nP=\\left\\{0,\\frac{1}{3},1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac{1}{4},\\frac{1}{2},1\\right\\}.\n\\]\nTentukan partisi penghalus bersama $R=P\\cup Q$ beserta $L(f,R)$ dan $U(f,R)$.",
  "Misalkan fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ yang memenuhi bahwa untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBuktikan bahwa $f$ terintegralkan Darboux.",
  "Misalkan fungsi $f:[a,b]\\to\\mathbb{R}$ monoton naik.\nBuktikan bahwa $f$ terintegralkan Darboux menggunakan partisi seragam.",
  "Misalkan fungsi $f:[a,b]\\to\\mathbb{R}$ kontinu.\nBuktikan bahwa $f$ terintegralkan Darboux menggunakan kontinuitas seragam dan Kriteria Darboux.",
  "Misalkan fungsi $f(x)=2x+1$ pada $[0,1]$ dan partisi berlabel sebarang $\\dot P$ dengan norma partisi $\\lVert P\\rVert$.\nBuktikan bahwa jumlah Riemann $S(f,\\dot P)$ menuju $2$ ketika $\\lVert P\\rVert\\to0$.",
  "Misalkan\n\\[\nf(x)=\n\\begin{cases}\nx^2,&x\\neq\\frac{1}{2},\\\\\n5,&x=\\frac{1}{2},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa $f$ terintegralkan Riemann langsung dari definisi jumlah Riemann.",
  "Misalkan fungsi terintegralkan Darboux $f,g:[a,b]\\to\\mathbb{R}$ dan skalar $\\alpha,\\beta\\in\\mathbb{R}$.\nBuktikan bahwa $\\alpha f+\\beta g$ terintegralkan Darboux.",
  "Misalkan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$.\nBuktikan bahwa\n\\[\nh(x)=\\max\\{f(x),g(x)\\}\n\\qquad\\text{dan}\\qquad\nk(x)=\\min\\{f(x),g(x)\\}\n\\]\nterintegralkan Riemann pada $[a,b]$.",
  "Misalkan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$.\nBuktikan bahwa hasil kali $fg$ terintegralkan Riemann pada $[a,b]$.",
  "Misalkan fungsi terintegralkan Riemann $f:[a,b]\\to\\mathbb{R}$ dan terdapat $m>0$ sehingga\n\\[\n|f(x)|\\ge m\n\\]\nuntuk setiap $x\\in[a,b]$.\nBuktikan bahwa $\\frac{1}{f}$ terintegralkan Riemann pada $[a,b]$.",
  "Misalkan fungsi terintegralkan Riemann $f:[a,b]\\to\\mathbb{R}$ dan fungsi kontinu $\\varphi:\\mathbb{R}\\to\\mathbb{R}$ pada suatu interval yang memuat $f([a,b])$.\nBuktikan bahwa $\\varphi\\circ f$ terintegralkan Riemann pada $[a,b]$.",
  "Misalkan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$.\nBuktikan bahwa\n\\[\n\\left|\\int_a^b f(x)\\,d x-\\int_a^b g(x)\\,d x\\right|\n\\le\n\\int_a^b|f(x)-g(x)|\\,d x.\n\\]",
  "Misalkan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$ dan $f(x)\\le g(x)$ untuk setiap $x\\in[a,b]$ kecuali pada sejumlah berhingga titik.\nBuktikan bahwa\n\\[\n\\int_a^b f(x)\\,d x\\le\\int_a^b g(x)\\,d x.\n\\]",
  "Misalkan fungsi kontinu $f:[a,b]\\to\\mathbb{R}$ dengan $f(x)\\ge0$ untuk setiap $x\\in[a,b]$ dan\n\\[\n\\int_a^b f(x)\\,d x=0.\n\\]\nBuktikan bahwa $f(x)=0$ untuk setiap $x\\in[a,b]$.",
  "Misalkan fungsi terintegralkan Riemann $f:[a,b]\\to\\mathbb{R}$ serta\n\\[\nf^+(x)=\\max\\{f(x),0\\},\n\\qquad\nf^-(x)=\\max\\{-f(x),0\\}.\n\\]\nBuktikan bahwa $f^+$ dan $f^-$ terintegralkan Riemann serta\n\\[\nf=f^+-f^-,\n\\qquad\n|f|=f^++f^-.\n\\]"
];
