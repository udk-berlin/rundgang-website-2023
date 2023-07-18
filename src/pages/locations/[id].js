import React, { useState } from "react";
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import {LinkProvider, useLink} from "@/providers/link";

export default function LocationsPage() {
  return (
    <Page title="locations">
      <LinkProvider>
        <LinkProviderChildren />
      </LinkProvider>
    </Page>
  );
}

function LinkProviderChildren() {
  const router = useRouter()
  const link = useLink()

  return (
    <>
      {
        link.clicked || !router || !router.query || !router.query.id ?
          <LoadingLayout /> :
          <DataProvider>
            <DataProviderChildren id={router.query.id} />
          </DataProvider>
      }
    </>
  )
}

function DataProviderChildren({ id }) {
  const { locations, projects, structures, structureFilters , formats, formatFilters } = useData()
  let components

  if (locations && projects && structures && structureFilters && formats && formatFilters) {
    const { data, template } = filterByNodeId(Object.values(locations), id)

    let location
    let level
    let room

    if (template === 'location-building' || template === 'location-level' || template === 'location-room') {
      location = data[0]

      if (template === 'location-level' || template === 'location-room') {
        level = Object.values(location.children)[0]

        if (template === 'location-room') {
          room = Object.values(level.children)[0]
        }
      }
    }

    components = <FilterProvider
      locations={locations}
      location={location}
      floor={level}
      room={room}
      projects={projects}
      structures={structures}
      structureFilters={structureFilters}
      formats={formats}
      formatFilters={formatFilters}>
      <Locations />
    </FilterProvider>
  } else {
    components = <LoadingLayout />
  }

  return (
    <SavedProjectsProvider>
      {components}
    </SavedProjectsProvider>
  )
}


function filterByNodeId(array, nodeId) {
  let template

  const getChildren = (result, object) => {
    if (object.id === nodeId) {
      result.push(object);
      template = object.template
      return result;
    }
    const children = Object.values(object.children).reduce(getChildren, []);
    if (children.length) result.push({ ...object, children });

    return result;
  };

  return {data: array.reduce(getChildren, []), template: template};
}
