/**
 * Isi bagian "My Service Expertise".
 *
 * === GANTI DI SINI ===
 * Tambah atau kurangi item di `services`; nomor 01, 02, 03 dihitung
 * otomatis dari urutannya, jadi tidak perlu diubah manual.
 */
export const serviceContent = {
  eyebrow: "Service",
  title: "My Service Expertise",
  description:
    "Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.",
} as const;

export const services = [
  {
    title: "Custom Website Development",
    description:
      "Building responsive, fast, and scalable websites tailored to your needs.",
  },
  {
    title: "Web Performance Optimization",
    description:
      "Enhancing website speed, SEO, and overall performance for better",
  },
  {
    title: "Website Maintenance & Debugging",
    description:
      "Fixing bugs, improving UI, and ensuring smooth performance over time.",
  },
] as const;
