import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = { title: "SMKN 1 Bantul" };

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`text-slate-800 antialiased ${inter.className}`}
      lang="id-ID"
    >
      <body className="min-h-screen bg-[#fafafa] selection:bg-sky-600 selection:text-white">
        <Navbar />
        {children}</body>
    </html>
  );
}
