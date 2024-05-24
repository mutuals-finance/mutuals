import { PropsWithChildren } from "react";
import AuthProviderClient from "@/context/AuthContext/AuthContextClient";

export default function AuthProvider({ children }: PropsWithChildren) {
  const redirectURL = "/";

  return (
    <AuthProviderClient redirectTo={redirectURL}>{children}</AuthProviderClient>
  );
}
