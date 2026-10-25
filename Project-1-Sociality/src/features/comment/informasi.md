# features/comment

Membaca, menambah, dan menghapus komentar.

## Isi folder

| File | Keterangan |
|---|---|
| `api/comment-api.ts` | `GET/POST /api/posts/{id}/comments`, `DELETE /api/comments/{id}` |
| `hooks/use-comment.ts` | `useComments`, `useAddComment`, `useDeleteComment` |
| `schemas/comment-schema.ts` | Batas panjang teks komentar |
| `components/comment-item.tsx` | Satu komentar |
| `components/comment-composer.tsx` | Kotak tulis + pemilih emoji |
| `types.ts` | `Comment`, `CommentListData` |

## Keputusan

- **Bentuk data diselaraskan di lapisan API.** Swagger tidak memerinci
  response komentar sama sekali, jadi `lib/api/normalize.ts` menerima
  beberapa kemungkinan nama field (`author` atau `user`, `text` atau
  `comment`) lalu mengembalikan satu bentuk tetap. Perbedaan di server cukup
  ditangani di satu tempat.
- **Pemilih emoji ditulis sendiri.** Desain hanya menampilkan grid kecil
  berisi 18 emoji; memasang library emoji picker (±200KB) tidak sebanding.
  Daftarnya ada di `lib/constants.ts`.
- **Angka komentar dinaikkan lebih dulu (optimistic)**, sedangkan daftar
  komentarnya diambil ulang dari server supaya id dan waktunya benar.
- Tombol hapus komentar muncul untuk pemilik komentar maupun pemilik post,
  mengikuti aturan API.
