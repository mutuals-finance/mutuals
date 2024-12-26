import {
  Text,
  VStack,
  Icon,
  ProgressCircleRing,
  ProgressCircleRoot,
  Separator,
  Alert,
  StackProps,
  DataListRoot,
  DataListItem,
} from "@mutuals/ui";
import { IoCheckmarkCircle } from "react-icons/io5";

interface LoadingStepProps extends StackProps {
  description?: string;
  status?: string;
  error?: Error | null;
  isError?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
}

export function LoadingStep({
  description,
  error,
  status,
  isError,
  isLoading,
  isSuccess,
  ...props
}: LoadingStepProps) {
  return (
    <VStack gap={"6"} alignItems={"stretch"} {...props}>
      {isSuccess ? (
        <Icon size="xl" color={"fg.success"}>
          <IoCheckmarkCircle />
        </Icon>
      ) : (
        isLoading && (
          <ProgressCircleRoot value={null} size={"sm"}>
            <ProgressCircleRing cap="round" css={{ "--thickness": "2px" }} />
          </ProgressCircleRoot>
        )
      )}

      <Text>{description}</Text>

      {!!error && (
        <Alert status="error">{error?.message || "Unknown Error"}</Alert>
      )}

      <Separator />

      <DataListRoot
        orientation={"horizontal"}
        colorPalette={isError ? "red" : isSuccess ? "green" : "gray"}
      >
        <DataListItem grow={true} label={"Status"} value={status} />
      </DataListRoot>
    </VStack>
  );
}
