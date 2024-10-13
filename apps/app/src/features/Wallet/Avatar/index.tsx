"use client";

import { Box, type AvatarProps } from "@mutuals/ui";
import React from "react";
import dynamic from "next/dynamic";

const JazzIcon = dynamic(
  () => import("@ukstv/jazzicon-react").then((mod) => mod.Jazzicon),
  { ssr: false },
);

interface WalletAvatarProps extends AvatarProps {
  address?: string;
}

export default function WalletAvatar({
  address = "",
  size = "xs",
  ...props
}: WalletAvatarProps) {
  return (
    <Box />
    /*
    <Avatar
      as={JazzIcon}
      address={address}
      name={address!}
      size={size!}
      {...props}
    />
*/
  );
}
