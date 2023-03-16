import React, { ForwardedRef } from 'react';

interface InputTextProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const InputText = React.forwardRef(
  (
    { label, cols = 4, className, error, ...props }: InputTextProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const baseClasses = 'textarea';

    return (
      <div className={!!error ? 'error' : ''}>
        {!!label && (
          <label className={'label'} htmlFor={props.id}>
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          {...props}
          cols={cols}
          className={`${baseClasses} ${className}`}
        />

        {!!error && <span className={'label-error'}>{error}</span>}
      </div>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
