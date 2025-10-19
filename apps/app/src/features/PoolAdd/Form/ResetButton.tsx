"use client";

import {
  Button,
  DialogTitle,
  DialogRoot,
  DialogTrigger,
  DialogActionTrigger,
  DialogFooter,
  DialogBody,
  DialogHeader,
  DialogContent,
  ButtonProps,
  DialogDescription,
  DialogCloseTrigger,
  DialogRootProps,
} from "@mutuals/ui";
import { IoRefreshSharp } from "react-icons/io5";
import { useState } from "react";

type PoolAddFormResetButtonProps = {
  onAction?: ButtonProps["onClick"];
  actionButtonProps?: Omit<ButtonProps, "onClick">;
  dialogProps?: DialogRootProps;
} & ButtonProps;

export default function PoolAddFormResetButton({
  onAction,
  actionButtonProps,
  dialogProps,
  ...props
}: PoolAddFormResetButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <DialogRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
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
            {...actionButtonProps}
            onClick={(args) => {
              onAction?.(args);
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
