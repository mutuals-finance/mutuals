import { FragmentType, useFragment } from "@/lib/graphql/__generated__";
import {
  contractURIUpdateFragment,
  paymentReceiveFragment,
  paymentReleaseFragment,
  splitBaseFragment,
  tokenFragment,
  transactionBaseFragment,
  transactionDetailsFragment,
} from "@/lib/graphql/fragments";
import { formatAmount } from "@/lib/utils";
import { EventType, SplitEvent } from "./types";

function useEventContractURIUpdate(
  fragment: FragmentType<typeof contractURIUpdateFragment>
) {
  const event = useFragment(contractURIUpdateFragment, fragment);
  const tx = useFragment(transactionBaseFragment, event.transaction);

  return {
    event: EventType.ContractURIUpdate,
    price: "",
    by: event.origin,
    to: "",
    timestamp: tx.timestamp,
  } as SplitEvent;
}

function useEventPaymentReceive(
  fragment: FragmentType<typeof paymentReceiveFragment>
) {
  const event = useFragment(paymentReceiveFragment, fragment);
  const tx = useFragment(transactionBaseFragment, event.transaction);
  const split = useFragment(splitBaseFragment, event.split);
  const token = useFragment(tokenFragment, event.token);

  return {
    event: EventType.PaymentReceive,
    price: `+ ${formatAmount(event.amount, token.decimals)} ${token.symbol}`,
    by: event.from,
    to: split.address,
    timestamp: tx.timestamp,
  } as SplitEvent;
}

function useEventPaymentRelease(
  fragment: FragmentType<typeof paymentReleaseFragment>
) {
  const event = useFragment(paymentReleaseFragment, fragment);
  const tx = useFragment(transactionBaseFragment, event.transaction);
  const split = useFragment(splitBaseFragment, event.split);
  const token = useFragment(tokenFragment, event.token);

  return {
    event: EventType.PaymentRelease,
    price: `- ${formatAmount(event.amount, token.decimals)} ${token.symbol}`,
    by: split.address,
    to: event.origin,
    timestamp: tx.timestamp,
  };
}

export function useActivityEvents(
  fragment: FragmentType<typeof transactionDetailsFragment>
) {
  const tx = useFragment(transactionDetailsFragment, fragment);
  const updates = tx.contractURIUpdates.map(useEventContractURIUpdate);
  const receives = tx.paymentReceives.map(useEventPaymentReceive);
  const releases = tx.paymentReleases.map(useEventPaymentRelease);

  return [...updates, ...receives, ...releases] as SplitEvent[];
}
