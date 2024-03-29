import React from "react";
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Locations from "@/components/pages/locations/locations";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import {useWindowSize, WindowSizeProvider} from "@/providers/window_size";

export default function LocationsPage() {
  return (
    <Page metaHeaderConfig={{ initialTitle: 'locations' }}>
      <WindowSizeProvider>
        <WindowSizeChildren />
      </WindowSizeProvider>
    </Page>
  );
}

function WindowSizeChildren() {
  const router = useRouter()
  const windowSize = useWindowSize()

  return (
    <SavedProjectsProvider>
      {
        windowSize ? (router && router.query && router.query.id) ?
          <DataProvider>
            <DataProviderChildren id={router.query.id} />
          </DataProvider> :
          <LoadingLayout /> :
          <></>
      }
    </SavedProjectsProvider>
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

    if (template === 'location-building') {
      location = data[0]
    }

    if (template === 'location-level') {
      location = filterByNodeId(Object.values(locations), data[0].id).data[0]
      level = Object.values(data[0].children)[0]
    }

    if (template === 'location-room') {
      location = filterByNodeId(Object.values(locations), data[0].id).data[0]
      level = Object.values(filterByNodeId(Object.values(locations), Object.values(data[0].children)[0].id).data[0].children)[0]
      room = Object.values(Object.values(data[0].children)[0].children)[0]
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
      <Locations location={location} />
    </FilterProvider>
  } else {
    components = <LoadingLayout />
  }

  return (
    <>
      {components}
    </>
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
