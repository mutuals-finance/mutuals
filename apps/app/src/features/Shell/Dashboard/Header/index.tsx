"use client";

import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Form,
  Icon,
  IconButton,
  type IconButtonProps,
  Input,
  InputGroup,
  Menu,
  MutualsLogo,
  Show,
  Stack,
  type StackProps,
} from "@mutuals/ui";
import { usePrivy } from "@privy-io/react-auth";
import { AiOutlineMenu } from "react-icons/ai";
import { IoEllipsisHorizontal, IoSearch } from "react-icons/io5";
import CallbackLinkButton from "@/components/callback-link-button";
import ShellDashboardHeaderAlert from "@/features/shell/dashboard/header/alert";
import ShellDashboardHeaderUserMenu from "@/features/shell/dashboard/header/user-menu";
import { useDashboardRoot } from "@/features/shell/dashboard/root";
import UserAvatar from "@/features/wallet/avatar";
import { shortenAddress } from "@/utils";
import Chain from "./chain";

export type ShellDashboardHeaderProps = StackProps;

export default function ShellDashboardHeader(props: ShellDashboardHeaderProps) {
  const { mobile, desktop } = useDashboardRoot();
  const { ready, authenticated } = usePrivy();

  return (
    <Stack
      gap={"0"}
      left={"0"}
      position="sticky"
      top={"0"}
      w={"full"}
      zIndex={"50"}
      {...props}
    >
      {authenticated && <ShellDashboardHeaderAlert />}

      <Stack
        alignItems={"center"}
        as="header"
        bgColor={"bg/50"}
        css={{
          backdropFilter: "blur(12px)",
        }}
        direction={"row"}
        gap={{ base: "1", lg: "4" }}
        h={{ base: "16", md: "16" }}
        justifyContent={"space-between"}
        pl={{ base: "6", lg: "4" }}
        position={"relative"}
        pr={{ base: "6", lg: "12" }}
        py={"6"}
      >
        <Stack
          direction={"row"}
          justify={"space-between"}
          mr={"auto"}
          w={{ lg: "52" }}
        >
          <MutualsLogo href={"/"} w={"28"} />
          <SidebarToggle
            aria-label={"Toggle Desktop Sidebar"}
            hideBelow={"lg"}
            onClick={desktop.onToggle}
          />
        </Stack>

        <AbsoluteCenter hideBelow={"lg"} maxW={"xs"} w={"full"}>
          <Form w={"full"}>
            <InputGroup startElement={<IoSearch />}>
              <Input placeholder="Search users, pools and tokens" size={"md"} />
            </InputGroup>
          </Form>
        </AbsoluteCenter>

        <Stack direction={"row"} gap={4} ml={"auto"}>
          <Chain />
          <ButtonGroup>
            <ShellDashboardHeaderUserMenu>
              <Menu.Trigger asChild={true}>
                <Box>
                  <Show when={authenticated}>
                    <Button
                      hideFrom={"lg"}
                      loading={!ready}
                      size={"sm"}
                      variant={"subtle"}
                    >
                      <UserButtonContent />
                    </Button>
                  </Show>

                  <Button
                    hideBelow={"lg"}
                    loading={!ready}
                    size={"sm"}
                    variant={"subtle"}
                  >
                    <Show
                      fallback={
                        <Icon>
                          <IoEllipsisHorizontal />
                        </Icon>
                      }
                      when={authenticated}
                    >
                      <UserButtonContent />
                    </Show>
                  </Button>
                </Box>
              </Menu.Trigger>
            </ShellDashboardHeaderUserMenu>
            {ready && !authenticated && (
              <CallbackLinkButton
                loading={!ready}
                size={"sm"}
                variant={"solid"}
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
    <IconButton size={"sm"} variant={"ghost"} {...props}>
      <Icon size={"md"}>
        <AiOutlineMenu />
      </Icon>
    </IconButton>
  );
}

function UserButtonContent() {
  const { user } = usePrivy();

  return (
    <>
      <UserAvatar address={user?.wallet?.address} size={"2xs"} />
      {shortenAddress(user?.wallet?.address)}
    </>
  );
}
