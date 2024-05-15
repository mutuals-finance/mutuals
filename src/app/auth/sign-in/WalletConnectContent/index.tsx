'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { Connector, useConnect } from 'wagmi';
import WalletConnectButton from '@/app/auth/sign-in/WalletConnectButton';
import { partition } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface WalletConnectContentProps {
  redirectURL?: string;
}

export default function WalletConnectContent({
  redirectURL,
}: WalletConnectContentProps) {
  const router = useRouter();

  const { connectAsync, connectors } = useConnect();

  const connectAndRedirect = async (
    variables: Parameters<typeof connectAsync>[0],
  ) => {
    const url = redirectURL ?? '/';
    await connectAsync(variables);
    router.push(url);
  };

  const [recentConnectors, popularConnectors] = partition(
    connectors as Connector[],
    (c) => c.type === 'injected',
  );

  return (
    <VStack spacing={'6'} alignItems={'stretch'}>
      {(recentConnectors?.length ?? 0) > 0 && (
        <Box>
          <Text variant={'label'} fontSize='sm' mb={'3'}>
            Recent
          </Text>
          <VStack spacing={'3'}>
            {recentConnectors?.map((connector) => (
              <WalletConnectButton
                key={connector.id}
                onClick={() => connectAndRedirect({ connector })}
                connector={connector}
              />
            ))}
          </VStack>
        </Box>
      )}

      <Box>
        <Text variant={'label'} fontSize='sm' mb={'3'}>
          Popular
        </Text>
        <VStack spacing={'3'}>
          {popularConnectors?.map((connector) => (
            <WalletConnectButton
              key={connector.id}
              onClick={() => connectAndRedirect({ connector })}
              connector={connector}
            />
          ))}
        </VStack>
      </Box>
    </VStack>
  );
}
