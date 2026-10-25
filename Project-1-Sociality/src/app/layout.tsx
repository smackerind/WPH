import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./globals.css";
import { Providers } from "@/app/providers";

/**
 * Inter diambil dari paket @fontsource (ikut terbundel), bukan dari
 * next/font/google, supaya build tidak perlu mengunduh font dari internet.
 */
export const metadata: Metadata = {
  title: "Sociality — Share Your Moments",
  description:
    "Sociality is a social space to share photos, follow friends, and keep your favourite moments.",
  icons: { icon: "/icons/Logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-neutral-950 text-neutral-25">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
