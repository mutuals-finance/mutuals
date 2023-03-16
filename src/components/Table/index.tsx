import React from "react";

enum ActivityColumnHeaders {
  Event = "Event",
  Price = "Price",
  By = "By",
  To = "To",
  Time = "Time",
}

function ActivityHeaderCell({ children }: React.PropsWithChildren<unknown>) {
  return <th className={"pb-2 label"}>{children}</th>;
}

function ActivityHeaderRow() {
  return (
    <tr className={"text-left"}>
      <ActivityHeaderCell>{ActivityColumnHeaders.Event}</ActivityHeaderCell>
      <ActivityHeaderCell>{ActivityColumnHeaders.Price}</ActivityHeaderCell>
      <ActivityHeaderCell>{ActivityColumnHeaders.By}</ActivityHeaderCell>
      <ActivityHeaderCell>{ActivityColumnHeaders.To}</ActivityHeaderCell>
      <ActivityHeaderCell>{ActivityColumnHeaders.Time}</ActivityHeaderCell>
    </tr>
  );
}

function ActivityBodyCell({ children }: React.PropsWithChildren<unknown>) {
  return <td className={"py-2"}>{children}</td>;
}
function ActivityBodyRow() {
  const tx = {
    Event: "Receive",
    Price: "1.4",
    By: "0x1234...5678",
    To: "0x1234...5678",
    Time: "6 hours ago",
  };

  return (
    <tr className={"border-t"}>
      <ActivityBodyCell>{tx[ActivityColumnHeaders.Event]}</ActivityBodyCell>
      <ActivityBodyCell>{tx[ActivityColumnHeaders.Price]}</ActivityBodyCell>
      <ActivityBodyCell>{tx[ActivityColumnHeaders.By]}</ActivityBodyCell>
      <ActivityBodyCell>{tx[ActivityColumnHeaders.To]}</ActivityBodyCell>
      <ActivityBodyCell>{tx[ActivityColumnHeaders.Time]}</ActivityBodyCell>
    </tr>
  );
}

// interface ActivityProps {
//   contractAddress: string;
//   chainId?: number;
// }

export default function Activity({}) {
  return (
    <div className={"flex-1 w-full relative overflow-y-auto"}>
      <table className="absolute top-0 left-0 w-full h-full table-auto ">
        <thead>
          <ActivityHeaderRow />
        </thead>
        <tbody>
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
          <ActivityBodyRow />
        </tbody>
      </table>
    </div>
  );
}
