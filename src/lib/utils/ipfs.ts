import { ImageProps } from '@chakra-ui/next-js';

export function ipfsResolveData(data?: ImageProps['src'] | null) {
  switch (typeof data) {
    case 'string':
      return ipfsUrlFromUri(data);
    case 'object':
      return data || '';
    default:
      return '';
  }
}

export function ipfsUrlFromUri(uri: string) {
  return uri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/');
}
