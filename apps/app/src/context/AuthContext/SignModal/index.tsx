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
} from "@splitfi/ui";
import { PropsWithChildren } from "react";

type WalletAuthModalProps = PropsWithChildren<Omit<ModalProps, "children">>;

export default function SignModal({
  onClose,
  isOpen,
  size = "sm",
  ...props
}: WalletAuthModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} {...props}>
      <ModalOverlay />
      <ModalContent textAlign={"center"}>
        <ModalBody>
          <Stack align={"center"} textAlign={"center"} gap={"6"} pt={"6"}>
            <Spinner speed="0.65s" size="xl" />
            <Heading size={"md"}>Loading</Heading>
            <Text variant={"label"}>
              Please sign the message in your wallet to sign in safely.
            </Text>
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
