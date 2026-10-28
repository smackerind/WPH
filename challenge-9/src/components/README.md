# Components

Folder ini untuk menyimpan komponen-komponen reusable aplikasi.

## Struktur yang Disarankan

Pisahkan komponen berdasarkan fungsinya:

### Feature Components
- `MovieCard.tsx` - Card untuk menampilkan preview movie
- `MovieGrid.tsx` - Grid layout untuk movies
- `SearchBar.tsx` - Component pencarian
- `FilterSection.tsx` - Component filter
- Dan komponen lainnya sesuai design

### Layout Components
- `Navbar.tsx` - Navigation bar
- `Footer.tsx` - Footer
- `Layout.tsx` - Main layout wrapper

## Best Practices

1. Buat komponen yang reusable dan modular
2. Gunakan TypeScript interfaces untuk props
3. Implementasikan proper prop validation dengan Zod (jika diperlukan)
4. Gunakan Radix UI primitives untuk accessibility
5. Tambahkan animations dengan Framer Motion
