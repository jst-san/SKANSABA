import React from "react";
import {
  LuTarget,
  LuCompass,
  LuSparkles,
  LuHeart,
  LuBookOpen,
  LuLayers,
  LuFlame,
  LuGlobe,
} from "react-icons/lu";

export const metadata = {
  title: "Visi & Misi - SMKN 1 Bantul",
  description: "Visi, Misi, dan Tujuan Strategis SMK Negeri 1 Bantul.",
};

export default function VisiMisiPage(): React.ReactElement {
  const misiList = [
    {
      no: "01",
      title: "Pendidikan Karakter & Pancasila",
      desc: "Menyelenggarakan pendidikan berbasis penguatan karakter yang sesuai dengan Profil Pelajar Pancasila, berintegritas, berakhlak mulia, dan berwawasan lingkungan.",
    },
    {
      no: "02",
      title: "Pembelajaran Berbasis Teknologi & Industri",
      desc: "Mengembangkan kurikulum dan pembelajaran interaktif berbasis teknologi serta tersinkronisasi penuh dengan standar Dunia Usaha dan Dunia Industri (DUDI).",
    },
    {
      no: "03",
      title: "Peningkatan Kompetensi Vokasi",
      desc: "Meningkatkan keterampilan teknis dan soft skills siswa melalui program Teaching Factory (TEFA) agar menghasilkan lulusan yang unggul dan bersertifikasi kompetensi.",
    },
    {
      no: "04",
      title: "Pengembangan Kemandirian & Wirausaha",
      desc: "Mendorong jiwa kewirausahaan (entrepreneurship) siswa melalui ide-ide kreatif dan inovatif untuk menghasilkan produk/jasa yang bernilai jual.",
    },
    {
      no: "05",
      title: "Kemitraan Global & Kesiapan Karir",
      desc: "Perluas jaringan kemitraan dengan industri dan perguruan tinggi untuk menjamin kesiapan lulusan siap Kerja, Wirausaha, maupun Studi Lanjut (BMW).",
    },
  ];

  const limaPrinsip = [
    {
      title: "Memanusiakan Hubungan",
      desc: "Membangun relasi yang penuh rasa hormat, empati, dan kolaboratif antar warga sekolah.",
      icon: LuHeart,
    },
    {
      title: "Memahami Konsep",
      desc: "Fokus pada pemahaman mendalam dan penerapan nyata, bukan sekadar hafalan.",
      icon: LuBookOpen,
    },
    {
      title: "Membangun Keberlanjutan",
      desc: "Menciptakan kebiasaan belajar sepanjang hayat yang berdampak positif bagi masa depan.",
      icon: LuLayers,
    },
    {
      title: "Memilih Tantangan",
      desc: "Mendorong keberanian siswa untuk berinovasi dan keluar dari zona nyaman.",
      icon: LuFlame,
    },
    {
      title: "Memberdayakan Kontek",
      desc: "Menghubungkan materi pembelajaran dengan kebutuhan nyata industri dan masyarakat.",
      icon: LuGlobe,
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN VISI & MISI */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuTarget className="w-4 h-4 text-sky-600" />
          <span>Profil Sekolah</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Visi &amp; Misi Sekolah
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Pedoman dan komitmen SMKN 1 Bantul dalam membentuk generasi penerus
          yang berkarakter unggul, berdaya saing global, dan siap menghadapi
          tantangan masa depan.
        </p>
      </div>

      {/* 2. KARTU VISI UTAMA */}
      <div className="bg-sky-500 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-extrabold mb-4 shadow-sm">
            <LuSparkles className="w-3.5 h-3.5 text-amber-950" />
            <span>Visi SMKN 1 Bantul</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black leading-snug tracking-tight text-white mb-4">
            &ldquo;Mencetak Lulusan yang Unggul, Berkompeten, Berkarakter Profil
            Pelajar Pancasila, dan Siap Bersaing di Dunia Global.&rdquo;
          </h3>

          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
            Visi ini kami wujudkan melalui pendidikan terpadu yang berbasis pada
            penguatan karakter, keterampilan teknis vokasional, dan penguasaan
            teknologi terdepan.
          </p>
        </div>
      </div>

      {/* 3. DAFTAR MISI SEKOLAH */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-sky-100 text-sky-600">
            <LuCompass className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            Misi Sekolah
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-2">
          {misiList.map((misi) => (
            <div
              key={misi.no}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                {misi.no}
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {misi.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {misi.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 5 PRINSIP PEMBELAJARAN (KEPALASEKOLAH) */}
      <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-6 space-y-4">
        <div>
          <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
            Pendekatan Pembelajaran
          </span>
          <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
            5 Prinsip Utama Pembelajaran SMKN 1 Bantul
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Prinsip yang diterapkan untuk menciptakan lingkungan belajar yang
            kondusif dan bermakna.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {limaPrinsip.map((prinsip, i) => {
            const Icon = prinsip.icon;
            return (
              <div
                key={i}
                className="bg-white border border-slate-200/70 rounded-xl p-4 shadow-sm hover:border-sky-300 transition-colors"
              >
                <div className="p-2 rounded-lg bg-sky-100 text-sky-600 w-fit mb-2">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">
                  {prinsip.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {prinsip.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. TARGET LULUSAN (BMW) */}
      <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-4">
        <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
          <span>Target Lulusan (BMW)</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Setiap peserta didik diarahkan untuk memiliki kepastian masa depan
          dengan 3 pilar utama:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <span className="text-2xl font-black text-sky-600 block">B</span>
            <h4 className="text-xs font-bold text-slate-900">Bekerja</h4>
            <p className="text-[11px] text-slate-500">
              Siap kerja langsung di DUDI dengan kompetensi tersertifikasi.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <span className="text-2xl font-black text-amber-600 block">M</span>
            <h4 className="text-xs font-bold text-slate-900">Mewirausaha</h4>
            <p className="text-[11px] text-slate-500">
              Mampu membangun usaha mandiri berbasis ide kreatif dan digital.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <span className="text-2xl font-black text-indigo-600 block">W</span>
            <h4 className="text-xs font-bold text-slate-900">
              Merapat / Melanjutkan
            </h4>
            <p className="text-[11px] text-slate-500">
              Melanjutkan studi ke Perguruan Tinggi Negeri / Swasta ternama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
