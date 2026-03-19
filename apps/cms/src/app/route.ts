import { permanentRedirect } from "next/navigation";
import type { NextRequest } from "next/server";

export function GET(_: NextRequest) {
  permanentRedirect("/admin");
}
