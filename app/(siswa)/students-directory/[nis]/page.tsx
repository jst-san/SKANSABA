"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuChevronDown,
  LuChevronUp,
  LuArrowLeft,
  LuExternalLink,
} from "react-icons/lu";
import { STUDENTS_DATA } from "../../../lib/data";

// Bobot Poin Per Jenjang Kompetisi
const CATEGORY_WEIGHTS: Record<string, number> = {
  internasional: 500,
  nasional: 300,
  provinsi: 150,
  kabupaten: 75,
  internal: 25,
};

// Data dummy artikel prestasi
const DUMMY_ARTIKEL = [
  {
    id: 1,
    title: "Raih Juara Lomba Tingkat Internasional",
    date: "12 Feb 2026",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Mengenal Strategi Persiapan Lomba Tingkat Internasional",
    date: "28 Jan 2026",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Apresiasi Sekolah untuk Peraih Poin Prestasi Tertinggi",
    date: "15 Des 2025",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Perjalanan Tim SMKN 1 Bantul di Ajang Kejuaraan Daerah",
    date: "02 Nov 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
];

// Data dummy sertifikat
const DUMMY_SERTIFIKAT = [
  {
    id: 1,
    title: "Sertifikat Juara Lomba Internasional",
    issuer: "Global Education Association",
    image:
      "https://images.unsplash.com/photo-1589330694653-aded6f78655b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Sertifikat Penghargaan Kompetisi",
    issuer: "International Finance Forum",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Sertifikat Peserta Terbaik Kabupaten",
    issuer: "Dinas Pendidikan Kab. Bantul",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Sertifikat Apresiasi Prestasi Sekolah",
    issuer: "SMKN 1 Bantul",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
  },
];

export default function StudentDetailPage(): React.ReactElement {
  const params = useParams();
  const nisParam = params?.nis as string;

  // State Accordion
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {
      internasional: true,
      nasional: false,
      provinsi: false,
      kabupaten: false,
      internal: false,
    },
  );

  // Cari data siswa berdasarkan NIS, NISN, atau slug nama
  const student = useMemo(() => {
    return (
      STUDENTS_DATA.find(
        (s) =>
          s.nis.toString() === nisParam ||
          s.nisn.toString() === nisParam ||
          s.name.toLowerCase().replace(/\s+/g, "-") === nisParam,
      ) || STUDENTS_DATA[0]
    );
  }, [nisParam]);

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  // 1. GENERATE DETAIL PRESTASI DAN HITUNG POIN TIAP ITEM BERDASARKAN CATEGORY_WEIGHTS
  const achievementsDetail = useMemo(() => {
    const counts = student?.options?.achievementsCount || {
      internasional: 2,
      nasional: 0,
      provinsi: 0,
      kabupaten: 1,
      internal: 2,
    };

    return {
      internasional: Array.from(
        { length: counts.internasional || 0 },
        (_, i) => ({
          id: `int-${i + 1}`,
          title: `Juara ${i + 1} Lomba ABC tingkat Internasional`,
          points: CATEGORY_WEIGHTS.internasional,
        }),
      ),
      nasional: Array.from({ length: counts.nasional || 0 }, (_, i) => ({
        id: `nas-${i + 1}`,
        title: `Juara ${i + 1} Lomba Tingkat Nasional`,
        points: CATEGORY_WEIGHTS.nasional,
      })),
      provinsi: Array.from({ length: counts.provinsi || 0 }, (_, i) => ({
        id: `prv-${i + 1}`,
        title: `Juara ${i + 1} Lomba Tingkat Provinsi`,
        points: CATEGORY_WEIGHTS.provinsi,
      })),
      kabupaten: Array.from({ length: counts.kabupaten || 0 }, (_, i) => ({
        id: `kab-${i + 1}`,
        title: `Juara ${i + 1} Olimpiade Keahlian Kabupaten`,
        points: CATEGORY_WEIGHTS.kabupaten,
      })),
      internal: Array.from({ length: counts.internal || 0 }, (_, i) => ({
        id: `sk-${i + 1}`,
        title: `Juara ${i + 1} Classmeeting Sekolah`,
        points: CATEGORY_WEIGHTS.internal,
      })),
    };
  }, [student]);

  // 2. HITUNG TOTAL POIN DINAMIS
  const calculatedTotalPoints = useMemo(() => {
    let total = 0;
    Object.entries(achievementsDetail).forEach(([category, items]) => {
      const weight = CATEGORY_WEIGHTS[category] || 0;
      total += items.length * weight;
    });
    return total;
  }, [achievementsDetail]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 space-y-6">
      {/* TOMBOL KEMBALI */}
      <div>
        <Link
          href="/students-directory"
          className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-sky-600 transition-colors"
        >
          <LuArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </Link>
      </div>

      {/* GRID UTAMA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SIDEBAR KIRI: KARTU PROFIL UTAMA */}
        <div className="lg:col-span-4 bg-gradient-to-b from-sky-400 via-sky-500 to-blue-600 rounded-3xl p-6 text-white shadow-xl flex flex-col items-center text-center space-y-5 sticky top-28">
          <div className="relative mt-2">
            <img
              // src={
              //   student?.options?.avatar ||
              //   "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              // }
              src={
                "https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
              }
              alt={student?.name || "Siswa"}
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white/90 shadow-2xl"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {student?.name || "Jane Doe"}
            </h1>

            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="bg-emerald-400 text-slate-950 font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                {student?.jurusan?.toUpperCase() || "AKL"}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="bg-white/20 backdrop-blur-md text-white font-bold text-[10px] px-2.5 py-0.5 rounded-md border border-white/30">
                #2 ALL
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white font-bold text-[10px] px-2.5 py-0.5 rounded-md border border-white/30">
                #2 {student?.angkatan || 2026}
              </span>
            </div>
          </div>

          {/* TOTAL POIN DIHITUNG DINAMIS */}
          <div className="py-1">
            <span className="text-5xl sm:text-6xl font-black tracking-tight text-white block drop-shadow-md">
              {calculatedTotalPoints}
            </span>
          </div>

          <div className="w-full pt-4 border-t border-white/20 space-y-3 text-left text-xs font-semibold text-sky-50">
            <div className="font-bold text-white mb-2">
              Status :{" "}
              <span className="font-extrabold text-sky-100">
                {student?.alumni ? "Alumni" : "Siswa Aktif"}
              </span>
            </div>

            <div className="flex items-start gap-2.5 leading-relaxed">
              <LuMapPin className="w-4 h-4 text-sky-200 shrink-0 mt-0.5" />
              <span>
                Bangunjiwo, Kasihan, Bantul, Daerah Istimewa Yogyakarta
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <LuPhone className="w-4 h-4 text-sky-200 shrink-0" />
              <span>+62123456789</span>
            </div>

            <div className="flex items-center gap-2.5 truncate">
              <LuMail className="w-4 h-4 text-sky-200 shrink-0" />
              <span className="truncate">
                {student?.name?.toLowerCase().replace(/\s+/g, "") || "janedoe"}
                @gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* AREA KONTEN UTAMA */}
        <div className="lg:col-span-8 space-y-8">
          {/* SECTION 1: DETAIL PRESTASI */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Detail prestasi
            </h2>

            <div className="space-y-3">
              {(
                [
                  { key: "internasional", label: "Internasional" },
                  { key: "nasional", label: "Nasional" },
                  { key: "provinsi", label: "Provinsi" },
                  { key: "kabupaten", label: "Kabupaten" },
                  { key: "internal", label: "Internal" },
                ] as const
              ).map(({ key, label }) => {
                const items = achievementsDetail[key];
                const isOpen = openCategories[key];

                return (
                  <div
                    key={key}
                    className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleCategory(key)}
                      className="w-full p-4 bg-white hover:bg-slate-50 flex items-center justify-between text-left transition-colors"
                    >
                      <span className="font-bold text-slate-800 text-sm">
                        {label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold ${
                            items.length > 0 ? "text-sky-500" : "text-slate-400"
                          }`}
                        >
                          {items.length}
                        </span>
                        {isOpen ? (
                          <LuChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <LuChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 space-y-2 border-t border-slate-100 bg-slate-50/50">
                        {items.length > 0 ? (
                          items.map((item) => (
                            <div
                              key={item.id}
                              className="bg-white p-3.5 rounded-xl border border-slate-200/60 flex items-center justify-between gap-3 shadow-2xs"
                            >
                              <span className="text-xs font-bold text-slate-800">
                                {item.title}
                              </span>
                              <span className="text-xs font-black text-sky-500 shrink-0">
                                {item.points}pt
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="py-2 text-xs text-slate-400 text-center font-medium">
                            Belum ada riwayat prestasi tingkat {label}.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: ARTIKEL PRESTASI */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Artikel prestasi
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DUMMY_ARTIKEL.map((article) => (
                <div
                  key={article.id}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-32 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3.5 space-y-1.5">
                      <span className="text-[10px] font-bold text-slate-400 block">
                        {article.date}
                      </span>
                      <h3 className="font-bold text-slate-900 text-xs line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-3.5 pt-0">
                    <span className="text-[11px] font-extrabold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1">
                      <span>Baca Selengkapnya</span>
                      <LuExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: SERTIFIKAT */}
          <div className="space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
              Sertifikat
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DUMMY_SERTIFIKAT.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="h-32 w-full bg-slate-100 overflow-hidden relative group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] px-2.5 py-1 rounded-lg">
                        Pratinjau
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] font-semibold text-slate-400 truncate">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
