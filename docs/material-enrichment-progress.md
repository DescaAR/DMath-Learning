## Catatan sesi 2026-10-29 — Teori Ukuran & Probabilitas (kedalaman solusi Carathéodory)

**Bidang:** 26 Teori Ukuran & Probabilitas, submateri `tup-extension`, URL: https://descaar.github.io/DMath-Learning/materi/teori-ukuran-probabilitas/tup-extension/.

**Audit awal yang dibaca:** artifact `dmath-material-depth-audit` dari GitHub Actions run 40827510434, khususnya `solution-depth-report.json`: 1.276 halaman, 6.011 jawaban latihan pendek, 3.474 contoh terbahas pendek, 1.066 pembuktian pendek, dan 746 jawaban bertanda generik menurut pola triage. Pada `tup-extension` tercatat 4 jawaban latihan pendek dan 1 contoh pendek. Ambang karakter hanya alat pemilahan, bukan penentu ketepatan.

**Kesalahan matematika diperbaiki:** klaim lama tentang keunikan perluasan hanya mensyaratkan dua ukuran sigma-finite yang sepakat pada aljabar; hipotesisnya tidak cukup untuk argumen yang diberikan. Teorema sekarang secara eksplisit mensyaratkan penutup berukuran hingga oleh anggota aljabar pembangkit. Pembuktian menyusun penutup meningkat, membuktikan kelas kesamaan terlokalisasi sebagai sistem lambda, memakai teorema pi-lambda, dan mengambil limit melalui kontinuitas ukuran dari bawah.

**Solusi asli yang ditulis ulang:** contoh panjang interval diperluas menjadi empat langkah matematis (aditivitas, penutup sigma-finite, konstruksi outer measure, keunikan Borel). Lima latihan templat diganti dengan soal dan solusi konkret: premeasure pada aljabar empat anggota, penutup interval sigma-finite, contoh tandingan tanpa sigma-finite, ukuran himpunan irasional pada interval, dan konstruksi outer measure diskret beserta kriteria Carathéodory. `measure-probability-content-utils.ts` kini mendukung penggantian latihan khusus satu submateri tanpa mengubah latihan halaman lain. Audit `audit-solution-depth.mjs` memeriksa enam solusi baru dan hipotesis teorema.

**Estimasi perubahan metrik triage (harus diverifikasi dari build commit akhir):** jawaban latihan pendek turun setidaknya 4, contoh pendek turun 1; bukti lama tidak dihitung sebagai pendek oleh ambang. Catat angka sesungguhnya dari laporan setelah deployment. Tidak ada visualisasi baru pada sesi ini; fokus pada kesalahan teorema dan isi jawaban yang semula generik. Rujukan matematis yang dapat dipakai untuk pendalaman: Folland, *Real Analysis: Modern Techniques and Their Applications*, ed. 2 (1999), Bab 1.

**Rotasi 26 bidang:** sudah disentuh 03, 04, 07, 08, 09, 10, 11, 14, 15, 17, 18, 22, 26 (13 bidang, semuanya belum selesai). Belum disentuh 01, 02, 05, 06, 12, 13, 16, 19, 20, 21, 23, 24, 25. Berikutnya prioritaskan 24 Statistika Matematika atau 23 Statistika Terapan, khususnya contoh terbahas yang terlalu singkat dan kesalahan matematis nyata. Jangan mengulang `tup-extension` sebelum ada temuan baru.

## Catatan sesi 2026-10-29 — Riset Operasi (solusi grafik program linear)

**Bidang:** 22 Riset Operasi, submateri `or-lp-grafik`, URL: https://descaar.github.io/DMath-Learning/materi/riset-operasi/or-lp-grafik/.

**Audit awal:** submateri ini berasal dari generator `new-academic-content.ts`; belum memuat pembuktian khusus konveksitas, teorema titik sudut, sertifikat batas atas, sensitivitas koefisien, serta visualisasi poligon dengan evaluasi objektif.

**Pengayaan:** `data/graphical-lp-content.ts` menggantikan hanya slug ini dengan 4 definisi yang masing-masing diikuti contoh terbahas, 7 hasil formal dengan bukti terurai, 8 contoh, dan 8 latihan bersolusi. Model konsisten adalah `x+2y<=8, 3x+y<=9, x,y>=0`; nilai optimum `18` pada `(2,3)` untuk tujuan `3x+4y`. Prinsip titik sudut dibuktikan dengan hipotesis poligon kompak berinterior tidak kosong, sementara sertifikat dibuktikan langsung melalui dualitas lemah. Rujukan: Taha, *Operations Research: An Introduction*, edisi ke-10 (2017).

**Visualisasi:** `components/GraphicalLPLab.tsx` dan `lib/graphical-lp-explorer.ts` menyajikan poligon layak SVG responsif, titik sudut, garis level tujuan, dua pengendali keuntungan, tabel evaluasi, sisi optimal ketika seri, dan pengali sertifikat ketika nonnegatif. Komponen ditampilkan pada pengantar dan bagian visualisasi.

