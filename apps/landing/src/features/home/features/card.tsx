import {
  Box,
  Card,
  type GridItemProps,
  Heading,
  Icon,
  Link,
  type LinkProps,
  MotionBox,
  Stack,
  Text,
} from "@mutuals/ui";
import { IoArrowUp } from "react-icons/io5";
import IconBox from "@/components/icon-box";
import { itemVariants } from "@/components/motion-box-wrapper";

export type HomeFeaturesCardProps = GridItemProps & {
  heading: string;
  description: string;
  index?: number;
  href?: LinkProps["href"];
  linkProps?: Omit<LinkProps, "href">;
};

export default function HomeFeaturesCard({
  heading,
  index: _,
  description,
  children,
  href,
  linkProps,
  ...props
}: HomeFeaturesCardProps) {
  const asLink = Boolean(href);

  const element = (
    <Card.Root
      _hover={{ bg: "bg.muted" }}
      transition={"all 0.1s ease-in-out"}
      variant={"outline"}
      w={"full"}
      {...props}
    >
      <Stack direction={"row"}>
        <Card.Body
          alignItems={"flex-start"}
          as={Stack}
          direction={"column"}
          gap={"2"}
          justifyContent={"space-between"}
        >
          {children}
          <Heading as={"h3"} size={"xl"}>
            {heading}
          </Heading>

          <Text color={"fg.muted"}>{description}</Text>
        </Card.Body>

        <Box p={"4"}>
          <IconBox
            bg={"colorPalette.subtle"}
            color={"colorPalette.fg"}
            size={"xs"}
            transition={"all 0.1s ease-in-out"}
          >
            <Icon asChild transform={"rotate(45deg)"}>
              <IoArrowUp />
            </Icon>
          </IconBox>
        </Box>
      </Stack>
    </Card.Root>
  );

  return (
    <MotionBox asChild={true} variants={itemVariants}>
      {asLink ? (
        <Link href={href} {...linkProps} asChild={true} className={"group"}>
          {element}
        </Link>
      ) : (
        element
      )}
    </MotionBox>
  );
}
