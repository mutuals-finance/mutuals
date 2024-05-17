import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/react";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("bg.1", "bg.1")(props),
    },
  }),
};

export default styles;
