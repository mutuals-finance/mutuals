"use client";

import { IconButton, Link, Stack, type StackProps } from "@mutuals/ui";
import { IoArrowBackSharp } from "react-icons/io5";
import { useAuthShell } from "@/features/shell/login/provider";

export default function ShellLoginHeader(props?: StackProps) {
  const { callbackUrl } = useAuthShell();
  return (
    <Stack direction={"row"} justifyContent={"space-between"} {...props}>
      <Link asChild={true} href={callbackUrl ?? "/"}>
        <IconButton size="sm" variant={"ghost"}>
          <IoArrowBackSharp />
        </IconButton>
      </Link>
    </Stack>
  );
}
