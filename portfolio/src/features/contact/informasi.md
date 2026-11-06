# features/contact

Bagian "Let's Get In Touch" — formulir kontak beserta dua modal hasilnya.

| Berkas | Isi |
|---|---|
| `data.ts` | Teks bagian, label kolom, isi modal sukses dan gagal, serta sakelar simulasi. |
| `schemas/contact-schema.ts` | Aturan validasi Zod. |
| `api/send-message.ts` | Satu-satunya tempat pengiriman diurus. |
| `components/contact-section.tsx` | Foto, media sosial, dan formulir. |
| `components/result-modal.tsx` | Modal sukses/gagal. |

## Proyek ini tanpa API

`sendMessage()` hanya **simulasi**: menunggu 1,2 detik lalu berhasil.
Nyalakan `SIMULATE_FAILURE` di `data.ts` kalau ingin melihat modal gagal.

Mau pesannya benar-benar terkirim? Ganti isi `sendMessage()` dengan
panggilan ke layanan tanpa server seperti Formspree atau Web3Forms —
contohnya sudah ditulis sebagai komentar di berkas itu. Bentuk kembaliannya
tetap sama, jadi komponen formulir tidak perlu diubah sama sekali.

## Tiga lapis umpan balik

1. **Kesalahan isian** → pesan merah di bawah kolomnya (Zod + React Hook Form).
2. **Berhasil** → modal hijau, formulir dikosongkan.
3. **Gagal** → modal merah, isian **tidak** dihapus supaya tidak perlu
   mengetik ulang.

## Modal

Satu komponen untuk dua keadaan karena bentuknya identik di desain; hanya
ikon, warna, dan teks yang berbeda. Memakai Radix Dialog agar fokus
terkunci di dalam modal, Esc menutup, dan latar belakang tidak bisa di-tab.
`forceMount` + `AnimatePresence` dipakai supaya animasi keluarnya sempat
berjalan.

## Catatan foto

Berkas `ProfileImageBackground.png` dari Figma ternyata hanya kotak hijau
polos (bentuk latar), bukan potret. Jadi bagian ini memakai potret yang
sama dengan Hero, ditampilkan hitam-putih sesuai desain.
