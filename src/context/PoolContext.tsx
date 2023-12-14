import { type GetAccountBalanceReply } from '@ankr.com/ankr.js';
import { createContext, PropsWithChildren, useContext } from 'react';
import {
  ShareFragmentFragment,
  SplitDetailsFragmentFragment,
} from '@/lib/graphql/__generated__/graphql';
import { getAccountBalance } from '@/lib/ankr';
import { getMetadata } from '@/lib/split';

const blockchain = 'eth';
const address = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';

interface PoolContextType {
  pool: SplitDetailsFragmentFragment;
  metaData: any;
  accountShare?: ShareFragmentFragment;
  balance?: GetAccountBalanceReply;
}

const PoolContext = createContext<PoolContextType | null>(null);

export const usePool = () => {
  const context = useContext(PoolContext);
  if (!context) throw new Error('usePool must be used within a PoolProvider');
  return context;
};

interface PoolProviderProps {
  pool: SplitDetailsFragmentFragment;
}

export const PoolProvider = ({
  children,
  pool,
}: PropsWithChildren<PoolProviderProps>) => {
  //const { address: accountAddress } = useAccount();
  const accountAddress = '0x84f36e3afa3d0994401b24f1eabd4fddbdc715db';
  const accountShare = pool.shares.find(
    (share) => share.payee.toLowerCase() === accountAddress?.toLowerCase(),
  );

  return (
    <PoolContext.Provider
      value={{
        pool: { ...pool, address },
        metaData: {},
        balance: null,
        accountShare,
      }}
    >
      {children}
    </PoolContext.Provider>
  );
};
