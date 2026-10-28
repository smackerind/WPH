import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  CERTIFICATION_AGE,
  DEFAULT_AGE_LIMIT,
  IMAGE_SIZES,
} from "@/lib/constants";
import type { ReleaseDatesResponse, Video } from "@/types/movie";

/** Menggabungkan class Tailwind tanpa bentrok */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * TMDB hanya mengirim path relatif seperti "/abc.jpg",
 * jadi harus digabung dengan base URL dan ukuran gambar.
 */
export function getImageUrl(
  path: string | null | undefined,
  size: string = IMAGE_SIZES.poster.large,
): string {
  if (!path) return "";
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path}`;
}

/** 7.923 → "7.9/10" */
export function formatRating(vote: number): string {
  return `${vote.toFixed(1)}/10`;
}

/** "2025-02-12" → "12 Februari 2025" */
export function formatReleaseDate(date: string): string {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** 145 → "2h 25m" */
export function formatRuntime(minutes: number | null): string {
  if (!minutes) return "-";

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;

  return hours > 0 ? `${hours}h ${rest}m` : `${rest}m`;
}

/**
 * Cari trailer terbaik: utamakan Trailer resmi dari YouTube,
 * lalu trailer apa pun, terakhir baru Teaser.
 */
export function findTrailer(videos: Video[]): Video | null {
  const youtube = videos.filter((video) => video.site === "YouTube");

  return (
    youtube.find((video) => video.type === "Trailer" && video.official) ??
    youtube.find((video) => video.type === "Trailer") ??
    youtube.find((video) => video.type === "Teaser") ??
    null
  );
}

/**
 * TMDB tidak punya field "age limit", jadi diambil dari sertifikasi
 * rilis Amerika lalu diterjemahkan ke angka (PG-13 → 13).
 */
export function getAgeLimit(releaseDates?: ReleaseDatesResponse): string {
  const us = releaseDates?.results.find((item) => item.iso_3166_1 === "US");
  const certification = us?.release_dates.find(
    (item) => item.certification !== "",
  )?.certification;

  if (!certification) return DEFAULT_AGE_LIMIT;

  return CERTIFICATION_AGE[certification] ?? certification;
}

/**
 * Urutan TMDB bisa bergeser antar request, jadi film yang sama bisa muncul
 * di dua halaman "Load More". Simpan kemunculan pertama saja.
 */
export function uniqueById<T extends { id: number }>(items: T[]): T[] {
  const seen = new Set<number>();

  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}
