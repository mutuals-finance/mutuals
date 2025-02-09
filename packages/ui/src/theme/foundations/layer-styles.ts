import { defineLayerStyles } from "@chakra-ui/react";

const layerStyles = defineLayerStyles({
  "fill.muted": {
    description: "muted background styles",
    value: {
      bg: "bg.muted",
    },
  },
}) as Record<string, NonNullable<unknown>>;

export default layerStyles;
