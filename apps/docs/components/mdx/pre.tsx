import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Clipboard, Button } from "@mutuals/ui";

export const Pre = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"pre">>(
  ({ ...props }, ref) => {
    return (
      <Clipboard.Root as="pre" ref={ref} {...(props as Clipboard.RootProps)}>
        <Clipboard.Trigger asChild={true}>
          <Button variant="surface" size="sm">
            <Clipboard.Indicator />
            <Clipboard.CopyText />
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Root>
    );
  },
);

Pre.displayName = "Pre";
