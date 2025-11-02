import AuthLogin from "@/features/Auth/Login";
import { Metadata } from "next";
import { StoreCredentialsOptions } from "@/features/Auth/LoginSocials";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage(props: {
  searchParams: Promise<{
    player_id?: string;
    openfortAuthProvider?: string;
    refresh_token?: string;
  }>;
}) {
  const query = await props.searchParams;
  console.log("openfort for query", query);

  let credentials: StoreCredentialsOptions | undefined = undefined;

  if (query.player_id && query.openfortAuthProvider && query.refresh_token) {
    const nestedQueryString = query.openfortAuthProvider.split("?")[1] || "";
    const nestedParams = new URLSearchParams(nestedQueryString);

    const accessToken = nestedParams.get("access_token") ?? "";

    credentials = {
      player: query.player_id,
      accessToken: accessToken,
      refreshToken: query.refresh_token,
    };

    console.log("openfort.auth.storedCredentials for query", {
      accessToken,
      query,
      credentials,
    });
  }

  return <AuthLogin credentials={credentials} />;
}
