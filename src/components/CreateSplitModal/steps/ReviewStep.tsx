import { CreateFormData } from "@/app/(app)/splits/new/CreateForm";
import { SplitImage } from "@/components/SplitImage";
import {
  createColumnHelper,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Payee } from "@/app/(app)/splits/new/PayeeList";
import { shortenAddress } from "@/lib/utils";
import SplitCard from "@/components/SplitterCard";

interface ReviewStepProps {
  data: CreateFormData;
}

type PayeeTableProps = ReviewStepProps;

function PayeeTable({ data }: PayeeTableProps) {
  const columnHelper = createColumnHelper<Payee>();
  const columns = [
    columnHelper.accessor("address", {
      header: "Payee",
      cell: (info) => shortenAddress(info.getValue()),
    }),
    columnHelper.accessor("share", {
      header: "Share",
      cell: (info) => info.getValue() + " %",
    }),
  ];
  const table = useReactTable({
    data: data.payees,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className={"w-full"}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SplitReviewCard({ image, name, description }: CreateFormData) {
  return (
    <SplitCard
      timestamp={new Date().getTime()}
      metaData={{
        name: name,
        image: URL.createObjectURL(image),
        description: description,
      }}
    />
  );
}

export function ReviewStep({ data }: ReviewStepProps) {
  return (
    <div className={"flex flex-col w-full space-y-6"}>
      <p>You are about to create the following Split:</p>

      <SplitReviewCard {...data} />
    </div>
  );
}
