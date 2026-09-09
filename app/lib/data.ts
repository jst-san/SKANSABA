import type { IconType } from "react-icons";
import {
  LuMonitor,
  LuCpu,
  LuPalette,
  LuCalculator,
  LuLandmark,
  LuBriefcase,
  LuTrendingUp,
  LuBuilding2,
  LuCalendar,
} from "react-icons/lu";

export interface Jurusan {
  id: string;
  category: string;
  name: string;
  shortCode: string;
  icon: IconType;
  badgeColor: string;
  iconBg: string;
  desc: string;
  prospek: string[];
  fasilitas: string[];
  keahlian: string[];
  mitra: string[];
}

export interface Prestasi {
  id: number;
  title: string;
  winner: string;
  category: string;
  year: string;
  badge: string;
  badgeColor: string;
  desc: string;
  img: string;
}

export interface Partner {
  name: string;
  category: string;
}

export interface Step {
  step: string;
  title: string;
  date: string;
  desc: string;
}

export interface Berita {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  url: string;
}

export interface StudentEntity {
  user_id: string | null;
  nisn: number;
  nis: number;
  name: string;
  alumni: boolean;
  kelas: number;
  jurusan: "rpl" | "tkj" | "dkv" | "akl" | "lps" | "mp" | "br" | "bd" | string;
  rombel: number;
  angkatan: number;
  points: number;
  options: {
    avatar?: string;
    achievementsCount?: {
      internasional: number;
      nasional: number;
      provinsi: number;
      kabupaten: number;
      internal: number;
    };
  };
  updated_at: string | null;
  created_at: string;
}

