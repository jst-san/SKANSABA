"use client";

import React, { useState } from "react";
import {
  LuSearch,
  LuMapPin,
  LuBriefcase,
  LuPlus,
  LuMessageSquare,
  LuUsers
} from "react-icons/lu";

// Data dummy Loker dan Jasa
const LOKER_JASA_DATA = [
  {
    id: "1",
    type: "LOKER",
    title: "Full Time Android Developer",
    priceLabel: "Gaji",
    priceRange: "Rp3.000.000 - Rp7.000.000",
    publisher: "PT Gamatechno Indonesia",
    location: "Daerah Istimewa Yogyakarta",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    type: "LOKER",
    title: "Full Time Back End Developer",
    priceLabel: "Gaji",
    priceRange: "Rp4.000.000 - Rp8.000.000",
    publisher: "PT Gamatechno Indonesia",
    location: "Daerah Istimewa Yogyakarta",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "3",
    type: "JASA",
    title: "Pembuatan landing page website",
    priceLabel: "Harga",
    priceRange: "Rp700.000 - Rp2.000.000",
    publisher: "Alumni John Doe",
    location: "Daerah Istimewa Yogyakarta",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
  },
];

export default function AlumniHubPage(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"ALL" | "LOKER" | "JASA">("ALL");

  const filteredData = LOKER_JASA_DATA.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "ALL" || item.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-6">
      {/* 1. HEADER BAR ALUMNI HUB */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/20 shrink-0">
            <LuUsers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight uppercase">
              ALUMNI HUB
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors">
            Ajukan Akun
          </button>
          <button className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-xs transition-colors">
            Login
          </button>
        </div>
      </div>

      {/* 2. KONTEN UTAMA LOKER DAN JASA */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-5 sm:p-8 shadow-xs space-y-6">
        {/* HEADER SECTION & SEARCH */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-100">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Loker dan Jasa
          </h2>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Filter Toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setFilterType("ALL")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterType === "ALL"
                    ? "bg-white text-sky-600 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilterType("LOKER")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterType === "LOKER"
                    ? "bg-white text-emerald-600 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Loker
              </button>
              <button
                onClick={() => setFilterType("JASA")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterType === "JASA"
                    ? "bg-white text-sky-600 shadow-2xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Jasa
              </button>
            </div>

            {/* Input Search */}
            <div className="relative flex-1 sm:w-64">
              <LuSearch className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold focus:outline-none focus:bg-white focus:border-sky-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* LIST ITEM LOKER DAN JASA */}
        <div className="divide-y divide-slate-100">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="py-5 first:pt-2 last:pb-2 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:bg-slate-50/60 p-3 rounded-2xl transition-colors"
            >
              {/* THUMBNAIL LOGO */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-50 border border-slate-200/80 overflow-hidden shrink-0 flex items-center justify-center p-2">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-full h-full object-cover sm:object-contain rounded-xl"
                />
              </div>

              {/* Rincian Loker/Jasa */}
              <div className="flex-1 min-w-0 space-y-2">
                {/* Badge Type & Title */}
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${
                      item.type === "LOKER"
                        ? "bg-emerald-400 text-slate-950"
                        : "bg-sky-500 text-white"
                    }`}
                  >
                    {item.type}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg line-clamp-1">
                    {item.title}
                  </h3>
                </div>

                {/* Box Kisaran Gaji / Harga */}
                <div className="inline-block bg-sky-50/60 border border-dashed border-sky-200 rounded-xl px-3 py-1.5">
                  <span className="text-[10px] font-semibold text-slate-400 block leading-tight">
                    {item.priceLabel} :
                  </span>
                  <span className="text-sm sm:text-base font-black text-sky-500">
                    {item.priceRange}
                  </span>
                </div>

                {/* Info Penerbit & Lokasi */}
                <div className="space-y-0.5 text-xs font-medium text-slate-500 pt-1">
                  <p className="font-bold text-slate-700">{item.publisher}</p>
                  <p className="flex items-center gap-1 text-slate-400">
                    <LuMapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="text-center py-12 text-xs font-semibold text-slate-400">
              Tidak ada lowongan atau jasa yang sesuai dengan pencarian Anda.
            </div>
          )}
        </div>
      </div>

      {/* 3. FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <button
          className="w-11 h-11 rounded-full bg-sky-400 hover:bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 transition-transform hover:scale-105"
          title="Tambah Loker/Jasa"
        >
          <LuPlus className="w-5 h-5" />
        </button>
        <button
          className="w-11 h-11 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 transition-transform hover:scale-105"
          title="Bantuan / Obrolan"
        >
          <LuMessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}