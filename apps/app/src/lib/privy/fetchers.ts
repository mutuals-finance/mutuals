import { PrivyClient } from "@privy-io/node";
import { cookies } from "next/headers";

const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID ?? "";
const appSecret = process.env.PRIVY_APP_SECRET ?? "";

if (appId == "" || appSecret == "") {
  console.warn("Privy environment variables are missing");
}

const privyClient = new PrivyClient({ appId, appSecret });

export const getAuthToken = async () => {
  const authToken = (await cookies()).get("privy-token")?.value;
  if (authToken) {
    return privyClient.utils().auth().verifyAuthToken(authToken);
  }
};

export const me = async () => {
  const authToken = await getAuthToken();
  if (authToken) {
    return privyClient.users()._get(authToken.user_id);
  }
};

export const getMyWallets = async () => {
  const authToken = await getAuthToken();
  if (authToken) {
    return privyClient.wallets().list({ user_id: authToken.user_id });
  }
};
