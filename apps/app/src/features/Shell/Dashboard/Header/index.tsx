"use client";

import {
  Form,
  InputGroup,
  Stack,
  MutualsLogo,
  Input,
  AbsoluteCenter,
  IconButton,
  Icon,
  IconButtonProps,
  ButtonGroup,
  Menu,
} from "@mutuals/ui";
import { IoEllipsisHorizontal, IoSearch } from "react-icons/io5";

import Chain from "./Chain";
import User from "./User";
import { VscMenu } from "react-icons/vsc";
import { useDashboardRoot } from "@/features/Shell/Dashboard/Root";
import ShellDashboardHeaderUserMenu from "@/features/Shell/Dashboard/Header/UserMenu";
import { useAccount } from "@getpara/react-sdk";
import CallbackLinkButton from "@/components/CallbackLinkButton";

export default function ShellDashboardHeader() {
  const { mobile, desktop } = useDashboardRoot();
  const account = useAccount();
  console.log("Account in header:", account);
  return (
    <Stack
      as="header"
      position="sticky"
      h={{ base: "4rem", md: "4rem" }}
      px={{ base: "6", lg: "12" }}
      py={"6"}
      zIndex={"50"}
      top={"0"}
      left={"0"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={{ base: "1", lg: "4" }}
      borderBottomWidth="1px"
      borderColor={"border"}
      bg={"bg"}
      direction={"row"}
    >
      <MutualsLogo w={{ base: "28", md: "28" }} href={"/"} />

      <AbsoluteCenter hideBelow={"lg"} w={"full"} maxW={"xs"}>
        <Form w={"full"}>
          <InputGroup startElement={<IoSearch />}>
            <Input size={"md"} placeholder="Search users, pools and tokens" />
          </InputGroup>
        </Form>
      </AbsoluteCenter>

      <SidebarToggle
        aria-label={"Toggle Desktop Sidebar"}
        hideBelow={"lg"}
        onClick={desktop.onToggle}
        mr={"auto"}
      />

      <Stack direction={"row"} gap={4} ml={"auto"}>
        <Chain />
        <ButtonGroup>
          <ShellDashboardHeaderUserMenu>
            {!account.isConnected ? (
              <Menu.Trigger asChild>
                <IconButton
                  variant="ghost"
                  aria-label="Open navigation menu"
                  hideBelow={"lg"}
                >
                  <IoEllipsisHorizontal />
                </IconButton>
              </Menu.Trigger>
            ) : (
              <Menu.Trigger asChild>
                <User />
              </Menu.Trigger>
            )}
          </ShellDashboardHeaderUserMenu>
          {!account.isConnected && (
            <CallbackLinkButton variant={"solid"} size={"sm"}>
              Sign in
            </CallbackLinkButton>
          )}
        </ButtonGroup>
      </Stack>

      <SidebarToggle
        aria-label={"Toggle Mobile Sidebar"}
        hideFrom={"lg"}
        onClick={mobile.onToggle}
      />
    </Stack>
  );
}

function SidebarToggle(props: IconButtonProps) {
  return (
    <IconButton
      size={"md"}
      aria-label={"Toggle Sidebar"}
      variant={"ghost"}
      {...props}
    >
      <Icon size={"lg"}>
        <VscMenu />
      </Icon>
    </IconButton>
  );
}
