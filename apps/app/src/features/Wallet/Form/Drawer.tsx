"use client";

import {
  Button,
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerRootProps,
  VStack,
} from "@mutuals/ui";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useCallback } from "react";
import Form from "@/components/Form";
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
  ...props
}: PropsWithChildren<WalletFormDrawerProps>) {
  const router = useRouter();
  const { signMessage } = useSignMessage();

  const onSubmit = useCallback(
    async (data: WalletData) => {
      const chainAddress = {
        address: data.address,
        chain: Chain.Ethereum,
      };
      console.log("onSubmit", { chainAddress, data });

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

        console.log("res", { res });
      } catch (error) {
        console.log("error", error);
      }
    },
    [signMessage, addWallet()],
  );

  return (
    <DrawerRoot
      placement="end"
      size={"sm"}
      onExitComplete={() => router.push(`/`, { scroll: false })}
      {...props}
    >
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerCloseTrigger />

        <DrawerHeader flexShrink={"0"}>{title}</DrawerHeader>
        <Form<WalletData>
          flex={"1"}
          onSubmit={(data) => onSubmit(data)}
          defaultValues={defaultValues}
        >
          <DrawerBody as={VStack} alignItems={"stretch"}>
            {children}
          </DrawerBody>

          <DrawerFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => props.onOpenChange?.({ open: false })}
            >
              Cancel
            </Button>
            <Button loading={false} type={"submit"}>
              Submit
            </Button>
          </DrawerFooter>
        </Form>
      </DrawerContent>
    </DrawerRoot>
  );
}
