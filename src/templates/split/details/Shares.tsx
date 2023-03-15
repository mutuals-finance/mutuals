import React from "react";
import Box from "@/components/Box";
import { shortenAddress } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import { shareFragment } from "@/graphql/fragments";
import { FragmentType, useFragment } from "@/graphql/__generated__";
import { ShareFragmentFragment } from "@/graphql/__generated__/graphql";
import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("@/components/PieChart"), { ssr: false });
type ShareFragment = FragmentType<typeof shareFragment>;

interface ShareItemProps {
  share: ShareFragmentFragment;
}
function ShareItem({ share }: ShareItemProps) {
  return (
    <li className={`block p-1`}>
      <div
        className={`flex flex-col p-2 ${
          false ? "bg-default-2 rounded-default" : ""
        }`}
      >
        <div className={`flex items-center space-x-2`}>
          <UserAvatar address={share.payee} className={`w-6 h-6`} />
          <h4 className={"font-semibold"}>{shortenAddress(share.payee)}</h4>
        </div>

        <span className={"block label leading-none ml-8"}>{share.value} %</span>
      </div>
    </li>
  );
}

export function Shares(props: { shares: ShareFragment[] }) {
  const shares = props.shares.map((share) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFragment(shareFragment, share);
  });

  return (
    <Box className={"lg:col-span-3"} title={"Shares"}>
      <div className={"grid grid-cols-2 gap-3 lg:gap-6"}>
        <div className={"aspect-square"}>
          <PieChart data={shares} />
        </div>
        <div className={"relative w-full flex-1"}>
          <ul
            className={
              "flex flex-col divide-y divide-default overflow-y-auto absolute top-0 left-0 w-full h-full"
            }
          >
            {shares.map((share, index) => (
              <ShareItem key={index} share={share} />
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}
