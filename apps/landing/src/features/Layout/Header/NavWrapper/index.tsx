import { Container, MutualsLogo, Stack, StackProps } from "@mutuals/ui";

export type NavWrapperProps = StackProps;

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return (
    <Stack
      h={{ base: "20", lg: "20" }}
      direction={"row"}
      alignItems={"center"}
      w={"full"}
      {...props}
    >
      <Container
        display={"flex"}
        maxW={"7xl"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <MutualsLogo href={"/"} w={{ base: "32", lg: "32" }} />

        {children}
      </Container>
    </Stack>
  );
}
