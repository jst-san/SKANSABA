import React from "react";
import { LuAward, LuStar } from "react-icons/lu";
import { PRESTASI_DATA } from "../lib/data";

export default function PrestasiSection(): React.ReactElement {
  return (
    <section
      id="prestasi"
      className="py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-100 text-amber-800 text-xs font-bold mb-3">
              <LuAward className="w-3.5 h-3.5 text-amber-700" />
              Hall of Fame
            </div>
            <h2 className="text-3xl sm:text-4xl text-center font-extrabold text-slate-900 tracking-tight">
              Prestasi &amp; Karya Siswa SMKN 1 Bantul
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRESTASI_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold border shadow-sm ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-sky-500 font-bold mb-2">
                    <LuStar className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
                    <span>{item.winner}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-sky-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Tahun Rilis: {item.year}</span>
                <span className="text-sky-500 font-bold">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
