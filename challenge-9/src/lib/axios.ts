import axios, { AxiosError } from "axios";

/**
 * Instance axios untuk TMDB.
 * API key dikirim otomatis di setiap request lewat `params`,
 * jadi service tidak perlu menuliskannya berulang kali.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "en-US",
  },
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

/** Pesan error yang ramah dibaca user, dipakai di semua error state */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;

    if (status === 401) return "API key tidak valid. Periksa file .env kamu.";
    if (status === 404) return "Data yang kamu cari tidak ditemukan.";
    if (status === 429) return "Terlalu banyak permintaan. Coba lagi sebentar lagi.";
    if (error.code === "ECONNABORTED") return "Koneksi timeout. Coba lagi ya.";
    if (!error.response) return "Tidak ada koneksi internet.";
  }

  return "Terjadi kesalahan. Silakan coba lagi.";
};

// Ubah error axios menjadi Error dengan pesan yang sudah diterjemahkan
api.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(new Error(getErrorMessage(error))),
);

export default api;
