import { getAPIClient } from '@/lib/api/util';
import { ANKR_URL } from '@/lib/constants';

export const ankrClient = getAPIClient(ANKR_URL);
