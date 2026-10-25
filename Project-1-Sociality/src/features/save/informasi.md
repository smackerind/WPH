# features/save

Menyimpan post (bookmark).

## Isi folder

| File | Keterangan |
|---|---|
| `api/save-api.ts` | `POST/DELETE /api/posts/{id}/save` |
| `hooks/use-save.ts` | `useToggleSave` |

Daftar post tersimpan ada di `features/profile` (`GET /api/me/saved`).

## Keputusan

- **Status tersimpan belum tentu dikirim API.** Flag `savedByMe` belum
  terbukti ada pada data post, jadi statusnya dipegang di cache sisi client
  lewat optimistic UI. Halaman Saved tetap diambil ulang dari server setelah
  setiap aksi, sehingga sumber kebenarannya tetap di sana.
- Pola optimistic-nya sama persis dengan fitur like.
