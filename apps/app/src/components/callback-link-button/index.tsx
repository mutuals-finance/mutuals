"use client";
import { Button, type ButtonProps, Link, type LinkProps } from "@mutuals/ui";
import { usePathname } from "next/navigation";

export type CallbackLinkButton = ButtonProps & { linkProps?: LinkProps };

export default function CallbackLinkButton({
  linkProps,
  ...props
}: CallbackLinkButton) {
  const pathname = usePathname();
  const href = `/auth/login?callbackUrl=${encodeURIComponent(pathname)}`;

  return (
    <Link asChild={true} href={href} {...linkProps}>
      <Button {...props} />
    </Link>
  );
}
