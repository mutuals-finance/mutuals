import { Alert, Button, ClipboardRoot, ClipboardLink } from "@mutuals/ui";

export function SuccessStep({
  contractAddress = "",
}: {
  contractAddress?: string;
}) {
  return (
    <Alert status="success" title={"Congratulations"}>
      Your split was successfully created. You can now use its address{" "}
      <ClipboardRoot value={contractAddress}>
        <ClipboardLink />
      </ClipboardRoot>{" "}
      to withdraw and deposit funds.
      <Button variant={"outline"} colorPalette={"green"}>
        View more
      </Button>
    </Alert>
  );
}
