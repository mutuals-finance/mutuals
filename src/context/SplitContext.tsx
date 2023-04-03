import {
  AnkrProvider,
  type GetAccountBalanceReply,
  type GetTokenTransfersReply,
  type GetTransfersRequest,
} from '@ankr.com/ankr.js';
import { useAccountBalance } from 'ankr-react';
import { createContext, useContext } from 'react';
import { useAsync } from 'react-use';

import { SplitDetailsFragmentFragment } from '@/lib/graphql/__generated__/graphql';

function useTokenTransfers(params: GetTransfersRequest) {
  const ankrjsProvider = new AnkrProvider();
  return useAsync(() => ankrjsProvider.getTokenTransfers(params));
}

const blockchain = 'eth';
const address = '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1';

interface SplitContextType {
  split: SplitDetailsFragmentFragment;
  balance?: GetAccountBalanceReply;
  transfers?: GetTokenTransfersReply;
}

const SplitContext = createContext<SplitContextType | null>(null);

export const useSplit = () => {
  const context = useContext(SplitContext);
  if (!context)
    throw new Error('useSplits must be used within a SplitProvider');
  return context;
};

interface SplitProviderProps {
  split: SplitDetailsFragmentFragment;
}

export const SplitProvider = ({
  children,
  split,
}: React.PropsWithChildren<SplitProviderProps>) => {
  const { data: balance } = useAccountBalance({
    walletAddress: address,
    blockchain,
    onlyWhitelisted: true,
  });

  const { value: transfers } = useTokenTransfers({
    address: [address],
    blockchain,
    descOrder: true,
    pageSize: 20,
  });

  return (
    <SplitContext.Provider
      value={{
        split: { ...split, address },
        balance,
        transfers,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
};
