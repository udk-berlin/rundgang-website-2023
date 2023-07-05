import React from "react";

import Page from "@/components/pages/page";
import Landing from "@/components/pages/landing/landing";

export default function IndexPage() {
  return (
    <Page title="UdK Rundgang 2023" suffix={false}>
      <Landing />
    </Page>
  );
}
