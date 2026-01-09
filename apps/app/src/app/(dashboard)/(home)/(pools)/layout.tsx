"use client";

import { PropsWithChildren } from "react";
import {
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  Box,
  DrawerContext,
  DrawerHeader,
  DrawerTitle,
  RouterTabs,
} from "@mutuals/ui";
import { useRouter } from "next/navigation";

const tabs = [
  {
    title: "Withdraw",
    value: "withdraw",
    href: "/withdraw",
  },
  {
    title: "Deposit",
    value: "deposit",
    href: "/deposit",
  },
];

export default function DashboardHomePoolsLayout({
  children,
}: PropsWithChildren) {
  const router = useRouter();

  return (
    <DrawerRoot
      defaultOpen={true}
      placement={{ base: "bottom", md: "end" }}
      size={{ base: "md", md: "md" }}
      onExitComplete={() => router.push(`/`, { scroll: false })}
      initialFocusEl={() => null}
    >
      <DrawerBackdrop />
      <DrawerContent roundedTop={"xl"}>
        <DrawerCloseTrigger />
        <DrawerContext>
          {(store) => (
            <>
              <DrawerHeader>
                <DrawerTitle>Manage Funds</DrawerTitle>
              </DrawerHeader>
              <DrawerBody p={"0"} flex={"1"}>
                <RouterTabs fitted={true} tabs={tabs}>
                  <Box p={"6"}>{children}</Box>
                </RouterTabs>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" onClick={() => store.setOpen(false)}>
                  Cancel
                </Button>
                <Button disabled={true}>Submit</Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContext>
      </DrawerContent>
    </DrawerRoot>
  );
}
