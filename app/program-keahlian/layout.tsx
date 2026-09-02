"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuChevronRight,
  LuSparkles,
  LuCode,
  LuNetwork,
  LuPalette,
  LuCalculator,
  LuLandmark,
  LuBriefcase,
  LuShoppingBag,
  LuStore,
} from "react-icons/lu";


// Data Meta Jurusan untuk Banner & Tab Navigasi Tunggal
const JURUSAN_LIST = [
  {
    shortCode: "AKL",
    name: "Akuntansi & Keuangan Lembaga",
    icon: LuCalculator,
    bannerImg:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "LPS",
    name: "Layanan Perbankan Syariah",
    icon: LuLandmark,
    bannerImg:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "MP",
    name: "Manajemen Perkantoran",
    icon: LuBriefcase,
    bannerImg:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "BR",
    name: "Bisnis Retail",
    icon: LuStore,
    bannerImg:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "BD",
    name: "Bisnis Digital",
    icon: LuShoppingBag,
    bannerImg:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "DKV",
    name: "Desain Komunikasi Visual",
    icon: LuPalette,
    bannerImg:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "RPL",
    name: "Rekayasa Perangkat Lunak",
    icon: LuCode,
    bannerImg:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    shortCode: "TKJ",
    name: "Teknik Komputer & Jaringan",
    icon: LuNetwork,
    bannerImg:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
  },
];



export default function ProgramKeahlianLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const pathname = usePathname();

  // Ambil shortCode jurusan dari pathname saat ini
  const currentshortCode = pathname.split("/").pop();
  const activeJurusan =
    JURUSAN_LIST.find((j) => j.shortCode.toLowerCase() === currentshortCode) || JURUSAN_LIST[0];

  const IconHeader = activeJurusan.icon;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* 1. DYNAMIC HERO HEADER BANNER */}
      <section
        className="relative bg-cover bg-center bg-gradient-to-b from-sky-50/80 via-blue-50/40 to-[#fafafa] border-b border-slate-200/60 text-white pt-10 pb-12 overflow-hidden"
        style={{
          backgroundImage: `url('${activeJurusan.bannerImg}')`,
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
            <span className="text-sky-400">{activeJurusan.shortCode}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-3 shadow-sm">
              <IconHeader className="w-4 h-4" />
              <span>Kode Jurusan: {activeJurusan.shortCode}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {activeJurusan.name}
            </h1>

            <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
              Program keahlian spesialis berstandar industri DUDI di SMKN 1
              Bantul yang dirancang untuk melahirkan tenaga ahli vokasi yang
              kompeten dan siap kerja.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SINGLE TAB NAVIGATION BAR */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {JURUSAN_LIST.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentshortCode === tab.shortCode.toLowerCase();

              return (
                <Link
                  key={tab.shortCode}
                  href={`/program-keahlian/${tab.shortCode.toLowerCase()}`}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20 border-sky-500"
                      : "bg-slate-100/70 text-slate-600 hover:bg-sky-50 hover:text-sky-600 border-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`}
                  />
                  <span>
                    {tab.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FULL-WIDTH CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}
