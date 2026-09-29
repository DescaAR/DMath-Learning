export type Language = "id" | "en";

export const UI_TRANSLATIONS: Record<string, string> = {
  "Beranda": "Home",
  "Belajar": "Learn",
  "Materi": "Materials",
  "Bank Soal": "Problem Bank",
  "Olimpiade": "Olympiad",
  "Pembahasan": "Solutions",
  "Bimbingan": "Tutoring",
  "Riset": "Research",
  "Tentang": "About",
  "Cari": "Search",
  "Semua": "All",
  "Semua Konten": "All Content",
  "Semua Jenjang": "All Levels",
  "Semua Jalur": "All Tracks",
  "Materi Reguler": "Regular Materials",
  "Soal": "Problems",
  "Teorema": "Theorems",
  "Definisi": "Definitions",
  "Contoh": "Examples",
  "Halaman": "Pages",
  "Jenjang": "Level",
  "Jalur": "Track",
  "Jenis Konten": "Content Type",
  "Kuliah": "University",
  "Reguler": "Regular",
  "Kompetisi": "Competition",
  "Hasil pencarian": "Search Results",
  "Tidak ada hasil yang cukup mirip.": "No sufficiently similar results found.",
  "Coba kata kunci lain atau ubah filter.": "Try another keyword or change the filters.",
  "hasil": "results",
  "hasil serupa": "similar results",
  "Filter aktif": "Active filters",
  "Hapus semua filter": "Clear all filters",
  "Acak Soal": "Random Problem",
  "Subbab": "Subchapter",
  "Kesulitan": "Difficulty",
  "Tipe": "Type",
  "Dasar": "Basic",
  "Menengah": "Intermediate",
  "Sulit": "Advanced",
  "Sangat Sulit": "Very Advanced",
  "Konsep": "Concept",
  "Hitungan": "Computation",
  "Pembuktian": "Proof",
  "Construction": "Construction",
  "Diketahui": "Given",
  "Dibuktikan / Dicari": "To Prove / Find",
  "Ide Utama": "Main Idea",
  "Pembahasan Langkah demi Langkah": "Step-by-Step Solution",
  "Jawaban Akhir": "Final Answer",
  "Metode Alternatif": "Alternative Method",
  "Kesalahan Umum": "Common Mistakes",
  "Insight / Generalisasi": "Insight / Generalization",
  "Lihat Pembahasan": "Show Solution",
  "Tutup Pembahasan": "Hide Solution",
  "Sembunyikan Hint 1": "Hide Hint 1",
  "Sembunyikan Hint 2": "Hide Hint 2",
  "Soal Sebelumnya": "Previous Problem",
  "Soal Berikutnya": "Next Problem",
  "Sebelumnya": "Previous",
  "Berikutnya": "Next",
  "Buka Soal": "Open Problem",
  "Buka Bank Soal": "Open Problem Bank",
  "Buka 100 Bank Soal": "Open 100 Problems",
  "Mulai Latihan": "Start Practice",
  "Latihan terkurasi": "Curated Practice",
  "Perpustakaan materi": "Material Library",
  "Pilih jalur belajar": "Choose a Learning Track",
  "Topik utama": "Main Topics",
  "Materi published": "Published Materials",
  "Tujuan Pembelajaran": "Learning Objectives",
  "Peta Konsep": "Concept Map",
  "Motivasi & Intuisi": "Motivation & Intuition",
  "Notasi": "Notation",
  "Definisi Formal": "Formal Definitions",
  "Teorema & Bukti": "Theorems & Proofs",
  "Worked Examples": "Worked Examples",
  "Keterhubungan Konsep": "Concept Connections",
  "Referensi": "References",
  "Prasyarat": "Prerequisites",
  "Overview": "Overview",
  "Ringkasan": "Summary",
  "Mengapa teorema ini penting?": "Why is this theorem important?",
  "Bukti": "Proof",
  "Bacaan lanjutan": "Further Reading",
  "Materi terkait": "Related Materials",
  "Lanjutkan": "Continue",
  "Buka Materi": "Open Materials",
  "Materi Lain": "Other Materials",
  "Ganti ke Bahasa Inggris": "Switch to English",
  "Switch to Indonesian": "Ganti ke Bahasa Indonesia"
};

