import { Field, FileUpload, Input, Textarea, Stack } from "@mutuals/ui";

export default function PoolAddFormInfo() {
  return (
    <Stack>
      <Field label={"Owner"} id={"ownerAddress"}>
        <Input id="ownerAddress" />
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
              color: "fg.muted",
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
    </Stack>
  );
}
