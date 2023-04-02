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
const address = '0xdafea492d9c6733ae3d56b7ed1adb60692c98bc5';

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
  /*
    balance?: GetAccountBalanceReply;
    transfers?: TokenTransfer[];
*/

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
        split,
        balance,
        transfers,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
};
