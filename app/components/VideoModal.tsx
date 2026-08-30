"use client";
import React from "react";
import { LuPlay, LuX } from "react-icons/lu";

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }): React.ReactElement | null {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <LuPlay className="w-5 h-5 text-blue-700 fill-blue-700" />
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">Video Profil SMKN 1 Bantul</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors">
            <LuX className="w-6 h-6" />
          </button>
        </div>
        <div className="aspect-video w-full bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center mb-4 backdrop-blur-md">
            <LuPlay className="w-8 h-8 text-white fill-white ml-1" />
          </div>
          <h4 className="text-xl font-bold mb-2">Simulasi LuPlayer Video Profil</h4>
          <p className="text-slate-300 text-sm max-w-md">Menampilkan ikhtisar fasilitas Teaching Factory, kegiatan belajar 7 Jurusan, serta atmosfer kampus SMKN 1 Bantul.</p>
        </div>
      </div>
    </div>
  );
}
