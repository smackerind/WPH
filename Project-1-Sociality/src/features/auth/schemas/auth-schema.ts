import { z } from "zod";

/**
 * Aturan validasi mengikuti dokumentasi API: password minimal 6 karakter.
 * Pesan error ditulis dalam bahasa Inggris karena tampil di UI.
 */
export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

/**
 * Catatan desain: frame Register hanya menggambarkan Name, Username,
 * Number Phone, Password, dan Confirm Password — tanpa Email, padahal
 * POST /api/auth/register mewajibkannya (placeholder pada field Name pun
 * tertulis "Enter your email", sepertinya keliru). Field Email karena itu
 * ditambahkan di bawah Name dengan gaya yang sama, supaya pendaftaran
 * benar-benar bisa jalan.
 */
export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .regex(
        /^[a-zA-Z0-9._]+$/,
        "Username may only contain letters, numbers, dot and underscore",
      ),
    email: z.email("Please enter a valid email address"),
    phone: z
      .string()
      .min(8, "Phone number must be at least 8 digits")
      .regex(/^[0-9+\s-]+$/, "Phone number may only contain numbers"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
