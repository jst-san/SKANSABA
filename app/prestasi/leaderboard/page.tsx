"use client";

import React, { useState } from "react";
import {
  LuTrophy,
  LuSparkles,
  LuSearch,
  LuChevronRight,
  LuAward,
} from "react-icons/lu";

interface StudentLeaderboard {
  rank: number;
  name: string;
  class: string;
  major: string;
  avatar: string;
  totalPoints: number;
  achievementsCount: {
    internasional: number;
    nasional: number;
    provinsi: number;
    kabupaten: number;
    internal: number;
  };
}

// Data Leaderboard Prestasi Siswa SMKN 1 Bantul
const LEADERBOARD_DATA: StudentLeaderboard[] = [
  {
    rank: 1,
    name: "Muhammad Eksa Arifa",
    class: "XII RPL 1",
    major: "Rekayasa Perangkat Lunak",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    totalPoints: 2450,
    achievementsCount: {
      internasional: 1,
      nasional: 2,
      provinsi: 3,
      kabupaten: 2,
      internal: 1,
    },
  },
  {
    rank: 2,
    name: "Haryo Djati R",
    class: "XII RPL 1",
    major: "Rekayasa Perangkat Lunak",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    totalPoints: 1980,
    achievementsCount: {
      internasional: 0,
      nasional: 2,
      provinsi: 2,
      kabupaten: 4,
      internal: 2,
    },
  },
  {
    rank: 3,
    name: "Anggara Deni A",
    class: "XII MP 2",
    major: "Manajemen Perkantoran",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    totalPoints: 1720,
    achievementsCount: {
      internasional: 0,
      nasional: 1,
      provinsi: 3,
      kabupaten: 2,
      internal: 3,
    },
  },
  {
    rank: 4,
    name: "Siti Nurjanah",
    class: "XI DKV 1",
    major: "Desain Komunikasi Visual",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    totalPoints: 1450,
    achievementsCount: {
      internasional: 0,
      nasional: 1,
      provinsi: 2,
      kabupaten: 3,
      internal: 1,
    },
  },
  {
    rank: 5,
    name: "Rizky Ramadhan",
    class: "XII TKJ 2",
    major: "Teknik Komputer & Jaringan",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    totalPoints: 1210,
    achievementsCount: {
      internasional: 0,
      nasional: 0,
      provinsi: 3,
      kabupaten: 2,
      internal: 4,
    },
  },
  {
    rank: 6,
    name: "Anisa Rahmawati",
    class: "XI AKL 3",
    major: "Akuntansi & Keuangan Lembaga",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    totalPoints: 980,
    achievementsCount: {
      internasional: 0,
      nasional: 0,
      provinsi: 1,
      kabupaten: 4,
      internal: 2,
    },
  },
  {
    rank: 7,
    name: "Fajar Pratama",
    class: "XII LPS 1",
    major: "Layanan Perbankan Syariah",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    totalPoints: 850,
    achievementsCount: {
      internasional: 0,
      nasional: 0,
      provinsi: 1,
      kabupaten: 2,
      internal: 5,
    },
  },
];

