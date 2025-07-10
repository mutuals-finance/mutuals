import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  link: {
    description: "The link style - used for links",
    value: {
      fontWeight: "500",
      textDecoration: "none",
      textDecorationLine: "none",
      _hover: {
        textDecoration: "none",
        textDecorationLine: "none",
      },
    },
  },
}) as Record<string, NonNullable<unknown>>;

export default textStyles;
