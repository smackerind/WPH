# CLAUDE.md — Portfolio (Selamet Sumito)

Catatan kerja proyek. Dibaca ulang kalau token di-clear.

---

## 1. Proyek

Portofolio pribadi satu halaman, **tanpa API** — seluruh isinya statis.
Dibangun dari desain Figma `Figma8.zip`: 4 state desktop (1440px) dan
4 state mobile (393px), plus `Design System/Foundation.png`.

Dua belas bagian berurutan: Navbar → Hero → Service → About → Skills →
Why Choose Me → Experience → Selected Work → Testimonials → FAQ →
Contact → Footer.

## 2. Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) + TypeScript strict |
| Styling | Tailwind CSS v4 (token lewat `@theme`) |
| Animasi | `motion` v14 (nama baru Framer Motion) |
| Komponen | gaya shadcn/ui di atas Radix UI |
| Form | React Hook Form + Zod v4 |
| Unggah gambar | — (tidak ada) |
| Ikon | aset PNG dari desain + `lucide-react` |
| Font | Red Hat Display lewat `@fontsource` |

Radix yang dipakai: `react-accordion` (FAQ) dan `react-dialog` (modal).

Sengaja **tanpa** library: carousel testimoni (CSS scroll-snap),
scroll reveal (`whileInView` dari motion), state global (tidak perlu).
Paket `embla-carousel-react` sempat dipasang lalu dilepas karena tak terpakai.

## 3. Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint
npx tsc --noEmit
```

Tidak perlu `.env` — tidak ada API.

## 4. Struktur (feature-first)

```
src/
  app/              layout.tsx, page.tsx, globals.css, not-found
  features/
    hero/ service/ about/ skills/ why-me/ experience/
    portfolio/ testimonials/ faq/ contact/
      ├─ data.ts         seluruh teks & daftar bagian itu
      ├─ components/     komponen khusus bagian itu
      ├─ schemas/        hanya di contact (Zod)
      ├─ api/            hanya di contact (pengiriman pesan)
      └─ informasi.md    penjelasan folder + keputusannya
  components/
    ui/        button, input, textarea (+ informasi.md)
    shared/    Navbar, MobileMenu, Footer, Reveal, SectionHeading (+ informasi.md)
  lib/         utils, motion, site (+ informasi.md)
```

**12 berkas `informasi.md`** menjelaskan tiap folder: isinya apa, kenapa
dibuat begitu, dan apa yang boleh diubah. Setiap berkas kode juga diberi
komentar berbahasa Indonesia.

**`KONTEN.md`** di akar: daftar lengkap lokasi semua teks/gambar/tautan
yang bisa diganti.

## 5. Design token

**Font**: Red Hat Display (400/500/600/700/800), dari `@fontsource`.

**Skala huruf** (ukuran / tinggi baris), dari `Foundation.png`:

```
display-3xl 60/72   display-md 32/46   text-xl 20/34   text-sm 14/28
display-2xl 48/60   display-sm 28/38   text-lg 18/32   text-xs 12/24
display-xl  40/56   display-xs 24/36   text-md 16/30
display-lg  36/48   hero 80/88 (khusus judul Hero di desktop)
```

**Warna**

```
Primary 100 #DAFFAB  200 #91FF02  300 #3A6601  400 #1D3300
Neutral  25 #FDFDFD  400 #A4A7AE  800 #252B37  950 #0A0D12
Base     black #000000 (latar halaman)   white #FFFFFF
Aksen    bintang #F79009   galat #E34C3D
```

Hijau `#91FF02` adalah warna aksi: tombol, label bagian, garis timeline,
batang kemampuan, dan kata yang disorot di judul.

**Bentuk**: tombol pill (`rounded-full`), kartu `rounded-3xl` (20px),
kolom isian `rounded-xl` (12px). Tombol utama memakai `shadow-glow`.

**Breakpoint**: mobile first. Tata letak naik di `sm` (2 kolom portofolio),
`md` (2 kolom service), dan `lg` (versi desktop penuh, 1024px ke atas).
Lebar konten maksimum 1216px dengan padding 16px di semua ukuran —
1184px di desktop dan 361px di layar 393px, persis seperti desain.

**Letter-spacing**: Display lg/xl/2xl memakai -2% (dari Foundation),
dipasang langsung di token `--text-display-*--letter-spacing`.
Radius `4xl` (24px) juga ditambahkan. Bayangan tombol `shadow-glow` =
`0 4px 40px #91FF0266` (dari layer Button).

**Catatan perubahan**: penyesuaian ke txt desain (Nov 2026) ditandai
komentar `/* UBAH: lama → desain */` di atas elemen yang berubah.
Cari kata `UBAH` untuk melihat semuanya.

