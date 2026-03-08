import { Box, type BoxProps, Container, Heading, Marquee } from "@mutuals/ui";
import HomeNetworksCard from "@/features/Home/Networks/Card";
import networks from "@/features/Home/Networks/items";

export default function HomeNetworks(props: BoxProps) {
  return (
    <Box my={"32"} {...props}>
      <Container maxW="7xl">
        <Heading as={"h2"} variant={"subtag"} mb={"6"} textStyle={"xs"}>
          Available on {networks.length - 1}+ networks
        </Heading>
      </Container>

      <Marquee.Root pauseOnInteraction speed={25}>
        <Marquee.Viewport>
          <Marquee.Content>
            {networks.map((network) => (
              <Marquee.Item key={network.name} asChild={true}>
                <HomeNetworksCard {...network} />
              </Marquee.Item>
            ))}
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </Box>
  );
}
