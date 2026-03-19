import {
  Box,
  Button,
  Container,
  type ContainerProps,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@mutuals/ui";
import { IoChatbubblesOutline, IoPaperPlaneOutline } from "react-icons/io5";
import ContactOptionsCard from "@/features/contact/options/card";

export type ContactOptionsProps = ContainerProps;

export default function ContactOptions(props: ContactOptionsProps) {
  return (
    <Container maxW="5xl" mb="16" mt={{ base: "6", lg: "12" }} {...props}>
      <Stack alignItems={"center"} textAlign={"center"}>
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
                arrow={false}
                external={true}
                href={"https://github.com/mutuals-finance/mutuals/issues/new"}
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
