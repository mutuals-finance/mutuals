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
  DialogCloseTrigger,
} from "@mutuals/ui";

export interface WalletSignDialogProps
  extends Omit<DialogRootProps, "children"> {
  prompt?: string;
}

export default function WalletSignDialog({
  size = "sm",
  prompt = "Please sign the message in your wallet.",
  ...props
}: WalletSignDialogProps) {
  return (
    <DialogRoot size={size} {...props}>
      <DialogBackdrop />
      <DialogContent textAlign={"center"}>
        <DialogBody>
          <Stack alignItems={"center"} textAlign={"center"} gap={"6"} pt={"6"}>
            <Spinner size="xl" />
            <Heading size={"md"}>Loading</Heading>
            <Text variant={"muted"}>{prompt}</Text>
          </Stack>
        </DialogBody>

        <DialogFooter>
          <DialogCloseTrigger>
            <Button w="full" variant={"subtle"}>
              Cancel
            </Button>
          </DialogCloseTrigger>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
