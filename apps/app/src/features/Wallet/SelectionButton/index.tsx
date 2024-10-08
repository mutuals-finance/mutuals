import { Button, ButtonProps } from "@mutuals/ui";
import { Connector } from "wagmi";
import NextImage from "next/image";

interface WalletSelectionButtonProps extends ButtonProps {
  connector?: Connector;
}

export default function WalletConnectButton({
  connector,
  ...props
}: WalletSelectionButtonProps) {
  return (
    <Button
      w={"full"}
      size={"lg"}
      justifyContent={"flex-start"}
      variant="outline"
      minH={"16"}
      {...props}
    >
      {connector?.icon && (
        <NextImage
          src={connector.icon}
          alt={connector?.name}
          width={"24"}
          height={"24"}
        />
      )}
      {connector?.name}
    </Button>
  );
}
