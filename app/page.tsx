"use client";

import React, { useState } from "react";
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



export default function App(): React.ReactElement {
  const [selectedJurusan, setSelectedJurusan] = useState<Jurusan | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
      <Navbar />

      <main>
        <Hero onOpenVideo={() => setIsVideoOpen(true)} />
        <SambutanPrincipal />
        <JurusanSection onSelectJurusan={(jurusan) => setSelectedJurusan(jurusan)} />
        <PrestasiSection />
        <SPMBSection />
        <PartnersSection />
      </main>

      <Footer />

      <MajorDetailModal jurusan={selectedJurusan} onClose={() => setSelectedJurusan(null)} />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </div>
  );
}
