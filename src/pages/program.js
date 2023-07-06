import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getProgramFormats, getProgramStructures } from '@/utils/api/pages/program'

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import { FilterProvider } from "@/providers/filter";
import { SavedProjectsProvider } from '@/providers/saved_projects'
import {gql, useQuery} from "@apollo/client";
import LoadingLayout from "@/components/layout/loading";
import React, {useState} from "react";

const PROJECTS_QUERY = gql`
  {
    items {
      name
      id
      origin {
        authors {
          id
          name
        }
      }
      parents {
        id
      }
      thumbnail
      thumbnail_full_size
    }
  }
`;

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
          <SavedProjectsProvider>
            {<ProgramPageContainer setIsLinkClicked={setIsLinkClicked} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters}/>}
          </SavedProjectsProvider>
      }
    </Page>
  )
}

function ProgramPageContainer ({ setIsLinkClicked, formats, formatsFilters, structures, structuresFilters }) {
  const projects = useQuery(PROJECTS_QUERY);

  return (
    <>
      {
        projects.loading || projects.error ?
          (
            <LoadingLayout />
          ) :
          (
            <FilterProvider projects={projects.data.items} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters} useFast={true}>
              <Program setIsLinkClicked={setIsLinkClicked} />
            </FilterProvider>
          )
      }
    </>
  )
}