# DMath Learning — pengayaan materi dan audit matematis

Dokumen ini melacak perubahan **yang sudah di-commit** pada branch `github-pages-static`, bukan menganggap seluruh bidang selesai setelah satu submateri. Jangan ubah branch `main`. Setiap sesi: periksa riwayat commit, pilih submateri berbeda yang masih dangkal/keliru, sempurnakan materi dan visualisasi, jalankan build, lalu perbarui catatan ini dengan bukti perubahan.

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
| 03 | Teori Bilangan | Belum diaudit pada rangkaian ini |
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

1. **Teori Bilangan atau Aritmetika**: audit dan perkaya satu submateri yang masih memiliki argumen salah atau contoh dangkal, beserta visualisasi khusus dan latihan lengkap.
2. **Analisis Real**: pilih submateri dengan definisi atau bukti yang masih terlalu ringkas; tambahkan contoh terhubung dan pembuktian valid.
3. **Teori Graf lanjutan**, `gt-examples` atau `gt-connectivity`: pastikan graf bipartit, lintasan, siklus, dan keterhubungan mempunyai definisi presisi, pembuktian lengkap, serta ilustrasi khusus. Jangan mengulang `gt-definitions`.

**Progres terverifikasi pada level submateri:** 2 submateri di 2 dari 26 bidang sudah dikerjakan secara mendalam; 24 bidang belum disentuh dalam rangkaian ini. Dua bidang yang disentuh belum berarti seluruh isi bidang selesai. Pantau `material-depth-report.json` dan riwayat commit sebelum memilih pekerjaan baru.
