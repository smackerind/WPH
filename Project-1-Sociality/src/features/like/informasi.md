# features/like

Menyukai post dan melihat siapa saja yang menyukainya.

## Isi folder

| File | Keterangan |
|---|---|
| `api/like-api.ts` | `POST/DELETE /api/posts/{id}/like`, `GET /api/posts/{id}/likes` |
| `hooks/use-like.ts` | `useToggleLike`, `usePostLikes` |
| `components/likes-dialog.tsx` | Modal "Likes" |

## Keputusan

- **Optimistic UI.** Angka dan ikon berubah lebih dulu lewat `onMutate`,
  lalu dikembalikan kalau server menolak. Endpoint like bersifat idempotent,
  jadi klik berulang aman dan tidak perlu refetch tambahan.
- **Satu post bisa muncul di banyak daftar sekaligus** (timeline, galeri
  profil, My Likes, Saved). Agar semuanya ikut berubah, hook memakai
  `patchPostEverywhere` di `lib/post-cache.ts` — bukan menyunting satu cache
  saja.
- Modal "Likes" dipasang sekali di `AppShell` dan dikendalikan lewat Redux,
  supaya kartu post mana pun bisa membukanya tanpa menyalin modal berulang.
- Ikon like berfungsi menyukai, sedangkan **angkanya** membuka daftar
  peliké — keduanya tombol terpisah.
