import React from "react";
import PageHeader from "@/components/PageHeader";
import { ButtonSecondary } from "@/components/Button";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";
import Input from "@/components/Form/Input";
import { SplitListing } from "@/templates/split/list";
import { NextPageWithLayout } from "#/app";

function SplitsPageHeader() {
  return <PageHeader showBack={false} title={"Your Splits"} />;
}

function SplitListingHeader() {
  return (
    <section className={"!pb-0"}>
      <div className="container">
        <div className={"flex w-full max-w-4xl space-x-4 pt-8 lg:pt-12"}>
          <Input
            placeholder={"Search..."}
            className={"flex-1"}
            id={"split-search"}
          />
          <div className={"flex-shrink-0"}>
            <Link href={"/splits/new"} passHref>
              <ButtonSecondary icon={<IoAdd />} rounded={"base"}>
                New Split
              </ButtonSecondary>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const SplitsPage: NextPageWithLayout = function () {
  return (
    <>
      <SplitsPageHeader />
      <SplitListingHeader />
      <SplitListing />
    </>
  );
};

export default SplitsPage;
