import type { PropsWithChildren } from "react";
import ShellAuth from "@/features/shell/login";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <ShellAuth>{children}</ShellAuth>;
}
