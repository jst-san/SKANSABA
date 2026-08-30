import React from "react";
import {
  LuBuilding2,
  LuLaptop,
  LuStore,
  LuBookOpen,
  LuSparkles,
  LuCircleCheck,
  LuShieldCheck,
  LuWifi,
  LuUtensils,
  LuActivity,
} from "react-icons/lu";

export const metadata = {
  title: "Sarana & Prasarana - SMKN 1 Bantul",
  description:
    "Fasilitas dan sarana prasarana modern penunjang pembelajaran di SMKN 1 Bantul.",
};

export default function SaranaPrasaranaPage(): React.ReactElement {
  const fasilitasUtama = [
    {
      title: "Laboratorium Komputer & Bahasa",
      category: "Praktik & Teknologi",
      desc: "Lebih dari 10 laboratorium komputer spesialis (Lab RPL, TKJ, DKV, Multimedia, dan TOEFL) yang dilengkapi dengan spesifikasi PC modern dan jaringan internet fiber optik.",
      icon: LuLaptop,
      badge: "Terintegrasi",
    },
    {
      title: "Unit Teaching Factory (TEFA)",
      category: "Industri & Mini Bank",
      desc: "Fasilitas praktik riil berstandar industri mencakup Business Center, Bank Mini Syariah, Mini Market / Retail Shop, serta Studio Kreatif DKV.",
      icon: LuStore,
      badge: "Standar DUDI",
    },
    {
      title: "Perpustakaan Digital",
      category: "Literasi & Sumber Belajar",
      desc: "Perpustakaan nyaman dengan ribuan koleksi buku fisik, e-book, ruang baca ber-AC, serta sudut multimedia untuk penelusuran referensi digital.",
      icon: LuBookOpen,
      badge: "Akses 24/7",
    },
    {
      title: "Ruang Kelas Modern & Smart Classroom",
      category: "Fasilitas Pembelajaran",
      desc: "Ruang kelas teori yang bersih dan kondusif, dilengkapi dengan LCD Proyektor, sistem audio, serta akses jaringan Wi-Fi sekolah.",
      icon: LuBuilding2,
      badge: "Kondusif",
    },
  ];

  const fasilitastambahan = [
    {
      name: "Lapangan Olahraga Terpadu",
      desc: "Lapangan basket, voli, dan bulu tangkis untuk kegiatan olahraga serta ekstrakurikuler.",
      icon: LuActivity,
    },
    {
      name: "Kantin Sehat & Hygenis",
      desc: "Kantin sekolah terpadu dengan standar kebersihan tinggi dan nutrisi terjaga.",
      icon: LuUtensils,
    },
    {
      name: "Akses Internet & Wi-Fi Area",
      desc: "Jaringan Wi-Fi berkecepatan tinggi yang menjangkau seluruh area kampus sekolah.",
      icon: LuWifi,
    },
    {
      name: "Masjid & Tempat Ibadah",
      desc: "Masjid sekolah yang luas dan nyaman untuk pembinaan karakter spiritual siswa.",
      icon: LuShieldCheck,
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN SARANA PRASARANA */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuBuilding2 className="w-4 h-4 text-sky-600" />
          <span>Profil Sekolah</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Sarana &amp; Prasarana
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          SMKN 1 Bantul menyediakan fasilitas pembelajaran berstandar industri
          dan lingkungan kampus yang modern untuk mendukung potensi akademik
          maupun non-akademik siswa.
        </p>
      </div>

      {/* 2. HIGHLIGHT BOX TEACHING FACTORY */}
      <div className="bg-sky-500 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-extrabold shadow-sm">
            <LuSparkles className="w-3.5 h-3.5 text-slate-900" />
            <span>Pusat Keunggulan Vokasi</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            Teaching Factory (TEFA) Berbasis Industri
          </h3>

          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
            Sebagai SMK Pusat Keunggulan, SMKN 1 Bantul mengintegrasikan
            lingkungan belajar dengan ekosistem kerja nyata. Melalui Teaching
            Factory, siswa dapat merasakan pengalaman kerja langsung di Business
            Center, Bank Mini, hingga Studio Produksi.
          </p>
        </div>
      </div>

      {/* 3. GRID FASILITAS UTAMA */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
          Fasilitas Praktik &amp; Pembelajaran Utama
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {fasilitasUtama.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-sky-600 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. FASILITAS PENDUKUNG KAMPUS */}
      <div className="border border-slate-100 rounded-2xl p-6 bg-white space-y-4">
        <h3 className="text-base font-extrabold text-slate-900">
          Sarana Penunjang &amp; Lingkungan Kampus
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {fasilitastambahan.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60"
              >
                <div className="p-2 rounded-lg bg-sky-100 text-sky-600 shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{f.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. PEMELIHARAAN & STANDAR KELAYAKAN */}
      <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <LuCircleCheck className="w-4 h-4 text-sky-600" />
            <span>Pemeliharaan Berkala &amp; Lingkungan Hijau</span>
          </h4>
          <p className="text-[11px] text-slate-600">
            Seluruh sarana dan prasarana dikelola dan dirawat secara rutin demi
            menjamin keamanan, kenyamanan, serta keberlanjutan proses belajar
            mengajar.
          </p>
        </div>
      </div>
    </div>
  );
}
