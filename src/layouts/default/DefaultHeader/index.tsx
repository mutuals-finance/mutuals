import Image from "next/image";
import logoIcon from "@/assets/svg/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="h-40 top-0 left-0 w-full flex flex-col">
        <div className="container mx-auto p-4 lg:p-8">
          <nav className="flex items-center justify-between flex-1">
            <Link href="/" className="w-24 hidden md:flex items-center">
              <Image src={logoIcon} alt="SplitFi" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
