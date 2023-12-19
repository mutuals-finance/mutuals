import { Icon } from '@chakra-ui/icon';
import {
  Box,
  CircularProgress,
  Divider,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoAlertCircle, IoCheckmarkCircle } from 'react-icons/io5';

interface LoadingStepProps {
  description?: string;
  status?: string;
  error?: Error | null;
  isError?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
}

type LoadingStepStatusProps = Omit<LoadingStepProps, 'description'>;

type LoadingStepIndicatorProps = Omit<LoadingStepStatusProps, 'status'>;

function LoadingStepIndicator({
  isError,
  isSuccess,
}: LoadingStepIndicatorProps) {
  return (
    <Box pb={'6'}>
      {isError ? (
        <Icon as={IoAlertCircle} color={'red'} />
      ) : isSuccess ? (
        <Icon as={IoCheckmarkCircle} color={'green'} />
      ) : (
        <CircularProgress isIndeterminate color={'gray.900'} />
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
      <Divider />
      <Flex alignItems={'center'} justifyContent={'space-between'} py='3'>
        <Text display={'block'} fontSize={'sm'}>
          Status
        </Text>
        <Text
          display={'block'}
          color={isError ? 'red' : isSuccess ? 'green' : 'inherit'}
          fontWeight={'500'}
          fontSize={'sm'}
        >
          {status}
        </Text>
      </Flex>

      <Divider />
    </Box>
  );
}

export function LoadingStep({
  description,
  error,
  ...props
}: LoadingStepProps) {
  return (
    <VStack spacing={'6'} alignItems={'stretch'}>
      <LoadingStepIndicator {...props} />
      <Box>
        {!!error && (
          <Box>
            <Text color={'red'} pt={'1'} fontSize={'xs'}>
              {error?.message || 'Unknown Error'}
            </Text>
          </Box>
        )}
        <Text>{description}</Text>
      </Box>
      <LoadingStepStatus {...props} />
    </VStack>
  );
}
