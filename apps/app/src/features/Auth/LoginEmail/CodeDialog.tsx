"use client";

import {
  Button,
  PinInput,
  Text,
  DialogRoot,
  DialogContent,
  DialogFooter,
  DialogBody,
  DialogActionTrigger,
  DialogCloseTrigger,
  Stack,
  Heading,
  DialogRootProps,
} from "@mutuals/ui";
import CountdownTimer from "@/components/CountdownTimer";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useTimeoutFn } from "react-use";
import { EmailLoginData } from "@/features/Auth/LoginEmail/index";

export type AuthLoginEmailCodeDialogProps = Omit<
  DialogRootProps,
  "children"
> & {
  onResendCode?: (data: EmailLoginData) => Promise<void>;
  onSubmitCode?: (data: EmailLoginData) => Promise<void>;
  isSubmitting?: boolean;
  isComplete?: boolean;
};

const RESENT_MESSAGE_DURATION = 10000;
const CODE_LENGTH = 6;

export default function AuthLoginEmailCodeDialog({
  onResendCode,
  onSubmitCode,
  isSubmitting = false,
  isComplete = false,
  ...props
}: AuthLoginEmailCodeDialogProps) {
  const { getValues } = useFormContext<EmailLoginData>();
  const [isResending, setIsResending] = useState(false);
  const [showResentMessage, setShowResentMessage] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const [, , resetTimeout] = useTimeoutFn(() => {
    setShowResentMessage(false);
  }, RESENT_MESSAGE_DURATION);

  useEffect(() => {
    if (!props.open) {
      setIsExpired(false);
      setShowResentMessage(false);
      setIsResending(false);
    }
  }, [props.open]);

  const handleResendCode = async () => {
    if (isResending || showResentMessage) return;

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

  const email = getValues().email;

  return (
    <DialogRoot {...props}>
      <DialogContent>
        <DialogBody>
          <Stack
            direction="column"
            alignItems={"center"}
            textAlign={"center"}
            gap={"6"}
            pt={"6"}
          >
            <Heading>Enter Code</Heading>

            <Text textStyle={"md"}>
              Welcome to Mutuals! Please enter your code to continue:
            </Text>

            <PinInput
              size="xl"
              count={CODE_LENGTH}
              id={"code"}
              otp={true}
              disabled={isComplete}
              rules={{
                validate: {
                  complete: (value: string[]) =>
                    value.length === CODE_LENGTH || "Please enter all 6 digits",
                  allDigits: (value: string[]) =>
                    value.every((digit) => /^\d$/.test(digit)) ||
                    "Code must contain only digits",
                },
              }}
            />

            <Stack
              gap="2"
              textStyle={"xs"}
              color={"fg.muted"}
              alignItems={"center"}
              textAlign={"center"}
            >
              <Text>
                A one time authentication code has been sent to {email}.
              </Text>
              <Text>
                {!isExpired ? (
                  <CountdownTimer
                    key={"timer-" + showResentMessage}
                    durationSeconds={60 * 10}
                    onExpire={handleExpire}
                  >
                    {(formattedTime) => (
                      <>It expires in {formattedTime} minutes. </>
                    )}
                  </CountdownTimer>
                ) : (
                  <>Code expired. </>
                )}

                <Button
                  unstyled={true}
                  position={"relative"}
                  cursor={{ base: "pointer", _disabled: "not-allowed" }}
                  fontWeight={"medium"}
                  color={{ base: "fg", _disabled: "fg.muted" }}
                  _hover={{ color: "fg.muted" }}
                  disabled={showResentMessage}
                  loading={isResending}
                  onClick={handleResendCode}
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
            loading={!isResending && isSubmitting}
            disabled={isComplete}
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
