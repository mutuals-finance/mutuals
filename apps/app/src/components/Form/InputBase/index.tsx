import { FormControlProps } from "@splitfi/ui";
import React from "react";
import { get, useFormContext } from "react-hook-form";

import BaseFeedback from "@/components/Form/InputBase/BaseFeedback";
import BaseLabel from "@/components/Form/InputBase/BaseLabel";
import BaseWrapper from "@/components/Form/InputBase/BaseWrapper";
import { BaseFeedbackProps, BaseLabelProps } from "@/components/Form/types";

type BaseWrapperProps = BaseFeedbackProps & BaseLabelProps & FormControlProps;

export default function InputBase({
  id,
  label,
  children,
  validation,
  helperText,
  hideError,
  ...props
}: BaseWrapperProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <BaseWrapper {...props}>
      <BaseLabel label={label!} validation={validation!} id={id!} />

      {children}

      <BaseFeedback
        error={error}
        helperText={helperText!}
        hideError={hideError!}
      />
    </BaseWrapper>
  );
}
