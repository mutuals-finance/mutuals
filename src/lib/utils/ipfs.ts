import { StaticImageData } from 'next/dist/client/image';

export function ipfsResolveData(data?: StaticImageData | string | null) {
  switch (typeof data) {
    case 'string':
      return ipfsUrlFromUri(data);
    case 'object':
      return data?.src;
    default:
      return undefined;
  }
}

export function ipfsUrlFromUri(uri: string) {
  return uri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/');
}
