import React from "react";
import {
  LuNetwork,
  LuUserCheck,
  LuUsers,
  LuBriefcase,
  LuGraduationCap,
  LuCircleCheck,
  LuBuilding2,
} from "react-icons/lu";

export const metadata = {
  title: "Struktur Organisasi - SMKN 1 Bantul",
  description: "Bagan dan jajaran struktur organisasi manajemen SMKN 1 Bantul.",
};

export default function StrukturOrganisasiPage(): React.ReactElement {
  const wakilKepsek = [
    {
      bidang: "Waka Kurikulum",
      role: "Pengembangan Pembelajaran & Akademik",
      desc: "Bertanggung jawab atas perencanaan kurikulum industri, pelaksanaan KBM, evaluasi belajar, serta sinkronisasi kurikulum DUDI.",
      icon: LuGraduationCap,
    },
    {
      bidang: "Waka Kesiswaan",
      role: "Pembinaan Siswa & Ekstrakurikuler",
      desc: "Mengelola kedisiplinan, penguatan karakter Profil Pelajar Pancasila, OSIS, pembinaan prestasi, dan kegiatan ekstrakurikuler.",
      icon: LuUsers,
    },
    {
      bidang: "Waka Humas & Kemitraan DUDI",
      role: "Hubungan Masyarakat & Industri",
      desc: "Menjalin kerja sama dengan institusi pasangan (DUDI), pengelolaan Praktik Kerja Lapangan (PKL), BKK, dan penyerapan lulusan.",
      icon: LuBriefcase,
    },
    {
      bidang: "Waka Sarana & Prasarana",
      role: "Pengelolaan Fasilitas & Asset",
      desc: "Mengelola pemeliharaan fasilitas kampus, ruang kelas, laboratorium keahlian, serta pengembangan fisik sarpras sekolah.",
      icon: LuBuilding2,
    },
  ];

  const programKeahlianList = [
    { code: "AKL", name: "Akuntansi & Keuangan Lembaga" },
    { code: "LPS", name: "Layanan Perbankan Syariah" },
    { code: "MPLB", name: "Manajemen Perkantoran & Layanan Bisnis" },
    { code: "PM", name: "Pemasaran (Retail & Digital)" },
    { code: "DKV", name: "Desain Komunikasi Visual" },
    { code: "RPL", name: "Rekayasa Perangkat Lunak" },
    { code: "TKJ", name: "Teknik Komputer & Jaringan" },
  ];

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN STRUKTUR ORGANISASI */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuNetwork className="w-4 h-4 text-sky-600" />
          <span>Profil Sekolah</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Struktur Organisasi
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Bagan manajerial dan kepemimpinan SMKN 1 Bantul yang solid dalam
          menjamin tata kelola pendidikan kejuruan yang akuntabel dan
          profesional.
        </p>
      </div>

      {/* 2. KEPALA SEKOLAH & KOMITE (TOP LEVEL) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Kepala Sekolah */}
        <div className="md:col-span-8 bg-gradient-to-br from-sky-50 via-slate-50 to-blue-50/60 border border-sky-200/80 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-24 h-28 rounded-xl overflow-hidden border-2 border-white shadow-md bg-slate-200 shrink-0">
            <img
              src="https://smkn1bantul.sch.id/assets/images/kepsek.jpeg"
              alt="Kepala Sekolah SMKN 1 Bantul"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full inline-block">
              Penanggung Jawab Utama
            </span>
            <h3 className="text-xl font-black text-slate-900">
              Raharjo, S.IP, M.Pd
            </h3>
            <p className="text-xs font-bold text-sky-600">
              Kepala Sekolah SMKN 1 Bantul
            </p>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Memimpin penetapan arah strategis sekolah, pengembangan Teaching
              Factory, serta penguatan sinergi budaya kerja industri.
            </p>
          </div>
        </div>

        {/* Komite Sekolah */}
        <div className="md:col-span-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 w-fit">
              <LuUserCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">Komite Sekolah</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mitra pertimbangan, pendukung, dan pengawas independen dalam
              peningkatan mutu serta pelayanan pendidikan.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
            Kemitraan Masyarakat &amp; Ortu
          </div>
        </div>
      </div>

      {/* 3. WAKIL KEPALA SEKOLAH (MIDDLE MANAGEMENT) */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
          Jajaran Wakil Kepala Sekolah (Waka)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {wakilKepsek.map((waka, idx) => {
            const Icon = waka.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">
                    {waka.role}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {waka.bidang}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {waka.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. KETUA PROGRAM KEAHLIAN */}
      <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">
            Ketua &amp; Pembina Program Keahlian
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Mengoordinasikan kurikulum keahlian spesifik, laboratorium praktik,
            dan uji kompetensi di 7 jurusan unggulan:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {programKeahlianList.map((prog) => (
            <div
              key={prog.code}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 hover:bg-sky-50 hover:border-sky-200 transition-colors"
            >
              <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-700 font-extrabold text-xs">
                {prog.code}
              </span>
              <span className="text-xs font-semibold text-slate-800">
                {prog.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. TATA USAH & UNIT PENDUKUNG */}
      <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <LuCircleCheck className="w-4 h-4 text-sky-600" />
            <span>Kepala Tata Usaha (KTU) &amp; Unit Layanan Administrasi</span>
          </h4>
          <p className="text-[11px] text-slate-600">
            Didukung oleh staf administrasi profesional yang mengelola
            kepegawaian, keuangan, serta kearsipan dan layanan umum sekolah.
          </p>
        </div>
      </div>
    </div>
  );
}
