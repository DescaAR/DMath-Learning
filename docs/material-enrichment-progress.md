# DMath Learning — pengayaan materi dan audit matematis

Dokumen ini melacak perubahan **yang sudah di-commit** pada branch `github-pages-static`, bukan menganggap seluruh bidang selesai setelah satu submateri. Jangan ubah branch `main`. Setiap sesi: periksa riwayat commit, pilih submateri berbeda yang masih dangkal/keliru, sempurnakan materi dan visualisasi, jalankan build, lalu perbarui catatan ini dengan bukti perubahan.

## Catatan sesi 2026-10-29 (Asia/Jakarta)

**Bidang disentuh:** 04 Kombinatorika, submateri `komb-perfect-covers` (papan catur, domino, dan batang `b`-omino).

**Masalah yang ditangani:** pembuktian lama untuk kriteria penutupan `b`-omino memakai perhitungan sisa warna yang tidak sah; definisi tidak langsung memiliki contoh terkait; visualisasi umum kombinatorika tidak menunjukkan invariant pewarnaan.

**Perbaikan:** mengganti pembuktian dengan bobot akar kesatuan primitif; menambahkan 3 definisi dan 3 contoh yang terhubung, proposisi invariant warna, lemma ekuivalensi penutupan–matching, teorema kriteria batang, akibat kriteria domino, serta kontra-contoh syarat perlu bukan syarat cukup. Menambah 6 latihan dengan jawaban bertahap, 3 contoh aplikasi tambahan, dan visualisasi SVG interaktif empat konfigurasi (papan utuh, dua sudut berseberangan, dua sudut bertetangga, warna seimbang tetapi petak terisolasi). Audit khusus `npm run audit:tilings` terintegrasi ke `npm run build`.

**URL:** https://descaar.github.io/DMath-Learning/materi/kombinatorika/komb-perfect-covers/

**Status:** commit tercatat; status build/deploy harus diverifikasi melalui GitHub Actions setelah commit terakhir. Jangan menganggap perubahan telah terbit sebelum run terbaru sukses.

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
| 15 | Teori Graf | Belum diaudit pada rangkaian ini |
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

1. **Teori Graf**, `gt-definitions`: audit definisi graf sederhana, derajat, isomorfisme, subgraf, contoh definisi, lemma jabat tangan dengan pembuktian lengkap, visualisasi graf yang benar.
2. **Aritmetika atau Teori Bilangan**: pilih satu submateri dengan kekurangan matematis terbesar berdasarkan isi aktual dan laporan `material-depth-report.json`.
3. **Analisis Real**: periksa keketatan argumen dan contoh yang terkait definisi tanpa mengulang halaman yang sudah matang.

**Aturan progres:** `1/26 bidang disentuh` tidak berarti `1/26 bidang selesai`. Laporkan jumlah submateri dan hasil audit nyata, bukan angka kelengkapan yang direkayasa. Catat commit dan status deployment pada sesi selanjutnya.
