import type { BookLessonContent } from "@/data/book-content-types";

/**
 * Axioms and first consequences of groups.
 * Mathematical references: D. S. Dummit and R. M. Foote,
 * Abstract Algebra, 3rd ed., Wiley, 2004, Section 1.1;
 * M. Artin, Algebra, 2nd ed., Pearson, 2011, Chapter 2.
 * All prose, proofs, examples and exercises are original.
 */
export const groupAxiomsContent:BookLessonContent={
  intro:[
    "Sebuah operasi tidak otomatis menghasilkan grup. Penjumlahan bilangan bulat membentuk grup, tetapi perkalian bilangan bulat tidak: elemen $2$ tidak mempunyai invers perkalian di $\\mathbb Z$. Perbedaan ini tidak dapat dilihat hanya dari keberadaan hasil operasi; kita perlu memeriksa asosiativitas, identitas, dan invers setiap unsur. Semua pemeriksaan harus dilakukan pada himpunan yang benar-benar ditetapkan.",
    "Aksioma grup memisahkan sifat yang diasumsikan dari sifat yang dapat dibuktikan. Ketunggalan identitas, ketunggalan invers, hukum pembatalan, dan rumus invers hasil kali bukan bagian tambahan dari definisi: semuanya merupakan konsekuensi aksioma. Kita akan membuktikannya tanpa menganggap operasi komutatif. Karena itu, urutan faktor dalam perhitungan harus selalu diperhatikan.",
    "Kelas sisa modulo $n$ memberikan laboratorium hingga yang konkret. Penjumlahan pada $\\mathbb Z_n$ selalu menghasilkan grup abelian, sedangkan perkalian pada seluruh $\\mathbb Z_n$ bukan grup karena kelas $[0]$ tidak dapat dibalik. Namun kelas-kelas yang relatif prima terhadap $n$ membentuk grup perkalian tersendiri. Perbedaan tiga struktur ini tampak langsung pada tabel Cayley dan panah transformasi di visualisasi.",
    "Dalam setiap pembuktian, notasi $ab$ merupakan singkatan dari $a*b$, bukan perkalian bilangan real kecuali operasinya memang perkalian. Identitas ditulis $e$, dan invers $a^{-1}$ selalu relatif terhadap operasi pada grup yang sedang dibahas. Pada grup aditif, identitas lazim ditulis $0$ dan invers $-a$. Referensi: Dummit–Foote (2004, §1.1) dan Artin (2011, Bab 2)."
  ],
  formal:[
    {kind:"definition",title:"Operasi Biner pada Himpunan",
      statement:"Diberikan himpunan takkosong $G$. Operasi biner pada $G$ ialah fungsi $*:G\\times G\\to G$. Untuk setiap pasangan $(a,b)\\in G\\times G$, nilai $a*b$ harus terdefinisi dan berada di $G$ (tertutup). Operasi tersebut asosiatif jika $(a*b)*c=a*(b*c)$ untuk semua $a,b,c\\in G$.",
      explanation:"Ketertutupan berasal dari kodomain operasi; asosiativitas merupakan persyaratan tambahan. Tidak setiap operasi tertutup bersifat asosiatif."},
    {kind:"definition",title:"Grup",
      statement:"Pasangan $(G,*)$ disebut grup apabila $G\\ne\\varnothing$, $*:G\\times G\\to G$ operasi biner asosiatif, terdapat $e\\in G$ sehingga $e*a=a*e=a$ untuk setiap $a\\in G$, dan untuk setiap $a\\in G$ terdapat $b\\in G$ sehingga $a*b=b*a=e$. Unsur $e$ disebut identitas, sedangkan $b$ disebut invers $a$.",
      explanation:"Syarat invers berlaku bagi setiap unsur, bukan hanya beberapa unsur. Identitas harus bekerja dari kiri dan kanan, demikian pula invers."},
    {kind:"definition",title:"Grup Abelian",
      statement:"Grup $(G,*)$ disebut abelian atau komutatif apabila $a*b=b*a$ untuk semua $a,b\\in G$. Sifat komutatif bukan bagian dari aksioma grup secara umum.",
      explanation:"Grup matriks invertibel dan grup permutasi menyediakan contoh grup yang tidak komutatif."},
    {kind:"definition",title:"Kelas Sisa dan Grup Unit Modulo n",
      statement:"Untuk bilangan bulat $n\\ge2$, tulis $\\mathbb Z_n=\\{[0],[1],\\ldots,[n-1]\\}$, dengan $[a]=[b]$ jika dan hanya jika $n\\mid(a-b)$. Operasi $[a]+[b]=[a+b]$ dan $[a][b]=[ab]$ terdefinisi baik. Himpunan unit $U(n)=\\{[a]\\in\\mathbb Z_n:\\gcd(a,n)=1\\}$ menggunakan perkalian modulo $n$.",
      explanation:"Notasi $[a]$ menandai kelas kongruensi, bukan bilangan bulat tertentu. Perwakilan berbeda dari kelas yang sama harus menghasilkan kelas keluaran yang sama."},
    {kind:"proposition",title:"Ketunggalan Identitas",
      statement:"Jika $(G,*)$ grup, maka elemen identitas $G$ tunggal.",
      proof:[
        "Diketahui $(G,*)$ grup. Andaikan $e,f\\in G$ masing-masing memenuhi sifat identitas dua sisi. Akan dibuktikan $e=f$.",
        "Karena $e$ identitas kiri, $e*f=f$. Karena $f$ identitas kanan, $e*f=e$. Kedua persamaan mempunyai ruas kiri yang sama, sehingga $e=f$.",
        "Jadi tidak mungkin terdapat dua identitas yang berbeda. Keberadaan identitas telah dijamin aksioma, maka identitas grup tepat satu."
      ],
      explanation:"Ketunggalan memungkinkan simbol $e$ digunakan tanpa ambiguitas."},
    {kind:"proposition",title:"Ketunggalan Invers",
      statement:"Dalam grup $(G,*)$, setiap $a\\in G$ mempunyai tepat satu invers.",
      proof:[
        "Ambil sebarang $a\\in G$. Keberadaan invers dijamin aksioma. Andaikan $b,c\\in G$ keduanya invers dua sisi $a$, sehingga $ba=ab=e$ dan $ca=ac=e$.",
        "Dengan identitas, asosiativitas, dan persamaan invers, diperoleh $b=be=b(ac)=(ba)c=ec=c$. Urutan faktor dipertahankan; komutativitas tidak digunakan.",
        "Dengan demikian setiap $a$ memiliki tepat satu invers, yang selanjutnya dinotasikan $a^{-1}$."
      ],
      explanation:"Persamaan $b(ac)=(ba)c$ sah semata-mata karena asosiativitas."},
    {kind:"proposition",title:"Hukum Pembatalan Kiri dan Kanan",
      statement:"Untuk setiap $a,b,c\\in G$, berlaku $ab=ac\\Rightarrow b=c$ dan $ba=ca\\Rightarrow b=c$.",
      proof:[
        "Diketahui $ab=ac$. Kalikan kedua ruas dari kiri dengan $a^{-1}$: $a^{-1}(ab)=a^{-1}(ac)$. Dengan asosiativitas, $(a^{-1}a)b=(a^{-1}a)c$, sehingga $eb=ec$ dan akhirnya $b=c$.",
        "Sebaliknya untuk pembatalan kanan, diketahui $ba=ca$. Kalikan kedua ruas dari kanan dengan $a^{-1}$: $(ba)a^{-1}=(ca)a^{-1}$. Asosiativitas memberi $b(aa^{-1})=c(aa^{-1})$, sehingga $be=ce$ dan $b=c$.",
        "Kedua hukum berlaku untuk setiap grup, termasuk grup nonabelian; yang berbeda hanyalah sisi tempat invers dikalikan."
      ],
      explanation:"Tidak boleh membatalkan unsur dalam semigrup sembarang tanpa memeriksa keberadaan invers atau sifat pembatalan."},
    {kind:"proposition",title:"Penyelesaian Persamaan di Dalam Grup",
      statement:"Untuk setiap $a,b\\in G$, persamaan $ax=b$ memiliki solusi tunggal $x=a^{-1}b$, sedangkan $ya=b$ memiliki solusi tunggal $y=ba^{-1}$.",
      proof:[
        "Diketahui $a,b\\in G$. Untuk persamaan $ax=b$, definisikan $x=a^{-1}b\\in G$ berdasarkan ketertutupan. Maka $ax=a(a^{-1}b)=(aa^{-1})b=eb=b$, sehingga solusi ada.",
        "Jika $ax_1=b=ax_2$, hukum pembatalan kiri memberikan $x_1=x_2$. Jadi solusi pertama tunggal.",
        "Untuk persamaan $ya=b$, pilih $y=ba^{-1}$. Perhitungan $(ba^{-1})a=b(a^{-1}a)=be=b$ membuktikan keberadaan; hukum pembatalan kanan membuktikan ketunggalannya.",
        "Urutan $a^{-1}b$ dan $ba^{-1}$ tidak dapat dipertukarkan tanpa asumsi komutatif."
      ],
      explanation:"Perbedaan solusi kiri dan kanan menjadi penting pada grup matriks dan permutasi."},
    {kind:"proposition",title:"Invers dari Hasil Kali dan Invers Ganda",
      statement:"Untuk semua $a,b\\in G$, berlaku $(ab)^{-1}=b^{-1}a^{-1}$ dan $(a^{-1})^{-1}=a$.",
      proof:[
        "Diketahui $a,b\\in G$. Dengan asosiativitas, $(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=aea^{-1}=aa^{-1}=e$.",
        "Dari arah sebaliknya diperoleh $(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=b^{-1}eb=b^{-1}b=e$. Jadi $b^{-1}a^{-1}$ merupakan invers dua sisi $ab$.",
        "Ketunggalan invers memberikan $(ab)^{-1}=b^{-1}a^{-1}$. Selain itu $a^{-1}a=aa^{-1}=e$, sehingga $a$ adalah invers dari $a^{-1}$; oleh ketunggalan, $(a^{-1})^{-1}=a$."
      ],
      explanation:"Urutan faktor pada invers hasil kali harus dibalik; rumus $(ab)^{-1}=a^{-1}b^{-1}$ tidak berlaku secara umum."},
    {kind:"theorem",title:"Grup Aditif Kelas Sisa",
      statement:"Untuk setiap bilangan bulat $n\\ge2$, struktur $(\\mathbb Z_n,+)$ adalah grup abelian. Sebaliknya, $(\\mathbb Z_n,\\cdot)$ bukan grup.",
      proof:[
        "Pertama dibuktikan operasi terdefinisi baik. Jika $a\\equiv a'\\pmod n$ dan $b\\equiv b'\\pmod n$, maka $n\\mid(a-a')$ dan $n\\mid(b-b')$. Akibatnya $n\\mid((a+b)-(a'+b'))$ dan $n\\mid(ab-a'b')$, karena $ab-a'b'=a(b-b')+b'(a-a')$. Jadi hasil operasi tidak bergantung pada pilihan wakil kelas.",
        "Penjumlahan modulo $n$ tertutup karena $[a+b]\\in\\mathbb Z_n$. Asosiativitas dan komutativitas diturunkan dari penjumlahan bilangan bulat: $([a]+[b])+[c]=[a+b+c]=[a]+([b]+[c])$ dan $[a]+[b]=[b]+[a]$.",
        "Kelas $[0]$ adalah identitas aditif, karena $[a]+[0]=[0]+[a]=[a]$. Setiap $[a]$ mempunyai invers aditif $[-a]$, sebab $[a]+[-a]=[0]=[-a]+[a]$. Maka $(\\mathbb Z_n,+)$ grup abelian.",
        "Pada perkalian seluruh $\\mathbb Z_n$, kelas $[0]$ tidak memiliki invers: untuk setiap $[x]\\in\\mathbb Z_n$, berlaku $[0][x]=[0]\\ne[1]$ karena $n\\ge2$. Jadi aksioma invers gagal dan $(\\mathbb Z_n,\\cdot)$ bukan grup."
      ],
      explanation:"Kesamaan himpunan dasar tidak menjamin kesamaan sifat aljabar ketika operasinya diubah."},
    {kind:"theorem",title:"Grup Unit Modulo n",
      statement:"Untuk setiap bilangan bulat $n\\ge2$, himpunan $U(n)=\\{[a]\\in\\mathbb Z_n:\\gcd(a,n)=1\\}$ membentuk grup abelian terhadap perkalian modulo $n$.",
      proof:[
        "Diketahui $n\\ge2$. Kelas unit tidak bergantung pada wakil: jika $a\\equiv b\\pmod n$, maka pembagi bersama $a,n$ sama dengan pembagi bersama $b,n$, sehingga $\\gcd(a,n)=\\gcd(b,n)$. Operasi perkalian modulo $n$ sudah terdefinisi baik menurut teorema sebelumnya.",
        "Untuk ketertutupan, ambil $[a],[b]\\in U(n)$. Dari $\\gcd(a,n)=\\gcd(b,n)=1$, identitas Bézout memberikan $ua+vn=1$ dan $sb+tn=1$ untuk bilangan bulat $u,v,s,t$. Mengalikan kedua identitas diperoleh $usab+n(ua t+vsb+vtn)=1$. Maka $\\gcd(ab,n)=1$ dan $[ab]\\in U(n)$.",
        "Asosiativitas serta komutativitas berasal dari perkalian bilangan bulat. Kelas $[1]$ merupakan identitas dan berada di $U(n)$ karena $\\gcd(1,n)=1$.",
        "Untuk $[a]\\in U(n)$, identitas Bézout memberi $ua+vn=1$. Karena itu $[u][a]=[1]=[a][u]$. Selain itu $[u]\\in U(n)$, sebab setiap pembagi bersama $u,n$ juga membagi $ua+vn=1$. Jadi $[u]$ adalah invers di $U(n)$.",
        "Keempat aksioma grup terpenuhi, dan perkalian komutatif. Dengan demikian $(U(n),\\cdot)$ adalah grup abelian."
      ],
      explanation:"Keberadaan invers modulo $n$ setara dengan kondisi relatif prima; inilah alasan kelas nol dikeluarkan."},
    {kind:"corollary",title:"Semua Unsur Berorde Paling Banyak Dua",
      statement:"Jika $(G,*)$ grup dan $a^2=e$ untuk setiap $a\\in G$, maka $G$ abelian.",
      proof:[
        "Diketahui $a^2=e$ untuk semua $a\\in G$. Maka setiap $a$ adalah invers dirinya sendiri, karena $aa=e$; ketunggalan invers memberi $a^{-1}=a$.",
        "Ambil sebarang $a,b\\in G$. Unsur $ab$ juga memenuhi $(ab)^2=e$, sehingga $(ab)^{-1}=ab$. Di sisi lain, rumus invers hasil kali memberikan $(ab)^{-1}=b^{-1}a^{-1}=ba$.",
        "Menyamakan kedua ekspresi invers yang unik diperoleh $ab=ba$. Karena $a,b$ dipilih sebarang, grup $G$ abelian."
      ],
      explanation:"Syarat berlaku untuk seluruh unsur, termasuk hasil kali $ab$; jika hanya dua unsur tertentu berkuadrat identitas, kesimpulan komutatif tidak mengikuti."}
  ],
  examples:[
    {forDefinition:"Operasi Biner pada Himpunan",title:"Operasi Tertutup yang Tidak Asosiatif",
      problem:"Pada $\\mathbb Z$ didefinisikan $a*b=a-b$. Periksa ketertutupan dan asosiativitasnya.",
      solution:[
        "Untuk setiap $a,b\\in\\mathbb Z$, selisih $a-b$ tetap bilangan bulat. Karena itu $*: \\mathbb Z\\times\\mathbb Z\\to\\mathbb Z$ merupakan operasi biner yang tertutup.",
        "Hitung $(a*b)*c=(a-b)-c=a-b-c$, sedangkan $a*(b*c)=a-(b-c)=a-b+c$. Kedua ekspresi tidak sama untuk semua $c$.",
        "Ambil $a=5,b=3,c=2$. Diperoleh $(5*3)*2=2-2=0$, sedangkan $5*(3*2)=5-1=4$. Satu kontra-contoh sudah cukup menggugurkan asosiativitas."
      ],
      conclusion:"Ketertutupan tidak mengimplikasikan asosiativitas; operasi pengurangan bukan operasi grup pada $\\mathbb Z$."},
    {forDefinition:"Grup",title:"Verifikasi Lengkap Grup Bilangan Bulat",
      problem:"Buktikan bahwa $(\\mathbb Z,+)$ adalah grup dengan memeriksa semua aksioma.",
      solution:[
        "Untuk sebarang $a,b\\in\\mathbb Z$, hasil $a+b\\in\\mathbb Z$, sehingga operasi tertutup. Untuk setiap $a,b,c\\in\\mathbb Z$, sifat penjumlahan bilangan bulat memberi $(a+b)+c=a+(b+c)$.",
        "Bilangan $0\\in\\mathbb Z$ memenuhi $0+a=a+0=a$ untuk setiap $a\\in\\mathbb Z$, sehingga merupakan identitas dua sisi.",
        "Bagi setiap $a\\in\\mathbb Z$, bilangan $-a\\in\\mathbb Z$ memenuhi $a+(-a)=(-a)+a=0$. Jadi setiap unsur memiliki invers.",
        "Seluruh aksioma terpenuhi. Selain itu $a+b=b+a$ untuk semua bilangan bulat, sehingga grup ini juga abelian."
      ],
      conclusion:"$(\\mathbb Z,+)$ merupakan grup abelian, dengan identitas $0$ dan invers $-a$."},
    {forDefinition:"Grup Abelian",title:"Grup Matriks yang Tidak Abelian",
      problem:"Tunjukkan dengan dua matriks bahwa grup matriks invertibel $2\\times2$ atas $\\mathbb R$ tidak abelian.",
      solution:[
        "Pilih $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ dan $B=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$. Keduanya invertibel karena determinannya $1$.",
        "Perkalian matriks memberi $AB=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$, sedangkan $BA=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}$.",
        "Karena entri $(1,1)$ kedua hasil berbeda, $AB\\ne BA$. Keberadaan satu pasangan unsur yang tidak komutatif membuktikan grup matriks invertibel tersebut bukan grup abelian."
      ],
      conclusion:"Sifat grup tidak memaksa perkalian matriks menjadi komutatif."},
    {forDefinition:"Kelas Sisa dan Grup Unit Modulo n",title:"Unit Modulo Delapan",
      problem:"Tentukan $U(8)$ dan invers setiap unsurnya terhadap perkalian modulo $8$.",
      solution:[
        "Kelas yang relatif prima dengan $8$ ialah $[1],[3],[5],[7]$. Kelas $[0],[2],[4],[6]$ tidak memenuhi syarat karena FPB wakilnya dengan $8$ lebih dari $1$.",
        "Hitung $1^2\\equiv1\\pmod8$, $3^2=9\\equiv1\\pmod8$, $5^2=25\\equiv1\\pmod8$, dan $7^2=49\\equiv1\\pmod8$.",
        "Jadi setiap unit merupakan invers dirinya sendiri. Misalnya $[3][5]=[15]=[7]$, tetap berada di $U(8)$; ketertutupan umum telah dibuktikan oleh teorema grup unit."
      ],
      conclusion:"$U(8)=\\{[1],[3],[5],[7]\\}$ dan setiap unsur memiliki invers dirinya sendiri."},
    {title:"Operasi Pergeseran pada Bilangan Bulat",
      problem:"Pada $\\mathbb Z$ didefinisikan $a*b=a+b+1$. Tentukan apakah $(\\mathbb Z,*)$ grup.",
      solution:[
        "Operasi tertutup. Untuk $a,b,c\\in\\mathbb Z$, $(a*b)*c=(a+b+1)+c+1=a+b+c+2$, sedangkan $a*(b*c)=a+(b+c+1)+1=a+b+c+2$. Jadi operasi asosiatif.",
        "Identitas $e$ harus memenuhi $a*e=a$, yakni $a+e+1=a$ untuk semua $a$, sehingga $e=-1$. Memang $a*(-1)=(-1)*a=a$.",
        "Invers $b$ dari $a$ memenuhi $a*b=-1$, sehingga $a+b+1=-1$ dan $b=-a-2$. Karena operasi komutatif, $b*a=-1$ juga terpenuhi.",
        "Jadi $(\\mathbb Z,*)$ grup abelian, meskipun identitasnya bukan $0$ dan inversnya bukan $-a$."
      ],
      conclusion:"Identitas dan invers selalu ditentukan relatif terhadap operasi yang digunakan."},
    {title:"Perkalian pada Semua Kelas Sisa",
      problem:"Mengapa $(\\mathbb Z_5,\\cdot)$ bukan grup walaupun $5$ bilangan prima?",
      solution:[
        "Perkalian modulo $5$ tertutup, asosiatif, dan memiliki identitas $[1]$. Semua kelas taknol memang mempunyai invers, misalnya $[2][3]=[1]$.",
        "Namun $[0]$ juga merupakan anggota $\\mathbb Z_5$. Untuk setiap kelas $[x]$, hasil $[0][x]=[0]$ dan tidak mungkin sama dengan identitas $[1]$.",
        "Dengan demikian aksioma invers gagal untuk satu unsur, yaitu $[0]$. Menghapus kelas nol menghasilkan $U(5)=\\{[1],[2],[3],[4]\\}$, yang merupakan grup perkalian."
      ],
      conclusion:"Keprimaan modulus tidak membuat kelas nol memiliki invers perkalian."},
    {title:"Persamaan Kiri dan Kanan di Grup Nonabelian",
      problem:"Pada grup matriks invertibel, selesaikan $AX=B$ dan $YA=B$ untuk $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, $B=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$.",
      solution:[
        "Invers $A$ adalah $A^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$ karena perkalian dua arah menghasilkan matriks identitas.",
        "Persamaan $AX=B$ memberi $X=A^{-1}B=\\begin{pmatrix}0&-1\\\\1&1\\end{pmatrix}$. Periksa $AX=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}=B$.",
        "Persamaan $YA=B$ memberi $Y=BA^{-1}=\\begin{pmatrix}1&-1\\\\1&0\\end{pmatrix}$. Periksa $YA=B$.",
        "Matriks $X$ dan $Y$ berbeda. Karena itu memindahkan $A$ ke sisi lain tanpa memperhatikan kiri atau kanan akan menghasilkan jawaban keliru."
      ],
      conclusion:"Persamaan grup nonabelian memerlukan urutan perkalian invers yang tepat."},
    {title:"Pembatalan Tidak Sah Tanpa Grup",
      problem:"Periksa implikasi $ab=ac\\Rightarrow b=c$ dalam $(\\mathbb Z_6,\\cdot)$.",
      solution:[
        "Ambil $a=[2]$, $b=[1]$, dan $c=[4]$. Ketiga kelas merupakan anggota $\\mathbb Z_6$, dengan $b\\ne c$ karena $1\\not\\equiv4\\pmod6$.",
        "Tetapi $ab=[2][1]=[2]$ dan $ac=[2][4]=[8]=[2]$. Jadi $ab=ac$ walaupun $b\\ne c$.",
        "Kelas $[2]$ tidak mempunyai invers perkalian modulo $6$ karena $\\gcd(2,6)=2$. Inilah sebabnya pembatalan dengan $[2]$ tidak dibenarkan."
      ],
      conclusion:"Hukum pembatalan tidak boleh dipindahkan dari grup ke struktur yang gagal memiliki invers."}
  ],
  exercises:[
    {prompt:"Diberikan operasi $a*b=a+b-4$ pada $\\mathbb Z$. Buktikan bahwa operasi tersebut membentuk grup abelian; tentukan identitas, invers dari $a$, dan solusi persamaan $7*x=10$.",
      hint:"Bandingkan $(a*b)*c$ dengan $a*(b*c)$, kemudian selesaikan $a*e=a$ dan $a*b=e$.",
      answer:"Untuk setiap $a,b\\in\\mathbb Z$, $a+b-4\\in\\mathbb Z$, sehingga operasi tertutup. Perhitungan $(a*b)*c=a+b+c-8=a*(b*c)$ membuktikan asosiativitas. Identitas harus memenuhi $a+e-4=a$, sehingga $e=4$; sifat dua sisi juga berlaku. Invers $b$ dari $a$ ditentukan oleh $a+b-4=4$, yaitu $b=8-a$. Karena $a+b-4=b+a-4$, grup abelian. Persamaan $7*x=10$ berarti $7+x-4=10$, sehingga $x=7$. Ketunggalan solusi mengikuti hukum pembatalan."},
    {prompt:"Pada himpunan $\\mathbb Z_8$, tentukan semua kelas yang mempunyai invers terhadap perkalian modulo $8$, dan buktikan bahwa kelas $[2]$ tidak dapat dibatalkan dari persamaan perkalian.",
      hint:"Gunakan kriteria $\\gcd(a,8)=1$ dan cari dua kelas berbeda yang memberi hasil sama setelah dikalikan $[2]$.",
      answer:"Kelas yang relatif prima dengan $8$ adalah $[1],[3],[5],[7]$, sehingga tepat kelas-kelas tersebut yang mempunyai invers perkalian. Inversnya masing-masing adalah dirinya sendiri karena kuadrat wakilnya kongruen $1$ modulo $8$. Untuk kegagalan pembatalan, ambil $b=[1]$ dan $c=[5]$. Keduanya berbeda, tetapi $[2]b=[2]$ dan $[2]c=[10]=[2]$. Jadi $[2]b=[2]c$ tidak mengakibatkan $b=c$. Penyebabnya $\\gcd(2,8)>1$, sehingga $[2]$ tidak invertibel."},
    {prompt:"Buktikan dalam grup sembarang bahwa jika $ab=e$, maka $b=a^{-1}$, meskipun hanya persamaan invers kanan yang diketahui. Jangan mengasumsikan komutativitas.",
      hint:"Gunakan invers dua sisi $a^{-1}$ yang dijamin aksioma dan kalikan persamaan dari kiri.",
      answer:"Diketahui $(G,*)$ grup dan $ab=e$. Berdasarkan aksioma, unsur $a$ mempunyai invers dua sisi $a^{-1}$. Kalikan $ab=e$ dari kiri dengan $a^{-1}$ untuk memperoleh $a^{-1}(ab)=a^{-1}e$. Asosiativitas memberi $(a^{-1}a)b=a^{-1}$, sehingga $eb=a^{-1}$ dan $b=a^{-1}$. Karena $a^{-1}$ juga invers kiri, diperoleh $ba=a^{-1}a=e$. Jadi satu persamaan $ab=e$ sudah cukup dalam grup, tetapi kesimpulan ini bergantung pada keberadaan invers dua sisi dari aksioma."},
    {prompt:"Dalam suatu grup $G$, buktikan bahwa $(abc)^{-1}=c^{-1}b^{-1}a^{-1}$ untuk setiap $a,b,c\\in G$, lalu jelaskan mengapa urutan faktor tidak boleh dibalik secara sembarang.",
      hint:"Terapkan dua kali teorema invers hasil kali, dengan $abc=(ab)c$.",
      answer:"Dengan asosiativitas, $abc=(ab)c$. Teorema invers hasil kali memberikan $((ab)c)^{-1}=c^{-1}(ab)^{-1}$. Terapkan teorema yang sama pada $(ab)^{-1}$ untuk memperoleh $c^{-1}b^{-1}a^{-1}$. Verifikasi langsung juga mungkin: $(abc)(c^{-1}b^{-1}a^{-1})=ab(cc^{-1})b^{-1}a^{-1}=a(bb^{-1})a^{-1}=e$, dan perkalian dalam urutan sebaliknya juga menghasilkan $e$. Rumus dengan urutan $a^{-1}b^{-1}c^{-1}$ umumnya gagal pada grup nonabelian karena penukaran faktor tidak dijamin."},
    {prompt:"Untuk setiap $n\\ge2$, tentukan solusi tunggal persamaan $[a]+[x]=[b]$ di $\\mathbb Z_n$ dan buktikan bahwa jawaban tidak bergantung pada wakil bilangan bulat yang dipilih.",
      hint:"Gunakan invers aditif $[-a]$ dan periksa perubahan wakil oleh kelipatan $n$.",
      answer:"Di grup aditif $\\mathbb Z_n$, invers $[a]$ adalah $[-a]$. Menambahkan $[-a]$ pada kedua ruas persamaan $[a]+[x]=[b]$ menghasilkan $[x]=[b-a]$. Substitusi memberi $[a]+[b-a]=[b]$, sehingga solusi ada. Hukum pembatalan membuktikan solusi tunggal. Jika wakil diganti $a'=a+kn$ dan $b'=b+\\ell n$, maka $b'-a'=(b-a)+(\\ell-k)n$, sehingga $[b'-a']=[b-a]$. Jadi solusi tidak bergantung pada pilihan wakil."},
    {prompt:"Buktikan bahwa $U(10)$ adalah grup perkalian dan hitung invers setiap kelas di dalamnya. Jelaskan mengapa kelas $[2]$ tidak termasuk grup tersebut.",
      hint:"Daftarkan wakil yang relatif prima dengan $10$; gunakan teorema grup unit dan perkalian modulo $10$.",
      answer:"Bilangan dalam $\\{0,1,\\ldots,9\\}$ yang relatif prima dengan $10$ adalah $1,3,7,9$, sehingga $U(10)=\\{[1],[3],[7],[9]\\}$. Berdasarkan teorema grup unit, himpunan ini tertutup terhadap perkalian modulo $10$, asosiatif, memiliki identitas $[1]$, dan setiap unsur memiliki invers. Secara eksplisit $[1]^{-1}=[1]$, $[3]^{-1}=[7]$ karena $3\\cdot7\\equiv1\\pmod{10}$, $[7]^{-1}=[3]$, dan $[9]^{-1}=[9]$ karena $81\\equiv1\\pmod{10}$. Kelas $[2]$ tidak termasuk karena $\\gcd(2,10)=2$, sehingga tidak mempunyai invers modulo $10$."},
    {prompt:"Diberikan grup $G$ dengan sifat $a^2=e$ untuk semua $a\\in G$. Buktikan bahwa setiap unsur sama dengan inversnya dan bahwa $G$ abelian; sebutkan satu contoh grup hingga yang memenuhi sifat tersebut.",
      hint:"Terapkan rumus invers hasil kali pada $ab$ dan gunakan asumsi juga untuk unsur $ab$.",
      answer:"Karena $a^2=aa=e$ untuk setiap $a\\in G$, unsur $a$ merupakan invers dua sisi dirinya sendiri. Ketunggalan invers memberi $a^{-1}=a$. Ambil sebarang $a,b\\in G$. Asumsi berlaku pula pada unsur $ab$, sehingga $(ab)^{-1}=ab$. Sementara itu teorema invers hasil kali memberi $(ab)^{-1}=b^{-1}a^{-1}=ba$. Maka $ab=ba$, jadi $G$ abelian. Contoh konkret adalah $U(8)=\\{[1],[3],[5],[7]\\}$, sebab kuadrat setiap wakil kongruen $1$ modulo $8$."},
    {prompt:"Pada grup matriks invertibel, selesaikan persamaan $AXB=C$ untuk matriks invertibel $A,B,C$. Buktikan keberadaan dan ketunggalan solusi tanpa menukar urutan perkalian.",
      hint:"Kalikan dari kiri dengan $A^{-1}$, lalu dari kanan dengan $B^{-1}$.",
      answer:"Diketahui $A,B,C$ matriks invertibel dengan ukuran sama. Dari $AXB=C$, kalikan dari kiri oleh $A^{-1}$: $A^{-1}(AXB)=A^{-1}C$. Asosiativitas menghasilkan $XB=A^{-1}C$. Selanjutnya kalikan dari kanan oleh $B^{-1}$ sehingga $X=A^{-1}CB^{-1}$. Substitusi memverifikasi $A(A^{-1}CB^{-1})B=(AA^{-1})C(B^{-1}B)=C$, jadi solusi ada. Jika $X_1$ dan $X_2$ memenuhi persamaan, pembatalan kiri oleh $A$ dan kanan oleh $B$ memberi $X_1=X_2$. Urutan $A^{-1}CB^{-1}$ penting karena perkalian matriks umumnya tidak komutatif."}
  ],
  mistakes:[],
  connections:[]
};
