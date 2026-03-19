import { Box, Container, Grid, LinkListBox, MutualsLogo } from "@mutuals/ui";
import ShellDashboardFooterFooter from "@/features/shell/dashboard/Footer/footer";

export default function ShellDashboardFooter() {
  return (
    <Box as="footer" mt={{ base: "24", lg: "32" }} role="contentinfo">
      <Container maxW="7xl" py={{ base: "6", lg: "12" }}>
        <Grid
          gap={{ base: "12", lg: "12" }}
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        >
          <LinkListBox
            links={[
              {
                children: "Contact",
                target: "_blank",
                href: "https://mutuals.finance/contact",
              },
              {
                children: "Blog",
                target: "_blank",
                href: "https://mutuals.finance/blog/categories",
              },
            ]}
            title={"Company"}
          />
          <LinkListBox
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
            title={"Support"}
          />

          <LinkListBox
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
            title={"Legal"}
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
