import { NextResponse, NextRequest } from 'next/server';

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
    '/((?!api|auth/sign-in|_next/static|_next/image|favicon.ico|sw.js).*)',
  ],
};

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.indexOf('icon') > -1 ||
    request.nextUrl.pathname.indexOf('chrome') > -1
  ) {
    return NextResponse.next();
  }

  const isAuthenticated = request.cookies.get('SPLITFI_JWT')?.value;

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    request.cookies.set('redirectURL', request.nextUrl.href);
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  // If the user is authenticated, continue as normal
  return NextResponse.next();
}
