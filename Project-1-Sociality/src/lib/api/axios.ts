import axios, { AxiosError, AxiosHeaders } from "axios";
import { clearToken, getToken } from "@/lib/auth-cookie";
import type { ApiErrorResponse } from "@/types/api";

/**
 * Satu-satunya instance axios di aplikasi ini.
 *
 * baseURL dibaca dari environment variable, token dipasang otomatis lewat
 * interceptor, dan error diseragamkan menjadi Error biasa supaya komponen
 * cukup membaca `error.message`.
 */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 20000,
});

// --- Request: sisipkan Authorization kalau user sudah login -----------------
api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    const headers = AxiosHeaders.from(config.headers);
    headers.set("Authorization", `Bearer ${token}`);
    config.headers = headers;
  }

  return config;
});

/** Ambil pesan paling berguna dari response error API */
const readErrorMessage = (error: AxiosError<ApiErrorResponse>): string => {
  const data = error.response?.data;

  if (data?.errors?.length) return data.errors[0];
  if (data?.message) return data.message;

  if (error.code === "ECONNABORTED") return "Request timed out, please retry.";
  if (!error.response) return "Cannot reach the server.";

  return "Something went wrong, please try again.";
};

// --- Response: terjemahkan error + tangani sesi kedaluwarsa ------------------
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // 401 artinya token tidak valid atau sudah lewat masa berlakunya
    if (error.response?.status === 401 && typeof window !== "undefined") {
      clearToken();

      // Hindari loop kalau user memang sedang berada di halaman auth
      const { pathname, origin } = window.location;
      if (!pathname.startsWith("/login") && !pathname.startsWith("/register")) {
        // Pemuatan ulang penuh disengaja: sesi sudah tidak berlaku, jadi
        // seluruh state di memori memang sebaiknya ikut dibuang.
        const target = new URL("/login", origin);
        target.searchParams.set("redirect", pathname);
        window.location.assign(target.toString());
      }
    }

    return Promise.reject(new Error(readErrorMessage(error)));
  },
);
