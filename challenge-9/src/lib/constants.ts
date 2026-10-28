// Constants untuk aplikasi

/** Ukuran gambar TMDB — https://developer.themoviedb.org/docs/image-basics */
export const IMAGE_SIZES = {
  poster: {
    small: "w185",
    medium: "w342",
    large: "w500",
    original: "original",
  },
  backdrop: {
    small: "w300",
    medium: "w780",
    large: "w1280",
    original: "original",
  },
  profile: {
    small: "w45",
    medium: "w185",
    large: "h632",
    original: "original",
  },
} as const;

export const STORAGE_KEYS = {
  favorites: "movie-favorites",
} as const;

/** Query key React Query — dikumpulkan di sini agar tidak salah ketik */
export const QUERY_KEYS = {
  movies: {
    trending: (page: number) => ["movies", "trending", page] as const,
    nowPlaying: (page: number) => ["movies", "now-playing", page] as const,
    popular: (page: number) => ["movies", "popular", page] as const,
    byGenre: (genreId: number, page: number) =>
      ["movies", "genre", genreId, page] as const,
    details: (id: number) => ["movie", id] as const,
    search: (query: string) => ["movies", "search", query] as const,
  },
  genres: ["genres"] as const,
} as const;

/** Sertifikasi umur TMDB (US) → angka yang ditampilkan di halaman detail */
export const CERTIFICATION_AGE: Record<string, string> = {
  G: "0",
  PG: "7",
  "PG-13": "13",
  R: "17",
  "NC-17": "18",
};

export const DEFAULT_AGE_LIMIT = "13";

/** Jumlah cast yang ditampilkan di halaman detail */
export const MAX_CAST_DISPLAYED = 10;
