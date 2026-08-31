"use client";

import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { motion } from "framer-motion";
import { MITRA_INDUSTRI } from "../lib/data";

export default function PartnersSection(): React.ReactElement {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeInOut" }}
        >
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Dipercayai &amp; Bekerjasama dengan 50+ DUDI (Dunia Usaha &amp;
            Dunia Industri)
          </p>
        </motion.div>

        {/* Grid Mitra Industri */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MITRA_INDUSTRI.map((partner, idx) => (
            <motion.div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center hover:bg-sky-100/50 hover:border-blue-200 transition-colors"
              initial={{ opacity: 0, translateY: 10 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: idx * 0.1 }}
            >
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center mb-2 text-sky-500">
                <LuBuilding2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 block">
                {partner.name}
              </span>
              <span className="text-[10px] font-medium text-slate-500 mt-0.5">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
