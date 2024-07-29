import type { HardhatNetworkAccountUserConfig } from 'hardhat/types';
import { ethers } from 'ethers';

const MNEMONIC = process.env.MNEMONIC;

export type NamedAccountIndices = typeof namedAccountIndices;

export type NamedAccounts = { [Property in keyof NamedAccountIndices]: string };

export const namedAccountIndices = {
	admin: 0,
	unassigned0: 1,
	/** 0x6b9d03759E9F14a641f0703fBD84F1F726159B6B */
	supplier: 2,
	unassigned2: 3,
	investor1: 4,
	investor2: 5,
	buyer: 6,
	employee: 7,
	mockPolygonBridge: 8,
	mutualsWallet: 9,
} as const;

export const namedAccounts: NamedAccounts = Object.fromEntries(
	Array.from({ length: 10 }).map((_, index) => {
		return [
			Object.keys(namedAccountIndices)[index],
			typeof MNEMONIC === 'string'
				? ethers.HDNodeWallet.fromPhrase(
						MNEMONIC,
						'',
						`m/44'/60'/0'/0/${index}`
					).address
				: undefined,
		];
	})
) as NamedAccounts;

export const accounts: HardhatNetworkAccountUserConfig[] | undefined =
	MNEMONIC === undefined
		? undefined
		: Array.from({ length: 10 }).map((_, index) => {
				return {
					privateKey: ethers.HDNodeWallet.fromPhrase(
						MNEMONIC,
						'',
						`m/44'/60'/0'/0/${index}`
					).privateKey.toString(),
					balance: ethers
						.parseEther([7, 9].includes(index) ? '0.0' : '1000000.0') // accounts 7 and 9 are given 0.0 ETH
						.toString(),
				};
			});