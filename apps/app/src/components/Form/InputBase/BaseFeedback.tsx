import { FormErrorMessage, FormHelperText } from "@splitfi/ui";
import React from "react";

import { BaseFeedbackProps } from "@/components/Form/types";

export default function BaseFeedback({
  helperText,
  hideError,
  error,
}: BaseFeedbackProps) {
  return (
    <>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}

      {!(hideError || !error) && (
        <div>
          {!!error && (
            <FormErrorMessage>{error.message?.toString()}</FormErrorMessage>
          )}
        </div>
      )}
    </>
  );
}
