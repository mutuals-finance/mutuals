import {
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Box,
  ContainerProps,
} from "@mutuals/ui";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";
import ContactOptionsCard from "@/features/Contact/Options/Card";

export type ContactOptionsProps = ContainerProps;

export default function ContactOptions(props: ContactOptionsProps) {
  return (
    <Container mt={{ base: "6", lg: "12" }} mb="16" maxW="5xl" {...props}>
      <Stack textAlign={"center"} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "2", lg: "6" }}>
          <ContactOptionsCard
            heading={"Contact Us"}
            icon={<IoChatbubblesOutline />}
          >
            <Text color={"fg.muted"} textStyle={"md"}>
              Discuss your enterprise requirements, explore personalized pricing
              options, or request a demo.
            </Text>

            <Box mt={"4"}>
              <Link asChild={true} href={"mailto:hello@mutuals.finance"}>
                <Button variant={"subtle"}>Let's Chat</Button>
              </Link>
            </Box>
          </ContactOptionsCard>
          <ContactOptionsCard
            heading={"Get in touch"}
            icon={<IoPaperPlaneOutline />}
          >
            <Text color={"fg.muted"} textStyle={"md"}>
              Found a bug?{" "}
              <Link
                href={"https://github.com/mutuals-finance/mutuals/issues/new"}
                external={true}
                arrow={false}
                variant={"underline"}
              >
                File a GitHub issue
              </Link>{" "}
              and our team will review it right away.
              <br />
              Need something else?{" "}
              <Link href={"mailto:hello@mutuals.finance"} variant={"underline"}>
                Send us a note
              </Link>
              .
            </Text>
          </ContactOptionsCard>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
