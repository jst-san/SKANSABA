import React from "react";
import {
  LuHistory,
  LuCalendar,
  LuAward,
  LuCircleCheck,
  LuSparkles,
  LuBuilding2,
} from "react-icons/lu";

export const metadata = {
  title: "Sejarah - SMKN 1 Bantul",
  description:
    "Sejarah dan rekam jejak berdirinya SMK Negeri 1 Bantul dari masa ke masa.",
};

export default function SejarahPage(): React.ReactElement {
  const timelineData = [
    {
      year: "1967",
      date: "1 Januari 1967",
      title: "Gagasan Berdiri",
      description:
        "Resmi didirikan sebagai tanggapan atas kebutuhan pendidikan kejuruan dan tenaga kerja terampil di bidang bisnis dan perdagangan di wilayah Kabupaten Bantul.",
    },
    {
      year: "1968",
      date: "4 Juni 1968",
      title: "Diresmikan sebagai SMEA Negeri VI Bantul",
      description:
        "Sekolah resmi diresmikan dengan nama SMEA Negeri VI Bantul, menjadi salah satu pelopor sekolah menengah kejuruan bidang ekonomi dan tata usaha di Yogyakarta.",
    },
    {
      year: "1997",
      date: "Era Reformasi Pendidikan Kejuruan",
      title: "Transformasi Menjadi SMK Negeri 1 Bantul",
      description:
        "Seiring penataan nomenklatur sekolah kejuruan oleh Kemendikbud, nama SMEA Negeri 1 Bantul secara resmi berganti nama menjadi SMK Negeri 1 Bantul.",
    },
    {
      year: "2010+",
      date: "2010 - 2012",
      title: "Kerjasama & Go International",
      description:
        "Menjalin kerjasama internasional dengan Bangna Commercial College & Sungaikolok Industrial and Community College Thailand dalam program pertukaran siswa dan guru.",
    },
    {
      year: "Kini",
      date: "Era Digital & Vokasi",
      title: "Sekolah Pusat Keunggulan (Center of Excellence)",
      description:
        "Ditetapkan sebagai SMK Pusat Keunggulan dengan 7 Program Keahlian unggulan, kurikulum terintegrasi DUDI, dan fasilitas Teaching Factory berbasis digital.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. HEADER HALAMAN SEJARAH */}
      <div className="border-b border-slate-100 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-700 text-xs font-bold mb-3">
          <LuHistory className="w-4 h-4 text-sky-600" />
          <span>Profil Sekolah</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Sejarah SMKN 1 Bantul
        </h2>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Rekam jejak perjalanan panjang SMKN 1 Bantul dalam mencetak lulusan
          berkarakter, berkompeten, dan siap bersaing di tingkat nasional maupun
          internasional.
        </p>
      </div>

      {/* 2. IKHTISAR SINGKAT (HIGHLIGHT BOX) */}
      <div className="bg-gradient-to-br from-sky-50 via-slate-50 to-amber-50/40 border border-sky-100 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-sky-500 text-white rounded-xl shadow-md shrink-0 hidden sm:block">
            <LuBuilding2 className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span>Sekilas Perjalanan</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                1967 - Sekarang
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              SMK Negeri 1 Bantul bangga menjadi bagian penting dalam sejarah
              pendidikan vokasional di Kabupaten Bantul. Diawali dari berdirinya{" "}
              <strong>SMEA Negeri VI Bantul</strong> pada tahun 1967, sekolah
              ini terus bertransformasi memenuhi tuntutan jaman hingga menjadi{" "}
              <strong>SMK Pusat Keunggulan</strong> modern seperti saat ini.
            </p>
          </div>
        </div>
      </div>

      {/* 3. NARASI SEJARAH LENGKAP */}
      <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
        <h3 className="text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3">
          Tonggak Berdirinya Sekolah
        </h3>
        <p>
          SMK Negeri 1 Bantul resmi didirikan pada tanggal{" "}
          <strong>1 Januari 1967</strong> dan kemudian diresmikan secara
          kelembagaan pada tanggal <strong>4 Juni 1968</strong> dengan nama awal{" "}
          <strong>SMEA Negeri VI Bantul</strong>. Pendirian sekolah ini
          dilandasi oleh tingginya kebutuhan akan tenaga terampil di bidang
          bisnis, keuangan, dan administrasi perkantoran di wilayah Daerah
          Istimewa Yogyakarta, khususnya Kabupaten Bantul.
        </p>
        <p>
          Seiring berjalannya waktu dan dinamika perkembangan sistem pendidikan
          di Indonesia, nama SMEA Negeri VI Bantul sempat disesuaikan menjadi{" "}
          <strong>SMEA Negeri 1 Bantul</strong>, sebelum akhirnya resmi berganti
          menjadi <strong>SMK Negeri 1 Bantul</strong>.
        </p>
      </div>

      {/* 4. TIMELINE MILESTONE SEJARAH */}
      <div className="pt-4">
        <h3 className="text-lg font-extrabold text-slate-900 border-l-4 border-sky-500 pl-3 mb-6">
          Linimasa Perkembangan (Milestone)
        </h3>

        <div className="relative border-l-2 border-sky-200 ml-4 space-y-8 pl-6 sm:pl-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Point Node */}
              <div className="absolute -left-[31px] sm:-left-[38px] md:-left-[42px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-sky-500 group-hover:scale-125 group-hover:border-amber-500 transition-all duration-300" />

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-sky-600 bg-sky-100 border border-sky-200 px-2.5 py-0.5 rounded-full">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <LuCalendar className="w-3.5 h-3.5 text-sky-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. KOMITMEN MASA DEPAN */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
              <LuSparkles className="w-3 h-3" /> Semangat &amp; Motto
            </span>
            <h4 className="text-lg font-extrabold text-white">
              &ldquo;Cerdas, Istimewa, dan Berkarakter&rdquo;
            </h4>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Dengan memegang teguh sejarah panjangnya, SMKN 1 Bantul
              berkomitmen untuk terus berinovasi dalam mencetak generasi penerus
              bangsa yang siap kerja, berwirausaha, maupun melanjutkan studi
              tinggi.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-sky-200 backdrop-blur-sm">
              <LuCircleCheck className="w-4 h-4 text-sky-400" />
              SMK Bisa Hebat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
