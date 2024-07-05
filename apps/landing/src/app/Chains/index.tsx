import { Box, Container, Text } from "@splitfi/ui";
import ChainSlider from "@/app/Chains/ChainSlider";
import EthereumIcon from "@/assets/networks/Etherium.svg";
import PolygonIcon from "@/assets/networks/Polygon.svg";
import OPIcon from "@/assets/networks/OP.svg";
import ArbitrumIcon from "@/assets/networks/Arbitrum.svg";
import AvalancheIcon from "@/assets/networks/Avalanche.svg";
import ZoraIcon from "@/assets/networks/Zora.svg";
import BNBIcon from "@/assets/networks/BNB.svg";
import ZkSyncIcon from "@/assets/networks/zkSync.svg";
import BaseIcon from "@/assets/networks/Base.svg";

const networks = [
  { name: "Ethereum", icon: EthereumIcon },
  { name: "Polygon", icon: PolygonIcon },
  { name: "Base", icon: BaseIcon },
  { name: "Optimism", icon: OPIcon },
  { name: "Arbitrum", icon: ArbitrumIcon },
  { name: "Avalanche", icon: AvalancheIcon },
  { name: "BNB", icon: BNBIcon },
  { name: "zkSync", icon: ZkSyncIcon },
  { name: "Zora", icon: ZoraIcon },
];

export default function HomeChains() {
  return (
    <Box mt={"48"} mb={"6"}>
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <Text variant={"tag"} mb={"6"}>
          Available on {networks.length - 1}+ networks
        </Text>
      </Container>

      <Box position={"relative"}>
        <ChainSlider networks={networks} />

        <Box
          position={"absolute"}
          w="full"
          h="full"
          top="0"
          right={"0"}
          bgGradient="linear(to-r, bg.1,transparent,transparent,transparent,transparent, bg.1)"
        />
      </Box>
    </Box>
  );
}
