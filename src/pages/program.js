import { getItems } from "@/utils/api/items";

import Page from "@/components/pages/page";
import Program from "@/components/pages/program/program";

export async function getStaticProps () {
  const projects = await getItems()
  return { props: { projects } }
}

export default function ProgramPage ({ projects }) {
  return (
    <Page>
      <Program projects={Object.values(projects)} />
    </Page>
  )
}
