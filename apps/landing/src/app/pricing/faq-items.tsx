import { AccordionItemProps, List, Text } from "@mutuals/ui";
import { ReactNode } from "react";

const items = [
  {
    title: "How to withdraw funds?",
    children: (
      <Text variant={"muted"}>
        Withdrawing funds from Splits will transfer your balance(s) from the
        Splits ecosystem into your wallet. To withdraw funds, follow these
        steps:
        <List.Root as="ol" gap={1} p={3}>
          <List.Item>
            Click the &apos;Connect Wallet&apos; button to connect your wallet
            to the app. If you&apos;re new to Ethereum and don&apos;t yet have a
            wallet, you can learn more here.
          </List.Item>
          <List.Item>
            In the top left of the screen, you’ll see your account. If you have
            funds to withdraw, you will see a balance listed next to your
            account.
          </List.Item>
          <List.Item>
            Click on your account to open the account popup.
          </List.Item>
          <List.Item>
            Click the checkboxes next to each balance you want to withdraw. You
            can select as many balances as you’d like.
          </List.Item>
          <List.Item>
            Click “Withdraw Tokens” and approve the transaction in your wallet.
          </List.Item>
        </List.Root>
        When you withdraw funds from Splits, you are withdrawing your balance(s)
        across all the Splits you earn from that have been distributed, not just
        from a specific Split. This is done to maximize efficiency and reduce
        costs, since if you receive a very small portion of a Split and had to
        withdraw for that specific Split, there’s a good chance it would cost
        more to withdraw than the amount you’re withdrawing.
      </Text>
    ),
  },
  ...[
    "Will it be free forever?",
    "Why should I donate?",
    "What's a donation badge?",
    "How will the donation be calculated?",
  ].map((title) => ({
    title,
    children: (
      <Text variant={"muted"}>
        To get started with Chakra UI, you can install it via npm or yarn, and
        then import the components you need in your project. The Chakra UI
        documentation is also a great resource for getting started and learning
        more about the library.
      </Text>
    ),
  })),
  {
    title:
      "Is it possible to change the donation portion after creating my split?",
    children: (
      <Text variant={"muted"}>
        When you withdraw funds from Splits, you are withdrawing your balance(s)
        across all the Splits you earn from that have been distributed, not just
        from a specific Split. This is done to maximize efficiency and reduce
        costs, since if you receive a very small portion of a Split and had to
        withdraw for that specific Split, there’s a good chance it would cost
        more to withdraw than the amount you’re withdrawing.
      </Text>
    ),
  },
] as Array<Omit<AccordionItemProps, "value"> & { title: string }>;

export default items;
