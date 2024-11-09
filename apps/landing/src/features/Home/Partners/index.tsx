import { Box, Container } from "@mutuals/ui";
import PartnerSlider from "@/features/Home/Partners/PartnerSlider";
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

export default function HomePartners() {
  return (
    <Box mt={"48"}>
      <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
        <PartnerSlider networks={networks} />
      </Container>
    </Box>
  );
}
