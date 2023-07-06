import React, {useState} from "react";

import Page from "@/components/pages/page";
import Landing from "@/components/pages/landing/landing";
import LoadingLayout from "@/components/layout/loading";

export default function IndexPage() {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="UdK Rundgang 2023" suffix={false}>
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <Landing setIsLinkClicked={setIsLinkClicked} />
      }
    </Page>
  );
}