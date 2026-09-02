import Link from "next/link";
import {
  LuCompass,
  LuHouse,
  LuArrowLeft,
  LuGraduationCap,
  LuSparkles,
} from "react-icons/lu";
import Footer from "./components/Footer";

export default function NotFound(): React.ReactElement {
  return (
    <>
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative Background Blur Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full relative z-10 text-center space-y-6">
          {/* Card Main Container */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-xl space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-6 -mt-6 w-20 h-20 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />

            {/* 404 Large Visual Badge */}
            <span className="text-7xl sm:text-8xl font-black text-sky-500 tracking-tight leading-none block">
              404
            </span>

            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Halaman Tidak Ditemukan
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Maaf, halaman yang kamu tuju tidak ada, telah dipindahkan, atau
                alamat URL yang dimasukkan salah.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 space-y-2.5">
              <Link
                href="/"
                className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Kembali ke Beranda</span>
              </Link>

              <Link
                href="/sejarah"
                className="w-full py-3 px-6 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Jelajahi Profil Sekolah</span>
              </Link>
            </div>
          </div>

          {/* Footer Support Tag */}
          <p className="text-[11px] font-semibold text-slate-400">
            Pusat Keunggulan • SMKN 1 Bantul
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
