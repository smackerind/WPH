import Logo from "@/components/layout/Logo";

/** Footer: logo di kiri, copyright di kanan saat desktop */
const Footer = () => (
  <footer className="mt-10 border-t border-neutral-800">
    <div className="container-page flex flex-col gap-2 py-6 lg:flex-row lg:items-center lg:justify-between lg:py-8">
      <Logo />
      <p className="text-xs text-neutral-600 lg:text-md">
        Copyright ©2025 Movie Explorer
      </p>
    </div>
  </footer>
);

export default Footer;
