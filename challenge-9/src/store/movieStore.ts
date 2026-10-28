import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE_KEYS } from "@/lib/constants";
import type { FavoriteMovie, Movie, MovieDetails } from "@/types/movie";

interface FavoritesState {
  favorites: FavoriteMovie[];
  addFavorite: (movie: Movie | MovieDetails) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (movie: Movie | MovieDetails) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

/** Ambil hanya field yang dipakai halaman Favorites */
const toFavorite = (movie: Movie | MovieDetails): FavoriteMovie => ({
  id: movie.id,
  title: movie.title,
  poster_path: movie.poster_path,
  overview: movie.overview,
  vote_average: movie.vote_average,
  release_date: movie.release_date,
});

/**
 * Store favorites. Middleware `persist` menyimpan isinya ke localStorage,
 * jadi daftar favorit tetap ada setelah halaman di-refresh.
 */
export const useMovieStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (movie) =>
        set((state) =>
          state.favorites.some((item) => item.id === movie.id)
            ? state
            : { favorites: [toFavorite(movie), ...state.favorites] },
        ),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),

      toggleFavorite: (movie) => {
        const { isFavorite, addFavorite, removeFavorite } = get();
        if (isFavorite(movie.id)) {
          removeFavorite(movie.id);
        } else {
          addFavorite(movie);
        }
      },

      isFavorite: (id) => get().favorites.some((item) => item.id === id),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: STORAGE_KEYS.favorites,
      partialize: (state) => ({ favorites: state.favorites }),
    },
  ),
);

/** Selector kecil supaya komponen hanya render ulang saat jumlahnya berubah */
export const useFavoritesCount = () =>
  useMovieStore((state) => state.favorites.length);
