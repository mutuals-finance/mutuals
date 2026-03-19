"use client";

import {
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogRoot,
  type DialogRootProps,
  Heading,
  PinInput,
  Stack,
  Text,
} from "@mutuals/ui";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTimeoutFn } from "react-use";
import CountdownTimer from "@/components/countdown-timer";
import type { EmailLoginData } from "@/features/auth/login-email/index";

export type AuthLoginEmailCodeDialogProps = Omit<
  DialogRootProps,
  "children"
> & {
  onResendCode?: (data: EmailLoginData) => Promise<void>;
  onSubmitCode?: (data: EmailLoginData) => Promise<void>;
  isSubmitting?: boolean;
  isComplete?: boolean;
};

const RESENT_MESSAGE_DURATION = 10_000;
const CODE_LENGTH = 6;
const CODE_PATTERN = /^\d$/;

export default function AuthLoginEmailCodeDialog({
  onResendCode,
  onSubmitCode,
  isSubmitting = false,
  isComplete = false,
  open,
  ...props
}: AuthLoginEmailCodeDialogProps) {
  const { getValues, formState, resetField } = useFormContext<EmailLoginData>();
  const [isResending, setIsResending] = useState(false);
  const [showResentMessage, setShowResentMessage] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const [, , resetTimeout] = useTimeoutFn(() => {
    setShowResentMessage(false);
  }, RESENT_MESSAGE_DURATION);

  const handleResendCode = async () => {
    if (isResending || showResentMessage) {
      return;
    }

    setIsResending(true);

    try {
      setShowResentMessage(true);
      setIsExpired(false);

      resetTimeout();

      await onResendCode?.(getValues());
    } catch (error) {
      console.error("Failed to resend code:", error);
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = async () => {
    await onSubmitCode?.(getValues());
  };

  const handleExpire = () => {
    setIsExpired(true);
  };

  useEffect(() => {
    if (!open) {
      resetField("code", { defaultValue: [] });
    }
  }, [open, resetField]);

  const email = getValues().email;

  return (
    <DialogRoot open={open} {...props}>
      <DialogContent>
        <DialogBody>
          <Stack
            alignItems={"center"}
            direction="column"
            gap={"6"}
            pt={"6"}
            textAlign={"center"}
          >
            <Heading>Enter Code</Heading>

            <Text textStyle={"md"}>
              Welcome to Mutuals! Please enter your code to continue:
            </Text>

            <PinInput
              count={CODE_LENGTH}
              disabled={isComplete}
              id={"code"}
              otp={true}
              rules={{
                validate: {
                  complete: (value: string[]) =>
                    value.length === CODE_LENGTH || "Please enter all 6 digits",
                  allDigits: (value: string[]) =>
                    value.every((digit) => CODE_PATTERN.test(digit)) ||
                    "Code must contain only digits",
                },
              }}
              size="xl"
            />

            <Stack
              alignItems={"center"}
              color={"fg.muted"}
              gap="2"
              textAlign={"center"}
              textStyle={"xs"}
            >
              <Text>
                A one time authentication code has been sent to {email}.
              </Text>
              <Text>
                {isExpired ? (
                  <>Code expired. </>
                ) : (
                  <CountdownTimer
                    durationSeconds={60 * 10}
                    key={`timer-${showResentMessage}`}
                    onExpire={handleExpire}
                  >
                    {(formattedTime) => (
                      <>It expires in {formattedTime} minutes. </>
                    )}
                  </CountdownTimer>
                )}

                <Button
                  _hover={{ color: "fg.muted" }}
                  color={{ base: "fg", _disabled: "fg.muted" }}
                  cursor={{ base: "pointer", _disabled: "not-allowed" }}
                  disabled={showResentMessage}
                  fontWeight={"medium"}
                  loading={isResending}
                  onClick={handleResendCode}
                  position={"relative"}
                  unstyled={true}
                >
                  {showResentMessage ? "Code resent" : "Resend code"}
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
            disabled={isComplete || !formState.isValid}
            loading={(!isResending && isSubmitting) || formState.isLoading}
            onClick={handleSubmit}
          >
            Sign in
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
