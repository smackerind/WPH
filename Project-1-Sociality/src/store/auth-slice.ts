import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * Status login saja — bukan data user.
 *
 * Data user (nama, avatar, jumlah post) adalah milik server, jadi diurus
 * TanStack Query lewat GET /api/me. Yang disimpan di sini hanya penanda
 * "sudah login atau belum", supaya komponen bisa memutuskan menampilkan
 * tombol Login/Register atau avatar tanpa menunggu permintaan jaringan.
 *
 * Tokennya sendiri hidup di cookie (lihat lib/auth-cookie.ts).
 */
interface AuthState {
  isAuthenticated: boolean;
  /** false sampai cookie selesai dibaca di browser */
  isReady: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isReady: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /** Dipanggil sekali saat aplikasi dibuka, setelah cookie dibaca */
    hydrateAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
      state.isReady = true;
    },
    signedIn(state) {
      state.isAuthenticated = true;
      state.isReady = true;
    },
    signedOut(state) {
      state.isAuthenticated = false;
      state.isReady = true;
    },
  },
});

export const { hydrateAuth, signedIn, signedOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
