"use client";

import WalletSelectionButton from "@/features/Wallet/SelectionButton";
import { Button, Stack, StackProps } from "@mutuals/ui";
import {
  useLoginWithPasskey,
  useSignupWithPasskey,
} from "@privy-io/react-auth";
import { MdArrowOutward } from "react-icons/md";
import { IoFingerPrintSharp } from "react-icons/io5";

type AuthLoginPasskeyProps = StackProps;

export default function AuthLoginPasskey({ ...props }: AuthLoginPasskeyProps) {
  const { signupWithPasskey } = useSignupWithPasskey();
  const { loginWithPasskey } = useLoginWithPasskey();

  return (
    <Stack alignItems={"center"} {...props}>
      <WalletSelectionButton
        onClick={() => loginWithPasskey()}
        name={"Sign in with passkey"}
        iconAvatarProps={{
          unstyled: true,
        }}
        icon={{ size: "md", children: <IoFingerPrintSharp /> }}
      />

      <Button variant={"ghost"} size="sm" onClick={() => signupWithPasskey()}>
        Sign up with passkey <MdArrowOutward />
      </Button>
    </Stack>
  );
}
