import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import { movieService } from "@/services/movieService";
import type { MovieResponse } from "@/types/movie";

const FIVE_MINUTES = 5 * 60 * 1000;

/** Halaman berikutnya, atau undefined kalau sudah halaman terakhir */
const getNextPage = (lastPage: MovieResponse) =>
  lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;

/** Film trending minggu ini (hero + section Trending Now) */
export const useTrendingMovies = () =>
  useQuery({
    queryKey: QUERY_KEYS.movies.trending(1),
    queryFn: () => movieService.getTrendingMovies(1),
    staleTime: FIVE_MINUTES,
  });

/**
 * New Release dengan tombol "Load More".
 * useInfiniteQuery menyimpan setiap halaman di cache, jadi data lama
 * tidak hilang saat halaman berikutnya diambil.
 */
export const useNowPlayingMovies = () =>
  useInfiniteQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying(1),
    queryFn: ({ pageParam }) => movieService.getNowPlayingMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: getNextPage,
    staleTime: FIVE_MINUTES,
  });

/** Dipakai saat user memilih genre tertentu di Home */
export const useMoviesByGenre = (genreId: number | null) =>
  useInfiniteQuery({
    queryKey: QUERY_KEYS.movies.byGenre(genreId ?? 0, 1),
    queryFn: ({ pageParam }) =>
      movieService.getMoviesByGenre(genreId as number, pageParam),
    initialPageParam: 1,
    getNextPageParam: getNextPage,
    enabled: genreId !== null,
    staleTime: FIVE_MINUTES,
  });

export const useMovieDetails = (movieId: number) =>
  useQuery({
    queryKey: QUERY_KEYS.movies.details(movieId),
    queryFn: () => movieService.getMovieDetails(movieId),
    enabled: Number.isFinite(movieId) && movieId > 0,
    staleTime: FIVE_MINUTES,
  });

/** Pencarian hanya jalan kalau query minimal 2 karakter */
export const useSearchMovies = (query: string) =>
  useQuery({
    queryKey: QUERY_KEYS.movies.search(query),
    queryFn: () => movieService.searchMovies(query),
    enabled: query.trim().length >= 2,
    staleTime: FIVE_MINUTES,
  });

/** Daftar genre jarang berubah, jadi cache-nya lebih lama */
export const useGenres = () =>
  useQuery({
    queryKey: QUERY_KEYS.genres,
    queryFn: movieService.getGenres,
    staleTime: 24 * 60 * 60 * 1000,
  });
