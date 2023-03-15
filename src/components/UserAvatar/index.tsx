import React, { HTMLAttributes } from "react";
import { Jazzicon } from "@ukstv/jazzicon-react";

interface UserAvatarProps extends HTMLAttributes<HTMLSpanElement> {
  address: string;
}

export default function UserAvatar({
  className,
  address,
  ...props
}: UserAvatarProps) {
  return (
    <span className={`flex w-6 h-6 rounded-full ${className}`} {...props}>
      <Jazzicon
        className={"flex flex-1 items-center justify-center"}
        address={address}
      />
    </span>
  );
}
