# features/follow

Mengikuti dan berhenti mengikuti orang.

## Isi folder

| File | Keterangan |
|---|---|
| `api/follow-api.ts` | `POST/DELETE /api/follow/{username}` |
| `hooks/use-follow.ts` | `useToggleFollow` |
| `components/follow-list-dialog.tsx` | Modal Followers / Following |

Tombolnya sendiri ada di `components/shared/follow-button.tsx` karena dipakai
lintas fitur.

## Keputusan

- **Tombol follow muncul di tiga tempat**: halaman profil, modal "Likes", dan
  daftar followers/following. Hook menyunting dua bentuk cache sekaligus —
  profil tunggal dan daftar user — supaya ketiganya berubah bersamaan.
- Angka followers pada profil ikut naik/turun seketika, lalu diselaraskan
  dengan server setelah permintaan selesai.
- **Modal Followers/Following tidak digambarkan di desain**, tetapi API
  menyediakan empat endpoint untuknya dan angka di profil memang mengundang
  untuk diklik. Tampilannya meminjam bentuk modal "Likes" agar tetap selaras.
- Pengunjung yang belum login akan diarahkan ke `/login` saat menekan follow.
