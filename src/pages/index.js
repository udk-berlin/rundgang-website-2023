import React from "react";

import Page from "@/components/pages/page";
import Landing from "@/components/pages/landing/landing";
import LoadingLayout from "@/components/layout/loading";
import { LinkProvider, useLink } from "@/providers/link";
import { WindowSizeProvider, useWindowSize } from "@/providers/window_size";
import {SavedProjectsProvider} from "@/providers/saved_projects";

export default function IndexPage() {
  return (
    <Page title="UdK Rundgang 2023" suffix={false}>
      <WindowSizeProvider>
        <WindowSizeChildren />
      </WindowSizeProvider>
    </Page>
  );
}

function WindowSizeChildren () {
  const windowSize = useWindowSize()

  return (
    <SavedProjectsProvider>
      {
        windowSize ?
          <LinkProvider>
            <LinkProviderChildren />
          </LinkProvider> :
          <LoadingLayout />
      }
    </SavedProjectsProvider>
  )
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