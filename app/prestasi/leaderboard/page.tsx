"use client";

import React, { useState, useMemo } from "react";
import {useRouter} from "next/navigation";
import {
  LuTrophy,
  LuSparkles,
  LuSearch,
  LuChevronLeft,
  LuChevronRight,
  LuFilter,
  LuRotateCcw,
  LuCheck,
} from "react-icons/lu";
import { STUDENTS_DATA, StudentEntity } from "../../lib/data";

// Bobot Poin Per Jenjang Kompetisi
const CATEGORY_WEIGHTS: Record<string, number> = {
  internasional: 500,
  nasional: 300,
  provinsi: 150,
  kabupaten: 75,
  internal: 25,
};

// Opsi Filter Jurusan
const JURUSAN_OPTIONS = [
  { code: "rpl", label: "RPL" },
  { code: "tkj", label: "TKJ" },
  { code: "dkv", label: "DKV" },
  { code: "akl", label: "AKL" },
  { code: "lps", label: "LPS" },
  { code: "mp", label: "MP" },
  { code: "br", label: "BR" },
  { code: "bd", label: "BD" },
];

// Opsi Filter Kategori/Jenjang
const CATEGORY_OPTIONS = [
  { code: "internasional", label: "Internasional", short: "IT" },
  { code: "nasional", label: "Nasional", short: "NS" },
  { code: "provinsi", label: "Provinsi", short: "PR" },
  { code: "kabupaten", label: "Kabupaten", short: "KB" },
  { code: "internal", label: "Sekolah", short: "SK" },
];

