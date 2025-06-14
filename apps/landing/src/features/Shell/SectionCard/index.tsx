import { Card } from "@mutuals/ui";

import ShellSectionHeader, {
  ShellSectionHeaderProps,
} from "src/features/Shell/SectionHeader";

interface ShellSectionCardProps extends Card.RootProps {
  sectionHeaderProps?: ShellSectionHeaderProps;
  cardHeaderProps?: Card.HeaderProps;
  cardBodyProps?: Card.BodyProps;
}

export default function ShellSectionCard({
  children,
  sectionHeaderProps,
  cardHeaderProps,
  cardBodyProps,
  ...props
}: ShellSectionCardProps) {
  return (
    <Card.Root size={"lg"} {...props}>
      <Card.Header {...cardHeaderProps}>
        <ShellSectionHeader
          textAlign={{ base: "center", lg: "left" }}
          ml={{ lg: "unset" }}
          {...sectionHeaderProps}
        />
      </Card.Header>
      <Card.Body {...cardBodyProps}>{children}</Card.Body>
    </Card.Root>
  );
}
