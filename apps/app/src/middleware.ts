import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Login middleware called", request.nextUrl.pathname);

  if (request.nextUrl.pathname === "/auth/login") {
    const searchParams = request.nextUrl.search;
    console.log("Login middleware called with", { searchParams });

    // Decode the URL to check for actual ? characters
    const decodedSearch = decodeURIComponent(searchParams);
    console.log("Decoded search params:", decodedSearch);

    // Check for multiple ? characters in the decoded URL
    const questionMarkCount = (decodedSearch.match(/\?/g) || []).length;

    if (questionMarkCount > 1) {
      const url = request.nextUrl.clone();

      // Replace all ? after the first one with &
      let fixed = decodedSearch;
      let firstQuestionMark = true;
      fixed = fixed.replace(/\?/g, () => {
        if (firstQuestionMark) {
          firstQuestionMark = false;
          return "?";
        }
        return "&";
      });

      url.search = fixed;

      console.log("Fixed malformed Openfort URL:", {
        original: request.nextUrl.href,
        decoded: decodedSearch,
        fixed: url.href,
      });

      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/auth/login",
};
