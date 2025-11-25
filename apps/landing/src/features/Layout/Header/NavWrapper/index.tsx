import { Container, MutualsLogo, Stack, ContainerProps } from "@mutuals/ui";

export type NavWrapperProps = ContainerProps;

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return (
    <Container display="flex" maxW={"7xl"} h={"4.6rem"} {...props}>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        w={"full"}
      >
        <MutualsLogo href={"/"} w={"28"} />

        {children}
      </Stack>
    </Container>
  );
}
