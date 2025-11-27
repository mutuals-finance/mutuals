import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  link: {
    description: "The link style - used for links",
    value: {
      fontWeight: "semibold",
    },
  },
}) as Record<string, NonNullable<unknown>>;

export default textStyles;
