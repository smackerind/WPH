/**
 * Isi bagian "Selected Work".
 *
 * === GANTI DI SINI ===
 * Tiga kartu pertama sudah terhubung ke proyek yang sudah tayang dan
 * gambarnya adalah tangkapan layar asli situs tersebut.
 *
 * Tiga kartu terakhir masih memakai gambar bawaan desain dan `url: null`,
 * yang membuat kartunya tidak bisa diklik. Begitu proyeknya siap:
 *   1. isi `url` dengan alamat situsnya,
 *   2. ganti `image` dengan tangkapan layar baru — simpan di
 *      `public/images/projects/` dengan ukuran 762 × 568 piksel (rasio 4:3),
 *   3. perbarui `title` dan `description`.
 * Tidak ada kode lain yang perlu disentuh.
 */
export const portfolioContent = {
  eyebrow: "Portfolio",
  title: "Selected Work",
} as const;

export interface Project {
  title: string;
  description: string;
  image: string;
  /** null berarti kartu belum punya tautan dan tidak bisa diklik */
  url: string | null;
}

export const projects: Project[] = [
  {
    title: "Sociality — Social Media App",
    description:
      "Aplikasi media sosial dengan feed, follow, like, komentar, dan bookmark. Next.js, TypeScript, Tailwind CSS.",
    image: "/images/projects/sociality.png",
    url: "https://sociality-omega.vercel.app/",
  },
  {
    title: "Company Profile — IT Solutions",
    description:
      "Situs profil perusahaan satu halaman dengan bagian layanan, portofolio, testimoni, dan formulir kontak.",
    image: "/images/projects/company-profile.png",
    url: "https://companyprofile-peach.vercel.app/",
  },
  {
    title: "Movie Explorer — TMDB",
    description:
      "Penjelajah film memakai API TMDB: pencarian, daftar favorit, trending, dan halaman detail film.",
    image: "/images/projects/movie-app.png",
    url: "https://movieapp-sand-alpha.vercel.app/",
  },
  {
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/imageportfolio4.png",
    url: null,
  },
  {
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/imageportfolio5.png",
    url: null,
  },
  {
    title: "Dashboard SaaS Task Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: "/images/imageportfolio6.png",
    url: null,
  },
];
