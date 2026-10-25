# lib

Perkakas bersama yang tidak terikat pada satu fitur.

| File | Keterangan |
|---|---|
| `api/axios.ts` | Satu-satunya instance axios; menyisipkan token dan menyeragamkan pesan error |
| `api/normalize.ts` | Menyelaraskan bentuk data yang tidak didokumentasikan swagger |
| `auth-cookie.ts` | Baca, tulis, dan hapus cookie token |
| `constants.ts` | Nama cookie, batas unggahan, ukuran halaman, daftar emoji |
| `query-keys.ts` | Seluruh query key TanStack Query, terkumpul di satu tempat |
| `post-cache.ts` | Menyunting satu post di semua daftar cache sekaligus |
| `utils.ts` | `cn`, format waktu relatif, format angka, huruf awal nama |

## Keputusan

- **Interceptor 401** menghapus cookie lalu memuat ulang ke `/login` dengan
  membawa tujuan semula. Pemuatan penuh disengaja: sesi sudah tidak berlaku,
  jadi seluruh state di memori memang sebaiknya ikut dibuang.
- **Pesan error diambil dari API** (`errors[0]` lalu `message`), bukan diganti
  kalimat umum, supaya user tahu persis apa yang salah.
- `post-cache.ts` ada karena satu post bisa muncul di enam daftar berbeda;
  tanpa ini angka like akan berbeda-beda antar halaman setelah ditekan.
- `query-keys.ts` terpusat supaya `invalidateQueries` tidak pernah salah ketik.
