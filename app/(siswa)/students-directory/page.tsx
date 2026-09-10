"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  LuSearch,
  LuChevronLeft,
  LuChevronRight,
  LuRotateCcw,
  LuChevronDown,
  LuSlidersHorizontal,
} from "react-icons/lu";
import { STUDENTS_DATA } from "../../lib/data";

const JURUSAN_OPTIONS = [
  { code: "all", label: "Semua Jurusan" },
  { code: "rpl", label: "RPL - Rekayasa Perangkat Lunak" },
  { code: "tkj", label: "TKJ - Teknik Komputer & Jaringan" },
  { code: "dkv", label: "DKV - Desain Komunikasi Visual" },
  { code: "akl", label: "AKL - Akuntansi & Keuangan Lembaga" },
  { code: "lps", label: "LPS - Layanan Perbankan Syariah" },
  { code: "mp", label: "MP - Manajemen Perkantoran" },
  { code: "br", label: "BR - Bisnis Retail" },
  { code: "bd", label: "BD - Bisnis Digital" },
];

const KELAS_OPTIONS = [
  { code: "all", label: "Semua Tingkat" },
  { code: "10", label: "Kelas 10" },
  { code: "11", label: "Kelas 11" },
  { code: "12", label: "Kelas 12" },
];

export default function StudentDirectoryPage(): React.ReactElement {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("all");
  const [selectedKelas, setSelectedKelas] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  // Filter & Search Logic
  const filteredStudents = useMemo(() => {
    return STUDENTS_DATA.filter((student) => {
      const query = searchTerm.toLowerCase();
      const matchSearch =
        student.name.toLowerCase().includes(query) ||
        student.nisn.toString().includes(query) ||
        student.nis.toString().includes(query) ||
        student.jurusan.toLowerCase().includes(query);

      const matchJurusan =
        selectedJurusan === "all" ||
        student.jurusan.toLowerCase() === selectedJurusan.toLowerCase();

      const matchKelas =
        selectedKelas === "all" || student.kelas.toString() === selectedKelas;

      return matchSearch && matchJurusan && matchKelas;
    });
  }, [searchTerm, selectedJurusan, selectedKelas]);

  // Pagination Logic
  const totalItems = filteredStudents.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudents.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredStudents, currentPage]);

  const handleResetFilter = () => {
    setSearchTerm("");
    setSelectedJurusan("all");
    setSelectedKelas("all");
    setCurrentPage(1);
  };

  // Statistik Ringkasan Data Sidebar
  const stats = useMemo(() => {
    const total = STUDENTS_DATA.length;
    const aktif = STUDENTS_DATA.filter((s) => !s.alumni).length;
    const alumni = STUDENTS_DATA.filter((s) => s.alumni).length;

    // Sebaran Per Angkatan
    const angkatanCounts: Record<number, number> = {};
    STUDENTS_DATA.forEach((s) => {
      angkatanCounts[s.angkatan] = (angkatanCounts[s.angkatan] || 0) + 1;
    });

    // Sebaran Per Jurusan
    const jurusanCounts: Record<string, number> = {};
    STUDENTS_DATA.forEach((s) => {
      const key = s.jurusan.toUpperCase();
      jurusanCounts[key] = (jurusanCounts[key] || 0) + 1;
    });

    const aktifPercent = total > 0 ? Math.round((aktif / total) * 100) : 0;

    return { total, aktif, alumni, aktifPercent, angkatanCounts, jurusanCounts };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-16">
      {/* AREA DAFTAR SISWA (SISI KIRI) */}
      <div className="lg:col-span-8 space-y-4">
        {/* HEADER BARIS UTAMA */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-extrabold text-slate-900">
                {selectedJurusan === "all"
                  ? "Semua Siswa"
                  : `Siswa ${selectedJurusan.toUpperCase()}`}
              </h2>
              <span className="text-xs font-bold text-slate-400">
                ({filteredStudents.length})
              </span>
            </div>

            {/* BARIS PENCARIAN DAN FILTER */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-56">
                <LuSearch className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari siswa..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:outline-none focus:bg-white focus:border-sky-500 transition-colors"
                />
              </div>

              <select
                value={selectedJurusan}
                onChange={(e) => {
                  setSelectedJurusan(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
              >
                {JURUSAN_OPTIONS.map((j) => (
                  <option key={j.code} value={j.code}>
                    {j.code.toUpperCase()}
                  </option>
                ))}
              </select>

              <select
                value={selectedKelas}
                onChange={(e) => {
                  setSelectedKelas(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 focus:outline-none focus:border-sky-500 transition-colors"
              >
                {KELAS_OPTIONS.map((k) => (
                  <option key={k.code} value={k.code}>
                    {k.label}
                  </option>
                ))}
              </select>

              {(searchTerm || selectedJurusan !== "all" || selectedKelas !== "all") && (
                <button
                  onClick={handleResetFilter}
                  className="p-2 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Reset Filter"
                >
                  <LuRotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* LIST SISWA VERTIKAL */}
          <div className="divide-y divide-slate-100">
            {paginatedStudents.map((student) => (
              <div
                key={student.nisn}
                onClick={() => router.push(`/students-directory/${student.nis}`)}
                className="py-4 first:pt-1 last:pb-1 flex items-center justify-between gap-4 hover:bg-slate-50/50 px-2 rounded-2xl transition-colors"
              >
                {/* PROFIL & NAMA */}
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    // src={
                    //   student.options?.avatar ||
                    //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    // }
                    src={"https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"}
                    alt={student.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg truncate leading-snug">
                      {student.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      {student.kelas === 10
                        ? "X"
                        : student.kelas === 11
                        ? "XI"
                        : "XII"}{" "}
                      {student.jurusan.toUpperCase()} {student.rombel} - ANGKATAN{" "}
                      {student.angkatan}
                    </p>

                    <div className="mt-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500 text-white font-extrabold text-[10px] tracking-wider uppercase">
                        {student.jurusan.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* STATUS & POIN (SISI KANAN) */}
                <div className="text-right shrink-0">
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        student.alumni ? "bg-slate-400" : "bg-emerald-500"
                      }`}
                    ></span>
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider ${
                        student.alumni ? "text-slate-400" : "text-emerald-500"
                      }`}
                    >
                      {student.alumni ? "ALUMNI" : "SISWA AKTIF"}
                    </span>
                  </div>

                  <span className="text-xl sm:text-2xl font-black text-sky-500 block">
                    {student.points}pt
                  </span>
                </div>
              </div>
            ))}

            {paginatedStudents.length === 0 && (
              <div className="text-center py-12 text-xs font-semibold text-slate-500">
                Tidak ada data siswa yang cocok dengan kriteria pencarian.
              </div>
            )}
          </div>
        </div>

        {/* KONTROL PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition-all"
            >
              <LuChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-2xl font-black text-sm transition-all ${
                  currentPage === page
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-2xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm transition-all"
            >
              <LuChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* SIDEBAR STATISTIK (SISI KANAN) */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6 sticky top-28">
          {/* HEADER SIDEBAR */}
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Statistik
            </h2>
            <p className="text-xs font-semibold text-slate-400 mt-0.5">
              Ringkasan profil siswa aktif dan alumni
            </p>
          </div>

          {/* TABLE TOTAL STATS */}
          <div className="space-y-2 text-sm font-semibold">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-bold">Total</span>
              <span className="font-black text-slate-900 text-base">
                {stats.total}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                <span className="text-slate-600 font-bold">Siswa Aktif</span>
              </div>
              <span className="font-black text-slate-900">{stats.aktif}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span className="text-slate-600 font-bold">Alumni</span>
              </div>
              <span className="font-black text-slate-900">{stats.alumni}</span>
            </div>
          </div>

          {/* DONUT CHART */}
          <div className="py-2 flex flex-col items-center justify-center">
            <div
              className="w-32 h-32 rounded-full relative flex items-center justify-center shadow-inner"
              style={{
                background: `conic-gradient(#38bdf8 0% ${stats.aktifPercent}%, #94a3b8 ${stats.aktifPercent}% 100%)`,
              }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Total
                </span>
                <span className="text-base font-black text-slate-900 leading-none mt-0.5">
                  {stats.total}
                </span>
              </div>
            </div>

            {/* LEGEND GRAFIK */}
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-600 mt-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                <span>Aktif</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                <span>Alumni</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* PER ANGKATAN */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Per Angkatan
            </h3>

            <div className="space-y-2.5">
              {Object.entries(stats.angkatanCounts)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([year, count]) => {
                  const percentage = Math.round((count / stats.total) * 100);
                  return (
                    <div key={year} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-500">{year}</span>
                        <span className="font-black text-slate-900">
                          {count}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-sky-400 h-full rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="pt-1 text-center">
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <LuChevronDown className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* PER JURUSAN */}
          <div className="space-y-3">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              Per Jurusan
            </h3>

            <div className="space-y-2.5">
              {Object.entries(stats.jurusanCounts).map(([jurusan, count]) => {
                const percentage = Math.round((count / stats.total) * 100);
                return (
                  <div key={jurusan} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-500">
                        {jurusan}
                      </span>
                      <span className="font-black text-slate-900">
                        {count}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-1 text-center">
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <LuChevronDown className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}