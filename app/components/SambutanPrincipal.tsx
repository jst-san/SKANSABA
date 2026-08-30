"use client";

import React, { useState, useRef, useEffect } from "react";
import { LuShieldCheck, LuZap } from "react-icons/lu";

export default function SambutanPrincipal(): React.ReactElement {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState<string>("160px");

  useEffect(() => {
    if (!contentRef.current) return;
    if (expanded) {
      setMaxH(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxH("200px");
    }
  }, [expanded]);

  return (
    <section
      id="profil"
      className="py-20 bg-white border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-blue-100 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="overflow-hidden rounded-2xl bg-white p-2 border border-slate-200 shadow-md">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                    <img
                      src="https://smkn1bantul.sch.id/assets/images/kepsek.jpeg"
                      alt="Kepala SMKN 1 Bantul"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="font-bold text-slate-900 text-base">
                      Raharjo, S.IP, M.Pd
                    </h3>
                    <p className="text-blue-700 text-xs font-semibold">
                      Kepala SMKN 1 Bantul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-100 text-blue-800 text-xs font-bold">
                Sambutan Kepala Sekolah
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                &ldquo;Memanusiakan Hubungan, Memahami Konsep, &amp; Membangun
                Keberlanjutan&rdquo;
              </h2>

              <div
                ref={contentRef}
                style={{
                  maxHeight: maxH,
                  overflow: "hidden",
                  transition: "max-height 300ms ease",
                }}
                className="space-y-2 text-slate-600 relative"
              >
                <p>
                  Assalamualaikum warahmatullahi wabarakatuh, Salam sejahtera
                  bagi kita semua. Saya, Raharjo, M.Pd., Kepala SMK Negeri 1
                  Bantul, dengan bangga menyampaikan visi dan misi sekolah kami,
                  yaitu mencetak lulusan yang unggul, berkompeten, dan siap
                  bersaing di dunia global. Visi ini kami wujudkan melalui
                  pendidikan yang berbasis pada penguatan karakter,
                  keterampilan, dan penguasaan teknologi. Kami percaya bahwa
                  dengan pendidikan yang berkualitas, kami dapat menyiapkan
                  generasi yang siap menghadapi tantangan masa depan, baik di
                  dunia kerja, wirausaha, maupun pendidikan tinggi.
                </p>

                <p>
                  Di SMK Negeri 1 Bantul, kami menerapkan pembelajaran yang
                  memanusiakan hubungan, memahami konsep, membangun
                  keberlanjutan, memilih tantangan, dan memberdayakan konteks.
                  Dengan pendekatan ini, kami berupaya menciptakan siswa yang
                  tidak hanya cerdas secara akademik, tetapi juga memiliki
                  karakter yang sesuai dengan Profil Pelajar Pancasila. Kami
                  ingin siswa mampu berkolaborasi, berinovasi, dan berkontribusi
                  positif dalam masyarakat.
                </p>

                <p>
                  Harapan besar kami adalah lulusan SMK Negeri 1 Bantul menjadi
                  generasi yang siap kerja di dunia industri, siap berwirausaha
                  dengan ide-ide kreatifnya, serta siap melanjutkan pendidikan
                  ke jenjang yang lebih tinggi. Kami percaya, dengan dukungan
                  semua pihak, cita-cita ini dapat terwujud, dan lulusan kami
                  akan menjadi kebanggaan bangsa. Teruslah belajar, berinovasi,
                  dan berkontribusi untuk masa depan yang lebih baik.
                  Wassalamualaikum warahmatullahi wabarakatuh.
                </p>

                {!expanded && <div className="w-full h-16 bg-gradient-to-b via-slate-50 to-slate-50 absolute bottom-0 left-0"></div>}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => setExpanded((s) => !s)}
                  className="text-sm font-semibold text-blue-700 hover:underline"
                  aria-expanded={expanded}
                >
                  {expanded ? "Lebih Sedikit" : "Selengkapnya"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 mt-0.5">
                    <LuShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 text-sm font-bold">
                      Karakter Unggul
                    </h4>
                    <p className="text-slate-500 text-xs">
                      Integritas dan budaya kerja profesional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-800 mt-0.5">
                    <LuZap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 text-sm font-bold">
                      Kurikulum Industri
                    </h4>
                    <p className="text-slate-500 text-xs">
                      Materi pembelajaran yang tersinkronisasi DUDI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
