import { Link, Container, Stack, StackSeparator, Text } from "@mutuals/ui";

export default function ShellDashboardFooter() {
  const routes: Record<string, string> = {
    Homepage: "https://mutuals.finance",
    "Terms Of Service": "/",
    "Privacy Policy": "/",
  };
  return (
    <Container
      as="footer"
      maxW={"100%"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"flex-end"}
      p={"12"}
      mt={"12"}
    >
      <Stack
        mb={"6"}
        direction={"row"}
        separator={<StackSeparator />}
        gap={"4"}
      >
        <Text textStyle={"xs"}>Copyright 2025 Mutuals</Text>
        <Text textStyle={"xs"}>The best way to manage onchain payments.</Text>
      </Stack>

      <Stack gap={"4"} direction={["column", "row"]} textStyle={"xs"}>
        {Object.keys(routes).map((name: string) => (
          <Link href={routes[name] || "/"} key={name}>
            {name}
          </Link>
        ))}
      </Stack>
    </Container>
  );
}
