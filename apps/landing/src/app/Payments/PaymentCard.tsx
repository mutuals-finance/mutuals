import type { CardProps } from "@splitfi/ui";
import {
  AspectRatio,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@splitfi/ui";
import type { ImageProps } from "next/image";
import Image from "next/image";

interface PaymentOptionSlideProps extends CardProps {
  heading: string;
  description: string;
  image?: ImageProps["src"];
}

export default function PaymentCard({
  heading,
  description,
  image,
  ...props
}: PaymentOptionSlideProps) {
  return (
    <Card variant="filled" bg="transparent" {...props}>
      {!!image && (
        <CardHeader p="0">
          <AspectRatio
            w="full"
            bg="bg.3"
            rounded="md"
            ratio={16 / 9}
            position="relative"
          >
            <Image
              src={image}
              alt={heading}
              fill
              style={{ objectFit: "contain" }}
            />
          </AspectRatio>
        </CardHeader>
      )}

      <CardBody px="0">
        <Heading mb="3" size="sm">
          {heading}
        </Heading>
        <Text color="color.2">{description}</Text>
      </CardBody>
    </Card>
  );
}
