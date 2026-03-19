import {
  Container,
  type ContainerProps,
  MutualsLogo,
  Stack,
} from "@mutuals/ui";

export type NavWrapperProps = ContainerProps;

export default function NavWrapper({ children, ...props }: NavWrapperProps) {
  return (
    <Container display="flex" h={"4.6rem"} maxW={"7xl"} {...props}>
      <Stack
        alignItems="center"
        direction={"row"}
        justifyContent={"space-between"}
        w={"full"}
      >
        <MutualsLogo href={"/"} w={"28"} />

        {children}
      </Stack>
    </Container>
  );
}
