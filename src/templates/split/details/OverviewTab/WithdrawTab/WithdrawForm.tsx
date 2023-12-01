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
  chakraComponents,
  ControlProps,
  GroupBase,
  MultiValueGenericProps,
  OptionProps,
  ValueContainerProps,
} from 'chakra-react-select';
import React, { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useToggle } from 'react-use';

import { formatCurrency, formatCurrencyAmount, formatPrice } from '@/lib/utils';
import useWithdrawSplit from '@/hooks/useWithdrawSplit';

import ContentCard from '@/components/ContentCard';
import Form from '@/components/Form';
import FormGroup from '@/components/Form/FormGroup';
import InputListbox from '@/components/Form/InputListbox';
import InputSwitch from '@/components/Form/InputSwitch';

import { useSplit } from '@/context/SplitContext';
import WithdrawModal from '@/templates/split/details/OverviewTab/WithdrawTab/WithdrawModal';

import AssetCardHorizontal from './AssetCardHorizontal';

interface WithdrawData {
  assets?: Balance[];
  distribute: boolean;
}

function TokenSelectOption({
  ...props
}: OptionProps<Balance, true, GroupBase<Balance>>) {
  return (
    <chakraComponents.Option {...props}>
      <AssetCardHorizontal
        {...props.data}
        selected={props.isSelected}
        active={props.isSelected}
      />
    </chakraComponents.Option>
  );
}

function TokenSelectLabel({
  ...props
}: MultiValueGenericProps<Balance, true, GroupBase<Balance>>) {
  return (
    <chakraComponents.MultiValueLabel {...props}>
      {props.data.tokenSymbol}
    </chakraComponents.MultiValueLabel>
  );
}

const TokenSelectValueContainer = ({
  children,
  ...props
}: ValueContainerProps<Balance, true, GroupBase<Balance>>) => {
  const assets = props.getValue();

  return (
    <chakraComponents.ValueContainer {...props}>
      <Box w={'100%'} flex={'1'}>
        {assets.length || 0}{' '}
      </Box>
    </chakraComponents.ValueContainer>
  );
};

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
    { balance: 0, assetCount: 0 },
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
    <VStack spacing={'6'} alignItems={'stretch'}>
      <FormGroup>
        <InputListbox<Balance, true, GroupBase<Balance>>
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

      <FormGroup>
        <InputSwitch
          label={'Distribute'}
          id={'distribute'}
          helperText={
            'Specify whether you want to distribute assets to all the recipients of this split.'
          }
        />
      </FormGroup>

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

      <Box>
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
      <WithdrawFormInner />
    </Form>
  );
}
