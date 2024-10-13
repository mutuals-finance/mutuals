import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  link: {
    description: "The link style - used for links",
    value: {
      fontWeight: "medium",
      textDecoration: "none",
      textDecorationLine: "none",
      fontFamily: "{fonts.heading}",
      _hover: {
        textDecoration: "none",
        textDecorationLine: "none",
      },
    },
  },
}) as Record<string, NonNullable<unknown>>;

export default textStyles;
