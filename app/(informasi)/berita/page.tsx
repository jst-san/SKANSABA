"use client";

import React, { useState } from "react";
import {
  LuNewspaper,
  LuCalendar,
  LuUser,
  LuChevronLeft,
  LuChevronRight,
  LuExternalLink,
  LuTag,
} from "react-icons/lu";

// Import data berita JSON
import { BERITA_DATA } from "@/app/lib/data";

export default function BeritaPage(): React.ReactElement {
  // State Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4; // Jumlah berita per halaman

  // Kalkulasi Pagination
  const totalPages = Math.ceil(BERITA_DATA.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = BERITA_DATA.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN BERITA */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuNewspaper className="w-4 h-4 text-sky-600" />
          <span>Publikasi &amp; Kabar Sekolah</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Berita
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Kumpulan kabar terbaru, liputan kegiatan, pengumuman resmi, serta
          pencapaian prestasi akademik dan vokasi SMKN 1 Bantul.
        </p>
      </div>

      {/* 2. DAFTAR KARTU BERITA */}
      <div className="space-y-6">
        {currentNews.map((item) => (
          <article
            key={item.id}
            className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0 group"
          >
            {/* Gambar Berita */}
            <div className="md:col-span-5 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-slate-200">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback gambar jika URL lokal tidak merender gambar
                  (e.target as HTMLImageElement).src =
                    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg";
                }}
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-500 text-white shadow-sm flex items-center gap-1">
                  <LuTag className="w-3 h-3" />
                  {item.category}
                </span>
              </div>
            </div>

            {/* Detail Content Berita */}
            <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <LuCalendar className="w-3.5 h-3.5 text-sky-500" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <LuUser className="w-3.5 h-3.5 text-slate-400" />
                    {item.author}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <LuExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 3. PAGINATION CONTROL */}
      {totalPages > 1 && (
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Menampilkan{" "}
            <span className="font-bold text-slate-800">{startIndex + 1}</span> -{" "}
            <span className="font-bold text-slate-800">
              {Math.min(startIndex + itemsPerPage, BERITA_DATA.length)}
            </span>{" "}
            dari{" "}
            <span className="font-bold text-slate-800">
              {BERITA_DATA.length}
            </span>{" "}
            berita
          </p>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-xl border border-slate-200/80 bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-600 transition-colors"
              aria-label="Halaman Sebelumnya"
            >
              <LuChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded-xl text-xs font-bold border transition-all ${
                  currentPage === page
                    ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200/80 hover:bg-sky-50 hover:text-sky-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl border border-slate-200/80 bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-600 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-600 transition-colors"
              aria-label="Halaman Selanjutnya"
            >
              <LuChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
