import React from 'react';

import clsxm from '@/lib/utils/clsxm';

interface FormGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  title?: string;
  description?: React.ReactNode | string;
}

export default function FormGroup({
  title,
  description,
  children,
  className,
  ...props
}: React.PropsWithChildren<FormGroupProps>) {
  return (
    <div {...props} className={clsxm('flex flex-col space-y-6', className)}>
      <div className={'flex flex-col space-y-3'}>
        {title && <h2 className={'title-4'}>{title}</h2>}
        {!!description &&
          (React.isValidElement(description) ? (
            description
          ) : (
            <p>{description}</p>
          ))}
      </div>

      {children}
    </div>
  );
}
