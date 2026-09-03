import React from "react";
import Link from "next/link";
import {
  LuChevronRight,
  LuMegaphone,
  LuPhone,
  LuMail,
  LuClock,
  LuMapPin,
  LuDownload,
  LuFileText,
  LuInfo,
} from "react-icons/lu";

export default function BerkasSPMBPage() {
  const downloadItems = [
    {
      id: "spmb-2026",
      title: "Pamflet SPMB SMKN 1 Bantul 2026",
      category: "SPMB & Pendaftaran",
      fileType: "PDF",
      fileSize: "6.4 MB",
      date: "11 Mei 2026",
      url: "https://smkn1bantul.sch.id/storage/downloads/01KRAW5Y24ECJ0MQSS1914JTM0.pdf",
      icon: LuFileText,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: "daya-tampung-spmb",
      title: "Daya Tampung SPMB SMKN 1 Bantul 2026",
      category: "SPMB & Pendaftaran",
      fileType: "PDF",
      fileSize: "275 KB",
      date: "11 Mei 2026",
      url: "https://smkn1bantul.sch.id/storage/downloads/01KRAW7E8J2VP7AA9VTSZA2XQ1.jpeg",
      icon: LuFileText,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
    {
      id: "juknis-penerimaan-murid-baru",
      title:
        "Juknis Penerimaan Murib Baru Jenjang SMA SMK dan SLB TA 2026-2027",
      category: "SPMB & Pendaftaran",
      fileType: "PDF",
      fileSize: "3.2 MB",
      date: "11 Mei 2026",
      url: "https://smkn1bantul.sch.id/storage/downloads/01KRAW32XDJ0DRZCDCDTHJGB60.pdf",
      icon: LuFileText,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    },
  ];
  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* 1. HERO HEADER BANNER BERKAS-SPMB */}
      <section
        className="relative bg-cover bg-center bg-no-repeat border-b border-slate-200/60 text-white pt-10 pb-12 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg')",
        }}
      >
        {/* Dark overlay untuk konsistensi keterbacaan teks */}
        <div className="w-full h-full bg-black/35 absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-sky-400 transition-colors">
              Beranda
            </Link>
            <LuChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-sky-400">Berkas SPMB</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-3 shadow-sm">
              <LuInfo className="w-4 h-4" />
              <span>Layanan SPMB 2026/2027</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Pusat Informasi &amp; Berkas SPMB
            </h1>
            <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
              Akses cepat syarat pendaftaran, unduhan formulir kelengkapan
              administrasi, brosur jurusan, serta jadwal alur seleksi SPMB SMKN
              1 Bantul.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT LAYOUT GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Dynamic View Content */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-8">
              {/* 1. HEADER HALAMAN BERKAS-SPMB */}
              <div className="border-b border-slate-100 pb-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Download Berkas SPMB
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Pusat unduhan dokumen administrasi, brosur pendaftaran,
                  formulir kelengkapan, dan pedoman alur seleksi SPMB SMKN 1
                  Bantul.
                </p>
              </div>

              {/* 2. DAFTAR BERKAS BERKAS-SPMB */}
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

              {/* 3. CATATAN & PETUNJUK UNDUHAN */}
              <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 flex items-start gap-3">
                <LuInfo className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">
                    Petunjuk Pengunduhan &amp; Penggunaan Berkas
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Seluruh dokumen resmi di atas dalam format PDF dapat dibuka
                    menggunakan aplikasi Acrobat Reader atau web browser
                    standar. Jika Anda membutuhkan dokumen fisik bernomor
                    registrasi khusus, silakan menghubungi Sekretariat TU SMKN 1
                    Bantul pada jam kerja.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Information Card */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Informasi Publik & Layanan Berkas Quick Box */}
            <div className="bg-sky-500 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
                  <LuMegaphone className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-100 block">
                    Informasi Kelengkapan SPMB
                  </span>
                  <h4 className="text-base font-extrabold text-white">
                    Berkas &amp; Persyaratan
                  </h4>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-sky-100 mb-4">
                Unduh formulir pendaftaran, brosur resmi, dan surat pernyataan
                calon peserta didik baru T.A. 2026/2027 secara lengkap.
              </p>
              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-sky-100 font-medium">
                <Link
                  href="/berkas-spmb"
                  className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs transition-colors"
                >
                  Unduh Berkas &rarr;
                </Link>
                <span className="text-[10px] font-semibold text-sky-100">
                  T.A. 2026/2027
                </span>
              </div>
            </div>

            {/* Contact & Operating Hours Info */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Layanan Hubungi Kami
              </h3>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <LuMapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>
                    Jl. Parangtritis No.KM.11, Dukuh, Sabdodadi, Kec. Bantul,
                    D.I. Yogyakarta 55715
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <LuPhone className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>+62 274 367 156</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <LuMail className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>info@smkn1bantul.sch.id</span>
                </div>
                <div className="flex items-center gap-2.5 pt-1 border-t border-slate-100 text-slate-500">
                  <LuClock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Senin - Jumat: 07.00 - 15.30 WIB</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
