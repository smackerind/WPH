# CLAUDE.md — Sociality (Social Media App)

Catatan kerja proyek. Dibaca ulang kalau token di-clear.

---

## 1. Proyek

Aplikasi media sosial bergaya Instagram: timeline, unggah foto, like,
komentar, follow, bookmark, dan profil.

- **API**: `https://be-social-media-api-production.up.railway.app/api`
  (swagger: `/api-swagger/`) — 30 endpoint, 9 grup, **semuanya terpakai**.
- **Envelope**: `{ success, message, data }`. Daftar berhalaman:
  `data.<items>[]` + `data.pagination{page,limit,total,totalPages}`.
- **Desain**: 9 layar, 30 state desktop (1440px) + 24 state mobile (393px).
- **Acuan tambahan**: `Sociality Frontend MVP Guide` (user story + acceptance).

## 2. Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript strict |
| Styling | Tailwind CSS v4 |
| Komponen | shadcn/ui ditulis tangan di atas Radix UI |
| Client state | Redux Toolkit (overlay + status login saja) |
| Server state | TanStack Query v5 + optimistic UI |
| Form | React Hook Form + Zod v4 |
| Tanggal | Day.js |
| HTTP | axios — satu instance, lapisan API dipisah per fitur |
| Unggah | react-dropzone |
| Toast | sonner |

Sengaja **tanpa** library: infinite scroll (`IntersectionObserver`),
emoji picker (grid 18 emoji ditulis sendiri), animasi modal (dua keyframe
di `globals.css`).

## 3. Menjalankan

```bash
npm install
cp .env.example .env.local   # isi NEXT_PUBLIC_API_BASE_URL
npm run dev                  # http://localhost:3000
npm run build && npm start
npm run lint
npx tsc --noEmit
```

## 4. Struktur (feature-first)

```
src/
  app/            login, register, / (timeline), posts/[id], add-post,
                  me, me/edit, me/likes, profile/[username]
  features/
    auth/ feed/ post/ comment/ like/ save/ follow/ user/ profile/
      ├─ api/          fungsi axios per endpoint
      ├─ hooks/        hook TanStack Query
      ├─ components/   komponen khusus fitur
      ├─ schemas/      skema Zod
      ├─ types.ts
      └─ informasi.md  penjelasan folder + keputusannya
  components/ui/      komponen dasar (gaya shadcn)
  components/shared/  AppShell, Navbar, BottomNav, PostCard, dll
  lib/                axios, cookie, query-keys, post-cache, utils
  store/              slice Redux Toolkit
  proxy.ts            penjaga rute (nama baru middleware.ts di Next 16)
```

Setiap file diberi komentar berbahasa Indonesia, dan **setiap folder punya
`informasi.md`** berisi daftar isi, endpoint yang dipakai, dan keputusan di
dalamnya (13 file).

## 5. Design token

**Font**: desain memakai **SF Pro** (milik Apple, tidak boleh dibundel sebagai
web font). Diganti **Inter** lewat `@fontsource` — bentuknya paling dekat dan
hasilnya sama di semua perangkat.

**Skala huruf** (ukuran / tinggi baris):

```
display-3xl 60/72   display-md 32/40   text-xl 20/34   text-sm 14/28
display-2xl 48/60*  display-sm 28/38   text-lg 18/32   text-xs 12/24
display-xl  40/48*  display-xs 24/36   text-md 16/30
display-lg  36/44*                            * letter-spacing -2%
```

**Warna**

```
Neutral  25 #FDFDFD   50 #FAFAFA   100 #F5F5F5  200 #E9EAEB  300 #D5D7DA
        400 #A4A7AE  500 #717680   600 #535862  700 #414651  800 #252B37
        900 #181D27  950 #0A0D12          ← latar aplikasi
Primary 100 #F6F9FE  200 #7F51F9   300 #6936F2   ← tombol & tautan aktif
Accent  Red #D9206E  Green #079455 Yellow #FDB022
```

Bentuk pill (radius 100–1000px), kartu radius 16px, glassmorphism
`backdrop-blur` 40px di atas `#00000033` dengan border `#181D27`.

**Breakpoint**: desain mobile sampai 1023px, desktop mulai 1024px (`lg:`).

## 6. Peta layar → endpoint

| Rute | Layar | Endpoint |
|---|---|---|
| `/login` | Login (init / error / fill) | `POST /auth/login` |
| `/register` | Register (init / error / fill) | `POST /auth/register` |
| `/` | Timeline + Full size | `GET /feed`, cadangan `GET /posts` |
| modal Likes | Likes | `GET /posts/{id}/likes`, `POST/DELETE /follow/{username}` |
| `/posts/[id]` | Comment (init / fill / emoji / empty) | `GET /posts/{id}`, `GET+POST /posts/{id}/comments`, `DELETE /comments/{id}`, `DELETE /posts/{id}` |
| `/add-post` | Add Post (init / error / fill / success) | `POST /posts` |
| `/me` | My Profile (gallery / saved / empty / menu) | `GET /me`, `/me/posts`, `/me/saved` |
| `/me/likes` | My Likes | `GET /me/likes` |
| `/me/edit` | Update Profile (edit / error / success) | `PATCH /me` |
| `/profile/[username]` | Friends Profile (follow / following / liked) | `GET /users/{u}`, `/posts`, `/likes` |
| overlay navbar | Search (found / not found) | `GET /users/search` |
| modal dari profil | Followers / Following | `GET /users/{u}/followers`, `/following`, `/me/followers`, `/me/following` |

