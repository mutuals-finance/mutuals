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
              {
                children: "Contact",
                target: "_blank",
                href: "https://mutuals.finance/contact",
              },
              {
                children: "Blog",
                target: "_blank",
                href: "https://mutuals.finance/blog",
              },
            ]}
          />
          <LinkListBox
            title={"Support"}
            links={[
              {
                children: "Pricing",
                target: "_blank",
                href: "https://mutuals.finance/pricing",
              },
              {
                children: "Help Center",
                target: "_blank",
                href: "https://docs.mutuals.finance/",
              },
              {
                children: "Safety Center",
                target: "_blank",
                href: "https://docs.mutuals.finance/",
              },
              {
                children: "Community Guidelines",
                target: "_blank",
                href: "https://docs.mutuals.finance/",
              },
            ]}
          />

          <LinkListBox
            title={"Legal"}
            links={[
              {
                children: "Cookies Policy",
                target: "_blank",
                href: "https://mutuals.finance/cookies-policy",
              },
              {
                children: "Privacy Policy",
                target: "_blank",
                href: "https://mutuals.finance/privacy-policy",
              },
              {
                children: "Terms of Service",
                target: "_blank",
                href: "https://mutuals.finance/terms-of-service",
              },
              {
                children: "Law Enforcement",
                target: "_blank",
                href: "https://mutuals.finance/law-enforcement",
              },
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
