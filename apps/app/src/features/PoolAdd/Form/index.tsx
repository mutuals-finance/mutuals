"use client";

import { useToggle } from "react-use";

import Form from "@/components/Form";

import { PoolAddData } from "@/features/PoolAdd/types";
import PoolAddFormContent from "@/features/PoolAdd/Form/Content";
import PoolAddModal from "@/features/PoolAdd/Modal";
import { useAccount } from "wagmi";

export default function PoolAdd() {
  const [modalOpen, setModalOpen] = useToggle(false);
  const { address } = useAccount();

  return (
    <Form<PoolAddData>
      onSubmit={() => setModalOpen(true)}
      onSubmitInvalid={() => {
        console.log("Submit: invalid");
      }}
      defaultValues={{ ownerAddress: address, allocations: [] }}
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
