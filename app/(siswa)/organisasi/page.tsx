"use client";

import React, { useState } from "react";
import {
  LuUsers,
  LuCalendar,
  LuUserCheck,
  LuMapPin,
  LuChevronRight,
  LuCircleCheck,
  LuAward,
  LuX,
  LuShield,
} from "react-icons/lu";

interface Organisasi {
  id: number;
  name: string;
  shortName: string;
  category:
    | "Majelis"
    | "Eksekutif"
    | "Keagamaan"
    | "Kedisiplinan & Bela Negara";
  desc: string;
  meetingSchedule: string;
  baseLocation: string;
  leader: string;
  advisor: string;
  image: string;
  programs: string[];
}

// Data 7 Organisasi Siswa SMKN 1 Bantul
const ORGANISASI_DATA: Organisasi[] = [
  {
    id: 1,
    name: "Majelis Perwakilan Kelas",
    shortName: "MPK",
    category: "Majelis",
    desc: "Lembaga legislatif siswa yang bertugas mengawasi kinerja OSIS, menyalurkan aspirasi seluruh siswa, serta mengevaluasi program kerja kesiswaan.",
    meetingSchedule: "Setiap Jumat Pekan ke-2 & ke-4",
    baseLocation: "Ruang MPK / Gedung Utama",
    leader: "Ketua MPK",
    advisor: "Pembina OSIS & MPK",
    image: "https://smkn1bantul.sch.id/assets/organisasi/1.jpeg",
    programs: [
      "Sidang Pleno Laporan Pertanggungjawaban OSIS",
      "Penjaringan & Penyaluran Aspirasi Siswa",
      "Pemilihan Umum Ketua OSIS (Pemilos)",
    ],
  },
  {
    id: 2,
    name: "Organisasi Siswa Intra Sekolah",
    shortName: "OSIS",
    category: "Eksekutif",
    desc: "Wadah induk eksekutif siswa yang menggerakkan berbagai kegiatan kesiswaan, kebangsaan, sosial, seni, olahraga, dan pengembangan karakter di SMKN 1 Bantul.",
    meetingSchedule: "Setiap Senin & Kamis, 15.30 WIB",
    baseLocation: "Ruang Sekretariat OSIS",
    leader: "Ketua OSIS",
    advisor: "Waka Kesiswaan",
    image: "https://smkn1bantul.sch.id/assets/organisasi/2.jpeg",
    programs: [
      "Masa Pengenalan Lingkungan Sekolah (MPLS)",
      "Peringatan Hari Besar Nasional & Agama",
      "Pentas Seni & Classmeeting Siswa",
    ],
  },
  {
    id: 3,
    name: "Patroli Keamanan Sekolah",
    shortName: "PKS",
    category: "Kedisiplinan & Bela Negara",
    desc: "Organisasi yang bertugas membantu menjaga ketertiban, keamanan, kedisiplinan siswa, serta kelancaran lalu lintas di lingkungan sekitar kampus SMKN 1 Bantul.",
    meetingSchedule: "Setiap Selasa & Kamis, 15.30 WIB",
    baseLocation: "Pos Lapangan & Sekretariat PKS",
    leader: "Komandan PKS",
    advisor: "Pembina Ketertiban Sekolah",
    image: "https://smkn1bantul.sch.id/assets/organisasi/3.jpeg",
    programs: [
      "Pengaturan Lalu Lintas Pagi Hari",
      "Penegakan Kedisiplinan & Tata Tertib Siswa",
      "Pelatihan Baris-Berbaris & Keamanan",
    ],
  },
  {
    id: 4,
    name: "Kerohanian Islam",
    shortName: "Rohis",
    category: "Keagamaan",
    desc: "Organisasi kesiswaan bidang keagamaan Islam yang berfokus pada pembinaan akhlak, kajian keislaman, kegiatan syiar, dan pengelolaan kemakmuran masjid sekolah.",
    meetingSchedule: "Setiap Jumat, 13.30 WIB",
    baseLocation: "Masjid SMKN 1 Bantul",
    leader: "Ketua Rohis",
    advisor: "Tim Guru Agama Islam",
    image: "https://smkn1bantul.sch.id/assets/organisasi/4.jpeg",
    programs: [
      "Pesantren Ramadan & Bakti Sosial",
      "Kajian Rutin & Mentoring Pelajar",
      "Peringatan Hari Besar Islam (PHBI)",
    ],
  },
  {
    id: 5,
    name: "Dewan Tonti",
    shortName: "Dewan Tonti",
    category: "Kedisiplinan & Bela Negara",
    desc: "Wadah pembinaan kedisiplinan fisik, tata upacara bendera, dan ketangkasan Peraturan Baris Berbaris (PBB) untuk melatih kepemimpinan berjiwa ksatria.",
    meetingSchedule: "Setiap Rabu & Sabtu, 15.30 WIB",
    baseLocation: "Lapangan Utama SMKN 1 Bantul",
    leader: "Komandan Tonti",
    advisor: "Pembina Kesiswaan",
    image: "https://smkn1bantul.sch.id/assets/organisasi/5.jpeg",
    programs: [
      "Petugas Upacara Bendera Hari Senin & Nasional",
      "Lomba Baris-Berbaris (LBB) Pelajar",
      "Diklat Peningkatan Kapasitas Anggota",
    ],
  },
  {
    id: 6,
    name: "Dewan Ambalan Pramuka",
    shortName: "Dewan Ambalan",
    category: "Kedisiplinan & Bela Negara",
    desc: "Satuan penegak gerakan Pramuka Gugus Depan SMKN 1 Bantul yang melatih kemandirian, kecakapan hidup (life skills), kepramukaan, dan pengabdian masyarakat.",
    meetingSchedule: "Setiap Jumat, 14.00 WIB",
    baseLocation: "Sanggar Pramuka",
    leader: "Pradana Putra & Putri",
    advisor: "Pembina Gudep Pramuka",
    image: "https://smkn1bantul.sch.id/assets/organisasi/6.jpeg",
    programs: [
      "Penerimaan Tamu Ambalan (PTA)",
      "Kemah Blok & Perkemahan Akhir Tahun",
      "Uji Kecakapan Umum (TKU) & Khusus (TKK)",
    ],
  },
  {
    id: 7,
    name: "Palang Merah Remaja",
    shortName: "PMR",
    category: "Kedisiplinan & Bela Negara",
    desc: "Organisasi kemanusiaan siswa yang membina kesiapsiagaan pertolongan pertama, kesehatan sekolah (UKS), kepedulian sosial, dan donor darah.",
    meetingSchedule: "Setiap Rabu, 15.30 WIB",
    baseLocation: "Ruang UKS Utama",
    leader: "Ketua PMR",
    advisor: "Pembina PMR & UKS",
    image: "https://smkn1bantul.sch.id/assets/organisasi/7.jpeg",
    programs: [
      "Pelayanan Pertolongan Pertama UPB & Upacara",
      "Aksi Donor Darah & Donor Darah Sukarela",
      "Simulasi Kesiapsiagaan Bencana Sekolah",
    ],
  },
];

