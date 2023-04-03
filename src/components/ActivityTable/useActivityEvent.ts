import { EventType } from '@/components/ActivityTable/types';

interface UseActivityEventProps {
  address: string;
}

export default function useActivityEvent({ address }: UseActivityEventProps) {
  function getEventType(tx: { fromAddress?: string; toAddress?: string }) {
    console.log('fromAddress', 'address', {
      toAddress: tx.toAddress,
      fromAddress: tx.fromAddress,
      address,
    });
    const _address = address.toLowerCase();
    return tx.fromAddress?.toLowerCase() === _address
      ? EventType.Withdrawal
      : EventType.Deposit;
  }

  return { getEventType };
}
