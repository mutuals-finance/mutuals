"use client";

import {
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerRootProps,
  DrawerActionTrigger,
  VStack,
  DrawerTitle,
  Form,
} from "@mutuals/ui";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useCallback, useState } from "react";
import { Chain } from "@mutuals/graphql-client-nextjs";
import { useSignMessage } from "@/features/Wallet/SignProvider";
import { addWallet } from "@mutuals/graphql-client-nextjs/server";

type WalletData = {
  name: string;
  address: string;
};

interface WalletFormDrawerProps extends Omit<DrawerRootProps, "children"> {
  title?: string;
  defaultValues?: WalletData;
}
export function WalletFormDrawer({
  title,
  children,
  defaultValues,
  open: initialOpen = true,
  ...props
}: PropsWithChildren<WalletFormDrawerProps>) {
  const [open, setOpen] = useState(initialOpen);

  const router = useRouter();
  const { signMessage } = useSignMessage();

  const onSubmit = useCallback(
    async (data: WalletData) => {
      const chainAddress = {
        address: data.address,
        chain: Chain.Ethereum,
      };

      try {
        const { signature, message, nonce } = await signMessage({
          modalProps: {
            prompt:
              "Please sign the message in your wallet in order to add it to your profile.",
          },
        });

        const res = await addWallet({
          variables: {
            chainAddress,
            authMechanism: {
              eoa: {
                chainPubKey: {
                  chain: chainAddress.chain,
                  pubKey: chainAddress.address,
                },
                signature,
                message,
                nonce,
              },
            },
          },
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    [signMessage],
  );

  return (
    <DrawerRoot
      placement="end"
      size={"sm"}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      onExitComplete={() => router.push(`/`, { scroll: false })}
      {...props}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger />

        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <Form<WalletData>
          flex={"1"}
          onSubmit={(data) => onSubmit(data)}
          defaultValues={defaultValues}
        >
          <DrawerBody as={VStack} alignItems={"stretch"}>
            {children}
          </DrawerBody>

          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerActionTrigger>

            <Button loading={false} type={"submit"}>
              Submit
            </Button>
          </DrawerFooter>
        </Form>
      </DrawerContent>
    </DrawerRoot>
  );
}
