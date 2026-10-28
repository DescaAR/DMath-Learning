# DMath Learning — pengayaan materi dan audit matematis

Dokumen ini melacak perubahan **yang sudah di-commit** pada branch `github-pages-static`, bukan menganggap seluruh bidang selesai setelah satu submateri. Jangan ubah branch `main`. Setiap sesi: periksa riwayat commit, pilih submateri berbeda yang masih dangkal/keliru, sempurnakan materi dan visualisasi, jalankan build, lalu perbarui catatan ini dengan bukti perubahan.

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
| 08 | Aljabar Linear | Belum diaudit pada rangkaian ini |
| 09 | Analisis Real | **1 submateri diperbaiki:** aplikasi-supremum; bidang belum selesai |
| 10 | Analisis Kompleks | Belum diaudit pada rangkaian ini |
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

1. **08 Aljabar Linear / 16 Topologi:** pilih satu submateri dengan rute publik dan pembuktian atau latihan yang masih dangkal; prioritaskan pengayaan menyeluruh dengan visualisasi matematis khusus.
2. **09 Analisis Real lanjutan:** pilih submateri berbeda, misalnya nilai-mutlak-dan-garis-real atau barisan-dan-limit, dan audit semua hipotesis sebelum menambah teorema.
3. **01 Aritmetika:** submateri pecahan sudah ada dalam sumber, tetapi rute tingkat SD dan slug-nya sengaja disembunyikan oleh lib/public-content.ts. Jangan mengubah visibilitas tanpa arahan eksplisit; pilih dahulu bidang yang memiliki halaman publik.

**Progres pekerjaan yang di-commit pada level submateri:** 6 submateri di 6 dari 26 bidang telah dikerjakan secara mendalam; 20 bidang belum disentuh dalam rangkaian ini. Tidak satu pun bidang dinyatakan selesai seluruhnya. Periksa GitHub Actions dan material-depth-report.json sebelum melaporkan status publikasi atau memilih pekerjaan berikutnya.
