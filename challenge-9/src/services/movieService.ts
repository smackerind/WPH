import api from "@/lib/axios";
import type {
  GenreResponse,
  MovieDetails,
  MovieResponse,
  VideoResponse,
} from "@/types/movie";

/**
 * Semua panggilan ke TMDB dikumpulkan di sini.
 * Komponen tidak pernah memanggil axios langsung — selalu lewat hook
 * React Query yang memakai service ini (separation of concerns).
 */
export const movieService = {
  /** Film trending minggu ini — dipakai untuk hero & Trending Now */
  getTrendingMovies: async (page = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>("/trending/movie/week", {
      params: { page },
    });
    return data;
  },

  /** Film yang sedang tayang — dipakai untuk New Release */
  getNowPlayingMovies: async (page = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>("/movie/now_playing", {
      params: { page },
    });
    return data;
  },

  getPopularMovies: async (page = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>("/movie/popular", {
      params: { page },
    });
    return data;
  },

  /** Filter film berdasarkan genre, diurutkan dari yang terpopuler */
  getMoviesByGenre: async (genreId: number, page = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>("/discover/movie", {
      params: { with_genres: genreId, page, sort_by: "popularity.desc" },
    });
    return data;
  },

  /**
   * Detail film lengkap dalam satu request.
   * `append_to_response` menggabungkan credits, videos, similar, dan
   * release_dates sehingga hemat kuota rate limit TMDB.
   */
  getMovieDetails: async (movieId: number): Promise<MovieDetails> => {
    const { data } = await api.get<MovieDetails>(`/movie/${movieId}`, {
      params: { append_to_response: "credits,videos,similar,release_dates" },
    });
    return data;
  },

  searchMovies: async (query: string, page = 1): Promise<MovieResponse> => {
    const { data } = await api.get<MovieResponse>("/search/movie", {
      params: { query, page, include_adult: false },
    });
    return data;
  },

  /** Video/trailer satu film — dipakai tombol Watch Trailer di list */
  getMovieVideos: async (movieId: number): Promise<VideoResponse> => {
    const { data } = await api.get<VideoResponse>(`/movie/${movieId}/videos`);
    return data;
  },

  getGenres: async (): Promise<GenreResponse> => {
    const { data } = await api.get<GenreResponse>("/genre/movie/list");
    return data;
  },
};
