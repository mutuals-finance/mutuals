import AuthLogin from "@/features/Auth/Login";
import { Metadata } from "next";
import { AuthShellQueryParams } from "@/features/Shell/Login/Provider";

export const metadata: Metadata = {
  title: "Sign in",
};

export default async function LoginPage(props: {
  searchParams: Promise<AuthShellQueryParams>;
}) {
  const searchParams = await props.searchParams;
  return <AuthLogin {...searchParams} />;
}
