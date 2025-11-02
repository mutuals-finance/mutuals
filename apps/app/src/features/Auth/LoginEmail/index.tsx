"use client";

import {
  Button,
  IconButton,
  Form,
  FormProps,
  Input,
  InputGroup,
  Stack,
  useDisclosure,
  Presence,
  Show,
  PasswordInput,
} from "@mutuals/ui";
import { useEmailAuth } from "@openfort/react";
import { IoArrowForwardSharp, IoKeySharp, IoMailSharp } from "react-icons/io5";

export type AuthLoginEmailProps = Omit<FormProps, "children">;

export default function AuthLoginEmail(props: AuthLoginEmailProps) {
  const { open, onToggle } = useDisclosure();

  const {
    signInEmail,
    signUpEmail,
    linkEmail,
    verifyEmail,
    requestResetPassword,
    resetPassword,
    reset,
    isLoading,
    isError,
    isSuccess,
    isAwaitingInput,
    requiresEmailVerification,
    error,
  } = useEmailAuth({
    emailVerificationRedirectTo: "https://app.example.com/auth/callback",
    throwOnError: true,
    onSuccess: () => {},
    onError: () => {},
    onSettled: () => {},
  });

  const handleSignIn = async (email: string, password: string) => {
    const result = await signInEmail({ email, password });
    if (result.requiresEmailVerification) {
      // prompt user to check inbox for the verification code
    }
  };

  return (
    <Form
      onSubmit={(data) => signInEmail({ email: "", password: "" })}
      {...props}
    >
      <InputGroup
        w={"full"}
        startElement={<IoMailSharp />}
        endElement={
          <Show when={!open}>
            <IconButton variant="subtle" size="md" onClick={onToggle}>
              <IoArrowForwardSharp />
            </IconButton>
          </Show>
        }
      >
        <Input size="xl" id={"email"} placeholder={"Enter your email"} />
      </InputGroup>

      <Presence
        present={open}
        animationName={{ _open: "fade-in", _closed: "fade-out" }}
        animationDuration="moderate"
      >
        <Stack>
          <InputGroup flex={"1"} startElement={<IoKeySharp />}>
            <PasswordInput
              size="xl"
              id={"password"}
              placeholder="Enter your password"
            />
          </InputGroup>
          <Button variant="subtle" size="lg">
            Sign in
          </Button>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button variant="ghost" size="xs">
              Sign up instead
            </Button>

            <Button variant="ghost" size="xs">
              Forgot password
            </Button>
          </Stack>
        </Stack>
      </Presence>
    </Form>
  );
}
