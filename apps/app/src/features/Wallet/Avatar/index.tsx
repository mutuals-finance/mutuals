"use client";

import { Avatar, type AvatarProps } from "@splitfi/ui";
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
    <Avatar
      as={JazzIcon}
      address={address}
      name={address!}
      size={size!}
      {...props}
    />
  );
}
