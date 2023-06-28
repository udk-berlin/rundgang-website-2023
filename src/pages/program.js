import { getItems } from "@/utils/api/items";

import { getFormatsFilters } from '@/utils/api/formats'
import { getStructuresFilters } from "@/utils/api/structures";
import { getProgramStructures } from '@/utils/api/pages/program'

import { FilterProvider }  from "@/providers/filter";

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";
export async function getStaticProps () {
  const projects = await getItems()

  const formatsFilters = await getFormatsFilters()

  const structures = await getProgramStructures()
  const structuresFilters = await getStructuresFilters()

  return { props: { projects, formatsFilters, structures, structuresFilters} }
}

export default function ProgramPage ({ projects, formatsFilters, structures, structuresFilters }) {
  console.log(formatsFilters)
  //console.log(structures)
  return (
    <Page>
      <FilterProvider projects={projects} structures={structures} formatsFilters={formatsFilters} structuresFilters={structuresFilters}>
        <Program />
      </FilterProvider>
    </Page>
  )
}
