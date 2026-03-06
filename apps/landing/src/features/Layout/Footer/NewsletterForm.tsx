"use client";

import {
  Field,
  Form,
  IconButton,
  Input,
  InputGroup,
  Text,
  type StackProps,
  Link,
} from "@mutuals/ui";

import { IoSend, IoCheckmarkCircle } from "react-icons/io5";
import { useNewsletterSubscription } from "@/features/Layout/useNewsletterSubscription";

export type LayoutFooterNewsletterFormProps = Omit<
  StackProps,
  "children" | "onSubmit"
>;

type NewsletterFormData = {
  email: string;
};

export default function LayoutFooterNewsletterForm(
  props: LayoutFooterNewsletterFormProps,
) {
  const { status, message, subscribe } = useNewsletterSubscription({
    source: "footer",
  });

  return (
    <>
      <Form<NewsletterFormData>
        w={"full"}
        values={{ email: "" }}
        onSubmit={(data) => subscribe(data.email)}
        noValidate={true}
        {...props}
      >
        {({ formState }) => {
          const emailError = formState.errors.email;
          const hasValidationError = !!emailError;
          const hasBackendError = status === "error";
          const isInvalid = hasValidationError || hasBackendError;

          const errorMessage = hasValidationError
            ? emailError.message
            : hasBackendError
              ? message
              : undefined;

          return (
            <Field
              id={"email"}
              label={"Email address"}
              invalid={isInvalid}
              errorText={errorMessage}
            >
              <InputGroup
                w={"full"}
                flex="1"
                endElement={
                  status === "success" ? (
                    <IconButton
                      size="xs"
                      variant={"ghost"}
                      aria-label="Subscribed"
                      color="fg.success"
                      disabled
                    >
                      <IoCheckmarkCircle />
                    </IconButton>
                  ) : (
                    <IconButton
                      size="xs"
                      variant={"ghost"}
                      aria-label="Subscribe"
                      type="submit"
                      disabled={status === "loading" || formState.isSubmitting}
                    >
                      <IoSend />
                    </IconButton>
                  )
                }
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  disabled={
                    status === "loading" ||
                    status === "success" ||
                    formState.isSubmitting
                  }
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                />
              </InputGroup>

              {status === "success" && (
                <Text color="fg.success" textStyle="xs" mt="1">
                  {message || "Successfully subscribed!"}
                </Text>
              )}
            </Field>
          );
        }}
      </Form>

      <Text textStyle={"2xs"} lineHeight="moderate" color={"fg.subtle"} mt="1">
        By subscribing, you agree to receive updates from Mutuals and
        acknowledge that your information will be processed by beehiiv in
        accordance with their{" "}
        <Link
          external={true}
          variant={"underline"}
          color={"fg.muted"}
          arrow={false}
          href={"https://www.beehiiv.com/privacy"}
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          external={true}
          variant={"underline"}
          color={"fg.muted"}
          arrow={false}
          href={"https://www.beehiiv.com/tou"}
        >
          Terms of Use
        </Link>
        . You can unsubscribe at any time.
      </Text>
    </>
  );
}
