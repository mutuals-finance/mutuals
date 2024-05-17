import WalletConnectContent from "@/app/auth/sign-in/WalletConnectContent";
import { cookies } from "next/headers";

interface SignInPageProps {}

export default function SignInPage({}: SignInPageProps) {
  const redirectURL = cookies().get("redirectURL")?.value;

  return <WalletConnectContent redirectURL={redirectURL} />;
}
