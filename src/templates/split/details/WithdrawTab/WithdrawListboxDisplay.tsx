import { type Balance } from '@ankr.com/ankr.js/';

type WithdrawListboxDisplayProps = { items: Balance[] };

export default function WithdrawListboxDisplay({
  items,
}: WithdrawListboxDisplayProps) {
  const slice = 2;
  let inner = '';

  if (items.length <= 0) {
    inner = 'No assets available for withdrawal';
  } else {
    const sliced = items.slice(0, slice).map(({ tokenName }) => tokenName);

    if (items.length < slice) {
      inner = sliced.join('');
    } else if (items.length > slice) {
      inner = `${sliced.join(', ')} and ${items.length - slice} more`;
    } else {
      inner = inner = sliced.join(' and ');
    }
  }
  return inner;
}
