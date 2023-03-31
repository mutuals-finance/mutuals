import { createContext, ReactNode, useContext, useState } from 'react';

import { ipfsResolveData } from '@/lib/utils';

import placeholder from '@/assets/images/bg.jpg';
import { useFragment } from '@/graphql/__generated__';
import {
  SplitDetailsFragmentFragment,
  SplitQuery,
} from '@/graphql/__generated__/graphql';
import { splitDetailsFragment } from '@/graphql/fragments';

type SplitDataType = SplitDetailsFragmentFragment & {
  metaData: { image: string; name: string };
};

type SplitContextType = {
  data: SplitDataType;
  setData: (data: SplitQuery) => void;
};

const defaultSplit = {
  id: '',
  address: '',
  totalShares: 0,
  shares: [],
  tokenWithdrawals: [],
  tokenDeposits: [],
  withdrawableTokens: [],
  txCount: 0,
  timestamp: null,
  blockNumber: 0,
  metaDataUri: '',
  metaData: { name: '', image: '' },
};

const SplitContext = createContext<SplitContextType | undefined>(undefined);

type SplitProviderProps = {
  children: ReactNode;
};

export function SplitProvider({ children }: SplitProviderProps) {
  const [data, _setData] = useState<SplitDataType>(defaultSplit);

  function create(data: SplitQuery) {
    console.log('setData', data);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const fragment = useFragment(splitDetailsFragment, data.split);

    if (!!fragment) {
      const image =
        ipfsResolveData(fragment.metaData.image || placeholder) || '';
      const name = fragment.metaData.name || 'Unknown Split';
      const metaData = { ...fragment.metaData, image, name };
      _setData({ ...fragment, metaData });
    }
  }

  return (
    <>
      <SplitContext.Provider value={{ data, setData }}>
        {children}
      </SplitContext.Provider>
    </>
  );
}

export function useSplit() {
  const context = useContext(SplitContext);

  if (!context)
    throw new Error('useSplit must be used inside a `SplitProvider`');

  return context;
}
