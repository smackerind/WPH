# Company Profile - React Assignment

## Deskripsi Assignment

Pada assignment ini, kamu akan membuat sebuah **Company Profile Website** menggunakan React, TypeScript, dan TailwindCSS. Website ini harus responsive, modern, dan mengikuti design yang telah disediakan di Figma.

**Figma Design:** [Link Design](https://www.figma.com/design/AmMiYJmlPXNrKmMDDwTw1B/Company-Profile?node-id=2210-441096&t=2lwSN9ydAq9ki2cM-1)

## Tujuan Pembelajaran

Melalui assignment ini, kamu diharapkan dapat:

- Memahami dan menerapkan konsep component-based architecture di React
- Menggunakan TypeScript untuk type safety
- Menerapkan styling dengan TailwindCSS
- Membuat responsive design untuk berbagai ukuran layar
- Menerapkan best practices dalam struktur folder dan clean code
- Mengimplementasikan navigation dan routing

## Getting Started

### Prerequisites

Pastikan kamu sudah menginstall:

- Node.js (v18 atau lebih baru)
- npm atau yarn
- Git
- Code editor (VSCode recommended)

### Installation

1. Clone repository classroom kalian masing masing

2. Install dependencies

```bash
npm install
```

3. Jalankan development server

```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

## Struktur Folder

```
src/
├── components/        # Tempatkan semua reusable components di sini
│   ├── layout/       # Components untuk layout (Navbar, Footer, dll)
│   ├── sections/     # Components untuk setiap section (Hero, About, dll)
│   └── ui/           # Reusable UI components (Button, Card, dll)
├── pages/            # Tempatkan page components di sini
├── types/            # TypeScript type definitions
├── assets/           # Images, icons, dan static files
└── data/             # Mock data untuk content
```

**Catatan:** Folder-folder ini perlu kamu buat sendiri sesuai kebutuhan project kamu.

## Requirements

### Functional Requirements

1. **Implementasi Design Figma**
   - Ikuti design yang ada di Figma dengan akurat
   - Perhatikan spacing, typography, dan color scheme
   - Implementasikan semua sections yang ada di design

2. **Component Structure**
   - Buat components yang reusable dan modular
   - Pisahkan logic dan presentation
   - Gunakan props dengan TypeScript interface

3. **Responsive Design**
   - Website harus responsive dari mobile hingga desktop
   - Breakpoints: Mobile (320px+), Desktop (1024px+)
   - Pastikan tampilan optimal di semua ukuran layar antara mobile dan desktop
   - Test di berbagai device

4. **TypeScript**
   - Semua components harus menggunakan TypeScript
   - Define proper types/interfaces untuk props
   - Hindari penggunaan `any` type

5. **TailwindCSS**
   - Gunakan utility classes untuk styling
   - Buat custom classes jika diperlukan
   - Manfaatkan responsive utilities

### Technical Requirements

- Menggunakan Vite + React + TypeScript
- Styling dengan TailwindCSS
- Code harus clean dan readable
- Proper component naming conventions
- Organized folder structure
- No console errors atau warnings
- Git commits yang descriptive

## Sections yang Harus Dibuat

Berdasarkan design Figma, buat sections berikut (sesuaikan dengan design yang diberikan):

1. **Navbar/Header** - Navigation bar dengan logo dan menu
2. **Hero Section** - Section pembuka dengan headline dan CTA
3. **About/Company Overview** - Informasi tentang perusahaan
4. **Services/Products** - Daftar layanan atau produk
5. **Portfolio/Projects** (jika ada) - Showcase projects atau portfolio
6. **Team** (jika ada) - Tim atau orang-orang di perusahaan
7. **Testimonials** (jika ada) - Review atau testimonial clients
8. **Contact/Footer** - Informasi kontak dan footer

> **Catatan:** Pelajari design Figma dengan seksama untuk memahami semua sections yang perlu dibuat

## Hints & Tips

### Memulai Project

1. **Analisis Design Figma**
   - Export assets (images, icons) dari Figma
   - Catat color palette dan typography yang digunakan
   - Identifikasi components yang bisa di-reuse

2. **TailwindCSS v4 Sudah Dikonfigurasi**
   - TailwindCSS v4 sudah ter-install dan dikonfigurasi
   - File `src/index.css` berisi `@import "tailwindcss"` dan `@source` directive
   - Tambahkan custom theme di CSS dengan `@theme` jika diperlukan
   - Tidak perlu `tailwind.config.js` untuk v4

3. **Mulai dari Structure**
   - Buat folder structure terlebih dahulu
   - Mulai dari components kecil (Button, Card)
   - Kemudian buat sections (Hero, About, dll)

### Component Tips

- Mulai dari components terkecil (button, card) sebelum membuat yang kompleks
- Pikirkan components mana yang bisa di-reuse
- Gunakan `children` props untuk flexible components
- Satu component = satu file

### TypeScript Tips

- Buat file `types/index.ts` untuk menyimpan interfaces yang sering digunakan
- Gunakan `interface` untuk object shapes
- Export types yang digunakan di multiple files
- Contoh:
  ```typescript
  // types/index.ts
  export interface ButtonProps {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    onClick?: () => void;
  }
  ```

### TailwindCSS Tips

- Manfaatkan responsive classes: `md:`, `lg:`, `xl:`
- Gunakan flexbox dan grid untuk layout
- Perhatikan spacing system Tailwind (4px increments)
- Contoh responsive:
  ```tsx
  <div className="flex flex-col md:flex-row gap-4">
  ```

### Best Practices

- **Naming Convention:** PascalCase untuk components, camelCase untuk functions/variables
- **File Organization:** One component per file
- **Props:** Destructure props untuk readability
- **Comments:** Comment code yang kompleks atau tidak obvious

### Development Workflow

1. Buat component structure dulu (skeleton)
2. Tambahkan styling dengan TailwindCSS
3. Test responsiveness
4. Add interactivity jika diperlukan
5. Clean up dan refactor

## Rubrik Penilaian

### 1. UI/UX Implementation (40%)

- [ ] Design sesuai dengan Figma
  - Layout dan structure akurat sesuai design
  - Visual hierarchy dan composition terjaga
  - Semua sections terimplementasi dengan baik
- [ ] Responsive Design
  - Mobile responsive (320px - 767px)
  - Desktop layout (1024px+)
  - Tampilan optimal di semua ukuran antara mobile dan desktop
  - Touch-friendly dan user-friendly di semua devices
- [ ] Visual Consistency
  - Color scheme konsisten dengan design system
  - Typography (font family, sizes, weights) sesuai
  - Spacing dan alignment proper
  - Assets dan images dioptimasi dan sesuai design

### 2. Code Architecture & Quality (30%)

- [ ] Component Structure
  - Components terstruktur dengan baik dan modular
  - Reusable components (DRY principle)
  - Separation of concerns yang jelas
  - Component hierarchy logical
- [ ] TypeScript Implementation
  - Proper type definitions untuk semua components
  - Props dan state fully typed
  - Interfaces untuk complex objects
  - Minimal penggunaan `any` type
- [ ] Project Organization
  - Folder structure terorganisir dan logical
  - File naming conventions konsisten
  - Code mudah dipahami dan di-navigate

### 3. Styling Implementation (20%)

- [ ] TailwindCSS Usage
  - Utility classes digunakan effectively
  - Responsive utilities (md:, lg:, xl:) proper
  - Custom configuration jika diperlukan
  - Tidak ada inline styles unnecessary
- [ ] Code Readability
  - Clean dan readable code
  - Consistent styling patterns
  - Proper indentation dan formatting
  - Naming conventions yang descriptive

### 4. Development Process (10%)

- [ ] Git Management
  - Descriptive commit messages
  - Regular dan logical commits
  - Commit history yang jelas
- [ ] Code Quality Standards
  - No console errors
  - No TypeScript/ESLint warnings
  - Code berfungsi dengan baik
  - Best practices diterapkan


### Bonus Points

- [ ] Animations/Transitions yang smooth
  - Hover effects
  - Smooth scrolling
  - Transition animations
- [ ] Accessibility features
  - ARIA labels
  - Semantic HTML
  - Keyboard navigation
- [ ] Performance optimizatio
  - Image optimization
  - Code splitting
  - Lazy loading
- [ ] Extra features yang meningkatkan UX
  - Interactive elements
  - Micro-interactions
  - Enhanced user experience

## Submission

### Cara Submit

1. **Push ke GitHub**

   ```bash
   git add .
   git commit -m "feat: complete company profile"
   git push origin main
   ```


### Checklist Sebelum Submit

- [ ] All sections completed
- [ ] Responsive di semua device
- [ ] No console errors
- [ ] Code di-push ke GitHub


## FAQ & Common Issues

### Setup & Configuration

**Q: TailwindCSS sudah ter-install?**
A: Ya! TailwindCSS v4 sudah dikonfigurasi. Kamu bisa langsung gunakan utility classes. File penting:
- `src/index.css` - Berisi `@import "tailwindcss"` dan `@source` directive
- `vite.config.ts` - Sudah include `@tailwindcss/vite` plugin

Untuk customization, tambahkan `@theme` di `src/index.css`:
```css
@theme {
  --color-primary: #your-color;
  --font-display: "Your Font";
}
```

**Q: Boleh menggunakan library tambahan?**
A: Fokus menggunakan React, TypeScript, dan TailwindCSS. Untuk icons bisa menggunakan:

- react-icons
- heroicons
- lucide-react

### Design & Assets

**Q: Bagaimana cara handle images dari Figma?**
A:

1. Klik kanan pada image di Figma → Export
2. Pilih format (PNG/JPG untuk photos, SVG untuk icons)
3. Save di folder `src/assets/`
4. Import di component: `import heroImg from './assets/hero.png'`

**Q: Bagaimana cara lihat exact colors di Figma?**
A:

1. Select element di Figma
2. Lihat panel kanan (Design tab)
3. Copy hex code warna
4. Bisa save di `tailwind.config.js` sebagai custom color

### Development

**Q: Haruskah membuat multiple pages dengan routing?**
A: Tidak wajib. Single page dengan smooth scroll sudah cukup. Tapi jika ingin challenge:

```bash
npm install react-router-dom
```

**Q: Bagaimana cara membuat smooth scroll?**
A: Gunakan `scroll-behavior: smooth` di CSS atau library seperti `react-scroll`

**Q: Component saya terlalu besar, bagaimana cara refactor?**
A:

1. Identify repeated patterns → extract to reusable component
2. Break down into smaller sub-components
3. Separate business logic dari presentation

### Debugging

**Q: Error "Module not found"**
A:

1. Check import path (relative vs absolute)
2. Check file extension (.tsx vs .ts)
3. Restart dev server (`npm run dev`)

**Q: Tailwind classes tidak work**
A:

1. Check `@source` directive di `src/index.css` - harus point ke file components kamu
2. Restart dev server (`npm run dev`)
3. Clear cache: hapus `node_modules/.vite` folder dan restart

**Q: TypeScript error tapi code works**
A: Jangan ignore! Fix the type error. TypeScript membantu catch bugs.

### Styling

**Q: Kapan harus pakai custom CSS vs Tailwind?**
A:

- Default: Use Tailwind utilities
- Complex animations: Custom CSS
- Repeated patterns: Create Tailwind component dengan `@apply`

**Q: Bagaimana cara customize Tailwind theme?**
A: TailwindCSS v4 menggunakan CSS-based configuration. Tambahkan di `src/index.css`:

```css
@theme {
  --color-primary: #your-color;
  --color-secondary: #another-color;
  --font-display: "Your Font Name";
  --spacing-custom: 2.5rem;
}
```

Kemudian gunakan: `bg-primary`, `text-secondary`, `font-display`, `p-custom`

### Performance

**Q: Website load lambat**
A:

1. Optimize images (compress, use WebP)
2. Lazy load images
3. Check bundle size dengan `npm run build`

## Resources

### Official Documentation

- [React Docs](https://react.dev/) - Official React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [TailwindCSS Docs](https://tailwindcss.com/docs) - Tailwind documentation
- [Vite Guide](https://vitejs.dev/guide/) - Vite documentation

### Installation Guides

- [TailwindCSS with Vite](https://tailwindcss.com/docs/guides/vite)
- [React Router](https://reactrouter.com/en/main/start/tutorial)

### Helpful Tools

- [Figma](https://www.figma.com/) - Design inspection dan export assets
- [React DevTools](https://react.dev/learn/react-developer-tools) - Chrome extension untuk debugging
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VSCode extension

### Learning Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - TypeScript patterns for React
- [Tailwind Components](https://tailwindui.com/components) - Component examples (free tier available)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Learn Flexbox dengan game
- [Grid Garden](https://cssgridgarden.com/) - Learn CSS Grid dengan game

### Inspiration

- [Awwwards](https://www.awwwards.com/) - Best web design inspiration
- [Dribbble](https://dribbble.com/) - Design inspiration

## Support & Learning Process

### Troubleshooting Steps

1. **Read error messages carefully** - Error messages memberikan hint
2. **Check documentation** - Official docs adalah sumber terbaik
3. **Search online** - Google error message, check StackOverflow
4. **Debug systematically** - Isolate the problem, test incrementally
5. **Ask for help** - Jika stuck >30 menit, ask mentor atau peers

### Learning Tips

- **Learn by doing** - Praktek langsung lebih efektif daripada baca teori
- **Break down problems** - Pecah task besar jadi smaller steps
- **Don't copy-paste blindly** - Understand code sebelum use
- **Experiment** - Try different approaches, learn from mistakes
- **Version control** - Commit often, easy to rollback

### Cara Tanya yang Efektif

Ketika stuck dan butuh bantuan:

1. Explain what you're trying to do
2. Show what you've tried
3. Share error messages atau screenshots
4. Ask specific questions

Contoh yang kurang baik: "Code saya error, help!"
Contoh yang baik: "Saya trying to implement responsive navbar, tapi di mobile menu tidak close after click. Sudah coba pakai state tapi masih tidak work. Error: [error message]. Code: [link/screenshot]"

## Evaluation Criteria Summary

| Kategori                        | Bobot | Focus Area                                             |
| ------------------------------- | ----- | ------------------------------------------------------ |
| **UI/UX Implementation**        | 40%   | Design accuracy, mobile to desktop responsive, visual consistency    |
| **Code Architecture & Quality** | 30%   | Component structure, TypeScript, project organization  |
| **Styling Implementation**      | 20%   | TailwindCSS usage, code readability, styling patterns  |
| **Development Process**         | 10%   | Git management, code quality standards                 |

---

Langkah Awal:

1. Pelajari design Figma dengan seksama
2. Setup TailwindCSS di project ini
3. Buat folder structure
4. Mulai dengan component terkecil
5. Build incrementally
6. Test responsiveness
7. Commit regularly
8. Deploy dan submit

Ingat: Focus on learning process, bukan hanya hasil akhir. Jangan takut membuat mistake, karena dari sanalah kita belajar. Ask questions ketika stuck, dan collaborate dengan peers untuk diskusi.

"The only way to learn a new programming language is by writing programs in it."
