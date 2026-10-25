import { z } from "zod";

/** Composer komentar — tombol Post tidak aktif selama teksnya kosong */
export const commentSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "Write something first")
    .max(500, "Comment cannot be longer than 500 characters"),
});

export type CommentFormValues = z.infer<typeof commentSchema>;
