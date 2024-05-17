import WalletConnectContent from "@/app/auth/sign-in/WalletConnectContent";
import { cookies } from "next/headers";

export default function SignInPage() {
  const redirectURL = cookies().get("redirectURL")?.value;

  return <WalletConnectContent redirectURL={redirectURL} />;
}
