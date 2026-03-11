import 'tsconfig-paths/register';
import '@openzeppelin/hardhat-upgrades';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-verify';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@typechain/hardhat';
import 'hardhat-tracer';
import 'hardhat-contract-sizer';
import 'hardhat-ignore-warnings';
import '@/config/environment';
import '@/tasks';
import { extendEnvironment } from 'hardhat/config';
import { namedAccounts } from '@/config/accounts';
import { trace, log } from '@/utils/log';
import {
  deployNonUpgradeable,
  deployOrUpgradeBeacon,
  deployOrUpgradeProxy,
} from '@/plugins/deploy';
import {
  isNetworkLocal,
  isNetworkProduction,
  isNetworkStaging,
} from '@/plugins/network';

/**
 * Hardhat v2 environment extension
 */
extendEnvironment((hre) => {
  // Cast to custom HRE type to add our modules
  const customHre = hre as unknown as CustomHardHatRuntimeEnvironment;

  // Add custom utilities to HRE
  customHre.log = log;
  customHre.trace = trace;

  if (customHre.network.live) {
    customHre.log('Using alchemy + hd wallet signer');
  } else {
    customHre.namedAccounts = namedAccounts;
    customHre.log('Using hardhat signer');
  }

  customHre.getSigners = () => customHre.ethers.getSigners();
  customHre.isNetworkStaging = isNetworkStaging;
  customHre.isNetworkLocal = isNetworkLocal;
  customHre.isNetworkProduction = isNetworkProduction;
  customHre.deployNonUpgradeable = deployNonUpgradeable;
  customHre.deployOrUpgradeProxy = deployOrUpgradeProxy;
  customHre.deployOrUpgradeBeacon = deployOrUpgradeBeacon;
});
