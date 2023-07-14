import React, {useState} from "react";

import { getFormatsFilters } from "@/utils/api/formats";
import { getStructuresFilters } from "@/utils/api/structures";
import {
  getTimelineFormats,
  getTimelineStructures,
} from "@/utils/api/pages/timeline";

import { FilterProvider } from "@/providers/filter";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";
import { DataProvider, useData } from "@/providers/data";

const NUMBER_OF_SLIDER_STATES = 3

export async function getStaticProps() {
  const formats = await getTimelineFormats();
  const formatsFilters = await getFormatsFilters();

  const structures = await getTimelineStructures();
  const structuresFilters = await getStructuresFilters();

  return {
    props: {
      formats,
      formatsFilters,
      structures,
      structuresFilters,
    },
  };
}

export default function TimelinePage({
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
          <DataProvider onlyTemporalData={true}>
            <SavedProjectsProvider>
              <TimelinePageContainer setIsLinkClicked={setIsLinkClicked} formats={formats} formatsFilters={formatsFilters} structures={structures} structuresFilters={structuresFilters} />
            </SavedProjectsProvider>
          </DataProvider>
      }
    </Page>
  );
}

function TimelinePageContainer({ setIsLinkClicked, formats, formatsFilters, structures, structuresFilters }) {
  const { locations, projects } = useData()

  return (
    <>
      {
        locations && projects ? <FilterProvider
            locations={locations}
            projects={projects}
            formats={formats}
            formatsFilters={formatsFilters}
            structures={structures}
            structuresFilters={structuresFilters}>
            <Layout numberOfSliderStates={NUMBER_OF_SLIDER_STATES} setIsLinkClicked={setIsLinkClicked}>
              <Timeline />
            </Layout>
          </FilterProvider> :
          <LoadingLayout />
      }
    </>
  );
}
