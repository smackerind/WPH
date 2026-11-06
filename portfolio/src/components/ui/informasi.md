# components/ui

Komponen dasar bergaya shadcn/ui. Tidak tahu apa-apa soal isi halaman —
hanya tahu cara menampilkan dirinya.

| Berkas | Fungsi |
|---|---|
| `button-variants.ts` | Daftar varian tombol (`cva`). Dipisah dari komponennya. |
| `button.tsx` | Tombol `<button>`, mendukung status memuat. |
| `input.tsx` | Kolom isian satu baris + label + pesan kesalahan. |
| `textarea.tsx` | Sama seperti Input, tapi banyak baris. |

## Kenapa varian dipisah ke berkas sendiri?

Dua alasan:

1. Aturan eslint `react-refresh/only-export-components` melarang satu
   berkas mengekspor komponen **dan** nilai biasa sekaligus.
2. Tautan yang ingin tampil seperti tombol tidak boleh dibungkus
   `<button>` (itu HTML tidak sah). Jadi dipakai begini:

```tsx
<a href="#contact" className={buttonVariants({ size: "lg" })}>Hire Me</a>
```

## Varian yang tersedia

| Varian | Dipakai di |
|---|---|
| `primary` | HIRE ME, Send Message — hijau dengan cahaya di bawahnya |
| `outline` | Panah carousel testimoni |
| `white` | Tombol VISIT di kartu portofolio |
| `ghost` | Tombol tanpa latar |

Ukuran: `sm`, `md`, `lg`, dan `icon` (bulat 44×44 untuk tombol berikon).

## Aksesibilitas

`Input` dan `Textarea` memasang `aria-invalid` dan `aria-describedby`
otomatis ketika ada pesan kesalahan, serta `role="alert"` pada pesannya —
jadi pembaca layar ikut mengumumkannya.
