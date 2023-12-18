import { PropsWithChildren } from 'react';
import { Provider as AnkrProvider } from 'ankr-react';
import ApolloProvider from './ApolloProvider';
import { cookies } from 'next/headers';

export default function ServerProviders({ children }: PropsWithChildren) {
  const cookieStore = cookies();
  const delay = Number(
    cookieStore.get('apollo-x-custom-delay')?.value ?? 10000,
  );

  return <ApolloProvider delay={delay}>{children}</ApolloProvider>;
}
