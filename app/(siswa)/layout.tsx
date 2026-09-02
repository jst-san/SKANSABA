"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuChevronRight, LuUsers, LuActivity, LuContact } from "react-icons/lu";

// Data Meta Kesiswaan untuk Banner & Tab Navigasi
const SISWA_PAGES = [
  {
    slug: "ekstrakurikuler",
    name: "Ekstrakurikuler",
    icon: LuActivity,
    bannerImg:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    description:
      "Pengembangan minat, bakat, olahraga, seni, dan kreativitas siswa di luar kegiatan akademik.",
  },
  {
    slug: "organisasi",
    name: "Organisasi Siswa",
    icon: LuUsers,
    bannerImg:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    description:
      "Wadah kepemimpinan dan karakter siswa melalui OSIS, MPK, dan organisasi kesiswaan di SMKN 1 Bantul.",
  },
  {
    slug: "students-directory",
    name: "Students Directory",
    icon: LuContact,
    bannerImg:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description:
      "Direktori dan profil data siswa aktif SMKN 1 Bantul dari seluruh program keahlian.",
  },
];

export default function SiswaLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const pathname = usePathname();

  // Ambil slug halaman dari pathname saat ini
  const currentSlug = pathname.split("/").pop() || "organisasi";
  const activePage =
    SISWA_PAGES.find((p) => p.slug === currentSlug) || SISWA_PAGES[0];

  const IconHeader = activePage.icon;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* 1. DYNAMIC HERO HEADER BANNER */}
      <section
        className="relative bg-cover bg-center bg-gradient-to-b from-sky-50/80 via-blue-50/40 to-[#fafafa] border-b border-slate-200/60 text-white pt-10 pb-12 overflow-hidden"
        style={{
          backgroundImage: `url('${activePage.bannerImg}')`,
        }}
      >
        <div className="w-full h-full bg-black/25 absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-sky-400 transition-colors">
              Beranda
            </Link>
            <LuChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span>Program Keahlian</span>
            <LuChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-sky-400">{activePage.name}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-3 shadow-sm">
              <IconHeader className="w-4 h-4" />
              <span>{activePage.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {activePage.name}
            </h1>

            <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
              {activePage.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. SINGLE TAB NAVIGATION BAR */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {SISWA_PAGES.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentSlug === tab.slug;

              return (
                <Link
                  key={tab.slug}
                  href={`/${tab.slug}`}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 border-sky-500"
                      : "bg-slate-100/70 text-slate-600 hover:bg-sky-50 hover:text-sky-600 border-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`}
                  />
                  <span>{tab.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {children}
      </main>
    </div>
  );
}
