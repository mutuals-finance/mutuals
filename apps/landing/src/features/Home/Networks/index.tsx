import { Box, type BoxProps, Container, Heading, Marquee } from "@mutuals/ui";
import HomeNetworksCard from "@/features/home/networks/card";
import networks from "@/features/home/networks/items";

export default function HomeNetworks(props: BoxProps) {
  return (
    <Box my={"32"} {...props}>
      <Container maxW="7xl">
        <Heading as={"h2"} mb={"6"} textStyle={"xs"} variant={"subtag"}>
          Available on {networks.length - 1}+ networks
        </Heading>
      </Container>

      <Marquee.Root pauseOnInteraction speed={25}>
        <Marquee.Viewport>
          <Marquee.Content>
            {networks.map((network) => (
              <Marquee.Item asChild={true} key={network.name}>
                <HomeNetworksCard {...network} />
              </Marquee.Item>
            ))}
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </Box>
  );
}
