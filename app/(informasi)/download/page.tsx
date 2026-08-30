import React from "react";
import {
  LuDownload,
  LuFileText,
  LuFileSpreadsheet,
  LuFileCheck,
  LuSearch,
  LuSparkles,
  LuExternalLink,
  LuInfo,
} from "react-icons/lu";

export const metadata = {
  title: "Download Berkas & Dokumen Resmi - SMKN 1 Bantul",
  description:
    "Pusat unduhan formulir, brosur SPMB, pedoman akademik, dan berkas administrasi SMKN 1 Bantul.",
};

export default function DownloadPage(): React.ReactElement {
  // Daftar berkas download resmi SMKN 1 Bantul
  const downloadItems = [
    {
      id: "spmb-2026",
      title: "Brosur & Panduan Pendaftaran SPMB 2026/2027",
      category: "SPMB & Pendaftaran",
      fileType: "PDF",
      fileSize: "2.4 MB",
      date: "12 Februari 2026",
      url: "https://smkn1bantul.sch.id/download/brosur-spmb-2026.pdf",
      icon: LuFileText,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: "formulir-spmb",
      title: "Formulir Biodata & Pernyataan Calon Siswa Baru",
      category: "SPMB & Pendaftaran",
      fileType: "PDF",
      fileSize: "512 KB",
      date: "10 Februari 2026",
      url: "https://smkn1bantul.sch.id/download/formulir-pendaftaran.pdf",
      icon: LuFileCheck,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: "tata-tertib",
      title: "Buku Pedoman Tata Tertib & Hak Kewajiban Siswa",
      category: "Kesiswaan & Akademik",
      fileType: "PDF",
      fileSize: "1.8 MB",
      date: "15 Januari 2026",
      url: "https://smkn1bantul.sch.id/download/tata-tertib-siswa.pdf",
      icon: LuFileText,
      badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    },
    {
      id: "kalender-akademik",
      title: "Kalender Pendidikan SMKN 1 Bantul T.A. 2025/2026",
      category: "Kesiswaan & Akademik",
      fileType: "PDF",
      fileSize: "850 KB",
      date: "05 Januari 2026",
      url: "https://smkn1bantul.sch.id/download/kalender-akademik-2025-2026.pdf",
      icon: LuFileText,
      badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
    },
    {
      id: "jurnal-pkl",
      title: "Format Jurnal & Laporan Praktik Kerja Lapangan (PKL)",
      category: "Humas & Industri (DUDI)",
      fileType: "DOCX",
      fileSize: "320 KB",
      date: "20 November 2025",
      url: "https://smkn1bantul.sch.id/download/format-laporan-pkl.docx",
      icon: LuFileSpreadsheet,
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      id: "beasiswa-kIP",
      title: "Formulir Pengajuan Program Beasiswa & KIP Kuliah/Sekolah",
      category: "Layanan Siswa",
      fileType: "PDF",
      fileSize: "410 KB",
      date: "10 Oktober 2025",
      url: "https://smkn1bantul.sch.id/download/pengajuan-beasiswa.pdf",
      icon: LuFileCheck,
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN DOWNLOAD */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuDownload className="w-4 h-4 text-sky-600" />
          <span>Layanan Informasi Publik</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Download Berkas Resmi
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Pusat unduhan dokumen administrasi, brosur pendaftaran SPMB, formulir
          kesiswaan, dan pedoman akademik SMKN 1 Bantul.
        </p>
      </div>

      {/* 2. HIGHLIGHT BANNER PANDUAN SPMB */}
      <div className="bg-gradient-to-br from-sky-50 via-blue-50/50 to-amber-50/40 border border-sky-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-amber-200 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
            <LuSparkles className="w-3 h-3 text-amber-600" /> Dokumen Terpopuler
          </span>
          <h3 className="text-base font-extrabold text-slate-900 pt-1">
            Panduan &amp; Formulir SPMB 2026/2027
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pastikan membaca brosur resmi sebelum mengisi formulir pendaftaran
            murid baru.
          </p>
        </div>

        <a
          href="https://smkn1bantul.sch.id/download/brosur-spmb-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md shadow-sky-500/10 transition-all flex items-center gap-2 shrink-0"
        >
          <LuDownload className="w-4 h-4" />
          <span>Download Brosur (PDF)</span>
        </a>
      </div>

      {/* 3. DAFTAR BERKAS DOWLOAD */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
            Katalog Berkas &amp; Dokumen
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            Total: {downloadItems.length} Berkas
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-1">
          {downloadItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5 sm:mt-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                      >
                        {item.category}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        Dipublikasikan: {item.date}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span>
                        Format: <strong>{item.fileType}</strong>
                      </span>
                      <span>•</span>
                      <span>
                        Ukuran: <strong>{item.fileSize}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-sky-500 text-slate-700 hover:text-white border border-slate-200/80 hover:border-sky-500 text-xs font-bold transition-all flex items-center justify-center gap-2 shrink-0 shadow-sm"
                >
                  <LuDownload className="w-4 h-4" />
                  <span>Unduh File</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. CATATAN & PETUNJUK UNDUHAN */}
      <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 flex items-start gap-3">
        <LuInfo className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-900">
            Petunjuk Pengunduhan &amp; Penggunaan Berkas
          </h4>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Seluruh dokumen resmi di atas dalam format PDF dapat dibuka
            menggunakan aplikasi Acrobat Reader atau web browser standar. Jika
            Anda membutuhkan dokumen fisik bernomor registrasi khusus, silakan
            menghubungi Sekretariat TU SMKN 1 Bantul pada jam kerja.
          </p>
        </div>
      </div>
    </div>
  );
}
