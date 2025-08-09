import {
  Button,
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogFooter,
  Spinner,
  Stack,
  Heading,
  DialogRootProps,
  Text,
  DialogBackdrop,
  Dialog,
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
                  textAlign={"center"}
                  gap={"4"}
                  pt={"8"}
                >
                  <Spinner size="lg" animationDuration="0.8s" />
                  <Heading textStyle={"lg"}>Loading</Heading>
                  <Text color={"fg.subtle"} textStyle={"md"}>
                    {prompt}
                  </Text>
                </Stack>
              </DialogBody>

              <DialogFooter>
                <Button
                  variant="solid"
                  w="full"
                  onClick={() => store.setOpen(false)}
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
