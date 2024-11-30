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
          <Button w="full">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
