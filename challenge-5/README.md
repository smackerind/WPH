# Assignment 5 - To-Do App dengan Class, Async & DOM (atau CLI)

## Selamat Datang

Halo teman-teman, selamat datang di assignment kelima kalian. Di tahap ini, kita mulai masuk ke konsep yang lebih dekat dengan real-world application.

Kalian tidak hanya akan menulis logic, tapi juga mulai mengelola data, menangani error, dan bekerja dengan proses asynchronous. Ini adalah fondasi penting sebelum kalian masuk ke dunia backend atau aplikasi yang lebih kompleks.

Assignment ini akan membantu kalian memahami bagaimana class digunakan untuk memodelkan data, bagaimana async/await bekerja dalam mengambil data, serta bagaimana berinteraksi dengan user baik melalui browser maupun command line.

## Konteks Assignment

Kalian akan membuat aplikasi **To-Do List** dengan dua pilihan implementasi:

### Opsi A: Browser App (Direkomendasikan)

Aplikasi berbasis web yang menggunakan DOM untuk menampilkan dan mengelola To-Do.

### Opsi B: CLI App

Aplikasi berbasis command-line menggunakan Node.js.

Kalian bebas memilih salah satu, tapi pastikan semua konsep utama tetap digunakan.

---

## Tech Stack

- JavaScript
- Class
- Async/Await
- Fetch API (untuk browser)
- DOM Manipulation (browser)
- Node.js (opsional untuk CLI)

---

## Checklist yang Harus Diselesaikan

1. Menggunakan class (`Todo`, `TodoList`) dengan constructor dan method
2. Mengimplementasikan async/await (fetch atau Promise)
3. Menggunakan try/catch untuk error handling
4. Validasi input user
5. Menampilkan dan mengelola data To-Do
6. Menangani kondisi seperti list kosong

---

## Arahan dari Saya

### 1. Sebelum Menulis Kode

Pahami dulu apa itu To-Do App:

- Apa saja data yang dibutuhkan?
- Bagaimana flow user?
- Apa saja aksi yang bisa dilakukan user?

Contoh:

- Tambah task
- Tandai selesai
- Hapus task
- Lihat semua task

---

### 2. Menggunakan Class

Gunakan class untuk memodelkan data.

Minimal:

- `Todo` → merepresentasikan satu task
- `TodoList` → mengelola kumpulan task

Pikirkan:

- Apa saja property dari Todo?
- Method apa saja yang dibutuhkan di TodoList?

Opsional (nilai tambah):

- Inheritance
- Static method

---

### 3. Async & Data Handling

Jika kalian memilih **browser app**:

- Gunakan `fetch` dengan `async/await`
- Ambil data dari API (misalnya JSONPlaceholder)
- Handle kemungkinan error dengan `try/catch`

Jika CLI:

- Gunakan `Promise` untuk simulasi async (misalnya delay atau load data)

---

### 4. Error Handling

Gunakan `try/catch` untuk:

- Input tidak valid
- Fetch gagal
- Data tidak sesuai

Jangan biarkan program crash tanpa pesan yang jelas.

---

### 5. DOM Manipulation (Jika Browser)

Gunakan:

- `querySelector` / `getElementById`
- `createElement`
- `appendChild`
- `addEventListener`

Pastikan:

- UI update saat data berubah
- Tidak reload halaman setiap aksi

---

### 6. CLI Logic (Jika CLI)

Implementasikan function seperti:

- `generateUniqueId()`
- `addTodo()`
- `markTodoCompleted()`
- `deleteTodo()`
- `listTodos()`
- `runTodoApp()`

Gunakan loop untuk menu interaktif.

---

### 7. Validasi & Feedback

Pastikan:

- Input kosong tidak diterima
- User mendapat feedback yang jelas
- Tangani kondisi list kosong dengan baik

---

### 8. Kerapihan Kode

Pastikan:

- Code terstruktur
- Nama variable jelas
- Function tidak terlalu panjang
- Mudah dibaca oleh orang lain

---

## Struktur Folder (Contoh)

### Browser App

```bash
root/
    ├── index.html
    ├── script.js
    ├── style.css
```

### CLI App

```bash
root/
    ├── index.js
    ├── package.json
```

### Cara instalasi di Cli App

1. `npm init -y`
2. `npm install prompt-sync`

---

## Workflow yang Disarankan

1. Tentukan opsi (Browser / CLI)
2. Buat desain flow aplikasi
3. Implement class terlebih dahulu
4. Tambahkan logic async
5. Tambahkan error handling
6. Implement UI (DOM atau CLI)
7. Test berbagai skenario
8. Refactor code

---

## Kriteria Penilaian

| No  | Kriteria                         | Bobot    |
| --- | -------------------------------- | -------- |
| 1   | Pemenuhan requirement            | 40%      |
| 2   | JavaScript Usage                 | 30%      |
| 3   | Problem solving & error handling | 20%      |
| 4   | Kerapihan dan keterbacaan kode   | 10%      |
|     | **Total**                        | **100%** |

---

## Pesan Terakhir

Di assignment ini, kalian mulai masuk ke level di mana code kalian menyerupai aplikasi nyata.

Jangan hanya fokus “jalan”, tapi fokus juga:

- Apakah code kalian scalable?
- Apakah mudah dibaca?
- Apakah mudah dikembangkan?

Kalau kalian bisa menguasai assignment ini dengan baik, kalian sudah satu langkah lebih dekat ke real-world developer.

Selamat mengerjakan
