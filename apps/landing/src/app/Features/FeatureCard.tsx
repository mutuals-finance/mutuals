import { GridItemProps } from "@splitfi/ui";
import { GridItem, Stack, StackProps, Heading, Text, Box } from "@splitfi/ui";

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
    <GridItem
      as={Stack}
      direction={"column"}
      justify={"flex-end"}
      rounded={"lg"}
      position={"relative"}
      overflow={"hidden"}
      p={{ base: "3", lg: "6" }}
      {...props}
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

      <Box position={"relative"}>
        {index && index >= 0 && (
          <Text variant={"tag"} mb={"1"}>
            0{index}
          </Text>
        )}

        <Heading as={"h4"} size={"lg"}>
          {heading}
        </Heading>
      </Box>
    </GridItem>
  );
}
