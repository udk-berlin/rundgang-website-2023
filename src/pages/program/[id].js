import React from "react";
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import { useWindowSize, WindowSizeProvider } from "@/providers/window_size";

export default function ProgramPage() {
  return (
    <Page title="locations">
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

function DataProviderChildren ({ id }) {
  const { projects, structures, structureFilters , formats, formatFilters } = useData()
  let components

  if (projects && structures && structureFilters && formats && formatFilters) {
    let format
    if (formats[id]) format = id
    let structure
    if (structures[id]) structure = id

    components = <FilterProvider
      projects={projects}
      structure={structure}
      structures={structures}
      structureFilters={structureFilters}
      formats={formats}
      format={format}
      formatFilters={formatFilters}>
      <Program />
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
