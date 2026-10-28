import type { BookLessonContent } from "@/data/book-content-types";

/** Division algorithm, independently authored. Burton (2011), Ch. 2; Rosen (2011). */
export const euclideanDivisionContent: BookLessonContent = {
  "intro": [
    "Ketika $37$ benda dikelompokkan menjadi paket berisi $5$ benda, terbentuk $7$ paket lengkap dan tersisa $2$ benda. Penulisan $37=5\\cdot7+2$ bukan sekadar cara berhitung: ia memisahkan bagian yang merupakan kelipatan $5$ dari bagian yang lebih kecil daripada $5$. Struktur ini menjadi dasar algoritma Euclid, aritmetika modular, dan pengujian keterbagian.",
    "Pada bilangan negatif, gagasan sisa tetap harus dipakai dengan hati-hati. Sebagai contoh, $-17=5(-4)+3$, bukan $5(-3)-2$, jika sisa diwajibkan berada dalam himpunan $\\{0,1,2,3,4\\}$. Pilihan syarat $0\\le r<b$ menghasilkan satu pasangan hasil bagi dan sisa yang unik.",
    "Teorema pembagian Euclid menyatakan bahwa untuk setiap $a\\in\\mathbb Z$ dan setiap $b\\in\\mathbb Z$ dengan $b>0$, terdapat tepat satu pasangan $(q,r)\\in\\mathbb Z^2$ sehingga $a=bq+r$ dan $0\\le r<b$. Pembuktian keberadaan akan menggunakan prinsip urutan baik pada bilangan bulat taknegatif; pembuktian ketunggalan menggunakan fakta bahwa selisih dua sisa tidak mungkin menjadi kelipatan $b$ yang bukan nol.",
    "Setelah teorema tersebut terbukti, kita akan memperoleh rumus hasil bagi $q=\\lfloor a/b\\rfloor$, menghubungkan sisa dengan kongruensi, dan menjelaskan kapan sisa bernilai nol. Diagram garis bilangan menunjukkan bahwa $a$ terletak di antara dua kelipatan $b$ yang berurutan, yaitu $bq$ dan $b(q+1)$.",
    "Rujukan matematis: David M. Burton, Elementary Number Theory, edisi ke-7, McGraw-Hill, 2011, Bab 2; Kenneth H. Rosen, Elementary Number Theory and Its Applications, edisi ke-6, Pearson, 2011, pembahasan algoritma pembagian dan kongruensi. Penjelasan dan soal di halaman ini disusun tersendiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Hasil Bagi dan Sisa Euclid",
      "statement": "Misalkan $a\\in\\mathbb Z$ dan $b\\in\\mathbb Z$ dengan $b>0$. Pasangan bilangan bulat $(q,r)$ disebut hasil bagi dan sisa Euclid dari pembagian $a$ oleh $b$ apabila $a=bq+r$ dan $0\\le r<b$. Bilangan $q$ disebut hasil bagi, sedangkan $r$ disebut sisa."
    },
    {
      "kind": "definition",
      "title": "Kelipatan dan Keterbagian",
      "statement": "Untuk $a,b\\in\\mathbb Z$ dengan $b\\ne0$, dikatakan $b$ membagi $a$, ditulis $b\\mid a$, jika terdapat $k\\in\\mathbb Z$ sehingga $a=bk$. Bilangan $a$ disebut kelipatan $b$; jika tidak ada bilangan bulat demikian, ditulis $b\\nmid a$."
    },
    {
      "kind": "definition",
      "title": "Fungsi Lantai",
      "statement": "Untuk $x\\in\\mathbb R$, fungsi lantai $\\lfloor x\\rfloor$ adalah bilangan bulat terbesar yang tidak melebihi $x$. Dengan kata lain, $n=\\lfloor x\\rfloor$ jika dan hanya jika $n\\le x<n+1$ untuk suatu $n\\in\\mathbb Z$."
    },
    {
      "kind": "definition",
      "title": "Kongruensi Modulo Positif",
      "statement": "Untuk $a,c\\in\\mathbb Z$ dan $b\\in\\mathbb Z$ dengan $b>0$, didefinisikan $a\\equiv c\\pmod b$ jika dan hanya jika $b\\mid(a-c)$. Pernyataan ini berarti selisih $a-c$ merupakan kelipatan bulat dari $b$."
    },
    {
      "kind": "theorem",
      "title": "Teorema Pembagian Euclid",
      "statement": "Untuk setiap $a\\in\\mathbb Z$ dan $b\\in\\mathbb Z$ dengan $b>0$, terdapat tepat satu pasangan $(q,r)\\in\\mathbb Z^2$ sehingga $a=bq+r$ dan $0\\le r<b$.",
      "given": "Bilangan bulat $a$ dan bilangan bulat positif $b$.",
      "toProve": "Keberadaan serta ketunggalan pasangan $(q,r)$ dengan $a=bq+r$ dan $0\\le r<b$.",
      "proof": [
        "Untuk membuktikan keberadaan, pertimbangkan $S=\\{a-bk:k\\in\\mathbb Z,\\ a-bk\\ge0\\}$. Himpunan ini tidak kosong. Memang, jika $a\\ge0$, ambil $k=0$; jika $a<0$, ambil $k=a$, sehingga $a-ba=a(1-b)\\ge0$ karena $b\\ge1$.",
        "Karena $S$ merupakan himpunan takkosong bilangan bulat taknegatif, prinsip urutan baik menjamin adanya elemen terkecil $r\\in S$. Dari definisi $S$, terdapat $q\\in\\mathbb Z$ dengan $r=a-bq$, sehingga $a=bq+r$ dan $r\\ge0$.",
        "Andaikan $r\\ge b$. Maka $r-b=a-b(q+1)\\ge0$, sehingga $r-b\\in S$. Akan tetapi $r-b<r$ karena $b>0$, bertentangan dengan minimalitas $r$. Jadi $0\\le r<b$, dan keberadaan terbukti.",
        "Untuk membuktikan ketunggalan, misalkan $a=bq+r=bq'+r'$ dengan $0\\le r,r'<b$. Pengurangan kedua persamaan memberi $b(q-q')=r'-r$. Karena $-(b-1)\\le r'-r\\le b-1$, satu-satunya kelipatan $b$ dalam rentang tersebut adalah nol. Akibatnya $r'=r$, lalu $b(q-q')=0$; karena $b>0$, diperoleh $q=q'$. Dengan demikian pasangan $(q,r)$ unik. Teorema terbukti."
      ],
      "explanation": "Keberadaan bergantung pada prinsip urutan baik, sedangkan ketunggalan bergantung pada batas sisa yang ketat. Jika batas $r<b$ dihilangkan, pasangan $(q-1,r+b)$ akan menghasilkan nilai $a$ yang sama."
    },
    {
      "kind": "proposition",
      "title": "Hasil Bagi sebagai Fungsi Lantai",
      "statement": "Jika $a\\in\\mathbb Z$, $b\\in\\mathbb Z$ dengan $b>0$, dan $a=bq+r$ dengan $0\\le r<b$, maka $q=\\lfloor a/b\\rfloor$ dan $r=a-b\\lfloor a/b\\rfloor$.",
      "proof": [
        "Dari $a=bq+r$ dan $0\\le r<b$, bagi ketiga ruas pertidaksamaan $0\\le r<b$ dengan $b>0$ untuk memperoleh $0\\le r/b<1$.",
        "Karena $a/b=q+r/b$, diperoleh $q\\le a/b<q+1$. Menurut definisi fungsi lantai, $q=\\lfloor a/b\\rfloor$.",
        "Substitusi kembali ke $a=bq+r$ memberikan $r=a-b\\lfloor a/b\\rfloor$. Jadi kedua rumus berlaku. Proposisi terbukti."
      ],
      "explanation": "Untuk $a$ negatif, fungsi lantai tidak sama dengan pemotongan desimal menuju nol. Misalnya $\\lfloor-17/5\\rfloor=-4$, bukan $-3$."
    },
    {
      "kind": "proposition",
      "title": "Sisa Tidak Berubah oleh Penambahan Kelipatan Pembagi",
      "statement": "Misalkan $a\\in\\mathbb Z$, $b\\in\\mathbb Z$ dengan $b>0$, dan $k\\in\\mathbb Z$. Jika sisa Euclid pembagian $a$ oleh $b$ adalah $r$, maka sisa pembagian $a+kb$ oleh $b$ juga $r$.",
      "proof": [
        "Tulis pembagian Euclid $a=bq+r$ dengan $q\\in\\mathbb Z$ dan $0\\le r<b$. Persamaan ini ada dan unik menurut Teorema Pembagian Euclid.",
        "Menambahkan $kb$ pada kedua ruas memberi $a+kb=b(q+k)+r$. Karena $q+k\\in\\mathbb Z$ dan $0\\le r<b$, persamaan tersebut memenuhi seluruh syarat pembagian Euclid untuk bilangan $a+kb$.",
        "Oleh ketunggalan sisa, sisa pembagian $a+kb$ oleh $b$ tepat sama dengan $r$. Proposisi terbukti."
      ],
      "explanation": "Inilah alasan pergeseran sebesar satu atau beberapa kelipatan $b$ pada garis bilangan tidak mengubah posisi relatif terhadap titik-titik kelipatan $b$."
    },
    {
      "kind": "theorem",
      "title": "Kesamaan Sisa dan Kongruensi",
      "statement": "Untuk $a,c\\in\\mathbb Z$ dan $b\\in\\mathbb Z$ dengan $b>0$, bilangan $a$ dan $c$ mempunyai sisa Euclid yang sama ketika dibagi $b$ jika dan hanya jika $a\\equiv c\\pmod b$.",
      "proof": [
        "($\\Rightarrow$) Andaikan sisa pembagian $a$ dan $c$ oleh $b$ sama, yaitu $r$. Maka terdapat $q,s\\in\\mathbb Z$ sehingga $a=bq+r$ dan $c=bs+r$. Dengan mengurangkan kedua persamaan diperoleh $a-c=b(q-s)$. Jadi $b\\mid(a-c)$, atau $a\\equiv c\\pmod b$.",
        "($\\Leftarrow$) Andaikan $a\\equiv c\\pmod b$. Menurut definisi kongruensi, terdapat $k\\in\\mathbb Z$ sehingga $a-c=kb$, atau $a=c+kb$. Tuliskan pembagian Euclid $c=bs+r$ dengan $0\\le r<b$.",
        "Dari $a=c+kb=b(s+k)+r$, kita memperoleh representasi pembagian Euclid untuk $a$ dengan sisa $r$. Ketunggalan pada Teorema Pembagian Euclid menjamin bahwa sisa pembagian $a$ juga $r$, sama dengan sisa pembagian $c$. Kedua arah terbukti."
      ],
      "explanation": "Kongruensi bukan persamaan bilangan bulat biasa. Bilangan $-17$ dan $3$ berbeda, tetapi kongruen modulo $5$ karena selisihnya $-20$ habis dibagi $5$."
    },
    {
      "kind": "corollary",
      "title": "Kriteria Sisa Nol",
      "statement": "Jika $a\\in\\mathbb Z$ dan $b\\in\\mathbb Z$ dengan $b>0$, maka sisa pembagian Euclid $a$ oleh $b$ sama dengan $0$ jika dan hanya jika $b\\mid a$.",
      "proof": [
        "($\\Rightarrow$) Jika sisanya nol, terdapat $q\\in\\mathbb Z$ sehingga $a=bq+0$. Menurut definisi keterbagian, $b\\mid a$.",
        "($\\Leftarrow$) Jika $b\\mid a$, terdapat $k\\in\\mathbb Z$ sehingga $a=bk$. Karena $0\\le0<b$, pasangan $(k,0)$ memenuhi syarat pembagian Euclid. Oleh ketunggalan, sisanya harus $0$. Akibat terbukti."
      ],
      "explanation": "Untuk menguji keterbagian, cukup periksa sisa Euclid. Namun pernyataan ini memerlukan $b>0$ sebagaimana definisi sisa pada halaman ini."
    }
  ],
  "examples": [
    {
      "title": "Hasil Bagi dan Sisa Euclid",
      "forDefinition": "Hasil Bagi dan Sisa Euclid",
      "problem": "Tentukan hasil bagi dan sisa dari $-17$ oleh $5$ menurut syarat Euclid.",
      "solution": [
        "Cari kelipatan $5$ terbesar yang tidak melebihi $-17$. Kelipatan tersebut adalah $-20=5(-4)$, sedangkan kelipatan berikutnya $-15$ sudah melebihi $-17$.",
        "Tuliskan $-17=5(-4)+3$. Karena $0\\le3<5$, pasangan $(q,r)=(-4,3)$ memenuhi kedua syarat definisi.",
        "Representasi $-17=5(-3)-2$ memang benar sebagai persamaan bilangan bulat, tetapi $-2$ bukan sisa Euclid karena negatif."
      ],
      "conclusion": "Hasil bagi $q=-4$ dan sisa $r=3$."
    },
    {
      "title": "Kelipatan dan Keterbagian",
      "forDefinition": "Kelipatan dan Keterbagian",
      "problem": "Buktikan bahwa $7\\mid(-42)$, tetapi $7\\nmid(-40)$.",
      "solution": [
        "Karena $-42=7(-6)$ dengan $-6\\in\\mathbb Z$, definisi keterbagian memberi $7\\mid(-42)$.",
        "Jika $7\\mid(-40)$, terdapat bilangan bulat $k$ dengan $-40=7k$, sehingga $k=-40/7$ yang bukan bilangan bulat.",
        "Cara lain: $-40=7(-6)+2$ dengan $0\\le2<7$. Sisa yang tidak nol membuktikan $7\\nmid(-40)$."
      ],
      "conclusion": "Keterbagian menuntut hasil bagi bulat, bukan sekadar hasil bagi real."
    },
    {
      "title": "Fungsi Lantai",
      "forDefinition": "Fungsi Lantai",
      "problem": "Hitung $\\lfloor-13/4\\rfloor$ dan gunakan untuk memperoleh sisa pembagian $-13$ oleh $4$.",
      "solution": [
        "Karena $-4\\le-13/4=-3.25<-3$, definisi fungsi lantai memberi $\\lfloor-13/4\\rfloor=-4$.",
        "Substitusikan ke rumus $r=a-b\\lfloor a/b\\rfloor$ sehingga $r=-13-4(-4)=3$.",
        "Verifikasi langsung: $-13=4(-4)+3$ dan $0\\le3<4$. Nilai $-3$ adalah pemotongan menuju nol, bukan fungsi lantai."
      ],
      "conclusion": "$q=-4$ dan $r=3$."
    },
    {
      "title": "Kongruensi Modulo Positif",
      "forDefinition": "Kongruensi Modulo Positif",
      "problem": "Tentukan apakah $-23\\equiv 12\\pmod7$ dan apakah keduanya mempunyai sisa sama.",
      "solution": [
        "Hitung selisihnya: $-23-12=-35=7(-5)$, sehingga $7\\mid(-35)$.",
        "Menurut definisi kongruensi, $-23\\equiv12\\pmod7$.",
        "Pembagian Euclid memberi $-23=7(-4)+5$ dan $12=7(1)+5$; keduanya mempunyai sisa $5$."
      ],
      "conclusion": "Kongruensi dan kesamaan sisa menghasilkan jawaban yang konsisten."
    },
    {
      "title": "Mengapa Batas Sisa Diperlukan",
      "problem": "Jelaskan mengapa persamaan $26=6q+r$ tidak menentukan $(q,r)$ secara unik jika syarat $0\\le r<6$ dihapus.",
      "solution": [
        "Ambil $q=4$, sehingga $r=26-6(4)=2$. Ini memenuhi syarat sisa Euclid.",
        "Ambil $q=3$, sehingga $r=26-6(3)=8$. Persamaan tetap benar tetapi $8\\not<6$.",
        "Secara umum, untuk setiap $t\\in\\mathbb Z$, $26=6(4-t)+(2+6t)$. Jadi tanpa batas sisa terdapat tak hingga pasangan."
      ],
      "conclusion": "Pembatasan $0\\le r<b$ adalah bagian esensial dari ketunggalan."
    },
    {
      "title": "Pembagian dengan Pembagi Satu",
      "problem": "Tentukan hasil bagi dan sisa Euclid $-91$ oleh $1$, dan jelaskan mengapa hasil ini berlaku untuk semua bilangan bulat.",
      "solution": [
        "Syarat $0\\le r<1$ dan $r\\in\\mathbb Z$ hanya mengizinkan $r=0$.",
        "Dari $-91=1\\cdot q+0$ diperoleh $q=-91$.",
        "Untuk setiap $a\\in\\mathbb Z$, persamaan $a=1\\cdot a+0$ memenuhi syarat pembagian Euclid; ketunggalan menjamin tidak ada hasil lain."
      ],
      "conclusion": "Setiap bilangan bulat habis dibagi $1$ dengan sisa nol."
    },
    {
      "title": "Menentukan Seluruh Bilangan dengan Sisa Tertentu",
      "problem": "Tentukan seluruh $n\\in\\mathbb Z$ yang bersisa $4$ ketika dibagi $9$, lalu temukan tiga yang negatif.",
      "solution": [
        "Menurut definisi, $n=9q+4$ untuk suatu $q\\in\\mathbb Z$, karena $0\\le4<9$.",
        "Sebaliknya, setiap $n$ berbentuk $9q+4$ memiliki sisa $4$ oleh ketunggalan pembagian Euclid.",
        "Dengan memilih $q=-1,-2,-3$, diperoleh berturut-turut $n=-5,-14,-23$. Ketiganya negatif dan berbeda."
      ],
      "conclusion": "Himpunan solusi adalah $\\{9q+4:q\\in\\mathbb Z\\}$."
    },
    {
      "title": "Menggabungkan Sisa dan Pertidaksamaan",
      "problem": "Tentukan semua $n\\in\\mathbb Z$ dengan $-20\\le n\\le20$ dan $n\\equiv2\\pmod6$.",
      "solution": [
        "Kongruensi setara dengan $n=6k+2$ untuk suatu $k\\in\\mathbb Z$.",
        "Batas menghasilkan $-20\\le6k+2\\le20$, sehingga $-22/6\\le k\\le18/6$, yakni $-11/3\\le k\\le3$.",
        "Bilangan bulat yang memenuhi adalah $k=-3,-2,-1,0,1,2,3$. Substitusi menghasilkan $-16,-10,-4,2,8,14,20$.",
        "Setiap bilangan pada daftar berselisih kelipatan $6$ dari $2$, dan tidak ada nilai $k$ lain yang memenuhi batas."
      ],
      "conclusion": "Terdapat tepat tujuh bilangan yang memenuhi syarat."
    }
  ],
  "exercises": [
    {
      "prompt": "Tentukan hasil bagi dan sisa Euclid pembagian $-58$ oleh $9$, lalu buktikan bahwa pasangan yang diperoleh memenuhi seluruh syarat definisi.",
      "hint": "Temukan dua kelipatan $9$ berurutan yang mengapit $-58$.",
      "answer": "Kelipatan $9$ terbesar yang tidak melebihi $-58$ adalah $-63=9(-7)$, sedangkan kelipatan berikutnya $-54$ sudah lebih besar. Oleh sebab itu $-58=9(-7)+5$. Syarat $q,r\\in\\mathbb Z$ terpenuhi, dan $0\\le5<9$. Teorema pembagian Euclid menjamin bahwa pasangan ini satu-satunya. Jadi $q=-7$ dan $r=5$."
    },
    {
      "prompt": "Untuk setiap $a\\in\\mathbb Z$ dan $b>0$, buktikan bahwa sisa pembagian $-a$ oleh $b$ adalah $0$ jika sisa $a$ nol, dan $b-r$ jika sisa $a$ adalah $r$ dengan $1\\le r<b$.",
      "hint": "Mulai dari $a=bq+r$, lalu negasikan persamaan dan atur ulang supaya sisanya taknegatif.",
      "answer": "Tuliskan $a=bq+r$ dengan $0\\le r<b$. Jika $r=0$, maka $-a=b(-q)+0$, sehingga sisanya nol. Jika $1\\le r<b$, maka $-a=b(-q)-r=b(-q-1)+(b-r)$. Dari $1\\le r<b$ diperoleh $0<b-r<b$, sehingga $b-r$ memenuhi batas sisa Euclid. Ketunggalan pembagian memastikan bahwa nilai itu adalah sisanya. Kedua kasus mencakup semua kemungkinan $r$."
    },
    {
      "prompt": "Buktikan bahwa untuk setiap $a\\in\\mathbb Z$ dan $b\\in\\mathbb Z$ dengan $b>0$, hasil bagi Euclid pembagian $a+b$ oleh $b$ adalah $q+1$ jika hasil bagi pembagian $a$ oleh $b$ adalah $q$, sedangkan sisanya tetap.",
      "hint": "Gunakan representasi $a=bq+r$ dan tambahkan $b$.",
      "answer": "Dari Teorema Pembagian Euclid, terdapat tepat satu pasangan $(q,r)$ dengan $a=bq+r$ dan $0\\le r<b$. Tambahkan $b$ sehingga $a+b=b(q+1)+r$. Karena $q+1$ bulat dan batas $0\\le r<b$ tidak berubah, ini merupakan representasi pembagian Euclid untuk $a+b$. Oleh ketunggalan, hasil baginya $q+1$ dan sisanya $r$."
    },
    {
      "prompt": "Diketahui bilangan bulat $n$ menghasilkan sisa $5$ jika dibagi $8$. Tentukan sisa pembagian $3n+7$ oleh $8$ dan jelaskan setiap reduksi.",
      "hint": "Nyatakan $n=8k+5$ terlebih dahulu.",
      "answer": "Karena sisa pembagian $n$ oleh $8$ adalah $5$, terdapat $k\\in\\mathbb Z$ dengan $n=8k+5$. Maka $3n+7=3(8k+5)+7=24k+22=8(3k+2)+6$. Nilai $3k+2$ bilangan bulat dan $0\\le6<8$, sehingga sisa Euclid yang diminta adalah $6$. Perhitungan ini berlaku untuk semua $n$ yang memenuhi syarat, termasuk $n$ negatif."
    },
    {
      "prompt": "Buktikan bahwa dua bilangan bulat $a,c$ mempunyai sisa berbeda modulo $b>0$ apabila $b\\nmid(a-c)$. Nyatakan dengan jelas hasil formal yang dipakai.",
      "hint": "Gunakan kontraposisi dari salah satu arah teorema kesamaan sisa dan kongruensi.",
      "answer": "Andaikan sebaliknya $a$ dan $c$ mempunyai sisa sama, misalnya $r$. Maka terdapat $q,s\\in\\mathbb Z$ sehingga $a=bq+r$ dan $c=bs+r$. Dengan mengurangkan, $a-c=b(q-s)$, yang berarti $b\\mid(a-c)$. Hal ini bertentangan dengan hipotesis $b\\nmid(a-c)$. Karena itu kedua sisa harus berbeda. Ini adalah kontraposisi arah kesamaan sisa mengakibatkan kongruensi."
    },
    {
      "prompt": "Tentukan semua bilangan bulat $n$ dalam interval $-35\\le n\\le35$ yang bersisa $3$ ketika dibagi $7$. Jelaskan mengapa daftar yang diperoleh lengkap.",
      "hint": "Tuliskan $n=7k+3$ dan terapkan kedua batas.",
      "answer": "Persamaan sisa adalah $n=7k+3$ dengan $k\\in\\mathbb Z$. Batas interval memberi $-35\\le7k+3\\le35$, sehingga $-38/7\\le k\\le32/7$. Maka $k$ harus salah satu dari $-5,-4,-3,-2,-1,0,1,2,3,4$. Substitusi memberikan $-32,-25,-18,-11,-4,3,10,17,24,31$. Setiap nilai memiliki sisa $3$, dan tidak ada bilangan bulat $k$ lain di dalam rentang, sehingga daftar lengkap."
    },
    {
      "prompt": "Tunjukkan bahwa untuk $b>0$ dan $a,c\\in\\mathbb Z$, jika $a\\equiv c\\pmod b$, maka $a+tb\\equiv c\\pmod b$ untuk setiap $t\\in\\mathbb Z$. Berikan satu contoh dengan bilangan negatif.",
      "hint": "Periksa apakah $b$ membagi selisih kedua ruas yang akan dibandingkan.",
      "answer": "Dari $a\\equiv c\\pmod b$, terdapat $k\\in\\mathbb Z$ dengan $a-c=bk$. Untuk setiap $t\\in\\mathbb Z$, diperoleh $(a+tb)-c=b(k+t)$, yang merupakan kelipatan $b$. Jadi $a+tb\\equiv c\\pmod b$. Sebagai contoh, $-17\\equiv3\\pmod5$ karena $-20=5(-4)$; memilih $t=2$ memberi $-7\\equiv3\\pmod5$ karena selisihnya $-10$."
    },
    {
      "prompt": "Misalkan $a=bq+r$ dengan $b>0$ dan $0\\le r<b$. Buktikan bahwa $a$ adalah kelipatan $b$ jika dan hanya jika $r=0$, lalu tentukan apakah $-126$ habis dibagi $9$.",
      "hint": "Untuk arah balik gunakan ketunggalan pasangan Euclid; hitung representasi $-126$ secara langsung.",
      "answer": "Jika $r=0$, maka $a=bq$, sehingga $b\\mid a$. Sebaliknya, jika $b\\mid a$, terdapat $k\\in\\mathbb Z$ dengan $a=bk+0$. Karena $0\\le0<b$, ketunggalan pasangan Euclid memaksa $r=0$. Untuk $-126$, diperoleh $-126=9(-14)+0$. Jadi sisanya nol dan $9\\mid(-126)$. Ini juga memverifikasi kriteria pada bilangan negatif."
    }
  ],
  "mistakes": [],
  "connections": []
};
