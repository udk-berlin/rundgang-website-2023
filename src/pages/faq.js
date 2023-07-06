import Page from "@/components/pages/page";
import Faq from "@/components/pages/faq";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import React, {useState} from "react";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

export default function FaqPage() {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="faq">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            <Layout disableFilter={true} disableSlider={true} setIsLinkClicked={setIsLinkClicked} >
              <Faq />
            </Layout>
          </SavedProjectsProvider>
      }
    </Page>
  );
}