import {
  Stack,
  Card,
  Heading,
  Text,
  GridItemProps,
  Icon,
  Box,
} from "@mutuals/ui";
import { IoArrowUp } from "react-icons/io5";
import IconBox from "@/components/IconBox";

interface FeatureCardProps extends GridItemProps {
  heading: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  heading,
  index: _,
  description,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <Card.Root variant={"outline"} w={"full"} {...props}>
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
          <IconBox size={"xs"} bg={"bg.muted"} color={"fg.muted"}>
            <Icon asChild transform={"rotate(45deg)"}>
              <IoArrowUp />
            </Icon>
          </IconBox>
        </Box>
      </Stack>
    </Card.Root>
  );
}
