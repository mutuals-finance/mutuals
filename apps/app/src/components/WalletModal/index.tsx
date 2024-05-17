import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  VStack,
} from "@splitfi/ui";
import React from "react";
import { useConnect } from "wagmi";

interface WalletModalProps {
  onClose: ModalProps["onClose"];
  open: ModalProps["isOpen"];
}

export default function WalletModal({ onClose, open }: WalletModalProps) {
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onSuccess() {
      onClose?.();
    },
  });

  return (
    <Modal onClose={onClose} isOpen={open} size={"lg"}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Connect a Wallet</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={"3"}>
            {connectors.map((connector) => (
              <Button
                key={connector.id}
                w={"100%"}
                size={"lg"}
                onClick={() => connect({ connector })}
                justifyContent={"flex-start"}
                fontSize={"md"}
                variant="outline"
                isLoading={isLoading && connector.id === pendingConnector?.id}
                loadingText={connector.name}
                spinnerPlacement="end"
              >
                {connector.name} {!connector.ready && "(unsupported)"}
              </Button>
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Text fontSize="xs">
            By connecting a wallet, you agree to SplitFi’s Terms of Service and
            acknowledge that you have read and understand the SplitFi
            Disclaimer.
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
