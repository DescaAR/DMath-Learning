import type { BookFormalItem, BookFormalKind } from "@/data/book-content-types";

type ThesisProofFields=Pick<BookFormalItem,"given"|"toProve"|"proofDirections"|"proofTargets">;

/**
 * Reviewed, statement-specific proof structure. It is intentionally not generated
 * from keywords: the assumptions and the target must be mathematically verified.
 */
const reviewed:Record<string,ThesisProofFields>={
  "analisis-real:theorem:Pracitra Mempertahankan Operasi Himpunan":{
    given:"Fungsi $f:A\\to B$ dan dua himpunan $G,H\\subseteq B$.",
    toProve:"$f^{-1}(G\\cup H)=f^{-1}(G)\\cup f^{-1}(H)$ dan $f^{-1}(G\\cap H)=f^{-1}(G)\\cap f^{-1}(H)$.",
    proofTargets:[
      {
        target:"$f^{-1}(G\\cup H)=f^{-1}(G)\\cup f^{-1}(H)$.",
        steps:[
          "Diambil sebarang $x\\in A$. Berdasarkan definisi pracitra, $x\\in f^{-1}(G\\cup H)$ jika dan hanya jika $f(x)\\in G\\cup H$.",
          "Keanggotaan $f(x)\\in G\\cup H$ ekuivalen dengan $f(x)\\in G$ atau $f(x)\\in H$.",
          "Berdasarkan definisi pracitra, hal tersebut ekuivalen dengan $x\\in f^{-1}(G)$ atau $x\\in f^{-1}(H)$.",
          "Dengan demikian, keanggotaan kedua ruas sama untuk setiap $x\\in A$, sehingga identitas gabungan terbukti."
        ]
      },
      {
        target:"$f^{-1}(G\\cap H)=f^{-1}(G)\\cap f^{-1}(H)$.",
        steps:[
          "Diambil sebarang $x\\in A$. Berdasarkan definisi pracitra, $x\\in f^{-1}(G\\cap H)$ jika dan hanya jika $f(x)\\in G\\cap H$.",
          "Keanggotaan terakhir ekuivalen dengan $f(x)\\in G$ dan $f(x)\\in H$.",
          "Kedua syarat tersebut ekuivalen dengan $x\\in f^{-1}(G)$ dan $x\\in f^{-1}(H)$.",
          "Dengan demikian, kedua ruas mempunyai anggota yang sama. Identitas irisan terbukti."
        ]
      }
    ]
  },
  "analisis-real:theorem:Komposisi Bijeksi":{
    given:"Dua fungsi bijektif $f:A\\to B$ dan $g:B\\to C$.",
    toProve:"Komposisi $g\\circ f:A\\to C$ juga bijektif.",
    proofTargets:[
      {
        target:"Komposisi $g\\circ f$ injektif.",
        steps:[
          "Diambil sebarang $a_1,a_2\\in A$ yang memenuhi $(g\\circ f)(a_1)=(g\\circ f)(a_2)$.",
          "Injektivitas $g$ memberi $f(a_1)=f(a_2)$.",
          "Injektivitas $f$ memberikan $a_1=a_2$, sehingga $g\\circ f$ injektif."
        ]
      },
      {
        target:"Komposisi $g\\circ f$ surjektif.",
        steps:[
          "Diambil sebarang $c\\in C$. Karena $g$ surjektif, terdapat $b\\in B$ sehingga $g(b)=c$.",
          "Karena $f$ surjektif, terdapat $a\\in A$ sehingga $f(a)=b$.",
          "Akibatnya, $(g\\circ f)(a)=g(f(a))=g(b)=c$.",
          "Dengan demikian, $g\\circ f$ surjektif. Kedua sifat membuktikan bijektivitasnya."
        ]
      }
    ]
  },
  "analisis-real:theorem:Kriteria Cauchy untuk Deret":{
    given:"Deret real $\\sum_{n=1}^{\\infty}a_n$ dengan jumlah parsial $s_n=\\sum_{k=1}^n a_k$.",
    toProve:"Deret konvergen jika dan hanya jika untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga $m>n\\ge N$ mengakibatkan $|a_{n+1}+\\cdots+a_m|<\\varepsilon$.",
    proofDirections:[
      {
        direction:"forward",
        known:"Deret $\\sum_{n=1}^{\\infty}a_n$ konvergen ke $S\\in\\mathbb R$.",
        target:"Untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga setiap $m>n\\ge N$ memenuhi $|a_{n+1}+\\cdots+a_m|<\\varepsilon$.",
        steps:[
          "Diambil sebarang $\\varepsilon>0$. Dari konvergensi $s_n\\to S$, terdapat $N$ sehingga $|s_k-S|<\\varepsilon/2$ untuk setiap $k\\ge N$.",
          "Untuk setiap $m>n\\ge N$, diperoleh $|a_{n+1}+\\cdots+a_m|=|s_m-s_n|$.",
          "Ketaksamaan segitiga memberikan $|s_m-s_n|\\le|s_m-S|+|s_n-S|<\\varepsilon$.",
          "Dengan demikian, kondisi Cauchy untuk deret terpenuhi."
        ]
      },
      {
        direction:"backward",
        known:"Untuk setiap $\\varepsilon>0$ terdapat $N$ sehingga setiap $m>n\\ge N$ memenuhi $|a_{n+1}+\\cdots+a_m|<\\varepsilon$.",
        target:"Deret $\\sum_{n=1}^{\\infty}a_n$ konvergen.",
        steps:[
          "Diambil sebarang $\\varepsilon>0$. Berdasarkan hipotesis, terdapat $N$ sehingga untuk $m>n\\ge N$ berlaku $|s_m-s_n|=|a_{n+1}+\\cdots+a_m|<\\varepsilon$.",
          "Jika $n>m\\ge N$, pertukaran indeks memberi ketaksamaan yang sama. Untuk $m=n$, selisih bernilai nol.",
          "Dengan demikian, $(s_n)$ merupakan barisan Cauchy dalam $\\mathbb R$.",
          "Kelengkapan $\\mathbb R$ menjamin bahwa $(s_n)$ konvergen, sehingga deret $\\sum_{n=1}^{\\infty}a_n$ konvergen."
        ]
      }
    ]
  },
  "teori-ukuran-probabilitas:proposition:Tower Property":{
    given:"Peubah acak integrabel $X$ dan sub-$\\sigma$-algebra $\\mathcal H\\subseteq\\mathcal G\\subseteq\\mathcal F$.",
    toProve:"$E[E[X\\mid\\mathcal G]\\mid\\mathcal H]=E[X\\mid\\mathcal H]$ hampir pasti."
  },
  "matematika-diskrit:proposition:Kontraposisi":{
    given:"Dua proposisi $P$ dan $Q$.",
    toProve:"$P\\to Q$ ekuivalen secara logis dengan $\\neg Q\\to\\neg P$."
  },
  "riset-operasi:theorem:Dualitas Lemah":{
    given:"Primal $\\max\\{c^Tx:Ax\\le b,\\,x\\ge0\\}$ dan dual $\\min\\{b^Ty:A^Ty\\ge c,\\,y\\ge0\\}$ beserta pasangan solusi feasible $x$ dan $y$.",
    toProve:"$c^Tx\\le b^Ty$."
  }
};

export function getReviewedThesisProof(subjectSlug:string,kind:BookFormalKind,title:string):ThesisProofFields|undefined{
  return reviewed[subjectSlug+":"+kind+":"+title];
}
