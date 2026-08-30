"use client";

import React, { useEffect, useState } from "react";
import {
  LuMapPin,
  LuBuilding2,
  LuExternalLink,
  LuMaximize2,
  LuX,
  LuInfo,
  LuCar,
  LuBus,
  LuCompass,
  LuLayers,
} from "react-icons/lu";

export default function AreaSekolahPage(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // URL Gambar Denah Komplek Sekolah (menggunakan gambar asli denah SMKN 1 Bantul)
  const denahImageUrl = "/images/denah_smkn1bantul.jpg";

  // Rincian Klaster / Zona Gedung Berdasarkan Denah Resmi
  const denahZones = [
    {
      code: "Gedung 1 & Utama",
      name: "Sektor Administrasi & Depan",
      desc: "Lobi Utama, R. TU, R. Kepala Sekolah, R. Guru, R. BKK, Lab Akuntansi, R. Pemasaran, serta Akses Gerbang Depan & Pos Satpam.",
    },
    {
      code: "Gedung Tengah & Lab",
      name: "Sektor Laboratorium Vokasi",
      desc: "Perpustakaan, Lab RPL, Lab TKJ, Studio DKV, R. Server Pusat, Taman Tengah, serta Ruang Sidang Kecil.",
    },
    {
      code: "Gedung Teori & Kelas",
      name: "Sektor Ruang Belajar Teori",
      desc: "Gedung Ruang Kelas (R.1 - R.35), Kantin Sekolah, Koperasi, serta R. Sidang Utama.",
    },
    {
      code: "Gedung Belakang & TEFA",
      name: "Sektor Fasilitas Industri & Praktik",
      desc: "Unit Business Center, Rumah Dinas, Bengkel / Lab Praktik Keahlian Tambahan, serta Lapangan Olahraga / Parkir Karyawan.",
    },
  ];

  useEffect(() => {
        document.documentElement.style.overflow = isModalOpen ? "hidden" : "auto"
  }, [isModalOpen, setIsModalOpen])

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN AREA SEKOLAH */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuMapPin className="w-4 h-4 text-sky-600" />
          <span>Denah &amp; Peta Lingkungan</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Area Sekolah
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Peta denah resmi komplek gedung SMKN 1 Bantul beserta rincian
          pembagian ruang laboratorium, gedung administrasi, dan panduan lokasi.
        </p>
      </div>

      {/* 2. TAMPILAN GAMBAR DENAH RESMI SEKOLAH */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/60">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">
              Peta Komplek Resmi
            </span>
            <h3 className="text-base font-extrabold text-slate-900">
              Denah Lokasi Gedung SMKN 1 Bantul
            </h3>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <LuMaximize2 className="w-3.5 h-3.5" />
            <span>Perbesar Gambar</span>
          </button>
        </div>

        {/* Container Image Preview */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer group flex items-center justify-center p-2"
        >
          <img
            src={denahImageUrl}
            alt="Denah Lokasi SMKN 1 Bantul"
            className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform duration-300"
            onError={(e) => {
              // Fallback jika path lokal belum diisi gambar
              (e.target as HTMLImageElement).src =
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg";
            }}
          />
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2">
              <LuMaximize2 className="w-4 h-4 text-sky-600" /> Klik untuk
              Memperbesar Denah
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
          <LuCompass className="w-4 h-4 text-sky-500 shrink-0" />
          <span>
            Arah panah utara sesuai dengan indikator pada gambar denah di atas.
          </span>
        </div>
      </div>

      {/* 3. RINCIAN ZONA GEDUNG BERDASARKAN DENAH */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
          Rincian Pembagian Sektor Gedung
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {denahZones.map((zone, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200">
                  {zone.code}
                </span>
                <LuBuilding2 className="w-4 h-4 text-slate-400" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {zone.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {zone.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. GOOGLE MAPS EMBEDDED LOKASI KAMPUS */}
      <div className="border border-slate-200/80 rounded-2xl p-5 bg-white space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <LuMapPin className="w-5 h-5 text-sky-500" />
              <span>Peta Google Maps SMKN 1 Bantul</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Jl. Parangtritis No.KM.11, Dukuh, Sabdodadi, Kec. Bantul, D.I.
              Yogyakarta 55715
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=SMK+Negeri+1+Bantul"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>Buka Google Maps</span>
            <LuExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Map Iframe */}
        <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
          <iframe
            title="Peta Lokasi SMKN 1 Bantul"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.128710928956!2d110.3582423!3d-7.8816027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a56113b28b615%3A0xed49ee985e54d7ed!2sSMK%20Negeri%201%20Bantul!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* 5. MODAL POPUP PERBESAR GAMBAR DENAH */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 my-8">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <LuLayers className="w-5 h-5 text-sky-500" />
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                  Denah Resmi Komplek Gedung SMKN 1 Bantul
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              >
                <LuX className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 bg-slate-100 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={denahImageUrl}
                alt="Denah SMKN 1 Bantul Perbesar"
                className="max-w-full h-auto object-contain rounded-lg shadow-sm"
              />
            </div>

            <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Gunakan fitur zoom browser untuk memperjelas nomor ruang pada
                denah.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
