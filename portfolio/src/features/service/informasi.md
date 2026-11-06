# features/service

Bagian "My Service Expertise" — tiga kartu layanan.

| Berkas | Isi |
|---|---|
| `data.ts` | Judul bagian dan daftar layanan. |
| `components/service-section.tsx` | Grid kartu. |

## Catatan

- Nomor **01, 02, 03 dihitung otomatis** dari urutan array
  (`String(index + 1).padStart(2, "0")`). Menambah layanan keempat cukup
  menambah satu objek di `data.ts`; nomornya ikut menyesuaikan.
- Ini **Server Component** — tidak ada `"use client"`. Animasinya datang
  dari `<Reveal>` yang sudah client di dalamnya, jadi JavaScript yang
  dikirim ke browser tetap sedikit.
- Grid: 1 kolom di ponsel → 2 kolom di `md` → 3 kolom di `lg`.
