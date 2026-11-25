import type { CompetitionProblem } from "@/data/competition-problems";

// Classification is editorial metadata; it never modifies the source statement.
// Prefer a specific mathematical subject; retain the original broad topic when uncertain.
const rules: Readonly<Record<string, readonly (readonly [RegExp,string])[]>> = {
 "Analisis Real":[
  [/barisan|deret|rekurs|rekurensi|asimtotik jumlah|limit iteratif|limit jumlah pangkat|limit jumlah binomial/,"Barisan dan Deret"],
  [/supremum|infimum|interval/,"Supremum dan Infimum"],
  [/integral|riemann/,"Integral Riemann"],
  [/konvergensi seragam|baire/,"Barisan Fungsi"],
  [/turunan|terdiferensial|diferensial|garis singgung/,"Turunan"],
  [/limit/,"Limit Fungsi"],
  [/kontinu/,"Kekontinuan"],
  [/ketaksamaan|batas kuadratik|rata-rata geometri/,"Ketaksamaan"],
  [/trigonometri|sinus|tangen/,"Trigonometri"],
  [/logaritmik/,"Eksponen dan Logaritma"],
  [/subruang|ruang fungsi/,"Ruang Vektor"]
 ],
 "Aljabar Linear":[
  [/determinan|minor utama/,"Determinan"],
  [/eigen|spektrum/,"Nilai Eigen dan Vektor Eigen"],
  [/basis|dimensi ruang|dimensi irisan|subruang/,"Ruang Vektor"],
  [/pemetaan linear|peta komposisi|inti dan peta/,"Transformasi Linear"],
  [/rank|eselon|operasi baris|operasi kolom/,"Rank dan Operasi Matriks"],
  [/ortogonal|hasil kali silang/,"Vektor"],
  [/matriks|komutator|trace/,"Matriks"]
 ],
 "Struktur Aljabar":[
  [/ideal|gelanggang|daerah integral|pembagi nol/,"Teori Gelanggang"],
  [/lapangan|polinomial tak tereduksi|faktorisasi polinomial/,"Lapangan dan Polinomial"],
  [/homomorfisme|automorfisme/,"Homomorfisme Grup"],
  [/subgrup|koset/,"Subgrup"],
  [/grup|elemen berorde|permutasi/,"Teori Grup"]
 ],
 "Analisis Kompleks":[
  [/deret pangkat|taylor/,"Deret Pangkat"],
  [/holomorfik/,"Fungsi Holomorfik"],
  [/modulus|akar satuan|bilangan kompleks/,"Bilangan Kompleks"]
 ],
 "Statistika":[[/median|modus|rata-rata/,"Statistika Deskriptif"]],
 "Peluang":[[/ekspektasi|strategi optimal/,"Nilai Harapan"],[/sampel acak/,"Peluang Diskrit"],[/poligon|selubung konveks/,"Peluang Geometris"],[/dadu|koin|peluang/,"Peluang Diskrit"]],
 "Aritmetika":[
  [/barisan|deret|pola|kelipatan|berselang-seling/,"Pola Bilangan"],
  [/waktu|kalender|tanggal|hari dalam|jarak|laju|gerak/,"Jarak, Waktu, dan Kecepatan"],
  [/persentase|pajak/,"Persentase"],
  [/perbandingan|rasio|proporsi|kadar/,"Perbandingan"],
  [/pecahan|penyebut|desimal/,"Pecahan dan Desimal"],
  [/digit|pembulatan|pengurutan|bilangan terdekat/,"Bilangan"],
  [/uang|gaji|biaya|sumbangan/,"Aritmetika Sosial"],
  [/operasi|penjumlahan|pembagian|jumlah/,"Operasi Hitung"]
 ],
 "Aljabar":[
  [/barisan|deret|rekurs|rekurensi|suku pertama|banyak suku/,"Barisan dan Deret"],
  [/ketaksamaan|pertidaksamaan|batas tajam/,"Ketaksamaan"],
  [/persamaan fungsi|fungsi aquaesulian|fungsi yang mempertahankan|karakterisasi fungsi|komposisi fungsi|fungsi dengan/,"Persamaan Fungsi"],
  [/trigonometri/,"Trigonometri"],
  [/polinomial|koefisien|interpolasi/,"Polinomial"],
  [/eksponen|eksponensial|logaritma|logaritmik|perpangkatan/,"Eksponen dan Logaritma"],
  [/nilai mutlak/,"Nilai Mutlak"],
  [/bentuk akar/,"Bentuk Akar"],
  [/sistem persamaan/,"Sistem Persamaan"],
  [/persamaan kuadrat|parabola/,"Persamaan Kuadrat"],
  [/persamaan linear|usia|gerbong/,"Persamaan Linear"],
  [/persamaan/,"Persamaan Aljabar"],
  [/fungsi lantai|fungsi/,"Fungsi"],
  [/maksimum|optimasi|minimum/,"Optimasi"]
 ],
 "Teori Bilangan":[
  [/fpb|kpk|koprimalitas|greatest common divisor/,"FPB dan KPK"],
  [/kongruensi|residu|modulo|paritas|digit terakhir/,"Kongruensi"],
  [/persamaan|triple|pasangan bilangan/,"Persamaan Diophantine"],
  [/prima/,"Bilangan Prima"],
  [/pembagi|keterbagian|kelipatan|divisor/,"Keterbagian"],
  [/barisan|iterasi|rekurensi/,"Barisan Bilangan Bulat"],
  [/digit|desimal|representasi/,"Representasi Bilangan"],
  [/faktorial/,"Faktorial"],
  [/kuadrat sempurna|kubik sempurna|pangkat/,"Bilangan Berpangkat"]
 ],
 "Kombinatorika":[
  [/graf|tetangga|clique|sisi graf|simpul|hubungan pertemanan/,"Teori Graf"],
  [/permainan|strategi|giliran|pemburu|pembohong|pengkhianat/,"Strategi Permainan"],
  [/lintasan|lompatan|rute|jalur/,"Lintasan dan Kisi"],
  [/ubin|tiling|penutupan|papan|kisi|susunan kubus/,"Kombinatorika Geometri"],
  [/permutasi|pengurutan|urutan|susunan huruf|susunan bilangan/,"Permutasi"],
  [/peluang|ekspektasi/,"Peluang"],
  [/rekurensi|barisan|iterasi/,"Relasi Rekurensi"],
  [/pewarnaan|warna/,"Pewarnaan"],
  [/partisi|pembagian|penempatan|pemilihan|pasangan|himpunan bagian|distribusi|banyak cara|pencacahan/,"Kaidah Pencacahan"]
 ],
 "Geometri":[
  [/koordinat|gradien|garis pada bidang|garis pemisah/,"Geometri Analitik"],
  [/kubus|balok|volume|prisma|piramida|ruang|kerucut|tabung|bola/,"Bangun Ruang"],
  [/lingkaran|konsiklik|tali busur|busur|garis singgung/,"Geometri Lingkaran"],
  [/segitiga|incenter|incentre|ortosenter|garis bagi|pythagoras/,"Geometri Segitiga"],
  [/segiempat|persegi|trapesium|jajargenjang|layang-layang|poligon|segi enam|segienam|segi delapan/,"Bangun Datar"],
  [/luas|keliling/,"Luas dan Keliling"],
  [/sudut|sejajar|kekonkuren|kolinear/,"Garis dan Sudut"],
  [/refleksi|rotasi|translasi|transformasi/,"Transformasi Geometri"]
 ]
};

