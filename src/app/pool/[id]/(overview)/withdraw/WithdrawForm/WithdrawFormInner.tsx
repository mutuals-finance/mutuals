'use client';

import { Balance } from '@ankr.com/ankr.js/dist/types';
import {
  Box,
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { GroupBase } from 'chakra-react-select';
import React, { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';
import { useToggle } from 'react-use';

import { formatCurrencyAmount, formatPrice } from '@/lib/utils';
import useWithdrawSplit from '@/hooks/useWithdrawSplit';

import FormGroup from '@/components/Form/FormGroup';
import InputListbox from '@/components/Form/InputListbox';
import InputSwitch from '@/components/Form/InputSwitch';

import WithdrawModal from '@/app/pool/[id]/(overview)/withdraw/WithdrawModal';

import {
  TokenSelectLabel,
  TokenSelectOption,
  TokenSelectValueContainer,
} from '@/app/pool/[id]/(overview)/withdraw/WithdrawForm/TokenSelectComponents';
import { GetAccountBalanceReply } from '@ankr.com/ankr.js';
import {
  FragmentType,
  useFragment as getFragment,
} from '@/lib/graphql/__generated__';
import { shareFragment, splitBaseFragment } from '@/lib/graphql/fragments';

export interface WithdrawFormInnerProps {
  balance?: GetAccountBalanceReply;
  shares?: FragmentType<typeof shareFragment>[];
  pool?: FragmentType<typeof splitBaseFragment> | null;
}

export interface WithdrawData {
  assets?: Balance[];
  distribute: boolean;
}

export default function WithdrawFormInner({
  balance,
  children,
  ...props
}: PropsWithChildren<WithdrawFormInnerProps>) {
  const {
    watch,
    formState: { isValid },
  } = useFormContext<WithdrawData>();
  const shares = props.shares?.map((s) => getFragment(shareFragment, s));
  const pool = getFragment(splitBaseFragment, props.pool);

  const share = !!shares ? shares[0] : null;
  const assets = watch('assets');
  const distribute = watch('distribute');

  const total = assets?.reduce(
    (total, asset) => ({
      balance: total.balance + Number(asset?.balanceUsd || '0.00'),
      assetCount: total.assetCount + Number(asset.balance || '0.00'),
    }),
    { balance: 0, assetCount: 0 },
  ) || { balance: 0, assetCount: 0 };

  const userWithdrawal = Number(share?.value || '0.00') * total?.balance;

  const totalWithdrawal = distribute ? total?.balance : userWithdrawal;

  const summary: Record<string, string> = {
    'Total Withdrawal': formatPrice(totalWithdrawal.toString()),
    'Your Withdrawal': formatPrice(userWithdrawal.toString()),
    'Withdrawal Fee': formatPrice('0'),
  };

  const { ...tx } = useWithdrawSplit(pool?.address, assets);
  const [isModalOpen, setIsModalOpen] = useToggle(false);

  return (
    <>
      <WithdrawModal
        {...tx}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <VStack
        p='6'
        alignItems={'stretch'}
        flex={'1'}
        gap={'6'}
        overflowY={'auto'}
      >
        {children}

        <FormGroup>
          <InputSwitch label={'Distribute'} id={'distribute'} />
        </FormGroup>

        <FormGroup>
          <InputListbox<Balance, true, GroupBase<Balance>>
            label='Assets'
            helperText={'Specify the tokens you want to withdraw.'}
            id='assets'
            validation={{
              validate: (v) =>
                v.length > 0 || 'Please select at least one asset',
              required: {
                value: true,
                message: 'Please select at least one asset',
              },
            }}
            isMulti={true}
            selectedOptionStyle='check'
            hideSelectedOptions={false}
            options={balance?.assets || []}
            getOptionValue={(option) =>
              option.blockchain +
              ':' +
              option.contractAddress +
              ':' +
              option.tokenName
            }
            isSearchable={false}
            closeMenuOnSelect={false}
            components={{
              Option: TokenSelectOption,
              MultiValueLabel: TokenSelectLabel,
              ValueContainer: TokenSelectValueContainer,
            }}
          />
        </FormGroup>
      </VStack>

      <Stack
        flexShrink={'0'}
        p={'6'}
        gap={'6'}
        borderTop={'1px solid'}
        borderColor={'border.1'}
      >
        <TableContainer overflow={'hidden'}>
          <Table size='sm'>
            <Tbody>
              {Object.keys(summary).map((name) => (
                <Tr key={name}>
                  <Td px={'0'}>{name}</Td>
                  <Td isNumeric px={'0'}>
                    {summary[name]}
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td px={'0'}>
                  <Text as='b'>You Receive</Text>
                </Td>
                <Td px={'0'} isNumeric>
                  <Text as='b'>
                    {formatPrice(userWithdrawal.toString())} (
                    {formatCurrencyAmount(total.assetCount.toString())} tokens)
                  </Text>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>

        <Button
          colorScheme='primary'
          disabled={!isValid || tx.isError || tx.isLoading}
          type={'button'}
          w={'full'}
          onClick={() => {
            tx.write?.();
            setIsModalOpen(true);
          }}
        >
          Withdraw
        </Button>
      </Stack>
    </>
  );
}