const PHRASES: Array<[string, string]> = [
  ["dengan demikian", "therefore"],
  ["oleh karena itu", "therefore"],
  ["jika dan hanya jika", "if and only if"],
  ["untuk setiap", "for every"],
  ["untuk sebarang", "for any"],
  ["diambil sebarang", "take an arbitrary"],
  ["diambil", "take"],
  ["misalkan", "suppose"],
  ["andaikan", "assume"],
  ["diberikan", "given"],
  ["tentukan", "determine"],
  ["buktikan", "prove"],
  ["selidiki", "investigate"],
  ["tunjukkan", "show"],
  ["jelaskan", "explain"],
  ["hitung", "compute"],
  ["diperoleh", "we obtain"],
  ["berlaku", "holds"],
  ["merupakan", "is"],
  ["disebut", "is called"],
  ["didefinisikan sebagai", "is defined as"],
  ["berdimensi hingga", "finite-dimensional"],
  ["ruang vektor", "vector space"],
  ["himpunan solusi", "solution set"],
  ["kombinasi linear", "linear combination"],
  ["bebas linear", "linearly independent"],
  ["bergantung linear", "linearly dependent"],
  ["ruang kolom", "column space"],
  ["ruang baris", "row space"],
  ["ruang solusi", "solution space"],
  ["bentuk eselon baris tereduksi", "reduced row echelon form"],
  ["bentuk eselon baris", "row echelon form"],
  ["nilai eigen", "eigenvalue"],
  ["vektor eigen", "eigenvector"],
  ["persamaan linear", "linear equation"],
  ["sistem persamaan", "system of equations"],
  ["sistem linear", "linear system"],
  ["garis bilangan", "number line"],
  ["pecahan senilai", "equivalent fractions"],
  ["bilangan bulat", "integer"],
  ["bilangan real", "real number"],
  ["bilangan kompleks", "complex number"],
  ["teori bilangan", "number theory"],
  ["analisis real", "real analysis"],
  ["analisis kompleks", "complex analysis"],
  ["aljabar linear", "linear algebra"],
  ["struktur aljabar", "abstract algebra"],
  ["teori graf", "graph theory"],
  ["kesalahan umum", "common mistakes"],
  ["ide utama", "main idea"],
  ["jawaban akhir", "final answer"],
  ["metode alternatif", "alternative method"],
  ["langkah demi langkah", "step by step"],
  ["salah satu basis", "one possible basis"],
  ["berada dalam", "belongs to"],
  ["tidak berada dalam", "does not belong to"],
  ["paling banyak", "at most"],
  ["paling sedikit", "at least"],
  ["sama dengan", "equal to"],
  ["lebih besar dari", "greater than"],
  ["lebih kecil dari", "less than"],
  ["tidak nol", "nonzero"],
  ["bernilai nol", "equals zero"],
  ["dapat ditulis sebagai", "can be written as"],
  ["dapat dipilih", "can be chosen"],
  ["dapat diperluas", "can be extended"],
  ["dapat dinyatakan", "can be expressed"],
  ["sebagai berikut", "as follows"],
  ["sebaliknya", "conversely"],
  ["akibatnya", "consequently"],
  ["karena", "because"],
  ["kemudian", "then"],
  ["selanjutnya", "next"],
  ["jadi", "thus"],
  ["maka", "then"],
  ["apabila", "if"],
  ["ketika", "when"],
  ["sementara", "while"],
  ["setelah", "after"],
  ["sebelum", "before"],
  ["tanpa", "without"],
  ["terhadap", "with respect to"],
  ["antara", "between"],
  ["melalui", "through"],
  ["berdasarkan", "based on"]
];

