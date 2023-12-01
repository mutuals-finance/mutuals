import { OverviewTab } from '@/templates/split/details/OverviewTab';
import { SettingsTab } from '@/templates/split/settings';

import { SplitTemplateTab } from '#/split';

const routes: SplitTemplateTab[] = [
  { label: 'Overview', slug: '', component: OverviewTab },
  { label: 'Settings', slug: 'settings', component: SettingsTab },
];

export default routes;
