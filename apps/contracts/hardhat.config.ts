import "tsconfig-paths/register";
import "@/config/environment";
import "@/plugins";

import type { HardhatUserConfig } from "hardhat/config";
import { namedAccountIndices } from "@/config/accounts";
import { defender } from "@/config/defender";
import { etherscan } from "@/config/etherscan";
import { networks } from "@/config/networks";
import { solidity } from "@/config/solidity";
import { tracer } from "@/config/tracer";
import { typechain } from "@/config/typechain";

export const getConfig = (
  _: NodeJS.ProcessEnv = process.env
): HardhatUserConfig => {
  return {
    namedAccounts: namedAccountIndices,
    networks,
    etherscan,
    defender,
    solidity,
    paths: {
      deploy: "./src/deploy",
      sources: "./contracts",
    },
    tracer,
    typechain,
    contractSizer: {
      alphaSort: true,
      disambiguatePaths: false,
      runOnCompile: true,
      strict: false,
    },
  };
};

export const config = getConfig();

export default config;
