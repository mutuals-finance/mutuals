"use client";

import { IconButton, useDisclosure } from "@splitfi/ui";
import { IoMenuSharp } from "react-icons/io5";

export default function ShellDashboardHeaderMobileMenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <IconButton
      icon={<IoMenuSharp display={"block"} />}
      fontSize={"2xl"}
      aria-label={"Open Menu"}
      onClick={isOpen ? onClose : onOpen}
      variant={"ghost"}
    />
  );
}