const WORDS: Record<string, string> = {
  "adalah":"is","agar":"so","akan":"will","akhir":"final","alasan":"reason","anggota":"element","arah":"direction",
  "atau":"or","awal":"initial","bagian":"part","banyak":"number","baru":"new","bebas":"independent","beda":"different",
  "belum":"not yet","benar":"true","berikut":"following","berikutnya":"next","besar":"large","bidang":"field",
  "bilangan":"number","bisa":"can","bukti":"proof","cara":"method","cukup":"enough","dalam":"in","dan":"and","dari":"from",
  "dasar":"basic","definisi":"definition","dengan":"with","dimensi":"dimension","dipilih":"chosen","diperoleh":"obtained",
  "diperlukan":"needed","disebut":"called","ditentukan":"determined","dua":"two","elemen":"element","empat":"four",
  "fungsi":"function","garis":"line","graf":"graph","hasil":"result","hingga":"finite","hubungan":"relationship",
  "identitas":"identity","ini":"this","irisan":"intersection","jika":"if","jumlah":"sum","kali":"times","kasus":"case",
  "kecil":"small","kelas":"class","kelipatan":"multiple","kemungkinan":"possibility","ketiga":"third",
  "koefisien":"coefficient","koordinat":"coordinate","kurang":"less","lain":"other","lebih":"more","lengkap":"complete",
  "mahasiswa":"student","masing":"each","matematika":"mathematics","matriks":"matrix","memakai":"use","membangun":"build",
  "membandingkan":"compare","membentuk":"form","membuat":"make","memberi":"gives","membuktikan":"prove",
  "memenuhi":"satisfies","memiliki":"has","menambah":"add","menentukan":"determine","mengambil":"take","mengandung":"contains",
  "menggunakan":"use","menghasilkan":"produces","menghubungkan":"connect","mengubah":"change","menjadi":"becomes",
  "menjelaskan":"explains","menunjukkan":"shows","menyatakan":"states","menyelesaikan":"solve","merentang":"spans",
  "minimum":"minimum","nol":"zero","operasi":"operation","pada":"on","paling":"most","pembahasan":"solution",
  "pembilang":"numerator","pembuktian":"proof","pemecahan":"solving","pemodelan":"modeling","penyebut":"denominator",
  "penyelesaian":"solution","perbandingan":"comparison","persamaan":"equation","pilih":"choose","polinom":"polynomial",
  "ruang":"space","salah":"wrong","satu":"one","semua":"all","setara":"equivalent","setiap":"every","sifat":"property",
  "solusi":"solution","standar":"standard","subruang":"subspace","suku":"term","syarat":"condition","tak":"not",
  "teorema":"theorem","tepat":"exactly","terdapat":"there exists","terkecil":"smallest","terbesar":"largest",
  "terkait":"related","tertentu":"certain","tetap":"remains","tiga":"three","tujuan":"goal","umum":"general","unik":"unique",
  "untuk":"for","utama":"main","variabel":"variable","vektor":"vector","yaitu":"namely","yang":"that","nilai":"value",
  "baris":"row","kolom":"column","pemetaan":"mapping","transformasi":"transformation","basis":"basis","rank":"rank",
  "kernel":"kernel","image":"image","injektif":"injective","surjektif":"surjective","ekuivalen":"equivalent",
  "konsep":"concept","contoh":"example","latihan":"practice","materi":"material","soal":"problem","pembelajaran":"learning",
  "pemahaman":"understanding","penalaran":"reasoning","mendalam":"in-depth","terstruktur":"structured","intuitif":"intuitive",
  "intuisi":"intuition","notasi":"notation","referensi":"references","kesulitan":"difficulty","tipe":"type",
  "subbab":"subchapter","bab":"chapter","jenjang":"level","jalur":"track","reguler":"regular","kompetisi":"competition",
  "olimpiade":"olympiad","sekolah":"school","kuliah":"university","pencarian":"search","cari":"search","ketik":"type",
  "kata":"word","kunci":"keyword","serupa":"similar","mirip":"similar","cocok":"matching","ubah":"change","hapus":"clear",
  "filter":"filter","seluruh":"all","isi":"content","bahasa":"language","inggris":"English","indonesia":"Indonesian",
  "teks":"text","judul":"title","deskripsi":"description","publikasi":"publication","proyek":"project","profil":"profile",
  "kontak":"contact","program":"program","metode":"method","waktu":"time","baca":"read","membaca":"reading",
  "lanjut":"continue","lanjutan":"advanced","ringkasan":"summary","titik":"point","grafik":"graph",
  "perkalian":"multiplication","pembagian":"division","penjumlahan":"addition","pengurangan":"subtraction","akar":"root",
  "prima":"prime","modulo":"modulo","kongruensi":"congruence","kombinatorika":"combinatorics","peluang":"probability",
  "statistika":"statistics","geometri":"geometry","trigonometri":"trigonometry","kalkulus":"calculus","topologi":"topology",
  "optimisasi":"optimization","diskrit":"discrete","persen":"percent","desimal":"decimal","rasio":"ratio","proporsi":"proportion",
  "relasi":"relation","trivial":"trivial","nontrivial":"nontrivial","independen":"independent","dependen":"dependent",
  "dipakai":"used","mungkin":"may","hanya":"only","sudah":"already","selalu":"always","sering":"often","mudah":"easy",
  "susah":"hard","penting":"important","beberapa":"several","masalah":"problem","maksud":"meaning","artinya":"means",
  "terbukti":"proved","bentuk":"form","ekspresi":"expression","himpunan":"set","lapangan":"field","skalar":"scalar",
  "urutan":"order","berurutan":"ordered","parameter":"parameter","pivot":"pivot","redundan":"redundant","redundansi":"redundancy",
  "eliminasi":"elimination","ortonormal":"orthonormal","ortogonal":"orthogonal","proyeksi":"projection","selisih":"difference",
  "gabungan":"union","koset":"coset","faktor":"factor","derajat":"degree","sederhana":"simple","murni":"pure","terapan":"applied",
  "kekontinuan":"continuity","konvergensi":"convergence","barisan":"sequence","deret":"series","integral":"integral",
  "turunan":"derivative","limit":"limit","kontinu":"continuous","terbatas":"bounded","terbuka":"open","tertutup":"closed",
  "simpul":"vertex","sisi":"edge","lintasan":"path","siklus":"cycle","jarak":"distance","spektrum":"spectrum",
  "pewarnaan":"coloring","keterhubungan":"connectivity","kotak":"box","objek":"object"
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^()|[\]\\{}]/g, "\\$&").replace(/\$/g, "\\$&");
}

