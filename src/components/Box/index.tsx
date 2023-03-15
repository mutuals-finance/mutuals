import React, { HTMLAttributes } from "react";

interface BoxProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string;
  titleAfter?: React.ReactNode;
}

export default function Box({
  title,
  titleAfter,
  className,
  children,
  ...props
}: React.PropsWithChildren<BoxProps>) {
  return (
    <article
      className={`bg-default border border-default rounded-default flex flex-col flex-1 overflow-hidden ${className}`}
      {...props}
    >
      {(!!title || !!titleAfter) && (
        <>
          <div
            className={
              "flex items-center justify-between p-2 lg:py-4 lg:px-6 border-b border-default bg-default-2"
            }
          >
            <div>
              {!!title && <h2 className={"text-lg font-semibold"}>{title}</h2>}
            </div>
            <div>{titleAfter}</div>
          </div>
        </>
      )}
      <div className={"p-3 lg:p-6 flex flex-col flex-1"}>{children}</div>
    </article>
  );
}
