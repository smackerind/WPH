# features/testimonials

Bagian "People Says About Me" — carousel testimoni.

| Berkas | Isi |
|---|---|
| `data.ts` | Enam testimoni: nama, jabatan, logo perusahaan, bintang, kutipan. |
| `components/testimonials-section.tsx` | Carousel dan tombol panah. |

## Carousel tanpa library

Desain menampilkan **4 kartu sekaligus (2×2)** di desktop dan **1 kartu**
di mobile. Itu dicapai dengan satu grid yang bisa digeser, bukan paket
carousel:

```
grid-flow-col          → kartu terisi menurun dulu, baru ke kanan
grid-rows-1 lg:grid-rows-2    → 1 baris di ponsel, 2 baris di desktop
auto-cols-[100%] lg:auto-cols-[calc(50%-12px)]   → lebar tiap kolom
overflow-x-auto snap-x snap-mandatory            → geser + berhenti rapi
```

Hasilnya: tetap bisa digeser dengan jari atau trackpad, tetap bekerja
tanpa JavaScript, dan tidak menambah satu paket pun ke ukuran bundle.
Paket `embla-carousel` sempat dipasang lalu dilepas karena tidak terpakai.

Tombol panah menggeser sejauh satu lebar tampilan (`scrollBy`), dan
dimatikan sendiri ketika sudah di ujung kiri atau kanan.

## Catatan isi

Desain hanya memuat empat testimoni. Dua ditambahkan supaya tombol panah
ada gunanya. Hapus saja kalau tidak diperlukan — carousel menyesuaikan
dengan jumlah isinya.
