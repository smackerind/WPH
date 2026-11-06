/**
 * Isi bagian Hero (layar pertama).
 *
 * === GANTI DI SINI ===
 * Judul dipecah tiga bagian supaya kata di tengah bisa diberi warna hijau
 * persis seperti desain. Kalau ingin mengganti kata yang disorot, pindahkan
 * saja teksnya antara `titleStart`, `titleHighlight`, dan `titleEnd`.
 */
export const heroContent = {
  greeting: "Hi, I am Selamet Sumito Frontend Developer",
  titleStart: "Building Fast &",
  titleHighlight: "Interactive",
  titleEnd: "Web Experiences.",
  description:
    "Bridging creativity and functionality to deliver stunning, user-friendly web applications",
  ctaLabel: "Hire Me",
  /** Tombol menggulir ke bagian Contact di halaman yang sama */
  ctaHref: "#contact",
  photo: "/images/Man1.png",
  rating: {
    score: "5.0",
    stars: 5,
    caption: "Many Client Trust with me",
  },
} as const;
