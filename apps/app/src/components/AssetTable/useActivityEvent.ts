import { EventType } from "@/components/ActivityTable/types";

interface UseActivityEventProps {
  address: string;
}

export default function useActivityEvent({ address }: UseActivityEventProps) {
  function getEventType(fromAddress?: string) {
    return fromAddress === address ? EventType.Withdrawal : EventType.Deposit;
  }

  return { getEventType };
}
