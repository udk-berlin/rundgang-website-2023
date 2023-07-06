import React, {useState} from "react";

import { getFormatsFilters } from "@/utils/api/formats";
import { getStructuresFilters } from "@/utils/api/structures";
import {
  getTimelineLocations,
  getTimelineFormats,
  getTimelineStructures,
} from "@/utils/api/pages/timeline";

import { FilterProvider } from "@/providers/filter";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";
import { getItems } from "@/utils/api/items";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

const NUMBER_OF_SLIDER_STATES = 3

export async function getStaticProps() {
  const projects = await getItems();
  const locations = await getTimelineLocations();

  const formats = await getTimelineFormats();
  const formatsFilters = await getFormatsFilters();

  const structures = await getTimelineStructures();
  const structuresFilters = await getStructuresFilters();

  return {
    props: {
      projects,
      locations,
      formats,
      formatsFilters,
      structures,
      structuresFilters,
    },
  };
}

export default function TimelinePage({
  projects,
  locations,
  formats,
  formatsFilters,
  structures,
  structuresFilters,
}) {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="timeline">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            <FilterProvider
              projects={projects}
              locations={locations}
              formats={formats}
              formatsFilters={formatsFilters}
              structures={structures}
              structuresFilters={structuresFilters}>
              <Layout numberOfSliderStates={NUMBER_OF_SLIDER_STATES} setIsLinkClicked={setIsLinkClicked}>
                <Timeline />
              </Layout>
            </FilterProvider>
          </SavedProjectsProvider>
      }
    </Page>
  );
}