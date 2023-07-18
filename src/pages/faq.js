import React from "react";

import Page from "@/components/pages/page";
import Faq from "@/components/pages/faq";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

import { SavedProjectsProvider } from "@/providers/saved_projects";
import { LinkProvider, useLink } from "@/providers/link";

export default function FaqPage() {
  return (
    <Page title="faq">
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
              <Faq />
            </Layout>
          </SavedProjectsProvider>
      }
    </>
  )
}