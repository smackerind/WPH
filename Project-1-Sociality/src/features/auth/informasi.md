# features/auth

Pendaftaran, masuk, dan keluar akun.

## Isi folder

| File | Keterangan |
|---|---|
| `api/auth-api.ts` | `POST /api/auth/login`, `POST /api/auth/register` |
| `hooks/use-auth.ts` | `useLogin`, `useRegister`, `useLogout`, `useAuth`, `useAuthBootstrap` |
| `schemas/auth-schema.ts` | Aturan Zod untuk kedua form |
| `components/auth-shell.tsx` | Kerangka layar login & register (kartu kaca + cahaya ungu) |
| `components/login-form.tsx` | Form masuk |
| `components/register-form.tsx` | Form daftar |
| `types.ts` | `LoginPayload`, `RegisterPayload`, `AuthData`, `UpdateProfilePayload` |

## Keputusan

- **Token disimpan di cookie**, bukan localStorage, supaya `proxy.ts` bisa
  menjaga halaman terproteksi di sisi server. Helpernya ada di
  `lib/auth-cookie.ts`.
- **Logout tidak memanggil API** — Sociality tidak punya endpoint logout.
  Cukup hapus cookie, kosongkan cache React Query, lalu kembali ke `/login`.
- **Field Email di form Register ditambahkan sendiri.** Desain hanya
  menggambarkan Name, Username, Number Phone, Password, dan Confirm Password,
  padahal API mewajibkan email. Tanpa field itu pendaftaran pasti ditolak.
- Setelah login berhasil, cache dibersihkan total agar data milik akun
  sebelumnya tidak ikut terbawa.
