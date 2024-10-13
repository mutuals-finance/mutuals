import { HStack, MutualsLogo, StackProps } from "@mutuals/ui";

export type NavWrapperProps = StackProps;

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return (
    <HStack
      h="20"
      alignItems="center"
      w={"full"}
      gap="12"
      px={{ base: "6", lg: "12" }}
      position="relative"
      {...props}
    >
      <MutualsLogo href={"/"} w={{ base: "24", lg: "24" }} />
      {children}
    </HStack>
  );
}
