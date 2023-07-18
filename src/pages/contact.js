import React from "react";

import Page from "@/components/pages/page";
import Contact from "@/components/pages/contact";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

import { SavedProjectsProvider } from "@/providers/saved_projects";
import { LinkProvider, useLink } from "@/providers/link";

export default function ContactPage() {
  return (
    <Page title="contact">
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
          <SavedProjectsProvider>
            <Layout disableFilter={true} disableSlider={true}>
              <Contact />
            </Layout>
          </SavedProjectsProvider>
      }
    </>
  )
}
