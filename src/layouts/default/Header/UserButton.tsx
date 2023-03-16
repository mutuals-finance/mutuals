import React, { useEffect, useState } from "react";
import { IoChevronDown, IoPersonCircle } from "react-icons/io5";
import { ButtonOutline } from "@/components/Button";
import { shortenAddress } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";

type AppHeaderUserButtonProps = {
  isConnected: boolean;
  isConnecting: boolean;
  address?: `0x${string}`;
};

export default function UserButton({
  isConnected,
  isConnecting,
  address = "0x",
}: AppHeaderUserButtonProps) {
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    setDisplayName(isConnected ? shortenAddress(address) : "Login");
  }, [address]);

  return (
    <ButtonOutline
      icon={
        <span className="flex items-center justify-center rounded-full w-6 h-6">
          {isConnected ? (
            <UserAvatar address={address} />
          ) : (
            <IoPersonCircle className={`flex flex-1`} />
          )}
        </span>
      }
      iconAfter={
        <IoChevronDown className="ui-open:rotate-180 ui-open:transform ease-out-expo duration-100" />
      }
    >
      {isConnecting ? "Connecting..." : displayName}
    </ButtonOutline>
  );
}
