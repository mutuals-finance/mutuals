import {
  Button,
  Container,
  Group,
  Stack,
  StatRoot,
  StatHelpText,
  StatValueText,
  StatLabel,
  ProgressRoot,
  ProgressBar,
} from "@mutuals/ui";
import ContentCard from "@/components/ContentCard";

export default function DashboardBalance() {
  return (
    <Container maxW={"7xl"} my={"16"}>
      <ContentCard w={"full"} enableAccordion={false}>
        <ProgressRoot w={"full"} mb={"6"}>
          <ProgressBar />
        </ProgressRoot>

        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Group gap={"12"}>
            <StatRoot>
              <StatLabel>Pools balance</StatLabel>
              <StatValueText
                value={902834.48 - 40022.34}
                formatOptions={{
                  currency: "USD",
                  style: "currency",
                }}
              />
              <StatHelpText>+12% from last week</StatHelpText>
            </StatRoot>

            <StatRoot>
              <StatLabel>Your balance</StatLabel>
              <StatValueText
                value={40022.34}
                formatOptions={{
                  currency: "USD",
                  style: "currency",
                }}
              />
              <StatHelpText>+12% from last week</StatHelpText>
            </StatRoot>
          </Group>

          <Group>
            <Button>Withdraw</Button>
            <Button variant={"outline"}>View Pools</Button>
          </Group>
        </Stack>
      </ContentCard>
    </Container>
  );
}
