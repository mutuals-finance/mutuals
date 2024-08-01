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
import '@/config/environment';
import '@/tasks';
import { extendEnvironment } from 'hardhat/config';
import { lazyFunction, lazyObject } from 'hardhat/plugins';
import { namedAccounts } from '@/config/accounts';
import { trace, log } from '@/utils/log';
import {
  deployNonUpgradeable,
  deployOrUpgradeBeacon,
  deployOrUpgradeProxy,
} from '@/plugins/deploy';

/**
 * Note: extendEnvironment cannot take async functions
 *
 */
extendEnvironment((hre) => {
  hre.log = lazyFunction(() => log);
  hre.trace = lazyFunction(() => trace);
  if (hre.network.config.live) {
    hre.log('Using alchemy + hd wallet signer');
  } else {
    hre.namedAccounts = lazyObject(() => namedAccounts);
    hre.log('Using hardhat signer');
  }
  hre.getSigners = lazyFunction(() => hre.ethers.getSigners);
  hre.deployNonUpgradeable = lazyFunction(() => deployNonUpgradeable);
  hre.deployOrUpgradeProxy = lazyFunction(() => deployOrUpgradeProxy);
  hre.deployOrUpgradeBeacon = lazyFunction(() => deployOrUpgradeBeacon);
});
