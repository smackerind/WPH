import { z } from "zod";
import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_BYTES } from "@/lib/constants";

/**
 * Form Add Post.
 *
 * Gambar divalidasi dua kali: di sini (saat submit) dan di komponen dropzone
 * (saat file dijatuhkan), supaya pesan salah muncul langsung tanpa menunggu
 * tombol Share ditekan.
 */
export const postSchema = z.object({
  image: z
    .instanceof(File, { message: "Please choose a photo" })
    .refine((file) => file.size <= MAX_IMAGE_BYTES, "Photo must be under 5MB")
    .refine(
      (file) =>
        (ACCEPTED_IMAGE_TYPES as readonly string[]).includes(file.type),
      "Photo must be a PNG, JPG, or WEBP file",
    ),
  // Wajib diisi sesuai desain; spasi saja tidak dihitung sebagai caption
  caption: z
    .string()
    .trim()
    .min(1, "Please write a caption")
    .max(2200, "Caption cannot be longer than 2200 characters"),
});

export type PostFormValues = z.infer<typeof postSchema>;
