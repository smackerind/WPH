import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * State tampilan yang dipakai lintas komponen.
 *
 * Yang masuk ke sini hanya hal yang tidak punya sumber lain: overlay mana
 * yang sedang terbuka, dan isi kotak pencarian. Pilihan yang sebaiknya bisa
 * dibagikan lewat tautan (tab profil, halaman) tetap disimpan di URL, bukan
 * di sini.
 */
interface FollowListTarget {
  username: string;
  tab: "followers" | "following";
}

interface UiState {
  /** Overlay pencarian di navbar */
  isSearchOpen: boolean;
  searchQuery: string;
  /** Menu dropdown versi mobile (tombol hamburger) */
  isMenuOpen: boolean;
  /** Modal "Likes" — berisi id post yang sedang dilihat daftar peliké-nya */
  likesPostId: number | null;
  /** Modal daftar followers/following */
  followList: FollowListTarget | null;
}

const initialState: UiState = {
  isSearchOpen: false,
  searchQuery: "",
  isMenuOpen: false,
  likesPostId: null,
  followList: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSearch(state) {
      state.isSearchOpen = true;
    },
    closeSearch(state) {
      state.isSearchOpen = false;
      state.searchQuery = "";
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    openLikes(state, action: PayloadAction<number>) {
      state.likesPostId = action.payload;
    },
    closeLikes(state) {
      state.likesPostId = null;
    },
    openFollowList(state, action: PayloadAction<FollowListTarget>) {
      state.followList = action.payload;
    },
    closeFollowList(state) {
      state.followList = null;
    },
  },
});

export const {
  openSearch,
  closeSearch,
  setSearchQuery,
  toggleMenu,
  closeMenu,
  openLikes,
  closeLikes,
  openFollowList,
  closeFollowList,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
