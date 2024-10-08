import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  Stack,
  Heading,
  ModalProps,
  Text,
} from "@mutuals/ui";

export interface WalletSignModalProps extends Omit<ModalProps, "children"> {
  prompt?: string;
}

export default function WalletSignModal({
  onClose,
  isOpen,
  size = "sm",
  prompt = "Please sign the message in your wallet.",
  ...props
}: WalletSignModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} {...props}>
      <ModalOverlay />
      <ModalContent textAlign={"center"}>
        <ModalBody>
          <Stack align={"center"} textAlign={"center"} gap={"6"} pt={"6"}>
            <Spinner speed="0.65s" size="xl" />
            <Heading size={"md"}>Loading</Heading>
            <Text variant={"label"}>{prompt}</Text>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button w="full" onClick={() => onClose()}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
