import { NextResponse } from "next/server";

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - sw.js (service worker)
   */
  matcher: [
    "/((?!api|auth/sign-in|_next/static|_next/image|favicon.ico|sw.js).*)",
  ],
};

export async function middleware() {
  return NextResponse.next();
}
