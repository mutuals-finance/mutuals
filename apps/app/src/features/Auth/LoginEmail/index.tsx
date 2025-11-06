"use client";

import { IconButton, Form, FormProps, Input, InputGroup } from "@mutuals/ui";
import { useState } from "react";
import { IoArrowForwardSharp, IoMailSharp } from "react-icons/io5";
import { useAuthLogin } from "@/features/Auth/Login/Provider";
import { useLoginWithEmail } from "@privy-io/react-auth";
import AuthLoginEmailCodeDialog from "@/features/Auth/LoginEmail/CodeDialog";

export type EmailLoginData = {
  email: string;
  code: string[];
};

export type AuthLoginEmailProps = Omit<FormProps<EmailLoginData>, "children">;

export default function AuthLoginEmail(props: AuthLoginEmailProps) {
  const { onComplete: onLoginComplete } = useAuthLogin();
  const { state, loginWithCode, sendCode } = useLoginWithEmail({
    onComplete: ({ user }) => onLoginComplete({ requiresWallet: !user.wallet }),
  });
  const [codeDialogOpen, setCodeDialogOpen] = useState(false);

  const handleSubmit = async (data: EmailLoginData) => {
    if (state.status === "awaiting-code-input" && codeDialogOpen) {
      // User submitted code input -> Submit the code
      await loginWithCode({ code: data.code.join("") });
      setCodeDialogOpen(false);
    } else if (state.status === "awaiting-code-input" && !codeDialogOpen) {
      // User submitted email input after closing the dialog -> don't submit the code and open dialog instead
      setCodeDialogOpen(true);
    } else {
      // User submitted email input -> send code and open dialog
      await sendCode({ email: data.email });
      setCodeDialogOpen(true);
    }
  };

  const handleResendCode = async (data: EmailLoginData) => {
    await sendCode({ email: data.email });
  };

  return (
    <Form
      defaultValues={{ email: "", code: [] }}
      onSubmit={handleSubmit}
      onSubmitInvalid={(data) => console.log("Invalid form data", data)}
      {...props}
    >
      <InputGroup
        w={"full"}
        startElement={<IoMailSharp />}
        endElement={
          <IconButton
            variant="subtle"
            size="md"
            loading={!codeDialogOpen && state.status === "sending-code"}
            disabled={codeDialogOpen}
            type={"submit"}
          >
            <IoArrowForwardSharp />
          </IconButton>
        }
      >
        <Input
          size="xl"
          id={"email"}
          placeholder={"Enter your email"}
          disabled={codeDialogOpen}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />
      </InputGroup>

      <AuthLoginEmailCodeDialog
        open={codeDialogOpen}
        onOpenChange={(e) => setCodeDialogOpen(e.open)}
        onResendCode={handleResendCode}
        onSubmitCode={handleSubmit}
        isSubmitting={state.status == "submitting-code"}
        isComplete={state.status == "done"}
      />
    </Form>
  );
}
