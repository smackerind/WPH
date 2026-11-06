# components/shared

Komponen yang dipakai lintas bagian. Tidak terikat pada satu fitur.

| Berkas | Fungsi |
|---|---|
| `navbar.tsx` | Navigasi menempel di atas. Berubah jadi hitam pekat + garis bawah setelah halaman digulir 24px (frame "Scroll Design"). Di bawah `lg` hanya menampilkan logo dan tombol hamburger. |
| `mobile-menu.tsx` | Menu layar penuh untuk mobile. Geser masuk dari kanan, item muncul berurutan, mengunci scroll halaman, bisa ditutup dengan Esc. |
| `footer.tsx` | Baris hak cipta. Isinya diambil dari `lib/site.ts`. |
| `reveal.tsx` | Pembungkus animasi "muncul saat digulir". Dipakai di hampir semua bagian. Lihat catatan di bawah. |
| `section-heading.tsx` | Kepala bagian: label hijau kecil + judul besar + penjelas. Punya dua bentuk, `center` dan `split`. |

## Kenapa ada `Reveal`?

Sembilan bagian halaman memakai animasi muncul yang sama. Tanpa komponen ini,
varian `motion` harus ditulis ulang di setiap berkas dan gampang jadi tidak
seragam. Dengan `Reveal`, gaya animasi seluruh situs diatur dari satu tempat:
`src/lib/motion.ts`.

Pemakaian:

```tsx
<Reveal delay={0.1}>…</Reveal>              // naik dari bawah
<Reveal direction="left">…</Reveal>          // masuk dari kiri
<Reveal as="li" delay={index * 0.08}>…</Reveal>  // untuk daftar berurutan
```

Animasi hanya berjalan **sekali** (`once: true`), jadi tidak mengulang saat
pengguna menggulir naik-turun.

## Catatan aksesibilitas

`globals.css` mematikan seluruh animasi bila pengguna menyalakan
"reduce motion" di setelan sistemnya.
