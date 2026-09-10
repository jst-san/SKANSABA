import React from "react";
import { notFound } from "next/navigation";
import {
  LuSparkles,
  LuCircleCheck,
  LuBuilding2,
  LuBriefcase,
  LuGraduationCap,
  LuAward,
} from "react-icons/lu";
import {JURUSAN_DATA} from "../../lib/data"

export default async function JurusanDetailPage({
  params,
}: {
  params: { shortCode: string };
}): React.ReactElement {
    const {shortCode} = await params
    const data = JURUSAN_DATA.find((d) => d.shortCode.toLowerCase() === shortCode);

  if (!data) {
    notFound();
  }

  return (
    <div className="space-y-10">
      {/* 1. RINGKASAN PROGRAM & KEUNGGULAN */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold">
          <LuSparkles className="w-4 h-4 text-sky-600" />
          <span>Fokus Spesialisasi</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Ikhtisar Program Keahlian {data.code}
        </h2>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          {data.desc}
        </p>
      </div>

      {/* 2. GRID KOMPETENSI & FASILITAS PRAKTIK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Kompetensi Keahlian */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2.5 text-sky-600 font-extrabold text-base border-b border-slate-200/80 pb-3">
            <LuGraduationCap className="w-5 h-5" />
            <h3>Kompetensi Utama yang Dipelajari</h3>
          </div>
          <ul className="space-y-3">
            {data.keahlian.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <LuCircleCheck className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fasilitas Laboratorium */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-700 font-extrabold text-base border-b border-slate-200/80 pb-3">
            <LuBuilding2 className="w-5 h-5 text-amber-600" />
            <h3>Fasilitas Praktik &amp; Laboratorium</h3>
          </div>
          <ul className="space-y-3">
            {data.fasilitas.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <LuCircleCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. PROSPEK KARIR LULUSAN */}
      <div className="border border-slate-200/80 rounded-2xl p-6 sm:p-8 bg-white space-y-4 shadow-sm">
        <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-lg">
          <LuBriefcase className="w-5 h-5 text-sky-500" />
          <h3>Prospek Karir &amp; Pekerjaan Lulusan</h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Lulusan jurusan {data.name} diproyeksikan untuk mengisi posisi kerja
          potensial di berbagai industri modern:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {data.prospek.map((p, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-center font-bold text-xs text-sky-900 hover:bg-sky-500 hover:text-white transition-colors cursor-default"
            >
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* 4. KERJASAMA MITRA INDUSTRI DUDI */}
      <div className="bg-sky-500 rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/20">
            Kemitraan DUDI
          </span>
          <h3 className="text-xl font-extrabold text-white">
            Pasangan Industri Resmi
          </h3>
          <p className="text-xs text-sky-100 max-w-xl leading-relaxed">
            Penyelenggaraan Praktik Kerja Lapangan (PKL) dan penyaluran tenaga
            kerja jurusan {data.code} didukung penuh oleh mitra perusahaan
            terkemuka.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 shrink-0">
          {data.mitra.map((m, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
