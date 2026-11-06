/**
 * Isi bagian "Skills That Bring Ideas to Life".
 *
 * === GANTI DI SINI ===
 * `skillBars` menentukan nama dan panjang batang (0–100).
 *
 * Catatan: desain Figma menulis "HTML" dua kali (80% dan 100%) dan
 * memberi React hanya 50%. Itu kemungkinan salah ketik, jadi daftarnya
 * diperbaiki agar masuk akal untuk portofolio frontend. Jumlah batangnya
 * tetap enam, sama seperti desain.
 */
export const skillsContent = {
  eyebrow: "Skills",
  title: "Skills That Bring Ideas to Life",
} as const;

/** Ikon teknologi yang tampil sebagai lingkaran di kiri */
export const skillIcons = [
  { name: "JavaScript", icon: "/icons/IconJS.png" },
  { name: "CSS3", icon: "/icons/IconCSS.png" },
  { name: "HTML5", icon: "/icons/IconScript.png" },
  { name: "Express.js", icon: "/icons/iconExpressJS.png" },
  { name: "MongoDB", icon: "/icons/iconMongoDB.png" },
  { name: "React", icon: "/icons/iconreact.png" },
  { name: "TypeScript", icon: "/icons/iconTS.png" },
  { name: "Docker", icon: "/icons/iconDocker.png" },
] as const;

/** Batang kemampuan. `value` dalam persen. */
export const skillBars = [
  { label: "HTML", value: 100 },
  { label: "Tailwind CSS", value: 90 },
  { label: "Javascript", value: 90 },
  { label: "React JS", value: 85 },
  { label: "TypeScript", value: 80 },
  { label: "Docker", value: 70 },
] as const;
