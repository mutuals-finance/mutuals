import {
  CardBody,
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
  SimpleGrid,
  VStack,
} from "@mutuals/ui";
import SectionHeader from "@/features/Shell/SectionHeader";

export default function AboutCareer() {
  return (
    <Container mt="32" mb="32" maxW="7xl">
      <SectionHeader label={"Careers"}>Join our team</SectionHeader>
      <SimpleGrid columns={{ base: 1, lg: 3 }} alignItems={"center"} gap={"6"}>
        <GridItem colSpan={{ base: 1, lg: 2 }} order={{ lg: 2 }}>
          <EmptyStateRoot>
            <EmptyStateContent>
              <EmptyStateIndicator>:(</EmptyStateIndicator>
              <VStack textAlign="center">
                <EmptyStateTitle>No open jobs</EmptyStateTitle>
                <EmptyStateDescription>
                  There are no job openings available at this time. Please check
                  back at another time.
                </EmptyStateDescription>
              </VStack>
            </EmptyStateContent>
          </EmptyStateRoot>
        </GridItem>
        <CardRoot size="lg">
          <CardHeader>
            <Heading size="2xl">
              Think you can elevate our team to the next level?
            </Heading>
          </CardHeader>
          <CardBody color="fg.muted">
            We're always on the lookout for outstanding talent. If you’re driven
            to make an impact, email us at hiring@mutuals.finance. Tell us why
            you’re the one we need and what role you’re ready to own.
          </CardBody>
        </CardRoot>
      </SimpleGrid>
    </Container>
  );
}
