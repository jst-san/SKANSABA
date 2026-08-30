"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SambutanPrincipal from "./components/SambutanPrincipal";
import JurusanSection from "./components/JurusanSection";
import PrestasiSection from "./components/PrestasiSection";
import SPMBSection from "./components/SPMBSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import MajorDetailModal from "./components/MajorDetailModal";
import VideoModal from "./components/VideoModal";
import type { Jurusan } from "./lib/data";
import Lenis from "lenis";

export default function LandingPage(): React.ReactElement {
  const [selectedJurusan, setSelectedJurusan] = useState<Jurusan | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <main>
        <Hero onOpenVideo={() => setIsVideoOpen(true)} />
        <SambutanPrincipal />
        <JurusanSection
          onSelectJurusan={(jurusan) => setSelectedJurusan(jurusan)}
        />
        <PrestasiSection />
        <SPMBSection />
        <PartnersSection />
      </main>

      <Footer />

      <MajorDetailModal
        jurusan={selectedJurusan}
        onClose={() => setSelectedJurusan(null)}
      />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
