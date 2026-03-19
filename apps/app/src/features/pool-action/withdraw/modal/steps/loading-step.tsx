import { Box } from "@mutuals/ui";
import { IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5";

interface LoadingStepProps {
  description?: string;
  error?: Error | null;
  isError?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  status?: string;
}

type LoadingStepStatusProps = Omit<LoadingStepProps, "description">;

type LoadingStepIndicatorProps = Omit<LoadingStepStatusProps, "status">;

function LoadingStepIndicator({
  isError,
  isSuccess,
}: LoadingStepIndicatorProps) {
  return (
    <div className={"pb-6"}>
      <div
        className={"inline-flex h-8 w-8 items-center justify-center text-3xl"}
      >
        {isError && <IoAlertCircle className={"block text-error"} />}
        {isSuccess && !isError && (
          <IoCheckmarkCircle className={"block text-green-500"} />
        )}
        {!(isError || isSuccess) && <Box />}
      </div>
    </div>
  );
}

function LoadingStepStatus({
  status,
  isError,
  isSuccess,
}: LoadingStepStatusProps) {
  return (
    <div className={"flex items-center justify-between border-y py-3"}>
      <span className={"label block"}>Status</span>
      <span
        className={`block font-semibold text-xs ${isError && "text-error"} ${isSuccess && "text-success"}`}
      >
        {status}
      </span>
    </div>
  );
}

export function LoadingStep({
  description,
  error,
  ...props
}: LoadingStepProps) {
  return (
    <div className={"flex flex-col space-y-6"}>
      <LoadingStepIndicator {...props} />
      <div>
        {!!error && (
          <div className={"pt-1 text-error text-xs"}>
            <p>{error?.message || "Unknown Error"}</p>{" "}
          </div>
        )}
        <p>{description}</p>
      </div>
      <LoadingStepStatus {...props} />
    </div>
  );
}
