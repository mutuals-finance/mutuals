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
} from "@mutuals/ui";
import { IoSearch } from "react-icons/io5";

import Chain from "./Chain";
import User from "./User";
import { VscMenu } from "react-icons/vsc";
import { useDashboardRoot } from "@/features/Shell/Dashboard/Root";

export default function ShellDashboardHeader() {
  const { mobile, desktop } = useDashboardRoot();

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
      gap={{ base: "1", lg: "12" }}
      borderBottomWidth="1px"
      borderColor={"border"}
      bg={"bg"}
      direction={"row"}
    >
      <MutualsLogo w={{ base: "24", md: "24" }} href={"/"} />

      <AbsoluteCenter hideBelow={"lg"}>
        <Form>
          <InputGroup startElement={<IoSearch />}>
            <Input size={"sm"} placeholder="Search..." />
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
        <User />
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
      size={"sm"}
      aria-label={"Toggle Sidebar"}
      variant={"ghost"}
      {...props}
    >
      <Icon size={"md"}>
        <VscMenu />
      </Icon>
    </IconButton>
  );
}
