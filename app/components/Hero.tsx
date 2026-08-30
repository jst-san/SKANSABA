import React from "react";
import { LuSparkles, LuArrowRight, LuPlay, LuBuilding2, LuBookOpen, LuUsers, LuAward } from "react-icons/lu";

export default function Hero({ onOpenVideo }: { onOpenVideo: () => void }): React.ReactElement {
  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-bold mb-6 shadow-sm">
            <LuSparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>SMK Pusat Keunggulan (Center of Excellence)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Mewujudkan Generasi Unggul, Berkarakter &amp;{" "}
            <span className="text-blue-700">Siap Bersaing Global</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            SMKN 1 Bantul menerapkan pembelajaran berbasis industri, penguatan
            Profil Pelajar Pancasila, dan teknologi digital terdepan untuk
            menyiapkan Lusan Siap Kerja, Wirausaha, dan Studi Lanjut (BMW).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#jurusan"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-md shadow-blue-700/10 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Jelajahi 7 Jurusan</span>
              <LuArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenVideo}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold shadow-sm transition-all flex items-center justify-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LuPlay className="w-3 h-3 text-blue-700 fill-blue-700 ml-0.5" />
              </div>
              <span>Lihat Video Profil</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 text-blue-700">
              <LuBookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              8
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Program Keahlian Unggulan
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3 text-amber-700">
              <LuBuilding2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              50+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Mitra Industri (DUDI)
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 text-emerald-700">
              <LuUsers className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              98%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Tingkat Serapan Lulusan
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-3 text-purple-700">
              <LuAward className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              Juara LKS
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Tingkat Nasional &amp; Provinsi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
