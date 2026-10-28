/**
 * TypeScript interfaces untuk response TMDB API.
 * Struktur mengikuti response asli, lihat:
 * https://developer.themoviedb.org/reference/movie-details
 */

/** Film versi ringkas — dipakai di list (popular, trending, search, similar) */
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  adult: boolean;
  video: boolean;
}

/** Bentuk response untuk semua endpoint list yang berhalaman */
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type MovieResponse = PaginatedResponse<Movie>;

export interface Genre {
  id: number;
  name: string;
}

export interface GenreResponse {
  genres: Genre[];
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at: string;
}

export interface VideoResponse {
  results: Video[];
}

/** Satu baris sertifikasi umur untuk satu negara */
export interface ReleaseDate {
  certification: string;
  release_date: string;
  type: number;
}

export interface ReleaseDatesResult {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDatesResponse {
  results: ReleaseDatesResult[];
}

/**
 * Detail film. Field tambahan (credits, videos, similar, release_dates)
 * datang dari parameter `append_to_response` sehingga cukup satu request.
 */
export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number | null;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  homepage: string | null;
  imdb_id: string | null;
  production_companies: ProductionCompany[];
  credits: Credits;
  videos: VideoResponse;
  similar: MovieResponse;
  release_dates: ReleaseDatesResponse;
}

/**
 * Data film yang disimpan di store favorites (localStorage).
 * Hanya field yang dibutuhkan halaman Favorites, supaya localStorage
 * tidak menyimpan objek besar yang tidak terpakai.
 */
export interface FavoriteMovie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}
