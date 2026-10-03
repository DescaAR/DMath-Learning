import { buildAlgebraContent, type AlgebraLessonSpec } from "@/data/abstract-algebra-content-utils";

const specs: Record<string, AlgebraLessonSpec> = {
  "alg-private-key": {
    "title": "Kriptografi Kunci Privat",
    "focus": "Kriptografi kunci privat atau simetris menggunakan kunci rahasia yang sama, atau kunci yang mudah diturunkan satu sama lain, untuk enkripsi dan dekripsi. Aritmetika modular memberi model sederhana seperti Caesar cipher dan affine cipher.",
    "definitions": [
      {
        "title": "Sistem Kriptografi Simetris",
        "statement": "Sistem kriptografi simetris terdiri dari ruang pesan $M$, ruang ciphertext $C$, ruang kunci $K$, fungsi enkripsi $E_k:M\\to C$, dan fungsi dekripsi $D_k:C\\to M$ yang memenuhi $D_k(E_k(m))=m$ untuk setiap pesan $m$."
      },
      {
        "title": "Affine Cipher",
        "statement": "Pada alfabet yang dikodekan sebagai $\\mathbb Z_n$, affine cipher dengan kunci $(a,b)$ menggunakan $E_{a,b}(x)=ax+b\\pmod n$, dengan syarat $\\gcd(a,n)=1$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Syarat Kunci Affine Cipher",
        "statement": "Pemetaan $E_{a,b}(x)=ax+b\\pmod n$ bijektif jika dan hanya jika $\\gcd(a,n)=1$.",
        "proof": [
          "Jika $\\gcd(a,n)=1$, kelas $[a]_n$ merupakan unit. Terdapat $a^{-1}$ modulo $n$, dan persamaan $y\\equiv ax+b\\pmod n$ dapat diselesaikan unik sebagai $x\\equiv a^{-1}(y-b)\\pmod n$. Dengan demikian enkripsi bijektif.",
          "Sebaliknya, andaikan $d=\\gcd(a,n)>1$. Kelas $x$ dan $x+n/d$ berbeda modulo $n$, tetapi $a(x+n/d)-ax=an/d$ merupakan kelipatan $n$.",
          "Diperoleh $E_{a,b}(x+n/d)=E_{a,b}(x)$ untuk dua input berbeda. Peta tidak injektif. Oleh karena itu bijektivitas ekuivalen dengan $\\gcd(a,n)=1$."
        ]
      },
      {
        "kind": "corollary",
        "title": "Rumus Dekripsi Affine Cipher",
        "statement": "Jika $\\gcd(a,n)=1$, dekripsi affine cipher adalah $D_{a,b}(y)=a^{-1}(y-b)\\pmod n$.",
        "proof": [
          "Dari ciphertext $y\\equiv ax+b\\pmod n$, kurangi $b$ pada kedua ruas untuk memperoleh $y-b\\equiv ax\\pmod n$.",
          "Kalikan dengan invers $a^{-1}$ modulo $n$. Diperoleh $a^{-1}(y-b)\\equiv x\\pmod n$.",
          "Substitusi kembali menunjukkan $D_{a,b}(E_{a,b}(x))\\equiv x\\pmod n$. Dengan demikian rumus tersebut benar-benar merupakan invers enkripsi."
        ]
      }
    ],
    "examples": [
      {
        "title": "Enkripsi Affine Modulo 26",
        "problem": "Gunakan kunci $(a,b)=(5,8)$ untuk mengenkripsi simbol $x=7$.",
        "solution": [
          "$\\gcd(5,26)=1$, sehingga kunci valid.",
          "$E(7)=5\\cdot7+8=43$.",
          "Reduksi modulo 26 memberi $43\\equiv17\\pmod{26}$."
        ],
        "conclusion": "Ciphertext simbol adalah $17$."
      },
      {
        "title": "Dekripsi Affine Modulo 26",
        "problem": "Dekripsikan $y=17$ dengan kunci $(5,8)$ modulo 26.",
        "solution": [
          "Invers 5 modulo 26 adalah 21 karena $5\\cdot21=105\\equiv1\\pmod{26}$.",
          "$D(17)=21(17-8)=21\\cdot9=189$.",
          "$189\\equiv7\\pmod{26}$."
        ],
        "conclusion": "Pesan asal kembali menjadi $7$."
      }
    ],
    "exercises": [
      {
        "prompt": "Tentukan apakah kunci affine $(a,b)=(6,3)$ valid modulo 26.",
        "hint": "Periksa $\\gcd(6,26)$.",
        "answer": "Kunci tidak valid karena $\\gcd(6,26)=2$. Kelas $[6]_{26}$ bukan unit, sehingga enkripsi tidak bijektif."
      },
      {
        "prompt": "Cari invers 7 modulo 26 dan tuliskan rumus dekripsi untuk $E(x)=7x+4\\pmod{26}$.",
        "hint": "Gunakan algoritma Euclid atau cari $d$ dengan $7d\\equiv1\\pmod{26}$.",
        "answer": "$7^{-1}\\equiv15\\pmod{26}$ karena $7\\cdot15=105\\equiv1$. Oleh karena itu $D(y)=15(y-4)\\pmod{26}$."
      },
      {
        "prompt": "Jelaskan hubungan Caesar cipher dan affine cipher.",
        "hint": "Nyatakan Caesar cipher sebagai kasus khusus affine cipher.",
        "answer": "Caesar cipher berbentuk $E(x)=x+b\\pmod n$, yaitu affine cipher dengan $a=1$. Affine cipher menambahkan pengali unit $a$ dan menjadi keluarga transformasi yang lebih luas."
      }
    ]
  },
  "alg-rsa": {
    "title": "Skema RSA",
    "focus": "RSA adalah skema kriptografi kunci publik yang dibangun dari aritmetika modular. Kunci publik menggunakan modulus hasil kali dua prima dan eksponen publik, sedangkan eksponen privat diperoleh sebagai invers modular. Kebenaran dekripsi mengikuti Teorema Fermat kecil dan Teorema Sisa Cina.",
    "definitions": [
      {
        "title": "Pembentukan Kunci RSA",
        "statement": "Pilih prima berbeda $p$ dan $q$, tetapkan $n=pq$ serta $\\varphi(n)=(p-1)(q-1)$. Pilih $e$ dengan $\\gcd(e,\\varphi(n))=1$, lalu pilih $d$ yang memenuhi $ed\\equiv1\\pmod{\\varphi(n)}$. Pasangan $(n,e)$ merupakan kunci publik, sedangkan $d$ merupakan eksponen privat."
      },
      {
        "title": "Enkripsi dan Dekripsi RSA",
        "statement": "Untuk pesan integer $m$ dengan $0\\le m<n$, ciphertext didefinisikan oleh $c\\equiv m^e\\pmod n$. Dekripsi menghitung $m'\\equiv c^d\\pmod n$."
      }
    ],
    "results": [
      {
        "kind": "proposition",
        "title": "Eksistensi Eksponen Privat",
        "statement": "Jika $\\gcd(e,\\varphi(n))=1$, terdapat tepat satu kelas residu $d\\pmod{\\varphi(n)}$ yang memenuhi $ed\\equiv1\\pmod{\\varphi(n)}$.",
        "proof": [
          "Karena $e$ relatif prima dengan $\\varphi(n)$, Identitas Bézout memberi integer $x,y$ dengan $ex+\\varphi(n)y=1$.",
          "Reduksi persamaan tersebut modulo $\\varphi(n)$ memberi $ex\\equiv1\\pmod{\\varphi(n)}$. Dengan demikian kelas $[x]$ merupakan invers perkalian $[e]$.",
          "Invers dalam grup unit $\\mathbb Z_{\\varphi(n)}^\\times$ unik. Oleh karena itu kelas residu $d$ yang memenuhi persamaan tersebut unik."
        ]
      },
      {
        "kind": "theorem",
        "title": "Kebenaran RSA",
        "statement": "Dengan parameter RSA di atas, untuk setiap $m\\in\\{0,1,\\ldots,n-1\\}$ berlaku $(m^e)^d\\equiv m\\pmod n$.",
        "proof": [
          "Karena $ed\\equiv1\\pmod{\\varphi(n)}$, terdapat integer $k$ dengan $ed=1+k(p-1)(q-1)$.",
          "Bekerja modulo $p$. Jika $p\\mid m$, jelas $m^{ed}\\equiv m\\equiv0\\pmod p$. Jika $p\\nmid m$, Teorema Fermat kecil memberi $m^{p-1}\\equiv1\\pmod p$, sehingga $m^{ed}=m(m^{p-1})^{k(q-1)}\\equiv m\\pmod p$.",
          "Argumen yang sama modulo $q$ memberi $m^{ed}\\equiv m\\pmod q$. Karena $p$ dan $q$ relatif prima, Teorema Sisa Cina mengakibatkan $m^{ed}\\equiv m\\pmod{pq}=\\pmod n$. Dengan demikian dekripsi mengembalikan pesan semula."
        ]
      }
    ],
    "examples": [
      {
        "title": "Membentuk Kunci RSA Kecil",
        "problem": "Ambil $p=5$, $q=11$, dan $e=3$. Tentukan $n$, $\\varphi(n)$, dan satu eksponen privat $d$.",
        "solution": [
          "$n=pq=55$.",
          "$\\varphi(n)=(5-1)(11-1)=4\\cdot10=40$.",
          "Cari invers 3 modulo 40. Karena $3\\cdot27=81\\equiv1\\pmod{40}$, dapat dipilih $d=27$."
        ],
        "conclusion": "Kunci publik adalah $(55,3)$ dan eksponen privatnya $d=27$."
      },
      {
        "title": "Enkripsi Pesan",
        "problem": "Dengan kunci publik $(n,e)=(55,3)$, enkripsi pesan $m=7$.",
        "solution": [
          "$c\\equiv7^3=343\\pmod{55}$.",
          "$343=6\\cdot55+13$."
        ],
        "conclusion": "Ciphertext adalah $c=13$."
      }
    ],
    "exercises": [
      {
        "prompt": "Untuk $p=7$, $q=13$, dan $e=5$, tentukan $n$, $\\varphi(n)$, dan $d$.",
        "hint": "Cari invers 5 modulo 72.",
        "answer": "$n=91$ dan $\\varphi(n)=6\\cdot12=72$. Karena $5\\cdot29=145\\equiv1\\pmod{72}$, dapat dipilih $d=29$."
      },
      {
        "prompt": "Verifikasi bahwa dekripsi mengembalikan $m=7$ pada contoh $n=55$, $e=3$, $d=27$.",
        "hint": "Gunakan $ed=81=1+2\\cdot40$ atau hitung eksponensiasi modular.",
        "answer": "Enkripsi memberi $c=13$. Teorema kebenaran RSA memberi $13^{27}\\equiv7\\pmod{55}$ karena $3\\cdot27=81\\equiv1\\pmod{40}$."
      },
      {
        "prompt": "Jelaskan mengapa syarat $\\gcd(e,\\varphi(n))=1$ diperlukan.",
        "hint": "Hubungkan dengan keberadaan invers modular $d$.",
        "answer": "Eksponen privat harus memenuhi $ed\\equiv1\\pmod{\\varphi(n)}$. Invers modular $e$ ada tepat ketika $e$ relatif prima dengan $\\varphi(n)$."
      }
    ]
  }
};

export const abstractAlgebraContentD13 = buildAlgebraContent(specs);
