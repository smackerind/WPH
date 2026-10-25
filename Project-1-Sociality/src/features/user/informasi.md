# features/user

Pencarian user dan profil publik orang lain.

## Isi folder

| File | Keterangan |
|---|---|
| `api/user-api.ts` | `GET /api/users/search`, `/users/{username}`, `/posts`, `/likes`, `/followers`, `/following` |
| `hooks/use-user.ts` | `useSearchUsers`, `useUserProfile`, `useUserPosts`, `useUserLikes`, `useUserFollowers`, `useUserFollowing` |
| `components/search-results.tsx` | Daftar hasil pencarian |
| `components/friend-profile-content.tsx` | Halaman `/profile/[username]` |
| `types.ts` | `UserSummary`, `UserProfile`, `UserCounts`, dan bentuk daftarnya |

## Keputusan

- **Tab profil orang lain: Gallery dan Liked**, mengikuti desain — dan
  kebetulan persis cocok dengan endpoint `/posts` dan `/likes`.
- **Halaman ini publik.** Semua endpoint di atas bisa dipanggil tanpa token,
  jadi profil orang tetap terbuka untuk pengunjung yang belum login. Navbar
  menampilkan tombol Login/Register, dan aksi privat melempar ke `/login`.
- **Kata kunci pencarian di-debounce 400ms** di `components/shared/navbar.tsx`
  supaya API tidak dipanggil setiap huruf diketik.
- Tab yang sedang tidak dibuka tidak ikut mengambil data (`enabled`), jadi
  membuka profil hanya memanggil satu endpoint daftar.
