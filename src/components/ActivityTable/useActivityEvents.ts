import { FragmentType, useFragment } from '@/graphql/__generated__';
import {
  contractURIUpdateFragment,
  depositFragment,
  withdrawalFragment,
  splitBaseFragment,
  tokenFragment,
  transactionBaseFragment,
  transactionDetailsFragment,
} from '@/graphql/fragments';
import { formatAmount } from '@/lib/utils';
import { EventType, SplitEvent } from './types';
import { TransactionDetailsFragmentFragment } from '@/graphql/__generated__/graphql';

function useEventContractURIUpdate(
  fragment: FragmentType<typeof contractURIUpdateFragment>
) {
  const event = useFragment(contractURIUpdateFragment, fragment);
  const tx = useFragment(transactionBaseFragment, event.transaction);

  return {
    event: EventType.ContractURIUpdate,
    price: '',
    by: event.origin,
    to: '',
    timestamp: tx.timestamp,
  } as SplitEvent;
}

function useEventDeposit(fragment: FragmentType<typeof depositFragment>) {
  const event = useFragment(depositFragment, fragment);
  const tx = useFragment(transactionBaseFragment, event.transaction);
  const split = useFragment(splitBaseFragment, event.split);
  const token = useFragment(tokenFragment, event.token);

  return {
    event: EventType.Deposit,
    price: `+ ${formatAmount(event.amount, token.decimals)} ${token.symbol}`,
    by: event.from,
    to: split.address,
    timestamp: tx.timestamp,
  } as SplitEvent;
}

function useEventWithdrawal(fragment: FragmentType<typeof withdrawalFragment>) {
  const event = useFragment(withdrawalFragment, fragment);
  const tx = useFragment(transactionBaseFragment, event.transaction);
  const split = useFragment(splitBaseFragment, event.split);
  const token = useFragment(tokenFragment, event.token);

  return {
    event: EventType.Withdrawal,
    price: `- ${formatAmount(event.amount, token.decimals)} ${token.symbol}`,
    by: split.address,
    to: event.origin,
    timestamp: tx.timestamp,
  };
}

export function useActivityEvents(
  fragment: TransactionDetailsFragmentFragment
) {
  const tx = useFragment(
    transactionDetailsFragment,
    fragment as FragmentType<typeof transactionDetailsFragment>
  );
  const updates = tx.contractURIUpdates.map(useEventContractURIUpdate);
  const receives = tx.deposits.map(useEventDeposit);
  const releases = tx.withdrawals.map(useEventWithdrawal);

  return [...updates, ...receives, ...releases] as SplitEvent[];
}
