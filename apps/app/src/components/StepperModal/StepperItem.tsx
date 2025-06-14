import { ReactNode } from "react";
import { Text } from "@mutuals/ui";

export interface StepperItemState {
  id: string;
  title: ReactNode | string;
  disabled?: boolean;
  onNext?: (
    current: StepperModalStep,
    currentIndex: number,
  ) => Promise<void> | void;
  isError?: boolean;
  error?: Error;
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
