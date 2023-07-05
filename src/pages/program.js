import { getItems } from "@/utils/api/items";

import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getProgramFormats, getProgramStructures } from '@/utils/api/pages/program'

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
import { FilterProvider } from '@/providers/filter'
import { SavedProjectsProvider } from '@/providers/saved_projects'

// export async function getStaticProps () {
//   const projects = await getItems()

//   const formats = await getProgramFormats()
//   const formatsFilters = await getFormatsFilters()

//   const structures = await getProgramStructures()
//   const structuresFilters = await getStructuresFilters()

//   return { props: { projects, formats, formatsFilters, structures, structuresFilters} }
// }

export default function ProgramPage ({ projects, formats, formatsFilters, structures, structuresFilters }) {
  return (
    <Page title="program">
      {/*<SavedProjectsProvider>*/}
      {/*  <FilterProvider projects={projects} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters}>*/}
          <Program />
      {/*  </FilterProvider>*/}
      {/*</SavedProjectsProvider>*/}
    </Page>
  )
}
