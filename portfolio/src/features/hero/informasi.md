# features/hero

Layar pertama yang dilihat pengunjung.

| Berkas | Isi |
|---|---|
| `data.ts` | Teks sapaan, judul, deskripsi, label tombol, dan angka rating. **Semua teks bagian ini diubah dari sini.** |
| `components/hero.tsx` | Tata letak dua kolom: teks di kiri, foto di kanan. |

## Kenapa judulnya dipecah tiga bagian?

Desain memberi warna hijau hanya pada kata "INTERACTIVE". Karena itu judul
disimpan sebagai `titleStart`, `titleHighlight`, dan `titleEnd`, bukan satu
kalimat. Mau memindahkan sorotan ke kata lain? Cukup geser teksnya antar
ketiga kolom itu, tidak perlu menyentuh JSX.

## Foto dua warna

Desain membelah potret: kiri hitam-putih, kanan bersemu hijau. Ini dibuat
dengan dua lapisan, bukan dua file gambar:

1. `<Image className="grayscale">` — seluruh foto jadi hitam-putih.
2. `<span className="left-1/2 bg-primary-300 mix-blend-color">` — menimpa
   separuh kanan. Mode `mix-blend-color` mengambil warna dari lapisan ini
   tetapi terang-gelapnya tetap dari foto, jadi detail wajah tidak hilang.

## Animasi

Bagian ini memakai `animate`, **bukan** `whileInView` seperti bagian lain,
karena sudah terlihat sejak halaman dibuka — menunggu "masuk layar" tidak
masuk akal di sini. Anak-anaknya muncul berurutan lewat `staggerChildren`.
