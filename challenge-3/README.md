# Assignment 3 - Landing Page dengan Tailwind CSS

---

> **Catatan dari Mentor - Henry Rivardo**
>
> Halo! Selamat datang di Week 3. Minggu lalu kamu sudah berhasil menerjemahkan desain Figma ke dalam HTML dan CSS, itu pencapaian yang bagus.
>
> Minggu ini kita naik level. Kamu akan membangun ulang desain yang sama, tapi kali ini menggunakan **Tailwind CSS**.
>
> Tailwind adalah salah satu framework CSS yang paling banyak dipakai di industri saat ini. Belajar Tailwind sekarang akan sangat membantumu di project-project nyata ke depannya. Luangkan waktu untuk memahami _kenapa_ setiap utility class itu bekerja, bukan sekadar _apa_ fungsinya.
>
> Ikuti prosesnya, tetap penasaran, dan jangan ragu untuk bertanya kalau kamu stuck. Kamu pasti bisa!
>
> Salam,
> Henry

---

## Gambaran Umum

|                      |                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Week**             | 3                                                                                                                          |
| **Tech Stack**       | HTML, Tailwind CSS                                                                                                         |
| **Referensi Desain** | [Buka Figma](https://www.figma.com/design/AmMiYJmlPXNrKmMDDwTw1B/Company-Profile?node-id=8411-143671&t=DWZCCObF0BsBcjBY-1) |

---

## Tujuan Assignment

Bangun ulang landing page dari Assignment 2 menggunakan **Tailwind CSS**. Tidak boleh ada CSS tradisional sama sekali.

Kamu akan belajar cara menerjemahkan desain Figma menjadi halaman web yang responsif, hanya dengan menggunakan utility class dari Tailwind.

---

## Struktur Folder

```
wph-assignment-3/
├── src/
│   ├── input.css        # File CSS utama Tailwind, jangan hapus baris @import
│   ├── output.css       # Dibuat otomatis oleh Tailwind CLI, JANGAN diedit manual
│   └── index.html       # File HTML utama kamu
├── assets/
│   ├── images/          # Simpan semua file gambar di sini
│   └── icons/           # Simpan semua file icon (SVG, PNG) di sini
├── package.json         # Konfigurasi Node dan dependency
├── README.md            # File ini
└── .gitignore           # Daftar file yang tidak ikut di-commit ke Git
```

> **Penting:** File `src/output.css` dibuat secara otomatis oleh Tailwind. Jangan pernah mengeditnya secara manual dan jangan di-commit ke Git.

---

## Ketentuan Assignment

### Wajib Dipenuhi

- [ ] Semua styling menggunakan **Tailwind CSS** saja, tidak boleh ada custom CSS kecuali `@apply`
- [ ] Halaman harus **responsif**, tampil baik di mobile maupun desktop
- [ ] Gunakan utility class Tailwind untuk semua keperluan styling: spacing, typography, warna, dan layout
- [ ] Tidak boleh ada CSS tradisional seperti `.nama-class { color: red }`

### Komponen Minimum

Halaman kamu harus memiliki ketiga bagian ini:

| Komponen         | Keterangan                                                   |
| ---------------- | ------------------------------------------------------------ |
| **Navbar**       | Navigasi halaman, responsif di mobile                        |
| **Hero Section** | Bagian utama berisi headline, teks pendukung, dan tombol CTA |
| **Footer**       | Berisi link, copyright, atau informasi kontak                |

Kamu boleh menambahkan section lain dari desain Figma kamu. Ketiga komponen di atas adalah minimal.

---

## Langkah-Langkah Pengerjaan

### Langkah 1 - Install Dependencies

Pastikan kamu sudah menginstall [Node.js](https://nodejs.org) di komputermu, lalu jalankan:

```bash
npm install
```

Perintah ini akan menginstall `tailwindcss` dan `@tailwindcss/cli` sesuai yang sudah tercantum di `package.json`.

### Langkah 2 - Jalankan Tailwind CLI

```bash
npm run dev
```

Perintah ini akan memantau perubahan di file HTML kamu dan secara otomatis memperbarui file `src/output.css` setiap kali kamu menyimpan file.

> Biarkan terminal ini tetap berjalan selama kamu bekerja. Jangan ditutup.

Berikut penjelasan dari perintah yang dijalankan di balik layar:

```
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

| Bagian                | Artinya                                             |
| --------------------- | --------------------------------------------------- |
| `-i ./src/input.css`  | File CSS input yang berisi `@import "tailwindcss"`  |
| `-o ./src/output.css` | File CSS output yang akan dimuat oleh HTML kamu     |
| `--watch`             | Otomatis rebuild setiap kali ada file yang disimpan |

### Langkah 3 - Pelajari Desain Figma Sebelum Mulai Coding

Buka file [Figma](https://www.figma.com/design/AmMiYJmlPXNrKmMDDwTw1B/Company-Profile?node-id=8411-143671&t=DWZCCObF0BsBcjBY-1) dan perhatikan hal-hal berikut sebelum menulis satu baris pun kode:

- Warna yang digunakan (kode hex)
- Ukuran dan ketebalan font
- Jarak antar elemen (padding dan margin)
- Struktur layout (apakah menggunakan flex atau grid?)
- Bagian mana yang berubah tampilan di mobile vs desktop

**Rencanakan dulu, baru coding.**

### Langkah 4 - Bangun Halaman Section per Section

Jangan langsung mengerjakan semua sekaligus. Kerjakan satu section dulu sampai selesai:

1. Tulis dulu **struktur HTML**-nya menggunakan tag yang semantik, tanpa styling apapun
2. Tambahkan **Tailwind class** untuk mencocokkan tampilan dengan desain Figma
3. Cek **responsivitas** di browser menggunakan DevTools (mode mobile)
4. Lanjut ke section berikutnya

### Langkah 5 - Cek Responsivitas

Sebelum submit, pastikan halaman kamu terlihat baik di semua ukuran layar berikut:

| Breakpoint | Lebar Layar       | Prefix Tailwind         |
| ---------- | ----------------- | ----------------------- |
| Mobile     | kurang dari 640px | (default, tanpa prefix) |
| Tablet     | 768px ke atas     | `md:`                   |
| Desktop    | 1024px ke atas    | `lg:`                   |

Cara cek: buka Chrome, klik kanan di halaman, pilih **Inspect**, lalu aktifkan **Toggle Device Toolbar** (ikon handphone di pojok kiri atas panel DevTools).

### Langkah 6 - Push ke GitHub

Setelah semua selesai, push pekerjaanmu ke GitHub:

```bash
git add .
git commit -m "feat: build landing page with tailwind css"
git push origin main
```

---

## Checklist Sebelum Submit

Pastikan semua poin ini sudah terpenuhi sebelum kamu mengumpulkan:

- [ ] Semua styling menggunakan Tailwind utility class
- [ ] Tidak ada custom CSS (kecuali `@apply` jika digunakan)
- [ ] Navbar sudah ada dan berfungsi
- [ ] Hero section sudah ada
- [ ] Footer sudah ada
- [ ] Halaman responsif di mobile dan desktop
- [ ] Tailwind breakpoints (`sm:`, `md:`, `lg:`) digunakan sesuai kebutuhan
- [ ] Kode rapi, indentasi benar, tidak ada kode yang tidak terpakai
- [ ] Project sudah di-push ke GitHub

---

## Tips dan Kesalahan Umum

**Yang harus kamu lakukan:**

- Selalu gunakan prefix responsif Tailwind: `sm:`, `md:`, `lg:`
- Gunakan utility `flex` dan `grid` untuk mengatur layout
- Buka [dokumentasi Tailwind](https://tailwindcss.com/docs) sambil bekerja, jadikan referensi utama
- Usahakan spacing dan ukuran font semirip mungkin dengan desain Figma

**Yang harus kamu hindari:**

- Menulis CSS di dalam tag `<style>` (kecuali untuk `@apply`)
- Menggunakan atribut `style=""` langsung di HTML
- Tidak mengecek tampilan mobile sebelum submit
- Menyalin class Tailwind tanpa memahami apa fungsi masing-masing class

---

## Referensi

| Sumber                          | Link                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Dokumentasi Tailwind CSS        | https://tailwindcss.com/docs                                                                                 |
| Tailwind Cheat Sheet            | https://nerdcave.com/tailwind-cheat-sheet                                                                    |
| Referensi Desain Figma          | https://www.figma.com/design/AmMiYJmlPXNrKmMDDwTw1B/Company-Profile?node-id=8411-143671&t=DWZCCObF0BsBcjBY-1 |
| Chrome DevTools (Cek Responsif) | https://developer.chrome.com/docs/devtools/device-mode                                                       |

---

## Kriteria Penilaian

| Kriteria                                                  | Bobot |
| --------------------------------------------------------- | ----- |
| Penggunaan Tailwind CSS yang benar (tidak ada custom CSS) | 30%   |
| Desain responsif (mobile dan desktop)                     | 25%   |
| Kemiripan visual dengan desain Figma                      | 25%   |
| Kebersihan dan kerapian kode                              | 10%   |
| Git Workflow & Submission                                 | 10%   |

---

_Semangat, kamu pasti bisa. - Henry Rivardo_
