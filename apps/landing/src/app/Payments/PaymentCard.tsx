"use client";

import type { CardProps } from "@splitfi/ui";
import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  Text,
  IconButton,
  Collapse,
  useDisclosure,
  LightMode,
} from "@splitfi/ui";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { IoAdd, IoRemove } from "react-icons/io5";

interface PaymentOptionSlideProps extends CardProps {
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
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card variant="filled" bg="transparent" {...props}>
      {!!image && (
        <CardHeader p="0" position="relative">
          <LightMode>
            <Text as={"h5"} variant={"tag"} mb={"3"}>
              {tag}
            </Text>
          </LightMode>
          <AspectRatio
            w="full"
            rounded="lg"
            bg={"white"}
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
        </CardHeader>
      )}

      <CardBody px="0">
        <Text fontSize={"lg"}>{headline}</Text>
        <Collapse in={isOpen}>
          <Text fontSize={"lg"} color={"color.2"}>
            {" "}
            {description}
          </Text>
        </Collapse>
        <IconButton
          mt={"6"}
          rounded={"full"}
          icon={isOpen ? <IoRemove /> : <IoAdd />}
          fontSize={"xl"}
          aria-label={"Toggle description"}
          onClick={onToggle}
        />
      </CardBody>
    </Card>
  );
}
