import type { BookLessonContent } from "@/data/book-content-types";

/** Authored conditioning and stability: Higham (2002); Trefethen and Bau (1997). */
export const conditioningStabilityContent:BookLessonContent = {
  "intro": [
    "Kesalahan hasil numerik mempunyai dua sumber yang perlu dipisahkan. Data yang sedikit berubah dapat mengubah jawaban eksak secara besar karena masalahnya sensitif; secara terpisah, urutan operasi dan pembulatan algoritma dapat menambah galat yang sebenarnya dapat dihindari. Halaman ini menguji kedua penyebab tersebut dengan perhitungan yang dapat diverifikasi, bukan hanya label well-conditioned atau stable.",
    "Pada masalah skalar, sensitivitas dipelajari melalui turunan dan bilangan kondisi relatif lokal. Pada sistem linear, norma operator dan invers matriks mengendalikan bagaimana perturbasi ruas kanan, perubahan matriks, serta residual memengaruhi solusi. Contoh matriks diagonal memungkinkan setiap langkah dihitung tanpa perangkat lunak.",
    "Untuk contoh pembulatan, digunakan aritmetika desimal mainan dengan tiga angka signifikan, pembulatan ke bilangan terdekat, dan rentang eksponen cukup luas; overflow dan underflow tidak terjadi pada contoh yang dipilih. Angka yang tidak dapat direpresentasikan dibulatkan sebelum operasi, sedangkan hasil setiap operasi dibulatkan kembali. Model ini sengaja dibedakan dari standar mesin tertentu.",
    "Rujukan akademik: Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, edisi kedua (SIAM, 2002), khususnya bab 1 dan 7; Lloyd N. Trefethen dan David Bau III, Numerical Linear Algebra (SIAM, 1997), khususnya pembahasan conditioning dan backward stability. Pernyataan dan pembuktian di bawah menyebutkan norma, domain, dan hipotesis yang diperlukan."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Bilangan Kondisi Relatif Lokal",
      "statement": "Untuk fungsi $f:D\\subseteq\\mathbb R\\to\\mathbb R$ yang terdiferensialkan di $x\\ne0$ dengan $f(x)\\ne0$, bilangan kondisi relatif lokal didefinisikan sebagai $\\kappa_f(x)=\\left|\\frac{xf'(x)}{f(x)}\\right|$. Nilai ini mengukur penguatan relatif orde pertama ketika masukan mengalami perturbasi kecil.",
      "explanation": "Besaran $\\kappa_f(x)$ adalah sifat masalah pada titik $x$, bukan sifat kode yang menghitung $f(x)$. Rumus ini tidak digunakan di titik dengan $x=0$ atau $f(x)=0$ tanpa definisi kondisi lain yang sesuai."
    },
    {
      "kind": "definition",
      "title": "Galat Forward dan Backward",
      "statement": "Diberikan fungsi $f:D\\to\\mathbb R$, data $x\\in D$, dan keluaran komputasi $\\widehat y$. Galat forward absolut ialah $|\\widehat y-f(x)|$. Galat backward absolut ialah $\\inf\\{|\\widetilde x-x|:\\widetilde x\\in D,\\ f(\\widetilde x)=\\widehat y\\}$, dengan nilai $+\\infty$ jika himpunannya kosong. Galat relatif dibentuk dengan membagi oleh skala tidak nol yang dinyatakan.",
      "explanation": "Galat backward menilai apakah keluaran merupakan solusi eksak dari data yang dekat, sedangkan galat forward menilai kedekatan terhadap keluaran yang diminta. Kedua galat tidak harus kecil bersamaan pada masalah sensitif."
    },
    {
      "kind": "definition",
      "title": "Bilangan Kondisi Matriks dan Norma",
      "statement": "Untuk matriks invertibel $A\\in\\mathbb R^{n\\times n}$ dan norma vektor $\\|\\cdot\\|$ beserta norma operator terinduksi, bilangan kondisi didefinisikan sebagai $\\kappa(A)=\\|A\\|\\,\\|A^{-1}\\|$. Untuk norma takhingga, $\\|x\\|_\\infty=\\max_i|x_i|$ dan $\\|A\\|_\\infty=\\max_i\\sum_j|a_{ij}|$.",
      "explanation": "Bilangan kondisi mengukur sensitivitas penyelesaian $Ax=b$. Matriks singular tidak mempunyai invers dan tidak memperoleh bilangan kondisi hingga menurut definisi ini."
    },
    {
      "kind": "definition",
      "title": "Residual Sistem Linear",
      "statement": "Untuk sistem $Ax=b$ dan aproksimasi $\\widehat x$, residual didefinisikan oleh $r=b-A\\widehat x$. Jika $A$ invertibel, solusi eksak ialah $x=A^{-1}b$ dan galat solusi $e=x-\\widehat x$ memenuhi $Ae=r$.",
      "explanation": "Residual dapat dihitung tanpa mengetahui $x$, sedangkan galat forward membutuhkan solusi acuan. Residual kecil tidak menjamin galat kecil jika $A^{-1}$ mempunyai norma besar."
    },
    {
      "kind": "definition",
      "title": "Stabilitas Backward Komponen",
      "statement": "Dalam model pembulatan dengan unit roundoff $u$, algoritma untuk $f(a,b)$ disebut stabil backward per komponen jika hasilnya dapat dinyatakan sebagai $f(a+\\Delta a,b+\\Delta b)$ dengan $|\\Delta a|\\le C u|a|$ dan $|\\Delta b|\\le C u|b|$, untuk konstanta $C$ yang dinyatakan dan pada masukan yang memenuhi hipotesis model.",
      "explanation": "Stabilitas harus disertai batas galat dan model aritmetika. Pembulatan masukan sebelum algoritma dan sensitivitas masalah adalah persoalan terpisah."
    },
    {
      "kind": "proposition",
      "title": "Penguatan Relatif Orde Pertama",
      "statement": "Jika $f$ terdiferensialkan di $x\\ne0$ dan $f(x)\\ne0$, maka untuk $h\\to0$ berlaku $\\frac{f(x+h)-f(x)}{f(x)}=\\frac{xf'(x)}{f(x)}\\frac{h}{x}+o(|h|)$. Koefisien penguatan relatif lokal adalah $\\kappa_f(x)$.",
      "proof": [
        "Diketahui $f$ terdiferensialkan di $x$. Menurut definisi turunan, terdapat fungsi sisa $\\rho(h)$ dengan $\\rho(h)/|h|\\to0$ dan $f(x+h)=f(x)+f'(x)h+\\rho(h)$ untuk $h\\to0$.",
        "Kurangkan $f(x)$ dan bagi dengan $f(x)\\ne0$. Diperoleh $\\frac{f(x+h)-f(x)}{f(x)}=\\frac{f'(x)}{f(x)}h+\\frac{\\rho(h)}{f(x)}$. Karena $x\\ne0$, suku pertama sama dengan $\\frac{xf'(x)}{f(x)}\\frac{h}{x}$.",
        "Suku kedua merupakan $o(|h|)$ sebab pembagian dengan konstanta $f(x)\\ne0$ mempertahankan sifat limit tersebut. Nilai mutlak koefisien suku pertama tepat $\\kappa_f(x)$. Pernyataan ini hanya lokal; tidak memberikan batas untuk perubahan masukan yang besar. $\\square$"
      ],
      "explanation": "Contoh $f(x)=x^m$ pada $x\\ne0$ mempunyai kondisi $|m|$, sedangkan $f(x)=1/(1-x)$ menjadi sangat sensitif ketika $x$ mendekati $1$ dari kiri."
    },
    {
      "kind": "theorem",
      "title": "Batas Perturbasi Ruas Kanan Sistem Linear",
      "statement": "Misalkan $A\\in\\mathbb R^{n\\times n}$ invertibel, $b\\ne0$, $x=A^{-1}b$, dan $\\widetilde x=A^{-1}(b+\\Delta b)$. Untuk norma operator terinduksi berlaku $\\frac{\\|\\widetilde x-x\\|}{\\|x\\|}\\le\\kappa(A)\\frac{\\|\\Delta b\\|}{\\|b\\|}$.",
      "proof": [
        "Diketahui $Ax=b$ dan $A\\widetilde x=b+\\Delta b$. Pengurangan kedua persamaan menghasilkan $A(\\widetilde x-x)=\\Delta b$. Invertibilitas $A$ memberikan $\\widetilde x-x=A^{-1}\\Delta b$.",
        "Sifat submultiplikatif norma operator memberikan $\\|\\widetilde x-x\\|\\le\\|A^{-1}\\|\\,\\|\\Delta b\\|$. Di sisi lain, $b=Ax$ mengakibatkan $\\|b\\|\\le\\|A\\|\\,\\|x\\|$, sehingga $1/\\|x\\|\\le\\|A\\|/\\|b\\|$ karena $b\\ne0$ dan $x\\ne0$.",
        "Menggabungkan kedua batas menghasilkan $\\|\\widetilde x-x\\|/\\|x\\|\\le\\|A^{-1}\\|\\|A\\|\\|\\Delta b\\|/\\|b\\|=\\kappa(A)\\|\\Delta b\\|/\\|b\\|$. Semua penyebut sah karena $A$ invertibel dan $b\\ne0$. $\\square$"
      ],
      "explanation": "Batas atas ini tidak harus dicapai oleh setiap arah perturbasi; sensitivitas bergantung pada arah perubahan data."
    },
    {
      "kind": "proposition",
      "title": "Identitas Residual dan Batas Galat",
      "statement": "Untuk $A$ invertibel, $b\\ne0$, solusi $x=A^{-1}b$, aproksimasi $\\widehat x$, dan residual $r=b-A\\widehat x$, berlaku $x-\\widehat x=A^{-1}r$ serta $\\frac{\\|x-\\widehat x\\|}{\\|x\\|}\\le\\kappa(A)\\frac{\\|r\\|}{\\|b\\|}$.",
      "proof": [
        "Diketahui $Ax=b$ dan $r=b-A\\widehat x$. Substitusi $b=Ax$ memberi $r=A(x-\\widehat x)$. Karena $A$ invertibel, perkalian dengan $A^{-1}$ menghasilkan identitas eksak $x-\\widehat x=A^{-1}r$.",
        "Ambil norma pada kedua ruas. Diperoleh $\\|x-\\widehat x\\|\\le\\|A^{-1}\\|\\|r\\|$. Selain itu $\\|b\\|=\\|Ax\\|\\le\\|A\\|\\|x\\|$. Karena $b\\ne0$, berlaku $x\\ne0$ dan kedua pembagian relatif sah.",
        "Dengan mengalikan batas tersebut diperoleh $\\|x-\\widehat x\\|/\\|x\\|\\le\\|A^{-1}\\|\\|A\\|\\|r\\|/\\|b\\|$. Faktor $\\kappa(A)$ tidak dapat dihapus tanpa hipotesis tambahan tentang matriks. $\\square$"
      ],
      "explanation": "Menghitung residual adalah pemeriksaan yang berguna, tetapi pelaporan residual saja dapat menyesatkan pada sistem yang hampir singular."
    },
    {
      "kind": "theorem",
      "title": "Perturbasi Matriks dengan Jaminan Invertibilitas",
      "statement": "Misalkan $A$ invertibel, $\\Delta A$ matriks seukuran, $b\\ne0$, dan $\\eta=\\|A^{-1}\\|\\,\\|\\Delta A\\|<1$. Jika $Ax=b$ dan $(A+\\Delta A)\\widetilde x=b$, maka $A+\\Delta A$ invertibel dan $\\frac{\\|\\widetilde x-x\\|}{\\|x\\|}\\le\\frac{\\eta}{1-\\eta}\\le\\frac{\\kappa(A)\\varepsilon}{1-\\kappa(A)\\varepsilon}$ untuk $\\varepsilon=\\|\\Delta A\\|/\\|A\\|$ dengan $\\kappa(A)\\varepsilon<1$.",
      "proof": [
        "Tuliskan $E=A^{-1}\\Delta A$. Dari $\\|E\\|\\le\\|A^{-1}\\|\\|\\Delta A\\|=\\eta<1$, deret Neumann $\\sum_{k=0}^{\\infty}(-E)^k$ konvergen dalam norma operator dan merupakan invers $I+E$, karena hasil kali dengan jumlah parsial bernilai $I-(-E)^{N+1}$ yang menuju $I$. Identitas $A+\\Delta A=A(I+E)$ membuktikan invertibilitas matriks terperturbasi.",
        "Persamaan $(A+\\Delta A)\\widetilde x=Ax$ memberikan $(I+E)\\widetilde x=x$. Akibatnya $\\widetilde x-x=-(I+E)^{-1}Ex$. Norma invers dibatasi oleh deret geometri: $\\|(I+E)^{-1}\\|\\le\\sum_{k=0}^{\\infty}\\|E\\|^k\\le1/(1-\\eta)$.",
        "Dengan mengambil norma diperoleh $\\|\\widetilde x-x\\|\\le\\eta\\|x\\|/(1-\\eta)$. Karena $\\eta=\\|A^{-1}\\|\\|\\Delta A\\|=\\kappa(A)\\varepsilon$, bentuk kedua sebenarnya sama dengan bentuk pertama ketika $\\varepsilon$ didefinisikan seperti pada pernyataan. Syarat $\\eta<1$ penting; tanpa syarat ini matriks terperturbasi dapat menjadi singular. $\\square$"
      ],
      "explanation": "Jaminan ini membatasi galat ketika hanya matriks yang berubah dan ruas kanan tetap. Perturbasi simultan pada keduanya memerlukan analisis tambahan."
    },
    {
      "kind": "proposition",
      "title": "Penjumlahan Dibulatkan Benar Stabil Backward",
      "statement": "Misalkan $a,b$ dapat direpresentasikan tepat sebagai masukan dalam model floating-point, dan $\\widehat s=\\operatorname{fl}(a+b)$ dibulatkan ke bilangan terdekat tanpa overflow atau underflow. Jika hasil tidak nol dan pembulatan normal memenuhi $|\\operatorname{fl}(s)-s|\\le u|s|$, maka $\\widehat s=(a+\\Delta a)+(b+\\Delta b)$ dengan $|\\Delta a|\\le u|a|$ dan $|\\Delta b|\\le u|b|$. Kasus $a+b=0$ menghasilkan nol tepat.",
      "proof": [
        "Diketahui $s=a+b$. Untuk $s\\ne0$, hipotesis pembulatan memberi $\\widehat s=s(1+\\delta)$ dengan $\\delta=(\\widehat s-s)/s$ dan $|\\delta|\\le u$. Pilih $\\Delta a=\\delta a$ dan $\\Delta b=\\delta b$.",
        "Substitusi menunjukkan $(a+\\Delta a)+(b+\\Delta b)=(a+b)(1+\\delta)=\\widehat s$. Selain itu $|\\Delta a|=|\\delta||a|\\le u|a|$ dan $|\\Delta b|\\le u|b|$. Pilihan tersebut juga berlaku ketika salah satu masukan nol.",
        "Jika $a+b=0$, operasi eksak bernilai nol dan pembulatan nol menghasilkan nol, sehingga dapat dipilih $\\Delta a=\\Delta b=0$. Kedua kasus membuktikan stabilitas backward penjumlahan tunggal. Pernyataan tidak menjamin galat forward kecil apabila data telah dibulatkan sebelum penjumlahan. $\\square$"
      ],
      "explanation": "Pada penjumlahan dua bilangan yang hampir berlawanan, kondisi masalah dapat buruk walaupun operasi tunggal dibulatkan dengan benar."
    },
    {
      "kind": "proposition",
      "title": "Rumus Akar yang Ekuivalen Dapat Berbeda Ketelitiannya",
      "statement": "Pada model desimal tiga angka signifikan dengan pembulatan terdekat, untuk $x=100$ dua rumus eksak $g(x)=\\sqrt{x^2+1}-x=1/(\\sqrt{x^2+1}+x)$ dapat menghasilkan masing-masing $0$ dan $0{,}00500$ jika setiap operasi dibulatkan. Nilai eksak $g(100)$ positif.",
      "proof": [
        "Diketahui $x=100$ tepat terwakili. Dalam model tiga angka signifikan, $x^2=10000$ terwakili dan penjumlahan $10000+1=10001$ dibulatkan menjadi $10000$. Akar kuadrat dari bilangan tersimpan itu adalah $100$ tepat. Evaluasi bentuk pertama kemudian menghasilkan $100-100=0$.",
        "Untuk bentuk rasionalisasi, penyebut terhitung $100+100=200$, sehingga pembagian memberikan $1/200=0{,}00500$ yang dapat direpresentasikan tepat dengan tiga angka signifikan. Identitas aljabar eksak diperoleh dari perkalian sekawan: $(\\sqrt{x^2+1}-x)(\\sqrt{x^2+1}+x)=1$.",
        "Nilai eksak $g(100)=1/(\\sqrt{10001}+100)$ terletak antara $1/201$ dan $1/200$ karena $100<\\sqrt{10001}<101$. Dengan demikian keluaran nol pada bentuk pertama mempunyai galat relatif $100\\%$, sedangkan bentuk rasionalisasi memberikan aproksimasi dekat. Perbedaan ini berasal dari pembatalan digit dalam urutan operasi, bukan dari perbedaan fungsi matematika. $\\square$"
      ],
      "explanation": "Rumus rasionalisasi tidak memperbaiki seluruh masalah numerik, tetapi pada masukan ini menghindari pengurangan dua angka yang hampir sama."
    },
    {
      "kind": "proposition",
      "title": "Residual Kecil Tidak Menjamin Galat Forward Kecil",
      "statement": "Untuk setiap $0<\\varepsilon<1$, terdapat sistem invertibel $Ax=b$ dan aproksimasi $\\widehat x$ dengan residual relatif kurang dari $\\varepsilon$, tetapi galat forward relatif tetap $1/\\sqrt2$. Salah satu konstruksi ialah $A=\\operatorname{diag}(1,\\varepsilon)$, $b=(1,\\varepsilon)^T$, $x=(1,1)^T$, dan $\\widehat x=(1,0)^T$ dengan norma Euclidean.",
      "proof": [
        "Diketahui $0<\\varepsilon<1$. Matriks $A$ invertibel karena determinannya $\\varepsilon\\ne0$. Perkalian langsung memberikan $Ax=(1,\\varepsilon)^T=b$, sehingga $x$ adalah solusi eksak yang unik.",
        "Untuk $\\widehat x=(1,0)^T$ diperoleh $A\\widehat x=(1,0)^T$ dan residual $r=b-A\\widehat x=(0,\\varepsilon)^T$. Karena $\\|b\\|_2=\\sqrt{1+\\varepsilon^2}$, residual relatif adalah $\\varepsilon/\\sqrt{1+\\varepsilon^2}<\\varepsilon$.",
        "Galat forward ialah $x-\\widehat x=(0,1)^T$, dengan $\\|x-\\widehat x\\|_2/\\|x\\|_2=1/\\sqrt2$ yang tidak mengecil ketika $\\varepsilon\\to0$. Bilangan kondisi matriks ini $\\kappa_2(A)=1/\\varepsilon$, sehingga batas residual mengizinkan penguatan besar. $\\square$"
      ],
      "explanation": "Contoh ini menunjukkan kegagalan inferensi dari residual ke galat tanpa informasi kondisi matriks."
    }
  ],
  "examples": [
    {
      "title": "CS-01 — Sensitivitas Pangkat",
      "forDefinition": "Bilangan Kondisi Relatif Lokal",
      "problem": "Untuk $f(x)=x^2$ pada $x=2$, hitung bilangan kondisi dan galat relatif jika masukan berubah menjadi $2{,}02$.",
      "solution": [
        "Diketahui $f'(x)=2x$, $x=2$, dan $f(2)=4\\ne0$. Definisi kondisi lokal memberi $\\kappa_f(2)=|2(4)/4|=2$. Karena $x\\ne0$, rumus relatif dapat digunakan.",
        "Perturbasi masukan adalah $h=0{,}02$, dengan galat relatif $|h|/|x|=0{,}01$. Nilai keluaran terperturbasi $f(2{,}02)=4{,}0804$, sehingga galat relatif keluaran tepat $0{,}0804/4=0{,}0201$.",
        "Pendekatan orde pertama menghasilkan $\\kappa_f(2)\\cdot0{,}01=0{,}02$. Selisih $0{,}0001$ merupakan kontribusi suku kuadrat $h^2/4$."
      ],
      "conclusion": "Perturbasi masukan 1% menghasilkan perubahan keluaran 2,01%; kondisi 2 menggambarkan faktor orde pertamanya."
    },
    {
      "title": "CS-02 — Galat Forward dan Backward Kuadrat",
      "forDefinition": "Galat Forward dan Backward",
      "problem": "Algoritma untuk $f(x)=x^2$ pada $x=2$ mengembalikan $\\widehat y=4{,}41$. Tentukan galat forward dan backward terkecil pada domain $x\\ge0$.",
      "solution": [
        "Diketahui keluaran eksak $f(2)=4$. Galat forward absolut ialah $|4{,}41-4|=0{,}41$, sedangkan galat forward relatif terhadap keluaran eksak ialah $0{,}41/4=0{,}1025$.",
        "Untuk galat backward, cari $\\widetilde x\\ge0$ yang memenuhi $\\widetilde x^2=4{,}41$. Karena domain nonnegatif, satu-satunya pilihan ialah $\\widetilde x=2{,}1$, bukan $-2{,}1$.",
        "Galat backward absolut adalah $|2{,}1-2|=0{,}1$, dan relatif terhadap $x=2$ adalah $0{,}05$. Keberadaan satu-satunya prakitra pada domain ini menjamin infimum tercapai."
      ],
      "conclusion": "Galat forward 10,25% dan backward 5% mengukur dua pertanyaan yang berbeda."
    },
    {
      "title": "CS-03 — Kondisi Matriks Diagonal",
      "forDefinition": "Bilangan Kondisi Matriks dan Norma",
      "problem": "Untuk $A=\\operatorname{diag}(1,0{,}01)$, hitung $\\kappa_\\infty(A)$ dan jelaskan arah data yang paling sensitif.",
      "solution": [
        "Diketahui $A$ diagonal dengan entri tidak nol, sehingga $A^{-1}=\\operatorname{diag}(1,100)$. Norma takhingga matriks adalah maksimum jumlah nilai mutlak pada setiap baris.",
        "Jumlah baris $A$ ialah $1$ dan $0{,}01$, sehingga $\\|A\\|_\\infty=1$. Jumlah baris $A^{-1}$ ialah $1$ dan $100$, sehingga $\\|A^{-1}\\|_\\infty=100$.",
        "Bilangan kondisi $\\kappa_\\infty(A)=1\\cdot100=100$. Perubahan pada komponen kedua ruas kanan diperbesar 100 kali dalam solusi absolut karena pembagian oleh $0{,}01$."
      ],
      "conclusion": "Matriks invertibel dapat tetap sangat sensitif terhadap perturbasi data."
    },
    {
      "title": "CS-04 — Residual Tidak Sama dengan Galat",
      "forDefinition": "Residual Sistem Linear",
      "problem": "Diberikan $A=\\operatorname{diag}(1,0{,}01)$, $b=(1,1)^T$, dan $\\widehat x=(1,99)^T$. Hitung residual dan galat eksak.",
      "solution": [
        "Solusi eksak $Ax=b$ adalah $x=(1,100)^T$. Hasil kali $A\\widehat x=(1,0{,}99)^T$, sehingga residual $r=b-A\\widehat x=(0,0{,}01)^T$.",
        "Galat forward $x-\\widehat x=(0,1)^T$. Norma takhingga residual adalah $0{,}01$, tetapi norma takhingga galat adalah $1$, yaitu 100 kali lebih besar.",
        "Verifikasi identitas $A^{-1}r=\\operatorname{diag}(1,100)(0,0{,}01)^T=(0,1)^T$ menunjukkan sumber penguatan. Residual kecil tidak berarti solusi tepat pada komponen sensitif."
      ],
      "conclusion": "Residual dan galat berbeda secara numerik karena matriks invers memperbesar komponen kedua."
    },
    {
      "title": "CS-05 — Stabilitas Penjumlahan Tunggal",
      "forDefinition": "Stabilitas Backward Komponen",
      "problem": "Dalam aritmetika desimal tiga angka signifikan dengan $u=0{,}005$, hitung $\\operatorname{fl}(1{,}23+0{,}00456)$ dan representasi backward-nya.",
      "solution": [
        "Kedua masukan memiliki tiga angka signifikan sehingga dapat disimpan tepat. Jumlah realnya $s=1{,}23456$, yang dibulatkan ke bilangan terdekat $1{,}23$ pada model ini.",
        "Pilih $\\delta=(1{,}23-1{,}23456)/1{,}23456=-0{,}00456/1{,}23456$. Besarnya sekitar $0{,}003693$, lebih kecil dari $u=0{,}005$.",
        "Dengan $\\Delta a=\\delta(1{,}23)$ dan $\\Delta b=\\delta(0{,}00456)$, jumlah data terperturbasi tepat $(1{,}23+0{,}00456)(1+\\delta)=1{,}23$. Setiap perturbasi relatif dibatasi oleh $u$."
      ],
      "conclusion": "Satu operasi penjumlahan yang dibulatkan benar stabil backward pada model tanpa underflow atau overflow."
    },
    {
      "title": "CS-06 — Pembatalan karena Pembulatan Masukan",
      "problem": "Dalam aritmetika desimal tiga angka signifikan, bandingkan $a-b$ untuk $a=1{,}234$ dan $b=1{,}233$ dengan hasil setelah kedua masukan dibulatkan.",
      "solution": [
        "Selisih real dari data eksak ialah $a-b=0{,}001$. Kedua data memiliki empat angka signifikan, sehingga sebelum operasi masing-masing harus dibulatkan ke tiga angka signifikan.",
        "Pembulatan terdekat memberi $\\operatorname{fl}(1{,}234)=1{,}23$ dan $\\operatorname{fl}(1{,}233)=1{,}23$. Pengurangan bilangan tersimpan menghasilkan $1{,}23-1{,}23=0$.",
        "Galat absolut keluaran terhadap selisih data asli adalah $0{,}001$, dan galat relatifnya $1$. Hilangnya selisih terjadi karena pembulatan masukan, bukan karena pengurangan dua bilangan tersimpan yang tidak tepat."
      ],
      "conclusion": "Membedakan galat representasi masukan dari galat operasi mencegah diagnosis stabilitas yang keliru."
    },
    {
      "title": "CS-07 — Rasionalisasi Mencegah Pembatalan",
      "problem": "Bandingkan evaluasi $\\sqrt{x^2+1}-x$ dan $1/(\\sqrt{x^2+1}+x)$ pada $x=100$ dengan tiga angka signifikan.",
      "solution": [
        "Diketahui $x^2+1=10001$ secara eksak. Setelah dibulatkan ke tiga angka signifikan, hasilnya $10000$; akar kuadrat yang tersimpan adalah $100$.",
        "Bentuk pertama memberikan $100-100=0$. Bentuk rasionalisasi menggunakan penyebut $100+100=200$ dan menghasilkan $1/200=0{,}00500$.",
        "Nilai eksak ialah $1/(\\sqrt{10001}+100)\\approx0{,}004999875006$. Galat relatif bentuk pertama 100%, sedangkan bentuk kedua sekitar $0{,}000025$ atau $0{,}0025\\%$."
      ],
      "conclusion": "Rasionalisasi menghindari pengurangan dua angka besar yang hampir sama pada perhitungan ini."
    },
    {
      "title": "CS-08 — Perturbasi Matriks Terukur",
      "problem": "Untuk $A=\\operatorname{diag}(1,0{,}1)$, $\\Delta A=\\operatorname{diag}(0,0{,}01)$, dan $b=(1,0{,}1)^T$, hitung solusi dan periksa batas perturbasi matriks dalam norma takhingga.",
      "solution": [
        "Solusi awal $Ax=b$ adalah $x=(1,1)^T$. Matriks baru $\\widetilde A=\\operatorname{diag}(1,0{,}11)$ memberi $\\widetilde x=(1,10/11)^T$.",
        "Norma takhingga $A$ ialah $1$, norma $A^{-1}$ ialah $10$, dan $\\|\\Delta A\\|_\\infty=0{,}01$. Karena $\\eta=10(0{,}01)=0{,}1<1$, teorema perturbasi berlaku.",
        "Galat relatif aktual $\\|\\widetilde x-x\\|_\\infty/\\|x\\|_\\infty=1/11\\approx0{,}09091$, sedangkan batas teorema $\\eta/(1-\\eta)=1/9\\approx0{,}11111$. Ketaksamaan $1/11<1/9$ terverifikasi."
      ],
      "conclusion": "Batas perturbasi menjamin galat tidak melebihi 11,11% pada contoh ini."
    }
  ],
  "exercises": [
    {
      "prompt": "CS-01. Untuk $f(x)=x^3$ di $x=2$, tentukan $\\kappa_f(2)$ dan perubahan relatif eksak keluaran ketika $x$ berubah menjadi $2{,}02$.",
      "hint": "Gunakan $f'(x)=3x^2$ dan perluas $(2+0{,}02)^3$.",
      "answer": "Diketahui $f(x)=x^3$, $x=2$, dan $\\Delta x=0{,}02$. Karena $f'(x)=3x^2$, bilangan kondisi relatif lokal ialah $\\kappa_f(2)=|2\\cdot12/8|=3$. Galat relatif masukan adalah $0{,}02/2=0{,}01$. Hitung nilai eksak $f(2{,}02)=2{,}02^3=8{,}242408$, sedangkan $f(2)=8$. Perubahan relatif keluaran adalah $(8{,}242408-8)/8=0{,}030301$, yaitu $3{,}0301\\%$. Pendekatan orde pertama memberi $3\\cdot1\\%=3\\%$; perbedaan $0{,}0301$ poin persentase berasal dari suku orde lebih tinggi. Hipotesis $x\\ne0$ dan $f(x)\\ne0$ terpenuhi, sehingga penggunaan kondisi relatif sah.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-02. Untuk $f(x)=x^2$ pada domain $[0,\\infty)$, $x=3$, dan keluaran $\\widehat y=9{,}61$, hitung galat forward serta backward absolut dan relatif.",
      "hint": "Cari prakitra nonnegatif dari $9{,}61$ sebelum menghitung galat backward.",
      "answer": "Diketahui $f(3)=9$ dan $\\widehat y=9{,}61$. Galat forward absolut adalah $|9{,}61-9|=0{,}61$, sedangkan relatif terhadap nilai keluaran eksak adalah $0{,}61/9\\approx0{,}06778$. Untuk galat backward, selesaikan $\\widetilde x^2=9{,}61$ dengan $\\widetilde x\\ge0$. Akar yang sah adalah $\\widetilde x=3{,}1$; akar negatif tidak berada dalam domain. Galat backward absolut ialah $|3{,}1-3|=0{,}1$, dan relatif terhadap data $x=3$ ialah $0{,}1/3=1/30\\approx0{,}03333$. Verifikasi $3{,}1^2=9{,}61$ memastikan hasil algoritma merupakan keluaran eksak bagi data terperturbasi tersebut.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-03. Untuk $A=\\operatorname{diag}(1,0{,}01)$, $b=(1,1)^T$, dan $\\widehat x=(1,99)^T$, tentukan residual, galat, dan batas galat relatif dari teorema residual.",
      "hint": "Gunakan norma takhingga dan solusi eksak dari matriks diagonal.",
      "answer": "Matriks $A$ invertibel dan solusi eksaknya $x=(1,100)^T$. Residual ialah $r=b-A\\widehat x=(1,1)^T-(1,0{,}99)^T=(0,0{,}01)^T$. Galat forward $x-\\widehat x=(0,1)^T$, sehingga galat relatif dalam norma takhingga ialah $1/100=0{,}01$. Karena $\\|A\\|_\\infty=1$, $\\|A^{-1}\\|_\\infty=100$, dan $\\|b\\|_\\infty=1$, batas teorema memberi $\\|x-\\widehat x\\|_\\infty/\\|x\\|_\\infty\\le100(0{,}01)/1=1$. Batas ini benar tetapi longgar; verifikasi langsung $A^{-1}r=(0,1)^T$ menjelaskan galat sebenarnya. Tidak boleh menyamakan residual relatif $0{,}01$ dengan galat relatif solusi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-04. Untuk $A=\\operatorname{diag}(2,0{,}5)$, $b=(2,1)^T$, dan $\\Delta b=(0,0{,}1)^T$, hitung perubahan relatif solusi dan periksa batas perturbasi ruas kanan.",
      "hint": "Hitung $x=A^{-1}b$ dan $\\widetilde x=A^{-1}(b+\\Delta b)$.",
      "answer": "Diketahui $A^{-1}=\\operatorname{diag}(0{,}5,2)$, sehingga solusi awal $x=(1,2)^T$. Ruas kanan terperturbasi $(2,1{,}1)^T$ menghasilkan $\\widetilde x=(1,2{,}2)^T$. Norma takhingga perubahan solusi ialah $0{,}2$, dan $\\|x\\|_\\infty=2$, sehingga galat relatif $0{,}1$. Di sisi data, $\\|\\Delta b\\|_\\infty/\\|b\\|_\\infty=0{,}1/2=0{,}05$. Nilai $\\|A\\|_\\infty=2$ dan $\\|A^{-1}\\|_\\infty=2$ memberi $\\kappa_\\infty(A)=4$. Batas teorema $4(0{,}05)=0{,}2$ lebih besar dari galat aktual $0{,}1$. Semua asumsi invertibilitas dan ruas kanan tidak nol dipenuhi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-05. Untuk $A=\\operatorname{diag}(1,0{,}1)$, $\\Delta A=\\operatorname{diag}(0,0{,}01)$, dan $b=(1,0{,}1)^T$, buktikan syarat teorema perturbasi dan bandingkan galat dengan batasnya.",
      "hint": "Periksa $\\eta=\\|A^{-1}\\|_\\infty\\|\\Delta A\\|_\\infty<1$.",
      "answer": "Diketahui $\\|A^{-1}\\|_\\infty=10$ dan $\\|\\Delta A\\|_\\infty=0{,}01$, sehingga $\\eta=0{,}1<1$. Oleh karena itu $A+\\Delta A$ dijamin invertibel. Solusi awal ialah $x=(1,1)^T$, sedangkan solusi setelah perubahan matriks adalah $\\widetilde x=(1,10/11)^T$. Selisih pada komponen kedua bernilai $1/11$, dan $\\|x\\|_\\infty=1$, sehingga galat relatif tepat $1/11$. Teorema memberikan batas $\\eta/(1-\\eta)=(1/10)/(9/10)=1/9$. Karena $1/11<1/9$, hasil memenuhi batas. Perhitungan ini sekaligus menunjukkan bahwa batas perturbasi bukan persamaan yang selalu dicapai.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-06. Pada model tiga angka signifikan, bandingkan selisih eksak $1{,}234-1{,}233$ dengan hasil setelah kedua masukan dibulatkan. Identifikasi sumber galat.",
      "hint": "Pembulatan masukan terjadi sebelum operasi pengurangan.",
      "answer": "Selisih real data asli ialah $1{,}234-1{,}233=0{,}001$. Karena tiap bilangan mempunyai empat angka signifikan, pembulatan ke tiga angka signifikan memberi $1{,}23$ untuk keduanya. Selisih bilangan yang telah disimpan ialah $1{,}23-1{,}23=0$, dan operasi pengurangan tersebut sendiri tepat. Galat absolut terhadap data asli adalah $|0-0{,}001|=0{,}001$; galat relatif terhadap selisih eksak adalah $0{,}001/0{,}001=1$, yaitu 100%. Kesalahan utama timbul ketika data yang hampir sama dibulatkan ke representasi identik, bukan karena operasi pengurangan bilangan tersimpan melanggar aturan pembulatan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-07. Pada model desimal tiga angka signifikan, evaluasi $\\sqrt{100^2+1}-100$ secara langsung dan melalui bentuk rasionalisasi. Periksa hasil terhadap nilai eksak.",
      "hint": "Gunakan identitas $\\sqrt{x^2+1}-x=1/(\\sqrt{x^2+1}+x)$ untuk $x>0$.",
      "answer": "Nilai real $100^2+1=10001$ dibulatkan menjadi $10000$ pada tiga angka signifikan. Akar kuadrat bilangan tersimpan adalah $100$. Bentuk langsung memberi $100-100=0$, padahal nilai eksak positif. Bentuk rasionalisasi menghitung $1/(100+100)=1/200=0{,}00500$. Nilai eksak $1/(\\sqrt{10001}+100)\\approx0{,}004999875006$, sehingga galat absolut bentuk rasionalisasi sekitar $1{,}24994\\cdot10^{-7}$ dan galat relatif sekitar $2{,}5\\cdot10^{-5}$. Hasil nol memiliki galat relatif 1. Perbedaan ini membuktikan pentingnya susunan operasi, bukan sekadar kesetaraan aljabar.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "CS-08. Untuk $p(x)=(x-1)^2$ dan $x=1{,}01$, evaluasi $p(x)$ dengan tiga angka signifikan melalui bentuk terfaktorkan dan bentuk $x^2-2x+1$. Jelaskan hasilnya.",
      "hint": "Bulatkan setiap operasi ke tiga angka signifikan, bukan hanya hasil akhir.",
      "answer": "Diketahui $x=1{,}01$ dapat direpresentasikan tepat. Bentuk terfaktorkan menghitung $x-1=0{,}0100$, kemudian $(0{,}0100)^2=0{,}000100$; hasil ini sama dengan nilai eksak $p(1{,}01)=0{,}0001$. Pada bentuk yang dikembangkan, $x^2=1{,}0201$ dibulatkan menjadi $1{,}02$, sedangkan $2x=2{,}02$ tepat. Pengurangan memberi $1{,}02-2{,}02=-1{,}00$, lalu penambahan 1 menghasilkan nol. Galat relatif hasil kedua adalah $|0-0{,}0001|/0{,}0001=1$, sedangkan bentuk terfaktorkan tidak memiliki galat pada model ini. Kedua polinom identik secara eksak, tetapi urutan operasi pada bentuk dikembangkan menghapus digit penting melalui pembatalan.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
