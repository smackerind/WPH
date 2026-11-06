# features/faq

Bagian "Frequently Asked Questions" — accordion dua kolom.

| Berkas | Isi |
|---|---|
| `data.ts` | Enam pasang tanya-jawab dan id yang terbuka saat halaman dimuat. |
| `components/faq-section.tsx` | Accordion beranimasi. |

## Kenapa Radix?

`@radix-ui/react-accordion` sudah menangani aksesibilitas: peran ARIA yang
benar, navigasi dengan tombol panah, Home/End, dan hubungan antara tombol
dan panelnya. Menulis itu sendiri gampang terlewat.

## Trik animasinya

Radix biasanya **melepas isi panel dari DOM** saat tertutup, sehingga tidak
ada yang bisa dianimasikan ketika menutup. Solusinya:

1. `value` dikendalikan lewat `useState`, bukan dibiarkan internal.
2. `<Accordion.Content forceMount asChild>` — Radix tetap merender.
3. `<AnimatePresence>` + `motion.div` yang menganimasikan `height` dari
   `0` ke `"auto"` dan sebaliknya.

Ikon bintang hijau juga berputar 90° saat panelnya terbuka.

## Mengubah isi

Pertanyaan pertama terbuka secara bawaan lewat `faqContent.defaultOpenId`.
Isi dengan string kosong kalau ingin semuanya tertutup saat halaman dibuka.
