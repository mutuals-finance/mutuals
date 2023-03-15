import React from "react";

interface CreateFormGroupProps {
  title?: string;
  description: string;
}

export default function CreateFormGroup({
  title,
  description,
  children,
}: React.PropsWithChildren<CreateFormGroupProps>) {
  return (
    <>
      <div className={"flex flex-col space-y-2 pb-8 border-default border-b"}>
        {title && <h2 className={"title-3"}>{title}</h2>}
        <p>{description}</p>
      </div>

      {children}
    </>
  );
}
