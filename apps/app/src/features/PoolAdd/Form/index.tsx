"use client";

import { useToggle } from "react-use";

import Form from "@/components/Form";

import { defaultPayee } from "@/features/PoolAdd/Payees";
import PoolAddFormContent from "@/features/PoolAdd/Form/Content";
import { PoolAddData } from "@/features/PoolAdd/types";

export default function PoolAdd() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<PoolAddData>
      onSubmit={() => toggleIsModalOpen()}
      onSubmitInvalid={(errors, data) => console.log("INVALID", errors, data)}
      defaultValues={{
        payees: [defaultPayee, defaultPayee],
      }}
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
