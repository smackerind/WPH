/**
 * Isi bagian "Let's Get In Touch" beserta dua modal hasil pengiriman.
 *
 * === GANTI DI SINI ===
 */
export const contactContent = {
  eyebrow: "Contact",
  title: "Let's Get In Touch",
  /**
   * Catatan: berkas `ProfileImageBackground.png` dari Figma ternyata hanya
   * kotak hijau polos (bentuk latar), bukan foto. Jadi di sini dipakai
   * potret yang sama dengan Hero, ditampilkan hitam-putih seperti desain.
   */
  photo: "/images/Man1.png",
  fields: {
    name: { label: "Name", placeholder: "Enter your name" },
    email: { label: "Email", placeholder: "Enter your email" },
    message: { label: "Message", placeholder: "Write your message" },
  },
  submitLabel: "Send Message",
  success: {
    title: "Message Sent Successfully!",
    description: "Thank you for reaching out. I'll get back to you as soon as possible",
    action: "Back to Home",
  },
  failed: {
    title: "Message Failed to Send",
    description: "Something went wrong while sending your message. Please try again in a moment.",
    action: "Try Again",
  },
} as const;

/**
 * Proyek ini memang tidak memakai API, jadi pengiriman pesan hanya
 * disimulasikan di sisi browser: form divalidasi, ada jeda singkat
 * seperti sedang mengirim, lalu modal "berhasil" muncul.
 *
 * Ubah ke `true` kalau ingin melihat tampilan modal "gagal".
 *
 * Kalau nanti ingin pesannya benar-benar terkirim, ganti isi fungsi
 * `sendMessage` di `features/contact/api/send-message.ts` dengan
 * panggilan ke layanan seperti Formspree atau Web3Forms. Tidak ada
 * bagian lain yang perlu diubah.
 */
export const SIMULATE_FAILURE = false;

/** Lama jeda simulasi pengiriman, dalam milidetik */
export const SIMULATED_DELAY_MS = 1200;
