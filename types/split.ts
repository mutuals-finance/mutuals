import {
  GetAccountBalanceReply,
  TokenTransfer,
} from '@ankr.com/ankr.js/dist/types';

import { SplitDetailsFragmentFragment } from '@/lib/graphql/__generated__/graphql';

export interface SplitTemplateTabProps extends SplitDetailsFragmentFragment {
  balance?: GetAccountBalanceReply;
  transfers?: TokenTransfer[];
}

export interface SplitTemplateTab {
  label: string;
  slug: string;
  component: (props: SplitTemplateTabProps) => JSX.Element;
}
