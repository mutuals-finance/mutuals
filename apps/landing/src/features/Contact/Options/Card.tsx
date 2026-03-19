import {
  Card,
  Heading,
  Icon,
  type IconProps,
  MotionBox,
  Stack,
} from "@mutuals/ui";
import type { PropsWithChildren } from "react";
import IconBox from "@/components/icon-box";
import { itemVariants } from "@/components/motion-box-wrapper";

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
    <MotionBox asChild={true} variants={itemVariants}>
      <Card.Root {...props}>
        <Card.Header>
          <Stack alignItems={"flex-start"} direction={"row"}>
            <Heading textStyle={{ base: "2xl", lg: "3xl" }}>{heading}</Heading>

            {!!icon && (
              <IconBox
                bg="colorPalette.muted"
                color={"colorPalette.fg"}
                ml={"auto"}
                size={"xs"}
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
