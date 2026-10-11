# Assignment 6 — Simple Book Management Application

Selamat datang di challenge minggu keenam. Kali ini kamu akan membangun aplikasi
manajemen buku sederhana menggunakan TypeScript.

Fokus minggu ini bukan pada aplikasi yang rumit, melainkan pada satu kebiasaan
inti: **mendefinisikan tipe data lebih dulu, lalu menulis fungsi yang patuh pada
tipe itu.** Kebiasaan ini yang nanti membuat kamu nyaman bekerja di codebase
besar bersama banyak orang.

## Tujuan Pembelajaran

Setelah menyelesaikan challenge ini, kamu diharapkan mampu:

1. Mendefinisikan tipe data custom menggunakan **type alias**
2. Memilih tipe data primitif yang tepat untuk sebuah nilai
3. Membuat fungsi dengan parameter yang bertipe spesifik
4. Menerapkan **optional parameter** dan menangani kasus saat nilainya tidak ada
5. Memahami return type `void` dan kapan ia dipakai

## Struktur Project

```
.
├── src/
│   ├── types/
│   │   └── index.ts          # Tugas 1 — definisi tipe Book
│   ├── data/
│   │   └── books.ts          # Tugas 2 — array penyimpanan buku
│   ├── functions/
│   │   └── bookManager.ts    # Tugas 3 — addBook, listBooks, searchBook
│   └── main.ts               # Tugas 4 — entry point & tempat menguji
├── package.json
├── tsconfig.json
└── .gitignore
```

Setiap file sudah berisi panduan lengkap di dalam komentarnya **Baca komentar di file sebelum menulis kode.**

## Cara Menjalankan

Butuh Node.js versi 18 atau lebih baru.

```bash
npm install       # sekali saja di awal
npm run dev       # compile lalu jalankan
```

Perintah lain yang berguna:

| Perintah            | Fungsinya                                             |
|---------------------|-------------------------------------------------------|
| `npm run typecheck` | Cek error tipe **tanpa** menghasilkan file di `dist/` |
| `npm run build`     | Compile TypeScript ke JavaScript di folder `dist/`   |
| `npm start`         | Jalankan hasil compile                                |
| `npm run clean`     | Hapus folder `dist/`                                  |

Saat masih menulis kode, `npm run typecheck` adalah teman terbaikmu — jauh lebih
cepat daripada build penuh.

## Alur Pengerjaan yang Disarankan

Kerjakan berurutan. Setiap langkah bergantung pada langkah sebelumnya.

1. **`src/types/index.ts`** — definisikan struktur data `Book`.
2. **`src/data/books.ts`** — buat array penyimpanan bertipe `Book[]`.
3. **`src/functions/bookManager.ts`** — implementasikan ketiga fungsi, satu per
   satu, sambil diuji.
4. **`src/main.ts`** — panggil dan uji semuanya, termasuk kasus pinggirnya.

## Checklist Penyelesaian

- [ ] Tipe `Book` dibuat dengan type alias, punya `title`, `author`, `publicationYear`
- [ ] `publicationYear` bertipe angka, bukan teks
- [ ] Array `books` dibuat dengan tipe `Book[]` yang eksplisit
- [ ] `addBook()` menambahkan buku ke array dan menampilkan konfirmasi
- [ ] `listBooks()` menampilkan semua buku dengan format yang mudah dibaca
- [ ] `listBooks()` tetap memberi pesan yang jelas saat daftar masih kosong
- [ ] `searchBook()` punya parameter `title` yang opsional (`?`)
- [ ] `searchBook()` menangani tiga kasus: ketemu, tidak ketemu, dan tanpa argumen
- [ ] Ketiga fungsi punya return type `void` yang ditulis eksplisit
- [ ] `npm run typecheck` bersih, tanpa satu pun error

## Kriteria Penilaian

| Aspek | Bobot | Keterangan |
|-------|-------|------------|
| **Definisi Tipe Data** | 25% | Tipe `Book` terdefinisi benar dengan type alias dan properti yang sesuai (`title`, `author`, `publicationYear`); array `books` bertipe `Book[]`. |
| **Fungsi `addBook()`** | 25% | Menerima parameter bertipe `Book`, menambahkan ke array, dan menampilkan pesan konfirmasi. |
| **Fungsi `listBooks()`** | 25% | Menampilkan seluruh isi array dengan format yang jelas dan tetap informatif saat kosong. |
| **Fungsi `searchBook()`** | 25% | Parameter `title` bersifat optional, hasil pencarian ditampilkan sesuai keyword, dan menampilkan semua buku bila parameter tidak diberikan. |

**Total: 100%**

## Aturan Main

Beberapa hal berikut bukan sekadar formalitas — ini standar kerja yang berlaku
juga di tim engineering betulan:

1. **Kerjakan sendiri.** Boleh bertanya, boleh berdiskusi, boleh membaca
   dokumentasi. Yang tidak boleh: menyalin jawaban tanpa memahaminya. Saat
   review, kamu akan diminta menjelaskan alasan di balik kodemu.
2. **Jangan menambah dependency yang tidak dibutuhkan.** Assignment ini hanya
   perlu TypeScript. Kalau kamu merasa butuh package lain, tanyakan dulu
   alasannya ke mentor. Membaca `package.json` sebelum `npm install` adalah
   kebiasaan keamanan yang wajib kamu punya sejak sekarang.
3. **Commit secara bertahap** dengan pesan yang menjelaskan perubahannya, bukan
   satu commit raksasa di akhir.


Saat review, siapkan diri untuk menjelaskan tiga hal: kenapa `publicationYear`
bertipe angka, bagaimana kamu menangani `title` yang `undefined` di
`searchBook`, dan apa yang terjadi kalau `listBooks()` dipanggil saat daftar
masih kosong.

## Tips Mengerjakan

1. **Satu file satu waktu.** Jangan menulis semuanya sekaligus lalu baru
   dijalankan. Siklus tulis → jalankan → perbaiki yang pendek jauh lebih cepat.
2. **Baca pesan error sampai selesai.** Compiler TypeScript menyebutkan nama
   file, nomor baris, dan biasanya menjelaskan tipe apa yang ia harapkan. Error
   bukan hukuman — itu umpan balik tercepat yang bisa kamu dapat.
3. **Kalau `strict` mode memberi warning, biasanya ia benar.** Terutama pada
   `searchBook`, di mana `title` bisa saja `undefined`. Tangani kasusnya, jangan
   akali dengan `any` atau `!`.
4. **Uji kasus pinggir.** Daftar kosong, pencarian tanpa hasil, pencarian tanpa
   argumen. Kode yang hanya benar untuk kasus ideal belum benar-benar selesai.

Selamat mengerjakan.

**Henry Rivardo** — Mentor Software Engineer
