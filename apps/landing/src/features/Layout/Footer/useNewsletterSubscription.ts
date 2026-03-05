import { useState } from "react";
import {
  useMixpanel,
  ANALYTICS_EVENTS,
  type NewsletterSubscribedProperties,
  type NewsletterSubscriptionFailedProperties,
} from "@mutuals/analytics-nextjs";
import { subscribeToNewsletter } from "@/lib/newsletter";

export type NewsletterSubscriptionStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export interface UseNewsletterSubscriptionOptions {
  source?: string;
}

export interface UseNewsletterSubscriptionReturn {
  status: NewsletterSubscriptionStatus;
  message: string;
  subscribe: (email: string) => Promise<void>;
  reset: () => void;
}

export function useNewsletterSubscription(
  options: UseNewsletterSubscriptionOptions = {},
): UseNewsletterSubscriptionReturn {
  const { source = "unknown" } = options;
  const [status, setStatus] = useState<NewsletterSubscriptionStatus>("idle");
  const [message, setMessage] = useState("");
  const mixpanel = useMixpanel();

  const subscribe = async (email: string) => {
    setStatus("loading");
    setMessage("");

    try {
      const mixpanelUserId = mixpanel?.get_distinct_id();

      const result = await subscribeToNewsletter(email, mixpanelUserId);

      setStatus("success");
      setMessage(result.message);

      mixpanel?.track(ANALYTICS_EVENTS.NEWSLETTER_SUBSCRIBED, {
        email,
        source,
        mixpanel_user_id: mixpanelUserId,
      } satisfies NewsletterSubscribedProperties);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again.",
      );

      mixpanel?.track(ANALYTICS_EVENTS.NEWSLETTER_SUBSCRIPTION_FAILED, {
        email,
        source,
        error: error instanceof Error ? error.message : "Unknown error",
      } satisfies NewsletterSubscriptionFailedProperties);
    }
  };

  const reset = () => {
    setStatus("idle");
    setMessage("");
  };

  return {
    status,
    message,
    subscribe,
    reset,
  };
}
