"use client";

import { AvatarFallback, type AvatarProps, AvatarRoot } from "@mutuals/ui";
import dynamic from "next/dynamic";

const JazzIcon = dynamic(
  () => import("@ukstv/jazzicon-react").then((mod) => mod.Jazzicon),
  { ssr: false }
);

interface WalletAvatarProps extends AvatarProps {
  address?: string;
}

export default function WalletAvatar({
  address = "",
  size = "xs",
  variant = "subtle",
  shape = "rounded",
  ...props
}: WalletAvatarProps) {
  return (
    <AvatarRoot shape={shape} size={size} variant={variant} {...props}>
      <AvatarFallback
        css={{
          "& svg": {
            width: "var(--avatar-size) !important",
            height: "var(--avatar-size) !important",
          },
        }}
      >
        <JazzIcon address={address} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
