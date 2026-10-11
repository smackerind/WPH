/* ============================================================================
 * 1 — Definisikan tipe data `Book`
 * File: src/types/index.ts
 * ============================================================================
 *
 * KONTEKS
 * Sebelum menulis logika apa pun, tentukan dulu "bentuk" datanya. Di TypeScript,
 * mendefinisikan tipe di awal membuat compiler bisa menjaga kita: salah ketik
 * nama properti atau salah tipe data akan ketahuan sebelum program dijalankan,
 * bukan setelah error di hadapan pengguna.
 * ========================================================================== */

// Tulis definisi tipe Book kamu di bawah ini:
export type Book = {
    title: string;
    author:string;
    publicationYear: number;
};