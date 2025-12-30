import type { FC } from "react";
import { Box, FooterMeta } from "@mutuals/ui";
import { IoLogoGithub } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoDiscord } from "react-icons/io5";
import { BiLogoTelegram } from "react-icons/bi";

export const Footer: FC = () => {
  return (
    <Box as="footer" role="contentinfo">
      <FooterMeta
        links={[
          {
            label: "Github",
            value: "github",
            icon: IoLogoGithub,
            href: "https://github.com/mutuals-finance",
            target: "_blank",
          },
          {
            label: "XTwitter",
            value: "x-twitter",
            icon: RiTwitterXLine,
            href: "https://x.com",
            target: "_blank",
          },
          {
            label: "Discord",
            value: "discord",
            icon: IoLogoDiscord,
            href: "https://discord.com",
            target: "_blank",
          },
          {
            label: "Telegram",
            value: "telegram",
            icon: BiLogoTelegram,
            href: "/",
          },
        ]}
      />
    </Box>
  );
};
