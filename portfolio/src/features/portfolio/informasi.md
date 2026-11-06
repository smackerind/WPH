# features/portfolio

Bagian "Selected Work" — grid enam kartu proyek.

| Berkas | Isi |
|---|---|
| `data.ts` | Daftar proyek: judul, deskripsi, gambar, dan URL. |
| `components/project-card.tsx` | Satu kartu beserta efek hover. |
| `components/portfolio-section.tsx` | Grid dan kepala bagian. |

## Tiga kartu bertaut, tiga belum

Tiga kartu pertama mengarah ke proyek yang sudah tayang dan gambarnya
adalah tangkapan layar asli situs tersebut (ada di
`public/images/projects/`). Tiga kartu terakhir masih memakai gambar bawaan
desain dengan `url: null`.

`url: null` membuat kartu **tidak dibungkus tautan** dan tombol "VISIT"
tidak dirender — jadi tidak ada tautan mati yang bisa diklik. Begitu
proyeknya siap, isi `url` dan ganti `image`; tidak ada kode yang perlu
disentuh.

Ukuran gambar baru: **762 × 568 piksel** (rasio 4:3, dua kali ukuran kartu
di desain supaya tetap tajam di layar beresolusi tinggi).

## Tautan aman

Tautan memakai `target="_blank"` **dan** `rel="noopener noreferrer"`. Tanpa
`noopener`, halaman tujuan bisa mengakses `window.opener` milik situs ini —
celah keamanan yang sering terlewat.

## Hover

Satu induk `motion.div` memegang state `rest`/`hover`; gambar membesar
5%, lapisan gelap muncul, dan tombol VISIT tumbuh dari skala 0,6. Semua
anak ikut satu state yang sama lewat `variants`, jadi tidak perlu
melacak hover sendiri dengan `useState`.
