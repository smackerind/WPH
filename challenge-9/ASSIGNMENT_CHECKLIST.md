# Assignment Checklist

Gunakan checklist ini untuk memastikan semua requirement sudah terpenuhi.

## Setup & Configuration

- [ ] Install semua dependencies
- [ ] Setup environment variables (.env)
- [ ] TMDB API key berfungsi
- [ ] Development server berjalan tanpa error
- [ ] Path aliases (`@/...`) berfungsi

## Tech Stack Implementation

### React Query

- [ ] QueryClient configured dengan proper options
- [ ] useQuery untuk data fetching
- [ ] Loading states handled
- [ ] Error states handled
- [ ] Data caching berfungsi dengan baik
- [ ] React Query Devtools digunakan untuk debugging

### Zustand

- [ ] Store created untuk favorites/watchlist
- [ ] Actions implemented (add, remove, toggle)
- [ ] State persist ke localStorage
- [ ] Store properly typed dengan TypeScript

### React Router

- [ ] Router setup di App.tsx
- [ ] Routes configured (Home, Detail, dll)
- [ ] Navigation berfungsi
- [ ] 404/Not Found page (optional)
- [ ] URL params untuk detail page

### Radix UI & shadcn/ui

- [ ] components.json configured
- [ ] Install komponen yang dibutuhkan
- [ ] Komponen properly customized
- [ ] Accessible (keyboard navigation works)

### Zod & React Hook Form

- [ ] Form validation schema dengan Zod
- [ ] useForm hook implementation
- [ ] Error messages displayed
- [ ] Form submission handled

### Framer Motion

- [ ] Page transitions
- [ ] Component animations (fade in, slide, etc.)
- [ ] Hover effects
- [ ] Loading animations
- [ ] Tidak over-animate (subtle & meaningful)

## Features

### Home Page

- [ ] Display popular movies
- [ ] Display now playing movies (or other category)
- [ ] Search bar functional
- [ ] Search results displayed
- [ ] Filter/sorting options (optional)
- [ ] Responsive layout

### Movie Detail Page

- [ ] Movie poster displayed
- [ ] Movie title & overview
- [ ] Rating, release date, runtime
- [ ] Genres displayed
- [ ] Cast & crew information
- [ ] Similar movies recommendations
- [ ] Add to favorites/watchlist button
- [ ] Back to home navigation
- [ ] Responsive layout

### Favorites/Watchlist

- [ ] Add movie to favorites
- [ ] Remove movie from favorites
- [ ] Favorites persist after page refresh
- [ ] Visual indicator (heart icon, etc.)
- [ ] Count badge (optional)

## Code Quality

### TypeScript

- [ ] Proper interfaces/types defined
- [ ] No `any` types (except when absolutely necessary)
- [ ] Types exported and reused
- [ ] Type-safe API responses

### Code Organization

- [ ] Components modular dan reusable
- [ ] Proper folder structure
- [ ] Separation of concerns
- [ ] No duplicate code
- [ ] Meaningful variable/function names

### Best Practices

- [ ] No console.logs in production code
- [ ] Error boundaries (optional but good)
- [ ] Loading states consistent
- [ ] Environment variables used properly
- [ ] Comments untuk code yang kompleks

## UI/UX

### Design Implementation

- [ ] Mengikuti design Figma
- [ ] Color scheme consistent
- [ ] Typography consistent
- [ ] Spacing & layout sesuai
- [ ] Images loaded properly

### Responsive Design

- [ ] Mobile (< 768px)
- [ ] Desktop (>= 768px)
- [ ] No horizontal scroll
- [ ] Touch-friendly pada mobile

### User Experience

- [ ] Navigation intuitif
- [ ] Loading feedback jelas
- [ ] Error messages helpful
- [ ] Smooth animations
- [ ] No janky interactions

## Testing & Quality Assurance

- [ ] Test di berbagai ukuran layar
- [ ] Test di browser berbeda (Chrome, Firefox, Safari)
- [ ] Test semua user flows
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Lighthouse score reasonable (optional)

## Git & Documentation

- [ ] Meaningful commit messages
- [ ] Commits organized logically
- [ ] README updated (jika ada perubahan setup)
- [ ] Remove unnecessary comments
- [ ] Code formatted consistently

## Bonus Points

- [ ] Deployed ke Vercel/Netlify
- [ ] Dark mode implementation
- [ ] Skeleton loading states
- [ ] Infinite scroll / pagination
- [ ] Advanced animations
- [ ] Unit tests (optional)
- [ ] E2E tests (optional)

## Final Check

- [ ] Run `npm run build` - build berhasil tanpa error
- [ ] Run `npm run lint` - no linting errors
- [ ] Test deployed version (jika sudah deploy)
- [ ] Review semua code sekali lagi
- [ ] Ensure no sensitive data in repo

---

**Score yourself honestly and identify areas for improvement!**

Good luck!
