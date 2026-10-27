# Data Folder

Folder ini berisi **mock data** atau **static data** yang digunakan dalam aplikasi.

##  Kenapa Perlu Mock Data?

Dalam real-world applications, data biasanya datang dari API/backend. Tapi untuk learning purposes, kita menggunakan static/mock data yang didefinisikan di frontend.

**Benefits:**
- Memisahkan data dari presentation logic
- Mudah untuk update content tanpa mengubah component code
- Simulate real data structure
- Easy to maintain

##  File Structure

Buat file terpisah untuk setiap jenis data:

```
data/
├── services.ts       # Data untuk services/products section
├── team.ts          # Data untuk team members (jika ada)
├── testimonials.ts  # Data untuk testimonials (jika ada)
├── navigation.ts    # Data untuk navigation menu
└── company.ts       # Data general tentang company (about, contact info, dll)
```

##  Example File Structure

### `data/navigation.ts`
```typescript
import { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];
```

### `data/services.ts`
```typescript
import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Service Title',
    description: 'Service description here...',
    icon: '/icons/service-icon.svg',
  },
  // Add more services...
];
```

### `data/company.ts`
```typescript
export const companyInfo = {
  name: 'Company Name',
  tagline: 'Your company tagline',
  description: 'Brief description about the company...',
  email: 'contact@company.com',
  phone: '+62 xxx-xxxx-xxxx',
  address: 'Company address here',
  social: {
    facebook: 'https://facebook.com/...',
    instagram: 'https://instagram.com/...',
    linkedin: 'https://linkedin.com/...',
  },
};
```

##  Cara Menggunakan Data

### Import di Component
```tsx
// In your component file
import { services } from '../data/services';
import { companyInfo } from '../data/company';

const ServicesSection = () => {
  return (
    <section>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </section>
  );
};
```

### Pass as Props
```tsx
// In parent component
import { testimonials } from '../data/testimonials';

<TestimonialsSection testimonials={testimonials} />
```

##  Tips

1. **Extract dari Figma Design**
   - Lihat content di design Figma
   - Copy text, descriptions, dll ke data files
   - Placeholder untuk images (bisa ganti nanti)

2. **Consistent Data Structure**
   - Gunakan TypeScript interfaces (dari folder `types/`)
   - Consistent property naming
   - Include IDs untuk list items

3. **Realistic Data**
   - Gunakan realistic names, descriptions
   - Proper formatting (capital letters, punctuation)
   - Consider content length untuk UI

4. **Don't Hardcode in Components**
   -  Bad: Menulis semua content langsung di JSX
   -  Good: Import data dan map/render

5. **Easy to Update**
   - Mentor atau client bisa update content dengan mudah
   - Tidak perlu touch component code
   - Just edit data files

##  Getting Started

1. Analyze design Figma - identifikasi data apa saja yang dibutuhkan
2. Create type definitions di `src/types/index.ts`
3. Create data files sesuai dengan sections yang ada
4. Import dan gunakan di components

##  Note

Ini adalah **static data** untuk learning purposes. Di production app:
- Data biasanya fetched dari API
- Use state management (Context, Redux, dll)
- Implement data fetching (fetch, axios, dll)
- Handle loading & error states

Tapi untuk assignment ini, static data sudah cukup! Focus on component structure dan styling dulu.
