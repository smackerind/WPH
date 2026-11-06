import { SIMULATED_DELAY_MS, SIMULATE_FAILURE } from "@/features/contact/data";
import type { ContactFormValues } from "@/features/contact/schemas/contact-schema";

/**
 * Satu-satunya tempat pengiriman pesan diurus.
 *
 * Saat ini isinya simulasi: menunggu sebentar lalu berhasil (atau gagal
 * bila `SIMULATE_FAILURE` dinyalakan). Dipisah ke berkas sendiri supaya
 * komponen formulir tidak perlu tahu cara pesan dikirim.
 *
 * Mengganti ke pengiriman sungguhan cukup menukar isi fungsi ini,
 * misalnya:
 *
 *   const response = await fetch("https://formspree.io/f/XXXX", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(values),
 *   });
 *   if (!response.ok) throw new Error("Gagal mengirim pesan");
 *
 * Bentuk kembaliannya tetap sama, jadi komponen tidak berubah.
 */
export async function sendMessage(values: ContactFormValues): Promise<void> {
  // Nilai sengaja dibaca agar terlihat data apa yang nanti dikirim
  void values;

  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

  if (SIMULATE_FAILURE) {
    throw new Error("Simulated send failure");
  }
}
