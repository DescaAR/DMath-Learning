export type IntegralSourceBlock = {
  kind: "paragraph" | "definition" | "lemma" | "proposition" | "theorem" | "corollary" | "note" | "example" | "exercise" | "proof";
  title?: string;
  text?: string;
  body?: string;
  proof?: string;
  solution?: string;
};

export type IntegralSourceSubsection = {
  title: string;
  blocks: IntegralSourceBlock[];
};

export type IntegralSourceSection = {
  title: string;
  blocks: IntegralSourceBlock[];
  subsections: IntegralSourceSubsection[];
};

export const integralRiemannDarbouxSections: IntegralSourceSection[] = [
  {
    "title": "Pendahuluan dan Objek Dasar",
    "subsections": [
      {
        "title": "Motivasi integral",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Diberikan $f:[a,b]\\to\\mathbb{R}$. Secara geometris, ketika $f(x)\\ge 0$ pada $[a,b]$, integral diharapkan menyatakan luas daerah di bawah grafik $f$. Jika fungsi dapat bernilai negatif, integral dipahami sebagai luas bertanda. Tantangan utama Analisis Real bukan sekadar menghitung luas untuk fungsi sederhana, melainkan mendefinisikan secara formal kapan suatu fungsi mempunyai integral dan mengapa nilai integral tersebut tunggal.\nDua pendekatan klasik yang akan dipakai adalah pendekatan Riemann dan Darboux. Riemann menggunakan titik sampel pada tiap subinterval, sedangkan Darboux menggunakan batas bawah dan batas atas fungsi pada tiap subinterval."
          },
          {
            "kind": "definition",
            "title": "Fungsi terbatas",
            "body": "Fungsi $f:[a,b]\\to\\mathbb{R}$ disebut terbatas apabila terdapat $M>0$ sehingga\n\\[\n|f(x)|\\le M\n\\qquad\\text{untuk setiap }x\\in[a,b].\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan fungsi\n\\[\nf(x)=\\sin x,\\qquad x\\in[0,2\\pi],\n\\]\ndan\n\\[\ng(x)=\\frac1x,\\qquad x\\in(0,1].\n\\]\nDibuktikan bahwa $f$ terbatas pada $[0,2\\pi]$, sedangkan $g$ tidak terbatas pada $(0,1]$.",
            "solution": "Diketahui fungsi $f(x)=\\sin x$ pada $[0,2\\pi]$ dan $g(x)=1/x$ pada $(0,1]$.\nDibuktikan bahwa $f$ terbatas pada $[0,2\\pi]$ dan $g$ tidak terbatas pada $(0,1]$.\nUntuk setiap $x\\in[0,2\\pi]$ berlaku\n\\[\n-1\\le \\sin x\\le 1.\n\\]\nAkibatnya,\n\\[\n|f(x)|=|\\sin x|\\le1.\n\\]\nBerdasarkan Definisi fungsi terbatas, dapat digunakan konstanta $M=1$. Dengan demikian, $f$ terbatas pada $[0,2\\pi]$.\nSelanjutnya dibuktikan bahwa $g$ tidak terbatas. Diambil sebarang $M>0$. Dipilih\n\\[\nx=\\frac{1}{M+1}.\n\\]\nKarena $M>0$, diperoleh $0<x\\le1$, sehingga $x\\in(0,1]$. Nilai fungsi pada titik tersebut adalah\n\\[\ng(x)=\\frac1x=M+1>M.\n\\]\nJadi untuk setiap calon batas atas $M>0$ selalu terdapat $x\\in(0,1]$ dengan $g(x)>M$. Tidak terdapat bilangan real yang membatasi $g$ dari atas pada $(0,1]$.\nDengan demikian, $f$ terbatas pada $[0,2\\pi]$ dan $g$ tidak terbatas pada $(0,1]$, sehingga pernyataan pada contoh tersebut terbukti."
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
            "proof": "Diketahui himpunan $A\\subseteq\\mathbb{R}$ tidak kosong dan terbatas, dengan $M=\\sup A$ dan $m=\\inf A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat elemen $a\\in A$ yang mendekati supremum dari bawah dan infimum dari atas. Pembuktian dilakukan dalam dua bagian.\n•  Aproksimasi supremum.\nDiketahui $M=\\sup A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat $a\\in A$ yang memenuhi\n\\[\nM-\\eta<a\\le M.\n\\]\nDiambil sebarang $\\eta>0$. Diandaikan tidak terdapat $a\\in A$ yang memenuhi $M-\\eta<a$. Dengan demikian, setiap $a\\in A$ memenuhi\n\\[\na\\le M-\\eta.\n\\]\nHal ini berarti $M-\\eta$ merupakan batas atas bagi $A$. Karena $\\eta>0$, berlaku $M-\\eta<M$, sehingga diperoleh suatu batas atas yang lebih kecil daripada $M$. Pernyataan tersebut bertentangan dengan fakta bahwa $M=\\sup A$ merupakan batas atas terkecil dari $A$. Oleh karena itu, terdapat $a\\in A$ yang memenuhi\n\\[\nM-\\eta<a\\le M.\n\\]\n•  Aproksimasi infimum.\nDiketahui $m=\\inf A$.\nDibuktikan bahwa untuk setiap $\\eta>0$ terdapat $a\\in A$ yang memenuhi\n\\[\nm\\le a<m+\\eta.\n\\]\nDiambil sebarang $\\eta>0$. Diandaikan tidak terdapat $a\\in A$ yang memenuhi $a<m+\\eta$. Dengan demikian, setiap $a\\in A$ memenuhi\n\\[\na\\ge m+\\eta.\n\\]\nHal ini berarti $m+\\eta$ merupakan batas bawah bagi $A$. Karena $\\eta>0$, berlaku $m+\\eta>m$, sehingga diperoleh suatu batas bawah yang lebih besar daripada $m$. Pernyataan tersebut bertentangan dengan fakta bahwa $m=\\inf A$ merupakan batas bawah terbesar dari $A$. Oleh karena itu, terdapat $a\\in A$ yang memenuhi\n\\[\nm\\le a<m+\\eta.\n\\]\nBerdasarkan kedua bagian tersebut, sifat aproksimasi supremum dan infimum berlaku. Dengan demikian, Lemma terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menunjukkan bahwa titik-titik himpunan dapat ditemukan sedekat yang diinginkan dengan supremum dari bawah dan dengan infimum dari atas."
          }
        ]
      }
    ],
    "blocks": []
  },
  {
    "title": "Partisi dan Jumlah Riemann",
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
            "body": "Pada interval $[0,1]$ diberikan himpunan\n\\[\nP=\\left\\{0,\\frac14,\\frac12,1\\right\\}.\n\\]\nDibuktikan bahwa $P$ merupakan partisi dari $[0,1]$, kemudian ditentukan subinterval dan panjang masing-masing subintervalnya.",
            "solution": "Diketahui interval $[0,1]$ dan himpunan\n\\[\nP=\\left\\{0,\\frac14,\\frac12,1\\right\\}.\n\\]\nDibuktikan bahwa $P$ merupakan partisi dari $[0,1]$ dan ditentukan subinterval yang dibentuk oleh $P$.\nUrutan titik-titik pada $P$ memenuhi\n\\[\n0<\\frac14<\\frac12<1.\n\\]\nTitik pertama adalah $0$ dan titik terakhir adalah $1$. Oleh karena itu, syarat definisi partisi terpenuhi.\nSubinterval yang terbentuk adalah\n\\[\n\\left[0,\\frac14\\right],\\qquad\n\\left[\\frac14,\\frac12\\right],\\qquad\n\\left[\\frac12,1\\right].\n\\]\nPanjang masing-masing subinterval adalah\n\\[\n\\frac14-0=\\frac14,\n\\]\n\\[\n\\frac12-\\frac14=\\frac14,\n\\]\ndan\n\\[\n1-\\frac12=\\frac12.\n\\]\nDengan demikian, $P$ merupakan partisi dari $[0,1]$ dengan panjang subinterval berturut-turut $1/4$, $1/4$, dan $1/2$. Pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "definition",
            "title": "Norma partisi",
            "body": "Jika $P=\\{x_0,\\ldots,x_n\\}$ adalah partisi $[a,b]$, maka norma partisi atau mesh didefinisikan oleh\n\\[\n\\lVert P\\rVert=\\max_{1\\le i\\le n}(x_i-x_{i-1})\n=\\max_{1\\le i\\le n}\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan partisi\n\\[\nP=\\left\\{0,\\frac14,\\frac12,1\\right\\}\n\\]\ndari $[0,1]$. Ditentukan norma partisi $\\|P\\|$.",
            "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac14,\\frac12,1\\right\\}.\n\\]\nDitentukan nilai norma partisi $\\|P\\|$.\nPanjang subinterval-subinterval yang dibentuk oleh $P$ adalah\n\\[\n\\Delta x_1=\\frac14,\n\\qquad\n\\Delta x_2=\\frac14,\n\\qquad\n\\Delta x_3=\\frac12.\n\\]\nBerdasarkan definisi norma partisi,\n\\[\n\\|P\\|=\\max\\left\\{\\frac14,\\frac14,\\frac12\\right\\}.\n\\]\nNilai maksimum dari ketiga panjang tersebut adalah $1/2$. Dengan demikian,\n\\[\n\\boxed{\\|P\\|=\\frac12}.\n\\]\nNilai norma partisi pada contoh tersebut telah ditentukan."
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
            "body": "Diberikan dua partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac14,\\frac12,\\frac34,1\\right\\}.\n\\]\nDibuktikan bahwa $Q$ merupakan partisi penghalus dari $P$.",
            "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac14,\\frac12,\\frac34,1\\right\\}.\n\\]\nDibuktikan bahwa $Q$ merupakan partisi penghalus dari $P$.\nSetiap titik pada $P$ juga merupakan titik pada $Q$, yaitu\n\\[\n0\\in Q,\\qquad \\frac12\\in Q,\\qquad 1\\in Q.\n\\]\nOleh karena itu,\n\\[\nP\\subseteq Q.\n\\]\nBerdasarkan definisi partisi penghalus, hubungan $P\\subseteq Q$ menunjukkan bahwa $Q$ merupakan partisi penghalus dari $P$.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "definition",
            "title": "Partisi penghalus bersama",
            "body": "Untuk dua partisi $P,Q$, partisi\n\\[\nR=P\\cup Q\n\\]\ndisebut partisi penghalus bersama. Jelas $P\\subseteq R$ dan $Q\\subseteq R$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan dua partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac13,\\frac23,1\\right\\}.\n\\]\nDitentukan partisi penghalus bersama dari $P$ dan $Q$.",
            "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac13,\\frac23,1\\right\\}.\n\\]\nDitentukan partisi penghalus bersama dari $P$ dan $Q$.\nBerdasarkan definisi, partisi penghalus bersama diperoleh melalui gabungan kedua himpunan titik partisi. Diperoleh\n\\[\nR=P\\cup Q\n=\\left\\{0,\\frac13,\\frac12,\\frac23,1\\right\\}.\n\\]\nTerlihat bahwa\n\\[\nP\\subseteq R\n\\qquad\\text{dan}\\qquad\nQ\\subseteq R.\n\\]\nDengan demikian, $R$ merupakan partisi penghalus dari $P$ sekaligus partisi penghalus dari $Q$. Jadi\n\\[\n\\boxed{R=\\left\\{0,\\frac13,\\frac12,\\frac23,1\\right\\}}\n\\]\nmerupakan partisi penghalus bersama yang ditentukan."
          }
        ]
      },
      {
        "title": "Tagged partition dan jumlah Riemann",
        "blocks": [
          {
            "kind": "definition",
            "title": "Tagged partition",
            "body": "Diberikan $P=\\{x_0,\\ldots,x_n\\}$ partisi $[a,b]$. Sebuah tagged partition adalah pasangan\n\\[\nP^*=\\bigl(P;t_1,\\ldots,t_n\\bigr),\n\\]\ndengan\n\\[\nt_i\\in[x_{i-1},x_i],\\qquad i=1,\\ldots,n.\n\\]\nTitik $t_i$ disebut tag atau titik sampel."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\}\n\\]\ndan titik\n\\[\nt_1=\\frac14,\n\\qquad\nt_2=\\frac34.\n\\]\nDibuktikan bahwa\n\\[\nP^*=\\left(P;\\frac14,\\frac34\\right)\n\\]\nmerupakan tagged partition dari $[0,1]$.",
            "solution": "Diketahui partisi $P=\\{0,1/2,1\\}$ dengan $t_1=1/4$ dan $t_2=3/4$.\nDibuktikan bahwa $P^*=(P;1/4,3/4)$ merupakan tagged partition.\nSubinterval pertama adalah $[0,1/2]$. Berlaku\n\\[\n\\frac14\\in\\left[0,\\frac12\\right].\n\\]\nSubinterval kedua adalah $[1/2,1]$. Berlaku\n\\[\n\\frac34\\in\\left[\\frac12,1\\right].\n\\]\nSetiap tag berada pada subinterval yang bersesuaian. Berdasarkan definisi tagged partition, pasangan\n\\[\nP^*=\\left(P;\\frac14,\\frac34\\right)\n\\]\nmerupakan tagged partition dari $[0,1]$.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "definition",
            "title": "Jumlah Riemann",
            "body": "Untuk tagged partition $P^*$, jumlah Riemann fungsi $f$ didefinisikan oleh\n\\[\nS(f,P^*)=\\sum_{i=1}^{n}f(t_i)\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan fungsi $f(x)=x^2$ pada $[0,1]$, partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\},\n\\]\ndan tag\n\\[\nt_1=\\frac14,\n\\qquad\nt_2=\\frac34.\n\\]\nDitentukan jumlah Riemann $S(f,P^*)$.",
            "solution": "Diketahui fungsi $f(x)=x^2$, partisi $P=\\{0,1/2,1\\}$, serta tag $t_1=1/4$ dan $t_2=3/4$.\nDitentukan nilai jumlah Riemann $S(f,P^*)$.\nPanjang kedua subinterval adalah\n\\[\n\\Delta x_1=\\frac12,\n\\qquad\n\\Delta x_2=\\frac12.\n\\]\nNilai fungsi pada kedua tag adalah\n\\[\nf(t_1)=\\left(\\frac14\\right)^2=\\frac1{16},\n\\qquad\nf(t_2)=\\left(\\frac34\\right)^2=\\frac9{16}.\n\\]\nBerdasarkan definisi jumlah Riemann,\n\\[\\begin{aligned}\nS(f,P^*)\n&=f(t_1)\\Delta x_1+f(t_2)\\Delta x_2\n&=\\frac1{16}\\cdot\\frac12+\\frac9{16}\\cdot\\frac12\n&=\\frac1{32}+\\frac9{32}\n&=\\frac{10}{32}\n&=\\frac5{16}.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\boxed{S(f,P^*)=\\frac5{16}}.\n\\]\nNilai jumlah Riemann pada contoh tersebut telah ditentukan."
          },
          {
            "kind": "paragraph",
            "text": "Secara geometris, $f(t_i)\\Delta x_i$ merupakan luas bertanda persegi panjang pada subinterval ke-$i$."
          },
          {
            "kind": "example",
            "title": "Jumlah Riemann untuk $f(x)=x$",
            "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$, partisi seragam\n\\[\nx_i=\\frac{i}{n},\n\\qquad i=0,1,\\ldots,n,\n\\]\ndan tag kanan $t_i=x_i$. Ditentukan jumlah Riemann $S_n$ dan limitnya ketika $n\\to\\infty$.",
            "solution": "Diketahui fungsi $f(x)=x$, partisi seragam $x_i=i/n$, dan tag kanan $t_i=i/n$.\nDitentukan bentuk jumlah Riemann $S_n$ dan nilai $\\lim_{n\\to\\infty}S_n$.\nSetiap subinterval mempunyai panjang\n\\[\n\\Delta x_i=\\frac1n.\n\\]\nBerdasarkan definisi jumlah Riemann,\n\\[\\begin{aligned}\nS_n\n&=\\sum_{i=1}^{n}f(t_i)\\Delta x_i\n&=\\sum_{i=1}^{n}\\frac{i}{n}\\cdot\\frac1n\n&=\\frac1{n^2}\\sum_{i=1}^{n}i.\n\\end{aligned}\\]\nDigunakan identitas\n\\[\n\\sum_{i=1}^{n}i=\\frac{n(n+1)}2.\n\\]\nDiperoleh\n\\[\nS_n=\\frac1{n^2}\\cdot\\frac{n(n+1)}2\n=\\frac{n+1}{2n}.\n\\]\nLimitnya adalah\n\\[\n\\lim_{n\\to\\infty}\\frac{n+1}{2n}\n=\\frac12.\n\\]\nDengan demikian,\n\\[\n\\boxed{S_n=\\frac{n+1}{2n}},\n\\qquad\n\\boxed{\\lim_{n\\to\\infty}S_n=\\frac12}.\n\\]\nNilai yang ditentukan telah diperoleh."
          },
          {
            "kind": "paragraph",
            "text": "Contoh tersebut baru menggunakan satu jenis partisi dan satu pilihan tag. Definisi formal integral Riemann harus menjamin bahwa semua tagged partition yang cukup halus menghasilkan jumlah Riemann yang mendekati nilai yang sama."
          }
        ]
      }
    ],
    "blocks": []
  },
  {
    "title": "Integral Riemann",
    "subsections": [
      {
        "title": "Definisi formal",
        "blocks": [
          {
            "kind": "definition",
            "title": "Integral Riemann",
            "body": "Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ disebut Riemann integrable apabila terdapat $I\\in\\mathbb{R}$ sedemikian sehingga untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga untuk setiap tagged partition $P^*$ dari $[a,b]$, berlaku\n\\[\n\\lVert P\\rVert<\\delta\n\\quad\\Longrightarrow\\quad\n\\left|S(f,P^*)-I\\right|<\\varepsilon.\n\\]\nJika kondisi ini terpenuhi, ditulis\n\\[\nI=\\int_a^b f(x)\\,d x.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan fungsi konstan\n\\[\nf(x)=c,\n\\qquad x\\in[a,b].\n\\]\nDibuktikan bahwa $f$ Riemann integrable dan\n\\[\n\\int_a^b c\\,\\,d x=c(b-a).\n\\]",
            "solution": "Diketahui fungsi konstan $f(x)=c$ pada $[a,b]$.\nDibuktikan bahwa $f$ Riemann integrable dan nilai integralnya adalah\n\\[\n\\int_a^b c\\,\\,d x=c(b-a).\n\\]\nDitetapkan\n\\[\nI=c(b-a).\n\\]\nDiambil sebarang tagged partition\n\\[\nP^*=(P;t_1,\\ldots,t_n)\n\\]\ndari $[a,b]$. Karena $f(t_i)=c$ untuk setiap $i$, jumlah Riemannnya adalah\n\\[\\begin{aligned}\nS(f,P^*)\n&=\\sum_{i=1}^{n}f(t_i)\\Delta x_i\n&=\\sum_{i=1}^{n}c\\,\\Delta x_i\n&=c\\sum_{i=1}^{n}(x_i-x_{i-1})\n&=c(b-a)\n&=I.\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih sebarang $\\delta>0$, misalnya $\\delta=1$. Untuk setiap tagged partition dengan $\\|P\\|<\\delta$ diperoleh\n\\[\n|S(f,P^*)-I|=|I-I|=0<\\varepsilon.\n\\]\nSyarat definisi integral Riemann terpenuhi. Oleh karena itu, $f$ Riemann integrable dan\n\\[\n\\boxed{\\int_a^b c\\,\\,d x=c(b-a)}.\n\\]\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait memperlihatkan bahwa setelah norma partisi cukup kecil, semua pilihan tag menghasilkan jumlah Riemann yang berada dalam pita $\\varepsilon$ di sekitar nilai integral $I$.\nDefinisi ini mengandung kuantor yang kuat. Bilangan $\\delta$ harus bekerja untuk semua bentuk partisi, semua banyak subinterval, dan semua pemilihan tag selama mesh partisi lebih kecil daripada $\\delta$. Dengan demikian nilai integral tidak boleh bergantung pada cara partisi atau tag dipilih."
          },
          {
            "kind": "proposition",
            "title": "Keunikan integral Riemann",
            "body": "Jika $f$ Riemann integrable pada $[a,b]$, maka nilai integral Riemannnya tunggal.",
            "proof": "Diketahui fungsi $f$ Riemann integrable pada $[a,b]$.\nDibuktikan bahwa nilai integral Riemann dari $f$ pada $[a,b]$ bersifat tunggal.\nDiandaikan terdapat dua bilangan $I,J\\in\\mathbb{R}$ yang sama-sama memenuhi definisi integral Riemann untuk $f$. Diambil sebarang $\\varepsilon>0$.\nKarena $I$ memenuhi definisi integral Riemann, terdapat $\\delta_1>0$ sehingga untuk setiap tagged partition $P^*$ dengan $\\|P\\|<\\delta_1$ berlaku\n\\[\n|S(f,P^*)-I|<\\frac{\\varepsilon}{2}.\n\\]\nKarena $J$ juga memenuhi definisi integral Riemann, terdapat $\\delta_2>0$ sehingga untuk setiap tagged partition $P^*$ dengan $\\|P\\|<\\delta_2$ berlaku\n\\[\n|S(f,P^*)-J|<\\frac{\\varepsilon}{2}.\n\\]\nDiambil suatu tagged partition $P^*$ yang memenuhi\n\\[\n\\|P\\|<\\min\\{\\delta_1,\\delta_2\\}.\n\\]\nKedua ketaksamaan di atas berlaku secara bersamaan. Berdasarkan ketaksamaan segitiga,\n\\[\\begin{aligned}\n|I-J|\n&=|I-S(f,P^*)+S(f,P^*)-J|\n&\\le |I-S(f,P^*)|+|S(f,P^*)-J|\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\n&=\\varepsilon.\n\\end{aligned}\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh $|I-J|=0$. Dengan demikian $I=J$, sehingga nilai integral Riemann bersifat tunggal.\nDengan demikian, Proposisi terkait terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan Proposisi terkait",
            "body": "Diberikan fungsi konstan $f(x)=3$ pada $[0,2]$. Diketahui bahwa nilai $6$ memenuhi definisi integral Riemann untuk $f$. Dibuktikan bahwa tidak terdapat nilai integral Riemann lain selain $6$.",
            "solution": "Diketahui fungsi $f(x)=3$ pada $[0,2]$ Riemann integrable dengan\n\\[\n\\int_0^2 3\\,\\,d x=6.\n\\]\nDibuktikan bahwa $6$ merupakan satu-satunya nilai integral Riemann dari $f$ pada $[0,2]$.\nDiandaikan terdapat bilangan $J\\in\\mathbb{R}$ yang juga memenuhi definisi integral Riemann untuk fungsi $f$. Karena fungsi $f$ Riemann integrable, Proposisi terkait menyatakan bahwa nilai integral Riemann bersifat tunggal. Oleh karena itu,\n\\[\nJ=6.\n\\]\nTidak terdapat bilangan lain yang dapat menjadi nilai integral Riemann fungsi tersebut.\nDengan demikian, contoh penerapan Proposisi terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait memperlihatkan bahwa satu jumlah Riemann yang sekaligus berada dalam jarak kurang dari $\\varepsilon/2$ terhadap $I$ dan $J$ memaksa $|I-J|<\\varepsilon$."
          },
          {
            "kind": "note",
            "title": "",
            "body": "Sampai titik ini, teori Riemann sudah dibangun melalui partisi, tagged partition, jumlah Riemann, definisi integral, dan keunikan nilai integral. Selanjutnya Darboux diperkenalkan sebagai pendekatan yang lebih nyaman untuk banyak pembuktian integrabilitas."
          }
        ]
      }
    ],
    "blocks": []
  },
  {
    "title": "Jumlah Darboux",
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
            "title": "Lower Darboux sum",
            "body": "Lower Darboux sum fungsi $f$ terhadap partisi $P$ didefinisikan oleh\n\\[\nL(f,P)=\\sum_{i=1}^{n}m_i\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\}.\n\\]\nDitentukan lower Darboux sum $L(f,P)$.",
            "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$ dan partisi $P=\\{0,1/2,1\\}$.\nDitentukan nilai lower Darboux sum $L(f,P)$.\nSubinterval yang dibentuk adalah\n\\[\nI_1=\\left[0,\\frac12\\right],\n\\qquad\nI_2=\\left[\\frac12,1\\right].\n\\]\nKarena $f(x)=x$ naik, infimum pada setiap subinterval terletak di ujung kiri. Diperoleh\n\\[\nm_1=0,\n\\qquad\nm_2=\\frac12.\n\\]\nKedua subinterval mempunyai panjang $1/2$. Berdasarkan definisi lower Darboux sum,\n\\[\\begin{aligned}\nL(f,P)\n&=m_1\\Delta x_1+m_2\\Delta x_2\n&=0\\cdot\\frac12+\\frac12\\cdot\\frac12\n&=\\frac14.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\boxed{L(f,P)=\\frac14}.\n\\]\nNilai lower Darboux sum telah ditentukan."
          },
          {
            "kind": "paragraph",
            "text": "Pada Gambar hasil terkait, tinggi setiap persegi panjang ditentukan oleh infimum fungsi pada subinterval yang bersesuaian."
          },
          {
            "kind": "definition",
            "title": "Upper Darboux sum",
            "body": "Upper Darboux sum fungsi $f$ terhadap partisi $P$ didefinisikan oleh\n\\[\nU(f,P)=\\sum_{i=1}^{n}M_i\\Delta x_i.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\}.\n\\]\nDitentukan upper Darboux sum $U(f,P)$ dan dibandingkan dengan $L(f,P)$.",
            "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$ dan partisi $P=\\{0,1/2,1\\}$.\nDitentukan nilai upper Darboux sum $U(f,P)$ dan dibuktikan bahwa $L(f,P)\\le U(f,P)$.\nKarena $f$ naik, supremum pada setiap subinterval terletak di ujung kanan. Diperoleh\n\\[\nM_1=\\frac12,\n\\qquad\nM_2=1.\n\\]\nKedua subinterval mempunyai panjang $1/2$. Berdasarkan definisi upper Darboux sum,\n\\[\\begin{aligned}\nU(f,P)\n&=M_1\\Delta x_1+M_2\\Delta x_2\n&=\\frac12\\cdot\\frac12+1\\cdot\\frac12\n&=\\frac14+\\frac12\n&=\\frac34.\n\\end{aligned}\\]\nDari contoh lower Darboux sum sebelumnya telah diperoleh $L(f,P)=1/4$. Oleh karena itu,\n\\[\nL(f,P)=\\frac14\\le\\frac34=U(f,P).\n\\]\nDengan demikian,\n\\[\n\\boxed{U(f,P)=\\frac34},\n\\]\ndan ketaksamaan $L(f,P)\\le U(f,P)$ pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Pada Gambar hasil terkait, tinggi setiap persegi panjang ditentukan oleh supremum fungsi pada subinterval yang bersesuaian."
          },
          {
            "kind": "lemma",
            "title": "Jepit Riemann--Darboux",
            "body": "Untuk setiap tagged partition $P^*$ yang berasal dari partisi $P$, berlaku\n\\[\nL(f,P)\\le S(f,P^*)\\le U(f,P).\n\\]",
            "proof": "Diketahui tagged partition $P^*$ yang berasal dari partisi $P=\\{x_0,x_1,\\ldots,x_n\\}$ pada $[a,b]$.\nDibuktikan bahwa\n\\[\nL(f,P)\\le S(f,P^*)\\le U(f,P).\n\\]\nUntuk setiap $i=1,2,\\ldots,n$, titik tag memenuhi $t_i\\in I_i=[x_{i-1},x_i]$. Berdasarkan definisi infimum dan supremum lokal,\n\\[\nm_i\\le f(t_i)\\le M_i.\n\\]\nKarena $\\Delta x_i=x_i-x_{i-1}>0$, perkalian dengan $\\Delta x_i$ mempertahankan arah ketaksamaan, sehingga\n\\[\nm_i\\Delta x_i\\le f(t_i)\\Delta x_i\\le M_i\\Delta x_i.\n\\]\nKetaksamaan tersebut dijumlahkan untuk $i=1,2,\\ldots,n$. Diperoleh\n\\[\n\\sum_{i=1}^n m_i\\Delta x_i\n\\le\n\\sum_{i=1}^n f(t_i)\\Delta x_i\n\\le\n\\sum_{i=1}^n M_i\\Delta x_i.\n\\]\nBerdasarkan definisi lower Darboux sum, jumlah Riemann, dan upper Darboux sum, bentuk tersebut sama dengan\n\\[\nL(f,P)\\le S(f,P^*)\\le U(f,P).\n\\]\nDengan demikian, Lemma terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menunjukkan bahwa luas persegi panjang bertag selalu berada di antara persegi panjang lower dan upper pada subinterval yang sama."
          }
        ]
      },
      {
        "title": "Pengaruh partisi penghalus",
        "blocks": [
          {
            "kind": "lemma",
            "title": "Partisi penghalus menaikkan lower sum",
            "body": "Jika $Q$ partisi penghalus dari $P$, maka\n\\[\nL(f,P)\\le L(f,Q).\n\\]",
            "proof": "Diketahui partisi $Q$ merupakan partisi penghalus dari partisi $P$.\nDibuktikan bahwa\n\\[\nL(f,P)\\le L(f,Q).\n\\]\nPembuktian terlebih dahulu dilakukan pada keadaan ketika $Q$ diperoleh dari $P$ dengan menambahkan satu titik $c\\in(x_{k-1},x_k)$. Semua subinterval selain $[x_{k-1},x_k]$ tetap sama, sehingga perubahan lower sum hanya berasal dari subinterval tersebut.\nDituliskan\n\\[\nm=\\inf_{[x_{k-1},x_k]}f,\n\\qquad\nm'=\\inf_{[x_{k-1},c]}f,\n\\qquad\nm''=\\inf_{[c,x_k]}f.\n\\]\nKarena\n\\[\n[x_{k-1},c]\\subseteq[x_{k-1},x_k],\n\\qquad\n[c,x_k]\\subseteq[x_{k-1},x_k],\n\\]\ninfimum pada masing-masing subinterval yang lebih kecil tidak mungkin lebih kecil daripada infimum pada interval asal. Oleh karena itu,\n\\[\nm\\le m',\n\\qquad\nm\\le m''.\n\\]\nAkibatnya,\n\\[\\begin{aligned}\nm(x_k-x_{k-1})\n&=m(c-x_{k-1})+m(x_k-c)\n&\\le m'(c-x_{k-1})+m''(x_k-c).\n\\end{aligned}\\]\nJadi penambahan satu titik partisi tidak menurunkan lower sum. Karena setiap partisi penghalus berhingga dapat diperoleh dengan menambahkan titik-titik baru satu per satu, ketaksamaan tersebut dapat diterapkan berulang kali sampai diperoleh\n\\[\nL(f,P)\\le L(f,Q).\n\\]\nDengan demikian, Lemma terkait terbukti."
          },
          {
            "kind": "lemma",
            "title": "Partisi penghalus menurunkan upper sum",
            "body": "Jika $Q$ partisi penghalus dari $P$, maka\n\\[\nU(f,Q)\\le U(f,P).\n\\]",
            "proof": "Diketahui partisi $Q$ merupakan partisi penghalus dari partisi $P$.\nDibuktikan bahwa\n\\[\nU(f,Q)\\le U(f,P).\n\\]\nPembuktian terlebih dahulu dilakukan pada keadaan ketika satu titik $c\\in(x_{k-1},x_k)$ ditambahkan pada partisi $P$. Dituliskan\n\\[\nM=\\sup_{[x_{k-1},x_k]}f,\n\\qquad\nM'=\\sup_{[x_{k-1},c]}f,\n\\qquad\nM''=\\sup_{[c,x_k]}f.\n\\]\nKarena kedua subinterval baru merupakan subhimpunan dari $[x_{k-1},x_k]$, supremum pada masing-masing subinterval baru tidak mungkin lebih besar daripada supremum pada interval asal. Dengan demikian,\n\\[\nM'\\le M,\n\\qquad\nM''\\le M.\n\\]\nAkibatnya,\n\\[\\begin{aligned}\nM'(c-x_{k-1})+M''(x_k-c)\n&\\le M(c-x_{k-1})+M(x_k-c)\n&=M(x_k-x_{k-1}).\n\\end{aligned}\\]\nJadi penambahan satu titik partisi tidak menaikkan upper sum. Karena partisi $Q$ dapat diperoleh dari $P$ melalui penambahan berhingga banyak titik, ketaksamaan tersebut dapat diterapkan berulang kali sehingga\n\\[\nU(f,Q)\\le U(f,P).\n\\]\nDengan demikian, Lemma terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait memperlihatkan bahwa pemecahan subinterval dapat menaikkan lower sum dan menurunkan upper sum."
          },
          {
            "kind": "proposition",
            "title": "Perbandingan dua partisi sembarang",
            "body": "Untuk setiap dua partisi $P,Q$ dari $[a,b]$, berlaku\n\\[\nL(f,P)\\le U(f,Q).\n\\]",
            "proof": "Diketahui partisi $P$ dan $Q$ merupakan dua partisi sembarang dari $[a,b]$.\nDibuktikan bahwa\n\\[\nL(f,P)\\le U(f,Q).\n\\]\nDibentuk partisi penghalus bersama\n\\[\nR=P\\cup Q.\n\\]\nKarena $R$ merupakan partisi penghalus dari $P$, berdasarkan Lemma terkait berlaku\n\\[\nL(f,P)\\le L(f,R).\n\\]\nKarena $R$ merupakan partisi penghalus dari $Q$, berdasarkan Lemma terkait berlaku\n\\[\nU(f,R)\\le U(f,Q).\n\\]\nUntuk partisi yang sama selalu berlaku\n\\[\nL(f,R)\\le U(f,R).\n\\]\nKetiga ketaksamaan tersebut memberikan rantai\n\\[\nL(f,P)\\le L(f,R)\\le U(f,R)\\le U(f,Q).\n\\]\nOleh karena itu, diperoleh $L(f,P)\\le U(f,Q)$. Dengan demikian, Proposisi terkait terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan Proposisi terkait",
            "body": "Diberikan fungsi $f(x)=x^2$ pada $[0,1]$ serta partisi\n\\[\nP=\\left\\{0,\\frac12,1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac13,1\\right\\}.\n\\]\nDibuktikan secara langsung bahwa\n\\[\nL(f,P)\\le U(f,Q).\n\\]",
            "solution": "Diketahui fungsi $f(x)=x^2$ pada $[0,1]$ serta partisi $P=\\{0,1/2,1\\}$ dan $Q=\\{0,1/3,1\\}$.\nDibuktikan bahwa $L(f,P)\\le U(f,Q)$.\nKarena $f(x)=x^2$ naik pada $[0,1]$, infimum pada setiap subinterval partisi $P$ terletak di ujung kiri. Diperoleh\n\\[\nL(f,P)\n=0\\cdot\\frac12+\\left(\\frac12\\right)^2\\frac12\n=\\frac18.\n\\]\nUntuk partisi $Q$, supremum pada setiap subinterval terletak di ujung kanan. Diperoleh\n\\[\\begin{aligned}\nU(f,Q)\n&=\\left(\\frac13\\right)^2\\left(\\frac13\\right)\n+1^2\\left(\\frac23\\right)\n&=\\frac1{27}+\\frac{18}{27}\n&=\\frac{19}{27}.\n\\end{aligned}\\]\nPerbandingan kedua nilai memberikan\n\\[\n\\frac18\\le\\frac{19}{27}.\n\\]\nJadi\n\\[\nL(f,P)\\le U(f,Q),\n\\]\nsesuai dengan Proposisi terkait.\nDengan demikian, contoh penerapan Proposisi terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menunjukkan bahwa $R=P\\cup Q$ memuat seluruh titik partisi $P$ dan $Q$, sehingga $R$ menjadi partisi penghalus bagi keduanya."
          }
        ]
      }
    ],
    "blocks": []
  },
  {
    "title": "Integral Darboux",
    "subsections": [
      {
        "title": "Kriteria Darboux",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Kriteria Darboux",
            "body": "Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ Darboux integrable jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sedemikian sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas.\nDibuktikan bahwa fungsi $f$ Darboux integrable jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ yang memenuhi\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nPembuktian dilakukan dalam dua arah.\n\\,\n($\\Rightarrow$)\nDiketahui fungsi $f$ Darboux integrable.\nDibuktikan bahwa untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$.\nDituliskan\n\\[\nI=\\underline{\\int_a^b}f=\\overline{\\int_a^b}f.\n\\]\nDiambil sebarang $\\varepsilon>0$. Karena $I$ merupakan supremum dari seluruh lower sum, terdapat partisi $P_1$ sehingga\n\\[\nI-\\frac{\\varepsilon}{2}<L(f,P_1)\\le I.\n\\]\nKarena $I$ merupakan infimum dari seluruh upper sum, terdapat partisi $P_2$ sehingga\n\\[\nI\\le U(f,P_2)<I+\\frac{\\varepsilon}{2}.\n\\]\nDibentuk partisi penghalus bersama\n\\[\nR=P_1\\cup P_2.\n\\]\nBerdasarkan Lemma terkait dan Lemma terkait, berlaku\n\\[\nL(f,P_1)\\le L(f,R),\n\\qquad\nU(f,R)\\le U(f,P_2).\n\\]\nDengan demikian,\n\\[\\begin{aligned}\n0\\le U(f,R)-L(f,R)\n&\\le U(f,P_2)-L(f,P_1)\n&<\\left(I+\\frac{\\varepsilon}{2}\\right)-\\left(I-\\frac{\\varepsilon}{2}\\right)\n&=\\varepsilon.\n\\end{aligned}\\]\nJadi terdapat partisi $R$ yang memenuhi $U(f,R)-L(f,R)<\\varepsilon$.\n\\,\n($\\Leftarrow$)\nDiketahui bahwa untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan $U(f,P)-L(f,P)<\\varepsilon$.\nDibuktikan bahwa fungsi $f$ Darboux integrable.\nDiambil sebarang $\\varepsilon>0$, kemudian dipilih partisi $P$ yang memenuhi\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan definisi lower dan upper integral,\n\\[\nL(f,P)\\le \\underline{\\int_a^b}f\n\\le \\overline{\\int_a^b}f\\le U(f,P).\n\\]\nOleh karena itu,\n\\[\n0\\le\n\\overline{\\int_a^b}f-\\underline{\\int_a^b}f\n\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh\n\\[\n\\overline{\\int_a^b}f-\\underline{\\int_a^b}f=0.\n\\]\nJadi lower integral sama dengan upper integral, sehingga $f$ Darboux integrable.\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh ekuivalensi yang dinyatakan. Dengan demikian, Teorema terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menggambarkan bahwa celah $U(f,P)-L(f,P)$ dapat dibuat sebarang kecil ketika partisi dipilih secara sesuai."
          }
        ]
      },
      {
        "title": "Interpretasi melalui osilasi lokal",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Pada subinterval $I_i$, didefinisikan\n\\[\n\\omega_i=M_i-m_i.\n\\]\nDengan demikian,\n\\[\nU(f,P)-L(f,P)=\\sum_{i=1}^n\\omega_i\\Delta x_i.\n\\]\nDengan demikian kriteria Darboux menyatakan bahwa fungsi integrable apabila total osilasi tertimbang dapat dibuat sekecil yang diinginkan melalui pemilihan partisi yang sesuai."
          }
        ]
      }
    ],
    "blocks": [
      {
        "kind": "definition",
        "title": "Lower Darboux integral",
        "body": "Lower Darboux integral didefinisikan oleh\n\\[\n\\underline{\\int_a^b} f\n=\n\\sup\\{L(f,P):P\\in\\mathcal{P}[a,b]\\}.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$. Ditentukan lower Darboux integral\n\\[\n\\underline{\\int_0^1}x\\,\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDitentukan nilai lower Darboux integral $\\underline{\\int_0^1}x\\,\\,d x$.\nPertama dibuktikan bahwa setiap lower Darboux sum tidak melebihi $1/2$. Diambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nKarena $f(x)=x$ naik, diperoleh $m_i=x_{i-1}$. Oleh karena itu,\n\\[\nL(f,P)=\\sum_{i=1}^{n}x_{i-1}(x_i-x_{i-1}).\n\\]\nUntuk setiap $i$ berlaku\n\\[\n2x_{i-1}(x_i-x_{i-1})\n\\le (x_i+x_{i-1})(x_i-x_{i-1})\n=x_i^2-x_{i-1}^2.\n\\]\nSetelah dijumlahkan untuk $i=1,\\ldots,n$ diperoleh\n\\[\n2L(f,P)\\le\\sum_{i=1}^{n}(x_i^2-x_{i-1}^2)=1.\n\\]\nDengan demikian,\n\\[\nL(f,P)\\le\\frac12\n\\]\nuntuk setiap partisi $P$. Jadi $1/2$ merupakan batas atas bagi himpunan seluruh lower sum.\nSelanjutnya digunakan partisi seragam\n\\[\nP_n=\\left\\{\\frac{i}{n}:i=0,1,\\ldots,n\\right\\}.\n\\]\nLower sum-nya adalah\n\\[\\begin{aligned}\nL(f,P_n)\n&=\\frac1n\\sum_{i=1}^{n}\\frac{i-1}{n}\n&=\\frac{n-1}{2n}.\n\\end{aligned}\\]\nNilai tersebut memenuhi\n\\[\n\\lim_{n\\to\\infty}L(f,P_n)=\\frac12.\n\\]\nDengan demikian, terdapat lower sum yang dapat dibuat sedekat yang diinginkan dengan $1/2$ dari bawah. Berdasarkan definisi supremum,\n\\[\n\\boxed{\\underline{\\int_0^1}x\\,\\,d x=\\frac12}.\n\\]\nNilai lower Darboux integral telah ditentukan."
      },
      {
        "kind": "paragraph",
        "text": "Gambar hasil terkait menegaskan bahwa lower Darboux integral bukanlah satu lower sum tertentu. Nilai tersebut merupakan batas atas terkecil dari himpunan semua nilai $L(f,P)$. Dengan demikian, setiap lower sum memenuhi\n\\[\nL(f,P)\\le \\underline{\\int_a^b}f,\n\\]\ndan untuk setiap $\\varepsilon>0$ terdapat suatu partisi $P$ sehingga\n\\[\n\\underline{\\int_a^b}f-\\varepsilon<L(f,P)\\le \\underline{\\int_a^b}f.\n\\]"
      },
      {
        "kind": "definition",
        "title": "Upper Darboux integral",
        "body": "Upper Darboux integral didefinisikan oleh\n\\[\n\\overline{\\int_a^b} f\n=\n\\inf\\{U(f,P):P\\in\\mathcal{P}[a,b]\\}.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$. Ditentukan upper Darboux integral\n\\[\n\\overline{\\int_0^1}x\\,\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDitentukan nilai upper Darboux integral $\\overline{\\int_0^1}x\\,\\,d x$.\nPertama dibuktikan bahwa setiap upper Darboux sum tidak lebih kecil daripada $1/2$. Diambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nKarena $f(x)=x$ naik, diperoleh $M_i=x_i$. Oleh karena itu,\n\\[\nU(f,P)=\\sum_{i=1}^{n}x_i(x_i-x_{i-1}).\n\\]\nUntuk setiap $i$ berlaku\n\\[\n2x_i(x_i-x_{i-1})\n\\ge (x_i+x_{i-1})(x_i-x_{i-1})\n=x_i^2-x_{i-1}^2.\n\\]\nSetelah dijumlahkan diperoleh\n\\[\n2U(f,P)\\ge\\sum_{i=1}^{n}(x_i^2-x_{i-1}^2)=1.\n\\]\nDengan demikian,\n\\[\nU(f,P)\\ge\\frac12\n\\]\nuntuk setiap partisi $P$. Jadi $1/2$ merupakan batas bawah bagi himpunan seluruh upper sum.\nDigunakan partisi seragam $P_n=\\{i/n:i=0,1,\\ldots,n\\}$. Upper sum-nya adalah\n\\[\\begin{aligned}\nU(f,P_n)\n&=\\frac1n\\sum_{i=1}^{n}\\frac{i}{n}\n&=\\frac{n+1}{2n}.\n\\end{aligned}\\]\nBerlaku\n\\[\n\\lim_{n\\to\\infty}U(f,P_n)=\\frac12.\n\\]\nJadi upper sum dapat dibuat sedekat yang diinginkan dengan $1/2$ dari atas. Berdasarkan definisi infimum,\n\\[\n\\boxed{\\overline{\\int_0^1}x\\,\\,d x=\\frac12}.\n\\]\nNilai upper Darboux integral telah ditentukan."
      },
      {
        "kind": "paragraph",
        "text": "Gambar hasil terkait menegaskan bahwa upper Darboux integral bukanlah satu upper sum tertentu. Nilai tersebut merupakan batas bawah terbesar dari himpunan semua nilai $U(f,P)$. Dengan demikian, setiap upper sum memenuhi\n\\[\n\\overline{\\int_a^b}f\\le U(f,P),\n\\]\ndan untuk setiap $\\varepsilon>0$ terdapat suatu partisi $P$ sehingga\n\\[\n\\overline{\\int_a^b}f\\le U(f,P)<\\overline{\\int_a^b}f+\\varepsilon.\n\\]"
      },
      {
        "kind": "proposition",
        "title": "",
        "body": "Untuk setiap fungsi terbatas $f:[a,b]\\to\\mathbb{R}$,\n\\[\n\\underline{\\int_a^b} f\\le \\overline{\\int_a^b} f.\n\\]",
        "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas.\nDibuktikan bahwa\n\\[\n\\underline{\\int_a^b}f\\le\\overline{\\int_a^b}f.\n\\]\nBerdasarkan Proposisi terkait, untuk setiap partisi $P,Q$ berlaku\n\\[\nL(f,P)\\le U(f,Q).\n\\]\nDitetapkan sebarang partisi $Q$. Karena $U(f,Q)$ merupakan batas atas bagi seluruh bilangan $L(f,P)$, maka\n\\[\n\\sup_P L(f,P)\\le U(f,Q).\n\\]\nKetaksamaan ini berlaku untuk setiap partisi $Q$. Oleh karena itu, $\\sup_P L(f,P)$ merupakan batas bawah bagi himpunan seluruh upper sum, sehingga\n\\[\n\\sup_P L(f,P)\\le \\inf_Q U(f,Q).\n\\]\nBerdasarkan definisi lower dan upper Darboux integral, diperoleh\n\\[\n\\underline{\\int_a^b}f\\le\\overline{\\int_a^b}f.\n\\]\nDengan demikian, Proposisi terkait terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan Proposisi terkait",
        "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$. Dibuktikan bahwa lower Darboux integral tidak melebihi upper Darboux integral.",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDibuktikan bahwa\n\\[\n\\underline{\\int_0^1}x\\,\\,d x\n\\le\n\\overline{\\int_0^1}x\\,\\,d x.\n\\]\nPada contoh sebelumnya telah dibuktikan secara terpisah bahwa\n\\[\n\\underline{\\int_0^1}x\\,\\,d x=\\frac12\n\\]\ndan\n\\[\n\\overline{\\int_0^1}x\\,\\,d x=\\frac12.\n\\]\nOleh karena itu,\n\\[\n\\underline{\\int_0^1}x\\,\\,d x\n=\\frac12\n\\le\\frac12\n=\\overline{\\int_0^1}x\\,\\,d x.\n\\]\nPada contoh ini ketaksamaan dalam Proposisi terkait berlaku sebagai kesamaan.\nDengan demikian, contoh penerapan Proposisi terkait terbukti."
      },
      {
        "kind": "definition",
        "title": "Darboux integrable",
        "body": "Fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ disebut Darboux integrable apabila\n\\[\n\\underline{\\int_a^b} f=\\overline{\\int_a^b} f.\n\\]\nNilai bersama tersebut disebut integral Darboux dan ditulis\n\\[\n\\int_a^b f(x)\\,d x.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Diberikan fungsi $f(x)=x$ pada $[0,1]$. Dibuktikan bahwa $f$ Darboux integrable dan ditentukan nilai\n\\[\n\\int_0^1x\\,\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f(x)=x$ pada $[0,1]$.\nDibuktikan bahwa $f$ Darboux integrable dan ditentukan nilai integral Darbouxnya.\nDari dua contoh sebelumnya telah dibuktikan bahwa\n\\[\n\\underline{\\int_0^1}x\\,\\,d x=\\frac12\n\\]\ndan\n\\[\n\\overline{\\int_0^1}x\\,\\,d x=\\frac12.\n\\]\nDengan demikian,\n\\[\n\\underline{\\int_0^1}x\\,\\,d x\n=\n\\overline{\\int_0^1}x\\,\\,d x.\n\\]\nBerdasarkan definisi Darboux integrable, kesamaan lower dan upper Darboux integral menunjukkan bahwa $f(x)=x$ Darboux integrable pada $[0,1]$. Nilai integralnya adalah nilai bersama tersebut, yaitu\n\\[\n\\boxed{\\int_0^1x\\,\\,d x=\\frac12}.\n\\]\nDengan demikian, pernyataan pada contoh tersebut terbukti."
      }
    ]
  },
  {
    "title": "Perbandingan dan Ekuivalensi Riemann--Darboux",
    "subsections": [
      {
        "title": "Visualisasi perbandingan",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Ekuivalensi Riemann--Darboux",
            "body": "Untuk fungsi terbatas $f:[a,b]\\to\\mathbb{R}$, pernyataan berikut ekuivalen:\n•  $f$ Riemann integrable;\n•  $f$ Darboux integrable;\n•  untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sehingga $U(f,P)-L(f,P)<\\varepsilon$.\nJika kondisi-kondisi tersebut terpenuhi, nilai integral Riemann dan Darboux sama.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas.\nDibuktikan bahwa integrabilitas Riemann, integrabilitas Darboux, dan Kriteria Darboux saling ekuivalen, serta nilai integral Riemann dan Darboux sama. Ekuivalensi antara integrabilitas Darboux dan Kriteria Darboux telah diperoleh pada Teorema terkait. Oleh karena itu, hubungan antara integral Darboux dan integral Riemann dibuktikan dalam dua arah.\n\\,\n($\\Rightarrow$) Darboux ke Riemann\nDiketahui fungsi $f$ Darboux integrable dengan nilai integral $I$.\nDibuktikan bahwa fungsi $f$ Riemann integrable dan nilai integral Riemannnya adalah $I$.\nKarena $f$ terbatas, terdapat $M\\ge0$ sehingga $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$. Diambil sebarang $\\varepsilon>0$. Berdasarkan Teorema terkait, dipilih partisi tetap\n\\[\nP_0=\\{a=c_0<c_1<\\cdots<c_m=b\\}\n\\]\nyang memenuhi\n\\[\nU(f,P_0)-L(f,P_0)<\\frac{\\varepsilon}{2}.\n\\]\nJika $M=0$, maka $f$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $M>0$. Jika $m=1$, tidak terdapat titik interior pada $P_0$; jika $m>1$, dipilih $\\delta>0$ sedemikian sehingga\n\\[\n2M(m-1)\\delta<\\frac{\\varepsilon}{2}.\n\\]\nDiambil sebarang tagged partition $Q^*$ dengan $\\|Q\\|<\\delta$. Subinterval-subinterval $Q$ dipisahkan menjadi subinterval yang tidak memuat titik interior $c_1,\\ldots,c_{m-1}$ dan subinterval yang memuat sedikitnya satu titik interior tersebut. Subinterval jenis kedua berjumlah paling banyak $m-1$ dan total panjangnya kurang dari $(m-1)\\delta$.\nPada subinterval jenis pertama, nilai $f(t_i)$ dijepit oleh infimum dan supremum dari subinterval $P_0$ yang memuatnya. Pada subinterval jenis kedua, karena $|f|\\le M$, galat maksimum terhadap penjepit Darboux dibatasi oleh dua kali $M$ dikalikan total panjang subinterval jenis kedua. Dengan demikian diperoleh\n\\[\nL(f,P_0)-2M(m-1)\\delta\n\\le S(f,Q^*)\n\\le U(f,P_0)+2M(m-1)\\delta.\n\\]\nKarena\n\\[\nL(f,P_0)\\le I\\le U(f,P_0),\n\\]\nberlaku\n\\[\n|S(f,Q^*)-I|\n\\le U(f,P_0)-L(f,P_0)+2M(m-1)\\delta\n<\\varepsilon.\n\\]\nKarena $Q^*$ dipilih sebarang selama $\\|Q\\|<\\delta$, definisi integral Riemann terpenuhi. Jadi $f$ Riemann integrable dengan integral $I$.\n\\,\n($\\Leftarrow$) Riemann ke Darboux\nDiketahui fungsi $f$ Riemann integrable dengan integral $I$.\nDibuktikan bahwa fungsi $f$ Darboux integrable dan nilai integral Darbouxnya adalah $I$.\nDiambil sebarang $\\varepsilon>0$. Berdasarkan definisi integral Riemann, terdapat $\\delta>0$ sehingga untuk setiap tagged partition $P^*$ dengan $\\|P\\|<\\delta$ berlaku\n\\[\n|S(f,P^*)-I|<\\frac{\\varepsilon}{4}.\n\\]\nDipilih partisi $P=\\{x_0,\\ldots,x_n\\}$ dengan $\\|P\\|<\\delta$. Pada setiap subinterval $I_i=[x_{i-1},x_i]$, berdasarkan Lemma terkait, dipilih $s_i,r_i\\in I_i$ yang memenuhi\n\\[\nM_i-\\frac{\\varepsilon}{4(b-a)}<f(s_i)\\le M_i,\n\\qquad\nm_i\\le f(r_i)<m_i+\\frac{\\varepsilon}{4(b-a)}.\n\\]\nDibentuk dua jumlah Riemann\n\\[\nS_U=\\sum_{i=1}^n f(s_i)\\Delta x_i,\n\\qquad\nS_L=\\sum_{i=1}^n f(r_i)\\Delta x_i.\n\\]\nDari pemilihan $s_i$ diperoleh\n\\[\nS_U>U(f,P)-\\frac{\\varepsilon}{4},\n\\]\nAkibatnya,\n\\[\nU(f,P)<S_U+\\frac{\\varepsilon}{4}<I+\\frac{\\varepsilon}{2}.\n\\]\nDengan cara yang sama, dari pemilihan $r_i$ diperoleh\n\\[\nS_L<L(f,P)+\\frac{\\varepsilon}{4},\n\\]\nAkibatnya,\n\\[\nL(f,P)>S_L-\\frac{\\varepsilon}{4}>I-\\frac{\\varepsilon}{2}.\n\\]\nAkibatnya,\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Teorema terkait, $f$ Darboux integrable. Karena untuk setiap partisi berlaku\n\\[\nL(f,P)\\le I\\le U(f,P)\n\\]\ndalam limit yang dihasilkan, nilai integral Darboux sama dengan $I$.\nBerdasarkan pembuktian arah Darboux ke Riemann dan arah Riemann ke Darboux, serta Teorema terkait, ketiga pernyataan pada teorema saling ekuivalen. Dengan demikian, Teorema terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait merangkum bahwa integrabilitas Riemann, integrabilitas Darboux, dan Kriteria Darboux merupakan tiga formulasi yang ekuivalen untuk fungsi terbatas pada interval tertutup."
          },
          {
            "kind": "note",
            "title": "",
            "body": "Pada pembuktian arah Darboux ke Riemann, perhatian terhadap partisi yang tidak selalu merupakan partisi penghalus dari $P_0$ diperlukan karena definisi Riemann berbasis mesh harus berlaku untuk setiap partisi yang cukup halus."
          }
        ]
      }
    ],
    "blocks": []
  },
  {
    "title": "Kelas Fungsi yang Riemann Integrable",
    "subsections": [
      {
        "title": "Fungsi kontinu",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Jika $f$ kontinu pada $[a,b]$, maka $f$ Riemann integrable pada $[a,b]$.",
            "proof": "Diketahui fungsi $f$ kontinu pada interval tertutup $[a,b]$.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[a,b]$.\nKarena $[a,b]$ kompak dan $f$ kontinu, berdasarkan Teorema Heine--Cantor, $f$ kontinu seragam pada $[a,b]$. Diambil sebarang $\\varepsilon>0$. Dari kontinuitas seragam, terdapat $\\delta>0$ sehingga\n\\[\n|x-y|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(x)-f(y)|<\\frac{\\varepsilon}{b-a}.\n\\]\nDipilih partisi $P$ dengan $\\|P\\|<\\delta$. Pada setiap subinterval $I_i=[x_{i-1},x_i]$, untuk sebarang $x,y\\in I_i$ berlaku\n\\[\n|x-y|\\le\\Delta x_i<\\delta.\n\\]\nDengan demikian,\n\\[\n|f(x)-f(y)|<\\frac{\\varepsilon}{b-a}.\n\\]\nKarena $f$ kontinu pada interval kompak $I_i$, maksimum dan minimum dicapai. Oleh karena itu,\n\\[\nM_i-m_i<\\frac{\\varepsilon}{b-a}.\n\\]\nSelanjutnya,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\n&=\\sum_{i=1}^n(M_i-m_i)\\Delta x_i\n&<\\frac{\\varepsilon}{b-a}\\sum_{i=1}^n\\Delta x_i\n&=\\frac{\\varepsilon}{b-a}(b-a)\n&=\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan Teorema terkait, $f$ Riemann integrable pada $[a,b]$.\nDengan demikian, Teorema terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menunjukkan bahwa kontinuitas seragam mengendalikan osilasi fungsi pada setiap subinterval yang cukup pendek."
          }
        ]
      },
      {
        "title": "Fungsi monoton",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Jika $f$ monoton pada $[a,b]$, maka $f$ Riemann integrable.",
            "proof": "Diketahui fungsi $f$ monoton pada $[a,b]$.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[a,b]$.\nPembuktian dituliskan untuk kasus $f$ monoton naik. Kasus monoton turun diperoleh secara analog dengan menukar peran supremum dan infimum.\nDiambil partisi seragam\n\\[\nx_i=a+i\\frac{b-a}{n},\n\\qquad\n\\Delta x=\\frac{b-a}{n}.\n\\]\nKarena $f$ monoton naik, pada setiap subinterval $[x_{i-1},x_i]$ berlaku\n\\[\nm_i=f(x_{i-1}),\n\\qquad\nM_i=f(x_i).\n\\]\nOleh karena itu,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\n&=\\sum_{i=1}^n\\bigl(f(x_i)-f(x_{i-1})\\bigr)\\Delta x\n&=\\frac{b-a}{n}\\sum_{i=1}^n\\bigl(f(x_i)-f(x_{i-1})\\bigr).\n\\end{aligned}\\]\nJumlah pada ruas kanan bersifat teleskopik, sehingga\n\\[\n\\sum_{i=1}^n\\bigl(f(x_i)-f(x_{i-1})\\bigr)=f(b)-f(a).\n\\]\nDengan demikian,\n\\[\nU(f,P)-L(f,P)\n=\\frac{(b-a)(f(b)-f(a))}{n}.\n\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih $n$ cukup besar sehingga\n\\[\n\\frac{(b-a)(f(b)-f(a))}{n}<\\varepsilon.\n\\]\nBerdasarkan Teorema terkait, $f$ Riemann integrable.\nDengan demikian, Teorema terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Pada Gambar hasil terkait, lower sum menggunakan nilai ujung kiri dan upper sum menggunakan nilai ujung kanan, sehingga selisih keduanya membentuk jumlah teleskopik."
          }
        ]
      },
      {
        "title": "Fungsi step dan diskontinuitas berhingga",
        "blocks": [
          {
            "kind": "definition",
            "title": "Fungsi step",
            "body": "Fungsi $s:[a,b]\\to\\mathbb{R}$ disebut fungsi step jika terdapat partisi\n\\[\na=c_0<c_1<\\cdots<c_m=b\n\\]\nsedemikian sehingga $s$ konstan pada setiap interval terbuka $(c_{j-1},c_j)$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Diberikan fungsi\n\\[\ns(x)=\n\\begin{cases}\n2,&0\\le x<1/3,\n5,&1/3\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $s$ merupakan fungsi step pada $[0,1]$.",
            "solution": "Diketahui fungsi $s:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\ns(x)=\n\\begin{cases}\n2,&0\\le x<1/3,\n5,&1/3\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $s$ merupakan fungsi step pada $[0,1]$.\nDipilih partisi\n\\[\n0=c_0<c_1=\\frac13<c_2=1.\n\\]\nPada interval terbuka $(c_0,c_1)=(0,1/3)$ berlaku\n\\[\ns(x)=2.\n\\]\nHal ini menunjukkan bahwa $s$ konstan pada interval tersebut. Pada interval terbuka $(c_1,c_2)=(1/3,1)$ berlaku\n\\[\ns(x)=5.\n\\]\nHal ini menunjukkan bahwa $s$ juga konstan pada interval tersebut.\nTerdapat partisi berhingga yang membuat $s$ konstan pada setiap interval terbuka antar titik partisi. Berdasarkan definisi fungsi step, $s$ merupakan fungsi step pada $[0,1]$.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "proposition",
            "title": "",
            "body": "Setiap fungsi step pada $[a,b]$ Riemann integrable.",
            "proof": "Diketahui fungsi step $s$ pada $[a,b]$.\nDibuktikan bahwa fungsi $s$ Riemann integrable pada $[a,b]$.\nDiandaikan titik-titik loncatan potensial fungsi $s$ adalah $c_1,\\ldots,c_{m-1}$. Karena $s$ terbatas, terdapat $M\\ge0$ sehingga $|s(x)|\\le M$ pada $[a,b]$.\nJika $M=0$, maka $s$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $M>0$. Diambil sebarang $\\varepsilon>0$. Di sekitar setiap titik $c_j$ dipilih interval terbuka kecil $J_j$ sedemikian sehingga\n\\[\n\\sum_{j=1}^{m-1}|J_j|<\\frac{\\varepsilon}{2M}.\n\\]\nDibentuk partisi $P$ yang memuat seluruh ujung interval $J_j$ dan seluruh titik $c_j$.\nPada subinterval partisi yang tidak beririsan dengan interval kecil di sekitar titik loncatan, fungsi $s$ konstan. Oleh karena itu, pada subinterval tersebut berlaku\n\\[\nM_i-m_i=0.\n\\]\nPada subinterval yang berada dalam gabungan interval $J_j$, osilasi $s$ paling besar $2M$. Dengan demikian,\n\\[\\begin{aligned}\nU(s,P)-L(s,P)\n&=\\sum_i(M_i-m_i)\\Delta x_i\n&\\le 2M\\sum_{j=1}^{m-1}|J_j|\n&<\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan Teorema terkait, $s$ Riemann integrable.\nDengan demikian, Proposisi terkait terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan Proposisi terkait",
            "body": "Diberikan fungsi\n\\[\ns(x)=\n\\begin{cases}\n2,&0\\le x<1/3,\n5,&1/3\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $s$ Riemann integrable pada $[0,1]$.",
            "solution": "Diketahui fungsi $s$ yang bernilai $2$ pada $[0,1/3)$ dan bernilai $5$ pada $[1/3,1]$.\nDibuktikan bahwa $s$ Riemann integrable pada $[0,1]$.\nPada contoh sebelumnya telah dibuktikan bahwa $s$ merupakan fungsi step dengan partisi\n\\[\n0<\\frac13<1.\n\\]\nProposisi terkait menyatakan bahwa setiap fungsi step pada interval tertutup merupakan fungsi Riemann integrable. Karena $s$ memenuhi definisi fungsi step, proposisi tersebut dapat diterapkan langsung.\nDiperoleh bahwa $s$ Riemann integrable pada $[0,1]$.\nDengan demikian, contoh penerapan Proposisi terkait terbukti."
          },
          {
            "kind": "proposition",
            "title": "",
            "body": "Jika $f:[a,b]\\to\\mathbb{R}$ terbatas dan kontinu kecuali pada berhingga banyak titik, maka $f$ Riemann integrable.",
            "proof": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas dan kontinu kecuali pada berhingga banyak titik.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[a,b]$.\nDiandaikan titik-titik diskontinuitas $f$ adalah $c_1,\\ldots,c_m$. Karena $f$ terbatas, terdapat $M\\ge0$ sehingga $|f(x)|\\le M$ pada $[a,b]$.\nJika $M=0$, maka $f$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $M>0$. Diambil sebarang $\\varepsilon>0$. Di sekitar setiap $c_j$ dipilih interval terbuka kecil $J_j$ sehingga\n\\[\n\\sum_{j=1}^m|J_j|<\\frac{\\varepsilon}{4M}.\n\\]\nPada gabungan interval tersebut, osilasi $f$ paling besar $2M$. Oleh karena itu, kontribusi bagian tersebut terhadap $U-L$ kurang dari\n\\[\n2M\\cdot\\frac{\\varepsilon}{4M}=\\frac{\\varepsilon}{2}.\n\\]\nHimpunan tertutup yang tersisa setelah lingkungan-lingkungan kecil tersebut dikeluarkan merupakan gabungan berhingga interval tertutup yang tidak mengandung titik diskontinuitas. Pada setiap komponen tertutup itu, $f$ kontinu, sehingga kontinu seragam. Dipilih partisi yang cukup halus pada bagian kontinu sehingga osilasi pada setiap subintervalnya kurang dari\n\\[\n\\frac{\\varepsilon}{2(b-a)}.\n\\]\nKontribusi bagian kontinu terhadap $U-L$ kurang dari\n\\[\n\\frac{\\varepsilon}{2(b-a)}(b-a)=\\frac{\\varepsilon}{2}.\n\\]\nDengan menggabungkan kedua bagian, diperoleh suatu partisi $P$ dengan\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Teorema terkait, $f$ Riemann integrable.\nDengan demikian, Proposisi terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menunjukkan bahwa daerah di sekitar titik diskontinuitas dapat ditutup oleh interval dengan total panjang kecil, sedangkan pada bagian lainnya osilasi dikendalikan oleh kontinuitas seragam."
          },
          {
            "kind": "example",
            "title": "Fungsi loncatan sebagai penerapan Proposisi terkait",
            "body": "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\n0,&0\\le x<\\frac12,\n1,&\\frac12\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $f$ Riemann integrable pada $[0,1]$ dan\n\\[\n\\int_0^1f(x)\\,d x=\\frac12.\n\\]",
            "solution": "Diketahui fungsi\n\\[\nf(x)=\n\\begin{cases}\n0,&0\\le x<\\frac12,\n1,&\\frac12\\le x\\le1.\n\\end{cases}\n\\]\nDibuktikan bahwa $f$ Riemann integrable pada $[0,1]$ dan ditentukan nilai integralnya.\nFungsi $f$ kontinu pada setiap titik selain $x=1/2$. Jadi $f$ hanya mempunyai satu titik diskontinuitas. Berdasarkan Proposisi terkait, $f$ Riemann integrable.\nNilai integral dapat diverifikasi langsung dengan pendekatan Darboux. Diambil sebarang $\\varepsilon>0$. Dipilih $0<\\eta<\\min\\{\\varepsilon,1/2\\}$ dan partisi\n\\[\nP_\\eta=\\left\\{0,\\frac12-\\eta,\\frac12,1\\right\\}.\n\\]\nPada $[0,1/2-\\eta]$ fungsi identik $0$. Pada $[1/2,1]$ fungsi identik $1$. Hanya subinterval $[1/2-\\eta,1/2]$ yang memuat dua nilai fungsi $0$ dan $1$. Oleh karena itu,\n\\[\nL(f,P_\\eta)=\\frac12\n\\]\ndan\n\\[\nU(f,P_\\eta)=\\frac12+\\eta.\n\\]\nDiperoleh\n\\[\n0\\le U(f,P_\\eta)-L(f,P_\\eta)=\\eta<\\varepsilon.\n\\]\nSelain itu, semua lower sum tidak melebihi integral dan semua upper sum tidak kurang daripada integral. Karena lower sum di atas selalu bernilai $1/2$ dan upper sum dapat dibuat sedekat yang diinginkan dengan $1/2$, diperoleh\n\\[\n\\underline{\\int_0^1}f\n=\n\\overline{\\int_0^1}f\n=\\frac12.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1f(x)\\,d x=\\frac12}.\n\\]\nPernyataan pada contoh tersebut terbukti."
          }
        ]
      },
      {
        "title": "Fungsi Dirichlet dan Thomae",
        "blocks": [
          {
            "kind": "example",
            "title": "Fungsi Dirichlet",
            "body": "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nDibuktikan bahwa fungsi Dirichlet tidak Darboux integrable dan tidak Riemann integrable pada $[0,1]$.",
            "solution": "Diketahui fungsi Dirichlet $f:[0,1]\\to\\mathbb{R}$ dengan $f(x)=1$ untuk $x\\in\\mathbb{Q}$ dan $f(x)=0$ untuk $x\\notin\\mathbb{Q}$.\nDibuktikan bahwa $f$ tidak Darboux integrable dan tidak Riemann integrable pada $[0,1]$.\nDiambil sebarang partisi\n\\[\nP=\\{0=x_0<x_1<\\cdots<x_n=1\\}.\n\\]\nSetiap subinterval $[x_{i-1},x_i]$ mengandung bilangan rasional dan bilangan irasional karena kedua himpunan tersebut rapat di $\\mathbb{R}$. Oleh karena itu,\n\\[\nm_i=0,\n\\qquad\nM_i=1\n\\]\nuntuk setiap $i$. Lower Darboux sum menjadi\n\\[\nL(f,P)=\\sum_{i=1}^{n}0\\cdot\\Delta x_i=0,\n\\]\nsedangkan upper Darboux sum menjadi\n\\[\nU(f,P)=\\sum_{i=1}^{n}1\\cdot\\Delta x_i\n=\\sum_{i=1}^{n}\\Delta x_i\n=1.\n\\]\nKarena nilai ini berlaku untuk setiap partisi,\n\\[\n\\underline{\\int_0^1}f=0,\n\\qquad\n\\overline{\\int_0^1}f=1.\n\\]\nLower dan upper Darboux integral tidak sama. Berdasarkan definisi, $f$ tidak Darboux integrable. Berdasarkan ekuivalensi integral Riemann dan Darboux, $f$ juga tidak Riemann integrable.\nDengan demikian, pernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait menekankan bahwa bilangan rasional dan irasional sama-sama rapat, sehingga setiap subinterval memiliki infimum $0$ dan supremum $1$."
          },
          {
            "kind": "example",
            "title": "Fungsi Thomae",
            "body": "Didefinisikan fungsi Thomae\n\\[\nf(x)=\n\\begin{cases}\n\\frac1q,&x=\\frac pq,\\ (p,q)=1,\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nDibuktikan bahwa $f$ Riemann integrable dan\n\\[\n\\int_0^1f(x)\\,d x=0.\n\\]",
            "solution": "Diketahui fungsi Thomae $f:[0,1]\\to\\mathbb{R}$.\nDibuktikan bahwa $f$ Riemann integrable dan\n\\[\n\\int_0^1f(x)\\,d x=0.\n\\]\nSetiap subinterval dari $[0,1]$ mengandung bilangan irasional. Nilai fungsi pada bilangan irasional adalah $0$. Oleh karena itu, infimum $f$ pada setiap subinterval adalah $0$. Untuk setiap partisi $P$ berlaku\n\\[\nL(f,P)=0.\n\\]\nJadi lower Darboux integral bernilai $0$.\nDiambil sebarang $\\varepsilon>0$. Dipilih bilangan bulat $N$ sedemikian sehingga\n\\[\n\\frac1N<\\frac{\\varepsilon}{2}.\n\\]\nDiperhatikan himpunan\n\\[\nF_N=\\left\\{\\frac pq\\in[0,1]:(p,q)=1,\\ q\\le N\\right\\}.\n\\]\nHimpunan $F_N$ berhingga. Setiap titik pada $F_N$ ditutup oleh interval terbuka sedemikian sehingga jumlah seluruh panjang interval tersebut kurang dari $\\varepsilon/2$.\nDibentuk partisi $P$ yang memuat seluruh ujung interval penutup tersebut. Pada subinterval yang tidak beririsan dengan interval penutup, tidak terdapat rasional tereduksi dengan penyebut $q\\le N$. Setiap nilai positif fungsi pada bagian tersebut memenuhi\n\\[\nf(x)=\\frac1q<\\frac1N<\\frac{\\varepsilon}{2}.\n\\]\nKarena panjang total $[0,1]$ adalah $1$, kontribusi upper sum dari bagian ini kurang dari $\\varepsilon/2$.\nPada bagian yang berada di dalam interval penutup, berlaku $0\\le f(x)\\le1$. Karena jumlah panjang interval penutup kurang dari $\\varepsilon/2$, kontribusi upper sum dari bagian ini kurang dari $\\varepsilon/2$. Akibatnya,\n\\[\nU(f,P)<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon.\n\\]\nKarena $L(f,P)=0$, diperoleh\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Kriteria Darboux, $f$ Darboux integrable. Ekuivalensi Riemann--Darboux memberikan bahwa $f$ Riemann integrable. Lower integral bernilai $0$ dan upper integral dapat dibuat lebih kecil daripada setiap $\\varepsilon>0$, sehingga nilai integralnya adalah $0$.\nDengan demikian,\n\\[\n\\boxed{\\int_0^1f(x)\\,d x=0}.\n\\]\nPernyataan pada contoh tersebut terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Gambar hasil terkait memperlihatkan bahwa nilai yang relatif tinggi hanya muncul pada bilangan rasional dengan penyebut kecil, sedangkan nilai pada rasional dengan penyebut besar semakin dekat ke nol."
          },
          {
            "kind": "proposition",
            "title": "Integrabilitas fungsi Thomae",
            "body": "Fungsi Thomae pada $[0,1]$ Riemann integrable dan\n\\[\n\\int_0^1 f(x)\\,\\,d x=0.\n\\]",
            "proof": "Diketahui fungsi $f$ merupakan fungsi Thomae pada $[0,1]$.\nDibuktikan bahwa fungsi $f$ Riemann integrable dan\n\\[\n\\int_0^1f(x)\\,\\,d x=0.\n\\]\nKarena setiap subinterval dari $[0,1]$ memuat bilangan irasional dan nilai fungsi Thomae pada setiap bilangan irasional adalah $0$, infimum fungsi pada setiap subinterval adalah $0$. Dengan demikian, untuk setiap partisi $P$ berlaku\n\\[\nL(f,P)=0.\n\\]\nSelanjutnya dibuktikan bahwa upper sum dapat dibuat sekecil yang dikehendaki.\nDiambil sebarang $\\varepsilon>0$. Dipilih $N\\in\\mathbb{N}$ sehingga\n\\[\n\\frac1N<\\frac{\\varepsilon}{2}.\n\\]\nHimpunan bilangan rasional $p/q\\in[0,1]$ dalam bentuk paling sederhana dengan $q\\le N$ berhingga. Dituliskan titik-titik tersebut sebagai\n\\[\nr_1,r_2,\\ldots,r_k.\n\\]\nDi sekitar setiap $r_j$ dipilih interval kecil $J_j$ sehingga\n\\[\n\\sum_{j=1}^k|J_j|<\\frac{\\varepsilon}{2}.\n\\]\nDibentuk partisi $P$ yang memuat seluruh ujung interval $J_j$.\nPada setiap subinterval yang tidak beririsan dengan $J_1\\cup\\cdots\\cup J_k$, setiap bilangan rasional di dalamnya mempunyai penyebut $q>N$. Oleh karena itu,\n\\[\nf(x)\\le\\frac1N<\\frac{\\varepsilon}{2}.\n\\]\nKarena panjang total interval $[0,1]$ adalah $1$, kontribusi upper sum dari bagian tersebut kurang dari $\\varepsilon/2$.\nPada gabungan $J_1\\cup\\cdots\\cup J_k$, berlaku $0\\le f\\le1$. Kontribusi upper sum dari bagian ini kurang dari total panjang gabungan interval tersebut, yaitu kurang dari $\\varepsilon/2$. Dengan demikian,\n\\[\nU(f,P)<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}=\\varepsilon.\n\\]\nKarena $L(f,P)=0$, diperoleh\n\\[\n0\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Teorema terkait, $f$ Riemann integrable. Karena seluruh lower sum bernilai $0$, nilai integralnya adalah $0$.\nDengan demikian, Proposisi terkait terbukti."
          },
          {
            "kind": "example",
            "title": "Penerapan Proposisi terkait",
            "body": "Diberikan fungsi Thomae $f$ pada $[0,1]$. Ditentukan nilai integral Riemann fungsi tersebut.",
            "solution": "Diketahui fungsi $f$ merupakan fungsi Thomae pada $[0,1]$.\nDitentukan nilai\n\\[\n\\int_0^1f(x)\\,\\,d x.\n\\]\nBerdasarkan Proposisi terkait, fungsi Thomae Riemann integrable pada $[0,1]$ dan nilai integralnya adalah nol. Oleh karena itu,\n\\[\n\\boxed{\\int_0^1f(x)\\,\\,d x=0}.\n\\]\nHasil tersebut konsisten dengan pembuktian pada contoh fungsi Thomae: setiap lower Darboux sum bernilai $0$, sedangkan upper Darboux sum dapat dibuat sekecil yang diinginkan.\nDengan demikian, nilai integral pada contoh penerapan Proposisi terkait telah ditentukan."
          }
        ]
      }
    ],
    "blocks": []
  },
  {
    "title": "Sifat-Sifat Integral Riemann",
    "subsections": [],
    "blocks": [
      {
        "kind": "theorem",
        "title": "Linearitas",
        "body": "Jika $f,g$ Riemann integrable pada $[a,b]$ dan $\\alpha,\\beta\\in\\mathbb{R}$, maka $\\alpha f+\\beta g$ Riemann integrable dan\n\\[\n\\int_a^b(\\alpha f+\\beta g)\\,d x\n=\\alpha\\int_a^b f\\,d x+\\beta\\int_a^b g\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ dan $g$ Riemann integrable pada $[a,b]$, serta $\\alpha,\\beta\\in\\mathbb{R}$.\nDibuktikan bahwa fungsi $\\alpha f+\\beta g$ Riemann integrable dan\n\\[\n\\int_a^b(\\alpha f+\\beta g)\\,\\,d x\n=\\alpha\\int_a^b f\\,\\,d x+\\beta\\int_a^b g\\,\\,d x.\n\\]\nDituliskan\n\\[\nI_f=\\int_a^b f(x)\\,\\,d x,\n\\qquad\nI_g=\\int_a^b g(x)\\,\\,d x.\n\\]\nUntuk setiap tagged partition $P^*$ berlaku\n\\[\\begin{aligned}\nS(\\alpha f+\\beta g,P^*)\n&=\\sum_{i=1}^n\\bigl(\\alpha f(t_i)+\\beta g(t_i)\\bigr)\\Delta x_i\n&=\\alpha S(f,P^*)+\\beta S(g,P^*).\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Dituliskan\n\\[\nC=|\\alpha|+|\\beta|+1.\n\\]\nKarena $f$ dan $g$ Riemann integrable, terdapat $\\delta_f,\\delta_g>0$ sehingga\n\\[\n\\|P\\|<\\delta_f\n\\Longrightarrow\n|S(f,P^*)-I_f|<\\frac{\\varepsilon}{2C},\n\\]\ndan\n\\[\n\\|P\\|<\\delta_g\n\\Longrightarrow\n|S(g,P^*)-I_g|<\\frac{\\varepsilon}{2C}.\n\\]\nDitetapkan $\\delta=\\min\\{\\delta_f,\\delta_g\\}$. Untuk setiap tagged partition $P^*$ dengan $\\|P\\|<\\delta$ diperoleh\n\\[\\begin{aligned}\n&\\left|S(\\alpha f+\\beta g,P^*)-(\\alpha I_f+\\beta I_g)\\right|\n&\\quad\\le |\\alpha|\\,|S(f,P^*)-I_f|+|\\beta|\\,|S(g,P^*)-I_g|\n&\\quad<\\frac{|\\alpha|+|\\beta|}{2C}\\varepsilon<\\varepsilon.\n\\end{aligned}\\]\nDengan demikian definisi integral Riemann terpenuhi dan nilai integralnya adalah $\\alpha I_f+\\beta I_g$.\nDengan demikian, Teorema terkait terbukti."
      },
      {
        "kind": "theorem",
        "title": "Monotonisitas integral",
        "body": "Jika $f,g$ Riemann integrable pada $[a,b]$ dan $f(x)\\le g(x)$ untuk setiap $x\\in[a,b]$, maka\n\\[\n\\int_a^b f(x)\\,d x\\le\\int_a^b g(x)\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ dan $g$ Riemann integrable pada $[a,b]$ serta memenuhi $f(x)\\le g(x)$ untuk setiap $x\\in[a,b]$.\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,\\,d x\\le\\int_a^b g(x)\\,\\,d x.\n\\]\nDidefinisikan\n\\[\nh=g-f.\n\\]\nBerdasarkan Teorema terkait, fungsi $h$ Riemann integrable. Dari asumsi $f(x)\\le g(x)$ diperoleh\n\\[\nh(x)=g(x)-f(x)\\ge0\n\\]\nuntuk setiap $x\\in[a,b]$.\nUntuk setiap tagged partition $P^*$ berlaku\n\\[\nS(h,P^*)=\\sum_{i=1}^n h(t_i)\\Delta x_i\\ge0,\n\\]\nkarena setiap $h(t_i)\\ge0$ dan setiap $\\Delta x_i>0$. Ketika norma partisi menuju nol, jumlah Riemann tersebut menuju $\\int_a^b h(x)\\,\\,d x$. Oleh karena itu,\n\\[\n\\int_a^b h(x)\\,\\,d x\\ge0.\n\\]\nBerdasarkan linearitas,\n\\[\n\\int_a^b g(x)\\,\\,d x-\\int_a^b f(x)\\,\\,d x\\ge0.\n\\]\nDengan demikian,\n\\[\n\\int_a^b f(x)\\,\\,d x\\le\\int_a^b g(x)\\,\\,d x.\n\\]\nDengan demikian, Teorema terkait terbukti."
      },
      {
        "kind": "corollary",
        "title": "",
        "body": "Jika $f$ Riemann integrable dan $f(x)\\ge0$ untuk semua $x\\in[a,b]$, maka\n\\[\n\\int_a^b f(x)\\,d x\\ge0.\n\\]"
      },
      {
        "kind": "theorem",
        "title": "Nilai mutlak",
        "body": "Jika $f$ Riemann integrable pada $[a,b]$, maka $|f|$ Riemann integrable dan\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ Riemann integrable pada $[a,b]$.\nDibuktikan bahwa fungsi $|f|$ Riemann integrable dan\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,\\,d x.\n\\]\nUntuk sebarang $x,y\\in[a,b]$, ketaksamaan balik segitiga memberikan\n\\[\n\\bigl||f(x)|-|f(y)|\\bigr|\\le|f(x)-f(y)|.\n\\]\nDengan demikian, osilasi $|f|$ pada setiap subinterval tidak lebih besar daripada osilasi $f$ pada subinterval yang sama. Diambil sebarang $\\varepsilon>0$. Karena $f$ Riemann integrable, berdasarkan Teorema terkait terdapat partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nUntuk partisi yang sama berlaku\n\\[\nU(|f|,P)-L(|f|,P)\n\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nBerdasarkan Teorema terkait, fungsi $|f|$ Riemann integrable.\nSelanjutnya, untuk setiap $x\\in[a,b]$ berlaku\n\\[\n-|f(x)|\\le f(x)\\le |f(x)|.\n\\]\nBerdasarkan Teorema terkait, diperoleh\n\\[\n-\\int_a^b|f(x)|\\,\\,d x\n\\le\n\\int_a^b f(x)\\,\\,d x\n\\le\n\\int_a^b|f(x)|\\,\\,d x.\n\\]\nPernyataan tersebut ekuivalen dengan\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,\\,d x.\n\\]\nDengan demikian, Teorema terkait terbukti."
      },
      {
        "kind": "paragraph",
        "text": "Gambar hasil terkait memperlihatkan bahwa pembentukan $|f|$ merefleksikan bagian negatif ke atas tanpa memperbesar osilasi dibandingkan perubahan nilai fungsi $f$."
      },
      {
        "kind": "corollary",
        "title": "Estimasi supremum",
        "body": "Jika $|f(x)|\\le M$ pada $[a,b]$, maka\n\\[\n\\left|\\int_a^b f(x)\\,d x\\right|\\le M(b-a).\n\\]",
        "proof": "Diketahui fungsi $f$ Riemann integrable pada $[a,b]$ dan memenuhi $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$.\nDibuktikan bahwa\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x\\right|\\le M(b-a).\n\\]\nBerdasarkan Teorema terkait,\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x\\right|\n\\le\n\\int_a^b|f(x)|\\,\\,d x.\n\\]\nKarena $|f(x)|\\le M$ untuk setiap $x\\in[a,b]$, berdasarkan Teorema terkait,\n\\[\n\\int_a^b|f(x)|\\,\\,d x\n\\le\n\\int_a^bM\\,\\,d x.\n\\]\nIntegral fungsi konstan memberikan\n\\[\n\\int_a^bM\\,\\,d x=M(b-a).\n\\]\nOleh karena itu,\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x\\right|\\le M(b-a).\n\\]\nDengan demikian, Akibat terkait terbukti."
      },
      {
        "kind": "theorem",
        "title": "Aditivitas interval",
        "body": "Jika $f$ Riemann integrable pada $[a,b]$ dan $c\\in[a,b]$, maka $f$ integrable pada $[a,c]$ dan $[c,b]$, serta\n\\[\n\\int_a^b f(x)\\,d x\n=\n\\int_a^c f(x)\\,d x+\n\\int_c^b f(x)\\,d x.\n\\]",
        "proof": "Diketahui fungsi $f$ Riemann integrable pada $[a,b]$ dan $c\\in[a,b]$.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[a,c]$ dan $[c,b]$, serta\n\\[\n\\int_a^b f(x)\\,\\,d x\n=\n\\int_a^c f(x)\\,\\,d x+\n\\int_c^b f(x)\\,\\,d x.\n\\]\nDiambil sebarang $\\varepsilon>0$. Karena $f$ Riemann integrable pada $[a,b]$, berdasarkan Teorema terkait terdapat partisi $P$ dari $[a,b]$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDibentuk partisi penghalus\n\\[\nR=P\\cup\\{c\\}.\n\\]\nBerdasarkan sifat partisi penghalus,\n\\[\nU(f,R)-L(f,R)\\le U(f,P)-L(f,P)<\\varepsilon.\n\\]\nPartisi $R$ terpecah menjadi partisi $R_1$ pada $[a,c]$ dan partisi $R_2$ pada $[c,b]$. Karena selisih Darboux tidak negatif pada setiap bagian,\n\\[\nU(f,R_1)-L(f,R_1)\n\\le U(f,R)-L(f,R)<\\varepsilon,\n\\]\ndan\n\\[\nU(f,R_2)-L(f,R_2)\n\\le U(f,R)-L(f,R)<\\varepsilon.\n\\]\nBerdasarkan Teorema terkait, $f$ Riemann integrable pada kedua subinterval tersebut.\nDituliskan\n\\[\nI=\\int_a^b f(x)\\,\\,d x,\n\\qquad\nI_1=\\int_a^c f(x)\\,\\,d x,\n\\qquad\nI_2=\\int_c^b f(x)\\,\\,d x.\n\\]\nUntuk tagged partition pada $[a,b]$ yang memuat $c$, jumlah Riemann terurai menjadi\n\\[\nS(f,P^*)=S_1(f,P_1^*)+S_2(f,P_2^*).\n\\]\nKetika norma partisi menuju nol, ruas kiri menuju $I$, sedangkan dua suku pada ruas kanan masing-masing menuju $I_1$ dan $I_2$. Oleh karena itu,\n\\[\nI=I_1+I_2.\n\\]\nDengan demikian, Teorema terkait terbukti."
      },
      {
        "kind": "theorem",
        "title": "Integrabilitas hasil kali",
        "body": "Jika $f,g$ Riemann integrable pada $[a,b]$, maka $fg$ Riemann integrable.",
        "proof": "Diketahui fungsi $f$ dan $g$ Riemann integrable pada $[a,b]$.\nDibuktikan bahwa hasil kali $fg$ Riemann integrable pada $[a,b]$.\nKarena fungsi Riemann integrable terbatas, terdapat $M,N\\ge0$ sehingga\n\\[\n|f(x)|\\le M,\n\\qquad\n|g(x)|\\le N\n\\]\nuntuk setiap $x\\in[a,b]$.\nUntuk sebarang $x,y$ yang berada pada subinterval yang sama,\n\\[\\begin{aligned}\n|f(x)g(x)-f(y)g(y)|\n&=|f(x)(g(x)-g(y))+g(y)(f(x)-f(y))|\n&\\le M|g(x)-g(y)|+N|f(x)-f(y)|.\n\\end{aligned}\\]\nDengan demikian, jika $\\omega_i(h)$ menyatakan osilasi fungsi $h$ pada subinterval ke-$i$, maka\n\\[\n\\omega_i(fg)\\le M\\omega_i(g)+N\\omega_i(f).\n\\]\nAkibatnya, untuk setiap partisi $P$,\n\\[\nU(fg,P)-L(fg,P)\n\\le M\\bigl(U(g,P)-L(g,P)\\bigr)\n+N\\bigl(U(f,P)-L(f,P)\\bigr).\n\\]\nDiambil sebarang $\\varepsilon>0$. Berdasarkan Teorema terkait, dipilih partisi $P_f$ dan $P_g$ sehingga\n\\[\nU(f,P_f)-L(f,P_f)<\\frac{\\varepsilon}{2(N+1)},\n\\]\ndan\n\\[\nU(g,P_g)-L(g,P_g)<\\frac{\\varepsilon}{2(M+1)}.\n\\]\nDibentuk partisi penghalus bersama $P=P_f\\cup P_g$. Karena penghalusan tidak memperbesar selisih upper dan lower sum, kedua ketaksamaan tetap berlaku untuk $P$. Dengan demikian,\n\\[\\begin{aligned}\nU(fg,P)-L(fg,P)\n&<M\\frac{\\varepsilon}{2(M+1)}\n+N\\frac{\\varepsilon}{2(N+1)}\n&<\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan Teorema terkait, $fg$ Riemann integrable.\nDengan demikian, Teorema terkait terbukti."
      },
      {
        "kind": "theorem",
        "title": "Komposisi dengan fungsi kontinu",
        "body": "Diberikan $f$ Riemann integrable pada $[a,b]$, dan $\\varphi$ kontinu pada interval kompak yang memuat range $f$. Fungsi $\\varphi\\circ f$ Riemann integrable.",
        "proof": "Diketahui fungsi $f$ Riemann integrable pada $[a,b]$ dan $\\varphi$ kontinu pada interval kompak yang memuat range $f$.\nDibuktikan bahwa komposisi $\\varphi\\circ f$ Riemann integrable pada $[a,b]$.\nKarena $f$ terbatas, range $f$ termuat dalam suatu interval kompak $K_0$. Karena $\\varphi$ kontinu pada $K_0$, fungsi $\\varphi$ kontinu seragam dan terbatas pada $K_0$. Oleh karena itu, terdapat $K\\ge0$ sehingga\n\\[\n|\\varphi(t)|\\le K\n\\]\nuntuk setiap $t\\in K_0$.\nJika $K=0$, komposisi $\\varphi\\circ f$ identik nol dan pernyataan langsung berlaku. Selanjutnya diandaikan $K>0$. Diambil sebarang $\\varepsilon>0$. Dari kontinuitas seragam $\\varphi$, terdapat $\\eta>0$ sehingga\n\\[\n|u-v|<\\eta\n\\quad\\Longrightarrow\\quad\n|\\varphi(u)-\\varphi(v)|<\\frac{\\varepsilon}{2(b-a)}.\n\\]\nKarena $f$ Riemann integrable, berdasarkan Teorema terkait dipilih partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)\n=\\sum_i\\omega_i(f)\\Delta x_i\n<\\frac{\\eta\\varepsilon}{4K}.\n\\]\nIndeks subinterval dipisahkan menjadi\n\\[\nG=\\{i:\\omega_i(f)<\\eta\\},\n\\qquad\nB=\\{i:\\omega_i(f)\\ge\\eta\\}.\n\\]\nUntuk $i\\in G$, kontinuitas seragam memberikan\n\\[\n\\omega_i(\\varphi\\circ f)<\\frac{\\varepsilon}{2(b-a)}.\n\\]\nUntuk $i\\in B$, karena $|\\varphi|\\le K$, berlaku\n\\[\n\\omega_i(\\varphi\\circ f)\\le2K.\n\\]\nSelain itu,\n\\[\n\\eta\\sum_{i\\in B}\\Delta x_i\n\\le\\sum_{i\\in B}\\omega_i(f)\\Delta x_i\n<\\frac{\\eta\\varepsilon}{4K},\n\\]\nAkibatnya,\n\\[\n\\sum_{i\\in B}\\Delta x_i<\\frac{\\varepsilon}{4K}.\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(\\varphi\\circ f,P)-L(\\varphi\\circ f,P)\n&\\le \\sum_{i\\in G}\\frac{\\varepsilon}{2(b-a)}\\Delta x_i\n+\\sum_{i\\in B}2K\\Delta x_i\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\n&=\\varepsilon.\n\\end{aligned}\\]\nBerdasarkan Teorema terkait, $\\varphi\\circ f$ Riemann integrable.\nDengan demikian, Teorema terkait terbukti."
      }
    ]
  },
  {
    "title": "Osilasi dan Kriteria Lebesgue",
    "subsections": [],
    "blocks": [
      {
        "kind": "definition",
        "title": "Osilasi pada interval",
        "body": "Untuk interval $I\\subseteq[a,b]$, osilasi $f$ pada $I$ didefinisikan sebagai\n\\[\n\\operatorname{osc}(f,I)=\\sup_{x\\in I}f(x)-\\inf_{x\\in I}f(x).\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Diberikan fungsi $f(x)=x^2$ pada interval $I=[1,2]$. Ditentukan osilasi $f$ pada $I$.",
        "solution": "Diketahui fungsi $f(x)=x^2$ pada interval $I=[1,2]$.\nDitentukan nilai $\\operatorname{osc}(f,I)$.\nUntuk $x\\in[1,2]$, fungsi $f(x)=x^2$ naik. Nilai terkecil dicapai di $x=1$ dan nilai terbesar dicapai di $x=2$. Diperoleh\n\\[\n\\inf_{x\\in I}f(x)=f(1)=1\n\\]\ndan\n\\[\n\\sup_{x\\in I}f(x)=f(2)=4.\n\\]\nBerdasarkan definisi osilasi pada interval,\n\\[\n\\operatorname{osc}(f,I)\n=\\sup_{x\\in I}f(x)-\\inf_{x\\in I}f(x)\n=4-1\n=3.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\operatorname{osc}(f,[1,2])=3}.\n\\]\nNilai osilasi telah ditentukan."
      },
      {
        "kind": "paragraph",
        "text": "Jika $I_i=[x_{i-1},x_i]$, maka\n\\[\n\\operatorname{osc}(f,I_i)=M_i-m_i,\n\\]\nDengan demikian,\n\\[\nU(f,P)-L(f,P)\n=\n\\sum_{i=1}^{n}\\operatorname{osc}(f,I_i)\\Delta x_i.\n\\]\nJadi kriteria Darboux dapat dipahami sebagai kemampuan membuat total osilasi tertimbang sekecil yang diinginkan."
      },
      {
        "kind": "definition",
        "title": "Osilasi di titik",
        "body": "Untuk $c\\in[a,b]$, osilasi $f$ di titik $c$ didefinisikan oleh\n\\[\n\\omega_f(c)=\n\\inf\\{\\operatorname{osc}(f,I): I\\text{ interval relatif di }[a,b]\\text{ yang memuat }c\\}.\n\\]"
      },
      {
        "kind": "example",
        "title": "",
        "body": "Diberikan fungsi $f(x)=x$ dan titik $c=1$. Ditentukan osilasi fungsi di titik $c$, yaitu $\\omega_f(1)$.",
        "solution": "Diketahui fungsi $f(x)=x$ dan titik $c=1$.\nDitentukan nilai $\\omega_f(1)$.\nDiambil $r>0$ dan interval\n\\[\nI_r=[1-r,1+r].\n\\]\nKarena $f(x)=x$ naik, infimum dan supremum pada $I_r$ berturut-turut adalah $1-r$ dan $1+r$. Oleh karena itu,\n\\[\n\\operatorname{osc}(f,I_r)=(1+r)-(1-r)=2r.\n\\]\nUntuk setiap $\\varepsilon>0$ dipilih\n\\[\n0<r<\\frac{\\varepsilon}{2}.\n\\]\nDiperoleh\n\\[\n\\operatorname{osc}(f,I_r)=2r<\\varepsilon.\n\\]\nOsilasi selalu tidak negatif. Selain itu, terdapat interval yang memuat $1$ dengan osilasi sekecil yang diinginkan. Berdasarkan definisi infimum,\n\\[\n\\omega_f(1)=0.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\omega_f(1)=0}.\n\\]\nNilai osilasi di titik tersebut telah ditentukan."
      },
      {
        "kind": "proposition",
        "title": "",
        "body": "Fungsi $f$ kontinu di $c$ jika dan hanya jika\n\\[\n\\omega_f(c)=0.\n\\]",
        "proof": "Diketahui fungsi $f$ terbatas pada $[a,b]$ dan $c\\in[a,b]$.\nDibuktikan bahwa fungsi $f$ kontinu di $c$ jika dan hanya jika\n\\[\n\\omega_f(c)=0.\n\\]\nPembuktian dilakukan dalam dua arah.\n\\,\n($\\Rightarrow$)\nDiketahui fungsi $f$ kontinu di $c$.\nDibuktikan bahwa $\\omega_f(c)=0$.\nDiambil sebarang $\\varepsilon>0$. Berdasarkan kontinuitas $f$ di $c$, terdapat lingkungan interval $I$ dari $c$ sehingga untuk setiap $x\\in I$ berlaku\n\\[\n|f(x)-f(c)|<\\frac{\\varepsilon}{2}.\n\\]\nUntuk sebarang $x,y\\in I$, berdasarkan ketaksamaan segitiga,\n\\[\\begin{aligned}\n|f(x)-f(y)|\n&\\le |f(x)-f(c)|+|f(y)-f(c)|\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\n&=\\varepsilon.\n\\end{aligned}\\]\nDengan demikian,\n\\[\n\\operatorname{osc}(f,I)\\le\\varepsilon.\n\\]\nKarena $\\omega_f(c)$ merupakan infimum osilasi pada seluruh interval yang memuat $c$, diperoleh\n\\[\n0\\le\\omega_f(c)\\le\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ dipilih sebarang, diperoleh $\\omega_f(c)=0$.\n\\,\n($\\Leftarrow$)\nDiketahui $\\omega_f(c)=0$.\nDibuktikan bahwa fungsi $f$ kontinu di $c$.\nDiambil sebarang $\\varepsilon>0$. Karena $\\omega_f(c)=0$ merupakan infimum osilasi pada interval yang memuat $c$, terdapat interval $I$ yang memuat $c$ dengan\n\\[\n\\operatorname{osc}(f,I)<\\varepsilon.\n\\]\nUntuk setiap $x\\in I$, karena $x$ dan $c$ berada pada interval yang sama,\n\\[\n|f(x)-f(c)|\\le\\operatorname{osc}(f,I)<\\varepsilon.\n\\]\nPernyataan ini merupakan definisi kontinuitas $f$ di $c$.\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh ekuivalensi yang dinyatakan. Dengan demikian, Proposisi terkait terbukti."
      },
      {
        "kind": "example",
        "title": "Penerapan Proposisi terkait",
        "body": "Diberikan fungsi $f(x)=x^2$ dan titik $c=1$. Dibuktikan menggunakan osilasi bahwa $f$ kontinu di $c=1$.",
        "solution": "Diketahui fungsi $f(x)=x^2$ dan titik $c=1$.\nDibuktikan bahwa $f$ kontinu di $c=1$ dengan menggunakan Proposisi terkait.\nDiambil $0<r<1$ dan interval\n\\[\nI_r=[1-r,1+r].\n\\]\nKarena $x^2$ naik pada $I_r\\subset(0,2)$, diperoleh\n\\[\n\\inf_{x\\in I_r}f(x)=(1-r)^2\n\\]\ndan\n\\[\n\\sup_{x\\in I_r}f(x)=(1+r)^2.\n\\]\nOsilasinya adalah\n\\[\\begin{aligned}\n\\operatorname{osc}(f,I_r)\n&=(1+r)^2-(1-r)^2\n&=4r.\n\\end{aligned}\\]\nDiambil sebarang $\\varepsilon>0$. Dipilih\n\\[\n0<r<\\min\\left\\{1,\\frac{\\varepsilon}{4}\\right\\}.\n\\]\nDiperoleh\n\\[\n\\operatorname{osc}(f,I_r)=4r<\\varepsilon.\n\\]\nKarena osilasi pada lingkungan $1$ dapat dibuat sekecil yang diinginkan dan selalu tidak negatif, diperoleh\n\\[\n\\omega_f(1)=0.\n\\]\nBerdasarkan Proposisi terkait, kesamaan $\\omega_f(1)=0$ ekuivalen dengan kontinuitas $f$ di $1$.\nDengan demikian, $f(x)=x^2$ kontinu di $c=1$, sehingga contoh penerapan Proposisi terkait terbukti."
      },
      {
        "kind": "paragraph",
        "text": "Gambar hasil terkait menunjukkan bahwa ketika interval yang memuat $c$ diperkecil, osilasi fungsi dapat dikendalikan menuju nol tepat ketika fungsi kontinu di $c$."
      },
      {
        "kind": "theorem",
        "title": "Kriteria Lebesgue untuk integrabilitas Riemann",
        "body": "Diberikan $f:[a,b]\\to\\mathbb{R}$ terbatas. Fungsi $f$ Riemann integrable jika dan hanya jika himpunan titik diskontinuitas $D_f$ mempunyai ukuran Lebesgue nol."
      },
      {
        "kind": "note",
        "title": "",
        "body": "Teorema ini merupakan karakterisasi lanjutan. Pembuktian lengkapnya membutuhkan teori ukuran Lebesgue dan tidak diperlukan untuk membangun integral Riemann--Darboux dari definisi. Dalam artikel ini teorema tersebut dicantumkan sebagai jembatan menuju teori integrasi Lebesgue."
      },
      {
        "kind": "corollary",
        "title": "",
        "body": "Jika $f$ terbatas dan diskontinu hanya pada berhingga banyak titik, maka $f$ Riemann integrable."
      },
      {
        "kind": "corollary",
        "title": "",
        "body": "Jika himpunan diskontinuitas fungsi terbatas $f$ terhitung, maka $f$ Riemann integrable, karena setiap himpunan terhitung mempunyai ukuran Lebesgue nol."
      }
    ]
  },
  {
    "title": "Latihan Soal dan Solusi",
    "subsections": [],
    "blocks": [
      {
        "kind": "exercise",
        "title": "Partisi, norma partisi, dan partisi penghalus",
        "body": "Diberikan partisi\n\\[\nP=\\left\\{0,\\frac15,\\frac12,\\frac34,1\\right\\}\n\\]\ndari $[0,1]$.\n•  Ditentukan panjang setiap subinterval.\n•  Ditentukan $\\lVert P\\rVert$.\n•  Apakah $Q=\\{0,1/5,2/5,1/2,3/4,1\\}$ merupakan partisi penghalus dari $P$?",
        "solution": "Diketahui partisi\n\\[\nP=\\left\\{0,\\frac15,\\frac12,\\frac34,1\\right\\}\n\\]\ndari $[0,1]$ dan himpunan\n\\[\nQ=\\left\\{0,\\frac15,\\frac25,\\frac12,\\frac34,1\\right\\}.\n\\]\nDitentukan panjang setiap subinterval dari $P$, nilai $\\lVert P\\rVert$, dan apakah $Q$ merupakan partisi penghalus dari $P$.\nLangkah 1: penentuan subinterval.\nDari titik-titik partisi $P$, diperoleh\n\\[\nI_1=\\left[0,\\frac15\\right],\\quad\nI_2=\\left[\\frac15,\\frac12\\right],\\quad\nI_3=\\left[\\frac12,\\frac34\\right],\\quad\nI_4=\\left[\\frac34,1\\right].\n\\]\nPanjang masing-masing subinterval adalah\n\\[\\begin{aligned}\n\\Delta x_1&=\\frac15-0=\\frac15,\n\\Delta x_2&=\\frac12-\\frac15=\\frac{5-2}{10}=\\frac3{10},\n\\Delta x_3&=\\frac34-\\frac12=\\frac14,\n\\Delta x_4&=1-\\frac34=\\frac14.\n\\end{aligned}\\]\nLangkah 2: penentuan norma partisi.\nBerdasarkan definisi,\n\\[\n\\lVert P\\rVert=\\max\\left\\{\\frac15,\\frac3{10},\\frac14,\\frac14\\right\\}.\n\\]\nPerbandingan nilainya adalah:\n\\[\n\\frac15=0.2,\\qquad \\frac3{10}=0.3,\\qquad \\frac14=0.25.\n\\]\nJadi\n\\[\n\\boxed{\\lVert P\\rVert=\\frac3{10}}.\n\\]\nLangkah 3: pemeriksaan apakah $Q$ partisi penghalus dari $P$.\nSyaratnya adalah $P\\subseteq Q$. Semua titik\n\\[\n0,\\frac15,\\frac12,\\frac34,1\n\\]\nmasih terdapat pada $Q$, dan $Q$ hanya menambahkan titik baru $2/5$. Dengan demikian,\n\\[\nP\\subseteq Q.\n\\]\nDengan demikian,\n\\[\n\\boxed{Q\\text{ merupakan partisi penghalus dari }P.}\n\\]\nDengan demikian, panjang setiap subinterval, nilai $\\lVert P\\rVert$, dan status $Q$ sebagai partisi penghalus pada Soal 1 telah ditentukan."
      },
      {
        "kind": "exercise",
        "title": "Jumlah Riemann fungsi linear",
        "body": "Untuk $f(x)=2x+1$ pada $[0,1]$, digunakan partisi seragam $x_i=i/n$ dan tag kanan $t_i=x_i$. Dihitung limit jumlah Riemannnya.",
        "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ dengan\n\\[\nf(x)=2x+1,\n\\]\npartisi seragam $x_i=i/n$, dan tag kanan $t_i=x_i$.\nDitentukan nilai limit jumlah Riemann $S_n$ ketika $n\\to\\infty$.\nPartisi seragam membagi $[0,1]$ menjadi $n$ subinterval dengan\n\\[\n\\Delta x_i=x_i-x_{i-1}=\\frac1n.\n\\]\nKarena tag yang dipakai adalah titik kanan,\n\\[\nt_i=x_i=\\frac{i}{n}.\n\\]\nNilai fungsi pada tag adalah\n\\[\nf(t_i)=2\\frac{i}{n}+1.\n\\]\nJumlah Riemann menjadi\n\\[\\begin{aligned}\nS_n\n&=\\sum_{i=1}^{n}f(t_i)\\Delta x_i\n&=\\sum_{i=1}^{n}\\left(2\\frac{i}{n}+1\\right)\\frac1n\n&=\\frac{2}{n^2}\\sum_{i=1}^{n}i+\\frac1n\\sum_{i=1}^{n}1.\n\\end{aligned}\\]\nDigunakan rumus\n\\[\n\\sum_{i=1}^{n}i=\\frac{n(n+1)}2,\n\\qquad\n\\sum_{i=1}^{n}1=n.\n\\]\nDiperoleh\n\\[\\begin{aligned}\nS_n\n&=\\frac{2}{n^2}\\cdot\\frac{n(n+1)}2+\\frac1n\\cdot n\n&=\\frac{n+1}{n}+1\n&=2+\\frac1n.\n\\end{aligned}\\]\nKarena $1/n\\to0$, maka\n\\[\n\\lim_{n\\to\\infty}S_n=2.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1(2x+1)\\,\\,d x=2.}\n\\]\nHasil ini juga sesuai dengan perhitungan antiturunan:\n\\[\n\\left[x^2+x\\right]_0^1=2.\n\\]\nDengan demikian, nilai limit jumlah Riemann pada Soal 2 telah ditentukan."
      },
      {
        "kind": "exercise",
        "title": "Lower dan upper Darboux sum untuk $x^2$",
        "body": "Diberikan $f(x)=x^2$ pada $[0,1]$ dan digunakan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac1n,\\frac2n,\\ldots,1\\right\\}.\n\\]\nDitentukan $L(f,P_n)$ dan $U(f,P_n)$.",
        "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ dengan $f(x)=x^2$ dan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac1n,\\frac2n,\\ldots,1\\right\\}.\n\\]\nDitentukan lower Darboux sum $L(f,P_n)$ dan upper Darboux sum $U(f,P_n)$.\nLangkah 1: penentuan infimum dan supremum lokal.\nFungsi $f(x)=x^2$ naik pada $[0,1]$. Pada subinterval\n\\[\nI_i=\\left[\\frac{i-1}{n},\\frac{i}{n}\\right],\n\\]\nnilai terkecil dicapai di ujung kiri dan nilai terbesar dicapai di ujung kanan. Jadi\n\\[\nm_i=\\left(\\frac{i-1}{n}\\right)^2,\n\\qquad\nM_i=\\left(\\frac{i}{n}\\right)^2.\n\\]\nSelain itu,\n\\[\n\\Delta x_i=\\frac1n.\n\\]\nLangkah 2: perhitungan lower Darboux sum.\n\\[\\begin{aligned}\nL(f,P_n)\n&=\\sum_{i=1}^{n}m_i\\Delta x_i\n&=\\sum_{i=1}^{n}\\left(\\frac{i-1}{n}\\right)^2\\frac1n\n&=\\frac1{n^3}\\sum_{i=1}^{n}(i-1)^2.\n\\end{aligned}\\]\nDengan substitusi $j=i-1$,\n\\[\n\\sum_{i=1}^{n}(i-1)^2=\\sum_{j=0}^{n-1}j^2\n=\\frac{(n-1)n(2n-1)}6.\n\\]\nDengan demikian,\n\\[\n\\boxed{L(f,P_n)=\\frac{(n-1)(2n-1)}{6n^2}.}\n\\]\nLangkah 3: perhitungan upper Darboux sum.\n\\[\\begin{aligned}\nU(f,P_n)\n&=\\sum_{i=1}^{n}M_i\\Delta x_i\n&=\\frac1{n^3}\\sum_{i=1}^{n}i^2\n&=\\frac1{n^3}\\cdot\\frac{n(n+1)(2n+1)}6.\n\\end{aligned}\\]\nJadi\n\\[\n\\boxed{U(f,P_n)=\\frac{(n+1)(2n+1)}{6n^2}.}\n\\]\nLangkah 4: perbandingan kedua limit.\n\\[\n\\lim_{n\\to\\infty}L(f,P_n)\n=\\frac13,\n\\qquad\n\\lim_{n\\to\\infty}U(f,P_n)\n=\\frac13.\n\\]\nKarena lower dan upper sum mendekati bilangan yang sama,\n\\[\n\\boxed{\\int_0^1x^2\\,\\,d x=\\frac13.}\n\\]\n\\begin{figure}[H]\n\\centering\n\\begin{tikzpicture}[x=5cm,y=4cm]\n\\draw[->] (-.03,0)--(1.07,0) node[right] {$x$};\n\\draw[->] (0,-.03)--(0,1.08) node[above] {$y$};\n\\foreach \\a/\\b/\\l/\\u in {0/.25/0/.0625,.25/.5/.0625/.25,.5/.75/.25/.5625,.75/1/.5625/1}{\n\\draw[fill=green!14,draw=green!50!black] (\\a,0) rectangle (\\b,\\l);\n\\draw[fill=none,draw=orange!70!black,line width=.9pt] (\\a,0) rectangle (\\b,\\u);\n}\n\\draw[very thick,blue!65!black,domain=0:1,samples=80] plot (\\x,{\\x*\\x});\n\\node[green!45!black] at (.28,.72) {lower};\n\\node[orange!65!black] at (.77,.84) {upper};\n\\end{tikzpicture}\n\\caption{Darboux sum fungsi naik.}\n\\end{figure}\nDengan demikian, lower Darboux sum dan upper Darboux sum pada Soal 3 telah ditentukan."
      },
      {
        "kind": "exercise",
        "title": "Fungsi step",
        "body": "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<1/3,\n5,&1/3\\le x\\le1.\n\\end{cases}\n\\]\nDitentukan $\\int_0^1f(x)\\,d x$ dan dijelaskan mengapa fungsi ini integrable.",
        "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<1/3,\n5,&1/3\\le x\\le1.\n\\end{cases}\n\\]\nDitentukan nilai $\\int_0^1 f(x)\\,\\,d x$ dan dibuktikan bahwa fungsi $f$ Riemann integrable pada $[0,1]$.\nFungsi $f$ konstan pada dua bagian, yaitu bernilai $2$ pada $[0,1/3)$ dan bernilai $5$ pada $[1/3,1]$. Satu-satunya titik diskontinuitas adalah $x=1/3$.\nSecara geometris, integralnya merupakan jumlah luas dua persegi panjang:\n\\[\n\\text{luas pertama}=2\\cdot\\frac13=\\frac23,\n\\]\n\\[\n\\text{luas kedua}=5\\cdot\\left(1-\\frac13\\right)\n=5\\cdot\\frac23=\\frac{10}{3}.\n\\]\nJadi\n\\[\n\\int_0^1f(x)\\,\\,d x\n=\\frac23+\\frac{10}{3}=4.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_0^1f(x)\\,\\,d x=4.}\n\\]\nUntuk alasan integrabilitas secara Darboux, diambil interval kecil\n\\[\n\\left[\\frac13-\\eta,\\frac13+\\eta\\right]\n\\]\nyang memuat titik loncatan. Di luar interval ini, fungsi konstan sehingga kontribusi $U-L$ sama dengan nol. Pada interval kecil tersebut, osilasi fungsi adalah $5-2=3$, sehingga kontribusinya terhadap $U-L$ tidak lebih dari\n\\[\n3(2\\eta)=6\\eta.\n\\]\nUntuk setiap $\\varepsilon>0$, dipilih $\\eta<\\varepsilon/6$. Dengan pilihan tersebut diperoleh $U-L<\\varepsilon$. Berdasarkan kriteria Darboux, $f$ Riemann integrable.\n\\begin{figure}[H]\n\\centering\n\\begin{tikzpicture}[x=8cm,y=.75cm]\n\\draw[->] (-.03,0)--(1.08,0) node[right] {$x$};\n\\draw[->] (0,-.2)--(0,5.7) node[above] {$y$};\n\\draw[very thick,blue!65!black] (0,2)--(.333,2);\n\\draw[very thick,blue!65!black] (.333,5)--(1,5);\n\\fill[white] (.333,2) circle (2pt);\\draw[blue!65!black] (.333,2) circle (2pt);\n\\fill[blue!65!black] (.333,5) circle (2pt);\n\\draw[dashed] (.333,0)--(.333,5.3);\n\\node[below] at (.333,0) {$1/3$};\n\\end{tikzpicture}\n\\caption{Fungsi step pada Soal 4.}\n\\end{figure}\nDengan demikian, nilai integral telah ditentukan dan integrabilitas fungsi pada Soal 4 telah dibuktikan."
      },
      {
        "kind": "exercise",
        "title": "Fungsi Dirichlet",
        "body": "Dibuktikan bahwa fungsi Dirichlet\n\\[\nf(x)=\\begin{cases}\n1,&x\\in\\mathbb{Q},\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1],\n\\]\ntidak Riemann integrable.",
        "solution": "Diketahui fungsi Dirichlet $f:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\n0,&x\\notin\\mathbb{Q}.\n\\end{cases}\n\\]\nDibuktikan bahwa fungsi $f$ tidak Riemann integrable pada $[0,1]$.\nDiambil sembarang partisi\n\\[\nP=\\{x_0,x_1,\\ldots,x_n\\}.\n\\]\nSetiap subinterval $I_i=[x_{i-1},x_i]$ mempunyai panjang positif. Bilangan rasional dan irasional sama-sama rapat di $\\mathbb{R}$, sehingga setiap $I_i$ mengandung kedua jenis bilangan tersebut.\nAkibatnya, pada setiap $I_i$ fungsi mengambil nilai $0$ dan $1$. Dengan demikian,\n\\[\nm_i=\\inf_{I_i}f=0,\n\\qquad\nM_i=\\sup_{I_i}f=1.\n\\]\nLower sum adalah\n\\[\nL(f,P)=\\sum_{i=1}^{n}0\\cdot\\Delta x_i=0,\n\\]\nsedangkan upper sum adalah\n\\[\nU(f,P)=\\sum_{i=1}^{n}1\\cdot\\Delta x_i\n=\\sum_{i=1}^{n}\\Delta x_i=1.\n\\]\nIni berlaku untuk setiap partisi. Karena itu\n\\[\n\\underline{\\int_0^1}f=0,\n\\qquad\n\\overline{\\int_0^1}f=1.\n\\]\nKedua integral Darboux tidak sama. Oleh karena itu,\n\\[\n\\boxed{f\\text{ tidak Riemann integrable}.}\n\\]\nIntinya, memperbanyak titik partisi tidak mengurangi osilasi fungsi: pada setiap subinterval osilasinya tetap $1$.\nDengan demikian, pernyataan pada Soal 5 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Lower sum fungsi Thomae",
        "body": "Untuk fungsi Thomae\n\\[\nf(x)=\n\\begin{cases}\n1/q,&x=p/q\\in\\mathbb{Q},\\ (p,q)=1,\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\]\ndijelaskan mengapa lower Darboux sum pada setiap partisi $P$ dari $[0,1]$ adalah nol.",
        "solution": "Diketahui fungsi Thomae $f:[0,1]\\to\\mathbb{R}$ yang didefinisikan oleh\n\\[\nf(x)=\n\\begin{cases}\n1/q,&x=p/q\\in\\mathbb{Q},\\ (p,q)=1,\n0,&x\\notin\\mathbb{Q}.\n\\end{cases}\n\\]\nDibuktikan bahwa untuk setiap partisi $P$ dari $[0,1]$ berlaku $L(f,P)=0$.\nDiambil sembarang subinterval $I_i=[x_{i-1},x_i]$ dari suatu partisi $P$. Karena bilangan irasional rapat di $\\mathbb{R}$, $I_i$ mengandung suatu bilangan irasional $r$. Pada titik ini,\n\\[\nf(r)=0.\n\\]\nDi sisi lain, fungsi Thomae selalu tidak negatif, sehingga\n\\[\nf(x)\\ge0\\qquad\\text{untuk semua }x.\n\\]\nJadi $0$ adalah batas bawah nilai fungsi pada $I_i$, dan karena nilai $0$ benar-benar dicapai pada titik-titik irasional,\n\\[\nm_i=\\inf_{I_i}f=0.\n\\]\nHal tersebut berlaku untuk seluruh subinterval. Oleh karena itu,\n\\[\nL(f,P)=\\sum_{i=1}^{n}m_i\\Delta x_i\n=\\sum_{i=1}^{n}0\\cdot\\Delta x_i=0.\n\\]\nJadi\n\\[\n\\boxed{L(f,P)=0\\text{ untuk setiap partisi }P.}\n\\]\nPerlu dicatat bahwa kesimpulan ini belum sendirinya membuktikan integrabilitas Thomae; masih perlu ditunjukkan bahwa upper sum dapat dibuat sekecil yang diinginkan.\nDengan demikian, pernyataan pada Soal 6 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Fungsi monoton",
        "body": "Diberikan $f:[a,b]\\to\\mathbb{R}$ naik. Dibuktikan bahwa $f$ Riemann integrable menggunakan partisi seragam.",
        "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ monoton naik.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[a,b]$ dengan menggunakan partisi seragam.\nUntuk $n\\in\\mathbb N$, diambil partisi seragam\n\\[\nx_i=a+i\\frac{b-a}{n},\\qquad i=0,1,\\ldots,n.\n\\]\nSetiap subinterval mempunyai panjang\n\\[\n\\Delta x=\\frac{b-a}{n}.\n\\]\nKarena $f$ naik, pada $I_i=[x_{i-1},x_i]$ berlaku\n\\[\nm_i=f(x_{i-1}),\n\\qquad\nM_i=f(x_i).\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(f,P_n)-L(f,P_n)\n&=\\sum_{i=1}^{n}[M_i-m_i]\\Delta x\n&=\\frac{b-a}{n}\\sum_{i=1}^{n}[f(x_i)-f(x_{i-1})].\n\\end{aligned}\\]\nJumlah di dalam kurung bersifat teleskopik:\n\\[\\begin{aligned}\n&[f(x_1)-f(x_0)]+[f(x_2)-f(x_1)]+\\cdots+[f(x_n)-f(x_{n-1})]\n&\\qquad=f(x_n)-f(x_0)=f(b)-f(a).\n\\end{aligned}\\]\nJadi\n\\[\nU(f,P_n)-L(f,P_n)\n=\\frac{(b-a)[f(b)-f(a)]}{n}.\n\\]\nUntuk setiap $\\varepsilon>0$, dipilih\n\\[\nn>\\frac{(b-a)[f(b)-f(a)]}{\\varepsilon}.\n\\]\nDengan pemilihan tersebut,\n\\[\nU(f,P_n)-L(f,P_n)<\\varepsilon.\n\\]\nBerdasarkan kriteria Darboux,\n\\[\n\\boxed{f\\text{ Riemann integrable pada }[a,b].}\n\\]\nDengan demikian, pernyataan pada Soal 7 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Fungsi kontinu",
        "body": "Dibuktikan bahwa jika $f$ kontinu pada $[a,b]$, maka $f$ Riemann integrable.",
        "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ kontinu pada interval tertutup $[a,b]$.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[a,b]$.\nKarena $[a,b]$ kompak dan $f$ kontinu, Teorema Heine--Cantor menyatakan bahwa $f$ kontinu seragam. Artinya, untuk setiap $\\eta>0$ terdapat $\\delta>0$ sedemikian sehingga\n\\[\n|x-y|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(x)-f(y)|<\\eta.\n\\]\nDiambil $\\varepsilon>0$ dan dipilih\n\\[\n\\eta=\\frac{\\varepsilon}{b-a}.\n\\]\nDari kontinuitas seragam terdapat $\\delta>0$ yang sesuai. Sekarang dipilih partisi $P$ dengan\n\\[\n\\lVert P\\rVert<\\delta.\n\\]\nJika $x,y$ berada dalam subinterval yang sama $I_i$, maka\n\\[\n|x-y|\\le \\Delta x_i\\le\\lVert P\\rVert<\\delta.\n\\]\nAkibatnya\n\\[\n|f(x)-f(y)|<\\frac{\\varepsilon}{b-a}.\n\\]\nDengan mengambil supremum terhadap $x$ dan infimum terhadap $y$ di $I_i$, diperoleh\n\\[\nM_i-m_i\\le\\frac{\\varepsilon}{b-a}.\n\\]\nDengan demikian,\n\\[\\begin{aligned}\nU(f,P)-L(f,P)\n&=\\sum_{i=1}^{n}(M_i-m_i)\\Delta x_i\n&\\le\\frac{\\varepsilon}{b-a}\\sum_{i=1}^{n}\\Delta x_i\n&=\\frac{\\varepsilon}{b-a}(b-a)=\\varepsilon.\n\\end{aligned}\\]\nKarena $\\varepsilon>0$ sebarang, kriteria Darboux memberikan\n\\[\n\\boxed{f\\text{ Riemann integrable}.}\n\\]\nDengan demikian, pernyataan pada Soal 8 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Linearitas integral",
        "body": "Jika $f,g$ integrable pada $[a,b]$, dibuktikan bahwa $3f-2g$ integrable dan\n\\[\n\\int_a^b(3f-2g)\\,\\,d x\n=3\\int_a^bf\\,\\,d x-2\\int_a^bg\\,\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f,g:[a,b]\\to\\mathbb{R}$ Riemann integrable.\nDibuktikan bahwa fungsi $3f-2g$ Riemann integrable dan memenuhi\n\\[\n\\int_a^b(3f-2g)\\,\\,d x\n=3\\int_a^b f\\,\\,d x-2\\int_a^b g\\,\\,d x.\n\\]\nDituliskan\n\\[\nI_f=\\int_a^bf(x)\\,\\,d x,\n\\qquad\nI_g=\\int_a^bg(x)\\,\\,d x.\n\\]\nUntuk sembarang tagged partition $P^*$,\n\\[\\begin{aligned}\nS(3f-2g,P^*)\n&=\\sum_{i=1}^{n}[3f(t_i)-2g(t_i)]\\Delta x_i\n&=3\\sum_{i=1}^{n}f(t_i)\\Delta x_i\n-2\\sum_{i=1}^{n}g(t_i)\\Delta x_i\n&=3S(f,P^*)-2S(g,P^*).\n\\end{aligned}\\]\nKarena $f$ dan $g$ Riemann integrable, untuk partisi yang cukup halus berlaku\n\\[\nS(f,P^*)\\to I_f,\n\\qquad\nS(g,P^*)\\to I_g.\n\\]\nDengan linearitas limit,\n\\[\nS(3f-2g,P^*)\\to3I_f-2I_g.\n\\]\nDengan demikian, $3f-2g$ Riemann integrable dan\n\\[\n\\boxed{\n\\int_a^b(3f-2g)\\,\\,d x\n=3\\int_a^bf\\,\\,d x-2\\int_a^bg\\,\\,d x.}\n\\]\nJika ingin menuliskannya langsung dalam bahasa $\\varepsilon$-$\\delta$, untuk $\\varepsilon>0$ dipilih partisi cukup halus agar\n\\[\n|S(f,P^*)-I_f|<\\frac{\\varepsilon}{6},\n\\qquad\n|S(g,P^*)-I_g|<\\frac{\\varepsilon}{4}.\n\\]\nKemudian\n\\[\\begin{aligned}\n|S(3f-2g,P^*)-(3I_f-2I_g)|\n&\\le3|S(f,P^*)-I_f|+2|S(g,P^*)-I_g|\n&<\\frac\\eps2+\\frac\\eps2=\\varepsilon.\n\\end{aligned}\\]\nDengan demikian, pernyataan pada Soal 9 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Ketaksamaan nilai mutlak",
        "body": "Diberikan fungsi $f$ Riemann integrable pada $[a,b]$. Dibuktikan\n\\[\n\\left|\\int_a^bf(x)\\,d x\\right|\n\\le\\int_a^b|f(x)|\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ Riemann integrable.\nDibuktikan bahwa\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x\\right|\n\\le \\int_a^b |f(x)|\\,\\,d x.\n\\]\nUntuk setiap $x\\in[a,b]$ berlaku\n\\[\n-|f(x)|\\le f(x)\\le |f(x)|.\n\\]\nKarena integral mempertahankan urutan, integral diterapkan pada seluruh ruas:\n\\[\n\\int_a^b-|f(x)|\\,\\,d x\n\\le\n\\int_a^bf(x)\\,\\,d x\n\\le\n\\int_a^b|f(x)|\\,\\,d x.\n\\]\nDengan linearitas integral,\n\\[\n-\\int_a^b|f(x)|\\,\\,d x\n\\le\n\\int_a^bf(x)\\,\\,d x\n\\le\n\\int_a^b|f(x)|\\,\\,d x.\n\\]\nJika suatu bilangan real $z$ memenuhi $-A\\le z\\le A$ dengan $A\\ge0$, maka $|z|\\le A$. Diambil\n\\[\nz=\\int_a^bf(x)\\,\\,d x,\n\\qquad\nA=\\int_a^b|f(x)|\\,\\,d x.\n\\]\nDengan demikian,\n\\[\n\\boxed{\n\\left|\\int_a^bf(x)\\,\\,d x\\right|\n\\le\\int_a^b|f(x)|\\,\\,d x.}\n\\]\nDengan demikian, pernyataan pada Soal 10 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Kriteria Darboux",
        "body": "Diberikan $f$ terbatas pada $[a,b]$. Dibuktikan bahwa jika untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon,\n\\]\ndiperoleh bahwa $f$ Darboux integrable.",
        "solution": "Diketahui fungsi $f:[a,b]\\to\\mathbb{R}$ terbatas dan untuk setiap $\\varepsilon>0$ terdapat partisi $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDibuktikan bahwa fungsi $f$ Darboux integrable pada $[a,b]$.\nDari definisi lower integral sebagai supremum lower sum dan upper integral sebagai infimum upper sum, untuk setiap partisi $P$ berlaku\n\\[\nL(f,P)\\le\\underline{\\int_a^b} f\n\\le\\overline{\\int_a^b} f\\le U(f,P).\n\\]\nDengan mengurangkan lower integral dari upper integral berdasarkan urutan di atas, diperoleh\n\\[\n0\\le\\overline{\\int_a^b} f-\\underline{\\int_a^b} f\n\\le U(f,P)-L(f,P).\n\\]\nMenurut asumsi, untuk setiap $\\varepsilon>0$ dapat dipilih $P$ sehingga\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nJadi\n\\[\n0\\le\\overline{\\int_a^b} f-\\underline{\\int_a^b} f<\\varepsilon.\n\\]\nKetaksamaan ini benar untuk setiap $\\varepsilon>0$. Satu-satunya bilangan real nonnegatif yang lebih kecil daripada setiap $\\varepsilon>0$ adalah nol. Oleh karena itu,\n\\[\n\\overline{\\int_a^b} f-\\underline{\\int_a^b} f=0.\n\\]\nDengan demikian\n\\[\n\\underline{\\int_a^b} f=\\overline{\\int_a^b} f,\n\\]\nBerdasarkan definisi,\n\\[\n\\boxed{f\\text{ Darboux integrable}.}\n\\]\nDengan demikian, pernyataan pada Soal 11 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Diskontinuitas berhingga",
        "body": "Diberikan $f:[0,1]\\to\\mathbb{R}$ terbatas dan kontinu kecuali di $1/4,1/2,3/4$. Dijelaskan strategi Darboux untuk membuktikan $f$ integrable.",
        "solution": "Diketahui fungsi $f:[0,1]\\to\\mathbb{R}$ terbatas dan kontinu kecuali pada titik $1/4$, $1/2$, dan $3/4$.\nDibuktikan bahwa fungsi $f$ Riemann integrable pada $[0,1]$ dengan menggunakan Kriteria Darboux.\nKarena $f$ terbatas, terdapat $M>0$ sehingga\n\\[\n|f(x)|\\le M\n\\qquad (x\\in[0,1]).\n\\]\nDengan demikian, osilasi fungsi pada sembarang subinterval paling besar $2M$.\nDiambil $\\varepsilon>0$. Dipilih tiga interval kecil $J_1,J_2,J_3$ yang masing-masing memuat $1/4,1/2,3/4$ dan mempunyai total panjang\n\\[\n|J_1|+|J_2|+|J_3|<\\frac{\\varepsilon}{4M}.\n\\]\nPada bagian ``buruk'' ini, kontribusi maksimum terhadap $U-L$ adalah\n\\[\n2M(|J_1|+|J_2|+|J_3|)\n<2M\\frac{\\varepsilon}{4M}=\\frac\\eps2.\n\\]\nSelanjutnya, komplemen ketiga interval kecil tersebut di $[0,1]$ merupakan gabungan berhingga interval tertutup yang tidak mengandung titik diskontinuitas. Pada masing-masing interval tertutup itu, $f$ kontinu, sehingga kontinu seragam. Berdasarkan kekontinuan seragam tersebut, dapat dipilih partisi cukup halus agar pada setiap subinterval bagian ini\n\\[\nM_i-m_i<\\frac\\eps2.\n\\]\nLebih tepat, cukup membuat total kontribusi bagian kontinu kurang dari $\\varepsilon/2$.\nSeluruh titik ujung interval kecil dan titik-titik partisi pada bagian kontinu kemudian digabungkan menjadi satu partisi $P$. Dengan demikian,\n\\[\nU(f,P)-L(f,P)\n<\\frac\\eps2+\\frac\\eps2=\\varepsilon.\n\\]\nKriteria Darboux memberikan\n\\[\n\\boxed{f\\text{ Riemann integrable}.}\n\\]\nDengan demikian, pernyataan pada Soal 12 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Osilasi lokal",
        "body": "Untuk $f(x)=x^2$ pada $[0,2]$, ditentukan osilasi $f$ pada $[u,v]\\subseteq[0,2]$.",
        "solution": "Diketahui fungsi $f:[0,2]\\to\\mathbb{R}$ dengan $f(x)=x^2$ dan subinterval $[u,v]\\subseteq[0,2]$.\nDitentukan nilai osilasi $\\operatorname{osc}(f,[u,v])$.\nKarena $x^2$ meningkat pada $[0,2]$, untuk $u\\le v$ berlaku\n\\[\n\\inf_{x\\in[u,v]}x^2=u^2,\n\\qquad\n\\sup_{x\\in[u,v]}x^2=v^2.\n\\]\nMenurut definisi osilasi,\n\\[\\begin{aligned}\n\\operatorname{osc}(f,[u,v])\n&=\\sup_{[u,v]}f-\\inf_{[u,v]}f\n&=v^2-u^2\n&=(v-u)(v+u).\n\\end{aligned}\\]\nJadi\n\\[\n\\boxed{\\operatorname{osc}(f,[u,v])=v^2-u^2.}\n\\]\nRumus ini juga menunjukkan bahwa jika panjang interval $v-u$ mengecil, osilasinya ikut mengecil. Karena $0\\le u,v\\le2$, bahkan diperoleh estimasi\n\\[\n\\operatorname{osc}(f,[u,v])=(v-u)(v+u)\\le4(v-u).\n\\]\nEstimasi tersebut merupakan contoh konkret hubungan antara panjang subinterval dan osilasi fungsi kontinu.\nDengan demikian, nilai osilasi pada Soal 13 telah ditentukan."
      },
      {
        "kind": "exercise",
        "title": "Riemann versus Darboux",
        "body": "Dijelaskan mengapa syarat\n\\[\nU(f,P)-L(f,P)<\\varepsilon\n\\]\nmenjamin semua jumlah Riemann yang memakai partisi dasar $P$ saling dekat.",
        "solution": "Diketahui fungsi terbatas $f:[a,b]\\to\\mathbb{R}$, suatu partisi $P$ dari $[a,b]$, dan\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nDibuktikan bahwa setiap dua jumlah Riemann yang menggunakan partisi dasar $P$ berbeda kurang dari $\\varepsilon$.\nDiambil dua pemilihan tag yang berbeda pada partisi dasar yang sama $P$. Tagged partition yang dihasilkan dinyatakan sebagai $P_1^*$ dan $P_2^*$. Dari Lemma Jepit Riemann--Darboux,\n\\[\nL(f,P)\\le S(f,P_1^*)\\le U(f,P),\n\\]\ndan\n\\[\nL(f,P)\\le S(f,P_2^*)\\le U(f,P).\n\\]\nArtinya, kedua jumlah Riemann berada di dalam interval bilangan real yang sama,\n\\[\n[L(f,P),U(f,P)].\n\\]\nPanjang interval tersebut adalah\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nJarak dua titik mana pun di dalam interval sepanjang kurang dari $\\varepsilon$ juga kurang dari $\\varepsilon$. Oleh karena itu,\n\\[\n|S(f,P_1^*)-S(f,P_2^*)|<\\varepsilon.\n\\]\nJadi\n\\[\n\\boxed{U(f,P)-L(f,P)<\\varepsilon\n\\Longrightarrow\n\\text{semua jumlah Riemann pada }P\\text{ saling berjarak }<\\varepsilon.}\n\\]\nInilah alasan konseptual mengapa pendekatan Darboux efektif: cukup mengontrol dua batas ekstrem untuk sekaligus mengontrol semua kemungkinan tag.\nDengan demikian, pernyataan pada Soal 14 terbukti."
      },
      {
        "kind": "exercise",
        "title": "Perubahan pada berhingga banyak titik",
        "body": "Diberikan $f,g$ integrable pada $[a,b]$ dan $f(x)=g(x)$ kecuali pada berhingga banyak titik. Dibuktikan\n\\[\n\\int_a^bf(x)\\,d x=\n\\int_a^bg(x)\\,d x.\n\\]",
        "solution": "Diketahui fungsi $f,g:[a,b]\\to\\mathbb{R}$ Riemann integrable dan memenuhi $f(x)=g(x)$ kecuali pada berhingga banyak titik.\nDibuktikan bahwa\n\\[\n\\int_a^b f(x)\\,\\,d x=\\int_a^b g(x)\\,\\,d x.\n\\]\nDidefinisikan\n\\[\nh=f-g.\n\\]\nKarena $f$ dan $g$ integrable, linearitas integral memberi bahwa $h$ juga integrable dan\n\\[\n\\int_a^bh\n=\\int_a^bf-\\int_a^bg.\n\\]\nJadi cukup dibuktikan bahwa\n\\[\n\\int_a^bh=0.\n\\]\nMenurut asumsi, terdapat berhingga banyak titik\n\\[\nc_1,c_2,\\ldots,c_m\n\\]\ntempat $h$ mungkin tidak nol. Karena $h$ integrable, $h$ terbatas; dipilih $M\\ge0$ sehingga\n\\[\n|h(x)|\\le M\n\\qquad (x\\in[a,b]).\n\\]\nJika $M=0$, maka $h\\equiv0$ dan hasil langsung selesai. Sekarang dianggap $M>0$.\nDiambil $\\varepsilon>0$. Untuk setiap $c_j$, dipilih interval kecil $J_j$ yang memuat $c_j$, dengan total panjang yang diatur agar memenuhi\n\\[\n\\sum_{j=1}^{m}|J_j|<\\frac{\\varepsilon}{2M}.\n\\]\nDibentuk partisi $P$ yang memuat semua ujung interval $J_j$. Pada setiap subinterval yang tidak berpotongan dengan $J_1\\cup\\cdots\\cup J_m$, berlaku $h=0$, sehingga kontribusinya terhadap upper dan lower sum nol.\nPada subinterval yang berada di dalam gabungan interval kecil, berlaku\n\\[\n-M\\le h(x)\\le M.\n\\]\nKarena itu kontribusi total upper sum memenuhi\n\\[\nU(h,P)\n\\le M\\sum_{j=1}^{m}|J_j|\n<\\frac\\eps2,\n\\]\nsedangkan lower sum memenuhi\n\\[\nL(h,P)\n\\ge -M\\sum_{j=1}^{m}|J_j|\n>-\\frac\\eps2.\n\\]\nKarena integral $h$ dijepit di antara lower dan upper sum,\n\\[\n-\\frac\\eps2\n<L(h,P)\n\\le\\int_a^bh\n\\le U(h,P)\n<\\frac\\eps2.\n\\]\nDengan demikian,\n\\[\n\\left|\\int_a^bh\\right|<\\frac\\eps2<\\varepsilon.\n\\]\nKarena $\\varepsilon>0$ sebarang,\n\\[\n\\int_a^bh=0.\n\\]\nDengan demikian,\n\\[\n\\boxed{\\int_a^bf(x)\\,\\,d x=\\int_a^bg(x)\\,\\,d x.}\n\\]\nDengan demikian, pernyataan pada Soal 15 terbukti."
      }
    ]
  }
];

