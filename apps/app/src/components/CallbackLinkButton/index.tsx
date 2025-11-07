"use client";
import { usePathname } from "next/navigation";
import { Button, Link, ButtonProps, LinkProps } from "@mutuals/ui";
import React from "react";

export type CallbackLinkButton = ButtonProps & { linkProps?: LinkProps };

export default function CallbackLinkButton({
  linkProps,
  ...props
}: CallbackLinkButton) {
  const pathname = usePathname();
  const href = `/auth/login?callbackUrl=${encodeURIComponent(pathname)}`;

  return (
    <Link href={href} asChild={true} {...linkProps}>
      <Button {...props} />
    </Link>
  );
}
