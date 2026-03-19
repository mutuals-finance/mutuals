import {
  Box,
  Container,
  Grid,
  LinkListBox,
  MutualsLogo,
  Theme,
} from "@mutuals/ui";
import LayoutFooterFooter from "@/features/layout/footer/footer";
import LayoutFooterNewsletterForm from "@/features/layout/footer/newsletter-form";

export default function LayoutFooter() {
  return (
    <Theme appearance="dark">
      <Box
        as="footer"
        bg={"bg.subtle"}
        maxW="100%"
        pt="12"
        role="contentinfo"
        w="100%"
      >
        <Container maxW="7xl" py={{ base: "6", lg: "12" }}>
          <Grid
            gap={{ base: "12", lg: "12" }}
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          >
            <LinkListBox
              links={[
                {
                  children: "Contact",
                  href: "/contact",
                },
                {
                  children: "Blog",
                  href: "/blog",
                },
              ]}
              title={"Company"}
            />
            <LinkListBox
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
              title={"Support"}
            />

            <LinkListBox
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
              title={"Legal"}
            />

            <LinkListBox
              alignItems={"flex-end"}
              colSpan={{ base: 2, lg: 1 }}
              justifyContent={"flex-start"}
            >
              <Box>
                <MutualsLogo href={"/"} maxW={{ base: "32", lg: "48" }} />
              </Box>
            </LinkListBox>

            <LinkListBox
              colSpan={{ base: 2, lg: 2 }}
              maxW={{ lg: "96" }}
              title={"Stay Up To Date"}
            >
              <LayoutFooterNewsletterForm />
            </LinkListBox>
          </Grid>
        </Container>

        <LayoutFooterFooter />
      </Box>
    </Theme>
  );
}
