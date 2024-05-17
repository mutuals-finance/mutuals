"use client";

import { useToggle } from "react-use";

import Form from "@/components/Form";
import { FileWithPreview } from "@/components/Form/types";

import { defaultPayee, Payee } from "../PayeeList";
import NewSplitFormInner from "./NewSplitFormInner";

export interface CreateFormData {
  image: FileWithPreview;
  name: string;
  description: string;
  metadataLocked: boolean;
  payees: Payee[];
}

export function NewSplitForm() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  return (
    <Form<CreateFormData>
      onSubmit={() => toggleIsModalOpen()}
      onSubmitInvalid={(errors, data) => console.log("INVALID", errors, data)}
      defaultValues={{
        payees: [defaultPayee, defaultPayee],
      }}
    >
      {(props) => (
        <NewSplitFormInner
          isModalOpen={isModalOpen}
          onModalClose={() => toggleIsModalOpen()}
          {...props}
        />
      )}
    </Form>
  );
}
