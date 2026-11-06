import type { Metadata } from "next";
import "./globals.css";

/**
 * Kerangka HTML seluruh situs.
 * Font dan token warna dimuat lewat globals.css, jadi berkas ini tetap
 * ringkas dan menjadi Server Component.
 */
export const metadata: Metadata = {
  // === GANTI DI SINI: judul & deskripsi untuk hasil pencarian Google ===
  title: "Selamet Sumito — Frontend Developer",
  description:
    "Portfolio of Selamet Sumito, a frontend developer building fast and interactive web experiences.",
  // Favicon memakai src/app/favicon.ico. Desain tidak menyertakan berkas
  // logo, jadi logo di navbar ditulis sebagai teks, bukan gambar.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-base-black text-neutral-25">
        {children}
      </body>
    </html>
  );
}
