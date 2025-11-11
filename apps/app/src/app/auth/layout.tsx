import React, { PropsWithChildren } from "react";
import ShellAuth from "@/features/Shell/Login";

export default function AuthLayout({ children }: PropsWithChildren) {
  return <ShellAuth>{children}</ShellAuth>;
}
