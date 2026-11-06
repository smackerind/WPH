# features/experience

Bagian "Profesional Work" — timeline zig-zag.

| Berkas | Isi |
|---|---|
| `data.ts` | Daftar pengalaman: periode, posisi, logo perusahaan, deskripsi. |
| `components/experience-section.tsx` | Rel timeline, bulatan bernomor, dan kartu. |

## Nomor dan sisi kartu dihitung sendiri

Tidak ada kolom "nomor" atau "sisi" di `data.ts`. Keduanya diturunkan dari
urutan array: `index + 1` untuk bulatan, dan `index % 2 === 0` untuk
menentukan kartu di kanan atau kiri garis. Menambah pengalaman kelima cukup
menambah satu objek — selang-selingnya ikut benar dengan sendirinya.

## Garis yang menggambar diri

`useScroll` mengukur sejauh mana bagian ini sudah dilewati, lalu nilainya
(0 → 1) dipakai sebagai `scaleY` garis hijau. `useSpring` membuatnya
mengalir halus, tidak patah-patah mengikuti setiap piksel scroll.

## Kenapa kartunya ditulis dua kali di JSX?

Di desktop kartu harus berada di kolom kiri **atau** kanan dari grid dua
kolom. Di mobile hanya ada satu kolom. Karena itu kolom kiri diberi
`hidden lg:block` dan kolom kanan diberi `lg:hidden` saat gilirannya kiri —
hasilnya hanya satu kartu yang terlihat di tiap ukuran layar, tanpa duplikat.

Bagian ini memakai `overflow-x-clip` karena animasi "masuk dari samping"
sempat menaruh kartu di luar layar dan itu memunculkan scroll mendatar.
