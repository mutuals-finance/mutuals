import { HTMLAttributes, ReactNode } from "react";

interface StatisticProps
  extends React.PropsWithChildren<
    Omit<HTMLAttributes<HTMLDivElement>, "title" | "prefix">
  > {
  title?: string | ReactNode;
  prefix?: string | number | ReactNode;
  suffix?: string | number | ReactNode;
}

export default function Statistic({
  title,
  children,
  prefix,
  suffix,
  className,
  ...props
}: StatisticProps) {
  return (
    <div className="flex flex-col">
      {!!title && <span className="block label">{title}</span>}

      <div
        className={`flex items-center justify-start space-x-2 font-semibold leading-relaxed ${className}`}
        {...props}
      >
        {!!prefix && <div>{prefix}</div>}
        {!!children && <div>{children}</div>}
        {!!suffix && <div>{suffix}</div>}
      </div>
    </div>
  );
}
