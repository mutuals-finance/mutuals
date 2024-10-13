import { ReactNode } from "react";

import InputFieldArrayItem from "./Item";
import InputFieldArrayGroup, {
  InputFieldArrayGroupProps,
} from "@/components/Form/InputFieldArray/Group";

interface InputFieldArrayProps<TFieldValue>
  extends Omit<InputFieldArrayGroupProps<TFieldValue>, "children"> {
  defaultItem: TFieldValue;
  removeDisabled?: boolean;
  hideAdd?: boolean;
  children: (id: string) => ReactNode;
}

export default function InputFieldArray<TFieldValue>({
  defaultItem,
  hideAdd,
  removeDisabled,
  children,
  ...props
}: InputFieldArrayProps<TFieldValue>) {
  const { validation } = props;
  return (
    <InputFieldArrayGroup<TFieldValue> {...props}>
      {({ fields, append, remove }) =>
        fields.map((field, index) => (
          <InputFieldArrayItem
            key={field.id}
            removeDisabled={
              removeDisabled ||
              (!!validation?.minLength &&
                fields.length <= Number(validation.minLength))
            }
            onAdd={!hideAdd ? () => append(defaultItem) : undefined}
            onRemove={() => remove(index)}
          >
            {children(`${props.id}.${index}`)}
          </InputFieldArrayItem>
        ))
      }
    </InputFieldArrayGroup>
  );
}
