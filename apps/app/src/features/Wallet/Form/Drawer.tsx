"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  useDisclosure,
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

interface WalletFormDrawerProps
  extends Omit<
    DrawerProps,
    "isOpen" | "onClose" | "onCloseComplete" | "children"
  > {
  title?: string;
  defaultValues?: WalletData;
}
export function WalletFormDrawer({
  title,
  children,
  defaultValues,
  ...props
}: PropsWithChildren<WalletFormDrawerProps>) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
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
    <Drawer
      placement="right"
      size={"sm"}
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => router.push(`/`, { scroll: false })}
      {...props}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" flexShrink={"0"}>
          {title}
          <DrawerCloseButton />
        </DrawerHeader>
        <Form<WalletData>
          flex={"1"}
          onSubmit={(data) => onSubmit(data)}
          defaultValues={defaultValues}
        >
          <DrawerBody as={VStack} gap={"6"} py={"6"} alignItems={"stretch"}>
            {children}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button
              type="button"
              variant="outline"
              mr={3}
              onClick={() => onClose?.()}
            >
              Cancel
            </Button>
            <Button isLoading={false} type={"submit"} variant="blackWhite">
              Submit
            </Button>
          </DrawerFooter>
        </Form>
      </DrawerContent>
    </Drawer>
  );
}
