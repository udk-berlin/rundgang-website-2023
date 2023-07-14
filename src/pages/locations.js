import React, {useState} from "react";

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
import {DataProvider, useData} from "@/providers/data";

export async function getStaticProps() {
  const formats = await getLocationsFormats();
  const formatsFilters = await getFormatsFilters();

  const structures = await getLocationsStructures();
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

export default function LocationsPage({
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
          <DataProvider>
            <SavedProjectsProvider>
              <LocationsPageContainer setIsLinkClicked={setIsLinkClicked} formats={formats} formatsFilters={formatsFilters} structures={structures} structuresFilters={structuresFilters} />
            </SavedProjectsProvider>
          </DataProvider>
      }
    </Page>
  );
}

function LocationsPageContainer({ setIsLinkClicked, formats, formatsFilters, structures, structuresFilters }) {
  const { locations, projects } = useData()

  return (
    <>
      {
        locations && projects ?
          <FilterProvider
            locations={locations}
            projects={projects}
            formats={formats}
            formatsFilters={formatsFilters}
            structures={structures}
            structuresFilters={structuresFilters}
            useFast={true}
          >
            <Layout defaultSliderPosition={2} setIsLinkClicked={setIsLinkClicked}>
              <Locations />
            </Layout>
          </FilterProvider> :
          <LoadingLayout />
      }
    </>
  );
}
