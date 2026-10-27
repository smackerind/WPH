/**
 * Button Component - EXAMPLE FILE
 *
 * File ini adalah CONTOH implementasi Button component.
 * Kamu bisa menggunakan ini sebagai reference atau
 * membuat implementasi sendiri dari scratch.
 *
 * Untuk menggunakan:
 * 1. Rename file ini menjadi Button.tsx (hapus .example)
 * 2. Adjust styling sesuai design Figma
 * 3. Add more variants jika diperlukan
 */

import React from 'react';

// Type definition untuk button variants
type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

// Props interface dengan TypeScript
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Reusable Button Component
 *
 * @param variant - Style variant: 'primary' | 'secondary' | 'outline'
 * @param size - Button size: 'sm' | 'md' | 'lg'
 * @param children - Button content
 * @param onClick - Click handler
 * @param className - Additional CSS classes
 * @param disabled - Disabled state
 * @param type - Button type attribute
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  // Base styles yang selalu applied
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant styles - SESUAIKAN dengan design Figma!
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  // Combine all styles
  const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;

/**
 * USAGE EXAMPLES:
 *
 * // Primary button (default)
 * <Button onClick={handleClick}>Click Me</Button>
 *
 * // Secondary variant
 * <Button variant="secondary">Secondary</Button>
 *
 * // Outline variant with large size
 * <Button variant="outline" size="lg">Large Outline</Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 *
 * // With custom classes
 * <Button className="w-full">Full Width Button</Button>
 *
 * // Submit button for forms
 * <Button type="submit" variant="primary">Submit</Button>
 */

/**
 * TODO untuk kamu:
 * 1. Lihat button styles di Figma design
 * 2. Update colors sesuai design system (primary color, etc)
 * 3. Adjust padding, border-radius, font-size
 * 4. Add more variants jika diperlukan (e.g., 'ghost', 'link')
 * 5. Consider adding icon support:
 *    - leftIcon prop
 *    - rightIcon prop
 * 6. Add loading state jika diperlukan
 * 7. Test semua variants dan sizes
 */
