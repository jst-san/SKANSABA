"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  LuGraduationCap,
  LuSparkles,
  LuX,
  LuMenu,
  LuChevronDown,
} from "react-icons/lu";

export default function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openedMenu, setOpenedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Beranda",
      path: "/",
    },
    {
      par: "Profil Sekolah",
      childs: [
        { label: "Sejarah", path: "/sejarah" },
        { label: "Visi & Misi", path: "/visi-misi" },
        { label: "Struktur Organisasi", path: "/struktur-organisasi" },
        { label: "Sarana & Prasarana", path: "/sarana-prasarana" },
      ],
    },
    {
      par: "Informasi",
      childs: [
        { label: "Download", path: "/download" },
        {
          label: "Berita",
          path: "/berita",
        },
        {
          label: "Area Sekolah",
          path: "area-sekolah",
        },
      ],
    },
    {
      par: "Program Keahlian",
      childs: [
        {
          label: "Akuntansi dan Keuangan Lembaga",
          path: "/program-keahlian/akl",
        },
        { label: "Layanan Perbankan Syariah", path: "/program-keahlian/lps" },
        {
          label: "Majanemen Perkantoran",
          path: "/program-keahlian/mp",
        },
        { label: "Bisnis Retail", path: "/program-keahlian/br" },
        {
          label: "Bisnis Digital",
          path: "/program-keahlian/bd",
        },
        { label: "Desain Komunikasi Visual", path: "/program-keahlian/dkv" },
        {
          label: "Rekayasa Perangkat Lunak",
          path: "/program-keahlian/rpl",
        },
        {
          label: "Teknik Komputer dan Jaringan",
          path: "/program-keahlian/tkj",
        },
      ],
    },
    {
      par: "SPMB",
      childs: [
        { label: "Berkas SPMB", path: "/berkas-spmb" },
        { label: "Web SPMB", path: "/web-spmb" },
      ],
    },
    {
      par: "Siswa",
      childs: [
        {
          label: "Ekstrakulikuler",
          path: "/ekstrakulikuler",
        },
        {
          label: "Organisasi",
          path: "/organisasi",
        },
        {
          label: "Students Directory",
          path: "/students-directory",
        },
      ],
    },
    {
      par: "Prestasi",
      childs: [
        {
          label: "Daftar Prestasi",
          path: "/prestasi",
        },
        { label: "Achievement Leaderboard", path: "/prestasi/leaderboard" },
      ],
    },
    { label: "Alumni Hub", path: "/alumni-hub" },
  ];

  return (
    <header
      className={`bg-white/90 backdrop-blur-md border-b border-slate-100 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-20" : "h-24"
      }`}
    >
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img className="w-10 h-10" src="/images/smkn1bantul_logo.png" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-slate-900 leading-none tracking-tight">
                  SMKN 1<br />
                  BANTUL
                </span>
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex h-full items-center gap-6 text-sm font-medium text-slate-700">
            {navItems.map((i) =>
              "par" in i ? (
                <div
                  key={i.par}
                  className={`${openedMenu === i.par && "h-full"} flex items-center`}
                  onMouseEnter={() => setOpenedMenu(i.par!)}
                  onMouseLeave={() => setOpenedMenu(null)}
                >
                  <button
                    className={`${openedMenu === i.par && "text-sky-500"} transition-colors flex gap-1 items-center`}
                  >
                    {i.par}
                    <LuChevronDown />
                  </button>
                  <div
                    className={`${openedMenu === i.par ? "z-10" : "opacity-0 -translate-y-2 pointer-events-none"} duration-300 origin-top min-w-32 bg-white border border-t-0 border-slate-100 pb-2 rounded-b-md flex flex-col absolute top-full`}
                  >
                    {i.childs?.map((c) => (
                      <Link
                        key={c.label}
                        className="min-w-full py-3 px-4 hover:bg-sky-400 hover:text-white transition-colors"
                        href={c.path}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={i.label}
                  className="hover:text-sky-500 transition-colors"
                  href={i.path}
                >
                  {i.label}
                </Link>
              ),
            )}
          </nav>

          {/* <div className="hidden md:flex items-center gap-3">
            <Link
              href="/web-spmb"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-sm transition-all hover:shadow-md hover:scale-[1.01] active:scale-95"
            >
              <span>SPMB 2026</span>
            </Link>
          </div> */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-sky-50 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <LuX className="w-6 h-6" />
            ) : (
              <LuMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <nav
        className={`${mobileMenuOpen ? "" : "opacity-0 -translate-y-2 pointer-events-none"} duration-300 lg:hidden flex flex-col text-sm font-medium text-slate-700 bg-white pb-4 rounded-b-md border border-t-0 border-slate-100`}
      >
        {navItems.map((i) =>
          "par" in i ? (
            <div
              key={"m" + i.par}
              className={`${openedMenu === i.par && "h-full"} w-full flex flex-col relative z-1`}
            >
              <button
                className={`${openedMenu === i.par && "text-sky-500"} w-full px-4 py-3 hover:bg-sky-500 hover:text-white transition-colors flex justify-between items-center`}
                onClick={() =>
                  setOpenedMenu(openedMenu === i.par ? null : i.par!)
                }
              >
                {i.par}
                <LuChevronDown
                  className={`${openedMenu === i.par && "rotate-x-180"} duration-300`}
                />
              </button>
              <div
                className={`${openedMenu === i.par ? "relative duration-300" : "absolute opacity-0 -translate-y-2 pointer-events-none"} min-w-32 bg-slate-50 flex flex-col -z-1`}
              >
                {i.childs?.map((c) => (
                  <Link
                    key={"m" + c.label}
                    className="min-w-full py-3 px-4 hover:bg-sky-400 hover:text-white transition-colors"
                    href={c.path}
                    onClick={() => {
                      setOpenedMenu(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={"m" + i.par}
              className="px-4 py-3 hover:bg-sky-500 hover:text-white transition-colors"
              href={i.path}
            >
              {i.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
