"use client";

import {
  createListCollection,
  Select,
  SelectProps,
  SelectCollectionItemProps,
} from "@mutuals/ui";

export type AllocationFormTreeComboboxProps = Omit<SelectProps, "collection">;

export default function AllocationFormTreeCombobox({
  ...props
}: AllocationFormTreeComboboxProps) {
  return (
    <Select
      collection={frameworks}
      onClick={(e) => {
        e.stopPropagation();
      }}
      {...props}
    ></Select>
  );
}

const frameworks = createListCollection({
  items: [
    {
      value: "basic",
      children: "Basic Plan",
    },
    {
      value: "pro",
      children: "Pro Plan",
    },
    {
      value: "business",
      children: "Business Plan",
    },
    {
      value: "enterprise",
      children: "Enterprise Plan",
    },
  ] as SelectCollectionItemProps[],
});
