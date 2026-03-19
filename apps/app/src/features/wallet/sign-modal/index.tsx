import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  type DialogRootProps,
  Heading,
  Spinner,
  Stack,
  Text,
} from "@mutuals/ui";

export interface WalletSignDialogProps
  extends Omit<DialogRootProps, "children"> {
  prompt?: string;
}

export default function WalletSignDialog({
  size = "xs",
  prompt = "Please sign the message in your wallet.",
  ...props
}: WalletSignDialogProps) {
  return (
    <DialogRoot size={size} {...props}>
      <DialogBackdrop />
      <DialogContent textAlign={"center"}>
        <Dialog.Context>
          {(store) => (
            <>
              <DialogBody>
                <Stack
                  alignItems={"center"}
                  gap={"4"}
                  pt={"8"}
                  textAlign={"center"}
                >
                  <Spinner animationDuration="0.8s" size="lg" />
                  <Heading textStyle={"lg"}>Loading</Heading>
                  <Text color={"fg.subtle"} textStyle={"md"}>
                    {prompt}
                  </Text>
                </Stack>
              </DialogBody>

              <DialogFooter>
                <Button
                  onClick={() => store.setOpen(false)}
                  variant="solid"
                  w="full"
                >
                  Cancel
                </Button>
              </DialogFooter>
            </>
          )}
        </Dialog.Context>
      </DialogContent>
    </DialogRoot>
  );
}
