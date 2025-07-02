import {
  Button,
  CardBody,
  CardDescription,
  CardFooter,
  CardRoot,
  CardTitle,
  Container,
} from "@mutuals/ui";

export default function AboutContactCTA() {
  return (
    <>
      <Container maxW="4xl">
        <CardRoot
          variant="subtle"
          flexDirection="row"
          alignItems={"flex-end"}
          overflow="hidden"
        >
          <CardBody>
            <CardTitle textStyle={"2xl"} mb={"2"}>
              Contact
            </CardTitle>
            <CardDescription textStyle={"md"} color={"fg.muted"}>
              Connect with us to get started or learn more
            </CardDescription>
          </CardBody>
          <CardFooter>
            <Button size={"xl"} variant={"solid"}>
              Reach Out
            </Button>
          </CardFooter>
        </CardRoot>
      </Container>
    </>
  );
}
