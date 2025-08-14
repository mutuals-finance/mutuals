import AuthLoginWallet from "@/features/Auth/LoginWallet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login with Wallet",
};

export default function LoginPage() {
  return <AuthLoginWallet />;
}
