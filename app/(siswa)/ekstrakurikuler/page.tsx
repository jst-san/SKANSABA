"use client";

import React, { useState } from "react";
import {
  LuActivity,
  LuCalendar,
  LuUserCheck,
  LuMapPin,
  LuSparkles,
  LuChevronRight,
  LuCircleCheck,
  LuAward,
  LuX,
} from "react-icons/lu";

interface Ekstrakurikuler {
  id: number;
  name: string;
  category:
    | "Seni & Budaya"
    | "Olahraga"
    | "Sains & Teknologi"
    | "Kemanusiaan & Bela Negara";
  desc: string;
  schedule: string;
  location: string;
  mentor: string;
  image: string;
  achievements: string[];
}

// Data 17 Ekstrakurikuler SMKN 1 Bantul
const EKSTRAKURIKULER_DATA: Ekstrakurikuler[] = [
  {
    id: 1,
    name: "Paduan Suara",
    category: "Seni & Budaya",
    desc: "Wadah olah vokal dan harmonisasi suara untuk mengisi acara resmi sekolah serta kompetisi paduan suara.",
    schedule: "Rabu, 15.30 - 17.00 WIB",
    location: "Ruang Musik / Aula",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    achievements: ["Juara 2 Lomba Paduan Suara Kabupaten Bantul"],
  },
  {
    id: 2,
    name: "KIR (Karya Ilmiah Remaja)",
    category: "Sains & Teknologi",
    desc: "Mengembangkan kemampuan penalaran ilmiah, penelitian, penulisan karya tulis, dan inovasi teknologi.",
    schedule: "Kamis, 15.30 - 17.00 WIB",
    location: "Laboratorium IPA",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    achievements: ["Finalis OPSI Tingkat Provinsi DIY"],
  },
  {
    id: 3,
    name: "Pencak Silat",
    category: "Olahraga",
    desc: "Seni bela diri tradisional Indonesia untuk melatih ketangkasan, fisik, kedisiplinan, dan mental kejuaraan.",
    schedule: "Selasa & Jumat, 15.30 WIB",
    location: "Lapangan Serbaguna",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    achievements: ["Juara 1 O2SN Pencak Silat Bantul"],
  },
  {
    id: 4,
    name: "Basket",
    category: "Olahraga",
    desc: "Pembinaan keahlian olahraga bola basket, kerjasama tim, taktik permainan, dan persiapan kejuaraan DBL/Popda.",
    schedule: "Senin & Kamis, 15.30 WIB",
    location: "Lapangan Basket Utama",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/9.jpeg",
    achievements: ["Semifinalis Kejurkab Basket Pelajar"],
  },
  {
    id: 5,
    name: "Robotik",
    category: "Sains & Teknologi",
    desc: "Eksplorasi mikrokontroler, perakitan robot, pemrograman IoT, dan kompetisi kontes robot siswa.",
    schedule: "Rabu, 15.30 - 17.30 WIB",
    location: "Lab Komputer & IoT",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    achievements: ["Juara 2 Kontes Robotik SMK DIY"],
  },
  {
    id: 6,
    name: "Karawitan",
    category: "Seni & Budaya",
    desc: "Pelestarian seni musik gamelan tradisional Jawa serta melatih keharmonisan penabuh gamelan.",
    schedule: "Jumat, 13.30 - 16.00 WIB",
    location: "Pendopo Seni",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    achievements: ["Penyaji Terbaik Festival Karawitan Pelajar"],
  },
  {
    id: 7,
    name: "PMR (Palang Merah Remaja)",
    category: "Kemanusiaan & Bela Negara",
    desc: "Pelatihan pertolongan pertama, kesiapsiagaan bencana, dan kepedulian sosial kemanusiaan.",
    schedule: "Rabu, 15.30 - 17.00 WIB",
    location: "Ruang UKS Utama",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/7.jpeg",
    achievements: ["Juara Umum JUMBARA PMR Kabupaten"],
  },
  {
    id: 8,
    name: "Hadroh",
    category: "Seni & Budaya",
    desc: "Seni musik islami penabuh rebana dan perlantun sholawat untuk mempererat kerohanian dan seni syiar.",
    schedule: "Kamis, 15.30 - 17.00 WIB",
    location: "Masjid Sekolah",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/2.jpeg",
    achievements: ["Juara 1 Festival Hadroh Pelajar Bantul"],
  },
  {
    id: 9,
    name: "Voli",
    category: "Olahraga",
    desc: "Latihan teknik dasar hingga strategi bertanding olahraga bola voli putra dan putri.",
    schedule: "Selasa & Sabtu, 15.30 WIB",
    location: "Lapangan Voli",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/3.jpeg",
    achievements: ["Juara 3 Popda Voli Kabupaten"],
  },
  {
    id: 10,
    name: "Qiro'ah",
    category: "Seni & Budaya",
    desc: "Seni seni membaca Al-Qur'an dengan lagu (naghom) yang indah serta tajwid yang benar.",
    schedule: "Senin, 15.30 - 17.00 WIB",
    location: "Masjid Sekolah",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/11.jpeg",
    achievements: ["Juara 1 MTQ Pelajar SMA/SMK"],
  },
  {
    id: 11,
    name: "Futsal",
    category: "Olahraga",
    desc: "Pengembangan stamina, taktik permainan, dan pembentukan tim futsal unggulan sekolah.",
    schedule: "Rabu & Sabtu, 16.00 WIB",
    location: "Lapangan Futsal / Bunderan",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/10.jpeg",
    achievements: ["Juara 1 Turnamen Futsal SMK se-DIY"],
  },
  {
    id: 12,
    name: "Drumband",
    category: "Seni & Budaya",
    desc: "Kedisiplinan musik berbaris, penguasaan instrumen tiup dan perkusi untuk pawai serta parade resmi.",
    schedule: "Sabtu, 14.00 - 17.00 WIB",
    location: "Halaman Utama Sekolah",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/5.jpeg",
    achievements: ["Juara 2 Parade Drumband DIY"],
  },
  {
    id: 13,
    name: "Menjahit",
    category: "Sains & Teknologi",
    desc: "Keterampilan vokasi pembuatan pola, operasional mesin jahit industri, dan kreasi busana.",
    schedule: "Selasa, 15.30 - 17.30 WIB",
    location: "Workshop Tata Busana",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1528576015761-440147b86f6d?auto=format&fit=crop&w=800&q=80",
    achievements: ["Pameran Karya Fashion SMK"],
  },
  {
    id: 14,
    name: "IT Entrepreneur",
    category: "Sains & Teknologi",
    desc: "Rintisan bisnis digital, freelance tech, pembuatan produk startup, dan digital marketing.",
    schedule: "Kamis, 15.30 - 17.30 WIB",
    location: "Lab Komputer / TEFA",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/ekstrakurikuler/8.jpeg",
    achievements: ["Juara 1 FIKSI Kewirausahaan Digital"],
  },
  {
    id: 15,
    name: "Tari Tradisional",
    category: "Seni & Budaya",
    desc: "Penguasaan gerak tari klasik dan kreasi nusantara untuk pentas seni dan penyambutan tamu.",
    schedule: "Rabu, 15.30 - 17.00 WIB",
    location: "Aula Pertunjukan",
    mentor: "-",
    image: "https://smkn1bantul.sch.id/assets/images/3.jpeg",
    achievements: ["Penyaji Terbaik FLS2N Seni Tari"],
  },
  {
    id: 16,
    name: "Teater",
    category: "Seni & Budaya",
    desc: "Olah peran, penulisan naskah, tata panggung, dan seni pertunjukan drama panggung.",
    schedule: "Jumat, 15.30 - 17.30 WIB",
    location: "Ruang Ekspresi / Aula",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    achievements: ["Juara 2 Festival Teater Remaja"],
  },
  {
    id: 17,
    name: "Renang",
    category: "Olahraga",
    desc: "Latihan gaya renang, ketahanan fisik, keselamatan air, dan persiapan perlombaan atlet renang.",
    schedule: "Sabtu, 07.00 - 09.00 WIB",
    location: "Kolam Renang Tirta Tamansari",
    mentor: "-",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    achievements: ["Medali Perak Popda Renang"],
  },
];

