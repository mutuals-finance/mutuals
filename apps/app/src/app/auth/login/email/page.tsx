import AuthLoginEmail from "@/features/Auth/LoginEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login with Email",
};

export default function SignInEmailPage() {
  return <AuthLoginEmail />;
}
