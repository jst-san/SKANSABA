"use client";

import React from "react";
import { LuX, LuCircleCheckBig, LuSparkles, LuBuilding2 } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import type { Jurusan } from "../lib/data";

export default function MajorDetailModal({
  jurusan,
  onClose,
}: {
  jurusan: Jurusan | null;
  onClose: () => void;
}): React.ReactElement {
  return (
    <AnimatePresence>
      {jurusan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Blur & Overlay */}
          <motion.div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl my-8 z-10"
            initial={{ opacity: 0, scale: 0.95, translateY: 10 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            exit={{ opacity: 0, scale: 0.95, translateY: 10 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50">
              <div className="flex items-center gap-4">
                <div className={`p-3.5 rounded-2xl border ${jurusan.iconBg}`}>
                  {React.createElement(jurusan.icon, { className: "w-8 h-8" })}
                </div>
                <div>
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${jurusan.badgeColor}`}
                  >
                    Kode Jurusan: {jurusan.shortCode}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    {jurusan.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              >
                <LuX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Deskripsi Program
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {jurusan.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h5 className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <LuSparkles className="w-3.5 h-3.5 text-sky-600" />
                    Kompetensi Keahlian
                  </h5>
                  <ul className="space-y-2">
                    {jurusan.keahlian.map((k, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <LuCircleCheckBig className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <LuBuilding2 className="w-3.5 h-3.5 text-amber-600" />
                    Fasilitas Praktik &amp; Lab
                  </h5>
                  <ul className="space-y-2">
                    {jurusan.fasilitas.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700"
                      >
                        <LuCircleCheckBig className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Prospek Karir Lulusan
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {jurusan.prospek.map((p, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-sky-100/60 border border-sky-100 text-center"
                    >
                      <span className="text-xs font-semibold text-sky-900 block">
                        {p}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Kuota Terbatas SPMB 2026
              </span>
              <a
                href="#spmb"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold transition-colors"
              >
                Daftar Jurusan Ini
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
