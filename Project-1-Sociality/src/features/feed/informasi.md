# features/feed

Timeline halaman utama.

## Isi folder

| File | Keterangan |
|---|---|
| `api/feed-api.ts` | `GET /api/feed` |
| `hooks/use-feed.ts` | `useFeed` (timeline) dan `useExplore` (cadangan) |
| `components/feed-content.tsx` | Isi halaman `/` |

## Keputusan

- **Infinite scroll tanpa library.** Memakai `useInfiniteQuery` ditambah
  `IntersectionObserver` lewat komponen `components/shared/load-more.tsx`.
- **Explore dipakai sebagai cadangan.** Kalau `GET /api/feed` mengembalikan
  daftar kosong — biasanya karena user baru belum mengikuti siapa pun —
  halaman tidak dibiarkan hampa: `GET /api/posts` ditampilkan beserta satu
  baris keterangan. Ini sekaligus membuat endpoint Explore terpakai, sesuai
  catatan mentor bahwa semua endpoint masuk MVP.
- Timeline wajib login. Pengunjung yang belum masuk sudah dialihkan ke
  `/login` oleh `proxy.ts`, jadi komponen ini tidak perlu menanganinya.
