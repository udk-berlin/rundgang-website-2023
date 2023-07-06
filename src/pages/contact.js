import Page from "@/components/pages/page";
import Contact from "@/components/pages/contact";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import React, {useState} from "react";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

export default function ContactPage() {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="contact">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            <Layout disableFilter={true} disableSlider={true} setIsLinkClicked={setIsLinkClicked} >
              <Contact />
            </Layout>
          </SavedProjectsProvider>
      }
    </Page>
  );
}
