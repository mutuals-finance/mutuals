"use client";

import {
  Button,
  ButtonGroup,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Menu,
  Portal,
  useClipboard,
  Link,
  Show,
} from "@mutuals/ui";
import { BsMarkdown } from "react-icons/bs";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { EvaluateResult } from "nextra";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiClaudeFill } from "react-icons/ri";
import { SiPerplexity } from "react-icons/si";
import { useConfig } from "@/context";

export type LLMSCopyWidgetProps = Omit<EvaluateResult, "default">;

export const LLMSCopyWidget = (props: LLMSCopyWidgetProps) => {
  const { normalizePagesResult } = useConfig();
  const { activeThemeContext } = normalizePagesResult;

  return (
    <Show when={activeThemeContext.copyPage}>
      <ButtonGroup attached={true} variant="outline" size="xs">
        <CopyMarkdownButton {...props} />
        <ActionMenu borderStartRadius="0">
          <LuChevronDown />
        </ActionMenu>
      </ButtonGroup>
    </Show>
  );
};

const CopyMarkdownButton = (
  props: ButtonProps & Omit<EvaluateResult, "default">,
) => {
  const { toc: _toc, metadata: _metadata, sourceCode, ...rest } = props;
  const clipboard = useClipboard({ value: sourceCode, timeout: 1000 });
  return (
    <Button {...rest} onClick={clipboard.copy}>
      {clipboard.copied ? <LuCheck /> : <BsMarkdown />} Copy Page
    </Button>
  );
};

const ActionMenu = (props: IconButtonProps) => {
  const { normalizePagesResult } = useConfig();
  const { activePath } = normalizePagesResult;
  const pathString = activePath.map((p) => p.route).join("/");

  const readUrl = encodeURIComponent(
    `Use web browsing to access links and information: https://docs.mutuals.finance${pathString}.mdx.\n\nI want to ask questions about it.
    `,
  );
  const items = [
    {
      label: "View as markdown",
      href: `https://docs.mutuals.finance${pathString}.mdx`,
      icon: BsMarkdown,
      external: true,
      arrow: true,
    },
    {
      label: "Open in ChatGPT",
      href: `https://chatgpt.com/?hints=search&q=${readUrl}`,
      icon: AiOutlineOpenAI,
      external: true,
      arrow: true,
    },
    {
      label: "Open in Claude",
      href: `https://claude.ai/new?q=${readUrl}`,
      icon: RiClaudeFill,
      external: true,
      arrow: true,
    },
    {
      label: "Open in Perplexity",
      href: `https://www.perplexity.ai/search?q=${readUrl}`,
      icon: SiPerplexity,
      external: true,
      arrow: true,
    },
  ];

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }}>
      <Menu.Trigger asChild>
        <IconButton {...props} />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="52">
            {items.map(({ label, icon: ItemIcon, ...item }) => (
              <Menu.Item value={label} key={label} asChild={true}>
                <Link
                  variant={"plain"}
                  textDecoration={"none"}
                  cursor={"pointer"}
                  {...item}
                >
                  <ItemIcon /> {label}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
