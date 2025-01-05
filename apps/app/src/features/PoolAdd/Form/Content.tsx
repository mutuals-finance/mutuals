import {
  Textarea,
  Button,
  Input,
  Group,
  Field,
  Fieldset,
  FileUpload,
} from "@mutuals/ui";

import Allocations from "@/features/PoolAdd/Allocations";

interface PoolAddFormContentProps {
  onModalClose?: () => void;
  isModalOpen?: boolean;
}

export default function PoolAddFormContent({}: PoolAddFormContentProps) {
  return (
    <>
      <Fieldset.Root maxW={"xl"}>
        <Fieldset.Content>
          <Field label={"Owner"} id={"ownerAddress"}>
            <Input id="ownerAddress" />
          </Field>
          <Field id={"image"} label={"Image"}>
            <FileUpload
              id="image"
              maxW={"3xs"}
              dropzoneProps={{ maxW: "3xs", minH: "3xs" }}
            />
          </Field>
          <Field id={"name"} label={"Name"}>
            <Input id="name" />
          </Field>
          <Field id={"description"} label={"Description"}>
            <Textarea id="description" />
          </Field>
        </Fieldset.Content>
      </Fieldset.Root>

      <Allocations />

      <Group gap={"6"}>
        <Button size="xl" type="button" variant={"subtle"}>
          Save draft
        </Button>
        <Button size="xl" type="submit">
          Confirm and review
        </Button>
      </Group>
    </>
  );
}
