import React from 'react';

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export default function Form({
  className,
  children,
  ...props
}: React.PropsWithChildren<FormProps>) {
  return (
    <form className={`flex w-full flex-col ${className}`} {...props}>
      {children}
    </form>
  );
}
