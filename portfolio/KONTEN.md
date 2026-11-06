# KONTEN.md — Panduan Mengganti Isi

Daftar lengkap **apa yang bisa diubah dan di berkas mana**. Semua teks,
angka, gambar, dan tautan ada di berkas `data.ts`, tidak ada yang
tertanam di dalam JSX. Cari tanda `=== GANTI DI SINI ===` di dalam kode
untuk menemukan tempatnya dengan cepat.

Setelah mengubah, simpan berkasnya — halaman akan menyegarkan sendiri
bila `npm run dev` sedang berjalan.

---

## 1. Identitas kamu (paling sering diubah)

**`src/lib/site.ts`**

| Yang diubah | Nama kolom |
|---|---|
| Nama lengkap | `site.name` |
| Nama di logo navbar | `site.brand` |
| Jabatan | `site.role` |
| Status "Available for Work" | `site.availability` |
| Tahun di footer | `site.year` |
| Menu navigasi | `navItems` |
| Tautan Dribbble / Instagram / LinkedIn | `socialLinks` |

**`src/app/layout.tsx`** — judul dan deskripsi yang muncul di tab browser
dan hasil pencarian Google (`metadata`).

---

## 2. Isi tiap bagian halaman

| Bagian di halaman | Berkas |
|---|---|
| Hero (layar pertama) | `src/features/hero/data.ts` |
| My Service Expertise | `src/features/service/data.ts` |
| About Me | `src/features/about/data.ts` |
| Skills + persentase | `src/features/skills/data.ts` |
| Why Choose Me? | `src/features/why-me/data.ts` |
| Profesional Work (timeline) | `src/features/experience/data.ts` |
| Selected Work (portofolio) | `src/features/portfolio/data.ts` |
| Testimonials | `src/features/testimonials/data.ts` |
| FAQ | `src/features/faq/data.ts` |
| Contact + modal sukses/gagal | `src/features/contact/data.ts` |

Setiap folder fitur juga punya `informasi.md` yang menjelaskan isinya
lebih detail.

---

## 3. Hal-hal yang perlu perhatian khusus

### Menambah proyek ke portofolio

`src/features/portfolio/data.ts`

Tiga kartu terakhir sengaja diberi `url: null` sehingga tidak bisa diklik.
Untuk mengaktifkannya:

1. Ambil tangkapan layar situsnya.
2. Potong ke **762 × 568 piksel** (rasio 4:3) dan simpan di
   `public/images/projects/`.
3. Isi `image` dengan jalurnya dan `url` dengan alamat situsnya.

Begitu `url` terisi, tombol "VISIT" otomatis muncul saat kursor di atas
kartu, dan tautannya terbuka di tab baru.

### Judul dengan kata berwarna hijau

Judul Hero dan About dipecah jadi beberapa bagian supaya satu kata bisa
diberi warna:

```ts
titleStart: "Building Fast &",
titleHighlight: "Interactive",   // bagian ini yang hijau
titleEnd: "Web Experiences.",
```

Pindahkan kata antar ketiga kolom itu untuk mengubah bagian yang disorot.

### Formulir kontak

Proyek ini tanpa API, jadi tombol "Send Message" hanya **menyimulasikan**
pengiriman: validasi jalan, ada jeda singkat, lalu modal hijau muncul.

- Ingin melihat tampilan modal gagal? Ubah `SIMULATE_FAILURE` jadi `true`
  di `src/features/contact/data.ts`.
- Ingin pesannya benar-benar terkirim? Ganti isi fungsi `sendMessage()` di
  `src/features/contact/api/send-message.ts` dengan panggilan ke layanan
  seperti Formspree atau Web3Forms. Contohnya sudah ditulis sebagai
  komentar di sana. Tidak ada berkas lain yang perlu diubah.

### Persentase kemampuan

`src/features/skills/data.ts`

Desain Figma menulis "HTML" dua kali dan memberi React hanya 50%. Angkanya
sudah diperbaiki agar masuk akal. Ubah sesuai kemampuanmu sendiri.

### Mengganti urutan bagian halaman

`src/app/page.tsx` — tukar saja urutan komponennya.

---

## 4. Mengganti gambar dan ikon

| Gambar | Lokasi | Dipakai di |
|---|---|---|
| Potret | `public/images/Man1.png` | Hero, Why Choose Me, Contact |
| Tangkapan layar About | `public/images/image1-3.png` | About Me |
| Thumbnail proyek | `public/images/projects/` | Selected Work |
| Thumbnail bawaan desain | `public/images/imageportfolio*.png` | Selected Work (kartu 4–6) |
| Ikon teknologi | `public/icons/` | Skills |
| Logo perusahaan | `public/icons/Upwork.png`, `Trello.png`, `Zoom.png`, `Zapier.png` | Experience, Testimonials |

Pertahankan nama berkasnya, atau ubah juga jalurnya di `data.ts` yang
bersangkutan.

---

## 5. Warna dan ukuran huruf

`src/app/globals.css`, di dalam blok `@theme`.

Semua warna dan ukuran huruf ada di sana sebagai token. Mengubah
`--color-primary-200` sekali akan mengganti warna hijau di **seluruh**
halaman: tombol, label, garis timeline, batang kemampuan, dan sorotan judul.
