import React from "react";
import { ButtonPrimary, ButtonSecondary } from "@/components/Button";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export function HomeHero() {
  return (
    <header className={"min-h-screen flex items-center"}>
      <div className={"container max-w-2xl text-center space-y-8"}>
        <h1 className={"text-7xl font-semibold"}>Share your Revenues</h1>

        <h2 className={"text-lg"}>
          The easiest way to split your smart contract profits - Setup once and
          never rely on single trusted parties.
        </h2>

        <div className={"flex flex-col justify-center items-center space-y-4"}>
          <div className={"flex justify-center items-center space-x-6"}>
            <Link href={"/splits"}>
              <ButtonPrimary
                rounded={"base"}
                size={"lg"}
                iconAfter={<IoArrowForward />}
              >
                Get Started
              </ButtonPrimary>
            </Link>
            <ButtonSecondary rounded={"base"} size={"lg"}>
              How it works
            </ButtonSecondary>
          </div>
          <p className={"text-xs leading-relaxed"}>
            Already using SplitFi?&nbsp;
            <Link href={"/splits"} className={"link-2"}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}
