/* eslint-disable @typescript-eslint/naming-convention -- events in this file match on-chain event names which are pascal case */
import type {
	AddRemovalEvent,
	AddSupplierEvent,
	InitializedEvent,
	PausedEvent,
	RegisterContractAddressesEvent,
	RemoveSupplierEvent,
	RoleAdminChangedEvent,
	RoleGrantedEvent,
	RoleRevokedEvent,
	SetPriceMultipleEvent,
	SetPriorityRestrictedThresholdEvent,
	SetPurchasingTokenEvent,
	UnpausedEvent,
	UpdateCertificateEvent,
	UpdateMutualsFeePercentageEvent,
	UpdateMutualsFeeWalletAddressEvent,
} from '@/typechain-types/artifacts/contracts/Pool';

import type { ContractEvents } from './contract-events';

export interface PoolEventMap {
	AddRemoval: {
		args: AddRemovalEvent['args'];
		name: 'AddRemoval';
	};
	AddSupplier: {
		args: AddSupplierEvent['args'];
		name: 'AddSupplier';
	};
	Initialized: {
		args: InitializedEvent['args'];
		name: 'Initialized';
	};
	Paused: {
		args: PausedEvent['args'];
		name: 'Paused';
	};
	RegisterContractAddresses: {
		args: RegisterContractAddressesEvent['args'];
		name: 'RegisterContractAddresses';
	};
	RemoveSupplier: {
		args: RemoveSupplierEvent['args'];
		name: 'RemoveSupplier';
	};
	RoleAdminChanged: {
		args: RoleAdminChangedEvent['args'];
		name: 'RoleAdminChanged';
	};
	RoleGranted: {
		args: RoleGrantedEvent['args'];
		name: 'RoleGranted';
	};
	RoleRevoked: {
		args: RoleRevokedEvent['args'];
		name: 'RoleRevoked';
	};
	SetPriceMultiple: {
		args: SetPriceMultipleEvent['args'];
		name: 'SetPriceMultiple';
	};
	SetPriorityRestrictedThresholdE: {
		args: SetPriorityRestrictedThresholdEvent['args'];
		name: 'SetPriorityRestrictedThreshold';
	};
	SetPurchasingToken: {
		args: SetPurchasingTokenEvent['args'];
		name: 'SetPurchasingToken';
	};
	Unpaused: {
		args: UnpausedEvent['args'];
		name: 'Unpaused';
	};
	UpdateCertificate: {
		args: UpdateCertificateEvent['args'];
		name: 'UpdateCertificate';
	};
	UpdateMutualsFeePercentage: {
		args: UpdateMutualsFeePercentageEvent['args'];
		name: 'UpdateMutualsFeePercentage';
	};
	UpdateMutualsFeeWalletAddress: {
		args: UpdateMutualsFeeWalletAddressEvent['args'];
		name: 'UpdateMutualsFeeWalletAddress';
	};
}

export type PoolEvents = ContractEvents<PoolEventMap>;
