"use client";

import {
  Button,
  type ButtonProps,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  type DialogRootProps,
  DialogTitle,
  DialogTrigger,
} from "@mutuals/ui";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoRefreshSharp } from "react-icons/io5";

type PoolAddToolbarResetButtonProps = {
  resetButtonProps?: Omit<ButtonProps, "onClick">;
  dialogProps?: DialogRootProps;
} & ButtonProps;

export default function PoolAddToolbarResetButton({
  resetButtonProps,
  dialogProps,
  ...props
}: PoolAddToolbarResetButtonProps) {
  const [open, setOpen] = useState(false);
  const { reset } = useFormContext();

  return (
    <DialogRoot
      onOpenChange={(e) => setOpen(e.open)}
      open={open}
      {...dialogProps}
    >
      <DialogTrigger asChild>
        <Button variant={"subtle"} {...props}>
          <IoRefreshSharp />
          Reset
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogCloseTrigger />

        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            This will reset your pool and allocation selections.
          </DialogDescription>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button
            {...resetButtonProps}
            onClick={() => {
              reset();
              setOpen(false);
            }}
          >
            Reset
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
