import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getProgramFormats, getProgramStructures } from '@/utils/api/pages/program'

import { FilterProvider } from "@/providers/filter";

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import { SavedProjectsProvider } from '@/providers/saved_projects'

import LoadingLayout from "@/components/layout/loading";
import React, {useState} from "react";
import {DataProvider, useData} from "@/providers/data";

export async function getStaticProps () {
  const formats = await getProgramFormats()
  const formatsFilters = await getFormatsFilters()

  const structures = await getProgramStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { formats, formatsFilters, structures, structuresFilters} }
}

export default function ProgramPage ({ formats, formatsFilters, structures, structuresFilters }) {
  const [isLinkClicked, setIsLinkClicked] = useState(false)

  return (
    <Page title="program">
      {
        isLinkClicked ?
          <LoadingLayout /> :
          <DataProvider>
            <SavedProjectsProvider>
              <ProgramPageContainer setIsLinkClicked={setIsLinkClicked} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters}/>
            </SavedProjectsProvider>
          </DataProvider>
      }
    </Page>
  )
}

function ProgramPageContainer ({ setIsLinkClicked, formats, formatsFilters, structures, structuresFilters }) {
  const { projects } = useData()

  return (
    <>
      {
        projects  ?
          <FilterProvider
            projects={projects}
            structures={structures}
            formats={formats}
            formatsFilters={formatsFilters}
            structuresFilters={structuresFilters}
            useFast={true}>
            <Program setIsLinkClicked={setIsLinkClicked} />
          </FilterProvider>
          : <LoadingLayout />
      }
    </>
  )
}