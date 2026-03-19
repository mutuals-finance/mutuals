import { Text } from "@mutuals/ui";
import type { ReactNode } from "react";

export interface StepperItemState {
  disabled?: boolean;
  error?: Error;
  id: string;
  isError?: boolean;
  onNext?: (
    current: StepperModalStep,
    currentIndex: number
  ) => Promise<void> | void;
  title: ReactNode | string;
}

export interface StepperModalStep extends StepperItemState {
  children: (state: ItemState) => ReactNode;
  onNext?: (step: StepperModalStep, index: number) => void | Promise<void>;
}

export interface ItemState extends StepperItemState {
  index: number;
  isActive: boolean;
}

interface StepperItemProps extends ItemState {
  children: (state: ItemState) => ReactNode;
}

export default function StepperItem({ children, ...props }: StepperItemProps) {
  const { isActive, isError, error } = props;

  return (
    <>
      {isActive && (
        <>
          {children(props)}
          {isError && <Text>{error?.message || "Unknown Error"}</Text>}
        </>
      )}
    </>
  );
}