export const JURUSAN_DATA: Jurusan[] = [
  {
    id: "rpl",
    category: "ti",
    name: "Rekayasa Perangkat Lunak (RPL)",
    shortCode: "RPL",
    icon: LuMonitor,
    badgeColor: "bg-sky-100 text-sky-600 border-sky-200",
    iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    desc: "Fokus pada pengembangan software, web application, mobile app, algoritma pemrograman, dan pengujian sistem industri modern.",
    prospek: [
      "Full Stack Developer",
      "Mobile App Developer",
      "UI/ULuX Designer",
      "Software QA Specialist",
    ],
    fasilitas: [
      "Lab High-End PC & Mac",
      "Studio Software Dev",
      "Internet Dedicated 1Gbps",
      "Server Enterprise",
    ],
    keahlian: [
      "Fullstack Web Development",
      "Flutter & React Native",
      "Database Design & SQL",
      "DevOps & API Design",
    ],
    mitra: ["Bnet Indonesia", "Dicoding Indonesia", "Software House Jogja"],
  },
  {
    id: "tkj",
    category: "ti",
    name: "Teknik Komputer & Jaringan (TKJ)",
    shortCode: "TKJ",
    icon: LuCpu,
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
    desc: "Mempelajari arsitektur komputer, instalasi jaringan fiber optic, Mikrotik/Cisco routing, administrasi server, dan siber security.",
    prospek: [
      "Network Engineer",
      "System Administrator",
      "Cyber Security Specialist",
      "ISP Technician",
    ],
    fasilitas: [
      "Lab Cisco Network",
      "MikroTik Academy Center",
      "Fiber Optic Splicing Kit",
      "Dedicated Server Room",
    ],
    keahlian: [
      "MikroTik & Cisco Routing",
      "Fiber Optic Splicing",
      "Linux & Windows Server",
      "Network Security",
    ],
    mitra: ["Telkom Indonesia", "Bnet Provider", "Biznet Networks"],
  },
  {
    id: "dkv",
    category: "ti",
    name: "Desain Komunikasi Visual (DKV)",
    shortCode: "DKV",
    icon: LuPalette,
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    iconBg: "bg-purple-50 text-purple-600 border-purple-100",
    desc: "Mengembangkan kreativitas visual dalam fotografi, videografi, animasi 2D/3D, desain grafis branding, dan produksi konten digital.",
    prospek: [
      "Graphic Designer",
      "Video Editor & Animator",
      "Content Creator",
      "Art Director",
    ],
    fasilitas: [
      "Studio Fotografi Profesional",
      "Lab Mac Studio",
      "Perangkat Display Cintiq",
      "Podcast & Audio Studio",
    ],
    keahlian: [
      "Adobe Creative Suite",
      "3D Modeling & Animation",
      "Commercial Photography",
      "Digital Illustration",
    ],
    mitra: [
      "Studio Animasi Jogja",
      "Percetakan Media Grafika",
      "Agensi Kreatif",
    ],
  },
  {
    id: "akl",
    category: "bisnis",
    name: "Akuntansi & Keuangan Lembaga (AKL)",
    shortCode: "AKL",
    icon: LuCalculator,
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    desc: "Membekali siswa dengan pencatatan keuangan digital, penyusunan laporan keuangan industri, perpajakan, serta sistem akuntansi modern.",
    prospek: [
      "Staff Akuntansi",
      "Junior Auditor",
      "Konsultan Pajak",
      "Finance Administrator",
    ],
    fasilitas: [
      "Lab Komputer MYOB & Accurate",
      "Mini Bank Praktik",
      "Audit Room Simulator",
      "Software Perpajakan Digital",
    ],
    keahlian: [
      "MYOB & Accurate Software",
      "Tax Accounting (PPh/PPN)",
      "Financial Statement Analysis",
      "Excel & Spreadsheet Expert",
    ],
    mitra: ["Bank BPD DIY", "Bank Syariah Indonesia", "KJA Mitra Utama"],
  },
  {
    id: "lps",
    category: "bisnis",
    name: "Layanan Perbankan Syariah (LPS)",
    shortCode: "LPS",
    icon: LuLandmark,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    desc: "Spesialisasi dalam operasional bank syariah, transaksi keuangan syariah, customer service, serta analisis pembiayaan syariah.",
    prospek: [
      "Teller Bank Syariah",
      "Customer Service Bank",
      "Staff Operasional BMT",
      "Analis Pembiayaan",
    ],
    fasilitas: [
      "Mini Bank Syariah Simulator",
      "Mesin Sortir & Hitung Uang",
      "Customer Service Counter",
      "Core Banking Software",
    ],
    keahlian: [
      "Fiqh Muamalah Praktis",
      "Core Banking System",
      "Customer Service Excellence",
      "Mikro Pembiayaan Syariah",
    ],
    mitra: ["BSI Kantor Cabang Bantul", "BMT Jogja", "Bank BPD DIY Syariah"],
  },
  {
    id: "mp",
    category: "bisnis",
    name: "Manajemen Perkantoran & Layanan Bisnis (MPLB)",
    shortCode: "MP",
    icon: LuBriefcase,
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    desc: "Menguasai tata kelola administrasi bisnis modern, kearsipan digital, otomatisasi perkantoran, dan protokol komunikasi bisnis.",
    prospek: [
      "Executive Admin Assistant",
      "Archivist Digital",
      "Public Relations Staff",
      "Office Manager",
    ],
    fasilitas: [
      "Office Simulation Room",
      "Digital Archiving Studio",
      "Lab Typing Speed",
      "Meeting Room Training",
    ],
    keahlian: [
      "Digital Archiving Systems",
      "Business Communication",
      "Event & Protocol Management",
      "Automation Office Tools",
    ],
    mitra: ["Dinas Perpustakaan Bantul", "PT Pembangunan Jaya", "Kancab PLN"],
  },
  {
    id: "br",
    category: "bisnis",
    name: "Bisnis Retail",
    shortCode: "BR",
    icon: LuTrendingUp,
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    iconBg: "bg-amber-50 text-amber-600 border-amber-100",
    desc: "Konsentrasi Bisnis Retail menekankan keterampilan pemasaran konvensional dan manajemen usaha ritel: visual merchandising, pengemasan & distribusi produk, pelayanan pelanggan, dan administrasi transaksi.",
    prospek: [
      "Retail Manager",
      "Store Supervisor",
      "Merchandiser",
      "Sales Executive",
    ],
    fasilitas: [
      "Business Center / Retail Shop",
      "Live Commerce & Display Studio",
      "Lab Digital Marketing",
      "POS Cashier Station",
    ],
    keahlian: [
      "Menerapkan ekonomi bisnis & administrasi",
      "Menganalisis strategi marketing",
      "Customer Service & Sales",
      "Pengemasan & Pendistribusian Produk",
    ],
    mitra: ["Indomaret Group", "Alfamart", "Super Indo Yogyakarta"],
  },
  {
    id: "bd",
    category: "bisnis",
    name: "Bisnis Digital",
    shortCode: "BD",
    icon: LuBriefcase,
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    iconBg: "bg-sky-50 text-sky-600 border-sky-100",
    desc: "Konsentrasi Bisnis Digital fokus pada pemasaran digital dan operasi daring: digital branding, digital onboarding, digital marketing, serta operasi e-commerce dan strategi pemasaran online.",
    prospek: [
      "Digital Marketer",
      "E-commerce Specialist",
      "Social Commerce Manager",
      "Content & Growth Strategist",
    ],
    fasilitas: [
      "Lab Digital Marketing & Analytics",
      "Live Streaming Commerce Studio",
      "E-commerce Simulation Center",
      "Business Center / Retail Shop",
    ],
    keahlian: [
      "Memahami ekonomi bisnis & administrasi",
      "Digital Branding",
      "Digital Onboarding",
      "Digital Marketing (ads, SEO, content)",
      "Digital Operation & E-commerce",
    ],
    mitra: ["Shopee Indonesia", "Tokopedia Affiliate", "Agensi Marketing DIY"],
  },
];

