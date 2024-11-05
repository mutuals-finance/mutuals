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
import PoolAddFormContent from "@/features/PoolAdd/Form/Content";

export default function PoolAdd() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<PoolAddData>
      onSubmit={(data) => {
        console.log("Submit: valid", { data });
      }}
      onSubmitInvalid={() => {
        console.log("Submit: invalid");
      }}
      defaultValues={{ allocations: [] }}
    >
      <PoolAddFormContent>
        {/*
      <PoolAddModal data={data} open={isModalOpen} onClose={onModalClose} />
*/}
      </PoolAddFormContent>
    </Form>
  );
}
