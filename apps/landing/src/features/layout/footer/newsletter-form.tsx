"use client";

import {
  Field,
  Form,
  IconButton,
  Input,
  InputGroup,
  Link,
  type StackProps,
  Text,
} from "@mutuals/ui";

import { IoCheckmarkCircle, IoSend } from "react-icons/io5";
import { useNewsletterSubscription } from "@/features/layout/use-newsletter-subscription";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export type LayoutFooterNewsletterFormProps = Omit<
  StackProps,
  "children" | "onSubmit"
>;

interface NewsletterFormData {
  email: string;
}

export default function LayoutFooterNewsletterForm(
  props: LayoutFooterNewsletterFormProps
) {
  const { status, message, subscribe } = useNewsletterSubscription({
    source: "footer",
  });

  return (
    <>
      <Form<NewsletterFormData>
        noValidate={true}
        onSubmit={(data) => subscribe(data.email)}
        values={{ email: "" }}
        w={"full"}
        {...props}
      >
        {({ formState }) => {
          const emailError = formState.errors.email;
          const hasValidationError = !!emailError;
          const hasBackendError = status === "error";
          const isInvalid = hasValidationError || hasBackendError;

          let errorMessage: string | undefined;
          if (hasValidationError) {
            errorMessage = emailError.message;
          } else if (hasBackendError) {
            errorMessage = message;
          }

          return (
            <Field
              errorText={errorMessage}
              id={"email"}
              invalid={isInvalid}
              label={"Email address"}
            >
              <InputGroup
                endElement={
                  status === "success" ? (
                    <IconButton
                      aria-label="Subscribed"
                      color="fg.success"
                      disabled
                      size="xs"
                      variant={"ghost"}
                    >
                      <IoCheckmarkCircle />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="Subscribe"
                      disabled={status === "loading" || formState.isSubmitting}
                      size="xs"
                      type="submit"
                      variant={"ghost"}
                    >
                      <IoSend />
                    </IconButton>
                  )
                }
                flex="1"
                w={"full"}
              >
                <Input
                  disabled={
                    status === "loading" ||
                    status === "success" ||
                    formState.isSubmitting
                  }
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Invalid email address",
                    },
                  }}
                  type="email"
                />
              </InputGroup>

              {status === "success" && (
                <Text color="fg.success" mt="1" textStyle="xs">
                  {message || "Successfully subscribed!"}
                </Text>
              )}
            </Field>
          );
        }}
      </Form>

      <Text color={"fg.subtle"} lineHeight="moderate" mt="1" textStyle={"2xs"}>
        By subscribing, you agree to receive updates from Mutuals and
        acknowledge that your information will be processed by beehiiv in
        accordance with their{" "}
        <Link
          arrow={false}
          color={"fg.muted"}
          external={true}
          href={"https://www.beehiiv.com/privacy"}
          variant={"underline"}
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          arrow={false}
          color={"fg.muted"}
          external={true}
          href={"https://www.beehiiv.com/tou"}
          variant={"underline"}
        >
          Terms of Use
        </Link>
        . You can unsubscribe at any time.
      </Text>
    </>
  );
}
