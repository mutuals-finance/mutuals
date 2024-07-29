import { Box, FormLabel } from "@mutuals/ui";
import React from "react";

import { BaseLabelProps } from "@/components/Form/types";

export default function BaseLabel({ id, validation, label }: BaseLabelProps) {
  return (
    <>
      {label && (
        <Box mb={"1"}>
          <FormLabel htmlFor={id} display={"inline"}>
            {label}
            {!!validation?.required && <span>*</span>}
          </FormLabel>
        </Box>
      )}
    </>
  );
}