export const PRESTASI_DATA: Prestasi[] = [
  {
    id: 1,
    title: "Medallion for Excellence - LKS Nasional Web Technologies 2024",
    winner: "Muhammad Eksa Arifa",
    category: "Tingkat Nasional",
    year: "2024",
    badge: "Juara Nasional",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    desc: "Raihan keunggulan tingkat nasional dalam penguasaan arsitektur web modern, API integration, dan responsive user interface.",
    img: "https://smkn1bantul.sch.id/storage/01JA704QF446RB3B3RCYFH7NEK.PNG",
  },
  {
    id: 2,
    title: "Juara 1 FIKSI DIY - Kategori Inovasi Digital UMKM",
    winner: "Haryo Djati R & Anggara Deni A",
    category: "Tingkat Provinsi",
    year: "2024",
    badge: "Juara 1 Provinsi",
    badgeColor: "bg-sky-100 text-sky-600 border-sky-300",
    desc: "Inovasi platform aplikasi lokal berbasis kewirausahaan untuk digitalisasi promosi produk UMKM di Kabupaten Bantul.",
    img: "https://smkn1bantul.sch.id/storage/01JA702A89MSW043CNGVR85V2S.PNG",
  },
  {
    id: 3,
    title: "Juara 1 LKS DI Yogyakarta - Web Technology 2024",
    winner: "Muhammad Eksa Arifa",
    category: "Tingkat Provinsi",
    year: "2024",
    badge: "Juara 1 Provinsi",
    badgeColor: "bg-sky-100 text-sky-600 border-sky-300",
    desc: "Mempertahankan tradisi medali emas kompetisi bidang IT Software & Web System pada ajang LKS SMK se-DI Yogyakarta.",
    img: "https://smkn1bantul.sch.id/storage/01JA6ZZTT0H12Q4NZRXBZ9E8EC.PNG",
  },
];

export const MITRA_INDUSTRI: Partner[] = [
  { name: "PT Telkom Indonesia", category: "Telekomunikasi" },
  { name: "Bnet Utama", category: "ISP & Cloud Network" },
  { name: "Bank Syariah Indonesia", category: "Perbankan Syariah" },
  { name: "Gama Studio DKV", category: "Creative & Digital Agency" },
  { name: "PT Aksamaia Software", category: "IT Solutions & Software" },
  { name: "Asosiasi Akuntansi Indo", category: "Lembaga Profesi Keuangan" },
];

