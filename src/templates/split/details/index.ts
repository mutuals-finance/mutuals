import { ActivityTab } from '@/templates/split/details/ActivityTab';
import { AssetsTab } from '@/templates/split/details/AssetsTab';
import { DepositTab } from '@/templates/split/details/DepositTab';
import { OverviewTab } from '@/templates/split/details/OverviewTab';
import { SettingsTab } from '@/templates/split/details/SettingsTab';
import { WithdrawTab } from '@/templates/split/details/WithdrawTab';

import { SplitTemplateTab } from '#/split';

const routes: SplitTemplateTab[] = [
  { label: 'Overview', slug: 'overview', component: OverviewTab },
  { label: 'Withdraw', slug: 'withdraw', component: WithdrawTab },
  { label: 'Deposit', slug: 'deposit', component: DepositTab },
  { label: 'Assets', slug: 'assets', component: AssetsTab },
  { label: 'Activity', slug: 'activity', component: ActivityTab },
  { label: 'Settings', slug: 'settings', component: SettingsTab },
];

export default routes;
