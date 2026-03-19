import {
  Field,
  FileUpload,
  Input,
  Stack,
  type StackProps,
  Textarea,
} from "@mutuals/ui";

export type PoolAddInfoProps = StackProps;

export default function PoolAddInfo({ children, ...props }: PoolAddInfoProps) {
  return (
    <Stack {...props}>
      <Field id={"owner"} label={"Owner"}>
        <Input id="owner" />
      </Field>

      <Field id={"image"} label={"Image"}>
        <FileUpload
          dropzoneProps={{
            maxW: "36",
            minH: "36",
            label: "Upload pool image",
            gap: "2",
            iconProps: {
              color: "fg.subtle",
              fontSize: "md",
            },
          }}
          id="image"
          maxW={"36"}
        />
      </Field>
      <Field id={"name"} label={"Name"}>
        <Input id="name" />
      </Field>
      <Field id={"description"} label={"Description"}>
        <Textarea id="description" minH={"4lh"} />
      </Field>

      {children}
    </Stack>
  );
}
