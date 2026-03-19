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
          alignItems={"center"}
          justifyContent={"center"}
          py={"2"}
          rounded={"0"}
          status="warning"
          textAlign={"center"}
          w={"full"}
        >
          <AlertIndicator>
            <IoFlaskSharp />
          </AlertIndicator>
          <AlertTitle>
            This version is pre-alpha. Do not use with real funds and expect
            bugs and breaking changes. It is for testing purposes only.
          </AlertTitle>
          <Collapsible.Trigger asChild={true}>
            <IconButton size={"2xs"} variant={"ghost"}>
              <IoCloseSharp />
            </IconButton>
          </Collapsible.Trigger>
        </AlertRoot>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