export default function LeaderboardPage(): React.ReactElement {
  const router = useRouter()
  // State Search & Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // State Filter Panel (Dua Arah: Staging vs Applied)
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedJurusans, setSelectedJurusans] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // State Filter yang Sedang Aktif Dipakai
  const [appliedJurusans, setAppliedJurusans] = useState<string[]>([]);
  const [appliedCategories, setAppliedCategories] = useState<string[]>([]);

  // Toggle Jurusan Multi-select (Draft)
  const toggleJurusan = (code: string) => {
    setSelectedJurusans((prev) =>
      prev.includes(code) ? prev.filter((j) => j !== code) : [...prev, code],
    );
  };

  // Toggle Kategori Multi-select (Draft)
  const toggleCategory = (code: string) => {
    setSelectedCategories((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
    );
  };

  // Terapkan Filter (Apply Filter)
  const handleApplyFilter = () => {
    setAppliedJurusans([...selectedJurusans]);
    setAppliedCategories([...selectedCategories]);
    setCurrentPage(1);
    setIsFilterOpen(false);
  };

  // Reset Filter
  const handleResetFilter = () => {
    setSelectedJurusans([]);
    setSelectedCategories([]);
    setAppliedJurusans([]);
    setAppliedCategories([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  // Daftar Kategori Aktif untuk Ditampilkan
  const activeCategoryOptions = useMemo(() => {
    if (!appliedCategories.length) return CATEGORY_OPTIONS;
    return CATEGORY_OPTIONS.filter((c) => appliedCategories.includes(c.code));
  }, [appliedCategories]);

  // 1. FILTER & PERHITUNGAN MANUAL POIN DENGAN PERINGKAT DINAMIS
  const filteredAndRankedStudents = useMemo(() => {
    const activeCats =
      appliedCategories.length > 0
        ? appliedCategories
        : Object.keys(CATEGORY_WEIGHTS);

    let list = STUDENTS_DATA.filter((s) => {
      if (appliedJurusans.length > 0) {
        return appliedJurusans.includes(s.jurusan.toLowerCase());
      }
      return true;
    });

    const calculatedList = list.map((student) => {
      const counts = student.options?.achievementsCount || {
        internasional: 0,
        nasional: 0,
        provinsi: 0,
        kabupaten: 0,
        internal: 0,
      };

      let calculatedPoints = 0;
      activeCats.forEach((cat) => {
        const count = counts[cat as keyof typeof counts] || 0;
        const weight = CATEGORY_WEIGHTS[cat] || 0;
        calculatedPoints += count * weight;
      });

      return {
        ...student,
        calculatedPoints,
      };
    });

    calculatedList.sort((a, b) => b.calculatedPoints - a.calculatedPoints);

    return calculatedList.map((student, index) => ({
      ...student,
      filterRank: index + 1,
    }));
  }, [appliedJurusans, appliedCategories]);

  // Top 3 Podium dari Peringkat Filter Aktif
  const top1 = filteredAndRankedStudents[0];
  const top2 = filteredAndRankedStudents[1];
  const top3 = filteredAndRankedStudents[2];

  // 2. PENJARINGAN BERDASARKAN SEARCH TERM (Peringkat `filterRank` Tetap Aman)
  const lowerRanksAll = filteredAndRankedStudents.slice(3);
  const filteredLowerRanks = lowerRanksAll.filter((student) => {
    const query = searchTerm.toLowerCase();
    const classStr = `${student.kelas} ${student.jurusan.toUpperCase()} ${student.rombel}`;
    return (
      student.name.toLowerCase().includes(query) ||
      classStr.toLowerCase().includes(query) ||
      student.jurusan.toLowerCase().includes(query)
    );
  });

  // 3. LOGIKA PAGINATION
  const FIRST_PAGE_LOWER_ITEMS = 7;
  const ITEMS_PER_PAGE_AFTER_FIRST = 10;

  const totalLowerItems = filteredLowerRanks.length;
  const totalPages =
    totalLowerItems <= FIRST_PAGE_LOWER_ITEMS
      ? 1
      : 1 +
        Math.ceil(
          (totalLowerItems - FIRST_PAGE_LOWER_ITEMS) /
            ITEMS_PER_PAGE_AFTER_FIRST,
        );

  const paginatedLowerRanks = useMemo(() => {
    if (currentPage === 1) {
      return filteredLowerRanks.slice(0, FIRST_PAGE_LOWER_ITEMS);
    }
    const startIndex =
      FIRST_PAGE_LOWER_ITEMS + (currentPage - 2) * ITEMS_PER_PAGE_AFTER_FIRST;
    return filteredLowerRanks.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE_AFTER_FIRST,
    );
  }, [filteredLowerRanks, currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Helper Pemeta Nama Jurusan
  const getJurusanName = (code: string) => {
    const map: Record<string, string> = {
      rpl: "Rekayasa Perangkat Lunak",
      tkj: "Teknik Komputer & Jaringan",
      dkv: "Desain Komunikasi Visual",
      akl: "Akuntansi & Keuangan Lembaga",
      lps: "Layanan Perbankan Syariah",
      mp: "Manajemen Perkantoran",
      br: "Bisnis Retail",
      bd: "Bisnis Digital",
    };
    return map[code.toLowerCase()] || code.toUpperCase();
  };

  const isFilterActive =
    appliedJurusans.length > 0 || appliedCategories.length > 0;

  return (
    <div className="space-y-8 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* 1. HEADER HALAMAN LEADERBOARD */}
      <div className="border-b border-slate-100 py-12 text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-sky-500 tracking-tight">
          Achievement Leaderboard
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Peringkat prestasi siswa SMKN 1 Bantul berdasarkan akumulasi perolehan
          kejuaraan di tingkat internasional hingga sekolah.
        </p>
      </div>

      {/* BARIS KONTROL FILTER & PENCARIAN */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              isFilterActive
                ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <LuFilter className="w-4 h-4" />
            <span>Filter Kategori &amp; Jurusan</span>
            {isFilterActive && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full bg-white text-sky-700 text-[10px] font-extrabold">
                {appliedJurusans.length + appliedCategories.length}
              </span>
            )}
          </button>

          {isFilterActive && (
            <button
              onClick={handleResetFilter}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors"
            >
              <LuRotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filter</span>
            </button>
          )}
        </div>

        {/* PANEL FILTER DROPDOWN / TOGGLE */}
        {isFilterOpen && (
          <div className="pt-4 border-t border-slate-200/80 space-y-4 animate-in fade-in duration-200">
            {/* Multi-select Jurusan */}
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                Pilih Jurusan
              </label>
              <div className="flex flex-wrap gap-1.5">
                {JURUSAN_OPTIONS.map((j) => {
                  const isSelected = selectedJurusans.includes(j.code);
                  return (
                    <button
                      key={j.code}
                      onClick={() => toggleJurusan(j.code)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {isSelected && <LuCheck className="w-3.5 h-3.5" />}
                      <span>{j.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Multi-select Kategori / Jenjang */}
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider block">
                Pilih Kategori Kompetisi
              </label>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORY_OPTIONS.map((k) => {
                  const isSelected = selectedCategories.includes(k.code);
                  return (
                    <button
                      key={k.code}
                      onClick={() => toggleCategory(k.code)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                        isSelected
                          ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {isSelected && <LuCheck className="w-3.5 h-3.5" />}
                      <span>{k.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons Filter */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200/60">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200/60 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleApplyFilter}
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-colors"
              >
                Terapkan Filter
              </button>
            </div>
          </div>
        )}

        {/* CHIPS FILTER AKTIF */}
        {isFilterActive && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/60 text-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase">
              Filter Aktif:
            </span>
            {appliedJurusans.map((j) => (
              <span
                key={j}
                className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 font-bold text-[10px] flex items-center gap-1"
              >
                Jurusan: {j.toUpperCase()}
              </span>
            ))}
            {appliedCategories.map((c) => (
              <span
                key={c}
                className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 font-bold text-[10px] flex items-center gap-1"
              >
                Jenjang: {c.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 2. PODIUM TOP 3 - LAYOUT DESKTOP */}
      <div className="hidden sm:block pt-4 pb-2">
        <div className="grid grid-cols-3 gap-4 lg:gap-6 items-end max-w-4xl mx-auto">
          {/* JUARA 2 */}
          {top2 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm flex flex-col items-center relative" onClick={() => router.push(`/students-directory/${top2.nis}`)}>
              <div className="relative mb-3">
                <img
                  // src={
                  //   top2.options?.avatar ||
                  //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  // }
                  src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                  alt={top2.name}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-slate-300 shadow-md"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-700 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                  #2
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm line-clamp-1 mt-1">
                {top2.name}
              </h3>
              <p className="text-xs text-sky-600 font-bold mb-3">
                {top2.kelas} {top2.jurusan.toUpperCase()} {top2.rombel}
              </p>

              <div className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5 mb-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Total Poin
                </span>
                <span className="text-base font-black text-slate-900 block">
                  {top2.calculatedPoints.toLocaleString()}
                </span>
              </div>

              <div className="w-full flex items-center justify-around gap-1 text-[10px] font-bold text-slate-600 pt-2 border-t border-slate-100">
                {activeCategoryOptions.map((c) => (
                  <div key={c.code} title={c.label}>
                    {c.short}{" "}
                    {top2.options?.achievementsCount
                      ? top2.options.achievementsCount[
                          c.code as
                            | "internasional"
                            | "nasional"
                            | "provinsi"
                            | "kabupaten"
                            | "internal"
                        ] || 0
                      : 0}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* JUARA 1 */}
          {top1 && (
            <div className="bg-sky-500 border-2 border-sky-400 rounded-2xl p-6 text-center text-white shadow-xl flex flex-col items-center relative -translate-y-4" onClick={() => router.push(`/students-directory/${top1.nis}`)}>

              <div className="relative my-2">
                <img
                  // src={
                  //   top1.options?.avatar ||
                  //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  // }
                  src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                  alt={top1.name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-sky-300/30"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-sky-950 font-black text-xs px-3 py-0.5 rounded-full shadow-md">
                  #1
                </span>
              </div>

              <h3 className="font-extrabold text-white text-base line-clamp-1 mt-1">
                {top1.name}
              </h3>
              <p className="text-xs text-sky-200 font-semibold mb-3">
                {top1.kelas} {top1.jurusan.toUpperCase()} {top1.rombel}
              </p>

              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 space-y-0.5 mb-3">
                <span className="text-[10px] text-sky-200 font-bold uppercase block">
                  Total Poin
                </span>
                <span className="text-lg font-black text-white block">
                  {top1.calculatedPoints.toLocaleString()} Poin
                </span>
              </div>

              <div className="w-full flex items-center justify-around gap-1 text-[10px] font-bold text-sky-100 pt-2 border-t border-white/20">
                {activeCategoryOptions.map((c) => (
                  <div key={c.code} className="bg-white/10 px-1.5 py-1 rounded">
                    {c.short}{" "}
                    {top1.options?.achievementsCount
                      ? top1.options.achievementsCount[
                          c.code as
                            | "internasional"
                            | "nasional"
                            | "provinsi"
                            | "kabupaten"
                            | "internal"
                        ] || 0
                      : 0}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* JUARA 3 */}
          {top3 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm flex flex-col items-center relative" onClick={() => router.push(`/students-directory/${top3.nis}`)}>
              <div className="relative mb-3">
                <img
                  // src={
                  //   top3.options?.avatar ||
                  //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  // }
                  src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                  alt={top3.name}
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-indigo-200 shadow-md"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-800 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                  #3
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm line-clamp-1 mt-1">
                {top3.name}
              </h3>
              <p className="text-xs text-sky-600 font-bold mb-3">
                {top3.kelas} {top3.jurusan.toUpperCase()} {top3.rombel}
              </p>

              <div className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5 mb-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Total Poin
                </span>
                <span className="text-base font-black text-slate-900 block">
                  {top3.calculatedPoints.toLocaleString()}
                </span>
              </div>

              <div className="w-full flex items-center justify-around gap-1 text-[10px] font-bold text-slate-600 pt-2 border-t border-slate-100">
                {activeCategoryOptions.map((c) => (
                  <div key={c.code} title={c.label}>
                    {c.short}{" "}
                    {top3.options?.achievementsCount
                      ? top3.options.achievementsCount[
                          c.code as
                            | "internasional"
                            | "nasional"
                            | "provinsi"
                            | "kabupaten"
                            | "internal"
                        ] || 0
                      : 0}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PODIUM TOP 3 - LAYOUT MOBILE */}
      <div className="block sm:hidden space-y-3">
        {top1 && (
          <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-900 border border-sky-400 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  // src={
                  //   top1.options?.avatar ||
                  //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  // }
                  src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                  alt={top1.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-white text-sky-950 font-black text-[10px] px-2 py-0.2 rounded-full shadow-sm">
                  #1
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-wider text-sky-200 bg-white/10 px-2 py-0.5 rounded-full inline-block mb-1">
                  Peringkat 1 Utama
                </span>
                <h3 className="font-extrabold text-white text-sm truncate">
                  {top1.name}
                </h3>
                <p className="text-[11px] text-sky-100 font-medium truncate">
                  {top1.kelas} {top1.jurusan.toUpperCase()} {top1.rombel} •{" "}
                </p>
              </div>

              <div className="text-right shrink-0 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                <span className="text-[9px] font-bold uppercase text-sky-200 block">
                  Poin
                </span>
                <span className="text-sm font-black text-white">
                  {top1.calculatedPoints}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-around gap-1 text-[10px] text-center font-bold text-sky-100">
              {activeCategoryOptions.map((c) => (
                <div key={c.code} className="bg-white/10 px-1.5 py-1 rounded">
                  {c.short}{" "}
                  {top1.options?.achievementsCount
                    ? top1.options.achievementsCount[
                        c.code as
                          | "internasional"
                          | "nasional"
                          | "provinsi"
                          | "kabupaten"
                          | "internal"
                      ] || 0
                    : 0}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          {top2 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative shrink-0">
                    <img
                      // src={
                      //   top2.options?.avatar ||
                      //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                      // }
                      src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                      alt={top2.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-slate-800 text-white font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                      2
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs truncate">
                      {top2.name}
                    </h4>
                    <p className="text-[10px] text-sky-600 font-medium truncate">
                      {top2.kelas} {top2.jurusan.toUpperCase()} {top2.rombel}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-1.5 text-center my-2 border border-slate-100">
                  <span className="text-[9px] text-slate-400 font-bold block uppercase">
                    Poin
                  </span>
                  <span className="text-xs font-black text-slate-800">
                    {top2.calculatedPoints}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-around text-[9px] font-bold text-slate-600 pt-1.5 border-t border-slate-100">
                {activeCategoryOptions.map((c) => (
                  <span key={c.code} title={c.label}>
                    {c.short}{" "}
                    {top2.options?.achievementsCount
                      ? top2.options.achievementsCount[
                          c.code as
                            | "internasional"
                            | "nasional"
                            | "provinsi"
                            | "kabupaten"
                            | "internal"
                        ] || 0
                      : 0}
                  </span>
                ))}
              </div>
            </div>
          )}

          {top3 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative shrink-0">
                    <img
                      // src={
                      //   top3.options?.avatar ||
                      //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                      // }
                      src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                      alt={top3.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-indigo-700 text-white font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                      3
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs truncate">
                      {top3.name}
                    </h4>
                    <p className="text-[10px] text-sky-600 font-medium truncate">
                      {top3.kelas} {top3.jurusan.toUpperCase()} {top3.rombel}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-1.5 text-center my-2 border border-slate-100">
                  <span className="text-[9px] text-slate-400 font-bold block uppercase">
                    Poin
                  </span>
                  <span className="text-xs font-black text-slate-800">
                    {top3.calculatedPoints}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-around text-[9px] font-bold text-slate-600 pt-1.5 border-t border-slate-100">
                {activeCategoryOptions.map((c) => (
                  <span key={c.code} title={c.label}>
                    {c.short}{" "}
                    {top3.options?.achievementsCount
                      ? top3.options.achievementsCount[
                          c.code as
                            | "internasional"
                            | "nasional"
                            | "provinsi"
                            | "kabupaten"
                            | "internal"
                        ] || 0
                      : 0}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* KETERANGAN JENJANG LOMBA */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-600 font-medium">
        <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider block sm:inline">
          Keterangan Singkatan:
        </span>
        <span className="flex items-center gap-1 font-bold">
          <span className="text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
            IT
          </span>{" "}
          Internasional
        </span>
        <span className="flex items-center gap-1 font-bold">
          <span className="text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
            NS
          </span>{" "}
          Nasional
        </span>
        <span className="flex items-center gap-1 font-bold">
          <span className="text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
            PR
          </span>{" "}
          Provinsi
        </span>
        <span className="flex items-center gap-1 font-bold">
          <span className="text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
            KB
          </span>{" "}
          Kabupaten
        </span>
        <span className="flex items-center gap-1 font-bold">
          <span className="text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
            SK
          </span>{" "}
          Sekolah
        </span>
      </div>

      {/* 3. DAFTAR PERINGKAT 4 KE BAWAH (DESAIN SERAGAM DENGAN STUDENTS DIRECTORY) */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
            Peringkat 4+
          </h2>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <LuSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama, kelas, jurusan..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:outline-none focus:bg-white focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* CONTAINER DAFTAR SISWA (SERAGAM DENGAN DIRECTORY) */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-5 shadow-sm divide-y divide-slate-100">
          {paginatedLowerRanks.map((student) => {
            const classRoman =
              student.kelas === 10
                ? "X"
                : student.kelas === 11
                ? "XI"
                : "XII";

            return (
              <div
                key={student.nisn}
                onClick={() => router.push(`/students-directory/${student.nis}`)}
                className="py-4 first:pt-1 last:pb-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-50/50 px-2 rounded-2xl transition-colors"
              >
                {/* PROFIL, RANK & INFORMASI */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center shrink-0 border border-slate-200">
                    #{student.filterRank}
                  </span>

                  <img
                    // src={
                    //   student.options?.avatar ||
                    //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    // }
                    src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
                    alt={student.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-slate-100 shrink-0"
                  />

                  <div className="min-w-0">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg truncate leading-snug">
                      {student.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      {classRoman} {student.jurusan.toUpperCase()} {student.rombel} - ANGKATAN{" "}
                      {student.angkatan}
                    </p>

                    <div className="mt-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500 text-white font-extrabold text-[10px] tracking-wider uppercase">
                        {student.jurusan.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RINCIAN KOMPETISI, STATUS & POIN (SISI KANAN) */}
                <div className="flex items-center justify-between sm:justify-end gap-3.5 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                  {/* Rincian Jumlah Lomba Dinamis Active Filter */}
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-xl">
                    {activeCategoryOptions.map((c, idx) => (
                      <React.Fragment key={c.code}>
                        {idx > 0 && <span className="text-slate-300">•</span>}
                        <span title={c.label}>
                          {c.short}{" "}
                          {student.options?.achievementsCount
                            ? student.options.achievementsCount[
                                c.code as
                                  | "internasional"
                                  | "nasional"
                                  | "provinsi"
                                  | "kabupaten"
                                  | "internal"
                              ] || 0
                            : 0}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Status Indicator & Total Poin */}
                  <div className="text-right shrink-0">
                    <div className="flex items-center justify-end gap-1.5 mb-0.5">
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
                      {student.calculatedPoints}pt
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {paginatedLowerRanks.length === 0 && (
            <div className="text-center py-8 text-xs font-semibold text-slate-500">
              Tidak ada data siswa prestasi yang cocok dengan filter atau
              pencarian.
            </div>
          )}
        </div>

        {/* KONTROL PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500">
              Halaman {currentPage} dari {totalPages}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Halaman Sebelumnya"
              >
                <LuChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? "bg-sky-500 text-white shadow-sm"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Halaman Selanjutnya"
              >
                <LuChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}