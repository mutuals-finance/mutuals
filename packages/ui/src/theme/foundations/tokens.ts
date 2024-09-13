import { defineTokens } from "@chakra-ui/react";
import generalSansFont from "../font/GeneralSans";
import interFont from "../font/Inter";

export default defineTokens({
  fonts: {
    body: { value: interFont.style.fontFamily },
    heading: { value: generalSansFont.style.fontFamily },
  },
});