Aksi di kartu post: `POST/DELETE /posts/{id}/like`, `POST/DELETE /posts/{id}/save`.

## 7. Keputusan penting

| Hal | Keputusan | Alasan |
|---|---|---|
| Token | Cookie `sociality_token` | agar `proxy.ts` bisa menjaga rute di server |
| Timeline sebelum login | `/` dialihkan ke `/login` | `GET /feed` dan `GET /posts` dua-duanya wajib token |
| Halaman publik | `/posts/[id]`, `/profile/[username]`, pencarian | endpoint-nya memang publik; navbar memakai bentuk "Before login" |
| Tab profil sendiri | Gallery \| Saved | ikut desain |
| Tab profil orang lain | Gallery \| Liked | ikut desain, cocok dengan API |
| My Likes | Halaman sendiri `/me/likes` | diminta panduan MVP, tidak ada di desain |
| Tombol & angka Share | Tombol = salin tautan, **angka dihapus** | API tidak punya data share |
| Email di form Register | **Ditambahkan** | desain melewatkannya, API mewajibkannya |
| Email di Edit Profile | Ditampilkan tapi non-aktif | `PATCH /me` tidak menerima email |
| Hapus post / komentar | Menu "⋯" dan ikon di komentar | tidak ada di desain, tetapi endpoint-nya ada |
| My Likes & Logout | Di menu "⋯" profil | pill navigasi menutupi area tombol di bawah halaman |
| Followers / Following | Modal bergaya modal Likes | tidak ada di desain, endpoint tersedia |
| Explore `GET /posts` | Cadangan saat timeline kosong | endpoint tetap terpakai, halaman tidak hampa |
| `middleware.ts` | Diganti `proxy.ts` | Next 16 mengganti nama konvensinya |

## 8. Catatan API

- Wajib token: `GET /posts`, `GET /feed`, `POST /posts`, dan semua aksi privat.
- Publik: `GET /users/{u}` beserta `/posts` dan `/likes`, `GET /users/search`,
  `GET /posts/{id}`, `GET /posts/{id}/comments`.
- `GET /posts/{id}/likes` menambah flag `isFollowedByMe`, `isMe`, `followsMe`
  bila token dikirim.
- Bentuk data yang sudah dipastikan lewat panggilan langsung:
  - `GET /users/{u}` → `{ id, name, username, bio, avatarUrl, email, phone,
    counts:{post,followers,following,likes}, isFollowing, isMe }`
  - `GET /posts/{id}` → `{ id, imageUrl, caption, createdAt,
    author:{id,username,name,avatarUrl}, likeCount, commentCount, likedByMe }`
  - `GET /users/search` → `data.users[] { id, username, name, avatarUrl,
    isFollowedByMe }`
- **Belum dipastikan** (butuh token): bentuk `GET /me`, objek comment, dan
  ada/tidaknya flag `savedByMe`. Karena itu `lib/api/normalize.ts` menerima
  beberapa kemungkinan nama field.
- Gambar dihosting di **Cloudinary** → didaftarkan di `next.config.ts`.
- Tidak tersedia di API: edit post, edit komentar, notifikasi, ganti password,
  logout.

## 9. Status

Selesai dan terverifikasi: `npx tsc --noEmit` bersih, `npm run lint` bersih,
`npm run build` sukses (10 rute), dan telusur Playwright di 1440px serta
393px terhadap mock API lolos seluruhnya — login, like, modal Likes,
pencarian, komentar + emoji, unggah post, profil, tab Saved, modal Followers,
edit profil, My Likes, follow, dan pengecekan bahwa `/` tanpa login dialihkan
ke `/login` serta aksi privat tanpa login melempar ke halaman login.

**Catatan terbuka**: alur login dan unggah **belum diuji terhadap API
sungguhan** — sandbox tempat proyek ini dibuat diblokir dari domain Railway,
jadi verifikasi memakai mock lokal yang bentuk response-nya menyalin hasil
panggilan nyata. Perlu dicoba sekali oleh pemilik akun.

**Jebakan yang sempat terjadi**: `next.config.ts` bawaan create-next-app
berisi aturan `turbopack.rules` untuk loader `@tailwindcss/turbopack`. Aturan
itu sempat terhapus saat file diganti, akibatnya `globals.css` disajikan apa
adanya dan seluruh halaman tampil tanpa gaya di mode dev. Jangan hapus blok
itu.
