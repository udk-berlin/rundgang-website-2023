import React from "react";

import Page from "@/components/pages/page";
import Contact from "@/components/pages/contact";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

import { SavedProjectsProvider } from "@/providers/saved_projects";
import { useWindowSize, WindowSizeProvider } from "@/providers/window_size";

export default function ContactPage() {
  return (
    <Page title="contact">
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
          <Layout disableFilter={true} disableSlider={true}>
            <Contact />
          </Layout> :
          <LoadingLayout />
      }
    </SavedProjectsProvider>
  )
}