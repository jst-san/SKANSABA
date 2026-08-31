"use client";

import React, { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { motion } from "framer-motion";
import type { Jurusan } from "../lib/data";
import { JURUSAN_DATA } from "../lib/data";

export default function JurusanSection({
  onSelectJurusan,
}: {
  onSelectJurusan: (j: Jurusan) => void;
}): React.ReactElement {
  const [activeTab, setActiveTab] = useState("all");

  const filteredJurusan = JURUSAN_DATA.filter((j) =>
    activeTab === "all" ? true : j.category === activeTab,
  );

  return (
    <section id="jurusan" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Badge Header */}
          <motion.div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-100 text-sky-600 text-xs font-bold mb-3"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.1, duration: 0.5 }}
          >
            Program Keahlian
          </motion.div>

          {/* Judul Utama */}
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut" }}
          >
            {JURUSAN_DATA.length} Jurusan Spesialisasi Berstandar Industri
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-slate-600 text-sm sm:text-base mt-3"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.1 }}
          >
            Pilihlah keahlian masa depanmu sesuai minat dan potensi terbaikmu.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            className="flex items-center justify-center gap-1.5 mt-8 p-1.5 bg-white border border-slate-200 rounded-xl mx-auto shadow-sm"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.2 }}
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 p-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semua ({JURUSAN_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab("ti")}
              className={`flex-1 p-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === "ti"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Teknologi &amp; Komputer
            </button>
            <button
              onClick={() => setActiveTab("bisnis")}
              className={`flex-1 p-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === "bisnis"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Bisnis &amp; Manajemen
            </button>
          </motion.div>
        </div>

        {/* Grid Container (Hanya dianimasikan saat scroll pertama kali) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeInOut", delay: 0.3 }}
        >
          {filteredJurusan.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-[translate,opacity,box-shadow] duration-300 flex flex-col justify-between group hover:-translate-y-1"
                initial={{ opacity: 0, translateY: 10 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ease: "easeInOut", delay: idx * 0.15 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border ${item.iconBg} group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.shortCode}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="border-t border-slate-100 pt-4 mb-5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Prospek Karir Utama:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.prospek.slice(0, 3).map((p, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectJurusan(item)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-500 text-slate-700 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 group/btn border border-slate-100 hover:border-sky-500"
                  >
                    <span>Detail &amp; Prospek Kerja</span>
                    <LuChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
