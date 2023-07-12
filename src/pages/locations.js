import React, {useState} from "react";

import { getItems } from '@/utils/api/items'
import { getFormatsFilters } from "@/utils/api/formats";
import { getStructuresFilters } from "@/utils/api/structures";
import {
  getLocationsFormats,
  getLocationsStructures,
} from "@/utils/api/pages/locations";

import { FilterProvider } from "@/providers/filter";

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";
import { SavedProjectsProvider } from "@/providers/saved_projects";
import LoadingLayout from "@/components/layout/loading";
import Layout from "@/components/layout/layout";

export async function getStaticProps() {
  const projects = await getItems();

  const formats = await getLocationsFormats();
  const formatsFilters = await getFormatsFilters();

  const structures = await getLocationsStructures();
  const structuresFilters = await getStructuresFilters();

  return {
    props: {
      projects,
      formats,
      formatsFilters,
      structures,
      structuresFilters,
    },
  };
}

export default function LocationsPage({
  projects,
  formats,
  formatsFilters,
  structures,
  structuresFilters,
}) {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="locations">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <SavedProjectsProvider>
            <FilterProvider
              projects={projects}
              formats={formats}
              formatsFilters={formatsFilters}
              structures={structures}
              structuresFilters={structuresFilters}
            >
              <Layout defaultSliderPosition={2} setIsLinkClicked={setIsLinkClicked}>
                {/* <Locations locations={locations} /> */}
              </Layout>
            </FilterProvider>
          </SavedProjectsProvider>
      }
    </Page>
  );
}
