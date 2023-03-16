import Input from '@/components/Form/Input';
import React, { useEffect, useState } from 'react';
import { AiOutlinePercentage } from 'react-icons/ai';
import FormList from './FormList';

export interface Payee {
  address: string;
  share: number;
}

interface PayeeListProps {
  value: Payee[];
  onChange: (value: Payee[]) => void;
}

export const initialPayee: Payee = {
  address: '',
  share: 100.0,
};

export default function PayeeList({ value, onChange }: PayeeListProps) {
  const maxShares = 100.0;

  const [maxShare, setMaxShares] = useState<number>(maxShares);

  useEffect(() => {
    setMaxShares(
      () => maxShares - value.reduce((total, p) => total + p.share, 0)
    );
  }, [value]);

  function updateAt(start: number, deleteCount: number, ...items: Payee[]) {
    value.splice(start, deleteCount, ...items);
    onChange(value);
  }

  return (
    <FormList<Payee>
      value={value}
      onAdd={(index) => updateAt(index, 0, { address: '', share: maxShare })}
      onRemove={(index) => updateAt(index, 1)}
    >
      {({ item, index }) => (
        <>
          <div className={'flex-1'}>
            <Input
              value={item.address}
              onChange={(event) =>
                updateAt(index, 1, {
                  address: event.target.value,
                  share: item.share,
                })
              }
              id={`payee-address-${index}`}
              label={'Wallet Address or ENS Name'}
            />
          </div>

          <div className={'w-32'}>
            <Input
              type={'number'}
              label={'Share'}
              min={0}
              max={maxShares}
              step='any'
              iconAfter={<AiOutlinePercentage />}
              onChange={(event) =>
                updateAt(index, 1, {
                  address: item.address,
                  share: parseFloat(event.target.value),
                })
              }
              id={`payee-share-${index}`}
              value={item.share}
            />
          </div>
        </>
      )}
    </FormList>
  );
}
