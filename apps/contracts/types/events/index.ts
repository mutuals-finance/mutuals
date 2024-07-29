import type { PoolFactory, Pool } from '@/typechain-types/index';
import type { Contracts } from '@/types/contracts';

import type { PoolFactoryEvents } from './PoolFactory';
import type { PoolEvents } from './Pool';

export type ContractWithEvents = Contracts[keyof Contracts];

export type ContractEventInterface<TInterface extends ContractWithEvents> =
	TInterface extends PoolFactory
		? PoolFactoryEvents
		: TInterface extends Pool
			? PoolEvents
			: never;

export type ContractEventNames<TInterface extends ContractWithEvents> =
	ContractEventInterface<TInterface>['name'];

export type NamedLogs<
	TContract extends ContractWithEvents,
	TEventNames extends ContractEventNames<TContract>[] = Exclude<
		ContractEventNames<TContract>,
		undefined
	>[],
> = Extract<
	ContractEventInterface<TContract>,
	{
		name: TEventNames[number];
		args: ContractEventInterface<TContract>['args'];
	}
>[];
