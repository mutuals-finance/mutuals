import { Flex, FlexProps } from "@mutuals/ui";

interface IconBoxProps extends FlexProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
export default function IconBox({
  children,
  size = "md",
  ...props
}: IconBoxProps) {
  const sizeProps = {
    xs: { w: "8", h: "8", rounded: "2xl", fontSize: "md" },
    sm: { w: "10", h: "10", rounded: "2xl", fontSize: "lg" },
    md: { w: "12", h: "12", rounded: "2xl", fontSize: "xl" },
    lg: { w: "14", h: "14", rounded: "2xl", fontSize: "2xl" },
    xl: { w: "16", h: "16", rounded: "3xl", fontSize: "3xl" },
  }[size];

  return (
    <Flex
      bg={"bg.inverted"}
      color={"fg.inverted"}
      alignItems={"center"}
      justifyContent={"center"}
      {...sizeProps}
      {...props}
    >
      {children}
    </Flex>
  );
}
