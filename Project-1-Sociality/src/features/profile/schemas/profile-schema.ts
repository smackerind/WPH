import { z } from "zod";

/**
 * Form Edit Profile.
 *
 * Catatan desain: frame menampilkan field Email, tetapi PATCH /api/me hanya
 * menerima name, username, phone, bio, dan avatar — email tidak bisa diubah
 * lewat API. Field Email tetap ditampilkan agar sesuai desain, tapi dalam
 * keadaan non-aktif dan tidak ikut dikirim, sehingga tidak ada janji palsu
 * kepada user.
 */
export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^[a-zA-Z0-9._]+$/,
      "Username may only contain letters, numbers, dot and underscore",
    ),
  phone: z
    .string()
    .min(8, "Phone number must be at least 8 digits")
    .regex(/^[0-9+\s-]+$/, "Phone number may only contain numbers"),
  bio: z.string().max(160, "Bio cannot be longer than 160 characters"),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
