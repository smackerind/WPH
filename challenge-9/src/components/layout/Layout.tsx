import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Toaster from "@/components/ui/toaster";

/**
 * Kerangka halaman: navbar di atas, isi halaman di tengah, footer di bawah.
  */
const Layout = () => (
  <div className="flex min-h-screen flex-col bg-black">
    <Navbar />
    <main className="flex-1 pt-16 lg:pt-[90px]">
      <Outlet />
    </main>
    <Footer />
    <Toaster />
  </div>
);

export default Layout;
