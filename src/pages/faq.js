import Page from "@/components/pages/page";
import Faq from "@/components/pages/faq";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import React from "react";

export default function FaqPage() {
  return (
    <Page title="faq">
      <SavedProjectsProvider>
        <Faq />
      </SavedProjectsProvider>
    </Page>
  );
}
