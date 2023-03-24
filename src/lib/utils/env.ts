import { NODE_ENV } from '@/lib/constants';

export function isDev() {
  return NODE_ENV !== 'production';
}
