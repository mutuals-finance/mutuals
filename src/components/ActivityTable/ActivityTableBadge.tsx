import {
  IoArrowDownOutline,
  IoArrowUpOutline,
  IoLinkOutline,
} from "react-icons/io5";
import React from "react";
import { EventType } from "./types";

export default function ActivityTableBadge({ type }: { type: EventType }) {
  let Icon;
  switch (type) {
    case EventType.Deposit:
      Icon = IoArrowDownOutline;
      break;
    case EventType.Withdrawal:
      Icon = IoArrowUpOutline;
      break;
    default:
      Icon = IoLinkOutline;
  }

  const colorClasses = {
    [EventType.Withdrawal]: "border-red-500 text-red-500",
    [EventType.Deposit]: "border-green-500 text-green-500",
    [EventType.ContractURIUpdate]: "border-purple-500 text-purple-500",
  }[type];

  return (
    <span
      className={`block inline-flex px-2 py-1 space-x-1 items-center justify-center text-xs  font-semibold border rounded-full ${colorClasses}`}
    >
      <Icon className={"block"} />
      <span className={"block"}>{type}</span>
    </span>
  );
}
