import React from "react";
import {
  LuSparkles,
  LuArrowRight,
  LuPlay,
  LuBuilding2,
  LuBookOpen,
  LuUsers,
  LuAward,
} from "react-icons/lu";
import { motion } from "framer-motion";

export default function Hero({
  onOpenVideo,
}: {
  onOpenVideo: () => void;
}): React.ReactElement {
  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-slate-50 to-white"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-blue-200/80 text-sky-600 text-xs font-bold mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.1, duration: 0.5 }}
          >
            <LuSparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>SMK Pusat Keunggulan (Center of Excellence)</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut" }}
          >
            Mewujudkan Generasi Unggul, Berkarakter &amp;{" "}
            <span className="text-sky-500">Berdaya Saing Global</span>
          </motion.h1>

          <motion.p
            className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.1 }}
          >
            SMKN 1 Bantul menerapkan pembelajaran berbasis industri, penguatan
            Profil Pelajar Pancasila, dan teknologi digital terdepan untuk
            menyiapkan Lulusan Siap Kerja, Wirausaha, dan Studi Lanjut (BMW).
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="#jurusan"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-md shadow-sky-500/10 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: 0.3 }}
            >
              <span>Jelajahi 8 Jurusan</span>
              <LuArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.button
              onClick={onOpenVideo}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold shadow-sm transition-all flex items-center justify-center gap-2 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <LuPlay className="w-3 h-3 text-sky-500 fill-sky-500 ml-0.5" />
              </div>
              <span>Lihat Video Profil</span>
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 border border-blue-100 flex items-center justify-center mb-3 text-sky-500">
              <LuBookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              8
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Program Keahlian Unggulan
            </div>
          </motion.div>

          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.2 }}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3 text-amber-700">
              <LuBuilding2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              50+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Mitra Industri (DUDI)
            </div>
          </motion.div>

          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.4 }}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3 text-emerald-700">
              <LuUsers className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              98%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Tingkat Serapan Lulusan
            </div>
          </motion.div>

          <motion.div
            className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: "easeInOut", delay: 0.6 }}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-3 text-purple-700">
              <LuAward className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              Juara LKS
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-500">
              Tingkat Nasional &amp; Provinsi
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