**Pengujian:** `scripts/audit-graphical-lp.mjs` diintegrasikan ke `npm run build`; memeriksa definisi, bukti, contoh, latihan, registry/rute/komponen, serta pengujian grid layak dan sertifikat. **Status publikasi:** wajib memeriksa GitHub Actions pada commit akhir; jangan menyatakan terbit sampai job deploy `success`.

**Rotasi 26 bidang:** sudah disentuh 03, 04, 07, 08, 09, 10, 11, 14, 15, 17, 18, 22 (12 bidang, belum berarti selesai). Belum disentuh: 01 Aritmetika, 02 Aljabar, 05 Geometri, 06 Trigonometri, 12 Statistika, 13 Peluang, 16 Topologi, 19 Metode Numerik, 20 Optimisasi, 21 Pemodelan Matematika, 23 Statistika Terapan, 24 Statistika Matematika, 25 Kalkulus Stokastik, 26 Teori Ukuran & Probabilitas. Prioritas selanjutnya: 24 Statistika Matematika atau 23 Statistika Terapan, dengan mempertimbangkan kelengkapan katalog dan tanpa mengulang slug selesai.

# DMath Learning — pengayaan materi dan audit matematis

## Catatan sesi 2026-10-29 — Matematika Diskrit (kuantor bertingkat)

**Bidang disentuh:** 14 Matematika Diskrit, submateri `md-kuantor-bertingkat`, URL: https://descaar.github.io/DMath-Learning/materi/matematika-diskrit/md-kuantor-bertingkat/.

**Audit awal:** `new-academic-content.ts` membangkitkan isi generik untuk submateri ini; pembahasan tidak memberikan analisis saksi lokal vs saksi seragam, contoh tandingan pertukaran kuantor, penanganan domain kosong, atau matriks relasi khusus. Halaman Integral Riemann dijadikan acuan untuk pemisahan definisi, pembuktian, contoh, dan latihan, tanpa menghapus materi bidang lain.

**Pengayaan:** `data/nested-quantifiers-content.ts` menggantikan hanya slug ini dengan 4 definisi formal yang masing-masing mempunyai contoh langsung (lingkup, matriks relasi, saksi lokal/seragam, fungsi saksi); 8 hasil formal dengan bukti dua arah jika relevan (ekspansi domain berhingga, implikasi satu arah saksi seragam, negasi dua kuantor, pertukaran kuantor sejenis, kuantor vakum dan domain kosong, konstruksi fungsi dari saksi unik, saksi diagonal, distributivitas kuantor). Ada 8 contoh terbahas dan 8 latihan bersolusi. Referensi: Kenneth H. Rosen, *Discrete Mathematics and Its Applications*, edisi ke-8 (2019), Bab 1.

**Visualisasi:** `components/NestedQuantifiersLab.tsx` menyajikan SVG responsif matriks relasi, enam konfigurasi (kesamaan, ketaksamaan, suksesor siklik, kolom tetap, baris kosong, relasi semesta), pengendali ukuran domain dan pemilih pasangan, serta evaluasi empat urutan kuantor dan saksi masing-masing. Perhitungan eksak disediakan di `lib/nested-quantifiers-explorer.ts`.

**Pengujian:** `scripts/audit-nested-quantifiers.mjs` diintegrasikan ke `npm run build`, menguji semantik kuantor dan penghubungan komponen. **Status publikasi:** tunggu pemeriksaan GitHub Actions pada commit final, jangan mengklaim terbit sebelum `success`. Audit memeriksa delapan hasil formal, setiap pembuktian, contoh, latihan, serta seluruh konfigurasi relasi.

**Rotasi 26 bidang:** sudah disentuh: 03, 04, 07, 08, 09, 10, 11, 14, 15, 17, 18 (11 bidang, belum berarti tuntas). Belum disentuh: 01 Aritmetika, 02 Aljabar, 05 Geometri, 06 Trigonometri, 12 Statistika, 13 Peluang, 16 Topologi, 19 Metode Numerik, 20 Optimisasi, 21 Pemodelan Matematika, 22 Riset Operasi, 23 Statistika Terapan, 24 Statistika Matematika, 25 Kalkulus Stokastik, 26 Teori Ukuran & Probabilitas. Topologi dan Metode Numerik belum tersedia sebagai subject book terpisah pada katalog branch saat ini; prioritaskan rute publik berikutnya, misalnya 22 Riset Operasi atau 24 Statistika Matematika, sambil mengaudit pemetaan katalog.


## Catatan sesi 2026-10-29 — Analisis Numerik (metode bisection)

