# Assignment 4 - Interactive Calculator & Data Analyzer

## Selamat Datang

Halo teman-teman, selamat datang di challenge ketiga kalian. Di tahap ini, kita mulai masuk lebih dalam ke logika pemrograman menggunakan JavaScript. Kalau sebelumnya kalian fokus ke struktur dan tampilan, sekarang kita mulai melatih cara berpikir sebagai programmer.

Challenge ini bukan sekadar membuat kalkulator, tapi melatih bagaimana kalian mengelola input, memproses data, dan mengambil keputusan berdasarkan kondisi tertentu. Ini adalah fondasi penting sebelum kalian masuk ke topik yang lebih kompleks seperti backend atau state management.

## Konteks Assignment

Kalian akan membuat sebuah aplikasi sederhana berbasis command-line (CLI) menggunakan JavaScript. Aplikasi ini akan berfungsi sebagai:

1. Kalkulator interaktif
2. Analyzer sederhana untuk hasil perhitungan

Fokus utama bukan pada tampilan, tapi pada bagaimana kalian menyusun logika yang rapi, robust, dan mudah dibaca.

## Checklist yang Harus Diselesaikan

1. Validasi input user (angka dan operator)
2. Implementasi operasi matematika dasar menggunakan function
3. Logic utama kalkulator menggunakan loop dan conditional
4. Analisis hasil berdasarkan tipe data dan nilai
5. Mekanisme exit dari aplikasi
6. Code yang rapi, readable, dan menggunakan 'use strict'

## Arahan dari Saya

Seperti biasa, saya tidak akan memberikan solusi langsung. Fokus kita di sini adalah cara berpikir dan proses eksplorasi kalian.

### 1. Sebelum Menulis Kode

Jangan langsung coding. Pahami dulu alur programnya:

- User akan input apa saja?
- Program harus merespon seperti apa?
- Kapan program harus berhenti?

Coba bayangkan flow-nya seperti percakapan antara user dan program.

### 2. Saat Mengelola Input

Kalian perlu membuat function untuk memastikan input valid.

Beberapa hal yang perlu dipikirkan:

- Bagaimana memastikan input adalah angka?
- Bagaimana jika user memasukkan input yang salah?
- Bagaimana cara “memaksa” user untuk mengulang input sampai benar?

Gunakan:

- Number() untuk konversi tipe data
- isNaN() untuk validasi
- while loop untuk pengulangan

### 3. Saat Membuat Operasi Matematika

Pisahkan setiap operasi ke dalam function.

Misalnya:

- penjumlahan
- pengurangan
- perkalian
- pembagian
- modulo
- pangkat

Kenapa ini penting?

Karena function membantu code kalian lebih modular, reusable, dan mudah dibaca.

Perhatikan juga edge case seperti:

- Pembagian dengan nol → harus ditangani dengan jelas

### 4. Saat Menyusun Logic Utama

Gunakan loop utama `(while(true))` agar program bisa berjalan terus sampai user ingin berhenti.

Di dalam loop:

- Ambil input angka pertama
- Ambil operator
- Ambil angka kedua
- Gunakan switch untuk menentukan operasi

Ini melatih kalian untuk:

- Mengontrol flow program
- Menggabungkan berbagai konsep JavaScript dalam satu alur

## 5 Analisis Hasil (Bagian Paling Penting)

Setelah mendapatkan hasil, jangan berhenti di situ.

Analisis hasilnya:

Kalau hasil berupa _number_:

- Apakah positif, negatif, atau nol?
- Apakah integer atau desimal?
- Apakah genap atau ganjil?

Gunakan:

- typeof
- Number.isInteger()
- if / else
- ternary operator
- operator logika (&&, ||)

Kalau hasil berupa string:

- Tampilkan sebagai error message

Kalau hasil null atau undefined:

- Gunakan ?? untuk fallback message

Bagian ini penting karena melatih kalian berpikir lebih dari sekadar “kode berjalan”.

## 6 Mekanisme Exit

Setelah satu perhitungan selesai:

- Tanyakan apakah user ingin lanjut
- Jika user mengetik "no" → hentikan program

Gunakan:

- if
- break
- handling case-insensitive input

## Struktur Folder

Struktur project yang kalian gunakan:

```bash
root/
    ├── index.js
    ├── readme.md
    ├── package.json
    ├── package-lock.json
    └── .gitignore
```

Kalian hanya perlu fokus pada:

- index.js

## Workflow yang Disarankan

- Install dependency yang diperlukan (misalnya prompt-sync)
- Pahami requirement secara menyeluruh
- Buat flow program (boleh pakai pseudocode)
- Implement input handling
- Implement operasi matematika
- Gabungkan dalam main loop
- Tambahkan analisis hasil
- Test berbagai case (valid & invalid input)

## Kriteria Penilaian

Berikut bobot penilaian yang akan saya gunakan. Tujuannya supaya kalian tahu di bagian mana harus fokus dan bagaimana saya menilai hasil kerja kalian secara objektif.

| No  | Kriteria                              | Bobot    |
| --- | ------------------------------------- | -------- |
| 1   | Requirement Fulfillment & Correctness | 40%      |
| 2   | JavaScript Usage                      | 30%      |
| 3   | Problem-Solving & Approach            | 20%      |
| 4   | Code Clarity                          | 10%      |
|     | **Total**                             | **100%** |

Penjelasan singkat dari masing-masing kriteria:

1. **Requirement** (40%) → semua fitur berjalan sesuai instruksi
2. **JavaScript Usage** (30%) → penggunaan loop, function, conditional, dll
3. **Problem Solving** (20%) → bagaimana kalian menangani edge case
4. **Code Clarity** (10%) → code mudah dibaca dan dipahami

Cara Memulai

Install dependency:

`npm install`

Jalankan program:

`node index.js`

## Pesan Terakhir

Di challenge ini, saya tidak mencari siapa yang paling cepat selesai, tapi siapa yang benar-benar memahami apa yang dia tulis.

Kalau program kalian error, itu bagus. Artinya kalian sedang belajar.

Biasakan untuk:

- Debug sendiri dulu
- Baca error message
- Cari tahu kenapa terjadi

Kalau kalian hanya menyalin solusi tanpa memahami, kalian akan stuck di tahap berikutnya.

Tapi kalau kalian benar-benar paham, challenge berikutnya akan terasa jauh lebih mudah.

Selamat mengerjakan.
