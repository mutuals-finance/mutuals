import { FormControl, FormControlProps } from "@splitfi/ui";
import React from "react";

import { BaseFeedbackProps, BaseLabelProps } from "@/components/Form/types";

type BaseWrapperProps = BaseFeedbackProps & BaseLabelProps & FormControlProps;

export default function BaseWrapper({ children, ...props }: BaseWrapperProps) {
  return <FormControl {...props}>{children}</FormControl>;
}
