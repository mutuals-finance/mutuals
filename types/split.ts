import { GetAccountBalanceReply } from '@ankr.com/ankr.js/dist/types';

import { SplitDetailsFragmentFragment } from '@/lib/graphql/__generated__/graphql';

export interface SplitTemplateTabProps extends SplitDetailsFragmentFragment {
  balance?: GetAccountBalanceReply;
}

export interface SplitTemplateTab {
  label: string;
  slug: string;
  component: (props: SplitTemplateTabProps) => JSX.Element;
}