export default function EkstrakurikulerPage(): React.ReactElement {
  // State untuk memilih ekstrakurikuler
  const [selectedEkskul, setSelectedEkskul] = useState<Ekstrakurikuler>(
    EKSTRAKURIKULER_DATA[0],
  );
  const [filterCategory, setFilterCategory] = useState<string>("Semua");

  // State khusus untuk mengontrol Modal Popup di Mobile
  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);

  const categories = [
    "Semua",
    "Seni & Budaya",
    "Olahraga",
    "Sains & Teknologi",
    "Kemanusiaan & Bela Negara",
  ];

  const filteredData = EKSTRAKURIKULER_DATA.filter(
    (item) => filterCategory === "Semua" || item.category === filterCategory,
  );

  // Handler saat kartu ekstrakurikuler diklik
  const handleSelectEkskul = (item: Ekstrakurikuler) => {
    setSelectedEkskul(item);
    // Buka modal khusus di layar mobile/tablet (< 1024px)
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* KONTEN UTAMA: DAFTAR EKSTRAKURIKULER (8 COLUMNS) */}
      <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            17 Ekstrakurikuler SMKN 1 Bantul
          </h2>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            Pilih kegiatan ekstrakurikuler sesuai minat dan bakatmu untuk
            mengasah potensi non-akademik dan meraih prestasi.
          </p>
        </div>

        {/* Filter Kategori */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filterCategory === cat
                  ? "bg-sky-500 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Card Ekstrakurikuler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredData.map((item) => {
            const isSelected = selectedEkskul.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectEkskul(item)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group ${
                  isSelected
                    ? "bg-sky-50 border-sky-500 shadow-md ring-1 ring-sky-500"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700">
                      {item.category}
                    </span>
                    <LuChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-sky-600 translate-x-1"
                          : "text-slate-400 group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <LuCalendar className="w-3.5 h-3.5 text-sky-500" />
                    {item.schedule.split(",")[0]}
                  </span>
                  <span className="text-sky-600 font-bold">
                    Lihat Detail &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ELEMEN ASIDE DESKTOP ONLY: DETAIL GAMBAR & INFORMASI (4 COLUMNS - HIDDEN ON MOBILE) */}
      <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-36 space-y-6">
        <EkskulDetailCard selectedEkskul={selectedEkskul} />
      </aside>

      {/* MOBILE MODAL OVERLAY (VISIBLE ONLY ON MOBILE/TABLET WHEN OPEN) */}

      <div
        className={`${isMobileModalOpen ? "" : "pointer-events-none"} fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:hidden`}
      >
        <div
          className={`${isMobileModalOpen ? "" : "opacity-0"} duration-300 absolute inset-0 bg-slate-900/60 backdrop-blur-sm`}
          onClick={() => setIsMobileModalOpen(false)}
        ></div>
        <div
          className={`${isMobileModalOpen ? "" : "translate-y-full"} duration-300 ease-in-out relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Modal Mobile */}
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Detail Ekstrakurikuler
            </span>
            <button
              onClick={() => setIsMobileModalOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Tutup"
            >
              <LuX className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto p-4 space-y-4">
            <EkskulDetailCard selectedEkskul={selectedEkskul} />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Komponen Reusable Card Detail Ekstrakurikuler */
}
function EkskulDetailCard({
  selectedEkskul,
}: {
  selectedEkskul: Ekstrakurikuler;
}): React.ReactElement {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Gambar Ekstrakurikuler Terpilih */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={selectedEkskul.image}
          alt={selectedEkskul.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20">
            {selectedEkskul.category}
          </span>
          <h3 className="text-lg font-black text-white mt-1">
            {selectedEkskul.name}
          </h3>
        </div>
      </div>

      {/* Rincian Informasi */}
      <div className="p-5 space-y-4">
        <p className="text-xs text-slate-600 leading-relaxed">
          {selectedEkskul.desc}
        </p>

        <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <LuCalendar className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-semibold">
                Jadwal Latihan:
              </strong>
              <span>{selectedEkskul.schedule}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <LuMapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-semibold">
                Lokasi Latihan:
              </strong>
              <span>{selectedEkskul.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <LuUserCheck className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-semibold">
                Pembina / Pelatih:
              </strong>
              <span>{selectedEkskul.mentor}</span>
            </div>
          </div>
        </div>

        {/* Rekam Prestasi */}
        <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3.5 space-y-1.5">
          <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider flex items-center gap-1">
            <LuAward className="w-3.5 h-3.5 text-amber-500" />
            Capaian Prestasi
          </span>
          {selectedEkskul.achievements.map((ach, idx) => (
            <p
              key={idx}
              className="text-xs font-semibold text-slate-800 flex items-center gap-1.5"
            >
              <LuCircleCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>{ach}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
