import React from "react";
import { useRouter } from 'next/router'

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import LoadingLayout from "@/components/layout/loading";

import { DataProvider, useData } from "@/providers/data/data";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import { FilterProvider } from "@/providers/filter";
import { LinkProvider, useLink } from "@/providers/link";

export default function ProgramPage() {
  return (
    <Page title="program">
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
        link.clicked || !router || !router.query || !router.query.id  ?
          <LoadingLayout /> :
          <DataProvider>
            <DataProviderChildren id={router.query.id} />
          </DataProvider>
      }
    </>
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
    <SavedProjectsProvider>
      {components}
    </SavedProjectsProvider>
  )
}