export default function OrganisasiPage(): React.ReactElement {
  // State untuk memilih organisasi yang aktif
  const [selectedOrg, setSelectedOrg] = useState<Organisasi>(
    ORGANISASI_DATA[0],
  );
  const [filterCategory, setFilterCategory] = useState<string>("Semua");

  // State khusus untuk mengontrol Modal Popup di Mobile
  const [isMobileModalOpen, setIsMobileModalOpen] = useState<boolean>(false);

  const categories = [
    "Semua",
    "Majelis",
    "Eksekutif",
    "Keagamaan",
    "Kedisiplinan & Bela Negara",
  ];

  const filteredData = ORGANISASI_DATA.filter(
    (item) => filterCategory === "Semua" || item.category === filterCategory,
  );

  // Handler saat kartu organisasi diklik
  const handleSelectOrg = (item: Organisasi) => {
    setSelectedOrg(item);
    // Buka modal khusus di layar mobile/tablet (< 1024px)
    if (window.innerWidth < 1024) {
      setIsMobileModalOpen(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* KONTEN UTAMA: DAFTAR ORGANISASI (8 COLUMNS) */}
      <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            7 Organisasi Siswa SMKN 1 Bantul
          </h2>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">
            Wadah bagi siswa untuk melatih kepemimpinan, berorganisasi,
            dan berkontribusi aktif dalam iklim sekolah yang kondusif.
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

        {/* List Card Organisasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredData.map((item) => {
            const isSelected = selectedOrg.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectOrg(item)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 group ${
                  isSelected
                    ? "bg-sky-50 border-sky-500 shadow-md ring-1 ring-sky-500"
                    : "bg-slate-50 border-slate-200/80 hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700">
                      {item.shortName}
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
                    <LuShield className="w-3.5 h-3.5 text-sky-500" />
                    {item.category}
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
        <OrgDetailCard selectedOrg={selectedOrg} />
      </aside>

      {/* MOBILE MODAL OVERLAY (VISIBLE ONLY ON MOBILE/TABLET WHEN OPEN) */}
      <div
        className={`${
          isMobileModalOpen ? "" : "pointer-events-none"
        } fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:hidden`}
      >
        <div
          className={`${
            isMobileModalOpen ? "" : "opacity-0"
          } duration-300 absolute inset-0 bg-slate-900/60 backdrop-blur-sm`}
          onClick={() => setIsMobileModalOpen(false)}
        ></div>
        <div
          className={`${
            isMobileModalOpen ? "" : "translate-y-full"
          } duration-300 ease-in-out relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Modal Mobile */}
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Detail Organisasi Siswa
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
            <OrgDetailCard selectedOrg={selectedOrg} />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Komponen Reusable Card Detail Organisasi */
}
function OrgDetailCard({
  selectedOrg,
}: {
  selectedOrg: Organisasi;
}): React.ReactElement {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      {/* Gambar Organisasi Terpilih */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={selectedOrg.image}
          alt={selectedOrg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/20">
            {selectedOrg.shortName} • {selectedOrg.category}
          </span>
          <h3 className="text-lg font-black text-white mt-1">
            {selectedOrg.name}
          </h3>
        </div>
      </div>

      {/* Rincian Informasi */}
      <div className="p-5 space-y-4">
        <p className="text-xs text-slate-600 leading-relaxed">
          {selectedOrg.desc}
        </p>

        <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <LuCalendar className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-semibold">
                Agenda Pertemuan:
              </strong>
              <span>{selectedOrg.meetingSchedule}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <LuMapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-semibold">
                Lokasi:
              </strong>
              <span>{selectedOrg.baseLocation}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <LuUserCheck className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-slate-900 font-semibold">
                Pembimbing:
              </strong>
              <span>{selectedOrg.advisor}</span>
            </div>
          </div>
        </div>

        {/* Program Kerja Unggulan */}
        <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-3.5 space-y-1.5">
          <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider flex items-center gap-1">
            <LuAward className="w-3.5 h-3.5 text-amber-500" />
            Program Kerja Unggulan
          </span>
          {selectedOrg.programs.map((prog, idx) => (
            <p
              key={idx}
              className="text-xs font-semibold text-slate-800 flex items-center gap-1.5"
            >
              <LuCircleCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>{prog}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
