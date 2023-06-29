import { getItems } from "@/utils/api/items";
import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getProgramFormats, getProgramStructures } from '@/utils/api/pages/program'

import { FilterProvider } from '@/providers/filter'
import { SavedProjectsProvider } from '@/providers/projects/saved'

import Page from "@/components/pages/page";
import SavedProjects from '@/components/pages/projects/saved/saved'

export async function getStaticProps () {
  const projects = await getItems()

  const formats = await getProgramFormats()
  const formatsFilters = await getFormatsFilters()

  const structures = await getProgramStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { projects, formats, formatsFilters, structures, structuresFilters} }
}

export default function SavedProjectsPage ({ projects, formats, formatsFilters, structures, structuresFilters }) {
  return (
    <Page>
      <SavedProjectsProvider>
        <FilterProvider projects={projects} structures={structures} formats={formats} formatsFilters={formatsFilters} structuresFilters={structuresFilters}>
          <SavedProjects />
        </FilterProvider>
      </SavedProjectsProvider>
    </Page>
  )
}
