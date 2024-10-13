import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  ProgressCircleRing,
  ProgressCircleRoot,
  Separator,
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
    <Box pb={"6"}>
      {isError ? (
        <Icon as={IoAlertCircle} color={"red"} />
      ) : isSuccess ? (
        <Icon as={IoCheckmarkCircle} color={"green"} />
      ) : (
        <ProgressCircleRoot value={null} size="sm">
          <ProgressCircleRing cap="round" />
        </ProgressCircleRoot>
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
          fontWeight={"500"}
          fontSize={"sm"}
        >
          {status}
        </Text>
      </Flex>

      <Separator />
    </Box>
  );
}

export function LoadingStep({
  description,
  error,
  ...props
}: LoadingStepProps) {
  return (
    <VStack gap={"6"} alignItems={"stretch"}>
      <LoadingStepIndicator {...props} />
      <Box>
        {!!error && (
          <Box>
            <Text color={"red"} pt={"1"} fontSize={"xs"}>
              {error?.message || "Unknown Error"}
            </Text>
          </Box>
        )}
        <Text>{description}</Text>
      </Box>
      <LoadingStepStatus {...props} />
    </VStack>
  );
}
