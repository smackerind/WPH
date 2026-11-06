import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class Tailwind tanpa bentrok.
 * Contoh: cn("px-4", kondisi && "px-6") → hanya px-6 yang dipakai.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
