"use client";

import React, { useState, useEffect } from "react";
import { LuGraduationCap, LuSparkles, LuX, LuMenu } from "react-icons/lu";

export default function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/60 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img className="w-10 h-10" src="/images/smkn1bantul_logo.png" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">SMKN 1 BANTUL</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">CoE</span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Sekolah Pusat Keunggulan</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#beranda" className="hover:text-sky-500 transition-colors">Beranda</a>
            <a href="#profil" className="hover:text-sky-500 transition-colors">Sambutan</a>
            <a href="#jurusan" className="hover:text-sky-500 transition-colors">Program Keahlian</a>
            <a href="#prestasi" className="hover:text-sky-500 transition-colors">Prestasi</a>
            <a href="#spmb" className="hover:text-sky-500 transition-colors">SPMB 2026</a>
            <a href="#kontak" className="hover:text-sky-500 transition-colors">Kontak</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#spmb" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-sm transition-all hover:shadow-md hover:scale-[1.01] active:scale-95">
              <span>Daftar SPMB 2026</span>
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Toggle Navigation">
            {mobileMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-sky-500">Beranda</a>
          <a href="#profil" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-sky-500">Sambutan Kepala Sekolah</a>
          <a href="#jurusan" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-sky-500">7 Program Keahlian</a>
          <a href="#prestasi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-sky-500">Prestasi &amp; Karya</a>
          <a href="#spmb" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-sky-500">Informasi SPMB 2026</a>
          <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-700 font-medium hover:text-sky-500">Kontak &amp; Lokasi</a>
          <div className="pt-2">
            <a href="#spmb" onClick={() => setMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 text-white font-semibold text-center shadow-sm">
              <LuSparkles className="w-4 h-4 text-amber-300" />
              <span>Pendaftaran SPMB 2026</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
