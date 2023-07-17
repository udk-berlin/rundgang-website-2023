import React, { useState } from "react";

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";

export default function LocationsPage () {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="locations">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <DataProvider>
            <SavedProjectsProvider>
              <LocationsPageContainer setIsLinkClicked={setIsLinkClicked} />
            </SavedProjectsProvider>
          </DataProvider>
      }
    </Page>
  );
}

function LocationsPageContainer({ setIsLinkClicked }) {
  const { locations, projects, structures, structureFilters , formats, formatFilters } = useData()

  return (
    <>
      {
        locations && projects && structures && structureFilters && formats && formatFilters ?
          <FilterProvider
            locations={locations}
            projects={projects}
            structures={structures}
            structureFilters={structureFilters}
            formats={formats}
            formatFilters={formatFilters}>
              <Locations setIsLinkClicked={setIsLinkClicked} />
          </FilterProvider> :
          <LoadingLayout />
      }
    </>
  );
}
