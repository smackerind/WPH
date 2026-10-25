import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { twMerge } from "tailwind-merge";

dayjs.extend(relativeTime);

/** Menggabungkan class Tailwind tanpa bentrok */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * "2026-10-23T06:20:00Z" -> "1 Minutes Ago".
 * Desain menulis waktu dalam gaya relatif berkapital, jadi hasil dayjs
 * ("a minute ago") disesuaikan.
 */
export function formatRelativeTime(value: string): string {
  const date = dayjs(value);
  if (!date.isValid()) return "";

  return date
    .fromNow()
    .replace(/^an?\s/, "1 ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/** "23 October 2026, 13:20" — dipakai di tempat yang butuh tanggal penuh */
export function formatDateTime(value: string): string {
  const date = dayjs(value);
  return date.isValid() ? date.format("D MMMM YYYY, HH:mm") : "";
}

/** 1250 -> "1.2K", dipakai pada counter like/follower yang bisa besar */
export function formatCount(value: number): string {
  if (!Number.isFinite(value)) return "0";
  if (value < 1000) return String(value);
  if (value < 1_000_000) return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return `${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
}

/** Huruf pertama nama, dipakai sebagai cadangan kalau avatar kosong */
export function initialOf(name?: string | null): string {
  return (name?.trim()?.[0] ?? "U").toUpperCase();
}
