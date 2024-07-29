"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  DarkMode,
  Icon,
  Stack,
  type AccordionItemProps,
  Text,
  ListItem,
  OrderedList,
} from "@mutuals/ui";

import SectionHeader from "@/components/SectionHeader";
import { ReactNode } from "react";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import HeaderObserverChange from "@/context/HeaderObserver/Change";

interface FAQItemProps extends AccordionItemProps {
  title: string;
}

function FAQItem({ title, children, ...props }: FAQItemProps) {
  return (
    <AccordionItem rounded="lg" borderWidth="1px" {...props}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            textAlign="left"
            p={6}
          >
            <Text fontSize="lg" color={"color.1"}>
              {title}
            </Text>
            <Icon
              as={!isExpanded ? IoAddCircle : IoRemoveCircle}
              color={"alpha.2"}
              fontSize={"4xl"}
            />
          </AccordionButton>
          <AccordionPanel px={6} pb={6} color={"alpha.2"}>
            {children as ReactNode}
          </AccordionPanel>{" "}
        </>
      )}
    </AccordionItem>
  );
}
export default function PricingFAQ() {
  return (
    <HeaderObserverChange theme={"dark"}>
      <DarkMode>
        <Box py="32" mt="32" bg={"bg.1"}>
          <Container maxW="container.xl" px={{ base: "6", lg: "12" }}>
            <SectionHeader mx="unset" textAlign={"left"} label={"Mutuals FAQ"}>
              Questions? We're glad you asked.
            </SectionHeader>

            <Accordion allowMultiple as={Stack} width="100%" spacing="3">
              <FAQItem title="Why is it for free?" roundedTop="3xl">
                <Text>
                  Withdrawing funds from Splits will transfer your balance(s)
                  from the Splits ecosystem into your wallet. To withdraw funds,
                  follow these steps:
                </Text>
                <OrderedList spacing={1} p={3}>
                  <ListItem>
                    Click the &apos;Connect Wallet&apos; button to connect your
                    wallet to the app. If you&apos;re new to Ethereum and
                    don&apos;t yet have a wallet, you can learn more here.
                  </ListItem>
                  <ListItem>
                    In the top left of the screen, you’ll see your account. If
                    you have funds to withdraw, you will see a balance listed
                    next to your account.
                  </ListItem>
                  <ListItem>
                    Click on your account to open the account popup.
                  </ListItem>
                  <ListItem>
                    Click the checkboxes next to each balance you want to
                    withdraw. You can select as many balances as you’d like.
                  </ListItem>
                  <ListItem>
                    Click “Withdraw Tokens” and approve the transaction in your
                    wallet.
                  </ListItem>
                </OrderedList>
                <Text>
                  When you withdraw funds from Splits, you are withdrawing your
                  balance(s) across all the Splits you earn from that have been
                  distributed, not just from a specific Split. This is done to
                  maximize efficiency and reduce costs, since if you receive a
                  very small portion of a Split and had to withdraw for that
                  specific Split, there’s a good chance it would cost more to
                  withdraw than the amount you’re withdrawing.
                </Text>
              </FAQItem>
              <FAQItem title="Will it be free forever?">
                <Text>
                  To get started with Chakra UI, you can install it via npm or
                  yarn, and then import the components you need in your project.
                  The Chakra UI documentation is also a great resource for
                  getting started and learning more about the library.
                </Text>
              </FAQItem>
              <FAQItem title="Why should I donate?">
                <Text>
                  Chakra UI offers a variety of advantages including ease of
                  use, accessibility, and customization options. It also
                  provides a comprehensive set of UI components and is fully
                  compatible with React.
                </Text>
              </FAQItem>
              <FAQItem title="What's a donation badge?">
                <Text>
                  To get started with Chakra UI, you can install it via npm or
                  yarn, and then import the components you need in your project.
                  The Chakra UI documentation is also a great resource for
                  getting started and learning more about the library.
                </Text>
              </FAQItem>
              <FAQItem title="How will the donation be calculated?">
                <Text>
                  To get started with Chakra UI, you can install it via npm or
                  yarn, and then import the components you need in your project.
                  The Chakra UI documentation is also a great resource for
                  getting started and learning more about the library.
                </Text>
              </FAQItem>
              <FAQItem
                title="Is it possible to change the donation portion after creating my split?"
                roundedBottom="3xl"
              >
                <Text>
                  To get started with Chakra UI, you can install it via npm or
                  yarn, and then import the components you need in your project.
                  The Chakra UI documentation is also a great resource for
                  getting started and learning more about the library.
                </Text>
              </FAQItem>
            </Accordion>
          </Container>
        </Box>
      </DarkMode>
    </HeaderObserverChange>
  );
}