**Bidang disentuh:** 18 Analisis Numerik, submateri \`num-bisection\`. URL: https://descaar.github.io/DMath-Learning/materi/analisis-numerik/num-bisection/.

**Audit awal:** sumber \`numerical-analysis-content.ts\` hanya menyediakan satu teorema invarian dengan empat langkah bukti singkat dan satu proposisi batas galat tanpa bukti. Delapan latihan berupa pertanyaan templat dengan jawaban singkat yang tidak menguji komputasi, dan visualisasi tidak khusus mengilustrasikan pengurungan akar.

**Pengayaan:** \`data/bisection-content.ts\` menggantikan hanya slug \`num-bisection\`, dengan empat definisi formal yang langsung dipasangkan dengan contoh terbahas (interval pengurung, langkah bisection, batas galat titik tengah, residual), tujuh hasil formal dengan pembuktian bertahap (Teorema Nilai Antara, invarian tanda, penyusutan interval, konvergensi melalui interval bersarang, jumlah iterasi, ketunggalan di bawah monotonisitas ketat, dan estimasi galat dari residual), delapan contoh terbahas dan delapan latihan dengan solusi rinci. Ditekankan bahwa perubahan tanda cukup tetapi tidak perlu untuk keberadaan akar dan tidak menjamin ketunggalan. Rujukan: Burden–Faires (2011) dan Atkinson (1989).

**Visualisasi:** \`components/BisectionLab.tsx\` dan \`lib/bisection-explorer.ts\` menyediakan SVG responsif dengan pemilih lima fungsi, pengendali jumlah pembagian, interval aktif, titik tengah, tabel langkah, panjang interval dan batas galat. Kasus tanpa perubahan tanda secara eksplisit dinyatakan tidak memenuhi syarat bisection standar; kasus akar tepat menghentikan iterasi. Visualisasi ditampilkan pada pengantar dan bagian visualisasi khusus.

**Pengujian:** \`scripts/audit-bisection.mjs\` diintegrasikan ke \`npm run build\`, memeriksa definisi–contoh, bukti, solusi, keterhubungan registry dan komponen, serta 105 kombinasi fungsi dan jumlah langkah. Status deployment harus diverifikasi melalui GitHub Actions pada commit final; jangan klaim publikasi jika belum \`success\`.

**Prioritas lanjutan:** 16 Topologi atau 19 Metode Numerik jika tersedia rute publik; lanjutkan rotasi 26 bidang tanpa mengulang sepuluh submateri yang telah diperkaya. Tinjau kembali keamanan floating-point pada kasus ekstrem, khususnya overflow dan pembulatan titik tengah.


Dokumen ini melacak perubahan **yang sudah di-commit** pada branch `github-pages-static`, bukan menganggap seluruh bidang selesai setelah satu submateri. Jangan ubah branch `main`. Setiap sesi: periksa riwayat commit, pilih submateri berbeda yang masih dangkal/keliru, sempurnakan materi dan visualisasi, jalankan build, lalu perbarui catatan ini dengan bukti perubahan.

## Catatan sesi 2026-10-29 — Persamaan Diferensial (persamaan linear orde satu)

**Bidang disentuh:** 17 Persamaan Diferensial, submateri `de-linear-first`, URL: https://descaar.github.io/DMath-Learning/materi/persamaan-diferensial/de-linear-first/.

**Audit awal:** halaman memakai generator `expanded-book-content.ts` yang membahas persamaan orde satu secara generik, tidak memberikan pembuktian konstruktif keberadaan dan ketunggalan khusus untuk koefisien kontinu, tidak mengurai keluarga solusi homogen, estimasi kestabilan, prinsip positivitas, maupun stabilitas diskret Euler. Visualisasi bawaan tidak membandingkan solusi eksak, medan kemiringan, dan galat Euler untuk masalah yang sama.

**Pengayaan:** `data/linear-first-order-content.ts` kini menggantikan hanya slug `de-linear-first` di registry. Materi berisi 4 definisi formal dengan contoh terbahas tepat setelahnya (persamaan linear, masalah nilai awal, faktor integrasi ternormalisasi, solusi particular/homogen), 7 hasil formal dengan pembuktian terurai (rumus faktor integrasi dan eksistensi, ketunggalan, seluruh keluarga solusi, koefisien konstan, peluruhan selisih, prinsip positivitas, rumus dan stabilitas Euler), 8 contoh terbahas, dan 8 latihan dengan solusi bertahap. Asumsi kontinuitas dan domain interval dijelaskan secara eksplisit; sumber matematis: Simmons (2017) dan Boyce–DiPrima–Meade (2017). Materi lain tetap dipertahankan.

**Visualisasi:** `components/LinearFirstOrderLab.tsx` menyajikan SVG responsif dengan empat pengendali (koefisien, masukan, nilai awal, dan jumlah langkah), kurva eksak, medan kemiringan, titik setimbang, dan iterasi Euler. Nilai solusi, galat pada waktu akhir, faktor Euler, dan status stabilitas diperbarui dari `lib/linear-first-order-explorer.ts`. Komponen muncul di pengantar dan bagian visualisasi.

**Pengujian:** `scripts/audit-linear-first-order.mjs` diintegrasikan ke `npm run build`; memeriksa kaitan definisi–contoh, 7 pembuktian, 8 solusi latihan, registry/rute/komponen, dan 960 konfigurasi numerik eksak-versus-Euler. **Status publikasi:** tunggu hasil akhir GitHub Actions pada commit terbaru; jangan menyatakan terbit sampai job build dan deploy berstatus `success`.

**Prioritas lanjutan:** 18 Analisis Numerik (misalnya metode bagi dua atau galat numerik), atau 16 Topologi jika ada rute publik; hindari mengulang sembilan submateri yang telah diperkaya. Periksa terlebih dahulu status build dan deployment sesi ini, kemudian pilih bidang baru agar rotasi 26 bidang berlanjut.

## Catatan sesi 2026-10-29 — Analisis Kompleks (himpunan di bidang kompleks)

**Bidang disentuh:** 10 Analisis Kompleks, submateri `himpunan-di-bidang-kompleks`. URL: https://descaar.github.io/DMath-Learning/materi/analisis-kompleks/himpunan-di-bidang-kompleks/.

**Audit awal:** halaman sebelumnya berisi empat definisi singkat, satu proposisi tanpa pembuktian, satu contoh anulus, dan tiga latihan dengan jawaban satu kalimat. Definisi keterhubungan sederhana hanya berupa intuisi dan tidak memisahkan keterbukaan, keterhubungan lintasan, keterhubungan, serta domain. Visualisasi menggunakan template umum, bukan konfigurasi himpunan kompleks.

**Pengayaan:** membuat `data/complex-plane-sets-content.ts` dengan 6 definisi dan 6 contoh yang ditautkan langsung (cakram/lingkungan, himpunan terbuka, tertutup/batas, lintasan, keterhubungan/domain, domain terhubung sederhana), 8 hasil formal dengan bukti lengkap (keterbukaan cakram, gabungan terbuka, irisan hingga terbuka, batas cakram, konveksitas cakram, keterhubungan lintasan mengakibatkan keterhubungan, anulus merupakan domain, kriteria pra-citra terbuka untuk kontinuitas dua arah), 2 contoh aplikasi tambahan, dan 8 latihan dengan solusi. Untuk anulus bukan terhubung sederhana, contoh mengacu secara eksplisit pada invariansi bilangan lilitan; tidak mengklaim membuktikan teorema bilangan lilitan pada halaman ini. Referensi: Zill–Shanahan (2003) dan Conway (1978). Materi hanya menggantikan satu slug di registry; materi lain dipertahankan.

**Visualisasi:** `components/ComplexPlaneSetsLab.tsx` menampilkan SVG responsif lima konfigurasi (cakram terbuka, cakram tertutup, anulus dengan radius dalam dapat diubah, cakram berlubang, dua cakram terpisah), garis batas yang dibedakan, lintasan contoh dua titik, dan klasifikasi keterbukaan, ketertutupan, keterhubungan lintasan, domain, serta domain terhubung sederhana. Predikat keanggotaan murni berada di `lib/complex-plane-explorer.ts`. SVG muncul di pengantar dan bagian visualisasi.

**Pengujian:** `scripts/audit-complex-plane-sets.mjs` diintegrasikan ke `npm run build`; memeriksa contoh-definisi, 8 bukti, 8 solusi, registry/rute/komponen, serta 18.605 titik uji keanggotaan pada lima konfigurasi dan uji batas pada beberapa radius anulus. **Status publikasi:** wajib verifikasi GitHub Actions untuk commit terakhir berstatus `success` sebelum menyatakan halaman terbit.

**Prioritas lanjutan:** 16 Topologi jika tersedia rute publik yang terpisah; jika tidak, 17 Persamaan Diferensial atau 18 Analisis Numerik. Jangan mengulang `himpunan-di-bidang-kompleks` atau tujuh submateri sebelumnya. Cek kegagalan build LaTeX/TypeScript sebelum mengklaim terbit.

## Catatan sesi 2026-10-29 — Aljabar Linear (subruang)

**Bidang disentuh:** 08 Aljabar Linear, submateri `la-subspaces` (Subruang), URL: https://descaar.github.io/DMath-Learning/materi/aljabar-linear/la-subspaces/.

**Audit awal:** submateri sebelumnya memakai konten generik dari `additional-book-content.ts`, tanpa perlakuan sistematis terhadap uji subruang, rentang, kernel, irisan, jumlah, gabungan subruang, atau solusi takhomogen sebagai translasi kernel. Visualisasi bawaan bersifat umum dan belum menunjukkan kontra-contoh ketertutupan.

**Perbaikan konten:** `data/linear-subspaces-content.ts` menggantikan materi generik hanya pada `la-subspaces`. Materi memuat 4 definisi formal dengan 4 contoh langsung yang ditautkan eksplisit (ruang vektor, subruang, kombinasi linear/span, kernel), 7 hasil formal dengan pembuktian lengkap (uji subruang dua arah, irisan, span terkecil, kernel, translasi kernel, jumlah subruang, gabungan subruang iff inklusi), 4 contoh aplikasi tambahan, dan 8 latihan bertingkat dengan solusi. Referensi: Anton–Rorres (2014, Bab 4) dan Axler (2015, Bab 1). Tidak ada bagian prasyarat/daftar notasi/kesalahan umum/koneksi materi baru.

**Visualisasi:** `components/LinearSubspacesLab.tsx` menyediakan SVG responsif dengan empat konfigurasi (garis linear, garis afin, seluruh bidang, gabungan sumbu), dua penggeser skalar, dua vektor input, vektor kombinasi, serta status keanggotaan dan kontra-contoh eksplisit. Ditampilkan pada pengantar dan bagian visualisasi.

**Pengujian:** `scripts/audit-linear-subspaces.mjs` terintegrasi ke `npm run build`; memeriksa keterkaitan definisi–contoh, panjang pembuktian/solusi, hubungan registry dan rute, aksesibilitas SVG, serta 100 pemeriksaan kombinasi linear eksak pada empat mode. **Status publikasi:** periksa GitHub Actions pada commit final; hanya klaim berhasil setelah build dan deploy berstatus `success`.

**Prioritas lanjutan:** 16 Topologi atau 10 Analisis Kompleks dengan materi publik yang masih dangkal; pilih satu submateri baru dan jangan ulang `la-subspaces` atau enam submateri terdahulu.

## Catatan sesi 2026-10-29 — Struktur Aljabar (aksioma grup)

**Bidang disentuh:** 11 Struktur Aljabar, submateri 'alg-groups', URL: https://descaar.github.io/DMath-Learning/materi/struktur-aljabar/alg-groups/.

**Audit awal dan perbaikan mendesak:** GitHub Actions untuk commit Kalkulus sebelumnya (run 40781394054) gagal karena tiga string epsilon yang tersimpan sebagai escape \u000b pada data/precise-limit-content.ts, ditambah dua penulisan delta yang tidak tepat. Semua diperbaiki pada commit 742e5dcdcccd; GitHub Actions run 40788164284 kemudian berhasil (build dan deployment success). Perbaikan ini menjaga publikasi materi Kalkulus sebelumnya.

**Kekurangan materi awal:** submateri 'alg-groups' hanya berisi dua definisi, dua proposisi, dua contoh singkat, dan latihan generik; belum menguraikan operasi biner sebagai fungsi, bukti penyelesaian persamaan grup, penanganan grup nonabelian, serta perbedaan penjumlahan kelas sisa, perkalian seluruh kelas sisa, dan grup unit modulo $n$.

**Pengayaan:** data/group-axioms-content.ts mengganti sumber generik pada registry, dengan 4 definisi formal dan 4 contoh yang ditautkan langsung (operasi biner, grup, grup abelian, kelas sisa/unit); 8 hasil formal dengan pembuktian bertahap (ketunggalan identitas, ketunggalan invers, pembatalan dua sisi, solusi persamaan dua sisi, invers hasil kali dan invers ganda, grup aditif kelas sisa, grup unit modulo $n$, serta kriteria grup abelian ketika semua unsur kuadratnya identitas); 4 contoh aplikasi tambahan; dan 8 latihan dengan solusi matematis lengkap. Referensi: Dummit–Foote (2004) dan Artin (2011). Materi lama pada submateri lain tetap utuh.

**Visualisasi:** components/GroupAxiomsLab.tsx menyajikan tabel Cayley interaktif, pemilih modulus dan dua unsur, serta diagram SVG aksi unsur untuk tiga struktur: $(\mathbb Z_n,+)$, $(U(n),\cdot)$, dan $(\mathbb Z_n,\cdot)$. Menampilkan ketertutupan, asosiativitas, identitas, keberadaan invers, komutativitas, dan status grup. Fungsi murni lib/group-axioms-explorer.ts membangun tabel dan memeriksa aksioma dengan aritmetika bulat eksak.

**Pengujian:** scripts/audit-group-axioms.mjs terintegrasi ke npm run build, memeriksa 4 definisi dan contoh terhubung, 8 bukti, 8 contoh, 8 solusi, koneksi katalog/komponen, dan semua sel tabel Cayley untuk modulus 2 sampai 12 pada tiga mode. **Status publikasi:** pastikan GitHub Actions pada commit terakhir 'success' sebelum menyatakan halaman terbit.

**Prioritas lanjutan:** 08 Aljabar Linear, khususnya submateri publik yang masih memiliki bukti/latihan singkat; atau 16 Topologi dengan pembuktian aksioma dan visualisasi yang tepat. Jangan mengulang 'alg-groups' atau lima submateri sebelumnya.

## Catatan sesi 2026-10-29 — Kalkulus (definisi presisi limit)

**Bidang disentuh:** 07 Kalkulus, submateri `calc-precise-limit`, URL: https://descaar.github.io/DMath-Learning/materi/kalkulus/calc-precise-limit/.

**Masalah awal:** sumber `expanded-book-content.ts` untuk definisi presisi limit masih menggunakan satu definisi singkat, satu contoh linear, dan pembuktian yang belum menguraikan syarat titik akumulasi, fungsi dengan lubang, fungsi loncatan, kriteria sekuensial, ataupun pembatasan lokal. Visualisasi kalkulus umum tidak menunjukkan hubungan kuantor epsilon–delta dan pelanggarannya.

**Perbaikan yang di-commit:** membuat `data/precise-limit-content.ts` berisi 6 definisi formal yang langsung dipasangkan dengan 6 contoh terbahas, 8 hasil formal dengan pembuktian lengkap (ketunggalan limit, independensi nilai pada titik, limit linear, limit kuadrat, keterbatasan lokal, kriteria sekuensial dua arah, kriteria limit satu sisi dua arah, dan teorema apit), 2 contoh aplikasi tambahan, serta 8 latihan bertingkat dengan solusi matematis mendalam. Pengantar membedakan limit dari nilai fungsi dan menjelaskan urutan kuantor. Rujukan Stewart (2016) dan Bartle–Sherbert (2011). Materi ini menggantikan konten generik pada registry, tanpa mengubah materi lain.

**Visualisasi:** `components/PreciseLimitLab.tsx` menyediakan SVG responsif dengan pita epsilon horizontal dan pita delta vertikal, empat fungsi (linear, kuadrat, lubang yang dapat dihilangkan, dan loncatan), pemilih epsilon, pengali delta, indikator validitas, serta saksi numerik eksplisit untuk radius yang tidak sah. Fungsi matematika murni `lib/precise-limit-explorer.ts` menghitung radius sah terbesar dan saksi pelanggaran. SVG ditempatkan pada pengantar dan bagian visualisasi.

**Pengujian:** `scripts/audit-precise-limit.mjs` diintegrasikan ke `npm run build` untuk memeriksa tautan definisi–contoh, pembuktian, latihan, hubungan katalog, aksesibilitas SVG, sampel numerik untuk radius sah, dan konstruksi saksi saat radius gagal. **Status publikasi:** jangan klaim berhasil sebelum GitHub Actions pada commit dokumentasi terakhir menunjukkan `success`.

**Prioritas lanjutan:** 08 Aljabar Linear (pilih satu submateri publik dengan bukti/latihan dangkal) atau 11 Struktur Aljabar (misalnya aksioma grup dan subgrup). Pertimbangkan 02 Aljabar ketika rute publiknya dipastikan; jangan mengubah kebijakan visibilitas materi sekolah. Jangan mengulang `calc-precise-limit`, `aplikasi-supremum`, `nt-euclid-division`, `gt-definitions`, atau `komb-perfect-covers`.

## Catatan sesi 2026-10-29 — Analisis Real (aplikasi supremum)

**Bidang disentuh:** 09 Analisis Real, submateri aplikasi-supremum, URL: https://descaar.github.io/DMath-Learning/materi/analisis-real/aplikasi-supremum/.

**Masalah awal:** materi lama memiliki klaim eksistensi akar kuadrat positif tanpa bukti; kerapatan rasional hanya diuraikan sangat singkat; definisi tidak mempunyai contoh langsung yang lengkap; jawaban latihan sebagian berupa satu kalimat. Materi publik Aritmetika (pecahan) saat ini dinonaktifkan oleh lib/public-content.ts, sehingga pengayaan diarahkan pada submateri Analisis Real yang benar-benar mempunyai rute publik. Jangan mengubah kebijakan publikasi tingkat SD/SMP/SMA tanpa permintaan pengguna.

**Perbaikan:** membuat sumber khusus data/supremum-applications-content.ts dengan 5 definisi formal (sifat Archimedean, himpunan padat, fungsi lantai, akar kuadrat positif, irasional), masing-masing dengan contoh yang ditautkan eksplisit; 8 hasil formal yang semuanya memiliki pembuktian lengkap (Archimedean, pemilihan $1/n$, eksistensi/keunikan lantai, kerapatan rasional, eksistensi/keunikan akar kuadrat positif melalui supremum, irasionalitas akar dua, kerapatan irasional, dan batas galat metode pembagian dua); 8 contoh terbahas; serta 8 latihan bertingkat dengan solusi substantif. Pembuktian keberadaan akar menguraikan dua kasus kontradiksi $x^2<a$ dan $x^2>a$ secara terpisah. Rujukan Bartle–Sherbert (2011) dan Rudin (1976) dicantumkan.

**Visualisasi:** components/SupremumApplicationsLab.tsx menyajikan tiga mode SVG interaktif: saksi Archimedean pada garis bilangan, pecahan rasional yang berada ketat di dalam interval dengan empat preset (termasuk interval negatif dan ujung irasional), serta pengurungan akar kuadrat melalui pembagian dua sampai 12 langkah. Fungsi matematika murni yang dapat diuji terpisah berada di lib/supremum-explorer.ts; visualisasi tampil pada pengantar dan bagian visualisasi.

**Pengujian:** scripts/audit-supremum-applications.mjs diintegrasikan ke npm run build untuk memeriksa contoh-definisi, bukti, solusi, koneksi katalog, aksesibilitas SVG, konstruksi saksi rasional di 1.830 interval, dan pengurungan akar pada 143 kombinasi input/langkah. **Status publikasi:** hanya dinyatakan berhasil setelah GitHub Actions untuk commit final menunjukkan success.

**Prioritas lanjutan:** 02 Aljabar atau 07 Kalkulus yang mempunyai halaman publik, atau 09 Analisis Real lain yang belum lengkap; rotasikan bidang agar semua 26 memperoleh pengayaan. Jangan mengulang aplikasi-supremum, nt-euclid-division, gt-definitions, atau komb-perfect-covers.

## Catatan sesi 2026-10-29 — Teori Bilangan (pembagian Euclid)

**Bidang disentuh:** 03 Teori Bilangan, submateri `nt-euclid-division` (Lemma Pembagian Euclid), URL: https://descaar.github.io/DMath-Learning/materi/teori-bilangan-olimpiade/nt-euclid-division/.

**Masalah awal:** halaman berasal dari generator umum; pernyataan formal dan contoh tidak mengembangkan pembuktian keberadaan/ketunggalan hasil bagi-sisa, penanganan bilangan negatif, atau interpretasi geometri yang spesifik. Materi generik diganti, bukan sekadar ditumpuk dengan teks baru.

**Perbaikan:** menambahkan `data/euclidean-division-content.ts` dengan 4 definisi formal dan 4 contoh yang terhubung langsung (hasil bagi dan sisa, keterbagian, fungsi lantai, kongruensi), 5 hasil formal yang semuanya dibuktikan (eksistensi-keunikan, rumus fungsi lantai, invariansi sisa, kesamaan sisa iff kongruensi, kriteria sisa nol), 4 contoh aplikasi tambahan, serta 8 latihan konkret dengan solusi lengkap. Bukti teorema utama menggunakan prinsip urutan baik, argumentasi batas sisa, dan ketunggalan; kedua arah iff ditulis eksplisit. Referensi Burton (2011) dan Rosen (2011) disebutkan di materi.

**Visualisasi:** `components/EuclideanDivisionLab.tsx` menyediakan garis bilangan SVG yang menunjukkan dua kelipatan pembagi berurutan, titik bilangan dibagi, ruas sisa, himpunan sisa mungkin, empat preset termasuk bilangan negatif, dan tombol ubah bilangan/pembagi. Komponen ditampilkan baik pada pengantar maupun bagian visualisasi khusus, menggantikan visualisasi teori bilangan generik untuk halaman ini.

**Pengujian:** `scripts/audit-euclidean-division.mjs` terintegrasi ke `npm run build`; memeriksa jumlah dan keterkaitan definisi-contoh, bukti dan latihan, hubungan katalog/komponen, serta 1.452 pasangan input bilangan dan pembagi berikut ketunggalan sisa dan periodisitas. **Status publikasi:** tunggu GitHub Actions run terakhir selesai dengan status success; jangan mengklaim terbit sebelum terverifikasi.

**Commit utama:** `94a2b2ab62ce` (konten), `832f40d89313` (SVG), `3be2601ec3aa` (katalog), `cad7bb641ebd` (render), `78c917db0cea` (audit), `8d9397ca2cfd` (build), `39169bfbfbc` (penyesuaian audit).

## Catatan sesi 2026-10-29 — Teori Graf (sesi lanjutan)

**Bidang disentuh:** 15 Teori Graf, submateri `gt-definitions` (Definisi Dasar Graf).

**Masalah awal:** halaman lama dibentuk dari teks generik, hanya dua definisi dan satu lemma yang sangat ringkas, contoh tidak terikat secara lengkap pada definisi, serta visualisasi umum belum memeriksa derajat, matriks ketetanggaan, atau isomorfisme secara konkret.

**Perbaikan yang di-commit:** membuat sumber materi khusus `data/graph-definitions-content.ts` dan menghubungkannya ke katalog, berisi 7 definisi formal (graf sederhana, ketetanggaan/insidensi, derajat, subgraf, isomorfisme, matriks ketetanggaan, barisan derajat), 7 hasil formal dengan pembuktian rinci (lemma jabat tangan, paritas derajat ganjil, batas sisi, invariansi isomorfisme, identitas matriks, karakterisasi isomorfisme dengan matriks permutasi, serta sifat derajat subgraf), 7 contoh yang ditautkan langsung ke definisi ditambah satu contoh pembeda, dan 8 latihan bersolusi substantif. Pengantar menjelaskan hubungan data sisi, gambar, dan matriks; rujukan akademis tercantum di materi.

**Visualisasi:** komponen `GraphDefinitionsLab.tsx` menggambar 5 graf dengan SVG (lintasan P4, P4 dengan pelabelan berbeda, bintang K1,3, siklus C6, dan dua segitiga terpisah). Pilihan interaktif menampilkan matriks ketetanggaan, derajat per simpul, barisan derajat, jumlah simpul ganjil, dan verifikasi `Σ deg(v)=2|E|`. Perbandingan memperlihatkan graf isomorfik serta dua jenis kontra-contoh untuk uji isomorfisme.

**Pengujian:** menambah `scripts/audit-graph-definitions.mjs` ke `npm run build`, yang memeriksa keterhubungan contoh-definisi, kelengkapan pembuktian/latihan, kesahihan 5 graf, bijeksi isomorfisme, perbedaan derajat, jumlah segitiga, dan aksesibilitas SVG. **Status build/deploy:** verifikasi GitHub Actions diperlukan setelah commit dokumentasi terakhir; jangan menganggap terbit sebelum run final berhasil.

**URL:** https://descaar.github.io/DMath-Learning/materi/teori-graf/gt-definitions/

**Komit awal sesi:** `ab0770f49a4a` (konten), `cf82f0d63f55` (katalog), `072ea3ecfd28` (SVG), `e58314c87701` (render), `8cafac7e2d3b` (audit), `667cbc51d914` (build).

## Catatan sesi 2026-10-29 (Asia/Jakarta)

**Bidang disentuh:** 04 Kombinatorika, submateri `komb-perfect-covers` (papan catur, domino, dan batang `b`-omino).

**Masalah yang ditangani:** pembuktian lama untuk kriteria penutupan `b`-omino memakai perhitungan sisa warna yang tidak sah; definisi tidak langsung memiliki contoh terkait; visualisasi umum kombinatorika tidak menunjukkan invariant pewarnaan.

**Perbaikan:** mengganti pembuktian dengan bobot akar kesatuan primitif; menambahkan 3 definisi dan 3 contoh yang terhubung, proposisi invariant warna, lemma ekuivalensi penutupan–matching, teorema kriteria batang, akibat kriteria domino, serta kontra-contoh syarat perlu bukan syarat cukup. Menambah 6 latihan dengan jawaban bertahap, 3 contoh aplikasi tambahan, dan visualisasi SVG interaktif empat konfigurasi (papan utuh, dua sudut berseberangan, dua sudut bertetangga, warna seimbang tetapi petak terisolasi). Audit khusus `npm run audit:tilings` terintegrasi ke `npm run build`.

**URL:** https://descaar.github.io/DMath-Learning/materi/kombinatorika/komb-perfect-covers/

**Status:** perubahan Kombinatorika terbit setelah GitHub Actions run 40746276536 berstatus success (commit c0191488d533).

## Cakupan 26 bidang

| No. | Bidang | Status pengayaan mendalam |
| --- | --- | --- |
| 01 | Aritmetika | Belum diaudit pada rangkaian ini |
| 02 | Aljabar | Belum diaudit pada rangkaian ini |
| 03 | Teori Bilangan | **1 submateri diperbaiki:** `nt-euclid-division`; bidang belum selesai |
| 04 | Kombinatorika | **1 submateri diperbaiki:** `komb-perfect-covers`; bidang belum selesai |
| 05 | Geometri | Belum diaudit pada rangkaian ini |
| 06 | Trigonometri | Belum diaudit pada rangkaian ini |
| 07 | Kalkulus | **1 submateri diperbaiki:** `calc-precise-limit`; bidang belum selesai |
| 08 | Aljabar Linear | **1 submateri diperbaiki:** `la-subspaces`; bidang belum selesai |
| 09 | Analisis Real | **1 submateri diperbaiki:** aplikasi-supremum; bidang belum selesai |
| 10 | Analisis Kompleks | **1 submateri diperbaiki:** `himpunan-di-bidang-kompleks`; bidang belum selesai |
| 11 | Struktur Aljabar | **1 submateri diperbaiki:** `alg-groups`; bidang belum selesai |
| 12 | Statistika | Belum diaudit pada rangkaian ini |
| 13 | Peluang | Belum diaudit pada rangkaian ini |
| 14 | Matematika Diskrit | Belum diaudit pada rangkaian ini |
| 15 | Teori Graf | **1 submateri diperbaiki:** `gt-definitions`; bidang belum selesai |
| 16 | Topologi | Belum diaudit pada rangkaian ini |
| 17 | Persamaan Diferensial | Belum diaudit pada rangkaian ini |
| 18 | Analisis Numerik | Belum diaudit pada rangkaian ini |
| 19 | Metode Numerik | Belum diaudit pada rangkaian ini |
| 20 | Optimisasi | Belum diaudit pada rangkaian ini |
| 21 | Pemodelan Matematika | Belum diaudit pada rangkaian ini |
| 22 | Riset Operasi | Belum diaudit pada rangkaian ini |
| 23 | Statistika Terapan | Belum diaudit pada rangkaian ini |
| 24 | Statistika Matematika | Belum diaudit pada rangkaian ini |
| 25 | Kalkulus Stokastik | Belum diaudit pada rangkaian ini |
| 26 | Teori Ukuran & Probabilitas | Belum diaudit pada rangkaian ini |

## Antrian sesi berikutnya

1. **16 Topologi / 17 Persamaan Diferensial:** cari rute publik dan pilih submateri berbeda yang memiliki bukti terlalu singkat. Topologi saat ini banyak berada di dalam Analisis Real, bukan kategori buku tersendiri; jangan menciptakan klaim rute publik yang tidak ada.
2. **18 Analisis Numerik:** periksa materi galat atau iterasi Newton yang masih generik dan buat visualisasi yang benar-benar menguji konvergensi.
3. **01 Aritmetika / 02 Aljabar:** materi sekolah sengaja disembunyikan oleh kebijakan visibilitas. Jangan mengubahnya tanpa permintaan eksplisit.

**Progres pekerjaan yang di-commit pada level submateri:** 8 submateri di 8 dari 26 bidang telah dikerjakan secara mendalam; 18 bidang belum disentuh dalam rangkaian ini. Tidak satu pun bidang dinyatakan selesai seluruhnya. Periksa GitHub Actions dan material-depth-report.json sebelum melaporkan status publikasi atau memilih pekerjaan berikutnya.
