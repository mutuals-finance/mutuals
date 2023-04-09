import {
  AnkrProvider,
  type GetAccountBalanceReply,
  type GetTokenTransfersReply,
  type GetTransfersRequest,
} from '@ankr.com/ankr.js';
import { useAccountBalance } from 'ankr-react';
import { createContext, useContext } from 'react';
import { useAsync } from 'react-use';
import { useAccount } from 'wagmi';

import {
  ShareFragmentFragment,
  SplitDetailsFragmentFragment,
} from '@/lib/graphql/__generated__/graphql';
import { formatRoundNumber } from '@/lib/utils';

function useTokenTransfers(params: GetTransfersRequest) {
  const ankrjsProvider = new AnkrProvider();
  return useAsync(() => ankrjsProvider.getTokenTransfers(params));
}

const blockchain = 'eth';
const address = '0x388c818ca8b9251b393131c08a736a67ccb19297';

interface SplitContextType {
  split: SplitDetailsFragmentFragment;
  accountShare?: ShareFragmentFragment;
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

  const { address: accountAddress } = useAccount();

  const accountShare = split.shares.find(
    (share) => share.payee.toLowerCase() === accountAddress?.toLowerCase()
  );

  return (
    <SplitContext.Provider
      value={{
        split: { ...split, address },
        balance,
        transfers,
        accountShare,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
};
