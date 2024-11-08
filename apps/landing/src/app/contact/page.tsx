import PageHeader from "@/components/PageHeader";
import { Container, SimpleGrid, Stack } from "@mutuals/ui";
import options from "@/app/contact/options";
import ContactOptionCard from "@/app/contact/Card";

export default function ContactPage() {
  return (
    <>
      <PageHeader tag={"Contact"}>Reach Out</PageHeader>
      <Container mt="20" mb="32" maxW="6xl">
        <Stack textAlign={"center"} alignItems={"center"}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: "6", lg: "12" }}
          >
            {options.map((props) => (
              <ContactOptionCard {...props} key={props.heading} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
