import React from "react";

import Page from "@/components/pages/page";
import Landing from "@/components/pages/landing/landing";
import LoadingLayout from "@/components/layout/loading";
import { LinkProvider, useLink } from "@/providers/link";

export default function IndexPage() {
  return (
    <Page title="UdK Rundgang 2023" suffix={false}>
      <LinkProvider>
        <LinkProviderChildren />
      </LinkProvider>
    </Page>
  );
}

function LinkProviderChildren() {
  const link = useLink()

  return (
    <>
      {
        link.clicked ?
          <LoadingLayout /> :
          <Landing />
      }
    </>
  )
}