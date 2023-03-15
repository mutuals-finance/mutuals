import React, { ForwardedRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  error?: string;
}

function InputIcon({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={`block absolute top-1/2 -translate-y-1/2 text-neutral-400 ${className}`}
    >
      {children}
    </span>
  );
}

const Input = React.forwardRef(
  (
    {
      label,
      className,
      icon,
      iconAfter,
      error,
      type = "text",
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const baseClasses = "input flex-1";
    const iconClasses = !icon ? "" : "pl-9";
    const iconAfterClasses = !iconAfter ? "" : "pr-9";

    return (
      <div
        className={`flex flex-col w-full ${!!error ? "error" : ""} ${
          className || ""
        }`}
      >
        {!!label && (
          <label className={"label"} htmlFor={props.id}>
            {label}
          </label>
        )}

        <div className={"relative flex flex-1"}>
          {!!icon && <InputIcon className={"left-3"}>{icon}</InputIcon>}
          <input
            {...props}
            name={props.name || props.id}
            ref={ref}
            type={type}
            className={`${baseClasses} ${iconClasses} ${iconAfterClasses}`}
          />
          {!!iconAfter && (
            <InputIcon className={"right-3"}>{iconAfter}</InputIcon>
          )}
        </div>

        {!!error && <span className={"label-error"}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
