"use client";

import { Button, Form, type FormProps, Input, InputGroup } from "@mutuals/ui";
import { useLoginWithEmail } from "@privy-io/react-auth";
import { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import AuthLoginEmailCodeDialog from "@/features/auth/login-email/code-dialog";
import { useAuthShell } from "@/features/shell/login/provider";

export interface EmailLoginData {
  code: string[];
  email: string;
}

export type AuthLoginEmailProps = Omit<FormProps<EmailLoginData>, "children">;

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
        endElement={
          <Button
            disabled={codeDialogOpen}
            loading={!codeDialogOpen && loading}
            size="sm"
            type={"submit"}
            variant="subtle"
          >
            Confirm
          </Button>
        }
        startElement={<IoMailSharp />}
        w={"full"}
      >
        <Input
          disabled={codeDialogOpen}
          id={"email"}
          placeholder={"Enter your email"}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailPattern,
              message: "Invalid email address",
            },
          }}
          size="xl"
        />
      </InputGroup>

      <AuthLoginEmailCodeDialog
        isComplete={state.status === "done"}
        isSubmitting={state.status === "submitting-code"}
        onOpenChange={(e) => setCodeDialogOpen(e.open)}
        onResendCode={handleResendCode}
        onSubmitCode={handleSubmit}
        open={codeDialogOpen}
      />
    </Form>
  );
}
