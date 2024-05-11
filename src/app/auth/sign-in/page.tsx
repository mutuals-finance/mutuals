'use client';

import { VStack } from '@chakra-ui/react';
import { useConnect } from 'wagmi';
import WalletConnectButton from '@/app/auth/sign-in/WalletConnectButton';

interface SignInPageProps {}

export default function SignInPage({}: SignInPageProps) {
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onSuccess() {
      console.log('success signing in');
    },
  });

  return (
    <VStack spacing={'3'}>
      {connectors.map((connector) => (
        <WalletConnectButton
          key={connector.id}
          onClick={() => connect({ connector })}
          connector={connector}
        />
      ))}
    </VStack>
  );
}
