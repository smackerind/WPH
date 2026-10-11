/* ============================================================================
 * 4 — Uji implementasimu
 * File: src/main.ts  (entry point aplikasi)
 * ============================================================================
 *
 * File inilah yang dijalankan Node saat kamu mengetik `npm run dev`.
 * Anggap file ini sebagai "ruang uji": tempat memanggil fungsi-fungsi yang sudah
 * kamu buat dan memastikan hasilnya sesuai harapan.
 * ========================================================================== */

// Tulis import kamu di bawah ini:

import { addBook, listBooks, searchBook } from './functions/bookManager';

console.log('Book Management Application - Week 6');
console.log('=====================================');

// Mulai pengujian di bawah ini:
console.log('\n[1] listBooks() saat daftar masih kosong');
listBooks();

console.log('\n[2] Menambahkan tiga buku');
addBook({ title: 'Clean Code', author: 'Robert C. Martin', publicationYear: 2008 });
addBook({ title: 'The Pragmatic Programmer', author: 'Andrew Hunt', publicationYear: 1999 });
addBook({ title: 'Refactoring', author: 'Martin Fowler', publicationYear: 2018 });

console.log('\n[3] listBooks() setelah daftar terisi');
listBooks();

console.log('\n[4] searchBook("clean") - kata kunci ditemukan');
searchBook('clean');

console.log('\n[5] searchBook("xyz") - kata kunci tidak ditemukan');
searchBook('xyz');

console.log('\n[6] searchBook() - dipanggil tanpa argumen');
searchBook();

console.log('\n[7] searchBook("r") - satu kata kunci cocok dengan beberapa buku');
searchBook('r');

console.log('\n[8] searchBook("") - kata kunci berupa string kosong');
searchBook('');

console.log('\n[9] searchBook("   ") - kata kunci berisi spasi saja');
searchBook('   ');

/* --- Kasus pinggir tambahan: kata kunci ber-spasi dan huruf besar ---------- */
console.log('\n[10] searchBook("  CLEAN  ") - ada spasi berlebih dan huruf besar');
searchBook('  CLEAN  ');

console.log('\n=====================================');
console.log('Pengujian selesai.');
