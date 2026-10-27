/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type ButtonVariant = 'primary' | 'light';
export type ButtonSize = 'sm' | 'md';



// export interface ButtonProps {
//   variant?: ButtonVariant;
//   children: React.ReactNode;
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }
// ==========================================
// Section Data Types
// =========================================
export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  message: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}


//==================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
// export interface ServiceItem {
//   id: number;
//   title: string;
//   description: string;
//   icon?: string;
//   image?: string;
// }

/**
 * Example: Team Member
 */
// export interface TeamMember {
//   id: number;
//   name: string;
//   position: string;
//   bio?: string;
//   image: string;
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     github?: string;
//   };
// }

/**
 * Example: Testimonial
 */
// export interface Testimonial {
//   id: number;
//   name: string;
//   position: string;
//   company: string;
//   message: string;
//   avatar?: string;
//   rating?: number;
// }

// ==========================================
// Navigation Types
// ==========================================
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
} 

export interface SocialLink {
    id: string;
    label: string;
  href: string;
  icon: string;
}

/**
 * Navigation menu item
 */
// export interface NavItem {
//   label: string;
//   href: string;
//   external?: boolean;
// }

// ==========================================
// Form Types (if needed)
// ==========================================

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}



/**
 * Contact form data
 */
// export interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
