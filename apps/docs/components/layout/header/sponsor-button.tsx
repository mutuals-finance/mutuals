import { Button, type ButtonProps, Link } from "@mutuals/ui";
import { IoHeartSharp } from "react-icons/io5";

export const SponsorButton = (props: ButtonProps) => (
  <Link
    href={"https://gitcoin.privote.live/rounds/0/mutuals.finance"}
    external={true}
    arrow={false}
    asChild={true}
  >
    <Button
      aria-label="Sponsor Mutuals on Open Collective"
      variant="subtle"
      size={"sm"}
      _icon={{
        color: "red.500",
      }}
      {...props}
    >
      <IoHeartSharp />
      Sponsor
    </Button>
  </Link>
);
