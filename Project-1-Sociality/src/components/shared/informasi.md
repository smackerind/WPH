# components/shared

Komponen yang dipakai lintas fitur.

| File | Keterangan |
|---|---|
| `app-shell.tsx` | Kerangka halaman: navbar, isi, pill navigasi, dan modal global |
| `navbar.tsx` | Bilah atas: logo, pencarian, dan sisi kanan yang berubah sesuai status login |
| `bottom-nav.tsx` | Pill mengambang Home / + / Profile |
| `user-row.tsx` | Satu baris user (avatar, nama, tombol follow) |
| `follow-button.tsx` | Tombol Follow / Following |
| `empty-state.tsx` | Tampilan keadaan kosong |
| `error-state.tsx` | Tampilan gagal memuat + tombol coba lagi |
| `load-more.tsx` | Penanda akhir daftar untuk infinite scroll |

## Keputusan

- **Pill navigasi tampil di desktop maupun mobile**, bukan sidebar — begitu
  desainnya.
- **Modal "Likes" dan "Followers/Following" dipasang sekali di `AppShell`**
  dan dikendalikan lewat Redux, karena keduanya bisa dibuka dari banyak
  halaman.
- Navbar punya dua bentuk pencarian: dropdown di bawah kotak pada desktop,
  dan layar penuh pada mobile — keduanya memakai `SearchResults` yang sama.
- `load-more.tsx` memakai `IntersectionObserver` bawaan browser, jadi tidak
  ada library infinite scroll tambahan.
