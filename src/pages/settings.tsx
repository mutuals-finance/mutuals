import React from "react";
import PageHeader from "@/components/PageHeader";
import { NextPageWithLayout } from "#/app";

function SettingsHeader() {
  return <PageHeader title={"Settings"} showBack={false} />;
}
const SettingsPage: NextPageWithLayout = function SettingsPage() {
  return (
    <>
      <SettingsHeader />
      <section>
        <div className={"container grid lg:grid-cols-6 gap-4 lg:gap-8"}>
          <div />
        </div>
      </section>
    </>
  );
};

SettingsPage.Layout = "App";

export default SettingsPage;
