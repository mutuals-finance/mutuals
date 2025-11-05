"use client";

import {
  Button,
  IconButton,
  Form,
  FormProps,
  Input,
  InputGroup,
  PinInput,
  Text,
  DialogRoot,
  DialogContent,
  DialogFooter,
  DialogBody,
  DialogHeader,
  DialogTitle,
  DialogActionTrigger,
  DialogCloseTrigger,
  Stack,
} from "@mutuals/ui";
import { useLoginWithEmail } from "@privy-io/react-auth";
import { useCallback, useState } from "react";
import { IoArrowForwardSharp, IoMailSharp } from "react-icons/io5";

export type EmailLoginData = {
  email: string;
  code: string[];
};

export type AuthLoginEmailProps = Omit<FormProps<EmailLoginData>, "children">;

export default function AuthLoginEmail(props: AuthLoginEmailProps) {
  const [codeDialogOpen, setCodeDialogOpen] = useState(false);

  const { sendCode, loginWithCode, state } = useLoginWithEmail({
    onComplete: ({
      user,
      isNewUser,
      wasAlreadyAuthenticated,
      loginMethod,
      loginAccount,
    }) => {
      console.log("User logged in successfully", user);
      console.log("Is new user:", isNewUser);
      console.log("Was already authenticated:", wasAlreadyAuthenticated);
      console.log("Login method:", loginMethod);
      console.log("Login account:", loginAccount);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const onSubmit = useCallback(
    async ({ email, code }: EmailLoginData) => {
      if (state.status == "awaiting-code-input") {
        await loginWithCode({ code: code.join("") });
      } else {
        await sendCode({ email: email });
        setCodeDialogOpen(true);
      }
    },
    [state, sendCode, loginWithCode, setCodeDialogOpen],
  );

  const codeSent = codeDialogOpen;

  return (
    <Form
      defaultValues={{ email: "", code: [] }}
      onSubmit={onSubmit}
      onSubmitInvalid={(data) => console.log("Invalid form data", data)}
      {...props}
    >
      {({ getValues }) => (
        <>
          <InputGroup
            w={"full"}
            startElement={<IoMailSharp />}
            endElement={
              <IconButton
                variant="subtle"
                size="md"
                loading={state.status == "sending-code"}
                disabled={codeSent}
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
              disabled={codeSent}
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
            />
          </InputGroup>

          <DialogRoot
            open={codeDialogOpen}
            onOpenChange={(e) => setCodeDialogOpen(e.open)}
          >
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter Code</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <Stack
                  direction="column"
                  alignItems={"center"}
                  textAlign={"center"}
                  gap={"6"}
                >
                  <Text textStyle={"md"}>
                    Welcome to Mutuals! Please enter your code to continue:
                  </Text>

                  <PinInput
                    size="xl"
                    count={6}
                    id={"code"}
                    otp={true}
                    disabled={state.status != "awaiting-code-input"}
                  />

                  <Stack
                    gap="2"
                    textStyle={"xs"}
                    color={"fg.subtle"}
                    alignItems={"center"}
                    textAlign={"center"}
                  >
                    <Text>
                      A one time authentication code has been sent to your
                      email.
                    </Text>
                    <Text>
                      It expires in 10 minutes.{" "}
                      <Button
                        unstyled={true}
                        cursor={"pointer"}
                        color={"fg.info"}
                      >
                        Resend code
                      </Button>
                    </Text>
                  </Stack>
                </Stack>
              </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button
                  loading={state.status == "submitting-code"}
                  disabled={state.status == "done"}
                  type={"button"}
                  onClick={() => onSubmit(getValues())}
                >
                  Sign in
                </Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        </>
      )}
    </Form>
  );
}
