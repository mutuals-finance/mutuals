"use client";

import { ReactNode, useState } from "react";
import { useBoolean, useInterval } from "react-use";

export type CountdownTimerProps = {
  durationSeconds: number;
  onExpire?: () => void;
  children: (formattedTime: string, isExpired: boolean) => ReactNode;
};

export default function CountdownTimer({
  durationSeconds,
  onExpire,
  children,
}: CountdownTimerProps) {
  const [remainingSeconds, setRemainingSeconds] = useState(durationSeconds);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      setRemainingSeconds((prev) => {
        const newValue = prev - 1;
        if (newValue <= 0) {
          toggleIsRunning(false);
          onExpire?.();
          return 0;
        }
        return newValue;
      });
    },
    isRunning ? 1000 : null,
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return <>{children(formatTime(remainingSeconds), remainingSeconds <= 0)}</>;
}
