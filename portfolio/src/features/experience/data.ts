/**
 * Isi bagian "Profesional Work" — timeline pengalaman kerja.
 *
 * === GANTI DI SINI ===
 * Urutan di dalam array menentukan nomor bulatan di garis tengah dan
 * sisi mana kartu itu muncul (ganjil kanan, genap kiri) di layar lebar.
 * Tambah item mana pun, penomoran dan sisinya ikut menyesuaikan sendiri.
 */
export const experienceContent = {
  eyebrow: "Experience",
  title: "Profesional Work",
} as const;

export const experiences = [
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Upwork",
    logo: "/icons/Upwork.png",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Trello",
    logo: "/icons/Trello.png",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Zoom",
    logo: "/icons/Zoom.png",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
  },
  {
    period: "2020 - 2022",
    role: "Frontend Developer",
    company: "Zapier",
    logo: "/icons/Zapier.png",
    description:
      "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences",
  },
] as const;
