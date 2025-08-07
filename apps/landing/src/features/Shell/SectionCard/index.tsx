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
    <>
      <ShellSectionHeader
        textAlign={{ base: "center", lg: "left" }}
        ml={{ lg: "unset" }}
        {...sectionHeaderProps}
      />
      {children}
    </>
  );
}
