import Page from "@/components/pages/page";
import Imprint from "@/components/pages/imprint";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import React, {useState} from "react";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

export default function ImprintPage() {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="imprint">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            <Layout disableFilter={true} disableSlider={true} setIsLinkClicked={setIsLinkClicked} >
              <Imprint />
            </Layout>
          </SavedProjectsProvider>
      }
    </Page>
  );
}
