import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  ProgressCircleRing,
  ProgressCircleRoot,
  Separator,
  Alert,
} from "@mutuals/ui";
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
    <Box>
      {isSuccess ? (
        <Icon size="xl" color={"fg.success"}>
          <IoCheckmarkCircle />
        </Icon>
      ) : (
        !isError && (
          <ProgressCircleRoot value={null} size="sm">
            <ProgressCircleRing cap="round" />
          </ProgressCircleRoot>
        )
      )}
    </Box>
  );
}

function LoadingStepStatus({
  status,
  isError,
  isSuccess,
}: LoadingStepStatusProps) {
  return (
    <Box>
      <Separator />
      <Flex alignItems={"center"} justifyContent={"space-between"} py="3">
        <Text display={"block"} fontSize={"sm"}>
          Status
        </Text>
        <Text
          display={"block"}
          color={isError ? "red" : isSuccess ? "green" : "inherit"}
          fontWeight={"medium"}
          fontSize={"sm"}
        >
          {status}
        </Text>
      </Flex>
    </Box>
  );
}

export function LoadingStep({
  description,
  error,
  ...props
}: LoadingStepProps) {
  return (
    <VStack gap={"2"} alignItems={"stretch"}>
      <LoadingStepIndicator {...props} />

      {!!error && (
        <Alert status="error">{error?.message || "Unknown Error"}</Alert>
      )}

      <Box>
        <Text>{description}</Text>
      </Box>
      <LoadingStepStatus {...props} />
    </VStack>
  );
}
