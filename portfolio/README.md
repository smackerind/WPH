# Portfolio — Selamet Sumito

Portofolio pribadi satu halaman. Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4 + Motion (Framer Motion).

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
```

Perintah lain: `npm run build`, `npm start`, `npm run lint`,
`npx tsc --noEmit`. Tidak perlu `.env` — proyek ini tanpa API.

## Mau mengganti isi?

Baca **`KONTEN.md`** — berisi daftar lengkap apa yang bisa diubah dan di
berkas mana. Semua teks ada di `data.ts` masing-masing bagian, tidak ada
yang tertanam di dalam JSX.

## Mau memahami kodenya?

- **`Info.md`** — ringkasan proyek, design, dan keputusan teknis.
- **`informasi.md`** — ada di setiap folder, menjelaskan isi folder itu,
  alasan di balik cara kerjanya, dan apa yang aman diubah.
- Setiap berkas kode diberi komentar berbahasa Indonesia.

## Struktur

```
src/
  app/          halaman dan token desain (globals.css)
  features/     satu folder per bagian halaman
  components/   ui/ (komponen dasar) dan shared/ (lintas bagian)
  lib/          utils, varian animasi, identitas pemilik
```
