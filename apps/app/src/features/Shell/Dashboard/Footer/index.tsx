import { Box, Container, Grid, LinkListBox, MutualsLogo } from "@mutuals/ui";
import ShellDashboardFooterFooter from "@/features/Shell/Dashboard/Footer/Footer";

export default function ShellDashboardFooter() {
  return (
    <Box as="footer" role="contentinfo" mt={{ base: "24", lg: "32" }}>
      <Container maxW="7xl" py={{ base: "6", lg: "12" }}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: "12", lg: "12" }}
        >
          <LinkListBox
            title={"Company"}
            links={[
              { children: "About Us", href: "/about" },
              { children: "Contact Us", href: "/contact" },
              { children: "Careers", href: "/about" },
              { children: "Blog", href: "/" },
            ]}
          />
          <LinkListBox
            title={"Support"}
            links={[
              { children: "Pricing", href: "/pricing" },
              { children: "Help Center", href: "/" },
              { children: "Safety Center", href: "/" },
              { children: "Community Guidelines", href: "/" },
            ]}
          />

          <LinkListBox
            title={"Legal"}
            links={[
              { children: "Cookies Policy", href: "/" },
              { children: "Privacy Policy", href: "/" },
              { children: "Terms of Service", href: "/" },
              { children: "Law Enforcement", href: "/" },
            ]}
          />

          <LinkListBox alignItems={"flex-end"} justifyContent={"flex-start"}>
            <Box>
              <MutualsLogo href={"/"} maxW={{ base: "32", lg: "48" }} />
            </Box>
          </LinkListBox>
        </Grid>
      </Container>

      <ShellDashboardFooterFooter />
    </Box>
  );
}
