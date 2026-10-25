# store

Redux Toolkit — khusus state milik client.

| File | Keterangan |
|---|---|
| `index.ts` | Penyusunan store |
| `hooks.ts` | `useAppDispatch` dan `useAppSelector` yang sudah bertipe |
| `auth-slice.ts` | Status login (bukan data user) |
| `ui-slice.ts` | Overlay yang sedang terbuka dan kata kunci pencarian |

## Keputusan

- **Pembagian tugas yang tegas**: seluruh data dari server diurus TanStack
  Query, Redux hanya memegang state tampilan. Tidak ada data post, user,
  atau komentar yang disalin ke sini.
- `auth-slice` sengaja **tidak menyimpan profil user**. Sumbernya tetap
  `GET /api/me` lewat React Query; slice ini hanya menjawab "sudah login atau
  belum" supaya navbar tidak perlu menunggu permintaan jaringan.
- `isReady` menandai cookie sudah selesai dibaca di browser, mencegah navbar
  sempat menampilkan tombol yang salah saat halaman pertama kali dibuka.
