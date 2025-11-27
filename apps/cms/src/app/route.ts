import { type NextRequest } from "next/server";
import { permanentRedirect } from "next/navigation";

export async function GET(_: NextRequest) {
  permanentRedirect("/admin");
}
