import React from 'react';
import { get, useFieldArray, useFormContext } from 'react-hook-form';
import { IoAdd } from 'react-icons/io5';

import { ButtonLink, ButtonSecondary } from '@/components/Button';
import FormItemHintAndError from '@/components/Form/FormItem/FormItemHintAndError';
import { InputDefaultProps } from '@/components/Form/types';

import { InputFieldArrayItem } from './InputFieldArrayItem';

interface InputFieldArrayProps<TFieldValue>
  extends Omit<InputDefaultProps, 'label' | 'placeholder' | 'readOnly'> {
  defaultItem: TFieldValue;
  removeDisabled?: boolean;
  children: (id: string) => React.ReactNode;
}

export default function InputFieldArray<TFieldValue>({
  id,
  validation,
  children,
  defaultItem,
  helperText,
  removeDisabled,
  hideError = false,
}: InputFieldArrayProps<TFieldValue>) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const { fields, append, remove } = useFieldArray({
    name: id, // unique name for your Field Array
    rules: validation,
  });

  return (
    <div className={'flex flex-col space-y-6'}>
      <ul className={'flex flex-col space-y-3'}>
        {fields.map((field, index) => (
          <InputFieldArrayItem
            key={field.id}
            removeDisabled={
              removeDisabled ||
              (!!validation?.minLength && fields.length <= validation.minLength)
            }
            onAdd={() => append(defaultItem)}
            onRemove={() => remove(index)}
          >
            {children(`${id}[${index}]`)}
          </InputFieldArrayItem>
        ))}
      </ul>

      <FormItemHintAndError {...{ error, hideError, helperText }} />
    </div>
  );
}
