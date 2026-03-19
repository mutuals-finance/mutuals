import { Box, Container, Grid, LinkListBox, MutualsLogo } from "@mutuals/ui";
import ShellDashboardFooterFooter from "@/features/shell/dashboard/footer/footer";

export default function ShellDashboardFooter() {
  const baseExternalLinkProps = { external: true, arrow: false };

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
                href: "https://mutuals.finance/contact",
                ...baseExternalLinkProps,
              },
              {
                children: "Blog",
                href: "https://mutuals.finance/blog/categories",
                ...baseExternalLinkProps,
              },
            ]}
            title={"Company"}
          />
          <LinkListBox
            links={[
              {
                children: "Pricing",
                href: "https://mutuals.finance/pricing",
                ...baseExternalLinkProps,
              },
              {
                children: "Help Center",
                href: "https://docs.mutuals.finance/",
                ...baseExternalLinkProps,
              },
              {
                children: "Safety Center",
                href: "https://docs.mutuals.finance/",
                ...baseExternalLinkProps,
              },
              {
                children: "Community Guidelines",
                href: "https://docs.mutuals.finance/",
                ...baseExternalLinkProps,
              },
            ]}
            title={"Support"}
          />

          <LinkListBox
            links={[
              {
                children: "Cookies Policy",
                href: "https://mutuals.finance/cookies-policy",
                ...baseExternalLinkProps,
              },
              {
                children: "Privacy Policy",
                href: "https://mutuals.finance/privacy-policy",
                ...baseExternalLinkProps,
              },
              {
                children: "Terms of Service",
                href: "https://mutuals.finance/terms-of-service",
                ...baseExternalLinkProps,
              },
              {
                children: "Law Enforcement",
                href: "https://mutuals.finance/law-enforcement",
                ...baseExternalLinkProps,
              },
            ]}
            title={"Legal"}
          />

          <LinkListBox alignItems={"flex-end"} justifyContent={"flex-start"}>
            <Box>
              <MutualsLogo
                href={"https://mutuals.finance"}
                linkProps={baseExternalLinkProps}
                maxW={{ base: "32", lg: "48" }}
              />
            </Box>
          </LinkListBox>
        </Grid>
      </Container>

      <ShellDashboardFooterFooter />
    </Box>
  );
}