## 6. Keputusan penting

| Hal | Keputusan | Alasan |
|---|---|---|
| Formulir kontak | Simulasi di client, tanpa API | proyek ini memang tanpa backend; jalur ganti ke Formspree sudah disiapkan |
| Kartu portofolio | 6 kartu, 3 bertaut | hanya tiga proyek yang sudah tayang; sisanya `url: null` agar tidak ada tautan mati |
| Gambar proyek | Tangkapan layar asli, 762×568 | dikirim pemilik; sandbox tidak bisa mengakses domain vercel.app |
| Persentase skill | Diperbaiki dari desain | desain menulis "HTML" dua kali dan React 50% |
| Testimoni | Ditambah jadi 6 | supaya tombol panah ada gunanya |
| Carousel | CSS scroll-snap, bukan library | `grid-flow-col` + `grid-rows-2` sudah menghasilkan 2×2 desktop / 1 kolom mobile |
| FAQ | Accordion Radix + animasi motion | `forceMount` + `AnimatePresence` agar animasi menutup ikut berjalan |
| Foto Contact | Pakai `Man1.png` + `mix-blend-luminosity` + gradient ke hitam; ikon sosial & nama menimpa bagian bawah foto | `ProfileImageBackground.png` dari Figma ternyata kotak hijau polos, bukan potret |
| Foto Hero | Menempel di kanan atas (660×874), menembus ke belakang navbar transparan; blok hijau `#91FF02` + foto luminosity + gradient ke hitam | persis layer `ProfileImage` di Figma |
| Hero mobile | Teks dulu, foto di bawahnya | frame mobile |
| Gambar About | Mengambang di desktop; di mobile tersusun di blok 393×288 di bawah paragraf | frame mobile `Frame1618873595` |
| Judul Hero 1024–1279px | 60/72, bukan 80/80 | 80px meluber di layar laptop kecil |
| `overflow-x: clip` | Di `html` dan bagian Experience | animasi "masuk dari samping" sempat memunculkan scroll mendatar |
| Favicon | Bawaan `favicon.ico` | desain tidak menyertakan berkas logo; logo navbar berupa teks |

## 7. Animasi

| Bagian | Gerakan |
|---|---|
| Semua bagian | Scroll reveal lewat `<Reveal>`: fade + naik 24px, berurutan |
| Navbar | Jadi hitam pekat + garis bawah setelah digulir 24px (`useScroll`) |
| Hero | Judul & teks masuk berurutan; `animate`, bukan `whileInView` |
| Skills | Batang tumbuh dari 0 ke persentasenya saat terlihat |
| Experience | Garis hijau menggambar diri mengikuti gulir (`useScroll` + `useSpring`) |
| Portfolio | Hover: gambar membesar 5%, tombol VISIT tumbuh dari skala 0,6 |
| Testimonials | Geser mendatar dengan scroll-snap |
| FAQ | Tinggi jawaban beranimasi 0 ↔ auto, ikon berputar 90° |
| Modal | Skala 0,94 → 1 + fade, ikon memantul (`spring`) |
| Menu mobile | Geser dari kanan, item muncul berurutan |

Seluruh animasi dimatikan otomatis bila pengguna menyalakan
**reduce motion** di setelan sistemnya (diatur di `globals.css`).

## 8. Status

Selesai dan terverifikasi:

- `npx tsc --noEmit` bersih, `npm run lint` bersih, `npm run build` sukses.
- Telusur Playwright di **393px, 768px, 1024px, dan 1440px**: tidak ada
  error konsol, tidak ada scroll mendatar, dan seluruh bagian terlihat.
- Alur interaktif teruji: navbar berubah saat digulir, FAQ buka-tutup,
  panah testimoni, validasi formulir memunculkan 3 pesan kesalahan,
  modal sukses muncul setelah formulir diisi benar, menu mobile berisi
  6 tautan, dan 3 kartu portofolio bertaut dengan `target="_blank"`.

**Jebakan yang sempat terjadi:**

1. `next.config.ts` bawaan `create-next-app` berisi `turbopack.rules`
   untuk loader `@tailwindcss/turbopack`. **Jangan hapus blok itu** —
   tanpa itu `globals.css` tidak diproses dan halaman tampil tanpa gaya.
2. Animasi `whileInView` menggeser elemen keluar layar sebelum dijalankan,
   yang memunculkan scroll mendatar 8–16px. Diatasi dengan
   `overflow-x: clip`.
3. Tangkapan layar `fullPage` Playwright bisa menampilkan bagian kosong
   kalau skrip menggulir terlalu cepat — animasi reveal belum sempat
   terpicu. Bukan bug halaman; skrip ujinya yang perlu jeda lebih lama.
