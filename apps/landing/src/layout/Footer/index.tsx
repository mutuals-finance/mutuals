import { Box, Container, Grid, IconButton, Input, Stack } from "@splitfi/ui";
import { IoSend } from "react-icons/io5";
import ListBox from "@/layout/Footer/ListBox";
import Footer from "@/layout/Footer/Footer";

export default function LayoutFooter() {
  return (
    <Box as="footer" role="contentinfo" maxW="100%" w="100%" pt="24">
      <Container
        as={Stack}
        maxW="container.xl"
        py={{ base: 6, lg: 12 }}
        px={{ base: "6", lg: "12" }}
        color="color.1"
      >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: "6", lg: "6" }}
        >
          <ListBox
            title={"Company"}
            links={[
              { children: "About Us", href: "/" },
              { children: "Blog", href: "/" },
              { children: "Careers", href: "/" },
              { children: "Contact Us", href: "/" },
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
          <ListBox title={"Stay Up To Date"} colSpan={{ base: 2, lg: 1 }}>
            <Stack direction="row">
              <Input variant="filled" placeholder="Your Email Address" />
              <IconButton aria-label="Subscribe" icon={<IoSend />} />
            </Stack>
          </ListBox>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
