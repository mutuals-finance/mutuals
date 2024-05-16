import type { LinkProps } from '@chakra-ui/next-js';

const hideMobile = {
  // display: ['none', null, 'block'],
};

export default [
  { id: 'home', label: 'Home', href: '/' },
  {
    href: '/pricing',
    label: 'Pricing',
    ...hideMobile,
  },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'support', label: 'Support', href: '/support' },
] as (LinkProps & { label: string })[];