export const SPMB_STEPS: Step[] = [
  {
    step: "01",
    title: "Pendaftaran Online",
    date: "Mei - Juni 2026",
    desc: "Pengisian formulir pendaftaran melalui portal resmi SPMB SMKN 1 Bantul dan pengunggahan berkas kelengkapan administrasi.",
  },
  {
    step: "02",
    title: "Proses Seleksi",
    date: "Juni 2026",
    desc: "Tahap verifikasi berkas, pemeringkatan nilai rapor, serta tes minat bakat dan unjuk kerja sesuai program keahlian yang dipilih.",
  },
  {
    step: "03",
    title: "Pengumuman",
    date: "Juli 2026",
    desc: "Penetapan dan pengumuman resmi hasil seleksi penerimaan murid baru yang dapat diakses secara online.",
  },
  {
    step: "04",
    title: "Daftar Ulang",
    date: "Juli 2026",
    desc: "Registrasi ulang bagi calon siswa yang dinyatakan diterima serta persiapan mengikuti Masa Pengenalan Lingkungan Sekolah (MPLS).",
  },
];

export const SCHOOL_ADDRESS = `Jl. Parangtritis KM 11, Dukuh, Sabdodadi, Kec. Bantul, Kab. Bantul, D.I. Yogyakarta 55715`;

