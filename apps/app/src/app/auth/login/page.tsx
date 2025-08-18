import AuthLoginWallet from "@/features/Auth/LoginWallet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in with Wallet",
};

export default function LoginPage() {
  return <AuthLoginWallet />;
}
