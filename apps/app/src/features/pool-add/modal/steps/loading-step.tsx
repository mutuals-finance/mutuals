import {
  Alert,
  DataListItem,
  DataListRoot,
  Icon,
  ProgressCircleRing,
  ProgressCircleRoot,
  Separator,
  type StackProps,
  Text,
  VStack,
} from "@mutuals/ui";
import { IoCheckmarkCircle } from "react-icons/io5";

interface LoadingStepProps extends StackProps {
  description?: string;
  error?: Error | null;
  isError?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  status?: string;
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
    <VStack alignItems={"stretch"} gap={"6"} {...props}>
      {isSuccess ? (
        <Icon color={"fg.success"} size="xl">
          <IoCheckmarkCircle />
        </Icon>
      ) : (
        isLoading && (
          <ProgressCircleRoot size={"sm"} value={null}>
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
        colorPalette={(() => {
          if (isError) {
            return "red";
          }
          if (isSuccess) {
            return "green";
          }
          return "gray";
        })()}
        orientation={"horizontal"}
      >
        <DataListItem grow={true} label={"Status"} value={status} />
      </DataListRoot>
    </VStack>
  );
}
