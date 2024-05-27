import type { CardProps } from "@splitfi/ui";
import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  Text,
  Tag,
  Box,
} from "@splitfi/ui";
import type { ImageProps } from "next/image";
import Image from "next/image";

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
  return (
    <Card variant="filled" bg="transparent" {...props}>
      {!!image && (
        <CardHeader p="0" position="relative">
          <AspectRatio
            w="full"
            bgGradient={"linear(to-tl,primary.800,primary.800,primary.900)"}
            rounded="lg"
            ratio={3 / 4}
            position="relative"
          >
            <Image
              src={image}
              alt={tag}
              fill
              style={{ objectFit: "contain" }}
            />
          </AspectRatio>

          <Box position={"absolute"} top={"0"} left={"0"} p={"3"}>
            <Tag colorScheme={"blackAlpha"} rounded={"full"} p={"3"}>
              {tag}
            </Tag>
          </Box>
        </CardHeader>
      )}

      <CardBody px="0">
        <Text fontSize={"lg"} fontWeight={"500"}>
          {headline}
          <Text as={"span"} color={"color.3"} fontWeight={"500"}>
            {" "}
            {description}
          </Text>
        </Text>
      </CardBody>
    </Card>
  );
}
