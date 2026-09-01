"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuHistory,
  LuTarget,
  LuNetwork,
  LuBuilding2,
  LuGraduationCap,
  LuAward,
  LuChevronRight,
  LuMapPin,
  LuPhone,
  LuMail,
} from "react-icons/lu";

interface ProfilLayoutProps {
  children: React.ReactNode;
}

export default function ProfilSekolahLayout({
  children,
}: ProfilLayoutProps): React.ReactElement {

  return (
    <div className="pt-24 pb-20 min-h-screen">
      {/* 1. HERO HEADER BANNER PROFIL */}
      <section
        className="relative bg-center bg-gradient-to-b from-sky-50/80 via-blue-50/40 to-[#fafafa] border-b border-slate-200/60 text-white pt-10 pb-12 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg')",
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
            <span className="text-sky-400">Profil Sekolah</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-3 shadow-sm">
              <LuGraduationCap className="w-4 h-4" />
              <span>Mengenal SMKN 1 Bantul</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Profil &amp; Identitas Sekolah
            </h1>
            <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
              Mewujudkan lembaga pendidikan kejuruan yang berintegritas,
              berteknologi tinggi, serta mencetak lulusan kompeten berkarakter
              Profil Pelajar Pancasila.
            </p>
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
            {/* Accreditation & Badge Card */}
            <div className="bg-sky-500 rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20">
                  <LuAward className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-100 block">
                    Status Akreditasi
                  </span>
                  <h4 className="text-lg font-extrabold text-white">
                    Akreditasi A (Unggul)
                  </h4>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-sky-100 mb-4">
                SMK Pusat Keunggulan (Center of Excellence) yang berkomitmen
                tinggi pada kualitas lulusan dan kemitraan industri DUDI.
              </p>
              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-sky-100 font-medium">
                <span>NPSN: 20400416</span>
                <span className="px-2 py-0.5 rounded bg-amber-400 text-amber-950 font-bold text-[10px]">
                  SMK Bisa Hebat
                </span>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Layanan Informasi
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
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