export const BERITA_DATA: Berita[] = [
  {
    id: "mou-bnet-2026",
    title:
      "SMKN 1 Bantul Perkuat Kemitraan Industri melalui Penandatanganan MoU dengan Bnet",
    slug: "smkn-1-bantul-perkuat-kemitraan-industri-mou-bnet",
    category: "Kerjasama Industri",
    date: "22 Agustus 2026",
    author: "Tim Publikasi SMKN 1 Bantul",
    excerpt:
      "Upaya peningkatan kompetensi siswa vokasi dan sinkronisasi kurikulum industri jaringan secara resmi diperkuat melalui penandatanganan nota kesepahaman (MoU) bersama Bnet.",
    imageUrl: "https://smkn1bantul.sch.id/assets/images/berita/mou-bnet.jpg",
    url: "https://smkn1bantul.sch.id",
  },
  {
    id: "pengumuman-spmb-2026",
    title: "Pengumuman Resmi dan Prosedur Daftar Ulang SPMB T.A. 2026/2027",
    slug: "pengumuman-dan-daftar-ulang-spmb-2026-2027",
    category: "Pengumuman",
    date: "25 Juni 2026",
    author: "Panitia SPMB",
    excerpt:
      "Informasi resmi penetapan hasil seleksi penerimaan murid baru serta kelengkapan berkas registrasi ulang bagi calon siswa yang dinyatakan diterima di SMKN 1 Bantul.",
    imageUrl: "https://smkn1bantul.sch.id/assets/images/berita/spmb-2026.jpg",
    url: "https://smkn1bantul.sch.id",
  },
  {
    id: "selamat-siswa-baru-2026",
    title:
      "Selamat Datang! SMKN 1 Bantul Resmi Menerima 576 Siswa Baru T.A. 2026/2027",
    slug: "selamat-untuk-576-siswa-baru-smkn-1-bantul",
    category: "Kesiswaan",
    date: "20 Juni 2026",
    author: "SMKN 1 Bantul",
    excerpt:
      "Sebanyak 576 peserta didik baru terpilih dari 7 program keahlian resmi disambut dalam pembukaan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS).",
    imageUrl: "https://smkn1bantul.sch.id/assets/images/berita/siswa-baru.jpg",
    url: "https://smkn1bantul.sch.id",
  },
  {
    id: "snbp-2026",
    title: "Apresiasi Kelulusan Siswa SMKN 1 Bantul dalam Jalur SNBP 2026",
    slug: "snbp-2026-smkn-1-bantul",
    category: "Prestasi",
    date: "15 Mei 2026",
    author: "Tim BKK & Konseling",
    excerpt:
      "Puluhan siswa lulusan SMKN 1 Bantul berhasil diterima di berbagai Perguruan Tinggi Negeri (PTN) favorit melalui jalur Seleksi Nasional Berdasarkan Prestasi (SNBP).",
    imageUrl: "https://smkn1bantul.sch.id/assets/images/berita/snbp-2026.jpg",
    url: "https://smkn1bantul.sch.id",
  },
  {
    id: "tim-publikasi-2026",
    title: "Pelatihan Jurnalistik dan Penguatan Tim Publikasi SMKN 1 Bantul",
    slug: "tim-publikasi-smkn-1-bantul",
    category: "Kegiatan Sekolah",
    date: "10 Mei 2026",
    author: "Humas SMKN 1 Bantul",
    excerpt:
      "Tim Kreatif dan Publikasi Sekolah mengikuti pembekalan produksi konten digital dan pengelolaan media komunikasi publik untuk mendukung branding keahlian vokasi.",
    imageUrl: "https://smkn1bantul.sch.id/assets/images/berita/publikasi.jpg",
    url: "https://smkn1bantul.sch.id",
  },
  {
    id: "medallion-lks-2024",
    title:
      "Muhammad Eksa Arifa Meraih Medallion For Excellence LKS Nasional Bidang Web Technologies",
    slug: "medallion-for-excellence-lks-nasional-web-technologies",
    category: "Prestasi",
    date: "12 April 2026",
    author: "SMKN 1 Bantul",
    excerpt:
      "Siswa jurusan Rekayasa Perangkat Lunak (RPL) membanggakan sekolah dengan meraih penghargaan Medallion for Excellence pada ajang LKS Tingkat Nasional.",
    imageUrl:
      "https://smkn1bantul.sch.id/assets/images/berita/lks-nasional.jpg",
    url: "https://smkn1bantul.sch.id",
  },
  {
    id: "juara-fiksi-diy",
    title:
      "Tim SMKN 1 Bantul Raih Juara 1 Festival Inovasi Kewirausahaan Siswa Indonesia (FIKSI) DIY",
    slug: "juara-1-fiksi-diy-kewirausahaan",
    category: "Prestasi",
    date: "02 Maret 2026",
    author: "Tim Kewirausahaan",
    excerpt:
      "Haryo Djati R dan Anggara Deni A sukses menyabet Juara 1 Kewirausahaan Siswa tingkat D.I. Yogyakarta melalui inovasi produk bisnis kreatif.",
    imageUrl: "https://smkn1bantul.sch.id/assets/images/berita/fiksi-diy.jpg",
    url: "https://smkn1bantul.sch.id",
  },
];

