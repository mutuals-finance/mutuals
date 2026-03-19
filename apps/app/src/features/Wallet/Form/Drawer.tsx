"use client";

import {
  Button,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  type DrawerRootProps,
  DrawerTitle,
  Form,
  VStack,
} from "@mutuals/ui";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, useCallback, useState } from "react";

interface WalletData {
  address: string;
  name: string;
}

interface WalletFormDrawerProps extends Omit<DrawerRootProps, "children"> {
  defaultValues?: WalletData;
  title?: string;
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

  const onSubmit = useCallback((_data: WalletData) => {
    // TODO: implement wallet add with signMessage
  }, []);

  return (
    <DrawerRoot
      onExitComplete={() => router.push("/", { scroll: false })}
      onOpenChange={(e) => setOpen(e.open)}
      open={open}
      placement={{ base: "bottom", lg: "end" }}
      size={{ base: "sm", lg: "sm" }}
      {...props}
    >
      <DrawerBackdrop />
      <DrawerContent roundedTop={{ mdDown: "l3" }}>
        <DrawerCloseTrigger />

        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <Form<WalletData>
          defaultValues={defaultValues}
          flex={"1"}
          onSubmit={(data) => onSubmit(data)}
        >
          <DrawerBody alignItems={"stretch"} as={VStack}>
            {children}
          </DrawerBody>

          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerActionTrigger>

            <Button disabled={true} loading={false} type={"submit"}>
              Submit
            </Button>
          </DrawerFooter>
        </Form>
      </DrawerContent>
    </DrawerRoot>
  );
}
