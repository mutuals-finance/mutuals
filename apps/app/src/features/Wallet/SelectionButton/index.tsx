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
  if (connector?.icon) {
    props.leftIcon = (
      <NextImage
        src={connector.icon}
        alt={connector?.name}
        width={"24"}
        height={"24"}
      />
    );
  }

  return (
    <Button
      w={"100%"}
      size={"lg"}
      py={"7"}
      justifyContent={"flex-start"}
      variant="outline"
      spinnerPlacement="end"
      {...props}
    >
      {connector?.name}
    </Button>
  );
}
