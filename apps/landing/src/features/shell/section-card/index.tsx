import type { Card } from "@mutuals/ui";

import ShellSectionHeader, {
  type ShellSectionHeaderProps,
} from "src/features/shell/section-header";

interface ShellSectionCardProps extends Card.RootProps {
  cardBodyProps?: Card.BodyProps;
  cardHeaderProps?: Card.HeaderProps;
  sectionHeaderProps?: ShellSectionHeaderProps;
}

export default function ShellSectionCard({
  children,
  sectionHeaderProps,
}: ShellSectionCardProps) {
  return (
    <>
      <ShellSectionHeader
        ml={{ lg: "unset" }}
        textAlign={{ base: "center", lg: "left" }}
        {...sectionHeaderProps}
      />
      {children}
    </>
  );
}
