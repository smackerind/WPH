# UI Components

Folder ini untuk menyimpan komponen UI dari shadcn/ui dan Radix UI.

## Setup shadcn/ui

Untuk menambahkan komponen dari shadcn/ui, ikuti langkah berikut:

1. Buat file `components.json` di root project dengan konfigurasi:
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

2. Install komponen yang dibutuhkan dengan command:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# dll...
```

3. Dokumentasi: https://ui.shadcn.com/docs

## Komponen yang Mungkin Dibutuhkan

Berdasarkan design Figma, pertimbangkan untuk menginstall:
- Button
- Card
- Input
- Dialog/Modal
- Tabs
- Badge
- Skeleton (untuk loading states)

Sesuaikan dengan kebutuhan design kalian!
