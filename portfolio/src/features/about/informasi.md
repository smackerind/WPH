# features/about

Bagian "About Me" — judul besar dengan tangkapan layar kecil mengambang.

| Berkas | Isi |
|---|---|
| `data.ts` | Judul (dipecah tiga agar baris tengah bisa dihijaukan), paragraf, dan daftar gambar mengambang. |
| `components/about-section.tsx` | Tata letak dan animasinya. |

## Gambar mengambang

Posisinya **tidak** disimpan di `data.ts`, melainkan di konstanta
`FLOAT_POSITIONS` dalam komponen — karena yang disimpan di sana adalah
kelas Tailwind, bukan isi konten.

Gambar-gambar itu:
- bergerak naik-turun pelan tanpa henti (`y: [0, -10, 0]` + `repeat: Infinity`),
- **disembunyikan di bawah `lg`**. Di layar sempit gambarnya menabrak judul
  dan membuat teks sulit dibaca; frame mobile pada desain juga tidak
  menampilkannya.

Judul dibatasi `max-w-[680px]` di tengah sementara gambar ditempel di tepi
lebar penuh, supaya keduanya tidak pernah bertabrakan.
