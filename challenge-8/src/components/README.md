# Components Folder

Folder ini berisi semua React components yang akan kamu buat.

##  Sub-folders

### `layout/`
Components yang digunakan untuk layout utama website:
- **Navbar.tsx** - Navigation bar di bagian atas
- **Footer.tsx** - Footer di bagian bawah
- **Layout.tsx** (optional) - Wrapper component untuk layout

**Contoh Structure:**
```tsx
// layout/Navbar.tsx
interface NavbarProps {
  // Define your props here
}

const Navbar = ({ /* props */ }: NavbarProps) => {
  return (
    <nav>
      {/* Your navbar implementation */}
    </nav>
  );
};

export default Navbar;
```

### `sections/`
Components untuk setiap section di homepage:
- **HeroSection.tsx** - Hero/landing section
- **AboutSection.tsx** - About company section
- **ServicesSection.tsx** - Services/products section
- **TestimonialsSection.tsx** - Testimonials section
- **ContactSection.tsx** - Contact section
- Dan lain-lain sesuai design Figma

**Tips:**
- Setiap section adalah komponen independen
- Bisa menerima data via props
- Reusable dan modular

### `ui/`
Reusable UI components yang digunakan di berbagai tempat:
- **Button.tsx** - Reusable button component
- **Card.tsx** - Card component untuk display content
- **Input.tsx** (optional) - Form input component
- **Icon.tsx** (optional) - Icon wrapper component

**Contoh Button Component:**
```tsx
// ui/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ variant = 'primary', children, onClick, className }: ButtonProps) => {
  // Implement different styles based on variant
  return (
    <button
      onClick={onClick}
      className={/* Tailwind classes based on variant */}
    >
      {children}
    </button>
  );
};

export default Button;
```

##  Best Practices

1. **One Component Per File** - Satu file hanya berisi satu component
2. **PascalCase Naming** - Nama file dan component menggunakan PascalCase
3. **TypeScript Props** - Selalu define interface untuk props
4. **Export Default** - Use default export untuk components
5. **Modular & Reusable** - Buat components yang bisa digunakan ulang

##  Component Template

Gunakan template ini sebagai starting point:

```tsx
import React from 'react';

interface [ComponentName]Props {
  // Define your props here
  // Example:
  // title: string;
  // description?: string;
}

const [ComponentName] = ({ /* destructure props */ }: [ComponentName]Props) => {
  return (
    <div className="/* Tailwind classes */">
      {/* Component JSX */}
    </div>
  );
};

export default [ComponentName];
```

##  Getting Started

1. Mulai dengan membuat components di folder `ui/` (Button, Card)
2. Kemudian buat components di folder `layout/` (Navbar, Footer)
3. Terakhir buat components di folder `sections/` (Hero, About, dll)

Lihat design Figma untuk memahami components apa saja yang perlu dibuat!
