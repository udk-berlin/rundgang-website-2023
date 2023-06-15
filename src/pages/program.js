import { getItems } from "@/utils/api/items";

import Page from "@/components/page/page";
import Program from "@/components/pages/program/program";

export async function getStaticProps () {
  const events = await getItems()
  return { props: { events } }
}

export default function ProgramPage ({ events }) {
  return (
    <Page>
     <Program events={Object.values(events)} />
    </Page>
  )
}
