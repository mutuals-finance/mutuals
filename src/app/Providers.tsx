import { PropsWithChildren } from 'react';
import ApolloProvider from '@/app/ApolloProvider';
import WagmiProvider from '@/app/WagmiProvider';
import ChakraProvider from '@/app/ChakraProvider';
import AnkrProvider from '@/app/AnkrProvider';

export default function Providers({ children }: PropsWithChildren) {
  //const cookieStore = cookies();
  const delay = 1000; //Number(cookieStore.get('apollo-x-custom-delay')?.value ?? 1000);

  return (
    <ChakraProvider>
      <ApolloProvider delay={delay}>
        <AnkrProvider>
          <WagmiProvider>{children}</WagmiProvider>
        </AnkrProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}
