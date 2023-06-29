import { Balance } from '@ankr.com/ankr.js/dist/types';
import {
  Box,
  Button,
  Card,
  CardBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Tr,
  VStack,
} from '@chakra-ui/react';
import {
  components,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
} from 'chakra-react-select';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useToggle } from 'react-use';

import { formatCurrency, formatCurrencyAmount } from '@/lib/utils';
import useWithdrawSplit from '@/hooks/useWithdrawSplit';

import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import InputListbox from '@/components/Form/InputListbox';
import InputSwitch from '@/components/Form/InputSwitch';

import { useSplit } from '@/context/SplitContext';
import WithdrawModal from '@/templates/split/details/WithdrawTab/WithdrawModal';

import AssetCardHorizontal from './AssetCardHorizontal';

interface WithdrawData {
  assets?: Balance[];
  distribute: boolean;
}

function TokenSelectOption({
  ...props
}: OptionProps<Balance, true, GroupBase<Balance>>) {
  return (
    <components.Option {...props}>
      <AssetCardHorizontal
        {...props.data}
        selected={props.isSelected}
        active={props.isSelected}
      />
    </components.Option>
  );
}

function TokenSelectLabel({
  ...props
}: MultiValueGenericProps<Balance, true, GroupBase<Balance>>) {
  return (
    <components.MultiValueLabel {...props}>
      {props.data.tokenSymbol}
    </components.MultiValueLabel>
  );
}

function WithdrawFormInner() {
  const {
    watch,
    formState: { isValid },
  } = useFormContext<WithdrawData>();
  const assets = watch('assets');
  const distribute = watch('distribute');

  const { balance, accountShare, split } = useSplit();

  const total = assets?.reduce(
    (total, asset) => ({
      balance: total.balance + Number(asset?.balanceUsd || '0.00'),
      assetCount: total.assetCount + Number(asset.balance || '0.00'),
    }),
    { balance: 0, assetCount: 0 }
  ) || { balance: 0, assetCount: 0 };

  const userWithdrawal = Number(accountShare?.value || '0.00') * total?.balance;

  const totalWithdrawal = distribute ? total?.balance : userWithdrawal;

  const summary: Record<string, string> = {
    'Total Withdrawal': formatCurrency(totalWithdrawal),
    'Your Withdrawal': formatCurrency(userWithdrawal),
    'Withdrawal Fee': formatCurrency(0),
  };

  const { ...tx } = useWithdrawSplit(split.address, assets);
  const [isModalOpen, setIsModalOpen] = useToggle(false);

  return (
    <VStack spacing={'6'} alignItems={'grow'}>
      <FormGroup>
        <InputListbox<Balance, true>
          label='Assets'
          helperText={'Specify the tokens you want to withdraw.'}
          id='assets'
          validation={{
            validate: (v) => v.length > 0 || 'Please select at least one Asset',
            required: {
              value: true,
              message: 'Please select at least one Asset',
            },
          }}
          isMulti={true}
          options={balance?.assets || []}
          components={{
            Option: TokenSelectOption,
            MultiValueLabel: TokenSelectLabel,
          }}
        />
      </FormGroup>

      <FormGroup>
        <InputSwitch
          label={'Distribute'}
          id={'distribute'}
          helperText={
            'Specify whether you want to distribute assets to all the recipients of this split.'
          }
        />
      </FormGroup>

      <TableContainer>
        <Table size='sm'>
          <Tbody>
            {Object.keys(summary).map((name) => (
              <Tr key={name}>
                <Td>{name}</Td>
                <Td isNumeric>{summary[name]}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>
                <Text as='b'>You Receive</Text>
              </Td>
              <Td isNumeric>
                <Text as='b'>
                  {formatCurrency(userWithdrawal)} (
                  {formatCurrencyAmount(total.assetCount.toString())} tokens)
                </Text>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Box>
        <Button
          colorScheme='blue'
          disabled={!isValid || tx.isError || tx.isLoading}
          type={'button'}
          onClick={() => {
            tx.write?.();
            setIsModalOpen(true);
          }}
        >
          Withdraw
        </Button>
      </Box>

      <WithdrawModal
        {...tx}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </VStack>
  );
}

export function WithdrawForm() {
  const { balance } = useSplit();

  const assets = balance?.assets || [];

  return (
    <Form<WithdrawData> values={{ assets, distribute: false }}>
      <Card maxW='xl' variant='outline'>
        <CardBody>
          <WithdrawFormInner />
        </CardBody>
      </Card>
    </Form>
  );
}
