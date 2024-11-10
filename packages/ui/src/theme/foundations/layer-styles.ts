import { defineLayerStyles } from "@chakra-ui/react";

const layerStyles = defineLayerStyles({
  "fill.muted": {
    description: "muted background styles",
    value: {
      // @ts-expect-error: this works but seems to be an external config
      bg: "bg.muted",
    },
  },
}) as Record<string, NonNullable<unknown>>;

export default layerStyles;