const overrides: Readonly<Record<string,string>>={
 "imc-2026-01":"Trigonometri",
 "imc-2026-02":"Matriks",
 "imc-2026-03":"Permutasi",
 "imc-2026-04":"Barisan dan Deret",
 "imc-2026-05":"Polinomial",
 "imc-2026-06":"Turunan",
 "imc-2026-07":"Luas dan Keliling",
 "imc-2026-08":"Nilai Eigen dan Vektor Eigen",
 "imc-2026-09":"Barisan dan Deret",
 "imc-2026-10":"Kombinatorika Geometri",
 "imc-2019-01":"Hasil Kali Tak Hingga",
 "imc-2019-02":"Sistem Persamaan Linear",
 "imc-2019-03":"Integral",
 "imc-2019-04":"Barisan dan Deret",
 "imc-2019-06":"Turunan",
 "imc-2019-07":"Barisan dan Deret",
 "imc-2019-10":"Peluang Geometris",
 "univ-001":"Barisan dan Deret",
 "univ-005":"Barisan Fungsi",
 "imc-2024-06":"Fungsi",
 "iymc-2022-qr-b":"Barisan dan Deret",
 "iymc-2021-qr-a":"Barisan dan Deret",
 "iymc-2024-qr-a":"Barisan dan Deret",
 "iymc-2025-qr-a":"Barisan dan Deret",
 "imo-2024-01":"Fungsi Lantai",
 "imo-2018-03":"Pola Bilangan",
 "imo-2022-01":"Kombinatorika"
};

export function materialOf(p: Pick<CompetitionProblem,"id"|"topic"|"title">): string {
 const explicit=overrides[p.id];
 if(explicit)return explicit;
 const title=p.title.toLocaleLowerCase("id");
 return rules[p.topic]?.find(([pattern])=>pattern.test(title))?.[1]??p.topic;
}
