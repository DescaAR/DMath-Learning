export type ComplexSourceBlock = {
  kind: "paragraph" | "definition" | "lemma" | "proposition" | "theorem" | "corollary" | "note" | "example" | "identity" | "exercise" | "proof" | "solution";
  title?: string; text?: string; body?: string; proof?: string; solution?: string;
};
export type ComplexSourceSubsection = { title: string; blocks: ComplexSourceBlock[] };
export type ComplexSourceSection = { title: string; blocks: ComplexSourceBlock[]; subsections: ComplexSourceSubsection[] };
export const complexAnalysisSections: ComplexSourceSection[] = [
  {
    "title": "Bilangan Kompleks",
    "blocks": [],
    "subsections": [
      {
        "title": "Peta awal: mengapa bilangan kompleks?",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Gagasan utama..\n\nAnalisis kompleks mempelajari fungsi bernilai kompleks dengan variabel kompleks. Fondasinya adalah menganggap\n\\[\nz=x+iy\n\\]\nsebagai titik, vektor, dan bilangan sekaligus.\n\nTujuan bab awal..\n\nKita membangun empat lapisan:\n\\[\n\\begin{aligned}\n\\text{aljabar}&\\longrightarrow \\text{geometri}\\\\\n&\\longrightarrow \\text{limit}\\longrightarrow \\text{turunan kompleks}.\n\\end{aligned}\n\\]"
          }
        ]
      },
      {
        "title": "Bilangan kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Himpunan bilangan kompleks adalah\n\\[\n\\mathbb{C}=\\{x+iy:x,y\\in\\mathbb{R},\\ i^2=-1\\}.\n\\]\nJika $z=x+iy$, maka\n\\[\n\\operatorname{Re}z=x,\\qquad \\operatorname{Im}z=y.\n\\]"
          },
          {
            "kind": "note",
            "title": "Catatan matematis",
            "body": "Bagian imajiner $\\operatorname{Im}z$ adalah bilangan real $y$, bukan $iy$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Jika $z=-3+5i$, maka $\\operatorname{Re}z=-3$ dan $\\operatorname{Im}z=5$."
          }
        ]
      },
      {
        "title": "Kesamaan dan operasi dasar",
        "blocks": [
          {
            "kind": "definition",
            "title": "Kesamaan dan operasi dasar",
            "body": "Untuk $z_1=x_1+iy_1$ dan $z_2=x_2+iy_2$, kesamaan dua bilangan kompleks didefinisikan oleh\n\\[\nz_1=z_2 \\iff x_1=x_2\\text{ dan }y_1=y_2.\n\\]\nOperasi penjumlahan dan perkalian pada $\\mathbb{C}$ didefinisikan berturut-turut oleh\n\\[\n(x_1+iy_1)+(x_2+iy_2)=(x_1+x_2)+i(y_1+y_2),\n\\]\ndan\n\\[\n(x_1+iy_1)(x_2+iy_2)=(x_1x_2-y_1y_2)+i(x_1y_2+x_2y_1).\n\\]"
          },
          {
            "kind": "example",
            "title": "Contoh singkat",
            "body": "\\[\n(2+3i)(1-4i)=14-5i.\n\\]"
          }
        ]
      },
      {
        "title": "Struktur lapangan kompleks",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Himpunan $\\mathbb{C}$ dengan operasi penjumlahan dan perkalian biasa merupakan lapangan. Identitas aditifnya $0=0+0i$, identitas perkaliannya $1=1+0i$.",
            "proof": "Diketahui Himpunan $\\mathbb{C}$ dilengkapi dengan operasi penjumlahan dan perkalian kompleks sebagaimana telah didefinisikan.\n\nDibuktikan $\\mathbb{C}$ memenuhi seluruh aksioma lapangan.\n\nDiambil sebarang\n\\[\nz=x+iy,\\qquad w=a+ib,\\qquad v=c+id\\in\\mathbb{C}.\n\\]\nPembuktian dibagi ke dalam beberapa bagian berikut.\n\n•  Ketertutupan.\\\\\nDari definisi operasi kompleks diperoleh\n\\[\nz+w=(x+a)+i(y+b)\\in\\mathbb{C}\n\\]\ndan\n\\[\nzw=(xa-yb)+i(xb+ya)\\in\\mathbb{C}.\n\\]\nDengan demikian, $\\mathbb{C}$ tertutup terhadap penjumlahan dan perkalian.\n\n•  Sifat komutatif dan asosiatif.\\\\\nKarena operasi pada bagian real dan imajiner menggunakan operasi bilangan real, berlaku\n\\[\nz+w=w+z,\\qquad (z+w)+v=z+(w+v),\n\\]\nserta\n\\[\nzw=wz,\\qquad (zw)v=z(wv).\n\\]\nKesamaan tersebut diperoleh dengan mengembangkan kedua ruas dan menggunakan sifat komutatif serta asosiatif pada $\\mathbb{R}$.\n\n•  Hukum distributif.\\\\\nDengan pengembangan langsung diperoleh\n\\[\nz(w+v)=zw+zv.\n\\]\nHukum distributif yang lain mengikuti dari komutativitas perkalian.\n\n•  Elemen identitas.\\\\\nElemen $0=0+0i$ merupakan identitas aditif karena\n\\[\nz+0=(x+0)+i(y+0)=z.\n\\]\nElemen $1=1+0i$ merupakan identitas perkalian karena\n\\[\nz\\cdot1=(x+iy)(1+0i)=x+iy=z.\n\\]\n\n•  Invers aditif.\\\\\nUntuk $z=x+iy$, elemen $-z=-x-iy$ memenuhi\n\\[\nz+(-z)=(x-x)+i(y-y)=0.\n\\]\nDengan demikian, setiap elemen $\\mathbb{C}$ mempunyai invers aditif.\n\n•  Invers perkalian untuk elemen tak nol.\\\\\nDiandaikan $z\\ne0$. Kondisi tersebut memberikan $(x,y)\\ne(0,0)$, sehingga\n\\[\nx^2+y^2>0.\n\\]\nDidefinisikan\n\\[\nz^{-1}=\\frac{x-iy}{x^2+y^2}=\\frac{\\bar z}{|z|^2}.\n\\]\nSelanjutnya,\n\\[\nzz^{-1}\n=(x+iy)\\frac{x-iy}{x^2+y^2}\n=\\frac{x^2+y^2}{x^2+y^2}\n=1.\n\\]\nJadi setiap elemen tak nol di $\\mathbb{C}$ mempunyai invers perkalian.\n\nSeluruh aksioma lapangan telah dipenuhi oleh $\\mathbb{C}$.\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Konjugat kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Jika $z=x+iy$, konjugat kompleksnya adalah\n\\[\n\\bar z=x-iy.\n\\]"
          },
          {
            "kind": "paragraph",
            "text": "Interpretasi geometri..\n\nKonjugasi mencerminkan titik $z$ terhadap sumbu real."
          },
          {
            "kind": "corollary",
            "title": "Akibat langsung",
            "body": "\\[\nz+\\bar z=2\\operatorname{Re}z,\\qquad z-\\bar z=2i\\operatorname{Im}z.\n\\]"
          }
        ]
      },
      {
        "title": "Sifat-sifat konjugat",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Untuk setiap $z,w\\in\\mathbb{C}$ berlaku:\n\\[\n\\overline{z+w}=\\bar z+\\bar w,\n\\qquad\n\\overline{zw}=\\bar z\\bar w,\n\\qquad\n\\overline{\\bar z}=z.\n\\]\nJika $w\\ne0$, maka\n\\[\n\\overline{\\frac zw}=\\frac{\\bar z}{\\bar w}.\n\\]",
            "proof": "Diketahui Bilangan kompleks $z=x+iy$ dan $w=a+ib$, dengan $w\\ne0$ untuk bagian hasil bagi.\n\nDibuktikan Keempat identitas konjugasi pada pernyataan teorema berlaku.\n\nPembuktian dilakukan untuk setiap identitas secara terpisah.\n\n•  Konjugat jumlah.\\\\\nDari definisi konjugat diperoleh\n\\[\n\\begin{aligned}\n\\overline{z+w}\n&=\\overline{(x+a)+i(y+b)}\\\\\n&=(x+a)-i(y+b)\\\\\n&=(x-iy)+(a-ib)\\\\\n&=\\bar z+\\bar w.\n\\end{aligned}\n\\]\n\n•  Konjugat hasil kali.\\\\\nHasil kali $z$ dan $w$ adalah\n\\[\nzw=(xa-yb)+i(xb+ya).\n\\]\nOleh karena itu,\n\\[\n\\overline{zw}=(xa-yb)-i(xb+ya).\n\\]\nDi sisi lain,\n\\[\n\\begin{aligned}\n\\bar z\\,\\bar w\n&=(x-iy)(a-ib)\\\\\n&=(xa-yb)-i(xb+ya).\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\n\\overline{zw}=\\bar z\\bar w.\n\\]\n\n•  Konjugat ganda.\\\\\nDari definisi langsung diperoleh\n\\[\n\\overline{\\bar z}=\\overline{x-iy}=x+iy=z.\n\\]\n\n•  Konjugat hasil bagi.\\\\\nDiandaikan $w\\ne0$. Karena\n\\[\nw\\left(\\frac1w\\right)=1,\n\\]\npengambilan konjugat pada kedua ruas dan penggunaan identitas hasil kali yang telah dibuktikan memberikan\n\\[\n\\bar w\\,\\overline{\\left(\\frac1w\\right)}=1.\n\\]\nKarena $\\bar w\\ne0$, diperoleh\n\\[\n\\overline{\\left(\\frac1w\\right)}=\\frac1{\\bar w}.\n\\]\nDengan demikian,\n\\[\n\\overline{\\frac zw}\n=\\overline{z\\frac1w}\n=\\bar z\\,\\overline{\\left(\\frac1w\\right)}\n=\\frac{\\bar z}{\\bar w}.\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          },
          {
            "kind": "identity",
            "title": "Bagian real dan imajiner",
            "body": "Untuk setiap $z\\in\\mathbb{C}$, berlaku\n\\[\n\\operatorname{Re}z=\\frac{z+\\bar z}{2},\\qquad\n\\operatorname{Im}z=\\frac{z-\\bar z}{2i}.\n\\]"
          }
        ]
      },
      {
        "title": "Modulus dan jarak",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Untuk $z=x+iy$, modulus $z$ adalah\n\\[\n|z|=\\sqrt{x^2+y^2}.\n\\]"
          },
          {
            "kind": "identity",
            "title": "Identitas fundamental modulus",
            "body": "Untuk $z=x+iy$, berlaku\n\\[\nz\\bar z=(x+iy)(x-iy)=x^2+y^2=|z|^2.\n\\]"
          },
          {
            "kind": "note",
            "title": "Invers kompleks",
            "body": "Jika $z\\ne0$, maka\n\\[\n\\frac1z=\\frac{\\bar z}{|z|^2}.\n\\]"
          }
        ]
      },
      {
        "title": "Visualisasi -- Konjugat, modulus, dan jarak",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Untuk $z=x+iy$, titik $z$ dan $\\bar z=x-iy$ simetris terhadap sumbu real."
          },
          {
            "kind": "corollary",
            "title": "",
            "body": "\\[\n|z|=|\\bar z|,\n\\qquad\n|z-w|=d(z,w).\n\\]\nDengan demikian, modulus tidak berubah oleh konjugasi dan $|z-w|$ menyatakan jarak Euclid antara $z$ dan $w$."
          },
          {
            "kind": "note",
            "title": "Interpretasi gambar",
            "body": "Segitiga siku-siku pada bidang kompleks merepresentasikan identitas $|z|=\\sqrt{x^2+y^2}$, sedangkan pencerminan terhadap sumbu real mengubah bagian imajiner $iy$ menjadi $-iy$."
          }
        ]
      },
      {
        "title": "Sifat dasar modulus",
        "blocks": [
          {
            "kind": "lemma",
            "title": "",
            "body": "Untuk setiap $z,w\\in\\mathbb{C}$ berlaku:\n\\[\n|z|\\ge0,\n\\qquad |z|=0\\iff z=0,\n\\qquad |\\bar z|=|z|.\n\\]\nSelain itu,\n\\[\n|zw|=|z||w|,\n\\qquad\n\\left|\\frac zw\\right|=\\frac{|z|}{|w|}\\quad(w\\ne0).\n\\]",
            "proof": "Diketahui Bilangan kompleks $z,w\\in\\mathbb{C}$, dengan $w\\ne0$ pada pernyataan hasil bagi.\n\nDibuktikan Seluruh sifat modulus pada lemma berlaku.\n\nPembuktian dibagi sesuai dengan sifat yang dinyatakan.\n\n•  Ketaknegatifan.\\\\\nDituliskan $z=x+iy$. Karena $x^2+y^2\\ge0$, maka\n\\[\n|z|=\\sqrt{x^2+y^2}\\ge0.\n\\]\n\n•  Karakterisasi $|z|=0$.\\\\\nDibuktikan bahwa $|z|=0$ jika dan hanya jika $z=0$. Pembuktian dilakukan dalam dua arah.\n\n($\\Rightarrow$)\n\nDiketahui $|z|=0$. Dibuktikan bahwa $z=0$.\n\nDari definisi modulus diperoleh\n\\[\n\\sqrt{x^2+y^2}=0.\n\\]\nDengan menguadratkan kedua ruas diperoleh\n\\[\nx^2+y^2=0.\n\\]\nKarena $x^2\\ge0$ dan $y^2\\ge0$, kesamaan tersebut hanya mungkin apabila $x=0$ dan $y=0$. Oleh karena itu,\n\\[\nz=x+iy=0.\n\\]\n\n($\\Leftarrow$)\n\nDiketahui $z=0$. Dibuktikan bahwa $|z|=0$.\n\nKarena $z=0$, diperoleh $x=0$ dan $y=0$. Dengan demikian,\n\\[\n|z|=\\sqrt{x^2+y^2}=\\sqrt{0^2+0^2}=0.\n\\]\n\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh\n\\[\n|z|=0\\iff z=0.\n\\]\n\n•  Modulus konjugat.\\\\\nKarena $\\bar z=x-iy$, diperoleh\n\\[\n|\\bar z|=\\sqrt{x^2+(-y)^2}=\\sqrt{x^2+y^2}=|z|.\n\\]\n\n•  Modulus hasil kali.\\\\\nBerdasarkan identitas $|\\xi|^2=\\xi\\bar\\xi$ dan sifat konjugat hasil kali,\n\\[\n\\begin{aligned}\n|zw|^2\n&=(zw)\\overline{(zw)}\\\\\n&=(zw)(\\bar z\\bar w)\\\\\n&=(z\\bar z)(w\\bar w)\\\\\n&=|z|^2|w|^2.\n\\end{aligned}\n\\]\nKedua ruas tidak negatif. Pengambilan akar kuadrat memberikan\n\\[\n|zw|=|z||w|.\n\\]\n\n•  Modulus hasil bagi.\\\\\nDiandaikan $w\\ne0$. Karena $z=(z/w)w$, sifat modulus hasil kali memberikan\n\\[\n|z|=\\left|\\frac zw\\right||w|.\n\\]\nKarena $|w|>0$, pembagian kedua ruas oleh $|w|$ menghasilkan\n\\[\n\\left|\\frac zw\\right|=\\frac{|z|}{|w|}.\n\\]\n\nDengan demikian, Lemma~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Ketaksamaan segitiga",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Ketaksamaan segitiga",
            "body": "Untuk setiap $z,w\\in\\mathbb{C}$ berlaku\n\\[\n|z+w|\\le |z|+|w|.\n\\]",
            "proof": "Diketahui Bilangan kompleks $z,w\\in\\mathbb{C}$.\n\nDibuktikan $|z+w|\\le |z|+|w|$.\n\nDiambil sebarang $z,w\\in\\mathbb{C}$. Berdasarkan identitas $|\\xi|^2=\\xi\\bar\\xi$ untuk setiap $\\xi\\in\\mathbb{C}$, diperoleh\n\\[\n\\begin{aligned}\n|z+w|^2\n&=(z+w)\\overline{(z+w)}\\\\\n&=(z+w)(\\bar z+\\bar w)\\\\\n&=z\\bar z+w\\bar w+z\\bar w+\\bar zw\\\\\n&=|z|^2+|w|^2+2\\operatorname{Re}(z\\bar w).\n\\end{aligned}\n\\]\n\nUntuk setiap $\\xi=a+ib\\in\\mathbb{C}$ berlaku\n\\[\n\\operatorname{Re}\\xi=a\\le \\sqrt{a^2+b^2}=|\\xi|.\n\\]\nPernyataan tersebut diterapkan pada $\\xi=z\\bar w$. Dengan sifat modulus hasil kali diperoleh\n\\[\n\\operatorname{Re}(z\\bar w)\n\\le |z\\bar w|\n=|z|\\,|\\bar w|\n=|z|\\,|w|.\n\\]\nOleh karena itu,\n\\[\n\\begin{aligned}\n|z+w|^2\n&\\le |z|^2+|w|^2+2|z|\\,|w|\\\\\n&=(|z|+|w|)^2.\n\\end{aligned}\n\\]\nKarena $|z+w|\\ge0$ dan $|z|+|w|\\ge0$, fungsi akar kuadrat yang monoton naik pada $[0,\\infty)$ dapat diterapkan pada kedua ruas. Dengan demikian,\n\\[\n|z+w|\\le |z|+|w|.\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Ketaksamaan segitiga terbalik",
        "blocks": [
          {
            "kind": "corollary",
            "title": "",
            "body": "Untuk setiap $z,w\\in\\mathbb{C}$ berlaku\n\\[\n\\bigl||z|-|w|\\bigr|\\le |z-w|.\n\\]",
            "proof": "Diketahui Bilangan kompleks $z,w\\in\\mathbb{C}$.\n\nDibuktikan $\\bigl||z|-|w|\\bigr|\\le |z-w|$.\n\nPembuktian diperoleh dari dua penerapan ketaksamaan segitiga.\n\n•  Dari identitas\n\\[\nz=(z-w)+w\n\\]\ndan Teorema Ketaksamaan Segitiga diperoleh\n\\[\n|z|\\le |z-w|+|w|.\n\\]\nDengan mengurangkan $|w|$ pada kedua ruas,\n\\[\n|z|-|w|\\le |z-w|. \\tag{1}\n\\]\n\n•  Dengan mempertukarkan peran $z$ dan $w$, diperoleh\n\\[\n|w|-|z|\\le |w-z|.\n\\]\nKarena $|w-z|=|z-w|$, maka\n\\[\n|w|-|z|\\le |z-w|. \\tag{2}\n\\]\n\nKetaksamaan (1) dan (2) bersama-sama memberikan\n\\[\n-|z-w|\\le |z|-|w|\\le |z-w|.\n\\]\nBerdasarkan definisi nilai mutlak pada $\\mathbb{R}$, pernyataan tersebut ekuivalen dengan\n\\[\n\\bigl||z|-|w|\\bigr|\\le |z-w|.\n\\]\n\nDengan demikian, Akibat~hasil terkait terbukti."
          },
          {
            "kind": "note",
            "title": "Interpretasi",
            "body": "Perubahan modulus tidak dapat melebihi jarak perpindahan titik pada bidang kompleks. Karena itu, fungsi $z\\mapsto |z|$ bersifat Lipschitz dengan konstanta $1$."
          }
        ]
      }
    ]
  },
  {
    "title": "Bentuk Polar dan Akar Kompleks",
    "blocks": [],
    "subsections": [
      {
        "title": "Bentuk polar",
        "blocks": [
          {
            "kind": "definition",
            "title": "Bentuk polar dan argumen",
            "body": "Jika $z=x+iy\\ne0$, didefinisikan\n\\[\nr=|z|,\n\\qquad x=r\\cos\\theta,\n\\qquad y=r\\sin\\theta.\n\\]\nRepresentasi\n\\[\nz=r(\\cos\\theta+i\\sin\\theta)\n\\]\ndisebut bentuk polar dari $z$. Setiap bilangan real $\\theta$ yang memenuhi representasi tersebut disebut argumen dari $z$. Seluruh argumen $z$ dinyatakan oleh\n\\[\n\\arg z=\\theta+2k\\pi,\\qquad k\\in\\mathbb{Z}.\n\\]"
          }
        ]
      },
      {
        "title": "Argumen utama",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Karena argumen tidak tunggal, dipilih satu cabang utama:\n\\[\n\\operatorname{Arg} z\\in(-\\pi,\\pi].\n\\]\nNilai ini disebut argumen utama dari $z$."
          },
          {
            "kind": "paragraph",
            "text": "\\subsubsection{Cara Menentukan Argumen Utama}\n\nDiberikan bilangan kompleks tak nol\n\\[\nz=x+iy\\ne0,\n\\qquad\nr=|z|=\\sqrt{x^2+y^2}.\n\\]\nJika $z=re^{i\\theta}$, hubungan antara koordinat Kartesius dan sudut $\\theta$ diberikan oleh\n\\[\n\\cos\\theta=\\frac{x}{r},\n\\qquad\n\\sin\\theta=\\frac{y}{r}.\n\\]\nApabila $x\\ne0$, diperoleh pula\n\\[\n\\tan\\theta=\\frac{y}{x}.\n\\]\nPersamaan terakhir sering digunakan untuk menentukan sudut, tetapi nilai $\\arctan(y/x)$ tidak selalu sama dengan $\\operatorname{Arg} z$."
          },
          {
            "kind": "note",
            "title": "Keterbatasan fungsi $\\arctan$",
            "body": "Nilai utama fungsi $\\arctan$ berada pada interval\n\\[\n-\\frac{\\pi}{2}<\\arctan t<\\frac{\\pi}{2}.\n\\]\nDengan demikian, keluaran $\\arctan$ secara langsung hanya memberikan sudut di kuadran I dan IV. Dua titik yang terletak pada arah berlawanan juga dapat mempunyai nilai $y/x$ yang sama. Sebagai contoh,\n\\[\n\\frac{1}{1}=\\frac{-1}{-1}=1,\n\\]\npadahal $1+i$ berada di kuadran I, sedangkan $-1-i$ berada di kuadran III. Oleh karena itu, tanda $x$ dan $y$ harus diperhatikan ketika argumen utama ditentukan."
          },
          {
            "kind": "paragraph",
            "text": "\\noindent1. Penentuan berdasarkan kuadran.\\\\\nUntuk $x\\ne0$, sudut acuan didefinisikan oleh\n\\[\n\\alpha=\\arctan\\left|\\frac{y}{x}\\right|,\n\\qquad\n0\\le\\alpha<\\frac{\\pi}{2}.\n\\]\nArgumen utama $\\operatorname{Arg} z\\in(-\\pi,\\pi]$ ditentukan berdasarkan posisi titik $(x,y)$ sebagai berikut:\n\\[\n\\boxed{\n\\operatorname{Arg} z=\n\\begin{cases}\n\\alpha, & x>0,\\ y\\ge0,\\\\[1mm]\n-\\alpha, & x>0,\\ y<0,\\\\[1mm]\n\\pi-\\alpha, & x<0,\\ y\\ge0,\\\\[1mm]\n-\\pi+\\alpha, & x<0,\\ y<0.\n\\end{cases}}\n\\]\nUntuk titik pada sumbu koordinat, nilai argumen utama diperoleh langsung dari arah vektornya:\n\\[\n\\operatorname{Arg} z=\n\\begin{cases}\n0, & y=0,\\ x>0,\\\\[1mm]\n\\pi, & y=0,\\ x<0,\\\\[1mm]\n\\dfrac{\\pi}{2}, & x=0,\\ y>0,\\\\[2mm]\n-\\dfrac{\\pi}{2}, & x=0,\\ y<0.\n\\end{cases}\n\\]\nArgumen untuk $z=0$ tidak didefinisikan karena titik asal tidak mempunyai arah tertentu."
          },
          {
            "kind": "paragraph",
            "text": "\\noindent2. Rumus langsung menggunakan $\\arctan(y/x)$.\\\\\nJika $x\\ne0$, aturan kuadran di atas ekuivalen dengan\n\\[\n\\boxed{\n\\operatorname{Arg} z=\n\\begin{cases}\n\\displaystyle \\arctan\\left(\\frac{y}{x}\\right), & x>0,\\\\[3mm]\n\\displaystyle \\arctan\\left(\\frac{y}{x}\\right)+\\pi, & x<0,\\ y\\ge0,\\\\[3mm]\n\\displaystyle \\arctan\\left(\\frac{y}{x}\\right)-\\pi, & x<0,\\ y<0.\n\\end{cases}}\n\\]\nKasus $x=0$ tidak dapat menggunakan rasio $y/x$ karena pembagian tersebut tidak terdefinisi. Untuk $x=0$, nilai $\\operatorname{Arg} z$ adalah $\\pi/2$ apabila $y>0$ dan $-\\pi/2$ apabila $y<0$.\n\n\\noindent3. Alternatif ketika $\\arctan$ tidak dapat digunakan.\\\\\nHubungan\n\\[\n\\cos\\theta=\\frac{x}{r}\n\\]\nmemberikan cara lain yang berlaku untuk setiap $z\\ne0$. Didefinisikan\n\\[\n\\theta_0=\\arccos\\left(\\frac{x}{r}\\right),\n\\qquad\n0\\le\\theta_0\\le\\pi.\n\\]\nTanda $y$ menentukan apakah titik terletak pada setengah bidang atas atau bawah. Dengan demikian,\n\\[\n\\boxed{\n\\operatorname{Arg} z=\n\\begin{cases}\n\\theta_0, & y\\ge0,\\\\[1mm]\n-\\theta_0, & y<0.\n\\end{cases}}\n\\]\nRumus ini tetap dapat digunakan ketika $x=0$. Pada perangkat lunak numerik, prinsip penentuan kuadran biasanya direalisasikan melalui fungsi\n\\[\n\\operatorname{atan2}(y,x),\n\\]\nyang menggunakan tanda $x$ dan $y$ secara bersamaan.\n\n\\noindent4. Argumen umum setelah argumen utama diperoleh.\\\\\nSetelah $\\operatorname{Arg} z$ diketahui, seluruh argumen $z$ dinyatakan oleh\n\\[\n\\arg z=\\operatorname{Arg} z+2k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]\nArgumen utama merupakan satu wakil pada interval $(-\\pi,\\pi]$ dari tak hingga banyak sudut yang merepresentasikan bilangan kompleks yang sama."
          },
          {
            "kind": "example",
            "title": "Kuadran II: koreksi terhadap hasil $\\arctan$",
            "body": "Diberikan\n\\[\nz=-1+i\\sqrt3.\n\\]\nKoordinatnya memenuhi $x=-1<0$ dan $y=\\sqrt3>0$, sehingga $z$ berada di kuadran II. Penggunaan langsung\n\\[\n\\arctan\\left(\\frac{y}{x}\\right)\n=\\arctan(-\\sqrt3)\n=-\\frac{\\pi}{3}\n\\]\nmemberikan sudut di kuadran IV dan tidak sesuai dengan posisi $z$.\n\nSudut acuannya adalah\n\\[\n\\alpha=\\arctan\\left|\\frac{\\sqrt3}{-1}\\right|\n=\\arctan(\\sqrt3)\n=\\frac{\\pi}{3}.\n\\]\nKarena $z$ berada di kuadran II, diperoleh\n\\[\n\\operatorname{Arg} z=\\pi-\\alpha\n=\\frac{2\\pi}{3}.\n\\]\nSeluruh argumennya adalah\n\\[\n\\arg z=\\frac{2\\pi}{3}+2k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]"
          },
          {
            "kind": "example",
            "title": "Kuadran III",
            "body": "Diberikan\n\\[\nz=-\\sqrt3-i.\n\\]\nKoordinatnya memenuhi $x<0$ dan $y<0$, sehingga $z$ berada di kuadran III. Sudut acuannya adalah\n\\[\n\\alpha\n=\\arctan\\left|\\frac{-1}{-\\sqrt3}\\right|\n=\\arctan\\left(\\frac{1}{\\sqrt3}\\right)\n=\\frac{\\pi}{6}.\n\\]\nArgumen utamanya diperoleh sebagai\n\\[\n\\operatorname{Arg} z=-\\pi+\\alpha\n=-\\frac{5\\pi}{6}.\n\\]"
          },
          {
            "kind": "example",
            "title": "Kasus $x=0$",
            "body": "Diberikan\n\\[\nz=-3i.\n\\]\nNilai $\\arctan(y/x)$ tidak terdefinisi karena $x=0$. Titik $(0,-3)$ berada pada sumbu imajiner negatif, sehingga\n\\[\n\\operatorname{Arg}(-3i)=-\\frac{\\pi}{2}.\n\\]\nMetode $\\arccos$ memberikan hasil yang sama. Karena $r=3$,\n\\[\n\\theta_0=\\arccos\\left(\\frac{0}{3}\\right)=\\frac{\\pi}{2}.\n\\]\nTanda $y<0$ memberikan\n\\[\n\\operatorname{Arg}(-3i)=-\\theta_0=-\\frac{\\pi}{2}.\n\\]"
          }
        ]
      },
      {
        "title": "Formula Euler",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Untuk setiap $\\theta\\in\\mathbb{R}$,\n\\[\ne^{i\\theta}=\\cos\\theta+i\\sin\\theta.\n\\]",
            "proof": "Diketahui Bilangan real $\\theta$ dan definisi deret pangkat untuk $e^z$, $\\cos z$, dan $\\sin z$.\n\nDibuktikan $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$.\n\nDiketahui deret pangkat\n\\[\ne^z=\\sum_{n=0}^{\\infty}\\frac{z^n}{n!},\\qquad\n\\cos z=\\sum_{n=0}^{\\infty}(-1)^n\\frac{z^{2n}}{(2n)!},\\qquad\n\\sin z=\\sum_{n=0}^{\\infty}(-1)^n\\frac{z^{2n+1}}{(2n+1)!}.\n\\]\nKetiga deret tersebut konvergen absolut untuk setiap $z\\in\\mathbb{C}$.\n\nSubstitusi $z=i\\theta$ pada deret eksponensial memberikan\n\\[\n\\begin{aligned}\ne^{i\\theta}\n&=\\sum_{n=0}^{\\infty}\\frac{(i\\theta)^n}{n!}\\\\\n&=1+i\\theta-\\frac{\\theta^2}{2!}-i\\frac{\\theta^3}{3!}\n  +\\frac{\\theta^4}{4!}+i\\frac{\\theta^5}{5!}-\\cdots.\n\\end{aligned}\n\\]\nKarena konvergensinya absolut, suku-suku dapat dikelompokkan berdasarkan pangkat genap dan ganjil. Dengan demikian,\n\\[\n\\begin{aligned}\ne^{i\\theta}\n&=\\left(1-\\frac{\\theta^2}{2!}+\\frac{\\theta^4}{4!}-\\cdots\\right)\n+i\\left(\\theta-\\frac{\\theta^3}{3!}+\\frac{\\theta^5}{5!}-\\cdots\\right)\\\\\n&=\\cos\\theta+i\\sin\\theta.\n\\end{aligned}\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Perkalian dan pembagian polar",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Jika\n\\[\nz_1=r_1e^{i\\theta_1},\\qquad z_2=r_2e^{i\\theta_2},\n\\]\nberlaku\n\\[\nz_1z_2=r_1r_2e^{i(\\theta_1+\\theta_2)}.\n\\]\nJika $z_2\\ne0$, maka\n\\[\n\\frac{z_1}{z_2}=\\frac{r_1}{r_2}e^{i(\\theta_1-\\theta_2)}.\n\\]",
            "proof": "Diketahui $z_1=r_1e^{i\\theta_1}$ dan $z_2=r_2e^{i\\theta_2}$, dengan $z_2\\ne0$ pada bagian hasil bagi.\n\nDibuktikan Rumus perkalian dan pembagian dalam bentuk polar.\n\nPembuktian terdiri atas dua bagian.\n\n•  Perkalian.\\\\\nBerdasarkan sifat eksponensial,\n\\[\n\\begin{aligned}\nz_1z_2\n&=(r_1e^{i\\theta_1})(r_2e^{i\\theta_2})\\\\\n&=r_1r_2e^{i\\theta_1}e^{i\\theta_2}\\\\\n&=r_1r_2e^{i(\\theta_1+\\theta_2)}.\n\\end{aligned}\n\\]\n\n•  Pembagian.\\\\\nDiandaikan $z_2\\ne0$. Berdasarkan definisi modulus, diperoleh $r_2=|z_2|>0$. Oleh karena itu,\n\\[\n\\begin{aligned}\n\\frac{z_1}{z_2}\n&=\\frac{r_1e^{i\\theta_1}}{r_2e^{i\\theta_2}}\\\\\n&=\\frac{r_1}{r_2}e^{i\\theta_1}e^{-i\\theta_2}\\\\\n&=\\frac{r_1}{r_2}e^{i(\\theta_1-\\theta_2)}.\n\\end{aligned}\n\\]\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          },
          {
            "kind": "note",
            "title": "Interpretasi",
            "body": "Secara geometris, perkalian bilangan kompleks mengalikan modulus dan menjumlahkan argumen."
          }
        ]
      },
      {
        "title": "Visualisasi -- Perkalian kompleks = rotasi + dilatasi",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Jika $z_1=r_1e^{i\\theta_1}$ dan $z_2=r_2e^{i\\theta_2}$, maka\n\\[\nz_1z_2=r_1r_2e^{i(\\theta_1+\\theta_2)}.\n\\]"
          },
          {
            "kind": "note",
            "title": "Interpretasi geometri",
            "body": "Mengalikan dengan $z_2$ berarti setiap titik dikalikan panjangnya dengan $r_2$ lalu diputar sebesar $\\theta_2$."
          }
        ]
      },
      {
        "title": "Rumus De Moivre",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Untuk setiap $n\\in\\mathbb{Z}$,\n\\[\n(\\cos\\theta+i\\sin\\theta)^n=\\cos(n\\theta)+i\\sin(n\\theta).\n\\]\nDalam notasi eksponensial,\n\\[\n(re^{i\\theta})^n=r^ne^{in\\theta}.\n\\]",
            "proof": "Diketahui $\\theta\\in\\mathbb{R}$ dan $n\\in\\mathbb{Z}$.\n\nDibuktikan $(\\cos\\theta+i\\sin\\theta)^n=\\cos(n\\theta)+i\\sin(n\\theta)$.\n\nKarena $n$ dapat bernilai positif, nol, atau negatif, pembuktian dibagi menjadi tiga kasus.\n\n•  Kasus $n>0$.\\\\\nBerdasarkan Formula Euler,\n\\[\n\\cos\\theta+i\\sin\\theta=e^{i\\theta}.\n\\]\nDengan hukum perpangkatan eksponensial,\n\\[\n(\\cos\\theta+i\\sin\\theta)^n=(e^{i\\theta})^n=e^{in\\theta}.\n\\]\nPenerapan Formula Euler sekali lagi memberikan\n\\[\ne^{in\\theta}=\\cos(n\\theta)+i\\sin(n\\theta).\n\\]\n\n•  Kasus $n=0$.\\\\\nKedua ruas sama dengan $1$, sebab\n\\[\n(\\cos\\theta+i\\sin\\theta)^0=1\n\\]\ndan\n\\[\n\\cos0+i\\sin0=1.\n\\]\n\n•  Kasus $n<0$.\\\\\nDituliskan $n=-m$ dengan $m>0$. Karena\n\\[\n|\\cos\\theta+i\\sin\\theta|=1,\n\\]\nbilangan $\\cos\\theta+i\\sin\\theta$ tidak nol. Oleh karena itu,\n\\[\n\\begin{aligned}\n(\\cos\\theta+i\\sin\\theta)^{-m}\n&=\\frac{1}{(\\cos\\theta+i\\sin\\theta)^m}\\\\\n&=\\frac{1}{e^{im\\theta}}\\\\\n&=e^{-im\\theta}\\\\\n&=\\cos(-m\\theta)+i\\sin(-m\\theta)\\\\\n&=\\cos(n\\theta)+i\\sin(n\\theta).\n\\end{aligned}\n\\]\n\nDengan mengalikan pula faktor modulus $r^n$, diperoleh $(re^{i\\theta})^n=r^ne^{in\\theta}$, dengan $r>0$ apabila $n<0$.\n\nDengan demikian, Teorema~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Akar ke-$n$ bilangan kompleks",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Misalkan $z=re^{i\\theta}\\ne0$. Semua solusi dari\n\\[\nw^n=z\n\\]\nadalah\n\\[\n\\boxed{w_k=r^{1/n}e^{i(\\theta+2k\\pi)/n}},\n\\qquad k=0,1,\\ldots,n-1.\n\\]",
            "proof": "Diketahui $z=re^{i\\theta}\\ne0$ dan bilangan bulat $n\\ge1$.\n\nDibuktikan Persamaan $w^n=z$ mempunyai tepat $n$ akar berbeda yang diberikan oleh $w_k=r^{1/n}e^{i(\\theta+2k\\pi)/n}$ untuk $k=0,1,\\ldots,n-1$.\n\nDiandaikan $w$ merupakan suatu solusi dari $w^n=z$. Karena $z\\ne0$, maka $w\\ne0$, sehingga dapat dituliskan\n\\[\nw=\\rho e^{i\\phi},\\qquad \\rho>0.\n\\]\nPembuktian disusun dalam tiga bagian.\n\n•  Penentuan modulus akar.\\\\\nDari $w^n=z$ diperoleh\n\\[\n\\rho^ne^{in\\phi}=re^{i\\theta}.\n\\]\nKesamaan bilangan kompleks tak nol mengharuskan modulus kedua ruas sama. Oleh karena itu,\n\\[\n\\rho^n=r.\n\\]\nKarena $\\rho>0$, diperoleh satu-satunya nilai\n\\[\n\\rho=r^{1/n}.\n\\]\n\n•  Penentuan argumen akar.\\\\\nKesamaan dua bilangan kompleks tak nol juga mengharuskan argumennya berbeda sebesar kelipatan $2\\pi$. Dengan demikian,\n\\[\nn\\phi=\\theta+2k\\pi,\n\\qquad k\\in\\mathbb{Z},\n\\]\nDengan demikian, diperoleh\n\\[\n\\phi=\\frac{\\theta+2k\\pi}{n}.\n\\]\nSetiap solusi selanjutnya berbentuk\n\\[\nw_k=r^{1/n}e^{i(\\theta+2k\\pi)/n}.\n\\]\n\n•  Banyaknya akar yang berbeda.\\\\\nJika indeks $k$ diganti dengan $k+n$, argumen bertambah sebesar $2\\pi$, sehingga diperoleh bilangan kompleks yang sama. Karena itu, satu sistem perwakilan dapat diberikan oleh\n\\[\nk=0,1,\\ldots,n-1.\n\\]\nDiandaikan $w_k=w_\\ell$ untuk dua indeks $k,\\ell$ dalam rentang tersebut. Kesamaan tersebut mengharuskan selisih argumennya merupakan kelipatan $2\\pi$:\n\\[\n\\frac{2\\pi(k-\\ell)}{n}=2\\pi m\n\\]\nuntuk suatu $m\\in\\mathbb{Z}$. Hal ini memberikan $k-\\ell=mn$. Karena $|k-\\ell|<n$, satu-satunya kemungkinan adalah $m=0$, sehingga $k=\\ell$. Jadi $w_0,\\ldots,w_{n-1}$ saling berbeda.\n\nDengan demikian, Teorema~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Ilustrasi: Akar kompleks membentuk poligon beraturan",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Kasus umum..\n\nAkar-akar $w^n=z$ terletak pada lingkaran berjari-jari $r^{1/n}$ dan sudutnya berjarak sama:\n\\[\n\\Delta\\theta=\\frac{2\\pi}{n}.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Akar-akar $w^5=1$ adalah\n\\[\ne^{2\\pi ik/5},\\qquad k=0,1,2,3,4.\n\\]"
          }
        ]
      },
      {
        "title": "Akar kesatuan",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Solusi persamaan\n\\[\nz^n=1\n\\]\ndisebut akar-akar kesatuan orde $n$."
          },
          {
            "kind": "paragraph",
            "text": "Rumus..\n\nJika\n\\[\n\\omega=e^{2\\pi i/n},\n\\]\ndiperoleh semua akar kesatuan orde $n$ sebagai\n\\[\n1,\\omega,\\omega^2,\\ldots,\\omega^{n-1}.\n\\]"
          },
          {
            "kind": "note",
            "title": "Identitas penting",
            "body": "Untuk $n\\ge2$,\n\\[\n1+\\omega+\\omega^2+\\cdots+\\omega^{n-1}=0.\n\\]"
          }
        ]
      },
      {
        "title": "Jumlah akar kesatuan",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Jika $\\omega=e^{2\\pi i/n}$ dan $n\\ge2$, maka\n\\[\n\\sum_{k=0}^{n-1}\\omega^k=0.\n\\]",
            "proof": "Diketahui $\\omega=e^{2\\pi i/n}$ dengan $n\\ge2$. Karena\n\\[\n\\omega^n=e^{2\\pi i}=1\n\\]\ndan $0<2\\pi/n<2\\pi$, diperoleh $\\omega\\ne1$.\n\nDibuktikan $1+\\omega+\\omega^2+\\cdots+\\omega^{n-1}=0$.\n\nDidefinisikan\n\\[\nS=1+\\omega+\\omega^2+\\cdots+\\omega^{n-1}.\n\\]\nPerkalian kedua ruas dengan $\\omega$ memberikan\n\\[\n\\omega S=\\omega+\\omega^2+\\cdots+\\omega^{n-1}+\\omega^n.\n\\]\nSelanjutnya, persamaan kedua dikurangkan dari persamaan pertama sehingga diperoleh\n\\[\n\\begin{aligned}\nS-\\omega S\n&=1-\\omega^n,\\\\\n(1-\\omega)S\n&=1-\\omega^n.\n\\end{aligned}\n\\]\nKarena $\\omega^n=1$, ruas kanan bernilai nol. Dengan demikian,\n\\[\n(1-\\omega)S=0.\n\\]\nKarena $\\omega\\ne1$, diperoleh $1-\\omega\\ne0$. Oleh karena itu,\n\\[\nS=0.\n\\]\nBerdasarkan definisi $S$, diperoleh\n\\[\n1+\\omega+\\omega^2+\\cdots+\\omega^{n-1}=0.\n\\]\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          },
          {
            "kind": "note",
            "title": "",
            "body": "Identitas ini sering muncul pada soal olimpiade, aljabar, Fourier diskret, dan evaluasi jumlah kompleks."
          }
        ]
      }
    ]
  },
  {
    "title": "Topologi Bidang Kompleks",
    "blocks": [],
    "subsections": [
      {
        "title": "Metrik pada bidang kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Jarak antara $z,w\\in\\mathbb{C}$ didefinisikan oleh\n\\[\nd(z,w)=|z-w|.\n\\]\nDengan jarak ini, $\\mathbb{C}$ dapat dipandang sebagai ruang metrik."
          },
          {
            "kind": "paragraph",
            "text": "Makna..\n\nJika $z=x+iy$ dan $w=a+ib$, maka\n\\[\n|z-w|=\\sqrt{(x-a)^2+(y-b)^2}.\n\\]\nJadi jarak kompleks sama dengan jarak Euclidean di $\\mathbb{R}^2$."
          }
        ]
      },
      {
        "title": "Disk, persekitaran, dan annulus",
        "blocks": [
          {
            "kind": "definition",
            "title": "Disk, persekitaran berlubang, dan annulus",
            "body": "Diberikan $z_0\\in\\mathbb{C}$ dan $r>0$. Disk terbuka berpusat di $z_0$ dengan jari-jari $r$ didefinisikan oleh\n\\[\nD(z_0,r)=\\{z\\in\\mathbb{C}:|z-z_0|<r\\},\n\\]\nsedangkan disk tertutupnya didefinisikan oleh\n\\[\n\\overline D(z_0,r)=\\{z\\in\\mathbb{C}:|z-z_0|\\le r\\}.\n\\]\nPersekitaran berlubang berpusat di $z_0$ dengan jari-jari $r$ adalah himpunan\n\\[\nD(z_0,r)\\setminus\\{z_0\\}=\\{z\\in\\mathbb{C}:0<|z-z_0|<r\\}.\n\\]\nJika $0\\le r_1<r_2$, annulus berpusat di $z_0$ dengan jari-jari dalam $r_1$ dan jari-jari luar $r_2$ adalah\n\\[\nA(z_0;r_1,r_2)=\\{z\\in\\mathbb{C}:r_1<|z-z_0|<r_2\\}.\n\\]"
          }
        ]
      },
      {
        "title": "Titik interior, terbuka, dan tertutup",
        "blocks": [
          {
            "kind": "definition",
            "title": "Titik interior",
            "body": "Misalkan $S\\subseteq\\mathbb{C}$ dan $z_0\\in S$. Titik $z_0$ disebut titik interior dari $S$ apabila terdapat $r>0$ sehingga\n\\[\nD(z_0,r)\\subseteq S.\n\\]"
          },
          {
            "kind": "definition",
            "title": "Himpunan terbuka",
            "body": "Himpunan $S\\subseteq\\mathbb{C}$ disebut terbuka apabila setiap titik $z_0\\in S$ merupakan titik interior dari $S$."
          },
          {
            "kind": "definition",
            "title": "Himpunan tertutup",
            "body": "Himpunan $S\\subseteq\\mathbb{C}$ disebut tertutup apabila komplemennya $\\mathbb{C}\\setminus S$ merupakan himpunan terbuka."
          }
        ]
      },
      {
        "title": "Titik limit, domain, region",
        "blocks": [
          {
            "kind": "definition",
            "title": "Titik limit",
            "body": "Diberikan $S\\subseteq\\mathbb{C}$. Titik $z_0\\in\\mathbb{C}$ disebut titik limit dari $S$ apabila untuk setiap $r>0$ berlaku\n\\[\nD(z_0,r)\\cap (S\\setminus\\{z_0\\})\\ne\\varnothing.\n\\]\nDengan kata lain, setiap disk terbuka yang berpusat di $z_0$ memuat suatu titik dari $S$ yang berbeda dari $z_0$."
          },
          {
            "kind": "proposition",
            "title": "Karakterisasi himpunan tertutup",
            "body": "Himpunan $S\\subseteq\\mathbb{C}$ tertutup jika dan hanya jika $S$ memuat seluruh titik limitnya.",
            "proof": "Diketahui $S\\subseteq\\mathbb{C}$.\n\nDibuktikan $S$ tertutup jika dan hanya jika setiap titik limit dari $S$ berada di $S$.\n\nPembuktian dilakukan dalam dua arah.\n\n($\\Rightarrow$)\n\nDiketahui $S$ tertutup. Dibuktikan bahwa setiap titik limit dari $S$ berada di $S$.\n\nDiambil sebarang titik limit $z_0$ dari $S$. Diandaikan $z_0\\notin S$. Karena $S$ tertutup, maka $\\mathbb{C}\\setminus S$ terbuka. Oleh karena itu, terdapat $r>0$ sehingga\n\\[\nD(z_0,r)\\subseteq \\mathbb{C}\\setminus S.\n\\]\nAkibatnya,\n\\[\nD(z_0,r)\\cap S=\\varnothing,\n\\]\nDari hubungan tersebut diperoleh\n\\[\nD(z_0,r)\\cap(S\\setminus\\{z_0\\})=\\varnothing.\n\\]\nHal tersebut bertentangan dengan asumsi bahwa $z_0$ merupakan titik limit dari $S$. Oleh karena itu, $z_0\\in S$. Karena $z_0$ dipilih sebarang, setiap titik limit dari $S$ berada di $S$.\n\n($\\Leftarrow$)\n\nDiketahui setiap titik limit dari $S$ berada di $S$. Dibuktikan bahwa $S$ tertutup.\n\nDibuktikan terlebih dahulu bahwa $\\mathbb{C}\\setminus S$ terbuka. Diambil sebarang $z_0\\in\\mathbb{C}\\setminus S$. Karena $z_0\\notin S$ dan setiap titik limit dari $S$ berada di $S$, maka $z_0$ bukan titik limit dari $S$. Berdasarkan negasi definisi titik limit, terdapat $r>0$ sehingga\n\\[\nD(z_0,r)\\cap(S\\setminus\\{z_0\\})=\\varnothing.\n\\]\nKarena $z_0\\notin S$, diperoleh\n\\[\nD(z_0,r)\\cap S=\\varnothing.\n\\]\nDengan demikian,\n\\[\nD(z_0,r)\\subseteq\\mathbb{C}\\setminus S.\n\\]\nJadi setiap titik $z_0\\in\\mathbb{C}\\setminus S$ merupakan titik interior dari $\\mathbb{C}\\setminus S$. Oleh karena itu, $\\mathbb{C}\\setminus S$ terbuka dan $S$ tertutup.\n\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh bahwa $S$ tertutup jika dan hanya jika $S$ memuat seluruh titik limitnya.\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          },
          {
            "kind": "definition",
            "title": "Domain",
            "body": "Himpunan $D\\subseteq\\mathbb{C}$ disebut domain apabila $D$ terbuka dan terhubung."
          },
          {
            "kind": "note",
            "title": "Istilah region",
            "body": "Istilah region tidak sepenuhnya seragam dalam literatur. Sebagian referensi menggunakannya sebagai sinonim domain, sedangkan referensi lain menggunakannya untuk domain bersama sebagian atau seluruh batasnya. Oleh karena itu, makna istilah tersebut mengikuti konvensi referensi yang digunakan."
          }
        ]
      }
    ]
  },
  {
    "title": "Fungsi Kompleks",
    "blocks": [],
    "subsections": [
      {
        "title": "Fungsi kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "Fungsi kompleks serta bagian real dan imajiner",
            "body": "Fungsi kompleks adalah pemetaan\n\\[\nf:D\\subseteq\\mathbb{C}\\to\\mathbb{C}.\n\\]\nJika $z=x+iy$, maka nilai $f(z)$ dapat ditulis secara tunggal dalam bentuk\n\\[\nf(z)=u(x,y)+iv(x,y),\n\\]\ndengan $u,v:D\\subseteq\\mathbb{R}^2\\to\\mathbb{R}$. Fungsi $u$ dan $v$ berturut-turut disebut bagian real dan bagian imajiner dari $f$, yaitu\n\\[\nu(x,y)=\\operatorname{Re}f(x+iy),\n\\qquad\nv(x,y)=\\operatorname{Im}f(x+iy).\n\\]"
          }
        ]
      },
      {
        "title": "Mengubah $f(z)$ menjadi $u+iv$",
        "blocks": [
          {
            "kind": "example",
            "title": "",
            "body": "Misalkan $f(z)=z^2$ dan $z=x+iy$.\n\\[\nf(z)=(x+iy)^2=x^2-y^2+2ixy.\n\\]\nDengan demikian,\n\\[\nu(x,y)=x^2-y^2,\n\\qquad\nv(x,y)=2xy.\n\\]"
          },
          {
            "kind": "example",
            "title": "",
            "body": "Jika $f(z)=\\bar z$, maka\n\\[\nf(z)=x-iy.\n\\]\nJadi\n\\[\nu(x,y)=x,\n\\qquad\nv(x,y)=-y.\n\\]"
          }
        ]
      },
      {
        "title": "Fungsi yang sering muncul",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "\\begin{minipage}[t]{.50\\linewidth}\n\nPolinom kompleks..\n\n\\[\np(z)=a_0+a_1z+\\cdots+a_nz^n.\n\\]\n\nFungsi rasional..\n\n\\[\nR(z)=\\frac{p(z)}{q(z)},\\qquad q(z)\\ne0.\n\\]\n\\end{minipage}\\hfill\n\\begin{minipage}[t]{.46\\linewidth}\n\nFungsi yang bergantung eksplisit pada $\\bar z$..\n\n\\[\n\\bar z,\\qquad |z|,\\qquad |z|^2,\n\\qquad \\operatorname{Re}z.\n\\]\nFungsi semacam ini sering tidak holomorfik.\n\nEksponensial kompleks..\n\n\\[\ne^{x+iy}=e^x(\\cos y+i\\sin y).\n\\]\n\\end{minipage}"
          }
        ]
      }
    ]
  },
  {
    "title": "Limit dan Kontinuitas",
    "blocks": [],
    "subsections": [
      {
        "title": "Limit fungsi kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Misalkan $f:D\\to\\mathbb{C}$ dan $z_0$ merupakan titik limit dari $D$. Dikatakan bahwa $f(z)$ mempunyai limit $L\\in\\mathbb{C}$ ketika $z\\to z_0$, dan ditulis\n\\[\n\\lim_{z\\to z_0}f(z)=L,\n\\]\napabila untuk setiap $\\varepsilon>0$ terdapat $\\delta>0$ sehingga untuk setiap $z\\in D$ berlaku\n\\[\n0<|z-z_0|<\\delta\n\\quad\\Longrightarrow\\quad\n|f(z)-L|<\\varepsilon.\n\\]"
          },
          {
            "kind": "note",
            "title": "Makna kuantor",
            "body": "Bilangan $\\varepsilon$ menentukan ketelitian yang diminta pada ruang hasil, sedangkan $\\delta$ menentukan seberapa dekat $z$ harus berada dari $z_0$ pada ruang asal. Nilai $\\delta$ boleh bergantung pada $\\varepsilon$, tetapi tidak boleh bergantung pada titik $z$ tertentu."
          }
        ]
      },
      {
        "title": "Ilustrasi: Banyak lintasan menuju satu titik",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Interpretasi matematis..\n\nAgar limit kompleks ada, nilai $f(z)$ harus mendekati angka yang sama untuk semua lintasan menuju $z_0$."
          },
          {
            "kind": "note",
            "title": "Strategi membuktikan limit tidak ada",
            "body": "Ketidakadaan limit dapat dibuktikan dengan menemukan dua lintasan menuju $z_0$ yang menghasilkan nilai limit berbeda."
          }
        ]
      },
      {
        "title": "Kriteria komponen untuk limit",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Misalkan\n\\[\nf(z)=u(x,y)+iv(x,y),\n\\qquad L=a+ib,\n\\qquad z_0=x_0+iy_0.\n\\]\nDengan demikian,\n\\[\n\\lim_{z\\to z_0}f(z)=L\n\\]\njika dan hanya jika\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}u(x,y)=a\n\\]\ndan\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}v(x,y)=b.\n\\]",
            "proof": "Diketahui $f(z)=u(x,y)+iv(x,y)$, $L=a+ib$, dan $z_0=x_0+iy_0$.\n\nDibuktikan $\\lim_{z\\to z_0}f(z)=L$ jika dan hanya jika $u(x,y)\\to a$ dan $v(x,y)\\to b$ ketika $(x,y)\\to(x_0,y_0)$.\n\nPembuktian dilakukan dalam dua arah.\n\n($\\Rightarrow$)\n\nDiketahui\n\\[\n\\lim_{z\\to z_0}f(z)=L.\n\\]\nDibuktikan bahwa\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}u(x,y)=a\n\\qquad\\text{dan}\\qquad\n\\lim_{(x,y)\\to(x_0,y_0)}v(x,y)=b.\n\\]\n\nKarena\n\\[\nf(z)-L=(u(x,y)-a)+i(v(x,y)-b),\n\\]\nberlaku\n\\[\n|u(x,y)-a|\\le |f(z)-L|,\n\\qquad\n|v(x,y)-b|\\le |f(z)-L|.\n\\]\nDiambil sebarang $\\varepsilon>0$. Berdasarkan asumsi $f(z)\\to L$, terdapat $\\delta>0$ sehingga\n\\[\n0<|z-z_0|<\\delta\n\\Longrightarrow\n|f(z)-L|<\\varepsilon.\n\\]\nOleh karena itu,\n\\[\n|u(x,y)-a|<\\varepsilon\n\\quad\\text{dan}\\quad\n|v(x,y)-b|<\\varepsilon.\n\\]\nDengan demikian,\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}u(x,y)=a,\n\\qquad\n\\lim_{(x,y)\\to(x_0,y_0)}v(x,y)=b.\n\\]\n\n($\\Leftarrow$)\n\nDiketahui\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}u(x,y)=a\n\\quad\\text{dan}\\quad\n\\lim_{(x,y)\\to(x_0,y_0)}v(x,y)=b.\n\\]\nDibuktikan bahwa\n\\[\n\\lim_{z\\to z_0}f(z)=L.\n\\]\n\nDiambil sebarang $\\varepsilon>0$. Berdasarkan kedua limit komponen, terdapat $\\delta_1,\\delta_2>0$ sehingga\n\\[\n0<|z-z_0|<\\delta_1\\Longrightarrow |u-a|<\\frac{\\varepsilon}{2},\n\\]\ndan\n\\[\n0<|z-z_0|<\\delta_2\\Longrightarrow |v-b|<\\frac{\\varepsilon}{2}.\n\\]\nDidefinisikan\n\\[\n\\delta=\\min\\{\\delta_1,\\delta_2\\}.\n\\]\nJika $0<|z-z_0|<\\delta$, maka kedua estimasi berlaku secara bersamaan. Berdasarkan ketaksamaan segitiga,\n\\[\n\\begin{aligned}\n|f(z)-L|\n&=|(u-a)+i(v-b)|\\\\\n&\\le |u-a|+|v-b|\\\\\n&<\\frac{\\varepsilon}{2}+\\frac{\\varepsilon}{2}\n=\\varepsilon.\n\\end{aligned}\n\\]\nOleh karena itu,\n\\[\n\\lim_{z\\to z_0}f(z)=L.\n\\]\n\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh ekuivalensi antara limit fungsi kompleks dan limit kedua komponennya.\n\nDengan demikian, Teorema~hasil terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Makna..\n\nLimit kompleks adalah limit dua variabel real untuk bagian real dan imajiner sekaligus."
          }
        ]
      },
      {
        "title": "Kriteria barisan",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "\\[\n\\lim_{z\\to z_0}f(z)=L\n\\]\njika dan hanya jika untuk setiap barisan $\\{z_n\\}\\subseteq D\\setminus\\{z_0\\}$ dengan $z_n\\to z_0$, berlaku\n\\[\nf(z_n)\\to L.\n\\]",
            "proof": "Diketahui Fungsi $f:D\\to\\mathbb{C}$, titik limit $z_0$ dari $D$, dan $L\\in\\mathbb{C}$.\n\nDibuktikan $\\lim_{z\\to z_0}f(z)=L$ jika dan hanya jika setiap barisan $\\{z_n\\}\\subseteq D\\setminus\\{z_0\\}$ dengan $z_n\\to z_0$ memenuhi $f(z_n)\\to L$.\n\nPembuktian dilakukan dalam dua arah.\n\n($\\Rightarrow$)\n\nDiketahui\n\\[\n\\lim_{z\\to z_0}f(z)=L.\n\\]\nDibuktikan bahwa untuk setiap barisan $\\{z_n\\}\\subseteq D\\setminus\\{z_0\\}$ dengan $z_n\\to z_0$, berlaku $f(z_n)\\to L$.\n\nDiambil sebarang barisan $\\{z_n\\}\\subseteq D\\setminus\\{z_0\\}$ dengan $z_n\\to z_0$. Diambil sebarang $\\varepsilon>0$. Berdasarkan definisi limit fungsi, terdapat $\\delta>0$ sehingga\n\\[\n0<|z-z_0|<\\delta\n\\Longrightarrow\n|f(z)-L|<\\varepsilon.\n\\]\nKarena $z_n\\to z_0$, terdapat $N\\in\\mathbb{N}$ sehingga untuk setiap $n\\ge N$ berlaku\n\\[\n|z_n-z_0|<\\delta.\n\\]\nKarena $z_n\\ne z_0$, diperoleh\n\\[\n0<|z_n-z_0|<\\delta.\n\\]\nDengan demikian,\n\\[\n|f(z_n)-L|<\\varepsilon\n\\]\nuntuk setiap $n\\ge N$. Oleh karena itu, $f(z_n)\\to L$.\n\n($\\Leftarrow$)\n\nDiketahui bahwa setiap barisan $\\{z_n\\}\\subseteq D\\setminus\\{z_0\\}$ dengan $z_n\\to z_0$ memenuhi $f(z_n)\\to L$. Dibuktikan bahwa\n\\[\n\\lim_{z\\to z_0}f(z)=L.\n\\]\n\nDiandaikan, untuk memperoleh kontradiksi, bahwa\n\\[\n\\lim_{z\\to z_0}f(z)\\ne L.\n\\]\nNegasi definisi limit menyatakan bahwa terdapat $\\varepsilon_0>0$ sedemikian sehingga untuk setiap $\\delta>0$ terdapat $z\\in D$ dengan\n\\[\n0<|z-z_0|<\\delta\n\\]\ndan\n\\[\n|f(z)-L|\\ge\\varepsilon_0.\n\\]\nUntuk setiap $n\\in\\mathbb{N}$ didefinisikan $\\delta_n=1/n$. Berdasarkan pernyataan tersebut, dapat dipilih $z_n\\in D\\setminus\\{z_0\\}$ sehingga\n\\[\n0<|z_n-z_0|<\\frac1n,\n\\qquad\n|f(z_n)-L|\\ge\\varepsilon_0.\n\\]\nKetaksamaan $|z_n-z_0|<1/n$ memberikan $z_n\\to z_0$. Akan tetapi, ketaksamaan\n\\[\n|f(z_n)-L|\\ge\\varepsilon_0\n\\]\nuntuk setiap $n$ menunjukkan bahwa $f(z_n)$ tidak konvergen ke $L$. Hal tersebut bertentangan dengan hipotesis. Oleh karena itu,\n\\[\n\\lim_{z\\to z_0}f(z)=L.\n\\]\n\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh kriteria barisan untuk limit fungsi kompleks.\n\nDengan demikian, Teorema~hasil terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Kegunaan..\n\nUntuk membuktikan limit tidak ada, cukup temukan dua barisan $z_n\\to z_0$ dan $w_n\\to z_0$ sehingga\n\\[\nf(z_n)\\to L_1,\n\\qquad\nf(w_n)\\to L_2,\n\\qquad L_1\\ne L_2.\n\\]"
          }
        ]
      },
      {
        "title": "Aljabar limit",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Jika $f(z)\\to L$ dan $g(z)\\to M$ ketika $z\\to z_0$, maka\n\\[\nf(z)+g(z)\\to L+M,\n\\]\n\\[\nf(z)g(z)\\to LM,\n\\]\ndan jika $M\\ne0$,\n\\[\n\\frac{f(z)}{g(z)}\\to \\frac LM.\n\\]",
            "proof": "Diketahui $f(z)\\to L$ dan $g(z)\\to M$ ketika $z\\to z_0$.\n\nDibuktikan Aturan limit untuk penjumlahan, perkalian, dan hasil bagi berlaku.\n\nPembuktian dibagi menjadi tiga bagian.\n\n•  Penjumlahan.\\\\\nDiambil sebarang $\\varepsilon>0$. Karena $f(z)\\to L$ dan $g(z)\\to M$, terdapat $\\delta_1,\\delta_2>0$ sehingga\n\\[\n0<|z-z_0|<\\delta_1\\Longrightarrow |f(z)-L|<\\frac{\\varepsilon}{2},\n\\]\ndan\n\\[\n0<|z-z_0|<\\delta_2\\Longrightarrow |g(z)-M|<\\frac{\\varepsilon}{2}.\n\\]\nDengan $\\delta=\\min\\{\\delta_1,\\delta_2\\}$, diperoleh\n\\[\n\\begin{aligned}\n|(f+g)-(L+M)|\n&\\le |f-L|+|g-M|\\\\\n&<\\varepsilon.\n\\end{aligned}\n\\]\nJadi $f(z)+g(z)\\to L+M$.\n\n•  Perkalian.\\\\\nIdentitas\n\\[\nfg-LM=f(g-M)+M(f-L)\n\\]\nmemberikan\n\\[\n|fg-LM|\\le |f|\\,|g-M|+|M|\\,|f-L|.\n\\]\nKarena $f(z)\\to L$, terdapat suatu persekitaran berlubang dari $z_0$ tempat $f$ terbatas. Secara khusus, untuk $z$ cukup dekat dengan $z_0$ dapat digunakan\n\\[\n|f(z)|\\le |L|+1.\n\\]\nKedua suku pada ruas kanan menuju nol ketika $z\\to z_0$. Dengan demikian,\n\\[\nfg\\to LM.\n\\]\n\n•  Hasil bagi.\\\\\nDiandaikan $M\\ne0$. Karena $g(z)\\to M$, terdapat suatu persekitaran berlubang dari $z_0$ sehingga\n\\[\n|g(z)-M|<\\frac{|M|}{2}.\n\\]\nKetaksamaan segitiga terbalik memberikan\n\\[\n|g(z)|\\ge |M|-|g(z)-M|>\\frac{|M|}{2}>0.\n\\]\nDengan demikian, $1/g(z)$ terdefinisi untuk $z$ yang cukup dekat dengan $z_0$, dan\n\\[\n\\left|\\frac1{g(z)}-\\frac1M\\right|\n=\\frac{|g(z)-M|}{|g(z)||M|}\n\\le \\frac{2}{|M|^2}|g(z)-M|\\longrightarrow0.\n\\]\nJadi\n\\[\n\\frac1{g(z)}\\to\\frac1M.\n\\]\nAturan perkalian yang telah dibuktikan kemudian memberikan\n\\[\n\\frac{f(z)}{g(z)}=f(z)\\frac1{g(z)}\\longrightarrow \\frac LM.\n\\]\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          },
          {
            "kind": "corollary",
            "title": "",
            "body": "Polinom kompleks kontinu di seluruh $\\mathbb{C}$, sedangkan fungsi rasional kontinu pada semua titik yang penyebutnya tidak nol."
          }
        ]
      },
      {
        "title": "Limit tidak ada karena lintasan berbeda",
        "blocks": [
          {
            "kind": "exercise",
            "title": "",
            "body": "Tentukan apakah limit berikut ada:\n\\[\n\\lim_{z\\to0}\\frac{\\bar z}{z}.\n\\]"
          },
          {
            "kind": "paragraph",
            "text": "Lintasan real..\n\nJika $z=t$ dengan $t\\in\\mathbb{R}$ dan $t\\to0$, maka\n\\[\n\\frac{\\bar z}{z}=\\frac{t}{t}=1.\n\\]\n\nLintasan imajiner..\n\nJika $z=it$ dengan $t\\in\\mathbb{R}$ dan $t\\to0$, maka\n\\[\n\\frac{\\bar z}{z}=\\frac{-it}{it}=-1.\n\\]\nKarena hasilnya berbeda, limit tidak ada."
          }
        ]
      },
      {
        "title": "Limit dengan estimasi modulus",
        "blocks": [
          {
            "kind": "exercise",
            "title": "",
            "body": "Buktikan\n\\[\n\\lim_{z\\to0}\\frac{\\bar z^2}{z}=0.\n\\]",
            "proof": "Diketahui Fungsi $f(z)=\\bar z^2/z$ untuk $z\\ne0$.\n\nDibuktikan $\\displaystyle\\lim_{z\\to0}\\frac{\\bar z^2}{z}=0$.\n\nUntuk $z\\ne0$ berlaku\n\\[\n\\left|\\frac{\\bar z^2}{z}\\right|\n=\\frac{|\\bar z|^2}{|z|}\n=\\frac{|z|^2}{|z|}\n=|z|.\n\\]\nDiambil sebarang $\\varepsilon>0$ dan ditentukan $\\delta=\\varepsilon$. Jika\n\\[\n0<|z|<\\delta,\n\\]\ndiperoleh\n\\[\n\\left|\\frac{\\bar z^2}{z}-0\\right|\n=|z|\n<\\delta\n=\\varepsilon.\n\\]\nBerdasarkan definisi limit,\n\\[\n\\lim_{z\\to0}\\frac{\\bar z^2}{z}=0.\n\\]\n Dengan demikian, terbukti bahwa $\\displaystyle\\lim_{z\\to0}\\frac{\\bar z^2}{z}=0$."
          }
        ]
      },
      {
        "title": "Kontinuitas",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Fungsi $f:D\\to\\mathbb{C}$ disebut kontinu di $z_0\\in D$ jika\n\\[\n\\lim_{z\\to z_0}f(z)=f(z_0).\n\\]\nSecara $\\varepsilon$-$\\delta$:\n\\[\n\\forall \\varepsilon>0,\\ \\exists\\delta>0:\n|z-z_0|<\\delta\\Rightarrow |f(z)-f(z_0)|<\\varepsilon.\n\\]"
          },
          {
            "kind": "proposition",
            "title": "Kriteria komponen untuk kontinuitas",
            "body": "Misalkan $f(z)=u(x,y)+iv(x,y)$ dan $z_0=x_0+iy_0$. Fungsi $f$ kontinu di $z_0$ jika dan hanya jika $u$ dan $v$ kontinu di $(x_0,y_0)$.",
            "proof": "Diketahui $f(z)=u(x,y)+iv(x,y)$ dan $z_0=x_0+iy_0$.\n\nDibuktikan $f$ kontinu di $z_0$ jika dan hanya jika $u$ dan $v$ kontinu di $(x_0,y_0)$.\n\nPembuktian dilakukan dalam dua arah.\n\n($\\Rightarrow$)\n\nDiketahui $f$ kontinu di $z_0$. Dibuktikan bahwa $u$ dan $v$ kontinu di $(x_0,y_0)$.\n\nDari kontinuitas $f$ diperoleh\n\\[\n\\lim_{z\\to z_0}f(z)=f(z_0).\n\\]\nDituliskan\n\\[\nf(z_0)=u(x_0,y_0)+iv(x_0,y_0).\n\\]\nBerdasarkan Teorema Kriteria Komponen untuk Limit, diperoleh\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}u(x,y)=u(x_0,y_0)\n\\]\ndan\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}v(x,y)=v(x_0,y_0).\n\\]\nDengan demikian, $u$ dan $v$ kontinu di $(x_0,y_0)$.\n\n($\\Leftarrow$)\n\nDiketahui $u$ dan $v$ kontinu di $(x_0,y_0)$. Dibuktikan bahwa $f$ kontinu di $z_0$.\n\nDari kontinuitas $u$ dan $v$ diperoleh\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}u(x,y)=u(x_0,y_0)\n\\]\ndan\n\\[\n\\lim_{(x,y)\\to(x_0,y_0)}v(x,y)=v(x_0,y_0).\n\\]\nTeorema Kriteria Komponen untuk Limit kemudian memberikan\n\\[\n\\lim_{z\\to z_0}f(z)=u(x_0,y_0)+iv(x_0,y_0)=f(z_0).\n\\]\nJadi $f$ kontinu di $z_0$.\n\nBerdasarkan pembuktian arah $(\\Rightarrow)$ dan arah $(\\Leftarrow)$, diperoleh bahwa $f$ kontinu di $z_0$ jika dan hanya jika $u$ dan $v$ kontinu di $(x_0,y_0)$.\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          }
        ]
      }
    ]
  },
  {
    "title": "Turunan Kompleks",
    "blocks": [],
    "subsections": [
      {
        "title": "Turunan kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Misalkan $f:D\\to\\mathbb{C}$ dan $z_0$ titik interior dari $D$. Fungsi $f$ disebut terdiferensial kompleks di $z_0$ jika limit\n\\[\nf'(z_0)=\\lim_{z\\to z_0}\\frac{f(z)-f(z_0)}{z-z_0}\n\\]\nada."
          },
          {
            "kind": "paragraph",
            "text": "Bentuk ekuivalen..\n\nDengan $h=z-z_0$,\n\\[\nf'(z_0)=\\lim_{h\\to0}\\frac{f(z_0+h)-f(z_0)}{h}.\n\\]"
          },
          {
            "kind": "note",
            "title": "Inti",
            "body": "Limit ini harus sama untuk semua arah $h\\to0$ di bidang kompleks."
          }
        ]
      },
      {
        "title": "Ilustrasi: Difference quotient kompleks",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Interpretasi..\n\nEkspresi\n\\[\n\\frac{f(z_0+h)-f(z_0)}{h}\n\\]\nmengukur rasio perubahan output terhadap perubahan input.\n\nSyarat kompleks..\n\nNilai rasio itu harus menuju angka yang sama ketika $h\\to0$ dari arah real, imajiner, diagonal, kurva, dan arah lain."
          }
        ]
      },
      {
        "title": "Diferensiabel mengakibatkan kontinu",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Jika $f$ terdiferensial kompleks di $z_0$, maka $f$ kontinu di $z_0$.",
            "proof": "Diketahui $f$ terdiferensial kompleks di $z_0$.\n\nDibuktikan $f$ kontinu di $z_0$, yaitu $\\lim_{z\\to z_0}f(z)=f(z_0)$.\n\nKarena $f$ terdiferensial kompleks di $z_0$, limit\n\\[\n\\lim_{z\\to z_0}\\frac{f(z)-f(z_0)}{z-z_0}=f'(z_0)\n\\]\nada dan bernilai hingga. Untuk $z\\ne z_0$ didefinisikan\n\\[\nQ(z)=\\frac{f(z)-f(z_0)}{z-z_0}.\n\\]\nDengan demikian,\n\\[\nQ(z)\\to f'(z_0)\n\\qquad (z\\to z_0).\n\\]\nKarena $Q$ mempunyai limit hingga, terdapat $r>0$ dan $M>0$ sehingga\n\\[\n0<|z-z_0|<r\n\\Longrightarrow\n|Q(z)|\\le M.\n\\]\n\nDiambil sebarang $\\varepsilon>0$. Ditentukan\n\\[\n\\delta=\\min\\left\\{r,\\frac{\\varepsilon}{M}\\right\\}.\n\\]\nUntuk $0<|z-z_0|<\\delta$, identitas\n\\[\nf(z)-f(z_0)=Q(z)(z-z_0)\n\\]\nmemberikan\n\\[\n\\begin{aligned}\n|f(z)-f(z_0)|\n&=|Q(z)|\\,|z-z_0|\\\\\n&\\le M|z-z_0|\\\\\n&<M\\frac{\\varepsilon}{M}\n=\\varepsilon.\n\\end{aligned}\n\\]\nJika $z=z_0$, ketaksamaan $|f(z)-f(z_0)|<\\varepsilon$ berlaku secara langsung. Dengan demikian,\n\\[\n\\lim_{z\\to z_0}f(z)=f(z_0),\n\\]\nDengan demikian, $f$ kontinu di $z_0$.\n\nDengan demikian, Teorema~hasil terkait terbukti."
          },
          {
            "kind": "note",
            "title": "Konvers tidak berlaku",
            "body": "Kontinuitas merupakan syarat perlu bagi diferensiabilitas kompleks, tetapi bukan syarat cukup. Fungsi $f(z)=\\bar z$ kontinu pada seluruh $\\mathbb{C}$, namun tidak terdiferensial kompleks di titik mana pun."
          }
        ]
      },
      {
        "title": "Turunan $f(z)=z^2$ dari definisi",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Perhitungan..\n\n\\[\nf'(z)=\\lim_{h\\to0}\\frac{(z+h)^2-z^2}{h}.\n\\]\nKarena\n\\[\n(z+h)^2-z^2=2zh+h^2,\n\\]\nDengan demikian,\n\\[\nf'(z)=\\lim_{h\\to0}(2z+h)=2z.\n\\]"
          },
          {
            "kind": "note",
            "title": "Hasil",
            "body": "\\[\n\\boxed{(z^2)'=2z.}\n\\]"
          }
        ]
      },
      {
        "title": "Aturan turunan kompleks",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Jika $f$ dan $g$ terdiferensial kompleks di $z$, maka:\n\\[\n(f+g)'=f'+g',\n\\qquad\n(cf)'=cf',\n\\]\n\\[\n(fg)'=f'g+fg',\n\\]\ndan jika $g(z)\\ne0$,\n\\[\n\\left(\\frac fg\\right)'=\\frac{f'g-fg'}{g^2}.\n\\]",
            "proof": "Diketahui $f$ dan $g$ terdiferensial kompleks di $z$, serta $c\\in\\mathbb{C}$; pada aturan hasil bagi diandaikan pula $g(z)\\ne0$.\n\nDibuktikan Aturan penjumlahan, perkalian skalar, hasil kali, dan hasil bagi pada pernyataan teorema berlaku.\n\nPembuktian dilakukan untuk setiap aturan.\n\n•  Penjumlahan.\\\\\nBerdasarkan definisi turunan,\n\\[\n\\begin{aligned}\n(f+g)'(z)\n&=\\lim_{h\\to0}\\frac{f(z+h)+g(z+h)-f(z)-g(z)}{h}\\\\\n&=\\lim_{h\\to0}\\left[\n\\frac{f(z+h)-f(z)}{h}\n+\\frac{g(z+h)-g(z)}{h}\n\\right]\\\\\n&=f'(z)+g'(z).\n\\end{aligned}\n\\]\n\n•  Perkalian skalar.\\\\\nUntuk $c\\in\\mathbb{C}$,\n\\[\n\\begin{aligned}\n(cf)'(z)\n&=\\lim_{h\\to0}\\frac{cf(z+h)-cf(z)}{h}\\\\\n&=c\\lim_{h\\to0}\\frac{f(z+h)-f(z)}{h}\\\\\n&=cf'(z).\n\\end{aligned}\n\\]\n\n•  Hasil kali.\\\\\nIdentitas berikut diperoleh dengan menambahkan dan mengurangkan $f(z+h)g(z)$ pada pembilang:\n\\[\n\\begin{aligned}\n&\\frac{f(z+h)g(z+h)-f(z)g(z)}{h}\\\\\n&\\qquad=\n f(z+h)\\frac{g(z+h)-g(z)}h\n +g(z)\\frac{f(z+h)-f(z)}h.\n\\end{aligned}\n\\]\nDiferensiabilitas kompleks mengakibatkan kontinuitas, sehingga\n\\[\nf(z+h)\\to f(z).\n\\]\nDengan mengambil limit ketika $h\\to0$, diperoleh\n\\[\n(fg)'(z)=f(z)g'(z)+g(z)f'(z).\n\\]\n\n•  Hasil bagi.\\\\\nDiandaikan $g(z)\\ne0$. Kontinuitas $g$ menjamin adanya persekitaran dari $z$ sehingga $g(z+h)\\ne0$ untuk $h$ cukup kecil. Untuk fungsi resiprokal berlaku\n\\[\n\\begin{aligned}\n\\frac{1/g(z+h)-1/g(z)}h\n&=\\frac{g(z)-g(z+h)}{h\\,g(z+h)g(z)}\\\\\n&=-\\frac{g(z+h)-g(z)}{h\\,g(z+h)g(z)}.\n\\end{aligned}\n\\]\nKetika $h\\to0$, diperoleh\n\\[\n\\left(\\frac1g\\right)'(z)=-\\frac{g'(z)}{g(z)^2}.\n\\]\nAturan hasil kali pada $f(1/g)$ kemudian memberikan\n\\[\n\\left(\\frac fg\\right)'(z)\n=f'(z)\\frac1{g(z)}\n+f(z)\\left(-\\frac{g'(z)}{g(z)^2}\\right)\n=\\frac{f'(z)g(z)-f(z)g'(z)}{g(z)^2}.\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          },
          {
            "kind": "proposition",
            "title": "Aturan rantai",
            "body": "Jika $g$ terdiferensial kompleks di $z$ dan $f$ terdiferensial kompleks di $g(z)$, maka\n\\[\n(f\\circ g)'(z)=f'(g(z))g'(z).\n\\]",
            "proof": "Diketahui $g$ terdiferensial kompleks di $z$ dan $f$ terdiferensial kompleks di $g(z)$.\n\nDibuktikan $(f\\circ g)'(z)=f'(g(z))g'(z)$.\n\nDidefinisikan\n\\[\n\\Delta g=g(z+h)-g(z).\n\\]\nDiferensiabilitas $g$ memberikan\n\\[\n\\frac{\\Delta g}{h}\\longrightarrow g'(z)\n\\qquad (h\\to0),\n\\]\nHubungan tersebut memberikan $\\Delta g\\to0$ ketika $h\\to0$.\n\nDituliskan $w=g(z)$. Diferensiabilitas $f$ di $w$ berarti terdapat fungsi galat $\\eta(k)$ dengan $\\eta(k)\\to0$ ketika $k\\to0$ sedemikian sehingga\n\\[\nf(w+k)-f(w)=f'(w)k+\\eta(k)k.\n\\]\nDengan $k=\\Delta g$, diperoleh\n\\[\nf(g(z+h))-f(g(z))\n=f'(g(z))\\Delta g+\\eta(\\Delta g)\\Delta g.\n\\]\nUntuk $h\\ne0$,\n\\[\n\\frac{f(g(z+h))-f(g(z))}{h}\n=f'(g(z))\\frac{\\Delta g}{h}\n+\\eta(\\Delta g)\\frac{\\Delta g}{h}.\n\\]\nKetika $h\\to0$, berlaku\n\\[\n\\frac{\\Delta g}{h}\\to g'(z),\n\\qquad\n\\eta(\\Delta g)\\to0.\n\\]\nSelain itu, $\\Delta g/h$ mempunyai limit hingga, sehingga terbatas pada suatu persekitaran berlubang dari $0$. Akibatnya,\n\\[\n\\eta(\\Delta g)\\frac{\\Delta g}{h}\\to0.\n\\]\nDengan demikian,\n\\[\n\\lim_{h\\to0}\\frac{f(g(z+h))-f(g(z))}{h}\n=f'(g(z))g'(z),\n\\]\nDengan demikian,\n\\[\n(f\\circ g)'(z)=f'(g(z))g'(z).\n\\]\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Turunan polinom dan rasional",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Polinom..\n\nJika\n\\[\np(z)=a_0+a_1z+\\cdots+a_nz^n,\n\\]\ndiperoleh\n\\[\np'(z)=a_1+2a_2z+\\cdots+na_nz^{n-1}.\n\\]\n\nFungsi rasional..\n\nFungsi\n\\[\nR(z)=\\frac{p(z)}{q(z)}\n\\]\nterdiferensial pada setiap titik dengan $q(z)\\ne0$."
          }
        ]
      },
      {
        "title": "Fungsi $f(z)=\\bar z$ tidak terdiferensial",
        "blocks": [
          {
            "kind": "proof",
            "body": "Diketahui $f(z)=\\bar z$ dan $z_0\\in\\mathbb{C}$ sebarang.\n\nDibuktikan $f'(z_0)$ tidak ada; akibatnya, $f(z)=\\bar z$ tidak terdiferensial kompleks di titik mana pun.\n\nUntuk $h\\ne0$ diperoleh\n\\[\n\\begin{aligned}\n\\frac{f(z_0+h)-f(z_0)}{h}\n&=\\frac{\\overline{z_0+h}-\\bar z_0}{h}\\\\\n&=\\frac{\\bar h}{h}.\n\\end{aligned}\n\\]\nApabila $f'(z_0)$ ada, limit $\\bar h/h$ ketika $h\\to0$ harus mempunyai nilai yang sama untuk setiap cara pendekatan menuju $0$. Dua pendekatan berikut memberikan hasil yang berbeda.\n\n•  Pendekatan sepanjang sumbu real.\\\\\nDiambil $h=t$ dengan $t\\in\\mathbb{R}\\setminus\\{0\\}$. Karena $\\bar h=t$, diperoleh\n\\[\n\\frac{\\bar h}{h}=\\frac{t}{t}=1.\n\\]\nJadi\n\\[\n\\lim_{t\\to0}\\frac{\\overline{t}}{t}=1.\n\\]\n\n•  Pendekatan sepanjang sumbu imajiner.\\\\\nDiambil $h=it$ dengan $t\\in\\mathbb{R}\\setminus\\{0\\}$. Karena $\\overline{it}=-it$, diperoleh\n\\[\n\\frac{\\bar h}{h}=\\frac{-it}{it}=-1.\n\\]\nJadi\n\\[\n\\lim_{t\\to0}\\frac{\\overline{it}}{it}=-1.\n\\]\n\nKarena dua lintasan menuju $0$ menghasilkan dua nilai limit yang berbeda, limit kuosien beda tidak ada. Oleh karena itu, $f'(z_0)$ tidak ada. Karena $z_0$ dipilih sebarang, kesimpulan tersebut berlaku pada setiap titik $z_0\\in\\mathbb{C}$.\n\nDengan demikian, klaim bahwa $f(z)=\\bar z$ tidak terdiferensial kompleks di titik mana pun terbukti."
          }
        ]
      },
      {
        "title": "Fungsi $f(z)=|z|^2$",
        "blocks": [
          {
            "kind": "proof",
            "body": "Diketahui $f(z)=|z|^2$.\n\nDibuktikan $f$ terdiferensial kompleks hanya di $z=0$, dengan $f'(0)=0$.\n\nPembuktian dibagi menjadi dua kasus.\n\n•  Kasus $z_0=0$.\\\\\nUntuk $h\\ne0$,\n\\[\n\\frac{f(h)-f(0)}{h}\n=\\frac{|h|^2}{h}.\n\\]\nKarena $|h|^2=h\\bar h$, diperoleh\n\\[\n\\frac{|h|^2}{h}=\\bar h.\n\\]\nKetika $h\\to0$, berlaku $\\bar h\\to0$. Dengan demikian,\n\\[\nf'(0)=\\lim_{h\\to0}\\frac{|h|^2}{h}=0.\n\\]\n\n•  Kasus $z_0\\ne0$.\\\\\nUntuk $h\\ne0$,\n\\[\n\\begin{aligned}\n\\frac{f(z_0+h)-f(z_0)}{h}\n&=\\frac{|z_0+h|^2-|z_0|^2}{h}\\\\\n&=\\frac{(z_0+h)(\\bar z_0+\\bar h)-z_0\\bar z_0}{h}\\\\\n&=\\bar z_0+z_0\\frac{\\bar h}{h}+\\bar h.\n\\end{aligned}\n\\]\nDua pendekatan menuju $h=0$ diperiksa.\n\n•  Jika $h=t\\in\\mathbb{R}\\setminus\\{0\\}$, maka $\\bar h/h=1$, sehingga\n\\[\n\\lim_{t\\to0}\\left(\\bar z_0+z_0\\frac{\\bar t}{t}+\\bar t\\right)\n=\\bar z_0+z_0\n=2\\operatorname{Re}z_0.\n\\]\n\n•  Jika $h=it$ dengan $t\\in\\mathbb{R}\\setminus\\{0\\}$, maka $\\bar h/h=-1$, sehingga\n\\[\n\\lim_{t\\to0}\\left(\\bar z_0+z_0\\frac{\\overline{it}}{it}+\\overline{it}\\right)\n=\\bar z_0-z_0\n=-2i\\operatorname{Im}z_0.\n\\]\n\nAgar kedua limit tersebut sama, diperlukan\n\\[\n2\\operatorname{Re}z_0=-2i\\operatorname{Im}z_0.\n\\]\nRuas kiri merupakan bilangan real, sedangkan ruas kanan merupakan bilangan imajiner murni. Kesamaan hanya mungkin jika\n\\[\n\\operatorname{Re}z_0=0\n\\quad\\text{dan}\\quad\n\\operatorname{Im}z_0=0,\n\\]\nyaitu $z_0=0$. Hal ini bertentangan dengan asumsi $z_0\\ne0$. Jadi $f'(z_0)$ tidak ada untuk setiap $z_0\\ne0$.\n\nDengan demikian, klaim bahwa $f(z)=|z|^2$ terdiferensial kompleks hanya di $z=0$ terbukti."
          },
          {
            "kind": "note",
            "title": "Catatan konseptual",
            "body": "Terdiferensial di satu titik tidak berarti holomorfik pada persekitaran titik itu."
          }
        ]
      }
    ]
  },
  {
    "title": "Cauchy--Riemann dan Holomorfik",
    "blocks": [],
    "subsections": [
      {
        "title": "Persamaan Cauchy--Riemann",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Syarat perlu Cauchy--Riemann",
            "body": "Misalkan\n\\[\nf(z)=u(x,y)+iv(x,y),\n\\qquad z_0=x_0+iy_0.\n\\]\nJika $f$ terdiferensial kompleks di $z_0$ dan turunan parsial pertama $u_x,u_y,v_x,v_y$ pada $(x_0,y_0)$ ada, maka\n\\[\n\\boxed{u_x(x_0,y_0)=v_y(x_0,y_0)},\n\\qquad\n\\boxed{u_y(x_0,y_0)=-v_x(x_0,y_0)}.\n\\]",
            "proof": "Diketahui $f(z)=u(x,y)+iv(x,y)$ terdiferensial kompleks di $z_0=x_0+iy_0$, dan turunan parsial $u_x,u_y,v_x,v_y$ pada $(x_0,y_0)$ ada.\n\nDibuktikan $u_x(x_0,y_0)=v_y(x_0,y_0)$ dan $u_y(x_0,y_0)=-v_x(x_0,y_0)$.\n\nKarena turunan kompleks $f'(z_0)$ ada, kuosien beda harus mempunyai limit yang sama untuk setiap cara $h\\to0$. Dua pendekatan yang digunakan adalah arah horizontal dan arah vertikal.\n\n•  Pendekatan horizontal.\\\\\nDiambil $h=\\Delta x\\in\\mathbb{R}$ dengan $\\Delta x\\to0$. Berdasarkan pemilihan tersebut,\n\\[\nz_0+h=(x_0+\\Delta x)+iy_0.\n\\]\nBerdasarkan $f=u+iv$,\n\\[\n\\begin{aligned}\nf'(z_0)\n&=\\lim_{\\Delta x\\to0}\n\\frac{f(x_0+\\Delta x+iy_0)-f(x_0+iy_0)}{\\Delta x}\\\\\n&=\\lim_{\\Delta x\\to0}\n\\left[\n\\frac{u(x_0+\\Delta x,y_0)-u(x_0,y_0)}{\\Delta x}\n+i\\frac{v(x_0+\\Delta x,y_0)-v(x_0,y_0)}{\\Delta x}\n\\right]\\\\\n&=u_x(x_0,y_0)+iv_x(x_0,y_0).\n\\end{aligned}\n\\]\n\n•  Pendekatan vertikal.\\\\\nDiambil $h=i\\Delta y$ dengan $\\Delta y\\in\\mathbb{R}$ dan $\\Delta y\\to0$. Berdasarkan pemilihan tersebut,\n\\[\nz_0+h=x_0+i(y_0+\\Delta y).\n\\]\nSelanjutnya,\n\\[\n\\begin{aligned}\nf'(z_0)\n&=\\lim_{\\Delta y\\to0}\n\\frac{f(x_0+i(y_0+\\Delta y))-f(x_0+iy_0)}{i\\Delta y}\\\\\n&=\\frac1i\\lim_{\\Delta y\\to0}\n\\left[\n\\frac{u(x_0,y_0+\\Delta y)-u(x_0,y_0)}{\\Delta y}\n+i\\frac{v(x_0,y_0+\\Delta y)-v(x_0,y_0)}{\\Delta y}\n\\right]\\\\\n&=-i\\bigl(u_y(x_0,y_0)+iv_y(x_0,y_0)\\bigr)\\\\\n&=v_y(x_0,y_0)-iu_y(x_0,y_0).\n\\end{aligned}\n\\]\n\nKedua ekspresi tersebut sama-sama bernilai $f'(z_0)$. Oleh karena itu,\n\\[\nu_x+iv_x=v_y-iu_y.\n\\]\nKesamaan dua bilangan kompleks mengharuskan bagian real dan bagian imajinernya sama. Dengan demikian,\n\\[\nu_x=v_y,\n\\qquad\nv_x=-u_y,\n\\]\natau ekuivalen dengan\n\\[\nu_x=v_y,\n\\qquad\nu_y=-v_x.\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Kecukupan Cauchy--Riemann",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Teorema cukup",
            "body": "Misalkan $f=u+iv$ pada suatu persekitaran terbuka dari $z_0$. Jika turunan parsial\n\\[\nu_x,u_y,v_x,v_y\n\\]\nada dan kontinu pada persekitaran tersebut, serta memenuhi\n\\[u_x=v_y,\n\\qquad\nu_y=-v_x,\n\\]\ndi $z_0$, maka $f$ terdiferensial kompleks di $z_0$."
          },
          {
            "kind": "note",
            "title": "Kriteria operasional",
            "body": "\\[\nC^1+\\text{Cauchy--Riemann}\\quad\\Longrightarrow\\quad \\text{terdiferensial kompleks}.\n\\]",
            "proof": "Diketahui $f=u+iv$ pada suatu persekitaran terbuka dari $z_0=x_0+iy_0$; turunan parsial $u_x,u_y,v_x,v_y$ ada dan kontinu pada persekitaran tersebut; serta pada $(x_0,y_0)$ berlaku $u_x=v_y$ dan $u_y=-v_x$.\n\nDibuktikan $f$ terdiferensial kompleks di $z_0$.\n\nDituliskan\n\\[\nh=a+ib,\n\\qquad\n|h|=\\sqrt{a^2+b^2}.\n\\]\nSemua turunan parsial pada pembuktian berikut dievaluasi di $(x_0,y_0)$, kecuali dinyatakan lain. Pembuktian disusun dalam beberapa bagian.\n\n•  Diferensiabilitas real dari $u$ dan $v$.\\\\\nKarena $u_x,u_y,v_x,v_y$ kontinu pada suatu persekitaran dari $(x_0,y_0)$, fungsi $u$ dan $v$ terdiferensial total di $(x_0,y_0)$. Oleh karena itu, terdapat fungsi sisa $r_1(a,b)$ dan $r_2(a,b)$ yang memenuhi\n\\[\n\\frac{r_1(a,b)}{\\sqrt{a^2+b^2}}\\longrightarrow0,\n\\qquad\n\\frac{r_2(a,b)}{\\sqrt{a^2+b^2}}\\longrightarrow0\n\\]\nketika $(a,b)\\to(0,0)$, serta\n\\[\n\\Delta u\n:=u(x_0+a,y_0+b)-u(x_0,y_0)\n=u_xa+u_yb+r_1(a,b),\n\\]\ndan\n\\[\n\\Delta v\n:=v(x_0+a,y_0+b)-v(x_0,y_0)\n=v_xa+v_yb+r_2(a,b).\n\\]\n\n•  Pembentukan bagian linear kompleks.\\\\\nPerubahan fungsi $f$ memenuhi\n\\[\n\\begin{aligned}\nf(z_0+h)-f(z_0)\n&=\\Delta u+i\\Delta v\\\\\n&=(u_x+iv_x)a+(u_y+iv_y)b+r_1+ir_2.\n\\end{aligned}\n\\]\nDari persamaan Cauchy--Riemann,\n\\[\nu_y=-v_x,\n\\qquad\nv_y=u_x.\n\\]\nDengan demikian,\n\\[\nu_y+iv_y=-v_x+iu_x=i(u_x+iv_x).\n\\]\nDengan demikian, bagian linear dapat dituliskan sebagai\n\\[\n\\begin{aligned}\n(u_x+iv_x)a+(u_y+iv_y)b\n&=(u_x+iv_x)a+i(u_x+iv_x)b\\\\\n&=(u_x+iv_x)(a+ib)\\\\\n&=(u_x+iv_x)h.\n\\end{aligned}\n\\]\nOleh karena itu,\n\\[\nf(z_0+h)-f(z_0)=(u_x+iv_x)h+r_1+ir_2.\n\\]\n\n•  Pengendalian suku sisa.\\\\\nUntuk $h\\ne0$ diperoleh\n\\[\n\\frac{f(z_0+h)-f(z_0)}{h}\n=u_x+iv_x+\\frac{r_1+ir_2}{h}.\n\\]\nSuku sisa memenuhi\n\\[\n\\begin{aligned}\n\\left|\\frac{r_1+ir_2}{h}\\right|\n&=\\frac{|r_1+ir_2|}{|h|}\\\\\n&\\le\\frac{|r_1|+|r_2|}{\\sqrt{a^2+b^2}}\\\\\n&=\\frac{|r_1|}{\\sqrt{a^2+b^2}}\n +\\frac{|r_2|}{\\sqrt{a^2+b^2}}\n\\longrightarrow0.\n\\end{aligned}\n\\]\n\n•  Eksistensi limit kuosien beda.\\\\\nDari bagian sebelumnya diperoleh\n\\[\n\\lim_{h\\to0}\\frac{f(z_0+h)-f(z_0)}{h}\n=u_x(x_0,y_0)+iv_x(x_0,y_0).\n\\]\nLimit tersebut ada dan tidak bergantung pada arah $h\\to0$. Oleh karena itu, $f$ terdiferensial kompleks di $z_0$ dan\n\\[\nf'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Visualisasi -- Intuisi Cauchy--Riemann",
        "blocks": [
          {
            "kind": "theorem",
            "title": "Intuisi",
            "body": "Jika $f=u+iv$ holomorfik, maka gradien $\\nabla u=(u_x,u_y)$ dan $\\nabla v=(v_x,v_y)$ saling tegak lurus dan memiliki panjang yang sama."
          },
          {
            "kind": "corollary",
            "title": "",
            "body": "Dari\n\\[u_x=v_y,\n\\qquad\nu_y=-v_x,\n\\]\nterlihat bahwa\n\\[\n\\nabla v=(-u_y,u_x),\n\\]\nyaitu hasil rotasi $90^\\circ$ dari $\\nabla u$."
          }
        ]
      },
      {
        "title": "Rumus turunan dari Cauchy--Riemann",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Jika $f=u+iv$ terdiferensial kompleks di $z=x+iy$, maka\n\\[\n\\boxed{f'(z)=u_x+iv_x}\n\\]\ndan juga\n\\[\n\\boxed{f'(z)=v_y-iu_y}.\n\\]",
            "proof": "Diketahui $f=u+iv$ terdiferensial kompleks di $z=x+iy$.\n\nDibuktikan $f'(z)=u_x+iv_x=v_y-iu_y$.\n\nPembuktian dibagi menjadi tiga bagian.\n\n•  Pendekatan sepanjang arah real.\\\\\nDidefinisikan $h=\\Delta x$ dengan $\\Delta x\\in\\mathbb{R}$ dan $\\Delta x\\to0$. Berdasarkan definisi turunan kompleks,\n\\[\n\\begin{aligned}\nf'(z)\n&=\\lim_{\\Delta x\\to0}\n\\frac{f(x+\\Delta x+iy)-f(x+iy)}{\\Delta x}\\\\\n&=\\lim_{\\Delta x\\to0}\n\\left[\n\\frac{u(x+\\Delta x,y)-u(x,y)}{\\Delta x}\n+i\\frac{v(x+\\Delta x,y)-v(x,y)}{\\Delta x}\n\\right].\n\\end{aligned}\n\\]\nKarena limit tersebut ada, diperoleh\n\\[\nf'(z)=u_x(x,y)+iv_x(x,y).\n\\]\n\n•  Pendekatan sepanjang arah imajiner.\\\\\nDidefinisikan $h=i\\Delta y$ dengan $\\Delta y\\in\\mathbb{R}$ dan $\\Delta y\\to0$. Berdasarkan definisi tersebut,\n\\[\n\\begin{aligned}\nf'(z)\n&=\\lim_{\\Delta y\\to0}\n\\frac{f(x+i(y+\\Delta y))-f(x+iy)}{i\\Delta y}\\\\\n&=\\lim_{\\Delta y\\to0}\n\\left[\n\\frac{v(x,y+\\Delta y)-v(x,y)}{\\Delta y}\n-i\\frac{u(x,y+\\Delta y)-u(x,y)}{\\Delta y}\n\\right].\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\nf'(z)=v_y(x,y)-iu_y(x,y).\n\\]\n\n•  Kesamaan kedua representasi.\\\\\nKarena $f$ terdiferensial kompleks, persamaan Cauchy--Riemann berlaku pada $(x,y)$, yaitu\n\\[\nu_x=v_y,\n\\qquad\nu_y=-v_x.\n\\]\nPersamaan kedua ekuivalen dengan $v_x=-u_y$. Oleh karena itu,\n\\[\nu_x+iv_x=v_y-iu_y.\n\\]\nJadi kedua bentuk yang diperoleh dari pendekatan horizontal dan vertikal menyatakan bilangan kompleks yang sama.\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Cauchy--Riemann untuk $f(z)=z^2$",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Komponen real dan imajiner..\n\n\\[\nf(z)=z^2=(x^2-y^2)+i(2xy).\n\\]\nJadi\n\\[\nu=x^2-y^2,\n\\qquad\nv=2xy.\n\\]\n\nTurunan parsial..\n\n\\[\nu_x=2x,\n\\qquad\nu_y=-2y,\n\\qquad\nv_x=2y,\n\\qquad\nv_y=2x.\n\\]\nDengan demikian, $u_x=v_y$ dan $u_y=-v_x$ di seluruh $\\mathbb{C}$.\n\nDengan demikian, $f$ holomorfik di seluruh $\\mathbb{C}$ dan $f'(z)=u_x+iv_x=2x+2iy=2z$."
          }
        ]
      },
      {
        "title": "Cauchy--Riemann untuk $f(z)=\\bar z$",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Komponen..\n\n\\[\nf(z)=\\bar z=x-iy.\n\\]\nDengan demikian,\n\\[\nu=x,\n\\qquad\nv=-y.\n\\]\n\nTurunan parsial..\n\n\\[\nu_x=1,\n\\qquad\nu_y=0,\n\\qquad\nv_x=0,\n\\qquad\nv_y=-1.\n\\]\nSyarat pertama Cauchy--Riemann meminta\n\\[\n1=-1,\n\\]\nyang mustahil.\n\nDengan demikian, $f(z)=\\bar z$ tidak terdiferensial kompleks di titik mana pun."
          }
        ]
      },
      {
        "title": "Cauchy--Riemann untuk $f(z)=|z|^2$",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Komponen..\n\n\\[\nf(z)=|z|^2=x^2+y^2.\n\\]\nDengan demikian,\n\\[\nu=x^2+y^2,\n\\qquad\nv=0.\n\\]\n\nCauchy--Riemann..\n\n\\[\nu_x=2x,\n\\quad\nu_y=2y,\n\\quad\nv_x=0,\n\\quad\nv_y=0.\n\\]\nCR memberi\n\\[\n2x=0,\n\\qquad\n2y=0.\n\\]\nJadi CR hanya berlaku di $(0,0)$.\n\nDengan demikian, $|z|^2$ terdiferensial di $0$ dengan turunan $0$, tetapi tidak holomorfik pada daerah mana pun."
          }
        ]
      },
      {
        "title": "Holomorfik dan entire",
        "blocks": [
          {
            "kind": "definition",
            "title": "Holomorfik di suatu titik",
            "body": "Fungsi $f$ disebut holomorfik di $z_0$ apabila terdapat $r>0$ sedemikian sehingga $f$ terdiferensial kompleks pada setiap titik disk terbuka $D(z_0,r)$."
          },
          {
            "kind": "definition",
            "title": "Holomorfik pada domain",
            "body": "Fungsi $f:D\\to\\mathbb{C}$ disebut holomorfik pada domain $D$ apabila $f$ terdiferensial kompleks pada setiap titik $z\\in D$."
          },
          {
            "kind": "definition",
            "title": "Fungsi entire",
            "body": "Fungsi $f:\\mathbb{C}\\to\\mathbb{C}$ disebut entire apabila $f$ holomorfik pada seluruh $\\mathbb{C}$."
          },
          {
            "kind": "example",
            "title": "",
            "body": "Polinom, $e^z$, $\\sin z$, dan $\\cos z$ adalah entire."
          }
        ]
      },
      {
        "title": "Eksponensial kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Untuk $z=x+iy$, fungsi eksponensial kompleks didefinisikan oleh\n\\[\ne^z=e^{x+iy}=e^x(\\cos y+i\\sin y).\n\\]"
          },
          {
            "kind": "paragraph",
            "text": "Sifat dasar..\n\n\\[\ne^{z+w}=e^ze^w,\n\\qquad\n|e^z|=e^x,\n\\qquad\n e^{z+2\\pi i}=e^z.\n\\]\n\nTurunan..\n\n\\[\n\\boxed{(e^z)'=e^z.}\n\\]"
          }
        ]
      },
      {
        "title": "Sinus dan cosinus kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "\\[\n\\cos z=\\frac{e^{iz}+e^{-iz}}{2},\n\\qquad\n\\sin z=\\frac{e^{iz}-e^{-iz}}{2i}.\n\\]"
          },
          {
            "kind": "paragraph",
            "text": "Turunan..\n\n\\[\n(\\sin z)'=\\cos z,\n\\qquad\n(\\cos z)'=-\\sin z.\n\\]\n\nBentuk kartesius..\n\nJika $z=x+iy$, maka\n\\[\n\\sin z=\\sin x\\cosh y+i\\cos x\\sinh y,\n\\]\n\\[\n\\cos z=\\cos x\\cosh y-i\\sin x\\sinh y.\n\\]"
          }
        ]
      },
      {
        "title": "Logaritma kompleks",
        "blocks": [
          {
            "kind": "definition",
            "title": "Logaritma kompleks multivalued",
            "body": "Diberikan $z=re^{i\\theta}\\ne0$. Bilangan kompleks $w=\\xi+i\\eta$ disebut nilai logaritma dari $z$ apabila $e^w=z$. Kondisi tersebut ekuivalen dengan\n\\[\ne^\\xi=r,\n\\qquad\n\\eta=\\theta+2k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]\nOleh karena itu, himpunan seluruh nilai logaritma kompleks dari $z$ adalah\n\\[\n\\log z\n=\\left\\{\\ln|z|+i(\\theta+2k\\pi):k\\in\\mathbb{Z}\\right\\}.\n\\]"
          },
          {
            "kind": "definition",
            "title": "Logaritma utama",
            "body": "Dengan memilih argumen utama $\\operatorname{Arg} z\\in(-\\pi,\\pi]$, logaritma utama didefinisikan oleh\n\\[\n\\operatorname{Log} z=\\ln|z|+i\\operatorname{Arg} z.\n\\]"
          },
          {
            "kind": "note",
            "title": "Cabang dan pemotongan bidang",
            "body": "Argumen tidak dapat dipilih kontinu pada seluruh $\\mathbb{C}\\setminus\\{0\\}$. Untuk memperoleh satu cabang logaritma yang kontinu dan holomorfik, biasanya satu sinar dari titik asal dihapus dari domain. Untuk cabang utama, pilihan yang lazim adalah sumbu real negatif sebagai branch cut."
          }
        ]
      },
      {
        "title": "Cauchy--Riemann dalam koordinat polar",
        "blocks": [
          {
            "kind": "theorem",
            "title": "",
            "body": "Jika $z=re^{i\\theta}$ dan\n\\[\nf(z)=u(r,\\theta)+iv(r,\\theta),\n\\]\npersamaan Cauchy--Riemann dalam koordinat polar diberikan oleh\n\\[\n\\boxed{u_r=\\frac1r v_\\theta},\n\\qquad\n\\boxed{v_r=-\\frac1r u_\\theta}.\n\\]",
            "proof": "Diketahui $z=re^{i\\theta}$ dengan $r>0$, $f(z)=u(r,\\theta)+iv(r,\\theta)$, dan persamaan Cauchy--Riemann kartesius $u_x=v_y$, $u_y=-v_x$.\n\nDibuktikan $u_r=\\frac1r v_\\theta$ dan $v_r=-\\frac1r u_\\theta$.\n\nDari\n\\[\nx=r\\cos\\theta,\n\\qquad\ny=r\\sin\\theta,\n\\]\ndiperoleh\n\\[\nx_r=\\cos\\theta,\n\\quad y_r=\\sin\\theta,\n\\quad x_\\theta=-r\\sin\\theta,\n\\quad y_\\theta=r\\cos\\theta.\n\\]\nDengan aturan rantai,\n\\[\n\\begin{aligned}\nu_r&=u_x\\cos\\theta+u_y\\sin\\theta,\\\\\nu_\\theta&=-ru_x\\sin\\theta+ru_y\\cos\\theta,\n\\end{aligned}\n\\qquad\n\\begin{aligned}\nv_r&=v_x\\cos\\theta+v_y\\sin\\theta,\\\\\nv_\\theta&=-rv_x\\sin\\theta+rv_y\\cos\\theta.\n\\end{aligned}\n\\]\nPembuktian dibagi menjadi dua identitas.\n\n•  Dari $u_y=-v_x$ dan $u_x=v_y$ diperoleh\n\\[\n\\begin{aligned}\n\\frac1r v_\\theta\n&=-v_x\\sin\\theta+v_y\\cos\\theta\\\\\n&=u_y\\sin\\theta+u_x\\cos\\theta\\\\\n&=u_r.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\nu_r=\\frac1r v_\\theta.\n\\]\n\n•  Selanjutnya,\n\\[\n\\begin{aligned}\n-\\frac1r u_\\theta\n&=u_x\\sin\\theta-u_y\\cos\\theta\\\\\n&=v_y\\sin\\theta+v_x\\cos\\theta\\\\\n&=v_r.\n\\end{aligned}\n\\]\nDengan demikian,\n\\[\nv_r=-\\frac1r u_\\theta.\n\\]\n\nDengan demikian, Teorema~hasil terkait terbukti."
          },
          {
            "kind": "paragraph",
            "text": "Rumus turunan..\n\nJika syarat polar berlaku, maka\n\\[\nf'(z)=e^{-i\\theta}(u_r+iv_r).\n\\]"
          }
        ]
      },
      {
        "title": "Bentuk Jacobian fungsi holomorfik",
        "blocks": [
          {
            "kind": "proposition",
            "title": "",
            "body": "Misalkan $f=u+iv$ holomorfik di suatu persekitaran titik $z_0=x_0+iy_0$. Jika\n\\[\nf'(z_0)=a+ib,\n\\]\nmatriks Jacobian pemetaan real\n\\[\nF(x,y)=\\bigl(u(x,y),v(x,y)\\bigr)\n\\]\npada $(x_0,y_0)$ adalah\n\\[\nJ_F(x_0,y_0)\n=\n\\begin{pmatrix}\na&-b\\\\\nb&a\n\\end{pmatrix}.\n\\]",
            "proof": "Diketahui $f=u+iv$ holomorfik di sekitar $z_0=x_0+iy_0$ dan $f'(z_0)=a+ib$.\n\nDibuktikan $J_F(x_0,y_0)=\\begin{pmatrix}a&-b\\\\ b&a\\end{pmatrix}$.\n\nSecara definisi,\n\\[\nJ_F(x_0,y_0)\n=\n\\begin{pmatrix}\nu_x(x_0,y_0)&u_y(x_0,y_0)\\\\\nv_x(x_0,y_0)&v_y(x_0,y_0)\n\\end{pmatrix}.\n\\]\nKarena $f$ holomorfik, $f$ terdiferensial kompleks di $z_0$. Berdasarkan rumus turunan Cauchy--Riemann,\n\\[\nf'(z_0)=u_x(x_0,y_0)+iv_x(x_0,y_0).\n\\]\nDiandaikan pula\n\\[\nf'(z_0)=a+ib.\n\\]\nKesamaan bagian real dan imajiner memberikan\n\\[\nu_x(x_0,y_0)=a,\n\\qquad\nv_x(x_0,y_0)=b.\n\\]\nPersamaan Cauchy--Riemann memberikan\n\\[\nv_y=u_x,\n\\qquad\nu_y=-v_x.\n\\]\nOleh karena itu,\n\\[\nv_y(x_0,y_0)=a,\n\\qquad\nu_y(x_0,y_0)=-b.\n\\]\nSubstitusi ke dalam matriks Jacobian menghasilkan\n\\[\nJ_F(x_0,y_0)\n=\n\\begin{pmatrix}\na&-b\\\\\nb&a\n\\end{pmatrix}.\n\\]\n\nDengan demikian, Proposisi~hasil terkait terbukti."
          },
          {
            "kind": "corollary",
            "title": "",
            "body": "Dalam kondisi Proposisi di atas,\n\\[\n\\det J_F(x_0,y_0)=a^2+b^2=|f'(z_0)|^2.\n\\]\nKhususnya, jika $f'(z_0)\\neq0$, maka $\\det J_F(x_0,y_0)>0$.",
            "proof": "Diketahui $J_F(x_0,y_0)=\\begin{pmatrix}a&-b\\\\ b&a\\end{pmatrix}$ dan $f'(z_0)=a+ib$.\n\nDibuktikan $\\det J_F(x_0,y_0)=|f'(z_0)|^2$, serta $\\det J_F(x_0,y_0)>0$ apabila $f'(z_0)\\ne0$.\n\nPembuktian dibagi menjadi tiga bagian.\n\n•  Perhitungan determinan Jacobian.\\\\\nBerdasarkan rumus determinan matriks $2\\times2$,\n\\[\n\\begin{aligned}\n\\det J_F(x_0,y_0)\n&=a\\cdot a-(-b)b\\\\\n&=a^2+b^2.\n\\end{aligned}\n\\]\n\n•  Hubungan dengan modulus turunan kompleks.\\\\\nDari $f'(z_0)=a+ib$ diperoleh\n\\[\n|f'(z_0)|=\\sqrt{a^2+b^2}.\n\\]\nKarena kedua ruas tidak negatif, pengkuadratan memberikan\n\\[\n|f'(z_0)|^2=a^2+b^2.\n\\]\nDengan membandingkan hasil ini dengan bagian pertama, diperoleh\n\\[\n\\det J_F(x_0,y_0)=|f'(z_0)|^2.\n\\]\n\n•  Kasus $f'(z_0)\\ne0$.\\\\\nJika $f'(z_0)\\ne0$, sifat definit positif modulus memberikan\n\\[\n|f'(z_0)|>0.\n\\]\nOleh karena itu,\n\\[\n|f'(z_0)|^2>0.\n\\]\nBerdasarkan identitas pada bagian kedua, diperoleh\n\\[\n\\det J_F(x_0,y_0)>0.\n\\]\n\nDengan demikian, Akibat~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Bagian real dan imajiner harmonik",
        "blocks": [
          {
            "kind": "definition",
            "title": "",
            "body": "Suatu fungsi real dua variabel $\\phi$ yang mempunyai turunan parsial kedua disebut harmonik pada suatu domain apabila\n\\[\n\\Delta\\phi\n:=\\phi_{xx}+\\phi_{yy}=0\n\\]\npada setiap titik domain tersebut. Operator $\\Delta$ disebut operator Laplace."
          },
          {
            "kind": "corollary",
            "title": "",
            "body": "Misalkan $f=u+iv$ holomorfik pada suatu domain dan $u,v$ mempunyai turunan parsial kedua kontinu. Dalam kondisi tersebut, $u$ dan $v$ harmonik, yaitu\n\\[\nu_{xx}+u_{yy}=0,\n\\qquad\nv_{xx}+v_{yy}=0.\n\\]",
            "proof": "Diketahui $f=u+iv$ holomorfik pada suatu domain, dan $u,v$ mempunyai turunan parsial kedua kontinu.\n\nDibuktikan $u_{xx}+u_{yy}=0$ dan $v_{xx}+v_{yy}=0$.\n\nPembuktian dibagi menjadi dua bagian.\n\n•  Bagian real $u$.\\\\\nPersamaan Cauchy--Riemann memberikan\n\\[\nu_x=v_y,\n\\qquad\nu_y=-v_x.\n\\]\nDiferensiasi persamaan pertama terhadap $x$ dan persamaan kedua terhadap $y$ menghasilkan\n\\[\nu_{xx}=v_{yx},\n\\qquad\nu_{yy}=-v_{xy}.\n\\]\nDengan menjumlahkan kedua persamaan,\n\\[\nu_{xx}+u_{yy}=v_{yx}-v_{xy}.\n\\]\nKarena turunan parsial kedua $v$ kontinu, Teorema Clairaut memberikan\n\\[\nv_{yx}=v_{xy}.\n\\]\nDiperoleh\n\\[\nu_{xx}+u_{yy}=0.\n\\]\nJadi $u$ harmonik.\n\n•  Bagian imajiner $v$.\\\\\nPersamaan Cauchy--Riemann dapat dituliskan sebagai\n\\[\nv_x=-u_y,\n\\qquad\nv_y=u_x.\n\\]\nDiferensiasi persamaan pertama terhadap $x$ dan persamaan kedua terhadap $y$ menghasilkan\n\\[\nv_{xx}=-u_{yx},\n\\qquad\nv_{yy}=u_{xy}.\n\\]\nDengan menjumlahkan kedua persamaan,\n\\[\nv_{xx}+v_{yy}=-u_{yx}+u_{xy}.\n\\]\nKarena turunan parsial kedua $u$ kontinu, Teorema Clairaut memberikan\n\\[\nu_{yx}=u_{xy}.\n\\]\nDiperoleh\n\\[\nv_{xx}+v_{yy}=0.\n\\]\nJadi $v$ harmonik.\n\nDengan demikian, Akibat~hasil terkait terbukti."
          }
        ]
      },
      {
        "title": "Algoritma standar soal turunan kompleks",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Langkah kerja..\n\n•  Dituliskan $z=x+iy$.\n\n•  Fungsi $f(z)$ diuraikan dalam bentuk $u(x,y)+iv(x,y)$.\n\n•  Turunan parsial $u_x,u_y,v_x,v_y$ dihitung.\n\n•  Persamaan Cauchy--Riemann diterapkan:\n\\[u_x=v_y,\n\\qquad\nu_y=-v_x.\n\\]\n\n•  Titik atau daerah tempat persamaan Cauchy--Riemann berlaku ditentukan.\n\n•  Jika turunan parsial kontinu, diferensiabilitas kompleks dapat disimpulkan.\n\n•  Turunan kompleks kemudian dihitung melalui\n\\[\nf'(z)=u_x+iv_x.\n\\]"
          }
        ]
      }
    ]
  },
  {
    "title": "Latihan Soal",
    "blocks": [
      {
        "kind": "exercise",
        "title": "Operasi kompleks",
        "body": "Hitung dan sederhanakan\n\\[\n\\frac{(3-2i)(1+4i)}{2-i}.\n\\]",
        "solution": "Penyelesaian dilakukan dengan terlebih dahulu menyederhanakan pembilang, kemudian merasionalkan penyebut menggunakan konjugat kompleks.\n\n•  Penyederhanaan pembilang.\\\\\nDiperoleh\n\\[\n\\begin{aligned}\n(3-2i)(1+4i)\n&=3+12i-2i-8i^2\\\\\n&=3+10i+8\\\\\n&=11+10i,\n\\end{aligned}\n\\]\nkarena $i^2=-1$.\n\n•  Rasionalisasi penyebut.\\\\\nKonjugat dari $2-i$ adalah $2+i$. Perkalian pembilang dan penyebut dengan $2+i$ memberikan\n\\[\n\\frac{11+10i}{2-i}\n=\\frac{(11+10i)(2+i)}{(2-i)(2+i)}.\n\\]\nPenyebutnya adalah\n\\[\n(2-i)(2+i)=2^2+1^2=5,\n\\]\nsedangkan pembilangnya memenuhi\n\\[\n\\begin{aligned}\n(11+10i)(2+i)\n&=22+11i+20i+10i^2\\\\\n&=12+31i.\n\\end{aligned}\n\\]\n\nOleh karena itu,\n\\[\n\\frac{(3-2i)(1+4i)}{2-i}\n=\\frac{12+31i}{5}\n=\\frac{12}{5}+\\frac{31}{5}i.\n\\]\n\nDengan demikian, diperoleh $\\displaystyle \\frac{12}{5}+\\frac{31}{5}i$."
      },
      {
        "kind": "exercise",
        "title": "Modulus dan lokus",
        "body": "Deskripsikan himpunan titik $z\\in\\mathbb{C}$ yang memenuhi\n\\[\n|z-1|=|z+3|.\n\\]",
        "solution": "Persamaan tersebut menyatakan bahwa titik $z$ mempunyai jarak yang sama terhadap titik $1$ dan $-3$ pada sumbu real. Secara geometris, lokusnya merupakan garis bagi tegak lurus ruas yang menghubungkan kedua titik tersebut. Perhitungan aljabarnya diberikan sebagai berikut.\n\nDituliskan\n\\[\nz=x+iy.\n\\]\nDiperoleh\n\\[\n|z-1|^2=(x-1)^2+y^2\n\\]\ndan\n\\[\n|z+3|^2=(x+3)^2+y^2.\n\\]\nKarena kedua modulus tidak negatif, persamaan $|z-1|=|z+3|$ ekuivalen dengan kesamaan kuadratnya, yaitu\n\\[\n(x-1)^2+y^2=(x+3)^2+y^2.\n\\]\nPenghilangan suku $y^2$ pada kedua ruas memberikan\n\\[\nx^2-2x+1=x^2+6x+9.\n\\]\nDengan menyederhanakan persamaan tersebut diperoleh\n\\[\n-8x=8,\n\\qquad\nx=-1.\n\\]\nTidak terdapat pembatasan terhadap $y$. Oleh karena itu, himpunan penyelesaiannya adalah\n\\[\n\\{x+iy\\in\\mathbb{C}:x=-1\\}.\n\\]\n\nDengan demikian, himpunan penyelesaiannya adalah garis vertikal $\\operatorname{Re}z=-1$."
      },
      {
        "kind": "exercise",
        "title": "Bentuk polar",
        "body": "Tuliskan\n\\[\nz=-\\sqrt3-i\n\\]\ndalam bentuk polar utama.",
        "solution": "Bentuk polar utama ditentukan melalui modulus dan argumen utama.\n\n•  Penentuan modulus.\\\\\nUntuk $z=-\\sqrt3-i$ berlaku $x=-\\sqrt3$ dan $y=-1$. Oleh karena itu,\n\\[\n|z|=\\sqrt{x^2+y^2}\n=\\sqrt{3+1}\n=2.\n\\]\n\n•  Penentuan argumen utama.\\\\\nTitik $(-\\sqrt3,-1)$ berada di kuadran III. Sudut acuannya adalah\n\\[\n\\alpha=\\arctan\\left|\\frac{y}{x}\\right|\n=\\arctan\\left(\\frac{1}{\\sqrt3}\\right)\n=\\frac{\\pi}{6}.\n\\]\nKarena argumen utama dipilih pada interval $(-\\pi,\\pi]$, sudut kuadran III dituliskan sebagai\n\\[\n\\operatorname{Arg} z=-\\pi+\\alpha\n=-\\pi+\\frac{\\pi}{6}\n=-\\frac{5\\pi}{6}.\n\\]\n\nBentuk polar utamanya adalah\n\\[\nz=2\\left(\\cos\\left(-\\frac{5\\pi}{6}\\right)\n+i\\sin\\left(-\\frac{5\\pi}{6}\\right)\\right)\n=2e^{-5\\pi i/6}.\n\\]\n\nDengan demikian, diperoleh $\\displaystyle z=2e^{-5\\pi i/6}$."
      },
      {
        "kind": "exercise",
        "title": "Akar kompleks",
        "body": "Tentukan semua solusi dari\n\\[\nw^3=-8.\n\\]",
        "solution": "Bilangan $-8$ mempunyai modulus $8$ dan argumen $\\pi+2k\\pi$, $k\\in\\mathbb{Z}$. Oleh karena itu,\n\\[\n-8=8e^{i(\\pi+2k\\pi)}.\n\\]\nDiandaikan\n\\[\nw=\\rho e^{i\\phi}.\n\\]\nPersamaan $w^3=-8$ memberikan\n\\[\n\\rho^3e^{i3\\phi}=8e^{i(\\pi+2k\\pi)}.\n\\]\nKesamaan modulus menghasilkan\n\\[\n\\rho^3=8,\n\\qquad\n\\rho=2,\n\\]\nsedangkan kesamaan argumen memberikan\n\\[\n3\\phi=\\pi+2k\\pi,\n\\qquad\n\\phi=\\frac{\\pi+2k\\pi}{3}.\n\\]\nTiga akar yang berbeda diperoleh untuk $k=0,1,2$:\n\\[\n\\begin{aligned}\nw_0&=2e^{i\\pi/3}\n=2\\left(\\frac12+i\\frac{\\sqrt3}{2}\\right)\n=1+i\\sqrt3,\\\\[1mm]\nw_1&=2e^{i\\pi}=-2,\\\\[1mm]\nw_2&=2e^{i5\\pi/3}\n=2\\left(\\frac12-i\\frac{\\sqrt3}{2}\\right)\n=1-i\\sqrt3.\n\\end{aligned}\n\\]\nIndeks berikutnya hanya mengulangi ketiga nilai tersebut karena argumennya berbeda sebesar kelipatan $2\\pi$.\n\nDengan demikian, himpunan seluruh solusinya adalah $\\{1+i\\sqrt3,-2,1-i\\sqrt3\\}$."
      },
      {
        "kind": "exercise",
        "title": "Akar kesatuan",
        "body": "Misalkan $\\omega=e^{2\\pi i/7}$. Hitung\n\\[\n1+\\omega^2+\\omega^4+\\omega^6+\\omega^8+\\omega^{10}+\\omega^{12}.\n\\]",
        "solution": "Karena $\\omega^7=1$, pangkat-pangkat $\\omega$ dapat direduksi modulo $7$. Eksponen pada jumlah tersebut memenuhi\n\\[\n0,2,4,6,8,10,12\n\\equiv\n0,2,4,6,1,3,5\n\\pmod 7.\n\\]\nDengan demikian, ketujuh eksponen tersebut tepat membentuk semua kelas residu $0,1,\\ldots,6$ dalam urutan yang berbeda. Oleh karena itu,\n\\[\n\\begin{aligned}\n1+\\omega^2+\\omega^4+\\omega^6+\\omega^8+\\omega^{10}+\\omega^{12}\n&=\\omega^0+\\omega^1+\\omega^2+\\cdots+\\omega^6.\n\\end{aligned}\n\\]\nKarena $\\omega\\neq1$, rumus jumlah deret geometri memberikan\n\\[\n1+\\omega+\\omega^2+\\cdots+\\omega^6\n=\\frac{\\omega^7-1}{\\omega-1}\n=0.\n\\]\n\nDengan demikian, diperoleh nilai $0$."
      },
      {
        "kind": "exercise",
        "title": "Limit melalui dua lintasan",
        "body": "Tentukan apakah limit berikut ada:\n\\[\n\\lim_{z\\to0}\\frac{z}{\\bar z}.\n\\]",
        "solution": "Keberadaan limit kompleks mengharuskan nilai limit yang sama untuk setiap cara pendekatan menuju $0$. Dua lintasan sederhana sudah cukup untuk menunjukkan ketidakadaan limit apabila memberikan hasil yang berbeda.\n\n•  Pendekatan sepanjang sumbu real.\\\\\nDituliskan $z=t$ dengan $t\\in\\mathbb{R}$ dan $t\\to0$. Karena $\\bar z=t$, diperoleh\n\\[\n\\frac{z}{\\bar z}\n=\\frac{t}{t}\n=1\n\\qquad (t\\neq0).\n\\]\nJadi limit sepanjang sumbu real bernilai $1$.\n\n•  Pendekatan sepanjang sumbu imajiner.\\\\\nDituliskan $z=it$ dengan $t\\in\\mathbb{R}$ dan $t\\to0$. Karena $\\bar z=-it$, diperoleh\n\\[\n\\frac{z}{\\bar z}\n=\\frac{it}{-it}\n=-1\n\\qquad (t\\neq0).\n\\]\nJadi limit sepanjang sumbu imajiner bernilai $-1$.\n\nKedua lintasan menuju titik yang sama, tetapi menghasilkan limit yang berbeda. Oleh karena itu, limit kompleks tersebut tidak ada.\n\nDengan demikian, limit tersebut tidak ada."
      },
      {
        "kind": "exercise",
        "title": "Limit dengan estimasi",
        "body": "Buktikan\n\\[\n\\lim_{z\\to0}\\frac{z^2\\bar z}{|z|}=0.\n\\]",
        "solution": "Diketahui fungsi\n\\[\nf(z)=\\frac{z^2\\bar z}{|z|},\n\\qquad z\\neq0.\n\\]\nDibuktikan bahwa $f(z)\\to0$ ketika $z\\to0$.\n\nUntuk $z\\neq0$, sifat modulus memberikan\n\\[\n\\begin{aligned}\n|f(z)|\n&=\\left|\\frac{z^2\\bar z}{|z|}\\right|\\\\\n&=\\frac{|z|^2|\\bar z|}{|z|}\\\\\n&=\\frac{|z|^3}{|z|}\\\\\n&=|z|^2.\n\\end{aligned}\n\\]\nDiambil sebarang $\\varepsilon>0$ dan dipilih\n\\[\n\\delta=\\sqrt{\\varepsilon}.\n\\]\nJika $0<|z|<\\delta$, diperoleh\n\\[\n\\left|\\frac{z^2\\bar z}{|z|}-0\\right|\n=|z|^2\n<\\delta^2\n=\\varepsilon.\n\\]\nKondisi definisi limit $\\varepsilon$--$\\delta$ telah terpenuhi. Oleh karena itu,\n\\[\n\\lim_{z\\to0}\\frac{z^2\\bar z}{|z|}=0.\n\\]\n\nDengan demikian, terbukti bahwa $\\displaystyle \\lim_{z\\to0}\\frac{z^2\\bar z}{|z|}=0$."
      },
      {
        "kind": "exercise",
        "title": "Kontinuitas",
        "body": "Tentukan titik-titik kontinuitas fungsi\n\\[\nf(z)=\\frac{z^2+1}{z^2-1}.\n\\]",
        "solution": "Pembilang $z^2+1$ dan penyebut $z^2-1$ merupakan polinom kompleks. Setiap polinom kompleks kontinu di seluruh $\\mathbb{C}$, sedangkan hasil bagi dua fungsi kontinu tetap kontinu pada setiap titik tempat penyebut tidak bernilai nol.\n\nTitik yang harus dikeluarkan dari domain kontinuitas ditentukan dari\n\\[\nz^2-1=0.\n\\]\nFaktorisasi memberikan\n\\[\n(z-1)(z+1)=0,\n\\]\nyang menghasilkan\n\\[\nz=1\n\\qquad\\text{atau}\\qquad\nz=-1.\n\\]\nPada kedua titik tersebut fungsi tidak terdefinisi. Pada setiap titik lain penyebut tidak nol, sehingga fungsi kontinu.\n\nDengan demikian, $f$ kontinu tepat pada $\\mathbb{C}\\setminus\\{-1,1\\}$."
      },
      {
        "kind": "exercise",
        "title": "Turunan dari definisi",
        "body": "Gunakan definisi turunan untuk mencari turunan dari\n\\[\nf(z)=z^3.\n\\]",
        "solution": "Berdasarkan definisi turunan kompleks,\n\\[\nf'(z)\n=\\lim_{h\\to0}\\frac{f(z+h)-f(z)}{h}.\n\\]\nUntuk $f(z)=z^3$ diperoleh\n\\[\nf'(z)\n=\\lim_{h\\to0}\\frac{(z+h)^3-z^3}{h}.\n\\]\nEkspansi binomial memberikan\n\\[\n(z+h)^3\n=z^3+3z^2h+3zh^2+h^3.\n\\]\nOleh karena itu, untuk $h\\neq0$,\n\\[\n\\begin{aligned}\n\\frac{(z+h)^3-z^3}{h}\n&=\\frac{3z^2h+3zh^2+h^3}{h}\\\\\n&=3z^2+3zh+h^2.\n\\end{aligned}\n\\]\nKetika $h\\to0$, suku $3zh$ dan $h^2$ menuju nol. Diperoleh\n\\[\nf'(z)=3z^2.\n\\]\nKarena perhitungan berlaku untuk setiap $z\\in\\mathbb{C}$, fungsi $z^3$ terdiferensial kompleks di seluruh $\\mathbb{C}$.\n\nDengan demikian, diperoleh $f'(z)=3z^2$."
      },
      {
        "kind": "exercise",
        "title": "Cauchy--Riemann",
        "body": "Tentukan titik tempat fungsi\n\\[\nf(z)=x^2-y^2+i(x+y)\n\\]\nterdiferensial kompleks.",
        "solution": "Dituliskan\n\\[\nf(z)=u(x,y)+iv(x,y)\n\\]\ndengan\n\\[\nu(x,y)=x^2-y^2,\n\\qquad\nv(x,y)=x+y.\n\\]\nTurunan parsial pertama adalah\n\\[\n u_x=2x,\n\\qquad\n u_y=-2y,\n\\qquad\n v_x=1,\n\\qquad\n v_y=1.\n\\]\nSemua turunan parsial tersebut berupa polinom atau konstanta, sehingga kontinu pada seluruh $\\mathbb{R}^2$. Oleh karena itu, Teorema Kecukupan Cauchy--Riemann dapat digunakan setelah titik yang memenuhi persamaan Cauchy--Riemann ditentukan.\n\nPersamaan Cauchy--Riemann adalah\n\\[\nu_x=v_y,\n\\qquad\nu_y=-v_x.\n\\]\nSubstitusi turunan parsial memberikan\n\\[\n2x=1,\n\\qquad\n-2y=-1.\n\\]\nDiperoleh\n\\[\nx=\\frac12,\n\\qquad\ny=\\frac12.\n\\]\nJadi persamaan Cauchy--Riemann hanya berlaku pada titik\n\\[\nz_0=\\frac12+\\frac12 i.\n\\]\nKarena turunan parsial pertama kontinu pada suatu persekitaran dari $z_0$, persamaan Cauchy--Riemann pada titik tersebut cukup untuk menjamin diferensiabilitas kompleks. Turunannya dihitung melalui\n\\[\n\\begin{aligned}\nf'(z_0)\n&=u_x(z_0)+iv_x(z_0)\\\\\n&=1+i.\n\\end{aligned}\n\\]\nPada titik selain $z_0$, setidaknya satu persamaan Cauchy--Riemann tidak terpenuhi, sehingga fungsi tidak terdiferensial kompleks di titik tersebut.\n\nDengan demikian, $f$ terdiferensial kompleks hanya di $z=\\frac12+\\frac12 i$, dengan $f'(z)=1+i$ pada titik tersebut."
      },
      {
        "kind": "exercise",
        "title": "Holomorfisitas",
        "body": "Tentukan apakah\n\\[\nf(z)=\\operatorname{Re}z\n\\]\nholomorfik pada suatu domain tak kosong.",
        "solution": "Dituliskan $z=x+iy$. Karena\n\\[\nf(z)=\\operatorname{Re}z=x,\n\\]\ndiperoleh\n\\[\nu(x,y)=x,\n\\qquad\nv(x,y)=0.\n\\]\nTurunan parsialnya adalah\n\\[\nu_x=1,\n\\qquad\nu_y=0,\n\\qquad\nv_x=0,\n\\qquad\nv_y=0.\n\\]\nSalah satu persamaan Cauchy--Riemann mensyaratkan\n\\[\nu_x=v_y.\n\\]\nPada fungsi ini syarat tersebut menjadi\n\\[\n1=0,\n\\]\nyang tidak mungkin terpenuhi pada titik mana pun di $\\mathbb{C}$. Dengan demikian, $f$ tidak terdiferensial kompleks pada titik mana pun. Karena fungsi holomorfik harus terdiferensial kompleks pada setiap titik dari suatu himpunan terbuka, tidak terdapat domain tak kosong tempat $f$ holomorfik.\n\nDengan demikian, $f(z)=\\operatorname{Re}z$ tidak holomorfik pada domain tak kosong mana pun."
      },
      {
        "kind": "exercise",
        "title": "Cauchy--Riemann dalam koordinat polar",
        "body": "Diberikan\n\\[\nf(re^{i\\theta})=r^2\\cos(2\\theta)+i r^2\\sin(2\\theta).\n\\]\nTentukan apakah $f$ holomorfik dan tentukan bentuknya dalam $z$.",
        "solution": "Dituliskan\n\\[\nu(r,\\theta)=r^2\\cos(2\\theta),\n\\qquad\nv(r,\\theta)=r^2\\sin(2\\theta).\n\\]\nUntuk $r>0$, persamaan Cauchy--Riemann dalam koordinat polar adalah\n\\[\nu_r=\\frac1r v_\\theta,\n\\qquad\nv_r=-\\frac1r u_\\theta.\n\\]\nTurunan parsial yang diperlukan adalah\n\\[\n\\begin{aligned}\nu_r&=2r\\cos(2\\theta),\n&u_\\theta&=-2r^2\\sin(2\\theta),\\\\\nv_r&=2r\\sin(2\\theta),\n&v_\\theta&=2r^2\\cos(2\\theta).\n\\end{aligned}\n\\]\nDiperoleh\n\\[\n\\frac1r v_\\theta\n=2r\\cos(2\\theta)\n=u_r\n\\]\ndan\n\\[\n-\\frac1r u_\\theta\n=2r\\sin(2\\theta)\n=v_r.\n\\]\nJadi persamaan Cauchy--Riemann polar berlaku untuk setiap $r>0$.\n\nBentuk fungsi juga dapat disederhanakan menggunakan Formula Euler:\n\\[\n\\begin{aligned}\nf(re^{i\\theta})\n&=r^2\\bigl(\\cos(2\\theta)+i\\sin(2\\theta)\\bigr)\\\\\n&=r^2e^{2i\\theta}\\\\\n&=(re^{i\\theta})^2\\\\\n&=z^2.\n\\end{aligned}\n\\]\nIdentitas $f(z)=z^2$ juga menentukan fungsi pada $z=0$, yaitu $f(0)=0$. Karena $z^2$ merupakan polinom kompleks, fungsi tersebut holomorfik di seluruh $\\mathbb{C}$ dan bahkan entire. Turunannya adalah\n\\[\nf'(z)=2z.\n\\]\n\nDengan demikian, $f(z)=z^2$ bersifat entire dan $f'(z)=2z$."
      }
    ],
    "subsections": []
  }
];
export const complexAnalysisExercises: string[] = [
  "Tentukan $z\\in\\mathbb{C}$ yang memenuhi $(4+i)z+(2-3i)\\overline z=5+11i$.",
  "Tentukan semua $z\\in\\mathbb{C}$ yang memenuhi\n\\[\nz\\overline z-(1+2i)z-(1-2i)\\overline z-4=0,\n\\]\nserta nyatakan himpunan penyelesaiannya secara geometris.",
  "Buktikan identitas $|z+w|^2+|z-w|^2=2|z|^2+2|w|^2$ untuk setiap $z,w\\in\\mathbb{C}$.",
  "Tentukan himpunan semua $z=x+iy\\in\\mathbb{C}$ yang memenuhi $|z-1|+|z+1|=4$, kemudian tentukan persamaan kurva tersebut dalam koordinat Cartesius.",
  "Tentukan $\\operatorname{Arg} z$ dan seluruh nilai $\\arg z$ untuk\n\\[\nz=\\frac{(-\\sqrt3+i)^9}{(1-i\\sqrt3)^4}.\n\\]",
  "Tentukan bentuk Cartesius dari $(1-\\sqrt3 i)^{15}$ menggunakan Rumus De Moivre.",
  "Tentukan seluruh solusi berbeda dari $z^5=-32i$ dalam bentuk eksponensial.",
  "Tentukan semua solusi $z$ dari $z^8=256$ yang memenuhi $\\operatorname{Re} z>0$.",
  "Diberikan $\\omega=e^{2\\pi i/n}$ dengan $n\\ge2$. Buktikan bahwa\n\\[\n\\prod_{k=1}^{n-1}(1-\\omega^k)=n.\n\\]",
  "Diberikan $\\omega=e^{2\\pi i/9}$. Tentukan nilai\n\\[\n\\sum_{k=0}^{8}\\frac{1}{1+\\omega^k}.\n\\]",
  "Diberikan $A=\\{z\\in\\mathbb{C}:0<|z-2i|\\le2\\}$. Tentukan interior $A$, himpunan seluruh titik limit $A$, serta tentukan apakah $A$ merupakan himpunan terbuka atau tertutup.",
  "Buktikan bahwa himpunan $H=\\{z\\in\\mathbb{C}:\\operatorname{Re} z>0\\}$ merupakan himpunan terbuka.",
  "Diberikan\n\\[\nf(z)=\\frac{z\\overline z+z}{2-\\overline z},\n\\qquad z\\ne2.\n\\]\nTentukan $u(x,y)$ dan $v(x,y)$ sehingga\n\\[\nf(z)=u(x,y)+iv(x,y).\n\\]",
  "Didefinisikan\n\\[\nf(z)=\n\\begin{cases}\n\\dfrac{z^2\\overline z}{|z|^2},&z\\ne0,\\\\[1.2ex]\n0,&z=0.\n\\end{cases}\n\\]\nTentukan apakah $f$ kontinu di $z=0$ dan berikan alasannya.",
  "Buktikan bahwa limit\n\\[\n\\lim_{z\\to0}\\frac{x^3y}{x^6+y^2},\n\\qquad z=x+iy,\n\\]\ntidak ada.",
  "Buktikan dengan definisi $\\varepsilon$--$\\delta$ bahwa\n\\[\n\\lim_{z\\to1-i}(z^2+\\overline z)= (1-i)^2+(1+i).\n\\]",
  "Tentukan nilai\n\\[\n\\lim_{z\\to0}\\frac{z^3\\overline z^{\\,2}}{|z|^4}.\n\\]",
  "Buktikan langsung dari definisi turunan kompleks bahwa untuk $z\\ne0$ berlaku\n\\[\n\\frac{d}{dz}\\left(\\frac{1}{z^2}\\right)=-\\frac{2}{z^3}.\n\\]",
  "Tentukan semua $z=x+iy\\in\\mathbb{C}$ yang membuat turunan kompleks $f'(z)$ ada untuk $f(z)=x^2+y^2+i(2xy)$, kemudian tentukan nilai $f'(z)$ pada titik-titik tersebut.",
  "Tentukan semua $a,b,c\\in\\mathbb{R}$ agar fungsi $f(z)=ax^2-by^2+icxy$, dengan $z=x+iy$, analitik di setiap titik $\\mathbb{C}$.",
  "Buktikan bahwa fungsi analitik $f$ pada domain $D$ yang hanya bernilai real harus konstan pada $D$.",
  "Tentukan $f'(z)$ untuk $f(z)=e^{z^2+1}\\sin(z^3)$.",
  "Tentukan seluruh solusi $z\\in\\mathbb{C}$ dari $e^{(1+i)z}=2i$.",
  "Tentukan seluruh solusi $z\\in\\mathbb{C}$ dari $\\cos z=2$.",
  "Diberikan $z_1=-1+i$ dan $z_2=-1-i$. Tentukan $\\operatorname{Log}(z_1z_2)$ dan $\\operatorname{Log} z_1+\\operatorname{Log} z_2$, kemudian tentukan apakah kedua nilai tersebut sama.",
  "Diberikan $D=\\mathbb{C}\\setminus(-\\infty,0]$. Untuk $z=re^{i\\theta}\\in D$, dengan $r>0$ dan $-\\pi<\\theta<\\pi$, didefinisikan $u(r,\\theta)=\\ln r$ dan $v(r,\\theta)=\\theta$. Buktikan bahwa $u$ dan $v$ memenuhi persamaan Cauchy--Riemann dalam koordinat polar, kemudian tentukan $f'(z)$ untuk $f(z)=u(r,\\theta)+iv(r,\\theta)$.",
  "Buktikan bahwa\n\\[\nu(x,y)=e^x\\bigl((x+1)\\cos y-y\\sin y\\bigr)\n\\]\nmerupakan fungsi harmonik pada $\\mathbb{R}^2$.",
  "Tentukan seluruh konjugat harmonik dari $u(x,y)=x^2-y^2+e^x\\cos y$.",
  "Tentukan fungsi analitik $f$ pada $\\mathbb{C}$ yang memenuhi\n\\[\n\\operatorname{Im} f(z)=2xy-\\sin x\\sinh y\n\\]\ndan\n\\[\nf(0)=3.\n\\]",
  "Tentukan semua $a,b,c\\in\\mathbb{R}$ agar $u(x,y)=ax^2+bxy+cy^2$ harmonik pada $\\mathbb{R}^2$, kemudian tentukan bentuk umum konjugat harmoniknya."
];