function preserveCase(source: string, target: string) {
  if (!source) return target;
  if (source === source.toUpperCase() && source.length > 1) return target.toUpperCase();
  if (source[0] === source[0].toUpperCase()) return target.charAt(0).toUpperCase() + target.slice(1);
  return target;
}

export function translatePlainText(input: string, language: Language = "en"): string {
  if (language === "id" || !input.trim()) return input;

  const leading = input.match(/^\s*/)?.[0] ?? "";
  const trailing = input.match(/\s*$/)?.[0] ?? "";
  let core = input.slice(leading.length, input.length - trailing.length);

  const exact = UI_TRANSLATIONS[core];
  if (exact) return leading + exact + trailing;

  const phrases = PHRASES.slice().sort((a, b) => b[0].length - a[0].length);
  for (const pair of phrases) {
    const regex = new RegExp(escapeRegExp(pair[0]), "gi");
    core = core.replace(regex, (match) => preserveCase(match, pair[1]));
  }

  core = core.replace(/[A-Za-zÀ-ÿ]+/g, (word) => {
    const translated = WORDS[word.toLocaleLowerCase("id-ID")];
    return translated ? preserveCase(word, translated) : word;
  });

  core = core
    .replace(/\bis is\b/gi, "is")
    .replace(/\bfor for\b/gi, "for")
    .replace(/\bwith with\b/gi, "with")
    .replace(/\bthat that\b/gi, "that")
    .replace(/\s{2,}/g, " ");

  return leading + core + trailing;
}

export function translateRichText(input: string, language: Language): string {
  if (language === "id") return input;
  const tokenRegex = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  return input
    .split(tokenRegex)
    .map((piece) => {
      if ((piece.startsWith("$$") && piece.endsWith("$$")) || (piece.startsWith("$") && piece.endsWith("$"))) {
        return piece;
      }
      return translatePlainText(piece, language);
    })
    .join("");
}
