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
  mitra: string[]
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
