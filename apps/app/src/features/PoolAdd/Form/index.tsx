"use client";

import { useToggle } from "react-use";

import Form from "@/components/Form";

import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddFormContent from "@/features/PoolAdd/Form/Content";
import PoolAddModal from "@/features/PoolAdd/Modal";

export default function PoolAdd() {
  const [modalOpen, setModalOpen] = useToggle(false);

  return (
    <Form<PoolAddData>
      onSubmit={() => setModalOpen(true)}
      onSubmitInvalid={() => {
        console.log("Submit: invalid");
      }}
      defaultValues={{ allocations: [] }}
    >
      {(methods) => (
        <>
          <PoolAddFormContent />
          <PoolAddModal
            open={modalOpen}
            onOpenChange={({ open }) => setModalOpen(open)}
            {...methods}
          />
        </>
      )}
    </Form>
  );
}
