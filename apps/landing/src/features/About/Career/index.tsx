import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  Container,
  EmptyStateContent,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStateRoot,
  EmptyStateTitle,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  VStack,
} from "@mutuals/ui";
import SectionHeader from "@/features/Shell/SectionHeader";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function AboutCareer() {
  return (
    <Container mt="32" mb="32" maxW="7xl">
      <SectionHeader label={"Careers"}>Join our team</SectionHeader>
      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={"6"}>
        <GridItem
          display={"flex"}
          colSpan={{ base: 1, lg: 3 }}
          order={{ lg: 2 }}
          alignItems={"stretch"}
        >
          <CardRoot size="lg" variant={"outline"}>
            <CardBody justifyContent={"center"}>
              <EmptyStateRoot p={"0"}>
                <EmptyStateContent>
                  <EmptyStateIndicator>
                    <MdOutlineWorkOutline />
                  </EmptyStateIndicator>
                  <VStack textAlign="center">
                    <EmptyStateTitle>No open jobs</EmptyStateTitle>
                    <EmptyStateDescription color={"fg.subtle"} textStyle={"md"}>
                      There are no job openings available at this time. Please
                      check back at another time.
                    </EmptyStateDescription>
                  </VStack>
                </EmptyStateContent>
              </EmptyStateRoot>
            </CardBody>
            <CardFooter>
              <Link href={""} asChild={true} mx={"auto"} w={"full"}>
                <Button variant={"surface"} w={"full"}>
                  Open application
                </Button>
              </Link>
            </CardFooter>
          </CardRoot>
        </GridItem>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <CardRoot size="lg" textAlign={{ base: "center", lg: "left" }}>
            <CardHeader>
              <Heading size="2xl">
                Think you can elevate our team to the next level?
              </Heading>
            </CardHeader>
            <CardBody color="fg.subtle">
              We're always on the lookout for outstanding talent. If you’re
              driven to make an impact, email us at hiring@mutuals.finance. Tell
              us why you’re the one we need and what role you’re ready to own.
            </CardBody>
            <CardFooter>
              <Link
                href={""}
                asChild={true}
                mx={{ base: "auto", lg: "unset" }}
                w={{ base: "full", lg: "unset" }}
              >
                <Button variant={"surface"} w={{ base: "full", lg: "unset" }}>
                  Open application
                </Button>
              </Link>
            </CardFooter>
          </CardRoot>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
