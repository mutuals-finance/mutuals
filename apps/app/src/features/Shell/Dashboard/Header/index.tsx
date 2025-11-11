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
  Button,
} from "@mutuals/ui";
import { IoEllipsisHorizontal, IoSearch } from "react-icons/io5";

import Chain from "./Chain";
import { VscMenu } from "react-icons/vsc";
import { useDashboardRoot } from "@/features/Shell/Dashboard/Root";
import ShellDashboardHeaderUserMenu from "@/features/Shell/Dashboard/Header/UserMenu";
import CallbackLinkButton from "@/components/CallbackLinkButton";
import { User } from "@privy-io/node";
import ShellDashboardHeaderAlert from "@/features/Shell/Dashboard/Header/Alert";
import { usePrivy } from "@privy-io/react-auth";
import UserAvatar from "@/features/Wallet/Avatar";
import { shortenAddress } from "@/utils";

export type ShellDashboardHeaderProps = { user?: User };

export default function ShellDashboardHeader(_: ShellDashboardHeaderProps) {
  const { mobile, desktop } = useDashboardRoot();
  const { ready, user, authenticated } = usePrivy();

  return (
    <Stack
      gap={"0"}
      position="sticky"
      top={"0"}
      left={"0"}
      w={"full"}
      zIndex={"50"}
    >
      {authenticated && <ShellDashboardHeaderAlert />}

      <Stack
        position={"relative"}
        as="header"
        h={{ base: "16", md: "16" }}
        px={{ base: "6", lg: "12" }}
        py={"6"}
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
              <Menu.Trigger asChild>
                <Button variant={"subtle"} size={"sm"} loading={!ready}>
                  {!authenticated ? (
                    <IoEllipsisHorizontal />
                  ) : (
                    <>
                      <UserAvatar
                        size={"2xs"}
                        address={user?.wallet?.address}
                      />
                      {shortenAddress(user?.wallet?.address)}
                    </>
                  )}
                </Button>
              </Menu.Trigger>
            </ShellDashboardHeaderUserMenu>
            {ready && !authenticated && (
              <CallbackLinkButton
                variant={"solid"}
                size={"sm"}
                loading={!ready}
              >
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