export default function LeaderboardPage(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState("");

  const top1 = LEADERBOARD_DATA.find((item) => item.rank === 1);
  const top2 = LEADERBOARD_DATA.find((item) => item.rank === 2);
  const top3 = LEADERBOARD_DATA.find((item) => item.rank === 3);

  const lowerRanks = LEADERBOARD_DATA.filter((item) => item.rank >= 4).filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.major.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-8 pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* 1. HEADER HALAMAN LEADERBOARD */}
      <div className="border-b border-slate-100 pb-6 text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
          <LuTrophy className="w-4 h-4 text-sky-600" />
          <span>Hall of Fame Siswa</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Achievement Leaderboard
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Peringkat prestasi siswa SMKN 1 Bantul berdasarkan akumulasi perolehan
          kejuaraan di tingkat internasional hingga sekolah.
        </p>
      </div>

      {/* 2. PODIUM TOP 3 - LAYOUT DESKTOP (SM DAN LEBIH BESAR) */}
      <div className="hidden sm:block pt-4 pb-2">
        <div className="grid grid-cols-3 gap-4 lg:gap-6 items-end max-w-4xl mx-auto">
          {/* JUARA 2 (KIRI) */}
          {top2 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm flex flex-col items-center relative">
              <div className="relative mb-3">
                <img
                  src={top2.avatar}
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
                {top2.class}
              </p>

              <div className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5 mb-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Total Poin
                </span>
                <span className="text-base font-black text-slate-900 block">
                  {top2.totalPoints.toLocaleString()}
                </span>
              </div>

              <div className="w-full grid grid-cols-5 gap-1 text-[10px] font-bold text-slate-600 pt-2 border-t border-slate-100">
                <div title="Internasional">
                  🌐 {top2.achievementsCount.internasional}
                </div>
                <div title="Nasional">🇮🇩 {top2.achievementsCount.nasional}</div>
                <div title="Provinsi">🏛️ {top2.achievementsCount.provinsi}</div>
                <div title="Kabupaten">
                  🏢 {top2.achievementsCount.kabupaten}
                </div>
                <div title="Internal">🏫 {top2.achievementsCount.internal}</div>
              </div>
            </div>
          )}

          {/* JUARA 1 (TENGAH - TERHUBUNG KARTU KILAU DENGAN AK SEN SKY) */}
          {top1 && (
            <div className="bg-gradient-to-b from-sky-500 via-sky-600 to-indigo-900 border-2 border-sky-400 rounded-2xl p-6 text-center text-white shadow-xl flex flex-col items-center relative -translate-y-4">
              <div className="absolute -top-3.5 bg-sky-300 text-slate-950 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                <LuSparkles className="w-3.5 h-3.5 text-slate-950" /> Peringkat
                1
              </div>

              <div className="relative my-2">
                <img
                  src={top1.avatar}
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
                {top1.class} • {top1.major}
              </p>

              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2.5 space-y-0.5 mb-3">
                <span className="text-[10px] text-sky-200 font-bold uppercase block">
                  Total Poin
                </span>
                <span className="text-lg font-black text-white block">
                  {top1.totalPoints.toLocaleString()} Poin
                </span>
              </div>

              <div className="w-full grid grid-cols-5 gap-1 text-[10px] font-bold text-sky-100 pt-2 border-t border-white/20">
                <div title="Internasional" className="bg-white/10 py-1 rounded">
                  🌐 {top1.achievementsCount.internasional}
                </div>
                <div title="Nasional" className="bg-white/10 py-1 rounded">
                  🇮🇩 {top1.achievementsCount.nasional}
                </div>
                <div title="Provinsi" className="bg-white/10 py-1 rounded">
                  🏛️ {top1.achievementsCount.provinsi}
                </div>
                <div title="Kabupaten" className="bg-white/10 py-1 rounded">
                  🏢 {top1.achievementsCount.kabupaten}
                </div>
                <div title="Internal" className="bg-white/10 py-1 rounded">
                  🏫 {top1.achievementsCount.internal}
                </div>
              </div>
            </div>
          )}

          {/* JUARA 3 (KANAN) */}
          {top3 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm flex flex-col items-center relative">
              <div className="relative mb-3">
                <img
                  src={top3.avatar}
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
                {top3.class}
              </p>

              <div className="w-full bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5 mb-3">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">
                  Total Poin
                </span>
                <span className="text-base font-black text-slate-900 block">
                  {top3.totalPoints.toLocaleString()}
                </span>
              </div>

              <div className="w-full grid grid-cols-5 gap-1 text-[10px] font-bold text-slate-600 pt-2 border-t border-slate-100">
                <div title="Internasional">
                  🌐 {top3.achievementsCount.internasional}
                </div>
                <div title="Nasional">🇮🇩 {top3.achievementsCount.nasional}</div>
                <div title="Provinsi">🏛️ {top3.achievementsCount.provinsi}</div>
                <div title="Kabupaten">
                  🏢 {top3.achievementsCount.kabupaten}
                </div>
                <div title="Internal">🏫 {top3.achievementsCount.internal}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. PODIUM TOP 3 - LAYOUT MOBILE (LENGKAP, RESPONSIF & NYAMAN DIPAKAI) */}
      <div className="block sm:hidden space-y-3">
        {/* HERO CARD RANK #1 */}
        {top1 && (
          <div className="bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-900 border border-sky-400 rounded-2xl p-4 text-white shadow-md relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={top1.avatar}
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
                <p className="text-[11px] text-sky-100 font-medium">
                  {top1.class} • {top1.major}
                </p>
              </div>

              <div className="text-right shrink-0 bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                <span className="text-[9px] font-bold uppercase text-sky-200 block">
                  Poin
                </span>
                <span className="text-sm font-black text-white">
                  {top1.totalPoints}
                </span>
              </div>
            </div>

            {/* Sub-Pills Jenjang Lomba Mobile Rank 1 */}
            <div className="mt-3 pt-2.5 border-t border-white/20 grid grid-cols-5 gap-1 text-[10px] text-center font-bold text-sky-100">
              <div className="bg-white/10 py-1 rounded">
                🌐 {top1.achievementsCount.internasional}
              </div>
              <div className="bg-white/10 py-1 rounded">
                🇮🇩 {top1.achievementsCount.nasional}
              </div>
              <div className="bg-white/10 py-1 rounded">
                🏛️ {top1.achievementsCount.provinsi}
              </div>
              <div className="bg-white/10 py-1 rounded">
                🏢 {top1.achievementsCount.kabupaten}
              </div>
              <div className="bg-white/10 py-1 rounded">
                🏫 {top1.achievementsCount.internal}
              </div>
            </div>
          </div>
        )}

        {/* RANK #2 & RANK #3 SIDE-BY-SIDE ON MOBILE */}
        <div className="grid grid-cols-2 gap-3">
          {/* RANK #2 */}
          {top2 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative shrink-0">
                    <img
                      src={top2.avatar}
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
                      {top2.class}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-1.5 text-center my-2 border border-slate-100">
                  <span className="text-[9px] text-slate-400 font-bold block uppercase">
                    Poin
                  </span>
                  <span className="text-xs font-black text-slate-800">
                    {top2.totalPoints}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-around text-[9px] font-bold text-slate-600 pt-1.5 border-t border-slate-100">
                <span title="Internasional">
                  🌐{top2.achievementsCount.internasional}
                </span>
                <span title="Nasional">
                  🇮🇩{top2.achievementsCount.nasional}
                </span>
                <span title="Provinsi">
                  🏛️{top2.achievementsCount.provinsi}
                </span>
                <span title="Kabupaten">
                  🏢{top2.achievementsCount.kabupaten}
                </span>
              </div>
            </div>
          )}

          {/* RANK #3 */}
          {top3 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative shrink-0">
                    <img
                      src={top3.avatar}
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
                      {top3.class}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-1.5 text-center my-2 border border-slate-100">
                  <span className="text-[9px] text-slate-400 font-bold block uppercase">
                    Poin
                  </span>
                  <span className="text-xs font-black text-slate-800">
                    {top3.totalPoints}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-around text-[9px] font-bold text-slate-600 pt-1.5 border-t border-slate-100">
                <span title="Internasional">
                  🌐{top3.achievementsCount.internasional}
                </span>
                <span title="Nasional">
                  🇮🇩{top3.achievementsCount.nasional}
                </span>
                <span title="Provinsi">
                  🏛️{top3.achievementsCount.provinsi}
                </span>
                <span title="Kabupaten">
                  🏢{top3.achievementsCount.kabupaten}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* KETERANGAN JENJANG LOMBA */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-600 font-medium">
        <span className="text-slate-400 font-bold uppercase text-[9px] tracking-wider block sm:inline">
          Keterangan Icon:
        </span>
        <span className="flex items-center gap-1">🌐 Internasional</span>
        <span className="flex items-center gap-1">🇮🇩 Nasional</span>
        <span className="flex items-center gap-1">🏛️ Provinsi</span>
        <span className="flex items-center gap-1">🏢 Kabupaten</span>
        <span className="flex items-center gap-1">🏫 Sekolah</span>
      </div>

      {/* 3. DAFTAR PERINGKAT 4 KE BAWAH (VERTIKAL RESPONSIF) */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
            Peringkat Selanjutnya (Peringkat 4+)
          </h2>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <LuSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama / kelas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:outline-none focus:bg-white focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Vertical List Card */}
        <div className="space-y-2.5">
          {lowerRanks.map((student) => (
            <div
              key={student.rank}
              className="bg-white border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 hover:border-sky-300 hover:shadow-sm transition-all duration-200 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4"
            >
              {/* Profil & Rank */}
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center shrink-0 border border-slate-200">
                  #{student.rank}
                </span>

                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-slate-200 shrink-0"
                />

                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {student.name}
                  </h3>
                  <p className="text-[11px] text-sky-600 font-semibold truncate">
                    {student.class} • {student.major}
                  </p>
                </div>
              </div>

              {/* Rincian Lomba & Total Poin Mobile/Desktop */}
              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                {/* Micro Badges Jenjang */}
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-xl">
                  <span title="Internasional">
                    🌐 {student.achievementsCount.internasional}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span title="Nasional">
                    🇮🇩 {student.achievementsCount.nasional}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span title="Provinsi">
                    🏛️ {student.achievementsCount.provinsi}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span title="Kabupaten">
                    🏢 {student.achievementsCount.kabupaten}
                  </span>
                </div>

                {/* Total Poin */}
                <div className="text-right shrink-0">
                  <span className="text-[9px] font-bold text-slate-400 uppercase block">
                    Poin
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    {student.totalPoints}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {lowerRanks.length === 0 && (
            <div className="text-center py-8 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500">
              Tidak ada data siswa prestasi yang cocok dengan pencarian.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
