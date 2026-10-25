import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/constants";

/**
 * Penjaga halaman di sisi server.
 *
 * Di Next 16 konvensi `middleware.ts` berganti nama menjadi `proxy.ts`
 * dengan fungsi bernama `proxy`; perannya tetap sama.
 *
 * Karena token disimpan di cookie, Next bisa memeriksanya sebelum halaman
 * dirender. Timeline ikut dijaga: GET /api/feed menuntut token, jadi
 * pengunjung yang belum login tidak akan pernah melihat halaman kosong —
 * ia langsung diarahkan ke /login.
 *
 * Halaman yang memang publik menurut API (detail post, profil orang lain,
 * pencarian) sengaja tidak dijaga, dan di sana navbar menampilkan tombol
 * Login/Register sesuai frame "Before login".
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  const isProtected =
    pathname === "/" ||
    pathname.startsWith("/add-post") ||
    pathname.startsWith("/me");

  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    // Supaya setelah login user kembali ke halaman yang tadi dituju
    if (pathname !== "/") loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Sudah login tidak perlu lagi melihat halaman login/register
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/add-post/:path*", "/me/:path*", "/login", "/register"],
};
