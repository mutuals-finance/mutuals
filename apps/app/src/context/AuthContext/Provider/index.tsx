import { PropsWithChildren } from "react";
import { getViewer } from "@splitfi/sdk/server";
import ClientProvider from "@/context/AuthContext/Provider/ClientProvider";

export default async function AuthProvider({ children }: PropsWithChildren) {
  const redirectURL = "/";
  const { data } = await getViewer();

  return (
    <ClientProvider redirectTo={redirectURL} query={data}>
      {children}
    </ClientProvider>
  );
}
