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
        pl={{ base: "6", lg: "4" }}
        pr={{ base: "6", lg: "12" }}
        py={"6"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={{ base: "1", lg: "4" }}
        bgColor={"bg/50"}
        css={{
          backdropFilter: "blur(12px)",
        }}
        direction={"row"}
      >
        <Stack
          direction={"row"}
          mr={"auto"}
          w={{ lg: "52" }}
          justify={"space-between"}
        >
          <MutualsLogo w={"28"} href={"/"} />
          <SidebarToggle
            aria-label={"Toggle Desktop Sidebar"}
            onClick={desktop.onToggle}
            hideBelow={"lg"}
          />
        </Stack>

        <AbsoluteCenter hideBelow={"lg"} w={"full"} maxW={"xs"}>
          <Form w={"full"}>
            <InputGroup startElement={<IoSearch />}>
              <Input size={"md"} placeholder="Search users, pools and tokens" />
            </InputGroup>
          </Form>
        </AbsoluteCenter>

        <Stack direction={"row"} gap={4} ml={"auto"}>
          <Chain />
          <ButtonGroup>
            <ShellDashboardHeaderUserMenu>
              {authenticated && (
                <Menu.Trigger asChild={true} hideFrom={"lg"}>
                  <Button variant={"subtle"} size={"sm"} loading={!ready}>
                    <UserButtonContent />
                  </Button>
                </Menu.Trigger>
              )}

              <Menu.Trigger asChild={true} hideBelow={"lg"}>
                <Button variant={"subtle"} size={"sm"} loading={!ready}>
                  {!authenticated ? (
                    <IoEllipsisHorizontal />
                  ) : (
                    <UserButtonContent />
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
          onClick={mobile.onToggle}
          hideFrom={"lg"}
        />
      </Stack>
    </Stack>
  );
}

function SidebarToggle(props: IconButtonProps) {
  return (
    <IconButton size={"md"} variant={"ghost"} {...props}>
      <Icon size={"lg"}>
        <VscMenu />
      </Icon>
    </IconButton>
  );
}

function UserButtonContent() {
  const { user } = usePrivy();

  return (
    <>
      <UserAvatar size={"2xs"} address={user?.wallet?.address} />
      {shortenAddress(user?.wallet?.address)}
    </>
  );
}
