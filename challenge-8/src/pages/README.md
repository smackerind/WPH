# Pages Folder

Folder ini berisi **page components** - components yang represent complete pages atau views dalam aplikasi.

##  Apa itu Page Component?

Page component adalah component tingkat tinggi yang:
- Mengkomposisi multiple sections dan components
- Represent satu complete page/view
- Handle page-level logic dan state (if needed)
- Import dan arrange sections dalam proper order

##  Structure

Untuk company profile sederhana (single page), kamu mungkin hanya butuh:

```
pages/
└── Home.tsx         # Main homepage yang compose semua sections
```

Jika menggunakan routing (multiple pages):
```
pages/
├── Home.tsx         # Homepage
├── About.tsx        # About page (optional)
├── Services.tsx     # Services page (optional)
└── Contact.tsx      # Contact page (optional)
```

##  Example: Home Page

```tsx
// pages/Home.tsx
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
```

##  Responsibilities

### Page Component Should:
 Compose sections dalam proper order
 Handle page-level layout (navbar, footer, main content)
 Manage page-level state jika diperlukan
 Pass data ke child sections via props (if needed)

### Page Component Should NOT:
 Contain detailed implementation logic
 Have complex styling atau UI elements
 Duplicate code dari sections
 Handle section-specific state

> Keep pages simple - they are just composition layers!

##  Implementation Steps

### Option 1: Single Page Application (Recommended untuk assignment ini)

1. **Create `Home.tsx`**
   ```tsx
   const Home = () => {
     return (
       <div>
         <Navbar />
         <main>
           {/* All sections */}
         </main>
         <Footer />
       </div>
     );
   };
   ```

2. **Import di `App.tsx`**
   ```tsx
   import Home from './pages/Home';

   function App() {
     return <Home />;
   }
   ```

### Option 2: Multiple Pages with Routing (Optional - Extra Challenge!)

1. **Install React Router**
   ```bash
   npm install react-router-dom
   ```

2. **Setup Routing di `App.tsx`**
   ```tsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Home from './pages/Home';
   import About from './pages/About';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           {/* More routes... */}
         </Routes>
       </BrowserRouter>
     );
   }
   ```

3. **Create Individual Pages**
   - Each page imports relevant sections
   - Each page has Navbar and Footer
   - Each page focuses on specific content

##  Tips

### Single Page vs Multi Page?

**Single Page (Recommended):**
-  Simpler to implement
-  Good for portfolio/company profile
-  Smooth scroll navigation
-  Focus on sections, not routing
- Use anchor links for navigation: `href="#about"`

**Multi Page (Optional Challenge):**
- Better for larger websites
- SEO-friendly (each page has unique URL)
- More complex navigation
- Requires routing setup
- Good learning experience!

### Layout Consistency

Jika multiple pages, consider membuat Layout wrapper:

```tsx
// components/layout/Layout.tsx
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
```

Then use in pages:
```tsx
// pages/Home.tsx
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      {/* Other sections */}
    </Layout>
  );
};
```

##  Styling Tips

- Add background colors or patterns di page level
- Handle spacing between sections
- Ensure proper content flow
- Consider scroll behavior

```tsx
<main className="space-y-16 md:space-y-24">
  <HeroSection />
  <AboutSection />
  {/* More sections with consistent spacing */}
</main>
```

##  Common Mistakes

1. **Putting too much logic in pages**
   - Keep pages simple, move logic to sections/components

2. **Duplicating navbar/footer code**
   - Create reusable Layout component or import once

3. **Not organizing sections properly**
   - Follow design Figma untuk proper order

4. **Forgetting responsive spacing**
   - Use Tailwind responsive utilities untuk spacing

##  Recommendation

**Untuk assignment ini:**
- Mulai dengan **single page approach** (Option 1)
- Buat satu file `Home.tsx` yang compose semua sections
- Keep it simple dan focus on component quality
- Routing bisa jadi bonus feature jika ada waktu!

The goal is quality components dan clean code, bukan routing complexity.
