"use client";

import { Button, Form, FormProps, Input, InputGroup } from "@mutuals/ui";
import { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { useLoginWithEmail } from "@privy-io/react-auth";
import AuthLoginEmailCodeDialog from "@/features/Auth/LoginEmail/CodeDialog";
import { useAuthShell } from "@/features/Shell/Login/Provider";

export type EmailLoginData = {
  email: string;
  code: string[];
};

export type AuthLoginEmailProps = Omit<FormProps<EmailLoginData>, "children">;

export default function AuthLoginEmail(props: AuthLoginEmailProps) {
  const { onLoginComplete, onLoginError, onBeforeLogin } = useAuthShell();
  const { state, loginWithCode, sendCode } = useLoginWithEmail({
    onComplete: ({ user, isNewUser }) =>
      onLoginComplete({ requiresWallet: !user.wallet, isNewUser, user }),
    onError: (errorCode) =>
      onLoginError(new Error(`Email login failed: ${errorCode}`)),
  });

  const [codeDialogOpen, setCodeDialogOpen] = useState(false);

  const loading =
    state.status === "sending-code" ||
    state.status === "submitting-code" ||
    state.status === "done";

  const handleSubmit = async (data: EmailLoginData) => {
    if (state.status === "awaiting-code-input" && codeDialogOpen) {
      // User submitted code input -> Submit the code
      setCodeDialogOpen(false);
      await loginWithCode({ code: data.code.join("") });
    } else if (state.status === "awaiting-code-input" && !codeDialogOpen) {
      // User submitted email input after closing the dialog -> don't submit the code and open dialog instead
      setCodeDialogOpen(true);
    } else {
      // User submitted email input -> send code and open dialog
      onBeforeLogin();
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
          <Button
            variant="subtle"
            size="sm"
            loading={!codeDialogOpen && loading}
            disabled={codeDialogOpen}
            type={"submit"}
          >
            Confirm
          </Button>
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
