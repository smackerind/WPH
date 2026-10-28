import { z } from "zod";

/**
 * Validasi form pencarian dengan Zod.
 * Dipakai bersama React Hook Form lewat @hookform/resolvers.
 */
export const searchSchema = z.object({
  query: z
    .string()
    .trim()
    .min(2, "Ketik minimal 2 huruf untuk mencari film")
    .max(60, "Kata kunci terlalu panjang"),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
