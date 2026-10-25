import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/store/auth-slice";
import { uiReducer } from "@/store/ui-slice";

/**
 * Store Redux Toolkit.
 *
 * Isinya sengaja kecil: hanya status login dan state overlay. Semua data
 * dari server ditangani TanStack Query, jadi tidak ada data post, user,
 * atau komentar yang disalin ke sini.
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
