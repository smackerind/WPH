import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Aturan ini bawaan create-next-app dan wajib ada: tanpa loader berikut,
   * Turbopack menyajikan globals.css apa adanya sehingga @theme dan @utility
   * milik Tailwind v4 tidak pernah diproses — halaman tampil tanpa gaya.
   */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    /**
     * Foto post dan avatar dari API disimpan di Cloudinary, jadi host-nya
     * harus didaftarkan sebelum boleh dipakai <Image> milik Next.
     * localhost ikut didaftarkan untuk pengujian dengan mock server.
     */
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "http", hostname: "localhost" },
    ],
  },
};

export default nextConfig;
