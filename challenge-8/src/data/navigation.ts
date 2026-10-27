import type { NavItem, SocialLink } from "../types";

/** Menu utama — dipakai di Navbar (desktop & mobile) dan Footer */
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

/** Target semua tombol "Let's Talk" */
export const CONTACT_HREF = "#contact";

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://facebook.com", icon: "/icon/logo-F.png" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com", icon: "/icon/logo-ig.png" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com", icon: "/icon/logo-in.png" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com", icon: "/icon/logo-tiktok.png" },
];
