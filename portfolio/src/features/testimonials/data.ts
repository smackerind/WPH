/**
 * Isi bagian "People Says About Me".
 *
 * === GANTI DI SINI ===
 * Desain hanya memuat empat testimoni; dua terakhir ditambahkan supaya
 * tombol panah carousel benar-benar ada gunanya. Hapus saja kalau tidak
 * diperlukan — carousel menyesuaikan sendiri dengan jumlah isinya.
 */
export const testimonialsContent = {
  eyebrow: "Testimonials",
  title: "People Says About Me",
} as const;

export const testimonials = [
  {
    name: "Thom Haye",
    role: "Project Manager",
    company: "Upwork",
    logo: "/icons/Upwork.png",
    stars: 5,
    quote:
      "Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!",
  },
  {
    name: "Emily Carter",
    role: "Head of Product",
    company: "Trello",
    logo: "/icons/Trello.png",
    stars: 5,
    quote:
      "An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!",
  },
  {
    name: "Sarah Lee",
    role: "Engineering Manager",
    company: "Zapier",
    logo: "/icons/Zapier.png",
    stars: 5,
    quote:
      "An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    company: "Zoom",
    logo: "/icons/Zoom.png",
    stars: 5,
    quote:
      "A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!",
  },
  {
    name: "Dani Pratama",
    role: "Product Designer",
    company: "Trello",
    logo: "/icons/Trello.png",
    stars: 5,
    quote:
      "Hands down the smoothest design handoff I have had. Every spacing, state, and animation landed exactly as intended, and the questions asked early saved us a whole revision round.",
  },
  {
    name: "Olivia Nguyen",
    role: "Founder",
    company: "Upwork",
    logo: "/icons/Upwork.png",
    stars: 5,
    quote:
      "Took our slow landing page and made it load in under a second. Clear communication throughout, delivered ahead of schedule, and the code was easy for our team to pick up.",
  },
] as const;
