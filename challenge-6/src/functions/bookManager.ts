/* ============================================================================
 * 3 — Implementasikan fungsi-fungsi manajemen buku
 * File: src/functions/bookManager.ts
 * ============================================================================
 *
 * Di sinilah logika aplikasi berada. Ada tiga fungsi yang harus dibuat.
 * Kerjakan SATU PER SATU dan uji lewat `src/main.ts` setiap kali satu fungsi
 * selesai. Jangan tulis ketiganya sekaligus lalu baru dijalankan — kalau ada
 * error, kamu akan sulit menebak fungsi mana penyebabnya.
 *
 * Sebelum mulai, import apa yang kamu butuhkan dari file sebelumnya:
 * - Tipe `Book` ada di `../types`
 * - Array `books` ada di `../data/books`
 * ========================================================================== */

// Tulis import kamu di bawah ini:

import { Book } from '../types';
import { books } from '../data/books';

function formatBook (book: Book): string {
    return `${book.title} - ${book.author} (${book.publicationYear})`;
}

/* ----------------------------------------------------------------------------
 * FUNGSI 1 — addBook
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Menambahkan satu buku baru ke dalam koleksi.
 * -------------------------------------------------------------------------- */

// Tulis fungsi addBook di bawah ini:
export function addBook(book: Book): void{
    books.push(book);
    console.log(`Buku "${book.title}" berhasil ditambahkan.`);
}

/* ----------------------------------------------------------------------------
 * FUNGSI 2 — listBooks
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Menampilkan seluruh buku yang tersimpan.
 *
 * CONTOH OUTPUT YANG DIHARAPKAN
 *   Daftar Buku:
 *   1. Clean Code - Robert C. Martin (2008)
 *   2. The Pragmatic Programmer - Andrew Hunt (1999)
 * -------------------------------------------------------------------------- */

// Tulis fungsi listBooks di bawah ini:

export function listBooks(): void {
  if (books.length === 0) {
    console.log('Daftar buku masih kosong. Tambahkan buku terlebih dahulu.');
    return;
  }

  console.log('Daftar Buku:');
  books.forEach((book, index) => {
    console.log(`${index + 1}. ${formatBook(book)}`);
  });
}


/* ----------------------------------------------------------------------------
 * FUNGSI 3 — searchBook
 * ----------------------------------------------------------------------------
 * TUJUAN
 * Mencari buku berdasarkan judul. Ini bagian paling menantang di assignment ini,
 * karena parameternya OPSIONAL.
 *
 * CONTOH OUTPUT YANG DIHARAPKAN
 *   searchBook("clean") -> Hasil pencarian "clean": Clean Code - Robert C. Martin (2008)
 *   searchBook("xyz")   -> Buku dengan judul "xyz" tidak ditemukan.
 *   searchBook()        -> (menampilkan seluruh daftar buku)
 * -------------------------------------------------------------------------- */

// Tulis fungsi searchBook di bawah ini:

export function searchBook(title?: string): void {
  // Kasus 1 — pengguna tidak memberi kata kunci sama sekali (atau hanya spasi).
  if (title === undefined || title.trim() === '') {
    console.log('Kata kunci tidak diberikan.');
    listBooks();
    return;
  }

  const kataKunci = title.trim();
  const keyword = kataKunci.toLowerCase();
  const hasil = books.filter((book) => book.title.toLowerCase().includes(keyword));

  // Kasus 3 — kata kunci ada, tetapi tidak ada judul yang cocok.
  if (hasil.length === 0) {
    console.log(`Buku dengan judul "${kataKunci}" tidak ditemukan.`);
    return;
  }

  // Kasus 2 — ada hasil. Semua yang cocok ditampilkan, bukan hanya yang pertama.
  hasil.forEach((book) => {
    console.log(`Hasil pencarian "${kataKunci}": ${formatBook(book)}`);
  });
}

/* ----------------------------------------------------------------------------
 * Jangan lupa
 * Ketiga fungsi di atas dipakai dari `src/main.ts`, jadi semuanya harus
 * di-`export`.
 * -------------------------------------------------------------------------- */
