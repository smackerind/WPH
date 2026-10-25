/** Nilai yang dipakai di banyak tempat — dikumpulkan supaya tidak tersebar */

export const AUTH_COOKIE_NAME = "sociality_token";
export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 hari

/**
 * Halaman yang hanya boleh dibuka setelah login (dicek di proxy.ts).
 * Timeline `/` ikut dijaga karena GET /api/feed menuntut token — pengunjung
 * yang belum login dialihkan ke /login.
 */
export const PROTECTED_ROUTES = ["/", "/add-post", "/me"] as const;

/** Batas unggahan gambar, mengikuti dokumentasi API */
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

/** Jumlah item per halaman. API membatasi maksimal 50. */
export const FEED_PAGE_SIZE = 10;
export const GRID_PAGE_SIZE = 18;
export const LIST_PAGE_SIZE = 20;
export const COMMENT_PAGE_SIZE = 10;

/** Batas panjang caption sebelum tombol "Show More" muncul */
export const CAPTION_PREVIEW_LENGTH = 100;

/**
 * Emoji pada composer komentar.
 * Desain hanya menampilkan satu grid kecil, jadi daftarnya ditulis langsung
 * di sini — memasang library emoji picker (±200KB) tidak sebanding.
 */
export const COMMENT_EMOJIS = [
  "😀", "😂", "🥰", "😇", "🙂", "🙄",
  "🤪", "😛", "😏", "🤗", "😪", "🥺",
  "🤫", "😌", "🥵", "😣", "😭", "😱",
] as const;
