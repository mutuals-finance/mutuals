import {
  Field,
  FileUpload,
  Input,
  Textarea,
  Stack,
  type StackProps,
} from "@mutuals/ui";

export type PoolAddInfoProps = StackProps;

export default function PoolAddInfo({ children, ...props }: PoolAddInfoProps) {
  return (
    <Stack {...props}>
      <Field label={"Owner"} id={"owner"}>
        <Input id="owner" />
      </Field>

      <Field id={"image"} label={"Image"}>
        <FileUpload
          id="image"
          maxW={"36"}
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
        />
      </Field>
      <Field id={"name"} label={"Name"}>
        <Input id="name" />
      </Field>
      <Field id={"description"} label={"Description"}>
        <Textarea id="description" />
      </Field>

      {children}
    </Stack>
  );
}
