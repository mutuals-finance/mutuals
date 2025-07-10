import { Container, Text, Stack } from "@mutuals/ui";
import SectionHeader from "@/features/Shell/SectionHeader";

export default function AboutEthos() {
  return (
    <Container my={{ base: "16", lg: "32" }} maxW="3xl">
      <SectionHeader label={"Our Ethos"}>
        Towards trustless financial distribution
      </SectionHeader>

      <Stack gap={"2"}>
        <Text>
          Our mission: to empower teams to manage revenue seamlessly and
          trustlessly, freeing them to focus on building great products rather
          than wrestling with payment logistics.
        </Text>
        <Text>
          Onchain adoption sees continous growth, and Mutuals has evolved beyond
          basic payment splitting into a complete revenue management platform
          handling percentage-based allocations, recurring payments, timelock
          distributions, and real-time earnings tracking across multiple
          blockchain networks.
        </Text>
        <Text>
          In our future, teams should operate with permissionless financial
          infrastructure and complete transparency; rather than manually
          calculating revenue each month or relying on traditional processors
          that require approvals and oversight, they should configure payment
          rules once and let smart contracts handle ongoing distributions to
          team members, partners, and contributors automatically.
        </Text>
        <Text>
          In this future, blockchain technology doesn&#39;t complicate team
          finance, it gives teams superpowers. It works transparently alongside
          them and creates more efficient, trustworthy financial operations. If
          you&#39;re excited about building this future, come join us.
        </Text>
      </Stack>
    </Container>
  );
}
