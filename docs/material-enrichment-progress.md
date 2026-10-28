# DMath Learning — pengayaan materi dan audit matematis

Dokumen ini melacak perubahan **yang sudah di-commit** pada branch `github-pages-static`, bukan menganggap seluruh bidang selesai setelah satu submateri. Jangan ubah branch `main`. Setiap sesi: periksa riwayat commit, pilih submateri berbeda yang masih dangkal/keliru, sempurnakan materi dan visualisasi, jalankan build, lalu perbarui catatan ini dengan bukti perubahan.

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
| 07 | Kalkulus | Belum diaudit pada rangkaian ini |
| 08 | Aljabar Linear | Belum diaudit pada rangkaian ini |
| 09 | Analisis Real | Belum diaudit pada rangkaian ini |
| 10 | Analisis Kompleks | Belum diaudit pada rangkaian ini |
| 11 | Struktur Aljabar | Belum diaudit pada rangkaian ini |
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

1. **Aritmetika**: pilih satu submateri (misalnya pecahan atau bilangan bulat) yang masih dangkal; tulis pembuktian lengkap dan visualisasi khusus. Jangan mengulang `nt-euclid-division`.
2. **Analisis Real**: pilih submateri dengan definisi atau bukti yang masih terlalu ringkas; tambahkan contoh terhubung dan pembuktian valid.
3. **Teori Graf lanjutan**, `gt-examples` atau `gt-connectivity`: pastikan graf bipartit, lintasan, siklus, dan keterhubungan mempunyai definisi presisi, pembuktian lengkap, serta ilustrasi khusus. Jangan mengulang `gt-definitions`.

**Progres pekerjaan yang di-commit pada level submateri:** 3 submateri di 3 dari 26 bidang telah dikerjakan secara mendalam; 23 bidang belum disentuh dalam rangkaian ini. Status terbit untuk sesi terbaru hanya boleh dikonfirmasi setelah GitHub Actions berhasil. Ketiga bidang yang disentuh belum berarti seluruh isi bidang selesai. Pantau `material-depth-report.json` dan riwayat commit sebelum memilih pekerjaan baru.
