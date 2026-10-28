import type { BookExample } from "@/data/book-content-types";

/** Definition-linked differential equations examples with checked calculations. */
export const enrichedDifferentialExamples:Record<string,BookExample>={
  "persamaan-diferensial:Persamaan Diferensial Eksak dan Fungsi Potensial": {
    "forDefinition": "Persamaan Diferensial Eksak dan Fungsi Potensial",
    "title": "Mencari Fungsi Potensial",
    "problem": "Periksa keeksakan $(2x+y)\\,dx+(x+2y)\\,dy=0$ dan tentukan solusi implisitnya.",
    "solution": [
      "Tetapkan $M(x,y)=2x+y$ dan $N(x,y)=x+2y$. Karena $M_y=N_x=1$ pada $\\mathbb R^2$, bentuk diferensialnya eksak pada domain ini.",
      "Integralkan $F_x=M$ terhadap $x$ sehingga $F(x,y)=x^2+xy+g(y)$.",
      "Syarat $F_y=N$ memberi $x+g'(y)=x+2y$, sehingga $g(y)=y^2+C$."
    ],
    "conclusion": "Solusi implisitnya $x^2+xy+y^2=C$."
  },
  "persamaan-diferensial:Persamaan Linear Orde Satu": {
    "forDefinition": "Persamaan Linear Orde Satu",
    "title": "Solusi Persamaan Linear Nonhomogen",
    "problem": "Selesaikan masalah nilai awal $y'+2y=4$ dengan $y(0)=1$.",
    "solution": [
      "Faktor integrasi adalah $\\mu(t)=e^{\\int2\\,dt}=e^{2t}$. Mengalikan persamaan memberi $(e^{2t}y)'=4e^{2t}$.",
      "Integrasi menghasilkan $e^{2t}y=2e^{2t}+C$, sehingga $y(t)=2+Ce^{-2t}$.",
      "Dari $y(0)=1$, diperoleh $C=-1$."
    ],
    "conclusion": "Solusinya $y(t)=2-e^{-2t}$."
  },
  "persamaan-diferensial:Faktor Integrasi Persamaan Linear": {
    "forDefinition": "Faktor Integrasi Persamaan Linear",
    "title": "Menentukan Faktor Integrasi",
    "problem": "Tentukan faktor integrasi untuk $y'-3y=t$ dan tuliskan persamaan hasil kali.",
    "solution": [
      "Koefisien $y$ adalah $p(t)=-3$, sehingga faktor integrasi dapat dipilih $\\mu(t)=e^{\\int -3\\,dt}=e^{-3t}$.",
      "Kalikan persamaan dengan $e^{-3t}$: $e^{-3t}y'-3e^{-3t}y=te^{-3t}$.",
      "Aturan turunan hasil kali memberi $(e^{-3t}y)'=te^{-3t}$."
    ],
    "conclusion": "Faktor integrasinya $e^{-3t}$ dan persamaan berubah menjadi $(e^{-3t}y)'=te^{-3t}$."
  },
  "persamaan-diferensial:Model Pertumbuhan Eksponensial": {
    "forDefinition": "Model Pertumbuhan Eksponensial",
    "title": "Model Peluruhan Radioaktif",
    "problem": "Suatu zat bermassa awal $80$ gram meluruh menurut $y'=-0.2y$. Tentukan massa setelah $5$ satuan waktu.",
    "solution": [
      "Persamaan berbentuk $y'=ky$ dengan $k=-0.2$. Solusinya $y(t)=y_0e^{kt}$.",
      "Gunakan $y_0=80$ sehingga $y(t)=80e^{-0.2t}$.",
      "Pada $t=5$, diperoleh $y(5)=80e^{-1}\\approx29.4304$ gram."
    ],
    "conclusion": "Sisa massa setelah lima satuan waktu sekitar $29.43$ gram."
  },
  "persamaan-diferensial:Persamaan Linear Homogen Orde Dua": {
    "forDefinition": "Persamaan Linear Homogen Orde Dua",
    "title": "Superposisi Dua Solusi",
    "problem": "Buktikan bahwa $y(t)=3e^t-2e^{-t}$ menyelesaikan $y''-y=0$.",
    "solution": [
      "Diferensiasi memberi $y'(t)=3e^t+2e^{-t}$.",
      "Turunan kedua adalah $y''(t)=3e^t-2e^{-t}=y(t)$.",
      "Dengan demikian, $y''-y=0$ terpenuhi untuk semua $t\\in\\mathbb R$."
    ],
    "conclusion": "$y$ merupakan solusi linear kombinasi dari $e^t$ dan $e^{-t}$."
  },
  "persamaan-diferensial:Substitusi Homogen Orde Satu": {
    "forDefinition": "Substitusi Homogen Orde Satu",
    "title": "Menggunakan Substitusi y=vx",
    "problem": "Selesaikan $y'=y/x$ pada interval $x>0$ menggunakan $y=vx$.",
    "solution": [
      "Tuliskan $y=vx$ sehingga $y'=v+xv'$.",
      "Substitusi ke $y'=y/x=v$ memberi $v+xv'=v$, yaitu $xv'=0$.",
      "Karena $x>0$, diperoleh $v'=0$, sehingga $v=C$ dan $y=Cx$."
    ],
    "conclusion": "Seluruh solusi pada interval $x>0$ berbentuk $y(x)=Cx$."
  }
};
