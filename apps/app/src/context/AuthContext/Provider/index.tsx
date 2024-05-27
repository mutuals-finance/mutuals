import { PropsWithChildren } from "react";
import AuthProviderContent from "@/context/AuthContext/Provider/AuthProviderContent";
import { getViewer } from "@splitfi/sdk/server";

export default async function AuthProvider({ children }: PropsWithChildren) {
  const redirectURL = "/";
  const { data } = await getViewer();

  return (
    <AuthProviderContent redirectTo={redirectURL} query={data}>
      {children}
    </AuthProviderContent>
  );
}
