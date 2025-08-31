import { MeQuery } from "@mutuals/graphql-client-nextjs";
import { getAddress } from "ethers";

export function partition<T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean,
) {
  return array.reduce(
    function (result: T[][], element, i) {
      callback(element, i, array)
        ? result[0]?.push(element)
        : result[1]?.push(element);

      return result;
    },
    [[], []],
  );
}

export function walletMapFromViewerQuery(query?: MeQuery) {
  if (
    !(query?.viewer && "user" in query.viewer) // && query.viewer.user?.wallets)
  ) {
    return {};
  }

  return [].reduce(
    //query.viewer.user.wallets
    (m, w) => ({
      ...m,
      ...{
        [getAddress("w?.chainAddress?.address")]: true,
      },
    }),
    {} as { [key: string]: boolean },
  );
}
