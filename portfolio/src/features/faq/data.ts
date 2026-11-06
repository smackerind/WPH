/**
 * Isi bagian "Frequently Asked Questions".
 *
 * === GANTI DI SINI ===
 * Urutan di array menentukan urutan tampil. Pertanyaan pertama terbuka
 * secara bawaan; ubah `defaultOpenId` kalau ingin semuanya tertutup
 * (isi dengan string kosong).
 */
export const faqContent = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  defaultOpenId: "faq-1",
} as const;

export const faqs = [
  {
    id: "faq-1",
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
  },
  {
    id: "faq-2",
    question: "Do you work on both design and development?",
    answer:
      "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
  },
  {
    id: "faq-3",
    question: "Can you optimize an existing website for better performance?",
    answer:
      "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
  },
  {
    id: "faq-4",
    question: "Do you take freelance or contract-based projects?",
    answer:
      "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
  },
  {
    id: "faq-5",
    question: "How do you approach a new project?",
    answer:
      "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
  },
  {
    id: "faq-6",
    question: "How can we collaborate?",
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let's create something awesome together!",
  },
] as const;
