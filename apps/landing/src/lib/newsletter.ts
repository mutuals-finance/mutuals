/**
 * Newsletter subscription types and utilities
 */

export interface NewsletterSubscribeRequest {
  email: string;
  mixpanelUserId?: string;
}

export interface NewsletterSubscribeResponse {
  success: boolean;
  message: string;
  error?: string;
  details?: string;
}

/**
 * Subscribe a user to the newsletter
 * @param email - User's email address
 * @param mixpanelUserId - Optional Mixpanel distinct_id for user tracking
 * @returns Promise with subscription result
 */
export async function subscribeToNewsletter(
  email: string,
  mixpanelUserId?: string,
): Promise<NewsletterSubscribeResponse> {
  try {
    const response = await fetch("/api/newsletter/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        mixpanelUserId,
      } satisfies NewsletterSubscribeRequest),
    });

    const data: NewsletterSubscribeResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to subscribe to newsletter");
    }

    return data;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw error;
  }
}
