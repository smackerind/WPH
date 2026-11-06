/**
 * Isi bagian "Why Choose Me?" — perbandingan dua kolom.
 *
 * === GANTI DI SINI ===
 * Kedua daftar sebaiknya punya jumlah baris yang sama supaya sejajar
 * rapi di layar lebar.
 */
export const whyMeContent = {
  eyebrow: "Working",
  title: "Why Choose Me?",
  ctaLabel: "Hire Me",
  ctaHref: "#contact",
} as const;

/** Kolom kiri — keunggulan, ditulis tebal dan putih */
export const strengths = [
  "React Expert",
  "Precise Website Implementation",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Responsive Website Development",
  "UI Design Proficiency (Figma)",
] as const;

/** Kolom kanan — pembanding, sengaja dibuat lebih redup */
export const others = [
  "Basic React Knowledge",
  "Inconsistent Design Translation",
  "Little to No TypeScript Knowledge",
  "Unstructured Code",
  "Inconsistent Responsiveness",
  "No Design Skills",
] as const;
