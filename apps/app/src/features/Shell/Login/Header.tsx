"use client";

import { IconButton, Link, Stack, type StackProps } from "@mutuals/ui";
import { IoArrowBackSharp } from "react-icons/io5";
import { useAuthShell } from "@/features/Shell/Login/Provider";

export default function ShellLoginHeader(props?: StackProps) {
  const { callbackUrl } = useAuthShell();
  return (
    <Stack justifyContent={"space-between"} direction={"row"} {...props}>
      <Link href={callbackUrl} asChild={true}>
        <IconButton variant={"ghost"} size="sm">
          <IoArrowBackSharp />
        </IconButton>
      </Link>
    </Stack>
  );
}
