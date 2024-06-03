import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { PropsWithChildren } from "react";
import AuthCheck from "@/app/(dashboard)/DashboardLayout/AuthCheck";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <AuthCheck>
      <Sidebar>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Sidebar>
    </AuthCheck>
  );
}