export const integralRiemannDarbouxExercises: string[] = [
  "Diberikan fungsi $f(x)=x^2$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac14,\\frac12,\\frac34,1\\right\\}.\n\\]\nTentukan jumlah Darboux bawah $L(f,P)$, jumlah Darboux atas $U(f,P)$, dan selisih $U(f,P)-L(f,P)$.",
  "Diberikan fungsi $f(x)=x^3$ pada $[0,1]$ dan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac1n,\\frac2n,\\ldots,1\\right\\}.\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1x^3\\,\\,d x$ menggunakan jumlah Darboux bawah dan atas.",
  "Diberikan fungsi $f(x)=x$ pada $[0,1]$ dan partisi seragam\n\\[\nP_n=\\left\\{0,\\frac1n,\\frac2n,\\ldots,1\\right\\}.\n\\]\nTentukan integral Darboux bawah dan integral Darboux atas dari $f$.",
  "Diberikan fungsi\n\\[\nf(x)=\\left|x-\\frac12\\right|,\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1\\left|x-\\frac12\\right|\\,\\,d x$.",
  "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\n2,&0\\le x<\\frac13,\n-1,&\\frac13\\le x<\\frac23,\n3,&\\frac23\\le x\\le1.\n\\end{cases}\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1f(x)\\,\\,d x$.",
  "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\nx,&x\\neq\\frac12,\n10,&x=\\frac12,\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai $\\displaystyle\\int_0^1f(x)\\,\\,d x$.",
  "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\left\\{\\frac14,\\frac12,\\frac34\\right\\},\n0,&\\text{selainnya},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan integral Darboux bawah, integral Darboux atas, dan keterintegralan Darboux fungsi $f$.",
  "Didefinisikan fungsi Dirichlet\n\\[\nf(x)=\n\\begin{cases}\n1,&x\\in\\mathbb{Q},\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan integral Darboux bawah dan integral Darboux atas dari $f$ serta keterintegralan Riemannnya.",
  "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\nx,&x\\in\\mathbb{Q},\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan integral Darboux bawah, integral Darboux atas, dan keterintegralan Darboux fungsi $f$.",
  "Didefinisikan fungsi Thomae\n\\[\nf(x)=\n\\begin{cases}\n\\dfrac1q,&x=\\dfrac pq\\in\\mathbb{Q},\\ (p,q)=1,\n0,&x\\notin\\mathbb{Q},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa $f$ terintegralkan Darboux dan nilai integralnya sama dengan $0$.",
  "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\n\\dfrac1n,&x=\\dfrac1n\\text{ untuk suatu }n\\in\\mathbb{N},\n0,&\\text{selainnya},\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nTentukan keterintegralan Darboux fungsi $f$ dan nilai integralnya.",
  "Diberikan fungsi\n\\[\nf(x)=\\frac1{1+x},\\qquad x\\in[0,1],\n\\]\ndan partisi seragam $P_n=\\{0,1/n,\\ldots,1\\}$.\nBuktikan bahwa $f$ terintegralkan Darboux dengan menunjukkan bahwa $U(f,P_n)-L(f,P_n)\\to0$.",
  "Diberikan fungsi $f(x)=\\sqrt{x}$ pada $[0,1]$ dan partisi seragam $P_n=\\{0,1/n,\\ldots,1\\}$.\nTentukan suatu syarat pada $n$ yang menjamin\n\\[\nU(f,P_n)-L(f,P_n)<\\varepsilon\n\\]\nuntuk setiap $\\varepsilon>0$.",
  "Diberikan fungsi $f(x)=x(1-x)$ pada $[0,1]$ dan partisi\n\\[\nP=\\left\\{0,\\frac14,\\frac12,\\frac34,1\\right\\}.\n\\]\nTentukan $L(f,P)$ dan $U(f,P)$.",
  "Diberikan fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ serta dua partisi $P$ dan $Q$ dengan $P\\subseteq Q$.\nBuktikan bahwa\n\\[\nL(f,P)\\le L(f,Q)\\le U(f,Q)\\le U(f,P).\n\\]",
  "Diberikan fungsi $f(x)=x$ pada $[0,1]$ dengan\n\\[\nP=\\left\\{0,\\frac13,1\\right\\},\n\\qquad\nQ=\\left\\{0,\\frac14,\\frac12,1\\right\\}.\n\\]\nTentukan partisi penghalus bersama $R=P\\cup Q$ beserta $L(f,R)$ dan $U(f,R)$.",
  "Diberikan fungsi terbatas $f:[a,b]\\to\\mathbb{R}$ yang memenuhi bahwa untuk setiap $\\varepsilon>0$ terdapat partisi $P$ dengan\n\\[\nU(f,P)-L(f,P)<\\varepsilon.\n\\]\nBuktikan bahwa $f$ terintegralkan Darboux.",
  "Diberikan fungsi $f:[a,b]\\to\\mathbb{R}$ monoton naik.\nBuktikan bahwa $f$ terintegralkan Darboux menggunakan partisi seragam.",
  "Diberikan fungsi $f:[a,b]\\to\\mathbb{R}$ kontinu.\nBuktikan bahwa $f$ terintegralkan Darboux menggunakan kontinuitas seragam dan Kriteria Darboux.",
  "Diberikan fungsi $f(x)=2x+1$ pada $[0,1]$ dan tagged partition sebarang $P^*$ dengan norma partisi $\\lVert P\\rVert$.\nBuktikan bahwa jumlah Riemann $S(f,P^*)$ menuju $2$ ketika $\\lVert P\\rVert\\to0$.",
  "Didefinisikan\n\\[\nf(x)=\n\\begin{cases}\nx^2,&x\\neq\\frac12,\n5,&x=\\frac12,\n\\end{cases}\n\\qquad x\\in[0,1].\n\\]\nBuktikan bahwa $f$ terintegralkan Riemann langsung dari definisi jumlah Riemann.",
  "Diberikan fungsi terintegralkan Darboux $f,g:[a,b]\\to\\mathbb{R}$ dan skalar $\\alpha,\\beta\\in\\mathbb{R}$.\nBuktikan bahwa $\\alpha f+\\beta g$ terintegralkan Darboux.",
  "Diberikan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$.\nBuktikan bahwa\n\\[\nh(x)=\\max\\{f(x),g(x)\\}\n\\qquad\\text{dan}\\qquad\nk(x)=\\min\\{f(x),g(x)\\}\n\\]\nterintegralkan Riemann pada $[a,b]$.",
  "Diberikan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$.\nBuktikan bahwa hasil kali $fg$ terintegralkan Riemann pada $[a,b]$.",
  "Diberikan fungsi terintegralkan Riemann $f:[a,b]\\to\\mathbb{R}$ dan terdapat $m>0$ sehingga\n\\[\n|f(x)|\\ge m\n\\]\nuntuk setiap $x\\in[a,b]$.\nBuktikan bahwa $1/f$ terintegralkan Riemann pada $[a,b]$.",
  "Diberikan fungsi terintegralkan Riemann $f:[a,b]\\to\\mathbb{R}$ dan fungsi kontinu $\\varphi:\\mathbb{R}\\to\\mathbb{R}$ pada suatu interval yang memuat $f([a,b])$.\nBuktikan bahwa $\\varphi\\circ f$ terintegralkan Riemann pada $[a,b]$.",
  "Diberikan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$.\nBuktikan bahwa\n\\[\n\\left|\\int_a^b f(x)\\,\\,d x-\\int_a^b g(x)\\,\\,d x\\right|\n\\le\n\\int_a^b|f(x)-g(x)|\\,\\,d x.\n\\]",
  "Diberikan fungsi terintegralkan Riemann $f,g:[a,b]\\to\\mathbb{R}$ dan $f(x)\\le g(x)$ untuk setiap $x\\in[a,b]$ kecuali pada sejumlah berhingga titik.\nBuktikan bahwa\n\\[\n\\int_a^b f(x)\\,\\,d x\\le\\int_a^b g(x)\\,\\,d x.\n\\]",
  "Diberikan fungsi kontinu $f:[a,b]\\to\\mathbb{R}$ dengan $f(x)\\ge0$ untuk setiap $x\\in[a,b]$ dan\n\\[\n\\int_a^b f(x)\\,\\,d x=0.\n\\]\nBuktikan bahwa $f(x)=0$ untuk setiap $x\\in[a,b]$.",
  "Diberikan fungsi terintegralkan Riemann $f:[a,b]\\to\\mathbb{R}$ serta\n\\[\nf^+(x)=\\max\\{f(x),0\\},\n\\qquad\nf^-(x)=\\max\\{-f(x),0\\}.\n\\]\nBuktikan bahwa $f^+$ dan $f^-$ terintegralkan Riemann serta\n\\[\nf=f^+-f^-,\n\\qquad\n|f|=f^++f^-.\n\\]"
];
