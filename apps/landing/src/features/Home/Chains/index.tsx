import { Box, Container, Heading } from "@mutuals/ui";
import ChainSlider from "@/features/Home/Chains/ChainSlider";
import EthereumIcon from "@/assets/networks/ethereum_black.svg";
import EthereumDarkIcon from "@/assets/networks/ethereum_white.svg";
import PolygonIcon from "@/assets/networks/polygon_black.svg";
import PolygonDarkIcon from "@/assets/networks/polygon_white.svg";
import BaseIcon from "@/assets/networks/base_black.svg";
import BaseDarkIcon from "@/assets/networks/base_white.svg";
import OptimismIcon from "@/assets/networks/optimism_black.svg";
import OptimismDarkIcon from "@/assets/networks/optimism_white.svg";
import ArbitrumIcon from "@/assets/networks/arbitrum_black.svg";
import ArbitrumDarkIcon from "@/assets/networks/arbitrum_white.svg";
import AvalancheIcon from "@/assets/networks/avalanche_black.svg";
import AvalancheDarkIcon from "@/assets/networks/avalanche_white.svg";
import BNBIcon from "@/assets/networks/bnb_black.svg";
import BNBDarkIcon from "@/assets/networks/bnb_white.svg";
import ZkSyncIcon from "@/assets/networks/zksync_black.svg";
import ZkSyncDarkIcon from "@/assets/networks/zksync_white.svg";

const networks = [
  {
    name: "Ethereum",
    base: EthereumIcon,
    dark: EthereumDarkIcon,
    href: "https://ethereum.org/",
  },
  {
    name: "Polygon",
    base: PolygonIcon,
    dark: PolygonDarkIcon,
    href: "https://polygon.technology/",
  },
  {
    name: "Base",
    base: BaseIcon,
    dark: BaseDarkIcon,
    href: "https://www.base.org/",
  },
  {
    name: "Optimism",
    base: OptimismIcon,
    dark: OptimismDarkIcon,
    href: "https://www.optimism.io/",
  },
  {
    name: "Arbitrum",
    base: ArbitrumIcon,
    dark: ArbitrumDarkIcon,
    href: "https://arbitrum.io/",
  },
  {
    name: "Avalanche",
    base: AvalancheIcon,
    dark: AvalancheDarkIcon,
    href: "https://www.avax.network/",
  },
  {
    name: "BNB",
    base: BNBIcon,
    dark: BNBDarkIcon,
    href: "https://www.bnbchain.org/",
  },
  {
    name: "ZkSync",
    base: ZkSyncIcon,
    dark: ZkSyncDarkIcon,
    href: "https://www.zksync.io/",
  },
];

export default function HomeChains() {
  return (
    <Box my={"32"}>
      <Container maxW="7xl">
        <Heading as={"h2"} variant={"subtag"} mb={"6"} fontSize={"xs"}>
          Available on {networks.length - 1}+ networks
        </Heading>
      </Container>

      <Box position={"relative"}>
        <ChainSlider networks={networks} />
      </Box>
    </Box>
  );
}
