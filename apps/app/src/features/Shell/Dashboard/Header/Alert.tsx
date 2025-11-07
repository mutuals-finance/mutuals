import {
  AlertIndicator,
  AlertRoot,
  AlertTitle,
  Collapsible,
  IconButton,
} from "@mutuals/ui";
import { IoCloseSharp, IoFlaskSharp } from "react-icons/io5";

export default function ShellDashboardHeaderAlert() {
  return (
    <Collapsible.Root defaultOpen={true}>
      <Collapsible.Content>
        <AlertRoot
          status="warning"
          w={"full"}
          rounded={"0"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          py={"2"}
        >
          <AlertIndicator>
            <IoFlaskSharp />
          </AlertIndicator>
          <AlertTitle>
            This version is pre-alpha. Do not use with real funds and expect
            bugs and breaking changes. It is for testing purposes only.
          </AlertTitle>
          <Collapsible.Trigger>
            <IconButton size={"2xs"} variant={"ghost"}>
              <IoCloseSharp />
            </IconButton>
          </Collapsible.Trigger>
        </AlertRoot>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
