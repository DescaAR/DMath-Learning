import type { BookLessonContent } from "@/data/book-content-types";
export const graphicalLinearProgrammingContent:BookLessonContent = {
  "intro": [
    "Model program linear dua variabel ditentukan oleh kendala yang membentuk irisan setengah bidang. Memeriksa kelayakan, menemukan titik sudut, dan membuktikan optimalitas merupakan tiga pekerjaan yang berbeda.",
    "Kita akan mengkaji $P=\\{(x,y)\\in\\mathbb R^2:x,y\\ge0,\\ x+2y\\le8,\\ 3x+y\\le9\\}$ dan memaksimumkan $3x+4y$. Rujukan: Hamdy A. Taha, Operations Research: An Introduction, edisi ke-10 (2017)."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Daerah Layak",
      "statement": "Untuk matriks $A\\in\\mathbb R^{m\\times2}$ dan $b\\in\\mathbb R^m$, daerah layak $P=\\{x\\in\\mathbb R^2:Ax\\le b\\}$ adalah himpunan semua vektor yang memenuhi setiap pertidaksamaan komponen. Jika keputusan menyatakan kuantitas produksi, kendala nonnegativitas $x_1,x_2\\ge0$ ditulis eksplisit.",
      "explanation": "Titik yang melanggar satu kendala saja tidak layak."
    },
    {
      "kind": "definition",
      "title": "Titik Ekstrem",
      "statement": "Titik $v$ pada himpunan konveks $P$ disebut ekstrem apabila persamaan $v=tu+(1-t)w$ dengan $u,w\\in P$ dan $0<t<1$ hanya mungkin jika $u=w=v$. Titik ekstrem poligon konveks disebut titik sudut; titik di bagian dalam suatu sisi bukan titik ekstrem.",
      "explanation": "Titik ekstrem tidak dapat diuraikan menjadi kombinasi konveks taktrivial dua titik berbeda."
    },
    {
      "kind": "definition",
      "title": "Solusi Optimal",
      "statement": "Untuk $c\\in\\mathbb R^2$ dan daerah layak $P$, solusi optimal maksimisasi adalah $x^*\\in P$ sehingga $c^Tx\\le c^Tx^*$ untuk setiap $x\\in P$. Nilai optimal $z^*=c^Tx^*$. Masalah infeasible berarti $P$ kosong; masalah unbounded berarti nilai tujuan tak terbatas ke atas pada $P$.",
      "explanation": "Satu nilai optimal dapat dicapai oleh lebih dari satu titik."
    },
    {
      "kind": "definition",
      "title": "Sertifikat Batas Atas",
      "statement": "Untuk $\\max\\{c^Tx:Ax\\le b,\\ x\\ge0\\}$, vektor $\\lambda\\ge0$ dengan $A^T\\lambda\\ge c$ merupakan sertifikat batas atas karena memberikan $c^Tx\\le b^T\\lambda$ bagi setiap titik layak. Sertifikat tajam jika ada titik layak yang mencapai nilai batas atas tersebut.",
      "explanation": "Sertifikat mengubah klaim optimalitas menjadi ketaksamaan yang dapat diverifikasi."
    }
  ],
  "examples": [],
  "exercises": [],
  "mistakes": [],
  "connections": []
};
