"use client";

import {
  AspectRatio,
  Card,
  Text,
  IconButton,
  Heading,
  Collapsible,
} from "@mutuals/ui";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";

interface PaymentOptionSlideProps extends Card.RootProps {
  tag: string;
  headline: string;
  description: string;
  image?: ImageProps["src"];
}

export default function PaymentCard({
  tag,
  headline,
  description,
  image,
  ...props
}: PaymentOptionSlideProps) {
  return (
    <Collapsible.Root as={Card} variant="filled" bg="transparent" {...props}>
      {!!image && (
        <Card.Header p="0" position="relative">
          <AspectRatio
            w="full"
            rounded="lg"
            bg={"bg.1"}
            border={"1px solid"}
            borderColor={"border.1"}
            overflow={"hidden"}
            ratio={5 / 3}
            position="relative"
          >
            <Image
              src={image}
              alt={tag}
              fill
              style={{ objectFit: "contain" }}
            />
          </AspectRatio>
        </Card.Header>
      )}

      <Card.Body px="0">
        <Heading as={"h5"} size={"sm"} mb={"3"}>
          {tag}
        </Heading>
        <Text fontSize={"lg"}>{headline}</Text>
        <Collapsible.Content>
          <Text fontSize={"lg"} color={"color.3"}>
            {description}
          </Text>
        </Collapsible.Content>
        <Collapsible.Trigger
          as={IconButton}
          mt={"6"}
          rounded={"full"}
          icon={isOpen ? <IoRemove /> : <IoAdd />}
          fontSize={"xl"}
          aria-label={"Toggle description"}
        />
      </Card.Body>
    </Collapsible.Root>
  );
}
