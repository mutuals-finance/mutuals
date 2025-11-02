import { openfort } from "@/lib/openfort";

// Use your own authentication middleware (JWT, sessions, API key, etc.) to authenticate the user here
function authenticateUser(request: Request): boolean {
  // Example: req.user = { id: 'user_123', email: 'user@example.com' };
  return true;
}

export async function POST(request: Request) {
  // Authenticate user
  if (!authenticateUser(request)) {
    return new Response(null, { status: 401 });
  }

  try {
    const session = await openfort.registerRecoverySession(
      process.env.NEXT_PUBLIC_OPENFORT_SHIELD_PUBLISHABLE_KEY!,
      process.env.OPENFORT_SHIELD_SECRET_KEY!,
      process.env.OPENFORT_SHIELD_ENCRYPTION_SHARE!,
    );

    return Response.json(
      { session },
      {
        status: 200,
        /*
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
*/
      },
    );
  } catch (e) {
    console.error("Internal server error:", e);
    return new Response(null, { status: 500 });
  }
}
