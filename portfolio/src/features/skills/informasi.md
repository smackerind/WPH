# features/skills

Bagian "Skills That Bring Ideas to Life".

| Berkas | Isi |
|---|---|
| `data.ts` | Judul, delapan ikon teknologi, dan enam batang kemampuan. |
| `components/skill-bar.tsx` | Satu baris batang + persentase. |
| `components/skills-section.tsx` | Menyusun kiri (judul + ikon) dan kanan (batang). |

## Perbaikan terhadap desain

Desain Figma menulis **"HTML" dua kali** (80% dan 100%) dan memberi React
hanya 50% — janggal untuk portofolio frontend. Daftarnya diperbaiki menjadi
HTML 100, Tailwind CSS 90, Javascript 90, React JS 85, TypeScript 80,
Docker 70. Jumlah batang tetap enam seperti desain. Angkanya bebas diubah
di `data.ts`.

## Animasi batang

Lebar batang dianimasikan dari `0` ke `${value}%` saat baris masuk layar,
dengan jeda `index * 0.1` detik supaya tumbuh berurutan dari atas.

Nilai persen juga ditulis di atribut `aria-valuenow` dan elemennya diberi
`role="progressbar"`, jadi pembaca layar tetap menyebut angkanya meski
animasi tidak terlihat.
