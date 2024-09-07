import {
  GridItem,
  Stack,
  Card,
  StackProps,
  Heading,
  Text,
  Box,
  GridItemProps,
} from "@mutuals/ui";

interface FeatureCardProps extends StackProps, GridItemProps {
  heading: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  heading,
  index,
  description,
  children,
  ...props
}: FeatureCardProps) {
  return (
    <GridItem as={Card.Root} variant={"outline"} borderWidth={"2px"} {...props}>
      <Card.Body
        as={Stack}
        direction={"column"}
        justify={"space-between"}
        minH={{ base: "unset", md: "xs" }}
        gap={"6"}
      >
        {/*
              <Box position={"absolute"} rounded={"lg"} overflow={"hidden"}>
                <Image
                  src={featureImage}
                  alt={"SplitFi features"}
                  width={"32"}
                  style={{ objectFit: "contain" }}
                />
              </Box>
*/}
        {children}

        <Box>
          {index && index >= 0 && (
            <Text variant={"tag"} mb={"3"} fontSize={"xs"}>
              0{index}
            </Text>
          )}

          <Heading as={"h4"} size={"lg"}>
            {heading}
          </Heading>
        </Box>

        <Box position={"relative"} w={"full"} maxW={"xs"}>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={"alpha.2"}
            fontWeight={"500"}
          >
            {description}
          </Text>
        </Box>
      </Card.Body>
    </GridItem>
  );
}
