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
          <Stack alignItems={"center"} textAlign={"center"} gap={"4"} pt={"8"}>
            <Spinner size="lg" animationDuration="0.8s" />
            <Heading size={"lg"}>Loading</Heading>
            <Text variant={"muted"} fontSize={"md"}>
              {prompt}
            </Text>
          </Stack>
        </DialogBody>

        <DialogFooter>
          <DialogCloseTrigger w="full" position={"static"}>
            <Button w="full">Cancel</Button>
          </DialogCloseTrigger>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
