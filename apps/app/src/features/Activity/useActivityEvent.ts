import { EventType } from "@/features/Activity/types";

interface UseActivityEventProps {
  address: string;
}

export default function useActivityEvent({ address }: UseActivityEventProps) {
  function getEventType(tx: { fromAddress?: string; toAddress?: string }) {
    const _address = address.toLowerCase();
    return tx.fromAddress?.toLowerCase() === _address
      ? EventType.Withdrawal
      : EventType.Deposit;
  }

  return { getEventType };
}
