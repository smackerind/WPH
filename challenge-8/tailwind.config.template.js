/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ==========================================
      // CUSTOM COLORS
      // ==========================================
      // TODO: Extract colors dari Figma design
      // Lihat color palette di Figma dan add here
      colors: {
        // Example:
        // primary: {
        //   50: '#...',
        //   100: '#...',
        //   // ... more shades
        //   900: '#...',
        // },
        // secondary: '#...',
        // accent: '#...',
        // Add your custom colors here based on Figma design
      },

      // ==========================================
      // TYPOGRAPHY
      // ==========================================
      fontFamily: {
        // TODO: Add custom fonts dari Figma
        // Example:
        // sans: ['Inter', 'sans-serif'],
        // heading: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        // Custom font sizes jika perlu
        // Biasanya Tailwind defaults sudah cukup
      },

      // ==========================================
      // SPACING
      // ==========================================
      spacing: {
        // Custom spacing values jika diperlukan
        // Example:
        // '128': '32rem',
        // '144': '36rem',
      },

      // ==========================================
      // BREAKPOINTS (optional)
      // ==========================================
      screens: {
        // Default Tailwind breakpoints:
        // sm: '640px',
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1536px',

        // Add custom breakpoints jika perlu:
        // 'tablet': '768px',
        // 'desktop': '1024px',
      },

      // ==========================================
      // BORDER RADIUS
      // ==========================================
      borderRadius: {
        // Custom border radius values
        // Example based on Figma design system
      },

      // ==========================================
      // SHADOWS
      // ==========================================
      boxShadow: {
        // Custom shadows dari Figma
        // Example:
        // 'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },

      // ==========================================
      // CONTAINER
      // ==========================================
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    // Add Tailwind plugins jika diperlukan
    // Example:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}

/**
 * INSTRUCTIONS:
 *
 * 1. Rename file ini dari `tailwind.config.template.js` menjadi `tailwind.config.js`
 *    (overwrite yang existing jika ada)
 *
 * 2. Analyze Figma design untuk extract:
 *    - Color palette (primary, secondary, accent, etc)
 *    - Typography (font families, sizes)
 *    - Spacing patterns
 *    - Border radius values
 *    - Shadows
 *
 * 3. Update sections di atas dengan values dari Figma
 *
 * 4. Install custom fonts jika perlu:
 *    - Add Google Fonts di index.html
 *    - Or install via npm: `npm install @fontsource/your-font`
 *
 * 5. Test configuration:
 *    - Restart dev server: `npm run dev`
 *    - Try using custom values di components
 *    - Example: `bg-primary-500`, `font-heading`, etc
 *
 * TIPS:
 * - Gunakan consistent naming untuk colors (primary, secondary, etc)
 * - Consider dark mode jika design mendukung
 * - Keep it simple - extend only what you need
 * - Tailwind defaults sudah sangat comprehensive
 */
