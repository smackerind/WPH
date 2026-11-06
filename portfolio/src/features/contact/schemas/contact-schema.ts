import { z } from "zod";

/**
 * Aturan validasi formulir kontak.
 *
 * === GANTI DI SINI ===
 * Pesan kesalahan ditulis dalam bahasa Inggris karena seluruh teks UI
 * pada desain memakai bahasa Inggris.
 */
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Please write at least 10 characters")
    .max(1000, "Message cannot be longer than 1000 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
