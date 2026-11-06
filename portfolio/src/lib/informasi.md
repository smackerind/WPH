# lib

Berkas pendukung yang dipakai di mana-mana.

| Berkas | Isi |
|---|---|
| `utils.ts` | `cn()` — menggabungkan kelas Tailwind tanpa bentrok. |
| `motion.ts` | Kumpulan varian animasi dan pengaturan viewport. |
| `site.ts` | Identitas pemilik, daftar menu, dan tautan media sosial. |

## `cn()`

Menggabungkan `clsx` dan `tailwind-merge`. Gunanya: kalau sebuah komponen
punya kelas bawaan `px-4` lalu pemanggilnya mengirim `px-6`, yang menang
adalah `px-6` — bukan dua-duanya menempel dan saling berebut.

## `motion.ts`

Semua gerakan halaman diatur dari sini:

| Ekspor | Fungsi |
|---|---|
| `EASE` | Kurva percepatan standar seluruh situs |
| `fadeUp` / `fadeLeft` / `fadeRight` | Arah munculnya elemen |
| `stagger(gap)` | Membuat anak-anak daftar muncul berurutan |
| `modalPop` | Animasi masuk-keluar modal |
| `VIEWPORT` | Kapan animasi dijalankan (`once: true, amount: 0.15`) |

Mau mengubah gaya animasi seluruh halaman? Ubah di sini, bukan di sembilan
komponen satu per satu.

## `site.ts`

Nama, jabatan, menu, dan media sosial. Dibaca oleh Navbar, Hero, Contact,
dan Footer sekaligus — ubah sekali, berubah di semua tempat.
