import { Metadata } from "next";
import { Inter } from "next/font/google";

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
    <html className={` ${inter.className}`} lang="id-ID">
      <body className="">{children}</body>
    </html>
  );
}
