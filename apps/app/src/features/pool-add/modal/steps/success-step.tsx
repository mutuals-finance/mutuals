import { Alert, Button, ClipboardLink, ClipboardRoot } from "@mutuals/ui";

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
      <Button colorPalette={"green"} variant={"outline"}>
        View more
      </Button>
    </Alert>
  );
}
