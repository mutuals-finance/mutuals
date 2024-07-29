import { HStack, SplitFiLogo, StackProps } from "@splitfi/ui";

import Link from "next/link";

export type NavWrapperProps = StackProps;

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return (
    <HStack
      h="20"
      alignItems="center"
      w={"full"}
      spacing="12"
      px={{ base: "6", lg: "12" }}
      position="relative"
      {...props}
    >
      <Link href={"/"}>
        <SplitFiLogo color="color.1" w={{ base: "24", lg: "24" }} />
      </Link>
      {children}
    </HStack>
  );
}
