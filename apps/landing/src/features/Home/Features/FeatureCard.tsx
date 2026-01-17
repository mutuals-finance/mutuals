import {
  Stack,
  Card,
  Heading,
  Text,
  GridItemProps,
  Icon,
  Box,
  MotionBox,
  LinkProps,
  Link,
} from "@mutuals/ui";
import { IoArrowUp } from "react-icons/io5";
import IconBox from "@/components/IconBox";
import { itemVariants } from "@/components/MotionBoxWrapper";

interface FeatureCardProps extends GridItemProps {
  heading: string;
  description: string;
  index?: number;
  href?: LinkProps["href"];
  linkProps?: Omit<LinkProps, "href">;
}

export default function FeatureCard({
  heading,
  index: _,
  description,
  children,
  href,
  linkProps,
  ...props
}: FeatureCardProps) {
  const asLink = Boolean(href);

  const element = (
    <Card.Root
      variant={"outline"}
      w={"full"}
      _groupHover={{ colorPalette: "brand" }}
      borderColor={"colorPalette.border"}
      transition={"all 0.1s ease-in-out"}
      {...props}
    >
      <Stack direction={"row"}>
        <Card.Body
          as={Stack}
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          gap={"2"}
        >
          {children}
          <Heading as={"h3"} size={"xl"}>
            {heading}
          </Heading>

          <Text color={"fg.muted"}>{description}</Text>
        </Card.Body>

        <Box p={"4"}>
          <IconBox
            size={"xs"}
            bg={"colorPalette.subtle"}
            color={"colorPalette.fg"}
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
    <MotionBox variants={itemVariants} asChild={true}>
      {asLink ? (
        <Link href={href} {...linkProps} className={`group`} asChild={true}>
          {element}
        </Link>
      ) : (
        element
      )}
    </MotionBox>
  );
}
