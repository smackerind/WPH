import { AUTH_COOKIE_MAX_AGE, AUTH_COOKIE_NAME } from "@/lib/constants";

/**
 * Token disimpan di cookie, bukan localStorage.
 *
 * Alasannya: cookie ikut terkirim ke server, sehingga proxy.ts bisa menolak
 * halaman terproteksi sebelum halamannya dirender. Kalau memakai
 * localStorage, server tidak tahu apa pun soal status login.
 */
export const getToken = (): string | null => {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${AUTH_COOKIE_NAME}=`));

  return match ? decodeURIComponent(match.split("=")[1]) : null;
};

export const setToken = (token: string): void => {
  document.cookie = [
    `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}`,
    "path=/",
    `max-age=${AUTH_COOKIE_MAX_AGE}`,
    "samesite=lax",
  ].join("; ");
};

export const clearToken = (): void => {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; samesite=lax`;
};
