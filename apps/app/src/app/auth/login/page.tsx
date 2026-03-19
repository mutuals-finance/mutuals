import type { Metadata } from "next";
import AuthLogin from "@/features/auth/login";
import type { AuthShellQueryParams } from "@/features/shell/login/provider";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage(props: {
  searchParams: Promise<AuthShellQueryParams>;
}) {
  const searchParams = await props.searchParams;
  return <AuthLogin {...searchParams} />;
}
