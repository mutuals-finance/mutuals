import { Container, MutualsLogo, Stack, StackProps } from "@mutuals/ui";

export type NavWrapperProps = StackProps;

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return (
    <Stack h={"4.6rem"} direction={"row"} alignItems={"center"} w={"full"}>
      <Container maxW={"7xl"}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
          {...props}
        >
          <MutualsLogo href={"/"} w={{ base: "28", lg: "28" }} />

          {children}
        </Stack>
      </Container>
    </Stack>
  );
}
