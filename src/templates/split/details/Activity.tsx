import React from "react";
import Box from "@/components/Box";
import ActivityTable from "@/components/ActivityTable";
import { ActivityTableProps } from "@/components/ActivityTable/types";

type ActivityProps = ActivityTableProps;

export function Activity(props: ActivityProps) {
  return (
    <Box className={"lg:col-span-3"} title={"Activity"}>
      <div
        className={
          "-ml-3 -my-3 lg:-my-6 lg:-ml-6 w-[calc(100%_+_1.5rem)] lg:w-[calc(100%_+_3rem)] flex flex-1 relative overflow-y-auto"
        }
      >
        <div className={"absolute top-0 left-0 w-full h-full"}>
          <ActivityTable {...props} />
        </div>
      </div>
    </Box>
  );
}
