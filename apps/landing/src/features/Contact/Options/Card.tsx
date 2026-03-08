import {
  Card,
  Heading,
  Icon,
  type IconProps,
  MotionBox,
  Stack,
} from "@mutuals/ui";
import { itemVariants } from "@/components/MotionBoxWrapper";
import IconBox from "@/components/IconBox";
import { PropsWithChildren } from "react";

export type ContactOptionsCardProps = Card.RootProps &
  PropsWithChildren<{
    icon?: IconProps["children"];
    heading?: string;
  }>;

export default function ContactOptionsCard({
  icon,
  heading,
  children,
  ...props
}: ContactOptionsCardProps) {
  return (
    <MotionBox variants={itemVariants} asChild={true}>
      <Card.Root {...props}>
        <Card.Header>
          <Stack direction={"row"} alignItems={"flex-start"}>
            <Heading textStyle={{ base: "2xl", lg: "3xl" }}>{heading}</Heading>

            {!!icon && (
              <IconBox
                size={"xs"}
                color={"colorPalette.fg"}
                bg="colorPalette.muted"
                ml={"auto"}
              >
                <Icon asChild={true}>{icon}</Icon>
              </IconBox>
            )}
          </Stack>
        </Card.Header>
        {children && <Card.Body>{children}</Card.Body>}
      </Card.Root>
    </MotionBox>
  );
}