export const STUDENTS_DATA: StudentEntity[] = [
  {
    user_id: null,
    nisn: 479105780001231,
    nis: 1,
    name: "JANE DOE",
    alumni: false,
    kelas: 12,
    jurusan: "rpl",
    rombel: 1,
    angkatan: 2024,
    points: 2450,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 1,
        nasional: 2,
        provinsi: 3,
        kabupaten: 2,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001232,
    nis: 2,
    name: "ADITYA PRATAMA NUGRAHA",
    alumni: false,
    kelas: 12,
    jurusan: "tkj",
    rombel: 2,
    angkatan: 2024,
    points: 1980,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 2,
        provinsi: 2,
        kabupaten: 4,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001233,
    nis: 3,
    name: "CITRA LESTARI DEWI",
    alumni: false,
    kelas: 11,
    jurusan: "dkv",
    rombel: 1,
    angkatan: 2025,
    points: 1720,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 1,
        provinsi: 3,
        kabupaten: 2,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001234,
    nis: 4,
    name: "DIMAS ANGGARA PUTRA",
    alumni: false,
    kelas: 12,
    jurusan: "akl",
    rombel: 1,
    angkatan: 2024,
    points: 1540,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 1,
        provinsi: 2,
        kabupaten: 3,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001235,
    nis: 5,
    name: "EKA PURWANTI SARI",
    alumni: false,
    kelas: 11,
    jurusan: "lps",
    rombel: 1,
    angkatan: 2025,
    points: 1410,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 3,
        kabupaten: 2,
        internal: 4,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001236,
    nis: 6,
    name: "FAJAR NUGRAHA SYAHPUTRA",
    alumni: false,
    kelas: 10,
    jurusan: "mp",
    rombel: 2,
    angkatan: 2026,
    points: 1320,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 2,
        kabupaten: 4,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001237,
    nis: 7,
    name: "GITA GUTAWA WULANDARI",
    alumni: false,
    kelas: 12,
    jurusan: "br",
    rombel: 1,
    angkatan: 2024,
    points: 1250,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 1,
        provinsi: 1,
        kabupaten: 3,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001238,
    nis: 8,
    name: "HENDRA WIJAYA KUSUMA",
    alumni: false,
    kelas: 11,
    jurusan: "bd",
    rombel: 2,
    angkatan: 2025,
    points: 1180,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 2,
        kabupaten: 2,
        internal: 5,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001239,
    nis: 9,
    name: "INDAH PERMATA SARI",
    alumni: false,
    kelas: 10,
    jurusan: "rpl",
    rombel: 2,
    angkatan: 2026,
    points: 1100,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 2,
        kabupaten: 1,
        internal: 4,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001240,
    nis: 10,
    name: "JOKO TINGKIR SANTOSO",
    alumni: false,
    kelas: 12,
    jurusan: "tkj",
    rombel: 1,
    angkatan: 2024,
    points: 1050,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 1,
        kabupaten: 4,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001241,
    nis: 11,
    name: "KIKI AMELIA PUTRI",
    alumni: false,
    kelas: 11,
    jurusan: "dkv",
    rombel: 2,
    angkatan: 2025,
    points: 990,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 1,
        kabupaten: 3,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001242,
    nis: 12,
    name: "LUKMAN HAKIM ROSYID",
    alumni: false,
    kelas: 10,
    jurusan: "akl",
    rombel: 2,
    angkatan: 2026,
    points: 920,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 1,
        kabupaten: 2,
        internal: 4,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001243,
    nis: 13,
    name: "MAULANA MALIK IBRAHIM",
    alumni: false,
    kelas: 12,
    jurusan: "lps",
    rombel: 1,
    angkatan: 2024,
    points: 870,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 1,
        kabupaten: 2,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001244,
    nis: 14,
    name: "NABILA SYAKIEB ANGGRAENI",
    alumni: false,
    kelas: 11,
    jurusan: "mp",
    rombel: 1,
    angkatan: 2025,
    points: 810,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 1,
        kabupaten: 1,
        internal: 5,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001245,
    nis: 15,
    name: "OKTAVIANUS SETIAWAN",
    alumni: false,
    kelas: 10,
    jurusan: "br",
    rombel: 1,
    angkatan: 2026,
    points: 760,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 3,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001246,
    nis: 16,
    name: "PUTRI MARINO FEBRIANTI",
    alumni: false,
    kelas: 12,
    jurusan: "bd",
    rombel: 1,
    angkatan: 2024,
    points: 720,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 3,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001247,
    nis: 17,
    name: "QORI SANDIORIVA AYU",
    alumni: false,
    kelas: 11,
    jurusan: "rpl",
    rombel: 1,
    angkatan: 2025,
    points: 680,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 2,
        internal: 4,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001248,
    nis: 18,
    name: "RIAN ARDIANTO PRATAMA",
    alumni: false,
    kelas: 10,
    jurusan: "tkj",
    rombel: 2,
    angkatan: 2026,
    points: 640,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 2,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001249,
    nis: 19,
    name: "SITI BADRIAH LESTARI",
    alumni: false,
    kelas: 12,
    jurusan: "dkv",
    rombel: 2,
    angkatan: 2024,
    points: 600,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 2,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001250,
    nis: 20,
    name: "TAUFIK HIDAYAT SANTOSO",
    alumni: false,
    kelas: 11,
    jurusan: "akl",
    rombel: 2,
    angkatan: 2025,
    points: 560,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 1,
        internal: 5,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001251,
    nis: 21,
    name: "UMAR ISMAIL HASAN",
    alumni: false,
    kelas: 10,
    jurusan: "lps",
    rombel: 2,
    angkatan: 2026,
    points: 520,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 1,
        internal: 4,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001252,
    nis: 22,
    name: "VINA PANDUWINATA MAHARANI",
    alumni: false,
    kelas: 12,
    jurusan: "mp",
    rombel: 2,
    angkatan: 2024,
    points: 480,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 1,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001253,
    nis: 23,
    name: "WAWAN FEBRIANTO NUGROHO",
    alumni: false,
    kelas: 11,
    jurusan: "br",
    rombel: 2,
    angkatan: 2025,
    points: 440,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 1,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001254,
    nis: 24,
    name: "XENA WARRIOR PRINCESS",
    alumni: false,
    kelas: 10,
    jurusan: "bd",
    rombel: 2,
    angkatan: 2026,
    points: 400,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 5,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001255,
    nis: 25,
    name: "YUNI SHARA ANGGRAINIK",
    alumni: false,
    kelas: 12,
    jurusan: "rpl",
    rombel: 2,
    angkatan: 2024,
    points: 360,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 4,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001256,
    nis: 26,
    name: "ZACK LEE KURNIAWAN",
    alumni: false,
    kelas: 11,
    jurusan: "tkj",
    rombel: 1,
    angkatan: 2025,
    points: 320,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001257,
    nis: 27,
    name: "ANDI WIJAYA PRANOTO",
    alumni: false,
    kelas: 10,
    jurusan: "dkv",
    rombel: 1,
    angkatan: 2026,
    points: 290,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 3,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001258,
    nis: 28,
    name: "BAGUS KAHFI ALFIAN",
    alumni: false,
    kelas: 12,
    jurusan: "akl",
    rombel: 1,
    angkatan: 2024,
    points: 260,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001259,
    nis: 29,
    name: "CINTA LAURA KIEHL",
    alumni: false,
    kelas: 11,
    jurusan: "lps",
    rombel: 2,
    angkatan: 2025,
    points: 230,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001260,
    nis: 30,
    name: "DIMAS SETO NUGROHO",
    alumni: false,
    kelas: 10,
    jurusan: "mp",
    rombel: 1,
    angkatan: 2026,
    points: 200,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 2,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001261,
    nis: 31,
    name: "EKA RAMDANI SYAH",
    alumni: false,
    kelas: 12,
    jurusan: "br",
    rombel: 1,
    angkatan: 2024,
    points: 170,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001262,
    nis: 32,
    name: "FIKI NAKI PRATAMA",
    alumni: false,
    kelas: 11,
    jurusan: "bd",
    rombel: 1,
    angkatan: 2025,
    points: 140,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001263,
    nis: 33,
    name: "GRACE NATALIE MAHARANI",
    alumni: false,
    kelas: 10,
    jurusan: "rpl",
    rombel: 1,
    angkatan: 2026,
    points: 110,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001264,
    nis: 34,
    name: "HANIFAN YUDANI KUSUMA",
    alumni: false,
    kelas: 12,
    jurusan: "tkj",
    rombel: 2,
    angkatan: 2024,
    points: 80,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001265,
    nis: 35,
    name: "IRFAN BACHDIM SAPUTRA",
    alumni: false,
    kelas: 11,
    jurusan: "dkv",
    rombel: 1,
    angkatan: 2025,
    points: 50,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
  {
    user_id: null,
    nisn: 479105780001266,
    nis: 36,
    name: "JEFRI NICHOL ALFIAN",
    alumni: false,
    kelas: 10,
    jurusan: "akl",
    rombel: 1,
    angkatan: 2026,
    points: 20,
    options: {
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      achievementsCount: {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 1,
      },
    },
    updated_at: null,
    created_at: "2026-09-06T15:46:35.825Z",
  },
];
