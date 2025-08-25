import {
  Box,
  Container,
  Grid,
  IconButton,
  Input,
  MutualsLogo,
  Stack,
  InputGroup,
  Form,
  Field,
} from "@mutuals/ui";
import { IoSend } from "react-icons/io5";
import ListBox from "@/features/Layout/Footer/ListBox";
import Footer from "@/features/Layout/Footer/Footer";

export default function LayoutFooter() {
  return (
    <Box as="footer" role="contentinfo" maxW="100%" w="100%" pt="24">
      <Container as={Stack} maxW="7xl" py={{ base: 6, lg: 12 }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(6, 1fr)" }}
          templateRows={{ lg: "2" }}
          gap={{ base: "12", lg: "12" }}
        >
          <ListBox
            title={"Company"}
            links={[
              { children: "Contact", href: "/contact" },
              { children: "Blog", href: "/" },
            ]}
          />
          <ListBox
            title={"Support"}
            links={[
              { children: "Pricing", href: "/pricing" },
              { children: "Help Center", href: "/" },
              { children: "Safety Center", href: "/" },
              { children: "Community Guidelines", href: "/" },
            ]}
          />

          <ListBox
            title={"Legal"}
            links={[
              { children: "Cookies Policy", href: "/" },
              { children: "Privacy Policy", href: "/" },
              { children: "Terms of Service", href: "/" },
              { children: "Law Enforcement", href: "/" },
            ]}
          />

          <ListBox
            colSpan={{ base: 2, lg: 3 }}
            rowSpan={{ lg: 2 }}
            alignItems={"flex-end"}
            justifyContent={"flex-start"}
          >
            <Box>
              <MutualsLogo href={"/"} maxW={{ base: "32", lg: "48" }} />
            </Box>
          </ListBox>

          <ListBox title={"Stay Up To Date"} colSpan={{ base: 2, lg: 3 }}>
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
          </ListBox>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
