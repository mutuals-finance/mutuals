import { BeehiivClient } from "@beehiiv/sdk";
import { type NextRequest, NextResponse } from "next/server";

const BEEHIIV_TOKEN = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(request: NextRequest) {
  try {
    if (!BEEHIIV_TOKEN) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    if (!BEEHIIV_PUBLICATION_ID) {
      return NextResponse.json(
        { error: "Publication ID not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { email, mixpanelUserId } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email address is required" },
        { status: 400 }
      );
    }

    const client = new BeehiivClient({ token: BEEHIIV_TOKEN });

    const customFields: Array<{ name: string; value: string }> = [];
    if (mixpanelUserId) {
      customFields.push({
        name: "mixpanel_user_id",
        value: mixpanelUserId,
      });
    }

    await client.subscriptions.create(BEEHIIV_PUBLICATION_ID, {
      email,
      reactivate_existing: true,
      send_welcome_email: true,
      utm_source: "landing",
      utm_medium: "footer_form",
      ...(customFields.length > 0 && { custom_fields: customFields }),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    // Handle specific Beehiiv errors
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: "Failed to subscribe to newsletter",
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
