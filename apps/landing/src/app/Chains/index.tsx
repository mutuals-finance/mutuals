import { Box, Container, Text } from "@splitfi/ui";
import ChainSlider from "@/app/Chains/ChainSlider";
import EthereumIcon from "@/assets/networks/Etherium.svg";
import PolygonIcon from "@/assets/networks/Polygon.svg";
import OPIcon from "@/assets/networks/OP.svg";
import ArbitrumIcon from "@/assets/networks/Arbitrum.svg";
import AvalancheIcon from "@/assets/networks/Avalanche.svg";
import BNBIcon from "@/assets/networks/BNB.svg";
import ZoraIcon from "@/assets/networks/Zora.svg";
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
    <Box mt={"12"}>
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <Text variant={"tag"} mb={"6"}>
          Available on {networks.length - 1}+ networks
        </Text>

        <ChainSlider networks={networks} />
      </Container>
    </Box>
  );
}
