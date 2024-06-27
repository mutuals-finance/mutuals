import { PropsWithChildren } from "react";
import ShellLogin from "@/features/Shell/Login";

export default function AuthLoginLayout({ children }: PropsWithChildren) {
  return <ShellLogin>{children}</ShellLogin>;
}
