"use client";

import { useToggle } from "react-use";

import Form from "@/components/Form";

import { PoolAddData } from "@/features/PoolAdd/types";
import FormGroup from "@/components/Form/FormGroup";
import FileUpload from "@/components/Form/FileUpload";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";
import Allocations from "@/features/PoolAdd/Allocations";
import { Button, Stack } from "@mutuals/ui";

export default function PoolAdd() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<PoolAddData>
      onSubmit={() => toggleIsModalOpen()}
      onSubmitInvalid={(errors, data) => console.log("INVALID", errors, data)}
      defaultValues={{ allocations: [] }}
    >
      {/*
      <PoolAddModal data={data} open={isModalOpen} onClose={onModalClose} />
*/}

      <FormGroup>
        <FileUpload label="Image" id="image" inputProps={{ maxW: "2xs" }} />

        <Input
          label="Name"
          id="name"
          validation={{ required: "Please enter a name" }}
        />
        <TextArea label="Description" id="description" />
      </FormGroup>

      <Allocations />

      <Stack direction="row">
        <Button size="lg" type="submit">
          Create Pool
        </Button>
      </Stack>
    </Form>
  );
}
