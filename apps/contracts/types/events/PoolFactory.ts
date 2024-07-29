/* eslint-disable @typescript-eslint/naming-convention -- events in this file match on-chain event names which are pascal case */
import type { BigNumberish } from 'ethers';

import type {
	ApprovalForAllEvent,
	InitializedEvent,
	MigrateEvent,
	RetireEvent,
	PausedEvent,
	ReleasePoolFactoryEvent,
	RoleAdminChangedEvent,
	RoleGrantedEvent,
	RoleRevokedEvent,
	TransferBatchEvent,
	TransferSingleEvent,
	URIEvent,
	UnpausedEvent,
	RegisterContractAddressesEvent,
} from '@/typechain-types/artifacts/contracts/PoolFactory';

import type { ContractEvents } from './contract-events';

export interface PoolFactoryEventMap {
	ApprovalForAll: {
		name: 'ApprovalForAll';
		args: ApprovalForAllEvent['args'];
	};
	Initialized: {
		name: 'Initialized';
		args: InitializedEvent['args'];
	};
	Migrate: {
		name: 'Migrate';
		args: MigrateEvent['args'];
	};
	Retire: {
		name: 'Retire';
		args: RetireEvent['args'];
	};
	Paused: {
		name: 'Paused';
		args: PausedEvent['args'];
	};
	RegisterContractAddresses: {
		name: 'RegisterContractAddresses';
		args: RegisterContractAddressesEvent['args'];
	};
	ReleasePoolFactory: {
		name: 'ReleasePoolFactory';
		args: ReleasePoolFactoryEvent['args'];
	};
	RoleAdminChanged: {
		name: 'RoleAdminChanged';
		args: RoleAdminChangedEvent['args'];
	};
	RoleGranted: {
		name: 'RoleGranted';
		args: RoleGrantedEvent['args'];
	};
	RoleRevoked: {
		name: 'RoleRevoked';
		args: RoleRevokedEvent['args'];
	};
	TransferBatch: {
		name: 'TransferBatch';
		/**
		 * `args.values` is remapped to `args.vals` due to a limitation of javascript.
		 *
		 * @see https://github.com/ethers-io/ethers.js/discussions/3542#discussioncomment-4214097
		 */
		args: Omit<TransferBatchEvent['args'], 'values'> & {
			vals: TransferBatchEvent['args']['values'] extends BigNumberish[]
				? BigNumberish[]
				: never;
		};
	};
	TransferSingle: {
		name: 'TransferSingle';
		args: TransferSingleEvent['args'];
	};
	URI: {
		name: 'URI';
		args: URIEvent['args'];
	};
	Unpaused: {
		name: 'Unpaused';
		args: UnpausedEvent['args'];
	};
}

export type PoolFactoryEvents = ContractEvents<PoolFactoryEventMap>;
