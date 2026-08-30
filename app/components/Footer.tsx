import React from "react";
import { LuGraduationCap, LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";
import { SCHOOL_ADDRESS } from "../lib/data";

export default function Footer(): React.ReactElement {
  return (
    <footer id="kontak" className="bg-blue-700 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
                <img className="w-10 h-10" src="/images/smkn1bantul_logo.png" />
              <div>
                <span className="font-extrabold text-lg text-white">SMKN 1 BANTUL</span>
                <p className="text-[10px] text-slate-200 font-semibold tracking-wider uppercase">Sekolah Pusat Keunggulan</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-200 max-w-sm">Mewujudkan lembaga pendidikan kejuruan yang berintegritas, berteknologi tinggi, serta mencetak Lusan kompeten yang berkarakter Profil Pelajar Pancasila.</p>

            <div className="pt-2 space-y-1">
              <p className="text-xs font-bold text-white">Alamat Sekolah:</p>
              <div className="flex items-start gap-2 text-xs text-slate-200"><LuMapPin className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" /><span>{SCHOOL_ADDRESS}</span></div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white">Tautan Cepat</h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><a href="#beranda" className="hover:text-sky-300 transition-colors">Beranda</a></li>
              <li><a href="#profil" className="hover:text-sky-300 transition-colors">Sambutan Kepala Sekolah</a></li>
              <li><a href="#jurusan" className="hover:text-sky-300 transition-colors">7 Program Keahlian</a></li>
              <li><a href="#prestasi" className="hover:text-sky-300 transition-colors">Prestasi &amp; Karya Siswa</a></li>
              <li><a href="#spmb" className="hover:text-sky-300 transition-colors">Informasi SPMB 2026</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white">Kontak Layanan</h4>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2.5"><LuPhone className="w-4 h-4 text-sky-300" /><span>+62 274 367 156</span></div>
              <div className="flex items-center gap-2.5"><LuMail className="w-4 h-4 text-sky-300" /><span>info@smkn1bantul.sch.id</span></div>
              <div className="flex items-center gap-2.5"><LuClock className="w-4 h-4 text-sky-300" /><span>Senin - Jumat: 07.00 - 15.30 WIB</span></div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-200 gap-4">
          <p>&copy; 2026 SMKN 1 Bantul. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
