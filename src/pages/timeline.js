import { getItems } from "@/utils/api/items";

import Page from "@/components/pages/page";
import Timeline from "@/components/pages/timeline/timeline";

export async function getStaticProps () {
  const projects = await getItems()
  return { props: { projects } }
}

export default function TimelinePage ({ projects }) {
  return (
    <Page>
      <Timeline projects={Object.values(projects)} />
    </Page>
  )
}
