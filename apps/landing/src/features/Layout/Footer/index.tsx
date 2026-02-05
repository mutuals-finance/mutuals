import {
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  MutualsLogo,
  InputGroup,
  Form,
  Field,
  LinkListBox,
  Theme,
} from "@mutuals/ui";
import { IoSend } from "react-icons/io5";
import Footer from "@/features/Layout/Footer/Footer";

export default function LayoutFooter() {
  return (
    <Theme appearance="dark">
      <Box
        as="footer"
        role="contentinfo"
        maxW="100%"
        w="100%"
        pt="12"
        bg={"bg.subtle"}
      >
        <Container maxW="7xl" py={{ base: "6", lg: "12" }}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={{ base: "12", lg: "12" }}
          >
            <LinkListBox
              title={"Company"}
              links={[
                {
                  children: "Contact",
                  href: "/contact",
                },
                {
                  children: "Blog",
                  href: "/blog/categories",
                },
              ]}
            />
            <LinkListBox
              title={"Support"}
              links={[
                {
                  children: "Pricing",
                  href: "/pricing",
                },
                {
                  children: "Help Center",
                  href: "https://docs.mutuals.finance/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                {
                  children: "Safety Center",
                  href: "https://docs.mutuals.finance/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                {
                  children: "Community Guidelines",
                  href: "https://docs.mutuals.finance/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
              ]}
            />

            <LinkListBox
              title={"Legal"}
              links={[
                {
                  children: "Cookies Policy",
                  href: "/cookies-policy",
                },
                {
                  children: "Privacy Policy",
                  href: "/privacy-policy",
                },
                {
                  children: "Terms of Service",
                  href: "/terms-of-service",
                },
                {
                  children: "Law Enforcement",
                  href: "/law-enforcement",
                },
              ]}
            />

            <LinkListBox
              alignItems={"flex-end"}
              justifyContent={"flex-start"}
              colSpan={{ base: 2, lg: 1 }}
            >
              <Box>
                <MutualsLogo href={"/"} maxW={{ base: "32", lg: "48" }} />
              </Box>
            </LinkListBox>

            <LinkListBox title={"Stay Up To Date"} colSpan={{ base: 2, lg: 1 }}>
              <Form w={"full"}>
                <Field id={"email"} label={"Email address"}>
                  <InputGroup
                    w={"full"}
                    flex="1"
                    endElement={
                      <IconButton
                        size="sm"
                        variant={"ghost"}
                        aria-label="Subscribe"
                      >
                        <IoSend />
                      </IconButton>
                    }
                  >
                    <Input id="email" placeholder="Your Email Address" />
                  </InputGroup>
                </Field>
              </Form>
            </LinkListBox>
          </Grid>
        </Container>

        <Footer />
      </Box>
    </Theme>
  );
}
