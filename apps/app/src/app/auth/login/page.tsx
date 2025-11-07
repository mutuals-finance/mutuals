import AuthLogin from "@/features/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage(props: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const searchParams = await props.searchParams;
  return <AuthLogin {...searchParams} />;
}
