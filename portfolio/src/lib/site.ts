/**
 * Identitas pemilik portofolio dan daftar menu.
 *
 * === GANTI DI SINI ===
 * Nama, jabatan, dan tautan media sosial diambil dari berkas ini oleh
 * Navbar, Hero, bagian Contact, dan Footer sekaligus. Ubah di sini saja,
 * tidak perlu menyentuh komponennya.
 */
export const site = {
  name: "Selamet Sumito",
  /** Dipakai di logo navbar */
  /* UBAH: "Selamet Sumito." → "Selamet Sumito" (desain Label tanpa titik) */
  brand: "Selamet Sumito",
  role: "Frontend Developer",
  availability: "Available for Work",
  /** Tahun hak cipta di footer */
  /* UBAH: 2025 → 2026 (desain desktop Footer "© 2026") */
  year: 2026,
} as const;

/** Menu navigasi. `href` menunjuk ke id bagian di halaman yang sama. */
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

/** === GANTI DI SINI: tautan media sosial di bagian Contact === */
export const socialLinks = [
  { label: "Dribbble", href: "https://dribbble.com", icon: "/icons/Dribble.png" },
  { label: "Instagram", href: "https://instagram.com", icon: "/icons/IG.png" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "/icons/In.png" },
] as const;
