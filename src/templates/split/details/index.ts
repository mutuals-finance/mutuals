import { OverviewTab } from '@/templates/split/details/OverviewTab';
import { SettingsTab } from '@/templates/split/details/SettingsTab';

import { SplitTemplateTab } from '#/split';

const routes: SplitTemplateTab[] = [
  { label: 'Overview', slug: 'overview', component: OverviewTab },
  // { label: 'About', slug: 'about', component: AboutTab },
  { label: 'Settings', slug: 'settings', component: SettingsTab },
];

export default routes;
