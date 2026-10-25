# features/profile

Profil sendiri: melihat, mengubah, dan daftar milik sendiri.

## Isi folder

| File | Keterangan |
|---|---|
| `api/me-api.ts` | `GET/PATCH /api/me`, `/me/posts`, `/me/likes`, `/me/saved`, `/me/followers`, `/me/following` |
| `hooks/use-me.ts` | `useMe`, `useUpdateMe`, `useMyPosts`, `useMySaved`, `useMyLikes`, `useMyFollowers`, `useMyFollowing` |
| `schemas/profile-schema.ts` | Aturan Zod form Edit Profile |
| `components/profile-header.tsx` | Kepala profil (dipakai bersama profil orang lain) |
| `components/my-profile-content.tsx` | Halaman `/me` |
| `components/edit-profile-form.tsx` | Halaman `/me/edit` |
| `components/my-likes-content.tsx` | Halaman `/me/likes` |
| `components/gallery-tab.tsx` | Isi satu tab galeri (memuat / gagal / kosong / berisi) |

## Keputusan

- **Tab profil sendiri: Gallery dan Saved**, mengikuti desain. Panduan MVP
  menyebut Posts/Likes/Saved/Settings, tetapi desain yang dipakai — dan
  desainnya justru lebih pas dengan API.
- **Halaman My Likes dibuat terpisah** di `/me/likes` memakai
  `GET /api/me/likes`, sesuai permintaan panduan MVP meski tidak ada di desain.
- **My Likes dan Logout ditaruh di menu "⋯"** sebelah tombol Edit Profile.
  Sempat diletakkan sebagai tombol di bawah halaman, tetapi pill navigasi
  yang melayang menutupinya sehingga tidak bisa ditekan. Menu ini juga cocok
  dengan frame "My Profile Menu" pada desain.
- **Field Email di Edit Profile dinonaktifkan.** Desain menampilkannya,
  tetapi `PATCH /api/me` hanya menerima name, username, phone, bio, dan
  avatar. Dibiarkan tampil agar sesuai desain, tapi tidak bisa diketik dan
  tidak ikut dikirim.
- Avatar dikirim sebagai `multipart/form-data`, dibatasi 5MB dan hanya
  PNG/JPG/WEBP sesuai dokumentasi API.
- Tab Saved baru mengambil data ketika benar-benar dibuka.
