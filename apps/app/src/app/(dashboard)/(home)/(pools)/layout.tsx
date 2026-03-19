"use client";

import {
  Box,
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerContext,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  RouterTabs,
} from "@mutuals/ui";
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";

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
      initialFocusEl={() => null}
      onExitComplete={() => router.push("/", { scroll: false })}
      placement={{ base: "bottom", md: "end" }}
      size={{ base: "md", md: "md" }}
    >
      <DrawerBackdrop />
      <DrawerContent roundedTop={{ mdDown: "l3" }}>
        <DrawerCloseTrigger />
        <DrawerContext>
          {(store) => (
            <>
              <DrawerHeader>
                <DrawerTitle>Manage Funds</DrawerTitle>
              </DrawerHeader>
              <DrawerBody flex={"1"} p={"0"}>
                <RouterTabs fitted={true} tabs={tabs}>
                  <Box p={"6"}>{children}</Box>
                </RouterTabs>
              </DrawerBody>
              <DrawerFooter>
                <Button onClick={() => store.setOpen(false)} variant="outline">
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
