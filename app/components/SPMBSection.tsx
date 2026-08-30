import React from "react";
import {
  LuExternalLink,
  LuDownload,
  LuCalendar,
  LuCircleCheckBig,
} from "react-icons/lu";
import { SPMB_STEPS } from "../lib/data";

export default function SPMBSection(): React.ReactElement {
  return (
    <section
      id="spmb"
      className="py-24 bg-gradient-to-b from-sky-50/50 to-slate-50 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 bg-center rounded-3xl p-8 sm:p-12 mb-16 text-white shadow-xl relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg')",
          }}
        >
            <div className="w-full h-full bg-black/25 absolute inset-0"></div>
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-4 shadow-sm">
              Penerimaan Murid Baru T.A. 2026/2027
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Bergabunglah Menjadi Bagian Dari Generasi Juara!
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8">
              Siapkan dirimu untuk meraih masa depan gemilang bersama SMKN 1
              Bantul. Layanan pendaftaran dibuka secara transparan dan
              terintegrasi secara online.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#spmb-portal"
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                Portal Resmi SPMB <LuExternalLink className="w-4 h-4" />
              </a>
              <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-sm">
                <LuDownload className="w-4 h-4 text-amber-300" />{" "}
                <span>Brosur SPMB 2026 (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center max-w-xl mx-auto mb-12">
          <h3 className="text-2xl font-extrabold text-slate-900">
            Alur Pendaftaran Peserta Didik Baru
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            4 Tahapan Menjadi Siswa SMKN 1 Bantul
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {SPMB_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-blue-700">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-amber-800 font-bold bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                    <LuCalendar className="w-3 h-3 text-amber-700" />
                    <span>{step.date}</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">
                  Status Tahapan
                </span>
                <LuCircleCheckBig className="w-4 h-4 text-blue-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
