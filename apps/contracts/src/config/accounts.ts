import type { HardhatNetworkAccountUserConfig } from 'hardhat/types';
import { ethers } from 'ethers';

const MNEMONIC = process.env.MNEMONIC;

export type NamedAccountIndices = typeof namedAccountIndices;

export type NamedAccounts = { [Property in keyof NamedAccountIndices]: string };

export const namedAccountIndices = {
  admin: 0,
  unassigned0: 1,
  /** 0x6b9d03759E9F14a641f0703fBD84F1F726159B6B */
  unassigned1: 2,
  unassigned2: 3,
  poolOwnerHonest: 4,
  mutualsStagingDeployer: 5,
  poolOwnerMalicious: 6,
  recipient0: 7,
  recipient1: 8,
  recipient2: 9,
} as const;

const getWallet = (mnemonic: string, index: number) =>
  ethers.HDNodeWallet.fromPhrase(
    mnemonic,
    '',
    ethers.getIndexedAccountPath(index)
  );

export const namedAccounts: NamedAccounts = Object.fromEntries(
  Array.from({ length: 10 }).map((_, index) => {
    return [
      Object.keys(namedAccountIndices)[index],
      typeof MNEMONIC === 'string' ? getWallet(MNEMONIC, index) : undefined,
    ];
  })
) as NamedAccounts;

export const accounts: HardhatNetworkAccountUserConfig[] | undefined =
  MNEMONIC === undefined
    ? undefined
    : Array.from({ length: 10 }).map((_, index) => {
        return {
          privateKey: getWallet(MNEMONIC, index).privateKey.toString(),
          balance: ethers.parseEther('1000000.0').toString(),
        };
      });
