import LoadingSpinner from "@/components/LoadingSpinner";
import { IoAlertCircle, IoCheckmarkCircle } from "react-icons/io5";

interface LoadingStepProps {
  description?: string;
  status?: string;
  error?: Error | null;
  isError?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
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
        className={"inline-flex w-8 h-8 items-center justify-center text-3xl"}
      >
        {isError ? (
          <IoAlertCircle className={"block text-error"} />
        ) : isSuccess ? (
          <IoCheckmarkCircle className={"block text-green-500"} />
        ) : (
          <LoadingSpinner color={"outline"} size={"xl"} />
        )}
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
    <div className={"flex items-center justify-between py-3 border-y"}>
      <span className={"block label"}>Status</span>
      <span
        className={`block font-semibold text-xs ${
          isError ? "text-error" : ""
        } ${isSuccess ? "text-green-500" : ""}`}
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
          <div className={"text-error text-xs pt-1"}>
            <p>{error?.message || "Unknown Error"}</p>{" "}
          </div>
        )}
        <p>{description}</p>
      </div>
      <LoadingStepStatus {...props} />
    </div>
  );
}
