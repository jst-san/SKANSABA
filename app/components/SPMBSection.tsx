"use client";

import React from "react";
import {
  LuExternalLink,
  LuDownload,
  LuCalendar,
  LuCircleCheckBig,
} from "react-icons/lu";
import { motion } from "framer-motion";
import { SPMB_STEPS } from "../lib/data";

export default function SPMBSection(): React.ReactElement {
  return (
    <section
      id="spmb"
      className="py-24 bg-gradient-to-b from-sky-50/50 to-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner Card */}
        <motion.div
          className="bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-900 bg-center rounded-3xl p-8 sm:p-12 mb-16 text-white shadow-xl relative overflow-hidden"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Front_view_of_SMKN_1_Bantul.jpg')",
          }}
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-black/25 absolute inset-0"></div>
          <div className="max-w-2xl relative z-10">
            {/* Badge Banner */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-bold mb-4 shadow-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: 0.1, duration: 0.5 }}
            >
              Penerimaan Murid Baru T.A. 2026/2027
            </motion.div>

            {/* Title Banner */}
            <motion.h2
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4"
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: 0.1 }}
            >
              Bergabunglah Menjadi Bagian Dari Generasi Juara!
            </motion.h2>

            {/* Description Banner */}
            <motion.p
              className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8"
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
            >
              Siapkan dirimu untuk meraih masa depan gemilang bersama SMKN 1
              Bantul. Layanan pendaftaran dibuka secara transparan dan
              terintegrasi secara online.
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="#spmb-portal"
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ease: "easeInOut", delay: 0.3 }}
              >
                Portal Resmi SPMB <LuExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.button
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ease: "easeInOut", delay: 0.4 }}
              >
                <LuDownload className="w-4 h-4 text-amber-300" />{" "}
                <span>Brosur SPMB 2026 (PDF)</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Section Header Alur */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <motion.h3
            className="text-2xl font-extrabold text-slate-900"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut" }}
          >
            Alur Pendaftaran Peserta Didik Baru
          </motion.h3>

          <motion.p
            className="text-slate-600 text-xs sm:text-sm mt-1"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.1 }}
          >
            4 Tahapan Menjadi Siswa SMKN 1 Bantul
          </motion.p>
        </div>

        {/* Grid Step SPMB */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {SPMB_STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: idx * 0.15 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-sky-500">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-amber-800 font-bold bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                    <LuCalendar className="w-3 h-3 text-amber-700" />
                    <span>{step.date}</span>
                  </div>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-500 transition-colors">
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
                <LuCircleCheckBig className="w-4 h-4 text-sky-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
