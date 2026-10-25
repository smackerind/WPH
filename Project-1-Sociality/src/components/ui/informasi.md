# components/ui

Komponen dasar tanpa logika bisnis — bisa dipakai di fitur mana pun.

| File | Keterangan |
|---|---|
| `button.tsx` + `button-variants.ts` | Tombol pill: primary, outline, ghost, danger |
| `input.tsx` | Kolom isian dengan label, pesan error, dan ikon mata untuk password |
| `textarea.tsx` | Kotak teks panjang (caption, bio) |
| `avatar.tsx` | Foto profil bulat; otomatis memakai huruf awal nama kalau gambarnya kosong |
| `dialog.tsx` | Modal di atas Radix Dialog |
| `dropdown-menu.tsx` | Menu "⋯" di atas Radix Dropdown Menu |
| `tabs.tsx` | Tab profil (Gallery / Saved / Liked) di atas Radix Tabs |
| `skeleton.tsx` | Kotak berkedip saat data belum tiba |

## Keputusan

- **Ditulis tangan dengan gaya shadcn/ui**, memakai Radix sebagai dasar.
  CLI `npx shadcn init` menarik kode dari ui.shadcn.com yang tidak terjangkau
  dari lingkungan kerja ini, jadi filenya dibuat langsung — strukturnya tetap
  sama sehingga CLI shadcn bisa dipakai menambah komponen lain di kemudian hari.
- Radix dipilih untuk modal, tab, dan menu karena mengurus hal yang mudah
  terlupakan: fokus terkunci di dalam modal, Esc menutup, scroll halaman
  dikunci, dan navigasi panah di keyboard.
- `button-variants.ts` sengaja dipisah dari `button.tsx` karena aturan eslint
  `react-refresh` melarang satu file mengekspor komponen dan nilai biasa
  sekaligus.
