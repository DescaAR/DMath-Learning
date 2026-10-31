import type { BookLessonContent } from "@/data/book-content-types";

/** Moving average forecasting: exact proofs, leakage-free evaluation, original worked solutions. */
export const movingAverageForecastContent:BookLessonContent={
  "intro": [
    "Peramalan rata-rata bergerak diperlukan ketika keputusan pengadaan barang untuk periode berikutnya harus dibuat sebelum permintaan berikutnya diketahui. Pada akhir periode $t$, hanya $y_1,\\ldots,y_t$ yang boleh digunakan untuk memperkirakan $y_{t+1}$. Menggunakan $y_{t+1}$ di dalam ramalan periode itu sendiri merupakan kebocoran data yang membuat evaluasi tampak terlalu baik.",
    "Panjang jendela $m$ menentukan jumlah observasi historis yang dirata-ratakan. Jendela panjang cenderung meredam gangguan acak, tetapi dapat tertinggal saat permintaan meningkat atau menurun secara sistematis. Halaman ini memisahkan ramalan satu langkah, pembaruan jendela, rata-rata berbobot, evaluasi bergulir, tren linear, dan varians prediksi di bawah asumsi probabilistik eksplisit.",
    "Sebagai kasus acuan, permintaan tiga periode terakhir adalah 12, 14, dan 16 unit. Ramalan SMA tiga periode untuk periode berikutnya adalah 14 unit. Jika pola tersebut merupakan tren linear naik 2 unit per periode, permintaan menurut pola pada periode berikutnya justru 18 unit: selisih 4 unit harus dijelaskan, bukan disembunyikan oleh angka rata-rata.",
    "Rujukan: Rob J. Hyndman dan George Athanasopoulos, Forecasting: Principles and Practice, edisi ke-3 (OTexts, 2021); John E. Hanke dan Dean W. Wichern, Business Forecasting, edisi ke-9 (Pearson, 2009). Pembuktian dan latihan numerik di halaman ini disusun secara mandiri."
  ],
  "formal": [
    {
      "kind": "definition",
      "title": "Deret Waktu dan Ramalan Satu Langkah",
      "statement": "Deret waktu teramati adalah $y_1,\\ldots,y_t$. Ramalan satu langkah $\\widehat y_{t+1\\mid t}$ merupakan nilai yang dihitung hanya dari informasi sampai akhir periode $t$ untuk memperkirakan nilai yang belum teramati $y_{t+1}$.",
      "explanation": "Misalnya, pada akhir periode 4 dengan data $(4,7,6,9)$, ramalan periode 5 boleh memakai empat nilai itu, tetapi tidak boleh memakai $y_5$."
    },
    {
      "kind": "definition",
      "title": "Rata-Rata Bergerak Sederhana",
      "statement": "Untuk $m\\in\\mathbb N$, $m\\ge1$, dan $t\\ge m$, rata-rata bergerak sederhana didefinisikan oleh $\\widehat y_{t+1\\mid t}^{(m)}=\\frac1m\\sum_{j=0}^{m-1}y_{t-j}$. Tepat $m$ observasi terakhir digunakan, masing-masing dengan bobot $1/m$.",
      "explanation": "Jika tiga observasi terakhir adalah $(12,14,16)$, ramalan berikutnya adalah $(12+14+16)/3=14$."
    },
    {
      "kind": "definition",
      "title": "Rata-Rata Bergerak Berbobot",
      "statement": "Untuk $m\\ge1$ dan bobot $w_j\\ge0$ dengan $\\sum_{j=0}^{m-1}w_j=1$, ramalan berbobot adalah $\\widehat y_{t+1\\mid t}^{(w)}=\\sum_{j=0}^{m-1}w_jy_{t-j}$. Bobot $w_0$ melekat pada observasi terbaru $y_t$.",
      "explanation": "Bobot terbaru ke terlama $(1/2,3/10,1/5)$ dan data $(16,14,12)$ memberi ramalan $8+4.2+2.4=14.6$."
    },
    {
      "kind": "definition",
      "title": "Galat dan Evaluasi Bergulir",
      "statement": "Untuk $s\\ge m+1$, galat ramalan satu langkah ialah $e_s=y_s-\\widehat y_{s\\mid s-1}^{(m)}$. Untuk periode uji hingga $I$, $\\mathrm{MAE}=|I|^{-1}\\sum_{s\\in I}|e_s|$ dan $\\mathrm{MSE}=|I|^{-1}\\sum_{s\\in I}e_s^2$. Setiap ramalan harus dihitung sebelum realisasi periode uji digunakan.",
      "explanation": "Untuk $(10,12,14,16,18,20)$ dan $m=3$, ramalan periode 4, 5, dan 6 berturut-turut 12, 14, dan 16; galatnya masing-masing 4."
    },
    {
      "kind": "proposition",
      "title": "Batas Nilai Ramalan",
      "statement": "Jika $m\\ge1$ dan $t\\ge m$, maka $\\min_{t-m+1\\le i\\le t}y_i\\le\\widehat y_{t+1\\mid t}^{(m)}\\le\\max_{t-m+1\\le i\\le t}y_i$. Jika seluruh nilai jendela sama dengan $c$, ramalan juga $c$.",
      "proof": [
        "Tuliskan $a$ sebagai minimum dan $b$ sebagai maksimum observasi dalam jendela. Setiap $y_i$ pada jendela memenuhi $a\\le y_i\\le b$. Menjumlahkan $m$ ketaksamaan tersebut menghasilkan $ma\\le\\sum_{i=t-m+1}^t y_i\\le mb$.",
        "Karena $m>0$, pembagian oleh $m$ memberi $a\\le\\widehat y_{t+1\\mid t}^{(m)}\\le b$. Jika seluruh $y_i=c$, jumlahnya $mc$, sehingga ramalan $mc/m=c$. Pernyataan terbukti. $\\square$"
      ],
      "explanation": "Batas ini berlaku untuk ramalan yang dihitung dari jendela, bukan untuk nilai permintaan masa depan."
    },
    {
      "kind": "proposition",
      "title": "Pembaruan Jendela",
      "statement": "Untuk $m\\ge1$ dan $t\\ge m$, berlaku $\\widehat y_{t+2\\mid t+1}^{(m)}-\\widehat y_{t+1\\mid t}^{(m)}=(y_{t+1}-y_{t-m+1})/m$.",
      "proof": [
        "Dari definisi, $m\\widehat y_{t+1\\mid t}^{(m)}=y_{t-m+1}+\\cdots+y_t$, sedangkan $m\\widehat y_{t+2\\mid t+1}^{(m)}=y_{t-m+2}+\\cdots+y_t+y_{t+1}$.",
        "Kurangkan kedua persamaan. Seluruh observasi yang masih berada pada kedua jendela saling menghilangkan; tersisa $y_{t+1}-y_{t-m+1}$. Setelah dibagi $m$, diperoleh identitas pembaruan. Ini juga benar ketika $m=1$. $\\square$"
      ],
      "explanation": "Hanya nilai baru dan nilai yang keluar dari jendela yang mengubah ramalan."
    },
    {
      "kind": "theorem",
      "title": "Kelambatan pada Tren Linear",
      "statement": "Jika $y_s=a+bs$ untuk semua $s=t-m+1,\\ldots,t+1$, maka $\\widehat y_{t+1\\mid t}^{(m)}=a+b[t-(m-1)/2]$ dan $y_{t+1}-\\widehat y_{t+1\\mid t}^{(m)}=b(m+1)/2$.",
      "proof": [
        "Substitusi model tren ke definisi memberi $\\widehat y_{t+1\\mid t}^{(m)}=\\frac1m\\sum_{j=0}^{m-1}[a+b(t-j)]=a+bt-\\frac b m\\sum_{j=0}^{m-1}j$.",
        "Jumlah indeks memenuhi $\\sum_{j=0}^{m-1}j=m(m-1)/2$. Oleh karena itu ramalan sama dengan $a+b[t-(m-1)/2]$. Nilai aktual menurut model pada periode berikutnya adalah $a+b(t+1)$.",
        "Selisih keduanya adalah $b[(t+1)-t+(m-1)/2]=b(m+1)/2$. Jika $b>0$ ramalan berada di bawah tren, sedangkan jika $b<0$ berada di atas tren. Kedua identitas terbukti. $\\square$"
      ],
      "explanation": "Rumus eksak ini hanya berlaku untuk pola linear pada periode-periode yang disebutkan."
    },
    {
      "kind": "proposition",
      "title": "Invariansi Afin Ramalan Berbobot",
      "statement": "Jika $\\sum_{j=0}^{m-1}w_j=1$ dan $z_s=Ay_s+B$ dengan $A,B\\in\\mathbb R$, maka $\\widehat z_{t+1\\mid t}^{(w)}=A\\widehat y_{t+1\\mid t}^{(w)}+B$.",
      "proof": [
        "Definisi memberi $\\widehat z=\\sum_jw_j(Ay_{t-j}+B)=A\\sum_jw_jy_{t-j}+B\\sum_jw_j$. Langkah ini hanya menggunakan distributivitas pada jumlah hingga.",
        "Karena bobot berjumlah satu, ekspresi terakhir sama dengan $A\\widehat y+B$. Khusus untuk $A=0$ dan $B=c$, setiap data baru konstan $c$ menghasilkan ramalan $c$. Hipotesis normalisasi bobot digunakan tepat pada suku konstanta. $\\square$"
      ],
      "explanation": "Mengganti satuan permintaan secara afin mengubah ramalan dengan transformasi yang sama."
    },
    {
      "kind": "theorem",
      "title": "MSE Prediksi pada Level Konstan",
      "statement": "Misalkan $Y_s=\\mu+\\varepsilon_s$ untuk $s=t-m+1,\\ldots,t+1$, dengan $\\varepsilon_s$ saling independen, $E[\\varepsilon_s]=0$, dan $\\operatorname{Var}(\\varepsilon_s)=\\sigma^2<\\infty$. Jika $\\widehat Y=m^{-1}\\sum_{j=0}^{m-1}Y_{t-j}$, maka $E[\\widehat Y]=\\mu$, $\\operatorname{Var}(\\widehat Y)=\\sigma^2/m$, dan $E[(Y_{t+1}-\\widehat Y)^2]=\\sigma^2(1+1/m)$.",
      "proof": [
        "Linearitas ekspektasi menghasilkan $E[\\widehat Y]=m^{-1}\\sum_jE[Y_{t-j}]=\\mu$. Independensi membuat semua kovarians antar-galat berbeda indeks bernilai nol. Karena itu $\\operatorname{Var}(\\widehat Y)=m^{-2}\\sum_j\\sigma^2=\\sigma^2/m$.",
        "Galat prediksi adalah $Z=Y_{t+1}-\\widehat Y=\\varepsilon_{t+1}-m^{-1}\\sum_j\\varepsilon_{t-j}$ dan $E[Z]=0$. Galat masa depan independen dari seluruh galat jendela, sehingga $\\operatorname{Var}(Z)=\\sigma^2+\\sigma^2/m$.",
        "Karena $E[Z]=0$, berlaku $E[Z^2]=\\operatorname{Var}(Z)=\\sigma^2(1+1/m)$. MSE prediksi berbeda dari varians ramalan sebesar $\\sigma^2$ karena permintaan baru tetap acak. Ketiga identitas terbukti. $\\square$"
      ],
      "explanation": "Asumsi independensi dan mean konstan diperlukan; rumus ini tidak boleh diterapkan otomatis pada data bertren."
    },
    {
      "kind": "theorem",
      "title": "MSE Prediksi pada Tren Linear Acak",
      "statement": "Jika $Y_s=a+bs+\\varepsilon_s$ untuk $s=t-m+1,\\ldots,t+1$, dengan galat independen bermean nol dan varians bersama $\\sigma^2$, maka $E[(Y_{t+1}-\\widehat Y)^2]=b^2(m+1)^2/4+\\sigma^2(1+1/m)$.",
      "proof": [
        "Pisahkan $Y_s$ menjadi tren deterministik $a+bs$ dan galat acak. Teorema tren linear memberi selisih bagian deterministik antara nilai periode $t+1$ dan SMA jendela sebesar $B=b(m+1)/2$.",
        "Selisih total dapat ditulis $Y_{t+1}-\\widehat Y=B+Z$, dengan $Z=\\varepsilon_{t+1}-m^{-1}\\sum_j\\varepsilon_{t-j}$. Asumsi mean nol memberi $E[Z]=0$, sedangkan independensi dan varians bersama memberi $E[Z^2]=\\sigma^2(1+1/m)$.",
        "Kembangkan kuadrat: $E[(B+Z)^2]=B^2+2BE[Z]+E[Z^2]=b^2(m+1)^2/4+\\sigma^2(1+1/m)$. Rumus tersebut memisahkan kuadrat bias tren dari varians prediksi. $\\square$"
      ],
      "explanation": "Menaikkan panjang jendela menurunkan suku varians, tetapi menaikkan suku bias kuadrat jika $b\\ne0$."
    },
    {
      "kind": "proposition",
      "title": "Bobot Sama Meminimumkan Varians pada Level Konstan",
      "statement": "Jika galat jendela independen dengan varians sama $\\sigma^2>0$ dan bobot real memenuhi $\\sum_{j=0}^{m-1}w_j=1$, maka $\\operatorname{Var}(\\sum_jw_jY_{t-j})=\\sigma^2\\sum_jw_j^2\\ge\\sigma^2/m$. Kesamaan berlaku jika dan hanya jika semua bobot $w_j=1/m$.",
      "proof": [
        "Independensi menghasilkan $\\operatorname{Var}(\\sum_jw_jY_{t-j})=\\sum_jw_j^2\\operatorname{Var}(Y_{t-j})=\\sigma^2\\sum_jw_j^2$.",
        "Jumlah kuadrat $\\sum_j(w_j-1/m)^2\\ge0$ dapat dikembangkan menjadi $\\sum_jw_j^2-(2/m)\\sum_jw_j+1/m\\ge0$. Karena jumlah bobot satu, diperoleh $\\sum_jw_j^2\\ge1/m$.",
        "Kesamaan jumlah kuadrat terjadi tepat ketika semua $w_j-1/m=0$, yakni $w_j=1/m$. Sebaliknya bobot sama memenuhi normalisasi dan mencapai batas tersebut. Setelah dikalikan $\\sigma^2>0$, klaim varians dan karakterisasi kesamaan terbukti. $\\square$"
      ],
      "explanation": "Optimalitas varians ini bergantung pada asumsi level konstan, varians sama, dan independensi."
    }
  ],
  "examples": [
    {
      "title": "Contoh 1 · Ramalan yang Sah",
      "problem": "Pada akhir periode 4 diketahui data $(4,7,6,9)$. Hitung SMA tiga periode untuk periode 5 tanpa menggunakan realisasi masa depan.",
      "solution": [
        "Diketahui $t=4$ dan $m=3$. Data yang boleh digunakan adalah periode 2, 3, dan 4, yaitu $(7,6,9)$. Data periode 5 belum diketahui ketika ramalan dibentuk.",
        "Rumus SMA menghasilkan $\\widehat y_{5\\mid4}^{(3)}=(7+6+9)/3=22/3$. Ramalan ini berada di antara minimum 6 dan maksimum 9 dari jendela.",
        "Jika sesudah periode 5 diketahui realisasi $y_5=8$, barulah galat dihitung sebagai $8-22/3=2/3$. Angka 8 tidak boleh dimasukkan ke jendela ramalan sebelumnya."
      ],
      "forDefinition": "Deret Waktu dan Ramalan Satu Langkah"
    },
    {
      "title": "Contoh 2 · Tiga Observasi Terakhir",
      "problem": "Permintaan lima periode adalah $(10,12,14,16,18)$. Hitung SMA tiga periode untuk periode 6.",
      "solution": [
        "Diketahui $t=5$ dan $m=3$. Indeks awal jendela adalah $t-m+1=3$, sehingga observasi yang dipakai ialah $y_3=14$, $y_4=16$, dan $y_5=18$.",
        "Hitung $\\widehat y_{6\\mid5}^{(3)}=(14+16+18)/3=48/3=16$. Observasi 10 dan 12 tidak dipakai karena berada di luar jendela.",
        "Pemeriksaan $14\\le16\\le18$ memenuhi proposisi batas ramalan. Hasil 16 merupakan perkiraan permintaan periode 6, bukan nilai yang telah diamati."
      ],
      "forDefinition": "Rata-Rata Bergerak Sederhana"
    },
    {
      "title": "Contoh 3 · Bobot Tidak Sama",
      "problem": "Gunakan data terbaru ke terlama $(16,14,12)$ dan bobot $(1/2,3/10,1/5)$.",
      "solution": [
        "Bobot memenuhi nonnegativitas dan normalisasi karena $1/2+3/10+1/5=1$. Data terbaru 16 mendapat bobot paling besar.",
        "Ramalan berbobot $\\widehat y=(1/2)16+(3/10)14+(1/5)12=8+21/5+12/5=73/5=14.6$. Sebagai pembanding, SMA tiga periode menghasilkan 14.",
        "Nilai 14.6 berada di dalam $[12,16]$ dan lebih dekat ke observasi terbaru. Perbedaan muncul dari bobot, bukan dari perubahan jumlah data."
      ],
      "forDefinition": "Rata-Rata Bergerak Berbobot"
    },
    {
      "title": "Contoh 4 · Galat Bergulir",
      "problem": "Pada data $(10,12,14,16,18,20)$, evaluasi SMA tiga periode untuk periode 4, 5, dan 6.",
      "solution": [
        "Ramalan periode 4 dibuat dari $(10,12,14)$, yaitu 12, sehingga $e_4=16-12=4$. Ramalan periode 5 dibuat dari $(12,14,16)$, yaitu 14, sehingga $e_5=18-14=4$.",
        "Ramalan periode 6 dibuat dari $(14,16,18)$, yaitu 16, sehingga $e_6=20-16=4$. Setiap jendela berakhir sebelum periode target.",
        "MAE pada tiga periode uji adalah $(4+4+4)/3=4$ dan MSE adalah $(16+16+16)/3=16$. MSE memiliki satuan kuadrat dari permintaan, berbeda dari MAE."
      ],
      "forDefinition": "Galat dan Evaluasi Bergulir"
    },
    {
      "title": "Contoh 5 · Pembaruan Efisien",
      "problem": "Untuk data $(3,5,7,9,11)$ dan $m=3$, hitung perubahan ramalan dari periode 5 ke periode 6.",
      "solution": [
        "Ramalan periode 5 memakai $(5,7,9)$ dan bernilai $(5+7+9)/3=7$. Setelah $y_5=11$ diketahui, ramalan periode 6 memakai $(7,9,11)$ dan bernilai 9.",
        "Selisih ramalan adalah $9-7=2$. Identitas pembaruan memberikan $(y_5-y_2)/3=(11-5)/3=2$, cocok dengan hasil langsung.",
        "Hanya 5 yang keluar dan 11 yang masuk; angka 7 dan 9 tidak berubah. Perhitungan ini memverifikasi rumus pembaruan tanpa menghitung ulang seluruh jumlah."
      ]
    },
    {
      "title": "Contoh 6 · Tren Linear Naik",
      "problem": "Jika $y_s=2+3s$, hitung SMA tiga periode pada akhir periode 5 untuk periode 6.",
      "solution": [
        "Diketahui tren deterministik $y_s=2+3s$ dengan $a=2$, $b=3$, $t=5$, dan $m=3$. Observasi dalam jendela yang tersedia pada akhir periode 5 adalah $y_3=11$, $y_4=14$, dan $y_5=17$. Nilai menurut model untuk periode 6 adalah $y_6=2+3(6)=20$, yang dipakai untuk mengevaluasi ramalan, bukan untuk membentuknya.",
        "Rata-rata jendela adalah $\\widehat y_{6\\mid5}^{(3)}=(11+14+17)/3=42/3=14$. Galat terhadap nilai model periode berikutnya adalah $e_6=20-14=6$. Dari rumus umum $\\widehat y_{t+1\\mid t}^{(m)}=a+b[t-(m-1)/2]$ diperoleh $2+3[5-(3-1)/2]=2+3(4)=14$, sehingga hasil rumus sama dengan perhitungan data.",
        "Rumus kelambatan memberi $b(m+1)/2=3(3+1)/2=6$, tepat sama dengan galat langsung. Sebagai pembanding, jendela dua periode memakai $(14,17)$ dan menghasilkan ramalan $31/2=15.5$ dengan galat $20-15.5=4.5$, sesuai $3(2+1)/2=4.5$. Jendela lebih panjang tertinggal lebih jauh pada tren naik yang sama.",
        "Kedua hasil diperoleh tanpa menggunakan nilai periode 6 ketika meramal. Kesimpulan khususnya adalah bahwa SMA tiga periode mengestimasi 14 untuk periode 6 dan mengalami galat deterministik 6 pada tren tersebut; pola galat tidak otomatis berlaku pada data dengan tren berubah atau gangguan acak."
      ]
    },
    {
      "title": "Contoh 7 · Membandingkan Jendela",
      "problem": "Data $(4,8,12,16,20)$ diikuti realisasi $y_6=24$. Bandingkan SMA dua dan tiga periode untuk periode 6.",
      "solution": [
        "SMA dua periode menggunakan $(16,20)$ dan memberi 18. SMA tiga periode menggunakan $(12,16,20)$ dan memberi 16.",
        "Sesudah realisasi 24 tersedia, galat masing-masing adalah $24-18=6$ dan $24-16=8$. Untuk kasus ini, galat absolut jendela dua lebih kecil.",
        "Deret memiliki tren linear dengan kemiringan 4. Rumus kelambatan memberi $4(3)/2=6$ untuk $m=2$ dan $4(4)/2=8$ untuk $m=3$. Hasil ini tidak menjamin jendela dua selalu terbaik pada deret lain."
      ]
    },
    {
      "title": "Contoh 8 · Varians Bukan MSE",
      "problem": "Asumsikan $Y_s=50+\\varepsilon_s$ dengan galat independen bermean nol dan varians 9. Hitung varians SMA tiga periode dan MSE prediksi periode berikutnya.",
      "solution": [
        "Mean ramalan sama dengan 50. Karena $m=3$ dan varians galat 9, varians ramalan adalah $\\sigma^2/m=9/3=3$.",
        "Realisasi periode berikutnya mengandung galat baru dengan varians 9 yang independen dari jendela. Oleh karena itu MSE prediksi adalah $9(1+1/3)=12$.",
        "Nilai 3 hanya mengukur ketidakpastian ramalan sebagai estimator mean. Nilai 12 mengukur ketidakpastian memprediksi observasi berikutnya, sehingga kedua ukuran tidak boleh dipertukarkan."
      ]
    }
  ],
  "exercises": [
    {
      "prompt": "MA-01. Data $(4,6,8,10,12)$ tersedia. Hitung SMA tiga periode untuk periode 6 dan galatnya jika realisasi periode 6 adalah 14.",
      "answer": "Diketahui $t=5$, $m=3$, dan jendela periode 3–5 berisi $(8,10,12)$. Ramalan $\\widehat y_{6\\mid5}^{(3)}=(8+10+12)/3=10$. Setelah realisasi $y_6=14$ diketahui, galat $e_6=14-10=4$. Pemeriksaan batas jendela memberi $8\\le10\\le12$. Galat positif berarti permintaan aktual lebih tinggi daripada ramalan; angka 14 tidak digunakan saat menghitung ramalan.",
      "hint": "Gunakan data hingga periode 5 saja.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-02. Data terbaru ke terlama $(14,12,10)$ memiliki bobot $(1/2,1/3,1/6)$. Tentukan WMA.",
      "answer": "Diketahui tiga nilai dari terbaru ke terlama $(14,12,10)$ dan bobot $(1/2,1/3,1/6)$. Seluruh bobot nonnegatif; normalisasinya diperiksa melalui $1/2+1/3+1/6=(3+2+1)/6=1$. Dengan demikian kombinasi tersebut memenuhi definisi rata-rata bergerak berbobot dan mempertahankan nilai konstanta. Pasangkan bobot 1/2 dengan data terbaru 14, bobot 1/3 dengan 12, dan bobot 1/6 dengan 10. Ramalan $\\widehat y=(1/2)14+(1/3)12+(1/6)10=7+4+5/3=38/3$. Sebagai pemeriksaan alternatif, $38/3=12\\frac23$ berada di antara minimum 10 dan maksimum 14; ini wajib untuk kombinasi konveks. Jika semua data sama dengan 12, rumus yang sama akan menghasilkan $12(1/2+1/3+1/6)=12$. Kedua pemeriksaan menunjukkan bahwa pembobotan dan urutan data diterapkan secara konsisten.",
      "hint": "Perhatikan arah urutan bobot.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-03. Untuk data $(2,4,6,8,10)$ dan $m=4$, hitung ramalan periode 5 dan 6 lalu verifikasi pembaruan.",
      "answer": "Ramalan periode 5 pada akhir periode 4 menggunakan $(2,4,6,8)$ dan bernilai $20/4=5$. Setelah observasi kelima bernilai 10, ramalan periode 6 menggunakan $(4,6,8,10)$ dan bernilai $28/4=7$. Selisihnya $7-5=2$. Identitas pembaruan menghasilkan $(y_5-y_1)/4=(10-2)/4=2$. Kedua metode sama, sehingga jendela dan indeks yang digunakan telah konsisten.",
      "hint": "Sebutkan data yang keluar dan masuk.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-04. Untuk data $(3,5,8,10,14)$ dan $m=2$, hitung MAE dan MSE evaluasi bergulir periode 3, 4, 5.",
      "answer": "Ramalan periode 3 dari $(3,5)$ adalah 4, sehingga $e_3=8-4=4$. Ramalan periode 4 dari $(5,8)$ adalah $13/2$, sehingga $e_4=10-13/2=7/2$. Ramalan periode 5 dari $(8,10)$ adalah 9, sehingga $e_5=14-9=5$. MAE $=(4+7/2+5)/3=(25/2)/3=25/6$. MSE $=(4^2+(7/2)^2+5^2)/3=(16+49/4+25)/3=71/4$. Semua ramalan dibentuk sebelum realisasi periode target dipakai, sehingga evaluasi bebas kebocoran data.",
      "hint": "Tuliskan galat masing-masing periode dahulu.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-05. Buktikan SMA lima periode memberi ramalan 7 jika seluruh nilai dalam jendela adalah 7; tentukan galat jika periode berikutnya juga 7.",
      "answer": "Ambil sebarang $t\\ge5$ dan lima observasi terakhir yang semuanya bernilai 7. Definisi SMA memberi $\\widehat y_{t+1\\mid t}^{(5)}=(7+7+7+7+7)/5=35/5=7$. Untuk membuktikan bahwa hasil ini tidak bergantung pada indeks waktu, perhatikan bahwa jumlah lima suku pada jendela mana pun tetap $5(7)=35$, sehingga setiap pergeseran jendela mempertahankan ramalan 7 selama semua observasi barunya tetap 7. Jika realisasi berikutnya menurut hipotesis juga $y_{t+1}=7$, maka galat $e_{t+1}=y_{t+1}-\\widehat y_{t+1\\mid t}^{(5)}=7-7=0$. Sebaliknya, jika realisasi berikutnya 9, ramalan historis tetap 7 tetapi galat menjadi $9-7=2$. Contoh tandingan terakhir menunjukkan bahwa data historis konstan saja tidak cukup untuk menyimpulkan galat masa depan nol; diperlukan asumsi tentang realisasi periode target.",
      "hint": "Bedakan ramalan dari realisasi berikutnya.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-06. Deret $y_s=5-2s$ diamati sampai $t=4$. Untuk $m=4$, hitung ramalan periode 5 dan galat menurut model.",
      "answer": "Nilai model adalah $y_1=3$, $y_2=1$, $y_3=-1$, $y_4=-3$, dan $y_5=-5$. SMA empat periode adalah $(3+1-1-3)/4=0$. Galat periode 5 sama dengan $-5-0=-5$. Teorema tren linear dengan $b=-2$ dan $m=4$ menghasilkan $b(m+1)/2=-2(5)/2=-5$, sesuai perhitungan langsung. Tanda negatif menunjukkan ramalan berada di atas nilai aktual pada tren yang menurun.",
      "hint": "Jaga tanda negatif pada kemiringan.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-07. Pada level konstan dengan galat independen bermean nol dan varians 16, bandingkan varians ramalan dan MSE untuk $m=4$ dan $m=8$.",
      "answer": "Untuk $m=4$, varians ramalan adalah $16/4=4$, sedangkan MSE memprediksi realisasi berikutnya adalah $16(1+1/4)=20$. Untuk $m=8$, varians ramalan $16/8=2$ dan MSE $16(1+1/8)=18$. Pengurangan MSE sebesar 2 terjadi karena rata-rata jendela lebih stabil; varians gangguan masa depan tetap 16. Perbandingan ini sah karena mean konstan dan galat independen dengan varians sama. Pada tren yang berubah, suku bias dapat mengubah urutan performa.",
      "hint": "Jangan menyamakan varians ramalan dengan MSE prediksi.",
      "provenance": "dmath-original"
    },
    {
      "prompt": "MA-08. Data $(10,10,10,100)$ tersedia. Hitung SMA tiga periode dan pengaruh koreksi data terbaru 100 menjadi 10.",
      "answer": "Jendela pada akhir periode 4 adalah $(10,10,100)$, sehingga ramalan periode 5 adalah $(10+10+100)/3=40$. Jika data terbaru dikoreksi dari 100 menjadi 10, jendela menjadi $(10,10,10)$ dan ramalan baru 10. Selisih ramalan baru terhadap lama adalah $10-40=-30$. Secara langsung, perubahan satu observasi adalah $10-100=-90$, dengan bobot $1/3$, sehingga perubahan ramalan $-90/3=-30$. Kesamaan dua perhitungan memverifikasi sensitivitas SMA terhadap observasi ekstrem; angka 100 tidak otomatis salah.",
      "hint": "Gunakan bobot 1/3 pada observasi yang berubah.",
      "provenance": "dmath-original"
    }
  ],
  "mistakes": [],
  "connections": []
};
