import { defineTextStyles } from "@chakra-ui/react";

const textStyles = defineTextStyles({
  /*
    body: {
      description: "The body text style - used in paragraphs",
      value: {
        fontFamily: interFont.style.fontFamily,
      },
    },
    heading: {
      description: "The heading text style - used in heading",
      value: {
        fontFamily: generalSansFont.style.fontFamily,
      },
    },
  */
}) as Record<string, NonNullable<unknown>>;

export default textStyles;
