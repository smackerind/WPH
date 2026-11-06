# features/why-me

Bagian "Why Choose Me?" — perbandingan dua kolom.

| Berkas | Isi |
|---|---|
| `data.ts` | Judul, dua daftar (`strengths` dan `others`), dan tombol ajakan. |
| `components/why-me-section.tsx` | Dua kolom perbandingan + tombol HIRE ME. |

## Catatan

- Komponen `ComparisonColumn` dipakai dua kali dengan prop `highlighted`
  yang berbeda. Kolom "Working With Me" tampil tebal dan putih, kolom
  "Another Talent" sengaja lebih redup (`text-neutral-400` dan ikon
  `opacity-40`) supaya perbandingannya langsung terbaca.
- Avatar kolom kanan memakai ikon orang dari `lucide-react`, bukan foto —
  memang begitu di desain.
- Usahakan **jumlah baris kedua daftar sama** agar sejajar di layar lebar.
- Di mobile kolomnya bertumpuk, dan "Working With Me" selalu di atas.
