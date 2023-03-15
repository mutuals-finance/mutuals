import Chain from "@/layouts/app/AppHeader/Chain";

import Breadcrumbs from "@/components/Breadcrumbs";
import Logo from "@/layouts/app/AppHeader/Logo";
import User from "@/layouts/app/AppHeader/User";
import { useMount } from "react-use";
import { useState } from "react";

export default function AppHeader() {
  const [isReady, setIsReady] = useState(false);
  useMount(() => setIsReady(true));

  return (
    <>
      <div className={"h-14"} />
      <header className="fixed top-0 left-0 w-full h-14 right-0 bg-default flex z-10">
        <div className={"flex items-center flex-1 px-6 space-x-6"}>
          <Logo />
          <Breadcrumbs />

          <nav className="flex items-center justify-end flex-1">
            <ul
              className={"hidden md:flex md:items-center md:space-x-8 text-sm"}
            >
              <li>{isReady && <Chain />}</li>
              <li>{isReady && <User />}</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
