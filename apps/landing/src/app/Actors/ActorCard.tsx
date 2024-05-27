import type { CardProps, FlexProps } from "@splitfi/ui";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  ListItem,
  Flex,
  CardFooter,
  Icon,
  Box,
  List,
  ListIcon,
} from "@splitfi/ui";
import type { ImageProps } from "next/image";
import { IoCheckbox, IoArrowUpCircle } from "react-icons/io5";

interface ActorCardProps extends CardProps {
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  image?: ImageProps["src"];
  iconProps?: FlexProps;
  benefits?: string[];
}

export default function ActorCard({
  title,
  subtitle,
  description,
  benefits,
  ...props
}: ActorCardProps) {
  return (
    <Card
      variant="filled"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      size={"lg"}
      {...props}
    >
      <Stack>
        <CardHeader pb={"0"}>
          <Icon
            as={IoArrowUpCircle}
            fontSize={"5xl"}
            transform={"rotate(45deg)"}
          />
        </CardHeader>
        <CardBody as={Stack} gap={"3"} pt={"0"}>
          <Heading size="2xl">{subtitle}</Heading>
          <Text fontSize="lg">{description}</Text>
        </CardBody>
        <CardFooter as={Stack} gap={"6"} align={"flex-start"}>
          {benefits && (
            <List color="color.2">
              {benefits?.map((b) => (
                <ListItem key={b} as={Flex} alignItems={"flex-start"}>
                  <ListIcon w="5" h={"5"} as={IoCheckbox} mt={"0.5"} />
                  <Text>{b}</Text>
                </ListItem>
              ))}
            </List>
          )}

          <Button variant="blackWhite">Get Started</Button>
        </CardFooter>
      </Stack>
      <Box maxW={{ base: "100%", sm: "200px" }} w={"full"} />
    </Card>
  );
}
