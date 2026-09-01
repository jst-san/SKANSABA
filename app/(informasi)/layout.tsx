"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuDownload,
  LuNewspaper,
  LuMapPin,
  LuChevronRight,
  LuInfo,
  LuPhone,
  LuMail,
  LuClock,
  LuMegaphone,
} from "react-icons/lu";

interface InformasiLayoutProps {
  children: React.ReactNode;
}

export default function InformasiLayout({
  children,
}: InformasiLayoutProps): React.ReactElement {
  const pathname = usePathname();

  // Definisi sub-navigasi internal grup Informasi
  const navTabs = [
    {
      label: "Download Berkas",
      path: "/download",
      icon: LuDownload,
      desc: "Unduh formulir, brosur, dan dokumen penting sekolah",
    },
    {
      label: "Berita",
      path: "/berita",
      icon: LuNewspaper,
      desc: "Kabar terbaru, agenda, dan pengumuman resmi",
    },
    {
      label: "Area Sekolah",
      path: "/area-sekolah",
      icon: LuMapPin,
      desc: "Peta kawasan, denah lingkungan, dan fasilitas kampus",
    },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* 1. HERO HEADER BANNER INFORMASI */}
      <section
        className="relative bg-center bg-cover bg-no-repeat border-b border-slate-200/60 text-white pt-10 pb-12 overflow-hidden"
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
            <span className="text-sky-400">Informasi</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-3 shadow-sm">
              <LuInfo className="w-4 h-4" />
              <span>Portal Informasi Publik</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Pusat Informasi &amp; Layanan
            </h1>
            <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
              Akses cepat pengumuman resmi, berita terkini, unduhan dokumen
              administrasi, serta panduan area lokasi SMKN 1 Bantul.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SUB-NAVIGATION TABS */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive =
                pathname === tab.path || pathname.endsWith(tab.path);

              return (
                <Link
                  key={tab.path}
                  href={tab.path}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 border-sky-500"
                      : "bg-slate-100/70 text-slate-600 hover:bg-sky-50 hover:text-sky-600 border-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`}
                  />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT LAYOUT GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Dynamic View Content */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            {children}
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
                    Layanan Informasi Publik
                  </span>
                  <h4 className="text-base font-extrabold text-white">
                    Pengumuman &amp; Berkas
                  </h4>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-sky-100 mb-4">
                Akses dan unduh formulir resmi, buku saku siswa, serta jadwal
                kegiatan terbaru SMKN 1 Bantul secara mudah.
              </p>
              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-sky-100 font-medium">
                <Link
                  href="/download"
                  className="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-xs transition-colors"
                >
                  Unduh Berkas &rarr;
                </Link>
                <span className="text-[10px] font-semibold text-sky-100">
                  Update Berkala
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
