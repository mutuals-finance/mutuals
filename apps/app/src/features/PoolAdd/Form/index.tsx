"use client";

import { useToggle } from "react-use";

import Form from "@/components/Form";

import PoolAddFormContent from "@/features/PoolAdd/Form/Content";
import { PoolAddData } from "@/features/PoolAdd/types";

export default function PoolAdd() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<PoolAddData>
      onSubmit={() => toggleIsModalOpen()}
      onSubmitInvalid={(errors, data) => console.log("INVALID", errors, data)}
    >
      {(props) => (
        <PoolAddFormContent
          isModalOpen={isModalOpen}
          onModalClose={() => toggleIsModalOpen()}
          {...props}
        />
      )}
    </Form>
  );
}
