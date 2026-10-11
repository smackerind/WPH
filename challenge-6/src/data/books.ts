/* ============================================================================
 * TUGAS 2 — Buat penyimpanan data buku
 * File: src/data/books.ts
 * ============================================================================
 *
 * KONTEKS
 * Aplikasi ini belum memakai database. Data buku disimpan dalam sebuah array di
 * memori, artinya isinya hilang setiap kali program berhenti. Itu wajar untuk
 * latihan ini — fokusnya di tipe data, bukan persistensi.
 * ========================================================================== */

// Tulis import dan array books kamu di bawah ini:
import { Book } from '../types';
export const books: Book[] = [];