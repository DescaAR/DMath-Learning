import type { BookLessonContent } from "@/data/book-content-types";

/** Original worked error-analysis lesson; Burden–Faires (2011), Higham (2002). */
export const absoluteRelativeErrorContent:BookLessonContent = {
  "intro": [
    "Galat aproksimasi tidak dapat dinilai hanya dari jumlah angka desimal. Kesalahan sebesar 0,01 mungkin sangat kecil ketika besaran acuan bernilai 1000, tetapi sangat besar ketika besaran acuan bernilai 0,001. Karena itu, penilaian akurasi harus memisahkan jarak numerik terhadap nilai acuan dari kesalahan yang dinormalisasi terhadap skala nilai acuan.",
    "Halaman ini membahas galat absolut dan relatif sebagai ukuran matematis terhadap nilai eksak, bukan sebagai sinonim residual persamaan atau galat pembulatan mesin. Perhitungan pertama-tama dilakukan dalam aritmetika real; ketika nilai acuan tidak diketahui, suatu batas yang telah dibuktikan harus dibedakan dari galat aktual yang tidak dapat dihitung.",
    "Urutan pembahasan bergerak dari definisi, pembatasan domain galat relatif, sertifikat interval, hingga propagasi galat pada pengurangan dan pembagian. Contoh pengurangan dua nilai berdekatan menunjukkan secara kuantitatif mengapa galat kecil pada setiap input dapat menghasilkan galat relatif besar pada hasil.",
    "Rujukan: Richard L. Burden dan J. Douglas Faires, Numerical Analysis, edisi ke-9 (2011), pembahasan error analysis; Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, edisi ke-2 (2002), pembahasan error bounds dan cancellation. Konvensi persentase dan syarat penyebut tidak nol dinyatakan secara eksplisit."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Galat Absolut",
      "statement": "Untuk nilai acuan eksak $p\\in\\mathbb R$ dan aproksimasi $\\widehat p\\in\\mathbb R$, galat absolut didefinisikan oleh $E_{\\mathrm{abs}}(p,\\widehat p)=|p-\\widehat p|$. Galat absolut selalu taknegatif dan sama dengan nol tepat ketika $\\widehat p=p$. Jika besaran mempunyai satuan, galat absolut mempunyai satuan yang sama.",
      "explanation": "Galat absolut mengukur jarak pada garis bilangan. Ukuran ini tetap terdefinisi ketika nilai acuan nol."
    },
    {
      "kind": "definition",
      "title": "Galat Relatif",
      "statement": "Untuk $p\\in\\mathbb R\\setminus\\{0\\}$ dan aproksimasi $\\widehat p\\in\\mathbb R$, galat relatif didefinisikan oleh $E_{\\mathrm{rel}}(p,\\widehat p)=\\dfrac{|p-\\widehat p|}{|p|}$. Definisi ini tidak berlaku untuk $p=0$; pada kasus tersebut galat absolut tetap dapat dilaporkan.",
      "explanation": "Penyebut adalah nilai acuan eksak, bukan nilai aproksimasi. Menggantinya tanpa penjelasan menghasilkan ukuran lain."
    },
    {
      "kind": "definition",
      "title": "Galat Persentase",
      "statement": "Jika $p\\ne0$, galat persentase adalah $E_{\\%}(p,\\widehat p)=100\\,E_{\\mathrm{rel}}(p,\\widehat p)\\%$. Jadi galat relatif $0{,}02$ berarti galat persentase $2\\%$, bukan $0{,}02\\%$.",
      "explanation": "Faktor 100 mengubah bilangan takberdimensi menjadi cara penyajian persentase; bukan pengukuran baru yang independen."
    },
    {
      "kind": "definition",
      "title": "Sertifikat Batas Galat",
      "statement": "Untuk aproksimasi $\\widehat p$ terhadap nilai eksak $p$, bilangan $\\varepsilon\\ge0$ disebut batas galat absolut yang sah jika $|p-\\widehat p|\\le\\varepsilon$. Hal ini ekuivalen dengan $p\\in[\\widehat p-\\varepsilon,\\widehat p+\\varepsilon]$. Batas galat bukan selalu nilai galat aktual.",
      "explanation": "Jika nilai eksak tidak diketahui, interval yang terbukti memuatnya dapat memberikan jaminan yang lebih berguna daripada banyaknya digit yang ditampilkan."
    },
    {
      "kind": "proposition",
      "title": "Ketaksamaan Galat Bertahap",
      "statement": "Untuk sebarang $p,a,b\\in\\mathbb R$, berlaku $|p-b|\\le |p-a|+|a-b|$. Jadi dua tahap aproksimasi dengan galat paling besar $\\varepsilon_1$ dan $\\varepsilon_2$ menghasilkan galat total paling besar $\\varepsilon_1+\\varepsilon_2$.",
      "proof": [
        "Diketahui $p,a,b\\in\\mathbb R$. Dibuktikan bahwa jarak dari $p$ ke $b$ dapat dibatasi oleh jumlah jarak melalui $a$. Tuliskan identitas aljabar $p-b=(p-a)+(a-b)$; identitas ini benar untuk semua bilangan real tanpa asumsi tanda.",
        "Dengan ketaksamaan segitiga pada nilai mutlak diperoleh $|p-b|=|(p-a)+(a-b)|\\le |p-a|+|a-b|$. Jika $|p-a|\\le\\varepsilon_1$ dan $|a-b|\\le\\varepsilon_2$, transitivitas ketaksamaan memberikan $|p-b|\\le\\varepsilon_1+\\varepsilon_2$.",
        "Ketaksamaan dapat ketat, misalnya $p=0$, $a=1$, $b=0$, karena galat kedua tahap saling meniadakan. Karena itu jumlah batas adalah jaminan, bukan identitas galat aktual. Dengan demikian pernyataan terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Pengaruh Perubahan Skala",
      "statement": "Misalkan $p,\\widehat p\\in\\mathbb R$ dan $c\\in\\mathbb R\\setminus\\{0\\}$. Maka $E_{\\mathrm{abs}}(cp,c\\widehat p)=|c|E_{\\mathrm{abs}}(p,\\widehat p)$. Jika $p\\ne0$, berlaku pula $E_{\\mathrm{rel}}(cp,c\\widehat p)=E_{\\mathrm{rel}}(p,\\widehat p)$.",
      "proof": [
        "Diketahui $c\\ne0$. Dari definisi galat absolut, $E_{\\mathrm{abs}}(cp,c\\widehat p)=|cp-c\\widehat p|=|c(p-\\widehat p)|$. Sifat multiplikatif nilai mutlak memberikan $|c|\\,|p-\\widehat p|$, yaitu identitas pertama.",
        "Untuk identitas kedua, hipotesis $p\\ne0$ dan $c\\ne0$ memastikan $cp\\ne0$, sehingga kedua galat relatif terdefinisi. Substitusi ke definisi menghasilkan $\\dfrac{|cp-c\\widehat p|}{|cp|}=\\dfrac{|c|\\,|p-\\widehat p|}{|c|\\,|p|}=\\dfrac{|p-\\widehat p|}{|p|}$.",
        "Faktor $|c|$ dapat dicoret karena positif. Artinya pengubahan meter menjadi sentimeter mengubah galat absolut dengan faktor 100, tetapi tidak mengubah galat relatif. Dengan demikian kedua identitas terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Karakterisasi Dua Arah Toleransi Relatif",
      "statement": "Untuk $p\\ne0$, $\\delta\\ge0$, dan $\\widehat p\\in\\mathbb R$, berlaku $E_{\\mathrm{rel}}(p,\\widehat p)\\le\\delta$ jika dan hanya jika $p-\\delta|p|\\le\\widehat p\\le p+\\delta|p|$.",
      "proof": [
        "Diketahui $p\\ne0$ dan $\\delta\\ge0$. Dibuktikan kedua implikasi. ($\\Rightarrow$) Andaikan $E_{\\mathrm{rel}}(p,\\widehat p)\\le\\delta$. Karena $|p|>0$, perkalian kedua ruas dengan $|p|$ menghasilkan $|p-\\widehat p|\\le\\delta|p|$.",
        "Menurut definisi nilai mutlak, $-\\delta|p|\\le p-\\widehat p\\le\\delta|p|$. Mengurangkan $p$ lalu mengalikan dengan $-1$ sambil membalik tanda ketaksamaan memberikan $p-\\delta|p|\\le\\widehat p\\le p+\\delta|p|$. Ini membuktikan arah pertama.",
        "($\\Leftarrow$) Andaikan $p-\\delta|p|\\le\\widehat p\\le p+\\delta|p|$. Pengurangan $p$ memberi $-\\delta|p|\\le\\widehat p-p\\le\\delta|p|$, sehingga $|\\widehat p-p|\\le\\delta|p|$. Pembagian dengan $|p|>0$ memberi $E_{\\mathrm{rel}}(p,\\widehat p)\\le\\delta$. Kedua arah telah terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Dari Batas Absolut ke Batas Relatif",
      "statement": "Misalkan $p,\\widehat p\\in\\mathbb R$, $m>0$, dan $\\varepsilon\\ge0$. Jika $|p|\\ge m$ serta $|p-\\widehat p|\\le\\varepsilon$, maka $p\\ne0$ dan $E_{\\mathrm{rel}}(p,\\widehat p)\\le\\varepsilon/m$.",
      "proof": [
        "Diketahui batas bawah $|p|\\ge m>0$ dan batas galat absolut $|p-\\widehat p|\\le\\varepsilon$. Karena $|p|$ positif, definisi galat relatif dapat digunakan tanpa membagi dengan nol.",
        "Dari $|p|\\ge m>0$ diperoleh $1/|p|\\le1/m$. Mengalikan ketaksamaan pertama dengan $1/|p|$ memberikan $\\dfrac{|p-\\widehat p|}{|p|}\\le\\dfrac{\\varepsilon}{|p|}\\le\\dfrac{\\varepsilon}{m}$. Setiap perkalian dilakukan dengan bilangan taknegatif.",
        "Batas bawah skala $m$ tidak boleh dihilangkan: untuk $p$ mendekati nol, galat absolut yang tetap dapat menghasilkan galat relatif sebesar apa pun. Dengan demikian batas relatif yang dinyatakan terbukti. $\\square$"
      ]
    },
    {
      "kind": "proposition",
      "title": "Batas Galat Pengurangan dan Pembatalan",
      "statement": "Untuk $a,b,\\widehat a,\\widehat b\\in\\mathbb R$, jika $|a-\\widehat a|\\le\\alpha$ dan $|b-\\widehat b|\\le\\beta$ dengan $\\alpha,\\beta\\ge0$, maka $|(a-b)-(\\widehat a-\\widehat b)|\\le\\alpha+\\beta$. Jika $a\\ne b$, galat relatif hasil pengurangan paling besar $(\\alpha+\\beta)/|a-b|$.",
      "proof": [
        "Diketahui dua batas galat input. Galat hasil pengurangan dapat ditulis persis sebagai $(a-b)-(\\widehat a-\\widehat b)=(a-\\widehat a)-(b-\\widehat b)$. Tidak ada galat tambahan yang diasumsikan dari operasi pengurangan itu sendiri; yang dinilai adalah pengaruh data input.",
        "Ketaksamaan segitiga memberi $|(a-\\widehat a)-(b-\\widehat b)|\\le|a-\\widehat a|+|b-\\widehat b|\\le\\alpha+\\beta$. Ini membuktikan batas absolut untuk semua $a,b$, termasuk ketika $a=b$.",
        "Jika $a\\ne b$, pembagian dengan $|a-b|>0$ menghasilkan batas relatif yang diklaim. Ketika $a$ dan $b$ hampir sama, penyebut kecil dapat memperbesar galat relatif meskipun $\\alpha,\\beta$ kecil. Jika $a=b$, galat relatif tidak didefinisikan. Dengan demikian kedua pernyataan terbukti. $\\square$"
      ]
    },
    {
      "kind": "theorem",
      "title": "Batas Galat Pembagian dengan Penyebut Terjaga",
      "statement": "Misalkan $a,b,\\widehat a,\\widehat b\\in\\mathbb R$, $b\\ne0$, $|a-\\widehat a|\\le\\alpha$, $|b-\\widehat b|\\le\\beta<|b|$, dengan $\\alpha,\\beta\\ge0$. Maka $\\widehat b\\ne0$ dan $\\left|\\frac{\\widehat a}{\\widehat b}-\\frac ab\\right|\\le\\frac{|b|\\alpha+|a|\\beta}{|b|(|b|-\\beta)}$.",
      "proof": [
        "Diketahui $|b-\\widehat b|\\le\\beta<|b|$. Dari ketaksamaan segitiga balik, $|\\widehat b|\\ge|b|-|b-\\widehat b|\\ge|b|-\\beta>0$. Jadi hasil bagi aproksimasi terdefinisi dan tidak ada pembagian dengan nol.",
        "Samakan penyebut secara eksak: $\\dfrac{\\widehat a}{\\widehat b}-\\dfrac ab=\\dfrac{b\\widehat a-a\\widehat b}{b\\widehat b}=\\dfrac{b(\\widehat a-a)+a(b-\\widehat b)}{b\\widehat b}$. Ini memisahkan kontribusi galat pembilang dan penyebut.",
        "Ambil nilai mutlak dan gunakan ketaksamaan segitiga: $|b(\\widehat a-a)+a(b-\\widehat b)|\\le|b|\\alpha+|a|\\beta$. Karena $|b\\widehat b|\\ge|b|(|b|-\\beta)>0$, pembagian menghasilkan batas yang dinyatakan. Hipotesis $\\beta<|b|$ penting agar penyebut aproksimasi tidak dapat nol. Dengan demikian teorema terbukti. $\\square$"
      ]
    }
  ],
  "examples": [
    {
      "title": "Galat Absolut Pecahan",
      "problem": "Nilai eksak $p=\\frac18$ didekati oleh $\\widehat p=0{,}12$. Tentukan galat absolut dalam bentuk pecahan dan desimal.",
      "solution": [
        "Diketahui $p=\\frac18=0{,}125$ dan $\\widehat p=0{,}12$. Ditentukan jarak eksak antara keduanya; karena keduanya bilangan rasional, tidak diperlukan pembulatan untuk menghitung galat.",
        "Menurut definisi, $E_{\\mathrm{abs}}=|\\frac18-\\frac{12}{100}|=|\\frac{25-24}{200}|=\\frac1{200}=0{,}005$. Nilai ini mempunyai satuan yang sama dengan besaran yang diukur.",
        "Verifikasi: $0{,}12+0{,}005=0{,}125$, tepat nilai acuan. Dengan demikian aproksimasi lebih kecil dari nilai eksak sebesar $0{,}005$, dan galat absolutnya $0{,}005$."
      ],
      "forDefinition": "Galat Absolut"
    },
    {
      "title": "Galat Relatif dan Nilai Acuan Nol",
      "problem": "Hitung galat relatif untuk $p=0{,}125$, $\\widehat p=0{,}12$, lalu periksa apakah rumus sama berlaku ketika $p=0$ dan $\\widehat p=0{,}003$.",
      "solution": [
        "Diketahui pasangan pertama mempunyai $p=\\frac18\\ne0$ dan galat absolut $\\frac1{200}$. Hipotesis definisi galat relatif terpenuhi karena penyebut $|p|$ positif.",
        "Diperoleh $E_{\\mathrm{rel}}=\\frac{1/200}{1/8}=\\frac8{200}=\\frac1{25}=0{,}04$. Perhitungan ini mengukur galat sebesar empat per seratus dari skala nilai eksak.",
        "Pada pasangan kedua, $p=0$ dan $\\widehat p=0{,}003$. Galat absolut tetap $|0-0{,}003|=0{,}003$, tetapi ekspresi $0{,}003/0$ tidak terdefinisi. Jadi tidak sah melaporkan galat relatif nol atau tak hingga sebagai hasil dari definisi tersebut."
      ],
      "forDefinition": "Galat Relatif"
    },
    {
      "title": "Mengonversi Galat Persentase",
      "problem": "Nilai eksak suatu panjang $40$ cm, sedangkan hasil komputasi $39{,}6$ cm. Nyatakan galat absolut, relatif, dan persentase.",
      "solution": [
        "Diketahui $p=40$ cm dan $\\widehat p=39{,}6$ cm. Selisihnya $|40-39{,}6|=0{,}4$ cm, sehingga galat absolut sebesar $0{,}4$ cm.",
        "Karena $p\\ne0$, galat relatif adalah $0{,}4/40=0{,}01$. Ukuran ini takberdimensi dan tidak berubah jika kedua panjang dikonversi ke meter.",
        "Galat persentase adalah $100(0{,}01)\\%=1\\%$. Verifikasi melalui satuan meter: $|0{,}4-0{,}396|/0{,}4=0{,}004/0{,}4=0{,}01$. Hasil konsisten pada kedua satuan."
      ],
      "forDefinition": "Galat Persentase"
    },
    {
      "title": "Sertifikat Interval untuk Nilai Tak Diketahui",
      "problem": "Diketahui suatu aproksimasi $\\widehat p=2{,}50$ disertai bukti $|p-\\widehat p|\\le0{,}03$. Tentukan semua nilai eksak yang masih mungkin.",
      "solution": [
        "Diketahui batas galat absolut $\\varepsilon=0{,}03$ dan pusat interval $2{,}50$. Yang ditentukan bukan galat aktual, melainkan himpunan nilai $p$ yang tidak bertentangan dengan sertifikat.",
        "Definisi batas galat memberi $-0{,}03\\le p-2{,}50\\le0{,}03$. Tambahkan $2{,}50$ pada setiap ruas sehingga $2{,}47\\le p\\le2{,}53$.",
        "Sebagai verifikasi, $p=2{,}47$ dan $p=2{,}53$ mencapai galat $0{,}03$, sedangkan $p=2{,}54$ melanggar batas. Karena nilai eksak belum diketahui, tidak boleh menyatakan galat aktual tepat $0{,}03$."
      ],
      "forDefinition": "Sertifikat Batas Galat"
    },
    {
      "title": "Perubahan Satuan dan Skala",
      "problem": "Nilai eksak $1{,}25$ meter didekati $1{,}24$ meter. Bandingkan galat dalam meter dan sentimeter.",
      "solution": [
        "Diketahui $p=1{,}25$ m dan $\\widehat p=1{,}24$ m. Galat absolut $0{,}01$ m dan galat relatif $0{,}01/1{,}25=0{,}008$.",
        "Konversi satuan menggunakan faktor $c=100$, sehingga nilai dalam sentimeter ialah $125$ cm dan $124$ cm. Galat absolut menjadi $|125-124|=1$ cm, tepat $100$ kali galat dalam meter.",
        "Galat relatif tetap $1/125=0{,}008$, setara $0{,}8\\%$. Hal ini memverifikasi proposisi perubahan skala: satuan memengaruhi nilai numerik galat absolut tetapi bukan galat relatif."
      ]
    },
    {
      "title": "Dua Tahap Aproksimasi",
      "problem": "Nilai eksak $p=10$ mula-mula didekati $a=10{,}2$, kemudian disimpan sebagai $b=10{,}1$. Hitung galat aktual dan batas bertahap.",
      "solution": [
        "Diketahui tiga nilai real $p=10$, $a=10{,}2$, dan $b=10{,}1$. Galat tahap pertama $|p-a|=0{,}2$, sedangkan perubahan tahap kedua $|a-b|=0{,}1$.",
        "Ketaksamaan segitiga memberikan jaminan $|p-b|\\le0{,}2+0{,}1=0{,}3$. Ini merupakan batas atas yang tetap benar meskipun arah kedua perubahan tidak diketahui.",
        "Karena nilai eksak tersedia, galat aktual dapat dihitung langsung: $|10-10{,}1|=0{,}1$. Batas $0{,}3$ tidak tajam di sini sebab perubahan tahap kedua sebagian membatalkan kesalahan pertama."
      ]
    },
    {
      "title": "Pembatalan pada Pengurangan",
      "problem": "Diketahui $a=12{,}3$, $b=12{,}2$, tetapi digunakan $\\widehat a=12{,}29$ dan $\\widehat b=12{,}21$. Bandingkan galat input dan hasil pengurangan.",
      "solution": [
        "Diketahui nilai eksak selisih $a-b=12{,}3-12{,}2=0{,}1$. Galat input pertama $|12{,}3-12{,}29|=0{,}01$ dan galat input kedua $|12{,}2-12{,}21|=0{,}01$.",
        "Hasil pengurangan input aproksimasi adalah $\\widehat a-\\widehat b=12{,}29-12{,}21=0{,}08$. Galat absolut hasil $|0{,}1-0{,}08|=0{,}02$, sama dengan batas $0{,}01+0{,}01$.",
        "Karena selisih eksak $0{,}1\\ne0$, galat relatif hasil adalah $0{,}02/0{,}1=0{,}2=20\\%$. Walaupun galat relatif tiap input kurang dari $0{,}1\\%$, pengurangan dua bilangan berdekatan memperbesar galat relatif hasil."
      ]
    },
    {
      "title": "Galat Pembagian dan Syarat Penyebut",
      "problem": "Untuk $a=2$, $b=4$, $\\widehat a=2{,}02$, dan $\\widehat b=3{,}96$, hitung galat hasil bagi dan bandingkan dengan teorema.",
      "solution": [
        "Diketahui $\\alpha=|2-2{,}02|=0{,}02$ dan $\\beta=|4-3{,}96|=0{,}04$. Syarat $\\beta<|b|$ terpenuhi karena $0{,}04<4$, sehingga $\\widehat b\\ne0$.",
        "Hasil bagi eksak $a/b=1/2$, sedangkan hasil aproksimasi $\\widehat a/\\widehat b=(202/100)/(396/100)=101/198$. Selisihnya $|101/198-1/2|=|101-99|/198=1/99$.",
        "Batas teorema adalah $(4(0{,}02)+2(0{,}04))/(4(4-0{,}04))=0{,}16/15{,}84=1/99$. Di sini batas tercapai persis karena galat pembilang dan penyebut memperbesar hasil bagi dalam arah yang sama."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "EA-01. Untuk $p=5/8$ dan $\\widehat p=0{,}63$, tentukan galat absolut, relatif, dan persentase secara eksak.",
      "hint": "Samakan penyebut kedua bilangan dan gunakan nilai acuan sebagai penyebut galat relatif.",
      "answer": "Diketahui $p=5/8=0{,}625$ dan $\\widehat p=0{,}63=63/100$. Ditentukan tiga ukuran galat. Galat absolut $|5/8-63/100|=|125/200-126/200|=1/200=0{,}005$. Karena $p\\ne0$, galat relatif $E_{\\mathrm{rel}}=(1/200)/(5/8)=8/1000=1/125=0{,}008$. Galat persentase $100(0{,}008)\\%=0{,}8\\%$. Verifikasi: $0{,}008(0{,}625)=0{,}005$ mengembalikan galat absolut. Dengan demikian pendekatan melebihi nilai eksak sebesar $0{,}005$ dengan kesalahan relatif $0{,}8\\%$.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-02. Untuk $p=-40$ dan $\\widehat p=-39{,}6$, hitung galat relatif. Jelaskan mengapa tanda nilai acuan tidak membuat galat negatif.",
      "hint": "Gunakan nilai mutlak baik pada pembilang maupun penyebut.",
      "answer": "Diketahui $p=-40\\ne0$ dan $\\widehat p=-39{,}6$. Galat absolut ialah $|-40-(-39{,}6)|=|-0{,}4|=0{,}4$. Menurut definisi, galat relatif $0{,}4/|-40|=0{,}4/40=0{,}01$ dan galat persentase $1\\%$. Penyebut bukan $-40$ karena ukuran kesalahan harus taknegatif. Verifikasi dengan pengalian skala $c=-1$: pasangan $(40,39{,}6)$ menghasilkan galat relatif yang sama, sesuai proposisi invariansi skala. Jadi tanda negatif pada nilai acuan tidak mengubah besarnya galat relatif.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-03. Diketahui $p=0$ dan $\\widehat p=0{,}003$. Tentukan galat absolut, lalu putuskan apakah galat relatif dapat dihitung menurut definisi.",
      "hint": "Periksa hipotesis p tidak sama dengan nol sebelum melakukan pembagian.",
      "answer": "Diketahui nilai eksak $p=0$ dan aproksimasi $\\widehat p=0{,}003$. Dari definisi galat absolut diperoleh $E_{\\mathrm{abs}}=|0-0{,}003|=0{,}003$. Untuk galat relatif, rumus $|p-\\widehat p|/|p|$ mensyaratkan $p\\ne0$. Karena syarat ini tidak terpenuhi, ekspresi $0{,}003/0$ tidak terdefinisi di bilangan real. Tidak tepat menggantinya dengan nol atau suatu persentase tertentu. Jika konteks memerlukan normalisasi, skala acuan eksternal yang positif harus dinyatakan terlebih dahulu dan ukuran baru tersebut tidak boleh disebut galat relatif menurut definisi halaman ini.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-04. Jika $|p-\\widehat p|\\le0{,}02$ dan $|p|\\ge4$, buktikan batas galat relatif dan persentasenya.",
      "hint": "Gunakan ketaksamaan kebalikan untuk bilangan positif.",
      "answer": "Diketahui $|p|\\ge4>0$ dan $|p-\\widehat p|\\le0{,}02$. Dibuktikan batas galat relatif. Hipotesis pertama memastikan $p\\ne0$, sehingga definisi galat relatif berlaku. Karena $1/|p|\\le1/4$, diperoleh $E_{\\mathrm{rel}}=|p-\\widehat p|/|p|\\le0{,}02/|p|\\le0{,}02/4=0{,}005$. Galat persentase paling besar $100(0{,}005)\\%=0{,}5\\%$. Batas ini dapat tercapai, misalnya $p=4$ dan $\\widehat p=4{,}02$, sehingga tidak dapat diperkecil tanpa informasi tambahan. Dengan demikian jaminan relatif $0{,}5\\%$ sah untuk semua pasangan yang memenuhi hipotesis.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-05. Untuk $a=12{,}3$, $b=12{,}2$, $\\widehat a=12{,}29$, $\\widehat b=12{,}21$, hitung galat pengurangan dan verifikasi batasnya.",
      "hint": "Pisahkan dua galat input sebelum menghitung selisih akhir.",
      "answer": "Diketahui $a-b=0{,}1$ dan $\\widehat a-\\widehat b=0{,}08$. Galat input pertama $|a-\\widehat a|=0{,}01$ dan kedua $|b-\\widehat b|=0{,}01$. Teorema pengurangan menjamin galat absolut hasil tidak melebihi $0{,}01+0{,}01=0{,}02$. Perhitungan langsung memberikan $|0{,}1-0{,}08|=0{,}02$, sehingga batas tercapai. Karena hasil eksak tidak nol, galat relatif hasil $0{,}02/0{,}1=0{,}2=20\\%$. Sebaliknya galat relatif input masing-masing hanya $0{,}01/12{,}3$ dan $0{,}01/12{,}2$, keduanya di bawah $0{,}1\\%$. Kesimpulannya pengurangan memperbesar kesalahan relatif karena hasil eksak kecil.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-06. Untuk $p=10$, $a=10{,}2$, dan $b=10{,}1$, buktikan batas galat bertahap dan bandingkan dengan galat aktual.",
      "hint": "Gunakan p-b=(p-a)+(a-b).",
      "answer": "Diketahui $p=10$, $a=10{,}2$, dan $b=10{,}1$. Dibuktikan bahwa $|p-b|\\le|p-a|+|a-b|$ pada data ini. Identitas $p-b=(p-a)+(a-b)$ dan ketaksamaan segitiga memberi batas umum tersebut. Nilai kedua suku adalah $|10-10{,}2|=0{,}2$ dan $|10{,}2-10{,}1|=0{,}1$, sehingga batas total $0{,}3$. Galat aktual terhadap hasil akhir ialah $|10-10{,}1|=0{,}1$, dan memang $0{,}1\\le0{,}3$. Selisih terjadi karena tahap kedua bergerak mendekati nilai eksak, bukan menjauhinya. Dengan demikian batas terbukti benar, tetapi tidak identik dengan galat aktual.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-07. Untuk $a=2$, $b=4$, $\\widehat a=2{,}02$, dan $\\widehat b=3{,}96$, verifikasi batas galat hasil bagi dan ketajamannya.",
      "hint": "Tulis semua bilangan sebagai pecahan rasional agar hasil eksak terlihat.",
      "answer": "Diketahui $b=4\\ne0$, $\\alpha=|2-2{,}02|=0{,}02$, dan $\\beta=|4-3{,}96|=0{,}04<4$. Jadi hipotesis teorema pembagian terpenuhi. Hasil eksak $a/b=1/2$ dan hasil aproksimasi $(2{,}02)/(3{,}96)=101/198$. Galat aktual $|101/198-1/2|=1/99$. Batas teorema adalah $(|b|\\alpha+|a|\\beta)/(|b|(|b|-\\beta))=(4(0{,}02)+2(0{,}04))/(4(3{,}96))=0{,}16/15{,}84=1/99$. Karena nilai aktual sama dengan batas, ketaksamaan tajam untuk data ini. Syarat $\\beta<|b|$ mencegah penyebut aproksimasi menjadi nol.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "EA-08. Untuk $p=-8$ dan $\\delta=0{,}025$, buktikan dua arah bahwa $E_{\\mathrm{rel}}(p,\\widehat p)\\le\\delta$ tepat ketika $\\widehat p\\in[-8{,}2,-7{,}8]$.",
      "hint": "Ubah ketaksamaan nilai mutlak menjadi interval dan buktikan arah balik.",
      "answer": "Diketahui $p=-8\\ne0$ dan $\\delta=0{,}025$. Dibuktikan ekuivalensi dua arah. ($\\Rightarrow$) Jika $E_{\\mathrm{rel}}=|-8-\\widehat p|/8\\le0{,}025$, kalikan dengan $8>0$ untuk memperoleh $|-8-\\widehat p|\\le0{,}2$. Ini ekuivalen dengan $-0{,}2\\le\\widehat p+8\\le0{,}2$, sehingga $-8{,}2\\le\\widehat p\\le-7{,}8$. ($\\Leftarrow$) Jika $\\widehat p$ berada pada interval tersebut, penambahan 8 menghasilkan $-0{,}2\\le\\widehat p+8\\le0{,}2$. Maka $|\\widehat p+8|\\le0{,}2$ dan pembagian dengan 8 memberi $E_{\\mathrm{rel}}\\le0{,}025$. Kedua arah sah; pada ujung interval galat relatif tepat $2{,}5\\%$.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
