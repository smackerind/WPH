# features/post

Membuat, menampilkan, dan menghapus post.

## Isi folder

| File | Keterangan |
|---|---|
| `api/post-api.ts` | `GET /api/posts`, `GET/DELETE /api/posts/{id}`, `POST /api/posts` |
| `hooks/use-post.ts` | `usePost`, `useCreatePost`, `useDeletePost` |
| `schemas/post-schema.ts` | Validasi foto (tipe & ukuran) dan caption |
| `components/post-card.tsx` | Kartu post di timeline |
| `components/post-actions.tsx` | Baris like / komentar / bagikan / simpan |
| `components/post-caption.tsx` | Caption dengan tombol "Show More" |
| `components/post-detail-content.tsx` | Halaman `/posts/[id]` beserta komentar |
| `components/post-grid.tsx` | Galeri tiga kolom di halaman profil |
| `components/image-dropzone.tsx` | Kotak unggah foto (klik atau seret) |
| `components/add-post-form.tsx` | Halaman `/add-post` |
| `components/post-card-skeleton.tsx` | Kerangka tampilan saat memuat |
| `types.ts` | `Post`, `PostListData`, `CreatePostPayload` |

## Keputusan

- **Angka share dihapus.** Desain menampilkan counter di sebelah tombol
  bagikan, tetapi API tidak punya data maupun endpoint share. Tombolnya
  dipertahankan sebagai "salin tautan"; menampilkan angka karangan akan
  menyesatkan.
- **Menu "⋯" untuk hapus post.** Tidak ada di desain, tetapi
  `DELETE /api/posts/{id}` tersedia dan tanpa tombol ini post tidak bisa
  dihapus dari mana pun. Hanya muncul pada post milik sendiri dan selalu
  meminta konfirmasi.
- **Unggah memakai `react-dropzone`** karena desain meminta seret-dan-lepas
  lengkap dengan keadaan error. Foto divalidasi dua kali: saat dijatuhkan
  dan saat form dikirim.
- Field foto diurus `Controller` milik React Hook Form karena nilainya
  berupa `File`.
