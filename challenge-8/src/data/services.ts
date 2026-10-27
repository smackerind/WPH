import type { ServiceItem } from "../types";

export const services: ServiceItem[] = [
  { id: 1, title: "Web Development", description: "Build fast, scalable, and SEO-friendly websites.", icon: "/icon/Iconwebdev.png" },
  { id: 2, title: "Mobile App Development", description: "Native & cross-platform apps tailored to user needs.", icon: "/icon/Iconmobile.png" },
  { id: 3, title: "UI/UX Design", description: "Delight users with intuitive and beautiful interfaces", icon: "/icon/Iconuiux.png" },
  { id: 4, title: "Cloud Solutions", description: "Secure and flexible cloud infrastructure for your growth.", icon: "/icon/Iconcloud.png" },
  { id: 5, title: "Software Development", description: "Custom solutions built around your business logic.", icon: "/icon/Iconsoftware.png" },
  { id: 6, title: "IT Infrastructure", description: "Scale your backend with reliable tech foundations.", icon: "/icon/Iconit.png" },
  { id: 7, title: "Cybersecurity Services", description: "Stay protected with enterprise-grade security.", icon: "/icon/Iconcybersecurity.png" },
  { id: 8, title: "QA Solutions", description: "Ensure performance with rigorous testing frameworks.", icon: "/icon/Iconqa.png" },
  { id: 9, title: "IT Consulting & Support", description: "Make smarter tech decisions with expert guidance.", icon: "/icon/Iconconsultant.png" },
];

/** Pilihan checkbox di form contact */
export const serviceOptions: string[] = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Software Development",
  "Other",
];
