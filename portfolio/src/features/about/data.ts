/**
 * Isi bagian "About Me".
 *
 * === GANTI DI SINI ===
 * Judul dipecah tiga baris karena baris tengah diberi warna hijau.
 * `floatingImages` adalah tangkapan layar kecil yang mengambang di kiri,
 * kanan, dan bawah judul — posisinya diatur lewat kelas Tailwind di
 * komponen, bukan di sini.
 */
export const aboutContent = {
  eyebrow: "About Me",
  titleTop: "Crafting Seamless",
  titleHighlight: "High-Performance Web",
  titleBottom: "Experiences",
  description:
    "I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.",
  floatingImages: [
    { src: "/images/projects/company-profile.png", alt: "company-profile"},
    { src: "/images/projects/sociality.png", alt: "sociality" },
    { src: "/images/projects/movie-app.png", alt: "movie-app" },
  ],
} as const;
