import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Tooltip,
} from '@chakra-ui/react';

export function SuccessStep({
  contractAddress = '',
}: {
  contractAddress?: string;
}) {
  return (
    <Alert
      status='success'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      p={'6'}
    >
      <AlertIcon boxSize='6' mr={0} />
      <AlertTitle my={3} mb={1} fontSize='lg'>
        Congratulations
      </AlertTitle>
      <AlertDescription maxWidth='sm' my={'3'}>
        Your split was successfully created. You can now use its associated
        address{' '}
        <Tooltip label='Copy address' aria-label='Copy address'>
          {contractAddress}
        </Tooltip>{' '}
        to withdraw and deposit funds.
      </AlertDescription>

      <Button variant={'outline'} colorScheme={'green'}>
        View more
      </Button>
    </Alert>
  );
}
